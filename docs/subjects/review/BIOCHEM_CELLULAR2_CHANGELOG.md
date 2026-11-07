# Biochemistry — Cellular biochemistry batch 2 (cell signalling) change log

All content is **draft, AI-drafted, not medically reviewed**. A verified source is not medical approval, and computed coverage is not clinical validation. Review packet: `BIOCHEM_CELLULAR2_REVIEW.md`. Source: `src/content/biochem/cellular2.ts` (`cellularBatch2`).

## Revision 2 (owner review of revision 1)

The owner approved the content structure, subject to the corrections below. These are targeted edits: concept IDs, item IDs and curriculum mappings are unchanged, and new items were appended. All content stays **draft / AI-drafted**. Passing automated and browser checks shows only that the content is technically valid. It is not evidence of medical accuracy or editorial approval.

### R2.1 Receptor tyrosine kinases: dimerization is not universal

Ligand-induced dimerization is now described only for **growth-factor RTKs** (EGF receptor, VEGF receptors). The **insulin receptor** is taught as an already disulfide-linked (αβ)₂ heterotetramer whose intrinsic tyrosine kinase is activated by insulin (PMID 6923809).

Edited:
- `cel-rtk`: objective wording, fact 0, mechanism, quick, detailed, takeaway and associations.
- `cel-rtk:mcq1`: the stem now names EGF, and the explanation notes the insulin-receptor exception.
- DIMERIZATION clue (now "growth-factor RTKs, e.g. EGFR").
- The distractor explanations in `cel-gpcr:mcq2` and `cel-other-receptors:mcq1`.
- `seq:rtk-ras` (prompt now names the EGF receptor) and `seq:insulin-glut4` (now "Insulin binds its preformed α₂β₂ receptor", then "The receptor's intrinsic tyrosine kinase phosphorylates its own tyrosines").
- The `cel-rtk` PI3K MCQ steps.

Added: one fact and a true/false item: "Like the EGF receptor, the insulin receptor must pair up after insulin binds" (false).

No remaining question or explanation says that all RTKs require ligand-induced dimerization. STAT dimerization is unaffected.

### R2.2 JAK3-deficient SCID (`cel-jak-stat:mcq4`)

The answer now reads "SCID: T and NK cells absent, B cells present but nonfunctional", i.e. T⁻B⁺NK⁻. One distractor was replaced so the question tests the contrast with ADA deficiency: "SCID with T, B and NK cells all absent" is explained as the classic ADA pattern. The explanation and steps were updated to match.

Added:
- a fact (γc/JAK3 SCID is T⁻B⁺NK⁻; ADA SCID lowers T, B and NK cells; PMID 11213805, 14615376 and GeneReviews ADA deficiency, PMID 20301656);
- a true/false item: B cells are present but poorly functional in γc and JAK3 SCID.

### R2.3 Marfan syndrome and TGF-β (`cel-tgf-beta`)

Marfan syndrome is now presented first as a **fibrillin-1 connective-tissue disorder**. Its classic findings come from MedlinePlus: lens dislocation, aortic dilation and dissection, tall stature, long fingers and loose joints. Increased availability of TGF-β is described as **a contributing mechanism that is thought to play a part**, not the whole explanation.

Edited:
- `cel-tgf-beta:mcq2`: the stem now asks which *additional* mechanism is thought to contribute; the answer and explanation are qualified.
- The concept's facts, mechanism, misconception, quick, detailed and takeaway.

The concept stays SUPPLEMENTARY. The Molecular item `mol-marfan-elastin:mcq1` was checked and already says excess TGF-β activity "contributes", with the classic findings central, so it is unchanged.

### R2.4 Associations added (concise teaching, no specialised questions)

| Association | Where | Source |
|---|---|---|
| M1 receptor → Gq (like M3) | `cel-gpcr`: fact, quick summary, TF "M1 and M3 → Gq; M2 → Gi" | PMID 8441322 |
| hCG acts on the Gs-coupled LH receptor | `cel-hormone-gpcr`: fact, quick summary, TF | PMID 1343973, 30386968 |
| Interferons → JAK–STAT (IFN-γ: JAK1/JAK2 → STAT1; type I: JAK1/TYK2 → STAT1/STAT2) | `cel-jak-stat`: fact, TF (interferons do not use GPCRs) | PMID 9208871, 31275057 |
| VEGF → receptor tyrosine kinases (VEGFR-1, VEGFR-2), angiogenesis | `cel-rtk`: fact, associations, TF | PMID 12778165, 37491579 |

All four are CORE and assessed by recognition-level true/false items. No new MCQs were written for them.

### R2.5 Coverage report transparency

The report has a new state, **🟦 core covered, parts deferred**. It applies when an objective's core components are taught at every required depth but the checklist text names further components that were deliberately not taught. These objectives are counted separately everywhere: summary, subdivision table, topics and subtopics. They are never counted as covered in full. A new **Deferred components** section lists every deferred part with the objective text.

Cellular Biochemistry now reports **33 covered in full, 8 core covered with parts deferred, 0 partial and 0 missing** (of 41). Revision 1 reported 41 covered. Deferred:

| Objective | Deferred component(s) |
|---|---|
| `bc-gpcr.receptors` | CRH (Gs) and gastrin (Gq) receptors (supplementary) |
| `bc-second-messengers.camp` | cilostazol (supplementary drug) |
| `bc-rtk.mechanism` | adaptor docking, mTOR, IGF-1/PDGF/NGF as named ligands (supplementary) |
| `bc-rtk.insulin` | glycogen synthesis and anabolic effects (taught with Metabolism) |
| `bc-rtk.oncogenic` | KIT (taught with Hematology/Oncology) |
| `bc-jak-stat.ligands` | G-CSF and GM-CSF by name (supplementary) |
| `bc-jak-stat.jak2` | ruxolitinib by name (supplementary drug) |
| `bc-receptor-other.nuclear` | retinoic acid receptors; zinc-finger DNA-binding domain (supplementary) |

M1, hCG, interferons and VEGF are no longer deferred.

### R2.6 Counts after revision 2

| Measure | Batch 2 | All curriculum-linked content |
|---|---|---|
| Playable items | 121 (46 MCQ, 35 TF, 25 clues, 7 sequences, 5 match sets, 1 puzzle, 2 cases) | — |
| CORE / SUPPLEMENTARY / SPECIALIST / UNREVIEWED | **106 / 15 / 0 / 0** | 389 / 26 / 20 / 0 |
| RECOGNITION / MECHANISM / APPLICATION | **79 / 28 / 14** | 275 / 88 / 72 |
| Facts verified / awaiting confirmation | 84 / 0 | |

Relevance and difficulty remain separate labels. The new items are core, easy recognition items.

### R2.7 Correction to the revision 1 browser-validation record

Revision 1 (§R9) said that the 522-check run used the **production build**. That was not correct.
- **Why it can't have been the production build:** a plain production build hides all draft content (only `published` items are shown unless the build is a reviewer preview, `VITE_ALLOW_UNREVIEWED=true`). It would have had nothing to play. The run must have reached a leftover development server on the same port, left over from an earlier debug run that had been stopped by a timeout. The 522 checks were genuine checks of the then-current content, but not against a production build.
- **The earlier intermittent Mechanism Lab failures:** the dev-server hot-reload explanation remains the most likely cause, but it is not proven.
- **What changed in the play-check:**
  - `npm run check:games` now builds a reviewer preview (`VITE_ALLOW_UNREVIEWED=true`), the same setting the Pages deploy workflow uses.
  - It starts Vite directly, so stopping it stops the server rather than leaving one behind.
  - It refuses to run if its port is already in use.
  - It fails clearly if the build contains no playable content.
- **Current result:** see the Laboratory techniques batch 1 change log for the run that covers this content.

## Revision 1 (owner review of batch 2)

Sections 1–7 below describe the original batch and are kept as a record. Where this revision changes them, this section takes precedence. All content stays **draft / AI-drafted**. Existing objectives, item IDs and curriculum mappings are unchanged; new items were appended.

### R1. Relevance labels reassessed

All 70 original items had been CORE. Labels now follow how important the knowledge is for the average Step 1 student, not whether it is mainstream. Each SUPPLEMENTARY item has a written reason in the packet.

| Changed to SUPPLEMENTARY | Reason |
|---|---|
| `cel-jak-stat:mcq3`, TOFACITINIB clue | Specific immunology drug; the JAK–STAT pathway is core |
| `cel-jak-stat:mcq4` | JAK3-deficient SCID (autosomal recessive) is the less common form; X-linked IL2RG SCID is core |
| MILRINONE clue | Recall of a drug name; cAMP and PDE inhibition are core |
| `match:second-messenger-drugs` | Drug-name recall (milrinone, roflumilast) |
| `cel-other-receptors:tf1` | Where the thyroid receptor sits before ligand binding |
| IONOTROPIC clue | Terminology rather than a tested mechanism |
| New: `cel-hormone-gpcr:mcq5` (familial male precocious puberty), `cel-hormone-gpcr:tf3` (PLC arm of PTH signaling), `cel-jak-stat:mcq8` (JAK2-inhibitor reasoning) | Beyond core; the underlying mechanism is core |
| New concept `cel-tgf-beta` (all 5 items) and objective `bc-receptor-other.ser-thr` | TGF-β/SMAD and its Marfan/Loeys–Dietz link are beyond core depth; FBN1 and Marfan syndrome are core elsewhere |

Kept CORE on purpose: milrinone's mechanism MCQ and theophylline. Both are named PDE inhibitors in mainstream Step 1 pharmacology, and the question tests cAMP logic.

### R2. Classic mechanisms written from other reliable sources

Facts that OpenStax or MedlinePlus did not state were sourced from **published review abstracts on PubMed** (E-utilities). Every citation label (authors, journal, year) was checked against the PubMed record. NCBI Bookshelf (StatPearls, Endotext) was not reachable from this environment: the pages returned a browser check, which I did not try to get around. Reactome was blocked by the network policy. Neither is cited.

### R3. High-yield gaps filled

| Gap | Where | Sources |
|---|---|---|
| GHRH, ACTH, LH, FSH, PTH (Gs/cAMP) and GnRH, TRH, oxytocin (Gq) | New concept `cel-hormone-gpcr` (5 MCQs, 3 TF, 2 clues) and `match:hormone-second-messenger` | PMID 7740167, 27065945, 8734448, 30023464, 10856878, 19395963, 9465287, 10573034, 8772588, 11274341, 9699174, 41824769 |
| Cholera toxin → cAMP → PKA → CFTR chloride secretion | `cel-gpcr-toxins` (fact, MCQ, TF, CFTR clue), `seq:cholera-secretion`; the cholera case explanation now includes CFTR | PMID 40168442, 25188334 |
| Insulin → IRS → PI3K → Akt → GLUT4 | `cel-rtk` (fact, prediction MCQ, TF, AKT clue), `seq:insulin-glut4` | PMID 18171430, 24075894 |
| GH, prolactin, EPO through JAK2–STAT5 | `cel-jak-stat` (facts, recall and prediction MCQs, PROLACTIN and ERYTHROPOIETIN clues) | PMID 12099386, 23182823, 39476210, 34281163 |
| STAT phosphorylation, dimerization and nuclear transcription | `cel-jak-stat` (fact, TF), `seq:jak-stat` | PMID 16426581 |
| Common γ chain (IL2RG) | `cel-jak-stat` (fact, TF) | MedlinePlus IL2RG gene |
| GABA-A, NMDA, 5-HT3 receptor classes; ligand-gated channels mediate *fast* transmission | `cel-other-receptors` (facts, 3 MCQs, 2 TF, ONDANSETRON clue) | PMID 7545236, 9702060, 16719808, 18761359, 14965242, 20849671; MedlinePlus ondansetron |
| RET mutations and MEN2 (and RET loss in Hirschsprung disease) | `cel-oncogenic-signaling` (facts, identification and comparison MCQs, TF, RET clue) | PMID 15982921, 40102258; MedlinePlus RET gene and MEN pages |
| HER2/ERBB2 amplification and HER2-targeted therapy | `cel-oncogenic-signaling` (fact, MCQ) | PMID 39039196, 31548601 |
| Calcitriol acts on a nuclear receptor (VDR with RXR) | `cel-other-receptors` (fact, TF) | PMID 10444570 |
| TGF-β receptor serine/threonine kinases → SMADs; Marfan (FBN1) and Loeys–Dietz | New concept `cel-tgf-beta` (SUPPLEMENTARY) | PMID 11752591, 10605817; MedlinePlus Marfan, FBN1, Loeys–Dietz |

"Fastest receptor class" is still not used as a claim. The sources say ligand-gated channels mediate *fast* synaptic transmission, and that wording is used instead.

### R4. GHRH reconciled

GHRH is taught as **Gs/cAMP**: the GHRH receptor is a seven-transmembrane Gs-coupled receptor, and cAMP → PKA → CREB is its principal pathway (PMID 7740167; also 41824769). The OpenStax table lists GHRH among Ca²⁺-using hormones. That reflects GHRH-stimulated GH release involving G-protein effects on ion channels, a downstream effect that does not change the classic association. A fact in `cel-hormone-gpcr` states this reconciliation and cites both sources. An application item uses it: an activating Gsα mutation in a somatotroph adenoma mimics GHRH and causes acromegaly.

### R5. Theophylline qualified

The fact, the MCQ stem and its explanation now say that theophylline inhibits phosphodiesterases **and** antagonizes adenosine receptors, and that its toxicity probably has several mechanisms. Adenosine antagonism is one *proposed* contributor, and the seizure mechanism is not established. A rat study found that adenosine and an A1 agonist did not prevent theophylline seizures (PMID 10874349, added). The stem now asks which action "is thought to contribute". It is relabelled recall-level mechanism, difficulty 2.

### R6. Difficulty and reasoning labels reassessed

A vignette or a written explanation no longer counts as multistep on its own. Classic presentations are labelled easy or medium:

- **Batch 2:**
  - Polycythemia vera (JAK2 V617F), CML + imatinib, α1 agonist and desmopressin/V2: interpretation, multistep or prediction at difficulty 3–4 → **mechanism, difficulty 2**.
  - X-linked SCID vignette: 3 → 2. Toxin A/B experiment: 4 → 3. McCune–Albright mosaicism: 3 → 2. JAK3 SCID prediction: 4 → 3.
  - Both Mystery Patient cases (cholera, McCune–Albright): **multistep 4 → interpretation 3**. Cases may now declare interpretation instead of the default multistep.
- **Earlier batches (labels only, text unchanged):**
  - Scurvy (multistep → interpretation) and bilateral retinoblastoma (multistep → interpretation): 4 → 3.
  - α1-antitrypsin PAS-positive globules, osteogenesis imperfecta blue sclerae, mixed connective tissue disease (anti-U1), ataxia–telangiectasia lymphoma risk, HGPRT de novo purine synthesis, azathioprine + allopurinol, Marfan vs vascular EDS, and vascular vs classic EDS: 4 → 3.
- Because some relabelled items had been the only application items for their objectives, new application items were added where the checklist requires application:
  - β1 agonist + milrinone (cAMP made faster and broken down slower);
  - JAK2-inhibitor prediction in polycythemia vera;
  - Gsα-mutant somatotroph adenoma;
  - phospholipase C blocker and oxytocin;
  - PI3K blocker and GLUT4;
  - RET in MEN2 vs Hirschsprung disease.

### R7. Coverage gaps: important omissions vs optional details

`contentGaps.ts` now separates the two:
- **Important omissions** keep an objective partial. None remain in Cellular.
- **Optional supplementary details** are named in the checklist but deliberately not taught at core depth. They are listed per objective in the coverage report and do not block coverage.

| Objective | Optional detail not taught |
|---|---|
| `bc-gpcr.receptors` | CRH and hCG (Gs), M1 and gastrin (Gq) receptors |
| `bc-second-messengers.camp` | Cilostazol |
| `bc-rtk.mechanism` | Adaptor docking, mTOR, IGF-1/PDGF/VEGF/NGF as named ligands |
| `bc-rtk.insulin` | Glycogen synthesis and anabolic effects (taught with Metabolism) |
| `bc-rtk.oncogenic` | KIT (taught with Hematology/Oncology) |
| `bc-jak-stat.ligands` | G-CSF, GM-CSF and interferons by name |
| `bc-jak-stat.jak2` | Ruxolitinib by name |
| `bc-receptor-other.nuclear` | Retinoic acid receptors; zinc-finger DNA-binding domain |

**Cellular Biochemistry: 41 of 41 objectives covered** (previously 28 covered, 12 partial, 1 missing).

### R8. Counts after revision 1

| Measure | Batch 2 | All curriculum-linked content |
|---|---|---|
| Items | 115 playable (was 70) | 429, of which the 20 specialist items are kept out of play |
| CORE / SUPPLEMENTARY / SPECIALIST / UNREVIEWED | **100 / 15 / 0 / 0** | 383 / 26 / 20 / 0 |
| RECOGNITION / MECHANISM / APPLICATION | **73 / 28 / 14** | 269 / 88 / 72 |
| Objectives CORE / SUPPLEMENTARY | 19 / 1 | 89 / 3 (274 not yet reviewed, all in later subdivisions) |
| Facts verified / awaiting confirmation | 78 / 0 | |

Batch 2 now has 46 MCQs, 29 true/false, 25 clues, 7 sequences, 5 match sets, 1 Connections puzzle and 2 cases.

### R9. Browser validation

`npm run check:games` (headless Chromium, iPhone 13 emulation, production build): **522 passed, 0 failed**. All 16 Mechanism Lab sequences were played both correctly and incorrectly, and all 17 Match Up sets were played, including the 3 new sequences and the new match set.

How the two earlier failures were resolved:
- **Stale explanation (`match:receptor-classes`):** the item snapshot had been taken before the explanation was edited. The check now regenerates the snapshot on every run, so it compares against current content.
- **12 of 13 sequences in the incorrect-order pass:** the fixed 80-round cap was too low under relevance-weighted random draws. The cap now scales with the number of items (60 rounds per item).
- **Intermittent Mechanism Lab slot failures** (`seq:a1at-emphysema` earlier, `seq:collagen` in the first revision run): reproducible whenever source files were edited during a run. The check used the Vite dev server, which hot-reloads on every edit and swapped the item on screen mid-round. A run with no source edits passed 285 checks before my 900-second debug timeout stopped it. The check now builds first and serves the production build (`vite preview`), and the full run above passed with no failures.

No device testing, deployment or medical review was done.

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
- Browser play-check (`npm run check:games`, headless Chromium, iPhone 13 emulation): **442 passed, 2 failed**. All 4 new sequences and all 4 new match sets were played. Both failures come from the test run, not from the content:
  - `match:receptor-classes` explanation mismatch: the item dump was taken before the "fastest" wording was removed, so the check compared against the old text.
  - The incorrect-order pass reached 12 of 13 sequences: the 80-round cap ran out under the weighted random draw.

  An earlier run stopped on `seq:a1at-emphysema` (a Molecular item, unchanged); it passed on the rerun, so this looks like a timing flake.
- No device testing, deployment or medical review was done.
