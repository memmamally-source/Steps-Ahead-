/**
 * Shared machinery for knowledge tables. A table row stores each fact ONCE; question generators
 * read the rows and must prove that exactly one option satisfies the stem (see `matches`).
 */
export type TraitValue = string | boolean;

export interface TraitDef {
  /** Phrase for a value, used in stems and corrections, e.g. (true) => 'coagulase-positive'. */
  phrase: (v: TraitValue) => string;
  /** Short question for "Which of the following is …?" stems, keyed by value. */
  asks?: TraitValue[];
}

export function matches(row: Record<string, TraitValue | undefined>, clues: Record<string, TraitValue>): boolean {
  return Object.entries(clues).every(([k, v]) => row[k] === v);
}

/** A row "definitely differs" when at least one clue is defined on the row with another value. */
export function definitelyDiffers(row: Record<string, TraitValue | undefined>, clues: Record<string, TraitValue>): string | null {
  for (const [k, v] of Object.entries(clues)) {
    const rv = row[k];
    if (rv !== undefined && rv !== v) return k;
  }
  return null;
}

export const listJoin = (xs: string[]) => (xs.length <= 1 ? xs.join('') : `${xs.slice(0, -1).join(', ')} and ${xs[xs.length - 1]}`);
