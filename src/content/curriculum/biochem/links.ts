import type {
  Coverage, CrossLink, Depth, Element, FoundationalStrand, Integration, Objective, OutlineRef, SubjectId, Subtopic,
} from '../types';
import type { OutlineArea } from '../../schema';

/* ------------------------------------------------------------------------------------------------
 * Outline references. Section headings, categories and listed terms are copied exactly from the
 * USMLE Content Outline (2026), checked against the published PDF on 6 Nov 2026 by
 * scripts/check-outline-terms.ts (run locally against a downloaded copy; the outline itself is not
 * stored in the repository).
 * ---------------------------------------------------------------------------------------------- */

const L = (area: OutlineArea, section: string, category: string | undefined, term: string): OutlineRef =>
  category ? { area, section, category, term } : { area, section, term };
const F = (area: OutlineArea, section: string, strand: FoundationalStrand): OutlineRef => ({ area, section, strand });

const BMB: FoundationalStrand = 'Biochemistry and molecular biology';
const CELL: FoundationalStrand = 'Biology of cells';
const GEN: FoundationalStrand = 'Human Development and genetics';
const PD: FoundationalStrand = 'Pharmacodynamic and pharmacokinetic processes';
const NSF: FoundationalStrand = 'Normal structure and function of organ systems';

const MS = 'Multisystem Processes & Disorders' as const;
const GENSEC = 'Genetic, metabolic, and developmental disorders';
const NUT = 'Nutrition';
const TOX = 'Toxins and environmental extremes';
const NEO = 'Neoplasms and related disorders';
const FLUID = 'Fluid, electrolyte, and acid-base balance disorders';
const INF = 'Infectious, immunologic, and inflammatory disorders, including microbiologic and host response to insult';
const NS = 'Nervous System & Special Senses' as const;
const BL = 'Blood & Lymphoreticular System' as const;
const ANEMIA = 'Anemia, cytopenias, and polycythemia';
const COAG = 'Coagulation disorders (hypocoagulable and hypercoagulable conditions)';
const IMMD = 'Disorders associated with immunodeficiency';
const PREG = 'Pregnancy, Childbirth, & the Puerperium' as const;
const NEWBORN = 'Newborn (birth to 4 weeks of age)';
const EN = 'Endocrine System' as const;
const DM = 'Diabetes mellitus and other disorders of the endocrine pancreas';
const GI = 'Gastrointestinal System' as const;
const LIVER = 'Disorders of the liver and biliary system, noninfectious';
const REN = 'Renal & Urinary System' as const;
const MSK = 'Musculoskeletal System' as const;

export const OL = {
  // Multisystem › Genetic, metabolic, and developmental disorders
  vacterl: L(MS, GENSEC, 'multifactorial', 'VATER/VACTERL association'),
  down: L(MS, GENSEC, 'large genomic changes', 'Down syndrome'),
  pws: L(MS, GENSEC, 'large genomic changes', 'Prader-Willi syndrome'),
  bws: L(MS, GENSEC, 'large genomic changes', 'Beckwith-Wiedemann syndrome'),
  a1at: L(MS, GENSEC, 'enzymatic/metabolic', 'alpha-1 antitrypsin deficiency'),
  porphyria: L(MS, GENSEC, 'enzymatic/metabolic', 'porphyria'),
  iem: L(MS, GENSEC, 'enzymatic/metabolic', 'inborn errors of metabolism'),
  msud: L(MS, GENSEC, 'enzymatic/metabolic', 'maple syrup urine disease'),
  ureaCycle: L(MS, GENSEC, 'enzymatic/metabolic', 'diseases involving urea cycle'),
  storage: L(MS, GENSEC, 'enzymatic/metabolic', 'storage diseases'),
  fabry: L(MS, GENSEC, 'enzymatic/metabolic', 'Fabry disease'),
  taySachs: L(MS, GENSEC, 'enzymatic/metabolic', 'Tay-Sachs disease'),
  gsd: L(MS, GENSEC, 'enzymatic/metabolic', 'glycogen storage disease'),
  mps: L(MS, GENSEC, 'enzymatic/metabolic', 'mucopolysaccharidoses'),
  amyloidosis: L(MS, GENSEC, 'structural protein disorders', 'amyloidosis'),
  eds: L(MS, GENSEC, 'structural protein disorders', 'Ehlers-Danlos syndrome'),
  pcd: L(MS, GENSEC, 'structural protein disorders', 'immotile cilia syndrome (Kartagener syndrome; primary ciliary dyskinesia)'),
  marfan: L(MS, GENSEC, 'structural protein disorders', 'Marfan syndrome'),
  cf: L(MS, GENSEC, 'intracellular/extracellular transport receptors', 'cystic fibrosis'),
  hemochromatosis: L(MS, GENSEC, 'intracellular/extracellular transport receptors', 'hemochromatosis'),
  wilson: L(MS, GENSEC, 'intracellular/extracellular transport receptors', 'Wilson disease'),
  fragileX: L(MS, GENSEC, 'triplet repeat/RNA disorders', 'fragile X syndrome'),
  genF: F(MS, GENSEC, GEN),
  metF: F(MS, GENSEC, BMB),
  cellF: F(MS, GENSEC, CELL),

  // Multisystem › Nutrition (outline intro also notes a recent emphasis on new nutrition content)
  pem: L(MS, NUT, undefined, 'protein-calorie malnutrition (kwashiorkor, marasmus)'),
  vitA: L(MS, NUT, 'vitamin deficiencies and/or toxicities', 'vitamin A'),
  vitB: L(MS, NUT, 'vitamin deficiencies and/or toxicities', 'vitamin B'),
  vitB1: L(MS, NUT, 'vitamin deficiencies and/or toxicities', 'vitamin B1, thiamine (eg, Wernicke-Korsakoff syndrome, beriberi)'),
  vitB3: L(MS, NUT, 'vitamin deficiencies and/or toxicities', 'vitamin B3, niacin'),
  vitB6: L(MS, NUT, 'vitamin deficiencies and/or toxicities', 'vitamin B6, pyridoxine'),
  vitB9: L(MS, NUT, 'vitamin deficiencies and/or toxicities', 'vitamin B9, folic acid'),
  vitB12: L(MS, NUT, 'vitamin deficiencies and/or toxicities', 'vitamin B12, cobalamins (pernicious anemia)'),
  vitC: L(MS, NUT, 'vitamin deficiencies and/or toxicities', 'vitamin C (scurvy)'),
  vitD: L(MS, NUT, 'vitamin deficiencies and/or toxicities', 'vitamin D (rickets)'),
  vitE: L(MS, NUT, 'vitamin deficiencies and/or toxicities', 'vitamin E'),
  vitK: L(MS, NUT, 'vitamin deficiencies and/or toxicities', 'vitamin K'),
  mineral: L(MS, NUT, undefined, 'mineral deficiencies and/or toxicities'),
  obesity: L(MS, NUT, undefined, 'obesity'),
  tpn: L(MS, NUT, undefined, 'enteral/parenteral nutrition (TPN)'),
  nutF: F(MS, NUT, BMB),

  // Multisystem › Toxins; Neoplasms; Fluid; drugs
  methanol: L(MS, TOX, 'chemical including Gulf War illness', 'methanol'),
  ethyleneGlycol: L(MS, TOX, 'chemical including Gulf War illness', 'ethylene glycol'),
  gases: L(MS, TOX, 'chemical including Gulf War illness', 'gases, vapors, smoke inhalation'),
  pesticides: L(MS, TOX, 'chemical including Gulf War illness', 'agricultural hazards (eg, pesticides, green tobacco poisoning, anhydrous ammonia, Agent Orange)'),
  lead: L(MS, TOX, 'chemical including Gulf War illness', 'metals (eg, lead)'),
  poisoning: L(MS, TOX, 'chemical including Gulf War illness', 'principles of poisoning and therapy (eg, acetylsalicylic acid [ASA], acetaminophen)'),
  hyperthermia: L(MS, TOX, 'physical and associated disorders', 'temperature (eg, hypothermia, hyperthermia, heat stroke)'),
  toxF: F(MS, TOX, BMB),
  fanconi: L(MS, NEO, 'inherited cancer syndromes', 'DNA repair abnormalities (eg, Fanconi anemia)'),
  hnpcc: L(MS, NEO, 'inherited cancer syndromes', 'hereditary nonpolyposis colorectal cancer'),
  neoF: F(MS, NEO, CELL),
  neoMolF: F(MS, NEO, BMB),
  metAcidosis: L(MS, FLUID, 'acid-base disorders', 'metabolic acidosis'),
  hypophos: L(MS, FLUID, 'fluid volume and electrolyte/ion disorders', 'hypophosphatemia'),
  hypoMg: L(MS, FLUID, 'fluid volume and electrolyte/ion disorders', 'hypomagnesemia'),
  fluidF: F(MS, FLUID, NSF),
  drugsF: F(MS, 'Adverse effects of drugs on multisystem disorders', PD),
  infF: F(MS, INF, CELL),

  // Immune System
  ada: L('Immune System', IMMD, 'deficiency/dysfunction primarily of cell-mediated immunity', 'adenosine deaminase deficiency'),
  digeorge: L('Immune System', IMMD, 'deficiency/dysfunction primarily of cell-mediated immunity', 'DiGeorge (22q11.2 deletion) syndrome'),
  scid: L('Immune System', IMMD, 'deficiency/dysfunction primarily of cell-mediated immunity', 'severe combined immunodeficiency disease (SCID)'),
  wiskott: L('Immune System', IMMD, 'deficiency/dysfunction primarily of cell-mediated immunity', 'Wiskott-Aldrich syndrome'),
  bruton: L('Immune System', IMMD, 'deficiency primarily of humoral immunity', 'hypogammaglobulinemia/agammaglobulinemia, X-linked (Bruton)'),
  immF: F('Immune System', IMMD, CELL),

  // Blood & Lymphoreticular System
  g6pd: L(BL, ANEMIA, 'hemolysis', 'glucose 6-phosphate dehydrogenase deficiency'),
  pkDef: L(BL, ANEMIA, 'hemolysis', 'pyruvate kinase deficiency'),
  spherocytosis: L(BL, ANEMIA, 'disorders of hemoglobin, heme, or membrane', 'hereditary spherocytosis, elliptocytosis'),
  sickle: L(BL, ANEMIA, 'disorders of hemoglobin, heme, or membrane', 'sickle cell disease'),
  sideroblastic: L(BL, ANEMIA, 'disorders of hemoglobin, heme, or membrane', 'sideroblastic anemia'),
  thalassemia: L(BL, ANEMIA, 'disorders of hemoglobin, heme, or membrane', 'thalassemias'),
  anemiaF: F(BL, ANEMIA, BMB),
  hemophilia: L(BL, COAG, 'hypocoagulable', 'hemophilia, congenital'),
  homocysteinemia: L(BL, COAG, 'hypercoagulable', 'homocysteinemia'),
  factorV: L(BL, COAG, 'hypercoagulable', 'Factor V Leiden'),
  coagF: F(BL, COAG, BMB),
  bloodNeoF: F(BL, 'Neoplasms', CELL),

  // Nervous System & Special Senses
  dystrophy: L(NS, 'Neuromuscular disorders', undefined, 'muscular dystrophy (eg, Duchenne, myotonic)'),
  huntington: L(NS, 'Movement disorders', undefined, 'Huntington disease'),
  ald: L(NS, 'Metabolic disorders', undefined, 'adrenoleukodystrophy'),
  metEnceph: L(NS, 'Metabolic disorders', undefined, 'metabolic encephalopathy'),
  friedreich: L(NS, 'Congenital disorders', undefined, 'Friedreich ataxia'),
  tscVhl: L(NS, 'Congenital disorders', undefined, 'tuberous sclerosis, von Hippel-Lindau disease'),
  ntd: L(NS, 'Congenital disorders', undefined, 'neural tube defects (eg, spina bifida, holoprosencephaly, anencephaly)'),
  nf: L(NS, 'Neoplasms (cerebral, spinal, and peripheral)', undefined, 'benign (meningioma, neurofibromatosis)'),
  nf2: L(NS, 'Disorders of the ear', undefined, 'acoustic neuroma, neurofibromatosis type 2'),
  retinoblastoma: L(NS, 'Disorders of the eye and eyelid', undefined, 'retinoblastoma'),
  alzheimer: L(NS, 'Degenerative disorders/amnestic syndromes', undefined, 'Alzheimer disease'),
  neuroMetF: F(NS, 'Metabolic disorders', BMB),
  neuroCongF: F(NS, 'Congenital disorders', GEN),

  // Skin, MSK
  albinism: L('Skin & Subcutaneous Tissue', 'Disorders of pigmentation', undefined, 'albinism'),
  xp: L('Skin & Subcutaneous Tissue', 'Congenital disorders', undefined, 'xeroderma pigmentosum'),
  skinNeoF: F('Skin & Subcutaneous Tissue', 'Neoplasms', CELL),
  gout: L(MSK, 'Degenerative and metabolic disorders', undefined, 'gout, gouty arthritis, pseudogout'),
  osteomalacia: L(MSK, 'Degenerative and metabolic disorders', undefined, 'osteomalacia'),
  achondroplasia: L(MSK, 'Congenital disorders', undefined, 'achondroplasia/dwarfism'),
  oi: L(MSK, 'Congenital disorders', undefined, 'osteogenesis imperfecta'),
  mcardle: L(MSK, 'Congenital disorders', undefined, 'McArdle disease'),
  mitoMyopathy: L(MSK, 'Congenital disorders', undefined, 'mitochondrial myopathies'),
  mskF: F(MSK, 'Degenerative and metabolic disorders', BMB),

  // Cardiovascular, Respiratory
  hypercholesterolemia: L('Cardiovascular System', 'Dyslipidemia', undefined, 'hypercholesterolemia'),
  hypertriglyceridemia: L('Cardiovascular System', 'Dyslipidemia', undefined, 'hypertriglyceridemia'),
  lpl: L('Cardiovascular System', 'Dyslipidemia', undefined, 'lipoproteins/lipoprotein lipase deficiency'),
  lipidF: F('Cardiovascular System', 'Dyslipidemia', BMB),
  cushion: L('Cardiovascular System', 'Congenital disorders, including disease in adults', undefined, 'endocardial cushion defect'),
  cvHfF: F('Cardiovascular System', 'Heart failure', CELL),
  immotileCilia: L('Respiratory System', 'Congenital disorders', undefined, 'immotile cilia syndrome'),

  // Gastrointestinal
  fap: L(GI, 'Neoplasms', 'malignant neoplasms and pre-malignant conditions', 'familial adenomatous polyposis'),
  mutyh: L(GI, 'Neoplasms', 'malignant neoplasms and pre-malignant conditions', 'MUTYH-associated polyposis'),
  lactose: L(GI, 'Disorders of the stomach, small intestine, colon, rectum, anus', 'small intestine, colon', 'malnutrition and malabsorption, including lactose intolerance'),
  tpnCholestasis: L(GI, LIVER, 'biliary system', 'cholestasis due to parenteral nutrition'),
  alcoholicLiver: L(GI, LIVER, 'liver', 'hepatitis, fatty liver, alcoholic'),
  hepEnceph: L(GI, LIVER, 'liver', 'hepatic coma/hepatic encephalopathy'),
  gilbert: L(GI, LIVER, 'liver', 'Gilbert syndrome, Crigler-Najjar syndrome'),
  liverF: F(GI, LIVER, BMB),

  // Renal
  pkd: L(REN, 'Neoplasms', 'benign neoplasms and cysts', 'polycystic kidney disease'),
  cystinuria: L(REN, 'Metabolic and regulatory disorders', undefined, 'cystinuria'),
  fanconiRenal: L(REN, 'Metabolic and regulatory disorders', undefined, 'Fanconi syndrome'),
  stones: L(REN, 'Metabolic and regulatory disorders', undefined, 'renal calculi, ureteral calculi, nephrolithiasis'),
  alport: L(REN, INF, 'immunologic and inflammatory disorders', 'Alport syndrome'),

  // Pregnancy, newborn
  pkuNewborn: L(PREG, NEWBORN, 'disorders of the newborn', 'phenylketonuria'),
  newbornScreen: L(PREG, NEWBORN, 'normal newborn', 'screening, newborn'),
  neonatalHypoglycemia: L(PREG, NEWBORN, 'disorders of the newborn', 'neonatal hypoglycemia'),
  neonatalJaundice: L(PREG, NEWBORN, 'disorders of the newborn', 'jaundice, fetal/neonatal/perinatal'),
  folatePrevention: L(PREG, 'Prenatal care', 'preconception counseling and care', 'folate deficiency prevention'),
  geneticScreening: L(PREG, 'Prenatal care', 'prenatal risk assessment/prevention', 'genetic screening'),
  afp: L(PREG, 'Prenatal care', 'prenatal risk assessment/prevention', 'α-fetoprotein'),
  vitaminPrevention: L(PREG, 'Prenatal care', 'supervision of normal pregnancy', 'vitamin deficiency prevention'),
  ironPrevention: L(PREG, 'Prenatal care', 'supervision of normal pregnancy', 'iron deficiency prevention'),

  // Reproductive, Endocrine, Behavioral
  klinefelter: L('Male and Transgender Reproductive System', 'Congenital disorders', undefined, 'Klinefelter syndrome'),
  turner: L('Female and Transgender Reproductive System & Breast', 'Female reproductive system', 'Fertility and infertility', 'Turner syndrome'),
  dka: L(EN, DM, 'diabetes mellitus', 'ketoacidosis'),
  metSyndrome: L(EN, DM, 'diabetes mellitus', 'metabolic syndrome'),
  hypoglycemia: L(EN, DM, 'hypoglycemia and islet cell disorders', 'hypoglycemia (secondary to insulinoma, surreptitious insulin use, sepsis, liver failure)'),
  dmF: F(EN, DM, BMB),
  cah: L(EN, 'Congenital disorders', undefined, 'congenital adrenal hyperplasia'),
  congHypothyroid: L(EN, 'Congenital disorders', undefined, 'congenital hypothyroidism'),
  men: L(EN, 'Multiple endocrine neoplasia (MEN1, MEN2)', undefined, 'Multiple endocrine neoplasia (MEN1, MEN2)'),
  boneDisease: L(EN, 'Parathyroid disorders', undefined, 'metabolic bone disease'),
  endoF: F(EN, DM, CELL),
  alcohol: L('Behavioral Health', 'Substance use disorders', undefined, 'alcohol use disorder/intoxication/dependence/withdrawal'),
} satisfies Record<string, OutlineRef>;

/* ------------------------------------------------------------------------------------------------
 * Compact constructors.
 * ---------------------------------------------------------------------------------------------- */

export const R: Depth[] = ['recognition'];
export const M: Depth[] = ['mechanism'];
export const RM: Depth[] = ['recognition', 'mechanism'];
export const RA: Depth[] = ['recognition', 'application'];
export const MA: Depth[] = ['mechanism', 'application'];
export const RMA: Depth[] = ['recognition', 'mechanism', 'application'];

export interface Audit {
  existing?: string[];
  mentions?: string[];
  coverage?: Coverage;
  note?: string;
  home?: SubjectId;
  outline?: OutlineRef[];
}

type Draft = Omit<Objective, 'id'> & { key: string };

function draft(key: string, text: string, depth: Depth[], kind: Objective['kind'], integration: Integration | undefined, a: Audit): Draft {
  return {
    key, text, depth, kind, integration,
    existing: a.existing ?? [], mentions: a.mentions ?? [], coverage: a.coverage ?? 'missing',
    note: a.note, home: a.home, outline: a.outline ?? [],
  };
}

/** A concept objective. */
export const o = (key: string, text: string, depth: Depth[], a: Audit = {}): Draft => draft(key, text, depth, 'concept', undefined, a);

/** A disorder objective: must state the metabolic integration chain. */
export const d = (key: string, text: string, depth: Depth[], integration: Integration, a: Audit = {}): Draft =>
  draft(key, text, depth, 'disorder', integration, a);

/** Integration chain: blocked step → accumulates → decreased → physiology → findings. */
export const ix = (block: string, accumulates: string[], decreased: string[], physiology: string[], findings: string[]): Integration =>
  ({ block, accumulates, decreased, physiology, findings });

/** Cross-link to a later subject that owns part of the knowledge. */
export const x = (subject: SubjectId, owns: string): CrossLink => ({ subject, owns });

export function st(
  id: string,
  title: string,
  priority: 1 | 2 | 3,
  elements: Element[],
  outline: OutlineRef[],
  crossLinks: CrossLink[],
  objectives: Draft[],
  origin: string[] = [id],
): Subtopic {
  return {
    id, title, priority, elements, outline, crossLinks, origin,
    objectives: objectives.map(({ key, ...rest }) => ({ id: `${id}.${key}`, ...rest })),
  };
}
