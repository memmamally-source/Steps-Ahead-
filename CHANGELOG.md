# Changelog

## 0.2.0 — 2026-11-05 (UX redesign)

No new features; every screen redesigned for simplicity, speed and polish.

- Design system v2: softer surfaces and shadows, larger radii, segmented controls, progress ring, bottom sheets, a pinned bottom action bar.
- Games run in focus mode (no tab bar); the primary action is always on screen. Feedback is compact, with mechanism and detail one tap away.
- Home leads with one "next activity" button, daily tiles, a stat strip and a short "Up next" list.
- Onboarding is two short steps. Arcade is a two-column grid. Subjects use a Disciplines / Systems toggle. Mistakes open in a sheet. Profile is a settings list. The dashboard leads with this week's time.
- The full-width preview banner is replaced by a "Preview" pill that explains itself on tap.
- Second pass: Mystery Patient results lead with the explanation, the dashboard has an empty state, and Content & sources is condensed.

## 0.1.0 — 2026-11-05 (unreleased)

First development build.

- New standalone project: Vite + React + TypeScript, red/white/black design system with light and dark themes.
- Onboarding with package choice (Step 1 available; Step 2 CK and Step 3 marked coming soon) and optional preferences.
- Home, Arcade (Relax / Learn / Challenge), Subjects (discipline, organ system, topic, concept), Review, Profile, Dashboard, Content & sources.
- Six playable games: Medical Crossword (original generator), Medical Connections, Mystery Patient, Medical Survival, Fact or Fiction, Spaced Review.
- Learning engine: shared idempotent event model, active study-time tracking, concept mastery, four-level weak-area analysis, FSRS-4.5 concept scheduling, personalised plans.
- My Mistakes library, answer feedback on every question, Teach Me This lessons, content error reports (on device).
- Content: 40 AI-drafted concepts with linked items, automated content QA, publication gate (drafts hidden in production builds).
- Source register, draft Firestore rules, CI and a manual GitHub Pages workflow.
