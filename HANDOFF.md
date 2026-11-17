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
- Lessons should progressively cover A1, A2, B1, B2 and advanced material: vocabulary, listening, speaking, grammar, dialogues, reading, writing and review.
- Include exercises, listening discrimination, speaking practice, revision and end-of-lesson quizzes. Do not claim guaranteed fluency.
- Use the navy/teal/gold visual identity and keep mobile-first UI.
- AI Teacher is currently only a preview; do not imply it is a live AI tutor or speech-recognition feature until implemented.

## Current verified state
- Latest known App.js correction commit: `792efdd719d231a3073e039de0d79e3513450e90` (`fix: normalize final escaped JSX line break`).
- Immediately preceding source cleanup commits: `840c7168a6f2a036ed2658263258e8db38dabfd4` and `05e9eb79e905dd8e93a9c1398fd7908e72a66828`.
- Persistent handoff created in commit `8aacf4bc2be5c285abb87d8f8dad178eb59df70d`; README linked to it in commit `e30865a6ef1b7352bf0d3dfedb765111035d82b1`.
- Latest known file: `App.js`
- Main app is a React Native + Expo JavaScript app; `expo-speech` provides device text-to-speech.
- `App.js` contains Serbian and English starter vocabulary (20 entries each), Sinhala meanings/pronunciation hints, sample dialogues, Serbian alphabet reference, Serbian sound guide, and tabs for Home, Speaking, Lessons, AI Teacher preview and Progress.
- Progress is currently component state only; persistence across app restarts has not been implemented.
- Speech playback uses device voices (Serbian `sr-RS`, English `en-US`); availability/quality depends on the Android device's installed voices.
- A Sinhala pronunciation fallback/transliteration helper was added for Serbian text not in the hand-written dictionary. It is only an approximation and must not be presented as exact pronunciation.
- Source inspection found escaped newline sequences accidentally placed between JSX elements. Three cleanup commits have now removed the remaining unintended occurrences. The intentional JSX string `{"\\n"}` used for a line break in the hero heading remains.
- A further source review found the previous cleanup commits had not removed every unintended escaped newline; the latest commit fixes the final occurrence.

## Verification status — be honest
- GitHub commits above were confirmed by the GitHub connector.
- **No Expo dependency install, JavaScript/JSX parser check, Expo export/build, APK build, or Android device runtime test has been confirmed yet.**
- Therefore, do not describe the current app as build-verified or fully working.
- First technical priority is to validate `App.js` and the project build, repair any remaining syntax/JSX/runtime issues, and record actual test results.

## Next task — resume here
1. Fetch the current `App.js`, `package.json`, `app.json`, and check whether a lockfile exists on `main`.
2. Continue reviewing JSX and app state logic. The accidental escaped newline formatting has been corrected at source level, but no parser/build verification has been run.
3. If tools allow, install dependencies and run a non-device syntax/export/build check. If not, perform the strongest available source validation and clearly report the limitation.
4. Fix any confirmed issues and commit corrections.
5. Build the structured Serbian A1 lesson system using reusable lesson data/components. Every lesson must provide Serbian spelling, Sinhala pronunciation, Sinhala meaning, audio, explanation, examples, practice and a quiz. Apply the same consistent method to English lessons.
6. Update this file with exact progress and the next unfinished task before ending the session.

## Session log
- Initial app scaffold: React Native + Expo, Sinhala-first navy/teal/gold interface.
- Added separate Serbian and English course selection and starter vocabulary.
- Added Sinhala pronunciation guidance and practical speaking dialogues.
- Added optional Serbian alphabet reference and a guide to important Serbian sound distinctions.
- Added general Sinhala pronunciation fallback for Serbian phrases.
- Created `HANDOFF.md` as the persistent project continuity record and linked it from `README.md`.
- Corrected accidental escaped newline sequences between JSX elements in multiple source cleanup commits; latest App.js correction is `792efdd719d231a3073e039de0d79e3513450e90`.
- No dependency install, parser check, Expo export/build, APK build, or device runtime test has been confirmed.

---
**Continuity rule:** Every meaningful future code change must be accompanied by an update to this file. This is how work should resume at the exact stopping point even when the conversation changes.
