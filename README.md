# BasaNova

## Cross-chat progress source of truth

For the canonical implementation percentage, workstream breakdown, verified repository facts and next tasks, read [PROJECT_PROGRESS.md](./PROJECT_PROGRESS.md) first. Keep implementation progress separate from QA/build/device release gates; do not lower the agreed 90% baseline just because release validation is pending.


## Current project snapshot — 2026-11-23

- **Learning content authoring:** 50 Serbian + 50 English lessons in each of A1, A2, B1, B2, C1 and C2 (600 authored lesson records total). This is content completion, not CEFR certification.
- **Assessments:** paired revision and final practice assessments are integrated for all six levels A1–C2. A2 has a 10-question mixed revision and a 20-question final exam per language, generated from the A2 course vocabulary and listening tasks.
- **Advanced-course cleanup:** C1 and C2 now have source-level duplicate-example/translation checks, paired Sinhala vocabulary-meaning parity, matching practice/listening coverage and target-language objectives.
- **A1 source fixes:** repaired ten missing Serbian A1 property separators and one malformed English A1 lesson ID. Actual module-import validation is still pending.
- **Local reliability pass (2026-11-23):** progress restore now validates saved data, translator history is bounded, writes are serialized to avoid stale snapshots overwriting newer progress, and speech requests cancel/ignore stale playback responses. These changes are source-level only and await runtime QA.
- **Android packaging:** a standalone release APK workflow is configured, but no new build or APK has been run during this source-only phase. Both GitHub Actions workflows are manual-only.
- **Remaining quality work:** audit A2/B1/B2 repeated vocabulary examples and translations, normalize Serbian B2 Sinhala-script word readings, complete fluent-speaker review, run content QA when usage is available, and perform persistence/UI/device validation before release.


**Learn Languages. Speak with Confidence.**

BasaNova is a Sinhala-first language-learning app for learning Serbian and English, designed for learners from beginner to advanced levels.

## Current MVP
- Sinhala-first mobile interface
- Beginner-friendly, collapsible study guide in the Learn tab: daily study routine, step-by-step lesson method, speaking/listening practice and spaced revision schedule
- Separate slang/profanity awareness section protected by an 18+ self-declaration gate, with an under-18 return path and a way to revoke local consent (self-declaration is not verified age assurance)
- Serbian and English learning modes
- Expanded Serbian and English beginner vocabulary decks with Sinhala meanings, approximate readings and example sentences, gathered from themed packs and structured lessons
- The vocabulary packs cover numbers, weekdays, meals/food, everyday objects, shopping, directions, workplace, transport, home, weather, basic health, clothing, colours, daily verbs, useful adjectives, money, public places, technology, time expressions, family, feelings, cooking, road safety, tools, nature, healthcare, household cleaning, appliances, city services, specialist professions, job applications, documents, appointments, agreements, professional skills, banking, payments and personal finance in both languages
- Structured Serbian and English curricula authored in parallel across all six CEFR levels: 50 lessons each for A1, A2, B1, B2, C1 and C2 (300 per language; 600 lesson records total), with paired modules for family and people, home and rooms, booking appointments, phone calls, weather and clothes, choosing food and asking about ingredients, daily routines, work shifts and schedules, asking for a day off, making plans and arranging meetings, being late and apologising, café ordering, restaurant ordering/customer service, everyday requests/help, numbers/date/time, daily routines, and work shifts/schedules. Lessons include Sinhala meanings, Sinhala-script pronunciation support, grammar, examples, dialogues, quizzes and listening checks; Serbian vocabulary/example/dialogue cards use manually authored readings where provided and a documented approximate fallback elsewhere
- 1,152 standard vocabulary entries across Serbian and English (577 Serbian + 575 English), including paired job/document, banking/personal-finance and restaurant/food-ordering vocabulary
- Separate Serbian and English slang / mild profanity learning cards with Sinhala meanings, approximate pronunciation, contextual examples, caution notes, and audio playback; kept outside the standard vocabulary deck
- Expanded Serbian A1 practical phrases for asking the time, requesting slower speech or repetition, asking for help/directions, and basic work communication
- English vocabulary deck now shows a Sinhala-script approximate reading for every example sentence, alongside the existing headword reading and separate word/example audio controls
- Item-by-item Sinhala-script pronunciation guides and separate speaker controls for English A1 vocabulary, example sentences, grammar phrases, dialogue lines, quiz options and listening checks
- Sinhala pronunciation guides
- Sinhala-to-Serbian translator panel with Sinhala pronunciation approximation, Serbian text-to-speech, copy-to-clipboard and recent phrase history (saved locally on the device); the UI warns that entered text is sent to an external translation service and should not include confidential information
- Text-to-speech playback for words and example sentences
- Local on-device saving for lesson answers/checks, listening and mixed-revision results, learned vocabulary, XP/missions, theme, selected language and translator history
- Home, Lessons, AI Teacher preview, and Progress tabs

## Project continuity

Before continuing development, read [`HANDOFF.md`](./HANDOFF.md). It records the product requirements, latest verified repository state, testing status, workflow rules, and exact next task. Update it with every meaningful development session so work can resume from the correct point even in a new chat.

## Tech stack
- React Native + Expo
- Expo Speech for text-to-speech
- JavaScript

## Run locally
```bash
npm install
npx expo start
```

Open the project with Expo Go on Android to preview it.

## Roadmap
1. Finish full-course QA and answer alignment for the authored Serbian and English A1–C2 tracks.
2. Review Serbian and English content with fluent speakers and refine Sinhala pronunciation guides.
3. Add speech recognition and speaking feedback.
4. Add a secure AI tutor backend and adaptive lesson generation.
5. Add Supabase authentication, cloud progress sync, and user profiles.
6. Add offline lesson packs, accessibility, and expanded automated UI tests.

## Important
The current AI Teacher screen is a clearly labelled preview; no live AI service is connected yet. Text-to-speech uses voices available on the device, so voice availability and quality depend on installed system voices.

## Credit
Created by **Madhuranga Yasanath**.


## Free-first services and Android APK

- The app has no subscription, in-app purchase, payment gateway, or billing SDK.
- Speech playback uses Android/device voices through Expo Speech. The optional remote Google voice backend and its audio dependencies have been removed.
- Sinhala-to-Serbian translation currently uses the public MyMemory translation endpoint. It needs internet access, sends the entered text to that external service, and may be rate-limited; it does not use a paid API key in this app. Do not enter private or confidential text.
- Lessons, vocabulary, and learner progress are stored locally on the device. No paid cloud account or Supabase service is required for the current app.

## Automated validation and Android build

GitHub Actions is manual-only. Start the workflow to run content QA; the Android **debug APK** job is opt-in through the `build_android_apk` workflow input and runs only after QA succeeds. Normal source pushes never consume Actions runs or start an APK build. CI generates a temporary npm lockfile and does not commit it. The APK artifact is named `basanova-android-debug-apk` and is retained for 14 days.

A successful CI build proves APK assembly, not physical-device validation. Install and test the APK on Android before calling the release fully verified. A Play Store production release would need a separately managed production signing key; it is not part of this free testing build.

See [BUILD.md](./BUILD.md) for instructions.
