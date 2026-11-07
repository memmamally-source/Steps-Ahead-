import { AI_DRAFT, defineConcepts, type Bundle } from '../define';
import type { CaseItem, Citation, ConnectionGroup, ConnectionsPuzzleItem, MatchItem, OutlineRef, SequenceItem } from '../schema';

/**
 * Biochemistry — Cellular biochemistry, batch 1: cell cycle, organelles and trafficking, peroxisomes
 * and the proteasome, cytoskeleton, intermediate filaments, membranes and transport (21 objectives,
 * curriculum order). Cell signaling follows in batch 2.
 *
 * Written to mainstream Step 1 depth: research verified each fact but did not set the scope. Items
 * are CORE unless they assess application-level reasoning (APPLICATION). Original, AI-drafted
 * content: DRAFT, NOT MEDICALLY REVIEWED.
 */

const MS = 'Multisystem Processes & Disorders' as const;
const listed = (area: OutlineRef['area'], section: string): OutlineRef => ({ area, section, listed: true });
const found = (area: OutlineRef['area'], section: string): OutlineRef => ({ area, section, listed: false });
const GEN = 'Genetic, metabolic, and developmental disorders';

// ---- Citation helpers -------------------------------------------------------------------------
const MP = (path: string, title: string): Citation => ({
  sourceId: 'medlineplus', locator: `MedlinePlus Genetics: ${title}`, url: `https://medlineplus.gov/genetics/${path}/`, checked: 'full-text',
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
const DM = (setid: string, title: string): Citation => ({
  sourceId: 'dailymed', locator: `DailyMed: ${title}`, url: `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${setid}`, ref: `SPL set id ${setid}`, checked: 'full-text',
});

// Shared citations
const OS_CONTROL = OSB('10-3-control-of-the-cell-cycle', '10.3 Control of the Cell Cycle');
const OS_CANCER = OSB('10-4-cancer-and-the-cell-cycle', '10.4 Cancer and the Cell Cycle');
const OS_ENDO = OSB('4-4-the-endomembrane-system-and-proteins', '4.4 The Endomembrane System and Proteins');
const OS_EUK = OSB('4-3-eukaryotic-cells', '4.3 Eukaryotic Cells');
const OS_CYTO = OSB('4-5-the-cytoskeleton', '4.5 The Cytoskeleton');
const OS_MEMB = OSB('5-1-components-and-structure', '5.1 Components and Structure');
const OS_PASSIVE = OSB('5-2-passive-transport', '5.2 Passive Transport');
const OS_ACTIVE = OSB('5-3-active-transport', '5.3 Active Transport');
const AP_MEMB = OSA('3-1-the-cell-membrane', '3.1 The Cell Membrane');
const AP_ORG = OSA('3-2-the-cytoplasm-and-cellular-organelles', '3.2 The Cytoplasm and Cellular Organelles');
const AP_DIV = OSA('3-5-cell-growth-and-division', '3.5 Cell Growth and Division');
const VINCRISTINE = DM('b22e4c8e-dbe1-4d4b-a026-e1812974071c', 'Vincristine sulfate injection, Hospira — prescribing information (mechanism of action), 2026');
const HYDROXYUREA = DM('e76fd60e-7644-48c5-9857-3608a045000b', 'Hydroxyurea capsules — prescribing information (12.1 mechanism of action), 2026');
const VELCADE = DM('1521d321-e724-4ffc-adad-34bf4f44fac7', 'VELCADE (bortezomib), Takeda — prescribing information (12.1 mechanism of action), 2025');
const LANOXIN = DM('d91e3646-4c63-4512-ab22-db39c085c4dc', 'LANOXIN (digoxin) tablets — prescribing information (12.1 mechanism of action), 2025');
const PACLITAXEL = PM(25213191, 'Weaver BA. How Taxol/paclitaxel kills cancer cells (microtubule-stabilizing drug). Mol Biol Cell 2014');
const BLEOMYCIN_G2 = PM(15081413, 'Arai M et al. Bleomycin arrests the cell cycle at G2; colchicine at M phase. Biochem Biophys Res Commun 2004');
const CDK46 = PM(30982746, 'Topacio BR et al. Cyclin D–Cdk4,6 drives cell-cycle progression via the retinoblastoma protein. Mol Cell 2019');
const PALBO = PM(34784791, 'Pennycook BR, Barr AR. Palbociclib-mediated (CDK4/6 inhibitor) cell cycle arrest. Open Biol 2021');
const CKI = PM(12559756, 'Coqueret O. p21 and p27 bind cyclin–CDK complexes and inhibit their activity. Trends Cell Biol 2003');
const COATS = PM(11377815, 'Gorelick FS, Shugrue C. Exiting the endoplasmic reticulum (COPII, COPI and clathrin routes). Mol Cell Endocrinol 2001');
const COPI = PM(24840894, 'Jackson LP. Structure and mechanism of COPI vesicle biogenesis (retrograde Golgi → ER). Curr Opin Cell Biol 2014');
const GOLGI_GLYC = PM(20233335, 'Gomord V et al. N-glycan processing and O-glycan biosynthesis in the Golgi apparatus (review). Plant Biotechnol J 2010');
const GNPTAB = MP('gene/gnptab', 'GNPTAB gene');
const ML2 = MP('condition/mucolipidosis-ii-alpha-beta', 'Mucolipidosis II alpha/beta (I-cell disease)');
const ML2_PLASMA = PM(6780772, 'Pollard AC et al. Mucolipidosis II diagnosed by elevated plasma lysosomal enzyme activities. Med J Aust 1980');
const ML2_PLASMA2 = PM(35929931, 'He T et al. Lysosomal enzyme activities increased in plasma in mucolipidosis II α/β. Zhonghua Yi Xue Yi Chuan Xue Za Zhi 2022');
const PEROX_FN = PM(3119935, 'Lazarow PB. The role of peroxisomes in mammalian cellular metabolism (plasmalogens, VLCFA β-oxidation). J Inherit Metab Dis 1987');
const ZS_BIOCHEM = PM(3119940, 'Schutgens RB et al. Zellweger syndrome: biochemical procedures in diagnosis (VLCFA, phytanic acid, ether lipids). J Inherit Metab Dis 1987');
const CATALASE = PM(8556358, 'Chandoga J. The role of peroxisomes in intermediary metabolism (catalase). Bratisl Lek Listy 1995');
const ZSD = MP('condition/zellweger-spectrum-disorder', 'Zellweger spectrum disorder');
const REFSUM = MP('condition/refsum-disease', 'Refsum disease');
const REFSUM_DIET = PM(10611628, 'Weinstein R. Phytanic acid storage disease (Refsum disease): dietary restriction of phytanic acid. J Clin Apher 1999');
const XALD = MP('condition/x-linked-adrenoleukodystrophy', 'X-linked adrenoleukodystrophy');
const ABCD1 = MP('gene/abcd1', 'ABCD1 gene');
const UPS_NEURO = PM(25413678, 'Zheng C et al. Failure of the ubiquitin proteasome system: risk for neurodegenerative diseases. Neurodegener Dis 2014');
const PCD = MP('condition/primary-ciliary-dyskinesia', 'Primary ciliary dyskinesia');
const NNO = PM(31770003, 'Shapiro AJ et al. Nasal nitric oxide measurement in primary ciliary dyskinesia (extremely low values). Ann Am Thorac Soc 2020');
const MOTORS = PM(2466291, 'Schnapp BJ, Reese TS. Dynein is the motor for retrograde axonal transport; kinesin is anterograde. Proc Natl Acad Sci U S A 1989');
const COLCHICINE = PM(20687623, 'Yang LP. Oral colchicine in gout: inhibition of microtubule polymerization in neutrophils. Drugs 2010');
const GRISEO = PM(15985553, 'Panda D et al. Griseofulvin inhibits mitosis strongly in fungal cells by affecting spindle microtubules. Proc Natl Acad Sci U S A 2005');
const BENZIMIDAZOLE = PM(28399389, 'Čáňová K et al. Benzimidazole anthelmintics bind tubulin and disrupt microtubules. Acta Medica (Hradec Kralove) 2017');
const IF_MARKERS = PM(3341148, 'Altmannsberger M. Intermediate filament proteins as markers in tumor diagnosis. Veroff Pathol 1988');
const LAMINS = PM(20452940, 'Wilson KL, Foisner R. Lamins are the major intermediate filaments of the nucleus. Cold Spring Harb Perspect Biol 2010');
const GLUT_BRAIN = PM(9298843, 'Vannucci SJ et al. Glucose transporters in brain: GLUT1 at the blood–brain barrier, GLUT3 in neurons. Glia 1997');
const GLUT1_RBC = PM(12029447, 'Klepper J, Voit T. GLUT1 deficiency syndrome; GLUT1 in erythrocytes and the blood–brain barrier. Eur J Pediatr 2002');
const GLUT2 = PM(25421524, 'Thorens B. GLUT2, glucose sensing and glucose homeostasis (liver, intestine, kidney, β cells). Diabetologia 2015');
const GLUT4 = PM(37248992, 'van Gerwen J et al. Insulin signalling and GLUT4 trafficking (muscle and adipose tissue). Biochem Soc Trans 2023');
const GLUT5 = PM(32829466, 'Koepsell H. Glucose transporters in the small intestine (SGLT1, GLUT2; GLUT5 for fructose). Pflugers Arch 2020');
const SGLT2 = PM(25616707, 'Gallo LA et al. SGLT2 in the early proximal tubule reabsorbs most filtered glucose. Diab Vasc Dis Res 2015');
const NCX = PM(16825310, 'Altamirano J et al. Glycoside inotropy requires Na⁺–Ca²⁺ exchanger function. J Physiol 2006');

// Curriculum subtopic ids
const CC = 'bc-cell-cycle';
const EG = 'bc-er-golgi';
const PX = 'bc-peroxisome-proteasome';
const CY = 'bc-cytoskeleton';
const IFS = 'bc-intermediate-filaments';
const MB = 'bc-membrane-pumps';

const core = defineConcepts([
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-cell-cycle',
    title: 'Cell cycle phases, checkpoints and phase-specific drugs',
    discipline: 'biochemistry',
    alsoDisciplines: ['cell-biology', 'pharmacology'],
    system: 'multisystem',
    topic: 'biochem-cellular',
    difficulty: 2,
    curriculum: [`${CC}.phases`, `${CC}.phase-drugs`],
    objectives: ['Describe the phases and checkpoints of the cell cycle and their regulators', 'Match anticancer drugs to the phase they act in'],
    citations: [OS_CONTROL, CKI, AP_DIV, VINCRISTINE, PACLITAXEL, HYDROXYUREA, BLEOMYCIN_G2, PALBO],
    facts: [
      'Checkpoints occur near the end of G1 (DNA damage, cell size), at G2/M (complete, undamaged DNA replication) and during metaphase (spindle attachment of every kinetochore).',
      'Cyclins bind and activate cyclin-dependent kinases (CDKs), which phosphorylate proteins that move the cell to the next phase; cyclins are degraded after each transition.',
      'CDK inhibitors p21 and p27 bind cyclin–CDK complexes and block their activity, arresting the cycle.',
      'G0 is a resting state: some cells pause there temporarily, while others (most neurons) have stopped dividing permanently.',
      'Vincristine inhibits microtubule formation in the mitotic spindle, arresting dividing cells in metaphase; paclitaxel stabilizes microtubules.',
      'Hydroxyurea inhibits ribonucleotide reductase and DNA synthesis (S phase); bleomycin damages DNA and arrests cells in G2; palbociclib inhibits CDK4/6 and arrests cells in G1.',
    ],
    factRefs: [[0], [0], [1, 0], [2], [3, 4], [5, 6, 7]],
    mechanism:
      'Cyclin–CDK complexes are the accelerator and CDK inhibitors (p21, p27) the brake. At each checkpoint the cell asks whether it is safe to go on; if DNA is damaged or chromosomes are not attached to the spindle, the cycle stops. Cell-cycle-specific drugs hit the processes of a particular phase: DNA synthesis in S, DNA integrity before mitosis, and the spindle in M.',
    associations: ['G1/S checkpoint', 'G2/M checkpoint', 'Spindle checkpoint', 'Cyclins', 'CDKs', 'p21', 'p27', 'G0'],
    misconception:
      'Cyclins are not kinases: they are regulatory partners that switch CDKs on. CDK inhibitors such as p21 and p27 stop the cycle by binding cyclin–CDK complexes.',
    quick:
      'G1 → S (DNA synthesis) → G2 → M. Checkpoints: G1/S, G2/M, metaphase. Cyclin + CDK = go; p21, p27 = stop. Phase drugs: S = hydroxyurea, antimetabolites; G2 = bleomycin; M = vincristine (no spindle), paclitaxel (frozen spindle); G1 = CDK4/6 inhibitors.',
    detailed: [
      'Cells grow in G1, copy DNA in S, prepare in G2 and divide in M. At the G1 checkpoint the cell checks size, reserves and DNA damage; at G2/M it checks that replication is complete and undamaged; in metaphase the spindle checkpoint waits until every chromosome is attached. Cells that stop dividing enter G0, temporarily or permanently.',
      'Rising cyclins activate CDKs, which phosphorylate the proteins needed for the next phase. CDK inhibitors (p21, p27) bind and block cyclin–CDK complexes. Many anticancer drugs exploit phases: S-phase drugs block DNA synthesis, bleomycin stops cells in G2, vincristine prevents spindle formation and paclitaxel prevents spindle disassembly, and CDK4/6 inhibitors hold cells in G1.',
    ],
    takeaway: 'Cyclin–CDK drives the cycle; p21/p27 and checkpoints stop it. S: hydroxyurea; G2: bleomycin; M: vincristine, paclitaxel.',
    related: ['cel-rb-p53'],
    outline: found(MS, 'Neoplasms and related disorders'),
    mcq: [
      {
        stem: 'Cells exposed to radiation raise their p21 levels. How does p21 stop the cell cycle?',
        options: [
          ['a', 'It binds cyclin–CDK complexes and blocks their kinase activity'],
          ['b', 'It degrades cyclins after the cell passes each checkpoint', 'Cyclins are degraded by cytoplasmic enzymes after each transition; p21 inhibits the complexes.'],
          ['c', 'It phosphorylates Rb so that E2F is released', 'Phosphorylating Rb is the job of cyclin–CDKs and pushes the cell forward, not backward.'],
          ['d', 'It depolymerizes the mitotic spindle', 'Spindle disruption is how vincristine acts; p21 acts at G1 through CDKs.'],
          ['e', 'It repairs the damaged DNA directly', 'p21 enforces the arrest; repair is carried out by DNA repair enzymes.'],
        ],
        answer: 'a',
        mini: 'p21 (induced by p53) and p27 are CDK inhibitors: they bind cyclin–CDK complexes and hold the cell at the checkpoint.',
        reasoning: 'mechanism',
        objectives: [`${CC}.phases`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'DNA damage is assessed at the G1 checkpoint before the cell commits to S phase.', isTrue: true, correction: 'Correct: the G1 checkpoint checks size, reserves and DNA damage.', objectives: [`${CC}.phases`], difficulty: 1 },
      { statement: 'Vincristine acts mainly during S phase by inhibiting DNA polymerase.', isTrue: false, correction: 'Vincristine blocks microtubule formation in the mitotic spindle, arresting cells in metaphase (M phase).', objectives: [`${CC}.phase-drugs`], difficulty: 1 },
    ],
    clues: [
      { answer: 'CYCLIN', clue: 'Regulatory protein whose levels rise and fall to switch on CDKs', objectives: [`${CC}.phases`], difficulty: 1 },
      { answer: 'METAPHASE', clue: 'Mitotic stage where vincristine-treated cells are arrested', objectives: [`${CC}.phase-drugs`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-rb-p53',
    title: 'Rb and p53: tumor suppressors at the G1 checkpoint',
    discipline: 'pathology',
    alsoDisciplines: ['biochemistry', 'genetics'],
    system: 'multisystem',
    topic: 'biochem-cellular',
    difficulty: 3,
    curriculum: [`${CC}.rb-p53`],
    objectives: ['Explain how Rb and p53 stop the cell cycle and predict the effect of their loss'],
    citations: [OS_CONTROL, OS_CANCER, CDK46, MP('condition/retinoblastoma', 'Retinoblastoma'), MP('condition/li-fraumeni-syndrome', 'Li-Fraumeni syndrome')],
    facts: [
      'Active (dephosphorylated) Rb binds the transcription factor E2F and blocks the G1/S transition; as Rb is phosphorylated it releases E2F, which turns on genes for S phase.',
      'Cyclin D–CDK4/6 phosphorylates Rb to drive cell-cycle progression.',
      'If DNA is damaged, p53 halts the cycle and recruits repair; rising p53 induces p21, which inhibits cyclin–CDK. If the damage cannot be repaired, p53 triggers apoptosis.',
      'Mutated p53 genes are found in more than half of human tumors.',
      'RB1 is a tumor suppressor gene. In hereditary retinoblastoma one altered RB1 copy is present in every cell (autosomal dominant predisposition) and a second hit in retinal cells causes the tumor, typically in both eyes; about one-third of retinoblastomas are hereditary. Survivors are at risk of osteosarcoma and other cancers.',
      'Li–Fraumeni syndrome is an autosomal dominant cancer predisposition caused by germline TP53 variants; breast cancer, osteosarcoma and soft tissue sarcomas are typical, and a second hit in the other TP53 copy allows tumors to form.',
    ],
    factRefs: [[0], [2], [0], [1], [3], [4]],
    mechanism:
      'Rb and p53 are brakes at G1. Rb holds E2F until growth signals (cyclin D–CDK4/6) phosphorylate it; p53 responds to DNA damage by inducing p21 and, if needed, apoptosis. Because both copies must be lost before a cell escapes control (two hits), people born with one defective copy in every cell develop tumors earlier and more often.',
    associations: ['Rb', 'E2F', 'Cyclin D–CDK4/6', 'p53', 'p21', 'Two-hit hypothesis', 'Retinoblastoma', 'Osteosarcoma', 'Li–Fraumeni syndrome'],
    misconception:
      'Tumor suppressor syndromes are inherited in an autosomal dominant pattern even though tumor cells need both copies lost: the predisposition (one hit) is inherited, and the second hit is acquired.',
    quick:
      'Hypophosphorylated Rb holds E2F → no S phase; cyclin D–CDK4/6 phosphorylates Rb → E2F free. p53 senses DNA damage → p21 → arrest, or apoptosis. Germline RB1 → bilateral retinoblastoma, osteosarcoma. Germline TP53 → Li–Fraumeni (breast cancer, sarcomas).',
    detailed: [
      'Rb is active when dephosphorylated: it binds E2F and blocks the genes needed to enter S phase. Growth signals raise cyclin D, and cyclin D–CDK4/6 phosphorylates Rb, releasing E2F. Loss of Rb removes this brake.',
      'p53 is the guardian of the G1 checkpoint. DNA damage raises p53, which induces p21 to inhibit cyclin–CDKs and allows repair; irreparable damage leads to apoptosis. Inherited loss of one copy of RB1 or TP53 means every cell already has the first hit, so tumors appear early and are often multiple or bilateral.',
    ],
    takeaway: 'Rb (holds E2F) and p53 (DNA damage → p21 or apoptosis) guard G1; inherited one-hit loss → early, multiple tumors.',
    related: ['cel-cell-cycle'],
    outline: listed('Nervous System & Special Senses', 'Disorders of the eye and eyelid'),
    mcq: [
      {
        stem: 'In a tumor cell line, Rb cannot be phosphorylated because of a mutation at its CDK sites. What is the expected effect on the cell cycle?',
        options: [
          ['a', 'Rb keeps binding E2F, so cells stay arrested in G1'],
          ['b', 'E2F is released continuously, so cells divide faster', 'Release requires phosphorylation; an unphosphorylatable Rb stays bound to E2F.'],
          ['c', 'Cells skip G2 and enter mitosis directly', 'Rb acts at the G1/S transition, not at G2/M.'],
          ['d', 'p53 is degraded and apoptosis is blocked', 'Rb phosphorylation does not control p53 levels.'],
          ['e', 'The spindle checkpoint is permanently satisfied', 'The spindle checkpoint monitors kinetochore attachment in metaphase.'],
        ],
        answer: 'a',
        mini: 'Rb must be phosphorylated by cyclin D–CDK4/6 to release E2F; a non-phosphorylatable Rb is a permanent brake at G1.',
        reasoning: 'mechanism',
        difficulty: 3,
      },
      {
        stem: 'A 14-month-old girl has white pupillary reflexes in both eyes and is found to have bilateral retinoblastoma. Her father had an eye removed in infancy. Why did she develop tumors in both eyes so early?',
        options: [
          ['a', 'One RB1 hit is inherited; each retinal cell needs only one more'],
          ['b', 'She inherited two mutant RB1 copies from her father', 'A child inherits one copy from each parent; the second hit is acquired in retinal cells.'],
          ['c', 'Retinoblastoma is caused by an activating oncogene mutation', 'RB1 is a tumor suppressor; tumors need loss of both copies.'],
          ['d', 'The tumor spread from one eye to the other through the optic nerve', 'Bilateral tumors arise independently because every retinal cell carries the first hit.'],
          ['e', 'Her p53 gene is inactive in all cells', 'Germline TP53 loss causes Li–Fraumeni syndrome, not bilateral retinoblastoma.'],
        ],
        answer: 'a',
        mini: 'Hereditary retinoblastoma: the first RB1 hit is in every cell, so a single acquired hit in a retinal cell causes a tumor — often in both eyes and early. She also has an increased later risk of osteosarcoma.',
        reasoning: 'multistep',
        steps: ['Bilateral, early tumors plus an affected father → hereditary (germline) RB1 variant.', 'Every retinal cell already has one hit.', 'Only one acquired hit is needed per cell → multiple, bilateral, early tumors.'],
        difficulty: 4,
      },
      {
        stem: 'A 29-year-old woman has breast cancer. Her brother had osteosarcoma at 15 and her mother a soft tissue sarcoma at 40. A germline variant in which gene is most likely?',
        options: [
          ['a', 'TP53'],
          ['b', 'RB1', 'Germline RB1 variants cause retinoblastoma, with later osteosarcoma risk, but not this breast–sarcoma cluster.'],
          ['c', 'MLH1', 'MLH1 causes Lynch syndrome (colorectal and endometrial cancer).'],
          ['d', 'APC', 'APC causes familial adenomatous polyposis.'],
          ['e', 'RET', 'RET gain of function causes MEN2 (medullary thyroid cancer, pheochromocytoma).'],
        ],
        answer: 'a',
        mini: 'Early breast cancer, osteosarcoma and sarcomas across generations = Li–Fraumeni syndrome (germline TP53, autosomal dominant).',
        reasoning: 'identification',
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'Mutations in the p53 gene are found in more than half of human tumors.', isTrue: true, correction: 'Correct: p53 is the most commonly mutated tumor suppressor.', difficulty: 1 },
      { statement: 'Hereditary retinoblastoma follows an autosomal recessive pattern because tumors need two mutant alleles.', isTrue: false, correction: 'The predisposition is autosomal dominant: one mutant allele is inherited and the second hit is acquired.', difficulty: 2 },
    ],
    clues: [
      { answer: 'RETINOBLASTOMA', clue: 'Childhood eye cancer from loss of both RB1 copies', difficulty: 1 },
      { answer: 'APOPTOSIS', clue: 'Programmed cell death that p53 triggers when DNA damage cannot be repaired', difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-cell-types',
    title: 'Permanent, stable and labile cells',
    discipline: 'pathology',
    alsoDisciplines: ['cell-biology'],
    system: 'multisystem',
    topic: 'biochem-cellular',
    difficulty: 2,
    curriculum: [`${CC}.cell-types`],
    objectives: ['Classify cells by their ability to divide and predict how tissues recover from injury'],
    citations: [
      AP_DIV,
      PM(12490302, 'Fausto N. Hepatocytes are normally quiescent but replicate rapidly after resection. Mech Dev 2003'),
      PM(11379353, 'Kountouras J et al. Liver regeneration after hepatectomy: quiescent hepatocytes re-enter the cell cycle. Hepatogastroenterology 2001'),
      PM(33087630, 'Shiba Y. The adult heart has limited regenerative capacity; lost myocardium permanently impairs function. Circ J 2020'),
      PM(33271948, 'Seo Y et al. Intestinal epithelium renews every 3–5 days from crypt stem cells. Biomedicines 2020'),
    ],
    facts: [
      'Most somatic cells divide regularly, but some do not (gametes, red blood cells, most neurons and some muscle cells); cells that have stopped dividing are in G0, temporarily or permanently.',
      'Hepatocytes are normally quiescent but re-enter the cell cycle and replicate rapidly after part of the liver is removed.',
      'The adult heart has limited regenerative capacity, so loss of myocardium permanently impairs cardiac function.',
      'Intestinal epithelium renews continuously from crypt stem cells, turning over every 3–5 days.',
    ],
    factRefs: [[0], [1, 2], [3], [4]],
    mechanism:
      'Tissue recovery depends on whether the injured cells can divide. Labile cells divide continuously and replace losses quickly; stable cells rest in G0 but re-enter the cycle when stimulated; permanent cells cannot divide, so lost cells are replaced by scar.',
    associations: ['Labile cells', 'Stable cells', 'Permanent cells', 'G0', 'Regeneration', 'Scar'],
    misconception:
      'Stable cells are not “non-dividing”: hepatocytes rarely divide at rest but proliferate vigorously after injury or resection, which is why the liver regrows.',
    quick:
      'Labile (constantly dividing): gut epithelium, skin, bone marrow, hair follicles. Stable (G0, can re-enter): hepatocytes, proximal tubule cells. Permanent (cannot divide): most neurons, cardiac and skeletal muscle, red cells. Permanent-cell loss → scar.',
    detailed: [
      'Labile tissues such as intestinal epithelium are renewed every few days from stem cells, so they recover quickly but are also the first damaged by drugs that kill dividing cells.',
      'Stable cells such as hepatocytes sit in G0 and re-enter the cycle when stimulated, allowing the liver to regrow after resection. Permanent cells (most neurons, cardiomyocytes) cannot meaningfully divide, so an infarct heals by fibrosis rather than new muscle.',
    ],
    takeaway: 'Labile = always dividing; stable = G0 but can return; permanent = cannot divide (scar replaces them).',
    related: ['cel-cell-cycle'],
    outline: found(MS, 'Neoplasms and related disorders'),
    mcq: [
      {
        stem: 'A living donor gives part of her liver, and within months the remaining liver regains its mass. A man who survives a large myocardial infarction has a permanent scar in the ventricular wall. Which difference explains these outcomes?',
        options: [
          ['a', 'Hepatocytes can leave G0 and divide; adult cardiomyocytes cannot meaningfully do so'],
          ['b', 'Hepatocytes divide constantly, whereas cardiomyocytes divide only after injury', 'Hepatocytes are normally quiescent; it is cardiomyocytes that lack useful regenerative capacity.'],
          ['c', 'Liver regrowth comes from scar tissue that converts into hepatocytes', 'Liver regrowth is replication of existing hepatocytes, not conversion of scar.'],
          ['d', 'Cardiomyocytes regenerate but are killed again by ongoing ischemia', 'The infarct is replaced by fibrous scar because cardiomyocytes do not regenerate effectively.'],
          ['e', 'Both organs regenerate fully; the cardiac scar is an imaging artifact', 'Myocardial loss permanently impairs cardiac function.'],
        ],
        answer: 'a',
        mini: 'Hepatocytes are stable cells (quiescent in G0 but able to re-enter the cycle); cardiomyocytes are essentially permanent cells, so infarcts heal by scar.',
        reasoning: 'comparison',
        steps: ['Liver regrows after resection → hepatocytes re-enter the cell cycle from G0 (stable cells).', 'Infarct leaves scar → cardiomyocytes cannot replace themselves (permanent cells).', 'Recovery depends on the dividing capacity of the injured cell type.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Intestinal epithelium is a labile tissue that renews itself every few days.', isTrue: true, correction: 'Correct: crypt stem cells replace the epithelium about every 3–5 days.', difficulty: 1 },
      { statement: 'Most neurons re-enter the cell cycle to replace neighbors lost after a stroke.', isTrue: false, correction: 'Most neurons are permanent (G0) cells and do not divide to replace lost neurons.', difficulty: 1 },
    ],
    clues: [
      { answer: 'LABILE', clue: 'Cell type that divides continuously, like gut epithelium', difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-er-golgi',
    title: 'ER, Golgi and vesicle traffic',
    discipline: 'biochemistry',
    alsoDisciplines: ['cell-biology', 'histology'],
    system: 'multisystem',
    topic: 'biochem-cellular',
    difficulty: 2,
    curriculum: [`${EG}.er`, `${EG}.golgi`, `${EG}.vesicles`],
    objectives: ['Distinguish rough and smooth ER', 'Describe Golgi functions including mannose-6-phosphate tagging', 'Match vesicle coats to their routes'],
    citations: [OS_ENDO, AP_ORG, COATS, COPI, GOLGI_GLYC, GNPTAB],
    facts: [
      'Rough ER is studded with ribosomes and makes secretory and membrane proteins, which it folds and modifies; it is abundant in cells that secrete proteins.',
      'Smooth ER lacks ribosomes; it makes phospholipids and steroid hormones (abundant in ovaries and testes), stores Ca²⁺ and breaks down certain toxins.',
      'Proteins pass from the ER to the Golgi, which further modifies them by adding carbohydrates; N-glycans are processed and O-glycans built in the Golgi.',
      'Lysosomal hydrolases are tagged with mannose-6-phosphate (first step: GlcNAc-1-phosphotransferase), which directs them to lysosomes.',
      'COPII coats carry cargo out of the ER to the Golgi; COPI coats return cargo from the Golgi to the ER (retrograde); clathrin coats work at the plasma membrane (endocytosis) and at the trans-Golgi for lysosome delivery.',
    ],
    factRefs: [[0, 1], [1], [0, 4], [5], [2, 3]],
    mechanism:
      'Secretory and membrane proteins are made into the rough ER, modified, and shipped forward in COPII vesicles to the Golgi, which adds and trims sugars and sorts proteins by their tags. Escaped ER proteins return in COPI vesicles. Proteins carrying mannose-6-phosphate are sent to lysosomes; others go to the plasma membrane or are secreted.',
    associations: ['Rough ER', 'Smooth ER', 'Golgi apparatus', 'Mannose-6-phosphate', 'COPII', 'COPI', 'Clathrin', 'Plasma cells', 'Steroid-producing cells'],
    misconception:
      'Smooth ER is not a “ribosome-free rough ER” doing the same job: it makes lipids and steroids, stores Ca²⁺ and detoxifies drugs, so it is abundant in steroid-secreting cells and hepatocytes.',
    quick:
      'Rough ER: secretory/membrane proteins (plasma cells, goblet cells). Smooth ER: steroids, phospholipids, detox, Ca²⁺ (adrenal cortex, gonads, liver). Golgi: modifies sugars (N- and O-linked), adds mannose-6-phosphate → lysosome. COPII: ER → Golgi; COPI: Golgi → ER; clathrin: trans-Golgi → lysosome, endocytosis.',
    detailed: [
      'Ribosomes on the rough ER feed new proteins into its lumen, where they fold and gain modifications; cells that export proteins (plasma cells, pancreatic acinar and goblet cells) have abundant rough ER. Smooth ER makes phospholipids and steroid hormones, regulates Ca²⁺ and metabolizes some toxins and drugs.',
      'Vesicles move cargo between compartments: COPII from ER to cis-Golgi, COPI back from Golgi to ER, and clathrin at the plasma membrane and trans-Golgi. In the Golgi, oligosaccharides are processed and lysosomal enzymes receive the mannose-6-phosphate tag that sends them to lysosomes.',
    ],
    takeaway: 'RER = proteins out; SER = lipids, steroids, detox. Golgi tags lysosomal enzymes with M6P. COPII forward, COPI back, clathrin to lysosomes and endocytosis.',
    related: ['cel-i-cell'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A newly made enzyme lacks the mannose-6-phosphate tag because of a defect in the Golgi. Where does most of it end up?',
        options: [
          ['a', 'Secreted outside the cell instead of reaching lysosomes'],
          ['b', 'Retained in the rough ER and degraded by the proteasome', 'Lack of the tag does not trap the enzyme in the ER; it misroutes it after the Golgi.'],
          ['c', 'Delivered to lysosomes by a COPI vesicle', 'COPI returns cargo from the Golgi to the ER; it does not deliver to lysosomes.'],
          ['d', 'Imported into peroxisomes', 'Peroxisomal import uses different targeting signals.'],
          ['e', 'Inserted into the nuclear envelope', 'The mannose-6-phosphate tag is a lysosomal address, not a nuclear one.'],
        ],
        answer: 'a',
        mini: 'Mannose-6-phosphate is the lysosomal address; without it, hydrolases follow the default path and are secreted (as in I-cell disease).',
        reasoning: 'mechanism',
        objectives: [`${EG}.golgi`],
        difficulty: 2,
      },
      {
        stem: 'Which cells would be expected to contain the most abundant smooth endoplasmic reticulum?',
        options: [
          ['a', 'Steroid-producing cells of the testis'],
          ['b', 'Plasma cells secreting antibodies', 'Plasma cells are packed with rough ER for protein secretion.'],
          ['c', 'Goblet cells secreting mucin', 'Mucin is a glycoprotein made in rough ER and modified in the Golgi.'],
          ['d', 'Mature red blood cells', 'Mature red cells lack organelles, including ER.'],
          ['e', 'Pancreatic acinar cells', 'Acinar cells secrete digestive enzymes and are rich in rough ER.'],
        ],
        answer: 'a',
        mini: 'Smooth ER makes steroid hormones (gonads, adrenal cortex) and detoxifies drugs (hepatocytes).',
        reasoning: 'recall',
        objectives: [`${EG}.er`],
        difficulty: 1,
      },
    ],
    tf: [
      { statement: 'COPI vesicles carry newly made proteins forward from the ER to the Golgi.', isTrue: false, correction: 'COPII carries cargo from ER to Golgi; COPI returns cargo from the Golgi to the ER.', objectives: [`${EG}.vesicles`], difficulty: 2 },
      { statement: 'Plasma cells have abundant rough endoplasmic reticulum.', isTrue: true, correction: 'Correct: they secrete large amounts of protein (antibodies).', objectives: [`${EG}.er`], difficulty: 1 },
    ],
    clues: [
      { answer: 'CLATHRIN', clue: 'Coat protein for endocytosis and trans-Golgi to lysosome traffic', objectives: [`${EG}.vesicles`], difficulty: 2 },
      { answer: 'GOLGI', clue: 'Organelle that adds the mannose-6-phosphate tag to lysosomal enzymes', objectives: [`${EG}.golgi`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-i-cell',
    title: 'I-cell disease (mucolipidosis II)',
    discipline: 'biochemistry',
    alsoDisciplines: ['genetics', 'pathology'],
    system: 'multisystem',
    alsoSystems: ['musculoskeletal-skin'],
    topic: 'biochem-cellular',
    difficulty: 3,
    curriculum: [`${EG}.i-cell`],
    objectives: ['Explain how failed mannose-6-phosphate tagging causes I-cell disease and its findings'],
    citations: [ML2, GNPTAB, ML2_PLASMA, ML2_PLASMA2],
    facts: [
      'I-cell disease (mucolipidosis II alpha/beta) is autosomal recessive and caused by GNPTAB variants that reduce GlcNAc-1-phosphotransferase, the enzyme for the first step of mannose-6-phosphate tagging.',
      'Without the tag, lysosomal hydrolases are not delivered to lysosomes; they end up outside the cell, and large molecules accumulate inside lysosomes.',
      'Children have coarse facial features, gingival overgrowth, skeletal abnormalities (kyphosis, hip dislocation, short hands) and joint contractures; development is delayed, and most do not survive past early childhood.',
      'The diagnosis is supported by markedly raised activities of several lysosomal enzymes in plasma.',
    ],
    factRefs: [[0, 1], [1, 0], [0], [2, 3]],
    mechanism:
      'Lysosomal enzymes are made in the rough ER and need the mannose-6-phosphate tag in the Golgi to reach lysosomes. With no tag, they are secreted. Plasma enzyme levels rise, while lysosomes inside cells lack enzymes and fill with undegraded material, damaging bone, joints, gums and the nervous system.',
    associations: ['GNPTAB', 'GlcNAc-1-phosphotransferase', 'Mannose-6-phosphate', 'High plasma lysosomal enzymes', 'Coarse facies', 'Gingival hyperplasia', 'Contractures'],
    misconception:
      'I-cell disease is not a deficiency of one lysosomal enzyme: many enzymes are made normally but mistargeted, which is why their plasma levels are high while lysosomes are empty of them.',
    quick:
      'Autosomal recessive defect in GlcNAc-1-phosphotransferase (Golgi) → no mannose-6-phosphate tag → lysosomal enzymes secreted (↑ plasma levels) and lysosomes fill with undegraded material → coarse facies, gingival hyperplasia, contractures, skeletal deformities, early death.',
    detailed: [
      'The tag is built in the Golgi in two steps, and GlcNAc-1-phosphotransferase performs the first. In I-cell disease, hydrolases are made but not tagged, so they leave the cell by the default secretory route.',
      'The result is a lysosomal storage disease with an unusual laboratory signature: lysosomal enzyme activities are high in plasma. Affected children have coarse features, gum overgrowth, bone and joint deformities and developmental delay, and most die in early childhood.',
    ],
    takeaway: 'I-cell: no mannose-6-phosphate → enzymes secreted (high plasma levels) → empty lysosomes fill with debris.',
    related: ['cel-er-golgi'],
    outline: listed(MS, GEN),
    mcq: [
      {
        stem: 'An 8-month-old has coarse facial features, overgrown gums, hip dislocation and stiff joints. Plasma activities of several lysosomal enzymes are many times normal. Which step has failed?',
        options: [
          ['a', 'Mannose-6-phosphate tagging of lysosomal enzymes'],
          ['b', 'Synthesis of a single lysosomal enzyme in the rough ER', 'A single-enzyme deficiency would lower, not raise, that enzyme in plasma.'],
          ['c', 'Fusion of lysosomes with endocytic vesicles', 'The enzymes are present in excess in plasma, pointing to mistargeting, not fusion.'],
          ['d', 'Import of very-long-chain fatty acids into peroxisomes', 'That is the defect of X-linked adrenoleukodystrophy.'],
          ['e', 'Ubiquitination of misfolded proteins', 'Ubiquitination targets proteins for the proteasome, not lysosomal enzymes for lysosomes.'],
        ],
        answer: 'a',
        mini: 'High plasma levels of many lysosomal enzymes with storage disease features = enzymes made but not tagged with mannose-6-phosphate (I-cell disease).',
        reasoning: 'interpretation',
        steps: ['Many lysosomal enzymes are high in plasma → they are made but secreted.', 'Secretion instead of lysosomal delivery → missing lysosomal address tag.', 'The tag is mannose-6-phosphate, added in the Golgi → I-cell disease.'],
        difficulty: 3,
      },
      {
        stem: 'Why do lysosomes fill with undegraded material in I-cell disease even though the cells make normal amounts of lysosomal enzymes?',
        options: [
          ['a', 'Untagged enzymes are secreted instead of reaching lysosomes'],
          ['b', 'The enzymes are made but cannot fold in the rough ER', 'The enzymes fold and leave the cell; the problem is targeting.'],
          ['c', 'Lysosomes cannot acidify their lumen', 'Lysosomal acidification is not the primary defect.'],
          ['d', 'Lysosomal enzymes are degraded by the proteasome', 'The enzymes are found in plasma, not destroyed inside the cell.'],
          ['e', 'Lysosomes are absent from the cells', 'Lysosomes are present and become storage vacuoles.'],
        ],
        answer: 'a',
        mini: 'Lysosomes contain little enzyme because the hydrolases, lacking mannose-6-phosphate, are exported by default.',
        reasoning: 'mechanism',
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'I-cell disease is inherited in an autosomal recessive pattern.', isTrue: true, correction: 'Correct: both GNPTAB copies are altered.', difficulty: 1 },
    ],
    clues: [
      { answer: 'MANNOSE', clue: 'Sugar whose 6-phosphate form tags enzymes for the lysosome', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-peroxisome',
    title: 'Peroxisomes: functions, Zellweger syndrome and Refsum disease',
    discipline: 'biochemistry',
    alsoDisciplines: ['genetics'],
    system: 'multisystem',
    alsoSystems: ['nervous-behavioral'],
    topic: 'biochem-cellular',
    difficulty: 3,
    curriculum: [`${PX}.peroxisome`, `${PX}.zellweger`, `${PX}.refsum`],
    objectives: ['Describe peroxisomal functions', 'Recognize Zellweger syndrome and Refsum disease and their mechanisms'],
    citations: [OS_EUK, PEROX_FN, CATALASE, ZS_BIOCHEM, ZSD, REFSUM, MP('gene/phyh', 'PHYH gene'), REFSUM_DIET],
    facts: [
      'Peroxisomes carry out oxidation reactions that produce hydrogen peroxide, which catalase breaks down to water and oxygen; liver peroxisomes also detoxify alcohol and other compounds.',
      'Peroxisomes oxidize very-long-chain fatty acids (β-oxidation) and start the synthesis of plasmalogens (ether lipids).',
      'Zellweger spectrum disorder is autosomal recessive, caused by PEX genes (peroxins) that are needed to form peroxisomes; in severe cases there are no functional peroxisomes.',
      'Severe Zellweger syndrome presents at birth with hypotonia, seizures, feeding problems, hearing and vision loss, liver enlargement and characteristic facial features; most infants do not survive beyond the first year. Very-long-chain fatty acids accumulate in plasma.',
      'Refsum disease is an autosomal recessive defect in peroxisomal α-oxidation of phytanic acid (PHYH or PEX7). Phytanic acid comes from the diet (dairy and beef) and accumulates.',
      'Refsum disease causes retinitis pigmentosa (night blindness first), loss of smell, neuropathy, ataxia, hearing loss and ichthyosis; about a third have hand or foot bone abnormalities. Dietary restriction of phytanic acid is used in treatment.',
    ],
    factRefs: [[0, 2], [1, 3], [4], [4, 3], [5, 6], [5, 7]],
    mechanism:
      'Peroxisomes handle lipids that mitochondria cannot: very-long-chain fatty acids are shortened, branched phytanic acid is α-oxidized, and plasmalogens for myelin are started. If peroxisomes cannot form (Zellweger), all these functions fail at once. If only phytanic acid α-oxidation fails (Refsum), that one dietary lipid builds up, which is why limiting it in the diet helps.',
    associations: ['Catalase', 'Very-long-chain fatty acids', 'Plasmalogens', 'Phytanic acid', 'α-Oxidation', 'PEX genes', 'Zellweger syndrome', 'Refsum disease'],
    misconception:
      'Refsum disease is not a mitochondrial β-oxidation defect: phytanic acid has a branch that blocks β-oxidation, so it must first be α-oxidized in peroxisomes.',
    quick:
      'Peroxisome: catalase (H₂O₂), β-oxidation of very-long-chain fatty acids, α-oxidation of phytanic acid, plasmalogen synthesis. Zellweger (AR, PEX): no peroxisomes → hypotonia, seizures, hepatomegaly, early death; ↑ VLCFA. Refsum (AR): ↑ phytanic acid → retinitis pigmentosa, neuropathy, ataxia, ichthyosis; restrict dietary phytanic acid.',
    detailed: [
      'Peroxisomes are small single-membrane organelles. Their oxidases generate hydrogen peroxide, which catalase removes. They shorten very-long-chain fatty acids by β-oxidation, α-oxidize branched phytanic acid, and begin plasmalogen synthesis, important for myelin.',
      'In Zellweger spectrum disorder, defective peroxins prevent peroxisome formation, so very-long-chain fatty acids, phytanic acid and other metabolites accumulate and plasmalogens are deficient; severe forms present at birth and are fatal in infancy. In Refsum disease, only phytanic acid breakdown fails; the features develop gradually, and a diet low in phytanic acid is part of treatment.',
    ],
    takeaway: 'Peroxisomes: catalase, VLCFA β-oxidation, phytanic acid α-oxidation, plasmalogens. Zellweger = no peroxisomes; Refsum = phytanic acid.',
    related: ['cel-x-ald'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A patient with Refsum disease is advised to limit dairy products and beef. What is the reason?',
        options: [
          ['a', 'They contain phytanic acid, which the patient cannot α-oxidize'],
          ['b', 'They contain very-long-chain fatty acids that need ABCD1 for import', 'ABCD1 defects cause X-linked adrenoleukodystrophy, not Refsum disease.'],
          ['c', 'They contain lactose, which the patient cannot digest', 'Lactase deficiency is unrelated to peroxisomes.'],
          ['d', 'They raise uric acid, which damages the retina', 'Uric acid is not the toxic metabolite in Refsum disease.'],
          ['e', 'They contain copper, which accumulates in the liver', 'Copper accumulation is Wilson disease.'],
        ],
        answer: 'a',
        mini: 'Phytanic acid comes from the diet and needs peroxisomal α-oxidation; in Refsum disease it accumulates, so intake is restricted.',
        reasoning: 'mechanism',
        objectives: [`${PX}.refsum`],
        difficulty: 2,
      },
      {
        stem: 'A newborn with severe hypotonia, seizures and an enlarged liver has raised very-long-chain fatty acids and phytanic acid and low plasmalogens. Why are several unrelated lipid pathways abnormal at once?',
        options: [
          ['a', 'Peroxisomes fail to form, so all peroxisomal functions are lost'],
          ['b', 'A single β-oxidation enzyme of the mitochondria is missing', 'One mitochondrial enzyme defect would not lower plasmalogens or raise phytanic acid.'],
          ['c', 'Lysosomal enzymes are secreted instead of targeted', 'That is I-cell disease, which affects lysosomes, not these lipid pathways.'],
          ['d', 'The proteasome cannot degrade lipid enzymes', 'The proteasome degrades ubiquitinated proteins; lipid oxidation happens in peroxisomes.'],
          ['e', 'Dietary phytanic acid intake is excessive', 'Diet would not explain raised VLCFA, low plasmalogens and newborn presentation.'],
        ],
        answer: 'a',
        mini: 'Zellweger syndrome: PEX gene defects prevent peroxisome biogenesis, so every peroxisomal pathway fails together.',
        reasoning: 'mechanism',
        objectives: [`${PX}.zellweger`, `${PX}.peroxisome`],
        difficulty: 3,
      },
      {
        stem: 'Which peroxisomal enzyme protects the cell from the hydrogen peroxide produced by peroxisomal oxidases?',
        options: [
          ['a', 'Catalase'],
          ['b', 'Lysyl oxidase', 'Lysyl oxidase cross-links collagen and elastin outside the cell.'],
          ['c', 'Xanthine oxidase', 'Xanthine oxidase makes uric acid (and produces, not removes, oxidants).'],
          ['d', 'Glucose-6-phosphatase', 'Glucose-6-phosphatase is an ER enzyme of gluconeogenesis and glycogenolysis.'],
          ['e', 'Acid maltase', 'Acid maltase is a lysosomal enzyme that breaks down glycogen.'],
        ],
        answer: 'a',
        mini: 'Catalase converts hydrogen peroxide to water and oxygen inside peroxisomes.',
        reasoning: 'recall',
        objectives: [`${PX}.peroxisome`],
        difficulty: 1,
      },
    ],
    tf: [
      { statement: 'β-Oxidation of very-long-chain fatty acids begins in peroxisomes.', isTrue: true, correction: 'Correct: peroxisomes shorten very-long-chain fatty acids.', objectives: [`${PX}.peroxisome`], difficulty: 1 },
      { statement: 'Zellweger syndrome is caused by defective formation of peroxisomes.', isTrue: true, correction: 'Correct: PEX gene variants prevent peroxisome biogenesis.', objectives: [`${PX}.zellweger`], difficulty: 1 },
    ],
    clues: [
      { answer: 'PHYTANIC', clue: 'Branched dietary fatty acid that accumulates in Refsum disease', objectives: [`${PX}.refsum`], difficulty: 2 },
      { answer: 'PLASMALOGEN', clue: 'Ether lipid of myelin whose synthesis starts in peroxisomes', objectives: [`${PX}.peroxisome`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-x-ald',
    title: 'X-linked adrenoleukodystrophy',
    discipline: 'biochemistry',
    alsoDisciplines: ['genetics'],
    system: 'nervous-behavioral',
    alsoSystems: ['endocrine'],
    topic: 'biochem-cellular',
    difficulty: 3,
    curriculum: [`${PX}.x-ald`],
    objectives: ['Explain how ABCD1 deficiency causes adrenal insufficiency and demyelination'],
    citations: [XALD, ABCD1, ZS_BIOCHEM],
    facts: [
      'ABCD1 encodes ALDP, a peroxisomal membrane transporter that brings very-long-chain fatty acids into peroxisomes to be broken down; without it, VLCFA accumulate.',
      'The accumulated VLCFA appear toxic to the adrenal cortex and myelin and seem to trigger inflammation in the brain.',
      'The childhood cerebral form typically occurs in boys, with learning and behavioral problems usually beginning between ages 4 and 10, followed by vision problems, poor coordination and adrenal insufficiency; untreated, it progresses rapidly.',
      'The condition is X-linked. Most affected females with one altered copy develop the adrenomyeloneuropathy type (progressive leg stiffness and weakness in adulthood).',
    ],
    factRefs: [[1], [1], [0], [0]],
    mechanism:
      'Very-long-chain fatty acids can only be broken down inside peroxisomes, and ALDP is the door. With ABCD1 deficient, VLCFA build up in the adrenal cortex, testes and white matter, causing adrenal insufficiency and inflammatory demyelination. Raised plasma VLCFA is the biochemical clue.',
    associations: ['ABCD1', 'ALDP', 'Very-long-chain fatty acids', 'Adrenal insufficiency', 'Demyelination', 'X-linked'],
    misconception:
      'X-linked adrenoleukodystrophy is not limited to boys: carrier women can develop symptoms, usually the slower adrenomyeloneuropathy form in adulthood.',
    quick:
      'X-linked ABCD1 (ALDP) defect → VLCFA cannot enter peroxisomes → ↑ VLCFA in adrenal cortex and white matter → adrenal insufficiency + progressive demyelination (school decline, behavior change, vision loss) in boys aged 4–10; carrier women may develop adrenomyeloneuropathy.',
    detailed: [
      'ALDP is an ABC transporter in the peroxisomal membrane. When it is missing or nonfunctional, very-long-chain fatty acids are not imported for β-oxidation and accumulate in plasma and tissues.',
      'The cerebral childhood form begins with learning and behavioral problems in boys, progressing to vision loss, poor coordination and disability within a few years if untreated, often with adrenal insufficiency. Adult forms include adrenomyeloneuropathy, which also affects many carrier women.',
    ],
    takeaway: 'X-ALD: ABCD1 can’t import VLCFA → adrenal failure + demyelination in boys; ↑ plasma VLCFA.',
    related: ['cel-peroxisome'],
    outline: listed('Nervous System & Special Senses', 'Metabolic disorders'),
    mcq: [
      {
        stem: 'A 7-year-old boy’s school performance has declined over 6 months, he has become aggressive, and he now bumps into objects. Morning cortisol is low. Plasma very-long-chain fatty acids are raised. Which protein is defective?',
        options: [
          ['a', 'Peroxisomal VLCFA transporter (ALDP)'],
          ['b', 'GlcNAc-1-phosphotransferase in the Golgi', 'That defect causes I-cell disease, with high plasma lysosomal enzymes.'],
          ['c', 'Phytanoyl-CoA hydroxylase', 'That defect causes Refsum disease, with raised phytanic acid.'],
          ['d', 'A peroxin needed to form peroxisomes', 'Peroxin defects (Zellweger) present at birth with hypotonia and seizures.'],
          ['e', 'A ciliary dynein arm protein', 'Dynein defects cause primary ciliary dyskinesia.'],
        ],
        answer: 'a',
        mini: 'Behavioral decline + visual problems + adrenal insufficiency in a school-age boy with raised VLCFA = X-linked adrenoleukodystrophy (ABCD1/ALDP).',
        reasoning: 'interpretation',
        steps: ['Neurologic decline plus low cortisol in a boy → white matter and adrenal disease.', 'Raised plasma VLCFA → failed peroxisomal VLCFA breakdown.', 'Peroxisomes otherwise intact and later onset → ABCD1 transporter (X-ALD) rather than Zellweger.'],
        difficulty: 3,
      },
      {
        stem: 'Why do very-long-chain fatty acids accumulate in X-linked adrenoleukodystrophy?',
        options: [
          ['a', 'They cannot enter peroxisomes for β-oxidation'],
          ['b', 'Mitochondria lack carnitine to import them', 'Carnitine deficiency affects long-chain fatty acid oxidation in mitochondria, not VLCFA in peroxisomes.'],
          ['c', 'They cannot be α-oxidized because of a branch', 'α-Oxidation of branched phytanic acid fails in Refsum disease.'],
          ['d', 'The adrenal gland overproduces them', 'The problem is failed breakdown, not overproduction.'],
          ['e', 'Lysosomes lack the enzymes to digest them', 'VLCFA are broken down in peroxisomes.'],
        ],
        answer: 'a',
        mini: 'ALDP (ABCD1) brings VLCFA into peroxisomes; when it fails, VLCFA accumulate.',
        reasoning: 'mechanism',
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'Women who carry one altered ABCD1 copy can develop symptoms of X-linked adrenoleukodystrophy.', isTrue: true, correction: 'Correct: most affected carrier women develop adrenomyeloneuropathy in adulthood.', difficulty: 2 },
    ],
    clues: [
      { answer: 'MYELIN', clue: 'Fatty nerve insulation destroyed in cerebral adrenoleukodystrophy', difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-proteasome',
    title: 'Ubiquitin–proteasome system and bortezomib',
    discipline: 'biochemistry',
    alsoDisciplines: ['pharmacology'],
    system: 'multisystem',
    alsoSystems: ['blood-immune'],
    topic: 'biochem-cellular',
    difficulty: 2,
    curriculum: [`${PX}.proteasome`],
    objectives: ['Describe ubiquitin-tagged proteasomal degradation, its failure in neurodegeneration and its inhibition by bortezomib'],
    citations: [VELCADE, UPS_NEURO],
    facts: [
      'The 26S proteasome is a large protein complex that degrades ubiquitinated proteins; the ubiquitin–proteasome pathway controls the levels of many intracellular proteins.',
      'Bortezomib is a reversible proteasome inhibitor used to treat multiple myeloma and mantle cell lymphoma.',
      'Failure of the ubiquitin–proteasome system has been linked to Alzheimer, Parkinson and Huntington diseases, in which insoluble protein aggregates accumulate in neurons.',
    ],
    factRefs: [[0], [0], [1]],
    mechanism:
      'Proteins destined for destruction are tagged with chains of ubiquitin and fed into the 26S proteasome. Blocking the proteasome (bortezomib) lets regulatory and misfolded proteins pile up, which myeloma cells — busy making large amounts of immunoglobulin — tolerate poorly. When the system fails in neurons, misfolded proteins aggregate.',
    associations: ['Ubiquitin', '26S proteasome', 'Bortezomib', 'Multiple myeloma', 'Protein aggregates', 'Parkinson disease'],
    misconception:
      'Ubiquitin is not a protease: it is a tag. The proteasome is the protease complex that recognizes the tag and degrades the protein.',
    quick:
      'Ubiquitin tags proteins → 26S proteasome degrades them. Bortezomib = proteasome inhibitor (multiple myeloma, mantle cell lymphoma). Failure of protein clearance → aggregates in neurodegeneration (Parkinson, Alzheimer, Huntington).',
    detailed: [
      'The ubiquitin–proteasome pathway removes damaged, misfolded and short-lived regulatory proteins. A chain of ubiquitin commits a protein to destruction by the 26S proteasome.',
      'Bortezomib inhibits the proteasome and is used for multiple myeloma. In several neurodegenerative diseases, failure to clear misfolded proteins contributes to the aggregates that characterize the disease.',
    ],
    takeaway: 'Ubiquitin = tag; proteasome = shredder; bortezomib = proteasome inhibitor (myeloma).',
    related: ['mol-protein-folding'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A patient with multiple myeloma receives bortezomib. What is the direct molecular effect of the drug?',
        options: [
          ['a', 'Ubiquitinated proteins escape proteasomal breakdown'],
          ['b', 'Microtubules cannot polymerize into a spindle', 'That is the action of vincristine and colchicine.'],
          ['c', 'Ribonucleotide reductase is inhibited', 'Ribonucleotide reductase is the target of hydroxyurea, not bortezomib.'],
          ['d', 'Topoisomerase II is trapped on DNA', 'Trapping topoisomerase II on DNA is how etoposide works.'],
          ['e', 'Lysosomal enzymes are secreted from the cell', 'Mistargeted lysosomal enzymes are the defect in I-cell disease.'],
        ],
        answer: 'a',
        mini: 'Bortezomib inhibits the 26S proteasome, so ubiquitin-tagged proteins accumulate in the myeloma cell.',
        reasoning: 'mechanism',
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'Polyubiquitination commonly marks a protein for degradation by the proteasome.', isTrue: true, correction: 'Correct: ubiquitin is the tag; the 26S proteasome is the protease complex.', difficulty: 1 },
    ],
    clues: [
      { answer: 'BORTEZOMIB', clue: 'Proteasome inhibitor used in multiple myeloma', difficulty: 1 },
      { answer: 'UBIQUITIN', clue: 'Small protein chained onto others to mark them for destruction', difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-cytoskeleton',
    title: 'Cytoskeleton, motor proteins and microtubule drugs',
    discipline: 'biochemistry',
    alsoDisciplines: ['cell-biology', 'pharmacology'],
    system: 'multisystem',
    topic: 'biochem-cellular',
    difficulty: 2,
    curriculum: [`${CY}.elements`, `${CY}.motors`],
    objectives: ['Compare microfilaments, microtubules and intermediate filaments', 'Explain dynein and kinesin transport and identify microtubule drugs'],
    citations: [OS_CYTO, MOTORS, COLCHICINE, VINCRISTINE, PACLITAXEL, GRISEO, BENZIMIDAZOLE, PM(3840531, 'Sangster NC et al. Benzimidazoles bind nematode tubulin (resistance reduces binding). J Parasitol 1985')],
    facts: [
      'The cytoskeleton has three fiber types: microfilaments (actin; with myosin they drive contraction and cell division), intermediate filaments (structural support, no role in movement) and microtubules (α- and β-tubulin dimers).',
      'Microtubules are tracks for vesicle movement, pull chromosomes apart during division and form cilia, flagella (9 + 2 arrangement) and centrioles.',
      'In axons, kinesin moves organelles toward microtubule plus ends (anterograde, away from the cell body) and dynein toward minus ends (retrograde, toward the cell body).',
      'Colchicine inhibits microtubule polymerization, impairing neutrophil function in gout; vincristine inhibits microtubule formation in the spindle; paclitaxel stabilizes microtubules.',
      'Griseofulvin disrupts spindle microtubule function, inhibiting mitosis strongly in fungi; benzimidazole anthelmintics bind helminth tubulin and disrupt microtubules.',
    ],
    factRefs: [[0], [0], [1], [2, 3, 4], [5, 6, 7]],
    mechanism:
      'Microtubules are dynamic polymers that grow and shrink. Drugs that stop polymerization (colchicine, vincristine) or block depolymerization (paclitaxel) both freeze the dynamic behavior needed for the spindle, neutrophil movement and transport. Motor proteins walk along microtubules: kinesin outward to the plus end, dynein inward to the minus end and in cilia.',
    associations: ['Actin', 'Tubulin', 'Kinesin', 'Dynein', 'Colchicine', 'Vincristine', 'Paclitaxel', 'Griseofulvin', 'Mebendazole'],
    misconception:
      'Both blocking and stabilizing microtubules stop mitosis: vincristine prevents the spindle from forming, while paclitaxel prevents it from disassembling.',
    quick:
      'Actin: contraction, cytokinesis, microvilli. Microtubules (α/β-tubulin): spindle, cilia (9 + 2), axonal transport. Intermediate filaments: structure. Kinesin → plus end (anterograde); dynein → minus end (retrograde). Microtubule drugs: colchicine, vincristine (block assembly), paclitaxel (stabilizes), griseofulvin, mebendazole.',
    detailed: [
      'Microfilaments of actin work with myosin in contraction and cytokinesis. Intermediate filaments provide tensile strength. Microtubules made of α- and β-tubulin form the mitotic spindle, cilia and flagella, and tracks for vesicles.',
      'Kinesin carries cargo anterogradely toward the plus ends at the axon terminal; dynein carries cargo retrogradely to the cell body and bends cilia. Colchicine (gout), vinca alkaloids and taxanes (cancer), griseofulvin (fungi) and benzimidazoles (worms) all act on tubulin.',
    ],
    takeaway: 'Microtubules = spindle, cilia, transport; kinesin out, dynein in; colchicine/vincristine block assembly, paclitaxel stabilizes.',
    related: ['cel-pcd', 'cel-cell-cycle'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A man with an acute gout flare is treated with colchicine. How does it reduce the inflammation?',
        options: [
          ['a', 'It blocks microtubule assembly in neutrophils'],
          ['b', 'It inhibits xanthine oxidase and lowers uric acid', 'That is allopurinol or febuxostat, which do not treat the acute flare.'],
          ['c', 'It inhibits cyclooxygenase', 'NSAIDs inhibit cyclooxygenase; colchicine works through tubulin.'],
          ['d', 'It increases renal excretion of uric acid', 'That is probenecid (a uricosuric).'],
          ['e', 'It stabilizes microtubules like paclitaxel', 'Colchicine blocks polymerization rather than stabilizing microtubules.'],
        ],
        answer: 'a',
        mini: 'Colchicine binds tubulin and prevents microtubule polymerization, so neutrophils cannot migrate and respond normally to urate crystals.',
        reasoning: 'mechanism',
        objectives: [`${CY}.motors`],
        difficulty: 2,
      },
      {
        stem: 'A neurotropic virus enters an axon terminal and travels to the neuronal cell body in the spinal cord. Which motor protein most likely carries it?',
        options: [
          ['a', 'Dynein, moving toward microtubule minus ends'],
          ['b', 'Kinesin, moving toward microtubule plus ends', 'Kinesin carries cargo away from the cell body (anterograde).'],
          ['c', 'Myosin, moving along actin filaments', 'Long-distance axonal transport uses microtubules, not actin.'],
          ['d', 'Tubulin, which moves by polymerizing', 'Tubulin forms the track; motors move cargo along it.'],
          ['e', 'Vimentin, an intermediate filament', 'Intermediate filaments have no role in movement.'],
        ],
        answer: 'a',
        mini: 'Retrograde axonal transport (terminal → cell body) is driven by dynein toward microtubule minus ends.',
        reasoning: 'mechanism',
        objectives: [`${CY}.motors`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'Microtubules are polymers of α- and β-tubulin and form the mitotic spindle.', isTrue: true, correction: 'Correct: they also form cilia, flagella and centrioles.', objectives: [`${CY}.elements`], difficulty: 1 },
      { statement: 'Intermediate filaments power cell movement together with myosin.', isTrue: false, correction: 'Actin microfilaments work with myosin; intermediate filaments have no role in movement.', objectives: [`${CY}.elements`], difficulty: 1 },
    ],
    clues: [
      { answer: 'TUBULIN', clue: 'Protein whose α and β forms build microtubules', objectives: [`${CY}.elements`], difficulty: 1 },
      { answer: 'KINESIN', clue: 'Motor that carries cargo toward microtubule plus ends', objectives: [`${CY}.motors`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-pcd',
    title: 'Primary ciliary dyskinesia (Kartagener syndrome)',
    discipline: 'genetics',
    alsoDisciplines: ['cell-biology', 'pathology'],
    system: 'respiratory',
    alsoSystems: ['reproductive'],
    topic: 'biochem-cellular',
    difficulty: 3,
    curriculum: [`${CY}.pcd`],
    objectives: ['Explain how a ciliary dynein defect causes respiratory, laterality and fertility problems'],
    citations: [PCD, NNO, MP('condition/cystic-fibrosis', 'Cystic fibrosis'), OS_CYTO],
    facts: [
      'Primary ciliary dyskinesia is caused by abnormal cilia and flagella; variants in DNAH5 and DNAH11, which encode parts of dynein, account for about a third of cases. It is usually autosomal recessive (rarely X-linked).',
      'Poor mucociliary clearance causes neonatal respiratory distress, year-round nasal congestion and chronic cough from the first year, recurrent respiratory infections, bronchiectasis and recurrent otitis media.',
      'About 40% have situs inversus totalis (Kartagener syndrome when combined with PCD); 9–12% have heterotaxy.',
      'Males often have reduced fertility because sperm flagella do not move properly; some females have reduced fertility from abnormal cilia in the fallopian tubes.',
      'Nasal nitric oxide is extremely low in PCD, and its measurement is recommended as a diagnostic test in cooperative patients aged 5 years and older.',
      'Cystic fibrosis also causes chronic lung infection and bronchiectasis, but from thick, sticky mucus, and it often damages the pancreas.',
    ],
    factRefs: [[0], [0], [0], [0], [1], [2]],
    mechanism:
      'Dynein arms make the 9 + 2 microtubules of cilia and sperm flagella bend. Without them, airway cilia cannot sweep mucus (sinusitis, otitis, bronchiectasis), embryonic cilia cannot set left–right asymmetry (situs inversus by chance in a large minority), and sperm cannot swim.',
    associations: ['Dynein arms', '9 + 2 axoneme', 'Kartagener syndrome', 'Situs inversus', 'Bronchiectasis', 'Male infertility', 'Low nasal nitric oxide'],
    misconception:
      'Situs inversus is not required for primary ciliary dyskinesia: only about 40% have it. Chronic wet cough, sinusitis and otitis from infancy should raise the diagnosis even with normal organ position.',
    quick:
      'Usually AR dynein arm defect → immotile cilia/flagella → chronic sinusitis, otitis, bronchiectasis from infancy; situs inversus in ~40% (Kartagener); male infertility (immotile sperm), reduced female fertility; very low nasal nitric oxide.',
    detailed: [
      'Cilia and flagella share a 9 + 2 microtubule structure moved by dynein. Defects in dynein or other axonemal proteins make cilia immotile or poorly coordinated, so mucus and bacteria stay in the airways, sinuses and middle ear.',
      'Left–right organ placement depends on ciliary motion in the embryo, so some patients have mirror-image organs. Infertility follows from immotile sperm and abnormal tubal cilia. Nasal nitric oxide is characteristically very low and is used as a screening test.',
    ],
    takeaway: 'PCD: dynein defect → immotile cilia → sinusitis, bronchiectasis, infertility; situs inversus in ~40% (Kartagener).',
    related: ['cel-cytoskeleton'],
    outline: listed(MS, GEN),
    mcq: [
      {
        stem: 'A 30-year-old man is evaluated for infertility. He has had chronic sinusitis and a productive cough since childhood, and his heart sounds are loudest on the right. Semen analysis shows normal sperm count but immotile sperm. Which structure is defective?',
        options: [
          ['a', 'Dynein arms of the microtubule axoneme'],
          ['b', 'CFTR chloride channels in epithelial cells', 'CF also causes bronchiectasis and infertility, but not situs inversus or immotile sperm with normal count.'],
          ['c', 'Actin microvilli of the airway epithelium', 'Microvilli are actin-based and do not beat.'],
          ['d', 'Intermediate filaments of the sperm head', 'Intermediate filaments provide structure, not movement.'],
          ['e', 'Kinesin in the sperm midpiece', 'Ciliary and flagellar bending is powered by dynein arms.'],
        ],
        answer: 'a',
        mini: 'Sinusitis, bronchiectasis, situs inversus and immotile sperm = Kartagener syndrome (primary ciliary dyskinesia, dynein arm defect).',
        reasoning: 'identification',
        difficulty: 2,
      },
      {
        stem: 'Two 8-year-olds have chronic wet cough and bronchiectasis. Child 1 has situs inversus and very low nasal nitric oxide. Child 2 has poor weight gain with fatty, foul-smelling stools. What is the most likely basis of each child’s lung disease?',
        options: [
          ['a', 'Child 1: immotile cilia (PCD); child 2: thick mucus (cystic fibrosis)'],
          ['b', 'Child 1: cystic fibrosis; child 2: primary ciliary dyskinesia', 'Reversed: situs inversus and low nasal NO point to PCD; pancreatic insufficiency points to CF.'],
          ['c', 'Both: primary ciliary dyskinesia of different severity', 'PCD does not explain fat malabsorption from pancreatic damage.'],
          ['d', 'Both: α1-antitrypsin deficiency', 'α1AT deficiency causes emphysema in adults, not bronchiectasis with these features in children.'],
          ['e', 'Child 1: immunodeficiency; child 2: asthma', 'Neither explains situs inversus or pancreatic insufficiency.'],
        ],
        answer: 'a',
        mini: 'Both cause bronchiectasis. Situs inversus and very low nasal nitric oxide point to PCD (ciliary defect); malabsorption from pancreatic damage points to cystic fibrosis (thick mucus).',
        reasoning: 'comparison',
        steps: ['Both have bronchiectasis from poor airway clearance.', 'Situs inversus + very low nasal NO → ciliary motility defect (PCD).', 'Fat malabsorption → pancreatic damage → cystic fibrosis.'],
        difficulty: 3,
      },
      {
        stem: 'Why do patients with primary ciliary dyskinesia develop bronchiectasis?',
        options: [
          ['a', 'Immotile cilia cannot clear mucus and bacteria, so infections recur'],
          ['b', 'Their mucus is abnormally thick because chloride secretion fails', 'Defective chloride secretion and thick mucus is the mechanism of cystic fibrosis.'],
          ['c', 'Neutrophil elastase is unopposed in the alveoli', 'That is α1-antitrypsin deficiency, causing emphysema.'],
          ['d', 'Their airways lack cartilage from birth', 'Cartilage is normal; damage follows chronic infection.'],
          ['e', 'They make no IgA in airway secretions', 'Selective IgA deficiency is a different disorder.'],
        ],
        answer: 'a',
        mini: 'Failed mucociliary clearance leads to chronic infection and inflammation, which permanently dilate the bronchi.',
        reasoning: 'mechanism',
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'Every patient with primary ciliary dyskinesia has situs inversus.', isTrue: false, correction: 'About 40% have situs inversus totalis; its absence does not exclude PCD.', difficulty: 2 },
    ],
    clues: [
      { answer: 'DYNEIN', clue: 'Motor protein whose arm defects cause Kartagener syndrome', difficulty: 1 },
      { answer: 'KARTAGENER', clue: 'Name for ciliary dyskinesia with situs inversus', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-if-markers',
    title: 'Intermediate filaments as tissue markers',
    discipline: 'pathology',
    alsoDisciplines: ['histology', 'cell-biology'],
    system: 'multisystem',
    topic: 'biochem-cellular',
    difficulty: 2,
    curriculum: [`${IFS}.markers`],
    objectives: ['Match intermediate filaments to tissues and use them to identify a tumor’s origin'],
    citations: [IF_MARKERS, LAMINS, OS_CYTO],
    facts: [
      'Keratins are the intermediate filaments of epithelia; desmin is specific to skeletal, cardiac, visceral and some vascular smooth muscle.',
      'Vimentin is characteristic of mesenchymal cells such as fibroblasts, endothelial cells, macrophages and chondrocytes.',
      'Neurofilaments are found in neurons; glial fibrillary acidic protein (GFAP) is the intermediate filament of astrocytes.',
      'Lamins are the intermediate filaments of the nucleus and form the nuclear lamina under the inner nuclear membrane.',
      'Because poorly differentiated tumors often keep the intermediate filaments of their tissue of origin, staining for them helps classify tumors.',
    ],
    factRefs: [[0], [0], [0], [1], [0]],
    mechanism:
      'Each tissue builds its own type of intermediate filament, and tumors usually keep it. Immunostaining for the filament therefore reveals the tumor’s origin when its appearance does not.',
    associations: ['Vimentin', 'Desmin', 'Cytokeratin', 'GFAP', 'Neurofilaments', 'Lamins'],
    misconception:
      'Intermediate filaments are not motility proteins: they provide structure, and their value in diagnosis comes from tissue specificity.',
    quick:
      'Vimentin = mesenchyme (fibroblasts, endothelium, macrophages). Desmin = muscle. Cytokeratin = epithelium. GFAP = astrocytes. Neurofilaments = neurons. Lamins = nuclear envelope.',
    detailed: [
      'Intermediate filaments are the most diverse cytoskeletal family. Their tissue specificity makes them immunohistochemical markers: cytokeratin indicates a carcinoma, desmin a muscle tumor, vimentin a mesenchymal tumor, GFAP an astrocytic tumor and neurofilament a neuronal tumor.',
      'Lamins are nuclear intermediate filaments that support the nuclear envelope. Markers are interpreted together, because some tumors express more than one filament type.',
    ],
    takeaway: 'Vimentin mesenchyme, desmin muscle, keratin epithelium, GFAP astrocytes, neurofilament neurons, lamin nucleus.',
    related: ['cel-cytoskeleton'],
    outline: found(MS, 'Neoplasms and related disorders'),
    mcq: [
      {
        stem: 'A poorly differentiated tumor in a child’s orbit stains strongly for desmin and is negative for cytokeratin. What is its most likely tissue of origin?',
        options: [
          ['a', 'Muscle'],
          ['b', 'Epithelium', 'Epithelial tumors (carcinomas) express cytokeratin, which is negative here.'],
          ['c', 'Astrocytes', 'Astrocytic tumors express GFAP.'],
          ['d', 'Neurons', 'Neuronal tumors express neurofilaments.'],
          ['e', 'Nuclear envelope', 'Lamins are present in all nucleated cells and do not identify a tumor type.'],
        ],
        answer: 'a',
        mini: 'Desmin is the intermediate filament of muscle, so a desmin-positive tumor is of muscle origin (as in rhabdomyosarcoma).',
        reasoning: 'interpretation',
        steps: ['The tumor is too undifferentiated to classify by appearance.', 'It expresses desmin and not cytokeratin.', 'Desmin marks muscle → tumor of muscle origin.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'GFAP is the intermediate filament of astrocytes.', isTrue: true, correction: 'Correct: GFAP staining identifies astrocytes and astrocytic tumors.', difficulty: 1 },
      { statement: 'Vimentin is the characteristic intermediate filament of epithelial cells.', isTrue: false, correction: 'Cytokeratin marks epithelium; vimentin marks mesenchymal cells such as fibroblasts and endothelium.', difficulty: 1 },
    ],
    clues: [
      { answer: 'DESMIN', clue: 'Intermediate filament marker of muscle', difficulty: 1 },
      { answer: 'LAMIN', clue: 'Intermediate filament of the nuclear envelope', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-membrane-transport',
    title: 'Membranes and glucose transporters',
    discipline: 'biochemistry',
    alsoDisciplines: ['cell-biology', 'physiology'],
    system: 'multisystem',
    alsoSystems: ['endocrine', 'renal'],
    topic: 'biochem-cellular',
    difficulty: 2,
    curriculum: [`${MB}.composition`, `${MB}.transporters`],
    objectives: ['Describe membrane composition and fluidity', 'Classify membrane transport and match GLUT and SGLT transporters to tissues'],
    citations: [OS_MEMB, OS_PASSIVE, OS_ACTIVE, AP_MEMB, GLUT1_RBC, GLUT_BRAIN, GLUT2, GLUT4, GLUT5, SGLT2],
    facts: [
      'The plasma membrane is a fluid mosaic of phospholipids, cholesterol, proteins and carbohydrates (glycolipids and glycoproteins on the outer surface). Cholesterol dampens temperature effects, extending the range over which the membrane stays fluid.',
      'In facilitated diffusion, membrane channels or carriers let polar molecules such as glucose move down their gradient; primary active transport uses ATP directly, and secondary active transport uses the gradient made by primary active transport.',
      'GLUT1 is expressed in red blood cells and at the blood–brain barrier; GLUT3 is the main neuronal transporter.',
      'GLUT2 is expressed in liver, intestine, kidney and pancreatic β cells, where it helps sense blood glucose.',
      'GLUT4 is translocated to the membrane in response to insulin in muscle and adipose tissue; GLUT5 transports fructose in the small intestine.',
      'SGLT2 in the early proximal tubule reabsorbs most filtered glucose; SGLT1 absorbs glucose and galactose in the small intestine and reabsorbs the remainder in the late proximal tubule.',
    ],
    factRefs: [[0], [1, 2, 3], [4, 5], [6], [7, 8], [9, 8]],
    mechanism:
      'Glucose crosses membranes either down its gradient through GLUT carriers or uphill with sodium through SGLT cotransporters. SGLT depends on the sodium gradient created by the Na⁺/K⁺-ATPase (secondary active transport). Tissue-specific GLUTs explain why the brain takes up glucose continuously while muscle and fat take it up mainly when insulin moves GLUT4 to the surface.',
    associations: ['Fluid mosaic', 'Cholesterol', 'Facilitated diffusion', 'Secondary active transport', 'GLUT1', 'GLUT2', 'GLUT3', 'GLUT4', 'GLUT5', 'SGLT1', 'SGLT2'],
    misconception:
      'Insulin does not increase glucose uptake in the brain, liver or red cells: only GLUT4 tissues (skeletal muscle, fat) depend on insulin to bring transporters to the surface.',
    quick:
      'Membrane: phospholipids + cholesterol (moderates fluidity) + proteins. GLUT1: RBC, blood–brain barrier. GLUT2: liver, β cells, gut, kidney. GLUT3: neurons. GLUT4: insulin-responsive muscle and fat. GLUT5: fructose. SGLT1/2: Na⁺-coupled (secondary active) glucose uptake in gut and proximal tubule.',
    detailed: [
      'Cholesterol sits among phospholipids and broadens the temperature range in which the membrane remains appropriately fluid. Polar solutes need channels or carriers: GLUTs allow facilitated diffusion, while SGLTs couple glucose to sodium entry and can move glucose against its gradient.',
      'GLUT isoforms are tissue specific: GLUT1 supplies red cells and the brain across the blood–brain barrier, GLUT3 neurons, GLUT2 the liver and β cells (glucose sensing), GLUT4 insulin-dependent uptake in muscle and fat, and GLUT5 fructose absorption. SGLT2 inhibitors block most proximal tubular glucose reabsorption, causing glucosuria.',
    ],
    takeaway: 'GLUT = facilitated (down gradient); SGLT = secondary active with Na⁺. GLUT4 = insulin-responsive muscle and fat.',
    related: ['cel-na-k-atpase'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'Intestinal cells are treated with a drug that blocks the Na⁺/K⁺-ATPase. What happens to glucose uptake through SGLT1?',
        options: [
          ['a', 'It falls, because the sodium gradient that drives it collapses'],
          ['b', 'It rises, because more sodium stays outside the cell', 'Blocking the pump lets sodium accumulate inside, so the inward gradient falls.'],
          ['c', 'It is unchanged, because SGLT1 uses ATP directly', 'SGLT1 is secondary active: it uses the sodium gradient, not ATP.'],
          ['d', 'It switches to GLUT4, which takes over uptake', 'GLUT4 is the insulin-responsive transporter of muscle and fat.'],
          ['e', 'It rises, because glucose now moves by simple diffusion', 'Glucose is polar and cannot cross the bilayer by simple diffusion.'],
        ],
        answer: 'a',
        mini: 'SGLT1 couples glucose to sodium entry; the Na⁺/K⁺-ATPase creates that gradient, so blocking the pump stops secondary active uptake.',
        reasoning: 'mechanism',
        objectives: [`${MB}.transporters`],
        difficulty: 3,
      },
      {
        stem: 'After a meal, insulin rises. In which tissue does insulin increase glucose uptake by moving GLUT4 to the cell surface?',
        options: [
          ['a', 'Skeletal muscle'],
          ['b', 'Brain neurons', 'Neurons use GLUT3 and take up glucose independently of insulin.'],
          ['c', 'Red blood cells', 'Red cells use GLUT1, which is not insulin-dependent.'],
          ['d', 'Hepatocytes', 'Hepatocytes use GLUT2; insulin acts on liver metabolism, not GLUT4 translocation.'],
          ['e', 'Pancreatic β cells', 'β cells use GLUT2 to sense glucose.'],
        ],
        answer: 'a',
        mini: 'GLUT4 is the insulin-responsive transporter of skeletal muscle and adipose tissue.',
        reasoning: 'recall',
        objectives: [`${MB}.transporters`],
        difficulty: 1,
      },
    ],
    tf: [
      { statement: 'Cholesterol broadens the temperature range over which the plasma membrane stays fluid.', isTrue: true, correction: 'Correct: it dampens the effects of temperature on membrane fluidity.', objectives: [`${MB}.composition`], difficulty: 1 },
      { statement: 'GLUT5 is the main transporter for fructose in the small intestine.', isTrue: true, correction: 'Correct: GLUT5 carries dietary fructose into enterocytes.', objectives: [`${MB}.transporters`], difficulty: 1 },
    ],
    clues: [
      { answer: 'FACILITATED', clue: 'Diffusion through a carrier or channel, as glucose moves through GLUTs', objectives: [`${MB}.transporters`], difficulty: 1 },
      { answer: 'CHOLESTEROL', clue: 'Membrane lipid that moderates fluidity', objectives: [`${MB}.composition`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'cel-na-k-atpase',
    title: 'Na⁺/K⁺-ATPase and cardiac glycosides',
    discipline: 'biochemistry',
    alsoDisciplines: ['pharmacology', 'physiology'],
    system: 'cardiovascular',
    alsoSystems: ['multisystem'],
    topic: 'biochem-cellular',
    difficulty: 3,
    curriculum: [`${MB}.na-k-atpase`, `${MB}.glycosides`],
    objectives: ['Explain the Na⁺/K⁺-ATPase and its role in gradients', 'Predict the effects of digoxin'],
    citations: [AP_MEMB, OS_ACTIVE, LANOXIN, NCX],
    facts: [
      'The Na⁺/K⁺-ATPase moves three Na⁺ out of the cell and two K⁺ into the cell for each ATP used, maintaining low intracellular Na⁺, high intracellular K⁺ and a negative interior.',
      'Primary active transport by the pump creates the gradients that drive secondary active transport.',
      'All of digoxin’s actions are mediated through inhibition of the Na⁺/K⁺-ATPase; this increases intracellular calcium in the myocardium, increasing contractility (inotropy).',
      'The rise in intracellular Ca²⁺ after glycoside treatment depends on the Na⁺–Ca²⁺ exchanger: higher intracellular Na⁺ reduces Ca²⁺ removal.',
      'At higher digoxin concentrations, intracellular K⁺ is progressively lost from cells and serum potassium rises.',
    ],
    factRefs: [[0], [1], [2], [3], [2]],
    mechanism:
      'Digoxin blocks the pump, so Na⁺ builds up inside cardiac cells. A smaller Na⁺ gradient means the Na⁺–Ca²⁺ exchanger removes less Ca²⁺, so more Ca²⁺ is available for contraction. In overdose, widespread pump inhibition lets K⁺ leak out of cells, raising serum potassium.',
    associations: ['3 Na⁺ out, 2 K⁺ in', 'Electrogenic pump', 'Digoxin', 'Na⁺–Ca²⁺ exchanger', 'Positive inotropy', 'Hyperkalemia in toxicity'],
    misconception:
      'Digoxin does not raise contractility by acting on calcium channels: it inhibits the Na⁺/K⁺-ATPase, and the Ca²⁺ rise follows indirectly through the Na⁺–Ca²⁺ exchanger.',
    quick:
      'Pump: 3 Na⁺ out, 2 K⁺ in per ATP (net positive charge out). Digoxin inhibits pump → ↑ intracellular Na⁺ → less Ca²⁺ exported by Na⁺/Ca²⁺ exchanger → ↑ intracellular Ca²⁺ → ↑ contractility. Toxicity: hyperkalemia (K⁺ leaves cells).',
    detailed: [
      'For every ATP hydrolyzed, the pump exports three sodium ions and imports two potassium ions. Because more positive charge leaves than enters, the pump is electrogenic and helps keep the interior negative. The sodium gradient it creates powers secondary active transport such as SGLT1 and the Na⁺–Ca²⁺ exchanger.',
      'Cardiac glycosides inhibit the pump. Intracellular sodium rises, the exchanger extrudes less calcium, and the extra calcium increases the force of contraction. At toxic concentrations, potassium escapes cells and serum potassium rises.',
    ],
    takeaway: '3 Na⁺ out, 2 K⁺ in. Digoxin → ↑ Na⁺ in → ↓ Ca²⁺ out via NCX → ↑ Ca²⁺ → ↑ contractility; overdose → hyperkalemia.',
    related: ['digoxin', 'cel-membrane-transport'],
    outline: found('Cardiovascular System', 'Heart failure'),
    mcq: [
      {
        stem: 'For each ATP it hydrolyzes, how many ions does the Na⁺/K⁺-ATPase move, and what is the net electrical effect?',
        options: [
          ['a', '3 Na⁺ out and 2 K⁺ in; net positive charge leaves the cell'],
          ['b', '2 Na⁺ out and 3 K⁺ in; net positive charge enters the cell', 'The ratio is reversed: three sodium ions leave for two potassium ions entering.'],
          ['c', '1 Na⁺ out and 1 K⁺ in; no net charge moves', 'The pump is electrogenic: it moves unequal charge.'],
          ['d', '3 Na⁺ in and 2 K⁺ out; the cell depolarizes', 'The pump keeps Na⁺ low and K⁺ high inside the cell.'],
          ['e', '3 K⁺ out and 2 Ca²⁺ in; the cell contracts', 'The pump exchanges Na⁺ and K⁺, not Ca²⁺.'],
        ],
        answer: 'a',
        mini: 'Three Na⁺ out and two K⁺ in per ATP: one net positive charge leaves each cycle (electrogenic).',
        reasoning: 'mechanism',
        objectives: [`${MB}.na-k-atpase`],
        difficulty: 2,
      },
      {
        stem: 'How does digoxin increase the force of cardiac contraction?',
        options: [
          ['a', 'Less Ca²⁺ is exported because intracellular Na⁺ rises'],
          ['b', 'It opens L-type calcium channels directly', 'Digoxin does not act on calcium channels; its effect is through the pump.'],
          ['c', 'It stimulates β1 receptors to raise cAMP', 'That is the action of β agonists such as dobutamine.'],
          ['d', 'It inhibits phosphodiesterase 3 in the myocardium', 'PDE3 inhibition is how milrinone raises cAMP; digoxin acts on the pump.'],
          ['e', 'It increases ATP production in mitochondria', 'Digoxin acts by inhibiting the Na⁺/K⁺-ATPase.'],
        ],
        answer: 'a',
        mini: 'Digoxin inhibits the Na⁺/K⁺-ATPase → intracellular Na⁺ rises → less Ca²⁺ is exchanged out → more Ca²⁺ for contraction.',
        reasoning: 'mechanism',
        objectives: [`${MB}.glycosides`],
        difficulty: 2,
      },
      {
        stem: 'A woman takes a large overdose of her digoxin tablets. Which serum electrolyte change is expected, and why?',
        options: [
          ['a', 'Hyperkalemia, because K⁺ is no longer pumped into cells'],
          ['b', 'Hypokalemia, because the pump moves extra K⁺ into cells', 'Digoxin inhibits the pump, so less, not more, K⁺ enters cells.'],
          ['c', 'Hypernatremia, because Na⁺ is pumped out of cells faster', 'Pump inhibition keeps Na⁺ inside cells.'],
          ['d', 'Hypercalcemia, because bone releases calcium', 'The calcium rise is intracellular in cardiac cells, not in serum from bone.'],
          ['e', 'No change, because digoxin acts only in the heart', 'The Na⁺/K⁺-ATPase is present in cells throughout the body.'],
        ],
        answer: 'a',
        mini: 'Widespread Na⁺/K⁺-ATPase inhibition lets K⁺ leak out of cells and stops its re-uptake, so serum K⁺ rises in acute toxicity.',
        reasoning: 'prediction',
        objectives: [`${MB}.glycosides`],
        steps: ['Digoxin inhibits the Na⁺/K⁺-ATPase in cells throughout the body.', 'The pump normally moves K⁺ into cells.', 'With the pump blocked, K⁺ accumulates outside cells → hyperkalemia.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'The Na⁺/K⁺-ATPase moves two Na⁺ ions out and three K⁺ ions in for each ATP.', isTrue: false, correction: 'It moves three Na⁺ out and two K⁺ in for each ATP.', objectives: [`${MB}.na-k-atpase`], difficulty: 1 },
    ],
    clues: [
      { answer: 'DIGOXIN', clue: 'Cardiac glycoside that inhibits the sodium pump to raise contractility', objectives: [`${MB}.glycosides`], difficulty: 1 },
    ],
  },
]);

// --------------------------------------------------------------------------------------------------
// Playable games: Mechanism Lab, Match Up, Connections, Mystery Patient.
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
const kase = (x: Omit<CaseItem, Shared | 'depth' | 'reasoning'>): CaseItem => ({
  kind: 'case', review: AI_DRAFT, version: 1, depth: 'application', reasoning: 'multistep', ...x,
});
const puzzle = (x: Omit<ConnectionsPuzzleItem, Shared | 'depth' | 'reasoning'>): ConnectionsPuzzleItem => ({
  kind: 'connections', review: AI_DRAFT, version: 1, depth: 'recognition', reasoning: 'identification', ...x,
});

const sequences: SequenceItem[] = [
  seq({
    id: 'seq:g1-s-rb',
    title: 'Passing the G1/S checkpoint',
    prompt: 'Order the events that let a cell leave G1 and enter S phase.',
    steps: [
      'Growth signals raise cyclin D',
      'Cyclin D binds and activates CDK4/6',
      'Cyclin D–CDK4/6 phosphorylates Rb',
      'Phosphorylated Rb releases E2F',
      'E2F switches on genes needed for S phase',
      'The cell begins DNA replication',
    ],
    explanation: 'Rb is a brake that holds E2F; phosphorylation by cyclin D–CDK4/6 lifts the brake. Losing Rb (retinoblastoma) or overactivating cyclin D–CDK4/6 removes this control.',
    conceptIds: ['cel-rb-p53'],
    objectiveIds: [`${CC}.rb-p53`],
    difficulty: 2,
  }),
  seq({
    id: 'seq:p53-damage',
    title: 'p53 answers DNA damage',
    prompt: 'Order the response of a G1 cell to DNA damage.',
    steps: [
      'DNA damage is detected at the G1 checkpoint',
      'p53 levels rise',
      'p53 induces p21',
      'p21 inhibits cyclin–CDK complexes',
      'The cell cycle halts while the DNA is repaired',
      'If the damage cannot be repaired, p53 triggers apoptosis',
    ],
    explanation: 'p53 stops damaged cells from copying their DNA (through p21) and removes cells that cannot be fixed. Losing p53 lets damaged cells keep dividing.',
    conceptIds: ['cel-rb-p53', 'cel-cell-cycle'],
    objectiveIds: [`${CC}.rb-p53`, `${CC}.phases`],
    difficulty: 2,
  }),
  seq({
    id: 'seq:secretory-pathway',
    title: 'Route of a secreted protein',
    prompt: 'Order the journey of a protein that a plasma cell secretes.',
    steps: [
      'Ribosomes on the rough ER make the protein into the ER lumen',
      'The protein folds and is modified in the rough ER',
      'A COPII vesicle carries it to the cis-Golgi',
      'The Golgi modifies its carbohydrates',
      'A vesicle buds from the trans-Golgi',
      'The vesicle fuses with the plasma membrane and releases the protein',
    ],
    explanation: 'Secretory proteins move rough ER → (COPII) → Golgi → trans-Golgi vesicle → plasma membrane. COPI handles the return trip from Golgi to ER.',
    conceptIds: ['cel-er-golgi'],
    objectiveIds: [`${EG}.er`, `${EG}.vesicles`],
    difficulty: 2,
  }),
  seq({
    id: 'seq:m6p-lysosome',
    title: 'Addressing an enzyme to the lysosome',
    prompt: 'Order the steps that deliver a hydrolase to the lysosome. Which step fails in I-cell disease?',
    steps: [
      'The hydrolase is made in the rough ER',
      'It is carried to the Golgi',
      'GlcNAc-1-phosphotransferase begins the mannose-6-phosphate tag',
      'The mannose-6-phosphate tag is completed',
      'The tagged hydrolase leaves the trans-Golgi in a clathrin-coated vesicle',
      'The hydrolase reaches the lysosome',
    ],
    explanation: 'In I-cell disease the third step fails: untagged hydrolases are secreted, plasma enzyme levels rise and lysosomes fill with undigested material.',
    conceptIds: ['cel-i-cell', 'cel-er-golgi'],
    objectiveIds: [`${EG}.i-cell`, `${EG}.golgi`],
    difficulty: 3,
  }),
  seq({
    id: 'seq:digoxin',
    title: 'How digoxin strengthens the heartbeat',
    prompt: 'Order the events from digoxin binding to increased contractility.',
    steps: [
      'Digoxin inhibits the Na⁺/K⁺-ATPase',
      'Na⁺ accumulates inside the cardiac cell',
      'The Na⁺ gradient across the membrane falls',
      'The Na⁺–Ca²⁺ exchanger removes less Ca²⁺',
      'Intracellular Ca²⁺ rises',
      'Contraction becomes stronger',
    ],
    explanation: 'Digoxin’s inotropy is indirect: the exchanger needs a steep Na⁺ gradient to export Ca²⁺. In overdose, the same pump inhibition raises serum K⁺.',
    conceptIds: ['cel-na-k-atpase'],
    objectiveIds: [`${MB}.glycosides`, `${MB}.na-k-atpase`],
    difficulty: 2,
  }),
];

const matches: MatchItem[] = [
  match({
    id: 'match:phase-drugs',
    title: 'Which phase does it hit?',
    prompt: 'Match each anticancer drug to the cell-cycle phase and action it targets.',
    pairs: [
      { left: 'Vincristine', right: 'M phase: blocks spindle microtubule formation' },
      { left: 'Paclitaxel', right: 'M phase: stabilizes microtubules' },
      { left: 'Hydroxyurea', right: 'S phase: inhibits ribonucleotide reductase' },
      { left: 'Bleomycin', right: 'G2 arrest after DNA damage' },
      { left: 'Palbociclib', right: 'G1 arrest by CDK4/6 inhibition' },
    ],
    explanation: 'Cell-cycle-specific drugs act on the process of one phase: DNA synthesis (S), DNA integrity before mitosis (G2), the spindle (M) or the G1/S switch (CDK4/6).',
    conceptIds: ['cel-cell-cycle'],
    objectiveIds: [`${CC}.phase-drugs`],
    difficulty: 2,
  }),
  match({
    id: 'match:traffic',
    title: 'Organelles and traffic routes',
    prompt: 'Match each organelle, coat or tag to its job.',
    pairs: [
      { left: 'Rough ER', right: 'Makes secretory and membrane proteins' },
      { left: 'Smooth ER', right: 'Makes steroids and detoxifies drugs' },
      { left: 'COPII', right: 'Carries cargo from ER to Golgi' },
      { left: 'COPI', right: 'Returns cargo from Golgi to ER' },
      { left: 'Clathrin', right: 'Endocytosis and trans-Golgi to lysosome' },
      { left: 'Mannose-6-phosphate', right: 'Address tag for lysosomal enzymes' },
    ],
    explanation: 'Proteins go forward from the ER in COPII vesicles and back in COPI; clathrin works at the plasma membrane and trans-Golgi; mannose-6-phosphate sends hydrolases to lysosomes.',
    conceptIds: ['cel-er-golgi'],
    objectiveIds: [`${EG}.vesicles`, `${EG}.er`],
    difficulty: 1,
  }),
  match({
    id: 'match:if-markers',
    title: 'Tumor markers: intermediate filaments',
    prompt: 'Match each intermediate filament to the cells it marks.',
    pairs: [
      { left: 'Vimentin', right: 'Mesenchymal cells (fibroblasts, endothelium)' },
      { left: 'Desmin', right: 'Muscle' },
      { left: 'Cytokeratin', right: 'Epithelium' },
      { left: 'GFAP', right: 'Astrocytes' },
      { left: 'Neurofilament', right: 'Neurons' },
      { left: 'Lamin', right: 'Nuclear envelope' },
    ],
    explanation: 'Intermediate filaments are tissue specific, so staining for them reveals a tumor’s origin.',
    conceptIds: ['cel-if-markers'],
    objectiveIds: [`${IFS}.markers`],
    difficulty: 1,
  }),
  match({
    id: 'match:glucose-transporters',
    title: 'Glucose transporters',
    prompt: 'Match each transporter to where or how it works.',
    pairs: [
      { left: 'GLUT1', right: 'Red blood cells and blood–brain barrier' },
      { left: 'GLUT2', right: 'Liver and pancreatic β cells (glucose sensing)' },
      { left: 'GLUT3', right: 'Neurons' },
      { left: 'GLUT4', right: 'Insulin-responsive muscle and fat' },
      { left: 'GLUT5', right: 'Fructose uptake in the intestine' },
      { left: 'SGLT2', right: 'Na⁺-coupled glucose reabsorption, early proximal tubule' },
    ],
    explanation: 'GLUTs allow facilitated diffusion with tissue-specific roles; only GLUT4 depends on insulin. SGLTs are secondary active transporters powered by the sodium gradient.',
    conceptIds: ['cel-membrane-transport'],
    objectiveIds: [`${MB}.transporters`],
    difficulty: 2,
  }),
  match({
    id: 'match:peroxisome',
    title: 'Peroxisome: jobs and failures',
    prompt: 'Match each item to its peroxisomal role or defect.',
    pairs: [
      { left: 'Catalase', right: 'Breaks down hydrogen peroxide' },
      { left: 'Plasmalogens', right: 'Ether lipids whose synthesis starts in peroxisomes' },
      { left: 'Zellweger syndrome', right: 'Peroxisomes fail to form (PEX genes)' },
      { left: 'Refsum disease', right: 'Phytanic acid α-oxidation fails' },
      { left: 'X-linked adrenoleukodystrophy', right: 'VLCFA cannot enter peroxisomes (ABCD1)' },
    ],
    explanation: 'Peroxisomes remove H₂O₂ and handle lipids mitochondria cannot: VLCFA, branched phytanic acid and plasmalogen synthesis.',
    conceptIds: ['cel-peroxisome', 'cel-x-ald'],
    objectiveIds: [`${PX}.peroxisome`, `${PX}.zellweger`, `${PX}.refsum`, `${PX}.x-ald`],
    difficulty: 2,
  }),
  match({
    id: 'match:microtubules',
    title: 'Microtubules: drugs and motors',
    prompt: 'Match each drug or motor to its action.',
    pairs: [
      { left: 'Colchicine', right: 'Blocks polymerization in neutrophils (gout)' },
      { left: 'Griseofulvin', right: 'Disrupts the fungal mitotic spindle' },
      { left: 'Mebendazole', right: 'Binds helminth tubulin' },
      { left: 'Kinesin', right: 'Anterograde transport toward plus ends' },
      { left: 'Dynein', right: 'Retrograde transport toward minus ends' },
    ],
    explanation: 'Many drugs target tubulin in human, fungal or worm cells; kinesin and dynein carry cargo in opposite directions along microtubules.',
    conceptIds: ['cel-cytoskeleton'],
    objectiveIds: [`${CY}.motors`],
    difficulty: 2,
  }),
];

const groups: ConnectionGroup[] = [
  group({
    id: 'grp:microtubule-drugs',
    label: 'Act on microtubules',
    tier: 2,
    conceptIds: ['cel-cytoskeleton'],
    objectiveIds: [`${CY}.motors`],
    difficulty: 2,
    members: ['Colchicine', 'Vincristine', 'Paclitaxel', 'Griseofulvin', 'Mebendazole'],
    explanation: 'Colchicine and vincristine block polymerization, paclitaxel stabilizes, griseofulvin disrupts the fungal spindle and mebendazole binds worm tubulin.',
  }),
  group({
    id: 'grp:intermediate-filaments',
    label: 'Intermediate filaments',
    tier: 2,
    conceptIds: ['cel-if-markers'],
    objectiveIds: [`${IFS}.markers`],
    difficulty: 2,
    members: ['Vimentin', 'Desmin', 'Cytokeratin', 'GFAP', 'Neurofilament', 'Lamin'],
    explanation: 'Tissue-specific intermediate filaments used as immunohistochemical markers.',
  }),
];

const puzzles: ConnectionsPuzzleItem[] = [
  puzzle({
    id: 'cx:cell-machinery',
    title: 'Inside the cell',
    difficulty: 2,
    conceptIds: ['cel-if-markers', 'cel-peroxisome', 'cel-cytoskeleton', 'cel-membrane-transport'],
    objectiveIds: [`${IFS}.markers`, `${PX}.peroxisome`, `${CY}.motors`, `${MB}.transporters`],
    groups: [
      { id: 'if', label: 'Intermediate filaments', tier: 1, members: ['Vimentin', 'Desmin', 'GFAP', 'Lamin'],
        explanation: 'Tissue-specific structural filaments: mesenchyme, muscle, astrocytes and nuclear envelope.',
        conceptIds: ['cel-if-markers'], objectiveIds: [`${IFS}.markers`],
        accepts: ['Vimentin', 'Desmin', 'GFAP', 'Lamin', 'Cytokeratin', 'Neurofilament'] },
      { id: 'perox', label: 'Happen in peroxisomes', tier: 3, members: ['Catalase', 'Plasmalogen synthesis', 'VLCFA β-oxidation', 'Phytanic acid α-oxidation'],
        explanation: 'Peroxisomes remove H₂O₂ and handle very-long-chain and branched fatty acids and plasmalogen synthesis.',
        conceptIds: ['cel-peroxisome'], objectiveIds: [`${PX}.peroxisome`],
        accepts: ['Catalase', 'Plasmalogen synthesis', 'VLCFA β-oxidation', 'Phytanic acid α-oxidation'] },
      { id: 'mt', label: 'Drugs acting on microtubules', tier: 2, members: ['Colchicine', 'Vincristine', 'Paclitaxel', 'Griseofulvin'],
        explanation: 'All bind tubulin or microtubules: colchicine and vincristine block assembly, paclitaxel stabilizes, griseofulvin disrupts the fungal spindle.',
        conceptIds: ['cel-cytoskeleton'], objectiveIds: [`${CY}.motors`],
        accepts: ['Colchicine', 'Vincristine', 'Paclitaxel', 'Griseofulvin', 'Mebendazole'] },
      { id: 'glucose', label: 'Carry glucose across membranes', tier: 4, members: ['GLUT1', 'GLUT3', 'GLUT4', 'SGLT2'],
        explanation: 'GLUTs (facilitated diffusion) and SGLT2 (Na⁺-coupled secondary active transport).',
        conceptIds: ['cel-membrane-transport'], objectiveIds: [`${MB}.transporters`],
        accepts: ['GLUT1', 'GLUT2', 'GLUT3', 'GLUT4', 'SGLT1', 'SGLT2'] },
    ],
    decoys: [
      { label: 'Anticancer drugs', accepts: ['Vincristine', 'Paclitaxel'] },
      { label: 'Expressed in the brain', accepts: ['GFAP', 'GLUT1', 'GLUT3'] },
      { label: 'Muscle-related', accepts: ['Desmin', 'GLUT4'] },
      { label: 'Lipid metabolism', accepts: ['Plasmalogen synthesis', 'VLCFA β-oxidation', 'Phytanic acid α-oxidation'] },
    ],
  }),
];

const cases: CaseItem[] = [
  kase({
    id: 'case:i-cell',
    title: 'Enzymes in the wrong place',
    conceptIds: ['cel-i-cell', 'cel-er-golgi'],
    objectiveIds: [`${EG}.i-cell`, `${EG}.golgi`],
    difficulty: 4,
    stages: [
      { label: 'Presentation', text: 'A 10-month-old boy is referred for slow development; he cannot sit unsupported.' },
      { label: 'History', text: 'At birth he had dislocated hips and clubfeet. He has had several chest infections. His parents are healthy and related.' },
      { label: 'Examination', text: 'Coarse facial features, markedly overgrown gums, a rounded upper back and stiff joints with limited movement. An umbilical hernia is present.' },
      { label: 'Laboratory', text: 'Plasma activities of several lysosomal enzymes (for example β-hexosaminidase and arylsulfatase A) are many times the upper limit of normal.' },
      { label: 'Further clue', text: 'His cells contain lysosomes distended with undegraded material.' },
    ],
    question: 'Which molecular defect explains both the storage and the high plasma enzyme levels?',
    options: [
      { id: 'a', text: 'Failure to add mannose-6-phosphate to lysosomal enzymes in the Golgi' },
      { id: 'b', text: 'Deficiency of a single lysosomal enzyme such as α-L-iduronidase', whyWrong: 'A single-enzyme deficiency (e.g. Hurler) lowers that enzyme; it does not raise many enzymes in plasma.' },
      { id: 'c', text: 'Absence of functional peroxisomes', whyWrong: 'Zellweger syndrome causes hypotonia and seizures with raised VLCFA, not raised plasma lysosomal enzymes.' },
      { id: 'd', text: 'Defective dynein arms in cilia', whyWrong: 'Primary ciliary dyskinesia causes chest infections but not storage or coarse features.' },
      { id: 'e', text: 'Inhibition of the 26S proteasome', whyWrong: 'Proteasome failure does not mistarget lysosomal enzymes.' },
    ],
    answerId: 'a',
    explanation:
      'Coarse features, gum overgrowth, skeletal deformities and contractures with many lysosomal enzymes raised in plasma point to I-cell disease (mucolipidosis II). Without GlcNAc-1-phosphotransferase the mannose-6-phosphate tag is not made, so hydrolases are secreted instead of reaching lysosomes, which fill with undegraded material.',
    mechanism: 'GNPTAB defect → no mannose-6-phosphate → hydrolases secreted (↑ plasma) → empty lysosomes accumulate substrate → storage disease.',
    takeaway: 'Storage disease with HIGH plasma lysosomal enzymes = I-cell disease (targeting defect).',
    differentials: [
      { name: 'Hurler syndrome (MPS I)', why: 'Coarse features and storage but a single enzyme (α-L-iduronidase) is low.' },
      { name: 'Zellweger syndrome', why: 'Neonatal hypotonia, seizures and raised VLCFA; lysosomal enzymes normal.' },
    ],
  }),
  kase({
    id: 'case:x-ald',
    title: 'Falling grades, rising VLCFA',
    conceptIds: ['cel-x-ald', 'cel-peroxisome'],
    objectiveIds: [`${PX}.x-ald`],
    difficulty: 4,
    stages: [
      { label: 'Presentation', text: 'An 8-year-old boy is brought in because his school performance has fallen sharply over 6 months.' },
      { label: 'History', text: 'His teachers report inattention and new aggressive outbursts. He now trips and bumps into doorframes. A maternal uncle died in childhood of a “brain disease”.' },
      { label: 'Examination', text: 'Reduced visual acuity, mild spasticity of the legs and an unsteady gait.' },
      { label: 'Laboratory', text: 'Early-morning cortisol is low, with a poor response to ACTH stimulation. Plasma very-long-chain fatty acids are raised.' },
      { label: 'Imaging & tests', text: 'Brain MRI shows white matter abnormalities consistent with demyelination.' },
    ],
    question: 'Which molecular defect explains his findings?',
    options: [
      { id: 'a', text: 'Failure to import very-long-chain fatty acids into peroxisomes' },
      { id: 'b', text: 'Failure to form peroxisomes at all', whyWrong: 'Zellweger syndrome presents at birth with hypotonia and seizures, not school-age decline.' },
      { id: 'c', text: 'Failure of phytanic acid α-oxidation', whyWrong: 'Refsum disease raises phytanic acid and causes retinitis pigmentosa and neuropathy without adrenal failure.' },
      { id: 'd', text: 'Failure to add mannose-6-phosphate to lysosomal enzymes', whyWrong: 'I-cell disease presents in infancy with coarse features and high plasma lysosomal enzymes.' },
      { id: 'e', text: 'Autoimmune destruction of the adrenal cortex', whyWrong: 'Autoimmune adrenalitis would not explain white matter disease or raised VLCFA.' },
    ],
    answerId: 'a',
    explanation:
      'Behavioral and school decline, visual loss and gait change in a boy, with adrenal insufficiency, raised VLCFA and an affected maternal uncle, indicate X-linked adrenoleukodystrophy. The ABCD1 transporter (ALDP) cannot bring VLCFA into peroxisomes, so they accumulate in white matter and adrenal cortex.',
    mechanism: 'ABCD1 (ALDP) defect → VLCFA not imported into peroxisomes → VLCFA accumulate → inflammatory demyelination + adrenal insufficiency.',
    takeaway: 'Boy + neurologic decline + adrenal insufficiency + ↑ VLCFA = X-linked adrenoleukodystrophy.',
    differentials: [
      { name: 'Zellweger syndrome', why: 'Neonatal onset with absent peroxisomes.' },
      { name: 'Autoimmune Addison disease', why: 'Adrenal insufficiency without white matter disease or raised VLCFA.' },
    ],
  }),
];

export const cellularBatch1: Bundle = {
  concepts: core.concepts,
  items: [...core.items, ...sequences, ...matches, ...groups, ...puzzles, ...cases],
};
