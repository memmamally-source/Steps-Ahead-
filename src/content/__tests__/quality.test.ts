import { describe, expect, it } from 'vitest';
import { ALL_CONCEPTS, ALL_ITEMS } from '@/content/index';
import { presentOptions } from '@/content/options';
import { seeded, weightedShuffle } from '@/engine/random';
import { ContentRepo, REVIEWER_PREVIEW } from '@/content/repo';
import { REASONING_DEPTH, itemRelevance, relevanceWeight, type ConnectionsPuzzleItem, type GameItem, type McqItem, type Reasoning } from '@/content/schema';
import { defensiblePartitions, solutions, verifyPuzzle } from '@/content/connectionsVerify';
import { globalCategories } from '@/content/connectionsCatalog';
import { MANUAL_AUDIT } from '@/content/connectionsAudit';
import { BIOCHEMISTRY } from '@/content/curriculum/biochemistry';
import { auditObjective } from '@/content/curriculum/audit';

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

  it('have a manual alternative-grouping audit and no other defensible solution', () => {
    const catalog = globalCategories(ALL_ITEMS);
    for (const p of puzzles) {
      const manual = MANUAL_AUDIT[p.id];
      expect(manual?.length, `${p.id} needs a manual audit`).toBeGreaterThan(0);
      const tiles = p.groups.flatMap((g) => g.members);
      const cats = [...p.decoys.map((d) => ({ label: d.label, members: d.accepts })), ...catalog, ...manual!];
      expect(defensiblePartitions(tiles, p.groups.map((g) => g.members), cats), p.id).toHaveLength(1);
    }
  });

  it('the defensibility check finds the second solutions of the pre-revision boards', () => {
    const catalog = globalCategories(ALL_ITEMS);
    const manual = (id: string) => MANUAL_AUDIT[id]!;
    const oldRepair = [['XPA', 'XPC', 'ERCC2', 'Thymine dimer'], ['Uracil-DNA glycosylase', 'MUTYH', 'AP endonuclease', '8-Oxoguanine'], ['MLH1', 'MSH2', 'MSH6', 'PMS2'], ['Ku70', 'DNA-PKcs', 'Artemis', 'DNA ligase IV']];
    expect(defensiblePartitions(oldRepair.flat(), oldRepair, [...catalog, ...manual('cx:dna-repair-machinery')]).length).toBeGreaterThan(1);
    const oldNucleotides = [['Adenine', 'Guanine', 'Hypoxanthine', 'Xanthine'], ['Cytosine', 'Uracil', 'Thymine', 'Orotate'], ['Methotrexate', 'Hydroxyurea', 'Leflunomide', 'Mycophenolate'], ['HGPRT', 'Xanthine oxidase', 'Adenosine deaminase', 'Purine nucleoside phosphorylase']];
    const dnaBases = { label: 'Bases found in DNA', members: ['Adenine', 'Guanine', 'Cytosine', 'Thymine'] };
    expect(defensiblePartitions(oldNucleotides.flat(), oldNucleotides, [dnaBases, ...catalog, ...manual('cx:nucleotides-and-drugs')]).length).toBeGreaterThan(1);
  });

  it('never counts category-bank entries as playable items or coverage evidence', () => {
    const bank = ALL_ITEMS.filter((i) => i.kind === 'group' && i.objectiveIds?.length);
    expect(bank.length).toBeGreaterThan(0);
    for (const g of bank) {
      for (const id of g.objectiveIds!) {
        const o = BIOCHEMISTRY.subdivisions.flatMap((s) => s.topics.flatMap((t) => t.subtopics.flatMap((st) => st.objectives))).find((x) => x.id === id);
        if (!o) continue;
        const audit = auditObjective(o, { concepts: ALL_CONCEPTS, items: ALL_ITEMS });
        expect(audit.items.some((i) => i.kind === 'group'), id).toBe(false);
      }
    }
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

describe('Step 1 relevance (independent of cognitive depth)', () => {
  const linked = ALL_ITEMS.filter((i) => i.objectiveIds?.length);

  it('labels every curriculum-linked item explicitly; nothing defaults to core', () => {
    for (const i of linked) expect(i.relevance, i.id).toBeDefined();
    const legacy = ALL_ITEMS.filter((i) => !i.objectiveIds?.length && !i.relevance);
    expect(legacy.length).toBeGreaterThan(0);
    for (const i of legacy) expect(itemRelevance(i), i.id).toBe('unreviewed');
  });

  it('gives every specialist or supplementary item a reason, and keeps specialist items out of gameplay', () => {
    for (const i of linked) if (itemRelevance(i) === 'specialist' || itemRelevance(i) === 'supplementary') expect((i.relevanceNote ?? '').length, i.id).toBeGreaterThan(20);
    const repo = new ContentRepo(ALL_CONCEPTS, ALL_ITEMS, REVIEWER_PREVIEW);
    for (const i of linked) if (itemRelevance(i) === 'specialist') expect(repo.item(i.id), i.id).toBeUndefined();
  });

  it('keeps relevance and depth independent: core items exist at application depth', () => {
    expect(linked.some((i) => itemRelevance(i) === 'core' && i.depth === 'application')).toBe(true);
    expect(linked.some((i) => itemRelevance(i) === 'specialist' && i.depth === 'recognition')).toBe(true);
  });

  it('matches cognitive depth to the game format (no fixed global quota)', () => {
    // Depth follows the learning objective and the format: Mystery Patient applies foundational science,
    // Mechanism Lab tests mechanisms, Match Up and Connections reinforce recall.
    for (const i of linked) {
      if (i.kind === 'case') expect(i.depth, i.id).toBe('application');
      if (i.kind === 'sequence') expect(i.depth, i.id).toBe('mechanism');
      if (i.kind === 'match' || i.kind === 'group' || i.kind === 'connections') expect(i.depth, i.id).toBe('recognition');
    }
  });

  it('prioritises core content in weighted draws', () => {
    const pool = [...Array.from({ length: 50 }, (_, n) => ({ id: `c${n}`, relevance: 'core' as const })), ...Array.from({ length: 50 }, (_, n) => ({ id: `s${n}`, relevance: 'supplementary' as const }))];
    const rnd = seeded('weights');
    let core = 0;
    for (let k = 0; k < 400; k++) if (weightedShuffle(pool, relevanceWeight, rnd)[0]!.relevance === 'core') core++;
    expect(core / 400).toBeGreaterThan(0.65);
    expect(weightedShuffle([{ relevance: 'specialist' as const }, { relevance: 'core' as const }], relevanceWeight, rnd)[0]!.relevance).toBe('core');
  });
});
