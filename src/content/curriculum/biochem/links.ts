import type { ChecklistConcept, Coverage, Depth, Element, OutlineLink } from '../types';

/** Outline sections Biochemistry content is tested within (USMLE Content Outline 2026). */
export const O = {
  genetic: { area: 'Multisystem Processes & Disorders', section: 'Genetic, metabolic, and developmental disorders', listed: true },
  geneticF: { area: 'Multisystem Processes & Disorders', section: 'Genetic, metabolic, and developmental disorders', listed: false },
  nutrition: { area: 'Multisystem Processes & Disorders', section: 'Nutrition', listed: true },
  neoplasm: { area: 'Multisystem Processes & Disorders', section: 'Neoplasms and related disorders', listed: false },
  toxins: { area: 'Multisystem Processes & Disorders', section: 'Toxins and environmental extremes', listed: true },
  fluid: { area: 'Multisystem Processes & Disorders', section: 'Fluid, electrolyte, and acid-base balance disorders', listed: false },
  multiDrugs: { area: 'Multisystem Processes & Disorders', section: 'Adverse effects of drugs on multisystem disorders', listed: false },
  infectionF: { area: 'Multisystem Processes & Disorders', section: 'Infectious, immunologic, and inflammatory disorders', listed: false },
  anemia: { area: 'Blood & Lymphoreticular System', section: 'Anemia, cytopenias, and polycythemia', listed: true },
  anemiaF: { area: 'Blood & Lymphoreticular System', section: 'Anemia, cytopenias, and polycythemia', listed: false },
  bloodNeo: { area: 'Blood & Lymphoreticular System', section: 'Neoplasms', listed: false },
  immunodef: { area: 'Immune System', section: 'Disorders associated with immunodeficiency', listed: true },
  newborn: { area: 'Pregnancy, Childbirth, & the Puerperium', section: 'Newborn (birth to 4 weeks of age)', listed: true },
  prenatal: { area: 'Pregnancy, Childbirth, & the Puerperium', section: 'Prenatal care', listed: false },
  lipid: { area: 'Cardiovascular System', section: 'Dyslipidemia', listed: true },
  diabetes: { area: 'Endocrine System', section: 'Diabetes mellitus and other disorders of the endocrine pancreas', listed: false },
  endoCongenital: { area: 'Endocrine System', section: 'Congenital disorders', listed: true },
  movement: { area: 'Nervous System & Special Senses', section: 'Movement disorders', listed: true },
  neuroMetabolic: { area: 'Nervous System & Special Senses', section: 'Metabolic disorders', listed: false },
  neuromuscular: { area: 'Nervous System & Special Senses', section: 'Neuromuscular disorders', listed: true },
  neuroCongenital: { area: 'Nervous System & Special Senses', section: 'Congenital disorders', listed: false },
  mskCongenital: { area: 'Musculoskeletal System', section: 'Congenital disorders', listed: true },
  mskMetabolic: { area: 'Musculoskeletal System', section: 'Degenerative and metabolic disorders', listed: true },
  skin: { area: 'Skin & Subcutaneous Tissue', section: 'Disorders of pigmentation', listed: false },
  skinNeo: { area: 'Skin & Subcutaneous Tissue', section: 'Neoplasms', listed: false },
  liver: { area: 'Gastrointestinal System', section: 'Disorders of the liver and biliary system, noninfectious', listed: false },
  gi: { area: 'Gastrointestinal System', section: 'Disorders of the stomach, small intestine, colon, rectum, anus', listed: false },
  renalMetabolic: { area: 'Renal & Urinary System', section: 'Metabolic and regulatory disorders', listed: false },
  substance: { area: 'Behavioral Health', section: 'Substance use disorders', listed: true },
  reproCongenital: { area: 'Male and Transgender Reproductive System', section: 'Congenital disorders', listed: true },
  respCongenital: { area: 'Respiratory System', section: 'Congenital disorders', listed: false },
} satisfies Record<string, OutlineLink>;

/** Compact constructor for checklist concepts. */
export function c(
  id: string,
  title: string,
  depth: Depth,
  priority: 1 | 2 | 3,
  outline: OutlineLink[],
  elements: Element[],
  must: string[],
  audit: { existing?: string[]; coverage?: Coverage; gap?: string } = {},
): ChecklistConcept {
  return { id, title, depth, priority, outline, elements, must, existing: audit.existing ?? [], coverage: audit.coverage ?? 'missing', gap: audit.gap };
}
