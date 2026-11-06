/**
 * Verification for curated Medical Connections puzzles (16 tiles, 4 groups of 4).
 * A puzzle is valid only if:
 *  1. it has 4 groups of exactly 4 distinct tiles (16 tiles total);
 *  2. every tile belongs to its own group's category (`accepts`) and to no other group's category;
 *  3. using the puzzle's four categories plus its declared decoy categories, there is exactly ONE
 *     way to partition the 16 tiles into four groups of four (no unintended alternative solution).
 * The proof is only as complete as the declared `accepts`/`decoys`; medical reviewers confirm them.
 */
import type { ConnectionsPuzzleItem } from './schema';

export const normTile = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, '');

/** All partitions of `tiles` into 4 blocks of 4, each block inside a different category. */
export function solutions(tiles: string[], categories: string[][]): string[][][] {
  const T = tiles.map(normTile);
  const cats = categories.map((c) => new Set(c.map(normTile)));
  const found = new Map<string, string[][]>();
  const assigned = new Array<boolean>(T.length).fill(false);
  const blocks: number[][] = [];
  const used = new Set<number>();

  const combos = (pool: number[], k: number): number[][] => {
    if (k === 0) return [[]];
    const out: number[][] = [];
    pool.forEach((x, i) => combos(pool.slice(i + 1), k - 1).forEach((rest) => out.push([x, ...rest])));
    return out;
  };

  const go = () => {
    const first = assigned.indexOf(false);
    if (first === -1) {
      const key = blocks.map((b) => [...b].sort((x, y) => x - y).join(',')).sort().join('|');
      if (!found.has(key)) found.set(key, blocks.map((b) => b.map((i) => tiles[i]!)));
      return;
    }
    cats.forEach((cat, ci) => {
      if (used.has(ci) || !cat.has(T[first]!)) return;
      const pool = T.map((_, i) => i).filter((i) => i !== first && !assigned[i] && cat.has(T[i]!));
      for (const rest of combos(pool, 3)) {
        const block = [first, ...rest];
        block.forEach((i) => (assigned[i] = true));
        used.add(ci);
        blocks.push(block);
        go();
        blocks.pop();
        used.delete(ci);
        block.forEach((i) => (assigned[i] = false));
      }
    });
  };
  go();
  return [...found.values()];
}

/**
 * Plausible 4-tile groupings other than the intended ones (red herrings). Allowed, but reported to
 * reviewers so traps are deliberate.
 */
export function redHerrings(tiles: string[], intended: string[][], categories: { label: string; members: string[] }[]): string[] {
  const T = new Set(tiles.map(normTile));
  const key = (xs: string[]) => xs.map(normTile).sort().join('|');
  const intendedKeys = new Set(intended.map(key));
  const out = new Set<string>();
  for (const c of categories) {
    const onBoard = c.members.filter((m) => T.has(normTile(m)));
    if (onBoard.length >= 4 && !(onBoard.length === 4 && intendedKeys.has(key(onBoard)))) out.add(`${c.label} (${onBoard.length} tiles)`);
  }
  return [...out];
}

/**
 * `extra`: additional categories (all bank categories and the plausible-category catalog) that must
 * not produce an alternative full solution.
 */
export function verifyPuzzle(p: ConnectionsPuzzleItem, extra: { label: string; members: string[] }[] = []): string[] {
  const issues: string[] = [];
  const tiles = p.groups.flatMap((g) => g.members);
  if (p.groups.length !== 4) issues.push('needs exactly 4 groups');
  for (const g of p.groups) if (g.members.length !== 4) issues.push(`${g.label}: needs exactly 4 tiles`);
  if (tiles.length !== 16 || new Set(tiles.map(normTile)).size !== 16) issues.push('needs 16 distinct tiles');
  for (const g of p.groups) {
    const acc = new Set(g.accepts.map(normTile));
    for (const m of g.members) if (!acc.has(normTile(m))) issues.push(`${m} is not in its own category "${g.label}"`);
  }
  for (const t of tiles) {
    const homes = p.groups.filter((g) => g.accepts.some((a) => normTile(a) === normTile(t)));
    if (homes.length !== 1) issues.push(`"${t}" fits ${homes.length} of the puzzle's categories`);
  }
  const sols = solutions(tiles, [...p.groups.map((g) => g.accepts), ...p.decoys.map((d) => d.accepts), ...extra.map((c) => c.members)]);
  if (sols.length !== 1) issues.push(`has ${sols.length} valid solutions (must be exactly 1)`);
  return issues;
}
