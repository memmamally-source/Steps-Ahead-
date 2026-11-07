# Visual learning items — plan (for owner approval)

Status: **plan only, nothing built yet.** It needs a schema change, a new rendering component and a validation layer. It is written up for approval before implementation.

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
| Karyogram | The chromosome count implied by `changes` matches the stated karyotype (e.g. 47,XX,+21); a deletion region exists on that arm |
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
