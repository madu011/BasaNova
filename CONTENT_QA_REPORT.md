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
- Static source audit confirms 10/10 listening tasks per language in this range; all 60 reading strings are Sinhala-script only, without Latin/Cyrillic contamination. Full Node QA, Expo/TTS runtime and Android testing remain pending. Pronunciation is approximate and needs fluent-speaker review.
- Commits: Serbian `335770788342d86ef7184138296998f90d44c671`; English `ae9030ddcc8a6be7c6c7996ae448606831b170f3`; QA `74b9a7cabd12b25db145f2a7f9caab5b71d531ce`.

### Next exact task
- Continue paired A1 audit for lessons 31–40; preserve lesson IDs and progress keys. Do not run builds until the usage reset and billing restriction are resolved.


## 2026-11-19 follow-up — A1 lessons 31–40 paired audit and array cleanup
- Compared Serbian and English A1 lesson topics 31–40; the sequence matches across daily routines, shifts, day-off requests, phone calls, weather/clothes, café choices, family, home, appointments and supermarket checkout.
- Static source scan: each language has a listening task and five practice prompts in all 10 lessons; vocabulary counts are 8 per lesson except English lesson 37, which has 9.
- Removed 33 repeated-comma separators in `serbianLessons.js` that introduced empty array slots. Commit: `80516b2f290d952382497db367ec5c5fc10e3ebb`.
- The scan confirms zero remaining repeated-comma runs. This is not a JavaScript parser or end-to-end QA pass; the full QA script, Expo/TTS runtime and Android testing remain pending. Pronunciation readings are approximate and require fluent-speaker review.


## 2026-11-19 follow-up — A1 lessons 41–50 paired audit and example repair
- Reviewed Serbian and English A1 lessons 41–50. Topic sequence aligns across city directions, workplace safety, dates/months, numbers/time/money, public transport, doctor visits, everyday questions, grammar review, daily conversation and final listening/speaking.
- Each lesson 41–50 has 8 vocabulary entries, 5 practice questions and one listening task in both tracks. All lesson IDs and progress keys were preserved.
- Found word-only vocabulary examples in review lessons 43–50. Replaced 64 Serbian + 64 English examples with contextual sentences already present in each lesson's examples section, and synchronized the Sinhala meaning/translation plus `exampleReading`. Two final entries that still echoed the headword were changed to alternate contextual sentences.
- Static scan confirms 50 lesson IDs in each A1 track, 10/10 listening tasks and 5 practice questions per language in lessons 41–50, and no remaining headword-only examples in lessons 43–50. The `reading`/`exampleReading` scan for those review vocabulary entries found no missing Sinhala script or Latin/Cyrillic contamination.
- This is a source-level audit only. The full Node QA script/parser, Expo runtime, TTS playback, Android build and physical-device testing remain pending. Lessons 41–42 contain legacy unquoted object keys and were inspected as JavaScript source rather than parsed as JSON. Sinhala pronunciation is approximate and needs fluent-speaker review.


## 2026-11-20 — Full-course QA coverage expansion (source committed; execution pending)
- Expanded `scripts/content-qa.mjs` so the content QA command now loads and validates both Serbian and English A2, B1, B2 and C2 lesson tracks in addition to the existing A1 and C1 checks.
- The new checks require exactly 50 lessons per track, unique lesson titles and content fingerprints, complete lesson/vocabulary/example/dialogue/practice fields, Sinhala-script pronunciation fields, valid non-repeated practice/listening options, valid answer indexes, and listening practice in every lesson.
- Added a static App.js import-integrity pass: each relative named import is loaded and checked against the module's actual named exports. This is intended to catch missing modules and export-name mismatches before Expo bundling.
- Commits: full-level coverage `f917cbc0ad48f9a4c4ef71379da1177c8fc6cf27`; App import/export check `b0913a0ce979a4ab26751e79207daa7c360d9634`; regex correction `86f0690d3ea38bbf3bae5c8b05e67132613b6dad` and `442bab8cd24d5b504600746768f937750aa2a1db`; listening and duplicate-content assertions `3631203790704a54370edb6deef01316ae14652b`.
- Important: the expanded QA script has **not yet been executed** against a checkout, so no clean-pass claim is made. GitHub Actions runner allocation/account usage restrictions previously blocked jobs before steps. Do not mark the app error-free until `npm run qa:content`, Expo export and Android build run successfully. Fluent-speaker review and physical-device testing also remain separate requirements.

- Extended assessment checks to both B1 and B2: 10-question mixed revisions and 20-question final exams per language, including duplicate option and answer-index validation.
- Latest QA extension commit: `7802bc8ec6a7a7ee4036c1a885328aa1d648f94b`.

- Paused automatic push-triggered Expo validation and Android APK builds. Both workflows are now manual-only (`workflow_dispatch`) so normal source/documentation updates do not repeatedly consume Actions runs while the account's runner-allocation restriction is unresolved. Re-enable or manually run validation/build after the account restriction is cleared.
- The latest failed Actions jobs returned `runner_id: 0` with no steps and no runner logs. This is a runner-allocation failure, not evidence that the newly expanded QA script or app source passed or failed. Current-main validation remains unverified.

## 2026-11-20 — A2 assessment and Serbian vocabulary corrections (source updates only)
- Added `a2FinalExams.js`, a reusable assessment generator that builds paired Serbian and English A2 mixed revision sets (10 questions each) and final exams (20 questions each) from the existing A2 lesson vocabulary and listening exercises. This avoids inventing a second disconnected vocabulary list.
- Integrated both A2 assessments into the Learn screen, with listening playback, Sinhala pronunciation, answer feedback, 70% pass threshold, retry and separate language state.
- Persisted A2–C2 final-exam submitted states alongside existing local lesson answers/checks so a completed result can be restored after app restart. Language-switch reset now runs after language state is initialized and does not erase restored state on first load.
- Added per-level A1–C2 lesson completion summaries to Progress. A lesson counts as complete only after its practice questions and listening task are checked.
- Corrected a content-format issue found during inspection: Serbian B1 vocabulary headwords were stored as English glosses even though their examples and readings were Serbian; a lesson-local phonetic matching normalization now selects Serbian headwords from each lesson's own example/dialogue text. Serbian B2 vocabulary stored Serbian Cyrillic headwords in the pronunciation field; those are transliterated to Serbian Latin headwords and Sinhala-script pronunciation guides.
- Expanded content QA to require 50 lessons in each A1 track, validate paired A2 assessments and answer-to-vocabulary alignment, and check Serbian B1/B2 headword/readings format.
- New commits in this session: A2 assessment generator `3e3e3fbd918960c345b5028493c6e204ac00898f`; A2 Learn integration `d51163d2c432e5811472f24e0d785cee1ea9c6a9`; exam persistence `1062add4ced0d99ee3affef7b9e5be88dbc130e7`; restore-safe language switching `a846811cf9ea2ba260c9165fa11cbd38524e7422`; A2 assessment QA `749e85d6149fa6c504720d9a12f5f50eb2342681` and `20846dfb52563a09197b2c87ad16212c9b9e0cc4`; Serbian B1/B2 vocabulary normalization `08dd06d66edbb75ee6da194cbd89f2f699744512`, `36b538369674a0f8038b05aadd3bbab06fb619ca`, `bf561a98418a8c1255198256ecd6b0dbca5ac9cc`, `1a5ebb4e0b2c9cf85c421b98ec63421d41dd0328`; Serbian vocabulary QA `ffb92c182a8714760d50eb6d802a227284065ce1`; A1 50-lesson QA `d4d97e9d9ff1a8a099a0f42de884288482cdf0df`; progress UI `6ff13f4dab2ba4f7fca278e5f3b77e11267cbc8e`; README `71df94aa579c589630f33e349ea86ac89d5fc1f1`.
- No build, Expo export, APK workflow or device run was started. Source-level QA has been expanded but **has not been executed** because previous Actions runs failed before a runner was allocated (`runner_id: 0`). Do not claim the app is error-free until the QA script runs successfully.

- Further content review found mixed-script pronunciation data in Serbian A2, B1, B2 and later C2 lesson batches, plus one English C2 typo. Added source-level normalization for Serbian A2/B1/B2/C2 vocabulary, examples, dialogue, grammar phrases and listening readings; corrected the English C2 “peer review” reading. B1/B2 assessment headwords are now aligned to the Serbian course vocabulary and pronunciation, with answer meanings kept consistent.
- Expanded QA to check Sinhala-script pronunciation on visible vocabulary/example/dialogue/grammar cards, Serbian B1/B2 headword presence in their own Serbian lesson context, Serbian assessment-to-course headword/meaning alignment, and dialogue speaker labels without misclassifying them as pronunciation text.
- Latest relevant commits: assessment alignment helper `c42c6fd302937ec7b20df81fa4a40dbe111f75a5`; Serbian assessment integration `74bcb3fe1d9c6d61bca688772f13e16cbd80863b`; A2 pronunciation normalization `7b39dcadaef22612032cb9cd1fe8735cee69367d`; Serbian B1/B2 phrase normalization `e653c8efd3c9ec783d9296cb15180efae6850024`, `d8fbc0818302bfe220585cbf88d2681e57dac2b8`; C2 batch normalization `1cade6468426331aa6305a45a7be3cbffa4dbc45`, `2e13ef606167a3f61a3679f77a9718efdb86ee56`, `ab86b8020bed36fb4578c71c29f883fc430a94a2`; assessment QA `be71f38e69f28fe8721c64f0a1454b4b1ce5882b`, phrase pronunciation QA `eab254b3b4d4ac03bcdfb8a0624dc0cce2c44219`, final Serbian B2 source check `eb0500c64abddbccd19927c9ba47bf8f8b5f82e3`.
- These are committed source changes, not verified runtime results. No build or Expo export has been run. The expanded QA script remains unexecuted; treat any automatic normalization and assessment mapping as pending until `npm run qa:content` succeeds on a working runner.

- Added explicit checks for the Serbian A1 listening bank (25 authored audio questions) and A1 mixed revision set (27 audio questions), including Sinhala readings, unique options and answer-index bounds. QA now treats Serbian Latin diacritics as foreign-script contamination when they appear in a Sinhala pronunciation field.
- Added pronunciation cleanup for mixed Sinhala/Cyrillic entries in Serbian A2 and Serbian C2 lesson batches 21–50, and corrected the English C2 peer-review reading. All these fixes remain source-level only until QA is actually run.
- Latest QA commits: A1 listening/revision checks `9d4ac6d975e06d97e3ee442c40ca86e79246d46e`; extended pronunciation script checks `1f1c6e56c5168f9a17befdc20d4bbfed29541b94`; final pronunciation validation pattern `cc95c04f4b1864880590b5d1b6370684b33e2ac5`.
