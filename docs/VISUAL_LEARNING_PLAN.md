# Visual learning items — plan and implementation status

Status: **approved by the owner. Phases 1 and 3 are built, and the phase 2 renderers (flow histograms, flow dot plots, FISH, karyograms) are built and attached to the existing Laboratory and Genetics items. The planned new interphase BCR-ABL1 fusion item and the "Read the result" activity are next and not yet built.** Every figure is attached to draft content and is **not medically reviewed**. The validation tests show that a figure is internally consistent, not that it is clinically realistic.

**Previews for review:** `docs/subjects/review/figures/previews/` holds every figure rendered at phone width (358 px figure area) in light and dark theme, as PNG at 2× density, with an `index.html` gallery showing the alt text, text description and validation result. Regenerate with `npx vite-node scripts/figure-previews.ts -- docs/subjects/review/figures/previews`. The review packets also embed each figure's SVG.

## Implementation status

| Part | Status |
|---|---|
| Schema: optional `figure` on MCQs and Mystery Patient cases (`src/content/figures.ts`, `schema.ts`) | Built |
| Gel renderer (log-scale band position, ladder, labelled lanes, optional intensity) | Built |
| Western blot renderer (kDa scale, target label, intensity) | Built. **Absent bands (revised):** the lane is left **empty**, exactly as a real negative looks. The expected size is marked by an arrowhead and size label **outside** the membrane. The earlier dashed outline inside the lane was removed because it could teach students that a negative shows as a faint outline. The dystrophin caption now states that equal protein was loaded per lane. |
| Pedigree renderer (squares and circles, affected, carrier, proband arrow, consanguinity double line, notes) | Built. **Revised:** notes move to a second line so neighbouring labels never collide, and the proband arrow is drawn on the side away from the couple's descent line. |
| Flow cytometry histogram | **Built (new).** Log-fluorescence axis (10⁰–10⁵); each population is a curve whose **area** is proportional to its percentage; labelled peaks; cell type stated. |
| Flow cytometry dot plot | **Built (new).** Two log axes, dashed quadrant gates and quadrant percentages. 600 dots are placed deterministically (seeded) and clamped inside their quadrant, so the picture matches the stated percentages exactly and renders identically every time. |
| FISH | **Built (new).** Interphase nucleus (red, green and yellow fusion signals) or metaphase homologue pair of a named chromosome with each probe's signals, plus a legend with signal counts, on a dark fluorescence background. |
| Karyogram | **Built (new).** Schematic pairs in standard size order (rows 1–5, 6–12 + X, 13–18, 19–22 + Y) with centromere positions. Supports trisomy, monosomy, terminal deletion and Robertsonian derivatives (labelled, e.g. der(14;21)), and prints the ISCN karyotype. There is no G-band pattern; the figure is schematic. |
| Validation (`src/content/__tests__/figures.test.ts`, 11 tests) | Built. **Gels and blots:** ladder sorted, bands in range, labelled lanes, absent bands explicit; an absent band draws nothing in the lane. **Pedigrees:** structure, plus no contradiction of the declared mode. **Flow:** percentages sum to 100 and peaks stay on the axis; dot count matches the percentages. **FISH:** whole-number signals 0–4, one colour per probe, a fusion needs both probes, and metaphase allows at most one signal per homologue. **Karyogram:** the drawn chromosome count must equal the count in the ISCN string, the sex must match, Robertsonian fusions need acrocentric chromosomes, a deletion cannot exceed its arm, and **deletions below 5 Mb are rejected** (see below). |
| Accessibility | Built. SVG has `role="img"`, `<title>` and `<desc>`; labels are escaped; each figure has alt text and an expandable plain-language description generated from the same data (quadrant percentages, signal counts and chromosome changes included). |
| Responsive and theme-aware | Built. SVG scales to the card width; colours use the app's CSS tokens with fallbacks. FISH uses a fixed dark panel with light text in both themes, as fluorescence images do. Checked by rendering at phone width in light and dark mode (no device testing). |
| Review packets | Built. Each figure is written to `docs/subjects/review/figures/*.svg` and embedded beside its item. |
| Items with figures (20) | **Gels:** `lab-gel:mcq1`–`mcq3`. **Western blot:** `lab-blotting:mcq3`. **Flow:** `lab-flow:mcq1` (PNH CD59 histogram), `lab-flow:mcq4` (CD4/CD8 dot plot). **FISH:** `lab-fish:mcq1` (22q11.2, one red signal), `gen-deletion-syndromes:mcq1` (7q11.23 ELN). **Karyograms:** `lab-karyotype:mcq3` (46,XY,der(14;21)(q10;q10),+21), `gen-robertsonian:mcq1` (45,XX,der(14;21)(q10;q10)), `gen-deletion-syndromes:mcq2` (46,XX,del(5)(p14)). **Pedigrees:** `gen-ad:mcq1`, `gen-ar:mcq1`, `gen-xlr:mcq2`, `gen-xld:mcq1`, `gen-mito:mcq1`, `case:xlr-family`, `gen-repeats:mcq3`, `gen-two-hit:mcq1`, `gen-mito-disorders:mcq1`. Item IDs are unchanged. |
| "Read the result" activity | **Not built: the next stage.** Planned to reuse the MCQ engine on figure-bearing items so that progress and mastery work unchanged. |

### Resolution rule (owner instruction, now enforced)

A figure must show only what the test can detect. **Microscopic (sub-band) deletions are never drawn on a routine karyogram.** Conventional karyotyping only identifies imbalances larger than about 5–10 Mb (Gijsbers AC et al., Eur J Med Genet 2010, PMID 20542150), so the karyogram validator rejects any deletion under 5 Mb with the message "below routine karyotype resolution; show it with FISH or a microarray". The 22q11.2 and 7q11.23 deletions are shown with FISH (one missing probe signal beside two control signals). The cri-du-chat 5p deletion is drawn on a karyogram only because large terminal 5p deletions are visible; its size there (20 Mb) is illustrative and the caption says so.

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

The implemented types are in `src/content/figures.ts` and differ in detail from the sketch below (for example `ladder` for both gels and blots, and `percent` per flow population).

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
