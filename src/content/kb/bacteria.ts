/**
 * Bacteria knowledge table (Step 1 microbiology). Each trait is recorded only where it is a
 * standard, unambiguous Step 1 fact; anything variable is left undefined and is never asked.
 * Generators in ./generate.ts build questions from these rows and verify one best answer.
 */
import type { Hallmark } from './generate';
import type { TraitDef, TraitValue } from './traits';

export type BacteriaGroup =
  | 'gp-cocci'
  | 'gp-rods'
  | 'branching'
  | 'gn-cocci'
  | 'gn-enteric'
  | 'gn-curved'
  | 'gn-other'
  | 'spirochete'
  | 'acid-fast'
  | 'atypical';

export interface Bacterium {
  id: string;
  name: string;
  group: BacteriaGroup;
  /** Concept the row's questions count towards (weak-area analysis). */
  concept: string;
  morphology: string;
  traits: Partial<Record<BacteriaTrait, TraitValue>>;
  /** Trait keys that together identify the organism within its group (verified by tests). */
  idClues: BacteriaTrait[];
  /** Unique, classic associations (each must belong to this organism only within its group). */
  hallmarks: (string | Hallmark)[];
  plural?: boolean;
  /** One-line teaching summary shown after every question about the organism. */
  summary: string;
}

export type BacteriaTrait =
  | 'gram'
  | 'catalase'
  | 'coagulase'
  | 'hemolysis'
  | 'optochin'
  | 'bacitracin'
  | 'novobiocin'
  | 'bileSoluble'
  | 'nacl'
  | 'lactose'
  | 'oxidase'
  | 'h2s'
  | 'urease'
  | 'spore'
  | 'oxygen'
  | 'maltose'
  | 'capsule';

export const BACTERIA_TRAITS: Record<BacteriaTrait, TraitDef> = {
  gram: { phrase: (v) => (v === 'acid-fast' ? 'acid-fast' : `gram-${v}`) },
  catalase: { phrase: (v) => (v ? 'catalase-positive' : 'catalase-negative'), asks: [true, false] },
  coagulase: { phrase: (v) => (v ? 'coagulase-positive' : 'coagulase-negative'), asks: [true, false] },
  hemolysis: { phrase: (v) => `${v}-hemolytic`, asks: ['alpha', 'beta', 'gamma'] },
  optochin: { phrase: (v) => `optochin-${v}`, asks: ['sensitive', 'resistant'] },
  bacitracin: { phrase: (v) => `bacitracin-${v}`, asks: ['sensitive', 'resistant'] },
  novobiocin: { phrase: (v) => `novobiocin-${v}`, asks: ['sensitive', 'resistant'] },
  bileSoluble: { phrase: (v) => (v ? 'bile-soluble' : 'bile-insoluble') },
  nacl: { phrase: (v) => (v ? 'able to grow in 6.5% NaCl' : 'unable to grow in 6.5% NaCl'), asks: [true] },
  lactose: { phrase: (v) => (v === 'fermenter' ? 'a lactose fermenter' : 'a lactose non-fermenter'), asks: ['fermenter', 'non-fermenter'] },
  oxidase: { phrase: (v) => (v ? 'oxidase-positive' : 'oxidase-negative'), asks: [true] },
  h2s: { phrase: (v) => (v ? 'an H₂S producer' : 'H₂S-negative'), asks: [true] },
  urease: { phrase: (v) => (v ? 'urease-positive' : 'urease-negative'), asks: [true] },
  spore: { phrase: (v) => (v ? 'spore-forming' : 'non-spore-forming'), asks: [true] },
  oxygen: { phrase: (v) => `${/^[aeiou]/.test(String(v)) ? 'an' : 'a'} ${v}`, asks: ['obligate aerobe', 'obligate anaerobe'] },
  maltose: { phrase: (v) => (v ? 'a maltose fermenter' : 'unable to ferment maltose'), asks: [true, false] },
  capsule: { phrase: (v) => (v ? 'encapsulated' : 'unencapsulated') },
};

const B = (b: Bacterium) => b;

export const BACTERIA: Bacterium[] = [
  // ——— Gram-positive cocci ———
  B({
    id: 's-aureus', name: 'Staphylococcus aureus', group: 'gp-cocci', concept: 'staph-aureus', morphology: 'cocci in clusters',
    traits: { gram: 'positive', catalase: true, coagulase: true, hemolysis: 'beta' },
    idClues: ['catalase', 'coagulase'],
    hallmarks: ['protein A binding the Fc region of IgG', 'toxic shock syndrome toxin (TSST-1), a superantigen', 'vomiting within hours of eating contaminated egg or mayonnaise salads (preformed enterotoxin)'],
    summary: 'Catalase-positive, coagulase-positive staphylococcus. Protein A, TSST-1, preformed enterotoxins; MRSA carries mecA (PBP2a).',
  }),
  B({
    id: 's-epidermidis', name: 'Staphylococcus epidermidis', group: 'gp-cocci', concept: 'micro-staph-strep', morphology: 'cocci in clusters',
    traits: { gram: 'positive', catalase: true, coagulase: false, novobiocin: 'sensitive' },
    idClues: ['catalase', 'coagulase', 'novobiocin'],
    hallmarks: ['biofilm on prosthetic devices and IV catheters', 'the commonest blood-culture contaminant'],
    summary: 'Coagulase-negative, novobiocin-sensitive staphylococcus; skin flora that forms biofilms on catheters and prosthetic material.',
  }),
  B({
    id: 's-saprophyticus', name: 'Staphylococcus saprophyticus', group: 'gp-cocci', concept: 'micro-staph-strep', morphology: 'cocci in clusters',
    traits: { gram: 'positive', catalase: true, coagulase: false, novobiocin: 'resistant' },
    idClues: ['catalase', 'coagulase', 'novobiocin'],
    hallmarks: ['uncomplicated urinary tract infection in sexually active young women'],
    summary: 'Coagulase-negative, novobiocin-resistant staphylococcus; second commonest cause of uncomplicated UTI in young women.',
  }),
  B({
    id: 's-pneumoniae', name: 'Streptococcus pneumoniae', group: 'gp-cocci', concept: 'strep-pneumoniae', morphology: 'lancet-shaped diplococci',
    traits: { gram: 'positive', catalase: false, hemolysis: 'alpha', optochin: 'sensitive', bileSoluble: true, capsule: true },
    idClues: ['hemolysis', 'optochin'],
    hallmarks: ['IgA protease and a polysaccharide capsule (quellung reaction)', 'rusty sputum with lobar pneumonia'],
    summary: 'Alpha-hemolytic, optochin-sensitive, bile-soluble lancet-shaped diplococci; capsule is the key virulence factor.',
  }),
  B({
    id: 'viridans', name: 'Viridans group streptococci', plural: true, group: 'gp-cocci', concept: 'micro-staph-strep', morphology: 'cocci in chains',
    traits: { gram: 'positive', catalase: false, hemolysis: 'alpha', optochin: 'resistant', bileSoluble: false },
    idClues: ['hemolysis', 'optochin'],
    hallmarks: ['dental caries (S. mutans)', 'dextran-mediated adherence to fibrin–platelet aggregates on damaged heart valves'],
    summary: 'Alpha-hemolytic, optochin-resistant, bile-insoluble oral flora; dental caries and subacute endocarditis of damaged valves.',
  }),
  B({
    id: 's-pyogenes', name: 'Streptococcus pyogenes (group A)', group: 'gp-cocci', concept: 'micro-staph-strep', morphology: 'cocci in chains',
    traits: { gram: 'positive', catalase: false, hemolysis: 'beta', bacitracin: 'sensitive' },
    idClues: ['hemolysis', 'bacitracin'],
    hallmarks: ['M protein causing molecular mimicry in acute rheumatic fever', 'scarlet fever via erythrogenic (pyrogenic) exotoxin'],
    summary: 'Beta-hemolytic, bacitracin-sensitive (group A). M protein; pharyngitis, impetigo, rheumatic fever, post-streptococcal GN.',
  }),
  B({
    id: 's-agalactiae', name: 'Streptococcus agalactiae (group B)', group: 'gp-cocci', concept: 'micro-staph-strep', morphology: 'cocci in chains',
    traits: { gram: 'positive', catalase: false, hemolysis: 'beta', bacitracin: 'resistant' },
    idClues: ['hemolysis', 'bacitracin'],
    hallmarks: ['a positive CAMP test', 'routine rectovaginal screening of pregnant patients at 36–37 weeks'],
    summary: 'Beta-hemolytic, bacitracin-resistant, CAMP-positive (group B). Colonises the vagina; neonatal sepsis, pneumonia and meningitis.',
  }),
  B({
    id: 'enterococcus', name: 'Enterococcus faecalis', group: 'gp-cocci', concept: 'micro-staph-strep', morphology: 'cocci in pairs and short chains',
    traits: { gram: 'positive', catalase: false, hemolysis: 'gamma', nacl: true },
    idClues: ['catalase', 'nacl'],
    hallmarks: ['vancomycin resistance via D-Ala-D-Lac', 'urinary and biliary infections after instrumentation'],
    summary: 'Catalase-negative, usually nonhemolytic (group D) cocci that grow in 6.5% NaCl and bile; VRE alters D-Ala-D-Ala to D-Ala-D-Lac.',
  }),
  B({
    id: 's-gallolyticus', name: 'Streptococcus gallolyticus (bovis)', group: 'gp-cocci', concept: 'micro-staph-strep', morphology: 'cocci in chains',
    traits: { gram: 'positive', catalase: false, hemolysis: 'gamma', nacl: false },
    idClues: ['hemolysis', 'nacl'],
    hallmarks: ['bacteremia or endocarditis that should prompt evaluation for colorectal cancer'],
    summary: 'Group D streptococcus that does not grow in 6.5% NaCl; bacteremia/endocarditis linked to colorectal cancer.',
  }),

  // ——— Gram-positive rods ———
  B({
    id: 'b-anthracis', name: 'Bacillus anthracis', group: 'gp-rods', concept: 'micro-gp-rods', morphology: 'large rods in chains',
    traits: { gram: 'positive', spore: true, capsule: true },
    idClues: ['spore', 'capsule'],
    hallmarks: ['a polypeptide (poly-D-glutamate) capsule', 'a painless ulcer with a black eschar', 'edema factor acting as an adenylate cyclase'],
    summary: 'Spore-forming rod with a unique protein (poly-D-glutamate) capsule; cutaneous anthrax eschar, inhalational mediastinitis.',
  }),
  B({
    id: 'b-cereus', name: 'Bacillus cereus', group: 'gp-rods', concept: 'micro-gp-rods', morphology: 'rods',
    traits: { gram: 'positive', spore: true },
    idClues: [],
    hallmarks: ['vomiting within hours of eating reheated rice (preformed cereulide)'],
    summary: 'Spore-forming rod; spores survive cooking of rice and germinate when it is left out ("reheated rice syndrome").',
  }),
  B({
    id: 'c-tetani', name: 'Clostridium tetani', group: 'gp-rods', concept: 'micro-gp-rods', morphology: 'rods with terminal spores',
    traits: { gram: 'positive', spore: true, oxygen: 'obligate anaerobe' },
    idClues: [],
    hallmarks: ['tetanospasmin blocking glycine and GABA release from Renshaw cells', 'trismus and opisthotonos'],
    summary: 'Anaerobic spore-former; tetanospasmin cleaves synaptobrevin in inhibitory interneurons → spastic paralysis.',
  }),
  B({
    id: 'c-botulinum', name: 'Clostridium botulinum', group: 'gp-rods', concept: 'micro-gp-rods', morphology: 'rods',
    traits: { gram: 'positive', spore: true, oxygen: 'obligate anaerobe' },
    idClues: [],
    hallmarks: ['a toxin blocking acetylcholine release at the neuromuscular junction', 'floppy baby after ingesting honey'],
    summary: 'Anaerobic spore-former; botulinum toxin cleaves SNARE proteins → descending flaccid paralysis.',
  }),
  B({
    id: 'c-perfringens', name: 'Clostridium perfringens', group: 'gp-rods', concept: 'micro-gp-rods', morphology: 'large rods',
    traits: { gram: 'positive', spore: true, oxygen: 'obligate anaerobe' },
    idClues: [],
    hallmarks: ['alpha toxin (lecithinase) causing myonecrosis', 'gas gangrene with crepitus', 'double zone of hemolysis on blood agar'],
    summary: 'Anaerobic spore-former; alpha toxin (lecithinase) → gas gangrene; also late-onset food poisoning.',
  }),
  B({
    id: 'c-difficile', name: 'Clostridioides difficile', group: 'gp-rods', concept: 'micro-gp-rods', morphology: 'rods',
    traits: { gram: 'positive', spore: true, oxygen: 'obligate anaerobe' },
    idClues: [],
    hallmarks: ['toxins A and B causing pseudomembranous colitis after antibiotics'],
    summary: 'Anaerobic spore-former; toxins A and B → pseudomembranous colitis, classically after clindamycin or other antibiotics.',
  }),
  B({
    id: 'c-diphtheriae', name: 'Corynebacterium diphtheriae', group: 'gp-rods', concept: 'micro-gp-rods', morphology: 'club-shaped rods with metachromatic granules',
    traits: { gram: 'positive', spore: false },
    idClues: [],
    hallmarks: ['a gray pharyngeal pseudomembrane with "bull neck" lymphadenopathy', 'black colonies on tellurite agar and a positive Elek test'],
    summary: 'Non-spore-forming club-shaped rod; phage-encoded exotoxin ADP-ribosylates EF-2 → pseudomembranous pharyngitis, myocarditis.',
  }),
  B({
    id: 'listeria', name: 'Listeria monocytogenes', group: 'gp-rods', concept: 'micro-gp-rods', morphology: 'short rods',
    traits: { gram: 'positive', spore: false, catalase: true, hemolysis: 'beta' },
    idClues: ['spore', 'hemolysis'],
    hallmarks: ['tumbling motility and actin-rocket cell-to-cell spread', 'growth at refrigerator temperatures (deli meats, unpasteurised soft cheese)'],
    summary: 'Non-spore-forming, beta-hemolytic facultative intracellular rod; actin rockets, cold growth; neonatal and elderly meningitis.',
  }),

  // ——— Branching ———
  B({
    id: 'nocardia', name: 'Nocardia', group: 'branching', concept: 'micro-gp-rods', morphology: 'branching filaments, weakly acid-fast',
    traits: { gram: 'positive', oxygen: 'obligate aerobe' },
    idClues: ['oxygen'],
    hallmarks: ['weakly acid-fast branching filaments', 'pulmonary infection with brain abscess in the immunocompromised, treated with sulfonamides'],
    summary: 'Aerobic, weakly acid-fast branching rod in soil; lung and CNS infection in the immunocompromised; treat with TMP-SMX.',
  }),
  B({
    id: 'actinomyces', name: 'Actinomyces israelii', group: 'branching', concept: 'micro-gp-rods', morphology: 'branching filaments, not acid-fast',
    traits: { gram: 'positive', oxygen: 'obligate anaerobe' },
    idClues: ['oxygen'],
    hallmarks: ['yellow "sulfur granules" draining from facial sinus tracts', 'oral flora causing cervicofacial abscess after dental work, treated with penicillin'],
    summary: 'Anaerobic, non-acid-fast branching rod (oral flora); cervicofacial abscess with sulfur granules; treat with penicillin.',
  }),

  // ——— Gram-negative cocci ———
  B({
    id: 'n-meningitidis', name: 'Neisseria meningitidis', group: 'gn-cocci', concept: 'micro-gram-negative', morphology: 'kidney-bean diplococci',
    traits: { gram: 'negative', oxidase: true, maltose: true, capsule: true },
    idClues: ['maltose'],
    hallmarks: ['septic shock with bilateral adrenal hemorrhage (Waterhouse–Friderichsen syndrome)'],
    summary: 'Encapsulated gram-negative diplococcus that ferments glucose and maltose; meningococcemia, meningitis; LOS endotoxin.',
  }),
  B({
    id: 'n-gonorrhoeae', name: 'Neisseria gonorrhoeae', group: 'gn-cocci', concept: 'micro-gram-negative', morphology: 'kidney-bean diplococci',
    traits: { gram: 'negative', oxidase: true, maltose: false, capsule: false },
    idClues: ['maltose'],
    hallmarks: ['pili with antigenic variation, so no lasting immunity or vaccine', 'septic arthritis with tenosynovitis and pustular skin lesions'],
    summary: 'Unencapsulated gram-negative diplococcus that ferments glucose only; antigenic variation of pili; urethritis, PID, septic arthritis.',
  }),

  // ——— Gram-negative enteric rods ———
  B({
    id: 'e-coli', name: 'Escherichia coli', group: 'gn-enteric', concept: 'micro-gram-negative', morphology: 'rods',
    traits: { gram: 'negative', lactose: 'fermenter', oxidase: false, h2s: false },
    idClues: ['lactose', 'h2s'],
    hallmarks: ['hemolytic uremic syndrome after undercooked beef (serotype O157:H7)', 'P fimbriae in pyelonephritis', 'the K1 capsular antigen in neonatal meningitis'],
    summary: 'Lactose-fermenting enteric rod; commonest cause of UTI; EHEC O157:H7 Shiga-like toxin → HUS; K1 capsule in neonatal meningitis.',
  }),
  B({
    id: 'klebsiella', name: 'Klebsiella pneumoniae', group: 'gn-enteric', concept: 'micro-gram-negative', morphology: 'rods',
    traits: { gram: 'negative', lactose: 'fermenter', oxidase: false, capsule: true, urease: true },
    idClues: ['lactose', 'urease'],
    hallmarks: ['"currant jelly" sputum in aspiration pneumonia in alcohol use disorder', 'mucoid, heavily encapsulated lactose-fermenting colonies'],
    summary: 'Heavily encapsulated, lactose-fermenting, urease-positive rod; aspiration pneumonia with currant-jelly sputum, lung abscess, UTI.',
  }),
  B({
    id: 'salmonella', name: 'Salmonella', group: 'gn-enteric', concept: 'micro-gram-negative', morphology: 'motile rods',
    traits: { gram: 'negative', lactose: 'non-fermenter', oxidase: false, h2s: true, urease: false },
    idClues: ['lactose', 'h2s', 'urease'],
    hallmarks: ['typhoid fever with rose spots on the abdomen', 'gastroenteritis after handling pet turtles or other reptiles'],
    summary: 'Motile, H₂S-producing lactose non-fermenter with an animal reservoir (except S. Typhi); gastroenteritis, typhoid, osteomyelitis in sickle cell.',
  }),
  B({
    id: 'shigella', name: 'Shigella', group: 'gn-enteric', concept: 'micro-gram-negative', morphology: 'non-motile rods',
    traits: { gram: 'negative', lactose: 'non-fermenter', oxidase: false, h2s: false },
    idClues: ['lactose', 'h2s', 'oxidase'],
    hallmarks: ['bloody dysentery transmitted person to person from a very low infectious dose (10–200 organisms)'],
    summary: 'Non-motile, H₂S-negative lactose non-fermenter with a very low infectious dose; invades M cells → bloody dysentery.',
  }),
  B({
    id: 'proteus', name: 'Proteus mirabilis', group: 'gn-enteric', concept: 'micro-gram-negative', morphology: 'rods with swarming motility',
    traits: { gram: 'negative', lactose: 'non-fermenter', oxidase: false, h2s: true, urease: true },
    idClues: ['lactose', 'h2s', 'urease'],
    hallmarks: [{ text: 'struvite (ammonium magnesium phosphate) staghorn calculi', exclude: { urease: true } }, 'swarming motility on agar'],
    summary: 'Urease-positive, H₂S-producing lactose non-fermenter with swarming motility; alkaline urine and struvite staghorn stones.',
  }),
  B({
    id: 'pseudomonas', name: 'Pseudomonas aeruginosa', group: 'gn-enteric', concept: 'pseudomonas', morphology: 'rods',
    traits: { gram: 'negative', lactose: 'non-fermenter', oxidase: true, oxygen: 'obligate aerobe' },
    idClues: ['lactose', 'oxidase'],
    hallmarks: ['blue-green pigment (pyocyanin) and a grape-like odor', 'ecthyma gangrenosum in neutropenia', 'hot tub folliculitis'],
    summary: 'Oxidase-positive, aerobic lactose non-fermenter; pyocyanin, exotoxin A; burns, cystic fibrosis, ventilators, hot tubs.',
  }),

  // ——— Curved gram-negative rods ———
  B({
    id: 'v-cholerae', name: 'Vibrio cholerae', group: 'gn-curved', concept: 'micro-gram-negative', morphology: 'comma-shaped rods',
    traits: { gram: 'negative', oxidase: true, urease: false, oxygen: 'facultative anaerobe' },
    idClues: ['oxygen'],
    hallmarks: ['profuse "rice-water" diarrhea', 'growth in alkaline media (TCBS agar)'],
    summary: 'Comma-shaped, oxidase-positive rod that grows in alkaline media; cholera toxin ADP-ribosylates Gs → ↑ cAMP → rice-water stools.',
  }),
  B({
    id: 'campylobacter', name: 'Campylobacter jejuni', group: 'gn-curved', concept: 'micro-gram-negative', morphology: 'comma- or S-shaped rods',
    traits: { gram: 'negative', oxidase: true, oxygen: 'microaerophile', urease: false },
    idClues: ['oxygen', 'urease'],
    hallmarks: ['growth at 42 °C', 'Guillain–Barré syndrome after a diarrheal illness'],
    summary: 'S-shaped, oxidase-positive rod that grows at 42 °C; bloody diarrhea from poultry; triggers Guillain–Barré syndrome.',
  }),
  B({
    id: 'h-pylori', name: 'Helicobacter pylori', group: 'gn-curved', concept: 'micro-gram-negative', morphology: 'curved, flagellated rods',
    traits: { gram: 'negative', oxidase: true, catalase: true, urease: true, oxygen: 'microaerophile' },
    idClues: ['urease'],
    hallmarks: ['urease producing ammonia to survive gastric acid (urea breath test)', 'gastric MALT lymphoma and adenocarcinoma'],
    summary: 'Curved, urease-positive rod; ammonia buffers acid; gastritis, peptic ulcer, MALT lymphoma, gastric adenocarcinoma.',
  }),

  // ——— Other gram-negatives ———
  B({
    id: 'h-influenzae', name: 'Haemophilus influenzae', group: 'gn-other', concept: 'micro-gram-negative', morphology: 'small coccobacilli',
    traits: { gram: 'negative', capsule: true },
    idClues: ['capsule'],
    hallmarks: ['growth on chocolate agar requiring factors X (hematin) and V (NAD⁺)', 'epiglottitis in an unvaccinated child (type b capsule)'],
    summary: 'Gram-negative coccobacillus needing factors X and V; type b capsule (PRP) → epiglottitis, meningitis; conjugate vaccine.',
  }),
  B({
    id: 'bordetella', name: 'Bordetella pertussis', group: 'gn-other', concept: 'micro-gram-negative', morphology: 'small coccobacilli',
    traits: { gram: 'negative' },
    idClues: [],
    hallmarks: ['a toxin that inhibits Gi, raising cAMP, with marked lymphocytosis', 'whooping cough with post-tussive emesis'],
    summary: 'Gram-negative coccobacillus; pertussis toxin ADP-ribosylates Gi (↑ cAMP) → lymphocytosis; catarrhal, paroxysmal, convalescent stages.',
  }),
  B({
    id: 'legionella', name: 'Legionella pneumophila', group: 'gn-other', concept: 'micro-gram-negative', morphology: 'rods that stain poorly with Gram stain',
    traits: { gram: 'negative' },
    idClues: [],
    hallmarks: ['silver stain and growth on charcoal yeast extract agar with iron and cysteine', 'pneumonia with hyponatremia and diarrhea after exposure to contaminated water systems'],
    summary: 'Intracellular gram-negative rod seen with silver stain; buffered charcoal yeast extract agar (iron, cysteine); urine antigen; aerosolised water.',
  }),
  B({
    id: 'bacteroides', name: 'Bacteroides fragilis', group: 'gn-other', concept: 'micro-gram-negative', morphology: 'rods',
    traits: { gram: 'negative', oxygen: 'obligate anaerobe' },
    idClues: ['oxygen'],
    hallmarks: ['being the most common anaerobe isolated from intra-abdominal abscesses'],
    summary: 'Anaerobic gram-negative rod of colonic flora; intra-abdominal abscesses; treat with metronidazole or similar anaerobic cover.',
  }),

  // ——— Spirochetes ———
  B({
    id: 'treponema', name: 'Treponema pallidum', group: 'spirochete', concept: 'micro-atypical', morphology: 'thin spirochete seen by dark-field microscopy',
    traits: {},
    idClues: [],
    hallmarks: ['a painless chancre followed by a rash on the palms and soles', 'tabes dorsalis and Argyll Robertson pupils'],
    summary: 'Spirochete seen on dark-field microscopy; primary chancre, secondary rash and condylomata lata, tertiary gummas and neurosyphilis.',
  }),
  B({
    id: 'borrelia', name: 'Borrelia burgdorferi', group: 'spirochete', concept: 'micro-atypical', morphology: 'spirochete',
    traits: {},
    idClues: [],
    hallmarks: ['erythema migrans after an Ixodes tick bite', 'bilateral facial nerve palsy and AV block'],
    summary: 'Spirochete transmitted by Ixodes ticks (white-footed mouse, deer); erythema migrans, facial palsy, carditis, arthritis.',
  }),
  B({
    id: 'leptospira', name: 'Leptospira interrogans', group: 'spirochete', concept: 'micro-atypical', morphology: 'spirochete with hooked ends',
    traits: {},
    idClues: [],
    hallmarks: ['fever with conjunctival suffusion after freshwater exposure to animal urine', 'Weil disease: jaundice, renal failure and hemorrhage'],
    summary: 'Spirochete in water contaminated with animal urine; fever and conjunctival suffusion; Weil disease in severe cases.',
  }),

  // ——— Acid-fast ———
  B({
    id: 'm-tuberculosis', name: 'Mycobacterium tuberculosis', group: 'acid-fast', concept: 'micro-atypical', morphology: 'acid-fast rods',
    traits: { gram: 'acid-fast', oxygen: 'obligate aerobe' },
    idClues: ['oxygen'],
    hallmarks: ['cord factor inhibiting macrophage maturation', 'caseating granulomas with a Ghon complex'],
    summary: 'Obligate aerobic acid-fast rod with mycolic acids; cord factor; caseating granulomas; reactivation favours the apices.',
  }),
  B({
    id: 'm-leprae', name: 'Mycobacterium leprae', group: 'acid-fast', concept: 'micro-atypical', morphology: 'acid-fast rods that cannot be grown in culture',
    traits: { gram: 'acid-fast' },
    idClues: [],
    hallmarks: ['growth in cool body sites (skin, peripheral nerves) and an armadillo reservoir', 'tuberculoid (Th1) vs lepromatous (Th2) forms'],
    summary: 'Acid-fast rod that cannot be cultured in vitro; prefers cool sites; tuberculoid (Th1) vs lepromatous (Th2) leprosy.',
  }),

  // ——— Atypical / intracellular ———
  B({
    id: 'mycoplasma', name: 'Mycoplasma pneumoniae', group: 'atypical', concept: 'micro-atypical', morphology: 'no cell wall, so not seen on Gram stain',
    traits: {},
    idClues: [],
    hallmarks: ['no cell wall, with sterols in the membrane, so β-lactams are ineffective', 'cold agglutinins (IgM) causing hemolysis'],
    summary: 'No cell wall (membrane sterols): not seen on Gram stain and resistant to β-lactams; walking pneumonia, cold agglutinins.',
  }),
  B({
    id: 'chlamydia', name: 'Chlamydia trachomatis', group: 'atypical', concept: 'micro-atypical', morphology: 'obligate intracellular; elementary and reticulate bodies',
    traits: {},
    idClues: [],
    hallmarks: ['an infectious elementary body and a replicating reticulate body', 'cytoplasmic inclusions on Giemsa stain; little peptidoglycan in the cell wall'],
    summary: 'Obligate intracellular (cannot make its own ATP); elementary body infects, reticulate body replicates; urethritis, PID, neonatal conjunctivitis.',
  }),
  B({
    id: 'rickettsia', name: 'Rickettsia rickettsii', group: 'atypical', concept: 'micro-atypical', morphology: 'obligate intracellular',
    traits: {},
    idClues: [],
    hallmarks: ['a rash beginning on the wrists and ankles and spreading to the trunk, palms and soles after a tick bite'],
    summary: 'Obligate intracellular, tick-borne (Dermacentor); Rocky Mountain spotted fever: rash from wrists and ankles inward, including palms and soles.',
  }),
];

export const BACTERIA_GROUP_TITLE: Record<BacteriaGroup, string> = {
  'gp-cocci': 'gram-positive cocci',
  'gp-rods': 'gram-positive rods',
  branching: 'branching gram-positive organisms',
  'gn-cocci': 'gram-negative cocci',
  'gn-enteric': 'gram-negative rods',
  'gn-curved': 'curved gram-negative rods',
  'gn-other': 'other gram-negative organisms',
  spirochete: 'spirochetes',
  'acid-fast': 'acid-fast organisms',
  atypical: 'atypical and intracellular organisms',
};
