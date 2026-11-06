import { defineConcepts } from '../define';

/** Concepts backing the generated biostatistics items. */
export const biostatGroups = defineConcepts([
  {
    id: 'biostats-lr',
    title: 'Likelihood ratios',
    discipline: 'biostatistics',
    system: 'biostats-epi',
    topic: 'biostats-tests',
    difficulty: 3,
    objectives: ['Calculate positive and negative likelihood ratios', 'Use likelihood ratios to move from pre-test to post-test odds'],
    facts: [
      'LR+ = sensitivity / (1 − specificity).',
      'LR− = (1 − sensitivity) / specificity.',
      'Post-test odds = pre-test odds × likelihood ratio.',
      'LR+ above 10 or LR− below 0.1 changes probability substantially; LR of 1 adds no information.',
      'Likelihood ratios do not depend on prevalence.',
    ],
    mechanism:
      'A likelihood ratio compares how often a result occurs in people with the disease versus without it. Multiplying it by the pre-test odds gives the post-test odds, which is Bayes theorem in odds form.',
    associations: ['Pre-test probability', 'Post-test odds', 'Sensitivity and specificity'],
    misconception: 'Likelihood ratios multiply odds, not probabilities: convert probability to odds (p / (1 − p)) before applying them.',
    quick: 'LR+ = sens / (1 − spec); LR− = (1 − sens) / spec. Post-test odds = pre-test odds × LR. Independent of prevalence.',
    detailed: [
      'Because likelihood ratios are built from sensitivity and specificity, they are properties of the test and do not change with prevalence, unlike predictive values.',
      'To use them, convert the pre-test probability to odds, multiply by the likelihood ratio, then convert back: probability = odds / (1 + odds).',
    ],
    takeaway: 'LR+ = sens/(1 − spec); multiply odds, not probabilities.',
    related: ['sens-spec', 'ppv-prevalence'],
  },
  {
    id: 'biostats-or-rr',
    title: 'Relative risk and odds ratio',
    discipline: 'biostatistics',
    system: 'biostats-epi',
    topic: 'biostats-risk',
    difficulty: 3,
    objectives: ['Calculate relative risk and odds ratio from a 2×2 table', 'Choose the right measure for the study design'],
    facts: [
      'Relative risk (RR) = incidence in exposed / incidence in unexposed = [a/(a+b)] / [c/(c+d)].',
      'Odds ratio (OR) = (a × d) / (b × c).',
      'Cohort studies and trials give relative risk; case-control studies give odds ratios.',
      'OR approximates RR when the disease is rare (rare disease assumption).',
      'RR or OR of 1 means no association; below 1 suggests a protective effect.',
    ],
    mechanism:
      'A case-control study fixes the number of people with and without the outcome, so it cannot measure incidence. It can only compare the odds of past exposure between cases and controls, which is what the odds ratio does.',
    associations: ['Cohort study', 'Case-control study', 'Rare disease assumption'],
    misconception: 'Calculating a relative risk from case-control data is invalid, because the investigator chose how many cases and controls to enroll.',
    quick: 'RR = [a/(a+b)] / [c/(c+d)] for cohorts and trials. OR = ad/bc for case-control studies. OR ≈ RR when the disease is rare.',
    detailed: [
      'Set up the table with exposure in rows and outcome in columns: a = exposed with outcome, b = exposed without, c = unexposed with, d = unexposed without.',
      'Step 1 often tests design first: if the study selects participants by outcome it is case-control (OR); if by exposure and follows them forward it is a cohort (RR).',
    ],
    takeaway: 'Case-control → OR = ad/bc. Cohort or trial → RR. OR ≈ RR for rare diseases.',
    related: ['nnt'],
  },
  {
    id: 'biostats-normal',
    title: 'Normal distribution',
    discipline: 'biostatistics',
    system: 'biostats-epi',
    topic: 'biostats-studies',
    difficulty: 2,
    objectives: ['Apply the 68–95–99.7 rule', 'Relate mean, median and mode in normal and skewed distributions'],
    facts: [
      'About 68% of values lie within 1 SD of the mean, 95% within 2 SD and 99.7% within 3 SD.',
      'In a normal distribution, mean = median = mode.',
      'Positive (right) skew: mean > median > mode. Negative (left) skew: mean < median < mode.',
      'Reference ranges are commonly set at the mean ± 2 SD, so about 5% of healthy people fall outside them.',
    ],
    mechanism:
      'The normal curve is symmetric and fully described by its mean and standard deviation, so fixed proportions of values always lie within each multiple of the SD.',
    associations: ['Standard deviation', 'Skew', 'Reference ranges'],
    misconception: 'A value outside a reference range is not proof of disease: by definition about 5% of healthy people fall outside a mean ± 2 SD range.',
    quick: '68% within 1 SD, 95% within 2 SD, 99.7% within 3 SD. Normal: mean = median = mode. Right skew: mean > median > mode.',
    detailed: [
      'Questions give a mean and SD and ask what share of people lie within a range; convert the limits to SD units first.',
      'For skewed distributions, the mean is pulled towards the tail: right-skewed data (e.g. income) have a mean above the median.',
    ],
    takeaway: '68–95–99.7. Mean is pulled toward the tail.',
    related: ['sens-spec'],
  },
]);
