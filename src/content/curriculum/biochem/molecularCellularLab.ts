import type { Subdivision } from '../types';
import { O, c } from './links';

export const molecular: Subdivision = {
  id: 'bc-molecular',
  title: 'Molecular biochemistry',
  scope:
    'DNA and RNA structure, nucleotide synthesis and salvage, replication, repair, transcription, RNA processing, translation and protein modification. Step 1 tests the molecular step that fails in a disease or that a drug blocks, not memorized enzyme lists for their own sake.',
  topics: [
    {
      id: 'bc-chromatin',
      title: 'Chromatin and nucleotides',
      concepts: [
        c('bc-chromatin-structure', 'Chromatin structure and epigenetic regulation', 'understand', 2, [O.geneticF], ['mechanism'], [
          'Nucleosome: DNA wrapped around an octamer of histones (H2A, H2B, H3, H4) with H1 linking; heterochromatin condensed and inactive, euchromatin open and active.',
          'DNA methylation (CpG islands) silences transcription; histone acetylation relaxes chromatin and activates, deacetylation silences.',
          'Links to imprinting, X-inactivation and fragile X (methylation of the expanded repeat).',
        ]),
        c('bc-nucleotide-synthesis', 'De novo purine and pyrimidine synthesis', 'understand', 3, [O.anemiaF, O.multiDrugs], ['enzyme-pathway', 'pharmacology', 'disease'], [
          'Purines built on ribose-5-phosphate (PRPP); pyrimidines made as a ring (orotate) then attached to PRPP.',
          'Ribonucleotide reductase makes deoxyribonucleotides; thymidylate synthase makes dTMP using folate.',
          'Drugs by step: methotrexate and trimethoprim (dihydrofolate reductase), 5-fluorouracil (thymidylate synthase), hydroxyurea (ribonucleotide reductase), leflunomide (dihydroorotate dehydrogenase), mycophenolate (IMP dehydrogenase), 6-mercaptopurine (purine synthesis).',
          'Hereditary orotic aciduria (UMP synthase): megaloblastic anemia not corrected by B12 or folate, no hyperammonemia.',
        ], { existing: ['otc-deficiency'], coverage: 'partial', gap: 'Only orotic aciduria vs OTC is covered; the pathway and drug targets are absent.' }),
        c('bc-purine-salvage', 'Purine salvage and its deficiencies', 'apply', 3, [O.immunodef, O.mskMetabolic], ['enzyme-pathway', 'disease', 'genetics', 'presentation'], [
          'HGPRT salvages hypoxanthine and guanine; Lesch–Nyhan syndrome (X-linked HGPRT deficiency): hyperuricemia, gout, intellectual disability, self-mutilation, dystonia.',
          'Adenosine deaminase deficiency: toxic dATP accumulation inhibits ribonucleotide reductase → lymphocyte death → SCID (autosomal recessive).',
          'Xanthine oxidase converts hypoxanthine → xanthine → uric acid (allopurinol, febuxostat).',
        ], { existing: ['gout'], coverage: 'partial', gap: 'Lesch–Nyhan appears only as a sentence inside the gout concept; ADA deficiency SCID is missing.' }),
      ],
    },
    {
      id: 'bc-dna',
      title: 'DNA replication, mutation and repair',
      concepts: [
        c('bc-replication', 'DNA replication enzymes', 'understand', 2, [O.geneticF, O.multiDrugs], ['enzyme-pathway', 'pharmacology'], [
          'Helicase, single-strand binding protein, topoisomerases (I nicks one strand, II both strands), primase, DNA polymerases (III and I in prokaryotes; δ and ε in eukaryotes), ligase.',
          'Leading vs lagging strand and Okazaki fragments; 5′→3′ synthesis with 3′→5′ proofreading exonuclease.',
          'Drug targets: fluoroquinolones (bacterial topoisomerase II/IV), etoposide (human topoisomerase II), irinotecan and topotecan (topoisomerase I).',
          'Telomerase (an RNA-dependent DNA polymerase) maintains telomeres; active in stem and cancer cells.',
        ]),
        c('bc-mutation-types', 'Types of mutation', 'apply', 3, [O.geneticF], ['genetics', 'mechanism'], [
          'Silent, missense (e.g. sickle cell Glu→Val), nonsense (premature stop), frameshift (insertions or deletions not divisible by 3) and splice-site mutations.',
          'Frameshift vs in-frame deletions explains Duchenne vs Becker muscular dystrophy.',
          'Transition vs transversion; severity generally nonsense > missense > silent.',
        ], { existing: ['duchenne'], coverage: 'partial', gap: 'Covered only through Duchenne vs Becker; no general mutation-type concept or items.' }),
        c('bc-dna-repair', 'DNA repair pathways and their defects', 'apply', 3, [O.neoplasm, O.skinNeo], ['mechanism', 'disease', 'genetics'], [
          'Nucleotide excision repair (bulky lesions, pyrimidine dimers): xeroderma pigmentosum.',
          'Base excision repair (deaminated or oxidized bases).',
          'Mismatch repair: Lynch syndrome (hereditary nonpolyposis colorectal cancer; microsatellite instability).',
          'Homologous recombination (BRCA1/BRCA2) and nonhomologous end joining (ataxia–telangiectasia, Fanconi anemia pathways) for double-strand breaks.',
        ], { existing: ['skin-cancer'], coverage: 'partial', gap: 'Xeroderma pigmentosum is mentioned within skin cancer; the repair pathways and Lynch/BRCA links are missing.' }),
      ],
    },
    {
      id: 'bc-gene-expression',
      title: 'Transcription, RNA processing and translation',
      concepts: [
        c('bc-transcription', 'Transcription and its regulation', 'understand', 2, [O.geneticF, O.toxins], ['mechanism', 'pharmacology', 'enzyme-pathway'], [
          'Eukaryotic RNA polymerase I (rRNA), II (mRNA), III (tRNA, 5S rRNA); prokaryotes have one.',
          'Promoter (TATA, CAAT boxes), enhancers and silencers bind transcription factors; promoter mutations reduce expression (e.g. some β-thalassemias).',
          'Inhibitors: α-amanitin (death-cap mushrooms) inhibits RNA polymerase II (hepatotoxicity); rifampin inhibits bacterial RNA polymerase.',
        ]),
        c('bc-rna-processing', 'mRNA processing and splicing', 'apply', 2, [O.geneticF, O.anemiaF, O.infectionF], ['mechanism', 'disease'], [
          '5′ 7-methylguanosine cap, 3′ poly-A tail, removal of introns by spliceosomes (snRNPs).',
          'Splice-site mutations cause disease (e.g. some β-thalassemias).',
          'Anti-Smith antibodies (SLE) and anti-U1 RNP antibodies (mixed connective tissue disease) target snRNPs.',
          'Alternative splicing produces multiple proteins from one gene.',
        ]),
        c('bc-translation', 'tRNA and translation', 'understand', 2, [O.geneticF, O.multiDrugs], ['mechanism', 'pharmacology'], [
          'Aminoacyl-tRNA synthetase charges tRNA (ATP); wobble at the third codon position.',
          'Initiation (AUG, methionine; N-formylmethionine in bacteria), elongation (A, P, E sites; peptidyltransferase is an rRNA ribozyme), termination (release factors).',
          'Eukaryotic 80S (40S + 60S) vs prokaryotic 70S (30S + 50S) ribosomes underlie antibiotic selectivity.',
          'Toxins: diphtheria and Pseudomonas exotoxin A inactivate EF-2; Shiga toxin cleaves 60S rRNA.',
        ]),
        c('bc-protein-processing', 'Post-translational modification and protein folding', 'understand', 2, [O.geneticF, O.respCongenital], ['mechanism', 'disease'], [
          'Modifications: phosphorylation, glycosylation, hydroxylation, methylation, acetylation, ubiquitination (proteasomal degradation).',
          'Chaperones (heat shock proteins) assist folding; misfolding causes disease (cystic fibrosis ΔF508 CFTR, α1-antitrypsin Z allele).',
          'Trimming of signal peptides; zymogen activation.',
        ], { existing: ['alpha1-antitrypsin'], coverage: 'partial', gap: 'Misfolding appears only in α1-antitrypsin; no general concept.' }),
        c('bc-collagen', 'Collagen synthesis and its disorders', 'apply', 3, [O.mskCongenital, O.nutrition], ['enzyme-pathway', 'disease', 'genetics', 'presentation'], [
          'Types I (bone, skin, tendon), II (cartilage), III (reticular, vessels, granulation tissue), IV (basement membrane).',
          'Intracellular: Gly-X-Y synthesis, proline/lysine hydroxylation (vitamin C), glycosylation, triple helix; extracellular: procollagen peptidase cleavage, lysyl oxidase cross-linking (copper).',
          'Disorders by step: scurvy, osteogenesis imperfecta (type I), Ehlers–Danlos syndrome, Menkes disease (ATP7A copper transport), Alport syndrome (type IV).',
          'Elastin and fibrillin: Marfan (FBN1), Williams syndrome (elastin deletion), α1-antitrypsin and emphysema.',
        ], { existing: ['collagen-disorders'], coverage: 'covered', gap: 'Menkes disease and collagen types II–IV need explicit items.' }),
      ],
    },
  ],
};

export const cellular: Subdivision = {
  id: 'bc-cellular',
  title: 'Cellular biochemistry',
  scope:
    'The cell cycle, organelles and their disorders, the cytoskeleton, membrane pumps and the molecular markers used in pathology. Step 1 links each organelle or protein defect to a disease or drug.',
  topics: [
    {
      id: 'bc-cell-division',
      title: 'Cell cycle',
      concepts: [
        c('bc-cell-cycle', 'Cell cycle regulation and cell types', 'apply', 3, [O.neoplasm], ['mechanism', 'genetics', 'pharmacology'], [
          'Phases G1, S, G2, M; cyclins and cyclin-dependent kinases drive progression.',
          'Rb (inhibits E2F) and p53 (induces p21, arrest, apoptosis) guard G1→S; loss promotes cancer.',
          'Permanent (neurons, cardiac and skeletal muscle), stable (hepatocytes, lymphocytes) and labile (bone marrow, gut, skin) cells.',
          'Phase-specific drugs: S phase (antimetabolites), M phase (vinca alkaloids, taxanes).',
        ]),
      ],
    },
    {
      id: 'bc-organelles',
      title: 'Organelles and trafficking',
      concepts: [
        c('bc-er-golgi', 'Endoplasmic reticulum, Golgi and I-cell disease', 'apply', 2, [O.genetic], ['mechanism', 'disease', 'presentation'], [
          'Rough ER synthesizes secretory and membrane proteins (abundant in plasma cells, goblet cells); smooth ER makes steroids and detoxifies drugs (hepatocytes, adrenal cortex).',
          'Golgi adds mannose-6-phosphate to target lysosomal enzymes.',
          'I-cell disease (inclusion-cell disease, N-acetylglucosaminyl-1-phosphotransferase deficiency): enzymes secreted instead of reaching lysosomes; coarse features, restricted joint movement, high plasma lysosomal enzymes, often fatal in childhood.',
          'Vesicle coats: COPI (Golgi → ER retrograde), COPII (ER → Golgi), clathrin (endocytosis, trans-Golgi → lysosomes).',
        ]),
        c('bc-peroxisome-proteasome', 'Peroxisomes and proteasomes', 'apply', 2, [O.genetic, O.neuroMetabolic], ['mechanism', 'disease'], [
          'Peroxisomes: β-oxidation of very-long-chain and branched-chain fatty acids, plasmalogen synthesis.',
          'Zellweger syndrome (peroxisome biogenesis), Refsum disease (phytanic acid), X-linked adrenoleukodystrophy (VLCFA accumulation in adrenal glands and white matter).',
          'Proteasome degrades ubiquitin-tagged proteins; bortezomib inhibits it (multiple myeloma).',
        ]),
        c('bc-cytoskeleton', 'Cytoskeleton, motor proteins and cilia', 'apply', 2, [O.geneticF, O.respCongenital, O.multiDrugs], ['mechanism', 'disease', 'pharmacology'], [
          'Microtubules (α/β tubulin), with dynein (retrograde) and kinesin (anterograde) motors; drugs: colchicine, vinca alkaloids, taxanes, griseofulvin, mebendazole.',
          'Cilia (9+2 arrangement); primary ciliary dyskinesia (Kartagener syndrome, dynein arm defect): situs inversus, bronchiectasis, recurrent sinusitis, male infertility.',
          'Microfilaments (actin) and intermediate filaments.',
        ]),
        c('bc-intermediate-filaments', 'Intermediate filaments as tissue markers', 'recall', 2, [O.neoplasm], ['histology'], [
          'Vimentin (mesenchymal tissue, sarcomas), desmin (muscle), cytokeratin (epithelium, carcinomas), GFAP (astrocytes), neurofilaments (neurons), lamins (nuclear envelope).',
          'Used in immunohistochemistry to classify tumors of unknown origin.',
        ]),
        c('bc-membrane-pumps', 'Na⁺/K⁺-ATPase and membrane transport', 'understand', 2, [O.geneticF, O.multiDrugs], ['mechanism', 'pharmacology'], [
          'Na⁺/K⁺-ATPase pumps 3 Na⁺ out and 2 K⁺ in, maintaining the resting potential.',
          'Cardiac glycosides (digoxin, ouabain) inhibit it → ↑ intracellular Ca²⁺ via reduced Na⁺/Ca²⁺ exchange.',
          'Other transport: facilitated diffusion (GLUT), secondary active transport (SGLT), channels.',
        ], { existing: ['digoxin'], coverage: 'partial', gap: 'Covered from the pharmacology angle only.' }),
      ],
    },
  ],
};

export const laboratory: Subdivision = {
  id: 'bc-laboratory',
  title: 'Laboratory techniques',
  scope:
    'How common molecular and immunologic tests work and which one answers a given clinical question. Step 1 asks students to choose or interpret a technique, not to perform it.',
  topics: [
    {
      id: 'bc-lab-nucleic',
      title: 'Nucleic acid and protein techniques',
      concepts: [
        c('bc-pcr-sequencing', 'PCR, RT-PCR and sequencing', 'apply', 2, [O.geneticF, O.infectionF], ['mechanism'], [
          'PCR amplifies DNA by cycles of denaturation, primer annealing and extension (heat-stable polymerase).',
          'RT-PCR copies RNA into cDNA first (e.g. viral load, gene expression).',
          'Uses: detecting trinucleotide repeats, infectious agents, mutations; sequencing reads the base order.',
        ]),
        c('bc-blotting', 'Southern, Northern, Western and Southwestern blots', 'recall', 2, [O.geneticF], ['mechanism'], [
          'Southern: DNA; Northern: RNA; Western: protein (antibody probe); Southwestern: DNA-binding proteins.',
          'Choose the blot from what is being detected.',
        ]),
        c('bc-elisa-flow', 'ELISA, flow cytometry and microarrays', 'apply', 2, [O.infectionF], ['mechanism', 'labs'], [
          'ELISA detects antigen or antibody with enzyme-linked antibodies (screening tests).',
          'Flow cytometry measures cell-surface markers (CD4 counts, leukemia and lymphoma typing, PNH via CD55/CD59).',
          'Microarrays detect thousands of sequences or SNPs at once (copy number variants).',
        ]),
        c('bc-karyotype-fish', 'Karyotyping and FISH', 'apply', 2, [O.prenatal, O.genetic], ['genetics', 'labs'], [
          'Karyotyping of metaphase chromosomes detects aneuploidy and large rearrangements.',
          'FISH uses fluorescent probes to detect microdeletions (e.g. 22q11.2) and translocations that karyotyping misses.',
        ]),
        c('bc-gene-editing', 'Cloning, gene editing and RNA interference', 'recall', 1, [O.geneticF], ['mechanism'], [
          'Cloning: cDNA from mRNA inserted into a vector.',
          'CRISPR/Cas9 cuts DNA at a guided site for knockout or knock-in.',
          'RNA interference (siRNA) silences mRNA; knockout and transgenic animals study gene function.',
        ]),
      ],
    },
  ],
};
