# BasaNova — Canonical Project Progress

> **This file is the single source of truth for progress across chats.**
> Last reconciled with GitHub `main`: 2026-11-26.
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

## 2026-11-25 — Free-first cleanup and build handoff

- Removed the optional remote Google voice endpoint from `App.js`; Serbian and English pronunciation now use only device-installed voices through `expo-speech`.
- Removed unused `expo-av` and `expo-file-system` dependencies. No payment gateway, subscription, in-app purchase, billing SDK, cloud AI API, or paid TTS integration is included in the current app source.
- Kept the Sinhala-to-Serbian MyMemory translator because the current integration uses its public endpoint without a paid API key. It requires internet, sends submitted text to that external service, and may be rate-limited; users are warned not to submit confidential text.
- Added QA guards that fail if paid voice endpoints, billing SDKs, or removed audio dependencies are reintroduced.
- Updated README and BUILD documentation to match the actual GitHub Actions workflow: content QA plus standalone installable Android **debug APK** artifact (`basanova-android-debug-apk`, 14-day retention).
- Commits: `8d63fee1540b54c7305446859f1fdd5f66b18ab4` (App.js), `cfd849785950ea1581ae4d5d245cee00fbc4b056` (package.json), `1051912332026c3a089b8e7e4117297d49484b9b` (QA guards), `1c154d1351e5cd5f3ecdb4a260e947a81024713b` (README), `87612f418b3d71509e8a06f57df0f094948bd8bc` (BUILD.md).
- Source inspection confirms the remote voice endpoint and its packages are removed. The QA workflow was triggered by the QA-script push path, but the current run status and artifact are not accessible through the available GitHub connection in this session. No QA pass or APK build success is claimed until the run/artifact is observed.
- Overall implementation baseline remains **90%**; QA, Expo validation, APK artifact and physical-device checks remain separate release gates.

- 2026-11-25 CI retry check: GitHub Actions run [45707505028](https://github.com/madu011/BasaNova/actions/runs/45707505028) was retried once. Both jobs again terminated before runner allocation (`runner_id: 0`, no steps executed); this is an infrastructure/quota/runner-availability failure, not evidence that the QA or APK build passed or failed on source. No artifact exists from this run. The current source was statically inspected for the removed voice endpoint and imports; actual Node QA/Expo/Gradle execution remains blocked until GitHub provides a runner.

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
  - Language-switch preservation QA: `512a74b7f51dbd1599f44af615d46a86196d8be5`
  - Canonical progress QA guard: `5876843a3efe06d4230b0a741f40cf0d786d2b1d`
  - Canonical progress correction in HANDOFF: `bf34553de09900c886409028b5272104f2e17fe1`

## Remaining work — ordered

1. Finish the remaining source audit of exam answer-key consistency, lesson completion/restart behavior, tab/navigation state and local reset paths. Language-switch preservation has been source-audited and regression guards added.
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


## 2026-11-24 — lesson progress and navigation contract audit
- Audited the live `courseLessonProgress` calculation in `App.js`: a lesson is counted only when every practice item is both checked and correct, and its listening item (when present) is also checked and correct. The memo dependencies include language, answer map and checked map, so percentages recalculate as the learner changes course or answers.
- Audited the seven bottom-navigation entries and the home-screen route to the Serbian alphabet. No source defect was confirmed in these paths; added regression assertions for the exact seven unique tab IDs/order, a render branch for each tab, the alphabet entry point, and the lesson-progress completion/dependency contract.
- QA source commits: `d2efee8f453108e3dc8682bcc26a7bfd04d37f86` (initial guard addition) and `c2b7f716ae658116d2edb5d6b5c5518737f1d966` (corrected source matchers after review).
- These are static source assertions only. The QA command has not been executed; no test pass is claimed. No Expo validation, CI run, APK build or Android device test was started.
- Overall implementation baseline remains **90%**. This audit added QA coverage but did not justify changing the implementation estimate.


## 2026-11-24 — A1 listening retry defect fixed
- During the detailed retry-control audit, found two A1 listening retry handlers whose computed object keys were missing the closing quote around `-listen`. Corrected both answer-reset and checked-flag-reset keys in `App.js`.
- Verified the committed source now contains zero malformed key fragments and exactly six correctly formed listening retry answer resets plus six checked-state resets.
- App fix commit: `71a9004d0718cf68f96d97c838b2c860b4b240b3`. QA guard addition: `845389208de81ff7f85c1fd3a51a926f2eea8da0`; matcher simplification: `6c392a933352b7ccd9b7cdc84c9a5a142f85f1bc`.
- This was verified by inspecting the committed source text only. `npm run qa:content` and a JSX/JavaScript parser have not been executed, so syntax/runtime status is still unverified.
- Overall implementation baseline remains **90%**; the fix closes a specific source defect but does not certify the full lesson flow.


## 2026-11-25 — Android build workflow enabled
- User explicitly authorized completing the remaining work and starting an Android build.
- Updated `.github/workflows/android-apk.yml` so pushes to `main` automatically run two independent jobs: dependency install + `npm run qa:content`, and a signed installable Android debug APK build using Expo prebuild + Gradle `assembleDebug`.
- The workflow creates a lockfile in the ephemeral CI checkout before `npm ci`; it does not commit a generated lockfile or change the 90% implementation baseline.
- Workflow commit: `5da228d6f96062fef21d15e2402c96b901f06740`.
- Build is configured to upload `basanova-android-debug-apk` as a GitHub Actions artifact (14-day retention). A successful artifact has not yet been observed/downloaded in this session; do not provide a fabricated APK link or claim build success.
- The GitHub connector's commit-run lookup returned no runs because that endpoint only returns pull-request-triggered runs; it does not confirm that the push-triggered workflow failed or succeeded.
- No local Expo/Gradle build was run. The actual QA and APK job outcomes remain pending external CI execution.


## 2026-11-25 — bidirectional translation and lesson-audio audit
- Confirmed repository visibility is `public` through the GitHub repository API.
- Updated `App.js` so the translator can switch between Sinhala → Serbian (`si|sr`) and Serbian → Sinhala (`sr|si`), with direction-aware translation history and language-appropriate output handling. Commits: `969a4fdc71106c544b1b46d48115fa4a96b8dcc2`, `aeb276d7b1921f3ac0ea314c1847c5c3519908e9`.
- Static source review found individual word playback in the A1–C2 lesson renderers (nine `speak(item.word, ...)` call sites) and existing sentence/example playback. Added QA assertions for both translator directions and vocabulary word playback: `584ac09745fbb081b6366f1770de906568e9effd`.
- These are source changes and static inspection only. The newly triggered GitHub Actions runs have not yet completed; no QA pass or APK build success is claimed.
- The previously generated BasaNova icon image is not available as a repository file in the current GitHub checkout. Before wiring the exact same image into Android launcher/adaptive icon and in-app branding, request that the user upload the generated icon image as a chat attachment.
- Next: obtain the exact icon image attachment; inspect/align app icon, splash and in-app brand usage; check latest Actions runs and fix actual QA/build failures; update progress only after verified implementation and release checks.


## 2026-11-26 — prevent accidental Actions/APK usage
- Audited the current workflow against the source-only QA-first project rule and found it still triggered on pushes and ran QA/APK jobs independently. This contradicted the documented manual-only policy and could consume Actions usage during ordinary source edits.
- Updated `.github/workflows/android-apk.yml`: only manual dispatch is allowed; content QA is the default job; the Android APK job is opt-in via `build_android_apk` and depends on successful QA. Normal pushes no longer start CI or APK builds.
- Updated README.md and BUILD.md to explain the manual QA-only default and explicit APK opt-in.
- Workflow commit: `44e043575b3da4cd15174f57f1b99a48c4e044ec`. Documentation commits follow this entry.
- No QA, Expo validation, APK build, or device test was run. The workflow change is source/configuration work only. The GitHub Actions runner-allocation restriction remains unresolved; do not claim the app is error-free or tests passed.
- Implementation baseline remains 90%; release verification is tracked separately.


## 2026-11-26 — daily mission duplicate-XP fix
- Source review found a race in `completeMission`: rapid repeated taps before React committed the next render could pass the stale `missionDone` closure and award the same mission's XP more than once.
- Added a synchronous `missionDoneRef` guard. The ref is restored from the current-date saved missions and cleared on local-date rollover; invalid mission indexes and already-completed missions are ignored.
- Added source regression assertions for duplicate guarding, restore synchronization and daily rollover.
- App fix commit: `8a3c3211be2e4952021ffa44ee76abea5be88b41`. QA guard commit: `a33c82d4d2fd90b7943bd0688ac9af9321c275cc`.
- Verified by inspecting the committed source and QA assertion text only. The QA command has not been executed; no runtime or device pass is claimed.


## 2026-11-26 — prevent learner actions racing progress restore
- Source review found that the main app UI was interactive while AsyncStorage restoration was still pending. A learner could select a language, complete a mission, or answer a question before the saved snapshot loaded, then have those early actions overwritten by restored state.
- Added a non-interactive BasaNova loading screen while `storageReady` is false. Main app navigation and actions render only after restore settles.
- Added a regression assertion that the loading gate appears before the main interactive render.
- App fix commit: `9b26d46ac516618f96b05237a910cb057f6ce5d6`. QA guard commit: `1a85cd455eca112fc25d242d988b16d49309f117`.
- Source and assertion text inspected; QA command and device behavior remain unverified.


## 2026-11-26 — QA-only dependency compatibility check
- Moved `npx expo install --check` into the default QA job so a QA-only run verifies Expo package compatibility without generating a native project or building an APK.
- Removed the duplicate compatibility step from the opt-in APK job; it now inherits the successful QA gate.
- Workflow commit: `58ff981ee762ad6d42acdb1d3cee49f88015bb7b`.
- Workflow has not been run in this session. No QA/Expo result is claimed.


## 2026-11-26 — daily mission rollover while app remains foregrounded
- Follow-up review found the date rollover was only checked when React Native emitted an `AppState` transition to active. If the app stayed open across local midnight, the mission guard could still treat yesterday's completed missions as today's and block new completions.
- Updated `completeMission` to compare the current local date before checking the duplicate guard. On a date change it updates the persisted date ref and clears both the synchronous guard and visible mission list before processing the new tap.
- Added a regression assertion for foreground rollover.
- App commit: `934b70f87632efb1b3126939f788927972e0d913`; QA assertion commit: `cccb400445145a6971bb238a7c0243e562eb9c5c`.
- Source inspection only; QA has not been executed.


## 2026-11-26 — assessment QA count correction
- Source audit found a guaranteed false failure in the global assessment identity check: it required every language/level group to contain 30 items, but A1 intentionally has a 20-question final exam per language and no separate 10-question A1 mixed-revision assessment in that formal bank. A2–C2 each have 10 mixed-revision plus 20 final questions per language.
- Updated the expected group count to 20 for A1 and 30 for A2–C2. Kept the global total at 340 and clarified the expected composition: 40 A1 final questions plus 300 A2–C2 revision/final questions.
- QA source commits: `8ff5e39246c84aacb8d080a258185f60415acc2f` (format-tolerant daily rollover regression assertions) and `bbd1cb0f8374762c94579acdcb787ba0c2f1ef81` (correct A1 vs A2–C2 assessment counts).
- This was a QA-script defect, not a learner-facing app defect. Automated QA remains unexecuted.


## 2026-11-26 — B1/B2 assessment listening-bank repair

- A focused answer/audio audit found verified content defects in B1 final listening items: both Serbian and English Q4 had an answer describing the previous job rather than the spoken current job; both Q8 answer keys described a rain delay instead of the spoken plan change; English Q16 used Sinhala phonetics as the audio text; English Q20 also used Sinhala phonetics as audio and an unrelated topic label as its reading guide.
- Corrected the B1 answer options, explanations, spoken English source sentences and Sinhala pronunciation guides. B1 fixes: `6250c993e212d3d73d1c3104bbbd4aa03b5c79bc` and `7fc693f52e57983dab9eddc521384309805e5234`.
- A similar audit found B2 final listening Q18–Q20 in both languages had all reused Q17's answer options, answer key, explanation and/or pronunciation guide. Replaced them with translations and phonetic guides matching each actual spoken sentence. B2 fix: `105e794dcd3bbff3811069463edee5ecd6725e2a`.
- Added static regression assertions for the repaired B1/B2 question IDs, correct options, explanations and Sinhala pronunciation guides. QA guard commit: `47740de3a105c60396ac899a206ad7ac4a5e5124`.
- Follow-up source inspection confirms all six B2 items now have distinct listening pronunciation guides and aligned correct options; B1 English Q20 now stores the English sentence as audio text and Sinhala phonetics as its reading guide. This is source inspection only; `npm run qa:content`, Expo validation and APK build have not yet been executed.
- The user has now explicitly authorized completing the full build. Preserve the QA-first gate: run QA first, then opt into the Android debug APK only if QA passes. The available GitHub connection can inspect runs but does not expose a workflow-dispatch action; do not claim a run or artifact until one is actually observed.
- Overall implementation baseline remains **90%**; release verification remains separate.
