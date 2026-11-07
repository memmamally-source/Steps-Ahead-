import type { Coverage, Depth, Objective, Subject, Subtopic } from './types';
import type { Concept, GameItem, ReviewStatus } from '../schema';
import { itemRelevance, type Relevance } from '../schema';
import { OBJECTIVE_RELEVANCE } from './relevance';

export interface Located<T> {
  subdivision: string;
  topic: string;
  subtopic?: string;
  item: T;
}

export function subtopicsOf(subject: Subject): Located<Subtopic>[] {
  return subject.subdivisions.flatMap((s) => s.topics.flatMap((t) => t.subtopics.map((item) => ({ subdivision: s.title, topic: t.title, item }))));
}

export function objectivesOf(subject: Subject): Located<Objective>[] {
  return subtopicsOf(subject).flatMap(({ subdivision, topic, item }) =>
    item.objectives.map((o) => ({ subdivision, topic, subtopic: item.title, item: o })));
}

/**
 * Coverage of a group of objectives. Strict rule: "covered" only when EVERY objective is covered;
 * "missing" only when none has any coverage; anything else is "partial".
 */
export function rollUp(coverages: Coverage[]): Coverage {
  if (coverages.length && coverages.every((c) => c === 'covered')) return 'covered';
  if (coverages.every((c) => c === 'missing')) return 'missing';
  return 'partial';
}

export type ObjectiveReview = 'no content' | ReviewStatus;

/**
 * Complete, independently playable items in normal gameplay: everything except Connections
 * category-bank entries and items judged `specialist` (excluded pending editorial review).
 */
export const isPlayable = (i: GameItem) => i.kind !== 'group' && itemRelevance(i) !== 'specialist';
/** Step 1 relevance of an objective: the editorial review map, else `unreviewed` (never assumed core). */
export const objectiveRelevance = (o: Objective): Relevance => OBJECTIVE_RELEVANCE[o.id]?.relevance ?? 'unreviewed';
const ORDER: ReviewStatus[] = ['draft', 'in_review', 'approved', 'published', 'retired'];

/** The audit result for one objective, combining curriculum-linked content with legacy judgements. */
export interface ObjectiveAudit {
  coverage: Coverage;
  /** How coverage was determined. */
  basis: 'linked content' | 'legacy judgement';
  /** Concepts teaching the objective: linked concepts plus legacy mappings. */
  concepts: string[];
  /** Concepts linked through `curriculum` (new content). */
  linked: string[];
  /** Items assessing the objective (linked items, plus items of legacy-mapped concepts). */
  items: GameItem[];
  depthsAssessed: Depth[];
  missingDepths: Depth[];
  review: ObjectiveReview;
  note?: string;
}

export interface ContentIndex {
  concepts: Concept[];
  items: GameItem[];
}

/**
 * Coverage is computed when curriculum-linked content exists: the objective is covered only if a
 * linked concept teaches it AND linked items assess every depth the checklist requires. Otherwise
 * the manual legacy judgement in the checklist applies.
 */
export function auditObjective(o: Objective, content: ContentIndex): ObjectiveAudit {
  const linked = content.concepts.filter((c) => c.curriculum?.includes(o.id)).map((c) => c.id);
  // Connections category-bank entries are builder input, not playable on their own: they never count
  // as items or as evidence that a depth is assessed.
  const playable = content.items.filter((i) => isPlayable(i));
  const linkedItems = playable.filter((i) => i.objectiveIds?.includes(o.id));
  const legacyItems = playable.filter((i) => !i.objectiveIds && i.conceptIds.some((id) => o.existing.includes(id)));
  const items = [...new Set([...linkedItems, ...legacyItems])];
  const concepts = [...new Set([...linked, ...o.existing])];
  const depthsAssessed = [...new Set(linkedItems.map((i) => i.depth).filter((d): d is Depth => !!d))];
  const missingDepths = o.depth.filter((d) => !depthsAssessed.includes(d));
  const statuses = concepts
    .map((id) => content.concepts.find((c) => c.id === id)?.review.status)
    .filter((s): s is ReviewStatus => !!s);
  const review: ObjectiveReview = statuses.length ? statuses.reduce((a, b) => (ORDER.indexOf(a) <= ORDER.indexOf(b) ? a : b)) : 'no content';

  if (linked.length) {
    const coverage: Coverage = missingDepths.length ? 'partial' : 'covered';
    return {
      coverage, basis: 'linked content', concepts, linked, items, depthsAssessed, missingDepths, review,
      note: missingDepths.length ? `Linked content does not yet assess: ${missingDepths.join(', ')}.` : undefined,
    };
  }
  return { coverage: o.coverage, basis: 'legacy judgement', concepts, linked, items, depthsAssessed, missingDepths, review, note: o.note };
}
