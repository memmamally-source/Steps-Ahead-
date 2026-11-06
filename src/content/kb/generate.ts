/**
 * Question generators for knowledge tables. Correct by construction:
 *  - identification and trait questions only use traits recorded on every option shown, and the
 *    generator checks that exactly one option satisfies the stem;
 *  - every distractor's "why wrong" is the specific recorded trait that rules it out;
 *  - hallmark questions use authored hallmarks that are unique to their row.
 * Ids are deterministic (`kb:<table>:<row>:<kind>…`), so learner history stays linked.
 */
import { AI_DRAFT } from '../define';
import type { Difficulty, McqItem, McqOption, TrueFalseItem } from '../schema';
import { seeded, shuffle } from '@/engine/random';
import { definitelyDiffers, listJoin, matches, type TraitDef, type TraitValue } from './traits';

export interface KbRow {
  id: string;
  name: string;
  concept: string;
  group: string;
  traits: Partial<Record<string, TraitValue>>;
  idClues: string[];
  /** Authored associations unique to the row. `exclude` keeps rows sharing the underlying trait out of the options. */
  hallmarks: (string | Hallmark)[];
  summary: string;
  /** Name is plural ("Viridans group streptococci"). */
  plural?: boolean;
}

export interface Hallmark {
  text: string;
  exclude?: Record<string, TraitValue>;
}

const hallText = (h: string | Hallmark) => (typeof h === 'string' ? h : h.text);

export interface TableSpec<R extends KbRow> {
  table: string;
  rows: R[];
  traits: Record<string, TraitDef>;
  /** Trait used to rank plausible distractors (e.g. gram stain): same group first, then same base trait. */
  baseTrait?: string;
  /** Builds the identification stem from the clue phrases. */
  idStem: (row: R, clueText: string) => string;
  /** Noun for options, e.g. 'organism', 'virus', 'disease', and its plural. */
  noun: string;
  nounPlural: string;
  /** Verb linking a row to a trait phrase in explanations (default 'is'; 'has' for findings). */
  linkVerb?: (traitKey: string) => string;
  /** Human title of each group; the stem names the group, so it counts as a clue. */
  groupTitle: (group: string) => string;
  difficulty?: { id: Difficulty; trait: Difficulty; hallmark: Difficulty; tf: Difficulty };
  /** Extra traits to ask about for every row (beyond its identifying clues). */
  askTraits?: string[];
}

const LETTERS = ['a', 'b', 'c', 'd', 'e'];

function build(id: string, conceptIds: string[], difficulty: Difficulty, stem: string, answer: string, distractors: { name: string; why: string }[], mini: string, takeaway: string): McqItem {
  const rnd = seeded(id);
  const all = shuffle([{ name: answer, why: undefined as string | undefined }, ...distractors], rnd);
  const options: McqOption[] = all.map((o, i) => ({ id: LETTERS[i]!, text: o.name, whyWrong: o.why }));
  const answerId = options.find((o) => o.text === answer)!.id;
  return { kind: 'mcq', id, conceptIds, difficulty, review: AI_DRAFT, version: 1, stem, options, answerId, mini, mechanism: '', takeaway, estSeconds: 40 };
}

export interface GenIssue {
  id: string;
  problem: string;
}

export function generateFromTable<R extends KbRow>(spec: TableSpec<R>): { items: (McqItem | TrueFalseItem)[]; issues: GenIssue[] } {
  const items: (McqItem | TrueFalseItem)[] = [];
  const issues: GenIssue[] = [];
  const diff = spec.difficulty ?? { id: 3, trait: 2, hallmark: 2, tf: 2 };
  const phrase = (k: string, v: TraitValue) => (k === '__group' ? `one of the ${spec.groupTitle(String(v))}` : spec.traits[k]!.phrase(v));
  const withGroup = (r: R): Record<string, TraitValue | undefined> => ({ ...r.traits, __group: r.group });

  const verb = (r: R) => (r.plural ? 'are' : 'is');
  const link = (r: R, k: string) => (k !== '__group' && spec.linkVerb ? spec.linkVerb(k) : verb(r));
  /** Most plausible first: same group, then same base trait (e.g. same Gram stain), then the rest. */
  const rank = (target: R, pool: R[], seed: string) => {
    const rnd = seeded(seed);
    const base = spec.baseTrait;
    const tier = (r: R) => (r.group === target.group ? 0 : base && r.traits[base] !== undefined && r.traits[base] === target.traits[base] ? 1 : 2);
    return shuffle(pool, rnd).sort((a, b) => tier(a) - tier(b));
  };
  /** Distractors that definitely differ from the clues, most plausible first. */
  const pickDistractors = (target: R, clues: Record<string, TraitValue>, seed: string) => {
    const pool = spec.rows.filter((r) => r !== target && definitelyDiffers(withGroup(r), clues));
    return rank(target, pool, seed)
      .slice(0, 4)
      .map((r) => {
        const traits = withGroup(r);
        const k = definitelyDiffers(traits, clues)!;
        return { name: r.name, why: `${r.name} ${link(r, k)} ${phrase(k, traits[k]!)}.` };
      });
  };

  for (const row of spec.rows) {
    // 1. Identification from clues.
    if (row.idClues.length) {
      const keys = row.idClues;
      const clues: Record<string, TraitValue> = { __group: row.group };
      for (const k of keys) {
        const v = row.traits[k];
        if (v === undefined) issues.push({ id: row.id, problem: `idClue ${k} not recorded` });
        else clues[k] = v;
      }
      const matching = spec.rows.filter((r) => matches(withGroup(r), clues));
      if (matching.length !== 1) issues.push({ id: row.id, problem: `clues match ${matching.length} rows: ${matching.map((r) => r.id).join(', ')}` });
      const ds = pickDistractors(row, clues, `${row.id}:id`);
      if (ds.length < 3) issues.push({ id: row.id, problem: 'fewer than 3 valid distractors for identification' });
      else {
        const phrases = keys.map((k) => phrase(k, clues[k]!));
        items.push(build(`kb:${spec.table}:${row.id}:id`, [row.concept], diff.id, spec.idStem(row, listJoin(phrases)), row.name, ds, `${row.name} ${row.idClues[0] ? link(row, row.idClues[0]) : verb(row)} ${listJoin(phrases)}.`, row.summary));
      }
    }

    // 2. "Which of the following is <trait>?" for each identifying trait with an asked value.
    for (const k of [...new Set([...row.idClues, ...(spec.askTraits ?? [])])]) {
      const v = row.traits[k];
      if (v === undefined || !spec.traits[k]?.asks?.includes(v)) continue;
      const clues = { [k]: v };
      const ds = pickDistractors(row, clues, `${row.id}:trait:${k}`);
      if (ds.length < 3) continue;
      items.push(
        build(`kb:${spec.table}:${row.id}:trait:${k}`, [row.concept], diff.trait, `Which of the following ${spec.nounPlural} is ${phrase(k, v)}?`, row.name, ds, `${row.name} ${verb(row)} ${phrase(k, v)}.`, row.summary),
      );
    }

    // 3. Hallmarks (authored as unique to the row; `exclude` removes rows sharing the trait behind it).
    row.hallmarks.forEach((h, i) => {
      const exclude = typeof h === 'string' ? undefined : h.exclude;
      const pool = spec.rows.filter((r) => r !== row && (!exclude || !matches(r.traits, exclude)));
      const others = rank(row, pool, `${row.id}:hall:${i}`).slice(0, 4);
      items.push(
        build(
          `kb:${spec.table}:${row.id}:hall:${i + 1}`,
          [row.concept],
          diff.hallmark,
          `Which of the following ${spec.nounPlural} is classically associated with ${hallText(h)}?`,
          row.name,
          others.map((o) => ({ name: o.name, why: `${o.name}: ${o.summary}` })),
          `${row.name}: ${hallText(h)}.`,
          row.summary,
        ),
      );
    });

    // 4. Fact or Fiction: the first identifying trait plus every askTrait. Each yields a true
    //    statement and, where an alternative value exists, a false one (alternating to keep balance).
    const tfTraits = [...new Set([row.idClues.find((x) => spec.traits[x]?.asks), ...(spec.askTraits ?? [])].filter((x): x is string => !!x && row.traits[x] !== undefined))];
    tfTraits.forEach((k, idx) => {
      const v = row.traits[k]!;
      const alternatives = (spec.traits[k]!.asks ?? []).filter((x) => x !== v);
      const tf = (isTrue: boolean, value: TraitValue): TrueFalseItem => ({
        kind: 'tf',
        id: `kb:${spec.table}:${row.id}:tf:${k}:${isTrue ? 'true' : 'false'}`,
        conceptIds: [row.concept],
        difficulty: diff.tf,
        review: AI_DRAFT,
        version: 1,
        statement: `${row.name} ${verb(row)} ${phrase(k, value)}.`,
        isTrue,
        correction: `${row.name} ${verb(row)} ${phrase(k, v)}.`,
        mini: row.summary,
      });
      // Primary trait: both statements; extra traits: one, alternating true/false by position.
      if (idx === 0) {
        items.push(tf(true, v));
        if (alternatives.length) items.push(tf(false, alternatives[0]!));
      } else if (alternatives.length && (idx + row.id.length) % 2 === 0) items.push(tf(false, alternatives[0]!));
      else items.push(tf(true, v));
    });
  }
  return { items, issues };
}
