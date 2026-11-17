# BasaNova

**Learn Languages. Speak with Confidence.**

BasaNova is a Sinhala-first language-learning app for learning Serbian and English, designed for learners from beginner to advanced levels.

## Current MVP
- Sinhala-first mobile interface
- Serbian and English learning modes
- Expanded Serbian and English beginner vocabulary decks (502 Serbian and 500 English entries; 1,002 total) with Sinhala meanings, approximate readings and example sentences
- The A1 vocabulary packs cover numbers, weekdays, meals/food, everyday objects, shopping, directions, workplace, transport, home, weather, basic health, clothing, colours, daily verbs, useful adjectives, money, public places, technology, time expressions, family, feelings, cooking, meals, travel, road safety, tools, nature, healthcare, household cleaning, appliances, food, shopping, city services, travel, communication and specialist professions in both languages
- Structured Serbian A1 lessons with Sinhala-script pronunciation guides for vocabulary, example sentences and dialogue lines; individual audio controls for each headword, example, and key Serbian grammar phrase; Sinhala-script readings and Serbian audio for quiz answer choices; grammar explanations and interactive comprehension questions; current authored lessons include introductions, greetings, café ordering, numbers/counting, and market shopping with quantities and prices
- More than 1,000 standard vocabulary entries across Serbian and English
- Separate Serbian and English slang / mild profanity learning cards with Sinhala meanings, approximate pronunciation, contextual examples, caution notes, and audio playback; kept outside the standard vocabulary deck
- Expanded Serbian A1 practical phrases for asking the time, requesting slower speech or repetition, asking for help/directions, and basic work communication
- English vocabulary deck now shows a Sinhala-script approximate reading for every example sentence, alongside the existing headword reading and separate word/example audio controls
- Item-by-item Sinhala-script pronunciation guides and separate speaker controls for English A1 vocabulary, example sentences, grammar phrases, dialogue lines and quiz options
- Sinhala pronunciation guides
- Sinhala-to-Serbian translator panel with Sinhala pronunciation approximation, Serbian text-to-speech, copy-to-clipboard and recent phrase history (in-memory for the current app session)
- Text-to-speech playback for words and example sentences
- Local learning progress for the starter lesson set
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
1. Expand Serbian curriculum: Latin/Cyrillic alphabet, pronunciation, grammar, cases, verbs, and practical conversations.
2. Expand English curriculum from beginner to advanced.
3. Add speech recognition and speaking feedback.
4. Add secure AI tutor backend and adaptive lesson generation.
5. Add Supabase authentication, cloud progress sync, and user profiles.
6. Add offline lesson packs, accessibility, and automated tests.

## Important
The current AI Teacher screen is a clearly labelled preview; no live AI service is connected yet. Text-to-speech uses voices available on the device, so voice availability and quality depend on installed system voices.

## Credit
Created by **Madhuranga Yasanath**.


## Automated validation
GitHub Actions runs dependency installation, Expo SDK compatibility checks, and an Android JavaScript bundle export on pushes and pull requests to `main`. The workflow generates a temporary lockfile during CI because this repository does not yet contain a committed `package-lock.json`. A successful workflow run is required before treating the current source as build-verified.


### English A1 lesson 3 — Numbers and time
- Added a structured beginner lesson covering numbers, asking the time, o'clock, half past and quarter past.
- Includes manually authored Sinhala-script readings, Sinhala meanings, example sentences, a short time-related dialogue, English TTS controls and four quiz questions.
- This is a starter lesson, not a complete English A1 syllabus.


### English A1 lesson 4 — Shopping and prices
- Added polite shopping requests, asking prices, quantities (one kilo / half a kilo), cash/card payment and receipts.
- Includes Sinhala-script pronunciation guides, Sinhala meanings, examples, a shop dialogue, separate English TTS controls and four interactive quiz questions.


### English A1 lesson 5 — Directions and transport
- Added asking for locations and routes, left/right/straight directions, relative locations, bus stops, train stations, tickets and platforms.
- Includes Sinhala-script pronunciation and meanings for vocabulary, grammar phrases, examples, dialogue and quiz choices, with individual English TTS controls and four quiz questions.
