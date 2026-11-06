/** Match Up: pair each left term with its right partner. Pure logic. */
export function isCorrectPair(pairs: { left: string; right: string }[], left: string, right: string): boolean {
  return pairs.some((p) => p.left === left && p.right === right);
}

/** 100 for a clean round, minus 20 per wrong attempt, never below 0. */
export function matchScore(mistakes: number): number {
  return Math.max(0, 100 - 20 * mistakes);
}
