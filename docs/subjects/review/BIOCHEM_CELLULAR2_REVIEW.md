# Biochemistry — Cellular Batch 2 (signalling), revision 2: medical review packet

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
| Concepts | 12 |
| Objectives taught | 20 |
| Facts verified / awaiting direct confirmation | 84 / 0 |
| **Playable learning items (total)** | **121** |
| — MCQs / true-false / crossword clues | 46 / 35 / 25 |
| — Mechanism Lab sequences / Match Up sets | 7 / 5 |
| — Complete Connections puzzles / Mystery Patient cases | 1 / 2 |
| Connections category-bank entries (builder input, **not** playable alone; excluded from item counts and coverage) | 2 |
| Items, Step 1 relevance: CORE / SUPPLEMENTARY / SPECIALIST / UNREVIEWED | 106 / 15 / 0 / 0 |
| Items, cognitive depth: RECOGNITION / MECHANISM / APPLICATION | 79 / 28 / 14 |
| Objectives, Step 1 relevance: CORE / SUPPLEMENTARY / SPECIALIST / UNREVIEWED | 19 / 1 / 0 / 0 |
| Playable items: recall | 73 |
| Playable items: identification | 6 |
| Playable items: mechanism | 28 |
| Playable items: interpretation | 3 |
| Playable items: prediction | 9 |
| Playable items: comparison | 2 |
| Playable items: multistep | 0 |

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
11. Ross EM, Berstein G. The M1 muscarinic receptor activates Gq/11 and phospholipase C-β. Life Sci 1993 — PMID 8441322 — <https://pubmed.ncbi.nlm.nih.gov/8441322/> — checked: summary

**Verified facts** [supporting citations]

- G-protein-coupled receptors have seven transmembrane domains. Ligand binding makes the α subunit release GDP and bind GTP; α and βγ then separate and act on effectors; GTP hydrolysis to GDP ends the signal and the subunits reassociate. [1]
- Gs activates adenylyl cyclase, which makes cAMP from ATP; cAMP activates protein kinase A; phosphodiesterase ends the signal by converting cAMP to AMP. [2, 3]
- Phospholipase C cleaves PIP₂ into IP₃ and DAG: IP₃ releases Ca²⁺ from the ER and DAG activates protein kinase C. [2, 3]
- α1 receptors couple to Gq (phospholipase C; vascular and urinary smooth muscle constriction); α2 receptors couple to Gi (less cAMP); β1 and β2 receptors activate the Gs–adenylyl cyclase–cAMP–PKA cascade. [4]
- M2 receptors couple to Gi: in the SA node, released Gβγ opens K⁺ channels and slows the heart. M3 receptors couple to Gq: PLC → IP₃ → Ca²⁺ release, contracting smooth muscle such as the detrusor. [5, 6]
- D1 receptors couple to Gs and activate adenylyl cyclase; D2 receptors couple to Gi and inhibit it. H1 receptors activate phospholipase C; H2 receptors raise cAMP. [7, 8]
- Vasopressin V2 receptors raise cAMP, sending aquaporin-2 to the apical membrane of collecting duct cells; vasopressin (V1), angiotensin II and endothelin receptors couple to Gq and phospholipase C. [9, 10]
- Glucagon, TSH and calcitonin use cAMP as their second messenger; angiotensin II uses Ca²⁺. [3]
- M1 muscarinic receptors, like M3, couple to Gq/11 and activate phospholipase C-β. [11]

**Mechanism.** The receptor is a switch for the G protein: ligand binding swaps GDP for GTP on Gα. Gs then turns adenylyl cyclase on (more cAMP, PKA), Gi turns it down (and its βγ can open K⁺ channels), and Gq turns on phospholipase C (IP₃ releases Ca²⁺, DAG activates PKC). Gα’s own GTPase activity switches the signal off.

**Quick.** Gs → adenylyl cyclase ↑ → cAMP → PKA (β1, β2, D1, H2, V2; glucagon, TSH, calcitonin). Gi → adenylyl cyclase ↓ (α2, M2, D2). Gq → phospholipase C → IP₃ (Ca²⁺) + DAG (PKC) (α1, M1, M3, H1, V1, angiotensin II). GTP hydrolysis ends the signal.

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
  - ◻️ D. The receptor dimerizes and phosphorylates tyrosines — _Dimerization and tyrosine phosphorylation describe growth-factor receptor tyrosine kinases._
  - ◻️ E. Adenylyl cyclase is stimulated and PKA is activated — _That is Gs signaling, used by β1, β2, D1 and V2 receptors._
  - Explanation: Gq → phospholipase C → PIP₂ split into IP₃ (releases ER Ca²⁺) and DAG (activates protein kinase C).
- **MCQ** **CORE** · depth MECHANISM · `cel-gpcr:mcq3` · mechanism → **mechanism** · difficulty 2 · `bc-gpcr.receptors`
  - A patient receives an infusion of a drug that selectively activates α1-adrenergic receptors. Which response and pathway are expected?
  - ✅ A. Vasoconstriction through Gq and phospholipase C
  - ◻️ B. Reduced cAMP through Gi — _That is the α2 receptor, which lowers cAMP through Gi._
  - ◻️ C. Slower heart rate through Gi and K⁺ channels — _That describes M2 receptors in the SA node._
  - ◻️ D. Aquaporin-2 insertion through Gs — _That is the vasopressin V2 receptor in the collecting duct._
  - ◻️ E. Vasodilation through Gs and cAMP — _β2 receptors (Gs) dilate vessels; α1 receptors constrict them._
  - Explanation: α1 receptors couple to Gq: phospholipase C → IP₃ → Ca²⁺ → smooth muscle contraction (vasoconstriction).
- **True/false** **CORE** · depth RECOGNITION · `cel-gpcr:tf1` · recall → **recognition** · difficulty 1 · `bc-gpcr.cycle`: G-protein-coupled receptors have seven transmembrane domains. → **True**. Correct: all G-protein-linked receptors span the membrane seven times.
- **True/false** **CORE** · depth RECOGNITION · `cel-gpcr:tf2` · recall → **recognition** · difficulty 1 · `bc-gpcr.receptors`: β1-adrenergic receptors in the heart couple to Gi and lower cAMP. → **False**. β1 receptors couple to Gs: adenylyl cyclase → cAMP → PKA → increased rate and contractility.
- **True/false** **CORE** · depth RECOGNITION · `cel-gpcr:tf3` · recall → **recognition** · difficulty 2 · `bc-gpcr.receptors`: M2 muscarinic receptors in the SA node couple to Gi and slow the heart. → **True**. Correct: Gβγ opens K⁺ channels, slowing pacemaker firing.
- **True/false** **CORE** · depth RECOGNITION · `cel-gpcr:tf4` · recall → **recognition** · difficulty 1 · `bc-gpcr.receptors`: M1 and M3 muscarinic receptors couple to Gq, whereas M2 couples to Gi. → **True**. Correct: M1 and M3 → Gq → phospholipase C; M2 → Gi (heart).
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
5. Liu J et al. Cholera toxin raises cAMP; PKA phosphorylates CFTR → Cl⁻ efflux and water secretion into the gut lumen. PLoS Pathog 2025 — PMID 40168442 — <https://pubmed.ncbi.nlm.nih.gov/40168442/> — checked: summary
6. Pongkorpsakol P et al. cAMP-activated CFTR chloride secretion in the pathogenesis of cholera. PLoS Negl Trop Dis 2014 — PMID 25188334 — <https://pubmed.ncbi.nlm.nih.gov/25188334/> — checked: summary

**Verified facts** [supporting citations]

- Cholera toxin (Vibrio cholerae) and the related heat-labile enterotoxin of E. coli enter intestinal cells and modify intracellular targets, activating adenylate cyclase and causing life-threatening diarrhoeal disease. [1]
- Cholera toxin covalently ADP-ribosylates the α subunit of Gs. [2]
- Pertussis toxin ADP-ribosylates Gi, uncoupling receptors from adenylyl cyclase inhibition, so receptor-mediated lowering of cAMP is lost. [3]
- Bacterial toxins that interrupt G-protein-linked receptor function cause illnesses such as pertussis and cholera. [4]
- In cholera, raised cAMP activates PKA, which phosphorylates the CFTR chloride channel on intestinal epithelial cells; chloride flows into the lumen and water follows, causing rapid fluid loss. [5, 6]

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
- **MCQ** **CORE** · depth APPLICATION · `cel-gpcr-toxins:mcq2` · interpretation → **application** · difficulty 3 · `bc-gpcr.toxins`
  - Toxin A and toxin B both raise cAMP in cultured cells. Toxin A still raises cAMP when only stimulatory (Gs-coupled) pathways are present. Toxin B raises cAMP only when an inhibitory (Gi-coupled) receptor is being stimulated. Which pairing fits?
  - ◻️ A. A pertussis toxin (acts on Gs); B cholera toxin (acts on Gi) — _Reversed: cholera toxin targets Gs, pertussis toxin targets Gi._
  - ◻️ B. A diphtheria toxin; B cholera toxin — _Diphtheria toxin targets EF-2 and does not raise cAMP._
  - ◻️ C. A pertussis toxin; B heat-labile E. coli toxin — _Heat-labile toxin acts like cholera toxin, on Gs._
  - ✅ D. A cholera toxin (acts on Gs); B pertussis toxin (acts on Gi)
  - ◻️ E. A and B both act on phosphodiesterase — _Neither toxin acts on phosphodiesterase._
  - Steps: (1) Toxin A raises cAMP through the stimulatory pathway alone → it activates Gs (cholera toxin). (2) Toxin B matters only when Gi is active → it disables the inhibitory G protein. (3) Pertussis toxin ADP-ribosylates Gi.
  - Explanation: Cholera toxin keeps Gs on regardless of other inputs. Pertussis toxin only matters when Gi is trying to lower cAMP, because it removes that brake.
- **MCQ** **CORE** · depth MECHANISM · `cel-gpcr-toxins:mcq3` · mechanism → **mechanism** · difficulty 2 · `bc-gpcr.toxins`
  - In cholera, cAMP rises in intestinal epithelial cells. Which channel then secretes the chloride that draws water into the gut lumen?
  - ◻️ A. The Na⁺/K⁺-ATPase pumping chloride out — _The Na⁺/K⁺-ATPase moves sodium and potassium, not chloride._
  - ✅ B. CFTR, opened by PKA phosphorylation
  - ◻️ C. A ligand-gated chloride channel opened by GABA — _GABA-A channels are neuronal; intestinal chloride secretion uses CFTR._
  - ◻️ D. The epithelial sodium channel (ENaC) — _ENaC absorbs sodium; cholera causes chloride secretion through CFTR._
  - ◻️ E. Aquaporin-2, inserted by vasopressin — _Aquaporin-2 reabsorbs water in the renal collecting duct; it is not the intestinal chloride channel._
  - Explanation: Cholera toxin → Gsα stuck on → cAMP → PKA phosphorylates CFTR → Cl⁻ secreted into the lumen, water follows → watery diarrhea.
- **True/false** **CORE** · depth RECOGNITION · `cel-gpcr-toxins:tf1` · recall → **recognition** · difficulty 1 · `bc-gpcr.toxins`: Pertussis toxin ADP-ribosylates the inhibitory G protein Gi. → **True**. Correct: Gi can no longer inhibit adenylyl cyclase, so cAMP rises.
- **True/false** **CORE** · depth RECOGNITION · `cel-gpcr-toxins:tf2` · recall → **recognition** · difficulty 1 · `bc-gpcr.toxins`: In cholera, PKA opens the CFTR chloride channel, and water follows the secreted chloride into the gut. → **True**. Correct: cAMP-activated chloride secretion through CFTR drives the fluid loss.
- **Crossword** **CORE** · depth RECOGNITION · `cel-gpcr-toxins:clue1` · recall → **recognition** · difficulty 1 · `bc-gpcr.toxins`: Toxin that ADP-ribosylates Gi → **PERTUSSIS**
- **Crossword** **CORE** · depth RECOGNITION · `cel-gpcr-toxins:clue2` · recall → **recognition** · difficulty 2 · `bc-gpcr.toxins`: Chloride channel that PKA opens in cholera (abbreviation) → **CFTR**
- **Mechanism Lab** **CORE** · depth MECHANISM · `seq:cholera-secretion` · mechanism → **mechanism** · difficulty 2 · `bc-gpcr.toxins`: How cholera empties the gut. Order the steps from cholera toxin to watery diarrhea.
  1. The toxin’s B part binds the intestinal epithelial cell
  2. The A part enters and ADP-ribosylates Gsα
  3. Adenylyl cyclase stays on and cAMP rises
  4. PKA phosphorylates the CFTR chloride channel
  5. Chloride is secreted into the gut lumen
  6. Water follows, causing massive watery diarrhea
  - Cholera toxin keeps Gsα active, so cAMP and PKA stay high; PKA opens CFTR, chloride is secreted and water follows.
- **Match Up** **CORE** · depth RECOGNITION · `match:signaling-diseases` · recall → **recognition** · difficulty 2 · `bc-gpcr.toxins`, `bc-gpcr.mccune-albright`, `bc-rtk.oncogenic`, `bc-jak-stat.jak2`: Signaling gone wrong. Match each toxin or disorder to its signaling defect.
  - Cholera toxin ↔ ADP-ribosylates Gsα (cAMP stays high)
  - Pertussis toxin ↔ ADP-ribosylates Gi (brake removed)
  - McCune–Albright syndrome ↔ Mosaic activating GNAS mutation
  - Achondroplasia ↔ Overactive FGFR3
  - Polycythemia vera ↔ JAK2 constantly active (V617F)
  - Chronic myeloid leukemia ↔ BCR-ABL1 fusion kinase
  - Classic diseases map onto single signaling switches stuck on (Gs, FGFR3, JAK2, BCR-ABL1) or brakes removed (Gi).
- **Mystery Patient** **CORE** · depth APPLICATION · `case:cholera` · interpretation → **application** · difficulty 3 · `bc-gpcr.toxins`: Rice-water stools
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
  - Massive painless watery diarrhea after contaminated water, without blood or white cells, and a curved gram-negative rod point to cholera. Cholera toxin ADP-ribosylates Gsα, so adenylyl cyclase stays on and cAMP rises; PKA then opens the CFTR chloride channel, chloride is secreted into the lumen and water follows, producing huge volumes of fluid.
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
- **MCQ** **CORE** · depth MECHANISM · `cel-mccune-albright:mcq2` · mechanism → **mechanism** · difficulty 2 · `bc-gpcr.mccune-albright`
  - Why is McCune–Albright syndrome patchy, affecting some bones and only one side of the skin?
  - ◻️ A. The mutation is reversed in half the body — _Mutations are not reversed; they are absent from cells that did not inherit them._
  - ◻️ B. cAMP diffuses only short distances in tissues — _The pattern reflects which cells carry the mutation, not cAMP diffusion._
  - ◻️ C. The mutation is X-linked, so random X-inactivation causes patches — _GNAS is not on the X chromosome; the patchiness reflects somatic mosaicism._
  - ◻️ D. Only some tissues express any G proteins — _G proteins are present in almost all cells._
  - ✅ E. The GNAS mutation arose after conception, so only some cells carry it
  - Explanation: Mosaicism: the mutation occurs early in embryonic development, so only descendants of that cell carry it.
- **True/false** **CORE** · depth RECOGNITION · `cel-mccune-albright:tf1` · recall → **recognition** · difficulty 2 · `bc-gpcr.mccune-albright`: McCune–Albright syndrome is usually inherited in an autosomal dominant pattern. → **False**. It results from a somatic mutation early in development (mosaicism) and is not inherited.
- **Crossword** **CORE** · depth RECOGNITION · `cel-mccune-albright:clue1` · recall → **recognition** · difficulty 2 · `bc-gpcr.mccune-albright`: Gene for Gsα activated in McCune–Albright syndrome → **GNAS**
- **Mystery Patient** **CORE** · depth APPLICATION · `case:mccune-albright` · interpretation → **application** · difficulty 3 · `bc-gpcr.mccune-albright`: Early puberty and a crooked map
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
7. Gupta YK, Malhotra J. Theophylline seizures in rats: mechanism unknown; adenosine and an A1 agonist did not protect. Indian J Physiol Pharmacol 1998 — PMID 10874349 — <https://pubmed.ncbi.nlm.nih.gov/10874349/> — checked: summary

**Verified facts** [supporting citations]

- Adenylyl cyclase makes cAMP from ATP; cAMP activates cAMP-dependent protein kinase (PKA); phosphodiesterase converts cAMP to AMP, which keeps cAMP signals short. [1, 2]
- Phospholipase C cleaves PIP₂ into DAG and IP₃. DAG stays in the membrane and activates protein kinase C; IP₃ opens Ca²⁺ channels in the endoplasmic reticulum. [1, 2]
- Released Ca²⁺ acts directly or binds calmodulin, which then regulates protein kinases. [2]
- PDE3 inhibitors (milrinone) raise cAMP and PKA activity, increasing cardiac contractility and dilating vessels (“inodilators”). [3]
- Roflumilast is a selective PDE4 inhibitor used in severe COPD. [4]
- Theophylline relaxes bronchi by inhibiting phosphodiesterases and also antagonizes adenosine receptors; adenosine A1 antagonism is proposed to contribute to its high-level side effects such as arrhythmias and seizures. [5]
- Seizures are a major theophylline toxicity, but their mechanism is not established: in rats, adenosine and an adenosine A1 agonist did not prevent them, so adenosine antagonism is unlikely to be the whole explanation. [7]

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
- **MCQ** **CORE** · depth MECHANISM · `cel-second-messengers:mcq2` · mechanism → **mechanism** · difficulty 2 · `bc-second-messengers.camp`
  - A man with asthma takes theophylline. After an extra dose taken by mistake, he develops a rapid irregular heartbeat and then a seizure. Besides phosphodiesterase inhibition, which action of theophylline is thought to contribute to this toxicity?
  - ◻️ A. Cholinergic stimulation of the heart — _Theophylline is not a cholinergic agonist._
  - ◻️ B. Excess PDE5 inhibition causing hypotension — _Theophylline toxicity is not explained by PDE5 inhibition; adenosine receptor antagonism is one proposed contributor._
  - ◻️ C. Inhibition of ribonucleotide reductase — _That is the action of hydroxyurea._
  - ◻️ D. Opening of K⁺ channels by Gβγ — _Gβγ-gated K⁺ channels slow the heart; they do not cause seizures._
  - ✅ E. Adenosine receptor antagonism
  - Explanation: Theophylline inhibits phosphodiesterases and blocks adenosine receptors. Its toxicity (arrhythmias, seizures) likely has several mechanisms; adenosine antagonism is one proposed contributor, and the seizure mechanism is not fully established.
- **MCQ** **CORE** · depth MECHANISM · `cel-second-messengers:mcq3` · mechanism → **mechanism** · difficulty 2 · `bc-second-messengers.ip3-dag`
  - Acetylcholine contracts bladder (detrusor) smooth muscle through M3 receptors. Which messenger directly releases Ca²⁺ from intracellular stores in this response?
  - ◻️ A. cGMP — _cGMP is made by guanylyl cyclases and relaxes smooth muscle._
  - ◻️ B. cAMP — _cAMP is the Gs pathway messenger and activates PKA._
  - ✅ C. IP₃
  - ◻️ D. Calmodulin — _Calmodulin binds Ca²⁺ after it is released._
  - ◻️ E. DAG — _DAG stays in the membrane and activates protein kinase C._
  - Explanation: M3 → Gq → phospholipase C → IP₃, which opens ER Ca²⁺ channels; the Ca²⁺ then drives contraction.
- **MCQ** **CORE** · depth APPLICATION · `cel-second-messengers:mcq4` · prediction → **application** · difficulty 3 · `bc-second-messengers.camp`
  - In cardiogenic shock, a β1-adrenergic agonist and milrinone are given together. Why do their effects on contractility add to each other?
  - ◻️ A. Milrinone increases β1 receptor number — _Milrinone acts beyond the receptor, on phosphodiesterase 3._
  - ✅ B. One makes more cAMP; the other slows its breakdown
  - ◻️ C. The β1 agonist inhibits the Na⁺/K⁺-ATPase — _That is the action of digoxin; β1 agonists act through Gs._
  - ◻️ D. Both raise cGMP in cardiac muscle — _Both act through cAMP, not cGMP._
  - ◻️ E. Both block phosphodiesterase 3 at different sites — _The β1 agonist acts on a receptor; only milrinone inhibits PDE3._
  - Steps: (1) The β1 receptor activates Gs and adenylyl cyclase, so cAMP synthesis rises. (2) Milrinone inhibits PDE3, so cAMP is broken down more slowly. (3) More production plus less breakdown → higher cAMP and PKA activity → greater contractility.
  - Explanation: β1 agonist → Gs → adenylyl cyclase → more cAMP; milrinone blocks PDE3 → less cAMP breakdown. Together cAMP and PKA activity rise further, increasing contractility.
- **True/false** **CORE** · depth RECOGNITION · `cel-second-messengers:tf1` · recall → **recognition** · difficulty 1 · `bc-second-messengers.camp`: Phosphodiesterase ends cAMP signals by converting cAMP to AMP. → **True**. Correct: inhibiting phosphodiesterase prolongs cAMP signaling.
- **True/false** **CORE** · depth RECOGNITION · `cel-second-messengers:tf2` · recall → **recognition** · difficulty 1 · `bc-second-messengers.ip3-dag`: DAG diffuses into the cytoplasm and releases Ca²⁺ from the endoplasmic reticulum. → **False**. IP₃ releases ER Ca²⁺; DAG stays in the membrane and activates protein kinase C.
- **Crossword** **CORE** · depth RECOGNITION · `cel-second-messengers:clue1` · recall → **recognition** · difficulty 2 · `bc-second-messengers.ip3-dag`: Calcium-binding protein that relays IP₃-released Ca²⁺ signals → **CALMODULIN**
- **Crossword** **SUPPLEMENTARY** · depth RECOGNITION · `cel-second-messengers:clue2` · recall → **recognition** · difficulty 2 · `bc-second-messengers.camp`: PDE3 inhibitor used as an inodilator → **MILRINONE**
- **Mechanism Lab** **CORE** · depth MECHANISM · `seq:gq-calcium` · mechanism → **mechanism** · difficulty 2 · `bc-second-messengers.ip3-dag`, `bc-gpcr.classes`: The Gq calcium route. Order the steps from an M3 receptor to smooth muscle contraction.
  1. Acetylcholine binds the M3 receptor
  2. Gq is activated
  3. Phospholipase C cleaves PIP₂
  4. IP₃ opens Ca²⁺ channels in the endoplasmic reticulum
  5. Cytosolic Ca²⁺ rises
  6. Smooth muscle contracts
  - Gq receptors (α1, M3, V1, angiotensin II) → phospholipase C → IP₃ (Ca²⁺) and DAG (PKC).
- **Match Up** **SUPPLEMENTARY** · depth RECOGNITION · `match:second-messenger-drugs` · recall → **recognition** · difficulty 2 · `bc-second-messengers.camp`, `bc-second-messengers.cgmp`: Messengers and the drugs that tune them. Match each drug or signal to its target.
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

- **MCQ** **CORE** · depth MECHANISM · `cel-signal-predict:mcq1` · mechanism → **mechanism** · difficulty 2 · `bc-second-messengers.predict`
  - A patient with diabetes insipidus is given desmopressin, which selectively stimulates V2 receptors. Which cellular change in the collecting duct explains the reduced urine output?
  - ◻️ A. IP₃ rises and smooth muscle contracts — _That is the V1 (Gq) response in vascular smooth muscle._
  - ◻️ B. A nuclear receptor increases transcription of sodium channels — _Vasopressin acts through a G-protein-coupled receptor, not a nuclear receptor._
  - ◻️ C. JAK–STAT signaling increases aquaporin synthesis — _V2 is a G-protein-coupled receptor that raises cAMP._
  - ✅ D. cAMP rises and aquaporin-2 is inserted into the apical membrane
  - ◻️ E. cGMP rises and the duct cells relax — _cGMP is not the V2 messenger._
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
6. Ishikura S et al. Insulin → IR–IRS–PI3K → Akt → GLUT4 translocation in muscle and fat. Acta Physiol (Oxf) 2008 — PMID 18171430 — <https://pubmed.ncbi.nlm.nih.gov/18171430/> — checked: summary
7. Aoi W et al. Insulin-stimulated GLUT4 membrane translocation in muscle depends on PI3K/Akt. Free Radic Biol Med 2013 — PMID 24075894 — <https://pubmed.ncbi.nlm.nih.gov/24075894/> — checked: summary
8. Jacobs S, Cuatrecasas P. The insulin receptor is a disulphide-linked (αβ)₂ heterotetramer. Ciba Found Symp 1982 — PMID 6923809 — <https://pubmed.ncbi.nlm.nih.gov/6923809/> — checked: summary
9. Ferrara N et al. VEGF acts through two receptor tyrosine kinases, VEGFR-1 and VEGFR-2, regulating angiogenesis. Nat Med 2003 — PMID 12778165 — <https://pubmed.ncbi.nlm.nih.gov/12778165/> — checked: summary
10. Pérez-Gutiérrez L, Ferrara N. VEGFA and its tyrosine kinase receptors VEGFR1 and VEGFR2 mediate angiogenesis and are major therapeutic targets. Nat Rev Mol Cell Biol 2023 — PMID 37491579 — <https://pubmed.ncbi.nlm.nih.gov/37491579/> — checked: summary

**Verified facts** [supporting citations]

- Receptor tyrosine kinases are enzyme-linked receptors with a single membrane-spanning segment. For growth-factor receptors, ligand binding brings two receptors together (dimerization) and they transfer phosphate groups to tyrosine residues. [1]
- When EGF binds its receptor tyrosine kinase, a cascade causes the cell to grow and divide; inappropriate activation can cause cancer. [2]
- RAS (for example K-Ras) is a GTPase switch: it relays signals when bound to GTP and turns off when it hydrolyzes GTP to GDP. It is part of the RAS/MAPK pathway, which controls proliferation, differentiation, migration and apoptosis. [2, 3]
- BRAF is part of the RAS/MAPK pathway. [4]
- Insulin activates a tyrosine kinase receptor, triggering phosphorylation of many intracellular substrates that move vesicles containing glucose transporters to the cell membrane; skeletal muscle and adipose cells are the main targets. Red cells and cells of the brain, liver and kidneys take up glucose without insulin. [5]
- Insulin signals to GLUT4 mainly through the insulin receptor–IRS–PI3K axis: PI3K activates the kinase Akt, which promotes translocation of GLUT4 vesicles to the plasma membrane of muscle and fat cells. [6, 7]
- The insulin receptor is already a disulfide-linked (αβ)₂ heterotetramer before insulin binds; insulin binding activates its intrinsic tyrosine kinase rather than bringing two separate receptors together. [8, 5]
- VEGF (VEGF-A) acts through two receptor tyrosine kinases, VEGFR-1 and VEGFR-2, and is a key regulator of physiological and pathological angiogenesis (tumors, intraocular neovascular disease); the VEGF pathway is a major therapeutic target. [9, 10]

**Mechanism.** Growth factors such as EGF pair up their receptors, which phosphorylate each other on tyrosines. (The insulin receptor is different: it is already a disulfide-linked α₂β₂ complex, and insulin binding switches on its intrinsic kinase.) The phosphorylated receptor activates RAS by loading it with GTP; RAS then starts a kinase cascade (including RAF/BRAF) that reaches the nucleus and drives growth and division. RAS switches itself off by hydrolyzing GTP. Insulin uses the same receptor class but its main metabolic effect is moving glucose transporters to the surface of muscle and fat cells.

**Quick.** Growth-factor RTK (EGFR, VEGFR): ligand → dimerization → tyrosine autophosphorylation → RAS → MAPK → growth. Insulin receptor: preformed α₂β₂; insulin activates its kinase → IRS → PI3K → Akt → GLUT4 to the membrane (muscle, fat).

**Detailed**

> Receptor tyrosine kinases (receptors for insulin, EGF, VEGF and other growth factors) have intrinsic tyrosine kinase activity. For growth-factor receptors, ligand binding causes dimerization and phosphorylation of tyrosines, which recruit signaling proteins; the insulin receptor is already a disulfide-linked α₂β₂ dimer, and insulin binding activates its kinase. One major branch activates RAS, a small GTPase, which turns on the RAF/BRAF–MAPK kinase cascade that controls proliferation.

> Insulin activates its tyrosine kinase receptor in skeletal muscle and adipose tissue, setting off a phosphorylation cascade that moves glucose-transporter vesicles to the membrane, rapidly increasing glucose uptake.

**Misconception.** Insulin does not increase glucose uptake into the brain, liver or red cells: those cells take up glucose without insulin; muscle and fat are its main targets.

**Takeaway.** Growth-factor RTK → dimerize → phosphorylate → RAS → MAPK → growth. Insulin receptor (already α₂β₂) → kinase on → GLUT4 to the membrane.

- **MCQ** **CORE** · depth RECOGNITION · `cel-rtk:mcq1` · recall → **recognition** · difficulty 1 · `bc-rtk.mechanism`
  - Epidermal growth factor (EGF) binds its receptor tyrosine kinase. What is the first change that allows the receptors to signal?
  - ◻️ A. Phospholipase C makes IP₃ and DAG — _That is the Gq pathway, not receptor tyrosine kinase signaling._
  - ◻️ B. The ligand enters the nucleus and binds DNA — _That describes steroid hormone receptors._
  - ✅ C. Two receptors dimerize and phosphorylate tyrosines
  - ◻️ D. The receptor opens an ion channel for Na⁺ — _Ion channel opening describes ionotropic receptors._
  - ◻️ E. A G protein exchanges GDP for GTP at the receptor — _GDP–GTP exchange at the receptor describes G-protein-coupled receptors._
  - Explanation: Growth-factor RTKs such as the EGF receptor pair up when the ligand binds and phosphorylate each other’s tyrosines, which recruit downstream signaling proteins. (The insulin receptor is already a disulfide-linked α₂β₂ dimer.)
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
- **MCQ** **CORE** · depth APPLICATION · `cel-rtk:mcq5` · prediction → **application** · difficulty 3 · `bc-rtk.insulin`
  - A research drug blocks phosphatidylinositol 3-kinase (PI3K). How does it change the effect of insulin on skeletal muscle?
  - ◻️ A. Muscle switches to a Gs–cAMP route to take up glucose — _Insulin does not act through Gs; no alternative route restores uptake._
  - ◻️ B. SGLT2 replaces GLUT4 in muscle — _SGLT2 is a renal tubular transporter, not a muscle glucose transporter._
  - ◻️ C. GLUT4 moves to the membrane even without insulin — _Blocking PI3K removes the signal that moves GLUT4; it does not mimic insulin._
  - ✅ D. GLUT4 stays inside the cell, so glucose uptake falls
  - ◻️ E. Insulin can no longer bind its receptor — _Binding happens upstream of PI3K and is unaffected._
  - Steps: (1) Insulin binds its receptor (already an α₂β₂ dimer) and activates its tyrosine kinase, which phosphorylates IRS. (2) IRS activates PI3K, and PI3K activates Akt. (3) Akt drives GLUT4 translocation; blocking PI3K stops it, so muscle glucose uptake falls.
  - Explanation: Insulin receptor → IRS → PI3K → Akt → GLUT4 vesicles fuse with the membrane. Without PI3K, insulin-stimulated glucose uptake into muscle fails.
- **True/false** **CORE** · depth RECOGNITION · `cel-rtk:tf1` · recall → **recognition** · difficulty 1 · `bc-rtk.mechanism`: RAS is active when bound to GTP and inactive after it hydrolyzes GTP to GDP. → **True**. Correct: RAS is a GTPase switch in the RAS/MAPK pathway.
- **True/false** **CORE** · depth RECOGNITION · `cel-rtk:tf2` · recall → **recognition** · difficulty 1 · `bc-rtk.insulin`: Insulin moves GLUT4 to the muscle cell membrane through IRS–PI3K–Akt signaling. → **True**. Correct: this receptor tyrosine kinase cascade drives GLUT4 translocation in muscle and fat.
- **True/false** **CORE** · depth RECOGNITION · `cel-rtk:tf3` · recall → **recognition** · difficulty 2 · `bc-rtk.mechanism`, `bc-rtk.insulin`: Like the EGF receptor, the insulin receptor must pair up with a second receptor after insulin binds. → **False**. The insulin receptor is already a disulfide-linked α₂β₂ complex; insulin binding activates its intrinsic tyrosine kinase.
- **True/false** **CORE** · depth RECOGNITION · `cel-rtk:tf4` · recall → **recognition** · difficulty 1 · `bc-rtk.mechanism`: VEGF stimulates angiogenesis through receptor tyrosine kinases (VEGFR-1 and VEGFR-2). → **True**. Correct: VEGF receptors are RTKs, and the VEGF pathway drives physiological and tumor angiogenesis.
- **Crossword** **CORE** · depth RECOGNITION · `cel-rtk:clue1` · recall → **recognition** · difficulty 2 · `bc-rtk.mechanism`: Pairing of two growth-factor receptor tyrosine kinases (e.g. EGFR) after ligand binding → **DIMERIZATION**
- **Crossword** **CORE** · depth RECOGNITION · `cel-rtk:clue2` · recall → **recognition** · difficulty 1 · `bc-rtk.mechanism`: Amino acid phosphorylated by insulin and growth factor receptors → **TYROSINE**
- **Crossword** **CORE** · depth RECOGNITION · `cel-rtk:clue3` · recall → **recognition** · difficulty 2 · `bc-rtk.insulin`: Kinase activated by PI3K that sends GLUT4 to the membrane → **AKT**
- **Mechanism Lab** **CORE** · depth MECHANISM · `seq:rtk-ras` · mechanism → **mechanism** · difficulty 2 · `bc-rtk.mechanism`: Growth factor to nucleus. Order the steps of growth-factor receptor tyrosine kinase signaling (for example the EGF receptor) through RAS.
  1. A growth factor binds its receptor
  2. Two receptors dimerize
  3. The receptors phosphorylate tyrosines
  4. RAS binds GTP and becomes active
  5. The RAF–MAPK kinase cascade is activated
  6. The signal reaches the nucleus and promotes growth and division
  - RAS is the switch: mutant RAS that cannot hydrolyze GTP, or BRAF V600E further down, keep this pathway on in cancer.
- **Mechanism Lab** **CORE** · depth MECHANISM · `seq:insulin-glut4` · mechanism → **mechanism** · difficulty 2 · `bc-rtk.insulin`: Insulin opens the glucose door. Order the steps from insulin binding to glucose uptake in muscle.
  1. Insulin binds its preformed α₂β₂ receptor
  2. The receptor’s intrinsic tyrosine kinase phosphorylates its own tyrosines
  3. Insulin receptor substrate (IRS) is phosphorylated
  4. IRS activates PI3K
  5. PI3K signaling activates Akt
  6. GLUT4 vesicles fuse with the plasma membrane
  7. Glucose enters the muscle cell
  - Insulin receptor → IRS → PI3K → Akt → GLUT4 translocation, the main route for insulin-stimulated glucose uptake in muscle and fat.

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
8. Arighi E et al. RET receptor tyrosine kinase: MEN2 mutations potentiate its intrinsic kinase activity. Cytokine Growth Factor Rev 2005 — PMID 15982921 — <https://pubmed.ncbi.nlm.nih.gov/15982921/> — checked: summary
9. Frank-Raue K, Raue F. MEN2: autosomal dominant gain-of-function RET variants; MEN2A and MEN2B phenotypes. Recent Results Cancer Res 2025 — PMID 40102258 — <https://pubmed.ncbi.nlm.nih.gov/40102258/> — checked: summary
10. MedlinePlus Genetics: RET gene — <https://medlineplus.gov/genetics/gene/ret/> — checked: full-text
11. MedlinePlus Genetics: Multiple endocrine neoplasia — <https://medlineplus.gov/genetics/condition/multiple-endocrine-neoplasia/> — checked: full-text
12. Yoon J, Oh DY. HER2 (ErbB2) is a receptor tyrosine kinase targeted in breast and gastric cancer with HER2 overexpression or ERBB2 amplification. Nat Rev Clin Oncol 2024 — PMID 39039196 — <https://pubmed.ncbi.nlm.nih.gov/39039196/> — checked: summary
13. Oh DY, Bang YJ. HER2-targeted therapies (trastuzumab and others) in HER2-positive breast and gastric cancer. Nat Rev Clin Oncol 2020 — PMID 31548601 — <https://pubmed.ncbi.nlm.nih.gov/31548601/> — checked: summary

**Verified facts** [supporting citations]

- In certain cancers RAS loses its GTPase activity and can no longer hydrolyze GTP to GDP, so it stays active. [7, 1]
- The BRAF V600E mutation (valine to glutamic acid at position 600) occurs in the RAS/MAPK pathway. [2]
- Achondroplasia, the most common short-limbed dwarfism, is caused by FGFR3 variants that make the receptor overly active, so it signals without a growth factor and disturbs bone growth. [3, 4]
- In chronic myeloid leukemia, the t(9;22) translocation (Philadelphia chromosome) fuses BCR and ABL1; the BCR-ABL1 protein promotes proliferation and blocks apoptosis without needing a signal to turn it on. [5]
- Imatinib is used for chronic myeloid leukemia and gastrointestinal stromal tumors; it works by blocking the action of the abnormal protein in cancer cells. [6]
- RET is a receptor tyrosine kinase. Germline gain-of-function point mutations increase its kinase activity and cause multiple endocrine neoplasia type 2 (MEN2A, MEN2B) and familial medullary thyroid carcinoma. [8, 9]
- MEN2 is autosomal dominant. All forms carry a high risk of medullary thyroid carcinoma; MEN2A adds pheochromocytoma and primary hyperparathyroidism, and MEN2B adds pheochromocytoma, a marfanoid habitus and intestinal ganglioneuromas. [9, 11]
- Loss-of-function RET mutations are the most common genetic cause of Hirschsprung disease: without RET signaling, enteric nerves do not develop properly. [10]
- HER2 (ERBB2) is a receptor tyrosine kinase. HER2 overexpression or ERBB2 amplification marks a subset of breast and gastric cancers, which are treated with HER2-targeted drugs such as trastuzumab. [12, 13]

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
- **MCQ** **CORE** · depth MECHANISM · `cel-oncogenic-signaling:mcq2` · mechanism → **mechanism** · difficulty 2 · `bc-rtk.oncogenic`
  - A 52-year-old man has a very high white cell count with immature granulocytes. Karyotype shows t(9;22). He starts imatinib. Why is this drug effective?
  - ◻️ A. It restores GTP hydrolysis by mutant RAS — _Imatinib targets the BCR-ABL1 kinase, not RAS._
  - ◻️ B. It inhibits JAK2 V617F — _JAK2 V617F drives myeloproliferative neoplasms such as polycythemia vera._
  - ✅ C. It blocks the always-active BCR-ABL1 kinase
  - ◻️ D. It prevents the translocation from forming — _Drugs cannot undo the translocation; imatinib blocks the fusion protein’s activity._
  - ◻️ E. It inhibits DNA synthesis in all dividing cells — _That is the action of antimetabolites; imatinib targets the abnormal kinase._
  - Explanation: t(9;22) creates the BCR-ABL1 fusion, an always-on kinase that drives CML; imatinib blocks the abnormal protein.
- **MCQ** **CORE** · depth RECOGNITION · `cel-oncogenic-signaling:mcq3` · identification → **recognition** · difficulty 2 · `bc-rtk.oncogenic`
  - A 32-year-old woman has medullary thyroid carcinoma, an adrenal pheochromocytoma and hypercalcemia from parathyroid hyperplasia. Her father had medullary thyroid carcinoma. Which genetic change is most likely?
  - ◻️ A. An inactivating MEN1 mutation — _MEN1 causes parathyroid, pituitary and pancreatic tumors, not medullary thyroid carcinoma._
  - ◻️ B. An activating FGFR3 mutation — _Activating FGFR3 variants cause achondroplasia._
  - ◻️ C. A postzygotic activating GNAS mutation — _That causes McCune–Albright syndrome (fibrous dysplasia, café-au-lait spots, endocrine hyperfunction)._
  - ◻️ D. A loss-of-function RET mutation — _Loss of RET function causes Hirschsprung disease, not endocrine tumors._
  - ✅ E. A gain-of-function RET mutation
  - Explanation: Medullary thyroid carcinoma + pheochromocytoma + hyperparathyroidism, autosomal dominant = MEN2A, caused by an activating RET (receptor tyrosine kinase) mutation.
- **MCQ** **CORE** · depth APPLICATION · `cel-oncogenic-signaling:mcq4` · comparison → **application** · difficulty 3 · `bc-rtk.oncogenic`
  - RET mutations cause multiple endocrine neoplasia type 2 in one family and Hirschsprung disease in another. Which statement best explains how one gene causes such different diseases?
  - ◻️ A. MEN2 variants abolish RET; Hirschsprung variants overactivate it — _This reverses the two: MEN2 is gain of function, Hirschsprung disease loss of function._
  - ✅ B. MEN2 variants overactivate RET; Hirschsprung variants abolish it
  - ◻️ C. RET encodes a G protein whose GTPase activity differs — _RET is a receptor tyrosine kinase, not a G protein._
  - ◻️ D. Both are caused by the same variant with variable penetrance — _Different variants with opposite effects on RET signaling cause the two diseases._
  - ◻️ E. Both diseases come from RET amplification — _MEN2 is caused by activating point mutations, and Hirschsprung disease by loss of RET function, not amplification._
  - Steps: (1) RET is a receptor tyrosine kinase needed for enteric nerve development. (2) Activating variants keep RET signaling on → tumors of RET-expressing endocrine tissues (MEN2). (3) Inactivating variants remove RET signaling → enteric nerves fail to develop (Hirschsprung disease).
  - Explanation: Gain of RET function drives endocrine tumors (MEN2); loss of RET function stops enteric nerve development (Hirschsprung disease).
- **MCQ** **CORE** · depth RECOGNITION · `cel-oncogenic-signaling:mcq5` · recall → **recognition** · difficulty 2 · `bc-rtk.oncogenic`
  - A breast cancer shows ERBB2 gene amplification on in situ hybridization. Trastuzumab is added to her treatment. What does this drug target?
  - ◻️ A. Janus kinase 2 downstream of cytokines — _JAK2 is mutated in myeloproliferative neoplasms, not amplified in breast cancer._
  - ◻️ B. The estrogen receptor in the nucleus — _Estrogen receptors are intracellular receptors, not the product of ERBB2._
  - ◻️ C. Mutant KRAS stuck in the GTP-bound state — _KRAS is a G protein downstream of receptors; ERBB2 encodes HER2._
  - ◻️ D. The BCR-ABL1 fusion kinase — _BCR-ABL1 is targeted by imatinib in chronic myeloid leukemia._
  - ✅ E. The HER2 receptor tyrosine kinase
  - Explanation: ERBB2 encodes HER2, a receptor tyrosine kinase. Overexpression or amplification marks HER2-positive breast and gastric cancers, which are treated with HER2-targeted drugs such as trastuzumab.
- **True/false** **CORE** · depth RECOGNITION · `cel-oncogenic-signaling:tf1` · recall → **recognition** · difficulty 1 · `bc-rtk.oncogenic`: The Philadelphia chromosome results from a t(9;22) translocation fusing BCR and ABL1. → **True**. Correct: the fusion protein is active without signals and drives chronic myeloid leukemia.
- **True/false** **CORE** · depth RECOGNITION · `cel-oncogenic-signaling:tf2` · recall → **recognition** · difficulty 1 · `bc-rtk.oncogenic`: Multiple endocrine neoplasia type 2 is caused by loss-of-function RET mutations. → **False**. MEN2 is caused by gain-of-function RET mutations; loss of RET function causes Hirschsprung disease.
- **Crossword** **CORE** · depth RECOGNITION · `cel-oncogenic-signaling:clue1` · recall → **recognition** · difficulty 1 · `bc-rtk.oncogenic`: Kinase inhibitor that blocks BCR-ABL1 in chronic myeloid leukemia → **IMATINIB**
- **Crossword** **CORE** · depth RECOGNITION · `cel-oncogenic-signaling:clue2` · recall → **recognition** · difficulty 1 · `bc-rtk.oncogenic`: Short-limbed dwarfism from overactive FGFR3 → **ACHONDROPLASIA**
- **Crossword** **CORE** · depth RECOGNITION · `cel-oncogenic-signaling:clue3` · recall → **recognition** · difficulty 1 · `bc-rtk.oncogenic`: Receptor tyrosine kinase proto-oncogene activated in MEN2 → **RET**

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
8. Piwien-Pilipuk G et al. Growth hormone receptor → JAK2 → STATs, MAPK and PI3K. J Pediatr Endocrinol Metab 2002 — PMID 12099386 — <https://pubmed.ncbi.nlm.nih.gov/12099386/> — checked: summary
9. Waters MJ, Brooks AJ. GH acts mainly through JAK2 activation of STAT5, which induces IGF-1. Endocr Dev 2012 — PMID 23182823 — <https://pubmed.ncbi.nlm.nih.gov/23182823/> — checked: summary
10. Chasseloup F et al. The prolactin receptor signals mainly through JAK2/STAT5. Rev Endocr Metab Disord 2024 — PMID 39476210 — <https://pubmed.ncbi.nlm.nih.gov/39476210/> — checked: summary
11. Tóthová Z et al. EPOR–JAK2–STAT5 is the canonical erythropoietin pathway for erythroid progenitors. Int J Mol Sci 2021 — PMID 34281163 — <https://pubmed.ncbi.nlm.nih.gov/34281163/> — checked: summary
12. Valentino L, Pierre J. JAKs phosphorylate STATs, which dimerize, enter the nucleus and regulate transcription. Biochem Pharmacol 2006 — PMID 16426581 — <https://pubmed.ncbi.nlm.nih.gov/16426581/> — checked: summary
13. MedlinePlus Genetics: IL2RG gene — <https://medlineplus.gov/genetics/gene/il2rg/> — checked: full-text
14. Notarangelo LD et al. γc or JAK3 defects cause T⁻B⁺NK⁻ SCID: T and NK development fail, B cells are generated. Immunol Rev 2000 — PMID 11213805 — <https://pubmed.ncbi.nlm.nih.gov/11213805/> — checked: summary
15. Roberts JL et al. JAK3 deficiency: T⁻B⁺NK⁻ phenotype with abnormal B-cell IL-2-induced STAT5 signaling. Blood 2004 — PMID 14615376 — <https://pubmed.ncbi.nlm.nih.gov/14615376/> — checked: summary
16. GeneReviews: Adenosine deaminase deficiency (low T, B and NK cells; absent humoral and cellular immunity). NCBI Bookshelf — PMID 20301656 — <https://pubmed.ncbi.nlm.nih.gov/20301656/> — checked: summary
17. Pestka S. Interferon-γ receptor: JAK1 and JAK2 activate STAT1. Semin Oncol 1997 — PMID 9208871 — <https://pubmed.ncbi.nlm.nih.gov/9208871/> — checked: summary
18. Johnson HM et al. IFN-γ: JAK1/JAK2 → STAT1; type I IFN: JAK1/TYK2 → STAT1 and STAT2. Mediators Inflamm 2019 — PMID 31275057 — <https://pubmed.ncbi.nlm.nih.gov/31275057/> — checked: summary

**Verified facts** [supporting citations]

- The JAK/STAT pathway transmits chemical signals from outside the cell to the nucleus; JAK2 transmits signals after receptors such as the thrombopoietin receptor (MPL) are activated. [1, 4]
- Nearly everyone with polycythemia vera has a JAK2 mutation; JAK2 mutations make the protein constantly active, increasing blood cell production. Polycythemia vera raises red cells (often also white cells and platelets), causing thick blood, red skin and a risk of deep vein thrombosis and pulmonary embolism. [2]
- The JAK2 V617F mutation (valine to phenylalanine at position 617) produces a constantly active JAK2; it is found in about half of people with essential thrombocythemia. JAK2 or MPL mutations also underlie most primary myelofibrosis, through overactivation of JAK/STAT. [1, 3, 4]
- JAK3 relays signals that regulate the growth and maturation of T cells and NK cells and the maturation of B cells; without functional JAK3, these signals do not reach the nucleus, causing JAK3-deficient SCID. [5]
- X-linked SCID, caused by IL2RG variants, occurs almost exclusively in males and is the most common form of SCID; untreated infants have recurrent infections, thrush, chronic diarrhea and poor growth. [6]
- Tofacitinib is a Janus kinase (JAK) inhibitor used for rheumatoid arthritis, psoriatic arthritis and ulcerative colitis; it decreases immune system activity. [7]
- JAK kinases phosphorylate STAT proteins on tyrosine; phosphorylated STATs dimerize, move into the nucleus and regulate transcription of target genes. [12]
- Growth hormone binding to its receptor activates the associated tyrosine kinase JAK2; JAK2 activation of STAT5 is the most important GH pathway, and STAT5 induces IGF-1. [8, 9]
- Prolactin and erythropoietin receptors also signal mainly through JAK2 and STAT5; the EPO receptor–JAK2–STAT5 pathway regulates the differentiation, proliferation and survival of erythroid progenitors. [10, 11]
- IL2RG encodes the common gamma chain, a component of several immune-cell receptors; without it, signals are not relayed to the nucleus and lymphocytes cannot develop normally. [13]
- Defects of the common γ chain or JAK3 cause T⁻B⁺NK⁻ SCID: T and NK cell development fails, B cells are generated (with abnormal function); adenosine deaminase deficiency, by contrast, classically lowers T, B and NK cells. [14, 15, 16]
- Interferons signal through JAK–STAT: the interferon-γ receptor uses JAK1 and JAK2 to activate STAT1, and type I interferon (α, β) receptors use JAK1 and TYK2 to activate STAT1 and STAT2. [17, 18]

**Mechanism.** Cytokine and hematopoietic growth-factor receptors work with JAK kinases. When the receptor is activated, JAKs relay the signal through STAT proteins to the nucleus. A JAK2 that is always on (V617F) drives blood cell overproduction; a missing JAK3 (or the IL2RG receptor component in X-linked SCID) stops lymphocytes developing. JAK inhibitors damp cytokine signaling in autoimmune disease.

**Quick.** Cytokine receptor → JAK → STAT → nucleus. JAK2 V617F (constantly on) → polycythemia vera (nearly all), essential thrombocythemia (~half), myelofibrosis. JAK3 or IL2RG (X-linked, most common) loss → SCID. Tofacitinib = JAK inhibitor (RA, UC).

**Detailed**

> Many cytokine receptors signal through receptor-associated Janus kinases (JAKs). Activated JAKs pass the signal through STAT proteins to the nucleus, changing transcription. The thrombopoietin receptor (MPL) is one example.

> Gain of function: acquired JAK2 mutations such as V617F keep the pathway on and cause myeloproliferative neoplasms (polycythemia vera, essential thrombocythemia, primary myelofibrosis). Loss of function: JAK3 deficiency and X-linked IL2RG deficiency block lymphocyte development and cause SCID. JAK inhibitors such as tofacitinib are used to reduce immune activity.

**Misconception.** JAK2 V617F is not inherited: it is an acquired (somatic) mutation in blood-forming cells, which is why myeloproliferative neoplasms usually appear in adults.

**Takeaway.** JAK–STAT: JAK2 on → myeloproliferative neoplasms; JAK3/IL2RG off → SCID; JAK inhibitors damp immunity.

- **MCQ** **CORE** · depth MECHANISM · `cel-jak-stat:mcq1` · mechanism → **mechanism** · difficulty 2 · `bc-jak-stat.jak2`
  - A 60-year-old man has a ruddy face, hemoglobin 19.5 g/dL with mildly raised white cells and platelets, and a recent deep vein thrombosis. A JAK2 V617F mutation is found. How does this mutation cause his blood findings?
  - ◻️ A. An inherited JAK3 defect alters lymphocytes — _JAK3 defects cause SCID, not polycythemia._
  - ◻️ B. JAK2 is lost, so erythrocytes cannot undergo apoptosis — _V617F is a gain-of-function mutation, not a loss._
  - ◻️ C. The kidney secretes excess erythropoietin — _This is a primary marrow disorder, not driven by excess erythropoietin._
  - ✅ D. JAK2 is constantly active, so blood cell production rises
  - ◻️ E. BCR-ABL1 drives granulocyte proliferation — _BCR-ABL1 causes chronic myeloid leukemia._
  - Explanation: JAK2 V617F makes JAK2 constantly active, increasing production of red cells (and often white cells and platelets) — polycythemia vera.
- **MCQ** **CORE** · depth RECOGNITION · `cel-jak-stat:mcq2` · identification → **recognition** · difficulty 2 · `bc-jak-stat.scid`
  - A 5-month-old boy has persistent thrush, chronic diarrhea and poor growth. His maternal uncle died of infections in infancy. Lymphocyte studies show very few T cells. Which gene is most likely affected?
  - ◻️ A. ADA — _Adenosine deaminase deficiency is autosomal recessive; the affected maternal uncle suggests X-linked inheritance._
  - ◻️ B. BTK — _BTK defects cause X-linked agammaglobulinemia, with absent B cells but normal T cells._
  - ✅ C. IL2RG
  - ◻️ D. ATM — _ATM defects cause ataxia–telangiectasia._
  - ◻️ E. JAK2 — _JAK2 gain of function causes myeloproliferative neoplasms._
  - Explanation: Severe early infections with absent T cells in a boy with an affected maternal uncle = X-linked SCID (IL2RG), the most common SCID.
- **MCQ** **SUPPLEMENTARY** · depth RECOGNITION · `cel-jak-stat:mcq3` · recall → **recognition** · difficulty 1 · `bc-jak-stat.ligands`
  - Tofacitinib is used for rheumatoid arthritis. Which signaling step does it block?
  - ◻️ A. Adenylyl cyclase activation by Gs — _Tofacitinib does not act on G-protein signaling._
  - ✅ B. Janus kinase activity after cytokine binding
  - ◻️ C. The calcineurin phosphatase in T cells — _Calcineurin is blocked by cyclosporine and tacrolimus._
  - ◻️ D. Phosphodiesterase 4 in airway inflammatory cells — _PDE4 is targeted by roflumilast._
  - ◻️ E. The BCR-ABL1 tyrosine kinase in leukemia — _BCR-ABL1 is targeted by imatinib._
  - Explanation: Tofacitinib is a JAK inhibitor: it damps cytokine signaling through the JAK–STAT pathway, reducing immune activity.
- **MCQ** **SUPPLEMENTARY** · depth APPLICATION · `cel-jak-stat:mcq4` · prediction → **application** · difficulty 3 · `bc-jak-stat.ligands`, `bc-jak-stat.mechanism`
  - A child’s lymphocytes cannot respond to several interleukins because the receptors’ associated kinase is missing, although the receptors themselves are present. Which other finding is expected?
  - ✅ A. SCID: T and NK cells absent, B cells present but nonfunctional
  - ◻️ B. SCID with T, B and NK cells all absent — _Loss of all three populations (T⁻B⁻NK⁻) is classic for ADA deficiency; JAK3 deficiency leaves B-cell numbers intact._
  - ◻️ C. Isolated absence of B cells with normal T cells — _That pattern is X-linked agammaglobulinemia (BTK)._
  - ◻️ D. Café-au-lait spots and fibrous dysplasia — _That is McCune–Albright syndrome (Gsα)._
  - ◻️ E. Polycythemia with raised hemoglobin — _That is JAK2 gain of function._
  - Steps: (1) The receptors are present but their associated kinase is missing → JAK deficiency. (2) Interleukin signals in lymphocytes use JAK3. (3) Without JAK3, T and NK cells fail to develop; B cells are made but work poorly → T⁻B⁺NK⁻ SCID.
  - Explanation: JAK3-deficient SCID is T⁻B⁺NK⁻: T and NK cells fail to develop, while B cells are present in normal numbers but function poorly. ADA-deficient SCID, by contrast, classically lowers T, B and NK cells.
- **MCQ** **CORE** · depth MECHANISM · `cel-jak-stat:mcq5` · mechanism → **mechanism** · difficulty 2 · `bc-jak-stat.mechanism`
  - The thrombopoietin receptor (MPL) has no kinase domain of its own. How does its signal reach the nucleus after thrombopoietin binds?
  - ◻️ A. The receptor opens an ion channel and calcium rises — _That describes ligand-gated ion channels._
  - ✅ B. Associated JAKs activate STATs, which alter transcription
  - ◻️ C. Its own tyrosine kinase domain activates RAS — _Intrinsic tyrosine kinase activity defines receptor tyrosine kinases, which MPL is not._
  - ◻️ D. Gs raises cAMP, and PKA enters the nucleus — _MPL is a cytokine receptor, not a G-protein-coupled receptor._
  - ◻️ E. The hormone–receptor complex binds DNA directly — _That describes intracellular (nuclear) receptors for steroid and thyroid hormones._
  - Explanation: Cytokine receptors such as MPL rely on associated Janus kinases (JAK2 for MPL); JAKs activate STAT proteins, which carry the signal to the nucleus.
- **MCQ** **CORE** · depth RECOGNITION · `cel-jak-stat:mcq6` · recall → **recognition** · difficulty 1 · `bc-jak-stat.ligands`
  - Which hormone acts on a cytokine-type receptor that signals through JAK2 and STAT5 rather than through a G protein?
  - ◻️ A. Insulin — _Insulin acts on a receptor tyrosine kinase with intrinsic kinase activity._
  - ✅ B. Growth hormone
  - ◻️ C. Growth hormone–releasing hormone — _GHRH acts on a Gs-coupled receptor that raises cAMP._
  - ◻️ D. Thyrotropin-releasing hormone — _TRH acts on a Gq-coupled receptor (phospholipase C)._
  - ◻️ E. Cortisol — _Cortisol acts on an intracellular receptor that binds DNA._
  - Explanation: GH, prolactin and EPO receptors are cytokine-type receptors: they use associated JAK2, which activates STAT5. GHRH (Gs) and TRH (Gq) use GPCRs.
- **MCQ** **CORE** · depth APPLICATION · `cel-jak-stat:mcq7` · prediction → **application** · difficulty 3 · `bc-jak-stat.ligands`, `bc-jak-stat.mechanism`
  - A patient receives a drug that inhibits JAK2. Based on how erythropoietin signals, which effect on the blood is expected?
  - ✅ A. Reduced EPO-driven red cell production
  - ◻️ B. Loss of B cells only, sparing red cells — _JAK2 carries EPO, thrombopoietin and other signals; red cell production depends on it._
  - ◻️ C. Increased STAT5 activity in erythroid cells — _JAK2 activates STAT5; inhibiting JAK2 lowers STAT5 activity._
  - ◻️ D. Higher hemoglobin from unopposed EPO — _EPO needs JAK2 to signal; blocking JAK2 reduces, not increases, red cell production._
  - ◻️ E. No effect, because EPO acts through Gs and cAMP — _The EPO receptor is a cytokine receptor that signals through JAK2 and STAT5._
  - Steps: (1) EPO acts on a cytokine receptor with no kinase of its own. (2) It signals through associated JAK2, which activates STAT5. (3) STAT5 supports erythroid progenitor proliferation and survival, so blocking JAK2 lowers red cell production.
  - Explanation: EPO receptor → JAK2 → STAT5 drives erythroid progenitor proliferation and survival, so JAK2 inhibition is expected to reduce red cell production.
- **MCQ** **SUPPLEMENTARY** · depth APPLICATION · `cel-jak-stat:mcq8` · prediction → **application** · difficulty 3 · `bc-jak-stat.jak2`
  - A woman with polycythemia vera carries JAK2 V617F, with high hemoglobin and platelets. Based on how this mutation acts, what would a drug that inhibits JAK2 be expected to do?
  - ◻️ A. Mainly restore T-cell development — _T-cell development depends on JAK3 and the common γ chain, which are not the problem here._
  - ◻️ B. Correct the mutation in her marrow stem cells — _A kinase inhibitor blocks activity; it does not repair the acquired mutation._
  - ◻️ C. Have no effect, because V617F acts through Gs — _V617F is a JAK2 mutation; the signal runs through JAK–STAT, not Gs._
  - ◻️ D. Raise blood counts by removing feedback inhibition — _JAK2 drives production in these cells; inhibiting it lowers counts._
  - ✅ E. Lower blood counts by damping constitutive JAK2 signaling
  - Steps: (1) JAK2 V617F is a gain-of-function mutation: JAK2 signals without its normal trigger. (2) This drives overproduction of red cells, platelets and white cells. (3) A JAK2 inhibitor reduces that signaling, so counts are expected to fall without correcting the mutation.
  - Explanation: V617F makes JAK2 constantly active, overstimulating blood cell production. Inhibiting JAK2 damps this signal, so counts are expected to fall; the mutation itself remains.
- **True/false** **CORE** · depth RECOGNITION · `cel-jak-stat:tf1` · recall → **recognition** · difficulty 1 · `bc-jak-stat.jak2`: The JAK2 V617F mutation produces a JAK2 protein that is constantly turned on. → **True**. Correct: it drives myeloproliferative neoplasms such as polycythemia vera.
- **True/false** **CORE** · depth RECOGNITION · `cel-jak-stat:tf2` · recall → **recognition** · difficulty 1 · `bc-jak-stat.scid`: X-linked SCID affects boys and girls equally. → **False**. X-linked SCID occurs almost exclusively in males.
- **True/false** **CORE** · depth RECOGNITION · `cel-jak-stat:tf3` · recall → **recognition** · difficulty 1 · `bc-jak-stat.mechanism`: JAK/STAT signaling carries signals from cell-surface receptors to the nucleus. → **True**. Correct: STATs relay JAK signals to the nucleus to change transcription.
- **True/false** **CORE** · depth RECOGNITION · `cel-jak-stat:tf4` · recall → **recognition** · difficulty 1 · `bc-jak-stat.mechanism`: Phosphorylated STAT proteins dimerize and enter the nucleus to change transcription. → **True**. Correct: JAKs phosphorylate STATs, which dimerize and act as transcription factors.
- **True/false** **CORE** · depth RECOGNITION · `cel-jak-stat:tf5` · recall → **recognition** · difficulty 2 · `bc-jak-stat.scid`: The IL2RG gene encodes the common gamma chain, part of several immune-cell receptors. → **True**. Correct: loss of the common gamma chain blocks lymphocyte development in X-linked SCID.
- **True/false** **CORE** · depth RECOGNITION · `cel-jak-stat:tf6` · recall → **recognition** · difficulty 2 · `bc-jak-stat.scid`: In X-linked and JAK3-deficient SCID, B cells are usually present in normal numbers but function poorly. → **True**. Correct: γc/JAK3 SCID is T⁻B⁺NK⁻; ADA-deficient SCID classically lowers T, B and NK cells.
- **True/false** **CORE** · depth RECOGNITION · `cel-jak-stat:tf7` · recall → **recognition** · difficulty 1 · `bc-jak-stat.ligands`: Interferons signal through G-protein-coupled receptors and cAMP. → **False**. Interferon receptors are cytokine receptors that use JAKs (JAK1, JAK2, TYK2) to activate STATs.
- **Crossword** **SUPPLEMENTARY** · depth RECOGNITION · `cel-jak-stat:clue1` · recall → **recognition** · difficulty 2 · `bc-jak-stat.ligands`: Janus kinase inhibitor used in rheumatoid arthritis → **TOFACITINIB**
- **Crossword** **CORE** · depth RECOGNITION · `cel-jak-stat:clue2` · recall → **recognition** · difficulty 1 · `bc-jak-stat.jak2`: Vera: myeloproliferative neoplasm with JAK2 mutation in nearly all patients → **POLYCYTHEMIA**
- **Crossword** **CORE** · depth RECOGNITION · `cel-jak-stat:clue3` · recall → **recognition** · difficulty 2 · `bc-jak-stat.ligands`: Lactotroph hormone whose receptor signals mainly through JAK2 and STAT5 → **PROLACTIN**
- **Crossword** **CORE** · depth RECOGNITION · `cel-jak-stat:clue4` · recall → **recognition** · difficulty 1 · `bc-jak-stat.ligands`: Hormone whose receptor uses JAK2 and STAT5 to drive red cell production → **ERYTHROPOIETIN**
- **Mechanism Lab** **CORE** · depth MECHANISM · `seq:jak-stat` · mechanism → **mechanism** · difficulty 2 · `bc-jak-stat.mechanism`: Cytokine to nucleus. Order the steps of JAK–STAT signaling after a cytokine or hormone such as growth hormone binds.
  1. The ligand binds a receptor that has no kinase of its own
  2. Receptor-associated JAKs are activated
  3. JAKs phosphorylate STAT proteins on tyrosine
  4. Phosphorylated STATs dimerize
  5. STAT dimers move into the nucleus
  6. Target genes are transcribed (for growth hormone, IGF-1)
  - Cytokine receptors borrow a kinase: JAKs phosphorylate STATs, which dimerize, enter the nucleus and change transcription (GH → JAK2 → STAT5 → IGF-1).

---

## Intracellular receptors and ligand-gated ion channels (`cel-other-receptors`)

Objectives: `bc-receptor-other.nuclear`, `bc-receptor-other.ion-channels`

**Citations**

1. OpenStax Biology 2e, 9.1 Signaling Molecules and Cellular Receptors — <https://openstax.org/books/biology-2e/pages/9-1-signaling-molecules-and-cellular-receptors> — checked: full-text
2. OpenStax Anatomy and Physiology 2e, 17.2 Hormones — <https://openstax.org/books/anatomy-and-physiology-2e/pages/17-2-hormones> — checked: full-text
3. OpenStax Anatomy and Physiology 2e, 12.5 Communication Between Neurons — <https://openstax.org/books/anatomy-and-physiology-2e/pages/12-5-communication-between-neurons> — checked: full-text
4. Lüddens H, Korpi ER. GABA-A receptors open an intrinsic anion channel; benzodiazepine sites. J Psychiatr Res 1995 — PMID 7545236 — <https://pubmed.ncbi.nlm.nih.gov/7545236/> — checked: summary
5. Hashimoto T. GABA-A receptors are ligand-gated Cl⁻ channels with benzodiazepine and barbiturate sites. Nihon Rinsho 1998 — PMID 9702060 — <https://pubmed.ncbi.nlm.nih.gov/9702060/> — checked: summary
6. Schrattenholz A, Soskic V. NMDA receptors are ligand-gated Ca²⁺ channels with a voltage-dependent Mg²⁺ block; excitotoxicity. Curr Top Med Chem 2006 — PMID 16719808 — <https://pubmed.ncbi.nlm.nih.gov/16719808/> — checked: summary
7. Barnes NM et al. The 5-HT3 receptor is a cation-selective Cys-loop ion channel. Neuropharmacology 2009 — PMID 18761359 — <https://pubmed.ncbi.nlm.nih.gov/18761359/> — checked: summary
8. Costall B, Naylor RJ. 5-HT3 antagonists prevent chemotherapy-, radiotherapy- and postoperative emesis. Curr Drug Targets CNS Neurol Disord 2004 — PMID 14965242 — <https://pubmed.ncbi.nlm.nih.gov/14965242/> — checked: summary
9. Thompson AJ et al. Cys-loop receptors (nACh, 5-HT3, GABA-A, glycine) mediate fast synaptic transmission. Q Rev Biophys 2010 — PMID 20849671 — <https://pubmed.ncbi.nlm.nih.gov/20849671/> — checked: summary
10. Brown AJ et al. Calcitriol binds the vitamin D receptor, which pairs with RXR and binds DNA. Am J Physiol 1999 — PMID 10444570 — <https://pubmed.ncbi.nlm.nih.gov/10444570/> — checked: summary
11. MedlinePlus Drug Information: Ondansetron — <https://medlineplus.gov/druginfo/meds/a601209.html> — checked: full-text

**Verified facts** [supporting citations]

- Intracellular receptors respond to hydrophobic ligands that cross the plasma membrane; many are transcription factors that bind DNA in the nucleus and regulate gene expression. [1]
- Steroid hormones bind receptors in the cytosol or nucleus, and the complex binds DNA; thyroid hormones enter cells by a carrier and bind receptors already bound to DNA. Both trigger transcription and new protein synthesis. [2]
- Ion channel-linked receptors bind a ligand and open a channel that lets specific ions cross the membrane. [1]
- Ionotropic receptors are ligand-gated ion channels, such as the nicotinic acetylcholine receptor and the glycine receptor; acetylcholine binding to the nicotinic receptor opens a cation channel and depolarizes the cell. Metabotropic receptors instead act through a G protein and second messengers. [3]
- GABA-A receptors are ligand-gated chloride channels: GABA opens an intrinsic anion channel. The receptor carries binding sites for benzodiazepines and barbiturates. [4, 5]
- NMDA receptors are ligand-gated calcium channels opened by glutamate, with a voltage-dependent magnesium block; they are thought to be responsible for excitotoxicity. [6]
- 5-HT3 receptors are cation-selective ligand-gated ion channels. 5-HT3 antagonists such as ondansetron prevent chemotherapy-, radiotherapy- and postoperative nausea and vomiting. [7, 8, 11]
- Cys-loop ligand-gated channels (nicotinic acetylcholine, 5-HT3, GABA-A and glycine receptors) mediate fast excitatory and inhibitory synaptic transmission. [9]
- Calcitriol (1,25-dihydroxyvitamin D) binds the vitamin D receptor, a ligand-activated transcription factor that pairs with the retinoid X receptor and binds vitamin D response elements in DNA. [10]

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
  - ◻️ D. Dimerizes and phosphorylates tyrosines — _That describes growth-factor receptor tyrosine kinases._
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
- **MCQ** **CORE** · depth MECHANISM · `cel-other-receptors:mcq3` · mechanism → **mechanism** · difficulty 2 · `bc-receptor-other.ion-channels`
  - Benzodiazepines increase the effect of GABA at GABA-A receptors. Which ion movement explains the neuronal inhibition?
  - ◻️ A. Sodium enters through the receptor and depolarizes — _Cation entry excites neurons; GABA-A channels conduct chloride._
  - ◻️ B. Gi lowers cAMP in the neuron — _GABA-A receptors are ligand-gated channels, not G-protein-coupled receptors._
  - ◻️ C. The receptor binds DNA and changes transcription — _That describes intracellular receptors for steroid and thyroid hormones._
  - ✅ D. More chloride flows through the receptor’s own channel
  - ◻️ E. Calcium enters through NMDA receptors — _NMDA receptors are glutamate-gated calcium channels and excite neurons._
  - Explanation: GABA-A is a ligand-gated chloride channel. Benzodiazepines (and barbiturates) act at sites on it, increasing chloride flow and inhibiting the neuron.
- **MCQ** **CORE** · depth RECOGNITION · `cel-other-receptors:mcq4` · recall → **recognition** · difficulty 1 · `bc-receptor-other.ion-channels`
  - Ondansetron prevents chemotherapy-induced vomiting. What type of receptor does it block?
  - ✅ A. A serotonin-gated cation channel (5-HT3)
  - ◻️ B. A GABA-gated chloride channel (GABA-A) — _GABA-A receptors are enhanced by benzodiazepines, not blocked by ondansetron._
  - ◻️ C. A dopamine D1 receptor coupled to Gs — _Ondansetron is a 5-HT3 receptor antagonist, not a dopamine antagonist._
  - ◻️ D. A Gq-coupled serotonin receptor — _The 5-HT3 receptor is a ligand-gated ion channel, not a GPCR._
  - ◻️ E. A glutamate-gated calcium channel (NMDA) — _NMDA receptors are glutamate-gated; ondansetron blocks 5-HT3 receptors._
  - Explanation: Ondansetron is a 5-HT3 antagonist. The 5-HT3 receptor is the serotonin receptor that is a ligand-gated cation channel.
- **MCQ** **CORE** · depth RECOGNITION · `cel-other-receptors:mcq5` · recall → **recognition** · difficulty 2 · `bc-receptor-other.ion-channels`
  - Glutamate opens a ligand-gated channel that admits Ca²⁺ and is linked to excitotoxic neuronal injury. Which receptor is it?
  - ◻️ A. M2 muscarinic receptor — _M2 receptors are G-protein-coupled (Gi)._
  - ◻️ B. GABA-A receptor — _GABA-A receptors are chloride channels and inhibit neurons._
  - ◻️ C. Glycine receptor — _Glycine receptors are inhibitory chloride channels._
  - ✅ D. NMDA receptor
  - ◻️ E. 5-HT3 receptor — _5-HT3 receptors are serotonin-gated, not glutamate-gated._
  - Explanation: NMDA receptors are glutamate-gated Ca²⁺ channels with a voltage-dependent Mg²⁺ block; excessive activation is thought to cause excitotoxicity.
- **True/false** **SUPPLEMENTARY** · depth RECOGNITION · `cel-other-receptors:tf1` · recall → **recognition** · difficulty 2 · `bc-receptor-other.nuclear`: Thyroid hormones bind receptors that are already bound to DNA. → **True**. Correct: binding triggers transcription of target genes.
- **True/false** **CORE** · depth RECOGNITION · `cel-other-receptors:tf2` · recall → **recognition** · difficulty 1 · `bc-receptor-other.ion-channels`: Muscarinic acetylcholine receptors are ligand-gated ion channels. → **False**. Muscarinic receptors are G-protein-coupled; nicotinic receptors are ligand-gated ion channels.
- **True/false** **CORE** · depth RECOGNITION · `cel-other-receptors:tf3` · recall → **recognition** · difficulty 1 · `bc-receptor-other.ion-channels`: GABA-A receptors are ligand-gated chloride channels. → **True**. Correct: GABA opens the receptor’s own anion channel; benzodiazepines and barbiturates act at sites on it.
- **True/false** **CORE** · depth RECOGNITION · `cel-other-receptors:tf4` · recall → **recognition** · difficulty 2 · `bc-receptor-other.ion-channels`: The 5-HT3 receptor is a G-protein-coupled serotonin receptor. → **False**. The 5-HT3 receptor is a cation-selective ligand-gated ion channel (the target of ondansetron).
- **True/false** **CORE** · depth RECOGNITION · `cel-other-receptors:tf5` · recall → **recognition** · difficulty 1 · `bc-receptor-other.nuclear`: Calcitriol acts through an intracellular receptor that binds DNA and regulates transcription. → **True**. Correct: the vitamin D receptor is a ligand-activated transcription factor (paired with RXR).
- **Crossword** **CORE** · depth RECOGNITION · `cel-other-receptors:clue1` · recall → **recognition** · difficulty 1 · `bc-receptor-other.ion-channels`: Acetylcholine receptor that is a ligand-gated cation channel → **NICOTINIC**
- **Crossword** **SUPPLEMENTARY** · depth RECOGNITION · `cel-other-receptors:clue2` · recall → **recognition** · difficulty 2 · `bc-receptor-other.ion-channels`: Describes a receptor that is itself an ion channel → **IONOTROPIC**
- **Crossword** **CORE** · depth RECOGNITION · `cel-other-receptors:clue3` · recall → **recognition** · difficulty 1 · `bc-receptor-other.ion-channels`: Antiemetic that blocks the serotonin-gated 5-HT3 channel → **ONDANSETRON**

---

## Hormone receptors: which G protein? (GHRH, ACTH, LH/FSH, PTH, GnRH, TRH, oxytocin) (`cel-hormone-gpcr`)

Objectives: `bc-gpcr.receptors`, `bc-second-messengers.predict`

**Citations**

1. Mayo KE et al. GHRH acts through a seven-transmembrane Gs-coupled receptor: cAMP → PKA → CREB; GH release also involves G-protein effects on ion channels. Recent Prog Horm Res 1995 — PMID 7740167 — <https://pubmed.ncbi.nlm.nih.gov/7740167/> — checked: summary
2. Ben-Shlomo A, Melmed S. Somatotroph adenomas: GHRH receptor signaling; excess GH causes acromegaly. J Clin Endocrinol Metab 2026 — PMID 41824769 — <https://pubmed.ncbi.nlm.nih.gov/41824769/> — checked: summary
3. Ruggiero C, Lalli E. ACTH → MC2R → adenylyl cyclase → cAMP/PKA → steroidogenesis. Front Endocrinol (Lausanne) 2016 — PMID 27065945 — <https://pubmed.ncbi.nlm.nih.gov/27065945/> — checked: summary
4. Clayton RN. Gonadotrophin receptors: the LH receptor couples to Gs; activating mutations cause familial male precocious puberty. Baillieres Clin Endocrinol Metab 1996 — PMID 8734448 — <https://pubmed.ncbi.nlm.nih.gov/8734448/> — checked: summary
5. Kim JM et al. Glycoprotein hormone receptors such as the FSH receptor couple to Gs → adenylyl cyclase → cAMP. Dev Reprod 2018 — PMID 30023464 — <https://pubmed.ncbi.nlm.nih.gov/30023464/> — checked: summary
6. Esbrit P et al. PTH and PTHrP share the type 1 PTH/PTHrP receptor, activating adenylate cyclase and phospholipase C. J Endocrinol 2000 — PMID 10856878 — <https://pubmed.ncbi.nlm.nih.gov/10856878/> — checked: summary
7. Lee M, Partridge NC. PTH signaling in bone and kidney through protein kinase A and protein kinase C. Curr Opin Nephrol Hypertens 2009 — PMID 19395963 — <https://pubmed.ncbi.nlm.nih.gov/19395963/> — checked: summary
8. Naor Z et al. The GnRH receptor couples to Gq: PLC → IP₃ (Ca²⁺) and DAG (PKC). Front Neuroendocrinol 1998 — PMID 9465287 — <https://pubmed.ncbi.nlm.nih.gov/9465287/> — checked: summary
9. Ortmann O, Diedrich K. GnRH receptor → Gq/G11 → PLC → DAG/PKC and IP₃/Ca²⁺ → LH and FSH secretion. Hum Reprod 1999 — PMID 10573034 — <https://pubmed.ncbi.nlm.nih.gov/10573034/> — checked: summary
10. Dong Q et al. TRH receptor → Gq/PLCβ/Ca²⁺/PKC; activating Gsα mutations in ~40% of somatotroph tumors. J Clin Endocrinol Metab 1996 — PMID 8772588 — <https://pubmed.ncbi.nlm.nih.gov/8772588/> — checked: summary
11. Gimpl G, Fahrenholz F. The oxytocin receptor couples mainly via Gq to phospholipase Cβ. Physiol Rev 2001 — PMID 11274341 — <https://pubmed.ncbi.nlm.nih.gov/11274341/> — checked: summary
12. Phillippe M, Chien EK. Uterotonic GPCRs (including oxytocin) act through Gq/PLCβ in myometrium. J Soc Gynecol Investig 1998 — PMID 9699174 — <https://pubmed.ncbi.nlm.nih.gov/9699174/> — checked: summary
13. OpenStax Anatomy and Physiology 2e, 17.2 Hormones — <https://openstax.org/books/anatomy-and-physiology-2e/pages/17-2-hormones> — checked: full-text
14. Ziecik AJ et al. LH and its agonist hCG share a common receptor in gonadal cells. J Physiol Pharmacol 1992 — PMID 1343973 — <https://pubmed.ncbi.nlm.nih.gov/1343973/> — checked: summary
15. Zhang D et al. The LH receptor, a seven-transmembrane GPCR, signals by activating adenylate cyclase (cAMP). J Fluoresc 2019 — PMID 30386968 — <https://pubmed.ncbi.nlm.nih.gov/30386968/> — checked: summary

**Verified facts** [supporting citations]

- The GHRH receptor on pituitary somatotrophs is a seven-transmembrane Gs-coupled receptor: GHRH raises cAMP, and PKA phosphorylates the transcription factor CREB; growth hormone release also involves G-protein effects on ion channels. [1]
- ACTH binds the melanocortin 2 receptor (MC2R) on adrenal cells and stimulates adenylyl cyclase; cAMP and PKA drive both the rapid supply of cholesterol for steroid synthesis and transcription of steroidogenic genes. [3]
- The LH and FSH receptors are seven-transmembrane glycoprotein-hormone receptors that couple to Gs, activating adenylyl cyclase and raising cAMP. Activating LH-receptor mutations cause gonadotropin-independent familial male precocious puberty through constant cAMP signaling in Leydig cells. [4, 5]
- PTH (and PTHrP) act on the shared type 1 PTH receptor in bone and kidney, which activates adenylyl cyclase (cAMP–PKA) and also phospholipase C (PKC). [6, 7]
- The GnRH receptor on pituitary gonadotropes couples to Gq/G11: phospholipase C produces IP₃ (Ca²⁺ release) and DAG (protein kinase C), driving LH and FSH synthesis and secretion. [8, 9]
- The TRH receptor triggers the Gq–phospholipase Cβ–Ca²⁺–protein kinase C pathway in thyrotrophs. [10]
- The oxytocin receptor couples mainly through Gq to phospholipase Cβ; oxytocin and other uterotonic agonists act through Gq/PLCβ in myometrium. [11, 12]
- About 40% of pituitary somatotroph tumors carry activating Gsα mutations (at Arg201 or Gln227), and excess GH from somatotroph adenomas causes acromegaly. [10, 2]
- Reconciling sources: OpenStax lists GHRH among hormones that use Ca²⁺ as a second messenger. GHRH-stimulated GH release does involve G-protein effects on ion channels, but the GHRH receptor is Gs-coupled and cAMP is its principal second messenger, which is the classic Step 1 association. [13, 1]
- LH and hCG share a common receptor in the gonads (the LH receptor), a seven-transmembrane GPCR that signals by activating adenylyl cyclase and raising cAMP. [14, 15]

**Mechanism.** The hormones in this group that raise cAMP use Gs (GHRH on somatotrophs, ACTH on the adrenal cortex, LH and FSH on the gonads, PTH on bone and kidney). Hypothalamic GnRH and TRH, and oxytocin on the uterus, use Gq: phospholipase C → IP₃ (Ca²⁺) and DAG (PKC). Knowing the G protein predicts what a constantly active Gsα or a phospholipase C blocker would do.

**Quick.** Gs/cAMP: GHRH, ACTH (MC2R), LH and hCG (shared LH receptor), FSH, PTH (also PLC). Gq/IP₃–DAG: GnRH, TRH, oxytocin. Activating Gsα in somatotrophs mimics constant GHRH → GH excess → acromegaly.

**Detailed**

> Gs hormones activate adenylyl cyclase: GHRH (somatotrophs, cAMP → PKA → CREB), ACTH (MC2R in the adrenal cortex, cAMP → steroidogenesis), LH and FSH (glycoprotein-hormone receptors in the gonads) and PTH (type 1 PTH receptor in bone and kidney, which also activates phospholipase C).

> Gq hormones activate phospholipase C, producing IP₃ (Ca²⁺ release) and DAG (protein kinase C): GnRH on gonadotropes (LH and FSH release), TRH on thyrotrophs and oxytocin on the myometrium. Disease follows the same logic: a constantly active Gsα in somatotrophs behaves like unremitting GHRH and causes GH excess, and an activating LH-receptor mutation produces testosterone without gonadotropins.

**Misconception.** A Ca²⁺ effect does not make a hormone a Gq hormone: GHRH-stimulated GH release involves ion channels, but the GHRH receptor is Gs-coupled and cAMP is the classic messenger.

**Takeaway.** GHRH, ACTH, LH, FSH, PTH → Gs/cAMP. GnRH, TRH, oxytocin → Gq/IP₃–DAG.

- **MCQ** **CORE** · depth RECOGNITION · `cel-hormone-gpcr:mcq1` · recall → **recognition** · difficulty 1 · `bc-gpcr.receptors`
  - Which hypothalamic or pituitary hormone acts through a Gq-coupled receptor that raises IP₃ and Ca²⁺?
  - ◻️ A. Growth hormone — _GH acts on a cytokine-type receptor that uses JAK2 and STAT5._
  - ◻️ B. GHRH — _The GHRH receptor is Gs-coupled and raises cAMP._
  - ✅ C. GnRH
  - ◻️ D. LH — _The LH receptor couples to Gs and raises cAMP._
  - ◻️ E. ACTH — _ACTH acts on MC2R, which stimulates adenylyl cyclase (Gs, cAMP)._
  - Explanation: GnRH (like TRH and oxytocin) uses Gq → phospholipase C → IP₃ and DAG. GHRH, ACTH, LH and FSH use Gs → cAMP; GH uses JAK2–STAT5.
- **MCQ** **CORE** · depth MECHANISM · `cel-hormone-gpcr:mcq2` · mechanism → **mechanism** · difficulty 2 · `bc-gpcr.receptors`, `bc-second-messengers.predict`
  - ACTH stimulates cortisol synthesis in the adrenal cortex within minutes and increases steroidogenic enzyme expression over hours. Which signal mediates both effects?
  - ◻️ A. JAK2 phosphorylation of STAT5 — _JAK2–STAT5 is used by GH, prolactin and EPO, not ACTH._
  - ◻️ B. IP₃-released Ca²⁺ after Gq activation — _ACTH acts through MC2R and adenylyl cyclase, not Gq._
  - ✅ C. cAMP and protein kinase A after MC2R activation
  - ◻️ D. cGMP from soluble guanylyl cyclase — _Soluble guanylyl cyclase responds to nitric oxide._
  - ◻️ E. ACTH entering the nucleus to bind DNA — _ACTH is a peptide acting on a membrane receptor._
  - Explanation: ACTH → MC2R → adenylyl cyclase → cAMP → PKA, which supplies cholesterol rapidly and, over hours, increases transcription of steroidogenic genes.
- **MCQ** **CORE** · depth APPLICATION · `cel-hormone-gpcr:mcq3` · prediction → **application** · difficulty 3 · `bc-gpcr.receptors`
  - A pituitary adenoma carries an activating mutation that keeps Gsα in its GTP-bound state. Which hormone’s signal does this mutation mimic, and what is the expected clinical result?
  - ◻️ A. GnRH; excess LH and FSH — _GnRH acts through Gq, not Gs._
  - ◻️ B. Growth hormone; low IGF-1 — _GH itself uses JAK2–STAT5; constant somatotroph cAMP raises GH and IGF-1._
  - ◻️ C. TRH; excess TSH and hyperthyroidism — _TRH acts through Gq; activating Gsα mutations are typical of somatotroph tumors._
  - ◻️ D. Oxytocin; excessive uterine contraction — _Oxytocin acts through Gq on the myometrium._
  - ✅ E. GHRH; GH excess causing acromegaly
  - Steps: (1) The mutation keeps Gsα active, so cAMP stays high. (2) In the pituitary, the hormone that normally raises cAMP is GHRH (somatotrophs). (3) Constant GHRH-like signaling → excess GH → acromegaly.
  - Explanation: GHRH acts through a Gs-coupled receptor. A constantly active Gsα in somatotrophs keeps cAMP high, like unremitting GHRH, so GH is overproduced → acromegaly.
- **MCQ** **CORE** · depth APPLICATION · `cel-hormone-gpcr:mcq4` · prediction → **application** · difficulty 3 · `bc-gpcr.receptors`, `bc-second-messengers.predict`
  - A research drug blocks phospholipase C in uterine smooth muscle. Which hormone’s action on the myometrium is most reduced?
  - ✅ A. Oxytocin
  - ◻️ B. ACTH — _ACTH acts through Gs (MC2R) on the adrenal cortex._
  - ◻️ C. Luteinizing hormone — _LH acts through Gs on the gonads, not through PLC in myometrium._
  - ◻️ D. Growth hormone–releasing hormone — _GHRH acts through Gs on pituitary somatotrophs._
  - ◻️ E. Parathyroid hormone — _PTH mainly acts on bone and kidney; its classic messenger is cAMP._
  - Steps: (1) Phospholipase C is the effector of Gq. (2) In the myometrium, oxytocin acts through a Gq-coupled receptor. (3) Blocking PLC removes the IP₃/Ca²⁺ signal, so oxytocin-induced contraction falls.
  - Explanation: The oxytocin receptor couples through Gq to phospholipase Cβ; blocking PLC removes the IP₃/Ca²⁺ signal that contracts the myometrium.
- **MCQ** **SUPPLEMENTARY** · depth RECOGNITION · `cel-hormone-gpcr:mcq5` · identification → **recognition** · difficulty 3 · `bc-gpcr.receptors`
  - A 4-year-old boy has rapid growth, pubic hair and an enlarged penis. Testosterone is in the adult range, but LH and FSH are undetectable. His father had the same problem. Which defect is most likely?
  - ◻️ A. An inactivating mutation of the TRH receptor — _TRH receptor defects affect thyroid function, not testosterone._
  - ◻️ B. A JAK2 V617F mutation — _JAK2 V617F causes myeloproliferative neoplasms._
  - ✅ C. An activating LH-receptor mutation causing constant cAMP
  - ◻️ D. A loss-of-function FSH receptor mutation — _Loss of FSH signaling would not produce adult testosterone._
  - ◻️ E. Early activation of hypothalamic GnRH pulses — _Central puberty raises LH and FSH; here they are undetectable._
  - Explanation: Gonadotropin-independent precocious puberty in a boy with an affected father: an activating LH-receptor mutation keeps Gs–cAMP signaling on in Leydig cells.
- **True/false** **CORE** · depth RECOGNITION · `cel-hormone-gpcr:tf1` · recall → **recognition** · difficulty 1 · `bc-gpcr.receptors`: The GHRH receptor is Gs-coupled, and cAMP is its principal second messenger. → **True**. Correct: GHRH → Gs → cAMP → PKA → CREB in somatotrophs.
- **True/false** **CORE** · depth RECOGNITION · `cel-hormone-gpcr:tf2` · recall → **recognition** · difficulty 1 · `bc-gpcr.receptors`: TRH acts on thyrotrophs through Gs and cAMP. → **False**. The TRH receptor uses Gq: phospholipase Cβ → Ca²⁺ and protein kinase C.
- **True/false** **SUPPLEMENTARY** · depth RECOGNITION · `cel-hormone-gpcr:tf3` · recall → **recognition** · difficulty 2 · `bc-gpcr.receptors`: The PTH receptor can activate both adenylyl cyclase and phospholipase C. → **True**. Correct: the type 1 PTH receptor signals through cAMP–PKA (classic) and PLC–PKC.
- **True/false** **CORE** · depth RECOGNITION · `cel-hormone-gpcr:tf4` · recall → **recognition** · difficulty 1 · `bc-gpcr.receptors`: hCG acts on the same Gs-coupled receptor as LH. → **True**. Correct: LH and hCG share the LH receptor, which raises cAMP (Gs).
- **Crossword** **CORE** · depth RECOGNITION · `cel-hormone-gpcr:clue1` · recall → **recognition** · difficulty 1 · `bc-gpcr.receptors`: Posterior pituitary hormone whose Gq-coupled receptor contracts the uterus → **OXYTOCIN**
- **Crossword** **CORE** · depth RECOGNITION · `cel-hormone-gpcr:clue2` · recall → **recognition** · difficulty 2 · `bc-gpcr.receptors`: Hypothalamic decapeptide whose Gq receptor drives LH and FSH release (abbreviation) → **GNRH**
- **Match Up** **CORE** · depth RECOGNITION · `match:hormone-second-messenger` · recall → **recognition** · difficulty 2 · `bc-gpcr.receptors`: Hormones and their G proteins. Match each hormone to its G protein and target cell.
  - GHRH ↔ Gs → cAMP in somatotrophs
  - ACTH ↔ Gs (MC2R) → cAMP in adrenal cortex
  - LH ↔ Gs → cAMP in Leydig cells
  - GnRH ↔ Gq → IP₃ and DAG in gonadotropes
  - TRH ↔ Gq → Ca²⁺ and PKC in thyrotrophs
  - Oxytocin ↔ Gq → phospholipase Cβ in myometrium
  - GHRH, ACTH, LH (and FSH, PTH) raise cAMP through Gs; GnRH, TRH and oxytocin act through Gq and phospholipase C.

---

## Receptor serine/threonine kinases: TGF-β and SMADs (`cel-tgf-beta`)

Objectives: `bc-receptor-other.ser-thr`

**Citations**

1. Wrana JL. TGF-β family ligands signal through type II and type I serine/threonine kinase receptors and SMADs. Sci STKE 2000 — PMID 11752591 — <https://pubmed.ncbi.nlm.nih.gov/11752591/> — checked: summary
2. Hill CS. Type I serine/threonine kinase receptors phosphorylate R-SMADs, which join the common-mediator SMAD and enter the nucleus. Int J Biochem Cell Biol 1999 — PMID 10605817 — <https://pubmed.ncbi.nlm.nih.gov/10605817/> — checked: summary
3. MedlinePlus Genetics: Marfan syndrome — <https://medlineplus.gov/genetics/condition/marfan-syndrome/> — checked: full-text
4. MedlinePlus Genetics: FBN1 gene — <https://medlineplus.gov/genetics/gene/fbn1/> — checked: full-text
5. MedlinePlus Genetics: Loeys-Dietz syndrome — <https://medlineplus.gov/genetics/condition/loeys-dietz-syndrome/> — checked: full-text

**Verified facts** [supporting citations]

- TGF-β family ligands signal through complexes of type II and type I receptors that are serine/threonine kinases. [1]
- The type I receptor phosphorylates receptor-regulated SMADs, which form complexes with the common-mediator SMAD, move to the nucleus and regulate transcription together with DNA-binding partners. [2]
- Marfan syndrome (FBN1, autosomal dominant) is a connective-tissue disorder of fibrillin-1 microfibrils: its two primary features are lens dislocation and aortic dilation with risk of dissection, and patients are usually tall with long fingers and loose joints. Microfibrils also bind growth factors; with fewer microfibrils, more growth factor is available, which is thought to contribute to tissue overgrowth. Fibrillin-1 normally stores TGF-β in an inactive form. [3, 4]
- Loeys–Dietz syndrome (TGFBR1, TGFBR2, SMAD3, TGFB2 or TGFB3; autosomal dominant) shows paradoxically increased TGF-β pathway signaling. [5]

**Mechanism.** TGF-β binds a type II receptor, which recruits and activates a type I receptor; both are serine/threonine kinases. The type I receptor phosphorylates SMADs that carry the signal to the nucleus. In Marfan syndrome the central problem is defective fibrillin-1 and weak connective tissue; increased availability of TGF-β from fewer microfibrils is one contributing mechanism, not the whole explanation.

**Quick.** TGF-β → type II + type I receptor serine/threonine kinases → phosphorylated R-SMAD + common SMAD → nucleus → transcription. Marfan: FBN1 → defective fibrillin-1 microfibrils (lens dislocation, aortic dilation); more free TGF-β is thought to contribute.

**Detailed**

> Receptor serine/threonine kinases form a third class of enzyme-linked receptors. TGF-β family ligands bring type II and type I receptors together; the type I receptor phosphorylates receptor-regulated SMADs, which partner with the common-mediator SMAD and enter the nucleus to regulate transcription.

> Marfan syndrome is caused by FBN1 variants that reduce functional fibrillin-1 microfibrils, weakening connective tissue: lens dislocation, aortic dilation and dissection, tall stature and long fingers. Because microfibrils also store TGF-β in an inactive form, more growth factor becomes available, which is thought to contribute; the full mechanism is complex. Loeys–Dietz syndrome, caused by variants in TGF-β pathway genes, also shows increased pathway signaling.

**Misconception.** Not every enzyme-linked receptor is a tyrosine kinase: TGF-β receptors phosphorylate SMADs on serine and threonine. And Marfan syndrome is not “a TGF-β disease”: it is a fibrillin-1 connective-tissue disorder in which TGF-β dysregulation is thought to contribute.

**Takeaway.** TGF-β receptors are serine/threonine kinases acting through SMADs. Marfan = fibrillin-1 defect; extra free TGF-β is a contributing mechanism.

- **MCQ** **SUPPLEMENTARY** · depth MECHANISM · `cel-tgf-beta:mcq1` · mechanism → **mechanism** · difficulty 2 · `bc-receptor-other.ser-thr`
  - TGF-β binds its cell-surface receptor. Which event carries the signal to the nucleus?
  - ◻️ A. TGF-β enters the nucleus and binds DNA — _TGF-β acts on membrane receptors; SMADs carry the signal._
  - ◻️ B. Gs raises cAMP, which activates PKA — _TGF-β receptors are not G-protein-coupled._
  - ✅ C. Receptor serine/threonine kinases phosphorylate SMADs
  - ◻️ D. Associated JAKs phosphorylate STATs — _JAK–STAT signaling is used by cytokine receptors such as those for GH and EPO._
  - ◻️ E. Receptor tyrosine kinases activate RAS — _TGF-β receptors phosphorylate SMADs on serine and threonine._
  - Explanation: TGF-β → type II and type I receptor serine/threonine kinases → phosphorylated SMADs → nucleus → transcription.
- **MCQ** **SUPPLEMENTARY** · depth MECHANISM · `cel-tgf-beta:mcq2` · mechanism → **mechanism** · difficulty 2 · `bc-receptor-other.ser-thr`
  - In Marfan syndrome, FBN1 variants reduce functional fibrillin-1, weakening connective-tissue microfibrils. Which additional mechanism is thought to contribute to the tissue changes?
  - ◻️ A. Fibrillin-1 is itself a TGF-β receptor — _Fibrillin-1 forms microfibrils that bind and store growth factors; it is not a receptor._
  - ◻️ B. Abnormal collagen cross-links trap TGF-β — _Collagen cross-linking defects are not the mechanism in Marfan syndrome._
  - ✅ C. Fewer microfibrils store TGF-β, so more is available
  - ◻️ D. Fibrillin-1 normally degrades SMAD proteins — _Fibrillin-1 is an extracellular matrix protein and does not degrade SMADs._
  - ◻️ E. FBN1 variants activate Gsα in fibroblasts — _Activating Gsα (GNAS) mutations cause McCune–Albright syndrome._
  - Explanation: Marfan syndrome is primarily a fibrillin-1 connective-tissue defect (lens dislocation, aortic dilation and dissection, tall stature). Microfibrils also store TGF-β, so fewer microfibrils leave more growth factor available, which is thought to contribute; it is not the whole explanation.
- **True/false** **SUPPLEMENTARY** · depth RECOGNITION · `cel-tgf-beta:tf1` · recall → **recognition** · difficulty 1 · `bc-receptor-other.ser-thr`: SMAD proteins carry TGF-β receptor signals to the nucleus. → **True**. Correct: phosphorylated R-SMADs partner with the common-mediator SMAD and regulate transcription.
- **True/false** **SUPPLEMENTARY** · depth RECOGNITION · `cel-tgf-beta:tf2` · recall → **recognition** · difficulty 2 · `bc-receptor-other.ser-thr`: In Loeys–Dietz syndrome, TGF-β pathway signaling is decreased throughout the body. → **False**. Although the mutant proteins have reduced function, TGF-β pathway signaling is paradoxically increased.
- **Crossword** **SUPPLEMENTARY** · depth RECOGNITION · `cel-tgf-beta:clue1` · recall → **recognition** · difficulty 2 · `bc-receptor-other.ser-thr`: Protein family phosphorylated by TGF-β receptors that carries the signal to the nucleus → **SMAD**

---

## Items judged SUPPLEMENTARY (shown less often in games)

- `cel-second-messengers:clue2` (depth recognition) — Recall of a specific inotrope name; cAMP and PDE inhibition are core.
- `cel-jak-stat:mcq3` (depth recognition) — Tofacitinib is a specific immunology drug example; the JAK–STAT pathway and JAK2/IL2RG disease are core.
- `cel-jak-stat:mcq4` (depth application) — JAK3-deficient SCID is a less common autosomal recessive form; X-linked (IL2RG) SCID is the core example.
- `cel-jak-stat:mcq8` (depth application) — Reasoning about JAK2-inhibitor therapy is beyond core; JAK2 V617F and polycythemia vera are core.
- `cel-jak-stat:clue1` (depth recognition) — Specific JAK-inhibitor drug name; the JAK–STAT pathway itself is core.
- `cel-other-receptors:tf1` (depth recognition) — Where the thyroid receptor sits before ligand binding is beyond core depth; nuclear-receptor action is core.
- `cel-other-receptors:clue2` (depth recognition) — Terminology (ionotropic) rather than a tested mechanism.
- `cel-hormone-gpcr:mcq5` (depth recognition) — Familial male precocious puberty is a less common disorder; LH acting through Gs/cAMP is core.
- `cel-hormone-gpcr:tf3` (depth recognition) — The PLC arm of PTH signaling is beyond core; PTH → cAMP is core.
- `cel-tgf-beta:mcq1` (depth mechanism) — TGF-β/SMAD signaling and its link to Marfan and Loeys–Dietz syndromes are beyond core depth; Marfan syndrome itself (FBN1, fibrillin-1) is taught as core elsewhere.
- `cel-tgf-beta:mcq2` (depth mechanism) — TGF-β/SMAD signaling and its link to Marfan and Loeys–Dietz syndromes are beyond core depth; Marfan syndrome itself (FBN1, fibrillin-1) is taught as core elsewhere.
- `cel-tgf-beta:tf1` (depth recognition) — TGF-β/SMAD signaling and its link to Marfan and Loeys–Dietz syndromes are beyond core depth; Marfan syndrome itself (FBN1, fibrillin-1) is taught as core elsewhere.
- `cel-tgf-beta:tf2` (depth recognition) — TGF-β/SMAD signaling and its link to Marfan and Loeys–Dietz syndromes are beyond core depth; Marfan syndrome itself (FBN1, fibrillin-1) is taught as core elsewhere.
- `cel-tgf-beta:clue1` (depth recognition) — TGF-β/SMAD signaling and its link to Marfan and Loeys–Dietz syndromes are beyond core depth; Marfan syndrome itself (FBN1, fibrillin-1) is taught as core elsewhere.
- `match:second-messenger-drugs` (depth recognition) — Matches several specific PDE drugs (milrinone, roflumilast); NO, ANP and sildenafil are core but the set as a whole is drug-name recall.

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
