# Visual learning items — plan and implementation status

Status: **approved by the owner; phase 1 and phase 3 (pedigrees) built, phase 2 not started.** Every figure is attached to draft content and is **not medically reviewed**. The validation tests show that a figure is internally consistent, not that it is clinically realistic.

## Implementation status

| Part | Status |
|---|---|
| Schema: optional `figure` on MCQs and Mystery Patient cases (`src/content/figures.ts`, `schema.ts`) | Built |
| Gel renderer (log-scale band position, ladder, labelled lanes, optional intensity) | Built |
| Western blot renderer (kDa scale, target label, absent band drawn as a dashed outline, never omitted) | Built |
| Pedigree renderer (squares and circles, affected, carrier, proband arrow, consanguinity double line, notes) | Built (moved ahead of phase 2 at the owner's request) |
| Validation (`src/content/__tests__/figures.test.ts`, 6 tests) | Built. Gels and blots: ladder sorted, bands within range, labelled lanes, absent bands explicit. Pedigrees: unique IDs; each couple is one male and one female in the same generation; children sit in the next generation with one set of parents; no male shown as an X-linked carrier; and no explicit contradiction of the declared mode (AD, AR, XR, XD, MT), with tested noncarriers marked so the check never relies on assumptions. |
| Accessibility | Built. SVG has `role="img"`, `<title>` and `<desc>`; all labels are escaped; each figure carries alt text and an expandable plain-language text description generated from the same data. |
| Responsive and theme-aware | Built. SVG scales to the card width; colours use the app's CSS tokens with fallbacks, checked in light and dark mode on a phone-width screenshot (no device testing). |
| Review packets | Built. Each figure is written to `docs/subjects/review/figures/*.svg` and embedded beside its item with its validation result and text description. |
| Items with figures | 3 gels (`lab-gel:mcq1`–`mcq3`), 1 Western blot (`lab-blotting:mcq3`), 8 pedigrees (`gen-ad:mcq1`, `gen-ar:mcq1`, `gen-xlr:mcq2`, `gen-xld:mcq1`, `gen-mito:mcq1`, `case:xlr-family`, `gen-repeats:mcq3`, `gen-two-hit:mcq1`). Item IDs unchanged. |
| Flow histogram and dot plot | Not built (phase 2) |
| Karyogram | Not built (phase 2). It will follow the resolution rule below. |
| FISH | Not built (phase 2) |
| "Read the result" game mode | Not built |

### Resolution rule (owner instruction)

A figure must show only what the test can detect. **Microscopic (sub-band) deletions are never drawn as visible on a routine karyogram.** The 22q11.2 deletion, the 15q11–q13 deletions of Prader–Willi and Angelman syndromes and similar microdeletions will be shown with a **FISH** figure (a missing probe signal beside a control signal) or a **microarray** figure (a copy-number dip), and a karyogram shown for such a patient will appear normal. The karyogram validator will reject a deletion below routine banding resolution.

## Goal

For laboratory techniques (and, later, pedigrees and histology-style diagrams), students should read **the picture itself**:
- a gel;
- a Western blot;
- a flow cytometry histogram or dot plot;
- a karyogram;
- a FISH nucleus.

Reading only a written description of the picture is not enough. Step 1 tests this skill directly.

## Approach: figures generated from data, not drawn by hand

Each figure is **original SVG generated at runtime from a small data object** stored with the item. For example, a gel is described by its lanes and fragment sizes, not by a picture file. This gives four things:
- **No licensing risk.** Nothing is copied from textbooks, review books or the web. The renderer and every figure are original.
- **Scientific validity is testable.** The rules can be checked automatically. For example, band position follows fragment size on a logarithmic scale, and a deletion lane must run below the normal lane.
- **Accessibility.** The same data produces alt text and a text equivalent for screen readers and for students who prefer text.
- **It matches the app.** Figures follow light and dark themes, phone widths and the design tokens.

Raster photographs (real gels, real karyotypes) are out of scope unless a specific openly licensed image is approved. Each such image would need its licence and source recorded in `CONTENT_SOURCES.md`.

## Schema

Add an optional `figure` to MCQs and cases:

```ts
type Figure =
  | { kind: 'gel'; ladder: number[]; lanes: { label: string; bands: { bp: number; intensity?: 1 | 2 | 3 }[] }[] }
  | { kind: 'western'; ladderKDa: number[]; lanes: { label: string; bands: { kDa: number; intensity: 0 | 1 | 2 | 3 }[] }[] }
  | { kind: 'flow-histogram'; marker: string; populations: { center: number; spread: number; count: number }[] }
  | { kind: 'flow-dot'; xMarker: string; yMarker: string; quadrants: { ll: number; lr: number; ul: number; ur: number } }
  | { kind: 'karyogram'; sex: 'XX' | 'XY'; changes: ({ type: 'trisomy'; chr: string } | { type: 'deletion'; chr: string; arm: 'p' | 'q'; region: string } | { type: 'translocation'; a: string; b: string })[] }
  | { kind: 'fish'; probes: { name: string; color: 'red' | 'green'; signals: number }[]; fusionSignals?: number; phase: 'interphase' | 'metaphase' };
```

Every figure also carries `alt` (a one-sentence description) and `caption`. The renderer refuses a figure that has no alt text.

## Validation rules (unit tests, run in `npm test`)

| Figure | Rules |
|---|---|
| Gel | Ladder sizes are sorted; band y-position is monotonic in log(bp); each band is within the ladder range; lanes have labels |
| Western | Same rules on a kDa scale; an "absent" band has intensity 0 (drawn as no band, never omitted silently) |
| Flow histogram | Populations stay inside the axis range; peak area is proportional to `count` (so the "area reflects number of cells" principle is true in the picture) |
| Flow dot plot | Quadrant counts add up to the stated total; quadrant labels come from the marker names (e.g. upper-left = CD4⁺CD8⁻) |
| Karyogram | The chromosome count implied by `changes` matches the stated karyotype (e.g. 47,XX,+21); a deletion region exists on that arm and is large enough to be visible by routine banding (microdeletions are rejected and must use FISH or microarray) |
| FISH | Signal counts match the item's answer (e.g. one 22q11.2 signal plus two control signals for a deletion); a fusion requires both probes |

The tests prove the figure is **internally consistent**. Medical review still decides whether it is **clinically realistic**, and each figure is shown in the review packet next to its item.

## First items to convert or add (Laboratory batch)

1. **Gel:**
   - Huntington CAG expansion (`lab-gel:mcq1`);
   - lost restriction site (`lab-gel:mcq2`);
   - pathogen PCR with positive and no-template controls (`lab-gel:mcq3`).
2. **Western blot:** dystrophin in Duchenne vs Becker (`lab-blotting:mcq3`, `case:dmd-western`).
3. **Flow:**
   - PNH histogram with a CD59-negative population (`lab-flow:mcq1`, `case:pnh-flow`);
   - CD4/CD8 dot plot (`lab-flow:mcq4`).
4. **Karyogram:** trisomy 21 and translocation Down syndrome (`lab-karyotype:mcq2`, `mcq3`).
5. **FISH:**
   - 22q11.2 deletion (`lab-fish:mcq1`);
   - an interphase BCR-ABL1 fusion signal (a new item).

Existing item IDs keep their text, and the figure is added beside it. Then a new game mode, **"Read the result"**, shows a figure with a short question. It reuses the MCQ engine, so progress and mastery work unchanged.

## Phases

1. Schema field, renderer for gel and Western blot, validation tests, review-packet output (figure rendered to SVG in the packet), and three converted items. Then stop for review of the visual style and accuracy.
2. Flow histogram and dot plot, FISH, karyogram, and the remaining Laboratory items.
3. Pedigrees for Genetics. These use the same approach: generated from family data, with tests confirming the pattern is consistent with the stated inheritance.

## Not planned

- Photographs or scans from commercial resources, or any copyrighted figure.
- Interactive "build the gel" simulations. These may come later, but they are not needed to test interpretation.
