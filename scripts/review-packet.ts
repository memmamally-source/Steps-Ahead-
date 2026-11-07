/**
 * Writes a medical-review packet for curriculum-linked content.
 * Usage: npx vite-node scripts/review-packet.ts -- <batch1|batch2|cellular1|cellular2|lab1|gen1|gen2|gen3|conceptIdPrefix> <output.md> "<title>"
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { describeFigure, figureSvg, validateFigure, type Figure } from '../src/content/figures';
import { ALL_CONCEPTS, ALL_ITEMS } from '../src/content/index';
import { molecularBatch1 } from '../src/content/biochem/molecular1';
import { molecularBatch2 } from '../src/content/biochem/molecular2';
import { cellularBatch1 } from '../src/content/biochem/cellular1';
import { cellularBatch2 } from '../src/content/biochem/cellular2';
import { labBatch1 } from '../src/content/biochem/lab1';
import { geneticsBatch1 } from '../src/content/biochem/gen1';
import { geneticsBatch2 } from '../src/content/biochem/gen2';
import { geneticsBatch3 } from '../src/content/biochem/gen3';
import { globalCategories } from '../src/content/connectionsCatalog';
import { defensiblePartitions, redHerrings, solutions } from '../src/content/connectionsVerify';
import { MANUAL_AUDIT } from '../src/content/connectionsAudit';
import { factEvidence, itemRelevance, type GameItem } from '../src/content/schema';
import { isPlayable, objectiveRelevance, objectivesOf } from '../src/content/curriculum/audit';
import { BIOCHEMISTRY } from '../src/content/curriculum/biochemistry';

const BATCHES = { batch1: molecularBatch1, batch2: molecularBatch2, cellular1: cellularBatch1, cellular2: cellularBatch2, lab1: labBatch1, gen1: geneticsBatch1, gen2: geneticsBatch2, gen3: geneticsBatch3 } as const;
const [sel = 'batch1', out = 'docs/subjects/review/packet.md', title = 'Review packet'] = process.argv.slice(2).filter((a) => a !== '--');
const batch = BATCHES[sel as keyof typeof BATCHES];
const conceptIdsOfBatch = batch ? new Set(batch.concepts.map((c) => c.id)) : undefined;
const concepts = ALL_CONCEPTS.filter((c) => c.curriculum && (conceptIdsOfBatch ? conceptIdsOfBatch.has(c.id) : c.id.startsWith(sel)));
const ids = new Set(concepts.map((c) => c.id));
const items = ALL_ITEMS.filter((i) => i.conceptIds.some((c) => ids.has(c)));
const catalog = globalCategories(ALL_ITEMS);
const lines: string[] = [];
const L = (...s: string[]) => lines.push(...s);
const letter = (n: number) => String.fromCharCode(65 + n);
const tag = (i: GameItem) =>
  `**${itemRelevance(i).toUpperCase()}** · depth ${(i.depth ?? '—').toUpperCase()} · \`${i.id}\` · ${i.reasoning ?? '—'} → **${i.depth ?? '—'}** · difficulty ${i.difficulty} · ${(i.objectiveIds ?? []).map((o) => `\`${o}\``).join(', ')}`;
const count = (f: (i: GameItem) => boolean) => items.filter(f).length;
const evidence = concepts.flatMap((c) => factEvidence(c));

L(`# ${title}`, '');
L('Status: **draft, AI-drafted, not medically reviewed.** Reviewer: mark each concept approved, needs changes or rejected, with notes. A citation alone is not approval.', '');
L('## How to read this packet', '');
L('- Options are listed in their **stored** order (deterministically shuffled per item, with opaque ids). Learners see a fresh random order on every presentation; answers are checked by option id, never by position. ✅ marks the correct option.');
L('- Each item shows its **reasoning task** and the **depth** that follows from it: recall/identification → recognition; mechanism → mechanism; interpretation/prediction/comparison/multistep → application. A vignette that only asks for the classic diagnosis is identification (recognition), not application. Application items list the inferential steps they require.');
L('- Facts are split into **verified** (a supporting source was read in full text or as a published abstract/summary and states the claim) and **awaiting direct confirmation** (reasoned from pathway logic, or supported only by sources checked for existence). Awaiting facts block approval in the validator until a reviewer confirms them against a source.');
L('- Citation “checked”: **full-text** (page read), **summary** (published abstract or summary read), **existence** (record confirmed but full text not accessible).');
L('- Mastery: true/false and crossword answers count as weaker recognition evidence; repeating an item within 7 days adds little; “strong” needs at least 3 distinct items, including a mechanism or application item.');
L('- Connections puzzles are checked for a single solution against the **global category catalog** (every bank category, every curated category and decoy, and a catalog of medically plausible groupings such as inheritance patterns, drug classes and toxin sources), not only against their own decoys. The daily builder applies the same check to every board it generates.', '');
L('- **Two independent classifications.** *Step 1 relevance*: **CORE** (topic and depth supported by the official outline and mainstream Step 1 preparation), **SUPPLEMENTARY** (within the curriculum but beyond core depth; shown less often in games), **SPECIALIST** (obscure or postgraduate; never shown in games, excluded from coverage) or **UNREVIEWED** (not yet evaluated; never assumed core). *Cognitive depth*: **RECOGNITION**, **MECHANISM** or **APPLICATION**, from the reasoning task. A complex vignette on a classic mechanism can be CORE; a simple recall of an obscure finding can be SPECIALIST. The ~80/20 recognition-and-mechanism vs application mix is a flexible game-design target, not a relevance judgement.', '');
L('## Summary', '');
L('| Measure | Value |', '|---|---|');
L(`| Concepts | ${concepts.length} |`, `| Objectives taught | ${new Set(concepts.flatMap((c) => c.curriculum!)).size} |`);
L(`| Facts verified / awaiting direct confirmation | ${evidence.filter((e) => e === 'verified').length} / ${evidence.filter((e) => e === 'pending').length} |`);
L(`| **Playable learning items (total)** | **${count(isPlayable)}** |`);
L(`| — MCQs / true-false / crossword clues | ${count((i) => i.kind === 'mcq')} / ${count((i) => i.kind === 'tf')} / ${count((i) => i.kind === 'clue')} |`);
L(`| — Mechanism Lab sequences / Match Up sets | ${count((i) => i.kind === 'sequence')} / ${count((i) => i.kind === 'match')} |`);
L(`| — Complete Connections puzzles / Mystery Patient cases | ${count((i) => i.kind === 'connections')} / ${count((i) => i.kind === 'case')} |`);
L(`| Connections category-bank entries (builder input, **not** playable alone; excluded from item counts and coverage) | ${count((i) => i.kind === 'group')} |`);
const std = items.filter((i) => i.kind !== 'group');
const relCount = <T,>(xs: T[], f: (x: T) => string) => (['core', 'supplementary', 'specialist', 'unreviewed'] as const).map((r) => xs.filter((x) => f(x) === r).length).join(' / ');
L(`| Items, Step 1 relevance: CORE / SUPPLEMENTARY / SPECIALIST / UNREVIEWED | ${relCount(std, itemRelevance)} |`);
L(`| Items, cognitive depth: RECOGNITION / MECHANISM / APPLICATION | ${(['recognition', 'mechanism', 'application'] as const).map((d) => std.filter((i) => i.depth === d).length).join(' / ')} |`);
const objIds = new Set(concepts.flatMap((c) => c.curriculum!));
const objs = objectivesOf(BIOCHEMISTRY).map((x) => x.item).filter((o) => objIds.has(o.id));
L(`| Objectives, Step 1 relevance: CORE / SUPPLEMENTARY / SPECIALIST / UNREVIEWED | ${relCount(objs, objectiveRelevance)} |`);
for (const r of ['recall', 'identification', 'mechanism', 'interpretation', 'prediction', 'comparison', 'multistep'] as const) L(`| Playable items: ${r} | ${count((i) => isPlayable(i) && i.reasoning === r)} |`);
L('');

const opts = (i: { options: { id: string; text: string; whyWrong?: string }[]; answerId: string }) =>
  i.options.map((o, n) => `  - ${o.id === i.answerId ? '✅' : '◻️'} ${letter(n)}. ${o.text}${o.whyWrong ? ` — _${o.whyWrong}_` : ''}`);
// Figures are written as standalone SVG files next to the packet and embedded by relative link.
const figureLines = (id: string, f: Figure | undefined): string[] => {
  if (!f) return [];
  const file = `figures/${id.replace(/[^a-z0-9-]+/gi, '_')}.svg`;
  mkdirSync(join(dirname(out), 'figures'), { recursive: true });
  writeFileSync(join(dirname(out), file), figureSvg(f));
  const problems = validateFigure(f);
  return [`  - Figure (${f.kind}, original, generated from data${problems.length ? `; VALIDATION PROBLEMS: ${problems.join('; ')}` : '; passes validation'}):`, '', `    ![${f.alt}](${file})`, '', `  - Figure text: ${describeFigure(f)}`];
};
const stepLines = (i: GameItem) => (i.kind === 'mcq' && i.steps?.length ? [`  - Steps: ${i.steps.map((s, n) => `(${n + 1}) ${s}`).join(' ')}`] : []);

for (const c of concepts) {
  const ev = factEvidence(c);
  L(`## ${c.title} (\`${c.id}\`)`, '', `Objectives: ${c.curriculum!.map((o) => `\`${o}\``).join(', ')}`, '');
  L('**Citations**', '');
  c.citations.forEach((x, n) => L(`${n + 1}. ${x.locator}${x.ref ? ` — ${x.ref}` : ''} — <${x.url}> — checked: ${x.checked}`));
  const fact = (n: number) => `- ${c.facts[n]} [${(c.factRefs?.[n] ?? []).map((r) => r + 1).join(', ')}]`;
  const verified = c.facts.map((_, n) => n).filter((n) => ev[n] === 'verified');
  const pending = c.facts.map((_, n) => n).filter((n) => ev[n] === 'pending');
  L('', '**Verified facts** [supporting citations]', '', ...verified.map(fact));
  if (pending.length) L('', '**Awaiting direct source confirmation** (reasoned or existence-only; must be confirmed before approval)', '', ...pending.map(fact));
  L('', `**Mechanism.** ${c.mechanism}`, '', `**Quick.** ${c.quick}`, '', '**Detailed**', '', ...c.detailed.map((d) => `> ${d}\n`));
  L(`**Misconception.** ${c.misconception}`, '', `**Takeaway.** ${c.takeaway}`, '');
  for (const i of items.filter((x) => x.conceptIds[0] === c.id)) {
    if (i.kind === 'mcq') {
      L(`- **MCQ** ${tag(i)}`, `  - ${i.stem}`, ...figureLines(i.id, i.figure), ...opts(i), ...stepLines(i), `  - Explanation: ${i.mini}`);
    } else if (i.kind === 'tf') {
      L(`- **True/false** ${tag(i)}: ${i.statement} → **${i.isTrue ? 'True' : 'False'}**. ${i.correction}`);
    } else if (i.kind === 'clue') {
      L(`- **Crossword** ${tag(i)}: ${i.clue} → **${i.answer}**`);
    } else if (i.kind === 'case') {
      L(`- **Mystery Patient** ${tag(i)}: ${i.title}`, ...i.stages.map((s) => `  - ${s.label}: ${s.text}`), `  - Q: ${i.question}`, ...figureLines(i.id, i.figure), ...opts(i), `  - ${i.explanation}`,
        `  - Differentials: ${i.differentials.map((d) => `${d.name} (${d.why})`).join('; ')}`);
    } else if (i.kind === 'sequence') {
      L(`- **Mechanism Lab** ${tag(i)}: ${i.title}. ${i.prompt}`, ...i.steps.map((s, n) => `  ${n + 1}. ${s}`), `  - ${i.explanation}`);
    } else if (i.kind === 'match') {
      L(`- **Match Up** ${tag(i)}: ${i.title}. ${i.prompt}`, ...i.pairs.map((p) => `  - ${p.left} ↔ ${p.right}`), `  - ${i.explanation}`);
    }
  }
  L('', '---', '');
}

const supp = items.filter((i) => itemRelevance(i) === 'supplementary');
L('## Items judged SUPPLEMENTARY (shown less often in games)', '');
if (!supp.length) L('None in this batch.', '');
for (const i of supp) L(`- \`${i.id}\` (depth ${i.depth ?? '—'}) — ${i.relevanceNote ?? ''}`);
L('');
const spec = items.filter((i) => itemRelevance(i) === 'specialist');
L('## Items flagged SPECIALIST (excluded from gameplay pending editorial review)', '');
if (!spec.length) L('None in this batch.', '');
for (const i of spec) L(`- \`${i.id}\` (depth ${i.depth ?? '—'}) — ${i.relevanceNote ?? ''}`);
L('');
L('## Medical Connections: complete puzzles (16 tiles, verified single solution against the global catalog)', '');
for (const p of items) {
  if (p.kind !== 'connections') continue;
  const tiles = p.groups.flatMap((g) => g.members);
  const n = solutions(tiles, [...p.groups.map((g) => g.accepts), ...p.decoys.map((d) => d.accepts), ...catalog.map((c) => c.members)]).length;
  L(`### ${p.title} · ${tag(p)}`, '');
  for (const g of p.groups) L(`- **${g.label}** (tier ${g.tier}): ${g.members.join(', ')} — ${g.explanation}`);
  const manual = MANUAL_AUDIT[p.id] ?? [];
  const all = [...p.decoys.map((d) => ({ label: d.label, members: d.accepts })), ...catalog, ...manual];
  const defensible = defensiblePartitions(tiles, p.groups.map((g) => g.members), all).length;
  L('', `Strict check (any 4 tiles inside any of ${catalog.length} catalog categories, the puzzle's groups or its decoys): **${n}** solution(s).`);
  L(`Manual audit with broad categories (a group is defensible only if a category covers exactly its four tiles; the last four may share any category): **${defensible}** defensible solution(s).`);
  L(`Red herrings on the board (cannot complete an alternative board): ${redHerrings(tiles, p.groups.map((g) => g.members), [...catalog, ...manual]).join('; ') || 'none'}.`, '');
  if (manual.length) {
    L('<details><summary>Alternative groupings considered in the manual audit</summary>', '');
    for (const m of manual) L(`- **${m.label}** — ${m.note}`);
    L('', '</details>', '');
  }
}
L('## Connections category bank (builder input, not complete games)', '');
for (const g of items) if (g.kind === 'group') L(`- \`${g.id}\` **${g.label}**: ${g.members.join(', ')}. ${g.explanation}`);
L('');
writeFileSync(out, lines.join('\n'));
console.log(`wrote ${concepts.length} concepts, ${items.length} items to ${out}`);
