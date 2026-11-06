import { estimate, recordOutcome, weaknessScore, type ConceptRecord } from '@/engine/mastery';

const now = Date.UTC(2026, 5, 1);
const rec = (outcomes: [boolean, number?][], spacing = 3_600_000): ConceptRecord => {
  let r: ConceptRecord | undefined;
  outcomes.forEach(([correct, d = 3], i) => (r = recordOutcome(r, { at: now - (outcomes.length - i) * spacing, correct, difficulty: d })));
  return r!;
};

describe('mastery', () => {
  it('reports not studied and insufficient information honestly', () => {
    expect(estimate([undefined], now).status).toBe('not_studied');
    expect(estimate([rec([[true]])], now).status).toBe('insufficient');
    expect(estimate([rec([[true], [true]])], now).status).toBe('insufficient');
  });

  it('one correct answer is never mastery', () => {
    const e = estimate([rec([[true, 5]])], now);
    expect(e.status).not.toBe('strong');
    expect(weaknessScore(e)).toBeNull();
  });

  it('consistent correct answers become strong; consistent errors need revision', () => {
    expect(estimate([rec(Array(8).fill([true]))], now).status).toBe('strong');
    expect(estimate([rec(Array(5).fill([false]))], now).status).toBe('needs_revision');
  });

  it('detects improvement', () => {
    const e = estimate([rec([[false], [false], [false], [false], [true], [true], [true], [true]])], now);
    expect(e.status).toBe('improving');
  });

  it('weights difficulty: missing easy items is worse than missing hard ones', () => {
    const easyMiss = estimate([rec([[false, 1], [false, 1], [true, 3], [true, 3]])], now).mastery!;
    const hardMiss = estimate([rec([[false, 5], [false, 5], [true, 3], [true, 3]])], now).mastery!;
    expect(easyMiss).toBeLessThan(hardMiss);
  });

  it('keeps raw accuracy separate from mastery', () => {
    const e = estimate([rec([[true], [true], [false]])], now);
    expect(e.accuracy).toBeCloseTo(2 / 3);
    expect(e.mastery).not.toBeCloseTo(2 / 3, 3);
  });
});

describe('mastery is not inflated by repetition', () => {
  const at = (h: number) => now - h * 3_600_000;
  const build = (os: Parameters<typeof recordOutcome>[1][]) => os.reduce<ConceptRecord | undefined>((r, o) => recordOutcome(r, o), undefined)!;

  it('answering the same true/false item correctly many times never makes a concept strong', () => {
    const r = build(Array.from({ length: 12 }, (_, i) => ({ at: at(12 - i), correct: true, difficulty: 2, itemId: 'x:tf1', kind: 'tf', depth: 'recognition' as const })));
    const e = estimate([r], now);
    expect(e.status).not.toBe('strong');
    expect(e.distinctCorrect).toBe(1);
  });

  it('recognition-only evidence across distinct items is not enough for strong', () => {
    const r = build(Array.from({ length: 10 }, (_, i) => ({ at: at(10 - i), correct: true, difficulty: 2, itemId: `x:tf${i}`, kind: 'tf', depth: 'recognition' as const })));
    expect(estimate([r], now).status).not.toBe('strong');
  });

  it('independent correct answers including mechanism or application items can be strong', () => {
    const r = build([
      ...Array.from({ length: 4 }, (_, i) => ({ at: at(20 - i), correct: true, difficulty: 3, itemId: `x:mcq${i}`, kind: 'mcq', depth: 'mechanism' as const })),
      ...Array.from({ length: 4 }, (_, i) => ({ at: at(10 - i), correct: true, difficulty: 4, itemId: `x:app${i}`, kind: 'mcq', depth: 'application' as const })),
    ]);
    expect(estimate([r], now).status).toBe('strong');
  });

  it('a repeated correct answer within a week adds less evidence than a new item', () => {
    const repeat = build([{ at: at(5), correct: true, difficulty: 3, itemId: 'a', kind: 'mcq', depth: 'mechanism' }, { at: at(4), correct: true, difficulty: 3, itemId: 'a', kind: 'mcq', depth: 'mechanism' }]);
    const fresh = build([{ at: at(5), correct: true, difficulty: 3, itemId: 'a', kind: 'mcq', depth: 'mechanism' }, { at: at(4), correct: true, difficulty: 3, itemId: 'b', kind: 'mcq', depth: 'mechanism' }]);
    expect(estimate([repeat], now).evidence).toBeLessThan(estimate([fresh], now).evidence);
  });
});
