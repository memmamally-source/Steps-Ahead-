/**
 * Curriculum architecture: subject → subdivision → topic → checklist concept.
 *
 * The checklist defines what Step 1 requires BEFORE content is written, so coverage can be
 * audited by code. Authority: the official USMLE Content Outline (2026), linked per concept.
 * Subdivision names follow the owner's editorial plan; no reference-book text, tables or
 * structure below the subdivision level is reproduced here.
 */
import type { OutlineArea } from '../schema';

/** What the learner must be able to do (Bloom-style, simplified for Step 1). */
export type Depth = 'recall' | 'understand' | 'apply';

/** Elements a complete concept must teach where relevant (owner's Step B list). */
export type Element = 'mechanism' | 'enzyme-pathway' | 'disease' | 'presentation' | 'labs' | 'genetics' | 'pharmacology' | 'histology';

export interface OutlineLink {
  area: OutlineArea;
  section: string;
  /** true: the outline names the topic or its example group; false: foundational science the outline distributes across systems. */
  listed: boolean;
}

/** Coverage judgement for existing content, made during the audit (not automatic). */
export type Coverage = 'covered' | 'partial' | 'missing';

export interface ChecklistConcept {
  id: string;
  title: string;
  /** Highest depth Step 1 expects for this concept. */
  depth: Depth;
  /** The points a learner must master: the specification content is written against. */
  must: string[];
  elements: Element[];
  outline: OutlineLink[];
  /** Existing concept ids that address this checklist concept. */
  existing: string[];
  coverage: Coverage;
  /** What existing content lacks (for partial) or a note for missing. */
  gap?: string;
  /** Relative Step 1 yield to order the work: 3 = core, 2 = important, 1 = supporting. */
  priority: 1 | 2 | 3;
}

export interface Topic {
  id: string;
  title: string;
  concepts: ChecklistConcept[];
}

export interface Subdivision {
  id: string;
  title: string;
  /** What Step 1 tests in this subdivision and at what depth. */
  scope: string;
  topics: Topic[];
}

export interface Subject {
  id: string;
  title: string;
  status: 'architecture' | 'in-development' | 'awaiting-approval' | 'approved';
  subdivisions: Subdivision[];
}
