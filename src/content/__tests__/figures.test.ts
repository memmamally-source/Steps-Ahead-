import { describe, expect, it } from 'vitest';
import { ALL_ITEMS } from '../index';
import { bandY, describeFigure, figureSvg, karyogramCopies, validateFigure, type Figure, type KaryogramFigure, type PedigreeFigure } from '../figures';

const withFigures = ALL_ITEMS.flatMap((i) => ((i.kind === 'mcq' || i.kind === 'case') && i.figure ? [{ id: i.id, figure: i.figure }] : []));

describe('Data-generated figures', () => {
  it('exist in the content bank and all pass validation', () => {
    expect(withFigures.length).toBeGreaterThan(5);
    for (const { id, figure } of withFigures) expect(validateFigure(figure), id).toEqual([]);
  });

  it('render accessible SVG with a title, description and escaped text', () => {
    for (const { id, figure } of withFigures) {
      const svg = figureSvg(figure);
      expect(svg.startsWith('<svg'), id).toBe(true);
      expect(svg, id).toContain('<title>');
      expect(svg, id).toContain('<desc>');
      expect(svg, id).toContain('viewBox=');
      expect(svg, id).not.toMatch(/<script|on\w+=/i);
    }
    const tricky: Figure = { kind: 'gel', ladder: [300, 200, 100], lanes: [{ label: '<b>&', bands: [{ bp: 150 }] }], alt: 'A gel with one lane containing a 150 bp band.' };
    expect(figureSvg(tricky)).toContain('&lt;b&gt;&amp;');
  });

  it('places bands by size on a log scale: smaller fragments run farther', () => {
    expect(bandY(1000, 1000, 100, 0, 100)).toBe(0);
    expect(bandY(100, 1000, 100, 0, 100)).toBe(100);
    expect(bandY(300, 1000, 100, 0, 100)).toBeLessThan(bandY(200, 1000, 100, 0, 100));
  });

  it('rejects gels and blots that are internally inconsistent', () => {
    expect(validateFigure({ kind: 'gel', ladder: [100, 200, 300], lanes: [{ label: 'A', bands: [] }], alt: 'An unsorted ladder for testing purposes.' })).toContain('ladder must be listed from largest to smallest');
    expect(validateFigure({ kind: 'gel', ladder: [300, 200, 100], lanes: [{ label: 'A', bands: [{ bp: 900 }] }], alt: 'A band outside the ladder for testing purposes.' }).join()).toMatch(/outside the ladder/);
    expect(validateFigure({ kind: 'western', ladder: [300, 200, 100], target: 'x', lanes: [{ label: 'A', bands: [{ kDa: 150, intensity: 0 }] }], alt: 'A blot with no visible band anywhere.' }).join()).toMatch(/no visible band/);
    expect(validateFigure({ kind: 'gel', ladder: [300, 200, 100], lanes: [{ label: 'A', bands: [] }], alt: 'short' }).join()).toMatch(/alt text/);
  });

  it('rejects pedigrees that contradict their declared inheritance mode', () => {
    const base = (mode: PedigreeFigure['mode'], fatherAffected: boolean, son: 'affected' | 'unaffected', motherNote?: string): PedigreeFigure => ({
      kind: 'pedigree', mode, alt: 'A two-generation test pedigree with one son.',
      generations: [[{ id: 'f', sex: 'M', status: fatherAffected ? 'affected' : 'unaffected' }, { id: 'm', sex: 'F', status: 'unaffected', note: motherNote }], [{ id: 's', sex: 'M', status: son }]],
      families: [{ parents: ['f', 'm'], children: ['s'] }],
    });
    // Father-to-son transmission is impossible for X-linked recessive when the mother is a tested noncarrier.
    expect(validateFigure(base('XR', true, 'affected', 'noncarrier')).join()).toMatch(/XR/);
    // ...but fine for autosomal dominant.
    expect(validateFigure(base('AD', true, 'affected'))).toEqual([]);
    // Fathers never transmit mitochondrial disease.
    expect(validateFigure(base('MT', true, 'affected')).join()).toMatch(/MT/);
    // An affected child with no affected parent breaks AD unless marked de novo.
    expect(validateFigure(base('AD', false, 'affected')).join()).toMatch(/AD/);
    const deNovo = base('AD', false, 'affected');
    deNovo.generations[1]![0]!.deNovo = true;
    expect(validateFigure(deNovo)).toEqual([]);
    // XD: an affected father's daughters must all be affected.
    const xd: PedigreeFigure = { ...base('XD', true, 'unaffected'), generations: [[{ id: 'f', sex: 'M', status: 'affected' }, { id: 'm', sex: 'F', status: 'unaffected' }], [{ id: 'd', sex: 'F', status: 'unaffected' }]], families: [{ parents: ['f', 'm'], children: ['d'] }] };
    expect(validateFigure(xd).join()).toMatch(/XD/);
  });

  it('gives every figure a text equivalent that names every lane or person', () => {
    for (const { id, figure } of withFigures) {
      const text = describeFigure(figure);
      if (figure.kind === 'pedigree') for (const g of figure.generations) expect(text.split('male').length - 1, id).toBeGreaterThanOrEqual(g.length);
      else if (figure.kind === 'gel' || figure.kind === 'western') for (const l of figure.lanes) expect(text, id).toContain(l.label);
      else expect(text.length, id).toBeGreaterThan(40);
    }
  });

  it('draws an absent Western band as an empty lane, with the expected size marked outside the membrane', () => {
    const f: Figure = { kind: 'western', ladder: [460, 268, 171], target: 'dystrophin', lanes: [{ label: 'Normal', bands: [{ kDa: 427, intensity: 3 }] }, { label: 'Patient', bands: [{ kDa: 427, intensity: 0 }] }], alt: 'Western blot: normal lane has a band; patient lane has none.' };
    const svg = figureSvg(f);
    // one visible band in the lane area, no dashed outline anywhere, and an arrowhead label for 427 kDa
    expect(svg.match(/fill-opacity="0\.95"/g)).toHaveLength(1);
    expect(svg).not.toContain('stroke-dasharray');
    expect(svg).toContain('427 kDa');
    expect(describeFigure(f)).toContain('Patient: no band at 427 kDa');
  });

  it('flow figures: percentages must add up and peaks stay on the axis', () => {
    expect(validateFigure({ kind: 'flow-histogram', marker: 'CD59', cells: 'Red cells', populations: [{ label: 'A', center: 1, spread: 0.3, percent: 60 }, { label: 'B', center: 3, spread: 0.3, percent: 30 }], alt: 'A histogram whose populations do not add up.' }).join()).toMatch(/add up to 90/);
    expect(validateFigure({ kind: 'flow-histogram', marker: 'CD59', cells: 'Red cells', populations: [{ label: 'A', center: 6, spread: 0.3, percent: 100 }], alt: 'A histogram with a peak off the axis.' }).join()).toMatch(/within the axis/);
    expect(validateFigure({ kind: 'flow-dot', xMarker: 'CD8', yMarker: 'CD4', cells: 'T cells', quadrants: { ll: 10, lr: 10, ul: 10, ur: 10 }, alt: 'A dot plot whose quadrants do not add up.' }).join()).toMatch(/add up to 40/);
    const dot: Figure = { kind: 'flow-dot', xMarker: 'CD8', yMarker: 'CD4', cells: 'T cells', quadrants: { ll: 5, lr: 25, ul: 65, ur: 5 }, alt: 'A dot plot with mostly CD4-positive cells.' };
    // 600 dots drawn in proportion to the quadrant percentages, identically on every render
    expect(figureSvg(dot).match(/<circle/g)).toHaveLength(600);
    expect(figureSvg(dot)).toBe(figureSvg(dot));
    expect(describeFigure(dot)).toContain('upper left (CD8⁻ CD4⁺) 65%');
  });

  it('FISH: fusions need both probes and metaphase shows at most one signal per homologue', () => {
    expect(validateFigure({ kind: 'fish', phase: 'interphase', probes: [{ target: 'BCR', color: 'green', signals: 2 }], fusions: 1, alt: 'An interphase nucleus with a fusion but one probe.' }).join()).toMatch(/one red and one green/);
    expect(validateFigure({ kind: 'fish', phase: 'metaphase', chromosome: '22', probes: [{ target: '22q11.2', color: 'red', signals: 3 }], alt: 'A metaphase spread with too many signals.' }).join()).toMatch(/at most one signal/);
    expect(validateFigure({ kind: 'fish', phase: 'interphase', probes: [{ target: 'BCR', color: 'green', signals: 2 }, { target: 'ABL1', color: 'red', signals: 2 }], fusions: 1, alt: 'An interphase nucleus with one BCR-ABL1 fusion signal.' })).toEqual([]);
  });

  it('karyograms: the chromosome count must match the stated karyotype', () => {
    const k = (karyotype: string, sex: KaryogramFigure['sex'], changes: KaryogramFigure['changes']): KaryogramFigure => ({ kind: 'karyogram', karyotype, sex, changes, alt: 'A schematic karyogram used for testing.' });
    expect(validateFigure(k('47,XX,+21', 'XX', [{ type: 'trisomy', chr: '21' }]))).toEqual([]);
    expect(validateFigure(k('46,XX,+21', 'XX', [{ type: 'trisomy', chr: '21' }])).join()).toMatch(/says 46 .* has 47/);
    expect(validateFigure(k('45,X', 'X', []))).toEqual([]);
    expect(validateFigure(k('45,XX,der(14;21)(q10;q10)', 'XX', [{ type: 'robertsonian', a: '14', b: '21' }]))).toEqual([]);
    expect(validateFigure(k('45,XX,der(1;21)', 'XX', [{ type: 'robertsonian', a: '1', b: '21' }])).join()).toMatch(/acrocentric/);
    expect(karyogramCopies(k('46,XY,der(14;21)(q10;q10),+21', 'XY', [{ type: 'robertsonian', a: '14', b: '21' }, { type: 'trisomy', chr: '21' }])).counts.get('21')).toBe(2);
  });

  it('never shows a microdeletion as visible on a routine karyogram', () => {
    const micro: KaryogramFigure = { kind: 'karyogram', karyotype: '46,XX', sex: 'XX', changes: [{ type: 'deletion', chr: '22', arm: 'q', mb: 3 }], alt: 'A karyogram wrongly drawing a 22q11.2 microdeletion.' };
    expect(validateFigure(micro).join()).toMatch(/below routine karyotype resolution; show it with FISH or a microarray/);
    const large: KaryogramFigure = { ...micro, karyotype: '46,XX,del(5)(p14)', changes: [{ type: 'deletion', chr: '5', arm: 'p', mb: 20 }], alt: 'A karyogram with a large terminal 5p deletion.' };
    expect(validateFigure(large)).toEqual([]);
    // every karyogram in the content bank passes the same rule
    for (const { id, figure } of withFigures) if (figure.kind === 'karyogram') for (const c of figure.changes) if (c.type === 'deletion') expect(c.mb, id).toBeGreaterThanOrEqual(5);
  });
});
