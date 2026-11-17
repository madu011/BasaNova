# BasaNova — Persistent Project Handoff

> **Read this file first at the start of every new chat/session before changing code.**
> This file is the source of truth for project continuity. Update it in the same work session whenever project state changes.

## Repository
- GitHub: https://github.com/madu011/BasaNova
- Repository: `madu011/BasaNova`
- Main branch: `main`
- App name: **BasaNova** (exact spelling)
- Product: Sinhala-first mobile app for learning Serbian and English.
- Creator credit: Madhuranga Yasanath.

## Non-negotiable workflow for every future session
1. Read `HANDOFF.md` first, then inspect the current repository files and latest commit. Never rely only on old chat history.
2. Continue from the **Current verified state** and **Next task** below. Do not restart, recreate, or replace existing work unnecessarily.
3. Before editing a file, fetch its latest version from `main` and use its current SHA for the GitHub update. Never overwrite newer work with an old copy.
4. Make real code/document changes in the repository. The user's “Next” means continue implementation, not just describe suggestions.
5. After each meaningful implementation, commit to `main`. Do not say a change was committed unless GitHub returned a commit SHA.
6. **Update this HANDOFF.md in the same work session** with the new commit, changed files, what was implemented, what was actually tested, known issues, and the exact next task. Commit the handoff update too. If changing multiple files, keep the handoff update as the final commit of that work session.
7. Update the README when user-facing setup, features, or project structure materially changes.
8. Verify code before claiming it works. Prefer installing dependencies and running syntax/lint/tests/build when an execution environment is available. Clearly distinguish source inspection from a successful build, device runtime test, and APK installation test.
9. If a check cannot be run, record that honestly here. Never claim an APK exists, a build passed, or a feature works on-device unless it was actually verified.
10. When a new chat begins, this file must tell the next assistant exactly where to resume. Do not ask the user to repeat requirements already recorded here.

## Product requirements and teaching method
- Sinhala is the default explanation language throughout the app.
- The main learning goal is practical speaking and listening fluency in Serbian and English; alphabet study is supportive, not the main course.
- Keep Serbian and English courses and progress separate.
- Teach consistently, not just in selected vocabulary cards. For every Serbian word/phrase wherever it appears (vocabulary, dialogues, grammar examples, exercises, quizzes, prompts), provide:
  - Serbian spelling
  - Sinhala-script pronunciation guide
  - Sinhala meaning/translation
  - Serbian audio playback
  - useful example(s), with pronunciation and Sinhala meaning
- Explain pronunciation and grammar in Sinhala, step by step.
- Teach Serbian sound distinctions explicitly: C/Č/Ć, Dž/Đ, Š/Ž, Lj/Nj, J, rolled R, and vowels. Sinhala spellings are approximations only; use audio and clear articulatory guidance for distinctions Sinhala cannot represent exactly.
- Both Serbian and English must have complete curricula across **all six CEFR levels: A1, A2, B1, B2, C1 and C2**. Each level must include vocabulary, listening, speaking, grammar, dialogues, reading, writing, revision and tests. The roadmap exists in `curriculum.js`; this is a scope/roadmap file, not proof that all lesson content has been authored. Continue implementing actual lessons in manageable batches.
- Every Serbian phrase in all lesson surfaces must include Serbian spelling, Sinhala pronunciation approximation, Sinhala meaning, Serbian audio, and examples with Sinhala pronunciation/meaning. Apply equivalent Sinhala teaching support to English.
- Include exercises, listening discrimination, speaking practice, revision and end-of-lesson quizzes. Do not claim guaranteed fluency.
- Use the navy/teal/gold visual identity and keep mobile-first UI.
- AI Teacher is currently only a preview; do not imply it is a live AI tutor or speech-recognition feature until implemented.

## Current verified state
- Commit `d0f8dd1507f08c8f8f5b3c00f10b0b78efd3b4c1`: improved consistent emoji iconography across the app: emoji navigation icons, mission-specific icons, CEFR level progression icons, and visual markers for lesson method, speaking, alphabet, examples and progress.
- Latest feature commits on `main`:
  - `d14108f0df6d2d5257d706bf393a01c9e87c3065`: added styles for Serbian alphabet rows and localized speech labels.
  - `bd5ae93c8224e261721961be554dc5da4571b74e`: added `curriculum.js` with the A1, A2, B1, B2, C1 and C2 roadmap and common lesson method.
  - `be40cca6968be9524942eb1f2da56371bce9bcc0`: displays the six-level roadmap and lesson method in the Lessons tab for both languages.
  - `4f9069ecf7f7713c410ba8ac0540ed3d75a3b3d4`: adds selectable light/dark themes and daily learning missions with XP.
- `App.js` is React Native + Expo and uses `expo-speech` for device text-to-speech.
- The app has Serbian and English starter vocabulary (20 entries each), Sinhala meanings/pronunciation hints, sample dialogues, Serbian alphabet reference and sound guide, and Home, Speaking, Lessons, AI Teacher preview and Progress tabs.
- Light/dark theme switching is implemented in the header. Theme choice currently lives in component state and resets when the app restarts; persistent theme settings are not implemented.
- Daily missions currently offer three manually checkable learning goals and award 10 XP each. Mission completion and XP are component state only; no real calendar-based streak, daily reset, or persistent achievement system exists yet.
- The six-level roadmap is present, but the actual lesson content for all A1-C2 levels is **not yet authored**. The current vocabulary/dialogues remain starter material.
- Progress is component state only; persistence across app restarts has not been implemented.
- Speech playback uses device voices (Serbian `sr-RS`, English `en-US`); availability/quality depends on installed device voices.
- Sinhala transliteration fallback is approximate, not exact pronunciation.
- `package-lock.json` was checked on `main` and was not found.
- The alphabet row styles that were missing are now defined in the dynamic theme stylesheet.
 
## Verification status — be honest
- GitHub confirmed the commits listed above.
- Source inspection confirmed the theme provider, dynamic palette-based stylesheet, header toggle, mission checklist, XP display, and curriculum roadmap wiring are present.
- **No dependency install, JavaScript/JSX parser check, Expo export/build, APK build, or Android device runtime test has been confirmed.** Do not describe the app as build-verified or fully working.
- Because there is no lockfile, dependency installation/build reproducibility needs attention. Add and commit a valid lockfile using the appropriate npm workflow when a suitable environment is available.

## Next task — resume here
1. Review emoji rendering and spacing on Android; keep icon use consistent and purposeful rather than decorating every line.
2. Validate the current `App.js` JSX and Expo configuration with a real parser/export build; repair any confirmed issues.
3. Persist theme preference, learning progress, mission completion and XP locally (e.g. AsyncStorage, after adding the compatible Expo package and lockfile).
4. Make daily missions genuinely actionable: link each mission to the relevant lesson/dialogue, track actual completion, and implement a date-aware daily reset/streak without falsely awarding progress.
5. Build actual Serbian A1 lessons first with structured reusable lesson data/components. Every Serbian expression must show spelling, Sinhala pronunciation, Sinhala meaning, audio, explanation, examples and exercises. Then implement the same full teaching method for English and progress through A2-C2.
5. Update this file with exact commits, tests and next task after each work session.

## Session log
- Initial app scaffold: React Native + Expo, Sinhala-first navy/teal/gold interface.
- Added separate Serbian and English course selection and starter vocabulary.
- Added Sinhala pronunciation guidance and practical speaking dialogues.
- Added optional Serbian alphabet reference and a guide to important Serbian sound distinctions.
- Added general Sinhala pronunciation fallback for Serbian phrases.
- Created `HANDOFF.md` as the persistent project continuity record and linked it from `README.md`.
- Corrected accidental escaped newline sequences between JSX elements in multiple source cleanup commits; latest known source correction is `792efdd719d231a3073e039de0d79e3513450e90`.
- Added A1-C2 curriculum roadmap, Lessons-tab overview, alphabet row styles, light/dark theme switching, and introductory daily mission/XP UI. These features are not yet device/build tested.
- No dependency install, parser check, Expo export/build, APK build, or device runtime test has been confirmed.

---
**Continuity rule:** Every meaningful future code change must be accompanied by an update to this file. This is how work should resume at the exact stopping point even when the conversation changes.
