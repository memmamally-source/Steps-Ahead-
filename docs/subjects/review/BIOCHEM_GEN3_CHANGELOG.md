# Biochemistry — Genetics batch 3 change log

All content is **draft, AI-drafted, not medically reviewed**. A verified source is not medical approval, and passing automated or browser checks shows only technical validity, not medical accuracy or editorial approval. Review packet: `BIOCHEM_GEN3_REVIEW.md`. Source: `src/content/biochem/gen3.ts` (`geneticsBatch3`).

## 1. How the objectives were chosen

I listed every Genetics objective that the coverage report showed as missing or partial (26 in total) and kept the **23** that are high-yield genetics:
- **The requested priorities:**
  - NF1, NF2, tuberous sclerosis, VHL;
  - ADPKD, ARPKD;
  - FAP, Li–Fraumeni;
  - HHT;
  - Wilson disease, hemochromatosis;
  - SMA;
  - thalassemia genetics;
  - MELAS, MERRF, LHON and ragged-red fibers;
  - Wiskott–Aldrich syndrome.
- **The remaining core inheritance and chromosomal gaps:**
  - pleiotropy and linkage disequilibrium;
  - grouping disorders by inheritance (recessive storage diseases and the X-linked list);
  - Williams syndrome, cri-du-chat, VACTERL.

**Deliberately not taken (3):**
- **CF presentations** and **CF newborn screening/diagnosis/modulators** belong to Respiratory and Gastrointestinal;
- **first- and second-trimester screening** belongs to Reproductive.

These are clinical-management objectives, and the instruction was not to duplicate organ-system chapters.

**Scope rule applied to every topic:** gene, mechanism, inheritance and hallmark associations only. Imaging protocols, surveillance schedules, drug treatment and management are left to the organ chapters.

## 2. High-yield rule and relevance

**Rule:** a question must teach something a typical well-prepared Step 1 student benefits from knowing. Difficulty comes from reasoning (localising a lesion, choosing a mechanism, working out a risk), not from obscure facts.

| Topic | CORE (taught and played) | Optional or deferred (not in standard games) |
|---|---|---|
| Pleiotropy / linkage disequilibrium | Pleiotropy with PKU and Marfan | Linkage disequilibrium: objective and item **SUPPLEMENTARY** (recognition-level research concept) |
| Mitochondrial disorders | MELAS, MERRF, LHON pictures; maternal inheritance; lactic acidosis; ragged-red fibers | m.3243A>G appears in facts only, not as a question answer |
| NF1 / NF2 | Neurofibromin turns off RAS; café-au-lait, freckling, Lisch nodules, neurofibromas, optic glioma; variable expressivity; merlin and bilateral vestibular schwannomas; about half de novo | NF1 pheochromocytoma (deferred, not in sources) |
| Tuberous sclerosis | Hamartin/tuberin restrain mTORC1 via Rheb; tubers, seizures, angiofibromas, light macules, cardiac rhabdomyoma, renal angiomyolipoma; two-thirds de novo | — |
| VHL | VHL degrades HIF; hemangioblastomas, clear cell RCC, pheochromocytoma; chromosome 3 | 3p band and RCC bilaterality (deferred) |
| FAP / Li–Fraumeni | APC limits β-catenin; hundreds of polyps; cancer by ~40; AD 50%; germline TP53 tumor spectrum | Gardner and Turcot variants (deferred, specialist) |
| HHT | AD; ENG/ACVRL1/SMAD4 in TGF-β/BMP; epistaxis, telangiectases, AVMs | HHT type 1 vs 2 organ tendencies stay in facts only |
| PKD | ADPKD (PKD1 chr 16, PKD2): adult cysts, liver cysts, brain aneurysms; ARPKD (PKHD1): newborn | — |
| Wilson / hemochromatosis | ATP7B and biliary copper excretion, ceruloplasmin, Kayser–Fleischer; HFE C282Y, low hepcidin, low clinical penetrance | — |
| SMA | AR SMN1 deletion; anterior horn cells; floppy, areflexic infant | **SMN2 copy number** item is **SUPPLEMENTARY**; tongue fasciculations (deferred) |
| Thalassemia | α: four alleles on chr 16, deletions, count genes lost; cis vs trans mechanism; β: HBB chr 11, β⁰/β⁺ | Ancestry patterns of cis/trans (deferred) |
| Inheritance grouping / WAS | Most storage diseases AR; Fabry and Hunter X-linked; the X-linked list; WAS triad with small platelets, WASP/actin, ↑ IgE | ↑ IgA (deferred: source conflict, see §5) |
| Williams / cri-du-chat / VACTERL | 7q11.23 microdeletion incl. ELN (SVAS, hypercalcemia, sociable) detected by FISH or microarray; 5p− cat cry; VACTERL = ≥3 malformations, multifactorial | VSD as the specific cri-du-chat heart defect (deferred) |

**Relevance and difficulty are independent.** The hardest items are CORE:
- the cis/trans α-thalassemia question (difficulty 4, multistep);
- the SMA lesion-localisation question and the Wiskott–Aldrich, Wilson and VHL vignettes (difficulty 3).

Pure recall stays at difficulty 1–2.

## 3. Content

**13 concepts, 23 objectives, 83 playable items:**
- **Item types:** 36 MCQs, 21 true/false, 20 clues, 2 Mechanism Lab sequences, 3 Match Up sets, 1 Mystery Patient case.
- **Relevance:** 81 CORE / 2 SUPPLEMENTARY.
- **Depth:** 53 recognition / 9 mechanism / 21 application.

| Concept | Objectives |
|---|---|
| `gen-pleiotropy-ld` | `bc-gen-terms.pleiotropy`, `.linkage` |
| `gen-mito-disorders` | `bc-mito-inheritance.diseases`, `.biopsy` |
| `gen-neurofibromatosis` | `bc-ad-diseases.nf1`, `.nf2` |
| `gen-tsc` | `bc-ad-diseases.tsc` |
| `gen-vhl` | `bc-ad-diseases.vhl` |
| `gen-cancer-predisposition` | `bc-ad-diseases.fap`, `.lfs` |
| `gen-hht` | `bc-ad-diseases.hht` |
| `gen-pkd` | `bc-ad-diseases.adpkd`, `bc-ar-diseases.arpkd` |
| `gen-metal-overload` | `bc-ar-diseases.wilson`, `.hemochromatosis` |
| `gen-sma` | `bc-ar-diseases.sma` |
| `gen-thalassemia` | `bc-ar-diseases.thalassemia` |
| `gen-inheritance-groups` | `bc-ar-diseases.map`, `bc-x-linked-diseases.map`, `.wiskott` |
| `gen-deletion-syndromes` | `bc-structural-chromosome.williams`, `.cri-du-chat`, `.vacterl` |

**Games (beyond standard MCQs):**
- **Mechanism Lab:**
  - `seq:vhl-hif`: second VHL hit → HIF not degraded → angiogenesis → vascular tumor;
  - `seq:wilson-copper`: ATP7B defect → copper retained in liver → spread → brain and cornea.
- **Match Up:**
  - `match:tumor-syndrome-genes`: NF1/TSC/VHL/APC/TP53 → what the protein normally does;
  - `match:which-inheritance`: WAS, Wilson, HHT, MERRF, VACTERL → pattern;
  - `match:which-test-shows-it`: trisomy and large deletion → karyotype; microdeletion → FISH or microarray; SMN1 deletion → molecular test.
- **Mystery Patient** `case:vhl-family`: cerebellar hemangioblastoma, renal lesions and a mother with an eye tumor and early kidney cancer → VHL and HIF.
- **Crossword clues** for 20 key terms, and true/false items that target common misconceptions (pleiotropy vs heterogeneity, NF1 vs NF2, HFE penetrance, karyotype limits).

**Figures (new):**
- MELAS maternal pedigree (`gen-mito-disorders:mcq1`);
- Williams metaphase FISH with one ELN signal (`gen-deletion-syndromes:mcq1`);
- cri-du-chat karyogram 46,XX,del(5)(p14) (`gen-deletion-syndromes:mcq2`).

All pass validation; previews are in `docs/subjects/review/figures/previews/`.

## 4. Coverage

**Genetics now: 66 of 83 objectives covered in full, 14 core covered with parts deferred, 0 partial, 3 missing** (the 3 organ-chapter objectives in §1). Before this batch it was 51 / 6 / 2 / 24.

- The two previously partial objectives, `bc-ar-diseases.map` and `bc-x-linked-diseases.map`, are now covered.
- Of this batch's 23 objectives, 16 are covered in full and 7 are core covered with parts deferred (the entries listed in §2).

**Biochemistry overall:** 175 objectives covered in full / 24 core-deferred / 26 partial / 141 missing (of 366). The partial and missing objectives are mainly Nutrition and Metabolism, which have not been started.

## 5. Verification status (for the reviewer)

**62 facts verified, 0 pending.** Every fact cites MedlinePlus Genetics or a PubMed abstract that states it. Some answers and explanations combine verified facts; these **reasoned** conclusions are not quoted from a source:

| Statement | Status |
|---|---|
| A cis α-thal carrier (--/αα) and a trans carrier (-α/-α) cannot have an Hb Bart child (`gen-thalassemia:mcq1`) | **Reasoned** from verified facts: four alleles, two per chromosome 16 (MedlinePlus); deletions can remove both genes in cis (PMID 10872473) |
| A terminal 5p deletion is usually large enough to see on a routine karyotype, whereas 7q11.23 is not | **Reasoned** from verified facts: the karyotype limit of about 5–10 Mb (PMID 20542150), and 5p deletions of variable size (PMID 16953888). The karyogram uses an illustrative 20 Mb and says so in its caption. |
| The child of a woman with de novo NF2 has a 50% risk, lower only if she is mosaic (`gen-neurofibromatosis:mcq5`) | **Reasoned** from autosomal dominant inheritance (MedlinePlus). The mosaic caveat is a general genetic principle. |
| SMA localises to anterior horn cells because reflexes are absent and the face is spared (`gen-sma:mcq1`) | Anterior horn cell loss is verified (PMID 29627031). The localisation reasoning in the distractors is a general neurologic principle. |
| Surveillance of a child at risk of FAP starts in childhood (`gen-cancer-predisposition:mcq4`) | **Reasoned** from verified onset (polyps can appear in childhood; 95% have them by 35). No guideline schedule is taught. |
| SMN1 deletions need a molecular copy-number test (`match:which-test-shows-it`) | **Reasoned:** about 95% of SMA patients have SMN1 deletions (MedlinePlus), far below karyotype resolution |
| **Source conflict:** the checklist states "↑ IgA" in Wiskott–Aldrich syndrome; the source read (PMID 41345550) reports IgA and IgM low to normal and IgE elevated | Taught as "↑ IgE, IgA and IgM low to normal". **↑ IgA is deferred for the reviewer to decide.** |
| Tongue fasciculations in SMA | **Not taught** (deferred): only article titles were found, no abstract text |

Distractor explanations say why each option fits less well. Most name features that are taught in this batch or an earlier one. A few rely on standard distinguishing features that are not separately sourced here, and these are flagged for review: Gaucher hepatosplenomegaly and bone disease, Potter sequence and oligohydramnios, inflammatory myopathy, PAS-positive lysosomal glycogen, and the neuromuscular-junction pattern in the SMA item.

## 6. Sources

- **MedlinePlus Genetics:**
  - **Tumor syndromes:**
    - NF1, NF2;
    - tuberous sclerosis complex (with the TSC1 and TSC2 gene pages);
    - von Hippel–Lindau (with VHL);
    - FAP (with APC);
    - Li–Fraumeni.
  - **Other single-gene disorders:**
    - polycystic kidney disease (with PKD1 and PKHD1);
    - HHT;
    - Wilson disease (with ATP7B);
    - hereditary hemochromatosis (with HFE);
    - SMA (with SMN1);
    - α- and β-thalassemia (with HBA1 and HBB).
  - **Mitochondrial disorders:** MELAS, MERRF, LHON.
  - **Immunodeficiency and X-linked disorders:** Wiskott–Aldrich, X-linked agammaglobulinemia, G6PD deficiency, Lesch–Nyhan, MPS II, OTC deficiency, ocular albinism, Fabry.
  - **Chromosomal and developmental:** Williams, cri-du-chat, VACTERL.
  - **Pleiotropy examples:** PKU, Marfan.
- **PubMed** (every label checked against its PubMed record):
  - **Genetic terms:** pleiotropy 2683776 (Pyeritz 1989); linkage disequilibrium 18427557 (Slatkin 2008).
  - **Mitochondrial disease:**
    - MELAS 20301411 (El-Hattab, GeneReviews), 26095523 (El-Hattab 2015);
    - MERRF 20301693 (Velez-Bartolomei, GeneReviews);
    - LHON 32969847 (Newman 2020);
    - ragged-red fibers 9145310 (Yoshida 1997), 8654494 (Reichmann 1996).
  - **Tumor syndromes:**
    - TSC: mTORC1 18466115 (Huang & Manning 2008); renal angiomyolipoma 26104489 (von Ranke 2015);
    - Li–Fraumeni spectrum 31511974 (Dutzmann 2019);
    - HHT and TGF-β/BMP 36504622 (Drapé 2022).
  - **Metabolic and other single-gene disorders:**
    - Wilson 16233999 (Ferenci 2005);
    - HFE C282Y 33987429 (Anderson 2021) and penetrance 19444013 (Alexander 2009);
    - SMA anterior horn cells 29627031 (Abati 2018); SMN2 copy number 20392710 (Lorson 2010);
    - α-globin cis deletions 10872473 (Bernini 1998);
    - Wiskott–Aldrich 14499269 (Notarangelo 2003), 41345550 (Esmaeilzadeh 2025);
    - lysosomal storage inheritance 21913413 (Kloska 2011).
  - **Chromosomal:**
    - Williams 7q11.23 20437059 (Merla 2010);
    - karyotype resolution 20542150 (Gijsbers 2010);
    - cri-du-chat 16953888 (Cerruti Mainardi 2006);
    - VACTERL 23165726 (Solomon 2012).

## 7. Validation and tests

- `npm run check` (typecheck, lint, **124 tests**): **pass**. This includes:
  - `validateContent`;
  - depth coverage for every linked objective;
  - difficulty bounds and distractor quality;
  - figure validation;
  - the new arithmetic checks, with `gen-pkd:mcq3` added to the numeric registry.
- **Depth audit during drafting:**
  - It found 4 objectives missing a required depth: biopsy application, FAP application, ARPKD application and cri-du-chat application. Targeted items were added for each.
  - The answer-length check flagged 10 items whose correct answer was conspicuously the longest option; their options were rebalanced.
- **Browser validation:** see below.
- No device testing, deployment or medical review was done.

### Browser validation

Result recorded below once the run completes.
