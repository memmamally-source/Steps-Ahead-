# Biochemistry — Genetics batch 2 change log

All content is **draft, AI-drafted, not medically reviewed**. A verified source is not medical approval, and passing automated or browser checks shows only technical validity, not medical accuracy or editorial approval. Review packet: `BIOCHEM_GEN2_REVIEW.md`. Source: `src/content/biochem/gen2.ts` (`geneticsBatch2`).

## Revision 1 (owner review of batch 2)

These are targeted corrections. Concept IDs, item IDs, objective mappings and study history are unchanged (new facts and citations are appended), and all content stays **draft and medically unapproved**. Sections 1–7 describe the original batch; this section takes precedence where they differ.

### Corrections

| # | Item | Change | Source |
|---|---|---|---|
| 1 | `gen-repeats:mcq3` (and its pedigree) | Myotonic dystrophy now passes through the **mother**. An affected grandfather (cataract at 60) has an affected daughter (the proband, myotonia at 32), whose son has the congenital form. The stem, generated pedigree, alt text, caption, explanation and steps were all updated, and the pedigree still validates as autosomal dominant. A new fact states that congenital DM1 is almost exclusively maternally transmitted, and the concept text now says so. | PMID 28257691 (Barbé 2017) |
| 2 | `gen-two-hit:mcq2` | Replaced the "risk to future children" question, which implied zero risk. It now contrasts **germline** (variant in blood and tumor; early, bilateral) with **somatic** (both hits only in the tumor; later, unilateral) RB1 mutations. The explanation states that a negative blood test makes a germline variant much less likely but **does not exclude low-level mosaicism**. A new fact on RB1 mosaicism was added; there are no counselling percentages in gameplay. | PMID 40338593 (Gao 2025: 14.7% mosaicism, including 4 patients with earlier negative germline tests) |
| 3 | `gen-hardy-weinberg:mcq2` | Distractor corrected from "1 in 70,700" to **"1 in 71"** (√(1/5,000) ≈ 1/70.7), and its explanation now shows the arithmetic. See also the new automatic arithmetic checks below. | — |
| 4 | `match:imprinting-causes` | "11p15 imprinting defect" was replaced by **"Paternal UPD of 11p15" → Beckwith–Wiedemann syndrome**, a defined mechanism. The title is now "Genetic alteration → imprinting disorder", with a matching prompt. A new `gen-bws` fact covers paternal UPD (about 20% of cases, usually mosaic). | MedlinePlus BWS |
| 5 | `gen-repeats:mcq6` | Answer and explanation: the expanded transcript carries **toxic CUG repeats that sequester MBNL splicing proteins**, so **alternative splicing** of other transcripts is abnormal. The fact and the concept mechanism were updated to match. | PMID 39460437 (Frison-Roche 2025) |
| 6 | `gen-hardy-weinberg:mcq3` and concept text | A founder effect is now described as shifting allele frequency **relative to the source population**. The descendant population can still show Hardy–Weinberg genotype proportions at its new frequency if it mates at random. The "Hardy–Weinberg equilibrium" distractor explanation, mechanism, quick, detailed text and takeaway were corrected. The checklist wording of `bc-hardy-weinberg.violations` was refined the same way (ID unchanged). | Reasoned from the Hardy–Weinberg assumptions (OpenStax Biology 19.1–19.2) |
| 7 | `gen-imprinting:mcq1` | Reclassified as **SUPPLEMENTARY**, with a note: a useful advanced application, but CF from maternal isodisomy is uncommon. The general UPD and imprinting items stay CORE. | — |
| 8 | `gen-imprinting` fact 5 | The pending meiosis I/II mapping was **reduced to its verified part**: in maternal heterodisomy, about two-thirds of cases with known timing arise from a meiosis I error. The unverified isodisomy mapping was removed from student-facing text and recorded as a deferred component of `bc-imprinting.upd`. **Batch 2 now has no pending facts.** | PMID 14747835 (Kotzot 2004) |

### Automatic arithmetic checks (new)

`src/content/arithmetic.ts` and `src/content/__tests__/arithmetic.test.ts` run in `npm test`:
- **Every written calculation chain** in every concept and item (e.g. "q = √(1/10,000) = 1/100", "1/2 × 1/2 = 1/4", "RR = 0.1 / 0.14 = 0.71") is parsed and recomputed. "=" must hold within 0.5% (or the displayed rounding) and "≈" within 5%. 101 calculations are checked, and all pass.
- **Every numerical question** in a registry (Hardy–Weinberg, recurrence-risk, sensitivity/specificity and NNT items, including the new `gen-pkd:mcq3`) has its keyed answer recomputed from the stem. Every numeric option must equal the quantity its explanation says it is (e.g. "1 in 71" = √(1/5,000)).
- A regression test confirms the original "1 in 70,700" would have failed.

### Counts after revision

Items: **66 CORE / 2 SUPPLEMENTARY** (added `gen-imprinting:mcq1`); depth unchanged (37 / 13 / 18). Facts: **53 verified, 0 pending.** A verified source is not medical approval.

## 1. Scope and approach

- **23 objectives**, chosen after checking the coverage report so that nothing already covered by Genetics batch 1 or legacy content is duplicated. They cover the areas requested:
  - genomic imprinting and uniparental disomy;
  - Hardy–Weinberg principles and probability;
  - trinucleotide repeat disorders;
  - sex chromosome abnormalities;
  - single-gene disease mechanisms not yet covered;
  - pedigree interpretation and recurrence risk.
- **Not duplicated:**
  - Klinefelter and Turner syndromes are covered by legacy content, so only 47,XYY is new here.
  - Huntington disease genetics is covered by legacy content. Here it appears only for parent-of-origin bias and for matching repeat disorders.
  - Anticipation as a term (`gen-anticipation`) and basic pedigree risk (AD, AR, XR) are taught in batch 1.
- **Step 1 depth.** The batch covers what an average Step 1 student must recognize, explain and apply:
  - which parent's copy is missing;
  - q = √prevalence and carriers ≈ 2q;
  - which repeat, gene and inheritance go together;
  - why a carrier can be symptomatic.
- **Kept out of the standard games:**
  - rare syndrome details;
  - molecular subtypes;
  - testing algorithms;
  - specialist named genes.

  The one detail beyond core (the F8 intron 22 inversion) is a single SUPPLEMENTARY item.
- **Calculated values:** Hardy–Weinberg answers (1 in 50; 1 in 25,000,000) and recurrence risks (1/4) are computed from the stated rules, not quoted.

## 2. Content

**13 concepts, 23 objectives, 68 playable items:** 34 MCQs, 20 true/false, 10 clues, 1 Mechanism Lab sequence, 2 Match Up sets, 1 Mystery Patient case.

| Concept | Objectives | Area |
|---|---|---|
| `gen-imprinting` | `bc-imprinting.mechanism`, `.upd` | Imprinting |
| `gen-pws-angelman` | `bc-imprinting.pws`, `.angelman` | Imprinting |
| `gen-bws` | `bc-imprinting.bws` | Imprinting |
| `gen-hardy-weinberg` | `bc-hardy-weinberg.equations`, `.ar-calc`, `.x-calc`, `.violations` | Hardy–Weinberg and probability |
| `gen-repeats` | `bc-trinucleotide.principles`, `.fragile-x`, `.friedreich`, `.match`; `bc-muscular-dystrophy.myotonic` | Trinucleotide repeats |
| `gen-xyy` | `bc-sex-chromosome.xyy` | Sex chromosome abnormalities |
| `gen-cf` | `bc-cystic-fibrosis.genetics`, `.physiology` | Single-gene mechanisms |
| `gen-sickle` | `bc-ar-diseases.sickle` | Single-gene mechanisms |
| `gen-hemophilia` | `bc-x-linked-diseases.hemophilia` | Single-gene mechanisms; recurrence risk |
| `gen-two-hit` | `bc-gen-terms.loh` | Single-gene mechanisms; pedigree |
| `gen-heterogeneity` | `bc-gen-terms.heterogeneity` | Single-gene mechanisms |
| `gen-reciprocal` | `bc-structural-chromosome.reciprocal` | Chromosomal; reproductive risk |
| `gen-inheritance-map` | `bc-ad-diseases.map` | Pedigree interpretation (assigning the pattern) |

**Games:**
- **Mechanism Lab** `seq:cftr-df508`: ΔF508 → misfolding → ER retention and degradation → little apical CFTR → less chloride secretion → thick mucus.
- **Match Up:**
  - `match:repeat-disorders`: disorder → repeat, gene and inheritance;
  - `match:imprinting-causes`: paternal or maternal deletion or UPD → syndrome.
- **Mystery Patient** `case:fragile-x-family`: a grandfather's FMR1 premutation passes to his daughter, then expands to a full mutation in her son.

**Pedigree figures (new):**
- `gen-repeats:mcq3`: myotonic dystrophy with anticipation over three generations.
- `gen-two-hit:mcq1`: hereditary retinoblastoma with a new (de novo) germline variant in the father.

Both validate against their declared inheritance mode.

**Probability items state their assumptions explicitly** (the batch 1 review point):
- carrier status is confirmed by testing (Friedreich recurrence; uniparental isodisomy);
- noncarrier status is confirmed (the mother in the symptomatic hemophilia carrier item);
- the karyotype is stated (46,XX, so 45,X is excluded);
- Hardy–Weinberg equilibrium is stated in the calculation stems.

## 3. Counts

| Measure | Value |
|---|---|
| Items: CORE / SUPPLEMENTARY / SPECIALIST / UNREVIEWED | **67 / 1 / 0 / 0** |
| Items: RECOGNITION / MECHANISM / APPLICATION | **37 / 13 / 18** |
| Objectives: CORE / SUPPLEMENTARY | 23 / 0 |
| Facts verified / awaiting direct confirmation | 49 / 1 |

- **SUPPLEMENTARY:** `gen-hemophilia:mcq1`, which asks for the F8 intron 22 inversion. X-linked F8/F9 inheritance and the symptomatic carrier (`gen-hemophilia:mcq2`) are CORE.
- **Relevance vs difficulty:**
  - The Hardy–Weinberg carrier calculation and the symptomatic hemophilia carrier are CORE at difficulty 4 (multistep). The Friedreich and myotonic dystrophy recurrence risks are CORE at difficulty 3.
  - Identification items, such as the XYY karyotype, the Beckwith–Wiedemann tumor risk and the founder effect, are CORE at difficulty 2.
  - Relevance and difficulty are set independently.

## 4. Coverage

**Genetics now: 51 of 83 objectives covered in full, 6 core covered with parts deferred, 2 partial, 24 missing.** Before this batch it was 29 / 5 / 3 / 46.

Of this batch's 23 objectives, 20 are covered in full and 3 are core covered with parts deferred:

| Objective | Deferred component | Reason |
|---|---|---|
| `bc-trinucleotide.fragile-x` | Mitral valve prolapse | Not stated in the sources read |
| `bc-trinucleotide.friedreich` | Iron handling as frataxin's specific role (taught as "important for mitochondrial function"); loss of vibration and position sense (taught as loss of sensation); pes cavus | Not stated in the sources read |
| `bc-muscular-dystrophy.myotonic` | Distal pattern of weakness; frontal balding; testicular atrophy | Not stated in the sources read |

These are named in the checklist text, so the objectives are not counted as covered in full. They can be added if the reviewer confirms them or supplies a source.

**Still missing in Genetics (for a later batch, not started):**
- **Single-gene disorders:**
  - pleiotropy and linkage disequilibrium;
  - MELAS/MERRF and ragged-red fibers;
  - the autosomal dominant disease catalog (ADPKD, FAP, HHT, Li–Fraumeni, NF1, NF2, tuberous sclerosis, VHL);
  - thalassemia genetics, hemochromatosis, Wilson disease, ARPKD, SMA;
  - CF presentations and newborn screening;
  - Wiskott–Aldrich syndrome.
- **Chromosomal:**
  - prenatal screening;
  - the remaining structural syndromes.

## 5. Verification status (for the reviewer)

| Statement | Status |
|---|---|
| CFTR reabsorbs chloride in the sweat duct but secretes it in airway and gut (`gen-cf` fact 5) | **Verified** (it was pending in the draft): PMID 23284077 states that in CF, salt absorption by gland duct epithelia is prevented by loss of CFTR, while airway epithelia lack CFTR-mediated Cl⁻ secretion |
| IGF2 overexpression contributes to Beckwith–Wiedemann overgrowth (`gen-bws` fact 4) | **Verified** (it was pending): PMID 9260520 states that loss of imprinting of the paternally expressed growth enhancer IGF2 is the most common molecular defect and that IGF2 overexpression can reproduce most features |
| Heterodisomy most often reflects a meiosis I error; isodisomy fits a meiosis II error or postzygotic duplication (`gen-imprinting` fact 5) | **Pending** (`factPending`). Partly verified: PMID 14747835 attributes about two-thirds of maternal heterodisomy to meiosis I errors and the rest to meiosis II. The isodisomy mapping is standard teaching, not stated in the sources read. The fact was reworded from "fits" to "most often reflects" to match the source. No item depends on the meiosis mapping. |
| Carrier frequency ≈ 2q; female X-linked frequency = q²; recurrence 1/4 | **Calculated** from the verified Hardy–Weinberg equations (OpenStax Biology 19.2) and recessive inheritance rules |
| A carrier daughter of an affected father with symptoms is explained by skewed X-inactivation (`gen-hemophilia:mcq2`) | **Verified** (MedlinePlus Hemophilia: one altered copy can suffice when the X with the normal copy is turned off) |
| Expanded DMPK mRNA traps proteins in clumps (`gen-repeats` fact 7, `gen-repeats:mcq6`) | **Verified** (MedlinePlus DMPK and Myotonic dystrophy pages). The splicing-defect detail is not taught. |
| Distractor explanations | Each says why the option fits the vignette less well. None asserts an unsourced association. |

## 6. Sources

- **MedlinePlus Genetics:**
  - imprinting and UPD;
  - Prader–Willi, Angelman and Beckwith–Wiedemann syndromes;
  - fragile X and FMR1;
  - Friedreich ataxia;
  - myotonic dystrophy and DMPK;
  - Huntington disease;
  - 47,XYY;
  - cystic fibrosis and CFTR;
  - sickle cell disease and HBB;
  - hemophilia and F8;
  - retinoblastoma;
  - structural chromosome changes;
  - oculocutaneous albinism;
  - β-thalassemia;
  - inheritance patterns.
- **OpenStax Biology 2e:** 19.1 Population Evolution and 19.2 Population Genetics.
- **PubMed** (every label checked against its PubMed record):
  - **Repeat disorders:**
    - Huntington paternal expansion: 8634693 (Tzagournissakis 1995), 21412977 (Nicolas 2011);
    - fragile X maternal expansion: 35246105 (Meraj 2022).
  - **Population genetics:** HbS and malaria: 26637716 (Naik & Haywood 2015).
  - **Uniparental disomy:** 8362910 (Engel 1993), 33179335 (Benn 2021), 14747835 (Kotzot 2004).
  - **Beckwith–Wiedemann and IGF2:** 9260520 (Reik 1997).
  - **Reciprocal translocations:** 30126420 (Pasińska 2018), 3360167 (Fortuny 1988).
  - **Hemophilia:** F8 intron 22 inversion: 34439937 (Han 2021).
  - **Cystic fibrosis:**
    - ΔF508 and ER quality control: 38888668 (Okiyoneda 2024);
    - diagnosis by sweat chloride: 41318507 (Bhuiyan 2025);
    - gland duct vs airway: 23284077 (Reddy & Stutts 2013).

## 7. Checks

- `npm run check` (typecheck, lint, 115 tests including `validateContent`, depth coverage for every linked objective, difficulty bounds, distractor quality, figure validation): **pass**.
- During drafting, the depth audit found 10 objectives missing a required depth. 11 items were added to close the gaps:
  - mechanism items for UPD, Prader–Willi, Angelman, the Hardy–Weinberg equations, Friedreich ataxia and myotonic dystrophy;
  - application items for Beckwith–Wiedemann, the Friedreich cardiac complication (prediction), the repeat comparison and the symptomatic hemophilia carrier;
  - a fragile X recognition clue and a true/false item.

  Three concepts also gained a third fact (47,XYY, two-hit, heterogeneity).
- Browser play-check: see below.
- No device testing, deployment or medical review was done.

### Browser validation (original batch)

`npm run check:games` method (reviewer-preview build `VITE_ALLOW_UNREVIEWED=true`, `vite preview`, headless Chromium, iPhone 13 emulation): **672 passed, 0 failed**. All 20 Mechanism Lab sequences were played correctly and incorrectly, and all 23 Match Up sets were played, including `seq:cftr-df508`, `match:repeat-disorders` and `match:imprinting-causes`. No server was left running. Technical checks only; not evidence of medical accuracy.
