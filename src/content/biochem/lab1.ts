import { AI_DRAFT, defineConcepts, type Bundle } from '../define';
import type { CaseItem, Citation, MatchItem, OutlineRef, SequenceItem } from '../schema';

/**
 * Biochemistry — Laboratory techniques, batch 1: PCR and sequencing, blotting, ELISA, flow
 * cytometry, microarrays, karyotype and FISH, test selection, cloning and genome editing.
 *
 * Step 1 depth: what each test detects, the principle that makes it work, how to read the result and
 * which test answers a clinical question. Facts come from OpenStax Microbiology and Biology 2e,
 * MedlinePlus (genetics and medical tests) and PubMed abstracts for the clinical applications.
 * Original, AI-drafted content: DRAFT, NOT MEDICALLY REVIEWED.
 */

const MS = 'Multisystem Processes & Disorders' as const;
const listed = (area: OutlineRef['area'], section: string): OutlineRef => ({ area, section, listed: true });
const found = (area: OutlineRef['area'], section: string): OutlineRef => ({ area, section, listed: false });
const GEN = 'Genetic, metabolic, and developmental disorders';
const INF = 'Infectious, immunologic, and inflammatory disorders, including microbiologic and host response to insult';

const MPG = (path: string, title: string): Citation => ({
  sourceId: 'medlineplus', locator: `MedlinePlus Genetics: ${title}`, url: `https://medlineplus.gov/genetics/${path}/`, checked: 'full-text',
});
const MPT = (path: string, title: string): Citation => ({
  sourceId: 'medlineplus', locator: `MedlinePlus Medical Tests: ${title}`, url: `https://medlineplus.gov/lab-tests/${path}/`, checked: 'full-text',
});
const PM = (pmid: number, label: string): Citation => ({
  sourceId: 'pubmed', locator: label, url: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`, ref: `PMID ${pmid}`, checked: 'summary',
});
const OSM = (page: string, title: string): Citation => ({
  sourceId: 'openstax-micro', locator: `OpenStax Microbiology, ${title}`, url: `https://openstax.org/books/microbiology/pages/${page}`, checked: 'full-text',
});
const OSB = (page: string, title: string): Citation => ({
  sourceId: 'openstax-bio', locator: `OpenStax Biology 2e, ${title}`, url: `https://openstax.org/books/biology-2e/pages/${page}`, checked: 'full-text',
});

const MB_DNA = OSM('12-2-visualizing-and-characterizing-dna-rna-and-protein', '12.2 Visualizing and Characterizing DNA, RNA, and Protein');
const MB_COMPLEX = OSM('20-2-detecting-antigen-antibody-complexes', '20.2 Detecting Antigen-Antibody Complexes');
const MB_ELISA = OSM('20-4-eias-and-elisas', '20.4 EIAs and ELISAs');
const MB_FA = OSM('20-5-fluorescent-antibody-techniques', '20.5 Fluorescent Antibody Techniques');
const BIO_BIOTECH = OSB('17-1-biotechnology', '17.1 Biotechnology');
const BIO_SEQ = OSB('17-3-whole-genome-sequencing', '17.3 Whole-Genome Sequencing');
const BIO_KARYO = OSB('13-2-chromosomal-basis-of-inherited-disorders', '13.2 Chromosomal Basis of Inherited Disorders');
const MP_TEST_TYPES = MPG('understanding/testing/types', 'What are the different types of genetic tests?');
const MP_HD = MPG('condition/huntington-disease', 'Huntington disease');
const MP_FRAGX = MPG('condition/fragile-x-syndrome', 'Fragile X syndrome');
const MP_DMD = MPG('condition/duchenne-and-becker-muscular-dystrophy', 'Duchenne and Becker muscular dystrophy');
const MP_22Q = MPG('condition/22q112-deletion-syndrome', '22q11.2 deletion syndrome');
const MP_PNH = MPG('condition/paroxysmal-nocturnal-hemoglobinuria', 'Paroxysmal nocturnal hemoglobinuria');
const MP_CRISPR = MPG('understanding/genomicresearch/genomeediting', 'What are genome editing and CRISPR-Cas9?');
const MP_DOWN = MPG('condition/down-syndrome', 'Down syndrome');
const DMD_CLINICAL = PM(41439068, 'Alyami NH et al. Classic Duchenne features: Gowers sign, calf pseudohypertrophy, hypotonia and raised creatine kinase. Cureus 2025');
const MP_HIV_TEST = MPT('hiv-screening-test', 'HIV Screening Test');
const MP_CD4 = MPT('cd4-lymphocyte-count', 'CD4 Lymphocyte Count');
const FRAGX_DX = PM(26489042, 'Tassone F. Fragile X diagnosis: cytogenetics replaced by Southern blot and PCR, now PCR methods that size full mutations and methylation. Expert Rev Mol Diagn 2015');
const FRAGX_SOUTHERN = PM(19099346, 'Sofocleous C et al. Fragile X: >200 CGG repeats are hypermethylated and silence FMR1; molecular diagnosis. Expert Rev Mol Diagn 2009');
const CML_TESTS = PM(28527402, 'Duan MH et al. CML: karyotype detects t(9;22) but misses some rearrangements; RT-PCR is a sensitive way to detect BCR-ABL1. Leuk Res 2017');
const DMD_WB = PM(2693617, 'Nicholson LV et al. Western blot analysis of dystrophin in skeletal muscle for the differential diagnosis of Duchenne and Becker dystrophy. J Neurol Sci 1989');
const DMD_REVIEW = PM(8795844, 'Reitter B, Goebel HH. Dystrophinopathies: immunohistochemical and Western blot analysis of dystrophin in diagnosis. Semin Pediatr Neurol 1996');
const LYME_TWO_TIER = PM(24365431, 'Halperin JJ. Lyme disease is diagnosed by two-tier antibody testing: ELISA, then Western blot. Handb Clin Neurol 2014');
const LYME_SEROLOGY = PM(32509603, 'Talagrand-Reboul E et al. Lyme serology: a sensitive first-tier ELISA, then a confirmatory second tier. Front Cell Infect Microbiol 2020');
const HIV_ALGORITHM = PM(24342485, 'Pandori MW et al. The HIV algorithm replaces the HIV-1 Western blot with an HIV-1/HIV-2 differentiation assay after an Ag/Ab screen. J Clin Virol 2013');
const HIV_4TH_GEN = PM(30007138, 'Avidor B et al. Fourth-generation assays detect anti-HIV antibodies and p24 antigen but are prone to false positives; confirmation follows. J Clin Virol 2018');
const PNH_FLOW = PM(30573047, 'Dulau-Florea A et al. PNH cells lack GPI-anchored proteins (CD55, CD59) and bind little FLAER; diagnosed by flow cytometry. Semin Hematol 2019');
const PNH_FLAER = PM(17285629, 'Sutherland DR et al. PNH diagnosis by flow cytometry: loss of at least two GPI-linked antigens on red cells and neutrophils. Cytometry B Clin Cytom 2007');
const FISH_22Q = PM(30410196, 'Ramírez-Velazco A et al. The 22q11.2 deletion detected by fluorescence in situ hybridization. Colomb Med (Cali) 2018');
const FISH_INTERPHASE = PM(15538109, 'Cook JR. Interphase FISH on paraffin sections in lymphoma diagnosis. Diagn Mol Pathol 2004');
const CMA_FIRST_TIER = PM(23245550, 'Flore LA, Milunsky JM. Chromosomal microarray is first-line for global developmental delay/intellectual disability; G-banded karyotype is now an adjunct. Semin Pediatr Neurol 2012');
const CMA_YIELD = PM(30903683, 'Cheng SSW et al. Chromosomal microarray is a first-tier test for developmental delay, intellectual disability, autism and multiple anomalies. Am J Med Genet C 2019');
const CMA_SNP = PM(29631977, 'Wang R et al. SNP-array CMA finds pathogenic copy-number changes in children with normal karyotypes. Pediatr Neonatol 2019');

const PS = 'bc-pcr-sequencing';
const BL = 'bc-blotting';
const EF = 'bc-elisa-flow';
const KF = 'bc-karyotype-fish';
const GE = 'bc-gene-editing';

const core = defineConcepts([
  // ------------------------------------------------------------------------------------------------
  {
    id: 'lab-pcr',
    relevance: 'core',
    title: 'PCR, RT-PCR and quantitative PCR',
    discipline: 'biochemistry',
    alsoDisciplines: ['microbiology', 'genetics'],
    system: 'multisystem',
    topic: 'biochem-lab',
    difficulty: 2,
    curriculum: [`${PS}.pcr`, `${PS}.rt-pcr`],
    objectives: ['Describe the three steps of PCR and why a heat-stable polymerase is needed', 'Distinguish RT-PCR and quantitative PCR from standard PCR'],
    citations: [MB_DNA, BIO_BIOTECH, CML_TESTS],
    facts: [
      'PCR amplifies a specific DNA sequence through repeated cycles of three steps: denaturation at about 95 °C, primer annealing at about 50 °C and extension at 72 °C by a heat-stable DNA polymerase such as Taq (from Thermus aquaticus). Each cycle doubles the target; 25–40 cycles give millions to over a trillion copies.',
      'The high temperature needed to separate the strands is why a heat-stable polymerase is required. PCR uses chemically synthesized DNA primers complementary to the ends of the target sequence.',
      'Reverse transcriptase PCR (RT-PCR) first converts mRNA to cDNA with reverse transcriptase, then amplifies the cDNA; it shows whether a gene is expressed.',
      'Standard PCR and RT-PCR are not quantitative. Real-time (quantitative) PCR follows fluorescence as product accumulates, so the starting amount can be calculated; quantitative RT-PCR measures HIV viral load to judge therapy.',
      'RT-PCR is a sensitive method for detecting the BCR-ABL1 fusion transcript in chronic myeloid leukemia.',
    ],
    factRefs: [[0], [0], [0, 1], [0], [2]],
    mechanism:
      'Heat separates the strands, cooling lets two primers find the ends of the target, and a heat-stable polymerase extends them. Every cycle doubles the target, so a tiny sample becomes enough to see on a gel. Starting from RNA needs reverse transcriptase first (RT-PCR); measuring how much was present needs real-time fluorescence (qPCR).',
    associations: ['Denaturation 95 °C', 'Annealing ~50 °C', 'Extension 72 °C', 'Taq polymerase', 'Primers', 'Thermal cycler', 'RT-PCR (mRNA → cDNA)', 'qPCR (real-time)', 'HIV viral load', 'BCR-ABL1 transcript'],
    misconception:
      'Ordinary PCR does not tell you how much template was present: it is read at the end, after reagents may have run out. Quantity needs real-time (quantitative) PCR.',
    quick:
      'PCR: denature (95 °C) → primers anneal (~50 °C) → Taq extends (72 °C); each cycle doubles the target. RT-PCR: mRNA → cDNA first (gene expression, RNA viruses). qPCR: real-time fluorescence → starting amount (HIV viral load).',
    detailed: [
      'PCR copies one chosen stretch of DNA. Two synthetic primers define its ends. Each cycle heats the DNA to separate the strands, cools it so the primers anneal, and warms it so a heat-stable polymerase extends them. Because the copies become templates, the target doubles every cycle.',
      'Variations answer different questions. RT-PCR adds a reverse-transcription step so RNA can be studied: whether a gene is expressed, or whether an RNA virus or a fusion transcript such as BCR-ABL1 is present. Real-time (quantitative) PCR measures fluorescence during the run, so it can estimate how much template was there at the start, as in HIV viral load monitoring.',
    ],
    takeaway: 'PCR = denature, anneal, extend with Taq; RT-PCR starts from RNA; qPCR measures how much.',
    related: ['lab-gel', 'lab-sequencing'],
    outline: found(MS, INF),
    mcq: [
      {
        stem: 'Why does PCR use a DNA polymerase from a hot-spring bacterium rather than a human polymerase?',
        options: [
          ['a', 'It survives the ~95 °C step that separates the strands'],
          ['b', 'It can copy RNA directly into DNA', 'Copying RNA into DNA needs reverse transcriptase, the extra step in RT-PCR.'],
          ['c', 'It does not need primers to start synthesis', 'All DNA polymerases, including Taq, need a primer with a free 3′-OH.'],
          ['d', 'It works best at body temperature', 'Taq works best at about 72 °C, the extension step.'],
          ['e', 'It proofreads more accurately than human enzymes', 'Heat stability, not proofreading, is the reason it is used.'],
        ],
        answer: 'a',
        mini: 'Strands are separated by heat (~95 °C) every cycle. Taq polymerase, from Thermus aquaticus, survives this and works best at 72 °C, so it can extend primers cycle after cycle.',
        reasoning: 'mechanism',
        objectives: [`${PS}.pcr`],
        difficulty: 2,
      },
      {
        stem: 'A patient with HIV starts antiretroviral therapy. Which test best shows whether the amount of virus in the blood is falling?',
        options: [
          ['a', 'Quantitative RT-PCR for HIV RNA'],
          ['b', 'Standard end-point PCR for HIV DNA', 'End-point PCR is not quantitative, so it cannot follow a change in amount.'],
          ['c', 'Southern blot of lymphocyte DNA', 'A Southern blot detects specific DNA fragments; it does not measure viral load.'],
          ['d', 'Karyotype of blood lymphocytes', 'A karyotype shows chromosome number and structure, not virus.'],
          ['e', 'Indirect ELISA for anti-HIV antibodies', 'Antibodies persist on treatment; they do not track the amount of virus.'],
        ],
        answer: 'a',
        mini: 'HIV is an RNA virus, so reverse transcription comes first; real-time (quantitative) PCR then measures how much was present. Quantitative RT-PCR = viral load.',
        reasoning: 'prediction',
        objectives: [`${PS}.rt-pcr`],
        steps: ['The question is how much virus is present, and whether it is falling.', 'HIV genomes are RNA, so RNA must be reverse-transcribed before PCR.', 'Only real-time (quantitative) PCR estimates the starting amount → quantitative RT-PCR.'],
        difficulty: 3,
      },
      {
        stem: 'A researcher wants to know whether a gene is being expressed in a tissue sample. Which approach answers this with PCR?',
        options: [
          ['a', 'Reverse-transcribe the mRNA to cDNA, then run PCR'],
          ['b', 'Run PCR directly on genomic DNA', 'Genomic DNA contains the gene whether or not it is expressed.'],
          ['c', 'Run PCR on the protein extract', 'PCR amplifies nucleic acids, not proteins.'],
          ['d', 'Cut genomic DNA with a restriction enzyme', 'Restriction digestion of DNA does not show expression.'],
          ['e', 'Stain the chromosomes and count them', 'Karyotyping shows chromosomes, not gene expression.'],
        ],
        answer: 'a',
        mini: 'Expression means mRNA. RT-PCR converts mRNA to cDNA with reverse transcriptase, then PCR amplifies it, showing the gene is expressed.',
        reasoning: 'recall',
        objectives: [`${PS}.rt-pcr`],
        difficulty: 1,
      },
    ],
    tf: [
      { statement: 'Each PCR cycle roughly doubles the number of copies of the target sequence.', isTrue: true, correction: 'Correct: 25–40 cycles give millions to over a trillion copies.', objectives: [`${PS}.pcr`], difficulty: 1 },
      { statement: 'Standard end-point PCR tells you how many template molecules were present at the start.', isTrue: false, correction: 'End-point PCR is not quantitative; real-time (quantitative) PCR is needed.', objectives: [`${PS}.rt-pcr`], difficulty: 1 },
    ],
    clues: [
      { answer: 'TAQ', clue: 'Heat-stable polymerase from Thermus aquaticus used in PCR', objectives: [`${PS}.pcr`], difficulty: 1 },
      { answer: 'PRIMER', clue: 'Short synthetic DNA that marks each end of the PCR target', objectives: [`${PS}.pcr`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'lab-gel',
    relevance: 'core',
    title: 'Reading a gel: deletions, repeat expansions and pathogens',
    discipline: 'biochemistry',
    alsoDisciplines: ['genetics'],
    system: 'multisystem',
    topic: 'biochem-lab',
    difficulty: 3,
    curriculum: [`${PS}.interpret`, `${PS}.pcr`],
    objectives: ['Read band position as fragment size', 'Interpret a gel for a deletion, a repeat expansion, a lost restriction site or a pathogen'],
    citations: [MB_DNA, MP_HD, MP_FRAGX, FRAGX_DX, FRAGX_SOUTHERN],
    facts: [
      'In agarose gel electrophoresis, DNA is loaded at the negative electrode and moves toward the positive electrode; the gel slows larger fragments, so smaller fragments travel farther. Bands are seen with a stain such as ethidium bromide under UV light.',
      'In restriction fragment analysis, a mutation that destroys a restriction site turns two shorter fragments into one longer fragment, so two short bands are replaced by one longer band.',
      'Huntington disease is caused by an expanded CAG repeat in HTT: normal alleles have 10–35 repeats, and 40 or more almost always cause disease; larger expansions give earlier onset.',
      'Fragile X syndrome is caused by more than 200 CGG repeats in FMR1, which silence the gene; 55–200 repeats is a premutation. Diagnosis moved from cytogenetics to Southern blot and PCR, and PCR methods now size full mutations and assess methylation.',
    ],
    factRefs: [[0], [0], [1], [2, 3, 4]],
    mechanism:
      'A gel is a sieve: position equals size. A deletion makes a product shorter, so it runs farther; a repeat expansion makes it longer, so it runs less far (or fails to amplify if very large); a lost restriction site joins two fragments into one longer band; a pathogen-specific PCR product appears as a band only when the target is present.',
    associations: ['Smaller runs farther', 'Negative → positive electrode', 'Ethidium bromide / UV', 'Restriction fragment pattern', 'CAG repeat (Huntington)', 'CGG repeat (fragile X)', 'Southern blot', 'Size ladder'],
    misconception:
      'The band nearest the wells is the largest fragment, not the most abundant one.',
    quick:
      'Gel = sieve: smaller fragments run farther toward the + electrode. Deletion → shorter (lower) band; repeat expansion → longer (higher) band; lost restriction site → one longer band instead of two shorter; pathogen PCR → band only if present.',
    detailed: [
      'DNA is negatively charged, so in an electric field it moves toward the positive electrode. The agarose matrix holds back long molecules, so distance travelled is inversely related to size, read against a ladder of known sizes.',
      'Clinical reading follows from size: a heterozygous deletion gives one normal and one shorter band; an expanded repeat (CAG in Huntington disease, CGG in fragile X) gives a longer band; a point mutation that removes a restriction site changes the digest pattern; a pathogen-specific PCR shows a band only when the organism is present.',
    ],
    takeaway: 'On a gel, farther = smaller; expansions run higher, deletions lower.',
    related: ['lab-pcr', 'lab-blotting'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'PCR across the HTT CAG repeat is run on a gel. A man’s lanes show one band at the normal size and one band well above it, nearer the wells. What does the upper band represent?',
        options: [
          ['a', 'An allele with an expanded (longer) CAG repeat'],
          ['b', 'An allele with a deletion of the repeat', 'A deletion shortens the product, so its band would run farther, not less far.'],
          ['c', 'A more abundant copy of the normal allele', 'Band position reflects size, not amount.'],
          ['d', 'Contaminating protein in the sample', 'Proteins are not stained or separated by this DNA gel in the same way.'],
          ['e', 'An RNA transcript of the HTT gene', 'PCR of genomic DNA amplifies DNA, not RNA.'],
        ],
        answer: 'a',
        mini: 'Longer fragments run less far. A band above the normal allele is a larger product: an expanded CAG repeat (40 or more almost always causes Huntington disease).',
        reasoning: 'interpretation',
        objectives: [`${PS}.interpret`],
        steps: ['On a gel, larger fragments migrate less far, staying nearer the wells.', 'The second band is larger than the normal allele.', 'A larger PCR product across a repeat = more repeats → expanded CAG allele.'],
        difficulty: 3,
      },
      {
        stem: 'A gene region is cut with a restriction enzyme and run on a gel. A control gives two short bands; a patient gives one longer band of their combined size. What is the most likely explanation?',
        options: [
          ['a', 'A mutation destroyed the restriction site'],
          ['b', 'The patient has an extra copy of the gene', 'An extra copy would not join the two fragments into one.'],
          ['c', 'The enzyme cut the patient’s DNA at more sites', 'More cutting gives more, shorter fragments, not one longer one.'],
          ['d', 'The gel ran for too short a time', 'Run time does not merge two fragments into a band of their combined size.'],
          ['e', 'The patient has a trinucleotide repeat expansion', 'An expansion lengthens one fragment; it does not remove a cut site.'],
        ],
        answer: 'a',
        mini: 'If the site between two fragments is lost, the enzyme cannot cut there: the two shorter fragments become one longer band of their combined size.',
        reasoning: 'interpretation',
        objectives: [`${PS}.interpret`],
        steps: ['The control is cut once, giving two shorter fragments.', 'The patient’s fragment equals their combined length.', 'So the cut did not happen: a mutation removed the restriction site.'],
        difficulty: 3,
      },
      {
        stem: 'PCR for a pathogen-specific gene is run on a patient sample, a positive control and a no-template control. Only the patient lane and the positive control show a band of the expected size. What does this indicate?',
        options: [
          ['a', 'The pathogen’s DNA is present in the sample'],
          ['b', 'The test failed because the no-template lane is blank', 'A blank no-template control is the expected result; it shows no contamination.'],
          ['c', 'The patient has antibodies to the pathogen', 'PCR detects nucleic acid, not antibodies.'],
          ['d', 'The patient carries a deletion in the pathogen gene', 'The band is the expected size, so no deletion is suggested.'],
          ['e', 'The band shows the amount of pathogen present', 'End-point PCR is not quantitative.'],
        ],
        answer: 'a',
        mini: 'A band of the expected size in the patient lane, with a working positive control and a clean no-template control, means the pathogen target was amplified: it is present.',
        reasoning: 'interpretation',
        objectives: [`${PS}.interpret`],
        steps: ['The positive control shows the test works.', 'The blank no-template control shows no contamination.', 'A band of the right size in the patient lane → pathogen DNA present.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'On an agarose gel, smaller DNA fragments travel farther than larger ones.', isTrue: true, correction: 'Correct: the gel slows large fragments, so small ones migrate farther toward the positive electrode.', objectives: [`${PS}.pcr`], difficulty: 1 },
      { statement: 'Fragile X syndrome is caused by more than 200 CGG repeats in FMR1.', isTrue: true, correction: 'Correct: the full mutation silences FMR1; 55–200 repeats is a premutation.', objectives: [`${PS}.interpret`], difficulty: 1 },
    ],
    clues: [
      { answer: 'ELECTROPHORESIS', clue: 'Gel technique that separates DNA fragments by size', objectives: [`${PS}.pcr`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'lab-sequencing',
    relevance: 'core',
    title: 'Sanger and next-generation sequencing; choosing the scope of a genetic test',
    discipline: 'biochemistry',
    alsoDisciplines: ['genetics'],
    system: 'multisystem',
    topic: 'biochem-lab',
    difficulty: 2,
    curriculum: [`${PS}.sequencing`],
    objectives: ['Recognize Sanger (chain-termination) and next-generation sequencing', 'Match single-variant, single-gene, panel and exome/genome tests to their uses'],
    citations: [MB_DNA, BIO_SEQ, MP_TEST_TYPES],
    facts: [
      'Sanger (chain-termination, dideoxy) sequencing copies a template with DNA polymerase and a small proportion of labeled dideoxynucleotides (ddNTPs); a ddNTP lacks the 3′-OH needed to add the next nucleotide, so each incorporation stops the chain.',
      'Next-generation (massively parallel) sequencing reads hundreds of thousands to millions of short fragments in a day, and software assembles them.',
      'Molecular genetic tests vary in scope: a targeted single-variant test (for example, testing relatives for a known familial variant), a single-gene test, a gene panel (when many genes can cause the symptoms), and whole-exome or whole-genome sequencing (when panels have not given a diagnosis or the cause is unclear).',
    ],
    factRefs: [[0, 1], [1], [2]],
    mechanism:
      'Sanger sequencing works by controlled stopping: a dideoxynucleotide has no 3′-OH, so the chain ends wherever one is added, and the lengths of the stopped fragments reveal the sequence. Next-generation sequencing reads millions of short fragments in parallel, which makes panels, exomes and genomes practical.',
    associations: ['Chain termination', 'ddNTP lacks 3′-OH', 'Next-generation (massively parallel) sequencing', 'Single-variant test', 'Single-gene test', 'Gene panel', 'Whole-exome sequencing', 'Whole-genome sequencing'],
    misconception:
      'Exome sequencing is not the first test for everyone: a known familial variant needs only a targeted test, and exome or genome sequencing is used when panels fail or the cause is unclear.',
    quick:
      'Sanger: ddNTP (no 3′-OH) stops the chain → fragment lengths give the sequence. NGS: millions of short reads in parallel. Scope: known familial variant → targeted test; one suspected gene → single-gene test; many possible genes → panel; still unclear → exome/genome.',
    detailed: [
      'Sanger sequencing copies a single-stranded template from a primer. A small fraction of each nucleotide is a labeled dideoxy form that lacks a 3′-OH, so wherever one is added synthesis stops; separating the stopped fragments by size reads the sequence one base at a time.',
      'Next-generation sequencing reads very many short fragments at once. In the clinic the scope is chosen to fit the question: a targeted test for a variant already known in the family, a single gene when one diagnosis is suspected, a panel when many genes give the same picture (for example epilepsy), and exome or genome sequencing when targeted testing has not found the cause.',
    ],
    takeaway: 'Sanger = chain termination by ddNTPs; NGS = massively parallel; match test scope to the clinical question.',
    related: ['lab-pcr', 'lab-test-choice'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'In Sanger sequencing, why does adding a dideoxynucleotide stop the growing DNA chain?',
        options: [
          ['a', 'It lacks the 3′-OH needed for the next bond'],
          ['b', 'It cannot pair with the template base', 'Dideoxynucleotides pair normally; they are incorporated before stopping the chain.'],
          ['c', 'It denatures the DNA polymerase', 'The polymerase is not damaged; the chain simply cannot be extended.'],
          ['d', 'It removes the primer from the template', 'Primer removal is not how chain termination works.'],
          ['e', 'It is cut out by proofreading at once', 'If it were removed, synthesis would continue rather than stop.'],
        ],
        answer: 'a',
        mini: 'DNA polymerase links each new nucleotide to the 3′-OH of the last one. A ddNTP has no 3′-OH, so the chain ends wherever it is incorporated.',
        reasoning: 'mechanism',
        objectives: [`${PS}.sequencing`],
        difficulty: 2,
      },
      {
        stem: 'A child has seizures that could be caused by variants in any of hundreds of genes. No variant is known in the family. Which test is the most efficient first molecular test?',
        options: [
          ['a', 'A multigene panel for epilepsy genes'],
          ['b', 'A targeted test for a single known variant', 'No familial variant is known, so there is nothing to target.'],
          ['c', 'A karyotype', 'A karyotype detects large chromosomal changes, not variants within single genes.'],
          ['d', 'Sanger sequencing of one gene at a time', 'Testing hundreds of genes one by one is slow and costly.'],
          ['e', 'A Western blot of blood proteins', 'Protein blotting does not test for gene variants.'],
        ],
        answer: 'a',
        mini: 'When many genes can cause the same picture, a gene panel tests them together. Exome or genome sequencing follows if the panel finds nothing.',
        reasoning: 'identification',
        objectives: [`${PS}.sequencing`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'Next-generation sequencing reads very large numbers of short DNA fragments in parallel.', isTrue: true, correction: 'Correct: software then assembles the short reads.', objectives: [`${PS}.sequencing`], difficulty: 1 },
      { statement: 'Relatives of a person with a known familial variant are usually tested with whole-exome sequencing.', isTrue: false, correction: 'A targeted single-variant test is used; exome sequencing is for unclear causes.', objectives: [`${PS}.sequencing`], difficulty: 1 },
    ],
    clues: [
      { answer: 'DIDEOXY', clue: 'Type of nucleotide that ends the chain in Sanger sequencing', objectives: [`${PS}.sequencing`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'lab-blotting',
    relevance: 'core',
    title: 'Southern, Northern, Western and Southwestern blots',
    discipline: 'biochemistry',
    alsoDisciplines: ['microbiology', 'genetics'],
    system: 'multisystem',
    topic: 'biochem-lab',
    difficulty: 2,
    curriculum: [`${BL}.choose`, `${BL}.western`],
    objectives: ['Choose the blot that detects DNA, RNA, protein or a DNA-binding protein', 'Interpret a Western blot as a confirmatory test'],
    citations: [MB_DNA, MB_COMPLEX, MP_DMD, DMD_WB, DMD_REVIEW, LYME_TWO_TIER, LYME_SEROLOGY, HIV_ALGORITHM, DMD_CLINICAL],
    facts: [
      'In a Southern blot, DNA fragments are separated by agarose gel electrophoresis, transferred to a membrane and detected with a labeled DNA probe. In a Northern blot, RNA is immobilized and probed, typically to measure how much mRNA a gene makes.',
      'In a Western blot, proteins are separated by gel electrophoresis (SDS-PAGE), transferred to a membrane and detected with a primary antibody and a labeled secondary antibody. A Southwestern blot probes separated proteins with a labeled DNA probe to find DNA-binding proteins.',
      'Duchenne muscular dystrophy results from DMD mutations that prevent any functional dystrophin; mutations that leave an abnormal but partly functional dystrophin usually cause the milder Becker form. Western blot of muscle dystrophin helps distinguish them.',
      'Lyme disease is diagnosed by two-tier antibody testing: a sensitive ELISA first, then a confirmatory second tier, classically a Western blot; some algorithms now use a second immunoassay instead.',
      'In current HIV testing, a reactive antigen/antibody screen is followed by an HIV-1/HIV-2 antibody differentiation assay, which has replaced the HIV-1 Western blot as the supplemental test.',
      'Classic Duchenne features in a young boy include difficulty rising from the floor (Gowers sign), calf pseudohypertrophy, hypotonia and a raised creatine kinase.',
    ],
    factRefs: [[0], [1], [2, 3, 4], [5, 6], [7], [8]],
    mechanism:
      'Every blot separates molecules on a gel, transfers them to a membrane and finds one target with a specific probe. The probe decides the blot: DNA probe for DNA (Southern) or RNA (Northern), antibody for protein (Western), DNA probe for a DNA-binding protein (Southwestern).',
    associations: ['Southern = DNA', 'Northern = RNA', 'Western = protein', 'Southwestern = DNA-binding protein', 'SDS-PAGE', 'Dystrophin (DMD vs Becker)', 'Lyme two-tier testing', 'HIV differentiation assay'],
    misconception:
      'The Western blot is no longer the confirmatory test in the standard HIV algorithm: a differentiation immunoassay follows a reactive antigen/antibody screen.',
    quick:
      'Southern = DNA, Northern = RNA (mRNA amount), Western = protein (antibody probe), Southwestern = DNA-binding protein. Western confirms: absent dystrophin (Duchenne) vs abnormal/reduced (Becker); Lyme two-tier (ELISA → Western). HIV: differentiation assay has replaced Western blot.',
    detailed: [
      'Blots share three steps: separate by size on a gel, transfer to a membrane, detect with a labeled probe. Southern blots detect DNA and Northern blots RNA with nucleic acid probes; Western blots detect protein with antibodies; Southwestern blots find proteins that bind a DNA probe.',
      'Western blotting is used to confirm a specific protein. In muscle, absent dystrophin points to Duchenne and an abnormal or reduced band to Becker muscular dystrophy. In Lyme serology, a positive screening ELISA is followed by a second tier, classically a Western blot of antibody bands. HIV is the exception to remember: its supplemental test is now a differentiation immunoassay.',
    ],
    takeaway: 'SNoW DRoP-style pairing: Southern DNA, Northern RNA, Western protein; Western confirms a specific protein.',
    related: ['lab-elisa', 'lab-gel'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A researcher wants to measure how much mRNA a tissue makes from a particular gene. Which blot is designed for this?',
        options: [
          ['a', 'Northern blot'],
          ['b', 'Southern blot', 'Southern blots detect DNA, which is present whether or not the gene is expressed.'],
          ['c', 'Western blot', 'Western blots detect protein with antibodies.'],
          ['d', 'Southwestern blot', 'Southwestern blots find DNA-binding proteins.'],
          ['e', 'Dot blot of genomic DNA', 'A dot blot of DNA does not measure mRNA.'],
        ],
        answer: 'a',
        mini: 'Northern blots immobilize RNA and probe it, so they show how much mRNA a gene makes. Southern = DNA, Western = protein.',
        reasoning: 'recall',
        objectives: [`${BL}.choose`],
        difficulty: 1,
      },
      {
        stem: 'A scientist suspects a nuclear protein binds a specific promoter sequence. Proteins are separated by SDS-PAGE, transferred and probed with that labeled DNA sequence. What is this technique?',
        options: [
          ['a', 'Southwestern blot'],
          ['b', 'Northern blot', 'Northern blots probe immobilized RNA.'],
          ['c', 'Southern blot', 'Southern blots probe immobilized DNA, not proteins.'],
          ['d', 'Western blot', 'A Western blot probes proteins with antibodies, not DNA.'],
          ['e', 'Indirect ELISA', 'ELISA is done in wells with antibodies, not by probing a protein blot with DNA.'],
        ],
        answer: 'a',
        mini: 'Separated proteins probed with labeled DNA = Southwestern blot, which identifies DNA-binding proteins such as transcription factors.',
        reasoning: 'identification',
        objectives: [`${BL}.choose`],
        difficulty: 2,
      },
      {
        stem: 'Two boys with proximal muscle weakness have muscle biopsies. On Western blot for dystrophin, boy A has no band; boy B has a band that is fainter and smaller than normal. Which interpretation fits?',
        options: [
          ['a', 'A: Duchenne (no dystrophin); B: Becker (abnormal dystrophin)'],
          ['b', 'A: Becker; B: Duchenne', 'Duchenne lacks functional dystrophin; Becker keeps an abnormal, partly functional protein.'],
          ['c', 'Both have Duchenne; the blot differs only by sample', 'A reduced, abnormal band is the pattern of Becker dystrophy.'],
          ['d', 'Neither has a dystrophinopathy', 'Absent or abnormal dystrophin defines a dystrophinopathy.'],
          ['e', 'Both need a Southern blot before any interpretation', 'The protein result itself distinguishes the two forms.'],
        ],
        answer: 'a',
        mini: 'Western blot shows the protein: no dystrophin → Duchenne; an abnormal, reduced but present dystrophin → milder Becker muscular dystrophy.',
        reasoning: 'interpretation',
        objectives: [`${BL}.western`],
        steps: ['A Western blot shows whether dystrophin is present and its size and amount.', 'Mutations that prevent any functional dystrophin cause Duchenne.', 'Mutations that leave an abnormal, partly functional protein cause Becker.'],
        difficulty: 3,
      },
      {
        stem: 'A hiker with a spreading rash and joint pain has a positive Lyme disease ELISA. What is the purpose of the follow-up immunoblot (Western blot)?',
        options: [
          ['a', 'To confirm antibodies to specific Borrelia proteins'],
          ['b', 'To measure how many bacteria are in the blood', 'Serologic blots detect antibodies, not the number of organisms.'],
          ['c', 'To replace the ELISA, which is not sensitive', 'The ELISA is the sensitive first tier; the blot confirms it.'],
          ['d', 'To detect Borrelia DNA in the joint fluid', 'Western blots detect proteins (here, antibodies binding them), not DNA.'],
          ['e', 'To identify the patient’s HLA type', 'HLA typing is not part of Lyme serology.'],
        ],
        answer: 'a',
        mini: 'Two-tier Lyme testing: a sensitive ELISA screens, then a second tier (classically a Western blot showing antibody bands to specific Borrelia proteins) confirms.',
        reasoning: 'interpretation',
        objectives: [`${BL}.western`],
        steps: ['The ELISA is sensitive but can be falsely positive.', 'A confirmatory second tier is therefore needed.', 'The Western blot shows antibodies against specific Borrelia proteins, confirming true infection.'],
        difficulty: 3,
      },
      {
        stem: 'A mutation is suspected to block translation of a gene’s mRNA without affecting transcription. Which pair of blot results would support this?',
        options: [
          ['a', 'Northern: normal mRNA; Western: protein absent'],
          ['b', 'Northern: mRNA absent; Western: protein absent', 'Absent mRNA would mean transcription (or mRNA stability) is affected.'],
          ['c', 'Southern: gene absent; Western: protein normal', 'A missing gene with normal protein is contradictory and does not test translation.'],
          ['d', 'Northern: normal mRNA; Western: protein normal', 'Normal protein means translation is working.'],
          ['e', 'Southwestern: DNA binding lost; Northern: mRNA absent', 'This tests a DNA-binding protein and transcription, not translation.'],
        ],
        answer: 'a',
        mini: 'Northern measures mRNA and Western measures protein. Normal mRNA with absent protein places the block after transcription, at translation (or protein stability).',
        reasoning: 'prediction',
        objectives: [`${BL}.choose`],
        steps: ['Transcription makes mRNA (measured by Northern blot); translation makes protein (measured by Western blot).', 'If only translation is blocked, mRNA is made normally.', 'So mRNA is normal on the Northern blot but protein is absent on the Western blot.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'A Western blot uses antibodies to detect a specific protein.', isTrue: true, correction: 'Correct: proteins are separated by SDS-PAGE, transferred and detected with antibodies.', objectives: [`${BL}.choose`], difficulty: 1 },
      { statement: 'In the current HIV testing algorithm, a reactive antigen/antibody screen is confirmed with an HIV-1 Western blot.', isTrue: false, correction: 'An HIV-1/HIV-2 differentiation assay has replaced the Western blot as the supplemental test.', objectives: [`${BL}.western`], difficulty: 2 },
    ],
    clues: [
      { answer: 'NORTHERN', clue: 'Blot that detects RNA', objectives: [`${BL}.choose`], difficulty: 1 },
      { answer: 'SOUTHWESTERN', clue: 'Blot that finds DNA-binding proteins', objectives: [`${BL}.choose`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'lab-elisa',
    relevance: 'core',
    title: 'ELISA: direct, indirect and sandwich assays; screening and confirmation',
    discipline: 'biochemistry',
    alsoDisciplines: ['microbiology', 'immunology'],
    system: 'multisystem',
    alsoSystems: ['blood-immune'],
    topic: 'biochem-lab',
    difficulty: 2,
    curriculum: [`${EF}.elisa`],
    objectives: ['Explain direct, indirect and sandwich ELISA', 'Explain why ELISA screens and why positives are confirmed'],
    citations: [MB_ELISA, MP_HIV_TEST, HIV_4TH_GEN, LYME_SEROLOGY, HIV_ALGORITHM],
    facts: [
      'ELISAs use an antibody linked to an enzyme; adding a colorless substrate (chromogen) gives a colored product, which detects or quantifies the target.',
      'A direct ELISA uses one enzyme-labeled antibody against the antigen; it is faster but less sensitive. A sandwich ELISA captures antigen between two antibodies to quantify it (for example a pathogen antigen or a hormone).',
      'An indirect ELISA puts known antigen (for example HIV peptides) in the well; the patient’s antibodies bind it and are detected with an enzyme-linked anti-human immunoglobulin, so it detects antibodies. It is widely used for HIV and Lyme screening.',
      'Cross-reacting antibodies can cause false-positive ELISA results, so a positive screen is confirmed with a more specific test.',
      'Most HIV tests now detect both HIV antibodies and antigen (p24); these fourth-generation assays are prone to false positives, so reactive results are confirmed, now with an HIV-1/HIV-2 differentiation assay.',
    ],
    factRefs: [[0], [0], [0], [0, 3], [1, 2, 4]],
    mechanism:
      'An enzyme attached to an antibody turns a colorless substrate into color, so binding becomes visible and measurable. What sits on the plate decides what is detected: capture antibody to find antigen (direct or sandwich), or known antigen to find the patient’s antibodies (indirect). High sensitivity makes ELISA a good screen; cross-reactivity means positives need confirmation.',
    associations: ['Enzyme-linked antibody', 'Chromogen', 'Direct ELISA (antigen)', 'Indirect ELISA (patient antibody)', 'Sandwich ELISA (quantify antigen)', 'HIV Ag/Ab (4th generation)', 'Lyme first tier', 'Confirm positives'],
    misconception:
      'A positive screening ELISA is not a diagnosis: cross-reacting antibodies can give false positives, so a more specific test confirms it.',
    quick:
      'ELISA: enzyme-linked antibody + chromogen → color. Direct/sandwich: detect or quantify antigen. Indirect: antigen on plate detects patient antibodies (HIV, Lyme screening). Sensitive screen; confirm positives (HIV: differentiation assay).',
    detailed: [
      'In every ELISA an enzyme bound to an antibody converts a colorless chromogen into a colored product. In a direct ELISA a labeled antibody binds the antigen; in a sandwich ELISA antigen is captured between two antibodies, which allows precise quantification of things like hormones or pathogen antigens.',
      'An indirect ELISA asks a different question: does the patient have antibodies? Known antigen coats the well, patient serum is added, and an enzyme-linked anti-human antibody reveals any bound antibody. Because screening ELISAs are sensitive but can cross-react, positives are confirmed with a more specific test.',
    ],
    takeaway: 'ELISA: enzyme + chromogen; indirect finds antibodies, sandwich quantifies antigen; screen, then confirm.',
    related: ['lab-blotting', 'lab-flow'],
    outline: found(MS, INF),
    mcq: [
      {
        stem: 'In an HIV screening ELISA, HIV peptides coat the wells, patient serum is added, and then an enzyme-linked anti-human immunoglobulin. What does a color change show?',
        options: [
          ['a', 'The patient has antibodies against HIV'],
          ['b', 'HIV RNA is present in the serum', 'This assay detects antibodies; HIV RNA is measured by RT-PCR.'],
          ['c', 'The patient’s CD4 count is low', 'CD4 counts are measured by flow cytometry.'],
          ['d', 'The enzyme bound directly to free virus', 'The enzyme is on the anti-human antibody; it binds the patient’s antibodies.'],
          ['e', 'HIV has integrated into the patient’s DNA', 'Integration is not measured by ELISA.'],
        ],
        answer: 'a',
        mini: 'Antigen on the plate + patient serum + enzyme-linked anti-human Ig = indirect ELISA. Color means the patient’s antibodies bound the HIV antigen.',
        reasoning: 'mechanism',
        objectives: [`${EF}.elisa`],
        difficulty: 2,
      },
      {
        stem: 'A blood donor has a reactive HIV antigen/antibody screening test but no risk factors. What is the appropriate interpretation and next step?',
        options: [
          ['a', 'Possible false positive; confirm with a specific supplemental test'],
          ['b', 'HIV infection is confirmed; start therapy', 'A screening immunoassay alone cannot confirm infection.'],
          ['c', 'The test is invalid because ELISAs are insensitive', 'Screening immunoassays are sensitive; their weakness is false positives.'],
          ['d', 'Repeat only a karyotype to check for errors', 'A karyotype has no role in HIV diagnosis.'],
          ['e', 'Confirm with a CD4 count by flow cytometry', 'A CD4 count stages immune damage; it does not confirm infection.'],
        ],
        answer: 'a',
        mini: 'Screening immunoassays are sensitive but can be falsely positive (cross-reacting antibodies). A reactive screen is confirmed with a specific supplemental test, now an HIV-1/HIV-2 differentiation assay.',
        reasoning: 'interpretation',
        objectives: [`${EF}.elisa`],
        steps: ['Screening ELISAs are chosen for sensitivity.', 'Their trade-off is false positives, especially when infection is unlikely.', 'So a reactive screen needs a specific confirmatory test before diagnosis.'],
        difficulty: 3,
      },
      {
        stem: 'A laboratory needs to measure the concentration of a hormone in serum by capturing it between two antibodies. Which assay is this?',
        options: [
          ['a', 'Sandwich ELISA'],
          ['b', 'Indirect ELISA', 'An indirect ELISA detects the patient’s antibodies, not an antigen such as a hormone.'],
          ['c', 'Southern blot', 'Southern blots detect DNA fragments.'],
          ['d', 'Karyotype', 'A karyotype examines chromosomes.'],
          ['e', 'Flow cytometry', 'Flow cytometry measures markers on cells, not hormone levels in serum.'],
        ],
        answer: 'a',
        mini: 'A sandwich ELISA captures antigen between a plate-bound antibody and an enzyme-linked antibody, allowing precise quantification of antigens such as hormones.',
        reasoning: 'recall',
        objectives: [`${EF}.elisa`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'An indirect ELISA detects antibodies in the patient’s serum.', isTrue: true, correction: 'Correct: known antigen captures the patient’s antibodies, revealed by an enzyme-linked anti-human antibody.', objectives: [`${EF}.elisa`], difficulty: 1 },
      { statement: 'A single positive screening ELISA is enough to diagnose HIV infection.', isTrue: false, correction: 'Cross-reactivity causes false positives, so reactive screens are confirmed with a specific test.', objectives: [`${EF}.elisa`], difficulty: 1 },
    ],
    clues: [
      { relevance: 'supplementary', relevanceNote: 'Assay terminology rather than a tested principle.', answer: 'CHROMOGEN', clue: 'Colorless enzyme substrate that turns colored in an ELISA', objectives: [`${EF}.elisa`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'lab-flow',
    relevance: 'core',
    title: 'Flow cytometry: CD4 counts and PNH',
    discipline: 'biochemistry',
    alsoDisciplines: ['immunology', 'pathology'],
    system: 'blood-immune',
    topic: 'biochem-lab',
    difficulty: 3,
    curriculum: [`${EF}.flow`],
    objectives: ['Explain how flow cytometry counts labeled cells', 'Read histograms and two-marker dot plots', 'Interpret flow results for CD4 counts and PNH'],
    citations: [MB_FA, MP_CD4, MP_PNH, PNH_FLOW, PNH_FLAER],
    facts: [
      'Flow cytometry counts cells labeled with fluorescent monoclonal antibodies as they pass single file through a laser; two markers can be studied at once with different fluorochromes. In a histogram, the x-axis is fluorescence (log scale), the y-axis is cell number, and the area under each peak is proportional to the number of cells in that population.',
      'In HIV infection, CD4 T-cell counts guide care: below 500 per μL the risk of opportunistic infections rises, and below 200 per μL the patient can no longer mount a useful adaptive immune response.',
      'A CD4 count is a blood test of CD4 (helper T) cells, mostly used to monitor the immune system in HIV infection, which destroys CD4 cells.',
      'In paroxysmal nocturnal hemoglobinuria (an acquired PIGA defect), blood cells lack GPI-anchored proteins such as CD55 and CD59 and bind little FLAER; flow cytometry of red cells and neutrophils is the standard diagnostic test.',
      'When two markers are labeled with different fluorochromes, results can be shown as a two-parameter dot plot: each dot is one cell placed by its fluorescence for each marker, so the four quadrants separate double-negative, single-positive and double-positive cells.',
    ],
    factRefs: [[0], [0], [1], [2, 3, 4], [0]],
    mechanism:
      'Each cell is tagged with fluorescent antibodies against surface markers and passed through a laser one at a time; the detector counts how many cells fluoresce and how brightly. Losing a marker shows up as a population that does not fluoresce: CD4 cells disappearing in HIV, or red cells and neutrophils missing GPI-anchored CD55 and CD59 in PNH.',
    associations: ['Fluorescent monoclonal antibodies', 'Single-file cells, laser', 'Histogram: fluorescence vs cell number', 'CD4 count (<200/μL)', 'PNH: CD55⁻ CD59⁻', 'FLAER', 'GPI anchor (PIGA)'],
    misconception:
      'In a flow histogram, the height of a peak is not the whole story: the area under the peak is proportional to the number of cells in that population.',
    quick:
      'Flow cytometry: fluorescent antibody-labeled cells pass single file through a laser → counts per marker. CD4 count: HIV monitoring (<200/μL = severe immunodeficiency). PNH: red cells and neutrophils lack GPI-anchored CD55/CD59 (low FLAER).',
    detailed: [
      'Cells are incubated with fluorescent monoclonal antibodies against surface markers such as CD4, then pushed in single file past a laser. The instrument records each cell’s fluorescence, so populations can be counted. Results are often shown as a histogram of fluorescence (x-axis, log scale) against cell number, where the area under each peak reflects the size of that population.',
      'Two clinical uses stand out. In HIV infection, the CD4 count shows how far the immune system has been damaged: below 200 per μL, the patient cannot mount a useful adaptive response. In paroxysmal nocturnal hemoglobinuria, an acquired PIGA defect removes GPI-anchored proteins, so a population of red cells and neutrophils is negative for CD55 and CD59 (and binds little FLAER).',
    ],
    takeaway: 'Flow = count cells by fluorescent markers: CD4 in HIV; CD55/CD59-negative cells in PNH.',
    related: ['lab-elisa'],
    outline: found('Immune System', 'Disorders associated with immunodeficiency'),
    mcq: [
      {
        stem: 'A young adult has episodes of dark morning urine, hemolytic anemia and a thrombosis in a large abdominal vein. Flow cytometry of red cells shows a large population with no CD55 or CD59 staining. What is the underlying defect?',
        options: [
          ['a', 'Acquired loss of GPI anchors from a PIGA mutation'],
          ['b', 'Inherited spectrin deficiency in the red cell membrane', 'Spherocytosis does not remove GPI-anchored proteins.'],
          ['c', 'Antibodies coating the red cells', 'Autoimmune hemolysis shows antibody on red cells, not loss of CD55 and CD59.'],
          ['d', 'Deficiency of glucose-6-phosphate dehydrogenase', 'G6PD deficiency causes oxidant hemolysis without loss of GPI-anchored proteins.'],
          ['e', 'A JAK2 V617F mutation in marrow stem cells', 'JAK2 V617F causes myeloproliferative neoplasms, not CD55/CD59 loss.'],
        ],
        answer: 'a',
        mini: 'Cells negative for CD55 and CD59 lack GPI-anchored proteins: paroxysmal nocturnal hemoglobinuria, caused by an acquired PIGA mutation in a blood stem cell.',
        reasoning: 'interpretation',
        objectives: [`${EF}.flow`],
        steps: ['CD55 and CD59 are GPI-anchored surface proteins.', 'A population missing both points to failure of the GPI anchor.', 'With hemolysis and dark morning urine → PNH (acquired PIGA defect).'],
        difficulty: 3,
      },
      {
        stem: 'How does a flow cytometer measure the number of CD4 T cells in a blood sample?',
        options: [
          ['a', 'Fluorescent anti-CD4 cells are counted passing a laser'],
          ['b', 'CD4 DNA is amplified by PCR and run on a gel', 'Flow cytometry measures labeled cells, not amplified DNA.'],
          ['c', 'Serum is added to wells coated with CD4 antigen', 'That describes an indirect ELISA for antibodies.'],
          ['d', 'Chromosomes are arrested in metaphase and counted', 'That describes karyotyping.'],
          ['e', 'Proteins are separated by SDS-PAGE and blotted', 'That describes a Western blot.'],
        ],
        answer: 'a',
        mini: 'Cells are labeled with a fluorescent anti-CD4 monoclonal antibody and pass single file through a laser; the instrument counts the fluorescent cells.',
        reasoning: 'mechanism',
        objectives: [`${EF}.flow`],
        difficulty: 2,
      },
      {
        stem: 'A patient with HIV has a CD4 count of 150 per μL on flow cytometry. What does this result indicate?',
        options: [
          ['a', 'Severe loss of adaptive immunity with high opportunistic risk'],
          ['b', 'A normal CD4 count with no added risk', 'Below 200 per μL is far below normal.'],
          ['c', 'HIV infection has been confirmed by this test', 'A CD4 count stages immune damage; it does not diagnose HIV.'],
          ['d', 'High viral load, measured directly', 'Viral load is measured by quantitative RT-PCR, not by CD4 count.'],
          ['e', 'A false result, because flow cannot count T cells', 'Flow cytometry is the standard way to count CD4 T cells.'],
        ],
        answer: 'a',
        mini: 'Below 200 CD4 cells per μL the patient can no longer mount a useful adaptive immune response, so opportunistic infections become likely.',
        reasoning: 'interpretation',
        objectives: [`${EF}.flow`],
        steps: ['HIV destroys CD4 T cells, and flow cytometry counts them.', 'Below 500 per μL infection risk rises; below 200 per μL adaptive immunity fails.', '150 per μL → severe immunodeficiency with high opportunistic risk.'],
        difficulty: 3,
      },
      {
        stem: 'A dot plot of a patient’s T cells shows CD4 fluorescence on the y-axis and CD8 on the x-axis. Most cells fall in the lower-right quadrant and few in the upper-left. What does this show?',
        options: [
          ['a', 'CD4 T cells are depleted relative to CD8 T cells'],
          ['b', 'CD8 T cells are depleted relative to CD4 T cells', 'The lower-right quadrant is CD8-positive, CD4-negative, and it holds most cells.'],
          ['c', 'Most T cells express both CD4 and CD8', 'Double-positive cells would fall in the upper-right quadrant.'],
          ['d', 'The cells express neither marker', 'Double-negative cells would fall in the lower-left quadrant.'],
          ['e', 'The sample contains red cells lacking CD59', 'CD59 loss is a PNH finding and is not what this plot measures.'],
        ],
        answer: 'a',
        mini: 'Each dot is one cell. Upper-left = CD4⁺CD8⁻; lower-right = CD8⁺CD4⁻. Most cells lower-right with few upper-left means CD4 T cells are depleted, as in advanced HIV infection.',
        reasoning: 'interpretation',
        objectives: [`${EF}.flow`],
        steps: ['Each axis is one marker; a dot’s position shows that cell’s fluorescence for both.', 'Lower-right = CD8-positive, CD4-negative; upper-left = CD4-positive, CD8-negative.', 'Many lower-right and few upper-left cells → CD4 T cells depleted relative to CD8.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'In paroxysmal nocturnal hemoglobinuria, affected blood cells lack GPI-anchored proteins such as CD55 and CD59.', isTrue: true, correction: 'Correct: flow cytometry shows CD55/CD59-negative red cells and neutrophils.', objectives: [`${EF}.flow`], difficulty: 1 },
      { relevance: 'supplementary', relevanceNote: 'Histogram mechanics are technical detail; reading which population is present or missing is core.', statement: 'In a flow cytometry histogram, the area under a peak reflects the number of cells in that population.', isTrue: true, correction: 'Correct: x-axis = fluorescence (log), y-axis = cell number.', objectives: [`${EF}.flow`], difficulty: 2 },
    ],
    clues: [
      { answer: 'CYTOMETRY', clue: 'Flow ___: counts fluorescent-labeled cells passing a laser', objectives: [`${EF}.flow`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'lab-microarray',
    relevance: 'core',
    title: 'Microarrays: expression profiles, SNPs and copy-number changes',
    discipline: 'biochemistry',
    alsoDisciplines: ['genetics'],
    system: 'multisystem',
    topic: 'biochem-lab',
    difficulty: 2,
    curriculum: [`${EF}.microarray`],
    objectives: ['Recognize microarrays as thousands of hybridization tests at once'],
    citations: [MB_DNA, CMA_SNP, CMA_YIELD],
    facts: [
      'A microarray holds thousands of known DNA sequences (more than 30,000 per slide) on a glass slide. Labeled DNA or cDNA (made from mRNA by reverse transcriptase) from two samples, typically with red and green dyes, hybridizes to complementary spots, comparing gene expression between samples such as cancerous and healthy cells.',
      'SNP-based chromosomal microarrays detect pathogenic copy-number changes in children whose standard karyotypes are normal.',
      'Chromosomal microarray detects chromosomal imbalances and is recommended as a first-tier test for developmental delay, intellectual disability, autism and multiple congenital anomalies.',
    ],
    factRefs: [[0], [1], [2]],
    mechanism:
      'A microarray is many hybridization tests at once: each spot is a known sequence, and the color and intensity of labeled sample bound to it reports how much of that sequence (or its mRNA) the sample contains. Expression arrays compare mRNA; chromosomal arrays compare DNA copy number.',
    associations: ['Thousands of spots', 'Hybridization', 'Two-color comparison', 'Gene expression profiling', 'SNP array', 'Copy-number variants'],
    misconception:
      'Microarrays measure how much of each sequence is present; they do not read the order of bases the way sequencing does.',
    quick:
      'Microarray: thousands of known sequences on a slide; labeled sample DNA/cDNA hybridizes → expression profile (cancer vs normal) or copy-number changes and SNPs (chromosomal microarray, first-tier for developmental delay).',
    detailed: [
      'In a microarray, known DNA fragments are fixed in thousands of spots. Sample DNA, or cDNA made from mRNA, is labeled with fluorescent dye and allowed to hybridize; comparing two samples labeled red and green shows which genes are more or less active in each.',
      'The same principle applied to genomic DNA measures copy number across the genome. Chromosomal (often SNP-based) microarrays find deletions and duplications too small for a karyotype and are used first for unexplained developmental delay or multiple anomalies.',
    ],
    takeaway: 'Microarray = thousands of hybridizations at once: expression profiles or copy-number changes.',
    related: ['lab-test-choice', 'lab-karyotype'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'Researchers want to compare the activity of thousands of genes in a tumor with nearby normal tissue in one experiment. Which technique fits best?',
        options: [
          ['a', 'cDNA microarray with two-color labeling'],
          ['b', 'Southern blot with one probe', 'A Southern blot detects one DNA sequence at a time and does not measure expression.'],
          ['c', 'Karyotype of the tumor cells', 'A karyotype shows chromosomes, not gene expression.'],
          ['d', 'Sanger sequencing of one gene', 'Sequencing one gene does not compare the activity of thousands.'],
          ['e', 'Sandwich ELISA for one protein', 'An ELISA measures one antigen at a time.'],
        ],
        answer: 'a',
        mini: 'An expression microarray hybridizes labeled cDNA from two samples (red and green) to thousands of spots at once, comparing gene activity.',
        reasoning: 'recall',
        objectives: [`${EF}.microarray`],
        difficulty: 1,
      },
    ],
    tf: [
      { statement: 'A microarray can test a sample against tens of thousands of known DNA sequences at once.', isTrue: true, correction: 'Correct: each spot holds a known sequence for hybridization.', objectives: [`${EF}.microarray`], difficulty: 1 },
    ],
    clues: [
      { answer: 'MICROARRAY', clue: 'Slide of thousands of DNA spots used for expression or copy-number analysis', objectives: [`${EF}.microarray`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'lab-karyotype',
    relevance: 'core',
    title: 'Karyotyping',
    discipline: 'biochemistry',
    alsoDisciplines: ['genetics'],
    system: 'multisystem',
    alsoSystems: ['reproductive'],
    topic: 'biochem-lab',
    difficulty: 2,
    curriculum: [`${KF}.karyotype`],
    objectives: ['Explain how a karyotype is made', 'Identify what a karyotype detects'],
    citations: [BIO_KARYO, MP_TEST_TYPES, CML_TESTS, MP_DOWN],
    facts: [
      'To make a karyotype, cells are stimulated to divide, colchicine arrests the condensed chromosomes in metaphase, and the chromosomes are stained to show their reproducible banding patterns; they are then arranged by size, centromere position and banding.',
      'Chromosomal tests detect large-scale changes: an extra or missing chromosome (trisomy, monosomy), large duplications or deletions, and rearrangements such as translocations; for example, Down syndrome is trisomy 21.',
      'Conventional karyotyping detects the t(9;22) of chronic myeloid leukemia but misses some BCR-ABL1 rearrangements, which more sensitive molecular tests detect.',
      'Down syndrome causes hypotonia in infancy, upslanting palpebral fissures, a single palmar crease and, in about half, a heart defect. Most cases are trisomy 21 arising at random; translocation Down syndrome can be inherited from an unaffected parent who carries a rearrangement between chromosome 21 and another chromosome.',
    ],
    factRefs: [[0], [1, 0], [2], [3]],
    mechanism:
      'Chromosomes are only visible as distinct structures when condensed in dividing cells, so cells are grown, stopped in metaphase with colchicine and stained to show bands. The picture shows number and large structural changes, but not small changes below the resolution of banding.',
    associations: ['Dividing cells', 'Colchicine → metaphase arrest', 'Banding', 'Karyogram', 'Trisomy 21', 'Translocations', 'Philadelphia chromosome t(9;22)'],
    misconception:
      'A normal karyotype does not exclude small deletions or single-gene changes; those need FISH, microarray or sequencing.',
    quick:
      'Karyotype: dividing cells → colchicine (metaphase) → banding stain → karyogram. Detects aneuploidy (trisomy 21), large deletions/duplications, translocations (t(9;22) in CML). Misses microdeletions and point mutations.',
    detailed: [
      'Karyotyping needs dividing cells. Cultured cells are arrested in metaphase with colchicine, when chromosomes are most condensed, then stained so each chromosome shows a characteristic banding pattern and can be paired and ordered by size and centromere position.',
      'The result shows chromosome number and large structural changes: trisomies such as Down syndrome, large deletions or duplications, and translocations such as t(9;22) in chronic myeloid leukemia. Smaller changes fall below its resolution and need targeted molecular tests.',
    ],
    takeaway: 'Karyotype = metaphase chromosomes, banded: number and large structural changes only.',
    related: ['lab-fish', 'lab-test-choice'],
    outline: listed('Pregnancy, Childbirth, & the Puerperium', 'Prenatal care'),
    mcq: [
      {
        stem: 'Why is colchicine added to cultured cells when preparing a karyotype?',
        options: [
          ['a', 'To arrest dividing cells in metaphase'],
          ['b', 'To stain the chromosomes for banding', 'Banding comes from a separate stain after arrest.'],
          ['c', 'To start the cells dividing', 'Cells are stimulated to divide first; colchicine then stops them in metaphase.'],
          ['d', 'To separate DNA fragments by size', 'Size separation is done by gel electrophoresis, not in karyotyping.'],
          ['e', 'To label a specific chromosome region', 'Labeling a specific region with a probe is FISH.'],
        ],
        answer: 'a',
        mini: 'Colchicine blocks spindle formation, arresting cells in metaphase, when chromosomes are most condensed and visible; staining then shows the bands.',
        reasoning: 'mechanism',
        objectives: [`${KF}.karyotype`],
        difficulty: 2,
      },
      {
        stem: 'A newborn has upslanting palpebral fissures, a single palmar crease, hypotonia and a heart defect. Which test confirms the diagnosis and also shows whether a translocation is involved?',
        options: [
          ['a', 'Karyotype'],
          ['b', 'Sanger sequencing of one gene', 'A single-gene test cannot show an extra chromosome or a translocation.'],
          ['c', 'Indirect ELISA', 'ELISA detects antibodies or antigens, not chromosomes.'],
          ['d', 'Northern blot', 'A Northern blot measures RNA.'],
          ['e', 'Flow cytometry for CD4', 'Flow cytometry counts labeled cells, not chromosomes.'],
        ],
        answer: 'a',
        mini: 'Suspected Down syndrome: a karyotype shows trisomy 21 and, because it displays whole chromosomes, whether the extra 21 is part of a translocation.',
        reasoning: 'identification',
        objectives: [`${KF}.karyotype`],
        difficulty: 2,
      },
      {
        stem: 'An infant with typical features of Down syndrome has a karyotype showing 46 chromosomes. One chromosome 14 carries extra chromosome 21 material joined to it. What does this result mean for the family?',
        options: [
          ['a', 'A translocation is present; parents should be karyotyped'],
          ['b', 'Down syndrome is excluded because there are 46 chromosomes', 'Extra chromosome 21 material on another chromosome still causes Down syndrome.'],
          ['c', 'The result shows a point mutation on chromosome 21', 'A karyotype cannot detect point mutations; it shows a rearrangement.'],
          ['d', 'The finding needs a CD4 count to interpret', 'CD4 counts are unrelated to chromosome rearrangements.'],
          ['e', 'No further testing is needed because trisomies are always sporadic', 'A translocation may be inherited, so parental testing matters.'],
        ],
        answer: 'a',
        mini: 'Extra 21 material attached to another chromosome = translocation Down syndrome. Because a parent may carry a balanced form, parental karyotypes guide recurrence counseling.',
        reasoning: 'interpretation',
        objectives: [`${KF}.karyotype`],
        steps: ['46 chromosomes but extra chromosome 21 material → a translocation, not free trisomy.', 'Translocations can be carried in balanced form by a parent.', 'So parental karyotyping is needed to assess recurrence risk.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'A karyotype can detect trisomies, large deletions and translocations.', isTrue: true, correction: 'Correct: it shows chromosome number and large structural changes.', objectives: [`${KF}.karyotype`], difficulty: 1 },
      { statement: 'A normal karyotype rules out a 22q11.2 microdeletion.', isTrue: false, correction: 'Microdeletions are usually too small to see; FISH or chromosomal microarray is used.', objectives: [`${KF}.karyotype`], difficulty: 2 },
    ],
    clues: [
      { answer: 'COLCHICINE', clue: 'Drug that arrests cells in metaphase for karyotyping', objectives: [`${KF}.karyotype`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'lab-fish',
    relevance: 'core',
    title: 'FISH: microdeletions, translocations and interphase cells',
    discipline: 'biochemistry',
    alsoDisciplines: ['genetics', 'immunology'],
    system: 'multisystem',
    alsoSystems: ['blood-immune'],
    topic: 'biochem-lab',
    difficulty: 3,
    curriculum: [`${KF}.fish`],
    objectives: ['Explain fluorescence in situ hybridization', 'Apply FISH to 22q11.2 deletion, specific translocations and interphase nuclei'],
    citations: [MB_DNA, MP_22Q, FISH_22Q, FISH_INTERPHASE, CML_TESTS],
    facts: [
      'In fluorescence in situ hybridization (FISH), a fluorescently labeled DNA probe hybridizes to its complementary sequence in denatured chromosomal DNA, so the location (or absence) of that sequence can be seen.',
      '22q11.2 deletion syndrome is a contiguous gene deletion of about 3 million base pairs on one chromosome 22, causing heart defects, recurrent infections from immune problems, palate abnormalities and low calcium; the deletion is detected by FISH.',
      'FISH can be applied to interphase nuclei, including cells in paraffin tissue sections, so dividing cells are not required.',
      'The BCR-ABL1 fusion of chronic myeloid leukemia can be shown by FISH as well as by karyotype.',
    ],
    factRefs: [[0], [1, 2], [3], [4]],
    mechanism:
      'A fluorescent probe for a chosen sequence binds wherever that sequence is. Two signals for a region means both copies are present; one signal means a deletion (as in 22q11.2); probes for two genes that end up side by side show a fusion such as BCR-ABL1. Because it reads a sequence rather than chromosome shape, FISH works on non-dividing (interphase) cells.',
    associations: ['Fluorescent DNA probe', 'Hybridization', '22q11.2 deletion (DiGeorge)', 'Microdeletion', 'BCR-ABL1 fusion signal', 'Interphase nuclei', 'Paraffin sections'],
    misconception:
      'FISH only answers the question its probe asks: a normal 22q11.2 FISH result does not exclude deletions elsewhere in the genome.',
    quick:
      'FISH: fluorescent probe binds its complementary sequence. One signal instead of two = deletion (22q11.2). Fused signals = translocation (BCR-ABL1). Works on interphase nuclei (no culture needed). Targeted: tests only the probed region.',
    detailed: [
      'FISH uses a fluorescently labeled DNA probe that hybridizes to its complementary sequence in the patient’s denatured chromosomal DNA. Counting and positioning the signals shows whether a region is present in two copies, deleted, or moved next to another region.',
      'It detects deletions too small for a routine karyotype, such as the 3-million-base-pair 22q11.2 deletion (heart defects, immune problems, palate abnormalities, hypocalcemia), and specific translocations such as BCR-ABL1. Because it does not need metaphase chromosomes, it can be done on interphase nuclei and even fixed tissue sections.',
    ],
    takeaway: 'FISH = fluorescent probe for one sequence: microdeletions, fusions, interphase cells.',
    related: ['lab-karyotype', 'lab-test-choice'],
    outline: listed('Immune System', 'Disorders associated with immunodeficiency'),
    mcq: [
      {
        stem: 'A newborn has a congenital heart defect, hypocalcemic seizures and recurrent infections. Her karyotype is normal. FISH with a 22q11.2 probe shows one signal and a control signal on each chromosome 22. What explains this?',
        options: [
          ['a', 'A 22q11.2 microdeletion on one chromosome 22'],
          ['b', 'Trisomy 22 missed by the karyotype', 'Trisomy would give three signals, and a karyotype would show it.'],
          ['c', 'A balanced translocation of chromosome 22', 'A balanced translocation keeps both copies of the region, giving two signals.'],
          ['d', 'A point mutation in a single gene on chromosome 22', 'FISH probes large regions; a point mutation would not remove a signal.'],
          ['e', 'A failed test, because FISH needs abnormal karyotypes', 'FISH is used precisely when the deletion is too small for a karyotype.'],
        ],
        answer: 'a',
        mini: 'Both chromosomes 22 are present (control signals), but the 22q11.2 probe binds only one: a microdeletion too small for the karyotype, i.e. 22q11.2 deletion (DiGeorge) syndrome.',
        reasoning: 'interpretation',
        objectives: [`${KF}.fish`],
        steps: ['Control probes show two chromosome 22s.', 'Only one 22q11.2 signal → that region is missing from one copy.', 'Heart defect, hypocalcemia and immune problems fit 22q11.2 deletion syndrome.'],
        difficulty: 3,
      },
      {
        stem: 'A lymph node biopsy has been fixed in paraffin, so no cells can be grown for a karyotype. Which test can still show a specific translocation in the tumor cells?',
        options: [
          ['a', 'Interphase FISH on the tissue sections'],
          ['b', 'Conventional G-banded karyotype', 'Karyotyping needs living, dividing cells.'],
          ['c', 'Indirect ELISA on the tissue', 'ELISA detects antigens or antibodies, not translocations.'],
          ['d', 'Northern blot of serum', 'A Northern blot measures RNA and cannot localize a rearrangement in cells.'],
          ['e', 'CD4 count by flow cytometry', 'Flow cytometry counts cell markers, not chromosome rearrangements.'],
        ],
        answer: 'a',
        mini: 'FISH reads DNA sequence rather than chromosome shape, so it works on interphase nuclei, including paraffin sections, where a karyotype is impossible.',
        reasoning: 'prediction',
        objectives: [`${KF}.fish`],
        steps: ['A karyotype needs dividing cells in metaphase, which fixed tissue cannot provide.', 'FISH probes hybridize to DNA in non-dividing (interphase) nuclei.', 'So interphase FISH can show the translocation in the fixed tumor.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'FISH can be performed on interphase nuclei.', isTrue: true, correction: 'Correct: it does not require metaphase chromosomes, so it works on fixed tissue.', objectives: [`${KF}.fish`], difficulty: 1 },
    ],
    clues: [
      { answer: 'HYBRIDIZATION', clue: 'Base pairing of a labeled probe to its target sequence', objectives: [`${KF}.fish`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'lab-test-choice',
    relevance: 'core',
    title: 'Choosing a genetic test: karyotype, FISH, chromosomal microarray or sequencing',
    discipline: 'biochemistry',
    alsoDisciplines: ['genetics'],
    system: 'multisystem',
    topic: 'biochem-lab',
    difficulty: 3,
    curriculum: [`${KF}.choose`],
    objectives: ['Choose the genetic test that answers a clinical question'],
    citations: [CMA_FIRST_TIER, CMA_YIELD, CMA_SNP, MP_TEST_TYPES, BIO_KARYO],
    facts: [
      'Chromosomal microarray is now a first-line test for global developmental delay or intellectual disability, with the G-banded karyotype used as an adjunct; it is recommended first-tier for developmental delay, intellectual disability, autism and multiple congenital anomalies.',
      'Microarrays find pathogenic copy-number changes in many children whose karyotypes are normal.',
      'A targeted single-variant test is used for relatives of someone with a known familial variant; panels are used when many genes can cause the condition; exome or genome sequencing when the cause remains unclear.',
      'A karyotype shows chromosome number and structure, including translocations.',
    ],
    factRefs: [[0, 1], [2], [3], [4, 3]],
    mechanism:
      'Each test answers a different question. A karyotype shows number and arrangement of whole chromosomes; FISH asks about one known region; chromosomal microarray measures copy number across the genome; sequencing reads the bases of chosen genes. Because a microarray measures amount, a balanced rearrangement (same DNA, new position) is a karyotype question.',
    associations: ['CMA first-tier (DD/ID, autism, anomalies)', 'Karyotype: aneuploidy, translocations', 'FISH: known region', 'Targeted test: known family variant', 'Panel: many candidate genes', 'Exome: unclear cause', 'Balanced rearrangement → karyotype'],
    misconception:
      'Chromosomal microarray is not a better karyotype for every question: it measures copy number, so a balanced translocation, which changes position but not amount, is sought with a karyotype.',
    quick:
      'Unexplained DD/ID, autism or multiple anomalies → chromosomal microarray first. Suspected trisomy or a balanced translocation (e.g. recurrent miscarriage) → karyotype. Specific known microdeletion → FISH. Known family variant → targeted test; many candidate genes → panel; unclear → exome.',
    detailed: [
      'Start from the clinical question. For unexplained developmental delay, intellectual disability, autism or multiple congenital anomalies, chromosomal microarray is the first-tier test because it finds deletions and duplications across the genome, many invisible on a karyotype.',
      'A karyotype remains the test for suspected aneuploidy and for rearrangements that do not change the amount of DNA, such as a balanced translocation in a couple with recurrent miscarriage. FISH confirms a specific suspected region, and sequencing is chosen for single-gene questions, from a targeted variant to an exome.',
    ],
    takeaway: 'Match the test to the question: CMA for copy number, karyotype for number and arrangement, FISH for one region, sequencing for genes.',
    related: ['lab-karyotype', 'lab-fish', 'lab-microarray', 'lab-sequencing'],
    outline: listed('Pregnancy, Childbirth, & the Puerperium', 'Prenatal care'),
    mcq: [
      {
        stem: 'A 4-year-old has global developmental delay, autism features and several minor dysmorphic features. No syndrome is clinically recognized. Which genetic test should be done first?',
        options: [
          ['a', 'Chromosomal microarray'],
          ['b', 'FISH for the 22q11.2 region', 'FISH tests one suspected region; no specific syndrome is suspected here.'],
          ['c', 'Targeted test for a single known variant', 'There is no known familial variant to target.'],
          ['d', 'Northern blot of blood RNA', 'Northern blots are research tools, not first-line genetic tests.'],
          ['e', 'Sandwich ELISA for growth hormone', 'An ELISA measures a protein, not a genetic cause of delay.'],
        ],
        answer: 'a',
        mini: 'For unexplained developmental delay, intellectual disability, autism or multiple anomalies, chromosomal microarray is the first-tier test; it finds copy-number changes a karyotype misses.',
        reasoning: 'prediction',
        objectives: [`${KF}.choose`],
        steps: ['No specific syndrome is suspected, so a targeted test (FISH, single variant) has nothing to target.', 'The likely causes include deletions and duplications anywhere in the genome.', 'Chromosomal microarray screens copy number genome-wide → first-tier test.'],
        difficulty: 3,
      },
      {
        stem: 'A healthy couple has had three first-trimester miscarriages. A balanced chromosomal rearrangement in one partner is suspected. Which test is most appropriate for the parents?',
        options: [
          ['a', 'Karyotype of both partners'],
          ['b', 'Chromosomal microarray of both partners', 'A microarray measures copy number, so a balanced rearrangement (no gain or loss) can be missed.'],
          ['c', 'Gene panel for epilepsy genes', 'A single-gene panel does not show chromosome rearrangements.'],
          ['d', 'Indirect ELISA for antiphospholipid antibodies only', 'Antibody testing does not show a chromosome rearrangement.'],
          ['e', 'Flow cytometry of the partners’ blood', 'Flow cytometry counts cell types, not chromosome structure.'],
        ],
        answer: 'a',
        mini: 'A balanced translocation moves DNA without gaining or losing it, so copy-number tests can miss it; a karyotype shows the rearranged chromosomes.',
        reasoning: 'prediction',
        objectives: [`${KF}.choose`],
        steps: ['A balanced rearrangement changes chromosome structure, not DNA amount.', 'Microarray detects changes in amount, so it can miss it.', 'A karyotype shows chromosome structure → the right test for the parents.'],
        difficulty: 3,
      },
      {
        stem: 'A woman’s brother has sickle cell disease with a known HBB variant. She wants to know if she carries it. Which test is most efficient?',
        options: [
          ['a', 'A targeted test for the known HBB variant'],
          ['b', 'Whole-genome sequencing', 'Genome sequencing is for unclear causes, not a known familial variant.'],
          ['c', 'Karyotype', 'A karyotype cannot detect a single-base variant.'],
          ['d', 'FISH for chromosome 11', 'FISH probes large regions and cannot detect a point variant.'],
          ['e', 'Chromosomal microarray', 'Microarrays detect copy-number changes, not single-base variants.'],
        ],
        answer: 'a',
        mini: 'When the family variant is known, a targeted single-variant test answers the question directly; broader sequencing is for unknown causes.',
        reasoning: 'identification',
        objectives: [`${KF}.choose`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'Chromosomal microarray is a first-tier test for unexplained developmental delay or intellectual disability.', isTrue: true, correction: 'Correct: the karyotype is now an adjunct for this indication.', objectives: [`${KF}.choose`], difficulty: 1 },
    ],
    clues: [],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'lab-cloning-editing',
    relevance: 'core',
    title: 'Cloning with cDNA, and genome editing (CRISPR-Cas9)',
    discipline: 'biochemistry',
    alsoDisciplines: ['genetics'],
    system: 'multisystem',
    topic: 'biochem-lab',
    difficulty: 2,
    curriculum: [`${GE}.cloning`, `${GE}.crispr`],
    objectives: ['Recognize cDNA cloning into a plasmid vector', 'Recognize CRISPR-Cas9 genome editing'],
    citations: [BIO_BIOTECH, MB_DNA, MP_CRISPR],
    facts: [
      'Reverse transcriptase copies mRNA into complementary DNA (cDNA). Because mature mRNA has already had its introns removed, cDNA contains only the coding sequence.',
      'In molecular cloning, a DNA fragment is inserted into a plasmid vector (a small circular DNA that replicates independently) at a multiple cloning site and introduced into bacteria; this is how human insulin and growth hormone are produced.',
      'CRISPR-Cas9 genome editing uses a guide RNA with a short sequence complementary to a target site in the DNA; Cas9 cuts the DNA there, and the cell’s repair can disable the gene or insert a change. It was adapted from a bacterial defense against viruses.',
    ],
    factRefs: [[0, 1], [0], [2]],
    mechanism:
      'Cloning makes many copies of one piece of DNA by carrying it in a plasmid that bacteria replicate; starting from mRNA (via cDNA) gives the coding sequence without introns, which bacteria can express as protein. Genome editing goes the other way, changing the DNA in place: a guide RNA brings Cas9 to the target, Cas9 cuts, and repair alters the gene.',
    associations: ['Reverse transcriptase', 'cDNA (no introns)', 'Plasmid vector', 'Multiple cloning site', 'Recombinant insulin', 'Guide RNA', 'Cas9 nuclease'],
    misconception:
      'A cDNA is not a copy of the whole gene: it copies mature mRNA, so it lacks introns and regulatory regions.',
    quick:
      'cDNA = reverse transcriptase copy of mRNA (no introns) → insert into plasmid → bacteria make the protein (recombinant insulin). CRISPR-Cas9: guide RNA targets the sequence, Cas9 cuts, repair edits the gene.',
    detailed: [
      'To make a human protein in bacteria, the gene is usually cloned as cDNA: reverse transcriptase copies mature mRNA, which already lacks introns, and the cDNA is inserted into a plasmid vector that bacteria copy and express. Recombinant insulin and growth hormone are made this way.',
      'CRISPR-Cas9 edits DNA where it sits. A guide RNA matching the target sequence directs the Cas9 nuclease to cut both strands there; the cell’s repair of the cut can knock out the gene or, with a supplied template, change it.',
    ],
    takeaway: 'cDNA = mRNA copy without introns, cloned in plasmids; CRISPR = guide RNA + Cas9 cut.',
    related: ['lab-pcr'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A company wants bacteria to produce human insulin. Why do they clone insulin cDNA rather than the insulin gene from genomic DNA?',
        options: [
          ['a', 'cDNA comes from mature mRNA, so it lacks introns'],
          ['b', 'cDNA contains the gene’s promoter and enhancers', 'cDNA copies mRNA, so it lacks the promoter and other regulatory DNA.'],
          ['c', 'Genomic DNA cannot be inserted into plasmids', 'Genomic fragments can be cloned; the problem is the introns.'],
          ['d', 'cDNA is made by DNA polymerase from the genome', 'cDNA is made by reverse transcriptase from mRNA.'],
          ['e', 'cDNA is longer than the genomic gene', 'Without introns, cDNA is shorter than the genomic gene.'],
        ],
        answer: 'a',
        mini: 'Reverse transcriptase copies mature mRNA, which has already had its introns spliced out. The cDNA is the continuous coding sequence that bacteria can express.',
        reasoning: 'mechanism',
        objectives: [`${GE}.cloning`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'In CRISPR-Cas9 editing, a guide RNA directs the Cas9 nuclease to cut a chosen DNA sequence.', isTrue: true, correction: 'Correct: the cell’s repair of the cut then disables or changes the gene.', objectives: [`${GE}.crispr`], relevance: 'supplementary', relevanceNote: 'Genome-editing tools are recognition-level background at Step 1.', difficulty: 1 },
      { statement: 'cDNA is made from mRNA by reverse transcriptase.', isTrue: true, correction: 'Correct: it therefore lacks introns.', objectives: [`${GE}.cloning`], difficulty: 1 },
    ],
    clues: [
      { answer: 'PLASMID', clue: 'Small circular DNA vector used for cloning in bacteria', objectives: [`${GE}.cloning`], difficulty: 1 },
    ],
  },
]);

// --------------------------------------------------------------------------------------------------
// Games
// --------------------------------------------------------------------------------------------------
type Shared = 'kind' | 'review' | 'version';
const seq = (x: Omit<SequenceItem, Shared | 'depth' | 'reasoning'>): SequenceItem => ({
  kind: 'sequence', review: AI_DRAFT, version: 1, depth: 'mechanism', reasoning: 'mechanism', ...x,
});
const match = (x: Omit<MatchItem, Shared | 'depth' | 'reasoning'>): MatchItem => ({
  kind: 'match', review: AI_DRAFT, version: 1, depth: 'recognition', reasoning: 'recall', ...x,
});
// Cases are application by format; classic presentations are `interpretation` (medium).
const kase = (x: Omit<CaseItem, Shared | 'depth' | 'reasoning'> & { reasoning?: 'interpretation' | 'multistep' }): CaseItem => ({
  kind: 'case', review: AI_DRAFT, version: 1, depth: 'application', reasoning: 'interpretation', ...x,
});

const sequences: SequenceItem[] = [
  seq({
    id: 'seq:pcr-gel',
    relevance: 'core',
    title: 'From sample to band',
    prompt: 'Order the steps from PCR to reading the result on a gel.',
    steps: [
      'Heat to about 95 °C to separate the DNA strands',
      'Cool to about 50 °C so the primers anneal',
      'Warm to 72 °C so Taq polymerase extends the primers',
      'Repeat the cycle 25–40 times',
      'Load the products into wells at the negative electrode',
      'Smaller fragments migrate farther toward the positive electrode',
      'Stain the gel and view the bands under UV light',
    ],
    explanation: 'Denature, anneal, extend, repeat; then the gel sorts products by size, smallest farthest.',
    conceptIds: ['lab-pcr', 'lab-gel'],
    objectiveIds: [`${PS}.pcr`],
    difficulty: 2,
  }),
  seq({
    id: 'seq:western-blot',
    relevance: 'core',
    title: 'Finding one protein',
    prompt: 'Order the steps of a Western blot.',
    steps: [
      'Denature proteins with SDS so they carry a uniform negative charge',
      'Separate the proteins by size with gel electrophoresis',
      'Transfer the proteins to a membrane',
      'Add a primary antibody against the protein of interest',
      'Add a labeled secondary antibody that binds the primary',
      'Detect the band by color or fluorescence',
    ],
    explanation: 'Separate, transfer, then two antibodies find and reveal one protein; absent dystrophin in Duchenne muscle is the classic clinical result.',
    conceptIds: ['lab-blotting'],
    objectiveIds: [`${BL}.choose`],
    difficulty: 2,
  }),
];

const matches: MatchItem[] = [
  match({
    id: 'match:lab-targets',
    relevance: 'core',
    title: 'What does each test detect?',
    prompt: 'Match each technique to what it detects.',
    pairs: [
      { left: 'Southern blot', right: 'A specific DNA sequence' },
      { left: 'Northern blot', right: 'mRNA from a gene' },
      { left: 'Western blot', right: 'A specific protein, using antibodies' },
      { left: 'Southwestern blot', right: 'Proteins that bind a DNA sequence' },
      { left: 'Indirect ELISA', right: 'Antibodies in the patient’s serum' },
      { left: 'Flow cytometry', right: 'Cells carrying a surface marker' },
    ],
    explanation: 'Southern DNA, Northern RNA, Western protein, Southwestern DNA-binding protein; indirect ELISA finds antibodies; flow cytometry counts labeled cells.',
    conceptIds: ['lab-blotting', 'lab-elisa', 'lab-flow'],
    objectiveIds: [`${BL}.choose`],
    difficulty: 1,
  }),
  match({
    id: 'match:which-test',
    relevance: 'core',
    title: 'Which test answers it?',
    prompt: 'Match each clinical question to the test that answers it.',
    pairs: [
      { left: 'HIV viral load on treatment', right: 'Quantitative RT-PCR' },
      { left: 'CD4 count in HIV', right: 'Flow cytometry' },
      { left: 'Suspected trisomy 21 in a newborn', right: 'Karyotype' },
      { left: 'Suspected 22q11.2 deletion', right: 'FISH' },
      { left: 'Unexplained developmental delay', right: 'Chromosomal microarray' },
      { left: 'Absent dystrophin in muscle', right: 'Western blot' },
    ],
    explanation: 'Choose by the question: amount of viral RNA (qRT-PCR), labeled cells (flow), whole chromosomes (karyotype), one region (FISH), genome-wide copy number (microarray), one protein (Western blot).',
    conceptIds: ['lab-test-choice', 'lab-pcr', 'lab-flow', 'lab-fish'],
    objectiveIds: [`${KF}.choose`],
    difficulty: 2,
  }),
];

const cases: CaseItem[] = [
  kase({
    id: 'case:pnh-flow',
    relevance: 'core',
    title: 'Dark urine at dawn',
    conceptIds: ['lab-flow'],
    objectiveIds: [`${EF}.flow`],
    difficulty: 3,
    stages: [
      { label: 'Presentation', text: 'A 28-year-old woman has fatigue and pallor, and her first urine each morning is dark.' },
      { label: 'History', text: 'Episodes are worse after infections. She has no family history of anemia.' },
      { label: 'Laboratory', text: 'Hemoglobin is low with raised reticulocytes and LDH; haptoglobin is low. Urine dipstick is positive for blood without red cells on microscopy. The direct antiglobulin test is negative.' },
      { label: 'Further clue', text: 'Flow cytometry is requested on her red cells and neutrophils.' },
    ],
    question: 'Which flow cytometry result would confirm the most likely diagnosis?',
    options: [
      { id: 'a', text: 'A population lacking CD55 and CD59' },
      { id: 'b', text: 'Red cells coated with IgG', whyWrong: 'IgG coating would give a positive direct antiglobulin test, which is negative here.' },
      { id: 'c', text: 'A CD4 count below 200 per μL', whyWrong: 'A low CD4 count reflects HIV-related immune damage, not hemolysis.' },
      { id: 'd', text: 'Increased CD55 and CD59 on all cells', whyWrong: 'PNH removes these GPI-anchored proteins; it does not increase them.' },
      { id: 'e', text: 'Normal surface markers on all cells', whyWrong: 'A normal result would argue against PNH.' },
    ],
    answerId: 'a',
    explanation:
      'Hemolysis with hemoglobinuria most noticeable in the morning, a negative antiglobulin test and no family history point to paroxysmal nocturnal hemoglobinuria. An acquired PIGA mutation in a blood stem cell removes GPI-anchored proteins, so flow cytometry shows red cells and neutrophils lacking CD55 and CD59.',
    mechanism: 'Acquired PIGA mutation → no GPI anchor → CD55 and CD59 missing from the cell surface → cells unprotected from complement → intravascular hemolysis; flow cytometry shows the CD55/CD59-negative population.',
    takeaway: 'PNH = CD55/CD59-negative cells on flow cytometry.',
    differentials: [
      { name: 'Autoimmune hemolytic anemia', why: 'Positive direct antiglobulin test from antibody-coated red cells.' },
      { name: 'G6PD deficiency', why: 'Oxidant-triggered hemolysis, usually inherited, with normal GPI-anchored proteins.' },
    ],
  }),
  kase({
    id: 'case:dmd-western',
    relevance: 'core',
    title: 'A boy who climbs up his legs',
    conceptIds: ['lab-blotting'],
    objectiveIds: [`${BL}.western`],
    difficulty: 3,
    stages: [
      { label: 'Presentation', text: 'A 5-year-old boy falls often and has difficulty climbing stairs. He was late to walk.' },
      { label: 'Examination', text: 'He uses his hands on his thighs to stand up from the floor, and his calves look large.' },
      { label: 'Laboratory', text: 'Serum creatine kinase is markedly raised.' },
      { label: 'Further clue', text: 'A muscle biopsy is analyzed by Western blot with an anti-dystrophin antibody.' },
    ],
    question: 'Which Western blot result is expected in the most likely diagnosis?',
    options: [
      { id: 'a', text: 'No dystrophin band at all' },
      { id: 'b', text: 'A dystrophin band of normal size and amount', whyWrong: 'A normal result would argue against a dystrophinopathy.' },
      { id: 'c', text: 'A reduced, abnormally sized dystrophin band', whyWrong: 'Abnormal but present dystrophin is the pattern of the milder Becker form.' },
      { id: 'd', text: 'Extra bands from a repeat expansion', whyWrong: 'Repeat expansions are DNA findings, not the expected protein result here.' },
      { id: 'e', text: 'Antibodies to Borrelia proteins', whyWrong: 'That is a Lyme serology blot, unrelated to this boy’s weakness.' },
    ],
    answerId: 'a',
    explanation:
      'Early-onset proximal weakness in a boy, with a markedly raised creatine kinase, suggests Duchenne muscular dystrophy. DMD mutations that prevent any functional dystrophin cause Duchenne, so the Western blot shows no dystrophin; a reduced, abnormal band would suggest Becker dystrophy.',
    mechanism: 'DMD mutation → no functional dystrophin → muscle fibers damaged with use → weakness and raised creatine kinase; Western blot shows absent dystrophin.',
    takeaway: 'Duchenne: no dystrophin on Western blot; Becker: abnormal, reduced dystrophin.',
    differentials: [
      { name: 'Becker muscular dystrophy', why: 'Later onset, slower progression, abnormal but present dystrophin.' },
      { name: 'Spinal muscular atrophy', why: 'A motor neuron disease with normal dystrophin.' },
    ],
  }),
];

export const labBatch1: Bundle = {
  concepts: core.concepts,
  items: [...core.items, ...sequences, ...matches, ...cases],
};
