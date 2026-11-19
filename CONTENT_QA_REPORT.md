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
