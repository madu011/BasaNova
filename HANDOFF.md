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
- Commit `d2c007ff00b7d47e8351749301779d877c20eaf3` adds `.github/workflows/expo-check.yml`: GitHub Actions installs dependencies, checks Expo package compatibility and exports the Android JS bundle on pushes/PRs to `main`. Follow-up commit `35829c68a80d68109ceab5c3529c4b884fb436c6` removes setup-node npm cache configuration because no committed lockfile exists yet. Workflow has been added but **has not been observed running**, so it is not evidence of a successful build.
- Commit `ac19b9fcfd5258f4416ac085a03cb6e19421561b`: translator now keeps up to 12 recent Sinhala/Serbian pairs in memory and lets the learner tap a history row to restore it. Adds copy-result action with feedback. Commit `3432920c321646c3d9e3223114e0d729b4beb550` adds `expo-clipboard` `~8.0.7` (Expo SDK 54 compatible package line) for native clipboard access. History is session-only and is lost when the app restarts; no local/cloud persistence yet.
- Commit `a7a9895ffc866d5b73b4354244aa474437aa3d4f` adds a dedicated Sinhala-to-Serbian translator tab in `App.js`: multiline Sinhala input, manual translate action, Serbian result, approximate Sinhala pronunciation, and Serbian speech playback. It uses the public MyMemory endpoint on explicit button press and discloses that typed text is sent to the provider. Commit `b829fefc5f6a23570fb9f090ecb5e4bdcd94e3a6` fixes the translator state declaration newline.
- Commit `14eb17d25fa84e68c21e8bcfb7262c55f2fabc87`: added `supabase/migrations/20261117000100_cloud_progress.sql` defining profiles, Serbian/English progress, daily missions and quiz attempts with per-user Row Level Security. Migration is committed but has not been applied to a live Supabase project or SQL-tested.
- `CLOUD_SYNC.md` defines the chosen architecture: Google sign-in through Supabase Auth with private per-user Supabase Postgres progress storage, RLS isolation, local offline queue and restore on reinstall/device change. This is documentation only; no live auth or cloud sync exists yet.
- Commit `2cec16662241b277a5c1cd7f3ceb6c2acb9c0560`: hoisted daily mission labels to module scope and removed an accidental literal escaped-newline sequence from the App component's static metadata block. This reduces per-render allocation and repairs a confirmed source-text defect; no build test has yet been run.
- Commit `f70430d4605b184a436bbe61d77a8a34468d6d38`: enabled Android clipped-subview scrolling and hid scroll indicators on the two main ScrollViews.
- Commit `7a238294f8386cbec663975b1a229b171f358a1b`: added `PERFORMANCE.md` with low-end Android performance rules, including static optimized 3D-style icons rather than real-time 3D rendering.
- Commit `d0f8dd1507f08c8f8f5b3c00f10b0b78efd3b4c1`: improved consistent emoji iconography across the app: emoji navigation icons, mission-specific icons, CEFR level progression icons, and visual markers for lesson method, speaking, alphabet, examples and progress.
- Latest feature commits on `main`:
  - `d14108f0df6d2d5257d706bf393a01c9e87c3065`: added styles for Serbian alphabet rows and localized speech labels.
  - `bd5ae93c8224e261721961be554dc5da4571b74e`: added `curriculum.js` with the A1, A2, B1, B2, C1 and C2 roadmap and common lesson method.
  - `be40cca6968be9524942eb1f2da56371bce9bcc0`: displays the six-level roadmap and lesson method in the Lessons tab for both languages.
  - `4f9069ecf7f7713c410ba8ac0540ed3d75a3b3d4`: adds selectable light/dark themes and daily learning missions with XP.
- `App.js` is React Native + Expo and uses `expo-speech` for device text-to-speech.
- The app has Serbian and English starter vocabulary (20 entries each), Sinhala meanings/pronunciation hints, sample dialogues, Serbian alphabet reference and sound guide, and Home, Speaking, Lessons, Sinhala-to-Serbian Translator, AI Teacher preview and Progress tabs.
- Translator limitation: translation depends on internet and the public MyMemory Sinhala-to-Serbian language pair/service availability and rate limits. Sinhala pronunciation is generated by the existing approximate transliteration helper, not a phonetic engine. No live API request or device test has been run yet.
- Light/dark theme switching is implemented in the header. Theme choice currently lives in component state and resets when the app restarts; persistent theme settings are not implemented.
- Daily missions currently offer three manually checkable learning goals and award 10 XP each. Mission completion and XP are component state only; no real calendar-based streak, daily reset, or persistent achievement system exists yet.
- The six-level roadmap is present, but the actual lesson content for all A1-C2 levels is **not yet authored**. The current vocabulary/dialogues remain starter material.
- Progress is component state only; persistence across app restarts has not been implemented.
- Google account sign-in and cloud restore are not yet implemented. `CLOUD_SYNC.md` defines the architecture: Google OAuth identifies the learner; Supabase Auth/Postgres stores progress per user with RLS. No Supabase project URL/key or Google OAuth configuration has been supplied/configured.
- Speech playback uses device voices (Serbian `sr-RS`, English `en-US`); availability/quality depends on installed device voices.
- Sinhala transliteration fallback is approximate, not exact pronunciation.
- `package-lock.json` was checked on `main` and was not found.
- Low-end performance direction: use static pre-rendered 3D-style PNG/WebP icon assets, correctly sized and reused; avoid live 3D, large animation libraries, video backgrounds, heavy blur and continuous animation. See `PERFORMANCE.md`.
- App.js now sets `removeClippedSubviews`, hides vertical scroll indicators and disables Android overscroll glow on both main ScrollViews. Static mission labels are now module-level constants rather than recreated on every render. These are source-level optimizations only; actual smoothness is not measured.
- The alphabet row styles that were missing are now defined in the dynamic theme stylesheet.
 
## Verification status — be honest
- GitHub confirmed the commits listed above.
- Source inspection confirmed the theme provider, dynamic palette-based stylesheet, header toggle, mission checklist, XP display, and curriculum roadmap wiring are present.
- **No dependency install, JavaScript/JSX parser check, Expo export/build, APK build, or Android device runtime test has been confirmed.** Do not describe the app as build-verified or fully working.
- Because there is no lockfile, dependency installation/build reproducibility needs attention. Add and commit a valid lockfile using the appropriate npm workflow when a suitable environment is available.

## Next task — resume here
1. Check the GitHub Actions run for `expo-check.yml`; fix any dependency/JSX/export errors it reports. Once the dependency graph is validated, commit a real `package-lock.json` generated by npm in a proper checkout and switch CI to `npm ci` against that committed lockfile.
1. Generate and commit a package lockfile with the Expo SDK 54-compatible dependency graph, then run a JSX parser and Expo export/build. Check the `expo-clipboard` version alignment with `npx expo install --check` / `npx expo install --fix` in a proper environment.
2. Test copy action and translator history on Android; verify that the translation endpoint returns useful Sinhala-to-Serbian results and handle service rate limits clearly.
1. Test the translator API response for Sinhala-to-Serbian, improve handling of unsupported language pairs/rate limits, and verify Serbian speech playback on Android.
3. Consider persistent phrase history after local storage and Google cloud sync are implemented; do not imply current history survives app restart.
1. Configure a Supabase project and Google OAuth provider, then provide only the Supabase project URL and publishable/anon key via secure app environment settings (never request service-role keys or OAuth secrets in chat).
2. Apply and test `supabase/migrations/20261117000100_cloud_progress.sql` in the owner's Supabase project. Then implement Expo-compatible Google sign-in, Supabase Auth session persistence and client integration following `CLOUD_SYNC.md`.
3. Add cloud progress load/save and offline queue; verify restore after reinstall and cross-account data isolation.
4. Add optimized static 3D icon assets (small transparent PNG/WebP files) and replace emoji/text glyph navigation/icons without adding a heavy runtime 3D dependency. A generated 3×3 icon concept sheet exists only as a visual reference and has not been integrated.
5. Validate scroll clipping and image rendering on a low-end Android device; disable clipping on any screen where it causes missing content.
6. Run a real JSX parser and Expo export/build; the accidental escaped newline was removed by source inspection but not parser-verified.
3. Validate the current `App.js` JSX and Expo configuration with a real parser/export build; repair any confirmed issues.
4. Persist theme preference, learning progress, mission completion and XP locally (e.g. AsyncStorage, after adding the compatible Expo package and lockfile).
5. Make daily missions genuinely actionable: link each mission to the relevant lesson/dialogue, track actual completion, and implement a date-aware daily reset/streak without falsely awarding progress.
6. Build actual Serbian A1 lessons first with structured reusable lesson data/components. Every Serbian expression must show spelling, Sinhala pronunciation, Sinhala meaning, audio, explanation, examples and exercises. Then implement the same full teaching method for English and progress through A2-C2.
7. Update this file with exact commits, tests and next task after each work session.

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
