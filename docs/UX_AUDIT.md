# UX audit and redesign (Stage 2, 5 Nov 2026)

Goal set by the owner: no new features. Make Steps Ahead simpler, faster and more polished: about 70% premium consumer app, 30% serious medical dashboard. Every screen was audited at 390×844, the first viewport only, in light mode (and dark for Home and feedback).

## Findings before the redesign
| Area | Problem |
| --- | --- |
| Every screen | Brand bar + eyebrow + H1 + a four-line yellow preview banner used ~35% of the first viewport before any content. Eyebrows repeated the title ("Settings and study log / Profile"). |
| Games | The tab bar and the banner stayed visible while playing. After an answer the feedback was a tall pink panel; **Next** sat below the fold. Pause/Back/score competed in the header. |
| Home | Three full-width daily rows, then stats and the plan below the fold. Two competing calls to action (hero button and plan "Start" buttons); the hero button text wrapped. |
| Onboarding | Step 2 asked five questions (date, stage, weak subjects, goal, style) with ~25 chips; **Start** was below the fold. |
| Arcade | One game per row with paragraph descriptions; only ~3 games visible; seven "In development" cards took as much space as real games. |
| Subjects | Two long stacked lists with three lines of meta per row; badges in every row. Subject pages offered four equal buttons. |
| Review | Each mistake was a ~350 px card with six buttons. |
| Profile | A long form; the external log form always open. |
| Dashboard | Eight stat tiles before the first chart. |

## Principles applied
1. **One primary action per screen, visible without scrolling.** In games and onboarding it is pinned in a bottom action bar.
2. **Focus mode for play.** No tab bar; a slim bar with close, title, status and pause; a progress line.
3. **Progressive disclosure.** Mechanism and detailed explanation sit one tap away under "Mechanism and detail". Mistake actions open in a sheet. Dashboard breakdowns are collapsible.
4. **Fewer simultaneous choices.** Segmented controls replace chip clouds; secondary options become list rows or sheets.
5. **Honest but quiet.** The unreviewed-content banner became a small "Preview" pill that explains itself on tap (Home, Arcade, lessons, game set-up screens).
6. **Academic credibility kept.** Tabular numbers, separate metrics with one-line definitions, status dots with a legend, references on lessons, the takeaway shown on every answer.

## Screen by screen (after)
- **Onboarding:** two steps. A package card then "Continue"; a goal picker (five large tiles) plus an optional exam date, then "Start playing". Stage, weak subjects and play style were removed from onboarding: nothing in the engine used them.
- **Home:** greeting, goal ring and one red button for the next activity, with its reason underneath. Three square daily tiles, a three-number stat strip with the focus area, and "Up next" (three items plus a session-length selector).
- **Arcade:** a segmented control (All / Relax / Learn / Challenge) and a two-column tile grid. In-development games are collapsed into one row.
- **Subjects:** a Disciplines / Organ systems toggle; one-line rows with coverage bar, accuracy and status dot. Subject page: one "Practise …" button plus small chips for other games; topics; a collapsible discipline breakdown.
- **Review:** a dark hero with "Start review" when items are due, else "All caught up". Mistakes are To fix / Corrected tabs with two-line rows; tapping opens a sheet with Retry (primary), Teach me, Review tomorrow, Related game, Favourite and Report.
- **Profile:** a grouped settings list; daily goal, external study log, plans and delete each open in a sheet.
- **Dashboard ("Progress"):** this week's time plus a 14-day chart first, then four metrics (accuracy, retention, coverage, improvement), focus areas, mastery by discipline / system / topic, then collapsible time breakdown and games.
- **Games:** set-up screens use a dark hero and two segmented options. In play, the question comes first. Feedback shows the verdict, the answer, why, why yours was wrong, and the takeaway; mechanism and detail sit behind a disclosure; "Teach me this" stays visible. Results show a centred score, a compact answer list and Done / Play again. Mystery Patient keeps the clues on screen, with "Next clue" and "Answer" pinned below (options open in a sheet).

## Verification
The same Playwright audit was re-run after the redesign (screenshots outside the repo), plus the end-to-end suite (26 checks: every game to completion, feedback, Teach Me This, mistakes and retry, study time, deep links, desktop, no horizontal overflow, no console errors). Not tested on a physical phone.
