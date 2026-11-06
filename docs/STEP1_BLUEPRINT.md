# Step 1 blueprint

**Verified 6 Nov 2026** against the official sources, read directly once usmle.org was allowed in the session's network settings:
- Step 1 Content Outline and Specifications page: https://www.usmle.org/exam-resources/step-1-materials/step-1-content-outline-and-specifications
- USMLE Content Outline PDF, 2026 edition (42 pages): https://www.usmle.org/sites/default/files/2022-01/USMLE_Content_Outline_0.pdf
- Content outline update infographic (2024): https://www.usmle.org/sites/default/files/2024-01/NBME_USMLE_Infographic_final.pdf

These documents are © FSMB and NBME. We record ranges and section headings only and reproduce no outline text. Percentages are "subject to change at any time" per USMLE, so re-check before launch and at least yearly.

## What the official documents say

**Purpose.** Step 1 measures basic science knowledge. Most questions require interpreting graphs and tables, identifying normal and pathological specimens, and applying basic-science principles; some test recall. Normal processes are usually tested in the context of a disease. The outline is "not intended as a curriculum or study guide".

**2024 change.** The "General Principles of Foundational Science" category was removed and its content redistributed into organ systems: biochemistry and molecular biology, cell biology, genetics, tissue response to disease, pharmacodynamics and pharmacokinetics, microbial biology, and normal structure and function. A new **Human Development** category covers normal age-related findings and care of the well patient.

**Emphasis.** The outline notes recent emphasis on geriatric medicine, **nutrition**, prescription drug use, and the health needs of veterans and military families, people needing gender-affirming care, and patients with disabilities.

### System ranges (Step 1)
| System | Range |
| --- | --- |
| Human Development | 1–3% |
| Blood & Lymphoreticular/Immune Systems | 9–13% |
| Behavioral Health & Nervous Systems/Special Senses | 10–14% |
| Musculoskeletal, Skin & Subcutaneous Tissue | 8–12% |
| Cardiovascular System | 7–11% |
| Respiratory & Renal/Urinary Systems | 11–15% |
| Gastrointestinal System | 6–10% |
| Reproductive & Endocrine Systems | 12–16% |
| Multisystem Processes & Disorders | 8–12% |
| Biostatistics & Epidemiology/Population Health | 4–6% |
| Social Sciences: Communication and Interpersonal Skills | 6–9% |

### Discipline ranges (items are multi-classified; totals exceed 100%)
Pathology 45–55 · Physiology 30–40 · **Nutrition 15–20** · Gross Anatomy & Embryology 10–20 · Microbiology 10–20 · Pharmacology 10–20 · Behavioral Sciences 10–15 · Biochemistry 5–15 · Histology & Cell Biology 5–15 · Immunology 5–15 · Genetics 5–10.

### Competency ranges
Applying foundational science concepts 60–70 · Patient care: diagnosis (history, examination, diagnosis) 20–25 · Communication and interpersonal skills 6–9 · Practice-based learning and improvement 4–6.

### Exam format (reported; confirm in the Bulletin of Information)
Up to 280 single-best-answer items in one day. From 14 May 2026, new delivery software: 14 blocks of up to 20 items, 30 minutes each (previously 7 × 40 × 60 minutes). Pass/fail scoring.

## How the app uses this
- `src/content/taxonomy.ts` holds the official ranges (`BLUEPRINT_VERIFIED = true`, with source and date).
- **Every Step 1 concept is mapped to an outline area and section** (`src/content/step1/outline.ts`). `listed: true` means the outline names the topic or its example group; `false` means foundational science the outline distributes across systems. `validateContent` fails the build if a concept is unmapped, and a test requires at least 75% of concepts to be outline-named topics.
- Lessons show the mapping ("USMLE outline: Area › Section"); Content & sources shows exam share against our concept count per system.

## Coverage of the current 40 concepts (6 Nov 2026)
| System | Step 1 share | Our concepts |
| --- | --- | --- |
| Human development | 1–3% | 0 |
| Blood, lymphoreticular & immune | 9–13% | 6 (15%) |
| Behavioural health & nervous system | 10–14% | **1 (3%)** |
| Musculoskeletal, skin & subcutaneous | 8–12% | **1 (3%)** |
| Cardiovascular | 7–11% | 6 (15%) |
| Respiratory & renal | 11–15% | 9 (23%) |
| Gastrointestinal | 6–10% | **2 (5%)** |
| Reproductive & endocrine | 12–16% | 4 (10%) |
| Multisystem | 8–12% | 8 (20%) |
| Biostatistics & epidemiology | 4–6% | 3 (8%) |
| Social sciences: communication | 6–9% | **0** |

By discipline (any tag): pathology 8 (20% vs 45–55%), physiology 8, nutrition **1 (vs 15–20%)**, anatomy/embryology **0 (vs 10–20%)**, behavioural sciences **0 (vs 10–15%)**, histology/cell biology 1, microbiology 4, immunology 4. Over-represented: biochemistry 10, genetics 11, pharmacology 12.

**Mapping result:** 31 of 40 concepts are topics the outline names; 9 are foundational (class IC drugs, digoxin, Frank–Starling, cardiac action potentials, RAAS, PFK-1 regulation, X-linked inheritance, β-lactam mechanism, metformin). None fell outside the outline.

## Content priorities that follow
1. **Behavioural health & nervous system** (10–14%): neuroanatomy lesions, neurotransmitters, psychiatric disorders and their drugs, sleep, substance use.
2. **Musculoskeletal, skin & subcutaneous** (8–12%): brachial plexus and nerve injuries, autoimmune and connective-tissue disease, bone and skin pathology.
3. **Reproductive & endocrine** (12–16%): pregnancy physiology, reproductive pathology, pituitary, adrenal, parathyroid, diabetes pathology.
4. **Social sciences: communication, ethics, patient safety** (6–9%) and **behavioural sciences**: currently none.
5. **Nutrition** (15–20%, flagged by USMLE as an area of emphasis): vitamins, minerals, malnutrition, obesity, nutrition across the lifespan.
6. **Gastrointestinal** (6–10%) and **Human development** (1–3%).
7. **Anatomy and embryology** across systems (10–20%), and more pathology tagging within every system (45–55%).

## Still not done
The student-experience research on Reddit (r/step1 and similar) from the original brief has not been carried out.
