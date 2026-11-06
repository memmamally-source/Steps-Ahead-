# Biochemistry Batch 2 — Molecular biochemistry (continued): medical review packet

Status: **draft, AI-drafted, not medically reviewed.** Reviewer: mark each concept approved, needs changes or rejected, with notes. A citation alone is not approval.

## How to read this packet

- Options are listed in their **stored** order (deterministically shuffled per item, with opaque ids). Learners see a fresh random order on every presentation; answers are checked by option id, never by position. ✅ marks the correct option.
- Each item shows its **reasoning task** and the **depth** that follows from it: recall/identification → recognition; mechanism → mechanism; interpretation/prediction/comparison/multistep → application. A vignette that only asks for the classic diagnosis is identification (recognition), not application. Application items list the inferential steps they require.
- Facts are split into **verified** (a supporting source was read in full text or as a published abstract/summary and states the claim) and **awaiting direct confirmation** (reasoned from pathway logic, or supported only by sources checked for existence). Awaiting facts block approval in the validator until a reviewer confirms them against a source.
- Citation “checked”: **full-text** (page read), **summary** (published abstract or summary read), **existence** (record confirmed but full text not accessible).
- Mastery: true/false and crossword answers count as weaker recognition evidence; repeating an item within 7 days adds little; “strong” needs at least 3 distinct items, including a mechanism or application item.
- Connections puzzles are checked for a single solution against the **global category catalog** (every bank category, every curated category and decoy, and a catalog of medically plausible groupings such as inheritance patterns, drug classes and toxin sources), not only against their own decoys. The daily builder applies the same check to every board it generates.

## Summary

| Measure | Value |
|---|---|
| Concepts | 20 |
| Objectives taught | 26 |
| Facts verified / awaiting direct confirmation | 98 / 4 |
| MCQs / true-false / crossword clues | 45 / 28 / 32 |
| Mechanism Lab sequences / Match Up sets | 5 / 6 |
| Complete Connections puzzles / category groups / Mystery Patient cases | 1 / 3 / 2 |
| Items: recall | 72 |
| Items: identification | 5 |
| Items: mechanism | 21 |
| Items: interpretation | 7 |
| Items: prediction | 7 |
| Items: comparison | 5 |
| Items: multistep | 5 |

## Chromatin structure and epigenetic control (`mol-chromatin`)

Objectives: `bc-chromatin-structure.nucleosome`, `bc-chromatin-structure.epigenetic`

**Citations**

1. OpenStax Biology 2e, 16.3 Eukaryotic Epigenetic Gene Regulation — <https://openstax.org/books/biology-2e/pages/16-3-eukaryotic-epigenetic-gene-regulation> — checked: full-text
2. Tamaru H. Confining euchromatin/heterochromatin territory: jumonji crosses the line. Genes Dev 2010 — PMID 20634313 — <https://pubmed.ncbi.nlm.nih.gov/20634313/> — checked: summary
3. Hiragami K, Festenstein R. Heterochromatin protein 1: a pervasive controlling influence. Cell Mol Life Sci 2005 — PMID 16261261 — <https://pubmed.ncbi.nlm.nih.gov/16261261/> — checked: summary
4. Liu X et al. Histone acetylation and plant development (HAT/HDAC review). Enzymes 2016 — PMID 27776781 — <https://pubmed.ncbi.nlm.nih.gov/27776781/> — checked: summary

**Verified facts** [supporting citations]

- DNA is wound around histone proteins to form nucleosomes; chemical groups (acetyl, methyl, phosphate) are added to histone tails without changing the DNA sequence. [1]
- Heterochromatin is highly condensed, gene-poor and transcriptionally silent; euchromatin is less condensed and accessible to transcription. [2]
- Histones are positively charged and DNA is negatively charged; acetylation makes histone tails less positive, loosening DNA binding and favoring transcription. [1]
- Histone acetyltransferases and histone deacetylases add and remove acetyl groups; hypoacetylation compacts chromatin and represses genes. [4, 1]
- DNA methylation occurs at CpG islands; methylated genes are usually silenced, and hypermethylated DNA with deacetylated histones is tightly coiled and inactive. [1]
- Heterochromatin protein 1 binds histone H3 methylated on lysine 9, a mark of silent chromatin. [3]

**Mechanism.** Transcription needs physical access to DNA. Acetyl groups neutralize the positive charge of histone tails, loosening their grip on DNA so transcription factors and RNA polymerase can bind. Methylated CpG islands and deacetylated histones do the opposite: chromatin compacts into heterochromatin and the promoter is silenced, while the DNA sequence stays the same.

**Quick.** Nucleosome = DNA wrapped on a histone core. Heterochromatin: condensed, silent. Euchromatin: open, active. Acetylation loosens chromatin (on); deacetylation and CpG methylation compact it (off). The DNA sequence never changes.

**Detailed**

> Each nucleosome is a stretch of DNA wrapped around a core of histones, with linker DNA between cores. Histone tails protrude from the core and carry chemical marks that change how tightly the DNA is held and which proteins are recruited.

> Gene activity follows chromatin state. Acetylation by histone acetyltransferases opens chromatin; histone deacetylases remove the marks and close it. Methylation of cytosines in CpG islands near promoters, together with deacetylated histones, produces tightly coiled, transcriptionally inactive DNA, and histone H3 lysine 9 methylation recruits heterochromatin protein 1.

**Misconception.** Epigenetic silencing does not mutate the gene: the sequence is intact, which is why silenced genes can, in principle, be reactivated by removing methylation or restoring acetylation.

**Takeaway.** Acetylation = open and active; CpG methylation + deacetylation = closed and silent; the sequence is unchanged.

- **MCQ** `mol-chromatin:mcq1` · mechanism → **mechanism** · difficulty 3 · `bc-chromatin-structure.epigenetic`
  - A drug that inhibits histone deacetylases is added to cultured cells. What is the expected direct effect on chromatin at many promoters?
  - ◻️ A. The DNA sequence of silenced genes is altered — _Epigenetic changes alter packaging and protein binding, not the base sequence._
  - ◻️ B. CpG islands become more heavily methylated — _HDAC inhibition acts on histone acetyl groups; it does not add methyl groups to cytosines._
  - ◻️ C. Histones gain positive charge and bind DNA tighter — _Retained acetyl groups neutralize positive charge, so DNA binding loosens rather than tightens._
  - ✅ D. Histone tails stay acetylated and chromatin opens
  - ◻️ E. Nucleosomes are permanently removed from DNA — _Acetylation loosens DNA–histone contact; nucleosomes remain and can be re-compacted._
  - Explanation: Deacetylases remove acetyl groups; blocking them leaves tails acetylated, less positive and loosely bound to DNA, so chromatin opens.
- **MCQ** `mol-chromatin:mcq2` · recall → **recognition** · difficulty 1 · `bc-chromatin-structure.nucleosome`
  - Which description fits heterochromatin?
  - ◻️ A. Chromatin marked mainly by histone acetylation — _Acetylation is a mark of open, active chromatin, not heterochromatin._
  - ✅ B. Condensed, gene-poor and transcriptionally silent
  - ◻️ C. DNA free of histones, ready for replication — _Heterochromatin is the most tightly histone-packed state, not histone-free DNA._
  - ◻️ D. Open, gene-rich and actively transcribed — _This describes euchromatin._
  - ◻️ E. Loosely packed DNA found only in dividing cells — _Heterochromatin is compact and present in non-dividing cells too._
  - Explanation: Heterochromatin is the compact, silent state; euchromatin is the open, transcribed state.
- **True/false** `mol-chromatin:tf1` · recall → **recognition** · difficulty 1 · `bc-chromatin-structure.epigenetic`: Acetylation of histone tails tends to loosen chromatin and favor transcription. → **True**. Correct: acetyl groups reduce the positive charge of histones, so they hold the negatively charged DNA less tightly.
- **True/false** `mol-chromatin:tf2` · recall → **recognition** · difficulty 1 · `bc-chromatin-structure.nucleosome`: Euchromatin is the condensed, transcriptionally inactive form of chromatin. → **False**. That describes heterochromatin; euchromatin is open and transcriptionally accessible.
- **Crossword** `mol-chromatin:clue1` · recall → **recognition** · difficulty 1 · `bc-chromatin-structure.nucleosome`: Bead of DNA wound around a histone core → **NUCLEOSOME**
- **Crossword** `mol-chromatin:clue2` · recall → **recognition** · difficulty 2 · `bc-chromatin-structure.nucleosome`: Condensed, transcriptionally silent chromatin → **HETEROCHROMATIN**

---

## Epigenetic silencing in disease: X-inactivation, imprinting and fragile X (`mol-epigenetic-disease`)

Objectives: `bc-chromatin-structure.epigenetic-disease`

**Citations**

1. OpenStax Biology 2e, 13.2 Chromosomal Basis of Inherited Disorders — <https://openstax.org/books/biology-2e/pages/13-2-chromosomal-basis-of-inherited-disorders> — checked: full-text
2. MedlinePlus Genetics: Prader-Willi syndrome — <https://medlineplus.gov/genetics/condition/prader-willi-syndrome/> — checked: full-text
3. MedlinePlus Genetics: Angelman syndrome — <https://medlineplus.gov/genetics/condition/angelman-syndrome/> — checked: full-text
4. MedlinePlus Genetics: Fragile X syndrome — <https://medlineplus.gov/genetics/condition/fragile-x-syndrome/> — checked: full-text
5. Liu XS et al. Rescue of fragile X syndrome neurons by DNA methylation editing of the FMR1 gene. Cell 2018 — PMID 29456084 — <https://pubmed.ncbi.nlm.nih.gov/29456084/> — checked: summary
6. OpenStax Biology 2e, 16.3 Eukaryotic Epigenetic Gene Regulation — <https://openstax.org/books/biology-2e/pages/16-3-eukaryotic-epigenetic-gene-regulation> — checked: full-text

**Verified facts** [supporting citations]

- Early in female development, one X chromosome in each cell condenses into a quiescent Barr body; every X except one is inactivated, so individuals with extra X chromosomes have extra Barr bodies. [1]
- In Prader–Willi syndrome the genes of the region are missing from the paternal chromosome 15 while the maternal copies are normally turned off: about 70% of cases are paternal deletions and about 25% are maternal uniparental disomy. [2]
- In neurons only the maternal copy of UBE3A is active; Angelman syndrome results when the maternal copy is lost (deletion, UBE3A variant) or, less often, from paternal uniparental disomy. [3]
- Fragile X syndrome is caused by expansion of the CGG repeat in FMR1 to more than 200 copies, which silences the gene. [4]
- The expanded CGG repeat is hypermethylated and the FMR1 promoter becomes heterochromatin; experimental demethylation reactivates the gene. [5]
- Methylated genes are usually silenced, and parental and environmental factors can alter methylation patterns. [6]

**Mechanism.** In each condition the gene is present but silent. X-inactivation silences a whole chromosome to equalize dosage. Imprinting silences one parent’s copy, so losing the only active copy (from deletion or uniparental disomy) removes the gene’s function entirely. In fragile X, the expanded CGG repeat becomes methylated and the FMR1 promoter turns into heterochromatin, so no protein is made.

**Quick.** Barr body = silenced extra X. Imprinting: Prader–Willi = no active paternal 15q genes (deletion ~70%, maternal UPD ~25%); Angelman = no active maternal UBE3A. Fragile X: CGG >200 → FMR1 hypermethylated and silenced.

**Detailed**

> Dosage compensation inactivates all but one X chromosome per cell; the condensed X is visible as a Barr body. A cell from a person with 47,XXY therefore has one Barr body, and 47,XXX has two.

> Imprinted genes are expressed from only one parental copy. Because the maternal Prader–Willi region is normally silent, losing the paternal copy by deletion or inheriting two maternal chromosomes 15 (uniparental disomy) gives the same result. The reverse logic applies to Angelman syndrome and maternal UBE3A. Methylation testing detects both mechanisms because it reads the parent-specific pattern.

> In fragile X, a full mutation (>200 CGG repeats) is hypermethylated and the promoter adopts a heterochromatin state, so FMR1 is not transcribed. The phenotype comes from loss of the gene product, not from a change in the protein sequence.

**Misconception.** Uniparental disomy causes Prader–Willi or Angelman syndrome without any deletion: two maternal copies of chromosome 15 still leave no active paternal genes, and two paternal copies leave no active maternal UBE3A.

**Takeaway.** Silencing can cause disease as surely as deletion: ask which copy is active, and whether it has been lost or turned off.

- **MCQ** `mol-epigenetic-disease:mcq1` · interpretation → **application** · difficulty 4 · `bc-chromatin-structure.epigenetic-disease`
  - A hypotonic infant with poor feeding has a normal chromosome 15 copy number on microarray, but methylation testing of 15q11–q13 shows only the maternal pattern. Which mechanism best explains the result?
  - ◻️ A. Expansion of a CGG repeat on the X chromosome — _CGG expansion silences FMR1 in fragile X and does not change chromosome 15 methylation._
  - ◻️ B. Deletion of the paternal 15q11–q13 region — _A deletion would reduce copy number on microarray; this result shows normal copy number._
  - ✅ C. Two maternal chromosome 15s, so no active paternal genes
  - ◻️ D. Two paternal chromosome 15s — _Paternal uniparental disomy would show only the paternal pattern and is a cause of Angelman syndrome._
  - ◻️ E. Loss of the maternal UBE3A copy — _Loss of maternal UBE3A causes Angelman syndrome and would leave a paternal pattern present._
  - Steps: (1) Normal copy number rules out a deletion. (2) Only the maternal methylation pattern means both chromosome 15s came from the mother. (3) The maternal copies of the region are normally silent, so no active genes remain → Prader–Willi syndrome by maternal uniparental disomy.
  - Explanation: Normal copy number excludes a deletion; an all-maternal methylation pattern means maternal uniparental disomy, so no active paternal genes (Prader–Willi).
- **MCQ** `mol-epigenetic-disease:mcq2` · mechanism → **mechanism** · difficulty 3 · `bc-chromatin-structure.epigenetic-disease`
  - Why does a full mutation (more than 200 CGG repeats) in FMR1 cause fragile X syndrome?
  - ◻️ A. The repeat adds a polyglutamine tract to the protein — _CGG repeats in fragile X lie in the 5′ untranslated region and are not translated into polyglutamine; that is the CAG mechanism of Huntington disease._
  - ◻️ B. The repeat prevents X-inactivation of the affected X — _Fragile X silencing is gene-specific methylation, not a failure of X-inactivation._
  - ✅ C. The repeat is methylated and the promoter is silenced
  - ◻️ D. The repeat creates a premature stop codon — _The repeat lies upstream of the coding sequence; the problem is that the gene is not transcribed at all._
  - ◻️ E. The repeat deletes the X chromosome — _The chromosome is intact; only the gene is silenced._
  - Explanation: Full-mutation CGG repeats are hypermethylated, the FMR1 promoter becomes heterochromatin and no FMR1 protein is made.
- **MCQ** `mol-epigenetic-disease:mcq3` · prediction → **application** · difficulty 3 · `bc-chromatin-structure.epigenetic-disease`
  - Cells from a person with karyotype 47,XXX are examined. How many Barr bodies are expected per cell, and why?
  - ◻️ A. One, because only one X is ever inactivated — _Inactivation is not limited to one X: every X beyond the first is silenced._
  - ✅ B. Two, because all but one X is inactivated
  - ◻️ C. One, because the extra X is deleted early — _Extra X chromosomes are silenced as Barr bodies, not deleted._
  - ◻️ D. Three, because every X condenses in females — _One X always remains active in each cell._
  - ◻️ E. None, because extra X chromosomes are lost — _The extra X persists in the karyotype and is inactivated, not lost._
  - Steps: (1) Each cell keeps exactly one active X. (2) Every additional X is condensed into a Barr body. (3) Three X chromosomes − one active = two Barr bodies.
  - Explanation: Dosage compensation keeps one X active and condenses the rest: three X chromosomes → two Barr bodies.
- **True/false** `mol-epigenetic-disease:tf1` · recall → **recognition** · difficulty 2 · `bc-chromatin-structure.epigenetic-disease`: In Angelman syndrome the disease results from loss of function of the maternal copy of UBE3A in neurons. → **True**. Correct: only the maternal UBE3A is active in neurons, so losing it leaves no active copy.
- **True/false** `mol-epigenetic-disease:tf2` · recall → **recognition** · difficulty 2 · `bc-chromatin-structure.epigenetic-disease`: In fragile X syndrome, the FMR1 protein is produced but contains an expanded amino acid repeat. → **False**. The full mutation silences FMR1 by methylation, so little or no protein is made.
- **Crossword** `mol-epigenetic-disease:clue1` · recall → **recognition** · difficulty 2 · `bc-chromatin-structure.epigenetic-disease`: Parent-of-origin silencing of one gene copy → **IMPRINTING**
- **Crossword** `mol-epigenetic-disease:clue2` · recall → **recognition** · difficulty 2 · `bc-chromatin-structure.epigenetic-disease`: Condensed inactive X seen in a cell nucleus → **BARRBODY**
- **Match Up** `match:epigenetic-silencing` · recall → **recognition** · difficulty 2 · `bc-chromatin-structure.epigenetic`, `bc-chromatin-structure.epigenetic-disease`: Silenced, not deleted. Match each finding to its epigenetic explanation.
  - Barr body ↔ Condensed, inactivated extra X chromosome
  - Prader–Willi syndrome ↔ No active paternal 15q11–q13 genes
  - Angelman syndrome ↔ No active maternal UBE3A in neurons
  - Fragile X syndrome ↔ Hypermethylated CGG expansion silences FMR1
  - Histone acetylation ↔ Loosens chromatin and favors transcription
  - CpG island methylation ↔ Silences the adjacent promoter
  - Each disorder reflects loss of an active gene copy without (necessarily) a change in sequence: inactivation, imprinting or methylation-driven silencing.

---

## Orotic aciduria: OTC deficiency vs UMP synthase deficiency (`mol-otc-vs-orotic`)

Objectives: `bc-nucleotide-synthesis.otc-vs-orotic`

**Citations**

1. MedlinePlus Genetics: Ornithine transcarbamylase deficiency — <https://medlineplus.gov/genetics/condition/ornithine-transcarbamylase-deficiency/> — checked: full-text
2. Beaudry MA et al. Chronic hyperammonemia with orotic aciduria: evidence of pyrimidine pathway stimulation. Diabete Metab 1975 — PMID 1234064 — <https://pubmed.ncbi.nlm.nih.gov/1234064/> — checked: summary
3. Staretz-Chacham O et al. Hereditary orotic aciduria identified by newborn screening. Front Genet 2023 — PMID 36999056 — <https://pubmed.ncbi.nlm.nih.gov/36999056/> — checked: summary
4. Al Absi HS et al. Hereditary orotic aciduria (HOA): a novel UMPS mutation. Mol Genet Metab Rep 2021 — PMID 33489760 — <https://pubmed.ncbi.nlm.nih.gov/33489760/> — checked: summary

**Verified facts** [supporting citations]

- Ornithine transcarbamylase (OTC) deficiency is an X-linked urea cycle disorder that causes hyperammonemia; the severe neonatal form usually affects males. [1]
- In hyperammonemia with orotic aciduria from a partial urea cycle block, orotic acid excretion rises with ammonia and reflects stimulation of the pyrimidine pathway; red cell orotate phosphoribosyltransferase and orotidine decarboxylase (UMP synthase) activities are normal. [2]
- Hereditary orotic aciduria is a UMP synthase deficiency with megaloblastic anemia that does not respond to vitamin B12 or folate. [3, 4]

**Awaiting direct source confirmation** (reasoned or existence-only; must be confirmed before approval)

- In OTC deficiency, carbamoyl phosphate that cannot enter the urea cycle spills into pyrimidine synthesis, producing orotic acid without impairing UMP formation. [2]

**Mechanism.** Orotic acid can accumulate for two opposite reasons. In OTC deficiency, mitochondrial carbamoyl phosphate cannot combine with ornithine and overflows into the cytosolic pyrimidine pathway, so orotate is overproduced while UMP synthase works normally: ammonia rises, blood count is normal. In hereditary orotic aciduria, UMP synthase itself is defective, so orotate cannot be converted to UMP: ammonia is normal and pyrimidine-starved marrow becomes megaloblastic.

**Quick.** Orotic aciduria + hyperammonemia, normal blood count → OTC deficiency (urea cycle overflow; X-linked). Orotic aciduria + megaloblastic anemia unresponsive to B12/folate, no hyperammonemia → UMP synthase deficiency.

**Detailed**

> Carbamoyl phosphate made in the mitochondrion by carbamoyl phosphate synthetase I normally combines with ornithine via OTC. When OTC is deficient, carbamoyl phosphate leaks to the cytosol and enters pyrimidine synthesis beyond the usual control point, so orotate is overproduced. UMP synthase is intact, so nucleotide supply and the blood count are normal; the danger is ammonia toxicity, especially after protein loads.

> In hereditary orotic aciduria, orotate accumulates because it cannot be converted to UMP. The urea cycle is normal, so ammonia is not raised, but rapidly dividing erythroid precursors lack pyrimidine nucleotides and the anemia is megaloblastic despite normal B12 and folate.

**Misconception.** Orotic aciduria alone does not identify the disorder. The deciding clues are ammonia (high in OTC deficiency) and the blood count (megaloblastic anemia in UMP synthase deficiency).

**Takeaway.** Orotic aciduria: check ammonia (OTC) and the blood count (UMP synthase).

- **MCQ** `mol-otc-vs-orotic:mcq1` · comparison → **application** · difficulty 4 · `bc-nucleotide-synthesis.otc-vs-orotic`
  - Two infants both have raised urinary orotic acid. Infant A: plasma ammonia 260 µmol/L after a protein-rich feed, hemoglobin and MCV normal. Infant B: ammonia normal, hemoglobin 7.9 g/dL, MCV 112 fL, normal B12 and folate. Which pairing is correct?
  - ◻️ A. Both: hereditary orotic aciduria of different severity — _Hereditary orotic aciduria does not cause hyperammonemia, so it cannot explain infant A._
  - ◻️ B. A: OTC deficiency; B: folate deficiency — _Folate is normal in infant B, and folate deficiency does not raise urinary orotic acid._
  - ◻️ C. A: carbamoyl phosphate synthetase I deficiency; B: OTC deficiency — _CPS I deficiency gives hyperammonemia with low orotic acid, because carbamoyl phosphate is not made._
  - ◻️ D. A: UMP synthase deficiency; B: OTC deficiency — _Reversed: hyperammonemia points to a urea cycle block, and megaloblastic anemia points to failed UMP synthesis._
  - ✅ E. A: OTC deficiency; B: UMP synthase deficiency
  - Steps: (1) Infant A: hyperammonemia after protein = urea cycle block distal to carbamoyl phosphate. (2) Excess carbamoyl phosphate overflows into pyrimidine synthesis → orotic acid; marrow is spared → OTC deficiency. (3) Infant B: normal ammonia + megaloblastic anemia not due to B12/folate → orotate cannot become UMP → UMP synthase deficiency.
  - Explanation: Orotic acid + hyperammonemia = urea cycle overflow (OTC). Orotic acid + megaloblastic anemia with normal B12/folate = UMP synthase deficiency.
- **MCQ** `mol-otc-vs-orotic:mcq2` · multistep → **application** · difficulty 4 · `bc-nucleotide-synthesis.otc-vs-orotic`
  - A 3-year-old girl has episodes of vomiting and drowsiness after high-protein meals. Ammonia is high and urinary orotic acid is raised; red cell UMP synthase activity is normal. Why is orotic acid raised?
  - ◻️ A. Folate deficiency blocks thymidylate synthesis — _Folate deficiency does not raise urinary orotic acid or ammonia._
  - ◻️ B. Purine salvage fails and diverts PRPP to orotate — _Failed purine salvage raises uric acid, not orotic acid with hyperammonemia._
  - ◻️ C. UMP synthase cannot convert orotate to UMP — _Red cell UMP synthase activity is normal, which excludes hereditary orotic aciduria._
  - ✅ D. Excess carbamoyl phosphate enters pyrimidine synthesis
  - ◻️ E. Ammonia directly inhibits orotate phosphoribosyltransferase — _Enzyme activity is normal; the orotate comes from overproduction, not a blocked enzyme._
  - Steps: (1) Protein-triggered hyperammonemia = urea cycle block. (2) Normal UMP synthase excludes hereditary orotic aciduria. (3) Unused mitochondrial carbamoyl phosphate overflows into cytosolic pyrimidine synthesis → orotic acid.
  - Explanation: A partial urea cycle block (OTC deficiency, which can present in heterozygous girls) leaves carbamoyl phosphate unused; it overflows into the pyrimidine pathway.
- **True/false** `mol-otc-vs-orotic:tf1` · recall → **recognition** · difficulty 2 · `bc-nucleotide-synthesis.otc-vs-orotic`: Hereditary orotic aciduria typically presents with hyperammonemia after protein feeds. → **False**. Ammonia is normal in UMP synthase deficiency; hyperammonemia with orotic aciduria suggests a urea cycle defect such as OTC deficiency.
- **Crossword** `mol-otc-vs-orotic:clue1` · recall → **recognition** · difficulty 2 · `bc-nucleotide-synthesis.otc-vs-orotic`: X-linked urea cycle enzyme whose deficiency raises both ammonia and orotic acid (abbr.) → **OTC**

---

## Xanthine oxidase inhibitors and the thiopurine interaction (`mol-xo-inhibitors`)

Objectives: `bc-purine-salvage.xo-inhibitors`

**Citations**

1. Yu KH. Febuxostat: a novel non-purine selective inhibitor of xanthine oxidase for hyperuricemia in gout. Recent Pat Inflamm Allergy Drug Discov 2007 — PMID 19075968 — <https://pubmed.ncbi.nlm.nih.gov/19075968/> — checked: summary
2. Weiler S et al. Treatment of gout in a renal transplant patient leading to severe thrombocytopenia (allopurinol–azathioprine). J Clin Pharm Ther 2014 — PMID 25040676 — <https://pubmed.ncbi.nlm.nih.gov/25040676/> — checked: summary
3. Xanthine calculi in a patient with Lesch-Nyhan syndrome treated with allopurinol. BMC Pediatr 2018 — PMID 30001695 — <https://pubmed.ncbi.nlm.nih.gov/30001695/> — checked: summary
4. Recurrent xanthine stones in a young patient with Lesch-Nyhan syndrome. J Endourol Case Rep 2020 — PMID 33457651 — <https://pubmed.ncbi.nlm.nih.gov/33457651/> — checked: summary

**Verified facts** [supporting citations]

- Allopurinol inhibits xanthine oxidase; combined with azathioprine it can cause myelotoxicity, with raised myelotoxic 6-thioguanine nucleotide levels. [2]
- Febuxostat is a non-purine, selective inhibitor of xanthine oxidase used to lower serum urate in gout. [1]
- Blocking xanthine oxidase raises its substrates: in purine overproduction, xanthine can accumulate and form stones during allopurinol therapy. [3, 4]

**Awaiting direct source confirmation** (reasoned or existence-only; must be confirmed before approval)

- Xanthine oxidase normally inactivates 6-mercaptopurine (the active metabolite of azathioprine), so inhibiting it shunts more drug toward thioguanine nucleotides. [2]

**Mechanism.** Xanthine oxidase converts hypoxanthine to xanthine and xanthine to uric acid. Inhibiting it lowers urate but raises the upstream oxypurines. 6-Mercaptopurine is a purine analog that the same enzyme inactivates, so when xanthine oxidase is blocked more of the drug is converted to cytotoxic thioguanine nucleotides, and the marrow is suppressed.

**Quick.** Allopurinol (purine analog) and febuxostat (non-purine) inhibit xanthine oxidase → less urate, more hypoxanthine/xanthine. With azathioprine/6-MP: less inactivation → more thioguanine nucleotides → cytopenias.

**Detailed**

> Xanthine oxidase catalyzes the last two steps of purine degradation. Inhibitors lower serum urate in gout and prevent urate overload during tumor lysis. Febuxostat is structurally unrelated to purines and inhibits the enzyme selectively.

> Azathioprine is converted to 6-mercaptopurine, which has competing fates: activation to thioguanine nucleotides (the immunosuppressive and myelotoxic products) or inactivation, including by xanthine oxidase. Blocking the inactivating route shifts the balance toward thioguanine nucleotides, so the combination causes marrow suppression unless the thiopurine dose is greatly reduced or the combination is avoided.

**Misconception.** The allopurinol–azathioprine interaction is not an immune or allergic reaction: it is a predictable metabolic shunt of the thiopurine toward its myelotoxic nucleotides when xanthine oxidase is blocked.

**Takeaway.** Xanthine oxidase inhibitor + azathioprine/6-MP = thiopurine toxicity (cytopenias).

- **MCQ** `mol-xo-inhibitors:mcq1` · prediction → **application** · difficulty 4 · `bc-purine-salvage.xo-inhibitors`
  - A kidney transplant recipient on azathioprine develops gout and is started on allopurinol at the usual dose. Three weeks later platelets are 22,000/mm³ and neutrophils 600/mm³. What explains the cytopenias?
  - ✅ A. Less 6-MP inactivation, so more thioguanine nucleotides
  - ◻️ B. Xanthine stones causing acute kidney injury — _Kidney injury would not explain neutropenia and thrombocytopenia._
  - ◻️ C. Uric acid crystals deposited in the bone marrow — _Allopurinol lowers urate; marrow crystal deposition is not the mechanism._
  - ◻️ D. Allopurinol inhibiting dihydrofolate reductase — _Allopurinol inhibits xanthine oxidase, not DHFR._
  - ◻️ E. Allopurinol hypersensitivity destroying marrow cells — _Allopurinol hypersensitivity causes rash and organ injury; isolated predictable cytopenias with a thiopurine point to a metabolic interaction._
  - Steps: (1) Azathioprine → 6-mercaptopurine, which xanthine oxidase inactivates. (2) Allopurinol blocks xanthine oxidase, so more 6-MP is converted to thioguanine nucleotides. (3) Thioguanine nucleotides suppress rapidly dividing marrow → neutropenia and thrombocytopenia.
  - Explanation: Xanthine oxidase inactivates 6-mercaptopurine; blocking it raises myelotoxic thioguanine nucleotides.
- **MCQ** `mol-xo-inhibitors:mcq2` · prediction → **application** · difficulty 4 · `bc-purine-salvage.xo-inhibitors`
  - A boy with HGPRT deficiency treated with high-dose allopurinol develops new kidney stones that are radiolucent and not composed of uric acid. Which compound most likely forms them?
  - ◻️ A. Struvite — _Struvite stones are associated with urease-producing infections._
  - ◻️ B. Calcium oxalate — _Calcium oxalate stones are radiopaque and unrelated to xanthine oxidase blockade._
  - ◻️ C. Cystine — _Cystine stones come from defective renal amino acid transport, not purine metabolism._
  - ◻️ D. Orotic acid — _Orotic acid accumulates in pyrimidine or urea cycle defects, not with xanthine oxidase inhibition._
  - ✅ E. Xanthine
  - Steps: (1) HGPRT deficiency → large purine load reaches the degradation pathway. (2) Allopurinol blocks xanthine → urate. (3) Substrate xanthine accumulates and precipitates as stones.
  - Explanation: Blocking xanthine oxidase in massive purine overproduction lets xanthine accumulate, which is poorly soluble and can form stones.
- **True/false** `mol-xo-inhibitors:tf1` · recall → **recognition** · difficulty 2 · `bc-purine-salvage.xo-inhibitors`: Febuxostat lowers urate by inhibiting xanthine oxidase, although, unlike allopurinol, it is not a purine analog. → **True**. Correct: febuxostat is a non-purine, selective xanthine oxidase inhibitor.
- **Crossword** `mol-xo-inhibitors:clue1` · recall → **recognition** · difficulty 2 · `bc-purine-salvage.xo-inhibitors`: Non-purine xanthine oxidase inhibitor for gout → **FEBUXOSTAT**

---

## DNA replication: enzymes, strands and origins (`mol-replication`)

Objectives: `bc-replication.enzymes`, `bc-replication.strands`

**Citations**

1. OpenStax Biology 2e, 14.4 DNA Replication in Prokaryotes — <https://openstax.org/books/biology-2e/pages/14-4-dna-replication-in-prokaryotes> — checked: full-text
2. OpenStax Biology 2e, 14.5 DNA Replication in Eukaryotes — <https://openstax.org/books/biology-2e/pages/14-5-dna-replication-in-eukaryotes> — checked: full-text
3. Zhou ZX, Kunkel TA. Extrinsic proofreading (Pol δ and ε 3′→5′ exonuclease). DNA Repair (Amst) 2022 — PMID 35850061 — <https://pubmed.ncbi.nlm.nih.gov/35850061/> — checked: summary

**Verified facts** [supporting citations]

- Helicase opens the helix; single-strand binding proteins keep the strands apart; topoisomerase relieves over-winding ahead of the fork by nicking and resealing DNA. [1]
- Primase makes a short RNA primer that provides the free 3′-OH; DNA polymerase III is the main prokaryotic polymerase, adding nucleotides 5′→3′. [1]
- The leading strand is made continuously; the lagging strand is made as Okazaki fragments, each starting from its own primer. [1]
- In prokaryotes DNA polymerase I removes RNA primers by exonuclease activity and fills the gaps; ligase seals the nicks. In eukaryotes RNase H removes primers. [1, 2]
- E. coli has a single origin of replication; eukaryotic chromosomes have multiple origins. In eukaryotes pol ε synthesizes the leading strand and pol δ the lagging strand. [1, 2]
- Pol δ and pol ε have 3′→5′ exonuclease activity that removes misinserted bases (proofreading); errors that escape are corrected by mismatch repair. [3]

**Mechanism.** DNA polymerases can only extend an existing 3′-OH in the 5′→3′ direction. That single rule explains the need for primase, why one strand is continuous and the other is made in Okazaki fragments, why primers must later be removed and replaced, and why ligase is needed to join the fragments.

**Quick.** Helicase unwinds, SSB holds apart, topoisomerase relieves supercoils, primase lays RNA primer, polymerase extends 5′→3′ (proofreads 3′→5′), primers removed (pol I or RNase H), ligase seals Okazaki fragments. Prokaryotes: one origin; eukaryotes: many.

**Detailed**

> At each fork, helicase separates the strands and single-strand binding proteins prevent re-annealing, while topoisomerase ahead of the fork relieves the over-winding. Primase supplies an RNA primer, because DNA polymerase cannot start a chain de novo.

> Because polymerases synthesize only 5′→3′, the leading strand is extended continuously toward the fork while the lagging strand is made in short Okazaki fragments away from it. Primers are removed (pol I in bacteria, RNase H in eukaryotes), the gaps are filled with DNA, and ligase seals the backbone. Replicative polymerases proofread with a 3′→5′ exonuclease, improving fidelity before mismatch repair acts.

**Misconception.** Proofreading is a 3′→5′ exonuclease that removes a wrong base immediately after it is added; it is not the same as mismatch repair, which corrects errors that escape proofreading after replication.

**Takeaway.** Polymerase needs a primer and works 5′→3′: that explains primase, Okazaki fragments, primer removal and ligase.

- **MCQ** `mol-replication:mcq1` · mechanism → **mechanism** · difficulty 3 · `bc-replication.enzymes`
  - A bacterial strain carries a DNA polymerase III mutation that abolishes its 3′→5′ exonuclease activity but leaves polymerization intact. What is the main consequence?
  - ◻️ A. Replication can no longer begin at the origin — _Initiation depends on helicase and primase, not proofreading._
  - ✅ B. Misincorporated bases are not removed, so mutation rate rises
  - ◻️ C. Okazaki fragments cannot be joined into a strand — _Joining is done by DNA ligase, which is unaffected._
  - ◻️ D. Supercoiling ahead of the fork accumulates — _Relieving supercoils is the job of topoisomerases._
  - ◻️ E. RNA primers can no longer be removed from Okazaki fragments — _Primer removal in bacteria is a 5′→3′ exonuclease function of DNA polymerase I, not pol III proofreading._
  - Explanation: The 3′→5′ exonuclease is proofreading; without it, wrong bases stay in the new strand and the mutation rate rises (a mutator phenotype).
- **MCQ** `mol-replication:mcq2` · mechanism → **mechanism** · difficulty 2 · `bc-replication.strands`
  - Why is the lagging strand synthesized as Okazaki fragments?
  - ✅ A. Polymerase extends only 5′→3′, away from the fork on that strand
  - ◻️ B. The lagging strand template is made of RNA — _Both templates are DNA; RNA is present only in the primers._
  - ◻️ C. Each eukaryotic origin produces one Okazaki fragment — _Many fragments arise from each origin on the lagging side; the cause is polymerase directionality._
  - ◻️ D. Ligase cuts the new strand to relieve torsional strain — _Ligase joins fragments; topoisomerases relieve strain._
  - ◻️ E. Helicase unwinds the lagging strand in short bursts — _Helicase unwinds both strands together; the direction of synthesis causes the fragments._
  - Explanation: On the lagging template, 5′→3′ synthesis runs away from the fork, so it must restart repeatedly from new primers.
- **True/false** `mol-replication:tf1` · recall → **recognition** · difficulty 1 · `bc-replication.strands`: Eukaryotic chromosomes are replicated from many origins, whereas the E. coli chromosome has a single origin. → **True**. Correct: multiple origins let large eukaryotic genomes replicate in reasonable time.
- **True/false** `mol-replication:tf2` · recall → **recognition** · difficulty 1 · `bc-replication.enzymes`: Primase synthesizes a short DNA primer that DNA polymerase extends. → **False**. Primase makes an RNA primer; it is later removed and replaced with DNA.
- **Crossword** `mol-replication:clue1` · recall → **recognition** · difficulty 1 · `bc-replication.strands`: Name for the short fragments of the lagging strand → **OKAZAKI**
- **Crossword** `mol-replication:clue2` · recall → **recognition** · difficulty 1 · `bc-replication.enzymes`: Enzyme that lays down an RNA starting point for DNA polymerase → **PRIMASE**
- **Crossword** `mol-replication:clue3` · recall → **recognition** · difficulty 1 · `bc-replication.enzymes`: Seals the nicks between lagging-strand fragments → **LIGASE**
- **Mechanism Lab** `seq:lagging-strand` · mechanism → **mechanism** · difficulty 2 · `bc-replication.enzymes`, `bc-replication.strands`: Build a lagging strand. Put the events at a bacterial replication fork in order, from opening the helix to a sealed lagging strand.
  1. Helicase separates the parental strands
  2. Single-strand binding proteins keep the strands apart
  3. Primase lays down a short RNA primer
  4. DNA polymerase III extends the primer 5′→3′ (an Okazaki fragment)
  5. DNA polymerase I removes the RNA primer and fills the gap with DNA
  6. DNA ligase seals the nick between fragments
  - Polymerase needs a primer and works only 5′→3′, so the lagging strand is made in primed fragments whose RNA is later replaced and whose ends are joined by ligase.
- **Match Up** `match:replication-enzymes` · recall → **recognition** · difficulty 1 · `bc-replication.enzymes`: Replication crew. Match each replication protein to its job.
  - Helicase ↔ Separates the two strands
  - Single-strand binding protein ↔ Stops separated strands re-annealing
  - Topoisomerase ↔ Relieves over-winding ahead of the fork
  - Primase ↔ Makes the RNA primer
  - DNA ligase ↔ Joins Okazaki fragments
  - Pol δ / ε exonuclease ↔ Removes a misinserted base (3′→5′)
  - Each protein solves one problem of copying a double helix; proofreading by the 3′→5′ exonuclease of replicative polymerases precedes mismatch repair.

---

## Topoisomerase inhibitors: anticancer drugs and fluoroquinolones (`mol-topoisomerase-drugs`)

Objectives: `bc-replication.topo-drugs`

**Citations**

1. LiverTox: Topoisomerase Inhibitors. NIDDK, 2020 update — PMID 31643693 — <https://pubmed.ncbi.nlm.nih.gov/31643693/> — checked: summary
2. Hooper DC, Jacoby GA. Topoisomerase inhibitors: fluoroquinolone mechanisms of action and resistance. Cold Spring Harb Perspect Med 2016 — PMID 27449972 — <https://pubmed.ncbi.nlm.nih.gov/27449972/> — checked: summary
3. OpenStax Microbiology, 14.3 Mechanisms of Antibacterial Drugs — <https://openstax.org/books/microbiology/pages/14-3-mechanisms-of-antibacterial-drugs> — checked: full-text
4. OpenStax Biology 2e, 14.4 DNA Replication in Prokaryotes — <https://openstax.org/books/biology-2e/pages/14-4-dna-replication-in-prokaryotes> — checked: full-text

**Verified facts** [supporting citations]

- Topoisomerases make temporary breaks in DNA to relieve supercoiling ahead of the replication fork and then reseal them. [4, 1]
- Irinotecan and topotecan (camptothecin derivatives) inhibit topoisomerase I; etoposide and teniposide inhibit topoisomerase II. [1]
- Camptothecins bind the DNA–topoisomerase I complex and prevent resealing; accumulating DNA breaks block replication and kill the cell. Dose-limiting toxicities are mainly hematologic and gastrointestinal. [1]
- Fluoroquinolones inhibit bacterial DNA gyrase and topoisomerase IV, stabilizing DNA–enzyme complexes that block replication and generate double-strand breaks. [2, 3]
- Fluoroquinolone adverse effects include phototoxicity, neurotoxicity, cardiotoxicity, glucose dysregulation and tendon rupture. [3]

**Mechanism.** Topoisomerase poisons do not simply stop the enzyme: they trap it on DNA after it has cut, so the break is never resealed. Replication forks colliding with these trapped complexes convert them into lethal breaks, which is why rapidly dividing cells (tumor, marrow, gut) or bacteria are killed.

**Quick.** Topo I: irinotecan, topotecan. Topo II: etoposide, teniposide. Bacterial gyrase + topo IV: fluoroquinolones (ciprofloxacin, levofloxacin). All trap the enzyme after it cuts → unresealed breaks → replication fails.

**Detailed**

> Topoisomerase I nicks one strand; topoisomerase II cuts both strands and passes another duplex through. Camptothecins (irinotecan, topotecan) trap topoisomerase I on DNA; epipodophyllotoxins (etoposide, teniposide) trap topoisomerase II. Both cause DNA breaks that kill dividing cells, so marrow suppression and diarrhea or mucositis are the main toxicities.

> Bacteria use DNA gyrase and topoisomerase IV, type II enzymes that are the targets of fluoroquinolones. Resistance arises mainly from mutations in GyrA and ParC that reduce drug binding, and from efflux pumps.

**Misconception.** Fluoroquinolones and etoposide are both topoisomerase II-type poisons, but fluoroquinolones are selective for the bacterial type II enzymes (DNA gyrase and topoisomerase IV), so they are antibiotics rather than chemotherapy.

**Takeaway.** Topo I: “-tecan”. Topo II: etoposide/teniposide. Gyrase/topo IV: fluoroquinolones.

- **MCQ** `mol-topoisomerase-drugs:mcq1` · identification → **recognition** · difficulty 2 · `bc-replication.topo-drugs`
  - A drug used for small cell lung cancer binds the complex of DNA and topoisomerase II after the enzyme has cut both strands, preventing resealing. Which other drug shares this target?
  - ✅ A. Teniposide
  - ◻️ B. Dactinomycin — _Dactinomycin intercalates into DNA and blocks transcription._
  - ◻️ C. Ciprofloxacin — _Ciprofloxacin targets the bacterial type II enzymes DNA gyrase and topoisomerase IV, not human topoisomerase II._
  - ◻️ D. Irinotecan — _Irinotecan is a camptothecin that inhibits topoisomerase I._
  - ◻️ E. Topotecan — _Topotecan traps topoisomerase I, which cuts only one strand._
  - Explanation: Etoposide and teniposide both trap human topoisomerase II.
- **MCQ** `mol-topoisomerase-drugs:mcq2` · prediction → **application** · difficulty 3 · `bc-replication.topo-drugs`
  - Cancer cells are treated with irinotecan. Which outcome is expected in cells that enter S phase?
  - ◻️ A. Supercoils relax faster, speeding up replication — _Trapping the enzyme prevents resealing; it does not speed replication._
  - ◻️ B. RNA primers persist because RNase H is inhibited — _Irinotecan does not act on RNase H._
  - ✅ C. Replication forks meet trapped complexes and DNA breaks build up
  - ◻️ D. Telomeres shorten because telomerase is inhibited — _Irinotecan is a topoisomerase I poison, not a telomerase inhibitor._
  - ◻️ E. dTMP falls because thymidylate synthase is blocked — _That is the action of 5-fluorouracil._
  - Steps: (1) Irinotecan traps topoisomerase I on DNA after it nicks one strand. (2) The nick cannot be resealed. (3) Moving replication forks collide with the trapped complexes → DNA breaks → replication arrest and cell death.
  - Explanation: Camptothecins keep topoisomerase I covalently bound to a nicked strand; replication converts these lesions into breaks and the cell dies.
- **True/false** `mol-topoisomerase-drugs:tf1` · recall → **recognition** · difficulty 1 · `bc-replication.topo-drugs`: Fluoroquinolones inhibit bacterial DNA gyrase and topoisomerase IV. → **True**. Correct: these type II enzymes are trapped on DNA, blocking replication and causing double-strand breaks.
- **Crossword** `mol-topoisomerase-drugs:clue1` · recall → **recognition** · difficulty 2 · `bc-replication.topo-drugs`: Topoisomerase II poison derived from a plant toxin, used in chemotherapy → **ETOPOSIDE**
- **Crossword** `mol-topoisomerase-drugs:clue2` · recall → **recognition** · difficulty 2 · `bc-replication.topo-drugs`: Bacterial type II topoisomerase blocked by ciprofloxacin → **GYRASE**
- **Match Up** `match:central-dogma-poisons` · recall → **recognition** · difficulty 2 · `bc-replication.topo-drugs`, `bc-transcription.inhibitors`, `bc-translation.toxins`: Poisons of the central dogma. Match each drug or toxin to its molecular target.
  - α-Amanitin ↔ Eukaryotic RNA polymerase II
  - Etoposide ↔ Human topoisomerase II
  - Irinotecan ↔ Human topoisomerase I
  - Ciprofloxacin ↔ Bacterial DNA gyrase and topoisomerase IV
  - Diphtheria toxin ↔ Elongation factor 2
  - Ricin ↔ 28S rRNA of the large ribosomal subunit
  - Replication (topoisomerases), transcription (RNA polymerase II) and translation (EF-2, 28S rRNA) each have a classic poison.

---

## Telomeres and telomerase (`mol-telomerase`)

Objectives: `bc-replication.telomerase`

**Citations**

1. OpenStax Biology 2e, 14.5 DNA Replication in Eukaryotes — <https://openstax.org/books/biology-2e/pages/14-5-dna-replication-in-eukaryotes> — checked: full-text
2. Egan ED, Collins K. Biogenesis of telomerase ribonucleoproteins (TERT + template-containing telomerase RNA). RNA 2012 — PMID 22875809 — <https://pubmed.ncbi.nlm.nih.gov/22875809/> — checked: summary
3. Cao Y et al. Increased copy number of the TERT and TERC telomerase subunit genes in cancer cells. Cancer Sci 2008 — PMID 18482052 — <https://pubmed.ncbi.nlm.nih.gov/18482052/> — checked: summary

**Verified facts** [supporting citations]

- Human telomeres consist of the six-base sequence TTAGGG repeated many times; telomeres shorten with each division in most somatic cells because they do not make telomerase. [1]
- Telomerase is a ribonucleoprotein: a reverse transcriptase protein (TERT) that synthesizes telomeric repeats from the template in its own telomerase RNA. [2, 3]
- Telomerase is active in germ cells and adult stem cells but not in most adult somatic cells. [1]
- In most cancers telomerase is expressed at much higher levels than in normal cells, maintaining telomere length and allowing escape from the normal limit on divisions. [3, 1]

**Mechanism.** The lagging strand cannot be completed at the very end of a linear chromosome, so ends shorten with each division. Telomerase carries its own RNA template and copies it into DNA (reverse transcription), adding TTAGGG repeats to the 3′ end so the ends can be completed again.

**Quick.** Telomerase = reverse transcriptase (TERT) + its own RNA template; adds TTAGGG to chromosome ends. Active in germ and stem cells; off in most somatic cells; reactivated in most cancers to avoid senescence.

**Detailed**

> Every round of replication leaves a short gap at the end of the lagging strand that conventional polymerases cannot fill, so telomeres shorten until cells stop dividing. Telomerase counteracts this loss by adding repeats to the 3′ overhang, after which the complementary strand is filled in.

> Because telomerase uses an RNA template to make DNA, its catalytic subunit is a reverse transcriptase. Germ cells and stem cells keep telomerase active; most adult somatic cells do not, which limits their divisions. Cancer cells commonly up-regulate telomerase, sometimes with extra copies of the TERT and TERC genes, allowing indefinite division.

**Misconception.** Telomerase does not repair internal DNA damage and does not use the chromosome as its template: it uses its own RNA as the template to extend chromosome ends.

**Takeaway.** Telomerase is an RNA-templated DNA polymerase that lets germ, stem and cancer cells keep dividing.

- **MCQ** `mol-telomerase:mcq1` · mechanism → **mechanism** · difficulty 2 · `bc-replication.telomerase`
  - Why is telomerase classified as a reverse transcriptase?
  - ◻️ A. It transcribes telomeric DNA into regulatory RNA — _That would be DNA → RNA (ordinary transcription), not reverse transcription._
  - ◻️ B. It proofreads in the 3′→5′ direction — _Proofreading is an exonuclease activity of replicative polymerases._
  - ◻️ C. It ligates the ends of sister chromatids together — _Telomerase extends ends; it does not join chromatids._
  - ✅ D. It copies its own RNA template into DNA
  - ◻️ E. It removes RNA primers from Okazaki fragments — _Primer removal is done by RNase H (eukaryotes) or DNA polymerase I (bacteria)._
  - Explanation: TERT reads the template in telomerase RNA and writes TTAGGG repeats in DNA: RNA → DNA is reverse transcription.
- **MCQ** `mol-telomerase:mcq2` · comparison → **application** · difficulty 3 · `bc-replication.telomerase`
  - Cultured adult skin fibroblasts stop dividing after a fixed number of passages, but cells from the same person’s malignant melanoma keep dividing. Which difference best explains this?
  - ✅ A. The melanoma cells express high telomerase activity
  - ◻️ B. The fibroblasts have more replication origins — _More origins speed replication; they do not set a limit on the number of divisions._
  - ◻️ C. The fibroblasts cannot make RNA primers — _Without primase no cell could replicate at all._
  - ◻️ D. The melanoma cells lack DNA polymerase proofreading — _Lost proofreading raises mutation rate; it does not maintain chromosome ends._
  - ◻️ E. The melanoma cells have longer Okazaki fragments — _Okazaki fragment length does not prevent end shortening._
  - Steps: (1) Somatic cells lack telomerase, so telomeres shorten each division. (2) Critically short telomeres stop division. (3) Cancer cells re-express telomerase, maintain telomeres and escape this limit.
  - Explanation: Somatic fibroblasts lack telomerase and their telomeres shorten until senescence; most cancers up-regulate telomerase and maintain telomere length.
- **True/false** `mol-telomerase:tf1` · recall → **recognition** · difficulty 1 · `bc-replication.telomerase`: Most adult somatic cells have high telomerase activity. → **False**. Telomerase is active in germ cells and adult stem cells; most somatic cells do not make it.
- **Crossword** `mol-telomerase:clue1` · recall → **recognition** · difficulty 1 · `bc-replication.telomerase`: Ribonucleoprotein that adds TTAGGG repeats to chromosome ends → **TELOMERASE**

---

## The reading-frame rule: Duchenne vs Becker muscular dystrophy (`mol-reading-frame`)

Objectives: `bc-mutation-types.reading-frame`

**Citations**

1. MedlinePlus Genetics: Duchenne and Becker muscular dystrophy — <https://medlineplus.gov/genetics/condition/duchenne-and-becker-muscular-dystrophy/> — checked: full-text
2. Genetics and pathophysiology of Duchenne muscular dystrophy (reading-frame rule). Arch Pediatr 2025 — PMID 41391908 — <https://pubmed.ncbi.nlm.nih.gov/41391908/> — checked: summary
3. Lim KRQ et al. Genotype–phenotype correlations in Duchenne and Becker muscular dystrophy patients from the Canadian Neuromuscular Disease Registry. J Pers Med 2020 — PMID 33238405 — <https://pubmed.ncbi.nlm.nih.gov/33238405/> — checked: summary
4. GeneReviews: Dystrophinopathies — PMID 20301298; NBK1119 — <https://www.ncbi.nlm.nih.gov/books/NBK1119/> — checked: summary

**Verified facts** [supporting citations]

- Duchenne and Becker muscular dystrophy are X-linked recessive disorders of the DMD gene (dystrophin); Becker is usually milder and later in onset. [1, 4]
- Mutations that leave an abnormal dystrophin with some function usually cause Becker; mutations that prevent any functional dystrophin tend to cause Duchenne. [1]
- Most mutations are intragenic deletions. Out-of-frame mutations abolish dystrophin synthesis, whereas in-frame deletions produce a shorter, partially functional protein. [2, 3]
- The reading-frame rule has exceptions: in a registry of 402 patients, about 13% did not follow it. [3]

**Mechanism.** The ribosome reads mRNA in codons of three nucleotides. A deletion whose length is a multiple of three removes amino acids but keeps the downstream codons in frame, so a shortened, partly functional dystrophin is made (Becker). A deletion that is not a multiple of three shifts every downstream codon, soon producing a premature stop codon and no functional dystrophin (Duchenne). Deletion size matters less than this arithmetic.

**Quick.** Deletion length divisible by 3 → frame preserved → shorter, partly working dystrophin → Becker. Not divisible by 3 → frameshift → premature stop → no dystrophin → Duchenne. About 1 in 8 patients are exceptions.

**Detailed**

> Dystrophin links the muscle cytoskeleton to the extracellular matrix. Its central rod domain is long and repetitive, so internal deletions that keep the frame often leave a protein that still bridges the two ends and protects the fiber partly.

> Out-of-frame deletions change every codon after the break and usually reach a premature stop codon, so the mRNA is degraded or the protein is truncated and nonfunctional. Therapies that skip an extra exon aim to restore the frame and convert a Duchenne-type mutation into a Becker-type protein. Registry data show the rule predicts most but not all phenotypes, so the clinical course still matters.

**Misconception.** A large in-frame deletion can cause milder disease than a small out-of-frame deletion: severity depends on whether the frame is preserved, not on how much DNA is lost.

**Takeaway.** Frame kept → Becker; frame shifted → Duchenne. Size is not the deciding factor.

- **MCQ** `mol-reading-frame:mcq1` · interpretation → **application** · difficulty 4 · `bc-mutation-types.reading-frame`
  - Two boys have DMD deletions. Boy 1: deletion removes 3 exons totaling 360 nucleotides. Boy 2: deletion removes 1 exon of 118 nucleotides. Which phenotypes are most likely?
  - ◻️ A. Both Duchenne, because both remove whole exons — _Removing whole exons in frame still allows a shorter dystrophin to be made._
  - ◻️ B. Boy 1 Duchenne, Boy 2 Becker — _This assumes larger deletions are more severe; the frame, not the size, decides._
  - ◻️ C. Phenotype cannot be predicted without protein sequencing — _The reading-frame rule predicts most phenotypes from deletion length alone, although exceptions exist._
  - ◻️ D. Both Becker, because neither deletes the whole gene — _An out-of-frame deletion abolishes functional dystrophin even if most of the gene remains._
  - ✅ E. Boy 1 Becker, Boy 2 Duchenne
  - Steps: (1) 360 ÷ 3 = 120 codons: frame preserved → internally shortened dystrophin → Becker. (2) 118 ÷ 3 leaves a remainder: frameshift → premature stop → no functional dystrophin → Duchenne.
  - Explanation: 360 is divisible by 3 (in frame → Becker); 118 is not (frameshift → Duchenne).
- **MCQ** `mol-reading-frame:mcq2` · prediction → **application** · difficulty 4 · `bc-mutation-types.reading-frame`
  - A boy with Duchenne muscular dystrophy has an out-of-frame deletion. An antisense drug makes the spliceosome skip one additional neighboring exon so that the combined deletion becomes a multiple of three. What is the expected molecular effect?
  - ✅ A. A shorter, partly functional dystrophin is made
  - ◻️ B. Dystrophin mRNA is no longer transcribed — _Exon skipping changes splicing, not transcription._
  - ◻️ C. Utrophin replaces dystrophin in every fiber — _Utrophin up-regulation is a different strategy; exon skipping targets dystrophin itself._
  - ◻️ D. Full-length normal dystrophin is restored — _The skipped exons are still missing, so the protein is internally shortened, not normal._
  - ◻️ E. The deleted exons are re-inserted into the gene — _Antisense oligonucleotides do not alter the DNA._
  - Steps: (1) Out-of-frame deletion → premature stop → no dystrophin. (2) Skipping an extra exon makes the total missing length a multiple of 3. (3) Downstream codons are read in frame → shorter, partly functional protein (Becker-like).
  - Explanation: Restoring the frame lets translation continue past the deletion, producing a Becker-like internally deleted dystrophin.
- **MCQ** `mol-reading-frame:mcq3` · mechanism → **mechanism** · difficulty 3 · `bc-mutation-types.reading-frame`
  - Why do most out-of-frame deletions in DMD abolish dystrophin rather than produce a protein lacking only the deleted region?
  - ◻️ A. The deletion converts dystrophin into a toxic protein — _Duchenne results from loss of dystrophin, not a toxic gain of function._
  - ◻️ B. Deleted exons contain the dystrophin promoter — _Intragenic deletions usually spare the promoter; the problem is the frameshift._
  - ✅ C. The downstream codons shift and soon reach a stop codon
  - ◻️ D. Dystrophin requires every exon to fold at all — _In-frame deletions show that dystrophin can work with internal exons missing._
  - ◻️ E. The ribosome cannot translate across an exon junction — _Ribosomes translate spliced mRNA with exon junctions normally._
  - Explanation: A frameshift changes every downstream codon and usually creates a premature stop codon, so no functional dystrophin is produced.
- **True/false** `mol-reading-frame:tf1` · recall → **recognition** · difficulty 2 · `bc-mutation-types.reading-frame`: In dystrophinopathies, the size of the deletion is the main predictor of severity. → **False**. Whether the deletion preserves the reading frame is the main predictor; in-frame deletions usually cause Becker.
- **Crossword** `mol-reading-frame:clue1` · recall → **recognition** · difficulty 2 · `bc-mutation-types.reading-frame`: Type of mutation behind most Duchenne deletions → **FRAMESHIFT**

---

## Eukaryotic transcription: RNA polymerases and promoters (`mol-transcription`)

Objectives: `bc-transcription.polymerases`, `bc-transcription.regulation`

**Citations**

1. OpenStax Biology 2e, 15.3 Eukaryotic Transcription — <https://openstax.org/books/biology-2e/pages/15-3-eukaryotic-transcription> — checked: full-text
2. Fischer U et al. Diversity in the signals required for nuclear accumulation of U snRNPs (pol II-transcribed U1, U2, U4, U5; pol III-transcribed U6). J Cell Biol 1991 — PMID 1827444 — <https://pubmed.ncbi.nlm.nih.gov/1827444/> — checked: summary
3. Stavast CJ, Erkeland SJ. The non-canonical aspects of microRNAs: many roads to gene regulation. Cells 2019 — PMID 31752361 — <https://pubmed.ncbi.nlm.nih.gov/31752361/> — checked: summary
4. Surrey S et al. Functional analysis of a β-globin gene containing a TATA box mutation from a patient with β thalassemia. J Biol Chem 1985 — PMID 2987224 — <https://pubmed.ncbi.nlm.nih.gov/2987224/> — checked: summary
5. Lewis BA et al. A downstream element in the human β-globin promoter (β-thalassemia promoter mutations decrease transcription). Proc Natl Acad Sci U S A 2000 — PMID 10840054 — <https://pubmed.ncbi.nlm.nih.gov/10840054/> — checked: summary
6. OpenStax Microbiology, 14.3 Mechanisms of Antibacterial Drugs — <https://openstax.org/books/microbiology/pages/14-3-mechanisms-of-antibacterial-drugs> — checked: full-text

**Verified facts** [supporting citations]

- RNA polymerase I (in the nucleolus) makes the large rRNAs (all except 5S); RNA polymerase II makes all protein-coding pre-mRNAs; RNA polymerase III makes 5S rRNA, tRNAs and some small nuclear RNAs. [1]
- U1, U2, U4 and U5 snRNAs are transcribed by RNA polymerase II, whereas U6 snRNA is transcribed by RNA polymerase III. [2]
- MicroRNA genes are typically transcribed by RNA polymerase II as primary transcripts. [3]
- Eukaryotic promoters include a TATA box about 25–35 bases upstream of the start site and often a CAAT box about 80 bases upstream; enhancers and silencers bound by transcription factors raise or lower transcription. [1]
- A β-thalassemia TATA box mutation reduced transcription of a β-globin gene whose RNA processing and start site were normal (a promoter-down mutation). [4, 5]
- Bacteria use a single RNA polymerase, which rifampin inhibits. [1, 6]
- Basal transcription factors for RNA polymerase II (TFII…) assemble at the promoter; the core complex, TFIID, contains the TATA-binding protein. Enhancers and silencers change the efficiency of transcription but are not required for it. [1]

**Mechanism.** Promoter elements position the transcription machinery: general factors recognize the TATA box and recruit RNA polymerase II, while enhancers and silencers tune how often initiation happens. A promoter mutation leaves the coding sequence intact but lowers the amount of mRNA, so the protein is normal in structure and reduced in quantity.

**Quick.** Pol I: large rRNAs (nucleolus). Pol II: mRNA, most snRNAs, miRNA precursors. Pol III: tRNA, 5S rRNA, U6. Promoter: TATA (−25 to −35), CAAT (~−80). Enhancers/silencers adjust rate. Promoter mutation → normal protein, less of it.

**Detailed**

> The three nuclear RNA polymerases divide the work: pol I makes the 28S, 18S and 5.8S rRNAs in the nucleolus; pol II makes pre-mRNA and most capped small RNAs; pol III makes tRNAs, 5S rRNA and a few small RNAs such as U6. Bacteria use one RNA polymerase for everything, which makes it a selective antibiotic target.

> Transcription starts when general transcription factors assemble on the promoter. Mutations in the TATA box or other promoter elements reduce how often transcription starts. In some β-thalassemias such a mutation gives a normal β-globin chain in reduced amounts (β⁺), in contrast with nonsense or frameshift alleles that give none.

**Misconception.** RNA polymerase III does not make all small nuclear RNAs: most spliceosomal snRNAs (U1, U2, U4, U5) and microRNA precursors are made by RNA polymerase II; U6 is the pol III exception.

**Takeaway.** I = rRNA, II = mRNA (+ most snRNA, miRNA), III = tRNA/5S/U6. Promoter defects lower quantity, not structure.

- **MCQ** `mol-transcription:mcq1` · prediction → **application** · difficulty 3 · `bc-transcription.regulation`
  - A patient with β-thalassemia has a single-base change in the TATA box upstream of the β-globin gene. In cultured cells the mutant gene makes correctly spliced mRNA from the normal start site. What else is expected?
  - ◻️ A. A longer mRNA with an extra intron retained — _Intron retention is a splicing defect, which this mutant does not have._
  - ◻️ B. Normal mRNA amount with an abnormal β-globin chain — _Promoter mutations do not change the coding sequence, so the chain is normal._
  - ◻️ C. A truncated chain from a premature stop codon — _Nonsense mutations change the coding sequence; this change is upstream of it._
  - ◻️ D. No mRNA at all because splicing fails — _Splicing is normal in this mutant; transcription initiation is reduced._
  - ✅ E. Less β-globin mRNA, with a normal β-globin chain
  - Steps: (1) The TATA box positions the transcription machinery; it is not translated. (2) A mutation lowers initiation frequency → less mRNA. (3) The coding sequence and splicing are normal → normal β chain in reduced amount.
  - Explanation: TATA box mutations reduce transcription initiation (promoter-down): less mRNA, normal protein (β⁺ thalassemia).
- **MCQ** `mol-transcription:mcq2` · recall → **recognition** · difficulty 2 · `bc-transcription.polymerases`
  - Which RNA polymerase transcribes U6 snRNA?
  - ◻️ A. RNA polymerase II — _Pol II makes U1, U2, U4 and U5 snRNAs; U6 is the exception made by pol III._
  - ✅ B. RNA polymerase III
  - ◻️ C. Primase — _Primase makes RNA primers for DNA replication._
  - ◻️ D. RNA polymerase I — _Pol I makes the large rRNAs in the nucleolus._
  - ◻️ E. Mitochondrial RNA polymerase — _Spliceosomal snRNAs are encoded in the nucleus._
  - Explanation: U6 snRNA is a pol III transcript; the other major spliceosomal snRNAs are made by pol II.
- **MCQ** `mol-transcription:mcq3` · mechanism → **mechanism** · difficulty 3 · `bc-transcription.regulation`
  - Why does a mutation in the TATA box lower the rate at which a gene is transcribed?
  - ◻️ A. Enhancers can no longer bind any activator proteins — _Enhancers are separate elements; they modulate efficiency but are not the TATA box._
  - ◻️ B. The spliceosome can no longer find the first intron — _Splice sites are defined by GU…AG at intron ends, not by the promoter._
  - ◻️ C. RNA polymerase I takes over transcription of the gene — _Polymerases are not interchangeable; pol I transcribes rRNA genes only._
  - ◻️ D. The mutation creates a premature stop codon in the mRNA — _The TATA box lies upstream of the start site and is not part of the coding sequence._
  - ✅ E. TFIID binds poorly, so polymerase II is recruited less often
  - Explanation: The TATA-binding protein in TFIID recognizes the TATA box and nucleates the basal factor complex that positions RNA polymerase II; a weaker site means fewer initiation events.
- **True/false** `mol-transcription:tf1` · recall → **recognition** · difficulty 1 · `bc-transcription.polymerases`: RNA polymerase II transcribes the protein-coding pre-mRNAs of eukaryotic cells. → **True**. Correct: pol II makes all protein-coding pre-mRNAs.
- **True/false** `mol-transcription:tf2` · recall → **recognition** · difficulty 2 · `bc-transcription.regulation`: Enhancers must lie immediately next to the TATA box to work. → **False**. Enhancers can act from far upstream or downstream of the promoter by binding transcription factors.
- **Crossword** `mol-transcription:clue1` · recall → **recognition** · difficulty 2 · `bc-transcription.polymerases`: Nuclear site where RNA polymerase I makes ribosomal RNA → **NUCLEOLUS**
- **Crossword** `mol-transcription:clue2` · recall → **recognition** · difficulty 2 · `bc-transcription.regulation`: Distant DNA element that boosts transcription when bound by activators → **ENHANCER**
- **Match Up** `match:rna-polymerases` · recall → **recognition** · difficulty 2 · `bc-transcription.polymerases`: Who makes which RNA?. Match each polymerase to what it makes or what blocks it.
  - RNA polymerase I ↔ 28S, 18S and 5.8S rRNA in the nucleolus
  - RNA polymerase II ↔ Pre-mRNA; extremely sensitive to α-amanitin
  - RNA polymerase III ↔ tRNA, 5S rRNA and U6 snRNA
  - Bacterial RNA polymerase ↔ Inhibited by rifampin
  - Telomerase ↔ DNA repeats copied from its own RNA template
  - Pol I: large rRNAs; pol II: mRNA (and most snRNAs and miRNA precursors); pol III: tRNA, 5S rRNA, U6. Rifampin is selective for the bacterial enzyme; telomerase is an RNA-templated DNA polymerase.

---

## Transcription inhibitors: α-amanitin, rifampin and dactinomycin (`mol-transcription-inhibitors`)

Objectives: `bc-transcription.inhibitors`

**Citations**

1. Kayes T, Ho V. Amanita phalloides-associated liver failure: molecular mechanisms and management. Int J Mol Sci 2024 — PMID 39684738 — <https://pubmed.ncbi.nlm.nih.gov/39684738/> — checked: summary
2. Le Daré B et al. Toxic effects of amanitins: repurposing toxicities toward new therapeutics. Toxins (Basel) 2021 — PMID 34208167 — <https://pubmed.ncbi.nlm.nih.gov/34208167/> — checked: summary
3. OpenStax Biology 2e, 15.3 Eukaryotic Transcription — <https://openstax.org/books/biology-2e/pages/15-3-eukaryotic-transcription> — checked: full-text
4. OpenStax Microbiology, 14.3 Mechanisms of Antibacterial Drugs — <https://openstax.org/books/microbiology/pages/14-3-mechanisms-of-antibacterial-drugs> — checked: full-text
5. Wang SY et al. Spermine attenuates the action of the DNA intercalator actinomycin D on DNA binding and inhibition of transcription and replication. PLoS One 2012 — PMID 23144800 — <https://pubmed.ncbi.nlm.nih.gov/23144800/> — checked: summary

**Verified facts** [supporting citations]

- α-Amanitin from Amanita phalloides inhibits RNA polymerase II; hepatocyte apoptosis and liver failure follow delayed gastrointestinal symptoms that mimic gastroenteritis. [1]
- Hepatotoxicity is the hallmark of amanitins, with hepatocellular failure within about three days of ingestion. [2]
- RNA polymerase II is extremely sensitive to α-amanitin, RNA polymerase III moderately sensitive, and RNA polymerase I insensitive. [3]
- Rifampin inhibits bacterial RNA polymerase and blocks transcription; it induces liver enzymes and so alters the metabolism of other drugs. [4]
- Actinomycin D (dactinomycin) intercalates into duplex DNA and inhibits transcription and replication. [5]

**Mechanism.** Each agent blocks transcription at a different point. α-Amanitin binds eukaryotic RNA polymerase II, so cells that make large amounts of protein, such as hepatocytes, die when mRNA synthesis stops. Rifampin binds the single bacterial RNA polymerase but not the eukaryotic enzymes, so it is a selective antibiotic. Dactinomycin intercalates into DNA itself, blocking the template for any polymerase.

**Quick.** α-Amanitin (death cap): blocks RNA pol II → hepatocyte death; delayed GI phase then liver failure. Rifampin: bacterial RNA polymerase (selective; induces liver enzymes). Dactinomycin: intercalates DNA → blocks transcription.

**Detailed**

> After death cap ingestion there is a latent period of several hours, then severe vomiting and watery diarrhea. Symptoms may ease before transaminases rise and liver failure develops. The toxin is taken up by hepatocytes, where inhibition of RNA polymerase II stops mRNA synthesis and triggers apoptosis or necrosis.

> Rifampin’s selectivity comes from structural differences between bacterial and eukaryotic RNA polymerases; its main interaction problem is induction of hepatic drug metabolism. Dactinomycin is not enzyme-selective: by intercalating between base pairs it blocks the DNA template, which is why it is cytotoxic and used in some pediatric tumors.

**Misconception.** The early vomiting and diarrhea of death cap poisoning often settle before liver failure appears, so an apparent recovery does not exclude α-amanitin toxicity.

**Takeaway.** Death cap → RNA pol II → liver. Rifampin → bacterial RNA polymerase. Dactinomycin → DNA template.

- **MCQ** `mol-transcription-inhibitors:mcq1` · prediction → **application** · difficulty 3 · `bc-transcription.inhibitors`
  - Cultured human cells are exposed to a low concentration of α-amanitin that blocks one RNA polymerase completely. Synthesis of which RNA stops first?
  - ◻️ A. tRNA — _tRNA is made by RNA polymerase III, which is only moderately sensitive._
  - ✅ B. Pre-mRNA
  - ◻️ C. Mitochondrial mRNA — _Mitochondrial transcripts are made by a separate polymerase not targeted here._
  - ◻️ D. 28S and 18S rRNA — _These are made by RNA polymerase I, which is insensitive to α-amanitin._
  - ◻️ E. 5S rRNA — _5S rRNA is a pol III product, which needs higher toxin concentrations._
  - Steps: (1) Sensitivity order: pol II (extreme) > pol III (moderate) > pol I (insensitive). (2) A low concentration blocks only pol II. (3) Pol II makes pre-mRNA → pre-mRNA synthesis stops.
  - Explanation: RNA polymerase II is the most α-amanitin-sensitive polymerase, so pre-mRNA synthesis stops first.
- **MCQ** `mol-transcription-inhibitors:mcq2` · mechanism → **mechanism** · difficulty 2 · `bc-transcription.inhibitors`
  - Why does rifampin kill Mycobacterium tuberculosis without blocking transcription in the patient’s cells?
  - ◻️ A. It blocks the bacterial 30S ribosomal subunit — _That describes aminoglycosides and tetracyclines, which act on translation._
  - ✅ B. It binds bacterial RNA polymerase, not the eukaryotic enzymes
  - ◻️ C. It intercalates only into bacterial DNA sequences — _Rifampin is not an intercalator; dactinomycin is._
  - ◻️ D. It is activated only by mycobacterial catalase — _Catalase activation applies to isoniazid, not rifampin._
  - ◻️ E. It inhibits DNA gyrase in the bacterial cell — _DNA gyrase is the fluoroquinolone target._
  - Explanation: Rifampin inhibits the bacterial RNA polymerase; eukaryotic nuclear RNA polymerases are structurally different and unaffected.
- **True/false** `mol-transcription-inhibitors:tf1` · recall → **recognition** · difficulty 2 · `bc-transcription.inhibitors`: RNA polymerase I is the eukaryotic polymerase most sensitive to α-amanitin. → **False**. RNA polymerase II is extremely sensitive; pol I is insensitive.
- **Crossword** `mol-transcription-inhibitors:clue1` · recall → **recognition** · difficulty 2 · `bc-transcription.inhibitors`: Antimycobacterial drug that blocks bacterial RNA polymerase and induces liver enzymes → **RIFAMPIN**
- **Crossword** `mol-transcription-inhibitors:clue2` · recall → **recognition** · difficulty 2 · `bc-transcription.inhibitors`: Antitumor antibiotic that intercalates DNA and halts transcription → **DACTINOMYCIN**
- **Mystery Patient** `case:amanita-poisoning` · multistep → **application** · difficulty 4 · `bc-transcription.inhibitors`: The foragers’ supper
  - Presentation: A 45-year-old woman and her husband come to the emergency department with severe vomiting and profuse watery diarrhea.
  - History: About 10 hours earlier they ate a soup made from wild mushrooms they had gathered in a wood. They felt well for the first several hours.
  - Examination: Dry mucous membranes, tachycardia, diffuse abdominal tenderness. No jaundice yet.
  - Laboratory: Day 1: creatinine slightly raised from dehydration; ALT normal. Day 2: symptoms improve but ALT 2,800 U/L. Day 3: ALT 6,500 U/L, INR 3.1, glucose low.
  - Further clue: A remaining mushroom has a greenish cap, white gills and a sac-like cup at the base of the stem.
  - Q: Which molecular event in hepatocytes explains her liver failure?
  - ◻️ A. Depletion of glutathione by a reactive metabolite — _Glutathione depletion is the mechanism of acetaminophen toxicity; the history is mushroom ingestion._
  - ◻️ B. ADP-ribosylation of elongation factor 2 stops translation — _This is the action of diphtheria toxin and Pseudomonas exotoxin A, not of a mushroom toxin._
  - ◻️ C. Intercalation into DNA by an antitumor antibiotic — _Intercalation describes dactinomycin, not a mushroom toxin._
  - ✅ D. Inhibition of RNA polymerase II stops mRNA synthesis
  - ◻️ E. Inhibition of acetylcholinesterase at muscarinic synapses — _Some mushrooms cause cholinergic toxicity within minutes to hours, but not delayed liver failure._
  - A latent period, then severe gastroenteritis, an apparent improvement and rising transaminases with coagulopathy by day 2–3 are typical of amatoxin (death cap) poisoning. α-Amanitin inhibits RNA polymerase II; hepatocytes cannot make mRNA and undergo apoptosis or necrosis, producing fulminant hepatic failure.
  - Differentials: Acetaminophen overdose (Also causes delayed hepatotoxicity, but there is no ingestion history and the mechanism is glutathione depletion.); Muscarine-containing mushrooms (Rapid cholinergic symptoms (sweating, salivation, bradycardia) without liver failure.); Viral gastroenteritis (Does not cause transaminases in the thousands with coagulopathy.)

---

## mRNA processing and small regulatory RNAs (`mol-rna-processing`)

Objectives: `bc-rna-processing.processing`, `bc-rna-processing.mirna`

**Citations**

1. OpenStax Biology 2e, 15.4 RNA Processing in Eukaryotes — <https://openstax.org/books/biology-2e/pages/15-4-rna-processing-in-eukaryotes> — checked: full-text
2. Stavast CJ, Erkeland SJ. The non-canonical aspects of microRNAs: many roads to gene regulation. Cells 2019 — PMID 31752361 — <https://pubmed.ncbi.nlm.nih.gov/31752361/> — checked: summary
3. Fletcher CE et al. Interplay between steroid signalling and microRNAs (miRNA biogenesis: Pol II, Drosha, Dicer, RISC). Endocr Relat Cancer 2014 — PMID 25062737 — <https://pubmed.ncbi.nlm.nih.gov/25062737/> — checked: summary
4. Traber GM, Yu AM. RNAi-based therapeutics and novel RNA bioengineering technologies. J Pharmacol Exp Ther 2023 — PMID 35680378 — <https://pubmed.ncbi.nlm.nih.gov/35680378/> — checked: summary
5. Cassani M, Seydoux G. P-body-like condensates in the germline. Semin Cell Dev Biol 2024 — PMID 37407370 — <https://pubmed.ncbi.nlm.nih.gov/37407370/> — checked: summary
6. Fischer U et al. Nuclear accumulation of U snRNPs (U snRNAs assemble with proteins into snRNPs). J Cell Biol 1991 — PMID 1827444 — <https://pubmed.ncbi.nlm.nih.gov/1827444/> — checked: summary

**Verified facts** [supporting citations]

- A 7-methylguanosine cap is added to the 5′ end while the pre-mRNA is still being made; translation factors recognize the cap. [1]
- The pre-mRNA is cleaved downstream of an AAUAAA signal and poly-A polymerase adds about 200 adenines. [1]
- Spliceosomes recognize GU at the 5′ end and AG at the 3′ end of each intron; mutations at these sites, or new recognition sites, can impair splicing. [1]
- MicroRNA genes are transcribed by RNA polymerase II, processed by Drosha in the nucleus and Dicer in the cytoplasm into ~21-nucleotide RNAs, and loaded into Argonaute in the RNA-induced silencing complex; binding to the 3′ UTR represses translation or promotes mRNA degradation. [2, 3]
- Exogenous small interfering RNAs (siRNAs) also act through RNA-induced silencing complexes; several siRNA drugs are approved. [4]
- P-bodies are cytoplasmic condensates that hold poorly translated mRNAs for storage or degradation. [5]

**Mechanism.** Processing turns a pre-mRNA into an exportable, translatable message: the cap and poly-A tail protect the ends and help ribosomes load, and the spliceosome (snRNAs plus proteins, the snRNPs) removes introns by recognizing their GU…AG boundaries. Small RNAs then fine-tune expression: a miRNA or siRNA guides Argonaute to a complementary mRNA and blocks or destroys it.

**Quick.** Cap (5′ m7G) + poly-A tail (after AAUAAA) + splicing (GU…AG, snRNPs) → mature mRNA. miRNA: pol II → Drosha → Dicer → RISC → 3′ UTR → less translation. siRNA uses the same RISC machinery. P-bodies store or decay mRNA.

**Detailed**

> Capping happens co-transcriptionally; the cap protects the 5′ end and is recognized by translation initiation factors. Cleavage downstream of AAUAAA and addition of a long poly-A tail complete the 3′ end. Spliceosomes, built from small nuclear RNAs and proteins, recognize the intron ends and join the exons; many introns can be removed from a single transcript.

> MicroRNA precursors are cut by Drosha, exported and cut again by Dicer; one strand is loaded into Argonaute. Seed pairing with the target’s 3′ UTR represses translation or speeds decay. Synthetic siRNAs exploit the same pathway and are used as drugs. Untranslated mRNAs can collect in cytoplasmic P-bodies for storage or degradation.

**Misconception.** MicroRNAs do not alter the gene or its transcription rate: they act after transcription, on the mRNA, usually by pairing with the 3′ untranslated region.

**Takeaway.** Mature mRNA = cap + tail + exons. Small RNAs silence mRNA after transcription via RISC.

- **MCQ** `mol-rna-processing:mcq1` · mechanism → **mechanism** · difficulty 3 · `bc-rna-processing.mirna`
  - A cell line lacks Dicer activity. What happens to most microRNAs?
  - ✅ A. Mature ~21-nucleotide miRNAs are not produced, so targets are derepressed
  - ◻️ B. Target mRNAs are cleaved more efficiently than normal — _Without mature miRNAs, silencing is lost rather than enhanced._
  - ◻️ C. The 5′ cap is no longer added to target mRNAs — _Capping is unrelated to miRNA processing._
  - ◻️ D. miRNAs are made but cannot leave the nucleus — _Dicer acts in the cytoplasm after export; export is not the defect._
  - ◻️ E. Primary miRNA transcripts are not made by RNA polymerase II — _Transcription is upstream of Dicer and continues._
  - Explanation: Dicer makes the final small RNA; without it RISC cannot be loaded and the miRNA targets escape repression.
- **MCQ** `mol-rna-processing:mcq2` · recall → **recognition** · difficulty 1 · `bc-rna-processing.processing`
  - Which processing event requires the AAUAAA sequence near the end of a pre-mRNA?
  - ◻️ A. Addition of the 7-methylguanosine cap — _Capping occurs at the 5′ end early in transcription and does not need AAUAAA._
  - ◻️ B. Recognition of the 5′ splice site — _Splice sites are marked by GU at the intron start, not AAUAAA._
  - ✅ C. Cleavage and addition of the poly-A tail
  - ◻️ D. Charging of tRNA with its amino acid — _tRNA charging is done by aminoacyl-tRNA synthetases._
  - ◻️ E. Loading of the transcript into RISC — _RISC loading involves small RNAs, not the polyadenylation signal._
  - Explanation: AAUAAA is the polyadenylation signal: cleavage occurs downstream and poly-A polymerase adds the tail.
- **MCQ** `mol-rna-processing:mcq3` · mechanism → **mechanism** · difficulty 3 · `bc-rna-processing.processing`
  - A pre-mRNA carries a mutation that changes the GU at the start of intron 3 to AU. How does this disrupt production of the normal mRNA?
  - ◻️ A. RNA polymerase II stops transcribing at the mutated base — _A single base change in an intron does not terminate transcription._
  - ✅ B. The spliceosome cannot mark the intron start, so exon 3 is skipped or a cryptic site used
  - ◻️ C. Poly-A polymerase adds the tail inside intron 3 instead of at the end — _Polyadenylation is directed by AAUAAA near the 3′ end, not by splice sites._
  - ◻️ D. The intron is translated, adding amino acids to the middle of the protein — _Introns are removed or mis-spliced in the nucleus; the error arises during splicing, not translation._
  - ◻️ E. The 5′ cap cannot be added, so the transcript is degraded at once — _Capping occurs at the 5′ end of the transcript and does not depend on intron sequences._
  - Explanation: GU at the 5′ end of the intron is the donor site recognized by spliceosomal snRNPs; without it the exon is skipped or a nearby cryptic donor is used.
- **True/false** `mol-rna-processing:tf1` · recall → **recognition** · difficulty 1 · `bc-rna-processing.mirna`: MicroRNAs usually silence genes by binding the 3′ untranslated region of target mRNAs. → **True**. Correct: seed pairing to the 3′ UTR represses translation or promotes decay.
- **True/false** `mol-rna-processing:tf2` · recall → **recognition** · difficulty 2 · `bc-rna-processing.processing`: The 5′ cap is added only after the pre-mRNA has been completely transcribed and spliced. → **False**. The cap is added while the pre-mRNA is still being synthesized.
- **Crossword** `mol-rna-processing:clue1` · recall → **recognition** · difficulty 1 · `bc-rna-processing.processing`: snRNP machine that removes introns → **SPLICEOSOME**
- **Crossword** `mol-rna-processing:clue2` · recall → **recognition** · difficulty 2 · `bc-rna-processing.mirna`: Cytoplasmic ribonuclease that trims pre-miRNA to its final length → **DICER**
- **Mechanism Lab** `seq:mirna-silencing` · mechanism → **mechanism** · difficulty 3 · `bc-rna-processing.mirna`: From miRNA gene to silenced mRNA. Order the steps by which a microRNA silences its target.
  1. RNA polymerase II transcribes the primary miRNA
  2. Drosha cuts the primary transcript in the nucleus
  3. Dicer trims the precursor in the cytoplasm to ~21 nucleotides
  4. The mature miRNA is loaded into Argonaute (RISC)
  5. RISC pairs with the 3′ UTR of the target mRNA
  6. Translation is repressed or the mRNA is degraded
  - miRNA biogenesis runs nucleus → cytoplasm: Pol II transcription, Drosha, export, Dicer, Argonaute loading; target recognition by seed pairing then reduces protein output.

---

## snRNP autoantibodies: anti-Smith and anti-U1 RNP (`mol-snrnp-autoantibodies`)

Objectives: `bc-rna-processing.snrnp-antibodies`

**Citations**

1. Mahler M. Sm peptides in differentiation of autoimmune diseases. Adv Clin Chem 2011 — PMID 21874759 — <https://pubmed.ncbi.nlm.nih.gov/21874759/> — checked: summary
2. Kubo S et al. Evolution of diagnostic criteria and new insights into clinical testing in mixed connective tissue disease. Immunol Med 2024 — PMID 38597289 — <https://pubmed.ncbi.nlm.nih.gov/38597289/> — checked: summary
3. Dima A et al. The impact of anti-U1-RNP positivity: systemic lupus erythematosus versus mixed connective tissue disease. Rheumatol Int 2018 — PMID 29796907 — <https://pubmed.ncbi.nlm.nih.gov/29796907/> — checked: summary
4. Flechsig A et al. What is the clinical significance of anti-Sm antibodies in systemic lupus erythematosus? Clin Exp Rheumatol 2017 — PMID 28281463 — <https://pubmed.ncbi.nlm.nih.gov/28281463/> — checked: summary

**Verified facts** [supporting citations]

- Smith (Sm) antigens are core proteins of the U2–U6 small nuclear ribonucleoproteins (snRNPs) of the spliceosome; anti-Sm antibodies are highly specific for SLE. [1]
- Anti-Sm antibodies have low sensitivity for SLE: about a quarter of patients in one cohort at 99% specificity. [4]
- Mixed connective tissue disease combines features of SLE, systemic sclerosis and inflammatory myositis with positive anti-U1 RNP antibodies; Raynaud phenomenon and pulmonary arterial hypertension are characteristic. [2]
- Anti-U1 RNP positivity is mandatory for an MCTD diagnosis but also occurs in some patients with SLE (reported in roughly 13–30% of lupus cohorts). [3]

**Mechanism.** Both antibodies target the splicing machinery. The Sm proteins form the core ring shared by several spliceosomal snRNPs, while U1 RNP antibodies recognize proteins specific to the U1 particle. Why tolerance to these nuclear particles is lost is not fully understood, but their specificities are diagnostically useful: anti-Sm points strongly to SLE, while high-titer anti-U1 RNP with overlap features defines MCTD.

**Quick.** Anti-Smith = antibodies to core snRNP proteins → highly specific (not sensitive) for SLE. Anti-U1 RNP = required for MCTD (SLE + scleroderma + myositis features, Raynaud, pulmonary hypertension); also seen in some SLE.

**Detailed**

> Spliceosomal snRNPs combine a small nuclear RNA with proteins. The seven Sm proteins form a shared core; U1 has its own additional proteins (70K, A and C). Autoantibodies to these particles are detected as extractable nuclear antigen antibodies.

> Anti-Sm is one of the most SLE-specific antibodies but is present in only a minority of patients. MCTD is defined by overlapping lupus, scleroderma and myositis features with anti-U1 RNP; some patients who meet SLE criteria also carry anti-U1 RNP and then tend to have Raynaud phenomenon and lung involvement.

**Misconception.** Anti-U1 RNP is not specific for MCTD: it is required for MCTD but also appears in SLE. Anti-Sm is the specific SLE antibody, but its low sensitivity means a negative result does not exclude lupus.

**Takeaway.** Spliceosome antigens: anti-Sm → SLE (specific); anti-U1 RNP → MCTD (required, not specific).

- **MCQ** `mol-snrnp-autoantibodies:mcq1` · interpretation → **application** · difficulty 4 · `bc-rna-processing.snrnp-antibodies`
  - A 34-year-old woman has Raynaud phenomenon, puffy swollen fingers, proximal muscle weakness with raised creatine kinase and arthralgia. ANA is positive at high titer with a speckled pattern; anti-U1 RNP is strongly positive; anti-Sm and anti-dsDNA are negative. Which conclusion is best supported?
  - ◻️ A. Limited systemic sclerosis (CREST) — _CREST is associated with anticentromere antibodies and lacks myositis._
  - ✅ B. Mixed connective tissue disease
  - ◻️ C. SLE confirmed by the anti-U1 RNP result — _Anti-U1 RNP is not specific for SLE; anti-Sm and anti-dsDNA, the specific lupus antibodies, are negative._
  - ◻️ D. Primary Sjögren syndrome — _Sjögren syndrome is associated with anti-Ro/La and sicca symptoms._
  - ◻️ E. Drug-induced lupus — _Drug-induced lupus is associated with anti-histone antibodies and a culprit drug._
  - Steps: (1) Features span three diseases: Raynaud/puffy fingers (scleroderma), myositis, arthralgia (lupus). (2) Anti-U1 RNP is strongly positive and is required for MCTD. (3) The lupus-specific antibodies (anti-Sm, anti-dsDNA) are negative → MCTD rather than SLE.
  - Explanation: Overlap of lupus-like, scleroderma-like and myositis features with high-titer anti-U1 RNP and no anti-Sm/dsDNA fits MCTD.
- **MCQ** `mol-snrnp-autoantibodies:mcq2` · recall → **recognition** · difficulty 2 · `bc-rna-processing.snrnp-antibodies`
  - A patient with SLE has antibodies against the Smith antigen. What normal cellular structure contains this antigen?
  - ◻️ A. Centromere proteins — _Anticentromere antibodies are associated with limited systemic sclerosis._
  - ◻️ B. Mitochondrial inner membrane enzymes — _Antimitochondrial antibodies are associated with primary biliary cholangitis._
  - ◻️ C. The nucleosome histone core — _Histones are the targets of anti-histone antibodies (drug-induced lupus)._
  - ◻️ D. The signal recognition particle — _Anti-SRP antibodies are associated with a necrotizing myopathy._
  - ✅ E. Spliceosomal snRNPs
  - Explanation: Sm proteins form the core of spliceosomal snRNPs (U2–U6); anti-Sm is highly specific for SLE.
- **True/false** `mol-snrnp-autoantibodies:tf1` · recall → **recognition** · difficulty 2 · `bc-rna-processing.snrnp-antibodies`: A negative anti-Smith test makes SLE very unlikely. → **False**. Anti-Sm is highly specific but insensitive: most patients with SLE are anti-Sm negative.
- **Crossword** `mol-snrnp-autoantibodies:clue1` · recall → **recognition** · difficulty 2 · `bc-rna-processing.snrnp-antibodies`: Lupus-specific antigen of the snRNP core → **SMITH**

---

## Splice-site mutations in disease (`mol-splice-disease`)

Objectives: `bc-rna-processing.splice-disease`

**Citations**

1. OpenStax Biology 2e, 15.4 RNA Processing in Eukaryotes — <https://openstax.org/books/biology-2e/pages/15-4-rna-processing-in-eukaryotes> — checked: full-text
2. Splice-switching oligos correct aberrant splicing from IVS2-745 β-thalassemia patient cells. Haematologica 2021 — PMID 32439726 — <https://pubmed.ncbi.nlm.nih.gov/32439726/> — checked: summary
3. Moustakli E et al. Beyond the exome: the role of noncoding and regulatory variants in monogenic diseases. Curr Issues Mol Biol 2025 — PMID 41614802 — <https://pubmed.ncbi.nlm.nih.gov/41614802/> — checked: summary
4. Foy A, McMullin MF. Somatic SF3B1 mutations in myelodysplastic syndrome with ring sideroblasts and chronic lymphocytic leukaemia. J Clin Pathol 2019 — PMID 31473630 — <https://pubmed.ncbi.nlm.nih.gov/31473630/> — checked: summary

**Verified facts** [supporting citations]

- Spliceosomes recognize GU and AG at the intron ends; mutations at these sites, or mutations that create new recognition sites, can impair splicing. [1]
- In β-thalassemia, aberrant splicing reduces normal β-globin, causing α/β chain imbalance with toxic α-globin aggregates. [2]
- Deep intronic mutations can cause β-thalassemia by activating aberrant splicing. [3]
- SF3B1, a U2 snRNP spliceosome component, is commonly mutated (somatic, usually heterozygous missense) in myelodysplastic syndromes with ring sideroblasts and in 9–15% of chronic lymphocytic leukemia. [4]

**Mechanism.** If a canonical splice site is destroyed, the spliceosome either skips the exon or uses a nearby cryptic site. If an intronic mutation creates a new site, part of the intron is included in the mRNA. Either way the message usually gains a frameshift or premature stop codon, so little or no normal protein is made. In β-thalassemia, excess unpaired α chains then precipitate and damage red cell precursors.

**Quick.** Splice-site mutation → exon skipping or cryptic site use → frameshift/premature stop → little normal protein. β-thalassemia: less β-globin → excess α chains precipitate. Acquired spliceosome mutations (SF3B1) occur in MDS with ring sideroblasts and CLL.

**Detailed**

> Inherited splice mutations act in cis on one gene. In β-thalassemia, a mutation that abolishes a splice site can eliminate normal mRNA (β⁰), while one that creates a competing cryptic site may leave some correctly spliced mRNA (β⁺). The amount of normal β-globin, and therefore the excess of α chains, sets the severity.

> Somatic mutations in spliceosome components act in trans, altering splicing of many genes at once. SF3B1 mutations are typical of myelodysplastic syndrome with ring sideroblasts and also occur in a subset of chronic lymphocytic leukemia.

**Misconception.** A mutation deep inside an intron is not automatically harmless: if it creates a new splice site, intronic sequence is spliced into the mRNA and the protein is lost.

**Takeaway.** Lose a splice site or gain a new one → abnormal mRNA → less normal protein.

- **MCQ** `mol-splice-disease:mcq1` · multistep → **application** · difficulty 5 · `bc-rna-processing.splice-disease`
  - A child with transfusion-dependent anemia has a point mutation deep in intron 2 of the β-globin gene that creates a new AG…GU-like recognition site. Reticulocyte mRNA contains an extra 135-nucleotide segment with a premature stop codon. Which sequence of events explains the anemia?
  - ✅ A. Intronic sequence is spliced in, β chains fall and excess α chains precipitate
  - ◻️ B. The β chain gains a valine and polymerizes when deoxygenated — _That is the sickle missense mechanism, not a splicing defect._
  - ◻️ C. Transcription of β-globin stops at the mutation, so α chains are not made — _mRNA is made; and α-globin is encoded on a different chromosome and is unaffected._
  - ◻️ D. The cap is lost, so the mRNA cannot leave the nucleus — _The defect is an extra segment inside the message; capping is unaffected._
  - ◻️ E. γ-globin is permanently silenced, so fetal hemoglobin disappears — _The mutation is in the β-globin gene and does not silence γ-globin._
  - Steps: (1) The mutation creates a new splice site → intronic sequence is included in the mRNA. (2) The inserted sequence contains a stop codon → little or no β-globin. (3) α chains are made normally → excess unpaired α chains precipitate → ineffective erythropoiesis.
  - Explanation: The new splice site makes the spliceosome include intronic sequence; the premature stop eliminates β-globin; unpaired α chains precipitate and destroy erythroid precursors.
- **MCQ** `mol-splice-disease:mcq2` · mechanism → **mechanism** · difficulty 3 · `bc-rna-processing.splice-disease`
  - Why can a single-base change at the GU at the start of an intron eliminate the normal protein even though no codon in the exons is altered?
  - ◻️ A. The intron is deleted from the gene during replication — _The DNA is not deleted; the RNA is processed abnormally._
  - ◻️ B. GU is translated as a stop signal in the mature mRNA — _Intron sequences are removed before translation; GU is a splicing signal, not a codon._
  - ◻️ C. The mutation blocks RNA polymerase II binding — _Polymerase binding depends on the promoter, not the intron start._
  - ✅ D. The spliceosome no longer recognizes the intron boundary
  - ◻️ E. The mutation prevents the poly-A tail from being added — _Polyadenylation depends on AAUAAA near the 3′ end._
  - Explanation: GU at the 5′ end of the intron is the splice donor; losing it causes exon skipping or use of cryptic sites, giving abnormal mRNA.
- **True/false** `mol-splice-disease:tf1` · recall → **recognition** · difficulty 2 · `bc-rna-processing.splice-disease`: Somatic mutations in the spliceosome component SF3B1 are common in myelodysplastic syndrome with ring sideroblasts. → **True**. Correct: SF3B1 mutations are typical of MDS with ring sideroblasts and also occur in some CLL.
- **Crossword** `mol-splice-disease:clue1` · recall → **recognition** · difficulty 2 · `bc-rna-processing.splice-disease`: Hidden splice site activated when the normal one is lost → **CRYPTIC**

---

## tRNA charging and the steps of translation (`mol-translation`)

Objectives: `bc-translation.trna`, `bc-translation.steps`

**Citations**

1. OpenStax Biology 2e, 15.5 Ribosomes and Protein Synthesis — <https://openstax.org/books/biology-2e/pages/15-5-ribosomes-and-protein-synthesis> — checked: full-text
2. Levinger L et al. Mitochondrial tRNA 3′ end metabolism and human disease (CCA added by CCA-adding enzyme; amino acid attached to CCA). Nucleic Acids Res 2004 — PMID 15477393 — <https://pubmed.ncbi.nlm.nih.gov/15477393/> — checked: summary
3. Splan KE et al. In vitro assays for aminoacyl-tRNA synthetase editing activity (pre- and post-transfer editing). Methods 2008 — PMID 18241793 — <https://pubmed.ncbi.nlm.nih.gov/18241793/> — checked: summary
4. Francklyn CS. DNA polymerases and aminoacyl-tRNA synthetases: shared mechanisms for ensuring the fidelity of gene expression. Biochemistry 2008 — PMID 18850722 — <https://pubmed.ncbi.nlm.nih.gov/18850722/> — checked: summary

**Verified facts** [supporting citations]

- The CCA at the 3′ end of tRNAs is not encoded in the gene but added by the CCA-adding enzyme; aminoacyl-tRNA synthetases attach the amino acid to this CCA end. [2]
- Many aminoacyl-tRNA synthetases have an editing (proofreading) activity that hydrolyzes a wrongly activated amino acid before or after transfer to the tRNA. [3, 4]
- The tRNA anticodon pairs with the mRNA codon; each aminoacyl-tRNA enters the A site, the peptide is transferred, and tRNAs move from A to P to E, exiting from the E site. [1]
- Peptide bonds are formed by peptidyl transferase, an RNA-based enzyme of the large ribosomal subunit. [1]
- GTP energy is needed for binding of each new aminoacyl-tRNA to the A site and for its translocation to the P site. [1]
- There are no tRNAs for stop codons; a release factor enters the A site and triggers hydrolysis of the bond between the last amino acid and its tRNA. [1]

**Mechanism.** Accuracy is checked twice. The synthetase decides which amino acid goes on each tRNA (and edits mistakes); the ribosome checks only codon–anticodon pairing. A tRNA carrying the wrong amino acid therefore inserts it wherever its anticodon pairs. Elongation then cycles: aminoacyl-tRNA enters the A site, rRNA catalyzes the peptide bond, and translocation moves the chain to the P site until a release factor reads the stop codon.

**Quick.** tRNA: 3′ CCA (added after transcription) carries the amino acid; anticodon reads the codon. Synthetases charge and proofread. Initiation at AUG (Met), elongation A → P → E (rRNA peptidyl transferase, GTP), termination by release factor at the A site.

**Detailed**

> Aminoacyl-tRNA synthetases first activate the amino acid with ATP and then transfer it to the 3′ CCA end of the matching tRNA. Editing domains hydrolyze misactivated amino acids or mischarged tRNAs, much as DNA polymerase exonucleases remove misincorporated bases.

> Translation begins at AUG with an initiator methionyl-tRNA and initiation factors. In elongation, each aminoacyl-tRNA enters the A site (GTP-dependent), peptidyl transferase in the large-subunit rRNA moves the chain onto it, and translocation (GTP-dependent) shifts the tRNAs to the P and E sites. A stop codon in the A site recruits a release factor, and the finished chain is released.

**Misconception.** The ribosome does not check which amino acid a tRNA carries: it reads only the anticodon, so synthetase proofreading is the main safeguard for matching amino acid to codon.

**Takeaway.** Synthetase picks the amino acid; the ribosome only checks the anticodon. Elongation: A → P → E; rRNA makes the bond.

- **MCQ** `mol-translation:mcq1` · mechanism → **mechanism** · difficulty 3 · `bc-translation.trna`
  - A tRNA with an anticodon for cysteine is experimentally charged with alanine and added to a translation system. What happens at cysteine codons?
  - ◻️ A. Translation stops, because a release factor binds the mischarged tRNA — _Release factors recognize stop codons, not mischarged tRNAs._
  - ◻️ B. Cysteine is inserted, because the ribosome detects the wrong amino acid — _The ribosome checks codon–anticodon pairing, not the amino acid._
  - ◻️ C. Peptidyl transferase rejects alanine at the A site — _Peptidyl transferase forms peptide bonds without checking amino acid identity._
  - ◻️ D. The ribosome skips the codon and shifts the frame — _A correctly pairing anticodon is accepted; no frameshift occurs._
  - ✅ E. Alanine is inserted, because the ribosome reads only the anticodon
  - Explanation: Fidelity of amino acid choice depends on synthetases; once charged, the tRNA delivers whatever it carries to any codon its anticodon pairs with.
- **MCQ** `mol-translation:mcq2` · recall → **recognition** · difficulty 2 · `bc-translation.steps`
  - During elongation, after the peptide bond has formed, where is the growing chain attached?
  - ◻️ A. To the initiator tRNA throughout translation — _The chain is transferred to each new aminoacyl-tRNA in turn._
  - ✅ B. To the tRNA in the A site, which then moves to the P site
  - ◻️ C. To the release factor in the A site — _Release factors act only at stop codons._
  - ◻️ D. To the 50S rRNA until the stop codon is reached — _rRNA catalyzes the bond but does not hold the chain._
  - ◻️ E. To the tRNA in the E site, which then leaves — _The E site holds the empty tRNA that has given up the chain._
  - Explanation: Peptidyl transfer moves the chain onto the A-site tRNA; translocation then shifts it into the P site and the empty tRNA to the E site.
- **True/false** `mol-translation:tf1` · recall → **recognition** · difficulty 2 · `bc-translation.trna`: The CCA sequence at the 3′ end of tRNA is encoded in every tRNA gene. → **False**. CCA is added after transcription by the CCA-adding enzyme; it is where the amino acid is attached.
- **True/false** `mol-translation:tf2` · recall → **recognition** · difficulty 1 · `bc-translation.steps`: Peptide bonds are formed by an RNA component of the large ribosomal subunit. → **True**. Correct: peptidyl transferase is an RNA-based enzyme (a ribozyme).
- **Crossword** `mol-translation:clue1` · recall → **recognition** · difficulty 1 · `bc-translation.trna`: Three-base loop of tRNA that pairs with a codon → **ANTICODON**
- **Mechanism Lab** `seq:elongation-cycle` · mechanism → **mechanism** · difficulty 2 · `bc-translation.steps`: One turn of the ribosome. Order the events of translation from start to finish.
  1. Initiator methionyl-tRNA pairs with AUG, with initiation factors and GTP
  2. A charged aminoacyl-tRNA enters the A site (GTP)
  3. Peptidyl transferase in the large-subunit rRNA forms the peptide bond
  4. Translocation moves the tRNAs from A to P and from P to E (GTP)
  5. The empty tRNA leaves from the E site
  6. A stop codon in the A site recruits a release factor and the chain is freed
  - Initiation assembles the ribosome on AUG; each elongation cycle is entry (A site), bond formation (rRNA) and translocation, until a release factor reads the stop codon.

---

## Ribosomes and protein synthesis inhibitors (`mol-ribosome-antibiotics`)

Objectives: `bc-translation.ribosomes`

**Citations**

1. OpenStax Biology 2e, 15.5 Ribosomes and Protein Synthesis — <https://openstax.org/books/biology-2e/pages/15-5-ribosomes-and-protein-synthesis> — checked: full-text
2. OpenStax Microbiology, 14.3 Mechanisms of Antibacterial Drugs — <https://openstax.org/books/microbiology/pages/14-3-mechanisms-of-antibacterial-drugs> — checked: full-text

**Verified facts** [supporting citations]

- Eukaryotic ribosomes are 80S (40S + 60S); prokaryotic ribosomes are 70S (30S + 50S). [1]
- Aminoglycosides and tetracyclines bind the 30S subunit; macrolides, lincosamides, chloramphenicol and oxazolidinones bind the 50S subunit. [2]
- Aminoglycosides cause codon–anticodon mismatches and faulty proteins and are bactericidal; tetracyclines block tRNA association with the ribosome and are bacteriostatic. [2]
- Macrolides and lincosamides block peptide bond formation; chloramphenicol blocks peptidyl transfer; oxazolidinones interfere with formation of the initiation complex. [2, 1]
- Tetracycline blocks the A site on the bacterial ribosome. [1]

**Mechanism.** Antibiotics exploit structural differences between bacterial 70S and human 80S ribosomes. Drugs binding the small subunit interfere with decoding (aminoglycosides cause misreading; tetracyclines keep aminoacyl-tRNA out of the A site). Drugs binding the large subunit interfere with peptide bond formation, initiation or the exit of the chain.

**Quick.** Bacteria 70S (30S + 50S); humans 80S (40S + 60S). 30S: aminoglycosides (misreading, cidal), tetracyclines (block A site). 50S: macrolides, clindamycin (peptide bond), chloramphenicol (peptidyl transfer), linezolid (initiation complex).

**Detailed**

> The S values describe sedimentation, so subunits do not add arithmetically (30S + 50S = 70S). The bacterial ribosome differs enough from the cytoplasmic 80S ribosome to allow selective drugs.

> On the 30S subunit, aminoglycosides distort decoding so wrong amino acids are inserted, producing faulty membrane proteins and cell death; tetracyclines block aminoacyl-tRNA binding to the A site. On the 50S subunit, macrolides and lincosamides block peptide bond formation and chain progression, chloramphenicol blocks peptidyl transfer, and oxazolidinones prevent assembly of the initiation complex.

**Misconception.** Not every protein synthesis inhibitor is bacteriostatic: aminoglycosides are bactericidal because the mistranslated proteins they cause damage the bacterial membrane.

**Takeaway.** 30S: aminoglycosides, tetracyclines. 50S: macrolides, clindamycin, chloramphenicol, linezolid.

- **MCQ** `mol-ribosome-antibiotics:mcq1` · comparison → **application** · difficulty 3 · `bc-translation.ribosomes`
  - Drug X binds the bacterial small subunit and prevents aminoacyl-tRNA from occupying the A site. Drug Y binds the large subunit and blocks peptide bond formation. Which pairing fits?
  - ◻️ A. X gentamicin; Y linezolid — _Gentamicin binds 30S but causes misreading; linezolid blocks initiation complex formation rather than peptide bond formation._
  - ✅ B. X doxycycline; Y azithromycin
  - ◻️ C. X clindamycin; Y tetracycline — _Clindamycin binds 50S and tetracycline binds 30S, the opposite of the descriptions._
  - ◻️ D. X azithromycin; Y doxycycline — _Reversed: azithromycin is a 50S macrolide and doxycycline a 30S tetracycline._
  - ◻️ E. X linezolid; Y streptomycin — _Linezolid binds 50S and streptomycin binds 30S, the opposite of the descriptions._
  - Steps: (1) Small subunit + A-site blockade → tetracycline class (doxycycline). (2) Large subunit + peptide bond blockade → macrolide or lincosamide (azithromycin). (3) Check the distractors against subunit and mechanism.
  - Explanation: Tetracyclines (doxycycline) block the A site on 30S; macrolides (azithromycin) block peptide bond formation on 50S.
- **MCQ** `mol-ribosome-antibiotics:mcq2` · mechanism → **mechanism** · difficulty 3 · `bc-translation.ribosomes`
  - Why are aminoglycosides bactericidal while tetracyclines are bacteriostatic, although both bind the 30S subunit?
  - ◻️ A. Tetracyclines bind only the 50S subunit — _Tetracyclines bind the 30S subunit._
  - ◻️ B. Aminoglycosides also bind human 80S ribosomes — _Selective toxicity depends on not binding host ribosomes; that would not explain killing bacteria._
  - ✅ C. Aminoglycosides cause misreading, so faulty proteins damage the membrane
  - ◻️ D. Aminoglycosides inhibit DNA gyrase as well — _DNA gyrase is the fluoroquinolone target._
  - ◻️ E. Tetracyclines are inactivated inside bacteria — _Tetracyclines act inside bacteria; their effect is reversible blockade, not inactivation._
  - Explanation: Aminoglycoside-induced codon–anticodon mismatches produce faulty proteins that insert into and disrupt the membrane, killing the cell.
- **True/false** `mol-ribosome-antibiotics:tf1` · recall → **recognition** · difficulty 1 · `bc-translation.ribosomes`: Human cytoplasmic ribosomes are 70S, made of 30S and 50S subunits. → **False**. Human cytoplasmic ribosomes are 80S (40S + 60S); 70S ribosomes are prokaryotic.
- **Crossword** `mol-ribosome-antibiotics:clue1` · recall → **recognition** · difficulty 2 · `bc-translation.ribosomes`: Oxazolidinone that stops the 50S–30S initiation complex from forming → **LINEZOLID**
- **Match Up** `match:antibiotic-ribosome` · recall → **recognition** · difficulty 2 · `bc-translation.ribosomes`: Where antibiotics hit the ribosome. Match each antibiotic to its ribosomal site and action.
  - Gentamicin ↔ 30S: causes codon misreading
  - Doxycycline ↔ 30S: blocks aminoacyl-tRNA at the A site
  - Azithromycin ↔ 50S: macrolide blocking peptide bond formation
  - Chloramphenicol ↔ 50S: blocks peptidyl transfer
  - Linezolid ↔ 50S: prevents initiation complex formation
  - Aminoglycosides and tetracyclines bind the 30S subunit; macrolides, chloramphenicol and oxazolidinones bind the 50S subunit, each at a different step.

---

## Toxins that halt eukaryotic translation (`mol-translation-toxins`)

Objectives: `bc-translation.toxins`

**Citations**

1. Perentesis JP et al. Protein toxin inhibitors of protein synthesis. Biofactors 1992 — PMID 1599611 — <https://pubmed.ncbi.nlm.nih.gov/1599611/> — checked: summary
2. Oppenheimer NJ, Bodley JW. Diphtheria toxin: site and configuration of ADP-ribosylation of diphthamide in elongation factor 2. J Biol Chem 1981 — PMID 6267047 — <https://pubmed.ncbi.nlm.nih.gov/6267047/> — checked: summary
3. Wahome PG et al. Small-molecule inhibitors of ricin and Shiga toxins (28S rRNA sarcin–ricin loop depurination). Curr Top Microbiol Immunol 2012 — PMID 22006183 — <https://pubmed.ncbi.nlm.nih.gov/22006183/> — checked: summary
4. Masilamani AP et al. Enhanced cytotoxicity of a Pseudomonas exotoxin A based immunotoxin (ER route; ADP-ribosylation of eEF2). Front Pharmacol 2023 — PMID 37484018 — <https://pubmed.ncbi.nlm.nih.gov/37484018/> — checked: summary

**Verified facts** [supporting citations]

- Diphtheria toxin and Pseudomonas exotoxin A ADP-ribosylate and inactivate elongation factor 2 at diphthamide, a modified histidine; the two toxins differ in structure but share the same reaction mechanism. [1, 2]
- Ricin and Shiga toxins are RNA N-glycosidases that irreversibly inactivate eukaryotic ribosomes by removing an adenine from the sarcin–ricin loop of 28S rRNA. [3]
- Exotoxin A reaches the cytosol from the endoplasmic reticulum, where it ADP-ribosylates eukaryotic elongation factor 2, inhibiting ribosomes and causing apoptosis. [4]

**Awaiting direct source confirmation** (reasoned or existence-only; must be confirmed before approval)

- Elongation factor 2 drives translocation of the ribosome along the mRNA during elongation. [1]

**Mechanism.** All four toxins stop protein synthesis catalytically, so a few molecules can kill a cell. Two attack the elongation factor: diphtheria toxin and exotoxin A transfer ADP-ribose from NAD to EF-2, which can then no longer translocate the ribosome. Two attack the ribosome itself: Shiga toxin and ricin remove one adenine from 28S rRNA in the large subunit, so elongation factors can no longer act.

**Quick.** EF-2 (ADP-ribosylation at diphthamide): diphtheria toxin, Pseudomonas exotoxin A. 28S rRNA of the 60S subunit (depurination): Shiga toxin, ricin. Result: eukaryotic translation stops → cell death.

**Detailed**

> Diphtheria toxin and exotoxin A enter cells by different routes but have equivalent catalytic domains that attach ADP-ribose to diphthamide on EF-2. Modified EF-2 still binds GTP and the ribosome but cannot support translation.

> Ricin (from castor beans) and Shiga toxins (Shigella dysenteriae and Shiga toxin-producing E. coli) cleave a specific adenine from the sarcin–ricin loop of 28S rRNA. The damaged large subunit cannot engage elongation factors, so protein synthesis halts and the cell dies.

**Misconception.** Shiga toxin does not ADP-ribosylate EF-2: it is an N-glycosidase that depurinates 28S rRNA, like ricin, whereas diphtheria toxin and exotoxin A modify EF-2.

**Takeaway.** EF-2: diphtheria, exotoxin A. 28S rRNA: Shiga, ricin.

- **MCQ** `mol-translation-toxins:mcq1` · interpretation → **application** · difficulty 3 · `bc-translation.toxins`
  - Toxin P is added to a cell-free translation system and is found to modify a protein factor; toxin Q leaves all proteins intact but alters a single nucleotide of 28S rRNA. Both stop translation. Which pairing is correct?
  - ◻️ A. P ricin; Q Pseudomonas exotoxin A — _Reversed: ricin modifies rRNA, and exotoxin A modifies the protein EF-2._
  - ✅ B. P diphtheria toxin; Q ricin
  - ◻️ C. P Shiga toxin; Q diphtheria toxin — _Shiga toxin depurinates rRNA and diphtheria toxin modifies EF-2, the opposite of the findings._
  - ◻️ D. P exotoxin A; Q tetracycline — _Tetracycline is a 30S-binding antibiotic, not a 28S rRNA-modifying toxin._
  - ◻️ E. P cholera toxin; Q Shiga toxin — _Cholera toxin ADP-ribosylates a G protein and does not stop translation._
  - Steps: (1) Protein modified + translation stops → ADP-ribosylation of EF-2 → diphtheria toxin or exotoxin A. (2) 28S rRNA altered → N-glycosidase depurination → ricin or Shiga toxin. (3) Match each to the options.
  - Explanation: A protein factor is modified → EF-2 ADP-ribosylation (diphtheria toxin or exotoxin A). A 28S rRNA nucleotide is altered → depurination by ricin or Shiga toxin.
- **MCQ** `mol-translation-toxins:mcq2` · recall → **recognition** · difficulty 1 · `bc-translation.toxins`
  - What is the molecular target of Pseudomonas exotoxin A?
  - ◻️ A. Gs α subunit — _Gs α is ADP-ribosylated by cholera toxin, which raises cAMP._
  - ✅ B. Elongation factor 2
  - ◻️ C. 28S ribosomal RNA — _That is the target of ricin and Shiga toxin._
  - ◻️ D. The 30S ribosomal subunit — _Bacterial toxins that kill human cells act on eukaryotic translation, not the 30S subunit._
  - ◻️ E. RNA polymerase II — _RNA polymerase II is inhibited by α-amanitin._
  - Explanation: Exotoxin A, like diphtheria toxin, ADP-ribosylates EF-2 at diphthamide.
- **True/false** `mol-translation-toxins:tf1` · recall → **recognition** · difficulty 2 · `bc-translation.toxins`: Ricin and Shiga toxin both inactivate ribosomes by removing an adenine from 28S rRNA. → **True**. Correct: both are RNA N-glycosidases acting on the sarcin–ricin loop.
- **Crossword** `mol-translation-toxins:clue1` · recall → **recognition** · difficulty 2 · `bc-translation.toxins`: Modified histidine on EF-2 that diphtheria toxin targets → **DIPHTHAMIDE**
- **Crossword** `mol-translation-toxins:clue2` · recall → **recognition** · difficulty 2 · `bc-translation.toxins`: Castor bean toxin that depurinates 28S rRNA → **RICIN**

---

## Protein modification, folding and quality control (`mol-protein-folding`)

Objectives: `bc-protein-processing.ptm`, `bc-protein-processing.folding`

**Citations**

1. Wu X et al. Targeting protein modifications in metabolic diseases (range of PTMs). Signal Transduct Target Ther 2023 — PMID 37244925 — <https://pubmed.ncbi.nlm.nih.gov/37244925/> — checked: summary
2. Preston GM, Brodsky JL. The evolving role of ubiquitin modification in ER-associated degradation. Biochem J 2017 — PMID 28159894 — <https://pubmed.ncbi.nlm.nih.gov/28159894/> — checked: summary
3. Amaral MD. CFTR and chaperones: processing and degradation. J Mol Neurosci 2004 — PMID 15126691 — <https://pubmed.ncbi.nlm.nih.gov/15126691/> — checked: summary
4. MedlinePlus Genetics: CFTR gene — <https://medlineplus.gov/genetics/gene/cftr/> — checked: full-text
5. Patel D, Teckman JH. Alpha-1-antitrypsin deficiency liver disease. Clin Liver Dis 2018 — PMID 30266154 — <https://pubmed.ncbi.nlm.nih.gov/30266154/> — checked: summary
6. Hwang J, Qi L. Quality control in the endoplasmic reticulum: crosstalk between ERAD and UPR pathways. Trends Biochem Sci 2018 — PMID 30056836 — <https://pubmed.ncbi.nlm.nih.gov/30056836/> — checked: summary
7. StatPearls: Biochemistry, Collagen Synthesis — PMID 29939531; NBK507709 — <https://www.ncbi.nlm.nih.gov/books/NBK507709/> — checked: summary

**Verified facts** [supporting citations]

- Post-translational modifications include phosphorylation, acetylation, methylation, ubiquitination, glycosylation and others, expanding the functional diversity of the proteome. [1]
- In ER-associated degradation (ERAD) misfolded proteins are selected, tagged with polyubiquitin, removed from the ER and degraded by the cytoplasmic 26S proteasome. [2]
- F508del CFTR is retained in the ER, recognized by molecular chaperones and rapidly targeted for proteasomal degradation, so little reaches the cell membrane. [3, 4]
- The α1-antitrypsin Z protein folds improperly, is retained within hepatocytes as polymers and triggers a liver injury cascade. [5]
- Accumulation of misfolded proteins in the ER activates the unfolded protein response. [6]
- Collagen undergoes vitamin C-dependent hydroxylation and glycosylation in the rough endoplasmic reticulum. [7]

**Mechanism.** Chaperones help new proteins fold in the ER and hold those that fail. Proteins that cannot fold are ubiquitinated and destroyed by the proteasome. The outcome then depends on the protein: if it is cleared efficiently, the disease is loss of function at its destination (ΔF508 CFTR missing from the epithelial membrane). If it escapes degradation and aggregates, it injures the cell that makes it as well (Z α1-antitrypsin polymers in hepatocytes).

**Quick.** PTMs: phosphorylation, glycosylation, hydroxylation, methylation, acetylation, ubiquitination. Misfolded ER proteins → chaperones → ubiquitin → proteasome (ERAD). ΔF508 CFTR: degraded → loss of function. Z α1AT: polymers retained → liver injury + lung loss of function.

**Detailed**

> Modifications change a protein’s activity, location or lifetime: kinases add phosphate, glycosyltransferases add sugars in the ER and Golgi, and ubiquitin ligases mark proteins for proteasomal destruction. In collagen, vitamin C-dependent hydroxylation of proline and lysine in the RER is needed for a stable triple helix.

> ER quality control combines chaperones, ubiquitination and retrotranslocation to the proteasome, and accumulation of misfolded protein activates the unfolded protein response. ΔF508 CFTR is efficiently removed by this system, so the defect is absence of a functional chloride channel. The Z α1-antitrypsin variant forms polymers that are retained in hepatocytes, injuring the liver while serum levels fall.

**Misconception.** Misfolding does not always cause disease by the same route: ΔF508 CFTR is cleared, causing loss of function in epithelia, whereas Z α1-antitrypsin accumulates and adds hepatocyte toxicity to the loss of function in the lung.

**Takeaway.** Misfolded and cleared → loss of function (ΔF508). Misfolded and retained → loss of function plus toxicity (Z α1AT).

- **MCQ** `mol-protein-folding:mcq1` · comparison → **application** · difficulty 4 · `bc-protein-processing.folding`
  - Both ΔF508 CFTR and the Z variant of α1-antitrypsin misfold in the endoplasmic reticulum. Why does the Z variant injure the cell that produces it while ΔF508 CFTR mainly causes disease by its absence?
  - ◻️ A. Only the Z protein is modified by ubiquitin — _Both enter ER quality-control pathways; the difference is what escapes degradation._
  - ✅ B. Z protein polymerizes and is retained; ΔF508 is degraded by the proteasome
  - ◻️ C. ΔF508 CFTR is made only in cells that do not divide — _Cell division is not the explanation; the fate of the misfolded protein is._
  - ◻️ D. ΔF508 CFTR is secreted normally but cannot bind chloride — _ΔF508 CFTR is largely retained in the ER and degraded before reaching the membrane._
  - ◻️ E. Z protein is secreted in excess and digests the liver — _Z protein is under-secreted; serum levels fall._
  - Steps: (1) Both proteins misfold in the ER and are recognized by quality control. (2) ΔF508 CFTR is ubiquitinated and degraded → loss of function at the membrane only. (3) Z α1AT polymerizes and accumulates → hepatocyte injury plus low serum levels.
  - Explanation: ΔF508 CFTR is cleared by ERAD, so cells simply lack the channel. Z α1AT forms polymers that are retained in hepatocytes, injuring them (gain of toxic function) while serum levels fall.
- **MCQ** `mol-protein-folding:mcq2` · mechanism → **mechanism** · difficulty 2 · `bc-protein-processing.folding`
  - A misfolded membrane protein in the ER is tagged with a chain of ubiquitin. What is the next fate of most such proteins?
  - ✅ A. Extraction from the ER and degradation by the proteasome
  - ◻️ B. Transport to the Golgi for glycosylation — _Ubiquitination marks the protein for destruction, not further processing._
  - ◻️ C. Phosphorylation that restores normal folding — _Phosphorylation regulates activity; it does not refold proteins._
  - ◻️ D. Secretion by exocytosis — _Quality control prevents misfolded proteins from leaving the ER._
  - ◻️ E. Degradation by lysosomal acid hydrolases inside the ER — _ERAD substrates are degraded in the cytoplasm by the 26S proteasome._
  - Explanation: In ERAD, polyubiquitinated proteins are retrotranslocated out of the ER and degraded by the 26S proteasome.
- **True/false** `mol-protein-folding:tf1` · recall → **recognition** · difficulty 1 · `bc-protein-processing.ptm`: Ubiquitination of a protein commonly targets it for degradation by the proteasome. → **True**. Correct: polyubiquitin chains commit proteins, including misfolded ER proteins, to proteasomal destruction.
- **Crossword** `mol-protein-folding:clue1` · recall → **recognition** · difficulty 1 · `bc-protein-processing.folding`: Barrel-shaped complex that destroys ubiquitin-tagged proteins → **PROTEASOME**
- **Crossword** `mol-protein-folding:clue2` · recall → **recognition** · difficulty 1 · `bc-protein-processing.folding`: Protein that helps others fold and holds those that fail → **CHAPERONE**
- **Match Up** `match:protein-modifications` · recall → **recognition** · difficulty 1 · `bc-protein-processing.ptm`: Finishing touches. Match each post-translational modification to an example of what it does.
  - Phosphorylation ↔ Kinase-added phosphate that switches activity
  - Ubiquitination ↔ Tags a misfolded protein for the proteasome
  - Hydroxylation ↔ Vitamin C-dependent change to collagen proline
  - Glycosylation ↔ Sugar chains added in the ER and Golgi
  - Acetylation ↔ Neutralizes histone lysines and opens chromatin
  - Post-translational modifications change activity (phosphorylation), lifetime (ubiquitination), structure (hydroxylation), trafficking (glycosylation) and chromatin state (acetylation).

---

## α1-Antitrypsin deficiency (`mol-a1at`)

Objectives: `bc-protein-processing.a1at`

**Citations**

1. MedlinePlus Genetics: Alpha-1 antitrypsin deficiency — <https://medlineplus.gov/genetics/condition/alpha-1-antitrypsin-deficiency/> — checked: full-text
2. MedlinePlus Genetics: SERPINA1 gene — <https://medlineplus.gov/genetics/gene/serpina1/> — checked: full-text
3. Patel D, Teckman JH. Alpha-1-antitrypsin deficiency liver disease. Clin Liver Dis 2018 — PMID 30266154 — <https://pubmed.ncbi.nlm.nih.gov/30266154/> — checked: summary
4. Bouchecareilh M. Alpha-1-antitrypsin deficiency (review). Med Sci (Paris) 2014 — PMID 25311024 — <https://pubmed.ncbi.nlm.nih.gov/25311024/> — checked: summary
5. Qizilbash A, Young-Pong O. Alpha 1 antitrypsin liver disease: differential diagnosis of PAS-positive, diastase-resistant globules in liver cells. Am J Clin Pathol 1983 — PMID 6189389 — <https://pubmed.ncbi.nlm.nih.gov/6189389/> — checked: summary

**Verified facts** [supporting citations]

- α1-Antitrypsin deficiency is inherited in an autosomal codominant pattern; the Z allele produces very little α1-antitrypsin, and ZZ individuals have a high risk of emphysema and liver disease. [1]
- α1-Antitrypsin protects tissues from neutrophil elastase; Z protein polymerizes and cannot leave the liver, and the accumulated polymers damage it. [2, 1]
- Z-α1AT polymers accumulate in the hepatocyte endoplasmic reticulum, causing cell death and a severe reduction of serum α1AT, so the lung loses its antiprotease protection. [4]
- α1AT deficiency is the most common genetic cause of liver disease in children; liver disease is variable and not all ZZ individuals develop it. [4, 3]
- Hepatocytes in α1AT liver disease contain periportal PAS-positive, diastase-resistant globules that stain for α1AT; cirrhosis was present in most autopsy livers with such globules. [5]

**Mechanism.** The Z mutation makes α1-antitrypsin fold slowly and link into polymers in the hepatocyte ER. Two problems follow from one protein. In the liver, retained polymers injure hepatocytes (gain of toxic function), causing neonatal cholestasis, hepatitis and cirrhosis. In the lung, too little α1-antitrypsin reaches the alveoli, so neutrophil elastase destroys alveolar walls unopposed (loss of function), causing early emphysema, worse with smoking.

**Quick.** SERPINA1 Z allele (codominant): misfolded protein polymerizes in hepatocyte ER → PAS+ diastase-resistant globules, neonatal cholestasis, cirrhosis (toxic gain). Low serum α1AT → unopposed neutrophil elastase → early panacinar emphysema (loss of function).

**Detailed**

> Normal α1-antitrypsin is made in the liver and circulates to the lungs, where it inhibits neutrophil elastase. The Z variant is largely retained in hepatocytes as polymers, so serum levels are very low. Each allele contributes to the serum level (codominant inheritance): MZ carriers have intermediate levels and a slightly increased risk.

> Lung disease reflects missing antiprotease: emphysema develops at a young age, especially in smokers, and typically involves the whole acinus in the lower lobes. Liver disease reflects retained protein: infants may present with prolonged jaundice, and adults with chronic hepatitis or cirrhosis. Biopsy shows PAS-positive, diastase-resistant globules of α1-antitrypsin in periportal hepatocytes.

**Misconception.** α1AT augmentation therapy can raise serum levels to protect the lung, but it does not remove the polymers that injure the liver: the two organs fail by different mechanisms.

**Takeaway.** One misfolded protein, two mechanisms: retained in the liver (toxicity), missing in the lung (elastase unopposed).

- **MCQ** `mol-a1at:mcq1` · interpretation → **application** · difficulty 4 · `bc-protein-processing.a1at`
  - A liver biopsy from a 6-week-old with prolonged conjugated jaundice shows periportal hepatocytes with globules that are PAS-positive after diastase digestion. Serum α1-antitrypsin is very low. What do the globules contain, and why are they there?
  - ◻️ A. Bilirubin crystals from biliary obstruction — _Bile pigment is not PAS-positive diastase-resistant globules._
  - ◻️ B. Neutrophil elastase complexes taken up from blood — _The globules consist of the patient’s own misfolded α1-antitrypsin._
  - ◻️ C. Copper bound to metallothionein — _Copper accumulation suggests Wilson disease and is not PAS-positive globules._
  - ◻️ D. Glycogen that cannot be broken down — _Diastase digests glycogen, so diastase-resistant globules are not glycogen._
  - ✅ E. Polymerized α1-antitrypsin retained in the ER
  - Steps: (1) Diastase resistance excludes glycogen. (2) Very low serum α1AT with hepatocyte globules → protein made but not secreted. (3) Z protein polymerizes and is retained in the ER → globules + neonatal liver injury.
  - Explanation: Z α1-antitrypsin polymerizes in the hepatocyte ER; the retained protein forms PAS-positive, diastase-resistant globules and injures the liver while serum levels fall.
- **MCQ** `mol-a1at:mcq2` · mechanism → **mechanism** · difficulty 2 · `bc-protein-processing.a1at`
  - Why does α1-antitrypsin deficiency cause emphysema?
  - ◻️ A. α1AT directly synthesizes alveolar elastin — _α1AT is a protease inhibitor; it does not synthesize elastin._
  - ◻️ B. Mucus plugs obstruct the small airways — _Mucus plugging is the mechanism in cystic fibrosis and chronic bronchitis._
  - ◻️ C. Polymerized α1AT deposits in the alveolar walls — _Polymers accumulate in hepatocytes; the lung problem is too little circulating inhibitor._
  - ✅ D. Neutrophil elastase is left uninhibited in the alveoli
  - ◻️ E. Smoking-induced mutations inactivate SERPINA1 — _The defect is inherited; smoking accelerates protease damage._
  - Explanation: Too little α1-antitrypsin reaches the lung, so neutrophil elastase digests alveolar walls (loss of antiprotease function).
- **True/false** `mol-a1at:tf1` · recall → **recognition** · difficulty 2 · `bc-protein-processing.a1at`: α1-Antitrypsin deficiency is the most common genetic cause of liver disease in children. → **True**. Correct: retained Z protein can cause neonatal cholestasis and later chronic liver disease.
- **True/false** `mol-a1at:tf2` · recall → **recognition** · difficulty 2 · `bc-protein-processing.a1at`: In α1-antitrypsin deficiency the liver makes too little of the protein, so hepatocytes are spared. → **False**. The Z protein is made but retained as polymers in hepatocytes, which injures the liver.
- **Crossword** `mol-a1at:clue1` · recall → **recognition** · difficulty 1 · `bc-protein-processing.a1at`: Neutrophil protease left unopposed in α1-antitrypsin deficiency → **ELASTASE**
- **Crossword** `mol-a1at:clue2` · recall → **recognition** · difficulty 2 · `bc-protein-processing.a1at`: Pattern of lower-lobe emphysema typical of α1-antitrypsin deficiency → **PANACINAR**
- **Mechanism Lab** `seq:a1at-emphysema` · mechanism → **mechanism** · difficulty 3 · `bc-protein-processing.a1at`, `bc-protein-processing.folding`: From Z allele to emphysema. Order the chain of events linking the Z allele of SERPINA1 to lung damage.
  1. The Z protein misfolds during synthesis in the hepatocyte ER
  2. Misfolded protein polymerizes and is retained in the liver
  3. Very little α1-antitrypsin reaches the blood
  4. Neutrophil elastase in the alveoli is left uninhibited
  5. Alveolar wall elastin is degraded
  6. Airspaces enlarge (emphysema)
  - The protein is made in the liver but used in the lung: retention in hepatocytes both injures the liver and starves the lung of antiprotease.
- **Mystery Patient** `case:a1at-deficiency` · multistep → **application** · difficulty 4 · `bc-protein-processing.a1at`, `bc-protein-processing.folding`: Short of breath at 38
  - Presentation: A 38-year-old man has two years of progressive breathlessness on exertion.
  - History: He smoked 10 cigarettes a day for 15 years. As a newborn he had prolonged jaundice that resolved. His sister has “liver problems”.
  - Examination: Hyperinflated chest with reduced breath sounds at both bases. Liver edge palpable 2 cm below the costal margin.
  - Laboratory: Spirometry: FEV₁/FVC 0.52 with little bronchodilator response; reduced diffusing capacity. ALT mildly raised. The α1-globulin band on serum protein electrophoresis is almost absent.
  - Imaging & tests: CT chest: emphysema throughout the acini, most marked in the lower lobes.
  - Further clue: Liver biopsy: periportal hepatocytes contain globules that remain PAS-positive after diastase.
  - Q: Which single molecular event best explains both his lung and his liver disease?
  - ◻️ A. Excess iron deposits in liver and lung parenchyma — _Hemochromatosis affects liver, heart and pancreas, not the lungs, and iron is not PAS-positive diastase-resistant protein._
  - ◻️ B. Copper accumulates in hepatocytes and the brain — _Wilson disease causes liver and neurologic disease, not emphysema._
  - ◻️ C. Chloride channel misfolds and is degraded in the ER — _ΔF508 CFTR causes bronchiectasis and pancreatic insufficiency, not panacinar emphysema with PAS-positive hepatocyte globules._
  - ◻️ D. Smoking directly mutates the elastin gene in alveoli — _Smoking accelerates protease damage but does not mutate elastin; the absent α1-globulin band shows an inherited protein deficiency._
  - ✅ E. A misfolded protease inhibitor polymerizes in hepatocytes
  - Panacinar lower-lobe emphysema in a young smoker, neonatal jaundice, an absent α1-globulin band and PAS-positive diastase-resistant hepatocyte globules point to α1-antitrypsin deficiency (PiZZ). The Z protein polymerizes in the hepatocyte ER, injuring the liver, while too little reaches the lung to restrain neutrophil elastase.
  - Differentials: Smoking-related centriacinar emphysema (Upper-lobe predominant, older patients, no liver disease.); Cystic fibrosis (Bronchiectasis, pancreatic insufficiency and biliary cirrhosis, with a positive sweat test.); Chronic viral hepatitis (Explains the liver but not early emphysema or the missing α1-globulin band.)

---

## Collagen synthesis (`mol-collagen-synthesis`)

Objectives: `bc-collagen.synthesis`

**Citations**

1. StatPearls: Biochemistry, Collagen Synthesis — PMID 29939531; NBK507709 — <https://www.ncbi.nlm.nih.gov/books/NBK507709/> — checked: summary
2. Targeting the lysyl oxidases in tumour desmoplasia (copper-dependent cross-linking of collagen and elastin). Biochem Soc Trans 2019 — PMID 31754702 — <https://pubmed.ncbi.nlm.nih.gov/31754702/> — checked: summary
3. Gajko-Galicka A. Mutations in type I collagen genes resulting in osteogenesis imperfecta in humans (glycine residues crucial to triple helix). Acta Biochim Pol 2002 — PMID 12362985 — <https://pubmed.ncbi.nlm.nih.gov/12362985/> — checked: summary

**Verified facts** [supporting citations]

- Collagen consists of three polypeptide chains wound into a triple helix; glycine occupies every third position, allowing tight packing, and the chains are rich in proline, hydroxyproline and hydroxylysine. [1, 3]
- Pro-α chains are modified in the rough ER by glycosylation and vitamin C-dependent hydroxylation; the procollagen triple helix is secreted and its terminal propeptides are cleaved outside the cell to form tropocollagen. [1]
- Scurvy results from impaired hydroxylation in vitamin C deficiency, producing weak connective tissue with bleeding gums and poor wound healing. [1]
- Lysyl oxidases are copper-dependent enzymes required for covalent cross-linking of collagen and elastin in the extracellular matrix. [2]

**Awaiting direct source confirmation** (reasoned or existence-only; must be confirmed before approval)

- Glycosylation of collagen occurs on hydroxylysine residues, so lysine hydroxylation precedes glycosylation. [1]

**Mechanism.** Collagen is built inside the fibroblast and assembled outside it. Inside: pre-pro-α chains with Gly-X-Y repeats enter the rough ER, proline and lysine are hydroxylated (prolyl and lysyl hydroxylases need vitamin C), hydroxylysines are glycosylated, and three chains zip into a procollagen triple helix that is secreted. Outside: propeptides are cleaved to tropocollagen, which self-assembles into fibrils that lysyl oxidase (copper) cross-links for tensile strength.

**Quick.** RER: Gly-X-Y chains → hydroxylation of Pro/Lys (vitamin C) → glycosylation of hydroxylysine → triple helix (procollagen) → secretion. Outside: propeptides cleaved (tropocollagen) → fibrils → lysyl oxidase cross-links (copper).

**Detailed**

> Glycine at every third position is essential because only its single-hydrogen side chain fits in the center of the triple helix. Hydroxyproline stabilizes the helix through hydrogen bonding, which is why defective hydroxylation in scurvy gives unstable collagen, fragile capillaries, bleeding gums and poor wound healing.

> Procollagen is soluble because of its propeptides; cleavage outside the cell allows tropocollagen to assemble into fibrils. Lysyl oxidase, a copper enzyme, converts lysine and hydroxylysine side chains into reactive aldehydes that form covalent cross-links, giving fibrils their tensile strength. Defects in cleavage cause some Ehlers–Danlos types, and copper transport defects (Menkes) impair cross-linking.

**Misconception.** Vitamin C is needed for hydroxylation inside the cell, not for cross-linking outside it; impaired cross-linking points to lysyl oxidase or copper (for example, Menkes disease).

**Takeaway.** Inside: hydroxylate (vitamin C), glycosylate, triple helix. Outside: cleave propeptides, cross-link (copper).

- **MCQ** `mol-collagen-synthesis:mcq1` · multistep → **application** · difficulty 4 · `bc-collagen.synthesis`
  - A 58-year-old man who lives alone and eats almost no fruit or vegetables has swollen bleeding gums, perifollicular hemorrhages and a leg wound that will not heal. Which step of collagen synthesis is impaired first?
  - ◻️ A. Glycine substitution in the triple helix — _Glycine substitutions are inherited structural defects (osteogenesis imperfecta)._
  - ◻️ B. Translation of Gly-X-Y chains on ribosomes — _Translation of collagen chains does not require vitamin C._
  - ✅ C. Hydroxylation of proline and lysine in the rough ER
  - ◻️ D. Cleavage of propeptides outside the fibroblast — _Propeptide cleavage defects cause some Ehlers–Danlos types and do not depend on vitamin C._
  - ◻️ E. Copper-dependent cross-linking of fibrils — _Cross-linking by lysyl oxidase depends on copper, not vitamin C._
  - Steps: (1) Diet without fruit or vegetables → vitamin C deficiency. (2) Vitamin C is needed by prolyl and lysyl hydroxylases in the RER. (3) Underhydroxylated collagen forms an unstable helix → bleeding gums, perifollicular hemorrhage, poor wound healing.
  - Explanation: Vitamin C is the cofactor for prolyl and lysyl hydroxylases; without hydroxylation the triple helix is unstable and vessels and wounds are fragile (scurvy).
- **MCQ** `mol-collagen-synthesis:mcq2` · interpretation → **application** · difficulty 4 · `bc-collagen.synthesis`
  - Fibroblasts from an infant secrete procollagen normally and cleave its propeptides, but the fibrils outside the cell have very few covalent cross-links. Serum copper is very low. Which enzyme activity is reduced?
  - ◻️ A. Prolyl hydroxylase — _Hydroxylation happens before secretion; normal procollagen secretion argues against a hydroxylation defect._
  - ◻️ B. Procollagen peptidase — _Propeptides are cleaved normally in this case._
  - ◻️ C. Lysyl hydroxylase — _Lysyl hydroxylase acts inside the cell and needs vitamin C, not copper._
  - ◻️ D. Glycosyltransferase — _Glycosylation occurs in the RER before secretion._
  - ✅ E. Lysyl oxidase
  - Steps: (1) Secretion and propeptide cleavage are normal → intracellular steps and peptidases are intact. (2) The defect is in extracellular cross-linking. (3) Cross-linking needs lysyl oxidase, a copper enzyme; serum copper is very low → reduced lysyl oxidase activity.
  - Explanation: Lysyl oxidase is a copper enzyme that cross-links collagen and elastin outside the cell; copper deficiency (as in Menkes disease) reduces its activity.
- **True/false** `mol-collagen-synthesis:tf1` · recall → **recognition** · difficulty 2 · `bc-collagen.synthesis`: Propeptides are cleaved from procollagen inside the rough endoplasmic reticulum. → **False**. Propeptides are cleaved after secretion, outside the cell, forming tropocollagen.
- **True/false** `mol-collagen-synthesis:tf2` · recall → **recognition** · difficulty 1 · `bc-collagen.synthesis`: Glycine occupies every third position of collagen chains, allowing the triple helix to pack tightly. → **True**. Correct: Gly-X-Y repeats place glycine at the crowded center of the helix.
- **Crossword** `mol-collagen-synthesis:clue1` · recall → **recognition** · difficulty 2 · `bc-collagen.synthesis`: Collagen molecule formed after propeptides are cleaved outside the cell → **TROPOCOLLAGEN**
- **Crossword** `mol-collagen-synthesis:clue2` · recall → **recognition** · difficulty 1 · `bc-collagen.synthesis`: Vitamin C deficiency with bleeding gums and poor wound healing → **SCURVY**
- **Mechanism Lab** `seq:collagen` · mechanism → **mechanism** · difficulty 3 · `bc-collagen.synthesis`: Making collagen. Order collagen synthesis from the ribosome to a cross-linked fibril.
  1. Pre-pro-α chains (Gly-X-Y repeats) are made into the rough ER
  2. Proline and lysine are hydroxylated (vitamin C)
  3. Hydroxylysine residues are glycosylated
  4. Three chains form the procollagen triple helix
  5. Procollagen is secreted from the fibroblast
  6. Propeptides are cleaved outside the cell, forming tropocollagen
  7. Lysyl oxidase (copper) cross-links the fibrils
  - Hydroxylation and glycosylation precede helix formation inside the cell; cleavage and copper-dependent cross-linking happen outside. Vitamin C defects act early (scurvy); copper defects act last (Menkes).

---

## Osteogenesis imperfecta (`mol-osteogenesis-imperfecta`)

Objectives: `bc-collagen.oi`

**Citations**

1. MedlinePlus Genetics: Osteogenesis imperfecta — <https://medlineplus.gov/genetics/condition/osteogenesis-imperfecta/> — checked: full-text
2. Gajko-Galicka A. Mutations in type I collagen genes resulting in osteogenesis imperfecta in humans. Acta Biochim Pol 2002 — PMID 12362985 — <https://pubmed.ncbi.nlm.nih.gov/12362985/> — checked: summary
3. Marini JC et al. Consortium for osteogenesis imperfecta mutations in the helical domain of type I collagen. Hum Mutat 2007 — PMID 17078022 — <https://pubmed.ncbi.nlm.nih.gov/17078022/> — checked: summary
4. Pepin MG, Byers PH. What every clinical geneticist should know about testing for osteogenesis imperfecta in suspected child abuse cases. Am J Med Genet C 2015 — PMID 26566591 — <https://pubmed.ncbi.nlm.nih.gov/26566591/> — checked: summary
5. Pereira EM. Clinical perspectives on osteogenesis imperfecta versus non-accidental injury. Am J Med Genet C 2015 — PMID 26492946 — <https://pubmed.ncbi.nlm.nih.gov/26492946/> — checked: summary
6. StatPearls: Biochemistry, Collagen Synthesis — PMID 29939531; NBK507709 — <https://www.ncbi.nlm.nih.gov/books/NBK507709/> — checked: summary

**Verified facts** [supporting citations]

- Osteogenesis imperfecta causes bones that fracture easily, often from mild trauma; type I is the mildest form, with blue or grey sclerae and hearing loss in adulthood in about half of people. [1]
- Most cases are autosomal dominant mutations in COL1A1 or COL1A2. Mild forms usually come from inactivation of one COL1A1 allele (less normal collagen); severe and lethal forms come from dominant-negative structural defects, most often glycine substitutions. [2]
- Among 832 structural mutations, 682 were glycine substitutions in the triple-helical domain and 150 altered splice sites. [3]
- In mild OI, diagnostic features such as blue sclerae, dentinogenesis imperfecta, Wormian bones or a family history may be absent at the age of evaluation, so OI can be missed in infants with unexplained fractures. [4]
- Non-accidental injury is more common than OI in unexplained fractures, but OI and other medical causes should always be considered; certain radiologic findings are seen more often in inflicted injury. [5]
- Glycine occupies every third position of collagen chains, enabling tight packing of the triple helix; glycine substitutions are the most common OI mutations and are especially often lethal in α1(I) when the substituting residue is charged or branched. [6, 3]

**Mechanism.** Type I collagen is the main structural protein of bone, sclera, dentin and the middle ear. A null COL1A1 allele halves normal collagen output (milder disease). A glycine substitution is worse: every triple helix needs three chains, so one abnormal chain can spoil most helices it joins (dominant-negative effect), causing severe or lethal disease.

**Quick.** OI: usually autosomal dominant COL1A1/COL1A2 → too little or abnormal type I collagen → fractures with minimal trauma, blue sclerae, hearing loss, dentinogenesis imperfecta. Null allele = mild (type I); glycine substitution = severe (dominant negative). Consider in unexplained infant fractures.

**Detailed**

> OI ranges from mild (type I, few fractures, blue sclerae, normal height) to perinatally lethal (type II). The difference largely reflects whether the mutation reduces the amount of normal collagen or produces structurally abnormal chains that disrupt triple helix assembly.

> Inflicted injury is far more common than OI in infants with unexplained fractures, but mild OI can lack the classic features at presentation. Family history, sclerae, teeth, Wormian bones and the fracture pattern are assessed, and type I collagen gene testing can be considered when the picture is unclear.

**Misconception.** A smaller amount of normal collagen is less harmful than a normal amount of abnormal collagen: null alleles cause mild OI, while glycine substitutions cause severe forms through a dominant-negative effect.

**Takeaway.** Less collagen → mild OI; abnormal collagen (glycine substitution) → severe OI. Keep OI in the differential for unexplained fractures.

- **MCQ** `mol-osteogenesis-imperfecta:mcq1` · comparison → **application** · difficulty 4 · `bc-collagen.oi`
  - Two families have osteogenesis imperfecta. Family 1 carries a COL1A1 nonsense mutation whose mRNA is degraded; Family 2 carries a COL1A1 glycine-to-cysteine substitution in the triple-helical domain. Which family is expected to have more severe disease, and why?
  - ◻️ A. Both equally, because both affect COL1A1 — _The type of mutation, not just the gene, determines severity._
  - ✅ B. Family 2, because abnormal chains disrupt most helices
  - ◻️ C. Family 1, because nonsense mutations are always lethal — _A single null allele usually causes the mild form (type I)._
  - ◻️ D. Family 1, because no collagen is produced at all — _The other COL1A1 allele still makes normal chains, so about half the normal collagen is produced._
  - ◻️ E. Family 2, because cysteine prevents collagen secretion — _The key problem is that the abnormal chain is built into helices and spoils them._
  - Steps: (1) Family 1: mRNA degraded → half the normal collagen, all of it normal → mild OI. (2) Family 2: abnormal chain incorporated into trimers → most helices disrupted. (3) Dominant-negative structural defect → more severe disease.
  - Explanation: A null allele reduces the amount of normal collagen (mild OI). A glycine substitution puts abnormal chains into helices with normal ones, disrupting most of them (dominant negative, severe OI).
- **MCQ** `mol-osteogenesis-imperfecta:mcq2` · interpretation → **application** · difficulty 4 · `bc-collagen.oi`
  - A 4-month-old has a femoral fracture after his parent reports he rolled against a cot rail. There are no bruises. His sclerae are grey-blue, a skull radiograph shows Wormian bones, and his father had several childhood fractures. Which conclusion is best supported?
  - ◻️ A. Scurvy is the likely cause of the fracture — _Scurvy is rare in infants on formula or breast milk and does not cause blue sclerae or Wormian bones._
  - ◻️ B. Menkes disease is the most likely diagnosis — _Menkes causes kinky hair, hypotonia and seizures in boys and is X-linked, not father-to-son._
  - ◻️ C. Inflicted injury is confirmed because a femur fracture occurred in infancy — _A fracture alone does not confirm abuse; these features raise a heritable bone fragility disorder._
  - ◻️ D. Rickets explains the findings — _Rickets causes metaphyseal changes, not blue sclerae or a dominant family history._
  - ✅ E. Osteogenesis imperfecta should be evaluated, e.g. with type I collagen testing
  - Steps: (1) Fracture with minimal reported trauma raises both OI and inflicted injury. (2) Blue-grey sclerae, Wormian bones and an affected father (dominant pattern) point to a heritable collagen defect. (3) Evaluate for OI (including COL1A1/COL1A2 testing) while assessing safeguarding concerns in parallel.
  - Explanation: Blue sclerae, Wormian bones and an affected father support OI; molecular testing helps when unexplained fractures raise the question of inflicted injury.
- **MCQ** `mol-osteogenesis-imperfecta:mcq3` · mechanism → **mechanism** · difficulty 3 · `bc-collagen.oi`
  - Why does replacing a single glycine in the triple-helical domain of the α1(I) chain disrupt type I collagen?
  - ◻️ A. Glycine forms the copper-dependent cross-links between fibrils — _Cross-links form from lysine and hydroxylysine side chains via lysyl oxidase._
  - ◻️ B. Glycine is the attachment site for collagen sugar chains — _Sugars are attached to hydroxylysine residues._
  - ✅ C. Only glycine fits at the crowded center of the triple helix
  - ◻️ D. Losing glycine prevents translation of the COL1A1 mRNA — _The mutant chain is translated; it is the folding of the helix that fails._
  - ◻️ E. Glycine is the residue hydroxylated by vitamin C-dependent enzymes — _Hydroxylation acts on proline and lysine, not glycine._
  - Explanation: Glycine at every third position packs into the center of the helix; a bulkier residue there distorts folding of every trimer that includes the mutant chain.
- **True/false** `mol-osteogenesis-imperfecta:tf1` · recall → **recognition** · difficulty 1 · `bc-collagen.oi`: Most osteogenesis imperfecta is caused by autosomal dominant mutations in COL1A1 or COL1A2. → **True**. Correct: most cases involve type I collagen genes and dominant inheritance.
- **Crossword** `mol-osteogenesis-imperfecta:clue1` · recall → **recognition** · difficulty 2 · `bc-collagen.oi`: Extra skull sutural bones seen on radiographs in brittle bone disease → **WORMIAN**

---

## Medical Connections: complete puzzles (16 tiles, verified single solution against the global catalog)

### Jamming the central dogma · `cx:gene-expression-blockers` · identification → **recognition** · difficulty 3 · `bc-translation.ribosomes`, `bc-translation.toxins`, `bc-replication.topo-drugs`, `bc-transcription.inhibitors`, `bc-transcription.regulation`

- **Bind the bacterial 30S subunit** (tier 1): Gentamicin, Streptomycin, Doxycycline, Tetracycline — Aminoglycosides (gentamicin, streptomycin) cause misreading; tetracyclines (doxycycline, tetracycline) block the A site.
- **Toxins that halt eukaryotic translation** (tier 2): Diphtheria toxin, Pseudomonas exotoxin A, Shiga toxin, Ricin — EF-2 ADP-ribosylation (diphtheria toxin, exotoxin A) or 28S rRNA depurination (Shiga toxin, ricin).
- **Inhibit human topoisomerases** (tier 3): Etoposide, Teniposide, Irinotecan, Topotecan — Etoposide and teniposide trap topoisomerase II; irinotecan and topotecan trap topoisomerase I.
- **Reduce transcription** (tier 4): α-Amanitin, Rifampin, Dactinomycin, TATA box mutation — α-Amanitin (RNA polymerase II), rifampin (bacterial RNA polymerase), dactinomycin (intercalates the template) and a TATA box mutation (weaker promoter) all lower transcription.

Solutions found against 89 catalog categories plus this puzzle's groups and decoys: **1**.
Plausible alternative groupings present on the board (red herrings that cannot complete an alternative board): Antibiotics (any) (6 tiles); Toxins of any origin (5 tiles); Cancer chemotherapy drugs (5 tiles); Plant-derived compounds (5 tiles); Antibiotics (6 tiles); Made by bacteria (7 tiles).

## Connections category bank (builder input, not complete games)

- `grp:translation-toxins` **Toxins that stop eukaryotic translation**: Diphtheria toxin, Pseudomonas exotoxin A, Shiga toxin, Ricin. Diphtheria toxin and exotoxin A ADP-ribosylate EF-2; Shiga toxin and ricin depurinate 28S rRNA.
- `grp:topoisomerase-inhibitors` **Topoisomerase inhibitors**: Etoposide, Teniposide, Irinotecan, Topotecan, Ciprofloxacin, Levofloxacin. Etoposide/teniposide (topoisomerase II), irinotecan/topotecan (topoisomerase I), fluoroquinolones (bacterial gyrase and topoisomerase IV).
- `grp:imprinting-silencing` **Disease from a silenced or missing active gene copy**: Prader–Willi syndrome, Angelman syndrome, Fragile X syndrome, Uniparental disomy. Imprinting (Prader–Willi, Angelman, uniparental disomy) and methylation-driven silencing (fragile X) remove gene function without necessarily changing the sequence.
