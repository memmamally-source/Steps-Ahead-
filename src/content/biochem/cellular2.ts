import { AI_DRAFT, defineConcepts, type Bundle } from '../define';
import type { CaseItem, Citation, ConnectionGroup, ConnectionsPuzzleItem, MatchItem, OutlineRef, SequenceItem } from '../schema';

/**
 * Biochemistry — Cellular biochemistry, batch 2: cell signaling (G-protein-coupled receptors, second
 * messengers, receptor tyrosine kinases, JAK–STAT, intracellular and ion-channel receptors).
 *
 * Mainstream Step 1 depth. Facts come from OpenStax, MedlinePlus (genetics and drug information) and
 * PubMed abstracts for the toxin, PDE and cGMP mechanisms. Facts that could not be verified were not
 * written (see the change log). Each item carries Step 1 relevance and cognitive depth separately.
 * Original, AI-drafted content: DRAFT, NOT MEDICALLY REVIEWED.
 */

const MS = 'Multisystem Processes & Disorders' as const;
const listed = (area: OutlineRef['area'], section: string): OutlineRef => ({ area, section, listed: true });
const found = (area: OutlineRef['area'], section: string): OutlineRef => ({ area, section, listed: false });
const GEN = 'Genetic, metabolic, and developmental disorders';

const MPG = (path: string, title: string): Citation => ({
  sourceId: 'medlineplus', locator: `MedlinePlus Genetics: ${title}`, url: `https://medlineplus.gov/genetics/${path}/`, checked: 'full-text',
});
const MPD = (id: string, title: string): Citation => ({
  sourceId: 'medlineplus', locator: `MedlinePlus Drug Information: ${title}`, url: `https://medlineplus.gov/druginfo/meds/${id}.html`, checked: 'full-text',
});
const PM = (pmid: number, label: string): Citation => ({
  sourceId: 'pubmed', locator: label, url: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`, ref: `PMID ${pmid}`, checked: 'summary',
});
const OSB = (page: string, title: string): Citation => ({
  sourceId: 'openstax-bio', locator: `OpenStax Biology 2e, ${title}`, url: `https://openstax.org/books/biology-2e/pages/${page}`, checked: 'full-text',
});
const OSA = (page: string, title: string): Citation => ({
  sourceId: 'openstax-ap', locator: `OpenStax Anatomy and Physiology 2e, ${title}`, url: `https://openstax.org/books/anatomy-and-physiology-2e/pages/${page}`, checked: 'full-text',
});

const OS_RECEPTORS = OSB('9-1-signaling-molecules-and-cellular-receptors', '9.1 Signaling Molecules and Cellular Receptors');
const OS_PROPAGATION = OSB('9-2-propagation-of-the-signal', '9.2 Propagation of the Signal');
const AP_HORMONES = OSA('17-2-hormones', '17.2 Hormones');
const AP_NEURONS = OSA('12-5-communication-between-neurons', '12.5 Communication Between Neurons');
const AP_PANCREAS = OSA('17-9-the-endocrine-pancreas', '17.9 The Endocrine Pancreas');
const ADRENERGIC = PM(32473788, 'Motiejunaite J et al. Adrenergic receptors and cardiovascular effects of catecholamines (α1 Gq, α2 Gi, β Gs). Ann Endocrinol (Paris) 2021');
const M2_GI = PM(38384797, 'Kang H et al. M2 receptor–Gi signaling: Gβγ opens GIRK channels in the SA node (negative chronotropy). Front Physiol 2024');
const M3_GQ = PM(12429572, 'An JY et al. M3 receptor → Gq/11 → PLC-β → IP₃-dependent Ca²⁺ release in detrusor contraction. Br J Pharmacol 2002');
const DOPAMINE = PM(27178731, 'Gurevich EV et al. D1/D5 couple to Gs and activate adenylyl cyclase; D2–D4 couple to Gi. Pharmacol Res 2016');
const HISTAMINE = PM(8961278, 'Kühn B et al. H1 receptors activate phospholipase C; H2 receptors raise cAMP. Mol Endocrinol 1996');
const V2_AQP2 = PM(16150901, 'Valenti G et al. Vasopressin V2 receptor → cAMP → aquaporin-2 to the apical membrane. Endocrinology 2005');
const PRESSOR_GQ = PM(12196532, 'Abbey SE, Potter LR. Vasopressin, angiotensin II and endothelin receptors couple to Gq and phospholipase Cβ. J Biol Chem 2002');
const CHOLERA = PM(15204437, 'De Haan L, Hirst TR. Cholera toxin and E. coli heat-labile toxin activate adenylate cyclase, causing diarrhoeal disease (review). Mol Membr Biol 2004');
const CHOLERA_GS = PM(10542136, 'Yan Z et al. Cholera toxin covalently ADP-ribosylates the α subunit of Gs. Mol Cell Biol Res Commun 1999');
const PERTUSSIS = PM(23207763, 'Katada T. The inhibitory G protein Gi identified as the target of pertussis toxin ADP-ribosylation. Biol Pharm Bull 2012');
const NO_SGC = PM(31362687, 'Xiao S et al. NO activates soluble guanylate cyclase → cGMP → protein kinase G; smooth muscle relaxation. Mini Rev Med Chem 2019');
const NATRIURETIC = PM(32444692, 'Goetze JP et al. ANP and BNP act through membrane-bound guanylyl cyclase receptors (cGMP). Nat Rev Cardiol 2020');
const SILDENAFIL = PM(9628660, 'Chuang AT et al. Sildenafil, a PDE5 inhibitor, amplifies NO–cGMP relaxation of corpus cavernosum. J Urol 1998');
const MILRINONE = PM(17059376, 'Endoh M. PDE3 inhibitors (milrinone) act via cAMP/PKA; inotropic and vasodilator effects. Expert Opin Pharmacother 2006');
const ROFLUMILAST = PM(20689641, 'Giembycz MA, Field SK. Roflumilast: first PDE4 inhibitor approved for COPD. Drug Des Devel Ther 2010');
const THEOPHYLLINE = PM(27713276, 'Barnes PJ. Theophylline: PDE inhibition (bronchodilation); adenosine A1 antagonism at high levels. Pharmaceuticals (Basel) 2010');
const THEO_SEIZURE = PM(10874349, 'Gupta YK, Malhotra J. Theophylline seizures in rats: mechanism unknown; adenosine and an A1 agonist did not protect. Indian J Physiol Pharmacol 1998');

// Revision 1 sources.
const GHRH_GS = PM(7740167, 'Mayo KE et al. GHRH acts through a seven-transmembrane Gs-coupled receptor: cAMP → PKA → CREB; GH release also involves G-protein effects on ion channels. Recent Prog Horm Res 1995');
const SOMATOTROPH = PM(41824769, 'Ben-Shlomo A, Melmed S. Somatotroph adenomas: GHRH receptor signaling; excess GH causes acromegaly. J Clin Endocrinol Metab 2026');
const ACTH_CAMP = PM(27065945, 'Ruggiero C, Lalli E. ACTH → MC2R → adenylyl cyclase → cAMP/PKA → steroidogenesis. Front Endocrinol (Lausanne) 2016');
const LH_GS = PM(8734448, 'Clayton RN. Gonadotrophin receptors: the LH receptor couples to Gs; activating mutations cause familial male precocious puberty. Baillieres Clin Endocrinol Metab 1996');
const GLYCO_GS = PM(30023464, 'Kim JM et al. Glycoprotein hormone receptors such as the FSH receptor couple to Gs → adenylyl cyclase → cAMP. Dev Reprod 2018');
const PTH_RECEPTOR = PM(10856878, 'Esbrit P et al. PTH and PTHrP share the type 1 PTH/PTHrP receptor, activating adenylate cyclase and phospholipase C. J Endocrinol 2000');
const PTH_PKA = PM(19395963, 'Lee M, Partridge NC. PTH signaling in bone and kidney through protein kinase A and protein kinase C. Curr Opin Nephrol Hypertens 2009');
const GNRH_GQ = PM(9465287, 'Naor Z et al. The GnRH receptor couples to Gq: PLC → IP₃ (Ca²⁺) and DAG (PKC). Front Neuroendocrinol 1998');
const GNRH_LHFSH = PM(10573034, 'Ortmann O, Diedrich K. GnRH receptor → Gq/G11 → PLC → DAG/PKC and IP₃/Ca²⁺ → LH and FSH secretion. Hum Reprod 1999');
const TRH_GQ = PM(8772588, 'Dong Q et al. TRH receptor → Gq/PLCβ/Ca²⁺/PKC; activating Gsα mutations in ~40% of somatotroph tumors. J Clin Endocrinol Metab 1996');
const OXYTOCIN_GQ = PM(11274341, 'Gimpl G, Fahrenholz F. The oxytocin receptor couples mainly via Gq to phospholipase Cβ. Physiol Rev 2001');
const MYOMETRIUM = PM(9699174, 'Phillippe M, Chien EK. Uterotonic GPCRs (including oxytocin) act through Gq/PLCβ in myometrium. J Soc Gynecol Investig 1998');
const CHOLERA_CFTR = PM(40168442, 'Liu J et al. Cholera toxin raises cAMP; PKA phosphorylates CFTR → Cl⁻ efflux and water secretion into the gut lumen. PLoS Pathog 2025');
const CHOLERA_CL = PM(25188334, 'Pongkorpsakol P et al. cAMP-activated CFTR chloride secretion in the pathogenesis of cholera. PLoS Negl Trop Dis 2014');
const INSULIN_PI3K = PM(18171430, 'Ishikura S et al. Insulin → IR–IRS–PI3K → Akt → GLUT4 translocation in muscle and fat. Acta Physiol (Oxf) 2008');
const GLUT4_AKT = PM(24075894, 'Aoi W et al. Insulin-stimulated GLUT4 membrane translocation in muscle depends on PI3K/Akt. Free Radic Biol Med 2013');
const RET_RTK = PM(15982921, 'Arighi E et al. RET receptor tyrosine kinase: MEN2 mutations potentiate its intrinsic kinase activity. Cytokine Growth Factor Rev 2005');
const MEN2 = PM(40102258, 'Frank-Raue K, Raue F. MEN2: autosomal dominant gain-of-function RET variants; MEN2A and MEN2B phenotypes. Recent Results Cancer Res 2025');
const HER2_RTK = PM(39039196, 'Yoon J, Oh DY. HER2 (ErbB2) is a receptor tyrosine kinase targeted in breast and gastric cancer with HER2 overexpression or ERBB2 amplification. Nat Rev Clin Oncol 2024');
const HER2_DRUGS = PM(31548601, 'Oh DY, Bang YJ. HER2-targeted therapies (trastuzumab and others) in HER2-positive breast and gastric cancer. Nat Rev Clin Oncol 2020');
const GH_JAK = PM(12099386, 'Piwien-Pilipuk G et al. Growth hormone receptor → JAK2 → STATs, MAPK and PI3K. J Pediatr Endocrinol Metab 2002');
const GH_STAT5 = PM(23182823, 'Waters MJ, Brooks AJ. GH acts mainly through JAK2 activation of STAT5, which induces IGF-1. Endocr Dev 2012');
const PRL_JAK = PM(39476210, 'Chasseloup F et al. The prolactin receptor signals mainly through JAK2/STAT5. Rev Endocr Metab Disord 2024');
const EPO_JAK = PM(34281163, 'Tóthová Z et al. EPOR–JAK2–STAT5 is the canonical erythropoietin pathway for erythroid progenitors. Int J Mol Sci 2021');
const STAT_DIMER = PM(16426581, 'Valentino L, Pierre J. JAKs phosphorylate STATs, which dimerize, enter the nucleus and regulate transcription. Biochem Pharmacol 2006');
const GABA_A = PM(7545236, 'Lüddens H, Korpi ER. GABA-A receptors open an intrinsic anion channel; benzodiazepine sites. J Psychiatr Res 1995');
const GABA_CL = PM(9702060, 'Hashimoto T. GABA-A receptors are ligand-gated Cl⁻ channels with benzodiazepine and barbiturate sites. Nihon Rinsho 1998');
const NMDA = PM(16719808, 'Schrattenholz A, Soskic V. NMDA receptors are ligand-gated Ca²⁺ channels with a voltage-dependent Mg²⁺ block; excitotoxicity. Curr Top Med Chem 2006');
const HT3 = PM(18761359, 'Barnes NM et al. The 5-HT3 receptor is a cation-selective Cys-loop ion channel. Neuropharmacology 2009');
const HT3_ANTIEMETIC = PM(14965242, 'Costall B, Naylor RJ. 5-HT3 antagonists prevent chemotherapy-, radiotherapy- and postoperative emesis. Curr Drug Targets CNS Neurol Disord 2004');
const CYS_LOOP = PM(20849671, 'Thompson AJ et al. Cys-loop receptors (nACh, 5-HT3, GABA-A, glycine) mediate fast synaptic transmission. Q Rev Biophys 2010');
const VDR = PM(10444570, 'Brown AJ et al. Calcitriol binds the vitamin D receptor, which pairs with RXR and binds DNA. Am J Physiol 1999');
const SMADS = PM(10605817, 'Hill CS. Type I serine/threonine kinase receptors phosphorylate R-SMADs, which join the common-mediator SMAD and enter the nucleus. Int J Biochem Cell Biol 1999');
const TGFB_RECEPTORS = PM(11752591, 'Wrana JL. TGF-β family ligands signal through type II and type I serine/threonine kinase receptors and SMADs. Sci STKE 2000');

const GP = 'bc-gpcr';
const SM = 'bc-second-messengers';
const RT = 'bc-rtk';
const JS = 'bc-jak-stat';
const RO = 'bc-receptor-other';

const core = defineConcepts([
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-gpcr',
    relevance: 'core',
    title: 'G-protein-coupled receptors: Gs, Gi and Gq',
    discipline: 'biochemistry',
    alsoDisciplines: ['pharmacology', 'physiology'],
    system: 'multisystem',
    topic: 'biochem-cellular',
    difficulty: 2,
    curriculum: [`${GP}.cycle`, `${GP}.classes`, `${GP}.receptors`],
    objectives: ['Describe the G-protein cycle', 'Explain Gs, Gi and Gq signaling', 'Assign high-yield receptors to their G protein'],
    citations: [OS_RECEPTORS, OS_PROPAGATION, AP_HORMONES, ADRENERGIC, M2_GI, M3_GQ, DOPAMINE, HISTAMINE, V2_AQP2, PRESSOR_GQ],
    facts: [
      'G-protein-coupled receptors have seven transmembrane domains. Ligand binding makes the α subunit release GDP and bind GTP; α and βγ then separate and act on effectors; GTP hydrolysis to GDP ends the signal and the subunits reassociate.',
      'Gs activates adenylyl cyclase, which makes cAMP from ATP; cAMP activates protein kinase A; phosphodiesterase ends the signal by converting cAMP to AMP.',
      'Phospholipase C cleaves PIP₂ into IP₃ and DAG: IP₃ releases Ca²⁺ from the ER and DAG activates protein kinase C.',
      'α1 receptors couple to Gq (phospholipase C; vascular and urinary smooth muscle constriction); α2 receptors couple to Gi (less cAMP); β1 and β2 receptors activate the Gs–adenylyl cyclase–cAMP–PKA cascade.',
      'M2 receptors couple to Gi: in the SA node, released Gβγ opens K⁺ channels and slows the heart. M3 receptors couple to Gq: PLC → IP₃ → Ca²⁺ release, contracting smooth muscle such as the detrusor.',
      'D1 receptors couple to Gs and activate adenylyl cyclase; D2 receptors couple to Gi and inhibit it. H1 receptors activate phospholipase C; H2 receptors raise cAMP.',
      'Vasopressin V2 receptors raise cAMP, sending aquaporin-2 to the apical membrane of collecting duct cells; vasopressin (V1), angiotensin II and endothelin receptors couple to Gq and phospholipase C.',
      'Glucagon, TSH and calcitonin use cAMP as their second messenger; angiotensin II uses Ca²⁺.',
    ],
    factRefs: [[0], [1, 2], [1, 2], [3], [4, 5], [6, 7], [8, 9], [2]],
    mechanism:
      'The receptor is a switch for the G protein: ligand binding swaps GDP for GTP on Gα. Gs then turns adenylyl cyclase on (more cAMP, PKA), Gi turns it down (and its βγ can open K⁺ channels), and Gq turns on phospholipase C (IP₃ releases Ca²⁺, DAG activates PKC). Gα’s own GTPase activity switches the signal off.',
    associations: ['Seven transmembrane domains', 'GDP–GTP exchange', 'Gs', 'Gi', 'Gq', 'Adenylyl cyclase', 'Phospholipase C', 'α1', 'α2', 'β1', 'β2', 'M2', 'M3', 'D1', 'D2', 'H1', 'H2', 'V1', 'V2'],
    misconception:
      'Gi does not “turn on an inhibitor”: it lowers cAMP by inhibiting adenylyl cyclase, and its βγ subunit can open K⁺ channels (as in the SA node).',
    quick:
      'Gs → adenylyl cyclase ↑ → cAMP → PKA (β1, β2, D1, H2, V2; glucagon, TSH, calcitonin). Gi → adenylyl cyclase ↓ (α2, M2, D2). Gq → phospholipase C → IP₃ (Ca²⁺) + DAG (PKC) (α1, M3, H1, V1, angiotensin II). GTP hydrolysis ends the signal.',
    detailed: [
      'G-protein-coupled receptors span the membrane seven times. The bound heterotrimeric G protein (α, β, γ) exchanges GDP for GTP when the ligand binds, separates into α-GTP and βγ, and activates effectors until GTP is hydrolyzed.',
      'The three high-yield pathways differ by their effector. Gs stimulates adenylyl cyclase, raising cAMP and activating PKA; Gi inhibits adenylyl cyclase and, through βγ, opens K⁺ channels; Gq activates phospholipase C, producing IP₃ (Ca²⁺ release from the ER) and DAG (protein kinase C). Knowing which G protein a receptor uses predicts its effect: α1 constricts vessels, β1 increases heart rate and contractility, M2 slows the heart, V2 inserts aquaporin-2.',
    ],
    takeaway: 'Gs ↑cAMP, Gi ↓cAMP, Gq → IP₃/Ca²⁺ + DAG/PKC; GTP hydrolysis switches the G protein off.',
    related: ['cel-second-messengers', 'cel-gpcr-toxins'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A G protein’s α subunit is mutated so that it binds GTP normally but cannot hydrolyze it. What happens to signaling after the receptor is stimulated once?',
        options: [
          ['a', 'The α subunit stays active, so the signal persists'],
          ['b', 'The receptor can no longer bind its ligand', 'Ligand binding is a property of the receptor, not of GTP hydrolysis.'],
          ['c', 'The α subunit cannot release GDP', 'GDP release and GTP binding are normal in this mutant; hydrolysis is the problem.'],
          ['d', 'βγ and α remain bound together permanently', 'With GTP bound, α and βγ separate; they reassociate only after hydrolysis.'],
          ['e', 'cAMP is degraded faster by phosphodiesterase', 'Phosphodiesterase is not affected by the G-protein mutation.'],
        ],
        answer: 'a',
        mini: 'GTP hydrolysis by Gα is the off switch. If it cannot happen, the G protein stays active and keeps signaling.',
        reasoning: 'mechanism',
        objectives: [`${GP}.cycle`],
        difficulty: 2,
      },
      {
        stem: 'A drug activates receptors that couple to Gq. Which intracellular events follow?',
        options: [
          ['a', 'Phospholipase C makes IP₃ and DAG, raising Ca²⁺'],
          ['b', 'Adenylyl cyclase is inhibited and cAMP falls', 'That is Gi signaling, used by α2, M2 and D2 receptors.'],
          ['c', 'Adenylyl cyclase is stimulated and PKA is activated', 'That is Gs signaling, used by β1, β2, D1 and V2 receptors.'],
          ['d', 'Soluble guanylyl cyclase makes cGMP', 'Soluble guanylyl cyclase is activated by nitric oxide, not Gq.'],
          ['e', 'The receptor dimerizes and phosphorylates tyrosines', 'Dimerization and tyrosine phosphorylation describe receptor tyrosine kinases.'],
        ],
        answer: 'a',
        mini: 'Gq → phospholipase C → PIP₂ split into IP₃ (releases ER Ca²⁺) and DAG (activates protein kinase C).',
        reasoning: 'mechanism',
        objectives: [`${GP}.classes`],
        difficulty: 2,
      },
      {
        stem: 'A patient receives an infusion of a drug that selectively activates α1-adrenergic receptors. Which response and pathway are expected?',
        options: [
          ['a', 'Vasoconstriction through Gq and phospholipase C'],
          ['b', 'Vasodilation through Gs and cAMP', 'β2 receptors (Gs) dilate vessels; α1 receptors constrict them.'],
          ['c', 'Slower heart rate through Gi and K⁺ channels', 'That describes M2 receptors in the SA node.'],
          ['d', 'Aquaporin-2 insertion through Gs', 'That is the vasopressin V2 receptor in the collecting duct.'],
          ['e', 'Reduced cAMP through Gi', 'That is the α2 receptor, which lowers cAMP through Gi.'],
        ],
        answer: 'a',
        mini: 'α1 receptors couple to Gq: phospholipase C → IP₃ → Ca²⁺ → smooth muscle contraction (vasoconstriction).',
        reasoning: 'mechanism',
        objectives: [`${GP}.receptors`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'G-protein-coupled receptors have seven transmembrane domains.', isTrue: true, correction: 'Correct: all G-protein-linked receptors span the membrane seven times.', objectives: [`${GP}.cycle`], difficulty: 1 },
      { statement: 'β1-adrenergic receptors in the heart couple to Gi and lower cAMP.', isTrue: false, correction: 'β1 receptors couple to Gs: adenylyl cyclase → cAMP → PKA → increased rate and contractility.', objectives: [`${GP}.receptors`], difficulty: 1 },
      { statement: 'M2 muscarinic receptors in the SA node couple to Gi and slow the heart.', isTrue: true, correction: 'Correct: Gβγ opens K⁺ channels, slowing pacemaker firing.', objectives: [`${GP}.receptors`], difficulty: 2 },
    ],
    clues: [
      { answer: 'ADENYLYL', clue: 'Cyclase that Gs stimulates and Gi inhibits (first word)', objectives: [`${GP}.classes`], difficulty: 2 },
      { answer: 'GTPASE', clue: 'Activity of Gα that switches the signal off', objectives: [`${GP}.cycle`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-gpcr-toxins',
    relevance: 'core',
    title: 'Toxins that hijack G proteins: cholera, E. coli LT and pertussis',
    discipline: 'microbiology',
    alsoDisciplines: ['biochemistry'],
    system: 'multisystem',
    alsoSystems: ['gastrointestinal', 'respiratory'],
    topic: 'biochem-cellular',
    difficulty: 3,
    curriculum: [`${GP}.toxins`],
    objectives: ['Explain how cholera, heat-labile E. coli and pertussis toxins alter G-protein signaling'],
    citations: [CHOLERA, CHOLERA_GS, PERTUSSIS, OS_RECEPTORS, CHOLERA_CFTR, CHOLERA_CL],
    facts: [
      'Cholera toxin (Vibrio cholerae) and the related heat-labile enterotoxin of E. coli enter intestinal cells and modify intracellular targets, activating adenylate cyclase and causing life-threatening diarrhoeal disease.',
      'Cholera toxin covalently ADP-ribosylates the α subunit of Gs.',
      'Pertussis toxin ADP-ribosylates Gi, uncoupling receptors from adenylyl cyclase inhibition, so receptor-mediated lowering of cAMP is lost.',
      'Bacterial toxins that interrupt G-protein-linked receptor function cause illnesses such as pertussis and cholera.',
      'In cholera, raised cAMP activates PKA, which phosphorylates the CFTR chloride channel on intestinal epithelial cells; chloride flows into the lumen and water follows, causing rapid fluid loss.',
    ],
    factRefs: [[0], [1], [2], [3], [4, 5]],
    mechanism:
      'Both toxins use ADP-ribosylation to raise cAMP, by opposite routes. Cholera toxin locks Gs in the “on” state, so adenylyl cyclase keeps making cAMP in intestinal cells, which pour out fluid. Pertussis toxin disables Gi, the brake on adenylyl cyclase, so cAMP is no longer lowered when inhibitory receptors are stimulated.',
    associations: ['Cholera toxin', 'Heat-labile toxin (LT)', 'Pertussis toxin', 'ADP-ribosylation', 'Gs', 'Gi', 'cAMP'],
    misconception:
      'Pertussis toxin does not activate Gs: it inactivates Gi. The result (higher cAMP) resembles cholera toxin, but the target is the inhibitory G protein.',
    quick:
      'Cholera toxin and E. coli LT: ADP-ribosylate Gsα → Gs stays on → ↑ cAMP → massive watery diarrhea. Pertussis toxin: ADP-ribosylates Gi → Gi cannot inhibit adenylyl cyclase → ↑ cAMP.',
    detailed: [
      'Cholera toxin and E. coli heat-labile toxin are A–B toxins: the B part binds and the A part enters the cytosol and ADP-ribosylates Gsα. Adenylyl cyclase is persistently activated, cAMP rises, and the intestine secretes large volumes of fluid.',
      'Pertussis toxin ADP-ribosylates Gi, preventing inhibitory receptors from lowering cAMP. Both toxins are classic examples of how a single covalent modification of a G protein produces disease.',
    ],
    takeaway: 'Cholera/LT switch Gs on; pertussis switches Gi off; both raise cAMP.',
    related: ['cel-gpcr'],
    outline: listed(MS, 'Infectious, immunologic, and inflammatory disorders, including microbiologic and host response to insult'),
    mcq: [
      {
        stem: 'Why does cholera toxin cause persistently high cAMP in intestinal epithelial cells?',
        options: [
          ['a', 'It ADP-ribosylates Gsα, keeping adenylyl cyclase switched on'],
          ['b', 'It ADP-ribosylates Gi so that adenylyl cyclase is not inhibited', 'That is the action of pertussis toxin.'],
          ['c', 'It inhibits phosphodiesterase so cAMP is not degraded', 'Cholera toxin acts on the G protein, not on phosphodiesterase.'],
          ['d', 'It ADP-ribosylates elongation factor 2', 'EF-2 is the target of diphtheria toxin and Pseudomonas exotoxin A.'],
          ['e', 'It activates soluble guanylyl cyclase', 'Soluble guanylyl cyclase is activated by nitric oxide.'],
        ],
        answer: 'a',
        mini: 'Cholera toxin ADP-ribosylates Gsα; Gs stays active, adenylyl cyclase keeps making cAMP and the gut secretes fluid.',
        reasoning: 'mechanism',
        difficulty: 2,
      },
      {
        stem: 'Toxin A and toxin B both raise cAMP in cultured cells. Toxin A still raises cAMP when only stimulatory (Gs-coupled) pathways are present. Toxin B raises cAMP only when an inhibitory (Gi-coupled) receptor is being stimulated. Which pairing fits?',
        options: [
          ['a', 'A cholera toxin (acts on Gs); B pertussis toxin (acts on Gi)'],
          ['b', 'A pertussis toxin (acts on Gs); B cholera toxin (acts on Gi)', 'Reversed: cholera toxin targets Gs, pertussis toxin targets Gi.'],
          ['c', 'A and B both act on phosphodiesterase', 'Neither toxin acts on phosphodiesterase.'],
          ['d', 'A diphtheria toxin; B cholera toxin', 'Diphtheria toxin targets EF-2 and does not raise cAMP.'],
          ['e', 'A pertussis toxin; B heat-labile E. coli toxin', 'Heat-labile toxin acts like cholera toxin, on Gs.'],
        ],
        answer: 'a',
        mini: 'Cholera toxin keeps Gs on regardless of other inputs. Pertussis toxin only matters when Gi is trying to lower cAMP, because it removes that brake.',
        reasoning: 'interpretation',
        steps: ['Toxin A raises cAMP through the stimulatory pathway alone → it activates Gs (cholera toxin).', 'Toxin B matters only when Gi is active → it disables the inhibitory G protein.', 'Pertussis toxin ADP-ribosylates Gi.'],
        difficulty: 3,
      },
      {
        stem: 'In cholera, cAMP rises in intestinal epithelial cells. Which channel then secretes the chloride that draws water into the gut lumen?',
        options: [
          ['a', 'CFTR, opened by PKA phosphorylation'],
          ['b', 'Aquaporin-2, inserted by vasopressin', 'Aquaporin-2 reabsorbs water in the renal collecting duct; it is not the intestinal chloride channel.'],
          ['c', 'The epithelial sodium channel (ENaC)', 'ENaC absorbs sodium; cholera causes chloride secretion through CFTR.'],
          ['d', 'The Na⁺/K⁺-ATPase pumping chloride out', 'The Na⁺/K⁺-ATPase moves sodium and potassium, not chloride.'],
          ['e', 'A ligand-gated chloride channel opened by GABA', 'GABA-A channels are neuronal; intestinal chloride secretion uses CFTR.'],
        ],
        answer: 'a',
        mini: 'Cholera toxin → Gsα stuck on → cAMP → PKA phosphorylates CFTR → Cl⁻ secreted into the lumen, water follows → watery diarrhea.',
        reasoning: 'mechanism',
        objectives: [`${GP}.toxins`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'Pertussis toxin ADP-ribosylates the inhibitory G protein Gi.', isTrue: true, correction: 'Correct: Gi can no longer inhibit adenylyl cyclase, so cAMP rises.', difficulty: 1 },
      { statement: 'In cholera, PKA opens the CFTR chloride channel, and water follows the secreted chloride into the gut.', isTrue: true, correction: 'Correct: cAMP-activated chloride secretion through CFTR drives the fluid loss.', objectives: [`${GP}.toxins`], difficulty: 1 },
    ],
    clues: [
      { answer: 'PERTUSSIS', clue: 'Toxin that ADP-ribosylates Gi', difficulty: 1 },
      { answer: 'CFTR', clue: 'Chloride channel that PKA opens in cholera (abbreviation)', objectives: [`${GP}.toxins`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-mccune-albright',
    relevance: 'core',
    title: 'McCune–Albright syndrome (activating GNAS)',
    discipline: 'genetics',
    alsoDisciplines: ['biochemistry'],
    system: 'endocrine',
    alsoSystems: ['musculoskeletal-skin'],
    topic: 'biochem-cellular',
    difficulty: 3,
    curriculum: [`${GP}.mccune-albright`],
    objectives: ['Explain how a mosaic activating Gsα mutation causes McCune–Albright syndrome'],
    citations: [MPG('condition/mccune-albright-syndrome', 'McCune-Albright syndrome'), MPG('gene/gnas', 'GNAS gene')],
    facts: [
      'GNAS encodes the stimulatory α subunit of a G protein (Gsα) that stimulates adenylate cyclase.',
      'In McCune–Albright syndrome, GNAS mutations make adenylate cyclase constantly active, leading to overproduction of several hormones.',
      'The mutation is somatic and arises very early in development, so only some cells carry it (mosaicism); it is not inherited.',
      'Features include polyostotic fibrous dysplasia, café-au-lait spots with irregular (“coast of Maine”) borders, often on one side, early puberty in girls, and other endocrine hyperfunction (hyperthyroidism in about half, excess growth hormone, rarely Cushing syndrome).',
    ],
    factRefs: [[1], [1], [1, 0], [0]],
    mechanism:
      'A Gsα that cannot switch off keeps adenylyl cyclase active, so cAMP-driven tissues (bone, skin melanocytes, endocrine glands) overact. Because the mutation is mosaic, only the tissues carrying it are affected — which explains the patchy, often one-sided pattern.',
    associations: ['GNAS', 'Gsα', 'Mosaicism', 'Polyostotic fibrous dysplasia', 'Café-au-lait spots', 'Precocious puberty', 'Hyperthyroidism'],
    misconception:
      'McCune–Albright syndrome is not passed to children in the usual way: the mutation arises after conception, and a germline (whole-body) activating mutation is thought to be incompatible with survival.',
    quick:
      'Mosaic, postzygotic activating GNAS (Gsα) mutation → constant cAMP → polyostotic fibrous dysplasia + irregular café-au-lait spots + endocrine hyperfunction (precocious puberty, hyperthyroidism, GH excess).',
    detailed: [
      'Gsα normally switches itself off by hydrolyzing GTP. The McCune–Albright mutations leave adenylyl cyclase constantly active, raising cAMP in the tissues that carry the mutation.',
      'Because the mutation occurs early in embryonic development, it is present in a mosaic pattern. The classic triad is polyostotic fibrous dysplasia, café-au-lait spots with irregular borders and endocrine overactivity such as precocious puberty.',
    ],
    takeaway: 'McCune–Albright = mosaic Gsα gain of function: bone + skin + hormone excess.',
    related: ['cel-gpcr'],
    outline: found('Endocrine System', 'Disorders of the pituitary gland and hypothalamus'),
    mcq: [
      {
        stem: 'A 6-year-old girl has breast development and vaginal bleeding, several large café-au-lait spots with jagged borders on one side of her trunk, and a leg fracture through a bone lesion. Why does she have overactive endocrine glands?',
        options: [
          ['a', 'A mosaic Gsα mutation keeps adenylyl cyclase constantly active'],
          ['b', 'An inherited loss of Gi removes the brake on adenylyl cyclase', 'The disorder is caused by an activating Gsα mutation, not loss of Gi, and is not inherited.'],
          ['c', 'Autoantibodies stimulate the TSH receptor', 'Stimulating antibodies explain Graves disease, not bone lesions and café-au-lait spots.'],
          ['d', 'Loss of NF1 activates RAS in every cell', 'Neurofibromatosis causes café-au-lait spots with smooth borders and neurofibromas.'],
          ['e', 'A gonadotropin-secreting pituitary tumor', 'A tumor would not explain fibrous dysplasia and patchy skin pigmentation.'],
        ],
        answer: 'a',
        mini: 'Precocious puberty + irregular café-au-lait spots + fibrous dysplasia = McCune–Albright syndrome: a somatic, mosaic activating GNAS mutation keeps Gs (and cAMP) switched on.',
        reasoning: 'identification',
        difficulty: 2,
      },
      {
        stem: 'Why is McCune–Albright syndrome patchy, affecting some bones and only one side of the skin?',
        options: [
          ['a', 'The GNAS mutation arose after conception, so only some cells carry it'],
          ['b', 'The mutation is X-linked, so random X-inactivation causes patches', 'GNAS is not on the X chromosome; the patchiness reflects somatic mosaicism.'],
          ['c', 'cAMP diffuses only short distances in tissues', 'The pattern reflects which cells carry the mutation, not cAMP diffusion.'],
          ['d', 'Only some tissues express any G proteins', 'G proteins are present in almost all cells.'],
          ['e', 'The mutation is reversed in half the body', 'Mutations are not reversed; they are absent from cells that did not inherit them.'],
        ],
        answer: 'a',
        mini: 'Mosaicism: the mutation occurs early in embryonic development, so only descendants of that cell carry it.',
        reasoning: 'mechanism',
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'McCune–Albright syndrome is usually inherited in an autosomal dominant pattern.', isTrue: false, correction: 'It results from a somatic mutation early in development (mosaicism) and is not inherited.', difficulty: 2 },
    ],
    clues: [
      { answer: 'GNAS', clue: 'Gene for Gsα activated in McCune–Albright syndrome', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-second-messengers',
    relevance: 'core',
    title: 'cAMP, IP₃/DAG/Ca²⁺ and phosphodiesterase inhibitors',
    discipline: 'biochemistry',
    alsoDisciplines: ['pharmacology'],
    system: 'multisystem',
    alsoSystems: ['respiratory', 'cardiovascular'],
    topic: 'biochem-cellular',
    difficulty: 2,
    curriculum: [`${SM}.camp`, `${SM}.ip3-dag`],
    objectives: ['Explain cAMP signaling and its termination by phosphodiesterases, and recognize PDE inhibitors', 'Explain IP₃, Ca²⁺–calmodulin and DAG–PKC signaling'],
    citations: [OS_PROPAGATION, AP_HORMONES, MILRINONE, ROFLUMILAST, THEOPHYLLINE, M3_GQ, THEO_SEIZURE],
    facts: [
      'Adenylyl cyclase makes cAMP from ATP; cAMP activates cAMP-dependent protein kinase (PKA); phosphodiesterase converts cAMP to AMP, which keeps cAMP signals short.',
      'Phospholipase C cleaves PIP₂ into DAG and IP₃. DAG stays in the membrane and activates protein kinase C; IP₃ opens Ca²⁺ channels in the endoplasmic reticulum.',
      'Released Ca²⁺ acts directly or binds calmodulin, which then regulates protein kinases.',
      'PDE3 inhibitors (milrinone) raise cAMP and PKA activity, increasing cardiac contractility and dilating vessels (“inodilators”).',
      'Roflumilast is a selective PDE4 inhibitor used in severe COPD.',
      'Theophylline relaxes bronchi by inhibiting phosphodiesterases and also antagonizes adenosine receptors; adenosine A1 antagonism is proposed to contribute to its high-level side effects such as arrhythmias and seizures.',
      'Seizures are a major theophylline toxicity, but their mechanism is not established: in rats, adenosine and an adenosine A1 agonist did not prevent them, so adenosine antagonism is unlikely to be the whole explanation.',
    ],
    factRefs: [[0, 1], [0, 1], [1], [2], [3], [4], [6]],
    mechanism:
      'Second messengers amplify a receptor signal inside the cell. cAMP activates PKA until phosphodiesterase destroys it, so blocking a phosphodiesterase prolongs and strengthens cAMP signals. IP₃ and DAG are made together: IP₃ raises cytosolic Ca²⁺ (often acting through calmodulin) and DAG activates PKC.',
    associations: ['cAMP', 'PKA', 'Phosphodiesterase', 'Milrinone (PDE3)', 'Roflumilast (PDE4)', 'Theophylline', 'IP₃', 'DAG', 'PKC', 'Calmodulin'],
    misconception:
      'Phosphodiesterase inhibitors do not stimulate receptors: they slow the breakdown of cAMP (or cGMP), so whatever signal is present lasts longer.',
    quick:
      'cAMP → PKA; PDE breaks cAMP → AMP. PDE inhibitors: milrinone (PDE3, heart: inotropy + vasodilation), roflumilast (PDE4, COPD), theophylline (bronchodilator; toxicity: arrhythmia, seizures). Gq/PLC → IP₃ (ER Ca²⁺ → calmodulin) + DAG (PKC).',
    detailed: [
      'Water-soluble hormones act through second messengers. The cAMP system is the most common: adenylyl cyclase makes cAMP, cAMP activates PKA, and phosphodiesterases end the signal. PDE3 inhibition in heart and vessels (milrinone) increases contractility and causes vasodilation; PDE4 inhibition (roflumilast) is used in COPD; theophylline is a bronchodilator with a narrow margin of safety.',
      'In the calcium system, phospholipase C cleaves PIP₂ into IP₃ and DAG. IP₃ releases Ca²⁺ from the ER; Ca²⁺ can act directly or through calmodulin. DAG activates PKC. Angiotensin II is an example of a hormone using calcium as a second messenger.',
    ],
    takeaway: 'cAMP → PKA, ended by PDE (PDE inhibitors prolong it). PLC → IP₃ (Ca²⁺) + DAG (PKC).',
    related: ['cel-gpcr', 'cel-cgmp'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A patient with severe acute heart failure is given milrinone. Why do both cardiac contractility and vasodilation increase?',
        options: [
          ['a', 'It blocks PDE3, so cAMP rises'],
          ['b', 'It activates β1 receptors directly', 'Milrinone acts beyond the receptor, on phosphodiesterase 3.'],
          ['c', 'It inhibits the Na⁺/K⁺-ATPase', 'That is digoxin, a cardiac glycoside, not a PDE inhibitor.'],
          ['d', 'It raises cGMP by inhibiting PDE5', 'PDE5 inhibition (sildenafil) acts on cGMP, mainly in vascular smooth muscle.'],
          ['e', 'It releases nitric oxide from endothelium', 'Nitrates release NO; milrinone is a PDE3 inhibitor.'],
        ],
        answer: 'a',
        mini: 'Milrinone blocks PDE3, so cAMP and PKA activity rise: more contractile force in the heart and relaxation in vascular smooth muscle (an “inodilator”).',
        reasoning: 'mechanism',
        objectives: [`${SM}.camp`],
        difficulty: 2,
      },
      {
        stem: 'A man with asthma takes theophylline. After an extra dose taken by mistake, he develops a rapid irregular heartbeat and then a seizure. Besides phosphodiesterase inhibition, which action of theophylline is thought to contribute to this toxicity?',
        options: [
          ['a', 'Adenosine receptor antagonism'],
          ['b', 'Excess PDE5 inhibition causing hypotension', 'Theophylline toxicity is not explained by PDE5 inhibition; adenosine receptor antagonism is one proposed contributor.'],
          ['c', 'Cholinergic stimulation of the heart', 'Theophylline is not a cholinergic agonist.'],
          ['d', 'Opening of K⁺ channels by Gβγ', 'Gβγ-gated K⁺ channels slow the heart; they do not cause seizures.'],
          ['e', 'Inhibition of ribonucleotide reductase', 'That is the action of hydroxyurea.'],
        ],
        answer: 'a',
        mini: 'Theophylline inhibits phosphodiesterases and blocks adenosine receptors. Its toxicity (arrhythmias, seizures) likely has several mechanisms; adenosine antagonism is one proposed contributor, and the seizure mechanism is not fully established.',
        reasoning: 'mechanism',
        objectives: [`${SM}.camp`],
        difficulty: 2,
      },
      {
        stem: 'Acetylcholine contracts bladder (detrusor) smooth muscle through M3 receptors. Which messenger directly releases Ca²⁺ from intracellular stores in this response?',
        options: [
          ['a', 'IP₃'],
          ['b', 'DAG', 'DAG stays in the membrane and activates protein kinase C.'],
          ['c', 'cAMP', 'cAMP is the Gs pathway messenger and activates PKA.'],
          ['d', 'cGMP', 'cGMP is made by guanylyl cyclases and relaxes smooth muscle.'],
          ['e', 'Calmodulin', 'Calmodulin binds Ca²⁺ after it is released.'],
        ],
        answer: 'a',
        mini: 'M3 → Gq → phospholipase C → IP₃, which opens ER Ca²⁺ channels; the Ca²⁺ then drives contraction.',
        reasoning: 'mechanism',
        objectives: [`${SM}.ip3-dag`],
        difficulty: 2,
      },
      {
        stem: 'In cardiogenic shock, a β1-adrenergic agonist and milrinone are given together. Why do their effects on contractility add to each other?',
        options: [
          ['a', 'One makes more cAMP; the other slows its breakdown'],
          ['b', 'Both block phosphodiesterase 3 at different sites', 'The β1 agonist acts on a receptor; only milrinone inhibits PDE3.'],
          ['c', 'Both raise cGMP in cardiac muscle', 'Both act through cAMP, not cGMP.'],
          ['d', 'Milrinone increases β1 receptor number', 'Milrinone acts beyond the receptor, on phosphodiesterase 3.'],
          ['e', 'The β1 agonist inhibits the Na⁺/K⁺-ATPase', 'That is the action of digoxin; β1 agonists act through Gs.'],
        ],
        answer: 'a',
        mini: 'β1 agonist → Gs → adenylyl cyclase → more cAMP; milrinone blocks PDE3 → less cAMP breakdown. Together cAMP and PKA activity rise further, increasing contractility.',
        reasoning: 'prediction',
        objectives: [`${SM}.camp`],
        steps: ['The β1 receptor activates Gs and adenylyl cyclase, so cAMP synthesis rises.', 'Milrinone inhibits PDE3, so cAMP is broken down more slowly.', 'More production plus less breakdown → higher cAMP and PKA activity → greater contractility.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Phosphodiesterase ends cAMP signals by converting cAMP to AMP.', isTrue: true, correction: 'Correct: inhibiting phosphodiesterase prolongs cAMP signaling.', objectives: [`${SM}.camp`], difficulty: 1 },
      { statement: 'DAG diffuses into the cytoplasm and releases Ca²⁺ from the endoplasmic reticulum.', isTrue: false, correction: 'IP₃ releases ER Ca²⁺; DAG stays in the membrane and activates protein kinase C.', objectives: [`${SM}.ip3-dag`], difficulty: 1 },
    ],
    clues: [
      { answer: 'CALMODULIN', clue: 'Calcium-binding protein that relays IP₃-released Ca²⁺ signals', objectives: [`${SM}.ip3-dag`], difficulty: 2 },
      { answer: 'MILRINONE', clue: 'PDE3 inhibitor used as an inodilator', objectives: [`${SM}.camp`], relevance: 'supplementary', relevanceNote: 'Recall of a specific inotrope name; cAMP and PDE inhibition are core.', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-cgmp',
    relevance: 'core',
    title: 'Nitric oxide, natriuretic peptides and cGMP',
    discipline: 'biochemistry',
    alsoDisciplines: ['pharmacology', 'physiology'],
    system: 'cardiovascular',
    alsoSystems: ['reproductive'],
    topic: 'biochem-cellular',
    difficulty: 2,
    curriculum: [`${SM}.cgmp`],
    objectives: ['Explain cGMP signaling by nitric oxide and natriuretic peptides and its prolongation by PDE5 inhibitors'],
    citations: [NO_SGC, NATRIURETIC, SILDENAFIL],
    facts: [
      'Nitric oxide activates soluble guanylate cyclase, its intracellular receptor, which converts GTP to cGMP; cGMP activates protein kinase G and other effectors, relaxing smooth muscle and reducing platelet aggregation.',
      'ANP and BNP act through membrane-bound guanylyl cyclase receptors that generate intracellular cGMP.',
      'Sildenafil is a selective PDE5 inhibitor that amplifies NO-induced, cGMP-dependent relaxation of corpus cavernosum smooth muscle.',
    ],
    factRefs: [[0], [1], [2]],
    mechanism:
      'There are two routes to cGMP: nitric oxide diffuses into the cell and activates soluble guanylyl cyclase, while natriuretic peptides bind a receptor that is itself a guanylyl cyclase. cGMP activates protein kinase G and relaxes smooth muscle. PDE5 normally breaks cGMP down, so PDE5 inhibitors prolong the relaxation started by NO.',
    associations: ['Nitric oxide', 'Soluble guanylyl cyclase', 'ANP', 'BNP', 'Membrane guanylyl cyclase', 'cGMP', 'Protein kinase G', 'PDE5', 'Sildenafil'],
    misconception:
      'PDE5 inhibitors do not cause erection on their own: they amplify the cGMP made when nitric oxide is released, which is why sexual stimulation is still needed.',
    quick:
      'NO → soluble guanylyl cyclase → cGMP → PKG → smooth muscle relaxation (vasodilation, ↓ platelet aggregation). ANP/BNP → membrane guanylyl cyclase receptor → cGMP. PDE5 inhibitors (sildenafil) prolong cGMP.',
    detailed: [
      'Nitric oxide is a gas that crosses membranes and activates soluble guanylyl cyclase inside smooth muscle cells. ANP and BNP use a different, membrane-bound guanylyl cyclase receptor. Both pathways raise cGMP, which acts through protein kinase G to relax smooth muscle.',
      'PDE5 breaks down cGMP. Sildenafil blocks it, so NO-triggered relaxation in the corpus cavernosum is amplified, which is the basis of its use in erectile dysfunction.',
    ],
    takeaway: 'NO → soluble GC; ANP/BNP → membrane GC; cGMP → PKG → relaxation; PDE5 inhibitors prolong it.',
    related: ['cel-second-messengers'],
    outline: found('Cardiovascular System', 'Hypertension'),
    mcq: [
      {
        stem: 'Nitroglycerin releases nitric oxide in vascular smooth muscle. Which enzyme does NO activate to cause relaxation?',
        options: [
          ['a', 'Soluble guanylyl cyclase'],
          ['b', 'Membrane-bound guanylyl cyclase (natriuretic peptide receptor)', 'The membrane guanylyl cyclase is the receptor for ANP and BNP, not NO.'],
          ['c', 'Adenylyl cyclase', 'Adenylyl cyclase makes cAMP and is controlled by Gs and Gi.'],
          ['d', 'Phospholipase C', 'Phospholipase C makes IP₃ and DAG, which tend to contract smooth muscle.'],
          ['e', 'Phosphodiesterase 5', 'PDE5 breaks cGMP down; NO does not activate it to relax vessels.'],
        ],
        answer: 'a',
        mini: 'NO activates soluble guanylyl cyclase → cGMP → protein kinase G → smooth muscle relaxation.',
        reasoning: 'mechanism',
        difficulty: 2,
      },
      {
        stem: 'A man taking sildenafil for erectile dysfunction is also prescribed a nitrate for angina. Why can this combination cause severe hypotension?',
        options: [
          ['a', 'cGMP is made faster and broken down slower'],
          ['b', 'Both drugs block β1 receptors in the heart', 'Neither drug is a β blocker.'],
          ['c', 'Sildenafil inhibits nitric oxide synthase', 'Sildenafil inhibits PDE5; it does not block NO synthesis.'],
          ['d', 'Nitrates inhibit adenylyl cyclase in vessels', 'Nitrates act through NO and soluble guanylyl cyclase.'],
          ['e', 'Both drugs raise intracellular Ca²⁺ in vessels', 'Raised Ca²⁺ would constrict vessels; both drugs promote relaxation.'],
        ],
        answer: 'a',
        mini: 'Nitrates raise cGMP production through NO; sildenafil blocks cGMP breakdown. Together they cause excessive vasodilation and hypotension.',
        reasoning: 'prediction',
        steps: ['Nitrates release NO → soluble guanylyl cyclase → more cGMP.', 'Sildenafil blocks PDE5 → cGMP is not broken down.', 'cGMP accumulates in vascular smooth muscle → widespread vasodilation → hypotension.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'ANP and BNP act through a membrane-bound guanylyl cyclase receptor.', isTrue: true, correction: 'Correct: their receptors are themselves guanylyl cyclases that make cGMP.', difficulty: 2 },
    ],
    clues: [
      { answer: 'SILDENAFIL', clue: 'PDE5 inhibitor that prolongs NO-induced cGMP signaling', difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-signal-predict',
    relevance: 'core',
    title: 'Predicting hormone and drug effects from the receptor mechanism',
    discipline: 'physiology',
    alsoDisciplines: ['biochemistry', 'pharmacology'],
    system: 'endocrine',
    alsoSystems: ['renal', 'multisystem'],
    topic: 'biochem-cellular',
    difficulty: 3,
    curriculum: [`${SM}.predict`, `${RO}.classify`],
    objectives: ['Predict intracellular effects from the second messenger', 'Classify a hormone or drug by receptor mechanism and predict its time course'],
    citations: [V2_AQP2, PRESSOR_GQ, AP_HORMONES, OS_RECEPTORS, AP_PANCREAS],
    facts: [
      'Vasopressin acting on V2 receptors raises cAMP, sending aquaporin-2 to the apical membrane of collecting duct cells; acting on V1 receptors it couples to Gq and phospholipase C (vasoconstriction).',
      'Glucagon uses cAMP as its second messenger, while insulin acts through a tyrosine kinase receptor.',
      'Steroid hormones diffuse through the membrane and bind intracellular receptors; the hormone–receptor complex binds DNA and changes transcription, so new proteins must be made before the effect appears.',
      'Membrane receptor signals such as cAMP are short-lived because phosphodiesterase degrades cAMP quickly.',
    ],
    factRefs: [[0, 1], [2, 4], [2, 3], [2]],
    mechanism:
      'The receptor mechanism predicts both the effect and its speed. Ion-channel and G-protein receptors act within seconds to minutes; steroid and thyroid hormones act through gene transcription and new protein synthesis, so their effects take longer to appear and last longer.',
    associations: ['V1 vs V2 receptors', 'Aquaporin-2', 'Glucagon (cAMP)', 'Insulin (tyrosine kinase)', 'Steroid receptors (transcription)'],
    misconception:
      'One hormone can have opposite-seeming effects through different receptors: vasopressin constricts vessels through V1 (Gq) but retains water through V2 (Gs, cAMP).',
    quick:
      'V1 → Gq → vasoconstriction; V2 → cAMP → aquaporin-2 → water retention. Glucagon → cAMP; insulin → tyrosine kinase. Steroids/thyroid → nuclear receptor → transcription (slower, longer). cAMP signals are short (PDE).',
    detailed: [
      'Knowing the receptor tells you the messenger and the effect: vasopressin’s V2 receptor in the collecting duct raises cAMP and inserts aquaporin-2, whereas V1 in vessels activates Gq. Glucagon raises cAMP in hepatocytes, while insulin uses its own tyrosine kinase receptor.',
      'Lipid-soluble hormones act inside the cell by changing transcription, so their effects require new protein synthesis and develop more slowly than effects mediated by membrane receptors and second messengers.',
    ],
    takeaway: 'Receptor class → messenger → effect and speed: channels/GPCRs fast; nuclear receptors slow.',
    related: ['cel-gpcr', 'cel-other-receptors'],
    outline: found('Endocrine System', 'Disorders of the pituitary gland and hypothalamus'),
    mcq: [
      {
        stem: 'A patient with diabetes insipidus is given desmopressin, which selectively stimulates V2 receptors. Which cellular change in the collecting duct explains the reduced urine output?',
        options: [
          ['a', 'cAMP rises and aquaporin-2 is inserted into the apical membrane'],
          ['b', 'IP₃ rises and smooth muscle contracts', 'That is the V1 (Gq) response in vascular smooth muscle.'],
          ['c', 'A nuclear receptor increases transcription of sodium channels', 'Vasopressin acts through a G-protein-coupled receptor, not a nuclear receptor.'],
          ['d', 'cGMP rises and the duct cells relax', 'cGMP is not the V2 messenger.'],
          ['e', 'JAK–STAT signaling increases aquaporin synthesis', 'V2 is a G-protein-coupled receptor that raises cAMP.'],
        ],
        answer: 'a',
        mini: 'V2 → Gs → cAMP → aquaporin-2 moves to the apical membrane → water is reabsorbed → urine concentrates.',
        reasoning: 'mechanism',
        objectives: [`${SM}.predict`],
        difficulty: 2,
      },
      {
        stem: 'Drug P acts on a G-protein-coupled receptor and Drug Q is a steroid that acts on an intracellular receptor. Which statement about their time courses is most accurate?',
        options: [
          ['a', 'P acts fast; Q needs transcription so is slower'],
          ['b', 'Q acts faster because steroids cross membranes', 'Crossing the membrane is easy, but the effect still requires new gene transcription and protein synthesis.'],
          ['c', 'Both act equally fast because both bind receptors', 'Second-messenger signaling is faster than transcription-dependent effects.'],
          ['d', 'P acts only after new proteins are synthesized', 'G-protein signaling acts on existing proteins (enzymes, channels).'],
          ['e', 'Q acts by opening an ion channel in the membrane', 'Steroids act on intracellular receptors that bind DNA.'],
        ],
        answer: 'a',
        mini: 'Second-messenger signaling modifies existing proteins quickly; nuclear receptors change transcription, so effects depend on new protein synthesis and take longer.',
        reasoning: 'comparison',
        objectives: [`${RO}.classify`],
        steps: ['P: GPCR → second messenger → existing enzymes and channels change within minutes.', 'Q: steroid → intracellular receptor → DNA binding → transcription → new protein.', 'Transcription-dependent effects are slower to start and last longer.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Glucagon uses cAMP as its second messenger.', isTrue: true, correction: 'Correct: glucagon, TSH and calcitonin act through cAMP.', objectives: [`${SM}.predict`], difficulty: 1 },
    ],
    clues: [
      { answer: 'AQUAPORIN', clue: 'Water channel inserted by V2 receptor signaling', objectives: [`${SM}.predict`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-rtk',
    relevance: 'core',
    title: 'Receptor tyrosine kinases, RAS/MAPK and insulin signaling',
    discipline: 'biochemistry',
    alsoDisciplines: ['physiology'],
    system: 'multisystem',
    alsoSystems: ['endocrine'],
    topic: 'biochem-cellular',
    difficulty: 3,
    curriculum: [`${RT}.mechanism`, `${RT}.insulin`],
    objectives: ['Explain RTK signaling through dimerization, phosphorylation and RAS/MAPK', 'Explain how insulin increases glucose uptake'],
    citations: [OS_RECEPTORS, OS_PROPAGATION, MPG('gene/kras', 'KRAS gene'), MPG('gene/braf', 'BRAF gene'), AP_PANCREAS, INSULIN_PI3K, GLUT4_AKT],
    facts: [
      'Receptor tyrosine kinases are enzyme-linked receptors with a single membrane-spanning segment; ligand binding brings two receptors together (dimerization) and they transfer phosphate groups to tyrosine residues.',
      'When EGF binds its receptor tyrosine kinase, a cascade causes the cell to grow and divide; inappropriate activation can cause cancer.',
      'RAS (for example K-Ras) is a GTPase switch: it relays signals when bound to GTP and turns off when it hydrolyzes GTP to GDP. It is part of the RAS/MAPK pathway, which controls proliferation, differentiation, migration and apoptosis.',
      'BRAF is part of the RAS/MAPK pathway.',
      'Insulin activates a tyrosine kinase receptor, triggering phosphorylation of many intracellular substrates that move vesicles containing glucose transporters to the cell membrane; skeletal muscle and adipose cells are the main targets. Red cells and cells of the brain, liver and kidneys take up glucose without insulin.',
      'Insulin signals to GLUT4 mainly through the insulin receptor–IRS–PI3K axis: PI3K activates the kinase Akt, which promotes translocation of GLUT4 vesicles to the plasma membrane of muscle and fat cells.',
    ],
    factRefs: [[0], [1], [1, 2], [3], [4], [5, 6]],
    mechanism:
      'Growth factors pair up their receptors, which phosphorylate each other on tyrosines. The phosphorylated receptor activates RAS by loading it with GTP; RAS then starts a kinase cascade (including RAF/BRAF) that reaches the nucleus and drives growth and division. RAS switches itself off by hydrolyzing GTP. Insulin uses the same receptor class but its main metabolic effect is moving glucose transporters to the surface of muscle and fat cells.',
    associations: ['Dimerization', 'Tyrosine phosphorylation', 'EGF receptor', 'RAS-GTP', 'RAS/MAPK pathway', 'BRAF', 'Insulin receptor', 'GLUT4 translocation'],
    misconception:
      'Insulin does not increase glucose uptake into the brain, liver or red cells: those cells take up glucose without insulin; muscle and fat are its main targets.',
    quick:
      'RTK: ligand → dimerization → tyrosine autophosphorylation → RAS-GTP → RAF → MAPK cascade → nucleus (growth). RAS off = GTP hydrolysis. Insulin receptor (RTK) → phosphorylation cascade → GLUT4 vesicles to membrane in muscle and fat.',
    detailed: [
      'Receptor tyrosine kinases (receptors for insulin, EGF and other growth factors) have one transmembrane segment. Ligand binding causes dimerization and phosphorylation of tyrosines, which recruit signaling proteins. One major branch activates RAS, a small GTPase, which turns on the RAF/BRAF–MAPK kinase cascade that controls proliferation.',
      'Insulin activates its tyrosine kinase receptor in skeletal muscle and adipose tissue, setting off a phosphorylation cascade that moves glucose-transporter vesicles to the membrane, rapidly increasing glucose uptake.',
    ],
    takeaway: 'RTK → dimerize → phosphorylate → RAS-GTP → MAPK → growth. Insulin RTK → GLUT4 to the membrane (muscle, fat).',
    related: ['cel-oncogenic-signaling', 'cel-membrane-transport'],
    outline: found(MS, 'Neoplasms and related disorders'),
    mcq: [
      {
        stem: 'A growth factor binds its receptor tyrosine kinase. What is the first change that allows the receptors to signal?',
        options: [
          ['a', 'Two receptors dimerize and phosphorylate tyrosines'],
          ['b', 'A G protein exchanges GDP for GTP at the receptor', 'GDP–GTP exchange at the receptor describes G-protein-coupled receptors.'],
          ['c', 'The receptor opens an ion channel for Na⁺', 'Ion channel opening describes ionotropic receptors.'],
          ['d', 'The ligand enters the nucleus and binds DNA', 'That describes steroid hormone receptors.'],
          ['e', 'Phospholipase C makes IP₃ and DAG', 'That is the Gq pathway, not receptor tyrosine kinase signaling.'],
        ],
        answer: 'a',
        mini: 'RTK ligands bring two receptors together; they phosphorylate tyrosines, which recruit downstream signaling proteins.',
        reasoning: 'recall',
        objectives: [`${RT}.mechanism`],
        difficulty: 1,
      },
      {
        stem: 'A tumor carries a RAS mutation that prevents RAS from hydrolyzing GTP. What happens to growth signaling?',
        options: [
          ['a', 'RAS stays on, so MAPK signaling never stops'],
          ['b', 'RAS can no longer bind GTP, so growth signaling stops', 'The mutant binds GTP; it cannot hydrolyze it, so it stays active.'],
          ['c', 'The receptor tyrosine kinase is degraded', 'The defect is downstream of the receptor.'],
          ['d', 'cAMP rises because adenylyl cyclase is activated', 'RAS does not act through adenylyl cyclase.'],
          ['e', 'The cell enters apoptosis immediately', 'Persistent RAS signaling promotes proliferation rather than death.'],
        ],
        answer: 'a',
        mini: 'RAS is a GTPase switch; losing GTP hydrolysis leaves it on, so the RAS/MAPK pathway signals continuously.',
        reasoning: 'mechanism',
        objectives: [`${RT}.mechanism`],
        difficulty: 2,
      },
      {
        stem: 'After a meal, insulin rises. Which cellular response explains the increased glucose uptake into skeletal muscle?',
        options: [
          ['a', 'Insulin signaling moves GLUT4 vesicles to the membrane'],
          ['b', 'Insulin opens a ligand-gated glucose channel', 'Insulin acts through a tyrosine kinase receptor, not a ligand-gated channel.'],
          ['c', 'Insulin activates Gs and raises cAMP in muscle', 'cAMP signaling is used by glucagon; insulin uses a tyrosine kinase receptor.'],
          ['d', 'Insulin increases SGLT2 activity in muscle', 'SGLT2 is in the proximal tubule, not muscle.'],
          ['e', 'Insulin binds a nuclear receptor to make new transporters', 'The rapid effect is translocation of existing transporter vesicles.'],
        ],
        answer: 'a',
        mini: 'Insulin activates its tyrosine kinase receptor; the phosphorylation cascade moves glucose transporter (GLUT4) vesicles to the membrane in muscle and fat.',
        reasoning: 'mechanism',
        objectives: [`${RT}.insulin`],
        difficulty: 2,
      },
      {
        stem: 'In a person with insulin resistance, insulin binds normally but the signal after the receptor is weak. Which tissues’ glucose uptake is most reduced?',
        options: [
          ['a', 'Skeletal muscle and adipose tissue'],
          ['b', 'Brain and red blood cells', 'These take up glucose without insulin.'],
          ['c', 'Liver and kidney, which need insulin for uptake', 'Liver and kidney cells take up glucose without insulin receptors controlling uptake.'],
          ['d', 'Intestinal lining cells', 'Intestinal cells take up glucose independently of insulin.'],
          ['e', 'All tissues equally', 'Only insulin-dependent tissues, mainly muscle and fat, lose uptake.'],
        ],
        answer: 'a',
        mini: 'Muscle and fat depend on insulin to bring glucose transporters to the surface; brain, red cells, liver, kidney and gut do not.',
        reasoning: 'prediction',
        objectives: [`${RT}.insulin`],
        steps: ['Insulin moves glucose transporters to the membrane in insulin-dependent cells.', 'Skeletal muscle and adipose tissue are the main insulin-dependent tissues.', 'Weak post-receptor signaling → less transporter translocation → reduced uptake in muscle and fat.'],
        difficulty: 3,
      },
      {
        stem: 'A research drug blocks phosphatidylinositol 3-kinase (PI3K). How does it change the effect of insulin on skeletal muscle?',
        options: [
          ['a', 'GLUT4 stays inside the cell, so glucose uptake falls'],
          ['b', 'Insulin can no longer bind its receptor', 'Binding happens upstream of PI3K and is unaffected.'],
          ['c', 'GLUT4 moves to the membrane even without insulin', 'Blocking PI3K removes the signal that moves GLUT4; it does not mimic insulin.'],
          ['d', 'Muscle switches to a Gs–cAMP route to take up glucose', 'Insulin does not act through Gs; no alternative route restores uptake.'],
          ['e', 'SGLT2 replaces GLUT4 in muscle', 'SGLT2 is a renal tubular transporter, not a muscle glucose transporter.'],
        ],
        answer: 'a',
        mini: 'Insulin receptor → IRS → PI3K → Akt → GLUT4 vesicles fuse with the membrane. Without PI3K, insulin-stimulated glucose uptake into muscle fails.',
        reasoning: 'prediction',
        objectives: [`${RT}.insulin`],
        steps: ['Insulin binds its tyrosine kinase receptor, which phosphorylates IRS.', 'IRS activates PI3K, and PI3K activates Akt.', 'Akt drives GLUT4 translocation; blocking PI3K stops it, so muscle glucose uptake falls.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'RAS is active when bound to GTP and inactive after it hydrolyzes GTP to GDP.', isTrue: true, correction: 'Correct: RAS is a GTPase switch in the RAS/MAPK pathway.', objectives: [`${RT}.mechanism`], difficulty: 1 },
      { statement: 'Insulin moves GLUT4 to the muscle cell membrane through IRS–PI3K–Akt signaling.', isTrue: true, correction: 'Correct: this receptor tyrosine kinase cascade drives GLUT4 translocation in muscle and fat.', objectives: [`${RT}.insulin`], difficulty: 1 },
    ],
    clues: [
      { answer: 'DIMERIZATION', clue: 'Pairing of two receptor tyrosine kinases after ligand binding', objectives: [`${RT}.mechanism`], difficulty: 2 },
      { answer: 'TYROSINE', clue: 'Amino acid phosphorylated by insulin and growth factor receptors', objectives: [`${RT}.mechanism`], difficulty: 1 },
      { answer: 'AKT', clue: 'Kinase activated by PI3K that sends GLUT4 to the membrane', objectives: [`${RT}.insulin`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-oncogenic-signaling',
    relevance: 'core',
    title: 'Gain-of-function signaling in disease',
    discipline: 'pathology',
    alsoDisciplines: ['genetics', 'pharmacology'],
    system: 'multisystem',
    alsoSystems: ['blood-immune', 'musculoskeletal-skin'],
    topic: 'biochem-cellular',
    difficulty: 3,
    curriculum: [`${RT}.oncogenic`],
    objectives: ['Recognize constitutively active signaling proteins in disease and the use of kinase inhibitors'],
    citations: [MPG('gene/kras', 'KRAS gene'), MPG('gene/braf', 'BRAF gene'), MPG('gene/fgfr3', 'FGFR3 gene'), MPG('condition/achondroplasia', 'Achondroplasia'), MPG('condition/chronic-myeloid-leukemia', 'Chronic myeloid leukemia'), MPD('a606018', 'Imatinib'), OS_PROPAGATION, RET_RTK, MEN2, MPG('gene/ret', 'RET gene'), MPG('condition/multiple-endocrine-neoplasia', 'Multiple endocrine neoplasia'), HER2_RTK, HER2_DRUGS],
    facts: [
      'In certain cancers RAS loses its GTPase activity and can no longer hydrolyze GTP to GDP, so it stays active.',
      'The BRAF V600E mutation (valine to glutamic acid at position 600) occurs in the RAS/MAPK pathway.',
      'Achondroplasia, the most common short-limbed dwarfism, is caused by FGFR3 variants that make the receptor overly active, so it signals without a growth factor and disturbs bone growth.',
      'In chronic myeloid leukemia, the t(9;22) translocation (Philadelphia chromosome) fuses BCR and ABL1; the BCR-ABL1 protein promotes proliferation and blocks apoptosis without needing a signal to turn it on.',
      'Imatinib is used for chronic myeloid leukemia and gastrointestinal stromal tumors; it works by blocking the action of the abnormal protein in cancer cells.',
      'RET is a receptor tyrosine kinase. Germline gain-of-function point mutations increase its kinase activity and cause multiple endocrine neoplasia type 2 (MEN2A, MEN2B) and familial medullary thyroid carcinoma.',
      'MEN2 is autosomal dominant. All forms carry a high risk of medullary thyroid carcinoma; MEN2A adds pheochromocytoma and primary hyperparathyroidism, and MEN2B adds pheochromocytoma, a marfanoid habitus and intestinal ganglioneuromas.',
      'Loss-of-function RET mutations are the most common genetic cause of Hirschsprung disease: without RET signaling, enteric nerves do not develop properly.',
      'HER2 (ERBB2) is a receptor tyrosine kinase. HER2 overexpression or ERBB2 amplification marks a subset of breast and gastric cancers, which are treated with HER2-targeted drugs such as trastuzumab.',
    ],
    factRefs: [[6, 0], [1], [2, 3], [4], [5], [7, 8], [8, 10], [9], [11, 12]],
    mechanism:
      'Each disorder has a signaling protein that is “on” without its normal input: RAS that cannot hydrolyze GTP, an FGFR3 receptor that signals without ligand, or the BCR-ABL1 fusion kinase. Constitutive signaling drives growth (cancer) or, for FGFR3 in cartilage, inhibits normal bone growth. Kinase inhibitors such as imatinib switch off the abnormal kinase.',
    associations: ['RAS', 'BRAF V600E', 'FGFR3 (achondroplasia)', 'BCR-ABL1', 'Philadelphia chromosome', 'Imatinib'],
    misconception:
      'Gain-of-function FGFR3 does not cause excess growth: in growth plates, overactive FGFR3 signaling restrains bone growth, producing achondroplasia.',
    quick:
      'Always-on signaling: RAS (no GTP hydrolysis) → cancers; BRAF V600E (RAS/MAPK); FGFR3 overactive → achondroplasia (short limbs, macrocephaly); BCR-ABL1 t(9;22) → CML → imatinib blocks the abnormal kinase.',
    detailed: [
      'Oncogenes are gain-of-function versions of genes that promote growth signals. RAS mutations that abolish GTP hydrolysis lock RAS in the active state; BRAF V600E activates the same pathway further downstream.',
      'Not every activating mutation causes cancer: two FGFR3 variants that make the receptor overactive cause more than 99% of achondroplasia, impairing conversion of cartilage to bone. The BCR-ABL1 fusion of chronic myeloid leukemia is active without signals and is blocked by imatinib.',
    ],
    takeaway: 'Constitutive signaling: RAS, BRAF V600E, FGFR3 (achondroplasia), BCR-ABL1 (CML; imatinib).',
    related: ['cel-rtk'],
    outline: found(MS, 'Neoplasms and related disorders'),
    mcq: [
      {
        stem: 'A newborn has short arms and legs (especially upper arms and thighs), a large head with a prominent forehead and a normal-size trunk. A variant in which gene, with what effect, is most likely?',
        options: [
          ['a', 'FGFR3, making it overly active'],
          ['b', 'FGFR3, abolishing the receptor', 'Achondroplasia variants increase FGFR3 activity rather than abolish it.'],
          ['c', 'COL1A1, reducing type I collagen', 'COL1A1 defects cause osteogenesis imperfecta with fractures.'],
          ['d', 'FBN1, reducing fibrillin-1', 'FBN1 defects cause Marfan syndrome with tall stature.'],
          ['e', 'GNAS, activating Gsα', 'Activating GNAS mutations cause McCune–Albright syndrome.'],
        ],
        answer: 'a',
        mini: 'Achondroplasia: overactive FGFR3 (gain of function) impairs conversion of cartilage to bone in the long bones.',
        reasoning: 'identification',
        difficulty: 2,
      },
      {
        stem: 'A 52-year-old man has a very high white cell count with immature granulocytes. Karyotype shows t(9;22). He starts imatinib. Why is this drug effective?',
        options: [
          ['a', 'It blocks the always-active BCR-ABL1 kinase'],
          ['b', 'It restores GTP hydrolysis by mutant RAS', 'Imatinib targets the BCR-ABL1 kinase, not RAS.'],
          ['c', 'It inhibits JAK2 V617F', 'JAK2 V617F drives myeloproliferative neoplasms such as polycythemia vera.'],
          ['d', 'It prevents the translocation from forming', 'Drugs cannot undo the translocation; imatinib blocks the fusion protein’s activity.'],
          ['e', 'It inhibits DNA synthesis in all dividing cells', 'That is the action of antimetabolites; imatinib targets the abnormal kinase.'],
        ],
        answer: 'a',
        mini: 't(9;22) creates the BCR-ABL1 fusion, an always-on kinase that drives CML; imatinib blocks the abnormal protein.',
        reasoning: 'mechanism',
        difficulty: 2,
      },
      {
        stem: 'A 32-year-old woman has medullary thyroid carcinoma, an adrenal pheochromocytoma and hypercalcemia from parathyroid hyperplasia. Her father had medullary thyroid carcinoma. Which genetic change is most likely?',
        options: [
          ['a', 'A gain-of-function RET mutation'],
          ['b', 'A loss-of-function RET mutation', 'Loss of RET function causes Hirschsprung disease, not endocrine tumors.'],
          ['c', 'An inactivating MEN1 mutation', 'MEN1 causes parathyroid, pituitary and pancreatic tumors, not medullary thyroid carcinoma.'],
          ['d', 'A postzygotic activating GNAS mutation', 'That causes McCune–Albright syndrome (fibrous dysplasia, café-au-lait spots, endocrine hyperfunction).'],
          ['e', 'An activating FGFR3 mutation', 'Activating FGFR3 variants cause achondroplasia.'],
        ],
        answer: 'a',
        mini: 'Medullary thyroid carcinoma + pheochromocytoma + hyperparathyroidism, autosomal dominant = MEN2A, caused by an activating RET (receptor tyrosine kinase) mutation.',
        reasoning: 'identification',
        objectives: [`${RT}.oncogenic`],
        difficulty: 2,
      },
      {
        stem: 'RET mutations cause multiple endocrine neoplasia type 2 in one family and Hirschsprung disease in another. Which statement best explains how one gene causes such different diseases?',
        options: [
          ['a', 'MEN2 variants overactivate RET; Hirschsprung variants abolish it'],
          ['b', 'Both diseases come from RET amplification', 'MEN2 is caused by activating point mutations, and Hirschsprung disease by loss of RET function, not amplification.'],
          ['c', 'MEN2 variants abolish RET; Hirschsprung variants overactivate it', 'This reverses the two: MEN2 is gain of function, Hirschsprung disease loss of function.'],
          ['d', 'Both are caused by the same variant with variable penetrance', 'Different variants with opposite effects on RET signaling cause the two diseases.'],
          ['e', 'RET encodes a G protein whose GTPase activity differs', 'RET is a receptor tyrosine kinase, not a G protein.'],
        ],
        answer: 'a',
        mini: 'Gain of RET function drives endocrine tumors (MEN2); loss of RET function stops enteric nerve development (Hirschsprung disease).',
        reasoning: 'comparison',
        objectives: [`${RT}.oncogenic`],
        steps: ['RET is a receptor tyrosine kinase needed for enteric nerve development.', 'Activating variants keep RET signaling on → tumors of RET-expressing endocrine tissues (MEN2).', 'Inactivating variants remove RET signaling → enteric nerves fail to develop (Hirschsprung disease).'],
        difficulty: 3,
      },
      {
        stem: 'A breast cancer shows ERBB2 gene amplification on in situ hybridization. Trastuzumab is added to her treatment. What does this drug target?',
        options: [
          ['a', 'The HER2 receptor tyrosine kinase'],
          ['b', 'The BCR-ABL1 fusion kinase', 'BCR-ABL1 is targeted by imatinib in chronic myeloid leukemia.'],
          ['c', 'The estrogen receptor in the nucleus', 'Estrogen receptors are intracellular receptors, not the product of ERBB2.'],
          ['d', 'Mutant KRAS stuck in the GTP-bound state', 'KRAS is a G protein downstream of receptors; ERBB2 encodes HER2.'],
          ['e', 'Janus kinase 2 downstream of cytokines', 'JAK2 is mutated in myeloproliferative neoplasms, not amplified in breast cancer.'],
        ],
        answer: 'a',
        mini: 'ERBB2 encodes HER2, a receptor tyrosine kinase. Overexpression or amplification marks HER2-positive breast and gastric cancers, which are treated with HER2-targeted drugs such as trastuzumab.',
        reasoning: 'recall',
        objectives: [`${RT}.oncogenic`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'The Philadelphia chromosome results from a t(9;22) translocation fusing BCR and ABL1.', isTrue: true, correction: 'Correct: the fusion protein is active without signals and drives chronic myeloid leukemia.', difficulty: 1 },
      { statement: 'Multiple endocrine neoplasia type 2 is caused by loss-of-function RET mutations.', isTrue: false, correction: 'MEN2 is caused by gain-of-function RET mutations; loss of RET function causes Hirschsprung disease.', objectives: [`${RT}.oncogenic`], difficulty: 1 },
    ],
    clues: [
      { answer: 'IMATINIB', clue: 'Kinase inhibitor that blocks BCR-ABL1 in chronic myeloid leukemia', difficulty: 1 },
      { answer: 'ACHONDROPLASIA', clue: 'Short-limbed dwarfism from overactive FGFR3', difficulty: 1 },
      { answer: 'RET', clue: 'Receptor tyrosine kinase proto-oncogene activated in MEN2', objectives: [`${RT}.oncogenic`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-jak-stat',
    relevance: 'core',
    title: 'JAK–STAT signaling, JAK2 V617F and cytokine-signaling SCID',
    discipline: 'biochemistry',
    alsoDisciplines: ['pathology', 'immunology', 'pharmacology'],
    system: 'blood-immune',
    topic: 'biochem-cellular',
    difficulty: 3,
    curriculum: [`${JS}.mechanism`, `${JS}.ligands`, `${JS}.jak2`, `${JS}.scid`],
    objectives: ['Explain JAK–STAT signaling', 'Identify ligands that use it', 'Apply JAK2 V617F to myeloproliferative neoplasms', 'Recognize X-linked and JAK3-deficient SCID'],
    citations: [
      MPG('gene/jak2', 'JAK2 gene'),
      MPG('condition/polycythemia-vera', 'Polycythemia vera'),
      MPG('condition/essential-thrombocythemia', 'Essential thrombocythemia'),
      MPG('condition/primary-myelofibrosis', 'Primary myelofibrosis'),
      MPG('gene/jak3', 'JAK3 gene'),
      MPG('condition/x-linked-severe-combined-immunodeficiency', 'X-linked severe combined immunodeficiency'),
      MPD('a613025', 'Tofacitinib'),
      GH_JAK, GH_STAT5, PRL_JAK, EPO_JAK, STAT_DIMER, MPG('gene/il2rg', 'IL2RG gene'),
    ],
    facts: [
      'The JAK/STAT pathway transmits chemical signals from outside the cell to the nucleus; JAK2 transmits signals after receptors such as the thrombopoietin receptor (MPL) are activated.',
      'Nearly everyone with polycythemia vera has a JAK2 mutation; JAK2 mutations make the protein constantly active, increasing blood cell production. Polycythemia vera raises red cells (often also white cells and platelets), causing thick blood, red skin and a risk of deep vein thrombosis and pulmonary embolism.',
      'The JAK2 V617F mutation (valine to phenylalanine at position 617) produces a constantly active JAK2; it is found in about half of people with essential thrombocythemia. JAK2 or MPL mutations also underlie most primary myelofibrosis, through overactivation of JAK/STAT.',
      'JAK3 relays signals that regulate the growth and maturation of T cells and NK cells and the maturation of B cells; without functional JAK3, these signals do not reach the nucleus, causing JAK3-deficient SCID.',
      'X-linked SCID, caused by IL2RG variants, occurs almost exclusively in males and is the most common form of SCID; untreated infants have recurrent infections, thrush, chronic diarrhea and poor growth.',
      'Tofacitinib is a Janus kinase (JAK) inhibitor used for rheumatoid arthritis, psoriatic arthritis and ulcerative colitis; it decreases immune system activity.',
      'JAK kinases phosphorylate STAT proteins on tyrosine; phosphorylated STATs dimerize, move into the nucleus and regulate transcription of target genes.',
      'Growth hormone binding to its receptor activates the associated tyrosine kinase JAK2; JAK2 activation of STAT5 is the most important GH pathway, and STAT5 induces IGF-1.',
      'Prolactin and erythropoietin receptors also signal mainly through JAK2 and STAT5; the EPO receptor–JAK2–STAT5 pathway regulates the differentiation, proliferation and survival of erythroid progenitors.',
      'IL2RG encodes the common gamma chain, a component of several immune-cell receptors; without it, signals are not relayed to the nucleus and lymphocytes cannot develop normally.',
    ],
    factRefs: [[0, 3], [1], [0, 2, 3], [4], [5], [6], [11], [7, 8], [9, 10], [12]],
    mechanism:
      'Cytokine and hematopoietic growth-factor receptors work with JAK kinases. When the receptor is activated, JAKs relay the signal through STAT proteins to the nucleus. A JAK2 that is always on (V617F) drives blood cell overproduction; a missing JAK3 (or the IL2RG receptor component in X-linked SCID) stops lymphocytes developing. JAK inhibitors damp cytokine signaling in autoimmune disease.',
    associations: ['JAK', 'STAT', 'JAK2 V617F', 'Polycythemia vera', 'Essential thrombocythemia', 'Primary myelofibrosis', 'MPL (thrombopoietin receptor)', 'JAK3', 'IL2RG', 'X-linked SCID', 'Tofacitinib'],
    misconception:
      'JAK2 V617F is not inherited: it is an acquired (somatic) mutation in blood-forming cells, which is why myeloproliferative neoplasms usually appear in adults.',
    quick:
      'Cytokine receptor → JAK → STAT → nucleus. JAK2 V617F (constantly on) → polycythemia vera (nearly all), essential thrombocythemia (~half), myelofibrosis. JAK3 or IL2RG (X-linked, most common) loss → SCID. Tofacitinib = JAK inhibitor (RA, UC).',
    detailed: [
      'Many cytokine receptors signal through receptor-associated Janus kinases (JAKs). Activated JAKs pass the signal through STAT proteins to the nucleus, changing transcription. The thrombopoietin receptor (MPL) is one example.',
      'Gain of function: acquired JAK2 mutations such as V617F keep the pathway on and cause myeloproliferative neoplasms (polycythemia vera, essential thrombocythemia, primary myelofibrosis). Loss of function: JAK3 deficiency and X-linked IL2RG deficiency block lymphocyte development and cause SCID. JAK inhibitors such as tofacitinib are used to reduce immune activity.',
    ],
    takeaway: 'JAK–STAT: JAK2 on → myeloproliferative neoplasms; JAK3/IL2RG off → SCID; JAK inhibitors damp immunity.',
    related: ['cel-rtk'],
    outline: listed('Blood & Lymphoreticular System', 'Neoplasms'),
    mcq: [
      {
        stem: 'A 60-year-old man has a ruddy face, hemoglobin 19.5 g/dL with mildly raised white cells and platelets, and a recent deep vein thrombosis. A JAK2 V617F mutation is found. How does this mutation cause his blood findings?',
        options: [
          ['a', 'JAK2 is constantly active, so blood cell production rises'],
          ['b', 'JAK2 is lost, so erythrocytes cannot undergo apoptosis', 'V617F is a gain-of-function mutation, not a loss.'],
          ['c', 'The kidney secretes excess erythropoietin', 'This is a primary marrow disorder, not driven by excess erythropoietin.'],
          ['d', 'BCR-ABL1 drives granulocyte proliferation', 'BCR-ABL1 causes chronic myeloid leukemia.'],
          ['e', 'An inherited JAK3 defect alters lymphocytes', 'JAK3 defects cause SCID, not polycythemia.'],
        ],
        answer: 'a',
        mini: 'JAK2 V617F makes JAK2 constantly active, increasing production of red cells (and often white cells and platelets) — polycythemia vera.',
        reasoning: 'mechanism',
        objectives: [`${JS}.jak2`],
        difficulty: 2,
      },
      {
        stem: 'A 5-month-old boy has persistent thrush, chronic diarrhea and poor growth. His maternal uncle died of infections in infancy. Lymphocyte studies show very few T cells. Which gene is most likely affected?',
        options: [
          ['a', 'IL2RG'],
          ['b', 'ADA', 'Adenosine deaminase deficiency is autosomal recessive; the affected maternal uncle suggests X-linked inheritance.'],
          ['c', 'JAK2', 'JAK2 gain of function causes myeloproliferative neoplasms.'],
          ['d', 'BTK', 'BTK defects cause X-linked agammaglobulinemia, with absent B cells but normal T cells.'],
          ['e', 'ATM', 'ATM defects cause ataxia–telangiectasia.'],
        ],
        answer: 'a',
        mini: 'Severe early infections with absent T cells in a boy with an affected maternal uncle = X-linked SCID (IL2RG), the most common SCID.',
        reasoning: 'identification',
        objectives: [`${JS}.scid`],
        difficulty: 2,
      },
      {
        stem: 'Tofacitinib is used for rheumatoid arthritis. Which signaling step does it block?',
        options: [
          ['a', 'Janus kinase activity after cytokine binding'],
          ['b', 'Adenylyl cyclase activation by Gs', 'Tofacitinib does not act on G-protein signaling.'],
          ['c', 'The calcineurin phosphatase in T cells', 'Calcineurin is blocked by cyclosporine and tacrolimus.'],
          ['d', 'The BCR-ABL1 tyrosine kinase in leukemia', 'BCR-ABL1 is targeted by imatinib.'],
          ['e', 'Phosphodiesterase 4 in airway inflammatory cells', 'PDE4 is targeted by roflumilast.'],
        ],
        answer: 'a',
        mini: 'Tofacitinib is a JAK inhibitor: it damps cytokine signaling through the JAK–STAT pathway, reducing immune activity.',
        reasoning: 'recall',
        objectives: [`${JS}.ligands`],
        relevance: 'supplementary',
        relevanceNote: 'Tofacitinib is a specific immunology drug example; the JAK–STAT pathway and JAK2/IL2RG disease are core.',
        difficulty: 1,
      },
      {
        stem: 'A child’s lymphocytes cannot respond to several interleukins because the receptors’ associated kinase is missing, although the receptors themselves are present. Which other finding is expected?',
        options: [
          ['a', 'Severe combined immunodeficiency (few T and NK cells)'],
          ['b', 'Polycythemia with raised hemoglobin', 'That is JAK2 gain of function.'],
          ['c', 'Isolated absence of B cells with normal T cells', 'That pattern is X-linked agammaglobulinemia (BTK).'],
          ['d', 'Short-limbed dwarfism with a large head', 'That is FGFR3 gain of function (achondroplasia).'],
          ['e', 'Café-au-lait spots and fibrous dysplasia', 'That is McCune–Albright syndrome (Gsα).'],
        ],
        answer: 'a',
        mini: 'Interleukin receptors signal through JAK3; without it, T and NK cell development fails and B cells do not mature: JAK3-deficient SCID.',
        reasoning: 'prediction',
        objectives: [`${JS}.ligands`, `${JS}.mechanism`],
        steps: ['The receptors are present but their associated kinase is missing → JAK deficiency.', 'Interleukin signals in lymphocytes use JAK3.', 'Without JAK3, T and NK cells fail to develop and B cells do not mature → SCID.'],
        relevance: 'supplementary',
        relevanceNote: 'JAK3-deficient SCID is a less common autosomal recessive form; X-linked (IL2RG) SCID is the core example.',
        difficulty: 3,
      },
      {
        stem: 'The thrombopoietin receptor (MPL) has no kinase domain of its own. How does its signal reach the nucleus after thrombopoietin binds?',
        options: [
          ['a', 'Associated JAKs activate STATs, which alter transcription'],
          ['b', 'Gs raises cAMP, and PKA enters the nucleus', 'MPL is a cytokine receptor, not a G-protein-coupled receptor.'],
          ['c', 'The hormone–receptor complex binds DNA directly', 'That describes intracellular (nuclear) receptors for steroid and thyroid hormones.'],
          ['d', 'The receptor opens an ion channel and calcium rises', 'That describes ligand-gated ion channels.'],
          ['e', 'Its own tyrosine kinase domain activates RAS', 'Intrinsic tyrosine kinase activity defines receptor tyrosine kinases, which MPL is not.'],
        ],
        answer: 'a',
        mini: 'Cytokine receptors such as MPL rely on associated Janus kinases (JAK2 for MPL); JAKs activate STAT proteins, which carry the signal to the nucleus.',
        reasoning: 'mechanism',
        objectives: [`${JS}.mechanism`],
        difficulty: 2,
      },
      {
        stem: 'Which hormone acts on a cytokine-type receptor that signals through JAK2 and STAT5 rather than through a G protein?',
        options: [
          ['a', 'Growth hormone'],
          ['b', 'Growth hormone–releasing hormone', 'GHRH acts on a Gs-coupled receptor that raises cAMP.'],
          ['c', 'Thyrotropin-releasing hormone', 'TRH acts on a Gq-coupled receptor (phospholipase C).'],
          ['d', 'Cortisol', 'Cortisol acts on an intracellular receptor that binds DNA.'],
          ['e', 'Insulin', 'Insulin acts on a receptor tyrosine kinase with intrinsic kinase activity.'],
        ],
        answer: 'a',
        mini: 'GH, prolactin and EPO receptors are cytokine-type receptors: they use associated JAK2, which activates STAT5. GHRH (Gs) and TRH (Gq) use GPCRs.',
        reasoning: 'recall',
        objectives: [`${JS}.ligands`],
        difficulty: 1,
      },
      {
        stem: 'A patient receives a drug that inhibits JAK2. Based on how erythropoietin signals, which effect on the blood is expected?',
        options: [
          ['a', 'Reduced EPO-driven red cell production'],
          ['b', 'Higher hemoglobin from unopposed EPO', 'EPO needs JAK2 to signal; blocking JAK2 reduces, not increases, red cell production.'],
          ['c', 'No effect, because EPO acts through Gs and cAMP', 'The EPO receptor is a cytokine receptor that signals through JAK2 and STAT5.'],
          ['d', 'Loss of B cells only, sparing red cells', 'JAK2 carries EPO, thrombopoietin and other signals; red cell production depends on it.'],
          ['e', 'Increased STAT5 activity in erythroid cells', 'JAK2 activates STAT5; inhibiting JAK2 lowers STAT5 activity.'],
        ],
        answer: 'a',
        mini: 'EPO receptor → JAK2 → STAT5 drives erythroid progenitor proliferation and survival, so JAK2 inhibition is expected to reduce red cell production.',
        reasoning: 'prediction',
        objectives: [`${JS}.ligands`, `${JS}.mechanism`],
        steps: ['EPO acts on a cytokine receptor with no kinase of its own.', 'It signals through associated JAK2, which activates STAT5.', 'STAT5 supports erythroid progenitor proliferation and survival, so blocking JAK2 lowers red cell production.'],
        difficulty: 3,
      },
      {
        stem: 'A woman with polycythemia vera carries JAK2 V617F, with high hemoglobin and platelets. Based on how this mutation acts, what would a drug that inhibits JAK2 be expected to do?',
        options: [
          ['a', 'Lower blood counts by damping constitutive JAK2 signaling'],
          ['b', 'Raise blood counts by removing feedback inhibition', 'JAK2 drives production in these cells; inhibiting it lowers counts.'],
          ['c', 'Correct the mutation in her marrow stem cells', 'A kinase inhibitor blocks activity; it does not repair the acquired mutation.'],
          ['d', 'Have no effect, because V617F acts through Gs', 'V617F is a JAK2 mutation; the signal runs through JAK–STAT, not Gs.'],
          ['e', 'Mainly restore T-cell development', 'T-cell development depends on JAK3 and the common γ chain, which are not the problem here.'],
        ],
        answer: 'a',
        mini: 'V617F makes JAK2 constantly active, overstimulating blood cell production. Inhibiting JAK2 damps this signal, so counts are expected to fall; the mutation itself remains.',
        reasoning: 'prediction',
        objectives: [`${JS}.jak2`],
        steps: ['JAK2 V617F is a gain-of-function mutation: JAK2 signals without its normal trigger.', 'This drives overproduction of red cells, platelets and white cells.', 'A JAK2 inhibitor reduces that signaling, so counts are expected to fall without correcting the mutation.'],
        relevance: 'supplementary',
        relevanceNote: 'Reasoning about JAK2-inhibitor therapy is beyond core; JAK2 V617F and polycythemia vera are core.',
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'The JAK2 V617F mutation produces a JAK2 protein that is constantly turned on.', isTrue: true, correction: 'Correct: it drives myeloproliferative neoplasms such as polycythemia vera.', objectives: [`${JS}.jak2`], difficulty: 1 },
      { statement: 'X-linked SCID affects boys and girls equally.', isTrue: false, correction: 'X-linked SCID occurs almost exclusively in males.', objectives: [`${JS}.scid`], difficulty: 1 },
      { statement: 'JAK/STAT signaling carries signals from cell-surface receptors to the nucleus.', isTrue: true, correction: 'Correct: STATs relay JAK signals to the nucleus to change transcription.', objectives: [`${JS}.mechanism`], difficulty: 1 },
      { statement: 'Phosphorylated STAT proteins dimerize and enter the nucleus to change transcription.', isTrue: true, correction: 'Correct: JAKs phosphorylate STATs, which dimerize and act as transcription factors.', objectives: [`${JS}.mechanism`], difficulty: 1 },
      { statement: 'The IL2RG gene encodes the common gamma chain, part of several immune-cell receptors.', isTrue: true, correction: 'Correct: loss of the common gamma chain blocks lymphocyte development in X-linked SCID.', objectives: [`${JS}.scid`], difficulty: 2 },
    ],
    clues: [
      { answer: 'TOFACITINIB', clue: 'Janus kinase inhibitor used in rheumatoid arthritis', objectives: [`${JS}.ligands`], relevance: 'supplementary', relevanceNote: 'Specific JAK-inhibitor drug name; the JAK–STAT pathway itself is core.', difficulty: 2 },
      { answer: 'POLYCYTHEMIA', clue: 'Vera: myeloproliferative neoplasm with JAK2 mutation in nearly all patients', objectives: [`${JS}.jak2`], difficulty: 1 },
      { answer: 'PROLACTIN', clue: 'Lactotroph hormone whose receptor signals mainly through JAK2 and STAT5', objectives: [`${JS}.ligands`], difficulty: 2 },
      { answer: 'ERYTHROPOIETIN', clue: 'Hormone whose receptor uses JAK2 and STAT5 to drive red cell production', objectives: [`${JS}.ligands`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-other-receptors',
    relevance: 'core',
    title: 'Intracellular receptors and ligand-gated ion channels',
    discipline: 'biochemistry',
    alsoDisciplines: ['physiology'],
    system: 'multisystem',
    alsoSystems: ['endocrine', 'nervous-behavioral'],
    topic: 'biochem-cellular',
    difficulty: 2,
    curriculum: [`${RO}.nuclear`, `${RO}.ion-channels`],
    objectives: ['Explain intracellular (nuclear) receptors for steroid and thyroid hormones', 'Recognize ligand-gated ion channels'],
    citations: [OS_RECEPTORS, AP_HORMONES, AP_NEURONS, GABA_A, GABA_CL, NMDA, HT3, HT3_ANTIEMETIC, CYS_LOOP, VDR, MPD('a601209', 'Ondansetron')],
    facts: [
      'Intracellular receptors respond to hydrophobic ligands that cross the plasma membrane; many are transcription factors that bind DNA in the nucleus and regulate gene expression.',
      'Steroid hormones bind receptors in the cytosol or nucleus, and the complex binds DNA; thyroid hormones enter cells by a carrier and bind receptors already bound to DNA. Both trigger transcription and new protein synthesis.',
      'Ion channel-linked receptors bind a ligand and open a channel that lets specific ions cross the membrane.',
      'Ionotropic receptors are ligand-gated ion channels, such as the nicotinic acetylcholine receptor and the glycine receptor; acetylcholine binding to the nicotinic receptor opens a cation channel and depolarizes the cell. Metabotropic receptors instead act through a G protein and second messengers.',
      'GABA-A receptors are ligand-gated chloride channels: GABA opens an intrinsic anion channel. The receptor carries binding sites for benzodiazepines and barbiturates.',
      'NMDA receptors are ligand-gated calcium channels opened by glutamate, with a voltage-dependent magnesium block; they are thought to be responsible for excitotoxicity.',
      '5-HT3 receptors are cation-selective ligand-gated ion channels. 5-HT3 antagonists such as ondansetron prevent chemotherapy-, radiotherapy- and postoperative nausea and vomiting.',
      'Cys-loop ligand-gated channels (nicotinic acetylcholine, 5-HT3, GABA-A and glycine receptors) mediate fast excitatory and inhibitory synaptic transmission.',
      'Calcitriol (1,25-dihydroxyvitamin D) binds the vitamin D receptor, a ligand-activated transcription factor that pairs with the retinoid X receptor and binds vitamin D response elements in DNA.',
    ],
    factRefs: [[0], [1], [0], [2], [3, 4], [5], [6, 7, 10], [8], [9]],
    mechanism:
      'Hydrophobic hormones reach receptors inside the cell and change which genes are transcribed. Ligand-gated ion channels are the opposite extreme: binding opens the channel itself, changing membrane potential immediately, without second messengers.',
    associations: ['Steroid hormones', 'Thyroid hormone', 'Nuclear receptors', 'Transcription', 'Nicotinic receptor', 'Glycine receptor', 'Ionotropic vs metabotropic'],
    misconception:
      'Thyroid hormone, though derived from an amino acid, acts like a steroid: it is lipid-soluble and acts on nuclear receptors that change transcription.',
    quick:
      'Steroids (cortisol, aldosterone, sex steroids) and thyroid hormone → intracellular receptors → bind DNA → transcription (slower, longer). Ligand-gated channels (nicotinic ACh, glycine) → ions flow at once (fast). Metabotropic = G protein + second messenger.',
    detailed: [
      'Lipid-soluble hormones cross the membrane and bind intracellular receptors that act as transcription factors. Steroid hormone receptors may be cytosolic or nuclear; thyroid hormone receptors are already bound to DNA. The response requires new protein synthesis.',
      'Ion channel-linked (ionotropic) receptors open a channel when their ligand binds: acetylcholine at the nicotinic receptor lets cations in and depolarizes the cell. Metabotropic receptors instead act through G proteins and second messengers.',
    ],
    takeaway: 'Lipophilic hormones → nuclear receptors → transcription. Ligand-gated channels → immediate ion flow.',
    related: ['cel-signal-predict'],
    outline: found('Endocrine System', 'Disorders of the thyroid gland'),
    mcq: [
      {
        stem: 'Cortisol diffuses into a cell and binds its receptor. What does the hormone–receptor complex do next?',
        options: [
          ['a', 'Binds DNA and changes transcription of target genes'],
          ['b', 'Activates adenylyl cyclase at the membrane', 'Steroids act through intracellular receptors, not G proteins.'],
          ['c', 'Opens a ligand-gated ion channel', 'Ion channel receptors are on the plasma membrane and act on ion flow.'],
          ['d', 'Dimerizes and phosphorylates tyrosines', 'That describes receptor tyrosine kinases.'],
          ['e', 'Activates JAK kinases associated with the receptor', 'JAK–STAT signaling is used by cytokine receptors.'],
        ],
        answer: 'a',
        mini: 'Steroid hormone receptors are transcription factors: the complex binds DNA and alters gene expression.',
        reasoning: 'mechanism',
        objectives: [`${RO}.nuclear`],
        difficulty: 2,
      },
      {
        stem: 'Which receptor is a ligand-gated ion channel?',
        options: [
          ['a', 'Nicotinic ACh receptor'],
          ['b', 'M2 muscarinic receptor', 'Muscarinic receptors are G-protein-coupled (metabotropic).'],
          ['c', 'β1-adrenergic receptor', 'β1 receptors are G-protein-coupled (Gs).'],
          ['d', 'Insulin receptor', 'The insulin receptor is a receptor tyrosine kinase.'],
          ['e', 'Glucocorticoid receptor', 'Glucocorticoid receptors are intracellular transcription factors.'],
        ],
        answer: 'a',
        mini: 'The nicotinic receptor is ionotropic: acetylcholine binding opens a cation channel.',
        reasoning: 'recall',
        objectives: [`${RO}.ion-channels`],
        difficulty: 1,
      },
      {
        stem: 'Benzodiazepines increase the effect of GABA at GABA-A receptors. Which ion movement explains the neuronal inhibition?',
        options: [
          ['a', 'More chloride flows through the receptor’s own channel'],
          ['b', 'Gi lowers cAMP in the neuron', 'GABA-A receptors are ligand-gated channels, not G-protein-coupled receptors.'],
          ['c', 'Sodium enters through the receptor and depolarizes', 'Cation entry excites neurons; GABA-A channels conduct chloride.'],
          ['d', 'Calcium enters through NMDA receptors', 'NMDA receptors are glutamate-gated calcium channels and excite neurons.'],
          ['e', 'The receptor binds DNA and changes transcription', 'That describes intracellular receptors for steroid and thyroid hormones.'],
        ],
        answer: 'a',
        mini: 'GABA-A is a ligand-gated chloride channel. Benzodiazepines (and barbiturates) act at sites on it, increasing chloride flow and inhibiting the neuron.',
        reasoning: 'mechanism',
        objectives: [`${RO}.ion-channels`],
        difficulty: 2,
      },
      {
        stem: 'Ondansetron prevents chemotherapy-induced vomiting. What type of receptor does it block?',
        options: [
          ['a', 'A serotonin-gated cation channel (5-HT3)'],
          ['b', 'A Gq-coupled serotonin receptor', 'The 5-HT3 receptor is a ligand-gated ion channel, not a GPCR.'],
          ['c', 'A glutamate-gated calcium channel (NMDA)', 'NMDA receptors are glutamate-gated; ondansetron blocks 5-HT3 receptors.'],
          ['d', 'A GABA-gated chloride channel (GABA-A)', 'GABA-A receptors are enhanced by benzodiazepines, not blocked by ondansetron.'],
          ['e', 'A dopamine D1 receptor coupled to Gs', 'Ondansetron is a 5-HT3 receptor antagonist, not a dopamine antagonist.'],
        ],
        answer: 'a',
        mini: 'Ondansetron is a 5-HT3 antagonist. The 5-HT3 receptor is the serotonin receptor that is a ligand-gated cation channel.',
        reasoning: 'recall',
        objectives: [`${RO}.ion-channels`],
        difficulty: 1,
      },
      {
        stem: 'Glutamate opens a ligand-gated channel that admits Ca²⁺ and is linked to excitotoxic neuronal injury. Which receptor is it?',
        options: [
          ['a', 'NMDA receptor'],
          ['b', 'GABA-A receptor', 'GABA-A receptors are chloride channels and inhibit neurons.'],
          ['c', '5-HT3 receptor', '5-HT3 receptors are serotonin-gated, not glutamate-gated.'],
          ['d', 'M2 muscarinic receptor', 'M2 receptors are G-protein-coupled (Gi).'],
          ['e', 'Glycine receptor', 'Glycine receptors are inhibitory chloride channels.'],
        ],
        answer: 'a',
        mini: 'NMDA receptors are glutamate-gated Ca²⁺ channels with a voltage-dependent Mg²⁺ block; excessive activation is thought to cause excitotoxicity.',
        reasoning: 'recall',
        objectives: [`${RO}.ion-channels`],
        difficulty: 2,
      },
    ],
    tf: [
      { relevance: 'supplementary', relevanceNote: 'Where the thyroid receptor sits before ligand binding is beyond core depth; nuclear-receptor action is core.', statement: 'Thyroid hormones bind receptors that are already bound to DNA.', isTrue: true, correction: 'Correct: binding triggers transcription of target genes.', objectives: [`${RO}.nuclear`], difficulty: 2 },
      { statement: 'Muscarinic acetylcholine receptors are ligand-gated ion channels.', isTrue: false, correction: 'Muscarinic receptors are G-protein-coupled; nicotinic receptors are ligand-gated ion channels.', objectives: [`${RO}.ion-channels`], difficulty: 1 },
      { statement: 'GABA-A receptors are ligand-gated chloride channels.', isTrue: true, correction: 'Correct: GABA opens the receptor’s own anion channel; benzodiazepines and barbiturates act at sites on it.', objectives: [`${RO}.ion-channels`], difficulty: 1 },
      { statement: 'The 5-HT3 receptor is a G-protein-coupled serotonin receptor.', isTrue: false, correction: 'The 5-HT3 receptor is a cation-selective ligand-gated ion channel (the target of ondansetron).', objectives: [`${RO}.ion-channels`], difficulty: 2 },
      { statement: 'Calcitriol acts through an intracellular receptor that binds DNA and regulates transcription.', isTrue: true, correction: 'Correct: the vitamin D receptor is a ligand-activated transcription factor (paired with RXR).', objectives: [`${RO}.nuclear`], difficulty: 1 },
    ],
    clues: [
      { answer: 'NICOTINIC', clue: 'Acetylcholine receptor that is a ligand-gated cation channel', objectives: [`${RO}.ion-channels`], difficulty: 1 },
      { relevance: 'supplementary', relevanceNote: 'Terminology (ionotropic) rather than a tested mechanism.', answer: 'IONOTROPIC', clue: 'Describes a receptor that is itself an ion channel', objectives: [`${RO}.ion-channels`], difficulty: 2 },
      { answer: 'ONDANSETRON', clue: 'Antiemetic that blocks the serotonin-gated 5-HT3 channel', objectives: [`${RO}.ion-channels`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  // Revision 1 (owner review): hormone receptors and TGF-β/SMAD.
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-hormone-gpcr',
    relevance: 'core',
    title: 'Hormone receptors: which G protein? (GHRH, ACTH, LH/FSH, PTH, GnRH, TRH, oxytocin)',
    discipline: 'biochemistry',
    alsoDisciplines: ['physiology'],
    system: 'endocrine',
    alsoSystems: ['reproductive'],
    topic: 'biochem-cellular',
    difficulty: 2,
    curriculum: [`${GP}.receptors`, `${SM}.predict`],
    objectives: ['Assign high-yield hormone receptors to Gs or Gq', 'Predict a hormone’s second messenger and effect'],
    citations: [GHRH_GS, SOMATOTROPH, ACTH_CAMP, LH_GS, GLYCO_GS, PTH_RECEPTOR, PTH_PKA, GNRH_GQ, GNRH_LHFSH, TRH_GQ, OXYTOCIN_GQ, MYOMETRIUM, AP_HORMONES],
    facts: [
      'The GHRH receptor on pituitary somatotrophs is a seven-transmembrane Gs-coupled receptor: GHRH raises cAMP, and PKA phosphorylates the transcription factor CREB; growth hormone release also involves G-protein effects on ion channels.',
      'ACTH binds the melanocortin 2 receptor (MC2R) on adrenal cells and stimulates adenylyl cyclase; cAMP and PKA drive both the rapid supply of cholesterol for steroid synthesis and transcription of steroidogenic genes.',
      'The LH and FSH receptors are seven-transmembrane glycoprotein-hormone receptors that couple to Gs, activating adenylyl cyclase and raising cAMP. Activating LH-receptor mutations cause gonadotropin-independent familial male precocious puberty through constant cAMP signaling in Leydig cells.',
      'PTH (and PTHrP) act on the shared type 1 PTH receptor in bone and kidney, which activates adenylyl cyclase (cAMP–PKA) and also phospholipase C (PKC).',
      'The GnRH receptor on pituitary gonadotropes couples to Gq/G11: phospholipase C produces IP₃ (Ca²⁺ release) and DAG (protein kinase C), driving LH and FSH synthesis and secretion.',
      'The TRH receptor triggers the Gq–phospholipase Cβ–Ca²⁺–protein kinase C pathway in thyrotrophs.',
      'The oxytocin receptor couples mainly through Gq to phospholipase Cβ; oxytocin and other uterotonic agonists act through Gq/PLCβ in myometrium.',
      'About 40% of pituitary somatotroph tumors carry activating Gsα mutations (at Arg201 or Gln227), and excess GH from somatotroph adenomas causes acromegaly.',
      'Reconciling sources: OpenStax lists GHRH among hormones that use Ca²⁺ as a second messenger. GHRH-stimulated GH release does involve G-protein effects on ion channels, but the GHRH receptor is Gs-coupled and cAMP is its principal second messenger, which is the classic Step 1 association.',
    ],
    factRefs: [[0], [2], [3, 4], [5, 6], [7, 8], [9], [10, 11], [9, 1], [12, 0]],
    mechanism:
      'The hormones in this group that raise cAMP use Gs (GHRH on somatotrophs, ACTH on the adrenal cortex, LH and FSH on the gonads, PTH on bone and kidney). Hypothalamic GnRH and TRH, and oxytocin on the uterus, use Gq: phospholipase C → IP₃ (Ca²⁺) and DAG (PKC). Knowing the G protein predicts what a constantly active Gsα or a phospholipase C blocker would do.',
    associations: ['GHRH → Gs', 'ACTH (MC2R) → Gs', 'LH, FSH → Gs', 'PTH → Gs (and PLC)', 'GnRH → Gq', 'TRH → Gq', 'Oxytocin → Gq', 'Somatotroph adenoma', 'Acromegaly', 'Familial male precocious puberty'],
    misconception:
      'A Ca²⁺ effect does not make a hormone a Gq hormone: GHRH-stimulated GH release involves ion channels, but the GHRH receptor is Gs-coupled and cAMP is the classic messenger.',
    quick:
      'Gs/cAMP: GHRH, ACTH (MC2R), LH, FSH, PTH (also PLC). Gq/IP₃–DAG: GnRH, TRH, oxytocin. Activating Gsα in somatotrophs mimics constant GHRH → GH excess → acromegaly.',
    detailed: [
      'Gs hormones activate adenylyl cyclase: GHRH (somatotrophs, cAMP → PKA → CREB), ACTH (MC2R in the adrenal cortex, cAMP → steroidogenesis), LH and FSH (glycoprotein-hormone receptors in the gonads) and PTH (type 1 PTH receptor in bone and kidney, which also activates phospholipase C).',
      'Gq hormones activate phospholipase C, producing IP₃ (Ca²⁺ release) and DAG (protein kinase C): GnRH on gonadotropes (LH and FSH release), TRH on thyrotrophs and oxytocin on the myometrium. Disease follows the same logic: a constantly active Gsα in somatotrophs behaves like unremitting GHRH and causes GH excess, and an activating LH-receptor mutation produces testosterone without gonadotropins.',
    ],
    takeaway: 'GHRH, ACTH, LH, FSH, PTH → Gs/cAMP. GnRH, TRH, oxytocin → Gq/IP₃–DAG.',
    related: ['cel-gpcr', 'cel-second-messengers', 'cel-signal-predict'],
    outline: found('Endocrine System', 'Disorders of the pituitary gland and hypothalamus'),
    mcq: [
      {
        stem: 'Which hypothalamic or pituitary hormone acts through a Gq-coupled receptor that raises IP₃ and Ca²⁺?',
        options: [
          ['a', 'GnRH'],
          ['b', 'ACTH', 'ACTH acts on MC2R, which stimulates adenylyl cyclase (Gs, cAMP).'],
          ['c', 'GHRH', 'The GHRH receptor is Gs-coupled and raises cAMP.'],
          ['d', 'LH', 'The LH receptor couples to Gs and raises cAMP.'],
          ['e', 'Growth hormone', 'GH acts on a cytokine-type receptor that uses JAK2 and STAT5.'],
        ],
        answer: 'a',
        mini: 'GnRH (like TRH and oxytocin) uses Gq → phospholipase C → IP₃ and DAG. GHRH, ACTH, LH and FSH use Gs → cAMP; GH uses JAK2–STAT5.',
        reasoning: 'recall',
        objectives: [`${GP}.receptors`],
        difficulty: 1,
      },
      {
        stem: 'ACTH stimulates cortisol synthesis in the adrenal cortex within minutes and increases steroidogenic enzyme expression over hours. Which signal mediates both effects?',
        options: [
          ['a', 'cAMP and protein kinase A after MC2R activation'],
          ['b', 'IP₃-released Ca²⁺ after Gq activation', 'ACTH acts through MC2R and adenylyl cyclase, not Gq.'],
          ['c', 'JAK2 phosphorylation of STAT5', 'JAK2–STAT5 is used by GH, prolactin and EPO, not ACTH.'],
          ['d', 'cGMP from soluble guanylyl cyclase', 'Soluble guanylyl cyclase responds to nitric oxide.'],
          ['e', 'ACTH entering the nucleus to bind DNA', 'ACTH is a peptide acting on a membrane receptor.'],
        ],
        answer: 'a',
        mini: 'ACTH → MC2R → adenylyl cyclase → cAMP → PKA, which supplies cholesterol rapidly and, over hours, increases transcription of steroidogenic genes.',
        reasoning: 'mechanism',
        objectives: [`${GP}.receptors`, `${SM}.predict`],
        difficulty: 2,
      },
      {
        stem: 'A pituitary adenoma carries an activating mutation that keeps Gsα in its GTP-bound state. Which hormone’s signal does this mutation mimic, and what is the expected clinical result?',
        options: [
          ['a', 'GHRH; GH excess causing acromegaly'],
          ['b', 'GnRH; excess LH and FSH', 'GnRH acts through Gq, not Gs.'],
          ['c', 'TRH; excess TSH and hyperthyroidism', 'TRH acts through Gq; activating Gsα mutations are typical of somatotroph tumors.'],
          ['d', 'Oxytocin; excessive uterine contraction', 'Oxytocin acts through Gq on the myometrium.'],
          ['e', 'Growth hormone; low IGF-1', 'GH itself uses JAK2–STAT5; constant somatotroph cAMP raises GH and IGF-1.'],
        ],
        answer: 'a',
        mini: 'GHRH acts through a Gs-coupled receptor. A constantly active Gsα in somatotrophs keeps cAMP high, like unremitting GHRH, so GH is overproduced → acromegaly.',
        reasoning: 'prediction',
        objectives: [`${GP}.receptors`],
        steps: ['The mutation keeps Gsα active, so cAMP stays high.', 'In the pituitary, the hormone that normally raises cAMP is GHRH (somatotrophs).', 'Constant GHRH-like signaling → excess GH → acromegaly.'],
        difficulty: 3,
      },
      {
        stem: 'A research drug blocks phospholipase C in uterine smooth muscle. Which hormone’s action on the myometrium is most reduced?',
        options: [
          ['a', 'Oxytocin'],
          ['b', 'Luteinizing hormone', 'LH acts through Gs on the gonads, not through PLC in myometrium.'],
          ['c', 'Growth hormone–releasing hormone', 'GHRH acts through Gs on pituitary somatotrophs.'],
          ['d', 'ACTH', 'ACTH acts through Gs (MC2R) on the adrenal cortex.'],
          ['e', 'Parathyroid hormone', 'PTH mainly acts on bone and kidney; its classic messenger is cAMP.'],
        ],
        answer: 'a',
        mini: 'The oxytocin receptor couples through Gq to phospholipase Cβ; blocking PLC removes the IP₃/Ca²⁺ signal that contracts the myometrium.',
        reasoning: 'prediction',
        objectives: [`${GP}.receptors`, `${SM}.predict`],
        steps: ['Phospholipase C is the effector of Gq.', 'In the myometrium, oxytocin acts through a Gq-coupled receptor.', 'Blocking PLC removes the IP₃/Ca²⁺ signal, so oxytocin-induced contraction falls.'],
        difficulty: 3,
      },
      {
        stem: 'A 4-year-old boy has rapid growth, pubic hair and an enlarged penis. Testosterone is in the adult range, but LH and FSH are undetectable. His father had the same problem. Which defect is most likely?',
        options: [
          ['a', 'An activating LH-receptor mutation causing constant cAMP'],
          ['b', 'Early activation of hypothalamic GnRH pulses', 'Central puberty raises LH and FSH; here they are undetectable.'],
          ['c', 'An inactivating mutation of the TRH receptor', 'TRH receptor defects affect thyroid function, not testosterone.'],
          ['d', 'A loss-of-function FSH receptor mutation', 'Loss of FSH signaling would not produce adult testosterone.'],
          ['e', 'A JAK2 V617F mutation', 'JAK2 V617F causes myeloproliferative neoplasms.'],
        ],
        answer: 'a',
        mini: 'Gonadotropin-independent precocious puberty in a boy with an affected father: an activating LH-receptor mutation keeps Gs–cAMP signaling on in Leydig cells.',
        reasoning: 'identification',
        objectives: [`${GP}.receptors`],
        relevance: 'supplementary',
        relevanceNote: 'Familial male precocious puberty is a less common disorder; LH acting through Gs/cAMP is core.',
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'The GHRH receptor is Gs-coupled, and cAMP is its principal second messenger.', isTrue: true, correction: 'Correct: GHRH → Gs → cAMP → PKA → CREB in somatotrophs.', objectives: [`${GP}.receptors`], difficulty: 1 },
      { statement: 'TRH acts on thyrotrophs through Gs and cAMP.', isTrue: false, correction: 'The TRH receptor uses Gq: phospholipase Cβ → Ca²⁺ and protein kinase C.', objectives: [`${GP}.receptors`], difficulty: 1 },
      { statement: 'The PTH receptor can activate both adenylyl cyclase and phospholipase C.', isTrue: true, correction: 'Correct: the type 1 PTH receptor signals through cAMP–PKA (classic) and PLC–PKC.', objectives: [`${GP}.receptors`], relevance: 'supplementary', relevanceNote: 'The PLC arm of PTH signaling is beyond core; PTH → cAMP is core.', difficulty: 2 },
    ],
    clues: [
      { answer: 'OXYTOCIN', clue: 'Posterior pituitary hormone whose Gq-coupled receptor contracts the uterus', objectives: [`${GP}.receptors`], difficulty: 1 },
      { answer: 'GNRH', clue: 'Hypothalamic decapeptide whose Gq receptor drives LH and FSH release (abbreviation)', objectives: [`${GP}.receptors`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-tgf-beta',
    relevance: 'supplementary',
    relevanceNote: 'TGF-β/SMAD signaling and its link to Marfan and Loeys–Dietz syndromes are beyond core depth; Marfan syndrome itself (FBN1, fibrillin-1) is taught as core elsewhere.',
    title: 'Receptor serine/threonine kinases: TGF-β and SMADs',
    discipline: 'biochemistry',
    alsoDisciplines: ['genetics'],
    system: 'multisystem',
    alsoSystems: ['musculoskeletal-skin'],
    topic: 'biochem-cellular',
    difficulty: 2,
    curriculum: [`${RO}.ser-thr`],
    objectives: ['Recognize receptor serine/threonine kinases (TGF-β → SMAD)', 'Relate fibrillin-1 and TGF-β to Marfan syndrome'],
    citations: [TGFB_RECEPTORS, SMADS, MPG('condition/marfan-syndrome', 'Marfan syndrome'), MPG('gene/fbn1', 'FBN1 gene'), MPG('condition/loeys-dietz-syndrome', 'Loeys-Dietz syndrome')],
    facts: [
      'TGF-β family ligands signal through complexes of type II and type I receptors that are serine/threonine kinases.',
      'The type I receptor phosphorylates receptor-regulated SMADs, which form complexes with the common-mediator SMAD, move to the nucleus and regulate transcription together with DNA-binding partners.',
      'In Marfan syndrome (FBN1, autosomal dominant), reduced fibrillin-1 means microfibrils cannot bind growth factors, so excess growth factors are available and tissues overgrow and become unstable; fibrillin-1 microfibrils normally store TGF-β in an inactive form.',
      'Loeys–Dietz syndrome (TGFBR1, TGFBR2, SMAD3, TGFB2 or TGFB3; autosomal dominant) shows paradoxically increased TGF-β pathway signaling.',
    ],
    factRefs: [[0], [1], [2, 3], [4]],
    mechanism:
      'TGF-β binds a type II receptor, which recruits and activates a type I receptor; both are serine/threonine kinases. The type I receptor phosphorylates SMADs that carry the signal to the nucleus. Fibrillin-1 microfibrils keep TGF-β stored and inactive, so losing fibrillin-1 (Marfan syndrome) releases more active growth factor.',
    associations: ['TGF-β', 'Type I and II receptors', 'Serine/threonine kinase', 'R-SMAD', 'Common-mediator SMAD', 'Fibrillin-1', 'FBN1', 'Marfan syndrome', 'Loeys–Dietz syndrome'],
    misconception:
      'Not every enzyme-linked receptor is a tyrosine kinase: TGF-β receptors phosphorylate SMADs on serine and threonine.',
    quick:
      'TGF-β → type II + type I receptor serine/threonine kinases → phosphorylated R-SMAD + common SMAD → nucleus → transcription. Marfan: FBN1 loss → microfibrils cannot store TGF-β → excess active growth factor.',
    detailed: [
      'Receptor serine/threonine kinases form a third class of enzyme-linked receptors. TGF-β family ligands bring type II and type I receptors together; the type I receptor phosphorylates receptor-regulated SMADs, which partner with the common-mediator SMAD and enter the nucleus to regulate transcription.',
      'Fibrillin-1 microfibrils store TGF-β in an inactive form. In Marfan syndrome, FBN1 variants reduce functional microfibrils, more growth factor is available and tissues overgrow and become unstable. Loeys–Dietz syndrome, caused by variants in TGF-β pathway genes, also shows increased pathway signaling.',
    ],
    takeaway: 'TGF-β receptors are serine/threonine kinases that act through SMADs; fibrillin-1 loss (Marfan) frees TGF-β.',
    related: ['cel-rtk', 'cel-jak-stat'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'TGF-β binds its cell-surface receptor. Which event carries the signal to the nucleus?',
        options: [
          ['a', 'Receptor serine/threonine kinases phosphorylate SMADs'],
          ['b', 'Associated JAKs phosphorylate STATs', 'JAK–STAT signaling is used by cytokine receptors such as those for GH and EPO.'],
          ['c', 'Gs raises cAMP, which activates PKA', 'TGF-β receptors are not G-protein-coupled.'],
          ['d', 'Receptor tyrosine kinases activate RAS', 'TGF-β receptors phosphorylate SMADs on serine and threonine.'],
          ['e', 'TGF-β enters the nucleus and binds DNA', 'TGF-β acts on membrane receptors; SMADs carry the signal.'],
        ],
        answer: 'a',
        mini: 'TGF-β → type II and type I receptor serine/threonine kinases → phosphorylated SMADs → nucleus → transcription.',
        reasoning: 'mechanism',
        objectives: [`${RO}.ser-thr`],
        difficulty: 2,
      },
      {
        stem: 'Why do FBN1 variants in Marfan syndrome increase growth-factor signaling in connective tissue?',
        options: [
          ['a', 'Fewer microfibrils store TGF-β, so more is active'],
          ['b', 'Fibrillin-1 is itself a TGF-β receptor', 'Fibrillin-1 forms microfibrils that bind and store growth factors; it is not a receptor.'],
          ['c', 'Fibrillin-1 normally degrades SMAD proteins', 'Fibrillin-1 is an extracellular matrix protein and does not degrade SMADs.'],
          ['d', 'Abnormal collagen cross-links trap TGF-β', 'Collagen cross-linking defects are not the mechanism in Marfan syndrome.'],
          ['e', 'FBN1 variants activate Gsα in fibroblasts', 'Activating Gsα (GNAS) mutations cause McCune–Albright syndrome.'],
        ],
        answer: 'a',
        mini: 'Fibrillin-1 microfibrils store TGF-β inactively. Fewer microfibrils in Marfan syndrome leave more growth factor free, so tissues overgrow and become unstable.',
        reasoning: 'mechanism',
        objectives: [`${RO}.ser-thr`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'SMAD proteins carry TGF-β receptor signals to the nucleus.', isTrue: true, correction: 'Correct: phosphorylated R-SMADs partner with the common-mediator SMAD and regulate transcription.', objectives: [`${RO}.ser-thr`], difficulty: 1 },
      { statement: 'In Loeys–Dietz syndrome, TGF-β pathway signaling is decreased throughout the body.', isTrue: false, correction: 'Although the mutant proteins have reduced function, TGF-β pathway signaling is paradoxically increased.', objectives: [`${RO}.ser-thr`], difficulty: 2 },
    ],
    clues: [
      { answer: 'SMAD', clue: 'Protein family phosphorylated by TGF-β receptors that carries the signal to the nucleus', objectives: [`${RO}.ser-thr`], difficulty: 2 },
    ],
  },
]);

// --------------------------------------------------------------------------------------------------
// Games
// --------------------------------------------------------------------------------------------------
type Shared = 'kind' | 'review' | 'version';
const seq = (x: Omit<SequenceItem, Shared | 'depth' | 'reasoning'>): SequenceItem => ({
  kind: 'sequence', review: AI_DRAFT, version: 1, depth: 'mechanism', reasoning: 'mechanism', ...x,
});
const match = (x: Omit<MatchItem, Shared | 'depth' | 'reasoning'>): MatchItem => ({
  kind: 'match', review: AI_DRAFT, version: 1, depth: 'recognition', reasoning: 'recall', ...x,
});
const group = (x: Omit<ConnectionGroup, Shared | 'depth' | 'reasoning'>): ConnectionGroup => ({
  kind: 'group', review: AI_DRAFT, version: 1, depth: 'recognition', reasoning: 'identification', ...x,
});
// Cases are application by format. A classic presentation whose findings point to one diagnosis and
// mechanism is `interpretation` (medium); `multistep` is kept for cases that chain several inferences.
const kase = (x: Omit<CaseItem, Shared | 'depth' | 'reasoning'> & { reasoning?: 'interpretation' | 'multistep' }): CaseItem => ({
  kind: 'case', review: AI_DRAFT, version: 1, depth: 'application', reasoning: 'multistep', ...x,
});
const puzzle = (x: Omit<ConnectionsPuzzleItem, Shared | 'depth' | 'reasoning'>): ConnectionsPuzzleItem => ({
  kind: 'connections', review: AI_DRAFT, version: 1, depth: 'recognition', reasoning: 'identification', ...x,
});

const sequences: SequenceItem[] = [
  seq({
    id: 'seq:gs-camp',
    relevance: 'core',
    title: 'From hormone to PKA',
    prompt: 'Order the steps of Gs signaling after a hormone binds its receptor.',
    steps: [
      'The hormone binds a seven-transmembrane receptor',
      'Gα releases GDP and binds GTP',
      'Gαs separates from βγ and activates adenylyl cyclase',
      'Adenylyl cyclase converts ATP to cAMP',
      'cAMP activates protein kinase A',
      'Phosphodiesterase converts cAMP to AMP, ending the signal',
    ],
    explanation: 'Gs → adenylyl cyclase → cAMP → PKA; phosphodiesterase and GTP hydrolysis end it. Cholera toxin keeps Gs on; PDE inhibitors keep cAMP high.',
    conceptIds: ['cel-gpcr', 'cel-second-messengers'],
    objectiveIds: [`${GP}.cycle`, `${SM}.camp`],
    difficulty: 2,
  }),
  seq({
    id: 'seq:gq-calcium',
    relevance: 'core',
    title: 'The Gq calcium route',
    prompt: 'Order the steps from an M3 receptor to smooth muscle contraction.',
    steps: [
      'Acetylcholine binds the M3 receptor',
      'Gq is activated',
      'Phospholipase C cleaves PIP₂',
      'IP₃ opens Ca²⁺ channels in the endoplasmic reticulum',
      'Cytosolic Ca²⁺ rises',
      'Smooth muscle contracts',
    ],
    explanation: 'Gq receptors (α1, M3, V1, angiotensin II) → phospholipase C → IP₃ (Ca²⁺) and DAG (PKC).',
    conceptIds: ['cel-second-messengers', 'cel-gpcr'],
    objectiveIds: [`${SM}.ip3-dag`, `${GP}.classes`],
    difficulty: 2,
  }),
  seq({
    id: 'seq:no-cgmp',
    relevance: 'core',
    title: 'Nitric oxide relaxes a vessel',
    prompt: 'Order the steps from nitric oxide to smooth muscle relaxation.',
    steps: [
      'Nitric oxide diffuses into the smooth muscle cell',
      'NO activates soluble guanylyl cyclase',
      'GTP is converted to cGMP',
      'cGMP activates protein kinase G',
      'The smooth muscle relaxes',
      'PDE5 breaks down cGMP, ending the signal',
    ],
    explanation: 'Nitrates supply NO; sildenafil blocks PDE5. Combining them lets cGMP accumulate and can cause severe hypotension.',
    conceptIds: ['cel-cgmp'],
    objectiveIds: [`${SM}.cgmp`],
    difficulty: 2,
  }),
  seq({
    id: 'seq:rtk-ras',
    relevance: 'core',
    title: 'Growth factor to nucleus',
    prompt: 'Order the steps of receptor tyrosine kinase signaling through RAS.',
    steps: [
      'A growth factor binds its receptor',
      'Two receptors dimerize',
      'The receptors phosphorylate tyrosines',
      'RAS binds GTP and becomes active',
      'The RAF–MAPK kinase cascade is activated',
      'The signal reaches the nucleus and promotes growth and division',
    ],
    explanation: 'RAS is the switch: mutant RAS that cannot hydrolyze GTP, or BRAF V600E further down, keep this pathway on in cancer.',
    conceptIds: ['cel-rtk'],
    objectiveIds: [`${RT}.mechanism`],
    difficulty: 2,
  }),
  seq({
    id: 'seq:cholera-secretion',
    relevance: 'core',
    title: 'How cholera empties the gut',
    prompt: 'Order the steps from cholera toxin to watery diarrhea.',
    steps: [
      'The toxin’s B part binds the intestinal epithelial cell',
      'The A part enters and ADP-ribosylates Gsα',
      'Adenylyl cyclase stays on and cAMP rises',
      'PKA phosphorylates the CFTR chloride channel',
      'Chloride is secreted into the gut lumen',
      'Water follows, causing massive watery diarrhea',
    ],
    explanation: 'Cholera toxin keeps Gsα active, so cAMP and PKA stay high; PKA opens CFTR, chloride is secreted and water follows.',
    conceptIds: ['cel-gpcr-toxins'],
    objectiveIds: [`${GP}.toxins`],
    difficulty: 2,
  }),
  seq({
    id: 'seq:insulin-glut4',
    relevance: 'core',
    title: 'Insulin opens the glucose door',
    prompt: 'Order the steps from insulin binding to glucose uptake in muscle.',
    steps: [
      'Insulin binds its receptor tyrosine kinase',
      'The receptor phosphorylates its own tyrosines',
      'Insulin receptor substrate (IRS) is phosphorylated',
      'IRS activates PI3K',
      'PI3K signaling activates Akt',
      'GLUT4 vesicles fuse with the plasma membrane',
      'Glucose enters the muscle cell',
    ],
    explanation: 'Insulin receptor → IRS → PI3K → Akt → GLUT4 translocation, the main route for insulin-stimulated glucose uptake in muscle and fat.',
    conceptIds: ['cel-rtk'],
    objectiveIds: [`${RT}.insulin`],
    difficulty: 2,
  }),
  seq({
    id: 'seq:jak-stat',
    relevance: 'core',
    title: 'Cytokine to nucleus',
    prompt: 'Order the steps of JAK–STAT signaling after a cytokine or hormone such as growth hormone binds.',
    steps: [
      'The ligand binds a receptor that has no kinase of its own',
      'Receptor-associated JAKs are activated',
      'JAKs phosphorylate STAT proteins on tyrosine',
      'Phosphorylated STATs dimerize',
      'STAT dimers move into the nucleus',
      'Target genes are transcribed (for growth hormone, IGF-1)',
    ],
    explanation: 'Cytokine receptors borrow a kinase: JAKs phosphorylate STATs, which dimerize, enter the nucleus and change transcription (GH → JAK2 → STAT5 → IGF-1).',
    conceptIds: ['cel-jak-stat'],
    objectiveIds: [`${JS}.mechanism`],
    difficulty: 2,
  }),
];

const matches: MatchItem[] = [
  match({
    id: 'match:receptor-g-protein',
    relevance: 'core',
    title: 'Which G protein, which effect?',
    prompt: 'Match each receptor to its G protein and main effect.',
    pairs: [
      { left: 'Alpha-1 receptor', right: 'Gq: vascular smooth muscle contraction' },
      { left: 'Alpha-2 receptor', right: 'Gi: lowers cAMP' },
      { left: 'Beta-1 receptor', right: 'Gs: faster, stronger heartbeat' },
      { left: 'M2 receptor', right: 'Gi: βγ opens K⁺ channels, slowing the SA node' },
      { left: 'M3 receptor', right: 'Gq: detrusor smooth muscle contraction' },
      { left: 'V2 receptor', right: 'Gs: aquaporin-2 insertion in collecting duct' },
    ],
    explanation: 'Gs raises cAMP, Gi lowers it (and βγ opens K⁺ channels), Gq activates phospholipase C.',
    conceptIds: ['cel-gpcr'],
    objectiveIds: [`${GP}.receptors`],
    difficulty: 2,
  }),
  match({
    id: 'match:second-messenger-drugs',
    relevance: 'supplementary',
    relevanceNote: 'Matches several specific PDE drugs (milrinone, roflumilast); NO, ANP and sildenafil are core but the set as a whole is drug-name recall.',
    title: 'Messengers and the drugs that tune them',
    prompt: 'Match each drug or signal to its target.',
    pairs: [
      { left: 'Nitric oxide', right: 'Soluble guanylyl cyclase' },
      { left: 'ANP', right: 'Membrane guanylyl cyclase receptor' },
      { left: 'Sildenafil', right: 'PDE5 (prolongs cGMP)' },
      { left: 'Milrinone', right: 'PDE3 (raises cAMP in heart and vessels)' },
      { left: 'Roflumilast', right: 'PDE4 (severe COPD)' },
      { left: 'Theophylline', right: 'Nonselective PDE inhibition; adenosine antagonism at high levels' },
    ],
    explanation: 'Guanylyl cyclases make cGMP; phosphodiesterases break cAMP and cGMP down, so PDE inhibitors prolong the signal.',
    conceptIds: ['cel-second-messengers', 'cel-cgmp'],
    objectiveIds: [`${SM}.camp`, `${SM}.cgmp`],
    difficulty: 2,
  }),
  match({
    id: 'match:signaling-diseases',
    relevance: 'core',
    title: 'Signaling gone wrong',
    prompt: 'Match each toxin or disorder to its signaling defect.',
    pairs: [
      { left: 'Cholera toxin', right: 'ADP-ribosylates Gsα (cAMP stays high)' },
      { left: 'Pertussis toxin', right: 'ADP-ribosylates Gi (brake removed)' },
      { left: 'McCune–Albright syndrome', right: 'Mosaic activating GNAS mutation' },
      { left: 'Achondroplasia', right: 'Overactive FGFR3' },
      { left: 'Polycythemia vera', right: 'JAK2 constantly active (V617F)' },
      { left: 'Chronic myeloid leukemia', right: 'BCR-ABL1 fusion kinase' },
    ],
    explanation: 'Classic diseases map onto single signaling switches stuck on (Gs, FGFR3, JAK2, BCR-ABL1) or brakes removed (Gi).',
    conceptIds: ['cel-gpcr-toxins', 'cel-mccune-albright', 'cel-oncogenic-signaling', 'cel-jak-stat'],
    objectiveIds: [`${GP}.toxins`, `${GP}.mccune-albright`, `${RT}.oncogenic`, `${JS}.jak2`],
    difficulty: 2,
  }),
  match({
    id: 'match:receptor-classes',
    relevance: 'core',
    title: 'Receptor classes',
    prompt: 'Match each signal to the receptor class it uses.',
    pairs: [
      { left: 'Cortisol', right: 'Intracellular receptor that binds DNA' },
      { left: 'Insulin', right: 'Receptor tyrosine kinase' },
      { left: 'Acetylcholine at the nicotinic receptor', right: 'Ligand-gated ion channel' },
      { left: 'Glucagon', right: 'G-protein-coupled receptor (cAMP)' },
      { left: 'Thrombopoietin', right: 'Cytokine receptor using JAK–STAT' },
    ],
    explanation: 'The receptor class predicts the messenger and the speed: membrane receptors act quickly, nuclear receptors more slowly through transcription.',
    conceptIds: ['cel-signal-predict', 'cel-other-receptors'],
    objectiveIds: [`${RO}.classify`, `${RO}.nuclear`, `${RO}.ion-channels`],
    difficulty: 1,
  }),
  match({
    id: 'match:hormone-second-messenger',
    relevance: 'core',
    title: 'Hormones and their G proteins',
    prompt: 'Match each hormone to its G protein and target cell.',
    pairs: [
      { left: 'GHRH', right: 'Gs → cAMP in somatotrophs' },
      { left: 'ACTH', right: 'Gs (MC2R) → cAMP in adrenal cortex' },
      { left: 'LH', right: 'Gs → cAMP in Leydig cells' },
      { left: 'GnRH', right: 'Gq → IP₃ and DAG in gonadotropes' },
      { left: 'TRH', right: 'Gq → Ca²⁺ and PKC in thyrotrophs' },
      { left: 'Oxytocin', right: 'Gq → phospholipase Cβ in myometrium' },
    ],
    explanation: 'GHRH, ACTH, LH (and FSH, PTH) raise cAMP through Gs; GnRH, TRH and oxytocin act through Gq and phospholipase C.',
    conceptIds: ['cel-hormone-gpcr'],
    objectiveIds: [`${GP}.receptors`],
    difficulty: 2,
  }),
];

const groups: ConnectionGroup[] = [
  group({
    id: 'grp:gq-receptors',
    relevance: 'core',
    label: 'Couple to Gq',
    tier: 2,
    conceptIds: ['cel-gpcr'],
    objectiveIds: [`${GP}.receptors`],
    difficulty: 2,
    members: ['α1 receptor', 'M3 receptor', 'V1 receptor', 'H1 receptor', 'AT1 receptor'],
    explanation: 'Gq → phospholipase C → IP₃ and DAG.',
  }),
  group({
    id: 'grp:pde-inhibitors',
    relevance: 'core',
    label: 'Phosphodiesterase inhibitors',
    tier: 2,
    conceptIds: ['cel-second-messengers', 'cel-cgmp'],
    objectiveIds: [`${SM}.camp`, `${SM}.cgmp`],
    difficulty: 2,
    members: ['Sildenafil', 'Milrinone', 'Roflumilast', 'Theophylline'],
    explanation: 'PDE5 (sildenafil), PDE3 (milrinone), PDE4 (roflumilast) and nonselective (theophylline).',
  }),
];

const puzzles: ConnectionsPuzzleItem[] = [
  puzzle({
    id: 'cx:g-proteins',
    relevance: 'core',
    title: 'Pick your G protein',
    difficulty: 3,
    conceptIds: ['cel-gpcr', 'cel-rtk', 'cel-jak-stat'],
    objectiveIds: [`${GP}.receptors`, `${RT}.mechanism`, `${JS}.mechanism`],
    groups: [
      { id: 'gs', label: 'Couple to Gs', tier: 2, members: ['Beta-1 receptor', 'Beta-2 receptor', 'D1 receptor', 'V2 receptor'],
        explanation: 'Gs → adenylyl cyclase → cAMP → PKA.', conceptIds: ['cel-gpcr'], objectiveIds: [`${GP}.receptors`],
        accepts: ['Beta-1 receptor', 'Beta-2 receptor', 'D1 receptor', 'V2 receptor', 'H2 receptor'] },
      { id: 'gq', label: 'Couple to Gq', tier: 3, members: ['Alpha-1 receptor', 'M3 receptor', 'V1 receptor', 'H1 receptor'],
        explanation: 'Gq → phospholipase C → IP₃ and DAG.', conceptIds: ['cel-gpcr'], objectiveIds: [`${GP}.receptors`],
        accepts: ['Alpha-1 receptor', 'M3 receptor', 'V1 receptor', 'H1 receptor', 'AT1 receptor'] },
      { id: 'gi', label: 'Couple to Gi', tier: 4, members: ['Alpha-2 receptor', 'M2 receptor', 'D2 receptor', 'D3 receptor'],
        explanation: 'Gi → less cAMP (βγ can open K⁺ channels).', conceptIds: ['cel-gpcr'], objectiveIds: [`${GP}.receptors`],
        accepts: ['Alpha-2 receptor', 'M2 receptor', 'D2 receptor', 'D3 receptor', 'D4 receptor'] },
      { id: 'enzyme', label: 'Not G-protein-coupled: kinase-linked receptors', tier: 1, members: ['Insulin receptor', 'EGF receptor', 'FGFR3', 'Thrombopoietin receptor'],
        explanation: 'Receptor tyrosine kinases (insulin, EGF, FGFR3) and a JAK-linked cytokine receptor (thrombopoietin).', conceptIds: ['cel-rtk', 'cel-jak-stat'], objectiveIds: [`${RT}.mechanism`, `${JS}.mechanism`],
        accepts: ['Insulin receptor', 'EGF receptor', 'FGFR3', 'Thrombopoietin receptor'] },
    ],
    decoys: [
      { label: 'Adrenergic receptors', accepts: ['Alpha-1 receptor', 'Alpha-2 receptor', 'Beta-1 receptor', 'Beta-2 receptor'] },
      { label: 'Dopamine receptors', accepts: ['D1 receptor', 'D2 receptor', 'D3 receptor'] },
      { label: 'Muscarinic receptors', accepts: ['M2 receptor', 'M3 receptor'] },
      { label: 'Vasopressin receptors', accepts: ['V1 receptor', 'V2 receptor'] },
    ],
  }),
];

const cases: CaseItem[] = [
  kase({
    id: 'case:cholera',
    relevance: 'core',
    title: 'Rice-water stools',
    conceptIds: ['cel-gpcr-toxins', 'cel-gpcr'],
    objectiveIds: [`${GP}.toxins`],
    reasoning: 'interpretation',
    difficulty: 3,
    stages: [
      { label: 'Presentation', text: 'A 30-year-old aid worker has had profuse, painless watery diarrhea for 12 hours, many liters in total.' },
      { label: 'History', text: 'She has been working in a camp where several people have similar illness after drinking untreated water.' },
      { label: 'Examination', text: 'Sunken eyes, dry mucous membranes, tachycardia and low blood pressure. No fever. Abdomen soft and non-tender.' },
      { label: 'Laboratory', text: 'Stool is pale and watery, with flecks of mucus and no blood or white cells. Serum potassium and bicarbonate are low.' },
      { label: 'Further clue', text: 'Stool culture grows a curved gram-negative rod.' },
    ],
    question: 'Which molecular event in her intestinal cells explains the diarrhea?',
    options: [
      { id: 'a', text: 'ADP-ribosylation of Gsα keeps adenylyl cyclase active' },
      { id: 'b', text: 'ADP-ribosylation of Gi removes the brake on adenylyl cyclase', whyWrong: 'That is pertussis toxin, which causes whooping cough, not secretory diarrhea.' },
      { id: 'c', text: 'Inactivation of 28S rRNA stops protein synthesis', whyWrong: 'Shiga toxin acts this way and causes bloody diarrhea, not painless watery stools.' },
      { id: 'd', text: 'Invasion and destruction of the mucosa', whyWrong: 'Invasive infection gives blood and white cells in stool, which are absent here.' },
      { id: 'e', text: 'Activation of soluble guanylyl cyclase by nitric oxide', whyWrong: 'Nitric oxide relaxes smooth muscle; it does not explain toxin-driven secretion.' },
    ],
    answerId: 'a',
    explanation:
      'Massive painless watery diarrhea after contaminated water, without blood or white cells, and a curved gram-negative rod point to cholera. Cholera toxin ADP-ribosylates Gsα, so adenylyl cyclase stays on and cAMP rises; PKA then opens the CFTR chloride channel, chloride is secreted into the lumen and water follows, producing huge volumes of fluid.',
    mechanism: 'Cholera toxin → ADP-ribosylated Gsα (cannot switch off) → adenylyl cyclase on → ↑ cAMP → PKA opens CFTR → Cl⁻ and water into the lumen → dehydration.',
    takeaway: 'Rice-water diarrhea = cholera toxin locking Gs on (↑ cAMP).',
    differentials: [
      { name: 'Enterotoxigenic E. coli', why: 'Its heat-labile toxin acts like cholera toxin; usually milder traveler’s diarrhea.' },
      { name: 'Shigella infection', why: 'Bloody diarrhea with fever and white cells in stool.' },
    ],
  }),
  kase({
    id: 'case:mccune-albright',
    relevance: 'core',
    title: 'Early puberty and a crooked map',
    conceptIds: ['cel-mccune-albright', 'cel-gpcr'],
    objectiveIds: [`${GP}.mccune-albright`],
    reasoning: 'interpretation',
    difficulty: 3,
    stages: [
      { label: 'Presentation', text: 'A 5-year-old girl is brought in for breast development and an episode of vaginal bleeding.' },
      { label: 'History', text: 'She broke her thigh bone after a minor fall last year. No family history of similar problems.' },
      { label: 'Examination', text: 'Large light-brown patches with jagged edges on the left side of her back and buttock, stopping at the midline. Tanner stage 3 breasts.' },
      { label: 'Laboratory', text: 'Estradiol raised; LH and FSH suppressed. Free T4 raised with suppressed TSH.' },
      { label: 'Imaging & tests', text: 'Radiographs show expansile, ground-glass lesions in several bones.' },
    ],
    question: 'Which molecular abnormality explains her bone, skin and endocrine findings?',
    options: [
      { id: 'a', text: 'A mosaic activating mutation of Gsα that keeps adenylyl cyclase on' },
      { id: 'b', text: 'A germline loss-of-function mutation of NF1', whyWrong: 'Neurofibromatosis causes smooth-bordered café-au-lait spots and neurofibromas, not fibrous dysplasia with hormone excess.' },
      { id: 'c', text: 'Premature activation of hypothalamic GnRH release', whyWrong: 'Central puberty raises LH and FSH; here they are suppressed (peripheral, gonadotropin-independent puberty).' },
      { id: 'd', text: 'A constitutively active FGFR3 receptor', whyWrong: 'FGFR3 gain of function causes achondroplasia.' },
      { id: 'e', text: 'Autoantibodies stimulating the TSH receptor', whyWrong: 'Graves disease would not explain the bone lesions, skin patches and early puberty.' },
    ],
    answerId: 'a',
    explanation:
      'Polyostotic fibrous dysplasia, one-sided café-au-lait spots with jagged borders and gonadotropin-independent precocious puberty with hyperthyroidism indicate McCune–Albright syndrome. A somatic, mosaic GNAS mutation makes Gsα constantly active, so cAMP is high in affected bone, skin and endocrine cells.',
    mechanism: 'Postzygotic GNAS (Gsα) mutation → constitutive adenylyl cyclase activity → ↑ cAMP in mosaic tissues → fibrous dysplasia, pigmentation, autonomous hormone secretion.',
    takeaway: 'Fibrous dysplasia + irregular café-au-lait + endocrine excess = McCune–Albright (mosaic Gsα on).',
    differentials: [
      { name: 'Neurofibromatosis type 1', why: 'Smooth-bordered café-au-lait spots, neurofibromas, Lisch nodules.' },
      { name: 'Central precocious puberty', why: 'LH and FSH are raised, not suppressed.' },
    ],
  }),
];

export const cellularBatch2: Bundle = {
  concepts: core.concepts,
  items: [...core.items, ...sequences, ...matches, ...groups, ...puzzles, ...cases],
};
