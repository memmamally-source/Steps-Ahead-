import type { Subdivision } from '../types';
import { OL, R, RM, RA, MA, RMA, o, st, x } from './links';

export const cellular: Subdivision = {
  id: 'bc-cellular',
  title: 'Cellular biochemistry',
  scope:
    'Cell cycle control, organelles and trafficking, the cytoskeleton, membranes and transport, and cell signaling (G-protein-coupled receptors, second messengers, receptor tyrosine kinases, JAK–STAT and intracellular receptors). Step 1 tests how a defect in these systems produces disease and how drugs, toxins and hormones act through them.',
  topics: [
    {
      id: 'bc-cell-division',
      title: 'Cell cycle',
      subtopics: [
        st('bc-cell-cycle', 'Cell cycle regulation and cell types', 3, ['mechanism', 'genetics', 'pharmacology'], [OL.neoF], [
          x('hematology-oncology', 'tumor suppressor and oncogene catalog and cancer syndromes'), x('pathology', 'tissue repair and cell types'), x('pharmacology', 'cell-cycle-specific chemotherapy'),
        ], [
          o('phases', 'Describe G1, S, G2 and M, the G1/S and G2/M checkpoints, and regulation by cyclins, cyclin-dependent kinases and CDK inhibitors (p21, p27).', RM),
          o('rb-p53', 'Explain Rb (hypophosphorylated Rb holds E2F; CDK4/6 phosphorylation releases it) and p53 (DNA damage → p21 → G1 arrest, or apoptosis) and predict the effect of their loss (retinoblastoma, Li–Fraumeni syndrome).', RMA, { outline: [OL.retinoblastoma] }),
          o('cell-types', 'Classify permanent (neurons, cardiac and skeletal muscle, RBCs), stable (hepatocytes, lymphocytes, PCT cells) and labile (bone marrow, gut epithelium, skin, hair follicles) cells.', RA, { home: 'pathology' }),
          o('phase-drugs', 'Recognize phase-specific drugs: S phase (antimetabolites, hydroxyurea), G2 (bleomycin), M phase (vinca alkaloids, taxanes).', R, { home: 'pharmacology' }),
        ]),
      ],
    },
    {
      id: 'bc-organelles',
      title: 'Organelles and trafficking',
      subtopics: [
        st('bc-er-golgi', 'Endoplasmic reticulum, Golgi and vesicular trafficking', 2, ['mechanism', 'disease', 'presentation'], [OL.cellF], [], [
          o('er', 'Distinguish rough ER (secretory and membrane proteins; plasma cells, goblet cells) from smooth ER (steroid synthesis, drug detoxification; adrenal cortex, hepatocytes, gonads).', R),
          o('golgi', 'Describe Golgi functions: modification of N-linked oligosaccharides, O-linked glycosylation, and addition of mannose-6-phosphate to target lysosomal enzymes.', RM),
          o('vesicles', 'Match vesicle coats to routes: COPII (ER → Golgi), COPI (Golgi → ER, retrograde), clathrin (trans-Golgi → lysosome; plasma membrane → endosome).', R),
          o('i-cell', 'Explain I-cell disease: autosomal recessive N-acetylglucosaminyl-1-phosphotransferase deficiency → no mannose-6-phosphate tag → lysosomal enzymes secreted (high plasma levels) and lysosomes fill with undegraded material → coarse facial features, gingival hyperplasia, corneal clouding, restricted joint movement, claw hands, kyphoscoliosis, early death.', RMA, { outline: [OL.storage] }),
        ]),
        st('bc-peroxisome-proteasome', 'Peroxisomes and the ubiquitin–proteasome system', 2, ['mechanism', 'disease'], [OL.cellF], [x('neurology', 'demyelinating disease clinical detail'), x('endocrine', 'adrenal insufficiency')], [
          o('peroxisome', 'Describe peroxisomal functions: β-oxidation of very-long-chain fatty acids, α-oxidation of branched-chain fatty acids (phytanic acid), plasmalogen synthesis (myelin), catalase.', RM),
          o('zellweger', 'Recognize Zellweger syndrome (autosomal recessive peroxisome biogenesis defect, PEX genes): hypotonia, seizures, hepatomegaly, craniofacial abnormalities, early death; VLCFA accumulate.', RM),
          o('refsum', 'Recognize Refsum disease (autosomal recessive α-oxidation defect; phytanic acid accumulates): ataxia, peripheral neuropathy, retinitis pigmentosa, ichthyosis, shortened fourth toe; dietary restriction of phytanic acid.', RM),
          o('x-ald', 'Explain X-linked adrenoleukodystrophy: ABCD1 peroxisomal transporter defect → VLCFA accumulate in adrenal cortex, white matter and testes → adrenal insufficiency and progressive demyelination (behavioral change, visual loss, spasticity) in boys.', RMA, { home: 'neurology', outline: [OL.ald] }),
          o('proteasome', 'Describe ubiquitin tagging and proteasomal degradation, its failure in some neurodegenerative diseases, and proteasome inhibition by bortezomib (multiple myeloma).', RM),
        ]),
        st('bc-cytoskeleton', 'Cytoskeleton, motor proteins and cilia', 2, ['mechanism', 'disease', 'pharmacology'], [OL.cellF], [x('respiratory', 'bronchiectasis'), x('pharmacology', 'microtubule drug toxicities')], [
          o('elements', 'Compare microfilaments (actin; contraction, cytokinesis, microvilli), microtubules (α/β-tubulin; mitotic spindle, cilia, axonal transport) and intermediate filaments (structural support).', R),
          o('motors', 'Explain dynein (retrograde, toward the minus end) and kinesin (anterograde, toward the plus end) transport, and list microtubule drugs (colchicine, vinca alkaloids, taxanes, griseofulvin, mebendazole).', RM, {
            mentions: ['gout'], note: 'Gout mentions colchicine acting on neutrophil microtubules.',
          }),
          o('pcd', 'Explain primary ciliary dyskinesia (Kartagener syndrome): autosomal recessive dynein arm defect → immotile cilia → recurrent sinusitis, otitis, bronchiectasis, situs inversus (about half), male infertility (immotile sperm), reduced female fertility and ectopic pregnancy risk, low nasal nitric oxide.', RMA, { outline: [OL.pcd, OL.immotileCilia] }),
        ]),
        st('bc-intermediate-filaments', 'Intermediate filaments as tissue markers', 2, ['histology'], [OL.neoF], [x('pathology', 'immunohistochemistry of tumors')], [
          o('markers', 'Match intermediate filaments to tissue: vimentin (mesenchyme), desmin (muscle), cytokeratin (epithelium), GFAP (astrocytes, Schwann cells), neurofilaments (neurons), lamins (nuclear envelope).', RA, { home: 'pathology' }),
        ]),
        st('bc-membrane-pumps', 'Plasma membrane and transport', 2, ['mechanism', 'pharmacology'], [OL.cellF, OL.cvHfF], [x('cardiovascular', 'digoxin use in heart failure and arrhythmias'), x('renal', 'SGLT2 inhibitors and tubular transport')], [
          o('composition', 'Describe membrane composition (phospholipid bilayer, cholesterol, sphingolipids, glycolipids) and how cholesterol affects fluidity.', R),
          o('na-k-atpase', 'Explain the Na⁺/K⁺-ATPase (3 Na⁺ out, 2 K⁺ in; electrogenic; phosphorylated on the cytosolic side) and its role in resting membrane potential and secondary transport.', RM, {
            existing: ['digoxin'], coverage: 'partial', note: 'Digoxin covers pump inhibition only; stoichiometry and physiological roles are missing.',
          }),
          o('glycosides', 'Apply cardiac glycoside (digoxin, ouabain) inhibition to predict ↑ intracellular Ca²⁺ via reduced Na⁺/Ca²⁺ exchange.', MA, { existing: ['digoxin'], coverage: 'covered', home: 'cardiovascular' }),
          o('transporters', 'Classify transport: simple and facilitated diffusion (GLUT1 RBC/brain, GLUT2 liver/β cells/kidney, GLUT3 neurons/placenta, GLUT4 insulin-responsive muscle and fat, GLUT5 fructose), primary active, secondary active (SGLT1, SGLT2) and channels.', RM),
        ]),
      ],
    },
    {
      id: 'bc-signaling',
      title: 'Cell signaling',
      subtopics: [
        st('bc-gpcr', 'G-protein-coupled receptors', 3, ['mechanism', 'pharmacology', 'disease'], [OL.cellF], [
          x('pharmacology', 'autonomic receptor pharmacology and drug effects'), x('microbiology', 'toxin-producing organisms'), x('endocrine', 'hormone physiology'),
        ], [
          o('cycle', 'Describe seven-transmembrane receptors and the G-protein cycle: GDP–GTP exchange on Gα, dissociation of βγ, and termination by intrinsic GTPase activity.', RM),
          o('classes', 'Explain Gs (↑ adenylyl cyclase → cAMP → PKA), Gi (↓ adenylyl cyclase; βγ opens K⁺ channels) and Gq (phospholipase C → IP₃ + DAG).', RM),
          o('receptors', 'Assign high-yield receptors to their G protein: Gs (β1, β2, D1, H2, V2, and receptors for glucagon, PTH, TSH, ACTH, LH, FSH, hCG, calcitonin, GHRH, CRH); Gi (α2, M2, D2); Gq (α1, M1, M3, H1, V1, and receptors for angiotensin II [AT1], oxytocin, GnRH, TRH, gastrin).', RA, {
            home: 'pharmacology', mentions: ['thyroid-synthesis'], note: 'TSH acting through Gs is mentioned in thyroid synthesis.',
          }),
          o('toxins', 'Explain how cholera toxin and heat-labile E. coli toxin (ADP-ribosylate Gs: constitutively active → ↑ cAMP → CFTR chloride secretion → watery diarrhea) and pertussis toxin (ADP-ribosylates Gi: inhibition lost → ↑ cAMP) act.', MA, {
            home: 'microbiology', mentions: ['staph-aureus', 'pseudomonas'],
            note: 'Gs/Gi toxin actions appear only as answer explanations and in the ADP-ribosylating connection group; the signaling consequence is not taught.',
          }),
          o('mccune-albright', 'Recognize McCune–Albright syndrome: postzygotic activating GNAS mutation (Gsα) in a mosaic pattern → café-au-lait macules with irregular borders, polyostotic fibrous dysplasia, precocious puberty and other endocrine hyperfunction.', RM, { home: 'endocrine' }),
        ]),
        st('bc-second-messengers', 'Second messengers: cAMP, IP₃/DAG/Ca²⁺ and cGMP', 3, ['mechanism', 'pharmacology'], [OL.cellF], [x('pharmacology', 'phosphodiesterase inhibitors and nitrates'), x('cardiovascular', 'vascular smooth muscle physiology')], [
          o('camp', 'Explain cAMP signaling through PKA and its termination by phosphodiesterases; recognize PDE inhibitors (theophylline, milrinone [PDE3], cilostazol, roflumilast [PDE4], sildenafil [PDE5]).', RMA, { home: 'pharmacology' }),
          o('ip3-dag', 'Explain IP₃-mediated Ca²⁺ release from the ER, Ca²⁺–calmodulin signaling, and DAG activation of protein kinase C.', RM),
          o('cgmp', 'Explain cGMP signaling: nitric oxide → soluble guanylyl cyclase; ANP/BNP → membrane (receptor) guanylyl cyclase; cGMP → protein kinase G → smooth muscle relaxation; PDE5 inhibitors prolong it.', RMA),
          o('predict', 'Predict a hormone’s intracellular effect from its second messenger, e.g. vasopressin V1 (Gq, vasoconstriction) vs V2 (Gs, aquaporin insertion), and glucagon (cAMP → phosphorylation of metabolic enzymes) vs insulin.', ['application']),
        ]),
        st('bc-rtk', 'Receptor tyrosine kinases', 3, ['mechanism', 'pharmacology', 'disease'], [OL.cellF, OL.endoF], [
          x('endocrine', 'insulin physiology and diabetes'), x('hematology-oncology', 'oncogenes and targeted cancer therapy'),
        ], [
          o('mechanism', 'Explain RTK signaling: ligand-induced dimerization, autophosphorylation, adaptor docking, and the RAS–MAPK and PI3K–AKT–mTOR pathways; recognize ligands (insulin, IGF-1, EGF, PDGF, FGF, VEGF, NGF).', RM),
          o('insulin', 'Explain insulin receptor signaling: PI3K–AKT → GLUT4 translocation in muscle and fat, glycogen synthesis and anabolic effects; MAPK → growth.', MA, { home: 'endocrine', outline: [OL.dmF] }),
          o('oncogenic', 'Recognize gain-of-function signaling in disease: RAS (loss of GTPase activity), HER2/ERBB2 amplification, RET (MEN2), KIT, BRAF V600E, FGFR3 (achondroplasia), and BCR-ABL (non-receptor tyrosine kinase) with tyrosine kinase inhibitors (imatinib).', RA, {
            home: 'hematology-oncology', mentions: ['men-syndromes', 'skin-cancer', 'achondroplasia'],
            note: 'RET, BRAF and FGFR3 gain of function are each stated in their disease concepts, but the shared signaling mechanism is not taught.',
          }),
        ]),
        st('bc-jak-stat', 'JAK–STAT signaling', 3, ['mechanism', 'disease', 'pharmacology'], [OL.cellF, OL.bloodNeoF], [
          x('hematology-oncology', 'myeloproliferative neoplasms'), x('immunology', 'cytokines and SCID'), x('pharmacology', 'JAK inhibitors'),
        ], [
          o('mechanism', 'Explain JAK–STAT signaling: cytokine receptors lack intrinsic kinase activity; ligand binding activates associated JAKs, which phosphorylate STATs that dimerize and enter the nucleus to change transcription.', RM),
          o('ligands', 'Identify ligands that signal through JAK–STAT: growth hormone, prolactin, erythropoietin, thrombopoietin, G-CSF, GM-CSF, many interleukins and interferons.', RA),
          o('jak2', 'Apply JAK2 V617F (constitutive activation) to polycythemia vera, essential thrombocythemia and primary myelofibrosis, and recognize JAK inhibitors (ruxolitinib, tofacitinib).', RA, { home: 'hematology-oncology' }),
          o('scid', 'Recognize X-linked SCID (IL2RG, common γ chain) and JAK3-deficient SCID as failures of cytokine signaling.', R, { home: 'immunology', outline: [OL.scid] }),
        ]),
        st('bc-receptor-other', 'Intracellular receptors and other receptor classes', 2, ['mechanism'], [OL.cellF], [x('endocrine', 'hormone physiology'), x('neurology', 'ligand-gated ion channels')], [
          o('nuclear', 'Explain intracellular (nuclear) receptors for steroid hormones, thyroid hormone, calcitriol and retinoids: lipophilic ligand → receptor with zinc-finger DNA-binding domain → altered transcription, with slower onset.', RM),
          o('ser-thr', 'Recognize receptor serine/threonine kinases (TGF-β → SMAD) and their link to Marfan syndrome.', R, { mentions: ['collagen-disorders'] }),
          o('ion-channels', 'Recognize ligand-gated ion channels (nicotinic acetylcholine, GABA-A, NMDA, 5-HT3) as the fastest receptor class.', R, { home: 'neurology' }),
          o('classify', 'Classify a hormone or drug by its receptor mechanism (cAMP, cGMP, IP₃, intracellular, tyrosine kinase, JAK–STAT) and predict its time course.', ['application']),
        ]),
      ],
    },
  ],
};

