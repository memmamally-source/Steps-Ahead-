import { describe, expect, it } from 'vitest';
import { ALL_CONCEPTS } from '../../index';
import { OUTLINE_AREAS } from '../../schema';
import { BIOCHEMISTRY, checklistConcepts } from '../biochemistry';

const concepts = checklistConcepts(BIOCHEMISTRY);
const contentIds = new Set(ALL_CONCEPTS.map((c) => c.id));

describe('Biochemistry coverage checklist', () => {
  it('has the six subdivisions in the agreed order', () => {
    expect(BIOCHEMISTRY.subdivisions.map((s) => s.title)).toEqual([
      'Molecular biochemistry', 'Cellular biochemistry', 'Laboratory techniques', 'Genetics', 'Nutrition', 'Metabolism',
    ]);
  });

  it('uses unique ids for subdivisions, topics and concepts', () => {
    const ids = BIOCHEMISTRY.subdivisions.flatMap((s) => [s.id, ...s.topics.flatMap((t) => [t.id, ...t.concepts.map((c) => c.id)])]);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('gives every concept outline links, must-know points and elements', () => {
    for (const c of concepts) {
      expect(c.outline.length, c.id).toBeGreaterThan(0);
      expect(c.must.length, c.id).toBeGreaterThan(0);
      expect(c.elements.length, c.id).toBeGreaterThan(0);
      for (const o of c.outline) expect(OUTLINE_AREAS as readonly string[], c.id).toContain(o.area);
    }
  });

  it('maps only to existing content concepts, with a coverage judgement that matches', () => {
    for (const c of concepts) {
      for (const id of c.existing) expect(contentIds.has(id), `${c.id} → ${id}`).toBe(true);
      if (c.coverage !== 'missing') expect(c.existing.length, c.id).toBeGreaterThan(0);
      if (c.coverage === 'partial') expect(c.gap, c.id).toBeTruthy();
    }
  });
});
