/**
 * Fungi and parasites (Step 1 microbiology). Each row has one distinctive identifying finding
 * (`traits.finding`, unique across the table, so identification questions have one best answer)
 * and hallmarks that belong to that organism only.
 */
import type { Hallmark } from './generate';
import type { TraitDef, TraitValue } from './traits';

export type FpGroup = 'opportunistic-fungi' | 'endemic-fungi' | 'protozoa' | 'helminths';

export interface FpRow {
  id: string;
  name: string;
  group: FpGroup;
  concept: string;
  traits: Partial<Record<'finding', TraitValue>>;
  idClues: 'finding'[];
  hallmarks: (string | Hallmark)[];
  summary: string;
  plural?: boolean;
}

export const FP_TRAITS: Record<'finding', TraitDef> = {
  finding: { phrase: (v) => String(v) },
};

const F = (id: string, name: string, group: FpGroup, finding: string, hallmarks: FpRow['hallmarks'], summary: string): FpRow => ({
  id,
  name,
  group,
  concept: group.endsWith('fungi') ? 'micro-fungi' : 'micro-parasites',
  traits: { finding },
  idClues: ['finding'],
  hallmarks,
  summary,
});

export const FUNGI_PARASITES: FpRow[] = [
  // ——— Opportunistic fungi ———
  F('candida', 'Candida albicans', 'opportunistic-fungi', 'budding yeast with pseudohyphae that forms germ tubes at 37 °C', ['oral thrush that can be scraped off', 'esophagitis in a patient with AIDS'], 'Yeast with pseudohyphae; germ tubes at 37 °C; thrush, vulvovaginitis, esophagitis and candidemia in the immunocompromised.'),
  F('aspergillus', 'Aspergillus fumigatus', 'opportunistic-fungi', 'septate hyphae branching at acute (45°) angles', ['allergic bronchopulmonary disease in asthma or cystic fibrosis', 'a fungus ball growing in an old tuberculosis cavity'], 'Mold with acute-angle septate hyphae; invasive aspergillosis in neutropenia, allergic bronchopulmonary aspergillosis, aspergilloma.'),
  F('mucor', 'Mucor and Rhizopus', 'opportunistic-fungi', 'broad, ribbon-like hyphae with few or no septa branching at wide (about 90°) angles', ['rhino-orbital-cerebral infection with a black necrotic eschar in diabetic ketoacidosis'], 'Molds with broad nonseptate hyphae at right angles; rhinocerebral mucormycosis in DKA or neutropenia; invades vessels.'),
  F('cryptococcus', 'Cryptococcus neoformans', 'opportunistic-fungi', 'yeast with a thick polysaccharide capsule seen with India ink', ['meningitis in AIDS with soap-bubble lesions in the brain', 'exposure to soil contaminated with pigeon droppings'], 'Encapsulated yeast (India ink, mucicarmine, latex agglutination for capsular antigen); meningitis in AIDS; pigeon droppings.'),
  F('pneumocystis', 'Pneumocystis jirovecii', 'opportunistic-fungi', 'disc-shaped cysts seen with methenamine silver stain', ['diffuse bilateral ground-glass opacities in AIDS when CD4⁺ count is below 200/mm³'], 'Yeast-like fungus; interstitial pneumonia in AIDS (CD4⁺ < 200/mm³) with ground-glass opacities; prophylaxis with TMP-SMX.'),
  F('malassezia', 'Malassezia', 'opportunistic-fungi', 'short hyphae and spores ("spaghetti and meatballs") on KOH preparation', ['hypopigmented or hyperpigmented scaly patches that fail to tan (tinea versicolor)'], 'Lipophilic skin yeast; tinea versicolor (azelaic acid damages melanocytes); spaghetti-and-meatballs KOH appearance.'),
  F('sporothrix', 'Sporothrix schenckii', 'endemic-fungi', 'cigar-shaped budding yeast in tissue', ['nodules spreading along lymphatics after a thorn prick while gardening'], 'Dimorphic fungus; lymphocutaneous sporotrichosis after a rose thorn or plant puncture ("rose gardener disease").'),

  // ——— Endemic (dimorphic) fungi ———
  F('histoplasma', 'Histoplasma capsulatum', 'endemic-fungi', 'small oval yeast within macrophages', ['the Mississippi and Ohio River valleys with bird or bat droppings (caves)'], 'Dimorphic fungus; tiny intracellular yeast in macrophages; Mississippi/Ohio River valleys; bat and bird droppings; palatal ulcers, hepatosplenomegaly in disseminated disease.'),
  F('blastomyces', 'Blastomyces dermatitidis', 'endemic-fungi', 'large yeast with a thick wall and broad-based budding', ['verrucous skin lesions with pneumonia in the Great Lakes region'], 'Dimorphic fungus; broad-based budding yeast; states east of the Mississippi and the Great Lakes; lung, skin and bone disease.'),
  F('coccidioides', 'Coccidioides immitis', 'endemic-fungi', 'spherules filled with endospores', ['"desert bumps" (erythema nodosum) after dust exposure in the southwestern United States'], 'Dimorphic fungus; spherules with endospores in tissue; southwestern US and California (dust, earthquakes); erythema nodosum, meningitis.'),
  F('paracoccidioides', 'Paracoccidioides brasiliensis', 'endemic-fungi', 'yeast with multiple buds in a "captain\'s wheel" pattern', ['oral and lung lesions in rural Latin America'], 'Dimorphic fungus of Latin America; yeast with multiple buds (captain’s wheel).'),

  // ——— Protozoa ———
  F('giardia', 'Giardia lamblia', 'protozoa', 'pear-shaped trophozoites with two nuclei, or cysts, in stool', ['foul-smelling fatty diarrhea after drinking stream water while camping'], 'Flagellated protozoan; cysts in untreated water; fat malabsorption with bloating and steatorrhea; more common and persistent in IgA deficiency and other antibody deficiencies.'),
  F('entamoeba', 'Entamoeba histolytica', 'protozoa', 'trophozoites containing ingested red blood cells', ['flask-shaped colonic ulcers and a liver abscess with "anchovy paste" contents'], 'Amoeba; trophozoites with ingested RBCs; bloody diarrhea, flask-shaped ulcers, liver abscess.'),
  F('cryptosporidium', 'Cryptosporidium', 'protozoa', 'acid-fast oocysts in stool', ['severe chronic watery diarrhea in AIDS from chlorine-resistant oocysts'], 'Protozoan with acid-fast oocysts; resistant to chlorination; mild diarrhea in healthy people, severe chronic diarrhea in AIDS.'),
  F('toxoplasma', 'Toxoplasma gondii', 'protozoa', 'tachyzoites and tissue cysts, with ring-enhancing brain lesions in AIDS', ['congenital chorioretinitis, hydrocephalus and diffuse intracranial calcifications after exposure to cat feces'], 'Protozoan from cat feces or undercooked meat; ring-enhancing lesions in AIDS (CD4⁺ < 100/mm³); congenital triad of chorioretinitis, hydrocephalus and calcifications.'),
  F('naegleria', 'Naegleria fowleri', 'protozoa', 'motile amoebae in cerebrospinal fluid', ['rapidly fatal meningoencephalitis after swimming in warm fresh water (entry via the cribriform plate)'], 'Free-living amoeba; enters via the cribriform plate while swimming in warm fresh water; primary amoebic meningoencephalitis.'),
  F('t-cruzi', 'Trypanosoma cruzi', 'protozoa', 'trypomastigotes in blood and amastigotes in cardiac muscle', ['dilated cardiomyopathy with megacolon and megaesophagus after reduviid ("kissing") bug bites'], 'Protozoan spread by reduviid bugs in Latin America; Chagas disease: unilateral periorbital swelling, then dilated cardiomyopathy, megacolon and megaesophagus.'),
  F('leishmania', 'Leishmania donovani', 'protozoa', 'macrophages packed with amastigotes', ['fever, weight loss, hepatosplenomegaly and pancytopenia after sandfly bites (kala-azar)'], 'Protozoan spread by sandflies; amastigotes in macrophages; visceral leishmaniasis (kala-azar) or cutaneous ulcers.'),
  F('p-falciparum', 'Plasmodium falciparum', 'protozoa', 'banana-shaped gametocytes and multiple ring forms per red cell', ['cerebral malaria from parasitized red cells sticking to capillary endothelium'], 'Malaria with irregular fevers; banana-shaped gametocytes; cytoadherence causes cerebral malaria and renal failure; most dangerous species.'),
  F('p-vivax', 'Plasmodium vivax', 'protozoa', 'enlarged red cells with Schüffner dots', ['relapsing malaria from dormant liver hypnozoites, requiring primaquine'], 'Malaria with 48-hour fever cycles; dormant liver hypnozoites (also P. ovale) need primaquine (check G6PD first).'),
  F('babesia', 'Babesia microti', 'protozoa', 'ring forms and tetrads ("Maltese cross") in red cells', ['hemolytic anemia after an Ixodes tick bite in the northeastern United States, worse after splenectomy'], 'Protozoan spread by Ixodes ticks (same vector as Lyme disease); Maltese cross in RBCs; hemolysis, severe in asplenia.'),
  F('trichomonas', 'Trichomonas vaginalis', 'protozoa', 'motile pear-shaped flagellated trophozoites on wet mount', ['frothy yellow-green vaginal discharge with a "strawberry" cervix'], 'Sexually transmitted flagellated protozoan; frothy green discharge, strawberry cervix; motile trophozoites on wet mount.'),

  // ——— Helminths ———
  F('enterobius', 'Enterobius vermicularis', 'helminths', 'eggs collected on transparent tape from the perianal skin', ['perianal itching at night in a school-age child'], 'Pinworm; fecal–oral; nocturnal perianal pruritus; tape test.'),
  F('strongyloides', 'Strongyloides stercoralis', 'helminths', 'rhabditiform larvae (not eggs) in stool', ['hyperinfection with gram-negative sepsis in a patient taking corticosteroids'], 'Roundworm whose larvae penetrate skin; autoinfection; hyperinfection with corticosteroids or HTLV-1.'),
  F('hookworm', 'Necator americanus (hookworm)', 'helminths', 'oval, thin-shelled eggs in stool with eosinophilia', ['iron deficiency anemia from intestinal blood loss after walking barefoot on soil'], 'Hookworm larvae penetrate skin; worms suck blood in the small intestine → microcytic anemia.'),
  F('ascaris', 'Ascaris lumbricoides', 'helminths', 'knobby-coated oval eggs in stool', ['intestinal obstruction at the ileocecal valve or biliary obstruction from adult worms'], 'Giant roundworm; ingested eggs; larvae migrate through the lungs (Löffler syndrome); bowel or biliary obstruction.'),
  F('trichinella', 'Trichinella spiralis', 'helminths', 'encysted larvae in skeletal muscle on biopsy', ['myalgia, periorbital edema and eosinophilia after eating undercooked pork or bear meat'], 'Roundworm from undercooked pork or game; larvae encyst in striated muscle; fever, myositis, periorbital edema.'),
  F('taenia', 'Taenia solium', 'helminths', 'cysticerci (cystic larvae) in brain tissue', ['seizures from neurocysticercosis after ingesting eggs (fecal–oral)'], 'Pork tapeworm: eating larvae in pork → intestinal tapeworm; ingesting eggs → cysticercosis and neurocysticercosis with seizures.'),
  F('echinococcus', 'Echinococcus granulosus', 'helminths', 'a liver cyst with daughter cysts ("eggshell" calcification)', ['anaphylaxis if a hydatid cyst ruptures, after contact with dogs in sheep-raising areas'], 'Dog tapeworm (sheep intermediate host); hydatid cysts in the liver; rupture causes anaphylaxis.'),
  F('s-haematobium', 'Schistosoma haematobium', 'helminths', 'eggs with a terminal spine in urine', ['squamous cell carcinoma of the bladder after freshwater exposure in Egypt'], 'Fluke from freshwater snails; eggs with terminal spines in urine; hematuria and bladder squamous cell carcinoma.'),
  F('s-mansoni', 'Schistosoma mansoni', 'helminths', 'eggs with a prominent lateral spine in stool', ['periportal "pipestem" fibrosis with portal hypertension'], 'Fluke from freshwater snails; lateral-spined eggs in stool; granulomas around eggs cause periportal fibrosis and portal hypertension.'),
  F('clonorchis', 'Clonorchis sinensis', 'helminths', 'small operculated eggs in stool with inflammation of the bile ducts', ['cholangiocarcinoma and pigmented gallstones in East Asia'], 'Liver fluke from undercooked fish; biliary inflammation, pigmented stones, cholangiocarcinoma.'),
  F('wuchereria', 'Wuchereria bancrofti', 'helminths', 'microfilariae in blood drawn at night', ['elephantiasis from lymphatic blockage after mosquito bites'], 'Filarial nematode spread by mosquitoes; lymphatic obstruction → elephantiasis after many years.'),
  F('onchocerca', 'Onchocerca volvulus', 'helminths', 'microfilariae in skin snips', ['"river blindness" after black fly bites'], 'Filarial nematode spread by black flies; skin nodules and river blindness.'),
  F('diphyllobothrium', 'Diphyllobothrium latum', 'helminths', 'megaloblastic anemia with broad tapeworm segments (proglottids) passed in stool', ['vitamin B12 deficiency from the worm competing for B12'], 'Fish tapeworm; competes for vitamin B12 → megaloblastic anemia.'),
];

export const FP_GROUP_TITLE: Record<FpGroup, string> = {
  'opportunistic-fungi': 'opportunistic fungi',
  'endemic-fungi': 'dimorphic fungi',
  protozoa: 'protozoa',
  helminths: 'helminths',
};
