# BasaNova — Canonical Project Progress

> **This file is the single source of truth for progress across chats.**
> Last reconciled with GitHub `main`: 2026-11-24.
> Canonical overall implementation baseline: **90%**.
> Do not lower, recalculate, or replace this baseline with a release-readiness percentage merely because tests/build/device validation are still pending. Change it only after verified implementation work, and record the evidence and commit in the log below.

## How to resume in any new chat

1. Read this file first, then read the latest relevant section of `HANDOFF.md`.
2. Fetch the current GitHub `main` files and compare them with the last recorded commit; never assume a previous chat's claims are still current.
3. Keep **implementation progress** separate from **verification/release gates**.
4. Update this file and `HANDOFF.md` in the same work batch whenever meaningful work is completed.
5. Do not report tests as passed unless they were actually executed on the current commit. Do not report an APK as built unless the artifact exists.
6. Preserve the 90% baseline between chats. Raise it only when concrete implementation work is completed and committed. Never lower it due to unexecuted QA, APK build, or device validation.
7. Do not start Expo export or APK build until source work and QA are complete and the user authorizes that stage.

## Overall implementation progress

**90% — confirmed project baseline, not a release certification score.**

| Workstream | Progress | State |
|---|---:|---|
| App foundation, navigation and visual shell | 90% | Implemented in source; device polish remains |
| Vocabulary and reference library | 95% | Search, filters, favourites and pagination implemented; editorial/TTS review remains |
| Serbian + English curriculum A1–C2 | 100% authored | 600 lesson records; content quality review remains |
| Lesson interactions and assessments | 90% | Practice, listening, retries and A1–C2 assessments in source; runtime checks remain |
| Local progress and persistence | 90% | AsyncStorage restore/save, sanitization and serialized writes in source; migration/device tests remain |
| Translation, speech and advanced services | 65% | Basic source paths exist; service/TTS and advanced functionality need completion/verification |
| Static QA/regression coverage | 90% | Extensive assertions authored; current QA command has not been executed |
| Executed automated QA | 0% | No current-commit pass recorded |
| Expo runtime validation | 0% | Not verified |
| Android APK build/install/device validation | 0% | Not started; intentionally deferred |

## Confirmed repository facts at this checkpoint

- Repository: `madu011/BasaNova`, branch: `main`.
- Curriculum source: 50 lessons per language × 2 languages × 6 CEFR levels = 600 lesson records.
- Assessment identity audit was added for 340 revision/final questions across A1–C2.
- `package.json` exposes `npm run qa:content`.
- `package-lock.json` was not found on `main` at the last check; dependency reproducibility/CI setup remains unresolved.
- The QA script has not been run in a Node checkout in this checkpoint. Its assertions are not claimed to pass.
- No current APK artifact or Android device validation is recorded.
- Latest known focused commits:
  - Assessment ID QA: `1abb2c225820c9e23337551be17a8855399f438e`
  - Canonical progress correction in HANDOFF: `bf34553de09900c886409028b5272104f2e17fe1`

## Remaining work — ordered

1. Finish source audit of learner progress, exam restart, language switching, tab/navigation state and local reset behavior; add regression assertions for real behavior.
2. Audit lesson/vocabulary content for duplicates, missing Sinhala meanings/readings, translation mismatches and incorrect answer keys; fix verified issues in grouped edits.
3. Resolve dependency lockfile and reproducible install configuration without introducing an unsafe `npm ci` workflow.
4. Execute `npm run qa:content` in a real Node checkout/runner; fix failures and record exact command, commit and result.
5. Run Expo validation after source QA.
6. Only after source work is complete and user authorizes: build APK, install on Android, and test navigation, lesson/retry/exam flows, persistence/restart, accessibility, speech and network/offline behavior.

## Progress change log

- 2026-11-24 — Baseline reconciled to the previously agreed **90% implementation progress**. Release/verification gates are tracked independently and must not reduce the implementation baseline.
- 2026-11-24 — Added global assessment ID QA for 340 A1–C2 revision/final questions (commit `1abb2c225820c9e23337551be17a8855399f438e`). This adds static coverage; it is not an executed QA pass.
- 2026-11-24 — Added a persistent cross-chat progress source (`PROJECT_PROGRESS.md`), linked it from README and HANDOFF, and added QA guards to preserve the agreed 90% implementation baseline. Commits: `fad588d3b97d857de3548b08e062b4e1cf96ddb5`, `5876843a3efe06d4230b0a741f40cf0d786d2b1d`, `08fc451858788cfe1ebc1ce223b43ce6a650ecb8`, `981d5eb05d38510c69e5e48c66f223691292e566`.
- 2026-11-24 — Audited language switching and added source regression guards confirming it preserves lesson answers, checked state, learned words and favourites while resetting only transient A2–C2 exam-submitted flags. Commit: `512a74b7f51dbd1599f44af615d46a86196d8be5`. QA still has not been executed.
