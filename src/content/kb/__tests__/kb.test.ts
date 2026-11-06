import { ALL_CONCEPTS } from '@/content';
import { KB_ISSUES, KB_ITEMS } from '@/content/kb';
import { BACTERIA, BACTERIA_TRAITS } from '@/content/kb/bacteria';
import { matches } from '@/content/kb/traits';
import { VIRUSES } from '@/content/kb/viruses';
import { GLOMERULAR } from '@/content/kb/glomerular';
import { FUNGI_PARASITES } from '@/content/kb/fungiParasites';
import { virusStructure } from '@/content/kb';

describe('knowledge tables', () => {
  it('generate without issues (every identification has exactly one matching row)', () => {
    expect(KB_ISSUES).toEqual([]);
  });

  it('link every row to an existing concept', () => {
    const ids = new Set(ALL_CONCEPTS.map((c) => c.id));
    for (const b of [...BACTERIA, ...VIRUSES, ...GLOMERULAR, ...FUNGI_PARASITES]) expect(ids.has(b.concept)).toBe(true);
    // Identifying findings must be unique so identification has one best answer.
    const findings = FUNGI_PARASITES.map((r) => String(r.traits.finding));
    expect(new Set(findings).size).toBe(findings.length);
  });

  it('only use defined traits with known phrasing', () => {
    for (const b of BACTERIA) for (const k of Object.keys(b.traits)) expect(BACTERIA_TRAITS[k as keyof typeof BACTERIA_TRAITS]).toBeDefined();
  });

  it('every generated MCQ has exactly one option consistent with the table', () => {
    for (const item of KB_ITEMS) {
      if (item.kind !== 'mcq' || !item.id.includes(':id')) continue;
      const row = BACTERIA.find((b) => item.id === `kb:bact:${b.id}:id`);
      if (!row) continue;
      const clues = Object.fromEntries(row.idClues.map((k) => [k, row.traits[k]!]));
      const optionRows = item.options.map((o) => BACTERIA.find((b) => b.name === o.text)!);
      expect(optionRows.filter((r) => matches({ ...r.traits, __group: r.group }, { ...clues, __group: row.group }))).toHaveLength(1);
    }
  });

  it('never repeats a hallmark across organisms', () => {
    const all = BACTERIA.flatMap((b) => b.hallmarks.map((h) => (typeof h === 'string' ? h : h.text).toLowerCase()));
    expect(new Set(all).size).toBe(all.length);
  });

  it('keeps virus structure rules consistent (Step 1 rules and their exceptions)', () => {
    for (const v of VIRUSES) {
      const t = v.traits;
      if (t.genome === 'DNA') {
        expect(t.sense).toBeUndefined();
        // All DNA viruses replicate in the nucleus except poxvirus.
        if (t.site) expect(t.site).toBe(v.family === 'Poxviridae' ? 'cytoplasm' : 'nucleus');
        // All dsDNA except parvovirus (ss) and hepadnavirus (partial).
        expect(t.strands).toBe(v.id === 'parvo' ? 'ss' : v.id === 'hbv' ? 'partial' : 'ds');
      } else {
        // All RNA viruses ss except reovirus; all cytoplasmic except influenza and retroviruses.
        expect(t.strands).toBe(v.id === 'rotavirus' ? 'ds' : 'ss');
        if (t.site) expect(t.site).toBe(v.id === 'influenza' || v.group === 'retro' ? 'nucleus' : 'cytoplasm');
        if (v.group === 'rna-pos' || v.group === 'retro') expect(t.sense).toBe('positive');
        if (v.group === 'rna-neg') expect(t.sense).toBe('negative');
      }
    }
    expect(new Set(VIRUSES.map(virusStructure)).size).toBeGreaterThanOrEqual(5);
  });

  it('produces a substantial bank', () => {
    expect(KB_ITEMS.length).toBeGreaterThan(100);
  });
});
