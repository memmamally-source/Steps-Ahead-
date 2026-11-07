# Biochemistry — Genetics batch 2 change log

All content is **draft, AI-drafted, not medically reviewed**. A verified source is not medical approval, and passing automated or browser checks shows only technical validity, not medical accuracy or editorial approval. Review packet: `BIOCHEM_GEN2_REVIEW.md`. Source: `src/content/biochem/gen2.ts` (`geneticsBatch2`).

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

### Browser validation

See the result recorded below once the run completes.
