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
  // Genetics batch 2.
  'bc-trinucleotide.fragile-x': { deferred: 'mitral valve prolapse — not stated in the sources read' },
  'bc-trinucleotide.friedreich': { deferred: 'iron handling as the specific mitochondrial role, loss of vibration and position sense (taught as sensory loss), pes cavus — not stated in the sources read' },
  'bc-muscular-dystrophy.myotonic': { deferred: 'distal pattern of weakness, frontal balding, testicular atrophy — not stated in the sources read' },
  'bc-imprinting.upd': { deferred: 'mapping isodisomy to a meiosis II error or postzygotic duplication — not stated in the sources read (heterodisomy from meiosis I is taught)' },
  // Genetics batch 3.
  'bc-ad-diseases.nf1': { deferred: 'pheochromocytoma as an NF1 association — not stated in the sources read' },
  'bc-ad-diseases.vhl': { deferred: 'the 3p band location and bilaterality of renal carcinoma — chromosome 3 is taught; the rest is not stated in the sources read' },
  'bc-ad-diseases.fap': { deferred: 'Gardner and Turcot variants — specialist detail, not in the sources read' },
  'bc-ar-diseases.sma': { deferred: 'tongue fasciculations — not supported by an abstract read (titles only)' },
  'bc-ar-diseases.thalassemia': { deferred: 'ancestry patterns of cis versus trans α-deletions — not stated in the sources read (the cis/trans mechanism is taught)' },
  'bc-x-linked-diseases.wiskott': { deferred: 'raised IgA — the source read reports low-to-normal IgA and IgM with raised IgE; flagged for the reviewer as a checklist/source conflict' },
  'bc-structural-chromosome.cri-du-chat': { deferred: 'ventricular septal defect as the specific heart defect — the sources read say only "heart defect"' },
};
