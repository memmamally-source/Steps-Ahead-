import { describe, expect, it } from 'vitest';
import { ALL_CONCEPTS, ALL_ITEMS } from '../../index';
import { OUTLINE_AREAS } from '../../schema';
import { BIOCHEMISTRY, BIOCHEMISTRY_V1_IDS } from '../biochemistry';
import { auditObjective, objectivesOf, rollUp, subtopicsOf } from '../audit';
import { NUTRITION_CROSS_CUTTING } from '../crossCutting';

const subtopics = subtopicsOf(BIOCHEMISTRY).map((s) => s.item);
const objectives = objectivesOf(BIOCHEMISTRY).map((o) => o.item);
const objectiveIds = new Set(objectives.map((o) => o.id));
const contentIds = new Set(ALL_CONCEPTS.map((c) => c.id));
const content = { concepts: ALL_CONCEPTS, items: ALL_ITEMS };

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

  it('rolls coverage up strictly', () => {
    expect(rollUp(['covered', 'covered'])).toBe('covered');
    expect(rollUp(['covered', 'missing'])).toBe('partial');
    expect(rollUp(['covered', 'core'])).toBe('core');
    expect(rollUp(['core', 'partial'])).toBe('partial');
    expect(rollUp(['missing', 'missing'])).toBe('missing');
  });

  it('keeps nutrition cross-cutting links valid', () => {
    for (const [subject, ids] of Object.entries(NUTRITION_CROSS_CUTTING)) {
      for (const id of ids) expect(objectiveIds.has(id), `${subject} → ${id}`).toBe(true);
    }
  });
});

describe('Curriculum-linked content', () => {
  const linkedConcepts = ALL_CONCEPTS.filter((c) => c.curriculum?.length);
  const linkedItems = ALL_ITEMS.filter((i) => i.objectiveIds?.length);

  it('links only to real objectives', () => {
    for (const c of linkedConcepts) for (const id of c.curriculum!) expect(objectiveIds.has(id), `${c.id} → ${id}`).toBe(true);
    for (const i of linkedItems) for (const id of i.objectiveIds!) expect(objectiveIds.has(id), `${i.id} → ${id}`).toBe(true);
  });

  it('tags every linked item with a depth and keeps it within its concepts’ objectives', () => {
    for (const i of linkedItems) {
      expect(i.depth, i.id).toBeTruthy();
      const allowed = new Set(ALL_CONCEPTS.filter((c) => i.conceptIds.includes(c.id)).flatMap((c) => c.curriculum ?? []));
      for (const id of i.objectiveIds!) expect(allowed.has(id), `${i.id}: ${id} not taught by its concepts`).toBe(true);
    }
  });

  it('assesses every linked objective at every depth the checklist requires', () => {
    for (const c of linkedConcepts) {
      for (const id of c.curriculum!) {
        const o = objectives.find((x) => x.id === id)!;
        const audit = auditObjective(o, content);
        expect(audit.missingDepths, `${id} (${c.id})`).toEqual([]);
      }
    }
  });

  it('keeps all new content in draft until medical review', () => {
    for (const c of linkedConcepts) expect(c.review.status, c.id).toBe('draft');
    for (const i of linkedItems) expect(i.review.status, i.id).toBe('draft');
  });
});
