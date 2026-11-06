import type { Subdivision } from '../types';
import { OL, R, RM, RA, RMA, o, st, x } from './links';

export const laboratory: Subdivision = {
  id: 'bc-laboratory',
  title: 'Laboratory techniques',
  scope:
    'How common molecular, cytogenetic and immunologic tests work and which one answers a given clinical question. Step 1 asks students to choose or interpret a technique (including reading a gel, blot or flow cytometry plot), not to perform it.',
  topics: [
    {
      id: 'bc-lab-nucleic',
      title: 'Nucleic acid, protein and cell-based techniques',
      subtopics: [
        st('bc-pcr-sequencing', 'PCR, RT-PCR and sequencing', 2, ['mechanism', 'labs'], [OL.genF, OL.infF], [x('microbiology', 'viral load and pathogen detection')], [
          o('pcr', 'Describe PCR (denaturation, primer annealing, extension by heat-stable polymerase) and gel electrophoresis of the products.', RM),
          o('rt-pcr', 'Distinguish RT-PCR (RNA → cDNA first; viral load, gene expression) and quantitative PCR from standard PCR.', RA),
          o('interpret', 'Interpret an electrophoresis result to detect a deletion, a repeat expansion or the presence of a pathogen.', ['application']),
          o('sequencing', 'Recognize Sanger and next-generation sequencing and their uses (point mutations, gene panels, exome).', R),
        ]),
        st('bc-blotting', 'Blotting techniques', 2, ['mechanism', 'labs'], [OL.genF], [x('microbiology', 'confirmatory serology')], [
          o('choose', 'Choose Southern (DNA), Northern (RNA), Western (protein) or Southwestern (DNA-binding protein) blotting for a given question.', RA),
          o('western', 'Interpret a Western blot as a confirmatory test (e.g. absent dystrophin, antibody bands).', ['application']),
        ]),
        st('bc-elisa-flow', 'ELISA, flow cytometry and microarrays', 2, ['mechanism', 'labs'], [OL.infF, OL.immF], [x('immunology', 'lymphocyte subsets'), x('hematology-oncology', 'leukemia/lymphoma immunophenotyping, PNH')], [
          o('elisa', 'Explain direct and indirect ELISA for detecting antigen or antibody and why ELISA is used for screening.', RMA),
          o('flow', 'Interpret flow cytometry histograms and dot plots (CD4 counts, leukemia and lymphoma immunophenotyping, PNH with absent CD55/CD59).', RA),
          o('microarray', 'Recognize microarrays for detecting thousands of sequences at once (SNPs, copy number variants, gene expression).', R),
        ]),
        st('bc-karyotype-fish', 'Karyotyping, FISH and chromosomal microarray', 2, ['genetics', 'labs'], [OL.genF], [x('reproductive', 'prenatal diagnosis')], [
          o('karyotype', 'Explain karyotyping (metaphase arrest, banding) and what it detects (aneuploidy, large deletions, translocations).', RA, { outline: [OL.geneticScreening] }),
          o('fish', 'Explain FISH and its use for microdeletions (22q11.2), specific translocations and interphase nuclei.', RA, { outline: [OL.digeorge] }),
          o('choose', 'Choose karyotype, FISH, chromosomal microarray or targeted sequencing for a given clinical question.', ['application'], { outline: [OL.geneticScreening] }),
        ]),
        st('bc-gene-editing', 'Cloning, gene editing and RNA interference', 1, ['mechanism'], [OL.genF], [], [
          o('cloning', 'Recognize cloning (cDNA from mRNA by reverse transcriptase, inserted into a vector).', R),
          o('crispr', 'Recognize CRISPR/Cas9 genome editing, RNA interference, knock-out, knock-in and transgenic models, and Cre-lox conditional systems.', R),
        ]),
      ],
    },
  ],
};
