import type { SubjectId } from './types';

/**
 * Nutrition is a cross-cutting learning area (the USMLE outline lists Nutrition as its own section and
 * notes a recent emphasis on new nutrition content). Each later organ-system subject must link back to
 * these Biochemistry › Nutrition objectives in its own checklist (as cross-links or application
 * objectives) rather than re-teach them. The curriculum test checks that every id here exists.
 */
export const NUTRITION_CROSS_CUTTING: Record<SubjectId, string[]> = {
  cardiovascular: ['bc-vit-b1.deficiency', 'bc-vit-b3.excess', 'bc-trace-other.selenium', 'bc-obesity.consequences', 'bc-electrolyte-nutrients.magnesium'],
  endocrine: ['bc-vit-d.activation', 'bc-vit-d.excess', 'bc-obesity.hormones', 'bc-obesity.consequences', 'bc-trace-other.iodine', 'bc-trace-other.fluoride-chromium'],
  gastrointestinal: ['bc-vit-b12.absorption', 'bc-vit-b12.causes', 'bc-zinc.deficiency', 'bc-copper.deficiency', 'bc-tpn.routes', 'bc-tpn.complications', 'bc-ethanol-metabolism.nadh', 'bc-malnutrition.kwashiorkor'],
  'hematology-oncology': ['bc-vit-b9.deficiency', 'bc-vit-b12.deficiency', 'bc-vit-b12.distinguish', 'bc-vit-b6.deficiency', 'bc-vit-k.deficiency', 'bc-vit-e.deficiency', 'bc-iron.absorption', 'bc-iron.balance', 'bc-copper.deficiency', 'bc-vit-a.therapeutic'],
  'msk-skin': ['bc-vit-d.deficiency', 'bc-vit-c.scurvy', 'bc-vit-a.deficiency', 'bc-vit-b3.pellagra', 'bc-zinc.deficiency'],
  neurology: ['bc-vit-b1.deficiency', 'bc-vit-b12.deficiency', 'bc-vit-e.deficiency', 'bc-vit-b6.deficiency', 'bc-copper.deficiency'],
  psychiatry: ['bc-malnutrition.refeeding', 'bc-ethanol-metabolism.pathway', 'bc-vit-b1.glucose'],
  renal: ['bc-vit-d.causes', 'bc-electrolyte-nutrients.magnesium', 'bc-electrolyte-nutrients.phosphate', 'bc-vit-c.excess'],
  reproductive: ['bc-vit-b9.pregnancy', 'bc-vit-a.toxicity', 'bc-iron.balance', 'bc-vit-k.deficiency'],
  respiratory: ['bc-vit-a.deficiency', 'bc-malnutrition.marasmus'],
  immunology: ['bc-zinc.deficiency', 'bc-vit-a.deficiency', 'bc-malnutrition.kwashiorkor'],
  microbiology: ['bc-vit-b12.causes', 'bc-vit-k.deficiency'],
  pathology: ['bc-malnutrition.kwashiorkor', 'bc-vit-c.scurvy'],
  pharmacology: ['bc-vit-b6.deficiency', 'bc-vit-b9.deficiency', 'bc-vit-k.function', 'bc-ethanol-metabolism.drugs'],
  'public-health': ['bc-obesity.consequences', 'bc-vit-b9.pregnancy', 'bc-vit-d.causes'],
};
