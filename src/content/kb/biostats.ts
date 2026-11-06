/**
 * Biostatistics question generators. Every item is produced from stored numbers, the answer is
 * computed in code, and distractors are the classic calculation errors (computed too). Tests
 * recompute each answer from `params` independently.
 */
import { AI_DRAFT } from '../define';
import type { Difficulty, McqItem } from '../schema';
import { seeded, shuffle } from '@/engine/random';

export type StatKind = 'sens' | 'spec' | 'ppv' | 'npv' | 'lrpos' | 'arr' | 'rrr' | 'nnt' | 'nnh' | 'rr' | 'or' | 'fp' | 'normal';

export interface StatItem {
  item: McqItem;
  kind: StatKind;
  params: Record<string, number>;
  answer: number;
}

const pct = (x: number) => `${Math.round(x * 1000) / 10}%`;
const fix = (x: number, d = 2) => (Math.round(x * 10 ** d) / 10 ** d).toString();

/** Build an MCQ from numeric options; drops distractors that format identically to the answer. */
function numericMcq(id: string, conceptId: string, difficulty: Difficulty, stem: string, answer: string, wrong: { text: string; why: string }[], mini: string, takeaway: string): McqItem {
  const rnd = seeded(id);
  const seen = new Set([answer]);
  const ds = wrong.filter((w) => !seen.has(w.text) && seen.add(w.text)).slice(0, 4);
  const opts = shuffle([{ text: answer, why: undefined as string | undefined }, ...ds], rnd);
  const options = opts.map((o, i) => ({ id: 'abcde'[i]!, text: o.text, whyWrong: o.why }));
  return {
    kind: 'mcq',
    id,
    conceptIds: [conceptId],
    difficulty,
    review: AI_DRAFT,
    version: 1,
    stem,
    options,
    answerId: options.find((o) => o.text === answer)!.id,
    mini,
    mechanism: '',
    takeaway,
    estSeconds: 90,
  };
}

/** A 2×2 table for a diagnostic test (counts chosen so all four measures are distinct). */
function diagnostic(rnd: () => number) {
  for (;;) {
    const diseased = 50 * (2 + Math.floor(rnd() * 8)); // 100–450
    const healthy = 100 * (2 + Math.floor(rnd() * 18)); // 200–1900
    const sens = (60 + 5 * Math.floor(rnd() * 8)) / 100; // 0.60–0.95
    const spec = (60 + 5 * Math.floor(rnd() * 8)) / 100;
    const tp = Math.round(diseased * sens);
    const fn = diseased - tp;
    const tn = Math.round(healthy * spec);
    const fp = healthy - tn;
    const vals = [tp / (tp + fn), tn / (tn + fp), tp / (tp + fp), tn / (tn + fn)].map((v) => Math.round(v * 1000));
    if (new Set(vals).size === 4 && fp > 0 && fn > 0) return { tp, fn, fp, tn };
  }
}

const table = ({ tp, fp, fn, tn }: { tp: number; fp: number; fn: number; tn: number }) =>
  `Of those with the disease, ${tp} test positive and ${fn} test negative. Of those without the disease, ${fp} test positive and ${tn} test negative.`;

function diagnosticItems(n: number): StatItem[] {
  const out: StatItem[] = [];
  for (let i = 1; i <= n; i++) {
    const rnd = seeded(`kb:stats:dx:${i}`);
    const t = diagnostic(rnd);
    const { tp, fp, fn, tn } = t;
    const sens = tp / (tp + fn);
    const spec = tn / (tn + fp);
    const ppv = tp / (tp + fp);
    const npv = tn / (tn + fn);
    const intro = `A new screening test is evaluated against a gold standard in ${tp + fn + fp + tn} people. ${table(t)}`;
    const errors = {
      sens: { text: pct(sens), why: `${pct(sens)} is the sensitivity: TP / (TP + FN) = ${tp} / ${tp + fn}.` },
      spec: { text: pct(spec), why: `${pct(spec)} is the specificity: TN / (TN + FP) = ${tn} / ${tn + fp}.` },
      ppv: { text: pct(ppv), why: `${pct(ppv)} is the positive predictive value: TP / (TP + FP) = ${tp} / ${tp + fp}.` },
      npv: { text: pct(npv), why: `${pct(npv)} is the negative predictive value: TN / (TN + FN) = ${tn} / ${tn + fn}.` },
    };
    const make = (kind: 'sens' | 'spec' | 'ppv' | 'npv', label: string, value: number, formula: string, concept: string) => {
      const others = (Object.keys(errors) as (keyof typeof errors)[]).filter((k) => k !== kind).map((k) => errors[k]);
      const extra = { text: pct(1 - value), why: `${pct(1 - value)} is 1 − the ${label}, not the ${label} itself.` };
      out.push({
        kind,
        params: { tp, fp, fn, tn },
        answer: value,
        item: numericMcq(`kb:stats:${kind}:${i}`, concept, 2, `${intro} What is the ${label} of the test?`, pct(value), [...others, extra], `${label[0]!.toUpperCase() + label.slice(1)} = ${formula} = ${pct(value)}.`, kind === 'sens' || kind === 'spec' ? 'Sensitivity and specificity are read down the columns (disease present / absent) and do not change with prevalence.' : 'Predictive values are read across the rows (test positive / negative) and change with prevalence.'),
      });
    };
    make('sens', 'sensitivity', sens, `TP / (TP + FN) = ${tp} / ${tp + fn}`, 'sens-spec');
    make('spec', 'specificity', spec, `TN / (TN + FP) = ${tn} / ${tn + fp}`, 'sens-spec');
    make('ppv', 'positive predictive value', ppv, `TP / (TP + FP) = ${tp} / ${tp + fp}`, 'ppv-prevalence');
    make('npv', 'negative predictive value', npv, `TN / (TN + FN) = ${tn} / ${tn + fn}`, 'ppv-prevalence');
    // Positive likelihood ratio.
    const lr = sens / (1 - spec);
    out.push({
      kind: 'lrpos',
      params: { tp, fp, fn, tn },
      answer: lr,
      item: numericMcq(
        `kb:stats:lrpos:${i}`,
        'biostats-lr',
        3,
        `${intro} What is the positive likelihood ratio of the test?`,
        fix(lr),
        [
          { text: fix((1 - sens) / spec), why: `${fix((1 - sens) / spec)} is the negative likelihood ratio: (1 − sensitivity) / specificity.` },
          { text: fix(sens / spec), why: 'Sensitivity / specificity is not a likelihood ratio; LR+ = sensitivity / (1 − specificity).' },
          { text: fix(spec / (1 - sens)), why: 'This inverts the formula; LR+ = sensitivity / (1 − specificity).' },
          { text: fix(ppv / (1 - ppv)), why: 'This is the post-test odds of disease after a positive result, not the likelihood ratio.' },
        ],
        `LR+ = sensitivity / (1 − specificity) = ${fix(sens, 3)} / ${fix(1 - spec, 3)} = ${fix(lr)}.`,
        'LR+ > 10 or LR− < 0.1 shifts probability substantially; likelihood ratios do not depend on prevalence.',
      ),
    });
  }
  return out;
}

function trialItems(n: number): StatItem[] {
  const out: StatItem[] = [];
  for (let i = 1; i <= n; i++) {
    const rnd = seeded(`kb:stats:trial:${i}`);
    const per = [100, 200, 250, 400, 500, 1000][Math.floor(rnd() * 6)]!;
    // Control and treatment event rates in whole percent, treatment lower.
    const cer = (10 + 2 * Math.floor(rnd() * 16)) / 100; // 0.10–0.40
    const drop = (2 + 2 * Math.floor(rnd() * 4)) / 100; // 0.02–0.08
    const eer = Math.round((cer - drop) * 100) / 100;
    const ce = Math.round(cer * per);
    const ee = Math.round(eer * per);
    const arr = cer - eer;
    const rrr = arr / cer;
    const nnt = Math.ceil(1 / arr - 1e-9);
    const rr = eer / cer;
    const intro = `In a randomized trial, ${per} patients receive a new drug and ${per} receive placebo. Over 5 years, ${ee} patients in the drug group and ${ce} in the placebo group have a stroke.`;
    const wrongs = {
      arr: { text: pct(arr), why: `${pct(arr)} is the absolute risk reduction: ${pct(cer)} − ${pct(eer)}.` },
      rrr: { text: pct(rrr), why: `${pct(rrr)} is the relative risk reduction: ARR / control rate.` },
      rr: { text: fix(rr), why: `${fix(rr)} is the relative risk: treatment rate / control rate.` },
    };
    out.push({
      kind: 'arr',
      params: { per, ce, ee },
      answer: arr,
      item: numericMcq(`kb:stats:arr:${i}`, 'nnt', 2, `${intro} What is the absolute risk reduction with the drug?`, pct(arr), [wrongs.rrr, { text: pct(eer), why: `${pct(eer)} is the event rate on the drug, not a reduction.` }, { text: pct(cer), why: `${pct(cer)} is the event rate on placebo.` }, { text: pct(1 - rr), why: `${pct(1 - rr)} is 1 − RR, which equals the relative (not absolute) risk reduction.` }, { text: pct(rr), why: `${pct(rr)} is the relative risk expressed as a percentage.` }, { text: pct(arr / eer), why: 'This divides the difference by the treatment rate; ARR is simply the difference in event rates.' }], `ARR = control rate − treatment rate = ${pct(cer)} − ${pct(eer)} = ${pct(arr)}.`, 'ARR = CER − EER; NNT = 1 / ARR.'),
    });
    out.push({
      kind: 'rrr',
      params: { per, ce, ee },
      answer: rrr,
      item: numericMcq(`kb:stats:rrr:${i}`, 'nnt', 2, `${intro} What is the relative risk reduction with the drug?`, pct(rrr), [wrongs.arr, { text: pct(rr), why: `${pct(rr)} is the relative risk, not its reduction.` }, { text: pct(arr / eer), why: 'This divides by the treatment rate; RRR divides the ARR by the control rate.' }, { text: pct(eer), why: `${pct(eer)} is the event rate on the drug.` }, { text: pct(cer), why: `${pct(cer)} is the event rate on placebo.` }, { text: pct(1 - eer), why: 'This is the proportion of treated patients without an event, not a risk reduction.' }], `RRR = ARR / CER = ${pct(arr)} / ${pct(cer)} = ${pct(rrr)}.`, 'RRR = (CER − EER) / CER = 1 − RR.'),
    });
    out.push({
      kind: 'nnt',
      params: { per, ce, ee },
      answer: nnt,
      item: numericMcq(`kb:stats:nnt:${i}`, 'nnt', 3, `${intro} How many patients must be treated for 5 years to prevent one stroke?`, String(nnt), [{ text: String(Math.ceil(1 / rrr - 1e-9)), why: 'This is 1 / RRR; NNT uses the absolute risk reduction.' }, { text: String(Math.round(arr * 100)), why: 'This is the ARR expressed as a percentage, not the NNT.' }, { text: String(Math.ceil(1 / cer - 1e-9)), why: 'This is 1 / control event rate.' }, { text: String(Math.ceil(1 / eer - 1e-9)), why: 'This is 1 / treatment event rate.' }, { text: String(Math.floor(1 / arr + 1e-9)), why: 'Rounding NNT down overstates the benefit; always round up to the next whole patient.' }, { text: String(ce - ee), why: 'This is the difference in the number of events between groups, not the NNT.' }, { text: String(Math.round(100 * rrr)), why: 'This is the relative risk reduction expressed as a percentage, not the NNT.' }, { text: String(Math.ceil(2 / arr - 1e-9)), why: 'This doubles the NNT; NNT = 1 / ARR.' }], `NNT = 1 / ARR = 1 / ${fix(arr, 3)} = ${fix(1 / arr, 1)}, rounded up to ${nnt}.`, 'Always round NNT up to the next whole patient.'),
    });
    out.push({
      kind: 'rr',
      params: { per, ce, ee },
      answer: rr,
      item: numericMcq(`kb:stats:rr:${i}`, 'biostats-or-rr', 2, `${intro} What is the relative risk of stroke in the drug group compared with placebo?`, fix(rr), [{ text: fix(cer / eer), why: 'This inverts the ratio; RR = risk in the exposed (drug) group / risk in the comparison group.' }, { text: fix((ee / (per - ee)) / (ce / (per - ce))), why: 'This is the odds ratio, not the relative risk.' }, { text: fix(1 - rr), why: 'This is 1 − RR, the relative risk reduction.' }, { text: fix(arr), why: 'This is the absolute risk reduction as a proportion.' }], `RR = ${ee}/${per} ÷ ${ce}/${per} = ${fix(eer, 3)} / ${fix(cer, 3)} = ${fix(rr)}.`, 'RR compares incidence and is used for cohort studies and trials; < 1 means the exposure is protective.'),
    });
  }
  return out;
}

function caseControlItems(n: number): StatItem[] {
  const out: StatItem[] = [];
  for (let i = 1; i <= n; i++) {
    const rnd = seeded(`kb:stats:cc:${i}`);
    const cases = 100 * (1 + Math.floor(rnd() * 3));
    const controls = 100 * (2 + Math.floor(rnd() * 3));
    const a = Math.round(cases * (0.3 + 0.05 * Math.floor(rnd() * 8)));
    const c = cases - a;
    const b = Math.round(controls * (0.1 + 0.05 * Math.floor(rnd() * 5)));
    const d = controls - b;
    const or = (a * d) / (b * c);
    const stem = `A case-control study of lung cancer enrolls ${cases} patients with the disease and ${controls} without it. ${a} cases and ${b} controls report occupational asbestos exposure. What is the odds ratio for lung cancer associated with asbestos exposure?`;
    out.push({
      kind: 'or',
      params: { a, b, c, d },
      answer: or,
      item: numericMcq(
        `kb:stats:or:${i}`,
        'biostats-or-rr',
        3,
        stem,
        fix(or),
        [
          { text: fix((a / (a + b)) / (c / (c + d))), why: 'This treats the groups as cohorts (relative risk); case-control studies give odds ratios.' },
          { text: fix((b * c) / (a * d)), why: 'This inverts the odds ratio; OR = ad / bc.' },
          { text: fix(a / b), why: 'This compares raw counts of exposed cases and controls, ignoring the unexposed.' },
          { text: fix((a / cases) / (b / controls)), why: 'This is the ratio of exposure proportions, not the ratio of odds.' },
        ],
        `OR = (a × d) / (b × c) = (${a} × ${d}) / (${b} × ${c}) = ${fix(or)}.`,
        'Case-control studies start from outcome, so only odds of exposure can be compared: OR = ad / bc. OR approximates RR when the disease is rare.',
      ),
    });
  }
  return out;
}

function falsePositiveItems(n: number): StatItem[] {
  const out: StatItem[] = [];
  for (let i = 1; i <= n; i++) {
    const rnd = seeded(`kb:stats:fp:${i}`);
    const pop = [1000, 2000, 5000, 10000][Math.floor(rnd() * 4)]!;
    const prev = [0.01, 0.02, 0.05, 0.1][Math.floor(rnd() * 4)]!;
    const sens = [0.8, 0.9, 0.95][Math.floor(rnd() * 3)]!;
    const spec = [0.9, 0.95, 0.98, 0.99][Math.floor(rnd() * 4)]!;
    const healthy = Math.round(pop * (1 - prev));
    const diseased = pop - healthy;
    const fp = Math.round(healthy * (1 - spec));
    const fn = Math.round(diseased * (1 - sens));
    const tp = diseased - fn;
    out.push({
      kind: 'fp',
      params: { pop, prev, sens, spec },
      answer: fp,
      item: numericMcq(
        `kb:stats:fp:${i}`,
        'ppv-prevalence',
        3,
        `A screening test with ${pct(sens)} sensitivity and ${pct(spec)} specificity is applied to ${pop.toLocaleString('en-US')} people, of whom ${pct(prev)} have the disease. What is the expected number of false-positive results?`,
        fp.toLocaleString('en-US'),
        [
          { text: fn.toLocaleString('en-US'), why: 'That is the expected number of false negatives: diseased × (1 − sensitivity).' },
          { text: tp.toLocaleString('en-US'), why: 'That is the expected number of true positives: diseased × sensitivity.' },
          { text: Math.round(pop * (1 - spec)).toLocaleString('en-US'), why: 'This applies (1 − specificity) to the whole population instead of only those without disease.' },
          { text: Math.round(healthy * spec).toLocaleString('en-US'), why: 'That is the expected number of true negatives: healthy × specificity.' },
        ],
        `People without disease = ${pop.toLocaleString('en-US')} × ${1 - prev} = ${healthy.toLocaleString('en-US')}. False positives = ${healthy.toLocaleString('en-US')} × (1 − ${spec}) = ${fp.toLocaleString('en-US')}.`,
        'False positives come only from people without the disease: (1 − specificity) × number without disease.',
      ),
    });
  }
  return out;
}

/** Normal distribution: 68–95–99.7 rule. */
function normalItems(): StatItem[] {
  const out: StatItem[] = [];
  const cases: { mean: number; sd: number; unit: string; what: string }[] = [
    { mean: 140, sd: 4, unit: 'mEq/L', what: 'serum sodium concentration' },
    { mean: 7500, sd: 1500, unit: '/mm³', what: 'leukocyte count' },
    { mean: 100, sd: 15, unit: '', what: 'IQ score' },
    { mean: 3500, sd: 500, unit: 'g', what: 'birth weight' },
    { mean: 120, sd: 10, unit: 'mm Hg', what: 'systolic blood pressure' },
  ];
  const ranges: { k: number; share: string; label: string }[] = [
    { k: 1, share: '68%', label: '±1 SD' },
    { k: 2, share: '95%', label: '±2 SD' },
    { k: 3, share: '99.7%', label: '±3 SD' },
  ];
  cases.forEach((c, i) => {
    const r = ranges[i % 3]!;
    const fmt = (x: number) => `${x.toLocaleString('en-US')}${c.unit ? ` ${c.unit}` : ''}`;
    out.push({
      kind: 'normal',
      params: { mean: c.mean, sd: c.sd, k: r.k },
      answer: r.k,
      item: numericMcq(
        `kb:stats:normal:${i + 1}`,
        'biostats-normal',
        2,
        `In a large population, ${c.what} is normally distributed with a mean of ${fmt(c.mean)} and a standard deviation of ${fmt(c.sd)}. Approximately what percentage of people have values between ${fmt(c.mean - r.k * c.sd)} and ${fmt(c.mean + r.k * c.sd)}?`,
        r.share,
        ranges.filter((x) => x !== r).map((x) => ({ text: x.share, why: `${x.share} of values lie within ${x.label} of the mean.` })).concat([{ text: '50%', why: '50% of values lie on each side of the mean, not within a symmetric range around it.' }]),
        `That range is the mean ${r.label}; ${r.share} of a normal distribution lies within it.`,
        '68–95–99.7: about 68% within 1 SD, 95% within 2 SD, 99.7% within 3 SD of the mean.',
      ),
    });
  });
  return out;
}

export function biostatItems(): StatItem[] {
  return [...diagnosticItems(8), ...trialItems(8), ...caseControlItems(8), ...falsePositiveItems(8), ...normalItems()];
}
