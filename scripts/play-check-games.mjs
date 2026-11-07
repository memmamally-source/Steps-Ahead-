/**
 * Browser play-check for Mechanism Lab and Match Up. Plays EVERY sequence and match item in a
 * phone-sized touch viewport and checks the real UI:
 *  - Mechanism Lab: Check stays disabled until every step is placed; tapping a placed step removes
 *    it (undo); the correct order scores 100 and shows the explanation; a wrong order is marked,
 *    shows the correct step under each misplaced slot, and scores below 100.
 *  - Match Up: tapping a right term first asks for a left term; a wrong pair is rejected and counted;
 *    correct pairs lock in; completing the set shows the explanation and score.
 *  - Both: the answer is recorded in saved progress, “Teach me this” opens and closes, and the page
 *    raises no console errors.
 * Usage: npx vite-node scripts/dump-game-items.ts -- /tmp/items.json && node scripts/play-check-games.mjs /tmp/items.json [shotsDir]
 */
import { spawn } from 'node:child_process';
import { existsSync, readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium, devices } = require('playwright');

const [itemsPath, shots] = process.argv.slice(2);
const { sequences, matches } = JSON.parse(readFileSync(itemsPath, 'utf8'));
const PORT = 5181;
const URL = `http://localhost:${PORT}/`;
const results = [];
const check = (name, ok, extra = '') => results.push({ ok: !!ok, line: `${ok ? 'PASS' : 'FAIL'} ${name}${extra ? ` — ${extra}` : ''}` });
const norm = (s) => s.toLowerCase().replace(/\s+/g, ' ').trim();

// Serve the production build, not the dev server: the dev server hot-reloads when a source file
// changes, which can swap the item on screen mid-round and fail checks that have nothing to do with
// the game. Run `npm run build` first (`npm run check:games` does).
if (!existsSync('dist/index.html')) throw new Error('dist/ not found: run npm run build first');
const server = spawn('npx', ['vite', 'preview', '--port', String(PORT), '--strictPort'], { stdio: 'ignore' });
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
// Items are drawn at random, weighted by Step 1 relevance (core 3, supplementary 1), so a rarely drawn
// item can take many rounds to appear. Repeat draws are cheap (the board is skipped), so the cap scales
// with the number of items instead of being fixed.
const maxRounds = (n) => 60 * n;

async function main() {
  for (let i = 0; i < 40; i++) {
    try { if ((await fetch(URL)).ok) break; } catch { /* starting */ }
    await wait(500);
  }
  const browser = await chromium.launch();
  const ctx = await browser.newContext({ ...devices['iPhone 13'] });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push(String(e)));
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));

  // Onboarding (first visit).
  await page.goto(URL);
  await page.waitForURL(/welcome/);
  await page.getByRole('button', { name: 'Continue' }).tap();
  await page.getByRole('radio', { name: /^15/ }).tap();
  await page.getByRole('button', { name: 'Start playing' }).tap();
  await page.getByRole('heading', { name: /Today’s session|Goal reached/ }).waitFor();

  const answered = async () => JSON.parse((await page.evaluate(() => localStorage.getItem('steps-ahead:progress'))) ?? '{}');
  const itemsAnswered = async () => JSON.stringify(await answered());

  // ---------------- Mechanism Lab ----------------
  const seqByTitle = new Map(sequences.map((s) => [norm(s.title), s]));
  const seqDone = { right: new Set(), wrong: new Set() };
  await page.goto(URL + 'play/mechanism');
  for (let round = 0; round < maxRounds(sequences.length) && (seqDone.right.size < sequences.length || seqDone.wrong.size < sequences.length); round++) {
    await page.locator('.card .label').first().waitFor();
    const title = norm(await page.locator('.card .label').first().innerText());
    const item = seqByTitle.get(title);
    if (!item) { check(`mechanism: unknown item shown "${title}"`, false); break; }
    const mode = !seqDone.right.has(item.id) ? 'right' : !seqDone.wrong.has(item.id) ? 'wrong' : null;
    if (!mode) { await nextRound(page, 'Next pathway', item); continue; }
    const pool = page.locator('section.stack-sm > button.option');
    const shown = await pool.allInnerTexts();
    check(`${item.id}: pool shows all ${item.steps.length} steps`, shown.length === item.steps.length && item.steps.every((s) => shown.map(norm).includes(norm(s))));
    if (mode === 'right') check(`${item.id}: pool is not presented already in order`, shown.map(norm).join('|') !== item.steps.map(norm).join('|'));
    const checkBtn = page.getByRole('button', { name: 'Check', exact: true });
    check(`${item.id}: Check disabled before all steps placed`, await checkBtn.isDisabled());
    const order = mode === 'right' ? item.steps : [...item.steps].reverse();
    // place first step, undo it by tapping the slot, then place everything
    const poolBtn = (t) => page.locator('section.stack-sm').getByRole('button', { name: t, exact: true });
    await poolBtn(order[0]).tap();
    await page.getByRole('button', { name: `Remove ${order[0]}` }).tap();
    check(`${item.id}: tapping a placed step removes it`, (await pool.count()) === item.steps.length);
    for (const step of order) await poolBtn(step).tap();
    check(`${item.id}: Check enabled when all placed`, !(await checkBtn.isDisabled()));
    const before = await itemsAnswered();
    await checkBtn.tap();
    const verdict = page.locator('.verdict');
    await verdict.waitFor();
    const vText = await verdict.innerText();
    const expl = await page.locator('section.card p').last().innerText();
    const score = Number((await page.locator('.num, [class*="score"]').first().innerText().catch(() => '')).replace(/\D/g, '')) || null;
    if (mode === 'right') {
      check(`${item.id}: correct order accepted`, /Pathway rebuilt/.test(vText));
      check(`${item.id}: correct order marks every slot correct`, (await page.locator('ol .is-wrong').count()) === 0 && (await page.locator('ol .is-correct').count()) === item.steps.length);
      check(`${item.id}: score card shows all steps in place`, (await page.getByText(`${item.steps.length} of ${item.steps.length} steps in place`).count()) === 1);
    } else {
      const wrongSlots = item.steps.filter((s, i) => s !== order[i]).length;
      check(`${item.id}: wrong order rejected`, /Not quite/.test(vText));
      check(`${item.id}: each misplaced slot marked and corrected`, (await page.locator('ol .is-wrong').count()) === wrongSlots && (await page.getByText('Correct:').count()) === wrongSlots, `${wrongSlots} misplaced`);
    }
    check(`${item.id} (${mode}): explanation displayed`, norm(expl) === norm(item.explanation));
    check(`${item.id} (${mode}): answer recorded in progress`, (await itemsAnswered()) !== before && (await itemsAnswered()).includes(item.id));
    if (mode === 'right') {
      await page.getByRole('button', { name: /Teach me this/ }).tap();
      const sheet = page.getByRole('dialog');
      check(`${item.id}: Teach me this opens`, await sheet.isVisible().catch(() => false));
      await page.keyboard.press('Escape');
      const closeBtn = page.getByRole('button', { name: /Close|Got it|Done/ }).last();
      if (await sheet.isVisible().catch(() => false)) await closeBtn.tap().catch(() => {});
      if (shots && seqDone.right.size === 0) await page.screenshot({ path: `${shots}/mech-correct.png`, fullPage: true });
    } else if (shots && seqDone.wrong.size === 0) await page.screenshot({ path: `${shots}/mech-wrong.png`, fullPage: true });
    seqDone[mode].add(item.id);
    void score;
    await nextRound(page, 'Next pathway', item);
  }
  check(`mechanism: every sequence played correctly (${seqDone.right.size}/${sequences.length})`, seqDone.right.size === sequences.length);
  check(`mechanism: every sequence played incorrectly (${seqDone.wrong.size}/${sequences.length})`, seqDone.wrong.size === sequences.length);

  // ---------------- Match Up ----------------
  const matchByTitle = new Map(matches.map((m) => [norm(m.title), m]));
  const matchDone = new Set();
  await page.goto(URL + 'play/match-up');
  for (let round = 0; round < maxRounds(matches.length) && matchDone.size < matches.length; round++) {
    await page.locator('.card .label').first().waitFor();
    const title = norm(await page.locator('.card .label').first().innerText());
    const item = matchByTitle.get(title);
    if (!item) { check(`match: unknown item shown "${title}"`, false); break; }
    if (matchDone.has(item.id)) { await nextRound(page, 'Next set', item); continue; }
    const leftCol = page.locator('.grid-2 > div').nth(0);
    const rightCol = page.locator('.grid-2 > div').nth(1);
    const rightBtn = (t) => rightCol.getByRole('button', { name: t, exact: true });
    const leftBtn = (t) => leftCol.getByRole('button', { name: t, exact: true });
    check(`${item.id}: shows ${item.pairs.length} terms on each side`, (await leftCol.locator('button').count()) === item.pairs.length && (await rightCol.locator('button').count()) === item.pairs.length);
    // right first → prompt
    await rightBtn(item.pairs[0].right).tap();
    check(`${item.id}: tapping a right term first asks for a left term`, (await page.getByText('Pick a term on the left first').count()) === 1);
    // wrong pair
    await leftBtn(item.pairs[0].left).tap();
    await rightBtn(item.pairs[1].right).tap();
    check(`${item.id}: wrong pair rejected`, (await page.getByText('Not a match').count()) === 1 && !(await leftBtn(item.pairs[0].left).isDisabled()));
    check(`${item.id}: mistake counted`, /1 ✗/.test(await page.locator('.small.strong.num').first().innerText()));
    // correct pairs
    for (const p of item.pairs) {
      await leftBtn(p.left).tap();
      await rightBtn(p.right).tap();
      check(`${item.id}: "${p.left}" ↔ "${p.right}" accepted and locked`, await leftBtn(p.left).isDisabled());
    }
    const expl = await page.locator('section.card p').last().innerText();
    check(`${item.id}: completion shows the explanation`, norm(expl) === norm(item.explanation));
    check(`${item.id}: score reflects one mistake`, (await page.getByText('1 wrong attempt').count()) === 1);
    check(`${item.id}: answer recorded in progress`, (await itemsAnswered()).includes(item.id));
    if (shots && matchDone.size === 0) await page.screenshot({ path: `${shots}/match-complete.png`, fullPage: true });
    matchDone.add(item.id);
    await nextRound(page, 'Next set', item);
  }
  check(`match: every set played (${matchDone.size}/${matches.length})`, matchDone.size === matches.length);
  check('no console or page errors', errors.length === 0, errors.slice(0, 3).join(' | '));
  await browser.close();
}

async function nextRound(page, label) {
  const btn = page.getByRole('button', { name: label });
  if (await btn.count()) { await btn.tap(); return; }
  // unfinished board (item already covered): reload to draw another round
  await page.reload();
}

main()
  .catch((e) => check('play-check crashed', false, String(e)))
  .finally(() => {
    server.kill();
    for (const r of results) console.log(r.line);
    const failed = results.filter((r) => !r.ok).length;
    console.log(`\n${results.length - failed} passed, ${failed} failed`);
    process.exit(failed ? 1 : 0);
  });
