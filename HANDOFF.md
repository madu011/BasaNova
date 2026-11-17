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

- GitHub Actions run [44106280204](https://github.com/madu011/BasaNova/actions/runs/44106280204) completed successfully: dependency installation, Expo SDK compatibility check and Android JavaScript bundle export all passed.
- GitHub Actions run [44106299701](https://github.com/madu011/BasaNova/actions/runs/44106299701), triggered by the handoff commit, also completed successfully through Android JavaScript bundle export.
- Latest implementation commit: `6678bcdcb62c4e65a1ddeff9976b91cd1512290c` adds 10 practical Serbian A1 phrases to the existing Learn vocabulary deck. Topics include asking the time, requesting slower speech or repetition, saying you understand/do not know, finding the toilet, asking for help/directions, and basic work communication. Each entry includes Serbian, Sinhala meaning, an approximate Sinhala reading and a translated example sentence.
- README commit: `8671b76961a4a232e7f0566cfd30d6495a924b05` documents the expanded Serbian A1 phrase set.
- The translator still uses MyMemory on explicit user action; live language-pair availability, rate limits, and Android clipboard/TTS behavior remain unverified.
- `CLOUD_SYNC.md` and the SQL migration define the proposed Supabase/Google architecture, but no live Supabase project, Google OAuth configuration, auth UI or cloud sync exists yet.
- Progress, XP, mission completion, theme and translator history are currently in-memory React state; they do not survive an app restart.
- No committed `package-lock.json` exists. CI currently generates a temporary lockfile before `npm ci`.
- The A1-C2 roadmap exists, but complete lesson content for all levels has not been authored. The Serbian starter deck is expanded, not a complete A1 course.
- Custom static 3D icon assets have not been integrated; the current UI still uses emoji/text glyphs. Follow `PERFORMANCE.md` for lightweight icon implementation.

## Verification status — be honest
- The two listed GitHub Actions runs both passed dependency installation, Expo dependency compatibility checks and Android JavaScript bundle export.
- This verifies the Android JavaScript bundle export only. It does **not** verify a native APK build, installation, or runtime behavior on a physical Android device.
- The new Serbian vocabulary entries were source-edited and committed, but have not been separately tested on a device. Their speech behavior relies on the existing Expo Speech integration and installed Serbian voice.
- No live MyMemory API test, clipboard test, Supabase migration test, or Google sign-in test has been completed.
- npm audit previously reported 13 findings (11 moderate, 2 high); review separately and do not blindly apply breaking upgrades.

## Next task — resume here
1. Inspect suitable Expo SDK 54 local-persistence package options and generate a real `package-lock.json` in a proper npm checkout; commit it and simplify CI to use the committed lockfile with `npm ci`.
2. Implement local persistence for learning progress, XP, missions, theme and translator history, with safe hydration before the app renders progress. Do not label local persistence as cloud backup.
3. Make daily missions link to the relevant lesson/dialogue and award XP only for meaningful completion; add date-aware reset/streak behavior.
4. Expand Serbian A1 as structured lessons with vocabulary, grammar, examples, listening/speaking/reading/writing and review exercises; then build English A1 and progress through A2-C2. Keep the roadmap distinct from completed content.
5. Configure Supabase/Google OAuth only after the owner supplies the project URL and publishable key through secure app configuration; never request service-role keys or OAuth secrets in chat.
6. Replace emoji/text glyph icons with optimized static 3D-style PNG/WebP assets, avoiding real-time 3D and heavy animation.
7. Test translator API, clipboard, TTS, scroll behavior and offline behavior on Android. Build/install a native APK only when an actual Android build environment is available.

## Session log
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
