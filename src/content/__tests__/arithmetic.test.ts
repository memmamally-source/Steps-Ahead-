import { describe, expect, it } from 'vitest';
import { ALL_CONCEPTS, ALL_ITEMS } from '../index';
import { allStrings, checkCalculation, evaluate, findCalculations } from '../arithmetic';

/**
 * Numerical questions. For each item the correct answer is recomputed from the stem's numbers, and every
 * numeric option is checked against the quantity its explanation says it represents. A typo in an option
 * or a wrong number in a distractor explanation fails here.
 */
const q = (prev: number) => Math.sqrt(prev);
const CALC: { id: string; answer: number; options: Record<string, number> }[] = [
  { // AR prevalence 1/10,000 → carriers 2q
    id: 'gen-hardy-weinberg:mcq1', answer: 2 * q(1 / 10000),
    options: { '1 in 50': 2 * q(1 / 10000), '1 in 200': q(1 / 10000) / 2, '1 in 100': q(1 / 10000), '1 in 25': 2 * (1 / 50), '1 in 10,000': 1 / 10000 },
  },
  { // XR males 1/5,000 = q → females q²
    id: 'gen-hardy-weinberg:mcq2', answer: (1 / 5000) ** 2,
    options: { '1 in 25,000,000': (1 / 5000) ** 2, '1 in 5,000': 1 / 5000, '1 in 10,000': 1 / 5000 / 2, '1 in 2,500': 2 / 5000, '1 in 71': Math.sqrt(1 / 5000) },
  },
  { id: 'gen-ad:mcq2', answer: 1 / 2, options: { '25%': 1 / 4, '50%': 1 / 2, '67%': 2 / 3, '100%': 1 } },
  { id: 'gen-ar:mcq2', answer: 2 / 3, options: { '1/2': 1 / 2, '3/4': 3 / 4, '1/3': 1 / 3, '1/4': 1 / 4, '2/3': (2 / 4) / (3 / 4) } },
  { id: 'gen-ar:mcq3', answer: 1 / 4, options: { '25%': 0.5 * 0.5, '100%': 1, '75%': 1 - 0.25, '50%': 2 * 0.5 * 0.5 } },
  { id: 'gen-inheritance-map:mcq2', answer: 1 / 4, options: { '50%': 1 / 2, '25%': 0.5 * 0.5, '100%': 1, '2/3': 2 / 3 } },
  { id: 'gen-pkd:mcq3', answer: 1 / 4, options: { '25%': 0.5 * 0.5, '50%': 1 / 2, '0%': 0, '100%': 1, '2/3': 2 / 3 } },
  { id: 'x-linked-recessive:mcq1', answer: 1, options: { '0%': 0, '25%': 0.5 * 0.5, '50%': 0.5, '100%': 1 } },
  { id: 'sens-spec:mcq1', answer: (300 - 30) / 300, options: { '10%': 30 / 300, '90%': 270 / 300, '86%': 180 / (180 + 30), '85%': 0.85 } },
  { id: 'nnt:mcq1', answer: 1 / (0.2 - 0.15), options: { '25': 100 * (0.05 / 0.2), '5': 100 * (0.2 - 0.15), '4': 1 / (1 - 0.15 / 0.2), '20': 1 / (0.2 - 0.15) } },
];

const close = (a: number, b: number) => Math.abs(a - b) <= Math.max(Math.abs(a), Math.abs(b)) * 0.02 + 1e-12;

describe('arithmetic in content', () => {
  it('evaluates the written forms used in questions', () => {
    expect(evaluate('1 in 25,000,000')).toBeCloseTo(4e-8);
    expect(evaluate('√(1/10,000)')).toBeCloseTo(0.01);
    expect(evaluate('(1/5,000)²')).toBeCloseTo(4e-8);
    expect(evaluate('1/2 × 1/2')).toBeCloseTo(0.25);
    expect(evaluate('12/200 ÷ 24/200')).toBeCloseTo(0.5);
    expect(evaluate('25%')).toBeCloseTo(0.25);
    expect(evaluate('2q')).toBeNull();
  });

  it('catches a wrong square root (the 1/70,700 error)', () => {
    expect(close(evaluate('1 in 70,700')!, Math.sqrt(1 / 5000))).toBe(false);
    expect(close(evaluate('1 in 71')!, Math.sqrt(1 / 5000))).toBe(true);
    const bad = findCalculations('so q = √(1/5,000) = 1/70,700');
    expect(bad.map(checkCalculation).filter(Boolean)).toHaveLength(1);
  });

  it('every written calculation chain in concepts and items is arithmetically correct', () => {
    const errors: string[] = [];
    let n = 0;
    for (const s of allStrings([ALL_CONCEPTS, ALL_ITEMS])) for (const c of findCalculations(s)) { n++; const e = checkCalculation(c); if (e) errors.push(e); }
    expect(n).toBeGreaterThan(50);
    expect(errors).toEqual([]);
  });

  it('numerical questions: the keyed answer is the recomputed value, and each numeric option is what its explanation says', () => {
    for (const c of CALC) {
      const item = ALL_ITEMS.find((i) => i.id === c.id);
      expect(item?.kind, c.id).toBe('mcq');
      if (item?.kind !== 'mcq') continue;
      const key = item.options.find((o) => o.id === item.answerId)!;
      expect(close(evaluate(key.text)!, c.answer), `${c.id} key ${key.text}`).toBe(true);
      for (const o of item.options) {
        const v = evaluate(o.text);
        if (v === null) continue;
        expect(c.options[o.text], `${c.id}: option "${o.text}" has no declared meaning`).toBeDefined();
        expect(close(v, c.options[o.text]!), `${c.id}: option "${o.text}" = ${v}, expected ${c.options[o.text]}`).toBe(true);
      }
    }
  });
});
