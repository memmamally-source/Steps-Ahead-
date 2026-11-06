import { describe, expect, it } from 'vitest';
import { ALL_CONCEPTS } from '../../index';
import { OUTLINE_AREAS } from '../../schema';
import { BIOCHEMISTRY, BIOCHEMISTRY_V1_IDS } from '../biochemistry';
import { objectivesOf, rollUp, subtopicsOf } from '../audit';
import type { Objective } from '../types';

const subtopics = subtopicsOf(BIOCHEMISTRY).map((s) => s.item);
const objectives = objectivesOf(BIOCHEMISTRY).map((o) => o.item);
const contentIds = new Set(ALL_CONCEPTS.map((c) => c.id));

describe('Biochemistry coverage checklist', () => {
  it('keeps the six subdivisions in the agreed order', () => {
    expect(BIOCHEMISTRY.subdivisions.map((s) => s.title)).toEqual([
      'Molecular biochemistry', 'Cellular biochemistry', 'Laboratory techniques', 'Genetics', 'Nutrition', 'Metabolism',
    ]);
  });

  it('traces every first-version checklist concept to a subtopic', () => {
    const traced = new Set(subtopics.flatMap((s) => s.origin));
    for (const id of BIOCHEMISTRY_V1_IDS) expect(traced.has(id), id).toBe(true);
  });

  it('uses unique ids at every level', () => {
    const ids = BIOCHEMISTRY.subdivisions.flatMap((s) => [s.id, ...s.topics.flatMap((t) => [t.id, ...t.subtopics.flatMap((st) => [st.id, ...st.objectives.map((o) => o.id)])])]);
    expect(new Set(ids).size).toBe(ids.length);
  });

  it('gives every subtopic outline links and every objective a depth', () => {
    for (const s of subtopics) {
      expect(s.outline.length, s.id).toBeGreaterThan(0);
      expect(s.objectives.length, s.id).toBeGreaterThan(0);
      for (const ref of [...s.outline, ...s.objectives.flatMap((o) => o.outline)]) {
        expect(OUTLINE_AREAS as readonly string[], s.id).toContain(ref.area);
        expect(!!ref.term !== !!ref.strand, `${s.id}: a ref is either listed (term) or foundational (strand)`).toBe(true);
      }
    }
    for (const o of objectives) {
      expect(o.depth.length, o.id).toBeGreaterThan(0);
      expect(new Set(o.depth).size, o.id).toBe(o.depth.length);
    }
  });

  it('requires a complete integration chain on every disorder objective', () => {
    for (const o of objectives.filter((o) => o.kind === 'disorder')) {
      const i = o.integration!;
      expect(i, o.id).toBeTruthy();
      expect(i.block.length, o.id).toBeGreaterThan(0);
      expect(i.accumulates.length + i.decreased.length, `${o.id}: something accumulates or decreases`).toBeGreaterThan(0);
      expect(i.physiology.length, o.id).toBeGreaterThan(0);
      expect(i.findings.length, o.id).toBeGreaterThan(0);
    }
  });

  it('maps only to existing content, and only real coverage counts', () => {
    for (const o of objectives) {
      for (const id of [...o.existing, ...o.mentions]) expect(contentIds.has(id), `${o.id} → ${id}`).toBe(true);
      expect(o.existing.filter((id) => o.mentions.includes(id)), o.id).toEqual([]);
      if (o.coverage === 'missing') expect(o.existing, `${o.id}: missing objectives cannot list teaching content`).toEqual([]);
      else expect(o.existing.length, o.id).toBeGreaterThan(0);
      if (o.coverage === 'partial') expect(o.note, o.id).toBeTruthy();
    }
  });

  it('marks a subtopic covered only when every objective is covered', () => {
    const base = objectives[0]!;
    const covered: Objective = { ...base, coverage: 'covered' };
    const missing: Objective = { ...base, coverage: 'missing' };
    expect(rollUp([covered, covered])).toBe('covered');
    expect(rollUp([covered, missing])).toBe('partial');
    expect(rollUp([missing, missing])).toBe('missing');
  });
});
