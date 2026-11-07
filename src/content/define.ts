/**
 * Authoring helpers. A concept is written once with its items alongside it, then split into
 * normalised Concept and GameItem records with stable ids (`<conceptId>:mcq1`, `:tf1`, `:clue1`).
 * Never reorder an existing concept's items: ids are how learner history links to content.
 */
import { REASONING_DEPTH } from './schema';
import type {
  AssessedDepth,
  Reasoning,
  ClueItem,
  Concept,
  Difficulty,
  GameItem,
  McqItem,
  Priority,
  ReviewInfo,
  TrueFalseItem,
} from './schema';

export const AI_DRAFT: ReviewInfo = { status: 'draft', provenance: 'ai-drafted' };
const AUTHORED = '2026-11-05';

type Opt = [id: string, text: string, whyWrong?: string];

export interface McqDraft {
  stem: string;
  options: Opt[];
  answer: string;
  mini: string;
  mechanism?: string;
  takeaway?: string;
  difficulty?: Difficulty;
  estSeconds?: number;
  /** Curriculum objectives assessed; defaults to all of the concept's curriculum objectives. */
  objectives?: string[];
  /** Required for curriculum-linked concepts. */
  depth?: AssessedDepth;
  /** Reasoning task; when given, it determines the depth. */
  reasoning?: Reasoning;
  /** Required for application-level reasoning: the inferential steps (≥ 2). */
  steps?: string[];
  /** Step 1 relevance; omit to derive it from depth (see itemPriority). */
  priority?: Priority;
  priorityNote?: string;
}

export interface TfDraft {
  statement: string;
  isTrue: boolean;
  correction: string;
  difficulty?: Difficulty;
  objectives?: string[];
  /** Defaults to recognition. */
  depth?: AssessedDepth;
  reasoning?: Reasoning;
  priority?: Priority;
  priorityNote?: string;
}

export interface ClueDraft {
  answer: string;
  clue: string;
  difficulty?: Difficulty;
  objectives?: string[];
  /** Defaults to recognition. */
  depth?: AssessedDepth;
  reasoning?: Reasoning;
  priority?: Priority;
  priorityNote?: string;
}

export type ConceptDraft = Omit<Concept, 'packages' | 'review' | 'version' | 'updatedAt' | 'citations'> & {
  citations?: Concept['citations'];
  mcq?: McqDraft[];
  tf?: TfDraft[];
  clues?: ClueDraft[];
};

export interface Bundle {
  concepts: Concept[];
  items: GameItem[];
}

export function defineConcepts(drafts: ConceptDraft[]): Bundle {
  const concepts: Concept[] = [];
  const items: GameItem[] = [];
  for (const d of drafts) {
    const { mcq = [], tf = [], clues = [], citations = [], ...rest } = d;
    const link = (objectives: string[] | undefined, depth: AssessedDepth | undefined, reasoning: Reasoning | undefined) =>
      d.curriculum
        ? { objectiveIds: objectives ?? d.curriculum, depth: reasoning ? REASONING_DEPTH[reasoning] : depth, ...(reasoning ? { reasoning } : {}) }
        : {};
    concepts.push({
      ...rest,
      citations,
      packages: ['step1'],
      review: AI_DRAFT,
      version: 1,
      updatedAt: AUTHORED,
    });
    mcq.forEach((m, i) => {
      const item: McqItem = {
        kind: 'mcq',
        id: `${d.id}:mcq${i + 1}`,
        conceptIds: [d.id],
        ...link(m.objectives, m.depth, m.reasoning),
        ...(m.steps ? { steps: m.steps } : {}),
        ...(m.priority ? { priority: m.priority } : {}), ...(m.priorityNote ? { priorityNote: m.priorityNote } : {}),
        difficulty: m.difficulty ?? d.difficulty,
        review: AI_DRAFT,
        version: 1,
        stem: m.stem,
        options: m.options.map(([id, text, whyWrong]) => ({ id, text, whyWrong })),
        answerId: m.answer,
        mini: m.mini,
        mechanism: m.mechanism ?? d.mechanism,
        takeaway: m.takeaway ?? d.takeaway,
        estSeconds: m.estSeconds ?? 45,
      };
      items.push(item);
    });
    tf.forEach((t, i) => {
      const item: TrueFalseItem = {
        kind: 'tf',
        id: `${d.id}:tf${i + 1}`,
        conceptIds: [d.id],
        ...link(t.objectives, t.depth ?? 'recognition', t.reasoning ?? (d.curriculum ? 'recall' : undefined)),
        ...(t.priority ? { priority: t.priority } : {}), ...(t.priorityNote ? { priorityNote: t.priorityNote } : {}),
        difficulty: t.difficulty ?? d.difficulty,
        review: AI_DRAFT,
        version: 1,
        statement: t.statement,
        isTrue: t.isTrue,
        correction: t.correction,
        mini: d.quick,
      };
      items.push(item);
    });
    clues.forEach((c, i) => {
      const item: ClueItem = {
        kind: 'clue',
        id: `${d.id}:clue${i + 1}`,
        conceptIds: [d.id],
        ...link(c.objectives, c.depth ?? 'recognition', c.reasoning ?? (d.curriculum ? 'recall' : undefined)),
        ...(c.priority ? { priority: c.priority } : {}), ...(c.priorityNote ? { priorityNote: c.priorityNote } : {}),
        difficulty: c.difficulty ?? d.difficulty,
        review: AI_DRAFT,
        version: 1,
        answer: c.answer.toUpperCase(),
        clue: c.clue,
        mini: d.quick,
      };
      items.push(item);
    });
  }
  return { concepts, items };
}
