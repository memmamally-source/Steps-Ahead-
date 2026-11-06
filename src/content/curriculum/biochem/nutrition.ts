import type { Subdivision } from '../types';
import { OL, R, RM, RA, MA, RMA, d, ix, o, st, x } from './links';

/**
 * Nutrition is a listed section of the outline (Multisystem Processes & Disorders › Nutrition):
 * protein-calorie malnutrition; vitamin deficiencies and/or toxicities (A, B, B1, B3, B6, B9, B12, C,
 * D, E, K); mineral deficiencies and/or toxicities; obesity; enteral/parenteral nutrition (TPN). The
 * outline's introduction also notes a recent emphasis on new nutrition content.
 */
export const nutrition: Subdivision = {
  id: 'bc-nutrition',
  title: 'Nutrition',
  scope:
    'Each vitamin individually (function, the enzyme or pathway it serves, deficiency mechanism and findings, toxicity), minerals and trace elements, protein-energy malnutrition, refeeding, obesity, enteral and parenteral nutrition, and ethanol metabolism. Step 1 asks why a deficiency produces its signs and laboratory pattern, not only which vitamin is missing.',
  topics: [
    {
      id: 'bc-nut-fat-soluble',
      title: 'Fat-soluble vitamins',
      subtopics: [
        st('bc-vit-a', 'Vitamin A (retinol)', 2, ['mechanism', 'disease', 'presentation', 'pharmacology'], [OL.vitA], [x('hematology-oncology', 'APL treatment'), x('msk-skin', 'isotretinoin for acne')], [
          o('function', 'Explain vitamin A functions: retinal in rhodopsin (vision), retinoic acid acting on nuclear receptors for epithelial differentiation and immune function.', RM),
          d('deficiency', 'Explain the findings of vitamin A deficiency from its mechanism.', RMA,
            ix('inadequate retinol (malnutrition, fat malabsorption: CF, abetalipoproteinemia, cholestasis)', ['keratinized squamous epithelium (squamous metaplasia)'], ['rhodopsin regeneration', 'specialized epithelial differentiation', 'immune function'],
              ['impaired rod function in dim light', 'keratinization of conjunctiva and cornea'],
              ['night blindness', 'xerophthalmia, Bitot spots, keratomalacia, corneal ulceration', 'dry scaly skin', 'severe measles; vitamin A reduces measles mortality'])),
          d('toxicity', 'Explain acute and chronic vitamin A toxicity and its teratogenicity.', RMA,
            ix('excess retinoids (supplements, isotretinoin, high-liver diet)', ['retinoids in liver and tissues'], [],
              ['raised intracranial pressure', 'hepatic stellate cell injury', 'disrupted retinoic acid signaling in embryos'],
              ['acute: nausea, vomiting, vertigo, blurred vision', 'chronic: alopecia, dry skin, bone pain, hepatomegaly and hepatotoxicity, idiopathic intracranial hypertension', 'teratogenic: craniofacial, CNS and cardiac anomalies; pregnancy excluded and contraception required with isotretinoin'])),
          o('therapeutic', 'Recognize therapeutic retinoids: all-trans retinoic acid for acute promyelocytic leukemia (PML-RARA), isotretinoin for severe acne.', RA, { home: 'hematology-oncology' }),
        ]),
        st('bc-vit-d', 'Vitamin D', 3, ['mechanism', 'enzyme-pathway', 'disease', 'labs'], [OL.vitD, OL.osteomalacia, OL.boneDisease], [x('endocrine', 'calcium and parathyroid disorders'), x('msk-skin', 'metabolic bone disease'), x('renal', 'CKD mineral bone disease')], [
          o('activation', 'Describe vitamin D synthesis and activation: 7-dehydrocholesterol → D3 in skin (UVB), D2 from plants; 25-hydroxylation in liver (storage and measured form); 1α-hydroxylation in kidney (active calcitriol) stimulated by PTH and low phosphate and inhibited by FGF23; 24-hydroxylase inactivation.', RM, {
            existing: ['calcium-pth'], coverage: 'partial', note: 'PTH → 1α-hydroxylase is covered; skin, liver, FGF23 and storage form are missing.',
          }),
          o('actions', 'Explain calcitriol actions: ↑ intestinal calcium and phosphate absorption, bone mineralization (and resorption at high levels), feedback inhibition of PTH.', RM, {
            existing: ['calcium-pth'], coverage: 'partial', note: 'Intestinal absorption is covered; bone and PTH feedback are missing.',
          }),
          d('deficiency', 'Explain rickets and osteomalacia from vitamin D deficiency, including the laboratory pattern.', RMA,
            ix('low calcitriol', ['unmineralized osteoid'], ['intestinal calcium and phosphate absorption', 'serum phosphate'],
              ['low calcium stimulates PTH (secondary hyperparathyroidism)', 'PTH increases phosphate excretion', 'too little calcium × phosphate to mineralize osteoid'],
              ['rickets: bowed legs, rachitic rosary, craniotabes, delayed fontanelle closure, widened wrists, growth delay', 'osteomalacia: bone pain, proximal weakness, pseudofractures (Looser zones)', 'labs: low or normal calcium, low phosphate, high ALP, high PTH, low 25-OH vitamin D']),
            { existing: ['bone-metabolism'], coverage: 'partial', note: 'Lab pattern and mechanism are covered; clinical signs of rickets and osteomalacia are missing.' }),
          o('causes', 'Identify causes of deficiency: low sun exposure, dark skin, exclusive breastfeeding, malabsorption, liver disease (25-hydroxylation), CKD (1α-hydroxylation), anticonvulsants that induce CYP enzymes.', RA, { outline: [OL.vitaminPrevention] }),
          d('excess', 'Explain hypervitaminosis D and granulomatous hypercalcemia.', RMA,
            ix('excess vitamin D intake, or extrarenal 1α-hydroxylase in granuloma macrophages (sarcoidosis, TB)', ['calcitriol'], ['PTH (suppressed)'],
              ['increased intestinal calcium absorption and bone resorption'],
              ['hypercalcemia and hypercalciuria', 'kidney stones, polyuria, constipation, confusion'])),
          o('hereditary', 'Recognize hereditary rickets: vitamin D–dependent rickets (1α-hydroxylase or receptor defects) and X-linked hypophosphatemic rickets (PHEX, excess FGF23 → renal phosphate wasting with inappropriately low calcitriol; X-linked dominant).', R),
        ]),
        st('bc-vit-e', 'Vitamin E', 2, ['mechanism', 'disease', 'presentation'], [OL.vitE], [x('neurology', 'spinocerebellar degeneration'), x('hematology-oncology', 'hemolytic anemia')], [
          o('function', 'Explain vitamin E as a membrane antioxidant protecting RBCs and neurons from lipid peroxidation.', RM),
          d('deficiency', 'Explain vitamin E deficiency findings and how to distinguish them from B12 deficiency.', RMA,
            ix('low vitamin E (fat malabsorption: CF, cholestasis, abetalipoproteinemia)', ['lipid peroxidation of membranes'], ['membrane antioxidant protection'],
              ['oxidative damage to RBC membranes', 'degeneration of posterior columns and spinocerebellar tracts'],
              ['hemolytic anemia with acanthocytes', 'ataxia, loss of position and vibration sense, hyporeflexia', 'muscle weakness, retinopathy', 'no megaloblastic anemia and normal methylmalonic acid (unlike B12 deficiency)'])),
          o('excess', 'Recognize high-dose vitamin E effects: enhanced anticoagulation with warfarin and necrotizing enterocolitis in preterm infants.', R),
        ]),
        st('bc-vit-k', 'Vitamin K', 3, ['mechanism', 'enzyme-pathway', 'disease', 'labs', 'pharmacology'], [OL.vitK], [x('hematology-oncology', 'coagulation testing and bleeding disorders'), x('pharmacology', 'anticoagulants')], [
          o('function', 'Explain vitamin K as cofactor for γ-carboxylation of glutamate on factors II, VII, IX, X and proteins C and S, and the vitamin K cycle (epoxide reductase, the warfarin target).', RM, { existing: ['warfarin'], coverage: 'covered' }),
          d('deficiency', 'Explain vitamin K deficiency bleeding and its laboratory pattern, including in newborns.', RMA,
            ix('low vitamin K (neonate: sterile gut, poor placental transfer, low breast-milk content; adults: prolonged broad-spectrum antibiotics, fat malabsorption)', ['uncarboxylated (inactive) factors'], ['functional II, VII, IX, X, protein C and S'],
              ['factor VII has the shortest half-life, so the extrinsic pathway fails first'],
              ['prolonged PT/INR, then prolonged aPTT', 'normal platelet count and bleeding time', 'neonatal bleeding (vitamin K deficiency bleeding) prevented by intramuscular vitamin K at birth']),
            { existing: ['warfarin'], coverage: 'partial', outline: [OL.newbornScreen], note: 'Warfarin explains the PT/factor VII logic; nutritional and neonatal deficiency are missing.' }),
          o('warfarin', 'Apply vitamin K biology to warfarin action, monitoring and reversal.', RA, { existing: ['warfarin'], coverage: 'covered', home: 'pharmacology' }),
        ]),
      ],
    },
    {
      id: 'bc-nut-water-soluble',
      title: 'Water-soluble vitamins',
      subtopics: [
        st('bc-vit-b1', 'Vitamin B1 (thiamine)', 3, ['enzyme-pathway', 'disease', 'presentation'], [OL.vitB1, OL.alcohol], [x('neurology', 'Wernicke–Korsakoff neuroanatomy'), x('cardiovascular', 'high-output heart failure')], [
          o('enzymes', 'Identify the TPP-dependent enzymes: pyruvate dehydrogenase, α-ketoglutarate dehydrogenase, branched-chain α-ketoacid dehydrogenase, transketolase.', RM, { existing: ['thiamine'], coverage: 'covered' }),
          d('deficiency', 'Explain how thiamine deficiency produces Wernicke–Korsakoff syndrome and beriberi.', RMA,
            ix('thiamine deficiency (alcohol use disorder, malnutrition, bariatric surgery, hyperemesis)', ['pyruvate and lactate'], ['aerobic ATP production (PDH, α-KGDH)', 'transketolase activity'],
              ['energy failure in high-demand tissues (mammillary bodies, medial thalamus, periaqueductal gray; heart; peripheral nerves)', 'a glucose load raises thiamine demand and can precipitate Wernicke encephalopathy in depleted patients'],
              ['Wernicke: confusion, ophthalmoplegia/nystagmus, ataxia', 'Korsakoff: amnesia, confabulation', 'dry beriberi: symmetric polyneuropathy', 'wet beriberi: high-output heart failure', 'low RBC transketolase activity that rises with added thiamine']),
            { existing: ['thiamine'], coverage: 'covered' }),
          o('glucose', 'Apply the rule to give thiamine before glucose in at-risk patients and explain why.', MA, { existing: ['thiamine'], coverage: 'covered' }),
        ]),
        st('bc-vit-b2', 'Vitamin B2 (riboflavin)', 1, ['enzyme-pathway', 'disease'], [OL.vitB], [], [
          o('function', 'Identify riboflavin as the precursor of FAD and FMN (oxidation–reduction; succinate dehydrogenase).', R),
          o('deficiency', 'Recognize riboflavin deficiency: cheilosis, angular stomatitis, glossitis (magenta tongue), corneal vascularization, seborrheic dermatitis, normocytic anemia.', R),
        ], ['bc-vit-b2-b3']),
        st('bc-vit-b3', 'Vitamin B3 (niacin)', 3, ['enzyme-pathway', 'disease', 'presentation', 'pharmacology'], [OL.vitB3], [x('gastrointestinal', 'carcinoid syndrome'), x('cardiovascular', 'niacin as lipid therapy')], [
          o('function', 'Describe niacin as the precursor of NAD⁺ and NADP⁺ and its synthesis from tryptophan (requires B2 and B6).', RM),
          d('pellagra', 'Explain pellagra from its causes and mechanism.', RMA,
            ix('low niacin or tryptophan (corn-based diet, alcohol use disorder, Hartnup disease, carcinoid syndrome diverting tryptophan to serotonin, isoniazid causing B6 deficiency)', [], ['NAD⁺/NADP⁺ for redox reactions'],
              ['impaired energy metabolism in high-turnover tissues (skin, gut, brain)'],
              ['photosensitive dermatitis (Casal necklace)', 'diarrhea', 'dementia', 'death if untreated'])),
          o('hartnup', 'Recognize Hartnup disease: autosomal recessive defect of the neutral amino acid transporter in renal PCT and intestine → neutral aminoaciduria and tryptophan loss → pellagra-like rash; treat with high-protein diet and nicotinic acid.', RA, { outline: [OL.iem] }),
          o('excess', 'Recognize niacin excess (lipid therapy): prostaglandin-mediated flushing reduced by aspirin, hyperglycemia, hyperuricemia, hepatotoxicity.', RA, { home: 'cardiovascular' }),
        ], ['bc-vit-b2-b3']),
        st('bc-vit-b5', 'Vitamin B5 (pantothenic acid)', 1, ['enzyme-pathway'], [OL.vitB], [], [
          o('function', 'Recognize pantothenic acid as a component of coenzyme A and fatty acid synthase, and the rare deficiency (dermatitis, enteritis, alopecia, adrenal insufficiency, burning paresthesias).', R),
        ], ['bc-vit-b5-b6-b7']),
        st('bc-vit-b6', 'Vitamin B6 (pyridoxine)', 2, ['enzyme-pathway', 'disease', 'pharmacology'], [OL.vitB6, OL.sideroblastic], [x('hematology-oncology', 'sideroblastic anemia'), x('pharmacology', 'isoniazid')], [
          o('function', 'Identify pyridoxal phosphate-dependent reactions: transamination (ALT, AST), decarboxylation, glycogen phosphorylase, cystathionine synthesis, ALA synthase (heme), neurotransmitter synthesis (GABA, serotonin, dopamine, norepinephrine, histamine), niacin from tryptophan.', RM),
          d('deficiency', 'Explain the findings of vitamin B6 deficiency from the reactions it supports.', RMA,
            ix('low pyridoxal phosphate (isoniazid, alcohol, oral contraceptives, malnutrition)', ['iron in mitochondria of erythroid precursors (ring sideroblasts)'], ['ALA synthase activity (heme)', 'GABA synthesis', 'niacin synthesis'],
              ['impaired heme synthesis', 'reduced inhibitory neurotransmission'],
              ['sideroblastic microcytic anemia', 'seizures and irritability (especially infants)', 'peripheral neuropathy', 'cheilosis, stomatitis, glossitis'])),
          o('toxicity', 'Recognize that excess pyridoxine causes sensory neuropathy.', R),
        ], ['bc-vit-b5-b6-b7']),
        st('bc-vit-b7', 'Vitamin B7 (biotin)', 1, ['enzyme-pathway', 'disease'], [OL.vitB], [], [
          o('function', 'Identify biotin-dependent carboxylases: pyruvate carboxylase, acetyl-CoA carboxylase, propionyl-CoA carboxylase.', RM),
          o('deficiency', 'Recognize biotin deficiency (excess raw egg white avidin, long-term antibiotics): dermatitis, alopecia, enteritis, lactic acidosis.', RM),
        ], ['bc-vit-b5-b6-b7']),
        st('bc-vit-b9', 'Vitamin B9 (folate)', 3, ['enzyme-pathway', 'disease', 'labs', 'pharmacology'], [OL.vitB9, OL.folatePrevention, OL.ntd], [x('hematology-oncology', 'megaloblastic anemia work-up'), x('pharmacology', 'antifolate drugs'), x('reproductive', 'preconception care')], [
          o('metabolism', 'Describe folate absorption (jejunum), small body stores (months) and the role of tetrahydrofolate in one-carbon transfer for purine and thymidine synthesis (dihydrofolate reductase, thymidylate synthase).', RM),
          d('deficiency', 'Explain folate deficiency megaloblastic anemia and its laboratory signature.', RMA,
            ix('low folate (poor diet, alcohol use disorder, pregnancy, hemolysis and other high-demand states, methotrexate, trimethoprim, phenytoin, malabsorption)', ['homocysteine (impaired remethylation)'], ['tetrahydrofolate → dTMP and purine synthesis'],
              ['impaired DNA synthesis with normal RNA and protein synthesis → nuclear–cytoplasmic asynchrony'],
              ['macrocytic megaloblastic anemia, hypersegmented neutrophils, glossitis', 'no neurologic deficit', 'high homocysteine, normal methylmalonic acid'])),
          o('pregnancy', 'Apply folate to pregnancy: periconceptional supplementation prevents neural tube defects.', RA, { home: 'reproductive' }),
        ], ['bc-folate-b12']),
        st('bc-vit-b12', 'Vitamin B12 (cobalamin)', 3, ['enzyme-pathway', 'disease', 'labs', 'presentation'], [OL.vitB12], [x('hematology-oncology', 'megaloblastic anemia work-up'), x('neurology', 'subacute combined degeneration'), x('gastrointestinal', 'autoimmune gastritis')], [
          o('reactions', 'Identify the two B12-dependent reactions: methionine synthase (homocysteine + methyl-THF → methionine + THF) and methylmalonyl-CoA mutase (methylmalonyl-CoA → succinyl-CoA).', RM),
          o('absorption', 'Trace B12 absorption: release from food by acid and pepsin, binding to haptocorrin, release by pancreatic proteases, binding to intrinsic factor (parietal cells), uptake in the terminal ileum; large hepatic stores last years.', RM, {
            mentions: ['metformin'], note: 'Metformin mentions reduced terminal ileal absorption only.',
          }),
          d('deficiency', 'Explain both the hematologic and neurologic consequences of B12 deficiency.', RMA,
            ix('low B12', ['methyl-THF (folate trap)', 'homocysteine', 'methylmalonic acid'], ['THF for DNA synthesis', 'methionine and S-adenosylmethionine'],
              ['impaired DNA synthesis → megaloblastic change', 'abnormal myelin synthesis and maintenance (methylmalonyl-CoA and reduced methylation; mechanism partly proposed)'],
              ['macrocytic megaloblastic anemia, hypersegmented neutrophils, glossitis', 'subacute combined degeneration: dorsal columns (vibration and position loss), lateral corticospinal tracts (spasticity), spinocerebellar tracts (ataxia)', 'peripheral neuropathy, cognitive impairment', 'high homocysteine and high methylmalonic acid'])),
          o('causes', 'Identify causes: pernicious anemia (autoantibodies to intrinsic factor and parietal cells; atrophic body/fundus gastritis; gastric cancer risk), gastrectomy and bariatric surgery, ileal resection or Crohn disease, Diphyllobothrium latum, bacterial overgrowth, strict vegan diet, metformin, proton pump inhibitors, nitrous oxide.', RA, {
            existing: ['metformin'], coverage: 'partial', note: 'Only metformin as a cause is covered.',
          }),
          o('distinguish', 'Distinguish B12 from folate deficiency with methylmalonic acid and explain why folate alone can correct the anemia but not the neurologic damage.', MA),
        ], ['bc-folate-b12']),
        st('bc-vit-c', 'Vitamin C (ascorbic acid)', 2, ['enzyme-pathway', 'disease', 'presentation'], [OL.vitC], [], [
          o('function', 'Identify vitamin C functions: prolyl and lysyl hydroxylation in collagen synthesis, reduction of Fe³⁺ to Fe²⁺ for intestinal absorption, cofactor for dopamine β-hydroxylase.', RM, {
            existing: ['collagen-disorders'], coverage: 'partial', note: 'Collagen hydroxylation only.',
          }),
          d('scurvy', 'Explain scurvy from defective collagen hydroxylation.', RMA,
            ix('low vitamin C (restrictive diets, older adults on limited diets, alcohol use disorder, smoking)', [], ['hydroxyproline and hydroxylysine in collagen'],
              ['unstable triple helix → weak vessel walls, gums and connective tissue'],
              ['swollen, bleeding gums and loose teeth', 'perifollicular hemorrhages, corkscrew hairs, easy bruising', 'hemarthrosis and subperiosteal hemorrhage', 'poor wound healing, anemia']),
            { existing: ['collagen-disorders'], coverage: 'partial', note: 'Gums, perifollicular hemorrhages and corkscrew hairs are covered; at-risk groups, hemarthrosis and wound healing are missing.' }),
          o('excess', 'Recognize vitamin C excess: calcium oxalate stones, GI upset, worsening iron overload in hemochromatosis; use as an adjunct for methemoglobinemia.', R),
        ]),
      ],
    },
    {
      id: 'bc-nut-minerals',
      title: 'Minerals and trace elements',
      subtopics: [
        st('bc-zinc', 'Zinc', 2, ['disease', 'presentation'], [OL.mineral], [], [
          d('deficiency', 'Explain zinc deficiency, including acrodermatitis enteropathica.', RMA,
            ix('low zinc (malabsorption, alcohol use disorder, chronic kidney disease, parenteral nutrition without trace elements; inherited intestinal transporter defect in acrodermatitis enteropathica)', [], ['zinc-dependent enzymes and transcription factors'],
              ['impaired cell division, wound repair and immunity'],
              ['periorificial and acral dermatitis, alopecia, diarrhea', 'delayed wound healing, immune dysfunction', 'hypogonadism, reduced adult hair, dysgeusia and anosmia'])),
          o('excess', 'Recognize that excess zinc intake causes copper deficiency (zinc induces enterocyte metallothionein, which traps copper).', RM),
        ], ['bc-zinc-trace']),
        st('bc-copper', 'Copper', 2, ['enzyme-pathway', 'disease'], [OL.mineral, OL.wilson], [x('gastrointestinal', 'Wilson disease (copper toxicity)')], [
          o('enzymes', 'Identify copper enzymes: lysyl oxidase, cytochrome c oxidase, superoxide dismutase, tyrosinase, dopamine β-hydroxylase, ceruloplasmin (ferroxidase for iron transport).', RM),
          d('deficiency', 'Explain acquired copper deficiency and how it mimics B12 deficiency.', RMA,
            ix('low copper (bariatric surgery, malabsorption, excess zinc, parenteral nutrition)', [], ['ceruloplasmin ferroxidase activity', 'cytochrome c oxidase and other copper enzymes'],
              ['impaired iron mobilization', 'myelin and spinal cord dysfunction'],
              ['microcytic or normocytic anemia, neutropenia', 'myeloneuropathy with posterior column signs (resembles B12 deficiency)', 'hypopigmentation'])),
        ], ['bc-zinc-trace']),
        st('bc-iron', 'Iron as a nutrient', 2, ['mechanism'], [OL.mineral, OL.ironPrevention, OL.hemochromatosis], [x('hematology-oncology', 'iron deficiency anemia and iron studies'), x('gastrointestinal', 'hemochromatosis')], [
          o('absorption', 'Explain iron absorption and regulation: Fe²⁺ uptake in the duodenum (DMT1), export by ferroportin, inhibition of ferroportin by hepcidin, transport by transferrin, storage as ferritin.', RM),
          o('balance', 'Predict how pregnancy, blood loss, chronic inflammation (hepcidin) and HFE mutation change iron balance.', MA, { home: 'hematology-oncology' }),
        ], ['bc-zinc-trace']),
        st('bc-trace-other', 'Iodine, selenium, fluoride and chromium', 1, ['disease'], [OL.mineral], [x('endocrine', 'iodine and thyroid disease')], [
          o('iodine', 'Recognize iodine deficiency (goiter, hypothyroidism, congenital hypothyroidism with intellectual disability) and excess (Wolff–Chaikoff effect).', R, {
            mentions: ['thyroid-synthesis'], home: 'endocrine', outline: [OL.congHypothyroid], note: 'Thyroid synthesis covers Wolff–Chaikoff but not deficiency.',
          }),
          o('selenium', 'Recognize selenium as a cofactor for glutathione peroxidase and deiodinases; deficiency causes cardiomyopathy and myopathy.', R),
          o('fluoride-chromium', 'Recognize fluoride (deficiency: dental caries; excess: fluorosis) and chromium (insulin action; deficiency on long-term parenteral nutrition causes glucose intolerance).', R),
        ], ['bc-zinc-trace']),
        st('bc-electrolyte-nutrients', 'Magnesium and phosphate in nutrition', 2, ['mechanism', 'labs'], [OL.hypoMg, OL.hypophos], [x('renal', 'electrolyte handling')], [
          o('magnesium', 'Explain why hypomagnesemia causes hypocalcemia (impaired PTH release and action) and refractory hypokalemia (increased renal K⁺ loss).', MA, {
            existing: ['calcium-pth'], coverage: 'partial', note: 'Hypocalcemia from hypomagnesemia is covered; hypokalemia is missing.',
          }),
          o('phosphate', 'Explain causes and consequences of hypophosphatemia relevant to nutrition (refeeding, alcohol use disorder, vitamin D deficiency): weakness, rhabdomyolysis, respiratory failure, hemolysis.', MA),
        ], []),
      ],
    },
    {
      id: 'bc-nut-energy',
      title: 'Malnutrition, obesity and nutritional support',
      subtopics: [
        st('bc-malnutrition', 'Protein-energy malnutrition and refeeding', 3, ['mechanism', 'disease', 'presentation'], [OL.pem], [], [
          d('kwashiorkor', 'Explain kwashiorkor from protein deficiency with relatively preserved calories.', RMA,
            ix('inadequate protein relative to energy, often with infection and micronutrient deficiency', ['hepatic triglyceride (fatty liver)'], ['albumin', 'apolipoproteins for VLDL export', 'antioxidant defenses (glutathione)'],
              ['edema classically attributed to low oncotic pressure, but its pathogenesis is multifactorial (oxidative stress, sodium retention, capillary leak); hypoalbuminemia alone does not explain it', 'triglycerides cannot leave the liver'],
              ['edema and ascites with a protuberant abdomen', 'hepatomegaly from fatty liver', 'skin lesions, depigmentation, hair changes', 'anemia, irritability'])),
          d('marasmus', 'Explain marasmus from total energy deficiency.', RA,
            ix('inadequate total calories', [], ['adipose and muscle mass'],
              ['tissue catabolism to supply energy; albumin relatively preserved'],
              ['severe wasting of muscle and subcutaneous fat', 'no edema', 'growth failure'])),
          d('refeeding', 'Explain refeeding syndrome and who is at risk.', RMA,
            ix('rapid nutrition after prolonged starvation (anorexia nervosa, alcohol use disorder, chronic illness)', [], ['serum phosphate, potassium, magnesium', 'thiamine'],
              ['insulin surge drives phosphate, potassium and magnesium into cells', 'sudden ATP and 2,3-BPG synthesis consumes phosphate'],
              ['hypophosphatemia: weakness, rhabdomyolysis, respiratory and heart failure, arrhythmias', 'Wernicke encephalopathy if thiamine is not replaced']),
            { outline: [OL.hypophos] }),
        ]),
        st('bc-obesity', 'Obesity and energy balance', 2, ['mechanism', 'disease'], [OL.obesity, OL.metSyndrome], [x('endocrine', 'metabolic syndrome and type 2 diabetes'), x('gastrointestinal', 'nonalcoholic fatty liver disease')], [
          o('hormones', 'Explain appetite regulation: leptin from adipocytes signals satiety via the hypothalamic arcuate nucleus (obesity is mostly leptin resistance); ghrelin from the stomach stimulates hunger.', RM),
          o('consequences', 'Apply BMI categories (overweight ≥ 25, obese ≥ 30 kg/m²) and explain how visceral adiposity promotes insulin resistance, metabolic syndrome and fatty liver.', RA, { home: 'endocrine' }),
          o('genetic', 'Recognize genetic causes of obesity: Prader–Willi syndrome, congenital leptin deficiency, MC4R mutations.', R, { outline: [OL.pws] }),
        ], []),
        st('bc-tpn', 'Enteral and parenteral nutrition', 2, ['mechanism', 'disease', 'labs'], [OL.tpn], [x('gastrointestinal', 'parenteral-nutrition-associated liver disease')], [
          o('routes', 'Explain why enteral feeding is preferred when the gut works (maintains mucosal integrity and gallbladder emptying) and when parenteral nutrition is needed.', RM),
          d('complications', 'Explain metabolic complications of parenteral nutrition.', RMA,
            ix('parenteral nutrition bypassing the gut', ['glucose (hyperglycemia)', 'biliary sludge'], ['enteral stimulation of CCK and gallbladder emptying', 'essential fatty acids and trace elements if omitted'],
              ['cholestasis and gallstones', 'refeeding shifts in phosphate, potassium and magnesium'],
              ['hyperglycemia and refeeding syndrome', 'parenteral-nutrition-associated cholestasis and liver disease', 'essential fatty acid deficiency (linoleic, α-linolenic acid): scaly dermatitis, alopecia, poor wound healing', 'trace element deficiencies (zinc, copper, selenium, chromium)']),
            { outline: [OL.tpnCholestasis] }),
        ], []),
      ],
    },
    {
      id: 'bc-nut-ethanol',
      title: 'Ethanol metabolism',
      subtopics: [
        st('bc-ethanol-metabolism', 'Ethanol metabolism and its metabolic consequences', 3, ['enzyme-pathway', 'mechanism', 'pharmacology', 'labs'], [OL.alcohol, OL.alcoholicLiver], [
          x('gastrointestinal', 'alcohol-associated liver disease'), x('psychiatry', 'alcohol use disorder'), x('pharmacology', 'fomepizole and disulfiram'),
        ], [
          o('pathway', 'Describe ethanol oxidation by alcohol dehydrogenase (zero-order kinetics) and acetaldehyde dehydrogenase, induction of CYP2E1 (MEOS) with chronic use, and NADH generation at both steps.', RM),
          d('nadh', 'Explain the metabolic consequences of a raised NADH/NAD⁺ ratio in the liver.', RMA,
            ix('excess NADH from ethanol oxidation', ['lactate (pyruvate → lactate)', 'malate (oxaloacetate → malate)', 'glycerol-3-phosphate', 'ketone bodies (β-hydroxybutyrate predominant)', 'uric acid (lactate competes for renal urate excretion)'],
              ['gluconeogenic substrate (pyruvate, oxaloacetate)', 'fatty acid β-oxidation'],
              ['gluconeogenesis inhibited', 'triglyceride synthesis favored', 'ketogenesis increased'],
              ['fasting hypoglycemia', 'lactic and ketoacidosis (alcoholic ketoacidosis)', 'hepatic steatosis', 'hyperuricemia and gout flares']),
            { outline: [OL.metAcidosis, OL.alcoholicLiver] }),
          o('drugs', 'Apply fomepizole (alcohol dehydrogenase inhibitor for methanol and ethylene glycol poisoning) and disulfiram (acetaldehyde dehydrogenase inhibitor) and recognize disulfiram-like reactions (metronidazole, some cephalosporins, procarbazine, first-generation sulfonylureas).', RA, {
            home: 'pharmacology', outline: [OL.methanol, OL.ethyleneGlycol],
          }),
          o('aldh2', 'Recognize ALDH2 variant flushing (common in East Asian ancestry) as acetaldehyde accumulation.', R),
        ]),
      ],
    },
  ],
};
