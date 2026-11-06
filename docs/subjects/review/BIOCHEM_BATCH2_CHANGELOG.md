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

## Content added (122 items)

| Format | Count | Notes |
|---|---|---|
| MCQ | 45 | 22 at application depth (interpretation 7, prediction 7, comparison 5, multistep 3), each listing its inferential steps |
| True/false | 28 | recall |
| Crossword clues | 32 | recall |
| **Mechanism Lab** sequences | 5 | lagging strand, miRNA silencing, translation cycle, collagen synthesis, Z allele → emphysema |
| **Match Up** sets | 6 | RNA polymerases, replication proteins, central-dogma poisons, antibiotic ribosomal sites, epigenetic silencing, post-translational modifications |
| Curated Connections puzzle | 1 | `cx:gene-expression-blockers` (“Jamming the central dogma”) |
| Connections bank categories | 3 | translation toxins, topoisomerase inhibitors, imprinting/silencing |
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
