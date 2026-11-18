# BasaNova

**Learn Languages. Speak with Confidence.**

BasaNova is a Sinhala-first language-learning app for learning Serbian and English, designed for learners from beginner to advanced levels.

## Current MVP
- Sinhala-first mobile interface
- Serbian and English learning modes
- Expanded Serbian and English beginner vocabulary decks with Sinhala meanings, approximate readings and example sentences, gathered from themed packs and structured lessons
- The vocabulary packs cover numbers, weekdays, meals/food, everyday objects, shopping, directions, workplace, transport, home, weather, basic health, clothing, colours, daily verbs, useful adjectives, money, public places, technology, time expressions, family, feelings, cooking, road safety, tools, nature, healthcare, household cleaning, appliances, city services, specialist professions, job applications, documents, appointments, agreements, professional skills, banking, payments and personal finance in both languages
- Structured A1 curricula developed in parallel: 25 Serbian lessons and 25 English lessons, with paired modules for café ordering, restaurant ordering/customer service, everyday requests/help, numbers/date/time, daily routines, and work shifts/schedules. Lessons include Sinhala meanings, Sinhala-script pronunciation support, grammar, examples, dialogues, quizzes and listening checks; Serbian vocabulary/example/dialogue cards use manually authored readings where provided and a documented approximate fallback elsewhere
- 1,152 standard vocabulary entries across Serbian and English (577 Serbian + 575 English), including paired job/document, banking/personal-finance and restaurant/food-ordering vocabulary
- Separate Serbian and English slang / mild profanity learning cards with Sinhala meanings, approximate pronunciation, contextual examples, caution notes, and audio playback; kept outside the standard vocabulary deck
- Expanded Serbian A1 practical phrases for asking the time, requesting slower speech or repetition, asking for help/directions, and basic work communication
- English vocabulary deck now shows a Sinhala-script approximate reading for every example sentence, alongside the existing headword reading and separate word/example audio controls
- Item-by-item Sinhala-script pronunciation guides and separate speaker controls for English A1 vocabulary, example sentences, grammar phrases, dialogue lines, quiz options and listening checks
- Sinhala pronunciation guides
- Sinhala-to-Serbian translator panel with Sinhala pronunciation approximation, Serbian text-to-speech, copy-to-clipboard and recent phrase history (saved locally on the device)
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
1. Continue building Serbian and English curricula in parallel, matching topics and learning depth at each CEFR level.
2. Expand both curricula from A1 through A2, B1, B2, C1 and C2 with practical conversations, grammar, listening, speaking, reading and writing.
3. Add speech recognition and speaking feedback.
4. Add secure AI tutor backend and adaptive lesson generation.
5. Add Supabase authentication, cloud progress sync, and user profiles.
6. Add offline lesson packs, accessibility, and automated tests.

## Important
The current AI Teacher screen is a clearly labelled preview; no live AI service is connected yet. Text-to-speech uses voices available on the device, so voice availability and quality depend on installed system voices.

## Credit
Created by **Madhuranga Yasanath**.


## Automated validation
GitHub Actions runs dependency installation, Expo SDK compatibility checks, and an Android JavaScript bundle export on pushes and pull requests to `main`. A separate **Android APK build** workflow generates the native Android project, assembles a signed debug APK, and uploads it as a downloadable artifact. CI generates a temporary lockfile because the repository does not yet commit `package-lock.json`. See [`BUILD.md`](./BUILD.md) for APK download and installation steps. A successful APK workflow run and artifact are required before treating the APK build as verified.


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
- Added one listening-discrimination exercise to each of the current English A1 lessons. Learners play/replay a target-language sentence, choose its Sinhala meaning, then check the answer; the correct option also reveals its Sinhala-script pronunciation reading.
- Listening completion is included in each lesson's checked-question count. This is a session-only checked count, not persisted mastery or a proficiency score.


### Serbian A1 grammar phrase coverage
- Expanded structured grammar phrase cards with additional manually authored Sinhala-script readings, Sinhala meanings and individual Serbian TTS controls for common grammar examples: “Dobro sam, hvala”, “Kako ste?”, “Želim čaj”, “Račun, molim”, gender forms of “one/two”, “jedan kilogram”, “dva kilograma” and formal “molim vas”.
- Sinhala pronunciation spellings are approximate learning aids; listen to the Serbian audio as well.


### English A1 mixed revision test
- Added a ten-question mixed review beneath the structured English A1 lessons. It samples greetings, responses, time, shopping, directions and workplace communication.
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


### Serbian A1 lesson 9 — Appointments and transport schedules
- Added practical phrases for booking/rescheduling an appointment, asking what time an event is, checking bus departure times, understanding delays, and asking for the timetable.
- Includes 11 vocabulary entries, seven grammar phrase cards with Sinhala meanings and manually authored Sinhala-script readings, four examples, a seven-line dialogue and four quizzes. Existing lesson rendering supplies individual Serbian TTS and approximate Sinhala-script readings for vocabulary, examples, dialogue and quiz options.
- Extended listening discrimination and mixed revision with a ninth item about bus departure time and booking an appointment respectively. Checks remain session-only, not saved mastery.
- Sinhala-script pronunciation is approximate and requires native-speaker review. No Android device test or APK build has been performed.


### Serbian A1 lesson 10 — Accommodation and everyday services
- Added practical hotel/accommodation language: asking for an available room, single/double room types, booking for nights, asking the nightly price, requesting the address/key/internet, and reporting a service problem.
- Includes 11 vocabulary entries, six explicit Sinhala-reading grammar phrase cards, four examples, an eight-line dialogue and four comprehension questions with existing per-item Serbian audio and approximate Sinhala-script readings.
- Extended Serbian listening discrimination with a hotel-room question and a service-problem sentence; extended mixed revision with two accommodation questions. Results remain session-only, not persisted mastery.
- Sinhala-script pronunciations are approximate and should be checked with native Serbian audio.


### Local progress saving
- BasaNova uses AsyncStorage to restore and save learning state on the device under the local key `basanova-progress-v1`. This includes checked lesson and revision answers, learned vocabulary, XP and mission completion, theme, selected language and translator history.
- This is local device storage only; it is not cloud backup or cross-device synchronization. Storage restore still needs physical Android device testing.
- Serbian A1 currently contains ten structured starter lessons and matching listening/revision practice. Sinhala-script readings are approximate and should be reviewed by a Serbian native speaker.


### English A1 lesson 7 — Hotel and accommodation
- Added practical hotel language for asking about room availability, choosing single/double rooms, checking nightly prices and breakfast, confirming a reservation, asking for the Wi-Fi password and reporting a room-service problem.
- Includes 12 vocabulary entries, five grammar phrase cards, four examples, an eight-line dialogue, one listening task and four comprehension questions. Each English phrase has a Sinhala-script pronunciation approximation and Sinhala meaning; the existing lesson renderer supplies individual English TTS controls.
- English A1 now has 18 structured starter lessons. This is still a partial A1 course, not a complete CEFR A1 curriculum. Pronunciation guides are approximations and need review; no physical Android test or APK build has been performed.


### English A1 mixed revision — hotel and accommodation
- Extended the English mixed revision from six to seven questions, adding an accommodation listening item about breakfast inclusion.
- The new item includes an English audio sentence, Sinhala-script approximate reading, three Sinhala meaning choices, answer feedback and the existing English TTS replay control.
- The lesson 7 listening task remains available inside the hotel lesson itself. English A1 is still a partial starter curriculum, not a complete CEFR A1 course.


### Serbian A1 — audio for embedded phrases
- Serbian grammar explanations and checked quiz explanations now surface quoted Serbian phrases as individual phrase rows, with approximate Sinhala-script pronunciation and a dedicated Serbian TTS replay control.
- Existing vocabulary, grammar-term, example, dialogue and Serbian quiz-option controls remain unchanged. Sinhala transliterations are approximate and still need native-speaker review.


### Alphabetical vocabulary book
- Added a dedicated **වචන පොත** tab for the selected Serbian or English course.
- The book aggregates the current course vocabulary collections and vocabulary packs, plus structured lesson vocabulary, grammar terms, examples, dialogue phrases, practice options, and quoted phrases in grammar/answer explanations.
- Entries are alphabetically sorted (Serbian Latin letters include its accented characters), searchable by target phrase, Sinhala meaning or Sinhala-script pronunciation, and filterable by letter.
- Each entry displays the target phrase, approximate Sinhala-script pronunciation, Sinhala meaning, and where available an example with its reading and Sinhala translation; individual TTS controls are provided for the entry and example.
- The list is derived from app content at runtime, so new entries added to the connected course and lesson data sources appear without maintaining a separate duplicate dictionary. Pronunciation approximations still require language-speaker review.


### Paired A1 lesson 17 — Family and personal information
- Added the same practical topic to both Serbian and English A1: family members, siblings, country of origin, and languages spoken.
- Each lesson includes ten vocabulary entries with Sinhala meanings and Sinhala-script pronunciation, five grammar phrase cards, four examples, a six-line dialogue, one listening task, and four quizzes.
- Added the Serbian lesson's matching listening-discrimination prompt at the same lesson-array index. The English lesson includes its own listening task and uses the existing lesson renderer.
- Both languages now contain 14 structured A1 lessons. This remains a starter course rather than a complete CEFR A1 syllabus; pronunciation guides are approximate and need language-speaker review.


### Paired A1 lessons 18–19 — Travel, transport and home
- Added matching Serbian and English lessons on buying bus/train tickets, departure and arrival, platforms, one-way tickets, rooms and furniture, and describing where household objects are.
- Each language lesson contains eight vocabulary entries with Sinhala meanings/readings, five grammar phrase cards, four examples, a six-line dialogue, four quizzes and one listening task.
- Added two Serbian listening checks in lesson-array order and two new English mixed-revision checks. The course totals are now 16 structured A1 lessons in each language.
- This is still a starter course, not a complete CEFR A1 syllabus. Sinhala-script pronunciation is approximate and requires speaker review.


### A1 cumulative revision update
- Added travel-ticket and household-location checks to both Serbian and English cumulative revision practice.
- Serbian A1 now has 16 lesson-aligned listening prompts and 16 mixed-revision questions. English A1 has 16 lesson listening exercises and 12 cumulative mixed-revision questions.
- Lesson and revision totals are source-count checks only; no parser, Expo export, APK build or physical-device test was run for this update.


### Paired A1 lessons 20–21 — Food, cooking, weather and clothes
- Added the same two everyday topics to both Serbian and English A1 courses: meals and simple cooking routines, followed by weather conditions and suitable clothing.
- Each new lesson in both languages includes eight vocabulary items with Sinhala meanings and Sinhala-script readings, five grammar phrase cards, four examples, a six-line dialogue, four quizzes and a listening task.
- Added two Serbian lesson-aligned listening checks and two Serbian cumulative revision items. The Serbian listening and revision UI scope now covers lessons 1–18.
- Both structured A1 courses now contain 18 paired lessons. These remain beginner starter courses, not a claim of complete CEFR A1 coverage. Pronunciation guides are approximate and need speaker review.
- No JavaScript parser, Expo bundle, APK build or Android device test was run for this content update.

### English A1 cumulative mixed revision alignment
- Expanded the English A1 mixed revision from 12 to 18 questions so it now reaches the same lesson range as the Serbian A1 cumulative revision (lessons 1–18). Added coverage for food and cooking, weather, the home and family alongside the existing travel, work and daily-life items.
- Each item retains a Sinhala-script pronunciation guide, spoken English replay and Sinhala answer choices. This is a cumulative review set, not a substitute for the per-lesson quizzes.

- Vocabulary quality audit: checked all nine themed Serbian and English vocabulary packs. Every pack entry had a non-empty Sinhala meaning, Sinhala-script reading, example sentence and Sinhala translation. Removed repeated Serbian `Cipele` and English `Shoes` entries from pack 3. The English headword `Open` had two grammatical senses; consolidated both senses and examples into one dictionary card so the app's headword de-duplication no longer hides the verb sense. The themed pack data now contains 391 unique Serbian and 388 unique English headwords, with no repeated headwords inside those packs. Lesson-derived and base-course entries still require a separate audit.


### Paired A1 lesson 26 — Doctor and health
- Added the same practical healthcare topic to Serbian and English: booking an appointment, describing common symptoms, asking about an available time, and locating a pharmacy.
- Each language lesson includes eight vocabulary entries with Sinhala meanings and Sinhala-script readings, five grammar phrase cards, four examples, a six-line dialogue, four comprehension questions and one listening-practice task.
- Serbian listening discrimination was extended with one lesson-aligned item. English lesson 26 includes its own listeningPractice object, rendered by the existing English lesson UI with speech playback and Sinhala answer choices.
- Both courses now contain 23 structured A1 lesson objects; the visible lesson numbering reaches lesson 26 because earlier content was grouped into units and lesson numbers are not a count of array entries.
- Source-level counts and lesson alignment were checked. No JavaScript parser, Expo bundle, APK build or Android device test was run. Sinhala pronunciation guides are approximations and should be reviewed by fluent speakers.


### Paired A1 lessons 27–28 — Emergency help and returns/exchanges
- Added matched Serbian and English lessons for asking for help and identifying emergency services, followed by returns, exchanges, receipts, sizes and refunds.
- Each lesson includes eight vocabulary entries with Sinhala meanings and Sinhala-script readings, five grammar phrase cards, four examples, a six-line dialogue, one listening task and four quizzes.
- Added two lesson-aligned Serbian listening prompts. Lesson objects remain paired by topic across both courses.
- Source-level checks are recorded in HANDOFF.md. No native APK build or Android device test is claimed; pronunciation guides remain approximate and need fluent-speaker review.


## Online Google voice (Serbian + English)

BasaNova can use Google Cloud Text-to-Speech for natural Serbian and English playback. The app sends only the selected learning text and language to a small Cloudflare Worker; the Google API key stays on the Worker and must never be placed in the mobile app.

1. In Google Cloud, enable the **Cloud Text-to-Speech API** and configure billing/usage limits.
2. Create a Cloudflare Worker using `cloudflare/voice-worker.js`.
3. Add a Worker secret named `GOOGLE_TTS_API_KEY` containing the Google API key.
4. Set the GitHub Actions repository variable `EXPO_PUBLIC_VOICE_API_URL` to the deployed Worker base URL (for example, `https://basanova-voice.<your-subdomain>.workers.dev`, without `/speak`).
5. Rebuild the Android app. The app calls the online Google voice service for every existing Serbian/English audio button. If the service URL is not configured or the request fails, it falls back to the device's built-in speech voice.

The Worker accepts only Serbian (`sr-RS`) and English (`en-US`), limits text to 5,000 characters, returns MP3 audio, and keeps the Google key server-side. Google Cloud usage may incur charges; configure API restrictions, quotas and billing alerts before public release.


### Voice service deployment and request protection

The Cloudflare Worker uses the included `cloudflare/wrangler.toml` rate-limit binding (30 requests per client IP per 60 seconds). Deploy from the `cloudflare` directory with Wrangler, set the Worker secret `GOOGLE_TTS_API_KEY`, and configure GitHub Actions variable `EXPO_PUBLIC_VOICE_API_URL` to the deployed Worker URL. Keep the Google API key in the Worker secret store; never commit it to Git.
