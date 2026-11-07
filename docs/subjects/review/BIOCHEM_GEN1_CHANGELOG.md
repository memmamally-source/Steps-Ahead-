# Biochemistry — Genetics batch 1 change log

All content is **draft, AI-drafted, not medically reviewed**. A verified source is not medical approval, and passing automated or browser checks shows only technical validity, not medical accuracy or editorial approval. Review packet: `BIOCHEM_GEN1_REVIEW.md`. Source: `src/content/biochem/gen1.ts` (`geneticsBatch1`).

## 1. Scope and approach

- **23 objectives** from the approved Genetics checklist, prioritizing inheritance patterns and pedigrees, recurrence risk, atypical inheritance, mutation effects and the classic chromosomal syndromes. Imprinting, Hardy–Weinberg, single-gene disease catalogs, repeat disorders in detail and sex chromosome aneuploidies (already covered by legacy content) are left for later batches.
- Depth is set for the average Step 1 student: read a pedigree, compute a risk, explain why a finding occurs. There are no research-level genetics or diagnostic algorithms.
- **Sources:**
  - MedlinePlus Genetics: the "Inheriting genetic conditions" chapter (inheritance patterns, risk assessment, penetrance and expressivity, anticipation), "gene variants" (de novo variants and mosaicism), "chromosomal conditions", and condition pages (achondroplasia, NF1, Huntington disease, hemophilia, X-linked hypophosphatemia, Rett and Alport syndromes, Down syndrome, trisomies 18 and 13, 22q11.2 deletion, McCune–Albright);
  - MedlinePlus mitochondrial DNA page;
  - OpenStax Biology 13.2;
  - PubMed abstracts (§6), with every citation label checked against its PubMed record.
- **Calculated risks:** recurrence risks (50%, 25%, 2/3, 1/4) are Mendelian probabilities computed from the inheritance rules stated in the sources.

## 2. Content

**14 concepts, 23 objectives, 81 playable items:** 39 MCQs, 22 true/false, 16 clues, 1 Mechanism Lab sequence, 2 Match Up sets, 1 Mystery Patient case.

| Concept | Objectives (`bc-…`) |
|---|---|
| `gen-ad` | `ad-inheritance.pedigree`, `.risk`, `.mechanisms` |
| `gen-ar` | `ar-inheritance.pedigree`, `.risk`, `.enzymes` |
| `gen-xlr` | `xlinked-inheritance.xr-pedigree`, `.xr-risk`, `.lyonization` |
| `gen-xld` | `xlinked-inheritance.xd-pedigree` |
| `gen-mito` | `mito-inheritance.pattern` |
| `gen-expression-terms` | `gen-terms.codominance`, `.penetrance` |
| `gen-anticipation` | `gen-terms.anticipation` |
| `gen-dominant-negative` | `gen-terms.dominant-negative` |
| `gen-mosaicism` | `gen-terms.mosaicism` |
| `gen-nondisjunction` | `autosomal-trisomies.nondisjunction` |
| `gen-down` | `autosomal-trisomies.down`, `.down-associations` |
| `gen-trisomy-18-13` | `autosomal-trisomies.edwards`, `.patau` |
| `gen-robertsonian` | `structural-chromosome.robertsonian` |
| `gen-22q11` | `structural-chromosome.22q11` |

**Games:**
- Mechanism Lab: `seq:nondisjunction-t21`.
- Match Up: `match:inheritance-clues` (pedigree clue → pattern) and `match:chromosomal-syndromes`.
- Mystery Patient: `case:xlr-family`. The sister of a man with hemophilia, whose mother is an obligate carrier, asks her son's risk: 1/2 × 1/2 = 1/4.

Pedigrees are described in words for now. Drawn pedigrees are phase 3 of `docs/VISUAL_LEARNING_PLAN.md`.

## 3. Counts

| Measure | Value |
|---|---|
| Items: CORE / SUPPLEMENTARY / SPECIALIST / UNREVIEWED | **78 / 3 / 0 / 0** |
| Items: RECOGNITION / MECHANISM / APPLICATION | **52 / 10 / 19** |
| Objectives: CORE / SUPPLEMENTARY | 23 / 0 |
| Facts verified / awaiting confirmation | 55 / 1 |

- **SUPPLEMENTARY:**
  - the Rett syndrome identification item (its clinical detail belongs to Neurology);
  - the transient myeloproliferative disorder item (the leukemia risk itself is core);
  - the TBX clue (a gene-name detail).
- **Relevance vs difficulty:** the two probability calculations are CORE at difficulty 4 (multistep): the 2/3 carrier risk and the 1/4 risk for the hemophilia sister's son. High-yield reasoning stays core even when it is hard. Classic presentations, such as the Down syndrome "double bubble" with an AV septal defect, the DiGeorge triad, and the trisomy 18 and 13 pictures, are interpretation or identification at difficulty 2–3.

## 4. Coverage

**Genetics: 29 of 83 objectives covered in full, 5 core covered with parts deferred, 3 partial, 46 missing.** The 3 partial and 46 missing objectives are in subtopics not yet written. Of this batch's 23 objectives, 18 are covered in full and 5 core covered with parts deferred:

| Objective | Deferred component | Reason |
|---|---|---|
| `bc-ad-inheritance.mechanisms` | The generalization that dominant disorders often involve structural proteins or receptors | Not stated in the sources read. The mechanisms (haploinsufficiency, dominant negative, gain of function, homozygous severity) are taught. |
| `bc-gen-terms.dominant-negative` | Mutant p53 as a named example | Taught with Hematology/Oncology. The collagen (osteogenesis imperfecta) setting is referenced from the Molecular batch. |
| `bc-autosomal-trisomies.down` | Epicanthal folds, sandal gap | Minor features, not in the sources read |
| `bc-autosomal-trisomies.down-associations` | Atlantoaxial instability | Its clinical significance is disputed in the sources read (PMID 2966926) |
| `bc-autosomal-trisomies.edwards` | Prominent occiput, rocker-bottom feet | Not in the sources read |

## 5. Verification status (for the reviewer)

| Statement | Status |
|---|---|
| Pharyngeal pouches give rise to the thymus and parathyroids, **classically the third and fourth pouches** | **Pending** (`factPending`). The pouch derivatives are verified (PMID 32491656, 35110278); the specific numbering is standard teaching not stated in the sources read. |
| A 45,X girl whose single X carries a hemophilia variant can be affected like a male (`gen-xlr` application item) | **Reasoned** from verified facts: X-linked recessive disease in males with one X (MedlinePlus); Turner syndrome = one X (MedlinePlus). The applied conclusion is not quoted from a source. |
| Male-to-male transmission excludes X-linked inheritance and supports autosomal dominant | Verified for X-linked ("fathers cannot pass X-linked traits to their sons", MedlinePlus). The autosomal dominant inference follows from it. |
| Carrier probability 2/3 for an unaffected sibling; the hemophilia case's 1/4 | **Calculated** from the verified 25/50/25 and 50% rules (MedlinePlus risk page) |
| "Double bubble" radiograph for duodenal atresia (`gen-down:mcq1` stem) | **Not verified** in a source read. Duodenal atresia as a Down association is verified (PMID 26578241); the radiographic sign is standard teaching. Please confirm. |
| "Knight's move" description of an X-linked recessive pedigree (detailed text) | **Not verified.** It is a descriptive teaching phrase; the underlying pattern is verified. |
| A defective subunit in a four-subunit complex lowers function far below 50% (`gen-dominant-negative:mcq1`) | Mechanism verified (a defective subunit poisons the complex, PMID 28755412). The tetramer arithmetic is reasoned. |

**Removed during self-review because they were unsourced:** distractor explanations linking coarctation to Turner syndrome, supravalvular aortic stenosis to Williams syndrome, Ebstein anomaly to lithium, cri-du-chat and Turner features, and first-arch embryology. These explanations now only say why the option does not fit the vignette.

## 6. PubMed sources

- **Mechanisms:**
  - Achondroplasia de novo mutations and paternal age: 32644689.
  - Mechanisms of dominance: 28755412.
  - Enzyme mutations are recessive: Kacser & Burns, 7297851.
  - Random X-inactivation: 21811421.
- **Chromosomal disorders:**
  - Trisomy 21 origin (maternal meiosis I) and maternal age: 11173856, 19050929.
  - Down syndrome anomalies (AV septal defect, duodenal atresia, Hirschsprung disease): 26578241.
  - Transient myeloproliferative disorder: 16998319.
  - Patau syndrome features (triad, holoprosencephaly): 24340511, 38974285.
  - Robertsonian translocation (definition, long-arm fusion, rob(14;21) in a family): 33776621, 24346783, 26236088.
  - 22q11.2 deletion and the pharyngeal pouches: 35110278, 32491656.

## 7. Checks

- `npm run check` (typecheck, lint, all tests including `validateContent`, depth coverage for every linked objective, difficulty bounds, distractor quality): pass.
- Browser play-check: see below.
- No device testing, deployment or medical review was done.

### Browser validation

BROWSER_PLACEHOLDER
