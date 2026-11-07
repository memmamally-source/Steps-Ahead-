# Biochemistry — Cellular biochemistry batch 1: medical review packet

Status: **draft, AI-drafted, not medically reviewed.** Reviewer: mark each concept approved, needs changes or rejected, with notes. A citation alone is not approval.

## How to read this packet

- Options are listed in their **stored** order (deterministically shuffled per item, with opaque ids). Learners see a fresh random order on every presentation; answers are checked by option id, never by position. ✅ marks the correct option.
- Each item shows its **reasoning task** and the **depth** that follows from it: recall/identification → recognition; mechanism → mechanism; interpretation/prediction/comparison/multistep → application. A vignette that only asks for the classic diagnosis is identification (recognition), not application. Application items list the inferential steps they require.
- Facts are split into **verified** (a supporting source was read in full text or as a published abstract/summary and states the claim) and **awaiting direct confirmation** (reasoned from pathway logic, or supported only by sources checked for existence). Awaiting facts block approval in the validator until a reviewer confirms them against a source.
- Citation “checked”: **full-text** (page read), **summary** (published abstract or summary read), **existence** (record confirmed but full text not accessible).
- Mastery: true/false and crossword answers count as weaker recognition evidence; repeating an item within 7 days adds little; “strong” needs at least 3 distinct items, including a mechanism or application item.
- Connections puzzles are checked for a single solution against the **global category catalog** (every bank category, every curated category and decoy, and a catalog of medically plausible groupings such as inheritance patterns, drug classes and toxin sources), not only against their own decoys. The daily builder applies the same check to every board it generates.

- **Step 1 relevance.** Every item is labelled **CORE** (classic high-yield knowledge), **APPLICATION** (high-yield concepts used in interpretation or multistep reasoning) or **SPECIALIST** (beyond expected Step 1 depth). Specialist items are kept for editorial review but are never served in games and do not count toward coverage. Target mix for standard content: about 80% core / 20% application (a design target, not an exam weight).

## Summary

| Measure | Value |
|---|---|
| Concepts | 13 |
| Objectives taught | 21 |
| Facts verified / awaiting direct confirmation | 65 / 0 |
| **Playable learning items (total)** | **83** |
| — MCQs / true-false / crossword clues | 26 / 21 / 22 |
| — Mechanism Lab sequences / Match Up sets | 5 / 6 |
| — Complete Connections puzzles / Mystery Patient cases | 1 / 2 |
| Connections category-bank entries (builder input, **not** playable alone; excluded from item counts and coverage) | 2 |
| Step 1 relevance of items: CORE / APPLICATION / SPECIALIST | 74 / 9 / 0 |
| Objectives: CORE / APPLICATION / SPECIALIST | 14 / 7 / 0 |
| Playable items: recall | 52 |
| Playable items: identification | 3 |
| Playable items: mechanism | 19 |
| Playable items: interpretation | 3 |
| Playable items: prediction | 1 |
| Playable items: comparison | 2 |
| Playable items: multistep | 3 |

## Cell cycle phases, checkpoints and phase-specific drugs (`cel-cell-cycle`)

Objectives: `bc-cell-cycle.phases`, `bc-cell-cycle.phase-drugs`

**Citations**

1. OpenStax Biology 2e, 10.3 Control of the Cell Cycle — <https://openstax.org/books/biology-2e/pages/10-3-control-of-the-cell-cycle> — checked: full-text
2. Coqueret O. p21 and p27 bind cyclin–CDK complexes and inhibit their activity. Trends Cell Biol 2003 — PMID 12559756 — <https://pubmed.ncbi.nlm.nih.gov/12559756/> — checked: summary
3. OpenStax Anatomy and Physiology 2e, 3.5 Cell Growth and Division — <https://openstax.org/books/anatomy-and-physiology-2e/pages/3-5-cell-growth-and-division> — checked: full-text
4. DailyMed: Vincristine sulfate injection, Hospira — prescribing information (mechanism of action), 2026 — SPL set id b22e4c8e-dbe1-4d4b-a026-e1812974071c — <https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b22e4c8e-dbe1-4d4b-a026-e1812974071c> — checked: full-text
5. Weaver BA. How Taxol/paclitaxel kills cancer cells (microtubule-stabilizing drug). Mol Biol Cell 2014 — PMID 25213191 — <https://pubmed.ncbi.nlm.nih.gov/25213191/> — checked: summary
6. DailyMed: Hydroxyurea capsules — prescribing information (12.1 mechanism of action), 2026 — SPL set id e76fd60e-7644-48c5-9857-3608a045000b — <https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=e76fd60e-7644-48c5-9857-3608a045000b> — checked: full-text
7. Arai M et al. Bleomycin arrests the cell cycle at G2; colchicine at M phase. Biochem Biophys Res Commun 2004 — PMID 15081413 — <https://pubmed.ncbi.nlm.nih.gov/15081413/> — checked: summary
8. Pennycook BR, Barr AR. Palbociclib-mediated (CDK4/6 inhibitor) cell cycle arrest. Open Biol 2021 — PMID 34784791 — <https://pubmed.ncbi.nlm.nih.gov/34784791/> — checked: summary

**Verified facts** [supporting citations]

- Checkpoints occur near the end of G1 (DNA damage, cell size), at G2/M (complete, undamaged DNA replication) and during metaphase (spindle attachment of every kinetochore). [1]
- Cyclins bind and activate cyclin-dependent kinases (CDKs), which phosphorylate proteins that move the cell to the next phase; cyclins are degraded after each transition. [1]
- CDK inhibitors p21 and p27 bind cyclin–CDK complexes and block their activity, arresting the cycle. [2, 1]
- G0 is a resting state: some cells pause there temporarily, while others (most neurons) have stopped dividing permanently. [3]
- Vincristine inhibits microtubule formation in the mitotic spindle, arresting dividing cells in metaphase; paclitaxel stabilizes microtubules. [4, 5]
- Hydroxyurea inhibits ribonucleotide reductase and DNA synthesis (S phase); bleomycin damages DNA and arrests cells in G2; palbociclib inhibits CDK4/6 and arrests cells in G1. [6, 7, 8]

**Mechanism.** Cyclin–CDK complexes are the accelerator and CDK inhibitors (p21, p27) the brake. At each checkpoint the cell asks whether it is safe to go on; if DNA is damaged or chromosomes are not attached to the spindle, the cycle stops. Cell-cycle-specific drugs hit the processes of a particular phase: DNA synthesis in S, DNA integrity before mitosis, and the spindle in M.

**Quick.** G1 → S (DNA synthesis) → G2 → M. Checkpoints: G1/S, G2/M, metaphase. Cyclin + CDK = go; p21, p27 = stop. Phase drugs: S = hydroxyurea, antimetabolites; G2 = bleomycin; M = vincristine (no spindle), paclitaxel (frozen spindle); G1 = CDK4/6 inhibitors.

**Detailed**

> Cells grow in G1, copy DNA in S, prepare in G2 and divide in M. At the G1 checkpoint the cell checks size, reserves and DNA damage; at G2/M it checks that replication is complete and undamaged; in metaphase the spindle checkpoint waits until every chromosome is attached. Cells that stop dividing enter G0, temporarily or permanently.

> Rising cyclins activate CDKs, which phosphorylate the proteins needed for the next phase. CDK inhibitors (p21, p27) bind and block cyclin–CDK complexes. Many anticancer drugs exploit phases: S-phase drugs block DNA synthesis, bleomycin stops cells in G2, vincristine prevents spindle formation and paclitaxel prevents spindle disassembly, and CDK4/6 inhibitors hold cells in G1.

**Misconception.** Cyclins are not kinases: they are regulatory partners that switch CDKs on. CDK inhibitors such as p21 and p27 stop the cycle by binding cyclin–CDK complexes.

**Takeaway.** Cyclin–CDK drives the cycle; p21/p27 and checkpoints stop it. S: hydroxyurea; G2: bleomycin; M: vincristine, paclitaxel.

- **MCQ** **CORE** · `cel-cell-cycle:mcq1` · mechanism → **mechanism** · difficulty 2 · `bc-cell-cycle.phases`
  - Cells exposed to radiation raise their p21 levels. How does p21 stop the cell cycle?
  - ✅ A. It binds cyclin–CDK complexes and blocks their kinase activity
  - ◻️ B. It depolymerizes the mitotic spindle — _Spindle disruption is how vincristine acts; p21 acts at G1 through CDKs._
  - ◻️ C. It phosphorylates Rb so that E2F is released — _Phosphorylating Rb is the job of cyclin–CDKs and pushes the cell forward, not backward._
  - ◻️ D. It repairs the damaged DNA directly — _p21 enforces the arrest; repair is carried out by DNA repair enzymes._
  - ◻️ E. It degrades cyclins after the cell passes each checkpoint — _Cyclins are degraded by cytoplasmic enzymes after each transition; p21 inhibits the complexes._
  - Explanation: p21 (induced by p53) and p27 are CDK inhibitors: they bind cyclin–CDK complexes and hold the cell at the checkpoint.
- **True/false** **CORE** · `cel-cell-cycle:tf1` · recall → **recognition** · difficulty 1 · `bc-cell-cycle.phases`: DNA damage is assessed at the G1 checkpoint before the cell commits to S phase. → **True**. Correct: the G1 checkpoint checks size, reserves and DNA damage.
- **True/false** **CORE** · `cel-cell-cycle:tf2` · recall → **recognition** · difficulty 1 · `bc-cell-cycle.phase-drugs`: Vincristine acts mainly during S phase by inhibiting DNA polymerase. → **False**. Vincristine blocks microtubule formation in the mitotic spindle, arresting cells in metaphase (M phase).
- **Crossword** **CORE** · `cel-cell-cycle:clue1` · recall → **recognition** · difficulty 1 · `bc-cell-cycle.phases`: Regulatory protein whose levels rise and fall to switch on CDKs → **CYCLIN**
- **Crossword** **CORE** · `cel-cell-cycle:clue2` · recall → **recognition** · difficulty 2 · `bc-cell-cycle.phase-drugs`: Mitotic stage where vincristine-treated cells are arrested → **METAPHASE**
- **Match Up** **CORE** · `match:phase-drugs` · recall → **recognition** · difficulty 2 · `bc-cell-cycle.phase-drugs`: Which phase does it hit?. Match each anticancer drug to the cell-cycle phase and action it targets.
  - Vincristine ↔ M phase: blocks spindle microtubule formation
  - Paclitaxel ↔ M phase: stabilizes microtubules
  - Hydroxyurea ↔ S phase: inhibits ribonucleotide reductase
  - Bleomycin ↔ G2 arrest after DNA damage
  - Palbociclib ↔ G1 arrest by CDK4/6 inhibition
  - Cell-cycle-specific drugs act on the process of one phase: DNA synthesis (S), DNA integrity before mitosis (G2), the spindle (M) or the G1/S switch (CDK4/6).

---

## Rb and p53: tumor suppressors at the G1 checkpoint (`cel-rb-p53`)

Objectives: `bc-cell-cycle.rb-p53`

**Citations**

1. OpenStax Biology 2e, 10.3 Control of the Cell Cycle — <https://openstax.org/books/biology-2e/pages/10-3-control-of-the-cell-cycle> — checked: full-text
2. OpenStax Biology 2e, 10.4 Cancer and the Cell Cycle — <https://openstax.org/books/biology-2e/pages/10-4-cancer-and-the-cell-cycle> — checked: full-text
3. Topacio BR et al. Cyclin D–Cdk4,6 drives cell-cycle progression via the retinoblastoma protein. Mol Cell 2019 — PMID 30982746 — <https://pubmed.ncbi.nlm.nih.gov/30982746/> — checked: summary
4. MedlinePlus Genetics: Retinoblastoma — <https://medlineplus.gov/genetics/condition/retinoblastoma/> — checked: full-text
5. MedlinePlus Genetics: Li-Fraumeni syndrome — <https://medlineplus.gov/genetics/condition/li-fraumeni-syndrome/> — checked: full-text

**Verified facts** [supporting citations]

- Active (dephosphorylated) Rb binds the transcription factor E2F and blocks the G1/S transition; as Rb is phosphorylated it releases E2F, which turns on genes for S phase. [1]
- Cyclin D–CDK4/6 phosphorylates Rb to drive cell-cycle progression. [3]
- If DNA is damaged, p53 halts the cycle and recruits repair; rising p53 induces p21, which inhibits cyclin–CDK. If the damage cannot be repaired, p53 triggers apoptosis. [1]
- Mutated p53 genes are found in more than half of human tumors. [2]
- RB1 is a tumor suppressor gene. In hereditary retinoblastoma one altered RB1 copy is present in every cell (autosomal dominant predisposition) and a second hit in retinal cells causes the tumor, typically in both eyes; about one-third of retinoblastomas are hereditary. Survivors are at risk of osteosarcoma and other cancers. [4]
- Li–Fraumeni syndrome is an autosomal dominant cancer predisposition caused by germline TP53 variants; breast cancer, osteosarcoma and soft tissue sarcomas are typical, and a second hit in the other TP53 copy allows tumors to form. [5]

**Mechanism.** Rb and p53 are brakes at G1. Rb holds E2F until growth signals (cyclin D–CDK4/6) phosphorylate it; p53 responds to DNA damage by inducing p21 and, if needed, apoptosis. Because both copies must be lost before a cell escapes control (two hits), people born with one defective copy in every cell develop tumors earlier and more often.

**Quick.** Hypophosphorylated Rb holds E2F → no S phase; cyclin D–CDK4/6 phosphorylates Rb → E2F free. p53 senses DNA damage → p21 → arrest, or apoptosis. Germline RB1 → bilateral retinoblastoma, osteosarcoma. Germline TP53 → Li–Fraumeni (breast cancer, sarcomas).

**Detailed**

> Rb is active when dephosphorylated: it binds E2F and blocks the genes needed to enter S phase. Growth signals raise cyclin D, and cyclin D–CDK4/6 phosphorylates Rb, releasing E2F. Loss of Rb removes this brake.

> p53 is the guardian of the G1 checkpoint. DNA damage raises p53, which induces p21 to inhibit cyclin–CDKs and allows repair; irreparable damage leads to apoptosis. Inherited loss of one copy of RB1 or TP53 means every cell already has the first hit, so tumors appear early and are often multiple or bilateral.

**Misconception.** Tumor suppressor syndromes are inherited in an autosomal dominant pattern even though tumor cells need both copies lost: the predisposition (one hit) is inherited, and the second hit is acquired.

**Takeaway.** Rb (holds E2F) and p53 (DNA damage → p21 or apoptosis) guard G1; inherited one-hit loss → early, multiple tumors.

- **MCQ** **CORE** · `cel-rb-p53:mcq1` · mechanism → **mechanism** · difficulty 3 · `bc-cell-cycle.rb-p53`
  - In a tumor cell line, Rb cannot be phosphorylated because of a mutation at its CDK sites. What is the expected effect on the cell cycle?
  - ◻️ A. The spindle checkpoint is permanently satisfied — _The spindle checkpoint monitors kinetochore attachment in metaphase._
  - ◻️ B. Cells skip G2 and enter mitosis directly — _Rb acts at the G1/S transition, not at G2/M._
  - ◻️ C. p53 is degraded and apoptosis is blocked — _Rb phosphorylation does not control p53 levels._
  - ✅ D. Rb keeps binding E2F, so cells stay arrested in G1
  - ◻️ E. E2F is released continuously, so cells divide faster — _Release requires phosphorylation; an unphosphorylatable Rb stays bound to E2F._
  - Explanation: Rb must be phosphorylated by cyclin D–CDK4/6 to release E2F; a non-phosphorylatable Rb is a permanent brake at G1.
- **MCQ** **APPLICATION** · `cel-rb-p53:mcq2` · multistep → **application** · difficulty 4 · `bc-cell-cycle.rb-p53`
  - A 14-month-old girl has white pupillary reflexes in both eyes and is found to have bilateral retinoblastoma. Her father had an eye removed in infancy. Why did she develop tumors in both eyes so early?
  - ✅ A. One RB1 hit is inherited; each retinal cell needs only one more
  - ◻️ B. She inherited two mutant RB1 copies from her father — _A child inherits one copy from each parent; the second hit is acquired in retinal cells._
  - ◻️ C. Retinoblastoma is caused by an activating oncogene mutation — _RB1 is a tumor suppressor; tumors need loss of both copies._
  - ◻️ D. Her p53 gene is inactive in all cells — _Germline TP53 loss causes Li–Fraumeni syndrome, not bilateral retinoblastoma._
  - ◻️ E. The tumor spread from one eye to the other through the optic nerve — _Bilateral tumors arise independently because every retinal cell carries the first hit._
  - Steps: (1) Bilateral, early tumors plus an affected father → hereditary (germline) RB1 variant. (2) Every retinal cell already has one hit. (3) Only one acquired hit is needed per cell → multiple, bilateral, early tumors.
  - Explanation: Hereditary retinoblastoma: the first RB1 hit is in every cell, so a single acquired hit in a retinal cell causes a tumor — often in both eyes and early. She also has an increased later risk of osteosarcoma.
- **MCQ** **CORE** · `cel-rb-p53:mcq3` · identification → **recognition** · difficulty 2 · `bc-cell-cycle.rb-p53`
  - A 29-year-old woman has breast cancer. Her brother had osteosarcoma at 15 and her mother a soft tissue sarcoma at 40. A germline variant in which gene is most likely?
  - ◻️ A. APC — _APC causes familial adenomatous polyposis._
  - ◻️ B. RET — _RET gain of function causes MEN2 (medullary thyroid cancer, pheochromocytoma)._
  - ✅ C. TP53
  - ◻️ D. MLH1 — _MLH1 causes Lynch syndrome (colorectal and endometrial cancer)._
  - ◻️ E. RB1 — _Germline RB1 variants cause retinoblastoma, with later osteosarcoma risk, but not this breast–sarcoma cluster._
  - Explanation: Early breast cancer, osteosarcoma and sarcomas across generations = Li–Fraumeni syndrome (germline TP53, autosomal dominant).
- **True/false** **CORE** · `cel-rb-p53:tf1` · recall → **recognition** · difficulty 1 · `bc-cell-cycle.rb-p53`: Mutations in the p53 gene are found in more than half of human tumors. → **True**. Correct: p53 is the most commonly mutated tumor suppressor.
- **True/false** **CORE** · `cel-rb-p53:tf2` · recall → **recognition** · difficulty 2 · `bc-cell-cycle.rb-p53`: Hereditary retinoblastoma follows an autosomal recessive pattern because tumors need two mutant alleles. → **False**. The predisposition is autosomal dominant: one mutant allele is inherited and the second hit is acquired.
- **Crossword** **CORE** · `cel-rb-p53:clue1` · recall → **recognition** · difficulty 1 · `bc-cell-cycle.rb-p53`: Childhood eye cancer from loss of both RB1 copies → **RETINOBLASTOMA**
- **Crossword** **CORE** · `cel-rb-p53:clue2` · recall → **recognition** · difficulty 1 · `bc-cell-cycle.rb-p53`: Programmed cell death that p53 triggers when DNA damage cannot be repaired → **APOPTOSIS**
- **Mechanism Lab** **CORE** · `seq:g1-s-rb` · mechanism → **mechanism** · difficulty 2 · `bc-cell-cycle.rb-p53`: Passing the G1/S checkpoint. Order the events that let a cell leave G1 and enter S phase.
  1. Growth signals raise cyclin D
  2. Cyclin D binds and activates CDK4/6
  3. Cyclin D–CDK4/6 phosphorylates Rb
  4. Phosphorylated Rb releases E2F
  5. E2F switches on genes needed for S phase
  6. The cell begins DNA replication
  - Rb is a brake that holds E2F; phosphorylation by cyclin D–CDK4/6 lifts the brake. Losing Rb (retinoblastoma) or overactivating cyclin D–CDK4/6 removes this control.
- **Mechanism Lab** **CORE** · `seq:p53-damage` · mechanism → **mechanism** · difficulty 2 · `bc-cell-cycle.rb-p53`, `bc-cell-cycle.phases`: p53 answers DNA damage. Order the response of a G1 cell to DNA damage.
  1. DNA damage is detected at the G1 checkpoint
  2. p53 levels rise
  3. p53 induces p21
  4. p21 inhibits cyclin–CDK complexes
  5. The cell cycle halts while the DNA is repaired
  6. If the damage cannot be repaired, p53 triggers apoptosis
  - p53 stops damaged cells from copying their DNA (through p21) and removes cells that cannot be fixed. Losing p53 lets damaged cells keep dividing.

---

## Permanent, stable and labile cells (`cel-cell-types`)

Objectives: `bc-cell-cycle.cell-types`

**Citations**

1. OpenStax Anatomy and Physiology 2e, 3.5 Cell Growth and Division — <https://openstax.org/books/anatomy-and-physiology-2e/pages/3-5-cell-growth-and-division> — checked: full-text
2. Fausto N. Hepatocytes are normally quiescent but replicate rapidly after resection. Mech Dev 2003 — PMID 12490302 — <https://pubmed.ncbi.nlm.nih.gov/12490302/> — checked: summary
3. Kountouras J et al. Liver regeneration after hepatectomy: quiescent hepatocytes re-enter the cell cycle. Hepatogastroenterology 2001 — PMID 11379353 — <https://pubmed.ncbi.nlm.nih.gov/11379353/> — checked: summary
4. Shiba Y. The adult heart has limited regenerative capacity; lost myocardium permanently impairs function. Circ J 2020 — PMID 33087630 — <https://pubmed.ncbi.nlm.nih.gov/33087630/> — checked: summary
5. Seo Y et al. Intestinal epithelium renews every 3–5 days from crypt stem cells. Biomedicines 2020 — PMID 33271948 — <https://pubmed.ncbi.nlm.nih.gov/33271948/> — checked: summary

**Verified facts** [supporting citations]

- Most somatic cells divide regularly, but some do not (gametes, red blood cells, most neurons and some muscle cells); cells that have stopped dividing are in G0, temporarily or permanently. [1]
- Hepatocytes are normally quiescent but re-enter the cell cycle and replicate rapidly after part of the liver is removed. [2, 3]
- The adult heart has limited regenerative capacity, so loss of myocardium permanently impairs cardiac function. [4]
- Intestinal epithelium renews continuously from crypt stem cells, turning over every 3–5 days. [5]

**Mechanism.** Tissue recovery depends on whether the injured cells can divide. Labile cells divide continuously and replace losses quickly; stable cells rest in G0 but re-enter the cycle when stimulated; permanent cells cannot divide, so lost cells are replaced by scar.

**Quick.** Labile (constantly dividing): gut epithelium, skin, bone marrow, hair follicles. Stable (G0, can re-enter): hepatocytes, proximal tubule cells. Permanent (cannot divide): most neurons, cardiac and skeletal muscle, red cells. Permanent-cell loss → scar.

**Detailed**

> Labile tissues such as intestinal epithelium are renewed every few days from stem cells, so they recover quickly but are also the first damaged by drugs that kill dividing cells.

> Stable cells such as hepatocytes sit in G0 and re-enter the cycle when stimulated, allowing the liver to regrow after resection. Permanent cells (most neurons, cardiomyocytes) cannot meaningfully divide, so an infarct heals by fibrosis rather than new muscle.

**Misconception.** Stable cells are not “non-dividing”: hepatocytes rarely divide at rest but proliferate vigorously after injury or resection, which is why the liver regrows.

**Takeaway.** Labile = always dividing; stable = G0 but can return; permanent = cannot divide (scar replaces them).

- **MCQ** **APPLICATION** · `cel-cell-types:mcq1` · comparison → **application** · difficulty 3 · `bc-cell-cycle.cell-types`
  - A living donor gives part of her liver, and within months the remaining liver regains its mass. A man who survives a large myocardial infarction has a permanent scar in the ventricular wall. Which difference explains these outcomes?
  - ◻️ A. Cardiomyocytes regenerate but are killed again by ongoing ischemia — _The infarct is replaced by fibrous scar because cardiomyocytes do not regenerate effectively._
  - ◻️ B. Hepatocytes divide constantly, whereas cardiomyocytes divide only after injury — _Hepatocytes are normally quiescent; it is cardiomyocytes that lack useful regenerative capacity._
  - ◻️ C. Both organs regenerate fully; the cardiac scar is an imaging artifact — _Myocardial loss permanently impairs cardiac function._
  - ✅ D. Hepatocytes can leave G0 and divide; adult cardiomyocytes cannot meaningfully do so
  - ◻️ E. Liver regrowth comes from scar tissue that converts into hepatocytes — _Liver regrowth is replication of existing hepatocytes, not conversion of scar._
  - Steps: (1) Liver regrows after resection → hepatocytes re-enter the cell cycle from G0 (stable cells). (2) Infarct leaves scar → cardiomyocytes cannot replace themselves (permanent cells). (3) Recovery depends on the dividing capacity of the injured cell type.
  - Explanation: Hepatocytes are stable cells (quiescent in G0 but able to re-enter the cycle); cardiomyocytes are essentially permanent cells, so infarcts heal by scar.
- **True/false** **CORE** · `cel-cell-types:tf1` · recall → **recognition** · difficulty 1 · `bc-cell-cycle.cell-types`: Intestinal epithelium is a labile tissue that renews itself every few days. → **True**. Correct: crypt stem cells replace the epithelium about every 3–5 days.
- **True/false** **CORE** · `cel-cell-types:tf2` · recall → **recognition** · difficulty 1 · `bc-cell-cycle.cell-types`: Most neurons re-enter the cell cycle to replace neighbors lost after a stroke. → **False**. Most neurons are permanent (G0) cells and do not divide to replace lost neurons.
- **Crossword** **CORE** · `cel-cell-types:clue1` · recall → **recognition** · difficulty 1 · `bc-cell-cycle.cell-types`: Cell type that divides continuously, like gut epithelium → **LABILE**

---

## ER, Golgi and vesicle traffic (`cel-er-golgi`)

Objectives: `bc-er-golgi.er`, `bc-er-golgi.golgi`, `bc-er-golgi.vesicles`

**Citations**

1. OpenStax Biology 2e, 4.4 The Endomembrane System and Proteins — <https://openstax.org/books/biology-2e/pages/4-4-the-endomembrane-system-and-proteins> — checked: full-text
2. OpenStax Anatomy and Physiology 2e, 3.2 The Cytoplasm and Cellular Organelles — <https://openstax.org/books/anatomy-and-physiology-2e/pages/3-2-the-cytoplasm-and-cellular-organelles> — checked: full-text
3. Gorelick FS, Shugrue C. Exiting the endoplasmic reticulum (COPII, COPI and clathrin routes). Mol Cell Endocrinol 2001 — PMID 11377815 — <https://pubmed.ncbi.nlm.nih.gov/11377815/> — checked: summary
4. Jackson LP. Structure and mechanism of COPI vesicle biogenesis (retrograde Golgi → ER). Curr Opin Cell Biol 2014 — PMID 24840894 — <https://pubmed.ncbi.nlm.nih.gov/24840894/> — checked: summary
5. Gomord V et al. N-glycan processing and O-glycan biosynthesis in the Golgi apparatus (review). Plant Biotechnol J 2010 — PMID 20233335 — <https://pubmed.ncbi.nlm.nih.gov/20233335/> — checked: summary
6. MedlinePlus Genetics: GNPTAB gene — <https://medlineplus.gov/genetics/gene/gnptab/> — checked: full-text

**Verified facts** [supporting citations]

- Rough ER is studded with ribosomes and makes secretory and membrane proteins, which it folds and modifies; it is abundant in cells that secrete proteins. [1, 2]
- Smooth ER lacks ribosomes; it makes phospholipids and steroid hormones (abundant in ovaries and testes), stores Ca²⁺ and breaks down certain toxins. [2]
- Proteins pass from the ER to the Golgi, which further modifies them by adding carbohydrates; N-glycans are processed and O-glycans built in the Golgi. [1, 5]
- Lysosomal hydrolases are tagged with mannose-6-phosphate (first step: GlcNAc-1-phosphotransferase), which directs them to lysosomes. [6]
- COPII coats carry cargo out of the ER to the Golgi; COPI coats return cargo from the Golgi to the ER (retrograde); clathrin coats work at the plasma membrane (endocytosis) and at the trans-Golgi for lysosome delivery. [3, 4]

**Mechanism.** Secretory and membrane proteins are made into the rough ER, modified, and shipped forward in COPII vesicles to the Golgi, which adds and trims sugars and sorts proteins by their tags. Escaped ER proteins return in COPI vesicles. Proteins carrying mannose-6-phosphate are sent to lysosomes; others go to the plasma membrane or are secreted.

**Quick.** Rough ER: secretory/membrane proteins (plasma cells, goblet cells). Smooth ER: steroids, phospholipids, detox, Ca²⁺ (adrenal cortex, gonads, liver). Golgi: modifies sugars (N- and O-linked), adds mannose-6-phosphate → lysosome. COPII: ER → Golgi; COPI: Golgi → ER; clathrin: trans-Golgi → lysosome, endocytosis.

**Detailed**

> Ribosomes on the rough ER feed new proteins into its lumen, where they fold and gain modifications; cells that export proteins (plasma cells, pancreatic acinar and goblet cells) have abundant rough ER. Smooth ER makes phospholipids and steroid hormones, regulates Ca²⁺ and metabolizes some toxins and drugs.

> Vesicles move cargo between compartments: COPII from ER to cis-Golgi, COPI back from Golgi to ER, and clathrin at the plasma membrane and trans-Golgi. In the Golgi, oligosaccharides are processed and lysosomal enzymes receive the mannose-6-phosphate tag that sends them to lysosomes.

**Misconception.** Smooth ER is not a “ribosome-free rough ER” doing the same job: it makes lipids and steroids, stores Ca²⁺ and detoxifies drugs, so it is abundant in steroid-secreting cells and hepatocytes.

**Takeaway.** RER = proteins out; SER = lipids, steroids, detox. Golgi tags lysosomal enzymes with M6P. COPII forward, COPI back, clathrin to lysosomes and endocytosis.

- **MCQ** **CORE** · `cel-er-golgi:mcq1` · mechanism → **mechanism** · difficulty 2 · `bc-er-golgi.golgi`
  - A newly made enzyme lacks the mannose-6-phosphate tag because of a defect in the Golgi. Where does most of it end up?
  - ✅ A. Secreted outside the cell instead of reaching lysosomes
  - ◻️ B. Inserted into the nuclear envelope — _The mannose-6-phosphate tag is a lysosomal address, not a nuclear one._
  - ◻️ C. Retained in the rough ER and degraded by the proteasome — _Lack of the tag does not trap the enzyme in the ER; it misroutes it after the Golgi._
  - ◻️ D. Delivered to lysosomes by a COPI vesicle — _COPI returns cargo from the Golgi to the ER; it does not deliver to lysosomes._
  - ◻️ E. Imported into peroxisomes — _Peroxisomal import uses different targeting signals._
  - Explanation: Mannose-6-phosphate is the lysosomal address; without it, hydrolases follow the default path and are secreted (as in I-cell disease).
- **MCQ** **CORE** · `cel-er-golgi:mcq2` · recall → **recognition** · difficulty 1 · `bc-er-golgi.er`
  - Which cells would be expected to contain the most abundant smooth endoplasmic reticulum?
  - ◻️ A. Pancreatic acinar cells — _Acinar cells secrete digestive enzymes and are rich in rough ER._
  - ◻️ B. Plasma cells secreting antibodies — _Plasma cells are packed with rough ER for protein secretion._
  - ✅ C. Steroid-producing cells of the testis
  - ◻️ D. Mature red blood cells — _Mature red cells lack organelles, including ER._
  - ◻️ E. Goblet cells secreting mucin — _Mucin is a glycoprotein made in rough ER and modified in the Golgi._
  - Explanation: Smooth ER makes steroid hormones (gonads, adrenal cortex) and detoxifies drugs (hepatocytes).
- **True/false** **CORE** · `cel-er-golgi:tf1` · recall → **recognition** · difficulty 2 · `bc-er-golgi.vesicles`: COPI vesicles carry newly made proteins forward from the ER to the Golgi. → **False**. COPII carries cargo from ER to Golgi; COPI returns cargo from the Golgi to the ER.
- **True/false** **CORE** · `cel-er-golgi:tf2` · recall → **recognition** · difficulty 1 · `bc-er-golgi.er`: Plasma cells have abundant rough endoplasmic reticulum. → **True**. Correct: they secrete large amounts of protein (antibodies).
- **Crossword** **CORE** · `cel-er-golgi:clue1` · recall → **recognition** · difficulty 2 · `bc-er-golgi.vesicles`: Coat protein for endocytosis and trans-Golgi to lysosome traffic → **CLATHRIN**
- **Crossword** **CORE** · `cel-er-golgi:clue2` · recall → **recognition** · difficulty 1 · `bc-er-golgi.golgi`: Organelle that adds the mannose-6-phosphate tag to lysosomal enzymes → **GOLGI**
- **Mechanism Lab** **CORE** · `seq:secretory-pathway` · mechanism → **mechanism** · difficulty 2 · `bc-er-golgi.er`, `bc-er-golgi.vesicles`: Route of a secreted protein. Order the journey of a protein that a plasma cell secretes.
  1. Ribosomes on the rough ER make the protein into the ER lumen
  2. The protein folds and is modified in the rough ER
  3. A COPII vesicle carries it to the cis-Golgi
  4. The Golgi modifies its carbohydrates
  5. A vesicle buds from the trans-Golgi
  6. The vesicle fuses with the plasma membrane and releases the protein
  - Secretory proteins move rough ER → (COPII) → Golgi → trans-Golgi vesicle → plasma membrane. COPI handles the return trip from Golgi to ER.
- **Match Up** **CORE** · `match:traffic` · recall → **recognition** · difficulty 1 · `bc-er-golgi.vesicles`, `bc-er-golgi.er`: Organelles and traffic routes. Match each organelle, coat or tag to its job.
  - Rough ER ↔ Makes secretory and membrane proteins
  - Smooth ER ↔ Makes steroids and detoxifies drugs
  - COPII ↔ Carries cargo from ER to Golgi
  - COPI ↔ Returns cargo from Golgi to ER
  - Clathrin ↔ Endocytosis and trans-Golgi to lysosome
  - Mannose-6-phosphate ↔ Address tag for lysosomal enzymes
  - Proteins go forward from the ER in COPII vesicles and back in COPI; clathrin works at the plasma membrane and trans-Golgi; mannose-6-phosphate sends hydrolases to lysosomes.

---

## I-cell disease (mucolipidosis II) (`cel-i-cell`)

Objectives: `bc-er-golgi.i-cell`

**Citations**

1. MedlinePlus Genetics: Mucolipidosis II alpha/beta (I-cell disease) — <https://medlineplus.gov/genetics/condition/mucolipidosis-ii-alpha-beta/> — checked: full-text
2. MedlinePlus Genetics: GNPTAB gene — <https://medlineplus.gov/genetics/gene/gnptab/> — checked: full-text
3. Pollard AC et al. Mucolipidosis II diagnosed by elevated plasma lysosomal enzyme activities. Med J Aust 1980 — PMID 6780772 — <https://pubmed.ncbi.nlm.nih.gov/6780772/> — checked: summary
4. He T et al. Lysosomal enzyme activities increased in plasma in mucolipidosis II α/β. Zhonghua Yi Xue Yi Chuan Xue Za Zhi 2022 — PMID 35929931 — <https://pubmed.ncbi.nlm.nih.gov/35929931/> — checked: summary

**Verified facts** [supporting citations]

- I-cell disease (mucolipidosis II alpha/beta) is autosomal recessive and caused by GNPTAB variants that reduce GlcNAc-1-phosphotransferase, the enzyme for the first step of mannose-6-phosphate tagging. [1, 2]
- Without the tag, lysosomal hydrolases are not delivered to lysosomes; they end up outside the cell, and large molecules accumulate inside lysosomes. [2, 1]
- Children have coarse facial features, gingival overgrowth, skeletal abnormalities (kyphosis, hip dislocation, short hands) and joint contractures; development is delayed, and most do not survive past early childhood. [1]
- The diagnosis is supported by markedly raised activities of several lysosomal enzymes in plasma. [3, 4]

**Mechanism.** Lysosomal enzymes are made in the rough ER and need the mannose-6-phosphate tag in the Golgi to reach lysosomes. With no tag, they are secreted. Plasma enzyme levels rise, while lysosomes inside cells lack enzymes and fill with undegraded material, damaging bone, joints, gums and the nervous system.

**Quick.** Autosomal recessive defect in GlcNAc-1-phosphotransferase (Golgi) → no mannose-6-phosphate tag → lysosomal enzymes secreted (↑ plasma levels) and lysosomes fill with undegraded material → coarse facies, gingival hyperplasia, contractures, skeletal deformities, early death.

**Detailed**

> The tag is built in the Golgi in two steps, and GlcNAc-1-phosphotransferase performs the first. In I-cell disease, hydrolases are made but not tagged, so they leave the cell by the default secretory route.

> The result is a lysosomal storage disease with an unusual laboratory signature: lysosomal enzyme activities are high in plasma. Affected children have coarse features, gum overgrowth, bone and joint deformities and developmental delay, and most die in early childhood.

**Misconception.** I-cell disease is not a deficiency of one lysosomal enzyme: many enzymes are made normally but mistargeted, which is why their plasma levels are high while lysosomes are empty of them.

**Takeaway.** I-cell: no mannose-6-phosphate → enzymes secreted (high plasma levels) → empty lysosomes fill with debris.

- **MCQ** **APPLICATION** · `cel-i-cell:mcq1` · interpretation → **application** · difficulty 3 · `bc-er-golgi.i-cell`
  - An 8-month-old has coarse facial features, overgrown gums, hip dislocation and stiff joints. Plasma activities of several lysosomal enzymes are many times normal. Which step has failed?
  - ✅ A. Mannose-6-phosphate tagging of lysosomal enzymes
  - ◻️ B. Fusion of lysosomes with endocytic vesicles — _The enzymes are present in excess in plasma, pointing to mistargeting, not fusion._
  - ◻️ C. Synthesis of a single lysosomal enzyme in the rough ER — _A single-enzyme deficiency would lower, not raise, that enzyme in plasma._
  - ◻️ D. Ubiquitination of misfolded proteins — _Ubiquitination targets proteins for the proteasome, not lysosomal enzymes for lysosomes._
  - ◻️ E. Import of very-long-chain fatty acids into peroxisomes — _That is the defect of X-linked adrenoleukodystrophy._
  - Steps: (1) Many lysosomal enzymes are high in plasma → they are made but secreted. (2) Secretion instead of lysosomal delivery → missing lysosomal address tag. (3) The tag is mannose-6-phosphate, added in the Golgi → I-cell disease.
  - Explanation: High plasma levels of many lysosomal enzymes with storage disease features = enzymes made but not tagged with mannose-6-phosphate (I-cell disease).
- **MCQ** **CORE** · `cel-i-cell:mcq2` · mechanism → **mechanism** · difficulty 2 · `bc-er-golgi.i-cell`
  - Why do lysosomes fill with undegraded material in I-cell disease even though the cells make normal amounts of lysosomal enzymes?
  - ✅ A. Untagged enzymes are secreted instead of reaching lysosomes
  - ◻️ B. Lysosomes cannot acidify their lumen — _Lysosomal acidification is not the primary defect._
  - ◻️ C. The enzymes are made but cannot fold in the rough ER — _The enzymes fold and leave the cell; the problem is targeting._
  - ◻️ D. Lysosomes are absent from the cells — _Lysosomes are present and become storage vacuoles._
  - ◻️ E. Lysosomal enzymes are degraded by the proteasome — _The enzymes are found in plasma, not destroyed inside the cell._
  - Explanation: Lysosomes contain little enzyme because the hydrolases, lacking mannose-6-phosphate, are exported by default.
- **True/false** **CORE** · `cel-i-cell:tf1` · recall → **recognition** · difficulty 1 · `bc-er-golgi.i-cell`: I-cell disease is inherited in an autosomal recessive pattern. → **True**. Correct: both GNPTAB copies are altered.
- **Crossword** **CORE** · `cel-i-cell:clue1` · recall → **recognition** · difficulty 2 · `bc-er-golgi.i-cell`: Sugar whose 6-phosphate form tags enzymes for the lysosome → **MANNOSE**
- **Mechanism Lab** **CORE** · `seq:m6p-lysosome` · mechanism → **mechanism** · difficulty 3 · `bc-er-golgi.i-cell`, `bc-er-golgi.golgi`: Addressing an enzyme to the lysosome. Order the steps that deliver a hydrolase to the lysosome. Which step fails in I-cell disease?
  1. The hydrolase is made in the rough ER
  2. It is carried to the Golgi
  3. GlcNAc-1-phosphotransferase begins the mannose-6-phosphate tag
  4. The mannose-6-phosphate tag is completed
  5. The tagged hydrolase leaves the trans-Golgi in a clathrin-coated vesicle
  6. The hydrolase reaches the lysosome
  - In I-cell disease the third step fails: untagged hydrolases are secreted, plasma enzyme levels rise and lysosomes fill with undigested material.
- **Mystery Patient** **APPLICATION** · `case:i-cell` · multistep → **application** · difficulty 4 · `bc-er-golgi.i-cell`, `bc-er-golgi.golgi`: Enzymes in the wrong place
  - Presentation: A 10-month-old boy is referred for slow development; he cannot sit unsupported.
  - History: At birth he had dislocated hips and clubfeet. He has had several chest infections. His parents are healthy and related.
  - Examination: Coarse facial features, markedly overgrown gums, a rounded upper back and stiff joints with limited movement. An umbilical hernia is present.
  - Laboratory: Plasma activities of several lysosomal enzymes (for example β-hexosaminidase and arylsulfatase A) are many times the upper limit of normal.
  - Further clue: His cells contain lysosomes distended with undegraded material.
  - Q: Which molecular defect explains both the storage and the high plasma enzyme levels?
  - ◻️ A. Absence of functional peroxisomes — _Zellweger syndrome causes hypotonia and seizures with raised VLCFA, not raised plasma lysosomal enzymes._
  - ◻️ B. Defective dynein arms in cilia — _Primary ciliary dyskinesia causes chest infections but not storage or coarse features._
  - ✅ C. Failure to add mannose-6-phosphate to lysosomal enzymes in the Golgi
  - ◻️ D. Deficiency of a single lysosomal enzyme such as α-L-iduronidase — _A single-enzyme deficiency (e.g. Hurler) lowers that enzyme; it does not raise many enzymes in plasma._
  - ◻️ E. Inhibition of the 26S proteasome — _Proteasome failure does not mistarget lysosomal enzymes._
  - Coarse features, gum overgrowth, skeletal deformities and contractures with many lysosomal enzymes raised in plasma point to I-cell disease (mucolipidosis II). Without GlcNAc-1-phosphotransferase the mannose-6-phosphate tag is not made, so hydrolases are secreted instead of reaching lysosomes, which fill with undegraded material.
  - Differentials: Hurler syndrome (MPS I) (Coarse features and storage but a single enzyme (α-L-iduronidase) is low.); Zellweger syndrome (Neonatal hypotonia, seizures and raised VLCFA; lysosomal enzymes normal.)

---

## Peroxisomes: functions, Zellweger syndrome and Refsum disease (`cel-peroxisome`)

Objectives: `bc-peroxisome-proteasome.peroxisome`, `bc-peroxisome-proteasome.zellweger`, `bc-peroxisome-proteasome.refsum`

**Citations**

1. OpenStax Biology 2e, 4.3 Eukaryotic Cells — <https://openstax.org/books/biology-2e/pages/4-3-eukaryotic-cells> — checked: full-text
2. Lazarow PB. The role of peroxisomes in mammalian cellular metabolism (plasmalogens, VLCFA β-oxidation). J Inherit Metab Dis 1987 — PMID 3119935 — <https://pubmed.ncbi.nlm.nih.gov/3119935/> — checked: summary
3. Chandoga J. The role of peroxisomes in intermediary metabolism (catalase). Bratisl Lek Listy 1995 — PMID 8556358 — <https://pubmed.ncbi.nlm.nih.gov/8556358/> — checked: summary
4. Schutgens RB et al. Zellweger syndrome: biochemical procedures in diagnosis (VLCFA, phytanic acid, ether lipids). J Inherit Metab Dis 1987 — PMID 3119940 — <https://pubmed.ncbi.nlm.nih.gov/3119940/> — checked: summary
5. MedlinePlus Genetics: Zellweger spectrum disorder — <https://medlineplus.gov/genetics/condition/zellweger-spectrum-disorder/> — checked: full-text
6. MedlinePlus Genetics: Refsum disease — <https://medlineplus.gov/genetics/condition/refsum-disease/> — checked: full-text
7. MedlinePlus Genetics: PHYH gene — <https://medlineplus.gov/genetics/gene/phyh/> — checked: full-text
8. Weinstein R. Phytanic acid storage disease (Refsum disease): dietary restriction of phytanic acid. J Clin Apher 1999 — PMID 10611628 — <https://pubmed.ncbi.nlm.nih.gov/10611628/> — checked: summary

**Verified facts** [supporting citations]

- Peroxisomes carry out oxidation reactions that produce hydrogen peroxide, which catalase breaks down to water and oxygen; liver peroxisomes also detoxify alcohol and other compounds. [1, 3]
- Peroxisomes oxidize very-long-chain fatty acids (β-oxidation) and start the synthesis of plasmalogens (ether lipids). [2, 4]
- Zellweger spectrum disorder is autosomal recessive, caused by PEX genes (peroxins) that are needed to form peroxisomes; in severe cases there are no functional peroxisomes. [5]
- Severe Zellweger syndrome presents at birth with hypotonia, seizures, feeding problems, hearing and vision loss, liver enlargement and characteristic facial features; most infants do not survive beyond the first year. Very-long-chain fatty acids accumulate in plasma. [5, 4]
- Refsum disease is an autosomal recessive defect in peroxisomal α-oxidation of phytanic acid (PHYH or PEX7). Phytanic acid comes from the diet (dairy and beef) and accumulates. [6, 7]
- Refsum disease causes retinitis pigmentosa (night blindness first), loss of smell, neuropathy, ataxia, hearing loss and ichthyosis; about a third have hand or foot bone abnormalities. Dietary restriction of phytanic acid is used in treatment. [6, 8]

**Mechanism.** Peroxisomes handle lipids that mitochondria cannot: very-long-chain fatty acids are shortened, branched phytanic acid is α-oxidized, and plasmalogens for myelin are started. If peroxisomes cannot form (Zellweger), all these functions fail at once. If only phytanic acid α-oxidation fails (Refsum), that one dietary lipid builds up, which is why limiting it in the diet helps.

**Quick.** Peroxisome: catalase (H₂O₂), β-oxidation of very-long-chain fatty acids, α-oxidation of phytanic acid, plasmalogen synthesis. Zellweger (AR, PEX): no peroxisomes → hypotonia, seizures, hepatomegaly, early death; ↑ VLCFA. Refsum (AR): ↑ phytanic acid → retinitis pigmentosa, neuropathy, ataxia, ichthyosis; restrict dietary phytanic acid.

**Detailed**

> Peroxisomes are small single-membrane organelles. Their oxidases generate hydrogen peroxide, which catalase removes. They shorten very-long-chain fatty acids by β-oxidation, α-oxidize branched phytanic acid, and begin plasmalogen synthesis, important for myelin.

> In Zellweger spectrum disorder, defective peroxins prevent peroxisome formation, so very-long-chain fatty acids, phytanic acid and other metabolites accumulate and plasmalogens are deficient; severe forms present at birth and are fatal in infancy. In Refsum disease, only phytanic acid breakdown fails; the features develop gradually, and a diet low in phytanic acid is part of treatment.

**Misconception.** Refsum disease is not a mitochondrial β-oxidation defect: phytanic acid has a branch that blocks β-oxidation, so it must first be α-oxidized in peroxisomes.

**Takeaway.** Peroxisomes: catalase, VLCFA β-oxidation, phytanic acid α-oxidation, plasmalogens. Zellweger = no peroxisomes; Refsum = phytanic acid.

- **MCQ** **CORE** · `cel-peroxisome:mcq1` · mechanism → **mechanism** · difficulty 2 · `bc-peroxisome-proteasome.refsum`
  - A patient with Refsum disease is advised to limit dairy products and beef. What is the reason?
  - ✅ A. They contain phytanic acid, which the patient cannot α-oxidize
  - ◻️ B. They contain very-long-chain fatty acids that need ABCD1 for import — _ABCD1 defects cause X-linked adrenoleukodystrophy, not Refsum disease._
  - ◻️ C. They contain lactose, which the patient cannot digest — _Lactase deficiency is unrelated to peroxisomes._
  - ◻️ D. They raise uric acid, which damages the retina — _Uric acid is not the toxic metabolite in Refsum disease._
  - ◻️ E. They contain copper, which accumulates in the liver — _Copper accumulation is Wilson disease._
  - Explanation: Phytanic acid comes from the diet and needs peroxisomal α-oxidation; in Refsum disease it accumulates, so intake is restricted.
- **MCQ** **CORE** · `cel-peroxisome:mcq2` · mechanism → **mechanism** · difficulty 3 · `bc-peroxisome-proteasome.zellweger`, `bc-peroxisome-proteasome.peroxisome`
  - A newborn with severe hypotonia, seizures and an enlarged liver has raised very-long-chain fatty acids and phytanic acid and low plasmalogens. Why are several unrelated lipid pathways abnormal at once?
  - ◻️ A. The proteasome cannot degrade lipid enzymes — _The proteasome degrades ubiquitinated proteins; lipid oxidation happens in peroxisomes._
  - ✅ B. Peroxisomes fail to form, so all peroxisomal functions are lost
  - ◻️ C. Dietary phytanic acid intake is excessive — _Diet would not explain raised VLCFA, low plasmalogens and newborn presentation._
  - ◻️ D. A single β-oxidation enzyme of the mitochondria is missing — _One mitochondrial enzyme defect would not lower plasmalogens or raise phytanic acid._
  - ◻️ E. Lysosomal enzymes are secreted instead of targeted — _That is I-cell disease, which affects lysosomes, not these lipid pathways._
  - Explanation: Zellweger syndrome: PEX gene defects prevent peroxisome biogenesis, so every peroxisomal pathway fails together.
- **MCQ** **CORE** · `cel-peroxisome:mcq3` · recall → **recognition** · difficulty 1 · `bc-peroxisome-proteasome.peroxisome`
  - Which peroxisomal enzyme protects the cell from the hydrogen peroxide produced by peroxisomal oxidases?
  - ◻️ A. Xanthine oxidase — _Xanthine oxidase makes uric acid (and produces, not removes, oxidants)._
  - ◻️ B. Glucose-6-phosphatase — _Glucose-6-phosphatase is an ER enzyme of gluconeogenesis and glycogenolysis._
  - ✅ C. Catalase
  - ◻️ D. Lysyl oxidase — _Lysyl oxidase cross-links collagen and elastin outside the cell._
  - ◻️ E. Acid maltase — _Acid maltase is a lysosomal enzyme that breaks down glycogen._
  - Explanation: Catalase converts hydrogen peroxide to water and oxygen inside peroxisomes.
- **True/false** **CORE** · `cel-peroxisome:tf1` · recall → **recognition** · difficulty 1 · `bc-peroxisome-proteasome.peroxisome`: β-Oxidation of very-long-chain fatty acids begins in peroxisomes. → **True**. Correct: peroxisomes shorten very-long-chain fatty acids.
- **True/false** **CORE** · `cel-peroxisome:tf2` · recall → **recognition** · difficulty 1 · `bc-peroxisome-proteasome.zellweger`: Zellweger syndrome is caused by defective formation of peroxisomes. → **True**. Correct: PEX gene variants prevent peroxisome biogenesis.
- **Crossword** **CORE** · `cel-peroxisome:clue1` · recall → **recognition** · difficulty 2 · `bc-peroxisome-proteasome.refsum`: Branched dietary fatty acid that accumulates in Refsum disease → **PHYTANIC**
- **Crossword** **CORE** · `cel-peroxisome:clue2` · recall → **recognition** · difficulty 2 · `bc-peroxisome-proteasome.peroxisome`: Ether lipid of myelin whose synthesis starts in peroxisomes → **PLASMALOGEN**
- **Match Up** **CORE** · `match:peroxisome` · recall → **recognition** · difficulty 2 · `bc-peroxisome-proteasome.peroxisome`, `bc-peroxisome-proteasome.zellweger`, `bc-peroxisome-proteasome.refsum`, `bc-peroxisome-proteasome.x-ald`: Peroxisome: jobs and failures. Match each item to its peroxisomal role or defect.
  - Catalase ↔ Breaks down hydrogen peroxide
  - Plasmalogens ↔ Ether lipids whose synthesis starts in peroxisomes
  - Zellweger syndrome ↔ Peroxisomes fail to form (PEX genes)
  - Refsum disease ↔ Phytanic acid α-oxidation fails
  - X-linked adrenoleukodystrophy ↔ VLCFA cannot enter peroxisomes (ABCD1)
  - Peroxisomes remove H₂O₂ and handle lipids mitochondria cannot: VLCFA, branched phytanic acid and plasmalogen synthesis.

---

## X-linked adrenoleukodystrophy (`cel-x-ald`)

Objectives: `bc-peroxisome-proteasome.x-ald`

**Citations**

1. MedlinePlus Genetics: X-linked adrenoleukodystrophy — <https://medlineplus.gov/genetics/condition/x-linked-adrenoleukodystrophy/> — checked: full-text
2. MedlinePlus Genetics: ABCD1 gene — <https://medlineplus.gov/genetics/gene/abcd1/> — checked: full-text
3. Schutgens RB et al. Zellweger syndrome: biochemical procedures in diagnosis (VLCFA, phytanic acid, ether lipids). J Inherit Metab Dis 1987 — PMID 3119940 — <https://pubmed.ncbi.nlm.nih.gov/3119940/> — checked: summary

**Verified facts** [supporting citations]

- ABCD1 encodes ALDP, a peroxisomal membrane transporter that brings very-long-chain fatty acids into peroxisomes to be broken down; without it, VLCFA accumulate. [2]
- The accumulated VLCFA appear toxic to the adrenal cortex and myelin and seem to trigger inflammation in the brain. [2]
- The childhood cerebral form typically occurs in boys, with learning and behavioral problems usually beginning between ages 4 and 10, followed by vision problems, poor coordination and adrenal insufficiency; untreated, it progresses rapidly. [1]
- The condition is X-linked. Most affected females with one altered copy develop the adrenomyeloneuropathy type (progressive leg stiffness and weakness in adulthood). [1]

**Mechanism.** Very-long-chain fatty acids can only be broken down inside peroxisomes, and ALDP is the door. With ABCD1 deficient, VLCFA build up in the adrenal cortex, testes and white matter, causing adrenal insufficiency and inflammatory demyelination. Raised plasma VLCFA is the biochemical clue.

**Quick.** X-linked ABCD1 (ALDP) defect → VLCFA cannot enter peroxisomes → ↑ VLCFA in adrenal cortex and white matter → adrenal insufficiency + progressive demyelination (school decline, behavior change, vision loss) in boys aged 4–10; carrier women may develop adrenomyeloneuropathy.

**Detailed**

> ALDP is an ABC transporter in the peroxisomal membrane. When it is missing or nonfunctional, very-long-chain fatty acids are not imported for β-oxidation and accumulate in plasma and tissues.

> The cerebral childhood form begins with learning and behavioral problems in boys, progressing to vision loss, poor coordination and disability within a few years if untreated, often with adrenal insufficiency. Adult forms include adrenomyeloneuropathy, which also affects many carrier women.

**Misconception.** X-linked adrenoleukodystrophy is not limited to boys: carrier women can develop symptoms, usually the slower adrenomyeloneuropathy form in adulthood.

**Takeaway.** X-ALD: ABCD1 can’t import VLCFA → adrenal failure + demyelination in boys; ↑ plasma VLCFA.

- **MCQ** **APPLICATION** · `cel-x-ald:mcq1` · interpretation → **application** · difficulty 3 · `bc-peroxisome-proteasome.x-ald`
  - A 7-year-old boy’s school performance has declined over 6 months, he has become aggressive, and he now bumps into objects. Morning cortisol is low. Plasma very-long-chain fatty acids are raised. Which protein is defective?
  - ◻️ A. Phytanoyl-CoA hydroxylase — _That defect causes Refsum disease, with raised phytanic acid._
  - ✅ B. Peroxisomal VLCFA transporter (ALDP)
  - ◻️ C. GlcNAc-1-phosphotransferase in the Golgi — _That defect causes I-cell disease, with high plasma lysosomal enzymes._
  - ◻️ D. A ciliary dynein arm protein — _Dynein defects cause primary ciliary dyskinesia._
  - ◻️ E. A peroxin needed to form peroxisomes — _Peroxin defects (Zellweger) present at birth with hypotonia and seizures._
  - Steps: (1) Neurologic decline plus low cortisol in a boy → white matter and adrenal disease. (2) Raised plasma VLCFA → failed peroxisomal VLCFA breakdown. (3) Peroxisomes otherwise intact and later onset → ABCD1 transporter (X-ALD) rather than Zellweger.
  - Explanation: Behavioral decline + visual problems + adrenal insufficiency in a school-age boy with raised VLCFA = X-linked adrenoleukodystrophy (ABCD1/ALDP).
- **MCQ** **CORE** · `cel-x-ald:mcq2` · mechanism → **mechanism** · difficulty 2 · `bc-peroxisome-proteasome.x-ald`
  - Why do very-long-chain fatty acids accumulate in X-linked adrenoleukodystrophy?
  - ◻️ A. They cannot be α-oxidized because of a branch — _α-Oxidation of branched phytanic acid fails in Refsum disease._
  - ◻️ B. Mitochondria lack carnitine to import them — _Carnitine deficiency affects long-chain fatty acid oxidation in mitochondria, not VLCFA in peroxisomes._
  - ✅ C. They cannot enter peroxisomes for β-oxidation
  - ◻️ D. Lysosomes lack the enzymes to digest them — _VLCFA are broken down in peroxisomes._
  - ◻️ E. The adrenal gland overproduces them — _The problem is failed breakdown, not overproduction._
  - Explanation: ALDP (ABCD1) brings VLCFA into peroxisomes; when it fails, VLCFA accumulate.
- **True/false** **CORE** · `cel-x-ald:tf1` · recall → **recognition** · difficulty 2 · `bc-peroxisome-proteasome.x-ald`: Women who carry one altered ABCD1 copy can develop symptoms of X-linked adrenoleukodystrophy. → **True**. Correct: most affected carrier women develop adrenomyeloneuropathy in adulthood.
- **Crossword** **CORE** · `cel-x-ald:clue1` · recall → **recognition** · difficulty 1 · `bc-peroxisome-proteasome.x-ald`: Fatty nerve insulation destroyed in cerebral adrenoleukodystrophy → **MYELIN**
- **Mystery Patient** **APPLICATION** · `case:x-ald` · multistep → **application** · difficulty 4 · `bc-peroxisome-proteasome.x-ald`: Falling grades, rising VLCFA
  - Presentation: An 8-year-old boy is brought in because his school performance has fallen sharply over 6 months.
  - History: His teachers report inattention and new aggressive outbursts. He now trips and bumps into doorframes. A maternal uncle died in childhood of a “brain disease”.
  - Examination: Reduced visual acuity, mild spasticity of the legs and an unsteady gait.
  - Laboratory: Early-morning cortisol is low, with a poor response to ACTH stimulation. Plasma very-long-chain fatty acids are raised.
  - Imaging & tests: Brain MRI shows white matter abnormalities consistent with demyelination.
  - Q: Which molecular defect explains his findings?
  - ◻️ A. Autoimmune destruction of the adrenal cortex — _Autoimmune adrenalitis would not explain white matter disease or raised VLCFA._
  - ◻️ B. Failure to add mannose-6-phosphate to lysosomal enzymes — _I-cell disease presents in infancy with coarse features and high plasma lysosomal enzymes._
  - ◻️ C. Failure of phytanic acid α-oxidation — _Refsum disease raises phytanic acid and causes retinitis pigmentosa and neuropathy without adrenal failure._
  - ✅ D. Failure to import very-long-chain fatty acids into peroxisomes
  - ◻️ E. Failure to form peroxisomes at all — _Zellweger syndrome presents at birth with hypotonia and seizures, not school-age decline._
  - Behavioral and school decline, visual loss and gait change in a boy, with adrenal insufficiency, raised VLCFA and an affected maternal uncle, indicate X-linked adrenoleukodystrophy. The ABCD1 transporter (ALDP) cannot bring VLCFA into peroxisomes, so they accumulate in white matter and adrenal cortex.
  - Differentials: Zellweger syndrome (Neonatal onset with absent peroxisomes.); Autoimmune Addison disease (Adrenal insufficiency without white matter disease or raised VLCFA.)

---

## Ubiquitin–proteasome system and bortezomib (`cel-proteasome`)

Objectives: `bc-peroxisome-proteasome.proteasome`

**Citations**

1. DailyMed: VELCADE (bortezomib), Takeda — prescribing information (12.1 mechanism of action), 2025 — SPL set id 1521d321-e724-4ffc-adad-34bf4f44fac7 — <https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=1521d321-e724-4ffc-adad-34bf4f44fac7> — checked: full-text
2. Zheng C et al. Failure of the ubiquitin proteasome system: risk for neurodegenerative diseases. Neurodegener Dis 2014 — PMID 25413678 — <https://pubmed.ncbi.nlm.nih.gov/25413678/> — checked: summary

**Verified facts** [supporting citations]

- The 26S proteasome is a large protein complex that degrades ubiquitinated proteins; the ubiquitin–proteasome pathway controls the levels of many intracellular proteins. [1]
- Bortezomib is a reversible proteasome inhibitor used to treat multiple myeloma and mantle cell lymphoma. [1]
- Failure of the ubiquitin–proteasome system has been linked to Alzheimer, Parkinson and Huntington diseases, in which insoluble protein aggregates accumulate in neurons. [2]

**Mechanism.** Proteins destined for destruction are tagged with chains of ubiquitin and fed into the 26S proteasome. Blocking the proteasome (bortezomib) lets regulatory and misfolded proteins pile up, which myeloma cells — busy making large amounts of immunoglobulin — tolerate poorly. When the system fails in neurons, misfolded proteins aggregate.

**Quick.** Ubiquitin tags proteins → 26S proteasome degrades them. Bortezomib = proteasome inhibitor (multiple myeloma, mantle cell lymphoma). Failure of protein clearance → aggregates in neurodegeneration (Parkinson, Alzheimer, Huntington).

**Detailed**

> The ubiquitin–proteasome pathway removes damaged, misfolded and short-lived regulatory proteins. A chain of ubiquitin commits a protein to destruction by the 26S proteasome.

> Bortezomib inhibits the proteasome and is used for multiple myeloma. In several neurodegenerative diseases, failure to clear misfolded proteins contributes to the aggregates that characterize the disease.

**Misconception.** Ubiquitin is not a protease: it is a tag. The proteasome is the protease complex that recognizes the tag and degrades the protein.

**Takeaway.** Ubiquitin = tag; proteasome = shredder; bortezomib = proteasome inhibitor (myeloma).

- **MCQ** **CORE** · `cel-proteasome:mcq1` · mechanism → **mechanism** · difficulty 2 · `bc-peroxisome-proteasome.proteasome`
  - A patient with multiple myeloma receives bortezomib. What is the direct molecular effect of the drug?
  - ◻️ A. Topoisomerase II is trapped on DNA — _Trapping topoisomerase II on DNA is how etoposide works._
  - ◻️ B. Ribonucleotide reductase is inhibited — _Ribonucleotide reductase is the target of hydroxyurea, not bortezomib._
  - ◻️ C. Microtubules cannot polymerize into a spindle — _That is the action of vincristine and colchicine._
  - ◻️ D. Lysosomal enzymes are secreted from the cell — _Mistargeted lysosomal enzymes are the defect in I-cell disease._
  - ✅ E. Ubiquitinated proteins escape proteasomal breakdown
  - Explanation: Bortezomib inhibits the 26S proteasome, so ubiquitin-tagged proteins accumulate in the myeloma cell.
- **True/false** **CORE** · `cel-proteasome:tf1` · recall → **recognition** · difficulty 1 · `bc-peroxisome-proteasome.proteasome`: Polyubiquitination commonly marks a protein for degradation by the proteasome. → **True**. Correct: ubiquitin is the tag; the 26S proteasome is the protease complex.
- **Crossword** **CORE** · `cel-proteasome:clue1` · recall → **recognition** · difficulty 1 · `bc-peroxisome-proteasome.proteasome`: Proteasome inhibitor used in multiple myeloma → **BORTEZOMIB**
- **Crossword** **CORE** · `cel-proteasome:clue2` · recall → **recognition** · difficulty 1 · `bc-peroxisome-proteasome.proteasome`: Small protein chained onto others to mark them for destruction → **UBIQUITIN**

---

## Cytoskeleton, motor proteins and microtubule drugs (`cel-cytoskeleton`)

Objectives: `bc-cytoskeleton.elements`, `bc-cytoskeleton.motors`

**Citations**

1. OpenStax Biology 2e, 4.5 The Cytoskeleton — <https://openstax.org/books/biology-2e/pages/4-5-the-cytoskeleton> — checked: full-text
2. Schnapp BJ, Reese TS. Dynein is the motor for retrograde axonal transport; kinesin is anterograde. Proc Natl Acad Sci U S A 1989 — PMID 2466291 — <https://pubmed.ncbi.nlm.nih.gov/2466291/> — checked: summary
3. Yang LP. Oral colchicine in gout: inhibition of microtubule polymerization in neutrophils. Drugs 2010 — PMID 20687623 — <https://pubmed.ncbi.nlm.nih.gov/20687623/> — checked: summary
4. DailyMed: Vincristine sulfate injection, Hospira — prescribing information (mechanism of action), 2026 — SPL set id b22e4c8e-dbe1-4d4b-a026-e1812974071c — <https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=b22e4c8e-dbe1-4d4b-a026-e1812974071c> — checked: full-text
5. Weaver BA. How Taxol/paclitaxel kills cancer cells (microtubule-stabilizing drug). Mol Biol Cell 2014 — PMID 25213191 — <https://pubmed.ncbi.nlm.nih.gov/25213191/> — checked: summary
6. Panda D et al. Griseofulvin inhibits mitosis strongly in fungal cells by affecting spindle microtubules. Proc Natl Acad Sci U S A 2005 — PMID 15985553 — <https://pubmed.ncbi.nlm.nih.gov/15985553/> — checked: summary
7. Čáňová K et al. Benzimidazole anthelmintics bind tubulin and disrupt microtubules. Acta Medica (Hradec Kralove) 2017 — PMID 28399389 — <https://pubmed.ncbi.nlm.nih.gov/28399389/> — checked: summary
8. Sangster NC et al. Benzimidazoles bind nematode tubulin (resistance reduces binding). J Parasitol 1985 — PMID 3840531 — <https://pubmed.ncbi.nlm.nih.gov/3840531/> — checked: summary

**Verified facts** [supporting citations]

- The cytoskeleton has three fiber types: microfilaments (actin; with myosin they drive contraction and cell division), intermediate filaments (structural support, no role in movement) and microtubules (α- and β-tubulin dimers). [1]
- Microtubules are tracks for vesicle movement, pull chromosomes apart during division and form cilia, flagella (9 + 2 arrangement) and centrioles. [1]
- In axons, kinesin moves organelles toward microtubule plus ends (anterograde, away from the cell body) and dynein toward minus ends (retrograde, toward the cell body). [2]
- Colchicine inhibits microtubule polymerization, impairing neutrophil function in gout; vincristine inhibits microtubule formation in the spindle; paclitaxel stabilizes microtubules. [3, 4, 5]
- Griseofulvin disrupts spindle microtubule function, inhibiting mitosis strongly in fungi; benzimidazole anthelmintics bind helminth tubulin and disrupt microtubules. [6, 7, 8]

**Mechanism.** Microtubules are dynamic polymers that grow and shrink. Drugs that stop polymerization (colchicine, vincristine) or block depolymerization (paclitaxel) both freeze the dynamic behavior needed for the spindle, neutrophil movement and transport. Motor proteins walk along microtubules: kinesin outward to the plus end, dynein inward to the minus end and in cilia.

**Quick.** Actin: contraction, cytokinesis, microvilli. Microtubules (α/β-tubulin): spindle, cilia (9 + 2), axonal transport. Intermediate filaments: structure. Kinesin → plus end (anterograde); dynein → minus end (retrograde). Microtubule drugs: colchicine, vincristine (block assembly), paclitaxel (stabilizes), griseofulvin, mebendazole.

**Detailed**

> Microfilaments of actin work with myosin in contraction and cytokinesis. Intermediate filaments provide tensile strength. Microtubules made of α- and β-tubulin form the mitotic spindle, cilia and flagella, and tracks for vesicles.

> Kinesin carries cargo anterogradely toward the plus ends at the axon terminal; dynein carries cargo retrogradely to the cell body and bends cilia. Colchicine (gout), vinca alkaloids and taxanes (cancer), griseofulvin (fungi) and benzimidazoles (worms) all act on tubulin.

**Misconception.** Both blocking and stabilizing microtubules stop mitosis: vincristine prevents the spindle from forming, while paclitaxel prevents it from disassembling.

**Takeaway.** Microtubules = spindle, cilia, transport; kinesin out, dynein in; colchicine/vincristine block assembly, paclitaxel stabilizes.

- **MCQ** **CORE** · `cel-cytoskeleton:mcq1` · mechanism → **mechanism** · difficulty 2 · `bc-cytoskeleton.motors`
  - A man with an acute gout flare is treated with colchicine. How does it reduce the inflammation?
  - ◻️ A. It increases renal excretion of uric acid — _That is probenecid (a uricosuric)._
  - ◻️ B. It inhibits cyclooxygenase — _NSAIDs inhibit cyclooxygenase; colchicine works through tubulin._
  - ◻️ C. It stabilizes microtubules like paclitaxel — _Colchicine blocks polymerization rather than stabilizing microtubules._
  - ◻️ D. It inhibits xanthine oxidase and lowers uric acid — _That is allopurinol or febuxostat, which do not treat the acute flare._
  - ✅ E. It blocks microtubule assembly in neutrophils
  - Explanation: Colchicine binds tubulin and prevents microtubule polymerization, so neutrophils cannot migrate and respond normally to urate crystals.
- **MCQ** **CORE** · `cel-cytoskeleton:mcq2` · mechanism → **mechanism** · difficulty 2 · `bc-cytoskeleton.motors`
  - A neurotropic virus enters an axon terminal and travels to the neuronal cell body in the spinal cord. Which motor protein most likely carries it?
  - ✅ A. Dynein, moving toward microtubule minus ends
  - ◻️ B. Kinesin, moving toward microtubule plus ends — _Kinesin carries cargo away from the cell body (anterograde)._
  - ◻️ C. Vimentin, an intermediate filament — _Intermediate filaments have no role in movement._
  - ◻️ D. Tubulin, which moves by polymerizing — _Tubulin forms the track; motors move cargo along it._
  - ◻️ E. Myosin, moving along actin filaments — _Long-distance axonal transport uses microtubules, not actin._
  - Explanation: Retrograde axonal transport (terminal → cell body) is driven by dynein toward microtubule minus ends.
- **True/false** **CORE** · `cel-cytoskeleton:tf1` · recall → **recognition** · difficulty 1 · `bc-cytoskeleton.elements`: Microtubules are polymers of α- and β-tubulin and form the mitotic spindle. → **True**. Correct: they also form cilia, flagella and centrioles.
- **True/false** **CORE** · `cel-cytoskeleton:tf2` · recall → **recognition** · difficulty 1 · `bc-cytoskeleton.elements`: Intermediate filaments power cell movement together with myosin. → **False**. Actin microfilaments work with myosin; intermediate filaments have no role in movement.
- **Crossword** **CORE** · `cel-cytoskeleton:clue1` · recall → **recognition** · difficulty 1 · `bc-cytoskeleton.elements`: Protein whose α and β forms build microtubules → **TUBULIN**
- **Crossword** **CORE** · `cel-cytoskeleton:clue2` · recall → **recognition** · difficulty 2 · `bc-cytoskeleton.motors`: Motor that carries cargo toward microtubule plus ends → **KINESIN**
- **Match Up** **CORE** · `match:microtubules` · recall → **recognition** · difficulty 2 · `bc-cytoskeleton.motors`: Microtubules: drugs and motors. Match each drug or motor to its action.
  - Colchicine ↔ Blocks polymerization in neutrophils (gout)
  - Griseofulvin ↔ Disrupts the fungal mitotic spindle
  - Mebendazole ↔ Binds helminth tubulin
  - Kinesin ↔ Anterograde transport toward plus ends
  - Dynein ↔ Retrograde transport toward minus ends
  - Many drugs target tubulin in human, fungal or worm cells; kinesin and dynein carry cargo in opposite directions along microtubules.

---

## Primary ciliary dyskinesia (Kartagener syndrome) (`cel-pcd`)

Objectives: `bc-cytoskeleton.pcd`

**Citations**

1. MedlinePlus Genetics: Primary ciliary dyskinesia — <https://medlineplus.gov/genetics/condition/primary-ciliary-dyskinesia/> — checked: full-text
2. Shapiro AJ et al. Nasal nitric oxide measurement in primary ciliary dyskinesia (extremely low values). Ann Am Thorac Soc 2020 — PMID 31770003 — <https://pubmed.ncbi.nlm.nih.gov/31770003/> — checked: summary
3. MedlinePlus Genetics: Cystic fibrosis — <https://medlineplus.gov/genetics/condition/cystic-fibrosis/> — checked: full-text
4. OpenStax Biology 2e, 4.5 The Cytoskeleton — <https://openstax.org/books/biology-2e/pages/4-5-the-cytoskeleton> — checked: full-text

**Verified facts** [supporting citations]

- Primary ciliary dyskinesia is caused by abnormal cilia and flagella; variants in DNAH5 and DNAH11, which encode parts of dynein, account for about a third of cases. It is usually autosomal recessive (rarely X-linked). [1]
- Poor mucociliary clearance causes neonatal respiratory distress, year-round nasal congestion and chronic cough from the first year, recurrent respiratory infections, bronchiectasis and recurrent otitis media. [1]
- About 40% have situs inversus totalis (Kartagener syndrome when combined with PCD); 9–12% have heterotaxy. [1]
- Males often have reduced fertility because sperm flagella do not move properly; some females have reduced fertility from abnormal cilia in the fallopian tubes. [1]
- Nasal nitric oxide is extremely low in PCD, and its measurement is recommended as a diagnostic test in cooperative patients aged 5 years and older. [2]
- Cystic fibrosis also causes chronic lung infection and bronchiectasis, but from thick, sticky mucus, and it often damages the pancreas. [3]

**Mechanism.** Dynein arms make the 9 + 2 microtubules of cilia and sperm flagella bend. Without them, airway cilia cannot sweep mucus (sinusitis, otitis, bronchiectasis), embryonic cilia cannot set left–right asymmetry (situs inversus by chance in a large minority), and sperm cannot swim.

**Quick.** Usually AR dynein arm defect → immotile cilia/flagella → chronic sinusitis, otitis, bronchiectasis from infancy; situs inversus in ~40% (Kartagener); male infertility (immotile sperm), reduced female fertility; very low nasal nitric oxide.

**Detailed**

> Cilia and flagella share a 9 + 2 microtubule structure moved by dynein. Defects in dynein or other axonemal proteins make cilia immotile or poorly coordinated, so mucus and bacteria stay in the airways, sinuses and middle ear.

> Left–right organ placement depends on ciliary motion in the embryo, so some patients have mirror-image organs. Infertility follows from immotile sperm and abnormal tubal cilia. Nasal nitric oxide is characteristically very low and is used as a screening test.

**Misconception.** Situs inversus is not required for primary ciliary dyskinesia: only about 40% have it. Chronic wet cough, sinusitis and otitis from infancy should raise the diagnosis even with normal organ position.

**Takeaway.** PCD: dynein defect → immotile cilia → sinusitis, bronchiectasis, infertility; situs inversus in ~40% (Kartagener).

- **MCQ** **CORE** · `cel-pcd:mcq1` · identification → **recognition** · difficulty 2 · `bc-cytoskeleton.pcd`
  - A 30-year-old man is evaluated for infertility. He has had chronic sinusitis and a productive cough since childhood, and his heart sounds are loudest on the right. Semen analysis shows normal sperm count but immotile sperm. Which structure is defective?
  - ◻️ A. Actin microvilli of the airway epithelium — _Microvilli are actin-based and do not beat._
  - ◻️ B. Intermediate filaments of the sperm head — _Intermediate filaments provide structure, not movement._
  - ✅ C. Dynein arms of the microtubule axoneme
  - ◻️ D. CFTR chloride channels in epithelial cells — _CF also causes bronchiectasis and infertility, but not situs inversus or immotile sperm with normal count._
  - ◻️ E. Kinesin in the sperm midpiece — _Ciliary and flagellar bending is powered by dynein arms._
  - Explanation: Sinusitis, bronchiectasis, situs inversus and immotile sperm = Kartagener syndrome (primary ciliary dyskinesia, dynein arm defect).
- **MCQ** **APPLICATION** · `cel-pcd:mcq2` · comparison → **application** · difficulty 3 · `bc-cytoskeleton.pcd`
  - Two 8-year-olds have chronic wet cough and bronchiectasis. Child 1 has situs inversus and very low nasal nitric oxide. Child 2 has poor weight gain with fatty, foul-smelling stools. What is the most likely basis of each child’s lung disease?
  - ◻️ A. Child 1: immunodeficiency; child 2: asthma — _Neither explains situs inversus or pancreatic insufficiency._
  - ◻️ B. Both: primary ciliary dyskinesia of different severity — _PCD does not explain fat malabsorption from pancreatic damage._
  - ◻️ C. Child 1: cystic fibrosis; child 2: primary ciliary dyskinesia — _Reversed: situs inversus and low nasal NO point to PCD; pancreatic insufficiency points to CF._
  - ✅ D. Child 1: immotile cilia (PCD); child 2: thick mucus (cystic fibrosis)
  - ◻️ E. Both: α1-antitrypsin deficiency — _α1AT deficiency causes emphysema in adults, not bronchiectasis with these features in children._
  - Steps: (1) Both have bronchiectasis from poor airway clearance. (2) Situs inversus + very low nasal NO → ciliary motility defect (PCD). (3) Fat malabsorption → pancreatic damage → cystic fibrosis.
  - Explanation: Both cause bronchiectasis. Situs inversus and very low nasal nitric oxide point to PCD (ciliary defect); malabsorption from pancreatic damage points to cystic fibrosis (thick mucus).
- **MCQ** **CORE** · `cel-pcd:mcq3` · mechanism → **mechanism** · difficulty 2 · `bc-cytoskeleton.pcd`
  - Why do patients with primary ciliary dyskinesia develop bronchiectasis?
  - ◻️ A. Their mucus is abnormally thick because chloride secretion fails — _Defective chloride secretion and thick mucus is the mechanism of cystic fibrosis._
  - ◻️ B. They make no IgA in airway secretions — _Selective IgA deficiency is a different disorder._
  - ◻️ C. Their airways lack cartilage from birth — _Cartilage is normal; damage follows chronic infection._
  - ✅ D. Immotile cilia cannot clear mucus and bacteria, so infections recur
  - ◻️ E. Neutrophil elastase is unopposed in the alveoli — _That is α1-antitrypsin deficiency, causing emphysema._
  - Explanation: Failed mucociliary clearance leads to chronic infection and inflammation, which permanently dilate the bronchi.
- **True/false** **CORE** · `cel-pcd:tf1` · recall → **recognition** · difficulty 2 · `bc-cytoskeleton.pcd`: Every patient with primary ciliary dyskinesia has situs inversus. → **False**. About 40% have situs inversus totalis; its absence does not exclude PCD.
- **Crossword** **CORE** · `cel-pcd:clue1` · recall → **recognition** · difficulty 1 · `bc-cytoskeleton.pcd`: Motor protein whose arm defects cause Kartagener syndrome → **DYNEIN**
- **Crossword** **CORE** · `cel-pcd:clue2` · recall → **recognition** · difficulty 2 · `bc-cytoskeleton.pcd`: Name for ciliary dyskinesia with situs inversus → **KARTAGENER**

---

## Intermediate filaments as tissue markers (`cel-if-markers`)

Objectives: `bc-intermediate-filaments.markers`

**Citations**

1. Altmannsberger M. Intermediate filament proteins as markers in tumor diagnosis. Veroff Pathol 1988 — PMID 3341148 — <https://pubmed.ncbi.nlm.nih.gov/3341148/> — checked: summary
2. Wilson KL, Foisner R. Lamins are the major intermediate filaments of the nucleus. Cold Spring Harb Perspect Biol 2010 — PMID 20452940 — <https://pubmed.ncbi.nlm.nih.gov/20452940/> — checked: summary
3. OpenStax Biology 2e, 4.5 The Cytoskeleton — <https://openstax.org/books/biology-2e/pages/4-5-the-cytoskeleton> — checked: full-text

**Verified facts** [supporting citations]

- Keratins are the intermediate filaments of epithelia; desmin is specific to skeletal, cardiac, visceral and some vascular smooth muscle. [1]
- Vimentin is characteristic of mesenchymal cells such as fibroblasts, endothelial cells, macrophages and chondrocytes. [1]
- Neurofilaments are found in neurons; glial fibrillary acidic protein (GFAP) is the intermediate filament of astrocytes. [1]
- Lamins are the intermediate filaments of the nucleus and form the nuclear lamina under the inner nuclear membrane. [2]
- Because poorly differentiated tumors often keep the intermediate filaments of their tissue of origin, staining for them helps classify tumors. [1]

**Mechanism.** Each tissue builds its own type of intermediate filament, and tumors usually keep it. Immunostaining for the filament therefore reveals the tumor’s origin when its appearance does not.

**Quick.** Vimentin = mesenchyme (fibroblasts, endothelium, macrophages). Desmin = muscle. Cytokeratin = epithelium. GFAP = astrocytes. Neurofilaments = neurons. Lamins = nuclear envelope.

**Detailed**

> Intermediate filaments are the most diverse cytoskeletal family. Their tissue specificity makes them immunohistochemical markers: cytokeratin indicates a carcinoma, desmin a muscle tumor, vimentin a mesenchymal tumor, GFAP an astrocytic tumor and neurofilament a neuronal tumor.

> Lamins are nuclear intermediate filaments that support the nuclear envelope. Markers are interpreted together, because some tumors express more than one filament type.

**Misconception.** Intermediate filaments are not motility proteins: they provide structure, and their value in diagnosis comes from tissue specificity.

**Takeaway.** Vimentin mesenchyme, desmin muscle, keratin epithelium, GFAP astrocytes, neurofilament neurons, lamin nucleus.

- **MCQ** **APPLICATION** · `cel-if-markers:mcq1` · interpretation → **application** · difficulty 3 · `bc-intermediate-filaments.markers`
  - A poorly differentiated tumor in a child’s orbit stains strongly for desmin and is negative for cytokeratin. What is its most likely tissue of origin?
  - ◻️ A. Neurons — _Neuronal tumors express neurofilaments._
  - ◻️ B. Nuclear envelope — _Lamins are present in all nucleated cells and do not identify a tumor type._
  - ◻️ C. Astrocytes — _Astrocytic tumors express GFAP._
  - ◻️ D. Epithelium — _Epithelial tumors (carcinomas) express cytokeratin, which is negative here._
  - ✅ E. Muscle
  - Steps: (1) The tumor is too undifferentiated to classify by appearance. (2) It expresses desmin and not cytokeratin. (3) Desmin marks muscle → tumor of muscle origin.
  - Explanation: Desmin is the intermediate filament of muscle, so a desmin-positive tumor is of muscle origin (as in rhabdomyosarcoma).
- **True/false** **CORE** · `cel-if-markers:tf1` · recall → **recognition** · difficulty 1 · `bc-intermediate-filaments.markers`: GFAP is the intermediate filament of astrocytes. → **True**. Correct: GFAP staining identifies astrocytes and astrocytic tumors.
- **True/false** **CORE** · `cel-if-markers:tf2` · recall → **recognition** · difficulty 1 · `bc-intermediate-filaments.markers`: Vimentin is the characteristic intermediate filament of epithelial cells. → **False**. Cytokeratin marks epithelium; vimentin marks mesenchymal cells such as fibroblasts and endothelium.
- **Crossword** **CORE** · `cel-if-markers:clue1` · recall → **recognition** · difficulty 1 · `bc-intermediate-filaments.markers`: Intermediate filament marker of muscle → **DESMIN**
- **Crossword** **CORE** · `cel-if-markers:clue2` · recall → **recognition** · difficulty 2 · `bc-intermediate-filaments.markers`: Intermediate filament of the nuclear envelope → **LAMIN**
- **Match Up** **CORE** · `match:if-markers` · recall → **recognition** · difficulty 1 · `bc-intermediate-filaments.markers`: Tumor markers: intermediate filaments. Match each intermediate filament to the cells it marks.
  - Vimentin ↔ Mesenchymal cells (fibroblasts, endothelium)
  - Desmin ↔ Muscle
  - Cytokeratin ↔ Epithelium
  - GFAP ↔ Astrocytes
  - Neurofilament ↔ Neurons
  - Lamin ↔ Nuclear envelope
  - Intermediate filaments are tissue specific, so staining for them reveals a tumor’s origin.

---

## Membranes and glucose transporters (`cel-membrane-transport`)

Objectives: `bc-membrane-pumps.composition`, `bc-membrane-pumps.transporters`

**Citations**

1. OpenStax Biology 2e, 5.1 Components and Structure — <https://openstax.org/books/biology-2e/pages/5-1-components-and-structure> — checked: full-text
2. OpenStax Biology 2e, 5.2 Passive Transport — <https://openstax.org/books/biology-2e/pages/5-2-passive-transport> — checked: full-text
3. OpenStax Biology 2e, 5.3 Active Transport — <https://openstax.org/books/biology-2e/pages/5-3-active-transport> — checked: full-text
4. OpenStax Anatomy and Physiology 2e, 3.1 The Cell Membrane — <https://openstax.org/books/anatomy-and-physiology-2e/pages/3-1-the-cell-membrane> — checked: full-text
5. Klepper J, Voit T. GLUT1 deficiency syndrome; GLUT1 in erythrocytes and the blood–brain barrier. Eur J Pediatr 2002 — PMID 12029447 — <https://pubmed.ncbi.nlm.nih.gov/12029447/> — checked: summary
6. Vannucci SJ et al. Glucose transporters in brain: GLUT1 at the blood–brain barrier, GLUT3 in neurons. Glia 1997 — PMID 9298843 — <https://pubmed.ncbi.nlm.nih.gov/9298843/> — checked: summary
7. Thorens B. GLUT2, glucose sensing and glucose homeostasis (liver, intestine, kidney, β cells). Diabetologia 2015 — PMID 25421524 — <https://pubmed.ncbi.nlm.nih.gov/25421524/> — checked: summary
8. van Gerwen J et al. Insulin signalling and GLUT4 trafficking (muscle and adipose tissue). Biochem Soc Trans 2023 — PMID 37248992 — <https://pubmed.ncbi.nlm.nih.gov/37248992/> — checked: summary
9. Koepsell H. Glucose transporters in the small intestine (SGLT1, GLUT2; GLUT5 for fructose). Pflugers Arch 2020 — PMID 32829466 — <https://pubmed.ncbi.nlm.nih.gov/32829466/> — checked: summary
10. Gallo LA et al. SGLT2 in the early proximal tubule reabsorbs most filtered glucose. Diab Vasc Dis Res 2015 — PMID 25616707 — <https://pubmed.ncbi.nlm.nih.gov/25616707/> — checked: summary

**Verified facts** [supporting citations]

- The plasma membrane is a fluid mosaic of phospholipids, cholesterol, proteins and carbohydrates (glycolipids and glycoproteins on the outer surface). Cholesterol dampens temperature effects, extending the range over which the membrane stays fluid. [1]
- In facilitated diffusion, membrane channels or carriers let polar molecules such as glucose move down their gradient; primary active transport uses ATP directly, and secondary active transport uses the gradient made by primary active transport. [2, 3, 4]
- GLUT1 is expressed in red blood cells and at the blood–brain barrier; GLUT3 is the main neuronal transporter. [5, 6]
- GLUT2 is expressed in liver, intestine, kidney and pancreatic β cells, where it helps sense blood glucose. [7]
- GLUT4 is translocated to the membrane in response to insulin in muscle and adipose tissue; GLUT5 transports fructose in the small intestine. [8, 9]
- SGLT2 in the early proximal tubule reabsorbs most filtered glucose; SGLT1 absorbs glucose and galactose in the small intestine and reabsorbs the remainder in the late proximal tubule. [10, 9]

**Mechanism.** Glucose crosses membranes either down its gradient through GLUT carriers or uphill with sodium through SGLT cotransporters. SGLT depends on the sodium gradient created by the Na⁺/K⁺-ATPase (secondary active transport). Tissue-specific GLUTs explain why the brain takes up glucose continuously while muscle and fat take it up mainly when insulin moves GLUT4 to the surface.

**Quick.** Membrane: phospholipids + cholesterol (moderates fluidity) + proteins. GLUT1: RBC, blood–brain barrier. GLUT2: liver, β cells, gut, kidney. GLUT3: neurons. GLUT4: insulin-responsive muscle and fat. GLUT5: fructose. SGLT1/2: Na⁺-coupled (secondary active) glucose uptake in gut and proximal tubule.

**Detailed**

> Cholesterol sits among phospholipids and broadens the temperature range in which the membrane remains appropriately fluid. Polar solutes need channels or carriers: GLUTs allow facilitated diffusion, while SGLTs couple glucose to sodium entry and can move glucose against its gradient.

> GLUT isoforms are tissue specific: GLUT1 supplies red cells and the brain across the blood–brain barrier, GLUT3 neurons, GLUT2 the liver and β cells (glucose sensing), GLUT4 insulin-dependent uptake in muscle and fat, and GLUT5 fructose absorption. SGLT2 inhibitors block most proximal tubular glucose reabsorption, causing glucosuria.

**Misconception.** Insulin does not increase glucose uptake in the brain, liver or red cells: only GLUT4 tissues (skeletal muscle, fat) depend on insulin to bring transporters to the surface.

**Takeaway.** GLUT = facilitated (down gradient); SGLT = secondary active with Na⁺. GLUT4 = insulin-responsive muscle and fat.

- **MCQ** **CORE** · `cel-membrane-transport:mcq1` · mechanism → **mechanism** · difficulty 3 · `bc-membrane-pumps.transporters`
  - Intestinal cells are treated with a drug that blocks the Na⁺/K⁺-ATPase. What happens to glucose uptake through SGLT1?
  - ◻️ A. It is unchanged, because SGLT1 uses ATP directly — _SGLT1 is secondary active: it uses the sodium gradient, not ATP._
  - ◻️ B. It rises, because glucose now moves by simple diffusion — _Glucose is polar and cannot cross the bilayer by simple diffusion._
  - ✅ C. It falls, because the sodium gradient that drives it collapses
  - ◻️ D. It switches to GLUT4, which takes over uptake — _GLUT4 is the insulin-responsive transporter of muscle and fat._
  - ◻️ E. It rises, because more sodium stays outside the cell — _Blocking the pump lets sodium accumulate inside, so the inward gradient falls._
  - Explanation: SGLT1 couples glucose to sodium entry; the Na⁺/K⁺-ATPase creates that gradient, so blocking the pump stops secondary active uptake.
- **MCQ** **CORE** · `cel-membrane-transport:mcq2` · recall → **recognition** · difficulty 1 · `bc-membrane-pumps.transporters`
  - After a meal, insulin rises. In which tissue does insulin increase glucose uptake by moving GLUT4 to the cell surface?
  - ✅ A. Skeletal muscle
  - ◻️ B. Brain neurons — _Neurons use GLUT3 and take up glucose independently of insulin._
  - ◻️ C. Hepatocytes — _Hepatocytes use GLUT2; insulin acts on liver metabolism, not GLUT4 translocation._
  - ◻️ D. Pancreatic β cells — _β cells use GLUT2 to sense glucose._
  - ◻️ E. Red blood cells — _Red cells use GLUT1, which is not insulin-dependent._
  - Explanation: GLUT4 is the insulin-responsive transporter of skeletal muscle and adipose tissue.
- **True/false** **CORE** · `cel-membrane-transport:tf1` · recall → **recognition** · difficulty 1 · `bc-membrane-pumps.composition`: Cholesterol broadens the temperature range over which the plasma membrane stays fluid. → **True**. Correct: it dampens the effects of temperature on membrane fluidity.
- **True/false** **CORE** · `cel-membrane-transport:tf2` · recall → **recognition** · difficulty 1 · `bc-membrane-pumps.transporters`: GLUT5 is the main transporter for fructose in the small intestine. → **True**. Correct: GLUT5 carries dietary fructose into enterocytes.
- **Crossword** **CORE** · `cel-membrane-transport:clue1` · recall → **recognition** · difficulty 1 · `bc-membrane-pumps.transporters`: Diffusion through a carrier or channel, as glucose moves through GLUTs → **FACILITATED**
- **Crossword** **CORE** · `cel-membrane-transport:clue2` · recall → **recognition** · difficulty 1 · `bc-membrane-pumps.composition`: Membrane lipid that moderates fluidity → **CHOLESTEROL**
- **Match Up** **CORE** · `match:glucose-transporters` · recall → **recognition** · difficulty 2 · `bc-membrane-pumps.transporters`: Glucose transporters. Match each transporter to where or how it works.
  - GLUT1 ↔ Red blood cells and blood–brain barrier
  - GLUT2 ↔ Liver and pancreatic β cells (glucose sensing)
  - GLUT3 ↔ Neurons
  - GLUT4 ↔ Insulin-responsive muscle and fat
  - GLUT5 ↔ Fructose uptake in the intestine
  - SGLT2 ↔ Na⁺-coupled glucose reabsorption, early proximal tubule
  - GLUTs allow facilitated diffusion with tissue-specific roles; only GLUT4 depends on insulin. SGLTs are secondary active transporters powered by the sodium gradient.

---

## Na⁺/K⁺-ATPase and cardiac glycosides (`cel-na-k-atpase`)

Objectives: `bc-membrane-pumps.na-k-atpase`, `bc-membrane-pumps.glycosides`

**Citations**

1. OpenStax Anatomy and Physiology 2e, 3.1 The Cell Membrane — <https://openstax.org/books/anatomy-and-physiology-2e/pages/3-1-the-cell-membrane> — checked: full-text
2. OpenStax Biology 2e, 5.3 Active Transport — <https://openstax.org/books/biology-2e/pages/5-3-active-transport> — checked: full-text
3. DailyMed: LANOXIN (digoxin) tablets — prescribing information (12.1 mechanism of action), 2025 — SPL set id d91e3646-4c63-4512-ab22-db39c085c4dc — <https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=d91e3646-4c63-4512-ab22-db39c085c4dc> — checked: full-text
4. Altamirano J et al. Glycoside inotropy requires Na⁺–Ca²⁺ exchanger function. J Physiol 2006 — PMID 16825310 — <https://pubmed.ncbi.nlm.nih.gov/16825310/> — checked: summary

**Verified facts** [supporting citations]

- The Na⁺/K⁺-ATPase moves three Na⁺ out of the cell and two K⁺ into the cell for each ATP used, maintaining low intracellular Na⁺, high intracellular K⁺ and a negative interior. [1]
- Primary active transport by the pump creates the gradients that drive secondary active transport. [2]
- All of digoxin’s actions are mediated through inhibition of the Na⁺/K⁺-ATPase; this increases intracellular calcium in the myocardium, increasing contractility (inotropy). [3]
- The rise in intracellular Ca²⁺ after glycoside treatment depends on the Na⁺–Ca²⁺ exchanger: higher intracellular Na⁺ reduces Ca²⁺ removal. [4]
- At higher digoxin concentrations, intracellular K⁺ is progressively lost from cells and serum potassium rises. [3]

**Mechanism.** Digoxin blocks the pump, so Na⁺ builds up inside cardiac cells. A smaller Na⁺ gradient means the Na⁺–Ca²⁺ exchanger removes less Ca²⁺, so more Ca²⁺ is available for contraction. In overdose, widespread pump inhibition lets K⁺ leak out of cells, raising serum potassium.

**Quick.** Pump: 3 Na⁺ out, 2 K⁺ in per ATP (net positive charge out). Digoxin inhibits pump → ↑ intracellular Na⁺ → less Ca²⁺ exported by Na⁺/Ca²⁺ exchanger → ↑ intracellular Ca²⁺ → ↑ contractility. Toxicity: hyperkalemia (K⁺ leaves cells).

**Detailed**

> For every ATP hydrolyzed, the pump exports three sodium ions and imports two potassium ions. Because more positive charge leaves than enters, the pump is electrogenic and helps keep the interior negative. The sodium gradient it creates powers secondary active transport such as SGLT1 and the Na⁺–Ca²⁺ exchanger.

> Cardiac glycosides inhibit the pump. Intracellular sodium rises, the exchanger extrudes less calcium, and the extra calcium increases the force of contraction. At toxic concentrations, potassium escapes cells and serum potassium rises.

**Misconception.** Digoxin does not raise contractility by acting on calcium channels: it inhibits the Na⁺/K⁺-ATPase, and the Ca²⁺ rise follows indirectly through the Na⁺–Ca²⁺ exchanger.

**Takeaway.** 3 Na⁺ out, 2 K⁺ in. Digoxin → ↑ Na⁺ in → ↓ Ca²⁺ out via NCX → ↑ Ca²⁺ → ↑ contractility; overdose → hyperkalemia.

- **MCQ** **CORE** · `cel-na-k-atpase:mcq1` · mechanism → **mechanism** · difficulty 2 · `bc-membrane-pumps.na-k-atpase`
  - For each ATP it hydrolyzes, how many ions does the Na⁺/K⁺-ATPase move, and what is the net electrical effect?
  - ◻️ A. 3 K⁺ out and 2 Ca²⁺ in; the cell contracts — _The pump exchanges Na⁺ and K⁺, not Ca²⁺._
  - ◻️ B. 3 Na⁺ in and 2 K⁺ out; the cell depolarizes — _The pump keeps Na⁺ low and K⁺ high inside the cell._
  - ✅ C. 3 Na⁺ out and 2 K⁺ in; net positive charge leaves the cell
  - ◻️ D. 1 Na⁺ out and 1 K⁺ in; no net charge moves — _The pump is electrogenic: it moves unequal charge._
  - ◻️ E. 2 Na⁺ out and 3 K⁺ in; net positive charge enters the cell — _The ratio is reversed: three sodium ions leave for two potassium ions entering._
  - Explanation: Three Na⁺ out and two K⁺ in per ATP: one net positive charge leaves each cycle (electrogenic).
- **MCQ** **CORE** · `cel-na-k-atpase:mcq2` · mechanism → **mechanism** · difficulty 2 · `bc-membrane-pumps.glycosides`
  - How does digoxin increase the force of cardiac contraction?
  - ◻️ A. It stimulates β1 receptors to raise cAMP — _That is the action of β agonists such as dobutamine._
  - ◻️ B. It opens L-type calcium channels directly — _Digoxin does not act on calcium channels; its effect is through the pump._
  - ◻️ C. It inhibits phosphodiesterase 3 in the myocardium — _PDE3 inhibition is how milrinone raises cAMP; digoxin acts on the pump._
  - ◻️ D. It increases ATP production in mitochondria — _Digoxin acts by inhibiting the Na⁺/K⁺-ATPase._
  - ✅ E. Less Ca²⁺ is exported because intracellular Na⁺ rises
  - Explanation: Digoxin inhibits the Na⁺/K⁺-ATPase → intracellular Na⁺ rises → less Ca²⁺ is exchanged out → more Ca²⁺ for contraction.
- **MCQ** **APPLICATION** · `cel-na-k-atpase:mcq3` · prediction → **application** · difficulty 3 · `bc-membrane-pumps.glycosides`
  - A woman takes a large overdose of her digoxin tablets. Which serum electrolyte change is expected, and why?
  - ◻️ A. Hypokalemia, because the pump moves extra K⁺ into cells — _Digoxin inhibits the pump, so less, not more, K⁺ enters cells._
  - ◻️ B. No change, because digoxin acts only in the heart — _The Na⁺/K⁺-ATPase is present in cells throughout the body._
  - ◻️ C. Hypernatremia, because Na⁺ is pumped out of cells faster — _Pump inhibition keeps Na⁺ inside cells._
  - ✅ D. Hyperkalemia, because K⁺ is no longer pumped into cells
  - ◻️ E. Hypercalcemia, because bone releases calcium — _The calcium rise is intracellular in cardiac cells, not in serum from bone._
  - Steps: (1) Digoxin inhibits the Na⁺/K⁺-ATPase in cells throughout the body. (2) The pump normally moves K⁺ into cells. (3) With the pump blocked, K⁺ accumulates outside cells → hyperkalemia.
  - Explanation: Widespread Na⁺/K⁺-ATPase inhibition lets K⁺ leak out of cells and stops its re-uptake, so serum K⁺ rises in acute toxicity.
- **True/false** **CORE** · `cel-na-k-atpase:tf1` · recall → **recognition** · difficulty 1 · `bc-membrane-pumps.na-k-atpase`: The Na⁺/K⁺-ATPase moves two Na⁺ ions out and three K⁺ ions in for each ATP. → **False**. It moves three Na⁺ out and two K⁺ in for each ATP.
- **Crossword** **CORE** · `cel-na-k-atpase:clue1` · recall → **recognition** · difficulty 1 · `bc-membrane-pumps.glycosides`: Cardiac glycoside that inhibits the sodium pump to raise contractility → **DIGOXIN**
- **Mechanism Lab** **CORE** · `seq:digoxin` · mechanism → **mechanism** · difficulty 2 · `bc-membrane-pumps.glycosides`, `bc-membrane-pumps.na-k-atpase`: How digoxin strengthens the heartbeat. Order the events from digoxin binding to increased contractility.
  1. Digoxin inhibits the Na⁺/K⁺-ATPase
  2. Na⁺ accumulates inside the cardiac cell
  3. The Na⁺ gradient across the membrane falls
  4. The Na⁺–Ca²⁺ exchanger removes less Ca²⁺
  5. Intracellular Ca²⁺ rises
  6. Contraction becomes stronger
  - Digoxin’s inotropy is indirect: the exchanger needs a steep Na⁺ gradient to export Ca²⁺. In overdose, the same pump inhibition raises serum K⁺.

---

## Items flagged SPECIALIST (excluded from gameplay pending editorial review)

None in this batch.


## Medical Connections: complete puzzles (16 tiles, verified single solution against the global catalog)

### Inside the cell · **CORE** · `cx:cell-machinery` · identification → **recognition** · difficulty 2 · `bc-intermediate-filaments.markers`, `bc-peroxisome-proteasome.peroxisome`, `bc-cytoskeleton.motors`, `bc-membrane-pumps.transporters`

- **Intermediate filaments** (tier 1): Vimentin, Desmin, GFAP, Lamin — Tissue-specific structural filaments: mesenchyme, muscle, astrocytes and nuclear envelope.
- **Happen in peroxisomes** (tier 3): Catalase, Plasmalogen synthesis, VLCFA β-oxidation, Phytanic acid α-oxidation — Peroxisomes remove H₂O₂ and handle very-long-chain and branched fatty acids and plasmalogen synthesis.
- **Drugs acting on microtubules** (tier 2): Colchicine, Vincristine, Paclitaxel, Griseofulvin — All bind tubulin or microtubules: colchicine and vincristine block assembly, paclitaxel stabilizes, griseofulvin disrupts the fungal spindle.
- **Carry glucose across membranes** (tier 4): GLUT1, GLUT3, GLUT4, SGLT2 — GLUTs (facilitated diffusion) and SGLT2 (Na⁺-coupled secondary active transport).

Strict check (any 4 tiles inside any of 102 catalog categories, the puzzle's groups or its decoys): **1** solution(s).
Manual audit with broad categories (a group is defensible only if a category covers exactly its four tiles; the last four may share any category): **1** defensible solution(s).
Red herrings on the board (cannot complete an alternative board): Proteins (any) (9 tiles); Expressed in the brain (4 tiles).

<details><summary>Alternative groupings considered in the manual audit</summary>

- **Proteins (any)** — Theme-level category (9 tiles).
- **Expressed in the brain** — Exactly 4 tiles if plasmalogens (myelin) are counted; leftover {Vimentin, Desmin, Lamin, GLUT4, SGLT2, ...} cannot then form a glucose-transport group, so no second solution.
- **Muscle-related** — Only 2 tiles.
- **Natural products (plant or fungal)** — Coincides with the intended microtubule-drug group.
- **Anticancer drugs** — Only 2 tiles.
- **Insulin-related** — Only 1 tile.
- **Lipid metabolism** — 3 tiles; catalase completes the peroxisome group only.
- **Enzymes** — Only catalase is an enzyme tile; the others are processes or structural proteins.

</details>

## Connections category bank (builder input, not complete games)

- `grp:microtubule-drugs` **Act on microtubules**: Colchicine, Vincristine, Paclitaxel, Griseofulvin, Mebendazole. Colchicine and vincristine block polymerization, paclitaxel stabilizes, griseofulvin disrupts the fungal spindle and mebendazole binds worm tubulin.
- `grp:intermediate-filaments` **Intermediate filaments**: Vimentin, Desmin, Cytokeratin, GFAP, Neurofilament, Lamin. Tissue-specific intermediate filaments used as immunohistochemical markers.
