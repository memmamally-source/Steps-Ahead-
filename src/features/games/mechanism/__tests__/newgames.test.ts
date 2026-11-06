import { checkSequence } from '@/features/games/mechanism/logic';
import { isCorrectPair, matchScore } from '@/features/games/match/logic';

describe('Mechanism Lab', () => {
  it('scores per position and recognizes a perfect order', () => {
    const order = ['A', 'B', 'C', 'D'];
    expect(checkSequence(order, order)).toMatchObject({ allCorrect: true, score: 100 });
    const r = checkSequence(['B', 'A', 'C', 'D'], order);
    expect(r.positions).toEqual([false, false, true, true]);
    expect(r.score).toBe(50);
  });
});

describe('Match Up', () => {
  const pairs = [{ left: 'Methotrexate', right: 'DHFR' }, { left: '5-FU', right: 'Thymidylate synthase' }];
  it('accepts only the defined pairing', () => {
    expect(isCorrectPair(pairs, 'Methotrexate', 'DHFR')).toBe(true);
    expect(isCorrectPair(pairs, 'Methotrexate', 'Thymidylate synthase')).toBe(false);
  });
  it('deducts for mistakes without going negative', () => {
    expect(matchScore(0)).toBe(100);
    expect(matchScore(2)).toBe(60);
    expect(matchScore(9)).toBe(0);
  });
});
