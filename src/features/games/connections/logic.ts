/**
 * Medical Connections puzzle builder and rules. Fairness guarantee: every displayed term belongs to
 * exactly one of the four chosen categories' FULL member lists, so there is one valid solution.
 */
import type { ConnectionGroup, ConnectionsPuzzleItem } from '@/content/schema';
import { solutions } from '@/content/connectionsVerify';
import { shuffle } from '@/engine/random';

export interface PuzzleGroup {
  id: string;
  label: string;
  tier: 1 | 2 | 3 | 4;
  members: string[];
  explanation: string;
  conceptIds: string[];
  difficulty: number;
}

export interface ConnectionsPuzzle {
  groups: PuzzleGroup[];
  tiles: string[];
  /** Curated puzzle id when the board is a verified curated puzzle. */
  curatedId?: string;
}

/** A verified curated puzzle (see content/connectionsVerify.ts) laid out for play. */
export function fromCurated(item: ConnectionsPuzzleItem, rnd: () => number): ConnectionsPuzzle {
  const groups: PuzzleGroup[] = item.groups.map((g) => ({
    id: `${item.id}:${g.id}`,
    label: g.label,
    tier: g.tier,
    members: [...g.members],
    explanation: g.explanation,
    conceptIds: g.conceptIds,
    difficulty: item.difficulty,
  }));
  return { groups, tiles: shuffle(groups.flatMap((g) => g.members), rnd), curatedId: item.id };
}

const norm = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '');

/**
 * Builds a 16-tile board from category groups. A board is accepted only if it passes complete puzzle
 * validation: 4 groups of 4, each tile in exactly one chosen category, and exactly one solution when
 * checked against every category in `catalog` (all bank categories plus medically plausible
 * alternatives), so no unintended grouping can also solve it.
 */
export function buildConnections(
  bank: ConnectionGroup[],
  rnd: () => number,
  preferred: ConnectionGroup[] = [],
  catalog: { label: string; members: string[] }[] = bank,
): ConnectionsPuzzle | null {
  for (let tries = 0; tries < 200; tries++) {
    // Start from preferred (subject) groups, then fill from the whole bank.
    const order = [...shuffle(preferred, rnd), ...shuffle(bank.filter((g) => !preferred.includes(g)), rnd)];
    const chosen: ConnectionGroup[] = [];
    for (const g of order) {
      if (chosen.length === 4) break;
      const trial = [...chosen, g];
      if (eligibleMembers(trial).every((m) => m.length >= 4)) chosen.push(g);
    }
    if (chosen.length < 4) continue;
    const elig = eligibleMembers(chosen);
    const groups = chosen.map((g, i) => ({
      id: g.id,
      label: g.label,
      tier: g.tier,
      members: shuffle(elig[i]!, rnd).slice(0, 4),
      explanation: g.explanation,
      conceptIds: g.conceptIds,
      difficulty: g.difficulty,
    }));
    const puzzle = { groups, tiles: shuffle(groups.flatMap((g) => g.members), rnd) };
    if (!validateConnections(puzzle, chosen).length && uniqueSolution(puzzle, chosen, catalog)) return puzzle;
    if (tries > 150) break;
  }
  return null;
}

/** For each group, its members that do not appear in any other chosen group. */
function eligibleMembers(groups: ConnectionGroup[]): string[][] {
  return groups.map((g, i) => {
    const others = new Set(groups.filter((_, j) => j !== i).flatMap((o) => o.members.map(norm)));
    return g.members.filter((m) => !others.has(norm(m)));
  });
}

/** True when the board has exactly one solution across the chosen categories plus the catalog. */
export function uniqueSolution(p: ConnectionsPuzzle, chosen: ConnectionGroup[], catalog: { members: string[] }[]): boolean {
  return solutions(p.tiles, [...chosen.map((g) => g.members), ...catalog.map((c) => c.members)]).length === 1;
}

export function validateConnections(p: ConnectionsPuzzle, source: ConnectionGroup[]): string[] {
  const issues: string[] = [];
  if (p.groups.length !== 4) issues.push('need exactly 4 groups');
  if (p.tiles.length !== 16) issues.push('need exactly 16 tiles');
  if (new Set(p.tiles.map(norm)).size !== p.tiles.length) issues.push('duplicate tiles');
  for (const t of p.tiles) {
    const homes = source.filter((g) => g.members.some((m) => norm(m) === norm(t)));
    if (homes.length !== 1) issues.push(`"${t}" fits ${homes.length} groups`);
  }
  for (const g of p.groups) if (g.members.length !== 4) issues.push(`${g.label} does not have 4 members`);
  return issues;
}

export type GuessResult = { kind: 'correct'; group: PuzzleGroup } | { kind: 'one-away' } | { kind: 'wrong' } | { kind: 'repeat' };

export function checkGuess(p: ConnectionsPuzzle, guess: string[], previous: string[][]): GuessResult {
  const key = [...guess].sort().join('|');
  if (previous.some((g) => [...g].sort().join('|') === key)) return { kind: 'repeat' };
  let bestOverlap = 0;
  for (const g of p.groups) {
    const overlap = guess.filter((t) => g.members.includes(t)).length;
    if (overlap === 4) return { kind: 'correct', group: g };
    bestOverlap = Math.max(bestOverlap, overlap);
  }
  return bestOverlap === 3 ? { kind: 'one-away' } : { kind: 'wrong' };
}

export const MAX_MISTAKES = 4;

/** 100 per group found, minus 25 per mistake (never below 0). */
export function scoreConnections(found: number, mistakes: number): number {
  return Math.max(0, found * 100 - mistakes * 25);
}
