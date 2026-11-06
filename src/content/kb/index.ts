/** All knowledge tables and the items generated from them. */
import { AI_DRAFT } from '../define';
import type { McqItem, TrueFalseItem } from '../schema';
import { seeded, shuffle } from '@/engine/random';
import { BACTERIA, BACTERIA_GROUP_TITLE, BACTERIA_TRAITS } from './bacteria';
import { generateFromTable, type GenIssue, type TableSpec } from './generate';
import { VIRUSES, VIRUS_GROUP_TITLE, VIRUS_TRAITS, type Virus } from './viruses';
import { GLOMERULAR, GN_GROUP_TITLE, GN_TRAITS, type GnRow, type GnTrait } from './glomerular';

export const BACTERIA_SPEC: TableSpec<(typeof BACTERIA)[number]> = {
  table: 'bact',
  rows: BACTERIA,
  traits: BACTERIA_TRAITS,
  baseTrait: 'gram',
  noun: 'organism',
  nounPlural: 'organisms',
  groupTitle: (g) => BACTERIA_GROUP_TITLE[g as keyof typeof BACTERIA_GROUP_TITLE],
  idStem: (row, clues) => `A clinical isolate grows ${BACTERIA_GROUP_TITLE[row.group]} (${row.morphology}). The isolate is ${clues}. Which of the following is the most likely organism?`,
};

export const VIRUS_SPEC: TableSpec<Virus> = {
  table: 'virus',
  rows: VIRUSES,
  traits: VIRUS_TRAITS,
  baseTrait: 'genome',
  noun: 'virus',
  nounPlural: 'viruses',
  askTraits: ['envelope', 'segmented'],
  groupTitle: (g) => VIRUS_GROUP_TITLE[g as keyof typeof VIRUS_GROUP_TITLE],
  idStem: (row, clues) => `A virus belongs to the ${VIRUS_GROUP_TITLE[row.group]} and is ${clues}. Which of the following viruses is it?`,
};

/** "double-stranded DNA, enveloped" — the structure of a virus as Step 1 asks it. */
export function virusStructure(v: Virus): string {
  const t = v.traits;
  const strands = VIRUS_TRAITS.strands.phrase(t.strands!);
  const sense = t.sense ? ` ${VIRUS_TRAITS.sense.phrase(t.sense)}` : '';
  return `${strands}${sense} ${t.genome}, ${t.envelope ? 'enveloped' : 'nonenveloped'}`;
}

function virusStructureItems(): { items: McqItem[]; issues: GenIssue[] } {
  const issues: GenIssue[] = [];
  const descriptors = [...new Set(VIRUSES.map(virusStructure))];
  const items = VIRUSES.map((v): McqItem => {
    const correct = virusStructure(v);
    const rnd = seeded(`${v.id}:structure`);
    const wrong = shuffle(descriptors.filter((d) => d !== correct), rnd).slice(0, 4);
    if (wrong.length < 3) issues.push({ id: v.id, problem: 'not enough structure descriptors' });
    const opts = shuffle([correct, ...wrong], rnd);
    const cap = (t: string) => t[0]!.toUpperCase() + t.slice(1);
    const options = opts.map((text, i) => ({
      id: 'abcde'[i]!,
      text: cap(text),
      whyWrong: text === correct ? undefined : `${v.name} is ${correct}, not ${text}.`,
    }));
    return {
      kind: 'mcq',
      id: `kb:virus:${v.id}:structure`,
      conceptIds: [v.concept],
      difficulty: 2,
      review: AI_DRAFT,
      version: 1,
      stem: `Which of the following best describes the genome and envelope of ${v.name}?`,
      options,
      answerId: options[opts.indexOf(correct)]!.id,
      mini: `${v.name}: ${correct}.`,
      mechanism: '',
      takeaway: v.summary,
      estSeconds: 30,
    };
  });
  return { items, issues };
}

export const GN_SPEC: TableSpec<GnRow> = {
  table: 'gn',
  rows: GLOMERULAR,
  traits: GN_TRAITS,
  noun: 'disease',
  nounPlural: 'diseases',
  linkVerb: () => 'has',
  groupTitle: (g) => GN_GROUP_TITLE[g as keyof typeof GN_GROUP_TITLE],
  idStem: (row, clues) => `A patient has one of the ${GN_GROUP_TITLE[row.group]}. The renal biopsy has ${clues}. Which of the following is the most likely diagnosis?`,
};

/**
 * Findings that would both be defensible answers must never compete: e.g. "no immune deposits" vs
 * "few or no immune deposits (pauci-immune)", or two kinds of foot-process effacement.
 */
export function similarFinding(a: string, b: string): boolean {
  const neg = (t: string) => /no immune deposits|often negative/.test(t);
  const eff = (t: string) => /effacement/.test(t);
  const cres = (t: string) => /crescent/.test(t);
  return (neg(a) && neg(b)) || (eff(a) && eff(b)) || (cres(a) && cres(b));
}

const GN_LABEL: Record<'lm' | 'em' | 'if', string> = { lm: 'light microscopy', em: 'electron microscopy', if: 'immunofluorescence' };

/**
 * Biopsy-finding questions: "Which finding is expected on <modality> in <disease>?" Options are the
 * recorded findings of other diseases for the same modality (distinct text, so one best answer),
 * plus true/false statements that swap a finding with another disease's.
 */
function gnFindingItems(): { items: (McqItem | TrueFalseItem)[]; issues: GenIssue[] } {
  const items: (McqItem | TrueFalseItem)[] = [];
  const issues: GenIssue[] = [];
  for (const k of ['lm', 'em', 'if'] as const satisfies readonly GnTrait[]) {
    const withK = GLOMERULAR.filter((r) => r.traits[k] !== undefined);
    for (const row of withK) {
      const correct = String(row.traits[k]);
      const others = [...new Set(withK.filter((r) => r !== row && r.traits[k] !== correct).map((r) => String(r.traits[k])))].filter((t) => !similarFinding(t, correct));
      const rnd = seeded(`${row.id}:${k}`);
      const wrong = shuffle(others, rnd).slice(0, 4);
      if (wrong.length < 3) {
        issues.push({ id: `${row.id}:${k}`, problem: 'not enough distinct findings' });
        continue;
      }
      const owner = (text: string) => withK.filter((r) => String(r.traits[k]) === text).map((r) => r.name);
      const opts = shuffle([correct, ...wrong], rnd);
      const options = opts.map((text, i) => ({
        id: 'abcde'[i]!,
        text: text[0]!.toUpperCase() + text.slice(1),
        whyWrong: text === correct ? undefined : `That ${GN_LABEL[k]} finding fits ${owner(text).join(' or ')}, not ${row.name}.`,
      }));
      items.push({
        kind: 'mcq',
        id: `kb:gn:${row.id}:${k}`,
        conceptIds: [row.concept],
        difficulty: 3,
        review: AI_DRAFT,
        version: 1,
        stem: `A renal biopsy is performed in a patient with ${row.name}. Which of the following is most likely on ${GN_LABEL[k]}?`,
        options,
        answerId: options[opts.indexOf(correct)]!.id,
        mini: `${row.name}: ${GN_LABEL[k]} shows ${correct}.`,
        mechanism: '',
        takeaway: row.summary,
        estSeconds: 40,
      });
      // One true and one false statement per disease, alternating modality.
      const swap = wrong[0]!;
      const tfBase = { conceptIds: [row.concept], difficulty: 3 as const, review: AI_DRAFT, version: 1, mini: row.summary };
      if ((row.id.length + k.length) % 2 === 0) {
        items.push({ ...tfBase, kind: 'tf', id: `kb:gn:${row.id}:${k}:tf`, statement: `In ${row.name}, ${GN_LABEL[k]} shows ${correct}.`, isTrue: true, correction: `Correct: ${correct}.` });
      } else {
        items.push({ ...tfBase, kind: 'tf', id: `kb:gn:${row.id}:${k}:tf`, statement: `In ${row.name}, ${GN_LABEL[k]} shows ${swap}.`, isTrue: false, correction: `${row.name}: ${GN_LABEL[k]} shows ${correct}. (${swap[0]!.toUpperCase() + swap.slice(1)} fits ${owner(swap).join(' or ')}.)` });
      }
    }
  }
  return { items, issues };
}

const bacteria = generateFromTable(BACTERIA_SPEC);
const viruses = generateFromTable(VIRUS_SPEC);
const structures = virusStructureItems();
const gn = generateFromTable(GN_SPEC);
const gnFindings = gnFindingItems();

export const KB_ITEMS: (McqItem | TrueFalseItem)[] = [...bacteria.items, ...viruses.items, ...structures.items, ...gn.items, ...gnFindings.items];
export const KB_ISSUES: GenIssue[] = [...bacteria.issues, ...viruses.issues, ...structures.issues, ...gn.issues, ...gnFindings.issues];
