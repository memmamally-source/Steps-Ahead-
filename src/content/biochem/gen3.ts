import { AI_DRAFT, defineConcepts, type Bundle } from '../define';
import type { CaseItem, Citation, MatchItem, OutlineRef, SequenceItem } from '../schema';

/**
 * Biochemistry — Genetics, batch 3: the genetic basis of high-yield single-gene disorders and the
 * remaining chromosomal and terminology objectives. Covers pleiotropy and linkage disequilibrium;
 * mitochondrial disorders (MELAS, MERRF, LHON) and ragged-red fibers; the autosomal dominant tumor
 * syndromes (NF1, NF2, tuberous sclerosis, von Hippel–Lindau, FAP, Li–Fraumeni) and HHT; ADPKD and
 * ARPKD; Wilson disease, hereditary hemochromatosis, spinal muscular atrophy and thalassemia genetics;
 * grouping disorders by inheritance (AR storage diseases and their X-linked exceptions; the X-linked
 * recessive list) and Wiskott–Aldrich syndrome; Williams syndrome, cri-du-chat and VACTERL.
 *
 * Scope rule: genetics, mechanism and hallmark associations only. Full clinical management belongs to
 * the organ-system chapters and is not taught here. Optional details are marked SUPPLEMENTARY.
 * Sources: MedlinePlus Genetics and PubMed abstracts. Original, AI-drafted content: DRAFT, NOT MEDICALLY REVIEWED.
 */

const MS = 'Multisystem Processes & Disorders' as const;
const found = (area: OutlineRef['area'], section: string): OutlineRef => ({ area, section, listed: false });
const GEN = 'Genetic, metabolic, and developmental disorders';

const MPC = (path: string, title: string): Citation => ({
  sourceId: 'medlineplus', locator: `MedlinePlus Genetics: ${title}`, url: `https://medlineplus.gov/genetics/condition/${path}/`, checked: 'full-text',
});
const MPG = (path: string, title: string): Citation => ({
  sourceId: 'medlineplus', locator: `MedlinePlus Genetics: ${title} gene`, url: `https://medlineplus.gov/genetics/gene/${path}/`, checked: 'full-text',
});
const PM = (pmid: number, label: string): Citation => ({
  sourceId: 'pubmed', locator: label, url: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`, ref: `PMID ${pmid}`, checked: 'summary',
});

// MedlinePlus condition and gene pages.
const MP_NF1 = MPC('neurofibromatosis-type-1', 'Neurofibromatosis type 1');
const MP_NF1G = MPG('nf1', 'NF1');
const MP_NF2 = MPC('neurofibromatosis-type-2', 'Neurofibromatosis type 2');
const MP_NF2G = MPG('nf2', 'NF2');
const MP_TSC = MPC('tuberous-sclerosis-complex', 'Tuberous sclerosis complex');
const MP_TSC1 = MPG('tsc1', 'TSC1');
const MP_TSC2 = MPG('tsc2', 'TSC2');
const MP_VHL = MPC('von-hippel-lindau-syndrome', 'Von Hippel-Lindau syndrome');
const MP_VHLG = MPG('vhl', 'VHL');
const MP_PKD = MPC('polycystic-kidney-disease', 'Polycystic kidney disease');
const MP_PKD1 = MPG('pkd1', 'PKD1');
const MP_PKHD1 = MPG('pkhd1', 'PKHD1');
const MP_FAP = MPC('familial-adenomatous-polyposis', 'Familial adenomatous polyposis');
const MP_APC = MPG('apc', 'APC');
const MP_LFS = MPC('li-fraumeni-syndrome', 'Li-Fraumeni syndrome');
const MP_HHT = MPC('hereditary-hemorrhagic-telangiectasia', 'Hereditary hemorrhagic telangiectasia');
const MP_WILSON = MPC('wilson-disease', 'Wilson disease');
const MP_ATP7B = MPG('atp7b', 'ATP7B');
const MP_HH = MPC('hereditary-hemochromatosis', 'Hereditary hemochromatosis');
const MP_HFE = MPG('hfe', 'HFE');
const MP_SMA = MPC('spinal-muscular-atrophy', 'Spinal muscular atrophy');
const MP_SMN1 = MPG('smn1', 'SMN1');
const MP_ATHAL = MPC('alpha-thalassemia', 'Alpha thalassemia');
const MP_HBA1 = MPG('hba1', 'HBA1');
const MP_BTHAL = MPC('beta-thalassemia', 'Beta thalassemia');
const MP_HBB = MPG('hbb', 'HBB');
const MP_MELAS = MPC('mitochondrial-encephalomyopathy-lactic-acidosis-and-stroke-like-episodes', 'Mitochondrial encephalomyopathy, lactic acidosis, and stroke-like episodes');
const MP_MERRF = MPC('myoclonic-epilepsy-with-ragged-red-fibers', 'Myoclonic epilepsy with ragged-red fibers');
const MP_LHON = MPC('leber-hereditary-optic-neuropathy', 'Leber hereditary optic neuropathy');
const MP_WAS = MPC('wiskott-aldrich-syndrome', 'Wiskott-Aldrich syndrome');
const MP_WILLIAMS = MPC('williams-syndrome', 'Williams syndrome');
const MP_CDC = MPC('cri-du-chat-syndrome', 'Cri-du-chat syndrome');
const MP_VACTERL = MPC('vacterl-association', 'VACTERL association');
const MP_PKU = MPC('phenylketonuria', 'Phenylketonuria');
const MP_MARFAN = MPC('marfan-syndrome', 'Marfan syndrome');
const MP_XLA = MPC('x-linked-agammaglobulinemia', 'X-linked agammaglobulinemia');
const MP_G6PD = MPC('glucose-6-phosphate-dehydrogenase-deficiency', 'Glucose-6-phosphate dehydrogenase deficiency');
const MP_LN = MPC('lesch-nyhan-syndrome', 'Lesch-Nyhan syndrome');
const MP_MPS2 = MPC('mucopolysaccharidosis-type-ii', 'Mucopolysaccharidosis type II');
const MP_OTC = MPC('ornithine-transcarbamylase-deficiency', 'Ornithine transcarbamylase deficiency');
const MP_OA = MPC('ocular-albinism', 'Ocular albinism');
const MP_FABRY = MPC('fabry-disease', 'Fabry disease');

// PubMed abstracts (labels checked against the PubMed record).
const PLEIO = PM(2683776, 'Pyeritz RE. Pleiotropy refers to multiple effects on phenotype of a single mutant gene. Am J Med Genet 1989');
const LD_DEF = PM(18427557, 'Slatkin M. Linkage disequilibrium is the nonrandom association of alleles at different loci. Nat Rev Genet 2008');
const MELAS_GR = PM(20301411, 'El-Hattab AW et al. MELAS (GeneReviews): lactic acidemia is very common, muscle biopsies typically show ragged red fibers, and m.3243A>G in MT-TL1 is present in about 80% of individuals');
const MELAS_REV = PM(26095523, 'El-Hattab AW et al. MELAS is one of the most frequent maternally inherited mitochondrial disorders, with stroke-like episodes, lactic acidemia, myopathy, hearing impairment and diabetes. Mol Genet Metab 2015');
const RRF_GOMORI = PM(9145310, 'Yoshida K. Modified Gomori trichrome staining shows ragged red fibers with a thick irregular red subsarcolemmal layer. Hokkaido Igaku Zasshi 1997');
const RRF_MITO = PM(8654494, 'Reichmann H et al. Ragged red fibers are generally considered the morphological characteristic of mitochondrial encephalomyopathies. Eur Neurol 1996');
const MERRF_GR = PM(20301693, 'Velez-Bartolomei F et al. MERRF (GeneReviews): myoclonus, generalized epilepsy, ataxia and ragged red fibers are the four canonic features');
const LHON_REV = PM(32969847, 'Newman NJ et al. LHON is a maternally inherited, bilaterally blinding optic neuropathy predominantly affecting otherwise healthy young individuals, mostly men. J Neuroophthalmol 2020');
const TSC_MTOR = PM(18466115, 'Huang J, Manning BD. The TSC1–TSC2 (hamartin–tuberin) complex, through GAP activity toward Rheb, is a critical negative regulator of mTORC1. Biochem J 2008');
const TSC_AML = PM(26104489, 'von Ranke FM et al. Common manifestations of TSC include cortical tubers, cardiac rhabdomyoma, lymphangioleiomyomatosis, renal angiomyolipoma and skin lesions. Lung 2015');
const LFS_SPECTRUM = PM(31511974, 'Dutzmann CM et al. Li–Fraumeni tumors are dominated by bone and soft tissue sarcomas, brain tumors, premenopausal breast cancer and adrenocortical carcinoma. Pathologe 2019');
const HHT_TGF = PM(36504622, 'Drapé E et al. Mutations in TGF-β/BMP signaling components ENG, ACVRL1 and SMAD4 account for most HHT. Front Hum Neurosci 2022');
const WILSON_REV = PM(16233999, 'Ferenci P. Wilson disease is autosomal recessive, with impaired intrahepatic trafficking and biliary excretion of copper and accumulation in liver, cornea and brain. Clin Gastroenterol Hepatol 2005');
const HFE_COMMON = PM(33987429, 'Anderson GJ, Bardou-Jacquet E. By far the most common primary iron overload is HFE-related hemochromatosis from homozygosity for C282Y. Ann Transl Med 2021');
const HFE_PENETRANCE = PM(19444013, 'Alexander J, Kowdley KV. The majority of asymptomatic C282Y homozygotes do not develop clinically significant iron overload. Genet Med 2009');
const SMA_AHC = PM(29627031, 'Abati E, Corti S. SMA is autosomal recessive, with progressive degeneration and loss of anterior horn cells in the spinal cord and brainstem nuclei. J Neurol Sci 2018');
const SMN2_COPIES = PM(20392710, 'Lorson CL et al. SMN2 is retained in almost all SMA patients but makes little full-length SMN because of defective splicing; severity is inversely related to SMN2 copy number. Hum Mol Genet 2010');
const ATHAL_CIS = PM(10872473, 'Bernini LF, Harteveld CL. Deletions of variable size remove one or both alpha-globin genes in cis, or the whole cluster. Baillieres Clin Haematol 1998');
const WAS_PHENO = PM(14499269, 'Notarangelo LD, Ochs HD. Wiskott–Aldrich syndrome: X-linked immunodeficiency with thrombocytopenia and small platelets, eczema, recurrent infections, autoimmunity and malignancy; WASP regulates actin polymerization. Curr Opin Immunol 2003');
const WAS_IG = PM(41345550, 'Esmaeilzadeh H et al. In Wiskott–Aldrich syndrome, IgG was normal in most, IgA and IgM low to normal, and IgE elevated in many. BMC Immunol 2025');
const LSD_INH = PM(21913413, 'Kloska A et al. Most lysosomal storage diseases are autosomal recessive; Fabry and Hunter (MPS II) disease are X-linked recessive exceptions. Postepy Biochem 2011');
const WBS_REGION = PM(20437059, 'Merla G et al. The Williams–Beuren 7q11.23 microdeletion gives facial dysmorphism, supravalvular aortic stenosis, hypercalcemia and a distinctive neurobehavioral profile; elastin loss explains the vascular features. Hum Genet 2010');
const KARYO_RES = PM(20542150, 'Gijsbers AC et al. Conventional karyotyping only identifies genomic imbalances larger than 5–10 Mb. Eur J Med Genet 2010');
const CDC_REV = PM(16953888, 'Cerruti Mainardi P. Cri du chat syndrome results from a deletion of variable size of 5p; high-pitched cry, microcephaly and severe psychomotor delay. Orphanet J Rare Dis 2006');
const VACTERL_DEF = PM(23165726, 'Solomon BD et al. VACTERL association is defined by at least three co-occurring malformations: vertebral, anal atresia, cardiac, tracheo-esophageal fistula, renal and limb. Am J Med Genet A 2012');

const AD = 'bc-ad-diseases';
const AR = 'bc-ar-diseases';
const XL = 'bc-x-linked-diseases';
const MI = 'bc-mito-inheritance';
const GT = 'bc-gen-terms';
const SC = 'bc-structural-chromosome';

const core = defineConcepts([
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-pleiotropy-ld',
    relevance: 'core',
    title: 'Pleiotropy and linkage disequilibrium',
    discipline: 'genetics',
    system: 'multisystem',
    topic: 'genetics-inheritance',
    difficulty: 2,
    curriculum: [`${GT}.pleiotropy`, `${GT}.linkage`],
    objectives: ['Define pleiotropy with classic examples', 'Define linkage disequilibrium'],
    citations: [PLEIO, MP_PKU, MP_MARFAN, LD_DEF],
    facts: [
      'Pleiotropy is the presence of multiple effects on the phenotype from a single mutant gene.',
      'Untreated phenylketonuria causes intellectual disability, and affected children also tend to have lighter skin and hair: one gene, several apparently unrelated features.',
      'Marfan syndrome, a connective tissue disorder, affects the heart and blood vessels (aortic aneurysm), the eyes (dislocated lens) and the skeleton.',
      'Linkage disequilibrium is the nonrandom association of alleles at different loci: two alleles are inherited together more (or less) often than chance predicts.',
    ],
    factRefs: [[0], [1], [2], [3]],
    mechanism:
      'One protein can be needed in many tissues or pathways, so a single variant can produce several different features (pleiotropy). Fibrillin-1 is needed in the aorta, lens zonules and skeleton; phenylalanine excess affects the brain and melanin production. Linkage disequilibrium is a population-level idea: alleles at nearby loci tend to travel together through generations, so they appear together more often than random combination would predict.',
    associations: ['Pleiotropy: one gene, many effects', 'PKU: intellectual disability + light skin and hair', 'Marfan: aorta + lens + skeleton', 'Linkage disequilibrium: nonrandom association of alleles at different loci'],
    misconception:
      'Pleiotropy (one gene → many features) is not locus heterogeneity (many genes → one feature), and linkage disequilibrium describes alleles in a population, not crossing-over in one meiosis.',
    quick:
      'Pleiotropy: one gene, multiple different phenotypic effects (PKU: intellectual disability + light skin and hair; Marfan: aorta, lens, skeleton). Linkage disequilibrium: alleles at different loci found together more often than chance predicts (nonrandom association in a population).',
    detailed: [
      'Pleiotropy means that a single gene variant affects several, apparently unrelated traits. In untreated phenylketonuria, phenylalanine accumulation damages the brain and also reduces pigment, so children have lighter skin and hair. In Marfan syndrome, defective connective tissue affects the aorta, the lens of the eye and the skeleton.',
      'Linkage disequilibrium is the nonrandom association of alleles at different loci in a population. Alleles that lie close together are rarely separated by recombination and so tend to be inherited together; this underlies association studies that use a marker to find a nearby disease allele.',
    ],
    takeaway: 'Pleiotropy = one gene, many effects; linkage disequilibrium = alleles at different loci travelling together.',
    related: ['gen-heterogeneity', 'gen-expression-terms'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A man has a dislocated lens, long fingers and an aortic root aneurysm, all from a single fibrillin-1 variant. Which genetic term describes one variant producing these different features?',
        options: [
          ['a', 'Pleiotropy'],
          ['b', 'Locus heterogeneity', 'Locus heterogeneity is the reverse: variants in different genes giving the same phenotype.'],
          ['c', 'Variable expressivity', 'Expressivity describes how severe features are in different people, not one gene affecting many organs.'],
          ['d', 'Incomplete penetrance', 'Penetrance is whether a carrier shows the condition at all.'],
          ['e', 'Linkage disequilibrium', 'Linkage disequilibrium describes alleles at two loci occurring together in a population.'],
        ],
        answer: 'a',
        mini: 'A single gene producing several different effects (eye, skeleton, aorta) is pleiotropy.',
        reasoning: 'identification',
        objectives: [`${GT}.pleiotropy`],
        difficulty: 2,
      },
      {
        stem: 'In a population, a disease allele is found far more often together with a particular nearby marker allele than random combination of alleles would predict. What is this called?',
        options: [
          ['a', 'Linkage disequilibrium'],
          ['b', 'Hardy–Weinberg equilibrium', 'Hardy–Weinberg describes genotype frequencies at one locus, not association between two loci.'],
          ['c', 'Pleiotropy', 'Pleiotropy is one gene affecting several traits.'],
          ['d', 'Uniparental disomy', 'Uniparental disomy is inheriting both copies of a chromosome from one parent.'],
          ['e', 'Anticipation', 'Anticipation is worsening of a disorder in successive generations.'],
        ],
        answer: 'a',
        mini: 'Linkage disequilibrium is the nonrandom association of alleles at different loci, typical of loci that lie close together.',
        reasoning: 'recall',
        relevance: 'supplementary',
        relevanceNote: 'Linkage disequilibrium is a recognition-level research concept for Step 1; pleiotropy is core.',
        objectives: [`${GT}.linkage`],
        difficulty: 1,
      },
    ],
    tf: [
      { statement: 'Pleiotropy means that variants in several different genes produce the same disease.', isTrue: false, correction: 'That is locus heterogeneity. Pleiotropy is one gene producing several different effects.', objectives: [`${GT}.pleiotropy`], difficulty: 1 },
    ],
    clues: [
      { answer: 'PLEIOTROPY', clue: 'One gene, several apparently unrelated effects', objectives: [`${GT}.pleiotropy`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-mito-disorders',
    relevance: 'core',
    title: 'Mitochondrial disorders: MELAS, MERRF, LHON and ragged-red fibers',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'nervous-behavioral',
    alsoSystems: ['musculoskeletal-skin', 'multisystem'],
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${MI}.diseases`, `${MI}.biopsy`],
    objectives: ['Recognize MELAS, MERRF and LHON', 'Recognize ragged-red fibers and lactic acidosis as markers of mitochondrial disease'],
    citations: [MP_MELAS, MELAS_GR, MELAS_REV, MP_MERRF, MERRF_GR, MP_LHON, LHON_REV, RRF_GOMORI, RRF_MITO],
    facts: [
      'MELAS (mitochondrial encephalomyopathy, lactic acidosis and stroke-like episodes) usually begins in childhood after normal early development; stroke-like episodes typically begin before age 40, with hemiparesis, vision changes, seizures and migraine-like headaches. Lactic acidemia is very common.',
      'About 80% of people with MELAS carry the m.3243A>G variant in the mitochondrial tRNA gene MT-TL1.',
      'MERRF (myoclonic epilepsy with ragged-red fibers) is characterized by myoclonus, generalized epilepsy, ataxia and ragged-red fibers on muscle biopsy.',
      'Leber hereditary optic neuropathy (LHON) causes painless, subacute vision loss in both eyes from optic nerve damage, mostly in young men; many people with an LHON variant never develop the disorder.',
      'On modified Gomori trichrome stain, ragged-red fibers show an irregular red subsarcolemmal layer of accumulated mitochondria; they are regarded as the morphological hallmark of mitochondrial encephalomyopathies.',
      'MELAS, MERRF and LHON are inherited in a mitochondrial (maternal) pattern: fathers do not pass mitochondrial DNA variants to their children.',
    ],
    factRefs: [[0, 1], [1], [3, 4], [5, 6], [7, 8], [0, 3, 5]],
    mechanism:
      'Mitochondrial DNA variants impair oxidative phosphorylation. Tissues with high energy demand (brain, muscle, retina and optic nerve) fail first, and cells shift to anaerobic glycolysis, raising lactate. In muscle, defective mitochondria proliferate under the cell membrane, which the Gomori trichrome stain shows as ragged-red fibers. Because mitochondria come from the egg, transmission is maternal, and heteroplasmy makes severity vary even within a family.',
    associations: ['MELAS: stroke-like episodes, lactic acidosis, seizures', 'MELAS: m.3243A>G (MT-TL1)', 'MERRF: myoclonus, epilepsy, ataxia, ragged-red fibers', 'LHON: painless bilateral vision loss, young men', 'Ragged-red fibers: Gomori trichrome, subsarcolemmal mitochondria', 'Maternal inheritance', 'Lactic acidosis'],
    misconception:
      'Stroke-like episodes in MELAS are not ordinary strokes from vessel blockage in older adults: they occur in young people from an energy failure, and are accompanied by lactic acidosis.',
    quick:
      'Mitochondrial (maternal) disorders. MELAS: encephalomyopathy, lactic acidosis, stroke-like episodes (often m.3243A>G). MERRF: myoclonic epilepsy, ataxia, ragged-red fibers. LHON: painless bilateral vision loss in young men; incomplete penetrance. Ragged-red fibers = subsarcolemmal mitochondria on Gomori trichrome.',
    detailed: [
      'Three classic mitochondrial syndromes: MELAS (stroke-like episodes before 40, seizures, migraine-like headaches, lactic acidosis; about 80% carry m.3243A>G in MT-TL1); MERRF (myoclonus, generalized epilepsy, ataxia, ragged-red fibers); and LHON (painless, subacute vision loss in both eyes, mostly in young men, with many variant carriers never affected). All three are maternally inherited.',
      'Two laboratory clues point to mitochondrial disease: lactic acidosis from impaired oxidative phosphorylation, and ragged-red fibers on muscle biopsy, where proliferating mitochondria form an irregular red rim under the sarcolemma on modified Gomori trichrome stain.',
    ],
    takeaway: 'MELAS = strokes + lactate; MERRF = myoclonus + ragged-red fibers; LHON = young men losing central vision; all maternal.',
    related: ['gen-mito'],
    outline: found('Nervous System & Special Senses', 'Disorders of the nervous system'),
    mcq: [
      {
        stem: 'A 16-year-old girl has a second episode of right-sided weakness and visual loss after a migraine-like headache. Serum lactate is high. Her mother has hearing loss and diabetes. Which diagnosis fits best?',
        figure: {
          kind: 'pedigree', mode: 'MT',
          generations: [
            [{ id: 'gf', sex: 'M', status: 'unaffected' }, { id: 'gm', sex: 'F', status: 'affected', note: 'deaf' }],
            [{ id: 'dad', sex: 'M', status: 'unaffected' }, { id: 'mom', sex: 'F', status: 'affected', note: 'deaf, DM' }, { id: 'uncle', sex: 'M', status: 'affected', note: 'mild' }, { id: 'aunt', sex: 'F', status: 'unaffected' }],
            [{ id: 'pro', sex: 'F', status: 'affected', proband: true }, { id: 'bro', sex: 'M', status: 'unaffected' }, { id: 'cous', sex: 'F', status: 'unaffected' }],
          ],
          families: [{ parents: ['gf', 'gm'], children: ['mom', 'uncle'] }, { parents: ['dad', 'mom'], children: ['pro', 'bro'] }, { parents: ['uncle', 'aunt'], children: ['cous'] }],
          alt: 'Three-generation pedigree: affected grandmother; her daughter and son are affected; the daughter’s daughter (proband) is affected and her son is not; the affected son’s daughter is unaffected.',
          caption: 'Transmission through women only; severity varies.',
        },
        options: [
          ['a', 'MELAS'],
          ['b', 'Atherosclerotic stroke', 'Recurrent stroke-like events in a teenager with high lactate and a maternal family history do not fit atherosclerosis.'],
          ['c', 'Leber hereditary optic neuropathy', 'LHON causes painless vision loss without hemiparesis or lactic acidosis.'],
          ['d', 'Myotonic dystrophy type 1', 'Myotonic dystrophy is autosomal dominant with myotonia and cataracts.'],
          ['e', 'Huntington disease', 'Huntington disease causes chorea and dementia, not stroke-like episodes.'],
        ],
        answer: 'a',
        mini: 'Stroke-like episodes in a young person, lactic acidosis and a maternal family history of deafness and diabetes = MELAS, a mitochondrial (maternally inherited) disorder.',
        reasoning: 'interpretation',
        objectives: [`${MI}.diseases`],
        steps: ['Recurrent stroke-like episodes in a teenager with migraine-like headaches → think mitochondrial encephalopathy.', 'High lactate supports impaired oxidative phosphorylation.', 'Affected mother and maternal relatives, with variable features → maternal (mitochondrial) inheritance → MELAS.'],
        difficulty: 3,
      },
      {
        stem: 'A muscle biopsy from a teenager with myoclonic seizures and ataxia is stained with modified Gomori trichrome. Fibers have an irregular red rim beneath the cell membrane. What does this finding represent?',
        options: [
          ['a', 'Accumulated abnormal mitochondria'],
          ['b', 'Glycogen stored in lysosomes', 'Lysosomal glycogen storage is shown with PAS staining and is not a red subsarcolemmal rim.'],
          ['c', 'Fat droplets from carnitine deficiency', 'Lipid storage is shown with lipid stains, not as ragged-red fibers.'],
          ['d', 'Regenerating fibers after necrosis', 'Regeneration does not produce a subsarcolemmal red rim.'],
          ['e', 'Absent dystrophin at the sarcolemma', 'Dystrophin loss is shown by immunostaining or Western blot.'],
        ],
        answer: 'a',
        mini: 'Ragged-red fibers: abnormal mitochondria proliferate under the sarcolemma and stain red with modified Gomori trichrome, the hallmark of mitochondrial myopathy (as in MERRF).',
        reasoning: 'identification',
        objectives: [`${MI}.biopsy`],
        difficulty: 2,
      },
      {
        stem: 'A 22-year-old man develops painless blurred central vision in one eye, then the other eye 6 weeks later. His maternal uncle had the same problem at 25. Which inheritance pattern and mechanism are most likely?',
        options: [
          ['a', 'Mitochondrial DNA variant impairing optic nerve energy supply'],
          ['b', 'Autosomal dominant variant in a retinal structural protein', 'Transmission through the maternal line to males suggests mitochondrial, not autosomal dominant, inheritance.'],
          ['c', 'X-linked recessive variant in a color-vision gene', 'Color-vision defects are present from birth and do not cause sudden vision loss.'],
          ['d', 'Autoimmune demyelination of the optic nerve', 'Optic neuritis is usually painful and not familial through the maternal line.'],
          ['e', 'Trinucleotide repeat expansion in the retina', 'No repeat disorder is suggested by this pattern.'],
        ],
        answer: 'a',
        mini: 'Painless, subacute, sequential bilateral central vision loss in a young man with an affected maternal relative = Leber hereditary optic neuropathy, a mitochondrial DNA disorder.',
        reasoning: 'interpretation',
        objectives: [`${MI}.diseases`],
        steps: ['Painless central vision loss in one eye, then the other within weeks, in a young man → LHON pattern.', 'An affected maternal uncle fits maternal transmission.', 'LHON = mitochondrial DNA variant affecting optic nerve cells.'],
        difficulty: 3,
      },
      {
        stem: 'A 12-year-old has exercise intolerance, myoclonic jerks and an unsteady gait. Blood lactate is raised at rest. His mother has mild hearing loss and his father is well. Which muscle biopsy finding would best support the suspected diagnosis?',
        options: [
          ['a', 'Ragged-red fibers on modified Gomori trichrome stain'],
          ['b', 'Absent dystrophin on immunostaining of fibers', 'Absent dystrophin fits Duchenne dystrophy, which does not cause myoclonus or lactic acidosis.'],
          ['c', 'Endomysial inflammation with T-cell invasion', 'Inflammatory myopathy does not explain myoclonus, ataxia and maternal hearing loss.'],
          ['d', 'Glycogen-filled lysosomes on PAS stain', 'Lysosomal glycogen storage does not fit myoclonus with maternal transmission.'],
          ['e', 'Normal muscle with no abnormal fibers at all', 'Mitochondrial myopathy typically produces visible fiber changes on biopsy.'],
        ],
        answer: 'a',
        mini: 'Myoclonus, ataxia, raised lactate and a maternal relative with mild features suggest a mitochondrial disorder such as MERRF; ragged-red fibers (subsarcolemmal mitochondria on Gomori trichrome) are the supporting biopsy finding.',
        reasoning: 'interpretation',
        objectives: [`${MI}.biopsy`, `${MI}.diseases`],
        steps: ['Myoclonus + ataxia + exercise intolerance → neuromuscular disease with high energy demand.', 'Raised resting lactate and a mildly affected mother → mitochondrial (maternal) disorder, such as MERRF.', 'Mitochondrial myopathy shows ragged-red fibers on modified Gomori trichrome.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Everyone who carries an LHON mitochondrial variant eventually loses vision.', isTrue: false, correction: 'A significant percentage of carriers never develop LHON (incomplete penetrance).', objectives: [`${MI}.diseases`], difficulty: 2 },
      { statement: 'Lactic acidosis is a common clue to mitochondrial disease such as MELAS.', isTrue: true, correction: 'Correct: impaired oxidative phosphorylation shifts cells to anaerobic glycolysis.', objectives: [`${MI}.biopsy`], difficulty: 1 },
    ],
    clues: [
      { answer: 'MERRF', clue: 'Mitochondrial syndrome of myoclonic epilepsy with abnormal muscle fibers', objectives: [`${MI}.diseases`], difficulty: 2 },
      { answer: 'TRICHROME', clue: 'Modified Gomori stain that reveals ragged-red fibers', objectives: [`${MI}.biopsy`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-neurofibromatosis',
    relevance: 'core',
    title: 'Neurofibromatosis types 1 and 2',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'nervous-behavioral',
    alsoSystems: ['musculoskeletal-skin'],
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${AD}.nf1`, `${AD}.nf2`],
    objectives: ['Explain NF1 as loss of neurofibromin, a tumor suppressor that turns off RAS', 'Recognize NF2 and distinguish it from NF1'],
    citations: [MP_NF1, MP_NF1G, MP_NF2, MP_NF2G],
    facts: [
      'Neurofibromatosis type 1 causes multiple café-au-lait spots from early childhood, freckling in the armpits and groin, neurofibromas along nerves, Lisch nodules of the iris and sometimes optic gliomas; the features vary widely between affected people.',
      'NF1 (chromosome 17) encodes neurofibromin, a tumor suppressor that prevents cell overgrowth by turning off RAS.',
      'Neurofibromatosis type 2 causes noncancerous nervous system tumors, most commonly vestibular schwannomas, usually in both ears by age 30, with hearing loss, tinnitus and balance problems; meningiomas and childhood cataracts also occur.',
      'NF2 (chromosome 22) encodes merlin (schwannomin), a tumor suppressor active particularly in Schwann cells.',
      'NF1 and NF2 are autosomal dominant; in about half of cases the variant is new (de novo) and the family history is negative.',
    ],
    factRefs: [[0], [1], [2], [3], [0, 2]],
    mechanism:
      'Neurofibromin is a RAS-inactivating protein. With one copy lost in every cell, a second hit in a Schwann-lineage cell removes all neurofibromin, RAS stays active, and cells proliferate to form neurofibromas. Merlin restrains Schwann cell growth; loss of both copies produces schwannomas, classically on both vestibular nerves.',
    associations: ['NF1: chr 17, neurofibromin (turns off RAS)', 'Café-au-lait spots, axillary freckling', 'Neurofibromas, Lisch nodules, optic glioma', 'NF2: chr 22, merlin', 'Bilateral vestibular schwannomas', 'Meningiomas, juvenile cataracts', 'AD, about half de novo', 'Variable expressivity'],
    misconception:
      'A negative family history does not exclude neurofibromatosis: about half of cases are new variants. And bilateral acoustic (vestibular) schwannomas point to NF2, not NF1.',
    quick:
      'NF1 (chr 17, neurofibromin = RAS off-switch): café-au-lait spots, axillary/groin freckling, neurofibromas, Lisch nodules, optic glioma; very variable. NF2 (chr 22, merlin): bilateral vestibular schwannomas, meningiomas, cataracts. Both autosomal dominant tumor suppressors, about half de novo.',
    detailed: [
      'NF1 is caused by loss of neurofibromin, a tumor suppressor that switches off RAS. Children develop multiple café-au-lait spots, then axillary and groin freckling, iris Lisch nodules and neurofibromas; some develop optic gliomas or malignant nerve sheath tumors. Expressivity is highly variable, even within a family.',
      'NF2 is caused by loss of merlin, a Schwann-cell tumor suppressor. Its hallmark is bilateral vestibular schwannomas (hearing loss, tinnitus, imbalance) by early adulthood, with meningiomas and childhood cataracts. Both disorders are autosomal dominant, and about half arise de novo.',
    ],
    takeaway: 'NF1 = chr 17, neurofibromin, skin and nerve tumors; NF2 = chr 22, merlin, bilateral vestibular schwannomas.',
    related: ['gen-two-hit', 'gen-tsc'],
    outline: found('Nervous System & Special Senses', 'Disorders of the nervous system'),
    mcq: [
      {
        stem: 'A 7-year-old has many café-au-lait spots, freckling in both armpits and small pigmented iris nodules. Neither parent is affected. Which protein is most likely deficient?',
        options: [
          ['a', 'Neurofibromin'],
          ['b', 'Merlin', 'Merlin loss causes NF2, with bilateral vestibular schwannomas rather than café-au-lait spots and freckling.'],
          ['c', 'Hamartin or tuberin', 'Tuberous sclerosis gives ash-leaf (light) macules and facial angiofibromas.'],
          ['d', 'The VHL protein', 'Von Hippel–Lindau syndrome causes hemangioblastomas and renal cancer, not pigmentary changes.'],
          ['e', 'Fibrillin-1', 'Fibrillin-1 loss causes Marfan syndrome.'],
        ],
        answer: 'a',
        mini: 'Multiple café-au-lait spots, axillary freckling and Lisch nodules = NF1, loss of neurofibromin. Unaffected parents fit a new (de novo) variant, which accounts for about half of cases.',
        reasoning: 'identification',
        objectives: [`${AD}.nf1`],
        difficulty: 2,
      },
      {
        stem: 'How does loss of neurofibromin lead to tumors along nerves?',
        options: [
          ['a', 'RAS stays switched on, driving uncontrolled cell growth'],
          ['b', 'mTOR is released from inhibition by the hamartin–tuberin complex', 'That is the mechanism of tuberous sclerosis.'],
          ['c', 'Hypoxia-inducible factor is no longer degraded', 'That is the mechanism of von Hippel–Lindau disease.'],
          ['d', 'β-catenin accumulates because it is not targeted for destruction', 'That is the mechanism of APC loss in FAP.'],
          ['e', 'A toxic protein forms aggregates in Schwann cells', 'NF1 is a loss of tumor suppressor function, not a toxic gain.'],
        ],
        answer: 'a',
        mini: 'Neurofibromin turns off RAS. Without it, RAS signaling stays active and cells such as Schwann-lineage cells proliferate, forming neurofibromas.',
        reasoning: 'mechanism',
        objectives: [`${AD}.nf1`],
        difficulty: 2,
      },
      {
        stem: 'A 24-year-old has progressive hearing loss and tinnitus in both ears and a balance problem. MRI shows tumors on both vestibulocochlear nerves; she had a cataract removed at age 9. Which gene is most likely affected?',
        options: [
          ['a', 'NF2 on chromosome 22'],
          ['b', 'NF1 on chromosome 17', 'NF1 does not typically cause bilateral vestibular schwannomas.'],
          ['c', 'VHL on chromosome 3', 'VHL causes hemangioblastomas, not vestibular schwannomas.'],
          ['d', 'TSC2 on chromosome 16', 'Tuberous sclerosis causes tubers, angiofibromas and angiomyolipomas.'],
          ['e', 'TP53 on chromosome 17', 'Li–Fraumeni syndrome causes sarcomas, breast and brain cancers.'],
        ],
        answer: 'a',
        mini: 'Bilateral vestibular schwannomas in early adulthood with childhood cataract = NF2 (merlin, chromosome 22).',
        reasoning: 'identification',
        objectives: [`${AD}.nf2`],
        difficulty: 2,
      },
      {
        stem: 'A father with NF1 has only a few café-au-lait spots; his daughter, who has the same NF1 variant, has hundreds of neurofibromas and an optic glioma. What best explains this difference?',
        options: [
          ['a', 'Variable expressivity of the same variant'],
          ['b', 'Incomplete penetrance in the daughter', 'The daughter is clearly affected; penetrance concerns whether any features appear at all.'],
          ['c', 'Anticipation from repeat expansion', 'NF1 is not a repeat-expansion disorder.'],
          ['d', 'Uniparental disomy of chromosome 17', 'The father passed on one copy as expected; UPD is not suggested.'],
          ['e', 'Locus heterogeneity between father and daughter', 'They carry the same variant in the same gene.'],
        ],
        answer: 'a',
        mini: 'The same NF1 variant gives very different severity in different people, even in one family: variable expressivity, a hallmark of NF1.',
        reasoning: 'interpretation',
        objectives: [`${AD}.nf1`],
        steps: ['Both carry the same NF1 variant and both have features → the variant is penetrant in both.', 'The severity differs greatly within the family.', 'Different severity of the same genotype = variable expressivity.'],
        difficulty: 3,
      },
      {
        stem: 'A 30-year-old woman was found to have bilateral vestibular schwannomas and a meningioma. Her parents are unaffected and have normal MRI scans. What is the risk that each of her children inherits the disorder?',
        options: [
          ['a', '50%, because NF2 is autosomal dominant'],
          ['b', '0%, because her parents are unaffected', 'Her own variant (probably new in her) can be passed to her children.'],
          ['c', '25%, because both parents must be carriers', 'NF2 is autosomal dominant, not recessive.'],
          ['d', '100% of sons and 0% of daughters', 'NF2 is autosomal, not X-linked.'],
          ['e', 'Only her daughters, through mitochondrial DNA', 'NF2 is a nuclear gene; mitochondrial inheritance does not apply.'],
        ],
        answer: 'a',
        mini: 'NF2 is autosomal dominant. A de novo variant in her is still present in her germ cells (unless she is mosaic), so each child has a 50% chance of inheriting it.',
        reasoning: 'prediction',
        objectives: [`${AD}.nf2`],
        steps: ['Bilateral vestibular schwannomas + meningioma → NF2.', 'Unaffected parents → the variant most likely arose de novo in her.', 'She now carries it; autosomal dominant → 50% per child (lower only if she is mosaic).'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'About half of people with neurofibromatosis type 1 have no family history because their variant is new.', isTrue: true, correction: 'Correct: about half of cases result from new NF1 variants.', objectives: [`${AD}.nf1`], difficulty: 1 },
      { statement: 'Bilateral vestibular schwannomas are the hallmark of neurofibromatosis type 1.', isTrue: false, correction: 'They are the hallmark of NF2 (merlin, chromosome 22).', objectives: [`${AD}.nf2`], difficulty: 1 },
    ],
    clues: [
      { answer: 'NEUROFIBROMIN', clue: 'NF1 protein that switches off RAS', objectives: [`${AD}.nf1`], difficulty: 2 },
      { answer: 'MERLIN', clue: 'Schwann-cell tumor suppressor lost in NF2', objectives: [`${AD}.nf2`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-tsc',
    relevance: 'core',
    title: 'Tuberous sclerosis complex',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'nervous-behavioral',
    alsoSystems: ['musculoskeletal-skin', 'renal'],
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${AD}.tsc`],
    objectives: ['Explain tuberous sclerosis as loss of the hamartin–tuberin brake on mTOR and recognize its features'],
    citations: [MP_TSC, MP_TSC1, MP_TSC2, TSC_MTOR, TSC_AML],
    facts: [
      'Tuberous sclerosis complex causes numerous benign tumors in the brain (cortical tubers), kidneys, heart (cardiac rhabdomyoma), skin and retina, with seizures, intellectual disability and autism spectrum and other neuropsychiatric problems.',
      'Virtually all people with tuberous sclerosis have skin changes, including patches of light-colored skin, raised thickened skin and growths under the nails; facial angiofibromas begin in childhood.',
      'TSC1 (chromosome 9) encodes hamartin and TSC2 (chromosome 16) encodes tuberin; the two proteins work together as tumor suppressors.',
      'The hamartin–tuberin complex inhibits mTORC1 by acting as a GTPase-activating protein for Rheb; losing it leaves mTORC1, which drives cell growth, overactive.',
      'Tuberous sclerosis is autosomal dominant; about two-thirds of cases are caused by new variants.',
      'The kidney tumors of tuberous sclerosis are typically renal angiomyolipomas.',
    ],
    factRefs: [[0], [0], [1, 2], [3], [0], [4]],
    mechanism:
      'Hamartin and tuberin form a complex that keeps Rheb inactive and so restrains mTORC1, the hub that drives protein synthesis and cell growth. When a cell loses the remaining functional copy (second hit), mTORC1 is overactive and the cell grows into a hamartoma: tubers, angiofibromas, rhabdomyomas or angiomyolipomas.',
    associations: ['TSC1 hamartin (chr 9), TSC2 tuberin (chr 16)', 'mTORC1 overactivity', 'Cortical tubers, seizures', 'Intellectual disability, autism', 'Facial angiofibromas', 'Ash-leaf (light) macules', 'Cardiac rhabdomyoma', 'Renal angiomyolipoma', 'AD, two-thirds de novo'],
    misconception:
      'Tuberous sclerosis hamartomas are not caused by RAS activation (NF1) or HIF accumulation (VHL): the defect is loss of the hamartin–tuberin brake on mTOR.',
    quick:
      'Tuberous sclerosis: TSC1 (hamartin) or TSC2 (tuberin) → mTORC1 overactive → hamartomas. Cortical tubers, seizures, intellectual disability, autism; facial angiofibromas, ash-leaf macules, shagreen patch; cardiac rhabdomyoma; renal angiomyolipoma. Autosomal dominant, two-thirds de novo.',
    detailed: [
      'Tuberous sclerosis complex produces benign growths in many organs: cortical tubers (seizures, intellectual disability, autism and other neuropsychiatric disorders), cardiac rhabdomyomas, renal tumors (angiomyolipomas) and retinal lesions. Skin signs are almost universal: light-colored (ash-leaf) patches, raised thickened skin and facial angiofibromas.',
      'TSC1 (hamartin) and TSC2 (tuberin) act together as a tumor suppressor complex that inhibits mTORC1 via Rheb. Loss of the second copy in a cell releases mTORC1, driving growth. The disorder is autosomal dominant; two-thirds of cases are de novo.',
    ],
    takeaway: 'TSC = hamartin/tuberin loss → mTOR overactive → tubers, angiofibromas, rhabdomyoma, angiomyolipoma.',
    related: ['gen-neurofibromatosis', 'gen-vhl', 'gen-two-hit'],
    outline: found('Nervous System & Special Senses', 'Disorders of the nervous system'),
    mcq: [
      {
        stem: 'An infant with seizures has several pale, leaf-shaped skin macules. Echocardiography shows a cardiac rhabdomyoma, and MRI shows cortical tubers. Overactivity of which signaling hub explains the growths?',
        options: [
          ['a', 'mTORC1'],
          ['b', 'RAS', 'RAS overactivity from neurofibromin loss is the mechanism of NF1.'],
          ['c', 'Hypoxia-inducible factor', 'HIF accumulation is the mechanism of von Hippel–Lindau disease.'],
          ['d', 'Wnt/β-catenin', 'β-catenin accumulation is the mechanism of APC loss in FAP.'],
          ['e', 'JAK2–STAT', 'JAK2 activation drives myeloproliferative neoplasms.'],
        ],
        answer: 'a',
        mini: 'Ash-leaf macules, cardiac rhabdomyoma and cortical tubers = tuberous sclerosis. Loss of hamartin or tuberin releases mTORC1, which drives cell growth and hamartoma formation.',
        reasoning: 'interpretation',
        objectives: [`${AD}.tsc`],
        steps: ['Seizures + light leaf-shaped macules + cardiac rhabdomyoma + cortical tubers → tuberous sclerosis.', 'TSC1/TSC2 encode hamartin and tuberin, which inhibit mTORC1 (via Rheb).', 'Their loss leaves mTORC1 overactive → hamartomas.'],
        difficulty: 3,
      },
      {
        stem: 'How do hamartin and tuberin normally restrain cell growth?',
        options: [
          ['a', 'They keep Rheb inactive, which holds mTORC1 in check'],
          ['b', 'They inactivate RAS by stimulating its GTPase activity', 'Inactivating RAS is the role of neurofibromin (NF1).'],
          ['c', 'They target HIF for degradation in normal oxygen', 'Degrading HIF is the role of the VHL protein.'],
          ['d', 'They promote destruction of β-catenin', 'Promoting β-catenin destruction is the role of APC.'],
          ['e', 'They arrest the cell cycle after DNA damage', 'Cell-cycle arrest after DNA damage is the role of p53.'],
        ],
        answer: 'a',
        mini: 'The hamartin–tuberin complex acts as a GTPase-activating protein for Rheb; inactive Rheb cannot switch on mTORC1, so growth is restrained.',
        reasoning: 'mechanism',
        objectives: [`${AD}.tsc`],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Most cases of tuberous sclerosis are inherited from an affected parent.', isTrue: false, correction: 'About two-thirds of cases are caused by new (de novo) TSC1 or TSC2 variants.', objectives: [`${AD}.tsc`], difficulty: 2 },
    ],
    clues: [
      { answer: 'TUBERIN', clue: 'TSC2 protein that partners with hamartin', objectives: [`${AD}.tsc`], difficulty: 2 },
      { answer: 'RHABDOMYOMA', clue: 'Benign cardiac tumor of infants with tuberous sclerosis', objectives: [`${AD}.tsc`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-vhl',
    relevance: 'core',
    title: 'Von Hippel–Lindau disease',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'nervous-behavioral',
    alsoSystems: ['renal', 'endocrine'],
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${AD}.vhl`],
    objectives: ['Explain von Hippel–Lindau disease as failure to degrade HIF and recognize its tumors'],
    citations: [MP_VHL, MP_VHLG],
    facts: [
      'Von Hippel–Lindau syndrome causes tumors and cysts in many organs; hemangioblastomas of the brain, spinal cord and retina are characteristic.',
      'People with von Hippel–Lindau syndrome have increased risks of clear cell renal cell carcinoma, pancreatic neuroendocrine tumors and pheochromocytoma, and commonly develop kidney and pancreatic cysts.',
      'The VHL gene (chromosome 3) is a tumor suppressor; its protein is part of a complex that targets hypoxia-inducible factor 2-alpha (HIF-2α) for degradation.',
      'Von Hippel–Lindau syndrome is autosomal dominant; most patients inherit the variant, and about 20% have a new variant.',
    ],
    factRefs: [[0], [0], [1], [0]],
    mechanism:
      'The VHL protein marks HIF for destruction when oxygen is normal. When a cell loses its remaining VHL copy, HIF is not degraded, and the cell behaves as if hypoxic: it switches on genes for blood vessel growth and cell proliferation. The results are highly vascular tumors (hemangioblastomas) and clear cell renal carcinoma.',
    associations: ['VHL on chromosome 3', 'HIF not degraded → pseudo-hypoxia', 'CNS and retinal hemangioblastomas', 'Clear cell renal cell carcinoma', 'Pheochromocytoma', 'Renal and pancreatic cysts', 'Autosomal dominant'],
    misconception:
      'VHL loss does not make cells hypoxic: oxygen is normal, but HIF escapes degradation, so cells act as if they were hypoxic.',
    quick:
      'Von Hippel–Lindau: VHL (chromosome 3) normally targets HIF for degradation; loss → HIF accumulates → angiogenic tumors. CNS and retinal hemangioblastomas, clear cell renal carcinoma, pheochromocytoma, renal and pancreatic cysts. Autosomal dominant.',
    detailed: [
      'Von Hippel–Lindau disease is an autosomal dominant tumor syndrome. Hemangioblastomas (vascular tumors of the cerebellum, spinal cord and retina), clear cell renal cell carcinoma, pheochromocytoma and kidney and pancreatic cysts are its hallmarks; tumors usually appear in young adulthood.',
      'VHL, on chromosome 3, encodes part of a complex that degrades hypoxia-inducible factor. Without it, HIF accumulates even in normal oxygen and drives angiogenesis and growth, explaining the vascular tumors.',
    ],
    takeaway: 'VHL loss → HIF not degraded → hemangioblastomas, clear cell RCC, pheochromocytoma.',
    related: ['gen-tsc', 'gen-two-hit'],
    outline: found('Nervous System & Special Senses', 'Disorders of the nervous system'),
    mcq: [
      {
        stem: 'A 28-year-old has a cerebellar hemangioblastoma. Imaging also shows bilateral renal masses, and his father died of kidney cancer at 40. Which protein function is lost?',
        options: [
          ['a', 'Degradation of hypoxia-inducible factor'],
          ['b', 'Inactivation of RAS by GTP hydrolysis', 'RAS inactivation by neurofibromin is lost in NF1.'],
          ['c', 'Inhibition of mTORC1 through Rheb', 'Loss of the hamartin–tuberin brake causes tuberous sclerosis.'],
          ['d', 'Cell-cycle arrest after DNA damage', 'Loss of p53 function causes Li–Fraumeni syndrome.'],
          ['e', 'Destruction of β-catenin in the Wnt pathway', 'Loss of APC function causes FAP.'],
        ],
        answer: 'a',
        mini: 'Hemangioblastoma + bilateral renal tumors + a father with early kidney cancer = von Hippel–Lindau disease: VHL normally targets HIF for degradation, so its loss drives vascular tumors and clear cell renal carcinoma.',
        reasoning: 'interpretation',
        objectives: [`${AD}.vhl`],
        steps: ['Cerebellar hemangioblastoma + bilateral renal masses at a young age → von Hippel–Lindau disease.', 'Affected father → autosomal dominant tumor suppressor syndrome.', 'VHL protein degrades HIF; its loss leaves HIF active → angiogenesis and growth.'],
        difficulty: 3,
      },
      {
        stem: 'Why do tumors in von Hippel–Lindau disease tend to be highly vascular?',
        options: [
          ['a', 'Undegraded HIF switches on genes for blood vessel growth'],
          ['b', 'The tumors arise from smooth muscle of large arteries', 'Hemangioblastomas arise from vascular-rich tissue driven by HIF, not from arterial smooth muscle.'],
          ['c', 'Overactive mTOR increases protein synthesis in endothelium', 'mTOR overactivity is the mechanism of tuberous sclerosis.'],
          ['d', 'Mutant RAS is constitutively bound to GTP', 'Constitutively active RAS is not the mechanism of VHL.'],
          ['e', 'Tumor cells are truly hypoxic because blood flow is low', 'Oxygen is normal; HIF escapes degradation despite normal oxygen.'],
        ],
        answer: 'a',
        mini: 'Without VHL, HIF is not degraded even in normal oxygen; it activates angiogenic and growth genes, so the tumors are highly vascular (pseudo-hypoxia).',
        reasoning: 'mechanism',
        objectives: [`${AD}.vhl`],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'The VHL gene is located on chromosome 3.', isTrue: true, correction: 'Correct; VHL is a tumor suppressor on chromosome 3.', objectives: [`${AD}.vhl`], difficulty: 1 },
    ],
    clues: [
      { answer: 'HYPOXIA', clue: 'State that cells lacking VHL mimic although oxygen is normal', objectives: [`${AD}.vhl`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-cancer-predisposition',
    relevance: 'core',
    title: 'Hereditary cancer predisposition: FAP and Li–Fraumeni syndrome',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'gastrointestinal',
    alsoSystems: ['multisystem'],
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${AD}.fap`, `${AD}.lfs`],
    objectives: ['Explain FAP as APC loss in the Wnt/β-catenin pathway', 'Recognize Li–Fraumeni syndrome (germline TP53)'],
    citations: [MP_FAP, MP_APC, MP_LFS, LFS_SPECTRUM],
    facts: [
      'In classic familial adenomatous polyposis (FAP), hundreds to thousands of colon polyps develop from childhood; colorectal cancer typically appears around age 40, and at least 90% develop it by 50 unless the colon is removed.',
      'APC (chromosome 5) encodes a tumor suppressor that blocks Wnt signaling by helping control levels of β-catenin; most FAP variants produce a short, nonfunctional APC protein.',
      'FAP is autosomal dominant; each child of an affected person has a 50% chance of inheriting the variant. Attenuated FAP has fewer polyps (about 30 on average) and later cancer.',
      'Li–Fraumeni syndrome greatly increases the risk of cancers in children and young adults, chiefly breast cancer, osteosarcoma, soft tissue sarcomas, brain tumors, leukemias and adrenocortical carcinoma.',
      'Li–Fraumeni syndrome is autosomal dominant and is associated with germline variants in the tumor suppressor gene TP53.',
    ],
    factRefs: [[0], [1], [0], [2, 3], [2]],
    mechanism:
      'APC is part of the complex that targets β-catenin for destruction. With one APC copy lost in every colonic cell, a second hit lets β-catenin accumulate and drive proliferation in many crypts, so polyps appear by the hundreds and cancer becomes almost certain. In Li–Fraumeni syndrome, a germline TP53 variant removes one copy of the guardian that arrests or kills damaged cells; loss of the second copy allows cancers in many tissues at young ages.',
    associations: ['FAP: APC (chr 5), Wnt/β-catenin', 'Hundreds to thousands of colon polyps', 'Colorectal cancer by ~40 without colectomy', 'AD, 50% risk to each child', 'Li–Fraumeni: germline TP53', 'Sarcomas, breast cancer, brain tumors, leukemia, adrenocortical carcinoma', 'Young age at onset'],
    misconception:
      'In FAP the risk is not from one polyp: hundreds of polyps each carry a chance of malignancy, so cancer is almost inevitable without colectomy.',
    quick:
      'FAP: APC (chromosome 5) loss → β-catenin accumulates (Wnt on) → hundreds to thousands of polyps from childhood; colorectal cancer ~40 without colectomy; AD. Li–Fraumeni: germline TP53 → early sarcomas, breast cancer, brain tumors, leukemia, adrenocortical carcinoma; AD.',
    detailed: [
      'Familial adenomatous polyposis is autosomal dominant. APC normally restrains Wnt signaling by controlling β-catenin levels; truncating variants inactivate it. Classic FAP produces hundreds to thousands of colon polyps from childhood, and colorectal cancer is near-certain (typically around 40) unless the colon is removed. Attenuated FAP has fewer, later polyps.',
      'Li–Fraumeni syndrome is an autosomal dominant predisposition to multiple cancers at young ages: breast cancer, osteosarcoma and soft tissue sarcomas, brain tumors, leukemias and adrenocortical carcinoma. Most families carry a germline TP53 variant, so every cell has only one working copy of this tumor suppressor.',
    ],
    takeaway: 'FAP = APC/β-catenin, hundreds of polyps; Li–Fraumeni = germline TP53, sarcoma–breast–brain–adrenal cancers when young.',
    related: ['gen-two-hit', 'gen-hht'],
    outline: found('Gastrointestinal System', 'Neoplasms'),
    mcq: [
      {
        stem: 'A 19-year-old has colonoscopy because his father died of colon cancer at 42. Hundreds of adenomatous polyps carpet the colon. Which protein normally prevents this by limiting β-catenin?',
        options: [
          ['a', 'APC'],
          ['b', 'p53', 'p53 arrests the cell cycle after DNA damage; its germline loss causes Li–Fraumeni syndrome.'],
          ['c', 'MLH1', 'MLH1 is a mismatch repair protein; Lynch syndrome causes few polyps.'],
          ['d', 'Neurofibromin', 'Neurofibromin inactivates RAS (NF1).'],
          ['e', 'SMAD4', 'SMAD4 is a TGF-β pathway protein.'],
        ],
        answer: 'a',
        mini: 'Hundreds of adenomas in a young man with an affected father = FAP. APC is part of the complex that controls β-catenin levels; its loss keeps Wnt signaling on.',
        reasoning: 'identification',
        objectives: [`${AD}.fap`],
        difficulty: 2,
      },
      {
        stem: 'Why does a germline APC variant make colorectal cancer almost inevitable without colectomy?',
        options: [
          ['a', 'Every colonic cell needs only one more hit to lose APC'],
          ['b', 'The mutant APC protein directly breaks DNA', 'APC loss removes a brake on growth; it does not damage DNA directly.'],
          ['c', 'One mutant APC copy is enough to make each cell malignant', 'Tumor cells lose both APC copies; one inherited hit is not enough alone.'],
          ['d', 'APC variants block mismatch repair throughout the colon', 'Defective mismatch repair is the mechanism of Lynch syndrome.'],
          ['e', 'APC is an oncogene activated by a single hit', 'APC is a tumor suppressor.'],
        ],
        answer: 'a',
        mini: 'With one APC copy already lost in every cell, a second hit in any of millions of colonic cells releases β-catenin signaling, producing hundreds of polyps; at least one becomes malignant.',
        reasoning: 'mechanism',
        objectives: [`${AD}.fap`],
        difficulty: 3,
      },
      {
        stem: 'A 16-year-old with osteosarcoma has a mother who had breast cancer at 31 and a maternal uncle who had a soft tissue sarcoma at 25. Which germline variant is most likely?',
        options: [
          ['a', 'TP53'],
          ['b', 'APC', 'APC causes hundreds of colon polyps, not this tumor pattern.'],
          ['c', 'RB1', 'Germline RB1 variants present with retinoblastoma in early childhood, not this breast–sarcoma pattern.'],
          ['d', 'VHL', 'VHL causes hemangioblastomas and renal carcinoma.'],
          ['e', 'SMAD4', 'SMAD4 variants cause juvenile polyposis with HHT, not this sarcoma–breast pattern.'],
        ],
        answer: 'a',
        mini: 'Sarcomas and early breast cancer in several relatives at young ages = Li–Fraumeni syndrome, an autosomal dominant germline TP53 disorder.',
        reasoning: 'interpretation',
        objectives: [`${AD}.lfs`],
        steps: ['Osteosarcoma in a teenager, breast cancer at 31 and a sarcoma at 25 in close relatives → early, varied cancers.', 'Transmission through the mother’s side in two generations fits autosomal dominant inheritance.', 'Sarcoma + early breast cancer = Li–Fraumeni syndrome (germline TP53).'],
        difficulty: 3,
      },
      {
        stem: 'A 32-year-old woman had a colectomy at 24 for classic FAP. Her partner has no APC variant. She asks about her 8-year-old son. What is his risk, and why does surveillance start in childhood rather than at 45?',
        options: [
          ['a', '50%; polyps can appear in childhood and multiply quickly'],
          ['b', '25%; both parents must pass on an APC variant', 'FAP is autosomal dominant; one inherited APC variant is enough.'],
          ['c', '50%; but polyps never appear before age 40', 'Classic FAP polyps can appear in childhood, and 95% have polyps by 35.'],
          ['d', 'Near 0%, because her colon has been removed', 'Colectomy does not change the APC variant in her germ cells.'],
          ['e', '100% of sons, because FAP is X-linked', 'APC is on chromosome 5; FAP is autosomal.'],
        ],
        answer: 'a',
        mini: 'FAP is autosomal dominant, so each child of an affected parent has a 50% risk. Classic FAP polyps can begin in childhood and increase rapidly, so at-risk children are tested or monitored long before the usual screening age.',
        reasoning: 'prediction',
        objectives: [`${AD}.fap`],
        steps: ['Classic FAP = autosomal dominant APC variant; her partner has none.', 'Each child inherits her APC variant with probability 1/2.', 'Polyps can appear in childhood (95% by 35), so surveillance starts early.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Adrenocortical carcinoma in childhood is a recognized Li–Fraumeni cancer.', isTrue: true, correction: 'Correct; adrenocortical carcinoma is among its core tumors.', objectives: [`${AD}.lfs`], difficulty: 2 },
      { statement: 'Familial adenomatous polyposis is autosomal recessive.', isTrue: false, correction: 'FAP is autosomal dominant: each child of an affected person has a 50% risk.', objectives: [`${AD}.fap`], difficulty: 1 },
    ],
    clues: [
      { answer: 'POLYPOSIS', clue: 'Hundreds of colonic adenomas, as in FAP', objectives: [`${AD}.fap`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-hht',
    relevance: 'core',
    title: 'Hereditary hemorrhagic telangiectasia',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'cardiovascular',
    alsoSystems: ['blood-immune'],
    topic: 'genetics-inheritance',
    difficulty: 2,
    curriculum: [`${AD}.hht`],
    objectives: ['Recognize hereditary hemorrhagic telangiectasia and its TGF-β/BMP pathway genes'],
    citations: [MP_HHT, HHT_TGF],
    facts: [
      'In hereditary hemorrhagic telangiectasia (HHT), some arteries connect directly to veins without capillaries (arteriovenous malformations); near the skin and mucosa these appear as red telangiectases.',
      'Nosebleeds are very common in HHT, and more serious bleeding can arise from malformations in the brain, liver, lungs or gastrointestinal tract.',
      'HHT is autosomal dominant; type 1 is caused by ENG and type 2 by ACVRL1 variants, and SMAD4 variants cause a combined juvenile polyposis–HHT syndrome.',
      'ENG, ACVRL1 and SMAD4 are components of the TGF-β/BMP signaling pathway in blood vessel lining; their loss accounts for most HHT.',
    ],
    factRefs: [[0], [0], [0], [1]],
    mechanism:
      'TGF-β/BMP signaling through endothelial receptors (endoglin, ALK1) and SMAD4 keeps developing vessels organized. Losing one copy weakens this signaling, so some arteries join veins directly. Without the capillary buffer, thin-walled veins receive arterial pressure, dilate and bleed: telangiectases in the nose and gut, and larger malformations in the lung, liver and brain.',
    associations: ['Autosomal dominant', 'Telangiectases of lips, tongue, fingertips', 'Recurrent epistaxis', 'AVMs: lung, brain, liver', 'GI bleeding', 'ENG (type 1), ACVRL1 (type 2), SMAD4', 'TGF-β/BMP signaling'],
    misconception:
      'Recurrent nosebleeds in HHT are not a clotting-factor problem: coagulation is normal, and the bleeding comes from fragile malformed vessels.',
    quick:
      'HHT (Osler–Weber–Rendu): autosomal dominant; ENG, ACVRL1 (and SMAD4) in TGF-β/BMP signaling → arteriovenous malformations. Telangiectases, recurrent epistaxis, GI bleeding, AVMs in lung, liver and brain. Coagulation tests normal.',
    detailed: [
      'Hereditary hemorrhagic telangiectasia is an autosomal dominant vascular disorder. Direct artery-to-vein connections appear as telangiectases on the lips, tongue, nasal mucosa and fingertips, and as larger arteriovenous malformations in the lungs, liver and brain. Recurrent nosebleeds are the commonest problem; GI and organ bleeding are more serious.',
      'Most cases involve the TGF-β/BMP pathway in endothelial cells: ENG (endoglin, type 1), ACVRL1 (ALK1, type 2) or SMAD4 (combined with juvenile polyposis). Type 1 is more often associated with lung and brain malformations.',
    ],
    takeaway: 'HHT = AD TGF-β/BMP vascular defect (ENG, ACVRL1) → telangiectases, epistaxis, AVMs.',
    related: ['gen-cancer-predisposition'],
    outline: found('Cardiovascular System', 'Diseases of the arteries and veins'),
    mcq: [
      {
        stem: 'A 35-year-old has had frequent nosebleeds since childhood and now has iron-deficiency anemia. He has small red spots on his lips and tongue that blanch with pressure. His mother has the same spots. Coagulation tests are normal. Which pathway is affected?',
        options: [
          ['a', 'TGF-β/BMP signaling in endothelial cells'],
          ['b', 'Factor VIII in the coagulation cascade', 'Coagulation tests are normal, and hemophilia does not cause mucocutaneous telangiectases.'],
          ['c', 'Collagen cross-linking in vessel walls', 'Defective collagen cross-linking causes fragile vessels and poor wound healing, not discrete telangiectases.'],
          ['d', 'von Willebrand factor binding to platelets', 'Von Willebrand disease does not produce visible telangiectases.'],
          ['e', 'HIF degradation in hypoxia signaling', 'HIF accumulation is the mechanism of von Hippel–Lindau disease.'],
        ],
        answer: 'a',
        mini: 'Recurrent epistaxis, mucocutaneous telangiectases, an affected parent and normal coagulation = HHT, a TGF-β/BMP endothelial signaling disorder (ENG, ACVRL1).',
        reasoning: 'interpretation',
        objectives: [`${AD}.hht`],
        steps: ['Lifelong nosebleeds + blanching red spots on lips and tongue + normal coagulation → vascular malformations, not a bleeding diathesis.', 'Affected mother → autosomal dominant.', 'HHT = ENG/ACVRL1/SMAD4 in the TGF-β/BMP pathway.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Hereditary hemorrhagic telangiectasia can cause arteriovenous malformations in the lungs and brain.', isTrue: true, correction: 'Correct; serious bleeding can arise from malformations in the brain, liver, lungs or gut.', objectives: [`${AD}.hht`], difficulty: 1 },
    ],
    clues: [
      { answer: 'EPISTAXIS', clue: 'Recurrent nosebleeds, the commonest symptom of HHT', objectives: [`${AD}.hht`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-pkd',
    relevance: 'core',
    title: 'Polycystic kidney disease: ADPKD and ARPKD',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'renal',
    topic: 'genetics-inheritance',
    difficulty: 2,
    curriculum: [`${AD}.adpkd`, `${AR}.arpkd`],
    objectives: ['Recognize ADPKD (PKD1, PKD2) and its extrarenal features', 'Recognize ARPKD (PKHD1) and distinguish it from ADPKD'],
    citations: [MP_PKD, MP_PKD1, MP_PKHD1],
    facts: [
      'In polycystic kidney disease, clusters of cysts enlarge the kidneys and can lead to kidney failure; cysts also develop in other organs, particularly the liver.',
      'Complications include hypertension, flank pain, hematuria, urinary infections, kidney stones, heart valve abnormalities and aneurysms of the aorta or of brain vessels.',
      'Autosomal dominant PKD is caused by variants in PKD1 (chromosome 16, polycystin-1) or PKD2 (polycystin-2); PKD2 disease is usually less severe. About 90% inherit the variant from an affected parent.',
      'Autosomal recessive PKD is caused by PKHD1 variants (fibrocystin), is much rarer (about 1 in 20,000 to 40,000 versus 1 in 500 to 1,000 for ADPKD), is usually apparent at birth or in early infancy and is often lethal early in life.',
    ],
    factRefs: [[0], [0], [0, 1], [0, 2]],
    mechanism:
      'Polycystins (ADPKD) and fibrocystin (ARPKD) are membrane proteins thought to relay signals that keep tubular cells organized. When they fail, tubules dilate into cysts that progressively replace kidney tissue. ADPKD shows up in adults with large cystic kidneys and extrarenal vascular involvement; ARPKD shows up in newborns, whose enlarged kidneys can fail before birth.',
    associations: ['ADPKD: PKD1 (chr 16), PKD2', 'Adult onset, bilateral enlarging cysts', 'Hypertension, hematuria, flank pain', 'Liver cysts', 'Berry (brain) aneurysms', 'Mitral valve prolapse', 'ARPKD: PKHD1 (fibrocystin)', 'Infancy, often lethal'],
    misconception:
      'ADPKD is not a childhood disease: cysts are present early but kidney enlargement and failure usually appear in adulthood, unlike ARPKD, which presents in newborns.',
    quick:
      'ADPKD: PKD1 (chr 16) or PKD2; common (1/500–1,000); adult bilateral cystic kidneys, hypertension, hematuria, liver cysts, brain aneurysms, valve disease. ARPKD: PKHD1 (fibrocystin); rare; enlarged cystic kidneys at birth or early infancy, often lethal.',
    detailed: [
      'Autosomal dominant polycystic kidney disease (PKD1 on chromosome 16 or PKD2) is common. Cysts progressively enlarge both kidneys, causing hypertension, pain, hematuria, infections and eventually kidney failure in adulthood. Extrarenal features include liver cysts, heart valve abnormalities and aneurysms of the aorta or brain vessels, whose rupture can be fatal.',
      'Autosomal recessive polycystic kidney disease (PKHD1, fibrocystin) is rare and presents at birth or in infancy with massively enlarged kidneys; it is often lethal early in life. The inheritance and age of onset separate the two forms.',
    ],
    takeaway: 'ADPKD = PKD1/2, adults, liver cysts and brain aneurysms; ARPKD = PKHD1, newborns.',
    related: ['gen-ad', 'gen-ar'],
    outline: found('Renal & Urinary System', 'Congenital and developmental disorders'),
    mcq: [
      {
        stem: 'A 42-year-old with hypertension and flank pain has bilaterally enlarged kidneys full of cysts and several liver cysts. His father needed dialysis at 55. Which complication should he be specifically asked about because it can be fatal?',
        options: [
          ['a', 'Sudden severe headache from a ruptured brain aneurysm'],
          ['b', 'Bilateral vestibular schwannomas causing deafness', 'Vestibular schwannomas are a feature of NF2.'],
          ['c', 'Hundreds of adenomatous polyps in the colon', 'Colonic polyposis is a feature of FAP.'],
          ['d', 'Hemangioblastoma of the cerebellum or retina', 'Hemangioblastomas are a feature of von Hippel–Lindau disease.'],
          ['e', 'Kayser–Fleischer rings at the corneal edge', 'Corneal copper rings are a feature of Wilson disease.'],
        ],
        answer: 'a',
        mini: 'Adult bilateral cystic kidneys with liver cysts and an affected father = ADPKD. Aneurysms of brain vessels are a recognized, potentially fatal association.',
        reasoning: 'prediction',
        objectives: [`${AD}.adpkd`],
        steps: ['Bilateral cystic kidneys + liver cysts + hypertension in an adult, affected father → ADPKD.', 'ADPKD also causes aneurysms of the aorta and brain vessels.', 'A ruptured brain aneurysm presents with sudden severe headache and can be fatal.'],
        difficulty: 3,
      },
      {
        stem: 'A newborn has massively enlarged cystic kidneys on ultrasound. Both parents have normal kidney ultrasounds. Which gene is most likely involved?',
        options: [
          ['a', 'PKHD1'],
          ['b', 'PKD1', 'PKD1 causes autosomal dominant PKD, usually in adults with an affected parent.'],
          ['c', 'PKD2', 'PKD2 disease is dominant and usually milder, in adults.'],
          ['d', 'VHL', 'VHL causes kidney cysts and clear cell carcinoma in adults.'],
          ['e', 'TSC1 or TSC2', 'Tuberous sclerosis causes angiomyolipomas rather than massive neonatal cystic kidneys.'],
        ],
        answer: 'a',
        mini: 'Enlarged cystic kidneys at birth with unaffected parents = autosomal recessive PKD, caused by PKHD1 (fibrocystin).',
        reasoning: 'identification',
        objectives: [`${AR}.arpkd`],
        difficulty: 2,
      },
      {
        stem: 'A couple’s first baby died shortly after birth with massively enlarged cystic kidneys; testing confirmed two PKHD1 variants, and both parents are confirmed carriers with normal kidneys. What is the chance that their next baby is affected?',
        options: [
          ['a', '25%'],
          ['b', '50%', 'A 50% risk applies to a dominant disorder such as ADPKD with one affected parent.'],
          ['c', '0%', 'Each pregnancy of two carriers carries the same risk, whatever happened before.'],
          ['d', '100%', 'Each parent can pass on the normal PKHD1 allele.'],
          ['e', '2/3', 'Two-thirds is the carrier chance of an unaffected sibling, not the risk to a new baby.'],
        ],
        answer: 'a',
        mini: 'ARPKD is autosomal recessive (PKHD1). Two carrier parents have a 1/2 × 1/2 = 1/4 chance of an affected child in each pregnancy.',
        reasoning: 'prediction',
        objectives: [`${AR}.arpkd`],
        steps: ['Neonatal massively enlarged cystic kidneys with two PKHD1 variants → ARPKD.', 'ARPKD is autosomal recessive; both parents are confirmed carriers.', 'Each child: 1/2 × 1/2 = 1/4 risk of inheriting both variants.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Autosomal dominant polycystic kidney disease is rarer than the autosomal recessive form.', isTrue: false, correction: 'ADPKD is far more common (about 1 in 500 to 1,000) than ARPKD (about 1 in 20,000 to 40,000).', objectives: [`${AD}.adpkd`, `${AR}.arpkd`], difficulty: 1 },
      { statement: 'PKD1 lies on chromosome 16.', isTrue: true, correction: 'Correct; PKD1 encodes polycystin-1.', objectives: [`${AD}.adpkd`], difficulty: 1 },
    ],
    clues: [
      { answer: 'POLYCYSTIN', clue: 'Membrane protein encoded by PKD1 or PKD2', objectives: [`${AD}.adpkd`], difficulty: 2 },
      { answer: 'FIBROCYSTIN', clue: 'PKHD1 protein lost in the infantile recessive cystic kidney disease', objectives: [`${AR}.arpkd`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-metal-overload',
    relevance: 'core',
    title: 'Wilson disease and hereditary hemochromatosis',
    discipline: 'genetics',
    alsoDisciplines: ['biochemistry', 'pathology'],
    system: 'gastrointestinal',
    alsoSystems: ['nervous-behavioral'],
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${AR}.wilson`, `${AR}.hemochromatosis`],
    objectives: ['Explain Wilson disease as failed biliary copper excretion (ATP7B)', 'Explain hereditary hemochromatosis as unregulated iron absorption (HFE, hepcidin)'],
    citations: [MP_WILSON, MP_ATP7B, WILSON_REV, MP_HH, MP_HFE, HFE_COMMON, HFE_PENETRANCE],
    facts: [
      'Wilson disease is autosomal recessive; ATP7B (chromosome 13) encodes copper-transporting ATPase 2, which supplies copper to ceruloplasmin and moves excess copper into bile for elimination.',
      'In Wilson disease copper accumulates, particularly in the liver, brain and eyes; symptoms usually begin in the teenage years, with liver disease in children and neurologic or psychiatric problems more often in adults, and copper in the cornea forms a Kayser–Fleischer ring.',
      'Hereditary hemochromatosis makes the body absorb too much dietary iron; because iron excretion cannot increase, iron accumulates in the liver, heart, pancreas, skin and joints, causing cirrhosis or liver cancer, diabetes, heart problems and skin discoloration.',
      'The HFE protein regulates production of hepcidin, the liver hormone that determines how much iron is absorbed from the diet; type 1 (HFE) hemochromatosis is autosomal recessive, and homozygosity for C282Y is by far the most common cause.',
      'Most C282Y homozygotes never develop clinically significant iron overload; men typically develop symptoms between 40 and 60 and women after menopause.',
    ],
    factRefs: [[0, 1, 2], [0, 2], [3], [3, 4, 5], [6, 3]],
    mechanism:
      'Two metals, two failed exits. In Wilson disease, hepatocytes cannot load copper onto ceruloplasmin or excrete it into bile, so copper builds up in the liver and then spills into the brain and cornea. In HFE hemochromatosis, too little hepcidin is made, so the gut keeps absorbing iron despite full stores; with no regulated excretion route, iron deposits in organs over decades.',
    associations: ['Wilson: ATP7B (chr 13), AR', '↓ Biliary copper excretion, ↓ ceruloplasmin loading', 'Liver disease (teens), neuro-psychiatric (adults)', 'Kayser–Fleischer ring', 'Hemochromatosis: HFE C282Y, AR', '↓ Hepcidin → ↑ iron absorption', 'Cirrhosis, diabetes, skin pigmentation, cardiomyopathy, arthropathy', 'Low clinical penetrance; men 40–60, women after menopause'],
    misconception:
      'Hemochromatosis is not due to excessive iron excretion failure alone: the body has no regulated excretion route at all, and the defect is unregulated absorption from low hepcidin. Also, a C282Y homozygote is not certain to develop disease.',
    quick:
      'Wilson: AR, ATP7B (chr 13) → copper not excreted into bile or loaded onto ceruloplasmin → liver disease, neuropsychiatric signs, Kayser–Fleischer rings. Hemochromatosis: AR, HFE C282Y → low hepcidin → excess iron absorption → liver, pancreas, heart, skin, joints; low penetrance, later onset in women.',
    detailed: [
      'Wilson disease (autosomal recessive, ATP7B on chromosome 13) prevents hepatocytes from moving copper into ceruloplasmin and bile. Copper accumulates first in the liver (hepatitis, cirrhosis), then in the brain (tremor, dysarthria, psychiatric changes) and the cornea (Kayser–Fleischer ring). Liver disease dominates in children, neuropsychiatric signs in adults.',
      'HFE hemochromatosis (autosomal recessive, usually C282Y homozygosity) lowers hepcidin, so intestinal iron absorption is unregulated. Iron gradually loads the liver, pancreas, heart, skin and joints. Penetrance is low: most homozygotes never develop clinical disease, and women, protected by menstrual losses, usually present after menopause.',
    ],
    takeaway: 'Wilson = ATP7B, copper stuck in liver → brain and cornea; hemochromatosis = HFE C282Y, low hepcidin → iron overload.',
    related: ['gen-ar', 'gen-expression-terms'],
    outline: found('Gastrointestinal System', 'Liver and biliary system'),
    mcq: [
      {
        stem: 'A 17-year-old has a tremor, slurred speech and a decline in school performance. Liver enzymes are elevated, and a green-brown ring is seen at the edge of each cornea. Which process is defective?',
        options: [
          ['a', 'Hepatic excretion of copper into bile'],
          ['b', 'Hepcidin regulation of intestinal iron absorption', 'Iron overload (hemochromatosis) does not cause corneal rings or teenage tremor.'],
          ['c', 'Copper absorption from the intestine', 'Defective copper absorption (Menkes disease) causes copper deficiency, not accumulation.'],
          ['d', 'Hepatic conjugation of bilirubin', 'Bilirubin conjugation defects cause jaundice without neurologic disease.'],
          ['e', 'Lysosomal breakdown of glucocerebroside', 'Gaucher disease causes hepatosplenomegaly and bone disease.'],
        ],
        answer: 'a',
        mini: 'Liver disease + neuropsychiatric signs + Kayser–Fleischer rings in a teenager = Wilson disease: ATP7B fails to move copper into bile (and onto ceruloplasmin), so copper accumulates.',
        reasoning: 'interpretation',
        objectives: [`${AR}.wilson`],
        steps: ['Tremor, dysarthria and cognitive decline plus liver injury in a teenager → combined hepatic and neurologic disease.', 'A corneal ring of copper (Kayser–Fleischer) points to copper overload.', 'Wilson disease = ATP7B defect → impaired biliary copper excretion.'],
        difficulty: 3,
      },
      {
        stem: 'Why do people with Wilson disease accumulate copper even though their dietary copper intake is normal?',
        options: [
          ['a', 'Hepatocytes cannot export excess copper into bile'],
          ['b', 'The intestine absorbs copper without any limit', 'The primary defect is in hepatic export, not intestinal uptake.'],
          ['c', 'Ceruloplasmin is overproduced and traps copper in blood', 'Copper loading onto ceruloplasmin is reduced, not increased.'],
          ['d', 'The kidneys reabsorb all filtered copper', 'Renal handling is not the primary defect.'],
          ['e', 'Copper is stored in lysosomes because of a lysosomal enzyme deficiency', 'Wilson disease is a transporter defect, not a lysosomal enzyme deficiency.'],
        ],
        answer: 'a',
        mini: 'Bile is the main route for eliminating copper. Without functional ATP7B, hepatocytes cannot move excess copper into bile, so even normal intake leads to accumulation.',
        reasoning: 'mechanism',
        objectives: [`${AR}.wilson`],
        difficulty: 2,
      },
      {
        stem: 'A 52-year-old man has diabetes, bronze skin, joint pain and an enlarged liver. He is homozygous for HFE C282Y. Which change explains the iron overload?',
        options: [
          ['a', 'Low hepcidin lets the gut absorb iron unchecked'],
          ['b', 'Excess hepcidin traps iron inside macrophages', 'High hepcidin causes the iron-restricted anemia of chronic disease, not overload.'],
          ['c', 'The kidneys fail to excrete dietary iron', 'There is no regulated excretion route for iron; the defect is absorption.'],
          ['d', 'Repeated transfusions deliver extra iron', 'Transfusion causes secondary overload; this is a genetic (primary) form.'],
          ['e', 'Ceruloplasmin cannot oxidize iron for transport', 'Ceruloplasmin defects are not the cause of HFE hemochromatosis.'],
        ],
        answer: 'a',
        mini: 'HFE normally promotes hepcidin production. With HFE C282Y, hepcidin is low, so the gut absorbs iron despite full stores; iron deposits in liver, pancreas, skin and joints.',
        reasoning: 'mechanism',
        objectives: [`${AR}.hemochromatosis`],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Most people homozygous for HFE C282Y develop clinically significant iron overload.', isTrue: false, correction: 'The majority never do: clinical penetrance is low.', objectives: [`${AR}.hemochromatosis`], difficulty: 2 },
      { statement: 'Wilson disease is autosomal recessive and caused by ATP7B variants.', isTrue: true, correction: 'Correct; ATP7B is on chromosome 13.', objectives: [`${AR}.wilson`], difficulty: 1 },
    ],
    clues: [
      { answer: 'HEPCIDIN', clue: 'Liver hormone that limits iron absorption, low in HFE disease', objectives: [`${AR}.hemochromatosis`], difficulty: 2 },
      { answer: 'CERULOPLASMIN', clue: 'Blood copper carrier that ATP7B loads', objectives: [`${AR}.wilson`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-sma',
    relevance: 'core',
    title: 'Spinal muscular atrophy',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'nervous-behavioral',
    alsoSystems: ['musculoskeletal-skin'],
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${AR}.sma`],
    objectives: ['Recognize spinal muscular atrophy as autosomal recessive SMN1 loss with anterior horn cell degeneration'],
    citations: [MP_SMA, MP_SMN1, SMA_AHC, SMN2_COPIES],
    facts: [
      'Spinal muscular atrophy (SMA) causes weakness and wasting of skeletal muscles, more severe proximally, because motor neurons are lost; it is autosomal recessive.',
      'About 95% of people with SMA have deletions of part of SMN1 in both copies; SMN1 encodes the survival motor neuron (SMN) protein needed to maintain motor neurons.',
      'SMA type I (Werdnig–Hoffmann disease), the most common form, causes weakness at birth or within the first months: most affected infants cannot control the head or sit, and swallowing and breathing problems follow.',
      'In SMA the anterior horn cells of the spinal cord and brainstem motor nuclei degenerate.',
      'SMN2, a nearly identical copy gene, makes only a little full-length SMN because of defective splicing; disease severity is inversely related to the number of SMN2 copies.',
    ],
    factRefs: [[0], [1], [0], [2], [3, 0]],
    mechanism:
      'SMN protein maintains lower motor neurons. With both SMN1 copies deleted, the backup SMN2 gene supplies only a fraction of full-length SMN (most of its transcripts skip exon 7). Anterior horn cells die, producing a lower motor neuron picture: hypotonia, weakness, areflexia and atrophy. More SMN2 copies mean more SMN and milder disease.',
    associations: ['Autosomal recessive', 'SMN1 deletion (~95%)', 'Anterior horn cell degeneration', 'Floppy infant, absent reflexes', 'Type I (Werdnig–Hoffmann): can’t sit, respiratory failure', 'SMN2 copy number modifies severity'],
    misconception:
      'SMA weakness is not a muscle disease or an upper motor neuron lesion: it is lower motor neuron loss, so reflexes are reduced or absent rather than brisk.',
    quick:
      'SMA: autosomal recessive SMN1 deletion (~95%) → anterior horn cell loss → symmetric proximal weakness, hypotonia, areflexia. Type I (Werdnig–Hoffmann): weak from birth or early months, cannot sit, swallowing and respiratory failure. More SMN2 copies → milder.',
    detailed: [
      'Spinal muscular atrophy is an autosomal recessive degeneration of lower motor neurons in the anterior horn of the spinal cord. Most patients lack part of both SMN1 copies. Infants with type I are floppy and weak within the first months, cannot sit, and develop swallowing and breathing problems.',
      'The neighbouring SMN2 gene differs from SMN1 by a change that makes most of its transcripts skip exon 7, so it produces little functional SMN. People with more SMN2 copies make more SMN and have milder disease; this is also the basis of splicing-directed therapy.',
    ],
    takeaway: 'SMA = AR SMN1 loss → anterior horn cells die → floppy, areflexic infant; SMN2 copies set severity.',
    related: ['gen-ar'],
    outline: found('Nervous System & Special Senses', 'Disorders of the nervous system'),
    mcq: [
      {
        stem: 'A 3-month-old is floppy, cannot hold up her head and has absent knee reflexes, with paradoxical (belly) breathing. Facial expression is normal, and she follows faces with her eyes. Where is the primary lesion?',
        options: [
          ['a', 'Anterior horn cells of the spinal cord'],
          ['b', 'Cerebral cortex and white matter', 'A cortical (upper motor neuron) problem would not abolish reflexes in an alert infant.'],
          ['c', 'Neuromuscular junction of skeletal muscle', 'Junction disorders usually involve eye and facial muscles; her face and eye movements are normal.'],
          ['d', 'Skeletal muscle fibers themselves', 'Absent reflexes with profound proximal and respiratory weakness point to lower motor neuron loss.'],
          ['e', 'Corticospinal tracts in the spinal cord', 'Upper motor neuron lesions cause brisk reflexes and spasticity.'],
        ],
        answer: 'a',
        mini: 'Profound hypotonia, absent reflexes and respiratory weakness with normal alertness and face = spinal muscular atrophy type I, degeneration of anterior horn cells (lower motor neurons).',
        reasoning: 'interpretation',
        objectives: [`${AR}.sma`],
        steps: ['Floppy infant with absent reflexes and normal alertness → lower motor neuron disease.', 'Proximal and respiratory weakness at 3 months fits SMA type I.', 'SMA = degeneration of anterior horn cells (SMN1 loss).'],
        difficulty: 3,
      },
      {
        stem: 'Two children both lack functional SMN1. One cannot sit at 6 months; the other walks independently until adolescence. Which difference best explains this?',
        options: [
          ['a', 'The milder child has more SMN2 copies'],
          ['b', 'The milder child is heterozygous for the SMN1 deletion', 'Both children lack functional SMN1; heterozygous carriers are unaffected.'],
          ['c', 'The severe child inherited a repeat expansion', 'SMA is not a repeat-expansion disorder.'],
          ['d', 'The milder child has mitochondrial heteroplasmy', 'SMA is a nuclear autosomal recessive disorder.'],
          ['e', 'The severe child has an extra SMN1 copy', 'Extra SMN1 copies would make SMN, not reduce it.'],
        ],
        answer: 'a',
        mini: 'Without SMN1, all SMN comes from SMN2, which makes little full-length protein. More SMN2 copies → more SMN → milder disease.',
        reasoning: 'comparison',
        relevance: 'supplementary',
        relevanceNote: 'SMN2 as the severity modifier (and therapy target) is useful depth; recognizing SMA as AR SMN1 loss is the core.',
        objectives: [`${AR}.sma`],
        steps: ['Both lack SMN1, so SMN comes only from SMN2.', 'SMN2 makes little full-length SMN because of defective splicing.', 'More SMN2 copies → more SMN → milder phenotype.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Spinal muscular atrophy is autosomal dominant.', isTrue: false, correction: 'It is autosomal recessive; most patients lack part of both SMN1 copies.', objectives: [`${AR}.sma`], difficulty: 1 },
    ],
    clues: [
      { answer: 'WERDNIGHOFFMANN', clue: 'Eponym for spinal muscular atrophy type I', objectives: [`${AR}.sma`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-thalassemia',
    relevance: 'core',
    title: 'Thalassemia genetics',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'blood-immune',
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${AR}.thalassemia`],
    objectives: ['Explain α-thalassemia as deletion of α-globin genes on chromosome 16 and β-thalassemia as HBB variants on chromosome 11'],
    citations: [MP_ATHAL, MP_HBA1, ATHAL_CIS, MP_BTHAL, MP_HBB],
    facts: [
      'α-Globin is made from HBA1 and HBA2, two genes close together on chromosome 16; with two copies of each, a person has four α-globin alleles.',
      'α-Thalassemia usually results from deletions: losing two of four alleles gives α-thalassemia trait (small, pale red cells, mild anemia), three gives HbH disease and all four gives Hb Bart hydrops fetalis syndrome.',
      'α-Globin deletions can remove one gene, or both genes in cis (on the same chromosome), or the whole cluster.',
      'β-Thalassemia is caused by variants in HBB on chromosome 11; some variants prevent any β-globin production and others reduce it. Thalassemia major is the transfusion-dependent form.',
    ],
    factRefs: [[0, 1], [0], [2], [3, 4]],
    mechanism:
      'Thalassemias are quantitative defects: too little of one globin chain. α-Thalassemia is mostly a deletion disease, and severity tracks how many of the four α genes are lost. Two deleted genes can sit on the same chromosome (cis, --/αα) or on different chromosomes (trans, -α/-α); only a cis carrier can pass on a chromosome with no α genes, so only two cis carriers can have a child with Hb Bart hydrops. β-Thalassemia is mostly a point-mutation disease of one gene with two copies, so β⁰ (none) and β⁺ (reduced) alleles combine to set severity.',
    associations: ['α: HBA1/HBA2 on chromosome 16, four alleles', 'α: mostly deletions', '2 lost = trait; 3 = HbH; 4 = Hb Bart hydrops', 'Cis (--/αα) vs trans (-α/-α)', 'β: HBB on chromosome 11', 'β: point and splice variants; β⁰ vs β⁺', 'Thalassemia major = transfusion dependent'],
    misconception:
      'Two parents with α-thalassemia trait are not always at risk of a hydrops fetus: only when both carry the two deletions on the same chromosome (cis) can a child inherit no α genes.',
    quick:
      'α-Thalassemia: HBA1/HBA2 on chromosome 16 (four alleles), usually deletions; 2 lost = trait, 3 = HbH, 4 = Hb Bart hydrops; cis deletions (--/αα) can transmit a gene-free chromosome. β-Thalassemia: HBB on chromosome 11, point/splice variants, β⁰ (none) or β⁺ (reduced).',
    detailed: [
      'α-Thalassemia: each chromosome 16 carries two α-globin genes, so there are four alleles. Deletions are the usual cause, and the number lost sets the picture: one is silent, two give trait (microcytosis, mild anemia), three give HbH disease and four give Hb Bart hydrops fetalis. Two deletions on one chromosome (cis) differ from one on each (trans): only the cis arrangement can be passed on as a chromosome without α genes.',
      'β-Thalassemia: one β-globin gene (HBB) on each chromosome 11. Variants, often point or splicing changes, either abolish (β⁰) or reduce (β⁺) β-globin. Two severe alleles give thalassemia major, which is transfusion dependent; milder combinations give thalassemia intermedia.',
    ],
    takeaway: 'α = chromosome 16 deletions, count the genes lost (cis vs trans matters); β = HBB on 11, point variants, β⁰ vs β⁺.',
    related: ['gen-sickle', 'gen-heterogeneity'],
    outline: found('Blood & Lymphoreticular System', 'Hemoglobinopathies'),
    mcq: [
      {
        stem: 'Two healthy partners each have α-thalassemia trait (two of four α-globin genes deleted). In one partner both deletions are on the same chromosome 16; in the other they are on different chromosomes. Can they have a child with Hb Bart hydrops fetalis?',
        options: [
          ['a', 'No: only one partner can pass on a gene-free chromosome'],
          ['b', 'Yes: a 25% risk, as for any two carriers of trait', 'A 25% risk applies only if both partners can transmit a chromosome lacking both α genes.'],
          ['c', 'Yes: 50% risk because the cis carrier is dominant', 'Alpha-thalassemia deletions are not dominant in this sense.'],
          ['d', 'No: α-thalassemia trait cannot be inherited', 'The deleted chromosomes are inherited normally.'],
          ['e', 'Yes: 100% risk because both have trait', 'Each child gets one chromosome 16 from each parent.'],
        ],
        answer: 'a',
        mini: 'The cis partner (--/αα) can pass a chromosome with no α genes; the trans partner (-α/-α) always passes a chromosome with one α gene. A child can lose at most three genes (HbH disease), never all four, so Hb Bart hydrops cannot occur.',
        reasoning: 'multistep',
        objectives: [`${AR}.thalassemia`],
        steps: ['Cis partner: chromosomes --/αα → passes "--" (no α genes) or "αα".', 'Trans partner: chromosomes -α/-α → always passes "-α" (one α gene).', 'Worst combination: -- with -α = three genes lost (HbH disease); four lost (Hb Bart) is impossible.'],
        difficulty: 4,
      },
      {
        stem: 'Why is α-thalassemia graded by how many genes are lost, while β-thalassemia is graded by the type of allele?',
        options: [
          ['a', 'Four α genes, usually deleted; two β genes, usually point-mutated'],
          ['b', 'α-Globin is needed only before birth, not afterwards', 'α-Globin is part of both fetal and adult hemoglobin.'],
          ['c', 'β-Thalassemia is X-linked, so severity depends on sex', 'HBB is on chromosome 11; β-thalassemia is autosomal.'],
          ['d', 'α-Thalassemia is caused by trinucleotide repeat expansions', 'Deletions, not repeat expansions, are the usual cause.'],
          ['e', 'β-Globin genes are always completely deleted in disease', 'β-thalassemia is usually caused by point and splice variants.'],
        ],
        answer: 'a',
        mini: 'Four α genes (two per chromosome 16), usually removed by deletions → severity counts lost genes. One β gene per chromosome 11, usually altered by point or splice variants → severity depends on β⁰ versus β⁺ alleles.',
        reasoning: 'mechanism',
        objectives: [`${AR}.thalassemia`],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'The α-globin genes HBA1 and HBA2 are on chromosome 16.', isTrue: true, correction: 'Correct; β-globin (HBB) is on chromosome 11.', objectives: [`${AR}.thalassemia`], difficulty: 1 },
    ],
    clues: [
      { answer: 'HYDROPS', clue: 'Fetal fluid accumulation when all four α-globin genes are lost', objectives: [`${AR}.thalassemia`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-inheritance-groups',
    relevance: 'core',
    title: 'Grouping disorders by inheritance: recessive storage diseases, the X-linked list and Wiskott–Aldrich syndrome',
    discipline: 'genetics',
    alsoDisciplines: ['immunology'],
    system: 'multisystem',
    alsoSystems: ['blood-immune'],
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${AR}.map`, `${XL}.map`, `${XL}.wiskott`],
    objectives: ['Recognize that most lysosomal storage diseases are autosomal recessive and name the X-linked exceptions', 'Recognize the high-yield X-linked disorders', 'Recognize Wiskott–Aldrich syndrome'],
    citations: [LSD_INH, MP_FABRY, MP_MPS2, MP_XLA, MP_G6PD, MP_LN, MP_OTC, MP_OA, MP_WAS, WAS_PHENO, WAS_IG],
    facts: [
      'Most lysosomal storage diseases are autosomal recessive; Fabry disease and Hunter disease (mucopolysaccharidosis type II) are X-linked exceptions.',
      'Unlike most X-linked disorders, Fabry disease causes significant problems in many females with one altered GLA copy.',
      'X-linked agammaglobulinemia, G6PD deficiency, Lesch–Nyhan syndrome, Hunter syndrome, ornithine transcarbamylase deficiency and ocular albinism type 1 are X-linked; the severe neonatal form of OTC deficiency usually affects males.',
      'Wiskott–Aldrich syndrome is X-linked and primarily affects males: microthrombocytopenia (few, small platelets) with easy bleeding, eczema and immune deficiency, with increased risks of autoimmune disease and lymphoma.',
      'WAS encodes WASP, which relays signals to the actin cytoskeleton in blood cells; in Wiskott–Aldrich syndrome IgE is often elevated while IgA and IgM are low to normal.',
    ],
    factRefs: [[0], [1], [2, 3, 4, 5, 6, 7], [8, 9], [8, 9, 10]],
    mechanism:
      'Most enzyme deficiencies are recessive because one working copy makes enough enzyme; when the gene is on the X chromosome, males (one X) are affected and females usually are not. Fabry disease is the classic exception in which heterozygous women are often affected. In Wiskott–Aldrich syndrome, absent WASP prevents blood cells from reorganizing actin, impairing platelet formation (small platelets) and immune synapses.',
    associations: ['Most storage diseases AR', 'X-linked storage: Fabry, Hunter', 'Fabry: many heterozygous women affected', 'X-linked: Bruton (XLA), WAS, G6PD, Lesch–Nyhan, Hunter, OTC, ocular albinism, Duchenne/Becker, hemophilia A/B', 'WAS: thrombocytopenia with small platelets + eczema + infections', 'WASP and actin', '↑ IgE', 'Autoimmunity, lymphoma'],
    misconception:
      'Hurler (MPS I) and Hunter (MPS II) are not inherited the same way: Hurler is autosomal recessive, Hunter is X-linked.',
    quick:
      'Most storage diseases and enzyme defects: autosomal recessive. X-linked exceptions: Fabry (many women affected) and Hunter. X-linked list: Bruton, Wiskott–Aldrich, G6PD, Lesch–Nyhan, Hunter, OTC, ocular albinism, Duchenne/Becker, hemophilia. WAS: small platelets, eczema, infections; WASP/actin; ↑ IgE.',
    detailed: [
      'Inheritance follows biology. Enzyme deficiencies, including most lysosomal storage diseases, are autosomal recessive because one functional allele suffices. The high-yield exceptions are X-linked: Fabry disease (in which many heterozygous women are affected), Hunter syndrome, Lesch–Nyhan syndrome, G6PD deficiency and OTC deficiency. Other X-linked disorders to know include X-linked agammaglobulinemia, Wiskott–Aldrich syndrome, ocular albinism, Duchenne and Becker dystrophy and hemophilia A and B.',
      'Wiskott–Aldrich syndrome (WAS gene, X-linked) combines microthrombocytopenia (few, small platelets: bruising, bloody diarrhea, petechiae), eczema and recurrent infections, with increased autoimmunity and lymphoma. WASP links surface signals to the actin cytoskeleton. Immunoglobulins typically show raised IgE with low-to-normal IgA and IgM.',
    ],
    takeaway: 'Enzyme defects are AR except the X-linked list; WAS = small platelets + eczema + infections in boys.',
    related: ['gen-ar', 'gen-xlr', 'gen-hemophilia'],
    outline: found('Immune System', 'Immunodeficiency disorders'),
    mcq: [
      {
        stem: 'A 14-month-old boy has recurrent ear infections, eczema and petechiae. Platelets are low and unusually small on the smear. His maternal uncle died in childhood of a bleeding problem. Which gene is most likely affected?',
        options: [
          ['a', 'WAS, which links signals to the actin cytoskeleton'],
          ['b', 'BTK, which is needed for B-cell maturation in marrow', 'Bruton agammaglobulinemia causes infections without eczema or small platelets.'],
          ['c', 'F8, which encodes clotting factor VIII', 'Hemophilia A causes joint and muscle bleeding with normal platelets.'],
          ['d', 'ADA, which clears toxic purine metabolites', 'ADA-SCID is autosomal recessive and does not cause small platelets.'],
          ['e', 'G6PD, which protects red cells from oxidants', 'G6PD deficiency causes hemolysis, not eczema, infections and small platelets.'],
        ],
        answer: 'a',
        mini: 'Eczema + infections + thrombocytopenia with small platelets in a boy with an affected maternal uncle = Wiskott–Aldrich syndrome, an X-linked defect of WASP (actin cytoskeleton).',
        reasoning: 'interpretation',
        objectives: [`${XL}.wiskott`],
        steps: ['Triad: eczema, recurrent infections, thrombocytopenia.', 'Small platelets distinguish WAS from other platelet disorders.', 'Affected boy and maternal uncle → X-linked → WAS gene.'],
        difficulty: 3,
      },
      {
        stem: 'A 34-year-old woman has episodes of pain in her hands and feet, clusters of small dark-red skin spots and declining kidney function. Her son was diagnosed with the same lysosomal enzyme deficiency. Which disorder fits best?',
        options: [
          ['a', 'Fabry disease'],
          ['b', 'Gaucher disease', 'Gaucher disease is autosomal recessive and causes hepatosplenomegaly and bone disease.'],
          ['c', 'Hunter syndrome', 'Hunter syndrome is X-linked, but a female usually needs both copies altered, and it does not cause this picture.'],
          ['d', 'Tay–Sachs disease', 'Tay–Sachs disease is autosomal recessive and neurodegenerative in infancy.'],
          ['e', 'Hurler syndrome', 'Hurler syndrome (MPS I) is autosomal recessive.'],
        ],
        answer: 'a',
        mini: 'Fabry disease is an X-linked lysosomal disorder in which many heterozygous women have significant symptoms (pain in hands and feet, angiokeratomas, kidney failure), unlike most X-linked disorders.',
        reasoning: 'interpretation',
        objectives: [`${AR}.map`, `${XL}.map`],
        steps: ['A lysosomal disorder shared by a mother and her son suggests X-linked inheritance.', 'Most lysosomal diseases are AR; the X-linked exceptions are Fabry and Hunter.', 'Symptomatic women (pain in hands and feet, angiokeratomas, kidney disease) are characteristic of Fabry.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Hunter syndrome (MPS II) is X-linked, whereas Hurler syndrome (MPS I) is autosomal recessive.', isTrue: true, correction: 'Correct: Hunter and Fabry are the X-linked storage diseases.', objectives: [`${AR}.map`, `${XL}.map`], difficulty: 2 },
      { statement: 'Wiskott–Aldrich syndrome causes thrombocytopenia with unusually large platelets.', isTrue: false, correction: 'Platelets are few and small (microthrombocytopenia).', objectives: [`${XL}.wiskott`], difficulty: 1 },
      { statement: 'Most lysosomal storage diseases are inherited in an autosomal recessive pattern.', isTrue: true, correction: 'Correct; Fabry and Hunter are the main X-linked exceptions.', objectives: [`${AR}.map`], difficulty: 1 },
    ],
    clues: [
      { answer: 'FABRY', clue: 'X-linked lysosomal disease in which many heterozygous women are affected', objectives: [`${XL}.map`], difficulty: 2 },
      { answer: 'ECZEMA', clue: 'Skin feature of the Wiskott–Aldrich triad', objectives: [`${XL}.wiskott`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-deletion-syndromes',
    relevance: 'core',
    title: 'Williams syndrome, cri-du-chat syndrome and VACTERL association',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'multisystem',
    alsoSystems: ['cardiovascular'],
    topic: 'genetics-chromosomal',
    difficulty: 2,
    curriculum: [`${SC}.williams`, `${SC}.cri-du-chat`, `${SC}.vacterl`],
    objectives: ['Recognize Williams syndrome (7q11.23 microdeletion including ELN)', 'Recognize cri-du-chat syndrome (5p deletion)', 'Recognize VACTERL as an association, not a single-gene disorder'],
    citations: [MP_WILLIAMS, WBS_REGION, KARYO_RES, MP_CDC, CDC_REV, MP_VACTERL, VACTERL_DEF],
    facts: [
      'Williams syndrome is caused by deletion of 25 to 27 genes from a region of chromosome 7 (7q11.23) that includes ELN; loss of ELN (elastin) underlies supravalvular aortic stenosis and the connective tissue features.',
      'Williams syndrome causes mild to moderate intellectual disability with outgoing, engaging personalities and strong verbal and musical skills but weak visual-spatial skills, distinctive (elfin) facial features and sometimes high blood calcium in infancy.',
      'Conventional karyotyping only identifies imbalances larger than about 5–10 Mb, so microdeletions such as 7q11.23 need FISH or a microarray.',
      'Cri-du-chat syndrome results from loss of part of the short arm of chromosome 5 (5p−): a high-pitched, cat-like cry in infancy, microcephaly, low birth weight, hypotonia and intellectual disability; some children have heart defects. Most cases are not inherited.',
      'VACTERL association is diagnosed when at least three of vertebral defects, anal atresia, cardiac defects, tracheo-esophageal fistula, renal anomalies and limb abnormalities occur together; it likely results from multiple genetic and environmental factors.',
    ],
    factRefs: [[0, 1], [0, 1], [2], [3, 4], [5, 6]],
    mechanism:
      'Contiguous gene deletions remove several neighbouring genes at once, and each lost gene adds features: in Williams syndrome, elastin haploinsufficiency stiffens and narrows arteries (supravalvular aortic stenosis), while other deleted genes shape cognition and behavior. The deletion is too small to see on a routine karyotype. A terminal 5p deletion is usually large enough to see. VACTERL is different: a statistical co-occurrence of malformations from an early developmental disruption, not one genetic lesion.',
    associations: ['Williams: 7q11.23 microdeletion incl. ELN', 'Elfin facies', 'Very friendly, good verbal and musical skills', 'Supravalvular aortic stenosis', 'Infantile hypercalcemia', 'Detected by FISH or microarray', 'Cri-du-chat: 5p−, cat-like cry, microcephaly', 'VACTERL: ≥3 of V-A-C-TE-R-L; multifactorial'],
    misconception:
      'A normal routine karyotype does not exclude Williams syndrome: the 7q11.23 deletion is a microdeletion detected by FISH or microarray.',
    quick:
      'Williams: 7q11.23 microdeletion (incl. ELN) → elfin face, very sociable, verbal strength, visual-spatial weakness, supravalvular aortic stenosis, infant hypercalcemia; needs FISH/microarray. Cri-du-chat: 5p deletion → cat-like cry, microcephaly, intellectual disability, heart defects. VACTERL: ≥3 linked malformations, multifactorial.',
    detailed: [
      'Williams syndrome is a contiguous gene deletion at 7q11.23 that includes ELN. Children are strikingly sociable with relative strengths in language and music and weakness in visual-spatial tasks, have distinctive facial features, and may have infantile hypercalcemia. Elastin loss causes supravalvular aortic stenosis. Because the deletion is far below routine karyotype resolution, FISH or chromosomal microarray is used.',
      'Cri-du-chat syndrome is a terminal deletion of 5p with a characteristic high-pitched cry, microcephaly, hypotonia and intellectual disability; most cases arise new, a few from a parent’s balanced translocation. VACTERL association is a pattern of at least three co-occurring malformations (vertebral, anal, cardiac, tracheo-esophageal, renal, limb) without a single genetic cause.',
    ],
    takeaway: 'Williams = 7q11.23 + elastin (SVAS, hypercalcemia, sociable); cri-du-chat = 5p−, cat cry; VACTERL = association.',
    related: ['gen-22q11', 'gen-reciprocal', 'lab-fish'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A 4-year-old is very friendly with strangers and talkative, but struggles to copy simple drawings. He had high calcium as an infant and now has a murmur from narrowing just above the aortic valve. A routine karyotype was normal. Which result is expected?',
        figure: {
          kind: 'fish', phase: 'metaphase', chromosome: '7',
          probes: [{ target: '7q11.23 (ELN)', color: 'red', signals: 1 }, { target: '7q control', color: 'green', signals: 2 }],
          alt: 'Metaphase FISH of chromosome 7: the green control probe lights both chromosome 7s; the red ELN probe at 7q11.23 lights only one.',
          caption: 'Microdeletions are below routine karyotype resolution; FISH or a microarray shows them.',
        },
        options: [
          ['a', 'Deletion of 7q11.23 including ELN on FISH'],
          ['b', 'Deletion of 22q11.2 on FISH of chromosome 22', 'The 22q11.2 deletion causes thymic and parathyroid defects with conotruncal heart disease.'],
          ['c', 'A large terminal 5p deletion on karyotype', 'A 5p deletion causes cri-du-chat syndrome and would be visible on the karyotype.'],
          ['d', 'Trisomy 21 on a repeat routine karyotype', 'The karyotype is already normal, and the features do not fit Down syndrome.'],
          ['e', 'Expanded CGG repeat in FMR1', 'Fragile X does not cause supravalvular aortic stenosis or hypercalcemia.'],
        ],
        answer: 'a',
        mini: 'Supravalvular aortic stenosis, infantile hypercalcemia, a very sociable personality with visual-spatial weakness = Williams syndrome, a 7q11.23 microdeletion including ELN, invisible on routine karyotype but seen with FISH or microarray.',
        reasoning: 'interpretation',
        objectives: [`${SC}.williams`],
        steps: ['Supravalvular aortic stenosis + infant hypercalcemia + sociable, verbal child with visual-spatial weakness → Williams syndrome.', 'Williams is a 7q11.23 microdeletion including ELN.', 'Microdeletions are below karyotype resolution → FISH shows one ELN signal.'],
        difficulty: 3,
      },
      {
        stem: 'A newborn has a high-pitched, mewing cry, a small head and low muscle tone. A karyotype is performed.',
        figure: {
          kind: 'karyogram', karyotype: '46,XX,del(5)(p14)', sex: 'XX',
          changes: [{ type: 'deletion', chr: '5', arm: 'p', mb: 20 }],
          alt: 'Karyogram with 46 chromosomes; one chromosome 5 has a shortened short arm (terminal 5p deletion, about 20 Mb).',
          caption: 'Schematic; the deletion size is illustrative. Large terminal 5p deletions are visible on routine karyotype.',
        },
        options: [
          ['a', 'Cri-du-chat syndrome'],
          ['b', 'Williams syndrome', 'Williams is a 7q11.23 microdeletion, not visible on routine karyotype.'],
          ['c', 'Prader–Willi syndrome', 'Prader–Willi involves 15q11–q13, usually a microdeletion.'],
          ['d', 'Edwards syndrome', 'Trisomy 18 would show 47 chromosomes.'],
          ['e', 'DiGeorge syndrome', 'The 22q11.2 deletion is a microdeletion detected by FISH or microarray.'],
        ],
        answer: 'a',
        mini: 'A cat-like cry, microcephaly and hypotonia with a terminal deletion of 5p (5p−) on karyotype = cri-du-chat syndrome.',
        reasoning: 'identification',
        objectives: [`${SC}.cri-du-chat`],
        difficulty: 2,
      },
      {
        stem: 'A newborn has esophageal atresia with a tracheo-esophageal fistula, an imperforate anus and a missing radius. What term best describes this combination?',
        options: [
          ['a', 'VACTERL association'],
          ['b', 'Cri-du-chat syndrome', 'Cri-du-chat is a 5p deletion with a cat-like cry.'],
          ['c', 'Williams syndrome', 'Williams is a 7q11.23 microdeletion with supravalvular aortic stenosis.'],
          ['d', 'Potter sequence', 'Potter sequence follows oligohydramnios from absent kidney function.'],
          ['e', 'DiGeorge syndrome', 'DiGeorge involves thymus, parathyroids and conotruncal heart defects.'],
        ],
        answer: 'a',
        mini: 'Three or more of vertebral, anal, cardiac, tracheo-esophageal, renal and limb malformations = VACTERL association, a multifactorial pattern rather than a single-gene disorder.',
        reasoning: 'identification',
        objectives: [`${SC}.vacterl`],
        difficulty: 2,
      },
      {
        stem: 'A baby with a cat-like cry has a terminal 5p deletion. The genetics team asks to karyotype both parents, who are healthy. What is the main reason?',
        options: [
          ['a', 'A parent may carry a balanced translocation that raises recurrence risk'],
          ['b', 'Both parents must carry a recessive 5p variant for the child to be affected', 'Cri-du-chat results from loss of chromosome material, not recessive inheritance.'],
          ['c', 'A parent probably has an unrecognized mild form of the same deletion', 'Most cases arise new; parents are usually unaffected and have no deletion.'],
          ['d', 'The deletion must be confirmed in a parent before it can be reported', 'The child’s own karyotype establishes the deletion.'],
          ['e', 'Parental karyotypes are needed to decide the child’s treatment', 'The parents’ results inform recurrence risk, not the child’s treatment.'],
        ],
        answer: 'a',
        mini: 'Most cri-du-chat cases are new, but in a minority a parent carries a balanced translocation involving 5p; that parent is healthy but can produce unbalanced gametes, so the recurrence risk is much higher.',
        reasoning: 'prediction',
        objectives: [`${SC}.cri-du-chat`],
        steps: ['A 5p deletion usually arises new, with low recurrence.', 'In a minority, a healthy parent carries a balanced translocation involving 5p.', 'A balanced carrier can pass on an unbalanced chromosome set → higher recurrence → parental karyotypes are checked.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'A normal routine karyotype excludes Williams syndrome.', isTrue: false, correction: 'The 7q11.23 deletion is a microdeletion below routine karyotype resolution; FISH or microarray detects it.', objectives: [`${SC}.williams`], difficulty: 2 },
      { statement: 'Most cases of cri-du-chat syndrome are inherited from a parent.', isTrue: false, correction: 'Most are not inherited; a minority come from a parent’s balanced translocation.', objectives: [`${SC}.cri-du-chat`], difficulty: 2 },
    ],
    clues: [
      { answer: 'ELASTIN', clue: 'Protein whose gene loss narrows the aorta in Williams syndrome', objectives: [`${SC}.williams`], difficulty: 2 },
      { answer: 'VACTERL', clue: 'Association of vertebral, anal, cardiac, tracheo-esophageal, renal and limb defects', objectives: [`${SC}.vacterl`], difficulty: 1 },
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
const kase = (x: Omit<CaseItem, Shared | 'depth' | 'reasoning'> & { reasoning?: 'interpretation' | 'multistep' }): CaseItem => ({
  kind: 'case', review: AI_DRAFT, version: 1, depth: 'application', reasoning: 'interpretation', ...x,
});

const sequences: SequenceItem[] = [
  seq({
    id: 'seq:vhl-hif',
    relevance: 'core',
    title: 'From VHL loss to a vascular tumor',
    prompt: 'Order the steps from a second VHL hit to a hemangioblastoma.',
    steps: [
      'A cell with one inherited VHL variant loses its normal copy',
      'No functional VHL protein is made',
      'HIF is no longer targeted for degradation',
      'HIF accumulates although oxygen is normal',
      'Angiogenic and growth genes switch on',
      'A highly vascular tumor forms',
    ],
    explanation: 'VHL marks HIF for destruction. Without it, cells behave as if hypoxic and build blood vessels, giving hemangioblastomas and clear cell renal carcinoma.',
    conceptIds: ['gen-vhl'],
    objectiveIds: [`${AD}.vhl`],
    difficulty: 2,
  }),
  seq({
    id: 'seq:wilson-copper',
    relevance: 'core',
    title: 'Where Wilson copper goes',
    prompt: 'Order the steps from an ATP7B defect to a Kayser–Fleischer ring.',
    steps: [
      'Both ATP7B copies are defective',
      'Hepatocytes cannot load copper onto ceruloplasmin or into bile',
      'Copper accumulates in the liver',
      'Excess copper spreads from the liver to other organs',
      'Copper deposits in the brain and cornea',
    ],
    explanation: 'Bile is the exit route for copper. When ATP7B fails, copper builds up in the liver first, then spreads to other organs, depositing in the brain and the cornea.',
    conceptIds: ['gen-metal-overload'],
    objectiveIds: [`${AR}.wilson`],
    difficulty: 2,
  }),
];

const matches: MatchItem[] = [
  match({
    id: 'match:tumor-syndrome-genes',
    relevance: 'core',
    title: 'Tumor syndrome → gene and pathway',
    prompt: 'Match each autosomal dominant tumor syndrome to its gene and what the protein normally does.',
    pairs: [
      { left: 'Neurofibromatosis type 1', right: 'NF1: turns off RAS' },
      { left: 'Tuberous sclerosis', right: 'TSC1/TSC2: restrain mTORC1' },
      { left: 'Von Hippel–Lindau disease', right: 'VHL: degrades HIF' },
      { left: 'Familial adenomatous polyposis', right: 'APC: limits β-catenin (Wnt)' },
      { left: 'Li–Fraumeni syndrome', right: 'TP53: arrests damaged cells' },
    ],
    explanation: 'All five are tumor suppressors: one copy is inherited defective, and tumors arise after the second copy is lost in a cell.',
    conceptIds: ['gen-neurofibromatosis', 'gen-tsc', 'gen-vhl', 'gen-cancer-predisposition'],
    objectiveIds: [`${AD}.nf1`, `${AD}.tsc`, `${AD}.vhl`, `${AD}.fap`, `${AD}.lfs`],
    difficulty: 2,
  }),
  match({
    id: 'match:which-inheritance',
    relevance: 'core',
    title: 'Which inheritance pattern?',
    prompt: 'Match each disorder to its inheritance pattern.',
    pairs: [
      { left: 'Wiskott–Aldrich syndrome', right: 'X-linked recessive' },
      { left: 'Wilson disease', right: 'Autosomal recessive' },
      { left: 'Hereditary hemorrhagic telangiectasia', right: 'Autosomal dominant' },
      { left: 'MERRF', right: 'Mitochondrial (maternal)' },
      { left: 'VACTERL association', right: 'Multifactorial, usually sporadic' },
    ],
    explanation: 'Wiskott–Aldrich is X-linked; Wilson (like most metabolic defects) is recessive; HHT is dominant; MERRF is mitochondrial; VACTERL is a multifactorial association.',
    conceptIds: ['gen-inheritance-groups', 'gen-metal-overload', 'gen-hht', 'gen-mito-disorders', 'gen-deletion-syndromes'],
    objectiveIds: [`${XL}.map`, `${AR}.map`, `${AD}.hht`, `${MI}.diseases`, `${SC}.vacterl`],
    difficulty: 2,
  }),
  match({
    id: 'match:which-test-shows-it',
    relevance: 'core',
    title: 'Which test shows it?',
    prompt: 'Match each genetic change to the test that shows it.',
    pairs: [
      { left: 'Trisomy 21', right: 'Routine karyotype' },
      { left: 'Terminal 5p deletion (cri-du-chat)', right: 'Routine karyotype (large deletion)' },
      { left: '7q11.23 deletion (Williams)', right: 'FISH or chromosomal microarray' },
      { left: 'SMN1 exon deletion', right: 'Targeted molecular (copy-number) test' },
    ],
    explanation: 'Routine karyotypes see changes larger than about 5–10 Mb. Microdeletions such as 7q11.23 need FISH or a microarray, and single-gene deletions such as SMN1 need molecular testing.',
    conceptIds: ['gen-deletion-syndromes', 'gen-sma'],
    objectiveIds: [`${SC}.williams`, `${SC}.cri-du-chat`],
    difficulty: 2,
  }),
];

const cases: CaseItem[] = [
  kase({
    id: 'case:vhl-family',
    relevance: 'core',
    title: 'A cerebellar tumor and a family secret',
    conceptIds: ['gen-vhl'],
    objectiveIds: [`${AD}.vhl`],
    difficulty: 3,
    stages: [
      { label: 'Presentation', text: 'A 26-year-old woman has morning headaches, vomiting and an unsteady gait for 2 months.' },
      { label: 'Imaging & tests', text: 'MRI shows a cystic cerebellar mass with a brightly enhancing nodule. Abdominal imaging shows several renal cysts and a solid enhancing lesion in the left kidney.' },
      { label: 'History', text: 'Her mother had “an eye tumor” treated with laser at 30 and died of kidney cancer at 48.' },
    ],
    question: 'Which mechanism links her tumors?',
    options: [
      { id: 'a', text: 'Hypoxia-inducible factor escapes degradation' },
      { id: 'b', text: 'RAS remains active without neurofibromin', whyWrong: 'NF1 causes neurofibromas and café-au-lait spots, not hemangioblastomas and renal carcinoma.' },
      { id: 'c', text: 'mTORC1 is released by loss of tuberin', whyWrong: 'Tuberous sclerosis gives angiomyolipomas and tubers, not cerebellar hemangioblastomas.' },
      { id: 'd', text: 'β-Catenin accumulates without APC', whyWrong: 'APC loss causes colonic polyposis.' },
      { id: 'e', text: 'A germline TP53 variant', whyWrong: 'Li–Fraumeni syndrome causes sarcomas, breast and brain cancers, not this vascular tumor pattern.' },
    ],
    answerId: 'a',
    explanation:
      'A cerebellar hemangioblastoma (cyst with enhancing nodule), renal cysts and a solid renal tumor, and a mother with a retinal tumor and early kidney cancer = von Hippel–Lindau disease (autosomal dominant). The VHL protein targets HIF for degradation; when a cell loses its second VHL copy, HIF accumulates and drives angiogenesis, producing hemangioblastomas and clear cell renal carcinoma.',
    mechanism: 'Germline VHL variant → second hit in a cell → no VHL protein → HIF not degraded → angiogenic genes on → hemangioblastoma, clear cell renal carcinoma.',
    takeaway: 'Hemangioblastoma + renal carcinoma + a retinal tumor in the family = VHL (HIF).',
    differentials: [
      { name: 'Sporadic renal cell carcinoma', why: 'Would not explain a cerebellar hemangioblastoma and the family history at young ages.' },
      { name: 'Tuberous sclerosis', why: 'Renal angiomyolipomas and cortical tubers, not hemangioblastomas.' },
    ],
  }),
];

export const geneticsBatch3: Bundle = {
  concepts: core.concepts,
  items: [...core.items, ...sequences, ...matches, ...cases],
};
