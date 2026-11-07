/**
 * Arithmetic checks for written calculations in content text.
 *
 * `findCalculations` pulls chains such as "q = √(1/10,000) = 1/100" or "1/2 × 1/2 = 1/4" out of any string
 * and keeps the segments that are purely numeric. `checkCalculation` evaluates each numeric segment and
 * reports adjacent segments that disagree. "=" must agree within 0.5%; "≈" within 5%.
 */

export interface Calculation { text: string; segments: { expr: string; value: number }[]; ops: ('=' | '≈')[] }

const NUM_OK = /^[\d.\s()+\-*/^√]+$/;
const HEAD = /^(1 in [\d,]+|[√(\d][\d.,\s()+\-×÷·*/²√%]*)/;
const TAIL = /([√(\d][\d.,\s()+\-×÷·*/²√%]*)$/;

/** Converts a written expression to a JavaScript-evaluable one, or null if it is not purely numeric. */
export function normalizeExpr(raw: string): string | null {
  let e = raw.trim()
    .replace(/(\d),(?=\d{3}\b)/g, '$1') // thousands separators
    .replace(/[×·]/g, '*')
    .replace(/^(.*)÷(.*)$/, '($1)/($2)')
    .replace(/−/g, '-')
    .replace(/²/g, '^2')
    .replace(/(\d+(?:\.\d+)?)\s*%/g, '($1/100)')
    .replace(/^1 in (\d+(?:\.\d+)?)$/, '1/$1');
  if (!e || !/\d/.test(e) || !NUM_OK.test(e)) return null;
  // reject bare ranges or lists such as "5–33" (en dash is not in NUM_OK) or trailing operators
  if (/[+\-*/^]\s*$/.test(e) || /^\s*[*/^]/.test(e)) return null;
  e = e.replace(/√\s*\(/g, 'Math.sqrt(').replace(/√\s*(\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?)/g, 'Math.sqrt($1)').replace(/\^/g, '**');
  return e;
}

export function evaluate(expr: string): number | null {
  const js = normalizeExpr(expr);
  if (js === null) return null;
  try {
    const v = Function(`"use strict"; return (${js});`)() as unknown;
    return typeof v === 'number' && Number.isFinite(v) ? v : null;
  } catch {
    return null;
  }
}

/** Splits text into chains joined by = or ≈ and returns those with at least two numeric segments in a row. */
export function findCalculations(text: string): Calculation[] {
  const out: Calculation[] = [];
  // a chain runs within one clause: stop at ; : , (followed by space) → and sentence ends
  for (const clause of text.split(/;|→|:\s|,\s|\.\s|\.$|\(=|\bso\b|\bthen\b/)) {
    if (!/[=≈]/.test(clause)) continue;
    const parts = clause.split(/(=|≈)/);
    const segs: { expr: string; value: number | null }[] = [];
    const ops: ('=' | '≈')[] = [];
    for (let i = 0; i < parts.length; i++) {
      if (i % 2) ops.push(parts[i] as '=' | '≈');
      else {
        // keep only the numeric tail of the first segment and the numeric head of later ones
        const raw = parts[i]!.trim();
        let seg: string | null = null;
        if (i === 0) {
          const m = raw.match(TAIL);
          // the numeric tail must not be glued to a preceding letter (e.g. "HCO3" or "x2")
          if (m && !/[A-Za-z₀-₉⁰-⁹]$/.test(raw.slice(0, raw.length - m[1]!.length))) seg = m[1]!;
        } else {
          const m = raw.match(HEAD);
          // the numeric head must not run straight into a letter (e.g. "2q", "2pq")
          if (m && !/^[A-Za-z]/.test(raw.slice(m[1]!.length))) seg = m[1]!;
        }
        segs.push({ expr: seg ?? raw, value: seg === null ? null : evaluate(seg) });
      }
    }
    for (let i = 0; i + 1 < segs.length; i++) {
      const a = segs[i]!, b = segs[i + 1]!;
      if (a.value !== null && b.value !== null && /[+\-×·*/²√]|\d\s*\/\s*\d/.test(a.expr + b.expr)) {
        out.push({ text: clause.trim(), segments: [{ expr: a.expr, value: a.value }, { expr: b.expr, value: b.value }], ops: [ops[i]!] });
      }
    }
  }
  return out;
}

export function checkCalculation(c: Calculation): string | null {
  const [a, b] = c.segments as [Calculation['segments'][number], Calculation['segments'][number]];
  const rel = c.ops[0]! === '≈' ? 0.05 : 0.005;
  const scale = Math.max(Math.abs(a.value), Math.abs(b.value), 1e-12);
  // a written decimal (e.g. 0.71, 16.7%) may be rounded to its last shown digit
  const shown = (e: string) => { const m = e.match(/\.(\d+)\s*%?\s*$/); return m ? 0.5 * 10 ** -m[1]!.length * (/%\s*$/.test(e) ? 0.01 : 1) : 0; };
  const diff = Math.abs(a.value - b.value);
  return diff / scale <= rel || diff <= Math.max(shown(a.expr), shown(b.expr)) + 1e-12 ? null : `${a.expr} ${c.ops[0]} ${b.expr} (${a.value} vs ${b.value}) in "${c.text}"`;
}

/** Every string inside a value, depth first. */
export function allStrings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => allStrings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => allStrings(x, out));
  return out;
}
