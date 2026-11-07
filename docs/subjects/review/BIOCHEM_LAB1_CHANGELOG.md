# Biochemistry — Laboratory techniques batch 1 change log

All content is **draft, AI-drafted, not medically reviewed**. A verified source is not medical approval, and passing automated or browser checks shows only technical validity, not medical accuracy or editorial approval. Review packet: `BIOCHEM_LAB1_REVIEW.md`. Source: `src/content/biochem/lab1.ts` (`labBatch1`).

## Revision 1 (owner review of batch 1)

These are targeted corrections. Concept IDs, item IDs and curriculum mappings are unchanged, and all content stays **draft**. Sections 1–7 below describe the original batch; this section takes precedence where they differ.

### LR1.1 Genetic-test choice: no single universal first-line test

The items now test **what each technique detects**, not which test comes "first".
- **`lab-test-choice:mcq1`** was rewritten. It used to ask which test is "done first" (answer: microarray). It now shows a microarray that found a 1.5-Mb deletion missed by a karyotype, and asks why (genome-wide copy-number measurement at higher resolution). It is an interpretation item, difficulty 3.
- **`lab-sequencing:mcq2`** now asks which test examines many candidate genes together (a panel). It no longer asks for "the most efficient first molecular test". The explanation notes that the choice of first test depends on the clinical picture and current guidelines.
- **Facts, quick summary, detailed text and associations** no longer call chromosomal microarray "the first-tier test". A new fact states that guidelines allow more than one initial approach: phenotype-targeted testing when a disorder is suspected, otherwise a genome-wide approach. Exome or genome sequencing is recommended as a first- or second-tier test alongside microarray (ACMG 2021, PMID 34211152; AAP 2025 clinical report, PMID 40545261).
- **True/false and Match Up:** the microarray TF now reads "detects deletions and duplications too small to see on a karyotype". The Match Up pair now reads "Small deletions or duplications genome-wide → Chromosomal microarray".

### LR1.2 CD4 count below 200/µL (`lab-flow:mcq3`)

This is now described as **advanced immunosuppression with a substantial opportunistic infection risk**, with immunity impaired rather than entirely absent. The answer, explanation, steps, fact, quick summary and detailed text were corrected. The OpenStax phrase "can no longer mount a useful adaptive immune response" was removed. PMID 8099477 is added: survival and AIDS-defining events are inversely related to the CD4 count.

### LR1.3 Lyme disease (`lab-blotting:mcq4`)

The vignette is now **suspected Lyme arthritis**: a warm, swollen knee for 6 weeks, months after exposure. That is late disease, when serology performs well. The explanation and the facts now state:
- classic erythema migrans is treated on clinical grounds without serology (PMID 26593258);
- standard two-tier testing confirms with a Western blot, and modified two-tier testing confirms with a second enzyme immunoassay (PMID 32632699);
- Lyme arthritis is documented by IgG ELISA confirmed by Western blot (PMID 34417687).

### LR1.4 ELISA vs contemporary HIV screening

The **classic indirect ELISA** (antigen on the plate detects patient antibody) is now kept separate from **fourth-generation HIV antigen/antibody screening**, which also detects p24.
- The algorithm is stated in full: a reactive screen → HIV-1/HIV-2 antibody differentiation immunoassay → HIV-1 nucleic acid test if that is nonreactive or indeterminate. The Western blot is not part of it (PMID 24342476, 24342485, 30007138).
- Updated: `lab-elisa` facts, quick summary and detailed text; `lab-elisa:mcq1`, whose stem is now "In a classic indirect ELISA…"; `lab-elisa:mcq2`'s explanation and its TF correction; and the `lab-blotting` HIV fact, which now includes nucleic acid testing.

### LR1.5 Specialised terminology → supplementary

`lab-blotting:mcq2` (Southwestern blot), the SOUTHWESTERN clue and the DIDEOXY clue are now SUPPLEMENTARY, each with a reason. These were already supplementary: the CHROMOGEN clue, the flow-histogram "area under the peak" TF and the CRISPR TF. Southern, Northern, Western, PCR, ELISA, electrophoresis, FISH and flow cytometry stay CORE.

### LR1.6 Verification status of inferred principles

Each statement below has the status recorded in the packet. Pending facts are marked with `factPending` and **block medical approval** until a reviewer confirms them.

| Statement | Status | Support |
|---|---|---|
| Copy-number microarrays cannot detect balanced translocations | **Verified directly** (it was inferred in the original batch) | PMID 34237280: "inability to detect balanced SVs" with CNV microarrays |
| Reading a two-marker dot plot: each dot is one cell placed by its fluorescence for both markers, and the quadrants are marker combinations | **Pending.** Partly supported: OpenStax states that two markers can be labelled at once, and PMID 9462230 shows quadrant dot-plot analysis in use. The reading rule itself is not stated verbatim in a source read. | OpenStax Microbiology 20.5; PMID 9462230 |
| cDNA lacks introns because it is copied from mature mRNA | **Pending.** Inferred: OpenStax 17.1 states that cDNA is made from mRNA by reverse transcriptase; intron removal is taught in Molecular batch 2 (splicing) but is not stated in the cited lab source. | OpenStax Biology 17.1 |
| Guidelines allow more than one initial genome-wide approach (exome/genome sequencing alongside chromosomal microarray) | **Pending.** Partly verified: the ACMG 2021 abstract recommends exome/genome sequencing as a first- or second-tier test. The AAP 2025 abstract confirms phenotype-driven testing with a hypothesis-free approach otherwise, but does not name the tests. The owner's statement that the AAP report includes exome/genome sequencing and microarray in the initial evaluation was not confirmed from the abstract. | PMID 34211152, 40545261 |

The packet now shows **45 facts verified and 3 awaiting direct confirmation**. It previously showed 46 and 0, which overstated verification.

### LR1.7 Visual learning items

`docs/VISUAL_LEARNING_PLAN.md` sets out the plan; nothing is built yet:
- **Figures:** original SVG generated from structured data, so there is no licensing risk. The types are gel, Western blot, flow histogram and dot plot, karyogram and FISH.
- **Validation:** automated rules check that each figure is internally consistent; medical review decides clinical realism.
- **Accessibility:** each figure carries alt text and a text equivalent.
- **Items to convert first:** a list of specific existing items.
- **Rollout:** a phased plan that stops for review after the first figure types.

It needs owner approval because it changes the schema and the UI.

### LR1.8 Counts after revision 1

| Measure | Value |
|---|---|
| Items: CORE / SUPPLEMENTARY / SPECIALIST / UNREVIEWED | **61 / 6 / 0 / 0** |
| Items: RECOGNITION / MECHANISM / APPLICATION | **41 / 8 / 18** |
| Facts verified / awaiting confirmation | 45 / 3 |
| Coverage | 12 objectives covered in full, 2 core covered with parts deferred (unchanged) |

Relevance and difficulty remain separate. For example, the CD4/CD8 dot-plot and balanced-translocation items are CORE at difficulty 3.

## 1. Scope and approach

- Follows the approved checklist (`src/content/curriculum/biochem/laboratory.ts`): all **14 objectives** in 5 subtopics.
- Step 1 depth means four things for each test:
  - what it detects;
  - the principle that makes it work;
  - how to read the result (a gel, a blot, a flow histogram or dot plot, a FISH signal);
  - which test answers a given clinical question.
- Instrument detail, reagent chemistry and research variants were left out on purpose. Examples: pulsed-field gels, far-Western blots, FACS sorting, specific array platforms and PCR variants beyond RT-PCR and qPCR.
- **Sources:**
  - OpenStax Microbiology 12.2, 20.2, 20.4 and 20.5;
  - OpenStax Biology 2e 13.2, 17.1 and 17.3;
  - MedlinePlus Genetics: genetic test types, Huntington disease, fragile X, Duchenne/Becker, 22q11.2 deletion, PNH, Down syndrome, CRISPR;
  - MedlinePlus Medical Tests: HIV screening, CD4 count;
  - PubMed review abstracts for the clinical uses (§5). Every citation label was checked against its PubMed record.

## 2. Content

**11 concepts, 14 objectives, 67 playable items:** 30 MCQs, 19 true/false, 12 clues, 2 Mechanism Lab sequences, 2 Match Up sets, 2 Mystery Patient cases.

| Concept | Objectives (`bc-…`) | Focus |
|---|---|---|
| `lab-pcr` | `pcr-sequencing.pcr`, `.rt-pcr` | Denature–anneal–extend, Taq; RT-PCR (mRNA → cDNA); qPCR and HIV viral load; BCR-ABL1 by RT-PCR |
| `lab-gel` | `pcr-sequencing.interpret` (and `.pcr`) | Smaller runs farther; deletion vs repeat expansion (Huntington CAG, fragile X CGG); lost restriction site; pathogen PCR with controls |
| `lab-sequencing` | `pcr-sequencing.sequencing` | Sanger chain termination (ddNTP lacks 3′-OH); NGS; targeted, single-gene, panel, exome/genome |
| `lab-blotting` | `blotting.choose`, `.western` | Southern / Northern / Western / Southwestern; dystrophin Western (Duchenne vs Becker); Lyme two-tier; HIV algorithm |
| `lab-elisa` | `elisa-flow.elisa` | Direct, indirect (patient antibodies), sandwich (quantify antigen); sensitive screen, confirm positives |
| `lab-flow` | `elisa-flow.flow` | How flow works; histograms and CD4/CD8 dot plots; CD4 count thresholds; PNH (CD55/CD59 negative) |
| `lab-microarray` | `elisa-flow.microarray` | Thousands of hybridizations; expression profiling; SNP and copy-number arrays |
| `lab-karyotype` | `karyotype-fish.karyotype` | Colchicine metaphase arrest, banding; aneuploidy, large deletions, translocations; translocation Down syndrome |
| `lab-fish` | `karyotype-fish.fish` | Probe hybridization; 22q11.2 microdeletion; BCR-ABL1 fusion; interphase/paraffin |
| `lab-test-choice` | `karyotype-fish.choose` | CMA first-tier for DD/ID; karyotype for balanced rearrangements; targeted test for a known variant |
| `lab-cloning-editing` | `gene-editing.cloning`, `.crispr` | cDNA lacks introns, plasmid vectors, recombinant insulin; CRISPR-Cas9 |

**Games:**
- Mechanism Lab: `seq:pcr-gel` (PCR cycle through to reading the gel), `seq:western-blot`.
- Match Up: `match:lab-targets` (what each test detects), `match:which-test` (clinical question → test).
- Mystery Patient: `case:pnh-flow` (dark morning urine → CD55/CD59-negative cells), `case:dmd-western` (Gowers sign → absent dystrophin).

No Connections puzzle was written. Laboratory tests overlap too much to make a single-solution board without contrived groups, and they are already well served by Match Up.

## 3. Counts

| Measure | Value |
|---|---|
| Items: CORE / SUPPLEMENTARY / SPECIALIST / UNREVIEWED | **64 / 3 / 0 / 0** |
| Items: RECOGNITION / MECHANISM / APPLICATION | **41 / 8 / 18** |
| Objectives: CORE / SUPPLEMENTARY | 13 / 1 (`bc-gene-editing.crispr`) |
| Facts verified / awaiting confirmation | 46 / 0 |

- **SUPPLEMENTARY:**
  - the CRISPR-Cas9 true/false;
  - the flow-histogram "area under the peak" true/false (technical detail);
  - the CHROMOGEN clue (terminology).
- **Depth and difficulty:**
  - Application items are interpretation (13, including both cases) or prediction (5) at difficulty 3. They ask the student to read a result or pick the test that answers a question, not to recall obscure detail.
  - Classic presentations (Down syndrome karyotype, epilepsy gene panel, known-variant carrier test) are identification at difficulty 2.
  - Relevance and difficulty are labelled separately.

**All curriculum-linked content after this batch:** 453 CORE / 29 SUPPLEMENTARY / 20 SPECIALIST / 0 UNREVIEWED; 316 recognition / 96 mechanism / 90 application.

## 4. Coverage

**Laboratory techniques: 12 of 14 objectives covered in full and 2 core covered with parts deferred** (previously all 14 missing):

| Objective | Deferred component |
|---|---|
| `bc-elisa-flow.flow` | Leukemia and lymphoma immunophenotyping (taught with Hematology/Oncology) |
| `bc-gene-editing.crispr` | RNA interference, knock-in/knock-out and transgenic models, Cre-lox (supplementary research tools) |

## 5. Accuracy notes for the reviewer

- **HIV testing.** The current algorithm follows a reactive antigen/antibody (fourth-generation) screen with an **HIV-1/HIV-2 differentiation assay**, which replaced the HIV-1 Western blot (PMID 24342485, 30007138). The batch teaches this explicitly, including a true/false item, so students do not learn the outdated "ELISA then Western blot" sequence for HIV.
- **Lyme disease.** Two-tier testing is a sensitive ELISA, then a confirmatory second tier, classically a Western blot. Some algorithms now use a second immunoassay instead (PMID 24365431, 32509603, 30921086).
- **Duchenne vs Becker.** Absent dystrophin on muscle Western blot means Duchenne; an abnormal or reduced band means Becker (MedlinePlus; PMID 2693617, 8795844). Clinical features are from PMID 41439068.
- **PNH.** Flow cytometry of red cells and neutrophils shows loss of GPI-anchored CD55/CD59 and low FLAER binding (PMID 30573047, 17285629).
- **Chromosomal microarray** is first-tier for unexplained developmental delay or intellectual disability, with the karyotype as an adjunct (PMID 23245550, 30903683, 29631977).
- **Two statements derived from the cited principle rather than quoted from a source.** Please confirm them:
  1. A balanced translocation is missed by microarray because the array measures copy number. It is used in `lab-test-choice:mcq2` and the concept's misconception.
  2. How to read a two-marker dot plot: each dot is one cell, and the quadrants are combinations of markers. OpenStax states only that two markers can be labelled at once. It is used in the new `lab-flow` dot-plot item.
- **cDNA lacks introns.** This follows from cDNA being a reverse-transcriptase copy of mature mRNA, and RNA splicing was taught in Molecular batch 2.

## 6. Checks

- `npm run check` (typecheck, lint, all tests including `validateContent`, answer-length and distractor-quality checks, and depth coverage for every linked objective): pass.
- `npm run build`: pass.
- Browser play-check: see §7.
- No device testing, deployment or medical review was done.

## 7. Browser validation

`npm run check:games` (headless Chromium, iPhone 13 emulation, reviewer-preview production build with `VITE_ALLOW_UNREVIEWED=true`, served by `vite preview`): **586 passed, 0 failed**. All 18 Mechanism Lab sequences were played both correctly and incorrectly, and all 19 Match Up sets were played. That includes `seq:pcr-gel`, `seq:western-blot`, `match:lab-targets` and `match:which-test` (64 checks on these four alone). No server was left running afterwards.

Fixes found while running it:
- A plain production build hides all draft content, so the check now builds a reviewer preview.
- The check now starts Vite directly, so stopping it does not leave a server behind.
- It refuses a busy port.

These are technical checks of the games. They are not evidence of medical accuracy.
