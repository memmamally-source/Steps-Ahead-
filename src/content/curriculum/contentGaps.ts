/**
 * Parts of an objective's checklist text that linked content does not (yet) teach.
 *
 * - `core`: a genuinely important omission. The objective is at most `partial` until it is written.
 * - `optional`: a supplementary detail named in the checklist that is deliberately not taught at
 *   Step 1 core depth (or is taught with its home subject). It is listed in the coverage report but
 *   does not block coverage.
 *
 * Remove an entry once the gap is filled. Medical reviewers may move a detail between the two lists.
 */
export interface ContentGap {
  core?: string;
  optional?: string;
}

export const CONTENT_GAPS: Record<string, ContentGap> = {
  // Cellular batch 2 (signalling), revision 1. No core omissions remain.
  'bc-gpcr.receptors': { optional: 'CRH and hCG (Gs) and M1 and gastrin (Gq) receptors' },
  'bc-second-messengers.camp': { optional: 'cilostazol (PDE3 inhibitor for claudication)' },
  'bc-rtk.mechanism': { optional: 'adaptor docking, mTOR, and IGF-1, PDGF, VEGF and NGF as named ligands' },
  'bc-rtk.insulin': { optional: 'glycogen synthesis and other anabolic effects of insulin (taught with Metabolism)' },
  'bc-rtk.oncogenic': { optional: 'KIT (taught with Hematology/Oncology)' },
  'bc-jak-stat.ligands': { optional: 'G-CSF, GM-CSF and interferons as named JAK–STAT ligands' },
  'bc-jak-stat.jak2': { optional: 'ruxolitinib by name (JAK inhibition is taught through the mechanism)' },
  'bc-receptor-other.nuclear': { optional: 'retinoic acid receptors and the zinc-finger DNA-binding domain' },
};
