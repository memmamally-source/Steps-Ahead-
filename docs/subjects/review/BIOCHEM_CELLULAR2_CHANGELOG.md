# Biochemistry — Cellular biochemistry batch 2 (cell signalling) change log

All content is **draft, AI-drafted, not medically reviewed**. A verified source is not medical approval, and computed coverage is not clinical validation. Review packet: `BIOCHEM_CELLULAR2_REVIEW.md`. Source: `src/content/biochem/cellular2.ts` (`cellularBatch2`).

## 1. Scope and approach

- Written from mainstream references already checked: OpenStax Biology 2e (9.1, 9.2) and Anatomy & Physiology 2e (12.5, 17.2, 17.9), MedlinePlus Genetics and MedlinePlus Drug Information. Where a receptor–G-protein pairing or a drug mechanism needed confirmation beyond those, a published review abstract on PubMed was read (listed in §6).
- Depth follows Step 1, not the research literature. Routine foundational mechanisms were written from the textbook sources without waiting for primary literature.
- Any fact that could not be verified was **left unwritten** (§4), not guessed. An objective whose checklist text names such a fact is now shown as **partial** in the coverage report, with the gap stated.
- Every item and every objective is **CORE**. Nothing in the batch went beyond mainstream depth, so no item is SUPPLEMENTARY or SPECIALIST. JAK inhibitors appear only as tofacitinib's class and target. Oncogenic kinases appear only as RAS, BRAF, FGFR3 and BCR-ABL1 with imatinib. Ligand-gated channels appear only as nicotinic and glycine receptors. TGF-β/SMAD was not written.

## 2. Content added

**10 concepts, 19 objectives, 70 playable items** (plus 2 Connections category-bank entries, which are builder input and are not counted).

| Concept | Objectives (`bc-…`) | Focus |
|---|---|---|
| `cel-gpcr` | `gpcr.cycle`, `gpcr.classes`, `gpcr.receptors` | G-protein cycle; Gs / Gi / Gq; α1, α2, β1, β2, M2, M3, D1, D2, H1, H2, V1, V2 |
| `cel-gpcr-toxins` | `gpcr.toxins` | Cholera and heat-labile *E. coli* toxin (Gsα), pertussis toxin (Gi) |
| `cel-mccune-albright` | `gpcr.mccune-albright` | Postzygotic activating GNAS mutation, mosaicism, classic triad |
| `cel-second-messengers` | `second-messengers.camp`, `.ip3-dag` | cAMP/PKA, phosphodiesterases, milrinone, roflumilast, theophylline; IP₃/Ca²⁺/calmodulin, DAG/PKC |
| `cel-cgmp` | `second-messengers.cgmp` | NO → soluble guanylyl cyclase; ANP/BNP → membrane guanylyl cyclase; PKG; sildenafil; nitrate + PDE5 inhibitor hypotension |
| `cel-signal-predict` | `second-messengers.predict`, `receptor-other.classify` | Predicting a hormone's effect and time course from its receptor class |
| `cel-rtk` | `rtk.mechanism`, `rtk.insulin` | Dimerization, autophosphorylation, RAS–MAPK; insulin → GLUT4 translocation |
| `cel-oncogenic-signaling` | `rtk.oncogenic` | KRAS (lost GTPase), BRAF, FGFR3/achondroplasia, BCR-ABL1/imatinib |
| `cel-jak-stat` | `jak-stat.mechanism`, `.ligands`, `.jak2`, `.scid` | JAK–STAT via the thrombopoietin receptor; JAK2 V617F (PV, ET, PMF); JAK3 and X-linked (IL2RG) SCID; tofacitinib |
| `cel-other-receptors` | `receptor-other.nuclear`, `.ion-channels` | Steroid and thyroid hormone receptors; nicotinic and glycine receptors (ionotropic vs metabotropic) |

**Games:**
- Mechanism Lab: `seq:gs-camp`, `seq:gq-calcium`, `seq:no-cgmp`, `seq:rtk-ras`.
- Match Up: `match:receptor-g-protein`, `match:second-messenger-drugs`, `match:signaling-diseases`, `match:receptor-classes`.
- Connections category bank: `grp:gq-receptors`, `grp:pde-inhibitors`.
- Connections puzzle: `cx:g-proteins`, with a manual audit entry in `connectionsAudit.ts` (12 plausible alternative categories checked, one defensible solution). The adrenergic receptors are an intended exact-4 trap: taking them leaves Gs with only two tiles.
- Mystery Patient: `case:cholera`, `case:mccune-albright`.

## 3. Counts

**This batch (playable items only):**

| Measure | Value |
|---|---|
| Items: Step 1 relevance CORE / SUPPLEMENTARY / SPECIALIST / UNREVIEWED | **70 / 0 / 0 / 0** |
| Items: cognitive depth RECOGNITION / MECHANISM / APPLICATION | **43 / 15 / 12** |
| Objectives: CORE / SUPPLEMENTARY / SPECIALIST / UNREVIEWED | 19 / 0 / 0 / 0 |
| MCQs / true-false / clues / sequences / match sets / puzzles / cases | 27 / 16 / 16 / 4 / 4 / 1 / 2 |
| Facts verified / awaiting confirmation | 49 / 0 |

Depth follows the format: the 4 sequences are mechanism, the 2 cases application, and the match sets and puzzle recognition. Twelve of the 27 MCQs are application (interpretation, prediction, comparison or multistep), each with its inferential steps listed.

**All curriculum-linked content (Molecular 1–2, Cellular 1–2):**

| Measure | Value |
|---|---|
| Items: CORE / SUPPLEMENTARY / SPECIALIST / UNREVIEWED | 353 / 11 / 20 / 0 (specialist excluded from games and coverage) |
| Items: RECOGNITION / MECHANISM / APPLICATION | 239 / 75 / 70 |
| Objectives with Step 1 relevance reviewed: CORE / SUPPLEMENTARY / SPECIALIST | 89 / 2 / 0 (275 not yet reviewed, all in later subdivisions) |

## 4. Left unwritten (not verified), for the reviewer

These were not written into any item, fact or explanation. Where the checklist objective names them, the objective is marked **partial** through `src/content/curriculum/contentGaps.ts`:

| Objective | Unwritten part |
|---|---|
| `bc-gpcr.receptors` | Gs receptors for PTH, ACTH, LH, FSH, hCG, CRH and GHRH; Gq receptors M1, oxytocin, GnRH, TRH and gastrin |
| `bc-gpcr.toxins` | CFTR chloride secretion as the step between raised cAMP and watery diarrhea (the content stops at "cAMP rises → fluid and electrolyte loss") |
| `bc-second-messengers.camp` | Cilostazol |
| `bc-rtk.mechanism` | Adaptor docking; PI3K–AKT–mTOR; IGF-1, PDGF, VEGF and NGF as ligands |
| `bc-rtk.insulin` | PI3K–AKT as the named pathway; glycogen synthesis and other anabolic effects |
| `bc-rtk.oncogenic` | HER2/ERBB2 amplification, RET (MEN2), KIT |
| `bc-jak-stat.mechanism` | STAT dimerization before nuclear entry |
| `bc-jak-stat.ligands` | Growth hormone, prolactin, erythropoietin, G-CSF, GM-CSF and interferons as JAK–STAT ligands |
| `bc-jak-stat.jak2` | Ruxolitinib |
| `bc-jak-stat.scid` | The common γ chain as the IL2RG product shared by several interleukin receptors |
| `bc-receptor-other.nuclear` | Calcitriol and retinoid receptors; the zinc-finger DNA-binding domain |
| `bc-receptor-other.ion-channels` | GABA-A, NMDA and 5-HT3 receptors; ligand-gated channels as "the fastest receptor class" |
| `bc-receptor-other.ser-thr` | Not written at all (TGF-β → SMAD and the Marfan link). It stays unreviewed and missing. |

**One source conflict, flagged:** the OpenStax A&P 2e hormone table lists GHRH among the hormones using Ca²⁺ as a second messenger, but mainstream Step 1 teaching and the checklist objective pair the GHRH receptor with Gs/cAMP. GHRH was removed from the batch rather than taught either way. Please rule on it.

Statements removed during self-review because they implied an unverified fact: "ion channels are fastest" in the `match:receptor-classes` explanation (now "membrane receptors act quickly, nuclear receptors more slowly through transcription"), and GHRH as a Ca²⁺ example in the second-messenger fact and explanation.

## 5. Engineering changes

- `cellularBatch2` is registered in `src/content/index.ts` and in the review-packet script (`cellular2`).
- `OBJECTIVE_RELEVANCE` covers the 19 written signalling objectives (all CORE).
- **New: `src/content/curriculum/contentGaps.ts`.** Linked coverage is now *partial* when the checklist text names something the content does not yet teach. Before this change, all 19 signalling objectives would have shown as covered because their items assess every required depth. That overstated what was written. Cellular coverage is now 28 covered / 12 partial / 1 missing (of 41).
- Receptor tiles in `cx:g-proteins` and the left terms in `match:receptor-g-protein` are spelled out ("Beta-1 receptor"). The tile normaliser drops Greek letters, so "α1 receptor" and "β1 receptor" counted as the same tile.
- An answer-length pass shortened 12 correct options and lengthened 3 distractors so the correct answer is not conspicuously the longest. Five short whyWrong explanations were expanded.
- Added `cel-jak-stat:mcq5` (mechanism: how the thrombopoietin receptor, which has no kinase domain, signals through JAK and STAT), so `bc-jak-stat.mechanism` is assessed at mechanism depth by an MCQ, not only by a true/false item.
- The fixed 10–30% application quota was already removed in the previous commit ("Depth follows game format instead of a fixed application quota"). Depth is set by game format and objective.

## 6. Sources

- OpenStax Biology 2e 9.1 and 9.2; OpenStax Anatomy & Physiology 2e 12.5, 17.2 and 17.9 (full text read).
- MedlinePlus Genetics (summary pages read): McCune-Albright syndrome, GNAS, KRAS, BRAF, FGFR3, achondroplasia, chronic myeloid leukemia, JAK2, polycythemia vera, essential thrombocythemia, primary myelofibrosis, JAK3, X-linked SCID.
- MedlinePlus Drug Information: imatinib (a606018), tofacitinib (a613025).
- PubMed abstracts read: 32473788 (adrenergic receptor G proteins), 38384797 (M2–Gi–GIRK), 12429572 (M3–Gq detrusor), 27178731 (dopamine receptor coupling), 8961278 (H1/H2), 16150901 (V2–cAMP–AQP2), 12196532 (V1/AT1 Gq), 15204437 and 10542136 (cholera and heat-labile toxin, Gsα), 23207763 (pertussis toxin, Gi), 31362687 (NO–sGC–cGMP–PKG), 32444692 (ANP/BNP membrane guanylyl cyclase), 9628660 (sildenafil PDE5), 17059376 (milrinone PDE3), 20689641 (roflumilast PDE4), 27713276 (theophylline).

No text, tables, mnemonics or questions were taken from commercial resources.

## 7. Checks run

- `npm run check` (typecheck, lint, 109 tests, including `validateContent`, the Connections single-solution and manual-audit tests, and the answer-length and whyWrong quality tests): pass.
- `npm run build`: pass.
- Browser play-check (`npm run check:games`, headless Chromium against the built app): see the commit message for the result.
- No device testing, deployment or medical review was done.
