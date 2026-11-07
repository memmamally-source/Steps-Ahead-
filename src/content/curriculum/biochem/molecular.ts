import type { Subdivision } from '../types';
import { OL, R, RM, RA, MA, RMA, d, ix, o, st, x } from './links';

export const molecular: Subdivision = {
  id: 'bc-molecular',
  title: 'Molecular biochemistry',
  scope:
    'Chromatin, nucleotide synthesis and salvage, DNA replication, mutation and repair, transcription, RNA processing, translation and protein processing, and collagen and elastin. Step 1 tests the molecular step that fails in a disease or that a drug or toxin blocks, and the clinical picture that follows.',
  topics: [
    {
      id: 'bc-chromatin',
      title: 'Chromatin and nucleotides',
      subtopics: [
        st('bc-chromatin-structure', 'Chromatin structure and epigenetic regulation', 2, ['mechanism', 'genetics'], [OL.genF], [], [
          o('nucleosome', 'Identify the nucleosome (histone octamer of H2A, H2B, H3, H4 with linker H1) and distinguish heterochromatin (condensed, transcriptionally inactive) from euchromatin (open, active).', R),
          o('epigenetic', 'Explain how DNA methylation at CpG islands and histone deacetylation silence genes, and how histone acetylation activates them.', RM),
          o('epigenetic-disease', 'Apply methylation-based silencing to X-inactivation (Barr bodies), genomic imprinting and fragile X syndrome.', MA, {
            mentions: ['turner-klinefelter'], note: 'Barr bodies are mentioned as a karyotype clue; the epigenetic mechanism is not taught.',
          }),
        ]),
        st('bc-nucleotide-synthesis', 'De novo purine and pyrimidine synthesis', 3, ['enzyme-pathway', 'pharmacology', 'disease'], [OL.metF, OL.anemiaF], [
          x('pharmacology', 'clinical use, toxicity and monitoring of antimetabolite drugs'),
          x('hematology-oncology', 'megaloblastic anemia work-up'),
        ], [
          o('structure', 'Distinguish purines (adenine, guanine; two rings) from pyrimidines (cytosine, uracil, thymine; one ring) and recognize that cytosine deamination gives uracil and uracil methylation gives thymine.', R),
          o('pathways', 'Describe purine synthesis on PRPP and pyrimidine synthesis as a free ring (orotate) attached to PRPP, with carbamoyl phosphate synthetase II, ribonucleotide reductase and thymidylate synthase (folate-dependent) as key steps.', RM),
          o('drug-targets', 'Match antimetabolites to the step they block: methotrexate, trimethoprim and pyrimethamine (dihydrofolate reductase), 5-fluorouracil (thymidylate synthase), hydroxyurea (ribonucleotide reductase), leflunomide (dihydroorotate dehydrogenase), mycophenolate and ribavirin (IMP dehydrogenase), 6-mercaptopurine and azathioprine (purine synthesis).', RA, { home: 'pharmacology', outline: [OL.drugsF] }),
          d('orotic-aciduria', 'Explain hereditary orotic aciduria and its laboratory signature.', RMA,
            ix('UMP synthase (autosomal recessive)', ['orotic acid (urinary orotic acid crystals)'], ['pyrimidine nucleotides for DNA synthesis'],
              ['impaired DNA synthesis in rapidly dividing erythroid precursors'],
              ['megaloblastic anemia not corrected by vitamin B12 or folate', 'failure to thrive, developmental delay', 'normal ammonia, without the characteristic features of urea-cycle dysfunction']),
            { existing: ['otc-deficiency'], coverage: 'partial', note: 'OTC concept contrasts orotic acid with and without hyperammonemia; inheritance, failure to respond to B12/folate and growth effects are absent.' }),
          o('otc-vs-orotic', 'Distinguish OTC deficiency (hyperammonemia, orotic aciduria, no megaloblastic anemia) from hereditary orotic aciduria.', ['application'], {
            existing: ['otc-deficiency'], coverage: 'covered',
          }),
        ]),
        st('bc-purine-salvage', 'Purine salvage, degradation and their deficiencies', 3, ['enzyme-pathway', 'disease', 'genetics', 'presentation'], [OL.metF], [
          x('immunology', 'SCID classification and management'), x('msk-skin', 'gout presentation and crystal analysis'),
        ], [
          o('pathway', 'Describe salvage by HGPRT (hypoxanthine, guanine) and APRT (adenine), and degradation by adenosine deaminase and xanthine oxidase to uric acid.', RM, {
            existing: ['gout'], coverage: 'partial', note: 'Gout states that xanthine oxidase produces urate; salvage enzymes and ADA are not described.',
          }),
          d('lesch-nyhan', 'Explain Lesch–Nyhan syndrome from the HGPRT defect to its findings.', RMA,
            ix('HGPRT (X-linked recessive)', ['hypoxanthine and guanine diverted to uric acid', 'PRPP, which drives de novo purine synthesis'], ['IMP and GMP salvage'],
              ['purine overproduction and hyperuricemia', 'basal ganglia dysfunction (mechanism incompletely understood)'],
              ['orange urate crystals in the diaper', 'gout and urate nephrolithiasis', 'intellectual disability, dystonia, choreoathetosis', 'compulsive self-mutilation']),
            { existing: ['gout'], coverage: 'partial', outline: [OL.gout], note: 'Gout gives HGPRT, gout, intellectual disability and self-mutilation; PRPP-driven overproduction, movement disorder and urate crystals are missing.' }),
          d('ada-scid', 'Explain why adenosine deaminase deficiency causes severe combined immunodeficiency.', RMA,
            ix('adenosine deaminase (autosomal recessive)', ['deoxyadenosine and dATP'], ['balanced deoxynucleotide pools (dATP inhibits ribonucleotide reductase; deoxyadenosine also inhibits S-adenosylhomocysteine hydrolase)'],
              ['lymphocyte precursors die from toxic metabolites and failed DNA synthesis'],
              ['recurrent bacterial, viral and fungal infections from early infancy', 'failure to thrive', 'absent T and B cells, absent thymic shadow']),
            { home: 'immunology', outline: [OL.ada, OL.scid] }),
          o('xo-inhibitors', 'Apply xanthine oxidase inhibition (allopurinol, febuxostat) to hyperuricemia and predict the interaction with azathioprine and 6-mercaptopurine.', RA, {
            existing: ['gout'], coverage: 'covered', home: 'pharmacology',
          }),
        ]),
      ],
    },
    {
      id: 'bc-dna',
      title: 'DNA replication, mutation and repair',
      subtopics: [
        st('bc-replication', 'DNA replication', 2, ['enzyme-pathway', 'pharmacology'], [OL.genF], [x('pharmacology', 'clinical use of topoisomerase inhibitors'), x('microbiology', 'bacterial targets of fluoroquinolones')], [
          o('enzymes', 'Describe the role of helicase, single-strand binding protein, topoisomerases I and II, primase, DNA polymerases (prokaryotic III and I; eukaryotic δ and ε) and ligase, including 3′→5′ proofreading and removal of RNA primers.', RM),
          o('strands', 'Explain leading vs lagging strand synthesis and Okazaki fragments; contrast single (prokaryotic) and multiple (eukaryotic) origins.', R),
          o('topo-drugs', 'Identify drugs that target topoisomerases: fluoroquinolones (bacterial DNA gyrase and topoisomerase IV), etoposide and teniposide (topoisomerase II), irinotecan and topotecan (topoisomerase I).', RA, { home: 'pharmacology' }),
          o('telomerase', 'Explain telomerase as an RNA-dependent DNA polymerase (reverse transcriptase) that adds telomeric repeats, active in germ, stem and many cancer cells.', RM, { outline: [OL.neoF] }),
        ]),
        st('bc-mutation-types', 'Types of mutation', 3, ['genetics', 'mechanism'], [OL.genF], [x('hematology-oncology', 'hemoglobinopathy clinical detail')], [
          o('classes', 'Classify silent, missense (conservative and nonconservative), nonsense, frameshift and splice-site mutations and predict their effect on the protein.', RMA, {
            existing: ['duchenne'], coverage: 'partial', note: 'Only frameshift vs in-frame is taught (via dystrophin).',
          }),
          o('examples', 'Apply mutation classes to sickle cell disease (missense, glutamate→valine in β-globin) and β-thalassemia (splice-site and nonsense mutations).', RA, {
            home: 'hematology-oncology', outline: [OL.sickle, OL.thalassemia],
          }),
          o('reading-frame', 'Explain why preservation of the reading frame, not deletion size, separates Duchenne from Becker muscular dystrophy.', MA, { existing: ['duchenne'], coverage: 'covered', outline: [OL.dystrophy] }),
          o('transition', 'Distinguish transitions (purine↔purine, pyrimidine↔pyrimidine) from transversions.', R),
        ]),
        st('bc-dna-repair', 'DNA repair and DNA damage response', 3, ['mechanism', 'disease', 'genetics'], [OL.neoF], [
          x('hematology-oncology', 'cancer screening, bone marrow failure work-up and treatment'),
          x('gastrointestinal', 'colorectal cancer syndromes in detail'), x('immunology', 'SCID and ataxia–telangiectasia immunology'),
        ], [
          o('ssb-pathways', 'Compare single-strand repair: nucleotide excision repair (bulky helix-distorting lesions such as UV pyrimidine dimers), base excision repair (glycosylases remove deaminated, oxidized or alkylated bases; AP endonuclease, polymerase, ligase) and mismatch repair (errors on the newly synthesized strand).', RM),
          o('xp', 'Explain xeroderma pigmentosum: autosomal recessive nucleotide excision repair defect → unrepaired UV damage → extreme photosensitivity, early freckling and childhood skin cancers (basal cell, squamous cell, melanoma) and ocular damage.', RMA, {
            existing: ['skin-cancer'], coverage: 'partial', outline: [OL.xp, OL.skinNeoF], note: 'Inheritance, repair defect and early skin cancers are stated; ocular and neurologic involvement are missing.',
          }),
          o('lynch', 'Explain Lynch syndrome (hereditary nonpolyposis colorectal cancer): autosomal dominant mismatch repair defect (MLH1, MSH2, MSH6, PMS2) → microsatellite instability → early, often right-sided colorectal cancer and endometrial, ovarian and other cancers.', RMA, {
            home: 'gastrointestinal', outline: [OL.hnpcc],
          }),
          o('mutyh', 'Recognize MUTYH-associated polyposis as an autosomal recessive base excision repair defect (failure to remove adenine mispaired with 8-oxoguanine) causing polyposis and colorectal cancer.', RM, {
            home: 'gastrointestinal', outline: [OL.mutyh],
          }),
          o('dsb-pathways', 'Compare double-strand break repair: homologous recombination (error-free, uses the sister chromatid in S/G2; BRCA1, BRCA2, RAD51) vs nonhomologous end joining (error-prone direct ligation; Ku, DNA-PKcs, Artemis, DNA ligase IV; also used in V(D)J recombination).', RM),
          o('brca', 'Recognize BRCA1/BRCA2 homologous recombination defects (autosomal dominant tumor suppressors) and their cancer spectrum (breast, ovarian, prostate, pancreatic), and the rationale for PARP inhibitors (synthetic lethality).', RA, { home: 'hematology-oncology', outline: [OL.fanconi] }),
          o('nhej-scid', 'Recognize that NHEJ defects (Artemis, DNA ligase IV, DNA-PKcs) cause SCID with radiosensitivity because V(D)J recombination fails.', RM, { home: 'immunology', outline: [OL.scid] }),
          o('atm', 'Explain ataxia–telangiectasia: ATM is a DNA damage response kinase that senses double-strand breaks and activates checkpoints (p53, CHK2) and repair, so defects cause cerebellar ataxia, oculocutaneous telangiectasias, IgA deficiency with sinopulmonary infections, raised AFP, lymphoma/leukemia risk and hypersensitivity to ionizing radiation (autosomal recessive).', RMA, {
            home: 'immunology', outline: [OL.fanconi, OL.immF], note: 'Replaces the first-version wording that grouped ataxia–telangiectasia under NHEJ; ATM is a damage-response kinase, not a repair pathway.',
          }),
          o('fanconi', 'Explain Fanconi anemia: the FANC pathway coordinates repair of DNA interstrand crosslinks (incision, translesion synthesis and homologous recombination; BRCA2 = FANCD1). Defects (mostly autosomal recessive) cause bone marrow failure, short stature, thumb and radial anomalies, café-au-lait spots, AML and head and neck squamous cell carcinoma; increased chromosomal breakage with crosslinking agents is diagnostic.', RMA, {
            home: 'hematology-oncology', outline: [OL.fanconi],
            note: 'Replaces the first-version wording that grouped Fanconi anemia under NHEJ; the defect is in interstrand crosslink repair.',
          }),
          o('bloom', 'Recognize Bloom syndrome (BLM helicase; homologous recombination defect): growth deficiency, photosensitive facial erythema, immunodeficiency and cancer predisposition.', R, { outline: [OL.fanconi] }),
        ]),
      ],
    },
    {
      id: 'bc-gene-expression',
      title: 'Transcription, RNA processing and translation',
      subtopics: [
        st('bc-transcription', 'Transcription and its regulation', 2, ['mechanism', 'pharmacology', 'enzyme-pathway'], [OL.genF], [x('microbiology', 'rifamycin use and resistance'), x('pharmacology', 'dactinomycin in chemotherapy')], [
          o('polymerases', 'Match eukaryotic RNA polymerase I (rRNA), II (mRNA, most snRNA, miRNA) and III (tRNA, 5S rRNA) to their products; contrast the single prokaryotic RNA polymerase.', R),
          o('regulation', 'Describe promoters (TATA, CAAT boxes), enhancers, silencers and transcription factors, and predict that promoter mutations reduce transcription (e.g. some β-thalassemias).', RM),
          o('inhibitors', 'Identify transcription inhibitors: α-amanitin (Amanita phalloides; RNA polymerase II; severe hepatotoxicity), rifamycins (bacterial RNA polymerase), dactinomycin (intercalation).', RA, { outline: [OL.toxF] }),
        ]),
        st('bc-rna-processing', 'RNA processing and RNA regulation', 2, ['mechanism', 'disease'], [OL.genF], [x('msk-skin', 'autoantibody patterns in SLE and mixed connective tissue disease')], [
          o('processing', 'Describe 5′ capping, 3′ polyadenylation (AAUAAA signal) and spliceosome-mediated intron removal by snRNPs; recognize P-bodies.', RM),
          o('snrnp-antibodies', 'Apply snRNP biology to autoantibodies: anti-Smith (SLE) and anti-U1 RNP (mixed connective tissue disease).', RA, {
            mentions: ['sle'], note: 'SLE lists anti-Smith as specific but does not link it to snRNPs.',
          }),
          o('splice-disease', 'Explain how splice-site mutations cause disease (e.g. β-thalassemia, some cancers).', MA, { outline: [OL.thalassemia] }),
          o('mirna', 'Recognize microRNAs and siRNAs as post-transcriptional silencers of mRNA.', R),
        ]),
        st('bc-translation', 'Translation and its inhibitors', 2, ['mechanism', 'pharmacology'], [OL.genF], [x('microbiology', 'antibiotic and toxin detail')], [
          o('trna', 'Describe tRNA structure (3′ CCA, anticodon) and aminoacyl-tRNA synthetase charging and proofreading.', RM),
          o('steps', 'Describe initiation (AUG, methionine, initiation factors, GTP), elongation (A, P and E sites; peptidyltransferase activity of rRNA) and termination (release factors).', RM),
          o('ribosomes', 'Compare eukaryotic 80S (60S + 40S) and prokaryotic 70S (50S + 30S) ribosomes and identify antibiotic classes by subunit.', RA, { home: 'microbiology', outline: [OL.infF] }),
          o('toxins', 'Identify toxins that halt translation: diphtheria toxin and Pseudomonas exotoxin A (ADP-ribosylate EF-2), Shiga toxin and ricin (inactivate the 60S rRNA).', RA, {
            home: 'microbiology', existing: ['pseudomonas'], mentions: ['staph-aureus'], coverage: 'partial',
            note: 'Exotoxin A → EF-2 is taught in Pseudomonas; diphtheria and Shiga appear only as answer explanations; ricin is absent.',
          }),
        ]),
        st('bc-protein-processing', 'Protein folding, modification and misfolding', 2, ['mechanism', 'disease'], [OL.metF], [x('respiratory', 'emphysema patterns'), x('gastrointestinal', 'liver disease detail')], [
          o('ptm', 'Recognize post-translational modifications: phosphorylation, glycosylation, hydroxylation, methylation, acetylation, ubiquitination.', R),
          o('folding', 'Explain chaperone-assisted folding and how misfolded proteins are retained in the ER and degraded by the proteasome; contrast loss of function (cystic fibrosis ΔF508) with toxic gain of function (α1-antitrypsin Z protein).', MA),
          d('a1at', 'Explain α1-antitrypsin deficiency from the misfolded protein to lung and liver disease.', RMA,
            ix('SERPINA1 Z allele (codominant): misfolded protein polymerizes in hepatocyte ER', ['α1-antitrypsin polymers in hepatocytes (PAS-positive, diastase-resistant globules)'], ['serum α1-antitrypsin → unopposed neutrophil elastase'],
              ['elastase destroys alveolar walls across the acinus', 'retained protein injures hepatocytes'],
              ['panacinar, lower-lobe emphysema in young adults (earlier in smokers)', 'neonatal cholestasis, chronic hepatitis, cirrhosis']),
            { existing: ['alpha1-antitrypsin'], coverage: 'partial', outline: [OL.a1at], note: 'Lung and adult liver disease are covered; neonatal cholestasis is missing.' }),
        ]),
        st('bc-collagen', 'Collagen, elastin and fibrillin', 3, ['enzyme-pathway', 'disease', 'genetics', 'presentation'], [OL.metF], [
          x('msk-skin', 'bone and joint manifestations'), x('cardiovascular', 'aortic disease and valve disease'),
        ], [
          o('synthesis', 'Order collagen synthesis by location: preprocollagen (Gly-X-Y) in RER, proline/lysine hydroxylation (vitamin C), glycosylation, procollagen triple helix, exocytosis, extracellular propeptide cleavage, lysyl oxidase cross-linking (copper).', RMA, {
            existing: ['collagen-disorders'], coverage: 'covered',
          }),
          o('types', 'Match collagen types I (bone, skin, tendon), II (cartilage, vitreous), III (vessels, granulation tissue, uterus) and IV (basement membrane) to tissues and diseases (OI, vascular EDS, Alport, Goodpasture).', RA, {
            existing: ['collagen-disorders'], coverage: 'partial', outline: [OL.alport], note: 'Types I and III appear; types II and IV and the Alport/Goodpasture links are missing.',
          }),
          o('oi', 'Explain osteogenesis imperfecta: usually autosomal dominant COL1A1/COL1A2 defect (reduced or abnormal type I collagen) → multiple fractures with minimal trauma, blue sclerae, hearing loss, dentinogenesis imperfecta; distinguish from child abuse.', RMA, {
            existing: ['collagen-disorders'], coverage: 'covered', outline: [OL.oi] }),
          o('eds', 'Explain Ehlers–Danlos syndrome: faulty collagen synthesis or processing (classic type V; vascular type III, COL3A1) → hyperextensible skin, joint hypermobility and dislocation, easy bruising, poor wound healing; vascular type risks arterial, bowel and uterine rupture and berry aneurysms.', RMA, {
            existing: ['collagen-disorders'], coverage: 'partial', note: 'Core features and type III are present; type V (classic), organ rupture, aneurysms and inheritance are missing.', outline: [OL.eds] }),
          o('menkes', 'Explain Menkes disease: X-linked ATP7A defect impairs copper absorption and transport → reduced lysyl oxidase and other copper enzymes → brittle kinky hair, growth failure, hypotonia, seizures, vascular fragility.', RMA, {
            mentions: ['collagen-disorders'], note: 'Menkes is named in one sentence; no mechanism or findings.',
          }),
          o('marfan', 'Explain Marfan syndrome: autosomal dominant FBN1 (fibrillin-1) defect; dysregulated (increased) TGF-β signaling contributes → tall stature, arachnodactyly, joint hypermobility, pectus deformity, upward-temporal lens subluxation, mitral valve prolapse, aortic root dilation and dissection (cystic medial degeneration).', RMA, {
            existing: ['collagen-disorders'], coverage: 'partial', note: 'Gene, inheritance, lens, aorta and TGF-β are present; arachnodactyly, pectus and mitral valve prolapse are missing.', outline: [OL.marfan] }),
          o('elastin', 'Describe elastin (glycine, proline, lysine-rich; desmosine cross-links by lysyl oxidase), its protection by α1-antitrypsin and its deletion in Williams syndrome.', RM),
        ]),
      ],
    },
  ],
};

