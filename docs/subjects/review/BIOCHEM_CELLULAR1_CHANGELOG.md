# Biochemistry — Cellular biochemistry batch 1 change log (and Step 1 relevance audit)

All content is **draft, AI-drafted, not medically reviewed**. Computed curriculum coverage is not clinical validation, and verifying a source is not medical approval. Review packet: `BIOCHEM_CELLULAR1_REVIEW.md`. Source: `src/content/biochem/cellular1.ts` (`cellularBatch1`).

## 1. New standard: high-yield Step 1 relevance

- **Labels.** Every item now carries a Step 1 relevance label:
  - **CORE**: classic high-yield knowledge a student preparing with mainstream resources should master.
  - **APPLICATION**: high-yield concepts used in interpretation or multistep Step 1 reasoning.
  - **SPECIALIST**: obscure, experimental or beyond expected Step 1 depth.

  Unlabelled items default to APPLICATION if they assess application depth and CORE otherwise. Objectives get the same label (`objectivePriority`).
- **SPECIALIST items are excluded from all gameplay.** A `ContentRepo` filter applies to every game. They don't count as coverage evidence, but they are kept, with a written reason, for editorial review. Nothing was deleted.
- **Target mix** for standard curriculum-linked content is about 80% CORE / 20% APPLICATION. This is a design target, not an exam weight, and a test keeps the CORE share between 70% and 90%.
- **Research verifies facts but does not set scope.** Cellular batch 1 was written to mainstream Step 1 depth. For example:
  - paclitaxel stabilizes microtubules;
  - vincristine blocks their formation;
  - bortezomib inhibits the proteasome;
  - digoxin inhibits the Na⁺/K⁺-ATPase and so raises intracellular Ca²⁺;
  - I-cell disease is a mannose-6-phosphate targeting defect with its classic findings.

  Research nuances found while verifying were deliberately left out of items, such as paclitaxel's behaviour at intratumoral concentrations and debates about the Na⁺–Ca²⁺ exchanger.

## 2. Retrospective audit of Molecular batches 1–2

**20 items flagged SPECIALIST** (each with a reason in `priorityNote`; listed in each packet):

- **Batch 1:**
  - leucovorin–FdUMP ternary complex (`mol-antimetabolites:mcq4`);
  - TREC / tandem-mass-spectrometry newborn screening (`mol-ada-deficiency:mcq3`);
  - XP variant, polymerase η (`mol-single-strand-repair:mcq5`);
  - sporadic MLH1-hypermethylated MSI vs Lynch syndrome (`mol-lynch:mcq3`);
  - RAD51 strand exchange (`mol-double-strand-repair:tf1`);
  - ARTEMIS clue;
  - MRN-based ATM questions (`mol-ataxia-telangiectasia:mcq1`, `mcq3`);
  - Menkes tissue-copper distribution (`mol-menkes:mcq3`);
  - ALLYSINE clue.
- **Batch 2:**
  - SNP-based UPD vs imprinting defect (`mol-epigenetic-disease:mcq1`);
  - xanthine stones on allopurinol (`mol-xo-inhibitors:mcq2`);
  - U6 snRNA polymerase (`mol-transcription:mcq2`);
  - TFIID (`mol-transcription:mcq3`);
  - Dicer (`mol-rna-processing:mcq1`, DICER clue, `seq:mirna-silencing`);
  - SF3B1 (`mol-splice-disease:tf1`);
  - DIPHTHAMIDE clue;
  - antisense exon skipping (`mol-reading-frame:mcq2`).

**7 replacement CORE/APPLICATION items**, appended with new ids, keep every Molecular objective assessed at its required depths without specialist items:
- `mol-ada-deficiency:mcq4`: dATP and ribonucleotide reductase, interpretation;
- `mol-single-strand-repair:mcq6`: XP recurrence risk, prediction;
- `mol-lynch:mcq4`: autosomal dominant sibling risk, interpretation;
- `mol-ataxia-telangiectasia:mcq4`: why cells are radiosensitive, mechanism;
- `mol-ataxia-telangiectasia:mcq5`: radiotherapy toxicity, prediction;
- `mol-menkes:mcq4`: Menkes vs Wilson, comparison;
- `mol-transcription:mcq4`: why a promoter mutation lowers quantity, not structure, mechanism.

**Resulting mix:** curriculum-linked Molecular content had **171 CORE / 40 APPLICATION (81% core) and 20 SPECIALIST** right after the audit. With the replacements and Cellular batch 1, the curriculum-linked items stand at the figures in the coverage report.

No checklist objective was judged SPECIALIST. Each is either named in the USMLE outline or is mainstream Step 1 foundational science. Reviewers can still set `priority: 'specialist'` on any objective.

## 3. Cellular batch 1 — 21 objectives (curriculum order)

| Concept | Objectives |
|---|---|
| `cel-cell-cycle` | `bc-cell-cycle.phases`, `.phase-drugs` |
| `cel-rb-p53` | `bc-cell-cycle.rb-p53` |
| `cel-cell-types` | `bc-cell-cycle.cell-types` |
| `cel-er-golgi` | `bc-er-golgi.er`, `.golgi`, `.vesicles` |
| `cel-i-cell` | `bc-er-golgi.i-cell` |
| `cel-peroxisome` | `bc-peroxisome-proteasome.peroxisome`, `.zellweger`, `.refsum` |
| `cel-x-ald` | `bc-peroxisome-proteasome.x-ald` |
| `cel-proteasome` | `bc-peroxisome-proteasome.proteasome` |
| `cel-cytoskeleton` | `bc-cytoskeleton.elements`, `.motors` |
| `cel-pcd` | `bc-cytoskeleton.pcd` |
| `cel-if-markers` | `bc-intermediate-filaments.markers` |
| `cel-membrane-transport` | `bc-membrane-pumps.composition`, `.transporters` |
| `cel-na-k-atpase` | `bc-membrane-pumps.na-k-atpase`, `.glycosides` |

**Objectives: 14 CORE, 7 APPLICATION, 0 SPECIALIST.** All 21 are covered at their required depths by playable items.

**Playable items: 83** (74 CORE, 9 APPLICATION, 0 SPECIALIST), **plus 2 category-bank entries** (builder input, not counted):

| Format | Count |
|---|---|
| MCQ (clinically integrated where relevant) | 26 |
| True/false | 21 |
| Crossword clues | 22 |
| Mechanism Lab | 5: G1/S checkpoint (Rb–E2F), p53 response to DNA damage, secretory pathway, mannose-6-phosphate to lysosome, digoxin inotropy |
| Match Up | 6: phase-specific drugs, organelles and traffic, intermediate-filament markers, glucose transporters, peroxisome jobs and failures, microtubule drugs and motors |
| Medical Connections | 1: `cx:cell-machinery` — intermediate filaments / peroxisome functions / microtubule drugs / glucose transporters |
| Mystery Patient | 2: I-cell disease, X-linked adrenoleukodystrophy |

Facts: **65 verified, 0 awaiting confirmation**. Sources:
- OpenStax Biology 2e (4.3–4.5, 5.1–5.3, 10.3–10.4) and Anatomy & Physiology 2e (3.1, 3.2, 3.5);
- MedlinePlus Genetics: retinoblastoma, Li–Fraumeni, mucolipidosis II, GNPTAB, Zellweger spectrum, Refsum, PHYH, X-ALD, ABCD1, PCD, cystic fibrosis;
- FDA labels on DailyMed: vincristine, hydroxyurea, VELCADE, LANOXIN;
- PubMed abstracts for peroxisome functions, GLUT/SGLT distribution, intermediate filament markers, motors and microtubule drugs, cell regeneration, nasal NO and plasma enzymes in I-cell disease.

## 4. Points for the reviewer

- **I-cell disease, corneal clouding.** The checklist lists it, but no source read here supports it for mucolipidosis II: MedlinePlus doesn't list it, and the corneal papers found concerned mucolipidosis IV. It is not stated in the content. Please confirm or remove it from the checklist.
- **PCD, situs inversus.** The checklist says “about half”; MedlinePlus gives about 40%, which the content uses.
- **X-ALD.** The checklist says “in boys”. The content adds that most symptomatic carrier women develop adrenomyeloneuropathy (MedlinePlus).
- **Cell types.** The sources directly support hepatocytes (stable), intestinal epithelium (labile), cardiomyocytes and most neurons (permanent), and red cells. The other examples in the quick explanation (skin, bone marrow, proximal tubule, skeletal muscle) follow standard teaching but were not separately sourced.

## 5. Engineering changes and validation

- **Crossword fix.** The generator seeds each grid with its longest word, so an answer longer than the grid could make the build fail. The new 14-letter RETINOBLASTOMA exposed this (the 15-letter HETEROCHROMATIN could too). The builder now skips words longer than the grid size.
- **Outline-mapping test.** The rule that ≥75% of concepts must map to topics the outline names explicitly now applies to legacy concepts only. Curriculum-linked concepts follow the subject checklist, which includes the outline’s foundational science, and their mapping is audited in the coverage report.
- **Gameplay.** `npm run check:games` played every Mechanism Lab sequence (9) and Match Up set (12) in the app on an iPhone-sized touch viewport: **325 checks passed, 0 failed**, with no console errors. Specialist items are no longer offered by games, so `seq:mirna-silencing` is excluded.
- **Connections.** `cx:cell-machinery` has exactly one solution under the strict catalog check and under the manual audit with broad categories (`connectionsAudit.ts`). The daily builder still produces unique boards (>140 of 150 test seeds).
- **Checks.** `npm run check` (typecheck, lint, 107 tests) and the build pass.

## 6. Not started

Cell signaling (the remaining 20 Cellular objectives: GPCRs, second messengers, RTKs, JAK–STAT, intracellular receptors), Laboratory techniques, Genetics, Nutrition, Metabolism and other subjects.

---

## Revision 1 — relevance and depth separated (owner correction)

The first version derived the label from depth: application-depth items were APPLICATION and everything else CORE. That rule has been replaced.

- **Two independent classifications on every item.**
  - *Step 1 relevance*: CORE, SUPPLEMENTARY, SPECIALIST or UNREVIEWED.
  - *Cognitive depth*: RECOGNITION, MECHANISM or APPLICATION, unchanged and still derived from the reasoning task.

  A complex vignette on a classic mechanism can be CORE (for example the digoxin-overdose prediction or the bilateral-retinoblastoma two-hit question). A simple recall of an obscure finding can be SPECIALIST (for example the DIPHTHAMIDE clue).
- **Nothing defaults to CORE.** Unlabelled items are UNREVIEWED. This now applies to all 936 older items written before the subject-by-subject strategy. They remain playable at low weight until evaluated.
- **Explicit labels.** Every curriculum-linked item now carries an explicit label (a test enforces this):
  - Molecular batch 1: 92 CORE, 9 SUPPLEMENTARY, 10 SPECIALIST.
  - Molecular batch 2: 108 CORE, 2 SUPPLEMENTARY, 10 SPECIALIST.
  - Cellular batch 1: 83 CORE.

  Concepts declare `relevance: 'core'` once they have been reviewed, and items inherit it unless they override it.
- **New SUPPLEMENTARY items** (each with a reason):
  - MUTYH transversion spectrum (`mol-single-strand-repair:mcq4`);
  - PARP-inhibitor synthetic lethality (`mol-double-strand-repair:mcq2`);
  - radiosensitive NHEJ SCID and Artemis (`mol-double-strand-repair:mcq3`, `mcq4`);
  - Bloom syndrome (`mol-double-strand-repair:tf4`, BLOOM clue);
  - DEB chromosome-breakage test (`mol-fanconi-anemia:mcq1`);
  - Stickler syndrome (`mol-collagen-types:mcq3`);
  - DEOXYADENOSINE clue;
  - TATA-box β-thalassemia (`mol-transcription:mcq1`);
  - CRYPTIC clue.

  The 20 SPECIALIST items from the first audit are unchanged.
- **Objectives** carry editorial relevance in `src/content/curriculum/relevance.ts`. The 72 objectives reviewed so far (51 Molecular, 21 Cellular batch 1) are **70 CORE and 2 SUPPLEMENTARY** (`bc-dna-repair.nhej-scid`, `bc-dna-repair.bloom`). All other checklist objectives are UNREVIEWED until content is written for them.
- **Gameplay.**
  - SPECIALIST items are excluded.
  - CORE is prioritised: Survival, review, Fact or Fiction, Mechanism Lab, Match Up, Mystery Patient and crossword draw items with a relevance-weighted shuffle (core 3 : supplementary 1 : unreviewed 1).
  - SUPPLEMENTARY items still appear, less often.
- **Depth-mix target.** The ~80/20 recognition-and-mechanism vs application mix is a flexible game-design target. It is tested on playable curriculum-linked content (application share between 10% and 30%) and is no longer a relevance label.
