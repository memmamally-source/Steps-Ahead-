/**
 * Components named in an objective's checklist text that linked content does not teach.
 *
 * - `core`: a genuinely important omission. The objective is `partial` until it is written.
 * - `deferred`: a supplementary component deliberately not taught at Step 1 core depth, or taught
 *   with its home subject. The objective is reported as `core` ("core covered, parts deferred"),
 *   never as covered in full.
 *
 * Remove an entry once the component is taught. Medical reviewers may move a component between lists.
 */
export interface ContentGap {
  core?: string;
  deferred?: string;
}

export const CONTENT_GAPS: Record<string, ContentGap> = {
  // Cellular batch 2 (signalling), revision 2. No core omissions remain.
  'bc-gpcr.receptors': { deferred: 'CRH (Gs) and gastrin (Gq) receptors — supplementary' },
  'bc-second-messengers.camp': { deferred: 'cilostazol — supplementary drug example' },
  'bc-rtk.mechanism': { deferred: 'adaptor docking, mTOR, and IGF-1, PDGF and NGF as named ligands — supplementary' },
  'bc-rtk.insulin': { deferred: 'glycogen synthesis and other anabolic effects of insulin — taught with Metabolism' },
  'bc-rtk.oncogenic': { deferred: 'KIT — taught with Hematology/Oncology' },
  'bc-jak-stat.ligands': { deferred: 'G-CSF and GM-CSF as named JAK–STAT ligands — supplementary' },
  'bc-jak-stat.jak2': { deferred: 'ruxolitinib by name — supplementary drug example' },
  'bc-receptor-other.nuclear': { deferred: 'retinoic acid receptors and the zinc-finger DNA-binding domain — supplementary' },
  // Laboratory techniques batch 1.
  'bc-elisa-flow.flow': { deferred: 'leukemia and lymphoma immunophenotyping — taught with Hematology/Oncology' },
  'bc-gene-editing.crispr': { deferred: 'RNA interference, knock-in/knock-out and transgenic models, Cre-lox conditional systems — supplementary research tools' },
  // Genetics batch 1.
  'bc-ad-inheritance.mechanisms': { deferred: 'the generalization that dominant disorders often involve structural proteins or receptors — not stated in the sources read' },
  'bc-gen-terms.dominant-negative': { deferred: 'mutant p53 as a named dominant negative example — taught with Hematology/Oncology' },
  'bc-autosomal-trisomies.down': { deferred: 'epicanthal folds and sandal gap — minor features not in the sources read' },
};
