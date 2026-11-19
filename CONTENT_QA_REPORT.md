# BasaNova Content QA Report

**Date:** 2026-11-19  
**Scope:** Structured A2, B1 and B2 lesson vocabulary/example fields; C1/C2 source structure; C2 assessments; Android CI artifact.

## Completed in this QA pass

- Reviewed all 50 Serbian and 50 English lessons in A2, B1 and B2.
- Found that all 400 A2 vocabulary entries per language had their example field set to the vocabulary term itself.
- Found that B1 and B2 vocabulary entries reused a small set of identical example sentences across many words.
- Replaced the A2/B1/B2 vocabulary example fields with complete sentence-level examples drawn from the corresponding lesson's own examples section. Where a sentence explicitly contained the vocabulary term, it was preferred; otherwise, contextual sentences from that lesson were assigned in rotation. The Sinhala translation and Sinhala-script reading were synchronized with the selected sentence.
- Total updated vocabulary entries: 2,400 (400 × 6 language/level files).
- Revalidated all six updated files: 50 unique lesson IDs per file, 400 vocabulary records per file, no missing word/meaning/reading/example/translation fields, no example that merely repeats the vocabulary term, and 2–4 distinct sentence examples per lesson.
- Reviewed C1 and C2 base/batch files: 50 lessons per language across the combined files; 400 vocabulary records per language; required vocabulary fields present in the inspected source batches. Batch content commonly reuses its four lesson example sentences across the eight vocabulary cards; this is deliberate contextual reinforcement and should still receive editorial review.
- Revalidated C2 assessments: 10 unique mixed-revision questions and 20 unique final-practice questions per language; answer indexes valid; vocabulary/listening readings present; App imports and UI/state integration present.
- Corrected curriculum status metadata for A1/A2/C1/C2 and added the A2 completion record.

## Important limitations

- This is automated structural and consistency QA, not a fluent-speaker linguistic review.
- Sinhala-script readings are approximate learner guides and need human review.
- The A2/B1/B2 vocabulary examples are lesson-context sentences. For terms not explicitly found in a lesson example, a sentence from the same lesson's examples section is used; this improves on isolated/repeated word echoes but does not guarantee a bespoke sentence for every individual term.
- Legacy A1 lesson files need a separate parser-aware structural review.
- Physical Android installation, UI behavior and device text-to-speech still need testing.

## Android build

GitHub Actions Android debug APK build run [44552002628](https://github.com/madu011/BasaNova/actions/runs/44552002628) completed successfully for commit `3b236e4a`. The workflow uploaded artifact `basanova-android-debug-apk` (about 41 MB; artifact expiry shown by GitHub as 2026-12-03). The build success does not mean a physical-device installation test has been completed.

## Next work

1. Run the same content checks on A1 and on all remaining C1/C2 batches and assessments.
2. Review the lesson-context examples for term-specific relevance and improve any weak matches.
3. Obtain fluent-speaker review of Serbian and English naturalness and Sinhala translations/readings.
4. Download/install the APK on Android and test navigation, audio, scoring, and offline/online behavior.


## 2026-11-19 follow-up — B1 integration and semantic QA
- Additional repairs: B1 lessons 21–30 in both language tracks now have 8 distinct, vocabulary-relevant examples per lesson, matching Sinhala translations and sentence-reading fields (160 vocabulary entries total).
- Fixed the B1 integration export contract: App.js expects named exports for both B1 lesson arrays. Serbian and English B1 modules now export `SERBIAN_B1_LESSONS` and `ENGLISH_B1_LESSONS`, while retaining default exports.
- Reviewed all local named imports in App.js against the corresponding modules' declared named exports; no other missing export was found among the inspected imports.
- This pass is source-level QA only. CI still fails before runner assignment, so no new Expo validation or APK build is confirmed. The earlier successful APK noted above belongs to an older commit and must not be treated as a build of current main.
- Pronunciation readings are approximate and require human/native-speaker review. Physical-device testing remains outstanding.


## 2026-11-19 follow-up — Cross-level answer-choice QA
- Removed repeated answer choices from A1 practice (14 Serbian, 13 English occurrences), A2 practice (one per language), B2 listening practice (five per language), C1 listening practice (four per language), and B1 final exam distractors (one question in each language).
- Re-scanned lesson modules A1–C2 and A1–C1 exam modules: 3,194 detected option arrays had no repeated option strings and no answer index outside the options array. C2 final exam has a different structure and needs a dedicated schema-aware audit.
- Fixed B1 named export mismatch with App.js; all imported module names inspected against the App.js named imports now match.
- These checks are static source validation only, not live app UI, audio, device, or build tests. Current-main CI reruns still fail before runner assignment (`runner_id: 0`, no steps); no current-main APK is available or verified.


## 2026-11-19 follow-up — Body-parts vocabulary pack 13
- Added and integrated 51 Serbian + 51 English anatomy/body-part entries with Sinhala meanings, approximate Sinhala-script readings, examples and translations.
- Automated static checks passed: required fields complete for all 102 records; no duplicate headwords per language; Sinhala script present in every pronunciation field; App imports and both course integrations confirmed.
- Runtime validation remains blocked: latest Expo run `44577584279` and Android APK run `44577584617` failed before usable step logs; job log retrieval returned 404 BlobNotFound. Repeated earlier job records indicate runner assignment failure rather than a demonstrated source-code error. No current-main APK artifact is verified.
- This is not native-speaker linguistic QA or physical-device testing. Pronunciation readings are approximate.


## 2026-11-19 follow-up — A1/C2 assessment schema checks
- Inspected A1 final and C2 generated assessment source. Found and corrected a mixed Cyrillic fragment in Serbian A1 final question 18 pronunciation (`a1FinalExams.js`).
- Added `scripts/content-qa.mjs` and `npm run qa:content`; wired the command into Expo validation and Android APK workflows. It checks expected question counts, unique IDs/options, prompts, answer-index bounds and Sinhala-only readings for audio/vocabulary questions in A1 and C2 assessments.
- `node --check` passed for the QA script. The full QA script has not yet run against repository files, so its end-to-end result is pending.
- GitHub Actions is currently blocked before job steps by the account billing/spending-limit message shown in the user's screenshot. Billing overview showed $21.08 gross usage offset by $21.08 included usage and $0 billed; quota reset was shown as 12 days away. No amount is confirmed due.
- No Expo bundle, APK, artifact, install or device test is verified for this follow-up.


## 2026-11-19 follow-up — A1 lesson QA coverage
- Expanded `scripts/content-qa.mjs` to inspect both Serbian and English A1 lesson modules, including required lesson/vocabulary fields, practice/listening choices, answer-index bounds, duplicate options and paired lesson counts.
- Corrected the QA script's Unicode ranges for Sinhala pronunciation and mixed Latin/Cyrillic detection.
- The expanded checks are wired into the existing `npm run qa:content` command, but have not yet been executed end-to-end. No pass is claimed until CI or a local checkout runs them.


## 2026-11-19 follow-up — A1 source content audit
- Direct inspection found 39 unique lessons in each language source. All 39 in both sources contain unit, title, objective, grammar title/text, vocabulary, examples, dialogue and practice sections.
- Pronunciation string scan: Serbian 1,112 and English 1,268 reading/exampleReading fields; no mixed Latin/Cyrillic script or missing Sinhala-script readings detected by the scan.
- QA script now also checks Sinhala-script vocabulary pronunciation and example/dialogue source + Sinhala meaning fields. Full automated execution remains pending; static scan only.
- Serbian and English lesson IDs have different unit progressions despite both containing 39 lessons, so equal lesson counts must not be described as full topic alignment.


## 2026-11-19 — English A1 first-ten lesson alignment
- Reordered English A1 lessons 1–10 to follow the same topic progression as Serbian A1: greetings, responses, café ordering, numbers/time, shopping, workplace communication, jobs/professions, directions/transport, appointment and transport schedules, accommodation/daily services.
- Added beginner English lesson 7 (jobs/professions) and lesson 9 (appointment times and transport schedules), with Sinhala meanings, Sinhala-script pronunciation, examples, dialogues, listening prompts, and practice.
- Kept a separate lesson 11 for more detailed café ordering, so the existing progression after lesson 10 is preserved.
- English A1 now has 50 lessons, 50 unique IDs, continuous title numbers 1–50, and no duplicate lesson numbers in a static source audit. Serbian A1 also has 50 unique IDs and continuous title numbers 1–50.
- Added `validateLessonNumbering` to `scripts/content-qa.mjs` so future content QA checks continuous numbering. The full QA script has not yet been executed because GitHub Actions remains blocked by the account billing/usage restriction; this is static source inspection only.


## 2026-11-19 — A1 lessons 11–20 listening parity
- Reviewed the exact Serbian and English A1 lesson objects 11–20. Topic sequence aligns: café ordering; help/clarification; buying fruit and vegetables; dates/numbers/time; daily routines; work shifts; family/personal information; travel/transport; home/furniture; food/cooking.
- English lessons 11–20 already had listening tasks. Serbian lessons 11–20 had no authored `listeningPractice` objects, although the app supports this field and renders an audio button plus answer choices.
- Added one Serbian listening task to each of lessons 11–20, with Serbian audio text, Sinhala-script approximate reading, three Sinhala answer choices, and a correct-answer index. The task is intended for TTS playback through the existing lesson UI; no recorded audio files were added.
- Corrected mixed-script Sinhala readings discovered during the static scan. Static checks now show 50 Serbian lessons/50 unique IDs and 50 English lessons/50 unique IDs; all 10 Serbian lessons 11–20 contain listening tasks with three options and Sinhala-only reading strings. English lessons 11–20 also each contain listening tasks.
- Extended `scripts/content-qa.mjs` so listening tasks require Sinhala-script readings and reject Latin/Cyrillic mixed-script readings.
- Important: these are source-level checks only. The full QA script, Expo app, TTS playback and Android UI have not been run/tested because the user asked to pause builds while GitHub account usage/billing restrictions remain. Sinhala pronunciation is approximate and needs fluent Serbian-speaker review.
- Commits: Serbian listening tasks `cfca3885db4390fe2bbefc8a2ed85e429b2e55d9`; reading corrections `5757e806881c616236402a3d546a5014bb569644`, `0ac39577545b54b08faf84096e0f419d59216662`, `3a7476ec762434ebaf0bef35cf8673ad735126fa`, `bf3a8201a4dcb0e40f191870d7580f4775c4ffa4`; QA rule `8521d28478234ce36221c0533f0e90d1ceee765b`.

### Next exact task
- Continue paired audit of A1 lessons 21–30: compare topic alignment, required Sinhala pronunciation/meaning, practice counts and listening parity. Correct only verified gaps and preserve current lesson IDs/progress keys.


## 2026-11-19 — A1 lessons 21–30 listening parity
- Compared Serbian and English A1 lessons 21–30; the topic sequence aligns across weather/clothes, restaurant ordering, customer service, phone calls, parcels, doctor/health, emergency help, returns, plans and lateness.
- Added one Serbian TTS listening task to each lesson 21–30 and filled the missing English tasks in lessons 21–22 and 27–30. Existing English tasks in 23–26 were retained. Each task has three Sinhala answer choices and per-option Sinhala-script reading guides.
- Updated content QA to validate listening reading arrays and corrected the lesson-title number matcher.
- Static source audit confirms 10/10 listening tasks per language in this range; all 30 reading strings are Sinhala-script only, without Latin/Cyrillic contamination. Full Node QA, Expo/TTS runtime and Android testing remain pending. Pronunciation is approximate and needs fluent-speaker review.
- Commits: Serbian `335770788342d86ef7184138296998f90d44c671`; English `ae9030ddcc8a6be7c6c7996ae448606831b170f3`; QA `74b9a7cabd12b25db145f2a7f9caab5b71d531ce`.

### Next exact task
- Continue paired A1 audit for lessons 31–40; preserve lesson IDs and progress keys. Do not run builds until the usage reset and billing restriction are resolved.
