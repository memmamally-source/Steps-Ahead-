/**
 * Checks that every outline reference in the curriculum (section, category, listed term) appears in
 * the official USMLE Content Outline text. The outline is not stored in the repository; pass the path
 * to a text extraction of the published PDF:
 *   npx vite-node scripts/check-outline-terms.ts -- /path/to/outline.txt
 */
import { readFileSync } from 'node:fs';
import { OL } from '../src/content/curriculum/biochem/links';
import { OUTLINE_AREAS } from '../src/content/schema';

const path = process.argv.slice(2).find((a) => a !== '--');
if (!path) throw new Error('Pass the path to the outline text.');
const norm = (s: string) => s.replace(/\s+/g, ' ').replace(/- (?=[A-Za-z])/g, '-').trim().toLowerCase();
const full = norm(readFileSync(path, 'utf8'));
// Skip the table of contents: the body starts after the copyright line.
const text = full.slice(full.indexOf('all rights reserved'));
// Leading space: 'male and transgender…' must not match inside 'female and transgender…'.
const areaStarts = OUTLINE_AREAS.map((a) => ({ a, i: text.indexOf(' ' + norm(a)) })).filter((x) => x.i >= 0).sort((x, y) => x.i - y.i);

/** The slice of the outline for one area (from its heading to the next area heading). */
function areaBlock(area: string): string {
  const k = areaStarts.findIndex((x) => x.a === area);
  if (k < 0) return '';
  return text.slice(areaStarts[k]!.i, areaStarts[k + 1]?.i ?? text.length);
}

let bad = 0;
const fail = (msg: string) => { bad++; console.log(`✗ ${msg}`); };
for (const [key, ref] of Object.entries(OL)) {
  const block = areaBlock(ref.area);
  if (!block) { fail(`${key}: area not found "${ref.area}"`); continue; }
  const s = block.indexOf(norm(ref.section));
  if (s < 0) { fail(`${key}: section "${ref.section}" not in ${ref.area}`); continue; }
  // A section runs until the next section heading; approximate with the next 2500 characters.
  const section = block.slice(s, s + 2500);
  if (ref.category && !section.includes(norm(ref.category))) fail(`${key}: category "${ref.category}" not under ${ref.section}`);
  if (ref.term && !section.includes(norm(ref.term))) fail(`${key}: term "${ref.term}" not under ${ref.section}`);
}
console.log(bad ? `${bad} reference(s) not found` : `All ${Object.keys(OL).length} outline references found.`);
if (bad) process.exitCode = 1;
