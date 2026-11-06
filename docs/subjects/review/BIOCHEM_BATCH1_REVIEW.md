# Biochemistry batch 1 (revision 2) — Molecular biochemistry (core)

Status: **draft, AI-drafted, not medically reviewed.** Reviewer: mark each concept approved, needs changes or rejected, with notes.

## How to read this packet

- Options are listed in their **stored** order (deterministically shuffled per item, with opaque ids). Learners see a fresh random order on every presentation; answers are checked by option id, never by position. ✅ marks the correct option.
- Each item shows its **reasoning task** and the **depth** that follows from it: recall/identification → recognition; mechanism → mechanism; interpretation/prediction/comparison/multistep → application. A vignette that only asks for the classic diagnosis is identification (recognition), not application.
- Each fact lists the numbers of the citations that support it. “Checked”: **full-text** (page read), **summary** (published abstract or summary read), **existence** (record confirmed but full text not accessible; reviewer should confirm the claim).
- Mastery: true/false and crossword answers count as weaker recognition evidence; repeating an item within 7 days adds little; “strong” needs at least 3 distinct items, including a mechanism or application item.

## Summary

| Measure | Value |
|---|---|
| Concepts | 15 |
| Objectives taught | 25 |
| MCQs / true-false / crossword clues | 48 / 29 / 22 |
| Complete Connections puzzles / category groups / Mystery Patient cases | 3 / 3 / 2 |
| Items: recall | 52 |
| Items: identification | 16 |
| Items: mechanism | 18 |
| Items: interpretation | 7 |
| Items: prediction | 4 |
| Items: comparison | 5 |
| Items: multistep | 5 |

## Nucleotide structure and de novo synthesis (`mol-nucleotides`)

Objectives: `bc-nucleotide-synthesis.structure`, `bc-nucleotide-synthesis.pathways`

**Citations**

1. OpenStax Biology 2e, 14.2 DNA Structure and Sequencing — <https://openstax.org/books/biology-2e/pages/14-2-dna-structure-and-sequencing> — checked: full-text
2. MedlinePlus Genetics: Phosphoribosylpyrophosphate synthetase superactivity — <https://medlineplus.gov/genetics/condition/phosphoribosylpyrophosphate-synthetase-superactivity/> — checked: full-text
3. Staretz-Chacham O et al. Hereditary orotic aciduria identified by newborn screening. Front Genet 2023 — PMID 36999056 — <https://pubmed.ncbi.nlm.nih.gov/36999056/> — checked: summary
4. StatPearls: Folic Acid — PMID 32119374; NBK554487 — <https://www.ncbi.nlm.nih.gov/books/NBK554487/> — checked: existence
5. Longley DB et al. 5-Fluorouracil: mechanisms of action and clinical strategies. Nat Rev Cancer 2003 — PMID 12724731 — <https://pubmed.ncbi.nlm.nih.gov/12724731/> — checked: existence
6. Mechanism of leucovorin reversal of methotrexate cytotoxicity. Biochem Pharmacol 1990 — PMID 2260989 — <https://pubmed.ncbi.nlm.nih.gov/2260989/> — checked: summary
7. The current role of hydroxyurea in the treatment of sickle cell disease. J Clin Med 2024 — PMID 39518543 — <https://pubmed.ncbi.nlm.nih.gov/39518543/> — checked: summary

**Facts** [supporting citations]

- Purines (adenine, guanine) have a double ring (a six-membered ring fused to a five-membered ring); pyrimidines (cytosine, thymine, uracil) have a single six-membered ring. [1]
- PRPP (phosphoribosyl pyrophosphate) is the ribose-phosphate donor for nucleotide synthesis. Purines are assembled on ribose-phosphate derived from PRPP; the first purine nucleotide formed is IMP. [2]
- Pyrimidines are built as a free ring first (orotate), which is then attached to PRPP; UMP synthase converts orotate to UMP. [3, 2]
- Ribonucleotide reductase converts ribonucleotides to deoxyribonucleotides (the target of hydroxyurea). [7]
- Thymidylate synthase methylates dUMP to dTMP using N⁵,N¹⁰-methylene tetrahydrofolate, which is oxidized to dihydrofolate; dihydrofolate reductase must regenerate tetrahydrofolate. [5, 6, 4]
- De novo purine synthesis also uses a folate cofactor (10-formyl tetrahydrofolate), but that transfer returns tetrahydrofolate, not dihydrofolate. [4]

**Mechanism.** Every new DNA strand needs deoxyribonucleotides. Ribonucleotide reductase supplies the deoxy sugar, and thymidylate synthase supplies thymine using a folate-carried carbon. Because thymidylate synthase is the reaction that oxidizes tetrahydrofolate to dihydrofolate, thymidine synthesis depends on dihydrofolate reductase to keep the folate pool reduced. These steps are the bottlenecks for DNA synthesis in rapidly dividing cells.

**Quick.** Purines: 2 rings, built on PRPP-derived ribose (first product IMP). Pyrimidines: 1 ring, made as orotate then added to PRPP (UMP synthase). Ribonucleotide reductase makes deoxyribonucleotides; thymidylate synthase makes dTMP and turns THF into DHF.

**Detailed**

> The two families differ in how they are built. Purine synthesis adds atoms to a sugar that is already in place, so PRPP is needed from the start. Pyrimidine synthesis makes the orotate ring first and attaches it to PRPP afterwards.

> DNA needs two further steps that RNA does not: removal of the 2′-hydroxyl by ribonucleotide reductase, and methylation of dUMP to dTMP by thymidylate synthase. The methyl group comes from methylene tetrahydrofolate, which ends up as dihydrofolate; dihydrofolate reductase regenerates tetrahydrofolate. A shortage of reduced folate therefore slows DNA synthesis first in the bone marrow and mucosa.

**Misconception.** Folate is needed for both purine and thymidine synthesis, but only the thymidylate synthase reaction converts tetrahydrofolate to dihydrofolate, which is why dihydrofolate reductase inhibitors hit thymidine supply so directly.

**Takeaway.** DNA synthesis bottlenecks: ribonucleotide reductase (deoxy sugar) and thymidylate synthase + dihydrofolate reductase (thymine).

- **MCQ** `mol-nucleotides:mcq1` · mechanism → **mechanism** · difficulty 3 · `bc-nucleotide-synthesis.pathways`
  - In proliferating cells, which reaction converts tetrahydrofolate to dihydrofolate and therefore depends most directly on dihydrofolate reductase to keep running?
  - ◻️ A. Conversion of serine to glycine — _This reaction loads a carbon onto tetrahydrofolate (forming methylene-THF); it does not oxidize it._
  - ◻️ B. Transfer of a formyl group during de novo purine ring assembly — _This uses 10-formyl-THF but releases tetrahydrofolate, not dihydrofolate; it is a common confusion because purine synthesis is folate-dependent too._
  - ◻️ C. Remethylation of homocysteine to methionine — _Methionine synthase converts 5-methyl-THF to tetrahydrofolate, not dihydrofolate._
  - ◻️ D. Reduction of CDP to dCDP by ribonucleotide reductase — _Ribonucleotide reductase uses thioredoxin, not folate._
  - ✅ E. Methylation of dUMP to dTMP by thymidylate synthase
  - Explanation: Thymidylate synthase both donates a carbon and two electrons from methylene-THF, leaving dihydrofolate that must be reduced again by DHFR.
- **True/false** `mol-nucleotides:tf1` · recall → **recognition** · difficulty 1 · `bc-nucleotide-synthesis.structure`: Thymine is a purine base found in DNA but not RNA. → **False**. Thymine is a pyrimidine (single ring); the purines are adenine and guanine.
- **True/false** `mol-nucleotides:tf2` · recall → **recognition** · difficulty 2 · `bc-nucleotide-synthesis.pathways`: In pyrimidine synthesis the ring is completed (as orotate) before it is attached to PRPP. → **True**. Correct: purines are built on PRPP-derived ribose phosphate; pyrimidines are attached to PRPP after the ring is made.
- **Crossword** `mol-nucleotides:clue1` · recall → **recognition** · difficulty 2 · `bc-nucleotide-synthesis.pathways`: Pyrimidine ring intermediate attached to PRPP by UMP synthase → **OROTATE**
- **Crossword** `mol-nucleotides:clue2` · recall → **recognition** · difficulty 1 · `bc-nucleotide-synthesis.structure`: Two-ring base that pairs with cytosine → **GUANINE**

---

## Drugs that block nucleotide synthesis (`mol-antimetabolites`)

Objectives: `bc-nucleotide-synthesis.drug-targets`

**Citations**

1. StatPearls: Methotrexate — PMID 32310574; NBK556114 — <https://www.ncbi.nlm.nih.gov/books/NBK556114/> — checked: existence
2. Mechanism of leucovorin reversal of methotrexate cytotoxicity. Biochem Pharmacol 1990 — PMID 2260989 — <https://pubmed.ncbi.nlm.nih.gov/2260989/> — checked: summary
3. The current role of hydroxyurea in the treatment of sickle cell disease. J Clin Med 2024 — PMID 39518543 — <https://pubmed.ncbi.nlm.nih.gov/39518543/> — checked: summary
4. StatPearls: Hydroxyurea Toxicity — PMID 30725894; NBK537209 — <https://www.ncbi.nlm.nih.gov/books/NBK537209/> — checked: summary
5. Longley DB et al. 5-Fluorouracil: mechanisms of action and clinical strategies. Nat Rev Cancer 2003 — PMID 12724731 — <https://pubmed.ncbi.nlm.nih.gov/12724731/> — checked: existence
6. StatPearls: Fluorouracil — PMID 31747215; NBK549808 — <https://www.ncbi.nlm.nih.gov/books/NBK549808/> — checked: existence
7. Leflunomide: a review of its use in dermatology. J Dermatolog Treat 2013 — PMID 21801113 — <https://pubmed.ncbi.nlm.nih.gov/21801113/> — checked: summary
8. Allison AC, Eugui EM. Mycophenolate mofetil and its mechanisms of action. Immunopharmacology 2000 — PMID 10878285 — <https://pubmed.ncbi.nlm.nih.gov/10878285/> — checked: summary

**Facts** [supporting citations]

- Methotrexate inhibits dihydrofolate reductase (DHFR); leucovorin (folinic acid) is a reduced folate that bypasses DHFR and is used as rescue. [1, 2]
- Hydroxyurea inhibits ribonucleotide reductase; in sickle cell disease its main clinical effect is a rise in fetal hemoglobin (its mechanisms are multifaceted). [3, 4]
- 5-Fluorouracil is converted to a nucleotide (FdUMP) that inhibits thymidylate synthase; it is also incorporated into RNA. [5, 6]
- Leflunomide inhibits dihydroorotate dehydrogenase, a step of de novo pyrimidine synthesis on which proliferating lymphocytes depend. [7]
- Mycophenolic acid (from mycophenolate mofetil) inhibits IMP dehydrogenase, the rate-limiting enzyme of de novo guanine nucleotide synthesis; T and B lymphocytes depend on this pathway more than most cells. [8]

**Mechanism.** Each drug removes a building block that dividing cells need for DNA. Cells that divide fastest or depend most on de novo synthesis (bone marrow, gut epithelium, activated lymphocytes) are affected most, which explains both the uses and the toxicities.

**Quick.** DHFR: methotrexate (leucovorin bypasses). Ribonucleotide reductase: hydroxyurea (↑HbF in sickle cell). Thymidylate synthase: 5-FU (as FdUMP). Dihydroorotate dehydrogenase: leflunomide. IMP dehydrogenase: mycophenolate (lymphocytes rely on de novo GMP).

**Detailed**

> Lymphocytes rely heavily on de novo guanine nucleotide synthesis, so blocking IMP dehydrogenase with mycophenolate suppresses lymphocyte proliferation relatively selectively; leflunomide works similarly through pyrimidine synthesis.

> Methotrexate and 5-fluorouracil both starve cells of dTMP but by different steps. Methotrexate traps folate as dihydrofolate; 5-FU blocks thymidylate synthase directly, so dUMP builds up behind the block. That difference explains why leucovorin rescues methotrexate but is used together with 5-FU.

**Misconception.** Leucovorin is not a general antidote for antimetabolites: it bypasses DHFR (rescuing methotrexate toxicity) but supplies the methylene-THF that helps FdUMP bind thymidylate synthase, so it is combined with 5-FU to enhance, not reverse, its effect.

**Takeaway.** Name the enzyme, predict what accumulates behind it, then predict the toxicity: rapidly dividing cells suffer first.

- **MCQ** `mol-antimetabolites:mcq1` · identification → **recognition** · difficulty 2 · `bc-nucleotide-synthesis.drug-targets`
  - A 24-year-old man with sickle cell disease starts a daily oral drug after repeated pain crises. Over months his fetal hemoglobin rises and his crises become less frequent; his MCV also rises. Which enzyme does the drug inhibit?
  - ◻️ A. Dihydrofolate reductase — _Methotrexate also raises MCV, but it is not used to increase fetal hemoglobin._
  - ◻️ B. DNA methyltransferase — _Hypomethylating agents can raise HbF experimentally, but the standard oral therapy for sickle cell disease is hydroxyurea._
  - ✅ C. Ribonucleotide reductase
  - ◻️ D. Thymidylate synthase — _5-Fluorouracil inhibits thymidylate synthase; it is a chemotherapy drug, not sickle cell therapy._
  - ◻️ E. IMP dehydrogenase — _Mycophenolate inhibits IMP dehydrogenase and is an immunosuppressant._
  - Explanation: Hydroxyurea inhibits ribonucleotide reductase and raises HbF, reducing sickling; macrocytosis is expected.
- **MCQ** `mol-antimetabolites:mcq2` · mechanism → **mechanism** · difficulty 3 · `bc-nucleotide-synthesis.drug-targets`
  - A kidney transplant recipient takes a drug that inhibits the conversion of IMP to xanthosine monophosphate. Why are lymphocytes affected more than most other cells?
  - ◻️ A. They rely on de novo pyrimidine nucleotide synthesis — _That is the basis of leflunomide’s selectivity; this drug blocks guanine nucleotide synthesis._
  - ◻️ B. The drug is activated only by lymphocyte-specific kinases — _Kinase activation explains nucleoside analog prodrugs, not mycophenolic acid._
  - ◻️ C. Lymphocytes cannot recycle folate — _Folate recycling is unrelated to IMP dehydrogenase._
  - ◻️ D. The drug depletes dTMP in lymphocytes — _dTMP depletion is the effect of thymidylate synthase or DHFR inhibitors._
  - ✅ E. They rely on de novo guanine nucleotide synthesis
  - Explanation: Mycophenolic acid inhibits IMP dehydrogenase; T and B lymphocytes rely on de novo GMP synthesis and are selectively starved of guanine nucleotides.
- **MCQ** `mol-antimetabolites:mcq3` · prediction → **application** · difficulty 4 · `bc-nucleotide-synthesis.drug-targets`
  - Colon cancer cells are treated with 5-fluorouracil. Which intracellular change is expected within hours?
  - ◻️ A. dUMP falls and dTMP rises — _Blocking thymidylate synthase causes the substrate (dUMP) to accumulate and the product (dTMP) to fall._
  - ◻️ B. Dihydrofolate accumulates and tetrahydrofolate is depleted from cells — _This is the pattern of DHFR inhibition by methotrexate._
  - ◻️ C. IMP accumulates and GMP falls — _This is the effect of IMP dehydrogenase inhibition by mycophenolate._
  - ◻️ D. dATP accumulates and inhibits ribonucleotide reductase — _This is the toxic mechanism in adenosine deaminase deficiency._
  - ✅ E. dUMP rises and dTMP falls; folate is not trapped as DHF
  - Explanation: FdUMP blocks thymidylate synthase: substrate dUMP builds up behind the block and dTMP falls. Unlike methotrexate, it does not convert the folate pool to dihydrofolate.
- **MCQ** `mol-antimetabolites:mcq4` · comparison → **application** · difficulty 5 · `bc-nucleotide-synthesis.drug-targets`
  - Leucovorin is given after high-dose methotrexate, yet it is deliberately combined with 5-fluorouracil in colorectal cancer regimens. Which explanation accounts for both uses?
  - ◻️ A. It inhibits DHFR in normal cells but activates DHFR in tumor cells, protecting only normal tissue — _Leucovorin is a folate, not a DHFR modulator._
  - ◻️ B. Leucovorin increases renal excretion of both drugs — _It does not act by enhancing excretion._
  - ◻️ C. It supplies preformed thymidine, which both drugs deplete, so DNA synthesis resumes in all cells — _Leucovorin is folinic acid, not thymidine._
  - ◻️ D. Leucovorin blocks uptake of methotrexate but increases uptake of 5-FU — _The difference lies in folate biochemistry at the target enzymes, not drug uptake._
  - ✅ E. It is a reduced folate: it bypasses DHFR, and it stabilizes FdUMP binding to thymidylate synthase
  - Explanation: Same molecule, opposite effects: reduced folate restores THF beyond the DHFR block, but with 5-FU it completes the FdUMP–thymidylate synthase–folate inhibitory complex.
- **True/false** `mol-antimetabolites:tf1` · recall → **recognition** · difficulty 2 · `bc-nucleotide-synthesis.drug-targets`: Leflunomide inhibits dihydroorotate dehydrogenase, an enzyme of pyrimidine synthesis. → **True**. Correct: it reduces pyrimidine supply to proliferating lymphocytes.
- **True/false** `mol-antimetabolites:tf2` · recall → **recognition** · difficulty 2 · `bc-nucleotide-synthesis.drug-targets`: Trimethoprim inhibits bacterial thymidylate synthase. → **False**. Trimethoprim inhibits bacterial dihydrofolate reductase.
- **Crossword** `mol-antimetabolites:clue1` · recall → **recognition** · difficulty 2 · `bc-nucleotide-synthesis.drug-targets`: Ribonucleotide reductase inhibitor that raises fetal hemoglobin → **HYDROXYUREA**

---

## Hereditary orotic aciduria (`mol-orotic-aciduria`)

Objectives: `bc-nucleotide-synthesis.orotic-aciduria`

**Citations**

1. Staretz-Chacham O et al. Hereditary orotic aciduria identified by newborn screening. Front Genet 2023 — PMID 36999056 — <https://pubmed.ncbi.nlm.nih.gov/36999056/> — checked: summary
2. Uridine triacetate (Xuriden) for hereditary orotic aciduria. Med Lett Drugs Ther 2016 — PMID 27027693 — <https://pubmed.ncbi.nlm.nih.gov/27027693/> — checked: existence

**Facts** [supporting citations]

- Hereditary orotic aciduria is an extremely rare autosomal recessive deficiency of UMP synthase (UMPS), the enzyme that converts orotate to UMP. [1]
- Orotic acid accumulates and is excreted in urine; crystalluria can occur. [1]
- Untreated, affected children may develop megaloblastic anemia that is refractory to vitamin B12 and folate, and neurodevelopmental disabilities. Infants identified by newborn screening (where orotic acid is measured) may be asymptomatic, so presentation varies. [1]
- The defect lies in pyrimidine synthesis, not the urea cycle, so hyperammonemia is not a feature; orotic aciduria with hyperammonemia instead suggests a urea-cycle defect such as OTC deficiency. [1]
- Treatment is uridine (uridine triacetate), which bypasses the block. [2]

**Mechanism.** Without UMP synthase, orotate cannot become UMP, so cells lack pyrimidine nucleotides for DNA and RNA. Rapidly dividing erythroid precursors show impaired DNA synthesis (megaloblastic change). Folate and B12 do not help because the block is downstream of the steps they support.

**Quick.** UMP synthase deficiency (AR, very rare): orotic aciduria (± crystalluria), megaloblastic anemia not corrected by B12 or folate, developmental problems; no hyperammonemia. May be found by newborn screening before symptoms. Treat with uridine.

**Detailed**

> Orotic acid in urine has two classic sources. In OTC deficiency, excess carbamoyl phosphate drives orotate production and the patient has hyperammonemia. In hereditary orotic aciduria the pyrimidine pathway itself is blocked after orotate; ammonia is not raised, and the clinical problem is impaired nucleotide supply.

> Uridine is phosphorylated to UMP, bypassing the defective enzyme. Because the disorder is so rare, much of the clinical picture comes from case series; newborn screening programs that measure orotic acid have identified infants who were still asymptomatic, which shows that severity and timing vary.

**Misconception.** Orotic aciduria does not always mean a urea-cycle defect: with normal ammonia and B12/folate-refractory megaloblastic anemia, think UMP synthase deficiency.

**Takeaway.** Orotic aciduria + B12/folate-refractory megaloblastic anemia + normal ammonia = UMP synthase deficiency; give uridine.

- **MCQ** `mol-orotic-aciduria:mcq1` · identification → **recognition** · difficulty 3 · `bc-nucleotide-synthesis.orotic-aciduria`
  - An 8-month-old has poor growth and pallor. Hemoglobin is 7.9 g/dL with MCV 112 fL and hypersegmented neutrophils. Serum B12 and folate are normal, and the anemia does not improve after supplementation. Plasma ammonia is normal. Urine organic acid analysis shows a large orotic acid peak, and crystalluria is noted. Which enzyme is most likely deficient?
  - ◻️ A. Dihydroorotate dehydrogenase — _A block before orotate would not cause orotic acid to accumulate._
  - ✅ B. UMP synthase
  - ◻️ C. Methionine synthase (cobalamin-dependent) — _Cobalamin pathway defects cause megaloblastic anemia with high homocysteine, not orotic aciduria._
  - ◻️ D. Ornithine transcarbamylase — _OTC deficiency causes orotic aciduria, but with hyperammonemia and without megaloblastic anemia._
  - ◻️ E. Carbamoyl phosphate synthetase I — _CPS I deficiency causes hyperammonemia with low, not high, orotic acid._
  - Explanation: Orotic aciduria + refractory megaloblastic anemia + normal ammonia points to a block between orotate and UMP: UMP synthase.
- **MCQ** `mol-orotic-aciduria:mcq2` · mechanism → **mechanism** · difficulty 3 · `bc-nucleotide-synthesis.orotic-aciduria`
  - Why does uridine correct the anemia in hereditary orotic aciduria?
  - ◻️ A. It provides substrate that restarts carbamoyl phosphate synthetase II — _Adding substrate upstream cannot get past the UMP synthase block._
  - ✅ B. It is converted to UMP without passing through UMP synthase
  - ◻️ C. It is converted to orotate, which is then used normally — _Orotate is the compound that cannot be used; it is already in excess._
  - ◻️ D. It supplies the methyl group for thymidylate synthase — _The methyl group comes from methylene-THF, not uridine._
  - ◻️ E. It inhibits ribonucleotide reductase — _Inhibiting ribonucleotide reductase would worsen DNA synthesis._
  - Explanation: Uridine is phosphorylated directly to UMP, supplying pyrimidine nucleotides beyond the block.
- **MCQ** `mol-orotic-aciduria:mcq3` · interpretation → **application** · difficulty 4 · `bc-nucleotide-synthesis.orotic-aciduria`
  - Four infants are evaluated. Which laboratory pattern fits hereditary orotic aciduria?
  - ◻️ A. Urinary orotic acid normal; ammonia normal; MCV high; homocysteine high, methylmalonic acid normal — _This is folate deficiency: homocysteine rises but methylmalonic acid stays normal._
  - ◻️ B. Urinary orotic acid low; plasma ammonia high; MCV normal — _Hyperammonemia with low orotic acid suggests CPS I or N-acetylglutamate synthase deficiency._
  - ◻️ C. Urinary orotic acid high; plasma ammonia high; MCV normal — _This is OTC deficiency: excess carbamoyl phosphate drives orotate production._
  - ◻️ D. Urinary orotic acid normal; ammonia normal; MCV high; methylmalonic acid high — _This is B12 deficiency: methylmalonic acid rises because methylmalonyl-CoA mutase needs B12._
  - ✅ E. Urinary orotic acid high; plasma ammonia normal; MCV high and unresponsive to B12 and folate
  - Explanation: Read two axes: ammonia separates urea-cycle defects from pyrimidine defects; orotic acid and MCV separate UMP synthase deficiency from vitamin deficiencies.
- **True/false** `mol-orotic-aciduria:tf1` · recall → **recognition** · difficulty 2 · `bc-nucleotide-synthesis.orotic-aciduria`: Hereditary orotic aciduria causes hyperammonemia because the urea cycle is blocked. → **False**. The block is in pyrimidine synthesis (UMP synthase); hyperammonemia is not a feature.
- **Crossword** `mol-orotic-aciduria:clue1` · recall → **recognition** · difficulty 2 · `bc-nucleotide-synthesis.orotic-aciduria`: Nucleoside given to bypass UMP synthase deficiency → **URIDINE**

---

## Purine salvage and Lesch–Nyhan syndrome (`mol-purine-salvage`)

Objectives: `bc-purine-salvage.pathway`, `bc-purine-salvage.lesch-nyhan`

**Citations**

1. MedlinePlus Genetics: HPRT1 gene — <https://medlineplus.gov/genetics/gene/hprt1/> — checked: full-text
2. MedlinePlus Genetics: Lesch-Nyhan syndrome — <https://medlineplus.gov/genetics/condition/lesch-nyhan-syndrome/> — checked: full-text
3. GeneReviews: HPRT1 Disorders — PMID 20301328; NBK1149 — <https://www.ncbi.nlm.nih.gov/books/NBK1149/> — checked: summary
4. MedlinePlus Genetics: Phosphoribosylpyrophosphate synthetase superactivity — <https://medlineplus.gov/genetics/condition/phosphoribosylpyrophosphate-synthetase-superactivity/> — checked: full-text
5. Recurrent xanthine stones in a young patient with Lesch-Nyhan syndrome (case report) — PMID 33457651 — <https://pubmed.ncbi.nlm.nih.gov/33457651/> — checked: existence
6. StatPearls: Lesch-Nyhan Syndrome — PMID 32310539; NBK556079 — <https://www.ncbi.nlm.nih.gov/books/NBK556079/> — checked: existence

**Facts** [supporting citations]

- HGPRT (hypoxanthine-guanine phosphoribosyltransferase) recycles the purine bases hypoxanthine and guanine back into nucleotides. [1, 2]
- Purines that are not recycled are broken down to uric acid; xanthine oxidase catalyzes the final steps and is the target of allopurinol and febuxostat. [2, 3]
- HPRT1 disorders are X-linked: affected individuals are almost always male, and heterozygous females usually have no features. [2, 3]
- Without salvage, purine overproduction and breakdown raise uric acid. Excess PRPP, the shared substrate of salvage and de novo synthesis, drives purine overproduction (as also seen in PRPP synthetase superactivity). [2, 4]
- Lesch–Nyhan syndrome: orange urate crystals in the diaper, developmental delay from about 3–6 months, hypotonia, dystonia, choreoathetosis, intellectual disability, self-injurious behavior, gout and kidney stones; reduced brain dopamine is thought to contribute. [2]
- HPRT1 disorders form a continuum: partial deficiency causes hyperuricemia with milder or no neurologic features and no self-injury. [3]
- Allopurinol treats the hyperuricemia; because it blocks xanthine oxidase, xanthine accumulates and xanthine stones have been reported. [3, 5]

**Mechanism.** HGPRT normally recycles hypoxanthine and guanine using PRPP. When it is absent, those bases are degraded to uric acid instead, and the PRPP that salvage would have consumed is available to the first committed step of de novo purine synthesis, so even more purine is made and degraded.

**Quick.** HGPRT recycles hypoxanthine and guanine. Lesch–Nyhan (X-linked, HPRT1): no salvage → purine overproduction → hyperuricemia (orange diaper crystals, gout, stones) plus dystonia, intellectual disability and self-injury. Allopurinol lowers urate but raises xanthine.

**Detailed**

> Salvage reattaches bases to ribose-phosphate from PRPP, which is energetically cheaper than building purines from scratch. When salvage fails, more PRPP is available for de novo synthesis, so purine production increases at the same time as breakdown increases.

> Complete deficiency causes the full syndrome; partial deficiency produces a spectrum down to hyperuricemia alone. Allopurinol blocks xanthine oxidase, so serum urate falls but its precursors hypoxanthine and xanthine rise, and xanthine (which is poorly soluble) can form stones.

**Misconception.** Treating the uric acid does not treat the whole disease: allopurinol prevents urate complications, while the neurologic and behavioral features need separate management.

**Takeaway.** No HGPRT → purines are overproduced and degraded → hyperuricemia + dystonia + self-injury in boys; allopurinol shifts the load to xanthine.

- **MCQ** `mol-purine-salvage:mcq1` · mechanism → **mechanism** · difficulty 4 · `bc-purine-salvage.pathway`, `bc-purine-salvage.lesch-nyhan`
  - In complete HGPRT deficiency, which change most directly increases de novo purine synthesis?
  - ◻️ A. Adenosine deaminase is inhibited by accumulating guanine — _ADA activity is normal in Lesch–Nyhan syndrome._
  - ◻️ B. Accumulated uric acid no longer feedback-inhibits xanthine oxidase — _Uric acid is not a feedback regulator of purine synthesis; this confuses degradation with synthesis._
  - ✅ C. More PRPP reaches the committed step of purine synthesis
  - ◻️ D. Ribonucleotide reductase becomes overactive — _Ribonucleotide reductase makes deoxyribonucleotides; it does not control purine ring synthesis._
  - ◻️ E. Xanthine oxidase is induced and consumes IMP — _Xanthine oxidase acts on hypoxanthine and xanthine, not IMP, and is not the driver._
  - Explanation: PRPP is the substrate of both salvage and the committed step of de novo synthesis; without HGPRT it is spared for de novo synthesis, which increases purine production and urate.
- **MCQ** `mol-purine-salvage:mcq2` · identification → **recognition** · difficulty 2 · `bc-purine-salvage.lesch-nyhan`
  - A 2-year-old boy has developmental delay, generalized dystonia and repeated biting of his lips and fingers. His parents noticed orange grains in his diapers in infancy. Serum uric acid is high. His mother’s brother had a similar illness. Which enzyme is deficient?
  - ◻️ A. Xanthine oxidase — _Xanthine oxidase deficiency lowers uric acid and causes xanthine stones._
  - ◻️ B. Adenosine deaminase — _ADA deficiency causes severe combined immunodeficiency, not hyperuricemia with self-injury._
  - ◻️ C. PRPP synthetase (overactive, not deficient) — _PRPP synthetase superactivity is also X-linked and causes hyperuricemia, but self-injury is not a feature._
  - ◻️ D. Glucose-6-phosphatase — _Von Gierke disease raises uric acid but presents with fasting hypoglycemia and hepatomegaly._
  - ✅ E. Hypoxanthine-guanine phosphoribosyltransferase
  - Explanation: Hyperuricemia with dystonia, intellectual disability and self-injury in a boy with an affected maternal uncle = Lesch–Nyhan syndrome (HGPRT, X-linked).
- **MCQ** `mol-purine-salvage:mcq3` · prediction → **application** · difficulty 4 · `bc-purine-salvage.lesch-nyhan`, `bc-purine-salvage.pathway`
  - A boy with Lesch–Nyhan syndrome is started on allopurinol. Which change in his laboratory results is expected over the following weeks?
  - ◻️ A. PRPP levels normalize and de novo synthesis stops — _Allopurinol acts on degradation; it does not restore salvage._
  - ✅ B. Serum uric acid falls while urinary hypoxanthine and xanthine rise
  - ◻️ C. Serum uric acid falls and urinary hypoxanthine falls because it is now salvaged — _Hypoxanthine cannot be salvaged without HGPRT, so it accumulates._
  - ◻️ D. Uric acid and xanthine both fall — _Blocking xanthine oxidase leaves its substrates, xanthine and hypoxanthine, to accumulate._
  - ◻️ E. Serum uric acid is unchanged because the problem is overproduction — _Blocking the last step of degradation lowers urate regardless of why purines are overproduced._
  - Explanation: Xanthine oxidase inhibition moves the purine load upstream: urate falls, hypoxanthine and xanthine rise (xanthine stones are a recognized risk).
- **True/false** `mol-purine-salvage:tf1` · recall → **recognition** · difficulty 1 · `bc-purine-salvage.pathway`: Xanthine oxidase catalyzes the final steps of purine breakdown to uric acid. → **True**. Correct: it is the target of allopurinol and febuxostat.
- **True/false** `mol-purine-salvage:tf2` · recall → **recognition** · difficulty 1 · `bc-purine-salvage.lesch-nyhan`: Lesch–Nyhan syndrome is inherited in an autosomal dominant pattern. → **False**. It is X-linked (HPRT1); affected individuals are almost always male.
- **Crossword** `mol-purine-salvage:clue1` · recall → **recognition** · difficulty 2 · `bc-purine-salvage.pathway`: Purine base recycled to IMP by HGPRT → **HYPOXANTHINE**
- **Crossword** `mol-purine-salvage:clue2` · recall → **recognition** · difficulty 2 · `bc-purine-salvage.lesch-nyhan`: Sustained abnormal posturing typical of Lesch–Nyhan syndrome → **DYSTONIA**
- **Mystery Patient** `case:lesch-nyhan` · multistep → **application** · difficulty 4 · `bc-purine-salvage.lesch-nyhan`, `bc-purine-salvage.pathway`: The orange diaper
  - Presentation: An 18-month-old boy is referred because he cannot sit unsupported and has abnormal twisting postures of his arms.
  - History: Development seemed normal until about 4 months. His parents saw orange-brown grains in his diapers as a baby. A maternal uncle had a similar movement disorder and kidney stones.
  - Examination: Hypotonia with superimposed dystonic posturing. Healing bite wounds on the lower lip and fingertips.
  - Laboratory: Serum uric acid raised for age. Urine uric acid-to-creatinine ratio markedly raised. Creatinine normal. Blood count normal.
  - Imaging & tests: Renal ultrasound: several small stones. Brain MRI: no structural lesion.
  - Further clue: Red cell hypoxanthine-guanine phosphoribosyltransferase activity is undetectable.
  - Q: Why does his body make excess uric acid?
  - ◻️ A. Xanthine oxidase is genetically overactive — _Xanthine oxidase is normal; more substrate reaches it._
  - ✅ B. Purine bases cannot be salvaged, so they are degraded, and spared PRPP increases de novo purine synthesis
  - ◻️ C. PRPP synthetase is overactive — _PRPP synthetase superactivity also causes urate overproduction, but the measured defect here is absent HGPRT, and self-injury is not a feature of PRS superactivity._
  - ◻️ D. Renal tubular urate excretion is blocked — _Urinary urate is high, indicating overproduction rather than underexcretion._
  - ◻️ E. Adenosine deaminase deficiency diverts adenosine to uric acid — _ADA deficiency causes SCID and does not raise uric acid._
  - Without HGPRT, hypoxanthine and guanine are degraded to urate instead of recycled, and PRPP is spared for the committed step of de novo purine synthesis, producing still more purine to degrade. The X-linked family pattern, dystonia and self-injury complete the picture.

---

## Adenosine deaminase deficiency (ADA-SCID) (`mol-ada-deficiency`)

Objectives: `bc-purine-salvage.ada-scid`

**Citations**

1. MedlinePlus Genetics: Adenosine deaminase deficiency — <https://medlineplus.gov/genetics/condition/adenosine-deaminase-deficiency/> — checked: full-text
2. GeneReviews: Adenosine Deaminase Deficiency — PMID 20301656; NBK1483 — <https://www.ncbi.nlm.nih.gov/books/NBK1483/> — checked: summary
3. The mechanism of inhibition and "reversal" of mitogen-induced lymphocyte activation in a model of ADA deficiency. Cell Immunol 1984 — PMID 6610485 — <https://pubmed.ncbi.nlm.nih.gov/6610485/> — checked: summary
4. StatPearls: Severe Combined Immunodeficiency — PMID 30969584; NBK539762 — <https://www.ncbi.nlm.nih.gov/books/NBK539762/> — checked: summary
5. MedlinePlus Genetics: JAK3 gene — <https://medlineplus.gov/genetics/gene/jak3/> — checked: full-text

**Facts** [supporting citations]

- Autosomal recessive deficiency of adenosine deaminase, which converts deoxyadenosine to deoxyinosine; ADA is most active in lymphocytes. [1, 2]
- Deoxyadenosine accumulates and is converted to dATP; massive dATP inhibits ribonucleotide reductase and starves the cell of the other deoxynucleotides. [3]
- About 80% present as early-onset SCID in infancy; 15–20% have delayed or late-onset combined immunodeficiency; some healthy people have partial deficiency, so severity tracks residual enzyme activity. [2]
- Untreated ADA-SCID: opportunistic infections in the first weeks to months, poor growth with persistent diarrhea, dermatitis and pneumonia; non-immune features can include rib and vertebral abnormalities, pulmonary alveolar proteinosis, hemolytic anemia, neurologic abnormalities and transaminitis. [2]
- Newborn screening detects SCID by low T-cell receptor excision circles (TRECs); ADA deficiency specifically by raised adenosine and deoxyadenosine on tandem mass spectrometry. [2]
- Treatment: PEG-ADA enzyme replacement, allogeneic stem cell transplantation or autologous gene therapy (the latter two are curative). [2]

**Mechanism.** ADA disposes of deoxyadenosine released from DNA breakdown. Without it, deoxyadenosine is phosphorylated to dATP inside lymphocytes. dATP shuts off ribonucleotide reductase, so the other deoxynucleotides cannot be made, DNA synthesis fails and lymphocytes die.

**Quick.** ADA deficiency (AR): deoxyadenosine → dATP → inhibits ribonucleotide reductase → lymphocytes die → SCID in infancy (80%) or later combined immunodeficiency. Clues beyond infection: rib/vertebral changes, alveolar proteinosis. Screen: low TRECs + raised deoxyadenosine.

**Detailed**

> Lymphocytes concentrate the toxic deoxyadenosine nucleotides, which is why immunity fails first, but the metabolites are systemic, explaining skeletal, pulmonary, hepatic and neurologic findings in some patients.

> Severity depends on residual activity: no activity gives SCID in early infancy, partial activity gives later combined immunodeficiency, and some people with low red-cell ADA are healthy. Enzyme replacement corrects the metabolic defect quickly, while transplantation or gene therapy provides a cure.

**Misconception.** ADA deficiency is autosomal recessive; the commonest X-linked SCID is caused by IL2RG (common γ chain), and JAK3 SCID leaves B-cell numbers normal.

**Takeaway.** ADA → dATP piles up → ribonucleotide reductase blocked → no lymphocytes; low TRECs plus raised deoxyadenosine on screening.

- **MCQ** `mol-ada-deficiency:mcq1` · mechanism → **mechanism** · difficulty 3 · `bc-purine-salvage.ada-scid`
  - Which metabolite most directly causes lymphocyte death in adenosine deaminase deficiency, and how?
  - ◻️ A. dGTP, by inhibiting ribonucleotide reductase — _dGTP accumulation is the mechanism proposed in purine nucleoside phosphorylase deficiency, a related purine immunodeficiency._
  - ◻️ B. Inosine, by inhibiting HGPRT — _Inosine is the product ADA cannot make; it is decreased, not increased._
  - ✅ C. dATP, by inhibiting ribonucleotide reductase
  - ◻️ D. Uric acid, by forming crystals in lymphoid tissue — _Urate production does not rise when ADA is absent._
  - ◻️ E. Orotic acid, by blocking pyrimidine synthesis — _Orotic acid accumulates in UMP synthase or OTC deficiency._
  - Explanation: Deoxyadenosine is phosphorylated to dATP, which inhibits ribonucleotide reductase and starves lymphocytes of the other deoxynucleotides.
- **MCQ** `mol-ada-deficiency:mcq2` · identification → **recognition** · difficulty 3 · `bc-purine-salvage.ada-scid`
  - A 4-month-old girl has persistent thrush, chronic diarrhea, weight below the 3rd percentile and Pneumocystis pneumonia. Her parents are first cousins. Chest radiograph shows no thymic shadow and flared, cupped anterior rib ends. T and B lymphocytes are very low. Which enzyme or protein is most likely deficient?
  - ◻️ A. Bruton tyrosine kinase — _BTK deficiency is X-linked and removes B cells only._
  - ◻️ B. RAG1 — _RAG deficiency also removes T and B cells, but it does not cause the skeletal changes that point to a systemic metabolic cause._
  - ◻️ C. JAK3 — _JAK3-deficient SCID is autosomal recessive but B-cell numbers are normal._
  - ◻️ D. Common γ chain (IL2RG) — _IL2RG SCID is X-linked, so a girl with consanguineous parents is unlikely, and B cells are typically present._
  - ✅ E. Adenosine deaminase
  - Explanation: T⁻B⁻ SCID in a girl of consanguineous parents with rib abnormalities suggests a systemic toxic metabolite: ADA deficiency.
- **MCQ** `mol-ada-deficiency:mcq3` · interpretation → **application** · difficulty 4 · `bc-purine-salvage.ada-scid`
  - A newborn screening panel reports very low T-cell receptor excision circles (TRECs). A second-tier tandem mass spectrometry test on the same blood spot shows markedly raised adenosine and deoxyadenosine. How should these results be interpreted?
  - ✅ A. SCID caused by adenosine deaminase deficiency
  - ◻️ B. 22q11.2 deletion with thymic hypoplasia — _Low TRECs can occur, but purine metabolites are normal._
  - ◻️ C. X-linked SCID from a common γ-chain cytokine-receptor defect — _Low TRECs fit, but cytokine-receptor SCID does not raise deoxyadenosine._
  - ◻️ D. Purine overproduction from HGPRT deficiency — _HGPRT deficiency raises uric acid, not deoxyadenosine, and does not lower TRECs._
  - ◻️ E. Normal results in a preterm infant — _Prematurity can lower TRECs, but it does not raise deoxyadenosine._
  - Explanation: Low TRECs flag absent naive T cells; raised (deoxy)adenosine identifies the metabolic cause as ADA deficiency.
- **True/false** `mol-ada-deficiency:tf1` · recall → **recognition** · difficulty 2 · `bc-purine-salvage.ada-scid`: Adenosine deaminase deficiency can present after infancy as a milder combined immunodeficiency. → **True**. Correct: about 15–20% have delayed or late-onset disease, reflecting residual enzyme activity.
- **Crossword** `mol-ada-deficiency:clue1` · recall → **recognition** · difficulty 2 · `bc-purine-salvage.ada-scid`: Nucleoside that accumulates in ADA deficiency and is phosphorylated to dATP → **DEOXYADENOSINE**

---

## Types of mutation and their effects (`mol-mutation-types`)

Objectives: `bc-mutation-types.classes`, `bc-mutation-types.examples`, `bc-mutation-types.transition`

**Citations**

1. OpenStax Biology 2e, 14.6 DNA Repair (Mutations) — <https://openstax.org/books/biology-2e/pages/14-6-dna-repair> — checked: full-text
2. MedlinePlus Genetics: HBB gene — <https://medlineplus.gov/genetics/gene/hbb/> — checked: full-text
3. MedlinePlus Genetics: Beta thalassemia — <https://medlineplus.gov/genetics/condition/beta-thalassemia/> — checked: full-text
4. Splice-switching oligos correct splicing from IVS2-745 β-thalassemia patient cells. 2020 — PMID 32439726 — <https://pubmed.ncbi.nlm.nih.gov/32439726/> — checked: existence
5. StatPearls: Biochemistry, Mutation — PMID 35015422; NBK576397 — <https://www.ncbi.nlm.nih.gov/books/NBK576397/> — checked: existence

**Facts** [supporting citations]

- Silent mutations change the codon but not the amino acid, usually at the third base of the codon. [1]
- Missense mutations replace one amino acid; sickle cell disease is caused by Glu6Val (glutamic acid replaced by valine at position 6 of β-globin). [2]
- Nonsense mutations create a premature stop codon and a truncated protein. [5]
- Insertions or deletions that shift the reading frame (frameshift) usually produce a nonfunctional protein. [1]
- β-Thalassemia is caused by many different HBB variants that abolish (β⁰) or reduce (β⁺) β-globin production, including splice-site variants. [3, 4]
- Transitions replace a purine with a purine or a pyrimidine with a pyrimidine; transversions exchange a purine for a pyrimidine. [1]

**Mechanism.** The genetic code is read in non-overlapping triplets. A single base change alters at most one codon, so its effect depends on what that codon becomes (same amino acid, different amino acid, or stop). Insertions and deletions that are not multiples of three change every codon downstream.

**Quick.** Silent (same amino acid), missense (different amino acid; sickle Glu6Val), nonsense (stop → truncation), frameshift (indel not ×3), splice-site (abnormal splicing; some β-thalassemias). Transition = same ring class; transversion = purine ↔ pyrimidine.

**Detailed**

> Severity usually increases from silent to missense to nonsense and frameshift, but context matters: a missense change in an active site can abolish function, and the position of a stop codon affects how much protein, if any, is made.

> Hemoglobin disorders illustrate the classes. Sickle cell disease is a single missense change that makes deoxygenated hemoglobin polymerize. β-Thalassemias arise from many different variants, including splice-site changes, that reduce or abolish β-globin production; reduced β-globin leaves α-globin chains unpaired.

**Misconception.** A large deletion is not necessarily worse than a small one: an in-frame deletion can leave a partly functional protein, whereas a one-base deletion shifts the whole frame.

**Takeaway.** Predict the protein: same amino acid (silent), new amino acid (missense), stop (nonsense), shifted frame (frameshift), mis-splicing (splice-site).

- **MCQ** `mol-mutation-types:mcq1` · interpretation → **application** · difficulty 3 · `bc-mutation-types.classes`
  - In an early exon, a single base substitution changes the mRNA codon UAC (tyrosine) to UAG. What is the most likely consequence?
  - ◻️ A. A shift of the reading frame downstream — _A substitution does not change the number of bases, so the frame is preserved._
  - ✅ B. A truncated protein from premature termination
  - ◻️ C. Retention of an intron in the mature mRNA — _That results from a splice-site change, not a codon change within an exon._
  - ◻️ D. No change in the protein because of wobble at the third position — _Third-position changes are often silent, but UAG is a stop codon (UAU would be the silent change)._
  - ◻️ E. Replacement of tyrosine by a different amino acid — _That would be missense; UAG encodes no amino acid._
  - Explanation: UAC → UAG converts tyrosine to a stop codon: a nonsense mutation.
- **MCQ** `mol-mutation-types:mcq2` · mechanism → **mechanism** · difficulty 2 · `bc-mutation-types.classes`
  - Why does deleting a single base near the start of a coding sequence usually abolish protein function, whereas deleting three consecutive bases may not?
  - ◻️ A. Three-base deletions occur only in introns — _Small deletions can occur in exons as well as introns; location is not the explanation._
  - ◻️ B. A one-base deletion is usually silent — _Silent changes do not abolish function._
  - ✅ C. One-base loss shifts the reading frame; three-base loss keeps it
  - ◻️ D. One-base deletions prevent transcription of the gene — _Transcription proceeds; the mRNA is read in the wrong frame._
  - ◻️ E. Three-base deletions are always corrected by mismatch repair before replication — _Repair is not the reason; preservation of the reading frame is._
  - Explanation: Codons are read in triplets: losing one base changes the frame; losing three removes one codon (in-frame).
- **MCQ** `mol-mutation-types:mcq3` · interpretation → **application** · difficulty 3 · `bc-mutation-types.examples`, `bc-mutation-types.transition`
  - A child with chronic hemolysis and painful vaso-occlusive episodes has an A→T substitution in codon 6 of the β-globin gene that replaces glutamic acid with valine. How is this mutation classified?
  - ◻️ A. Missense (conservative) and a transition — _Glutamic acid (charged) to valine (hydrophobic) is nonconservative, and A→T is purine → pyrimidine._
  - ◻️ B. In-frame deletion — _No bases are lost: one base is substituted for another, so the frame and length are unchanged._
  - ◻️ C. Silent and a transition — _The amino acid changes, so it is not silent._
  - ◻️ D. Nonsense and a transversion — _An amino acid is substituted; no stop codon is created._
  - ✅ E. Missense (nonconservative) and a transversion
  - Explanation: Glu → Val is a nonconservative missense change; A (purine) → T (pyrimidine) is a transversion.
- **MCQ** `mol-mutation-types:mcq4` · prediction → **application** · difficulty 4 · `bc-mutation-types.examples`
  - An HBB intron variant creates a new splice acceptor site, so most β-globin pre-mRNA is spliced abnormally and a small amount is spliced normally. Which consequence is expected?
  - ◻️ A. A structurally abnormal β-globin that polymerizes when deoxygenated — _Polymerization describes HbS from a missense change, not a quantitative splicing defect._
  - ◻️ B. Complete absence of α-globin — _The variant is in HBB; α-globin production is unaffected._
  - ◻️ C. Normal β-globin levels because introns are removed anyway — _A new splice site changes how the intron is removed, producing abnormal mRNA._
  - ◻️ D. A frameshift in every β-globin transcript — _Some normally spliced mRNA remains, so production is reduced rather than abolished._
  - ✅ E. Less normal β-globin (β⁺), with excess unpaired α chains
  - Explanation: Splice-site variants reduce correctly spliced mRNA: less β-globin (β⁺), and the unmatched α chains cause the thalassemic picture.
- **True/false** `mol-mutation-types:tf1` · recall → **recognition** · difficulty 1 · `bc-mutation-types.classes`: A silent mutation changes the codon but not the encoded amino acid. → **True**. Correct: redundancy of the code (often at the third base) makes it silent.
- **True/false** `mol-mutation-types:tf2` · recall → **recognition** · difficulty 2 · `bc-mutation-types.transition`: A cytosine-to-thymine change is a transversion. → **False**. C → T is pyrimidine → pyrimidine, a transition.
- **True/false** `mol-mutation-types:tf3` · recall → **recognition** · difficulty 2 · `bc-mutation-types.examples`: Some β-thalassemia alleles are splice-site variants that reduce β-globin production. → **True**. Correct: β-thalassemia arises from many HBB variants, including splicing variants.
- **Crossword** `mol-mutation-types:clue1` · recall → **recognition** · difficulty 1 · `bc-mutation-types.classes`: Point mutation that creates a premature stop codon → **NONSENSE**
- **Crossword** `mol-mutation-types:clue2` · recall → **recognition** · difficulty 2 · `bc-mutation-types.transition`: Point mutation exchanging a purine for a pyrimidine → **TRANSVERSION**

---

## Single-strand DNA repair: excision repair and xeroderma pigmentosum (`mol-single-strand-repair`)

Objectives: `bc-dna-repair.ssb-pathways`, `bc-dna-repair.xp`, `bc-dna-repair.mutyh`

**Citations**

1. OpenStax Biology 2e, 14.6 DNA Repair — <https://openstax.org/books/biology-2e/pages/14-6-dna-repair> — checked: full-text
2. MedlinePlus Genetics: Xeroderma pigmentosum — <https://medlineplus.gov/genetics/condition/xeroderma-pigmentosum/> — checked: full-text
3. GeneReviews: Xeroderma Pigmentosum — PMID 20301571; NBK1397 — <https://www.ncbi.nlm.nih.gov/books/NBK1397/> — checked: summary
4. Lehmann AR, McGibbon D, Stefanini M. Xeroderma pigmentosum. Orphanet J Rare Dis 2011 — PMID 22044607 — <https://pubmed.ncbi.nlm.nih.gov/22044607/> — checked: summary
5. MedlinePlus Genetics: MUTYH-associated polyposis — <https://medlineplus.gov/genetics/condition/mutyh-associated-polyposis/> — checked: full-text
6. GeneReviews: MUTYH Polyposis — PMID 23035301; NBK107219 — <https://www.ncbi.nlm.nih.gov/books/NBK107219/> — checked: summary
7. MUTYH associated polyposis (MAP). Curr Genomics 2008 — PMID 19506731 — <https://pubmed.ncbi.nlm.nih.gov/19506731/> — checked: summary
8. StatPearls: Biochemistry, DNA Repair — PMID 32809398; NBK560563 — <https://www.ncbi.nlm.nih.gov/books/NBK560563/> — checked: existence

**Facts** [supporting citations]

- Nucleotide excision repair (NER) removes bulky lesions such as UV-induced thymine (pyrimidine) dimers: the damaged stretch is excised and replaced, then sealed. [1]
- Base excision repair (BER) removes single altered bases (for example deaminated, oxidized or alkylated bases) using a DNA glycosylase, then the backbone is cut, filled and sealed. [8, 5]
- Mismatch repair corrects mispaired bases left on the newly synthesized strand after replication (see Lynch syndrome). [1]
- Xeroderma pigmentosum (autosomal recessive): severe sunburn or persistent erythema after minimal sun, freckle-like pigmentation of the face before age 2, photophobia and keratitis, and skin cancers (basal cell, squamous cell, melanoma) within the first decade; about 25% have progressive neurologic problems. [3, 2]
- Most XP genes (XPA–XPG) are needed to remove UV damage; the XP variant gene POLH encodes DNA polymerase η, which replicates past unrepaired damage. Diagnosis is confirmed by cellular tests for defective repair. [4, 2]
- MUTYH polyposis (autosomal recessive BER defect): typically 10 to a few hundred colonic adenomas and a high colorectal cancer risk; cancer can occur without polyposis. Tumors show somatic G:C→T:A transversions in genes such as APC and KRAS. [6, 5, 7]

**Mechanism.** Each pathway recognizes a different kind of damage. NER handles lesions that distort the helix, so it removes UV dimers; without it, UV-induced mutations accumulate in sun-exposed skin and eyes. BER handles single damaged bases; MUTYH is the glycosylase that removes adenine mispaired with oxidized guanine, so its loss leaves G:C→T:A transversions.

**Quick.** NER removes bulky lesions (UV dimers) → defective in xeroderma pigmentosum (AR; freckling before 2, eye damage, skin cancers in the first decade, neurologic disease in ~25%). BER removes single damaged bases → MUTYH defect causes recessive polyposis. MMR fixes replication mismatches.

**Detailed**

> UV light links adjacent pyrimidines on the same strand. If dimers are not removed, cells replicate past them with mistakes, so mutations accumulate quickly in sun-exposed skin. In the XP variant, removal is normal but the specialized polymerase that copies past the damage is missing, so the result is similar.

> Oxidative damage converts guanine to 8-oxoguanine, which can pair with adenine. MUTYH removes that adenine; without it, the next round of replication fixes a G:C→T:A transversion. Unlike familial adenomatous polyposis (autosomal dominant APC), MUTYH polyposis is recessive, so parents are usually unaffected and siblings share a 25% risk.

**Misconception.** Xeroderma pigmentosum is not a pigment disorder: the freckling and cancers are consequences of unrepaired UV damage, and not every patient has dramatic sunburns.

**Takeaway.** Bulky UV damage → NER (XP); single damaged base → BER (MUTYH polyposis); replication mismatch → MMR (Lynch).

- **MCQ** `mol-single-strand-repair:mcq1` · mechanism → **mechanism** · difficulty 3 · `bc-dna-repair.ssb-pathways`
  - Spontaneous deamination converts a cytosine in DNA to uracil, creating a U·G pair. Which repair pathway normally initiates correction of this lesion?
  - ◻️ A. Nucleotide excision repair — _NER targets bulky helix-distorting lesions such as UV dimers._
  - ◻️ B. Direct reversal by photolyase — _Humans do not use photolyase; this is a bacterial and plant mechanism._
  - ◻️ C. Mismatch repair, because U·G is a base mispair — _It looks like a mismatch, but uracil in DNA is a damaged base recognized and removed by a glycosylase._
  - ◻️ D. Nonhomologous end joining — _NHEJ repairs double-strand breaks._
  - ✅ E. Base excision repair (uracil-DNA glycosylase)
  - Explanation: A glycosylase removes uracil (a damaged base), starting base excision repair.
- **MCQ** `mol-single-strand-repair:mcq2` · identification → **recognition** · difficulty 3 · `bc-dna-repair.xp`
  - A 9-year-old girl has had blistering sunburns after brief sun exposure since infancy, freckle-like pigmentation on her face that began before age 2, photophobia with keratitis, and two basal cell carcinomas. She has no jaw cysts or palmar pits. Her parents are unaffected. Which process is defective?
  - ◻️ A. Mismatch repair — _Mismatch repair defects cause Lynch syndrome cancers in adults._
  - ◻️ B. Prevention of excess sister chromatid exchange by BLM helicase — _Bloom syndrome causes a sun-sensitive facial rash, but with severe growth deficiency rather than early skin cancers and freckling._
  - ◻️ C. Suppression of hedgehog signaling by PTCH1 — _Basal cell nevus (Gorlin) syndrome causes early BCCs, but with jaw cysts and palmar pits and without extreme photosensitivity._
  - ◻️ D. Melanin synthesis by tyrosinase — _Albinism reduces pigment and raises skin cancer risk, but does not cause blistering after minimal sun or early freckling._
  - ✅ E. Removal of UV-induced dimers by nucleotide excision repair
  - Explanation: Extreme UV sensitivity, early freckling, ocular damage and childhood skin cancers in a child of unaffected parents = xeroderma pigmentosum (NER).
- **MCQ** `mol-single-strand-repair:mcq3` · mechanism → **mechanism** · difficulty 3 · `bc-dna-repair.xp`
  - Why do patients with xeroderma pigmentosum develop skin cancers decades earlier than the general population?
  - ◻️ A. Immune surveillance of the skin is absent — _XP is not primarily an immunodeficiency._
  - ◻️ B. Skin cells have shortened telomeres — _Telomere length is not the defect in XP._
  - ◻️ C. Mismatch repair fails, causing microsatellite instability — _MSI is the signature of mismatch repair defects (Lynch syndrome)._
  - ✅ D. Unrepaired UV dimers cause mutations at replication
  - ◻️ E. Melanocytes fail to produce protective melanin — _Pigment production is normal; repair is defective._
  - Explanation: Without NER, UV lesions remain; replication past them introduces mutations in sun-exposed cells.
- **MCQ** `mol-single-strand-repair:mcq4` · mechanism → **mechanism** · difficulty 4 · `bc-dna-repair.mutyh`
  - A 48-year-old man has 60 colorectal adenomas. Testing shows biallelic variants in the gene for the glycosylase that removes adenine paired with 8-oxoguanine. His parents had no polyps. Which mutation signature is expected in his adenomas?
  - ◻️ A. Germline truncating APC variant inherited from a parent — _That would be dominant FAP; his parents are unaffected and the defect is biallelic MUTYH._
  - ◻️ B. Microsatellite instability — _MSI results from mismatch repair defects._
  - ✅ C. G:C→T:A transversions in genes such as APC and KRAS
  - ◻️ D. Expansion of CGG repeats — _Repeat expansions cause disorders such as fragile X._
  - ◻️ E. C→T transitions at adjacent pyrimidines — _That is the UV signature when NER fails._
  - Explanation: Without MUTYH, adenine stays opposite 8-oxoguanine and replication fixes G:C→T:A transversions in growth-control genes.
- **MCQ** `mol-single-strand-repair:mcq5` · interpretation → **application** · difficulty 5 · `bc-dna-repair.xp`
  - A child has the clinical features of xeroderma pigmentosum. Her cultured skin cells remove UV-induced damage at a normal rate but cannot efficiently copy DNA that still contains unrepaired lesions. Which gene product is most likely defective?
  - ✅ A. DNA polymerase η (POLH), the XP variant
  - ◻️ B. ATM kinase — _ATM signals double-strand breaks; defects cause ataxia–telangiectasia._
  - ◻️ C. MLH1 — _MLH1 is a mismatch repair protein._
  - ◻️ D. XPA, a core nucleotide excision repair factor — _Loss of XPA would impair removal of UV damage, which is normal here._
  - ◻️ E. MUTYH glycosylase — _MUTYH acts on oxidative damage in base excision repair._
  - Explanation: Normal removal + defective replication past damage = XP variant (polymerase η), distinct from classic NER defects.
- **True/false** `mol-single-strand-repair:tf1` · recall → **recognition** · difficulty 1 · `bc-dna-repair.ssb-pathways`: Nucleotide excision repair removes UV-induced thymine dimers. → **True**. Correct: the damaged stretch is excised and replaced.
- **True/false** `mol-single-strand-repair:tf2` · recall → **recognition** · difficulty 1 · `bc-dna-repair.xp`: Xeroderma pigmentosum is inherited in an autosomal dominant pattern. → **False**. It is autosomal recessive.
- **True/false** `mol-single-strand-repair:tf3` · recall → **recognition** · difficulty 2 · `bc-dna-repair.mutyh`: MUTYH polyposis is autosomal recessive, unlike familial adenomatous polyposis. → **True**. Correct: biallelic MUTYH variants are needed; FAP (APC) is autosomal dominant.
- **Crossword** `mol-single-strand-repair:clue1` · recall → **recognition** · difficulty 2 · `bc-dna-repair.ssb-pathways`: Enzyme that starts base excision repair by removing a damaged base → **GLYCOSYLASE**
- **Crossword** `mol-single-strand-repair:clue2` · recall → **recognition** · difficulty 2 · `bc-dna-repair.xp`: Pigment change on sun-exposed skin that appears early in xeroderma pigmentosum → **FRECKLING**

---

## Mismatch repair and Lynch syndrome (`mol-lynch`)

Objectives: `bc-dna-repair.lynch`

**Citations**

1. MedlinePlus Genetics: Lynch syndrome — <https://medlineplus.gov/genetics/condition/lynch-syndrome/> — checked: full-text
2. GeneReviews: Lynch Syndrome — PMID 20301390; NBK1211 — <https://www.ncbi.nlm.nih.gov/books/NBK1211/> — checked: summary
3. The current value of determining the mismatch repair status of colorectal cancer. Crit Rev Oncol Hematol 2017 — PMID 28693799 — <https://pubmed.ncbi.nlm.nih.gov/28693799/> — checked: summary
4. OpenStax Biology 2e, 14.6 DNA Repair (mismatch repair) — <https://openstax.org/books/biology-2e/pages/14-6-dna-repair> — checked: full-text

**Facts** [supporting citations]

- Mismatch repair enzymes recognize mispaired nucleotides on the newly synthesized strand and excise and replace that stretch. [4]
- Lynch syndrome (hereditary nonpolyposis colorectal cancer) is autosomal dominant with incomplete penetrance, caused by germline variants in MLH1, MSH2, MSH6 or PMS2, or a 3′ EPCAM deletion that silences MSH2. [1, 2]
- Risks include colorectal and endometrial cancer and cancers of the ovary, stomach, small bowel, urinary and biliary tract, brain, pancreas and skin (sebaceous neoplasms); risks and ages vary by gene (higher with MLH1 or MSH2). [2, 1]
- Polyps occur at a younger age but not in greater numbers than in the general population. [1]
- Up to about 15% of colorectal cancers show microsatellite instability; most of these are sporadic, caused by MLH1 promoter hypermethylation and often accompanied by a BRAF mutation, whereas Lynch syndrome is the germline cause. [3]
- MSI or mismatch repair–deficient tumors respond to immune checkpoint inhibitors. [3]

**Mechanism.** Microsatellites are short repeats on which polymerase often slips. Mismatch repair normally fixes these errors. A tumor that loses both copies of an MMR gene (one inherited, one acquired) accumulates many repeat-length changes, including in growth-control genes, so cancers develop from few polyps.

**Quick.** Lynch syndrome (AD; MLH1, MSH2, MSH6, PMS2, EPCAM): mismatch repair fails → microsatellite instability → colorectal and endometrial cancer (plus many others) without polyposis. Most MSI tumors are sporadic (MLH1 promoter methylation ± BRAF).

**Detailed**

> Each patient inherits one nonfunctional allele in every cell; a tumor arises when the remaining allele is lost. Mismatch repair–deficient cells mutate at a high rate, which accelerates progression from adenoma to carcinoma.

> Universal testing of colorectal cancers for MSI or loss of MMR proteins identifies possible Lynch syndrome. Tumors that have lost MLH1 because of promoter hypermethylation, especially with a BRAF mutation, are usually sporadic; MMR status also predicts response to immune checkpoint inhibitors.

**Misconception.** An MSI-high tumor does not prove Lynch syndrome: most MSI colorectal cancers are sporadic (MLH1 promoter hypermethylation, often with BRAF mutation).

**Takeaway.** Dominant pedigree, early colorectal + endometrial cancer, few polyps, MSI-high tumor without MLH1 methylation = Lynch syndrome.

- **MCQ** `mol-lynch:mcq1` · mechanism → **mechanism** · difficulty 3 · `bc-dna-repair.lynch`
  - A colon adenocarcinoma shows variable lengths of short tandem repeats compared with the patient’s normal tissue. Loss of which normal process best explains this finding?
  - ✅ A. Correction of errors on the newly made strand
  - ◻️ B. Removal of adenine opposite 8-oxoguanine — _MUTYH defects cause G:C→T:A transversions._
  - ◻️ C. Regulation of β-catenin degradation by the APC protein — _APC loss drives chromosomal-instability tumors, not microsatellite instability._
  - ◻️ D. Excision of UV-induced pyrimidine dimers — _NER defects cause UV-induced skin cancers, not repeat-length instability._
  - ◻️ E. Maintenance of telomere length — _Telomere loss does not cause microsatellite length changes._
  - Explanation: Microsatellite instability = failed mismatch repair.
- **MCQ** `mol-lynch:mcq2` · identification → **recognition** · difficulty 2 · `bc-dna-repair.lynch`
  - A 44-year-old woman is diagnosed with adenocarcinoma of the cecum; colonoscopy shows only two other adenomas. Her mother had endometrial cancer at 50 and her maternal grandfather had colon cancer at 48. Germline variants in which gene group are most likely?
  - ◻️ A. STK11 — _Peutz–Jeghers syndrome causes hamartomatous polyps and mucocutaneous pigmentation._
  - ◻️ B. BRCA1 — _BRCA1 mainly raises breast and ovarian cancer risk._
  - ◻️ C. APC (Wnt pathway gatekeeper) — _Familial adenomatous polyposis causes hundreds to thousands of adenomas._
  - ◻️ D. MUTYH (base excision repair) — _MUTYH polyposis is recessive and usually involves many adenomas._
  - ✅ E. MLH1, MSH2, MSH6 or PMS2
  - Explanation: Early colon cancer with few polyps and endometrial cancer across generations = Lynch syndrome.
- **MCQ** `mol-lynch:mcq3` · interpretation → **application** · difficulty 5 · `bc-dna-repair.lynch`
  - A 78-year-old woman with no family history of cancer has a right-sided colon cancer. Immunohistochemistry shows loss of MLH1, the MLH1 promoter is hypermethylated in the tumor, and the tumor carries a BRAF V600E mutation. What is the best interpretation?
  - ◻️ A. The pattern indicates a germline MSH2 variant — _MSH2 defects cause loss of MSH2 (and MSH6) staining, not MLH1._
  - ✅ B. Probably a sporadic MSI cancer, not Lynch syndrome
  - ◻️ C. The tumor is microsatellite stable — _Loss of MLH1 makes the tumor mismatch repair deficient (MSI-high)._
  - ◻️ D. Lynch syndrome is confirmed by the loss of MLH1 staining — _MLH1 loss is often caused by somatic promoter hypermethylation; that pattern with BRAF V600E points away from Lynch syndrome._
  - ◻️ E. The pattern indicates MUTYH polyposis — _MUTYH tumors show G:C→T:A transversions, not MLH1 loss._
  - Explanation: MLH1 loss + promoter hypermethylation + BRAF V600E in an older patient without family history = sporadic MSI cancer.
- **True/false** `mol-lynch:tf1` · recall → **recognition** · difficulty 1 · `bc-dna-repair.lynch`: Lynch syndrome is inherited in an autosomal recessive pattern. → **False**. Lynch syndrome is autosomal dominant with incomplete penetrance.
- **Crossword** `mol-lynch:clue1` · recall → **recognition** · difficulty 2 · `bc-dna-repair.lynch`: Short tandem repeat that becomes unstable when mismatch repair fails → **MICROSATELLITE**

---

## Double-strand break repair: homologous recombination and NHEJ (`mol-double-strand-repair`)

Objectives: `bc-dna-repair.dsb-pathways`, `bc-dna-repair.brca`, `bc-dna-repair.nhej-scid`, `bc-dna-repair.bloom`

**Citations**

1. Homologous recombination and human health. Cold Spring Harb Perspect Biol 2015 — PMID 25833843 — <https://pubmed.ncbi.nlm.nih.gov/25833843/> — checked: summary
2. MedlinePlus Genetics: BRCA2 gene — <https://medlineplus.gov/genetics/gene/brca2/> — checked: full-text
3. GeneReviews: BRCA1- and BRCA2-Associated Hereditary Breast and Ovarian Cancer — PMID 20301425; NBK1247 — <https://www.ncbi.nlm.nih.gov/books/NBK1247/> — checked: summary
4. Woodbine L, Gennery AR, Jeggo PA. The clinical impact of deficiency in DNA non-homologous end-joining. DNA Repair 2014 — PMID 24629483 — <https://pubmed.ncbi.nlm.nih.gov/24629483/> — checked: summary
5. Artemis deficiency: a large cohort including a novel variant with increased radiosensitivity. Pediatr Allergy Immunol 2024 — PMID 38860449 — <https://pubmed.ncbi.nlm.nih.gov/38860449/> — checked: summary
6. MedlinePlus Genetics: RAG1 gene — <https://medlineplus.gov/genetics/gene/rag1/> — checked: full-text
7. MedlinePlus Genetics: Bloom syndrome — <https://medlineplus.gov/genetics/condition/bloom-syndrome/> — checked: full-text
8. GeneReviews: Bloom Syndrome — PMID 20301572; NBK1398 — <https://www.ncbi.nlm.nih.gov/books/NBK1398/> — checked: summary

**Facts** [supporting citations]

- Homologous recombination (HR) repairs double-strand breaks by homologous strand exchange directed by RAD51, using an intact homologous template (the sister chromatid); HR deficiency causes genomic instability and cancer predisposition. [1]
- BRCA2 helps mend DNA breaks. BRCA1/BRCA2 heterozygous variants (autosomal dominant) raise the risk of female and male breast cancer and ovarian cancer, and to a lesser extent prostate and pancreatic cancer and melanoma (mainly BRCA2); PARP inhibitors may be used for BRCA-related tumors. [2, 3]
- Nonhomologous end joining (NHEJ) is the major double-strand break repair pathway in mammalian cells; it rejoins ends directly and also rejoins the programmed breaks made during V(D)J recombination. [4]
- The RAG complex cuts DNA next to V, D and J segments during V(D)J recombination in developing T and B cells. [6]
- NHEJ defects (DNA ligase IV, XLF/Cernunnos, Artemis, DNA-PKcs) cause radiosensitive SCID; Artemis deficiency typically gives a T⁻B⁻NK⁺ phenotype, and other features can include microcephaly and growth delay. [4, 5]
- Bloom syndrome (autosomal recessive, BLM, a RecQ helicase that prevents excess sister chromatid exchange): severe pre- and postnatal growth deficiency, sun-sensitive facial (butterfly) rash, immune abnormalities, insulin resistance and high early cancer risk, usually with normal intelligence. [7, 8]

**Mechanism.** A double-strand break leaves no intact template on the same molecule. HR copies the missing information from a homologous template and so restores the sequence. NHEJ rejoins the ends directly, which is fast but can lose or add bases. Developing lymphocytes deliberately cut DNA during V(D)J recombination and rely on NHEJ to rejoin the segments, so NHEJ defects block lymphocyte development and also leave cells unable to cope with radiation.

**Quick.** HR (RAD51; BRCA1/2) copies a homologous template: accurate. NHEJ rejoins ends: major pathway, can add or lose bases, and joins V(D)J breaks, so defects (Artemis, ligase IV, DNA-PKcs) cause radiosensitive SCID. Bloom: BLM helicase, severe growth deficiency, facial rash, early cancers.

**Detailed**

> Because HR needs a homologous template, it is most active after DNA replication. Tumors lacking HR depend more on other repair routes; PARP inhibitors exploit this by removing one of them, an approach used for BRCA-related cancers.

> In V(D)J recombination the RAG complex cuts DNA beside gene segments and NHEJ factors rejoin the ends. Without Artemis or DNA ligase IV, receptors cannot be assembled, T and B cells fail to develop (NK cells are typically present in Artemis deficiency), and cells are unusually sensitive to ionizing radiation.

**Misconception.** BRCA-related cancer risk is dominant in families, but HR is lost only in the tumor after the second allele is lost; carriers’ normal cells keep one working copy.

**Takeaway.** Accurate DSB repair = HR (RAD51, BRCA); fast end joining = NHEJ (also V(D)J, so defects → radiosensitive SCID).

- **MCQ** `mol-double-strand-repair:mcq1` · mechanism → **mechanism** · difficulty 3 · `bc-dna-repair.dsb-pathways`
  - Why is repair of a double-strand break by nonhomologous end joining more likely to leave a sequence change than repair by homologous recombination?
  - ◻️ A. HR excises the entire chromosome arm — _HR copies a limited region from the template._
  - ✅ B. NHEJ joins ends without a template, so bases can be lost
  - ◻️ C. HR is used only for single-strand nicks — _HR repairs double-strand breaks._
  - ◻️ D. NHEJ uses RNA as a template — _Neither pathway uses an RNA template._
  - ◻️ E. NHEJ copies the homologous chromosome from the other parent, causing loss of heterozygosity — _NHEJ uses no template; copying the parental homolog describes a form of recombination._
  - Explanation: HR copies a homologous template (accurate); NHEJ processes and joins ends directly (can alter the sequence at the junction).
- **MCQ** `mol-double-strand-repair:mcq2` · multistep → **application** · difficulty 4 · `bc-dna-repair.brca`, `bc-dna-repair.dsb-pathways`
  - A 38-year-old woman with ovarian cancer carries a germline pathogenic BRCA1 variant. Her tumor has lost the remaining BRCA1 allele; her normal cells have not. A PARP inhibitor is added. Why is the tumor expected to be more sensitive than her normal tissues?
  - ◻️ A. Her normal cells also lack all BRCA1 function and die too — _Normal cells keep one working allele; only the tumor has lost both._
  - ◻️ B. PARP inhibitors block BRCA1 transcription — _They inhibit PARP enzymes; BRCA1 is already lost in the tumor._
  - ◻️ C. PARP inhibitors restore mismatch repair — _They do not affect mismatch repair._
  - ◻️ D. BRCA1-deficient tumor cells overexpress PARP as a drug target — _Sensitivity reflects the repair defect, not target overexpression._
  - ✅ E. Only the tumor lacks HR, so it cannot fix breaks left when PARP is blocked
  - Explanation: Germline variant → second hit only in the tumor → tumor lacks HR → added loss of PARP-dependent repair is lethal to the tumor but tolerated by normal cells.
- **MCQ** `mol-double-strand-repair:mcq3` · comparison → **application** · difficulty 4 · `bc-dna-repair.nhej-scid`
  - An infant with recurrent infections has absent T and B cells but normal NK cells. Cultured fibroblasts are unusually sensitive to ionizing radiation. Which defect best explains both findings?
  - ◻️ A. Adenosine deaminase deficiency — _ADA deficiency is a metabolic SCID without radiosensitivity, and NK cells are usually affected too._
  - ◻️ B. Common γ-chain cytokine-receptor defect — _γ-chain SCID removes T and NK cells, typically spares B cells, and is not radiosensitive._
  - ◻️ C. Loss of RAG1 nuclease activity — _RAG defects block V(D)J recombination (T⁻B⁻), but RAG is not needed to repair radiation damage._
  - ◻️ D. Nucleotide excision repair defect — _NER repairs UV damage and is not needed for V(D)J recombination._
  - ✅ E. Loss of an NHEJ factor such as Artemis
  - Explanation: Absent T and B cells + radiosensitivity point to NHEJ, which joins both V(D)J breaks and radiation-induced breaks.
- **MCQ** `mol-double-strand-repair:mcq4` · mechanism → **mechanism** · difficulty 3 · `bc-dna-repair.nhej-scid`
  - Why does complete loss of the NHEJ factor Artemis prevent the development of both T cells and B cells?
  - ◻️ A. Artemis transmits cytokine signals needed for lymphocyte survival — _Cytokine signaling defects (IL2RG, JAK3) spare B-cell numbers._
  - ◻️ B. Artemis deficiency causes toxic deoxynucleotides to accumulate — _Toxic dATP is the mechanism of adenosine deaminase deficiency._
  - ◻️ C. Artemis is required to make the cuts at recombination signal sequences — _The RAG complex makes the cuts; NHEJ factors such as Artemis process and rejoin the ends._
  - ✅ D. RAG-made V(D)J breaks cannot be rejoined
  - ◻️ E. Artemis is needed for thymus development from the pharyngeal pouches — _Thymic aplasia is the mechanism in 22q11.2 deletion syndrome._
  - Explanation: T- and B-cell receptor genes are assembled by cutting (RAG) and rejoining (NHEJ); without rejoining, neither lineage can complete development.
- **True/false** `mol-double-strand-repair:tf1` · recall → **recognition** · difficulty 2 · `bc-dna-repair.dsb-pathways`: Homologous recombination uses RAD51-directed strand exchange with a homologous template. → **True**. Correct: that is the defining step of HR.
- **True/false** `mol-double-strand-repair:tf2` · recall → **recognition** · difficulty 2 · `bc-dna-repair.brca`: BRCA2 variants increase the risk of male breast cancer. → **True**. Correct: male breast, prostate and pancreatic cancer risks are mainly associated with BRCA2.
- **True/false** `mol-double-strand-repair:tf3` · recall → **recognition** · difficulty 2 · `bc-dna-repair.nhej-scid`: V(D)J recombination depends on nonhomologous end joining. → **True**. Correct: RAG cuts the DNA and NHEJ factors rejoin the segments.
- **True/false** `mol-double-strand-repair:tf4` · recall → **recognition** · difficulty 2 · `bc-dna-repair.bloom`: Bloom syndrome is caused by a defective nucleotide excision repair protein. → **False**. Bloom syndrome is caused by BLM, a RecQ helicase that limits sister chromatid exchange.
- **Crossword** `mol-double-strand-repair:clue1` · recall → **recognition** · difficulty 2 · `bc-dna-repair.dsb-pathways`: Kind of recombination that repairs double-strand breaks with RAD51 → **HOMOLOGOUS**
- **Crossword** `mol-double-strand-repair:clue2` · recall → **recognition** · difficulty 2 · `bc-dna-repair.nhej-scid`: NHEJ factor whose loss causes radiosensitive SCID → **ARTEMIS**
- **Crossword** `mol-double-strand-repair:clue3` · recall → **recognition** · difficulty 2 · `bc-dna-repair.bloom`: Syndrome of BLM helicase deficiency with facial rash and short stature → **BLOOM**

---

## Ataxia–telangiectasia: the ATM DNA damage response (`mol-ataxia-telangiectasia`)

Objectives: `bc-dna-repair.atm`

**Citations**

1. MedlinePlus Genetics: Ataxia-telangiectasia — <https://medlineplus.gov/genetics/condition/ataxia-telangiectasia/> — checked: full-text
2. GeneReviews: Ataxia-Telangiectasia — PMID 20301790; NBK26468 — <https://www.ncbi.nlm.nih.gov/books/NBK26468/> — checked: summary
3. Boultwood J. Ataxia telangiectasia gene mutations in leukaemia and lymphoma. J Clin Pathol 2001 — PMID 11429421 — <https://pubmed.ncbi.nlm.nih.gov/11429421/> — checked: summary

**Facts** [supporting citations]

- ATM is a protein kinase activated mainly by DNA double-strand breaks; it helps cells recognize broken DNA, coordinates repair and controls cell-cycle checkpoints. It is a damage sensor and signaling protein, not a repair pathway itself. [1, 3]
- Ataxia–telangiectasia is autosomal recessive (ATM). [1, 2]
- Classic A-T: progressive cerebellar ataxia beginning in early childhood (usually before age 5), oculomotor apraxia and slurred speech, later extrapyramidal features and neuropathy. [1, 2]
- Telangiectasias of the eyes and skin; raised serum α-fetoprotein (cause unknown). [1]
- Immunodeficiency is variable (humoral, cellular or combined) with recurrent lung infections; sensitivity to ionizing radiation; about 10% develop cancer, mostly lymphoid (lymphomas and leukemias). [2, 3]
- Heterozygous carriers have an increased cancer risk, particularly breast cancer in women. [1]

**Mechanism.** When ATM is missing, cells do not respond correctly to double-strand breaks: checkpoints and repair are not coordinated, so breaks persist. Cerebellar neurons die, chromosomal breaks and rearrangements accumulate (especially in lymphocytes, which make physiological breaks during receptor gene recombination), and radiation is poorly tolerated.

**Quick.** ATM = kinase sensing double-strand breaks. Ataxia–telangiectasia (AR): childhood cerebellar ataxia, telangiectasias, variable immunodeficiency with lung infections, raised AFP, radiosensitivity, lymphoid cancers; carriers have higher breast cancer risk.

**Detailed**

> The ataxia begins as the child starts to walk and progresses; telangiectasias often appear later, so early cases can be mistaken for other ataxias. A raised AFP is a useful diagnostic clue. There is a spectrum: variant A-T is milder, sometimes without ataxia and with normal immune function.

> Lymphocytes deliberately break DNA during receptor and class-switch recombination; without ATM these breaks are handled poorly, which contributes to antibody deficiency and to translocations that predispose to lymphoid cancers. Radiation doses must be considered carefully.

**Misconception.** ATM is not a component of nonhomologous end joining; it is the kinase that senses double-strand breaks and signals to checkpoints and repair.

**Takeaway.** Ataxia + telangiectasias + lung infections + high AFP + radiosensitivity = ATM loss; watch for lymphoid cancer.

- **MCQ** `mol-ataxia-telangiectasia:mcq1` · mechanism → **mechanism** · difficulty 3 · `bc-dna-repair.atm`
  - Cells lacking ATM are exposed to ionizing radiation. Which response is most impaired?
  - ◻️ A. Ligation of broken ends as a core enzyme of NHEJ — _This is the role of DNA ligase IV; ATM signals rather than ligates._
  - ◻️ B. Unwinding DNA to limit sister chromatid exchange — _That is BLM helicase (Bloom syndrome)._
  - ✅ C. Sensing double-strand breaks and signaling arrest
  - ◻️ D. Excision of thymine dimers — _Thymine dimers are repaired by NER._
  - ◻️ E. Removal of crosslinks between the two DNA strands — _Interstrand crosslink repair is the Fanconi anemia pathway._
  - Explanation: ATM is the double-strand break sensor kinase: it halts the cell cycle and coordinates repair.
- **MCQ** `mol-ataxia-telangiectasia:mcq2` · multistep → **application** · difficulty 4 · `bc-dna-repair.atm`
  - A 6-year-old boy has a wide-based gait that began when he started walking and has worsened, difficulty initiating eye movements, three episodes of pneumonia, and small dilated vessels on the conjunctivae. Serum α-fetoprotein is raised. Which long-term risk is most characteristic of his condition?
  - ◻️ A. Basal cell carcinomas in childhood — _Childhood skin cancers suggest xeroderma pigmentosum._
  - ✅ B. Lymphoid malignancy such as lymphoma or leukemia
  - ◻️ C. Hepatocellular carcinoma, indicated by the raised AFP — _The AFP elevation is a diagnostic feature of A-T, not a sign of liver cancer._
  - ◻️ D. Colorectal cancer without polyposis — _This suggests Lynch syndrome._
  - ◻️ E. Hypertrophic cardiomyopathy — _This fits Friedreich ataxia, which lacks telangiectasias and raised AFP._
  - Explanation: Identify A-T from ataxia + telangiectasias + infections + high AFP, then predict its cancer pattern: mostly lymphoid.
- **True/false** `mol-ataxia-telangiectasia:tf1` · recall → **recognition** · difficulty 2 · `bc-dna-repair.atm`: Patients with ataxia–telangiectasia are unusually sensitive to ionizing radiation. → **True**. Correct: cells cannot respond normally to double-strand breaks.
- **True/false** `mol-ataxia-telangiectasia:tf2` · recall → **recognition** · difficulty 2 · `bc-dna-repair.atm`: ATM is the DNA ligase that joins broken ends in nonhomologous end joining. → **False**. ATM is a kinase that senses double-strand breaks and signals; DNA ligase IV joins ends in NHEJ.
- **Crossword** `mol-ataxia-telangiectasia:clue1` · recall → **recognition** · difficulty 2 · `bc-dna-repair.atm`: Small dilated vessel seen on the conjunctivae in ATM deficiency → **TELANGIECTASIA**

---

## Fanconi anemia: interstrand crosslink repair (`mol-fanconi-anemia`)

Objectives: `bc-dna-repair.fanconi`

**Citations**

1. MedlinePlus Genetics: Fanconi anemia — <https://medlineplus.gov/genetics/condition/fanconi-anemia/> — checked: full-text
2. GeneReviews: Fanconi Anemia — PMID 20301575; NBK1401 — <https://www.ncbi.nlm.nih.gov/books/NBK1401/> — checked: summary
3. Cancer in children with Fanconi anemia (cohort). J Clin Oncol 2022 — PMID 34597127 — <https://pubmed.ncbi.nlm.nih.gov/34597127/> — checked: summary

**Facts** [supporting citations]

- Interstrand crosslinks join nucleotides on opposite DNA strands and block replication; they can arise from toxic substances made in the body or from crosslinking cancer drugs. [1]
- The Fanconi anemia (FA) pathway is activated when replication stalls at a crosslink: the FA core complex activates FANCD2 and FANCI, which bring DNA repair proteins to remove the crosslink. [1]
- More than 20 genes are involved; most cases are autosomal recessive (FANCA, FANCC and FANCG account for 80–90%); rare forms are X-linked (FANCB) or autosomal dominant (RAD51). [1, 2]
- About 75% have physical abnormalities: growth deficiency, abnormal pigmentation (café-au-lait spots, hypopigmentation), upper- and/or lower-limb skeletal malformations, microcephaly, genitourinary and eye anomalies. [2]
- Progressive bone marrow failure typically presents in the first decade, often first as thrombocytopenia or leukopenia; MDS or AML reaches about 35% by age 40, and solid tumors of the head and neck, skin and genitourinary tract are more common. [2, 3]
- Diagnosis: increased chromosome breakage and radial forms when lymphocytes are exposed to diepoxybutane (DEB) or mitomycin C, and/or molecular testing. [2]

**Mechanism.** Interstrand crosslinks tie the two strands together so they cannot separate for replication. The FA pathway recognizes the stalled fork and recruits the proteins that cut out the crosslink and rebuild the DNA. Without it, crosslinks cause breaks and cell death, depleting hematopoietic stem cells and creating chromosomal instability that predisposes to cancer.

**Quick.** Fanconi anemia: FA pathway fails to repair interstrand crosslinks (mostly AR). Marrow failure in the first decade, growth deficiency, limb malformations, abnormal pigmentation; MDS/AML and head and neck cancers. Diagnose by chromosomal breakage with DEB or mitomycin C.

**Detailed**

> Crosslinking agents are used diagnostically because patient cells cannot repair the damage they cause, producing excess breaks and radial figures. The same sensitivity means standard doses of crosslinking chemotherapy are dangerous for these patients.

> Presentation varies: about a quarter of patients have no obvious physical anomalies, so marrow failure or an unexpected cancer may be the first sign. Stem cell transplantation treats the marrow failure but not the risk of solid tumors, which needs lifelong surveillance.

**Misconception.** Fanconi anemia (a DNA repair disorder affecting the marrow) is unrelated to Fanconi syndrome (a proximal renal tubular transport defect).

**Takeaway.** Marrow failure + growth deficiency + limb malformations + abnormal pigmentation + breakage with crosslinkers = Fanconi anemia.

- **MCQ** `mol-fanconi-anemia:mcq1` · interpretation → **application** · difficulty 3 · `bc-dna-repair.fanconi`
  - Lymphocytes from a child with pancytopenia are cultured with diepoxybutane, and an abnormally high number of chromosome breaks and radial figures is seen. How should this result be interpreted?
  - ◻️ A. The result reflects telomere shortening — _Telomere disorders are diagnosed by telomere length testing._
  - ✅ B. Defective crosslink repair, supporting Fanconi anemia
  - ◻️ C. The cells cannot remove UV-induced dimers — _UV repair defects (XP) are not detected with diepoxybutane._
  - ◻️ D. The cells have mismatch repair deficiency — _Mismatch repair defects cause microsatellite instability, not crosslinker sensitivity._
  - ◻️ E. Acquired aplastic anemia from immune destruction of marrow — _Acquired aplastic anemia has normal chromosome breakage with crosslinkers._
  - Explanation: Diepoxybutane creates interstrand crosslinks; excess breakage shows the FA repair pathway is defective.
- **MCQ** `mol-fanconi-anemia:mcq2` · multistep → **application** · difficulty 4 · `bc-dna-repair.fanconi`
  - A 7-year-old girl has bruising and fatigue. She is below the 3rd percentile for height, has an abnormally formed right thumb and several café-au-lait macules. Blood count shows pancytopenia, and the marrow is hypocellular. For which complications is she at increased lifetime risk?
  - ◻️ A. Colorectal and endometrial carcinoma in early adulthood — _These suggest Lynch syndrome._
  - ✅ B. MDS/AML and head and neck squamous cell cancer
  - ◻️ C. Vestibular schwannomas — _These suggest neurofibromatosis type 2._
  - ◻️ D. Retinoblastoma and osteosarcoma — _These suggest a germline RB1 variant._
  - ◻️ E. Basal cell carcinoma and melanoma in childhood — _Childhood skin cancers point to xeroderma pigmentosum._
  - Explanation: Recognize Fanconi anemia from marrow failure + growth deficiency + limb and pigment changes, then predict its cancers: MDS/AML and head and neck squamous cancers.
- **MCQ** `mol-fanconi-anemia:mcq3` · mechanism → **mechanism** · difficulty 3 · `bc-dna-repair.fanconi`
  - Why does failure of the Fanconi anemia pathway lead to marrow failure and chromosomal instability?
  - ◻️ A. Autoantibodies destroy hematopoietic stem cells — _That describes immune-mediated aplastic anemia._
  - ✅ B. Unrepaired crosslinks stall forks, which break and kill stem cells
  - ◻️ C. The FA pathway produces erythropoietin, so marrow output falls — _The FA pathway is a DNA repair system, not a hormone source._
  - ◻️ D. The FA pathway removes UV dimers from marrow cells — _Marrow cells are not exposed to UV; NER handles UV damage._
  - ◻️ E. Mismatch repair fails, causing microsatellite instability in stem cells — _FA is not a mismatch repair defect._
  - Explanation: Unrepaired crosslinks stall replication; forks break, stem cells die and surviving cells accumulate chromosomal damage.
- **True/false** `mol-fanconi-anemia:tf1` · recall → **recognition** · difficulty 2 · `bc-dna-repair.fanconi`: Most Fanconi anemia is autosomal recessive, although rare X-linked and dominant forms exist. → **True**. Correct: FANCB is X-linked and RAD51-related FA is autosomal dominant.
- **Crossword** `mol-fanconi-anemia:clue1` · recall → **recognition** · difficulty 2 · `bc-dna-repair.fanconi`: Type of interstrand DNA lesion the Fanconi pathway repairs → **CROSSLINK**
- **Mystery Patient** `case:fanconi-anemia` · multistep → **application** · difficulty 4 · `bc-dna-repair.fanconi`: Small thumbs, falling counts
  - Presentation: A 6-year-old boy has nosebleeds and tiredness for two months.
  - History: Born small for gestational age. Surgery as a baby for an abnormally formed left thumb. Parents are healthy and related as second cousins.
  - Examination: Height below the 3rd percentile. Three café-au-lait macules and patchy hypopigmentation. Petechiae on the legs. No lymphadenopathy or splenomegaly.
  - Laboratory: Hemoglobin 8.6 g/dL, white cells 2,400/mm³ (neutrophils 800/mm³), platelets 32,000/mm³, reticulocytes low.
  - Imaging & tests: Bone marrow: markedly hypocellular without blasts. Renal ultrasound: right kidney absent.
  - Further clue: Lymphocytes cultured with diepoxybutane show many chromosome breaks and radial figures.
  - Q: Which DNA repair function is defective?
  - ◻️ A. Limiting sister chromatid exchange by BLM helicase — _Bloom syndrome causes growth deficiency and a facial rash, but not marrow failure with crosslinker sensitivity._
  - ◻️ B. Excision of UV-induced pyrimidine dimers — _This is xeroderma pigmentosum, with photosensitivity and skin cancers._
  - ◻️ C. Detection of double-strand breaks by ATM kinase — _Ataxia–telangiectasia causes ataxia, telangiectasias and immunodeficiency, without limb malformations or marrow failure._
  - ◻️ D. Correction of replication mismatches — _Mismatch repair defects (Lynch syndrome) cause adult cancers._
  - ✅ E. Repair of interstrand crosslinks by the FA pathway
  - Marrow failure in the first decade with growth deficiency, limb and kidney malformations, abnormal pigmentation and consanguinity point to Fanconi anemia. Excess breakage with a crosslinking agent confirms that interstrand crosslinks cannot be repaired.

---

## Collagen types and the diseases that affect them (`mol-collagen-types`)

Objectives: `bc-collagen.types`

**Citations**

1. MedlinePlus Genetics: COL1A1 gene — <https://medlineplus.gov/genetics/gene/col1a1/> — checked: full-text
2. MedlinePlus Genetics: COL2A1 gene — <https://medlineplus.gov/genetics/gene/col2a1/> — checked: full-text
3. MedlinePlus Genetics: COL3A1 gene — <https://medlineplus.gov/genetics/gene/col3a1/> — checked: full-text
4. MedlinePlus Genetics: COL4A5 gene — <https://medlineplus.gov/genetics/gene/col4a5/> — checked: full-text
5. GeneReviews: Alport Syndrome — PMID 20301386; NBK1207 — <https://www.ncbi.nlm.nih.gov/books/NBK1207/> — checked: summary
6. GeneReviews: Stickler Syndrome — PMID 20301479; NBK1302 — <https://www.ncbi.nlm.nih.gov/books/NBK1302/> — checked: summary
7. MedlinePlus Genetics: Ehlers-Danlos syndrome — <https://medlineplus.gov/genetics/condition/ehlers-danlos-syndrome/> — checked: full-text
8. StatPearls: Biochemistry, Collagen Synthesis — PMID 29939531; NBK507709 — <https://www.ncbi.nlm.nih.gov/books/NBK507709/> — checked: summary

**Facts** [supporting citations]

- Type I collagen is abundant in bone, skin, tendon and sclera; COL1A1/COL1A2 defects cause osteogenesis imperfecta (including dentinogenesis imperfecta). [1, 8]
- Type II collagen is found in cartilage, growth plates, the inner ear, the vitreous and the nucleus pulposus; COL2A1 variants are the commonest cause of Stickler syndrome (myopia, retinal detachment, hearing loss, early joint degeneration). [2, 6]
- Type III collagen is found in skin, lungs, intestinal walls and blood vessel walls; COL3A1 defects cause vascular Ehlers–Danlos syndrome. [3, 7]
- Type IV collagen (α3, α4, α5 chains) forms basement membrane networks in the kidney, inner ear and eye; defects cause Alport syndrome (hematuria progressing to kidney failure, sensorineural hearing loss, anterior lenticonus). [4, 5]
- Classic Ehlers–Danlos syndrome is usually caused by COL5A1 or COL5A2 (type V collagen). [7]

**Mechanism.** Each collagen type has its own α chains, encoded by different genes, and its own tissue distribution. A defect damages the tissues that depend on that type: bone for type I, cartilage and vitreous for type II, vessels and hollow organs for type III, and basement membranes of kidney, ear and eye for type IV.

**Quick.** Type I: bone, skin, tendon, sclera (OI). Type II: cartilage, vitreous, nucleus pulposus (Stickler). Type III: vessels, intestine (vascular EDS). Type IV: basement membranes of kidney, ear, eye (Alport). Type V: classic EDS.

**Detailed**

> Alport syndrome most often results from X-linked COL4A5 variants; autosomal recessive and dominant forms involve COL4A3 or COL4A4. The glomerular basement membrane is abnormal, so microhematuria progresses to proteinuria and kidney failure (especially in males with the X-linked form), with sensorineural hearing loss and anterior lenticonus.

> Stickler syndrome shows how one collagen type maps to several tissues: abnormal type II collagen affects the vitreous (myopia, retinal detachment), cartilage (early arthritis) and the inner ear (hearing loss), with midface underdevelopment and cleft palate.

**Misconception.** Hearing loss is not unique to one collagen type: type II (Stickler) and type IV (Alport) both affect the inner ear, so look at the other organs involved.

**Takeaway.** Think tissue: bone and sclera (I), cartilage and vitreous (II), vessels and gut (III), basement membranes (IV).

- **MCQ** `mol-collagen-types:mcq1` · identification → **recognition** · difficulty 2 · `bc-collagen.types`
  - A 16-year-old boy has microscopic hematuria since childhood, progressive bilateral sensorineural hearing loss and anterior lenticonus. His maternal uncle needed dialysis at 30. A defect in which collagen type is most likely?
  - ◻️ A. Type II — _Type II defects (Stickler) also cause hearing loss, but with myopia, retinal detachment and joint disease rather than hematuria._
  - ◻️ B. Type III — _Type III defects cause vascular Ehlers–Danlos syndrome._
  - ✅ C. Type IV
  - ◻️ D. Type I — _Type I defects cause osteogenesis imperfecta._
  - ◻️ E. Type V — _Type V defects cause classic Ehlers–Danlos syndrome._
  - Explanation: Hematuria + hearing loss + anterior lenticonus in an X-linked pattern = Alport syndrome (type IV collagen of basement membranes).
- **MCQ** `mol-collagen-types:mcq2` · recall → **recognition** · difficulty 2 · `bc-collagen.types`
  - Which collagen type is a major structural component of blood vessel walls and the intestinal wall, so that its defects cause arterial and bowel rupture?
  - ◻️ A. Type IV — _Type IV forms basement membranes; its defects cause Alport syndrome._
  - ◻️ B. Type II — _Type II is the collagen of cartilage and vitreous._
  - ◻️ C. Type I — _Type I is abundant in bone, skin and tendon; its defects cause osteogenesis imperfecta._
  - ✅ D. Type III
  - ◻️ E. Type V — _Type V defects cause classic EDS with skin and joint features._
  - Explanation: Type III collagen (COL3A1) is prominent in vessel and intestinal walls; its defects cause vascular EDS.
- **MCQ** `mol-collagen-types:mcq3` · prediction → **application** · difficulty 4 · `bc-collagen.types`
  - A family carries a dominant COL2A1 variant that reduces functional type II collagen. Which combination of problems is most expected in affected members?
  - ◻️ A. Recurrent fractures with blue-grey sclerae — _This reflects type I collagen (osteogenesis imperfecta)._
  - ◻️ B. Hyperextensible skin with atrophic scars — _This reflects type V collagen (classic EDS)._
  - ◻️ C. Hematuria progressing to kidney failure, with hearing loss and lenticonus — _This pattern reflects type IV collagen (Alport syndrome)._
  - ◻️ D. Arterial dissection and bowel rupture — _This reflects type III collagen (vascular EDS)._
  - ✅ E. Myopia, retinal detachment, hearing loss, early arthritis
  - Explanation: Type II collagen is in vitreous, cartilage and inner ear: predict eye, joint and hearing problems (Stickler syndrome).
- **True/false** `mol-collagen-types:tf1` · recall → **recognition** · difficulty 1 · `bc-collagen.types`: Type II collagen is found in cartilage, the vitreous and the nucleus pulposus. → **True**. Correct.
- **True/false** `mol-collagen-types:tf2` · recall → **recognition** · difficulty 1 · `bc-collagen.types`: Alport syndrome is caused by defects in type I collagen. → **False**. Alport syndrome is caused by defects in type IV collagen (COL4A3, COL4A4 or COL4A5).
- **Crossword** `mol-collagen-types:clue1` · recall → **recognition** · difficulty 1 · `bc-collagen.types`: Tissue whose main collagen is type II → **CARTILAGE**

---

## Ehlers–Danlos syndromes (`mol-ehlers-danlos`)

Objectives: `bc-collagen.eds`

**Citations**

1. MedlinePlus Genetics: Ehlers-Danlos syndrome — <https://medlineplus.gov/genetics/condition/ehlers-danlos-syndrome/> — checked: full-text
2. GeneReviews: Classic Ehlers-Danlos Syndrome — PMID 20301422; NBK1244 — <https://www.ncbi.nlm.nih.gov/books/NBK1244/> — checked: summary
3. GeneReviews: Vascular Ehlers-Danlos Syndrome — PMID 20301667; NBK1494 — <https://www.ncbi.nlm.nih.gov/books/NBK1494/> — checked: summary
4. MedlinePlus Genetics: COL3A1 gene — <https://medlineplus.gov/genetics/gene/col3a1/> — checked: full-text

**Facts** [supporting citations]

- The Ehlers–Danlos syndromes are a group of connective tissue disorders (13 types in the 2017 classification) caused by variants in more than 20 genes, many encoding collagens or collagen-processing enzymes. [1]
- Classic EDS (usually COL5A1/COL5A2; autosomal dominant): soft, hyperextensible, fragile skin that splits after minor trauma, atrophic scars, easy bruising and generalized joint hypermobility. [2, 1]
- Hypermobile EDS is defined by joint hypermobility; its genetic cause is unknown in most people. [1]
- Vascular EDS (COL3A1; autosomal dominant): thin, translucent skin, easy bruising, characteristic face, and fragility of arteries, intestine and uterus; arterial dissection or rupture, bowel perforation or organ rupture is the presenting event in most adults. [3, 4]
- Several rare types are autosomal recessive, including kyphoscoliotic (PLOD1 or FKBP14) and dermatosparaxis (ADAMTS2) types. [1]

**Mechanism.** Collagen fibrils give tissues tensile strength. When fibrils are abnormal or reduced, tissues stretch and tear under ordinary loads. Which tissues fail depends on the collagen affected: type V (with type I) in skin and joints in classic EDS, type III in arteries, bowel and uterus in vascular EDS.

**Quick.** EDS = faulty collagen or its processing. Classic: type V (COL5A1/2) → stretchy fragile skin, atrophic scars, hypermobility. Hypermobile: joints, gene usually unknown. Vascular: type III (COL3A1) → thin skin, bruising, arterial, bowel and uterine rupture. Most AD; some rare types AR.

**Detailed**

> Recognizing vascular EDS matters most because it is life-threatening. Clues are thin, translucent skin with visible veins, extensive bruising, a characteristic facial appearance and spontaneous rupture of arteries or the colon in a young adult, or uterine rupture in pregnancy.

> Classic EDS centers on the skin: it is soft and doughy, stretches and snaps back, splits over pressure points after minor trauma and heals into wide, thin scars. Easy bruising is common in several types, so it does not by itself identify the vascular type.

**Misconception.** Vascular EDS may show only distal joint hypermobility and little skin stretch; thin translucent skin, bruising and arterial or bowel rupture are the warning signs.

**Takeaway.** Stretchy, fragile skin + atrophic scars = classic EDS (type V); thin skin + arterial or bowel rupture = vascular EDS (type III).

- **MCQ** `mol-ehlers-danlos:mcq1` · mechanism → **mechanism** · difficulty 3 · `bc-collagen.eds`
  - Why do patients with vascular Ehlers–Danlos syndrome suffer arterial and bowel rupture while those with classic EDS mainly have skin and joint problems?
  - ✅ A. It affects type III collagen of vessel and gut walls
  - ◻️ B. Classic EDS affects type II collagen in cartilage — _Classic EDS usually involves type V collagen._
  - ◻️ C. Vascular EDS impairs platelet aggregation — _The fragility is in connective tissue, not platelets._
  - ◻️ D. Vascular EDS is caused by fibrillin-1 deficiency — _Fibrillin-1 defects cause Marfan syndrome._
  - ◻️ E. It affects type IV collagen of vascular basement membranes — _Type IV defects cause Alport syndrome._
  - Explanation: COL3A1 (type III collagen) is a major structural collagen of arteries and intestine, so these organs rupture.
- **MCQ** `mol-ehlers-danlos:mcq2` · identification → **recognition** · difficulty 3 · `bc-collagen.eds`
  - A 26-year-old man has a spontaneous sigmoid colon perforation. He bruises easily, and his skin is thin and translucent with visible veins over the chest. His father died at 35 of a ruptured splenic artery. Platelet count and coagulation studies are normal. A variant in which gene is most likely?
  - ◻️ A. COL5A1 — _COL5A1 causes classic EDS with hyperextensible skin and atrophic scars, not arterial or bowel rupture._
  - ✅ B. COL3A1
  - ◻️ C. FBN1 — _Marfan syndrome causes aortic root disease and lens dislocation, not thin translucent skin with bowel rupture._
  - ◻️ D. COL4A5 — _COL4A5 causes X-linked Alport syndrome._
  - ◻️ E. COL1A1 — _COL1A1 defects mainly cause osteogenesis imperfecta._
  - Explanation: Thin translucent skin, bruising and bowel and arterial rupture in a dominant family = vascular EDS (COL3A1).
- **MCQ** `mol-ehlers-danlos:mcq3` · comparison → **application** · difficulty 4 · `bc-collagen.eds`
  - Two young adults both bruise easily and have hypermobile fingers. Which additional finding most strongly indicates vascular rather than classic Ehlers–Danlos syndrome?
  - ◻️ A. Skin that stretches markedly and snaps back — _Marked skin hyperextensibility is the hallmark of classic EDS._
  - ◻️ B. Easy bruising — _Bruising occurs in both types, so it does not discriminate._
  - ✅ C. Thin translucent skin and an arterial dissection
  - ◻️ D. Wide, thin atrophic scars over the knees, shins and forehead — _Atrophic scarring is characteristic of classic EDS._
  - ◻️ E. Generalized joint hypermobility — _Generalized hypermobility is typical of classic and hypermobile EDS; vascular EDS usually shows only distal hypermobility._
  - Explanation: Discriminating features: thin translucent skin and arterial, bowel or uterine fragility (vascular) vs stretchy skin and atrophic scars (classic).
- **True/false** `mol-ehlers-danlos:tf1` · recall → **recognition** · difficulty 2 · `bc-collagen.eds`: Classic Ehlers–Danlos syndrome is most often caused by type V collagen variants. → **True**. Correct: usually COL5A1 or COL5A2.
- **True/false** `mol-ehlers-danlos:tf2` · recall → **recognition** · difficulty 2 · `bc-collagen.eds`: Easy bruising identifies the vascular type of Ehlers–Danlos syndrome. → **False**. Easy bruising occurs in several EDS types; arterial, bowel or uterine fragility and thin translucent skin point to the vascular type.
- **Crossword** `mol-ehlers-danlos:clue1` · recall → **recognition** · difficulty 1 · `bc-collagen.eds`: Excessive joint range of motion typical of Ehlers–Danlos syndromes → **HYPERMOBILITY**

---

## Menkes disease: copper transport (`mol-menkes`)

Objectives: `bc-collagen.menkes`

**Citations**

1. MedlinePlus Genetics: Menkes syndrome — <https://medlineplus.gov/genetics/condition/menkes-syndrome/> — checked: full-text
2. GeneReviews: ATP7A-Related Copper Transport Disorders — PMID 20301586; NBK1413 — <https://www.ncbi.nlm.nih.gov/books/NBK1413/> — checked: summary
3. Targeting the lysyl oxidases in tumour desmoplasia. Biochem Soc Trans 2019 — PMID 31754702 — <https://pubmed.ncbi.nlm.nih.gov/31754702/> — checked: summary
4. MedlinePlus Genetics: Wilson disease — <https://medlineplus.gov/genetics/condition/wilson-disease/> — checked: full-text
5. StatPearls: Menkes Disease — PMID 32809752; NBK560917 — <https://www.ncbi.nlm.nih.gov/books/NBK560917/> — checked: existence

**Facts** [supporting citations]

- Menkes disease is caused by variants in ATP7A, an X-linked copper-transporting ATPase; about a third of cases arise from new variants. [1, 2]
- Copper is poorly distributed: it accumulates in some tissues such as the small intestine and kidneys, while the brain and other tissues have unusually low copper; serum copper is subnormal. [1, 2]
- Reduced activity of copper-containing enzymes affects bone, skin, hair, blood vessels and the nervous system. Lysyl oxidases are copper-dependent enzymes required for cross-linking collagen and elastin. [1, 3]
- Classic Menkes disease usually presents after 6–12 weeks of good health with feeding difficulty or seizures, followed by hypotonia and developmental delay; hair is sparse and kinky; many children do not live past age 3. Early copper treatment may help some. [2, 1]
- Occipital horn syndrome is a milder ATP7A disorder with occipital bone calcifications, coarse hair and loose skin and joints. [1, 2]
- Wilson disease (ATP7B) is the contrasting disorder: copper accumulates in the liver, brain and eyes (Kayser–Fleischer rings). [4]

**Mechanism.** ATP7A moves copper out of intestinal cells into the blood and loads copper into enzymes. When it fails, the body is copper-deficient even though copper is absorbed into the gut lining. Copper enzymes lose activity: weak cross-links in collagen and elastin weaken connective tissue, and impaired copper enzymes in the brain contribute to neurodegeneration.

**Quick.** Menkes: X-linked ATP7A defect → copper trapped in gut and kidney, deficient in brain and other tissues → copper enzymes (e.g. lysyl oxidase) fail. Boy, normal for 6–12 weeks, then feeding problems, seizures, hypotonia, sparse kinky hair; low serum copper.

**Detailed**

> The connective tissue features come from reduced lysyl oxidase activity: collagen and elastin are poorly cross-linked, so skin and joints are lax and vessels weak. The milder occipital horn syndrome shows these connective tissue features with less neurologic disease.

> Diagnosis uses low serum copper with genetic testing; because treatment helps only if started very early, recognition in the first months matters. Wilson disease is the mirror image: copper is retained in the liver and later deposited in brain and cornea.

**Misconception.** Menkes (ATP7A, tissue copper deficiency) is the opposite of Wilson disease (ATP7B, copper overload in liver, brain and eyes).

**Takeaway.** Infant boy, kinky hair, seizures, hypotonia, low serum copper = Menkes (ATP7A); copper enzymes such as lysyl oxidase fail.

- **MCQ** `mol-menkes:mcq1` · mechanism → **mechanism** · difficulty 3 · `bc-collagen.menkes`
  - Children with ATP7A-related copper transport disorders often have loose skin and lax joints. Reduced activity of which enzyme best explains these connective tissue features?
  - ◻️ A. Lysyl hydroxylase — _Lysyl hydroxylase defects cause kyphoscoliotic EDS; it is not a copper enzyme._
  - ◻️ B. Procollagen N-proteinase — _Its deficiency causes dermatosparaxis EDS; it is not copper-dependent._
  - ◻️ C. Cytochrome c oxidase — _A copper enzyme, but its loss affects energy metabolism (contributing to neurologic disease), not collagen cross-linking._
  - ✅ D. Lysyl oxidase
  - ◻️ E. Prolyl hydroxylase — _Prolyl hydroxylase needs vitamin C and iron, not copper; its failure causes scurvy._
  - Explanation: Lysyl oxidases are copper-dependent and cross-link collagen and elastin; without copper, connective tissue is weak and lax.
- **MCQ** `mol-menkes:mcq2` · identification → **recognition** · difficulty 2 · `bc-collagen.menkes`
  - A 3-month-old boy was well for his first 8 weeks, then developed poor feeding and seizures. He is hypotonic. His scalp hair is sparse, short, light-colored and coarse. Serum copper is low. Which gene is most likely affected?
  - ◻️ A. HPRT1 — _HPRT1 deficiency causes hyperuricemia, dystonia and self-injury, not low copper._
  - ◻️ B. COL1A1 — _COL1A1 defects cause fractures and blue-grey sclerae._
  - ✅ C. ATP7A
  - ◻️ D. ATP7B — _ATP7B causes Wilson disease, with copper overload presenting in childhood to adulthood._
  - ◻️ E. SLC39A4 — _This zinc transporter is defective in acrodermatitis enteropathica._
  - Explanation: Infant boy, normal for weeks, then seizures, hypotonia, kinky hair and low copper = Menkes disease (ATP7A).
- **MCQ** `mol-menkes:mcq3` · comparison → **application** · difficulty 4 · `bc-collagen.menkes`
  - Which copper distribution distinguishes Menkes disease from Wilson disease?
  - ◻️ A. Menkes: copper overload in liver and brain; Wilson: copper trapped in intestinal cells — _This reverses the two disorders._
  - ✅ B. Menkes: copper stuck in gut and kidney, low serum; Wilson: liver overload
  - ◻️ C. Both: high serum copper with low tissue copper — _Serum copper is low in Menkes disease._
  - ◻️ D. Menkes: normal copper distribution with defective tyrosinase only — _Menkes reduces many copper enzymes because copper delivery fails._
  - ◻️ E. Wilson: copper deficiency in liver with kinky hair — _Wilson disease is copper overload, and kinky hair is a Menkes feature._
  - Explanation: ATP7A failure traps copper in gut and kidney and starves tissues; ATP7B failure retains copper in the liver, later spilling into brain and cornea.
- **True/false** `mol-menkes:tf1` · recall → **recognition** · difficulty 2 · `bc-collagen.menkes`: Menkes disease is caused by copper overload in the liver. → **False**. Menkes causes tissue copper deficiency (copper retained in gut and kidney); Wilson disease causes hepatic copper overload.
- **Crossword** `mol-menkes:clue1` · recall → **recognition** · difficulty 1 · `bc-collagen.menkes`: Metal poorly distributed to tissues in Menkes disease → **COPPER**

---

## Fibrillin, elastin and Marfan syndrome (`mol-marfan-elastin`)

Objectives: `bc-collagen.marfan`, `bc-collagen.elastin`

**Citations**

1. MedlinePlus Genetics: Marfan syndrome — <https://medlineplus.gov/genetics/condition/marfan-syndrome/> — checked: full-text
2. GeneReviews: FBN1-Related Marfan Syndrome — PMID 20301510; NBK1335 — <https://www.ncbi.nlm.nih.gov/books/NBK1335/> — checked: summary
3. Schmelzer CEH, Hedtke T, Heinz A. Unique molecular networks: formation and role of elastin cross-links. IUBMB Life 2020 — PMID 31834666 — <https://pubmed.ncbi.nlm.nih.gov/31834666/> — checked: summary
4. Targeting the lysyl oxidases in tumour desmoplasia. Biochem Soc Trans 2019 — PMID 31754702 — <https://pubmed.ncbi.nlm.nih.gov/31754702/> — checked: summary
5. MedlinePlus Genetics: ELN gene — <https://medlineplus.gov/genetics/gene/eln/> — checked: full-text
6. GeneReviews: Vascular Ehlers-Danlos Syndrome — PMID 20301667; NBK1494 — <https://www.ncbi.nlm.nih.gov/books/NBK1494/> — checked: summary

**Facts** [supporting citations]

- Elastic fibers give elasticity and resilience to blood vessels, lungs, skin and ligaments; they consist of a cross-linked elastin core and a mantle of fibrillin microfibrils. [3]
- Elastin cross-linking starts when lysyl oxidases (copper-dependent) oxidatively deaminate lysine residues to allysine, which then condense into cross-links. [3, 4]
- The ELN (elastin) gene lies in the chromosome 7 region deleted in Williams syndrome, which includes cardiovascular abnormalities. [5]
- Marfan syndrome (FBN1, fibrillin-1; autosomal dominant; at least 25% new variants) has highly variable severity. [1, 2]
- Fibrillin-1 microfibrils bind growth factors (such as TGF-β) and release them in a controlled way; reduced microfibrils leave excess growth factor activity and decreased tissue elasticity. [1]
- Ocular: myopia (>50%), ectopia lentis (about 60%), increased risk of retinal detachment, glaucoma and early cataract. Skeletal: long limbs (dolichostenomelia), pectus excavatum or carinatum, scoliosis, joint laxity. Cardiovascular: dilatation of the aorta at the sinuses of Valsalva (risk of dissection), mitral valve prolapse. [2, 1]

**Mechanism.** Fibrillin-1 forms microfibrils that scaffold elastic fibers and hold growth factors such as TGF-β in reserve. In Marfan syndrome, fewer functional microfibrils weaken elastic tissues (aortic wall, lens zonules, valves, ligaments) and release excess growth factor activity that contributes to overgrowth and degeneration. The aortic root, under the highest pressure, dilates and can dissect.

**Quick.** Elastic fibers: elastin core cross-linked via lysyl oxidase (lysine → allysine) + fibrillin microfibrils. Marfan (AD, FBN1): long limbs, pectus, scoliosis, myopia, ectopia lentis (~60%), mitral valve prolapse, aortic root dilation and dissection; excess TGF-β activity.

**Detailed**

> Elastin's ability to stretch and recoil depends on its cross-links, which form after lysyl oxidases convert lysine side chains to reactive aldehydes (allysine). Because lysyl oxidases need copper, copper deficiency states weaken elastic tissue as well as collagen.

> The main cause of early death in Marfan syndrome is aortic dissection or rupture from dilatation at the sinuses of Valsalva. Severity varies widely, even within families, and features accumulate with age, so the diagnosis rests on combining ocular, skeletal, cardiovascular and family findings.

**Misconception.** Lens dislocation is characteristic but not universal in Marfan syndrome (about 60%), so its absence does not exclude the diagnosis.

**Takeaway.** Fibrillin-1 scaffolds elastic fibers and holds TGF-β; Marfan = long limbs + ectopia lentis (often) + MVP + aortic root dilation and dissection.

- **MCQ** `mol-marfan-elastin:mcq1` · mechanism → **mechanism** · difficulty 4 · `bc-collagen.marfan`
  - How does loss of fibrillin-1 contribute to tissue disease in Marfan syndrome beyond weakening elastic fibers?
  - ◻️ A. Type III collagen synthesis is lost — _That describes vascular Ehlers–Danlos syndrome._
  - ◻️ B. Collagen hydroxylation stops in the aortic media — _Hydroxylation depends on vitamin C, not fibrillin._
  - ◻️ C. Neutrophil elastase is no longer inhibited — _That is the mechanism of α1-antitrypsin deficiency._
  - ◻️ D. Lysyl oxidase becomes copper-deficient — _Copper delivery is impaired in Menkes disease, not Marfan syndrome._
  - ✅ E. Less TGF-β is sequestered, so its activity rises
  - Explanation: Fibrillin-1 microfibrils normally sequester growth factors; with fewer microfibrils, excess TGF-β activity contributes to the phenotype.
- **MCQ** `mol-marfan-elastin:mcq2` · identification → **recognition** · difficulty 3 · `bc-collagen.marfan`
  - A 19-year-old, 203 cm tall with long limbs and a sunken sternum, has myopia and dislocated lenses. A mid-systolic click is heard. Echocardiography shows dilatation of the aorta at the sinuses of Valsalva. His father died suddenly at 40. What is the most likely inheritance and gene?
  - ◻️ A. X-linked, ATP7A — _Menkes disease presents in infancy with neurodegeneration and kinky hair._
  - ◻️ B. Autosomal dominant, COL3A1 — _Vascular EDS causes thin skin and arterial or bowel rupture, not lens dislocation and tall stature._
  - ✅ C. Autosomal dominant, FBN1
  - ◻️ D. Autosomal dominant, COL2A1 — _Stickler syndrome causes myopia and retinal detachment, but not this skeletal overgrowth and aortic root dilation._
  - ◻️ E. Autosomal dominant, FGFR3 — _FGFR3 activation causes achondroplasia (short stature)._
  - Explanation: Long limbs, pectus, myopia and ectopia lentis, mitral valve prolapse and aortic root dilation = Marfan syndrome (AD, FBN1).
- **MCQ** `mol-marfan-elastin:mcq3` · mechanism → **mechanism** · difficulty 3 · `bc-collagen.elastin`
  - Which step starts the formation of elastin cross-links, and which cofactor does its enzyme require?
  - ◻️ A. Proline hydroxylation by prolyl hydroxylase (vitamin C) — _This stabilizes the collagen triple helix; it does not start elastin cross-linking._
  - ◻️ B. Formation of disulfide bonds by protein disulfide isomerase — _Elastin cross-links are lysine-derived, not disulfides._
  - ◻️ C. Glycosylation of hydroxylysine in the Golgi — _This is a collagen modification._
  - ◻️ D. Addition of mannose-6-phosphate — _Mannose-6-phosphate targets lysosomal enzymes._
  - ✅ E. Lysine → allysine by lysyl oxidase (copper)
  - Explanation: Lysyl oxidases (copper-dependent) convert lysine to allysine, which condenses into elastin cross-links.
- **MCQ** `mol-marfan-elastin:mcq4` · comparison → **application** · difficulty 4 · `bc-collagen.marfan`
  - A young adult has an aortic dissection. Which combination of findings favors Marfan syndrome over vascular Ehlers–Danlos syndrome?
  - ◻️ A. Extensive bruising with a characteristic thin-lipped face — _Bruising and these facial features are typical of vascular EDS._
  - ◻️ B. Uterine rupture during a previous pregnancy — _Uterine fragility is a vascular EDS feature._
  - ◻️ C. Spontaneous rupture of a medium-sized artery without aortic root dilation — _Medium-artery rupture without aortic root enlargement fits vascular EDS._
  - ◻️ D. Thin, translucent skin with visible veins and a prior colon perforation — _These point to vascular EDS (type III collagen)._
  - ✅ E. Long limbs, pectus, ectopia lentis, aortic root dilation
  - Explanation: Marfan: skeletal overgrowth, lens and aortic root disease. Vascular EDS: thin skin, bruising, arterial, bowel and uterine fragility.
- **True/false** `mol-marfan-elastin:tf1` · recall → **recognition** · difficulty 2 · `bc-collagen.marfan`: Every person with Marfan syndrome has dislocated lenses. → **False**. Ectopia lentis occurs in about 60% of affected individuals; myopia is even more common.
- **True/false** `mol-marfan-elastin:tf2` · recall → **recognition** · difficulty 2 · `bc-collagen.elastin`: Lysyl oxidase, which starts elastin cross-linking, is a copper-dependent enzyme. → **True**. Correct: copper deficiency (e.g. Menkes disease) therefore weakens elastic tissue.
- **Crossword** `mol-marfan-elastin:clue1` · recall → **recognition** · difficulty 1 · `bc-collagen.marfan`: Microfibril protein defective in Marfan syndrome → **FIBRILLIN**
- **Crossword** `mol-marfan-elastin:clue2` · recall → **recognition** · difficulty 2 · `bc-collagen.elastin`: Aldehyde formed from lysine by lysyl oxidase during elastin cross-linking → **ALLYSINE**

---

## Medical Connections: complete puzzles (16 tiles, verified single solution)

### DNA repair machinery · `cx:dna-repair-machinery` · identification → **recognition** · difficulty 3 · `bc-dna-repair.ssb-pathways`, `bc-dna-repair.lynch`, `bc-dna-repair.dsb-pathways`, `bc-dna-repair.nhej-scid`, `bc-dna-repair.xp`, `bc-dna-repair.mutyh`

- **Nucleotide excision repair** (tier 2): XPA, XPC, ERCC2, Thymine dimer — NER removes bulky UV lesions; XPA, XPC and ERCC2 are XP genes.
- **Base excision repair** (tier 3): Uracil-DNA glycosylase, MUTYH, AP endonuclease, 8-Oxoguanine — BER removes single damaged bases (uracil, 8-oxoguanine mispairs) via glycosylases and AP endonuclease.
- **Mismatch repair** (tier 1): MLH1, MSH2, MSH6, PMS2 — Mismatch repair genes; germline variants cause Lynch syndrome.
- **Nonhomologous end joining** (tier 4): Ku70, DNA-PKcs, Artemis, DNA ligase IV — NHEJ rejoins double-strand breaks and V(D)J segments; defects cause radiosensitive SCID.

Red herrings checked by the solver (no alternative full solution): “Autosomal recessive cancer predisposition genes”; “Defective in radiosensitive SCID”; “DNA glycosylases”; “Lesions on a DNA base”.

### Nucleotides and the drugs that target them · `cx:nucleotides-and-drugs` · identification → **recognition** · difficulty 2 · `bc-nucleotide-synthesis.structure`, `bc-nucleotide-synthesis.drug-targets`, `bc-purine-salvage.pathway`

- **Purine bases** (tier 1): Adenine, Guanine, Hypoxanthine, Xanthine — Two-ring bases; hypoxanthine and xanthine are purine breakdown intermediates.
- **Pyrimidine rings** (tier 2): Cytosine, Uracil, Thymine, Orotate — One-ring bases; orotate is the pyrimidine ring made before attachment to PRPP.
- **Inhibit an enzyme of nucleotide synthesis** (tier 3): Methotrexate, Hydroxyurea, Leflunomide, Mycophenolate — DHFR, ribonucleotide reductase, dihydroorotate dehydrogenase and IMP dehydrogenase.
- **Purine salvage or breakdown enzymes** (tier 4): HGPRT, Xanthine oxidase, Adenosine deaminase, Purine nucleoside phosphorylase — HGPRT salvages; ADA, PNP and xanthine oxidase break purines down toward uric acid.

Red herrings checked by the solver (no alternative full solution): “Immunosuppressive drugs”; “Deficiency causes combined immunodeficiency”; “Substrates of xanthine oxidase”; “Bases found in DNA”; “Bases found in RNA”.

### Where each collagen lives · `cx:collagen-types` · identification → **recognition** · difficulty 3 · `bc-collagen.types`, `bc-collagen.eds`

- **Type I collagen** (tier 1): Bone, Tendon, Sclera, Osteogenesis imperfecta — Type I is abundant in bone, skin, tendon and sclera; defective in osteogenesis imperfecta.
- **Type II collagen** (tier 2): Vitreous humor, Nucleus pulposus, Growth plate, Stickler syndrome — Type II is found in cartilage, growth plates, vitreous and nucleus pulposus; COL2A1 causes Stickler syndrome.
- **Type III collagen** (tier 3): Blood vessel wall, Intestinal wall, Vascular Ehlers–Danlos syndrome, COL3A1 — Type III is prominent in vessel and intestinal walls; COL3A1 defects cause vascular EDS.
- **Type IV collagen** (tier 4): Glomerular basement membrane, Lens capsule, Alport syndrome, COL4A5 — Type IV forms basement membranes in kidney, eye and inner ear; COL4A5 causes X-linked Alport syndrome.

Red herrings checked by the solver (no alternative full solution): “Parts of the eye”; “Collagen genes”; “Inherited syndromes”; “Skeletal tissues”.

## Connections category bank (builder input, not complete games)

- `grp:dna-repair-defects` **DNA repair defects**: Xeroderma pigmentosum, Lynch syndrome, Fanconi anemia, Bloom syndrome, MUTYH polyposis. Each results from failed DNA repair or genome maintenance: nucleotide excision (XP), mismatch (Lynch), interstrand crosslink (Fanconi), RecQ helicase (Bloom) and base excision (MUTYH).
- `grp:antimetabolites` **Inhibit an enzyme of nucleotide synthesis**: Methotrexate, 5-Fluorouracil, Hydroxyurea, Leflunomide, Mycophenolate. Methotrexate (DHFR), 5-FU (thymidylate synthase), hydroxyurea (ribonucleotide reductase), leflunomide (dihydroorotate dehydrogenase), mycophenolate (IMP dehydrogenase).
- `grp:connective-protein-defects` **Structural connective tissue protein defects**: Vascular Ehlers–Danlos syndrome, Marfan syndrome, Alport syndrome, Menkes disease, Osteogenesis imperfecta. Type III collagen (vascular EDS), fibrillin-1 (Marfan), type IV collagen (Alport), copper-dependent cross-linking (Menkes), type I collagen (OI).
