# BasaNova

## Current project snapshot — 2026-11-19

- **Learning content authoring:** 50 Serbian + 50 English lessons in each of A1, A2, B1, B2, C1 and C2 (600 authored lesson records total). This is content completion, not CEFR certification.
- **Assessments:** paired revision/final practice assessments are integrated for A1, B1, B2, C1 and C2; confirm the A2 assessment coverage during the next content audit.
- **Android packaging:** the APK workflow now builds a standalone release variant rather than a Metro-dependent debug APK. The latest safe-area/layout changes still need a fresh successful build and physical-device verification.
- **Layout:** Android safe-area insets, visible status bar, responsive content width and compact bottom navigation have been updated; verify on real devices before marking complete.
- **Remaining quality work:** full A1–C2 content and answer-alignment QA, fluent Serbian/English review, Sinhala pronunciation review, responsive UI testing, persistence checks, and final release/device validation.


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
GitHub Actions runs dependency installation, Expo SDK compatibility checks, and an Android JavaScript bundle export on pushes and pull requests to `main`. The **Android APK build** workflow generates the native Android project, assembles a standalone release-variant APK with the JavaScript bundle packaged inside, verifies the APK file, and uploads `basanova-android-release-apk`. CI generates a temporary lockfile because the repository does not yet commit `package-lock.json`. See [`BUILD.md`](./BUILD.md) for APK download and installation steps. A successful workflow, available artifact, and physical-device startup test are all required before treating the APK as verified.


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


### Paired A1 lessons 40–42 — Checkout, city directions and workplace safety
- Added three matched practical lessons to both Serbian and English: paying at a supermarket checkout, identifying places and asking for directions in a city, and understanding basic workplace safety instructions.
- Each lesson includes eight vocabulary entries with Sinhala-script readings and meanings, grammar phrase cards, four examples, a six-line dialogue, a listening task and four practice questions.
- Serbian lesson commit: `79ba4542acc17a65a229011eab7cc3c7bc2dbf91`; English lesson commit: `04c52ddcd22a996383d98f9a0cb0b69553643dce`.
- The repository now contains 39 structured A1 lesson objects per language, with visible lesson numbering through lesson 42. The complete A1 curriculum still needs a final syllabus coverage audit and cumulative assessment; A2–C2 lesson content remains outstanding.
- Expo validation and the Android APK workflow have started for this batch; their results are not yet confirmed. No APK artifact or device installation is claimed.

### A1 mixed revision update — lessons 40–42
- Extended the Serbian A1 mixed revision with listening questions for card payment, city distance/directions and a slippery floor warning.
- Extended the English A1 mixed revision with the matching three listening questions and Sinhala-script pronunciation.
- Updated both revision section headings to avoid the old lesson 1–20 label. This is cumulative mixed practice, not yet a scored final A1 examination.
- Serbian revision commit: `eb71471bdc5fe3be7d55a986c5dedb52a372843e`; app integration commit: `3dcd679b939bd181c707290fe49673e91c99805a`.
- CI runs for these latest commits are queued/pending at the time of this note. No APK or device test is confirmed.


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


### Paired A2 lessons 36–40 — 2026-11-18
- Added five matched A2 topics to both Serbian and English: planning a trip and booking accommodation; making a complaint and asking for a solution; cooking and following a recipe; planning around the weather forecast; and describing a past experience and event.
- Each new lesson contains eight vocabulary cards with Sinhala-script pronunciation and Sinhala meanings, a Sinhala-supported grammar note and phrase, three examples, a four-line dialogue, one listening check and four practice questions.
- Serbian lesson IDs: `sr-a2-l36` through `sr-a2-l40`; English lesson IDs: `en-a2-l36` through `en-a2-l40`.
- Serbian data commit: `dbdab4eaa242626ce750e1133a49c219449bb1eb`; English data commit: `693ec65c5de98310934bd7b279b96ec27534d80e`.
- Source-level validation confirmed 40 unique structured lesson objects in each A2 course, matching lesson IDs and required learning sections. No Expo bundle, CI pass, APK build, or Android device test is claimed for this batch.
- Sinhala-script readings are approximate learner aids and require fluent-speaker review.


### Paired A2 lessons 41–45 — 2026-11-18
- Added five matched Serbian and English A2 lessons: invitations and making plans; work experience and interviews; household problems and repairs; opinions and comparisons; and rules, permission and obligations.
- Each language lesson includes eight vocabulary entries with Sinhala-script pronunciation and Sinhala meaning, a Sinhala-supported grammar note and phrase, three examples, a four-line dialogue, one listening check and four practice questions.
- Serbian lesson IDs: `sr-a2-l41` through `sr-a2-l45`; English lesson IDs: `en-a2-l41` through `en-a2-l45`.
- Sinhala-script readings are approximate learner aids and need fluent-speaker review. No build, APK, or device test is claimed by this content update.


### Paired A2 lessons 46–55 — 2026-11-18
- Added ten matched A2 lessons to both Serbian and English: travel delays and alternatives; banking and payment issues; finding/viewing a rental home; environment and recycling; celebrations and traditions; emails and digital communication; apologies and clarification; telephone customer support; budgeting and shopping expenses; and solving problems/giving advice.
- Each lesson includes eight vocabulary cards with Sinhala-script readings and meanings, Sinhala-supported grammar, four example phrases, a four-line dialogue, one listening check and four practice questions.
- Serbian lesson IDs: `sr-a2-l46` through `sr-a2-l55`; English lesson IDs: `en-a2-l46` through `en-a2-l55`.
- Pronunciation guides are approximate. Source validation and build/device test status will be recorded in HANDOFF; no APK or physical-device result is claimed.


### Course size and A2 lesson count
Each CEFR level is planned for **50 lessons**. A2 is capped at lessons 1–50 in both Serbian and English; future content work proceeds in paired batches of at least 10 lessons per language rather than extending the level beyond its 50-lesson target.


### B1 course progress
All 50 paired B1 lessons are now authored for Serbian and English and integrated into the Learn screen. The final 20 lessons cover science and discoveries; rights and responsibilities; art and creativity; the economy and job market; housing and renting; public transport; environmental policy; food culture; education and work goals; travel services; communication styles; digital citizenship; time management; cultural differences; entrepreneurship; report writing; media debates; evaluating complex solutions; future planning; and integrated B1 speaking/writing. Each lesson includes eight vocabulary entries, Sinhala-script readings and meanings, example support, grammar guidance, four examples, a four-turn dialogue, listening practice and four questions. The B1 lesson sequence is 50/50 per language. The Learn screen now includes a 10-question cumulative mixed revision set and a 20-question final assessment for each language, including vocabulary and listening items, immediate feedback, scoring and a 70% suggested pass threshold. Pronunciation guides are approximate; assessment translations still need fluent-speaker review.


## B2 course progress

The opening B2 batch now contains 11 paired Serbian and English lessons, integrated into the Learn screen. Topics include argumentation, negotiation, leadership feedback, urban development, hypothetical situations, passive structures, presentations, data analysis, media interpretation, conflict mediation and project risk decisions. Each lesson includes eight vocabulary entries, Sinhala-script pronunciation guidance, grammar, four examples, a dialogue, a listening exercise and four practice questions. B2 lessons 12–50 remain planned. Sinhala pronunciation guides are approximate and the Serbian material needs fluent-speaker review.


## B2 course progress update

The B2 course now has 25 paired Serbian and English lessons authored and connected to the Learn screen (25/50 per language). The new lessons 12–25 cover professional networking, workplace diversity, technology ethics, environmental policy, cost of living, academic research, civic rights, public health, cultural heritage, work-life balance, global supply chains, discursive writing, automation and scientific uncertainty, customer experience, and statistics. Each lesson includes eight vocabulary items, grammar guidance, four examples, a dialogue, a listening task and four practice questions. Lessons 26–50 remain planned. Sinhala-script readings are approximate and Serbian language consistency requires fluent-speaker review.


## B2 course progress update — lessons 26–40

BasaNova now includes 40 paired Serbian and English B2 lesson records (40/50 per language), connected to the existing B2 lesson arrays consumed by the Learn screen. The new batch covers contract negotiation, lifelong learning, urban planning and housing, workplace mediation, consumer rights, energy transition, research quality, public speaking, cultural identity and migration, digital privacy, healthcare communication, financial planning, journalism and source evaluation, project delivery, and technology ethics. Each lesson record includes vocabulary, Sinhala meanings and pronunciation guidance, grammar, examples, a dialogue, listening and practice questions. Ten lessons remain per language. This batch is a structured learning draft: Serbian readings and idiom, English/Sinhala translations, and the repeated practice scaffolding need editorial review; it is not CEFR certification.


## B2 course progress update — lessons 41–50 complete

The Serbian and English B2 lesson arrays now each contain 50 paired lesson records (50/50). The final batch covers international cooperation and diplomacy, crisis communication, advanced negotiation, literature and critical interpretation, professional correspondence, social inequality, sustainable tourism, entrepreneurship, linguistic nuance, and integrated B2 communication. The lesson arrays are consumed by the existing B2 Learn screen. B2 cumulative revision and final assessments are the next content milestone. Lesson count completion does not mean accredited CEFR certification: language review, richer contextual dialogues, assessment design, and build/device verification remain.


## B2 revision and final assessment

Added paired cumulative B2 revision and final assessment panels for Serbian and English. Each language has 10 mixed-revision questions and a 20-question final practice exam with vocabulary and listening items, device text-to-speech playback, answer feedback, score display, a suggested 70% pass threshold (14/20), and retry. The panels are integrated into the existing B2 Learn screen. These are practice assessments, not accredited CEFR certification; question wording, listening-answer alignment, Serbian naturalness, Sinhala readings and translations require editorial review.


## C1 course progress — lessons 1–10

The first ten paired C1 lessons are now authored for Serbian and English and integrated into the Learn screen. Topics cover nuance and register, executive summaries, academic seminars and argumentation, metaphor and idiom, extended listening and inference, presentations and challenging questions, editing and stylistic consistency, policy analysis, complex professional correspondence, and integrated C1 communication. Each lesson includes eight vocabulary entries with Sinhala meanings and approximate Sinhala-script readings, grammar guidance, four examples, a four-line dialogue, a listening check and four practice questions. Lessons 11–50 and cumulative C1 revision/final assessments remain outstanding. These are learning materials, not CEFR certification; native-speaker review of Serbian idiom, English phrasing and Sinhala pronunciation is still required.


## C1 course progress — lessons 1–20

The first twenty C1 lessons are now authored in both Serbian and English and integrated into the Learn screen. Lessons 11–20 cover negotiation and consensus; risk assessment; data interpretation and statistical caution; ethical dilemmas; cross-cultural pragmatics; complex sentence cohesion; mediation; research design and evidence quality; strategic planning; and an integrated C1 case study. Each lesson includes eight vocabulary items, Sinhala meanings and approximate Sinhala-script pronunciation aids, grammar guidance, four examples, a four-line dialogue, a listening check and four practice questions. Thirty more lessons per language plus cumulative revision and a practice final assessment remain. Native-speaker review and app build/device verification are still required.


## C1 course progress — lessons 1–30

C1 lessons 21–30 are now authored for Serbian and English and connected to the existing Learn panel. This batch covers rhetoric and persuasive communication; discourse markers and cohesion; contracts and formal terms; crisis communication; innovation and change management; sustainability and social impact; critical reading and literary interpretation; media framing and bias; advanced conditionals and hedging; and editing complex texts for precision. Each lesson includes eight vocabulary items with Sinhala meanings and approximate Sinhala-script readings, grammar guidance, four examples, a four-line dialogue, a listening check and four practice questions. C1 now contains 30 authored lessons per language; lessons 31–50 and cumulative assessments remain. Sinhala readings are approximate and generated as pronunciation aids; fluent-speaker review and actual app build/device verification are still required.


## C1 course progress — lessons 1–40

C1 lessons 31–40 are now authored for Serbian and English and connected to the Learn panel. This batch covers diplomacy and tactful communication; public policy evaluation; financial reporting and accountability; scientific uncertainty and peer review; leadership and organisational culture; data privacy and information governance; academic writing and source attribution; idioms, metaphors and stylistic register; debate and rebuttal; and an integrated professional project. Each lesson includes eight vocabulary items with Sinhala meanings and approximate Sinhala-script readings, Sinhala grammar guidance, four examples, a four-line dialogue, a listening check and four practice questions. C1 now contains 40 authored lessons per language; lessons 41–50 and cumulative revision/final practice remain. Native-speaker review and actual app build/device verification are still required.


## C1 course progress — lessons 1–50 complete

The complete 50-lesson C1 sequence is now authored in parallel for Serbian and English and integrated into the Learn panel. Lessons 41–50 cover strategic foresight and scenario planning; advanced negotiation and diplomatic compromise; corporate governance; climate adaptation; digital transformation; advanced research methods and causal inference; literary criticism; crisis communication; an evidence-led capstone recommendation; and professional integrity and ethical judgement. Each new lesson includes eight vocabulary items, Sinhala meanings and approximate Sinhala-script pronunciation aids, grammar guidance, four examples, a dialogue, listening practice and four questions. C1 now has 50 authored lesson records per language (100 paired records total). Cumulative revision and the scored practice final assessment are the next content milestone. This is not CEFR certification; Serbian/English naturalness, Sinhala translations/readings, and CI/Android runtime still require review and verification.


## C1 cumulative revision and final practice assessment

Added a paired C1 revision set and final practice exam for Serbian and English, integrated into the C1 Learn panel after lessons 1–50. Each language has 10 cumulative revision questions and a 20-question final practice exam consisting of 14 vocabulary questions and 6 listening-comprehension questions. Audio replay uses the app's existing device text-to-speech support; listening questions also show approximate Sinhala-script pronunciation. The exam provides immediate answer feedback, a score out of 20, a suggested 70% practice threshold and a retry action. Speaking remains guided self-practice and is not automatically graded. These assessments are practice materials, not official CEFR certification; language naturalness, Sinhala translations/pronunciation and answer quality need editorial review.


## C1 cumulative revision and final practice assessment

Added a paired C1 revision set and final practice exam for Serbian and English, integrated into the C1 Learn panel after lessons 1–50. Each language has 10 cumulative revision questions and a 20-question final practice exam consisting of 14 vocabulary questions and 6 listening-comprehension questions. Audio replay uses the app's existing device text-to-speech support; listening questions also show approximate Sinhala-script pronunciation. The exam provides answer feedback, a score out of 20, a suggested 70% practice threshold and a retry action. Speaking remains guided self-practice and is not automatically graded. These assessments are practice materials, not official CEFR certification; language naturalness, Sinhala translations/pronunciation and answer quality need editorial review.


## C2 course progress — lessons 1–10

The first ten paired C2 lessons are now authored for Serbian and English and integrated into the Learn panel. Topics cover pragmatic implicature and indirect meaning; irony, sarcasm and sophisticated humour; dialect variation and sociolinguistic identity; rhetorical framing; lexical nuance and near-synonyms; literary allusion and intertextuality; forensic editing and textual reconstruction; high-stakes mediation; nuanced translation and cultural equivalence; and expert-level synthesis. Each lesson includes eight vocabulary entries with Sinhala meanings and approximate Sinhala-script pronunciation, grammar guidance, four examples, a four-line dialogue, listening practice and four practice questions. Serbian practice prompts and explanations are localised in Serbian. C2 has 10/50 authored lessons per language; 40 remain. These are advanced learning drafts, not proof of CEFR certification; fluent-speaker review and build/device verification remain required.


## C2 course progress — lessons 1–20

C2 lessons 11–20 have been added for both Serbian and English and connected to the C2 Learn panel. This batch covers philosophy of language and conceptual precision; legal interpretation; diplomatic protocol and strategic ambiguity; academic synthesis across conflicting evidence; cognitive bias and argument evaluation; semantic change and historical linguistics; cross-cultural pragmatics and politeness; ethical reasoning in emerging technologies; expert dialogue; and a capstone on nuanced positions under uncertainty. Each lesson contains eight vocabulary entries, Sinhala meanings and approximate Sinhala-script readings, grammar guidance, four examples, a four-line dialogue, listening practice and four practice questions. C2 now contains 20/50 authored lessons per language; 30 remain. These are advanced learning drafts, not official CEFR certification; fluent-speaker review and build/device verification remain necessary.


## C2 course progress — lessons 1–30

C2 lessons 21–30 are now authored for Serbian and English and integrated into the C2 Learn sequence. This batch covers advanced corpus linguistics and concordance analysis; discourse markers and information structure; phonological variation and prosody; translation and untranslatability; public narratives and historical memory; epistemic modality and evidentiality; academic peer review; conflict-sensitive public discourse; humour and intercultural transfer; and research presentation with expert defence. Each lesson contains eight vocabulary entries with Sinhala meanings and approximate Sinhala-script readings, grammar guidance, four examples, a four-line dialogue, listening practice and four practice questions. C2 now contains 30/50 authored lessons per language (60 paired records); 20 remain in each track. These are learning materials, not official CEFR certification. Fluent-speaker review and CI/Android verification remain outstanding.


## C2 course progress — lessons 1–40

C2 lessons 31–40 are now authored for Serbian and English and integrated into the C2 Learn sequence. This batch covers advanced rhetoric and conceptual metaphor; contractual language and normative precision; multimodal communication and semiotics; computational linguistics and language-model bias; register shifting and code-switching; academic abstracts and project proposals; negotiation discourse and concessions; syntactic ambiguity and scope; historical semantics and meaning change; and simultaneous interpreting with cognitive-load management. Each lesson contains eight vocabulary entries with Sinhala meanings and approximate Sinhala-script readings, grammar guidance, four examples, a four-line dialogue, listening practice and four practice questions. C2 now contains 40/50 authored lessons per language (80 paired records); 10 remain in each track. These are learning materials, not official CEFR certification. Fluent-speaker review and CI/Android verification remain outstanding.


## C2 course progress — all 50 lessons complete

All 50 C2 lessons are now authored for both Serbian and English and integrated into the C2 Learn sequence. The final batch (41–50) covers discourse analysis and stance; sociolinguistic variation and language policy; philosophy of science and epistemic uncertainty; legal argumentation and proportionality; textual cohesion and information structure; translation ethics; crisis communication; forensic pragmatics; structured debate and rebuttal; and an integrated expert-communication capstone. Each lesson contains eight vocabulary entries with Sinhala meanings and approximate Sinhala-script readings, grammar guidance, four examples, a four-line dialogue, listening practice and four practice questions. C2 lesson authoring is complete at 50/50 per language. Across A1–C2, the course now contains 300 authored lesson records per language (600/600 paired records). Cumulative C2 mixed revision and final practice assessments are now integrated for both languages (10 revision and 20 final questions per language). These lessons and practice tests are not official CEFR certification. Fluent-speaker review and CI/Android verification remain outstanding.


## C2 cumulative revision and final practice assessments

C2 now includes paired Serbian and English cumulative revision sets (10 questions per language) and final practice assessments (20 questions per language). The final assessment combines 10 advanced vocabulary items, 4 grammar/discourse questions and 6 listening-comprehension questions. Vocabulary and listening items include Sinhala meanings and approximate Sinhala-script pronunciation guides, with text-to-speech playback in the app. The suggested practice threshold is 70% (14/20). These assessments are learning tools, not official CEFR certification; speaking remains guided self-practice and is not automatically graded. Fluent-speaker review and CI/Android verification remain outstanding.


## Content QA update — 2026-11-19

Automated review identified and corrected 2,400 A2/B1/B2 vocabulary example fields across Serbian and English. Isolated word echoes and heavily repeated vocabulary examples were replaced with complete contextual sentences from each lesson's own example section, with Sinhala translations and readings synchronized. The six updated files passed checks for 50 unique lesson IDs, 400 vocabulary records, required fields, and sentence examples. See [CONTENT_QA_REPORT.md](./CONTENT_QA_REPORT.md) for scope and limitations. This is not a substitute for fluent-speaker review or physical Android testing.


## B1 practice improvements

- Incorrect answers in B1 lesson quizzes, listening checks and mixed revision can now be retried immediately without restarting the lesson. Correct answers remain marked as complete.


### English B1 quiz localization — 2026-11-19
Corrected the first 10 English B1 lessons, replacing Serbian-language quiz prompts and options with English-language practice questions. All 50 English B1 lessons and 200 practice questions passed structural answer-index checks; the targeted Serbian-phrase scan returned no matches. See `HANDOFF.md` for the commit and remaining QA tasks.
