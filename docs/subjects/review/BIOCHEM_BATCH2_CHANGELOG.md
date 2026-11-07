# Biochemistry batch 2 — change log

Scope: the remaining **26 Molecular biochemistry objectives** in approved curriculum order. No Cellular Biochemistry, no other subdivision and no other subject. All content is **draft, AI-drafted, not medically reviewed**. All new items are appended with new ids; no existing id changed. Source: `src/content/biochem/molecular2.ts` (`molecularBatch2`). Review packet: `BIOCHEM_BATCH2_REVIEW.md`.

With batches 1 and 2, all **51 of 51** Molecular biochemistry objectives have linked content that assesses every required depth (computed, not judged).

## Objectives and concepts

| Concept | Objectives |
|---|---|
| `mol-chromatin` | `bc-chromatin-structure.nucleosome`, `.epigenetic` |
| `mol-epigenetic-disease` | `bc-chromatin-structure.epigenetic-disease` |
| `mol-otc-vs-orotic` | `bc-nucleotide-synthesis.otc-vs-orotic` |
| `mol-xo-inhibitors` | `bc-purine-salvage.xo-inhibitors` |
| `mol-replication` | `bc-replication.enzymes`, `.strands` |
| `mol-topoisomerase-drugs` | `bc-replication.topo-drugs` |
| `mol-telomerase` | `bc-replication.telomerase` |
| `mol-reading-frame` | `bc-mutation-types.reading-frame` |
| `mol-transcription` | `bc-transcription.polymerases`, `.regulation` |
| `mol-transcription-inhibitors` | `bc-transcription.inhibitors` |
| `mol-rna-processing` | `bc-rna-processing.processing`, `.mirna` |
| `mol-snrnp-autoantibodies` | `bc-rna-processing.snrnp-antibodies` |
| `mol-splice-disease` | `bc-rna-processing.splice-disease` |
| `mol-translation` | `bc-translation.trna`, `.steps` |
| `mol-ribosome-antibiotics` | `bc-translation.ribosomes` |
| `mol-translation-toxins` | `bc-translation.toxins` |
| `mol-protein-folding` | `bc-protein-processing.ptm`, `.folding` |
| `mol-a1at` | `bc-protein-processing.a1at` |
| `mol-collagen-synthesis` | `bc-collagen.synthesis` |
| `mol-osteogenesis-imperfecta` | `bc-collagen.oi` |

Each concept has original facts with per-fact citations, a mechanism, a misconception, a ~20-second quick explanation, a detailed explanation (≥2 paragraphs) and a takeaway.

## Content added (119 playable items + 3 category-bank entries)

_Corrected in revision 2: the original heading said 122 items, which wrongly counted the 3 Connections bank entries as playable content._

| Format | Count | Notes |
|---|---|---|
| MCQ | 45 | 22 at application depth (interpretation 7, prediction 7, comparison 5, multistep 3), each listing its inferential steps |
| True/false | 28 | recall |
| Crossword clues | 32 | recall |
| **Mechanism Lab** sequences | 5 | lagging strand, miRNA silencing, translation cycle, collagen synthesis, Z allele → emphysema |
| **Match Up** sets | 6 | RNA polymerases, replication proteins, central-dogma poisons, antibiotic ribosomal sites, epigenetic silencing, post-translational modifications |
| Curated Connections puzzle | 1 | `cx:gene-expression-blockers` (“Jamming the central dogma”) |
| Connections bank categories (not playable alone; builder input only) | 3 | translation toxins, topoisomerase inhibitors, imprinting/silencing |
| Mystery Patient cases | 2 | α1-antitrypsin deficiency (“Short of breath at 38”), Amanita poisoning (“The foragers’ supper”) |

Application items were written as real reasoning rather than classic-picture recognition. Examples:
- choose between OTC deficiency and UMP synthase deficiency in two infants from ammonia and the blood count;
- predict the Duchenne or Becker phenotype from deletion length;
- read a methylation result with normal copy number (maternal uniparental disomy);
- predict cytopenias from allopurinol with azathioprine;
- place two toxins by whether they modify a protein or 28S rRNA;
- tell MCTD from SLE by autoantibody pattern;
- compare null and glycine-substitution OI alleles;
- weigh OI against inflicted injury.

Classic-picture items are labeled identification or recall and given difficulty 1–3.

## Connections validation
- `cx:gene-expression-blockers` has **exactly one solution** against the global catalog (89 categories, including every bank, curated and decoy category).
- The board deliberately contains plausible groupings that cannot complete an alternative board: antibiotics (6 tiles), cancer chemotherapy drugs (5), toxins of any origin (5), plant-derived compounds (5) and made by bacteria (7). To avoid a genuine second solution, only one antibiotic group appears; a fourth bacterial RNA polymerase inhibitor was rejected because “microbial natural products” would have allowed an alternative grouping.
- The catalog was extended for the new tiles: antibiotics (rifampin, fluoroquinolones, dactinomycin), Shiga toxin, toxins of any origin, chemotherapy, plant-derived compounds, fluoroquinolones, chromosome 15 imprinting disorders, and Angelman/Prader–Willi as neurologic disorders. The daily builder still builds more than 140 of 150 seeded boards, all with unique solutions.

## Sources
- **Read in full:** OpenStax Biology 2e 13.2, 14.4, 14.5, 15.3, 15.4, 15.5 and 16.3; OpenStax Microbiology 14.3; MedlinePlus Genetics (Prader–Willi, Angelman, fragile X, OTC deficiency, Duchenne/Becker, CFTR, α1-antitrypsin deficiency, SERPINA1, osteogenesis imperfecta).
- **Published abstracts read** (PubMed via NCBI E-utilities): miRNA biogenesis (31752361, 25062737), polymerase proofreading (35850061), topoisomerase inhibitors (LiverTox 31643693; fluoroquinolones 27449972), telomerase (22875809, 18482052), snRNA polymerases (1827444), α-amanitin (39684738, 34208167), actinomycin D (23144800), EF-2 toxins (1599611, 6267047, 37484018), ricin/Shiga (22006183), anti-Sm (21874759, 28281463), MCTD/anti-U1 RNP (38597289, 29796907), allopurinol–azathioprine (25040676), febuxostat (19075968), reading-frame rule (41391908, 33238405), TATA box β-thalassemia (2987224, 10840054), SF3B1 (31473630), ERAD/CFTR (28159894, 15126691, 30056836), α1AT liver disease (30266154, 25311024, 6189389), P-bodies (37407370), siRNA (35680378), synthetase editing (18241793, 18850722), CCA (15477393), heterochromatin (20634313, 16261261), fragile X methylation (29456084), OTC orotic aciduria (1234064), OI genetics (12362985, 17078022) and OI vs inflicted injury (26566591, 26492946).
- Evidence status: **98 facts verified, 4 awaiting direct confirmation**. No batch 2 fact depends on an existence-only citation.

## Awaiting direct confirmation (blocks approval until a reviewer confirms)

_Resolved in revision 2: all four were verified against the references supplied by the owner (see below). None remains pending._
1. `mol-otc-vs-orotic`: in OTC deficiency carbamoyl phosphate spills into pyrimidine synthesis. The abstract shows pyrimidine pathway stimulation with orotic acid tracking ammonia; the routing is pathway logic.
2. `mol-xo-inhibitors`: xanthine oxidase inactivates 6-MP, so inhibition shunts drug toward thioguanine nucleotides. The source shows raised 6-TGN with myelotoxicity; the enzyme route is not stated in the abstract.
3. `mol-translation-toxins`: EF-2 drives ribosomal translocation. The sources call EF-2 essential for elongation without naming translocation.
4. `mol-collagen-synthesis`: glycosylation occurs on hydroxylysine, so hydroxylation precedes glycosylation. This is also the order in the collagen Mechanism Lab item.

## Other points for the reviewer
- **RNA polymerase products.** OpenStax lists “small nuclear RNAs” under pol III. The content follows the primary source: U1, U2, U4 and U5 are made by pol II, and U6 by pol III. Please confirm this wording is acceptable for Step 1.
- **Reading-frame rule.** Taught as the main predictor, with the registry finding that about 13% of patients are exceptions.
- **Anti-Sm sensitivity** (~26% at 99% specificity) comes from one cohort, and anti-U1 RNP prevalence in SLE (13–30%) from cohort reports; both are presented as approximate.
- **P-bodies source** is a germline-focused review whose opening defines P-bodies generally. The histone acetylation review is plant-focused but states the general principle, which OpenStax 16.3 also supports.
- **Splice-site β-thalassemia citation** (PMID 32439726) is a splice-switching study used for the aberrant splicing → α/β imbalance mechanism. It was carried over from batch 1.
- **OI vs inflicted injury.** The item asks the learner to evaluate for OI while safeguarding continues in parallel. It does not suggest that abuse is excluded.
- **OpenStax 16.6 and 16.7** (post-transcriptional and post-translational regulation) returned only the app shell when fetched, so PubMed abstracts were used for miRNA, siRNA, PTMs and proteasome claims.
- **Difficulty labels and Mechanism Lab and Match Up scoring** are design choices, not yet calibrated against learner data.

## Preservation
No batch 1 or legacy content was changed by batch 2 apart from the extended Connections catalog. Curriculum structure, objective ids, review statuses and all existing item ids are unchanged.

---

# Biochemistry batch 2 — revision 2 (owner corrections)

Targeted corrections only. Concept ids, item ids, curriculum links and review statuses are unchanged. All content remains **draft, AI-drafted, not medically reviewed**. Verifying a source is not medical approval, and computed curriculum coverage is not clinical validation. **0 new items, 0 removed. 16 records were edited directly** (15 items plus the curated Connections puzzle redesigned under the same id). A further 13 items changed only because they inherit their concept’s revised quick, mechanism or takeaway text: 29 of 122 records differ in total (computed by diffing every item against the first batch 2 version). 8 concepts were revised.

## 1. Ambiguous question corrected
- `mol-epigenetic-disease:mcq1`: a maternal-only methylation pattern with normal copy number does not by itself establish maternal uniparental disomy, because an imprinting defect gives the same picture. The stem now adds parental SNP genotyping showing no paternal chromosome 15 alleles. A new distractor, “imprinting defect on a paternal chromosome 15”, explains why it is excluded. The steps and explanation were rewritten. The concept facts now mention imprinting defects (MedlinePlus), and the detailed text explains that methylation testing shows *that* the paternal pattern is missing, not *why*.

## 2. Osteogenesis imperfecta qualified
- The facts, mechanism, misconception, quick text, takeaway and `mol-osteogenesis-imperfecta:mcq1` now say that quantitative (null-allele) defects **generally** cause milder disease and dominant-negative structural defects **generally** cause more severe disease, and that exceptions occur.
- New fact: the genotype–phenotype relationship is incompletely understood, and only about one-third of α1(I) glycine substitutions are lethal. Sources: PMID 11001814 (Forlino & Marini 2000), added, and PMID 17078022.
- mcq1 now asks which family is *more likely* to have severe disease.

## 3. OTC deficiency: no absolute “normal blood count”
- The mechanism, quick text, detailed text and the mcq1 steps now say that OTC deficiency does not characteristically cause the megaloblastic anemia of hereditary orotic aciduria, and that other causes of anemia can coexist. The vignette’s normal hemoglobin remains as case data.

## 4. Pending mechanisms verified (all four now have direct sources)

| Claim | Source read | Exact supporting statement |
|---|---|---|
| OTC: orotic acid from diverted carbamoyl phosphate | Ibrahim et al., *Children* 2023, PMC10453542 / PMID 37628367. Full text via NCBI E-utilities, because the PMC website was blocked by the network policy | “The urine excretion of orotic acid results from excess carbamoylphosphate, which diverts into the pyrimidine pathway”; also high glutamine and low citrulline |
| Xanthine oxidase and thiopurines | ULORIC (febuxostat) prescribing information, Takeda, DailyMed set id 54de10ef-fe5f-4930-b91d-6bbb04c664bd (Dec 2025): sections 4, 7, 12.3 | Azathioprine and mercaptopurine are metabolized by XO; febuxostat increased 6-mercaptopurine exposure, which may cause toxicity; the combination is contraindicated |
| EF-2 translocation | NCBI Gene 1938 (EEF2), RefSeq summary | EF-2 promotes GTP-dependent translocation of the nascent chain from the A site to the P site |
| Hydroxylysine glycosylation | PMID 22708567 (Yamauchi & Sricholpech, *Essays Biochem* 2012) | Specific lysines are hydroxylated; then specific hydroxylysines in the helical domain are glycosylated |

- Wording now follows the sources. For example, “XO inactivates 6-MP” became “XO metabolizes 6-MP; inhibition raises 6-MP exposure”. The allopurinol combination is described as needing specialist dose adjustment or avoidance, and the febuxostat combination as contraindicated.
- DailyMed and NCBI Gene were added to the source register. Evidence status for batch 2 is now **104 verified, 0 awaiting confirmation**.
- With owner approval, `www.accessdata.fda.gov`, `dailymed.nlm.nih.gov` and `pmc.ncbi.nlm.nih.gov` were added to the research environment’s network allowlist.

## 5. Review of the whole packet: other overstatements and ambiguities corrected
- **α1-antitrypsin deficiency:** “lower-lobe emphysema” was overstated. A 2025 quantitative CT study (PMID 41241741) found severe-deficiency emphysema basal-predominant but most marked in the middle lobe and lingula. Wording is now “panlobular, usually basal/lower-zone predominant”, with that study and PMID 41370566 added as a new fact. The crossword clue and case imaging text were adjusted. An unsourced misconception about augmentation therapy was replaced with a sourced one: liver and lung disease do not always occur together.
- **Sm antigen:** “core proteins of the U2–U6 snRNPs” wrongly implied that U1 lacks the Sm core. It now reads “core proteins of spliceosomal snRNPs”, adding that some Sm epitopes cross-react with U1 RNP proteins. The unsourced protein list was removed.
- `mol-rna-processing:mcq3` tested the same splice-donor point as `mol-splice-disease:mcq2`. It was rewritten in the same slot as a question on 5′-cap function (recognition by translation initiation factors, OpenStax 15.4).
- `mol-splice-disease:mcq1`: the unclear “AG…GU-like recognition site” is now “a new splice site”.
- `mol-telomerase:mcq2`: the stem now states that the cancer cells keep a stable telomere length, so the telomerase answer follows from the data.
- `mol-reading-frame:mcq1`: the explanation notes that about 1 in 8 patients are exceptions to the reading-frame rule.
- `mol-ribosome-antibiotics:mcq2`: the bactericidal mechanism is now presented as the standard explanation, not the whole story.
- `mol-collagen-synthesis:mcq1`: the ambiguous “impaired first” is now “impaired”.
- `case:amanita-poisoning`: distractor (d) wrongly paired acetylcholinesterase inhibition with muscarinic mushrooms; it now reads “stimulation of muscarinic receptors by a mushroom toxin”.
- `match:rna-polymerases`: the title “Who makes which RNA?” included telomerase, which makes DNA. It is now “Polymerases and their products”.

## 6. Gameplay validated in the browser
- `npm run check:games` (`scripts/play-check-games.mjs`) plays **every** Mechanism Lab sequence (5) and Match Up set (6) on an iPhone-sized touch viewport. It runs each sequence once in the correct order and once in a wrong order, and each match set with one deliberate mistake.
- What it checks:
  - Check stays disabled until every step is placed, and tapping a placed step removes it;
  - the correct order scores 100 and marks every slot;
  - a wrong order marks each misplaced slot and shows the correct step;
  - Match Up asks for a left term first, rejects and counts wrong pairs, and locks in correct pairs;
  - completion shows the explanation and score;
  - the answer is saved to progress;
  - “Teach me this” opens;
  - the page raises no console errors.
- **Result: 174 checks passed, 0 failed.** The run found and fixed one app bug: the teach sheet keyed references by source id, giving duplicate React keys for concepts with several PubMed citations. References now also link to the exact cited URL.

## 7. Connections re-audited for alternative groupings
- **Method:** a new check (`defensiblePartitions`) judges broad categories as well as specific ones.
  - A group is defensible when some category covers exactly its four tiles on the board.
  - A second solution means three such groups whose leftover four tiles share any category, because players solve three groups and the last falls out.
  - Each curated puzzle has a written audit (`src/content/connectionsAudit.ts`) of the alternatives considered: broad themes, sources, inheritance, uses, toxicity and other lookalike groupings.
- **Results:**
  - **`cx:gene-expression-blockers` redesigned.** The old board had two translation-inhibitor groups (30S antibiotics and eukaryotic toxins) plus many bacterial products, so it was prone to guessing. Under the defensibility rule it still had only one solution, so this was a quality fix, not a proven second solution. The 30S group was replaced by a pre-mRNA processing group (cap, poly-A tail, spliceosome, AAUAAA signal), and the puzzle’s objective links now name `bc-rna-processing.processing` instead of `bc-translation.ribosomes`. `bc-translation.ribosomes` remains covered by its MCQs, true/false item and Match Up set.
  - **Batch 1 puzzles (see the batch 1 change log):** two had genuine second solutions, now fixed. A test confirms that the check finds them in the old boards.
  - All four curated puzzles now have exactly one solution under both the strict catalog check and the manual audit. The collagen puzzle keeps two deliberate red herrings (“Inherited syndromes”, “Skeletal tissues”) that cannot complete a second board.
- **Limits:** this is still not proof that every possible grouping has been excluded. Reviewers should add any grouping they find to the audit file. Boards generated by the daily builder are checked against the catalog automatically, but are not manually audited.

## 8. Playable items vs category-bank entries
- Connections category-bank entries cannot be played alone. They are now excluded from item counts and from coverage evidence (`isPlayable` in the coverage audit).
- Batch 2 totals: **119 playable items** (45 MCQ, 28 true/false, 32 crossword clues, 5 Mechanism Lab, 6 Match Up, 1 complete Connections puzzle, 2 Mystery Patient cases) **plus 3 bank entries**.
- Coverage is unchanged: all 51 Molecular objectives are still covered without bank entries. The Biochemistry coverage report now counts 326 playable items (previously 339, which included 13 bank entries).
