# Latest continuation checkpoint — 2026-11-26

## Current instruction
The user asked to fix all remaining BasaNova errors. Continue implementation and source QA in grouped passes. Do not start Expo export or Android APK build unless explicitly authorized as a separate final build step.

## 2026-11-26 — Actions workflow safety correction
- Found a real configuration mismatch: the workflow was push-triggered and the QA and APK jobs could run independently, despite the project handoff saying to keep builds manual and QA-first.
- Fixed `.github/workflows/android-apk.yml`: manual dispatch only; QA runs by default; APK build is optional via `build_android_apk` and is gated on successful QA.
- Updated README.md and BUILD.md to match the workflow behavior.
- Workflow commit: `44e043575b3da4cd15174f57f1b99a48c4e044ec`.
- Documentation commits: see current main history; progress log updated in `PROJECT_PROGRESS.md`.
- This change prevents ordinary pushes from consuming Actions usage or starting builds. No QA command, Expo check, APK build, or device test was run. Do not claim errors are all fixed until executable QA and runtime checks pass.
- Current known external blocker: previous Actions jobs terminated before runner allocation (`runner_id: 0`); job logs were unavailable. This is not evidence of a source pass/fail.

## Next exact work
1. Continue auditing `scripts/content-qa.mjs` assumptions against actual lesson/assessment schemas; fix only confirmed false positives or genuine data defects.
2. Continue App.js state lifecycle and exam/retry review, preserving learner progress keys and language separation.
3. Review dependency reproducibility and app config; do not create a lockfile by guessing versions.
4. When a runner is available, run QA only first. Keep APK build opt-in and deferred until source QA is clean and the user explicitly authorizes the build.
5. Update this handoff and `PROJECT_PROGRESS.md` with actual commits and test outcomes.

---

