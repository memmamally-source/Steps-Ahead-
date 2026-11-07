# Biochemistry — Laboratory techniques batch 1 change log

All content is **draft, AI-drafted, not medically reviewed**. A verified source is not medical approval, and passing automated or browser checks shows only technical validity, not medical accuracy or editorial approval. Review packet: `BIOCHEM_LAB1_REVIEW.md`. Source: `src/content/biochem/lab1.ts` (`labBatch1`).

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

BROWSER_PLACEHOLDER
