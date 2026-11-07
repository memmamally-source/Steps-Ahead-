import { describe, expect, it } from 'vitest';
import { ALL_ITEMS } from '../index';
import { bandY, describeFigure, figureSvg, validateFigure, type Figure, type PedigreeFigure } from '../figures';

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
      else for (const l of figure.lanes) expect(text, id).toContain(l.label);
    }
  });
});
