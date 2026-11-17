# BasaNova — Google sign-in and cloud progress sync

## Product decision
Use Google as the user's sign-in identity provider, and Supabase Auth + Postgres as the durable cloud store for learning progress. Do not store progress in a developer-owned Google Drive account, and do not put Google client secrets or Supabase service-role keys in the mobile app.

Google login identifies the learner. Supabase stores and restores the learner's data. This separation makes recovery possible after reinstalling or changing phones.

## Expected learner experience
1. First launch: choose Serbian or English, then select Continue with Google.
2. Complete Google sign-in and create/retrieve the matching Supabase user.
3. Load that user's cloud profile and progress before showing the course home screen.
4. Save progress after meaningful changes: learned vocabulary, completed lesson, quiz result, mission completion, XP, streak, theme and current course/lesson.
5. Show a small sync state: syncing, saved, offline changes pending, or sync failed.
6. Reinstall / new phone: sign in with the same Google account and restore the latest cloud progress.
7. Sign out: keep cloud data; signing in again restores it. Provide a separate explicit account deletion flow later.

## Data ownership and schema
Every row must be scoped to the authenticated Supabase user (auth.uid()):
- profiles: user id, display name, avatar URL, preferred UI language, theme, created/updated timestamps.
- learning_progress: user id, course language, learned vocabulary identifiers, completed lesson identifiers, current lesson/unit, XP, streak and last activity date.
- quiz_attempts: user id, language, lesson id, score, attempt timestamp.
- daily_missions: user id, local date, mission identifiers completed, XP awarded.

Use stable content IDs, not translated display strings, as progress keys. Serbian and English progress must remain separate.

## Security requirements
- Enable Google provider in Supabase Auth and configure Google OAuth client IDs / redirect URIs for the Expo app.
- Use Supabase publishable/anon key in the app only; never embed a service-role key or OAuth client secret.
- Enable Row Level Security on every user-owned table.
- Policies must restrict SELECT/INSERT/UPDATE/DELETE to rows where auth.uid() = user_id.
- Validate payloads and use unique constraints to prevent duplicate progress rows.
- Never log access tokens, refresh tokens, passwords, or personal profile data.
- Provide logout and session refresh handling. Do not request broad Google Drive access.
- Do not use Google Drive as the primary database; the app should request only Google sign-in identity scopes.

## Offline and conflict handling
- Keep a small local cache so the app remains usable offline.
- Queue local progress changes while offline and sync when connectivity returns.
- Use updated_at / revision metadata and deterministic merge rules. Do not blindly overwrite newer cloud progress with an older local snapshot.
- Show sync failures clearly and retry safely. A successful local save must not be labelled as a cloud save.

## Setup required outside GitHub
The project owner must create/configure a Supabase project, enable Google as an Auth provider, create the OAuth credentials in Google Cloud Console, configure the allowed redirect URLs, and provide the Supabase project URL and publishable key through app environment configuration. Never send OAuth secrets or service-role keys in chat or commit them to GitHub.

## Implementation sequence
1. Confirm Supabase project and Google OAuth configuration.
2. Add compatible Expo packages for Supabase client, secure session storage, Google auth, and connectivity detection; commit a reproducible package lockfile.
3. Add environment variable validation and an auth/session provider.
4. Add SQL migration for tables, indexes, constraints and RLS policies.
5. Add sign-in, sign-out, loading and error UI.
6. Add cloud progress repository and safe offline queue.
7. Replace in-memory theme/progress/XP state with a repository-backed store and hydrate before rendering progress.
8. Test account isolation, reinstall restore, offline queue, duplicate writes, logout/login and expired sessions on Android.

## Current status
This document records the approved architecture only. No Supabase project credentials, Google OAuth configuration, cloud database, sign-in UI or live sync have been configured yet. Do not claim that progress is currently backed up.