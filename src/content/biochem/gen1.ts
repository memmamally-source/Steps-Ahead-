import { AI_DRAFT, defineConcepts, type Bundle } from '../define';
import type { CaseItem, Citation, MatchItem, OutlineRef, SequenceItem } from '../schema';

/**
 * Biochemistry — Genetics, batch 1: inheritance patterns and pedigrees, recurrence risk, atypical
 * inheritance (codominance, penetrance and expressivity, anticipation, dominant negative effects,
 * mosaicism), and chromosomal disorders (nondisjunction, Down syndrome, trisomies 18 and 13,
 * Robertsonian translocation, 22q11.2 deletion).
 *
 * Step 1 depth. Facts come from MedlinePlus Genetics (inheritance chapter and condition pages),
 * OpenStax Biology 2e and PubMed abstracts. Recurrence risks are Mendelian probabilities computed from
 * the stated inheritance pattern. Original, AI-drafted content: DRAFT, NOT MEDICALLY REVIEWED.
 */

const MS = 'Multisystem Processes & Disorders' as const;
const listed = (area: OutlineRef['area'], section: string): OutlineRef => ({ area, section, listed: true });
const found = (area: OutlineRef['area'], section: string): OutlineRef => ({ area, section, listed: false });
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

const MP_PATTERNS = MPG('understanding/inheritance/inheritancepatterns', 'What are the different ways a genetic condition can be inherited?');
const MP_RISK = MPG('understanding/inheritance/riskassessment', 'If a genetic disorder runs in my family, what are the chances that my children will have the condition?');
const MP_PENETRANCE = MPG('understanding/inheritance/penetranceexpressivity', 'What are reduced penetrance and variable expressivity?');
const MP_ANTICIPATION = MPG('understanding/inheritance/anticipation', 'What do geneticists mean by anticipation?');
const MP_VARIANT = MPG('understanding/mutationsanddisorders/genemutation', 'What is a gene variant and how do variants occur?');
const MP_CHROMO = MPG('understanding/mutationsanddisorders/chromosomalconditions', 'Can changes in the number of chromosomes affect health and development?');
const MP_ACHON = MPG('condition/achondroplasia', 'Achondroplasia');
const MP_NF1 = MPG('condition/neurofibromatosis-type-1', 'Neurofibromatosis type 1');
const MP_HD = MPG('condition/huntington-disease', 'Huntington disease');
const MP_HEMOPHILIA = MPG('condition/hemophilia', 'Hemophilia');
const MP_XLH = MPG('condition/x-linked-hypophosphatemia', 'X-linked hypophosphatemia');
const MP_RETT = MPG('condition/rett-syndrome', 'Rett syndrome');
const MP_ALPORT = MPG('condition/alport-syndrome', 'Alport syndrome');
const MP_MTDNA = MPG('chromosome/mitochondrial-dna', 'Mitochondrial DNA');
const MP_DOWN = MPG('condition/down-syndrome', 'Down syndrome');
const MP_T18 = MPG('condition/trisomy-18', 'Trisomy 18');
const MP_T13 = MPG('condition/trisomy-13', 'Trisomy 13');
const MP_22Q = MPG('condition/22q112-deletion-syndrome', '22q11.2 deletion syndrome');
const BIO_CHROMO = OSB('13-2-chromosomal-basis-of-inherited-disorders', '13.2 Chromosomal Basis of Inherited Disorders');
const ACHON_PATERNAL = PM(32644689, 'Chamarthi VS et al. Achondroplasia: autosomal dominant with full penetrance; over 80% of cases are de novo, and advanced paternal age is a known risk factor. StatPearls');
const DOMINANCE = PM(28755412, 'Veitia RA et al. Mechanisms of Mendelian dominance: dominant negative mutations poison macromolecular complexes; haploinsufficiency from a heterozygous null allele. Clin Genet 2018');
const KACSER_BURNS = PM(7297851, 'Kacser H, Burns JA. The molecular basis of dominance: a 50% reduction of enzyme activity in heterozygotes is usually not detectable, so enzyme mutants are recessive. Genetics 1981');
const X_INACTIVATION = PM(21811421, 'Morey C, Avner P. X-inactivation: females shut down one of their two X chromosomes at random (Lyon). PLoS Genet 2011');
const T21_ORIGIN = PM(11173856, 'Petersen MB, Mikkelsen M. Nondisjunction in trisomy 21: maternal errors start mostly in meiosis I; advanced maternal age is the only well-documented risk factor. Cytogenet Cell Genet 2000');
const T21_MATERNAL_AGE = PM(19050929, 'Allen EG et al. The maternal-age association with chromosome 21 nondisjunction is restricted to errors in the egg (meiosis I and II). Hum Genet 2009');
const DOWN_ANOMALIES = PM(26578241, 'Stoll C et al. Down syndrome anomalies: heart defects most common (AV septal defect leading); duodenal atresia and Hirschsprung disease lead the digestive anomalies. Eur J Med Genet 2015');
const DOWN_TMD = PM(16998319, 'Brink DS. Transient myeloproliferative disorder (transient abnormal myelopoiesis) occurs in about 10% of Down syndrome neonates; GATA1 mutation. Adv Anat Pathol 2006');
const PATAU_TRIAD = PM(24340511, 'Caba L et al. Patau syndrome: classic triad of cleft lip/palate, microphthalmia/anophthalmia and postaxial polydactyly; scalp defects and heart anomalies. Rev Med Chir Soc Med Nat Iasi 2013');
const PATAU_HPE = PM(38974285, 'Hammou HA et al. Trisomy 13 findings include holoprosencephaly, microphthalmia, cleft lip and palate, polydactyly and heart defects. Afr Health Sci 2023');
const ROB_DEF = PM(33776621, 'Poot M, Hochstenbach R. Robertsonian translocations: fusion of two acrocentric chromosomes (13, 14, 15, 21, 22); carriers risk unbalanced offspring. Mol Syndromol 2021');
const ROB_LONG_ARMS = PM(24346783, 'Baruffi MR et al. Robertsonian translocations fuse the long arms of two acrocentric chromosomes. Sao Paulo Med J 2013');
const ROB_FAMILY = PM(26236088, 'Kolgeci S et al. A maternal rob(14;21) caused miscarriages and translocation Down syndrome. Acta Inform Med 2015');
const POUCH_DERIVATIVES = PM(32491656, 'Miles B, Srinivasan VN. The pharyngeal pouches give rise to the middle ear cavity, palatine tonsils, thymus, parathyroid glands and thyroid parafollicular cells; malformation causes DiGeorge syndrome. StatPearls 2023');
const DGS_POUCH = PM(35110278, 'Altshuler E et al. 22q11.2 microdeletion impairs pharyngeal pouch development: craniofacial, parathyroid, thymus and cardiac outflow tract anomalies. BMJ Case Rep 2022');

// Revision 1 sources.
const DGA_NEURAL_CREST = PM(1931005, 'Hong R. The DiGeorge anomaly: pharyngeal pouch derivatives fail to arise, usually from inadequate neural crest contribution; conotruncal anomalies (type B interrupted aortic arch, truncus arteriosus) are characteristic. Immunodefic Rev 1991');
const PARATHYROID_POUCHES = PM(30725888, 'Ilahi A et al. Superior parathyroids derive from the fourth pharyngeal pouch and inferior parathyroids from the third. StatPearls 2023');
const MITO_THRESHOLD = PM(32906214, 'McCormick EM et al. Heteroplasmy can mask the disease phenotype unless a threshold proportion of mutant mtDNA is reached. Hum Mutat 2020');
const DOWN_AAI = PM(2966926, 'Davidson RG. The AAP Committee on Sports Medicine reported a remarkably high incidence of atlantoaxial instability in Down syndrome; whether radiographic instability predicts dislocation is uncertain. Pediatrics 1988');
const DUODENAL_ATRESIA = PM(8337875, 'Grosfeld JL, Rescorla FJ. Duodenal atresia and stenosis: Down syndrome common; diagnosis by a double-bubble sign on abdominal radiograph in most infants. World J Surg 1993');
const T18_FEATURES = PM(18232589, 'Shaw J. Trisomy 18: prominent occiput, micrognathia, clenched fists with overlapping fingers, rocker-bottom feet. Neonatal Netw 2008');

const AD = 'bc-ad-inheritance';
const AR = 'bc-ar-inheritance';
const XL = 'bc-xlinked-inheritance';
const MT = 'bc-mito-inheritance';
const GT = 'bc-gen-terms';
const TR = 'bc-autosomal-trisomies';
const SC = 'bc-structural-chromosome';

const core = defineConcepts([
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-ad',
    relevance: 'core',
    title: 'Autosomal dominant inheritance: pedigrees, risk and mechanisms',
    discipline: 'genetics',
    system: 'multisystem',
    topic: 'genetics-inheritance',
    difficulty: 2,
    curriculum: [`${AD}.pedigree`, `${AD}.risk`, `${AD}.mechanisms`],
    objectives: ['Recognize an autosomal dominant pedigree', 'Calculate recurrence risk and recognize new mutations', 'Explain how dominant mutations cause disease'],
    citations: [MP_PATTERNS, MP_RISK, MP_ACHON, ACHON_PATERNAL, MP_NF1, DOMINANCE],
    facts: [
      'In autosomal dominant inheritance one altered copy of the gene in each cell is enough to cause the disorder; an affected person may inherit it from an affected parent or have a new variant with no family history (for example Huntington disease, Marfan syndrome).',
      'A person with an autosomal dominant disorder has a 50 percent chance of passing the altered gene to each child; a new (de novo) variant arising in an egg or sperm or early embryo gives an affected child of unaffected parents, who can then pass it on.',
      'About 80 percent of people with achondroplasia are born to average-height parents because of new FGFR3 variants, and advanced paternal age is a known risk factor for these de novo mutations. Inheriting two altered FGFR3 copies causes a severe form with extreme bone shortening and an underdeveloped rib cage.',
      'About half of neurofibromatosis type 1 cases are inherited from an affected parent; the rest are new NF1 mutations.',
      'Dominance can arise when a defective subunit poisons a protein complex (dominant negative effect) or when one null allele leaves too little product (haploinsufficiency).',
    ],
    factRefs: [[0], [1], [2, 3], [4], [5]],
    mechanism:
      'One abnormal allele is enough. That happens when half the normal amount of product is not sufficient (haploinsufficiency), when the abnormal protein interferes with the normal one in a multi-part structure (dominant negative), or when the mutant protein gains a harmful function. Because autosomes pass from either parent to either child, the trait appears in every generation, in both sexes, with father-to-son transmission.',
    associations: ['Every generation', 'Both sexes equally', 'Male-to-male transmission', '50% recurrence', 'De novo mutation', 'Advanced paternal age (achondroplasia)', 'Haploinsufficiency', 'Dominant negative', 'Homozygous more severe'],
    misconception:
      'An affected child with unaffected parents does not rule out a dominant disorder: a new mutation is common in achondroplasia and neurofibromatosis type 1.',
    quick:
      'AD: every generation, both sexes, male-to-male transmission; affected × unaffected → 50% each child. New mutations are common (achondroplasia ~80%, advanced paternal age; NF1 ~50%). Mechanisms: haploinsufficiency, dominant negative, gain of function; homozygotes are often more severe.',
    detailed: [
      'An autosomal dominant pedigree shows affected people in every generation, males and females equally, and transmission from father to son (which excludes X-linked inheritance). Each child of an affected heterozygote has a 50% chance of inheriting the variant.',
      'Many dominant disorders also arise de novo: about 80% of achondroplasia, linked to advanced paternal age, and about half of neurofibromatosis type 1. A single abnormal allele causes disease through haploinsufficiency, a dominant negative effect in a multi-part protein, or a gain of function; two abnormal alleles, as in homozygous achondroplasia, are usually more severe.',
    ],
    takeaway: 'AD = vertical, both sexes, male-to-male, 50% risk; new mutations common.',
    related: ['gen-ar', 'gen-dominant-negative'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'In a three-generation pedigree, a disorder affects a grandfather, two of his sons and one daughter, and a son of one affected son. Unaffected people never have affected children. Which inheritance pattern fits best?',
        options: [
          ['a', 'Autosomal dominant'],
          ['b', 'X-linked recessive', 'X-linked traits are never passed from father to son, but here an affected son has an affected son.'],
          ['c', 'X-linked dominant', 'An affected father would pass an X-linked dominant trait to all daughters and no sons.'],
          ['d', 'Autosomal recessive', 'Recessive disorders usually skip generations; affected people in three successive generations make this much less likely.'],
          ['e', 'Mitochondrial', 'Fathers do not transmit mitochondrial disorders.'],
        ],
        answer: 'a',
        mini: 'Every generation, both sexes, and father-to-son transmission = autosomal dominant. Male-to-male transmission excludes X-linked and mitochondrial inheritance.',
        reasoning: 'interpretation',
        objectives: [`${AD}.pedigree`],
        steps: ['The trait appears in every generation in both sexes → dominant.', 'An affected father has an affected son → not X-linked (fathers give sons a Y).', 'Fathers transmit it → not mitochondrial → autosomal dominant.'],
        difficulty: 3,
      },
      {
        stem: 'A woman heterozygous for a fully penetrant autosomal dominant disorder and a man who does not carry the variant plan a pregnancy. What is the chance that their child will be affected?',
        options: [
          ['a', '50%'],
          ['b', '25%', 'Twenty-five percent is the risk for two carriers of a recessive disorder.'],
          ['c', '100%', 'A heterozygous parent passes the altered allele to only half of the children on average.'],
          ['d', '67%', 'Two-thirds is the carrier chance of an unaffected sibling in a recessive disorder.'],
          ['e', '0%, because the father is unaffected', 'One altered copy from either parent is enough in dominant inheritance.'],
        ],
        answer: 'a',
        mini: 'A heterozygote passes the altered allele to each child with 50% probability; one copy is enough to cause a dominant disorder.',
        reasoning: 'recall',
        objectives: [`${AD}.risk`],
        difficulty: 1,
      },
      {
        stem: 'A newborn has achondroplasia. Both parents are of average height; the father is 52 years old. What is the most likely explanation?',
        options: [
          ['a', 'A new FGFR3 mutation, more likely with older fathers'],
          ['b', 'Both parents are carriers of a recessive allele', 'Achondroplasia is autosomal dominant, not recessive.'],
          ['c', 'Maternal nondisjunction of chromosome 4', 'Achondroplasia is a single-gene disorder, not an aneuploidy.'],
          ['d', 'An X-linked mutation from the mother', 'FGFR3 is autosomal and the disorder is dominant.'],
          ['e', 'Uniparental disomy from the father', 'The usual cause of a sporadic case is a new mutation.'],
        ],
        answer: 'a',
        mini: 'About 80% of achondroplasia arises from new FGFR3 mutations in children of average-height parents, and advanced paternal age is a known risk factor.',
        reasoning: 'identification',
        objectives: [`${AD}.risk`],
        difficulty: 2,
      },
      {
        stem: 'Two people with achondroplasia (both heterozygous) have children. Which outcome distribution is expected, and why is one group most severely affected?',
        options: [
          ['a', '1/4 unaffected, 1/2 achondroplasia, 1/4 severe homozygous form'],
          ['b', '1/2 unaffected, 1/2 achondroplasia', 'With two heterozygous parents, a quarter of children inherit two altered copies.'],
          ['c', 'All children have achondroplasia', 'Each parent can pass the normal allele, so a quarter are unaffected.'],
          ['d', '3/4 unaffected, 1/4 achondroplasia', 'This is a recessive pattern; achondroplasia is dominant.'],
          ['e', '1/4 unaffected, 3/4 equally affected', 'Inheriting two altered copies causes a much more severe form.'],
        ],
        answer: 'a',
        mini: 'Two heterozygotes: 1/4 normal, 1/2 heterozygous (achondroplasia), 1/4 homozygous. Two altered FGFR3 copies cause a severe form with extreme bone shortening and a small rib cage.',
        reasoning: 'prediction',
        objectives: [`${AD}.risk`, `${AD}.mechanisms`],
        steps: ['Each parent passes the altered allele with probability 1/2.', 'So children are 1/4 normal, 1/2 heterozygous and 1/4 homozygous.', 'Two altered copies give a stronger effect → the homozygous quarter is most severe.'],
        difficulty: 3,
      },
      {
        stem: 'Achondroplasia is caused by FGFR3 variants that make the receptor overly active. Why is a child who inherits two such alleles much more severely affected than a heterozygous parent?',
        options: [
          ['a', 'Two overactive alleles give more receptor overactivity'],
          ['b', 'The second allele converts the disorder to recessive', 'The disorder stays dominant; a second allele adds to the effect.'],
          ['c', 'Homozygosity causes loss of all FGFR3 function', 'The variants increase activity; two copies increase it further.'],
          ['d', 'The child also inherits mitochondrial DNA from both parents', 'Mitochondrial DNA comes from the mother only and is unrelated.'],
          ['e', 'Two copies cause anticipation by repeat expansion', 'Achondroplasia is not a repeat expansion disorder.'],
        ],
        answer: 'a',
        mini: 'Achondroplasia is a gain-of-function (overactive FGFR3) dominant disorder. Two altered copies double the abnormal signal, giving a severe form with extreme bone shortening and a small rib cage.',
        reasoning: 'mechanism',
        objectives: [`${AD}.mechanisms`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'Male-to-male transmission of a trait excludes X-linked inheritance.', isTrue: true, correction: 'Correct: fathers pass a Y, not an X, to their sons.', objectives: [`${AD}.pedigree`], difficulty: 1 },
      { statement: 'Haploinsufficiency means one normal copy of a gene does not make enough product for normal function.', isTrue: true, correction: 'Correct: a heterozygous null allele can then cause a dominant disorder.', objectives: [`${AD}.mechanisms`], difficulty: 2 },
    ],
    clues: [
      { answer: 'DENOVO', clue: 'Describes a new variant not present in either parent (two words, run together)', objectives: [`${AD}.risk`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-ar',
    relevance: 'core',
    title: 'Autosomal recessive inheritance: pedigrees, risk and why enzyme defects are recessive',
    discipline: 'genetics',
    system: 'multisystem',
    topic: 'genetics-inheritance',
    difficulty: 2,
    curriculum: [`${AR}.pedigree`, `${AR}.risk`, `${AR}.enzymes`],
    objectives: ['Recognize an autosomal recessive pedigree', 'Calculate carrier and recurrence risks', 'Explain why most enzyme deficiencies are recessive'],
    citations: [MP_PATTERNS, MP_RISK, KACSER_BURNS],
    facts: [
      'In autosomal recessive inheritance variants occur in both copies of the gene; the parents of an affected person each carry one copy and typically have no signs, and these disorders are typically not seen in every generation (for example cystic fibrosis, sickle cell disease).',
      'Two carriers have, with each pregnancy, a 25 percent chance of an affected child, a 50 percent chance of an unaffected carrier and a 25 percent chance of a child who is neither; the chance is the same for each pregnancy. If only one parent is a carrier, no child is affected and each has a 50 percent chance of being a carrier.',
      'Enzymes work within networks, so halving one enzyme’s activity, as in a heterozygote, usually causes no detectable change in the pathway’s output; enzyme mutants are therefore usually recessive.',
    ],
    factRefs: [[0], [1], [2]],
    mechanism:
      'A recessive disorder needs two altered copies, so it appears in children of two unaffected carriers, often in a single sibship. Carrier × carrier gives 1/4 affected, 1/2 carriers, 1/4 neither. For enzymes, half the normal activity in a carrier is usually enough to keep the pathway working, which is why most inborn errors of metabolism are recessive.',
    associations: ['Skips generations (horizontal)', 'Affected siblings', 'Unaffected carrier parents', 'Consanguinity', 'Carrier × carrier → 25% affected', 'Unaffected sibling → 2/3 carrier', '50% enzyme activity suffices'],
    misconception:
      'A 25% risk does not mean that after one affected child the next three will be unaffected: the risk is the same for every pregnancy.',
    quick:
      'AR: affected siblings of unaffected parents; often skips generations; consanguinity raises risk. Carrier × carrier → 25% affected, 50% carrier, 25% neither (each pregnancy). Unaffected sibling of an affected child → 2/3 carrier. Most enzyme defects are recessive: 50% activity usually suffices.',
    detailed: [
      'Recessive disorders cluster within a sibship: affected brothers and sisters whose parents are unaffected carriers. Shared ancestry (consanguinity) makes it likelier that both parents carry the same rare allele. The risk of 25% applies independently to each pregnancy.',
      'An unaffected child of two carriers cannot be the affected genotype, so of the three remaining equally likely outcomes, two are carriers: a 2/3 carrier probability. Most enzyme deficiencies are recessive because pathways are buffered: a carrier’s half-normal enzyme activity usually keeps the pathway’s output normal.',
    ],
    takeaway: 'AR = horizontal; carrier × carrier 25%; unaffected sibling 2/3 carrier; enzymes are usually recessive.',
    related: ['gen-ad', 'gen-xlr'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'Two unaffected first cousins have three children; two (a son and a daughter) have the same metabolic disorder. No other relatives in four generations are affected. Which inheritance pattern is most likely?',
        options: [
          ['a', 'Autosomal recessive'],
          ['b', 'Autosomal dominant', 'Dominant disorders appear in every generation; here both parents are unaffected.'],
          ['c', 'X-linked recessive', 'An affected daughter of an unaffected father makes X-linked recessive unlikely.'],
          ['d', 'Mitochondrial', 'Mitochondrial disorders pass from an affected mother to all her children.'],
          ['e', 'X-linked dominant', 'An X-linked dominant trait would appear in a parent.'],
        ],
        answer: 'a',
        mini: 'Affected siblings of both sexes with unaffected (consanguineous) parents and no other affected relatives = autosomal recessive.',
        reasoning: 'interpretation',
        objectives: [`${AR}.pedigree`],
        steps: ['Both sexes affected, but the parents are not → recessive.', 'An affected daughter with an unaffected father → not X-linked recessive.', 'Consanguinity raises the chance both parents carry the same allele → autosomal recessive.'],
        difficulty: 3,
      },
      {
        stem: 'A couple, both shown to be carriers, has a child with cystic fibrosis. Their unaffected daughter asks her chance of being a carrier. What is it?',
        options: [
          ['a', '2/3'],
          ['b', '1/2', 'One half ignores that the affected genotype is already excluded for her.'],
          ['c', '1/4', 'One quarter is the chance of an affected child, not of a carrier.'],
          ['d', '3/4', 'Three quarters is the chance that a child of two carriers is unaffected.'],
          ['e', '1/3', 'One third is her chance of carrying no altered allele.'],
        ],
        answer: 'a',
        mini: 'Both parents are carriers. An unaffected child is one of three equally likely genotypes (AA, Aa, aA), two of which are carriers: 2/3.',
        reasoning: 'multistep',
        objectives: [`${AR}.risk`],
        steps: ['An affected child means both parents are carriers.', 'Their children are 1/4 AA, 1/2 Aa, 1/4 aa.', 'She is unaffected, so aa is excluded: Aa is 2 of the remaining 3 parts → 2/3.'],
        difficulty: 4,
      },
      {
        stem: 'Both parents carry the same autosomal recessive allele. Their first child is affected. What is the chance that their next child is affected?',
        options: [
          ['a', '25%'],
          ['b', '0%, because they have already had their affected child', 'Each pregnancy is independent; the risk does not fall after an affected child.'],
          ['c', '50%', 'Fifty percent is the chance of a carrier child.'],
          ['d', '75%', 'Seventy-five percent is the chance of an unaffected child.'],
          ['e', '100%', 'Each parent may pass the normal allele, so not every child is affected.'],
        ],
        answer: 'a',
        mini: 'Carrier × carrier gives a 25% chance of an affected child with every pregnancy, whatever happened before.',
        reasoning: 'recall',
        objectives: [`${AR}.risk`],
        difficulty: 1,
      },
      {
        stem: 'Why are most inherited enzyme deficiencies autosomal recessive rather than dominant?',
        options: [
          ['a', 'Half of the normal enzyme activity is usually enough'],
          ['b', 'Enzyme genes are all on the X chromosome', 'Most enzyme genes are autosomal.'],
          ['c', 'Mutant enzymes always poison the normal enzyme', 'Poisoning the normal protein is a dominant negative effect, which would give dominance.'],
          ['d', 'Heterozygotes make no enzyme at all', 'Heterozygotes keep one working allele and make about half the enzyme.'],
          ['e', 'Enzyme deficiencies arise only by new mutation', 'Most are inherited from carrier parents.'],
        ],
        answer: 'a',
        mini: 'Enzymes act in buffered networks, so a carrier’s 50% activity usually keeps the pathway working; disease needs two altered copies.',
        reasoning: 'mechanism',
        objectives: [`${AR}.enzymes`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'Consanguinity increases the risk of autosomal recessive disorders.', isTrue: true, correction: 'Correct: related parents are more likely to carry the same rare allele.', objectives: [`${AR}.pedigree`], difficulty: 1 },
      { statement: 'If one parent is a carrier and the other is not, each child has a 25% chance of an autosomal recessive disorder.', isTrue: false, correction: 'No child is affected; each has a 50% chance of being a carrier.', objectives: [`${AR}.risk`], difficulty: 2 },
    ],
    clues: [
      { answer: 'CONSANGUINITY', clue: 'Parents related by descent, raising recessive risk', objectives: [`${AR}.pedigree`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-xlr',
    relevance: 'core',
    title: 'X-linked recessive inheritance and X-inactivation',
    discipline: 'genetics',
    system: 'multisystem',
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${XL}.xr-pedigree`, `${XL}.xr-risk`, `${XL}.lyonization`],
    objectives: ['Recognize an X-linked recessive pedigree', 'Calculate X-linked recessive risks', 'Explain X-inactivation and why some females are affected'],
    citations: [MP_PATTERNS, MP_RISK, MP_HEMOPHILIA, X_INACTIVATION, MP_CHROMO],
    facts: [
      'In X-linked recessive inheritance one altered copy causes the disorder in males, who have one X, whereas females usually need both copies altered, so males are affected much more often; fathers cannot pass X-linked traits to their sons (for example hemophilia).',
      'The sons of a man with an X-linked recessive disorder are unaffected and all his daughters are carriers. A carrier woman, with each pregnancy, has a 50 percent chance that a son is affected and a 50 percent chance that a daughter is a carrier.',
      'Early in embryonic development females permanently inactivate one of their two X chromosomes at random in each somatic cell (X-inactivation, described by Mary Lyon).',
      'A female carrier of hemophilia can be affected when the X chromosome carrying the normal F8 or F9 copy is inactivated in most cells.',
      'Women with Turner syndrome usually have only one X chromosome in every cell (45,X).',
    ],
    factRefs: [[0], [1], [3], [2], [4]],
    // Fact 4 is verified; applying it (a 45,X woman expresses an X-linked recessive allele like a male) is reasoned.
    mechanism:
      'Males have one X, so a single recessive allele shows. Females have two, but in each cell one X is silenced at random early in development. A carrier is usually protected because about half her cells use the normal X; if inactivation is skewed so most cells silence the normal X, or if she has only one X (Turner syndrome), she can be affected.',
    associations: ['Mostly males', 'No male-to-male transmission', 'Carrier mothers', 'Affected father → all daughters carriers', 'Carrier mother → 50% of sons affected', 'Random X-inactivation (lyonization)', 'Skewed inactivation', 'Turner syndrome (45,X)'],
    misconception:
      'Daughters of an affected man are not at 50% risk of being carriers: every daughter receives his X, so all are obligate carriers.',
    quick:
      'XR: mostly males; no male-to-male; carrier mothers. Affected father → all daughters carriers, no sons affected. Carrier mother → 50% of sons affected, 50% of daughters carriers. Females affected by skewed X-inactivation or 45,X (Turner).',
    detailed: [
      'An X-linked recessive pedigree shows affected males related through unaffected females, often passing from grandfather to grandson through a carrier daughter, and never father-to-son transmission. Every daughter of an affected man inherits his X and is a carrier; each son of a carrier mother has a 50% chance of being affected.',
      'Females are protected by having two X chromosomes, but each cell keeps only one active: X-inactivation is random and permanent early in development. If, by chance, most cells inactivate the X carrying the normal allele, a carrier can show disease (for example a symptomatic hemophilia carrier). A woman with Turner syndrome (45,X) has a single X and can be affected like a male.',
    ],
    takeaway: 'XR = affected males via carrier females; no male-to-male; X-inactivation explains affected carriers.',
    related: ['gen-xld', 'gen-ar'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A man has hemophilia A. Testing shows his partner does not carry an F8 variant. What are the risks for their children?',
        options: [
          ['a', 'All daughters carriers; no sons affected'],
          ['b', 'Half of sons affected; half of daughters carriers', 'That is the pattern for a carrier mother, not an affected father.'],
          ['c', 'All sons affected; no daughters carriers', 'A father passes his Y, not his X, to sons.'],
          ['d', 'Each child has a 25% chance of being affected', 'Twenty-five percent is the autosomal recessive carrier × carrier risk.'],
          ['e', 'Half of all children affected regardless of sex', 'That is autosomal dominant inheritance.'],
        ],
        answer: 'a',
        mini: 'An affected father gives his X to every daughter (all carriers) and his Y to every son (none affected).',
        reasoning: 'prediction',
        objectives: [`${XL}.xr-risk`],
        steps: ['The father’s only X carries the F8 variant.', 'Every daughter receives that X → all are carriers.', 'Every son receives his Y → none affected (their X comes from the mother).'],
        difficulty: 3,
      },
      {
        stem: 'Several men in a family have the same bleeding disorder. An affected man’s grandson through his unaffected daughter is affected, but none of the affected men’s sons are. Which inheritance pattern fits?',
        options: [
          ['a', 'X-linked recessive'],
          ['b', 'Autosomal dominant', 'Dominant inheritance would usually affect the daughter, and father-to-son transmission would be expected.'],
          ['c', 'Autosomal recessive', 'Recessive inheritance can occasionally produce a similar picture, but affected males only, in different branches linked through unaffected women and never father to son, fits X-linked recessive far better.'],
          ['d', 'Mitochondrial', 'Affected men cannot transmit mitochondrial disorders.'],
          ['e', 'Y-linked', 'A Y-linked trait would pass from father to every son.'],
        ],
        answer: 'a',
        mini: 'Affected males linked through unaffected females, with no male-to-male transmission, is best explained by X-linked recessive inheritance (as in hemophilia). Other patterns can mimic it in a small family, but are much less likely.',
        reasoning: 'interpretation',
        objectives: [`${XL}.xr-pedigree`],
        steps: ['Only males are affected, and never father to son.', 'The disorder passes from an affected man through his unaffected (likely carrier) daughter to her son.', 'That pattern is most consistent with X-linked recessive inheritance.'],
        difficulty: 3,
      },
      {
        stem: 'A woman is a proven carrier of hemophilia A but has prolonged bleeding after dental extraction and a low factor VIII level. What best explains her symptoms?',
        options: [
          ['a', 'Skewed X-inactivation silencing the normal F8 allele'],
          ['b', 'Dominant inheritance of hemophilia A', 'Hemophilia A is X-linked recessive; most carriers are unaffected.'],
          ['c', 'A mitochondrial F8 mutation', 'F8 is on the X chromosome, not in mitochondrial DNA.'],
          ['d', 'Both of her X chromosomes are active in every cell', 'In each cell only one X stays active.'],
          ['e', 'Anticipation of a repeat expansion', 'Hemophilia A is not caused by an expanding repeat.'],
        ],
        answer: 'a',
        mini: 'X-inactivation is random. If most cells happen to silence the X carrying the normal F8 copy, a carrier makes too little factor VIII and bleeds.',
        reasoning: 'mechanism',
        objectives: [`${XL}.lyonization`],
        difficulty: 3,
      },
      {
        stem: 'A girl with Turner syndrome (45,X) inherited her single X chromosome from her mother, a carrier of hemophilia A. What is expected?',
        options: [
          ['a', 'She can have hemophilia A, like an affected boy'],
          ['b', 'She is protected by X-inactivation of her abnormal X', 'With only one X there is no second, normal X to rely on.'],
          ['c', 'She will be an unaffected carrier like her mother', 'Carriers are protected by a second, normal X, which she lacks.'],
          ['d', 'Turner syndrome prevents expression of X-linked genes', 'Her single X is active and expressed in every cell.'],
          ['e', 'Her risk is 25%, as in autosomal recessive inheritance', 'With one X carrying the variant, there is no remaining chance of a normal copy.'],
        ],
        answer: 'a',
        mini: 'Females are usually protected because, with random X-inactivation, about half their cells use a normal X. A 45,X girl has a single X; if it carries the F8 variant, every cell lacks a normal copy and she can have hemophilia A.',
        reasoning: 'prediction',
        objectives: [`${XL}.lyonization`],
        steps: ['Carrier females are protected by a second, normal X active in some cells.', 'A 45,X girl has only one X, inherited here from her carrier mother.', 'If that X carries the F8 variant, no cell has a normal copy → she can be affected like a male.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Every daughter of a man with an X-linked recessive disorder is a carrier.', isTrue: true, correction: 'Correct: each daughter receives his only X chromosome.', objectives: [`${XL}.xr-risk`], difficulty: 1 },
      { statement: 'In females, the same X chromosome (always the paternal one) is inactivated in every cell.', isTrue: false, correction: 'X-inactivation is random in each cell early in development.', objectives: [`${XL}.lyonization`], difficulty: 1 },
    ],
    clues: [
      { answer: 'LYONIZATION', clue: 'Random inactivation of one X chromosome in female cells', objectives: [`${XL}.lyonization`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-xld',
    relevance: 'core',
    title: 'X-linked dominant inheritance',
    discipline: 'genetics',
    system: 'multisystem',
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${XL}.xd-pedigree`],
    objectives: ['Recognize an X-linked dominant pedigree and its classic disorders'],
    citations: [MP_PATTERNS, MP_RISK, MP_XLH, MP_RETT, MP_ALPORT],
    facts: [
      'In X-linked dominant disorders one altered copy is enough in males and in females; females may be less severely affected, and there is no male-to-male transmission (fragile X syndrome is listed as an example).',
      'A man with an X-linked dominant disorder passes it to all his daughters and none of his sons; an affected woman has a 50 percent chance of passing it to each child, son or daughter.',
      'X-linked hypophosphatemia causes low blood phosphate with rickets in children and osteomalacia in adults; females with one PHEX variant typically have similar features to affected males.',
      'Classic Rett syndrome (MECP2) has an X-linked dominant pattern, affects mostly females and often arises from new mutations; males with MECP2 mutations often die in infancy.',
      'About two-thirds of Alport syndrome (kidney disease with hematuria, sensorineural hearing loss, eye abnormalities) is X-linked (COL4A5), with males more severely affected than females.',
    ],
    factRefs: [[0], [1], [2], [3], [4]],
    mechanism:
      'One altered X is enough to cause disease. A father gives his X to every daughter and his Y to every son, so all daughters and no sons are affected. A heterozygous mother passes the altered X to half of her children of either sex. Females are often milder because, with X-inactivation, some of their cells use the normal X.',
    associations: ['Affected father → all daughters, no sons', 'Affected mother → 50% of children', 'More affected females than males', 'X-linked hypophosphatemia', 'Rett syndrome (MECP2)', 'Fragile X', 'Alport syndrome (COL4A5)'],
    misconception:
      'An affected father with only affected daughters is not chance: he passes his X to every daughter, which is the signature of X-linked dominant inheritance.',
    quick:
      'XD: affected father → all daughters, no sons; affected mother → 50% of sons and daughters; no male-to-male transmission. Examples: X-linked hypophosphatemic rickets, Rett syndrome (mostly females; males often die in infancy), fragile X, X-linked Alport syndrome.',
    detailed: [
      'X-linked dominant disorders need only one altered X. An affected man passes it to all daughters and to no sons; an affected woman passes it to half of her sons and half of her daughters, which can resemble autosomal dominant inheritance until the father-to-daughter pattern is examined.',
      'Classic examples: X-linked hypophosphatemia (rickets and osteomalacia from low phosphate), Rett syndrome (MECP2; mostly girls, often new mutations, usually lethal in male infancy), fragile X syndrome and most Alport syndrome (COL4A5; hematuria, hearing loss, eye changes; more severe in males).',
    ],
    takeaway: 'XD = father to all daughters, no sons; mother to half of all children.',
    related: ['gen-xlr'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A man with hypophosphatemic rickets has four daughters and three sons with a woman who does not carry the variant. All four daughters have low phosphate; none of the sons does. Which inheritance pattern explains this?',
        options: [
          ['a', 'X-linked dominant'],
          ['b', 'X-linked recessive', 'Daughters of an affected man would be carriers, usually unaffected.'],
          ['c', 'Autosomal dominant', 'Autosomal dominant inheritance would affect sons and daughters equally.'],
          ['d', 'Autosomal recessive', 'An affected parent with an unaffected partner would rarely have affected children.'],
          ['e', 'Mitochondrial', 'Fathers do not pass on mitochondrial disorders.'],
        ],
        answer: 'a',
        mini: 'Affected father → all daughters affected and no sons = X-linked dominant, as in X-linked hypophosphatemia.',
        reasoning: 'interpretation',
        objectives: [`${XL}.xd-pedigree`],
        steps: ['The father gives his X to every daughter and his Y to every son.', 'All daughters affected and no sons → the trait travels on his X.', 'One copy is enough in the daughters → X-linked dominant.'],
        difficulty: 3,
      },
      {
        stem: 'A girl develops normally until 12 months, then loses purposeful hand use and speech and develops repetitive hand movements. Most cases of this disorder occur in girls. Which gene and inheritance pattern are involved?',
        options: [
          ['a', 'MECP2, X-linked dominant'],
          ['b', 'FMR1, autosomal recessive', 'FMR1 causes fragile X syndrome, which is X-linked.'],
          ['c', 'DMD, X-linked recessive', 'DMD causes Duchenne muscular dystrophy, mainly in boys.'],
          ['d', 'HTT, autosomal dominant', 'HTT causes Huntington disease in adults.'],
          ['e', 'A mitochondrial gene, maternal inheritance', 'Mitochondrial disorders affect both sexes through the mother.'],
        ],
        answer: 'a',
        mini: 'Rett syndrome: MECP2 mutation, X-linked dominant, mostly in girls and often new; affected males often die in infancy.',
        reasoning: 'identification',
        objectives: [`${XL}.xd-pedigree`],
        relevance: 'supplementary',
        relevanceNote: 'The clinical details of Rett syndrome are taught with Neurology; its X-linked dominant pattern is the core point here.',
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'A man with an X-linked dominant disorder passes it to all of his daughters.', isTrue: true, correction: 'Correct: each daughter receives his only X chromosome; sons receive his Y.', objectives: [`${XL}.xd-pedigree`], difficulty: 1 },
    ],
    clues: [
      { answer: 'RICKETS', clue: 'Childhood bone disease of X-linked hypophosphatemia', objectives: [`${XL}.xd-pedigree`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-mito',
    relevance: 'core',
    title: 'Mitochondrial inheritance and heteroplasmy',
    discipline: 'genetics',
    system: 'multisystem',
    topic: 'genetics-inheritance',
    difficulty: 2,
    curriculum: [`${MT}.pattern`],
    objectives: ['Recognize maternal transmission to all children', 'Explain variable expression by heteroplasmy'],
    citations: [MP_PATTERNS, MP_RISK, MP_MTDNA, MITO_THRESHOLD],
    facts: [
      'Mitochondrial (maternal) inheritance applies to genes in mitochondrial DNA. Only egg cells contribute mitochondria to the embryo, so only females pass on mitochondrial variants; these disorders can appear in every generation and affect both sexes, but fathers do not pass them on (for example Leber hereditary optic neuropathy).',
      'A woman with a disorder caused by a mitochondrial DNA change passes the variant to all of her children; the children of an affected man do not inherit it.',
      'Cells can contain a mix of mitochondria with and without a variant (heteroplasmy), and the severity of many mitochondrial disorders is thought to depend on the percentage of mitochondria carrying the change.',
      'Heteroplasmy can mask the disease unless a threshold proportion of mutant mitochondrial DNA is reached, so a child who inherits a maternal variant may be mildly affected or unaffected.',
    ],
    factRefs: [[0], [1], [2], [3]],
    mechanism:
      'The embryo’s mitochondria all come from the egg, so a mother can pass a mitochondrial DNA variant to any of her children and a father to none. Transmission does not guarantee disease: each cell carries many mitochondrial genomes, the share carrying the variant (heteroplasmy) differs between children and tissues, and symptoms appear only above a threshold, so relatives can range from unaffected to severely ill.',
    associations: ['Maternal transmission', 'Variant passed to children of an affected mother', 'Never from father', 'Both sexes affected', 'Heteroplasmy', 'Tissue distribution', 'Threshold effect', 'Variable severity, some unaffected', 'Leber hereditary optic neuropathy'],
    misconception:
      'Mitochondrial inheritance is not X-linked: sons and daughters of an affected mother are both at risk, and affected men never transmit it.',
    quick:
      'Mitochondrial: transmitted only by mothers (to sons and daughters), never by fathers. Disease is not certain in every child: heteroplasmy, tissue distribution and a threshold effect give variable severity, and some children are unaffected. Example: Leber hereditary optic neuropathy.',
    detailed: [
      'Mitochondria are inherited from the egg, so a mitochondrial DNA variant passes from a mother to her sons and daughters, while affected men have unaffected children. The pattern can look dominant (every generation) but always runs through women.',
      'Each cell has many copies of mitochondrial DNA. When normal and variant copies coexist (heteroplasmy), the proportion in each child and tissue varies, and disease appears only when the mutant share passes a threshold. That is why siblings who all inherited the variant can range from unaffected to severely ill.',
    ],
    takeaway: 'Mitochondrial = through mothers, never fathers; heteroplasmy and thresholds make expression variable.',
    related: ['gen-ad'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'In a family with a neuromuscular disorder, an affected woman has four children: three are affected, from mild to severe, and one is unaffected. Her affected brother’s children are all unaffected. Which mechanism explains both the pattern and the variability?',
        options: [
          ['a', 'Mitochondrial inheritance with heteroplasmy'],
          ['b', 'Autosomal dominant with reduced penetrance', 'The brother’s children would then be at 50% risk, yet none is affected.'],
          ['c', 'X-linked recessive with skewed X-inactivation', 'X-linked recessive disorders affect mainly sons, not all children.'],
          ['d', 'Autosomal recessive with consanguinity', 'Recessive disorders do not pass to all children of one parent.'],
          ['e', 'Anticipation from a repeat expansion', 'Anticipation does not explain why only the mother transmits it.'],
        ],
        answer: 'a',
        mini: 'Transmission through the mother but never the father = mitochondrial. Different proportions of variant mtDNA (heteroplasmy) and a threshold effect explain the range from unaffected to severe.',
        reasoning: 'interpretation',
        objectives: [`${MT}.pattern`],
        steps: ['The mother transmits to her children; the affected man transmits to none.', 'That is the signature of mitochondrial (maternal) inheritance.', 'Variable severity, including an unaffected child, reflects different proportions of mutant mtDNA (heteroplasmy) and a threshold effect.'],
        difficulty: 3,
      },
      {
        stem: 'Why do men with a mitochondrial DNA disorder not pass it to their children?',
        options: [
          ['a', 'Only the egg contributes mitochondria to the embryo'],
          ['b', 'Mitochondrial genes are on the Y chromosome', 'Mitochondrial DNA is separate from the nuclear chromosomes.'],
          ['c', 'Sperm mitochondrial DNA is always normal', 'The point is that sperm mitochondria are not passed on, whatever their DNA.'],
          ['d', 'The disorder is X-linked recessive', 'X-linked recessive disorders pass from affected men to all daughters as carriers.'],
          ['e', 'Men have heteroplasmy but women do not', 'Heteroplasmy occurs in both sexes and does not explain transmission.'],
        ],
        answer: 'a',
        mini: 'The embryo’s mitochondria come only from the egg, so mitochondrial DNA variants pass from mothers to all their children and never from fathers.',
        reasoning: 'mechanism',
        objectives: [`${MT}.pattern`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'A man with a mitochondrial DNA disorder can pass it to his daughters.', isTrue: false, correction: 'Only mothers transmit mitochondrial DNA; an affected man’s children do not inherit it.', objectives: [`${MT}.pattern`], difficulty: 1 },
      { statement: 'Heteroplasmy helps explain why family members with the same mitochondrial variant differ in severity.', isTrue: true, correction: 'Correct: the proportion of variant mitochondrial DNA varies between people and tissues.', objectives: [`${MT}.pattern`], difficulty: 2 },
    ],
    clues: [
      { answer: 'HETEROPLASMY', clue: 'Mix of normal and variant mitochondrial DNA in a cell', objectives: [`${MT}.pattern`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-expression-terms',
    relevance: 'core',
    title: 'Codominance, incomplete penetrance and variable expressivity',
    discipline: 'genetics',
    system: 'multisystem',
    topic: 'genetics-inheritance',
    difficulty: 2,
    curriculum: [`${GT}.codominance`, `${GT}.penetrance`],
    objectives: ['Define codominance and recognize it', 'Distinguish incomplete penetrance from variable expressivity'],
    citations: [MP_PATTERNS, MP_PENETRANCE, MP_NF1],
    facts: [
      'In codominant inheritance two different alleles are both expressed, each making a slightly different protein, and both influence the trait; examples are the ABO blood group and α1-antitrypsin deficiency.',
      'Penetrance is the proportion of people with a variant who show signs of the disorder; reduced (incomplete) penetrance is common in familial cancer syndromes, for example many but not all people with a BRCA1 or BRCA2 variant develop cancer.',
      'Variable expressivity is the range of signs among people with the same genetic condition: in Marfan syndrome (FBN1), some people are only tall and thin with long fingers, while others have life-threatening heart and vessel complications.',
      'The signs and symptoms of neurofibromatosis type 1 vary widely among affected people.',
    ],
    factRefs: [[0], [1], [1], [2]],
    mechanism:
      'Codominance: both alleles make their own product, so a heterozygote shows both (blood group AB). Penetrance asks whether a person with the variant shows the disorder at all; expressivity asks how severe or varied it is among those who do. Both reflect other genes, environment and chance.',
    associations: ['ABO: AB blood group', 'α1-antitrypsin alleles', 'Incomplete penetrance: BRCA1/2', 'Variable expressivity: Marfan, NF1', 'Skipped generation in a dominant pedigree'],
    misconception:
      'A skipped generation in a dominant pedigree does not prove recessive inheritance: an unaffected carrier of a dominant variant reflects incomplete penetrance.',
    quick:
      'Codominance: both alleles expressed (ABO type AB; α1-antitrypsin). Incomplete penetrance: variant present, disorder absent (BRCA1/2). Variable expressivity: same variant, different severity (Marfan, NF1).',
    detailed: [
      'In codominance each allele is expressed and both contribute to the phenotype: a person with A and B alleles has blood group AB, and α1-antitrypsin alleles each make their own protein.',
      'Penetrance and expressivity describe how a variant shows itself. Reduced penetrance means some carriers never develop the disorder (many BRCA1/BRCA2 cancer syndromes), which can make a dominant disorder seem to skip a generation. Variable expressivity means affected people differ in severity, as in Marfan syndrome and neurofibromatosis type 1.',
    ],
    takeaway: 'Codominance = both alleles show; penetrance = whether; expressivity = how much.',
    related: ['gen-ad'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A woman has a pathogenic BRCA1 variant but has never had cancer at 70; her daughter, who inherited the variant, developed breast cancer at 38. Which concept explains the woman’s lack of disease?',
        options: [
          ['a', 'Incomplete penetrance'],
          ['b', 'Variable expressivity', 'Expressivity describes differences in severity among affected people; she is unaffected.'],
          ['c', 'Codominance', 'Codominance means both alleles are expressed in the phenotype.'],
          ['d', 'Anticipation', 'Anticipation refers to earlier, more severe disease from repeat expansion.'],
          ['e', 'Germline mosaicism', 'She carries the variant in her own cells, so mosaicism does not explain it.'],
        ],
        answer: 'a',
        mini: 'Having the variant without the disorder is incomplete (reduced) penetrance, typical of familial cancer syndromes such as BRCA1/BRCA2.',
        reasoning: 'identification',
        objectives: [`${GT}.penetrance`],
        difficulty: 2,
      },
      {
        stem: 'A father with blood group A and a mother with blood group B have a child with blood group AB. What does the child’s blood group illustrate?',
        options: [
          ['a', 'Codominance'],
          ['b', 'Incomplete dominance', 'In incomplete dominance the heterozygote is intermediate; here both antigens are fully expressed.'],
          ['c', 'Variable expressivity', 'Expressivity refers to severity among affected people with one condition.'],
          ['d', 'Incomplete penetrance', 'Both alleles are clearly expressed, not missing.'],
          ['e', 'Uniparental disomy', 'The child inherited one allele from each parent.'],
        ],
        answer: 'a',
        mini: 'In blood group AB, both the A and B alleles are expressed: codominance.',
        reasoning: 'recall',
        objectives: [`${GT}.codominance`],
        difficulty: 1,
      },
      {
        stem: 'Two sisters share the same FBN1 variant. One is tall and thin with long fingers; the other has aortic root dilation needing surgery. What explains the difference?',
        options: [
          ['a', 'Variable expressivity'],
          ['b', 'Incomplete penetrance', 'Both sisters show features, so the variant is penetrant in both.'],
          ['c', 'Codominance', 'Codominance concerns expression of two different alleles.'],
          ['d', 'X-inactivation', 'FBN1 is autosomal, so X-inactivation does not apply.'],
          ['e', 'Heteroplasmy', 'Heteroplasmy applies to mitochondrial DNA.'],
        ],
        answer: 'a',
        mini: 'The same variant producing different severity is variable expressivity, characteristic of Marfan syndrome.',
        reasoning: 'identification',
        objectives: [`${GT}.penetrance`],
        difficulty: 2,
      },
      {
        stem: 'A mother with blood group AB and a father with blood group O have children. Which blood groups are possible, and why?',
        options: [
          ['a', 'A or B, each about half the time'],
          ['b', 'AB only, because AB is dominant', 'Each child receives only one of the mother’s two alleles, A or B.'],
          ['c', 'O only, because O is dominant', 'O is recessive to A and B; a child with one A or B allele shows that antigen.'],
          ['d', 'A, B, AB or O equally', 'With an O father, no child can receive both A and B, and none can be OO.'],
          ['e', 'An intermediate blend of A and B', 'A and B are codominant, not blended.'],
        ],
        answer: 'a',
        mini: 'The mother passes A or B; the father passes O. Children are AO (group A) or BO (group B). A and B are codominant with each other and dominant over O.',
        reasoning: 'prediction',
        objectives: [`${GT}.codominance`],
        steps: ['The mother (AB) passes either A or B; the father (OO) passes O.', 'Children are AO or BO, each with probability 1/2.', 'O is recessive, so they are blood group A or B.'],
        difficulty: 3,
      },
      {
        stem: 'In a family with a dominant cancer syndrome, a grandmother and her granddaughter developed early breast cancer. The granddaughter’s father (the grandmother’s son) is 70, has never had cancer, and carries the same variant. Which concept explains the apparent skipped generation?',
        options: [
          ['a', 'Incomplete penetrance in the father'],
          ['b', 'Autosomal recessive inheritance', 'A single variant shared across three generations fits dominant inheritance.'],
          ['c', 'Anticipation', 'Anticipation is earlier, more severe disease with repeat expansion, not absence of disease.'],
          ['d', 'Germline mosaicism in the grandmother', 'The father carries the variant constitutionally, so mosaicism is not needed.'],
          ['e', 'Codominance', 'Codominance concerns expression of two different alleles.'],
        ],
        answer: 'a',
        mini: 'The father carries the variant but has no cancer: incomplete penetrance, common in familial cancer syndromes. He still passed the variant on.',
        reasoning: 'interpretation',
        objectives: [`${GT}.penetrance`],
        steps: ['The variant passes grandmother → son → granddaughter, as in dominant inheritance.', 'The son carries it but is unaffected.', 'A carrier without the disorder = incomplete penetrance, which makes the generation seem skipped.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Incomplete penetrance can make an autosomal dominant disorder appear to skip a generation.', isTrue: true, correction: 'Correct: an unaffected person can carry and pass on the variant.', objectives: [`${GT}.penetrance`], difficulty: 2 },
    ],
    clues: [
      { answer: 'EXPRESSIVITY', clue: 'Variable ___: same variant, different severity', objectives: [`${GT}.penetrance`], difficulty: 2 },
      { answer: 'CODOMINANCE', clue: 'Both alleles expressed, as in blood group AB', objectives: [`${GT}.codominance`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-anticipation',
    relevance: 'core',
    title: 'Anticipation and trinucleotide repeat expansion',
    discipline: 'genetics',
    system: 'nervous-behavioral',
    alsoSystems: ['multisystem'],
    topic: 'genetics-trinucleotide',
    difficulty: 2,
    curriculum: [`${GT}.anticipation`],
    objectives: ['Explain anticipation by repeat expansion'],
    citations: [MP_ANTICIPATION, MP_HD],
    facts: [
      'Anticipation is the tendency of some genetic conditions to become more severe and appear earlier as they pass from one generation to the next; it is seen in Huntington disease, myotonic dystrophy and fragile X syndrome.',
      'Anticipation typically occurs with trinucleotide repeat expansions: segments with abnormal numbers of repeats are unstable during cell division and can grow when passed from parent to child.',
      'In Huntington disease, the CAG repeat often grows between generations, and larger repeats give earlier onset: adult-onset disease typically has 40–50 repeats and the juvenile form more than 60.',
    ],
    factRefs: [[0], [0], [1]],
    mechanism:
      'An expanded trinucleotide repeat is unstable: when it is copied for an egg or sperm, it can grow. A longer repeat disrupts the gene more, so the next generation gets the disorder earlier and more severely.',
    associations: ['Earlier onset each generation', 'Greater severity', 'Unstable repeat', 'Huntington (CAG)', 'Myotonic dystrophy', 'Fragile X (CGG)', 'Repeat length ↔ onset'],
    misconception:
      'Anticipation is not a vague tendency for families to notice disease sooner: it has a molecular cause, the growing repeat.',
    quick:
      'Anticipation = earlier onset and greater severity in successive generations, caused by unstable trinucleotide repeats that expand on transmission (Huntington CAG, myotonic dystrophy, fragile X). Longer repeat → earlier onset.',
    detailed: [
      'Some disorders begin earlier and are more severe in each successive generation. The molecular reason is a trinucleotide repeat that is unstable and tends to lengthen when passed from parent to child.',
      'Huntington disease shows this clearly: adult-onset disease usually has 40–50 CAG repeats, and juvenile disease, which appears in childhood or adolescence and progresses faster, usually has more than 60. Myotonic dystrophy and fragile X syndrome also show anticipation.',
    ],
    takeaway: 'Anticipation = expanding repeats → earlier, worse disease each generation.',
    related: ['gen-ad'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A man developed chorea at 48 and has 42 CAG repeats in HTT. His son develops rigidity and seizures at 14 and has 68 repeats. What explains the son’s earlier, more severe disease?',
        options: [
          ['a', 'The unstable repeat expanded on transmission'],
          ['b', 'The son inherited two mutant HTT alleles', 'One expanded allele with more repeats explains it; the mother is not affected.'],
          ['c', 'Incomplete penetrance in the father', 'The father is affected, so penetrance is not the issue.'],
          ['d', 'Mitochondrial heteroplasmy', 'Huntington disease is autosomal dominant, not mitochondrial.'],
          ['e', 'Skewed X-inactivation', 'HTT is on chromosome 4 and the son is male.'],
        ],
        answer: 'a',
        mini: 'The repeat grew from 42 to 68 when passed to the son. Longer CAG repeats cause earlier onset (juvenile Huntington disease usually >60): anticipation.',
        reasoning: 'interpretation',
        objectives: [`${GT}.anticipation`],
        steps: ['The repeat is longer in the son (68) than in the father (42).', 'Expanded repeats are unstable and can grow on transmission.', 'Longer repeats give earlier, more severe disease → anticipation.'],
        difficulty: 3,
      },
      {
        stem: 'What is the molecular basis of anticipation in disorders such as Huntington disease?',
        options: [
          ['a', 'Unstable repeats lengthen on transmission'],
          ['b', 'Mitochondrial DNA accumulates over generations', 'Huntington disease is nuclear and autosomal dominant.'],
          ['c', 'Imprinting silences the maternal allele', 'Imprinting concerns parent-of-origin expression, not growing repeats.'],
          ['d', 'Each generation acquires a new point mutation', 'The same repeat grows; new unrelated mutations are not the mechanism.'],
          ['e', 'Penetrance falls with each generation', 'Anticipation means earlier and more severe disease, not less penetrance.'],
        ],
        answer: 'a',
        mini: 'Trinucleotide repeats above the normal range are unstable and tend to grow when passed to children; longer repeats cause earlier, more severe disease.',
        reasoning: 'mechanism',
        objectives: [`${GT}.anticipation`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'Anticipation is typically caused by expansion of an unstable trinucleotide repeat.', isTrue: true, correction: 'Correct: Huntington disease, myotonic dystrophy and fragile X are examples.', objectives: [`${GT}.anticipation`], difficulty: 1 },
    ],
    clues: [
      { answer: 'ANTICIPATION', clue: 'Earlier onset in each generation from repeat expansion', objectives: [`${GT}.anticipation`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-dominant-negative',
    relevance: 'core',
    title: 'Dominant negative mutations and haploinsufficiency',
    discipline: 'genetics',
    system: 'multisystem',
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${GT}.dominant-negative`],
    objectives: ['Explain dominant negative mutations and haploinsufficiency'],
    citations: [DOMINANCE, MP_ACHON],
    facts: [
      'In a dominant negative mutation a defective subunit poisons a macromolecular complex, so the mutant protein disables the normal protein made from the other allele.',
      'Dominance can also come from haploinsufficiency: a heterozygous null allele leaves too little normal product.',
      'Inheriting two altered FGFR3 copies causes a severe form of achondroplasia with extreme shortening of the bones.',
    ],
    factRefs: [[0], [0], [1]],
    mechanism:
      'If a protein works as part of a complex (several copies assembled together), one bad subunit can spoil the whole assembly, so a heterozygote has far less than half the normal function: dominant negative. If the protein works alone but half the amount is not enough, losing one copy causes disease: haploinsufficiency. A missense mutant that is made and incorporated is usually worse than a null allele that makes nothing.',
    associations: ['Mutant subunit poisons the complex', 'Multimeric proteins (collagen triple helix)', 'Haploinsufficiency (null allele)', 'Missense worse than null', 'Gain of function'],
    misconception:
      'A mutation that makes no protein is not always worse than one that makes an abnormal protein: in a multi-subunit complex, the abnormal protein can be the more harmful (dominant negative).',
    quick:
      'Dominant negative: mutant subunit disables the normal one in a complex → heterozygote has much less than 50% function (e.g. some collagen mutations in osteogenesis imperfecta). Haploinsufficiency: one null allele, 50% product is not enough.',
    detailed: [
      'Dominant negative mutations act in proteins that assemble from several copies. The mutant protein is made and incorporated, and it spoils complexes that contain normal subunits, so function falls far below 50%. Collagen, a triple helix, is the classic setting: an abnormal chain built into the helix damages the whole molecule (Molecular batch: osteogenesis imperfecta).',
      'Haploinsufficiency is the simpler case: one allele makes no product, and the remaining 50% is not enough for normal function. Comparing the two explains why, for some genes, a nonsense allele that makes no protein gives a milder disease than a missense allele that makes a poisonous one.',
    ],
    takeaway: 'Dominant negative = bad subunit spoils the complex; haploinsufficiency = half is not enough.',
    related: ['gen-ad'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A protein functions as a complex of four identical subunits. A missense allele makes a stable but inactive subunit that still joins complexes. Why is a heterozygote more severely affected than a person with one null (no-protein) allele?',
        options: [
          ['a', 'The mutant subunit poisons complexes that contain normal subunits'],
          ['b', 'The null allele is recessive and causes no disease', 'Whether a null allele causes disease depends on haploinsufficiency, not on the missense allele.'],
          ['c', 'The missense allele silences the normal gene’s transcription', 'The effect is at the protein level, through mixed complexes.'],
          ['d', 'Missense mutations always cause gain of a new function', 'Here the subunit is inactive, not newly active.'],
          ['e', 'The null allele makes extra normal protein', 'A null allele makes no protein.'],
        ],
        answer: 'a',
        mini: 'With four subunits, most complexes in a heterozygote contain at least one mutant subunit and fail: function falls far below 50% (dominant negative). A null allele just halves the amount.',
        reasoning: 'mechanism',
        objectives: [`${GT}.dominant-negative`],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'In a dominant negative mutation, the mutant protein interferes with the normal protein from the other allele.', isTrue: true, correction: 'Correct: a defective subunit poisons a multi-subunit complex.', objectives: [`${GT}.dominant-negative`], difficulty: 1 },
    ],
    clues: [],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-mosaicism',
    relevance: 'core',
    title: 'Somatic and germline (gonadal) mosaicism',
    discipline: 'genetics',
    system: 'multisystem',
    topic: 'genetics-inheritance',
    difficulty: 3,
    curriculum: [`${GT}.mosaicism`],
    objectives: ['Distinguish somatic from germline mosaicism and apply them to pedigrees'],
    citations: [MP_VARIANT, MP_CHROMO, MPG('condition/mccune-albright-syndrome', 'McCune-Albright syndrome')],
    facts: [
      'Mosaicism means a set of cells has a different genetic makeup from others because a variant arose after fertilization; when some somatic cells carry it, it is somatic mosaicism, and it may or may not cause health problems.',
      'When a proportion of egg or sperm cells carry a variant (germline mosaicism), an unaffected parent can pass a genetic condition to a child.',
      'Chromosomal mosaicism arises from an error in cell division after fertilization, so some cells have 45 or 47 chromosomes and others 46 (for example mosaic Turner syndrome).',
      'McCune–Albright syndrome is caused by a GNAS mutation that arises after conception, so it is present in only some cells and is not inherited.',
    ],
    factRefs: [[0], [0], [1], [2]],
    mechanism:
      'If a mutation happens in an early embryo, only the descendants of that cell carry it. In body tissues this gives patchy disease (somatic mosaicism, as in McCune–Albright). If the mutated cells include the germ line, the parent can be unaffected yet have more than one affected child (germline mosaicism), which looks like recessive inheritance for a dominant disorder.',
    associations: ['Postzygotic mutation', 'Somatic mosaicism: patchy disease (McCune–Albright)', 'Germline mosaicism: unaffected parent, several affected children', 'Mosaic Turner syndrome', 'Recurrence despite negative parental blood test'],
    misconception:
      'A negative blood test in a parent does not make recurrence impossible: a variant confined to the gonads (germline mosaicism) can be passed to more than one child.',
    quick:
      'Mosaicism: mutation after fertilization → mixed cell lines. Somatic: patchy disease, not passed on unless gonads are involved (McCune–Albright). Germline (gonadal): unaffected parent, two or more affected children with a "dominant" disorder; recurrence risk is not zero.',
    detailed: [
      'Mosaicism arises when a genetic change occurs after fertilization. In somatic mosaicism only some body cells carry it, so disease can be patchy or mild; McCune–Albright syndrome (postzygotic GNAS mutation) is the classic example, and it is not inherited. Chromosomal mosaicism, such as mosaic Turner syndrome, works the same way.',
      'In germline (gonadal) mosaicism, a proportion of a parent’s eggs or sperm carry the variant although the parent’s other cells, including blood, do not. Two children with the same dominant disorder born to unaffected parents, whose blood tests are normal, suggests germline mosaicism, so the recurrence risk is not zero.',
    ],
    takeaway: 'Somatic mosaicism = patchy disease; germline mosaicism = unaffected parent, recurrent affected children.',
    related: ['gen-ad', 'cel-mccune-albright'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'Two children of unaffected parents both have the same autosomal dominant disorder caused by an identical new variant. Neither parent carries the variant in blood. What best explains this?',
        options: [
          ['a', 'Germline mosaicism in one parent'],
          ['b', 'Autosomal recessive inheritance', 'The disorder is dominant and both children carry one identical variant.'],
          ['c', 'Two independent new mutations by chance', 'Two identical new mutations in one family is very unlikely.'],
          ['d', 'Somatic mosaicism in the children only', 'Somatic mosaicism in the children would not explain the same variant in both.'],
          ['e', 'Incomplete penetrance in both parents', 'The parents do not carry the variant in blood, so they are not unaffected carriers.'],
        ],
        answer: 'a',
        mini: 'A variant present in some of a parent’s eggs or sperm but not in blood (germline mosaicism) explains recurrence of a dominant disorder in children of unaffected parents.',
        reasoning: 'interpretation',
        objectives: [`${GT}.mosaicism`],
        steps: ['A dominant disorder recurs in two siblings with unaffected parents.', 'The parents’ blood is negative, so neither is a constitutional carrier.', 'A variant confined to one parent’s germ cells (germline mosaicism) explains recurrence.'],
        difficulty: 3,
      },
      {
        stem: 'Why is McCune–Albright syndrome patchy and not passed on to children?',
        options: [
          ['a', 'The mutation arose after conception in some cells only'],
          ['b', 'It is X-linked recessive and mothers are carriers', 'McCune–Albright is caused by a postzygotic GNAS mutation, not X-linked inheritance.'],
          ['c', 'It shows anticipation across generations', 'Anticipation is a feature of repeat expansions.'],
          ['d', 'It is mitochondrial and depends on heteroplasmy', 'GNAS is a nuclear gene, not mitochondrial DNA.'],
          ['e', 'It has incomplete penetrance in all carriers', 'The patchiness reflects which cells carry the mutation.'],
        ],
        answer: 'a',
        mini: 'A postzygotic GNAS mutation is present only in the cells descended from the mutated cell (somatic mosaicism), giving patchy disease that is not inherited.',
        reasoning: 'mechanism',
        objectives: [`${GT}.mosaicism`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'In germline mosaicism, an unaffected parent can pass a genetic condition to a child.', isTrue: true, correction: 'Correct: some of the parent’s eggs or sperm carry the variant.', objectives: [`${GT}.mosaicism`], difficulty: 1 },
    ],
    clues: [
      { answer: 'MOSAICISM', clue: 'Two or more genetically different cell lines in one person', objectives: [`${GT}.mosaicism`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-nondisjunction',
    relevance: 'core',
    title: 'Nondisjunction, maternal age and the three causes of Down syndrome',
    discipline: 'genetics',
    system: 'multisystem',
    alsoSystems: ['reproductive'],
    topic: 'genetics-chromosomal',
    difficulty: 2,
    curriculum: [`${TR}.nondisjunction`],
    objectives: ['Explain meiotic nondisjunction and the maternal-age effect', 'List the three causes of Down syndrome'],
    citations: [BIO_CHROMO, MP_CHROMO, MP_DOWN, T21_ORIGIN, T21_MATERNAL_AGE],
    facts: [
      'Nondisjunction occurs when homologous chromosomes or sister chromatids fail to separate during meiosis I or II, producing a gamete with an abnormal chromosome number; the risk increases with parental age.',
      'Aneuploidy is a gain or loss of whole chromosomes: trisomy (for example trisomy 21, 47 chromosomes) or monosomy (for example 45,X in Turner syndrome).',
      'Most Down syndrome results from trisomy 21 arising at random by nondisjunction, usually in the egg; less commonly part of chromosome 21 is translocated to another chromosome (translocation Down syndrome, which can be inherited from a balanced carrier parent); a very small percentage is mosaic.',
      'Maternal meiotic errors in trisomy 21 seem to be initiated almost always in meiosis I, and advanced maternal age is the only well-documented risk factor for maternal nondisjunction.',
      'The association between advanced maternal age and chromosome 21 nondisjunction is restricted to errors in the egg, not in sperm or after fertilization.',
    ],
    factRefs: [[0], [1], [2], [3], [4]],
    mechanism:
      'If chromosomes fail to separate at meiosis, one gamete gets two copies of a chromosome and another none; fertilization then gives a trisomy or a monosomy. For chromosome 21 this usually happens in the mother’s egg, mostly at meiosis I, and the risk rises with maternal age. Down syndrome can also come from a translocation (inheritable) or from mosaicism (a postzygotic error).',
    associations: ['Failure of separation in meiosis I or II', 'Trisomy / monosomy', 'Maternal meiosis I', 'Advanced maternal age', 'Down: nondisjunction (most), translocation, mosaicism', 'Translocation can be inherited'],
    misconception:
      'Nondisjunction Down syndrome does not usually come from the father: most trisomy 21 arises in the egg, and the maternal-age effect applies to egg errors.',
    quick:
      'Nondisjunction: chromosomes fail to separate in meiosis I or II → trisomy/monosomy; risk rises with maternal age (egg errors, mostly meiosis I). Down syndrome: ~most nondisjunction (random), less often Robertsonian translocation (can be inherited), rarely mosaic.',
    detailed: [
      'Meiotic nondisjunction sends both copies of a chromosome (homologues at meiosis I, sister chromatids at meiosis II) into one gamete. The resulting embryo is trisomic or monosomic. For trisomy 21, the extra chromosome usually comes from the egg, and maternal errors begin mostly at meiosis I; advanced maternal age is the established risk factor.',
      'There are three routes to Down syndrome: free trisomy 21 from nondisjunction (most cases, not inherited), translocation of chromosome 21 material onto another chromosome (a parent may carry a balanced form, so recurrence risk is higher), and mosaicism from a postzygotic error (some cells trisomic, often milder).',
    ],
    takeaway: 'Nondisjunction (maternal meiosis I, maternal age) causes most Down syndrome; translocation and mosaicism are the others.',
    related: ['gen-down', 'gen-robertsonian'],
    outline: listed('Multisystem Processes & Disorders', GEN),
    mcq: [
      {
        stem: 'A 44-year-old woman has a child with Down syndrome; karyotype shows 47,XY,+21. In which cell and division did the error most likely occur?',
        options: [
          ['a', 'In the egg, at meiosis I'],
          ['b', 'In the sperm, at meiosis II', 'Most trisomy 21 arises in the egg; the maternal-age effect applies to egg errors.'],
          ['c', 'After fertilization, in an early embryonic mitosis', 'A postzygotic error causes mosaicism, not trisomy in every cell.'],
          ['d', 'From a balanced translocation in the father', 'A translocation would give 46 chromosomes with extra 21 material, not 47,+21.'],
          ['e', 'From a mitochondrial DNA variant', 'Down syndrome is a chromosome-number disorder.'],
        ],
        answer: 'a',
        mini: 'Free trisomy 21 usually results from nondisjunction in the egg, mostly starting in meiosis I, and the risk rises with maternal age.',
        reasoning: 'identification',
        objectives: [`${TR}.nondisjunction`],
        difficulty: 2,
      },
      {
        stem: 'A child with Down syndrome has a karyotype of 46,XX with extra chromosome 21 material attached to chromosome 14. How does this change the counseling for the parents?',
        options: [
          ['a', 'A parent may carry a balanced translocation; test both'],
          ['b', 'No change: the risk depends only on maternal age', 'Translocation Down syndrome can be inherited, unlike free trisomy.'],
          ['c', 'The child does not really have Down syndrome', 'Extra chromosome 21 material causes Down syndrome even with 46 chromosomes.'],
          ['d', 'The error must have arisen in the child’s own cells after birth', 'A constitutional translocation is present from conception.'],
          ['e', 'Only the father needs testing', 'Either parent may carry the balanced rearrangement.'],
        ],
        answer: 'a',
        mini: 'Translocation Down syndrome can be inherited from an unaffected parent carrying a balanced rearrangement, so parental karyotypes guide recurrence risk.',
        reasoning: 'prediction',
        objectives: [`${TR}.nondisjunction`],
        steps: ['46 chromosomes with extra 21 material = translocation Down syndrome.', 'Translocations can be inherited from a balanced carrier parent.', 'So both parents are karyotyped: a carrier has a higher recurrence risk than maternal age alone predicts.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Most trisomy 21 is inherited from a parent who carries a balanced translocation.', isTrue: false, correction: 'Most is free trisomy from random nondisjunction; translocation is a minority.', objectives: [`${TR}.nondisjunction`], difficulty: 1 },
      { statement: 'Advanced maternal age raises the risk of nondisjunction in the egg.', isTrue: true, correction: 'Correct: it is the best-documented risk factor for maternal nondisjunction.', objectives: [`${TR}.nondisjunction`], difficulty: 1 },
    ],
    clues: [
      { answer: 'NONDISJUNCTION', clue: 'Failure of chromosomes to separate at meiosis', objectives: [`${TR}.nondisjunction`], difficulty: 1 },
      { answer: 'ANEUPLOIDY', clue: 'Gain or loss of whole chromosomes', objectives: [`${TR}.nondisjunction`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-down',
    relevance: 'core',
    title: 'Down syndrome: features and associations',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'multisystem',
    alsoSystems: ['cardiovascular', 'gastrointestinal', 'blood-immune'],
    topic: 'genetics-chromosomal',
    difficulty: 2,
    curriculum: [`${TR}.down`, `${TR}.down-associations`],
    objectives: ['Recognize the features of Down syndrome', 'Apply its associations to clinical findings'],
    citations: [MP_DOWN, DOWN_ANOMALIES, DOWN_TMD, DOWN_AAI, DUODENAL_ATRESIA],
    facts: [
      'Down syndrome causes intellectual disability, weak muscle tone (hypotonia) in infancy and a characteristic appearance: flattened face, upslanting palpebral fissures, small ears, short neck, protruding tongue, small hands and feet and a single palmar crease.',
      'About half of children with Down syndrome have a heart defect; about 15 percent have hypothyroidism; approximately half of adults develop Alzheimer disease, often earlier than usual; a small percentage of children develop leukemia.',
      'Heart defects are the most common associated anomalies, led by atrioventricular septal defect; among digestive anomalies, duodenal atresia is most common, followed by Hirschsprung disease.',
      'A transient myeloproliferative disorder (transient abnormal myelopoiesis) occurs in about 10% of newborns with Down syndrome and involves GATA1 mutation; it can precede later myeloid leukemia.',
      'Atlantoaxial instability is a recognised association of Down syndrome, reported at a remarkably high incidence.',
      'Duodenal atresia is often diagnosed by a double-bubble sign on abdominal radiograph, and many affected infants have Down syndrome.',
    ],
    factRefs: [[0], [0], [1], [2], [3], [4]],
    mechanism:
      'An extra copy of chromosome 21 genes disturbs development across many organs. The endocardial cushions are often affected (atrioventricular septal defect), the gut can fail to canalize (duodenal atresia) or lack ganglion cells (Hirschsprung disease), and blood-forming cells are prone to transient and later leukemic proliferation. Extra chromosome 21 material also brings early-onset Alzheimer disease.',
    associations: ['Hypotonia', 'Upslanting palpebral fissures', 'Single palmar crease', 'AV septal (endocardial cushion) defect', 'Duodenal atresia (double bubble)', 'Hirschsprung disease', 'Transient myeloproliferative disorder (GATA1)', 'Leukemia', 'Hypothyroidism', 'Early Alzheimer disease', 'Atlantoaxial instability'],
    misconception:
      'The most characteristic Down syndrome heart lesion is not tetralogy of Fallot: atrioventricular septal (endocardial cushion) defect leads the list.',
    quick:
      'Down syndrome: hypotonia, flat face, upslanting fissures, single palmar crease, intellectual disability. Associations: AV septal defect, duodenal atresia, Hirschsprung, transient myeloproliferative disorder and leukemia, hypothyroidism, early Alzheimer, atlantoaxial instability.',
    detailed: [
      'Newborns with Down syndrome are hypotonic, with a flattened face, upslanting palpebral fissures, small ears, a protruding tongue and a single palmar crease; intellectual disability is usual.',
      'Look for associated problems: about half have congenital heart disease, most characteristically an atrioventricular septal defect; duodenal atresia and Hirschsprung disease are the leading gut anomalies; about 10% of newborns have a transient myeloproliferative disorder (GATA1), and leukemia is more common; about 15% have hypothyroidism; about half of adults develop Alzheimer disease, often early; and atlantoaxial instability is a recognised association.',
    ],
    takeaway: 'Down: hypotonia + characteristic face; AV canal, duodenal atresia, Hirschsprung, leukemia, hypothyroidism, early Alzheimer, atlantoaxial instability.',
    related: ['gen-nondisjunction', 'gen-robertsonian'],
    outline: listed('Multisystem Processes & Disorders', GEN),
    mcq: [
      {
        stem: 'A hypotonic newborn has upslanting palpebral fissures, a flat facial profile and a single palmar crease. Within hours she vomits bile-stained fluid, and a radiograph shows a "double bubble". Which heart lesion is she most likely to have as well?',
        options: [
          ['a', 'Atrioventricular septal defect'],
          ['b', 'Coarctation of the aorta', 'Coarctation is not the characteristic Down syndrome lesion.'],
          ['c', 'Transposition of the great arteries', 'Transposition is not the characteristic Down syndrome lesion.'],
          ['d', 'Supravalvular aortic stenosis', 'Supravalvular aortic stenosis is not a typical Down syndrome lesion.'],
          ['e', 'Ebstein anomaly', 'Ebstein anomaly is not a characteristic Down syndrome lesion.'],
        ],
        answer: 'a',
        mini: 'Features of Down syndrome plus duodenal atresia (double bubble). The characteristic heart lesion is an atrioventricular septal (endocardial cushion) defect.',
        reasoning: 'interpretation',
        objectives: [`${TR}.down`, `${TR}.down-associations`],
        steps: ['Hypotonia, upslanting fissures, flat face and a single crease → Down syndrome.', 'Bilious vomiting with a double bubble → duodenal atresia, a Down association.', 'The most characteristic Down heart defect → atrioventricular septal defect.'],
        difficulty: 3,
      },
      {
        stem: 'A 3-day-old with Down syndrome has a white count of 60,000/mm³ with circulating blasts but is otherwise well. What is the most likely diagnosis?',
        options: [
          ['a', 'Transient myeloproliferative disorder'],
          ['b', 'Chronic myeloid leukemia with BCR-ABL1', 'CML is not the newborn myeloproliferation of Down syndrome.'],
          ['c', 'Leukemoid reaction to bacterial sepsis', 'She is well; circulating blasts in a Down newborn suggest the transient disorder.'],
          ['d', 'Polycythemia vera with JAK2 V617F', 'Polycythemia vera is an adult myeloproliferative neoplasm.'],
          ['e', 'Hodgkin lymphoma', 'Hodgkin lymphoma does not present with neonatal blasts.'],
        ],
        answer: 'a',
        mini: 'About 10% of newborns with Down syndrome have a transient myeloproliferative disorder (transient abnormal myelopoiesis) with blasts, involving GATA1; it can precede later myeloid leukemia.',
        reasoning: 'identification',
        objectives: [`${TR}.down-associations`],
        relevance: 'supplementary',
        relevanceNote: 'Transient myeloproliferative disorder is a less common association; the increased leukemia risk in Down syndrome is core.',
        difficulty: 3,
      },
      {
        stem: 'An adult with Down syndrome develops progressive memory loss in his 40s. Which explanation is most consistent with the genetics of his condition?',
        options: [
          ['a', 'Extra chromosome 21 material predisposes to early Alzheimer disease'],
          ['b', 'Hypothyroidism alone always explains dementia in Down syndrome', 'Hypothyroidism is common and should be checked, but early Alzheimer disease affects about half of adults.'],
          ['c', 'A new mitochondrial mutation', 'Mitochondrial disease is not the expected cause here.'],
          ['d', 'Anticipation of a trinucleotide repeat', 'Down syndrome is not a repeat disorder.'],
          ['e', 'Germline mosaicism in a parent', 'Mosaicism in a parent does not explain adult cognitive decline.'],
        ],
        answer: 'a',
        mini: 'About half of adults with Down syndrome develop Alzheimer disease, often earlier than usual; the extra chromosome 21 material is the predisposition.',
        reasoning: 'recall',
        objectives: [`${TR}.down-associations`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'About half of children with Down syndrome are born with a heart defect.', isTrue: true, correction: 'Correct: atrioventricular septal defect is the most characteristic.', objectives: [`${TR}.down-associations`], difficulty: 1 },
      { statement: 'Hypothyroidism is uncommon in Down syndrome.', isTrue: false, correction: 'About 15% of people with Down syndrome have hypothyroidism.', objectives: [`${TR}.down-associations`], difficulty: 2 },
      { statement: 'Upslanting palpebral fissures, a single palmar crease and infant hypotonia are features of Down syndrome.', isTrue: true, correction: 'Correct: with a flattened face, small ears and intellectual disability.', objectives: [`${TR}.down`], difficulty: 1 },
      { statement: 'Atlantoaxial instability is a recognised association of Down syndrome.', isTrue: true, correction: 'Correct: it is reported at a high incidence in people with Down syndrome.', objectives: [`${TR}.down-associations`], difficulty: 1 },
    ],
    clues: [
      { answer: 'HIRSCHSPRUNG', clue: 'Aganglionic colon disease associated with Down syndrome', objectives: [`${TR}.down-associations`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-trisomy-18-13',
    relevance: 'core',
    title: 'Trisomy 18 (Edwards) and trisomy 13 (Patau)',
    discipline: 'genetics',
    alsoDisciplines: ['pathology'],
    system: 'multisystem',
    topic: 'genetics-chromosomal',
    difficulty: 2,
    curriculum: [`${TR}.edwards`, `${TR}.patau`],
    objectives: ['Recognize trisomy 18', 'Recognize trisomy 13'],
    citations: [MP_T18, MP_T13, PATAU_TRIAD, PATAU_HPE, T18_FEATURES],
    facts: [
      'Trisomy 18 (Edwards syndrome) causes intrauterine growth restriction and low birth weight, heart defects, a small abnormally shaped head, a small jaw and mouth, and clenched fists with overlapping fingers. Many affected infants die before birth or within the first month, and only 5–10% live past the first year.',
      'Trisomy 13 (Patau syndrome) causes severe intellectual disability, heart defects, brain or spinal cord abnormalities, very small or poorly developed eyes (microphthalmia), extra fingers or toes, cleft lip with or without cleft palate and hypotonia. Many infants die within the first days or weeks, and only 5–10% live past the first year.',
      'The classic Patau triad is cleft lip and palate, microphthalmia/anophthalmia and postaxial polydactyly; scalp defects are common.',
      'Holoprosencephaly is a major finding in trisomy 13.',
      'Infants with trisomy 18 typically have a prominent occiput, micrognathia, clenched fists with the index finger overlapping the third and the fifth overlapping the fourth, and rocker-bottom feet.',
    ],
    factRefs: [[0], [1], [2], [3], [4]],
    mechanism:
      'Both are trisomies of larger autosomes than 21 and disturb development of many organs, so most affected fetuses are lost and survival beyond the first year is uncommon. Trisomy 18 stands out for growth restriction, a small jaw and clenched hands with overlapping fingers; trisomy 13 for midline defects (holoprosencephaly, cleft lip and palate), small eyes and polydactyly.',
    associations: ['T18: clenched fists, overlapping fingers', 'T18: micrognathia', 'T18: prominent occiput', 'T18: rocker-bottom feet', 'T18: growth restriction', 'T13: holoprosencephaly', 'T13: cleft lip/palate', 'T13: microphthalmia', 'T13: polydactyly', 'T13: scalp defects', 'Both: heart defects, early death'],
    misconception:
      'Overlapping fingers and polydactyly point to different trisomies: clenched fists with overlapping fingers suggest trisomy 18, extra digits suggest trisomy 13.',
    quick:
      'Trisomy 18: growth restriction, prominent occiput, micrognathia, clenched overlapping fingers, rocker-bottom feet, heart defects. Trisomy 13: holoprosencephaly, cleft lip/palate, microphthalmia, polydactyly, scalp defects, heart defects. Both: 5–10% survive the first year.',
    detailed: [
      'Trisomy 18 (Edwards syndrome) presents with growth restriction and low birth weight, a prominent occiput, a small jaw, clenched fists with overlapping fingers, rocker-bottom feet and heart defects; many die before birth or in the first month.',
      'Trisomy 13 (Patau syndrome) has midline brain and face defects (holoprosencephaly, cleft lip and palate), small or absent eyes, postaxial polydactyly, scalp defects and heart defects, with severe intellectual disability. For both, only 5–10% of children survive the first year.',
    ],
    takeaway: 'T18 = clenched overlapping fingers, small jaw, prominent occiput, rocker-bottom feet; T13 = midline defects, small eyes, extra digits.',
    related: ['gen-nondisjunction', 'gen-down'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A newborn has a prominent occiput, a small jaw, clenched fists with the index finger overlapping the third finger, rocker-bottom feet and a heart defect, and was small for gestational age. Which karyotype is most likely?',
        options: [
          ['a', '47,XX,+18'],
          ['b', '47,XX,+13', 'Trisomy 13 features midline defects, small eyes and polydactyly.'],
          ['c', '47,XX,+21', 'Down syndrome features hypotonia, upslanting fissures and a single palmar crease.'],
          ['d', '45,X', 'Monosomy X (Turner syndrome) does not cause this pattern of findings.'],
          ['e', '46,XX,del(5p)', 'A 5p deletion is a structural disorder with a different pattern of findings.'],
        ],
        answer: 'a',
        mini: 'Growth restriction, prominent occiput, micrognathia, clenched fists with overlapping fingers and rocker-bottom feet, plus a heart defect = trisomy 18 (Edwards).',
        reasoning: 'identification',
        objectives: [`${TR}.edwards`],
        difficulty: 2,
      },
      {
        stem: 'A newborn has a single central forebrain on imaging (holoprosencephaly), bilateral cleft lip and palate, very small eyes and an extra digit on each hand. Which diagnosis is most likely?',
        options: [
          ['a', 'Trisomy 13'],
          ['b', 'Trisomy 18', 'Trisomy 18 features clenched fists with overlapping fingers rather than this midline pattern.'],
          ['c', 'Trisomy 21', 'Down syndrome does not typically cause holoprosencephaly.'],
          ['d', '22q11.2 deletion', '22q11.2 deletion causes heart defects, hypocalcemia and immune problems, not this pattern.'],
          ['e', 'Klinefelter syndrome', 'A sex chromosome aneuploidy does not cause this midline pattern.'],
        ],
        answer: 'a',
        mini: 'Holoprosencephaly, cleft lip and palate, microphthalmia and polydactyly = trisomy 13 (Patau).',
        reasoning: 'identification',
        objectives: [`${TR}.patau`],
        difficulty: 2,
      },
      {
        stem: 'Two newborns are evaluated. Baby P has clenched fists with overlapping fingers and a small jaw. Baby Q has holoprosencephaly, cleft lip and palate and postaxial polydactyly. Which pairing of karyotypes is correct?',
        options: [
          ['a', 'P: trisomy 18; Q: trisomy 13'],
          ['b', 'P: trisomy 13; Q: trisomy 18', 'Overlapping fingers point to trisomy 18 and midline defects with polydactyly to trisomy 13.'],
          ['c', 'P: trisomy 21; Q: trisomy 13', 'Down syndrome features hypotonia and upslanting fissures, not clenched overlapping fingers.'],
          ['d', 'P: trisomy 18; Q: trisomy 21', 'Holoprosencephaly and polydactyly are not typical of Down syndrome.'],
          ['e', 'Both: trisomy 18', 'Holoprosencephaly with polydactyly is the trisomy 13 pattern.'],
        ],
        answer: 'a',
        mini: 'Clenched fists with overlapping fingers and micrognathia = trisomy 18. Holoprosencephaly, cleft lip/palate and polydactyly = trisomy 13.',
        reasoning: 'comparison',
        objectives: [`${TR}.edwards`, `${TR}.patau`],
        steps: ['Clenched fists with overlapping fingers and a small jaw → trisomy 18.', 'Midline defects (holoprosencephaly, cleft lip) with polydactyly → trisomy 13.', 'So P has trisomy 18 and Q has trisomy 13.'],
        difficulty: 3,
      },
    ],
    tf: [
      { statement: 'Most children with trisomy 18 or trisomy 13 live past their first year.', isTrue: false, correction: 'Only 5–10% survive past the first year.', objectives: [`${TR}.edwards`, `${TR}.patau`], difficulty: 1 },
    ],
    clues: [
      { answer: 'PATAU', clue: 'Eponym for trisomy 13', objectives: [`${TR}.patau`], difficulty: 1 },
      { answer: 'EDWARDS', clue: 'Eponym for trisomy 18', objectives: [`${TR}.edwards`], difficulty: 1 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-robertsonian',
    relevance: 'core',
    title: 'Robertsonian translocation',
    discipline: 'genetics',
    system: 'multisystem',
    alsoSystems: ['reproductive'],
    topic: 'genetics-chromosomal',
    difficulty: 3,
    curriculum: [`${SC}.robertsonian`],
    objectives: ['Explain Robertsonian translocation and its reproductive consequences'],
    citations: [ROB_DEF, ROB_LONG_ARMS, ROB_FAMILY, MP_DOWN, MP_T13],
    facts: [
      'A Robertsonian translocation is the fusion of the long arms of two acrocentric chromosomes (13, 14, 15, 21 or 22), losing parts of the short arms; it is the most common chromosomal rearrangement in healthy people (about 1 in 800), and rob(13;14) and rob(14;21) are the common types.',
      'Carriers of a Robertsonian translocation are usually healthy (balanced) but are at increased risk of offspring with chromosomal imbalance.',
      'A maternal rob(14;21) can cause recurrent miscarriages and translocation Down syndrome in the children.',
      'A person with a balanced translocation involving chromosome 13 has an increased chance of passing extra chromosome 13 material to their children (translocation trisomy 13 can be inherited).',
    ],
    factRefs: [[0, 1], [0], [2, 3], [4]],
    mechanism:
      'Two acrocentric chromosomes fuse at their centromeres; the tiny short arms are lost, but they carry no essential unique genes, so the carrier has 45 chromosomes and is healthy. At meiosis the fused chromosome can segregate with a normal partner chromosome, giving gametes with extra or missing long-arm material: miscarriages, or a child with translocation Down syndrome (or trisomy 13).',
    associations: ['Acrocentric chromosomes 13, 14, 15, 21, 22', 'Long-arm fusion', 'Carrier: 45 chromosomes, healthy', 'rob(14;21)', 'Recurrent miscarriage', 'Familial (translocation) Down syndrome'],
    misconception:
      'A balanced carrier with 45 chromosomes is not missing important genetic material: the lost short arms contain repeated (ribosomal) DNA, so the carrier is healthy.',
    quick:
      'Robertsonian translocation: fusion of long arms of two acrocentrics (13, 14, 15, 21, 22). Balanced carrier = 45 chromosomes, healthy, but risks unbalanced offspring: miscarriage, translocation Down syndrome (rob 14;21) or trisomy 13. Common: ~1 in 800.',
    detailed: [
      'Acrocentric chromosomes have their centromere near one end. In a Robertsonian translocation two of them fuse, keeping both long arms and losing the short arms, which carry repeated ribosomal DNA. The carrier has 45 chromosomes but a balanced genome and is usually healthy.',
      'The problem is reproductive: gametes can carry the fused chromosome plus a normal copy of one partner, giving an unbalanced conceptus. Carriers therefore have miscarriages and children with translocation Down syndrome (often rob(14;21)) or translocation trisomy 13. Parental karyotyping identifies carriers.',
    ],
    takeaway: 'Robertsonian = acrocentric long arms fused; healthy carrier, unbalanced offspring.',
    related: ['gen-nondisjunction', 'gen-down'],
    outline: found(MS, GEN),
    mcq: [
      {
        stem: 'A healthy woman with two miscarriages has a son with Down syndrome. Her karyotype is 45,XX,der(14;21)(q10;q10). What does this result mean?',
        options: [
          ['a', 'She is a balanced Robertsonian carrier at risk of unbalanced offspring'],
          ['b', 'She has Down syndrome herself', 'Her genome is balanced; she has no extra chromosome 21 material.'],
          ['c', 'She is missing essential chromosome 14 genes', 'Only the short arms are lost, which carry no essential unique genes.'],
          ['d', 'Her son’s Down syndrome must be free trisomy from nondisjunction', 'Her translocation explains translocation Down syndrome in her son.'],
          ['e', 'Her future pregnancies carry no extra risk', 'Carriers have an increased risk of unbalanced offspring and miscarriage.'],
        ],
        answer: 'a',
        mini: 'Fusion of the long arms of 14 and 21 with 45 chromosomes = balanced Robertsonian carrier: healthy, but gametes can be unbalanced, causing miscarriage and translocation Down syndrome.',
        reasoning: 'interpretation',
        objectives: [`${SC}.robertsonian`],
        steps: ['45 chromosomes with a 14;21 fusion = balanced Robertsonian translocation.', 'Her genome is balanced, so she is healthy.', 'Her gametes can carry extra or missing 21 material → miscarriages and translocation Down syndrome.'],
        difficulty: 3,
      },
      {
        stem: 'A balanced Robertsonian translocation carrier has only 45 chromosomes. Why is the carrier usually healthy?',
        options: [
          ['a', 'Only the short arms are lost, and they carry no essential unique genes'],
          ['b', 'The missing chromosome is replaced by X-inactivation', 'X-inactivation applies to X chromosomes, not autosomes.'],
          ['c', 'Carriers have extra mitochondrial DNA to compensate', 'Mitochondrial DNA does not substitute for chromosomes.'],
          ['d', 'The fused chromosome makes twice as much protein', 'The fusion does not change gene dosage for the long arms.'],
          ['e', 'Carriers are usually mosaic for a normal cell line', 'Carriers are constitutional, not mosaic.'],
        ],
        answer: 'a',
        mini: 'The long arms of both acrocentrics are kept on the fused chromosome; the lost short arms contain repeated ribosomal DNA, so the genome is effectively balanced.',
        reasoning: 'mechanism',
        objectives: [`${SC}.robertsonian`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'Robertsonian translocations involve acrocentric chromosomes such as 13, 14, 15, 21 and 22.', isTrue: true, correction: 'Correct: their long arms fuse.', objectives: [`${SC}.robertsonian`], difficulty: 1 },
      { statement: 'A balanced Robertsonian carrier usually has 46 chromosomes and severe disease.', isTrue: false, correction: 'A carrier has 45 chromosomes and is usually healthy; the risk is to offspring.', objectives: [`${SC}.robertsonian`], difficulty: 2 },
    ],
    clues: [
      { answer: 'ACROCENTRIC', clue: 'Chromosome with its centromere near one end, as in 13, 14, 15, 21, 22', objectives: [`${SC}.robertsonian`], difficulty: 2 },
    ],
  },
  // ------------------------------------------------------------------------------------------------
  {
    id: 'gen-22q11',
    relevance: 'core',
    title: '22q11.2 deletion (DiGeorge) syndrome',
    discipline: 'genetics',
    alsoDisciplines: ['immunology'],
    system: 'multisystem',
    alsoSystems: ['blood-immune', 'cardiovascular', 'endocrine'],
    topic: 'genetics-chromosomal',
    difficulty: 3,
    curriculum: [`${SC}.22q11`],
    objectives: ['Explain how a 22q11.2 deletion produces its findings'],
    citations: [MP_22Q, DGS_POUCH, POUCH_DERIVATIVES, DGA_NEURAL_CREST, PARATHYROID_POUCHES],
    facts: [
      '22q11.2 deletion syndrome is caused by deletion of about 3 million base pairs on one chromosome 22 (a contiguous gene deletion of 30–40 genes); loss of TBX1 probably causes many features, including heart defects, cleft palate, distinctive facial features and low calcium.',
      'People with 22q11.2 deletion syndrome commonly have congenital heart abnormalities, recurrent infections caused by immune problems, distinctive facial features and palate abnormalities (often submucosal cleft palate).',
      'The 22q11.2 microdeletion impairs development of the pharyngeal pouch system, giving abnormalities of craniofacial structures, the parathyroid glands, the thymus and the cardiac outflow tract.',
      'The pharyngeal pouches give rise to the thymus and the parathyroid glands, among other structures; the inferior parathyroids derive from the third pouch and the superior parathyroids from the fourth.',
      'In the DiGeorge anomaly, pharyngeal pouch derivatives fail to develop, usually because of inadequate neural crest contribution, and conotruncal (outflow-tract) heart defects are characteristic.',
    ],
    factRefs: [[0], [0], [1], [2, 4], [3]],
    mechanism:
      'The 3-Mb deletion removes many genes, including TBX1. Two developmental systems are affected: the pharyngeal pouches, which form the thymus (T cells) and parathyroid glands (calcium), and the cardiac neural crest and outflow tract, whose abnormal development causes conotruncal heart defects. Palate and facial anomalies are also common.',
    associations: ['3-Mb deletion, TBX1', 'Pharyngeal pouches (thymus; parathyroids from pouches 3 and 4)', 'Thymic hypoplasia → T-cell deficiency, infections', 'Parathyroid hypoplasia → hypocalcemia', 'Cardiac neural crest / outflow tract → conotruncal defects', 'Cleft palate', 'Detected by FISH or microarray'],
    misconception:
      'The immune problem in 22q11.2 deletion is not a B-cell defect: absent or small thymus reduces T cells.',
    quick:
      '22q11.2 deletion (DiGeorge): 3-Mb deletion (TBX1). Pharyngeal pouches → thymic hypoplasia (T cells) and hypoparathyroidism (hypocalcemia). Cardiac neural crest/outflow tract → conotruncal defects. Also cleft palate, facial features. Detected by FISH or microarray.',
    detailed: [
      'The usual deletion removes about 3 million base pairs of chromosome 22, including TBX1, too small to see on a routine karyotype. The missing genes are needed for the pharyngeal pouch system and the cardiac outflow tract.',
      'The findings follow from embryology. Abnormal pharyngeal pouch development gives thymic hypoplasia (T-cell deficiency, recurrent infections) and parathyroid hypoplasia (hypocalcemia, sometimes neonatal seizures). Abnormal cardiac neural crest and outflow-tract development gives conotruncal heart defects. Palate abnormalities and distinctive facial features complete the picture. FISH or chromosomal microarray detects the deletion (Laboratory batch).',
    ],
    takeaway: '22q11.2 = pouches (thymus, parathyroids) + cardiac neural crest/outflow tract (conotruncal defects) + palate.',
    related: ['lab-fish', 'gen-down'],
    outline: listed('Immune System', 'Disorders associated with immunodeficiency'),
    mcq: [
      {
        stem: 'A newborn with an outflow-tract heart defect has a seizure; serum calcium is low and PTH is inappropriately low. Chest imaging shows no thymic shadow. Which embryologic explanation best accounts for all three findings?',
        options: [
          ['a', 'Abnormal pharyngeal pouch and cardiac neural crest development'],
          ['b', 'Failure of the first pharyngeal arch alone', 'The thymus and parathyroids derive from the pharyngeal pouches, and the heart defect involves neural crest.'],
          ['c', 'Failure of neural tube closure', 'Neural tube defects do not explain thymic and parathyroid absence.'],
          ['d', 'Failure of the endocardial cushions alone', 'Cushion defects are typical of Down syndrome and do not explain hypocalcemia.'],
          ['e', 'Pharyngeal pouch failure explains the heart defect too', 'The pouches form the thymus and parathyroids; conotruncal defects reflect neural crest and outflow-tract development.'],
        ],
        answer: 'a',
        mini: 'In 22q11.2 deletion, abnormal pharyngeal pouch development explains the absent thymus (T cells) and parathyroids (hypocalcemia with low PTH); the conotruncal heart defect reflects abnormal cardiac neural crest and outflow-tract development.',
        reasoning: 'interpretation',
        objectives: [`${SC}.22q11`],
        steps: ['Low calcium with low PTH and no thymic shadow → parathyroid and thymic hypoplasia, both pharyngeal pouch derivatives.', 'The outflow-tract (conotruncal) defect reflects abnormal cardiac neural crest and outflow-tract development.', 'Together they point to 22q11.2 deletion, which disturbs both systems.'],
        difficulty: 3,
      },
      {
        stem: 'Why does a single 22q11.2 deletion cause both hypocalcemia and T-cell deficiency?',
        options: [
          ['a', 'Both glands arise from the pharyngeal pouches'],
          ['b', 'The deletion removes the PTH and T-cell receptor genes', 'The effects come from abnormal development of the glands, not from loss of those genes.'],
          ['c', 'Low calcium kills T cells in the thymus', 'The thymus itself fails to develop.'],
          ['d', 'The deletion causes autoimmune destruction of both glands', 'The defect is developmental, present from birth.'],
          ['e', 'Vitamin D deficiency causes both findings', 'Both result from pharyngeal pouch maldevelopment, not vitamin D lack.'],
        ],
        answer: 'a',
        mini: 'The deletion impairs pharyngeal pouch development; the parathyroid glands (calcium) and thymus (T cells) both derive from the pouches, so both are small or absent.',
        reasoning: 'mechanism',
        objectives: [`${SC}.22q11`],
        difficulty: 2,
      },
    ],
    tf: [
      { statement: 'The immune defect in 22q11.2 deletion syndrome mainly affects T cells.', isTrue: true, correction: 'Correct: the thymus is small or absent.', objectives: [`${SC}.22q11`], difficulty: 1 },
    ],
    clues: [
      { answer: 'TBX', clue: 'Gene family whose member 1 is lost in the 22q11.2 deletion', objectives: [`${SC}.22q11`], relevance: 'supplementary', relevanceNote: 'Gene name detail; the pharyngeal pouch consequences are core.', difficulty: 2 },
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
    id: 'seq:nondisjunction-t21',
    relevance: 'core',
    title: 'How an extra 21 arises',
    prompt: 'Order the steps leading to free trisomy 21.',
    steps: [
      'An oocyte begins meiosis I',
      'The two chromosome 21 homologues fail to separate',
      'The egg receives two copies of chromosome 21',
      'A normal sperm adds one more chromosome 21',
      'The zygote has 47 chromosomes with three copies of 21',
      'Every cell of the child carries trisomy 21',
    ],
    explanation: 'Maternal meiosis I nondisjunction (risk rising with maternal age) gives an egg with two chromosome 21s; fertilization makes 47,+21 in every cell.',
    conceptIds: ['gen-nondisjunction'],
    objectiveIds: [`${TR}.nondisjunction`],
    difficulty: 2,
  }),
];

const matches: MatchItem[] = [
  match({
    id: 'match:inheritance-clues',
    relevance: 'core',
    title: 'Read the pedigree clue',
    prompt: 'Match each pedigree clue to the inheritance pattern it points to.',
    pairs: [
      { left: 'Male-to-male transmission, every generation', right: 'Autosomal dominant' },
      { left: 'Affected siblings of unaffected consanguineous parents', right: 'Autosomal recessive' },
      { left: 'Affected men linked through unaffected women', right: 'X-linked recessive' },
      { left: 'Affected father: all daughters affected, no sons', right: 'X-linked dominant' },
      { left: 'Passes through mothers only; fathers never transmit', right: 'Mitochondrial' },
      { left: 'Earlier onset in each generation', right: 'Anticipation (repeat expansion)' },
    ],
    explanation: 'Who transmits to whom is the key: fathers to sons excludes X-linked; fathers to all daughters means X-linked dominant; only mothers transmitting means mitochondrial.',
    conceptIds: ['gen-ad', 'gen-ar', 'gen-xlr', 'gen-xld', 'gen-mito', 'gen-anticipation'],
    objectiveIds: [`${AD}.pedigree`, `${AR}.pedigree`, `${XL}.xr-pedigree`, `${XL}.xd-pedigree`, `${MT}.pattern`],
    difficulty: 2,
  }),
  match({
    id: 'match:chromosomal-syndromes',
    relevance: 'core',
    title: 'Name the chromosomal syndrome',
    prompt: 'Match each finding to the chromosomal disorder.',
    pairs: [
      { left: 'Atrioventricular septal defect and duodenal atresia', right: 'Trisomy 21' },
      { left: 'Clenched fists with overlapping fingers', right: 'Trisomy 18' },
      { left: 'Holoprosencephaly, cleft lip and polydactyly', right: 'Trisomy 13' },
      { left: 'Absent thymus and hypocalcemia', right: '22q11.2 deletion' },
      { left: 'Healthy carrier with 45 chromosomes and miscarriages', right: 'Robertsonian translocation' },
    ],
    explanation: 'Trisomy 21: AV canal, duodenal atresia; 18: clenched overlapping fingers; 13: midline defects and polydactyly; 22q11.2: pharyngeal pouches; Robertsonian: balanced carrier, unbalanced offspring.',
    conceptIds: ['gen-down', 'gen-trisomy-18-13', 'gen-22q11', 'gen-robertsonian'],
    objectiveIds: [`${TR}.down-associations`, `${TR}.edwards`, `${TR}.patau`, `${SC}.22q11`, `${SC}.robertsonian`],
    difficulty: 2,
  }),
];

const cases: CaseItem[] = [
  kase({
    id: 'case:xlr-family',
    relevance: 'core',
    title: 'The bleeding cousins',
    conceptIds: ['gen-xlr'],
    objectiveIds: [`${XL}.xr-risk`],
    reasoning: 'multistep',
    difficulty: 4,
    stages: [
      { label: 'Presentation', text: 'A 26-year-old woman, pregnant with a boy, asks about her risk. She has no bleeding symptoms.' },
      { label: 'History', text: 'Her brother has hemophilia A. Her parents are unaffected, and her mother’s brother also had hemophilia A.' },
      { label: 'Further clue', text: 'Her own factor VIII level has not been tested, and no genetic testing has been done in the family.' },
    ],
    question: 'What is the chance that her son will have hemophilia A?',
    options: [
      { id: 'a', text: '1/4' },
      { id: 'b', text: '1/2', whyWrong: 'One half would apply only if she were a proven carrier; she is a carrier with probability 1/2.' },
      { id: 'c', text: '1/8', whyWrong: 'One eighth would apply to a child of unknown sex; the fetus is known to be male.' },
      { id: 'd', text: '2/3', whyWrong: 'Two thirds is the carrier chance of an unaffected sibling in an autosomal recessive disorder.' },
      { id: 'e', text: '0, because she has no symptoms', whyWrong: 'Most carriers of hemophilia have no symptoms.' },
    ],
    answerId: 'a',
    explanation:
      'Her affected brother and affected maternal uncle show that her mother is a carrier. She therefore has a 1/2 chance of being a carrier, and a carrier’s son has a 1/2 chance of being affected: 1/2 × 1/2 = 1/4.',
    mechanism: 'Carrier mother → each daughter 1/2 carrier → each son of a carrier 1/2 affected; multiply the independent probabilities for a known male fetus.',
    takeaway: 'Sister of an affected man (carrier mother): her son’s risk is 1/2 × 1/2 = 1/4.',
    differentials: [
      { name: 'Proven carrier', why: 'If she were known to be a carrier, her son’s risk would be 1/2.' },
      { name: 'Daughter of an affected man', why: 'She would be an obligate carrier; her son’s risk would be 1/2.' },
    ],
  }),
];

export const geneticsBatch1: Bundle = {
  concepts: core.concepts,
  items: [...core.items, ...sequences, ...matches, ...cases],
};
