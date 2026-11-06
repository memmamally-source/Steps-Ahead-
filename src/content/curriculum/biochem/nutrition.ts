import type { Subdivision } from '../types';
import { O, c } from './links';

export const nutrition: Subdivision = {
  id: 'bc-nutrition',
  title: 'Nutrition',
  scope:
    'Fat- and water-soluble vitamins (function, the enzyme or pathway they serve, deficiency and toxicity), trace minerals, protein–energy malnutrition and ethanol metabolism. The outline lists Nutrition as its own section, so deficiency and toxicity presentations are tested directly; Step 1 asks why the deficiency produces its signs.',
  topics: [
    {
      id: 'bc-nut-fat-soluble',
      title: 'Fat-soluble vitamins',
      concepts: [
        c('bc-vit-a', 'Vitamin A (retinol)', 'apply', 2, [O.nutrition, O.multiDrugs], ['mechanism', 'disease', 'presentation', 'pharmacology'], [
          'Function: visual pigment (retinal), epithelial differentiation into specialized tissue, antioxidant.',
          'Deficiency: night blindness, xerophthalmia, Bitot spots, keratomalacia, dry scaly skin, immunosuppression (measles severity).',
          'Toxicity: acute nausea and blurred vision; chronic alopecia, dry skin, hepatotoxicity, idiopathic intracranial hypertension; teratogenic (isotretinoin: cleft palate, cardiac anomalies), so pregnancy is excluded before treatment.',
          'Therapeutic uses: all-trans retinoic acid for acute promyelocytic leukemia, isotretinoin for severe acne.',
        ]),
        c('bc-vit-d', 'Vitamin D', 'apply', 3, [O.nutrition, O.mskMetabolic], ['mechanism', 'enzyme-pathway', 'disease', 'labs'], [
          'Sources and activation: D3 from skin (UV) and D2 from plants; 25-hydroxylation in liver (storage form) then 1α-hydroxylation in kidney (active calcitriol), stimulated by PTH and low phosphate.',
          'Actions: increases intestinal calcium and phosphate absorption, increases bone resorption at high levels.',
          'Deficiency: rickets in children (bowed legs, rachitic rosary, craniotabes) and osteomalacia in adults; low calcium and phosphate, high PTH and alkaline phosphatase. Causes include malabsorption, low sun exposure, liver and kidney failure.',
          'Excess: hypercalcemia, hypercalciuria, low PTH; granulomatous disease (sarcoidosis) through macrophage 1α-hydroxylase.',
        ], { existing: ['bone-metabolism', 'calcium-pth'], coverage: 'partial', gap: 'Activation and osteomalacia labs exist across two concepts; rickets signs, granulomatous hypervitaminosis and deficiency causes are thin.' }),
        c('bc-vit-e', 'Vitamin E', 'recall', 1, [O.nutrition, O.anemiaF], ['mechanism', 'disease', 'presentation'], [
          'Antioxidant protecting membranes (RBCs, neurons) from free radicals.',
          'Deficiency: hemolytic anemia with acanthocytes, muscle weakness, posterior column and spinocerebellar tract degeneration (mimics B12 deficiency without megaloblastic anemia or methylmalonic acid elevation).',
          'High doses can increase the anticoagulant effect of warfarin and raise necrotizing enterocolitis risk in infants.',
        ]),
        c('bc-vit-k', 'Vitamin K', 'apply', 3, [O.nutrition, O.newborn, O.multiDrugs], ['mechanism', 'enzyme-pathway', 'disease', 'labs', 'pharmacology'], [
          'Cofactor for γ-carboxylation of glutamate residues on factors II, VII, IX, X and proteins C and S; activated by epoxide reductase (the warfarin target).',
          'Deficiency: prolonged PT then aPTT with normal bleeding time; neonates (sterile gut, poor placental transfer, low breast-milk content) → hemorrhagic disease of the newborn, prevented by intramuscular vitamin K at birth.',
          'Also from prolonged broad-spectrum antibiotics and fat malabsorption.',
        ], { existing: ['warfarin'], coverage: 'partial', gap: 'γ-carboxylation and warfarin are covered (grp:vitk); neonatal deficiency and the deficiency lab pattern lack items.' }),
      ],
    },
    {
      id: 'bc-nut-water-soluble',
      title: 'Water-soluble vitamins',
      concepts: [
        c('bc-vit-b1', 'Vitamin B1 (thiamine)', 'apply', 3, [O.nutrition, O.substance, O.neuroMetabolic], ['enzyme-pathway', 'disease', 'presentation'], [
          'TPP cofactor for pyruvate dehydrogenase, α-ketoglutarate dehydrogenase, transketolase and branched-chain α-ketoacid dehydrogenase.',
          'Wernicke encephalopathy (confusion, ophthalmoplegia, ataxia) and Korsakoff syndrome (confabulation, memory loss), dry beriberi (polyneuropathy), wet beriberi (high-output heart failure).',
          'Diagnosis by increased RBC transketolase activity after thiamine; give thiamine before glucose in alcohol use disorder.',
        ], { existing: ['thiamine'], coverage: 'covered', gap: 'Existing concept addresses enzymes and syndromes; confirm the transketolase assay point during review.' }),
        c('bc-vit-b2-b3', 'Vitamins B2 (riboflavin) and B3 (niacin)', 'understand', 2, [O.nutrition, O.genetic, O.lipid], ['enzyme-pathway', 'disease', 'presentation', 'pharmacology'], [
          'B2: component of FAD and FMN; deficiency causes cheilosis, angular stomatitis, corneal vascularization, magenta tongue.',
          'B3: component of NAD⁺/NADP⁺, made from tryptophan (requires B2 and B6); deficiency → pellagra (dermatitis, diarrhea, dementia).',
          'Causes of pellagra: Hartnup disease (defective neutral amino acid transporter, tryptophan loss), carcinoid syndrome (tryptophan used for serotonin), isoniazid (B6 depletion).',
          'Excess niacin (lipid therapy): flushing (prostaglandin-mediated, reduced by aspirin), hyperglycemia, hyperuricemia.',
        ]),
        c('bc-vit-b5-b6-b7', 'Vitamins B5, B6 and B7', 'understand', 2, [O.nutrition, O.anemiaF, O.multiDrugs], ['enzyme-pathway', 'disease', 'pharmacology'], [
          'B5 (pantothenic acid): component of coenzyme A and fatty acid synthase; deficiency rare (dermatitis, enteritis, adrenal insufficiency).',
          'B6 (pyridoxine → pyridoxal phosphate): transamination, decarboxylation, glycogen phosphorylase, heme (ALA synthase), cystathionine, neurotransmitter and niacin synthesis; deficiency → convulsions, peripheral neuropathy, sideroblastic anemia; caused by isoniazid and oral contraceptives.',
          'B7 (biotin): carboxylases (pyruvate carboxylase, acetyl-CoA carboxylase, propionyl-CoA carboxylase); deficiency from excessive raw egg white (avidin) → dermatitis, alopecia, lactic acidosis.',
        ]),
        c('bc-folate-b12', 'Folate (B9) and vitamin B12 (cobalamin)', 'apply', 3, [O.nutrition, O.anemia, O.neuroMetabolic, O.prenatal], ['enzyme-pathway', 'disease', 'presentation', 'labs', 'pharmacology'], [
          'Folate: one-carbon carrier (tetrahydrofolate) for purine and thymidine synthesis; absorbed in jejunum; small stores (months). Deficiency → megaloblastic anemia, hypersegmented neutrophils, high homocysteine, normal methylmalonic acid; no neurologic deficit; neural tube defects in pregnancy. Causes: poor diet (alcohol use), pregnancy, methotrexate, trimethoprim, phenytoin.',
          'B12: cofactor for methionine synthase (homocysteine → methionine, regenerates THF) and methylmalonyl-CoA mutase. Stored for years in the liver.',
          'B12 deficiency → megaloblastic anemia plus subacute combined degeneration (dorsal columns, lateral corticospinal tracts, spinocerebellar tracts); high homocysteine and methylmalonic acid.',
          'Causes of B12 deficiency: pernicious anemia (autoantibodies to intrinsic factor or parietal cells), gastrectomy, terminal ileum disease (Crohn, resection), Diphyllobothrium latum, strict vegan diet, metformin.',
          'Folate supplementation can correct the anemia of B12 deficiency but not the neurologic damage.',
        ]),
        c('bc-vit-c', 'Vitamin C (ascorbic acid)', 'apply', 2, [O.nutrition, O.mskMetabolic], ['enzyme-pathway', 'disease', 'presentation'], [
          'Hydroxylation of proline and lysine in collagen synthesis; reduces iron to Fe²⁺ for absorption; dopamine β-hydroxylase cofactor (dopamine → norepinephrine).',
          'Deficiency (scurvy): swollen, bleeding gums, perifollicular hemorrhage, corkscrew hairs, easy bruising, poor wound healing, hemarthrosis; at-risk: restrictive diets, older adults on tea and toast.',
          'Excess: calcium oxalate nephrolithiasis, iron overload in predisposed patients.',
        ], { existing: ['collagen-disorders'], coverage: 'partial', gap: 'Scurvy is mentioned as the hydroxylation step inside collagen disorders; signs and other functions missing.' }),
      ],
    },
    {
      id: 'bc-nut-minerals-malnutrition',
      title: 'Minerals, malnutrition and ethanol',
      concepts: [
        c('bc-zinc-trace', 'Zinc and other trace minerals', 'recall', 1, [O.nutrition, O.genetic], ['disease', 'presentation'], [
          'Zinc deficiency: delayed wound healing, hypogonadism, loss of taste and smell, alopecia, periorificial and acral dermatitis (acrodermatitis enteropathica is the inherited absorption defect), possible predisposition to alcoholic cirrhosis.',
          'Copper deficiency (and Menkes disease) and iron, iodine and fluoride status are addressed in their system topics.',
        ]),
        c('bc-malnutrition', 'Protein–energy malnutrition', 'apply', 2, [O.nutrition, O.liver], ['mechanism', 'disease', 'presentation'], [
          'Kwashiorkor: inadequate protein with relatively adequate calories → low oncotic pressure edema, fatty liver (low apolipoprotein synthesis), skin lesions, anemia, protuberant abdomen.',
          'Marasmus: total calorie deficiency → muscle and fat wasting without edema.',
          'Refeeding syndrome: insulin surge on refeeding → hypophosphatemia, hypokalemia, hypomagnesemia, with cardiac and respiratory complications.',
        ]),
        c('bc-ethanol-metabolism', 'Ethanol metabolism', 'apply', 3, [O.substance, O.liver, O.toxins], ['enzyme-pathway', 'mechanism', 'pharmacology', 'labs'], [
          'Alcohol dehydrogenase (zero-order kinetics) → acetaldehyde → acetaldehyde dehydrogenase → acetate; both steps generate NADH.',
          'Raised NADH/NAD⁺ ratio: lactic acidosis (pyruvate → lactate), fasting hypoglycemia (gluconeogenesis inhibited because pyruvate and oxaloacetate are diverted), hepatic steatosis (glycerol-3-phosphate excess, fatty acid synthesis favored over β-oxidation), ketoacidosis.',
          'Fomepizole inhibits alcohol dehydrogenase (methanol and ethylene glycol poisoning); disulfiram inhibits acetaldehyde dehydrogenase (acetaldehyde accumulation; also metronidazole and some cephalosporins and sulfonylureas cause disulfiram-like reactions).',
        ]),
      ],
    },
  ],
};
