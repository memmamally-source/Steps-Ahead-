import { describe, expect, it } from 'vitest';
import { ALL_CONCEPTS, ALL_ITEMS } from '@/content/index';
import { presentOptions } from '@/content/options';
import { REASONING_DEPTH, type ConnectionsPuzzleItem, type GameItem, type McqItem, type Reasoning } from '@/content/schema';
import { solutions, verifyPuzzle } from '@/content/connectionsVerify';

const mcqs = ALL_ITEMS.filter((i): i is McqItem => i.kind === 'mcq');
const linked = ALL_ITEMS.filter((i) => i.objectiveIds?.length);
const linkedMcqs = mcqs.filter((i) => i.objectiveIds?.length);

describe('Answer-position bias', () => {
  it('stores every answer by a stable option id, not a display letter', () => {
    for (const i of ALL_ITEMS) {
      if (i.kind !== 'mcq' && i.kind !== 'case') continue;
      for (const o of i.options) expect(o.id.startsWith(`${i.id}#`), i.id).toBe(true);
      expect(i.options.some((o) => o.id === i.answerId), i.id).toBe(true);
    }
  });

  it('does not concentrate stored correct answers in one position', () => {
    const counts = new Map<number, number>();
    for (const m of mcqs) {
      const pos = m.options.findIndex((o) => o.id === m.answerId);
      counts.set(pos, (counts.get(pos) ?? 0) + 1);
    }
    for (const [, n] of counts) expect(n / mcqs.length).toBeLessThan(0.3);
  });

  it('shuffles display order per presentation, uniformly, without changing which answer is correct', () => {
    for (const m of linkedMcqs) {
      const hits = new Array(m.options.length).fill(0);
      for (let s = 0; s < 400; s++) {
        const shown = presentOptions(m.options, `${m.id}:${s}`);
        expect(new Set(shown.map((o) => o.id))).toEqual(new Set(m.options.map((o) => o.id)));
        hits[shown.findIndex((o) => o.id === m.answerId)]++;
      }
      const expected = 400 / m.options.length;
      for (const h of hits) expect(Math.abs(h - expected), m.id).toBeLessThan(expected * 0.5);
    }
  });

  it('does not make the correct answer conspicuously the longest option', () => {
    const longest = linkedMcqs.filter((m) => {
      const a = m.options.find((o) => o.id === m.answerId)!.text.length;
      return a > 1.15 * Math.max(...m.options.filter((o) => o.id !== m.answerId).map((o) => o.text.length));
    });
    expect(longest.length / linkedMcqs.length).toBeLessThan(0.15);
  });
});

describe('Reasoning, depth and difficulty of curriculum-linked items', () => {
  const bounds: Record<Reasoning, [number, number]> = {
    recall: [1, 2], identification: [2, 3], mechanism: [2, 4], interpretation: [3, 5], prediction: [3, 5], comparison: [3, 5], multistep: [4, 5],
  };

  it('derives depth from the declared reasoning task', () => {
    for (const i of linked) {
      expect(i.reasoning, i.id).toBeTruthy();
      expect(i.depth, i.id).toBe(REASONING_DEPTH[i.reasoning!]);
    }
  });

  it('never labels a classic-picture identification as application', () => {
    for (const i of linked) if (i.depth === 'application') expect(['interpretation', 'prediction', 'comparison', 'multistep']).toContain(i.reasoning);
  });

  it('keeps difficulty consistent with the reasoning required', () => {
    for (const i of linked) {
      const [lo, hi] = bounds[i.reasoning!];
      expect(i.difficulty, `${i.id} (${i.reasoning})`).toBeGreaterThanOrEqual(lo);
      expect(i.difficulty, `${i.id} (${i.reasoning})`).toBeLessThanOrEqual(hi);
    }
  });

  it('explains every distractor with a substantive reason', () => {
    for (const m of linkedMcqs) for (const o of m.options) if (o.id !== m.answerId) expect((o.whyWrong ?? '').length, `${m.id} ${o.id}`).toBeGreaterThan(25);
  });
});

describe('Evidence traceability of curriculum-linked concepts', () => {
  const concepts = ALL_CONCEPTS.filter((c) => c.curriculum?.length);

  it('cites exact, resolvable sources and records how each was checked', () => {
    for (const c of concepts) {
      expect(c.citations.length, c.id).toBeGreaterThan(0);
      for (const cit of c.citations) {
        expect(cit.url, `${c.id}: ${cit.locator}`).toMatch(/^https:\/\//);
        expect(cit.checked, `${c.id}: ${cit.locator}`).toBeTruthy();
        expect(cit.locator ?? '', c.id).not.toMatch(/cite only|texts on|various/i);
        if (cit.sourceId === 'pubmed' || cit.locator?.startsWith('GeneReviews') || cit.locator?.startsWith('StatPearls')) expect(cit.ref, cit.locator).toMatch(/PMID \d+/);
      }
    }
  });

  it('links every fact to at least one valid citation', () => {
    for (const c of concepts) {
      expect(c.factRefs?.length, c.id).toBe(c.facts.length);
      c.factRefs!.forEach((refs, i) => {
        expect(refs.length, `${c.id} fact ${i}`).toBeGreaterThan(0);
        for (const r of refs) expect(c.citations[r], `${c.id} fact ${i} → ${r}`).toBeTruthy();
      });
    }
  });
});

describe('Curated Medical Connections puzzles', () => {
  const puzzles = ALL_ITEMS.filter((i): i is ConnectionsPuzzleItem => i.kind === 'connections');

  it('exist and are complete, single-solution games', () => {
    expect(puzzles.length).toBeGreaterThan(0);
    for (const p of puzzles) expect(verifyPuzzle(p), p.id).toEqual([]);
  });

  it('detects an unintended alternative solution', () => {
    const tiles = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
    const intended = [tiles.slice(0, 4), tiles.slice(4, 8), tiles.slice(8, 12), tiles.slice(12)];
    expect(solutions(tiles, intended)).toHaveLength(1);
    // A decoy category that swaps one tile between two groups creates a second valid board.
    const decoyA = ['A', 'B', 'C', 'E'];
    const decoyB = ['D', 'F', 'G', 'H'];
    expect(solutions(tiles, [...intended, decoyA, decoyB]).length).toBeGreaterThan(1);
  });

  it('keeps legacy category groups out of the "complete game" set', () => {
    const bank: GameItem[] = ALL_ITEMS.filter((i) => i.kind === 'group');
    for (const g of bank) if (g.kind === 'group') expect(g.members.length).toBeGreaterThanOrEqual(4);
  });
});

describe('Opaque option ids', () => {
  it('do not reveal the authored option letter of the correct answer', () => {
    const suffixes = new Set(mcqs.map((m) => m.answerId.split('#')[1]));
    expect(suffixes.size).toBeGreaterThan(mcqs.length * 0.9);
  });
});

describe('Genuine application items', () => {
  it('state at least two inferential steps for every application-level MCQ', () => {
    for (const i of ALL_ITEMS) if (i.kind === 'mcq' && i.depth === 'application') expect(i.steps?.length ?? 0, i.id).toBeGreaterThanOrEqual(2);
  });
});
