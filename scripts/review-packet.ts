/**
 * Writes a medical-review packet for curriculum-linked content in one file.
 * Usage: npx vite-node scripts/review-packet.ts -- <conceptIdPrefix> <output.md> "<title>"
 */
import { writeFileSync } from 'node:fs';
import { ALL_CONCEPTS, ALL_ITEMS } from '../src/content/index';

const [prefix = 'mol-', out = 'docs/subjects/review/packet.md', title = 'Review packet'] = process.argv.slice(2).filter((a) => a !== '--');
const concepts = ALL_CONCEPTS.filter((c) => c.id.startsWith(prefix) && c.curriculum);
const L: string[] = [`# ${title}`, '', 'Status: **draft, AI-drafted, not medically reviewed.** Reviewer: please mark each concept approved, needs changes or rejected, with notes.', ''];
for (const c of concepts) {
  L.push(`## ${c.title} (\`${c.id}\`)`, '', `Objectives: ${c.curriculum!.map((o) => `\`${o}\``).join(', ')}`, '');
  L.push(`Citations: ${c.citations.map((x) => `${x.sourceId}${x.locator ? ` — ${x.locator}` : ''}`).join('; ')}`, '');
  L.push('**Facts**', '', ...c.facts.map((f) => `- ${f}`), '', `**Mechanism.** ${c.mechanism}`, '', `**Quick.** ${c.quick}`, '');
  L.push('**Detailed**', '', ...c.detailed.map((d) => `> ${d}\n`), `**Misconception.** ${c.misconception}`, '', `**Takeaway.** ${c.takeaway}`, '');
  const items = ALL_ITEMS.filter((i) => i.conceptIds.includes(c.id));
  for (const i of items) {
    const tag = `\`${i.id}\` · ${i.depth} · ${i.objectiveIds?.join(', ')}`;
    if (i.kind === 'mcq') {
      L.push(`- **MCQ** ${tag}`, `  - ${i.stem}`, ...i.options.map((o) => `  - ${o.id === i.answerId ? '✅' : '◻️'} ${o.id}. ${o.text}${o.whyWrong ? ` — _${o.whyWrong}_` : ''}`), `  - Explanation: ${i.mini}`);
    } else if (i.kind === 'tf') {
      L.push(`- **True/false** ${tag}: ${i.statement} → **${i.isTrue ? 'True' : 'False'}**. ${i.correction}`);
    } else if (i.kind === 'clue') {
      L.push(`- **Crossword** ${tag}: ${i.clue} → **${i.answer}**`);
    } else if (i.kind === 'group') {
      L.push(`- **Connections** ${tag}: ${i.label}: ${i.members.join(', ')}. ${i.explanation}`);
    } else if (i.kind === 'case') {
      L.push(`- **Mystery Patient** ${tag}: ${i.title}`, ...i.stages.map((s) => `  - ${s.label}: ${s.text}`), `  - Q: ${i.question}`, ...i.options.map((o) => `  - ${o.id === i.answerId ? '✅' : '◻️'} ${o.text}${o.whyWrong ? ` — _${o.whyWrong}_` : ''}`), `  - ${i.explanation}`);
    }
  }
  L.push('', '---', '');
}
writeFileSync(out, L.join('\n'));
console.log(`wrote ${concepts.length} concepts to ${out}`);
