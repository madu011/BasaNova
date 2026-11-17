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


### English A1 lesson 6 — Workplace communication
- Added workplace introductions, managers/colleagues, day and night shifts, breaks, asking for help, requesting demonstrations, understanding instructions and task completion.
- Includes Sinhala-script readings and meanings, examples, a workplace dialogue, separate English TTS controls and four interactive quiz questions.


### Serbian A1 quiz pronunciation support
- Serbian quiz answer choices now show an approximate Sinhala-script pronunciation beneath Serbian text, alongside the existing individual speaker control. This applies to Serbian answer options containing Latin Serbian letters; the Sinhala question prompts remain Sinhala.
- The Sinhala-script rendering is an approximation, not a substitute for listening to native Serbian pronunciation.


### English A1 listening and revision practice
- Added one listening-discrimination exercise to each of the six current English A1 lessons. Learners play/replay a target-language sentence, choose its Sinhala meaning, then check the answer; the correct option also reveals its Sinhala-script pronunciation reading.
- Listening completion is included in each lesson's checked-question count. This is a session-only checked count, not persisted mastery or a proficiency score.


### Serbian A1 grammar phrase coverage
- Expanded structured grammar phrase cards with additional manually authored Sinhala-script readings, Sinhala meanings and individual Serbian TTS controls for common grammar examples: “Dobro sam, hvala”, “Kako ste?”, “Želim čaj”, “Račun, molim”, gender forms of “one/two”, “jedan kilogram”, “dva kilograma” and formal “molim vas”.
- Sinhala pronunciation spellings are approximate learning aids; listen to the Serbian audio as well.


### English A1 mixed revision test
- Added a six-question mixed review beneath the six structured English A1 lessons. It samples greetings, responses, time, shopping, directions and workplace communication.
- Each question includes English TTS replay, a Sinhala-script pronunciation guide, three Sinhala meaning choices and answer feedback. Results are session-only; no saved mastery claim.


### Serbian A1 lesson 6 — Workplace communication
- Added a practical workplace lesson covering job/workplace introductions, working hours, shifts, colleagues, supervisors, asking for help and requesting repeated instructions.
- Includes Sinhala meanings, Sinhala-script pronunciation support through the existing Serbian lesson renderer, individual Serbian TTS controls, examples, a short workplace dialogue and four quiz questions.
- This is an additional A1 starter lesson, not a completed Serbian A1 course. Pronunciation spellings are approximate and should be checked against native audio.


### Serbian A1 lesson 7 — Occupations and professions
- Added practical vocabulary for common jobs: waiter, cook, driver, shop assistant, worker, teacher, doctor, student and programmer.
- Teaches asking about someone's occupation, introducing one's own job, and recognizing common masculine/feminine job-name pairs.
- Includes Sinhala meanings, Sinhala-script pronunciation support through the lesson renderer, Serbian TTS, examples, a short dialogue and four quiz questions.
- Serbian job titles have different gender forms and not all follow one identical suffix rule; the lesson teaches common pairs rather than a universal grammar rule.


### Serbian A1 listening and mixed revision
- Added one Serbian listening-discrimination task for each of the seven current A1 starter lessons, with Serbian TTS replay, three Sinhala meaning choices, answer feedback, and approximate Sinhala-script readings/audio for the choices.
- Added a seven-question mixed revision test covering introductions, greetings, café ordering, numbers, market quantities, workplace communication and occupations. Each Serbian sentence has a Sinhala-script reading, replay control, answer choices and feedback.
- Listening/revision checks remain session-only; they are not persisted as long-term mastery. Sinhala-script Serbian readings are approximations and should be checked against native-speaker audio.


### Serbian A1 lesson 8 — Directions and transport
- Added a practical lesson for asking where places are, left/right/straight directions, bus and railway stations, distance, and requesting a ticket.
- Includes Sinhala meanings, six explicit grammar phrase cards with manually authored Sinhala-script readings, examples, a six-line dialogue, four quizzes and the existing renderer's individual Serbian TTS controls and approximate Sinhala readings for vocabulary/examples/dialogue/options.
- Extended Serbian A1 listening discrimination and mixed revision with an eighth item covering directions. Quiz/listening state remains session-only and is not saved mastery.
- The seven earlier lessons were audited at source level: vocabulary, examples, dialogue lines and target-language quiz choices are rendered with per-item Serbian TTS and Sinhala pronunciation approximations; grammar terms have explicit Sinhala readings and meanings. Embedded Serbian snippets inside explanatory Sinhala prose are still not individually extracted as audio cards. Sinhala approximations need native-speaker review.
