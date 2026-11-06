import type { ChecklistConcept, Subject } from './types';
import { cellular, laboratory, molecular } from './biochem/molecularCellularLab';
import { genetics } from './biochem/genetics';
import { nutrition } from './biochem/nutrition';
import { metabolism } from './biochem/metabolism';

/**
 * Biochemistry coverage checklist (subject 1 of the development order).
 * Status stays 'architecture' until the owner approves the checklist and audit.
 */
export const BIOCHEMISTRY: Subject = {
  id: 'biochemistry',
  title: 'Biochemistry',
  status: 'architecture',
  subdivisions: [molecular, cellular, laboratory, genetics, nutrition, metabolism],
};

export function checklistConcepts(subject: Subject): ChecklistConcept[] {
  return subject.subdivisions.flatMap((s) => s.topics.flatMap((t) => t.concepts));
}
