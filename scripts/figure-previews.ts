/**
 * Renders every content figure to PNG previews (light and dark theme) for review.
 * Usage: npx vite-node scripts/figure-previews.ts -- <outDir> [idPrefix...]
 * Writes <outDir>/<item id>.light.png, .dark.png and an index.html gallery. Uses the pre-installed Playwright.
 */
import { mkdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { ALL_ITEMS } from '../src/content/index';
import { describeFigure, figureSvg, validateFigure } from '../src/content/figures';

const [out = 'docs/subjects/review/figures/previews', ...prefixes] = process.argv.slice(2).filter((a) => a !== '--');
mkdirSync(out, { recursive: true });
const items = ALL_ITEMS.flatMap((i) => ((i.kind === 'mcq' || i.kind === 'case') && i.figure && (!prefixes.length || prefixes.some((p) => i.id.startsWith(p))) ? [{ id: i.id, figure: i.figure }] : []));

const THEMES = {
  light: '--bg:#f4f4f5;--surface:#ffffff;--surface-2:#ececef;--text:#111111;--muted:#6e6e73;',
  dark: '--bg:#0a0a0a;--surface:#161616;--surface-2:#262626;--text:#f5f5f5;--muted:#9a9a9f;',
};
const page = (theme: keyof typeof THEMES, svg: string) => `<!doctype html><html><head><meta charset="utf-8"><style>:root{${THEMES[theme]}}body{margin:0;background:var(--bg);font-family:Inter,system-ui,sans-serif}#fig{display:inline-block;padding:16px;background:var(--surface);width:358px}</style></head><body><div id="fig">${svg}</div></body></html>`;

const require = createRequire(import.meta.url);
const { chromium } = require('playwright') as typeof import('playwright');
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 900 }, deviceScaleFactor: 2 });
const tab = await ctx.newPage();
const rows: string[] = [];
for (const { id, figure } of items) {
  const safe = id.replace(/[^a-z0-9-]/gi, '_');
  for (const theme of ['light', 'dark'] as const) {
    await tab.setContent(page(theme, figureSvg(figure)));
    await tab.locator('#fig').screenshot({ path: join(out, `${safe}.${theme}.png`) });
  }
  const problems = validateFigure(figure);
  rows.push(`<section><h2>${id} — ${figure.kind}</h2><p>Validation: ${problems.length ? problems.join('; ') : 'pass'}</p><img src="${safe}.light.png" width="390"><img src="${safe}.dark.png" width="390"><p><b>Alt:</b> ${figure.alt}</p><p><b>Text description:</b> ${describeFigure(figure)}</p>${figure.caption ? `<p><b>Caption:</b> ${figure.caption}</p>` : ''}</section>`);
}
await browser.close();
writeFileSync(join(out, 'index.html'), `<!doctype html><meta charset="utf-8"><title>Figure previews</title><style>body{font-family:system-ui;max-width:860px;margin:auto;padding:16px}img{border:1px solid #ccc;margin:4px;vertical-align:top}</style><h1>Figure previews (draft, not medically reviewed)</h1><p>Phone-width render (358 px figure area), light and dark theme, 2× pixel density.</p>${rows.join('')}`);
console.log(`wrote ${items.length} figures × 2 themes to ${out}`);
