import { defineConcepts } from '../define';

/** Group concepts for the virus knowledge table. */
export const virusGroups = defineConcepts([
  {
    id: 'micro-dna-viruses',
    title: 'DNA viruses',
    discipline: 'microbiology',
    system: 'multisystem',
    topic: 'micro-viruses',
    difficulty: 2,
    objectives: ['State the structural rules of DNA viruses and their exceptions', 'Match each DNA virus to its classic diseases'],
    facts: [
      'All DNA viruses are double-stranded except parvovirus (single-stranded).',
      'All are linear except papillomavirus, polyomavirus (circular) and hepadnavirus (partially double-stranded, circular).',
      'All replicate in the nucleus except poxvirus (cytoplasm; it carries its own DNA-dependent RNA polymerase).',
      'Enveloped DNA viruses: herpesviruses, hepadnavirus (HBV) and poxvirus. Nonenveloped: parvo-, adeno-, papilloma- and polyomaviruses.',
      'HBV is a DNA virus that uses reverse transcriptase to copy its RNA intermediate back to DNA.',
    ],
    mechanism:
      'DNA viruses use the host nucleus and its DNA-dependent RNA polymerase to transcribe their genes. Poxviruses are the exception because they bring their own polymerase, so they can replicate in the cytoplasm.',
    associations: ['Herpesvirus latency', 'Oncogenic viruses: EBV, HHV-8, HPV, HBV', 'Parvovirus and erythroid precursors'],
    misconception: 'HBV is not a retrovirus even though it uses reverse transcriptase: its virion carries DNA, not RNA.',
    quick: 'DNA viruses: all ds (except parvo), all nuclear (except pox), all linear (except papilloma, polyoma, hepadna). Enveloped: herpes, hepadna, pox.',
    detailed: [
      'Step 1 tests the structural rules and their exceptions, then pairs each virus with a classic disease: latent herpesviruses with reactivation, parvovirus with aplastic crisis and slapped cheek, JC virus with PML, HPV with cervical cancer via E6/E7.',
      'Oncogenic DNA viruses act by inactivating tumour suppressors (HPV E6–p53, E7–Rb) or by chronic inflammation and integration (HBV).',
    ],
    takeaway: 'Exceptions to learn: parvo (ss), pox (cytoplasm, complex), papilloma/polyoma/hepadna (circular), hepadna (partial ds, RT).',
    related: ['micro-rna-viruses'],
  },
  {
    id: 'micro-rna-viruses',
    title: 'RNA viruses',
    discipline: 'microbiology',
    system: 'multisystem',
    topic: 'micro-viruses',
    difficulty: 3,
    objectives: ['Classify RNA viruses by strand, sense, envelope and segmentation', 'Explain why sense determines whether a virus carries its own polymerase'],
    facts: [
      'All RNA viruses are single-stranded except reovirus (rotavirus), which is double-stranded and segmented.',
      'All RNA viruses replicate in the cytoplasm except influenza and retroviruses (nucleus).',
      'Positive-sense RNA acts directly as mRNA, so naked genomes are infectious; negative-sense viruses must carry an RNA-dependent RNA polymerase.',
      'Nonenveloped RNA viruses: picornavirus, calicivirus, hepevirus and reovirus.',
      'Segmented genomes (influenza, rotavirus, bunyaviruses such as hantavirus, arenaviruses) allow reassortment.',
    ],
    mechanism:
      'Sense decides the first step of replication. A positive-sense genome is translated immediately by host ribosomes; a negative-sense genome is useless until the packaged viral RNA-dependent RNA polymerase transcribes it into positive-sense mRNA.',
    associations: ['Reassortment and antigenic shift', 'Picornaviruses: polio, coxsackie, rhino, HAV', 'Paramyxoviruses: measles, mumps, parainfluenza'],
    misconception: 'Retroviruses are positive-sense RNA viruses, but their genome is not used as mRNA on entry: it is first copied into DNA by reverse transcriptase.',
    quick: 'RNA viruses: all ss (except reo), all cytoplasmic (except influenza, retro). Naked: picorna, calici, hepe, reo. Negative-sense ones carry their own RNA polymerase.',
    detailed: [
      'Step 1 asks either for the structure of a named virus or for the virus that fits a structure. Learn the families by sense: positive (picorna, calici, hepe, flavi, toga, corona, retro), negative (orthomyxo, paramyxo, rhabdo, filo, bunya, arena, delta), double-stranded (reo).',
      'Segmentation explains influenza pandemics: two strains infecting one cell can swap segments (antigenic shift), producing a novel hemagglutinin or neuraminidase.',
    ],
    takeaway: 'Positive-sense = mRNA-ready. Negative-sense = brings RdRp. ds = reo. Nucleus = influenza and retro.',
    related: ['micro-dna-viruses'],
  },
]);

/** Group concepts for the glomerular disease table. */
export const gnGroups = defineConcepts([
  {
    id: 'gn-nephrotic',
    title: 'Nephrotic syndromes',
    discipline: 'pathology',
    alsoDisciplines: ['histology'],
    system: 'renal',
    topic: 'renal-glomerular',
    difficulty: 3,
    objectives: ['Define nephrotic syndrome and its complications', 'Distinguish the nephrotic diseases by biopsy findings and associations'],
    facts: [
      'Nephrotic syndrome: proteinuria > 3.5 g/day, hypoalbuminemia, edema, hyperlipidemia and lipiduria (fatty casts, oval fat bodies).',
      'Podocyte injury causes the proteinuria; there is little inflammation.',
      'Complications: hypercoagulability (loss of antithrombin, e.g. renal vein thrombosis) and infection (loss of immunoglobulins).',
      'Minimal change, FSGS and membranous nephropathy are primary podocytopathies; diabetes and amyloidosis are systemic causes.',
    ],
    mechanism:
      'Damage to podocytes or the glomerular basement membrane lets protein escape. Low oncotic pressure causes edema, and the liver responds to hypoalbuminemia by making more lipoproteins. Urinary loss of antithrombin III favours thrombosis.',
    associations: ['Renal vein thrombosis', 'Hyperlipidemia', 'Oval fat bodies', 'Spike and dome', 'Kimmelstiel–Wilson nodules'],
    misconception: 'Hematuria with red cell casts points to nephritic, not nephrotic, disease; nephrotic diseases cause heavy proteinuria with a bland sediment apart from fat.',
    quick: 'Nephrotic = > 3.5 g/day protein, low albumin, edema, high lipids. Biopsy: MCD normal LM; FSGS segmental sclerosis; membranous spike and dome; diabetes K–W nodules; amyloid Congo red.',
    detailed: [
      'Step 1 usually pairs a clinical clue with a biopsy finding: a child with steroid-responsive edema (minimal change), a patient with HIV or heroin use (FSGS), an adult with anti-PLA2R antibodies or hepatitis B (membranous), long-standing diabetes (nodular sclerosis), or a plasma cell dyscrasia (amyloid).',
      'Learn each disease across all three modalities, because questions may give any one of light microscopy, electron microscopy or immunofluorescence.',
    ],
    takeaway: 'Nephrotic = podocyte injury → massive proteinuria. Match each disease to LM, EM and IF.',
    related: ['minimal-change', 'gn-nephritic'],
  },
  {
    id: 'gn-nephritic',
    title: 'Nephritic syndromes',
    discipline: 'pathology',
    alsoDisciplines: ['immunology', 'histology'],
    system: 'renal',
    topic: 'renal-glomerular',
    difficulty: 3,
    objectives: ['Define nephritic syndrome', 'Distinguish nephritic diseases by immunofluorescence pattern, complement and serology'],
    facts: [
      'Nephritic syndrome: hematuria with red cell casts, hypertension, azotemia, oliguria and proteinuria usually < 3.5 g/day.',
      'IF pattern: linear (anti-GBM), granular (immune complex: PSGN, lupus, MPGN), mesangial IgA (IgA nephropathy), or pauci-immune (ANCA vasculitis).',
      'Low C3: PSGN, lupus nephritis and MPGN. Normal complement: IgA nephropathy, anti-GBM disease, ANCA vasculitis.',
      'Crescents (rapidly progressive GN) are fibrin and proliferating parietal cells with macrophages.',
    ],
    mechanism:
      'Inflammation inside the glomerulus damages capillary walls, so red cells leak into Bowman space and form casts in the tubules; reduced GFR causes salt retention, hypertension and azotemia.',
    associations: ['Red cell casts', 'Crescents', 'Low C3', 'ANCA', 'Anti-GBM antibodies'],
    misconception: 'Rapidly progressive glomerulonephritis is a pattern (crescents), not a single disease: split it by IF into linear, granular and pauci-immune.',
    quick: 'Nephritic = hematuria + RBC casts + hypertension. IF: linear = anti-GBM; granular = immune complex (PSGN, lupus, MPGN; low C3); mesangial IgA = IgA nephropathy; none = ANCA vasculitis.',
    detailed: [
      'Immunofluorescence is the fastest discriminator on Step 1. Combine it with timing (IgA within days of infection, PSGN weeks after), serology (ANCA, anti-GBM, anti-dsDNA) and complement.',
      'Electron microscopy then localises deposits: subepithelial humps (PSGN), subendothelial (lupus, MPGN), mesangial (IgA), none (anti-GBM, ANCA), and basket-weave GBM splitting (Alport).',
    ],
    takeaway: 'Nephritic: sort by IF (linear / granular / IgA / none), then complement and serology.',
    related: ['psgn', 'gn-nephrotic', 'hypersensitivity'],
  },
]);
