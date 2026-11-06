# Biochemistry batch 1 — Molecular biochemistry (core)

Status: **draft, AI-drafted, not medically reviewed.** Reviewer: please mark each concept approved, needs changes or rejected, with notes.

## Nucleotide structure and de novo synthesis (`mol-nucleotides`)

Objectives: `bc-nucleotide-synthesis.structure`, `bc-nucleotide-synthesis.pathways`

Citations: openstax-bio — 14.2 DNA Structure and Sequencing; ncbi-bookshelf — Biochemistry texts on nucleotide metabolism (cite only)

**Facts**

- Purines (adenine, guanine) have two fused rings; pyrimidines (cytosine, uracil, thymine) have one.
- Deamination of cytosine gives uracil; methylation of uracil (as dUMP) gives thymine (dTMP).
- Purines are assembled step by step on ribose-5-phosphate already attached to PRPP; the first committed step is glutamine-PRPP amidotransferase. The first purine made is IMP.
- Pyrimidines are built as a free ring first: carbamoyl phosphate synthetase II (cytosol) → carbamoyl aspartate → dihydroorotate → orotate, which is then attached to PRPP and decarboxylated to UMP by UMP synthase.
- Ribonucleotide reductase converts ribonucleotides to deoxyribonucleotides; thymidylate synthase converts dUMP to dTMP using N⁵,N¹⁰-methylene tetrahydrofolate, which becomes dihydrofolate and must be recycled by dihydrofolate reductase.

**Mechanism.** Every new DNA strand needs deoxyribonucleotides. Ribonucleotide reductase supplies the deoxy sugar and thymidylate synthase supplies thymine, which uses a folate-carried carbon. That makes these two enzymes, and folate recycling, the bottlenecks for DNA synthesis in rapidly dividing cells.

**Quick.** Purines: 2 rings, built on PRPP (first product IMP). Pyrimidines: 1 ring, made as orotate then added to PRPP (UMP synthase). Ribonucleotide reductase makes deoxyribonucleotides; thymidylate synthase makes dTMP using methylene-THF.

**Detailed**

> The two families differ in how they are built. Purine synthesis adds atoms one at a time to a sugar that is already in place, so PRPP is needed from the start. Pyrimidine synthesis makes the orotate ring first and attaches it to PRPP afterwards.

> DNA needs two further steps that RNA does not: removal of the 2′-hydroxyl by ribonucleotide reductase, and methylation of dUMP to dTMP by thymidylate synthase. The methyl group comes from methylene tetrahydrofolate, which is oxidized to dihydrofolate; dihydrofolate reductase regenerates tetrahydrofolate. Shortage of folate or B12 therefore slows DNA synthesis first in the bone marrow, producing megaloblastic anemia.

**Misconception.** Carbamoyl phosphate synthetase II (cytosolic, pyrimidine synthesis) is not the urea-cycle enzyme carbamoyl phosphate synthetase I (mitochondrial, needs N-acetylglutamate).

**Takeaway.** DNA synthesis bottlenecks: ribonucleotide reductase (deoxy sugar) and thymidylate synthase + folate recycling (thymine).

- **MCQ** `mol-nucleotides:mcq1` · mechanism · bc-nucleotide-synthesis.pathways
  - Cultured cells are given an agent that depletes intracellular tetrahydrofolate. Synthesis of which nucleotide is most directly blocked?
  - ✅ a. dTMP from dUMP
  - ◻️ b. dCDP from CDP — _This is a ribonucleotide reductase reaction; it does not consume a folate carbon._
  - ◻️ c. UMP from orotate — _UMP synthase adds orotate to PRPP and decarboxylates it; no folate is used._
  - ◻️ d. CTP from UTP — _CTP synthetase aminates UTP using glutamine, not folate._
  - ◻️ e. Carbamoyl phosphate from glutamine and bicarbonate — _Carbamoyl phosphate synthetase II uses glutamine, bicarbonate and ATP._
  - Explanation: Thymidylate synthase transfers a carbon from N⁵,N¹⁰-methylene-THF to dUMP to make dTMP; without tetrahydrofolate there is no methyl donor.
- **True/false** `mol-nucleotides:tf1` · recognition · bc-nucleotide-synthesis.structure: Thymine is a purine base found in DNA but not RNA. → **False**. Thymine is a pyrimidine; the purines are adenine and guanine.
- **True/false** `mol-nucleotides:tf2` · recognition · bc-nucleotide-synthesis.pathways: In pyrimidine synthesis the ring is completed (as orotate) before it is attached to PRPP. → **True**. Correct: purines are built on PRPP, pyrimidines are attached to it later.
- **Crossword** `mol-nucleotides:clue1` · recognition · bc-nucleotide-synthesis.pathways: Pyrimidine ring intermediate attached to PRPP by UMP synthase → **OROTATE**
- **Crossword** `mol-nucleotides:clue2` · recognition · bc-nucleotide-synthesis.structure: Two-ring base that pairs with cytosine → **GUANINE**

---

## Drugs that block nucleotide synthesis (`mol-antimetabolites`)

Objectives: `bc-nucleotide-synthesis.drug-targets`

Citations: ncbi-bookshelf — StatPearls: Methotrexate; Hydroxyurea; Mycophenolate (cite only)

**Facts**

- Dihydrofolate reductase: methotrexate (human), trimethoprim (bacterial), pyrimethamine (protozoal).
- Thymidylate synthase: 5-fluorouracil (as 5-F-dUMP, forms a stable complex with the enzyme and folate).
- Ribonucleotide reductase: hydroxyurea (also raises fetal hemoglobin in sickle cell disease).
- Dihydroorotate dehydrogenase: leflunomide (pyrimidine synthesis; rheumatoid arthritis).
- IMP dehydrogenase: mycophenolate (lymphocytes depend on de novo guanine synthesis) and ribavirin.
- 6-Mercaptopurine and its prodrug azathioprine inhibit de novo purine synthesis; xanthine oxidase inactivates 6-MP.

**Mechanism.** Each drug removes a building block that dividing cells need for DNA. The cells most affected are those that divide fastest or depend on de novo synthesis (bone marrow, gut epithelium, activated lymphocytes), which explains both their uses and their toxicities.

**Quick.** DHFR: methotrexate, trimethoprim, pyrimethamine. Thymidylate synthase: 5-FU. Ribonucleotide reductase: hydroxyurea. Dihydroorotate DH: leflunomide. IMP DH: mycophenolate, ribavirin. Purine synthesis: 6-MP, azathioprine.

**Detailed**

> Lymphocytes rely heavily on de novo guanine synthesis, whereas many other cells can salvage purines. Blocking IMP dehydrogenase with mycophenolate therefore suppresses lymphocyte proliferation relatively selectively, which is why it is used after transplantation.

> Hydroxyurea inhibits ribonucleotide reductase. In sickle cell disease it increases fetal hemoglobin (HbF), which does not polymerize with HbS. Methotrexate and 5-fluorouracil both starve cells of dTMP and so cause megaloblastic change, mucositis and myelosuppression.

**Misconception.** Leucovorin (folinic acid) rescues methotrexate toxicity because it bypasses dihydrofolate reductase; it worsens, rather than reverses, the action of 5-fluorouracil, whose binding to thymidylate synthase it stabilizes.

**Takeaway.** Name the enzyme, then predict the toxicity: rapidly dividing cells (marrow, mucosa) suffer first.

- **MCQ** `mol-antimetabolites:mcq1` · application · bc-nucleotide-synthesis.drug-targets
  - A 24-year-old man with sickle cell disease starts a daily oral drug after repeated pain crises. Over months his fetal hemoglobin rises and his crises become less frequent; his MCV also rises. Which enzyme does the drug inhibit?
  - ✅ a. Ribonucleotide reductase
  - ◻️ b. Dihydrofolate reductase — _Methotrexate inhibits DHFR; it is not used to raise HbF._
  - ◻️ c. IMP dehydrogenase — _Mycophenolate inhibits IMP dehydrogenase and is an immunosuppressant._
  - ◻️ d. Thymidylate synthase — _5-Fluorouracil inhibits thymidylate synthase; it is a chemotherapy drug._
  - ◻️ e. Xanthine oxidase — _Allopurinol and febuxostat inhibit xanthine oxidase to lower urate._
  - Explanation: Hydroxyurea inhibits ribonucleotide reductase and increases HbF, reducing sickling; macrocytosis is an expected effect.
- **MCQ** `mol-antimetabolites:mcq2` · application · bc-nucleotide-synthesis.drug-targets
  - A kidney transplant recipient takes a drug that inhibits the enzyme converting IMP to xanthosine monophosphate. Why are lymphocytes affected more than most other cells?
  - ✅ a. Lymphocytes depend on de novo guanine nucleotide synthesis more than salvage
  - ◻️ b. Lymphocytes lack dihydrofolate reductase — _All proliferating cells need dihydrofolate reductase._
  - ◻️ c. Lymphocytes cannot take up uridine — _The drug targets purine (guanine) synthesis, not pyrimidine uptake._
  - ◻️ d. The drug is activated only by lymphocyte kinases — _That describes nucleoside analog prodrugs, not this inhibitor._
  - ◻️ e. Lymphocytes have no xanthine oxidase — _Xanthine oxidase is a degradation enzyme and is not the basis of selectivity._
  - Explanation: Mycophenolate blocks IMP dehydrogenase; activated lymphocytes rely on de novo GMP synthesis, so they are selectively starved of guanine nucleotides.
- **True/false** `mol-antimetabolites:tf1` · recognition · bc-nucleotide-synthesis.drug-targets: Leflunomide inhibits dihydroorotate dehydrogenase, an enzyme of pyrimidine synthesis. → **True**. Correct: it reduces pyrimidine supply to activated lymphocytes.
- **True/false** `mol-antimetabolites:tf2` · recognition · bc-nucleotide-synthesis.drug-targets: Trimethoprim inhibits bacterial thymidylate synthase. → **False**. Trimethoprim inhibits bacterial dihydrofolate reductase.
- **Crossword** `mol-antimetabolites:clue1` · recognition · bc-nucleotide-synthesis.drug-targets: Ribonucleotide reductase inhibitor that raises fetal hemoglobin → **HYDROXYUREA**
- **Connections** `grp:antimetabolites` · recognition · bc-nucleotide-synthesis.drug-targets: Block nucleotide synthesis: Methotrexate, 5-Fluorouracil, Hydroxyurea, Leflunomide, Mycophenolate, 6-Mercaptopurine. Methotrexate (DHFR), 5-FU (thymidylate synthase), hydroxyurea (ribonucleotide reductase), leflunomide (dihydroorotate dehydrogenase), mycophenolate (IMP dehydrogenase), 6-MP (purine synthesis).

---

## Hereditary orotic aciduria (`mol-orotic-aciduria`)

Objectives: `bc-nucleotide-synthesis.orotic-aciduria`

Citations: pubmed — PMID 36999056: Hereditary orotic aciduria identified by newborn screening (2023)

**Facts**

- Very rare autosomal recessive deficiency of UMP synthase (UMPS), the bifunctional enzyme that converts orotate to UMP.
- Orotic acid accumulates and is excreted in urine (orotic acid crystals can form).
- Megaloblastic anemia that does not respond to vitamin B12 or folate; growth and developmental delay.
- No hyperammonemia and normal BUN: the urea cycle is intact (contrast OTC deficiency).
- Treated with uridine (uridine triacetate), which bypasses the block and feeds back to reduce orotate production.

**Mechanism.** Without UMP synthase, orotate cannot become UMP, so cells lack pyrimidine nucleotides for DNA. Erythroid precursors divide rapidly and are the first to show impaired DNA synthesis: nuclear maturation lags behind cytoplasmic maturation, giving megaloblasts. Folate and B12 do not help because the block is downstream of both.

**Quick.** UMP synthase deficiency (AR): orotic aciduria + megaloblastic anemia unresponsive to B12/folate + growth delay; ammonia and BUN normal. Treat with uridine.

**Detailed**

> Orotic acid in urine has two classic sources. In OTC deficiency, excess carbamoyl phosphate leaks into the cytosol and drives orotate production; the patient has hyperammonemia and no anemia. In hereditary orotic aciduria the pyrimidine pathway itself is blocked after orotate; the patient has megaloblastic anemia and normal ammonia.

> Uridine is converted to UMP by uridine kinase, bypassing the defective enzyme. The restored pyrimidine supply also feeds back on the early pathway, so orotate production falls. Some countries now detect the disorder by measuring orotic acid on newborn screening.

**Misconception.** Orotic aciduria does not always mean a urea-cycle defect: with normal ammonia and megaloblastic anemia, think UMP synthase deficiency.

**Takeaway.** Orotic aciduria + megaloblastic anemia + normal ammonia = UMP synthase deficiency; give uridine.

- **MCQ** `mol-orotic-aciduria:mcq1` · application · bc-nucleotide-synthesis.orotic-aciduria
  - An 8-month-old has poor growth and pallor. Hemoglobin is 7.9 g/dL with MCV 112 fL and hypersegmented neutrophils. Serum B12 and folate are normal, and the anemia does not improve after supplementation. Plasma ammonia and BUN are normal. Urinalysis shows needle-shaped crystals. Which enzyme is most likely deficient?
  - ✅ a. UMP synthase
  - ◻️ b. Ornithine transcarbamylase — _OTC deficiency causes orotic aciduria with hyperammonemia and no megaloblastic anemia._
  - ◻️ c. Dihydrofolate reductase — _DHFR deficiency would respond to folinic acid and is not associated with orotic aciduria._
  - ◻️ d. Methionine synthase — _Methionine synthase defects raise homocysteine and respond to B12-pathway treatment; no orotic aciduria._
  - ◻️ e. Hypoxanthine-guanine phosphoribosyltransferase — _HGPRT deficiency causes hyperuricemia and neurologic disease, not megaloblastic anemia._
  - Explanation: Orotic aciduria with B12/folate-refractory megaloblastic anemia and normal ammonia indicates UMP synthase deficiency.
- **MCQ** `mol-orotic-aciduria:mcq2` · mechanism · bc-nucleotide-synthesis.orotic-aciduria
  - Why does uridine correct the anemia in hereditary orotic aciduria?
  - ✅ a. It is converted to UMP without UMP synthase, restoring pyrimidine nucleotides
  - ◻️ b. It supplies a methyl group for thymidylate synthase — _The methyl group comes from methylene-THF, not uridine._
  - ◻️ c. It activates carbamoyl phosphate synthetase I — _CPS I is the urea-cycle enzyme and is not involved._
  - ◻️ d. It inhibits ribonucleotide reductase — _Inhibiting ribonucleotide reductase would reduce DNA synthesis._
  - ◻️ e. It increases renal excretion of orotic acid — _Uridine reduces orotate production by feedback; increased excretion is not the mechanism._
  - Explanation: Uridine kinase phosphorylates uridine to UMP, bypassing the block; restored pyrimidines also feed back to reduce orotate synthesis.
- **True/false** `mol-orotic-aciduria:tf1` · recognition · bc-nucleotide-synthesis.orotic-aciduria: Hereditary orotic aciduria causes hyperammonemia because the urea cycle is blocked. → **False**. Ammonia is normal; the block is in pyrimidine synthesis (UMP synthase), not the urea cycle.
- **Crossword** `mol-orotic-aciduria:clue1` · recognition · bc-nucleotide-synthesis.orotic-aciduria: Nucleoside given to bypass UMP synthase deficiency → **URIDINE**

---

## Purine salvage and Lesch–Nyhan syndrome (`mol-purine-salvage`)

Objectives: `bc-purine-salvage.pathway`, `bc-purine-salvage.lesch-nyhan`

Citations: medlineplus — Genetics: Lesch-Nyhan syndrome

**Facts**

- HGPRT salvages hypoxanthine → IMP and guanine → GMP using PRPP; APRT salvages adenine → AMP.
- Degradation: adenosine → inosine (adenosine deaminase) → hypoxanthine → xanthine → uric acid (both steps by xanthine oxidase).
- Lesch–Nyhan syndrome: X-linked recessive (HPRT1) near-total HGPRT deficiency, almost always in boys.
- Without salvage, purine bases are degraded to uric acid and unused PRPP accumulates and stimulates de novo purine synthesis, so uric acid production rises further.
- Features: orange urate crystals in the diaper, developmental delay from 3–6 months, hypotonia then dystonia and choreoathetosis, intellectual disability, compulsive self-injury (lip and finger biting), gout and urate kidney stones.
- Reduced brain dopamine is thought to underlie the movement and behavioral features. Allopurinol lowers urate but does not improve the neurologic disease.

**Mechanism.** HGPRT normally recycles hypoxanthine and guanine back into nucleotides. When it is absent, those bases are oxidized to uric acid instead, and the PRPP the enzyme would have consumed accumulates. PRPP is the substrate of the committed step of de novo purine synthesis, so the cell makes even more purines, which are also degraded to urate.

**Quick.** HGPRT recycles hypoxanthine and guanine. Lesch–Nyhan (X-linked, HPRT1): no salvage → urate overproduction (plus PRPP drives de novo synthesis) → gout, stones, orange diaper crystals; dystonia, intellectual disability, self-biting.

**Detailed**

> Salvage is cheaper than de novo synthesis, which needs many ATP. HGPRT and APRT use PRPP to reattach bases to ribose phosphate. The brain relies relatively heavily on salvage, which may explain why its function suffers when HGPRT is missing.

> Partial HGPRT deficiency causes hyperuricemia, gout and stones with milder or no neurologic disease. Complete deficiency causes the full syndrome. Because the gene is on the X chromosome, carrier mothers are usually unaffected, and affected boys are linked through the maternal line.

**Misconception.** Allopurinol prevents gout and stones in Lesch–Nyhan syndrome but does not prevent the neurologic or self-injurious features.

**Takeaway.** No HGPRT → bases become urate and PRPP drives more purine synthesis → hyperuricemia + dystonia + self-injury in boys.

- **MCQ** `mol-purine-salvage:mcq1` · mechanism · bc-purine-salvage.pathway, bc-purine-salvage.lesch-nyhan
  - In complete HGPRT deficiency, why does de novo purine synthesis increase?
  - ✅ a. Unused PRPP accumulates and drives the committed step of purine synthesis
  - ◻️ b. Uric acid allosterically activates glutamine-PRPP amidotransferase — _Uric acid is an end product and does not activate the pathway._
  - ◻️ c. Xanthine oxidase is induced and consumes IMP — _Xanthine oxidase acts on hypoxanthine and xanthine, not IMP, and is not induced._
  - ◻️ d. Adenosine deaminase is inhibited — _ADA activity is normal in Lesch–Nyhan syndrome._
  - ◻️ e. Ribonucleotide reductase becomes overactive — _Ribonucleotide reductase makes deoxyribonucleotides and is not the cause._
  - Explanation: PRPP that HGPRT would have used builds up; PRPP stimulates glutamine-PRPP amidotransferase, increasing purine production and therefore urate.
- **MCQ** `mol-purine-salvage:mcq2` · application · bc-purine-salvage.lesch-nyhan
  - A 2-year-old boy has developmental delay, generalized dystonia and repeated biting of his lips and fingers. His parents noticed orange grains in his diapers in infancy. Serum uric acid is 11 mg/dL. His mother’s brother had a similar illness. Which enzyme is deficient?
  - ✅ a. Hypoxanthine-guanine phosphoribosyltransferase
  - ◻️ b. Adenosine deaminase — _ADA deficiency causes SCID, not hyperuricemia with self-injury._
  - ◻️ c. Xanthine oxidase — _Xanthine oxidase deficiency causes low uric acid and xanthine stones._
  - ◻️ d. Adenine phosphoribosyltransferase — _APRT deficiency causes 2,8-dihydroxyadenine stones without this neurologic picture._
  - ◻️ e. Glucose-6-phosphatase — _Von Gierke disease causes hyperuricemia but with fasting hypoglycemia and hepatomegaly, not self-injury._
  - Explanation: Hyperuricemia, dystonia, intellectual disability and self-injury in a boy with an affected maternal uncle (X-linked) = Lesch–Nyhan syndrome (HGPRT).
- **True/false** `mol-purine-salvage:tf1` · recognition · bc-purine-salvage.pathway: Xanthine oxidase converts hypoxanthine to xanthine and xanthine to uric acid. → **True**. Correct: both oxidation steps use xanthine oxidase, the target of allopurinol and febuxostat.
- **True/false** `mol-purine-salvage:tf2` · recognition · bc-purine-salvage.lesch-nyhan: Lesch–Nyhan syndrome is inherited in an autosomal dominant pattern. → **False**. It is X-linked recessive (HPRT1); affected individuals are almost always male.
- **Crossword** `mol-purine-salvage:clue1` · recognition · bc-purine-salvage.pathway: Purine base salvaged to IMP by HGPRT → **HYPOXANTHINE**
- **Crossword** `mol-purine-salvage:clue2` · recognition · bc-purine-salvage.lesch-nyhan: Sustained abnormal posturing typical of Lesch–Nyhan syndrome → **DYSTONIA**
- **Mystery Patient** `case:lesch-nyhan` · application · bc-purine-salvage.lesch-nyhan, bc-purine-salvage.pathway: The orange diaper
  - Presentation: An 18-month-old boy is referred because he cannot sit unsupported and has abnormal twisting postures of his arms.
  - History: Development seemed normal until about 4 months. His parents saw orange-brown grains in his diapers as a baby. A maternal uncle had “cerebral palsy” and died young of kidney failure.
  - Examination: Hypotonia with superimposed dystonic posturing. Healing bite wounds on the lower lip and fingertips.
  - Laboratory: Serum uric acid 10.8 mg/dL (high for age). Urine uric acid-to-creatinine ratio markedly raised. Creatinine normal. Blood count normal.
  - Imaging & tests: Renal ultrasound: several small radiolucent stones. Brain MRI: no structural lesion.
  - Further clue: Enzyme activity in red cells: hypoxanthine-guanine phosphoribosyltransferase undetectable.
  - Q: Why does his body make excess uric acid?
  - ✅ Purine bases cannot be salvaged, and accumulated PRPP increases de novo purine synthesis
  - ◻️ Xanthine oxidase is genetically overactive — _Xanthine oxidase is normal; more substrate reaches it._
  - ◻️ Renal tubular urate excretion is blocked — _Urinary urate is high, indicating overproduction, not underexcretion._
  - ◻️ Glucose-6-phosphate accumulates and increases ribose synthesis — _This contributes to hyperuricemia in von Gierke disease, which causes hypoglycemia and hepatomegaly._
  - ◻️ Adenosine deaminase deficiency causes adenosine to be oxidized — _ADA deficiency reduces urate production and causes SCID._
  - Without HGPRT, hypoxanthine and guanine are degraded to urate instead of recycled, and the PRPP the enzyme would have used drives the first committed step of purine synthesis, producing still more purine to degrade. The X-linked family pattern, dystonia and self-injury complete the picture.

---

## Adenosine deaminase deficiency (ADA-SCID) (`mol-ada-deficiency`)

Objectives: `bc-purine-salvage.ada-scid`

Citations: medlineplus — Genetics: Adenosine deaminase deficiency

**Facts**

- Autosomal recessive deficiency of adenosine deaminase, which converts (deoxy)adenosine to (deoxy)inosine.
- Deoxyadenosine accumulates and is phosphorylated to dATP, which inhibits ribonucleotide reductase and depletes the other deoxynucleotides; deoxyadenosine also inhibits S-adenosylhomocysteine hydrolase.
- Lymphocyte precursors are especially vulnerable, so T, B and NK cells are all very low (T⁻B⁻NK⁻ SCID).
- Presents in the first months of life: recurrent and opportunistic infections, chronic diarrhea, thrush, failure to thrive; absent thymic shadow.
- Treated with hematopoietic stem cell transplantation, enzyme replacement (PEG-ADA) or gene therapy; it was the first disorder treated with gene therapy.

**Mechanism.** ADA disposes of deoxyadenosine released from DNA breakdown. Without it, deoxyadenosine and dATP build up inside lymphocytes, which have high kinase activity. dATP shuts off ribonucleotide reductase, so the cell cannot make the other deoxynucleotides, DNA synthesis fails and lymphocytes die.

**Quick.** ADA deficiency (AR): deoxyadenosine → dATP accumulates → inhibits ribonucleotide reductase → lymphocytes die → SCID (low T, B and NK cells) with infections from early infancy.

**Detailed**

> Lymphocytes are rich in the kinases that phosphorylate deoxyadenosine and relatively poor in the enzymes that remove its nucleotides, so the toxic dATP concentrates in them. The resulting deficiency of all three lymphocyte lineages explains why both cellular and humoral immunity fail.

> Infants present before 6 months with severe or opportunistic infections (Pneumocystis, Candida), chronic diarrhea and growth failure. Some patients also have skeletal (costochondral) changes, sensorineural deafness or neurologic problems because the metabolites are toxic beyond the immune system. Milder, later-onset forms correlate with residual enzyme activity.

**Misconception.** ADA deficiency is autosomal recessive; the most common form of SCID overall (common γ-chain, IL2RG) is X-linked.

**Takeaway.** ADA → dATP piles up → ribonucleotide reductase blocked → no lymphocytes → SCID.

- **MCQ** `mol-ada-deficiency:mcq1` · mechanism · bc-purine-salvage.ada-scid
  - Which metabolite most directly causes lymphocyte death in adenosine deaminase deficiency, and how?
  - ✅ a. dATP, by inhibiting ribonucleotide reductase
  - ◻️ b. Uric acid, by forming crystals in lymphoid tissue — _Urate production falls rather than rises when ADA is absent._
  - ◻️ c. Orotic acid, by blocking pyrimidine synthesis — _Orotic acid accumulates in UMP synthase or OTC deficiency._
  - ◻️ d. Inosine, by inhibiting HGPRT — _Inosine is the product ADA cannot make; it is decreased._
  - ◻️ e. Homocysteine, by damaging endothelium — _Homocysteine is unrelated to ADA deficiency._
  - Explanation: Deoxyadenosine is phosphorylated to dATP, which inhibits ribonucleotide reductase and starves lymphocytes of deoxynucleotides.
- **MCQ** `mol-ada-deficiency:mcq2` · application · bc-purine-salvage.ada-scid
  - A 4-month-old girl has persistent oral thrush, chronic diarrhea, weight below the 3rd percentile and Pneumocystis pneumonia. Chest imaging shows no thymic shadow. Lymphocyte count is very low, with low T, B and NK cells. Both parents are healthy and are first cousins. Which enzyme is most likely deficient?
  - ✅ a. Adenosine deaminase
  - ◻️ b. Bruton tyrosine kinase — _BTK deficiency removes B cells only, presents after maternal IgG wanes, and is X-linked._
  - ◻️ c. NADPH oxidase — _Chronic granulomatous disease affects phagocytes and spares lymphocyte numbers._
  - ◻️ d. Hypoxanthine-guanine phosphoribosyltransferase — _HGPRT deficiency causes hyperuricemia and neurologic disease, not SCID._
  - ◻️ e. Common γ chain of cytokine receptors — _IL2RG SCID is X-linked and typically spares B cells (T⁻B⁺NK⁻); this girl has low B cells and consanguineous parents._
  - Explanation: T⁻B⁻NK⁻ SCID in a girl with consanguineous parents (autosomal recessive) fits ADA deficiency.
- **True/false** `mol-ada-deficiency:tf1` · recognition · bc-purine-salvage.ada-scid: Adenosine deaminase deficiency causes SCID with low T, B and NK cells. → **True**. Correct: toxic deoxyadenine nucleotides kill all lymphocyte lineages.
- **Crossword** `mol-ada-deficiency:clue1` · recognition · bc-purine-salvage.ada-scid: Nucleoside that accumulates in ADA deficiency and is phosphorylated to dATP → **DEOXYADENOSINE**

---

## Types of mutation and their effects (`mol-mutation-types`)

Objectives: `bc-mutation-types.classes`, `bc-mutation-types.examples`, `bc-mutation-types.transition`

Citations: openstax-bio — 14.6 DNA Repair (mutations)

**Facts**

- Silent: codon changes but amino acid does not (often at the third "wobble" position).
- Missense: one amino acid replaced by another; conservative if chemically similar, nonconservative if not (e.g. sickle cell: glutamate → valine at position 6 of β-globin).
- Nonsense: codon becomes a stop codon → truncated protein, often with mRNA destroyed by nonsense-mediated decay.
- Frameshift: insertion or deletion not a multiple of 3 shifts the reading frame downstream, usually creating a premature stop.
- Splice-site mutations alter intron removal (exon skipping or intron retention); common in β-thalassemia.
- Transition: purine ↔ purine or pyrimidine ↔ pyrimidine; transversion: purine ↔ pyrimidine.

**Mechanism.** The genetic code is read in non-overlapping triplets. A single base change alters at most one codon, so its effect depends on what that codon becomes (same amino acid, different amino acid, or stop). Insertions and deletions that are not multiples of three change every codon downstream, which usually destroys the protein.

**Quick.** Silent (same amino acid), missense (different amino acid; sickle Glu→Val), nonsense (stop → truncation), frameshift (indel not ×3), splice-site (abnormal splicing; β-thalassemia). Transition = same ring class; transversion = purine ↔ pyrimidine.

**Detailed**

> Severity usually increases from silent to missense to nonsense and frameshift, but context matters. A missense change in an active site can abolish function; a nonsense mutation in the last exon may escape nonsense-mediated decay and produce a shortened, sometimes harmful protein.

> Hemoglobin disorders illustrate the classes. Sickle cell disease is a single missense change that makes deoxygenated hemoglobin polymerize. β-thalassemias arise from many different mutations, including splice-site, promoter and nonsense mutations, that reduce or abolish β-globin production.

**Misconception.** A large deletion is not necessarily worse than a small one: an in-frame deletion can leave a partly functional protein, whereas a 1-base deletion shifts the whole frame.

**Takeaway.** Predict the protein: same amino acid (silent), new amino acid (missense), stop (nonsense), shifted frame (frameshift), mis-splicing (splice-site).

- **MCQ** `mol-mutation-types:mcq1` · application · bc-mutation-types.classes
  - In an early exon, a single base substitution changes the mRNA codon UAC (tyrosine) to UAG. What is the most likely consequence?
  - ✅ a. A truncated protein, often with reduced mRNA from nonsense-mediated decay
  - ◻️ b. No change in the protein because of wobble — _UAG is a stop codon, not a synonymous tyrosine codon (UAU would be silent)._
  - ◻️ c. Replacement of tyrosine by a different amino acid — _That would be a missense mutation; UAG encodes no amino acid._
  - ◻️ d. A shift of the reading frame downstream — _A substitution does not change the number of bases, so the frame is preserved._
  - ◻️ e. Retention of an intron in the mature mRNA — _That results from a splice-site mutation._
  - Explanation: UAC → UAG converts tyrosine to a stop codon: a nonsense mutation, giving premature termination.
- **MCQ** `mol-mutation-types:mcq2` · mechanism · bc-mutation-types.classes
  - Why does deleting a single base near the start of a coding sequence usually abolish protein function, whereas deleting three consecutive bases may not?
  - ✅ a. A one-base deletion shifts every downstream codon; a three-base deletion removes one amino acid and keeps the frame
  - ◻️ b. A one-base deletion always creates a silent change — _Silent changes do not abolish function._
  - ◻️ c. Three-base deletions are repaired by mismatch repair — _Repair efficiency is not the reason; the reading frame is._
  - ◻️ d. One-base deletions prevent transcription of the gene — _Transcription proceeds; the mRNA is translated in the wrong frame._
  - ◻️ e. Three-base deletions are always in introns — _Their location is not restricted to introns._
  - Explanation: Codons are read in triplets; losing one base changes the frame (frameshift), while losing three removes a single codon (in-frame).
- **MCQ** `mol-mutation-types:mcq3` · application · bc-mutation-types.examples, bc-mutation-types.transition
  - A child with chronic hemolysis and painful vaso-occlusive episodes has an A→T substitution in codon 6 of the β-globin gene that replaces glutamate with valine. How is this mutation classified?
  - ✅ a. Missense (nonconservative) and a transversion
  - ◻️ b. Nonsense and a transition — _An amino acid is substituted, not a stop codon; A→T is purine → pyrimidine (transversion)._
  - ◻️ c. Silent and a transversion — _The amino acid changes, so it is not silent._
  - ◻️ d. Frameshift — _No bases are inserted or deleted._
  - ◻️ e. Splice-site mutation — _Codon 6 is coding sequence, not a splice junction._
  - Explanation: Glu → Val (charged to hydrophobic) is a nonconservative missense change; A (purine) → T (pyrimidine) is a transversion.
- **True/false** `mol-mutation-types:tf1` · recognition · bc-mutation-types.classes: A silent mutation changes the codon but not the encoded amino acid. → **True**. Correct: redundancy of the code (often the third base) makes it silent.
- **True/false** `mol-mutation-types:tf2` · recognition · bc-mutation-types.transition: A cytosine-to-thymine change is a transversion. → **False**. C → T is pyrimidine → pyrimidine, a transition.
- **True/false** `mol-mutation-types:tf3` · recognition · bc-mutation-types.examples: Splice-site mutations are a common cause of β-thalassemia. → **True**. Correct: they cause exon skipping or intron retention and reduce β-globin output.
- **Crossword** `mol-mutation-types:clue1` · recognition · bc-mutation-types.classes: Point mutation that creates a premature stop codon → **NONSENSE**
- **Crossword** `mol-mutation-types:clue2` · recognition · bc-mutation-types.transition: Point mutation exchanging a purine for a pyrimidine → **TRANSVERSION**

---

## Single-strand DNA repair: excision repair and xeroderma pigmentosum (`mol-single-strand-repair`)

Objectives: `bc-dna-repair.ssb-pathways`, `bc-dna-repair.xp`, `bc-dna-repair.mutyh`

Citations: medlineplus — Genetics: Xeroderma pigmentosum; MUTYH-associated polyposis; openstax-bio — 14.6 DNA Repair

**Facts**

- Nucleotide excision repair (NER): recognizes bulky, helix-distorting lesions such as UV-induced pyrimidine (thymine) dimers; an endonuclease cuts on both sides, an oligonucleotide is removed, polymerase fills the gap and ligase seals it.
- Base excision repair (BER): a DNA glycosylase removes a single damaged base (deaminated, oxidized or alkylated, e.g. uracil from cytosine deamination); AP endonuclease cuts the backbone, polymerase replaces the nucleotide, ligase seals.
- Mismatch repair (MMR): corrects replication errors on the newly synthesized strand (detailed with Lynch syndrome).
- Xeroderma pigmentosum: autosomal recessive NER defect (XPA, XPC, ERCC genes) → extreme UV sensitivity, sunburn after minimal exposure, freckling by age 2, early basal cell, squamous cell carcinoma and melanoma; eye damage; some types have neurologic degeneration.
- MUTYH-associated polyposis: autosomal recessive BER defect; the MUTYH glycosylase normally removes adenine mispaired with oxidized guanine (8-oxoguanine). Failure causes G:C → T:A transversions (often in APC), tens to hundreds of colorectal polyps and high colorectal cancer risk.

**Mechanism.** Each pathway recognizes a different kind of damage. NER handles lesions that distort the helix, so it is the only route for removing UV dimers in humans; without it, unrepaired dimers cause C → T mutations in genes such as TP53 in sun-exposed skin. BER handles small base changes one base at a time, and MUTYH is the BER glycosylase that guards against oxidative G → T mutations.

**Quick.** NER removes bulky lesions (UV dimers) → defective in xeroderma pigmentosum (AR; childhood skin cancers, eye damage). BER removes single damaged bases via glycosylases → MUTYH defect causes recessive polyposis. MMR fixes replication mismatches.

**Detailed**

> UV-B light links adjacent pyrimidines on the same strand. These dimers stall polymerases and, if bypassed by error-prone polymerases, cause characteristic C → T mutations. Patients with XP accumulate these mutations quickly, so skin cancers appear in childhood rather than late adulthood; strict sun protection is the main preventive measure. A variant form (POLH) has normal NER but defective bypass polymerase.

> Reactive oxygen species convert guanine to 8-oxoguanine, which pairs with adenine. If the adenine is not removed, the next replication fixes a G:C → T:A transversion. MUTYH removes that adenine. Unlike familial adenomatous polyposis (autosomal dominant APC), MUTYH-associated polyposis is recessive, so parents are usually unaffected and siblings share the risk.

**Misconception.** Xeroderma pigmentosum is not a pigment disorder: the freckling and cancers are consequences of unrepaired UV damage.

**Takeaway.** Bulky UV damage → NER (XP); single damaged base → BER (MUTYH polyposis); replication mismatch → MMR (Lynch).

- **MCQ** `mol-single-strand-repair:mcq1` · mechanism · bc-dna-repair.ssb-pathways
  - Spontaneous deamination converts a cytosine in DNA to uracil. Which enzyme initiates repair of this lesion?
  - ✅ a. Uracil-DNA glycosylase (base excision repair)
  - ◻️ b. XPA–XPC damage recognition complex (nucleotide excision repair) — _NER recognizes bulky helix-distorting lesions, not single deaminated bases._
  - ◻️ c. MutS homolog (mismatch repair) — _MMR corrects replication errors on the new strand; uracil in DNA is removed by a glycosylase._
  - ◻️ d. Ku–DNA-PKcs complex — _Ku binds double-strand break ends in nonhomologous end joining._
  - ◻️ e. Telomerase — _Telomerase extends chromosome ends and does not repair bases._
  - Explanation: BER begins when a glycosylase excises the damaged base (uracil), leaving an abasic site for AP endonuclease.
- **MCQ** `mol-single-strand-repair:mcq2` · application · bc-dna-repair.xp
  - A 9-year-old girl has had severe blistering sunburns since infancy, extensive freckling on her face and forearms, and has had two basal cell carcinomas removed. She also has photophobia and conjunctival injection. Her parents are unaffected. Which process is defective?
  - ✅ a. Excision of UV-induced pyrimidine dimers by nucleotide excision repair
  - ◻️ b. Removal of adenine opposite 8-oxoguanine — _That is MUTYH (base excision repair), which causes colorectal polyposis._
  - ◻️ c. Repair of replication mismatches — _Mismatch repair defects cause Lynch syndrome with colorectal and endometrial cancers._
  - ◻️ d. Repair of DNA interstrand crosslinks — _Fanconi anemia causes marrow failure and limb anomalies, not extreme photosensitivity._
  - ◻️ e. Melanin synthesis by tyrosinase — _Albinism reduces pigment; it does not cause blistering after minimal sun or childhood carcinomas in this pattern._
  - Explanation: Childhood skin cancers with extreme UV sensitivity and eye involvement in a child of unaffected parents = xeroderma pigmentosum (autosomal recessive NER defect).
- **MCQ** `mol-single-strand-repair:mcq3` · mechanism · bc-dna-repair.xp
  - Why do patients with xeroderma pigmentosum develop skin cancers decades earlier than the general population?
  - ✅ a. UV-induced pyrimidine dimers persist and cause mutations in growth-control genes
  - ◻️ b. Melanocytes fail to produce melanin — _Pigment production is normal; repair is defective._
  - ◻️ c. Skin cells have shortened telomeres — _Telomere length is not the defect in XP._
  - ◻️ d. Mismatch repair fails, causing microsatellite instability — _MSI is the signature of mismatch repair defects (Lynch syndrome)._
  - ◻️ e. Immune surveillance of skin is absent — _XP is not primarily an immunodeficiency._
  - Explanation: Without NER, UV dimers are not removed; mutations such as C → T in TP53 accumulate rapidly in sun-exposed skin.
- **MCQ** `mol-single-strand-repair:mcq4` · mechanism · bc-dna-repair.mutyh
  - A 48-year-old man has 60 colorectal adenomas. Genetic testing finds biallelic variants in a gene encoding a glycosylase that removes adenine paired with 8-oxoguanine. His parents had no polyps. What mutation signature is expected in his adenomas?
  - ✅ a. G:C → T:A transversions, often in APC
  - ◻️ b. Microsatellite instability — _MSI results from mismatch repair defects (Lynch syndrome)._
  - ◻️ c. C → T transitions at adjacent pyrimidines — _That is the UV signature seen when NER fails._
  - ◻️ d. CGG repeat expansion — _Repeat expansions cause fragile X and other repeat disorders._
  - ◻️ e. Balanced chromosomal translocations — _Translocations are not the result of base excision repair defects._
  - Explanation: Without MUTYH, adenine stays opposite 8-oxoguanine; replication fixes G:C → T:A transversions, frequently inactivating APC.
- **True/false** `mol-single-strand-repair:tf1` · recognition · bc-dna-repair.ssb-pathways: Nucleotide excision repair removes UV-induced thymine dimers. → **True**. Correct: NER excises an oligonucleotide containing the bulky lesion.
- **True/false** `mol-single-strand-repair:tf2` · recognition · bc-dna-repair.xp: Xeroderma pigmentosum is inherited in an autosomal dominant pattern. → **False**. It is autosomal recessive.
- **True/false** `mol-single-strand-repair:tf3` · recognition · bc-dna-repair.mutyh: MUTYH-associated polyposis is autosomal recessive, unlike familial adenomatous polyposis. → **True**. Correct: biallelic MUTYH variants are needed; FAP (APC) is autosomal dominant.
- **Crossword** `mol-single-strand-repair:clue1` · recognition · bc-dna-repair.ssb-pathways: Enzyme that starts base excision repair by removing a damaged base → **GLYCOSYLASE**
- **Crossword** `mol-single-strand-repair:clue2` · recognition · bc-dna-repair.xp: Early pigment change on sun-exposed skin in xeroderma pigmentosum → **FRECKLING**
- **Connections** `grp:dna-repair-defects` · recognition · bc-dna-repair.xp, bc-dna-repair.lynch, bc-dna-repair.fanconi, bc-dna-repair.bloom, bc-dna-repair.mutyh: DNA repair defects: Xeroderma pigmentosum, Lynch syndrome, Fanconi anemia, Bloom syndrome, MUTYH-associated polyposis. Each results from failed DNA repair: nucleotide excision (XP), mismatch (Lynch), interstrand crosslink (Fanconi), RecQ helicase in recombination (Bloom) and base excision (MUTYH).

---

## Mismatch repair and Lynch syndrome (`mol-lynch`)

Objectives: `bc-dna-repair.lynch`

Citations: medlineplus — Genetics: Lynch syndrome

**Facts**

- Mismatch repair proteins (MSH2–MSH6 recognize the mismatch; MLH1–PMS2 direct excision) correct base mismatches and small insertion–deletion loops left by DNA polymerase on the new strand.
- Lynch syndrome (hereditary nonpolyposis colorectal cancer): autosomal dominant germline variant in MLH1, MSH2, MSH6 or PMS2, or an EPCAM deletion that silences MSH2.
- Tumors show microsatellite instability (MSI-high) and loss of MMR protein staining on immunohistochemistry.
- Colorectal cancer typically in the 40s–50s, often proximal (right-sided), arising from few polyps; endometrial cancer is the most common extracolonic cancer; ovarian, gastric, small bowel, urinary tract and others are also increased.
- Penetrance is incomplete: not every carrier develops cancer.

**Mechanism.** Microsatellites are short repeats that polymerase often slips on. Mismatch repair normally fixes these slippage errors. Tumor cells that lose both copies of an MMR gene (one inherited, one acquired: second hit) accumulate thousands of length changes in repeats, including repeats within growth-control genes, so cancers develop faster from fewer polyps.

**Quick.** Lynch syndrome (AD; MLH1, MSH2, MSH6, PMS2, EPCAM): mismatch repair fails → microsatellite instability → early, often right-sided colorectal cancer plus endometrial, ovarian and other cancers, without polyposis.

**Detailed**

> Each patient inherits one nonfunctional allele in every cell; a tumor arises when the remaining allele is lost in a colonic or endometrial cell. MMR-deficient cells then mutate at a high rate, which accelerates the adenoma-to-carcinoma sequence. Colonoscopy intervals are therefore shorter than in the general population.

> Testing tumors for MSI or for loss of MMR proteins identifies possible Lynch syndrome. Not all MSI tumors are inherited: sporadic tumors often lose MLH1 expression by promoter hypermethylation. The high mutational load of MSI tumors also makes them responsive to immune checkpoint inhibitors.

**Misconception.** "Nonpolyposis" does not mean no polyps: Lynch cancers arise from adenomas, but patients do not have the hundreds of polyps seen in FAP.

**Takeaway.** Young colorectal + endometrial cancers in a dominant pedigree, few polyps, MSI-high tumor = Lynch syndrome (mismatch repair).

- **MCQ** `mol-lynch:mcq1` · mechanism · bc-dna-repair.lynch
  - A colon adenocarcinoma shows variable lengths of short tandem repeats compared with the patient’s normal tissue. Loss of which normal process best explains this finding?
  - ✅ a. Correction of polymerase slippage errors on the newly synthesized strand
  - ◻️ b. Excision of UV-induced pyrimidine dimers — _NER defects cause UV-induced skin cancers, not repeat-length instability._
  - ◻️ c. Removal of adenine opposite 8-oxoguanine — _MUTYH defects cause G:C → T:A transversions._
  - ◻️ d. Repair of double-strand breaks with a sister chromatid — _Homologous recombination defects cause genomic instability but not microsatellite instability._
  - ◻️ e. Maintenance of telomere length — _Telomere loss does not cause microsatellite length changes._
  - Explanation: Microsatellite instability = failed mismatch repair, which normally corrects slippage and mismatches left by DNA polymerase.
- **MCQ** `mol-lynch:mcq2` · application · bc-dna-repair.lynch
  - A 44-year-old woman is diagnosed with adenocarcinoma of the cecum; colonoscopy shows only two other adenomas. Her mother had endometrial cancer at 50 and her maternal grandfather had colon cancer at 48. Germline variants in which gene group are most likely?
  - ✅ a. DNA mismatch repair genes (MLH1, MSH2, MSH6, PMS2)
  - ◻️ b. APC — _APC (FAP) causes hundreds to thousands of adenomas._
  - ◻️ c. MUTYH — _MUTYH polyposis is recessive and usually involves many polyps._
  - ◻️ d. BRCA1 — _BRCA1 causes breast and ovarian cancer predominantly._
  - ◻️ e. TP53 — _Li–Fraumeni causes sarcomas, breast cancer, brain tumors and adrenocortical carcinoma._
  - Explanation: Early right-sided colon cancer with few polyps and endometrial cancer in a dominant pattern points to Lynch syndrome.
- **True/false** `mol-lynch:tf1` · recognition · bc-dna-repair.lynch: Lynch syndrome is inherited in an autosomal recessive pattern. → **False**. Lynch syndrome is autosomal dominant with incomplete penetrance.
- **Crossword** `mol-lynch:clue1` · recognition · bc-dna-repair.lynch: Short tandem repeat that becomes unstable when mismatch repair fails → **MICROSATELLITE**
- **Connections** `grp:dna-repair-defects` · recognition · bc-dna-repair.xp, bc-dna-repair.lynch, bc-dna-repair.fanconi, bc-dna-repair.bloom, bc-dna-repair.mutyh: DNA repair defects: Xeroderma pigmentosum, Lynch syndrome, Fanconi anemia, Bloom syndrome, MUTYH-associated polyposis. Each results from failed DNA repair: nucleotide excision (XP), mismatch (Lynch), interstrand crosslink (Fanconi), RecQ helicase in recombination (Bloom) and base excision (MUTYH).

---

## Double-strand break repair: homologous recombination and NHEJ (`mol-double-strand-repair`)

Objectives: `bc-dna-repair.dsb-pathways`, `bc-dna-repair.brca`, `bc-dna-repair.nhej-scid`, `bc-dna-repair.bloom`

Citations: medlineplus — Genetics: BRCA2 gene; Bloom syndrome; openstax-bio — 14.6 DNA Repair

**Facts**

- Homologous recombination (HR): uses the intact sister chromatid as a template, so it is accurate; active in S and G2 phases. Proteins include BRCA1, BRCA2 and RAD51.
- Nonhomologous end joining (NHEJ): ligates broken ends directly (Ku70/80, DNA-PKcs, Artemis, DNA ligase IV), often with small insertions or deletions; available throughout the cell cycle. It is also used to join gene segments in V(D)J recombination.
- BRCA1 and BRCA2: autosomal dominant tumor suppressors (second hit in the tumor). Risks of breast (including male breast with BRCA2), ovarian, prostate and pancreatic cancer. HR-deficient tumors are sensitive to PARP inhibitors (synthetic lethality) and platinum drugs.
- Defects in NHEJ factors (Artemis, DNA ligase IV, DNA-PKcs) cause SCID with marked sensitivity to ionizing radiation.
- Bloom syndrome: autosomal recessive BLM (RecQ helicase) defect → excessive sister chromatid exchange; severe growth deficiency, sun-sensitive butterfly rash on the face, immunodeficiency and very high cancer risk.

**Mechanism.** A double-strand break leaves no intact template on the same molecule. HR copies the missing information from the sister chromatid and so restores the original sequence. NHEJ simply rejoins the ends, which is fast but can lose or add bases. Lymphocytes deliberately cut DNA during V(D)J recombination and rely on NHEJ to rejoin the segments, so NHEJ defects block lymphocyte development.

**Quick.** HR (S/G2; BRCA1, BRCA2, RAD51) uses the sister chromatid: accurate. NHEJ (Ku, DNA-PKcs, Artemis, ligase IV) rejoins ends: error-prone; also does V(D)J joining, so defects cause radiosensitive SCID. Bloom: BLM helicase, growth deficiency, facial rash, cancer.

**Detailed**

> Because HR needs a sister chromatid, it operates after DNA replication. BRCA2 loads RAD51 onto single-stranded DNA so it can invade the homologous duplex. Tumors lacking HR depend on other repair routes; PARP inhibition removes one of these, so HR-deficient cancer cells die while normal cells (with one working BRCA allele) survive. This is synthetic lethality.

> In V(D)J recombination, RAG enzymes cut DNA at gene segments and NHEJ factors open and ligate the ends. Without Artemis or DNA ligase IV the receptors cannot be assembled, so T and B cells fail to develop; NK cells are spared. The same cells cannot repair radiation-induced breaks, which matters if radiation or radiographs are used.

**Misconception.** BRCA-related cancer predisposition is dominant in families, but the cancer cell needs loss of the second allele; carriers are not HR-deficient in every cell.

**Takeaway.** Accurate DSB repair = HR (BRCA); quick and error-prone = NHEJ (also V(D)J, so defects → radiosensitive SCID).

- **MCQ** `mol-double-strand-repair:mcq1` · mechanism · bc-dna-repair.dsb-pathways
  - Why is repair of a double-strand break by nonhomologous end joining more likely to leave a mutation than repair by homologous recombination?
  - ✅ a. NHEJ ligates the broken ends without a template, so bases may be lost or added
  - ◻️ b. NHEJ uses RNA as a template — _Neither pathway uses an RNA template._
  - ◻️ c. NHEJ only occurs in G1 when no DNA polymerase is available — _NHEJ is not restricted to G1, and polymerases are available._
  - ◻️ d. HR excises the entire chromosome arm — _HR copies a short region from the sister chromatid._
  - ◻️ e. NHEJ uses the homologous chromosome from the other parent — _Using the other parental homolog would cause loss of heterozygosity; NHEJ uses no template._
  - Explanation: HR copies the sister chromatid sequence (accurate); NHEJ processes and joins ends directly (error-prone).
- **MCQ** `mol-double-strand-repair:mcq2` · application · bc-dna-repair.brca, bc-dna-repair.dsb-pathways
  - A 38-year-old woman with high-grade serous ovarian cancer has a germline pathogenic BRCA1 variant. Her oncologist adds a PARP inhibitor. Why are her tumor cells especially sensitive to this drug?
  - ✅ a. They lack homologous recombination, so breaks that arise when PARP-dependent repair is blocked cannot be fixed
  - ◻️ b. PARP inhibitors block BRCA1 transcription — _They inhibit PARP enzymes; BRCA1 is already nonfunctional in the tumor._
  - ◻️ c. BRCA1-deficient cells overexpress PARP as a drug target — _Sensitivity reflects the repair defect, not target overexpression._
  - ◻️ d. Her normal cells also lack all BRCA1 function — _Normal cells keep one working allele; only the tumor has lost both._
  - ◻️ e. PARP inhibitors restore mismatch repair — _They do not affect mismatch repair._
  - Explanation: Synthetic lethality: losing both HR (BRCA1 in the tumor) and PARP-mediated repair kills the cancer cell, while normal cells retain HR.
- **MCQ** `mol-double-strand-repair:mcq3` · mechanism · bc-dna-repair.nhej-scid
  - An infant with recurrent infections has absent T and B cells but normal NK cells. Fibroblasts from the infant are unusually sensitive to ionizing radiation. A defect in which process best explains both findings?
  - ✅ a. Nonhomologous end joining
  - ◻️ b. Nucleotide excision repair — _NER repairs UV damage; it is not needed for V(D)J recombination._
  - ◻️ c. Purine degradation by adenosine deaminase — _ADA deficiency lowers NK cells too and does not cause radiosensitivity._
  - ◻️ d. Signaling through the common γ chain — _γ-chain SCID removes T and NK cells and is not radiosensitive._
  - ◻️ e. Mismatch repair — _MMR defects cause cancer predisposition, not SCID._
  - Explanation: NHEJ joins V(D)J segments and repairs radiation breaks; its loss (e.g. Artemis) causes T⁻B⁻NK⁺ SCID with radiosensitivity.
- **True/false** `mol-double-strand-repair:tf1` · recognition · bc-dna-repair.dsb-pathways: Homologous recombination uses the sister chromatid as a template and is active mainly in S and G2. → **True**. Correct: a sister chromatid exists only after DNA replication.
- **True/false** `mol-double-strand-repair:tf2` · recognition · bc-dna-repair.brca: BRCA2 variants increase the risk of male breast cancer. → **True**. Correct: BRCA2 carries a notable male breast cancer risk, plus prostate and pancreatic cancer.
- **True/false** `mol-double-strand-repair:tf3` · recognition · bc-dna-repair.nhej-scid: V(D)J recombination depends on nonhomologous end joining. → **True**. Correct: RAG cuts the DNA and NHEJ factors join the segments.
- **True/false** `mol-double-strand-repair:tf4` · recognition · bc-dna-repair.bloom: Bloom syndrome is caused by a defective nucleotide excision repair protein. → **False**. Bloom syndrome is caused by BLM, a RecQ helicase that maintains genome stability during recombination and replication.
- **Crossword** `mol-double-strand-repair:clue1` · recognition · bc-dna-repair.dsb-pathways: Kind of recombination that repairs double-strand breaks using the sister chromatid → **HOMOLOGOUS**
- **Crossword** `mol-double-strand-repair:clue2` · recognition · bc-dna-repair.nhej-scid: NHEJ nuclease whose loss causes radiosensitive SCID → **ARTEMIS**
- **Crossword** `mol-double-strand-repair:clue3` · recognition · bc-dna-repair.bloom: Syndrome of BLM helicase deficiency with facial rash and short stature → **BLOOM**
- **Connections** `grp:dna-repair-defects` · recognition · bc-dna-repair.xp, bc-dna-repair.lynch, bc-dna-repair.fanconi, bc-dna-repair.bloom, bc-dna-repair.mutyh: DNA repair defects: Xeroderma pigmentosum, Lynch syndrome, Fanconi anemia, Bloom syndrome, MUTYH-associated polyposis. Each results from failed DNA repair: nucleotide excision (XP), mismatch (Lynch), interstrand crosslink (Fanconi), RecQ helicase in recombination (Bloom) and base excision (MUTYH).

---

## Ataxia–telangiectasia: the ATM DNA damage response (`mol-ataxia-telangiectasia`)

Objectives: `bc-dna-repair.atm`

Citations: medlineplus — Genetics: Ataxia-telangiectasia

**Facts**

- ATM is a protein kinase activated by DNA double-strand breaks. It phosphorylates p53, CHK2 and other targets to arrest the cell cycle and coordinate repair; it is a damage sensor and signaling hub, not itself a repair pathway.
- Ataxia–telangiectasia: autosomal recessive ATM loss.
- Progressive cerebellar ataxia from early childhood (usually before age 5), oculomotor apraxia, slurred speech; wheelchair use often by adolescence.
- Oculocutaneous telangiectasias (conjunctivae, skin).
- Immunodeficiency with low IgA (often IgG2 and IgE) and recurrent sinopulmonary infections.
- Raised serum α-fetoprotein; greatly increased risk of lymphoma and leukemia; marked sensitivity to ionizing radiation. Heterozygous carriers have an increased breast cancer risk.

**Mechanism.** When ATM is missing, cells do not recognize double-strand breaks: they fail to pause the cell cycle and to recruit repair, so breaks persist. Cerebellar neurons die, chromosomal breaks and translocations accumulate (especially in lymphocytes, which make physiological breaks during V(D)J and class switching), and radiation is poorly tolerated.

**Quick.** ATM = kinase sensing double-strand breaks (activates p53/CHK2). Ataxia–telangiectasia (AR): childhood cerebellar ataxia, telangiectasias, IgA deficiency with sinopulmonary infections, ↑AFP, lymphoma risk, radiosensitivity.

**Detailed**

> The ataxia begins as the child starts to walk and progresses; MRI eventually shows cerebellar atrophy. Telangiectasias usually appear later, around school age, so early cases can be mistaken for other ataxias. The raised AFP is a useful diagnostic clue, although its cause is unknown.

> Lymphocytes deliberately break DNA during receptor gene and class-switch recombination. Without ATM, these breaks are handled poorly, giving antibody deficiency (low IgA, IgG2, IgE) and translocations that predispose to lymphoid cancers. Diagnostic and therapeutic radiation should be minimized.

**Misconception.** ATM is not a component of nonhomologous end joining; it is the kinase that detects double-strand breaks and signals to checkpoints and repair.

**Takeaway.** Ataxia + telangiectasias + sinopulmonary infections (low IgA) + high AFP + radiosensitivity = ATM loss.

- **MCQ** `mol-ataxia-telangiectasia:mcq1` · mechanism · bc-dna-repair.atm
  - Cells lacking ATM are exposed to ionizing radiation. Which response is most impaired?
  - ✅ a. Activation of p53 and cell-cycle arrest after double-strand breaks
  - ◻️ b. Excision of thymine dimers — _Thymine dimers are UV lesions repaired by NER._
  - ◻️ c. Removal of uracil from DNA — _Uracil is removed by base excision repair glycosylases._
  - ◻️ d. Correction of replication mismatches — _Mismatch repair is ATM-independent._
  - ◻️ e. Addition of telomeric repeats — _Telomerase is not ATM._
  - Explanation: ATM senses double-strand breaks and phosphorylates p53 and CHK2 to halt the cycle and direct repair.
- **MCQ** `mol-ataxia-telangiectasia:mcq2` · application · bc-dna-repair.atm
  - A 6-year-old boy has a wide-based unsteady gait that began when he started walking and has worsened, plus difficulty initiating eye movements. He has had pneumonia three times. Examination shows small dilated vessels on the conjunctivae. Serum IgA is low and α-fetoprotein is elevated. He is at greatest long-term risk of which complication?
  - ✅ a. Lymphoma or leukemia
  - ◻️ b. Hepatocellular carcinoma from the raised AFP — _AFP is raised for unknown reasons, not because of a liver tumor._
  - ◻️ c. Hypertrophic cardiomyopathy — _That fits Friedreich ataxia, not this picture with telangiectasias and IgA deficiency._
  - ◻️ d. Basal cell carcinomas in childhood — _Childhood skin cancers suggest xeroderma pigmentosum._
  - ◻️ e. Anaphylaxis to blood products — _Possible with selective IgA deficiency, but the major risk in this syndrome is lymphoid cancer._
  - Explanation: Ataxia–telangiectasia: failed DNA damage response causes translocations in lymphocytes and high risk of lymphoma and leukemia.
- **True/false** `mol-ataxia-telangiectasia:tf1` · recognition · bc-dna-repair.atm: Patients with ataxia–telangiectasia are unusually sensitive to ionizing radiation. → **True**. Correct: they cannot respond normally to double-strand breaks.
- **True/false** `mol-ataxia-telangiectasia:tf2` · recognition · bc-dna-repair.atm: ATM is the DNA ligase that joins broken ends in nonhomologous end joining. → **False**. ATM is a kinase that senses double-strand breaks and signals; DNA ligase IV joins ends in NHEJ.
- **Crossword** `mol-ataxia-telangiectasia:clue1` · recognition · bc-dna-repair.atm: Small dilated vessel seen on the conjunctivae in ATM deficiency → **TELANGIECTASIA**

---

## Fanconi anemia: interstrand crosslink repair (`mol-fanconi-anemia`)

Objectives: `bc-dna-repair.fanconi`

Citations: medlineplus — Genetics: Fanconi anemia

**Facts**

- The Fanconi anemia (FA) pathway repairs DNA interstrand crosslinks, which block replication: the FA core complex activates FANCD2–FANCI, which recruits nucleases, translesion polymerases and homologous recombination (BRCA2 is FANCD1).
- More than 20 genes; most cases are autosomal recessive (FANCA, FANCC, FANCG most common); rare X-linked (FANCB) and dominant (RAD51) forms.
- Progressive bone marrow failure (aplastic anemia), often in childhood; macrocytosis and raised fetal hemoglobin may precede cytopenias.
- Physical findings: short stature, absent or abnormal thumbs and radii, café-au-lait spots and hypopigmentation, microcephaly, renal and genital anomalies (not all present).
- High risk of myelodysplastic syndrome, AML and squamous cell carcinomas of head, neck and anogenital region.
- Diagnosis: increased chromosomal breakage when cells are exposed to crosslinking agents (diepoxybutane or mitomycin C).

**Mechanism.** Interstrand crosslinks tie the two strands together so they cannot separate for replication or transcription. The FA pathway coordinates cutting out the crosslink, bypassing it and rebuilding the broken strand by homologous recombination. Without it, crosslinks from endogenous aldehydes and drugs cause breaks and cell death, depleting hematopoietic stem cells and creating chromosomal instability.

**Quick.** Fanconi anemia: FA pathway fails to repair interstrand crosslinks (mostly AR). Marrow failure, short stature, thumb/radial anomalies, café-au-lait spots; AML and head and neck SCC risk. Diagnose by chromosomal breakage with diepoxybutane or mitomycin C.

**Detailed**

> Crosslinking agents are used diagnostically because patient cells cannot repair the damage they cause, producing radial chromosome figures and breaks. The same sensitivity means standard doses of crosslinking chemotherapy or radiation before transplant are dangerous, so conditioning regimens are reduced.

> Hematopoietic stem cells are especially vulnerable to endogenous aldehydes, which create crosslinks. The resulting stem cell loss explains why marrow failure dominates the illness. Hematopoietic stem cell transplantation treats the marrow failure but not the risk of solid squamous cancers, which require lifelong surveillance.

**Misconception.** Fanconi anemia (a DNA repair disorder of the marrow) is unrelated to Fanconi syndrome (a proximal renal tubular transport defect).

**Takeaway.** Thumbs + short stature + café-au-lait + pancytopenia + breakage with crosslinkers = Fanconi anemia (crosslink repair).

- **MCQ** `mol-fanconi-anemia:mcq1` · mechanism · bc-dna-repair.fanconi
  - Lymphocytes from a child are cultured with diepoxybutane, and an abnormally high number of chromosome breaks and radial figures is seen. Which type of DNA damage do this child’s cells fail to repair?
  - ✅ a. Interstrand crosslinks
  - ◻️ b. UV-induced pyrimidine dimers — _Dimers are repaired by NER and are not caused by diepoxybutane._
  - ◻️ c. Deaminated cytosine — _Deamination is repaired by base excision repair._
  - ◻️ d. Polymerase slippage at microsatellites — _Slippage is corrected by mismatch repair._
  - ◻️ e. Telomere shortening — _Telomere disorders (dyskeratosis congenita) are not diagnosed with crosslinkers._
  - Explanation: Diepoxybutane and mitomycin C create interstrand crosslinks; FA cells cannot repair them, so breaks accumulate.
- **MCQ** `mol-fanconi-anemia:mcq2` · application · bc-dna-repair.fanconi
  - A 7-year-old girl has bruising and fatigue. She is below the 3rd percentile for height and has a hypoplastic right thumb and several café-au-lait macules. Blood count shows pancytopenia with MCV 104 fL; bone marrow is hypocellular. She is at increased lifetime risk of which malignancies?
  - ✅ a. Acute myeloid leukemia and squamous cell carcinoma of the head and neck
  - ◻️ b. Basal cell carcinoma and melanoma in childhood — _Childhood skin cancers point to xeroderma pigmentosum._
  - ◻️ c. Colorectal and endometrial carcinoma — _These suggest Lynch syndrome._
  - ◻️ d. Retinoblastoma and osteosarcoma — _These suggest germline RB1 mutation._
  - ◻️ e. Vestibular schwannomas and meningiomas — _These suggest neurofibromatosis type 2._
  - Explanation: Marrow failure with short stature, thumb anomalies and café-au-lait spots = Fanconi anemia, with risks of MDS/AML and squamous cell cancers.
- **True/false** `mol-fanconi-anemia:tf1` · recognition · bc-dna-repair.fanconi: Most Fanconi anemia is autosomal recessive, although rare X-linked and dominant forms exist. → **True**. Correct: FANCA, FANCC and FANCG account for most cases; FANCB is X-linked.
- **Crossword** `mol-fanconi-anemia:clue1` · recognition · bc-dna-repair.fanconi: Type of interstrand DNA lesion the Fanconi pathway repairs → **CROSSLINK**
- **Connections** `grp:dna-repair-defects` · recognition · bc-dna-repair.xp, bc-dna-repair.lynch, bc-dna-repair.fanconi, bc-dna-repair.bloom, bc-dna-repair.mutyh: DNA repair defects: Xeroderma pigmentosum, Lynch syndrome, Fanconi anemia, Bloom syndrome, MUTYH-associated polyposis. Each results from failed DNA repair: nucleotide excision (XP), mismatch (Lynch), interstrand crosslink (Fanconi), RecQ helicase in recombination (Bloom) and base excision (MUTYH).
- **Mystery Patient** `case:fanconi-anemia` · application · bc-dna-repair.fanconi: Small thumbs, falling counts
  - Presentation: A 6-year-old boy has nosebleeds and tiredness for two months.
  - History: Born small for gestational age. Surgery as a baby for a small, poorly formed left thumb. Parents are healthy and related as second cousins.
  - Examination: Height below the 3rd percentile. Three café-au-lait macules. Hypoplastic left thenar eminence. Petechiae on the legs. No lymphadenopathy or splenomegaly.
  - Laboratory: Hemoglobin 8.6 g/dL, MCV 106 fL, white cells 2.4 ×10³/mm³ (neutrophils 0.8), platelets 32,000/mm³, reticulocytes low. Fetal hemoglobin raised.
  - Imaging & tests: Bone marrow biopsy: markedly hypocellular marrow without blasts. Renal ultrasound: right kidney absent.
  - Further clue: Lymphocytes cultured with diepoxybutane show many chromosomal breaks and radial figures.
  - Q: Which DNA repair function is defective?
  - ✅ Repair of interstrand crosslinks by the FA pathway
  - ◻️ Excision of UV-induced pyrimidine dimers — _This is xeroderma pigmentosum, with photosensitivity and skin cancers._
  - ◻️ Detection of double-strand breaks by ATM kinase — _Ataxia–telangiectasia causes ataxia, telangiectasias and immunodeficiency without limb anomalies._
  - ◻️ Correction of polymerase slippage by mismatch repair — _Lynch syndrome causes adult colorectal and endometrial cancers._
  - ◻️ Maintenance of telomere length — _Telomere disorders can cause marrow failure but do not cause breakage with diepoxybutane._
  - Marrow failure with macrocytosis and raised HbF, short stature, thumb and renal anomalies, café-au-lait spots and consanguinity point to Fanconi anemia. Breakage with a crosslinking agent confirms that interstrand crosslinks cannot be repaired.

---

## Collagen types and the diseases that affect them (`mol-collagen-types`)

Objectives: `bc-collagen.types`

Citations: medlineplus — Genetics: COL3A1 gene; Alport syndrome; openstax-ap — Ch. 4 Connective tissue

**Facts**

- Type I (most abundant): bone, skin, tendon, ligament, dentin, cornea, late scar; defective in osteogenesis imperfecta.
- Type II: hyaline cartilage, vitreous body, nucleus pulposus.
- Type III (reticulin): blood vessels, skin, uterus, fetal tissue, granulation tissue; defective in vascular Ehlers–Danlos syndrome.
- Type IV: basement membranes (glomerular, alveolar), lens capsule, cochlea; defective in Alport syndrome and the target of anti-GBM antibodies in Goodpasture syndrome.
- Type V is defective in classic Ehlers–Danlos syndrome; it regulates type I fibril assembly.

**Mechanism.** Each collagen type has its own α chains, encoded by different genes, and its own tissue distribution. A defect therefore damages the tissues that depend on that type: bone for type I, vessel walls for type III and basement membranes (kidney, ear, eye) for type IV.

**Quick.** Type I: bone, skin, tendon (OI). Type II: cartilage, vitreous. Type III: vessels, granulation tissue (vascular EDS). Type IV: basement membrane (Alport, Goodpasture). Type V: classic EDS.

**Detailed**

> Alport syndrome results from defects in type IV collagen α3, α4 or α5 chains (COL4A5 is X-linked, the most common form). The glomerular basement membrane splits and thins, causing hematuria progressing to kidney failure, together with sensorineural hearing loss and lens abnormalities such as anterior lenticonus, because the cochlea and lens capsule use the same collagen network.

> Goodpasture (anti-GBM) disease is the immunologic counterpart: autoantibodies target the α3 chain of type IV collagen in glomerular and alveolar basement membranes, giving glomerulonephritis and pulmonary hemorrhage.

**Misconception.** Early wound repair lays down type III collagen; remodeling later replaces much of it with stronger type I.

**Takeaway.** Think tissue: bone (I), cartilage (II), vessels (III), basement membrane (IV).

- **MCQ** `mol-collagen-types:mcq1` · application · bc-collagen.types
  - A 16-year-old boy has microscopic hematuria that began in childhood, progressive bilateral sensorineural hearing loss and anterior bulging of the lens. His maternal uncle needed dialysis at 30. A defect in which collagen type is most likely?
  - ✅ a. Type IV
  - ◻️ b. Type I — _Type I defects cause osteogenesis imperfecta (fractures, blue sclerae)._
  - ◻️ c. Type II — _Type II defects affect cartilage and vitreous._
  - ◻️ d. Type III — _Type III defects cause vascular Ehlers–Danlos syndrome._
  - ◻️ e. Type V — _Type V defects cause classic Ehlers–Danlos syndrome._
  - Explanation: Hematuria, hearing loss and lens changes in an X-linked pattern = Alport syndrome (type IV collagen of basement membranes).
- **MCQ** `mol-collagen-types:mcq2` · application · bc-collagen.types
  - A pathologist examines granulation tissue from a 4-day-old wound. Which collagen predominates at this stage?
  - ✅ a. Type III
  - ◻️ b. Type I — _Type I replaces type III later during remodeling._
  - ◻️ c. Type II — _Type II is cartilage collagen._
  - ◻️ d. Type IV — _Type IV forms basement membranes._
  - ◻️ e. Type V — _Type V is a minor fibrillar collagen that regulates type I fibril assembly._
  - Explanation: Granulation tissue lays down type III collagen first; remodeling replaces it with type I.
- **True/false** `mol-collagen-types:tf1` · recognition · bc-collagen.types: Type II collagen is found mainly in hyaline cartilage and the vitreous body. → **True**. Correct.
- **True/false** `mol-collagen-types:tf2` · recognition · bc-collagen.types: Goodpasture syndrome antibodies target type I collagen in bone. → **False**. They target the α3 chain of type IV collagen in glomerular and alveolar basement membranes.
- **Crossword** `mol-collagen-types:clue1` · recognition · bc-collagen.types: Tissue whose main collagen is type II → **CARTILAGE**
- **Connections** `grp:connective-protein-defects` · recognition · bc-collagen.eds, bc-collagen.menkes, bc-collagen.marfan, bc-collagen.types: Structural connective tissue protein defects: Vascular Ehlers–Danlos syndrome, Marfan syndrome, Alport syndrome, Menkes disease, Osteogenesis imperfecta. Type III collagen (vascular EDS), fibrillin-1 (Marfan), type IV collagen (Alport), copper-dependent cross-linking by lysyl oxidase (Menkes), type I collagen (OI).

---

## Ehlers–Danlos syndromes (`mol-ehlers-danlos`)

Objectives: `bc-collagen.eds`

Citations: medlineplus — Genetics: Ehlers-Danlos syndrome; COL3A1 gene

**Facts**

- A group of heritable connective tissue disorders (13 types in the 2017 classification) caused by defects in collagen or the enzymes that process it.
- Classic EDS: usually COL5A1 or COL5A2 (type V collagen), autosomal dominant; hyperextensible skin, atrophic ("cigarette-paper") scars, easy bruising, joint hypermobility.
- Hypermobile EDS: most common; joint hypermobility, dislocations and chronic pain; the gene is unknown in most patients.
- Vascular EDS: COL3A1 (type III collagen), autosomal dominant; thin translucent skin, extensive bruising, rupture of arteries, bowel (often colon) and pregnant uterus; aneurysms; reduced life expectancy.
- Other types are recessive and involve processing enzymes, e.g. kyphoscoliotic type (lysyl hydroxylase, PLOD1) and dermatosparaxis type (procollagen N-proteinase, ADAMTS2).

**Mechanism.** Collagen fibrils give tensile strength. When fibrils are fewer, thinner or poorly cross-linked, tissues stretch and tear under normal loads. Which tissues fail depends on the collagen affected: type V (with type I) in skin and joints in classic EDS, type III in arteries, bowel and uterus in vascular EDS.

**Quick.** EDS = faulty collagen → stretchy skin, loose joints, easy bruising, poor scars. Classic: type V (COL5A1/2). Hypermobile: joints, gene unknown. Vascular: type III (COL3A1) → arterial, bowel and uterine rupture. Most are AD.

**Detailed**

> Recognizing the vascular type matters most because it is life-threatening. Clues are thin, translucent skin with visible veins, extensive bruising, a characteristic facial appearance, and spontaneous rupture of medium arteries or the sigmoid colon in a young adult, or uterine rupture in pregnancy. Invasive procedures carry high risk.

> Easy bruising in EDS results from fragile capillaries and perivascular connective tissue; platelet counts and coagulation tests are normal. This helps separate EDS from bleeding disorders.

**Misconception.** Vascular EDS may show little joint hypermobility or skin stretch; easy bruising, thin skin and arterial or bowel rupture are the warning signs.

**Takeaway.** Stretchy skin + hypermobile joints = EDS; add thin skin and arterial or bowel rupture = vascular type (type III collagen).

- **MCQ** `mol-ehlers-danlos:mcq1` · mechanism · bc-collagen.eds
  - Why do patients with vascular Ehlers–Danlos syndrome suffer arterial and bowel rupture while those with classic EDS mainly have skin and joint problems?
  - ✅ a. Vascular EDS affects type III collagen, which is abundant in vessel walls and hollow organs
  - ◻️ b. Vascular EDS affects type IV collagen of basement membranes — _Type IV defects cause Alport syndrome._
  - ◻️ c. Vascular EDS is caused by fibrillin-1 deficiency — _Fibrillin-1 defects cause Marfan syndrome._
  - ◻️ d. Classic EDS spares collagen entirely — _Classic EDS affects type V collagen._
  - ◻️ e. Vascular EDS impairs platelet aggregation — _Platelet function is normal; fragility is in the connective tissue._
  - Explanation: COL3A1 (type III collagen) is a major structural collagen of arteries, intestine and uterus, so these organs rupture.
- **MCQ** `mol-ehlers-danlos:mcq2` · application · bc-collagen.eds
  - A 26-year-old man is admitted with sudden abdominal pain and is found to have a spontaneous sigmoid colon perforation. He bruises easily, and his skin is thin with visible veins over the chest. His father died at 35 of a ruptured splenic artery. Coagulation studies and platelet count are normal. A variant in which gene is most likely?
  - ✅ a. COL3A1
  - ◻️ b. FBN1 — _Marfan syndrome causes aortic root disease and lens subluxation, not thin skin with bowel rupture._
  - ◻️ c. COL1A1 — _COL1A1 defects mainly cause osteogenesis imperfecta._
  - ◻️ d. COL4A5 — _COL4A5 causes X-linked Alport syndrome._
  - ◻️ e. ATP7A — _ATP7A defects cause Menkes disease in infants._
  - Explanation: Thin skin, easy bruising and bowel and arterial rupture in an autosomal dominant family = vascular EDS (COL3A1, type III collagen).
- **True/false** `mol-ehlers-danlos:tf1` · recognition · bc-collagen.eds: Classic Ehlers–Danlos syndrome is most often caused by type V collagen variants. → **True**. Correct: COL5A1 or COL5A2.
- **True/false** `mol-ehlers-danlos:tf2` · recognition · bc-collagen.eds: Easy bruising in Ehlers–Danlos syndrome is caused by thrombocytopenia. → **False**. Platelets and clotting are normal; fragile vessels and connective tissue cause the bruising.
- **Crossword** `mol-ehlers-danlos:clue1` · recognition · bc-collagen.eds: Excessive joint range of motion typical of Ehlers–Danlos syndromes → **HYPERMOBILITY**
- **Connections** `grp:connective-protein-defects` · recognition · bc-collagen.eds, bc-collagen.menkes, bc-collagen.marfan, bc-collagen.types: Structural connective tissue protein defects: Vascular Ehlers–Danlos syndrome, Marfan syndrome, Alport syndrome, Menkes disease, Osteogenesis imperfecta. Type III collagen (vascular EDS), fibrillin-1 (Marfan), type IV collagen (Alport), copper-dependent cross-linking by lysyl oxidase (Menkes), type I collagen (OI).

---

## Menkes disease: copper transport (`mol-menkes`)

Objectives: `bc-collagen.menkes`

Citations: medlineplus — Genetics: Menkes syndrome

**Facts**

- X-linked recessive defect in ATP7A, a copper-transporting ATPase; about a third of cases are new mutations.
- Copper absorbed from food becomes trapped in intestinal cells (and accumulates in kidney) and is poorly delivered to the brain and other tissues.
- Reduced activity of copper enzymes: lysyl oxidase (collagen and elastin cross-linking), cytochrome c oxidase, dopamine β-hydroxylase, tyrosinase, superoxide dismutase.
- Infant boys: sparse, brittle, kinky hair, poor growth, hypotonia, seizures, developmental regression, sagging facial features, tortuous arteries; many die by age 3.
- Low serum copper and ceruloplasmin; early subcutaneous copper histidinate may help some infants. Occipital horn syndrome is a milder ATP7A disorder.

**Mechanism.** ATP7A pumps copper out of enterocytes into the blood and loads copper into enzymes in the Golgi. When it fails, the body is copper-deficient even though copper is eaten. Copper enzymes lose activity: weak cross-links in collagen and elastin make vessels tortuous and fragile, defective cytochrome c oxidase impairs neuronal energy production, and low tyrosinase activity lightens hair.

**Quick.** Menkes: X-linked ATP7A defect → copper trapped in gut, deficient in tissues → low lysyl oxidase and other copper enzymes. Infant boy with kinky, brittle hair, hypotonia, seizures, regression, tortuous vessels; low copper and ceruloplasmin.

**Detailed**

> The hair shaft twists (pili torti) because keratin cross-linking depends on copper-dependent oxidation, and hair color is light from reduced tyrosinase activity. Vascular imaging shows elongated, tortuous arteries, and bladder diverticula and bone changes can occur, all reflecting weak connective tissue.

> Diagnosis uses low serum copper and ceruloplasmin (interpreted with age-appropriate ranges in newborns), an abnormal plasma catecholamine pattern from reduced dopamine β-hydroxylase, and genetic testing. Treatment works only if started very early, before neurologic damage.

**Misconception.** Menkes (ATP7A, copper deficiency in tissues) is the opposite of Wilson disease (ATP7B, copper overload in liver and brain).

**Takeaway.** Infant boy, kinky hair, seizures, hypotonia, low copper = Menkes (ATP7A); copper enzymes such as lysyl oxidase fail.

- **MCQ** `mol-menkes:mcq1` · mechanism · bc-collagen.menkes
  - An infant with Menkes disease has elongated, tortuous cerebral arteries. Reduced activity of which enzyme best explains this vascular finding?
  - ✅ a. Lysyl oxidase
  - ◻️ b. Prolyl hydroxylase — _Prolyl hydroxylase needs vitamin C and iron, not copper._
  - ◻️ c. Glucose-6-phosphatase — _Not a copper enzyme and unrelated to vessel structure._
  - ◻️ d. Hexosaminidase A — _Deficient in Tay–Sachs disease._
  - ◻️ e. Tyrosine hydroxylase — _Tyrosine hydroxylase uses iron and BH4; the copper enzyme in catecholamine synthesis is dopamine β-hydroxylase._
  - Explanation: Lysyl oxidase is copper-dependent and cross-links collagen and elastin; without it vessel walls are weak and tortuous.
- **MCQ** `mol-menkes:mcq2` · application · bc-collagen.menkes
  - A 3-month-old boy has poor feeding, hypotonia and new seizures. His scalp hair is sparse, short, light-colored and coarse, and twists when examined under the microscope. Serum copper and ceruloplasmin are low. Which gene is most likely affected?
  - ✅ a. ATP7A
  - ◻️ b. ATP7B — _ATP7B causes Wilson disease, with copper overload presenting later in childhood or adulthood._
  - ◻️ c. COL1A1 — _COL1A1 defects cause fractures and blue sclerae._
  - ◻️ d. HFE — _HFE variants cause iron overload in adults._
  - ◻️ e. SLC39A4 — _This zinc transporter is defective in acrodermatitis enteropathica._
  - Explanation: Infant boy with kinky hair, neurodegeneration and low copper/ceruloplasmin = Menkes disease (ATP7A, X-linked).
- **True/false** `mol-menkes:tf1` · recognition · bc-collagen.menkes: Menkes disease is caused by copper overload in the liver. → **False**. Menkes causes tissue copper deficiency (copper trapped in enterocytes); Wilson disease causes hepatic copper overload.
- **Crossword** `mol-menkes:clue1` · recognition · bc-collagen.menkes: Metal trapped in intestinal cells in Menkes disease → **COPPER**
- **Connections** `grp:connective-protein-defects` · recognition · bc-collagen.eds, bc-collagen.menkes, bc-collagen.marfan, bc-collagen.types: Structural connective tissue protein defects: Vascular Ehlers–Danlos syndrome, Marfan syndrome, Alport syndrome, Menkes disease, Osteogenesis imperfecta. Type III collagen (vascular EDS), fibrillin-1 (Marfan), type IV collagen (Alport), copper-dependent cross-linking by lysyl oxidase (Menkes), type I collagen (OI).

---

## Fibrillin, elastin and Marfan syndrome (`mol-marfan-elastin`)

Objectives: `bc-collagen.marfan`, `bc-collagen.elastin`

Citations: medlineplus — Genetics: Marfan syndrome; openstax-ap — Ch. 4 Connective tissue (elastic fibers)

**Facts**

- Elastin is rich in glycine, proline and lysine (little hydroxylysine); lysyl oxidase cross-links lysines into desmosine, letting fibers stretch and recoil. It is found in arteries, lungs, skin, ligaments and vocal cords.
- Elastic fibers form on a scaffold of fibrillin-1 microfibrils. Elastase (from neutrophils) degrades elastin and is normally inhibited by α1-antitrypsin.
- Williams syndrome deletes one elastin gene copy (7q11.23), contributing to supravalvular aortic stenosis.
- Marfan syndrome: autosomal dominant FBN1 (fibrillin-1) variants; at least a quarter are new mutations; variable expressivity.
- Features: tall stature with long limbs, arachnodactyly, pectus excavatum or carinatum, joint hypermobility, scoliosis, upward and outward (superotemporal) lens subluxation, mitral valve prolapse, aortic root dilation with risk of dissection (cystic medial degeneration).
- Fibrillin microfibrils normally sequester TGF-β; their loss contributes to dysregulated, increased TGF-β signaling.

**Mechanism.** Fibrillin-1 forms microfibrils that support elastic fibers and hold growth factors such as TGF-β in an inactive form. In Marfan syndrome, fewer functional microfibrils weaken elastic tissues (aortic media, lens zonules, valves, ligaments), and released TGF-β contributes to tissue overgrowth and degeneration. The aortic root, under the highest pressure, dilates and can dissect.

**Quick.** Elastin: Gly/Pro/Lys-rich, cross-linked by lysyl oxidase (desmosine), protected from elastase by α1-antitrypsin. Marfan (AD, FBN1): tall, arachnodactyly, pectus, upward lens subluxation, MVP, aortic root dilation and dissection; ↑TGF-β signaling.

**Detailed**

> Elastin's random-coil structure lets fibers stretch, and desmosine cross-links snap them back. Destruction of elastin by unopposed neutrophil elastase is the basis of emphysema in α1-antitrypsin deficiency, while reduced elastin dosage in Williams syndrome narrows the aorta above the valve.

> The leading cause of death in untreated Marfan syndrome is aortic dissection or rupture. Regular imaging of the aortic root, blood pressure control (β-blockers or angiotensin receptor blockers) and elective surgical repair at a threshold diameter reduce that risk; pregnancy and strenuous isometric exercise increase it.

**Misconception.** Homocystinuria also causes a tall, marfanoid build with lens dislocation, but the lens moves downward and inward and there is intellectual disability and thrombosis.

**Takeaway.** Fibrillin-1 scaffolds elastin and holds TGF-β; Marfan = tall + lens up and out + MVP + aortic root dissection.

- **MCQ** `mol-marfan-elastin:mcq1` · mechanism · bc-collagen.marfan
  - How does loss of fibrillin-1 contribute to aortic disease beyond weakening elastic fibers?
  - ✅ a. Microfibrils can no longer sequester TGF-β, so TGF-β signaling increases
  - ◻️ b. Collagen hydroxylation stops in the aortic wall — _Hydroxylation depends on vitamin C, not fibrillin._
  - ◻️ c. Neutrophil elastase is no longer inhibited — _That is the mechanism of α1-antitrypsin deficiency._
  - ◻️ d. Type III collagen synthesis is lost — _That is vascular Ehlers–Danlos syndrome._
  - ◻️ e. Smooth muscle cells overproduce fibrillin — _Fibrillin is reduced or abnormal, not overproduced._
  - Explanation: Fibrillin microfibrils bind latent TGF-β; in Marfan syndrome excess TGF-β activity contributes to medial degeneration.
- **MCQ** `mol-marfan-elastin:mcq2` · application · bc-collagen.marfan
  - A 19-year-old college basketball player, 203 cm tall with long fingers and a sunken sternum, has blurred vision from lenses displaced upward and outward. A mid-systolic click is heard. Echocardiography shows a dilated aortic root. His father died suddenly at 40. What is the most likely inheritance and gene?
  - ✅ a. Autosomal dominant, FBN1
  - ◻️ b. Autosomal recessive, cystathionine β-synthase — _Homocystinuria displaces lenses down and in and causes intellectual disability and thrombosis._
  - ◻️ c. Autosomal dominant, COL3A1 — _Vascular EDS causes thin skin and arterial or bowel rupture, not lens subluxation._
  - ◻️ d. X-linked, ATP7A — _Menkes disease presents in infancy with neurodegeneration and kinky hair._
  - ◻️ e. Autosomal dominant, FGFR3 — _FGFR3 activation causes achondroplasia (short stature)._
  - Explanation: Tall stature, arachnodactyly, pectus, upward lens subluxation, mitral valve prolapse and aortic root dilation = Marfan syndrome (AD, FBN1).
- **MCQ** `mol-marfan-elastin:mcq3` · mechanism · bc-collagen.elastin
  - Which feature of elastin explains its ability to stretch and recoil, and which enzyme forms its cross-links?
  - ✅ a. Loose, flexible chains cross-linked through desmosine formed by lysyl oxidase
  - ◻️ b. Rigid triple helices stabilized by hydroxyproline — _This describes collagen, which resists stretch._
  - ◻️ c. Disulfide bonds formed by protein disulfide isomerase — _Elastin cross-links are lysine-derived, not disulfides._
  - ◻️ d. Glycosylated hydroxylysines formed by lysyl hydroxylase — _Elastin has little hydroxylysine; this is a collagen feature._
  - ◻️ e. Mannose-6-phosphate tags added in the Golgi — _Mannose-6-phosphate targets lysosomal enzymes._
  - Explanation: Elastin is loosely structured and joined by desmosine cross-links that lysyl oxidase (a copper enzyme) creates from lysine residues.
- **True/false** `mol-marfan-elastin:tf1` · recognition · bc-collagen.marfan: In Marfan syndrome the lenses typically dislocate upward and outward. → **True**. Correct: in homocystinuria they dislocate downward and inward.
- **True/false** `mol-marfan-elastin:tf2` · recognition · bc-collagen.elastin: α1-Antitrypsin protects elastin from neutrophil elastase. → **True**. Correct: unopposed elastase destroys alveolar elastin in α1-antitrypsin deficiency.
- **Crossword** `mol-marfan-elastin:clue1` · recognition · bc-collagen.marfan: Microfibril protein defective in Marfan syndrome → **FIBRILLIN**
- **Crossword** `mol-marfan-elastin:clue2` · recognition · bc-collagen.elastin: Lysine-derived cross-link that gives elastin its recoil → **DESMOSINE**
- **Connections** `grp:connective-protein-defects` · recognition · bc-collagen.eds, bc-collagen.menkes, bc-collagen.marfan, bc-collagen.types: Structural connective tissue protein defects: Vascular Ehlers–Danlos syndrome, Marfan syndrome, Alport syndrome, Menkes disease, Osteogenesis imperfecta. Type III collagen (vascular EDS), fibrillin-1 (Marfan), type IV collagen (Alport), copper-dependent cross-linking by lysyl oxidase (Menkes), type I collagen (OI).

---
