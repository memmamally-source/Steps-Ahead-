# Biochemistry — Cellular Batch 2 (signalling): medical review packet

Status: **draft, AI-drafted, not medically reviewed.** Reviewer: mark each concept approved, needs changes or rejected, with notes. A citation alone is not approval.

## How to read this packet

- Options are listed in their **stored** order (deterministically shuffled per item, with opaque ids). Learners see a fresh random order on every presentation; answers are checked by option id, never by position. ✅ marks the correct option.
- Each item shows its **reasoning task** and the **depth** that follows from it: recall/identification → recognition; mechanism → mechanism; interpretation/prediction/comparison/multistep → application. A vignette that only asks for the classic diagnosis is identification (recognition), not application. Application items list the inferential steps they require.
- Facts are split into **verified** (a supporting source was read in full text or as a published abstract/summary and states the claim) and **awaiting direct confirmation** (reasoned from pathway logic, or supported only by sources checked for existence). Awaiting facts block approval in the validator until a reviewer confirms them against a source.
- Citation “checked”: **full-text** (page read), **summary** (published abstract or summary read), **existence** (record confirmed but full text not accessible).
- Mastery: true/false and crossword answers count as weaker recognition evidence; repeating an item within 7 days adds little; “strong” needs at least 3 distinct items, including a mechanism or application item.
- Connections puzzles are checked for a single solution against the **global category catalog** (every bank category, every curated category and decoy, and a catalog of medically plausible groupings such as inheritance patterns, drug classes and toxin sources), not only against their own decoys. The daily builder applies the same check to every board it generates.

- **Two independent classifications.** *Step 1 relevance*: **CORE** (topic and depth supported by the official outline and mainstream Step 1 preparation), **SUPPLEMENTARY** (within the curriculum but beyond core depth; shown less often in games), **SPECIALIST** (obscure or postgraduate; never shown in games, excluded from coverage) or **UNREVIEWED** (not yet evaluated; never assumed core). *Cognitive depth*: **RECOGNITION**, **MECHANISM** or **APPLICATION**, from the reasoning task. A complex vignette on a classic mechanism can be CORE; a simple recall of an obscure finding can be SPECIALIST. The ~80/20 recognition-and-mechanism vs application mix is a flexible game-design target, not a relevance judgement.

## Summary

| Measure | Value |
|---|---|
| Concepts | 10 |
| Objectives taught | 19 |
| Facts verified / awaiting direct confirmation | 49 / 0 |
| **Playable learning items (total)** | **70** |
| — MCQs / true-false / crossword clues | 27 / 16 / 16 |
| — Mechanism Lab sequences / Match Up sets | 4 / 4 |
| — Complete Connections puzzles / Mystery Patient cases | 1 / 2 |
| Connections category-bank entries (builder input, **not** playable alone; excluded from item counts and coverage) | 2 |
| Items, Step 1 relevance: CORE / SUPPLEMENTARY / SPECIALIST / UNREVIEWED | 70 / 0 / 0 / 0 |
| Items, cognitive depth: RECOGNITION / MECHANISM / APPLICATION | 43 / 15 / 12 |
| Objectives, Step 1 relevance: CORE / SUPPLEMENTARY / SPECIALIST / UNREVIEWED | 19 / 0 / 0 / 0 |
| Playable items: recall | 39 |
| Playable items: identification | 4 |
| Playable items: mechanism | 15 |
| Playable items: interpretation | 2 |
| Playable items: prediction | 6 |
| Playable items: comparison | 1 |
| Playable items: multistep | 3 |

## G-protein-coupled receptors: Gs, Gi and Gq (`cel-gpcr`)

Objectives: `bc-gpcr.cycle`, `bc-gpcr.classes`, `bc-gpcr.receptors`

**Citations**

1. OpenStax Biology 2e, 9.1 Signaling Molecules and Cellular Receptors — <https://openstax.org/books/biology-2e/pages/9-1-signaling-molecules-and-cellular-receptors> — checked: full-text
2. OpenStax Biology 2e, 9.2 Propagation of the Signal — <https://openstax.org/books/biology-2e/pages/9-2-propagation-of-the-signal> — checked: full-text
3. OpenStax Anatomy and Physiology 2e, 17.2 Hormones — <https://openstax.org/books/anatomy-and-physiology-2e/pages/17-2-hormones> — checked: full-text
4. Motiejunaite J et al. Adrenergic receptors and cardiovascular effects of catecholamines (α1 Gq, α2 Gi, β Gs). Ann Endocrinol (Paris) 2021 — PMID 32473788 — <https://pubmed.ncbi.nlm.nih.gov/32473788/> — checked: summary
5. Kang H et al. M2 receptor–Gi signaling: Gβγ opens GIRK channels in the SA node (negative chronotropy). Front Physiol 2024 — PMID 38384797 — <https://pubmed.ncbi.nlm.nih.gov/38384797/> — checked: summary
6. An JY et al. M3 receptor → Gq/11 → PLC-β → IP₃-dependent Ca²⁺ release in detrusor contraction. Br J Pharmacol 2002 — PMID 12429572 — <https://pubmed.ncbi.nlm.nih.gov/12429572/> — checked: summary
7. Gurevich EV et al. D1/D5 couple to Gs and activate adenylyl cyclase; D2–D4 couple to Gi. Pharmacol Res 2016 — PMID 27178731 — <https://pubmed.ncbi.nlm.nih.gov/27178731/> — checked: summary
8. Kühn B et al. H1 receptors activate phospholipase C; H2 receptors raise cAMP. Mol Endocrinol 1996 — PMID 8961278 — <https://pubmed.ncbi.nlm.nih.gov/8961278/> — checked: summary
9. Valenti G et al. Vasopressin V2 receptor → cAMP → aquaporin-2 to the apical membrane. Endocrinology 2005 — PMID 16150901 — <https://pubmed.ncbi.nlm.nih.gov/16150901/> — checked: summary
10. Abbey SE, Potter LR. Vasopressin, angiotensin II and endothelin receptors couple to Gq and phospholipase Cβ. J Biol Chem 2002 — PMID 12196532 — <https://pubmed.ncbi.nlm.nih.gov/12196532/> — checked: summary

**Verified facts** [supporting citations]

- G-protein-coupled receptors have seven transmembrane domains. Ligand binding makes the α subunit release GDP and bind GTP; α and βγ then separate and act on effectors; GTP hydrolysis to GDP ends the signal and the subunits reassociate. [1]
- Gs activates adenylyl cyclase, which makes cAMP from ATP; cAMP activates protein kinase A; phosphodiesterase ends the signal by converting cAMP to AMP. [2, 3]
- Phospholipase C cleaves PIP₂ into IP₃ and DAG: IP₃ releases Ca²⁺ from the ER and DAG activates protein kinase C. [2, 3]
- α1 receptors couple to Gq (phospholipase C; vascular and urinary smooth muscle constriction); α2 receptors couple to Gi (less cAMP); β1 and β2 receptors activate the Gs–adenylyl cyclase–cAMP–PKA cascade. [4]
- M2 receptors couple to Gi: in the SA node, released Gβγ opens K⁺ channels and slows the heart. M3 receptors couple to Gq: PLC → IP₃ → Ca²⁺ release, contracting smooth muscle such as the detrusor. [5, 6]
- D1 receptors couple to Gs and activate adenylyl cyclase; D2 receptors couple to Gi and inhibit it. H1 receptors activate phospholipase C; H2 receptors raise cAMP. [7, 8]
- Vasopressin V2 receptors raise cAMP, sending aquaporin-2 to the apical membrane of collecting duct cells; vasopressin (V1), angiotensin II and endothelin receptors couple to Gq and phospholipase C. [9, 10]
- Glucagon, TSH and calcitonin use cAMP as their second messenger; angiotensin II uses Ca²⁺. [3]

**Mechanism.** The receptor is a switch for the G protein: ligand binding swaps GDP for GTP on Gα. Gs then turns adenylyl cyclase on (more cAMP, PKA), Gi turns it down (and its βγ can open K⁺ channels), and Gq turns on phospholipase C (IP₃ releases Ca²⁺, DAG activates PKC). Gα’s own GTPase activity switches the signal off.

**Quick.** Gs → adenylyl cyclase ↑ → cAMP → PKA (β1, β2, D1, H2, V2; glucagon, TSH, calcitonin). Gi → adenylyl cyclase ↓ (α2, M2, D2). Gq → phospholipase C → IP₃ (Ca²⁺) + DAG (PKC) (α1, M3, H1, V1, angiotensin II). GTP hydrolysis ends the signal.

**Detailed**

> G-protein-coupled receptors span the membrane seven times. The bound heterotrimeric G protein (α, β, γ) exchanges GDP for GTP when the ligand binds, separates into α-GTP and βγ, and activates effectors until GTP is hydrolyzed.

> The three high-yield pathways differ by their effector. Gs stimulates adenylyl cyclase, raising cAMP and activating PKA; Gi inhibits adenylyl cyclase and, through βγ, opens K⁺ channels; Gq activates phospholipase C, producing IP₃ (Ca²⁺ release from the ER) and DAG (protein kinase C). Knowing which G protein a receptor uses predicts its effect: α1 constricts vessels, β1 increases heart rate and contractility, M2 slows the heart, V2 inserts aquaporin-2.

**Misconception.** Gi does not “turn on an inhibitor”: it lowers cAMP by inhibiting adenylyl cyclase, and its βγ subunit can open K⁺ channels (as in the SA node).

**Takeaway.** Gs ↑cAMP, Gi ↓cAMP, Gq → IP₃/Ca²⁺ + DAG/PKC; GTP hydrolysis switches the G protein off.

- **MCQ** **CORE** · depth MECHANISM · `cel-gpcr:mcq1` · mechanism → **mechanism** · difficulty 2 · `bc-gpcr.cycle`
  - A G protein’s α subunit is mutated so that it binds GTP normally but cannot hydrolyze it. What happens to signaling after the receptor is stimulated once?
  - ◻️ A. The α subunit cannot release GDP — _GDP release and GTP binding are normal in this mutant; hydrolysis is the problem._
  - ◻️ B. βγ and α remain bound together permanently — _With GTP bound, α and βγ separate; they reassociate only after hydrolysis._
  - ◻️ C. cAMP is degraded faster by phosphodiesterase — _Phosphodiesterase is not affected by the G-protein mutation._
  - ◻️ D. The receptor can no longer bind its ligand — _Ligand binding is a property of the receptor, not of GTP hydrolysis._
  - ✅ E. The α subunit stays active, so the signal persists
  - Explanation: GTP hydrolysis by Gα is the off switch. If it cannot happen, the G protein stays active and keeps signaling.
- **MCQ** **CORE** · depth MECHANISM · `cel-gpcr:mcq2` · mechanism → **mechanism** · difficulty 2 · `bc-gpcr.classes`
  - A drug activates receptors that couple to Gq. Which intracellular events follow?
  - ◻️ A. Soluble guanylyl cyclase makes cGMP — _Soluble guanylyl cyclase is activated by nitric oxide, not Gq._
  - ✅ B. Phospholipase C makes IP₃ and DAG, raising Ca²⁺
  - ◻️ C. Adenylyl cyclase is inhibited and cAMP falls — _That is Gi signaling, used by α2, M2 and D2 receptors._
  - ◻️ D. The receptor dimerizes and phosphorylates tyrosines — _Dimerization and tyrosine phosphorylation describe receptor tyrosine kinases._
  - ◻️ E. Adenylyl cyclase is stimulated and PKA is activated — _That is Gs signaling, used by β1, β2, D1 and V2 receptors._
  - Explanation: Gq → phospholipase C → PIP₂ split into IP₃ (releases ER Ca²⁺) and DAG (activates protein kinase C).
- **MCQ** **CORE** · depth APPLICATION · `cel-gpcr:mcq3` · prediction → **application** · difficulty 3 · `bc-gpcr.receptors`
  - A patient receives an infusion of a drug that selectively activates α1-adrenergic receptors. Which response and pathway are expected?
  - ✅ A. Vasoconstriction through Gq and phospholipase C
  - ◻️ B. Reduced cAMP through Gi — _That is the α2 receptor, which lowers cAMP through Gi._
  - ◻️ C. Slower heart rate through Gi and K⁺ channels — _That describes M2 receptors in the SA node._
  - ◻️ D. Aquaporin-2 insertion through Gs — _That is the vasopressin V2 receptor in the collecting duct._
  - ◻️ E. Vasodilation through Gs and cAMP — _β2 receptors (Gs) dilate vessels; α1 receptors constrict them._
  - Steps: (1) α1 receptors couple to Gq. (2) Gq activates phospholipase C → IP₃ → Ca²⁺ release in vascular smooth muscle. (3) Raised Ca²⁺ → contraction → vasoconstriction and higher blood pressure.
  - Explanation: α1 receptors couple to Gq: phospholipase C → IP₃ → Ca²⁺ → smooth muscle contraction (vasoconstriction).
- **True/false** **CORE** · depth RECOGNITION · `cel-gpcr:tf1` · recall → **recognition** · difficulty 1 · `bc-gpcr.cycle`: G-protein-coupled receptors have seven transmembrane domains. → **True**. Correct: all G-protein-linked receptors span the membrane seven times.
- **True/false** **CORE** · depth RECOGNITION · `cel-gpcr:tf2` · recall → **recognition** · difficulty 1 · `bc-gpcr.receptors`: β1-adrenergic receptors in the heart couple to Gi and lower cAMP. → **False**. β1 receptors couple to Gs: adenylyl cyclase → cAMP → PKA → increased rate and contractility.
- **True/false** **CORE** · depth RECOGNITION · `cel-gpcr:tf3` · recall → **recognition** · difficulty 2 · `bc-gpcr.receptors`: M2 muscarinic receptors in the SA node couple to Gi and slow the heart. → **True**. Correct: Gβγ opens K⁺ channels, slowing pacemaker firing.
- **Crossword** **CORE** · depth RECOGNITION · `cel-gpcr:clue1` · recall → **recognition** · difficulty 2 · `bc-gpcr.classes`: Cyclase that Gs stimulates and Gi inhibits (first word) → **ADENYLYL**
- **Crossword** **CORE** · depth RECOGNITION · `cel-gpcr:clue2` · recall → **recognition** · difficulty 2 · `bc-gpcr.cycle`: Activity of Gα that switches the signal off → **GTPASE**
- **Mechanism Lab** **CORE** · depth MECHANISM · `seq:gs-camp` · mechanism → **mechanism** · difficulty 2 · `bc-gpcr.cycle`, `bc-second-messengers.camp`: From hormone to PKA. Order the steps of Gs signaling after a hormone binds its receptor.
  1. The hormone binds a seven-transmembrane receptor
  2. Gα releases GDP and binds GTP
  3. Gαs separates from βγ and activates adenylyl cyclase
  4. Adenylyl cyclase converts ATP to cAMP
  5. cAMP activates protein kinase A
  6. Phosphodiesterase converts cAMP to AMP, ending the signal
  - Gs → adenylyl cyclase → cAMP → PKA; phosphodiesterase and GTP hydrolysis end it. Cholera toxin keeps Gs on; PDE inhibitors keep cAMP high.
- **Match Up** **CORE** · depth RECOGNITION · `match:receptor-g-protein` · recall → **recognition** · difficulty 2 · `bc-gpcr.receptors`: Which G protein, which effect?. Match each receptor to its G protein and main effect.
  - Alpha-1 receptor ↔ Gq: vascular smooth muscle contraction
  - Alpha-2 receptor ↔ Gi: lowers cAMP
  - Beta-1 receptor ↔ Gs: faster, stronger heartbeat
  - M2 receptor ↔ Gi: βγ opens K⁺ channels, slowing the SA node
  - M3 receptor ↔ Gq: detrusor smooth muscle contraction
  - V2 receptor ↔ Gs: aquaporin-2 insertion in collecting duct
  - Gs raises cAMP, Gi lowers it (and βγ opens K⁺ channels), Gq activates phospholipase C.

---

## Toxins that hijack G proteins: cholera, E. coli LT and pertussis (`cel-gpcr-toxins`)

Objectives: `bc-gpcr.toxins`

**Citations**

1. De Haan L, Hirst TR. Cholera toxin and E. coli heat-labile toxin activate adenylate cyclase, causing diarrhoeal disease (review). Mol Membr Biol 2004 — PMID 15204437 — <https://pubmed.ncbi.nlm.nih.gov/15204437/> — checked: summary
2. Yan Z et al. Cholera toxin covalently ADP-ribosylates the α subunit of Gs. Mol Cell Biol Res Commun 1999 — PMID 10542136 — <https://pubmed.ncbi.nlm.nih.gov/10542136/> — checked: summary
3. Katada T. The inhibitory G protein Gi identified as the target of pertussis toxin ADP-ribosylation. Biol Pharm Bull 2012 — PMID 23207763 — <https://pubmed.ncbi.nlm.nih.gov/23207763/> — checked: summary
4. OpenStax Biology 2e, 9.1 Signaling Molecules and Cellular Receptors — <https://openstax.org/books/biology-2e/pages/9-1-signaling-molecules-and-cellular-receptors> — checked: full-text

**Verified facts** [supporting citations]

- Cholera toxin (Vibrio cholerae) and the related heat-labile enterotoxin of E. coli enter intestinal cells and modify intracellular targets, activating adenylate cyclase and causing life-threatening diarrhoeal disease. [1]
- Cholera toxin covalently ADP-ribosylates the α subunit of Gs. [2]
- Pertussis toxin ADP-ribosylates Gi, uncoupling receptors from adenylyl cyclase inhibition, so receptor-mediated lowering of cAMP is lost. [3]
- Bacterial toxins that interrupt G-protein-linked receptor function cause illnesses such as pertussis and cholera. [4]

**Mechanism.** Both toxins use ADP-ribosylation to raise cAMP, by opposite routes. Cholera toxin locks Gs in the “on” state, so adenylyl cyclase keeps making cAMP in intestinal cells, which pour out fluid. Pertussis toxin disables Gi, the brake on adenylyl cyclase, so cAMP is no longer lowered when inhibitory receptors are stimulated.

**Quick.** Cholera toxin and E. coli LT: ADP-ribosylate Gsα → Gs stays on → ↑ cAMP → massive watery diarrhea. Pertussis toxin: ADP-ribosylates Gi → Gi cannot inhibit adenylyl cyclase → ↑ cAMP.

**Detailed**

> Cholera toxin and E. coli heat-labile toxin are A–B toxins: the B part binds and the A part enters the cytosol and ADP-ribosylates Gsα. Adenylyl cyclase is persistently activated, cAMP rises, and the intestine secretes large volumes of fluid.

> Pertussis toxin ADP-ribosylates Gi, preventing inhibitory receptors from lowering cAMP. Both toxins are classic examples of how a single covalent modification of a G protein produces disease.

**Misconception.** Pertussis toxin does not activate Gs: it inactivates Gi. The result (higher cAMP) resembles cholera toxin, but the target is the inhibitory G protein.

**Takeaway.** Cholera/LT switch Gs on; pertussis switches Gi off; both raise cAMP.

- **MCQ** **CORE** · depth MECHANISM · `cel-gpcr-toxins:mcq1` · mechanism → **mechanism** · difficulty 2 · `bc-gpcr.toxins`
  - Why does cholera toxin cause persistently high cAMP in intestinal epithelial cells?
  - ◻️ A. It ADP-ribosylates elongation factor 2 — _EF-2 is the target of diphtheria toxin and Pseudomonas exotoxin A._
  - ◻️ B. It inhibits phosphodiesterase so cAMP is not degraded — _Cholera toxin acts on the G protein, not on phosphodiesterase._
  - ✅ C. It ADP-ribosylates Gsα, keeping adenylyl cyclase switched on
  - ◻️ D. It ADP-ribosylates Gi so that adenylyl cyclase is not inhibited — _That is the action of pertussis toxin._
  - ◻️ E. It activates soluble guanylyl cyclase — _Soluble guanylyl cyclase is activated by nitric oxide._
  - Explanation: Cholera toxin ADP-ribosylates Gsα; Gs stays active, adenylyl cyclase keeps making cAMP and the gut secretes fluid.
- **MCQ** **CORE** · depth APPLICATION · `cel-gpcr-toxins:mcq2` · interpretation → **application** · difficulty 4 · `bc-gpcr.toxins`
  - Toxin A and toxin B both raise cAMP in cultured cells. Toxin A still raises cAMP when only stimulatory (Gs-coupled) pathways are present. Toxin B raises cAMP only when an inhibitory (Gi-coupled) receptor is being stimulated. Which pairing fits?
  - ◻️ A. A pertussis toxin (acts on Gs); B cholera toxin (acts on Gi) — _Reversed: cholera toxin targets Gs, pertussis toxin targets Gi._
  - ◻️ B. A diphtheria toxin; B cholera toxin — _Diphtheria toxin targets EF-2 and does not raise cAMP._
  - ◻️ C. A pertussis toxin; B heat-labile E. coli toxin — _Heat-labile toxin acts like cholera toxin, on Gs._
  - ✅ D. A cholera toxin (acts on Gs); B pertussis toxin (acts on Gi)
  - ◻️ E. A and B both act on phosphodiesterase — _Neither toxin acts on phosphodiesterase._
  - Steps: (1) Toxin A raises cAMP through the stimulatory pathway alone → it activates Gs (cholera toxin). (2) Toxin B matters only when Gi is active → it disables the inhibitory G protein. (3) Pertussis toxin ADP-ribosylates Gi.
  - Explanation: Cholera toxin keeps Gs on regardless of other inputs. Pertussis toxin only matters when Gi is trying to lower cAMP, because it removes that brake.
- **True/false** **CORE** · depth RECOGNITION · `cel-gpcr-toxins:tf1` · recall → **recognition** · difficulty 1 · `bc-gpcr.toxins`: Pertussis toxin ADP-ribosylates the inhibitory G protein Gi. → **True**. Correct: Gi can no longer inhibit adenylyl cyclase, so cAMP rises.
- **Crossword** **CORE** · depth RECOGNITION · `cel-gpcr-toxins:clue1` · recall → **recognition** · difficulty 1 · `bc-gpcr.toxins`: Toxin that ADP-ribosylates Gi → **PERTUSSIS**
- **Match Up** **CORE** · depth RECOGNITION · `match:signaling-diseases` · recall → **recognition** · difficulty 2 · `bc-gpcr.toxins`, `bc-gpcr.mccune-albright`, `bc-rtk.oncogenic`, `bc-jak-stat.jak2`: Signaling gone wrong. Match each toxin or disorder to its signaling defect.
  - Cholera toxin ↔ ADP-ribosylates Gsα (cAMP stays high)
  - Pertussis toxin ↔ ADP-ribosylates Gi (brake removed)
  - McCune–Albright syndrome ↔ Mosaic activating GNAS mutation
  - Achondroplasia ↔ Overactive FGFR3
  - Polycythemia vera ↔ JAK2 constantly active (V617F)
  - Chronic myeloid leukemia ↔ BCR-ABL1 fusion kinase
  - Classic diseases map onto single signaling switches stuck on (Gs, FGFR3, JAK2, BCR-ABL1) or brakes removed (Gi).
- **Mystery Patient** **CORE** · depth APPLICATION · `case:cholera` · multistep → **application** · difficulty 4 · `bc-gpcr.toxins`: Rice-water stools
  - Presentation: A 30-year-old aid worker has had profuse, painless watery diarrhea for 12 hours, many liters in total.
  - History: She has been working in a camp where several people have similar illness after drinking untreated water.
  - Examination: Sunken eyes, dry mucous membranes, tachycardia and low blood pressure. No fever. Abdomen soft and non-tender.
  - Laboratory: Stool is pale and watery, with flecks of mucus and no blood or white cells. Serum potassium and bicarbonate are low.
  - Further clue: Stool culture grows a curved gram-negative rod.
  - Q: Which molecular event in her intestinal cells explains the diarrhea?
  - ◻️ A. Invasion and destruction of the mucosa — _Invasive infection gives blood and white cells in stool, which are absent here._
  - ◻️ B. ADP-ribosylation of Gi removes the brake on adenylyl cyclase — _That is pertussis toxin, which causes whooping cough, not secretory diarrhea._
  - ✅ C. ADP-ribosylation of Gsα keeps adenylyl cyclase active
  - ◻️ D. Inactivation of 28S rRNA stops protein synthesis — _Shiga toxin acts this way and causes bloody diarrhea, not painless watery stools._
  - ◻️ E. Activation of soluble guanylyl cyclase by nitric oxide — _Nitric oxide relaxes smooth muscle; it does not explain toxin-driven secretion._
  - Massive painless watery diarrhea after contaminated water, without blood or white cells, and a curved gram-negative rod point to cholera. Cholera toxin ADP-ribosylates Gsα, so adenylyl cyclase stays on, cAMP rises and the intestine secretes huge volumes of fluid.
  - Differentials: Enterotoxigenic E. coli (Its heat-labile toxin acts like cholera toxin; usually milder traveler’s diarrhea.); Shigella infection (Bloody diarrhea with fever and white cells in stool.)

---

## McCune–Albright syndrome (activating GNAS) (`cel-mccune-albright`)

Objectives: `bc-gpcr.mccune-albright`

**Citations**

1. MedlinePlus Genetics: McCune-Albright syndrome — <https://medlineplus.gov/genetics/condition/mccune-albright-syndrome/> — checked: full-text
2. MedlinePlus Genetics: GNAS gene — <https://medlineplus.gov/genetics/gene/gnas/> — checked: full-text

**Verified facts** [supporting citations]

- GNAS encodes the stimulatory α subunit of a G protein (Gsα) that stimulates adenylate cyclase. [2]
- In McCune–Albright syndrome, GNAS mutations make adenylate cyclase constantly active, leading to overproduction of several hormones. [2]
- The mutation is somatic and arises very early in development, so only some cells carry it (mosaicism); it is not inherited. [2, 1]
- Features include polyostotic fibrous dysplasia, café-au-lait spots with irregular (“coast of Maine”) borders, often on one side, early puberty in girls, and other endocrine hyperfunction (hyperthyroidism in about half, excess growth hormone, rarely Cushing syndrome). [1]

**Mechanism.** A Gsα that cannot switch off keeps adenylyl cyclase active, so cAMP-driven tissues (bone, skin melanocytes, endocrine glands) overact. Because the mutation is mosaic, only the tissues carrying it are affected — which explains the patchy, often one-sided pattern.

**Quick.** Mosaic, postzygotic activating GNAS (Gsα) mutation → constant cAMP → polyostotic fibrous dysplasia + irregular café-au-lait spots + endocrine hyperfunction (precocious puberty, hyperthyroidism, GH excess).

**Detailed**

> Gsα normally switches itself off by hydrolyzing GTP. The McCune–Albright mutations leave adenylyl cyclase constantly active, raising cAMP in the tissues that carry the mutation.

> Because the mutation occurs early in embryonic development, it is present in a mosaic pattern. The classic triad is polyostotic fibrous dysplasia, café-au-lait spots with irregular borders and endocrine overactivity such as precocious puberty.

**Misconception.** McCune–Albright syndrome is not passed to children in the usual way: the mutation arises after conception, and a germline (whole-body) activating mutation is thought to be incompatible with survival.

**Takeaway.** McCune–Albright = mosaic Gsα gain of function: bone + skin + hormone excess.

- **MCQ** **CORE** · depth RECOGNITION · `cel-mccune-albright:mcq1` · identification → **recognition** · difficulty 2 · `bc-gpcr.mccune-albright`
  - A 6-year-old girl has breast development and vaginal bleeding, several large café-au-lait spots with jagged borders on one side of her trunk, and a leg fracture through a bone lesion. Why does she have overactive endocrine glands?
  - ◻️ A. Loss of NF1 activates RAS in every cell — _Neurofibromatosis causes café-au-lait spots with smooth borders and neurofibromas._
  - ◻️ B. Autoantibodies stimulate the TSH receptor — _Stimulating antibodies explain Graves disease, not bone lesions and café-au-lait spots._
  - ◻️ C. An inherited loss of Gi removes the brake on adenylyl cyclase — _The disorder is caused by an activating Gsα mutation, not loss of Gi, and is not inherited._
  - ◻️ D. A gonadotropin-secreting pituitary tumor — _A tumor would not explain fibrous dysplasia and patchy skin pigmentation._
  - ✅ E. A mosaic Gsα mutation keeps adenylyl cyclase constantly active
  - Explanation: Precocious puberty + irregular café-au-lait spots + fibrous dysplasia = McCune–Albright syndrome: a somatic, mosaic activating GNAS mutation keeps Gs (and cAMP) switched on.
- **MCQ** **CORE** · depth MECHANISM · `cel-mccune-albright:mcq2` · mechanism → **mechanism** · difficulty 3 · `bc-gpcr.mccune-albright`
  - Why is McCune–Albright syndrome patchy, affecting some bones and only one side of the skin?
  - ◻️ A. The mutation is reversed in half the body — _Mutations are not reversed; they are absent from cells that did not inherit them._
  - ◻️ B. cAMP diffuses only short distances in tissues — _The pattern reflects which cells carry the mutation, not cAMP diffusion._
  - ◻️ C. The mutation is X-linked, so random X-inactivation causes patches — _GNAS is not on the X chromosome; the patchiness reflects somatic mosaicism._
  - ◻️ D. Only some tissues express any G proteins — _G proteins are present in almost all cells._
  - ✅ E. The GNAS mutation arose after conception, so only some cells carry it
  - Explanation: Mosaicism: the mutation occurs early in embryonic development, so only descendants of that cell carry it.
- **True/false** **CORE** · depth RECOGNITION · `cel-mccune-albright:tf1` · recall → **recognition** · difficulty 2 · `bc-gpcr.mccune-albright`: McCune–Albright syndrome is usually inherited in an autosomal dominant pattern. → **False**. It results from a somatic mutation early in development (mosaicism) and is not inherited.
- **Crossword** **CORE** · depth RECOGNITION · `cel-mccune-albright:clue1` · recall → **recognition** · difficulty 2 · `bc-gpcr.mccune-albright`: Gene for Gsα activated in McCune–Albright syndrome → **GNAS**
- **Mystery Patient** **CORE** · depth APPLICATION · `case:mccune-albright` · multistep → **application** · difficulty 4 · `bc-gpcr.mccune-albright`: Early puberty and a crooked map
  - Presentation: A 5-year-old girl is brought in for breast development and an episode of vaginal bleeding.
  - History: She broke her thigh bone after a minor fall last year. No family history of similar problems.
  - Examination: Large light-brown patches with jagged edges on the left side of her back and buttock, stopping at the midline. Tanner stage 3 breasts.
  - Laboratory: Estradiol raised; LH and FSH suppressed. Free T4 raised with suppressed TSH.
  - Imaging & tests: Radiographs show expansile, ground-glass lesions in several bones.
  - Q: Which molecular abnormality explains her bone, skin and endocrine findings?
  - ◻️ A. Premature activation of hypothalamic GnRH release — _Central puberty raises LH and FSH; here they are suppressed (peripheral, gonadotropin-independent puberty)._
  - ◻️ B. A germline loss-of-function mutation of NF1 — _Neurofibromatosis causes smooth-bordered café-au-lait spots and neurofibromas, not fibrous dysplasia with hormone excess._
  - ✅ C. A mosaic activating mutation of Gsα that keeps adenylyl cyclase on
  - ◻️ D. A constitutively active FGFR3 receptor — _FGFR3 gain of function causes achondroplasia._
  - ◻️ E. Autoantibodies stimulating the TSH receptor — _Graves disease would not explain the bone lesions, skin patches and early puberty._
  - Polyostotic fibrous dysplasia, one-sided café-au-lait spots with jagged borders and gonadotropin-independent precocious puberty with hyperthyroidism indicate McCune–Albright syndrome. A somatic, mosaic GNAS mutation makes Gsα constantly active, so cAMP is high in affected bone, skin and endocrine cells.
  - Differentials: Neurofibromatosis type 1 (Smooth-bordered café-au-lait spots, neurofibromas, Lisch nodules.); Central precocious puberty (LH and FSH are raised, not suppressed.)

---

## cAMP, IP₃/DAG/Ca²⁺ and phosphodiesterase inhibitors (`cel-second-messengers`)

Objectives: `bc-second-messengers.camp`, `bc-second-messengers.ip3-dag`

**Citations**

1. OpenStax Biology 2e, 9.2 Propagation of the Signal — <https://openstax.org/books/biology-2e/pages/9-2-propagation-of-the-signal> — checked: full-text
2. OpenStax Anatomy and Physiology 2e, 17.2 Hormones — <https://openstax.org/books/anatomy-and-physiology-2e/pages/17-2-hormones> — checked: full-text
3. Endoh M. PDE3 inhibitors (milrinone) act via cAMP/PKA; inotropic and vasodilator effects. Expert Opin Pharmacother 2006 — PMID 17059376 — <https://pubmed.ncbi.nlm.nih.gov/17059376/> — checked: summary
4. Giembycz MA, Field SK. Roflumilast: first PDE4 inhibitor approved for COPD. Drug Des Devel Ther 2010 — PMID 20689641 — <https://pubmed.ncbi.nlm.nih.gov/20689641/> — checked: summary
5. Barnes PJ. Theophylline: PDE inhibition (bronchodilation); adenosine A1 antagonism at high levels. Pharmaceuticals (Basel) 2010 — PMID 27713276 — <https://pubmed.ncbi.nlm.nih.gov/27713276/> — checked: summary
6. An JY et al. M3 receptor → Gq/11 → PLC-β → IP₃-dependent Ca²⁺ release in detrusor contraction. Br J Pharmacol 2002 — PMID 12429572 — <https://pubmed.ncbi.nlm.nih.gov/12429572/> — checked: summary

**Verified facts** [supporting citations]

- Adenylyl cyclase makes cAMP from ATP; cAMP activates cAMP-dependent protein kinase (PKA); phosphodiesterase converts cAMP to AMP, which keeps cAMP signals short. [1, 2]
- Phospholipase C cleaves PIP₂ into DAG and IP₃. DAG stays in the membrane and activates protein kinase C; IP₃ opens Ca²⁺ channels in the endoplasmic reticulum. [1, 2]
- Released Ca²⁺ acts directly or binds calmodulin, which then regulates protein kinases. [2]
- PDE3 inhibitors (milrinone) raise cAMP and PKA activity, increasing cardiac contractility and dilating vessels (“inodilators”). [3]
- Roflumilast is a selective PDE4 inhibitor used in severe COPD. [4]
- Theophylline relaxes bronchi by inhibiting phosphodiesterases; at higher levels it causes arrhythmias and seizures through adenosine A1 receptor antagonism. [5]

**Mechanism.** Second messengers amplify a receptor signal inside the cell. cAMP activates PKA until phosphodiesterase destroys it, so blocking a phosphodiesterase prolongs and strengthens cAMP signals. IP₃ and DAG are made together: IP₃ raises cytosolic Ca²⁺ (often acting through calmodulin) and DAG activates PKC.

**Quick.** cAMP → PKA; PDE breaks cAMP → AMP. PDE inhibitors: milrinone (PDE3, heart: inotropy + vasodilation), roflumilast (PDE4, COPD), theophylline (bronchodilator; toxicity: arrhythmia, seizures). Gq/PLC → IP₃ (ER Ca²⁺ → calmodulin) + DAG (PKC).

**Detailed**

> Water-soluble hormones act through second messengers. The cAMP system is the most common: adenylyl cyclase makes cAMP, cAMP activates PKA, and phosphodiesterases end the signal. PDE3 inhibition in heart and vessels (milrinone) increases contractility and causes vasodilation; PDE4 inhibition (roflumilast) is used in COPD; theophylline is a bronchodilator with a narrow margin of safety.

> In the calcium system, phospholipase C cleaves PIP₂ into IP₃ and DAG. IP₃ releases Ca²⁺ from the ER; Ca²⁺ can act directly or through calmodulin. DAG activates PKC. Angiotensin II is an example of a hormone using calcium as a second messenger.

**Misconception.** Phosphodiesterase inhibitors do not stimulate receptors: they slow the breakdown of cAMP (or cGMP), so whatever signal is present lasts longer.

**Takeaway.** cAMP → PKA, ended by PDE (PDE inhibitors prolong it). PLC → IP₃ (Ca²⁺) + DAG (PKC).

- **MCQ** **CORE** · depth MECHANISM · `cel-second-messengers:mcq1` · mechanism → **mechanism** · difficulty 2 · `bc-second-messengers.camp`
  - A patient with severe acute heart failure is given milrinone. Why do both cardiac contractility and vasodilation increase?
  - ◻️ A. It activates β1 receptors directly — _Milrinone acts beyond the receptor, on phosphodiesterase 3._
  - ◻️ B. It releases nitric oxide from endothelium — _Nitrates release NO; milrinone is a PDE3 inhibitor._
  - ✅ C. It blocks PDE3, so cAMP rises
  - ◻️ D. It raises cGMP by inhibiting PDE5 — _PDE5 inhibition (sildenafil) acts on cGMP, mainly in vascular smooth muscle._
  - ◻️ E. It inhibits the Na⁺/K⁺-ATPase — _That is digoxin, a cardiac glycoside, not a PDE inhibitor._
  - Explanation: Milrinone blocks PDE3, so cAMP and PKA activity rise: more contractile force in the heart and relaxation in vascular smooth muscle (an “inodilator”).
- **MCQ** **CORE** · depth APPLICATION · `cel-second-messengers:mcq2` · prediction → **application** · difficulty 3 · `bc-second-messengers.camp`
  - A man with asthma takes theophylline. After an extra dose taken by mistake, he develops a rapid irregular heartbeat and then a seizure. What explains the toxicity at high levels?
  - ◻️ A. Cholinergic stimulation of the heart — _Theophylline is not a cholinergic agonist._
  - ◻️ B. Excess PDE5 inhibition causing hypotension — _Theophylline’s high-level toxicity is attributed to adenosine A1 antagonism, not PDE5._
  - ◻️ C. Inhibition of ribonucleotide reductase — _That is the action of hydroxyurea._
  - ◻️ D. Opening of K⁺ channels by Gβγ — _Gβγ-gated K⁺ channels slow the heart; they do not cause seizures._
  - ✅ E. Adenosine receptor antagonism
  - Steps: (1) Theophylline has a narrow therapeutic range. (2) At high concentrations it blocks adenosine A1 receptors. (3) Loss of adenosine’s calming effect on heart and brain → arrhythmias and seizures.
  - Explanation: Theophylline’s bronchodilation comes from PDE inhibition; at high levels adenosine A1 receptor antagonism causes arrhythmias and seizures.
- **MCQ** **CORE** · depth MECHANISM · `cel-second-messengers:mcq3` · mechanism → **mechanism** · difficulty 2 · `bc-second-messengers.ip3-dag`
  - Acetylcholine contracts bladder (detrusor) smooth muscle through M3 receptors. Which messenger directly releases Ca²⁺ from intracellular stores in this response?
  - ◻️ A. cGMP — _cGMP is made by guanylyl cyclases and relaxes smooth muscle._
  - ◻️ B. cAMP — _cAMP is the Gs pathway messenger and activates PKA._
  - ✅ C. IP₃
  - ◻️ D. Calmodulin — _Calmodulin binds Ca²⁺ after it is released._
  - ◻️ E. DAG — _DAG stays in the membrane and activates protein kinase C._
  - Explanation: M3 → Gq → phospholipase C → IP₃, which opens ER Ca²⁺ channels; the Ca²⁺ then drives contraction.
- **True/false** **CORE** · depth RECOGNITION · `cel-second-messengers:tf1` · recall → **recognition** · difficulty 1 · `bc-second-messengers.camp`: Phosphodiesterase ends cAMP signals by converting cAMP to AMP. → **True**. Correct: inhibiting phosphodiesterase prolongs cAMP signaling.
- **True/false** **CORE** · depth RECOGNITION · `cel-second-messengers:tf2` · recall → **recognition** · difficulty 1 · `bc-second-messengers.ip3-dag`: DAG diffuses into the cytoplasm and releases Ca²⁺ from the endoplasmic reticulum. → **False**. IP₃ releases ER Ca²⁺; DAG stays in the membrane and activates protein kinase C.
- **Crossword** **CORE** · depth RECOGNITION · `cel-second-messengers:clue1` · recall → **recognition** · difficulty 2 · `bc-second-messengers.ip3-dag`: Calcium-binding protein that relays IP₃-released Ca²⁺ signals → **CALMODULIN**
- **Crossword** **CORE** · depth RECOGNITION · `cel-second-messengers:clue2` · recall → **recognition** · difficulty 2 · `bc-second-messengers.camp`: PDE3 inhibitor used as an inodilator → **MILRINONE**
- **Mechanism Lab** **CORE** · depth MECHANISM · `seq:gq-calcium` · mechanism → **mechanism** · difficulty 2 · `bc-second-messengers.ip3-dag`, `bc-gpcr.classes`: The Gq calcium route. Order the steps from an M3 receptor to smooth muscle contraction.
  1. Acetylcholine binds the M3 receptor
  2. Gq is activated
  3. Phospholipase C cleaves PIP₂
  4. IP₃ opens Ca²⁺ channels in the endoplasmic reticulum
  5. Cytosolic Ca²⁺ rises
  6. Smooth muscle contracts
  - Gq receptors (α1, M3, V1, angiotensin II) → phospholipase C → IP₃ (Ca²⁺) and DAG (PKC).
- **Match Up** **CORE** · depth RECOGNITION · `match:second-messenger-drugs` · recall → **recognition** · difficulty 2 · `bc-second-messengers.camp`, `bc-second-messengers.cgmp`: Messengers and the drugs that tune them. Match each drug or signal to its target.
  - Nitric oxide ↔ Soluble guanylyl cyclase
  - ANP ↔ Membrane guanylyl cyclase receptor
  - Sildenafil ↔ PDE5 (prolongs cGMP)
  - Milrinone ↔ PDE3 (raises cAMP in heart and vessels)
  - Roflumilast ↔ PDE4 (severe COPD)
  - Theophylline ↔ Nonselective PDE inhibition; adenosine antagonism at high levels
  - Guanylyl cyclases make cGMP; phosphodiesterases break cAMP and cGMP down, so PDE inhibitors prolong the signal.

---

## Nitric oxide, natriuretic peptides and cGMP (`cel-cgmp`)

Objectives: `bc-second-messengers.cgmp`

**Citations**

1. Xiao S et al. NO activates soluble guanylate cyclase → cGMP → protein kinase G; smooth muscle relaxation. Mini Rev Med Chem 2019 — PMID 31362687 — <https://pubmed.ncbi.nlm.nih.gov/31362687/> — checked: summary
2. Goetze JP et al. ANP and BNP act through membrane-bound guanylyl cyclase receptors (cGMP). Nat Rev Cardiol 2020 — PMID 32444692 — <https://pubmed.ncbi.nlm.nih.gov/32444692/> — checked: summary
3. Chuang AT et al. Sildenafil, a PDE5 inhibitor, amplifies NO–cGMP relaxation of corpus cavernosum. J Urol 1998 — PMID 9628660 — <https://pubmed.ncbi.nlm.nih.gov/9628660/> — checked: summary

**Verified facts** [supporting citations]

- Nitric oxide activates soluble guanylate cyclase, its intracellular receptor, which converts GTP to cGMP; cGMP activates protein kinase G and other effectors, relaxing smooth muscle and reducing platelet aggregation. [1]
- ANP and BNP act through membrane-bound guanylyl cyclase receptors that generate intracellular cGMP. [2]
- Sildenafil is a selective PDE5 inhibitor that amplifies NO-induced, cGMP-dependent relaxation of corpus cavernosum smooth muscle. [3]

**Mechanism.** There are two routes to cGMP: nitric oxide diffuses into the cell and activates soluble guanylyl cyclase, while natriuretic peptides bind a receptor that is itself a guanylyl cyclase. cGMP activates protein kinase G and relaxes smooth muscle. PDE5 normally breaks cGMP down, so PDE5 inhibitors prolong the relaxation started by NO.

**Quick.** NO → soluble guanylyl cyclase → cGMP → PKG → smooth muscle relaxation (vasodilation, ↓ platelet aggregation). ANP/BNP → membrane guanylyl cyclase receptor → cGMP. PDE5 inhibitors (sildenafil) prolong cGMP.

**Detailed**

> Nitric oxide is a gas that crosses membranes and activates soluble guanylyl cyclase inside smooth muscle cells. ANP and BNP use a different, membrane-bound guanylyl cyclase receptor. Both pathways raise cGMP, which acts through protein kinase G to relax smooth muscle.

> PDE5 breaks down cGMP. Sildenafil blocks it, so NO-triggered relaxation in the corpus cavernosum is amplified, which is the basis of its use in erectile dysfunction.

**Misconception.** PDE5 inhibitors do not cause erection on their own: they amplify the cGMP made when nitric oxide is released, which is why sexual stimulation is still needed.

**Takeaway.** NO → soluble GC; ANP/BNP → membrane GC; cGMP → PKG → relaxation; PDE5 inhibitors prolong it.

- **MCQ** **CORE** · depth MECHANISM · `cel-cgmp:mcq1` · mechanism → **mechanism** · difficulty 2 · `bc-second-messengers.cgmp`
  - Nitroglycerin releases nitric oxide in vascular smooth muscle. Which enzyme does NO activate to cause relaxation?
  - ✅ A. Soluble guanylyl cyclase
  - ◻️ B. Membrane-bound guanylyl cyclase (natriuretic peptide receptor) — _The membrane guanylyl cyclase is the receptor for ANP and BNP, not NO._
  - ◻️ C. Phosphodiesterase 5 — _PDE5 breaks cGMP down; NO does not activate it to relax vessels._
  - ◻️ D. Adenylyl cyclase — _Adenylyl cyclase makes cAMP and is controlled by Gs and Gi._
  - ◻️ E. Phospholipase C — _Phospholipase C makes IP₃ and DAG, which tend to contract smooth muscle._
  - Explanation: NO activates soluble guanylyl cyclase → cGMP → protein kinase G → smooth muscle relaxation.
- **MCQ** **CORE** · depth APPLICATION · `cel-cgmp:mcq2` · prediction → **application** · difficulty 3 · `bc-second-messengers.cgmp`
  - A man taking sildenafil for erectile dysfunction is also prescribed a nitrate for angina. Why can this combination cause severe hypotension?
  - ◻️ A. Both drugs block β1 receptors in the heart — _Neither drug is a β blocker._
  - ◻️ B. Nitrates inhibit adenylyl cyclase in vessels — _Nitrates act through NO and soluble guanylyl cyclase._
  - ◻️ C. Sildenafil inhibits nitric oxide synthase — _Sildenafil inhibits PDE5; it does not block NO synthesis._
  - ✅ D. cGMP is made faster and broken down slower
  - ◻️ E. Both drugs raise intracellular Ca²⁺ in vessels — _Raised Ca²⁺ would constrict vessels; both drugs promote relaxation._
  - Steps: (1) Nitrates release NO → soluble guanylyl cyclase → more cGMP. (2) Sildenafil blocks PDE5 → cGMP is not broken down. (3) cGMP accumulates in vascular smooth muscle → widespread vasodilation → hypotension.
  - Explanation: Nitrates raise cGMP production through NO; sildenafil blocks cGMP breakdown. Together they cause excessive vasodilation and hypotension.
- **True/false** **CORE** · depth RECOGNITION · `cel-cgmp:tf1` · recall → **recognition** · difficulty 2 · `bc-second-messengers.cgmp`: ANP and BNP act through a membrane-bound guanylyl cyclase receptor. → **True**. Correct: their receptors are themselves guanylyl cyclases that make cGMP.
- **Crossword** **CORE** · depth RECOGNITION · `cel-cgmp:clue1` · recall → **recognition** · difficulty 1 · `bc-second-messengers.cgmp`: PDE5 inhibitor that prolongs NO-induced cGMP signaling → **SILDENAFIL**
- **Mechanism Lab** **CORE** · depth MECHANISM · `seq:no-cgmp` · mechanism → **mechanism** · difficulty 2 · `bc-second-messengers.cgmp`: Nitric oxide relaxes a vessel. Order the steps from nitric oxide to smooth muscle relaxation.
  1. Nitric oxide diffuses into the smooth muscle cell
  2. NO activates soluble guanylyl cyclase
  3. GTP is converted to cGMP
  4. cGMP activates protein kinase G
  5. The smooth muscle relaxes
  6. PDE5 breaks down cGMP, ending the signal
  - Nitrates supply NO; sildenafil blocks PDE5. Combining them lets cGMP accumulate and can cause severe hypotension.

---

## Predicting hormone and drug effects from the receptor mechanism (`cel-signal-predict`)

Objectives: `bc-second-messengers.predict`, `bc-receptor-other.classify`

**Citations**

1. Valenti G et al. Vasopressin V2 receptor → cAMP → aquaporin-2 to the apical membrane. Endocrinology 2005 — PMID 16150901 — <https://pubmed.ncbi.nlm.nih.gov/16150901/> — checked: summary
2. Abbey SE, Potter LR. Vasopressin, angiotensin II and endothelin receptors couple to Gq and phospholipase Cβ. J Biol Chem 2002 — PMID 12196532 — <https://pubmed.ncbi.nlm.nih.gov/12196532/> — checked: summary
3. OpenStax Anatomy and Physiology 2e, 17.2 Hormones — <https://openstax.org/books/anatomy-and-physiology-2e/pages/17-2-hormones> — checked: full-text
4. OpenStax Biology 2e, 9.1 Signaling Molecules and Cellular Receptors — <https://openstax.org/books/biology-2e/pages/9-1-signaling-molecules-and-cellular-receptors> — checked: full-text
5. OpenStax Anatomy and Physiology 2e, 17.9 The Endocrine Pancreas — <https://openstax.org/books/anatomy-and-physiology-2e/pages/17-9-the-endocrine-pancreas> — checked: full-text

**Verified facts** [supporting citations]

- Vasopressin acting on V2 receptors raises cAMP, sending aquaporin-2 to the apical membrane of collecting duct cells; acting on V1 receptors it couples to Gq and phospholipase C (vasoconstriction). [1, 2]
- Glucagon uses cAMP as its second messenger, while insulin acts through a tyrosine kinase receptor. [3, 5]
- Steroid hormones diffuse through the membrane and bind intracellular receptors; the hormone–receptor complex binds DNA and changes transcription, so new proteins must be made before the effect appears. [3, 4]
- Membrane receptor signals such as cAMP are short-lived because phosphodiesterase degrades cAMP quickly. [3]

**Mechanism.** The receptor mechanism predicts both the effect and its speed. Ion-channel and G-protein receptors act within seconds to minutes; steroid and thyroid hormones act through gene transcription and new protein synthesis, so their effects take longer to appear and last longer.

**Quick.** V1 → Gq → vasoconstriction; V2 → cAMP → aquaporin-2 → water retention. Glucagon → cAMP; insulin → tyrosine kinase. Steroids/thyroid → nuclear receptor → transcription (slower, longer). cAMP signals are short (PDE).

**Detailed**

> Knowing the receptor tells you the messenger and the effect: vasopressin’s V2 receptor in the collecting duct raises cAMP and inserts aquaporin-2, whereas V1 in vessels activates Gq. Glucagon raises cAMP in hepatocytes, while insulin uses its own tyrosine kinase receptor.

> Lipid-soluble hormones act inside the cell by changing transcription, so their effects require new protein synthesis and develop more slowly than effects mediated by membrane receptors and second messengers.

**Misconception.** One hormone can have opposite-seeming effects through different receptors: vasopressin constricts vessels through V1 (Gq) but retains water through V2 (Gs, cAMP).

**Takeaway.** Receptor class → messenger → effect and speed: channels/GPCRs fast; nuclear receptors slow.

- **MCQ** **CORE** · depth APPLICATION · `cel-signal-predict:mcq1` · prediction → **application** · difficulty 3 · `bc-second-messengers.predict`
  - A patient with diabetes insipidus is given desmopressin, which selectively stimulates V2 receptors. Which cellular change in the collecting duct explains the reduced urine output?
  - ◻️ A. IP₃ rises and smooth muscle contracts — _That is the V1 (Gq) response in vascular smooth muscle._
  - ◻️ B. A nuclear receptor increases transcription of sodium channels — _Vasopressin acts through a G-protein-coupled receptor, not a nuclear receptor._
  - ◻️ C. JAK–STAT signaling increases aquaporin synthesis — _V2 is a G-protein-coupled receptor that raises cAMP._
  - ✅ D. cAMP rises and aquaporin-2 is inserted into the apical membrane
  - ◻️ E. cGMP rises and the duct cells relax — _cGMP is not the V2 messenger._
  - Steps: (1) Desmopressin is a V2-selective agonist. (2) V2 receptors raise cAMP in collecting duct cells. (3) cAMP sends aquaporin-2 to the apical membrane → water reabsorption → less, more concentrated urine.
  - Explanation: V2 → Gs → cAMP → aquaporin-2 moves to the apical membrane → water is reabsorbed → urine concentrates.
- **MCQ** **CORE** · depth APPLICATION · `cel-signal-predict:mcq2` · comparison → **application** · difficulty 3 · `bc-receptor-other.classify`
  - Drug P acts on a G-protein-coupled receptor and Drug Q is a steroid that acts on an intracellular receptor. Which statement about their time courses is most accurate?
  - ◻️ A. Both act equally fast because both bind receptors — _Second-messenger signaling is faster than transcription-dependent effects._
  - ✅ B. P acts fast; Q needs transcription so is slower
  - ◻️ C. Q acts faster because steroids cross membranes — _Crossing the membrane is easy, but the effect still requires new gene transcription and protein synthesis._
  - ◻️ D. Q acts by opening an ion channel in the membrane — _Steroids act on intracellular receptors that bind DNA._
  - ◻️ E. P acts only after new proteins are synthesized — _G-protein signaling acts on existing proteins (enzymes, channels)._
  - Steps: (1) P: GPCR → second messenger → existing enzymes and channels change within minutes. (2) Q: steroid → intracellular receptor → DNA binding → transcription → new protein. (3) Transcription-dependent effects are slower to start and last longer.
  - Explanation: Second-messenger signaling modifies existing proteins quickly; nuclear receptors change transcription, so effects depend on new protein synthesis and take longer.
- **True/false** **CORE** · depth RECOGNITION · `cel-signal-predict:tf1` · recall → **recognition** · difficulty 1 · `bc-second-messengers.predict`: Glucagon uses cAMP as its second messenger. → **True**. Correct: glucagon, TSH and calcitonin act through cAMP.
- **Crossword** **CORE** · depth RECOGNITION · `cel-signal-predict:clue1` · recall → **recognition** · difficulty 1 · `bc-second-messengers.predict`: Water channel inserted by V2 receptor signaling → **AQUAPORIN**
- **Match Up** **CORE** · depth RECOGNITION · `match:receptor-classes` · recall → **recognition** · difficulty 1 · `bc-receptor-other.classify`, `bc-receptor-other.nuclear`, `bc-receptor-other.ion-channels`: Receptor classes. Match each signal to the receptor class it uses.
  - Cortisol ↔ Intracellular receptor that binds DNA
  - Insulin ↔ Receptor tyrosine kinase
  - Acetylcholine at the nicotinic receptor ↔ Ligand-gated ion channel
  - Glucagon ↔ G-protein-coupled receptor (cAMP)
  - Thrombopoietin ↔ Cytokine receptor using JAK–STAT
  - The receptor class predicts the messenger and the speed: membrane receptors act quickly, nuclear receptors more slowly through transcription.

---

## Receptor tyrosine kinases, RAS/MAPK and insulin signaling (`cel-rtk`)

Objectives: `bc-rtk.mechanism`, `bc-rtk.insulin`

**Citations**

1. OpenStax Biology 2e, 9.1 Signaling Molecules and Cellular Receptors — <https://openstax.org/books/biology-2e/pages/9-1-signaling-molecules-and-cellular-receptors> — checked: full-text
2. OpenStax Biology 2e, 9.2 Propagation of the Signal — <https://openstax.org/books/biology-2e/pages/9-2-propagation-of-the-signal> — checked: full-text
3. MedlinePlus Genetics: KRAS gene — <https://medlineplus.gov/genetics/gene/kras/> — checked: full-text
4. MedlinePlus Genetics: BRAF gene — <https://medlineplus.gov/genetics/gene/braf/> — checked: full-text
5. OpenStax Anatomy and Physiology 2e, 17.9 The Endocrine Pancreas — <https://openstax.org/books/anatomy-and-physiology-2e/pages/17-9-the-endocrine-pancreas> — checked: full-text

**Verified facts** [supporting citations]

- Receptor tyrosine kinases are enzyme-linked receptors with a single membrane-spanning segment; ligand binding brings two receptors together (dimerization) and they transfer phosphate groups to tyrosine residues. [1]
- When EGF binds its receptor tyrosine kinase, a cascade causes the cell to grow and divide; inappropriate activation can cause cancer. [2]
- RAS (for example K-Ras) is a GTPase switch: it relays signals when bound to GTP and turns off when it hydrolyzes GTP to GDP. It is part of the RAS/MAPK pathway, which controls proliferation, differentiation, migration and apoptosis. [2, 3]
- BRAF is part of the RAS/MAPK pathway. [4]
- Insulin activates a tyrosine kinase receptor, triggering phosphorylation of many intracellular substrates that move vesicles containing glucose transporters to the cell membrane; skeletal muscle and adipose cells are the main targets. Red cells and cells of the brain, liver and kidneys take up glucose without insulin. [5]

**Mechanism.** Growth factors pair up their receptors, which phosphorylate each other on tyrosines. The phosphorylated receptor activates RAS by loading it with GTP; RAS then starts a kinase cascade (including RAF/BRAF) that reaches the nucleus and drives growth and division. RAS switches itself off by hydrolyzing GTP. Insulin uses the same receptor class but its main metabolic effect is moving glucose transporters to the surface of muscle and fat cells.

**Quick.** RTK: ligand → dimerization → tyrosine autophosphorylation → RAS-GTP → RAF → MAPK cascade → nucleus (growth). RAS off = GTP hydrolysis. Insulin receptor (RTK) → phosphorylation cascade → GLUT4 vesicles to membrane in muscle and fat.

**Detailed**

> Receptor tyrosine kinases (receptors for insulin, EGF and other growth factors) have one transmembrane segment. Ligand binding causes dimerization and phosphorylation of tyrosines, which recruit signaling proteins. One major branch activates RAS, a small GTPase, which turns on the RAF/BRAF–MAPK kinase cascade that controls proliferation.

> Insulin activates its tyrosine kinase receptor in skeletal muscle and adipose tissue, setting off a phosphorylation cascade that moves glucose-transporter vesicles to the membrane, rapidly increasing glucose uptake.

**Misconception.** Insulin does not increase glucose uptake into the brain, liver or red cells: those cells take up glucose without insulin; muscle and fat are its main targets.

**Takeaway.** RTK → dimerize → phosphorylate → RAS-GTP → MAPK → growth. Insulin RTK → GLUT4 to the membrane (muscle, fat).

- **MCQ** **CORE** · depth RECOGNITION · `cel-rtk:mcq1` · recall → **recognition** · difficulty 1 · `bc-rtk.mechanism`
  - A growth factor binds its receptor tyrosine kinase. What is the first change that allows the receptors to signal?
  - ◻️ A. Phospholipase C makes IP₃ and DAG — _That is the Gq pathway, not receptor tyrosine kinase signaling._
  - ◻️ B. The ligand enters the nucleus and binds DNA — _That describes steroid hormone receptors._
  - ✅ C. Two receptors dimerize and phosphorylate tyrosines
  - ◻️ D. The receptor opens an ion channel for Na⁺ — _Ion channel opening describes ionotropic receptors._
  - ◻️ E. A G protein exchanges GDP for GTP at the receptor — _GDP–GTP exchange at the receptor describes G-protein-coupled receptors._
  - Explanation: RTK ligands bring two receptors together; they phosphorylate tyrosines, which recruit downstream signaling proteins.
- **MCQ** **CORE** · depth MECHANISM · `cel-rtk:mcq2` · mechanism → **mechanism** · difficulty 2 · `bc-rtk.mechanism`
  - A tumor carries a RAS mutation that prevents RAS from hydrolyzing GTP. What happens to growth signaling?
  - ✅ A. RAS stays on, so MAPK signaling never stops
  - ◻️ B. cAMP rises because adenylyl cyclase is activated — _RAS does not act through adenylyl cyclase._
  - ◻️ C. The cell enters apoptosis immediately — _Persistent RAS signaling promotes proliferation rather than death._
  - ◻️ D. RAS can no longer bind GTP, so growth signaling stops — _The mutant binds GTP; it cannot hydrolyze it, so it stays active._
  - ◻️ E. The receptor tyrosine kinase is degraded — _The defect is downstream of the receptor._
  - Explanation: RAS is a GTPase switch; losing GTP hydrolysis leaves it on, so the RAS/MAPK pathway signals continuously.
- **MCQ** **CORE** · depth MECHANISM · `cel-rtk:mcq3` · mechanism → **mechanism** · difficulty 2 · `bc-rtk.insulin`
  - After a meal, insulin rises. Which cellular response explains the increased glucose uptake into skeletal muscle?
  - ✅ A. Insulin signaling moves GLUT4 vesicles to the membrane
  - ◻️ B. Insulin activates Gs and raises cAMP in muscle — _cAMP signaling is used by glucagon; insulin uses a tyrosine kinase receptor._
  - ◻️ C. Insulin opens a ligand-gated glucose channel — _Insulin acts through a tyrosine kinase receptor, not a ligand-gated channel._
  - ◻️ D. Insulin binds a nuclear receptor to make new transporters — _The rapid effect is translocation of existing transporter vesicles._
  - ◻️ E. Insulin increases SGLT2 activity in muscle — _SGLT2 is in the proximal tubule, not muscle._
  - Explanation: Insulin activates its tyrosine kinase receptor; the phosphorylation cascade moves glucose transporter (GLUT4) vesicles to the membrane in muscle and fat.
- **MCQ** **CORE** · depth APPLICATION · `cel-rtk:mcq4` · prediction → **application** · difficulty 3 · `bc-rtk.insulin`
  - In a person with insulin resistance, insulin binds normally but the signal after the receptor is weak. Which tissues’ glucose uptake is most reduced?
  - ◻️ A. Intestinal lining cells — _Intestinal cells take up glucose independently of insulin._
  - ◻️ B. Brain and red blood cells — _These take up glucose without insulin._
  - ◻️ C. All tissues equally — _Only insulin-dependent tissues, mainly muscle and fat, lose uptake._
  - ✅ D. Skeletal muscle and adipose tissue
  - ◻️ E. Liver and kidney, which need insulin for uptake — _Liver and kidney cells take up glucose without insulin receptors controlling uptake._
  - Steps: (1) Insulin moves glucose transporters to the membrane in insulin-dependent cells. (2) Skeletal muscle and adipose tissue are the main insulin-dependent tissues. (3) Weak post-receptor signaling → less transporter translocation → reduced uptake in muscle and fat.
  - Explanation: Muscle and fat depend on insulin to bring glucose transporters to the surface; brain, red cells, liver, kidney and gut do not.
- **True/false** **CORE** · depth RECOGNITION · `cel-rtk:tf1` · recall → **recognition** · difficulty 1 · `bc-rtk.mechanism`: RAS is active when bound to GTP and inactive after it hydrolyzes GTP to GDP. → **True**. Correct: RAS is a GTPase switch in the RAS/MAPK pathway.
- **Crossword** **CORE** · depth RECOGNITION · `cel-rtk:clue1` · recall → **recognition** · difficulty 2 · `bc-rtk.mechanism`: Pairing of two receptor tyrosine kinases after ligand binding → **DIMERIZATION**
- **Crossword** **CORE** · depth RECOGNITION · `cel-rtk:clue2` · recall → **recognition** · difficulty 1 · `bc-rtk.mechanism`: Amino acid phosphorylated by insulin and growth factor receptors → **TYROSINE**
- **Mechanism Lab** **CORE** · depth MECHANISM · `seq:rtk-ras` · mechanism → **mechanism** · difficulty 2 · `bc-rtk.mechanism`: Growth factor to nucleus. Order the steps of receptor tyrosine kinase signaling through RAS.
  1. A growth factor binds its receptor
  2. Two receptors dimerize
  3. The receptors phosphorylate tyrosines
  4. RAS binds GTP and becomes active
  5. The RAF–MAPK kinase cascade is activated
  6. The signal reaches the nucleus and promotes growth and division
  - RAS is the switch: mutant RAS that cannot hydrolyze GTP, or BRAF V600E further down, keep this pathway on in cancer.

---

## Gain-of-function signaling in disease (`cel-oncogenic-signaling`)

Objectives: `bc-rtk.oncogenic`

**Citations**

1. MedlinePlus Genetics: KRAS gene — <https://medlineplus.gov/genetics/gene/kras/> — checked: full-text
2. MedlinePlus Genetics: BRAF gene — <https://medlineplus.gov/genetics/gene/braf/> — checked: full-text
3. MedlinePlus Genetics: FGFR3 gene — <https://medlineplus.gov/genetics/gene/fgfr3/> — checked: full-text
4. MedlinePlus Genetics: Achondroplasia — <https://medlineplus.gov/genetics/condition/achondroplasia/> — checked: full-text
5. MedlinePlus Genetics: Chronic myeloid leukemia — <https://medlineplus.gov/genetics/condition/chronic-myeloid-leukemia/> — checked: full-text
6. MedlinePlus Drug Information: Imatinib — <https://medlineplus.gov/druginfo/meds/a606018.html> — checked: full-text
7. OpenStax Biology 2e, 9.2 Propagation of the Signal — <https://openstax.org/books/biology-2e/pages/9-2-propagation-of-the-signal> — checked: full-text

**Verified facts** [supporting citations]

- In certain cancers RAS loses its GTPase activity and can no longer hydrolyze GTP to GDP, so it stays active. [7, 1]
- The BRAF V600E mutation (valine to glutamic acid at position 600) occurs in the RAS/MAPK pathway. [2]
- Achondroplasia, the most common short-limbed dwarfism, is caused by FGFR3 variants that make the receptor overly active, so it signals without a growth factor and disturbs bone growth. [3, 4]
- In chronic myeloid leukemia, the t(9;22) translocation (Philadelphia chromosome) fuses BCR and ABL1; the BCR-ABL1 protein promotes proliferation and blocks apoptosis without needing a signal to turn it on. [5]
- Imatinib is used for chronic myeloid leukemia and gastrointestinal stromal tumors; it works by blocking the action of the abnormal protein in cancer cells. [6]

**Mechanism.** Each disorder has a signaling protein that is “on” without its normal input: RAS that cannot hydrolyze GTP, an FGFR3 receptor that signals without ligand, or the BCR-ABL1 fusion kinase. Constitutive signaling drives growth (cancer) or, for FGFR3 in cartilage, inhibits normal bone growth. Kinase inhibitors such as imatinib switch off the abnormal kinase.

**Quick.** Always-on signaling: RAS (no GTP hydrolysis) → cancers; BRAF V600E (RAS/MAPK); FGFR3 overactive → achondroplasia (short limbs, macrocephaly); BCR-ABL1 t(9;22) → CML → imatinib blocks the abnormal kinase.

**Detailed**

> Oncogenes are gain-of-function versions of genes that promote growth signals. RAS mutations that abolish GTP hydrolysis lock RAS in the active state; BRAF V600E activates the same pathway further downstream.

> Not every activating mutation causes cancer: two FGFR3 variants that make the receptor overactive cause more than 99% of achondroplasia, impairing conversion of cartilage to bone. The BCR-ABL1 fusion of chronic myeloid leukemia is active without signals and is blocked by imatinib.

**Misconception.** Gain-of-function FGFR3 does not cause excess growth: in growth plates, overactive FGFR3 signaling restrains bone growth, producing achondroplasia.

**Takeaway.** Constitutive signaling: RAS, BRAF V600E, FGFR3 (achondroplasia), BCR-ABL1 (CML; imatinib).

- **MCQ** **CORE** · depth RECOGNITION · `cel-oncogenic-signaling:mcq1` · identification → **recognition** · difficulty 2 · `bc-rtk.oncogenic`
  - A newborn has short arms and legs (especially upper arms and thighs), a large head with a prominent forehead and a normal-size trunk. A variant in which gene, with what effect, is most likely?
  - ◻️ A. GNAS, activating Gsα — _Activating GNAS mutations cause McCune–Albright syndrome._
  - ◻️ B. FGFR3, abolishing the receptor — _Achondroplasia variants increase FGFR3 activity rather than abolish it._
  - ✅ C. FGFR3, making it overly active
  - ◻️ D. FBN1, reducing fibrillin-1 — _FBN1 defects cause Marfan syndrome with tall stature._
  - ◻️ E. COL1A1, reducing type I collagen — _COL1A1 defects cause osteogenesis imperfecta with fractures._
  - Explanation: Achondroplasia: overactive FGFR3 (gain of function) impairs conversion of cartilage to bone in the long bones.
- **MCQ** **CORE** · depth APPLICATION · `cel-oncogenic-signaling:mcq2` · multistep → **application** · difficulty 4 · `bc-rtk.oncogenic`
  - A 52-year-old man has a very high white cell count with immature granulocytes. Karyotype shows t(9;22). He starts imatinib. Why is this drug effective?
  - ◻️ A. It restores GTP hydrolysis by mutant RAS — _Imatinib targets the BCR-ABL1 kinase, not RAS._
  - ◻️ B. It inhibits JAK2 V617F — _JAK2 V617F drives myeloproliferative neoplasms such as polycythemia vera._
  - ✅ C. It blocks the always-active BCR-ABL1 kinase
  - ◻️ D. It prevents the translocation from forming — _Drugs cannot undo the translocation; imatinib blocks the fusion protein’s activity._
  - ◻️ E. It inhibits DNA synthesis in all dividing cells — _That is the action of antimetabolites; imatinib targets the abnormal kinase._
  - Steps: (1) High white count with immature granulocytes + t(9;22) → chronic myeloid leukemia. (2) t(9;22) fuses BCR and ABL1 → a kinase active without signals → proliferation, blocked apoptosis. (3) Imatinib blocks the abnormal BCR-ABL1 protein.
  - Explanation: t(9;22) creates the BCR-ABL1 fusion, an always-on kinase that drives CML; imatinib blocks the abnormal protein.
- **True/false** **CORE** · depth RECOGNITION · `cel-oncogenic-signaling:tf1` · recall → **recognition** · difficulty 1 · `bc-rtk.oncogenic`: The Philadelphia chromosome results from a t(9;22) translocation fusing BCR and ABL1. → **True**. Correct: the fusion protein is active without signals and drives chronic myeloid leukemia.
- **Crossword** **CORE** · depth RECOGNITION · `cel-oncogenic-signaling:clue1` · recall → **recognition** · difficulty 1 · `bc-rtk.oncogenic`: Kinase inhibitor that blocks BCR-ABL1 in chronic myeloid leukemia → **IMATINIB**
- **Crossword** **CORE** · depth RECOGNITION · `cel-oncogenic-signaling:clue2` · recall → **recognition** · difficulty 1 · `bc-rtk.oncogenic`: Short-limbed dwarfism from overactive FGFR3 → **ACHONDROPLASIA**

---

## JAK–STAT signaling, JAK2 V617F and cytokine-signaling SCID (`cel-jak-stat`)

Objectives: `bc-jak-stat.mechanism`, `bc-jak-stat.ligands`, `bc-jak-stat.jak2`, `bc-jak-stat.scid`

**Citations**

1. MedlinePlus Genetics: JAK2 gene — <https://medlineplus.gov/genetics/gene/jak2/> — checked: full-text
2. MedlinePlus Genetics: Polycythemia vera — <https://medlineplus.gov/genetics/condition/polycythemia-vera/> — checked: full-text
3. MedlinePlus Genetics: Essential thrombocythemia — <https://medlineplus.gov/genetics/condition/essential-thrombocythemia/> — checked: full-text
4. MedlinePlus Genetics: Primary myelofibrosis — <https://medlineplus.gov/genetics/condition/primary-myelofibrosis/> — checked: full-text
5. MedlinePlus Genetics: JAK3 gene — <https://medlineplus.gov/genetics/gene/jak3/> — checked: full-text
6. MedlinePlus Genetics: X-linked severe combined immunodeficiency — <https://medlineplus.gov/genetics/condition/x-linked-severe-combined-immunodeficiency/> — checked: full-text
7. MedlinePlus Drug Information: Tofacitinib — <https://medlineplus.gov/druginfo/meds/a613025.html> — checked: full-text

**Verified facts** [supporting citations]

- The JAK/STAT pathway transmits chemical signals from outside the cell to the nucleus; JAK2 transmits signals after receptors such as the thrombopoietin receptor (MPL) are activated. [1, 4]
- Nearly everyone with polycythemia vera has a JAK2 mutation; JAK2 mutations make the protein constantly active, increasing blood cell production. Polycythemia vera raises red cells (often also white cells and platelets), causing thick blood, red skin and a risk of deep vein thrombosis and pulmonary embolism. [2]
- The JAK2 V617F mutation (valine to phenylalanine at position 617) produces a constantly active JAK2; it is found in about half of people with essential thrombocythemia. JAK2 or MPL mutations also underlie most primary myelofibrosis, through overactivation of JAK/STAT. [1, 3, 4]
- JAK3 relays signals that regulate the growth and maturation of T cells and NK cells and the maturation of B cells; without functional JAK3, these signals do not reach the nucleus, causing JAK3-deficient SCID. [5]
- X-linked SCID, caused by IL2RG variants, occurs almost exclusively in males and is the most common form of SCID; untreated infants have recurrent infections, thrush, chronic diarrhea and poor growth. [6]
- Tofacitinib is a Janus kinase (JAK) inhibitor used for rheumatoid arthritis, psoriatic arthritis and ulcerative colitis; it decreases immune system activity. [7]

**Mechanism.** Cytokine and hematopoietic growth-factor receptors work with JAK kinases. When the receptor is activated, JAKs relay the signal through STAT proteins to the nucleus. A JAK2 that is always on (V617F) drives blood cell overproduction; a missing JAK3 (or the IL2RG receptor component in X-linked SCID) stops lymphocytes developing. JAK inhibitors damp cytokine signaling in autoimmune disease.

**Quick.** Cytokine receptor → JAK → STAT → nucleus. JAK2 V617F (constantly on) → polycythemia vera (nearly all), essential thrombocythemia (~half), myelofibrosis. JAK3 or IL2RG (X-linked, most common) loss → SCID. Tofacitinib = JAK inhibitor (RA, UC).

**Detailed**

> Many cytokine receptors signal through receptor-associated Janus kinases (JAKs). Activated JAKs pass the signal through STAT proteins to the nucleus, changing transcription. The thrombopoietin receptor (MPL) is one example.

> Gain of function: acquired JAK2 mutations such as V617F keep the pathway on and cause myeloproliferative neoplasms (polycythemia vera, essential thrombocythemia, primary myelofibrosis). Loss of function: JAK3 deficiency and X-linked IL2RG deficiency block lymphocyte development and cause SCID. JAK inhibitors such as tofacitinib are used to reduce immune activity.

**Misconception.** JAK2 V617F is not inherited: it is an acquired (somatic) mutation in blood-forming cells, which is why myeloproliferative neoplasms usually appear in adults.

**Takeaway.** JAK–STAT: JAK2 on → myeloproliferative neoplasms; JAK3/IL2RG off → SCID; JAK inhibitors damp immunity.

- **MCQ** **CORE** · depth APPLICATION · `cel-jak-stat:mcq1` · interpretation → **application** · difficulty 3 · `bc-jak-stat.jak2`
  - A 60-year-old man has a ruddy face, hemoglobin 19.5 g/dL with mildly raised white cells and platelets, and a recent deep vein thrombosis. A JAK2 V617F mutation is found. How does this mutation cause his blood findings?
  - ◻️ A. An inherited JAK3 defect alters lymphocytes — _JAK3 defects cause SCID, not polycythemia._
  - ◻️ B. JAK2 is lost, so erythrocytes cannot undergo apoptosis — _V617F is a gain-of-function mutation, not a loss._
  - ◻️ C. The kidney secretes excess erythropoietin — _This is a primary marrow disorder, not driven by excess erythropoietin._
  - ✅ D. JAK2 is constantly active, so blood cell production rises
  - ◻️ E. BCR-ABL1 drives granulocyte proliferation — _BCR-ABL1 causes chronic myeloid leukemia._
  - Steps: (1) High hemoglobin plus raised white cells and platelets → myeloproliferative process. (2) JAK2 V617F → constitutive JAK/STAT signaling. (3) More blood cells → thick blood → thrombosis (polycythemia vera).
  - Explanation: JAK2 V617F makes JAK2 constantly active, increasing production of red cells (and often white cells and platelets) — polycythemia vera.
- **MCQ** **CORE** · depth RECOGNITION · `cel-jak-stat:mcq2` · identification → **recognition** · difficulty 3 · `bc-jak-stat.scid`
  - A 5-month-old boy has persistent thrush, chronic diarrhea and poor growth. His maternal uncle died of infections in infancy. Lymphocyte studies show very few T cells. Which gene is most likely affected?
  - ◻️ A. ADA — _Adenosine deaminase deficiency is autosomal recessive; the affected maternal uncle suggests X-linked inheritance._
  - ◻️ B. BTK — _BTK defects cause X-linked agammaglobulinemia, with absent B cells but normal T cells._
  - ✅ C. IL2RG
  - ◻️ D. ATM — _ATM defects cause ataxia–telangiectasia._
  - ◻️ E. JAK2 — _JAK2 gain of function causes myeloproliferative neoplasms._
  - Explanation: Severe early infections with absent T cells in a boy with an affected maternal uncle = X-linked SCID (IL2RG), the most common SCID.
- **MCQ** **CORE** · depth RECOGNITION · `cel-jak-stat:mcq3` · recall → **recognition** · difficulty 1 · `bc-jak-stat.ligands`
  - Tofacitinib is used for rheumatoid arthritis. Which signaling step does it block?
  - ◻️ A. Adenylyl cyclase activation by Gs — _Tofacitinib does not act on G-protein signaling._
  - ✅ B. Janus kinase activity after cytokine binding
  - ◻️ C. The calcineurin phosphatase in T cells — _Calcineurin is blocked by cyclosporine and tacrolimus._
  - ◻️ D. Phosphodiesterase 4 in airway inflammatory cells — _PDE4 is targeted by roflumilast._
  - ◻️ E. The BCR-ABL1 tyrosine kinase in leukemia — _BCR-ABL1 is targeted by imatinib._
  - Explanation: Tofacitinib is a JAK inhibitor: it damps cytokine signaling through the JAK–STAT pathway, reducing immune activity.
- **MCQ** **CORE** · depth APPLICATION · `cel-jak-stat:mcq4` · prediction → **application** · difficulty 4 · `bc-jak-stat.ligands`, `bc-jak-stat.mechanism`
  - A child’s lymphocytes cannot respond to several interleukins because the receptors’ associated kinase is missing, although the receptors themselves are present. Which other finding is expected?
  - ✅ A. Severe combined immunodeficiency (few T and NK cells)
  - ◻️ B. Short-limbed dwarfism with a large head — _That is FGFR3 gain of function (achondroplasia)._
  - ◻️ C. Isolated absence of B cells with normal T cells — _That pattern is X-linked agammaglobulinemia (BTK)._
  - ◻️ D. Café-au-lait spots and fibrous dysplasia — _That is McCune–Albright syndrome (Gsα)._
  - ◻️ E. Polycythemia with raised hemoglobin — _That is JAK2 gain of function._
  - Steps: (1) The receptors are present but their associated kinase is missing → JAK deficiency. (2) Interleukin signals in lymphocytes use JAK3. (3) Without JAK3, T and NK cells fail to develop and B cells do not mature → SCID.
  - Explanation: Interleukin receptors signal through JAK3; without it, T and NK cell development fails and B cells do not mature: JAK3-deficient SCID.
- **MCQ** **CORE** · depth MECHANISM · `cel-jak-stat:mcq5` · mechanism → **mechanism** · difficulty 2 · `bc-jak-stat.mechanism`
  - The thrombopoietin receptor (MPL) has no kinase domain of its own. How does its signal reach the nucleus after thrombopoietin binds?
  - ◻️ A. The receptor opens an ion channel and calcium rises — _That describes ligand-gated ion channels._
  - ✅ B. Associated JAKs activate STATs, which alter transcription
  - ◻️ C. Its own tyrosine kinase domain activates RAS — _Intrinsic tyrosine kinase activity defines receptor tyrosine kinases, which MPL is not._
  - ◻️ D. Gs raises cAMP, and PKA enters the nucleus — _MPL is a cytokine receptor, not a G-protein-coupled receptor._
  - ◻️ E. The hormone–receptor complex binds DNA directly — _That describes intracellular (nuclear) receptors for steroid and thyroid hormones._
  - Explanation: Cytokine receptors such as MPL rely on associated Janus kinases (JAK2 for MPL); JAKs activate STAT proteins, which carry the signal to the nucleus.
- **True/false** **CORE** · depth RECOGNITION · `cel-jak-stat:tf1` · recall → **recognition** · difficulty 1 · `bc-jak-stat.jak2`: The JAK2 V617F mutation produces a JAK2 protein that is constantly turned on. → **True**. Correct: it drives myeloproliferative neoplasms such as polycythemia vera.
- **True/false** **CORE** · depth RECOGNITION · `cel-jak-stat:tf2` · recall → **recognition** · difficulty 1 · `bc-jak-stat.scid`: X-linked SCID affects boys and girls equally. → **False**. X-linked SCID occurs almost exclusively in males.
- **True/false** **CORE** · depth RECOGNITION · `cel-jak-stat:tf3` · recall → **recognition** · difficulty 1 · `bc-jak-stat.mechanism`: JAK/STAT signaling carries signals from cell-surface receptors to the nucleus. → **True**. Correct: STATs relay JAK signals to the nucleus to change transcription.
- **Crossword** **CORE** · depth RECOGNITION · `cel-jak-stat:clue1` · recall → **recognition** · difficulty 2 · `bc-jak-stat.ligands`: Janus kinase inhibitor used in rheumatoid arthritis → **TOFACITINIB**
- **Crossword** **CORE** · depth RECOGNITION · `cel-jak-stat:clue2` · recall → **recognition** · difficulty 1 · `bc-jak-stat.jak2`: Vera: myeloproliferative neoplasm with JAK2 mutation in nearly all patients → **POLYCYTHEMIA**

---

## Intracellular receptors and ligand-gated ion channels (`cel-other-receptors`)

Objectives: `bc-receptor-other.nuclear`, `bc-receptor-other.ion-channels`

**Citations**

1. OpenStax Biology 2e, 9.1 Signaling Molecules and Cellular Receptors — <https://openstax.org/books/biology-2e/pages/9-1-signaling-molecules-and-cellular-receptors> — checked: full-text
2. OpenStax Anatomy and Physiology 2e, 17.2 Hormones — <https://openstax.org/books/anatomy-and-physiology-2e/pages/17-2-hormones> — checked: full-text
3. OpenStax Anatomy and Physiology 2e, 12.5 Communication Between Neurons — <https://openstax.org/books/anatomy-and-physiology-2e/pages/12-5-communication-between-neurons> — checked: full-text

**Verified facts** [supporting citations]

- Intracellular receptors respond to hydrophobic ligands that cross the plasma membrane; many are transcription factors that bind DNA in the nucleus and regulate gene expression. [1]
- Steroid hormones bind receptors in the cytosol or nucleus, and the complex binds DNA; thyroid hormones enter cells by a carrier and bind receptors already bound to DNA. Both trigger transcription and new protein synthesis. [2]
- Ion channel-linked receptors bind a ligand and open a channel that lets specific ions cross the membrane. [1]
- Ionotropic receptors are ligand-gated ion channels, such as the nicotinic acetylcholine receptor and the glycine receptor; acetylcholine binding to the nicotinic receptor opens a cation channel and depolarizes the cell. Metabotropic receptors instead act through a G protein and second messengers. [3]

**Mechanism.** Hydrophobic hormones reach receptors inside the cell and change which genes are transcribed. Ligand-gated ion channels are the opposite extreme: binding opens the channel itself, changing membrane potential immediately, without second messengers.

**Quick.** Steroids (cortisol, aldosterone, sex steroids) and thyroid hormone → intracellular receptors → bind DNA → transcription (slower, longer). Ligand-gated channels (nicotinic ACh, glycine) → ions flow at once (fast). Metabotropic = G protein + second messenger.

**Detailed**

> Lipid-soluble hormones cross the membrane and bind intracellular receptors that act as transcription factors. Steroid hormone receptors may be cytosolic or nuclear; thyroid hormone receptors are already bound to DNA. The response requires new protein synthesis.

> Ion channel-linked (ionotropic) receptors open a channel when their ligand binds: acetylcholine at the nicotinic receptor lets cations in and depolarizes the cell. Metabotropic receptors instead act through G proteins and second messengers.

**Misconception.** Thyroid hormone, though derived from an amino acid, acts like a steroid: it is lipid-soluble and acts on nuclear receptors that change transcription.

**Takeaway.** Lipophilic hormones → nuclear receptors → transcription. Ligand-gated channels → immediate ion flow.

- **MCQ** **CORE** · depth MECHANISM · `cel-other-receptors:mcq1` · mechanism → **mechanism** · difficulty 2 · `bc-receptor-other.nuclear`
  - Cortisol diffuses into a cell and binds its receptor. What does the hormone–receptor complex do next?
  - ◻️ A. Activates adenylyl cyclase at the membrane — _Steroids act through intracellular receptors, not G proteins._
  - ✅ B. Binds DNA and changes transcription of target genes
  - ◻️ C. Opens a ligand-gated ion channel — _Ion channel receptors are on the plasma membrane and act on ion flow._
  - ◻️ D. Dimerizes and phosphorylates tyrosines — _That describes receptor tyrosine kinases._
  - ◻️ E. Activates JAK kinases associated with the receptor — _JAK–STAT signaling is used by cytokine receptors._
  - Explanation: Steroid hormone receptors are transcription factors: the complex binds DNA and alters gene expression.
- **MCQ** **CORE** · depth RECOGNITION · `cel-other-receptors:mcq2` · recall → **recognition** · difficulty 1 · `bc-receptor-other.ion-channels`
  - Which receptor is a ligand-gated ion channel?
  - ◻️ A. M2 muscarinic receptor — _Muscarinic receptors are G-protein-coupled (metabotropic)._
  - ◻️ B. Insulin receptor — _The insulin receptor is a receptor tyrosine kinase._
  - ◻️ C. β1-adrenergic receptor — _β1 receptors are G-protein-coupled (Gs)._
  - ✅ D. Nicotinic ACh receptor
  - ◻️ E. Glucocorticoid receptor — _Glucocorticoid receptors are intracellular transcription factors._
  - Explanation: The nicotinic receptor is ionotropic: acetylcholine binding opens a cation channel.
- **True/false** **CORE** · depth RECOGNITION · `cel-other-receptors:tf1` · recall → **recognition** · difficulty 2 · `bc-receptor-other.nuclear`: Thyroid hormones bind receptors that are already bound to DNA. → **True**. Correct: binding triggers transcription of target genes.
- **True/false** **CORE** · depth RECOGNITION · `cel-other-receptors:tf2` · recall → **recognition** · difficulty 1 · `bc-receptor-other.ion-channels`: Muscarinic acetylcholine receptors are ligand-gated ion channels. → **False**. Muscarinic receptors are G-protein-coupled; nicotinic receptors are ligand-gated ion channels.
- **Crossword** **CORE** · depth RECOGNITION · `cel-other-receptors:clue1` · recall → **recognition** · difficulty 1 · `bc-receptor-other.ion-channels`: Acetylcholine receptor that is a ligand-gated cation channel → **NICOTINIC**
- **Crossword** **CORE** · depth RECOGNITION · `cel-other-receptors:clue2` · recall → **recognition** · difficulty 2 · `bc-receptor-other.ion-channels`: Describes a receptor that is itself an ion channel → **IONOTROPIC**

---

## Items judged SUPPLEMENTARY (shown less often in games)

None in this batch.


## Items flagged SPECIALIST (excluded from gameplay pending editorial review)

None in this batch.


## Medical Connections: complete puzzles (16 tiles, verified single solution against the global catalog)

### Pick your G protein · **CORE** · depth RECOGNITION · `cx:g-proteins` · identification → **recognition** · difficulty 3 · `bc-gpcr.receptors`, `bc-rtk.mechanism`, `bc-jak-stat.mechanism`

- **Couple to Gs** (tier 2): Beta-1 receptor, Beta-2 receptor, D1 receptor, V2 receptor — Gs → adenylyl cyclase → cAMP → PKA.
- **Couple to Gq** (tier 3): Alpha-1 receptor, M3 receptor, V1 receptor, H1 receptor — Gq → phospholipase C → IP₃ and DAG.
- **Couple to Gi** (tier 4): Alpha-2 receptor, M2 receptor, D2 receptor, D3 receptor — Gi → less cAMP (βγ can open K⁺ channels).
- **Not G-protein-coupled: kinase-linked receptors** (tier 1): Insulin receptor, EGF receptor, FGFR3, Thrombopoietin receptor — Receptor tyrosine kinases (insulin, EGF, FGFR3) and a JAK-linked cytokine receptor (thrombopoietin).

Strict check (any 4 tiles inside any of 112 catalog categories, the puzzle's groups or its decoys): **1** solution(s).
Manual audit with broad categories (a group is defensible only if a category covers exactly its four tiles; the last four may share any category): **1** defensible solution(s).
Red herrings on the board (cannot complete an alternative board): Adrenergic receptors (4 tiles); G-protein-coupled receptors (any) (12 tiles); Receptors that raise cAMP or calcium (Gs or Gq) (8 tiles); Hormone receptors (4 tiles); Neurotransmitter receptors (10 tiles).

<details><summary>Alternative groupings considered in the manual audit</summary>

- **Adrenergic receptors** — Exactly 4 tiles (one from each of Gq, Gi and two from Gs); the leftover tiles cannot then form three groups of 4 (Gs is left with 2), so no second solution.
- **Dopamine receptors** — 3 tiles.
- **Muscarinic receptors** — Only 2 tiles.
- **Vasopressin receptors** — Only 2 tiles.
- **Histamine receptors** — Only 1 tile.
- **G-protein-coupled receptors (any)** — Superordinate (12 tiles).
- **Receptors that raise cAMP or calcium (Gs or Gq)** — Superordinate (8 tiles).
- **Tyrosine kinase activity (intrinsic or associated)** — Coincides with the intended kinase-linked group.
- **Receptor tyrosine kinases (intrinsic only)** — 3 tiles; the thrombopoietin receptor uses associated JAK2.
- **Receptors in the heart** — 2 tiles (β2 and α1 are also present in vessels; never 4 that leave a valid remainder).
- **Hormone receptors** — Exactly 4 tiles if thrombopoietin is counted as a hormone; the remainder then leaves Gs with 3 and the kinase group with 2, so no second solution.
- **Neurotransmitter receptors** — 10 tiles: superordinate.

</details>

## Connections category bank (builder input, not complete games)

- `grp:gq-receptors` **Couple to Gq**: α1 receptor, M3 receptor, V1 receptor, H1 receptor, AT1 receptor. Gq → phospholipase C → IP₃ and DAG.
- `grp:pde-inhibitors` **Phosphodiesterase inhibitors**: Sildenafil, Milrinone, Roflumilast, Theophylline. PDE5 (sildenafil), PDE3 (milrinone), PDE4 (roflumilast) and nonselective (theophylline).
