import type { Subdivision } from '../types';
import { O, c } from './links';

export const metabolism: Subdivision = {
  id: 'bc-metabolism',
  title: 'Metabolism',
  scope:
    'Energy pathways and their regulation, carbohydrate, amino acid and lipid metabolism, the inborn errors that disrupt them, and the fed and fasting states. Step 1 tests which enzyme is blocked, what accumulates or is lacking, how that produces the presentation and labs, and the hormonal and allosteric control that explains it.',
  topics: [
    {
      id: 'bc-met-overview',
      title: 'Metabolic organization and regulation',
      concepts: [
        c('bc-rate-limiting', 'Rate-limiting enzymes and their regulators', 'apply', 3, [O.geneticF, O.diabetes], ['enzyme-pathway', 'mechanism'], [
          'Glycolysis: PFK-1 (+ AMP, fructose-2,6-bisphosphate; − ATP, citrate). Gluconeogenesis: fructose-1,6-bisphosphatase (+ ATP, acetyl-CoA; − AMP, fructose-2,6-bisphosphate).',
          'TCA cycle: isocitrate dehydrogenase. Glycogenesis: glycogen synthase. Glycogenolysis: glycogen phosphorylase. HMP shunt: G6PD.',
          'De novo pyrimidine synthesis: carbamoyl phosphate synthetase II; purine synthesis: glutamine-PRPP amidotransferase. Urea cycle: carbamoyl phosphate synthetase I (+ N-acetylglutamate).',
          'Fatty acid synthesis: acetyl-CoA carboxylase; β-oxidation: carnitine acyltransferase I (− malonyl-CoA). Ketogenesis: HMG-CoA synthase. Cholesterol synthesis: HMG-CoA reductase (statins).',
          'Where pathways occur: mitochondria (β-oxidation, TCA, ETC, ketogenesis, PDH), cytoplasm (glycolysis, HMP shunt, fatty acid synthesis), both (heme, urea cycle, gluconeogenesis).',
        ], { existing: ['pfk1'], coverage: 'partial', gap: 'Only PFK-1 has a concept; the full set of rate-limiting enzymes, their regulators and cellular locations is absent.' }),
        c('bc-atp-cofactors', 'ATP production, activated carriers and cofactors', 'understand', 2, [O.geneticF], ['mechanism', 'enzyme-pathway'], [
          'Aerobic glucose metabolism yields about 32 ATP (malate–aspartate shuttle, heart and liver) or 30 ATP (glycerol-3-phosphate shuttle, muscle); anaerobic glycolysis 2 ATP.',
          'Activated carriers: ATP (phosphoryl), NADH/FADH₂ (electrons), coenzyme A (acyl), biotin (CO₂), tetrahydrofolate (one-carbon), S-adenosylmethionine (methyl), TPP (aldehyde).',
          'NAD⁺ for catabolism; NADPH for anabolism, the respiratory burst, cytochrome P450 and glutathione reduction.',
        ]),
      ],
    },
    {
      id: 'bc-met-energy',
      title: 'Glycolysis, pyruvate, TCA cycle and oxidative phosphorylation',
      concepts: [
        c('bc-glycolysis', 'Glycolysis and its regulation', 'apply', 3, [O.geneticF, O.anemiaF], ['enzyme-pathway', 'mechanism', 'disease'], [
          'Hexokinase (most tissues; low Km, inhibited by glucose-6-phosphate) vs glucokinase (liver and β cells; high Km, induced by insulin).',
          'ATP-generating steps (phosphoglycerate kinase, pyruvate kinase) and regulation of pyruvate kinase (+ fructose-1,6-bisphosphate; − ATP, alanine, glucagon via phosphorylation).',
          'Fructose-2,6-bisphosphate controls the PFK-1/fructose-1,6-bisphosphatase switch (insulin ↑, glucagon ↓ in liver).',
          'Pyruvate kinase deficiency: autosomal recessive hemolytic anemia in RBCs (no mitochondria), echinocytes; 2,3-BPG rises, shifting the oxygen curve right.',
        ], { existing: ['pfk1'], coverage: 'partial', gap: 'PFK-1 regulation covered; hexokinase vs glucokinase and pyruvate kinase deficiency missing.' }),
        c('bc-pdh', 'Pyruvate dehydrogenase complex and pyruvate fates', 'apply', 3, [O.genetic, O.neuroMetabolic, O.toxins], ['enzyme-pathway', 'disease', 'labs'], [
          'PDH converts pyruvate to acetyl-CoA; cofactors B1 (TPP), B2 (FAD), B3 (NAD⁺), B5 (CoA), lipoic acid; activated by low ATP/ADP, high NAD⁺/NADH and Ca²⁺ (exercise), inhibited by acetyl-CoA and NADH.',
          'Arsenic inhibits lipoic acid (garlic breath, vomiting, rice-water stools, QT prolongation).',
          'PDH deficiency (often X-linked): neurologic defects, lactic acidosis, high serum alanine in infancy; treat with ketogenic nutrients (lysine, leucine) and high-fat diet.',
          'Four fates of pyruvate: alanine (ALT, carries amino groups to liver), oxaloacetate (pyruvate carboxylase, biotin), acetyl-CoA (PDH), lactate (LDH, Cori cycle).',
        ], { existing: ['thiamine'], coverage: 'partial', gap: 'Thiamine-dependent enzymes are listed; the PDH complex, its regulation, arsenic and PDH deficiency are missing.' }),
        c('bc-tca', 'TCA cycle', 'understand', 2, [O.geneticF], ['enzyme-pathway'], [
          'Acetyl-CoA + oxaloacetate → citrate; per acetyl-CoA: 3 NADH, 1 FADH₂, 2 CO₂, 1 GTP; isocitrate dehydrogenase is rate limiting.',
          'α-Ketoglutarate dehydrogenase needs the same cofactors as PDH; succinyl-CoA links to heme synthesis and odd-chain fatty acid metabolism.',
        ]),
        c('bc-etc', 'Electron transport chain, inhibitors and uncouplers', 'apply', 3, [O.toxins, O.multiDrugs], ['mechanism', 'enzyme-pathway', 'pharmacology', 'presentation'], [
          'NADH enters at complex I, FADH₂ at complex II; the proton gradient drives ATP synthase.',
          'Electron transport inhibitors (↓ gradient, block ATP synthesis): rotenone and metformin at complex I, antimycin A at complex III, cyanide, carbon monoxide, azide and hydrogen sulfide at complex IV.',
          'ATP synthase inhibitor: oligomycin (gradient rises, transport stops).',
          'Uncouplers (↑ O₂ consumption, ↓ ATP, heat): 2,4-dinitrophenol, aspirin overdose, thermogenin (UCP1) in brown fat → hyperthermia.',
        ], { existing: ['metformin'], coverage: 'partial', gap: 'Metformin mechanism is covered pharmacologically; no concept on ETC inhibitors, cyanide/CO or uncouplers.' }),
      ],
    },
    {
      id: 'bc-met-carbohydrate',
      title: 'Carbohydrate metabolism',
      concepts: [
        c('bc-gluconeogenesis', 'Gluconeogenesis', 'apply', 3, [O.diabetes, O.genetic], ['enzyme-pathway', 'mechanism', 'disease'], [
          'Irreversible bypass enzymes: pyruvate carboxylase (mitochondria; biotin; activated by acetyl-CoA), PEP carboxykinase, fructose-1,6-bisphosphatase, glucose-6-phosphatase (ER; absent in muscle).',
          'Mainly liver (and kidney, intestinal epithelium); odd-chain fatty acids yield propionyl-CoA → succinyl-CoA, a glucose precursor; even-chain fatty acids cannot make glucose.',
          'Deficiency of a key gluconeogenic enzyme causes fasting hypoglycemia (e.g. von Gierke disease).',
        ]),
        c('bc-hmp-shunt', 'HMP shunt and G6PD deficiency', 'apply', 3, [O.anemia, O.genetic, O.multiDrugs], ['enzyme-pathway', 'mechanism', 'disease', 'histology', 'presentation'], [
          'Oxidative phase (G6PD, rate limiting) produces NADPH; nonoxidative phase (transketolase, TPP) makes ribose-5-phosphate for nucleotides.',
          'NADPH keeps glutathione reduced to neutralize H₂O₂ in RBCs; also used for fatty acid and steroid synthesis and the phagocyte respiratory burst (NADPH oxidase; chronic granulomatous disease).',
          'G6PD deficiency (X-linked recessive): oxidant triggers (infection, fava beans, sulfonamides, primaquine, dapsone, nitrofurantoin) → episodic hemolysis with Heinz bodies and bite cells; protective against malaria.',
        ], { existing: ['g6pd'], coverage: 'covered', gap: 'G6PD deficiency is covered; the nonoxidative phase and CGD link need only brief items.' }),
        c('bc-fructose-galactose', 'Disorders of fructose and galactose metabolism', 'apply', 3, [O.genetic, O.newborn, O.liver], ['enzyme-pathway', 'disease', 'presentation', 'labs'], [
          'Essential fructosuria (fructokinase deficiency): benign, fructose in urine (reducing sugar, not detected by glucose oxidase).',
          'Hereditary fructose intolerance (aldolase B deficiency): fructose-1-phosphate traps phosphate → hypoglycemia, vomiting, jaundice, cirrhosis after fruit, juice or honey; treat by removing fructose and sucrose.',
          'Galactokinase deficiency: galactitol accumulation → infantile cataracts; otherwise mild.',
          'Classic galactosemia (galactose-1-phosphate uridyltransferase deficiency): failure to thrive, jaundice, hepatomegaly, intellectual disability, cataracts, E. coli sepsis in neonates; remove galactose and lactose.',
        ]),
        c('bc-sorbitol-lactose', 'Sorbitol pathway and lactase deficiency', 'apply', 2, [O.diabetes, O.gi], ['enzyme-pathway', 'mechanism', 'disease', 'labs'], [
          'Aldose reductase converts glucose to sorbitol; sorbitol dehydrogenase converts it to fructose (liver, ovaries, seminal vesicles). Tissues with aldose reductase but little sorbitol dehydrogenase (lens, retina, kidneys, Schwann cells) accumulate sorbitol in hyperglycemia → osmotic damage (cataracts, retinopathy, neuropathy).',
          'Lactase deficiency (primary age-related, secondary to mucosal injury, congenital): bloating, osmotic diarrhea after dairy; stool pH low, breath hydrogen rises after lactose; normal villi in primary deficiency.',
        ], { existing: ['diabetes-types'], coverage: 'missing', gap: 'Diabetes concept mentions complications but not the sorbitol mechanism; lactase deficiency absent.' }),
        c('bc-glycogen', 'Glycogen metabolism and glycogen storage diseases', 'apply', 3, [O.genetic, O.neuromuscular, O.liver], ['enzyme-pathway', 'disease', 'presentation', 'labs', 'histology'], [
          'Regulation: glucagon and epinephrine activate glycogen phosphorylase via cAMP–PKA (liver); insulin activates glycogen synthase; branching and debranching enzymes; muscle uses glycogen locally (no glucose-6-phosphatase).',
          'Von Gierke (type I, glucose-6-phosphatase): severe fasting hypoglycemia, lactic acidosis, hyperuricemia, hypertriglyceridemia, hepatomegaly, increased liver glycogen.',
          'Pompe (type II, lysosomal acid α-glucosidase/acid maltase): cardiomegaly, hypotonia, early death in infantile form.',
          'Cori (type III, debranching enzyme): milder hypoglycemia with normal lactate, limit dextrin-like structures; McArdle (type V, muscle glycogen phosphorylase/myophosphorylase): exercise cramps, myoglobinuria, no rise in lactate, second-wind phenomenon.',
        ]),
      ],
    },
    {
      id: 'bc-met-amino',
      title: 'Amino acid and nitrogen metabolism',
      concepts: [
        c('bc-urea-cycle', 'Urea cycle and hyperammonemia', 'apply', 3, [O.genetic, O.liver, O.neuroMetabolic], ['enzyme-pathway', 'disease', 'labs', 'pharmacology', 'presentation'], [
          'Ammonia carried to the liver as alanine (from muscle) and glutamine; CPS I (rate limiting, needs N-acetylglutamate) in mitochondria.',
          'Hyperammonemia (acquired from liver disease or inherited cycle defects) depletes α-ketoglutarate and inhibits the TCA cycle: tremor (asterixis), slurred speech, vomiting, cerebral edema, blurred vision.',
          'Treatment principles: lactulose (traps NH₄⁺), rifaximin, low-protein diet, sodium benzoate and phenylbutyrate (bind amino acids for excretion).',
          'OTC deficiency (X-linked, most common): orotic aciduria with hyperammonemia and no megaloblastic anemia; N-acetylglutamate synthase deficiency mimics CPS I deficiency.',
        ], { existing: ['otc-deficiency'], coverage: 'partial', gap: 'OTC deficiency covered with orotic acid discrimination; the cycle, transport of ammonia and acquired hyperammonemia need items.' }),
        c('bc-aa-derivatives', 'Amino acid derivatives', 'understand', 2, [O.geneticF, O.anemiaF], ['enzyme-pathway', 'pharmacology'], [
          'Phenylalanine → tyrosine (phenylalanine hydroxylase, BH4) → DOPA (tyrosine hydroxylase) → dopamine → norepinephrine (dopamine β-hydroxylase, vitamin C) → epinephrine (PNMT, cortisol-induced); tyrosine → thyroxine and melanin.',
          'Tryptophan → niacin, serotonin, melatonin; histidine → histamine; glycine → porphyrin → heme; arginine → creatine, urea, nitric oxide; glutamate → GABA, glutathione.',
          'Essential amino acids; glucogenic vs ketogenic (only leucine and lysine are purely ketogenic); acidic and basic amino acids.',
        ]),
        c('bc-phenylketonuria', 'Phenylketonuria and other phenylalanine/tyrosine disorders', 'apply', 3, [O.genetic, O.newborn, O.skin], ['enzyme-pathway', 'disease', 'presentation', 'labs', 'genetics'], [
          'PKU: phenylalanine hydroxylase deficiency or BH4 deficiency → intellectual disability, musty odor, fair skin, eczema; tyrosine becomes essential; newborn screening; avoid phenylalanine and aspartame; maternal PKU causes microcephaly and cardiac defects in the fetus.',
          'Alkaptonuria (homogentisate oxidase deficiency): dark urine on standing, ochronosis of connective tissue, debilitating arthralgias; benign early.',
          'Albinism: tyrosinase deficiency or defective melanocyte migration; skin cancer risk.',
        ], { existing: ['pku'], coverage: 'partial', gap: 'PKU is covered; alkaptonuria and albinism lack concepts.' }),
        c('bc-other-aa-disorders', 'Homocystinuria, cystinuria and maple syrup urine disease', 'apply', 3, [O.genetic, O.renalMetabolic, O.newborn], ['enzyme-pathway', 'disease', 'presentation', 'labs'], [
          'Homocystinuria (cystathionine synthase deficiency, low affinity for B6, or methionine synthase defects): high homocysteine; tall marfanoid habitus with downward-inward lens subluxation, intellectual disability, osteoporosis, thrombosis and atherosclerosis.',
          'Cystinuria: autosomal recessive defect in renal PCT and intestinal transporter for cystine, ornithine, lysine, arginine → hexagonal cystine stones; positive urinary sodium cyanide–nitroprusside test; treat with hydration, urinary alkalinization and chelation.',
          'Maple syrup urine disease: branched-chain α-ketoacid dehydrogenase (B1) deficiency → raised isoleucine, leucine, valine; sweet-smelling urine, poor feeding, vomiting, CNS defects.',
          'Organic acidemias (propionic, methylmalonic): poor feeding, vomiting, anion gap metabolic acidosis, hyperammonemia, hypoglycemia in infancy.',
        ]),
      ],
    },
    {
      id: 'bc-met-lipid',
      title: 'Lipid metabolism and storage diseases',
      concepts: [
        c('bc-fatty-acid', 'Fatty acid synthesis and β-oxidation disorders', 'apply', 3, [O.genetic, O.neuromuscular, O.newborn], ['enzyme-pathway', 'disease', 'presentation', 'labs'], [
          'Synthesis in cytoplasm: citrate shuttle out of mitochondria, acetyl-CoA carboxylase (biotin, insulin-activated) makes malonyl-CoA, which inhibits carnitine acyltransferase I so newly made fatty acids are not oxidized.',
          'β-Oxidation in mitochondria: long-chain fatty acids enter through the carnitine shuttle.',
          'Systemic primary carnitine deficiency: weakness, hypotonia, hypoketotic hypoglycemia, cardiomyopathy.',
          'Medium-chain acyl-CoA dehydrogenase deficiency: hypoketotic hypoglycemia after fasting, vomiting, lethargy, seizures, coma, liver dysfunction; can cause sudden death in infants; avoid fasting.',
        ]),
        c('bc-ketones', 'Ketone bodies', 'apply', 3, [O.diabetes, O.substance, O.fluid], ['enzyme-pathway', 'mechanism', 'labs'], [
          'Liver makes acetoacetate and β-hydroxybutyrate from fatty-acid-derived acetyl-CoA when oxaloacetate is diverted to gluconeogenesis (prolonged fasting, DKA) or consumed by high NADH (alcohol use).',
          'The liver cannot use ketones (lacks succinyl-CoA–acetoacetate CoA transferase); heart, muscle and brain (in starvation) use them; RBCs cannot.',
          'Breath smells of acetone; urine nitroprusside test detects acetoacetate, not β-hydroxybutyrate (alcoholic ketoacidosis may give a falsely low result).',
        ], { existing: ['diabetes-types', 'anion-gap'], coverage: 'partial', gap: 'Ketoacidosis appears within DKA and anion-gap concepts; the synthesis pathway and the nitroprusside limitation are missing.' }),
        c('bc-fed-fasting', 'Fed state, fasting and starvation', 'apply', 2, [O.nutrition, O.diabetes], ['mechanism', 'enzyme-pathway'], [
          'Fed state (insulin): glycolysis, glycogenesis, fatty acid and protein synthesis, HMP shunt.',
          'Fasting (glucagon, epinephrine): hepatic glycogenolysis first (stores last about a day), then gluconeogenesis, lipolysis and ketogenesis.',
          'Starvation beyond about 3 days: adipose stores supply fatty acids and ketones become the main brain fuel, sparing protein; survival depends on fat stores; protein breakdown leads to vital organ failure.',
          'Insulin vs glucagon effects on key enzymes through phosphorylation (glucagon/cAMP/PKA) and dephosphorylation (insulin).',
        ]),
        c('bc-cholesterol', 'Cholesterol synthesis and steroid precursors', 'understand', 2, [O.lipid, O.multiDrugs], ['enzyme-pathway', 'pharmacology'], [
          'Acetyl-CoA → HMG-CoA → mevalonate (HMG-CoA reductase, rate limiting; induced by insulin, inhibited by glucagon, cholesterol and statins).',
          'Cholesterol is the precursor of bile acids, steroid hormones and vitamin D; lecithin–cholesterol acyltransferase (LCAT) esterifies cholesterol in HDL; cholesteryl ester transfer protein moves esters between lipoproteins.',
        ]),
        c('bc-lipoproteins', 'Lipoproteins, apolipoproteins and familial dyslipidemias', 'apply', 3, [O.lipid, O.genetic], ['enzyme-pathway', 'disease', 'genetics', 'labs', 'presentation'], [
          'Chylomicrons (dietary triglycerides; apo B-48, C-II, E), VLDL (hepatic triglycerides; apo B-100), IDL, LDL (cholesterol to tissues; apo B-100), HDL (reverse transport; apo A-I activates LCAT). Lipoprotein lipase (apo C-II cofactor) hydrolyzes triglycerides; apo E mediates remnant uptake.',
          'Abetalipoproteinemia (MTP deficiency, no apo B-48/B-100): fat malabsorption, steatorrhea, acanthocytes, ataxia, retinitis pigmentosa (fat-soluble vitamin loss).',
          'Familial chylomicronemia (type I: lipoprotein lipase or apo C-II deficiency): pancreatitis, eruptive xanthomas, lipemia retinalis, no increased coronary risk.',
          'Familial hypercholesterolemia (type II: LDL receptor, apo B-100 or PCSK9 gain of function; autosomal dominant): very high LDL, tendon (Achilles) xanthomas, corneal arcus, early MI.',
          'Dysbetalipoproteinemia (type III, apo E2): palmar and tuberoeruptive xanthomas; hypertriglyceridemia (type IV, hepatic VLDL overproduction): pancreatitis risk.',
        ]),
        c('bc-lysosomal-storage', 'Lysosomal storage diseases', 'apply', 3, [O.genetic, O.neuroCongenital, O.mskCongenital], ['enzyme-pathway', 'disease', 'presentation', 'histology', 'genetics'], [
          'Sphingolipidoses: Tay–Sachs (hexosaminidase A; cherry-red macula, no hepatosplenomegaly, onion-skin lysosomes), Niemann–Pick (sphingomyelinase; cherry-red macula with hepatosplenomegaly, foam cells), Gaucher (glucocerebrosidase; Gaucher cells with crumpled tissue-paper cytoplasm, bone crises, hepatosplenomegaly), Fabry (α-galactosidase A, X-linked; angiokeratomas, painful neuropathy, renal and cardiac disease), Krabbe (galactocerebrosidase; globoid cells, optic atrophy), metachromatic leukodystrophy (arylsulfatase A; central and peripheral demyelination).',
          'Mucopolysaccharidoses: Hurler (α-L-iduronidase; gargoylism, corneal clouding, airway obstruction) and Hunter (iduronate-2-sulfatase, X-linked; milder, no corneal clouding, aggressive behavior).',
          'All are autosomal recessive except Fabry and Hunter; Ashkenazi Jewish predisposition for Tay–Sachs, Niemann–Pick and Gaucher.',
        ], { existing: ['gaucher', 'tay-sachs', 'fabry'], coverage: 'partial', gap: 'Gaucher, Tay–Sachs and Fabry are covered and grouped (grp:lysosomal); Niemann–Pick, Krabbe, metachromatic leukodystrophy, Hurler and Hunter are missing.' }),
      ],
    },
  ],
};
