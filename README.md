# BasaNova

**Learn Languages. Speak with Confidence.**

BasaNova is a Sinhala-first language-learning app for learning Serbian and English, designed for learners from beginner to advanced levels.

## Current MVP
- Sinhala-first mobile interface
- Serbian and English learning modes
- Separate Serbian and English beginner courses with Sinhala meanings
- Expanded Serbian A1 practical phrases for asking the time, requesting slower speech or repetition, asking for help/directions, and basic work communication
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
