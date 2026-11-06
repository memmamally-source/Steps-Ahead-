/**
 * Glomerular disease table: light microscopy (LM), electron microscopy (EM), immunofluorescence
 * (IF), serology and associations, as tested on Step 1. One row per disease; each finding phrase
 * is used verbatim in stems, so wording is standardised.
 */
import type { Hallmark } from './generate';
import type { TraitDef, TraitValue } from './traits';

export type GnTrait = 'syndrome' | 'lm' | 'em' | 'if' | 'complement';
export type GnGroup = 'nephrotic' | 'nephritic';

export interface GnRow {
  id: string;
  name: string;
  group: GnGroup;
  concept: string;
  traits: Partial<Record<GnTrait, TraitValue>>;
  idClues: GnTrait[];
  hallmarks: (string | Hallmark)[];
  summary: string;
  plural?: boolean;
}

export const GN_TRAITS: Record<GnTrait, TraitDef> = {
  syndrome: { phrase: (v) => `a ${v} syndrome` },
  lm: { phrase: (v) => `light microscopy showing ${v}` },
  em: { phrase: (v) => `electron microscopy showing ${v}` },
  if: { phrase: (v) => `immunofluorescence showing ${v}` },
  complement: { phrase: (v) => (v === 'low' ? 'low serum C3' : 'normal serum complement') },
};

const G = (r: GnRow) => r;

export const GLOMERULAR: GnRow[] = [
  // ——— Nephrotic ———
  G({
    id: 'mcd', name: 'Minimal change disease', group: 'nephrotic', concept: 'minimal-change',
    traits: { syndrome: 'nephrotic', lm: 'normal glomeruli', em: 'effacement of podocyte foot processes only', if: 'no immune deposits', complement: 'normal' },
    idClues: ['lm', 'if'],
    hallmarks: ['the commonest nephrotic syndrome in children, with selective albuminuria and an excellent response to corticosteroids', 'an association with Hodgkin lymphoma'],
    summary: 'Nephrotic; normal LM, foot-process effacement on EM, negative IF; children; steroid-responsive; can follow infection or occur with Hodgkin lymphoma.',
  }),
  G({
    id: 'fsgs', name: 'Focal segmental glomerulosclerosis', group: 'nephrotic', concept: 'gn-nephrotic',
    traits: { syndrome: 'nephrotic', lm: 'segmental sclerosis and hyalinosis in some glomeruli', em: 'effacement of podocyte foot processes', if: 'often negative (nonspecific IgM and C3 in sclerotic areas)', complement: 'normal' },
    idClues: ['lm'],
    hallmarks: ['nephrotic syndrome associated with HIV infection, heroin use, sickle cell disease and APOL1 variants in people of African ancestry', 'the collapsing variant seen in HIV-associated nephropathy'],
    summary: 'Nephrotic; segmental sclerosis on LM, effacement on EM; primary or secondary (HIV, heroin, sickle cell, obesity); commonest nephrotic syndrome in Black and Hispanic adults; poor steroid response.',
  }),
  G({
    id: 'membranous', name: 'Membranous nephropathy', group: 'nephrotic', concept: 'gn-nephrotic',
    traits: { syndrome: 'nephrotic', lm: 'diffuse capillary wall and basement membrane thickening', em: 'subepithelial immune complex deposits with a "spike and dome" appearance', if: 'granular IgG and C3 along capillary walls', complement: 'normal' },
    idClues: ['em'],
    hallmarks: ['antibodies to the phospholipase A2 receptor (PLA2R) on podocytes', 'secondary causes including hepatitis B, SLE (class V), solid tumours and drugs such as NSAIDs'],
    summary: 'Nephrotic; thick GBM, subepithelial "spike and dome" deposits, granular IF; anti-PLA2R in primary disease; commonest primary nephrotic syndrome in White adults; renal vein thrombosis risk.',
  }),
  G({
    id: 'amyloid', name: 'Renal amyloidosis', group: 'nephrotic', concept: 'gn-nephrotic',
    traits: { syndrome: 'nephrotic', lm: 'mesangial deposits with apple-green birefringence on Congo red under polarised light', complement: 'normal' },
    idClues: ['lm'],
    hallmarks: ['nephrotic syndrome with Congo red–positive deposits in a patient with multiple myeloma or chronic inflammatory disease'],
    summary: 'Nephrotic; Congo red–positive mesangial deposits with apple-green birefringence; AL (plasma cell dyscrasia) or AA (chronic inflammation) amyloid.',
  }),
  G({
    id: 'diabetic', name: 'Diabetic nephropathy', group: 'nephrotic', concept: 'gn-nephrotic',
    traits: { syndrome: 'nephrotic', lm: 'nodular mesangial sclerosis (Kimmelstiel–Wilson nodules)', em: 'diffuse GBM thickening', complement: 'normal' },
    idClues: ['lm'],
    hallmarks: ['nonenzymatic glycation of the GBM and efferent arteriolar hyalinosis causing hyperfiltration', 'microalbuminuria slowed by ACE inhibitors or ARBs'],
    summary: 'Nephrotic; Kimmelstiel–Wilson nodules, GBM thickening, efferent > afferent arteriolar hyalinosis; hyperfiltration then sclerosis; ACE inhibitors/ARBs and SGLT2 inhibitors slow progression.',
  }),

  // ——— Nephritic ———
  G({
    id: 'psgn', name: 'Post-streptococcal glomerulonephritis', group: 'nephritic', concept: 'psgn',
    traits: { syndrome: 'nephritic', lm: 'enlarged, hypercellular glomeruli with neutrophils', em: 'subepithelial immune complex "humps"', if: 'granular ("lumpy-bumpy") IgG, IgM and C3', complement: 'low' },
    idClues: ['em'],
    hallmarks: ['cola-colored urine 1–3 weeks after group A streptococcal pharyngitis (2–6 weeks after impetigo), with raised ASO or anti-DNase B titers'],
    summary: 'Nephritic; hypercellular glomeruli, subepithelial humps, granular IF, low C3; weeks after group A strep infection; usually resolves in children.',
  }),
  G({
    id: 'iga', name: 'IgA nephropathy', group: 'nephritic', concept: 'gn-nephritic',
    traits: { syndrome: 'nephritic', lm: 'mesangial proliferation', em: 'mesangial immune complex deposits', if: 'mesangial IgA deposits', complement: 'normal' },
    idClues: ['if'],
    hallmarks: ['episodic gross hematuria within days of an upper respiratory or gastrointestinal infection', 'a renal-limited form of IgA vasculitis (Henoch–Schönlein purpura)'],
    summary: 'Nephritic; mesangial IgA deposits; hematuria within days of a mucosal infection ("synpharyngitic"); normal C3; the commonest glomerulonephritis worldwide.',
  }),
  G({
    id: 'anti-gbm', name: 'Anti-GBM disease (Goodpasture syndrome)', group: 'nephritic', concept: 'gn-nephritic',
    traits: { syndrome: 'nephritic', lm: 'crescents in most glomeruli', if: 'linear IgG along the GBM', complement: 'normal' },
    idClues: ['if'],
    hallmarks: ['antibodies against the α3 chain of type IV collagen causing hemoptysis and rapidly progressive glomerulonephritis'],
    summary: 'Type II hypersensitivity against the α3 chain of type IV collagen; linear IgG IF; crescentic RPGN with or without pulmonary hemorrhage; treat with plasmapheresis.',
  }),
  G({
    id: 'gpa', name: 'Granulomatosis with polyangiitis', group: 'nephritic', concept: 'gn-nephritic',
    traits: { syndrome: 'nephritic', lm: 'crescents in most glomeruli', if: 'few or no immune deposits (pauci-immune)', complement: 'normal' },
    idClues: [],
    hallmarks: ['PR3-ANCA (c-ANCA) with granulomatous sinusitis, saddle-nose deformity and pulmonary nodules'],
    summary: 'Pauci-immune crescentic GN with PR3-ANCA (c-ANCA); necrotizing granulomas of the upper and lower respiratory tract.',
  }),
  G({
    id: 'mpa', name: 'Microscopic polyangiitis', group: 'nephritic', concept: 'gn-nephritic',
    traits: { syndrome: 'nephritic', lm: 'crescents in most glomeruli', if: 'few or no immune deposits (pauci-immune)', complement: 'normal' },
    idClues: [],
    hallmarks: ['MPO-ANCA (p-ANCA) with pauci-immune glomerulonephritis and no granulomas or asthma'],
    summary: 'Pauci-immune crescentic GN with MPO-ANCA (p-ANCA) and no granulomas.',
  }),
  G({
    id: 'lupus-dpgn', name: 'Diffuse proliferative lupus nephritis', group: 'nephritic', concept: 'gn-nephritic',
    traits: { syndrome: 'nephritic', lm: 'diffuse proliferation with "wire-loop" capillary walls', em: 'subendothelial immune complex deposits', if: 'granular deposits of IgG, IgA, IgM, C3 and C1q ("full house")', complement: 'low' },
    idClues: ['lm'],
    hallmarks: ['"wire-loop" lesions from subendothelial deposits in a patient with anti-dsDNA antibodies'],
    summary: 'Lupus nephritis class IV, the commonest and most severe form; wire loops, subendothelial deposits, full-house IF, low complement.',
  }),
  G({
    id: 'mpgn', name: 'Membranoproliferative glomerulonephritis (immune complex)', group: 'nephritic', concept: 'gn-nephritic',
    traits: { syndrome: 'nephritic', lm: 'mesangial proliferation with a split, "tram-track" GBM', em: 'subendothelial immune complex deposits', if: 'granular IgG and C3', complement: 'low' },
    idClues: ['lm'],
    hallmarks: ['a "tram-track" GBM from mesangial interposition, often secondary to hepatitis C or B'],
    summary: 'Nephritic or nephrotic; tram-track GBM (mesangial interposition), subendothelial deposits; often secondary to hepatitis C (with cryoglobulins) or B.',
  }),
  G({
    id: 'alport', name: 'Alport syndrome', group: 'nephritic', concept: 'gn-nephritic',
    traits: { syndrome: 'nephritic', em: 'thinning and splitting of the GBM with a "basket-weave" appearance', if: 'no immune deposits', complement: 'normal' },
    idClues: ['em'],
    hallmarks: ['hematuria with sensorineural hearing loss and anterior lenticonus from a type IV collagen mutation (often X-linked)'],
    summary: 'Inherited (usually X-linked) defect in type IV collagen α3, α4 or α5; hematuria, sensorineural deafness, eye disorders; basket-weave GBM on EM.',
  }),
];

export const GN_GROUP_TITLE: Record<GnGroup, string> = {
  nephrotic: 'nephrotic syndromes',
  nephritic: 'nephritic syndromes',
};
