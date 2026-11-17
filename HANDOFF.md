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

- GitHub Actions runs [44110771975](https://github.com/madu011/BasaNova/actions/runs/44110771975) and [44110805124](https://github.com/madu011/BasaNova/actions/runs/44110805124) both passed dependency installation, Expo compatibility and Android JavaScript bundle export for the 50-word-per-language update.
- Commit `6ef36686b8ebc88bc1ccf41e8dc7ded85be7e3b9` adds `serbianLessons.js` with two structured Serbian A1 lessons: self-introduction/name questions and greetings/polite responses. Each lesson includes Sinhala objectives, vocabulary, approximate pronunciation, grammar explanation, examples, dialogue lines, TTS actions and three interactive multiple-choice questions.
- Commit `7c21c17696fb228b99a1a9c70e1160071d7edbc9` integrates these lessons into the Learn tab and adds quiz selection/answer feedback UI. Serbian A1 lessons display when Serbian is selected; English currently shows an honest in-progress notice rather than falsely claiming completed lesson content.
- README update commit: `12e6ce42eed048572a03999a55fa81c32dbf45ce`.
- The lesson code has been source-edited and committed; CI for the latest App.js integration is not yet confirmed. No physical-device testing has been done.
- Vocabulary now contains 150 Serbian and 150 English entries (300 total): the original 50-per-language deck plus two themed 50-per-language A1 expansions in `vocabularyPacks.js` and `vocabularyPack2.js`. Categories include numbers, weekdays, meals/food, everyday objects, shopping, directions, workplace, transport, home, weather and basic health. The app appends all packs to the correct language deck.
- Progress, XP, missions, theme and translator history remain in-memory only; they reset on app restart. No live Google login or Supabase cloud backup exists.
- No committed `package-lock.json`; CI currently generates a temporary lockfile.
- Custom static 3D-style icon assets are not integrated; current UI still includes emoji/text glyphs.
- Translator MyMemory API, Android clipboard, TTS and offline behavior have not been live/device tested.

## Verification status — be honest
- Runs `44110771975` and `44110805124` passed the Android JavaScript bundle export before the new structured lesson feature.
- Latest commits `6ef36686b8ebc88bc1ccf41e8dc7ded85be7e3b9` and `7c21c17696fb228b99a1a9c70e1160071d7edbc9` still need their own CI confirmation.
- A successful Android JS bundle export is not a native APK build, installation or physical-device runtime test.
- No live API, Supabase migration, Google sign-in or Android device tests have been completed.

## Next task — resume here
1. Check CI for the structured Serbian A1 lesson integration and fix any confirmed syntax/export problems.
2. Continue expanding vocabulary in verified batches from the current 300 entries until the combined Serbian + English deck exceeds 1,000 entries; keep pronunciation, Sinhala meaning and contextual examples accurate. Then add structured lessons for the same themes.
3. Create equivalent structured English A1 lessons; keep Serbian and English progress separate.
4. Generate a valid `package-lock.json` in a proper npm checkout and update CI to use it.
5. Implement local persistence for progress, XP, missions, theme and translator history, then safe cloud sync after Supabase configuration.
6. Replace emoji/text glyph icons with optimized static 3D-style PNG/WebP assets.
7. Test translator, clipboard, TTS, lessons, scrolling and offline behavior on Android; only claim APK success after an actual native build and install.

## Session log
- Latest continuation: `vocabularyPack2.js` adds 50 Serbian + 50 English entries for workplace, transport, home, weather and basic health; `App.js` integrates the pack. README updated to 150 entries per language (300 total). Commits: `8f770993ec5902a79dc335e6f31b1cb1f8ea6b44` (pack creation), `9e407042e1da57c9d251dde97ea1cbd05248c646` (integration), `3a1b2cc72f81cf897b698cc0463537ca8a0fced2` (Latin spelling correction). README and handoff commits follow. No device/APK test; CI for this new pack still needs checking.
- Latest continuation: `vocabularyPacks.js` commit `d3276d840e97f73dca52d3a68cf771a307a333df` adds 50 Serbian + 50 English A1 entries; `App.js` commit `debc340b837375476010dd3ccfea1786789e6b24` integrates them, bringing the decks to 100 entries per language (200 total). README records the new total. Android bundle CI for these commits is pending; no device/APK test.
- Latest continuation: `serbianLessons.js` commit `6ef36686b8ebc88bc1ccf41e8dc7ded85be7e3b9` adds two structured Serbian A1 lessons; `App.js` commit `7c21c17696fb228b99a1a9c70e1160071d7edbc9` integrates vocabulary, grammar, dialogues, TTS and interactive quizzes in Learn. README commit `12e6ce42eed048572a03999a55fa81c32dbf45ce` documents the feature. CI pending; no device/APK test.
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
