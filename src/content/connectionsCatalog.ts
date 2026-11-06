/**
 * Medically plausible alternative groupings a learner might see on a Connections board, beyond the
 * puzzle's own categories. Every puzzle — curated or built by the daily category builder — must have
 * exactly one solution when checked against ALL bank categories, all curated categories and decoys,
 * and this catalog. Extend it whenever new tiles enter the bank.
 */
import type { GameItem } from './schema';

export interface Category {
  label: string;
  members: string[];
}

export const PLAUSIBLE_CATEGORIES: Category[] = [
  { label: 'Autosomal recessive disorders', members: ['Xeroderma pigmentosum', 'Fanconi anemia', 'Bloom syndrome', 'MUTYH polyposis', 'Gaucher', 'Tay-Sachs', 'Krabbe', 'Niemann–Pick', 'Hurler', 'Friedreich ataxia'] },
  { label: 'Autosomal dominant disorders', members: ['Lynch syndrome', 'Marfan syndrome', 'Vascular Ehlers–Danlos syndrome', 'Huntington disease', 'Myotonic dystrophy', 'Osteogenesis imperfecta'] },
  { label: 'X-linked disorders (broad)', members: ['Fabry', 'Menkes disease', 'Alport syndrome', 'Fragile X syndrome', 'Duchenne', 'G6PD deficiency', 'Hemophilia A', 'Bruton agammaglobulinemia', 'Lesch–Nyhan', 'OTC deficiency'] },
  { label: 'Inherited cancer predisposition', members: ['Xeroderma pigmentosum', 'Lynch syndrome', 'Fanconi anemia', 'Bloom syndrome', 'MUTYH polyposis'] },
  { label: 'Kidney diseases', members: ['Alport syndrome', 'Goodpasture', 'Post-streptococcal GN', 'IgA nephropathy', 'Lupus nephritis', 'Minimal change disease', 'Membranous nephropathy', 'FSGS', 'Renal amyloidosis', 'Diabetic nephropathy', 'Granulomatosis with polyangiitis', 'Fabry'] },
  { label: 'Autoimmune diseases', members: ['Goodpasture', 'Graves disease', 'Myasthenia gravis', 'Pemphigus vulgaris', 'Multiple sclerosis', 'Lupus nephritis', 'Acute rheumatic fever', 'Autoimmune hemolytic anemia', 'Polyarteritis nodosa', 'Granulomatosis with polyangiitis'] },
  { label: 'Hemolytic anemias', members: ['G6PD deficiency', 'Autoimmune hemolytic anemia'] },
  { label: 'Neurologic or neuromuscular disorders', members: ['Huntington disease', 'Myotonic dystrophy', 'Friedreich ataxia', 'Duchenne', 'Myasthenia gravis', 'Multiple sclerosis', 'Krabbe', 'Tay-Sachs', 'Lesch–Nyhan', 'Menkes disease', 'Fragile X syndrome', 'Angelman syndrome', 'Prader–Willi syndrome'] },
  { label: 'Immunosuppressive or antiproliferative drugs', members: ['Methotrexate', 'Leflunomide', 'Mycophenolate', 'Hydroxyurea', '5-Fluorouracil'] },
  { label: 'Aminoglycosides', members: ['Gentamicin', 'Tobramycin', 'Streptomycin'] },
  { label: 'Tetracyclines', members: ['Doxycycline', 'Tetracycline'] },
  { label: 'Macrolides', members: ['Azithromycin', 'Erythromycin'] },
  { label: 'β-Lactams', members: ['Penicillin G', 'Cefazolin', 'Meropenem'] },
  { label: 'Antibiotics (any)', members: ['Penicillin G', 'Vancomycin', 'Cefazolin', 'Meropenem', 'Bacitracin', 'Fosfomycin', 'Gentamicin', 'Tobramycin', 'Streptomycin', 'Doxycycline', 'Tetracycline', 'Azithromycin', 'Erythromycin', 'Clindamycin', 'Linezolid', 'Chloramphenicol', 'Rifampin', 'Ciprofloxacin', 'Levofloxacin', 'Dactinomycin'] },
  { label: 'Gram-negative organisms', members: ['Haemophilus influenzae b', 'Neisseria meningitidis', 'Klebsiella pneumoniae', 'Serratia', 'Burkholderia cepacia'] },
  { label: 'Gram-positive organisms', members: ['Streptococcus pneumoniae', 'Group B streptococcus', 'Staphylococcus aureus', 'Nocardia'] },
  { label: 'Fungi', members: ['Aspergillus', 'Candida'] },
  { label: 'Bacterial toxins', members: ['Diphtheria toxin', 'Pseudomonas exotoxin A', 'Cholera toxin', 'Pertussis toxin', 'E. coli heat-labile toxin', 'Shiga toxin'] },
  { label: 'Toxins of any origin', members: ['Diphtheria toxin', 'Pseudomonas exotoxin A', 'Cholera toxin', 'Pertussis toxin', 'E. coli heat-labile toxin', 'Shiga toxin', 'Ricin', 'α-Amanitin'] },
  { label: 'Cancer chemotherapy drugs', members: ['Methotrexate', '5-Fluorouracil', 'Hydroxyurea', 'Etoposide', 'Teniposide', 'Irinotecan', 'Topotecan', 'Dactinomycin'] },
  { label: 'Plant-derived compounds', members: ['Ricin', 'Etoposide', 'Teniposide', 'Irinotecan', 'Topotecan'] },
  { label: 'Fluoroquinolones', members: ['Ciprofloxacin', 'Levofloxacin'] },
  { label: 'Chromosome 15 imprinting disorders', members: ['Prader–Willi syndrome', 'Angelman syndrome', 'Uniparental disomy'] },
  { label: 'Coagulation-related', members: ['Factor II', 'Factor VII', 'Factor IX', 'Factor X', 'Protein C', 'Protein S', 'Hemophilia A', 'Protamine'] },
  { label: 'Toxic ingestions', members: ['Methanol', 'Ethylene glycol', 'Salicylate poisoning'] },
  { label: 'Antiarrhythmic drugs', members: ['Sotalol', 'Metoprolol', 'Propranolol', 'Atenolol'] },
  { label: 'Trinucleotide or repeat-expansion disorders', members: ['Huntington disease', 'Fragile X syndrome', 'Myotonic dystrophy', 'Friedreich ataxia'] },
  { label: 'Dehydrogenase complexes', members: ['Pyruvate dehydrogenase', 'α-Ketoglutarate dehydrogenase', 'Branched-chain α-keto acid dehydrogenase'] },
  { label: 'Immune complex–mediated kidney disease', members: ['Post-streptococcal GN', 'Lupus nephritis', 'IgA nephropathy'] },
  { label: 'Hypersensitivity reactions (any type)', members: ['Goodpasture', 'Graves disease', 'Myasthenia gravis', 'Pemphigus vulgaris', 'Acute rheumatic fever', 'Autoimmune hemolytic anemia', 'Serum sickness', 'Arthus reaction', 'Post-streptococcal GN', 'Lupus nephritis', 'Polyarteritis nodosa', 'Contact dermatitis', 'Tuberculin skin test', 'Graft-versus-host disease', 'Multiple sclerosis'] },
];

/** Every category a learner could reasonably use on a board built from this content. */
export function globalCategories(items: GameItem[]): Category[] {
  const out: Category[] = [...PLAUSIBLE_CATEGORIES];
  for (const i of items) {
    if (i.kind === 'group') out.push({ label: i.label, members: i.members });
    if (i.kind === 'connections') {
      for (const g of i.groups) out.push({ label: g.label, members: g.accepts });
      for (const d of i.decoys) out.push({ label: d.label, members: d.accepts });
    }
  }
  return out;
}
