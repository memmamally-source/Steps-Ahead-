import type { DisciplineId, SystemId, Topic } from './schema';

/**
 * Step 1 blueprint, verified on 6 Nov 2026 against the official USMLE page
 * (Step 1 Content Outline and Specifications) and the USMLE Content Outline PDF (2026 edition).
 * Ranges are percentages of Step 1 items. They weight coverage only; the app never predicts scores.
 */
export interface Weighted {
  title: string;
  short: string;
  range: [number, number] | null;
  /** Official Step 1 group when the range is shared by several of our systems. */
  group?: string;
}

export const BLUEPRINT_VERIFIED = true;
export const BLUEPRINT_SOURCE = {
  page: 'https://www.usmle.org/exam-resources/step-1-materials/step-1-content-outline-and-specifications',
  outline: 'https://www.usmle.org/sites/default/files/2022-01/USMLE_Content_Outline_0.pdf',
  checked: '2026-11-06',
  edition: 'USMLE Content Outline (2026)',
};

/** Official Step 1 discipline ranges (items are multi-classified, so totals exceed 100%). */
export const DISCIPLINES: Record<DisciplineId, Weighted> = {
  pathology: { title: 'Pathology', short: 'Path', range: [45, 55] },
  physiology: { title: 'Physiology', short: 'Phys', range: [30, 40] },
  nutrition: { title: 'Nutrition', short: 'Nutr', range: [15, 20] },
  anatomy: { title: 'Gross anatomy', short: 'Anat', range: [10, 20], group: 'Gross Anatomy & Embryology' },
  embryology: { title: 'Embryology', short: 'Embryo', range: [10, 20], group: 'Gross Anatomy & Embryology' },
  microbiology: { title: 'Microbiology', short: 'Micro', range: [10, 20] },
  pharmacology: { title: 'Pharmacology', short: 'Pharm', range: [10, 20] },
  behavioral: { title: 'Behavioural sciences', short: 'Behav', range: [10, 15] },
  biochemistry: { title: 'Biochemistry', short: 'Biochem', range: [5, 15] },
  histology: { title: 'Histology', short: 'Histo', range: [5, 15], group: 'Histology & Cell Biology' },
  'cell-biology': { title: 'Cell biology', short: 'Cell', range: [5, 15], group: 'Histology & Cell Biology' },
  immunology: { title: 'Immunology', short: 'Immuno', range: [5, 15] },
  genetics: { title: 'Genetics', short: 'Genetics', range: [5, 10] },
  // Not separate Step 1 disciplines; their items are classified under the systems below.
  biostatistics: { title: 'Biostatistics & epidemiology', short: 'Biostats', range: null },
  ethics: { title: 'Ethics & communication', short: 'Ethics', range: null },
};

/** Official Step 1 system ranges. Some official groups span two of our systems (see `group`). */
export const SYSTEMS: Record<SystemId, Weighted> = {
  'human-development': { title: 'Human development', short: 'Development', range: [1, 3] },
  'blood-immune': { title: 'Blood, lymphoreticular & immune', short: 'Heme/Immune', range: [9, 13] },
  'nervous-behavioral': { title: 'Behavioural health, nervous system & special senses', short: 'Neuro/Psych', range: [10, 14] },
  'musculoskeletal-skin': { title: 'Musculoskeletal, skin & subcutaneous', short: 'MSK/Skin', range: [8, 12] },
  cardiovascular: { title: 'Cardiovascular', short: 'Cardio', range: [7, 11] },
  respiratory: { title: 'Respiratory', short: 'Resp', range: [11, 15], group: 'Respiratory & Renal/Urinary' },
  renal: { title: 'Renal & urinary', short: 'Renal', range: [11, 15], group: 'Respiratory & Renal/Urinary' },
  gastrointestinal: { title: 'Gastrointestinal', short: 'GI', range: [6, 10] },
  reproductive: { title: 'Reproductive (incl. pregnancy)', short: 'Repro', range: [12, 16], group: 'Reproductive & Endocrine' },
  endocrine: { title: 'Endocrine', short: 'Endo', range: [12, 16], group: 'Reproductive & Endocrine' },
  multisystem: { title: 'Multisystem processes', short: 'Multisystem', range: [8, 12] },
  'biostats-epi': { title: 'Biostatistics & epidemiology', short: 'Biostats', range: [4, 6] },
  'social-sciences': { title: 'Social sciences: communication', short: 'Social', range: [6, 9] },
};

/** Official Step 1 competency ranges (Physician Tasks/Competencies). */
export const COMPETENCIES: { title: string; range: [number, number] }[] = [
  { title: 'Medical knowledge: applying foundational science concepts', range: [60, 70] },
  { title: 'Patient care: diagnosis (history, examination, diagnosis)', range: [20, 25] },
  { title: 'Communication and interpersonal skills', range: [6, 9] },
  { title: 'Practice-based learning and improvement', range: [4, 6] },
];

/** Level-3 topics. Concepts point at one of these. Add freely; ids are permanent once used. */
export const TOPICS: Topic[] = [
  // Cardiovascular
  { id: 'cv-antiarrhythmics', title: 'Antiarrhythmics', system: 'cardiovascular', discipline: 'pharmacology' },
  { id: 'cv-antihypertensives', title: 'Antihypertensives & heart failure drugs', system: 'cardiovascular', discipline: 'pharmacology' },
  { id: 'cv-physiology', title: 'Cardiac physiology', system: 'cardiovascular', discipline: 'physiology' },
  { id: 'cv-pathology', title: 'Cardiovascular pathology', system: 'cardiovascular', discipline: 'pathology' },
  // Renal
  { id: 'renal-glomerular', title: 'Glomerular diseases', system: 'renal', discipline: 'pathology' },
  { id: 'renal-acid-base', title: 'Acid–base physiology', system: 'renal', discipline: 'physiology' },
  { id: 'renal-diuretics', title: 'Diuretics', system: 'renal', discipline: 'pharmacology' },
  { id: 'renal-raas', title: 'Renin–angiotensin–aldosterone system', system: 'renal', discipline: 'physiology' },
  // Respiratory
  { id: 'resp-physiology', title: 'Respiratory physiology', system: 'respiratory', discipline: 'physiology' },
  { id: 'resp-pathology', title: 'Respiratory pathology', system: 'respiratory', discipline: 'pathology' },
  // Blood & immune
  { id: 'heme-anemias', title: 'Anemias & hemolysis', system: 'blood-immune', discipline: 'pathology' },
  { id: 'heme-coagulation', title: 'Coagulation & anticoagulants', system: 'blood-immune', discipline: 'pharmacology' },
  { id: 'immuno-hypersensitivity', title: 'Hypersensitivity reactions', system: 'blood-immune', discipline: 'immunology' },
  { id: 'immuno-immunodeficiency', title: 'Immunodeficiencies', system: 'blood-immune', discipline: 'immunology' },
  // Biochemistry / genetics
  { id: 'biochem-metabolism', title: 'Metabolic pathways', system: 'endocrine', discipline: 'biochemistry' },
  { id: 'biochem-inborn-errors', title: 'Inborn errors of metabolism', system: 'multisystem', discipline: 'biochemistry' },
  { id: 'biochem-lysosomal', title: 'Lysosomal storage disorders', system: 'multisystem', discipline: 'biochemistry' },
  { id: 'biochem-vitamins', title: 'Vitamins & nutrition', system: 'gastrointestinal', discipline: 'nutrition' },
  { id: 'genetics-inheritance', title: 'Inheritance patterns', system: 'multisystem', discipline: 'genetics' },
  { id: 'genetics-trinucleotide', title: 'Trinucleotide repeat disorders', system: 'nervous-behavioral', discipline: 'genetics' },
  // Microbiology
  { id: 'micro-gram-positive', title: 'Gram-positive bacteria', system: 'multisystem', discipline: 'microbiology' },
  { id: 'micro-gram-negative', title: 'Gram-negative bacteria', system: 'multisystem', discipline: 'microbiology' },
  { id: 'micro-antibiotics', title: 'Antibiotic mechanisms', system: 'multisystem', discipline: 'pharmacology' },
  { id: 'micro-viruses', title: 'Viruses', system: 'multisystem', discipline: 'microbiology' },
  { id: 'micro-atypical', title: 'Spirochetes, mycobacteria and atypicals', system: 'multisystem', discipline: 'microbiology' },
  // Pharmacology – autonomic, general
  { id: 'pharm-autonomic', title: 'Autonomic pharmacology', system: 'multisystem', discipline: 'pharmacology' },
  { id: 'pharm-toxicology', title: 'Toxicology & antidotes', system: 'multisystem', discipline: 'pharmacology' },
  // Endocrine
  { id: 'endo-thyroid', title: 'Thyroid', system: 'endocrine', discipline: 'physiology' },
  { id: 'endo-adrenal', title: 'Adrenal & steroid synthesis', system: 'endocrine', discipline: 'biochemistry' },
  { id: 'endo-diabetes', title: 'Diabetes & its drugs', system: 'endocrine', discipline: 'pharmacology' },
  // Neuro / GI / MSK
  { id: 'neuro-pathology', title: 'Neuropathology', system: 'nervous-behavioral', discipline: 'pathology' },
  { id: 'gi-pathology', title: 'GI & hepatobiliary pathology', system: 'gastrointestinal', discipline: 'pathology' },
  { id: 'msk-pathology', title: 'Musculoskeletal & connective tissue', system: 'musculoskeletal-skin', discipline: 'pathology' },
  // Biostatistics
  { id: 'biostats-tests', title: 'Diagnostic test statistics', system: 'biostats-epi', discipline: 'biostatistics' },
  { id: 'biostats-risk', title: 'Measures of risk & NNT', system: 'biostats-epi', discipline: 'biostatistics' },
  { id: 'biostats-studies', title: 'Study design & bias', system: 'biostats-epi', discipline: 'biostatistics' },
];

const topicIndex = new Map(TOPICS.map((t) => [t.id, t]));

export function getTopic(id: string): Topic | undefined {
  return topicIndex.get(id);
}
