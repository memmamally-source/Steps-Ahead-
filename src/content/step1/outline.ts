import type { OutlineRef } from '../schema';

/**
 * Each Step 1 concept mapped to the official USMLE Content Outline (2026 edition), checked on
 * 6 Nov 2026. Only area and section headings are recorded (cite-only source; no outline text is
 * reproduced). `listed: false` marks foundational science the outline distributes across systems.
 */
const L = (area: OutlineRef['area'], section: string): OutlineRef => ({ area, section, listed: true });
const F = (area: OutlineRef['area'], section: string): OutlineRef => ({ area, section, listed: false });

export const STEP1_OUTLINE: Record<string, OutlineRef> = {
  // Cardiovascular
  'acei-bradykinin': L('Cardiovascular System', 'Adverse effects of drugs on the cardiovascular system'),
  'class3-qt': L('Cardiovascular System', 'Dysrhythmias'),
  'class1c-flecainide': F('Cardiovascular System', 'Dysrhythmias'),
  digoxin: F('Cardiovascular System', 'Heart failure'),
  'frank-starling': F('Cardiovascular System', 'Heart failure'),
  'cardiac-ap': F('Cardiovascular System', 'Dysrhythmias'),
  // Renal
  'minimal-change': L('Renal & Urinary System', 'Infectious, immunologic, and inflammatory disorders'),
  psgn: L('Renal & Urinary System', 'Infectious, immunologic, and inflammatory disorders'),
  'raas-cascade': F('Renal & Urinary System', 'Metabolic and regulatory disorders'),
  'loop-diuretics': L('Renal & Urinary System', 'Adverse effects of drugs on the renal and urinary system'),
  'anion-gap': L('Multisystem Processes & Disorders', 'Fluid, electrolyte, and acid-base balance disorders'),
  // Blood and immune
  g6pd: L('Blood & Lymphoreticular System', 'Anemia, cytopenias, and polycythemia'),
  'hereditary-spherocytosis': L('Blood & Lymphoreticular System', 'Anemia, cytopenias, and polycythemia'),
  warfarin: L('Blood & Lymphoreticular System', 'Adverse effects of drugs on the hematologic and lymphoreticular systems'),
  heparin: L('Blood & Lymphoreticular System', 'Coagulation disorders'),
  hypersensitivity: L('Immune System', 'Immunologically mediated disorders'),
  bruton: L('Immune System', 'Disorders associated with immunodeficiency'),
  // Respiratory and newborn
  surfactant: L('Pregnancy, Childbirth, & the Puerperium', 'Newborn (birth to 4 weeks of age)'),
  'alpha1-antitrypsin': L('Multisystem Processes & Disorders', 'Genetic, metabolic, and developmental disorders'),
  pseudomonas: L('Respiratory System', 'Infectious, immunologic, and inflammatory disorders'),
  'strep-pneumoniae': L('Respiratory System', 'Infectious, immunologic, and inflammatory disorders'),
  // Biochemistry, genetics, nutrition
  pfk1: F('Endocrine System', 'Diabetes mellitus and other disorders of the endocrine pancreas'),
  pku: L('Pregnancy, Childbirth, & the Puerperium', 'Newborn (birth to 4 weeks of age)'),
  'otc-deficiency': L('Multisystem Processes & Disorders', 'Genetic, metabolic, and developmental disorders'),
  gaucher: L('Multisystem Processes & Disorders', 'Genetic, metabolic, and developmental disorders'),
  'tay-sachs': L('Multisystem Processes & Disorders', 'Genetic, metabolic, and developmental disorders'),
  fabry: L('Multisystem Processes & Disorders', 'Genetic, metabolic, and developmental disorders'),
  huntington: L('Nervous System & Special Senses', 'Movement disorders'),
  thiamine: L('Multisystem Processes & Disorders', 'Nutrition'),
  'x-linked-recessive': F('Multisystem Processes & Disorders', 'Genetic, metabolic, and developmental disorders'),
  // Microbiology and pharmacology
  'staph-aureus': L('Skin & Subcutaneous Tissue', 'Infectious, immunologic, and inflammatory disorders'),
  'beta-lactams': F('Multisystem Processes & Disorders', 'Infectious, immunologic, and inflammatory disorders'),
  organophosphate: L('Multisystem Processes & Disorders', 'Toxins and environmental extremes'),
  acetaminophen: L('Multisystem Processes & Disorders', 'Toxins and environmental extremes'),
  // Microbiology group concepts (bacteria knowledge table)
  'micro-staph-strep': L('Nervous System & Special Senses', 'Infectious, immunologic, and inflammatory disorders'),
  'micro-gp-rods': L('Nervous System & Special Senses', 'Infectious, immunologic, and inflammatory disorders'),
  'micro-gram-negative': L('Gastrointestinal System', 'Infectious, immunologic, and inflammatory disorders'),
  'micro-atypical': L('Nervous System & Special Senses', 'Infectious, immunologic, and inflammatory disorders'),
  'micro-dna-viruses': L('Multisystem Processes & Disorders', 'Infectious, immunologic, and inflammatory disorders'),
  'micro-rna-viruses': L('Multisystem Processes & Disorders', 'Infectious, immunologic, and inflammatory disorders'),
  'gn-nephrotic': L('Renal & Urinary System', 'Infectious, immunologic, and inflammatory disorders'),
  'gn-nephritic': L('Renal & Urinary System', 'Infectious, immunologic, and inflammatory disorders'),
  'biostats-lr': L('Biostatistics, Epidemiology/Population Health, & Interpretation of the Medical Literature', 'Principles of testing and screening'),
  'biostats-or-rr': L('Biostatistics, Epidemiology/Population Health, & Interpretation of the Medical Literature', 'Measures of association'),
  'biostats-normal': L('Biostatistics, Epidemiology/Population Health, & Interpretation of the Medical Literature', 'Distributions of data'),
  'micro-fungi': L('Respiratory System', 'Infectious, immunologic, and inflammatory disorders'),
  'micro-parasites': L('Gastrointestinal System', 'Infectious, immunologic, and inflammatory disorders'),
  // Nervous system and behavioral health
  'intracranial-hemorrhage': L('Nervous System & Special Senses', 'Traumatic and mechanical disorders and disorders of increased intracranial pressure'),
  'upper-lower-motor-neuron': L('Nervous System & Special Senses', 'Neuromuscular disorders'),
  'brown-sequard': F('Nervous System & Special Senses', 'Disorders relating to the spine, spinal cord, and spinal nerve roots'),
  parkinson: L('Nervous System & Special Senses', 'Movement disorders'),
  'myasthenia-gravis': L('Nervous System & Special Senses', 'Infectious, immunologic, and inflammatory disorders'),
  'multiple-sclerosis': L('Nervous System & Special Senses', 'Infectious, immunologic, and inflammatory disorders'),
  alzheimer: L('Nervous System & Special Senses', 'Degenerative disorders/amnestic syndromes'),
  antidepressants: L('Nervous System & Special Senses', 'Adverse effects of drugs on the nervous system'),
  antipsychotics: L('Behavioral Health', 'Psychotic disorders'),
  opioids: L('Behavioral Health', 'Substance use disorders'),
  'defense-mechanisms': F('Behavioral Health', 'Psychosocial disorders/behaviors'),
  'sleep-stages': L('Nervous System & Special Senses', 'Sleep disorders'),
  'oculomotor-palsy': F('Nervous System & Special Senses', 'Cranial and peripheral nerve disorders'),
  aphasia: F('Nervous System & Special Senses', 'Cerebrovascular disease'),
  // Endocrine
  'thyroid-synthesis': L('Endocrine System', 'Thyroid disorders'),
  'cah-21': L('Endocrine System', 'Congenital disorders'),
  metformin: F('Endocrine System', 'Diabetes mellitus and other disorders of the endocrine pancreas'),
  // Biostatistics
  'sens-spec': L('Biostatistics, Epidemiology/Population Health, & Interpretation of the Medical Literature', 'Principles of testing and screening'),
  'ppv-prevalence': L('Biostatistics, Epidemiology/Population Health, & Interpretation of the Medical Literature', 'Principles of testing and screening'),
  nnt: L('Biostatistics, Epidemiology/Population Health, & Interpretation of the Medical Literature', 'Measures of association'),
};
