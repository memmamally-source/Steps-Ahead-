/**
 * Visual learning items: original figures generated from data (see docs/VISUAL_LEARNING_PLAN.md).
 *
 * A figure is a small data object stored with an item. `figureSvg` turns it into original SVG markup
 * (theme-aware through CSS custom properties, with fallbacks for standalone files), `describeFigure`
 * produces the text equivalent for screen readers, and `validateFigure` checks that the figure is
 * internally consistent: band order follows size, absent bands are declared, and a pedigree fits the
 * inheritance pattern it claims to show. Validity is not medical approval: reviewers check realism.
 *
 * Pure module: no React, no DOM.
 */

// ------------------------------------------------------------------------------------------------
// Types
// ------------------------------------------------------------------------------------------------

export interface GelBand {
  /** Fragment size in base pairs. */
  bp: number;
  /** Relative staining intensity; 1 = faint, 3 = strong. */
  intensity?: 1 | 2 | 3;
}

export interface GelFigure {
  kind: 'gel';
  /** Size markers in base pairs, drawn as the first lane. */
  ladder: number[];
  lanes: { label: string; bands: GelBand[] }[];
  alt: string;
  caption?: string;
}

export interface WesternBand {
  kDa: number;
  /** 0 = no band at this position. The lane is left empty, as on a real blot; the expected size is marked outside the membrane. */
  intensity: 0 | 1 | 2 | 3;
}

export interface WesternFigure {
  kind: 'western';
  /** Molecular-weight markers in kDa. */
  ladder: number[];
  /** Name of the protein the antibody detects, shown on the figure. */
  target: string;
  lanes: { label: string; bands: WesternBand[] }[];
  alt: string;
  caption?: string;
}

export type Sex = 'M' | 'F';
export type PedigreeStatus = 'affected' | 'unaffected' | 'carrier';

export interface PedigreePerson {
  id: string;
  sex: Sex;
  status: PedigreeStatus;
  /** Marks the person the question is about (arrow). */
  proband?: boolean;
  /** A new mutation in this person (allowed exception to the declared mode). */
  deNovo?: boolean;
  /** Optional short label shown under the symbol (e.g. "?" or an age). */
  note?: string;
}

export type InheritanceMode = 'AD' | 'AR' | 'XR' | 'XD' | 'MT';

export interface PedigreeFigure {
  kind: 'pedigree';
  /** One array per generation, top to bottom, left to right. Partners should be adjacent. */
  generations: PedigreePerson[][];
  /** Each mating and its children (children belong to the next generation). */
  families: { parents: [string, string]; children: string[]; consanguineous?: boolean }[];
  /** The inheritance pattern the pedigree is meant to illustrate; checked by `validateFigure`. */
  mode?: InheritanceMode;
  alt: string;
  caption?: string;
}

/** One cell population on a single-marker flow histogram (log fluorescence, decades 10⁰–10⁵). */
export interface FlowPopulation {
  label: string;
  /** Peak position in log10 fluorescence units (0–5). */
  center: number;
  /** Standard deviation in log10 units. */
  spread: number;
  /** Share of cells (percent). Peak AREA is drawn proportional to it. */
  percent: number;
}

export interface FlowHistogramFigure {
  kind: 'flow-histogram';
  /** Marker on the x-axis, e.g. "CD59". */
  marker: string;
  /** What was analysed, e.g. "Red cells". */
  cells: string;
  populations: FlowPopulation[];
  alt: string;
  caption?: string;
}

export interface FlowDotFigure {
  kind: 'flow-dot';
  xMarker: string;
  yMarker: string;
  cells: string;
  /** Percent of cells in each quadrant (lower-left, lower-right, upper-left, upper-right); must sum to 100. */
  quadrants: { ll: number; lr: number; ul: number; ur: number };
  alt: string;
  caption?: string;
}

export interface FishProbe {
  /** Locus the probe binds, e.g. "22q11.2 (TBX1 region)". */
  target: string;
  color: 'red' | 'green';
  /** Signals counted per cell. */
  signals: number;
}

export interface FishFigure {
  kind: 'fish';
  /** Interphase: dots in a nucleus. Metaphase: the two homologues of `chromosome`, each with its signals. */
  phase: 'interphase' | 'metaphase';
  /** Chromosome both probes lie on (metaphase only). */
  chromosome?: string;
  probes: FishProbe[];
  /** Overlapping red–green (yellow) fusion signals, for translocation probes (interphase only). */
  fusions?: number;
  alt: string;
  caption?: string;
}

export type KaryotypeChange =
  | { type: 'trisomy'; chr: string }
  | { type: 'monosomy'; chr: string }
  /** Terminal deletion on one homologue; `mb` is its approximate size. */
  | { type: 'deletion'; chr: string; arm: 'p' | 'q'; mb: number }
  /** Robertsonian fusion of the long arms of two acrocentric chromosomes (one copy of each is replaced). */
  | { type: 'robertsonian'; a: string; b: string };

export interface KaryogramFigure {
  kind: 'karyogram';
  /** ISCN-style result shown under the figure, e.g. "47,XX,+21". Its count and sex are checked. */
  karyotype: string;
  sex: 'XX' | 'XY' | 'X';
  changes: KaryotypeChange[];
  alt: string;
  caption?: string;
}

export type Figure = GelFigure | WesternFigure | PedigreeFigure | FlowHistogramFigure | FlowDotFigure | FishFigure | KaryogramFigure;

/** Approximate chromosome lengths and centromere positions in Mb (schematic drawing only). */
export const CHROMOSOMES: Record<string, { len: number; cen: number }> = {
  '1': { len: 248, cen: 123 }, '2': { len: 242, cen: 93 }, '3': { len: 198, cen: 91 }, '4': { len: 190, cen: 50 },
  '5': { len: 181, cen: 48 }, '6': { len: 171, cen: 60 }, '7': { len: 159, cen: 60 }, '8': { len: 145, cen: 45 },
  '9': { len: 138, cen: 43 }, '10': { len: 134, cen: 40 }, '11': { len: 135, cen: 53 }, '12': { len: 133, cen: 35 },
  '13': { len: 114, cen: 17 }, '14': { len: 107, cen: 17 }, '15': { len: 102, cen: 19 }, '16': { len: 90, cen: 36 },
  '17': { len: 83, cen: 25 }, '18': { len: 80, cen: 18 }, '19': { len: 59, cen: 26 }, '20': { len: 64, cen: 28 },
  '21': { len: 47, cen: 12 }, '22': { len: 51, cen: 15 }, X: { len: 156, cen: 60 }, Y: { len: 57, cen: 10 },
};
const ACROCENTRIC = new Set(['13', '14', '15', '21', '22']);

/**
 * Smallest deletion drawn on a routine karyogram. Routine G-banding resolves roughly 5–10 Mb; anything
 * smaller (22q11.2, 7q11.23, 15q11–q13 microdeletions) must be shown with FISH or a microarray instead.
 */
export const KARYOTYPE_MIN_MB = 5;

// ------------------------------------------------------------------------------------------------
// Validation
// ------------------------------------------------------------------------------------------------

const sorted = (xs: number[], desc: boolean) => xs.every((x, i) => i === 0 || (desc ? xs[i - 1]! > x : xs[i - 1]! < x));

/** Problems with a figure; empty when it is internally consistent. */
export function validateFigure(f: Figure): string[] {
  const out: string[] = [];
  if (!f.alt || f.alt.trim().length < 20) out.push('alt text missing or too short');
  if (f.kind === 'gel' || f.kind === 'western') {
    const sizes = f.kind === 'gel' ? f.ladder : f.ladder;
    if (sizes.length < 3) out.push('ladder needs at least 3 markers');
    if (!sorted(sizes, true)) out.push('ladder must be listed from largest to smallest');
    if (sizes.some((x) => x <= 0)) out.push('ladder sizes must be positive');
    if (!f.lanes.length) out.push('no sample lanes');
    const max = Math.max(...sizes), min = Math.min(...sizes);
    for (const lane of f.lanes) {
      if (!lane.label.trim()) out.push('every lane needs a label');
      const vals = f.kind === 'gel' ? (lane as GelFigure['lanes'][number]).bands.map((b) => b.bp) : (lane as WesternFigure['lanes'][number]).bands.map((b) => b.kDa);
      for (const v of vals) if (v > max || v < min) out.push(`${lane.label}: band ${v} lies outside the ladder range`);
      if (new Set(vals).size !== vals.length) out.push(`${lane.label}: duplicate band sizes`);
    }
    if (f.kind === 'western') {
      const visible = f.lanes.flatMap((l) => l.bands.filter((b) => b.intensity > 0));
      if (!visible.length) out.push('western blot shows no visible band in any lane');
    }
  }
  if (f.kind === 'pedigree') out.push(...validatePedigree(f));
  if (f.kind === 'flow-histogram') {
    if (!f.populations.length) out.push('no populations');
    for (const p of f.populations) {
      if (!p.label.trim()) out.push('every population needs a label');
      if (p.center < 0.5 || p.center > 4.5) out.push(`${p.label}: peak must lie within the axis (0.5–4.5 log units)`);
      if (p.spread <= 0 || p.spread > 1) out.push(`${p.label}: spread must be between 0 and 1 log unit`);
      if (p.percent <= 0) out.push(`${p.label}: percent must be positive`);
    }
    const sum = f.populations.reduce((a, p) => a + p.percent, 0);
    if (Math.abs(sum - 100) > 0.5) out.push(`population percents add up to ${sum}, not 100`);
  }
  if (f.kind === 'flow-dot') {
    const q = f.quadrants, sum = q.ll + q.lr + q.ul + q.ur;
    if ([q.ll, q.lr, q.ul, q.ur].some((x) => x < 0)) out.push('quadrant percents cannot be negative');
    if (Math.abs(sum - 100) > 0.5) out.push(`quadrant percents add up to ${sum}, not 100`);
    if (!f.xMarker.trim() || !f.yMarker.trim()) out.push('both axes need a marker');
  }
  if (f.kind === 'fish') {
    if (!f.probes.length) out.push('no probes');
    for (const p of f.probes) if (p.signals < 0 || p.signals > 4 || !Number.isInteger(p.signals)) out.push(`${p.target}: signals must be a whole number from 0 to 4`);
    if (new Set(f.probes.map((p) => p.color)).size !== f.probes.length) out.push('each probe needs its own colour');
    if (f.fusions) {
      if (f.phase !== 'interphase') out.push('fusion signals are drawn on interphase nuclei');
      if (f.probes.length !== 2) out.push('a fusion needs one red and one green probe');
      if (f.probes.some((p) => p.signals < f.fusions!)) out.push('each fusion uses one signal from each probe');
    }
    if (f.phase === 'metaphase') {
      if (!f.chromosome || !CHROMOSOMES[f.chromosome]) out.push('metaphase FISH needs the chromosome the probes lie on');
      if (f.probes.some((p) => p.signals > 2)) out.push('metaphase FISH shows at most one signal per homologue');
    }
  }
  if (f.kind === 'karyogram') out.push(...validateKaryogram(f));
  return out;
}

/** Chromosome copies implied by a karyogram: free chromosomes per type plus derivative (fused) chromosomes. */
export function karyogramCopies(f: KaryogramFigure): { counts: Map<string, number>; derivatives: string[][]; total: number } {
  const counts = new Map<string, number>();
  for (const c of Object.keys(CHROMOSOMES)) if (c !== 'X' && c !== 'Y') counts.set(c, 2);
  counts.set('X', f.sex.split('').filter((x) => x === 'X').length);
  counts.set('Y', f.sex.includes('Y') ? 1 : 0);
  const derivatives: string[][] = [];
  for (const ch of f.changes) {
    if (ch.type === 'trisomy') counts.set(ch.chr, (counts.get(ch.chr) ?? 0) + 1);
    if (ch.type === 'monosomy') counts.set(ch.chr, (counts.get(ch.chr) ?? 0) - 1);
    if (ch.type === 'robertsonian') {
      counts.set(ch.a, (counts.get(ch.a) ?? 0) - 1);
      counts.set(ch.b, (counts.get(ch.b) ?? 0) - 1);
      derivatives.push([ch.a, ch.b]);
    }
  }
  const total = [...counts.values()].reduce((a, b) => a + b, 0) + derivatives.length;
  return { counts, derivatives, total };
}

function validateKaryogram(f: KaryogramFigure): string[] {
  const out: string[] = [];
  const m = f.karyotype.match(/^(\d+),([XY]+)/);
  if (!m) return ['karyotype must start with the chromosome count and sex chromosomes, e.g. "47,XX,+21"'];
  const { counts, total } = karyogramCopies(f);
  if (Number(m[1]) !== total) out.push(`karyotype says ${m[1]} chromosomes but the drawing has ${total}`);
  if (m[2] !== f.sex) out.push(`karyotype sex ${m[2]} does not match ${f.sex}`);
  for (const ch of f.changes) {
    const chrs = ch.type === 'robertsonian' ? [ch.a, ch.b] : [ch.chr];
    for (const c of chrs) if (!CHROMOSOMES[c]) out.push(`unknown chromosome ${c}`);
    if (ch.type === 'robertsonian') for (const c of chrs) if (!ACROCENTRIC.has(c)) out.push(`Robertsonian fusion needs acrocentric chromosomes; ${c} is not`);
    if (ch.type === 'deletion') {
      if (ch.mb < KARYOTYPE_MIN_MB) out.push(`a ${ch.mb}-Mb deletion of ${ch.chr}${ch.arm} is below routine karyotype resolution; show it with FISH or a microarray`);
      const c = CHROMOSOMES[ch.chr];
      if (c && ch.mb >= (ch.arm === 'p' ? c.cen : c.len - c.cen)) out.push(`deletion of ${ch.mb} Mb is larger than ${ch.chr}${ch.arm}`);
    }
  }
  for (const [c, n] of counts) if (n < 0) out.push(`chromosome ${c} has a negative count`);
  return out;
}

function validatePedigree(f: PedigreeFigure): string[] {
  const out: string[] = [];
  const people = new Map<string, { p: PedigreePerson; gen: number }>();
  f.generations.forEach((g, gen) => g.forEach((p) => {
    if (people.has(p.id)) out.push(`duplicate person id ${p.id}`);
    people.set(p.id, { p, gen });
    if (p.sex === 'M' && p.status === 'carrier' && (f.mode === 'XR' || f.mode === 'XD')) out.push(`${p.id}: a male cannot be shown as an unaffected carrier of an X-linked trait`);
  }));
  const childOf = new Map<string, [PedigreePerson, PedigreePerson]>();
  for (const fam of f.families) {
    const [a, b] = fam.parents.map((id) => people.get(id));
    if (!a || !b) { out.push(`family references unknown parent ${fam.parents.join(' × ')}`); continue; }
    if (a.gen !== b.gen) out.push(`parents ${fam.parents.join(' × ')} are in different generations`);
    if (a.p.sex === b.p.sex) out.push(`parents ${fam.parents.join(' × ')} must be one male and one female`);
    for (const c of fam.children) {
      const k = people.get(c);
      if (!k) { out.push(`unknown child ${c}`); continue; }
      if (k.gen !== a.gen + 1) out.push(`child ${c} is not in the generation after its parents`);
      if (childOf.has(c)) out.push(`child ${c} has two sets of parents`);
      childOf.set(c, a.p.sex === 'M' ? [a.p, b.p] : [b.p, a.p]);
    }
  }
  if (f.mode) out.push(...modeConflicts(f, people, childOf));
  return out;
}

const isAff = (p: PedigreePerson) => p.status === 'affected';
const hasVariant = (p: PedigreePerson) => p.status !== 'unaffected';
/** Unaffected people are only assumed to lack the variant when explicitly noted as tested noncarriers. */
const noncarrier = (p: PedigreePerson) => p.status === 'unaffected' && p.note === 'noncarrier';

/**
 * Transmissions that the declared mode cannot explain (de novo children are exempt). Pedigrees do not
 * have to mark carriers (that would give the answer away), so only explicit contradictions are flagged.
 */
function modeConflicts(f: PedigreeFigure, people: Map<string, { p: PedigreePerson }>, childOf: Map<string, [PedigreePerson, PedigreePerson]>): string[] {
  const out: string[] = [];
  for (const [id, [father, mother]] of childOf) {
    const child = people.get(id)!.p;
    if (child.deNovo) continue;
    switch (f.mode) {
      case 'AD':
        if (isAff(child) && !hasVariant(father) && !hasVariant(mother)) out.push(`AD: affected ${id} has no parent carrying the variant`);
        break;
      case 'AR':
        if (isAff(child) && (noncarrier(father) || noncarrier(mother))) out.push(`AR: affected ${id} has a tested noncarrier parent`);
        break;
      case 'XR':
        if (isAff(child) && child.sex === 'M' && noncarrier(mother)) out.push(`XR: affected son ${id} cannot inherit an X-linked allele from his father`);
        if (isAff(child) && child.sex === 'F' && !(isAff(father) && !noncarrier(mother))) out.push(`XR: affected daughter ${id} needs an affected father and a mother who may carry the variant`);
        if (isAff(father) && child.sex === 'F' && noncarrier(child)) out.push(`XR: daughter ${id} of an affected father is an obligate carrier`);
        break;
      case 'XD':
        if (isAff(father) && child.sex === 'F' && !isAff(child)) out.push(`XD: daughter ${id} of an affected father must be affected`);
        if (isAff(father) && child.sex === 'M' && isAff(child) && !isAff(mother)) out.push(`XD: son ${id} cannot inherit from his father`);
        if (isAff(child) && !isAff(father) && !isAff(mother)) out.push(`XD: affected ${id} has no affected parent`);
        break;
      case 'MT':
        if (isAff(child) && !hasVariant(mother)) out.push(`MT: affected ${id} must have a mother carrying the variant`);
        break;
    }
  }
  return out;
}

// ------------------------------------------------------------------------------------------------
// Text equivalent
// ------------------------------------------------------------------------------------------------

const ROMAN = ['I', 'II', 'III', 'IV', 'V'];

/** Plain-language description of the figure's content (shown on request and read by screen readers). */
export function describeFigure(f: Figure): string {
  if (f.kind === 'gel') {
    return `Agarose gel. Ladder: ${f.ladder.join(', ')} bp. ` + f.lanes.map((l) => `${l.label}: ${l.bands.length ? l.bands.map((b) => `${b.bp} bp`).join(', ') : 'no band'}`).join('. ') + '.';
  }
  if (f.kind === 'western') {
    return `Western blot for ${f.target}. Markers: ${f.ladder.join(', ')} kDa. ` + f.lanes.map((l) => `${l.label}: ${l.bands.map((b) => (b.intensity === 0 ? `no band at ${b.kDa} kDa` : `${['', 'faint', 'moderate', 'strong'][b.intensity]} band at ${b.kDa} kDa`)).join(', ')}`).join('. ') + '.';
  }
  if (f.kind === 'flow-histogram') {
    return `Flow cytometry histogram of ${f.cells.toLowerCase()}, ${f.marker} fluorescence on a log scale. ` + f.populations.map((p) => `${p.label}: ${p.percent}% of cells, peak at ${['very low', 'low', 'low', 'intermediate', 'high', 'very high'][Math.round(p.center)]} fluorescence (about 10^${p.center.toFixed(1)})`).join('. ') + '.';
  }
  if (f.kind === 'flow-dot') {
    const q = f.quadrants, x = f.xMarker, y = f.yMarker;
    return `Flow cytometry dot plot of ${f.cells.toLowerCase()}: ${x} on the x-axis, ${y} on the y-axis; each dot is one cell. Lower left (${x}⁻ ${y}⁻) ${q.ll}%, lower right (${x}⁺ ${y}⁻) ${q.lr}%, upper left (${x}⁻ ${y}⁺) ${q.ul}%, upper right (${x}⁺ ${y}⁺) ${q.ur}%.`;
  }
  if (f.kind === 'fish') {
    const probes = f.probes.map((p) => `${p.color} probe for ${p.target}: ${p.signals} signal${p.signals === 1 ? '' : 's'}`).join('; ');
    return f.phase === 'metaphase'
      ? `FISH on metaphase chromosomes ${f.chromosome}. ${probes}. ${f.probes.map((p) => `${p.color[0]!.toUpperCase()}${p.color.slice(1)} signal on ${p.signals === 2 ? 'both homologues' : p.signals === 1 ? 'only one homologue' : 'neither homologue'}`).join('; ')}.`
      : `FISH on an interphase nucleus. ${probes}${f.fusions ? `; ${f.fusions} overlapping red–green (yellow) fusion signal${f.fusions === 1 ? '' : 's'}` : ''}.`;
  }
  if (f.kind === 'karyogram') {
    const parts = f.changes.map((c) => c.type === 'trisomy' ? `three copies of chromosome ${c.chr}` : c.type === 'monosomy' ? `one copy of chromosome ${c.chr}` : c.type === 'deletion' ? `one chromosome ${c.chr} missing the end of its ${c.arm} arm (about ${c.mb} Mb)` : `one chromosome ${c.a} and one chromosome ${c.b} joined at their centromeres (Robertsonian translocation)`);
    return `Karyogram ${f.karyotype}: ${karyogramCopies(f).total} chromosomes arranged in pairs by size; sex chromosomes ${f.sex}. ${parts.length ? `Changes: ${parts.join('; ')}.` : 'No numerical or large structural change.'}`;
  }
  const label = (gen: number, i: number) => `${ROMAN[gen] ?? gen + 1}-${i + 1}`;
  const name = new Map<string, string>();
  f.generations.forEach((g, gi) => g.forEach((p, i) => name.set(p.id, label(gi, i))));
  const gens = f.generations.map((g, gi) => `Generation ${ROMAN[gi] ?? gi + 1}: ` + g.map((p, i) => `${label(gi, i)} ${p.sex === 'M' ? 'male' : 'female'}, ${p.status}${p.proband ? ' (proband)' : ''}${p.note && p.note !== 'noncarrier' ? ` (${p.note})` : ''}`).join('; '));
  const fams = f.families.map((fm) => `${fm.parents.map((id) => name.get(id)).join(' and ')}${fm.consanguineous ? ' (related)' : ''} have ${fm.children.length ? fm.children.map((c) => name.get(c)).join(', ') : 'no children'}`);
  return `Pedigree. ${gens.join('. ')}. ${fams.join('. ')}.`;
}

// ------------------------------------------------------------------------------------------------
// SVG
// ------------------------------------------------------------------------------------------------

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const INK = 'var(--text, #111111)';
const MUTED = 'var(--muted, #6e6e73)';
const PAPER = 'var(--surface, #ffffff)';
const PANEL = 'var(--surface-2, #ececef)';
const FONT = 'font-family="Inter, system-ui, sans-serif"';

/** Vertical position for a size on a log scale: largest at the top (near the wells). */
export function bandY(size: number, max: number, min: number, top: number, height: number): number {
  return top + ((Math.log(max) - Math.log(size)) / (Math.log(max) - Math.log(min))) * height;
}

function blotSvg(f: GelFigure | WesternFigure): string {
  const isGel = f.kind === 'gel';
  const lanes = [{ label: isGel ? 'Ladder' : 'Marker', ladder: true }, ...f.lanes.map((l) => ({ label: l.label, ladder: false }))];
  const laneW = 64, gap = 14, left = 64, top = 46, h = 230;
  // An absent band is drawn as an empty lane, exactly as a real negative looks. Its expected position is
  // marked outside the membrane (arrowhead + size), never inside the lane, so the lane itself is not misleading.
  const absent = isGel ? [] : [...new Set((f as WesternFigure).lanes.flatMap((l) => l.bands.filter((b) => b.intensity === 0).map((b) => b.kDa)))];
  const marginR = absent.length ? 74 : 0;
  const width = left + lanes.length * (laneW + gap) + 12 + marginR;
  const height = top + h + 44;
  const max = Math.max(...f.ladder), min = Math.min(...f.ladder);
  const unit = isGel ? 'bp' : 'kDa';
  const parts: string[] = [];
  parts.push(`<rect x="${left - 8}" y="${top - 16}" width="${width - marginR - left - 4}" height="${h + 32}" rx="8" fill="${PANEL}"/>`);
  lanes.forEach((ln, i) => {
    const x = left + i * (laneW + gap);
    parts.push(`<text x="${x + laneW / 2}" y="${top - 24}" text-anchor="middle" font-size="12" fill="${INK}" ${FONT}>${esc(ln.label)}</text>`);
    parts.push(`<rect x="${x + 6}" y="${top - 12}" width="${laneW - 12}" height="6" rx="1.5" fill="none" stroke="${MUTED}" stroke-width="1"/>`);
  });
  // ladder
  f.ladder.forEach((s) => {
    const y = bandY(s, max, min, top, h);
    parts.push(`<rect x="${left + 8}" y="${y - 2}" width="${laneW - 16}" height="4" rx="1" fill="${MUTED}"/>`);
    parts.push(`<text x="${left - 12}" y="${y + 4}" text-anchor="end" font-size="11" fill="${MUTED}" ${FONT}>${s}</text>`);
  });
  f.lanes.forEach((lane, li) => {
    const x = left + (li + 1) * (laneW + gap);
    const bands = isGel ? (lane as GelFigure['lanes'][number]).bands.map((b) => ({ size: b.bp, intensity: b.intensity ?? 3 })) : (lane as WesternFigure['lanes'][number]).bands.map((b) => ({ size: b.kDa, intensity: b.intensity as number }));
    for (const b of bands) {
      const y = bandY(b.size, max, min, top, h);
      if (b.intensity === 0) continue; // nothing is drawn in the lane: no protein, no signal
      parts.push(`<rect x="${x + 6}" y="${y - 3.5}" width="${laneW - 12}" height="7" rx="2" fill="${INK}" fill-opacity="${[0, 0.35, 0.65, 0.95][b.intensity]}"/>`);
    }
  });
  const edge = width - marginR - 4;
  for (const size of absent) {
    const y = bandY(size, max, min, top, h);
    parts.push(`<path d="M ${edge + 4} ${y} l 9 -5 v 10 z" fill="${MUTED}"/>`);
    parts.push(`<text x="${edge + 16}" y="${y + 4}" font-size="11" fill="${MUTED}" ${FONT}>${size} ${unit}</text>`);
  }
  parts.push(`<text x="${left - 12}" y="${top - 24}" text-anchor="end" font-size="11" fill="${MUTED}" ${FONT}>${unit}</text>`);
  if (isGel) {
    parts.push(`<text x="${width - 10}" y="${top - 2}" text-anchor="end" font-size="13" fill="${MUTED}" ${FONT}>−</text>`);
    parts.push(`<text x="${width - 10}" y="${top + h + 14}" text-anchor="end" font-size="13" fill="${MUTED}" ${FONT}>+</text>`);
  } else {
    parts.push(`<text x="${left}" y="${top + h + 32}" font-size="12" fill="${INK}" ${FONT}>Antibody: ${esc(f.target)}</text>`);
  }
  return wrap(width, height, f, parts);
}

function pedigreeSvg(f: PedigreeFigure): string {
  const maxCols = Math.max(...f.generations.map((g) => g.length));
  // Tighter spacing for wide generations so phone-width rendering stays legible.
  const wide = maxCols > 5;
  const s = wide ? 26 : 30, colW = wide ? 50 : 66, rowH = 92, left = 40, top = 30;
  const width = left + maxCols * colW + 16;
  const height = top + f.generations.length * rowH;
  const pos = new Map<string, { x: number; y: number; p: PedigreePerson }>();
  f.generations.forEach((g, gi) => {
    const offset = ((maxCols - g.length) * colW) / 2;
    g.forEach((p, i) => pos.set(p.id, { x: left + offset + i * colW + colW / 2, y: top + gi * rowH + s / 2, p }));
  });
  const parts: string[] = [];
  f.generations.forEach((_, gi) => parts.push(`<text x="12" y="${top + gi * rowH + s / 2 + 5}" font-size="13" font-weight="600" fill="${MUTED}" ${FONT}>${ROMAN[gi] ?? gi + 1}</text>`));
  for (const fam of f.families) {
    const a = pos.get(fam.parents[0]), b = pos.get(fam.parents[1]);
    if (!a || !b) continue;
    const [l, r] = a.x < b.x ? [a, b] : [b, a];
    const y = l.y;
    parts.push(`<line x1="${l.x + s / 2}" y1="${y}" x2="${r.x - s / 2}" y2="${y}" stroke="${INK}" stroke-width="1.6"/>`);
    if (fam.consanguineous) parts.push(`<line x1="${l.x + s / 2}" y1="${y + 4}" x2="${r.x - s / 2}" y2="${y + 4}" stroke="${INK}" stroke-width="1.6"/>`);
    const kids = fam.children.map((c) => pos.get(c)).filter((k): k is NonNullable<typeof k> => !!k);
    if (!kids.length) continue;
    const mid = (l.x + r.x) / 2, sib = y + rowH / 2;
    parts.push(`<line x1="${mid}" y1="${y + (fam.consanguineous ? 4 : 0)}" x2="${mid}" y2="${sib}" stroke="${INK}" stroke-width="1.6"/>`);
    const xs = kids.map((k) => k.x);
    parts.push(`<line x1="${Math.min(mid, ...xs)}" y1="${sib}" x2="${Math.max(mid, ...xs)}" y2="${sib}" stroke="${INK}" stroke-width="1.6"/>`);
    for (const k of kids) parts.push(`<line x1="${k.x}" y1="${sib}" x2="${k.x}" y2="${k.y - s / 2}" stroke="${INK}" stroke-width="1.6"/>`);
  }
  const label = new Map<string, string>();
  f.generations.forEach((g, gi) => g.forEach((p, i) => label.set(p.id, `${ROMAN[gi] ?? gi + 1}-${i + 1}`)));
  // The right-hand member of each couple has the descent line on their left.
  const rightPartners = new Set<string>();
  for (const fam of f.families) {
    const a = pos.get(fam.parents[0]), b = pos.get(fam.parents[1]);
    if (a && b) rightPartners.add(a.x > b.x ? fam.parents[0] : fam.parents[1]);
  }
  for (const { x, y, p } of pos.values()) {
    const fill = p.status === 'affected' ? INK : PAPER;
    if (p.sex === 'M') parts.push(`<rect x="${x - s / 2}" y="${y - s / 2}" width="${s}" height="${s}" fill="${fill}" stroke="${INK}" stroke-width="1.8"/>`);
    else parts.push(`<circle cx="${x}" cy="${y}" r="${s / 2}" fill="${fill}" stroke="${INK}" stroke-width="1.8"/>`);
    if (p.status === 'carrier') parts.push(`<circle cx="${x}" cy="${y}" r="4.5" fill="${INK}"/>`);
    // Proband arrow from the lower corner on the side away from the couple's descent line.
    if (p.proband) {
      const d = rightPartners.has(p.id) ? 1 : -1;
      const tipX = x + d * (s / 2 + 3), tipY = y + s / 2 - 1;
      parts.push(`<path d="M ${tipX + d * 13} ${tipY + 11} L ${tipX} ${tipY}" stroke="${INK}" stroke-width="1.8"/><path d="M ${tipX} ${tipY} l ${d * 7} 1 l ${-d * 4} -6 z" fill="${INK}"/>`);
    }
    // ID on the first line, any note on a second, smaller line so neighbouring labels do not collide.
    parts.push(`<text x="${x}" y="${y + s / 2 + 14}" text-anchor="middle" font-size="11" fill="${MUTED}" ${FONT}>${label.get(p.id)}</text>`);
    if (p.note && p.note !== 'noncarrier') parts.push(`<text x="${x}" y="${y + s / 2 + 26}" text-anchor="middle" font-size="9.5" fill="${MUTED}" ${FONT}>${esc(p.note)}</text>`);
  }
  return wrap(width, height, f, parts);
}

function wrap(width: number, height: number, f: Figure, parts: string[]): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Math.round(width)} ${Math.round(height)}" width="100%" style="max-width:${Math.round(width)}px;height:auto" role="img" aria-label="${esc(f.alt)}"><title>${esc(f.alt)}</title><desc>${esc(describeFigure(f))}</desc>${parts.join('')}</svg>`;
}

const RED = '#d6453d';
const GREEN = '#2f9e44';
const YELLOW = '#e3b505';

/** Deterministic pseudo-random numbers so a figure always renders identically. */
function rng(seed: number): () => number {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const seedOf = (text: string) => [...text].reduce((h, c) => Math.imul(h ^ c.charCodeAt(0), 16777619), 2166136261);
const gauss = (r: () => number) => Math.sqrt(-2 * Math.log(r() || 1e-9)) * Math.cos(2 * Math.PI * r());

function axisDecades(parts: string[], x0: number, y0: number, w: number, horizontal: boolean) {
  for (let d = 0; d <= 5; d++) {
    const t = (d / 5) * w;
    if (horizontal) {
      parts.push(`<line x1="${x0 + t}" y1="${y0}" x2="${x0 + t}" y2="${y0 + 4}" stroke="${MUTED}"/>`);
      parts.push(`<text x="${x0 + t}" y="${y0 + 16}" text-anchor="middle" font-size="10" fill="${MUTED}" ${FONT}>10${['⁰', '¹', '²', '³', '⁴', '⁵'][d]}</text>`);
    } else {
      parts.push(`<line x1="${x0 - 4}" y1="${y0 - t}" x2="${x0}" y2="${y0 - t}" stroke="${MUTED}"/>`);
      parts.push(`<text x="${x0 - 6}" y="${y0 - t + 3}" text-anchor="end" font-size="10" fill="${MUTED}" ${FONT}>10${['⁰', '¹', '²', '³', '⁴', '⁵'][d]}</text>`);
    }
  }
}

function flowHistogramSvg(f: FlowHistogramFigure): string {
  const left = 52, top = 20, w = 300, h = 170, width = left + w + 20, height = top + h + 64;
  const parts: string[] = [`<rect x="${left}" y="${top}" width="${w}" height="${h}" fill="${PANEL}" rx="4"/>`];
  // Each population is a normal curve on the log axis whose AREA is proportional to its percent.
  const dens = (p: FlowPopulation, x: number) => (p.percent / (p.spread * Math.sqrt(2 * Math.PI))) * Math.exp(-((x - p.center) ** 2) / (2 * p.spread ** 2));
  const peak = Math.max(...f.populations.map((p) => dens(p, p.center)));
  const tones = [INK, MUTED];
  f.populations.forEach((p, i) => {
    const pts: string[] = [];
    for (let k = 0; k <= 150; k++) {
      const x = (k / 150) * 5;
      pts.push(`${(left + (x / 5) * w).toFixed(1)},${(top + h - (dens(p, x) / peak) * (h - 18)).toFixed(1)}`);
    }
    parts.push(`<polygon points="${left},${top + h} ${pts.join(' ')} ${left + w},${top + h}" fill="${tones[i % 2]}" fill-opacity="0.28" stroke="${tones[i % 2]}" stroke-width="1.6"/>`);
    const lx = left + (p.center / 5) * w;
    parts.push(`<text x="${lx}" y="${top + h - (dens(p, p.center) / peak) * (h - 18) - 6}" text-anchor="middle" font-size="11" fill="${INK}" ${FONT}>${esc(p.label)} ${p.percent}%</text>`);
  });
  axisDecades(parts, left, top + h, w, true);
  parts.push(`<text x="${left + w / 2}" y="${top + h + 34}" text-anchor="middle" font-size="12" fill="${INK}" ${FONT}>${esc(f.marker)} fluorescence (log) →</text>`);
  parts.push(`<text x="14" y="${top + h / 2}" text-anchor="middle" font-size="12" fill="${INK}" ${FONT} transform="rotate(-90 14 ${top + h / 2})">Number of cells</text>`);
  parts.push(`<text x="${left}" y="${top + h + 52}" font-size="11" fill="${MUTED}" ${FONT}>${esc(f.cells)}</text>`);
  return wrap(width, height, f, parts);
}

function flowDotSvg(f: FlowDotFigure): string {
  const left = 58, top = 20, w = 260, h = 260, width = left + w + 20, height = top + h + 50;
  const parts: string[] = [`<rect x="${left}" y="${top}" width="${w}" height="${h}" fill="${PANEL}" rx="4"/>`];
  const gate = 0.5; // quadrant boundary at 10^2.5
  const r = rng(seedOf(f.alt));
  const total = 600;
  const q = f.quadrants;
  const cells: [number, number, number][] = [[q.ll, 1.2, 1.2], [q.lr, 3.6, 1.2], [q.ul, 1.2, 3.6], [q.ur, 3.6, 3.6]];
  for (const [pct, cx, cy] of cells) {
    const n = Math.round((pct / 100) * total);
    for (let i = 0; i < n; i++) {
      // clamp each dot inside its own quadrant so the picture matches the stated percentages exactly
      const x = Math.min(Math.max(cx + gauss(r) * 0.38, cx < 2.5 ? 0.1 : 2.6), cx < 2.5 ? 2.4 : 4.9);
      const y = Math.min(Math.max(cy + gauss(r) * 0.38, cy < 2.5 ? 0.1 : 2.6), cy < 2.5 ? 2.4 : 4.9);
      parts.push(`<circle cx="${(left + (x / 5) * w).toFixed(1)}" cy="${(top + h - (y / 5) * h).toFixed(1)}" r="1.5" fill="${INK}" fill-opacity="0.6"/>`);
    }
  }
  const gx = left + (gate * 5 / 5) * w, gy = top + h - (gate * 5 / 5) * h;
  parts.push(`<line x1="${gx}" y1="${top}" x2="${gx}" y2="${top + h}" stroke="${MUTED}" stroke-dasharray="4 3"/>`);
  parts.push(`<line x1="${left}" y1="${gy}" x2="${left + w}" y2="${gy}" stroke="${MUTED}" stroke-dasharray="4 3"/>`);
  const lab = (x: number, y: number, t: string, anchor: string) => parts.push(`<text x="${x}" y="${y}" text-anchor="${anchor}" font-size="11" font-weight="600" fill="${INK}" ${FONT}>${t}</text>`);
  lab(left + 6, top + h - 6, `${q.ll}%`, 'start');
  lab(left + w - 6, top + h - 6, `${q.lr}%`, 'end');
  lab(left + 6, top + 14, `${q.ul}%`, 'start');
  lab(left + w - 6, top + 14, `${q.ur}%`, 'end');
  axisDecades(parts, left, top + h, w, true);
  axisDecades(parts, left, top + h, h, false);
  parts.push(`<text x="${left + w / 2}" y="${top + h + 32}" text-anchor="middle" font-size="12" fill="${INK}" ${FONT}>${esc(f.xMarker)} →</text>`);
  parts.push(`<text x="14" y="${top + h / 2}" text-anchor="middle" font-size="12" fill="${INK}" ${FONT} transform="rotate(-90 14 ${top + h / 2})">${esc(f.yMarker)} →</text>`);
  parts.push(`<text x="${left}" y="${top + h + 46}" font-size="11" fill="${MUTED}" ${FONT}>${esc(f.cells)}; each dot is one cell</text>`);
  return wrap(width, height, f, parts);
}

function chromosomeShape(x: number, y: number, len: number, cen: number, scale: number, cw: number, fill: string, label?: string): string {
  const pLen = cen * scale, qLen = (len - cen) * scale, pinch = cw * 0.28;
  const r = cw / 2;
  const top = y, cy = y + pLen, bot = cy + qLen;
  return `<path d="M ${x} ${top + r} a ${r} ${r} 0 0 1 ${cw} 0 L ${x + cw} ${cy - 2} L ${x + cw - pinch} ${cy} L ${x + cw} ${cy + 2} L ${x + cw} ${bot - r} a ${r} ${r} 0 0 1 ${-cw} 0 L ${x} ${cy + 2} L ${x + pinch} ${cy} L ${x} ${cy - 2} Z" fill="${fill}" stroke="${INK}" stroke-width="1"/>${label ? `<text x="${x + cw / 2}" y="${bot + 12}" text-anchor="middle" font-size="9" fill="${MUTED}" ${FONT}>${label}</text>` : ''}`;
}

function fishSvg(f: FishFigure): string {
  const col = (c: 'red' | 'green') => (c === 'red' ? RED : GREEN);
  const parts: string[] = [];
  let width: number, height: number;
  if (f.phase === 'metaphase') {
    const c = CHROMOSOMES[f.chromosome ?? '1'] ?? CHROMOSOMES['1']!;
    const scale = 150 / Math.max(c.len, 60), cw = 22;
    width = 300; height = 70 + c.len * scale + 60;
    parts.push(`<rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#14161c"/>`);
    [0, 1].forEach((hi) => {
      const x = 90 + hi * 100, y = 34;
      parts.push(chromosomeShape(x, y, c.len, c.cen, scale, cw, '#4a5bd4'));
      f.probes.forEach((p, pi) => {
        if (hi >= p.signals) return;
        // control probes sit near the q-arm end; the test locus near the q-arm proximal region
        const pos = pi === 0 ? c.cen + (c.len - c.cen) * 0.25 : c.len - (c.len - c.cen) * 0.12;
        const cy = y + pos * scale;
        parts.push(`<circle cx="${x + cw / 2 - 5}" cy="${cy}" r="4.5" fill="${col(p.color)}"/><circle cx="${x + cw / 2 + 5}" cy="${cy}" r="4.5" fill="${col(p.color)}"/>`);
      });
      parts.push(`<text x="${x + cw / 2}" y="${y + c.len * scale + 20}" text-anchor="middle" font-size="11" fill="#e8e8ef" ${FONT}>${esc(f.chromosome ?? '')}</text>`);
    });
  } else {
    width = 300; height = 250;
    parts.push(`<rect x="0" y="0" width="${width}" height="${height}" rx="10" fill="#14161c"/>`);
    parts.push(`<ellipse cx="150" cy="105" rx="100" ry="80" fill="#3446b8" fill-opacity="0.75"/>`);
    const spots: [number, number][] = [[95, 70], [190, 80], [120, 140], [185, 135], [150, 55], [110, 105], [200, 110], [145, 160]];
    let k = 0;
    const fus = f.fusions ?? 0;
    for (let i = 0; i < fus; i++) {
      const [x, y] = spots[k++]!;
      parts.push(`<circle cx="${x}" cy="${y}" r="6" fill="${YELLOW}"/>`);
    }
    for (const p of f.probes) for (let i = 0; i < p.signals - fus; i++) {
      const [x, y] = spots[k++]!;
      parts.push(`<circle cx="${x}" cy="${y}" r="6" fill="${col(p.color)}"/>`);
    }
  }
  // legend (light text on the dark fluorescence panel)
  let ly = height - 14 - 16 * (f.probes.length - 1 + (f.fusions ? 1 : 0));
  for (const p of f.probes) {
    parts.push(`<circle cx="18" cy="${ly - 4}" r="5" fill="${col(p.color)}"/><text x="30" y="${ly}" font-size="11" fill="#e8e8ef" ${FONT}>${esc(p.target)}: ${p.signals}</text>`);
    ly += 16;
  }
  if (f.fusions) parts.push(`<circle cx="18" cy="${ly - 4}" r="5" fill="${YELLOW}"/><text x="30" y="${ly}" font-size="11" fill="#e8e8ef" ${FONT}>Fusion (red + green): ${f.fusions}</text>`);
  return wrap(width, height, f, parts);
}

function karyogramSvg(f: KaryogramFigure): string {
  const rows: string[][] = [['1', '2', '3', '4', '5'], ['6', '7', '8', '9', '10', '11', '12', 'X'], ['13', '14', '15', '16', '17', '18'], ['19', '20', '21', '22', 'Y']];
  const { counts, derivatives } = karyogramCopies(f);
  const scale = 0.42, cw = 7, gapIn = 3, gapOut = 13, left = 14, rowGap = 26;
  const deletions = new Map<string, { arm: 'p' | 'q'; mb: number }>();
  for (const c of f.changes) if (c.type === 'deletion') deletions.set(c.chr, { arm: c.arm, mb: c.mb });
  const parts: string[] = [];
  const derivLabels: string[] = [];
  let y = 14, width = 0;
  for (const row of rows) {
    const rowH = Math.max(...row.map((c) => CHROMOSOMES[c]!.len)) * scale;
    let x = left;
    for (const c of row) {
      const info = CHROMOSOMES[c]!;
      const n = counts.get(c) ?? 0;
      const derivs = derivatives.filter((d) => d[0] === c);
      const groupStart = x;
      for (let i = 0; i < n; i++) {
        const del = deletions.get(c);
        if (del && i === 0) {
          // terminal deletion: the homologue is shorter at that end
          const len = info.len - del.mb, cen = del.arm === 'p' ? info.cen - del.mb : info.cen;
          parts.push(chromosomeShape(x, y + rowH - info.len * scale + (del.arm === 'p' ? del.mb * scale : 0), len, cen, scale, cw, PAPER));
        } else parts.push(chromosomeShape(x, y + rowH - info.len * scale, info.len, info.cen, scale, cw, PAPER));
        x += cw + gapIn;
      }
      for (const d of derivs) {
        const a = d[0]!, b = d[1]!;
        // Robertsonian derivative: long arms of a and b joined at a single centromere
        const qa = CHROMOSOMES[a]!.len - CHROMOSOMES[a]!.cen, qb = CHROMOSOMES[b]!.len - CHROMOSOMES[b]!.cen;
        parts.push(chromosomeShape(x, y + rowH - (qa + qb) * scale, qa + qb, qb, scale, cw, PANEL));
        derivLabels.push(`<text x="${x + cw / 2}" y="${y + rowH + 23}" text-anchor="middle" font-size="9" fill="${INK}" ${FONT}>der(${a};${b})</text>`);
        x += cw + gapIn;
      }
      const groupW = Math.max(x - groupStart - gapIn, cw);
      if (n + derivs.length > 0) parts.push(`<text x="${groupStart + groupW / 2}" y="${y + rowH + 12}" text-anchor="middle" font-size="10" fill="${MUTED}" ${FONT}>${c}</text>`);
      else if (c !== 'Y') parts.push(`<text x="${groupStart + 4}" y="${y + rowH + 12}" text-anchor="middle" font-size="10" fill="${MUTED}" ${FONT}>${c}</text>`);
      x = Math.max(x, groupStart + cw + gapIn) + gapOut;
    }
    width = Math.max(width, x);
    y += rowH + rowGap + (derivLabels.length ? 10 : 0);
    parts.push(...derivLabels.splice(0));
  }
  parts.push(`<text x="${left}" y="${y + 4}" font-size="13" font-weight="600" fill="${INK}" ${FONT}>${esc(f.karyotype)}</text>`);
  const height = y + 14;
  return wrap(width, height, f, [`<rect x="0" y="0" width="${width}" height="${height}" fill="${PAPER}"/>`, ...parts]);
}

/** Original SVG markup for a figure. Labels are escaped; nothing comes from outside the content bank. */
export function figureSvg(f: Figure): string {
  switch (f.kind) {
    case 'pedigree': return pedigreeSvg(f);
    case 'flow-histogram': return flowHistogramSvg(f);
    case 'flow-dot': return flowDotSvg(f);
    case 'fish': return fishSvg(f);
    case 'karyogram': return karyogramSvg(f);
    default: return blotSvg(f);
  }
}
