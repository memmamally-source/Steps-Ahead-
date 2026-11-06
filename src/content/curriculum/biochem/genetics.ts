import type { Subdivision } from '../types';
import type { Depth } from '../types';
import { M, OL, R, RM, RA, MA, RMA, o, st, x } from './links';

const app: Depth[] = ['application'];

export const genetics: Subdivision = {
  id: 'bc-genetics',
  title: 'Genetics',
  scope:
    'Inheritance patterns, the genetic terms that explain atypical pedigrees, population genetics, and the genetic basis of high-yield single-gene and chromosomal disorders. Step 1 tests pedigree interpretation, recurrence risk, the molecular mechanism and recognition of the presentation. Organ-specific clinical detail of each disease is owned by its system subject and linked, not duplicated.',
  topics: [
    {
      id: 'bc-gen-principles',
      title: 'Genetic principles',
      subtopics: [
        st('bc-gen-terms', 'Genetic terms that explain atypical inheritance', 3, ['genetics'], [OL.genF], [], [
          o('codominance', 'Define codominance (ABO blood groups, α1-antitrypsin alleles) and recognize it in a pedigree or phenotype.', RA, { existing: ['alpha1-antitrypsin'], coverage: 'partial', note: 'α1-antitrypsin states codominant inheritance without defining it.' }),
          o('penetrance', 'Distinguish incomplete penetrance (genotype without phenotype; BRCA1) from variable expressivity (same genotype, different severity; neurofibromatosis type 1).', RA),
          o('pleiotropy', 'Define pleiotropy (one gene, multiple unrelated phenotypes; PKU, Marfan syndrome).', R),
          o('anticipation', 'Explain anticipation as earlier onset and greater severity in successive generations caused by repeat expansion.', RM, { existing: ['huntington'], coverage: 'partial', note: 'Taught only within Huntington disease.' }),
          o('loh', 'Explain loss of heterozygosity and the two-hit hypothesis (retinoblastoma: germline vs sporadic; bilateral vs unilateral).', RMA, { home: 'hematology-oncology', outline: [OL.retinoblastoma] }),
          o('dominant-negative', 'Explain dominant negative mutations (mutant protein disables the normal one; e.g. mutant p53, some OI collagen mutations) and haploinsufficiency.', RM),
          o('mosaicism', 'Distinguish somatic mosaicism (McCune–Albright) from gonadal mosaicism (affected siblings of unaffected parents) and apply both to pedigrees.', RA),
          o('heterogeneity', 'Distinguish locus heterogeneity (mutations in different genes give one phenotype; albinism) from allelic heterogeneity (different mutations in one gene; β-thalassemia).', R),
          o('linkage', 'Define linkage disequilibrium (alleles at nearby loci inherited together more often than expected).', R),
        ]),
        st('bc-imprinting', 'Genomic imprinting and uniparental disomy', 3, ['genetics', 'disease', 'presentation'], [OL.genF], [x('endocrine', 'neonatal hypoglycemia management')], [
          o('mechanism', 'Explain imprinting: parent-of-origin expression with the other allele silenced by methylation.', RM),
          o('pws', 'Explain Prader–Willi syndrome: loss of paternally expressed genes at 15q11–q13 (paternal deletion, maternal uniparental disomy or imprinting defect) → neonatal hypotonia and poor feeding, then hyperphagia and obesity, hypogonadism, short stature, intellectual disability, behavioral problems.', RMA, { outline: [OL.pws] }),
          o('angelman', 'Explain Angelman syndrome: loss of maternally expressed UBE3A (maternal deletion, paternal uniparental disomy or UBE3A mutation) → severe intellectual disability, seizures, ataxia, absent speech, inappropriate laughter.', RMA),
          o('upd', 'Distinguish heterodisomy (meiosis I error) from isodisomy (meiosis II error or postzygotic duplication) and explain how uniparental disomy can unmask a recessive disease.', MA),
          o('bws', 'Recognize Beckwith–Wiedemann syndrome (11p15 imprinting defect, IGF2 overexpression): macrosomia, macroglossia, omphalocele, hemihypertrophy, neonatal hypoglycemia, Wilms tumor and hepatoblastoma risk.', RA, { outline: [OL.neonatalHypoglycemia] }),
        ]),
        st('bc-hardy-weinberg', 'Hardy–Weinberg population genetics', 3, ['genetics'], [OL.genF], [x('public-health', 'population screening')], [
          o('equations', 'State p + q = 1 and p² + 2pq + q² = 1 and the assumptions (large population, random mating, no mutation, selection or migration).', RM),
          o('ar-calc', 'Calculate allele and carrier frequencies from the prevalence of an autosomal recessive disease (q = √prevalence; carrier ≈ 2q).', app),
          o('x-calc', 'Calculate X-linked recessive disease frequency in males (q) and females (q²).', app),
          o('violations', 'Recognize departures from equilibrium: founder effect, genetic drift, selection and heterozygote advantage (sickle cell trait and malaria).', R),
        ]),
      ],
    },
    {
      id: 'bc-gen-inheritance',
      title: 'Modes of inheritance',
      subtopics: [
        st('bc-ad-inheritance', 'Autosomal dominant inheritance', 3, ['genetics'], [OL.genF], [], [
          o('pedigree', 'Recognize an autosomal dominant pedigree: every generation, both sexes, male-to-male transmission.', RA),
          o('risk', 'Calculate recurrence risk for affected × unaffected (50%) and recognize new mutations with advanced paternal age.', RA, {
            existing: ['achondroplasia'], coverage: 'partial', note: 'Achondroplasia covers new mutations and paternal age; no risk calculation.',
          }),
          o('mechanisms', 'Explain why dominant disorders often involve structural proteins or receptors (gain of function, dominant negative, haploinsufficiency) and why homozygosity can be more severe or lethal.', MA, {
            existing: ['achondroplasia', 'huntington'], coverage: 'partial', note: 'Homozygous lethality (achondroplasia) and toxic gain of function (Huntington) appear; no general explanation.',
          }),
        ]),
        st('bc-ar-inheritance', 'Autosomal recessive inheritance', 3, ['genetics'], [OL.genF], [], [
          o('pedigree', 'Recognize an autosomal recessive pedigree: affected siblings of unaffected parents, horizontal pattern, consanguinity.', RA),
          o('risk', 'Calculate risks: carrier × carrier → 25% affected, 50% carrier; an unaffected sibling of an affected child has a 2/3 chance of being a carrier.', app),
          o('enzymes', 'Explain why most enzyme deficiencies are recessive (50% enzyme activity is usually sufficient).', M),
        ]),
        st('bc-xlinked-inheritance', 'X-linked inheritance and lyonization', 3, ['genetics'], [OL.genF], [], [
          o('xr-pedigree', 'Recognize an X-linked recessive pedigree: mostly males, no male-to-male transmission, carrier mothers, obligate carrier daughters of affected men.', RA, { existing: ['x-linked-recessive'], coverage: 'covered' }),
          o('xr-risk', 'Calculate X-linked recessive recurrence risks for carrier mothers and affected fathers.', app, { existing: ['x-linked-recessive'], coverage: 'covered' }),
          o('lyonization', 'Explain random X-inactivation (lyonization) and how skewed inactivation or Turner syndrome lets females express X-linked recessive disease.', MA, {
            existing: ['x-linked-recessive'], coverage: 'partial', note: 'Skewed inactivation is listed; the mechanism of X-inactivation is not taught.',
          }),
          o('xd-pedigree', 'Recognize an X-linked dominant pedigree: affected father → all daughters and no sons; affected mother → half of children (hypophosphatemic rickets, fragile X with reduced penetrance in females, Rett syndrome, Alport syndrome in most families).', RA),
        ]),
        st('bc-mito-inheritance', 'Mitochondrial inheritance', 2, ['genetics', 'disease', 'histology'], [OL.genF], [x('neurology', 'clinical detail of mitochondrial encephalopathies'), x('msk-skin', 'myopathy')], [
          o('pattern', 'Recognize maternal transmission to all children and explain variable expression by heteroplasmy.', RMA),
          o('diseases', 'Recognize MELAS (encephalopathy, lactic acidosis, stroke-like episodes), MERRF (myoclonic epilepsy, ragged-red fibers) and Leber hereditary optic neuropathy (acute bilateral vision loss in young men).', RA, { outline: [OL.mitoMyopathy] }),
          o('biopsy', 'Recognize ragged-red fibers on Gomori trichrome stain (subsarcolemmal mitochondrial accumulation) and lactic acidosis as markers of mitochondrial disease.', RA, { outline: [OL.mitoMyopathy] }),
        ]),
      ],
    },
    {
      id: 'bc-gen-single-gene',
      title: 'Single-gene disorders',
      subtopics: [
        st('bc-ad-diseases', 'Autosomal dominant disorders: genetic basis', 3, ['disease', 'genetics', 'presentation'], [OL.genF], [
          x('renal', 'ADPKD complications'), x('gastrointestinal', 'polyposis syndromes'), x('neurology', 'neurocutaneous syndromes'),
          x('cardiovascular', 'familial hypercholesterolemia and HHT vascular disease'), x('hematology-oncology', 'hereditary cancer syndromes, spherocytosis'), x('endocrine', 'MEN syndromes'),
        ], [
          o('map', 'Assign the correct inheritance pattern to each high-yield single-gene disorder in a vignette (autosomal dominant vs recessive vs X-linked vs mitochondrial).', app),
          o('adpkd', 'Recognize autosomal dominant polycystic kidney disease (PKD1 on chromosome 16, polycystin-1; PKD2): bilateral enlarging renal cysts, hypertension, hematuria, liver cysts, berry aneurysms, mitral valve prolapse.', RA, { home: 'renal', outline: [OL.pkd] }),
          o('fap', 'Recognize familial adenomatous polyposis (APC on chromosome 5q; Wnt/β-catenin): hundreds of colonic polyps, colorectal cancer by about 40 without colectomy; Gardner and Turcot variants.', RMA, { home: 'gastrointestinal', outline: [OL.fap] }),
          o('hht', 'Recognize hereditary hemorrhagic telangiectasia (ENG, ACVRL1; TGF-β signaling): mucocutaneous telangiectasias, recurrent epistaxis, AVMs (lung, brain, liver), GI bleeding.', RA, { home: 'cardiovascular' }),
          o('spherocytosis', 'Explain the genetic basis of hereditary spherocytosis (usually autosomal dominant; spectrin, ankyrin, band 3, protein 4.2) and the resulting membrane loss.', RMA, {
            existing: ['hereditary-spherocytosis'], coverage: 'covered', home: 'hematology-oncology', outline: [OL.spherocytosis],
          }),
          o('lfs', 'Recognize Li–Fraumeni syndrome (germline TP53): sarcomas, breast cancer, brain tumors, leukemia, adrenocortical carcinoma at young ages.', RA, { home: 'hematology-oncology' }),
          o('men', 'Recognize MEN1 (MEN1, menin, tumor suppressor) and MEN2A/2B (RET proto-oncogene, gain of function), all autosomal dominant.', RA, {
            existing: ['men-syndromes'], coverage: 'covered', home: 'endocrine', outline: [OL.men],
          }),
          o('nf1', 'Recognize neurofibromatosis type 1 (NF1 on chromosome 17; neurofibromin, a RAS GTPase-activating protein): café-au-lait macules, axillary freckling, Lisch nodules, cutaneous neurofibromas, optic glioma, pheochromocytoma; variable expressivity.', RMA, { home: 'neurology', outline: [OL.nf] }),
          o('nf2', 'Recognize neurofibromatosis type 2 (NF2 on chromosome 22; merlin): bilateral vestibular schwannomas, meningiomas, juvenile cataracts.', RA, { home: 'neurology', outline: [OL.nf2] }),
          o('tsc', 'Recognize tuberous sclerosis (TSC1 hamartin, TSC2 tuberin; mTOR overactivity): cortical tubers, seizures, intellectual disability, facial angiofibromas, ash-leaf macules, shagreen patch, cardiac rhabdomyoma, renal angiomyolipoma.', RMA, { home: 'neurology', outline: [OL.tscVhl] }),
          o('vhl', 'Recognize von Hippel–Lindau disease (VHL on chromosome 3p; failure to degrade HIF): CNS and retinal hemangioblastomas, bilateral clear cell renal carcinoma, pheochromocytoma.', RMA, { home: 'neurology', outline: [OL.tscVhl] }),
          o('achondroplasia', 'Explain achondroplasia: FGFR3 activating mutation, mostly new mutations with advanced paternal age → impaired endochondral ossification with normal intramembranous ossification.', RMA, {
            existing: ['achondroplasia'], coverage: 'covered', home: 'msk-skin', outline: [OL.achondroplasia],
          }),
        ]),
        st('bc-ar-diseases', 'Autosomal recessive disorders: genetic basis', 3, ['disease', 'genetics'], [OL.genF], [
          x('hematology-oncology', 'hemoglobinopathies'), x('gastrointestinal', 'hemochromatosis and Wilson disease'), x('renal', 'ARPKD'), x('neurology', 'spinal muscular atrophy'),
        ], [
          o('map', 'Recognize that most inborn errors of metabolism, storage diseases (except X-linked Fabry and Hunter) and hemoglobinopathies are autosomal recessive, and spot exceptions (OTC deficiency, X-linked).', RA, {
            existing: ['otc-deficiency', 'gaucher', 'tay-sachs', 'pku'], coverage: 'partial', note: 'Individual examples state their inheritance; no grouping or exceptions.',
          }),
          o('sickle', 'Explain the genetics of sickle cell disease: β-globin point mutation (glutamate → valine at position 6), heterozygote advantage against falciparum malaria.', RMA, { home: 'hematology-oncology', outline: [OL.sickle] }),
          o('thalassemia', 'Explain the genetics of thalassemias: α (gene deletions on chromosome 16; cis deletions in Asian, trans in African ancestry) and β (point and splice mutations on chromosome 11).', RM, { home: 'hematology-oncology', outline: [OL.thalassemia] }),
          o('hemochromatosis', 'Explain hereditary hemochromatosis (HFE C282Y, low hepcidin → unregulated intestinal iron absorption).', RM, { home: 'gastrointestinal', outline: [OL.hemochromatosis] }),
          o('wilson', 'Explain Wilson disease (ATP7B on chromosome 13 → impaired biliary copper excretion and incorporation into ceruloplasmin → copper in liver, brain, cornea).', RMA, { home: 'gastrointestinal', outline: [OL.wilson] }),
          o('arpkd', 'Recognize autosomal recessive polycystic kidney disease (PKHD1, fibrocystin): enlarged cystic kidneys at birth, Potter sequence, congenital hepatic fibrosis.', RA, { home: 'renal', outline: [OL.pkd] }),
          o('sma', 'Recognize spinal muscular atrophy (SMN1 deletion; degeneration of anterior horn cells; floppy infant, tongue fasciculations).', RA, { home: 'neurology' }),
        ]),
        st('bc-cystic-fibrosis', 'Cystic fibrosis', 3, ['genetics', 'mechanism', 'disease', 'presentation', 'labs', 'pharmacology'], [OL.cf], [x('respiratory', 'pulmonary management'), x('gastrointestinal', 'pancreatic and hepatobiliary disease')], [
          o('genetics', 'Explain CF genetics: autosomal recessive CFTR (chromosome 7); ΔF508 causes misfolding, ER retention and proteasomal degradation.', RM),
          o('physiology', 'Explain CFTR as an ATP-gated chloride channel that secretes Cl⁻ in airways and gut but reabsorbs Cl⁻ in sweat ducts, predicting thick secretions and high sweat chloride.', MA),
          o('presentation', 'Apply CF to presentations: meconium ileus, recurrent pulmonary infection (S aureus early, Pseudomonas later), bronchiectasis, pancreatic insufficiency with fat-soluble vitamin deficiency, CF-related diabetes, biliary cirrhosis, nasal polyps, clubbing, infertility (absent vas deferens), hypochloremic metabolic alkalosis.', RA, {
            mentions: ['pseudomonas'], note: 'Pseudomonas lists CF as a risk group only.',
          }),
          o('diagnosis', 'Interpret newborn screening (immunoreactive trypsinogen), sweat chloride testing and genetic testing, and recognize CFTR modulators (ivacaftor potentiator; lumacaftor, tezacaftor, elexacaftor correctors).', RA, { outline: [OL.newbornScreen] }),
        ]),
        st('bc-x-linked-diseases', 'X-linked disorders: genetic basis', 3, ['disease', 'genetics'], [OL.genF], [x('immunology', 'immunodeficiencies'), x('hematology-oncology', 'hemophilia')], [
          o('map', 'Recognize the high-yield X-linked recessive disorders: Bruton agammaglobulinemia, Wiskott–Aldrich, G6PD deficiency, ocular albinism, Lesch–Nyhan, Duchenne and Becker, Hunter, hemophilia A and B, OTC deficiency; recognize Fabry disease as X-linked with frequently affected heterozygous females.', RA, {
            existing: ['x-linked-recessive'], coverage: 'partial', note: 'The list omits Wiskott–Aldrich, Hunter and ocular albinism.',
          }),
          o('bruton', 'Explain X-linked agammaglobulinemia (BTK): B cells arrested at the pre-B stage, absent immunoglobulins, recurrent bacterial and enteroviral infections after 6 months.', RMA, {
            existing: ['bruton'], coverage: 'covered', home: 'immunology', outline: [OL.bruton],
          }),
          o('wiskott', 'Recognize Wiskott–Aldrich syndrome (WAS gene; actin cytoskeleton): thrombocytopenia with small platelets, eczema, recurrent infections; ↓ IgM, ↑ IgA and IgE.', RA, { home: 'immunology', outline: [OL.wiskott] }),
          o('hemophilia', 'Explain the genetics of hemophilia A (F8; intron 22 inversion common) and B (F9), and why female carriers are rarely affected.', RA, {
            mentions: ['x-linked-recessive'], home: 'hematology-oncology', outline: [OL.hemophilia],
          }),
        ]),
        st('bc-muscular-dystrophy', 'Muscular dystrophies', 3, ['genetics', 'mechanism', 'presentation', 'labs', 'histology'], [OL.dystrophy], [x('neurology', 'neuromuscular clinical approach'), x('cardiovascular', 'cardiomyopathy')], [
          o('dystrophin', 'Explain dystrophin as the link between actin and the extracellular matrix via the dystroglycan complex, and why its absence causes sarcolemmal tearing and fiber necrosis.', M, { existing: ['duchenne'], coverage: 'covered' }),
          o('duchenne', 'Recognize Duchenne muscular dystrophy: Gowers sign, calf pseudohypertrophy, raised creatine kinase, onset before age 5, dilated cardiomyopathy and respiratory failure; confirm by genetic testing.', RA, { existing: ['duchenne'], coverage: 'covered' }),
          o('becker', 'Distinguish Becker from Duchenne (in-frame deletion, partially functional dystrophin, later onset).', RA, { existing: ['duchenne'], coverage: 'covered' }),
          o('myotonic', 'Recognize myotonic dystrophy type 1 (autosomal dominant CTG repeat in DMPK): myotonia (difficulty releasing grip), distal weakness, cataracts, frontal balding, testicular atrophy, arrhythmias, anticipation.', RMA),
        ]),
      ],
    },
    {
      id: 'bc-gen-repeat-chromosomal',
      title: 'Trinucleotide repeats and chromosomal disorders',
      subtopics: [
        st('bc-trinucleotide', 'Trinucleotide repeat expansion disorders', 3, ['genetics', 'disease', 'presentation'], [OL.genF], [x('neurology', 'movement disorders and ataxias')], [
          o('principles', 'Explain repeat expansion, anticipation and parent-of-origin bias (paternal for Huntington, maternal for fragile X).', RM, {
            existing: ['huntington'], coverage: 'partial', note: 'Paternal anticipation is explained for Huntington only.',
          }),
          o('huntington', 'Explain Huntington disease genetics (autosomal dominant CAG repeat in HTT, chromosome 4; repeat length vs onset).', RMA, {
            existing: ['huntington'], coverage: 'covered', home: 'neurology', outline: [OL.huntington],
          }),
          o('fragile-x', 'Explain fragile X syndrome: CGG expansion in FMR1 with hypermethylation and silencing (X-linked; premutation carriers) → intellectual disability, autism features, long face, large jaw and ears, macroorchidism after puberty, mitral valve prolapse.', RMA, { outline: [OL.fragileX] }),
          o('friedreich', 'Explain Friedreich ataxia: autosomal recessive GAA expansion in FXN (frataxin; mitochondrial iron handling) → childhood gait ataxia, loss of vibration and position sense, hypertrophic cardiomyopathy, diabetes, kyphoscoliosis, pes cavus.', RMA, { home: 'neurology', outline: [OL.friedreich] }),
          o('match', 'Match each repeat disorder to its triplet, gene, inheritance and parent-of-origin bias.', app),
        ]),
        st('bc-autosomal-trisomies', 'Autosomal trisomies', 3, ['genetics', 'presentation', 'labs'], [OL.genF], [x('reproductive', 'prenatal screening and diagnosis'), x('cardiovascular', 'congenital heart disease')], [
          o('nondisjunction', 'Explain meiotic nondisjunction, the maternal-age effect, and the three causes of Down syndrome (nondisjunction, Robertsonian translocation, mosaicism).', RM, { outline: [OL.down] }),
          o('down', 'Recognize Down syndrome features: flat facies, upslanting palpebral fissures, epicanthal folds, single palmar crease, sandal gap, hypotonia, intellectual disability.', RA, {
            mentions: ['alzheimer'], note: 'Down syndrome appears only as an Alzheimer risk factor (extra APP copy); this is not curriculum coverage.', outline: [OL.down] }),
          o('down-associations', 'Apply Down syndrome associations: endocardial cushion (AV septal) defect, duodenal atresia, Hirschsprung disease, ALL and AML (transient myeloproliferative disorder), early Alzheimer disease, hypothyroidism, atlantoaxial instability.', RA, {
            mentions: ['alzheimer'], outline: [OL.down, OL.cushion, OL.alzheimer],
          }),
          o('edwards', 'Recognize trisomy 18 (Edwards): growth restriction, prominent occiput, micrognathia, clenched hands with overlapping fingers, rocker-bottom feet, congenital heart disease; usually fatal within the first year.', RA),
          o('patau', 'Recognize trisomy 13 (Patau): holoprosencephaly, cleft lip and palate, microphthalmia, polydactyly, cutis aplasia, congenital heart disease; usually fatal within the first year.', RA, { outline: [OL.ntd] }),
          o('screening', 'Interpret first-trimester (β-hCG, PAPP-A, nuchal translucency) and second-trimester quad screens (AFP, β-hCG, estriol, inhibin A) for each trisomy, and recognize cell-free DNA, CVS and amniocentesis.', RA, { home: 'reproductive', outline: [OL.geneticScreening, OL.afp] }),
        ]),
        st('bc-sex-chromosome', 'Sex chromosome aneuploidies', 2, ['genetics', 'presentation', 'labs'], [OL.genF], [x('reproductive', 'gonadal and hormonal detail')], [
          o('klinefelter', 'Recognize Klinefelter syndrome (47,XXY): tall, small firm testes, gynecomastia, infertility, ↑ FSH and LH, ↓ testosterone; Barr body present.', RA, { existing: ['turner-klinefelter'], coverage: 'covered', home: 'reproductive', outline: [OL.klinefelter] }),
          o('turner', 'Recognize Turner syndrome (45,X or mosaic): short stature, webbed neck, lymphedema, streak ovaries with primary amenorrhea, ↑ FSH and LH, bicuspid aortic valve, coarctation, horseshoe kidney.', RA, { existing: ['turner-klinefelter'], coverage: 'covered', home: 'reproductive', outline: [OL.turner] }),
          o('xyy', 'Recognize 47,XYY (tall stature, usually normal fertility, possible learning and behavioral difficulties).', R),
          o('origin', 'Explain the meiotic origin of sex chromosome aneuploidy and interpret Barr body counts.', MA, { existing: ['turner-klinefelter'], coverage: 'covered' }),
        ]),
        st('bc-structural-chromosome', 'Structural chromosomal abnormalities and associations', 2, ['genetics', 'presentation'], [OL.genF], [x('immunology', 'DiGeorge immunology'), x('cardiovascular', 'conotruncal and supravalvular lesions')], [
          o('robertsonian', 'Explain Robertsonian translocation (fusion of the long arms of two acrocentric chromosomes 13, 14, 15, 21, 22): balanced carriers are healthy but have unbalanced offspring, miscarriages and familial Down syndrome.', RMA),
          o('reciprocal', 'Recognize balanced reciprocal translocations and their reproductive consequences.', R),
          o('22q11', 'Recognize 22q11.2 deletion (DiGeorge/velocardiofacial): failure of third and fourth pharyngeal pouches → thymic hypoplasia (T-cell deficiency), hypocalcemia from absent parathyroids, conotruncal heart defects, cleft palate, abnormal facies.', RMA, {
            mentions: ['calcium-pth'], outline: [OL.digeorge], note: 'Calcium regulation mentions parathyroid failure in DiGeorge only.',
          }),
          o('williams', 'Recognize Williams syndrome (7q11.23 deletion including elastin): elfin facies, intellectual disability with extreme friendliness, hypercalcemia, supravalvular aortic stenosis.', RA),
          o('cri-du-chat', 'Recognize cri-du-chat syndrome (5p deletion): high-pitched cat-like cry, microcephaly, intellectual disability, VSD.', RA),
          o('vacterl', 'Recognize VACTERL association (vertebral, anal atresia, cardiac, tracheoesophageal fistula, renal, limb anomalies) as a multifactorial association rather than a single-gene disorder.', R, { outline: [OL.vacterl] }),
        ]),
      ],
    },
  ],
};
