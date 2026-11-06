# Content schema

Types live in `src/content/schema.ts`. Content is data, separate from game logic. Every game item links to one or more concepts, and analytics roll performance up from concept to topic, organ system and discipline.

## Concept
| Field | Meaning |
| --- | --- |
| `id` | Permanent kebab-case id |
| `title` | Display name |
| `packages` | `step1` now; `step2ck`/`step3` later |
| `discipline`, `alsoDisciplines` | Primary plus extra discipline tags |
| `system`, `alsoSystems` | Primary plus extra organ-system tags |
| `topic` | Level-3 topic id (`taxonomy.ts` `TOPICS`) |
| `difficulty` | 1 (core recall) to 5 (multi-step application) |
| `objectives` | Learning objectives |
| `facts` | Verified facts (≥3) |
| `mechanism` | Underlying mechanism |
| `associations` | Clinical/lab associations |
| `misconception` | A common misconception, corrected |
| `quick` | ≤60 words (about a 20 s read) |
| `detailed` | ≥2 paragraphs |
| `takeaway` | One-line Step 1 takeaway |
| `related` | Related concept ids (validated) |
| `curriculum` | Curriculum objective ids (`src/content/curriculum`) the concept teaches in full. Required for all content written under the subject-by-subject strategy |
| `citations` | `{ sourceId, locator, url, ref, checked }` into the source register. Curriculum-linked content must give an exact URL, an identifier (PMID/NBK) where one exists, and how it was checked (`full-text`, `summary`, `existence`) |
| `factRefs` | For each fact, the indices of the citations supporting it (required for curriculum-linked content) |
| `factPending` | Indices of facts reasoned from pathway logic that still need direct source confirmation. `factEvidence()` also marks a fact pending when every supporting citation was checked only for `existence`. The validator rejects `approved`/`published` status while any fact is pending: a citation alone never makes content approvable |
| `review` | `{ status, provenance, reviewedBy?, reviewedAt?, notes? }` |
| `version`, `updatedAt` | Versioning |

## Items (`GameItem` union)
Shared fields: `id`, `conceptIds`, `difficulty`, `review`, `version`, and for curriculum-linked content `objectiveIds` (objectives assessed) and `depth` (`recognition`, `mechanism` or `application`). Linked items also declare `reasoning` (`recall`, `identification`, `mechanism`, `interpretation`, `prediction`, `comparison`, `multistep`), from which depth is derived; a vignette that only asks for the classic diagnosis is identification (recognition). Difficulty must match the reasoning (tested).

| Kind | Used by | Specific fields |
| --- | --- | --- |
| `mcq` | Survival, Review, lessons, (Step 1 Challenge) | `stem`, `options[{id,text,whyWrong}]` (every distractor explains itself), `answerId`, `mini`, `mechanism`, `takeaway`, `estSeconds` |
| `tf` | Fact or Fiction, Survival, Review | `statement`, `isTrue`, `correction`, `mini` |
| `clue` | Crossword | `answer` (A–Z, 3–15 letters), `clue` (must not contain the answer), `mini` |
| `group` | Connections | `label`, `members` (≥4, complete for the terms used), `explanation`, `tier` 1–4 |
| `connections` | Medical Connections (curated) | `title`, `groups[4]` each with 4 `members` and the full `accepts` list, `decoys[]`; verified to have exactly one solution against the global category catalog (`connectionsCatalog.ts`: plausible groupings plus every bank, curated and decoy category). The daily builder applies the same check to every generated board |
| `sequence` | Mechanism Lab | `title`, `prompt`, `steps` (4–8 unique, in the correct order), `explanation` |
| `match` | Match Up | `title`, `prompt`, `pairs[{left,right}]` (4–6; lefts unique and rights unique, so each pairing has one answer), `explanation` |
| `case` | Mystery Patient | `title`, `stages[]`, `question`, `options`, `answerId`, `explanation`, `mechanism`, `takeaway`, `differentials[]` |

Application-depth MCQs list the inferential `steps` the learner must make (≥2, tested).

Answer options are stored with opaque stable ids and shuffled for every presentation (`src/content/options.ts`); answers are always checked by id.

Item ids are `<conceptId>:<kind><n>` for concept-authored items, `grp:*`, `cx:*`, `case:*`, `seq:*` and `match:*` otherwise. **Never reorder** an existing concept's items: learner history references these ids.

Subject, organ system and topic for an item come from its first concept (`ContentRepo.classify`).

## Review lifecycle
`draft → in_review → approved → published → retired`. Only `published` is visible in production builds; a concept's items are hidden if any linked concept is not visible. Provenance is `ai-drafted`, `human-authored` or `imported`.

## Curriculum linking and computed coverage
An objective linked by `curriculum` is reported as covered only when its linked items assess every depth the checklist requires (`auditObjective` in `src/content/curriculum/audit.ts`). Tests reject links to unknown objectives, items that assess objectives their concepts do not teach, missing depths, and linked content that is not `draft` before review. Run `npm run report:biochem` to regenerate the coverage report.

## Authoring
Write concepts with `defineConcepts([...])` (`src/content/define.ts`) in a file under `src/content/step1/` (legacy) or `src/content/<subject>/` (curriculum batches), add it to `src/content/index.ts`, and run `npm test`. `validateContent` must report no issues.
