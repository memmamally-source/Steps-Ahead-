import { AI_DRAFT, defineConcepts, type Bundle } from '../define';
import type { CaseItem, Citation, MatchItem, OutlineRef, SequenceItem } from '../schema';

/**
 * Biochemistry — Genetics, batch 2: genomic imprinting and uniparental disomy (Prader–Willi,
 * Angelman, Beckwith–Wiedemann), Hardy–Weinberg calculations and departures from equilibrium,
 * trinucleotide repeat disorders (fragile X, Friedreich ataxia, myotonic dystrophy, parent-of-origin
 * bias), 47,XYY, cystic fibrosis genetics and physiology, sickle cell genetics, hemophilia genetics,
 * the two-hit hypothesis, genetic heterogeneity, reciprocal translocations, and assigning the
 * inheritance pattern of classic disorders.
 *
 * Step 1 depth. Sources: MedlinePlus Genetics, OpenStax Biology 2e (population genetics) and PubMed
 * abstracts. Hardy–Weinberg and pedigree risks are computed from the stated rules.
 * Original, AI-drafted content: DRAFT, NOT MEDICALLY REVIEWED.
 */

const MS = 'Multisystem Processes & Disorders' as const;
const found = (area: OutlineRef['area'], section: string): OutlineRef => ({ area, section, listed: false });
const listed = (area: OutlineRef['area'], section: string): OutlineRef => ({ area, section, listed: true });
const GEN = 'Genetic, metabolic, and developmental disorders';

const MPG = (path: string, title: string): Citation => ({
  sourceId: 'medlineplus', locator: `MedlinePlus Genetics: ${title}`, url: `https://medlineplus.gov/genetics/${path}/`, checked: 'full-text',
});
const PM = (pmid: number, label: string): Citation => ({
  sourceId: 'pubmed', locator: label, url: `https://pubmed.ncbi.nlm.nih.gov/${pmid}/`, ref: `PMID ${pmid}`, checked: 'summary',
});
const OSB = (page: string, title: string): Citation => ({
  sourceId: 'openstax-bio', locator: `OpenStax Biology 2e, ${title}`, url: `https://openstax.org/books/biology-2e/pages/${page}`, checked: 'full-text',
});

const MP_IMPRINT = MPG('understanding/inheritance/updimprinting', 'What are genomic imprinting and uniparental disomy?');
const MP_PWS = MPG('condition/prader-willi-syndrome', 'Prader-Willi syndrome');
const MP_ANGELMAN = MPG('condition/angelman-syndrome', 'Angelman syndrome');
const MP_BWS = MPG('condition/beckwith-wiedemann-syndrome', 'Beckwith-Wiedemann syndrome');
const MP_FRAGX = MPG('condition/fragile-x-syndrome', 'Fragile X syndrome');
const MP_FMR1 = MPG('gene/fmr1', 'FMR1 gene');
const MP_FA = MPG('condition/friedreich-ataxia', 'Friedreich ataxia');
const MP_DM = MPG('condition/myotonic-dystrophy', 'Myotonic dystrophy');
const MP_DMPK = MPG('gene/dmpk', 'DMPK gene');
const MP_HD = MPG('condition/huntington-disease', 'Huntington disease');
const MP_XYY = MPG('condition/47xyy-syndrome', '47,XYY syndrome');
const MP_CF = MPG('condition/cystic-fibrosis', 'Cystic fibrosis');
const MP_CFTR = MPG('gene/cftr', 'CFTR gene');
const MP_SICKLE = MPG('condition/sickle-cell-disease', 'Sickle cell disease');
const MP_HBB = MPG('gene/hbb', 'HBB gene');
const MP_HEMOPHILIA = MPG('condition/hemophilia', 'Hemophilia');
const MP_F8 = MPG('gene/f8', 'F8 gene');
const MP_RB = MPG('condition/retinoblastoma', 'Retinoblastoma');
const MP_STRUCT = MPG('understanding/mutationsanddisorders/structuralchanges', 'Can changes in the structure of chromosomes affect health and development?');
const MP_ALBINISM = MPG('condition/oculocutaneous-albinism', 'Oculocutaneous albinism');
const MP_BTHAL = MPG('condition/beta-thalassemia', 'Beta thalassemia');
const MP_PATTERNS = MPG('understanding/inheritance/inheritancepatterns', 'What are the different ways a genetic condition can be inherited?');
const OS_HW = OSB('19-1-population-evolution', '19.1 Population Evolution');
const OS_POPGEN = OSB('19-2-population-genetics', '19.2 Population Genetics');
const HD_PATERNAL = PM(8634693, 'Tzagournissakis M et al. Huntington anticipation is seen particularly when inherited through the father; the CAG repeat tends to expand in paternal meioses. Hum Mol Genet 1995');
const JHD_PATERNAL = PM(21412977, 'Nicolas G et al. Juvenile Huntington disease: usually >60 CAG repeats; paternal transmission in 80–90% of cases. Am J Med Genet A 2011');
const FX_MATERNAL = PM(35246105, 'Meraj N et al. Fragile X premutation alleles (56–200 CGG) expand to full mutations (>200) during maternal transmission. BMC Womens Health 2022');
const HBS_MALARIA = PM(26637716, 'Naik RP, Haywood C Jr. The HbS mutation has been selected repeatedly because of its malarial protective effect in heterozygotes (sickle cell trait). Hematology Am Soc Hematol Educ Program 2015');
const UPD_ENGEL = PM(8362910, 'Engel E. Uniparental disomy: isodisomy (duplicate of one parental chromosome) raises the risk of recessive disorders by reduction to homozygosity; heterodisomy keeps two different homologues. Am J Med Genet 1993');
const UPD_BENN = PM(33179335, 'Benn P. Uniparental disomy: maternal heterodisomy is the most common type. Prenat Diagn 2021');
const RECIP_RISK = PM(30126420, 'Pasińska M et al. Balanced reciprocal translocations (about 1 in 625) rarely affect the carrier but produce unbalanced gametes: infertility, miscarriage and congenital anomalies. BMC Med Genomics 2018');
const RECIP_ABORTION = PM(3360167, 'Fortuny A et al. Balanced translocations, mostly reciprocal, are more frequent in couples with repeated abortion. Fertil Steril 1988');
const F8_INV22 = PM(34439937, 'Han JP et al. About 50% of severe hemophilia A is caused by the F8 intron 22 inversion. Biology (Basel) 2021');
const CF_ER = PM(38888668, 'Okiyoneda T et al. F508del CFTR is recognized by ER quality control, retained in the ER and degraded by the ubiquitin–proteasome pathway. Cell Mol Life Sci 2024');
const CF_SWEAT = PM(41318507, 'Bhuiyan I et al. CF diagnosis: compatible clinical picture plus two sweat chloride results ≥60 mmol/L or two disease-causing CFTR variants. Orphanet J Rare Dis 2025');
const CF_DUCT = PM(23284077, 'Reddy MM, Stutts MJ. In cystic fibrosis, salt and fluid absorption by gland duct epithelia is effectively prevented by loss of CFTR; in airway epithelia, CFTR-mediated Cl⁻ secretion is absent. Cold Spring Harb Perspect Med 2013');
const BWS_IGF2 = PM(9260520, 'Reik W. Loss of imprinting of the paternally expressed growth enhancer IGF2 is the most common molecular defect in Beckwith–Wiedemann syndrome; IGF2 overexpression can reproduce most of its features. Trends Genet 1997');
const UPD_TIMING = PM(14747835, 'Kotzot D. In maternal heterodisomy with known timing of nondisjunction, about two-thirds were due to a maternal meiosis I error. Eur J Hum Genet 2004');
const CDM_MATERNAL = PM(28257691, 'Barbé L et al. Congenital myotonic dystrophy type 1, the most severe form, shows large expansions and almost exclusive maternal transmission. Am J Hum Genet 2017');
const DM_MBNL = PM(39460437, 'Frison-Roche C et al. In myotonic dystrophy type 1, expanded CUG repeat RNA sequesters MBNL proteins, depleting them and deregulating alternative splicing. Brain 2025');
const RB_MOSAIC = PM(40338593, 'Gao C et al. RB1 mosaicism was found in 14.7% of 136 patients with retinoblastoma, including 4 with earlier negative germline tests; mosaic patients less often had bilateral disease. JAMA Ophthalmol 2025');

const IM = 'bc-imprinting';
const HW = 'bc-hardy-weinberg';
const TN = 'bc-trinucleotide';
const MD = 'bc-muscular-dystrophy';
const GT = 'bc-gen-terms';
const CF = 'bc-cystic-fibrosis';

const core = defineConcepts([
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-imprinting',
    relevance: 'core',
    title: 'Genomic imprinting and uniparental disomy',
    discipline: 'genetics',
    system: 'multisystem',
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${IM}.mechanism`, `${IM}.upd`],
    objectives: ['Explain imprinting by methylation', 'Distinguish heterodisomy from isodisomy and explain how UPD can unmask a recessive disease'],
    citations: [MP_IMPRINT, UPD_ENGEL, UPD_BENN, UPD_TIMING],
    facts: [
      'In genomic imprinting only one of the two gene copies is active, depending on whether it came from the egg or the sperm; the parental origin is marked during egg and sperm formation by methylation. Only a small percentage of genes are imprinted, clustering at 11p15 and 15q11–q13.',
      'Uniparental disomy (UPD) is inheriting both copies of a chromosome, or part of one, from one parent. It often has no effect, because most genes are not imprinted, but it can leave a person with no active copy of an imprinted gene (Prader–Willi and Angelman syndromes from 15q; Beckwith–Wiedemann syndrome from 11p).',
      'In isodisomy the two copies are duplicates of one parental chromosome, raising the risk of a recessive disorder by making the person homozygous; in heterodisomy the two copies are the two different homologues of one parent.',
      'Maternal heterodisomy is the most common type of UPD.',
      'In maternal heterodisomy, about two-thirds of cases with known timing arise from a meiosis I error.',
    ],
    factRefs: [[0], [0], [1], [2], [1, 3]],
    mechanism:
      'Methyl marks laid down in the egg or sperm silence one parental copy of imprinted genes, so a child depends on the copy from the other parent. Losing that active copy (by deletion, or by inheriting both copies from the wrong parent) removes the gene’s function. Isodisomy also makes every gene on the chromosome homozygous, so a parent’s recessive variant can cause disease even though the other parent is not a carrier.',
    associations: ['Parent-of-origin expression', 'Methylation', 'Clusters at 11p15 and 15q11–q13', 'UPD', 'Heterodisomy', 'Isodisomy → homozygosity', 'Recessive disease with one carrier parent'],
    misconception:
      'Uniparental disomy is not always harmful: for non-imprinted chromosomes it is often silent unless isodisomy makes a recessive variant homozygous.',
    quick:
      'Imprinting: one parental copy silenced by methylation (11p15, 15q11–q13). UPD: both copies from one parent. Heterodisomy = two different homologues; isodisomy = two copies of one (homozygous → can unmask a recessive variant with only one carrier parent).',
    detailed: [
      'Imprinted genes are expressed from only one parental copy. The parental origin is marked by methylation when eggs and sperm form, so the silenced copy cannot substitute for the active one. Imprinted genes are few and clustered, chiefly at 11p15 and 15q11–q13.',
      'Uniparental disomy means both copies came from one parent. Heterodisomy keeps that parent’s two different homologues; isodisomy duplicates one homologue, so every gene on it is homozygous. Isodisomy explains a child with a recessive disease whose only carrier parent is the one who contributed both copies.',
    ],
    takeaway: 'Imprinting = methylation silences one parental copy; isodisomy can unmask a recessive variant.',
    related: ['gen-pws-angelman', 'gen-bws'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A child has cystic fibrosis. Testing shows the father carries no CFTR variant; the mother is a carrier. SNP analysis shows both copies of chromosome 7 came from the mother and are identical. What explains the disease?',
        options: [
          ['a', 'Maternal isodisomy made the variant homozygous'],
          ['b', 'Nonpaternity explains the result', 'The child has two identical maternal chromosome 7s, so the explanation is uniparental isodisomy.'],
          ['c', 'Maternal heterodisomy of chromosome 7', 'Heterodisomy would give the mother’s two different homologues, not two identical copies.'],
          ['d', 'Imprinting silenced the paternal CFTR allele', 'The child has no paternal chromosome 7 at all.'],
          ['e', 'A dominant negative CFTR variant', 'Cystic fibrosis is autosomal recessive; one variant does not cause it.'],
        ],
        answer: 'a',
        mini: 'Two identical maternal chromosome 7s = maternal isodisomy, so the mother’s single CFTR variant became homozygous in the child even though the father is not a carrier.',
        reasoning: 'interpretation',
        relevance: 'supplementary',
        relevanceNote: 'A useful advanced application of recessive inheritance, but CF from maternal isodisomy is an uncommon presentation; the general UPD and imprinting mechanisms remain core.',
        objectives: [`${IM}.upd`],
        steps: ['Cystic fibrosis needs two variant alleles, but only the mother is a carrier.', 'Both chromosome 7s are maternal and identical → maternal isodisomy.', 'Duplicating the mother’s variant-bearing chromosome makes the child homozygous → disease.'],
        difficulty: 3,
      },
      {
        stem: 'How is the parental origin of an imprinted gene marked so that one copy stays silent?',
        options: [
          ['a', 'By methylation laid down during egg or sperm formation'],
          ['b', 'By deletion of the gene from one parent’s chromosome', 'Imprinted genes are present on both chromosomes; one is silenced, not deleted.'],
          ['c', 'By X-inactivation in the embryo', 'X-inactivation affects one X chromosome, not imprinted autosomal genes.'],
          ['d', 'By a point mutation in the silent copy', 'Imprinting is epigenetic and leaves the DNA sequence unchanged.'],
          ['e', 'By mitochondrial inheritance from the mother', 'Imprinted genes are nuclear and marked by parent of origin.'],
        ],
        answer: 'a',
        mini: 'Methyl groups added to DNA during egg and sperm formation mark which copy came from which parent; the methylated copy of an imprinted gene is kept silent.',
        reasoning: 'mechanism',
        objectives: [`${IM}.mechanism`],
        difficulty: 2,
      },
      {
        stem: 'Why can uniparental isodisomy, but not heterodisomy, give a child a recessive disease when only one parent carries the variant?',
        options: [
          ['a', 'Isodisomy duplicates one homologue, so the variant is present twice'],
          ['b', 'Heterodisomy silences both copies of every gene by imprinting', 'Most genes are not imprinted; heterodisomy keeps two different homologues.'],
          ['c', 'Isodisomy deletes the allele inherited from the other parent', 'Nothing is deleted: the child has no copy of that chromosome from the other parent.'],
          ['d', 'Isodisomy turns a recessive variant into a dominant one', 'The variant stays recessive; it causes disease because it becomes homozygous.'],
          ['e', 'Heterodisomy always comes from the noncarrier parent', 'Either parent can contribute both homologues in heterodisomy.'],
        ],
        answer: 'a',
        mini: 'In isodisomy both copies are the same parental homologue, so a carrier parent’s variant appears twice (homozygous). Heterodisomy gives the parent’s two different homologues, only one of which carries the variant.',
        reasoning: 'mechanism',
        objectives: [`${IM}.upd`],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Most human genes are imprinted.', isTrue: false, correction: 'Only a small percentage are; they cluster at 11p15 and 15q11–q13.', objectives: [`${IM}.mechanism`], difficulty: 1 },
      { statement: 'Uniparental isodisomy can cause a recessive disorder when only one parent is a carrier.', isTrue: true, correction: 'Correct: the carrier parent’s chromosome is duplicated, making the child homozygous.', objectives: [`${IM}.upd`], difficulty: 2 },
    ],
    clues: [
      { answer: 'IMPRINTING', clue: 'Parent-of-origin gene silencing by methylation', objectives: [`${IM}.mechanism`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-pws-angelman',
    relevance: 'core',
    title: 'Prader–Willi and Angelman syndromes',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'nervous-behavioral',
    alsoSystems: ['endocrine', 'multisystem'],
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${IM}.pws`, `${IM}.angelman`],
    objectives: ['Explain Prader–Willi syndrome as loss of paternally expressed 15q genes', 'Explain Angelman syndrome as loss of maternally expressed UBE3A'],
    citations: [MP_PWS, MP_ANGELMAN, MP_IMPRINT],
    facts: [
      'Prader–Willi syndrome causes hypotonia, feeding difficulties and poor growth in infancy, then extreme hunger with overeating and obesity from childhood, mild to moderate intellectual impairment, behavioral problems, short stature, small hands and feet and underdeveloped genitals with delayed or incomplete puberty.',
      'Prader–Willi syndrome results from loss of genes on chromosome 15 that are active only on the paternal copy: about 70% from deletion of the paternal 15q segment, about 25% from maternal uniparental disomy, and rarely from a translocation or a change that inactivates the paternal genes.',
      'Angelman syndrome causes developmental delay, intellectual disability, severe speech impairment, ataxia, seizures, microcephaly and a happy, excitable demeanor with frequent smiling, laughter and hand-flapping.',
      'Angelman syndrome results from loss of the maternal UBE3A copy, the only active copy in brain neurons: about 70% from deletion of the maternal 15q segment, 10–20% from a UBE3A variant on the maternal copy, and a small percentage from paternal uniparental disomy.',
    ],
    factRefs: [[0], [0, 2], [1], [1, 2]],
    mechanism:
      'The same 15q11–q13 region holds genes that are active only on the paternal copy (lost in Prader–Willi syndrome) and UBE3A, which in neurons is active only on the maternal copy (lost in Angelman syndrome). Which parent’s copy is missing decides the syndrome: a paternal deletion or two maternal copies → Prader–Willi; a maternal deletion, two paternal copies or a maternal UBE3A variant → Angelman.',
    associations: ['15q11–q13', 'PWS: paternal deletion (~70%), maternal UPD (~25%)', 'PWS: hypotonia then hyperphagia, obesity, hypogonadism', 'AS: maternal deletion (~70%), UBE3A variant, paternal UPD', 'AS: seizures, ataxia, absent speech, laughter'],
    misconception:
      'A 15q11–q13 deletion does not always give the same syndrome: the parent of origin of the deleted chromosome decides between Prader–Willi (paternal) and Angelman (maternal).',
    quick:
      'Same 15q11–q13 region, opposite parent. Prader–Willi = loss of paternal genes (paternal deletion ~70%, maternal UPD ~25%): hypotonic poor feeder → hyperphagia, obesity, hypogonadism, short stature. Angelman = loss of maternal UBE3A (maternal deletion ~70%, UBE3A variant, paternal UPD): seizures, ataxia, absent speech, happy demeanor.',
    detailed: [
      'Prader–Willi syndrome: infants are hypotonic and feed poorly; from childhood, extreme hunger leads to overeating and obesity. Mild to moderate intellectual impairment, behavioral problems, short stature, small hands and feet and underdeveloped genitals are typical. Paternally expressed genes are lost by paternal deletion (about 70%) or maternal uniparental disomy (about 25%).',
      'Angelman syndrome: severe intellectual disability with little or no speech, ataxia, seizures, microcephaly and a happy, excitable demeanor with frequent laughter. Neurons use only the maternal UBE3A copy, so maternal deletion (about 70%), a maternal UBE3A variant or paternal uniparental disomy causes the disorder.',
    ],
    takeaway: 'PWS = paternal copy missing (Paternal deletion or maternal UPD); Angelman = maternal UBE3A missing.',
    related: ['gen-imprinting'],
    outline: found('Nervous System & Special Senses', 'Disorders of the nervous system'),
    mcq: [
      {
        stem: 'A hypotonic infant fed poorly and needed tube feeding; by age 4 she eats constantly and is obese, with small hands and feet. FISH shows a 15q11–q13 deletion. On which parental chromosome is the deletion most likely?',
        options: [
          ['a', 'The paternal chromosome 15'],
          ['b', 'The maternal chromosome 15', 'A maternal deletion of this region causes Angelman syndrome.'],
          ['c', 'Either, with the same effect', 'Imprinting makes the parent of origin decisive.'],
          ['d', 'The X chromosome from her mother', 'The deletion is on chromosome 15.'],
          ['e', 'Both chromosome 15s', 'Losing the region from both copies is not the usual cause.'],
        ],
        answer: 'a',
        mini: 'Hypotonia and poor feeding followed by hyperphagia and obesity = Prader–Willi syndrome, caused by loss of paternally expressed 15q11–q13 genes, most often a paternal deletion.',
        reasoning: 'interpretation',
        objectives: [`${IM}.pws`],
        steps: ['Infant hypotonia and poor feeding, then hyperphagia and obesity → Prader–Willi syndrome.', 'Prader–Willi results from loss of genes active only on the paternal copy.', 'So the deletion is on the paternal chromosome 15.'],
        difficulty: 3,
      },
      {
        stem: 'A 3-year-old has severe developmental delay, no words, seizures, an unsteady gait and frequent laughter with hand-flapping. FISH for 15q11–q13 is normal and both chromosome 15s are biparental. Which result would most likely explain the condition?',
        options: [
          ['a', 'A pathogenic variant in the maternal UBE3A copy'],
          ['b', 'A deletion on the paternal chromosome 15', 'FISH is normal, and a paternal deletion would cause Prader–Willi syndrome.'],
          ['c', 'Maternal uniparental disomy 15', 'The chromosomes are biparental, and maternal UPD causes Prader–Willi syndrome.'],
          ['d', 'A paternal UBE3A variant', 'The paternal UBE3A copy is normally silent in neurons, so its loss has no effect.'],
          ['e', 'Trisomy 15 mosaicism', 'The findings point to loss of maternal UBE3A function.'],
        ],
        answer: 'a',
        mini: 'Angelman features with no deletion and no UPD point to a maternal UBE3A variant (10–20% of cases): neurons rely only on the maternal UBE3A copy.',
        reasoning: 'multistep',
        objectives: [`${IM}.angelman`],
        steps: ['Severe delay, absent speech, seizures, ataxia and laughter → Angelman syndrome.', 'Normal FISH excludes a deletion; biparental chromosomes exclude paternal UPD.', 'The remaining common cause is a variant in the maternal UBE3A copy, the only active copy in neurons.'],
        difficulty: 4,
      },
      {
        stem: 'Why does maternal uniparental disomy of chromosome 15 cause Prader–Willi syndrome even though no DNA is missing?',
        options: [
          ['a', 'Both copies carry maternal imprints, so paternally expressed genes are silent'],
          ['b', 'A double dose of maternally expressed 15q genes is toxic to neurons', 'The syndrome results from absent paternal gene activity, not a toxic maternal dose.'],
          ['c', 'The extra maternal chromosome 15 is deleted after fertilization', 'The child keeps two maternal chromosome 15s; nothing is deleted.'],
          ['d', 'Maternal uniparental disomy always carries a hidden 15q deletion', 'No deletion is needed: two maternal copies alone remove paternal expression.'],
          ['e', 'Maternal UBE3A is silenced in neurons by the second maternal copy', 'Loss of maternal UBE3A causes Angelman syndrome, not Prader–Willi syndrome.'],
        ],
        answer: 'a',
        mini: 'The 15q11–q13 Prader–Willi genes are active only on the paternal copy. With two maternal copies, both carry the maternal (silenced) imprint, so these genes have no active copy.',
        reasoning: 'mechanism',
        objectives: [`${IM}.pws`],
        difficulty: 3,
      },
      {
        stem: 'Why does paternal uniparental disomy of chromosome 15 cause Angelman syndrome?',
        options: [
          ['a', 'Both UBE3A copies are paternal, and the paternal copy is silent in neurons'],
          ['b', 'Two active paternal UBE3A copies overproduce the protein in neurons', 'The paternal UBE3A copy is silent in neurons, so it is not overexpressed.'],
          ['c', 'The paternally expressed 15q genes are lost from both chromosomes', 'Loss of paternally expressed genes causes Prader–Willi syndrome.'],
          ['d', 'Paternal disomy always comes with a deletion of the maternal 15q segment', 'No maternal chromosome 15 is present, and no deletion is required.'],
          ['e', 'Paternal transmission expands a CGG repeat in UBE3A', 'Repeat expansion is the mechanism of fragile X syndrome, not Angelman syndrome.'],
        ],
        answer: 'a',
        mini: 'Neurons use only the maternal UBE3A copy. With two paternal chromosome 15s there is no maternal copy, so neurons have no active UBE3A.',
        reasoning: 'mechanism',
        objectives: [`${IM}.angelman`],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Maternal uniparental disomy of chromosome 15 causes Prader–Willi syndrome.', isTrue: true, correction: 'Correct: with two maternal copies, the paternally expressed genes are missing (about 25% of cases).', objectives: [`${IM}.pws`], difficulty: 2 },
      { statement: 'In brain neurons, only the paternal copy of UBE3A is active.', isTrue: false, correction: 'Only the maternal copy is active in neurons; its loss causes Angelman syndrome.', objectives: [`${IM}.angelman`], difficulty: 1 },
    ],
    clues: [
      { answer: 'ANGELMAN', clue: 'Syndrome from loss of maternal UBE3A', objectives: [`${IM}.angelman`], difficulty: 1 },
      { answer: 'HYPERPHAGIA', clue: 'Extreme overeating that begins in childhood in Prader–Willi syndrome', objectives: [`${IM}.pws`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-bws',
    relevance: 'core',
    title: 'Beckwith–Wiedemann syndrome',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'multisystem',
    alsoSystems: ['endocrine', 'gastrointestinal'],
    topic: 'genetics-inheritance',
    difficulty: 2,
    curriculum: [`${IM}.bws`],
    objectives: ['Recognize Beckwith–Wiedemann syndrome and its tumor risk'],
    citations: [MP_BWS, MP_IMPRINT, BWS_IGF2],
    facts: [
      'Beckwith–Wiedemann syndrome is an overgrowth syndrome: infants are larger than normal (macrosomia), may have hemihyperplasia (one side larger), an abdominal wall defect such as omphalocele, an enlarged tongue (macroglossia), enlarged abdominal organs, ear creases or pits and low blood glucose in infancy.',
      'Children with Beckwith–Wiedemann syndrome have an increased risk of tumors, particularly Wilms tumor (kidney) and hepatoblastoma (liver).',
      'Most cases result from abnormal regulation of imprinted genes on chromosome 11p15; at least half involve methylation changes at imprinting control regions that regulate growth genes including CDKN1C, H19 and IGF2.',
      'Overexpression of the paternally expressed growth factor gene IGF2 contributes to the overgrowth.',
      'About 20% of cases result from paternal uniparental disomy of 11p15, usually arising early in development and affecting only some cells (mosaic), which leaves two active paternal copies and no maternal copy of the imprinted genes.',
    ],
    factRefs: [[0], [0], [0, 1], [0, 2], [0]],
    mechanism:
      'Imprinting errors at 11p15 unbalance growth-regulating genes so that growth-promoting activity (including IGF2) is increased. The result is prenatal and childhood overgrowth, organ enlargement and a raised risk of embryonal tumors.',
    associations: ['11p15 imprinting', 'Macrosomia', 'Macroglossia', 'Omphalocele', 'Hemihyperplasia', 'Neonatal hypoglycemia', 'Wilms tumor', 'Hepatoblastoma'],
    misconception:
      'Beckwith–Wiedemann syndrome is not an extra chromosome: it is an imprinting disorder of 11p15.',
    quick:
      'Beckwith–Wiedemann: 11p15 imprinting disorder (growth genes incl. IGF2) → macrosomia, macroglossia, omphalocele, hemihyperplasia, neonatal hypoglycemia; increased Wilms tumor and hepatoblastoma risk.',
    detailed: [
      'Beckwith–Wiedemann syndrome is an overgrowth disorder: large-for-dates babies with a large tongue, abdominal wall defects (omphalocele, umbilical hernia), sometimes one side of the body larger, enlarged organs and low glucose in infancy.',
      'The cause is abnormal imprinting at 11p15, where methylation controls growth genes such as IGF2, H19 and CDKN1C. Affected children have an increased risk of embryonal tumors, especially Wilms tumor and hepatoblastoma.',
    ],
    takeaway: 'BWS = 11p15 imprinting → overgrowth, macroglossia, omphalocele; Wilms and hepatoblastoma risk.',
    related: ['gen-imprinting'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A newborn weighs 4.9 kg, has a large protruding tongue, an omphalocele and recurrent low glucose; one leg is longer than the other. Which tumors is this child at increased risk of?',
        options: [
          ['a', 'Wilms tumor and hepatoblastoma'],
          ['b', 'Retinoblastoma and osteosarcoma', 'These are associated with germline RB1 variants.'],
          ['c', 'Medullary thyroid carcinoma and pheochromocytoma', 'These are associated with MEN2 (RET).'],
          ['d', 'Acute lymphoblastic leukemia only', 'The overgrowth picture points to Beckwith–Wiedemann syndrome.'],
          ['e', 'Neurofibromas and optic gliomas', 'These are associated with neurofibromatosis type 1.'],
        ],
        answer: 'a',
        mini: 'Macrosomia, macroglossia, omphalocele, hypoglycemia and hemihyperplasia = Beckwith–Wiedemann syndrome (11p15 imprinting), with increased Wilms tumor and hepatoblastoma risk.',
        reasoning: 'identification',
        objectives: [`${IM}.bws`],
        difficulty: 2,
      },
      {
        stem: 'A newborn has macrosomia, macroglossia and an omphalocele, with low glucose in the first days of life. The karyotype is normal 46,XY. Which further result would most likely explain the condition?',
        options: [
          ['a', 'Abnormal methylation at 11p15 imprinting centers'],
          ['b', 'Deletion of the paternal 15q11–q13 segment', 'A paternal 15q deletion causes Prader–Willi syndrome, with hypotonia, not overgrowth.'],
          ['c', 'Expansion of a CGG repeat in FMR1', 'Fragile X does not cause neonatal overgrowth, macroglossia or omphalocele.'],
          ['d', 'Trisomy 13 detected on repeat karyotype', 'The karyotype is normal, and trisomy 13 does not cause overgrowth.'],
          ['e', 'A heteroplasmic mitochondrial DNA variant', 'The overgrowth picture points to an 11p15 imprinting disorder.'],
        ],
        answer: 'a',
        mini: 'Overgrowth with macroglossia, omphalocele and neonatal hypoglycemia = Beckwith–Wiedemann syndrome. A normal karyotype fits, because the usual cause is a methylation (imprinting) change at 11p15, not a visible chromosome change.',
        reasoning: 'interpretation',
        objectives: [`${IM}.bws`],
        steps: ['Macrosomia, macroglossia, omphalocele and neonatal hypoglycemia → Beckwith–Wiedemann syndrome.', 'It is an imprinting disorder of 11p15, invisible on a routine karyotype.', 'At least half of cases show abnormal methylation at 11p15 imprinting control regions.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Beckwith–Wiedemann syndrome is caused by abnormal imprinting on chromosome 11p15.', isTrue: true, correction: 'Correct: methylation changes there unbalance growth genes such as IGF2.', objectives: [`${IM}.bws`], difficulty: 1 },
    ],
    clues: [
      { answer: 'MACROGLOSSIA', clue: 'Enlarged tongue of Beckwith–Wiedemann syndrome', objectives: [`${IM}.bws`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-hardy-weinberg',
    relevance: 'core',
    title: 'Hardy–Weinberg equilibrium and carrier frequency',
    discipline: 'genetics',
    alsoDisciplines: ['biostatistics'],
    system: 'multisystem',
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${HW}.equations`, `${HW}.ar-calc`, `${HW}.x-calc`, `${HW}.violations`],
    objectives: ['State the Hardy–Weinberg equations and assumptions', 'Calculate allele, carrier and X-linked disease frequencies', 'Recognize departures from equilibrium'],
    citations: [OS_HW, OS_POPGEN, HBS_MALARIA],
    facts: [
      'For two alleles at a locus with frequencies p and q, p + q = 1, and the genotype frequencies are p² (homozygous for p), 2pq (heterozygous) and q² (homozygous for q), with p² + 2pq + q² = 1.',
      'The Hardy–Weinberg principle states that allele and genotype frequencies stay stable unless an evolutionary force acts; it assumes a very large population with no mutation, migration or selection, and random combination of alleles.',
      'Genetic drift is a random change in allele frequency that matters most in small populations; the founder effect is a change in allele frequency in a small, isolated group that is not typical of the original population.',
      'The sickle hemoglobin allele has been selected repeatedly because heterozygotes (sickle cell trait) are protected against malaria (heterozygote advantage).',
    ],
    factRefs: [[0], [0], [1], [2]],
    mechanism:
      'If allele frequencies are p and q and alleles combine at random, genotypes follow p², 2pq and q². For a rare recessive disease the affected frequency is q², so q = √(prevalence) and the carrier frequency 2pq is close to 2q. For an X-linked recessive disease, males show the allele frequency directly (q) and affected females are q². Drift, founder effects and selection (including heterozygote advantage) change allele frequencies. A founder population that then mates at random can again show Hardy–Weinberg proportions at its new frequencies.',
    associations: ['p + q = 1', 'p² + 2pq + q² = 1', 'q = √(prevalence)', 'Carrier ≈ 2q', 'X-linked: males q, females q²', 'Founder effect', 'Genetic drift', 'Heterozygote advantage (sickle trait, malaria)'],
    misconception:
      'The carrier frequency is not the square root of prevalence: √prevalence gives the allele frequency q; carriers are about 2q.',
    quick:
      'p + q = 1; p² + 2pq + q² = 1 (large population, random mating, no mutation, migration or selection). Rare AR disease: q = √prevalence, carriers ≈ 2q. XR: affected males = q, affected females = q². Allele frequencies change by drift, founder effect, selection, heterozygote advantage.',
    detailed: [
      'Hardy–Weinberg assumes a large, randomly mating population without mutation, migration or selection; then allele frequencies (p, q) and genotype frequencies (p², 2pq, q²) stay constant. For a rare autosomal recessive disease, prevalence = q², so q = √prevalence; with p ≈ 1, carriers = 2pq ≈ 2q. For an X-linked recessive disease, each male has one X, so the proportion of affected males equals q; affected females need two copies, q².',
      'Allele frequencies change through genetic drift (chance, strongest in small populations), founder effects (a small isolated group starting with unusual allele frequencies), selection, and heterozygote advantage (sickle cell trait protecting against malaria). A founder effect alters frequencies relative to the source population; if the new population then mates at random, its genotypes can still fit Hardy–Weinberg proportions at the new frequencies.',
    ],
    takeaway: 'q = √prevalence; carriers ≈ 2q; X-linked males = q; drift, founders and selection change allele frequencies.',
    related: ['gen-sickle', 'gen-ar'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'An autosomal recessive disease affects 1 in 10,000 people in a population in Hardy–Weinberg equilibrium. What is the approximate carrier frequency?',
        options: [
          ['a', '1 in 50'],
          ['b', '1 in 100', 'One in 100 is the allele frequency q, not the carrier frequency.'],
          ['c', '1 in 10,000', 'That is the prevalence of affected homozygotes, q².'],
          ['d', '1 in 200', 'Carriers are 2q, which is twice (not half) the allele frequency.'],
          ['e', '1 in 25', 'One in 25 would need an allele frequency of 1 in 50.'],
        ],
        answer: 'a',
        mini: 'q² = 1/10,000 → q = 1/100; carriers = 2pq ≈ 2q = 2/100 = 1 in 50.',
        reasoning: 'multistep',
        objectives: [`${HW}.ar-calc`],
        steps: ['Affected homozygotes = q² = 1/10,000.', 'q = √(1/10,000) = 1/100; p ≈ 1.', 'Carriers = 2pq ≈ 2 × 1/100 = 1/50.'],
        difficulty: 4,
      },
      {
        stem: 'An X-linked recessive disease affects 1 in 5,000 males in a population in Hardy–Weinberg equilibrium. Approximately how often would it affect females?',
        options: [
          ['a', '1 in 25,000,000'],
          ['b', '1 in 5,000', 'That is the male frequency (q); females need two copies.'],
          ['c', '1 in 10,000', 'Halving the male frequency does not model two-copy inheritance.'],
          ['d', '1 in 2,500', 'Females are far less often affected than males in X-linked recessive disease.'],
          ['e', '1 in 71', 'That is roughly √(1/5,000) (√5,000 ≈ 70.7); a square root is not a genotype frequency, and affected females are q².'],
        ],
        answer: 'a',
        mini: 'In males the affected frequency equals the allele frequency: q = 1/5,000. Affected females need two copies: q² = 1/25,000,000.',
        reasoning: 'prediction',
        objectives: [`${HW}.x-calc`],
        steps: ['Each male has one X, so affected males = q = 1/5,000.', 'Affected females must inherit two variant X chromosomes: q².', '(1/5,000)² = 1/25,000,000.'],
        difficulty: 3,
      },
      {
        stem: 'A rare recessive disorder is far more common in an isolated community descended from a few settlers than in the population they came from. What explains this?',
        options: [
          ['a', 'Founder effect'],
          ['b', 'Heterozygote advantage', 'Heterozygote advantage requires a selective benefit to carriers, which is not described.'],
          ['c', 'Hardy–Weinberg equilibrium', 'Hardy–Weinberg proportions describe genotypes at the current allele frequencies; they do not explain why the frequency differs from the source population.'],
          ['d', 'New mutations in every generation', 'Recurrent new mutation would not concentrate the allele in one isolated group.'],
          ['e', 'Anticipation', 'Anticipation describes worsening of repeat disorders over generations.'],
        ],
        answer: 'a',
        mini: 'A small founding group can carry an allele at a frequency atypical of its source population, and isolation preserves it: the founder effect. It changes allele frequency relative to the source population; if the community then mates at random, its genotypes can still fit Hardy–Weinberg proportions at the new frequency.',
        reasoning: 'identification',
        objectives: [`${HW}.violations`],
        difficulty: 2,
      },
      {
        stem: 'In Hardy–Weinberg equilibrium, why is the carrier frequency of a rare recessive allele approximately 2q?',
        options: [
          ['a', 'Heterozygotes are 2pq, and p is close to 1 when q is small'],
          ['b', 'Carriers equal the square root of the disease prevalence', 'The square root of prevalence is the allele frequency q, not the carrier frequency.'],
          ['c', 'Each carrier has two copies of the variant allele', 'Carriers are heterozygotes with one copy; two copies give affected homozygotes (q²).'],
          ['d', 'Carriers and affected people are both q² in frequency', 'q² is the frequency of affected homozygotes only.'],
          ['e', 'Heterozygote advantage doubles the number of carriers', 'Selection breaks equilibrium; the 2q estimate assumes no selection.'],
        ],
        answer: 'a',
        mini: 'Genotypes are p², 2pq and q². Heterozygous carriers are 2pq; for a rare allele p ≈ 1, so carriers ≈ 2q.',
        reasoning: 'mechanism',
        objectives: [`${HW}.equations`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'Hardy–Weinberg equilibrium assumes no mutation, migration or selection in a very large population.', isTrue: true, correction: 'Correct, with random combination of alleles.', objectives: [`${HW}.equations`], difficulty: 1 },
      { statement: 'Sickle cell trait is maintained in malaria-endemic regions by heterozygote advantage.', isTrue: true, correction: 'Correct: heterozygotes are protected against malaria.', objectives: [`${HW}.violations`], difficulty: 1 },
      { statement: 'In Hardy–Weinberg equilibrium, the frequency of heterozygotes is p².', isTrue: false, correction: 'Heterozygotes are 2pq; p² and q² are the homozygotes.', objectives: [`${HW}.equations`], difficulty: 1 },
    ],
    clues: [
      { answer: 'DRIFT', clue: 'Genetic ___: random change in allele frequency, strongest in small populations', objectives: [`${HW}.violations`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-repeats',
    relevance: 'core',
    title: 'Trinucleotide repeat disorders: fragile X, Friedreich ataxia, myotonic dystrophy and parent-of-origin bias',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'nervous-behavioral',
    alsoSystems: ['musculoskeletal-skin', 'cardiovascular'],
    topic: 'genetics-trinucleotide',
    difficulty: 3,
    curriculum: [`${TN}.principles`, `${TN}.fragile-x`, `${TN}.friedreich`, `${TN}.match`, `${MD}.myotonic`],
    objectives: ['Explain repeat expansion and parent-of-origin bias', 'Explain fragile X, Friedreich ataxia and myotonic dystrophy', 'Match each repeat disorder to its repeat, gene and inheritance'],
    citations: [MP_FRAGX, MP_FMR1, FX_MATERNAL, MP_FA, MP_DM, MP_DMPK, MP_HD, HD_PATERNAL, JHD_PATERNAL, CDM_MATERNAL, DM_MBNL],
    facts: [
      'Fragile X syndrome is caused by more than 200 CGG repeats in FMR1, which silence the gene and prevent production of FMRP; 55–200 repeats is a premutation. Features include intellectual disability (milder and less frequent in females), autism features in about one-third, a long narrow face, large ears, a prominent jaw, flexible fingers and enlarged testes after puberty.',
      'Fragile X premutation alleles expand to full mutations during maternal transmission.',
      'Friedreich ataxia is autosomal recessive and caused by a GAA repeat expansion in FXN (normally 5–33, in disease 66 to more than 1,000), reducing frataxin, a protein important for mitochondrial function; onset is usually between 5 and 15 years with progressive ataxia, loss of strength and sensation, hypertrophic cardiomyopathy, and sometimes diabetes or scoliosis.',
      'Myotonic dystrophy type 1 is autosomal dominant and caused by an expanded CTG repeat in DMPK (normally 5–34; 50 to over 1,000 in disease, more than 1,000 in the congenital form). It causes myotonia (difficulty releasing a grip), progressive muscle weakness, cataracts, cardiac conduction defects and diabetes, and shows anticipation.',
      'Huntington disease shows anticipation particularly when inherited through the father, because the CAG repeat tends to expand in paternal meioses; juvenile Huntington disease is paternally transmitted in 80–90% of cases.',
      'The long GAA repeat disrupts production of frataxin, severely reducing it; certain nerve and muscle cells cannot function properly without enough frataxin.',
      'The expanded DMPK repeat produces RNA with a long CUG repeat that traps proteins in clumps inside the cell; it sequesters MBNL splicing proteins, so alternative splicing of many other transcripts is deregulated.',
      'Congenital myotonic dystrophy type 1, the most severe form, is associated with very large expansions and almost exclusively maternal transmission.',
    ],
    factRefs: [[0, 1], [2], [3], [4, 5], [6, 7, 8], [3], [4, 5, 10], [9]],
    mechanism:
      'Repeats above a threshold are unstable and can grow when passed on. The parent matters: Huntington CAG repeats expand mainly in the father’s germ line, fragile X premutations expand to full mutations through the mother, and very large myotonic dystrophy expansions, passed on almost always by the mother, give the congenital form. Where the repeat sits sets the mechanism: CGG silencing (fragile X), GAA loss of frataxin (Friedreich), toxic CUG-repeat RNA that sequesters MBNL splicing proteins (myotonic dystrophy), and polyglutamine CAG (Huntington).',
    associations: ['Huntington: CAG, HTT, AD, paternal expansion', 'Fragile X: CGG, FMR1, X-linked, maternal expansion', 'Friedreich: GAA, FXN, AR, cardiomyopathy', 'Myotonic dystrophy 1: CTG, DMPK, AD, myotonia, cataracts', 'Premutation 55–200 CGG'],
    misconception:
      'Not every repeat disorder is dominant or shows anticipation in the same way: Friedreich ataxia is recessive, and fragile X expansions occur on maternal transmission whereas Huntington expansions occur mainly through fathers.',
    quick:
      'CAG Huntington (AD, paternal expansion). CGG fragile X (X-linked, FMR1 silenced; premutation 55–200 expands via mother; long face, large ears, macroorchidism). GAA Friedreich (AR, frataxin; ataxia, cardiomyopathy, diabetes). CTG myotonic dystrophy 1 (AD, DMPK; myotonia, cataracts, conduction defects).',
    detailed: [
      'Trinucleotide repeat disorders share instability: long repeats tend to lengthen on transmission, giving anticipation. The parent of origin matters. Huntington CAG repeats expand mainly through the father (juvenile cases are mostly paternal), while fragile X premutations become full mutations through the mother.',
      'The repeat and gene predict the disease. Fragile X (CGG, FMR1, X-linked): silencing of FMR1, intellectual disability, autism features, long face, large ears, macroorchidism. Friedreich ataxia (GAA, FXN, recessive): childhood-onset ataxia, sensory loss, hypertrophic cardiomyopathy, diabetes, scoliosis. Myotonic dystrophy type 1 (CTG, DMPK, dominant): myotonia, weakness, cataracts, conduction defects, diabetes, with a severe congenital form from very large expansions.',
    ],
    takeaway: 'CAG–Huntington (father), CGG–fragile X (mother), GAA–Friedreich (recessive), CTG–myotonic dystrophy (dominant).',
    related: ['gen-anticipation', 'lab-gel'],
    outline: found('Nervous System & Special Senses', 'Disorders of the nervous system'),
    mcq: [
      {
        stem: 'A 9-year-old with progressive gait ataxia, absent ankle reflexes and loss of sensation in the feet is found to have hypertrophic cardiomyopathy. His parents and sister are unaffected. Which repeat and inheritance are most likely?',
        options: [
          ['a', 'GAA expansion in FXN, autosomal recessive'],
          ['b', 'CAG expansion in HTT, autosomal dominant', 'Huntington disease causes a movement disorder in adults, typically with an affected parent.'],
          ['c', 'CGG expansion in FMR1, X-linked', 'Fragile X causes intellectual disability, not this ataxia with cardiomyopathy.'],
          ['d', 'CTG expansion in DMPK, autosomal dominant', 'Myotonic dystrophy causes myotonia and cataracts.'],
          ['e', 'Mitochondrial DNA variant, maternal', 'The picture fits Friedreich ataxia, a nuclear recessive disorder.'],
        ],
        answer: 'a',
        mini: 'Childhood-onset progressive ataxia, sensory loss and hypertrophic cardiomyopathy with unaffected parents = Friedreich ataxia: autosomal recessive GAA expansion in FXN (frataxin).',
        reasoning: 'identification',
        objectives: [`${TN}.friedreich`],
        difficulty: 2,
      },
      {
        stem: 'A woman carries a fragile X premutation of 90 CGG repeats. Her father carried the same premutation and was intellectually normal. Why is her son at risk of fragile X syndrome when her father’s children were not affected?',
        options: [
          ['a', 'Premutations expand to full mutations on maternal transmission'],
          ['b', 'Fragile X repeats shrink in every generation', 'Premutation alleles tend to expand, not shrink.'],
          ['c', 'Her son will inherit the premutation from his father', 'Sons inherit their X from their mother.'],
          ['d', 'Fragile X is autosomal recessive', 'Fragile X is X-linked, not autosomal recessive.'],
          ['e', 'Her father’s premutation was mitochondrial', 'FMR1 is on the X chromosome.'],
        ],
        answer: 'a',
        mini: 'Premutation alleles (55–200 CGG) can expand to full mutations (>200) when passed through a mother, so a carrier mother’s son can have fragile X syndrome even though her transmitting father’s children were unaffected.',
        reasoning: 'mechanism',
        objectives: [`${TN}.principles`, `${TN}.fragile-x`],
        difficulty: 3,
      },
      {
        stem: 'A 32-year-old woman cannot let go of a door handle after gripping it, and has early cataracts and a cardiac conduction defect. Her father had cataracts at 60. Her newborn son was profoundly floppy at birth and needed help with breathing and feeding. Which gene and repeat are involved?',
        figure: {
          kind: 'pedigree', mode: 'AD',
          generations: [
            [{ id: 'gf', sex: 'M', status: 'affected', note: 'cataract 60y' }, { id: 'gm', sex: 'F', status: 'unaffected' }],
            [{ id: 'husband', sex: 'M', status: 'unaffected' }, { id: 'woman', sex: 'F', status: 'affected', proband: true, note: 'myotonia 32y' }],
            [{ id: 'baby', sex: 'M', status: 'affected', note: 'congenital form' }],
          ],
          families: [{ parents: ['gf', 'gm'], children: ['woman'] }, { parents: ['husband', 'woman'], children: ['baby'] }],
          alt: 'Three-generation pedigree: a grandfather with cataracts at 60, his daughter with myotonia at 32, and her son with the congenital form at birth.',
          caption: 'Earlier, more severe disease in each generation; the congenital form is transmitted almost always by the mother.',
        },
        options: [
          ['a', 'CTG expansion in DMPK'],
          ['b', 'CAG expansion in HTT', 'Huntington disease causes a movement disorder, not myotonia and cataracts.'],
          ['c', 'GAA expansion in FXN', 'Friedreich ataxia is recessive and causes ataxia with cardiomyopathy.'],
          ['d', 'CGG expansion in FMR1', 'Fragile X causes intellectual disability and is X-linked.'],
          ['e', 'Deletion in the dystrophin gene', 'Dystrophinopathies do not cause myotonia or cataracts.'],
        ],
        answer: 'a',
        mini: 'Myotonia, cataracts and conduction defects with anticipation over three generations (late cataracts → adult myotonia → floppy newborn) = myotonic dystrophy type 1, a dominant CTG expansion in DMPK. The severe congenital form usually follows a large expansion passed on by an affected mother, as here.',
        reasoning: 'interpretation',
        objectives: [`${MD}.myotonic`],
        steps: ['Difficulty releasing a grip, cataracts and conduction defects → myotonic dystrophy.', 'Each generation is affected earlier and more severely → anticipation from repeat expansion; the congenital form comes through the mother.', 'Myotonic dystrophy type 1 = autosomal dominant CTG expansion in DMPK.'],
        difficulty: 3,
      },
      {
        stem: 'How does the expanded GAA repeat in FXN cause Friedreich ataxia?',
        options: [
          ['a', 'It severely reduces frataxin, needed for mitochondrial function'],
          ['b', 'It adds a toxic polyglutamine tract to the encoded protein', 'A polyglutamine tract is the mechanism of CAG repeats such as Huntington disease.'],
          ['c', 'Its messenger RNA traps proteins in clumps inside the cell', 'Toxic RNA clumps are the mechanism of the DMPK CTG repeat in myotonic dystrophy.'],
          ['d', 'It silences an X-linked gene by hypermethylation', 'FXN is autosomal; methylation silencing of FMR1 causes fragile X syndrome.'],
          ['e', 'It produces a dominant negative frataxin protein', 'Friedreich ataxia is recessive: disease results from too little frataxin.'],
        ],
        answer: 'a',
        mini: 'The long GAA repeat disrupts frataxin production. Frataxin is important for mitochondrial function, and certain nerve and muscle cells cannot function properly without enough of it.',
        reasoning: 'mechanism',
        objectives: [`${TN}.friedreich`],
        difficulty: 2,
      },
      {
        stem: 'A 12-year-old girl has a progressively clumsy gait, frequent falls, absent ankle reflexes and reduced sensation in her feet. Her parents and brother are unaffected. Which finding is she most likely to develop as the disorder progresses?',
        options: [
          ['a', 'Hypertrophic cardiomyopathy'],
          ['b', 'Cataracts with difficulty releasing her grip', 'Cataracts and myotonia point to myotonic dystrophy, which is dominant and would usually affect a parent.'],
          ['c', 'Chorea and dementia in mid-adulthood', 'Huntington disease is dominant with adult onset, usually with an affected parent.'],
          ['d', 'Progressive hearing loss with hematuria', 'Hearing loss with kidney disease suggests Alport syndrome, not a childhood ataxia.'],
          ['e', 'Severe intellectual disability with absent speech', 'This suggests Angelman syndrome; her presentation is a progressive ataxia with sensory loss.'],
        ],
        answer: 'a',
        mini: 'Childhood-onset progressive ataxia with sensory loss and unaffected parents suggests Friedreich ataxia (autosomal recessive GAA expansion in FXN). Frataxin deficiency also affects heart muscle, so hypertrophic cardiomyopathy is expected.',
        reasoning: 'prediction',
        objectives: [`${TN}.friedreich`],
        steps: ['Progressive childhood ataxia, absent reflexes and sensory loss with unaffected parents → Friedreich ataxia (recessive).', 'Frataxin shortage impairs certain nerve and muscle cells, including heart muscle.', 'Hypertrophic cardiomyopathy is a characteristic feature to anticipate.'],
        difficulty: 3,
      },
      {
        stem: 'How does the expanded CTG repeat in DMPK cause myotonic dystrophy type 1?',
        options: [
          ['a', 'Its CUG-repeat RNA sequesters MBNL splicing proteins, disrupting splicing'],
          ['b', 'It silences DMPK by hypermethylation so that no protein is made at all', 'Hypermethylation silencing of the repeat-bearing gene is the mechanism of fragile X syndrome (FMR1).'],
          ['c', 'It severely reduces frataxin needed for mitochondrial function', 'Frataxin deficiency from a GAA repeat causes Friedreich ataxia.'],
          ['d', 'It deletes exons of the dystrophin gene and shifts the reading frame', 'Frameshift dystrophin deletions cause Duchenne muscular dystrophy.'],
          ['e', 'It is passed only through the mitochondria of the mother', 'Myotonic dystrophy type 1 is autosomal dominant, nuclear inheritance.'],
        ],
        answer: 'a',
        mini: 'The expanded CTG repeat is transcribed into RNA with a long CUG repeat. This toxic RNA forms nuclear clumps that sequester RNA-binding proteins such as MBNL, so alternative splicing of many other transcripts is abnormal (toxic RNA gain of function).',
        reasoning: 'mechanism',
        objectives: [`${MD}.myotonic`],
        difficulty: 3,
      },
      {
        stem: 'A man developed chorea at 48. His son developed it at 36, and his son’s son developed the disease at 14. Which repeat best explains the disease and its earlier onset in each generation?',
        options: [
          ['a', 'A CAG repeat in HTT that tends to expand in paternal meioses'],
          ['b', 'A CGG repeat in FMR1 that expands through the mother', 'Transmission is father to son, and fragile X does not cause adult chorea.'],
          ['c', 'A GAA repeat in FXN inherited in a recessive pattern', 'The disease appears in every generation through affected parents, a dominant pattern.'],
          ['d', 'A CTG repeat in DMPK that expands mainly through mothers', 'Myotonic dystrophy causes myotonia, cataracts and conduction defects, not chorea.'],
          ['e', 'A mitochondrial DNA variant passed down by the fathers', 'Mitochondrial DNA is inherited from the mother, not the father.'],
        ],
        answer: 'a',
        mini: 'Chorea in three generations through fathers, with onset earlier each time = Huntington disease (autosomal dominant CAG in HTT), whose repeat tends to expand in paternal meioses.',
        reasoning: 'comparison',
        objectives: [`${TN}.match`, `${TN}.principles`],
        steps: ['Chorea in each generation, passed father to son → autosomal dominant movement disorder → Huntington disease.', 'Earlier onset each generation = anticipation from repeat expansion.', 'Huntington = CAG in HTT, which expands mainly through fathers; the other repeats differ in gene, phenotype or parent of origin.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Fragile X syndrome is caused by more than 200 CGG repeats in FMR1, which silence the gene.', isTrue: true, correction: 'Correct; 55–200 repeats is a premutation.', objectives: [`${TN}.fragile-x`], difficulty: 1 },
      { statement: 'Juvenile Huntington disease is usually inherited from the father.', isTrue: true, correction: 'Correct: the CAG repeat tends to expand in paternal meioses (paternal in 80–90% of juvenile cases).', objectives: [`${TN}.principles`], difficulty: 2 },
      { statement: 'Friedreich ataxia is an autosomal dominant CAG repeat disorder.', isTrue: false, correction: 'It is autosomal recessive, caused by a GAA expansion in FXN.', objectives: [`${TN}.friedreich`], difficulty: 1 },
    ],
    clues: [
      { answer: 'MACROORCHIDISM', clue: 'Enlarged testes after puberty in fragile X syndrome', objectives: [`${TN}.fragile-x`], difficulty: 2 },
      { answer: 'MYOTONIA', clue: 'Delayed muscle relaxation, as in failing to release a grip', objectives: [`${MD}.myotonic`], difficulty: 1 },
      { answer: 'FRATAXIN', clue: 'Mitochondrial protein reduced in Friedreich ataxia', objectives: [`${TN}.friedreich`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-xyy',
    relevance: 'core',
    title: '47,XYY syndrome',
    discipline: 'genetics',
    system: 'reproductive',
    topic: 'genetics-chromosomal',
    difficulty: 1,
    curriculum: ['bc-sex-chromosome.xyy'],
    objectives: ['Recognize 47,XYY'],
    citations: [MP_XYY],
    facts: [
      '47,XYY syndrome is an extra Y chromosome in each of a male’s cells. Many affected males are taller than average; most have normal testosterone and sexual development and are usually able to father children.',
      '47,XYY is associated with increased risks of learning disabilities, delayed speech and language, delayed motor development, hypotonia, and behavioral, social and emotional difficulties.',
      '47,XYY is not inherited: it usually arises as a random event during sperm formation, when nondisjunction produces a sperm cell with an extra Y chromosome.',
    ],
    factRefs: [[0], [0], [0]],
    mechanism:
      'An extra Y chromosome usually has mild effects: tall stature and an increased risk of learning, speech and behavioral difficulties, with typically normal sexual development and fertility.',
    associations: ['Extra Y', 'Tall stature', 'Usually normal fertility', 'Learning and speech difficulties', 'Behavioral difficulties'],
    misconception:
      '47,XYY does not usually cause infertility or abnormal sexual development; many affected males are never diagnosed.',
    quick:
      '47,XYY: tall, usually normal testosterone, sexual development and fertility; increased risk of learning, speech and behavioral difficulties.',
    detailed: [
      '47,XYY syndrome is an extra Y chromosome in a male. Many affected males are taller than average and have normal male development and fertility.',
      'The condition raises the risk of learning disabilities, delayed speech and motor development and behavioral and emotional difficulties, but effects vary and are often mild.',
    ],
    takeaway: '47,XYY = tall, usually fertile, increased learning and behavioral difficulties.',
    related: ['gen-nondisjunction'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A tall 14-year-old boy with normal puberty has speech delay and learning difficulties. Karyotype shows 47 chromosomes with an extra sex chromosome. Which karyotype fits best?',
        options: [
          ['a', '47,XYY'],
          ['b', '47,XXY', 'Klinefelter syndrome usually causes small testes and hypogonadism, unlike normal puberty here.'],
          ['c', '45,X', 'Turner syndrome affects females.'],
          ['d', '47,XX,+21', 'Down syndrome has characteristic dysmorphic features and is not a sex chromosome aneuploidy.'],
          ['e', '46,XY', 'This is the normal karyotype; the boy has 47 chromosomes.'],
        ],
        answer: 'a',
        mini: 'An extra Y (47,XYY): tall stature with usually normal sexual development, and increased risk of speech and learning difficulties.',
        reasoning: 'identification',
        objectives: ['bc-sex-chromosome.xyy'],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'Most males with 47,XYY are infertile.', isTrue: false, correction: 'Most have normal sexual development and are usually able to father children.', objectives: ['bc-sex-chromosome.xyy'], difficulty: 1 },
    ],
    clues: [],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-cf',
    relevance: 'core',
    title: 'Cystic fibrosis: genetics and CFTR physiology',
    discipline: 'genetics',
    alsoDisciplines: ['physiology', 'pathology'],
    system: 'respiratory',
    alsoSystems: ['gastrointestinal', 'multisystem'],
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${CF}.genetics`, `${CF}.physiology`],
    objectives: ['Explain CF genetics and the ΔF508 defect', 'Explain CFTR function and the findings it predicts'],
    citations: [MP_CF, MP_CFTR, CF_ER, CF_SWEAT, CF_DUCT],
    facts: [
      'Cystic fibrosis is autosomal recessive; the CFTR gene is on chromosome 7 and encodes a chloride channel in cells that produce mucus, sweat, saliva, tears and digestive enzymes.',
      'The most common CFTR mutation, ΔF508 (F508del), deletes one amino acid at position 508; the misfolded protein is recognized by endoplasmic reticulum quality control, retained in the ER and degraded by the ubiquitin–proteasome pathway.',
      'Without functional CFTR, the flow of chloride and water into and out of cells is disrupted, and mucus becomes thick and sticky: it clogs the airways (infections, lung damage), the pancreas (digestive problems) and, in most affected men, the vas deferens (congenital bilateral absence, infertility); some babies have meconium ileus.',
      'Cystic fibrosis is diagnosed by a compatible clinical picture plus two elevated sweat chloride results (≥60 mmol/L) or two disease-causing CFTR variants.',
      'In the sweat duct, CFTR normally reabsorbs chloride, so loss of CFTR leaves sweat abnormally salty; in airway and intestinal epithelium, CFTR secretes chloride, so its loss dehydrates secretions.',
    ],
    factRefs: [[0, 1], [1, 2], [0, 1], [3], [0, 4]],
    mechanism:
      'CFTR is a chloride channel. In airways, gut and pancreas it secretes chloride, which draws water and keeps secretions thin; in the sweat duct it reabsorbs chloride, recovering salt. ΔF508 CFTR misfolds and is destroyed in the ER, so little reaches the membrane: secretions become thick (lung infection, pancreatic insufficiency, meconium ileus, absent vas deferens), while sweat stays salty (high sweat chloride).',
    associations: ['Autosomal recessive', 'CFTR on chromosome 7', 'ΔF508: misfolding, ER retention, proteasomal degradation', 'Chloride channel', 'Thick mucus', 'High sweat chloride (≥60 mmol/L)', 'Meconium ileus', 'Pancreatic insufficiency', 'Absent vas deferens (infertility)'],
    misconception:
      'ΔF508 CFTR is not a channel stuck closed at the membrane: most of it never arrives there, because the misfolded protein is degraded in the ER.',
    quick:
      'CF: AR, CFTR (chr 7) chloride channel. ΔF508 → misfolding, ER retention, proteasomal degradation. Airway/gut: CFTR secretes Cl⁻ → thick mucus (infections, pancreatic insufficiency, meconium ileus, absent vas deferens). Sweat duct: CFTR reabsorbs Cl⁻ → high sweat chloride (≥60 mmol/L).',
    detailed: [
      'Cystic fibrosis is autosomal recessive (CFTR, chromosome 7). The commonest variant, ΔF508, removes phenylalanine 508; the protein misfolds, is held in the endoplasmic reticulum by quality control and is degraded by the proteasome, so little CFTR reaches the cell surface.',
      'CFTR moves chloride in opposite directions in different tissues. Where it secretes chloride (airways, intestine, pancreatic ducts), its loss leaves secretions thick and dehydrated: recurrent lung infection, pancreatic insufficiency, meconium ileus and congenital absence of the vas deferens. Where it reabsorbs chloride (the sweat duct), its loss leaves sweat salty, the basis of the sweat chloride test (≥60 mmol/L on two occasions).',
    ],
    takeaway: 'CF: ΔF508 misfolds and is degraded; thick secretions where CFTR secretes, salty sweat where it reabsorbs.',
    related: ['gen-ar', 'cel-gpcr-toxins'],
    outline: listed('Respiratory System', 'Cystic fibrosis'),
    mcq: [
      {
        stem: 'Most patients with cystic fibrosis carry ΔF508 CFTR. In their epithelial cells, where is most of the mutant protein?',
        options: [
          ['a', 'Retained in the ER and degraded by the proteasome'],
          ['b', 'At the apical membrane, but permanently closed', 'Most ΔF508 protein never reaches the membrane.'],
          ['c', 'Secreted into the airway lumen', 'CFTR is a membrane channel, not a secreted protein.'],
          ['d', 'In the nucleus, blocking transcription', 'CFTR does not act in the nucleus.'],
          ['e', 'Absent because the gene is deleted', 'ΔF508 removes one amino acid; the protein is made but misfolds.'],
        ],
        answer: 'a',
        mini: 'ΔF508 deletes phenylalanine 508; ER quality control recognizes the misfolded CFTR, retains it and sends it for ubiquitin–proteasome degradation.',
        reasoning: 'mechanism',
        objectives: [`${CF}.genetics`],
        difficulty: 2,
      },
      {
        stem: 'A child with cystic fibrosis has thick airway mucus yet salty sweat. How can loss of the same channel cause both findings?',
        options: [
          ['a', 'CFTR secretes chloride in airways but reabsorbs it in sweat ducts'],
          ['b', 'CFTR pumps sodium out of all epithelial cells', 'CFTR is a chloride channel, not a sodium pump.'],
          ['c', 'Sweat glands overexpress CFTR in cystic fibrosis', 'Cystic fibrosis is loss of CFTR function everywhere.'],
          ['d', 'Thick mucus causes salty sweat by blocking sweat ducts', 'The sweat finding reflects failed chloride reabsorption, not duct blockage.'],
          ['e', 'Airway and sweat effects come from two different genes', 'Both come from loss of CFTR.'],
        ],
        answer: 'a',
        mini: 'Where CFTR secretes chloride (airways), its loss dehydrates secretions; where it reabsorbs chloride (sweat duct), its loss leaves salt in the sweat.',
        reasoning: 'mechanism',
        objectives: [`${CF}.physiology`],
        difficulty: 3,
      },
      {
        stem: 'A 25-year-old man is evaluated for infertility. Semen has no sperm, and the vas deferens cannot be felt on either side. He has had several sinus and chest infections. Which test result would best support the likely diagnosis?',
        options: [
          ['a', 'Sweat chloride of 75 mmol/L on two occasions'],
          ['b', 'Karyotype 47,XXY', 'Klinefelter syndrome causes small testes, not absent vasa deferentia with recurrent infections.'],
          ['c', 'Low serum testosterone with high LH', 'The problem is the absent duct carrying sperm, not testicular failure.'],
          ['d', 'Elevated CAG repeats in HTT', 'Huntington disease is unrelated to these findings.'],
          ['e', 'Normal CFTR sequencing with normal sweat chloride', 'That would argue against the likely diagnosis.'],
        ],
        answer: 'a',
        mini: 'Congenital bilateral absence of the vas deferens with recurrent respiratory infections suggests cystic fibrosis; two sweat chloride results ≥60 mmol/L support it.',
        reasoning: 'interpretation',
        objectives: [`${CF}.physiology`],
        steps: ['Absent sperm with absent vasa deferentia → congenital bilateral absence of the vas deferens.', 'Together with recurrent sinus and chest infections → cystic fibrosis.', 'High sweat chloride (≥60 mmol/L, twice) supports the diagnosis.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'The CFTR gene is on chromosome 7.', isTrue: true, correction: 'Correct; cystic fibrosis is autosomal recessive.', objectives: [`${CF}.genetics`], difficulty: 1 },
      { statement: 'Most men with cystic fibrosis have congenital bilateral absence of the vas deferens.', isTrue: true, correction: 'Correct: they are infertile unless they have fertility treatment.', objectives: [`${CF}.physiology`], difficulty: 2 },
    ],
    clues: [
      { answer: 'CHLORIDE', clue: 'Ion carried by CFTR and measured in the sweat test', objectives: [`${CF}.physiology`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-sickle',
    relevance: 'core',
    title: 'Sickle cell disease genetics',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'blood-immune',
    topic: 'genetics-inheritance',
    difficulty: 2,
    curriculum: ['bc-ar-diseases.sickle'],
    objectives: ['Explain the β-globin point mutation and heterozygote advantage'],
    citations: [MP_SICKLE, MP_HBB, HBS_MALARIA],
    facts: [
      'Hemoglobin S results from an HBB variant that replaces glutamic acid with valine at position 6 of β-globin (Glu6Val); the abnormal hemoglobin S molecules stick together into long rigid polymers that bend red cells into a sickle shape.',
      'Sickle cell anemia (HbSS) is the most common form of sickle cell disease; compound heterozygotes such as HbSC and HbS-β thalassemia also cause sickle cell disease. Hemoglobin C replaces glutamic acid with lysine at position 6.',
      'The HbS allele has been selected repeatedly because heterozygotes (sickle cell trait) are protected against malaria.',
    ],
    factRefs: [[1], [0, 1], [2]],
    mechanism:
      'A single-base change swaps a charged glutamic acid for a hydrophobic valine at position 6 of β-globin. Deoxygenated HbS polymerizes, distorting red cells into rigid sickle shapes. Two HbS alleles (or HbS with HbC or β-thalassemia) cause disease, while carriers are protected against malaria, which keeps the allele common where malaria is endemic.',
    associations: ['HBB Glu6Val', 'HbS polymerization', 'HbSS, HbSC, HbS-β thal', 'HbC: Glu6Lys', 'Autosomal recessive', 'Sickle cell trait protects against malaria'],
    misconception:
      'Sickle cell disease is not only HbSS: compound heterozygotes such as HbSC and HbS-β thalassemia also have sickle cell disease.',
    quick:
      'Sickle cell: HBB Glu6Val (point mutation) → HbS polymerizes when deoxygenated → sickled red cells. AR (HbSS; also HbSC, HbS-β thal). HbC = Glu6Lys. Trait (HbAS) protects against malaria → heterozygote advantage.',
    detailed: [
      'The sickle mutation is a single nucleotide change in HBB that replaces glutamic acid with valine at position 6 (Glu6Val). Hemoglobin S molecules polymerize into long rigid fibers that deform red cells into sickles. HbC has lysine at the same position.',
      'Disease needs two abnormal β-globin alleles: HbSS (sickle cell anemia), HbSC or HbS-β thalassemia. Heterozygotes have sickle cell trait and are protected against malaria, which is why the allele is common where malaria is endemic.',
    ],
    takeaway: 'Glu6Val → HbS polymer; recessive disease; trait protects against malaria.',
    related: ['gen-hardy-weinberg'],
    outline: found('Blood & Lymphoreticular System', 'Hemoglobinopathies'),
    mcq: [
      {
        stem: 'Why is the HbS allele common in regions where falciparum malaria is endemic, even though HbSS disease shortens life?',
        options: [
          ['a', 'Heterozygotes are protected against malaria'],
          ['b', 'HbS is a new mutation in each generation', 'The allele has been selected, not freshly generated.'],
          ['c', 'HbSS homozygotes are protected and reproduce more', 'The advantage belongs to heterozygous carriers.'],
          ['d', 'Malaria causes the HBB mutation', 'Malaria selects for the allele; it does not cause it.'],
          ['e', 'Sickle cell disease is autosomal dominant', 'Disease requires two abnormal alleles.'],
        ],
        answer: 'a',
        mini: 'Carriers (HbAS) are protected against malaria, so selection favors heterozygotes and keeps the allele common despite the cost of HbSS disease: heterozygote advantage.',
        reasoning: 'mechanism',
        objectives: ['bc-ar-diseases.sickle'],
        difficulty: 2,
      },
      {
        stem: 'A mother has sickle cell trait (HbAS) and the father has hemoglobin C trait (HbAC). What proportion of their children are expected to have sickle cell disease?',
        options: [
          ['a', '1/4 (HbSC)'],
          ['b', 'None, because neither parent has disease', 'One parent can pass S and the other C, giving HbSC disease.'],
          ['c', '1/2', 'Half of the children would be carriers of one abnormal allele (AS or AC), not affected.'],
          ['d', '3/4', 'Only children who inherit both S and C are affected.'],
          ['e', '1/4, all with HbSS', 'The father has no S allele to pass on.'],
        ],
        answer: 'a',
        mini: 'Children inherit S or A from the mother and C or A from the father: 1/4 SC (sickle cell disease), 1/4 AS, 1/4 AC, 1/4 AA.',
        reasoning: 'prediction',
        objectives: ['bc-ar-diseases.sickle'],
        steps: ['The mother passes S with probability 1/2; the father passes C with probability 1/2.', 'A child with both S and C (1/2 × 1/2 = 1/4) has HbSC.', 'HbSC is a form of sickle cell disease.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'The sickle mutation replaces glutamic acid with valine at position 6 of β-globin.', isTrue: true, correction: 'Correct: Glu6Val (E6V).', objectives: ['bc-ar-diseases.sickle'], difficulty: 1 },
    ],
    clues: [
      { answer: 'VALINE', clue: 'Amino acid that replaces glutamic acid in hemoglobin S', objectives: ['bc-ar-diseases.sickle'], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-hemophilia',
    relevance: 'core',
    title: 'Hemophilia A and B genetics',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'blood-immune',
    topic: 'genetics-inheritance',
    difficulty: 2,
    curriculum: ['bc-x-linked-diseases.hemophilia'],
    objectives: ['Explain the genetics of hemophilia A and B and why female carriers are rarely affected'],
    citations: [MP_HEMOPHILIA, MP_F8, F8_INV22],
    facts: [
      'Hemophilia A (F8, factor VIII) and hemophilia B (F9, factor IX) are X-linked recessive; one altered copy causes disease in males, while females usually need both copies altered.',
      'The most common mutation in severe hemophilia A is an inversion within the F8 gene; about 50% of severe hemophilia A is caused by the F8 intron 22 inversion.',
      'A female carrier can be affected when the X chromosome with the normal F8 or F9 copy is inactivated in most cells.',
    ],
    factRefs: [[0], [1, 2], [0]],
    mechanism:
      'Factor VIII and IX genes are on the X chromosome, so a single variant causes disease in males. Carriers usually make enough factor from the normal X, unless X-inactivation happens to silence the normal copy in most cells. In severe hemophilia A, a large intron 22 inversion disrupts F8 in about half of patients.',
    associations: ['X-linked recessive', 'Hemophilia A: F8 (factor VIII)', 'Hemophilia B: F9 (factor IX)', 'Intron 22 inversion (~50% of severe A)', 'Carriers usually unaffected', 'Skewed X-inactivation'],
    misconception:
      'Severe hemophilia A is not mostly caused by point mutations: about half is a large intron 22 inversion of F8.',
    quick:
      'Hemophilia A (F8) and B (F9): X-linked recessive. Intron 22 inversion of F8 ≈ 50% of severe hemophilia A. Female carriers usually unaffected; symptomatic if X-inactivation silences the normal copy in most cells.',
    detailed: [
      'Hemophilia A (factor VIII, F8) and hemophilia B (factor IX, F9) are X-linked recessive. In severe hemophilia A, about half of patients have an inversion involving intron 22 of F8, which disrupts the gene.',
      'Female carriers usually have enough clotting factor from their normal X. Some are symptomatic when X-inactivation silences the normal copy in most of their cells.',
    ],
    takeaway: 'Hemophilia A = F8 (half of severe: intron 22 inversion); B = F9; carriers affected only with skewed X-inactivation.',
    related: ['gen-xlr'],
    outline: found('Blood & Lymphoreticular System', 'Coagulation disorders'),
    mcq: [
      {
        stem: 'A boy has severe hemophilia A with factor VIII activity below 1%. Which single genetic change is found in about half of such patients?',
        options: [
          ['a', 'An inversion involving intron 22 of F8'],
          ['b', 'A CGG repeat expansion in FMR1', 'That causes fragile X syndrome.'],
          ['c', 'A deletion of the whole X chromosome', 'Males cannot survive without an X chromosome.'],
          ['d', 'A point mutation in F9', 'F9 variants cause hemophilia B.'],
          ['e', 'A Robertsonian translocation', 'Hemophilia is a single-gene disorder.'],
        ],
        answer: 'a',
        mini: 'About 50% of severe hemophilia A is caused by an inversion involving intron 22 of F8, which disrupts the gene.',
        reasoning: 'recall',
        objectives: ['bc-x-linked-diseases.hemophilia'],
        relevance: 'supplementary',
        relevanceNote: 'The specific intron 22 inversion is a detail beyond core; X-linked F8/F9 inheritance is core.',
        difficulty: 2,
      },
      {
        stem: 'A 24-year-old woman has prolonged bleeding after a dental extraction and a low factor VIII level. Her father has hemophilia A. Her karyotype is 46,XX, and testing shows her mother carries no F8 variant. What best explains her bleeding?',
        options: [
          ['a', 'The X with her normal F8 copy is inactive in most of her cells'],
          ['b', 'She inherited an F8 variant from each of her two parents', 'Her mother carries no F8 variant, so she has only her father’s altered copy.'],
          ['c', 'Hemophilia A is autosomal dominant in women', 'Hemophilia A is X-linked recessive; carriers are usually unaffected.'],
          ['d', 'Her father passed his Y chromosome to her', 'Daughters receive their father’s X chromosome, not his Y.'],
          ['e', 'She has only one X chromosome, as in Turner syndrome', 'Her karyotype is 46,XX, with two X chromosomes.'],
        ],
        answer: 'a',
        mini: 'She is an obligate carrier (her father’s X carries the F8 variant). Carriers are usually unaffected, but if X-inactivation silences the X with the normal F8 copy in most cells, factor VIII falls and bleeding occurs.',
        reasoning: 'multistep',
        objectives: ['bc-x-linked-diseases.hemophilia'],
        steps: ['An affected father passes his X to every daughter → she is an obligate carrier.', 'Her mother has no F8 variant and her karyotype is 46,XX, so she is not homozygous and not 45,X.', 'A symptomatic carrier is explained by X-inactivation silencing the X with the normal F8 copy in most cells.'],
        difficulty: 4,
      },
    ],
    tf: [
      { statement: 'Hemophilia B is caused by variants in the F9 gene (factor IX).', isTrue: true, correction: 'Correct; hemophilia A involves F8 (factor VIII). Both are X-linked recessive.', objectives: ['bc-x-linked-diseases.hemophilia'], difficulty: 1 },
    ],
    clues: [],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-two-hit',
    relevance: 'core',
    title: 'Loss of heterozygosity and the two-hit hypothesis (retinoblastoma)',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'multisystem',
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${GT}.loh`],
    objectives: ['Explain the two-hit hypothesis and loss of heterozygosity'],
    citations: [MP_RB, RB_MOSAIC],
    facts: [
      'About two-thirds of retinoblastomas are non-hereditary: affected children are born with two normal RB1 copies, and both copies acquire mutations in retinal cells, usually in early childhood; these mutations cannot be passed on.',
      'In hereditary retinoblastoma, one altered RB1 copy is present in every cell (inherited in an autosomal dominant pattern or arising as a new mutation); a second mutation in retinal cells usually occurs in childhood and typically leads to tumors in both eyes.',
      'About one-third of retinoblastomas are hereditary: one altered RB1 copy in each cell is enough to increase cancer risk, and it may be inherited from a parent or arise as a new mutation in an egg or sperm cell or just after fertilization.',
      'RB1 mosaicism (the variant present in only some body cells) occurs in some patients with retinoblastoma, including some whose earlier germline blood tests were negative; mosaic patients less often have bilateral disease.',
    ],
    factRefs: [[0], [0], [0], [1]],
    mechanism:
      'RB1 is a tumor suppressor: one working copy is enough, so a retinal cell becomes cancerous only after both copies are lost. In hereditary cases the first hit is inherited in every cell, so a second hit is very likely in many cells → early, often bilateral tumors. In sporadic cases both hits must occur by chance in the same cell → later, usually unilateral disease. Losing the remaining normal allele in a cell that started heterozygous is loss of heterozygosity.',
    associations: ['Tumor suppressor', 'Two hits', 'Loss of heterozygosity', 'Hereditary: germline first hit, bilateral, early', 'Sporadic: both hits somatic, unilateral', 'Autosomal dominant predisposition'],
    misconception:
      'Hereditary retinoblastoma is inherited dominantly, yet the tumor needs two hits: the predisposition is dominant, the cellular mechanism is recessive.',
    quick:
      'Two-hit: tumor needs both RB1 copies lost. Hereditary (germline first hit; AD predisposition) → early, often bilateral. Sporadic (both somatic) → later, unilateral, not inherited. Second hit in a heterozygous cell = loss of heterozygosity.',
    detailed: [
      'Retinoblastoma illustrates the two-hit hypothesis. A retinal cell becomes malignant only when both RB1 copies are lost. In sporadic cases (about two-thirds), both mutations arise in one retinal cell, so tumors are usually single and the mutations are not inherited.',
      'In hereditary retinoblastoma the first mutation is present in every cell, inherited from a parent (autosomal dominant predisposition) or new; a second mutation in a retinal cell is then very likely, so tumors arise early and are often bilateral. The second hit removes the remaining normal allele: loss of heterozygosity.',
    ],
    takeaway: 'Two hits: germline first hit → bilateral, early; both somatic → unilateral.',
    related: ['gen-ad', 'lab-fish'],
    outline: listed('Nervous System & Special Senses', 'Retinoblastoma'),
    mcq: [
      {
        stem: 'An 8-month-old has tumors in both eyes; his father had one eye removed in infancy. Why is this child’s disease bilateral and early?',
        figure: {
          kind: 'pedigree', mode: 'AD',
          generations: [
            [{ id: 'gf', sex: 'M', status: 'unaffected' }, { id: 'gm', sex: 'F', status: 'unaffected' }],
            [{ id: 'dad', sex: 'M', status: 'affected', deNovo: true, note: 'eye removed' }, { id: 'mom', sex: 'F', status: 'unaffected' }],
            [{ id: 'son', sex: 'M', status: 'affected', proband: true, note: 'both eyes' }, { id: 'sis', sex: 'F', status: 'unaffected' }],
          ],
          families: [{ parents: ['gf', 'gm'], children: ['dad'] }, { parents: ['dad', 'mom'], children: ['son', 'sis'] }],
          alt: 'Pedigree: the father had retinoblastoma (new in him; his parents unaffected); his son has bilateral retinoblastoma and his daughter is unaffected.',
        },
        options: [
          ['a', 'Every cell carries one inherited RB1 hit, so a second hit is likely'],
          ['b', 'Both RB1 copies were inherited mutated', 'One altered copy is inherited; the second hit happens in retinal cells.'],
          ['c', 'RB1 is an oncogene activated by one mutation', 'RB1 is a tumor suppressor needing loss of both copies.'],
          ['d', 'The disease is autosomal recessive', 'The predisposition passes dominantly from father to son.'],
          ['e', 'Retinoblastoma is caused by a repeat expansion', 'It is caused by RB1 loss of function.'],
        ],
        answer: 'a',
        mini: 'In hereditary retinoblastoma one RB1 mutation is in every cell, so only one more hit per retinal cell is needed: tumors arise early and often in both eyes.',
        reasoning: 'mechanism',
        objectives: [`${GT}.loh`],
        difficulty: 3,
      },
      {
        stem: 'Two children have retinoblastoma. Child A has tumors in both eyes at 8 months, and the same RB1 variant is found in blood and in tumor. Child B has one tumor at 3 years; two RB1 variants are found in the tumor and neither is detected in blood. Which statement best explains the difference?',
        options: [
          ['a', 'A has a germline first hit in every cell; B’s hits most likely arose in the retina'],
          ['b', 'B has a germline first hit in every cell; A’s hits most likely arose in the retina', 'The variant in A’s blood shows a germline first hit; B’s variants were found only in the tumor.'],
          ['c', 'A needed only one hit because RB1 acts as an oncogene in infancy', 'RB1 is a tumor suppressor: every tumor cell lacks both functional copies.'],
          ['d', 'B’s tumor needed only one hit because it appeared later', 'Both tumors needed loss of both RB1 copies; B has two variants in the tumor.'],
          ['e', 'Both children inherited two mutated RB1 copies from carrier parents', 'Retinoblastoma predisposition is not autosomal recessive; A has one germline variant.'],
        ],
        answer: 'a',
        mini: 'Germline (A): one RB1 hit in every cell, so second hits occur early in many retinal cells → early, bilateral tumors, and the variant can be passed on. Somatic (B): both hits in one retinal cell → later, unilateral. A negative blood test makes a germline variant much less likely but does not exclude low-level mosaicism.',
        reasoning: 'comparison',
        objectives: [`${GT}.loh`],
        steps: ['A’s variant is in blood and tumor → germline first hit present in every cell.', 'B’s two variants are only in the tumor → both hits most likely somatic.', 'A germline first hit makes second hits likely in many retinal cells → earlier, bilateral disease.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Hereditary retinoblastoma typically causes tumors in both eyes.', isTrue: true, correction: 'Correct: a second hit is likely in many retinal cells when the first hit is germline.', objectives: [`${GT}.loh`], difficulty: 1 },
    ],
    clues: [],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-heterogeneity',
    relevance: 'core',
    title: 'Locus and allelic heterogeneity',
    discipline: 'genetics',
    system: 'multisystem',
    topic: 'genetics-inheritance',
    difficulty: 2,
    curriculum: [`${GT}.heterogeneity`],
    objectives: ['Distinguish locus from allelic heterogeneity'],
    citations: [MP_ALBINISM, MP_BTHAL],
    facts: [
      'Oculocutaneous albinism can result from variants in several different genes (TYR, OCA2, TYRP1, SLC45A2 and others), each disrupting melanin production: different genes, one phenotype.',
      'Beta thalassemia is caused by many different variants in one gene, HBB: some prevent any β-globin production and others reduce it.',
      'Oculocutaneous albinism is autosomal recessive; variants in TYR cause type 1, OCA2 type 2, TYRP1 type 3 and SLC45A2 type 4.',
    ],
    factRefs: [[0], [1], [0]],
    mechanism:
      'Locus heterogeneity: mutations in different genes in the same pathway give the same disease (albinism genes all affect melanin). Allelic heterogeneity: many different mutations in one gene cause the disease, with severity depending on how much function remains (β-thalassemia alleles from none to reduced β-globin).',
    associations: ['Locus heterogeneity: albinism (TYR, OCA2…)', 'Allelic heterogeneity: β-thalassemia (many HBB variants)', 'β⁰ vs β⁺ alleles'],
    misconception:
      'Two parents with the same recessive albinism phenotype can have unaffected children if their variants are in different genes (locus heterogeneity).',
    quick:
      'Locus heterogeneity: different genes → same phenotype (albinism: TYR, OCA2, TYRP1, SLC45A2). Allelic heterogeneity: different variants in one gene → same disease (β-thalassemia: many HBB variants, none vs reduced β-globin).',
    detailed: [
      'Locus heterogeneity means that variants in several different genes produce the same phenotype. Oculocutaneous albinism can be caused by variants in TYR, OCA2, TYRP1, SLC45A2 and other genes, all needed for melanin production.',
      'Allelic heterogeneity means that many different variants in a single gene cause the disease. β-thalassemia arises from many HBB variants, some abolishing β-globin production and others reducing it.',
    ],
    takeaway: 'Locus = different genes, same disease (albinism); allelic = different variants, same gene (β-thalassemia).',
    related: ['gen-ar'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'Two parents both have oculocutaneous albinism, inherited recessively. All of their children have normal pigmentation. What best explains this?',
        options: [
          ['a', 'Their variants are in different genes (locus heterogeneity)'],
          ['b', 'Their variants are different alleles of one gene', 'Two different alleles of the same gene would still give an affected (compound heterozygous) child.'],
          ['c', 'Albinism is autosomal dominant', 'The parents’ albinism is stated to be recessive.'],
          ['d', 'Anticipation shortened a repeat', 'Albinism is not a repeat disorder.'],
          ['e', 'Uniparental disomy in each child', 'UPD would not explain normal pigmentation in all children.'],
        ],
        answer: 'a',
        mini: 'If one parent is homozygous for a TYR variant and the other for an OCA2 variant, each child is a carrier at both loci and pigments normally: locus heterogeneity.',
        reasoning: 'interpretation',
        objectives: [`${GT}.heterogeneity`],
        steps: ['Each parent is homozygous for a recessive albinism variant.', 'If the genes differ, each child gets one variant at each gene, with a normal copy at both.', 'Two heterozygous loci → normal pigmentation → locus heterogeneity.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Beta thalassemia is an example of allelic heterogeneity.', isTrue: true, correction: 'Correct: many different HBB variants cause it.', objectives: [`${GT}.heterogeneity`], difficulty: 1 },
    ],
    clues: [],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-reciprocal',
    relevance: 'core',
    title: 'Balanced reciprocal translocations',
    discipline: 'genetics',
    system: 'multisystem',
    alsoSystems: ['reproductive'],
    topic: 'genetics-chromosomal',
    difficulty: 2,
    curriculum: ['bc-structural-chromosome.reciprocal'],
    objectives: ['Recognize balanced reciprocal translocations and their reproductive consequences'],
    citations: [MP_STRUCT, RECIP_RISK, RECIP_ABORTION],
    facts: [
      'A translocation occurs when a piece of one chromosome breaks off and attaches to another; it is balanced if no genetic material is gained or lost and unbalanced if there is a gain or loss.',
      'Balanced reciprocal translocations are among the most common structural chromosome changes (about 1 in 625); carriers are usually unaffected but produce unbalanced gametes, causing infertility, miscarriage and congenital anomalies in offspring.',
      'Balanced translocations, most of them reciprocal, are significantly more frequent in couples with repeated miscarriage.',
    ],
    factRefs: [[0], [1], [2]],
    mechanism:
      'Two chromosomes exchange segments. The carrier has all the genetic material and is usually healthy, but at meiosis the rearranged chromosomes can segregate so that a gamete has extra copies of one segment and too few of another: an unbalanced conceptus, which often miscarries or has congenital anomalies.',
    associations: ['Exchange between two chromosomes', 'Balanced: no gain or loss', 'Carrier usually healthy', 'Unbalanced gametes', 'Recurrent miscarriage', 'Detected by karyotype'],
    misconception:
      'A healthy carrier of a balanced translocation is not genetically normal for reproduction: unbalanced gametes cause miscarriage and anomalies.',
    quick:
      'Balanced reciprocal translocation: two chromosomes swap segments; carrier healthy (about 1 in 625). Unbalanced gametes → infertility, recurrent miscarriage, congenital anomalies. Karyotype both partners after recurrent miscarriage.',
    detailed: [
      'In a reciprocal translocation two chromosomes exchange segments. If no material is lost, it is balanced and the carrier is usually healthy; such translocations occur in about 1 in 625 people.',
      'The cost is reproductive: meiosis can produce gametes with extra or missing segments, leading to infertility, miscarriage or a child with congenital anomalies. Balanced translocations are more frequent in couples with repeated miscarriage, so both partners are karyotyped.',
    ],
    takeaway: 'Balanced reciprocal translocation = healthy carrier, unbalanced gametes → miscarriage.',
    related: ['gen-robertsonian', 'lab-test-choice'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A healthy woman with three miscarriages has the karyotype 46,XX,t(2;9). What explains her miscarriages?',
        options: [
          ['a', 'Her balanced translocation produces unbalanced gametes'],
          ['b', 'She is missing genetic material from chromosomes 2 and 9', 'A balanced translocation has no net gain or loss in her own cells.'],
          ['c', 'She has trisomy 9 mosaicism', 'The karyotype shows 46 chromosomes with a translocation.'],
          ['d', 'Uniparental disomy of chromosome 2', 'UPD is not shown by this karyotype.'],
          ['e', 'An autosomal recessive disease of chromosome 9', 'The finding is a structural rearrangement, not a single-gene variant.'],
        ],
        answer: 'a',
        mini: 'She carries a balanced reciprocal translocation: healthy herself, but her eggs can carry extra or missing segments, so pregnancies are often unbalanced and miscarry.',
        reasoning: 'interpretation',
        objectives: ['bc-structural-chromosome.reciprocal'],
        steps: ['46 chromosomes with t(2;9) and good health → balanced reciprocal translocation.', 'At meiosis, the rearranged chromosomes can segregate unevenly.', 'Gametes with extra or missing segments → unbalanced pregnancies → miscarriage.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'A carrier of a balanced reciprocal translocation is usually unaffected.', isTrue: true, correction: 'Correct: the risk is to offspring, through unbalanced gametes.', objectives: ['bc-structural-chromosome.reciprocal'], difficulty: 1 },
    ],
    clues: [],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-inheritance-map',
    relevance: 'core',
    title: 'Which inheritance pattern? Classic single-gene disorders',
    discipline: 'genetics',
    system: 'multisystem',
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: ['bc-ad-diseases.map'],
    objectives: ['Assign the inheritance pattern of classic disorders from a vignette'],
    citations: [MP_PATTERNS, MP_CF, MP_DM, MP_FA, MP_HEMOPHILIA],
    facts: [
      'Examples by pattern: autosomal dominant – Huntington disease, Marfan syndrome; autosomal recessive – cystic fibrosis, sickle cell disease; X-linked dominant – fragile X syndrome; X-linked recessive – hemophilia; mitochondrial – Leber hereditary optic neuropathy.',
      'Myotonic dystrophy is inherited in an autosomal dominant pattern, and Friedreich ataxia in an autosomal recessive pattern.',
      'Hemophilia A and B are X-linked recessive.',
    ],
    factRefs: [[0], [2, 3], [4]],
    mechanism:
      'Each vignette gives two kinds of clue: who is affected and how it passes (both sexes vs mostly males; vertical vs horizontal; father-to-son or not; mother-only transmission) and which disorder it is. Matching the disorder to its known pattern, and checking that against the family, gives the answer.',
    associations: ['AD: Huntington, Marfan, myotonic dystrophy, achondroplasia', 'AR: CF, sickle cell, Friedreich ataxia', 'XR: hemophilia, Duchenne', 'XD: X-linked hypophosphatemia, Rett, fragile X', 'Mitochondrial: LHON'],
    misconception:
      'A disorder seen only in boys in one small family is not necessarily X-linked: check whether the disorder itself is known to be X-linked and look for father-to-son transmission.',
    quick:
      'AD: Huntington, Marfan, myotonic dystrophy, achondroplasia, NF1. AR: CF, sickle cell, Friedreich ataxia. XR: hemophilia, Duchenne. XD: X-linked hypophosphatemia, Rett, fragile X. Mitochondrial: LHON.',
    detailed: [
      'Assigning inheritance combines the pedigree with knowledge of the disorder. Dominant disorders such as Huntington disease, Marfan syndrome, myotonic dystrophy and achondroplasia pass vertically, with male-to-male transmission. Recessive disorders such as cystic fibrosis, sickle cell disease and Friedreich ataxia appear in siblings of unaffected parents.',
      'X-linked recessive disorders such as hemophilia and Duchenne muscular dystrophy affect mainly males through carrier mothers; X-linked dominant disorders such as X-linked hypophosphatemia pass from an affected father to all daughters; mitochondrial disorders such as Leber hereditary optic neuropathy pass only through mothers.',
    ],
    takeaway: 'Name the disorder, recall its pattern, then check the family fits.',
    related: ['gen-ad', 'gen-ar', 'gen-xlr', 'gen-xld', 'gen-mito'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A 30-year-old woman has myotonia, cataracts and a conduction defect; her teenage son has the same diagnosis. Her partner is unaffected and does not carry the expansion. What is the chance that each of her future children inherits the disorder?',
        options: [
          ['a', '50%'],
          ['b', '25%', 'That would apply to an autosomal recessive disorder with two carrier parents.'],
          ['c', '100% of sons and no daughters', 'Myotonic dystrophy is autosomal, not X-linked.'],
          ['d', '100% of all children', 'This pattern fits mitochondrial inheritance, not myotonic dystrophy.'],
          ['e', '0%, because her son is already affected', 'Each pregnancy carries the same risk.'],
        ],
        answer: 'a',
        mini: 'Myotonic dystrophy is autosomal dominant, so each child of an affected heterozygote has a 50% chance of inheriting the expanded allele (and may be more severely affected through anticipation).',
        reasoning: 'prediction',
        objectives: ['bc-ad-diseases.map'],
        steps: ['Myotonia, cataracts and conduction defect → myotonic dystrophy type 1.', 'Myotonic dystrophy is autosomal dominant.', 'An affected heterozygote passes the allele to each child with 50% probability.'],
        difficulty: 3,
      },
      {
        stem: 'Two unaffected parents, both confirmed carriers of an expanded FXN allele, have a son and a daughter with Friedreich ataxia. What is the chance their next child is affected?',
        options: [
          ['a', '25%'],
          ['b', '50%', 'Fifty percent applies to children of an affected parent with a dominant disorder.'],
          ['c', '0% for daughters, 50% for sons', 'Friedreich ataxia is autosomal, not X-linked.'],
          ['d', '100%', 'Each child of two carriers can inherit a normal allele.'],
          ['e', '2/3', 'Two-thirds is the carrier chance of an unaffected sibling.'],
        ],
        answer: 'a',
        mini: 'Friedreich ataxia is autosomal recessive; both parents are carriers, so each pregnancy has a 25% chance of an affected child.',
        reasoning: 'prediction',
        objectives: ['bc-ad-diseases.map'],
        steps: ['Friedreich ataxia is autosomal recessive.', 'Affected children with unaffected parents → both parents are carriers.', 'Carrier × carrier → 25% affected with each pregnancy.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Myotonic dystrophy and Huntington disease are both autosomal dominant.', isTrue: true, correction: 'Correct: both are dominant repeat expansion disorders.', objectives: ['bc-ad-diseases.map'], difficulty: 1 },
    ],
    clues: [],
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
    id: 'seq:cftr-df508',
    relevance: 'core',
    title: 'From ΔF508 to thick mucus',
    prompt: 'Order the steps from the commonest CF mutation to airway disease.',
    steps: [
      'ΔF508 deletes phenylalanine 508 from CFTR',
      'The mutant CFTR misfolds in the endoplasmic reticulum',
      'ER quality control retains it and the proteasome degrades it',
      'Little CFTR reaches the apical membrane',
      'Chloride secretion into the airway falls',
      'Airway mucus becomes thick and sticky, causing infection',
    ],
    explanation: 'ΔF508 is a trafficking defect: the protein is made but destroyed before reaching the membrane, so chloride and water secretion fail.',
    conceptIds: ['gen-cf'],
    objectiveIds: [`${CF}.genetics`],
    difficulty: 2,
  }),
];

const matches: MatchItem[] = [
  match({
    id: 'match:repeat-disorders',
    relevance: 'core',
    title: 'Repeat, gene and pattern',
    prompt: 'Match each repeat disorder to its repeat, gene and inheritance.',
    pairs: [
      { left: 'Huntington disease', right: 'CAG in HTT, autosomal dominant' },
      { left: 'Fragile X syndrome', right: 'CGG in FMR1, X-linked' },
      { left: 'Friedreich ataxia', right: 'GAA in FXN, autosomal recessive' },
      { left: 'Myotonic dystrophy type 1', right: 'CTG in DMPK, autosomal dominant' },
    ],
    explanation: 'Huntington CAG (expands through fathers), fragile X CGG (expands through mothers), Friedreich GAA (recessive), myotonic dystrophy CTG (dominant, anticipation).',
    conceptIds: ['gen-repeats'],
    objectiveIds: [`${TN}.match`],
    difficulty: 2,
  }),
  match({
    id: 'match:imprinting-causes',
    relevance: 'core',
    title: 'Genetic alteration → imprinting disorder',
    prompt: 'Match each genetic alteration to the disorder it causes.',
    pairs: [
      { left: 'Paternal 15q11–q13 deletion', right: 'Prader–Willi syndrome' },
      { left: 'Maternal UPD 15', right: 'Prader–Willi (two maternal 15s)' },
      { left: 'Maternal 15q11–q13 deletion', right: 'Angelman syndrome' },
      { left: 'Paternal UPD 15', right: 'Angelman (two paternal 15s)' },
      { left: 'Paternal UPD of 11p15', right: 'Beckwith–Wiedemann syndrome' },
    ],
    explanation: 'Prader–Willi = no active paternal 15q genes; Angelman = no active maternal UBE3A; Beckwith–Wiedemann can result from paternal UPD of 11p15 (about 20% of cases, usually mosaic), giving two active paternal copies of growth genes such as IGF2.',
    conceptIds: ['gen-pws-angelman', 'gen-bws'],
    objectiveIds: [`${IM}.pws`, `${IM}.angelman`, `${IM}.bws`],
    difficulty: 2,
  }),
];

const cases: CaseItem[] = [
  kase({
    id: 'case:fragile-x-family',
    relevance: 'core',
    title: 'A grandfather’s quiet premutation',
    conceptIds: ['gen-repeats'],
    objectiveIds: [`${TN}.fragile-x`, `${TN}.principles`],
    difficulty: 3,
    stages: [
      { label: 'Presentation', text: 'A 5-year-old boy has speech delay, intellectual disability and avoids eye contact. He has a long narrow face and large ears.' },
      { label: 'History', text: 'His mother is healthy. Her father, also healthy, was found to carry an FMR1 premutation of 80 CGG repeats.' },
      { label: 'Laboratory', text: 'The boy’s FMR1 testing shows more than 200 CGG repeats with methylation of the gene.' },
    ],
    question: 'Which statement best explains the boy’s full mutation?',
    options: [
      { id: 'a', text: 'The premutation expanded when his mother passed it on' },
      { id: 'b', text: 'He inherited the full mutation directly from his grandfather', whyWrong: 'The grandfather had a premutation, and a boy inherits his X from his mother, not his grandfather directly.' },
      { id: 'c', text: 'His father passed a premutation to him', whyWrong: 'Sons inherit their X chromosome from their mother.' },
      { id: 'd', text: 'A new deletion of FMR1 arose in the boy', whyWrong: 'The test shows an expanded, methylated CGG repeat, not a deletion.' },
      { id: 'e', text: 'Mitochondrial heteroplasmy from his mother', whyWrong: 'FMR1 is on the X chromosome.' },
    ],
    answerId: 'a',
    explanation:
      'The grandfather passed his premutation to his daughter (all daughters of a man inherit his X). Fragile X premutations expand to full mutations during maternal transmission, so her son received a full mutation (>200 CGG, methylated, FMR1 silenced) and has fragile X syndrome.',
    mechanism: 'Grandfather premutation → daughter (obligate premutation carrier) → expansion during maternal transmission → grandson full mutation → FMR1 methylated and silenced → no FMRP.',
    takeaway: 'Fragile X premutations become full mutations through mothers.',
    differentials: [
      { name: 'Premutation in the boy', why: 'Would usually not cause the full syndrome; testing shows >200 repeats.' },
      { name: 'Autism spectrum disorder without fragile X', why: 'The FMR1 full mutation explains his findings.' },
    ],
  }),
];

export const geneticsBatch2: Bundle = {
  concepts: core.concepts,
  items: [...core.items, ...sequences, ...matches, ...cases],
};
