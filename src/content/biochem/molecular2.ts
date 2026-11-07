import { AI_DRAFT, defineConcepts, type Bundle } from '../define';
import type { CaseItem, Citation, ConnectionGroup, ConnectionsPuzzleItem, MatchItem, OutlineRef, SequenceItem } from '../schema';

/**
 * Biochemistry batch 2 — remaining Molecular biochemistry objectives in curriculum order: chromatin
 * and epigenetics, OTC vs orotic aciduria, xanthine oxidase inhibitors, DNA replication, topoisomerase
 * drugs, telomerase, the reading-frame rule, transcription, RNA processing, translation, protein
 * folding, α1-antitrypsin deficiency, collagen synthesis and osteogenesis imperfecta.
 *
 * Original, AI-drafted content: DRAFT, NOT MEDICALLY REVIEWED. Every fact lists its supporting
 * citations; facts that rest on pathway reasoning rather than a directly read statement are listed in
 * `factPending` and block approval until a reviewer confirms them. Besides MCQ/TF/clues, this batch
 * adds Mechanism Lab sequences, Match Up pairings, a curated Connections puzzle checked against the
 * global category catalog, and two Mystery Patient cases.
 */

const MS = 'Multisystem Processes & Disorders' as const;
const listed = (area: OutlineRef['area'], section: string): OutlineRef => ({ area, section, listed: true });
const found = (area: OutlineRef['area'], section: string): OutlineRef => ({ area, section, listed: false });
const GEN = 'Genetic, metabolic, and developmental disorders';

// ---- Citation helpers (only sources that were opened and checked; see `checked`) --------------
const MP = (path: string, title: string): Citation => ({
  sourceId: 'medlineplus', locator: `MedlinePlus Genetics: ${title}`, url: `https://medlineplus.gov/genetics/${path}/`, checked: 'full-text',
});
const GR = (pmid: number, nbk: string, title: string): Citation => ({
  sourceId: 'ncbi-bookshelf', locator: `GeneReviews: ${title}`, url: `https://www.ncbi.nlm.nih.gov/books/${nbk}/`, ref: `PMID ${pmid}; ${nbk}`, checked: 'summary',
});
const SP = (pmid: number, nbk: string, title: string, checked: Citation['checked'] = 'existence'): Citation => ({
  sourceId: 'ncbi-bookshelf', locator: `StatPearls: ${title}`, url: `https://www.ncbi.nlm.nih.gov/books/${nbk}/`, ref: `PMID ${pmid}; ${nbk}`, checked,
});
const PM = (pmid: number, label: string, checked: Citation['checked'] = 'summary'): Citation => ({
  sourceId: 'pubmed', locator: label, url: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`, ref: `PMID ${pmid}`, checked,
});
const OSB = (page: string, title: string): Citation => ({
  sourceId: 'openstax-bio', locator: `OpenStax Biology 2e, ${title}`, url: `https://openstax.org/books/biology-2e/pages/${page}`, checked: 'full-text',
});
const DM = (setid: string, title: string): Citation => ({
  sourceId: 'dailymed', locator: `DailyMed: ${title}`, url: `https://dailymed.nlm.nih.gov/dailymed/drugInfo.cfm?setid=${setid}`, ref: `SPL set id ${setid}`, checked: 'full-text',
});
const GENE = (id: number, title: string): Citation => ({
  sourceId: 'ncbi-gene', locator: `NCBI Gene: ${title} (RefSeq summary)`, url: `https://www.ncbi.nlm.nih.gov/gene/${id}`, ref: `Gene ID ${id}`, checked: 'summary',
});
const PMC = (pmcid: string, pmid: number, label: string): Citation => ({
  sourceId: 'pubmed', locator: label, url: `https://pmc.ncbi.nlm.nih.gov/articles/${pmcid}/`, ref: `PMID ${pmid}; ${pmcid}`, checked: 'full-text',
});
const OSM = (page: string, title: string): Citation => ({
  sourceId: 'openstax-micro', locator: `OpenStax Microbiology, ${title}`, url: `https://openstax.org/books/microbiology/pages/${page}`, checked: 'full-text',
});

// Shared citations
const OS_EPI = OSB('16-3-eukaryotic-epigenetic-gene-regulation', '16.3 Eukaryotic Epigenetic Gene Regulation');
const OS_XCHR = OSB('13-2-chromosomal-basis-of-inherited-disorders', '13.2 Chromosomal Basis of Inherited Disorders');
const OS_PROK = OSB('14-4-dna-replication-in-prokaryotes', '14.4 DNA Replication in Prokaryotes');
const OS_EUK = OSB('14-5-dna-replication-in-eukaryotes', '14.5 DNA Replication in Eukaryotes');
const OS_TX = OSB('15-3-eukaryotic-transcription', '15.3 Eukaryotic Transcription');
const OS_PROC = OSB('15-4-rna-processing-in-eukaryotes', '15.4 RNA Processing in Eukaryotes');
const OS_RIBO = OSB('15-5-ribosomes-and-protein-synthesis', '15.5 Ribosomes and Protein Synthesis');
const OS_ABX = OSM('14-3-mechanisms-of-antibacterial-drugs', '14.3 Mechanisms of Antibacterial Drugs');
const MIRNA = PM(31752361, 'Stavast CJ, Erkeland SJ. The non-canonical aspects of microRNAs: many roads to gene regulation. Cells 2019');
const MIRNA2 = PM(25062737, 'Fletcher CE et al. Interplay between steroid signalling and microRNAs (miRNA biogenesis: Pol II, Drosha, Dicer, RISC). Endocr Relat Cancer 2014');
const LIVERTOX_TOPO = PM(31643693, 'LiverTox: Topoisomerase Inhibitors. NIDDK, 2020 update');
const FQ = PM(27449972, 'Hooper DC, Jacoby GA. Topoisomerase inhibitors: fluoroquinolone mechanisms of action and resistance. Cold Spring Harb Perspect Med 2016');
const TOXINS = PM(1599611, 'Perentesis JP et al. Protein toxin inhibitors of protein synthesis. Biofactors 1992');
const RICIN_STX = PM(22006183, 'Wahome PG et al. Small-molecule inhibitors of ricin and Shiga toxins (28S rRNA sarcin–ricin loop depurination). Curr Top Microbiol Immunol 2012');
const AMANITA = PM(39684738, 'Kayes T, Ho V. Amanita phalloides-associated liver failure: molecular mechanisms and management. Int J Mol Sci 2024');
const COLL_SP = SP(29939531, 'NBK507709', 'Biochemistry, Collagen Synthesis', 'summary');
const LOX = PM(31754702, 'Targeting the lysyl oxidases in tumour desmoplasia (copper-dependent cross-linking of collagen and elastin). Biochem Soc Trans 2019');
const ERAD = PM(28159894, 'Preston GM, Brodsky JL. The evolving role of ubiquitin modification in ER-associated degradation. Biochem J 2017');
const CFTR_CHAP = PM(15126691, 'Amaral MD. CFTR and chaperones: processing and degradation. J Mol Neurosci 2004');
const A1AT_MP = MP('condition/alpha-1-antitrypsin-deficiency', 'Alpha-1 antitrypsin deficiency');
const SERPINA1_MP = MP('gene/serpina1', 'SERPINA1 gene');
const A1AT_LIVER = PM(30266154, 'Patel D, Teckman JH. Alpha-1-antitrypsin deficiency liver disease. Clin Liver Dis 2018');

// Curriculum subtopic ids
const CH = 'bc-chromatin-structure';
const NS = 'bc-nucleotide-synthesis';
const PS = 'bc-purine-salvage';
const RP = 'bc-replication';
const MT = 'bc-mutation-types';
const TX = 'bc-transcription';
const RN = 'bc-rna-processing';
const TL = 'bc-translation';
const PP = 'bc-protein-processing';
const CO = 'bc-collagen';

const core = defineConcepts([
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-chromatin',
    relevance: 'core',
    title: 'Chromatin structure and epigenetic control',
    discipline: 'biochemistry',
    alsoDisciplines: ['genetics'],
    system: 'multisystem',
    topic: 'biochem-molecular',
    difficulty: 2,
    curriculum: [`${CH}.nucleosome`, `${CH}.epigenetic`],
    objectives: ['Describe the nucleosome and the two states of chromatin', 'Explain how DNA methylation and histone acetylation switch genes off and on'],
    citations: [
      OS_EPI,
      PM(20634313, 'Tamaru H. Confining euchromatin/heterochromatin territory: jumonji crosses the line. Genes Dev 2010'),
      PM(16261261, 'Hiragami K, Festenstein R. Heterochromatin protein 1: a pervasive controlling influence. Cell Mol Life Sci 2005'),
      PM(27776781, 'Liu X et al. Histone acetylation and plant development (HAT/HDAC review). Enzymes 2016'),
    ],
    facts: [
      'DNA is wound around histone proteins to form nucleosomes; chemical groups (acetyl, methyl, phosphate) are added to histone tails without changing the DNA sequence.',
      'Heterochromatin is highly condensed, gene-poor and transcriptionally silent; euchromatin is less condensed and accessible to transcription.',
      'Histones are positively charged and DNA is negatively charged; acetylation makes histone tails less positive, loosening DNA binding and favoring transcription.',
      'Histone acetyltransferases and histone deacetylases add and remove acetyl groups; hypoacetylation compacts chromatin and represses genes.',
      'DNA methylation occurs at CpG islands; methylated genes are usually silenced, and hypermethylated DNA with deacetylated histones is tightly coiled and inactive.',
      'Heterochromatin protein 1 binds histone H3 methylated on lysine 9, a mark of silent chromatin.',
    ],
    factRefs: [[0], [1], [0], [3, 0], [0], [2]],
    mechanism:
      'Transcription needs physical access to DNA. Acetyl groups neutralize the positive charge of histone tails, loosening their grip on DNA so transcription factors and RNA polymerase can bind. Methylated CpG islands and deacetylated histones do the opposite: chromatin compacts into heterochromatin and the promoter is silenced, while the DNA sequence stays the same.',
    associations: ['Nucleosome', 'Histone octamer', 'Heterochromatin', 'Euchromatin', 'CpG island', 'Histone acetyltransferase', 'Histone deacetylase'],
    misconception:
      'Epigenetic silencing does not mutate the gene: the sequence is intact, which is why silenced genes can, in principle, be reactivated by removing methylation or restoring acetylation.',
    quick:
      'Nucleosome = DNA wrapped on a histone core. Heterochromatin: condensed, silent. Euchromatin: open, active. Acetylation loosens chromatin (on); deacetylation and CpG methylation compact it (off). The DNA sequence never changes.',
    detailed: [
      'Each nucleosome is a stretch of DNA wrapped around a core of histones, with linker DNA between cores. Histone tails protrude from the core and carry chemical marks that change how tightly the DNA is held and which proteins are recruited.',
      'Gene activity follows chromatin state. Acetylation by histone acetyltransferases opens chromatin; histone deacetylases remove the marks and close it. Methylation of cytosines in CpG islands near promoters, together with deacetylated histones, produces tightly coiled, transcriptionally inactive DNA, and histone H3 lysine 9 methylation recruits heterochromatin protein 1.',
    ],
    takeaway: 'Acetylation = open and active; CpG methylation + deacetylation = closed and silent; the sequence is unchanged.',
    related: ['mol-epigenetic-disease'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A drug that inhibits histone deacetylases is added to cultured cells. What is the expected direct effect on chromatin at many promoters?',
        options: [
          ['a', 'Histone tails stay acetylated and chromatin opens'],
          ['b', 'CpG islands become more heavily methylated', 'HDAC inhibition acts on histone acetyl groups; it does not add methyl groups to cytosines.'],
          ['c', 'Histones gain positive charge and bind DNA tighter', 'Retained acetyl groups neutralize positive charge, so DNA binding loosens rather than tightens.'],
          ['d', 'The DNA sequence of silenced genes is altered', 'Epigenetic changes alter packaging and protein binding, not the base sequence.'],
          ['e', 'Nucleosomes are permanently removed from DNA', 'Acetylation loosens DNA–histone contact; nucleosomes remain and can be re-compacted.'],
        ],
        answer: 'a',
        mini: 'Deacetylases remove acetyl groups; blocking them leaves tails acetylated, less positive and loosely bound to DNA, so chromatin opens.',
        reasoning: 'mechanism',
        objectives: [`${CH}.epigenetic`],
        difficulty: 3,
      },
      {
        stem: 'Which description fits heterochromatin?',
        options: [
          ['a', 'Condensed, gene-poor and transcriptionally silent'],
          ['b', 'Open, gene-rich and actively transcribed', 'This describes euchromatin.'],
          ['c', 'DNA free of histones, ready for replication', 'Heterochromatin is the most tightly histone-packed state, not histone-free DNA.'],
          ['d', 'Chromatin marked mainly by histone acetylation', 'Acetylation is a mark of open, active chromatin, not heterochromatin.'],
          ['e', 'Loosely packed DNA found only in dividing cells', 'Heterochromatin is compact and present in non-dividing cells too.'],
        ],
        answer: 'a',
        mini: 'Heterochromatin is the compact, silent state; euchromatin is the open, transcribed state.',
        reasoning: 'recall',
        objectives: [`${CH}.nucleosome`],
        difficulty: 1,
      },
    ],
    tf: [
      { statement: 'Acetylation of histone tails tends to loosen chromatin and favor transcription.', isTrue: true, correction: 'Correct: acetyl groups reduce the positive charge of histones, so they hold the negatively charged DNA less tightly.', objectives: [`${CH}.epigenetic`], difficulty: 1 },
      { statement: 'Euchromatin is the condensed, transcriptionally inactive form of chromatin.', isTrue: false, correction: 'That describes heterochromatin; euchromatin is open and transcriptionally accessible.', objectives: [`${CH}.nucleosome`], difficulty: 1 },
    ],
    clues: [
      { answer: 'NUCLEOSOME', clue: 'Bead of DNA wound around a histone core', objectives: [`${CH}.nucleosome`], difficulty: 1 },
      { answer: 'HETEROCHROMATIN', clue: 'Condensed, transcriptionally silent chromatin', objectives: [`${CH}.nucleosome`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-epigenetic-disease',
    relevance: 'core',
    title: 'Epigenetic silencing in disease: X-inactivation, imprinting and fragile X',
    discipline: 'genetics',
    alsoDisciplines: ['biochemistry'],
    system: 'multisystem',
    alsoSystems: ['nervous-behavioral'],
    topic: 'biochem-molecular',
    difficulty: 3,
    curriculum: [`${CH}.epigenetic-disease`],
    objectives: ['Explain X-inactivation, genomic imprinting and fragile X syndrome as consequences of gene silencing'],
    citations: [
      OS_XCHR,
      MP('condition/prader-willi-syndrome', 'Prader-Willi syndrome'),
      MP('condition/angelman-syndrome', 'Angelman syndrome'),
      MP('condition/fragile-x-syndrome', 'Fragile X syndrome'),
      PM(29456084, 'Liu XS et al. Rescue of fragile X syndrome neurons by DNA methylation editing of the FMR1 gene. Cell 2018'),
      OS_EPI,
    ],
    facts: [
      'Early in female development, one X chromosome in each cell condenses into a quiescent Barr body; every X except one is inactivated, so individuals with extra X chromosomes have extra Barr bodies.',
      'In Prader–Willi syndrome the genes of the region are missing from the paternal chromosome 15 while the maternal copies are normally turned off: about 70% of cases are paternal deletions and about 25% are maternal uniparental disomy; rarely, a change abnormally turns off the genes on the paternal chromosome 15 (an imprinting defect).',
      'In neurons only the maternal copy of UBE3A is active; Angelman syndrome results when the maternal copy is lost (deletion, UBE3A variant) or, less often, from paternal uniparental disomy.',
      'Fragile X syndrome is caused by expansion of the CGG repeat in FMR1 to more than 200 copies, which silences the gene.',
      'The expanded CGG repeat is hypermethylated and the FMR1 promoter becomes heterochromatin; experimental demethylation reactivates the gene.',
      'Methylated genes are usually silenced, and parental and environmental factors can alter methylation patterns.',
    ],
    factRefs: [[0], [1], [2], [3], [4], [5]],
    mechanism:
      'In each condition the gene is present but silent. X-inactivation silences a whole chromosome to equalize dosage. Imprinting silences one parent’s copy, so losing the only active copy (from deletion or uniparental disomy) removes the gene’s function entirely. In fragile X, the expanded CGG repeat becomes methylated and the FMR1 promoter turns into heterochromatin, so no protein is made.',
    associations: ['Barr body', 'Prader–Willi syndrome', 'Angelman syndrome', 'UBE3A', 'Uniparental disomy', 'FMR1', 'CGG repeat'],
    misconception:
      'Uniparental disomy causes Prader–Willi or Angelman syndrome without any deletion: two maternal copies of chromosome 15 still leave no active paternal genes, and two paternal copies leave no active maternal UBE3A.',
    quick:
      'Barr body = silenced extra X. Imprinting: Prader–Willi = no active paternal 15q genes (deletion ~70%, maternal UPD ~25%); Angelman = no active maternal UBE3A. Fragile X: CGG >200 → FMR1 hypermethylated and silenced.',
    detailed: [
      'Dosage compensation inactivates all but one X chromosome per cell; the condensed X is visible as a Barr body. A cell from a person with 47,XXY therefore has one Barr body, and 47,XXX has two.',
      'Imprinted genes are expressed from only one parental copy. Because the maternal Prader–Willi region is normally silent, losing the paternal copy by deletion or inheriting two maternal chromosomes 15 (uniparental disomy) gives the same result. The reverse logic applies to Angelman syndrome and maternal UBE3A. A methylation test shows that the paternal pattern is missing but not why: a deletion, uniparental disomy and an imprinting defect all give the same result, so copy-number and parental-origin (SNP) studies are needed to tell them apart.',
      'In fragile X, a full mutation (>200 CGG repeats) is hypermethylated and the promoter adopts a heterochromatin state, so FMR1 is not transcribed. The phenotype comes from loss of the gene product, not from a change in the protein sequence.',
    ],
    takeaway: 'Silencing can cause disease as surely as deletion: ask which copy is active, and whether it has been lost or turned off.',
    related: ['mol-chromatin'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A hypotonic infant with poor feeding has a 15q11–q13 methylation test showing only the maternal pattern. Microarray shows normal chromosome 15 copy number. SNP genotyping of the infant and both parents shows that all informative chromosome 15 markers came from the mother, with no paternal alleles. Which mechanism best explains the results?',
        options: [
          ['a', 'Two maternal chromosome 15s, so no active paternal genes'],
          ['b', 'Deletion of the paternal 15q11–q13 region', 'A deletion would reduce copy number on microarray; this result shows normal copy number.'],
          ['c', 'Loss of the maternal UBE3A copy', 'Loss of maternal UBE3A causes Angelman syndrome and would leave a paternal pattern present.'],
          ['d', 'An imprinting defect on a paternal chromosome 15', 'An imprinting defect also gives a maternal-only pattern with normal copy number, but a paternal chromosome 15 would be present; here there are no paternal alleles.'],
          ['e', 'Two paternal chromosome 15s', 'Paternal uniparental disomy would show only the paternal pattern and is a cause of Angelman syndrome.'],
        ],
        answer: 'a',
        mini: 'A maternal-only methylation pattern can come from a paternal deletion, maternal uniparental disomy or an imprinting defect. Normal copy number excludes a deletion, and the absence of paternal alleles excludes an imprinting defect, leaving maternal uniparental disomy (Prader–Willi syndrome).',
        reasoning: 'interpretation',
        steps: [
          'A maternal-only methylation pattern shows that active paternal 15q11–q13 genes are missing, but not why.',
          'Normal copy number rules out a paternal deletion.',
          'No paternal alleles on parental SNP genotyping rules out an imprinting defect → maternal uniparental disomy.',
        ],
        relevance: 'specialist',
        relevanceNote: 'Separating uniparental disomy from an imprinting defect by SNP studies is beyond Step 1; Step 1 needs deletion vs UPD and which parent’s copy is active.',
        difficulty: 4,
      },
      {
        stem: 'Why does a full mutation (more than 200 CGG repeats) in FMR1 cause fragile X syndrome?',
        options: [
          ['a', 'The repeat is methylated and the promoter is silenced'],
          ['b', 'The repeat adds a polyglutamine tract to the protein', 'CGG repeats in fragile X lie in the 5′ untranslated region and are not translated into polyglutamine; that is the CAG mechanism of Huntington disease.'],
          ['c', 'The repeat creates a premature stop codon', 'The repeat lies upstream of the coding sequence; the problem is that the gene is not transcribed at all.'],
          ['d', 'The repeat deletes the X chromosome', 'The chromosome is intact; only the gene is silenced.'],
          ['e', 'The repeat prevents X-inactivation of the affected X', 'Fragile X silencing is gene-specific methylation, not a failure of X-inactivation.'],
        ],
        answer: 'a',
        mini: 'Full-mutation CGG repeats are hypermethylated, the FMR1 promoter becomes heterochromatin and no FMR1 protein is made.',
        reasoning: 'mechanism',
        difficulty: 3,
      },
      {
        stem: 'Cells from a person with karyotype 47,XXX are examined. How many Barr bodies are expected per cell, and why?',
        options: [
          ['a', 'Two, because all but one X is inactivated'],
          ['b', 'One, because only one X is ever inactivated', 'Inactivation is not limited to one X: every X beyond the first is silenced.'],
          ['c', 'Three, because every X condenses in females', 'One X always remains active in each cell.'],
          ['d', 'None, because extra X chromosomes are lost', 'The extra X persists in the karyotype and is inactivated, not lost.'],
          ['e', 'One, because the extra X is deleted early', 'Extra X chromosomes are silenced as Barr bodies, not deleted.'],
        ],
        answer: 'a',
        mini: 'Dosage compensation keeps one X active and condenses the rest: three X chromosomes → two Barr bodies.',
        reasoning: 'prediction',
        steps: ['Each cell keeps exactly one active X.', 'Every additional X is condensed into a Barr body.', 'Three X chromosomes − one active = two Barr bodies.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'In Angelman syndrome the disease results from loss of function of the maternal copy of UBE3A in neurons.', isTrue: true, correction: 'Correct: only the maternal UBE3A is active in neurons, so losing it leaves no active copy.', difficulty: 2 },
      { statement: 'In fragile X syndrome, the FMR1 protein is produced but contains an expanded amino acid repeat.', isTrue: false, correction: 'The full mutation silences FMR1 by methylation, so little or no protein is made.', difficulty: 2 },
    ],
    clues: [
      { answer: 'IMPRINTING', clue: 'Parent-of-origin silencing of one gene copy', difficulty: 2 },
      { answer: 'BARRBODY', clue: 'Condensed inactive X seen in a cell nucleus', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-otc-vs-orotic',
    relevance: 'core',
    title: 'Orotic aciduria: OTC deficiency vs UMP synthase deficiency',
    discipline: 'biochemistry',
    alsoDisciplines: ['genetics'],
    system: 'multisystem',
    alsoSystems: ['blood-immune', 'gastrointestinal'],
    topic: 'biochem-molecular',
    difficulty: 4,
    curriculum: [`${NS}.otc-vs-orotic`],
    objectives: ['Use ammonia, other evidence of urea-cycle dysfunction and the blood count to distinguish OTC deficiency from hereditary orotic aciduria'],
    citations: [
      MP('condition/ornithine-transcarbamylase-deficiency', 'Ornithine transcarbamylase deficiency'),
      PM(1234064, 'Beaudry MA et al. Chronic hyperammonemia with orotic aciduria: evidence of pyrimidine pathway stimulation. Diabete Metab 1975'),
      PM(36999056, 'Staretz-Chacham O et al. Hereditary orotic aciduria identified by newborn screening. Front Genet 2023'),
      PM(33489760, 'Al Absi HS et al. Hereditary orotic aciduria (HOA): a novel UMPS mutation. Mol Genet Metab Rep 2021'),
      PMC('PMC10453542', 37628367, 'Ibrahim MS et al. Diagnostic and management issues in patients with late-onset ornithine transcarbamylase deficiency. Children (Basel) 2023'),
    ],
    facts: [
      'Ornithine transcarbamylase (OTC) deficiency is an X-linked urea cycle disorder that causes hyperammonemia; the severe neonatal form usually affects males.',
      'In hyperammonemia with orotic aciduria from a partial urea cycle block, orotic acid excretion rises with ammonia and reflects stimulation of the pyrimidine pathway; red cell orotate phosphoribosyltransferase and orotidine decarboxylase (UMP synthase) activities are normal.',
      'Hereditary orotic aciduria is a UMP synthase deficiency with megaloblastic anemia that does not respond to vitamin B12 or folate.',
      'In OTC deficiency, orotic aciduria results from excess carbamoyl phosphate diverted into the pyrimidine pathway; plasma glutamine is high and citrulline low.',
    ],
    factRefs: [[0], [1], [2, 3], [4, 1]],
    mechanism:
      'Orotic acid can accumulate for two opposite reasons. In OTC deficiency, mitochondrial carbamoyl phosphate cannot combine with ornithine and overflows into the cytosolic pyrimidine pathway, so orotate is overproduced while UMP synthase itself is intact: ammonia rises, but the megaloblastic anemia that characterizes hereditary orotic aciduria is not a feature. In hereditary orotic aciduria, UMP synthase itself is defective, so orotate cannot be converted to UMP: ammonia is normal and pyrimidine-starved marrow becomes megaloblastic.',
    associations: ['Ornithine transcarbamylase', 'Carbamoyl phosphate', 'UMP synthase', 'Orotic acid', 'Hyperammonemia', 'Megaloblastic anemia'],
    misconception:
      'Orotic aciduria alone does not identify the disorder. The deciding clues are ammonia (high in OTC deficiency) and the blood count (megaloblastic anemia in UMP synthase deficiency).',
    quick:
      'Orotic aciduria + hyperammonemia, without the megaloblastic anemia of UMP synthase deficiency → OTC deficiency (urea cycle overflow; X-linked). Orotic aciduria + megaloblastic anemia unresponsive to B12/folate, no hyperammonemia → UMP synthase deficiency.',
    detailed: [
      'Carbamoyl phosphate made in the mitochondrion by carbamoyl phosphate synthetase I normally combines with ornithine via OTC. When OTC is deficient, excess carbamoyl phosphate is diverted into pyrimidine synthesis, so orotate is overproduced. UMP synthase is intact, so OTC deficiency does not characteristically cause the megaloblastic anemia of hereditary orotic aciduria (other causes of anemia can still coexist); the danger is ammonia toxicity, especially after protein loads.',
      'In hereditary orotic aciduria, orotate accumulates because it cannot be converted to UMP. The urea cycle is normal, so ammonia is not raised, but rapidly dividing erythroid precursors lack pyrimidine nucleotides and the anemia is megaloblastic despite normal B12 and folate.',
    ],
    takeaway: 'Orotic aciduria: check ammonia (OTC) and the blood count (UMP synthase).',
    related: ['mol-orotic-aciduria', 'mol-nucleotides'],
    outline: listed(MS, GEN),
    mcq: [
      {
        stem: 'Two infants both have raised urinary orotic acid. Infant A: plasma ammonia 260 µmol/L after a protein-rich feed, hemoglobin and MCV normal. Infant B: ammonia normal, hemoglobin 7.9 g/dL, MCV 112 fL, normal B12 and folate. Which pairing is correct?',
        options: [
          ['a', 'A: OTC deficiency; B: UMP synthase deficiency'],
          ['b', 'A: UMP synthase deficiency; B: OTC deficiency', 'Reversed: hyperammonemia points to a urea cycle block, and megaloblastic anemia points to failed UMP synthesis.'],
          ['c', 'A: OTC deficiency; B: folate deficiency', 'Folate is normal in infant B, and folate deficiency does not raise urinary orotic acid.'],
          ['d', 'A: carbamoyl phosphate synthetase I deficiency; B: OTC deficiency', 'CPS I deficiency gives hyperammonemia with low orotic acid, because carbamoyl phosphate is not made.'],
          ['e', 'Both: hereditary orotic aciduria of different severity', 'Hereditary orotic aciduria does not cause hyperammonemia, so it cannot explain infant A.'],
        ],
        answer: 'a',
        mini: 'Orotic acid + hyperammonemia = urea cycle overflow (OTC). Orotic acid + megaloblastic anemia with normal B12/folate = UMP synthase deficiency.',
        reasoning: 'comparison',
        steps: [
          'Infant A: hyperammonemia after protein = urea cycle block distal to carbamoyl phosphate.',
          'Excess carbamoyl phosphate is diverted into pyrimidine synthesis → orotic acid; UMP synthase is intact, so megaloblastic anemia is not expected → OTC deficiency.',
          'Infant B: normal ammonia + megaloblastic anemia not due to B12/folate → orotate cannot become UMP → UMP synthase deficiency.',
        ],
        difficulty: 4,
      },
      {
        stem: 'A 3-year-old girl has episodes of vomiting and drowsiness after high-protein meals. Ammonia is high and urinary orotic acid is raised; red cell UMP synthase activity is normal. Why is orotic acid raised?',
        options: [
          ['a', 'Excess carbamoyl phosphate enters pyrimidine synthesis'],
          ['b', 'UMP synthase cannot convert orotate to UMP', 'Red cell UMP synthase activity is normal, which excludes hereditary orotic aciduria.'],
          ['c', 'Ammonia directly inhibits orotate phosphoribosyltransferase', 'Enzyme activity is normal; the orotate comes from overproduction, not a blocked enzyme.'],
          ['d', 'Folate deficiency blocks thymidylate synthesis', 'Folate deficiency does not raise urinary orotic acid or ammonia.'],
          ['e', 'Purine salvage fails and diverts PRPP to orotate', 'Failed purine salvage raises uric acid, not orotic acid with hyperammonemia.'],
        ],
        answer: 'a',
        mini: 'A partial urea cycle block (OTC deficiency, which can present in heterozygous girls) leaves carbamoyl phosphate unused; it overflows into the pyrimidine pathway.',
        reasoning: 'multistep',
        steps: [
          'Protein-triggered hyperammonemia = urea cycle block.',
          'Normal UMP synthase excludes hereditary orotic aciduria.',
          'Unused mitochondrial carbamoyl phosphate overflows into cytosolic pyrimidine synthesis → orotic acid.',
        ],
        difficulty: 4,
      },
    ],
    tf: [
      { statement: 'Hereditary orotic aciduria typically presents with hyperammonemia after protein feeds.', isTrue: false, correction: 'Ammonia is normal in UMP synthase deficiency; hyperammonemia with orotic aciduria suggests a urea cycle defect such as OTC deficiency.', difficulty: 2 },
    ],
    clues: [
      { answer: 'OTC', clue: 'X-linked urea cycle enzyme whose deficiency raises both ammonia and orotic acid (abbr.)', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-xo-inhibitors',
    relevance: 'core',
    title: 'Xanthine oxidase inhibitors and the thiopurine interaction',
    discipline: 'pharmacology',
    alsoDisciplines: ['biochemistry'],
    system: 'multisystem',
    alsoSystems: ['musculoskeletal-skin', 'blood-immune'],
    topic: 'biochem-molecular',
    difficulty: 3,
    curriculum: [`${PS}.xo-inhibitors`],
    objectives: ['Explain how allopurinol and febuxostat lower urate', 'Predict the interaction with azathioprine and 6-mercaptopurine'],
    citations: [
      PM(19075968, 'Yu KH. Febuxostat: a novel non-purine selective inhibitor of xanthine oxidase for hyperuricemia in gout. Recent Pat Inflamm Allergy Drug Discov 2007'),
      PM(25040676, 'Weiler S et al. Treatment of gout in a renal transplant patient leading to severe thrombocytopenia (allopurinol–azathioprine). J Clin Pharm Ther 2014'),
      PM(30001695, 'Xanthine calculi in a patient with Lesch-Nyhan syndrome treated with allopurinol. BMC Pediatr 2018'),
      PM(33457651, 'Recurrent xanthine stones in a young patient with Lesch-Nyhan syndrome. J Endourol Case Rep 2020'),
      DM('54de10ef-fe5f-4930-b91d-6bbb04c664bd', 'ULORIC (febuxostat) tablets, Takeda: prescribing information (sections 4, 7 and 12.3), Dec 2025'),
    ],
    facts: [
      'Allopurinol inhibits xanthine oxidase; combined with azathioprine it can cause myelotoxicity, with raised myelotoxic 6-thioguanine nucleotide levels.',
      'Febuxostat is a non-purine, selective inhibitor of xanthine oxidase used to lower serum urate in gout.',
      'Blocking xanthine oxidase raises its substrates: in purine overproduction, xanthine can accumulate and form stones during allopurinol therapy.',
      'Azathioprine and mercaptopurine are metabolized by xanthine oxidase; febuxostat increased exposure to 6-mercaptopurine (a metabolite of azathioprine), which may cause toxicity, and is contraindicated with either drug.',
    ],
    factRefs: [[1], [0], [2, 3], [4, 1]],
    mechanism:
      'Xanthine oxidase converts hypoxanthine to xanthine and xanthine to uric acid. Inhibiting it lowers urate but raises the upstream oxypurines. 6-Mercaptopurine (the active metabolite of azathioprine) is also metabolized by xanthine oxidase, so when the enzyme is blocked, 6-mercaptopurine exposure rises, more is converted to cytotoxic thioguanine nucleotides, and the marrow is suppressed.',
    associations: ['Allopurinol', 'Febuxostat', 'Xanthine oxidase', 'Azathioprine', '6-Mercaptopurine', '6-Thioguanine nucleotides', 'Xanthine stones'],
    misconception:
      'The allopurinol–azathioprine interaction is not an immune or allergic reaction: it is a predictable metabolic shunt of the thiopurine toward its myelotoxic nucleotides when xanthine oxidase is blocked.',
    quick:
      'Allopurinol (purine analog) and febuxostat (non-purine) inhibit xanthine oxidase → less urate, more hypoxanthine/xanthine. With azathioprine/6-MP: less XO metabolism → more 6-MP and thioguanine nucleotides → cytopenias.',
    detailed: [
      'Xanthine oxidase catalyzes the last two steps of purine degradation. Inhibitors lower serum urate in gout and prevent urate overload during tumor lysis. Febuxostat is structurally unrelated to purines and inhibits the enzyme selectively.',
      'Azathioprine is converted to 6-mercaptopurine, which is either converted to thioguanine nucleotides (the immunosuppressive and myelotoxic products) or metabolized by other routes, including xanthine oxidase. Blocking xanthine oxidase raises 6-mercaptopurine exposure and thioguanine nucleotide levels. The febuxostat label contraindicates combination with azathioprine or mercaptopurine; with allopurinol, severe myelotoxicity has been reported, so the combination needs specialist dose adjustment with close monitoring, or avoidance.',
    ],
    takeaway: 'Xanthine oxidase inhibitor + azathioprine/6-MP = thiopurine toxicity (cytopenias).',
    related: ['mol-purine-salvage', 'mol-antimetabolites'],
    outline: found(MS, 'Adverse effects of drugs on multisystem disorders'),
    mcq: [
      {
        stem: 'A kidney transplant recipient on azathioprine develops gout and is started on allopurinol at the usual dose. Three weeks later platelets are 22,000/mm³ and neutrophils 600/mm³. What explains the cytopenias?',
        options: [
          ['a', 'Less 6-MP metabolism, so more thioguanine nucleotides'],
          ['b', 'Allopurinol hypersensitivity destroying marrow cells', 'Allopurinol hypersensitivity causes rash and organ injury; isolated predictable cytopenias with a thiopurine point to a metabolic interaction.'],
          ['c', 'Uric acid crystals deposited in the bone marrow', 'Allopurinol lowers urate; marrow crystal deposition is not the mechanism.'],
          ['d', 'Allopurinol inhibiting dihydrofolate reductase', 'Allopurinol inhibits xanthine oxidase, not DHFR.'],
          ['e', 'Xanthine stones causing acute kidney injury', 'Kidney injury would not explain neutropenia and thrombocytopenia.'],
        ],
        answer: 'a',
        mini: 'Xanthine oxidase metabolizes 6-mercaptopurine; blocking it raises 6-MP exposure and myelotoxic thioguanine nucleotides.',
        reasoning: 'prediction',
        steps: [
          'Azathioprine → 6-mercaptopurine, which xanthine oxidase metabolizes.',
          'Allopurinol blocks xanthine oxidase, so 6-MP exposure rises and more is converted to thioguanine nucleotides.',
          'Thioguanine nucleotides suppress rapidly dividing marrow → neutropenia and thrombocytopenia.',
        ],
        difficulty: 4,
      },
      {
        stem: 'A boy with HGPRT deficiency treated with high-dose allopurinol develops new kidney stones that are radiolucent and not composed of uric acid. Which compound most likely forms them?',
        options: [
          ['a', 'Xanthine'],
          ['b', 'Calcium oxalate', 'Calcium oxalate stones are radiopaque and unrelated to xanthine oxidase blockade.'],
          ['c', 'Cystine', 'Cystine stones come from defective renal amino acid transport, not purine metabolism.'],
          ['d', 'Orotic acid', 'Orotic acid accumulates in pyrimidine or urea cycle defects, not with xanthine oxidase inhibition.'],
          ['e', 'Struvite', 'Struvite stones are associated with urease-producing infections.'],
        ],
        answer: 'a',
        mini: 'Blocking xanthine oxidase in massive purine overproduction lets xanthine accumulate, which is poorly soluble and can form stones.',
        reasoning: 'prediction',
        steps: ['HGPRT deficiency → large purine load reaches the degradation pathway.', 'Allopurinol blocks xanthine → urate.', 'Substrate xanthine accumulates and precipitates as stones.'],
        relevance: 'specialist',
        relevanceNote: 'Xanthine stones during allopurinol therapy are a niche complication beyond Step 1.',
        difficulty: 4,
      },
    ],
    tf: [
      { statement: 'Febuxostat lowers urate by inhibiting xanthine oxidase, although, unlike allopurinol, it is not a purine analog.', isTrue: true, correction: 'Correct: febuxostat is a non-purine, selective xanthine oxidase inhibitor.', difficulty: 2 },
    ],
    clues: [
      { answer: 'FEBUXOSTAT', clue: 'Non-purine xanthine oxidase inhibitor for gout', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-replication',
    relevance: 'core',
    title: 'DNA replication: enzymes, strands and origins',
    discipline: 'biochemistry',
    system: 'multisystem',
    topic: 'biochem-molecular',
    difficulty: 2,
    curriculum: [`${RP}.enzymes`, `${RP}.strands`],
    objectives: ['Assign each replication enzyme its job', 'Explain leading and lagging strand synthesis and replication origins'],
    citations: [
      OS_PROK,
      OS_EUK,
      PM(35850061, 'Zhou ZX, Kunkel TA. Extrinsic proofreading (Pol δ and ε 3′→5′ exonuclease). DNA Repair (Amst) 2022'),
    ],
    facts: [
      'Helicase opens the helix; single-strand binding proteins keep the strands apart; topoisomerase relieves over-winding ahead of the fork by nicking and resealing DNA.',
      'Primase makes a short RNA primer that provides the free 3′-OH; DNA polymerase III is the main prokaryotic polymerase, adding nucleotides 5′→3′.',
      'The leading strand is made continuously; the lagging strand is made as Okazaki fragments, each starting from its own primer.',
      'In prokaryotes DNA polymerase I removes RNA primers by exonuclease activity and fills the gaps; ligase seals the nicks. In eukaryotes RNase H removes primers.',
      'E. coli has a single origin of replication; eukaryotic chromosomes have multiple origins. In eukaryotes pol ε synthesizes the leading strand and pol δ the lagging strand.',
      'Pol δ and pol ε have 3′→5′ exonuclease activity that removes misinserted bases (proofreading); errors that escape are corrected by mismatch repair.',
    ],
    factRefs: [[0], [0], [0], [0, 1], [0, 1], [2]],
    mechanism:
      'DNA polymerases can only extend an existing 3′-OH in the 5′→3′ direction. That single rule explains the need for primase, why one strand is continuous and the other is made in Okazaki fragments, why primers must later be removed and replaced, and why ligase is needed to join the fragments.',
    associations: ['Helicase', 'Single-strand binding protein', 'Topoisomerase', 'Primase', 'DNA polymerase III', 'DNA polymerase I', 'Okazaki fragment', 'DNA ligase', 'Proofreading'],
    misconception:
      'Proofreading is a 3′→5′ exonuclease that removes a wrong base immediately after it is added; it is not the same as mismatch repair, which corrects errors that escape proofreading after replication.',
    quick:
      'Helicase unwinds, SSB holds apart, topoisomerase relieves supercoils, primase lays RNA primer, polymerase extends 5′→3′ (proofreads 3′→5′), primers removed (pol I or RNase H), ligase seals Okazaki fragments. Prokaryotes: one origin; eukaryotes: many.',
    detailed: [
      'At each fork, helicase separates the strands and single-strand binding proteins prevent re-annealing, while topoisomerase ahead of the fork relieves the over-winding. Primase supplies an RNA primer, because DNA polymerase cannot start a chain de novo.',
      'Because polymerases synthesize only 5′→3′, the leading strand is extended continuously toward the fork while the lagging strand is made in short Okazaki fragments away from it. Primers are removed (pol I in bacteria, RNase H in eukaryotes), the gaps are filled with DNA, and ligase seals the backbone. Replicative polymerases proofread with a 3′→5′ exonuclease, improving fidelity before mismatch repair acts.',
    ],
    takeaway: 'Polymerase needs a primer and works 5′→3′: that explains primase, Okazaki fragments, primer removal and ligase.',
    related: ['mol-topoisomerase-drugs', 'mol-telomerase', 'mol-lynch'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A bacterial strain carries a DNA polymerase III mutation that abolishes its 3′→5′ exonuclease activity but leaves polymerization intact. What is the main consequence?',
        options: [
          ['a', 'Misincorporated bases are not removed, so mutation rate rises'],
          ['b', 'RNA primers can no longer be removed from Okazaki fragments', 'Primer removal in bacteria is a 5′→3′ exonuclease function of DNA polymerase I, not pol III proofreading.'],
          ['c', 'Okazaki fragments cannot be joined into a strand', 'Joining is done by DNA ligase, which is unaffected.'],
          ['d', 'Replication can no longer begin at the origin', 'Initiation depends on helicase and primase, not proofreading.'],
          ['e', 'Supercoiling ahead of the fork accumulates', 'Relieving supercoils is the job of topoisomerases.'],
        ],
        answer: 'a',
        mini: 'The 3′→5′ exonuclease is proofreading; without it, wrong bases stay in the new strand and the mutation rate rises (a mutator phenotype).',
        reasoning: 'mechanism',
        objectives: [`${RP}.enzymes`],
        difficulty: 3,
      },
      {
        stem: 'Why is the lagging strand synthesized as Okazaki fragments?',
        options: [
          ['a', 'Polymerase extends only 5′→3′, away from the fork on that strand'],
          ['b', 'The lagging strand template is made of RNA', 'Both templates are DNA; RNA is present only in the primers.'],
          ['c', 'Helicase unwinds the lagging strand in short bursts', 'Helicase unwinds both strands together; the direction of synthesis causes the fragments.'],
          ['d', 'Ligase cuts the new strand to relieve torsional strain', 'Ligase joins fragments; topoisomerases relieve strain.'],
          ['e', 'Each eukaryotic origin produces one Okazaki fragment', 'Many fragments arise from each origin on the lagging side; the cause is polymerase directionality.'],
        ],
        answer: 'a',
        mini: 'On the lagging template, 5′→3′ synthesis runs away from the fork, so it must restart repeatedly from new primers.',
        reasoning: 'mechanism',
        objectives: [`${RP}.strands`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'Eukaryotic chromosomes are replicated from many origins, whereas the E. coli chromosome has a single origin.', isTrue: true, correction: 'Correct: multiple origins let large eukaryotic genomes replicate in reasonable time.', objectives: [`${RP}.strands`], difficulty: 1 },
      { statement: 'Primase synthesizes a short DNA primer that DNA polymerase extends.', isTrue: false, correction: 'Primase makes an RNA primer; it is later removed and replaced with DNA.', objectives: [`${RP}.enzymes`], difficulty: 1 },
    ],
    clues: [
      { answer: 'OKAZAKI', clue: 'Name for the short fragments of the lagging strand', objectives: [`${RP}.strands`], difficulty: 1 },
      { answer: 'PRIMASE', clue: 'Enzyme that lays down an RNA starting point for DNA polymerase', objectives: [`${RP}.enzymes`], difficulty: 1 },
      { answer: 'LIGASE', clue: 'Seals the nicks between lagging-strand fragments', objectives: [`${RP}.enzymes`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-topoisomerase-drugs',
    relevance: 'core',
    title: 'Topoisomerase inhibitors: anticancer drugs and fluoroquinolones',
    discipline: 'pharmacology',
    alsoDisciplines: ['biochemistry', 'microbiology'],
    system: 'multisystem',
    topic: 'biochem-molecular',
    difficulty: 3,
    curriculum: [`${RP}.topo-drugs`],
    objectives: ['Match topoisomerase inhibitors to their enzyme', 'Predict their effect on DNA and on dividing cells'],
    citations: [
      LIVERTOX_TOPO,
      FQ,
      OS_ABX,
      OS_PROK,
    ],
    facts: [
      'Topoisomerases make temporary breaks in DNA to relieve supercoiling ahead of the replication fork and then reseal them.',
      'Irinotecan and topotecan (camptothecin derivatives) inhibit topoisomerase I; etoposide and teniposide inhibit topoisomerase II.',
      'Camptothecins bind the DNA–topoisomerase I complex and prevent resealing; accumulating DNA breaks block replication and kill the cell. Dose-limiting toxicities are mainly hematologic and gastrointestinal.',
      'Fluoroquinolones inhibit bacterial DNA gyrase and topoisomerase IV, stabilizing DNA–enzyme complexes that block replication and generate double-strand breaks.',
      'Fluoroquinolone adverse effects include phototoxicity, neurotoxicity, cardiotoxicity, glucose dysregulation and tendon rupture.',
    ],
    factRefs: [[3, 0], [0], [0], [1, 2], [2]],
    mechanism:
      'Topoisomerase poisons do not simply stop the enzyme: they trap it on DNA after it has cut, so the break is never resealed. Replication forks colliding with these trapped complexes convert them into lethal breaks, which is why rapidly dividing cells (tumor, marrow, gut) or bacteria are killed.',
    associations: ['Irinotecan', 'Topotecan', 'Etoposide', 'Teniposide', 'Ciprofloxacin', 'DNA gyrase', 'Topoisomerase IV'],
    misconception:
      'Fluoroquinolones and etoposide are both topoisomerase II-type poisons, but fluoroquinolones are selective for the bacterial type II enzymes (DNA gyrase and topoisomerase IV), so they are antibiotics rather than chemotherapy.',
    quick:
      'Topo I: irinotecan, topotecan. Topo II: etoposide, teniposide. Bacterial gyrase + topo IV: fluoroquinolones (ciprofloxacin, levofloxacin). All trap the enzyme after it cuts → unresealed breaks → replication fails.',
    detailed: [
      'Topoisomerase I nicks one strand; topoisomerase II cuts both strands and passes another duplex through. Camptothecins (irinotecan, topotecan) trap topoisomerase I on DNA; epipodophyllotoxins (etoposide, teniposide) trap topoisomerase II. Both cause DNA breaks that kill dividing cells, so marrow suppression and diarrhea or mucositis are the main toxicities.',
      'Bacteria use DNA gyrase and topoisomerase IV, type II enzymes that are the targets of fluoroquinolones. Resistance arises mainly from mutations in GyrA and ParC that reduce drug binding, and from efflux pumps.',
    ],
    takeaway: 'Topo I: “-tecan”. Topo II: etoposide/teniposide. Gyrase/topo IV: fluoroquinolones.',
    related: ['mol-replication'],
    outline: found(MS, 'Adverse effects of drugs on multisystem disorders'),
    mcq: [
      {
        stem: 'A drug used for small cell lung cancer binds the complex of DNA and topoisomerase II after the enzyme has cut both strands, preventing resealing. Which other drug shares this target?',
        options: [
          ['a', 'Teniposide'],
          ['b', 'Topotecan', 'Topotecan traps topoisomerase I, which cuts only one strand.'],
          ['c', 'Ciprofloxacin', 'Ciprofloxacin targets the bacterial type II enzymes DNA gyrase and topoisomerase IV, not human topoisomerase II.'],
          ['d', 'Irinotecan', 'Irinotecan is a camptothecin that inhibits topoisomerase I.'],
          ['e', 'Dactinomycin', 'Dactinomycin intercalates into DNA and blocks transcription.'],
        ],
        answer: 'a',
        mini: 'Etoposide and teniposide both trap human topoisomerase II.',
        reasoning: 'identification',
        difficulty: 2,
      },
      {
        stem: 'Cancer cells are treated with irinotecan. Which outcome is expected in cells that enter S phase?',
        options: [
          ['a', 'Replication forks meet trapped complexes and DNA breaks build up'],
          ['b', 'Supercoils relax faster, speeding up replication', 'Trapping the enzyme prevents resealing; it does not speed replication.'],
          ['c', 'RNA primers persist because RNase H is inhibited', 'Irinotecan does not act on RNase H.'],
          ['d', 'dTMP falls because thymidylate synthase is blocked', 'That is the action of 5-fluorouracil.'],
          ['e', 'Telomeres shorten because telomerase is inhibited', 'Irinotecan is a topoisomerase I poison, not a telomerase inhibitor.'],
        ],
        answer: 'a',
        mini: 'Camptothecins keep topoisomerase I covalently bound to a nicked strand; replication converts these lesions into breaks and the cell dies.',
        reasoning: 'prediction',
        steps: ['Irinotecan traps topoisomerase I on DNA after it nicks one strand.', 'The nick cannot be resealed.', 'Moving replication forks collide with the trapped complexes → DNA breaks → replication arrest and cell death.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Fluoroquinolones inhibit bacterial DNA gyrase and topoisomerase IV.', isTrue: true, correction: 'Correct: these type II enzymes are trapped on DNA, blocking replication and causing double-strand breaks.', difficulty: 1 },
    ],
    clues: [
      { answer: 'ETOPOSIDE', clue: 'Topoisomerase II poison derived from a plant toxin, used in chemotherapy', difficulty: 2 },
      { answer: 'GYRASE', clue: 'Bacterial type II topoisomerase blocked by ciprofloxacin', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-telomerase',
    relevance: 'core',
    title: 'Telomeres and telomerase',
    discipline: 'biochemistry',
    alsoDisciplines: ['cell-biology', 'pathology'],
    system: 'multisystem',
    topic: 'biochem-molecular',
    difficulty: 2,
    curriculum: [`${RP}.telomerase`],
    objectives: ['Explain why chromosome ends shorten and how telomerase restores them'],
    citations: [
      OS_EUK,
      PM(22875809, 'Egan ED, Collins K. Biogenesis of telomerase ribonucleoproteins (TERT + template-containing telomerase RNA). RNA 2012'),
      PM(18482052, 'Cao Y et al. Increased copy number of the TERT and TERC telomerase subunit genes in cancer cells. Cancer Sci 2008'),
    ],
    facts: [
      'Human telomeres consist of the six-base sequence TTAGGG repeated many times; telomeres shorten with each division in most somatic cells because they do not make telomerase.',
      'Telomerase is a ribonucleoprotein: a reverse transcriptase protein (TERT) that synthesizes telomeric repeats from the template in its own telomerase RNA.',
      'Telomerase is active in germ cells and adult stem cells but not in most adult somatic cells.',
      'In most cancers telomerase is expressed at much higher levels than in normal cells, maintaining telomere length and allowing escape from the normal limit on divisions.',
    ],
    factRefs: [[0], [1, 2], [0], [2, 0]],
    mechanism:
      'The lagging strand cannot be completed at the very end of a linear chromosome, so ends shorten with each division. Telomerase carries its own RNA template and copies it into DNA (reverse transcription), adding TTAGGG repeats to the 3′ end so the ends can be completed again.',
    associations: ['Telomere', 'TTAGGG', 'TERT', 'Telomerase RNA', 'Reverse transcriptase', 'Replicative senescence'],
    misconception:
      'Telomerase does not repair internal DNA damage and does not use the chromosome as its template: it uses its own RNA as the template to extend chromosome ends.',
    quick:
      'Telomerase = reverse transcriptase (TERT) + its own RNA template; adds TTAGGG to chromosome ends. Active in germ and stem cells; off in most somatic cells; reactivated in most cancers to avoid senescence.',
    detailed: [
      'Every round of replication leaves a short gap at the end of the lagging strand that conventional polymerases cannot fill, so telomeres shorten until cells stop dividing. Telomerase counteracts this loss by adding repeats to the 3′ overhang, after which the complementary strand is filled in.',
      'Because telomerase uses an RNA template to make DNA, its catalytic subunit is a reverse transcriptase. Germ cells and stem cells keep telomerase active; most adult somatic cells do not, which limits their divisions. Cancer cells commonly up-regulate telomerase, sometimes with extra copies of the TERT and TERC genes, allowing indefinite division.',
    ],
    takeaway: 'Telomerase is an RNA-templated DNA polymerase that lets germ, stem and cancer cells keep dividing.',
    related: ['mol-replication'],
    outline: found(MS, 'Neoplasms and related disorders'),
    mcq: [
      {
        stem: 'Why is telomerase classified as a reverse transcriptase?',
        options: [
          ['a', 'It copies its own RNA template into DNA'],
          ['b', 'It removes RNA primers from Okazaki fragments', 'Primer removal is done by RNase H (eukaryotes) or DNA polymerase I (bacteria).'],
          ['c', 'It transcribes telomeric DNA into regulatory RNA', 'That would be DNA → RNA (ordinary transcription), not reverse transcription.'],
          ['d', 'It proofreads in the 3′→5′ direction', 'Proofreading is an exonuclease activity of replicative polymerases.'],
          ['e', 'It ligates the ends of sister chromatids together', 'Telomerase extends ends; it does not join chromatids.'],
        ],
        answer: 'a',
        mini: 'TERT reads the template in telomerase RNA and writes TTAGGG repeats in DNA: RNA → DNA is reverse transcription.',
        reasoning: 'mechanism',
        difficulty: 2,
      },
      {
        stem: 'Cultured adult skin fibroblasts stop dividing after a fixed number of passages, but cells from the same person’s malignant melanoma keep dividing while keeping their telomere length stable. Which difference best explains this?',
        options: [
          ['a', 'The melanoma cells express high telomerase activity'],
          ['b', 'The fibroblasts have more replication origins', 'More origins speed replication; they do not set a limit on the number of divisions.'],
          ['c', 'The melanoma cells lack DNA polymerase proofreading', 'Lost proofreading raises mutation rate; it does not maintain chromosome ends.'],
          ['d', 'The fibroblasts cannot make RNA primers', 'Without primase no cell could replicate at all.'],
          ['e', 'The melanoma cells have longer Okazaki fragments', 'Okazaki fragment length does not prevent end shortening.'],
        ],
        answer: 'a',
        mini: 'Somatic fibroblasts lack telomerase and their telomeres shorten until senescence; most cancers up-regulate telomerase and maintain telomere length.',
        reasoning: 'comparison',
        steps: ['Somatic cells lack telomerase, so telomeres shorten each division.', 'Critically short telomeres stop division.', 'Cancer cells re-express telomerase, maintain telomeres and escape this limit.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Most adult somatic cells have high telomerase activity.', isTrue: false, correction: 'Telomerase is active in germ cells and adult stem cells; most somatic cells do not make it.', difficulty: 1 },
    ],
    clues: [
      { answer: 'TELOMERASE', clue: 'Ribonucleoprotein that adds TTAGGG repeats to chromosome ends', difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-reading-frame',
    relevance: 'core',
    title: 'The reading-frame rule: Duchenne vs Becker muscular dystrophy',
    discipline: 'genetics',
    alsoDisciplines: ['biochemistry'],
    system: 'musculoskeletal-skin',
    alsoSystems: ['nervous-behavioral'],
    topic: 'biochem-molecular',
    difficulty: 3,
    curriculum: [`${MT}.reading-frame`],
    objectives: ['Predict Duchenne vs Becker phenotype from whether a deletion preserves the reading frame'],
    citations: [
      MP('condition/duchenne-and-becker-muscular-dystrophy', 'Duchenne and Becker muscular dystrophy'),
      PM(41391908, 'Genetics and pathophysiology of Duchenne muscular dystrophy (reading-frame rule). Arch Pediatr 2025'),
      PM(33238405, 'Lim KRQ et al. Genotype–phenotype correlations in Duchenne and Becker muscular dystrophy patients from the Canadian Neuromuscular Disease Registry. J Pers Med 2020'),
      GR(20301298, 'NBK1119', 'Dystrophinopathies'),
    ],
    facts: [
      'Duchenne and Becker muscular dystrophy are X-linked recessive disorders of the DMD gene (dystrophin); Becker is usually milder and later in onset.',
      'Mutations that leave an abnormal dystrophin with some function usually cause Becker; mutations that prevent any functional dystrophin tend to cause Duchenne.',
      'Most mutations are intragenic deletions. Out-of-frame mutations abolish dystrophin synthesis, whereas in-frame deletions produce a shorter, partially functional protein.',
      'The reading-frame rule has exceptions: in a registry of 402 patients, about 13% did not follow it.',
    ],
    factRefs: [[0, 3], [0], [1, 2], [2]],
    mechanism:
      'The ribosome reads mRNA in codons of three nucleotides. A deletion whose length is a multiple of three removes amino acids but keeps the downstream codons in frame, so a shortened, partly functional dystrophin is made (Becker). A deletion that is not a multiple of three shifts every downstream codon, soon producing a premature stop codon and no functional dystrophin (Duchenne). Deletion size matters less than this arithmetic.',
    associations: ['Dystrophin', 'DMD gene', 'In-frame deletion', 'Frameshift', 'Premature stop codon', 'Exon skipping'],
    misconception:
      'A large in-frame deletion can cause milder disease than a small out-of-frame deletion: severity depends on whether the frame is preserved, not on how much DNA is lost.',
    quick:
      'Deletion length divisible by 3 → frame preserved → shorter, partly working dystrophin → Becker. Not divisible by 3 → frameshift → premature stop → no dystrophin → Duchenne. About 1 in 8 patients are exceptions.',
    detailed: [
      'Dystrophin links the muscle cytoskeleton to the extracellular matrix. Its central rod domain is long and repetitive, so internal deletions that keep the frame often leave a protein that still bridges the two ends and protects the fiber partly.',
      'Out-of-frame deletions change every codon after the break and usually reach a premature stop codon, so the mRNA is degraded or the protein is truncated and nonfunctional. Therapies that skip an extra exon aim to restore the frame and convert a Duchenne-type mutation into a Becker-type protein. Registry data show the rule predicts most but not all phenotypes, so the clinical course still matters.',
    ],
    takeaway: 'Frame kept → Becker; frame shifted → Duchenne. Size is not the deciding factor.',
    related: ['mol-mutation-types'],
    outline: listed('Musculoskeletal System', 'Degenerative and metabolic disorders'),
    mcq: [
      {
        stem: 'Two boys have DMD deletions. Boy 1: deletion removes 3 exons totaling 360 nucleotides. Boy 2: deletion removes 1 exon of 118 nucleotides. Which phenotypes are most likely?',
        options: [
          ['a', 'Boy 1 Becker, Boy 2 Duchenne'],
          ['b', 'Boy 1 Duchenne, Boy 2 Becker', 'This assumes larger deletions are more severe; the frame, not the size, decides.'],
          ['c', 'Both Duchenne, because both remove whole exons', 'Removing whole exons in frame still allows a shorter dystrophin to be made.'],
          ['d', 'Both Becker, because neither deletes the whole gene', 'An out-of-frame deletion abolishes functional dystrophin even if most of the gene remains.'],
          ['e', 'Phenotype cannot be predicted without protein sequencing', 'The reading-frame rule predicts most phenotypes from deletion length alone, although exceptions exist.'],
        ],
        answer: 'a',
        mini: '360 is divisible by 3 (in frame → Becker); 118 is not (frameshift → Duchenne). The rule predicts most phenotypes, but about 1 in 8 patients are exceptions, so the clinical course still matters.',
        reasoning: 'interpretation',
        steps: ['360 ÷ 3 = 120 codons: frame preserved → internally shortened dystrophin → Becker.', '118 ÷ 3 leaves a remainder: frameshift → premature stop → no functional dystrophin → Duchenne.'],
        difficulty: 4,
      },
      {
        stem: 'A boy with Duchenne muscular dystrophy has an out-of-frame deletion. An antisense drug makes the spliceosome skip one additional neighboring exon so that the combined deletion becomes a multiple of three. What is the expected molecular effect?',
        options: [
          ['a', 'A shorter, partly functional dystrophin is made'],
          ['b', 'Full-length normal dystrophin is restored', 'The skipped exons are still missing, so the protein is internally shortened, not normal.'],
          ['c', 'Dystrophin mRNA is no longer transcribed', 'Exon skipping changes splicing, not transcription.'],
          ['d', 'The deleted exons are re-inserted into the gene', 'Antisense oligonucleotides do not alter the DNA.'],
          ['e', 'Utrophin replaces dystrophin in every fiber', 'Utrophin up-regulation is a different strategy; exon skipping targets dystrophin itself.'],
        ],
        answer: 'a',
        mini: 'Restoring the frame lets translation continue past the deletion, producing a Becker-like internally deleted dystrophin.',
        reasoning: 'prediction',
        steps: ['Out-of-frame deletion → premature stop → no dystrophin.', 'Skipping an extra exon makes the total missing length a multiple of 3.', 'Downstream codons are read in frame → shorter, partly functional protein (Becker-like).'],
        relevance: 'specialist',
        relevanceNote: 'Antisense exon-skipping therapy is beyond typical Step 1 depth.',
        difficulty: 4,
      },
      {
        stem: 'Why do most out-of-frame deletions in DMD abolish dystrophin rather than produce a protein lacking only the deleted region?',
        options: [
          ['a', 'The downstream codons shift and soon reach a stop codon'],
          ['b', 'The ribosome cannot translate across an exon junction', 'Ribosomes translate spliced mRNA with exon junctions normally.'],
          ['c', 'Deleted exons contain the dystrophin promoter', 'Intragenic deletions usually spare the promoter; the problem is the frameshift.'],
          ['d', 'Dystrophin requires every exon to fold at all', 'In-frame deletions show that dystrophin can work with internal exons missing.'],
          ['e', 'The deletion converts dystrophin into a toxic protein', 'Duchenne results from loss of dystrophin, not a toxic gain of function.'],
        ],
        answer: 'a',
        mini: 'A frameshift changes every downstream codon and usually creates a premature stop codon, so no functional dystrophin is produced.',
        reasoning: 'mechanism',
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'In dystrophinopathies, the size of the deletion is the main predictor of severity.', isTrue: false, correction: 'Whether the deletion preserves the reading frame is the main predictor; in-frame deletions usually cause Becker.', difficulty: 2 },
    ],
    clues: [
      { answer: 'FRAMESHIFT', clue: 'Type of mutation behind most Duchenne deletions', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-transcription',
    relevance: 'core',
    title: 'Eukaryotic transcription: RNA polymerases and promoters',
    discipline: 'biochemistry',
    system: 'multisystem',
    alsoSystems: ['blood-immune'],
    topic: 'biochem-molecular',
    difficulty: 2,
    curriculum: [`${TX}.polymerases`, `${TX}.regulation`],
    objectives: ['Match RNA polymerases I, II and III to their products', 'Describe promoters, enhancers and silencers and predict the effect of promoter mutations'],
    citations: [
      OS_TX,
      PM(1827444, 'Fischer U et al. Diversity in the signals required for nuclear accumulation of U snRNPs (pol II-transcribed U1, U2, U4, U5; pol III-transcribed U6). J Cell Biol 1991'),
      MIRNA,
      PM(2987224, 'Surrey S et al. Functional analysis of a β-globin gene containing a TATA box mutation from a patient with β thalassemia. J Biol Chem 1985'),
      PM(10840054, 'Lewis BA et al. A downstream element in the human β-globin promoter (β-thalassemia promoter mutations decrease transcription). Proc Natl Acad Sci U S A 2000'),
      OS_ABX,
    ],
    facts: [
      'RNA polymerase I (in the nucleolus) makes the large rRNAs (all except 5S); RNA polymerase II makes all protein-coding pre-mRNAs; RNA polymerase III makes 5S rRNA, tRNAs and some small nuclear RNAs.',
      'U1, U2, U4 and U5 snRNAs are transcribed by RNA polymerase II, whereas U6 snRNA is transcribed by RNA polymerase III.',
      'MicroRNA genes are typically transcribed by RNA polymerase II as primary transcripts.',
      'Eukaryotic promoters include a TATA box about 25–35 bases upstream of the start site and often a CAAT box about 80 bases upstream; enhancers and silencers bound by transcription factors raise or lower transcription.',
      'A β-thalassemia TATA box mutation reduced transcription of a β-globin gene whose RNA processing and start site were normal (a promoter-down mutation).',
      'Bacteria use a single RNA polymerase, which rifampin inhibits.',
      'Basal transcription factors for RNA polymerase II (TFII…) assemble at the promoter; the core complex, TFIID, contains the TATA-binding protein. Enhancers and silencers change the efficiency of transcription but are not required for it.',
    ],
    factRefs: [[0], [1], [2], [0], [3, 4], [0, 5], [0]],
    mechanism:
      'Promoter elements position the transcription machinery: general factors recognize the TATA box and recruit RNA polymerase II, while enhancers and silencers tune how often initiation happens. A promoter mutation leaves the coding sequence intact but lowers the amount of mRNA, so the protein is normal in structure and reduced in quantity.',
    associations: ['RNA polymerase I', 'RNA polymerase II', 'RNA polymerase III', 'TATA box', 'CAAT box', 'Enhancer', 'Silencer', 'Transcription factor'],
    misconception:
      'RNA polymerase III does not make all small nuclear RNAs: most spliceosomal snRNAs (U1, U2, U4, U5) and microRNA precursors are made by RNA polymerase II; U6 is the pol III exception.',
    quick:
      'Pol I: large rRNAs (nucleolus). Pol II: mRNA, most snRNAs, miRNA precursors. Pol III: tRNA, 5S rRNA, U6. Promoter: TATA (−25 to −35), CAAT (~−80). Enhancers/silencers adjust rate. Promoter mutation → normal protein, less of it.',
    detailed: [
      'The three nuclear RNA polymerases divide the work: pol I makes the 28S, 18S and 5.8S rRNAs in the nucleolus; pol II makes pre-mRNA and most capped small RNAs; pol III makes tRNAs, 5S rRNA and a few small RNAs such as U6. Bacteria use one RNA polymerase for everything, which makes it a selective antibiotic target.',
      'Transcription starts when general transcription factors assemble on the promoter. Mutations in the TATA box or other promoter elements reduce how often transcription starts. In some β-thalassemias such a mutation gives a normal β-globin chain in reduced amounts (β⁺), in contrast with nonsense or frameshift alleles that give none.',
    ],
    takeaway: 'I = rRNA, II = mRNA (+ most snRNA, miRNA), III = tRNA/5S/U6. Promoter defects lower quantity, not structure.',
    related: ['mol-transcription-inhibitors', 'mol-rna-processing', 'mol-mutation-types'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A patient with β-thalassemia has a single-base change in the TATA box upstream of the β-globin gene. In cultured cells the mutant gene makes correctly spliced mRNA from the normal start site. What else is expected?',
        options: [
          ['a', 'Less β-globin mRNA, with a normal β-globin chain'],
          ['b', 'Normal mRNA amount with an abnormal β-globin chain', 'Promoter mutations do not change the coding sequence, so the chain is normal.'],
          ['c', 'No mRNA at all because splicing fails', 'Splicing is normal in this mutant; transcription initiation is reduced.'],
          ['d', 'A longer mRNA with an extra intron retained', 'Intron retention is a splicing defect, which this mutant does not have.'],
          ['e', 'A truncated chain from a premature stop codon', 'Nonsense mutations change the coding sequence; this change is upstream of it.'],
        ],
        answer: 'a',
        mini: 'TATA box mutations reduce transcription initiation (promoter-down): less mRNA, normal protein (β⁺ thalassemia).',
        reasoning: 'prediction',
        objectives: [`${TX}.regulation`],
        steps: ['The TATA box positions the transcription machinery; it is not translated.', 'A mutation lowers initiation frequency → less mRNA.', 'The coding sequence and splicing are normal → normal β chain in reduced amount.'],
        relevance: 'supplementary',
        relevanceNote: 'TATA-box β-thalassemia is a supplementary example; promoter function is core.',
        difficulty: 3,
      },
      {
        stem: 'Which RNA polymerase transcribes U6 snRNA?',
        options: [
          ['a', 'RNA polymerase III'],
          ['b', 'RNA polymerase II', 'Pol II makes U1, U2, U4 and U5 snRNAs; U6 is the exception made by pol III.'],
          ['c', 'RNA polymerase I', 'Pol I makes the large rRNAs in the nucleolus.'],
          ['d', 'Mitochondrial RNA polymerase', 'Spliceosomal snRNAs are encoded in the nucleus.'],
          ['e', 'Primase', 'Primase makes RNA primers for DNA replication.'],
        ],
        answer: 'a',
        mini: 'U6 snRNA is a pol III transcript; the other major spliceosomal snRNAs are made by pol II.',
        reasoning: 'recall',
        objectives: [`${TX}.polymerases`],
        relevance: 'specialist',
        relevanceNote: 'Which polymerase makes U6 snRNA is beyond Step 1; Step 1 needs pol I/II/III → rRNA/mRNA/tRNA.',
        difficulty: 2,
      },
      {
        stem: 'Why does a mutation in the TATA box lower the rate at which a gene is transcribed?',
        options: [
          ['a', 'TFIID binds poorly, so polymerase II is recruited less often'],
          ['b', 'The mutation creates a premature stop codon in the mRNA', 'The TATA box lies upstream of the start site and is not part of the coding sequence.'],
          ['c', 'The spliceosome can no longer find the first intron', 'Splice sites are defined by GU…AG at intron ends, not by the promoter.'],
          ['d', 'Enhancers can no longer bind any activator proteins', 'Enhancers are separate elements; they modulate efficiency but are not the TATA box.'],
          ['e', 'RNA polymerase I takes over transcription of the gene', 'Polymerases are not interchangeable; pol I transcribes rRNA genes only.'],
        ],
        answer: 'a',
        mini: 'The TATA-binding protein in TFIID recognizes the TATA box and nucleates the basal factor complex that positions RNA polymerase II; a weaker site means fewer initiation events.',
        reasoning: 'mechanism',
        objectives: [`${TX}.regulation`],
        relevance: 'specialist',
        relevanceNote: 'TFIID/TATA-binding protein detail is beyond Step 1; replaced by core mcq4.',
        difficulty: 3,
      },
      {
        stem: 'Why does a mutation in a gene’s promoter usually reduce the amount of its protein without changing the protein’s structure?',
        options: [
          ['a', 'The promoter controls how often transcription starts; it is not translated'],
          ['b', 'The promoter is spliced out as an intron before translation', 'Promoters lie upstream of the transcription start site and are not transcribed into pre-mRNA.'],
          ['c', 'The promoter encodes the protein’s signal sequence', 'Signal sequences are part of the coding sequence, not the promoter.'],
          ['d', 'Promoter mutations cause premature stop codons', 'Stop codons arise in coding sequence; promoters are not read by the ribosome.'],
          ['e', 'The promoter determines which amino acids tRNAs carry', 'tRNA charging is done by aminoacyl-tRNA synthetases.'],
        ],
        answer: 'a',
        mini: 'Promoters (such as the TATA box) are where the transcription machinery assembles. A weaker promoter means less mRNA, so less of a normal protein.',
        reasoning: 'mechanism',
        objectives: [`${TX}.regulation`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'RNA polymerase II transcribes the protein-coding pre-mRNAs of eukaryotic cells.', isTrue: true, correction: 'Correct: pol II makes all protein-coding pre-mRNAs.', objectives: [`${TX}.polymerases`], difficulty: 1 },
      { statement: 'Enhancers must lie immediately next to the TATA box to work.', isTrue: false, correction: 'Enhancers can act from far upstream or downstream of the promoter by binding transcription factors.', objectives: [`${TX}.regulation`], difficulty: 2 },
    ],
    clues: [
      { answer: 'NUCLEOLUS', clue: 'Nuclear site where RNA polymerase I makes ribosomal RNA', objectives: [`${TX}.polymerases`], difficulty: 2 },
      { answer: 'ENHANCER', clue: 'Distant DNA element that boosts transcription when bound by activators', objectives: [`${TX}.regulation`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-transcription-inhibitors',
    relevance: 'core',
    title: 'Transcription inhibitors: α-amanitin, rifampin and dactinomycin',
    discipline: 'pharmacology',
    alsoDisciplines: ['biochemistry', 'microbiology'],
    system: 'multisystem',
    alsoSystems: ['gastrointestinal'],
    topic: 'biochem-molecular',
    difficulty: 3,
    curriculum: [`${TX}.inhibitors`],
    objectives: ['Identify agents that block transcription and predict their clinical effects'],
    citations: [
      AMANITA,
      PM(34208167, 'Le Daré B et al. Toxic effects of amanitins: repurposing toxicities toward new therapeutics. Toxins (Basel) 2021'),
      OS_TX,
      OS_ABX,
      PM(23144800, 'Wang SY et al. Spermine attenuates the action of the DNA intercalator actinomycin D on DNA binding and inhibition of transcription and replication. PLoS One 2012'),
    ],
    facts: [
      'α-Amanitin from Amanita phalloides inhibits RNA polymerase II; hepatocyte apoptosis and liver failure follow delayed gastrointestinal symptoms that mimic gastroenteritis.',
      'Hepatotoxicity is the hallmark of amanitins, with hepatocellular failure within about three days of ingestion.',
      'RNA polymerase II is extremely sensitive to α-amanitin, RNA polymerase III moderately sensitive, and RNA polymerase I insensitive.',
      'Rifampin inhibits bacterial RNA polymerase and blocks transcription; it induces liver enzymes and so alters the metabolism of other drugs.',
      'Actinomycin D (dactinomycin) intercalates into duplex DNA and inhibits transcription and replication.',
    ],
    factRefs: [[0], [1], [2], [3], [4]],
    mechanism:
      'Each agent blocks transcription at a different point. α-Amanitin binds eukaryotic RNA polymerase II, so cells that make large amounts of protein, such as hepatocytes, die when mRNA synthesis stops. Rifampin binds the single bacterial RNA polymerase but not the eukaryotic enzymes, so it is a selective antibiotic. Dactinomycin intercalates into DNA itself, blocking the template for any polymerase.',
    associations: ['α-Amanitin', 'Amanita phalloides', 'RNA polymerase II', 'Rifampin', 'Dactinomycin', 'Intercalation', 'Fulminant hepatic failure'],
    misconception:
      'The early vomiting and diarrhea of death cap poisoning often settle before liver failure appears, so an apparent recovery does not exclude α-amanitin toxicity.',
    quick:
      'α-Amanitin (death cap): blocks RNA pol II → hepatocyte death; delayed GI phase then liver failure. Rifampin: bacterial RNA polymerase (selective; induces liver enzymes). Dactinomycin: intercalates DNA → blocks transcription.',
    detailed: [
      'After death cap ingestion there is a latent period of several hours, then severe vomiting and watery diarrhea. Symptoms may ease before transaminases rise and liver failure develops. The toxin is taken up by hepatocytes, where inhibition of RNA polymerase II stops mRNA synthesis and triggers apoptosis or necrosis.',
      'Rifampin’s selectivity comes from structural differences between bacterial and eukaryotic RNA polymerases; its main interaction problem is induction of hepatic drug metabolism. Dactinomycin is not enzyme-selective: by intercalating between base pairs it blocks the DNA template, which is why it is cytotoxic and used in some pediatric tumors.',
    ],
    takeaway: 'Death cap → RNA pol II → liver. Rifampin → bacterial RNA polymerase. Dactinomycin → DNA template.',
    related: ['mol-transcription'],
    outline: listed(MS, 'Toxins and environmental extremes'),
    mcq: [
      {
        stem: 'Cultured human cells are exposed to a low concentration of α-amanitin that blocks one RNA polymerase completely. Synthesis of which RNA stops first?',
        options: [
          ['a', 'Pre-mRNA'],
          ['b', '28S and 18S rRNA', 'These are made by RNA polymerase I, which is insensitive to α-amanitin.'],
          ['c', 'tRNA', 'tRNA is made by RNA polymerase III, which is only moderately sensitive.'],
          ['d', '5S rRNA', '5S rRNA is a pol III product, which needs higher toxin concentrations.'],
          ['e', 'Mitochondrial mRNA', 'Mitochondrial transcripts are made by a separate polymerase not targeted here.'],
        ],
        answer: 'a',
        mini: 'RNA polymerase II is the most α-amanitin-sensitive polymerase, so pre-mRNA synthesis stops first.',
        reasoning: 'prediction',
        steps: ['Sensitivity order: pol II (extreme) > pol III (moderate) > pol I (insensitive).', 'A low concentration blocks only pol II.', 'Pol II makes pre-mRNA → pre-mRNA synthesis stops.'],
        difficulty: 3,
      },
      {
        stem: 'Why does rifampin kill Mycobacterium tuberculosis without blocking transcription in the patient’s cells?',
        options: [
          ['a', 'It binds bacterial RNA polymerase, not the eukaryotic enzymes'],
          ['b', 'It intercalates only into bacterial DNA sequences', 'Rifampin is not an intercalator; dactinomycin is.'],
          ['c', 'It blocks the bacterial 30S ribosomal subunit', 'That describes aminoglycosides and tetracyclines, which act on translation.'],
          ['d', 'It inhibits DNA gyrase in the bacterial cell', 'DNA gyrase is the fluoroquinolone target.'],
          ['e', 'It is activated only by mycobacterial catalase', 'Catalase activation applies to isoniazid, not rifampin.'],
        ],
        answer: 'a',
        mini: 'Rifampin inhibits the bacterial RNA polymerase; eukaryotic nuclear RNA polymerases are structurally different and unaffected.',
        reasoning: 'mechanism',
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'RNA polymerase I is the eukaryotic polymerase most sensitive to α-amanitin.', isTrue: false, correction: 'RNA polymerase II is extremely sensitive; pol I is insensitive.', difficulty: 2 },
    ],
    clues: [
      { answer: 'RIFAMPIN', clue: 'Antimycobacterial drug that blocks bacterial RNA polymerase and induces liver enzymes', difficulty: 2 },
      { answer: 'DACTINOMYCIN', clue: 'Antitumor antibiotic that intercalates DNA and halts transcription', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-rna-processing',
    relevance: 'core',
    title: 'mRNA processing and small regulatory RNAs',
    discipline: 'biochemistry',
    system: 'multisystem',
    topic: 'biochem-molecular',
    difficulty: 2,
    curriculum: [`${RN}.processing`, `${RN}.mirna`],
    objectives: ['Describe capping, polyadenylation and splicing', 'Recognize miRNA and siRNA silencing and P-bodies'],
    citations: [
      OS_PROC,
      MIRNA,
      MIRNA2,
      PM(35680378, 'Traber GM, Yu AM. RNAi-based therapeutics and novel RNA bioengineering technologies. J Pharmacol Exp Ther 2023'),
      PM(37407370, 'Cassani M, Seydoux G. P-body-like condensates in the germline. Semin Cell Dev Biol 2024'),
      PM(1827444, 'Fischer U et al. Nuclear accumulation of U snRNPs (U snRNAs assemble with proteins into snRNPs). J Cell Biol 1991'),
    ],
    facts: [
      'A 7-methylguanosine cap is added to the 5′ end while the pre-mRNA is still being made; translation factors recognize the cap.',
      'The pre-mRNA is cleaved downstream of an AAUAAA signal and poly-A polymerase adds about 200 adenines.',
      'Spliceosomes recognize GU at the 5′ end and AG at the 3′ end of each intron; mutations at these sites, or new recognition sites, can impair splicing.',
      'MicroRNA genes are transcribed by RNA polymerase II, processed by Drosha in the nucleus and Dicer in the cytoplasm into ~21-nucleotide RNAs, and loaded into Argonaute in the RNA-induced silencing complex; binding to the 3′ UTR represses translation or promotes mRNA degradation.',
      'Exogenous small interfering RNAs (siRNAs) also act through RNA-induced silencing complexes; several siRNA drugs are approved.',
      'P-bodies are cytoplasmic condensates that hold poorly translated mRNAs for storage or degradation.',
    ],
    factRefs: [[0], [0], [0], [1, 2], [3], [4]],
    mechanism:
      'Processing turns a pre-mRNA into an exportable, translatable message: the cap and poly-A tail protect the ends and help ribosomes load, and the spliceosome (snRNAs plus proteins, the snRNPs) removes introns by recognizing their GU…AG boundaries. Small RNAs then fine-tune expression: a miRNA or siRNA guides Argonaute to a complementary mRNA and blocks or destroys it.',
    associations: ['5′ cap', 'Poly-A tail', 'AAUAAA', 'Spliceosome', 'snRNP', 'Drosha', 'Dicer', 'RISC', 'P-body'],
    misconception:
      'MicroRNAs do not alter the gene or its transcription rate: they act after transcription, on the mRNA, usually by pairing with the 3′ untranslated region.',
    quick:
      'Cap (5′ m7G) + poly-A tail (after AAUAAA) + splicing (GU…AG, snRNPs) → mature mRNA. miRNA: pol II → Drosha → Dicer → RISC → 3′ UTR → less translation. siRNA uses the same RISC machinery. P-bodies store or decay mRNA.',
    detailed: [
      'Capping happens co-transcriptionally; the cap protects the 5′ end and is recognized by translation initiation factors. Cleavage downstream of AAUAAA and addition of a long poly-A tail complete the 3′ end. Spliceosomes, built from small nuclear RNAs and proteins, recognize the intron ends and join the exons; many introns can be removed from a single transcript.',
      'MicroRNA precursors are cut by Drosha, exported and cut again by Dicer; one strand is loaded into Argonaute. Seed pairing with the target’s 3′ UTR represses translation or speeds decay. Synthetic siRNAs exploit the same pathway and are used as drugs. Untranslated mRNAs can collect in cytoplasmic P-bodies for storage or degradation.',
    ],
    takeaway: 'Mature mRNA = cap + tail + exons. Small RNAs silence mRNA after transcription via RISC.',
    related: ['mol-transcription', 'mol-splice-disease', 'mol-snrnp-autoantibodies'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A cell line lacks Dicer activity. What happens to most microRNAs?',
        options: [
          ['a', 'Mature ~21-nucleotide miRNAs are not produced, so targets are derepressed'],
          ['b', 'Primary miRNA transcripts are not made by RNA polymerase II', 'Transcription is upstream of Dicer and continues.'],
          ['c', 'miRNAs are made but cannot leave the nucleus', 'Dicer acts in the cytoplasm after export; export is not the defect.'],
          ['d', 'Target mRNAs are cleaved more efficiently than normal', 'Without mature miRNAs, silencing is lost rather than enhanced.'],
          ['e', 'The 5′ cap is no longer added to target mRNAs', 'Capping is unrelated to miRNA processing.'],
        ],
        answer: 'a',
        mini: 'Dicer makes the final small RNA; without it RISC cannot be loaded and the miRNA targets escape repression.',
        reasoning: 'mechanism',
        objectives: [`${RN}.mirna`],
        relevance: 'specialist',
        relevanceNote: 'Dicer processing is beyond Step 1 depth; Step 1 needs miRNA silences mRNA post-transcriptionally.',
        difficulty: 3,
      },
      {
        stem: 'Which processing event requires the AAUAAA sequence near the end of a pre-mRNA?',
        options: [
          ['a', 'Cleavage and addition of the poly-A tail'],
          ['b', 'Addition of the 7-methylguanosine cap', 'Capping occurs at the 5′ end early in transcription and does not need AAUAAA.'],
          ['c', 'Recognition of the 5′ splice site', 'Splice sites are marked by GU at the intron start, not AAUAAA.'],
          ['d', 'Loading of the transcript into RISC', 'RISC loading involves small RNAs, not the polyadenylation signal.'],
          ['e', 'Charging of tRNA with its amino acid', 'tRNA charging is done by aminoacyl-tRNA synthetases.'],
        ],
        answer: 'a',
        mini: 'AAUAAA is the polyadenylation signal: cleavage occurs downstream and poly-A polymerase adds the tail.',
        reasoning: 'recall',
        objectives: [`${RN}.processing`],
        difficulty: 1,
      },
      {
        stem: 'A reporter mRNA is correctly spliced and polyadenylated but made without a 7-methylguanosine cap. When it is placed in a cell extract, which step is most directly impaired?',
        options: [
          ['a', 'Recognition of the mRNA by translation initiation factors'],
          ['b', 'Removal of introns by the spliceosome', 'The mRNA is already spliced; the cap is not needed to define intron boundaries.'],
          ['c', 'Addition of the poly-A tail after the AAUAAA signal', 'The tail is already present and its addition depends on AAUAAA, not on the cap.'],
          ['d', 'Pairing of tRNA anticodons with codons in the A site', 'Codon–anticodon pairing happens after initiation and does not read the cap.'],
          ['e', 'Charging of tRNAs by aminoacyl-tRNA synthetases', 'tRNA charging happens independently of any mRNA and does not involve the cap.'],
        ],
        answer: 'a',
        mini: 'Factors involved in protein synthesis recognize the 5′ cap to help ribosomes initiate translation, so an uncapped message is translated poorly.',
        reasoning: 'mechanism',
        objectives: [`${RN}.processing`],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'MicroRNAs usually silence genes by binding the 3′ untranslated region of target mRNAs.', isTrue: true, correction: 'Correct: seed pairing to the 3′ UTR represses translation or promotes decay.', objectives: [`${RN}.mirna`], difficulty: 1 },
      { statement: 'The 5′ cap is added only after the pre-mRNA has been completely transcribed and spliced.', isTrue: false, correction: 'The cap is added while the pre-mRNA is still being synthesized.', objectives: [`${RN}.processing`], difficulty: 2 },
    ],
    clues: [
      { answer: 'SPLICEOSOME', clue: 'snRNP machine that removes introns', objectives: [`${RN}.processing`], difficulty: 1 },
      { answer: 'DICER', clue: 'Cytoplasmic ribonuclease that trims pre-miRNA to its final length', objectives: [`${RN}.mirna`], relevance: 'specialist', relevanceNote: 'Dicer is beyond Step 1 depth.', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-snrnp-autoantibodies',
    relevance: 'core',
    title: 'snRNP autoantibodies: anti-Smith and anti-U1 RNP',
    discipline: 'immunology',
    alsoDisciplines: ['biochemistry'],
    system: 'musculoskeletal-skin',
    alsoSystems: ['blood-immune'],
    topic: 'biochem-molecular',
    difficulty: 3,
    curriculum: [`${RN}.snrnp-antibodies`],
    objectives: ['Link anti-Smith and anti-U1 RNP antibodies to the spliceosome and to SLE and MCTD'],
    citations: [
      PM(21874759, 'Mahler M. Sm peptides in differentiation of autoimmune diseases. Adv Clin Chem 2011'),
      PM(38597289, 'Kubo S et al. Evolution of diagnostic criteria and new insights into clinical testing in mixed connective tissue disease. Immunol Med 2024'),
      PM(29796907, 'Dima A et al. The impact of anti-U1-RNP positivity: systemic lupus erythematosus versus mixed connective tissue disease. Rheumatol Int 2018'),
      PM(28281463, 'Flechsig A et al. What is the clinical significance of anti-Sm antibodies in systemic lupus erythematosus? Clin Exp Rheumatol 2017'),
    ],
    facts: [
      'Smith (Sm) antigens are core proteins of spliceosomal small nuclear ribonucleoproteins (snRNPs); anti-Sm antibodies are highly specific for SLE, and some Sm epitopes cross-react with U1-specific RNP proteins.',
      'Anti-Sm antibodies have low sensitivity for SLE: about a quarter of patients in one cohort at 99% specificity.',
      'Mixed connective tissue disease combines features of SLE, systemic sclerosis and inflammatory myositis with positive anti-U1 RNP antibodies; Raynaud phenomenon and pulmonary arterial hypertension are characteristic.',
      'Anti-U1 RNP positivity is mandatory for an MCTD diagnosis but also occurs in some patients with SLE (reported in roughly 13–30% of lupus cohorts).',
    ],
    factRefs: [[0], [3], [1], [2]],
    mechanism:
      'Both antibodies target the splicing machinery. The Sm proteins form the core ring shared by several spliceosomal snRNPs, while U1 RNP antibodies recognize proteins specific to the U1 particle. Why tolerance to these nuclear particles is lost is not fully understood, but their specificities are diagnostically useful: anti-Sm points strongly to SLE, while high-titer anti-U1 RNP with overlap features defines MCTD.',
    associations: ['Anti-Smith', 'Anti-U1 RNP', 'snRNP', 'Spliceosome', 'SLE', 'Mixed connective tissue disease', 'Raynaud phenomenon'],
    misconception:
      'Anti-U1 RNP is not specific for MCTD: it is required for MCTD but also appears in SLE. Anti-Sm is the specific SLE antibody, but its low sensitivity means a negative result does not exclude lupus.',
    quick:
      'Anti-Smith = antibodies to core snRNP proteins → highly specific (not sensitive) for SLE. Anti-U1 RNP = required for MCTD (SLE + scleroderma + myositis features, Raynaud, pulmonary hypertension); also seen in some SLE.',
    detailed: [
      'Spliceosomal snRNPs combine a small nuclear RNA with proteins. Sm proteins form a shared core, and the U1 particle also carries its own specific proteins (including a 70 kDa protein). Shared epitopes mean some anti-Sm and anti-U1 RNP reactivity overlaps. Autoantibodies to these particles are detected as extractable nuclear antigen antibodies.',
      'Anti-Sm is one of the most SLE-specific antibodies but is present in only a minority of patients. MCTD is defined by overlapping lupus, scleroderma and myositis features with anti-U1 RNP; some patients who meet SLE criteria also carry anti-U1 RNP and then tend to have Raynaud phenomenon and lung involvement.',
    ],
    takeaway: 'Spliceosome antigens: anti-Sm → SLE (specific); anti-U1 RNP → MCTD (required, not specific).',
    related: ['mol-rna-processing'],
    outline: listed(MS, 'Infectious, immunologic, and inflammatory disorders, including microbiologic and host response to insult'),
    mcq: [
      {
        stem: 'A 34-year-old woman has Raynaud phenomenon, puffy swollen fingers, proximal muscle weakness with raised creatine kinase and arthralgia. ANA is positive at high titer with a speckled pattern; anti-U1 RNP is strongly positive; anti-Sm and anti-dsDNA are negative. Which conclusion is best supported?',
        options: [
          ['a', 'Mixed connective tissue disease'],
          ['b', 'SLE confirmed by the anti-U1 RNP result', 'Anti-U1 RNP is not specific for SLE; anti-Sm and anti-dsDNA, the specific lupus antibodies, are negative.'],
          ['c', 'Drug-induced lupus', 'Drug-induced lupus is associated with anti-histone antibodies and a culprit drug.'],
          ['d', 'Limited systemic sclerosis (CREST)', 'CREST is associated with anticentromere antibodies and lacks myositis.'],
          ['e', 'Primary Sjögren syndrome', 'Sjögren syndrome is associated with anti-Ro/La and sicca symptoms.'],
        ],
        answer: 'a',
        mini: 'Overlap of lupus-like, scleroderma-like and myositis features with high-titer anti-U1 RNP and no anti-Sm/dsDNA fits MCTD.',
        reasoning: 'interpretation',
        steps: ['Features span three diseases: Raynaud/puffy fingers (scleroderma), myositis, arthralgia (lupus).', 'Anti-U1 RNP is strongly positive and is required for MCTD.', 'The lupus-specific antibodies (anti-Sm, anti-dsDNA) are negative → MCTD rather than SLE.'],
        difficulty: 4,
      },
      {
        stem: 'A patient with SLE has antibodies against the Smith antigen. What normal cellular structure contains this antigen?',
        options: [
          ['a', 'Spliceosomal snRNPs'],
          ['b', 'The nucleosome histone core', 'Histones are the targets of anti-histone antibodies (drug-induced lupus).'],
          ['c', 'Centromere proteins', 'Anticentromere antibodies are associated with limited systemic sclerosis.'],
          ['d', 'Mitochondrial inner membrane enzymes', 'Antimitochondrial antibodies are associated with primary biliary cholangitis.'],
          ['e', 'The signal recognition particle', 'Anti-SRP antibodies are associated with a necrotizing myopathy.'],
        ],
        answer: 'a',
        mini: 'Sm proteins form the core of spliceosomal snRNPs; anti-Sm is highly specific for SLE.',
        reasoning: 'recall',
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'A negative anti-Smith test makes SLE very unlikely.', isTrue: false, correction: 'Anti-Sm is highly specific but insensitive: most patients with SLE are anti-Sm negative.', difficulty: 2 },
    ],
    clues: [
      { answer: 'SMITH', clue: 'Lupus-specific antigen of the snRNP core', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-splice-disease',
    relevance: 'core',
    title: 'Splice-site mutations in disease',
    discipline: 'genetics',
    alsoDisciplines: ['biochemistry', 'pathology'],
    system: 'blood-immune',
    alsoSystems: ['multisystem'],
    topic: 'biochem-molecular',
    difficulty: 3,
    curriculum: [`${RN}.splice-disease`],
    objectives: ['Explain how splice-site mutations cause β-thalassemia and how spliceosome mutations arise in cancers'],
    citations: [
      OS_PROC,
      PM(32439726, 'Splice-switching oligos correct aberrant splicing from IVS2-745 β-thalassemia patient cells. Haematologica 2021'),
      PM(41614802, 'Moustakli E et al. Beyond the exome: the role of noncoding and regulatory variants in monogenic diseases. Curr Issues Mol Biol 2025'),
      PM(31473630, 'Foy A, McMullin MF. Somatic SF3B1 mutations in myelodysplastic syndrome with ring sideroblasts and chronic lymphocytic leukaemia. J Clin Pathol 2019'),
    ],
    facts: [
      'Spliceosomes recognize GU and AG at the intron ends; mutations at these sites, or mutations that create new recognition sites, can impair splicing.',
      'In β-thalassemia, aberrant splicing reduces normal β-globin, causing α/β chain imbalance with toxic α-globin aggregates.',
      'Deep intronic mutations can cause β-thalassemia by activating aberrant splicing.',
      'SF3B1, a U2 snRNP spliceosome component, is commonly mutated (somatic, usually heterozygous missense) in myelodysplastic syndromes with ring sideroblasts and in 9–15% of chronic lymphocytic leukemia.',
    ],
    factRefs: [[0], [1], [2], [3]],
    mechanism:
      'If a canonical splice site is destroyed, the spliceosome either skips the exon or uses a nearby cryptic site. If an intronic mutation creates a new site, part of the intron is included in the mRNA. Either way the message usually gains a frameshift or premature stop codon, so little or no normal protein is made. In β-thalassemia, excess unpaired α chains then precipitate and damage red cell precursors.',
    associations: ['Splice donor (GU)', 'Splice acceptor (AG)', 'Cryptic splice site', 'β-Thalassemia', 'SF3B1', 'Ring sideroblasts'],
    misconception:
      'A mutation deep inside an intron is not automatically harmless: if it creates a new splice site, intronic sequence is spliced into the mRNA and the protein is lost.',
    quick:
      'Splice-site mutation → exon skipping or cryptic site use → frameshift/premature stop → little normal protein. β-thalassemia: less β-globin → excess α chains precipitate. Acquired spliceosome mutations (SF3B1) occur in MDS with ring sideroblasts and CLL.',
    detailed: [
      'Inherited splice mutations act in cis on one gene. In β-thalassemia, a mutation that abolishes a splice site can eliminate normal mRNA (β⁰), while one that creates a competing cryptic site may leave some correctly spliced mRNA (β⁺). The amount of normal β-globin, and therefore the excess of α chains, sets the severity.',
      'Somatic mutations in spliceosome components act in trans, altering splicing of many genes at once. SF3B1 mutations are typical of myelodysplastic syndrome with ring sideroblasts and also occur in a subset of chronic lymphocytic leukemia.',
    ],
    takeaway: 'Lose a splice site or gain a new one → abnormal mRNA → less normal protein.',
    related: ['mol-rna-processing', 'mol-mutation-types'],
    outline: listed('Blood & Lymphoreticular System', 'Anemia, cytopenias, and polycythemia'),
    mcq: [
      {
        stem: 'A child with transfusion-dependent anemia has a point mutation deep in intron 2 of the β-globin gene that creates a new splice site. Reticulocyte mRNA contains an extra 135-nucleotide segment with a premature stop codon. Which sequence of events explains the anemia?',
        options: [
          ['a', 'Intronic sequence is spliced in, β chains fall and excess α chains precipitate'],
          ['b', 'Transcription of β-globin stops at the mutation, so α chains are not made', 'mRNA is made; and α-globin is encoded on a different chromosome and is unaffected.'],
          ['c', 'The β chain gains a valine and polymerizes when deoxygenated', 'That is the sickle missense mechanism, not a splicing defect.'],
          ['d', 'The cap is lost, so the mRNA cannot leave the nucleus', 'The defect is an extra segment inside the message; capping is unaffected.'],
          ['e', 'γ-globin is permanently silenced, so fetal hemoglobin disappears', 'The mutation is in the β-globin gene and does not silence γ-globin.'],
        ],
        answer: 'a',
        mini: 'The new splice site makes the spliceosome include intronic sequence; the premature stop eliminates β-globin; unpaired α chains precipitate and destroy erythroid precursors.',
        reasoning: 'multistep',
        steps: ['The mutation creates a new splice site → intronic sequence is included in the mRNA.', 'The inserted sequence contains a stop codon → little or no β-globin.', 'α chains are made normally → excess unpaired α chains precipitate → ineffective erythropoiesis.'],
        difficulty: 5,
      },
      {
        stem: 'Why can a single-base change at the GU at the start of an intron eliminate the normal protein even though no codon in the exons is altered?',
        options: [
          ['a', 'The spliceosome no longer recognizes the intron boundary'],
          ['b', 'GU is translated as a stop signal in the mature mRNA', 'Intron sequences are removed before translation; GU is a splicing signal, not a codon.'],
          ['c', 'The mutation blocks RNA polymerase II binding', 'Polymerase binding depends on the promoter, not the intron start.'],
          ['d', 'The mutation prevents the poly-A tail from being added', 'Polyadenylation depends on AAUAAA near the 3′ end.'],
          ['e', 'The intron is deleted from the gene during replication', 'The DNA is not deleted; the RNA is processed abnormally.'],
        ],
        answer: 'a',
        mini: 'GU at the 5′ end of the intron is the splice donor; losing it causes exon skipping or use of cryptic sites, giving abnormal mRNA.',
        reasoning: 'mechanism',
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Somatic mutations in the spliceosome component SF3B1 are common in myelodysplastic syndrome with ring sideroblasts.', isTrue: true, correction: 'Correct: SF3B1 mutations are typical of MDS with ring sideroblasts and also occur in some CLL.', relevance: 'specialist', relevanceNote: 'SF3B1 in MDS is specialist hematopathology.', difficulty: 2 },
    ],
    clues: [
      { answer: 'CRYPTIC', clue: 'Hidden splice site activated when the normal one is lost', relevance: 'supplementary', relevanceNote: 'The term cryptic splice site is supplementary vocabulary; splice-site mutations are core.', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-translation',
    relevance: 'core',
    title: 'tRNA charging and the steps of translation',
    discipline: 'biochemistry',
    system: 'multisystem',
    topic: 'biochem-molecular',
    difficulty: 2,
    curriculum: [`${TL}.trna`, `${TL}.steps`],
    objectives: ['Describe tRNA structure and charging with proofreading', 'Describe initiation, elongation and termination'],
    citations: [
      OS_RIBO,
      PM(15477393, 'Levinger L et al. Mitochondrial tRNA 3′ end metabolism and human disease (CCA added by CCA-adding enzyme; amino acid attached to CCA). Nucleic Acids Res 2004'),
      PM(18241793, 'Splan KE et al. In vitro assays for aminoacyl-tRNA synthetase editing activity (pre- and post-transfer editing). Methods 2008'),
      PM(18850722, 'Francklyn CS. DNA polymerases and aminoacyl-tRNA synthetases: shared mechanisms for ensuring the fidelity of gene expression. Biochemistry 2008'),
      PM(27661287, 'Rammelt C, Rossmanith W. Repairing tRNA termini: news from the 3′ end. RNA Biol 2016'),
      PM(6222284, 'Yamada Y et al. The nucleotide sequence of Bacillus subtilis tRNA genes (some genes encode the 3′ CCA, others do not). Nucleic Acids Res 1983'),
      PM(25652405, 'Sasarman F et al. CCA addition by TRNT1 in cytoplasm and mitochondria. Hum Mol Genet 2015'),
    ],
    facts: [
      'Every mature tRNA ends in 3′ CCA, and aminoacyl-tRNA synthetases attach the amino acid to this end. In all eukaryotes (and many bacteria and archaea) the CCA is not encoded in the tRNA gene and is added after transcription by the CCA-adding enzyme (TRNT1 in human cytoplasm and mitochondria); some bacterial tRNA genes do encode it.',
      'Many aminoacyl-tRNA synthetases have an editing (proofreading) activity that hydrolyzes a wrongly activated amino acid before or after transfer to the tRNA.',
      'The tRNA anticodon pairs with the mRNA codon; each aminoacyl-tRNA enters the A site, the peptide is transferred, and tRNAs move from A to P to E, exiting from the E site.',
      'Peptide bonds are formed by peptidyl transferase, an RNA-based enzyme of the large ribosomal subunit.',
      'GTP energy is needed for binding of each new aminoacyl-tRNA to the A site and for its translocation to the P site.',
      'There are no tRNAs for stop codons; a release factor enters the A site and triggers hydrolysis of the bond between the last amino acid and its tRNA.',
    ],
    factRefs: [[1, 4, 5, 6], [2, 3], [0], [0], [0], [0]],
    mechanism:
      'Accuracy is checked twice. The synthetase decides which amino acid goes on each tRNA (and edits mistakes); the ribosome checks only codon–anticodon pairing. A tRNA carrying the wrong amino acid therefore inserts it wherever its anticodon pairs. Elongation then cycles: aminoacyl-tRNA enters the A site, rRNA catalyzes the peptide bond, and translocation moves the chain to the P site until a release factor reads the stop codon.',
    associations: ['Aminoacyl-tRNA synthetase', 'CCA tail', 'Anticodon', 'A site', 'P site', 'E site', 'Peptidyl transferase', 'Release factor', 'GTP'],
    misconception:
      'The ribosome does not check which amino acid a tRNA carries: it reads only the anticodon, so synthetase proofreading is the main safeguard for matching amino acid to codon.',
    quick:
      'tRNA: 3′ CCA (added after transcription in eukaryotes) carries the amino acid; anticodon reads the codon. Synthetases charge and proofread. Initiation at AUG (Met), elongation A → P → E (rRNA peptidyl transferase, GTP), termination by release factor at the A site.',
    detailed: [
      'Aminoacyl-tRNA synthetases first activate the amino acid with ATP and then transfer it to the 3′ CCA end of the matching tRNA. Editing domains hydrolyze misactivated amino acids or mischarged tRNAs, much as DNA polymerase exonucleases remove misincorporated bases.',
      'Translation begins at AUG with an initiator methionyl-tRNA and initiation factors. In elongation, each aminoacyl-tRNA enters the A site (GTP-dependent), peptidyl transferase in the large-subunit rRNA moves the chain onto it, and translocation (GTP-dependent) shifts the tRNAs to the P and E sites. A stop codon in the A site recruits a release factor, and the finished chain is released.',
    ],
    takeaway: 'Synthetase picks the amino acid; the ribosome only checks the anticodon. Elongation: A → P → E; rRNA makes the bond.',
    related: ['mol-ribosome-antibiotics', 'mol-translation-toxins'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A tRNA with an anticodon for cysteine is experimentally charged with alanine and added to a translation system. What happens at cysteine codons?',
        options: [
          ['a', 'Alanine is inserted, because the ribosome reads only the anticodon'],
          ['b', 'Cysteine is inserted, because the ribosome detects the wrong amino acid', 'The ribosome checks codon–anticodon pairing, not the amino acid.'],
          ['c', 'Translation stops, because a release factor binds the mischarged tRNA', 'Release factors recognize stop codons, not mischarged tRNAs.'],
          ['d', 'The ribosome skips the codon and shifts the frame', 'A correctly pairing anticodon is accepted; no frameshift occurs.'],
          ['e', 'Peptidyl transferase rejects alanine at the A site', 'Peptidyl transferase forms peptide bonds without checking amino acid identity.'],
        ],
        answer: 'a',
        mini: 'Fidelity of amino acid choice depends on synthetases; once charged, the tRNA delivers whatever it carries to any codon its anticodon pairs with.',
        reasoning: 'mechanism',
        objectives: [`${TL}.trna`],
        difficulty: 3,
      },
      {
        stem: 'During elongation, after the peptide bond has formed, where is the growing chain attached?',
        options: [
          ['a', 'To the tRNA in the A site, which then moves to the P site'],
          ['b', 'To the tRNA in the E site, which then leaves', 'The E site holds the empty tRNA that has given up the chain.'],
          ['c', 'To the release factor in the A site', 'Release factors act only at stop codons.'],
          ['d', 'To the 50S rRNA until the stop codon is reached', 'rRNA catalyzes the bond but does not hold the chain.'],
          ['e', 'To the initiator tRNA throughout translation', 'The chain is transferred to each new aminoacyl-tRNA in turn.'],
        ],
        answer: 'a',
        mini: 'Peptidyl transfer moves the chain onto the A-site tRNA; translocation then shifts it into the P site and the empty tRNA to the E site.',
        reasoning: 'recall',
        objectives: [`${TL}.steps`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'In human cells, the CCA sequence at the 3′ end of each tRNA is encoded in its tRNA gene.', isTrue: false, correction: 'In eukaryotes, including humans, CCA is added after transcription by the CCA-adding enzyme (TRNT1); only some bacterial tRNA genes encode it. It is where the amino acid is attached.', objectives: [`${TL}.trna`], difficulty: 2 },
      { statement: 'Peptide bonds are formed by an RNA component of the large ribosomal subunit.', isTrue: true, correction: 'Correct: peptidyl transferase is an RNA-based enzyme (a ribozyme).', objectives: [`${TL}.steps`], difficulty: 1 },
    ],
    clues: [
      { answer: 'ANTICODON', clue: 'Three-base loop of tRNA that pairs with a codon', objectives: [`${TL}.trna`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-ribosome-antibiotics',
    relevance: 'core',
    title: 'Ribosomes and protein synthesis inhibitors',
    discipline: 'microbiology',
    alsoDisciplines: ['pharmacology', 'biochemistry'],
    system: 'multisystem',
    topic: 'biochem-molecular',
    difficulty: 3,
    curriculum: [`${TL}.ribosomes`],
    objectives: ['Compare 70S and 80S ribosomes and classify antibiotics by the subunit they bind'],
    citations: [
      OS_RIBO,
      OS_ABX,
    ],
    facts: [
      'Eukaryotic ribosomes are 80S (40S + 60S); prokaryotic ribosomes are 70S (30S + 50S).',
      'Aminoglycosides and tetracyclines bind the 30S subunit; macrolides, lincosamides, chloramphenicol and oxazolidinones bind the 50S subunit.',
      'Aminoglycosides cause codon–anticodon mismatches and faulty proteins and are bactericidal; tetracyclines block tRNA association with the ribosome and are bacteriostatic.',
      'Macrolides and lincosamides block peptide bond formation; chloramphenicol blocks peptidyl transfer; oxazolidinones interfere with formation of the initiation complex.',
      'Tetracycline blocks the A site on the bacterial ribosome.',
    ],
    factRefs: [[0], [1], [1], [1, 0], [0]],
    mechanism:
      'Antibiotics exploit structural differences between bacterial 70S and human 80S ribosomes. Drugs binding the small subunit interfere with decoding (aminoglycosides cause misreading; tetracyclines keep aminoacyl-tRNA out of the A site). Drugs binding the large subunit interfere with peptide bond formation, initiation or the exit of the chain.',
    associations: ['70S', '80S', '30S subunit', '50S subunit', 'Aminoglycosides', 'Tetracyclines', 'Macrolides', 'Clindamycin', 'Chloramphenicol', 'Linezolid'],
    misconception:
      'Not every protein synthesis inhibitor is bacteriostatic: aminoglycosides are bactericidal because the mistranslated proteins they cause damage the bacterial membrane.',
    quick:
      'Bacteria 70S (30S + 50S); humans 80S (40S + 60S). 30S: aminoglycosides (misreading, cidal), tetracyclines (block A site). 50S: macrolides, clindamycin (peptide bond), chloramphenicol (peptidyl transfer), linezolid (initiation complex).',
    detailed: [
      'The S values describe sedimentation, so subunits do not add arithmetically (30S + 50S = 70S). The bacterial ribosome differs enough from the cytoplasmic 80S ribosome to allow selective drugs.',
      'On the 30S subunit, aminoglycosides distort decoding so wrong amino acids are inserted, producing faulty membrane proteins and cell death; tetracyclines block aminoacyl-tRNA binding to the A site. On the 50S subunit, macrolides and lincosamides block peptide bond formation and chain progression, chloramphenicol blocks peptidyl transfer, and oxazolidinones prevent assembly of the initiation complex.',
    ],
    takeaway: '30S: aminoglycosides, tetracyclines. 50S: macrolides, clindamycin, chloramphenicol, linezolid.',
    related: ['mol-translation'],
    outline: found(MS, 'Infectious, immunologic, and inflammatory disorders, including microbiologic and host response to insult'),
    mcq: [
      {
        stem: 'Drug X binds the bacterial small subunit and prevents aminoacyl-tRNA from occupying the A site. Drug Y binds the large subunit and blocks peptide bond formation. Which pairing fits?',
        options: [
          ['a', 'X doxycycline; Y azithromycin'],
          ['b', 'X azithromycin; Y doxycycline', 'Reversed: azithromycin is a 50S macrolide and doxycycline a 30S tetracycline.'],
          ['c', 'X gentamicin; Y linezolid', 'Gentamicin binds 30S but causes misreading; linezolid blocks initiation complex formation rather than peptide bond formation.'],
          ['d', 'X linezolid; Y streptomycin', 'Linezolid binds 50S and streptomycin binds 30S, the opposite of the descriptions.'],
          ['e', 'X clindamycin; Y tetracycline', 'Clindamycin binds 50S and tetracycline binds 30S, the opposite of the descriptions.'],
        ],
        answer: 'a',
        mini: 'Tetracyclines (doxycycline) block the A site on 30S; macrolides (azithromycin) block peptide bond formation on 50S.',
        reasoning: 'comparison',
        steps: ['Small subunit + A-site blockade → tetracycline class (doxycycline).', 'Large subunit + peptide bond blockade → macrolide or lincosamide (azithromycin).', 'Check the distractors against subunit and mechanism.'],
        difficulty: 3,
      },
      {
        stem: 'Why are aminoglycosides bactericidal while tetracyclines are bacteriostatic, although both bind the 30S subunit?',
        options: [
          ['a', 'Aminoglycosides cause misreading, so faulty proteins damage the membrane'],
          ['b', 'Aminoglycosides also bind human 80S ribosomes', 'Selective toxicity depends on not binding host ribosomes; that would not explain killing bacteria.'],
          ['c', 'Tetracyclines are inactivated inside bacteria', 'Tetracyclines act inside bacteria; their effect is reversible blockade, not inactivation.'],
          ['d', 'Aminoglycosides inhibit DNA gyrase as well', 'DNA gyrase is the fluoroquinolone target.'],
          ['e', 'Tetracyclines bind only the 50S subunit', 'Tetracyclines bind the 30S subunit.'],
        ],
        answer: 'a',
        mini: 'In the standard explanation, aminoglycoside-induced codon–anticodon mismatches produce faulty proteins that insert into and disrupt the membrane, killing the cell.',
        reasoning: 'mechanism',
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Human cytoplasmic ribosomes are 70S, made of 30S and 50S subunits.', isTrue: false, correction: 'Human cytoplasmic ribosomes are 80S (40S + 60S); 70S ribosomes are prokaryotic.', difficulty: 1 },
    ],
    clues: [
      { answer: 'LINEZOLID', clue: 'Oxazolidinone that stops the 50S–30S initiation complex from forming', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-translation-toxins',
    relevance: 'core',
    title: 'Toxins that halt eukaryotic translation',
    discipline: 'microbiology',
    alsoDisciplines: ['biochemistry'],
    system: 'multisystem',
    topic: 'biochem-molecular',
    difficulty: 3,
    curriculum: [`${TL}.toxins`],
    objectives: ['Match diphtheria toxin, Pseudomonas exotoxin A, Shiga toxin and ricin to their molecular targets'],
    citations: [
      TOXINS,
      PM(6267047, 'Oppenheimer NJ, Bodley JW. Diphtheria toxin: site and configuration of ADP-ribosylation of diphthamide in elongation factor 2. J Biol Chem 1981'),
      RICIN_STX,
      PM(37484018, 'Masilamani AP et al. Enhanced cytotoxicity of a Pseudomonas exotoxin A based immunotoxin (ER route; ADP-ribosylation of eEF2). Front Pharmacol 2023'),
      GENE(1938, 'EEF2 eukaryotic translation elongation factor 2'),
    ],
    facts: [
      'Diphtheria toxin and Pseudomonas exotoxin A ADP-ribosylate and inactivate elongation factor 2 at diphthamide, a modified histidine; the two toxins differ in structure but share the same reaction mechanism.',
      'Ricin and Shiga toxins are RNA N-glycosidases that irreversibly inactivate eukaryotic ribosomes by removing an adenine from the sarcin–ricin loop of 28S rRNA.',
      'Exotoxin A reaches the cytosol from the endoplasmic reticulum, where it ADP-ribosylates eukaryotic elongation factor 2, inhibiting ribosomes and causing apoptosis.',
      'Elongation factor 2 is a GTP-binding protein essential for protein synthesis; it promotes GTP-dependent translocation of the nascent chain from the A site to the P site.',
    ],
    factRefs: [[0, 1], [2], [3], [4]],
    mechanism:
      'All four toxins stop protein synthesis catalytically, so a few molecules can kill a cell. Two attack the elongation factor: diphtheria toxin and exotoxin A transfer ADP-ribose from NAD to EF-2, which can then no longer translocate the ribosome. Two attack the ribosome itself: Shiga toxin and ricin remove one adenine from 28S rRNA in the large subunit, so elongation factors can no longer act.',
    associations: ['Diphtheria toxin', 'Pseudomonas exotoxin A', 'EF-2', 'Diphthamide', 'ADP-ribosylation', 'Shiga toxin', 'Ricin', '28S rRNA'],
    misconception:
      'Shiga toxin does not ADP-ribosylate EF-2: it is an N-glycosidase that depurinates 28S rRNA, like ricin, whereas diphtheria toxin and exotoxin A modify EF-2.',
    quick:
      'EF-2 (ADP-ribosylation at diphthamide): diphtheria toxin, Pseudomonas exotoxin A. 28S rRNA of the 60S subunit (depurination): Shiga toxin, ricin. Result: eukaryotic translation stops → cell death.',
    detailed: [
      'Diphtheria toxin and exotoxin A enter cells by different routes but have equivalent catalytic domains that attach ADP-ribose to diphthamide on EF-2. Modified EF-2 still binds GTP and the ribosome but cannot support translation.',
      'Ricin (from castor beans) and Shiga toxins (Shigella dysenteriae and Shiga toxin-producing E. coli) cleave a specific adenine from the sarcin–ricin loop of 28S rRNA. The damaged large subunit cannot engage elongation factors, so protein synthesis halts and the cell dies.',
    ],
    takeaway: 'EF-2: diphtheria, exotoxin A. 28S rRNA: Shiga, ricin.',
    related: ['mol-translation'],
    outline: found(MS, 'Infectious, immunologic, and inflammatory disorders, including microbiologic and host response to insult'),
    mcq: [
      {
        stem: 'Toxin P is added to a cell-free translation system and is found to modify a protein factor; toxin Q leaves all proteins intact but alters a single nucleotide of 28S rRNA. Both stop translation. Which pairing is correct?',
        options: [
          ['a', 'P diphtheria toxin; Q ricin'],
          ['b', 'P ricin; Q Pseudomonas exotoxin A', 'Reversed: ricin modifies rRNA, and exotoxin A modifies the protein EF-2.'],
          ['c', 'P Shiga toxin; Q diphtheria toxin', 'Shiga toxin depurinates rRNA and diphtheria toxin modifies EF-2, the opposite of the findings.'],
          ['d', 'P cholera toxin; Q Shiga toxin', 'Cholera toxin ADP-ribosylates a G protein and does not stop translation.'],
          ['e', 'P exotoxin A; Q tetracycline', 'Tetracycline is a 30S-binding antibiotic, not a 28S rRNA-modifying toxin.'],
        ],
        answer: 'a',
        mini: 'A protein factor is modified → EF-2 ADP-ribosylation (diphtheria toxin or exotoxin A). A 28S rRNA nucleotide is altered → depurination by ricin or Shiga toxin.',
        reasoning: 'interpretation',
        steps: ['Protein modified + translation stops → ADP-ribosylation of EF-2 → diphtheria toxin or exotoxin A.', '28S rRNA altered → N-glycosidase depurination → ricin or Shiga toxin.', 'Match each to the options.'],
        difficulty: 3,
      },
      {
        stem: 'What is the molecular target of Pseudomonas exotoxin A?',
        options: [
          ['a', 'Elongation factor 2'],
          ['b', '28S ribosomal RNA', 'That is the target of ricin and Shiga toxin.'],
          ['c', 'The 30S ribosomal subunit', 'Bacterial toxins that kill human cells act on eukaryotic translation, not the 30S subunit.'],
          ['d', 'Gs α subunit', 'Gs α is ADP-ribosylated by cholera toxin, which raises cAMP.'],
          ['e', 'RNA polymerase II', 'RNA polymerase II is inhibited by α-amanitin.'],
        ],
        answer: 'a',
        mini: 'Exotoxin A, like diphtheria toxin, ADP-ribosylates EF-2 at diphthamide.',
        reasoning: 'recall',
        difficulty: 1,
      },
    ],
    tf: [
      { statement: 'Ricin and Shiga toxin both inactivate ribosomes by removing an adenine from 28S rRNA.', isTrue: true, correction: 'Correct: both are RNA N-glycosidases acting on the sarcin–ricin loop.', difficulty: 2 },
    ],
    clues: [
      { answer: 'DIPHTHAMIDE', clue: 'Modified histidine on EF-2 that diphtheria toxin targets', relevance: 'specialist', relevanceNote: 'Diphthamide is beyond Step 1; the Step 1 point is EF-2 ADP-ribosylation.', difficulty: 2 },
      { answer: 'RICIN', clue: 'Castor bean toxin that depurinates 28S rRNA', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-protein-folding',
    relevance: 'core',
    title: 'Protein modification, folding and quality control',
    discipline: 'biochemistry',
    alsoDisciplines: ['cell-biology'],
    system: 'multisystem',
    alsoSystems: ['respiratory'],
    topic: 'biochem-molecular',
    difficulty: 3,
    curriculum: [`${PP}.ptm`, `${PP}.folding`],
    objectives: ['Recognize common post-translational modifications', 'Explain ER quality control and contrast loss-of-function with toxic gain-of-function misfolding'],
    citations: [
      PM(37244925, 'Wu X et al. Targeting protein modifications in metabolic diseases (range of PTMs). Signal Transduct Target Ther 2023'),
      ERAD,
      CFTR_CHAP,
      MP('gene/cftr', 'CFTR gene'),
      A1AT_LIVER,
      PM(30056836, 'Hwang J, Qi L. Quality control in the endoplasmic reticulum: crosstalk between ERAD and UPR pathways. Trends Biochem Sci 2018'),
      COLL_SP,
    ],
    facts: [
      'Post-translational modifications include phosphorylation, acetylation, methylation, ubiquitination, glycosylation and others, expanding the functional diversity of the proteome.',
      'In ER-associated degradation (ERAD) misfolded proteins are selected, tagged with polyubiquitin, removed from the ER and degraded by the cytoplasmic 26S proteasome.',
      'F508del CFTR is retained in the ER, recognized by molecular chaperones and rapidly targeted for proteasomal degradation, so little reaches the cell membrane.',
      'The α1-antitrypsin Z protein folds improperly, is retained within hepatocytes as polymers and triggers a liver injury cascade.',
      'Accumulation of misfolded proteins in the ER activates the unfolded protein response.',
      'Collagen undergoes vitamin C-dependent hydroxylation and glycosylation in the rough endoplasmic reticulum.',
    ],
    factRefs: [[0], [1], [2, 3], [4], [5], [6]],
    mechanism:
      'Chaperones help new proteins fold in the ER and hold those that fail. Proteins that cannot fold are ubiquitinated and destroyed by the proteasome. The outcome then depends on the protein: if it is cleared efficiently, the disease is loss of function at its destination (ΔF508 CFTR missing from the epithelial membrane). If it escapes degradation and aggregates, it injures the cell that makes it as well (Z α1-antitrypsin polymers in hepatocytes).',
    associations: ['Phosphorylation', 'Glycosylation', 'Ubiquitination', 'Chaperone', 'ERAD', '26S proteasome', 'Unfolded protein response', 'ΔF508 CFTR', 'Z α1-antitrypsin'],
    misconception:
      'Misfolding does not always cause disease by the same route: ΔF508 CFTR is cleared, causing loss of function in epithelia, whereas Z α1-antitrypsin accumulates and adds hepatocyte toxicity to the loss of function in the lung.',
    quick:
      'PTMs: phosphorylation, glycosylation, hydroxylation, methylation, acetylation, ubiquitination. Misfolded ER proteins → chaperones → ubiquitin → proteasome (ERAD). ΔF508 CFTR: degraded → loss of function. Z α1AT: polymers retained → liver injury + lung loss of function.',
    detailed: [
      'Modifications change a protein’s activity, location or lifetime: kinases add phosphate, glycosyltransferases add sugars in the ER and Golgi, and ubiquitin ligases mark proteins for proteasomal destruction. In collagen, vitamin C-dependent hydroxylation of proline and lysine in the RER is needed for a stable triple helix.',
      'ER quality control combines chaperones, ubiquitination and retrotranslocation to the proteasome, and accumulation of misfolded protein activates the unfolded protein response. ΔF508 CFTR is efficiently removed by this system, so the defect is absence of a functional chloride channel. The Z α1-antitrypsin variant forms polymers that are retained in hepatocytes, injuring the liver while serum levels fall.',
    ],
    takeaway: 'Misfolded and cleared → loss of function (ΔF508). Misfolded and retained → loss of function plus toxicity (Z α1AT).',
    related: ['mol-a1at', 'mol-collagen-synthesis'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'Both ΔF508 CFTR and the Z variant of α1-antitrypsin misfold in the endoplasmic reticulum. Why does the Z variant injure the cell that produces it while ΔF508 CFTR mainly causes disease by its absence?',
        options: [
          ['a', 'Z protein polymerizes and is retained; ΔF508 is degraded by the proteasome'],
          ['b', 'Z protein is secreted in excess and digests the liver', 'Z protein is under-secreted; serum levels fall.'],
          ['c', 'ΔF508 CFTR is secreted normally but cannot bind chloride', 'ΔF508 CFTR is largely retained in the ER and degraded before reaching the membrane.'],
          ['d', 'Only the Z protein is modified by ubiquitin', 'Both enter ER quality-control pathways; the difference is what escapes degradation.'],
          ['e', 'ΔF508 CFTR is made only in cells that do not divide', 'Cell division is not the explanation; the fate of the misfolded protein is.'],
        ],
        answer: 'a',
        mini: 'ΔF508 CFTR is cleared by ERAD, so cells simply lack the channel. Z α1AT forms polymers that are retained in hepatocytes, injuring them (gain of toxic function) while serum levels fall.',
        reasoning: 'comparison',
        objectives: [`${PP}.folding`],
        steps: ['Both proteins misfold in the ER and are recognized by quality control.', 'ΔF508 CFTR is ubiquitinated and degraded → loss of function at the membrane only.', 'Z α1AT polymerizes and accumulates → hepatocyte injury plus low serum levels.'],
        difficulty: 4,
      },
      {
        stem: 'A misfolded membrane protein in the ER is tagged with a chain of ubiquitin. What is the next fate of most such proteins?',
        options: [
          ['a', 'Extraction from the ER and degradation by the proteasome'],
          ['b', 'Transport to the Golgi for glycosylation', 'Ubiquitination marks the protein for destruction, not further processing.'],
          ['c', 'Secretion by exocytosis', 'Quality control prevents misfolded proteins from leaving the ER.'],
          ['d', 'Degradation by lysosomal acid hydrolases inside the ER', 'ERAD substrates are degraded in the cytoplasm by the 26S proteasome.'],
          ['e', 'Phosphorylation that restores normal folding', 'Phosphorylation regulates activity; it does not refold proteins.'],
        ],
        answer: 'a',
        mini: 'In ERAD, polyubiquitinated proteins are retrotranslocated out of the ER and degraded by the 26S proteasome.',
        reasoning: 'mechanism',
        objectives: [`${PP}.folding`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'Ubiquitination of a protein commonly targets it for degradation by the proteasome.', isTrue: true, correction: 'Correct: polyubiquitin chains commit proteins, including misfolded ER proteins, to proteasomal destruction.', objectives: [`${PP}.ptm`], difficulty: 1 },
    ],
    clues: [
      { answer: 'PROTEASOME', clue: 'Barrel-shaped complex that destroys ubiquitin-tagged proteins', objectives: [`${PP}.folding`], difficulty: 1 },
      { answer: 'CHAPERONE', clue: 'Protein that helps others fold and holds those that fail', objectives: [`${PP}.folding`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-a1at',
    relevance: 'core',
    title: 'α1-Antitrypsin deficiency',
    discipline: 'pathology',
    alsoDisciplines: ['biochemistry', 'genetics'],
    system: 'respiratory',
    alsoSystems: ['gastrointestinal', 'multisystem'],
    topic: 'biochem-molecular',
    difficulty: 3,
    curriculum: [`${PP}.a1at`],
    objectives: ['Explain how the misfolded Z protein causes both lung and liver disease'],
    citations: [
      A1AT_MP,
      SERPINA1_MP,
      A1AT_LIVER,
      PM(25311024, 'Bouchecareilh M. Alpha-1-antitrypsin deficiency (review). Med Sci (Paris) 2014'),
      PM(6189389, 'Qizilbash A, Young-Pong O. Alpha 1 antitrypsin liver disease: differential diagnosis of PAS-positive, diastase-resistant globules in liver cells. Am J Clin Pathol 1983'),
      PM(41370566, 'Sokoloski CS et al. Prevalence of SERPINA1 mutations in a bronchiectasis cohort (panlobular, diffuse, lower-lobe predominant emphysema). J Bras Pneumol 2025'),
      PM(41241741, 'Höger P et al. Quantitative analysis of chest CT in alpha-1-antitrypsin deficiency (basal-predominant emphysema, maxima in middle lobe and lingula). Respir Res 2025'),
    ],
    facts: [
      'α1-Antitrypsin deficiency is inherited in an autosomal codominant pattern; the Z allele produces very little α1-antitrypsin, and ZZ individuals have a high risk of emphysema and liver disease.',
      'α1-Antitrypsin protects tissues from neutrophil elastase; Z protein polymerizes and cannot leave the liver, and the accumulated polymers damage it.',
      'Z-α1AT polymers accumulate in the hepatocyte endoplasmic reticulum, causing cell death and a severe reduction of serum α1AT, so the lung loses its antiprotease protection.',
      'α1AT deficiency is the most common genetic cause of liver disease in children; liver disease is variable and not all ZZ individuals develop it.',
      'Hepatocytes in α1AT liver disease contain periportal PAS-positive, diastase-resistant globules that stain for α1AT; cirrhosis was present in most autopsy livers with such globules.',
      'Emphysema in α1AT deficiency is typically panlobular (panacinar) and basal-predominant; quantitative CT in severe deficiency found it most marked in the middle lobe and lingula, challenging the classic “lower lobes” teaching.',
    ],
    factRefs: [[0], [1, 0], [3], [3, 2], [4], [5, 6]],
    mechanism:
      'The Z mutation makes α1-antitrypsin fold slowly and link into polymers in the hepatocyte ER. Two problems follow from one protein. In the liver, retained polymers injure hepatocytes (gain of toxic function), causing neonatal cholestasis, hepatitis and cirrhosis. In the lung, too little α1-antitrypsin reaches the alveoli, so neutrophil elastase destroys alveolar walls unopposed (loss of function), causing early emphysema, worse with smoking.',
    associations: ['SERPINA1', 'Z allele', 'PiZZ', 'Neutrophil elastase', 'Panacinar emphysema', 'PAS-positive globules', 'Neonatal cholestasis', 'Cirrhosis'],
    misconception:
      'Lung and liver disease do not always occur together: liver disease is variable and not all ZZ individuals develop it, because the liver is injured by retained protein while the lung is injured by the missing antiprotease, which smoking accelerates.',
    quick:
      'SERPINA1 Z allele (codominant): misfolded protein polymerizes in hepatocyte ER → PAS+ diastase-resistant globules, neonatal cholestasis, cirrhosis (toxic gain). Low serum α1AT → unopposed neutrophil elastase → early panacinar, usually basal-predominant emphysema (loss of function).',
    detailed: [
      'Normal α1-antitrypsin is made in the liver and circulates to the lungs, where it inhibits neutrophil elastase. The Z variant is largely retained in hepatocytes as polymers, so serum levels are very low. Each allele contributes to the serum level (codominant inheritance): MZ carriers have intermediate levels and a slightly increased risk.',
      'Lung disease reflects missing antiprotease: emphysema develops at a young age, especially in smokers, and typically involves the whole acinus (panlobular), predominantly in the lower zones; CT studies suggest the middle lobe and lingula can be most affected. Liver disease reflects retained protein: infants may present with prolonged jaundice, and adults with chronic hepatitis or cirrhosis. Biopsy shows PAS-positive, diastase-resistant globules of α1-antitrypsin in periportal hepatocytes.',
    ],
    takeaway: 'One misfolded protein, two mechanisms: retained in the liver (toxicity), missing in the lung (elastase unopposed).',
    related: ['mol-protein-folding'],
    outline: listed(MS, GEN),
    mcq: [
      {
        stem: 'A liver biopsy from a 6-week-old with prolonged conjugated jaundice shows periportal hepatocytes with globules that are PAS-positive after diastase digestion. Serum α1-antitrypsin is very low. What do the globules contain, and why are they there?',
        options: [
          ['a', 'Polymerized α1-antitrypsin retained in the ER'],
          ['b', 'Glycogen that cannot be broken down', 'Diastase digests glycogen, so diastase-resistant globules are not glycogen.'],
          ['c', 'Copper bound to metallothionein', 'Copper accumulation suggests Wilson disease and is not PAS-positive globules.'],
          ['d', 'Bilirubin crystals from biliary obstruction', 'Bile pigment is not PAS-positive diastase-resistant globules.'],
          ['e', 'Neutrophil elastase complexes taken up from blood', 'The globules consist of the patient’s own misfolded α1-antitrypsin.'],
        ],
        answer: 'a',
        mini: 'Z α1-antitrypsin polymerizes in the hepatocyte ER; the retained protein forms PAS-positive, diastase-resistant globules and injures the liver while serum levels fall.',
        reasoning: 'interpretation',
        steps: ['Diastase resistance excludes glycogen.', 'Very low serum α1AT with hepatocyte globules → protein made but not secreted.', 'Z protein polymerizes and is retained in the ER → globules + neonatal liver injury.'],
        difficulty: 4,
      },
      {
        stem: 'Why does α1-antitrypsin deficiency cause emphysema?',
        options: [
          ['a', 'Neutrophil elastase is left uninhibited in the alveoli'],
          ['b', 'Polymerized α1AT deposits in the alveolar walls', 'Polymers accumulate in hepatocytes; the lung problem is too little circulating inhibitor.'],
          ['c', 'α1AT directly synthesizes alveolar elastin', 'α1AT is a protease inhibitor; it does not synthesize elastin.'],
          ['d', 'Mucus plugs obstruct the small airways', 'Mucus plugging is the mechanism in cystic fibrosis and chronic bronchitis.'],
          ['e', 'Smoking-induced mutations inactivate SERPINA1', 'The defect is inherited; smoking accelerates protease damage.'],
        ],
        answer: 'a',
        mini: 'Too little α1-antitrypsin reaches the lung, so neutrophil elastase digests alveolar walls (loss of antiprotease function).',
        reasoning: 'mechanism',
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'α1-Antitrypsin deficiency is the most common genetic cause of liver disease in children.', isTrue: true, correction: 'Correct: retained Z protein can cause neonatal cholestasis and later chronic liver disease.', difficulty: 2 },
      { statement: 'In α1-antitrypsin deficiency the liver makes too little of the protein, so hepatocytes are spared.', isTrue: false, correction: 'The Z protein is made but retained as polymers in hepatocytes, which injures the liver.', difficulty: 2 },
    ],
    clues: [
      { answer: 'ELASTASE', clue: 'Neutrophil protease left unopposed in α1-antitrypsin deficiency', difficulty: 1 },
      { answer: 'PANACINAR', clue: 'Whole-acinus pattern of emphysema typical of α1-antitrypsin deficiency', difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-collagen-synthesis',
    relevance: 'core',
    title: 'Collagen synthesis',
    discipline: 'biochemistry',
    alsoDisciplines: ['nutrition'],
    system: 'musculoskeletal-skin',
    alsoSystems: ['multisystem'],
    topic: 'biochem-molecular',
    difficulty: 3,
    curriculum: [`${CO}.synthesis`],
    objectives: ['Order the steps of collagen synthesis by location', 'Predict the effects of vitamin C or copper deficiency'],
    citations: [
      COLL_SP,
      LOX,
      PM(12362985, 'Gajko-Galicka A. Mutations in type I collagen genes resulting in osteogenesis imperfecta in humans (glycine residues crucial to triple helix). Acta Biochim Pol 2002'),
      PM(22708567, 'Yamauchi M, Sricholpech M. Lysine post-translational modifications of collagen. Essays Biochem 2012'),
    ],
    facts: [
      'Collagen consists of three polypeptide chains wound into a triple helix; glycine occupies every third position, allowing tight packing, and the chains are rich in proline, hydroxyproline and hydroxylysine.',
      'Pro-α chains are modified in the rough ER by glycosylation and vitamin C-dependent hydroxylation; the procollagen triple helix is secreted and its terminal propeptides are cleaved outside the cell to form tropocollagen.',
      'Scurvy results from impaired hydroxylation in vitamin C deficiency, producing weak connective tissue with bleeding gums and poor wound healing.',
      'Lysyl oxidases are copper-dependent enzymes required for covalent cross-linking of collagen and elastin in the extracellular matrix.',
      'Inside the cell, specific lysines are first hydroxylated and then specific hydroxylysines in the helical domain are glycosylated (galactose or glucose–galactose); outside the cell, telopeptide lysines and hydroxylysines are converted to reactive aldehydes that form cross-links.',
    ],
    factRefs: [[0, 2], [0], [0], [1], [3]],
    mechanism:
      'Collagen is built inside the fibroblast and assembled outside it. Inside: pre-pro-α chains with Gly-X-Y repeats enter the rough ER, proline and lysine are hydroxylated (prolyl and lysyl hydroxylases need vitamin C), hydroxylysines are glycosylated, and three chains zip into a procollagen triple helix that is secreted. Outside: propeptides are cleaved to tropocollagen, which self-assembles into fibrils that lysyl oxidase (copper) cross-links for tensile strength.',
    associations: ['Gly-X-Y', 'Prolyl hydroxylase', 'Vitamin C', 'Procollagen', 'Procollagen peptidase', 'Tropocollagen', 'Lysyl oxidase', 'Copper'],
    misconception:
      'Vitamin C is needed for hydroxylation inside the cell, not for cross-linking outside it; impaired cross-linking points to lysyl oxidase or copper (for example, Menkes disease).',
    quick:
      'RER: Gly-X-Y chains → hydroxylation of Pro/Lys (vitamin C) → glycosylation of hydroxylysine → triple helix (procollagen) → secretion. Outside: propeptides cleaved (tropocollagen) → fibrils → lysyl oxidase cross-links (copper).',
    detailed: [
      'Glycine at every third position is essential because only its single-hydrogen side chain fits in the center of the triple helix. Hydroxyproline stabilizes the helix through hydrogen bonding, which is why defective hydroxylation in scurvy gives unstable collagen, fragile capillaries, bleeding gums and poor wound healing.',
      'Procollagen is soluble because of its propeptides; cleavage outside the cell allows tropocollagen to assemble into fibrils. Lysyl oxidase, a copper enzyme, converts lysine and hydroxylysine side chains into reactive aldehydes that form covalent cross-links, giving fibrils their tensile strength. Defects in cleavage cause some Ehlers–Danlos types, and copper transport defects (Menkes) impair cross-linking.',
    ],
    takeaway: 'Inside: hydroxylate (vitamin C), glycosylate, triple helix. Outside: cleave propeptides, cross-link (copper).',
    related: ['mol-collagen-types', 'mol-osteogenesis-imperfecta', 'mol-menkes'],
    outline: listed(MS, 'Nutrition'),
    mcq: [
      {
        stem: 'A 58-year-old man who lives alone and eats almost no fruit or vegetables has swollen bleeding gums, perifollicular hemorrhages and a leg wound that will not heal. Which step of collagen synthesis is impaired?',
        options: [
          ['a', 'Hydroxylation of proline and lysine in the rough ER'],
          ['b', 'Cleavage of propeptides outside the fibroblast', 'Propeptide cleavage defects cause some Ehlers–Danlos types and do not depend on vitamin C.'],
          ['c', 'Copper-dependent cross-linking of fibrils', 'Cross-linking by lysyl oxidase depends on copper, not vitamin C.'],
          ['d', 'Translation of Gly-X-Y chains on ribosomes', 'Translation of collagen chains does not require vitamin C.'],
          ['e', 'Glycine substitution in the triple helix', 'Glycine substitutions are inherited structural defects (osteogenesis imperfecta).'],
        ],
        answer: 'a',
        mini: 'Vitamin C is the cofactor for prolyl and lysyl hydroxylases; without hydroxylation the triple helix is unstable and vessels and wounds are fragile (scurvy).',
        reasoning: 'multistep',
        steps: ['Diet without fruit or vegetables → vitamin C deficiency.', 'Vitamin C is needed by prolyl and lysyl hydroxylases in the RER.', 'Underhydroxylated collagen forms an unstable helix → bleeding gums, perifollicular hemorrhage, poor wound healing.'],
        difficulty: 4,
      },
      {
        stem: 'Fibroblasts from an infant secrete procollagen normally and cleave its propeptides, but the fibrils outside the cell have very few covalent cross-links. Serum copper is very low. Which enzyme activity is reduced?',
        options: [
          ['a', 'Lysyl oxidase'],
          ['b', 'Prolyl hydroxylase', 'Hydroxylation happens before secretion; normal procollagen secretion argues against a hydroxylation defect.'],
          ['c', 'Procollagen peptidase', 'Propeptides are cleaved normally in this case.'],
          ['d', 'Glycosyltransferase', 'Glycosylation occurs in the RER before secretion.'],
          ['e', 'Lysyl hydroxylase', 'Lysyl hydroxylase acts inside the cell and needs vitamin C, not copper.'],
        ],
        answer: 'a',
        mini: 'Lysyl oxidase is a copper enzyme that cross-links collagen and elastin outside the cell; copper deficiency (as in Menkes disease) reduces its activity.',
        reasoning: 'interpretation',
        steps: ['Secretion and propeptide cleavage are normal → intracellular steps and peptidases are intact.', 'The defect is in extracellular cross-linking.', 'Cross-linking needs lysyl oxidase, a copper enzyme; serum copper is very low → reduced lysyl oxidase activity.'],
        difficulty: 4,
      },
    ],
    tf: [
      { statement: 'Propeptides are cleaved from procollagen inside the rough endoplasmic reticulum.', isTrue: false, correction: 'Propeptides are cleaved after secretion, outside the cell, forming tropocollagen.', difficulty: 2 },
      { statement: 'Glycine occupies every third position of collagen chains, allowing the triple helix to pack tightly.', isTrue: true, correction: 'Correct: Gly-X-Y repeats place glycine at the crowded center of the helix.', difficulty: 1 },
    ],
    clues: [
      { answer: 'TROPOCOLLAGEN', clue: 'Collagen molecule formed after propeptides are cleaved outside the cell', difficulty: 2 },
      { answer: 'SCURVY', clue: 'Vitamin C deficiency with bleeding gums and poor wound healing', difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'mol-osteogenesis-imperfecta',
    relevance: 'core',
    title: 'Osteogenesis imperfecta',
    discipline: 'genetics',
    alsoDisciplines: ['biochemistry', 'pathology'],
    system: 'musculoskeletal-skin',
    topic: 'biochem-molecular',
    difficulty: 3,
    curriculum: [`${CO}.oi`],
    objectives: ['Explain how type I collagen defects cause fragile bones', 'Distinguish osteogenesis imperfecta from inflicted injury'],
    citations: [
      MP('condition/osteogenesis-imperfecta', 'Osteogenesis imperfecta'),
      PM(12362985, 'Gajko-Galicka A. Mutations in type I collagen genes resulting in osteogenesis imperfecta in humans. Acta Biochim Pol 2002'),
      PM(17078022, 'Marini JC et al. Consortium for osteogenesis imperfecta mutations in the helical domain of type I collagen. Hum Mutat 2007'),
      PM(26566591, 'Pepin MG, Byers PH. What every clinical geneticist should know about testing for osteogenesis imperfecta in suspected child abuse cases. Am J Med Genet C 2015'),
      PM(26492946, 'Pereira EM. Clinical perspectives on osteogenesis imperfecta versus non-accidental injury. Am J Med Genet C 2015'),
      COLL_SP,
      PM(11001814, 'Forlino A, Marini JC. Osteogenesis imperfecta: prospects for molecular therapeutics. Mol Genet Metab 2000'),
    ],
    facts: [
      'Osteogenesis imperfecta causes bones that fracture easily, often from mild trauma; type I is the mildest form, with blue or grey sclerae and hearing loss in adulthood in about half of people.',
      'Most cases are autosomal dominant mutations in COL1A1 or COL1A2. Mild forms are usually caused by inactivation of one COL1A1 allele (less normal collagen); severe and lethal forms usually result from dominant-negative structural defects, most often glycine substitutions.',
      'Among 832 structural mutations, 682 were glycine substitutions in the triple-helical domain and 150 altered splice sites.',
      'In mild OI, diagnostic features such as blue sclerae, dentinogenesis imperfecta, Wormian bones or a family history may be absent at the age of evaluation, so OI can be missed in infants with unexplained fractures.',
      'Non-accidental injury is more common than OI in unexplained fractures, but OI and other medical causes should always be considered; certain radiologic findings are seen more often in inflicted injury.',
      'Glycine occupies every third position of collagen chains, enabling tight packing of the triple helix; glycine substitutions are the most common OI mutations and are especially often lethal in α1(I) when the substituting residue is charged or branched.',
      'Quantitative defects are generally associated with milder OI and structural defects with more severe OI, but the genotype–phenotype relationship is incompletely understood and exceptions occur; for example, only about one-third of α1(I) glycine substitutions are lethal.',
    ],
    factRefs: [[0], [1], [2], [3], [4], [5, 2], [6, 2]],
    mechanism:
      'Type I collagen is the main structural protein of bone, sclera, dentin and the middle ear. A null COL1A1 allele halves normal collagen output and generally causes milder disease. A glycine substitution is generally worse: every triple helix needs three chains, so one abnormal chain can spoil the helices it joins (dominant-negative effect). These are tendencies, not rules: severity also depends on the chain, the position of the substitution and the replacing residue.',
    associations: ['COL1A1', 'COL1A2', 'Type I collagen', 'Glycine substitution', 'Dominant negative', 'Blue sclerae', 'Dentinogenesis imperfecta', 'Wormian bones', 'Hearing loss'],
    misconception:
      'A smaller amount of normal collagen is generally less harmful than abnormal collagen: null alleles usually cause mild OI, while glycine substitutions more often cause severe forms through a dominant-negative effect. Exceptions occur, so genotype does not fully predict severity.',
    quick:
      'OI: usually autosomal dominant COL1A1/COL1A2 → too little or abnormal type I collagen → fractures with minimal trauma, blue sclerae, hearing loss, dentinogenesis imperfecta. Null allele: usually mild; glycine substitution: usually more severe (dominant negative); exceptions occur. Consider in unexplained infant fractures.',
    detailed: [
      'OI ranges from mild (type I, few fractures, blue sclerae, normal height) to perinatally lethal (type II). The difference often reflects whether the mutation reduces the amount of normal collagen or produces structurally abnormal chains that disrupt triple helix assembly.',
      'Inflicted injury is far more common than OI in infants with unexplained fractures, but mild OI can lack the classic features at presentation. Family history, sclerae, teeth, Wormian bones and the fracture pattern are assessed, and type I collagen gene testing can be considered when the picture is unclear.',
    ],
    takeaway: 'Less collagen → usually milder OI; abnormal collagen (glycine substitution) → usually more severe OI, with exceptions. Keep OI in the differential for unexplained fractures.',
    related: ['mol-collagen-synthesis', 'mol-collagen-types'],
    outline: listed('Musculoskeletal System', 'Congenital disorders'),
    mcq: [
      {
        stem: 'Two families have osteogenesis imperfecta. Family 1 carries a COL1A1 nonsense mutation whose mRNA is degraded; Family 2 carries a COL1A1 glycine-to-cysteine substitution in the triple-helical domain. Which family is more likely to have severe disease, and why?',
        options: [
          ['a', 'Family 2, because abnormal chains disrupt the helices they join'],
          ['b', 'Family 1, because no collagen is produced at all', 'The other COL1A1 allele still makes normal chains, so about half the normal collagen is produced.'],
          ['c', 'Family 1, because nonsense mutations are always lethal', 'A single null allele usually causes the mild form (type I).'],
          ['d', 'Both equally, because both affect COL1A1', 'The type of mutation, not just the gene, determines severity.'],
          ['e', 'Family 2, because cysteine prevents collagen secretion', 'The key problem is that the abnormal chain is built into helices and spoils them.'],
        ],
        answer: 'a',
        mini: 'A null allele reduces the amount of normal collagen and usually causes mild OI. A glycine substitution puts abnormal chains into helices with normal ones (dominant negative) and more often causes severe OI. This is a tendency, not a rule: severity also depends on the position and the replacing residue.',
        reasoning: 'comparison',
        steps: ['Family 1: mRNA degraded → about half the normal collagen, all of it normal → usually mild OI.', 'Family 2: abnormal chain incorporated into trimers → helices containing it are disrupted.', 'Dominant-negative structural defect → more likely to be severe, though not certain.'],
        difficulty: 4,
      },
      {
        stem: 'A 4-month-old has a femoral fracture after his parent reports he rolled against a cot rail. There are no bruises. His sclerae are grey-blue, a skull radiograph shows Wormian bones, and his father had several childhood fractures. Which conclusion is best supported?',
        options: [
          ['a', 'Osteogenesis imperfecta should be evaluated, e.g. with type I collagen testing'],
          ['b', 'Inflicted injury is confirmed because a femur fracture occurred in infancy', 'A fracture alone does not confirm abuse; these features raise a heritable bone fragility disorder.'],
          ['c', 'Scurvy is the likely cause of the fracture', 'Scurvy is rare in infants on formula or breast milk and does not cause blue sclerae or Wormian bones.'],
          ['d', 'Rickets explains the findings', 'Rickets causes metaphyseal changes, not blue sclerae or a dominant family history.'],
          ['e', 'Menkes disease is the most likely diagnosis', 'Menkes causes kinky hair, hypotonia and seizures in boys and is X-linked, not father-to-son.'],
        ],
        answer: 'a',
        mini: 'Blue sclerae, Wormian bones and an affected father support OI; molecular testing helps when unexplained fractures raise the question of inflicted injury.',
        reasoning: 'interpretation',
        steps: ['Fracture with minimal reported trauma raises both OI and inflicted injury.', 'Blue-grey sclerae, Wormian bones and an affected father (dominant pattern) point to a heritable collagen defect.', 'Evaluate for OI (including COL1A1/COL1A2 testing) while assessing safeguarding concerns in parallel.'],
        difficulty: 4,
      },
      {
        stem: 'Why does replacing a single glycine in the triple-helical domain of the α1(I) chain disrupt type I collagen?',
        options: [
          ['a', 'Only glycine fits at the crowded center of the triple helix'],
          ['b', 'Glycine is the residue hydroxylated by vitamin C-dependent enzymes', 'Hydroxylation acts on proline and lysine, not glycine.'],
          ['c', 'Glycine forms the copper-dependent cross-links between fibrils', 'Cross-links form from lysine and hydroxylysine side chains via lysyl oxidase.'],
          ['d', 'Glycine is the attachment site for collagen sugar chains', 'Sugars are attached to hydroxylysine residues.'],
          ['e', 'Losing glycine prevents translation of the COL1A1 mRNA', 'The mutant chain is translated; it is the folding of the helix that fails.'],
        ],
        answer: 'a',
        mini: 'Glycine at every third position packs into the center of the helix; a bulkier residue there distorts folding of every trimer that includes the mutant chain.',
        reasoning: 'mechanism',
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Most osteogenesis imperfecta is caused by autosomal dominant mutations in COL1A1 or COL1A2.', isTrue: true, correction: 'Correct: most cases involve type I collagen genes and dominant inheritance.', difficulty: 1 },
    ],
    clues: [
      { answer: 'WORMIAN', clue: 'Extra skull sutural bones seen on radiographs in brittle bone disease', difficulty: 2 },
    ],
  },
]);

// --------------------------------------------------------------------------------------------------
// Playable game items beyond MCQ/TF/clues: Mechanism Lab sequences, Match Up pairings,
// Connections bank categories, a curated Connections puzzle, and Mystery Patient cases.
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

/** Mechanism Lab: rebuild the pathway in order. */
const sequences: SequenceItem[] = [
  seq({
    id: 'seq:lagging-strand',
    relevance: 'core',
    title: 'Build a lagging strand',
    prompt: 'Put the events at a bacterial replication fork in order, from opening the helix to a sealed lagging strand.',
    steps: [
      'Helicase separates the parental strands',
      'Single-strand binding proteins keep the strands apart',
      'Primase lays down a short RNA primer',
      'DNA polymerase III extends the primer 5′→3′ (an Okazaki fragment)',
      'DNA polymerase I removes the RNA primer and fills the gap with DNA',
      'DNA ligase seals the nick between fragments',
    ],
    explanation: 'Polymerase needs a primer and works only 5′→3′, so the lagging strand is made in primed fragments whose RNA is later replaced and whose ends are joined by ligase.',
    conceptIds: ['mol-replication'],
    objectiveIds: [`${RP}.enzymes`, `${RP}.strands`],
    difficulty: 2,
  }),
  seq({
    id: 'seq:mirna-silencing',
    title: 'From miRNA gene to silenced mRNA',
    prompt: 'Order the steps by which a microRNA silences its target.',
    steps: [
      'RNA polymerase II transcribes the primary miRNA',
      'Drosha cuts the primary transcript in the nucleus',
      'Dicer trims the precursor in the cytoplasm to ~21 nucleotides',
      'The mature miRNA is loaded into Argonaute (RISC)',
      'RISC pairs with the 3′ UTR of the target mRNA',
      'Translation is repressed or the mRNA is degraded',
    ],
    explanation: 'miRNA biogenesis runs nucleus → cytoplasm: Pol II transcription, Drosha, export, Dicer, Argonaute loading; target recognition by seed pairing then reduces protein output.',
    conceptIds: ['mol-rna-processing'],
    objectiveIds: [`${RN}.mirna`],
    relevance: 'specialist',
    relevanceNote: 'Drosha/Dicer/RISC biogenesis order is beyond Step 1.',
    difficulty: 3,
  }),
  seq({
    id: 'seq:elongation-cycle',
    relevance: 'core',
    title: 'One turn of the ribosome',
    prompt: 'Order the events of translation from start to finish.',
    steps: [
      'Initiator methionyl-tRNA pairs with AUG, with initiation factors and GTP',
      'A charged aminoacyl-tRNA enters the A site (GTP)',
      'Peptidyl transferase in the large-subunit rRNA forms the peptide bond',
      'Translocation moves the tRNAs from A to P and from P to E (GTP)',
      'The empty tRNA leaves from the E site',
      'A stop codon in the A site recruits a release factor and the chain is freed',
    ],
    explanation: 'Initiation assembles the ribosome on AUG; each elongation cycle is entry (A site), bond formation (rRNA) and translocation, until a release factor reads the stop codon.',
    conceptIds: ['mol-translation'],
    objectiveIds: [`${TL}.steps`],
    difficulty: 2,
  }),
  seq({
    id: 'seq:collagen',
    relevance: 'core',
    title: 'Making collagen',
    prompt: 'Order collagen synthesis from the ribosome to a cross-linked fibril.',
    steps: [
      'Pre-pro-α chains (Gly-X-Y repeats) are made into the rough ER',
      'Proline and lysine are hydroxylated (vitamin C)',
      'Hydroxylysine residues are glycosylated',
      'Three chains form the procollagen triple helix',
      'Procollagen is secreted from the fibroblast',
      'Propeptides are cleaved outside the cell, forming tropocollagen',
      'Lysyl oxidase (copper) cross-links the fibrils',
    ],
    explanation: 'Hydroxylation and glycosylation precede helix formation inside the cell; cleavage and copper-dependent cross-linking happen outside. Vitamin C defects act early (scurvy); copper defects act last (Menkes).',
    conceptIds: ['mol-collagen-synthesis'],
    objectiveIds: [`${CO}.synthesis`],
    difficulty: 3,
  }),
  seq({
    id: 'seq:a1at-emphysema',
    relevance: 'core',
    title: 'From Z allele to emphysema',
    prompt: 'Order the chain of events linking the Z allele of SERPINA1 to lung damage.',
    steps: [
      'The Z protein misfolds during synthesis in the hepatocyte ER',
      'Misfolded protein polymerizes and is retained in the liver',
      'Very little α1-antitrypsin reaches the blood',
      'Neutrophil elastase in the alveoli is left uninhibited',
      'Alveolar wall elastin is degraded',
      'Airspaces enlarge (emphysema)',
    ],
    explanation: 'The protein is made in the liver but used in the lung: retention in hepatocytes both injures the liver and starves the lung of antiprotease.',
    conceptIds: ['mol-a1at', 'mol-protein-folding'],
    objectiveIds: [`${PP}.a1at`, `${PP}.folding`],
    difficulty: 3,
  }),
];

/** Match Up: every left has exactly one right. */
const matches: MatchItem[] = [
  match({
    id: 'match:rna-polymerases',
    relevance: 'core',
    title: 'Polymerases and their products',
    prompt: 'Match each polymerase to what it makes or what blocks it.',
    pairs: [
      { left: 'RNA polymerase I', right: '28S, 18S and 5.8S rRNA in the nucleolus' },
      { left: 'RNA polymerase II', right: 'Pre-mRNA; extremely sensitive to α-amanitin' },
      { left: 'RNA polymerase III', right: 'tRNA, 5S rRNA and U6 snRNA' },
      { left: 'Bacterial RNA polymerase', right: 'Inhibited by rifampin' },
      { left: 'Telomerase', right: 'DNA repeats copied from its own RNA template' },
    ],
    explanation: 'Pol I: large rRNAs; pol II: mRNA (and most snRNAs and miRNA precursors); pol III: tRNA, 5S rRNA, U6. Rifampin is selective for the bacterial enzyme; telomerase is an RNA-templated DNA polymerase.',
    conceptIds: ['mol-transcription', 'mol-telomerase'],
    objectiveIds: [`${TX}.polymerases`],
    difficulty: 2,
  }),
  match({
    id: 'match:replication-enzymes',
    relevance: 'core',
    title: 'Replication crew',
    prompt: 'Match each replication protein to its job.',
    pairs: [
      { left: 'Helicase', right: 'Separates the two strands' },
      { left: 'Single-strand binding protein', right: 'Stops separated strands re-annealing' },
      { left: 'Topoisomerase', right: 'Relieves over-winding ahead of the fork' },
      { left: 'Primase', right: 'Makes the RNA primer' },
      { left: 'DNA ligase', right: 'Joins Okazaki fragments' },
      { left: 'Pol δ / ε exonuclease', right: 'Removes a misinserted base (3′→5′)' },
    ],
    explanation: 'Each protein solves one problem of copying a double helix; proofreading by the 3′→5′ exonuclease of replicative polymerases precedes mismatch repair.',
    conceptIds: ['mol-replication'],
    objectiveIds: [`${RP}.enzymes`],
    difficulty: 1,
  }),
  match({
    id: 'match:central-dogma-poisons',
    relevance: 'core',
    title: 'Poisons of the central dogma',
    prompt: 'Match each drug or toxin to its molecular target.',
    pairs: [
      { left: 'α-Amanitin', right: 'Eukaryotic RNA polymerase II' },
      { left: 'Etoposide', right: 'Human topoisomerase II' },
      { left: 'Irinotecan', right: 'Human topoisomerase I' },
      { left: 'Ciprofloxacin', right: 'Bacterial DNA gyrase and topoisomerase IV' },
      { left: 'Diphtheria toxin', right: 'Elongation factor 2' },
      { left: 'Ricin', right: '28S rRNA of the large ribosomal subunit' },
    ],
    explanation: 'Replication (topoisomerases), transcription (RNA polymerase II) and translation (EF-2, 28S rRNA) each have a classic poison.',
    conceptIds: ['mol-topoisomerase-drugs', 'mol-transcription-inhibitors', 'mol-translation-toxins'],
    objectiveIds: [`${RP}.topo-drugs`, `${TX}.inhibitors`, `${TL}.toxins`],
    difficulty: 2,
  }),
  match({
    id: 'match:antibiotic-ribosome',
    relevance: 'core',
    title: 'Where antibiotics hit the ribosome',
    prompt: 'Match each antibiotic to its ribosomal site and action.',
    pairs: [
      { left: 'Gentamicin', right: '30S: causes codon misreading' },
      { left: 'Doxycycline', right: '30S: blocks aminoacyl-tRNA at the A site' },
      { left: 'Azithromycin', right: '50S: macrolide blocking peptide bond formation' },
      { left: 'Chloramphenicol', right: '50S: blocks peptidyl transfer' },
      { left: 'Linezolid', right: '50S: prevents initiation complex formation' },
    ],
    explanation: 'Aminoglycosides and tetracyclines bind the 30S subunit; macrolides, chloramphenicol and oxazolidinones bind the 50S subunit, each at a different step.',
    conceptIds: ['mol-ribosome-antibiotics'],
    objectiveIds: [`${TL}.ribosomes`],
    difficulty: 2,
  }),
  match({
    id: 'match:epigenetic-silencing',
    relevance: 'core',
    title: 'Silenced, not deleted',
    prompt: 'Match each finding to its epigenetic explanation.',
    pairs: [
      { left: 'Barr body', right: 'Condensed, inactivated extra X chromosome' },
      { left: 'Prader–Willi syndrome', right: 'No active paternal 15q11–q13 genes' },
      { left: 'Angelman syndrome', right: 'No active maternal UBE3A in neurons' },
      { left: 'Fragile X syndrome', right: 'Hypermethylated CGG expansion silences FMR1' },
      { left: 'Histone acetylation', right: 'Loosens chromatin and favors transcription' },
      { left: 'CpG island methylation', right: 'Silences the adjacent promoter' },
    ],
    explanation: 'Each disorder reflects loss of an active gene copy without (necessarily) a change in sequence: inactivation, imprinting or methylation-driven silencing.',
    conceptIds: ['mol-epigenetic-disease', 'mol-chromatin'],
    objectiveIds: [`${CH}.epigenetic`, `${CH}.epigenetic-disease`],
    difficulty: 2,
  }),
  match({
    id: 'match:protein-modifications',
    relevance: 'core',
    title: 'Finishing touches',
    prompt: 'Match each post-translational modification to an example of what it does.',
    pairs: [
      { left: 'Phosphorylation', right: 'Kinase-added phosphate that switches activity' },
      { left: 'Ubiquitination', right: 'Tags a misfolded protein for the proteasome' },
      { left: 'Hydroxylation', right: 'Vitamin C-dependent change to collagen proline' },
      { left: 'Glycosylation', right: 'Sugar chains added in the ER and Golgi' },
      { left: 'Acetylation', right: 'Neutralizes histone lysines and opens chromatin' },
    ],
    explanation: 'Post-translational modifications change activity (phosphorylation), lifetime (ubiquitination), structure (hydroxylation), trafficking (glycosylation) and chromatin state (acetylation).',
    conceptIds: ['mol-protein-folding'],
    objectiveIds: [`${PP}.ptm`],
    difficulty: 1,
  }),
];

/** Category bank entries for the daily builder (not complete games on their own). */
const groups: ConnectionGroup[] = [
  group({
    id: 'grp:translation-toxins',
    relevance: 'core',
    label: 'Toxins that stop eukaryotic translation',
    tier: 2,
    conceptIds: ['mol-translation-toxins'],
    objectiveIds: [`${TL}.toxins`],
    difficulty: 2,
    members: ['Diphtheria toxin', 'Pseudomonas exotoxin A', 'Shiga toxin', 'Ricin'],
    explanation: 'Diphtheria toxin and exotoxin A ADP-ribosylate EF-2; Shiga toxin and ricin depurinate 28S rRNA.',
  }),
  group({
    id: 'grp:topoisomerase-inhibitors',
    relevance: 'core',
    label: 'Topoisomerase inhibitors',
    tier: 3,
    conceptIds: ['mol-topoisomerase-drugs'],
    objectiveIds: [`${RP}.topo-drugs`],
    difficulty: 3,
    members: ['Etoposide', 'Teniposide', 'Irinotecan', 'Topotecan', 'Ciprofloxacin', 'Levofloxacin'],
    explanation: 'Etoposide/teniposide (topoisomerase II), irinotecan/topotecan (topoisomerase I), fluoroquinolones (bacterial gyrase and topoisomerase IV).',
  }),
  group({
    id: 'grp:imprinting-silencing',
    relevance: 'core',
    label: 'Disease from a silenced or missing active gene copy',
    tier: 3,
    conceptIds: ['mol-epigenetic-disease'],
    objectiveIds: [`${CH}.epigenetic-disease`],
    difficulty: 3,
    members: ['Prader–Willi syndrome', 'Angelman syndrome', 'Fragile X syndrome', 'Uniparental disomy'],
    explanation: 'Imprinting (Prader–Willi, Angelman, uniparental disomy) and methylation-driven silencing (fragile X) remove gene function without necessarily changing the sequence.',
  }),
];

/** Complete Medical Connections game, checked against the global category catalog. */
const puzzles: ConnectionsPuzzleItem[] = [
  puzzle({
    id: 'cx:gene-expression-blockers',
    relevance: 'core',
    title: 'Gene expression: made and jammed',
    difficulty: 3,
    conceptIds: ['mol-rna-processing', 'mol-translation-toxins', 'mol-topoisomerase-drugs', 'mol-transcription-inhibitors', 'mol-transcription'],
    objectiveIds: [`${RN}.processing`, `${TL}.toxins`, `${RP}.topo-drugs`, `${TX}.inhibitors`, `${TX}.regulation`],
    groups: [
      { id: 'processing', label: 'Pre-mRNA processing', tier: 1, members: ['7-Methylguanosine cap', 'Poly-A tail', 'Spliceosome', 'AAUAAA signal'],
        explanation: 'A pre-mRNA becomes mature mRNA by 5′ capping, cleavage after the AAUAAA signal with poly-A tail addition, and intron removal by the spliceosome.',
        conceptIds: ['mol-rna-processing'], objectiveIds: [`${RN}.processing`],
        accepts: ['7-Methylguanosine cap', 'Poly-A tail', 'Spliceosome', 'AAUAAA signal', 'snRNP', 'Splicing'] },
      { id: 'toxins', label: 'Toxins that halt eukaryotic translation', tier: 2, members: ['Diphtheria toxin', 'Pseudomonas exotoxin A', 'Shiga toxin', 'Ricin'],
        explanation: 'EF-2 ADP-ribosylation (diphtheria toxin, exotoxin A) or 28S rRNA depurination (Shiga toxin, ricin).',
        conceptIds: ['mol-translation-toxins'], objectiveIds: [`${TL}.toxins`],
        accepts: ['Diphtheria toxin', 'Pseudomonas exotoxin A', 'Shiga toxin', 'Ricin'] },
      { id: 'topo', label: 'Inhibit human topoisomerases', tier: 3, members: ['Etoposide', 'Teniposide', 'Irinotecan', 'Topotecan'],
        explanation: 'Etoposide and teniposide trap topoisomerase II; irinotecan and topotecan trap topoisomerase I.',
        conceptIds: ['mol-topoisomerase-drugs'], objectiveIds: [`${RP}.topo-drugs`],
        accepts: ['Etoposide', 'Teniposide', 'Irinotecan', 'Topotecan'] },
      { id: 'transcription', label: 'Reduce transcription', tier: 4, members: ['α-Amanitin', 'Rifampin', 'Dactinomycin', 'TATA box mutation'],
        explanation: 'α-Amanitin (RNA polymerase II), rifampin (bacterial RNA polymerase), dactinomycin (intercalates the template) and a TATA box mutation (weaker promoter) all lower transcription.',
        conceptIds: ['mol-transcription-inhibitors', 'mol-transcription'], objectiveIds: [`${TX}.inhibitors`, `${TX}.regulation`],
        accepts: ['α-Amanitin', 'Rifampin', 'Dactinomycin', 'TATA box mutation'] },
    ],
    decoys: [
      { label: 'Antibiotics', accepts: ['Rifampin', 'Dactinomycin'] },
      { label: 'Cancer chemotherapy drugs', accepts: ['Etoposide', 'Teniposide', 'Irinotecan', 'Topotecan', 'Dactinomycin'] },
      { label: 'Toxins of any origin', accepts: ['Diphtheria toxin', 'Pseudomonas exotoxin A', 'Shiga toxin', 'Ricin', 'α-Amanitin'] },
      { label: 'Plant-derived compounds', accepts: ['Ricin', 'Etoposide', 'Teniposide', 'Irinotecan', 'Topotecan'] },
      { label: 'Made by bacteria', accepts: ['Diphtheria toxin', 'Pseudomonas exotoxin A', 'Shiga toxin', 'Rifampin', 'Dactinomycin'] },
      { label: 'Involve RNA polymerase II or its transcripts', accepts: ['α-Amanitin', 'TATA box mutation', '7-Methylguanosine cap', 'Poly-A tail', 'Spliceosome', 'AAUAAA signal'] },
    ],
  }),
];

const cases: CaseItem[] = [
  kase({
    id: 'case:a1at-deficiency',
    relevance: 'core',
    title: 'Short of breath at 38',
    conceptIds: ['mol-a1at', 'mol-protein-folding'],
    objectiveIds: [`${PP}.a1at`, `${PP}.folding`],
    difficulty: 4,
    stages: [
      { label: 'Presentation', text: 'A 38-year-old man has two years of progressive breathlessness on exertion.' },
      { label: 'History', text: 'He smoked 10 cigarettes a day for 15 years. As a newborn he had prolonged jaundice that resolved. His sister has “liver problems”.' },
      { label: 'Examination', text: 'Hyperinflated chest with reduced breath sounds at both bases. Liver edge palpable 2 cm below the costal margin.' },
      { label: 'Laboratory', text: 'Spirometry: FEV₁/FVC 0.52 with little bronchodilator response; reduced diffusing capacity. ALT mildly raised. The α1-globulin band on serum protein electrophoresis is almost absent.' },
      { label: 'Imaging & tests', text: 'CT chest: panlobular emphysema, most marked in the lower zones.' },
      { label: 'Further clue', text: 'Liver biopsy: periportal hepatocytes contain globules that remain PAS-positive after diastase.' },
    ],
    question: 'Which single molecular event best explains both his lung and his liver disease?',
    options: [
      { id: 'a', text: 'A misfolded protease inhibitor polymerizes in hepatocytes' },
      { id: 'b', text: 'Chloride channel misfolds and is degraded in the ER', whyWrong: 'ΔF508 CFTR causes bronchiectasis and pancreatic insufficiency, not panacinar emphysema with PAS-positive hepatocyte globules.' },
      { id: 'c', text: 'Smoking directly mutates the elastin gene in alveoli', whyWrong: 'Smoking accelerates protease damage but does not mutate elastin; the absent α1-globulin band shows an inherited protein deficiency.' },
      { id: 'd', text: 'Excess iron deposits in liver and lung parenchyma', whyWrong: 'Hemochromatosis affects liver, heart and pancreas, not the lungs, and iron is not PAS-positive diastase-resistant protein.' },
      { id: 'e', text: 'Copper accumulates in hepatocytes and the brain', whyWrong: 'Wilson disease causes liver and neurologic disease, not emphysema.' },
    ],
    answerId: 'a',
    explanation:
      'Panacinar, basal-predominant emphysema in a young smoker, neonatal jaundice, an absent α1-globulin band and PAS-positive diastase-resistant hepatocyte globules point to α1-antitrypsin deficiency (PiZZ). The Z protein polymerizes in the hepatocyte ER, injuring the liver, while too little reaches the lung to restrain neutrophil elastase.',
    mechanism: 'Z allele → misfolding → ER polymers (liver injury, globules) + low serum α1AT → unopposed neutrophil elastase → alveolar destruction.',
    takeaway: 'Young emphysema + liver disease = α1AT deficiency: one protein, retained in the liver, missing in the lung.',
    differentials: [
      { name: 'Smoking-related centriacinar emphysema', why: 'Upper-lobe predominant, older patients, no liver disease.' },
      { name: 'Cystic fibrosis', why: 'Bronchiectasis, pancreatic insufficiency and biliary cirrhosis, with a positive sweat test.' },
      { name: 'Chronic viral hepatitis', why: 'Explains the liver but not early emphysema or the missing α1-globulin band.' },
    ],
  }),
  kase({
    id: 'case:amanita-poisoning',
    relevance: 'core',
    title: 'The foragers’ supper',
    conceptIds: ['mol-transcription-inhibitors'],
    objectiveIds: [`${TX}.inhibitors`],
    difficulty: 4,
    stages: [
      { label: 'Presentation', text: 'A 45-year-old woman and her husband come to the emergency department with severe vomiting and profuse watery diarrhea.' },
      { label: 'History', text: 'About 10 hours earlier they ate a soup made from wild mushrooms they had gathered in a wood. They felt well for the first several hours.' },
      { label: 'Examination', text: 'Dry mucous membranes, tachycardia, diffuse abdominal tenderness. No jaundice yet.' },
      { label: 'Laboratory', text: 'Day 1: creatinine slightly raised from dehydration; ALT normal. Day 2: symptoms improve but ALT 2,800 U/L. Day 3: ALT 6,500 U/L, INR 3.1, glucose low.' },
      { label: 'Further clue', text: 'A remaining mushroom has a greenish cap, white gills and a sac-like cup at the base of the stem.' },
    ],
    question: 'Which molecular event in hepatocytes explains her liver failure?',
    options: [
      { id: 'a', text: 'Inhibition of RNA polymerase II stops mRNA synthesis' },
      { id: 'b', text: 'ADP-ribosylation of elongation factor 2 stops translation', whyWrong: 'This is the action of diphtheria toxin and Pseudomonas exotoxin A, not of a mushroom toxin.' },
      { id: 'c', text: 'Depletion of glutathione by a reactive metabolite', whyWrong: 'Glutathione depletion is the mechanism of acetaminophen toxicity; the history is mushroom ingestion.' },
      { id: 'd', text: 'Stimulation of muscarinic receptors by a mushroom toxin', whyWrong: 'Muscarine-containing mushrooms cause rapid cholinergic symptoms such as sweating and salivation, not delayed liver failure.' },
      { id: 'e', text: 'Intercalation into DNA by an antitumor antibiotic', whyWrong: 'Intercalation describes dactinomycin, not a mushroom toxin.' },
    ],
    answerId: 'a',
    explanation:
      'A latent period, then severe gastroenteritis, an apparent improvement and rising transaminases with coagulopathy by day 2–3 are typical of amatoxin (death cap) poisoning. α-Amanitin inhibits RNA polymerase II; hepatocytes cannot make mRNA and undergo apoptosis or necrosis, producing fulminant hepatic failure.',
    mechanism: 'α-Amanitin → hepatocyte uptake → RNA polymerase II blocked → no mRNA → hepatocyte death → liver failure (coagulopathy, hypoglycemia).',
    takeaway: 'Delayed GI phase then liver failure after wild mushrooms = α-amanitin blocking RNA polymerase II.',
    differentials: [
      { name: 'Acetaminophen overdose', why: 'Also causes delayed hepatotoxicity, but there is no ingestion history and the mechanism is glutathione depletion.' },
      { name: 'Muscarine-containing mushrooms', why: 'Rapid cholinergic symptoms (sweating, salivation, bradycardia) without liver failure.' },
      { name: 'Viral gastroenteritis', why: 'Does not cause transaminases in the thousands with coagulopathy.' },
    ],
  }),
];

export const molecularBatch2: Bundle = {
  concepts: core.concepts,
  items: [...core.items, ...sequences, ...matches, ...groups, ...puzzles, ...cases],
};
