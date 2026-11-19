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
- **Build Serbian and English in parallel from now on.** Do not finish Serbian first and postpone English. Every new lesson batch, unit, topic, revision set, and major learning feature must be created for BOTH languages in the same development cycle, with equivalent learning objectives and comparable depth.
- Pair lessons by the same practical topic and CEFR level (for example, introductions in Serbian and English, then greetings, numbers/time, café orders, directions, accommodation, and workplace communication). Adapt grammar and natural expressions correctly for each language; do not force literal translations where they are unnatural.
- For each paired batch, include vocabulary, Sinhala-script pronunciation, Sinhala meaning, grammar, examples, dialogues, listening, speaking prompts, reading/writing where appropriate, and quizzes in both languages. Keep language-specific progress separate.
- Before committing a paired lesson batch, check that both language files contain the corresponding topic and comparable exercise coverage. If one side cannot be completed in that cycle, record the exact gap and do not describe the batch as complete.
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

## Progress snapshot — 2026-11-18

**Estimated overall app completion: 50%.** This is a planning estimate of product scope completed, not a measured code percentage or a guarantee that every listed feature has passed device testing. Recalculate it when substantial features are implemented.

| Workstream | Estimated completion | Notes |
|---|---:|---|
| App foundation, navigation and visual shell | 70% | Expo app, language modes, core tabs and theme are present; final UI polish and accessibility remain |
| Vocabulary and reference library | 85% | README records 577 Serbian + 575 English standard vocabulary entries after pack 12; A–Z dictionary, search and saved-word filter exist |
| Structured language curriculum | 33% | 39 Serbian + 39 English structured A1 lesson objects are present, with visible numbering through lesson 42; A1 final coverage audit and cumulative assessments remain, and A2–C2 lesson content is outstanding |
| Learning interactions | 73% | TTS, paired lesson quizzes/listening exercises, authored Sinhala readings, mixed revision and vocabulary examples exist; speaking feedback and broader assessments remain |
| Progress persistence and accounts | 40% | AsyncStorage saves selected language, lesson/revision checks, vocabulary, XP/missions, theme and translator history locally; account and cloud sync remain outstanding |
| Advanced services and offline support | 20% | Translator and preview-level AI area exist; live AI tutor, speech recognition and complete offline packs are not implemented |
| QA, native build and release readiness | 15% | Expo validation and Android JS bundle export pass on current source; native debug APK workflow has been added and is running, but no APK artifact or device installation is yet verified |

**How the estimate is weighted:** app foundation 15%, vocabulary/library 15%, structured curriculum 30%, learning interactions 15%, persistence/accounts 10%, advanced services/offline 10%, QA/release 5%. Applying the workstream estimates gives approximately 47%.

**Current learning-content count:** 39 Serbian A1 lesson objects and 39 English A1 lesson objects; visible lesson numbering now reaches lesson 42. Paired topics include food/cooking, weather/clothing, restaurant ordering, customer service, phone calls, parcels and doctor/health. Lesson 26 in each language contains eight vocabulary entries, grammar phrase cards, four examples, a six-line dialogue, four practice questions and one listening task. The Serbian listening and mixed-revision arrays need continued array-to-lesson order checks as content is added. Earlier lessons still need a complete topic-by-topic audit; do not assume the entire syllabus is fully aligned.

**Not yet verified:** latest full CI run, native Android APK build, APK installation, physical-device runtime, complete offline behavior, and end-to-end persistence of lesson progress. Do not treat the 46% estimate as build/test certification.

## Current verified state

- Latest vocabulary deck count after pack 11 integration: 577 Serbian + 575 English = 1,152 standard entries. Packs 8 and 9 were deduplicated against earlier packs; pack 10 adds applications/documents/workplace language, pack 11 adds banking/payments/personal finance, and pack 12 adds restaurant service, food ordering and customer requests (25 entries per language). Standard vocabulary remains separate from slang.
- Commit `ffe98f1247aee6751e86e2606b01bc1046a95614` adds `slangVocabulary.js` with 8 educational entries per language. Entries include Sinhala pronunciation, meaning, contextual examples, strength labels and usage cautions. Explicit sexual slurs and graphic language are excluded.
- Commit `4646263721b1317dc650814d78b587c3aa0b971b` adds a dedicated Slang / Bad Words toggle inside Learn. A follow-up fix `fdd7323fa4d38c9e67913ad052ce3bc106fe8f1b` corrected the conditional JSX fragment boundary so standard lessons and vocabulary are cleanly separated from slang mode; each entry can play TTS.
- README update commit: `aa2be6711183323ff7f86db343ba8e0176ebfbb4`.
- Slang feature CI runs `44117520522` (data), `44117594673` (UI) and `44117631242` (README) completed successfully. The JSX correction run `44117689611` and latest handoff run were in progress at last check. No local dependency install, native APK build or Android device test was run.

- GitHub Actions runs [44110771975](https://github.com/madu011/BasaNova/actions/runs/44110771975) and [44110805124](https://github.com/madu011/BasaNova/actions/runs/44110805124) both passed dependency installation, Expo compatibility and Android JavaScript bundle export for the 50-word-per-language update.
- Commit `6ef36686b8ebc88bc1ccf41e8dc7ded85be7e3b9` adds `serbianLessons.js` with four structured Serbian A1 lessons: self-introduction/name questions, greetings/polite responses, and ordering at a café, and counting numbers from 0 to 1,000. Each lesson includes Sinhala objectives, vocabulary, approximate pronunciation, grammar explanation, examples, dialogue lines, TTS actions and three interactive multiple-choice questions.
- Commit `7c21c17696fb228b99a1a9c70e1160071d7edbc9` integrates these lessons into the Learn tab and adds quiz selection/answer feedback UI. Serbian A1 lessons display when Serbian is selected; English currently shows an honest in-progress notice rather than falsely claiming completed lesson content.
- README update commit: `12e6ce42eed048572a03999a55fa81c32dbf45ce`.
- The lesson code has been source-edited and committed; CI for the latest App.js integration is not yet confirmed. No physical-device testing has been done.
- Historical vocabulary checkpoint: after pack 7 the deck had 432 Serbian + 429 English entries (861 total). Packs 8 and 9 increased this to 502 Serbian + 500 English; pack 10 to 527 Serbian + 525 English; pack 11 to 552 Serbian + 550 English = 1,102 standard entries. Categories include everyday life, shopping, transport, work, health, travel, household topics, job applications, workplace communication, banking and personal finance.
- Progress, XP, missions, theme and translator history remain in-memory only; they reset on app restart. No live Google login or Supabase cloud backup exists.
- No committed `package-lock.json`; CI currently generates a temporary lockfile.
- Custom static 3D-style icon assets are not integrated; current UI still includes emoji/text glyphs.
- Translator MyMemory API, Android clipboard, TTS and offline behavior have not been live/device tested.

- Previous paired A1 batch (before the three-topic expansion recorded below): 9 Serbian + 9 English structured lessons. Added café ordering and everyday requests/help in both languages, each with 9–10 vocabulary items, grammar terms, examples, six dialogue lines, four quiz questions, and listening practice. Serbian listening items were inserted at the matching lesson indexes. Serbian renderer now prefers explicitly authored Sinhala readings for vocabulary, examples and dialogue lines; English lesson progress counts listening checks. Commits: `58de53a3f74a022a251e61463918dda1759c1da8` (Serbian lessons), `34427bcf776c392a7c4aa411aadad6c75f3d0d63` (English lessons), `a35b05e3e5f955d3dc9cfb7aa2ff1ef9fab16566` (Serbian listening checks), `bd65cccf5dfe02bd843e52c52912109e8753aae9` (listening order alignment), `9043939bfbbb1169255010515393f686b4ee716e` (Serbian authored reading support), `96adc0ab85e95694386bc8345d9bae33b07ad69b` (English listening progress count), `176600b20b47e21915838ce32fe037f3bf9cde14` (README). Source-level verification confirmed 9 lesson IDs per language, both new paired topics, 13 Serbian listening prompts in correct lesson order, and the renderer changes. GitHub status checks for the last App.js commit returned no status entries; no local parser, Expo bundle, native APK build, or Android device test was run. Sinhala readings are learner approximations and need native-speaker review.

## Verification status — be honest
- Runs `44110771975` and `44110805124` passed the Android JavaScript bundle export before the new structured lesson feature.
- Latest lesson-content commits have not been confirmed by a fresh CI run. The GitHub combined-status lookup for App.js commit `4cdfd12acffd63d3ee2408da33707277caf7eed9` returned no status entries. Source-level counts were checked, but no local parser, Expo bundle, native APK build or device test was run.
- A successful Android JS bundle export is not a native APK build, installation or physical-device runtime test.
- No live API, Supabase migration, Google sign-in or Android device tests have been completed.

## Next task — resume here
1. Continue synchronized B1 development in batches of ten: add paired Serbian and English lessons 21–30, keeping the full lesson structure and Sinhala pronunciation/meaning support.
2. After B1 lesson 50 is complete, audit the full B1 sequence for topic progression, repeated/weak vocabulary, paired objectives, grammar progression, natural target-language phrasing, Sinhala readings, and exercise coverage.
3. Add cumulative B1 revision and a scored end-of-level listening/comprehension assessment for both languages; clearly distinguish speaking self-practice from automatic speech grading.
4. Audit target-language phrases embedded in Sinhala grammar and quiz explanations and ensure important phrases have Sinhala-script readings and individual TTS playback.
5. Add saved local progress for lesson checks, listening results and mixed revision in a language-separated way; then design spaced review from saved mastery.
6. Verify current GitHub Actions/Android build workflow and fix failures before claiming build readiness; no APK or physical-device success is established by the lesson-content work.
7. Generate a valid `package-lock.json` in a proper npm checkout and update CI to use it.
8. Implement local persistence for progress, XP, missions, theme and translator history, then safe cloud sync after Supabase configuration.
9. Test translator, clipboard, TTS, lessons, scrolling and offline behavior on Android; only claim APK success after an actual native build and install.

## Session log
- 2026-11-17: Added a six-question English A1 mixed revision test beneath the structured lessons. It reviews greetings, simple responses, time, shopping, directions and workplace communication. Each question has English TTS replay, Sinhala-script pronunciation, three Sinhala meaning options and feedback. App commit `5df2a170eccddd20537816b63aa27d47a411946d`; README commit `991ed359375bc0c956cac73b5c7696c6c3992adf`. Results use existing in-memory quiz state and are not persisted. No Android device test or APK build.
- 2026-11-17: Continued Serbian grammar audit. Added grammar phrase cards for additional snippets not previously listed in `grammarTerms`: “Dobro sam, hvala”, “Kako ste?”, “Želim čaj”, “Račun, molim”, gender forms “jedan/jedna/jedno” and “dva/dve”, plus “jedan kilogram”, “dva kilograma” and “molim vas”. Existing Serbian renderer displays each term's Sinhala-script reading, Sinhala meaning and individual Serbian TTS control. Data commit `b6d2faeb3a8430ece1b31dc4a8a54736d29aa2a1`; README commit `b8a5b5f58eaa969603820c01f6ee208dd1122813`. These Sinhala readings are approximate. No Android device test or APK build.
- 2026-11-17: Added one English listening-discrimination task to each of the six structured English A1 lessons. Each task plays/replays a sentence using existing English TTS, offers three Sinhala meaning choices, checks the answer, and reveals Sinhala-script pronunciation readings after checking. Included listening checks in the lesson's checked-question count. Data commit `4bc6e89bf1e561bf98ec503cddf2217d9f6ab640`; renderer commit `1b9ffc51749458580146770fa9b880d084ba8177`; count commit `78bc01c5c5c9950b0a19f2d9195f620836168402`; README commit `c69119057cdc362db43baaf16da3f3a15dc20bfd`. These are session-only checks, not saved mastery. No Android device test or APK build.
- 2026-11-17: Audited Serbian A1 lesson renderer and structured content. Serbian quiz prompts are authored in Sinhala; Serbian answer choices already had individual Serbian TTS controls, but did not display Sinhala-script pronunciation. Updated the Serbian quiz renderer to display the existing approximate `pronounceSinhala()` reading under each Serbian option. App commit `5e4bd627a60821cbcd822bbb56183e58da7029dd`; README commit `c0c8fc5a2c7beed1b375f1b73a0f842934b23f70`. This improves quiz reading support; it does not manually correct all Serbian pronunciation approximations or add a separate reading to Sinhala-only quiz prompts. No Android device test or APK build.
- 2026-11-17: Added English A1 lesson 6, “Workplace communication”, in `englishLessons.js`. Covers workplace introductions, managers/colleagues, day/night shifts, breaks, asking for help, saying something is not understood, asking someone to demonstrate, safety reminder and task completion. Vocabulary, grammar terms, examples, dialogue and quiz options include manually authored Sinhala-script readings and meanings; existing Learn renderer provides individual English TTS controls. Four interactive quiz questions included. Lesson commit `539defd5de3fd87a1d333312197b3db2aa7e999a`; README commit `7edda56cb7a2b5aed216586a15141eaf7119792e`. English A1 now has six structured starter lessons. No Android device test or APK build. Next: audit Serbian quiz prompts and grammar snippets for target-language text missing Sinhala reading/audio; then add English A1 revision/listening practice.
- 2026-11-17: Added English A1 lesson 5, “Directions and transport”, in `englishLessons.js`. Covers asking where places are/how to get there, left/right/straight directions, near/next to/across from, bus stops, train stations, tickets and platforms. All vocabulary, grammar terms, examples, dialogue lines and quiz options include manually authored Sinhala-script readings and meanings; existing renderer supplies separate English TTS controls. Four interactive quiz questions included. Lesson commit `b64207f91cace6dd5967f017de7308390b29da34`; README commit `3f730c74b14872158c65e96d4bf74552bf671f17`. English A1 now has five structured starter lessons. No Android device test or APK build. Next: add English A1 workplace communication lesson (introducing yourself at work, shifts, asking for help, simple instructions); audit Serbian quiz prompts and grammar snippets.
- 2026-11-17: Added English A1 lesson 4, “Shopping and prices”, in `englishLessons.js`. Covers polite requests, asking single/plural prices, one kilo/half a kilo, water/bag requests, cheap/expensive, cash/card payment and receipts. Vocabulary, grammar phrases, examples, dialogue and quiz choices have manually authored Sinhala-script readings and meanings; the existing Learn renderer supplies separate English TTS controls. Four interactive quiz questions included. Lesson commit `f3f12a9d0fe1710fdb74da31ada20532fa289407`; README commit `d26edaedf8f2e09c099dbd1cae29ccdb989e3056`. English A1 now has four structured starter lessons. No Android device test or APK build. Next: add English A1 directions/transport lesson, then workplace communication; audit Serbian quiz prompts and grammar snippets.
- 2026-11-17: Added English A1 lesson 3, “Numbers and time”, to `englishLessons.js`. It teaches basic numbers, asking the time, o'clock, half past and quarter past; includes Sinhala-script readings and meanings for vocabulary, grammar terms, examples, dialogue lines and quiz answer options, with the existing renderer providing individual English TTS controls. Four interactive quiz questions included. Lesson commit `41b97399d7a3fc0e6aa972ec3e11d46e248204f1`; README commit `7b0ff1b2cc4e7ed3e69e36103e59c1b665600b8a`. English A1 now has three structured starter lessons. No native APK build or Android device test. Next: add English A1 shopping lesson with quantities/prices and polite requests, then directions and workplace communication; audit Serbian quiz prompts/grammar snippets and review pronunciation quality.
- 2026-11-17: Added Sinhala-script approximate pronunciation display for every English vocabulary-deck example sentence in the shared Learn vocabulary card. Existing per-entry `sound` field continues to display the headword reading; separate TTS controls already play the headword and example sentence in English. Added a deterministic English-to-Sinhala grapheme approximation helper with common English digraph/vowel patterns and a few exact phrase overrides. App.js commit `64875de127d86fc6792c89272230fa009faf9904`; README `bc70c886c0c8b011fedfc6b6e346bf9d136dbbda`. Previous English A1 commits `a53d88d52913196bf8e3b003573836d51c23a4eb` and `0bd90d0761d84fa3fca310300f82d84f23278c30` passed CI runs `44121485117` and `44121552555`. Current App.js/README validation not yet complete. No Android device test or APK build. Important caveat: generated English example readings are approximate grapheme-based guides, not phonetic transcription; review and expand exact readings for irregular pronunciation and silent letters. Next: add English A1 numbers/time lesson with carefully authored readings and listening/quiz practice, then continue shopping and directions; audit Serbian quiz prompts/grammar text.
- 2026-11-17: Started structured English A1 content. Added `englishLessons.js` with two Sinhala-taught beginner lessons: greetings/self-introduction and asking/responding to “How are you?”. Each lesson includes vocabulary, manually authored Sinhala-script readings, meanings, example readings, grammar phrase readings, dialogue readings, per-item English TTS controls and quizzes whose English answer choices each have speaker controls. Integrated the English lesson renderer into Learn while retaining the existing Serbian lessons. Commits: lesson data `a53d88d52913196bf8e3b003573836d51c23a4eb`; App.js `0bd90d0761d84fa3fca310300f82d84f23278c30`; README `a398c0dfb118d3f7c62ae3f21660ba56f5e5c632`. Source edits only; CI not yet checked for these commits, no local Expo export, Android device test or APK build. Important: English A1 currently has only these two starter lessons, not a complete A1 course. Next: extend explicit Sinhala-script readings and speaker controls to English vocabulary-deck examples, then add further English A1 lessons (numbers/time, shopping, directions, work communication) and audit all Serbian quiz prompt/grammar snippets.
- 2026-11-17: Extended per-item pronunciation/audio support into the grammar section of all five existing Serbian A1 lessons. Added explicit Sinhala-script reading glossaries for key Serbian grammar patterns (introductions, greetings, café requests, compound numbers and market quantities); Learn now renders each grammar phrase with its Sinhala reading, meaning and its own speaker control. Existing examples/dialogues have explicitly labelled Sinhala-script readings and their own audio actions. Commits: `f7dc025db650308cadf7dce573f0cec5ee134aaf` and `2ad74c43fd2521a01844222816645ad631d374cd` (lesson data), `35457b94ed727c0a29e33a92607dacbcb8f9a62f` (renderer), README `fa0836d790f20d34465c62a043a480807b306b49`. CI for the previous pronunciation change passed runs `44120433562` and `44120474350`; current lesson/renderer commits are awaiting validation. No Android device/APK test. Next: apply the same item-by-item Sinhala reading/audio model to English vocabulary examples and build structured English A1 lessons; then audit Serbian quiz prompts and all embedded target-language snippets.
- 2026-11-17: Improved Serbian A1 lesson pronunciation coverage in the shared Learn renderer. Vocabulary cards now show a clearly labelled Sinhala-script reading for the headword and the example sentence, with separate speaker controls for each. Quiz answer options that contain Serbian text also have their own speaker control. Existing example and dialogue audio controls remain. App.js commit `354732ee9eaea0ac74391bf8ed7b13b4dad53e9d`; README commit `0cea5f3812acaa006d3181b7b5e33551e94c7c54`. This is a source-level change only; CI for this update is pending and no Android device/APK test was run. Note: Sinhala-script readings are approximate for Serbian sound contrasts and need a dedicated pronunciation review; grammar explanations that quote Serbian inside Sinhala prose still need phrase-level extraction/display. Next: extend the same explicit per-item reading/audio pattern to all English lesson surfaces and audit every lesson field, including grammar examples and quiz prompts/options.
- 2026-11-17: Added Serbian A1 Lesson 5, market shopping. Covers fruit/vegetable requests, kilogram/half-kilogram/litre quantities, polite requests, price and total questions, a practical market dialogue, 9 vocabulary/phrase cards, 4 examples and 4 quiz questions. Existing Learn renderer supplies Sinhala pronunciation approximation and Serbian TTS for vocabulary, examples and dialogue. `serbianLessons.js` commit `aa9701ed451ee866d29dbfbf6cecc5734c6588ea`; README commit `251d0b3ae68b82654058bd6f90a27d4a324ebd77`. CI pending; no device/APK test. Next: Serbian A1 travel/directions lesson.
- 2026-11-17: Improved Serbian A1 Learn navigation. Lesson cards now expand/collapse; the first lesson opens by default, each header keeps the title and objective visible, and the header reports checked quiz questions (e.g. 1/3). This is a session-only UI state and quiz checks are not saved across app restarts. App.js commit `18bd19b896f21e583ec27d243366cb6d56ee0b86`. CI triggered; no device/APK test. Next: add Serbian A1 market/shopping lesson.
- 2026-11-17: Added Serbian A1 Lesson 4: numbers and counting. Covers 0–20, tens, 100, 200, 300 and 1,000; compound-number order (21, 22, 35), prices, a short shop dialogue and 3 quiz questions. Includes 32 number words with Sinhala meanings; current Learn renderer automatically shows approximate Sinhala pronunciation and Serbian TTS. Commits: `57c6d30a2ff5c07ff9041ad46c342367dd1d6373` (lesson), `3f2907561d4d693d802d0f7b1be287abb5c94060` (correct `Dvesta` spelling). README `fcab56361ddb7237e6f2c45f3c0c294e9504e4c8`. CI/device/APK checks pending/not run. Next: improve lesson navigation with collapsible cards and progress.
- 2026-11-17: Added Serbian A1 Lesson 3, ordering at a café, with 8 vocabulary/phrase cards, Sinhala grammar explanation, examples, a 6-line dialogue and 3 quiz questions. Commit `5456e238ec12f46932b1927438822fc641ba521f`. README update `504b734e2d57a73e687b811dd6495d891cce03b3`. Source integration uses the existing Learn rendering, which automatically supplies Sinhala pronunciation approximation and TTS for each word. CI pending; no device/APK test.
- 2026-11-17: Expanded standard vocabulary to 1,002 entries: 502 Serbian + 500 English. Pack 8 adds food, shopping, city services, travel and communication; duplicates against packs 1-7 were removed, leaving 36 Serbian + 38 English. Pack 9 adds specialist professions; duplicate `Manager` removed, leaving 34 Serbian + 33 English. Commits: `02e4eb7f392a046fb6d6f1dca65f846a46fc8cfb` (pack 8), `9c97c4919bc92711c0f6f3ee022fc4c95b8c2c20` (pack 8 dedupe), `876c2edf58aa13e10371043040369d93291b40e3` (pack 9), `99850568328e50b3b86158a7fdd08188d10e683f` (pack 9 dedupe), `1c336302196746b2d8bac662803cf1779e2c880b` (App integration), `d2b492035bc225a06ad5f83999f1b12c7acda7a4` (JSX closure fix). README `'+ru.result.commit_sha+'`. Initial CI runs failed on a missing closing JSX fragment in the Learn screen; fix committed as `d2b492035bc225a06ad5f83999f1b12c7acda7a4`, with a new validation run queued. No device/APK test.
- 2026-11-17: Added a separate educational Slang / Bad Words module. `slangVocabulary.js` contains 8 Serbian + 8 English entries with Sinhala meanings/pronunciation, examples, strength labels and cautions. `App.js` adds a Learn-screen toggle so slang is not mixed into the standard deck. Commits: `ffe98f1247aee6751e86e2606b01bc1046a95614` (data), `4646263721b1317dc650814d78b587c3aa0b971b` (initial UI), `fdd7323fa4d38c9e67913ad052ce3bc106fe8f1b` (JSX conditional fix), README `aa2be6711183323ff7f86db343ba8e0176ebfbb4`. GitHub Actions triggered but latest observed runs were queued/in progress; no build pass or device test claimed. Next: verify CI result. Next: check CI and continue standard vocabulary expansion.
- Latest continuation: `vocabularyPack7.js` adds 48 Serbian + 46 English unique entries for healthcare, appointments, symptoms, household cleaning and appliances. Duplicate headwords removed: Serbian `Lekar`, `Apoteka`, `Lek`; English `Doctor`, `Pharmacy`, `Medicine`, `Cold`, `Clean`. Corrected mixed-script `Peglati` and a Sinhala pronunciation typo. `App.js` integrates pack 7. Commits: `6d5c843134b064987909ed01ee9950fc1cebcce5` (pack), `9633b7b2715287ebd46087d7efabab650d32ac14` (integration), `ff10dbc271258b8e09b0bd9fb80455f840250707` (deduplication/corrections). Verified arrays: base 110 Serbian + 110 English; packs 322 Serbian + 319 English; total 432 Serbian + 429 English = 861 entries. README and handoff updated. CI pending; no device/APK test.
- Latest continuation: `vocabularyPack6.js` adds 45 Serbian + 45 English entries covering travel, road safety, tools and nature. Duplicate headwords found against earlier packs were removed from the new pack; a final cross-pack audit still finds `Cipele` once duplicated in Serbian and `Shoes` once duplicated in English, while `Open` remains an intentional distinct part-of-speech entry. `App.js` integrates pack 6. Commits: `ebb693159a2196736c1e13746a0764d75c725262` (pack), `ee3a37ff814911442db202ace4649998bda1699e` (integration), `186e364aa8574bbae5f3f73b49d20d9559988121` (deduplication). Verified base arrays: 110 Serbian + 110 English; themed packs: 274 Serbian + 273 English; combined 384 Serbian + 383 English = 767 entries. Earlier README/handoff totals were undercounted and are corrected in this commit. Latest CI pending; no device/APK test.
- Latest continuation: `vocabularyPack5.js` adds 36 Serbian + 36 English unique entries for family, feelings, cooking and meals after removing 28 duplicate headwords and correcting a mixed-script spelling. `App.js` integrates pack 5. Commits: `166a61e32fbf46bee88911389d0bf7db3ea620b5` (initial pack), `83581e17770a6777861d5ea8da2e1c692e13b19d` (deduplication/spelling), `362bb2ca4417537703d6402877ab68a6379df7e3` (integration). README and handoff updated. CI pending; no device/APK test.
- Latest continuation: `vocabularyPack4.js` initially contained 50 Serbian + 50 English entries for money, public places, technology and time expressions; 7 Serbian and 8 English duplicate headwords were removed, leaving 43 Serbian + 42 English new entries. `App.js` integrates pack 4. Commits: `2c2f6d2da9961f358623add421dd36e6b73cfb93` (pack), `c45a76e2a4f98cf568a2c6979a30a1ae414cd3e1` (integration), `52ad18d2cbd4e7b38b7cf71ba7099ab3a32aae4f` (deduplication). README and handoff updated in this session. Latest CI pending; no device/APK test.
- Latest continuation: `vocabularyPack3.js` adds 49 Serbian + 49 English entries covering clothing, colours, daily verbs and useful adjectives; repeated Cipele/Shoes headwords removed. `App.js` integrates pack 3. Commits: `63a338ee2a1b482a0abcbb53a4e89191b6eb21a6` (pack), `4bd17f3eac637ee618c5ddb051b84f1aeaa5b55c` (integration), `52d5d0a965902b0172b31b9fe6dd0ec81c8db8f4` (deduplication). README and handoff updated in this session. Android bundle CI for latest commits pending; no device/APK test.
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


- 2026-11-17: Added Serbian A1 lesson 6, “Workplace communication”, in `serbianLessons.js`. Covers workplace introductions, working hours and shifts, colleagues/supervisors, asking for help and requesting repeated instructions. Includes Sinhala meanings, existing renderer-generated Sinhala pronunciation approximations and Serbian TTS controls, examples, a dialogue and four quiz questions. Initial lesson commit `8543cc1815313627d4a666d080ad028d0f172552`; spelling correction commit `30f9e6c3031603649c374afa1ced95a0a88990ed`; README commit `9b23dfdfaf78821cccc0c6ea78387233e045c6eb`. No APK build or Android device test. CI for these latest commits is pending verification. Next: Serbian A1 occupations/professions lesson, then listening discrimination and mixed revision.


- 2026-11-17: Added Serbian A1 lesson 7, “Occupations and professions”, in `serbianLessons.js`. Covers common occupations (waiter, cook, driver, shop assistant, worker, teacher, doctor, student and programmer), asking about a person's job, self-introduction and common masculine/feminine job-title pairs. Includes Sinhala meanings, existing renderer-generated Sinhala pronunciation approximations and Serbian TTS controls, examples, a dialogue and four quiz questions. Lesson commit `7f0d9d033e41261bf007e7abce1f0cc4550e9052`; README commit `2c250ee97aabdd7064f885f948a819d1e5b5dd78`. No APK build or Android device test. CI validation pending. Next: add Serbian A1 listening discrimination and mixed revision across the seven current lessons.

- 2026-11-17: Added Serbian A1 listening and revision practice in `serbianRevision.js` and `App.js`. There is one listening-discrimination task for each of the seven Serbian A1 starter lessons, with Serbian TTS replay, three Sinhala meaning options, feedback and approximate Sinhala-script readings/audio controls for answer choices. Added a seven-question mixed revision test sampling introductions, greetings, café ordering, numbers, market quantities, workplace communication and occupations. Commits: revision data `c76aa2b200bd52b4e0f12ec3335894b1b00a02b6`; Sinhala reading corrections `4befa17d9262d484038853a785e2b574bef35a65`; App UI `bfee336fc5bb445d1a015a583d38f915861866f0`; follow-up lesson progress-count fix `a732f9a08076c70fb078b1f5bbc0752c79de2edc`; README `d5145cb1d3eb9fbb49a61adcf1d75111e97056f4`. Checks are session-only and not persisted. Sinhala readings are approximations; some need native-speaker review. No APK build or Android device test. Latest CI for these commits must be checked after this handoff commit. Next: audit Serbian A1 phrases/readings/audio, especially occupations and workplace, then continue practical A1 lessons.

- 2026-11-17: Audited the seven existing Serbian A1 lesson surfaces. The shared Learn renderer supplies individual Serbian TTS and approximate Sinhala-script readings for vocabulary, examples, dialogue lines and target-language quiz choices; grammar phrase cards already contain explicit Sinhala readings and meanings. Some Serbian snippets remain embedded inside Sinhala grammar explanations and are not yet separate audio cards; readings remain approximations requiring native-speaker review. Added Serbian A1 lesson 8, “Directions and transport”, in `serbianLessons.js`: asking where places are, left/right/straight directions, near/far, bus and railway stations, and requesting a ticket. Includes 10 vocabulary entries, six explicit grammar phrase cards/readings, four examples, a six-line dialogue and four quizzes. Existing renderer supplies individual Serbian TTS and Sinhala readings on lesson items. Extended `serbianRevision.js` listening and mixed revision with an eighth directions item. Commits: lesson `faeca3daba8978dc93ac1e64e152e5d13cce9d2d`; revision `8d1464932e2db2578f7df0b93c022295686805ba`; README `00aac81bfcced4b29f54ded0f3761ea4987686fb`. No Android device test or APK build. CI for this session's commits must be checked. Next: audit embedded Serbian snippets in grammar/explanation text, improve manually authored Sinhala readings, then add A1 appointments and public-transport schedule lesson.

- 2026-11-17: Added Serbian A1 lesson 9, “Appointments and transport schedules”, in `serbianLessons.js`. Covers booking/rescheduling an appointment, asking the time, bus departure times, delays and timetables. Includes 11 vocabulary entries, seven explicit grammar phrase cards with Sinhala readings/meanings, four examples, a seven-line dialogue and four quizzes. Extended `serbianRevision.js` with a ninth listening item (bus departure time) and a ninth mixed-revision item (booking an appointment). Commits: lesson `779fb150b985fc05a13af2bd948b80743750d24c`; revision `28edac54296bbdf6d92caab5882047d8b82d1371`; README `119455449e221cd6d387641a0a99009e5ab92e00`. Existing renderer provides individual Serbian TTS and approximate Sinhala-script readings on lesson items; the new listening item has explicit Sinhala option readings/audio through existing UI. Session-only progress remains unsaved. No Android device test or APK build. CI for this session's commits must be checked. Next: audit target-language snippets embedded in Sinhala grammar/explanation and quiz explanation text across all nine Serbian lessons, then add practical everyday services/accommodation content.


- 2026-11-17: Continued Serbian pronunciation coverage and A1 content. Added 13 phrase-level Sinhala-reading grammar cards across existing grammar sections in serbianLessons.js; the shared renderer supplies each grammar term's Sinhala meaning, approximate reading and individual Serbian TTS. Added Serbian A1 Lesson 10, “Accommodation and everyday services”: asking for available/single/double rooms, making a booking, nightly prices, address/key/internet, and reporting a service issue. It includes 11 vocabulary entries, six grammar phrase cards, four examples, an eight-line dialogue and four quizzes. Extended serbianRevision.js with two listening items and two mixed-revision questions. Commits: pronunciation cards b973f1fba1b9ddeaac1bced1c76513eb747d3b81; lesson 0454d5e5e38d82614466aad17c9b89886d123a9c; revision 1ca0e2fc7263e7a27c011dc3c5ca3f0b63e50390; README 6e0641e3892ae3f99c83c3a6d810f0bb00dabead. No native APK build or Android device test. CI for these commits must be checked. Sinhala-script readings are approximations and require native-speaker review. Next: audit the actual full lesson source and every lesson surface (grammar, examples, dialogue, quizzes, listening/revision) for missing Sinhala reading/audio; add explicit phrase cards for any remaining embedded Serbian snippets, then add saved local progress for lesson checks and revision.


- 2026-11-17 follow-up: Fixed Serbian revision array syntax discovered by Android Expo bundle CI. The failure was a missing comma before the two newly appended accommodation listening items; fix commit f7cf2cf551ef53c2196b933741e6c2e088b6aab0. Added @react-native-async-storage/async-storage 2.2.0 and wired App.js to restore/save theme, Serbian/English lesson answers and checked states, mission completion/XP, learned vocabulary, translator history and selected language under local key basanova-progress-v1. Dependency commit dcaec05072f1a3fe8e9c5b3e9ced3485933f6422; initial App import commit 6eb0c17024e1f7e6325663936dbb3edce08df7a5; persistence wiring commit e6ff5f393dac5e37422c0dfc2bf87d260ee83059. CI for latest commits is pending at handoff update time. No device-level storage restore test has been performed. Once CI passes, test first launch, complete lesson check, close/reopen, and confirm saved results remain; handle storage versioning/migration if data shape changes. Continue full phrase/audio audit after persistence validation.


- 2026-11-17 continuation: Rechecked the previously pending CI runs. Serbian revision syntax fix `f7cf2cf551ef53c2196b933741e6c2e088b6aab0`, AsyncStorage dependency `dcaec05072f1a3fe8e9c5b3e9ced3485933f6422`, App persistence wiring `e6ff5f393dac5e37422c0dfc2bf87d260ee83059`, and handoff `f749d14a0a10765b805442ea98731fc8d537b38b` all passed GitHub Actions Android JS bundle export. Inspected current App.js and confirmed hydration is gated by `storageReady`, so the initial default state is not written over saved data before AsyncStorage restore completes. Updated stale UI copy that incorrectly said listening/revision results were not saved, and corrected Serbian listening/revision labels from lessons 1–7 to 1–10. App commit `3a5124ef9e5f937852482e0a79306549acb69f6b`. Updated README to document device-local AsyncStorage state and clarify no cloud/cross-device sync; README commit `45803a4ccfbdf2334608ffb6f685dbc5e32c1fad`. CI runs `44182436773` and `44182476257` were in progress/queued at handoff update time. Full phrase audit still needs a careful targeted pass; automated script search for non-Sinhala Unicode was not a valid transliteration test because it matched Sinhala strings themselves. No native APK build or physical Android restore test. Next: verify latest CI runs; perform targeted audit of Serbian grammar/quiz explanations for embedded Serbian phrases and ensure every important phrase has a separate Sinhala-reading/audio card; then expand English A1 practical content. For device test, complete a quiz, mark vocabulary, close/reopen Expo app and confirm all saved state restores. Keep cloud sync out of scope until local storage is verified.

- 2026-11-18: Rechecked the latest CI runs for the local AsyncStorage work: runs 44182436773 (App UI labels), 44182476257 (README) and 44182522061 (handoff) all completed successfully. Continued the Serbian A1 phrase audit and found one workplace grammar card whose Sinhala reading mixed Sinhala with Kannada-script characters. Corrected the reading for “Možete li da ponovite?” to the Sinhala approximation “මොෂෙතෙ ලි දා පොනොවිතෙ”. During the edit, an adjacent “Radim” card was temporarily altered; inspected the commit diffs and restored its correct reading “රාදිම්” in the latest source. Commits: initial reading edit 6c172438a26cd8a2bbf4fd985d8b9a686b1dbf32; target phrase correction c6f7fecc9a5a97a61899907aa707693c2066438c; restoration of “Radim” af3dde00257e60ae41540aaefa8948088b47b0ca. CI runs 44286839695, 44286870546 and 44286948716 were still running/queued at handoff update time; recheck them before further content work. This is a targeted correction, not a complete audit of all embedded Serbian snippets. No Android device test or native APK build. Next: verify the three new CI runs; continue a phrase-by-phrase audit of lessons 1–10 and listening/revision readings; then expand practical English A1 content. Physical Android test of AsyncStorage restore remains outstanding.

- 2026-11-18: Rechecked the previous pronunciation-fix CI runs: `44286839695` (mixed-script audit fix), `44286870546` (workplace phrase reading) and `44286948716` (restore “Radim” reading) completed successfully. Added English A1 Lesson 7, “Hotel and accommodation”, in `englishLessons.js`. It teaches room availability, single/double rooms, nightly prices, breakfast inclusion, reservations, Wi-Fi password and reporting a room issue. It contains 12 vocabulary entries, five Sinhala-supported grammar phrase cards, four examples, an eight-line dialogue, one listening exercise and four quizzes; the existing English lesson renderer supplies per-item TTS. Lesson commit `ac42243cc1b84f111e27109175cde219e1877113`. Updated README with the new lesson and the caveat that English A1 remains a partial starter course, not a complete CEFR A1 course; README commit `b63252be032dd6fc76fafdcaab5b4331d17ec630`. No device test or native APK build. The lesson and README CI runs are pending; recheck them. Next: audit the new lesson for content/readings and expand English A1 with practical daily-life topics; continue the Serbian phrase-by-phrase audit and test AsyncStorage on a physical Android device when possible.


- 2026-11-18 continuation: Rechecked English A1 Lesson 7 validation. Runs 44287267085 (lesson), 44287315830 (README) and 44287356994 (handoff) all failed at Android bundle export with the same parser error: a literal trailing backslash-n after the closing `];` in `englishLessons.js` (line 296), not a lesson-data or dependency problem. Removed the two stray characters and committed the source fix as `21a4139d50343b4e96506cd965be048aefc5e34e`. New Expo validation run `44288819536` was in progress at the time of this update. No APK build or physical Android test. Next: confirm run 44288819536 passes; if it does, add Lesson 7 content to English mixed revision/listening only after inspecting the current revision data model, then continue the Serbian phrase/audio audit. AsyncStorage restore on a physical Android device remains untested.


- 2026-11-18 continuation: Confirmed the syntax-fix validation run `44288892101` completed successfully, including Android JS bundle export. Extended the English A1 mixed revision in `App.js` from six to seven items with a hotel/accommodation listening question (“Is breakfast included?”), Sinhala-script approximate reading, Sinhala meaning choices and the existing English TTS replay/answer feedback. Updated the mixed revision label from lessons 1–6 to lessons 1–7. App commit: `7608d19092ba5733a7f636a61879d59c9fe0c83c`. README updated to document the new mixed revision: `d96d03be9e81ace5fa94817b52b30e5d890d85ca`. The hotel lesson already has its own listening task, so the mixed revision adds a separate cumulative check. CI for these latest commits needs rechecking. No APK build or physical Android test. Next: verify latest CI; continue Serbian phrase/audio audit (lessons 1–10 and revision); physical AsyncStorage restore test remains outstanding.


- 2026-11-18 continuation: Confirmed the English A1 hotel mixed-revision commits all passed CI: runs `44290756894` (App.js), `44290794069` (README) and `44290852385` (handoff) completed successfully. Started targeted Serbian phrase/audio audit. Inspected the Serbian lesson renderer: vocabulary words/examples, grammarTerms, examples, dialogues and Serbian quiz options already show Sinhala-script approximate readings and individual TTS controls; however, Serbian phrases embedded inside Sinhala grammar explanations and checked quiz explanations were only plain text. Updated `App.js` to extract quoted Serbian phrases in those two explanation areas and render each as an individual row with approximate Sinhala pronunciation and a dedicated Serbian TTS button. App commit: `c63f628880c9f2a1b86da3c6c25d00b7d27db79b`. README documentation commit: `4f07aa384c758b05342ea4800334a8f2df133827`. This improves the renderer generally across lessons; it is not a complete native-speaker transliteration audit. CI for these commits needs rechecking. No native APK build or physical device test. Next: verify CI; review the regex extraction against actual lesson text and quiz explanations; continue Serbian phrase-by-phrase reading accuracy review and test AsyncStorage restore on Android when possible.


- 2026-11-18 continuation: Added a dedicated alphabetized vocabulary-book tab to BasaNova. It is language-specific (Serbian or English), with A–Z filtering (Serbian Latin alphabet additionally includes Č, Ć, Š and Ž), search across target phrase/Sinhala meaning/Sinhala-script reading, and per-entry/example TTS controls. The runtime dictionary aggregates the selected language's existing course vocabulary arrays (including vocabulary packs 1–9), structured lesson vocabulary, grammar terms, examples, dialogue lines, practice options, and quoted Serbian/English phrases found in lesson grammar and quiz explanations. Entries show target phrase, approximate Sinhala pronunciation, Sinhala meaning, and available example/translation. App commit: `bdfdfeddb7ccf42b3340d6d024e6ed4e2b51b89f`; follow-up includes quoted grammar and quiz explanation phrases: `c2476d6fdd9cb50f0c92ef18ee20629b4aca7fc8`. README documentation commit: `0fb8bfbd71c32c862807f19b6071f5bcbc76c294`. Initial App CI run `44292525637` was in progress at the time of this handoff update; recheck all latest runs. This dictionary is generated from the current data sources, not an independently maintained duplicate list; future entries in those sources appear automatically. It does not yet scrape every arbitrary word from all UI labels or every future data file unless that file is added to the aggregator. Serbian/English Sinhala pronunciation approximations need human language review. No native APK build or physical device test.


- 2026-11-18 continuation: Added vocabulary-book bookmarks in `App.js`. Learners can save/unsave individual Serbian or English entries with a star, switch the dictionary to show saved entries only, and retain the saved list in the existing `basanova-progress-v1` AsyncStorage payload across app restarts. App commit: `a3cf05be043c8abd6eb5a7321d868bda5ffbd191`. This is a source change only; no workflow run, Expo build, emulator, or physical-device test was available in this session. Next: run the app build/type or syntax checks, test bookmark persistence on Android, and continue pronunciation review.


- 2026-11-18 continuation: Polished the saved-vocabulary filter UX in `App.js`: switching between all entries and saved-only now clears stale search/letter filters, includes accessibility labels, and shows a specific helpful empty state when no words have been bookmarked. App commit: `5fdcd7e2ab5f9d599711bace9700d83a5389e6ae`. Inspected `package.json` and `app.json`: the project currently has only Expo start scripts and no test/lint/build script, `eas.json`, or GitHub Actions workflow file at the checked paths. Therefore no automated build/test result is available from this repo state; Android runtime and persistence still require device testing.


- 2026-11-18 continuation: Continued the Serbian A1 language-content audit and corrected a Croatian-form spelling accidentally used in the Serbian number lesson: `Broj dvjesta.` is now `Broj dvesta.` to match the Serbian vocabulary item `Dvesta` and dialogue usage. App content commit: `eaef024671314b2f817e85b5d5ef0f070bbebc1c`. This is a narrow spelling correction, not a full native-speaker review of all Sinhala-script pronunciation guides. Next: continue checking Serbian A1 vocabulary, example sentences, grammar explanations, and listening readings for accuracy.


- 2026-11-18 continuation: Added exact Sinhala-script pronunciation entries for Serbian `Dvesta`, `Dvesta dinara.` and `To je 200 dinara.` so the vocabulary book and phrase audio reading use the Serbian form /dvesta/ rather than the previous inaccurate `dvesto`-like approximation. App commit: `94814070fa4e1b46aa29c88cb7b6d7141755b2ef`. Combined with the lesson example spelling correction above, the number 200 now uses consistent Serbian spelling and reading across the beginner lesson. Readings remain approximate Sinhala guidance, not IPA or a substitute for native-speaker review.


- 2026-11-18 continuation: Continued reviewing Serbian A1 lesson dialogue. Polished the hotel-service closing question from the less idiomatic `Mogu li još nešto da pomognem?` to the natural `Mogu li još nekako da pomognem?` (“Can I help in any other way?”), and aligned the Sinhala translation. Lesson commit: `53c0cba069eba61b6ba3ac0927b860affbc60fb3`. This is a language-usage improvement; all Sinhala-script readings remain approximate and should be reviewed by a Serbian speaker before treating them as authoritative.


- 2026-11-18 continuation: Audited the exact Serbian-to-Sinhala pronunciation dictionary and fixed two inconsistent vowel-length spellings: `Zdravo` and `Zdravo, kako si?` now use `ස්ද්‍රාවො` (matching the lesson's existing `Zdravo` reading), and `Račun, molim` / `Račun, molim.` now use `රාචුන්` consistently rather than an unnecessarily lengthened `රාචූන්`. App commit: `f8bb462dd6c65acac800bd9fabd5624c0d9ca400`. These remain learner-friendly Sinhala approximations; Serbian audio playback remains the authoritative sound model.


- 2026-11-18 continuation: Improved the vocabulary/phrase pronunciation lookup for the Serbian sound-guide examples. Added exact Sinhala-script readings for `cena`, `čaj`, `ćao`, `džem`, `đak`, `škola`, `žena`, `ljubav`, `njiva`, and `zima`, including brief voice-quality notes where Sinhala has no exact equivalent. This prevents the generic letter-by-letter fallback from obscuring the intended Serbian consonant sound. App commit: `c43b1be21c1bf64f283836bc180f3b62c099ec9c`. These are still approximations; use the app's Serbian TTS to hear the actual sounds.


- 2026-11-18 continuation: Completed the missing hundreds in Serbian A1 Lesson 4. The lesson already introduced 100, 200, 300 and 1,000 under a 0–1,000 title, but omitted 400–900. Added `četiristo`, `petsto`, `šeststo`, `sedamsto`, `osamsto`, and `devetsto` with Sinhala meanings and simple “Broj …” examples. Lesson commit: `a0442674c83002076d0ba2009cab647c16ce48f7`. This closes the obvious vocabulary gap; it does not mean every integer from 0 to 1,000 is individually listed.


- 2026-11-18 continuation: Added exact dictionary entries for Sinhala-script readings of Serbian A1 number vocabulary, from `nula` through `hiljadu` (including 11–19, tens, and hundreds 100–900). This ensures the vocabulary book uses deliberate whole-word readings instead of the generic character fallback for the number lesson. App commit: `545e8bb4aa2b17bc307c6819de5db271d093eee8`. Sinhala readings are learner approximations and should be checked against Serbian audio/native-speaker feedback.


- 2026-11-18 continuation: Expanded Serbian A1 number lesson beyond 1,000 with `sto hiljada` (100,000), `dvesta hiljada` (200,000), and `milion` / `jedan milion` (1,000,000). Added Sinhala meanings, lesson examples, grammar explanation of the `hiljada` construction, and exact dictionary readings for the new terms and money examples. Lesson commit: `8631690bcef019b8a615b5d45ff972fb6572431f`; pronunciation commit: `e12cca04075e387835543c7df7cb064550439e0e`. The readings are approximate Sinhala guides; Serbian audio should be used to hear pronunciation.


- 2026-11-18 continuation: Expanded Serbian number lesson with `deset hiljada` (10,000), `pedeset hiljada` (50,000), and `petsto hiljada` (500,000). Added Sinhala meanings, currency examples, grammar coverage, quiz questions, and exact Sinhala-script readings for each phrase and its dinar example. Lesson commit: `3c90c2060094cac96d2f84c76826bc573a231de2`; pronunciation commit: `2f539ca9eeeafc948a37265bab2e0366d93c4c73`. All readings are approximate learner aids; Serbian TTS/native-speaker review remains important.


- 2026-11-18 continuation: Extended Serbian large-number lesson to `dva miliona` (2,000,000), `pet miliona` (5,000,000), `deset miliona` (10,000,000), and `sto miliona` (100,000,000). Added vocabulary, Sinhala meanings, dinar examples, a short explanation of the `milion` / `miliona` forms, quiz items, and exact Sinhala-script readings. Lesson commit: `b33dc5797f52396dc1bc0871e1e3b11d8647d0d1`; pronunciation commit: `e609a67d129e2c5f35b79e36da4e5f61c5dc30af`. Readings are approximate aids; use Serbian audio/native-speaker review for pronunciation.

- 2026-11-18 continuation: Corrected the Serbian A1 number lesson's outdated scope label. Lesson 4 now accurately advertises numbers from 0 to 100 million, and its objective clarifies that it teaches key number patterns and selected examples rather than listing every integer in that range. This avoids promising exhaustive coverage that the lesson does not provide. Lesson commit: `25312256aa299e1178d139a18528bc25d28c5c8d`. Source/document inspection only; no automated test, Expo bundle, native APK build, or Android device test was run. Next: continue Serbian A1 content accuracy review, especially large-number examples and the Sinhala pronunciation/meaning cards; then validate the renderer and saved-vocabulary persistence on Android when a test environment is available.

- 2026-11-18 product-direction update: The user explicitly requested Serbian and English be developed together in parallel, not that Serbian be completed first and English afterward. Updated the non-negotiable teaching requirements and Next task to require paired lesson batches at the same CEFR level/topic, comparable learning depth and exercises, and a balance check before marking a batch complete. Language-specific grammar and natural phrasing must remain correct; courses/progress remain separate. This change updates project workflow/documentation only; no lesson content or app code was changed in this commit. HANDOFF commit: `0453d7c5240c998968d35fd09deaac1070d15d12`.

- 2026-11-18 continuation: Responded to the user's request to do a larger batch of work at once by adding two synchronized A1 topics to BOTH courses: (1) café ordering and (2) everyday requests / asking for help. Each new module includes vocabulary with Sinhala meanings and readings, grammar terms/explanation, examples, six dialogue lines, four quizzes, and one listening check. Serbian lessons provide manually authored Sinhala readings for vocabulary, examples and dialogue; the renderer now displays those readings instead of relying on the generic fallback where provided. Added the two Serbian listening items at indexes matching the new lesson positions and fixed English lesson progress counts to include listening checks. Commits are listed in Current verified state above. README updated. Source-level checks verified 9 lesson objects in each language and the paired topics; no full JavaScript parser, Expo bundle, native APK build or Android runtime test was run. Progress estimate updated from 42% to 44% using the same weighted workstream model. Next: add the next matched Serbian + English topic pair (shopping / quantities and prices) and keep the same content-depth checklist.
- 2026-11-18 larger paired batch: added three synchronized A1 topics to BOTH languages: numbers/date/time, daily routines, and work shifts/schedules. Each lesson includes eight vocabulary entries with Sinhala meanings/readings, grammar explanation and key phrases, four examples, a dialogue, four quizzes and listening practice. Both courses now contain 13 structured A1 lessons. Serbian listening questions were rebuilt in exact lesson-array order (13 checks) so each card's listening prompt matches its lesson. Extended Serbian mixed revision with three items and English mixed revision with three corresponding items. Updated the Learn UI range labels and English lesson progress counters. README updated. Source checks verified 13 Serbian lessons, 13 English lessons, 13 Serbian listening checks, 13 English lesson listening checks and all six new lesson IDs. GitHub status endpoint returned no status entries for the App.js commit; no parser, Expo bundle, native APK or physical-device test was run. Progress estimate recalculated from 44% to 46% using the existing weighted model (curriculum 28%, learning interactions 72%). Commits: 6e2b4446c3dfd59f9bd37092435dd60db246d04a (Serbian lessons), 7544d4210535c11712563fa0ab01243056ed8190 (English lessons), 3113b10d982fff701e02a5f7f8214fd6677d69a9 and 55baf0314ec5777b08828d5af6b20843138490f7 (Serbian listening/revision), 4cdfd12acffd63d3ee2408da33707277caf7eed9 (UI mixed revision), be8b57cb56c9b8afe9b0c0f04c20de5bdfadc307 (README).
- README wording and stale handoff checkpoints were reconciled after this batch; current counts and QA caveats are now explicit. README commit: a3459450c725245aea1d9d2e51f1de6d08b87489.


- 2026-11-18 continuation: Added the next synchronized A1 topic to both courses: Family and Personal Information (Lesson 17). Serbian and English each gained ten vocabulary entries with Sinhala meanings/readings, five grammar phrase cards, four examples, a six-line dialogue, four quizzes, and one listening exercise. Added the matching Serbian listening-discrimination prompt at index 14 and updated the Serbian/English mixed-revision UI label from lessons 1–13 to 1–14. Source checks after commit confirmed 14 lesson objects per language, paired lesson IDs, 14 Serbian listening prompts, and the new English listening task. Pronunciation guides are learner approximations and still need speaker review. No Expo bundle, automated test, native APK build, or physical Android test was run. Next paired A1 topic: health, simple symptoms and asking for help in a pharmacy/clinic (keep content informative and non-diagnostic).

- 2026-11-18 follow-up language correction: Replaced the non-standard Serbian rendering “sinhalski” with the Serbian language adjective “singalski” in the new family lesson and aligned its Sinhala-script reading. Commit: `393dc8c4932821b8c8e6296fd701a7b7c63fd6ba`. This was a targeted terminology correction; the rest of the lesson still needs Serbian-speaker review.


- 2026-11-18 larger paired A1 batch: Added two synchronized topics to Serbian and English: Lesson 18 Travel and Transport, and Lesson 19 Home and Household. Each language received eight vocabulary items, five grammar phrase cards, four examples, six dialogue lines, four quizzes and one listening exercise per lesson. Added two Serbian listening-discrimination prompts at positions 15 and 16, and added two English cumulative mixed-revision items. Updated the English mixed-revision scope label and all course/listening range labels from 14 to 16. Source verification: 16 lesson objects in each language, 16 Serbian listening prompts, and paired lesson IDs for both topics. No parser, Expo bundle, native APK build or physical-device test was run. Approximate Sinhala pronunciation and language naturalness still need Serbian/English speaker review. Next paired A1 topics: food and cooking at home, then weather and clothing.


- 2026-11-18 verification follow-up: Extended Serbian cumulative mixed revision with the new transport and household-location phrases (now 16 items), matching the two English mixed-revision additions (now 12 items). A source-count verification confirmed 16 Serbian lessons, 16 English lessons, 16 Serbian lesson-aligned listening prompts, 16 English lesson listening tasks, and updated 1–16 scope labels. Corrected the Sinhala-script reading for Serbian “stolica” after spotting a stray non-Sinhala script character. Latest revision commit: `96f4d3cff495048559aa891d04079cabfa407502`; pronunciation correction commit: `c196932bad51c9f3940d17a97de8a7895f1a8a5c`. GitHub combined-status endpoint returned no status entries for the latest revision commit, and package.json has no test/lint/build scripts beyond Expo start commands. Therefore no automated parser, Expo bundle, native APK, or Android runtime result is claimed.


- 2026-11-18 continuation: Added two more synchronized A1 topics to BOTH courses: Lesson 20 Food and Cooking, and Lesson 21 Weather and Clothes. Both Serbian and English lessons have eight vocabulary entries with Sinhala meanings/readings, five grammar phrase cards, four examples, six dialogue lines, four quizzes and one listening task. Added the two Serbian listening prompts at lesson-aligned positions 17 and 18, plus two Serbian cumulative mixed-revision items. Updated Serbian listening and mixed-revision headings to cover lessons 1–18. Source edits were committed to GitHub in serbianLessons.js, englishLessons.js, serbianRevision.js and App.js. The two courses now have 18 matched structured A1 lessons. No parser, Expo bundle, native APK build or Android runtime test was run. English A1 cumulative mixed revision remains at its existing 12 items; the new English topics are assessed by their own lesson quizzes and listening tasks. Sinhala-script pronunciation and language naturalness still need fluent-speaker review. Progress estimate remains 46% because no full workstream re-audit was performed.

- 2026-11-18 follow-up: Completed the English A1 cumulative mixed revision alignment. It previously had 12 questions while Serbian had 18; added six English questions covering breakfast/cooking, weather/umbrella, apartment rooms and family. The English mixed revision now has 18 questions, matching the Serbian cumulative revision count and the 1–18 lesson scope. Updated App.js only for the revision data; no app UI structure changed. No parser, Expo bundle, APK or device test was run.

- Vocabulary library update (2026-11-18): Improved the A–Z word book so Serbian uses its full Latin alphabet, including the digraph letters DŽ, LJ and NJ and the distinct letter Đ. The D, L and N filters now exclude those digraph groups so letter browsing is unambiguous. Each alphabet chip displays its matching entry count, and the library description now explicitly explains that it aggregates vocabulary packs and structured lessons with Sinhala meanings, readings and audio controls. Existing search, favorites and pronunciation playback remain intact.
- Verification performed by source inspection: confirmed all nine themed vocabulary pack imports are pushed into the Serbian and English course decks; verified the new alphabet arrays, digraph-aware filtering, and per-letter count labels in App.js. No JavaScript parser, Expo bundle, native APK build or Android runtime test was run. Next: audit duplicate and missing Sinhala meaning/pronunciation fields across all vocabulary packs and lesson-derived entries; repair any gaps in both languages in parallel.

- 2026-11-18 vocabulary audit follow-up: Checked all nine themed vocabulary pack arrays for missing/blank `meaning`, `sound`, `example` and `translation` fields: none found. Cross-pack duplicate scan found Serbian `Cipele` and English `Shoes` repeated between packs 1 and 3, plus English `Open` used for both adjective and verb senses in packs 2 and 3. Removed the repeated footwear entries from pack 3; merged the adjective and verb senses/examples into the pack 2 `Open` card and removed the redundant pack 3 card. This preserves both senses despite the app's headword de-duplication. Post-edit source scan: 391 unique Serbian and 388 unique English headwords across the nine themed packs, with no repeats. Commits: `cbfb41f83431e0828fc6f4828d05d7ce0b1401da` (pack 2) and `41594d4d28836380dbcad0c76cb6a4abd6c93b8a` (pack 3). README audit note commit: `e823972efc6f5d1ebd9c53aebfc53e8c1d60dbd1`. Source inspection only; no parser, Expo bundle, APK or device test. Next: audit base-course vocabulary and lesson-derived vocabulary cards for duplicates, missing Sinhala readings/meanings, and ensure the app's headword de-duplication does not hide distinct meanings.
\n- 2026-11-18 vocabulary expansion pack 10: Added `vocabularyPack10.js` with 25 new Serbian + 25 new English entries covering job vacancies/applications, registration, documents, signatures, appointments, cancellations, proposals, discussions, obligations, experience, skills, goals, achievements, mistakes, solutions and advantages/disadvantages. Every card includes Sinhala meaning, Sinhala-script approximate pronunciation, contextual example and Sinhala translation. Integrated both arrays into `App.js`; updated README counts to 527 Serbian + 525 English (1,052 standard entries). Commits: `71ee202d4f66fd9d138d7dcb7e46356a7194770c` (new pack), `fe50a2572877c3b7cd4a093af5b9774a663a3eec` (app integration), `afc25daac0d028def1287a55cecf557e85151aa3` (README). Source edits only; no parser, Expo bundle, APK build or Android device test was run. Sinhala pronunciation guides are approximations and need speaker review.\n\n- 2026-11-18 vocabulary expansion pack 11: Added `vocabularyPack11.js` with 25 Serbian + 25 English entries for banking, payments and personal finance (ATM/bank, service counter, deposits, payouts, cards, cash/change, exchange rates, interest, savings, debt, installments, loans, transactions, account balance and statements). Each entry includes Sinhala meaning, Sinhala-script approximate reading, contextual example and Sinhala translation. Integrated both arrays into `App.js`; README totals updated to 552 Serbian + 550 English (1,102 standard entries). Commits: `960aef7d0536c8c29a4ed5d277705ff834cfeafa` (new pack), `ee5bc8e4bd8d1c30f29049e92fa35aa0c0835dbe` (app integration), `4d1ab2bce9878fc928c6ef6928b64d8fdd08ec98` (README). Source changes only; no parser, Expo bundle, APK build or Android runtime test was run. Sinhala pronunciation guides are approximations and should be reviewed by a fluent speaker.\n

- 2026-11-18 vocabulary expansion pack 12: Added the paired restaurant-service and food-ordering vocabulary pack in `vocabularyPack12.js`. Both Serbian and English contain 25 entries with Sinhala meanings, Sinhala-script approximate readings, contextual examples and Sinhala translations. Topics include restaurant staff, placing orders, starters/main courses/side dishes/desserts, Serbian dishes, sauces/condiments, allergens, vegetarian requests, takeaway, delivery, tips and portions. The existing `App.js` already imports and adds both pack 12 arrays to the matching language decks; README already records the resulting total of 577 Serbian + 575 English = 1,152 standard entries. Source-level audit across the previous themed packs found no exact headword collisions for pack 12, no internal duplicates, and all 50 entries have all four required fields. Current fetched file SHAs: `vocabularyPack12.js` a016de30913829618488c33c83718009a1e15aa2, `App.js` `32740830007c850ac9e4a5c9e0376bf878d332bb`, `README.md` `304ea2816587b90f8b813ece60498d93abc50df6`. No parser, Expo bundle, APK build or Android device test was run. Sinhala-script readings are approximations and should be reviewed by fluent speakers. Next: continue the bilingual A1 topic audit and implement the next matched lesson topic in Serbian and English, while auditing lesson-derived vocabulary for duplicates/missing Sinhala support.


- 2026-11-18 paired A1 lesson expansion: Added two matched practical topics to both courses: Lesson 22 Restaurant and Food Ordering, and Lesson 23 Customer Service and Simple Problems. Serbian and English each gained two structured lesson objects with eight vocabulary entries per lesson (Sinhala meanings and Sinhala-script readings), five grammar phrase cards, four examples, six dialogue lines and four quizzes; English lessons also include individual listening exercises. Added two Serbian lesson-aligned listening prompts and two cumulative Serbian mixed-revision questions, bringing Serbian lesson listening and mixed revision to 20 each. Updated app listening/revision scope labels and README course count to 20 Serbian + 20 English lessons. Source checks confirmed 20 lesson IDs per language, both paired lesson IDs at the end of each course, 20 Serbian listening prompts and 20 Serbian mixed-revision questions. Corrected a Sinhala-script reading typo in the new listening prompt. Current verified SHAs: `serbianLessons.js` `f445aa4f382511a0b207ab7b53011b58928b9b30`; `englishLessons.js` `227d59e1e85191f69aac04f4ebd0b92e3d50a06d`; `serbianRevision.js` `8966da1a442e72ed9d9bb6382921c6d8dc555ca5`; `App.js` `3e80a3310014dc7301633aeb81add0c3f8d5b56b`. No JavaScript parser, Expo bundle, automated tests, APK build or Android device test was run. Sinhala readings and naturalness need fluent Serbian and English speaker review. Next: audit all 20 lessons per language for missing readings/meanings, repeated headwords and language-specific grammar quality; then continue the paired A1 roadmap.


- 2026-11-18 paired A1 lesson expansion: Added two matched practical topics to both courses: lesson 24, phone calls and messages, and lesson 25, post office and parcels. Serbian IDs `sr-a1-u10-l3` and `sr-a1-u10-l4`; English IDs `en-a1-u6-l3` and `en-a1-u6-l4`. Each new lesson has 8 vocabulary cards with Sinhala meaning and Sinhala-script reading, grammar notes and five phrase cards, four examples, a six-line dialogue and four quizzes. English lessons each include a dedicated listening check. Added two aligned Serbian listening prompts and four Serbian cumulative mixed-revision items. Source audit: 22 Serbian + 22 English lesson IDs; 22 Serbian listening prompts; 24 Serbian mixed-revision questions; 22 English lesson listening checks. README updated to reflect 22 lessons per language. Commits: `250ac634409e46197d31d8b3e6f505a3bae1c9fd` (Serbian lessons), `e01c6813e52b184aab74e49707b3b3323e0ecade` (English lessons), `ec1605cb17ac58abfe482fd44c2476308db21e42` (Serbian listening/revision), `c098c8a55961681f5fb57e26cc5ed0fcfa95c35a` (README). App lesson arrays are imported dynamically and the lesson list renders from each array; no separate fixed lesson limit was changed. No JavaScript parser, Expo bundle, automated test, APK build or Android device test was run. Sinhala-script readings are approximate and need fluent-speaker review. Next: continue A1 topic coverage and audit the earlier lessons for missing readings, repeated headwords and inconsistent grammar explanations.

- 2026-11-18: Corrected the resume point: lessons 22–25 were already present, so development continued after lesson 25 rather than recreating lesson 22. Added paired lesson 26, “Doctor and health”, to serbianLessons.js and englishLessons.js. Each side has eight vocabulary entries with Sinhala readings/meanings, five grammar phrase cards, four examples, a six-line dialogue, four practice questions and a listening task. English lesson 26 uses the existing listeningPractice renderer. Added one Serbian lesson-aligned listening prompt to serbianRevision.js. Commits: 2028377c237d842f0a77304cb309558db5f75ba9 (Serbian lesson), 948ee57c73742f4734d8378f378a513f1a19c2c9 (English lesson), 8da5a9e747d6dc6ded7318ddaccc64f19429464e (initial listening data), 18b303ce4f9e5094e3cd3348a245d7fb64eca2a4 (English listening renderer data), 97eb58e1004bcb0a4fd16c385ca1d562a47a8f4c (align Serbian listening array to one new lesson item). Source-level checks confirmed 23 lesson objects in each language and the lesson 26 IDs; no parser, Expo bundle, CI completion, APK build or Android device test was run. Pronunciation readings are approximate and require fluent-speaker review. Next: paired lesson 27 on emergency services and asking for urgent help.


- 2026-11-18 fast paired-content batch: Added Serbian and English A1 lessons 27–28: (27) Emergency services and asking for help; (28) Returns and exchanges. Each of the four lesson objects includes eight vocabulary cards with Sinhala meaning and Sinhala-script approximate reading, five grammar phrase cards, four examples, a six-line dialogue, one listening task and four quizzes. Added two Serbian listening prompts at the matching lesson-array positions. IDs: `sr-a1-u10-l6`, `sr-a1-u10-l7`, `en-a1-u6-l6`, `en-a1-u6-l7`. Source verification after edits: 25 structured Serbian lessons and 25 English lessons; Serbian listening prompts now align with the expanded course arrays. This is source-level verification only; no JavaScript parser, Expo bundle, APK build or Android device test was run. Sinhala readings and Serbian/English naturalness still need fluent-speaker review. Next priority: finish remaining A1 topic gaps in paired batches, then audit course consistency and test the app build/runtime.


- 2026-11-18 Android build-readiness batch: Repository audit found no committed package-lock.json, no `eas.json`, and no Android APK build script. Existing Expo validation workflow completed successfully on commit `9b58f5558aa405131f44d44d0b5003284635aef0` (run 44316982815), proving dependency installation, Expo compatibility check and Android JS bundle export passed for that source. Added `build:android:debug` to package.json, bumped app version to 0.2.0 / Android versionCode 2, added `.github/workflows/android-apk.yml` to generate native Android files and assemble a debug-signed APK, and added `BUILD.md` with artifact download/install instructions. Updated README. New workflow triggers on main pushes and manual dispatch; it must finish successfully and upload `basanova-android-debug-apk` before an APK can be claimed. No APK is yet verified in this session; monitor the new Actions run after this commit. Debug APK is for testing, not Play Store release. Physical-device install and feature tests remain outstanding.


- 2026-11-18 Android APK pipeline follow-up: Fixed the initial APK workflow failure caused by `android-actions/setup-android@v3` trying to install the obsolete SDK package named `tools`. The runner already has an Android SDK, so the workflow now verifies the preinstalled SDK instead. Added path filters and concurrency cancellation to avoid duplicate native builds. On commit `cdff9ffd56548a575d677a7043fb15530bd8e359`, Expo validation run `44317457758` passed, and APK workflow run `44317457889` passed dependency-lock generation, npm ci, Expo compatibility, Android JS bundle export and native project generation; Gradle `assembleDebug` is currently running. No APK artifact is confirmed until that workflow completes and the artifact list contains the APK. The previous SDK-setup failures were runs `44317350417`, `44317357946` and `44317368459`. The current 50% estimate is a planning estimate, not proof of 80% completion.

## Online voice implementation — 2026-11-18

- Product direction confirmed: **online-first**, not offline-first. Do not describe the app as fully offline.
- Added a Google Cloud Text-to-Speech integration path for all existing Serbian and English audio buttons. The app posts the selected phrase and language to a configurable Cloudflare Worker endpoint, writes returned MP3 base64 to the app cache, and plays it with Expo AV.
- Added a server-side Worker at `cloudflare/voice-worker.js`. It accepts only `sr-RS` and `en-US`, validates non-empty text up to 5,000 characters, calls Google Cloud Text-to-Speech, and keeps the Google API key in the Worker secret `GOOGLE_TTS_API_KEY`.
- Added `expo-av` and `expo-file-system` dependencies. If `EXPO_PUBLIC_VOICE_API_URL` is not configured or the online service fails, the existing device speech is used as a graceful fallback.
- **Not yet live:** Cloudflare Worker deployment, Google API enablement/key, GitHub Actions variable `EXPO_PUBLIC_VOICE_API_URL`, Google billing/quota setup, and real-device audio testing require account-side configuration. Do not claim Google voices are active until these are completed.
- Current Android APK workflow run 44317457889 was still building Gradle when checked; the next source push may cancel it because the workflow uses cancel-in-progress concurrency. Verify the newest run after these commits.
- Next: deploy Worker, add secret and GitHub Actions variable, then rebuild and test Serbian/English audio playback on Android.

- Android build workflow now injects the optional GitHub Actions repository variable `EXPO_PUBLIC_VOICE_API_URL` during JS bundle export. If absent, the APK retains device TTS fallback. Workflow commit: `b95379b8bbf8f009f29d5638b10a12f58f6103c5`.


## Voice build fix and abuse protection — 2026-11-18
- First Google TTS integration CI failed during Metro bundling because the endpoint trailing-slash regular expression was malformed. Corrected the URL normalization expression; previous failure was before Android native compilation.
- Added a Cloudflare Workers rate-limit binding (30 requests per client IP per 60 seconds) and enforcement before calling Google to reduce accidental/API-cost abuse. Deploy with the included `cloudflare/wrangler.toml` and set Worker secret `GOOGLE_TTS_API_KEY`.
- Google voice is not live until the owner enables Google Cloud Text-to-Speech, configures the API key secret, deploys the Worker, and sets GitHub Actions variable `EXPO_PUBLIC_VOICE_API_URL`. Device TTS remains the fallback.
- Failed pre-fix verification: run 44318472246; invalid regular expression at App.js line 391. Re-run bundle and APK workflow after this fix.


- 2026-11-18: Added paired A1 lesson 29, “Making plans and meeting”, to both Serbian and English. Both lessons cover weekend plans, asking whether someone is free, suggesting a meeting time, confirming suitability, eight vocabulary entries with Sinhala meanings/readings, grammar phrase cards, four examples, six dialogue lines, a listening task and four quiz questions. Serbian data commit `d5d02c36a5f624cb8a3d9a82805c05dbc7f7c96d`; English data commit `cd6bf2008829bc6d393a8634514c027b246cc8c0`; README commit `af87b8087209d767927ad3d8be81e25e4a77192c`. The previous Android validation run `44319531618` passed dependency installation, Expo compatibility and Android bundle export on the preceding voice/rate-limit changes. A fresh CI run for lesson 29 is required; no APK or device test is confirmed. Next: validate lesson 29 in CI, then add another paired practical A1 lesson and continue local-progress persistence audit.


- 2026-11-18: Added paired A1 lesson 30, “Being late and apologising”, to both Serbian and English. Covers apologising, explaining a late bus/traffic, giving an estimated arrival time and asking someone to notify you. Each side includes eight vocabulary entries with Sinhala meanings/readings, grammar phrase cards, four examples, a six-line dialogue, one listening task and four quiz questions. Serbian data commit `b8e49cd74a991924b7f13a9fb31ead451967a72e`; English data commit `36256e47e1dc812fb5228d4b6a2da8e7e213415a`; README commit `9ab3fa376c9935e47c25fe18404d9098254c8fb8`. Lesson 29 was also added in this session (see commits above). CI runs for the latest lesson changes are pending; the earlier run `44319531618` passed Expo validation and Android bundle export, but it predates these two lesson batches. No APK or device test is confirmed. Next: verify latest CI; continue paired A1 content and implement persistent saved mastery for lesson/listening/revision checks.


- 2026-11-18: Added three paired A1 lessons (31–33) to Serbian and English: daily routines, work shifts/schedules, and politely requesting a day off. Each lesson has eight vocabulary entries with Sinhala readings/meanings, grammar cards, four examples, a six-line dialogue, a listening task and four quiz questions. Serbian commit `fa148af3ade1a1ed2ed30ae2281ea1ad41a15fa4`; English commit `ff0e560021ca3dd3e51b06fc5a440ae486da76d3`; README commit `c6d8d488a40d7707d3f261a8f6afe1bc86663953`. Corrected a Serbian spelling typo in the shift lesson in a follow-up commit. The latest source has not yet passed a fresh CI run; no APK/device verification is claimed. Next: keep adding paired A1 topics in batches, then audit lesson counts/coverage and save mastery locally.


- 2026-11-18: Added three more paired A1 lessons (34–36) in Serbian and English: phone calls, weather/clothes, and choosing food/asking about ingredients. Each side includes eight vocabulary items with Sinhala-script readings and meanings, grammar phrase cards, four examples, a six-line dialogue, one listening task and four quiz questions. Serbian commit `42a9fb9c17750d26168ef1b97e23f1854c6378df`; English commit `548c29e851e63453f4e5c8e292593c9b1bc43418`; README commit is recorded in this session's commits. CI and syntax checks for lessons 31–36 are pending; no APK/device test is confirmed. Next: add paired lessons 37 onward, then complete A1 revision and test modules for both languages and begin A2 in parallel.


- 2026-11-18: Added three paired A1 lessons (37–39): family and people, home and rooms, and booking appointments. Both Serbian and English versions include eight vocabulary items with Sinhala readings/meanings, grammar cards, four examples, a six-line dialogue, listening practice and four quiz questions. Serbian commit `fd7cafd6b04e9600ca1b94dd3c0e8ef0b08101c4`; English commit `048dcd6a0785005f913f510d8d02e1dbb81f2139`; README commit is recorded in this session. CI for lessons 34–36 is still in progress; CI for lessons 37–39 is pending. No APK/device test is confirmed. Next: complete remaining A1 topics and create matched A1 revision + final tests for both languages, then begin A2 content in parallel.


## A1 lesson continuation — 2026-11-18 (latest)
- Added paired Serbian and English A1 lessons 40–42: supermarket checkout and payment, city places/directions, and workplace safety/instructions.
- Each of the six new lesson objects includes 8 vocabulary entries, Sinhala readings and meanings, grammar phrase cards, 4 examples, a 6-line dialogue, one listening task, and 4 quiz questions.
- Serbian data commit: `79ba4542acc17a65a229011eab7cc3c7bc2dbf91`.
- English data commit: `04c52ddcd22a996383d98f9a0cb0b69553643dce`.
- Verified source-level lesson object IDs before the new batch: 36 per language. The new batch adds 3 per language, for 39 each; visible numbering is now 40–42.
- Prior validation for lessons 37–39 passed on both languages: Expo validation run `44322095970` and `44322089683`.
- Current batch workflows: Expo validation run `44322886065`; Android APK build run `44322885943`. Both were in progress at the last check. Do not claim pass or APK artifact until checked.
- No physical Android device test has been performed. Sinhala pronunciation spellings are approximations and require fluent-speaker review.
- Next: verify both current workflows; audit A1 syllabus coverage and lesson schema alignment; add matched Serbian/English cumulative A1 final tests and connect them to the Learn UI; only then mark A1 lessons complete. After that, start paired A2 content. Do not imply A2–C2 courses are complete.

### A1 mixed revision update — lessons 40–42
- Extended the Serbian A1 mixed revision with listening questions for card payment, city distance/directions and a slippery floor warning.
- Extended the English A1 mixed revision with the matching three listening questions and Sinhala-script pronunciation.
- Updated both revision section headings to avoid the old lesson 1–20 label. This is cumulative mixed practice, not yet a scored final A1 examination.
- Serbian revision commit: `eb71471bdc5fe3be7d55a986c5dedb52a372843e`; app integration commit: `3dcd679b939bd181c707290fe49673e91c99805a`.
- CI runs for these latest commits are queued/pending at the time of this note. No APK or device test is confirmed.

- Latest CI runs: Expo validation `44323110932` and Android APK build `44323110978` for App commit `3dcd679b939bd181c707290fe49673e91c99805a`; Expo validation `44323100283` and Android APK build `44323100494` for revision data commit `eb71471bdc5fe3be7d55a986c5dedb52a372843e`. They were queued/pending when checked.
- Immediate next task: check these runs and fix any errors; then complete a proper A1 syllabus map and scored end-of-level assessments for both languages. Do not mark A1 complete yet, and do not claim A2–C2 lesson content exists.


## A1 completion batch — lessons 43–50 and final assessments
- Added paired Serbian and English lessons 43–47: dates/months/calendar, numbers/time/money, transport/tickets, doctor/health-service phrases, and everyday questions/answers.
- Added paired lessons 48–50: A1 grammar review, integrated everyday conversations, and final listening/speaking self-practice.
- Every new lesson includes eight vocabulary items with Sinhala-script pronunciation and Sinhala meaning, phrase/grammar guidance, examples, a short dialogue, a listening prompt and four practice questions.
- Added separate 20-question Serbian and English A1 cumulative listening/comprehension exams. The Learn screen grades the multiple-choice section, saves answers with local progress, and displays a 70% pass threshold. Speaking prompts are self-practice only; the app does not automatically grade speech.
- Lesson data commits: Serbian 43–47 `d09d132e3c66868be98a3554bf74dfb601f12ecb`; English 43–47 `a337d0f755c6ad95899ec5bf9a81ed059fe4ead2`; Serbian 48–50 `5b27763c73191d6ea8fbc687b8f3e3f2675dbfcf`; English 48–50 `68ce6dcaa7a8d2f799304c77d274cc4984925bb5`.
- Final exam data commit: `433cf2c913647ce786fe5e36ba15786d30e004eb`; Learn-screen integration commit: `dfcd55435754fae8d3ccc39faed40285c4fab82f`.
- This completes the planned 50-lesson A1 lesson sequence and adds scored listening/comprehension assessments. It does not yet represent a fully CEFR-certified exam: reading/writing assessment and automatic speaking evaluation are not implemented, and Sinhala pronunciation requires fluent-speaker review.
- Latest Expo validation and Android build runs must be checked before claiming the app builds successfully. No APK artifact or physical-device test is confirmed by this documentation update.


### A1 lesson-sequence integrity audit
- Audited the lesson arrays after adding the final units. Serbian and English each now contain exactly 50 structured lesson objects, with lesson numbers 1–50 present once each.
- Filled Serbian sequence gaps at lessons 3–5 and English sequence gaps at lessons 8–10; removed duplicate lesson objects introduced during the earlier batch additions.
- The 50-object count is source-verified. Final CI validation and APK artifact verification are still pending; this does not replace native-speaker review or physical-device testing.


## Latest development update — 2026-11-18 (A2 lessons 36–40)
- Read the current repository handoff and inspected the latest commits before editing. The current A2 source files contained lesson IDs 1–35 in both languages.
- Added five paired A2 lessons to `serbianA2Lessons.js` and `englishA2Lessons.js`:
  36. Planning a trip and booking accommodation.
  37. Making a complaint and asking for a solution.
  38. Cooking and following a recipe.
  39. Planning around the weather forecast.
  40. Describing a past experience and event.
- Each new lesson has 8 vocabulary entries with Sinhala-script readings and meanings, a grammar explanation and phrase card, 3 examples, a 4-line dialogue, a listening task, and 4 practice questions.
- Serbian data commit: `dbdab4eaa242626ce750e1133a49c219449bb1eb`.
- English data commit: `693ec65c5de98310934bd7b279b96ec27534d80e`.
- README documentation commit: `12b2fdccd7876bb7926aa198d147384895a8a5b1`.
- Source validation after fetching the committed files confirmed 40 lesson objects in each language, unique IDs, matching lesson IDs 36–40, and the expected vocabulary/examples/dialogue/listening/practice fields. `App.js` already imports both A2 lesson arrays, so the content uses the existing A2 course integration.
- No parser/build command, Expo bundle, GitHub Actions success, APK artifact, installation, or physical Android test was performed for this batch. Sinhala pronunciation readings are approximations and need fluent-speaker review.
- Previous progress estimates and some older handoff sections are historical and should not be treated as the current verified lesson count. Current source-level lesson totals: Serbian A1 50 + A2 40; English A1 50 + A2 40. B1–C2 lesson content remains outstanding.
- Next task: add paired A2 lessons 41–45 to both languages, then audit A2 lesson progression and create aligned A2 revision/final assessments. Check the latest GitHub Actions workflows before claiming build readiness.

- 2026-11-18: Added paired A2 lessons 41–45 to Serbian and English. Topics: invitations and making plans; work experience and interviews; household problems and repairs; opinions and comparisons; rules, permission and obligations. Each new lesson includes eight vocabulary cards with Sinhala-script readings and meanings, a Sinhala-supported grammar note and phrase, three topic examples plus the lead phrase, a four-line dialogue, one listening check and four practice questions. Serbian commit: `3d2295e7788f2ac0da4d1417ca2b184d28dca11c`; English commit: `3ed7ed6404f62ebb73d88d53fde7190e5541b2c4`; README commit: `e824896cb26974fdb05b756b7c85ad7fb49fd017`. Source-level JSON parsing confirmed 45 lesson objects per language, unique IDs, complete numbering 1–45, matching paired IDs, and required sections for all ten new lessons. No JavaScript/Expo build, CI pass, APK build, or Android device test was run. Sinhala-script readings are approximate and require fluent-speaker review. Next: paired A2 lessons 46–50, then audit the A2 syllabus and add cumulative revision/assessment.

- 2026-11-18: Responding to the user's request to build lessons in batches of ten, added paired A2 lessons 46–55 to Serbian and English. Topics: travel delays and alternatives; banking/payment issues; rental-home search and viewing; environment/recycling; celebrations/traditions; emails/digital communication; apologies/clarification; telephone customer support; budgeting/shopping expenses; and problem-solving/advice. Each new lesson has eight vocabulary cards with Sinhala-script readings and meanings, a Sinhala-supported grammar note, four example phrases, a four-line dialogue, one listening task and four practice questions. Serbian commit: `64075fd604c4b7812b12bb4728b6ef7366aa3ff3`; English commit: `a1108be64fb6f65a535d97cd648c325e006fcbe1`; README commit: `acd45ffcf473d2f19fb70aa8b9cb2d48cf0f92bb`. After fetching committed files, source-level JSON parsing confirmed 55 unique lesson objects in each course, matching paired IDs through lesson 55, and all ten new lessons per language had the required vocabulary/examples/dialogue/listening/practice/grammar sections. No JavaScript/Expo build, CI pass, APK build, or Android device test was run. Sinhala-script readings are approximate learner aids and need fluent-speaker review. Next: add lessons 56–65 in the same ten-at-a-time paired batches.


## Course-size rule — 2026-11-18
- Confirmed product decision: each CEFR level has a target of exactly 50 lessons; do not extend a level beyond 50 merely to increase lesson count. Work in batches of at least 10 lessons whenever possible, building Serbian and English in parallel.
- A2 lesson files were corrected from 55 entries to exactly 50 entries per language. The five extra entries 51–55 were removed from the active A2 arrays so the level ends at lesson 50.
- Serbian A2 commit: 4157879d984a1e681e89a1cfa14ad5618cfafe45. English A2 commit: da7532aa5f3a759768290062471576fef1042961.
- Next implementation: start B1 with a paired batch of at least 10 Serbian and 10 English lessons, then wire B1 into the course selector only after verifying the current app architecture. Continue with 50 lessons total for B1 and each later level.
- No build, CI run, APK build, or Android device test was performed for this correction. Source array count must be re-fetched and validated before claiming final verification.


## B1 implementation update — 2026-11-18
- Added the first paired B1 batch: 10 Serbian lessons and 10 English lessons. Topics are memorable experiences; opinions and reasons; workplace problem-solving; comparing options; news and reports; formal requests; clarifying misunderstandings; project planning; changes over time; and balanced advice.
- Each lesson object includes 8 vocabulary entries with Sinhala-script readings and meanings, grammar guidance, a phrase card, 4 examples, a 4-line dialogue section, a listening check and 4 practice questions. Quiz answer positions were varied rather than always using option A.
- Created serbianB1Lessons.js and englishB1Lessons.js; integrated both imports and a B1 lesson panel into App.js; recorded the milestone in curriculum.js (B1_COURSE_STATUS) and README.
- Serbian lesson data commits: 01808743fd19531131aaf0dbb396c3c0ce1dd839, followed by quiz-position correction 7efb6889c92b5a89856280e8e4752075d41a99dc.
- English lesson data commits: 54c4a65ef3df1c0475a3ee291bac2df4c78be545, followed by quiz-position correction 7e8ad6c2e05e1f20f96a9443d7412355d624c285.
- App integration commit: 58f9455480d5ce2ea9d3e301897fedff9b9d56da; curriculum milestone commit: a7c4395da6141f49adde9fbb17bcfb8dddbc3fc1; README commit: 7cfe2ec3dbee748fa712c76b9322120b41022515.
- Re-fetched committed files and source-parsed both arrays: 10 unique sequential lesson IDs per language, all 10 lessons have 8 vocabulary entries, 4 examples, 4 dialogue rows, 4 practice questions, grammar, phrase card and listening task; answer indices are within option bounds. App imports and B1 screen references are present.
- Quality note: the current dialogue rows reuse the four authored example sentences as a short dialogue section; a later content-polish pass should turn these into more natural alternating-speaker conversations. Sinhala-script readings are approximate and need fluent-speaker review.
- No JavaScript/Expo build, CI pass, APK artifact, installation or physical-device test was performed. Do not claim build/runtime success.
- Next: continue paired B1 lessons 11–20 in one batch; then add cumulative B1 revision and assessment after lesson 50. Keep each CEFR level capped at 50 lessons.


## Latest session — paired B1 lessons 11–20 (2026-11-18)

- Added Serbian lesson IDs `sr-b1-l11`–`sr-b1-l20` and English lesson IDs `en-b1-l11`–`en-b1-l20`, extending each B1 course from 10 to 20 authored lessons.
- Matched topics: probability/certainty; education and learning strategies; travel planning and unexpected changes; consumer choices and service complaints; processes and instructions; social issues and community participation; work-life balance/time management; environment and sustainable choices; causes/effects; and structured argumentation.
- Every new lesson has eight vocabulary entries with Sinhala-script readings and meanings, grammar guidance, a phrase card, four examples, a four-turn alternating-speaker dialogue, one listening task, and four practice questions. Quiz answer indexes were source-checked against their options.
- Serbian data commit: `7422e78b7960c5bba5e7a05f4040c7d783180418`; English data commit: `a2ca4ba9c4d5c9797e0eb853d56ecaa4cbceff0a`.
- Curriculum status commit: `e03ddb575fa6b1bd4f433776e7f10d5cd3b5ab9a` (20/50 per language; 30 remain). README commit: `3ed3ac84b5fdcee17d17bb3559752f339af93f9f`.
- Source validation re-fetched both committed arrays and confirmed 20 unique, sequential lesson IDs per language; each lesson has 8 vocabulary entries, 4 examples, 4 dialogue turns, 4 practice questions, grammar, phrase card and listening task; answer indexes are valid. Existing App.js imports and B1 renderer remain in place, so the new lesson objects are included by the same arrays.
- Quality limitation: the new Serbian and English dialogue turns are explicitly alternating A/B, but several topic examples and vocabulary sample translations are generic patterns and should receive a language-speaker quality pass. Sinhala-script readings are approximate and require fluent-speaker review.
- No Expo/JavaScript build, CI pass, APK artifact, installation or physical-device test was run for this batch. Do not claim runtime or build success.
- Next: add cumulative B1 revision and scored end-of-level listening/comprehension assessments for Serbian and English; then perform a full B1 quality audit and build/device verification.


## Latest session — paired B1 lessons 21–30 (2026-11-18)

- Added Serbian lesson IDs `sr-b1-l21`–`sr-b1-l30` and English lesson IDs `en-b1-l21`–`en-b1-l30`, extending both B1 arrays to 30 lessons.
- Matched topics: education/professional training; technology/digital communication; banking/financial planning; healthy habits/well-being; culture/traditions; job interviews/career development; conflict resolution/negotiation; media/information reliability; travel destinations/accommodation; and personal memories/life changes.
- Each lesson has eight vocabulary entries with Sinhala-script readings and Sinhala meanings, example support, grammar guidance, a phrase card, four examples, a four-turn A/B dialogue, one listening task and four practice questions.
- Serbian data commits: initial `bac00178f97b8c91ebdccaf657253a16cf3dab82`, vocabulary example completion `459a6426de3a95fbf14c427cc20cf5e77701e5e3`.
- English data commit: `2d156f693061663dbc1d2753703922c3927315d7`.
- Curriculum milestone commit: `e537eb37e00e01c1eaa49321291c4e94d093e340` (30/50 per language; 20 remain). README commit: `27fdb15a363d43f5a3eb4380b529c91b1866b49a`.
- The English data was re-fetched and checked for missing vocabulary reading/example-reading/translation fields; none were missing. Full paired-array validation and handoff commit follow below.
- Sinhala-script readings are approximate; Serbian grammar, idiomatic phrasing and vocabulary-example quality still require fluent-speaker review. This batch's example patterns and some dialogue turns are deliberately simple practice models, not a native-speaker editorial certification.
- No Expo/JavaScript build, CI pass, APK artifact, installation or physical-device test was run. Do not claim runtime/build success.
- Next: author paired B1 lessons 31–40, then 41–50; after the 50 lessons are complete, add cumulative revision and end-of-level assessments for both languages.


## Latest session — completed paired B1 lessons 31–50 (2026-11-18)

- Added Serbian IDs `sr-b1-l31`–`sr-b1-l50` and English IDs `en-b1-l31`–`en-b1-l50`. Both B1 arrays now contain 50 lessons.
- Matched topics include science/discoveries; rights/responsibilities; art/creativity; economy/job market; housing/renting; public transport/infrastructure; environmental policy/climate; food culture; education/work goals; travel services; communication/body language; digital citizenship; time management; cultural differences; entrepreneurship; report writing/data; media debates; evaluating complex problems; future planning; and integrated speaking/writing.
- Each new lesson contains eight vocabulary entries with Sinhala-script readings and meanings, example/translation support, grammar guidance, a phrase card, four examples, a four-turn A/B dialogue, one listening task and four practice questions.
- Serbian data commit: `fc4e976d68396ad1768e8b7a08d6ca2fe1fedfb1`; English data commit: `eb41860aa6fdbe144c15212e28508a4527ae9f1a`; curriculum status commit: `016f435c54b1b0dbcf3062d3de1548e2a0cbde81` (50/50 per language, zero lessons remaining). README commit: `5c774f2bc9c7470813807ab41f3dedea7d93d5c8`.
- Re-fetched both lesson arrays and verified 50 unique sequential IDs each; all lessons have eight vocabulary entries, required Sinhala reading/meaning/example fields, four examples, four dialogue rows, grammar, phrase cards, listening audio and four practice questions; answer indices are valid. Existing App.js imports remain present.
- Quality limitations: the new final 20 lessons use some repeated example/dialogue scaffolding and Sinhala-script pronunciation approximations; Serbian naturalness, grammar, and translations need fluent-speaker review. The lesson sequence is complete by count, but this is not a CEFR-certified B1 course until full content/editorial and assessment validation is complete.
- No Expo/JavaScript build, CI pass, APK artifact, installation or physical-device test was run. Do not claim runtime/build success.
- Next: audit B1 assessment translations and lesson quality, then run a JavaScript/Expo build, CI and Android device verification. After that, begin paired B2 lessons 1–10.


## Latest session — B1 cumulative revision and final exams (2026-11-18)

- Added `b1FinalExams.js` with 10 cumulative mixed-revision questions and 20 final-assessment questions for Serbian, plus matching 10/20 sets for English.
- Final exams contain vocabulary and listening items, device TTS playback, answer selection, score display, a suggested 70% pass threshold, answer feedback and a retry control.
- Integrated the revision and exam panels into the existing Learn screen for the selected language. Added exam submission state and reused local answer state; no server-side exam submission is involved.
- Data commit: `bb988473d03caef20982aba3641b5f02520f0a8b` (later listening-answer alignment fix: `3df608332acdc95e982108b648dd85c7a65c29f2`); first exam integration: `cd5b1b6b1f83c1efba02443f4cbc3c8374017e81`; revision UI integration: `1bc2f9a04a77bea62a0afb2ecedfd0ef2019aa2f`; language-switch exam reset: `1f192d39b6e4aa2e7f2700581b1cab2a5165eba0`; README commit: `bcf2eace454fd9bcf9034bc2775cf09efc5614f6`.
- Validation: each language has 10 revision and 20 final exam questions; answer indices are within option bounds; both question sets are imported and rendered in App.js. Final assessment is 20 questions and 70% (14/20) suggested pass. Five listening questions per language were corrected so each audio sentence is paired with its own sentence meaning, not a vocabulary definition. Switching languages resets the submitted exam view. Re-fetched data confirms all four arrays and UI integration.
- Content limitation: revision questions are drawn from existing lesson practice; final exam distractors and Sinhala meanings are programmatically assembled from lesson vocabulary. They require human language review before treating scores as formal proficiency evidence. The exam is practice assessment, not accredited CEFR certification.
- No JavaScript/Expo build, CI pass, APK artifact, installation or physical-device test was run. Do not claim runtime/build success.
- Next: audit B1 assessment translations and lesson quality, run build/CI and Android verification, then begin paired B2 lessons 1–10.

- Final verification for this session: 20 Serbian exam questions, 20 English exam questions, 10 Serbian revision questions, 10 English revision questions; valid answer indices and aligned listening explanations; App.js import/UI markers present. No build or device verification was performed.


## Latest session — B2 lessons 1–11 (2026-11-18)

- Added paired Serbian and English B2 lessons 1–11. Topics: argumentation and counterarguments; negotiations and agreements; leadership and feedback; urban development and social change; hypothetical situations and conditions; formal processes/passive structures; presentations and persuasion; reports/data analysis; media and cultural interpretation; conflict mediation; project risks and decision-making.
- Each lesson contains eight vocabulary entries, Sinhala-script pronunciation guidance, Sinhala meanings, grammar guidance, four examples, a four-line dialogue, a listening task and four practice questions.
- Serbian data commit: `c9a88db70cb63b12bcf35c6b4f5735e504539260`; English data commit: `5924a096c0b2d70826a29dfbe6f841b3ca2efaf4`; App integration: `cd7dda353d8e83e4eebac71f8b060e8e46ca4180`; curriculum status: `2357607b47abca4a55b43607be1f9a58975c91b3`; README: `849fb7bf746ed64728eb2b3ed49eccdd742cd5f7`.
- B2 status: 11/50 lessons per language authored and integrated; 39 remain. This is an opening batch, not a completed B2 level or CEFR certification.
- Quality limitations: Sinhala-script readings are approximate; Serbian vocabulary currently includes some Cyrillic forms alongside Latin script and requires consistency/naturalness review by a fluent speaker. English/Serbian example and dialogue translations need editorial review.
- No JavaScript/Expo build, CI pass, APK artifact, installation or physical-device test was run.
- Next: normalize Serbian vocabulary script and audit B2 lessons 1–11, then add lessons 12–25 in both languages.


## Latest session — B2 lessons 12–25 (2026-11-18)

- Added paired B2 lessons 12–25 in Serbian and English. The new topics cover professional networking; workplace diversity and inclusion; technology and ethics; environmental policy; economic trends/cost of living; academic research and sources; legal rights/civic responsibilities; healthcare systems; cultural heritage/tourism; workplace stress/work-life balance; global trade/supply chains; discursive writing/editing; future work/automation; scientific uncertainty/risk communication; customer experience/service quality; statistics/trend interpretation.
- Each added lesson contains eight vocabulary items, Sinhala-script pronunciation guidance, Sinhala meanings, grammar guidance, four examples, a four-line dialogue, a listening exercise and four practice questions.
- Serbian lesson file commit: `e7f91fdd9f65f6f769b3cd0ae3cbd66b52771a6d`; English lesson file commit: `52d21bc0526a87b85de37122f6601a366d3c5dc8`; curriculum update: `c54f3784fb9bc135c8b3cd0efd5b6459aa22ff9c`; README update: `8b3fcb9ab1a2d6370fb13415ea5eeed5cf70fd96`.
- Corrected the lesson arrays to exactly sequential lessons 1–25; no duplicate IDs remain. B2 status is 25/50 per language, 25 remaining. The existing B2 App panel consumes these arrays, so no new UI panel was needed.
- Content caveat: this batch includes some technical vocabulary and Sinhala pronunciation approximations; Serbian Latin-script consistency and idiomatic usage should be reviewed by a fluent speaker. The lesson examples and dialogue rows currently share the same four phrases, which is suitable for guided practice but should later be expanded into richer multi-turn contextual dialogues.
- No JavaScript/Expo build, CI pass, APK artifact, installation or physical-device test was run.
- Next: add paired B2 lessons 26–40, then 41–50; afterward create B2 cumulative revision and scored final assessments, audit language quality, and verify build/device readiness.


## Latest session — B2 lessons 26–40 (2026-11-18)

- Added 15 paired Serbian and English B2 lesson records (lessons 26–40), bringing each B2 course array to 40/50 lessons; 10 lessons remain per language.
- Topics: contract negotiation; lifelong learning; urban planning and housing; workplace conflict mediation; consumer rights; energy transition; research methods and data quality; public speaking; cultural identity and migration; digital privacy; healthcare communication; financial planning; journalism and source evaluation; project delivery; ethics in science and technology.
- Serbian lesson data commit: `6a64647a6e0a74ba2f891b158e46b5132e599c36`; English lesson data commit: `97dc0aeceee89b7188adc9c1d91f784849f75f1c`; curriculum update: `dbaca86921aa6540ea077edf8abc5b50dac4220c`; README update: `72ed20954162843b25fa948af30780e7fba5d6ff`.
- Existing B2 Learn screen already consumes the lesson arrays; no App.js integration change was needed. Curriculum now records 40 authored paired lessons and 10 remaining.
- Validation performed in this session is source-level only so far; re-fetch and verify the final arrays and curriculum before reporting completion. The new lesson batch uses reusable practice scaffolding and some generalized examples; Sinhala-script readings and Serbian naturalness need fluent-speaker/editorial review. These records are learning drafts, not CEFR certification.
- No Expo/JavaScript build, CI pass, APK artifact, installation or physical-device test was run.
- Next: add paired B2 lessons 41–50, then build B2 cumulative revision and scored final assessments for both languages. Afterward audit language quality and run build/Android verification.


## Latest session — B2 lessons 41–50 (2026-11-18)

- Added the final 10 paired Serbian and English B2 lesson records. Both lesson arrays now contain 50 sequential unique lessons (50/50 per language).
- Topics: international cooperation and diplomacy; crisis communication and resilience; advanced negotiation; literature and critical interpretation; professional correspondence and reports; social inequality and inclusion; sustainable tourism; innovation and entrepreneurship; linguistic nuance and idiomatic expression; integrated B2 communication and reflection.
- Serbian data commit: `f5abddcf55b32992d0e931e620b3211563ad246c`; English data commit: `6debb692f0e6ed463b1210c4a76418391eb8f562`; curriculum status update: `d7fde0f434552f3482d3a54108337143605f9dca`; README update: `5743b1d4c24908f7c16732b73aceef7ff30a2881`.
- Existing App.js B2 panel consumes the arrays; no new panel or import is needed. Curriculum records 50 authored lessons in each language and zero remaining lesson records.
- Source-level validation is pending re-fetch in this session. Content limitations: Sinhala pronunciation is approximate; Serbian idiom and grammar, translations, and English/Sinhala readings need editorial review. Newer batches use reusable practice scaffolding and require richer contextual dialogues and more topic-specific exercises. 50 lesson records do not constitute CEFR certification.
- No Expo/JavaScript build, CI pass, APK artifact, installation or physical-device test was run.
- Next: create paired B2 cumulative revision and scored final assessments (Serbian and English), using language-specific question sets, listening/TTS prompts, valid answer keys, score feedback and a retry flow. Then audit language quality and run build/Android verification.


## Latest session — B2 revision and final assessments (2026-11-18)

- Added `b2FinalExams.js` with paired Serbian and English cumulative revision sets (10 questions each) and final practice exams (20 questions each; 10 vocabulary + 10 listening).
- Integrated the B2 revision and final assessment panels into the existing B2 section in App.js. The UI includes TTS playback for vocabulary/listening, per-question revision feedback, final answer review, score percentage, suggested 70% threshold (14/20), language-switch reset for submitted exam state, and retry.
- Assessment data commit: `e1526304b3615e23ac42eb0c9059a027f47bf5df`; App integration commit: `efa2817f57cef10322707f0e7d9c90bd7e22f0fc`; curriculum update: `73342d86151024913fa16a323990e2b3861ae594`; README update: `3030e13a0e5ccd70928d7307f8cf5a40a8b64dd8`.
- Both B2 lesson arrays are complete at 50/50 each. B2 cumulative revision and final exam content is now authored and wired into the existing Learn screen.
- Source-level validation: each language has 10 revision questions and 20 final questions; every answer index is within the corresponding options array; final exams contain 10 vocabulary and 10 listening items; App.js imports and renders both language sets. Some questions have three options and others four; UI renders the supplied option count. This validates structure, not semantic correctness of every distractor or listening translation.
- Quality limitations: Serbian naturalness and Sinhala-script pronunciation, English/Sinhala translations, and listening answer alignment require editorial review. Assessments are practice tools, not CEFR certification.
- No Expo/JavaScript build, CI pass, APK artifact, installation or physical-device test was run.
- Next: audit B2 final exam listening answers and lesson language quality; run JavaScript/Expo build and CI if possible; then Android APK/device verification. Do not claim build or device success until actually tested.


## Superseding verification and development log — 2026-11-18 (latest session)

The earlier progress snapshot and resume note above are stale where they conflict with this section. A fresh repository inspection on `main` confirmed the following actual structured lesson arrays:

| Level | Serbian | English |
|---|---:|---:|
| A1 | 50 | 50 |
| A2 | 50 | 50 |
| B1 | 50 | 50 |
| B2 | 50 | 50 |
| C1 | 10 | 10 |
| C2 | 0 | 0 |

Total authored lesson records: 420 (210 Serbian + 210 English). C1 lessons 1–10 are now the first paired batch; C1 lessons 11–50 and all C2 lessons remain. Counts describe source records, not CEFR certification or native-speaker approval.

### C1 batch 1 completed
- Added `serbianC1Lessons.js` and `englishC1Lessons.js`, each with 10 paired C1 lessons. Topics: nuance/register; concise executive summaries; academic seminars/argumentation; metaphor/idiom; extended listening/inference; presentations and challenging questions; editing/style consistency; policy analysis; complex professional correspondence; integrated C1 communication.
- Each lesson includes eight vocabulary entries, Sinhala meanings and approximate Sinhala-script readings, grammar guidance, four examples, a four-line dialogue, one listening check and four practice questions.
- Integrated both C1 lesson arrays into `App.js` with an expandable C1 Learn panel, TTS controls, listening answer checks and per-question feedback.
- Updated `curriculum.js` with `C1_COURSE_STATUS` and updated README C1 progress.
- Commits: Serbian data `93202fcf40386adce8ad3424b122792e3431b441`; English data `5316e2269901121d5ebcc25f307913caec5daa43`; App integration `3c29b891e5f3812daf7c7e842038113e54be78f6`; curriculum status `6ae2d84e0e04164ba3a8e155f9c40257fb9e7440`; README `7915b15575643387a24c68d82449a558ea7504b2`.
- No JavaScript parser, Expo export, CI completion, APK build, or Android device test has yet been run for this C1 batch. Sinhala readings are approximate. Serbian and English wording, translations, and quiz distractors need fluent-speaker review.

### Exact next task
1. Verify that all five C1 batch commits are present on `main` and check GitHub Actions for the App integration commit; fix any actual build errors before adding more features.
2. Continue C1 lessons 11–20 for Serbian and English together, keeping the same lesson structure and quality.
3. After C1 reaches 50/50, add paired cumulative revision and a practice final assessment; then start C2 lessons 1–10.
4. Keep the 50-lessons-per-level target and never repeat existing topics or overwrite newer commits. Update this handoff after every batch.

### Known release limitations
- No APK artifact, installation, or physical Android runtime test is confirmed by this session.
- Native-speaker review of Serbian idiom/grammar, English naturalness, Sinhala translations and approximate pronunciation remains necessary.
- C1 currently has lessons only; cumulative revision and final assessment are not yet implemented. C2 is still roadmap-only.


- C1 source review follow-up: corrected several mixed Latin/Cyrillic characters in Sinhala-script Serbian pronunciation readings and replaced a Cyrillic quiz answer with Sinhala options. Commit: `b9740c94c2b6158a19d2eb925da1eb2027e06635`. This is a source-level correction only; pronunciation remains approximate and still needs a fluent Serbian speaker.


## Latest continuation — 2026-11-18: C1 lessons 11–20

- Added `serbianC1Lessons11_20.js` and `englishC1Lessons11_20.js`, ten lessons per language. Topics: negotiation/consensus; risk and uncertainty; data interpretation/statistical caution; ethical dilemmas; cross-cultural pragmatics; complex sentence cohesion; mediation; research design/evidence quality; strategic planning; integrated C1 case study and synthesis.
- Each lesson has eight vocabulary entries, Sinhala meanings and approximate Sinhala-script readings, grammar guidance, four examples, four dialogue lines, one listening comprehension check and four practice questions.
- Integrated both new arrays in `App.js` so the existing C1 panel displays lessons 1–20 in each selected language.
- Updated `curriculum.js` and README. C1 now has 20 Serbian + 20 English authored records; 30 more per language remain.
- Commits: Serbian batch file `fe383436fc370a1604752e4c4340e473b94648d6`; English batch file `8fd79bd62b5d3fc4cde45df444b2baa578dec282`; Serbian reading cleanup `976d2e84d2b916afce4ff61df1161c9367408cf3`; App integration `24ad7b7cb179f8e9bd554879b195e7e2821597c8`; curriculum `a6ba69da7f9e1fed8adf0379f75c7648d284e6bc`; README `101c5f1734c64a809e08908d872e9616b1a8d73f`.
- Source JSON structure was parsed and checked: 10 lessons per file; each lesson has the expected vocabulary, examples, dialogue, listening options and practice counts. Sinhala pronunciation fields were checked for Latin/Cyrillic characters. This is a data-structure check only, not a React Native/Expo build or device test.

### Next exact task
1. Verify the latest App integration and CI/build status; fix any errors before further expansion.
2. Continue C1 lessons 21–30 in Serbian and English together, preserving non-duplicate topics and the existing lesson schema.
3. Continue with lessons 31–40 and 41–50, then add cumulative C1 revision and a practice final assessment.
4. Start C2 after C1 is complete. Do not claim an APK is ready until an actual build artifact and Android runtime test are confirmed.

- Final Sinhala-script reading sweep for Serbian C1 batch 11–20 completed in commit `3ae8ebf537ae2af0a24415f29598f6af79b28d7c`; all reading fields now contain Sinhala script only. Pronunciation is still approximate and requires fluent-speaker review.


## Latest continuation — 2026-11-18: C1 lessons 21–30

- Added paired lesson data files: `serbianC1Lessons21_30.js` and `englishC1Lessons21_30.js`. Both contain ten new lessons (IDs 21–30) with matching advanced topics: rhetoric/persuasion; discourse markers/cohesion; contracts/formal terms; crisis communication; innovation/change management; sustainability/social impact; critical reading/literary interpretation; media framing/bias; advanced conditionals/hedging; and editing complex texts for precision.
- Each lesson includes 8 vocabulary items, Sinhala meanings and approximate Sinhala-script readings, grammar guidance, 4 examples, 4 dialogue lines, listening comprehension and 4 practice questions. Sinhala-script readings were normalized in a source pass; they are approximate learning aids and require human review.
- Integrated both new arrays into the existing C1 Learn panel in `App.js`. Updated `curriculum.js` with `C1_BATCH_21_30_STATUS` and updated README progress.
- Current structured lesson count: A1 50/50, A2 50/50, B1 50/50, B2 50/50, C1 30/30, C2 0/0 (Serbian/English). Total authored records: 460 (230 Serbian + 230 English). This count is source content only, not CEFR certification.
- Commits: Serbian batch creation `452f70cb67b464855944252cb7701dff033af98d`, English batch creation `51431051a3d6ce5797fcad2d3340e0dd0298af52`; Serbian reading pass `0f84c7b7462b092fbb7d3fb131088ccd4cd20249`, English reading pass `fbe2de53f19a9af92ed6339f7d6a7e67f5e27f44`; final Sinhala-reading normalization Serbian `cbaaf320156037359dfe8ca7e2e649714f529eeb`, English `fc3664ad0ad16b57807c01129b6f52076805932f`; App integration `092f6d4ad04ccb05fa3e857b0e7559f46972b5d1`; curriculum `77fd6e3d25232bf552d07ad412376344e0615d2f`; README `cb405b290d07ddc3909411375924d2eac4f56b1a`.
- Source validation performed: both lesson files parse as JSON-compatible JS arrays; 10 lessons each; 80 vocabulary entries, 40 examples, 40 dialogue lines and 40 practice questions per language; unique lesson IDs; all reading fields populated; App imports and C1 array mapping present. No React Native/Expo build or Android device test was run. CI/build status must be checked separately; do not infer success.

### Next exact task
1. Continue C1 lessons 31–40 in Serbian and English together, keeping topic coverage distinct and matching the established lesson schema.
2. Integrate both batches into the C1 Learn panel and update curriculum, README and this handoff.
3. Then create C1 lessons 41–50, followed by cumulative C1 revision and practice final assessment; only then begin C2 lessons 1–10.
4. Verify GitHub Actions and run an Expo/Android build when possible. Do not claim successful builds or device behavior without evidence.

### Known limitations
- Approximate Sinhala pronunciation aids, Serbian naturalness, English phrasing, translations and quiz distractors need fluent-speaker/editorial review.
- No successful build, APK artifact, installation or physical-device runtime test is confirmed for this batch.


## Latest continuation — 2026-11-18: C1 lessons 31–40

- Added `serbianC1Lessons31_40.js` and `englishC1Lessons31_40.js`, with ten paired advanced lessons each. Topics: diplomacy and tactful communication; public policy evaluation; financial reporting and accountability; scientific uncertainty and peer review; leadership and organisational culture; data privacy and information governance; academic writing and source attribution; idioms/metaphors/register; debate and rebuttal; integrated professional project.
- Each lesson contains eight vocabulary entries, Sinhala meanings and approximate Sinhala-script readings, Sinhala grammar guidance, four examples, a four-line dialogue, listening comprehension and four practice questions. Readings are generated approximations and require fluent-speaker review.
- Integrated both arrays into the C1 Learn panel in `App.js`; updated `curriculum.js` with `C1_BATCH_31_40_STATUS` and appended the progress to README.
- Current structured lesson records: A1 50/50, A2 50/50, B1 50/50, B2 50/50, C1 40/40, C2 0/0 (Serbian/English). Total: 480 records (240 Serbian + 240 English). This is authored source content, not CEFR certification.
- Commits: Serbian data `8e5d4dd8856ddfa880bf63318dbfc8a494fd271b`; English data `182acb367107fe08c96288741c0bd5d9916e5bc9`; App integration `9d1e8fd073bd9cea2969365b2243d39a66bdeea7`; curriculum `2b3c03e5ea12ee9801b84419ad32a2b6e2a6b745`; README `14486e3b1601e4434f731a8879297c64f8251d2b`.
- Source validation: both JS exports parsed as JSON-compatible arrays; 10 lessons each; 80 vocabulary items, 40 examples, 40 dialogue lines and 40 practice questions per language; unique IDs; all reading fields populated and no Latin/Cyrillic letters remain in reading fields; App imports and panel mapping present. No Expo build, CI pass, APK artifact or Android device test was run in this session.

### Next exact task
1. Create C1 lessons 41–50 in Serbian and English together, with new non-duplicated topics and the same full lesson structure.
2. Integrate both lesson arrays into the C1 Learn panel and update curriculum, README and HANDOFF.
3. Then create cumulative C1 revision and practice final assessments in both languages. After C1 is fully completed, begin C2 lessons 1–10.
4. Check CI and run Expo/Android build and device verification when possible; do not claim success without actual evidence.

### Known limitations
- Serbian naturalness, English phrasing, Sinhala translations, approximate Sinhala pronunciation and exercise distractors require fluent-speaker/editorial review.
- No successful build, APK artifact, installation or physical-device runtime test is confirmed for this batch.


## 2026-11-18 — C1 lessons 41–50 completed
- Added paired source files `serbianC1Lessons41_50.js` and `englishC1Lessons41_50.js`; each contains ten C1 lessons (41–50) with eight vocabulary entries, Sinhala meanings/readings, grammar guidance, four examples, dialogue, listening practice and four questions per lesson.
- Topics: strategic foresight; advanced negotiation; corporate governance; climate adaptation; digital transformation; causal inference; literary criticism; crisis communication; evidence-led capstone recommendations; professional integrity and ethical judgement.
- Integrated both files into the C1 Learn lesson sequence in `App.js`; updated `curriculum.js` and README. C1 authored content now totals 50 Serbian + 50 English lesson records.
- Commits: Serbian data initial `b9deaf9a92366c4c4967f17b6b0b9ab7b43003ef`, English data initial `9f81822bcb34b45dc325843cdb84cb7db48d9548`, Serbian content refinement `33694b4cc32b7f93e872830ffd699cab8075fd7c`, English final lesson `da295658723fa82d13b8b87d0fc5695ba280bf50`, Serbian examples/dialogue `744b16c15b9e885d3345b5422565ed21a76c2ca4`, App integration `a4b35e296155a08056b5e87399f782d01f51bd78`, curriculum `ccfedfc3ae6baccad01c60a6df1b351fb3ec1dbe`, README `02fc72fcb7506e8a7857c69998b771322806f256`, Sinhala-script reading correction `7574d67ce8887ea17bb9dc6aaa8fa1410ecb2d2c`.
- Source validation: both lesson modules parse as JSON-compatible JS; each has ten unique lesson IDs, 80 vocabulary items, 40 examples, 40 dialogue lines, 40 practice questions and ten listening tasks. App imports and C1 array mapping are present. Pronunciation readings are approximations and need fluent-speaker review.
- Not run: npm install, parser/linter, Expo export, CI verification, native Android build, APK creation/install or physical-device runtime. Do not claim build or device success.
- Next exact task: create cumulative C1 revision and scored final practice assessments for Serbian and English in parallel, integrate them into the C1 Learn panel, and validate answer alignment, listening items and Sinhala readings. Then proceed to C2 lessons 1–10.

- Follow-up correction commit: `fc7eab39185b279c47a32b676c20f7e5a46291da` completed conversion of residual English pronunciation guide characters to Sinhala script. Final source count validation: 10 lessons, 80 vocabulary items, 40 examples, 40 dialogue lines, 40 practice questions and 10 listening tasks; all required vocabulary/example/dialogue readings are populated and no Latin/Cyrillic characters remain in those reading fields. This remains approximate pronunciation support, not phonetic transcription.


## 2026-11-18 — C1 cumulative revision and final assessments
- Added `c1FinalExams.js` with 10 Serbian + 10 English cumulative revision questions and 20 final practice questions per language. Each final exam contains 14 vocabulary questions and 6 listening-comprehension questions, with answer explanations and Sinhala meanings. Listening items include approximate Sinhala-script readings and use existing device TTS for replay.
- Integrated revision and final exam panels after the 50 C1 lessons in `App.js`. Added separate C1 exam submission state, mandatory completion of all 20 answers before submission, score percentage, suggested 70% threshold, correct-answer feedback and retry. Revision questions are individually checked. Existing progress storage persists selected answers through the app's existing lessonAnswers object; exam submitted state itself is session-only.
- Updated `curriculum.js` with `C1_ASSESSMENT_STATUS` and README with the assessment scope and limitations.
- Commits: assessment data `e7dbe96d55048bf898ef46331d9e7de6c88ccbbb`; App integration `dfea7235637a4c3c4c24d74cca7bb61c10bb3d11`; curriculum `f97b1db26224bba5b6135d7f76d7a33b9db6ad0a`; README `17fab4976cc2f5ac0a385853e9f79da7e12bad00`.
- Quality correction during review: Serbian C1 lessons 41–49 previously had English example/dialogue text and malformed lesson labels. Corrected their lesson titles/units, Serbian examples and dialogue, Sinhala meanings, audio text and Sinhala-script reading guides in commit `5d36200dff197c0208273806fda5fcc4a978ca23`.
- Source validation after correction: Serbian and English C1 41–50 each contain 10 unique lessons, 80 vocabulary entries, 40 examples, 40 dialogue lines, 40 practice questions and 10 listening tasks; all vocabulary/example/dialogue readings are populated and contain no Latin/Cyrillic letters. Assessment validation: each language has 10 unique revision questions and 20 unique final questions (14 vocabulary + 6 listening), all with valid answer indexes. App imports and assessment UI/state references are present.
- Not run: npm install, Expo bundle, CI, native Android build, APK creation/install or physical-device testing. Do not claim build or runtime success. Sinhala readings remain approximations; Serbian/English content and distractors require fluent-speaker review.

### Next exact task
1. Start paired C2 lessons 1–10 for Serbian and English, using new advanced topics and the full lesson schema (8 vocabulary, Sinhala meanings/readings, grammar, 4 examples, dialogue, listening and 4 practice questions).
2. Integrate both C2 arrays in Learn, update curriculum, README and HANDOFF, and source-validate both tracks.
3. Continue C2 in batches of ten through lesson 50, then add cumulative C2 revision and final practice assessments.
4. Verify CI/Expo/Android build and device behavior when possible; never equate authored content with a verified APK or CEFR certification.

- Follow-up assessment accessibility refinement: commit `4668ccb498d4f4e6f62adfea8fe36c0df3b30504` adds Sinhala-script pronunciation fields for each vocabulary term in the C1 revision/final questions; App commit `163fc4bc449c57cbcdb2ce8c178245fac107e565` displays those readings and offers TTS playback. Current GitHub Actions for the latest App commit were queued/pending at the last status check; no successful result is confirmed yet.


## 2026-11-18 — C2 lessons 1–10 started
- Added paired modules `serbianC2Lessons.js` and `englishC2Lessons.js`, each with ten C2 lessons and 8 vocabulary entries, Sinhala meanings/readings, grammar guidance, four examples, four dialogue lines, listening practice and four questions. Topics include pragmatic implicature, irony/sarcasm, dialect variation, rhetoric, lexical nuance, intertextuality, textual reconstruction, mediation, cultural translation and expert synthesis.
- Integrated both C2 lesson arrays into a dedicated C2 Learn panel in `App.js`, reusing the existing expanded-lesson, answer-check, listening and TTS behavior. Serbian practice prompts/explanations are localised in Serbian in commit `2ba223b27a0c1eccf1d9fd6aac1adbaf48335341`.
- Commits: Serbian C2 source `b8a8493f805b345dc578716f5de09a43eb07b367`; English C2 source `4172ba04f8f22f9eb0453e92955e41b6b67c177c`; App integration `fd5df5e5b8bec3a9e0ba3515e3d3f36ab413807c`; curriculum `2793044c7146a9021e7973f83cd73a4f963bfc48`; README `2af1ccb8cd7b98cc886ac3263b5e8859bae984d2`.
- Source validation: both C2 modules parse as JSON-compatible JS; 10 unique lessons each, 80 vocabulary items, 40 examples, 40 dialogue lines, 40 practice questions and 10 listening tasks per language; all vocabulary/example/dialogue readings populated and Sinhala-script-only. App imports and C2 Learn panel references are present. This is source validation, not a successful app build.
- C1 cumulative assessment work in this session: 10 revision + 20 final questions per language (14 vocabulary, 6 listening), integrated into Learn. Sinhala pronunciation fields and audio playback are displayed for target vocabulary. Serbian C1 41–49 examples/dialogue were corrected into Serbian text during review.
- Latest known CI/Android workflows were queued/in progress; no successful Expo bundle or APK build/install result has been confirmed. Continue checking Actions; do not claim build success.

### Next exact task
1. Continue paired C2 lessons 11–20 for Serbian and English with ten new, non-duplicated expert-level topics and full lesson schema.
2. Integrate both batches in the C2 Learn panel and update curriculum, README and HANDOFF.
3. Continue batches 21–30, 31–40 and 41–50, then create cumulative C2 revision and final practice exams.
4. Review all C1/C2 advanced phrasing, Sinhala meanings and approximate readings with fluent speakers; verify CI, Expo bundle, native APK and Android device before claiming release readiness.


## 2026-11-18 — C2 lessons 11–20 completed
- Added paired modules `serbianC2Lessons11_20.js` and `englishC2Lessons11_20.js`. Ten lessons per language cover philosophy of language; legal interpretation; diplomatic protocol/strategic ambiguity; synthesis of conflicting evidence; cognitive bias; semantic change; cross-cultural pragmatics; ethics in emerging technologies; expert dialogue; and a C2 capstone under uncertainty.
- Each lesson contains 8 vocabulary entries, Sinhala meanings and approximate Sinhala-script readings, grammar guidance, four examples, four dialogue lines, listening practice and four practice questions. Serbian examples and dialogue are Serbian-language; English equivalents are authored separately. Serbian practice prompts in the initial C2 batch 1–10 were localised in Serbian.
- Integrated the new arrays in `App.js` so C2 now renders lessons 1–20 in sequence. Commits: Serbian data `794b8435f8d99c2c972d8bbda029f7f387ef926f`; English data `9ca1504f9a4599e58b711a27b828e332b1ce5e79`; App integration `37d7ee3acc5e2a16cedfcbbd12bfde919daed592`; curriculum `0d9d3e396c022a0b88df5b4ee33fee8383da15e9`; README `c88f599b998bcda099c4d9f015558f58dc63c5d8`.
- Source validation: each new file parses as a JSON-compatible JS array; 10 unique IDs, 80 vocabulary items, 40 examples, 40 dialogue lines, 40 practice questions, 10 listening tasks; no missing required readings and no Latin/Cyrillic characters remain in vocabulary/example/dialogue reading fields. App imports and combined C2 array mapping present.
- C2 authored total is now 20 lessons per language (40 lesson records); 30 lessons remain in each track. C1 has 50 lessons per language and paired revision/final practice assessments.
- CI and native Android build status remain unconfirmed; recent Expo/Android Actions were queued or in progress at the last check. No successful APK artifact or device installation is confirmed.

### Next exact task
1. Continue paired C2 lessons 21–30 for Serbian and English with ten fresh expert-level topics and the full lesson schema.
2. Integrate both batches and update curriculum, README and HANDOFF.
3. Continue C2 lessons 31–40 and 41–50, then add C2 cumulative revision and final practice assessments.
4. Review C1/C2 Serbian and English naturalness, Sinhala translations and pronunciation with fluent speakers; verify Expo/Android builds and physical-device behavior before claiming release readiness.



## 2026-11-19 — C2 lessons 21–30 completed
- Added paired modules `serbianC2Lessons21_30.js` and `englishC2Lessons21_30.js`, with ten advanced lessons per language: corpus linguistics/concordances; discourse markers/information structure; phonological variation/prosody; translation/untranslatability; public narratives/historical memory; epistemic modality/evidentiality; academic peer review; conflict-sensitive public discourse; humour/satire/intercultural transfer; and research presentation/expert defence.
- Each lesson has eight vocabulary entries with Sinhala meanings and approximate Sinhala-script readings, grammar guidance, four examples, four dialogue lines, listening practice and four practice questions. Serbian and English content are authored separately; Serbian practice prompts are Serbian.
- Integrated both arrays into the C2 Learn sequence in `App.js`; updated `curriculum.js` and `README.md`.
- Commits: Serbian source `c312f93186a6104270b45055213e660ddc4ce016`; English source `59fd3ff051c5b761f06d1abd547988d247bf9cf7`; App integration `52ae6c8b88c4550f1ae061d546be0a7ff5da5117`; curriculum `3b1839f0fa3158db2dda72c0643761c54b1c375f`; README `6c9c177871312fec79a4efb30394a8d646d48721`.
- Source validation: each batch has 10 unique lessons, 80 vocabulary items, 40 examples, 40 dialogue lines, 40 practice questions and 10 listening tasks; no required vocabulary/example/dialogue readings are missing. App imports and combined C2 sequence references are present. This is source validation only; no build, APK installation or physical-device test is claimed.
- Sinhala-script readings are approximate and require fluent-speaker review. C2 now has 30/50 lessons per language. Across the six levels, the authored total is 280 lessons per language, 560/600 paired records (93.3%).

### Next exact task
1. Continue paired C2 lessons 31–40 for Serbian and English with ten fresh expert-level topics and the full lesson schema.
2. Integrate both batches and update curriculum, README and HANDOFF.
3. Complete C2 lessons 41–50, then create cumulative C2 revision and final practice assessments.
4. Review advanced language naturalness, Sinhala meanings/readings with fluent speakers; verify Expo/Android builds and a physical Android device before claiming release readiness.


## 2026-11-19 — C2 lessons 31–40 completed
- Added paired modules `serbianC2Lessons31_40.js` and `englishC2Lessons31_40.js`, ten advanced lessons each: rhetoric/conceptual metaphor; contractual language; multimodal communication/semiotics; computational linguistics and model bias; register shifting/code-switching; academic abstracts and project proposals; negotiation/concessions; syntactic ambiguity/scope; historical semantics; and simultaneous interpreting/cognitive load.
- Each lesson includes eight vocabulary entries with Sinhala meanings and approximate Sinhala-script readings, grammar guidance, four examples, four dialogue lines, listening practice and four practice questions. Serbian and English content are separately authored, with Serbian exercise prompts in Serbian.
- Integrated both arrays into the C2 Learn sequence in `App.js`; updated `curriculum.js` and `README.md`.
- Commits: Serbian source `847f513912dcb1cc730f144d7ecff0f3a00569f8`; English source `7ca936c18ed4d313291e1283288e2becfd4f778d`; App integration `616609f6f4935a727afcf5380d350e574ceaeade`; curriculum `e775a46ef2811b3a0efa289761c86190cbfde45b`; README `6671c70d17a9c7423f05aec65ec3632abfadd417`.
- Source structure/count validation is pending final check. No build, APK installation or physical-device test is claimed. Sinhala-script readings are approximate and need fluent-speaker review.
- C2 now has 40/50 lessons in each language. Across all six levels, authored content totals 290 lessons per language, 580/600 paired records (96.7%).

### Next exact task
1. Complete paired C2 lessons 41–50 for Serbian and English.
2. Integrate both arrays and update curriculum, README and HANDOFF.
3. Build cumulative C2 mixed revision and final practice assessments for both languages, including listening and vocabulary/grammar coverage.
4. Review advanced phrasing and Sinhala meanings/readings with fluent speakers; verify Expo/Android builds and a physical Android device before claiming release readiness.


## 2026-11-19 — C2 lessons 41–50 completed; lesson authoring finished
- Added `serbianC2Lessons41_50.js` and `englishC2Lessons41_50.js`, ten advanced lessons per language: discourse analysis/stance; sociolinguistic variation/language policy; philosophy of science/epistemic uncertainty; legal argumentation/precedent/proportionality; textual cohesion/information structure; translation ethics; crisis communication/public trust; forensic pragmatics; structured debate/rebuttal/synthesis; and integrated C2 expert-communication capstone.
- Each lesson includes eight vocabulary entries with Sinhala meanings and approximate Sinhala-script readings, grammar guidance, four examples, four dialogue lines, listening practice and four practice questions. Serbian and English content are authored separately, and Serbian exercise prompts are in Serbian.
- Integrated both arrays into the C2 Learn sequence in `App.js`; updated `curriculum.js` and `README.md`.
- Commits: Serbian source `fea716ff7d140447cddeb50827555e9fb1d1fb64`; English source `0aa2c0371d6c0c08f7e5845f2feb41bafe41acea`; App integration `7a6f094dc079bd594814a5ee6ddef6c73c146761`; curriculum `a96aa21bf2e902bd6b793fead341c36f1ff75372`; README `6aa9d1367f57fbc5d740853742b29da466d10ec3`.
- Source validation is pending. No Expo build, APK installation or physical-device test is claimed. Sinhala-script readings are approximate and need fluent-speaker review.
- All C2 lesson content is now authored: 50/50 Serbian and 50/50 English. Across A1–C2, this is 300 lessons per language, 600/600 authored records (100%). This marks completion of lesson authoring only, not all product/release work.

### Next exact task
1. Create cumulative C2 mixed-revision and final practice assessments for Serbian and English, covering the full C2 vocabulary, grammar, discourse and listening scope.
2. Integrate assessment UI in `App.js`, using the established C1 assessment patterns while keeping C2 tests clearly marked as practice, not official certification.
3. Validate all C2 lessons and assessments, including unique IDs, Sinhala readings/meanings and Serbian localization.
4. Review advanced Serbian/English naturalness and Sinhala pronunciation with fluent speakers; verify Expo/Android builds and a physical Android device before claiming release readiness.


## Final C2 lesson validation — 2026-11-19
- Final Serbian source polish corrected Croatian-form vocabulary in the Serbian C2 41–50 file (`Procijenite` → `Procenite`, `protuprimer` → `kontraprimer`, `protuargument` → `kontraargument`). Correction commit: `809a6e12e8ea473fab6dca4118dab02689aa54b4`.
- Final batch source validation: 10 unique lesson IDs per language; 80 vocabulary entries, 40 examples, 40 dialogue lines, 40 practice questions and 10 listening tasks per language; no missing Sinhala-script readings or Sinhala meanings in vocabulary/examples/dialogue.
- C2 aggregate source validation: exactly 50 lessons and 50 unique IDs in Serbian, and 50 lessons and 50 unique IDs in English. App imports and the full 1–50 lesson sequence are present.
- This is source/content validation only. CI/Expo workflow state must be checked separately; no successful APK or device test is claimed.


## 2026-11-19 — C2 cumulative assessments completed and integrated

- Added `c2FinalExams.js` with paired Serbian and English cumulative C2 assessments. Each language has 10 mixed-revision questions and 20 final-practice questions. The final test contains 10 vocabulary, 4 grammar/discourse and 6 listening questions. Target-language vocabulary and listening audio include Sinhala meanings and approximate Sinhala-script readings; the Learn UI uses device text-to-speech.
- Integrated the C2 revision and scored final-practice panels into `App.js`. The final test requires all 20 answers, shows explanations and score, offers retry, and uses a suggested 70% (14/20) practice threshold. The test is explicitly labelled practice, not official CEFR certification. Speaking is not automatically graded.
- Updated `curriculum.js` and `README.md` to record C2 lesson and assessment completion and remaining review work.
- Final relevant commits: C2 assessment data/terminology `e9ade53bf12e115acdfc4dd079d69bf1be00b083`; App integration/state `23fa894fc9daecf83d31f062c978123a60abb107`; curriculum `3b236e4a26114af83f41edd167bf002346466cb3`; README `526bfd88cc059779deb0a8ab5483aebad82fc143`.
- Source-level validation confirmed 20 Serbian and 20 English C2 vocabulary/term records, 10 unique revision question IDs and 20 unique final question IDs per language, valid answer indexes, complete vocabulary and listening readings, and the C2 imports, state, reset behavior and UI markers in `App.js`. Curriculum has one C2 assessment status declaration and README has one C2 assessment section.
- Expo validation runs `44552011499` (README commit `526bfd88`) and `44552155854` (handoff commit `74b86f5d`) passed dependency installation, Expo compatibility and Android bundle export. An earlier Expo run failed because a duplicate `C2_ASSESSMENT_STATUS` declaration had been introduced; it was removed in commit `bfb5c07d`, after which Expo validation passed. Android APK build run `44552002628` (curriculum commit `3b236e4a`) had passed dependency installation, Expo compatibility, Android bundle export and native project generation; signed APK assembly was still in progress at the last check. The APK run for `e9ade53b` was cancelled; no completed native APK build, installation or physical-device test is claimed.
- Sinhala-script pronunciation is approximate and all advanced Serbian/English material still needs fluent-speaker review.

### Next exact task
1. Recheck the latest Expo validation and Android APK workflow runs; inspect and fix any failing dependency, bundle or native-build step.
2. Run a full content QA pass across all six CEFR levels, especially answer/translation alignment, Serbian naturalness, English naturalness and Sinhala pronunciation.
3. Arrange fluent-speaker review and physical Android device testing. Do not claim release readiness until these checks are completed.


## 2026-11-19 — A2/B1/B2 vocabulary example QA

- Automated review identified that every A2 vocabulary example in both languages repeated only the vocabulary word (800 entries total), while B1/B2 vocabulary entries reused a small number of generic sentences across many terms.
- Updated all 400 vocabulary entries in each of the six A2/B1/B2 files (2,400 entries total) to use complete contextual sentences from the corresponding lesson's examples section. Exact term matches were preferred where available; otherwise, examples from the same lesson were assigned in rotation. Sinhala sentence translations and readings were synchronized.
- Revalidated all six files: 50 unique lesson IDs and 400 vocabulary entries per file, no missing word/meaning/reading/example/translation fields, no example identical to the word alone, and 2–4 distinct sentence examples per lesson. This is structural QA; term-specific relevance and linguistic naturalness still require human review.
- Updated commits: Serbian A2 `a45cf08e258d5a90d4e63cfd236cf1f804145716`, English A2 `d3eb9f6e2ddac9b31968a06d6ab55d3b379b4e78`, Serbian B1 `b4a775d9808c7785100d0e5b2056c849b02df006`, English B1 `89e3f1d3a2ce6ede35b768abbfa0404af7182494`, Serbian B2 `bb2b0c4c81a1fc7397aa4c97eab24b86ea37d55e`, English B2 `c9b99dd793803fa78432461c4c650cacd3283ece`.
- Added `CONTENT_QA_REPORT.md` and `CONTENT_QA_STATUS` in curriculum. A1 legacy parser-aware QA, full remaining C1/C2 QA, fluent-speaker review and physical Android testing remain.
- Android APK artifact from run `44552002628` is available in GitHub Actions as `basanova-android-debug-apk` (about 41 MB; expiry 2026-12-03). CI build succeeded; physical installation has not yet been verified.


## CI after A2/B1/B2 example QA updates
- Expo validation run `44554871348` passed for code commit `c9b99dd7`, including dependency install, Expo compatibility and Android bundle export after the A2/B1/B2 vocabulary example corrections.
- Android APK build run `44555170085` was still in progress at the latest status check, targeting curriculum commit `e3c754fa` (which includes the content QA changes). An older successful APK artifact exists from run `44552002628` / commit `3b236e4a`, but it predates the A2/B1/B2 example corrections. Prefer the newer build once it completes.
- Latest documentation-only Expo runs were queued/in progress. No physical Android install test has been completed.


## 2026-11-19 — Fix standalone Android APK bundle loading
- User reported the installed APK opening the React Native red screen: “Unable to load script” and asking for Metro / `index.android.bundle`.
- Diagnosis: the Android workflow was running `assembleDebug`, which produces a development/debug variant that expects Metro instead of a standalone release JS bundle. The preceding `expo export` step does not make the debug APK self-contained.
- Updated `.github/workflows/android-apk.yml` to build `assembleRelease`, verify that `app/build/outputs/apk/release/app-release.apk` exists and is non-empty, and upload it as `basanova-android-release-apk`. Workflow update commit: 7ce9cad0717bf480d6267092585c2060134c3d71.
- The new GitHub Actions run must complete before claiming the release APK is fixed. Then install that new release artifact and verify app startup on a physical Android device. The previous debug APK is not the correct standalone artifact.


## 2026-11-19 — Android safe-area and responsive layout pass
- User requested continuing the remaining BasaNova work and specifically fixing full-screen layout alignment where content overlaps the Android status/notification bar, plus general screen-fit issues.
- Updated `App.js`: switched the root to `SafeAreaProvider` and `SafeAreaView` from `react-native-safe-area-context` with top/right/bottom/left insets; explicitly keeps the Android status bar visible and non-translucent; constrained header, course bar, content and bottom navigation to a centered responsive width; tightened bottom-nav item sizing and label alignment. App commit: `df6fd16e950605832fa32a00d7271ae969c88945`.
- Added `react-native-safe-area-context ~5.6.0` to `package.json`. Dependency commit: `4807b20ccdafc8e67553570b79f9854684ca893f`.
- Not yet verified: GitHub Actions dependency install/Expo export/release APK after these changes, and physical-device layout across screen sizes, Android navigation modes, and keyboard-open states. Do not claim these are fixed until a new APK is installed and checked.
- Next: inspect CI for the latest package commit; fix any dependency/build failures; then perform a systematic UI audit of every tab and lesson surface for clipping, overflow, spacing, typography, touch targets, keyboard behavior, and system-bar insets. Continue remaining content QA and release tasks after layout baseline is stable.


## 2026-11-19 — Responsive layout, Android release packaging and project docs
- Continued the user's request to fix all-screen alignment and complete the remaining BasaNova quality/release work.
- Safe-area UI implementation: `App.js` now uses `SafeAreaProvider` and `SafeAreaView` from `react-native-safe-area-context`, applies all four system insets, keeps the status bar visible, and uses centered responsive widths for header/content/course bar/navigation. Bottom navigation labels were tightened for narrow screens. Commit: `df6fd16e950605832fa32a00d7271ae969c88945`.
- Added explicit `react-native-safe-area-context ~5.6.0` dependency. Commit: `4807b20ccdafc8e67553570b79f9854684ca893f`.
- Android APK workflow now runs `assembleRelease`, checks that `app-release.apk` exists and is non-empty, and uploads `basanova-android-release-apk` rather than the Metro-dependent debug APK. Workflow commit: `7ce9cad0717bf480d6267092585c2060134c3d71`; workflow handoff note: `e8475d590d007d65765a8b3bf5832fb25111d7e7`.
- Added local `build:android:release` script. Commit: `de9b6b1c9c18a977c605b11bf7b0f767ae554ba2`.
- Rewrote `BUILD.md` for the standalone release APK and clarified that debug builds may require Metro. Commit: `24271f08fadb6ccb47fba65190659bac70da36e5`.
- Refreshed README's current curriculum totals and release-build status. Commit: `eabaabffed7686a83d64282428299dfec1b065d2`.
- A fresh CI status lookup for the package dependency commit returned no status entries at check time. No new release artifact or physical-device result is confirmed yet.
- Next exact work: (1) confirm the newest GitHub Actions release workflow passes dependency install, Expo compatibility, JS bundle export, native generation, Gradle release assembly and artifact upload; (2) install and open that artifact on Android; (3) inspect every app tab on narrow/wide screens and test status/navigation bars, scrolling, keyboard overlap, text wrapping and touch targets; (4) audit A1–C2 lessons, assessments, answer indices, Sinhala meanings/readings and Serbian/English naturalness; (5) test local persistence and remaining feature paths. Keep the user updated only with verified progress; source commits are not device QA.

- Follow-up mobile interaction patch: removed Android `removeClippedSubviews` from the two main ScrollViews to reduce risk of complex lesson content being visually detached/clipped, and added `keyboardShouldPersistTaps="handled"` plus `keyboardDismissMode="on-drag"` so translation controls remain usable and the keyboard can be dismissed by scrolling. Commit: `017c0c59af8170def66a01259fc08675d0bfb008`.


## 2026-11-19 — Learner guidance and age-restricted language access
- User requested clear, beginner-friendly guidance explaining how to study each lesson and build language skills through practice, plus an 18+ warning/confirmation before viewing slang and profanity content.
- Added a collapsible Sinhala-first Study Guide at the top of the Learn tab. It explains a 25-minute daily routine, a seven-step lesson sequence (objective, listen/repeat, meaning, grammar, dialogue, listening/quiz, mastery check), and spaced review on the same day, next day, after three days and after one week. It advises moving on only when the learner can recall five key words and say three sentences without looking. App commit: `364a76151ed58ab3e43532d94c5f88a840da5dd3`.
- Added an 18+ gate in front of the separate slang/profanity section. Users must affirm they are at least 18; an under-18 choice returns to ordinary lessons. The self-declared consent is stored locally with existing app preferences, and a control allows leaving the section and clearing the stored consent. Gate commit: `364a76151ed58ab3e43532d94c5f88a840da5dd3`; exit-control commit: `ed6d52b72dd7ca3508a57311460479e24ed6550a`.
- Important limitation: this is a self-declaration gate, not verified age assurance. For a public production release, align store age ratings and local legal requirements; if stronger assurance is needed, use a compliant age-assurance provider. Keep explicit sexual content and highly abusive material out of the general learning path; present slang only as contextual language-awareness education and discourage directing insults at people.
- Not yet verified: Expo/Gradle build, app runtime, local persistence after relaunch, or physical-device layout for the new guide/gate. Verify latest CI and test the adult gate with separate fresh app data before calling complete.

- README documentation for the new Study Guide and 18+ gated language-awareness section was updated in commit `0b7903f49e784d7f56ccbbd65c53a52d2e39b32c`.
- Latest App.js source inspection confirms the guide, lesson sequence, persisted self-declared 18+ gate, under-18 return path and consent-revocation control are present. GitHub commit status lookup for the age-gate UI commit returned no status entries at check time; build/runtime/device verification remains outstanding.


## 2026-11-19 — B1 retry practice and content audit checkpoint
- Verified the current `serbianB1Lessons.js` and `englishB1Lessons.js` each contain exactly 50 lesson objects (IDs `sr-b1-l1`–`sr-b1-l50` and `en-b1-l1`). The older “add lessons 21–30” Next task is therefore stale; both B1 lesson arrays are already populated through lesson 50.
- Updated `App.js` so incorrect B1 lesson quiz answers, B1 listening answers, and B1 mixed-revision answers can be retried in place. The selected answer and checked state are reset only for that question; correct answers stay complete. App commit: f94610273389d6a14701c398e5f997e7dfdac9f3.
- Updated README to document the retry behavior. README commit: bb80a8983cf551b710e2b5943ecc18da86e879e9.
- Source inspection found a content-quality issue requiring a dedicated follow-up: the first English B1 lesson's quiz prompts/options still contain Serbian wording (for example, `nezaboravan` and `sam putovao`). Audit all 50 English B1 lessons for copied Serbian quiz text and verify each language's examples, answer indices, readings and meanings before calling B1 complete.
- No build or device test has been run for this UI change. Combined CI status for the preceding docs commit was empty; the new App.js commit must be checked after GitHub Actions has had time to run.

## Next exact task
1. Verify GitHub Actions for App.js commit f94610273389d6a14701c398e5f997e7dfdac9f3; resolve any syntax, Expo or release-APK failures.
2. Audit English B1 lesson quizzes 1–50 for Serbian text copied into English exercises; correct each affected lesson in the source data, retaining Sinhala meanings/readings and matching answer indices.
3. Audit paired Serbian/English B1 lesson topics and exercise coverage, then add native-speaker review notes and update the B1 completion status.
4. Continue the systematic mobile UI and release verification; do not claim APK/device success without an actual artifact and install test.


## 2026-11-19 — English B1 quiz localization correction
- Audited the practice questions in all 50 English B1 lessons. Lessons 1–10 contained Serbian-language quiz prompts/options copied from the Serbian course; replaced all 40 questions with English-language prompts and answer choices while retaining Sinhala meanings where useful.
- Revalidated all 50 English B1 lesson records and 200 practice questions. All answer indexes are within option bounds, and the targeted Serbian-phrase scan found zero remaining matches in English B1 quiz prompts, options or explanations.
- Commit: `72f6b06d21497b5ee212a75d3c146fa5a11fc786`.
- This is a targeted localization and structural check, not a full linguistic review. Recheck CI for this content commit and continue the broader paired B1 review, C1/C2 QA, fluent-speaker review and Android/device verification.

### Next exact task
1. Verify Expo validation and Android release APK workflow after commit `72f6b06d21497b5ee212a75d3c146fa5a11fc786`.
2. Audit the remaining English B1 questions for translation/answer alignment and repetitive distractors, then compare Serbian and English B1 coverage.
3. Continue full-course content QA and physical Android/device checks; do not claim release readiness without verified build and installation.


## 2026-11-19 — English B1 lesson 31–50 language restoration
- Continued the full English B1 content audit and found Sinhala-script phonetic renderings had accidentally replaced the actual English sentence in the first example, first dialogue line and correct quiz option for lessons 31–50.
- Restored the English sentence from each lesson's existing English answer explanation, retaining the Sinhala-script pronunciation guide. Rechecked 20 lessons and 60 learner-facing text fields (quiz option, example and dialogue); none of those fields now contains Sinhala-script text.
- Commit: `a7cc8fbeffe6ce16fe87366945fa2d3ee9db3ac3`.
- This correction addresses visible language contamination but does not validate every translation, pronunciation guide, or the full lesson dialogue. Further B1 content review and CI/device verification remain.

### Next exact task
1. Audit Serbian and English B1 lesson pairs for topic, vocabulary, examples, dialogue and exercise alignment; identify repeated or generic content and any mismatched language.
2. Validate English B1 listening prompts/audio against answers and translations across all 50 lessons.
3. Check GitHub Actions for commits `72f6b06d` and `a7cc8fbe`; run a fresh release build if needed and test the artifact on Android.


## 2026-11-19 — English B1 listening text correction
- The follow-up listening audit found that English B1 lessons 31–50 also used Sinhala-script phonetic renderings as the listening audio and prompt text, despite having the correct English sentence in the answer option.
- Replaced the listening audio and prompt sentence with the matching English example sentence in all 20 lessons. Confirmed each listening audio matches the lesson's English example, contains no Sinhala-script characters, and has a valid correct-answer option.
- Commit: `9d8e261d76ecd0b498903778b04d6619abf5be20`.
- This is source-level validation. TTS voice quality and playback still need actual Android testing; the pronunciation guide fields remain approximate and should be reviewed.

### Next exact task
1. Audit English B1 lesson 31–50 listening translations and pronunciation aids; validate Serbian/English paired lesson content and answer alignment.
2. Review repeated fourth-question patterns across B1 and make them more lesson-specific without changing correct answer semantics.
3. Verify CI and standalone release APK after the recent English B1 content fixes; install and test on a physical Android device.


## 2026-11-19 — Serbian B1 lesson title localization
- Paired-course review found that all 50 Serbian B1 lesson titles were displayed in Sinhala rather than Serbian, despite the lesson body being the Serbian track.
- Replaced all 50 titles with Serbian Latin-script titles matching the paired English lesson topics. Structural validation confirms 50/50 titles use the expected `B1 · Lekcija N · ...` format and contain no Sinhala-script characters.
- Commit: `5c1cd5fbd01fee54d8983812a4af23eb0f18da97`.
- This corrects title localization only. Serbian lesson text, grammar explanations, pronunciation, vocabulary and assessment content still require broader linguistic review.

### Next exact task
1. Audit Serbian B1 lesson 1–50 practice prompts, explanations, listening text and examples for Sinhala/English contamination or translation mismatches.
2. Review paired B1 content and repetitive assessment questions; improve lesson-specific practice where safe.
3. Check CI for the latest content commits and verify a standalone release APK on Android.


## 2026-11-19 — Expo bundle syntax failure fixed
- Inspected the failed Expo validation run `44565581976` (commit `a7cc8fbe`). Dependency installation and Expo compatibility passed; Android JS bundle export failed at `App.js:566` with `Adjacent JSX elements must be wrapped in an enclosing tag`.
- Root cause: the 18+ language panel rendered a `View` followed by its exit `TouchableOpacity` as adjacent JSX siblings in one ternary branch without a wrapper.
- Wrapped that branch in a React fragment. App fix commit: `a1c5cac42a85de565f0ac78c80cbbff680b3544d`.
- New Expo validation run `44565862650` and Android APK run `44565862576` were queued at the time of this note. Do not claim the build is fixed until both complete; physical Android installation and runtime testing remain necessary.

### Next exact task
1. Monitor Expo run `44565862650` and Android APK run `44565862576`; inspect and fix any remaining errors.
2. If the standalone release APK is produced, download/install it and verify app launch, lesson navigation, TTS listening, quizzes, and age-gate navigation on Android.
3. Continue Serbian B1 prompt/audio/translation QA and lesson-specific assessment improvements.


## 2026-11-19 — B1 Serbian/English dialogue and quiz alignment audit
- Structural audit passed for 50 Serbian and 50 English B1 lessons: each lesson has four practice items, valid answer indices, a listening object with valid answer index, and at least one example.
- Content audit found a substantive mismatch in lessons 31–50: the final practice question asks what speaker B requests (Serbian track says B asks for an example; English track says the same), but the actual dialogue response is an agreement about making a better decision. The same dialogue response is repeated across all 20 lessons, and several later examples are generic/repeated.
- Earlier repeated prompt patterns also appear in lessons 11–20 and 21–30. These need content-level repair, not just changing question wording.
- No lesson content was changed in this audit; do not mark these issues resolved.

### Next exact task
1. Rewrite Serbian and English B1 lessons 31–50 dialogues so speaker B responds naturally to each lesson's topic-specific speaker A line.
2. Rewrite practice item 4 in both tracks so the question, options, correct answer and explanation accurately test the revised B line; ensure the English and Serbian tracks remain paired.
3. Replace repeated generic examples in lessons 31–50 with topic-specific examples and matching translations/readings, then run structural and duplicate-content checks.
4. Finish Android APK run `44565978458`; Expo validation run `44565978392` passed. If APK succeeds, inspect artifact and test installation/runtime on Android.


## 2026-11-19 — Serbian and English B1 lessons 31–50 dialogue/quiz alignment
- Rewrote the B/A follow-up lines in all 20 paired lessons (31–50) so the responses are topic-specific rather than repeated generic lines.
- Replaced practice item 4 in both language tracks with a question that checks the new dialogue response, matching answer choices and explanation. Kept lesson IDs, ordering, vocabulary, grammar, and listening source sentence unchanged.
- Local structural checks passed: 20/20 paired lessons have four dialogue lines and valid three-option practice items with a valid correct-answer index.
- Serbian content commit: `bc0646a1947f3b781833bca9637d98d6a073b418`.
- English content commit: `d23b5fadffa29ae88f9f42b7045aac9f03288db6`.
- The repeated generic example sentences in lessons 31–50 remain to be replaced. Existing reading/pronunciation aids for rewritten dialogue lines need linguistic review; this pass prioritized accurate language and answer alignment.

### Next exact task
1. Replace repeated generic examples in Serbian and English B1 lessons 31–50 with topic-specific example sentences and matching Sinhala meanings.
2. Review pronunciation guides for the newly edited dialogue lines; do not treat source-level checks as proof of pronunciation quality.
3. Check the Expo validation and Android APK build runs triggered by commits `bc0646a` and `d23b5fa`; only share an APK link if a successful artifact is confirmed.
4. Continue auditing repeated practice/dialogue patterns in lessons 11–30.


## 2026-11-19 — B1 lessons 31–50 topic-specific examples
- Replaced the four repeated/generic example sentences in each of Serbian and English lessons 31–50 with the lesson's new topic-specific dialogue sentences and matching Sinhala meanings.
- Updated the eight vocabulary example/translation references in each paired lesson so they point to the new topic-specific sentences rather than generic repeated examples.
- Updated pronunciation-reading fields with approximate learner guides; these are not a substitute for native-speaker pronunciation review.
- Serbian examples commit: `f3d1cd7abce47dd038d661d56e8abdf5f5bb5e0d`.
- English examples commit: `35a61fe7ab5d6920dc74e369041fb12c150279eb`.
- Local checks confirm 4 distinct examples in each of 40 files (20 paired lessons) and populated vocabulary example/translation references.

### Next exact task
1. Audit the revised Serbian/English B1 lesson 31–50 pronunciation guides and Sinhala translations for naturalness and accuracy.
2. Check CI for the latest commits and confirm whether the standalone APK artifact was successfully produced; physical Android installation is still outstanding.
3. Audit B1 lessons 11–30 for repeated dialogue and generic examples, then continue lesson-by-lesson QA.


## 2026-11-19 — B1 lessons 11–30 repeated dialogue audit
- Audited Serbian and English B1 lessons 11–30 after completing the lesson 31–50 repair.
- Found repeated final dialogue lines and repeated fourth-practice prompt patterns in all lessons 11–20 and 21–30 (20 paired lessons). The lesson dialogue topics vary, but the closing B response is copied across each 10-lesson block, so the final question often tests a generic response rather than the lesson topic.
- Full example sets were not duplicated as identical four-line blocks in this range. No content was changed in this audit.

### Next exact task
1. Rewrite the final B response and practice item 4 for paired B1 lessons 11–30 so they match each lesson's own dialogue and topic; preserve answer alignment and Sinhala meanings.
2. Then audit listening prompts and vocabulary example/translation alignment in lessons 1–50.
3. Check the latest Expo validation and Android APK workflow after commits `f3d1cd7` and `35a61fe`; confirm a successful APK artifact before sharing it.


## 2026-11-19 — B1 lessons 11–30 dialogue and practice rewrite
- Rewrote the repeated follow-up and final response lines in paired Serbian/English lessons 11–30 (20 lessons), making the conversations specific to probability and travel, learning strategies, consumer complaints, procedures, community action, work-life balance, sustainability, causes/effects, arguments, education, apps, budgeting, well-being, traditions, career skills, negotiation, media reliability, travel experiences and moving to a new city.
- Replaced fourth practice item in all 40 lesson files so the prompt, three options, correct answer and explanation match the new final dialogue response.
- Preserved lesson IDs, order, first A line and the other lesson content. Local structural checks passed for four dialogue lines and valid three-option practice items across all 20 paired lessons.
- Serbian update commit: `d2c580cc77f72d86cb821a24e3750f4a076323c4`.
- English update commit: `932d1fb90540b726da38c7f4bd8c2aaa415e42a2`.
- Sinhala reading fields added for the rewritten lines are approximate phonetic guides and require native-speaker review.

### Next exact task
1. Review the new dialogue translations and approximate pronunciation aids for Serbian B1 lessons 11–30; improve any unnatural Sinhala or phonetics.
2. Audit B1 listening prompts and vocabulary example/translation alignment across lessons 1–50.
3. Check CI and Android APK artifact status for the latest commit; do not claim an APK is ready without a successful artifact.


## 2026-11-19 — B1 lessons 11–30 pronunciation aid completion and content audit
- Completed Sinhala-script approximate pronunciation fields for the rewritten Serbian and English dialogue lines in lessons 11–30; these remain approximate and should receive native-speaker review.
- Serbian pronunciation commit: `ab7ba946df0dfbde38c709e3060bea90280abe86`.
- English pronunciation commit: `be321e059e01bb420595675707092c7bc7284dd4`.
- Audited all 50 lessons in both tracks for listening object presence/structure, valid listening answer indices, examples presence, and vocabulary example/translation presence. Both tracks have 50/50 lessons and no missing or structurally invalid listening items or empty example/vocabulary fields were found.
- The latest Expo validation and APK build must be checked again after the pronunciation commits; previous build runs may be superseded by newer commits.

### Next exact task
1. Check Expo validation and Android APK build for latest SHA `be321e0` (English file) and `ab7ba94` (Serbian file); ensure one final build runs on the latest combined main SHA.
2. Audit whether listening audio/prompt language and answer choices match each lesson's actual listening sentence, and whether vocabulary examples use the target vocabulary item correctly.
3. Review pronunciation aids with a Serbian native speaker before presenting them as definitive.


## 2026-11-19 — Follow-up question Sinhala meanings corrected
- Replaced the generic Sinhala meaning used on the new B follow-up questions in paired lessons 11–30 with question-specific Sinhala translations in both Serbian and English tracks (20 pairs).
- Serbian translation commit: `9f2734ce70918f37034703e6ba163dac498a9258`.
- English translation commit: `5534cbf4e803d4aed29fff2daf5c244a2d21e52a`.
- A heuristic vocabulary-term check is not valid for this data model because `vocabulary.word` contains English headwords while `example` is in the target language; do not treat the resulting mismatch count as confirmed content errors. Listening prompt/audio pairing and answer-index structure passed basic checks.

### Next exact task
1. Check CI on the latest English commit and ensure a final combined-main APK build completes with an uploaded artifact.
2. Review vocabulary entries manually/semantically by comparing each headword, target-language example, Sinhala meaning and pronunciation field; avoid naive substring matching across languages.
3. Continue B1 quality review, especially Sinhala translations and approximate pronunciation guides.


## 2026-11-19 — B1 vocabulary translation alignment pass
- Replaced English source sentences accidentally copied into Sinhala translation fields for English B1 lessons 11–20; all affected vocabulary entries now have Sinhala translations.
- Replaced English translations accidentally left in Serbian B1 lessons 31–50 with Sinhala translations for the matching Serbian example sentences.
- Semantic spot-check confirms the repaired sentence translations correspond to the examples; automated script check found no Latin-script translation values in English lessons 11–20 or Serbian lessons 31–50.
- Serbian B1 translation update commit: `2e64d500634620335d0783b2459bf0200eb52da5`.
- English B1 translation update commit: `22509348f6867de4f738de61344ea6382cd4502e`.
- CI runs triggered for these commits ended in immediate failure before any job steps were reported (runner_id 0); this does not currently establish a source-code failure. Investigate GitHub Actions runner/service availability and rerun validation/build.
- APK artifact is not confirmed; do not share an APK link until a successful build uploads one.

### Next exact task
1. Investigate immediate GitHub Actions runner failures and rerun Expo validation plus Android APK build on latest main.
2. Continue semantic review of B1 vocabulary examples: many early lessons reuse a small set of generic example sentences across unrelated headwords; replace with word-specific examples and matching Sinhala translations.
3. Review Serbian B1 31–50 exampleReading fields: some appear to contain Cyrillic transliteration rather than Sinhala-script pronunciation aids.
4. Review pronunciation aids with a Serbian native speaker before presenting them as definitive.


## 2026-11-19 — Serbian B1 pronunciation script cleanup
- Converted all 160 exampleReading values in Serbian B1 lessons 31–50 from Cyrillic script to approximate Sinhala-script pronunciation aids.
- Commit: `d568d4bbb24527ab3e89a5dbb04855bad42e0040`.
- Structural check: all 160 checked values now contain Sinhala script and no Cyrillic characters. These are machine-generated approximate reading aids, not native-speaker-verified phonetics; they require human pronunciation review before being treated as authoritative.
- Latest Expo validation and Android APK workflows continue to fail immediately with runner_id 0 and no job steps, including runs for commit `d568d4b`. This points to a GitHub Actions runner/dispatch issue rather than a reported app build step failure; no APK artifact has been produced.

### Next exact task
1. Continue B1 vocabulary semantic review by replacing repeated generic examples with word-specific target-language sentences and corresponding Sinhala translations, prioritizing lessons 1–30 in both tracks.
2. Keep pronunciation aids clearly marked approximate until Serbian/English speaker review.
3. Investigate GitHub Actions runner dispatch failures; retry Expo validation and APK build only once runners accept jobs.


## 2026-11-19 — Latest CI retry
- Inspected the latest main commit `7889afd874cf94980c67d58675b532627d5fb524` and confirmed both the Expo validation run (`44570485963`) and Android APK build run (`44570437110`) had failed immediately, with no job steps or logs exposed by GitHub.
- Successfully requested reruns of the failed jobs for both workflows. Rerun acceptance was confirmed by GitHub; final rerun outcomes are not yet known.
- The last confirmed APK artifact remains the earlier `basanova-android-debug-apk` from run `44552002628` on commit `3b236e4a`; it is not proof that the latest source builds.
- No lesson source files were changed in this check. The B1 vocabulary semantic audit remains the next content task, prioritizing lessons 1–30 in both languages.

### Next exact task
1. Check rerun outcomes for Expo run `44570485963` and APK run `44570437110`; inspect job steps/logs if jobs start.
2. Continue the paired B1 vocabulary semantic review for lessons 1–30, replacing repeated generic examples with word-specific target-language sentences and matching Sinhala translations/readings.
3. Only share a fresh APK after the latest-main workflow uploads a verified artifact; physical Android installation still needs testing.


## 2026-11-19 — B1 lesson 11 vocabulary repair
- Repaired the eight vocabulary-card examples in both `serbianB1Lessons.js` and `englishB1Lessons.js` for B1 lesson 11 (Probability and certainty).
- Replaced repeated generic examples with eight word-specific, natural sentences covering certainty, perhaps, likely, unlikely, estimate, forecast, definitely and possibility.
- Added matching Sinhala meanings and language-appropriate Sinhala-script pronunciation guides for each example.
- Serbian update commit: `ea2c4d3f2edd72bcf8a0546c313e889b2dd71a9d`.
- English update commit: `a4ed3223e0a6a73bf1f6a356c108a81bb3cba6bd`.
- Expo validation for handoff commit `30dc1e82071f59123d4ee6fbf84ecc81a7a7ef53` failed. GitHub job log endpoint returned 404, so the precise failure cause is not verified. No fresh APK artifact or successful Android build is confirmed.
- Source changes were committed to main; no local JavaScript parser, Expo export, APK build, or device test was available in this session.

### Next exact task
1. Repair paired B1 lesson 12 vocabulary-card examples and pronunciation/meaning fields, checking that each example actually demonstrates its target word.
2. Continue paired semantic QA through lessons 13–20, especially repeated generic examples, mismatched Sinhala translations, and copied/non-phonetic reading fields.
3. Investigate why GitHub Actions jobs fail before logs are available; do not claim CI or APK success until a run and artifact are verified.


## 2026-11-19 — Paired B1 lesson 12 vocabulary repair
- Rewrote all eight vocabulary-card examples for the paired B1 lesson 12 (Education and learning strategies) in Serbian and English.
- Each target headword now has a distinct sentence that demonstrates its meaning: strategy, revision, skill, course, goal, progress, note and method.
- Added corresponding Sinhala meanings and approximate Sinhala-script pronunciations for every example.
- Serbian lesson file commit: `70e5607b5c9f27238efb81bb0f1e6b7fc039f40d`.
- English lesson file commit: `3477cc96bbaf91e7c51bf5f057deeb50665ada67`.
- Latest workflow runs on English commit `3477cc9`: Expo validation `44573036287` and Android APK build `44573036221` were queued at last inspection. Earlier workflow runs on Serbian commit `70e5607` failed immediately; no job logs or successful artifact are available. Source changes were not locally built or device-tested.

### Next exact task
1. Check the queued Expo and APK runs on commit `3477cc96bbaf91e7c51bf5f057deeb50665ada67` and inspect their steps/logs if they start.
2. Repair paired B1 lesson 13 vocabulary examples and their Sinhala meanings/pronunciation aids, then continue through lessons 14–20.
3. Continue checking that examples truly demonstrate their vocabulary headwords; keep Serbian pronunciation guides labelled approximate until native-speaker review.
4. Do not claim build success or share a fresh APK unless a successful workflow artifact is verified.


## 2026-11-19 — Paired B1 lesson 13 travel vocabulary repair
- Replaced all eight repeated/generic vocabulary-card examples in Serbian and English B1 lesson 13 with headword-specific sentences: itinerary, departure, delay, platform, alternative, reservation, luggage and schedule.
- Added matching Sinhala meanings and approximate Sinhala-script pronunciation guides for all 16 examples.
- Serbian lesson file commit: `67c7c419fe7f87f494af5c9d06c1a0da581a98e2`.
- English lesson file commit: `db3bdfb819c312e07f5c8b8c50c2517e650405f9`.
- Latest workflow inspection: the prior Expo validation and Android APK build for commit `3477cc9` both failed immediately. The exact failure cause remains unavailable; no successful build or fresh APK artifact is confirmed. The new lesson commits have triggered fresh workflows; results still need checking.
- Source edits are committed; no local Expo build, APK build or physical-device test was run.

### Next exact task
1. Check CI for latest lesson 13 commit `db3bdfb819c312e07f5c8b8c50c2517e650405f9`; inspect job status and available logs.
2. Repair paired B1 lesson 14 vocabulary examples and matching Sinhala translations/pronunciation aids, then continue paired lessons 15–20.
3. Keep APK claims tied to a verified successful artifact and record physical-device testing separately.


## 2026-11-19 — Paired B1 lesson 14 vocabulary repair
- Rewrote all eight vocabulary examples in Serbian and English B1 lesson 14 (Consumer choices and service complaints): refund, receipt, damaged, replacement, quality, warranty, customer and solution.
- Each entry now has a distinct target-language sentence, Sinhala meaning and approximate Sinhala-script pronunciation. Corrected the Serbian first-example pronunciation aid after a script check.
- Serbian lesson commits: `0f250f8f53bf5aad7ee310c3c320b09a4733c095` and pronunciation correction `b6dcb9bdbf3a0e6fe2ecc125dccd5b997109eb4f`.
- English lesson commit: `e1694bcb37914b2055ac81e9e7c439431085e07f`.
- Workflow runs on the initial paired commits failed: Expo run `44573572456`, Expo run `44573565437`, APK run `44573564644`. The latest corrected Serbian commit triggered Expo run `44573595482` and APK run `44573595610`, which were queued at the last check. Job log retrieval for failed runs returned GitHub 404 BlobNotFound; no actionable build error is available. No fresh APK artifact or successful build is verified.
- Source edits were committed to main. No local parser/Expo build, native APK install or physical-device test was available in this session.

### Next exact task
1. Check runs `44573595482` and `44573595610` on corrected lesson 14 commit; inspect logs if available and verify any uploaded APK artifact before sharing.
2. Continue paired B1 vocabulary semantic repair for lessons 15–20 in both tracks, with distinct examples, Sinhala meanings and approximate pronunciation guides.
3. Keep auditing target-language examples and pronunciation aids; retain the approximate-not-native-verified caveat.
4. Do not claim CI/APK success unless a successful latest-main workflow and artifact are verified.


## 2026-11-19 — B1 lessons 15–20 semantic vocabulary repair and CI diagnosis
- Repaired all 48 vocabulary entries in Serbian B1 lessons 15–20 and all 48 corresponding English entries. Replaced repeated generic sentences with distinct headword-specific examples and matching Sinhala meanings.
- Added/reworked Sinhala-script approximate pronunciation readings for all 96 example sentences. A follow-up source audit caught eight Serbian reading fields in lessons 18–20 containing mixed Latin/Cyrillic text; corrected those, then caught and fixed two remaining Cyrillic fragments in Serbian lesson 18.
- Serbian lesson 15–17 commit: `9897fa7805c0c399d8efca814e0e918716d90640`.
- English lesson 15–17 commit: `62f8977e84518cc7aace86ef98fcfa08d86c2ec6`.
- Serbian lesson 18–20 commit: `a5e80dbffd4c25c8523def1f821f542607b33512`.
- English lesson 18–20 commit: `b34f9f3e2881df55a186bc2ee4011bfeb2748a3e`.
- Serbian pronunciation script cleanup commits: `af5f8caa517408b77570889cfff381715b0b6e6e` and final correction `e33326ba2e88f589745f040854244fd1519c4dcf`.
- Source-level structural audit on latest fetched files: lessons 15–20 exist in both tracks, each has eight vocabulary entries, and every entry has a non-empty example, Sinhala translation and example-reading field. The pronunciation audit passed for English lessons 15–20 and Serbian lessons 15, 16, 17, 19 and 20; lesson 18 had two remaining mixed-script readings that were corrected in the final commit. Re-run the audit on latest main to confirm final correction.
- CI diagnosis: repeated Expo validation and APK build jobs terminate within about 1–2 seconds with `runner_id: 0`, blank runner name, and `steps: []`; one latest queued run also failed before steps. GitHub log download returns 404 BlobNotFound. This indicates the jobs are failing before a hosted runner is assigned, so there is no test/build output identifying an application-code error. The workflow files currently use `ubuntu-latest`; do not change app code to chase an unreported build error. Recheck GitHub Actions availability/account runner access and retry when jobs can be assigned.
- No Expo export, native APK build, artifact upload, APK installation or Android device test has succeeded or been verified in this session. Do not claim otherwise.

### Next exact task
1. Re-fetch latest Serbian/English B1 files and confirm the final lesson 18 Sinhala-reading correction; run the same structural and mixed-script audit across lessons 15–20.
2. Inspect the newest CI jobs. If `runner_id: 0` and no steps persist, report this as a GitHub runner provisioning/service issue rather than a code test failure; only diagnose application build errors from actual logs.
3. Continue paired B1 semantic vocabulary audit for lessons 21–30, fixing generic examples, Sinhala translations and pronunciation readings in both tracks.
4. Keep pronunciation aids marked approximate pending native-speaker review; verify an uploaded APK artifact before sharing any download link.


## 2026-11-19 — B1 lessons 21–25 paired vocabulary repair
- Repaired 40 vocabulary examples in Serbian B1 lessons 21–25 and 40 matching English entries. Replaced repeated generic examples with eight distinct headword-focused sentences per lesson and added matching Sinhala translations.
- Serbian lesson themes: education/training; digital communication; banking and financial planning; healthy habits/well-being; culture and traditions.
- English examples and example-reading guides were updated for all 40 entries. Serbian examples and translations were updated for all 40 entries; Sinhala-script approximation fields were regenerated for all 40 Serbian examples.
- Serbian file commits: `50e84aa0b32c002ce1c95f662534906988243008`, `3a1703cfbf593ab9785a64d2640f0d6473ec89b1`, and final Sinhala-character cleanup `b8523ddc8300dda56710b1bb5a616aef505147b1`.
- English file commit: `9c2ba3ef8b9128b7e9c5c1eb31d5d46e40dca90c`.
- Latest source audit: Serbian and English lessons 21–25 each contain 8 vocabulary entries; all 8 examples per lesson are unique; example, translation and exampleReading fields are non-empty; every exampleReading field contains Sinhala characters and no Latin/Cyrillic characters.
- Pronunciation note: Sinhala-script readings are approximate aids generated for learners, not native-speaker-verified phonetic transcriptions. Serbian transliteration should receive careful human/native-speaker review before release.
- CI still fails before a runner starts. Latest Expo validation run `44574838161` and Android APK build run `44574838025` both show `runner_id: 0`, blank runner name and `steps: []`; no actionable test/build log is available. Treat this as runner provisioning/Actions environment failure until logs show an application-level error.
- No successful Expo validation, APK build, uploaded APK artifact, installation or device test is verified.

### Next exact task
1. Continue paired B1 vocabulary semantic repair for lessons 26–30 in both language tracks. Ensure examples are distinct, translations match and Sinhala-script pronunciation fields contain no mixed scripts.
2. Run structural checks on lessons 21–30 and inspect latest CI runner assignment.
3. Record exact commits and validation outcomes in HANDOFF.md. Keep the no-verified-APK caveat until an artifact is confirmed.


## 2026-11-19 — B1 lessons 26–30 repair and application import/export audit
- Replaced repeated generic vocabulary examples in Serbian B1 lessons 26–30 and English B1 lessons 26–30: 40 entries per language, 80 total. Each lesson now has eight distinct headword-relevant examples, Sinhala translations and sentence-reading fields.
- Updated Serbian B1 example-reading fields with Sinhala-script approximations. The generated guides are character-set checked but remain approximate and need fluent/native-speaker review for phonetic accuracy.
- Critical integration defect found: `App.js` imports named exports `SERBIAN_B1_LESSONS` and `ENGLISH_B1_LESSONS`, while the B1 lesson files previously only exposed default exports. Both files now expose the exact named exports required by App.js and retain a default export for compatibility.
- Serbian B1 file commits: `d59a93fe3624827aed10e27615dd40f1ee9cc31a` (lesson content and named export) and final file blob SHA checked as `b79c0e724024a2ff54f8908a7f7acbb37d7796fd`.
- English B1 file commit: `7ea230abd31f3ebdc8428d5ebfb699531b7d34a9`; latest file blob SHA `4d27482938aa5b7f01c5e0b9e5a12814e65eef8e`.
- Integration audit: reviewed every local named import in App.js against the corresponding source module export declarations (all imported lesson, assessment, revision and vocabulary-pack modules). The B1 named-export mismatch was the only mismatch found in the imported files inspected; the other inspected modules exposed the expected names.
- B1 structural audit on lessons 21–30: both language tracks have 10 lessons × 8 vocabulary entries; all 160 records have word reading, meaning, example, translation and exampleReading; each lesson has eight unique examples; all sentence-reading fields contain Sinhala characters and no Latin/Cyrillic characters.
- Workflow files were reviewed. The Android APK workflow uses Node 22, Java 17, generates a temporary lockfile, installs dependencies with npm ci, checks Expo compatibility, exports the Android bundle, prebuilds Android, assembles release APK and uploads the artifact. Expo validation similarly installs dependencies and exports Android.
- Latest Expo validation run `44575342799` and Android APK run `44575342752` both fail immediately with no steps; earlier job records show `runner_id: 0`, blank runner name and no runner assignment. No actual app build/test logs are available. This is not enough evidence to modify app source or workflow steps to address a code-level build error.
- No successful latest-main build, APK artifact, APK installation or physical-device test has been verified. Keep this explicit until verified.

### Next broad QA priorities
1. Run parser-aware QA over legacy A1 lesson files and validate all lesson IDs, lesson counts, required fields, quiz answer indexes and audio/speech references.
2. Continue term-specific example repair and reading audits across remaining B1 lessons 1–20 and 31–50, then review A2/B2/C1/C2 batches for generic example reuse.
3. Verify actual GitHub runner availability/account limits with repository owner settings; re-run workflows once a runner can be assigned. Do not mislabel runner provisioning failures as app-code errors.
4. Once CI runs, fix only actionable errors shown by its logs, then verify uploaded APK artifact and test installation on Android.


## 2026-11-19 — Cross-level duplicate-answer QA and repairs
- Scanned lesson/practice modules and final exam modules for duplicate choice strings and answer indexes outside the available options.
- Fixed duplicate answer choices in Serbian and English A1 practice: 14 Serbian and 13 English duplicate-choice occurrences. Where reading arrays accompanied the options, updated the corresponding pronunciation entry too.
- Fixed one duplicate A2 salary distractor in each language track.
- Fixed five duplicated listening choices in each B2 language track (10 arrays total), replacing repeated choices with distinct contextual alternatives.
- Fixed four repeated C1 listening choices in Serbian and four in English (8 arrays total).
- Fixed duplicated distractor in Serbian and English B1 final exam question 6.
- Latest source-level scan across A1, A2, B1, B2, C1 and C2 lesson files/batches and A1–C1 exam files found zero duplicate option strings and zero answer indexes outside the options arrays in 3,194 detected option arrays. C2 final exam module had no `options` arrays matching this scanner and requires separate schema-aware review.
- The A1–C1 final-exam and lesson option-array checks are static source checks, not runtime UI tests. They do not verify every correct answer's pedagogical accuracy or the meaning of each distractor.
- Additional commits: A1 Serbian `e74aa662275beeaa9d08de43136391abd49ab075`; A1 English `b6cdb0631bd6ff9d938e5c1a2dbeeffae598613b`; A2 Serbian `79f1f1083fc3ed723ace4ec733a40532e786889f`; A2 English `932ec09e80a6a6979b9b4fd0e5da49f4722b3a61`; B2 Serbian `d14775cf31de36a4cc74d865a232b9de0002dc73`; B2 English `b4ff96c210156de142ac1f76fbb2d3fe6cf9c35a`; C1 Serbian `bf3546ecd31b94d1fc98d04b43610f55263c2b6a`; C1 English `d9f98d3467c4898f7b044394d1a0feb38f80f84c` and final correction `58b95ec2cc69f25338a72c70c3ece3c547274f1a`; B1 final exams `71f1f05dfe35b3f70ffaa693f0f932a974acc301`.
- Latest workflow reruns were attempted for Expo validation `44576418150` and Android APK `44576418055`; both again ended with `runner_id: 0`, no runner name and zero steps. This remains an infrastructure/account runner assignment issue, with no build log to diagnose. No current-main APK artifact is verified.

### Next broad QA priorities
1. Add a maintained automated static QA check for duplicate options, answer-index bounds, and App.js named-import/export contracts so regressions are caught when CI runners work again.
2. Perform schema-aware A1 vocabulary/example and assessment review; the A1 files are legacy object-literal modules and have not yet had a full linguistic audit.
3. Review C2 final exam schema separately because its question structure does not use the scanned `options` field.
4. Continue content relevance/naturalness review and obtain native-speaker review of Serbian examples and pronunciation aids.
5. Re-run Expo and Android workflows once GitHub assigns runners; fix any actionable application errors shown in actual logs, then verify artifact and Android installation.


## 2026-11-19 — Body-parts vocabulary pack 13 and integration QA
- Added `vocabularyPack13.js` with 51 Serbian and 51 English body/anatomy terms, each containing a Sinhala meaning, Sinhala-script approximate pronunciation, example sentence and Sinhala translation.
- Coverage includes head/face, sensory features, mouth/teeth, neck/shoulder/arms/hands/fingers, chest/back/abdomen/hips, legs/feet/toes, skin/bone/muscle and basic internal organs (heart, lungs, brain, stomach, liver, kidney, blood).
- Integrated both language arrays into `courses.Serbian` and `courses.English` in App.js. Commits: vocabulary pack `f415c9d7a8b3ca59b1d24e2dd25046ec20b62c6d`; App integration `4c040acb9be9af3a3330b0476a33f50dcc94bad0`.
- Post-commit static data checks: 51 entries per language; zero missing required fields; zero duplicate headwords within each language pack; all 102 pronunciation fields contain Sinhala script; both App imports and both course-push integrations are present.
- These are static source/data checks only. They do not constitute Metro/Expo runtime, UI, audio, physical-device or linguistic-native-speaker tests. Sinhala-script pronunciations are approximate and require fluent-speaker review.
- Latest Expo validation run `44577584279` and Android APK run `44577584617` both failed immediately. The job-log endpoint returns 404 BlobNotFound, and normalized job data contains no step output; prior repeated runs showed runner_id 0/no runner assignment. There is still no actionable application-code failure log and no current-main APK artifact verified. Treat this as GitHub Actions runner provisioning/account availability until a runner starts; do not claim build success.

### Next exact tasks
1. Continue parser-aware A1 legacy lesson QA and C2 final-exam schema-specific checks.
2. Re-run Expo and APK workflows once GitHub assigns hosted runners; diagnose only errors supported by actual logs.
3. Review body-part Serbian/English naturalness and Sinhala readings with fluent speakers; test TTS and layout on an Android device after an APK is available.


## 2026-11-19 — A1/C2 assessment QA automation and Serbian reading repair
- Inspected the legacy A1 final assessment and C2 generated assessment module.
- Found one mixed-script Serbian pronunciation in A1 final item `sr-a1-final-18`: `වොලිම් මුසිку.` contained Cyrillic characters. Corrected it to `වොලිම් මුසිකු.` in `a1FinalExams.js`. Commit: `6bac2a8b6c9987929c74f314a6a2826c6f530f54`.
- Added `scripts/content-qa.mjs` to check A1/C2 assessment counts, unique IDs/options, non-empty prompts, answer-index bounds and Sinhala-only pronunciation readings for audio/vocabulary items. It covers 20 questions per language for A1 finals, 10 per language for C2 revision, and 20 per language for C2 finals.
- Added `npm run qa:content` and inserted it into both workflows before dependency installation. Commits: script `b2ebcb4ecb757a7f3f01ff35e9b38fa37408cc65`, script fix `c1cb29ea5ab8ae7c20b4847d47570cf41b5f63f3`, package `33a9d97626b632cecbb02d98248427d33841811f`, Expo workflow `d2f405969865c5cfaf1f32b972b52c1f870e8429`, APK workflow `8fb6f928e4cb925c5e6ec960f9000d3c2c1c121b`.
- Local validation: `node --check` passed for the QA script. The full script has not yet been executed against the repository files; it awaits an available CI runner or local checkout.
- Corrected CI diagnosis: the user's GitHub Actions screenshot explicitly says jobs were not started because recent account payments failed or the spending limit needs to be increased. This is a billing/usage block, not evidence of a runner provisioning outage or application-code error. Billing showed $21.08 gross usage matched by $21.08 included usage, $0 billed, and quota reset in 12 days. Do not describe $21.08 as due; payment/budget status still needs review.
- No Expo export, APK build, artifact upload, installation or device test has been completed for these commits. User asked to pause build attempts until quota reset and continue other app work meanwhile.

### Next exact tasks
1. Continue A1 legacy lesson QA: required fields, paired Serbian/English topic coverage, duplicate choices, answer indexes and audio/pronunciation references.
2. Execute `npm run qa:content` when a runner or local checkout is available; fix findings before claiming it passes.
3. Continue C2 assessment semantic QA, especially generated distractors and listening answer-key alignment.
4. Avoid repeated build retries; revisit Expo/APK after quota reset and billing block resolution.
5. Review body-part language/pronunciation with fluent speakers and test TTS/layout on Android after an APK is available.

- Documentation follow-up commits: README `1e99f01cab99f47ba5dde52e25b732c27af2da80`; content QA report `27b9f13e9d1e5eec93c9403a96f8039216c47ad3`.


## 2026-11-19 — A1 lesson QA coverage extension
- Extended `scripts/content-qa.mjs` to load and structurally validate both Serbian and English A1 lesson modules. It checks unique lesson IDs; unit/title/objective/grammar fields; non-empty vocabulary, examples, dialogue and practice arrays; required vocabulary word/meaning/example/translation fields; duplicate practice/listening options; valid answer indexes; listening prompt/audio; and matching Serbian/English lesson counts.
- Corrected the Sinhala and mixed-script detection ranges in the QA script to use explicit Unicode character ranges. Commits: lesson QA extension `c4ad8366d2910ea3a354d4eb77f6e8e816db0c0e`; Unicode range correction `d34e786857305e43cc5e579676ba03074fefd8d4`.
- This check has not yet been executed end-to-end because the user's GitHub Actions billing block remains unresolved and there is no local checkout/runtime attached here. Do not claim the A1 lesson QA passed until it actually runs.
- Next: continue content audits and only fix concrete findings; avoid build attempts until the monthly included quota resets and the account block is resolved.


## 2026-11-19 — A1 language-content audit expansion
- Inspected both A1 lesson source files directly. Each contains 39 lessons with unique lesson IDs; each has all 39 unit/title/objective/grammarTitle/grammar/vocabulary/examples/dialogue/practice sections.
- Regex audit across all `reading` and `exampleReading` string fields found 1,112 pronunciation fields in Serbian and 1,268 in English; no Latin/Cyrillic mixed-script readings and no readings without Sinhala characters were found.
- Expanded `scripts/content-qa.mjs` to check every A1 vocabulary reading for Sinhala script and reject Latin/Cyrillic contamination, plus require source and Sinhala meaning fields for every example and dialogue line. Fixed a malformed duplicated loop introduced during the extension. Commits: `04dc0b0082afe1c0e3c7d8f6176ca2b86e44e8b7` and `f51d70b5d0f61d300b729f1ba899e3c9ce2eb7e2`.
- Static source audit is positive, but the automated Node QA script has still not been executed end-to-end. No claim that the script passes. Also, matching counts (39 each) do not prove that Serbian and English lesson topics align one-to-one; their unit/lesson ID sequences differ.


## 2026-11-19 — Corrected A1 lesson inventory and numbering audit
- Reopened and inspected the exact current source files after noticing the earlier title scan only matched unquoted property syntax and missed valid quoted-key lesson objects.
- Correct inventory: Serbian A1 has 50 lesson objects with 50 unique IDs and title numbers 1–50 without gaps or duplicates. English A1 also has 50 lesson objects with 50 unique IDs and title numbers 1–50 without gaps or duplicates. Therefore the earlier claim that Serbian 3–5 and English 8–10 were missing was incorrect; those lessons already existed in the source.
- English lessons 8–10 were already present at the end of the file; Serbian lessons 3–5 were already present. An attempted duplicate insertion was fully reverted from both source files in commits `f40985dfc9916be535e1c682d18edcf25b3d9d31` and `b90e345e9156d172b948ce8d7acd5bfb7ee20a93`. Current source inventory remains 50/50 with unique IDs.
- Topic sequence is not fully paired by lesson number: e.g. Serbian lesson 3 is café ordering while English lesson 3 is numbers/time; Serbian lesson 4 is numbers while English lesson 4 is shopping; Serbian lesson 5 is market shopping while English lesson 5 is directions. Need topic-by-topic alignment review rather than assuming identical numbering.
- Do not claim the automated content QA has passed: GitHub Actions remains billing-blocked and the local full QA script has not been executed. Static inventory/numbering scan only.


## 2026-11-19 — English A1 first-ten lesson alignment
- Reordered English A1 lessons 1–10 to follow the same topic progression as Serbian A1: greetings, responses, café ordering, numbers/time, shopping, workplace communication, jobs/professions, directions/transport, appointment and transport schedules, accommodation/daily services.
- Added beginner English lesson 7 (jobs/professions) and lesson 9 (appointment times and transport schedules), with Sinhala meanings, Sinhala-script pronunciation, examples, dialogues, listening prompts, and practice.
- Kept a separate lesson 11 for more detailed café ordering, so the existing progression after lesson 10 is preserved.
- English A1 now has 50 lessons, 50 unique IDs, continuous title numbers 1–50, and no duplicate lesson numbers in a static source audit. Serbian A1 also has 50 unique IDs and continuous title numbers 1–50.
- Added `validateLessonNumbering` to `scripts/content-qa.mjs` so future content QA checks continuous numbering. The full QA script has not yet been executed because GitHub Actions remains blocked by the account billing/usage restriction; this is static source inspection only.
