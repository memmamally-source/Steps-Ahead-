/** Deterministic helpers so daily puzzles are identical for everyone on the same date and package. */

export function hashString(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return h >>> 0;
}

/** mulberry32 PRNG: returns a function producing floats in [0, 1). */
export function seeded(seed: number | string): () => number {
  let a = typeof seed === 'string' ? hashString(seed) : seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function shuffle<T>(arr: readonly T[], rnd: () => number = Math.random): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rnd() * (i + 1));
    [a[i], a[j]] = [a[j]!, a[i]!];
  }
  return a;
}

/** Local calendar date as yyyy-MM-dd. */
export function dateKey(d: Date | number = Date.now()): string {
  const x = typeof d === 'number' ? new Date(d) : d;
  const m = String(x.getMonth() + 1).padStart(2, '0');
  const day = String(x.getDate()).padStart(2, '0');
  return `${x.getFullYear()}-${m}-${day}`;
}

export function addDays(key: string, n: number): string {
  const [y, m, d] = key.split('-').map(Number) as [number, number, number];
  return dateKey(new Date(y, m - 1, d + n));
}

export function uid(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID();
  return `${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 10)}`;
}

/**
 * Weighted random order (Efraimidis–Spirakis): items with higher weight tend to come first; weight 0
 * items go last. Used to prioritise core content over supplementary content in games.
 */
export function weightedShuffle<T>(arr: readonly T[], weight: (x: T) => number, rnd: () => number = Math.random): T[] {
  return arr
    .map((x) => {
      const w = weight(x);
      return { x, k: w > 0 ? Math.pow(rnd() || Number.MIN_VALUE, 1 / w) : -1 };
    })
    .sort((a, b) => b.k - a.k)
    .map((e) => e.x);
}

/** One weighted random choice (undefined for an empty list). */
export function weightedPick<T>(arr: readonly T[], weight: (x: T) => number, rnd: () => number = Math.random): T | undefined {
  return weightedShuffle(arr, weight, rnd)[0];
}
