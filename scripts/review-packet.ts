/**
 * Writes a medical-review packet for curriculum-linked content.
 * Usage: npx vite-node scripts/review-packet.ts -- <conceptIdPrefix> <output.md> "<title>"
 */
import { writeFileSync } from 'node:fs';
import { ALL_CONCEPTS, ALL_ITEMS } from '../src/content/index';
import type { GameItem } from '../src/content/schema';

const [prefix = 'mol-', out = 'docs/subjects/review/packet.md', title = 'Review packet'] = process.argv.slice(2).filter((a) => a !== '--');
const concepts = ALL_CONCEPTS.filter((c) => c.id.startsWith(prefix) && c.curriculum);
const ids = new Set(concepts.map((c) => c.id));
const items = ALL_ITEMS.filter((i) => i.conceptIds.some((c) => ids.has(c)));
const lines: string[] = [];
const L = (...s: string[]) => lines.push(...s);
const letter = (n: number) => String.fromCharCode(65 + n);
const tag = (i: GameItem) =>
  `\`${i.id}\` · ${i.reasoning ?? '—'} → **${i.depth ?? '—'}** · difficulty ${i.difficulty} · ${(i.objectiveIds ?? []).map((o) => `\`${o}\``).join(', ')}`;
const count = (f: (i: GameItem) => boolean) => items.filter(f).length;

L(`# ${title}`, '');
L('Status: **draft, AI-drafted, not medically reviewed.** Reviewer: mark each concept approved, needs changes or rejected, with notes.', '');
L('## How to read this packet', '');
L('- Options are listed in their **stored** order (deterministically shuffled per item, with opaque ids). Learners see a fresh random order on every presentation; answers are checked by option id, never by position. ✅ marks the correct option.');
L('- Each item shows its **reasoning task** and the **depth** that follows from it: recall/identification → recognition; mechanism → mechanism; interpretation/prediction/comparison/multistep → application. A vignette that only asks for the classic diagnosis is identification (recognition), not application.');
L('- Each fact lists the numbers of the citations that support it. “Checked”: **full-text** (page read), **summary** (published abstract or summary read), **existence** (record confirmed but full text not accessible; reviewer should confirm the claim).');
L('- Mastery: true/false and crossword answers count as weaker recognition evidence; repeating an item within 7 days adds little; “strong” needs at least 3 distinct items, including a mechanism or application item.', '');
L('## Summary', '');
L('| Measure | Value |', '|---|---|');
L(`| Concepts | ${concepts.length} |`, `| Objectives taught | ${new Set(concepts.flatMap((c) => c.curriculum!)).size} |`);
L(`| MCQs / true-false / crossword clues | ${count((i) => i.kind === 'mcq')} / ${count((i) => i.kind === 'tf')} / ${count((i) => i.kind === 'clue')} |`);
L(`| Complete Connections puzzles / category groups / Mystery Patient cases | ${count((i) => i.kind === 'connections')} / ${count((i) => i.kind === 'group')} / ${count((i) => i.kind === 'case')} |`);
for (const r of ['recall', 'identification', 'mechanism', 'interpretation', 'prediction', 'comparison', 'multistep'] as const) L(`| Items: ${r} | ${count((i) => i.reasoning === r)} |`);
L('');

for (const c of concepts) {
  L(`## ${c.title} (\`${c.id}\`)`, '', `Objectives: ${c.curriculum!.map((o) => `\`${o}\``).join(', ')}`, '');
  L('**Citations**', '');
  c.citations.forEach((x, n) => L(`${n + 1}. ${x.locator}${x.ref ? ` — ${x.ref}` : ''} — <${x.url}> — checked: ${x.checked}`));
  L('', '**Facts** [supporting citations]', '');
  c.facts.forEach((f, n) => L(`- ${f} [${(c.factRefs?.[n] ?? []).map((r) => r + 1).join(', ')}]`));
  L('', `**Mechanism.** ${c.mechanism}`, '', `**Quick.** ${c.quick}`, '', '**Detailed**', '', ...c.detailed.map((d) => `> ${d}\n`));
  L(`**Misconception.** ${c.misconception}`, '', `**Takeaway.** ${c.takeaway}`, '');
  for (const i of items.filter((x) => x.conceptIds[0] === c.id && x.kind !== 'connections' && x.kind !== 'group')) {
    if (i.kind === 'mcq') {
      L(`- **MCQ** ${tag(i)}`, `  - ${i.stem}`, ...i.options.map((o, n) => `  - ${o.id === i.answerId ? '✅' : '◻️'} ${letter(n)}. ${o.text}${o.whyWrong ? ` — _${o.whyWrong}_` : ''}`), `  - Explanation: ${i.mini}`);
    } else if (i.kind === 'tf') {
      L(`- **True/false** ${tag(i)}: ${i.statement} → **${i.isTrue ? 'True' : 'False'}**. ${i.correction}`);
    } else if (i.kind === 'clue') {
      L(`- **Crossword** ${tag(i)}: ${i.clue} → **${i.answer}**`);
    } else if (i.kind === 'case') {
      L(`- **Mystery Patient** ${tag(i)}: ${i.title}`, ...i.stages.map((s) => `  - ${s.label}: ${s.text}`), `  - Q: ${i.question}`,
        ...i.options.map((o, n) => `  - ${o.id === i.answerId ? '✅' : '◻️'} ${letter(n)}. ${o.text}${o.whyWrong ? ` — _${o.whyWrong}_` : ''}`), `  - ${i.explanation}`);
    }
  }
  L('', '---', '');
}

L('## Medical Connections: complete puzzles (16 tiles, verified single solution)', '');
for (const p of items) {
  if (p.kind !== 'connections') continue;
  L(`### ${p.title} · ${tag(p)}`, '');
  for (const g of p.groups) L(`- **${g.label}** (tier ${g.tier}): ${g.members.join(', ')} — ${g.explanation}`);
  L('', `Red herrings checked by the solver (no alternative full solution): ${p.decoys.map((d) => `“${d.label}”`).join('; ')}.`, '');
}
L('## Connections category bank (builder input, not complete games)', '');
for (const g of items) if (g.kind === 'group') L(`- \`${g.id}\` **${g.label}**: ${g.members.join(', ')}. ${g.explanation}`);
L('');
writeFileSync(out, lines.join('\n'));
console.log(`wrote ${concepts.length} concepts, ${items.length} items to ${out}`);
