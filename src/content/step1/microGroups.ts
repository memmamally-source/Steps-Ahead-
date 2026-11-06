import { defineConcepts } from '../define';

/**
 * Group concepts for the bacteria knowledge table. Table-generated questions count towards these
 * concepts, so weak-area analysis can say "gram-negative rods" rather than "microbiology".
 */
export const microGroups = defineConcepts([
  {
    id: 'micro-staph-strep',
    title: 'Staphylococci, streptococci and enterococci',
    discipline: 'microbiology',
    system: 'multisystem',
    topic: 'micro-gram-positive',
    difficulty: 2,
    objectives: ['Identify gram-positive cocci with the laboratory algorithm', 'Link each species to its classic diseases'],
    facts: [
      'Catalase separates staphylococci (positive) from streptococci and enterococci (negative).',
      'Among staphylococci, coagulase identifies S. aureus; novobiocin separates S. epidermidis (sensitive) from S. saprophyticus (resistant).',
      'Alpha-hemolytic streptococci: S. pneumoniae is optochin-sensitive and bile-soluble; viridans streptococci are optochin-resistant.',
      'Beta-hemolytic streptococci: group A is bacitracin-sensitive; group B is bacitracin-resistant and CAMP-positive.',
      'Group D: Enterococcus grows in 6.5% NaCl; S. gallolyticus does not.',
    ],
    mechanism:
      'The identification algorithm follows biochemistry: catalase breaks down H₂O₂, coagulase converts fibrinogen to fibrin, and the pattern of red-cell lysis on blood agar (alpha partial, beta complete, gamma none) splits streptococci before disc tests finish the job.',
    associations: ['Catalase', 'Coagulase', 'Hemolysis pattern', 'Optochin, bacitracin, novobiocin discs', 'Lancefield groups'],
    misconception: 'Enterococci were once classed as group D streptococci; they are still catalase-negative, but they tolerate 6.5% NaCl and bile, which streptococci do not.',
    quick:
      'Catalase+ → staph (coagulase+ = S. aureus; novobiocin S = epidermidis, R = saprophyticus). Catalase− → strep: alpha (optochin S = pneumoniae, R = viridans), beta (bacitracin S = group A, R = group B), gamma (NaCl growth = Enterococcus).',
    detailed: [
      'Step 1 frequently presents a lab description and asks for the organism. Work through the tree in order: Gram stain and shape, catalase, then coagulase or the hemolysis pattern, then the relevant disc or growth test.',
      'Clinical anchors help confirm the answer: S. saprophyticus in a young woman with cystitis, S. epidermidis on a prosthetic valve or catheter, group B in a neonate, S. gallolyticus bacteremia prompting colonoscopy.',
    ],
    takeaway: 'Catalase → coagulase or hemolysis → disc test. Know the six discs and growth tests cold.',
    related: ['staph-aureus', 'strep-pneumoniae'],
  },
  {
    id: 'micro-gp-rods',
    title: 'Gram-positive rods and branching organisms',
    discipline: 'microbiology',
    system: 'multisystem',
    topic: 'micro-gram-positive',
    difficulty: 3,
    objectives: ['Separate spore-forming from non-spore-forming gram-positive rods', 'Match each organism to its toxin and disease'],
    facts: [
      'Spore-formers: Bacillus (aerobic/facultative) and Clostridium (obligate anaerobes).',
      'Non-spore-formers: Corynebacterium diphtheriae and Listeria monocytogenes.',
      'Branching: Nocardia (aerobic, weakly acid-fast) and Actinomyces (anaerobic, not acid-fast).',
      'Clostridial toxins: tetanospasmin (spastic paralysis), botulinum toxin (flaccid paralysis), alpha toxin (gas gangrene), toxins A and B (pseudomembranous colitis).',
    ],
    mechanism:
      'Spores are dormant, heat-resistant forms with a dipicolinic acid core; they survive cooking and disinfection and germinate in favorable conditions, which explains reheated-rice food poisoning and wound tetanus.',
    associations: ['Spores', 'Exotoxins', 'Branching filaments', 'Sulfur granules', 'Tumbling motility'],
    misconception: 'Nocardia and Actinomyces look alike but differ: Nocardia is aerobic and weakly acid-fast (treat with sulfonamides); Actinomyces is anaerobic and not acid-fast (treat with penicillin). "SNAP".',
    quick: 'Spores = Bacillus and Clostridium. No spores = Corynebacterium and Listeria. Branching = Nocardia (aerobic, acid-fast, sulfonamides) vs Actinomyces (anaerobic, penicillin).',
    detailed: [
      'Questions usually give a clinical toxin effect and ask for the organism or the toxin mechanism: spastic paralysis after a puncture wound (tetanus), descending flaccid paralysis after home-canned food or honey (botulism), crepitant myonecrosis (C. perfringens), diarrhea after antibiotics (C. difficile).',
      'Listeria is unusual among gram-positive rods: it is facultative intracellular, spreads by actin polymerization, grows in the cold and causes meningitis at the extremes of age and in pregnancy.',
    ],
    takeaway: 'Spores: Bacillus/Clostridium. No spores: Corynebacterium/Listeria. SNAP: Sulfonamides–Nocardia; Actinomyces–Penicillin.',
    related: ['micro-staph-strep'],
  },
  {
    id: 'micro-gram-negative',
    title: 'Gram-negative bacteria',
    discipline: 'microbiology',
    system: 'multisystem',
    topic: 'micro-gram-negative',
    difficulty: 3,
    objectives: ['Use lactose fermentation, oxidase, H₂S and urease to identify gram-negative organisms', 'Recognize the classic diseases and toxins'],
    facts: [
      'Neisseria: N. meningitidis ferments maltose and glucose and is encapsulated; N. gonorrhoeae ferments glucose only.',
      'Lactose fermenters grow pink on MacConkey agar: E. coli, Klebsiella (also Enterobacter, Citrobacter, Serratia).',
      'Non-fermenters: oxidase-positive Pseudomonas; oxidase-negative Salmonella, Shigella, Proteus.',
      'H₂S producers: Salmonella and Proteus; Proteus is also urease-positive.',
      'Curved oxidase-positive rods: Vibrio (alkaline media), Campylobacter (42 °C), H. pylori (urease-positive).',
    ],
    mechanism:
      'Lipid A of lipopolysaccharide is the endotoxin of gram-negative bacteria: it activates macrophages via TLR4, releasing IL-1, IL-6 and TNF-α, which drive fever and septic shock.',
    associations: ['MacConkey agar', 'Oxidase', 'H₂S', 'Urease', 'Endotoxin (LPS)'],
    misconception: 'Gram-negative organisms stain pink because the thin peptidoglycan layer loses the crystal violet–iodine complex during alcohol decolorization, not because they lack peptidoglycan.',
    quick: 'Lactose fermenters (pink on MacConkey): E. coli, Klebsiella. Non-fermenters: oxidase+ Pseudomonas; oxidase− Salmonella (H₂S+), Shigella (H₂S−), Proteus (H₂S+, urease+).',
    detailed: [
      'Identification questions build on a few tests: Gram stain and shape, lactose fermentation on MacConkey agar, oxidase, then H₂S, urease and motility. Curved rods are separated by growth conditions and urease.',
      'Clinical clues often settle it: struvite stones (Proteus), currant-jelly sputum (Klebsiella), burns or cystic fibrosis (Pseudomonas), bloody diarrhea from a tiny inoculum (Shigella), Guillain–Barré after diarrhea (Campylobacter).',
    ],
    takeaway: 'Lactose → oxidase → H₂S → urease. Pair each test with its organism and disease.',
    related: ['pseudomonas', 'beta-lactams'],
  },
  {
    id: 'micro-atypical',
    title: 'Spirochetes, mycobacteria and atypical bacteria',
    discipline: 'microbiology',
    system: 'multisystem',
    topic: 'micro-atypical',
    difficulty: 3,
    objectives: ['Recognize organisms that are not seen on Gram stain and why', 'Link each organism to its vector or exposure and disease'],
    facts: [
      'Spirochetes are too thin for routine light microscopy: Treponema is seen by dark-field microscopy.',
      'Mycobacteria have mycolic acid–rich walls and stain with acid-fast (Ziehl–Neelsen) stains.',
      'Mycoplasma has no cell wall (sterols in the membrane), so it does not Gram stain and is resistant to β-lactams.',
      'Chlamydia and Rickettsia are obligate intracellular because they cannot make their own ATP.',
    ],
    mechanism:
      'Each organism escapes the Gram stain for a structural reason: spirochetes are too thin, mycobacteria have waxy mycolic acids, Mycoplasma has no wall, and obligate intracellular organisms live inside host cells.',
    associations: ['Dark-field microscopy', 'Acid-fast stain', 'No cell wall', 'Obligate intracellular', 'Tick vectors'],
    misconception: 'Chlamydiae do have a cell wall, but it lacks classic peptidoglycan (little or no muramic acid), so they are not reliably treated with β-lactams.',
    quick: 'Not seen on Gram stain: spirochetes (too thin), mycobacteria (acid-fast), Mycoplasma (no wall), Chlamydia and Rickettsia (intracellular).',
    detailed: [
      'Questions combine an exposure with a classic finding: a painless chancre (Treponema), erythema migrans after an Ixodes bite (Borrelia), conjunctival suffusion after freshwater exposure (Leptospira), a rash moving from wrists and ankles inward (Rickettsia rickettsii).',
      'Mycobacterium tuberculosis is an obligate aerobe, which is why reactivation favors the well-ventilated lung apices; cord factor and sulfatides help it survive in macrophages.',
    ],
    takeaway: 'Know why each one is invisible on Gram stain, and pair each with its vector or exposure.',
    related: ['micro-gram-negative'],
  },
]);

/** Group concepts for the fungi and parasites table. */
export const fpGroups = defineConcepts([
  {
    id: 'micro-fungi',
    title: 'Fungi',
    discipline: 'microbiology',
    system: 'respiratory',
    alsoSystems: ['multisystem'],
    topic: 'micro-fungi-parasites',
    difficulty: 3,
    objectives: ['Identify fungi by their appearance in tissue', 'Link endemic fungi to geography and exposure, and opportunistic fungi to the host defect'],
    facts: [
      'Dimorphic fungi are molds in the cold (environment) and yeasts in the heat (body): Histoplasma, Blastomyces, Coccidioides (spherules, not yeast), Paracoccidioides, Sporothrix.',
      'Fungal cell membranes contain ergosterol rather than cholesterol, the target of polyenes and azoles.',
      'Aspergillus: acute-angle septate hyphae; Mucor and Rhizopus: wide-angle, broad, nonseptate hyphae.',
      'Cryptococcus is the encapsulated yeast (India ink, mucicarmine, capsular antigen).',
      'Pneumocystis causes interstitial pneumonia when CD4⁺ count is below 200/mm³.',
    ],
    mechanism:
      'Endemic fungi are inhaled as spores from soil in specific regions and convert to the tissue form at body temperature; opportunistic fungi cause disease when neutrophils (Aspergillus, Mucor, Candida) or T cells (Cryptococcus, Pneumocystis, mucocutaneous Candida) are deficient.',
    associations: ['Geography', 'Bird and bat droppings', 'DKA', 'Neutropenia', 'AIDS'],
    misconception: 'Coccidioides does not form yeast in tissue: it forms large spherules filled with endospores.',
    quick: 'Histo: tiny yeast in macrophages (Ohio/Mississippi). Blasto: broad-based budding. Cocci: spherules (Southwest). Aspergillus: 45° septate. Mucor: 90° nonseptate (DKA). Crypto: capsule.',
    detailed: [
      'Step 1 gives either a tissue description or an exposure and region and asks for the organism. Learn the tissue form and the geography together.',
      'Host defects predict opportunists: neutropenia → invasive Aspergillus and Mucor; DKA → Mucor; low CD4⁺ → Pneumocystis, Cryptococcus, disseminated Histoplasma; broad-spectrum antibiotics or catheters → Candida.',
    ],
    takeaway: 'Pair each fungus with its tissue form, its region or exposure, and the host it targets.',
    related: ['micro-parasites'],
  },
  {
    id: 'micro-parasites',
    title: 'Parasites',
    discipline: 'microbiology',
    system: 'gastrointestinal',
    alsoSystems: ['blood-immune', 'multisystem'],
    topic: 'micro-fungi-parasites',
    difficulty: 3,
    objectives: ['Identify protozoa and helminths by diagnostic finding and exposure', 'Recognise the complications that Step 1 links to each parasite'],
    facts: [
      'Protozoa are single-celled (Giardia, Entamoeba, Cryptosporidium, Toxoplasma, Plasmodium, Babesia, Trypanosoma, Leishmania, Trichomonas, Naegleria).',
      'Helminths are worms: nematodes (roundworms), cestodes (tapeworms) and trematodes (flukes).',
      'Helminth infections that invade tissue typically cause eosinophilia.',
      'Malaria species that form liver hypnozoites (P. vivax, P. ovale) need primaquine to prevent relapse.',
    ],
    mechanism:
      'The route of entry predicts the disease: ingested cysts or eggs (Giardia, Entamoeba, Taenia eggs), skin penetration by larvae (Strongyloides, hookworm, Schistosoma), and insect vectors (mosquitoes, sandflies, reduviid bugs, ticks, black flies).',
    associations: ['Eosinophilia', 'Vectors', 'Undercooked meat or fish', 'Fresh water', 'Immunosuppression'],
    misconception: 'Eating Taenia solium larvae in pork gives an intestinal tapeworm; neurocysticercosis comes from ingesting its eggs (fecal–oral).',
    quick: 'Ingested: Giardia, Entamoeba, Cryptosporidium, Ascaris, Enterobius, Trichinella, tapeworms. Skin: hookworm, Strongyloides, Schistosoma. Vectors: Plasmodium, Leishmania, T. cruzi, Babesia, filariae.',
    detailed: [
      'Classic pairings: Schistosoma haematobium and bladder squamous cell carcinoma; Clonorchis and cholangiocarcinoma; Diphyllobothrium and vitamin B12 deficiency; hookworm and iron deficiency; Strongyloides hyperinfection with corticosteroids.',
      'Protozoan clues: ingested RBCs (Entamoeba), acid-fast oocysts in AIDS (Cryptosporidium), banana-shaped gametocytes (P. falciparum), Maltese cross (Babesia), ring-enhancing lesions in AIDS (Toxoplasma).',
    ],
    takeaway: 'Learn each parasite by route of entry, diagnostic finding and its signature complication.',
    related: ['micro-fungi'],
  },
]);
