/**
 * Virus knowledge table (Step 1). Structural facts follow the standard Step 1 classification.
 * Where ICTV taxonomy has moved a virus (e.g. RSV and hMPV to Pneumoviridae, rubella to
 * Matonaviridae) the family is not asked; only structural traits are.
 */
import type { Hallmark } from './generate';
import type { TraitDef, TraitValue } from './traits';

export type VirusTrait = 'genome' | 'strands' | 'sense' | 'envelope' | 'segmented' | 'site' | 'capsid';
export type VirusGroup = 'dna' | 'rna-pos' | 'rna-neg' | 'rna-ds' | 'retro';

export interface Virus {
  id: string;
  name: string;
  family: string;
  /** Family is stable and safe to ask about. */
  askFamily: boolean;
  group: VirusGroup;
  concept: string;
  traits: Partial<Record<VirusTrait, TraitValue>>;
  idClues: VirusTrait[];
  hallmarks: (string | Hallmark)[];
  summary: string;
  plural?: boolean;
}

export const VIRUS_TRAITS: Record<VirusTrait, TraitDef> = {
  genome: { phrase: (v) => `a ${v} virus`, asks: ['DNA', 'RNA'] },
  strands: { phrase: (v) => (v === 'ss' ? 'single-stranded' : v === 'ds' ? 'double-stranded' : 'partially double-stranded'), asks: ['ss', 'ds'] },
  sense: { phrase: (v) => (v === 'ambisense' ? 'ambisense' : `${v}-sense`), asks: ['positive', 'negative'] },
  envelope: { phrase: (v) => (v ? 'enveloped' : 'nonenveloped (naked)'), asks: [true, false] },
  segmented: { phrase: (v) => (v ? 'segmented' : 'nonsegmented'), asks: [true] },
  site: { phrase: (v) => `replicated in the ${v}` },
  capsid: { phrase: (v) => `${v} in capsid symmetry` },
};

const V = (v: Virus) => v;
const herpes = (id: string, name: string, hallmarks: Virus['hallmarks'], summary: string): Virus =>
  V({ id, name, family: 'Herpesviridae', askFamily: true, group: 'dna', concept: 'micro-dna-viruses', traits: { genome: 'DNA', strands: 'ds', envelope: true, site: 'nucleus', capsid: 'icosahedral' }, idClues: [], hallmarks, summary });

export const VIRUSES: Virus[] = [
  // ——— DNA viruses ———
  herpes('hsv1', 'Herpes simplex virus 1', ['temporal lobe encephalitis', 'latency in the trigeminal ganglia with recurrent cold sores'], 'Enveloped dsDNA herpesvirus; gingivostomatitis, herpes labialis, keratitis, temporal lobe encephalitis; latent in trigeminal ganglia.'),
  herpes('hsv2', 'Herpes simplex virus 2', ['latency in the sacral ganglia with recurrent genital ulcers'], 'Enveloped dsDNA herpesvirus; genital herpes and neonatal herpes; latent in sacral ganglia.'),
  herpes('vzv', 'Varicella-zoster virus', ['a vesicular rash in different stages of healing (chickenpox)', 'a painful dermatomal rash from reactivation in dorsal root ganglia'], 'Enveloped dsDNA herpesvirus; chickenpox, then latency in dorsal root ganglia with reactivation as shingles.'),
  herpes('ebv', 'Epstein–Barr virus', ['infectious mononucleosis with a positive heterophile (Monospot) test and atypical CD8⁺ T cells', 'infecting B cells via CD21', 'endemic Burkitt lymphoma and nasopharyngeal carcinoma'], 'Enveloped dsDNA herpesvirus that infects B cells via CD21; mononucleosis, Burkitt lymphoma, nasopharyngeal carcinoma.'),
  herpes('cmv', 'Cytomegalovirus', ['"owl\'s eye" intranuclear inclusions', 'retinitis in AIDS with CD4⁺ count below 50/mm³', 'periventricular calcifications in congenital infection'], 'Enveloped dsDNA herpesvirus; owl-eye inclusions; congenital infection (periventricular calcifications, hearing loss); retinitis and colitis in AIDS; treat with ganciclovir.'),
  herpes('hhv6', 'Human herpesvirus 6', ['roseola infantum: high fever for several days, then a rash as the fever breaks'], 'Enveloped dsDNA herpesvirus; roseola (exanthem subitum) in infants, sometimes with febrile seizures.'),
  herpes('hhv8', 'Human herpesvirus 8', ['Kaposi sarcoma'], 'Enveloped dsDNA herpesvirus; Kaposi sarcoma (endothelial neoplasm), especially with HIV.'),
  V({
    id: 'hbv', name: 'Hepatitis B virus', family: 'Hepadnaviridae', askFamily: true, group: 'dna', concept: 'micro-dna-viruses',
    traits: { genome: 'DNA', strands: 'partial', envelope: true, site: 'nucleus' }, idClues: ['strands'],
    hallmarks: ['a DNA virus that replicates through an RNA intermediate using reverse transcriptase', 'ground-glass hepatocytes and HBsAg in the serum'],
    summary: 'Enveloped, partially double-stranded circular DNA hepadnavirus with reverse transcriptase; acute and chronic hepatitis, hepatocellular carcinoma.',
  }),
  V({
    id: 'parvo', name: 'Parvovirus B19', family: 'Parvoviridae', askFamily: true, group: 'dna', concept: 'micro-dna-viruses',
    traits: { genome: 'DNA', strands: 'ss', envelope: false, site: 'nucleus', capsid: 'icosahedral' }, idClues: ['strands'],
    hallmarks: ['aplastic crisis in sickle cell disease by infecting erythroid precursors', 'erythema infectiosum ("slapped cheek" rash)', 'hydrops fetalis'],
    summary: 'The only single-stranded DNA virus; nonenveloped; infects erythroid precursors (P antigen): aplastic crisis, slapped-cheek rash, hydrops fetalis.',
  }),
  V({
    id: 'adeno', name: 'Adenovirus', family: 'Adenoviridae', askFamily: true, group: 'dna', concept: 'micro-dna-viruses',
    traits: { genome: 'DNA', strands: 'ds', envelope: false, site: 'nucleus', capsid: 'icosahedral' }, idClues: [],
    hallmarks: ['pharyngoconjunctival fever in children at summer camps', 'hemorrhagic cystitis'],
    summary: 'Nonenveloped dsDNA virus; febrile pharyngitis, conjunctivitis ("pink eye"), pneumonia, hemorrhagic cystitis, gastroenteritis.',
  }),
  V({
    id: 'hpv', name: 'Human papillomavirus', family: 'Papillomaviridae', askFamily: true, group: 'dna', concept: 'micro-dna-viruses',
    traits: { genome: 'DNA', strands: 'ds', envelope: false, site: 'nucleus', capsid: 'icosahedral' }, idClues: [],
    hallmarks: ['oncoproteins E6 (inhibits p53) and E7 (inhibits Rb)', 'koilocytes in cervical squamous epithelium'],
    summary: 'Nonenveloped circular dsDNA virus; warts (types 1, 2, 6, 11) and cervical, anal and oropharyngeal cancer (16, 18) via E6 and E7.',
  }),
  V({
    id: 'jc', name: 'JC virus', family: 'Polyomaviridae', askFamily: true, group: 'dna', concept: 'micro-dna-viruses',
    traits: { genome: 'DNA', strands: 'ds', envelope: false, site: 'nucleus', capsid: 'icosahedral' }, idClues: [],
    hallmarks: ['progressive multifocal leukoencephalopathy by infecting oligodendrocytes'],
    summary: 'Nonenveloped circular dsDNA polyomavirus; PML (demyelination from oligodendrocyte infection) in AIDS or with natalizumab.',
  }),
  V({
    id: 'pox', name: 'Molluscum contagiosum virus', family: 'Poxviridae', askFamily: true, group: 'dna', concept: 'micro-dna-viruses',
    traits: { genome: 'DNA', strands: 'ds', envelope: true, site: 'cytoplasm', capsid: 'complex' }, idClues: ['site'],
    hallmarks: ['flesh-colored, dome-shaped papules with central umbilication'],
    summary: 'Poxvirus: the largest DNA virus, with a complex capsid; the only DNA virus family that replicates in the cytoplasm (it carries its own DNA-dependent RNA polymerase).',
  }),

  // ——— Positive-sense ssRNA ———
  V({
    id: 'polio', name: 'Poliovirus', family: 'Picornaviridae', askFamily: true, group: 'rna-pos', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'positive', envelope: false, segmented: false, site: 'cytoplasm', capsid: 'icosahedral' }, idClues: [],
    hallmarks: ['destruction of anterior horn cells causing asymmetric flaccid paralysis'],
    summary: 'Nonenveloped (+)ssRNA picornavirus; fecal–oral; anterior horn cell destruction → flaccid paralysis; inactivated (Salk) and live oral (Sabin) vaccines.',
  }),
  V({
    id: 'coxsackie', name: 'Coxsackievirus', family: 'Picornaviridae', askFamily: true, group: 'rna-pos', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'positive', envelope: false, segmented: false, site: 'cytoplasm', capsid: 'icosahedral' }, idClues: [],
    hallmarks: ['hand, foot and mouth disease', 'herpangina', 'viral myocarditis and pericarditis'],
    summary: 'Nonenveloped (+)ssRNA picornavirus (enterovirus); hand-foot-mouth disease (A), herpangina (A), myocarditis and pericarditis (B), aseptic meningitis.',
  }),
  V({
    id: 'rhino', name: 'Rhinovirus', family: 'Picornaviridae', askFamily: true, group: 'rna-pos', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'positive', envelope: false, segmented: false, site: 'cytoplasm', capsid: 'icosahedral' }, idClues: [],
    hallmarks: ['the common cold, with acid-labile virions that cannot survive the stomach'],
    summary: 'Nonenveloped (+)ssRNA picornavirus; acid-labile; the commonest cause of the common cold; many serotypes.',
  }),
  V({
    id: 'hav', name: 'Hepatitis A virus', family: 'Picornaviridae', askFamily: true, group: 'rna-pos', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'positive', envelope: false, segmented: false, site: 'cytoplasm', capsid: 'icosahedral' }, idClues: [],
    hallmarks: ['acute hepatitis after eating raw shellfish, with no chronic carrier state'],
    summary: 'Nonenveloped (+)ssRNA picornavirus; fecal–oral (shellfish, travel); acute self-limited hepatitis without chronic infection.',
  }),
  V({
    id: 'norovirus', name: 'Norovirus', family: 'Caliciviridae', askFamily: true, group: 'rna-pos', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'positive', envelope: false, segmented: false, site: 'cytoplasm', capsid: 'icosahedral' }, idClues: [],
    hallmarks: ['outbreaks of vomiting and diarrhea on cruise ships'],
    summary: 'Nonenveloped (+)ssRNA calicivirus; the commonest cause of viral gastroenteritis in adults; outbreaks in closed settings.',
  }),
  V({
    id: 'hcv', name: 'Hepatitis C virus', family: 'Flaviviridae', askFamily: true, group: 'rna-pos', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'positive', envelope: true, segmented: false, site: 'cytoplasm', capsid: 'icosahedral' }, idClues: [],
    hallmarks: ['chronic hepatitis after sharing injection equipment, with mixed cryoglobulinemia'],
    summary: 'Enveloped (+)ssRNA flavivirus; bloodborne; usually chronic; cirrhosis, hepatocellular carcinoma, cryoglobulinemia; no vaccine.',
  }),
  V({
    id: 'dengue', name: 'Dengue virus', family: 'Flaviviridae', askFamily: true, group: 'rna-pos', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'positive', envelope: true, segmented: false, site: 'cytoplasm', capsid: 'icosahedral' }, idClues: [],
    hallmarks: ['severe hemorrhagic disease on reinfection with a different serotype (antibody-dependent enhancement)'],
    summary: 'Enveloped (+)ssRNA flavivirus spread by Aedes mosquitoes; fever, rash, severe myalgia ("breakbone fever"); hemorrhagic fever on reinfection.',
  }),
  V({
    id: 'yellow-fever', name: 'Yellow fever virus', family: 'Flaviviridae', askFamily: true, group: 'rna-pos', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'positive', envelope: true, segmented: false, site: 'cytoplasm', capsid: 'icosahedral' }, idClues: [],
    hallmarks: ['Councilman bodies (eosinophilic apoptotic hepatocytes) with jaundice and black vomitus'],
    summary: 'Enveloped (+)ssRNA flavivirus spread by Aedes mosquitoes; fever, jaundice, black vomitus; Councilman bodies in the liver; live vaccine.',
  }),
  V({
    id: 'sars-cov-2', name: 'SARS-CoV-2', family: 'Coronaviridae', askFamily: true, group: 'rna-pos', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'positive', envelope: true, segmented: false, site: 'cytoplasm', capsid: 'helical' }, idClues: ['capsid'],
    hallmarks: ['entry into cells via the ACE2 receptor', 'loss of smell and taste with respiratory illness'],
    summary: 'Enveloped (+)ssRNA coronavirus with helical nucleocapsid; spike protein binds ACE2; COVID-19.',
  }),

  // ——— Retroviruses ———
  V({
    id: 'hiv', name: 'Human immunodeficiency virus', family: 'Retroviridae', askFamily: true, group: 'retro', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'positive', envelope: true, segmented: false, site: 'nucleus' }, idClues: [],
    hallmarks: ['a diploid genome copied to DNA by reverse transcriptase and integrated into host DNA', 'gp120 binding CD4 with CCR5 or CXCR4 as coreceptor'],
    summary: 'Enveloped diploid (+)ssRNA retrovirus; reverse transcriptase makes DNA that integrates; gp120 binds CD4 and CCR5/CXCR4; depletes CD4⁺ T cells.',
  }),

  // ——— Double-stranded RNA ———
  V({
    id: 'rotavirus', name: 'Rotavirus', family: 'Reoviridae (Sedoreoviridae since 2022)', askFamily: false, group: 'rna-ds', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ds', envelope: false, segmented: true, site: 'cytoplasm', capsid: 'icosahedral' }, idClues: [],
    hallmarks: ['severe watery diarrhea in unvaccinated infants, with villous destruction'],
    summary: 'The double-stranded RNA virus: nonenveloped, segmented, double-capsid reovirus; the commonest cause of fatal diarrhea in young children worldwide; oral live vaccine.',
  }),

  // ——— Negative-sense ssRNA ———
  V({
    id: 'influenza', name: 'Influenza virus', family: 'Orthomyxoviridae', askFamily: true, group: 'rna-neg', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'negative', envelope: true, segmented: true, site: 'nucleus', capsid: 'helical' }, idClues: ['segmented', 'site'],
    hallmarks: ['antigenic shift from reassortment of its segmented genome, causing pandemics', 'hemagglutinin and neuraminidase surface glycoproteins'],
    summary: 'Enveloped, segmented (−)ssRNA orthomyxovirus that replicates in the nucleus; hemagglutinin and neuraminidase; drift (epidemics) and shift (pandemics).',
  }),
  V({
    id: 'measles', name: 'Measles virus', family: 'Paramyxoviridae', askFamily: true, group: 'rna-neg', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'negative', envelope: true, segmented: false, site: 'cytoplasm', capsid: 'helical' }, idClues: [],
    hallmarks: ['Koplik spots on the buccal mucosa', 'subacute sclerosing panencephalitis years after infection'],
    summary: 'Enveloped nonsegmented (−)ssRNA paramyxovirus; cough, coryza, conjunctivitis, Koplik spots, then a descending maculopapular rash; vitamin A reduces mortality.',
  }),
  V({
    id: 'mumps', name: 'Mumps virus', family: 'Paramyxoviridae', askFamily: true, group: 'rna-neg', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'negative', envelope: true, segmented: false, site: 'cytoplasm', capsid: 'helical' }, idClues: [],
    hallmarks: ['parotitis with orchitis in postpubertal males'],
    summary: 'Enveloped nonsegmented (−)ssRNA paramyxovirus; parotitis, orchitis, aseptic meningitis, pancreatitis.',
  }),
  V({
    id: 'rsv', name: 'Respiratory syncytial virus', family: 'Pneumoviridae (traditionally grouped with paramyxoviruses)', askFamily: false, group: 'rna-neg', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'negative', envelope: true, segmented: false, site: 'cytoplasm', capsid: 'helical' }, idClues: [],
    hallmarks: ['bronchiolitis in infants, prevented with a monoclonal antibody against the F (fusion) protein'],
    summary: 'Enveloped nonsegmented (−)ssRNA virus with an F protein that forms syncytia; the commonest cause of bronchiolitis in infants.',
  }),
  V({
    id: 'parainfluenza', name: 'Parainfluenza virus', family: 'Paramyxoviridae', askFamily: true, group: 'rna-neg', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'negative', envelope: true, segmented: false, site: 'cytoplasm', capsid: 'helical' }, idClues: [],
    hallmarks: ['croup with a barking cough and a "steeple sign" on neck radiograph'],
    summary: 'Enveloped nonsegmented (−)ssRNA paramyxovirus; croup (laryngotracheobronchitis) with steeple sign.',
  }),
  V({
    id: 'rabies', name: 'Rabies virus', family: 'Rhabdoviridae', askFamily: true, group: 'rna-neg', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'negative', envelope: true, segmented: false, site: 'cytoplasm', capsid: 'helical' }, idClues: [],
    hallmarks: ['a bullet-shaped virion and Negri bodies in Purkinje and hippocampal neurons', 'retrograde travel along peripheral nerves after a bat bite'],
    summary: 'Enveloped bullet-shaped (−)ssRNA rhabdovirus; binds the nicotinic ACh receptor; travels retrograde in nerves; Negri bodies; post-exposure vaccine plus immune globulin.',
  }),
  V({
    id: 'ebola', name: 'Ebola virus', family: 'Filoviridae', askFamily: true, group: 'rna-neg', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'negative', envelope: true, segmented: false, site: 'cytoplasm', capsid: 'helical' }, idClues: [],
    hallmarks: ['filamentous virions causing hemorrhagic fever after contact with bodily fluids or bats'],
    summary: 'Enveloped filamentous (−)ssRNA filovirus; hemorrhagic fever with high mortality; spread by bodily fluids.',
  }),
  V({
    id: 'hantavirus', name: 'Hantavirus', family: 'Bunyavirales (Hantaviridae)', askFamily: false, group: 'rna-neg', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'negative', envelope: true, segmented: true, site: 'cytoplasm', capsid: 'helical' }, idClues: ['segmented', 'site'],
    hallmarks: ['pulmonary syndrome after exposure to deer mouse droppings in the US Southwest'],
    summary: 'Enveloped segmented (−)ssRNA virus spread by rodent excreta; hantavirus pulmonary syndrome or hemorrhagic fever with renal syndrome.',
  }),
  V({
    id: 'hdv', name: 'Hepatitis D virus', family: 'Deltavirus', askFamily: false, group: 'rna-neg', concept: 'micro-rna-viruses',
    traits: { genome: 'RNA', strands: 'ss', sense: 'negative', envelope: true, segmented: false }, idClues: [],
    hallmarks: ['a defective virus that needs HBsAg from hepatitis B as its envelope'],
    summary: 'Defective circular (−)ssRNA virus that requires HBsAg for its envelope; coinfection or superinfection with HBV worsens hepatitis.',
  }),
];

export const VIRUS_GROUP_TITLE: Record<VirusGroup, string> = {
  dna: 'DNA viruses',
  'rna-pos': 'positive-sense single-stranded RNA viruses',
  'rna-neg': 'negative-sense single-stranded RNA viruses',
  'rna-ds': 'double-stranded RNA viruses',
  retro: 'retroviruses',
};
