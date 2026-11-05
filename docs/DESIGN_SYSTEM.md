# Design system (v2, Stage 2 redesign)

Direction: about 70% premium consumer app, 30% serious medical dashboard. See `UX_AUDIT.md` for the reasoning.

Tokens are CSS custom properties in `src/theme/global.css`. Light is the default; dark applies with `prefers-color-scheme: dark` unless overridden in Profile (`data-theme` on `<html>`).

## Colour
| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--red` | #D71920 | #D71920 | Primary buttons, active nav, progress, brand, highlights (white text on it is 5.2:1) |
| `--red-deep` | #A91018 | — | Hover/pressed |
| `--red-ink` | #C4161D | #FF4D52 | Red text (AA on each surface) |
| `--bg` / `--surface` | #F7F7F7 / #FFFFFF | #0B0B0B / #161616 | Page / cards |
| `--text` / `--muted` | #111111 / #737373 | #FFFFFF / #A3A3A3 | Text |
| `--border` | #E8E8E8 | #2A2A2A | Hairlines |
| `--ok` | #1A7F37 | #3FB950 | Correct (always with ✓ and the word "Correct") |
| `--bad` | #A91018 | #FF6B6F | Incorrect (always with ✗ and "Not quite"/"Incorrect"), on a tinted background |
| `--select-bg` | #111111 | #FFFFFF | Selected chips, tiles and options: **selection is black/white, never red**, so red never means "wrong" |

## Type
Inter Variable (OFL, self-hosted). Headings 800 weight with tight tracking; body 16 px, line height 1.5; tabular numbers for stats; uppercase eyebrows at 0.72 rem with wide tracking.

## Shape, depth and spacing
Radii 8 / 12 / 18 px (cards 18, buttons 12–14, hero 22). Soft two-layer shadows on light surfaces instead of borders; hairline rings in dark mode. Page background #F4F4F5 (light) / #0A0A0A (dark). Spacing on a 4 px grid; sections 28 px apart.

## Layout
Each screen has one primary action. Tabs open with a large title (no eyebrows). Games run in focus mode: no tab bar, a slim game bar (close, title, status, pause), a progress line, and a fixed bottom action bar for the main button. Secondary choices live in segmented controls, list rows, disclosures and bottom sheets.

Mobile first: top brand bar plus a five-tab bottom bar (Home, Arcade, Subjects, Review, Profile) with safe-area padding. At ≥960 px, a 240 px sidebar replaces the tabs and adds Dashboard and Content & sources. Content max width 1080 px.

## Components
Buttons (primary red, dark, soft, ghost, text; `btn-lg` 54 px for primary actions), segmented control, chips, badges, status dots, cards and flat cards, the dark hero (radial red glow), stat strip, progress ring and bars, list rows, bottom sheet with grabber (focus moves in, Escape closes, focus returns), action bar, Preview pill, answer options (A–E keys turn into ✓/✗), verdict, takeaway block, disclosure (`details.more`), crossword grid, Connections tiles (tiers: black, red, grey, outlined), activity heatmap (red sequential ramp).

## Motion and accessibility
Short rise/fade transitions only. Everything respects `prefers-reduced-motion` and Profile → Reduce motion. Visible red focus ring; skip link; ARIA roles on tabs, radios, dialogs and progress bars; keyboard play in every game (A–E/1–5, T/F, crossword arrows/Tab/Space). Charts have text equivalents (hidden table, aria labels).
