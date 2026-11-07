/**
 * Curriculum architecture:
 *   Subject → Subdivision → Topic → Subtopic → Assessable learning objective.
 *
 * The checklist defines what Step 1 requires BEFORE content is written, so coverage can be audited
 * by code. Authority: the official USMLE Content Outline (2026). A private editorial reference is
 * used by the owner to check scope; none of its text, tables, mnemonics or structure below the
 * subdivision level is reproduced here.
 */
import type { OutlineArea } from '../schema';

/**
 * Depth Step 1 can test for an objective.
 * - recognition: recall or identify a fact, term, association or finding
 * - mechanism: explain why or how (the biochemical or physiological basis)
 * - application: use the knowledge on a clinical vignette, lab panel, pedigree or graph
 */
export type Depth = 'recognition' | 'mechanism' | 'application';

/** Elements a complete subtopic teaches where relevant. */
export type Element = 'mechanism' | 'enzyme-pathway' | 'disease' | 'presentation' | 'labs' | 'genetics' | 'pharmacology' | 'histology' | 'graph';

/**
 * Link to the official outline.
 * - Listed: `term` is copied exactly from the outline (the outline names the topic or its example).
 * - Foundational: no `term`; `strand` names the foundational-science strand that the 2024 outline update
 *   redistributed into organ systems (still assessed within an organ system or disease process).
 */
export interface OutlineRef {
  area: OutlineArea;
  /** Section heading exactly as printed in the outline. */
  section: string;
  /** Bullet category inside the section, exactly as printed (when the section has categories). */
  category?: string;
  /** Exact listed term or example. Present = listed; absent = foundational. */
  term?: string;
  /** Foundational strand when `term` is absent. */
  strand?: FoundationalStrand;
}

export type FoundationalStrand =
  | 'Biochemistry and molecular biology'
  | 'Biology of cells'
  | 'Human Development and genetics'
  | 'Pharmacodynamic and pharmacokinetic processes'
  | 'Normal structure and function of organ systems';

/** Later subjects in the owner's development order, used for cross-links. */
export type SubjectId =
  | 'cardiovascular' | 'endocrine' | 'gastrointestinal' | 'hematology-oncology' | 'msk-skin'
  | 'neurology' | 'psychiatry' | 'renal' | 'reproductive' | 'respiratory' | 'immunology'
  | 'microbiology' | 'pathology' | 'pharmacology' | 'public-health';

/** Where another subject owns part of the knowledge; Biochemistry teaches only its own part. */
export interface CrossLink {
  subject: SubjectId;
  /** What the other subject owns (not duplicated here). */
  owns: string;
}

/** Coverage judgement for existing content, made by reading the content (not automatic). */
export type Coverage = 'covered' | 'partial' | 'missing';

/**
 * Metabolic integration for a disorder objective: the chain a learner must reason through, from the
 * blocked step to the bedside and the lab.
 */
export interface Integration {
  block: string;
  accumulates: string[];
  decreased: string[];
  physiology: string[];
  findings: string[];
}

export interface Objective {
  /** Globally unique: `${subtopicId}.${key}`. */
  id: string;
  /** Assessable statement (what the learner must be able to do). */
  text: string;
  depth: Depth[];
  /** A disorder objective must carry an integration chain. */
  kind: 'concept' | 'disorder';
  integration?: Integration;
  /** Existing content concepts that teach THIS objective (fully or partly). */
  existing: string[];
  /** Existing concepts that merely mention the topic. Never counts as coverage. */
  mentions: string[];
  coverage: Coverage;
  /** What is missing, or why coverage was judged this way. */
  note?: string;
  /** When another subject owns the clinical detail of this objective. */
  home?: SubjectId;
  /** Outline references specific to this objective (in addition to the subtopic's). */
  outline: OutlineRef[];
  /**
   * Step 1 relevance. Set to 'specialist' only for objectives judged beyond expected Step 1 depth
   * (excluded from new content). Otherwise derived: application if it requires application depth,
   * else core (see objectivePriority in audit.ts).
   */
  priority?: 'core' | 'application' | 'specialist';
}

export interface Subtopic {
  id: string;
  title: string;
  /** Relative Step 1 yield: 3 = core, 2 = important, 1 = supporting. */
  priority: 1 | 2 | 3;
  elements: Element[];
  outline: OutlineRef[];
  crossLinks: CrossLink[];
  objectives: Objective[];
  /** Ids of the first-version checklist concepts this subtopic came from (traceability); empty = new. */
  origin: string[];
}

export interface Topic {
  id: string;
  title: string;
  subtopics: Subtopic[];
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
