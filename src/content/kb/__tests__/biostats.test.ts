import { STAT_ITEMS } from '@/content/kb';

/** Independent recomputation of every biostatistics answer from its stored inputs. */
const pct = (x: number) => `${Math.round(x * 1000) / 10}%`;
const fix = (x: number) => (Math.round(x * 100) / 100).toString();

function expected(s: (typeof STAT_ITEMS)[number]): string {
  const p = s.params;
  switch (s.kind) {
    case 'sens': return pct(p.tp! / (p.tp! + p.fn!));
    case 'spec': return pct(p.tn! / (p.tn! + p.fp!));
    case 'ppv': return pct(p.tp! / (p.tp! + p.fp!));
    case 'npv': return pct(p.tn! / (p.tn! + p.fn!));
    case 'lrpos': return fix(p.tp! / (p.tp! + p.fn!) / (1 - p.tn! / (p.tn! + p.fp!)));
    case 'arr': return pct(p.ce! / p.per! - p.ee! / p.per!);
    case 'rrr': return pct((p.ce! / p.per! - p.ee! / p.per!) / (p.ce! / p.per!));
    case 'nnt': return String(Math.ceil(1 / (p.ce! / p.per! - p.ee! / p.per!) - 1e-9));
    case 'rr': return fix(p.ee! / p.per! / (p.ce! / p.per!));
    case 'or': return fix((p.a! * p.d!) / (p.b! * p.c!));
    case 'fp': return Math.round(Math.round(p.pop! * (1 - p.prev!)) * (1 - p.spec!)).toLocaleString('en-US');
    case 'normal': return { 1: '68%', 2: '95%', 3: '99.7%' }[p.k!]!;
    default: throw new Error(s.kind);
  }
}

describe('biostatistics generator', () => {
  it('produces a solid bank across all measures', () => {
    expect(STAT_ITEMS.length).toBeGreaterThanOrEqual(80);
    expect(new Set(STAT_ITEMS.map((s) => s.kind)).size).toBeGreaterThanOrEqual(11);
  });

  it('marks the independently recomputed value as the correct option', () => {
    for (const s of STAT_ITEMS) {
      const right = s.item.options.find((o) => o.id === s.item.answerId)!;
      expect(right.text).toBe(expected(s));
    }
  });

  it('never shows the correct value twice or a distractor equal to it', () => {
    for (const s of STAT_ITEMS) {
      const texts = s.item.options.map((o) => o.text);
      expect(new Set(texts).size).toBe(texts.length);
      expect(texts.length).toBeGreaterThanOrEqual(4);
    }
  });

  it('uses unique, stable ids', () => {
    const ids = STAT_ITEMS.map((s) => s.item.id);
    expect(new Set(ids).size).toBe(ids.length);
  });
});
