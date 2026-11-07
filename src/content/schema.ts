/**
 * Medical content schema. Content is data, separate from game logic: every game reads the same
 * concepts and items, and every item links back to one or more concepts so analytics can roll up
 * performance to concept → topic → organ system → discipline.
 *
 * See CONTENT_SCHEMA.md for the field-by-field description.
 */
import type { PackageId } from '@/config/packages';

export type DisciplineId =
  | 'anatomy'
  | 'embryology'
  | 'physiology'
  | 'biochemistry'
  | 'genetics'
  | 'cell-biology'
  | 'histology'
  | 'pathology'
  | 'pharmacology'
  | 'microbiology'
  | 'immunology'
  | 'behavioral'
  | 'biostatistics'
  | 'ethics'
  | 'nutrition';

export type SystemId =
  | 'human-development'
  | 'blood-immune'
  | 'nervous-behavioral'
  | 'musculoskeletal-skin'
  | 'cardiovascular'
  | 'respiratory'
  | 'renal'
  | 'gastrointestinal'
  | 'reproductive'
  | 'endocrine'
  | 'multisystem'
  | 'biostats-epi'
  | 'social-sciences';

/** 1 = recall of a core fact … 5 = multi-step application. */
export type Difficulty = 1 | 2 | 3 | 4 | 5;

/**
 * Editorial lifecycle. Only `published` reaches learners in a production build. Everything authored
 * so far is `draft` with provenance `ai-drafted`: it has NOT been medically reviewed.
 */
export type ReviewStatus = 'draft' | 'in_review' | 'approved' | 'published' | 'retired';

export interface ReviewInfo {
  status: ReviewStatus;
  provenance: 'ai-drafted' | 'human-authored' | 'imported';
  reviewedBy?: string;
  reviewedAt?: string; // ISO date
  notes?: string;
}

export interface Topic {
  id: string;
  title: string;
  system: SystemId;
  discipline: DisciplineId;
}

/** A reference to an entry in the source register (`sources.ts`), with an optional locator. */
export interface Citation {
  sourceId: string;
  locator?: string;
  /** Exact, resolvable URL of the cited page or record. Required for curriculum-linked content. */
  url?: string;
  /** Stable identifier, e.g. "PMID 20301575; NBK1401". */
  ref?: string;
  /**
   * How the claim support was checked: full text read, published summary/abstract read, or the
   * record's existence and scope only (full text not accessible; reviewer should confirm).
   */
  checked?: 'full-text' | 'summary' | 'existence';
}

/** The 18 major areas of the official USMLE Content Outline (2026). */
export const OUTLINE_AREAS = [
  'Human Development',
  'Immune System',
  'Blood & Lymphoreticular System',
  'Behavioral Health',
  'Nervous System & Special Senses',
  'Skin & Subcutaneous Tissue',
  'Musculoskeletal System',
  'Cardiovascular System',
  'Respiratory System',
  'Gastrointestinal System',
  'Renal & Urinary System',
  'Pregnancy, Childbirth, & the Puerperium',
  'Female and Transgender Reproductive System & Breast',
  'Male and Transgender Reproductive System',
  'Endocrine System',
  'Multisystem Processes & Disorders',
  'Biostatistics, Epidemiology/Population Health, & Interpretation of the Medical Literature',
  'Social Sciences',
] as const;
export type OutlineArea = (typeof OUTLINE_AREAS)[number];

/**
 * Where a concept sits in the official USMLE Content Outline. `listed` is true when the outline names
 * the topic (or its example group) explicitly, false when it is foundational science the outline
 * distributes across organ systems (e.g. normal physiology, drug mechanisms).
 */
export interface OutlineRef {
  area: OutlineArea;
  section: string;
  listed: boolean;
}

export interface Concept {
  id: string;
  title: string;
  packages: PackageId[];
  discipline: DisciplineId;
  /** Additional disciplines the concept also belongs to (multi-tagging). */
  alsoDisciplines?: DisciplineId[];
  system: SystemId;
  alsoSystems?: SystemId[];
  topic: string; // Topic.id
  difficulty: Difficulty;
  objectives: string[];
  facts: string[];
  mechanism: string;
  associations: string[];
  misconception: string;
  /** 10–20 second read. */
  quick: string;
  /** Structured deeper explanation (paragraphs). */
  detailed: string[];
  takeaway: string;
  related: string[]; // Concept ids
  /** Mapping to the official USMLE Content Outline (required for every Step 1 concept). */
  outline?: OutlineRef;
  /**
   * Curriculum objective ids (src/content/curriculum) this concept teaches in full. Content written
   * after the subject-by-subject strategy must declare them so coverage is computed, not judged.
   */
  curriculum?: string[];
  /** Step 1 relevance of the concept as a whole (items carry their own label). */
  relevance?: Relevance;
  /** Reason for a supplementary or specialist concept label; inherited by items that inherit the label. */
  relevanceNote?: string;
  /** For each fact (same index), the indices of `citations` that support it. */
  factRefs?: number[][];
  /**
   * Indices of facts that are reasoned from pathway logic or otherwise still need direct source
   * confirmation. A fact is also pending when every supporting citation was checked only for
   * existence. Pending facts block medical approval (see `factEvidence`, validator).
   */
  factPending?: number[];
  citations: Citation[];
  review: ReviewInfo;
  version: number;
  updatedAt: string;
}

/** Depth of reasoning an item assesses (matches the curriculum depth levels). */
export type AssessedDepth = 'recognition' | 'mechanism' | 'application';

/**
 * What the learner actually has to do. A vignette is not automatically "application":
 * - recall: retrieve a fact; identification: name a diagnosis/enzyme/gene from a classic picture
 *   (both count as recognition)
 * - mechanism: explain why or how (counts as mechanism)
 * - interpretation: read data (labs, pedigree, tumor testing, graphs); prediction: predict the
 *   biochemical or clinical consequence of a change or intervention; comparison: discriminate
 *   between mechanisms or look-alike disorders; multistep: chain two or more inferences
 *   (these count as application)
 */
export type Reasoning = 'recall' | 'identification' | 'mechanism' | 'interpretation' | 'prediction' | 'comparison' | 'multistep';

export const REASONING_DEPTH: Record<Reasoning, AssessedDepth> = {
  recall: 'recognition',
  identification: 'recognition',
  mechanism: 'mechanism',
  interpretation: 'application',
  prediction: 'application',
  comparison: 'application',
  multistep: 'application',
};

/**
 * Step 1 relevance of an item or concept. Independent of cognitive depth (`AssessedDepth`): a complex
 * application vignette on a classic mechanism can be CORE; a one-line recall of an obscure finding
 * can be SPECIALIST.
 * - core: topic and expected depth are supported by the official Step 1 outline and mainstream Step 1
 *   preparation standards.
 * - supplementary: within the curriculum but beyond core depth; reinforces it and may appear in games
 *   at a lower frequency.
 * - specialist: obscure, experimental or postgraduate depth. Never served in games; kept for review.
 * - unreviewed: not yet evaluated. Nothing is assumed to be core.
 */
export type Relevance = 'core' | 'supplementary' | 'specialist' | 'unreviewed';

/** Explicit label, or `unreviewed` until an editor evaluates the item. */
export function itemRelevance(i: { relevance?: Relevance }): Relevance {
  return i.relevance ?? 'unreviewed';
}

/** Relative frequency in normal gameplay: core is prioritised, specialist never appears. */
export const RELEVANCE_WEIGHT: Record<Relevance, number> = { core: 3, supplementary: 1, unreviewed: 1, specialist: 0 };

/** Gameplay weight of an item from its relevance. */
export const relevanceWeight = (i: { relevance?: Relevance }): number => RELEVANCE_WEIGHT[itemRelevance(i)];

/** Per-fact evidence status: verified directly in a read source, or awaiting confirmation. */
export function factEvidence(c: Pick<Concept, 'facts' | 'factRefs' | 'factPending' | 'citations'>): ('verified' | 'pending')[] {
  return c.facts.map((_, i) => {
    if (c.factPending?.includes(i)) return 'pending';
    const refs = c.factRefs?.[i] ?? [];
    return refs.some((r) => c.citations[r]?.checked === 'full-text' || c.citations[r]?.checked === 'summary') ? 'verified' : 'pending';
  });
}

interface ItemBase {
  id: string;
  conceptIds: string[];
  /** Curriculum objective ids this item assesses (required for curriculum-linked content). */
  objectiveIds?: string[];
  /** Depth of reasoning the item assesses. */
  depth?: AssessedDepth;
  /** The reasoning task (determines depth for curriculum-linked content). */
  reasoning?: Reasoning;
  /** For application MCQs: the inferential steps the learner must make (≥ 2). Sequence items use `steps` for their ordered steps. */
  steps?: string[];
  /** Step 1 relevance (see `Relevance`); `unreviewed` when absent. Independent of `depth`. */
  relevance?: Relevance;
  /** Why an item is supplementary or specialist (or another note for editors). */
  relevanceNote?: string;
  difficulty: Difficulty;
  review: ReviewInfo;
  version: number;
}

export interface McqOption {
  id: string;
  text: string;
  /** Why this option is not the best answer (required for every distractor). */
  whyWrong?: string;
}

/** Single-best-answer question: used by Survival, Review and (later) Step 1 Challenge. */
export interface McqItem extends ItemBase {
  kind: 'mcq';
  stem: string;
  options: McqOption[];
  answerId: string;
  mini: string;
  mechanism: string;
  takeaway: string;
  estSeconds: number;
}

/** Fact or Fiction statement. */
export interface TrueFalseItem extends ItemBase {
  kind: 'tf';
  statement: string;
  isTrue: boolean;
  /** For false statements, the corrected fact. For true ones, a one-line reinforcement. */
  correction: string;
  mini: string;
}

/** Crossword entry: answer is A–Z only, stored upper-case. */
export interface ClueItem extends ItemBase {
  kind: 'clue';
  answer: string;
  /** Shown to the solver (no enumeration; the grid gives the length). */
  clue: string;
  mini: string;
}

/** A Connections group: a defensible category plus 4+ candidate members. Puzzles pick 4 of them. */
export interface ConnectionGroup extends ItemBase {
  kind: 'group';
  label: string;
  members: string[];
  explanation: string;
  /** 1 = most obvious group … 4 = trickiest. Drives colour/order. */
  tier: 1 | 2 | 3 | 4;
}

export interface CaseStage {
  label: 'Presentation' | 'History' | 'Examination' | 'Laboratory' | 'Imaging & tests' | 'Further clue';
  text: string;
}

/** Mystery Patient case: progressive reveal, then a mechanism-focused single-best-answer question. */
export interface CaseItem extends ItemBase {
  kind: 'case';
  title: string;
  stages: CaseStage[];
  question: string;
  options: McqOption[];
  answerId: string;
  explanation: string;
  mechanism: string;
  takeaway: string;
  differentials: { name: string; why: string }[];
}

/** One group inside a curated Connections puzzle. */
export interface PuzzleGroupDef {
  id: string;
  label: string;
  /** Exactly 4 tiles. */
  members: string[];
  explanation: string;
  tier: 1 | 2 | 3 | 4;
  conceptIds: string[];
  objectiveIds?: string[];
  /**
   * Every term (on or off the board) that genuinely belongs to this category. Used to prove that
   * each tile has exactly one home and that the puzzle has a single solution.
   */
  accepts: string[];
}

/**
 * A complete, curated Medical Connections puzzle: 16 tiles in four groups of four. `decoys` are
 * other categories a learner could plausibly see on the board (red herrings); the verifier proves no
 * alternative partition of the 16 tiles exists using the four groups plus these decoys.
 */
export interface ConnectionsPuzzleItem extends ItemBase {
  kind: 'connections';
  title: string;
  groups: PuzzleGroupDef[];
  decoys: { label: string; accepts: string[] }[];
}

/** Mechanism Lab: rebuild a pathway or cascade by putting its steps in order. */
export interface SequenceItem extends ItemBase {
  kind: 'sequence';
  title: string;
  prompt: string;
  /** Steps in the correct order (4–8). */
  steps: string[];
  explanation: string;
}

/** Match Up: pair each term with its partner (drug → target, enzyme → product, toxin → target). */
export interface MatchItem extends ItemBase {
  kind: 'match';
  title: string;
  prompt: string;
  /** 4–6 pairs; every left and every right is unique, so each pairing has one correct answer. */
  pairs: { left: string; right: string }[];
  explanation: string;
}

export type GameItem = McqItem | TrueFalseItem | ClueItem | ConnectionGroup | CaseItem | ConnectionsPuzzleItem | SequenceItem | MatchItem;
