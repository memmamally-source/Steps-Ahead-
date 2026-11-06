import type { Subject } from './types';
import { molecular } from './biochem/molecular';
import { cellular } from './biochem/cellular';
import { laboratory } from './biochem/laboratory';
import { genetics } from './biochem/genetics';
import { nutrition } from './biochem/nutrition';
import { metabolism } from './biochem/metabolism';

/**
 * Biochemistry coverage checklist (subject 1 of the development order).
 * Status stays 'architecture' until the owner approves the checklist and audit.
 */
export const BIOCHEMISTRY: Subject = {
  id: 'biochemistry',
  title: 'Biochemistry',
  status: 'architecture',
  subdivisions: [molecular, cellular, laboratory, genetics, nutrition, metabolism],
};

/** The 71 checklist concepts of the first version (commit 1466eb3), kept for traceability. */
export const BIOCHEMISTRY_V1_IDS = [
  'bc-chromatin-structure', 'bc-nucleotide-synthesis', 'bc-purine-salvage', 'bc-replication', 'bc-mutation-types', 'bc-dna-repair',
  'bc-transcription', 'bc-rna-processing', 'bc-translation', 'bc-protein-processing', 'bc-collagen', 'bc-cell-cycle', 'bc-er-golgi',
  'bc-peroxisome-proteasome', 'bc-cytoskeleton', 'bc-intermediate-filaments', 'bc-membrane-pumps', 'bc-pcr-sequencing', 'bc-blotting',
  'bc-elisa-flow', 'bc-karyotype-fish', 'bc-gene-editing', 'bc-gen-terms', 'bc-imprinting', 'bc-hardy-weinberg', 'bc-ad-inheritance',
  'bc-ar-inheritance', 'bc-xlinked-inheritance', 'bc-mito-inheritance', 'bc-ad-diseases', 'bc-ar-diseases', 'bc-cystic-fibrosis',
  'bc-x-linked-diseases', 'bc-muscular-dystrophy', 'bc-trinucleotide', 'bc-autosomal-trisomies', 'bc-sex-chromosome',
  'bc-structural-chromosome', 'bc-vit-a', 'bc-vit-d', 'bc-vit-e', 'bc-vit-k', 'bc-vit-b1', 'bc-vit-b2-b3', 'bc-vit-b5-b6-b7',
  'bc-folate-b12', 'bc-vit-c', 'bc-zinc-trace', 'bc-malnutrition', 'bc-ethanol-metabolism', 'bc-rate-limiting', 'bc-atp-cofactors',
  'bc-glycolysis', 'bc-pdh', 'bc-tca', 'bc-etc', 'bc-gluconeogenesis', 'bc-hmp-shunt', 'bc-fructose-galactose', 'bc-sorbitol-lactose',
  'bc-glycogen', 'bc-urea-cycle', 'bc-aa-derivatives', 'bc-phenylketonuria', 'bc-other-aa-disorders', 'bc-fatty-acid', 'bc-ketones',
  'bc-fed-fasting', 'bc-cholesterol', 'bc-lipoproteins', 'bc-lysosomal-storage',
] as const;
