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
  /** 0 = no band at this position (drawn as an empty, dashed outline so absence is explicit). */
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

export type Figure = GelFigure | WesternFigure | PedigreeFigure;

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
  const width = left + lanes.length * (laneW + gap) + 12;
  const height = top + h + 44;
  const max = Math.max(...f.ladder), min = Math.min(...f.ladder);
  const unit = isGel ? 'bp' : 'kDa';
  const parts: string[] = [];
  parts.push(`<rect x="${left - 8}" y="${top - 16}" width="${width - left - 4}" height="${h + 32}" rx="8" fill="${PANEL}"/>`);
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
      if (b.intensity === 0) parts.push(`<rect x="${x + 6}" y="${y - 3.5}" width="${laneW - 12}" height="7" rx="2" fill="none" stroke="${MUTED}" stroke-dasharray="3 3" stroke-width="1"/>`);
      else parts.push(`<rect x="${x + 6}" y="${y - 3.5}" width="${laneW - 12}" height="7" rx="2" fill="${INK}" fill-opacity="${[0, 0.35, 0.65, 0.95][b.intensity]}"/>`);
    }
  });
  parts.push(`<text x="${left - 40}" y="${top - 6}" font-size="11" fill="${MUTED}" ${FONT}>${unit}</text>`);
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
  for (const { x, y, p } of pos.values()) {
    const fill = p.status === 'affected' ? INK : PAPER;
    if (p.sex === 'M') parts.push(`<rect x="${x - s / 2}" y="${y - s / 2}" width="${s}" height="${s}" fill="${fill}" stroke="${INK}" stroke-width="1.8"/>`);
    else parts.push(`<circle cx="${x}" cy="${y}" r="${s / 2}" fill="${fill}" stroke="${INK}" stroke-width="1.8"/>`);
    if (p.status === 'carrier') parts.push(`<circle cx="${x}" cy="${y}" r="4.5" fill="${INK}"/>`);
    if (p.proband) parts.push(`<path d="M ${x - s / 2 - 16} ${y + s / 2 + 10} L ${x - s / 2 - 3} ${y + s / 2 - 1}" stroke="${INK}" stroke-width="1.8"/><path d="M ${x - s / 2 - 3} ${y + s / 2 - 1} l -7 1 l 4 -6 z" fill="${INK}"/>`);
    parts.push(`<text x="${x}" y="${y + s / 2 + 15}" text-anchor="middle" font-size="11" fill="${MUTED}" ${FONT}>${label.get(p.id)}${p.note && p.note !== 'noncarrier' ? ` ${esc(p.note)}` : ''}</text>`);
  }
  return wrap(width, height, f, parts);
}

function wrap(width: number, height: number, f: Figure, parts: string[]): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${Math.round(width)} ${Math.round(height)}" width="100%" style="max-width:${Math.round(width)}px;height:auto" role="img" aria-label="${esc(f.alt)}"><title>${esc(f.alt)}</title><desc>${esc(describeFigure(f))}</desc>${parts.join('')}</svg>`;
}

/** Original SVG markup for a figure. Labels are escaped; nothing comes from outside the content bank. */
export function figureSvg(f: Figure): string {
  return f.kind === 'pedigree' ? pedigreeSvg(f) : blotSvg(f);
}
