import type { Subdivision } from '../types';
import { O, c } from './links';

export const genetics: Subdivision = {
  id: 'bc-genetics',
  title: 'Genetics',
  scope:
    'Inheritance patterns, genetic terms that explain atypical pedigrees, population genetics, and the high-yield single-gene and chromosomal disorders. Step 1 tests pedigree interpretation, recurrence risk, the molecular mechanism and the presentation; it does not test management.',
  topics: [
    {
      id: 'bc-gen-principles',
      title: 'Genetic principles',
      concepts: [
        c('bc-gen-terms', 'Penetrance, expressivity, pleiotropy and heterogeneity', 'apply', 3, [O.geneticF], ['genetics'], [
          'Incomplete penetrance: not everyone with the genotype shows the phenotype (e.g. BRCA1).',
          'Variable expressivity: same genotype, different severity (e.g. neurofibromatosis type 1).',
          'Pleiotropy: one gene, many unrelated effects (e.g. PKU, Marfan syndrome).',
          'Locus heterogeneity (different genes, same phenotype, e.g. albinism) vs allelic heterogeneity (different mutations in one gene, e.g. β-thalassemia).',
          'Anticipation, loss of heterozygosity, dominant negative effect, linkage disequilibrium, mosaicism (somatic vs gonadal).',
        ]),
        c('bc-imprinting', 'Genomic imprinting and uniparental disomy', 'apply', 3, [O.genetic, O.neuroCongenital], ['genetics', 'disease', 'presentation'], [
          'Imprinting: only one parental allele is expressed; the other is silenced by methylation.',
          'Prader–Willi syndrome: loss of the paternal chromosome 15q11–13 region (deletion or maternal uniparental disomy); hyperphagia, obesity, hypotonia, hypogonadism, intellectual disability.',
          'Angelman syndrome: loss of maternal UBE3A (deletion or paternal uniparental disomy); seizures, ataxia, inappropriate laughter, severe intellectual disability.',
          'Uniparental disomy: both copies from one parent; heterodisomy (meiosis I error) vs isodisomy (meiosis II error or postzygotic duplication).',
        ]),
        c('bc-hardy-weinberg', 'Hardy–Weinberg population genetics', 'apply', 3, [O.geneticF], ['genetics'], [
          'p + q = 1 and p² + 2pq + q² = 1; carrier frequency 2pq ≈ 2q for rare recessive alleles.',
          'For X-linked recessive disease, frequency in males = q, in females = q².',
          'Assumptions: large population, random mating, no mutation, no selection, no migration.',
          'Calculation from disease prevalence: q = √(prevalence) for an autosomal recessive disease.',
        ]),
      ],
    },
    {
      id: 'bc-gen-inheritance',
      title: 'Modes of inheritance',
      concepts: [
        c('bc-ad-inheritance', 'Autosomal dominant inheritance and pedigrees', 'apply', 3, [O.genetic], ['genetics'], [
          'Every generation affected, both sexes, male-to-male transmission possible; affected × unaffected → 50% risk.',
          'Often structural proteins or receptors; frequently variable expressivity and incomplete penetrance; new mutations with advanced paternal age.',
        ], { existing: ['huntington', 'achondroplasia'], coverage: 'partial', gap: 'Covered through two example diseases only; no pedigree-reading or recurrence-risk items.' }),
        c('bc-ar-inheritance', 'Autosomal recessive inheritance and pedigrees', 'apply', 3, [O.genetic], ['genetics'], [
          'Often skips generations; consanguinity raises risk; carrier × carrier → 25% affected, 50% carriers, and 2/3 chance an unaffected sibling is a carrier.',
          'Usually enzyme deficiencies; often more severe and earlier onset than dominant disease.',
        ], { existing: ['pku', 'gaucher', 'tay-sachs'], coverage: 'partial', gap: 'Mode taught only through individual diseases; the 2/3 carrier-risk calculation and pedigree recognition are absent.' }),
        c('bc-xlinked-inheritance', 'X-linked recessive and dominant inheritance', 'apply', 3, [O.genetic], ['genetics'], [
          'X-linked recessive: mostly males; no male-to-male transmission; sons of carrier mothers have 50% risk, daughters of affected fathers are obligate carriers.',
          'Females can be affected through skewed (unfavorable) lyonization or Turner syndrome.',
          'X-linked dominant: affected father passes to all daughters and no sons (e.g. hypophosphatemic rickets, fragile X, Rett syndrome, Alport in most cases).',
        ], { existing: ['x-linked-recessive'], coverage: 'partial', gap: 'X-linked recessive covered with a disease list; X-linked dominant pattern and pedigree items missing.' }),
        c('bc-mito-inheritance', 'Mitochondrial inheritance and heteroplasmy', 'apply', 2, [O.genetic, O.neuromuscular], ['genetics', 'disease', 'histology'], [
          'Transmitted only by the mother to all her children; variable severity from heteroplasmy.',
          'MELAS (mitochondrial encephalopathy, lactic acidosis, stroke-like episodes), myoclonic epilepsy with ragged-red fibers, Leber hereditary optic neuropathy.',
          'Muscle biopsy: ragged-red fibers (subsarcolemmal accumulation of abnormal mitochondria).',
        ]),
      ],
    },
    {
      id: 'bc-gen-single-gene',
      title: 'Single-gene disorders',
      concepts: [
        c('bc-ad-diseases', 'High-yield autosomal dominant diseases', 'apply', 3, [O.genetic, O.neoplasm, O.renalMetabolic], ['disease', 'genetics', 'presentation'], [
          'Adult polycystic kidney disease (PKD1 on chr 16, PKD2), familial adenomatous polyposis (APC, chr 5), familial hypercholesterolemia (LDL receptor), hereditary hemorrhagic telangiectasia.',
          'Hereditary spherocytosis (spectrin, ankyrin), Huntington disease, Li–Fraumeni syndrome (TP53), Marfan syndrome (FBN1), MEN syndromes, myotonic dystrophy.',
          'Neurofibromatosis type 1 (NF1, chr 17: café-au-lait macules, Lisch nodules, neurofibromas) and type 2 (NF2, chr 22: bilateral vestibular schwannomas), tuberous sclerosis (TSC1/TSC2), von Hippel–Lindau (VHL, chr 3).',
          'Achondroplasia (FGFR3 activating mutation).',
        ], { existing: ['huntington', 'achondroplasia', 'hereditary-spherocytosis', 'collagen-disorders', 'men-syndromes'], coverage: 'partial', gap: 'Huntington, achondroplasia, spherocytosis, Marfan (within collagen disorders) and MEN exist; ADPKD, FAP, NF1/NF2, tuberous sclerosis, VHL, Li–Fraumeni, HHT and myotonic dystrophy are missing.' }),
        c('bc-ar-diseases', 'High-yield autosomal recessive diseases', 'apply', 3, [O.genetic], ['disease', 'genetics'], [
          'Group recognition: cystic fibrosis, sickle cell disease, thalassemias, hemochromatosis, Wilson disease, PKU and other amino acid disorders, glycogen and lysosomal storage diseases (except Fabry and Hunter), Friedreich ataxia, Kartagener syndrome, infantile polycystic kidney disease, albinism.',
          'Most inborn errors of metabolism are autosomal recessive.',
        ], { existing: ['pku', 'gaucher', 'tay-sachs', 'alpha1-antitrypsin', 'otc-deficiency'], coverage: 'partial', gap: 'Individual examples exist but no grouping concept (note OTC deficiency is X-linked, the exception within urea-cycle disorders).' }),
        c('bc-cystic-fibrosis', 'Cystic fibrosis', 'apply', 3, [O.genetic, O.respCongenital, O.gi], ['genetics', 'mechanism', 'disease', 'presentation', 'labs', 'pharmacology'], [
          'Autosomal recessive CFTR mutation on chromosome 7; most common ΔF508 (deletion of phenylalanine at 508) causes misfolding and proteasomal degradation.',
          'CFTR is an ATP-gated chloride channel: secretes Cl⁻ in lungs and GI tract, reabsorbs Cl⁻ in sweat ducts → high sweat chloride (diagnostic), thick secretions.',
          'Presentations: meconium ileus, recurrent pulmonary infections (Pseudomonas, S aureus), bronchiectasis, pancreatic insufficiency with fat-soluble vitamin deficiency, infertility from absent vas deferens, nasal polyps.',
          'Newborn screening: immunoreactive trypsinogen; CFTR modulators (ivacaftor, lumacaftor) act on the defective protein.',
        ]),
        c('bc-x-linked-diseases', 'High-yield X-linked recessive diseases', 'apply', 3, [O.genetic], ['disease', 'genetics'], [
          'Group recognition: Bruton agammaglobulinemia, Wiskott–Aldrich syndrome, Fabry disease, G6PD deficiency, ocular albinism, Lesch–Nyhan syndrome, Duchenne and Becker muscular dystrophy, Hunter syndrome, hemophilia A and B, OTC deficiency.',
        ], { existing: ['x-linked-recessive', 'bruton', 'fabry', 'g6pd', 'duchenne', 'otc-deficiency'], coverage: 'covered', gap: 'Most members exist as concepts and in the grp:x-linked connection group; Wiskott–Aldrich, Hunter and hemophilia lack their own concepts.' }),
        c('bc-muscular-dystrophy', 'Duchenne, Becker and myotonic muscular dystrophy', 'apply', 3, [O.neuromuscular, O.genetic], ['genetics', 'mechanism', 'presentation', 'labs', 'histology'], [
          'Duchenne: X-linked frameshift deletion in dystrophin (DMD, the largest human gene) → absent dystrophin; Gowers sign, calf pseudohypertrophy (fibrofatty replacement), dilated cardiomyopathy; onset before age 5.',
          'Becker: in-frame deletion → truncated, partly functional dystrophin; milder, later onset.',
          'Myotonic dystrophy type 1: autosomal dominant CTG repeat in DMPK; myotonia, cataracts, frontal balding, gonadal atrophy, arrhythmias.',
          'Labs: high creatine kinase; diagnosis by genetic testing (Western blot shows absent or reduced dystrophin).',
        ], { existing: ['duchenne'], coverage: 'partial', gap: 'Duchenne vs Becker covered; myotonic dystrophy is missing.' }),
      ],
    },
    {
      id: 'bc-gen-repeat-chromosomal',
      title: 'Trinucleotide repeats and chromosomal disorders',
      concepts: [
        c('bc-trinucleotide', 'Trinucleotide repeat expansion diseases', 'apply', 3, [O.genetic, O.movement, O.neuroCongenital], ['genetics', 'disease', 'presentation'], [
          'Huntington disease (CAG, chr 4, autosomal dominant), myotonic dystrophy (CTG), Friedreich ataxia (GAA, frataxin, autosomal recessive), fragile X syndrome (CGG, FMR1, X-linked dominant).',
          'Anticipation: repeats expand across generations → earlier onset and greater severity (Huntington expansion mainly in paternal transmission; fragile X in maternal).',
          'Friedreich ataxia: ataxia, loss of position and vibration sense, hypertrophic cardiomyopathy, diabetes, kyphoscoliosis.',
          'Fragile X: intellectual disability, large testes after puberty, long face, large jaw and ears, mitral valve prolapse; hypermethylation of FMR1.',
        ], { existing: ['huntington'], coverage: 'partial', gap: 'Huntington covered and grp:trinucleotide groups the repeats; fragile X and Friedreich ataxia lack concepts.' }),
        c('bc-autosomal-trisomies', 'Down, Edwards and Patau syndromes', 'apply', 3, [O.genetic, O.prenatal], ['genetics', 'presentation', 'labs'], [
          'Trisomy 21 (most often maternal meiotic nondisjunction, risk rises with maternal age; also Robertsonian translocation and mosaicism): flat face, epicanthal folds, single palmar crease, intellectual disability, endocardial cushion (atrioventricular septal) defects, duodenal atresia, Hirschsprung disease, ALL/AML, early Alzheimer disease.',
          'Trisomy 18 (Edwards): rocker-bottom feet, clenched hands with overlapping fingers, micrognathia, prominent occiput, congenital heart disease; death usually within 1 year.',
          'Trisomy 13 (Patau): holoprosencephaly, cleft lip and palate, polydactyly, microphthalmia, cutis aplasia, congenital heart disease.',
          'Prenatal screening patterns: first trimester (β-hCG, PAPP-A, nuchal translucency) and quad screen (AFP, β-hCG, estriol, inhibin A) for each trisomy.',
        ], { existing: ['alzheimer'], coverage: 'missing', gap: 'Down syndrome appears only as an Alzheimer risk factor; no trisomy concepts exist.' }),
        c('bc-sex-chromosome', 'Sex chromosome aneuploidies', 'apply', 2, [O.genetic, O.reproCongenital], ['genetics', 'presentation', 'labs'], [
          'Klinefelter (47,XXY), Turner (45,X), double Y (47,XYY) syndromes; Barr bodies indicate extra X chromosomes.',
        ], { existing: ['turner-klinefelter'], coverage: 'covered', gap: 'Reproductive batch drafted before the strategy change; needs medical review.' }),
        c('bc-structural-chromosome', 'Robertsonian translocation, microdeletions and other structural abnormalities', 'apply', 2, [O.genetic, O.immunodef], ['genetics', 'presentation'], [
          'Robertsonian translocation: fusion of the long arms of two acrocentric chromosomes (13, 14, 15, 21, 22); balanced carriers are normal but have unbalanced offspring and miscarriages; familial Down syndrome.',
          'Cri-du-chat (5p deletion): cat-like cry, microcephaly, intellectual disability, VSD.',
          'Williams syndrome (7q11.23 deletion including elastin): elfin facies, extreme friendliness, hypercalcemia, supravalvular aortic stenosis.',
          '22q11.2 deletion (DiGeorge, velocardiofacial): thymic aplasia (T-cell deficiency), hypocalcemia from absent parathyroids, conotruncal heart defects, cleft palate, abnormal facies.',
        ]),
      ],
    },
  ],
};
