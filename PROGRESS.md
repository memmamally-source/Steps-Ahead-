# Steps Ahead — progress

> Living record so any session can resume without losing decisions. Update at the end of every stage.

**Product:** gamified USMLE learning companion. Step 1 first; Step 2 CK and Step 3 later in the same codebase.
**Name:** "Steps Ahead" (owner's choice, Nov 2026). Change in `src/config/brand.ts`, `index.html`, `public/manifest.webmanifest`.
**Live preview:** https://memmamally-source.github.io/Steps-Ahead-/ (manual deploys; reviewer preview).
**Repository:** `memmamally-source/Steps-Ahead-` (created by the owner on 5 Nov 2026). The code first lived temporarily on branch `claude/steps-ahead-medical-arcade-a8in03` of the Oursome repo; that branch can be deleted.

## Knowledge tables (6 Nov 2026, in progress)

Owner's direction: strictly Step 1, comprehensive, every fact double- and triple-checked. Approach: each fact is stored once in a verified table (`src/content/kb/`), and questions are generated from it with one best answer proven by code (`generate.ts`; tests in `kb/__tests__`). Biostatistics items are generated from numbers and every answer is recomputed independently in tests.

Built: bacteria (40 organisms → 178 items), viruses (34 → 213), glomerular diseases (13 → 93), biostatistics (93 calculation items: sensitivity, specificity, PPV, NPV, LR+, ARR, RRR, NNT, RR, OR, expected false positives, normal distribution), fungi and parasites (35 organisms → 73 items), plus 13 group concepts mapped to the outline.

Exam conventions applied to all medical content: US conventional units as in the official USMLE lab table (mEq/L, mg/dL, /mm³, mm Hg; unlisted labs carry "N=" ranges like the official samples) and American spelling (genus names such as Haemophilus kept).

Checks found and fixed: ambiguous identification clues; hallmarks shared by two organisms (EF-2 toxins, Shiga toxin, neonatal meningitis, reactive arthritis, mecA, struvite stones and Klebsiella); near-equivalent biopsy findings (effacement, negative IF); a PSGN timing inconsistency; a duplicate statement; outdated taxonomy (rotavirus, RSV) and GBS screening weeks; biostatistics distractors that equalled the answer.

Library now: 53 concepts, 815 items (522 MCQ, 214 true/false, 55 clues, 19 Connections groups, 5 cases). All AI-drafted and unreviewed.

Not done: pharmacology table (a generation attempt was interrupted and must not be redone in the same form; pharmacology is covered for now by hand-written concepts) and the outline gaps (neuro/psych, MSK/skin, reproductive/endocrine, social sciences, nutrition, GI, anatomy/embryology).

## Blueprint alignment (6 Nov 2026)

usmle.org was allowed in a new personal environment ("Steps Ahead (USMLE research)", approved by the owner), so the official Step 1 page and the 2026 Content Outline were read directly. Findings: General Principles was retired and redistributed into systems; Human Development is new (1–3%); Nutrition is 15–20%. Taxonomy now uses the official ranges (`BLUEPRINT_VERIFIED = true`), the `general` system is gone, and every concept is mapped to an outline area and section (31/40 named topics, 9 foundational, 0 outside the outline). The build fails if a concept is unmapped. Coverage gaps and content priorities are in `docs/STEP1_BLUEPRINT.md`: behavioural health and nervous system, MSK and skin, reproductive and endocrine, social sciences, nutrition, GI, anatomy.

## Stage 2: UX redesign (5 Nov 2026)

The owner asked for no new features; instead, a redesign for simplicity, speed and polish (about 70% consumer app, 30% medical dashboard). The engine and game logic are unchanged; every screen and the design system were rebuilt. Audit, principles and per-screen changes are in `docs/UX_AUDIT.md`. Verified by a 390 px screenshot audit and the 26-check end-to-end run; not on a physical phone. Onboarding no longer asks for stage, weak subjects or play style (unused by the engine; the profile fields remain).

## Status (5 Nov 2026)

| Phase | State |
| --- | --- |
| 1. Foundation (structure, design system, schema, events, blueprint research, source register) | ✅ (blueprint verified against usmle.org on 6 Nov 2026) |
| 1. New GitHub repo | ❌ needs the owner (see below) |
| 1. Firebase project | ❌ not created; rules drafted in `firebase/firestore.rules`, config read from `VITE_FIREBASE_*` |
| 2. Core app: onboarding, five tabs, dashboard, study-time tracking, local progress | ✅ (guest/on-device only) |
| 3. First four games: Crossword, Connections, Mystery Patient, Survival | ✅ playable, plus Fact or Fiction and Spaced Review |
| 4. Content pipeline | Partly done: schema, automated QA, publication gate. Missing: admin/review console, generation tooling, import/export |
| 5. Learning system: mistakes, Teach Me This, mastery, weak areas, FSRS, plans, dashboard | ✅ first version |
| 6. Remaining games | Designed in `docs/GAME_DESIGNS.md`; not built |
| 7. Social and premium | Not started; `leaderboardOptIn` stored; `BILLING_ENABLED = false` |
| 8. Release preparation | Not started |

## How it was verified

- `npm run check`: typecheck, ESLint (React Compiler rules), 54 unit tests covering content QA, FSRS, mastery, weak-area analysis, plans, study-time rules, the progress reducer (idempotency, mistakes, streaks), crossword generation (grid validation over many seeds), Connections fairness, Survival, Mystery scoring, review item selection.
- Playwright end-to-end run against a reviewer-preview production build served like GitHub Pages (base path, 404.html fallback), at 390×844 and 1280×860, light and dark: onboarding, every playable game to completion, wrong-answer feedback, Teach Me This, mistakes library and retry, dashboard, nested deep-link reload, external study log, planned games not clickable, active study time counted (and not while the tab is hidden), no horizontal scroll on phone pages, and no console errors. Script kept outside the repo.
- **Not done:** real-device testing, accessibility audit with a screen reader, medical review of any content.

## Key decisions

- **Web app first (Vite + React SPA)** for GitHub Pages; the same code can later be wrapped for the stores (Capacitor) or ported.
- **On-device first.** Zustand persisted to localStorage. Every write is a `LearningEvent` through `applyEvent` (pure, idempotent by event id), the same path a Firestore sync will replay.
- **Publication gate.** `ContentRepo` shows only `published` content in production builds. `VITE_ALLOW_UNREVIEWED=true` builds a labelled reviewer preview. All 40 concepts are `draft` / `ai-drafted`.
- **Concept-level spaced repetition** (FSRS-4.5 default weights). Correct answers before the due date don't advance the schedule; misses always count. Review asks a different item, and a different format where possible.
- **Mastery ≠ accuracy.** Beta-posterior per concept, weighted by difficulty, with a 45-day half-life, and a minimum of 3 attempts before any judgement. Statuses: not studied, insufficient information, needs revision, developing, improving, strong.
- **Weak areas are reported at the most specific level** (topic or concept), not the organ system.
- **Study time:** 5 s ticks, 90 s idle cut-off, ≤10 s per tick, only while a study context is open and the page is visible; one tab holds a lock (tab id persists across reloads). External logs are stored separately; totals are combined only on display.
- **Daily puzzles** are seeded by `package:date:game`, so everyone gets the same one.
- **Feedback colours** (green ok / deep red bad) always carry an icon and a word; selection uses black/white, so the primary red never means "wrong".

## Publishing on GitHub Pages (owner action)

In the repo: Settings → Pages → Source "GitHub Actions", then run the "Deploy to GitHub Pages" workflow manually. The site will be at `https://memmamally-source.github.io/Steps-Ahead-/` (the base path comes from `actions/configure-pages`, so a rename or custom domain needs no code change). It deploys a labelled reviewer preview until the repository variable `ALLOW_UNREVIEWED=false` is set. GitHub Pages needs a public repo on the free plan.

## Firebase (owner action, free Spark plan is enough to start)

Create a new Firebase project (e.g. `steps-ahead-prod`, plus `steps-ahead-dev`), enable Authentication (Email link + Google) and Firestore. Add a Web app and put its config in repository variables `FIREBASE_API_KEY`, `FIREBASE_AUTH_DOMAIN`, `FIREBASE_PROJECT_ID`, `FIREBASE_APP_ID`. Never commit service-account keys. Then the next stage wires auth and sync.

## Next stage (suggested order)

1. Owner: create the Firebase project; review a first batch of concepts (the app's Content & sources page and `docs/MEDICAL_QA.md` describe the checklist).
2. Admin/review console (editor role, status transitions with audit trail, JSON export/import) so review happens in the app, not in code.
3. Firebase auth + event sync + emulator rules tests.
4. Pharmacology Match and Mechanism Lab (highest learning value of the remaining games), then Biostatistics Blitz.
5. Content expansion towards 150–200 reviewed concepts, prioritising blueprint-heavy areas (pathology, physiology).
6. Code-split games (bundle is 530 KB raw / 167 KB gzip), add a service worker for offline play.
