/**
 * Writes every Mechanism Lab (sequence) and Match Up (match) item to JSON, so the browser play-check
 * can answer each item correctly and incorrectly.
 * Usage: npx vite-node scripts/dump-game-items.ts -- <out.json>
 */
import { writeFileSync } from 'node:fs';
import { ALL_ITEMS } from '../src/content/index';
import { itemPriority } from '../src/content/schema';

const [out = 'game-items.json'] = process.argv.slice(2).filter((a) => a !== '--');
const playable = ALL_ITEMS.filter((i) => itemPriority(i) !== 'specialist');
const sequences = playable.flatMap((i) => (i.kind === 'sequence' ? [{ id: i.id, title: i.title, steps: i.steps, explanation: i.explanation }] : []));
const matches = playable.flatMap((i) => (i.kind === 'match' ? [{ id: i.id, title: i.title, pairs: i.pairs, explanation: i.explanation }] : []));
writeFileSync(out, JSON.stringify({ sequences, matches }, null, 2));
console.log(`wrote ${sequences.length} sequences and ${matches.length} match sets to ${out}`);
