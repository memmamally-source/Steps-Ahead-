import type { Coverage, Objective, Subject, Subtopic } from './types';
import type { ReviewStatus } from '../schema';

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
export function rollUp(objectives: Objective[]): Coverage {
  if (objectives.length && objectives.every((o) => o.coverage === 'covered')) return 'covered';
  if (objectives.every((o) => o.coverage === 'missing')) return 'missing';
  return 'partial';
}

export type ObjectiveReview = 'no content' | ReviewStatus;

const ORDER: ReviewStatus[] = ['draft', 'in_review', 'approved', 'published', 'retired'];

/** Medical review status of the content mapped to an objective: the least advanced status wins. */
export function reviewOf(o: Objective, statusOf: (conceptId: string) => ReviewStatus | undefined): ObjectiveReview {
  const statuses = o.existing.map(statusOf).filter((s): s is ReviewStatus => !!s);
  if (!statuses.length) return 'no content';
  return statuses.reduce((a, b) => (ORDER.indexOf(a) <= ORDER.indexOf(b) ? a : b));
}
