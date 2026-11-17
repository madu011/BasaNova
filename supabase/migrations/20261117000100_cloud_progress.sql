-- BasaNova cloud progress schema. Apply once in the Supabase SQL Editor.
-- All learner-owned rows are protected by Row Level Security.

create extension if not exists pgcrypto;

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = timezone('utc', now());
  return new;
end;
$$;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  avatar_url text,
  preferred_ui_language text not null default 'si',
  theme text not null default 'dark' check (theme in ('dark', 'light')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.learning_progress (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_language text not null check (course_language in ('Serbian', 'English')),
  learned_vocabulary_ids jsonb not null default '[]'::jsonb check (jsonb_typeof(learned_vocabulary_ids) = 'array'),
  completed_lesson_ids jsonb not null default '[]'::jsonb check (jsonb_typeof(completed_lesson_ids) = 'array'),
  current_lesson_id text,
  xp integer not null default 0 check (xp >= 0),
  streak_days integer not null default 0 check (streak_days >= 0),
  last_activity_date date,
  revision bigint not null default 1 check (revision > 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, course_language)
);

create table if not exists public.daily_missions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  local_date date not null,
  completed_mission_ids jsonb not null default '[]'::jsonb check (jsonb_typeof(completed_mission_ids) = 'array'),
  xp_awarded integer not null default 0 check (xp_awarded >= 0),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (user_id, local_date)
);

create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  course_language text not null check (course_language in ('Serbian', 'English')),
  lesson_id text not null,
  score integer not null check (score >= 0),
  max_score integer not null check (max_score > 0 and score <= max_score),
  attempted_at timestamptz not null default now()
);

create index if not exists learning_progress_user_idx on public.learning_progress(user_id);
create index if not exists daily_missions_user_date_idx on public.daily_missions(user_id, local_date desc);
create index if not exists quiz_attempts_user_time_idx on public.quiz_attempts(user_id, attempted_at desc);

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at before update on public.profiles
for each row execute function public.set_updated_at();
drop trigger if exists learning_progress_set_updated_at on public.learning_progress;
create trigger learning_progress_set_updated_at before update on public.learning_progress
for each row execute function public.set_updated_at();
drop trigger if exists daily_missions_set_updated_at on public.daily_missions;
create trigger daily_missions_set_updated_at before update on public.daily_missions
for each row execute function public.set_updated_at();

alter table public.profiles enable row level security;
alter table public.learning_progress enable row level security;
alter table public.daily_missions enable row level security;
alter table public.quiz_attempts enable row level security;

create policy profiles_select_own on public.profiles for select to authenticated using (id = (select auth.uid()));
create policy profiles_insert_own on public.profiles for insert to authenticated with check (id = (select auth.uid()));
create policy profiles_update_own on public.profiles for update to authenticated using (id = (select auth.uid())) with check (id = (select auth.uid()));

create policy learning_progress_select_own on public.learning_progress for select to authenticated using (user_id = (select auth.uid()));
create policy learning_progress_insert_own on public.learning_progress for insert to authenticated with check (user_id = (select auth.uid()));
create policy learning_progress_update_own on public.learning_progress for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy learning_progress_delete_own on public.learning_progress for delete to authenticated using (user_id = (select auth.uid()));

create policy daily_missions_select_own on public.daily_missions for select to authenticated using (user_id = (select auth.uid()));
create policy daily_missions_insert_own on public.daily_missions for insert to authenticated with check (user_id = (select auth.uid()));
create policy daily_missions_update_own on public.daily_missions for update to authenticated using (user_id = (select auth.uid())) with check (user_id = (select auth.uid()));
create policy daily_missions_delete_own on public.daily_missions for delete to authenticated using (user_id = (select auth.uid()));

create policy quiz_attempts_select_own on public.quiz_attempts for select to authenticated using (user_id = (select auth.uid()));
create policy quiz_attempts_insert_own on public.quiz_attempts for insert to authenticated with check (user_id = (select auth.uid()));
create policy quiz_attempts_delete_own on public.quiz_attempts for delete to authenticated using (user_id = (select auth.uid()));

-- No anonymous policies are created. Authenticated users can access only their own rows.