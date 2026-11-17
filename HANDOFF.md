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

- CI runs [44106280204](https://github.com/madu011/BasaNova/actions/runs/44106280204) and [44106299701](https://github.com/madu011/BasaNova/actions/runs/44106299701) passed dependency installation, Expo compatibility and Android JavaScript bundle export.
- Latest vocabulary implementation commit: `feb39a60bfe69a41a12fbf6d3eea18d67f74b36a`. Added 30 practical entries to Serbian and 30 to English, taking the starter decks to 50 entries per language. New themes include time/day phrases, food/drinks, shopping, transport, home, work, colleagues, asking for help, and everyday responses. Each entry has a Sinhala meaning, reading guidance, and an example with Sinhala translation; the existing Learn screen exposes audio playback.
- README update commit: `16b6db9f5bd658fd8f0ea09b2198a96a6344f51a`.
- The new vocabulary is source-committed but has not yet been separately device-tested. Serbian pronunciation display uses the app's approximate Sinhala transliteration; it is not phonetic transcription.
- Translator still uses MyMemory on explicit user action; live API availability, rate limits, Android clipboard and TTS behavior remain unverified.
- Supabase/Google cloud sync is architecture documentation only. No live auth, cloud backup or restore is configured.
- Progress, XP, missions, theme and translator history are in-memory only and reset on app restart.
- No committed `package-lock.json`; CI creates a temporary lockfile.
- A1-C2 curriculum roadmap exists, but complete structured lessons for all levels have not been authored. The 50-word decks are starter vocabulary, not complete courses.
- UI still uses emoji/text glyph icons; custom optimized 3D-style icon assets are not integrated.

## Verification status — be honest
- The latest code commit `feb39a60bfe69a41a12fbf6d3eea18d67f74b36a` has not yet had its own CI result confirmed.
- Earlier runs `44106280204` and `44106299701` passed Android JavaScript bundle export, but those runs predate the latest vocabulary change.
- Android JS bundle export is not a native APK build or physical-device runtime test.
- No live MyMemory API, clipboard, Supabase migration, Google sign-in or Android device tests have been completed.
- npm audit previously reported 13 findings (11 moderate, 2 high); review without blindly applying breaking upgrades.

## Next task — resume here
1. Check CI for commit `feb39a60bfe69a41a12fbf6d3eea18d67f74b36a`; repair any confirmed export issues.
2. Add more practical vocabulary by themed groups, but prioritize complete structured Serbian A1 lessons rather than endlessly extending a flat list. Then add English A1 lessons.
3. Generate a valid `package-lock.json` in a proper npm checkout and switch CI to the committed lockfile.
4. Implement local persistence for progress, XP, missions, theme and translator history, with safe app hydration.
5. Make daily missions genuinely actionable and date-aware.
6. Configure Supabase/Google OAuth after secure app configuration is available; never ask for service-role keys or OAuth secrets in chat.
7. Replace emoji/text glyphs with optimized static 3D-style PNG/WebP assets.
8. Test translator, clipboard, TTS, offline behavior and scrolling on Android; build/install a native APK only in an actual Android build environment.

## Session log
- Latest continuation: commit `feb39a60bfe69a41a12fbf6d3eea18d67f74b36a` added 30 practical Serbian and 30 English vocabulary entries (50 each total). README commit `16b6db9f5bd658fd8f0ea09b2198a96a6344f51a` documents the expanded decks. The new code's CI result is pending verification; no device/APK test yet.
- Latest continuation: CI runs `44106280204` and `44106299701` passed Android JS bundle export. Commit `6678bcdcb62c4e65a1ddeff9976b91cd1512290c` adds 10 Serbian A1 practical phrases; README commit `8671b76961a4a232e7f0566cfd30d6495a924b05` updates feature documentation. Device tests and native APK build remain outstanding.
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
