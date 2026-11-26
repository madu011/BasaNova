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

## Current instruction and next work
The user asked to fix all remaining BasaNova errors. Continue grouped source audits, preserving Serbian/English course data and learner progress keys. Do not start Expo export or APK build unless the user explicitly authorizes that final build step.

1. Continue auditing assessment key consistency, reset/retry state and lesson completion.
2. Review QA assertions for schema assumptions and expand checks only where grounded in the app's actual data.
3. Review dependency reproducibility and app config.
4. When a runner is available, run QA only first and fix every reported failure. Keep APK build opt-in and deferred until QA is clean and separately authorized.

---

