/**
 * Parts of an objective's checklist text that linked content deliberately does not yet teach, usually
 * because a fact could not be verified against a mainstream source when the batch was written and was
 * left unwritten rather than guessed. An objective with a gap is at most `partial`, whatever depths its
 * items assess, so coverage never overstates what was written. Remove an entry once the gap is filled.
 */
export const CONTENT_GAPS: Record<string, string> = {
  // Cellular batch 2 (signalling). See BIOCHEM_CELLULAR2_CHANGELOG.md, "Left unwritten".
  'bc-gpcr.receptors': 'receptors for PTH, ACTH, LH, FSH, hCG, CRH and GHRH (Gs) and for M1, oxytocin, GnRH, TRH and gastrin (Gq)',
  'bc-gpcr.toxins': 'CFTR chloride secretion as the step between cAMP and watery diarrhea',
  'bc-second-messengers.camp': 'cilostazol',
  'bc-rtk.mechanism': 'adaptor docking, the PI3K–AKT–mTOR pathway, and IGF-1, PDGF, VEGF and NGF as ligands',
  'bc-rtk.insulin': 'PI3K–AKT as the named pathway, glycogen synthesis and other anabolic effects',
  'bc-rtk.oncogenic': 'HER2/ERBB2 amplification, RET (MEN2) and KIT',
  'bc-jak-stat.mechanism': 'STAT dimerization before nuclear entry',
  'bc-jak-stat.ligands': 'growth hormone, prolactin, erythropoietin, G-CSF, GM-CSF and interferons as JAK–STAT ligands',
  'bc-jak-stat.jak2': 'ruxolitinib',
  'bc-jak-stat.scid': 'the common γ chain as the IL2RG product shared by several interleukin receptors',
  'bc-receptor-other.nuclear': 'calcitriol and retinoid receptors, and the zinc-finger DNA-binding domain',
  'bc-receptor-other.ion-channels': 'GABA-A, NMDA and 5-HT3 receptors, and ligand-gated channels as the fastest receptor class',
};
