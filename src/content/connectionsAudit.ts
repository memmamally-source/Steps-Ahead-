/**
 * Manual audit of curated Medical Connections puzzles. Passing the global catalog is necessary but not
 * proof of uniqueness, so each curated puzzle also lists the alternative groupings a reviewer
 * brainstormed for its tiles: broad (superordinate) categories, sources, inheritance, uses, adverse
 * effects and lookalike mechanisms. Because broad categories cover more than four tiles, they are
 * judged with `defensiblePartitions` (connectionsVerify.ts): a puzzle passes only if no partition other
 * than the intended one has three groups that a category covers exactly, plus a leftover four that
 * share any category.
 * Categories are recorded even when they cannot complete an alternative board, so reviewers can see
 * what was considered. This audit is still not exhaustive: reviewers should add any grouping they find.
 */
export interface AuditCategory {
  label: string;
  members: string[];
  /** Why it was considered and what limits it. */
  note: string;
}

export const MANUAL_AUDIT: Record<string, AuditCategory[]> = {
  'cx:gene-expression-blockers': [
    { label: 'Inhibitors of gene expression (any step)', members: ['Diphtheria toxin', 'Pseudomonas exotoxin A', 'Shiga toxin', 'Ricin', 'Etoposide', 'Teniposide', 'Irinotecan', 'Topotecan', 'α-Amanitin', 'Rifampin', 'Dactinomycin', 'TATA box mutation'], note: 'Theme-level category (12 tiles); can justify at most one group.' },
    { label: 'Cytotoxic to human cells', members: ['Diphtheria toxin', 'Pseudomonas exotoxin A', 'Shiga toxin', 'Ricin', 'Etoposide', 'Teniposide', 'Irinotecan', 'Topotecan', 'α-Amanitin', 'Dactinomycin'], note: 'Superordinate (10 tiles).' },
    { label: 'Inhibit protein synthesis', members: ['Diphtheria toxin', 'Pseudomonas exotoxin A', 'Shiga toxin', 'Ricin'], note: 'Coincides with the intended toxin group; no other translation inhibitor is on the board.' },
    { label: 'Made by bacteria (natural or derived)', members: ['Diphtheria toxin', 'Pseudomonas exotoxin A', 'Shiga toxin', 'Rifampin', 'Dactinomycin'], note: '5 tiles; the leftover tiles cannot form a group.' },
    { label: 'Plant or fungal products', members: ['Ricin', 'Etoposide', 'Teniposide', 'Irinotecan', 'Topotecan', 'α-Amanitin'], note: 'Topoisomerase drugs are plant-derived; α-amanitin is fungal.' },
    { label: 'Natural toxins (poisons)', members: ['Diphtheria toxin', 'Pseudomonas exotoxin A', 'Shiga toxin', 'Ricin', 'α-Amanitin'], note: '5 tiles.' },
    { label: 'Anticancer drugs', members: ['Etoposide', 'Teniposide', 'Irinotecan', 'Topotecan', 'Dactinomycin'], note: '5 tiles.' },
    { label: 'Bind DNA or a DNA–enzyme complex', members: ['Etoposide', 'Teniposide', 'Irinotecan', 'Topotecan', 'Dactinomycin'], note: '5 tiles.' },
    { label: 'Hepatotoxic', members: ['α-Amanitin', 'Rifampin', 'Dactinomycin'], note: 'Rifampin hepatotoxicity is in OpenStax; dactinomycin listed conservatively.' },
    { label: 'Involve RNA polymerase II or its transcripts', members: ['α-Amanitin', 'TATA box mutation', '7-Methylguanosine cap', 'Poly-A tail', 'Spliceosome', 'AAUAAA signal'], note: '6 tiles; the leftover tiles cannot form a group.' },
    { label: 'Sequence elements in DNA or RNA', members: ['TATA box mutation', 'AAUAAA signal'], note: 'Only 2 tiles.' },
    { label: 'Ends of a mature mRNA', members: ['7-Methylguanosine cap', 'Poly-A tail'], note: 'Only 2 tiles.' },
    { label: 'ADP-ribosylating toxins', members: ['Diphtheria toxin', 'Pseudomonas exotoxin A'], note: 'Only 2 tiles.' },
  ],
  'cx:dna-repair-machinery': [
    { label: 'Autosomal recessive cancer predisposition genes', members: ['XPA', 'XPC', 'ERCC2', 'MUTYH'], note: 'Before revision 4 the board held XPA, so these were exactly 4 tiles and the leftover {Thymine dimer, Uracil-DNA glycosylase, AP endonuclease, 8-Oxoguanine} fitted “single-strand excision repair”: a second solution. XPA was replaced by Xeroderma pigmentosum, leaving 3 such genes.' },
    { label: 'Single-strand excision repair (NER or BER)', members: ['XPA', 'XPC', 'ERCC2', 'Thymine dimer', 'Xeroderma pigmentosum', 'Uracil-DNA glycosylase', 'MUTYH', 'AP endonuclease', '8-Oxoguanine'], note: 'Superordinate (8 tiles on the board).' },
    { label: 'Cancer predisposition (gene or syndrome)', members: ['XPA', 'XPC', 'ERCC2', 'Xeroderma pigmentosum', 'MUTYH', 'MLH1', 'MSH2', 'MSH6', 'PMS2'], note: 'Superordinate (8 tiles on the board).' },
    { label: 'Autosomal recessive disease genes', members: ['XPA', 'XPC', 'ERCC2', 'MUTYH', 'Artemis', 'DNA ligase IV', 'DNA-PKcs'], note: '6 tiles on the board.' },
    { label: 'DNA lesions', members: ['Thymine dimer', '8-Oxoguanine', 'Abasic site'], note: '2 tiles on the board.' },
    { label: 'DNA repair (any pathway)', members: ['XPA', 'XPC', 'ERCC2', 'Thymine dimer', 'Xeroderma pigmentosum', 'Uracil-DNA glycosylase', 'MUTYH', 'AP endonuclease', '8-Oxoguanine', 'MLH1', 'MSH2', 'MSH6', 'PMS2', 'Ku70', 'DNA-PKcs', 'Artemis', 'DNA ligase IV'], note: 'Theme-level category (all 16 tiles).' },
    { label: 'Double-strand break repair', members: ['Ku70', 'DNA-PKcs', 'Artemis', 'DNA ligase IV'], note: 'Coincides with the intended NHEJ group.' },
    { label: 'Nucleases', members: ['AP endonuclease', 'Artemis'], note: 'Only 2 tiles.' },
    { label: 'Lynch syndrome genes', members: ['MLH1', 'MSH2', 'MSH6', 'PMS2'], note: 'Coincides with the intended MMR group.' },
  ],
  'cx:nucleotides-and-drugs': [
    { label: 'Bases attached to PRPP by a phosphoribosyltransferase', members: ['Guanine', 'Hypoxanthine', 'Orotate'], note: '3 tiles since Adenine was replaced by IMP.' },
    { label: 'Purines or pyrimidines (any)', members: ['IMP', 'Guanine', 'Hypoxanthine', 'Xanthine', 'Cytosine', 'Uracil', 'Thymine', 'Orotate'], note: 'Superordinate (8 tiles).' },
    { label: 'Bases found in DNA', members: ['Guanine', 'Cytosine', 'Thymine'], note: 'Before revision 4 the board held Adenine, so {A, G, C, T} plus “not found in DNA” {Hypoxanthine, Xanthine, Uracil, Orotate} was a second complete solution. Adenine was replaced by IMP.' },
    { label: 'Not found in DNA', members: ['IMP', 'Hypoxanthine', 'Xanthine', 'Uracil', 'Orotate'], note: '5 tiles; with only 3 DNA bases on the board the leftover cannot form a group.' },
    { label: 'Related to IMP dehydrogenase', members: ['IMP', 'Mycophenolate'], note: 'Only 2 tiles.' },
    { label: 'Enzymes whose deficiency causes disease', members: ['HGPRT', 'Xanthine oxidase', 'Adenosine deaminase', 'Purine nucleoside phosphorylase'], note: 'Coincides with the intended enzyme group.' },
    { label: 'Drugs that raise MCV (macrocytosis)', members: ['Methotrexate', 'Hydroxyurea'], note: 'Only 2 tiles.' },
  ],
  'cx:cell-machinery': [
    { label: 'Proteins (any)', members: ['Vimentin', 'Desmin', 'GFAP', 'Lamin', 'Catalase', 'GLUT1', 'GLUT3', 'GLUT4', 'SGLT2'], note: 'Theme-level category (9 tiles).' },
    { label: 'Expressed in the brain', members: ['GFAP', 'GLUT1', 'GLUT3', 'Plasmalogen synthesis'], note: 'Exactly 4 tiles if plasmalogens (myelin) are counted; leftover {Vimentin, Desmin, Lamin, GLUT4, SGLT2, ...} cannot then form a glucose-transport group, so no second solution.' },
    { label: 'Muscle-related', members: ['Desmin', 'GLUT4'], note: 'Only 2 tiles.' },
    { label: 'Natural products (plant or fungal)', members: ['Colchicine', 'Vincristine', 'Paclitaxel', 'Griseofulvin'], note: 'Coincides with the intended microtubule-drug group.' },
    { label: 'Anticancer drugs', members: ['Vincristine', 'Paclitaxel'], note: 'Only 2 tiles.' },
    { label: 'Insulin-related', members: ['GLUT4'], note: 'Only 1 tile.' },
    { label: 'Lipid metabolism', members: ['Plasmalogen synthesis', 'VLCFA β-oxidation', 'Phytanic acid α-oxidation'], note: '3 tiles; catalase completes the peroxisome group only.' },
    { label: 'Enzymes', members: ['Catalase'], note: 'Only catalase is an enzyme tile; the others are processes or structural proteins.' },
  ],
  'cx:collagen-types': [
    { label: 'Contain type I collagen (in addition to other types)', members: ['Bone', 'Tendon', 'Sclera', 'Blood vessel wall', 'Intestinal wall'], note: '5 tiles; the leftover type III tiles then lack a group.' },
    { label: 'Tissues or structures (any)', members: ['Bone', 'Tendon', 'Sclera', 'Vitreous humor', 'Nucleus pulposus', 'Growth plate', 'Blood vessel wall', 'Intestinal wall', 'Glomerular basement membrane', 'Lens capsule'], note: 'Superordinate (10 tiles).' },
    { label: 'Basement membranes', members: ['Glomerular basement membrane', 'Lens capsule'], note: 'Only 2 tiles.' },
    { label: 'Walls of hollow organs or vessels', members: ['Blood vessel wall', 'Intestinal wall'], note: 'Only 2 tiles.' },
    { label: 'Kidney-related', members: ['Glomerular basement membrane', 'Alport syndrome'], note: 'Only 2 tiles.' },
  ],
};
