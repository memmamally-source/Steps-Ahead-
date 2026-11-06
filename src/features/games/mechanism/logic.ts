/** Mechanism Lab: put the steps of a pathway in order. Pure logic. */
export interface SequenceResult {
  /** For each position, whether the placed step is the correct one. */
  positions: boolean[];
  correct: number;
  allCorrect: boolean;
  score: number;
}

export function checkSequence(placed: string[], correctOrder: string[]): SequenceResult {
  const positions = correctOrder.map((step, i) => placed[i] === step);
  const correct = positions.filter(Boolean).length;
  return { positions, correct, allCorrect: correct === correctOrder.length, score: Math.round((100 * correct) / correctOrder.length) };
}
