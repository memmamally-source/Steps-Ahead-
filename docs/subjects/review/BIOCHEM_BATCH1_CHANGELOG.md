# Biochemistry batch 1 — revision 2 change log

Scope: corrections requested in the owner review of batch 1. No new objectives, no batch 2, no other subject. All content remains **draft, AI-drafted, not medically reviewed**. Item ids are unchanged (learner history stays valid); revised items keep their slot and new items are appended. Nothing was deleted.

Totals: **17 new items, 90 revised items, 0 removed** (computed by diffing every item against the previous version). Concepts: all 15 revised (facts rewritten against sources, citations 22 → 82).

## 1. Answer position (all MCQs and cases, app-wide)
- Correct answers are stored by an **opaque, stable option id** (`<itemId>#<hash>`), not a letter; ids no longer reveal that the authored answer was option “a”.
- Stored order is a deterministic per-item shuffle; **display order is reshuffled on every presentation** (Survival/Review/quiz cards and Mystery Patient). Answers are validated by id.
- Tests: stored-position share < 30% for every position across all 609 MCQs; display uniformity per item over 400 presentations; answer resolvable by id; ids opaque.
- Additional bias removed: in the first draft the correct option was the longest in 31 of 48 new MCQs. Options were rebalanced; now 9 of 48 (≈ chance), with a test capping conspicuously long correct answers at < 15%.

## 2. Medical Connections
- The three batch-1 entries with 5–6 members are **category-bank entries** used by the puzzle builder, not games; they are now labeled as such.
- Added **3 complete curated puzzles** (16 tiles, 4 groups of 4): `cx:dna-repair-machinery`, `cx:nucleotides-and-drugs`, `cx:collagen-types`.
- A solver (`src/content/connectionsVerify.ts`) proves each puzzle has exactly one solution using the four categories plus declared red-herring categories (e.g. “autosomal recessive cancer genes”, “bases in DNA/RNA”, “parts of the eye”, “collagen genes”). Each tile fits exactly one puzzle category. The validator rejects any puzzle that fails; a test confirms the solver detects alternative solutions.
- Practice mode now plays verified curated puzzles when available; the daily game still uses the category builder.

## 3. Difficulty and depth audit
- Every item now declares a **reasoning task**; depth is derived from it: recall/identification → recognition; mechanism → mechanism; interpretation/prediction/comparison/multistep → application.
- **Re-tagged** (classic-vignette identification is recognition, not application): `mol-antimetabolites:mcq1`, `mol-orotic-aciduria:mcq1`, `mol-purine-salvage:mcq2`, `mol-ada-deficiency:mcq2`, `mol-single-strand-repair:mcq2`, `mol-lynch:mcq2`, `mol-collagen-types:mcq1`, `mol-ehlers-danlos:mcq2`, `mol-menkes:mcq2`, `mol-marfan-elastin:mcq2`. `mol-antimetabolites:mcq2` application → mechanism; `mol-collagen-types:mcq2` → recall; `mol-fanconi-anemia:mcq1` mechanism → interpretation; `mol-double-strand-repair:mcq3` mechanism → comparison.
- **New genuine application items** (interpretation, prediction, comparison, multistep):
  - `mol-antimetabolites:mcq3` predict dUMP/dTMP/folate changes after 5-FU; `:mcq4` compare leucovorin with methotrexate vs 5-FU
  - `mol-orotic-aciduria:mcq3` interpret four laboratory patterns (UMPS vs OTC vs CPS I/NAGS vs B12 vs folate)
  - `mol-purine-salvage:mcq3` predict laboratory changes after allopurinol in Lesch–Nyhan syndrome
  - `mol-ada-deficiency:mcq3` interpret newborn screening (TRECs + deoxyadenosine)
  - `mol-mutation-types:mcq4` predict the effect of a new splice acceptor in HBB
  - `mol-single-strand-repair:mcq5` interpret cellular repair studies (XP variant vs classic NER defect)
  - `mol-lynch:mcq3` interpret tumor testing (MLH1 loss + promoter methylation + BRAF V600E = sporadic)
  - `mol-collagen-types:mcq3` predict tissues affected by a COL2A1 variant
  - `mol-ehlers-danlos:mcq3` discriminate vascular from classic EDS
  - `mol-menkes:mcq3` compare copper distribution in Menkes vs Wilson disease
  - `mol-marfan-elastin:mcq4` discriminate Marfan syndrome from vascular EDS
  - multistep: `mol-double-strand-repair:mcq2` (germline → second hit → HR loss → PARP sensitivity), `mol-ataxia-telangiectasia:mcq2`, `mol-fanconi-anemia:mcq2`, both Mystery Patient cases
- New mechanism items: `mol-double-strand-repair:mcq4` (Artemis and V(D)J), `mol-fanconi-anemia:mcq3` (crosslinks → fork breakage → stem cell loss).
- **Difficulty recalibrated** to the reasoning required (recall 1–2, identification 2–3, mechanism 2–4, interpretation/prediction/comparison 3–5, multistep 4–5); test-enforced. Most true/false and crossword items moved from 3 to 1–2 (the main reason most recognition items show as “revised”).
- Result: 52 recall, 16 identification, 18 mechanism, 21 application items (7 interpretation, 4 prediction, 5 comparison, 5 multistep). Every application-depth objective has at least one genuine application item (test-enforced).

## 4. Distractor quality
- Unrelated or implausible distractors were replaced with misconception-based alternatives, for example: purine formyl transfer vs thymidylate synthase (folate use), dGTP (PNP deficiency) vs dATP (ADA), mismatch repair for U·G (looks like a mismatch), PRPP synthetase superactivity vs HGPRT, Gorlin and Bloom syndromes vs XP, Stickler vs Alport (both cause hearing loss), JAK3/IL2RG/RAG1 vs ADA SCID, lysyl hydroxylase and cytochrome c oxidase vs lysyl oxidase, ATP7B vs ATP7A, COL5A1 vs COL3A1, DNA methyltransferase vs ribonucleotide reductase.
- Every distractor carries a substantive explanation (test: > 25 characters).

## 5. Evidence traceability
- Every citation now has an exact URL and identifier (PMID and NBK for GeneReviews/StatPearls) and records how it was checked: **full-text** (MedlinePlus Genetics pages and OpenStax Biology 2e sections 14.2 and 14.6 were read), **summary** (PubMed-indexed GeneReviews summaries and article abstracts were read), **existence** (record confirmed, full text not accessible).
- Every fact links to the citation(s) that support it (`factRefs`), test-enforced. Vague labels (“cite only”, generic textbooks) are rejected by tests.
- No citation was invented: every PMID, NBK id and URL was retrieved from NCBI E-utilities, MedlinePlus or OpenStax during this revision.

## 6. Second accuracy audit (content changes)
- **Orotic aciduria:** removed “needle-shaped crystals” and “normal BUN”; now “crystalluria can occur”; anemia described as refractory to B12/folate “may develop” with variable presentation (newborn-screen-detected infants can be asymptomatic); hyperammonemia stated as not a feature because the defect is in pyrimidine synthesis. Distractor set rebuilt (OTC, CPS I, DHODH, cobalamin pathway).
- **Antimetabolites:** corrected an item whose answer was not unique (purine synthesis also uses folate); the item now asks which reaction converts THF to DHF. Hydroxyurea’s HbF effect described as multifaceted.
- **Lesch–Nyhan:** X-linked (not stated as purely recessive); presented as a continuum (partial HGPRT deficiency); reduced dopamine “thought to contribute”; added that allopurinol raises xanthine (xanthine stones reported). Removed the unsupported claim that allopurinol “does not improve the neurologic features” and the APRT detail.
- **ADA deficiency:** added severity spectrum (≈80% SCID, 15–20% later onset, partial deficiency), non-immune features, TREC/deoxyadenosine screening and treatments; removed the unsupported NK-cell statement and “first gene therapy” claim.
- **Mutation types:** β-thalassemia described as many HBB variants (β⁰/β⁺) including splice variants; sickle Glu6Val per HBB.
- **DNA repair:** XP features with ages and the ~25% neurologic subset; XP variant (polymerase η); MUTYH polyposis “10 to a few hundred” adenomas, cancer possible without polyposis, G:C→T:A in APC and KRAS; Lynch adds EPCAM, gene-dependent risk, sebaceous neoplasms, “polyps not more numerous”, sporadic MSI (MLH1 methylation ± BRAF), checkpoint-inhibitor response; HR described by RAD51 strand exchange; BRCA cancer spectrum per GeneReviews; RS-SCID genes and Artemis T⁻B⁻NK⁺; Bloom adds insulin resistance and normal intelligence.
- **A-T:** ATM described as a sensor/signaling kinase; immunodeficiency described as **variable** (removed “IgA deficiency” as a fixed feature); ~10% cancer, mostly lymphoid; carrier breast cancer risk; variant A-T.
- **Fanconi anemia:** physical anomalies in ~75% (so their absence does not exclude it); MDS/AML ≈35% by age 40; removed unsupported details (BRCA2 = FANCD1, endogenous aldehydes, macrocytosis/HbF in the case).
- **Collagen:** removed unsupported claims (granulation tissue = type III, late scar = type I, Goodpasture α3(IV), “cochlea” as type IV only); type II includes inner ear (so hearing loss is not unique to Alport); type III per COL3A1.
- **EDS:** easy bruising is not specific to the vascular type; removed the unsupported “platelets normal” statement from facts (kept only as vignette data).
- **Menkes:** onset after 6–12 weeks of normal health; copper retained in intestine and kidney; removed unsupported “pili torti”, “tortuous arteries” and the specific enzyme list except lysyl oxidase (copper dependence sourced).
- **Marfan/elastin:** ectopia lentis ≈60% (not universal), myopia > 50%; removed “desmosine” and the homocystinuria lens comparison (not verified in this revision); elastin cross-linking starts with lysine → allysine by copper-dependent lysyl oxidases.
- **Fabry** (from the checklist corrections): legacy concept, true/false item and the X-linked Connections group now describe Fabry as X-linked with frequently affected heterozygous females.

## 7. Mastery inflation
- Mastery evidence now depends on what was demonstrated: true/false and crossword answers weigh 0.5, recognition MCQs 0.75, mechanism 1.0, application 1.15.
- A correct answer to the same item within 7 days counts at 25% (practice, not new evidence); errors always count fully.
- “Strong” requires at least 3 distinct items answered correctly, including at least one mechanism or application item. Repeating one true/false item cannot produce mastery (tests added).

## 8–10. Linking, draft status, preservation
- Every new and revised item links to its curriculum objective(s) and declares reasoning and depth; tests reject links to objectives the concept does not teach.
- All items remain `draft`; a test fails if any curriculum-linked content is marked otherwise.
- No source files, curriculum structure or legacy content were deleted.

## Unresolved medical uncertainties (for the reviewer)
1. **Existence-only sources** (full text blocked by an NCBI CAPTCHA): StatPearls chapters (methotrexate, fluorouracil, folic acid, Lesch–Nyhan, Menkes, mutation, DNA repair, Marfan), Longley 2003 (5-FU) and the uridine triacetate note. Claims that rest on them should be confirmed: FdUMP inhibition and RNA incorporation of 5-FU, leucovorin enhancing 5-FU, thymidylate synthase as the THF → DHF step, 10-formyl-THF in purine synthesis.
2. **Inferences from pathway logic rather than an explicit source sentence:** normal ammonia in hereditary orotic aciduria; PRPP-driven overproduction specifically in HGPRT deficiency (the PRPP mechanism is sourced for PRPP synthetase superactivity); excess unpaired α chains in β⁺ thalassemia; A→T codon change for HbS (Glu6Val itself is sourced).
3. **Distractor rationales** that state facts not yet sourced in this batch (they will be covered in their own subjects): JAK3 and IL2RG phenotypes (JAK3 sourced), RAG deficiency lacking radiosensitivity, prematurity lowering TRECs, PNP deficiency and dGTP, Gorlin syndrome features, homocystinuria-free statements, Peutz–Jeghers (STK11).
4. **Vignette details:** ADA vignette rib findings are described as “flared, cupped anterior rib ends”; GeneReviews states only “skeletal abnormalities affecting ribs and vertebrae”. The Fanconi case uses an absent kidney as the genitourinary anomaly.
5. **Connections uniqueness** is proven only against the categories declared in each puzzle (its four groups plus decoys). Reviewers should check for other plausible groupings, e.g. whether “Skin” (types I and III) or other overlapping terms should be excluded from future boards.
6. **Mastery weights and difficulty labels** are design choices, not empirically calibrated; they should be recalibrated once real response data exist.
7. **Reference access:** MedlinePlus and NCBI E-utilities were added to the session’s network allowlist with owner approval; NCBI Bookshelf full text remained inaccessible.
