# Latest continuation checkpoint — 2026-11-26

## 2026-11-26 — current grouped fixes
- Workflow safety: `.github/workflows/android-apk.yml` is manual-only. QA runs by default and now includes `npx expo install --check`; APK build is opt-in and gated on QA success. Normal pushes do not trigger Actions or APK jobs. Workflow commits: `44e043575b3da4cd15174f57f1b99a48c4e044ec`, `58ff981ee762ad6d42acdb1d3cee49f88015bb7b`.
- Documentation updated to match the manual QA / optional APK workflow: README commit `83f2c9cfe5be72014d47e619bd2a88ece088f4a9`; BUILD commit `968da6a6e596bfb3a81cdc1e853ed58829c171be`.
- Daily mission race: rapid taps could award duplicate XP because `completeMission` read a stale React state closure. Added synchronous `missionDoneRef` duplicate guard, restore synchronization and local-date rollover clearing. App commit: `8a3c3211be2e4952021ffa44ee76abea5be88b41`; QA guard commit: `a33c82d4d2fd90b7943bd0688ac9af9321c275cc`.
- Progress log update recorded in `PROJECT_PROGRESS.md`.
- Source review confirms the new mission guard and QA assertions are present. No Node QA, Expo validation, APK build or Android device test has run. Do not claim the app is error-free until those checks pass.
- Previous Actions jobs failed before runner allocation (`runner_id: 0`); this is an infrastructure/availability blocker, not a source test result.

## 2026-11-26 — progress restore interaction race fix
- Found that the app rendered interactive screens before AsyncStorage restore completed, allowing user actions to be overwritten by the late saved snapshot.
- Added a non-interactive loading screen until `storageReady` becomes true; added a QA regression assertion for the render gate.
- App commit: `9b26d46ac516618f96b05237a910cb057f6ce5d6`; QA guard: `1a85cd455eca112fc25d242d988b16d49309f117`.
- Source inspected only; no QA execution, Expo validation, APK build or device test.

## 2026-11-26 — foreground daily mission rollover fix
- Found that a date rollover was only detected on AppState becoming active. If the app stayed foregrounded across midnight, yesterday's mission guard could block today's mission completions.
- `completeMission` now checks local date on every mission tap and clears the guard/list before handling the new day's tap. Regression assertion added.
- App commit: `934b70f87632efb1b3126939f788927972e0d913`; QA assertion commit: `cccb400445145a6971bb238a7c0243e562eb9c5c`.
- Source inspected only; no automated run or device verification.

## 2026-11-26 — assessment QA count correction
- Fixed the global assessment identity check: A1 has 20 final questions per language; A2–C2 each have 30 formal assessment questions (10 revision + 20 final). The total remains 340 across both languages.
- This removes a guaranteed false QA failure; it does not change learner-facing assessment content.
- QA source commits: `8ff5e39246c84aacb8d080a258185f60415acc2f` (format-tolerant daily rollover assertions) and `bbd1cb0f8374762c94579acdcb787ba0c2f1ef81` (A1 vs A2–C2 assessment counts).
- Automated QA still has not been executed.

## Current instruction and next work
The user asked to fix all remaining BasaNova errors. Continue grouped source audits, preserving Serbian/English course data and learner progress keys. Do not start Expo export or APK build unless the user explicitly authorizes that final build step.

1. Continue auditing assessment key consistency, reset/retry state and lesson completion.
2. Review QA assertions for schema assumptions and expand checks only where grounded in the app's actual data.
3. Review dependency reproducibility and app config.
4. When a runner is available, run QA only first and fix every reported failure. Keep APK build opt-in and deferred until QA is clean and separately authorized.

---



## 2026-11-26 — B1/B2 assessment listening-bank repairs and build authorization
- Fixed B1 final listening Q4 and Q8 answer translations for both Serbian and English; fixed English Q16 and Q20 audio/reading fields. Commits: `6250c993e212d3d73d1c3104bbbd4aa03b5c79bc`, `7fc693f52e57983dab9eddc521384309805e5234`.
- Fixed B2 final listening Q18–Q20 in both languages: replaced repeated Q17 answer choices/keys/explanations and repeated pronunciation guides with question-specific content. Commit: `105e794dcd3bbff3811069463edee5ecd6725e2a`.
- Added static regression checks for these defects: `47740de3a105c60396ac899a206ad7ac4a5e5124`.
- Inspected the committed source and confirmed the B1/B2 corrected fields. This is not an executed test pass.
- User explicitly authorized the full build. Continue with the QA-first release gate; do not start APK build unless the current-commit QA workflow passes.
- The available GitHub connector has no workflow-dispatch action, so the manual workflow must be started from GitHub Actions UI. No QA result or APK artifact is yet confirmed.

## Current next steps
1. Continue the remaining content and source audit; avoid speculative changes.
2. Run **BasaNova QA and Android APK** from GitHub → Actions → select the workflow → **Run workflow** with `build_android_apk=false` first.
3. If content QA and Expo compatibility both pass, run the same workflow with `build_android_apk=true`; inspect the completed run and download the `basanova-android-debug-apk` artifact.
4. Install and verify the APK on Android; only then record device verification.
