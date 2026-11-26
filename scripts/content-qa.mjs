import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";


// Cross-chat progress integrity: the canonical implementation baseline must not
// drift because release gates (QA/build/device testing) are tracked separately.
const canonicalProgress = await readFile(new URL("../PROJECT_PROGRESS.md", import.meta.url), "utf8");
assert.match(canonicalProgress, /Canonical overall implementation baseline: \*\*90%\*\*/u,
  "Cross-chat implementation baseline must remain at the agreed 90% until verified implementation work changes it");
assert.match(canonicalProgress, /Do not lower, recalculate, or replace this baseline/u,
  "Release readiness must never be substituted for implementation progress");
assert.match(canonicalProgress, /Do not report tests as passed unless they were actually executed/u,
  "Progress handoff must distinguish authored QA from executed QA");

const files = {
  a1: "a1FinalExams.js",
  c2: "c2FinalExams.js",
  c1: "c1FinalExams.js",
};

async function loadModule(path) {
  const source = await readFile(new URL(`../${path}`, import.meta.url), "utf8");
  const encoded = Buffer.from(source).toString("base64");
  return import(`data:text/javascript;base64,${encoded}`);
}

function hasSinhala(value) {
  return /[ං-෴]/u.test(value ?? "");
}

function hasForeignScript(value) {
  return /[A-Za-zА-Яа-яЁёČĆŽŠĐčćžšđ]/u.test(value ?? "");
}

function validateQuestions(label, questions, expectedCount, { pronunciation = false } = {}) {
  assert.equal(Array.isArray(questions), true, `${label}: expected an array`);
  assert.equal(questions.length, expectedCount, `${label}: expected ${expectedCount} questions`);
  const ids = new Set();

  for (const [index, question] of questions.entries()) {
    assert.ok(question.id, `${label} #${index + 1}: missing id`);
    assert.ok(!ids.has(question.id), `${label}: duplicate id ${question.id}`);
    ids.add(question.id);
    assert.ok(typeof question.prompt === "string" && question.prompt.trim(), `${question.id}: missing prompt`);
    assert.ok(Array.isArray(question.options) && question.options.length >= 2, `${question.id}: missing options`);
    assert.ok(question.options.every(option => typeof option === "string" && option.trim()), `${question.id}: invalid option`);
    assert.equal(new Set(question.options).size, question.options.length, `${question.id}: duplicate options`);
    assert.ok(Number.isInteger(question.answer), `${question.id}: answer must be an integer`);
    assert.ok(question.answer >= 0 && question.answer < question.options.length, `${question.id}: answer index out of range`);

    if (pronunciation && (question.audio || question.word)) {
      const reading = question.reading ?? question.wordReading;
      assert.ok(typeof reading === "string" && hasSinhala(reading), `${question.id}: missing Sinhala pronunciation`);
      assert.ok(!hasForeignScript(reading), `${question.id}: mixed-script pronunciation: ${reading}`);
    }
    if (question.audio) {
      assert.ok(typeof (question.reading ?? question.wordReading) === "string", `${question.id}: audio has no pronunciation guide`);
    }
  }
}


const lessonFiles = { serbian: "serbianLessons.js", english: "englishLessons.js" };

function validateLessonTrack(label, lessons) {
  assert.ok(Array.isArray(lessons) && lessons.length > 0, `${label}: missing lesson array`);
  const ids = new Set();
  let vocabularyCount = 0;
  let practiceCount = 0;
  let listeningCount = 0;
  for (const [index, lesson] of lessons.entries()) {
    const name = lesson.id ?? `${label} lesson ${index + 1}`;
    assert.ok(lesson.id && !ids.has(lesson.id), `${name}: missing or duplicate lesson id`);
    ids.add(lesson.id);
    for (const field of ["unit", "title", "objective", "grammarTitle", "grammar"]) {
      assert.ok(typeof lesson[field] === "string" && lesson[field].trim(), `${name}: missing ${field}`);
    }
    for (const field of ["vocabulary", "examples", "dialogue", "practice"]) {
      assert.ok(Array.isArray(lesson[field]) && lesson[field].length > 0, `${name}: missing ${field}`);
    }
    for (const [i, item] of lesson.vocabulary.entries()) {
      vocabularyCount++;
      for (const field of ["word", "meaning", "example", "translation"]) {
        assert.ok(typeof item[field] === "string" && item[field].trim(), `${name} vocabulary ${i + 1}: missing ${field}`);
      }
      assert.ok(typeof item.reading === "string" && item.reading.trim(), `${name} vocabulary ${i + 1}: missing Sinhala pronunciation`);
      assert.ok(/[ං-෴]/u.test(item.reading), `${name} vocabulary ${i + 1}: pronunciation is not Sinhala script`);
      assert.ok(!/[A-Za-zА-Яа-яЁёČĆŽŠĐčćžšđ]/u.test(item.reading), `${name} vocabulary ${i + 1}: mixed-script pronunciation`);
      if (item.exampleReading) {
        assert.ok(hasSinhala(item.exampleReading) && !hasForeignScript(item.exampleReading), `${name} vocabulary ${i + 1}: invalid example pronunciation`);
      }
    }
    for (const [i, example] of lesson.examples.entries()) {
      assert.ok((example.sr ?? example.text)?.trim(), `${name} example ${i + 1}: missing source sentence`);
      assert.ok((example.si ?? example.meaning)?.trim(), `${name} example ${i + 1}: missing Sinhala meaning`);
    }
    for (const group of [lesson.examples, lesson.dialogue, lesson.grammarTerms]) {
      for (const line of group || []) {
        if (line.reading) {
          const pronunciation = line.reading.replace(/^[AB]:\s*/u, "");
          assert.ok(hasSinhala(pronunciation) && !hasForeignScript(pronunciation), `${name}: phrase pronunciation must use clean Sinhala script`);
        }
      }
    }
    for (const [i, line] of lesson.dialogue.entries()) {
      assert.ok((line.sr ?? line.text)?.trim(), `${name} dialogue ${i + 1}: missing source line`);
      assert.ok((line.si ?? line.meaning)?.trim(), `${name} dialogue ${i + 1}: missing Sinhala meaning`);
    }
    for (const [i, q] of lesson.practice.entries()) {
      practiceCount++;
      assert.ok(q.prompt?.trim(), `${name} practice ${i + 1}: missing prompt`);
      assert.ok(Array.isArray(q.options) && q.options.length >= 2, `${name} practice ${i + 1}: missing options`);
      assert.equal(new Set(q.options).size, q.options.length, `${name} practice ${i + 1}: duplicate options`);
      assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, `${name} practice ${i + 1}: invalid answer index`);
    }
    if (lesson.listeningPractice) {
      listeningCount++;
      const q = lesson.listeningPractice;
      assert.ok(q.prompt?.trim() && q.audio?.trim(), `${name}: incomplete listening prompt/audio`);
      const readings = Array.isArray(q.readings) ? q.readings : [q.reading];
      assert.ok(readings.length === q.options?.length, `${name}: listening readings must match option count`);
      for (const reading of readings) {
        assert.ok(typeof reading === "string" && /[ං-෴]/u.test(reading), `${name}: listening pronunciation must use Sinhala script`);
        assert.ok(!/[A-Za-zА-Яа-яЁёČĆŽŠĐčćžšđ]/u.test(reading), `${name}: listening pronunciation contains mixed scripts`);
      }
      assert.ok(Array.isArray(q.options) && q.options.length >= 2, `${name}: missing listening options`);
      assert.equal(new Set(q.options).size, q.options.length, `${name}: duplicate listening options`);
      assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, `${name}: invalid listening answer index`);
    }
  }
  return { lessons: lessons.length, vocabularyCount, practiceCount, listeningCount };
}

const serbianLessons = await loadModule(lessonFiles.serbian);
const englishLessons = await loadModule(lessonFiles.english);
function validateLessonNumbering(label, lessons) {
  const numbers = lessons.map(lesson => {
    const match = lesson.title.match(/(?:පාඩම|Lesson|Lekcija)\s*(\d+)/u);
    assert.ok(match, `${lesson.id}: title must include a lesson number`);
    return Number(match[1]);
  });
  assert.equal(new Set(numbers).size, lessons.length, `${label}: duplicate lesson numbers`);
  const expected = Array.from({ length: lessons.length }, (_, index) => index + 1);
  assert.deepEqual([...numbers].sort((a, b) => a - b), expected, `${label}: lesson numbers must be continuous from 1`);
}



// Verify every relative named import used by App.js resolves to a real module
// and to an actual named export. This catches missing files/export-name drift
// before Expo bundling is attempted.
const appSource = await readFile(new URL("../App.js", import.meta.url), "utf8");
// No paid cloud speech backend or billing SDK is part of the free-first app.
// Device TTS remains available; the optional remote voice endpoint is deliberately removed.
assert.doesNotMatch(appSource, /EXPO_PUBLIC_VOICE_API_URL|GOOGLE_TTS_ENDPOINT|expo-av|expo-file-system|RevenueCat|Stripe|Purchases|BillingClient|react-native-iap/iu,
  "App.js must not depend on a paid cloud-voice endpoint or billing integration");
assert.match(appSource, /translateDirection==="si-sr"\?"si\|sr":"sr\|si"/u,
  "Translator must support both Sinhala-to-Serbian and Serbian-to-Sinhala directions");
assert.match(appSource, /සිංහල → Serbian/u, "Translator must expose Sinhala-to-Serbian selection");
assert.match(appSource, /Serbian → සිංහල/u, "Translator must expose Serbian-to-Sinhala selection");
assert.ok((appSource.match(/speak\(item\.word,/gu) || []).length >= 6,
  "Each CEFR lesson renderer must expose individual vocabulary word playback");
const packageManifest = JSON.parse(await readFile(new URL("../package.json", import.meta.url), "utf8"));
for (const dependency of ["expo-av", "expo-file-system", "react-native-iap", "react-native-purchases", "stripe", "@stripe/stripe-react-native"]) {
  assert.equal(packageManifest.dependencies?.[dependency], undefined, `Paid/unused integration dependency must remain absent: ${dependency}`);
}

const relativeNamedImports = [...appSource.matchAll(/import\s*\{([^}]*)\}\s*from\s*["']\.\/([^"']+)["']/gu)];
assert.ok(relativeNamedImports.length > 0, "App.js: no relative named imports were discovered");
const checkedAppImports = new Set();
for (const match of relativeNamedImports) {
  const importedNames = match[1].split(",").map(value => value.trim()).filter(Boolean)
    .map(value => value.split(/\s+as\s+/u)[0].trim());
  const modulePath = match[2].endsWith(".js") ? match[2] : `${match[2]}.js`;
  const module = await loadModule(modulePath);
  for (const name of importedNames) {
    assert.ok(Object.prototype.hasOwnProperty.call(module, name), `App.js imports missing export ${name} from ./${match[2]}`);
  }
  checkedAppImports.add(modulePath);
}


// Persistence lifecycle regression guards: local progress must not be overwritten
// by the initial empty React state before AsyncStorage restore completes.
const restoreEffectStart = appSource.indexOf('useEffect(()=>{let active=true;(async()=>{try{const raw=await AsyncStorage.getItem("basanova-progress-v1")');
assert.ok(restoreEffectStart >= 0, "Progress restore must load the versioned AsyncStorage record");
const restoreEffectEnd = appSource.indexOf('useEffect(()=>{if(!storageReady)return;', restoreEffectStart);
assert.ok(restoreEffectEnd > restoreEffectStart, "Progress restore must finish before the persistence effect");
const restoreEffect = appSource.slice(restoreEffectStart, restoreEffectEnd);
assert.match(restoreEffect, /let active=true/u, "AsyncStorage restore must guard against updates after unmount");
assert.match(restoreEffect, /finally\{if\(active\)setStorageReady\(true\);\}/u,
  "Persistence must become ready after restore settles, including recoverable read failures");
const persistenceEffect = appSource.slice(restoreEffectEnd, appSource.indexOf('const words=language?', restoreEffectEnd));
assert.match(persistenceEffect, /if\(!storageReady\)return/u,
  "Initial empty state must never overwrite saved progress before restore completes");
assert.match(persistenceEffect, /schemaVersion:2/u,
  "Persisted progress must retain an explicit schema version");
assert.match(persistenceEffect, /storageWriteQueue\.current=storageWriteQueue\.current\.catch\(\(\)=>\{\}\)\.then\(\(\)=>AsyncStorage\.setItem/u,
  "AsyncStorage writes must be serialized to prevent stale writes overtaking newer progress");
assert.match(persistenceEffect, /missionDate:missionDateRef\.current/u,
  "Daily mission progress must persist its local calendar date");
assert.match(restoreEffect, /saved\.missionDate===missionDateRef\.current\?cleanMissionIndexes\(saved\.missionDone\):\[\]/u,
  "Daily mission completion must restore only for the current local date");
assert.match(persistenceEffect, /\[storageReady,theme,lessonAnswers,lessonChecked,missionDone,xp,learned,translateHistory,language,favoriteWords,adultLanguageAccess,a2ExamSubmitted,b1ExamSubmitted,b2ExamSubmitted,c1ExamSubmitted,c2ExamSubmitted\]/u,
  "Every persisted learner state field must participate in the save effect dependencies");

// Guard key App.js integrations that are easy to regress without changing lesson data.
assert.match(appSource, /Object\.values\(COURSE_LESSONS\[language\]\)\.flat\(\)/u,
  "Vocabulary library must aggregate lesson vocabulary from every CEFR level");
assert.match(appSource, /visibleVocabulary\s*=\s*filteredVocabulary\.slice\(0,\s*vocabDisplayLimit\)/u,
  "Vocabulary library must render a bounded batch of filtered results");
assert.ok((appSource.match(/↻ නැවත උත්සාහ කරන්න/gu) ?? []).length >= 20,
  "Learn screen must retain retry actions across beginner and advanced exercises");
assert.match(appSource, /lessonAnswers\[key\]===question\.answer/u,
  "Course lesson completion must require a correct practice answer");
assert.match(appSource, /lessonAnswers\[lesson\.id\+"-listen"\]===listening\.answer/u,
  "Course lesson completion must require a correct listening answer when listening exists");
assert.match(appSource, /saved\.missionDate===missionDateRef\.current/u,
  "Daily mission completion must restore only for the matching local date");
assert.match(appSource, /AppState\.addEventListener\("change"/u,
  "Daily mission date must be checked when the app resumes");

// Final-exam interaction safeguards: A1 confirms answers individually and can
// reset the entire attempt; A2–C2 submit only after all 20 answers are present,
// lock choices after submission, and clear the correct language-scoped answers
// when the learner starts a fresh attempt.
assert.match(appSource, /const done=exam\.filter\(\(q\)=>lessonChecked\[q\.id\]\)\.length;const score=exam\.filter\(q=>lessonChecked\[q\.id\]&&lessonAnswers\[q\.id\]===q\.answer\)\.length/u,
  "A1 final exam score must count only confirmed correct answers");
assert.match(appSource, /exam\.forEach\(q=>delete n\[q\.id\]\);return n;/u,
  "A1 final exam restart must clear answers for every exam question");
assert.match(appSource, /setLessonAnswers\(v=>\{const n=\{\.\.\.v\};exam\.forEach\(q=>delete n\[q\.id\]\);return n;\}\);setLessonChecked\(v=>\{const n=\{\.\.\.v\};exam\.forEach\(q=>delete n\[q\.id\]\);return n;\}\)/u,
  "A1 final exam restart must clear both selected answers and confirmed-answer state");
for (const level of ["a2", "b1", "b2", "c1", "c2"]) {
  const submitted = level + "ExamSubmitted";
  const prefix = level + "-final-";
  assert.ok(appSource.includes(`disabled={${submitted}}`),
    `${level.toUpperCase()} final exam choices must lock after submission`);
  assert.ok(appSource.includes(`for(let i=0;i<20;i++)delete n["${prefix}"+language+"-"+i]`),
    `${level.toUpperCase()} retake must clear all 20 answers for the active language only`);
  assert.ok(appSource.includes(`set${level.toUpperCase()}ExamSubmitted(false)`),
    `${level.toUpperCase()} retake must reopen the exam`);
  assert.ok(appSource.includes(`lessonAnswers["${prefix}"+language+"-"+qi]===undefined`),
    `${level.toUpperCase()} submission must require every question to be answered`);
}
assert.match(appSource, /payload=\{[^}]*a2ExamSubmitted,b1ExamSubmitted,b2ExamSubmitted,c1ExamSubmitted,c2ExamSubmitted/u,
  "A2–C2 submitted state must persist with learner progress");
assert.match(appSource, /setA2ExamSubmitted\(saved\.a2ExamSubmitted===true\)[\s\S]*setC2ExamSubmitted\(saved\.c2ExamSubmitted===true\)/u,
  "A2–C2 submitted state must restore safely from saved progress");

// Language switching must preserve each language's namespaced lesson answers;
// only the transient submitted state of the active exam is reset on a switch.
const chooseStart = appSource.indexOf("const choose=lang=>{");
const chooseEnd = appSource.indexOf("const next=", chooseStart);
assert.ok(chooseStart >= 0 && chooseEnd > chooseStart, "Language selection handler must remain explicit and auditable");
const chooseHandler = appSource.slice(chooseStart, chooseEnd);
assert.doesNotMatch(chooseHandler, /setLessonAnswers|setLessonChecked|setLearned|setFavoriteWords/u,
  "Switching language must not erase saved lesson answers, checked answers, learned words or favourites");
assert.match(appSource, /useEffect\(\(\)=>\{if\(previousLanguage\.current!==null&&previousLanguage\.current!==language\)\{setA2ExamSubmitted\(false\);setB1ExamSubmitted\(false\);setB2ExamSubmitted\(false\);setC1ExamSubmitted\(false\);setC2ExamSubmitted\(false\);\}previousLanguage\.current=language;\},\[language\]\)/u,
  "Switching languages must clear transient submitted flags without clearing language-scoped answer records");
assert.match(appSource, /const key=lesson\.id\+"-"\+questionIndex/u,
  "Lesson progress keys must be derived from globally unique lesson IDs");

// Defensive local-data restore and language-service safeguards.
assert.match(appSource, /saved\.translateHistory\.filter\(item=>item&&typeof item==="object"&&typeof item\.source==="string"&&typeof item\.result==="string"\)\.slice\(0,100\)/u,
  "Restored translator history must reject malformed entries and remain bounded");
assert.match(appSource, /const cleanLearnedWords=value=>Array\.isArray\(value\)\s*\?\[\.\.\.new Set\(value\.filter\(item=>typeof item==="string"&&item\.trim\(\)\)\.map\(item=>item\.trim\(\)\)\)\]\.slice\(0,2000\)\s*:\[\]/u,
  "Restored favourites must be trimmed, non-empty, unique and bounded");
assert.match(appSource, /setFavoriteWords\(isRecord\(saved\.favoriteWords\)\?\{Serbian:cleanWords\(saved\.favoriteWords\.Serbian\),English:cleanWords\(saved\.favoriteWords\.English\)\}:\{Serbian:saved\.language==="Serbian"\?cleanWords\(saved\.favoriteWords\):\[\],English:saved\.language==="English"\?cleanWords\(saved\.favoriteWords\):\[\]\}\)/u,
  "Favourite restore must migrate legacy arrays into the saved language and preserve separate language lists");
assert.match(appSource, /const activeFavoriteWords=language\?\(favoriteWords\[language\]\|\|\[\]\):\[\]/u,
  "Vocabulary favourites must be selected from the active language only");
assert.match(appSource, /const toggleFavorite=word=>\{if\(!language\)return;setFavoriteWords\(items=>\(\{\.\.\.items,\[language\]:/u,
  "Favourite toggles must update only the active language list");
assert.match(appSource, /const choose=lang=>\{setLanguage\(lang\);setIndex\(0\);setTab\("home"\);setVocabSearch\("?"\);setVocabLetter\("ALL"\);setVocabDisplayLimit\(60\);setShowFavoritesOnly\(false\);setExpandedLessonId\(\(lang==="Serbian"\?SERBIAN_A1_LESSONS:ENGLISH_A1_LESSONS\)\[0\]\?\.id\|\|null\);setDialogIndex\(0\);setLineIndex\(0\);setShowSlang\(false\);\}/u,
  "Switching courses must reset language-specific filters, lesson expansion and dialogue state");

assert.match(appSource, /response\.ok\)throw new Error/u,
  "Translator must handle non-success HTTP responses");
assert.match(appSource, /data\?\.responseStatus!==200\|\|!result/u,
  "Translator must reject unsuccessful or empty service responses");
assert.match(appSource, /items\.filter\(item=>item\.source!==source\|\|item\.direction!==translateDirection\)\]\.slice\(0,12\)/u,
  "Translator history must deduplicate by source and direction and stay within 12 visible entries");
assert.match(appSource, /මුරපද, බැංකු විස්තර හෝ වෙනත් රහස්‍ය තොරතුරු ඇතුළත් නොකරන්න/u,
  "Translator screen must retain its external-service privacy warning");
assert.match(appSource, /const speak=\(text,lang\)=>\{[\s\S]*?if\(!phrase\)return;[\s\S]*?Speech\.stop\(\);[\s\S]*?Speech\.speak\(phrase,\{language:lang==="Serbian"\?"sr-RS":"en-US",rate:0\.82\}\);/u,
  "TTS must stop prior playback before speaking and select the correct language voice");
assert.match(appSource, /Speech\.speak\(phrase,\{language:lang==="Serbian"\?"sr-RS":"en-US",rate:0\.82\}\)/u,
  "Device TTS fallback must select the correct Serbian or English voice locale");
assert.match(appSource, /SafeAreaView edges=\{\["top","right","bottom","left"\]\}/u,
  "Main app layout must respect device safe areas");
assert.match(appSource, /keyboardShouldPersistTaps="handled"/u,
  "Scrollable learning screens must preserve taps while the keyboard is open");

// Persisted progress must be treated as untrusted local input: keep only
// bounded primitive answer/check values, safe keys, known mission indexes,
// and bounded/deduplicated learned-word strings.
assert.match(appSource, /const cleanProgressMap=\(value,valid\)=>\{/u,
  "Restored answer/check maps must pass through a shared sanitizer");
assert.match(appSource, /key\.length<=180&&key!=="__proto__"&&key!=="constructor"&&key!=="prototype"&&valid\(item\)/u,
  "Restored progress maps must reject unsafe keys and invalid values");
assert.match(appSource, /\)\.slice\(0,6000\);/u,
  "Restored progress maps must have a bounded entry count");
assert.match(appSource, /setLessonAnswers\(cleanProgressMap\(saved\.lessonAnswers,item=>Number\.isInteger\(item\)&&item>=0&&item<=30\)\)/u,
  "Restored answers must be valid bounded option indexes");
assert.match(appSource, /setLessonChecked\(cleanProgressMap\(saved\.lessonChecked,item=>typeof item==="boolean"\)\)/u,
  "Restored answer-confirmation values must be booleans");
assert.match(appSource, /const cleanLearnedWords=value=>Array\.isArray\(value\)[\s\S]*?\.slice\(0,2000\)/u,
  "Restored learned-word lists must be trimmed, deduplicated and bounded");
assert.match(appSource, /const cleanMissionIndexes=value=>Array\.isArray\(value\)[\s\S]*item<MISSIONS\.length/u,
  "Restored daily mission indexes must be restricted to the available missions");
assert.match(appSource, /Math\.min\(Math\.floor\(saved\.xp\),10000000\)/u,
  "Restored XP must be a finite non-negative bounded integer");

assert.match(appSource, /function Action\(\{children,onPress,secondary=false\}\)[\s\S]*?accessibilityRole="button" accessibilityLabel=\{typeof children==="string"\?children:undefined\}/u,
  "Shared action buttons must expose button semantics and readable labels when text is supplied");

// A single TouchableOpacity wrapper applies consistent button semantics,
// a text-derived fallback label, disabled state exposure and disabled styling
// across every screen without duplicating props on hundreds of call sites.
assert.match(appSource, /return \/\[\\p\{L\}\\p\{N\}\]\/u\.test\(value\)\?value:""/u,
  "Emoji-only child text must use a meaningful generic fallback rather than an emoji-only screen-reader label");
assert.match(appSource, /TouchableOpacity as NativeTouchableOpacity/u,
  "Native touch controls must be wrapped by the shared accessible control");
assert.match(appSource, /function TouchableOpacity\(\{children,accessibilityRole="button",accessibilityLabel,accessibilityState,disabled=false,style,\.\.\.props\}\)/u,
  "Every touch control must receive a default button role and disabled-state handling");
assert.match(appSource, /readableControlLabel\(children\)\|\|"ක්‍රියා බොත්තම"/u,
  "Touch controls without explicit labels must derive a readable fallback label");
assert.match(appSource, /accessibilityState=\{\{\.\.\.accessibilityState,disabled\}\}/u,
  "Disabled touch controls must expose their disabled state to assistive technology");
assert.match(appSource, /disabled&&\{opacity:0\.45\}/u,
  "Disabled touch controls must have a visible disabled appearance");

// Navigation accessibility and compact-screen usability.
assert.match(appSource, /accessibilityRole="button" accessibilityLabel=\{label\} accessibilityState=\{\{selected:tab===id\}\} onPress=\{\(\)=>setTab\(id\)\}/u,
  "Bottom navigation must expose a screen-reader label and selected state for every tab");
assert.match(appSource, /navItem:\{flex:1,minWidth:0,minHeight:52,[^}]*paddingVertical:6\}/u,
  "Bottom navigation touch targets must have a minimum 52-point height");
assert.match(appSource, /navLabel:\{fontSize:10,/u,
  "Bottom navigation labels must remain readable on small screens");

// Navigation contract: the seven visible tabs must be unique, have matching
// render branches, and keep the Serbian alphabet reachable from the home screen.
const navArrayStart = appSource.indexOf('<View style={s.nav}>{[');
const navArrayEnd = appSource.indexOf('].map(([id,ic,label])', navArrayStart);
assert.ok(navArrayStart >= 0 && navArrayEnd > navArrayStart,
  "Bottom navigation must expose its tab definitions in one auditable list");
const navEntries = [...appSource.slice(navArrayStart, navArrayEnd).matchAll(/"([^"]+)","[^"]+","([^"]+)"/gu)];
const navIds = navEntries.map(([, id]) => id);
assert.equal(navIds.length, 7, "Bottom navigation must contain exactly seven primary tabs");
assert.equal(new Set(navIds).size, navIds.length, "Bottom navigation tab IDs must be unique");
assert.deepEqual(navIds, ["home", "speak", "learn", "vocabulary", "translate", "teacher", "progress"],
  "Bottom navigation order and tab IDs must remain stable");
for (const id of navIds) {
  assert.ok(appSource.includes('tab==="' + id + '"'), "Bottom navigation tab " + id + " must have a matching screen render branch");
}
assert.ok(appSource.includes('setTab("alphabet")'),
  "The Serbian alphabet screen must remain reachable from the home screen");

// Lesson progress must update when either answers or confirmation flags change,
// and only confirmed correct answers may count toward completion.
const lessonProgressStart = appSource.indexOf("const courseLessonProgress=useMemo(()=>{");
const lessonProgressEnd = appSource.indexOf("const totalLessonsCompleted=", lessonProgressStart);
assert.ok(lessonProgressStart >= 0 && lessonProgressEnd > lessonProgressStart,
  "Course lesson progress calculation must remain a single auditable memo");
const lessonProgressSource = appSource.slice(lessonProgressStart, lessonProgressEnd);
assert.ok(lessonProgressSource.includes("lessonChecked[key]===true&&lessonAnswers[key]===question.answer"),
  "A lesson practice question must be checked and correct before completion");
assert.ok(lessonProgressSource.includes('lessonChecked[lesson.id+"-listen"]===true'),
  "Listening must be confirmed before it contributes to lesson completion");
assert.ok(lessonProgressSource.includes("},[language,lessonChecked,lessonAnswers]);"),
  "Lesson completion percentages must recalculate after language, answer or check-state changes");

// Listening retry actions must clear both the selected answer and checked flag.
// Keep the computed property key fully quoted; malformed keys can break the JSX
// module or leave a failed listening attempt locked.
assert.ok(!appSource.includes('lesson.id+"-listen]:undefined'),
  "Listening retry must not contain an unterminated computed-key string");
assert.ok(!appSource.includes('lesson.id+"-listen]:false'),
  "Listening retry checked-state reset must use a valid computed key");
assert.equal(appSource.split('lesson.id+"-listen"]:undefined').length - 1, 6,
  "All six listening retry actions must clear the selected answer");
assert.equal(appSource.split('lesson.id+"-listen"]:false').length - 1, 6,
  "All six listening retry actions must clear the checked flag");


assert.match(appSource, /accessibilityLabel=\{theme==="dark"\?"ආලෝක තේමාව සක්‍රිය කරන්න":"අඳුරු තේමාව සක්‍රිය කරන්න"\}/u,
  "Theme toggle must expose its action to screen readers");
assert.match(appSource, /accessibilityLabel="Serbian පාඨමාලාව තෝරන්න"/u,
  "Serbian course selector must have a screen-reader label");
assert.match(appSource, /accessibilityLabel="English පාඨමාලාව තෝරන්න"/u,
  "English course selector must have a screen-reader label");

assert.match(appSource, /accessibilityLabel="වචනය, සිංහල තේරුම හෝ උච්චාරණය සොයන්න"/u,
  "Vocabulary search input must have a descriptive screen-reader label");
assert.match(appSource, /accessibilityLabel=\{translateDirection==="si-sr"\?"පරිවර්තනය සඳහා සිංහල වාක්‍යය ලියන්න":"පරිවර්තනය සඳහා Serbian වාක්‍යය ලියන්න"\}/u,
  "Translator input must have a descriptive screen-reader label");
assert.match(appSource, /accessibilityLabel=\{translateDirection==="si-sr"\?"සිංහල වාක්‍යය Serbian භාෂාවට පරිවර්තනය කරන්න":"Serbian වාක්‍යය සිංහලට පරිවර්තනය කරන්න"\}/u,
  "Translator submit action must have a direction-aware descriptive screen-reader label");
assert.match(appSource, /accessibilityState=\{\{selected:vocabLetter===letter\}\}/u,
  "Vocabulary alphabet filters must expose their selected state");
assert.match(appSource, /vocabLetter:\{minHeight:44,justifyContent:"center",/u,
  "Vocabulary alphabet filter touch targets must be at least 44 points high");

assert.match(appSource, /alphabet:"Serbian අකුරු"/u,
  "Serbian alphabet screen must have a visible page title");


assert.match(appSource, /setA2ExamSubmitted\(false\);setB1ExamSubmitted\(false\);setB2ExamSubmitted\(false\);setC1ExamSubmitted\(false\);setC2ExamSubmitted\(false\)/u,
  "Switching language must close any previously submitted advanced exam");


const serbianRevision = await loadModule("serbianRevision.js");
function validateAudioSet(label, questions, expectedCount) {
  assert.equal(Array.isArray(questions), true, `${label}: expected an array`);
  assert.equal(questions.length, expectedCount, `${label}: unexpected question count`);
  for (const [index, question] of questions.entries()) {
    assert.ok(typeof question.audio === "string" && question.audio.trim(), `${label} #${index + 1}: missing audio text`);
    assert.ok(Array.isArray(question.options) && question.options.length >= 2, `${label} #${index + 1}: missing options`);
    if (Array.isArray(question.readings)) {
      assert.equal(question.readings.length, question.options.length, `${label} #${index + 1}: pronunciation options must align with answer options`);
      assert.ok(question.readings.every(reading => hasSinhala(reading) && !hasForeignScript(reading)), `${label} #${index + 1}: invalid Sinhala option pronunciation`);
    } else {
      assert.ok(hasSinhala(question.reading) && !hasForeignScript(question.reading), `${label} #${index + 1}: invalid Sinhala pronunciation`);
    }
    assert.equal(new Set(question.options).size, question.options.length, `${label} #${index + 1}: duplicate options`);
    assert.ok(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < question.options.length, `${label} #${index + 1}: invalid answer index`);
  }
}
validateAudioSet("Serbian A1 listening bank", serbianRevision.SERBIAN_A1_LISTENING, 25);
validateAudioSet("Serbian A1 mixed revision", serbianRevision.SERBIAN_A1_MIXED_REVISION, 27);

const serbianLessonStats = validateLessonTrack("Serbian A1", serbianLessons.SERBIAN_A1_LESSONS);
const englishLessonStats = validateLessonTrack("English A1", englishLessons.ENGLISH_A1_LESSONS);
validateLessonNumbering("Serbian A1", serbianLessons.SERBIAN_A1_LESSONS);
validateLessonNumbering("English A1", englishLessons.ENGLISH_A1_LESSONS);
assert.equal(serbianLessonStats.lessons, englishLessonStats.lessons, "Serbian and English A1 lesson counts must match");
assert.equal(serbianLessonStats.lessons, 50, "Serbian A1: expected exactly 50 lessons");
assert.equal(englishLessonStats.lessons, 50, "English A1: expected exactly 50 lessons");

// Full course coverage: validate every paired A2–B2 track and all five C2 batches.
// This reuses the same field, Sinhala-reading, practice-option and answer-index checks
// used for A1, so a level cannot be marked complete from lesson counts alone.
async function loadPairedTrack(label, files, exportNames) {
  const lessons = [];
  for (let i = 0; i < files.length; i++) {
    const mod = await loadModule(files[i]);
    const batch = mod[exportNames[i]];
    assert.ok(Array.isArray(batch), `${label}: missing export ${exportNames[i]} in ${files[i]}`);
    lessons.push(...batch);
  }
  const stats = validateLessonTrack(label, lessons);
  assert.equal(stats.lessons, 50, `${label}: expected exactly 50 lessons`);
  assert.equal(stats.listeningCount, 50, `${label}: every lesson must include listening practice`);
  const titles = lessons.map(item => item.title.trim().toLocaleLowerCase());
  assert.equal(new Set(titles).size, 50, `${label}: duplicate lesson titles detected`);
  const fingerprints = lessons.map(item => `${item.title.trim().toLocaleLowerCase()}|${(item.vocabulary ?? []).map(v => v.word.trim().toLocaleLowerCase()).join("|")}`);
  assert.equal(new Set(fingerprints).size, 50, `${label}: duplicate lesson content fingerprints detected`);
  return { lessons, stats };
}

const pairedLevels = [
  ["Serbian A2", ["serbianA2Lessons.js"], ["SERBIAN_A2_LESSONS"]],
  ["English A2", ["englishA2Lessons.js"], ["ENGLISH_A2_LESSONS"]],
  ["Serbian B1", ["serbianB1Lessons.js"], ["SERBIAN_B1_LESSONS"]],
  ["English B1", ["englishB1Lessons.js"], ["ENGLISH_B1_LESSONS"]],
  ["Serbian B2", ["serbianB2Lessons.js"], ["SERBIAN_B2_LESSONS"]],
  ["English B2", ["englishB2Lessons.js"], ["ENGLISH_B2_LESSONS"]],
  ["Serbian C2", ["serbianC2Lessons.js","serbianC2Lessons11_20.js","serbianC2Lessons21_30.js","serbianC2Lessons31_40.js","serbianC2Lessons41_50.js"], ["SERBIAN_C2_LESSONS","SERBIAN_C2_LESSONS_11_20","SERBIAN_C2_LESSONS_21_30","SERBIAN_C2_LESSONS_31_40","SERBIAN_C2_LESSONS_41_50"]],
  ["English C2", ["englishC2Lessons.js","englishC2Lessons11_20.js","englishC2Lessons21_30.js","englishC2Lessons31_40.js","englishC2Lessons41_50.js"], ["ENGLISH_C2_LESSONS","ENGLISH_C2_LESSONS_11_20","ENGLISH_C2_LESSONS_21_30","ENGLISH_C2_LESSONS_31_40","ENGLISH_C2_LESSONS_41_50"]],
];
const courseStats = {};
const courseLessons = {};
for (const [label, files, names] of pairedLevels) {
  const result = await loadPairedTrack(label, files, names);
  courseStats[label] = result.stats;
  courseLessons[label] = result.lessons;
}
for (const level of ["A2", "B1", "B2", "C2"]) {
  const sr = courseStats[`Serbian ${level}`];
  const en = courseStats[`English ${level}`];
  assert.equal(sr.lessons, en.lessons, `${level}: Serbian and English lesson counts differ`);
}




const serbianB1Source = await loadModule("serbianB1Lessons.js");
for (const lesson of serbianB1Source.SERBIAN_B1_LESSONS) {
  const lessonText = [
    ...(lesson.vocabulary || []).map(item => item.example),
    ...(lesson.examples || []).map(item => item.sr || item.text),
    ...(lesson.dialogue || []).map(item => item.sr || item.text),
    ...(lesson.grammarTerms || []).map(item => item.sr || item.text),
  ].join(" ").toLocaleLowerCase();
  for (const item of lesson.vocabulary || []) {
    const headword=item.word.toLocaleLowerCase();
    const headwordStem=headword.replace(/\s+/gu," ").slice(0,Math.min(5,headword.length));
    assert.ok(lessonText.includes(headword)||lessonText.includes(headwordStem), `${lesson.id}: Serbian B1 headword is not present in its Serbian examples: ${item.word}`);
    assert.ok(hasSinhala(item.reading) && !hasForeignScript(item.reading), `${lesson.id}: invalid Sinhala pronunciation for ${item.word}`);
  }
}
const serbianB2Source = await loadModule("serbianB2Lessons.js");
for (const lesson of serbianB2Source.SERBIAN_B2_LESSONS) {
  const lessonText = [
    ...(lesson.vocabulary || []).map(item => item.example),
    ...(lesson.examples || []).map(item => item.sr || item.text),
    ...(lesson.dialogue || []).map(item => item.sr || item.text),
    ...(lesson.grammarTerms || []).map(item => item.sr || item.text),
  ].join(" ").toLocaleLowerCase();
  for (const item of lesson.vocabulary || []) {
    assert.ok(!/[А-Яа-яЁёЂђЈјЉљЊњЋћЏџ]/u.test(item.word), `${lesson.id}: Serbian B2 headword must use Latin script: ${item.word}`);
    assert.ok(hasSinhala(item.reading) && !hasForeignScript(item.reading), `${lesson.id}: invalid Sinhala pronunciation for ${item.word}`);
    const headword=item.word.toLocaleLowerCase();
    const stem=headword.replace(/\s+/gu," ").slice(0,Math.min(5,headword.length));
    assert.ok(lessonText.includes(headword)||lessonText.includes(stem), `${lesson.id}: Serbian B2 headword is not present in its Serbian examples: ${item.word}`);
  }
}

const c1LessonFiles = [
  ["serbianC1Lessons.js","SERBIAN_C1_LESSONS","Serbian"],
  ["serbianC1Lessons11_20.js","SERBIAN_C1_LESSONS_11_20","Serbian"],
  ["serbianC1Lessons21_30.js","SERBIAN_C1_LESSONS_21_30","Serbian"],
  ["serbianC1Lessons31_40.js","SERBIAN_C1_LESSONS_31_40","Serbian"],
  ["serbianC1Lessons41_50.js","SERBIAN_C1_LESSONS_41_50","Serbian"],
  ["englishC1Lessons.js","ENGLISH_C1_LESSONS","English"],
  ["englishC1Lessons11_20.js","ENGLISH_C1_LESSONS_11_20","English"],
  ["englishC1Lessons21_30.js","ENGLISH_C1_LESSONS_21_30","English"],
  ["englishC1Lessons31_40.js","ENGLISH_C1_LESSONS_31_40","English"],
  ["englishC1Lessons41_50.js","ENGLISH_C1_LESSONS_41_50","English"],
];
const c1Tracks = { Serbian: [], English: [] };
for (const [path, name, language] of c1LessonFiles) {
  const mod = await loadModule(path);
  c1Tracks[language].push(...mod[name]);
}
function validateC1Track(label, lessons, latinSerbian = false) {
  assert.equal(lessons.length, 50, `${label}: expected 50 lessons`);
  const ids = new Set(), dialogue = new Set(), practicePositions = [0,0,0], listeningPositions = [0,0,0];
  for (const lesson of lessons) {
    assert.ok(lesson.id && !ids.has(lesson.id), `${label}: duplicate/missing id ${lesson.id}`);
    ids.add(lesson.id);
    assert.ok(lesson.title?.trim() && lesson.objective?.trim() && lesson.grammarTitle?.trim() && lesson.grammar?.trim(), `${lesson.id}: incomplete lesson header`);
    assert.equal(lesson.vocabulary?.length, 8, `${lesson.id}: expected 8 vocabulary cards`);
    assert.equal(lesson.examples?.length, 4, `${lesson.id}: expected 4 examples`);
    assert.equal(lesson.dialogue?.length, 4, `${lesson.id}: expected 4 dialogue turns`);
    assert.equal(lesson.practice?.length, 4, `${lesson.id}: expected 4 practice questions`);
    for (const [i,v] of lesson.vocabulary.entries()) {
      for (const key of ["word","reading","meaning","example","translation"]) assert.ok(typeof v[key]==="string" && v[key].trim(), `${lesson.id} vocab ${i+1}: missing ${key}`);
      assert.ok(hasSinhala(v.reading) && !hasForeignScript(v.reading), `${lesson.id} vocab ${i+1}: invalid reading`);
      if (latinSerbian) assert.ok(!/[А-Яа-яЁёЂђЈјЉљЊњЋћЏџ]/u.test(v.word), `${lesson.id}: Serbian word must use Latin script`);
    }
    for (const ex of lesson.examples) assert.ok((ex.sr??ex.text)?.trim() && (ex.si??ex.meaning)?.trim(), `${lesson.id}: incomplete example`);
    for (const line of lesson.dialogue) {
      const text = line.sr??line.text;
      assert.ok(text?.trim() && (line.si??line.meaning)?.trim(), `${lesson.id}: incomplete dialogue`);
      assert.ok(!dialogue.has(text), `${label}: duplicate dialogue line: ${text}`);
      dialogue.add(text);
    }
    for (const q of lesson.practice) {
      assert.ok(q.prompt?.trim() && q.options?.length===3 && new Set(q.options).size===3, `${lesson.id}: invalid practice options`);
      assert.ok(Number.isInteger(q.answer) && q.answer>=0 && q.answer<q.options.length, `${lesson.id}: invalid practice answer`);
      practicePositions[q.answer]++;
    }
    const q=lesson.listeningPractice;
    assert.ok(q?.prompt?.trim() && q.audio?.trim() && hasSinhala(q.reading) && !hasForeignScript(q.reading), `${lesson.id}: invalid listening content`);
    assert.ok(q.options?.length===3 && Number.isInteger(q.answer) && q.answer>=0 && q.answer<q.options.length, `${lesson.id}: invalid listening options/answer`);
    listeningPositions[q.answer]++;
  }
  assert.equal(ids.size,50,`${label}: IDs must be unique`);
  assert.ok(practicePositions.every(n=>n>0),`${label}: practice answers are position-biased`);
  assert.ok(listeningPositions.every(n=>n>0),`${label}: listening answers are position-biased`);
  return {lessons:lessons.length,dialogueLines:dialogue.size,practicePositions,listeningPositions};
}
const serbianC1Stats=validateC1Track("Serbian C1",c1Tracks.Serbian,true);
const englishC1Stats=validateC1Track("English C1",c1Tracks.English);
// Register the independently validated C1 tracks in the shared course registry.
// Later cross-level uniqueness and paired-track checks consume this registry.
courseLessons["Serbian C1"] = c1Tracks.Serbian;
courseLessons["English C1"] = c1Tracks.English;
courseStats["Serbian C1"] = {
  lessons: c1Tracks.Serbian.length,
  vocabularyCount: c1Tracks.Serbian.reduce((sum, lesson) => sum + lesson.vocabulary.length, 0),
  practiceCount: c1Tracks.Serbian.reduce((sum, lesson) => sum + lesson.practice.length, 0),
  listeningCount: c1Tracks.Serbian.filter(lesson => Boolean(lesson.listeningPractice)).length,
};
courseStats["English C1"] = {
  lessons: c1Tracks.English.length,
  vocabularyCount: c1Tracks.English.reduce((sum, lesson) => sum + lesson.vocabulary.length, 0),
  practiceCount: c1Tracks.English.reduce((sum, lesson) => sum + lesson.practice.length, 0),
  listeningCount: c1Tracks.English.filter(lesson => Boolean(lesson.listeningPractice)).length,
};
const c1=await loadModule(files.c1);
const c1Meanings={
 Serbian:new Map(c1Tracks.Serbian.flatMap(l=>l.vocabulary.map(v=>[v.word.toLowerCase(),v.meaning]))),
 English:new Map(c1Tracks.English.flatMap(l=>l.vocabulary.map(v=>[v.word.toLowerCase(),v.meaning]))),
};
function validateC1Assessment(label,questions,count,language,final=false){
 assert.equal(questions.length,count,`${label}: wrong question count`);
 const ids=new Set();
 for(const q of questions){
  assert.ok(q.id&&!ids.has(q.id),`${label}: duplicate/missing id ${q.id}`);ids.add(q.id);
  assert.ok(q.options?.length>=3&&new Set(q.options).size===q.options.length,`${q.id}: invalid options`);
  assert.ok(Number.isInteger(q.answer)&&q.answer>=0&&q.answer<q.options.length,`${q.id}: invalid answer`);
  if(q.word){
   const meaning=c1Meanings[language].get(q.word.toLowerCase());
   assert.ok(meaning,`${q.id}: word absent from course vocabulary`);
   assert.equal(q.options[q.answer],meaning,`${q.id}: answer does not match vocabulary meaning`);
   assert.ok(hasSinhala(q.wordReading)&&!hasForeignScript(q.wordReading),`${q.id}: invalid word reading`);
  }
  if(q.audio)assert.ok(hasSinhala(q.reading)&&!hasForeignScript(q.reading),`${q.id}: invalid audio reading`);
 }
 if(final){assert.equal(questions.filter(q=>q.audio).length,6,`${label}: expected 6 listening items`);assert.equal(questions.filter(q=>q.word).length,14,`${label}: expected 14 vocabulary items`);}
}
validateC1Assessment("Serbian C1 revision",c1.SERBIAN_C1_MIXED_REVISION,10,"Serbian");
validateC1Assessment("English C1 revision",c1.ENGLISH_C1_MIXED_REVISION,10,"English");
validateC1Assessment("Serbian C1 final",c1.SERBIAN_C1_FINAL_EXAM,20,"Serbian",true);
validateC1Assessment("English C1 final",c1.ENGLISH_C1_FINAL_EXAM,20,"English",true);

const a1 = await loadModule(files.a1);
validateQuestions("Serbian A1 final exam", a1.SERBIAN_A1_FINAL_EXAM, 20, { pronunciation: true });
validateQuestions("English A1 final exam", a1.ENGLISH_A1_FINAL_EXAM, 20, { pronunciation: true });
assert.ok(a1.SERBIAN_A1_FINAL_EXAM.every(question => question.id.startsWith("sr-a1-final-")),
  "Serbian A1 exam IDs must be language-scoped to prevent progress leaking into English");
assert.ok(a1.ENGLISH_A1_FINAL_EXAM.every(question => question.id.startsWith("en-a1-final-")),
  "English A1 exam IDs must be language-scoped to prevent progress leaking into Serbian");
assert.equal(new Set([...a1.SERBIAN_A1_FINAL_EXAM, ...a1.ENGLISH_A1_FINAL_EXAM].map(question => question.id)).size, 40,
  "Serbian and English A1 exam IDs must be globally unique");



const a2AssessmentModule = await loadModule("a2FinalExams.js");
const serbianA2Lessons = await loadModule("serbianA2Lessons.js");
const englishA2Lessons = await loadModule("englishA2Lessons.js");
const a2Assessments = a2AssessmentModule.buildA2Assessments(serbianA2Lessons.SERBIAN_A2_LESSONS, englishA2Lessons.ENGLISH_A2_LESSONS);
const a2Vocabulary = {
 Serbian: new Map(serbianA2Lessons.SERBIAN_A2_LESSONS.flatMap(lesson => lesson.vocabulary.map(item => [item.word.toLocaleLowerCase(), item.meaning]))),
 English: new Map(englishA2Lessons.ENGLISH_A2_LESSONS.flatMap(lesson => lesson.vocabulary.map(item => [item.word.toLocaleLowerCase(), item.meaning]))),
};
function validateA2Assessment(label, questions, expectedCount, language, isFinal = false) {
  validateQuestions(label, questions, expectedCount, { pronunciation: true });
  const ids = new Set();
  for (const question of questions) {
    assert.ok(!ids.has(question.id), `${label}: duplicate id ${question.id}`);
    ids.add(question.id);
    if (question.word) {
      const meaning = a2Vocabulary[language].get(question.word.toLocaleLowerCase());
      assert.ok(meaning, `${question.id}: vocabulary word is not in the A2 course`);
      assert.equal(question.options[question.answer], meaning, `${question.id}: answer does not match A2 vocabulary`);
    }
    if (question.audio) {
      assert.ok(question.reading && hasSinhala(question.reading), `${question.id}: listening item missing Sinhala reading`);
    }
  }
  if (isFinal) {
    assert.equal(questions.filter(question => question.word).length, 14, `${label}: expected 14 vocabulary items`);
    assert.equal(questions.filter(question => question.audio).length, 6, `${label}: expected 6 listening items`);
  }
}
validateA2Assessment("Serbian A2 mixed revision", a2Assessments.SERBIAN_A2_MIXED_REVISION, 10, "Serbian");
validateA2Assessment("English A2 mixed revision", a2Assessments.ENGLISH_A2_MIXED_REVISION, 10, "English");
validateA2Assessment("Serbian A2 final exam", a2Assessments.SERBIAN_A2_FINAL_EXAM, 20, "Serbian", true);
validateA2Assessment("English A2 final exam", a2Assessments.ENGLISH_A2_FINAL_EXAM, 20, "English", true);

const b1Assessments = await loadModule("b1FinalExams.js");
const assessmentAlignment = await loadModule("assessmentAlignment.js");
const b1SerbianLessons = await loadModule("serbianB1Lessons.js");
const b2SerbianLessons = await loadModule("serbianB2Lessons.js");
function validateSerbianB2Pronunciation(lessons) {
  assert.equal(lessons.length, 50, "Serbian B2: expected 50 lessons");
  for (const lesson of lessons) {
    for (const [index, item] of lesson.vocabulary.entries()) {
      assert.ok(hasSinhala(item.reading) && !hasForeignScript(item.reading), `${lesson.id} vocabulary ${index + 1}: reading must be clean Sinhala script`);
      if (item.exampleReading) {
        assert.ok(hasSinhala(item.exampleReading) && !hasForeignScript(item.exampleReading), `${lesson.id} vocabulary ${index + 1}: exampleReading must be clean Sinhala script`);
      }
    }
  }
}
validateSerbianB2Pronunciation(b2SerbianLessons.SERBIAN_B2_LESSONS);

validateQuestions("Serbian B1 mixed revision", b1Assessments.SERBIAN_B1_MIXED_REVISION, 10);
validateQuestions("English B1 mixed revision", b1Assessments.ENGLISH_B1_MIXED_REVISION, 10);
validateQuestions("Serbian B1 final exam", b1Assessments.SERBIAN_B1_FINAL_EXAM, 20);
validateQuestions("English B1 final exam", b1Assessments.ENGLISH_B1_FINAL_EXAM, 20);


assessmentAlignment.alignSerbianAssessmentWords(b1Assessments.SERBIAN_B1_MIXED_REVISION, b1SerbianLessons.SERBIAN_B1_LESSONS);
assessmentAlignment.alignSerbianAssessmentWords(b1Assessments.SERBIAN_B1_FINAL_EXAM, b1SerbianLessons.SERBIAN_B1_LESSONS);

const b2Assessments = await loadModule("b2FinalExams.js");
validateQuestions("Serbian B2 mixed revision", b2Assessments.SERBIAN_B2_MIXED_REVISION, 10);
validateQuestions("English B2 mixed revision", b2Assessments.ENGLISH_B2_MIXED_REVISION, 10);
validateQuestions("Serbian B2 final exam", b2Assessments.SERBIAN_B2_FINAL_EXAM, 20);
validateQuestions("English B2 final exam", b2Assessments.ENGLISH_B2_FINAL_EXAM, 20);

assessmentAlignment.alignSerbianAssessmentWords(b2Assessments.SERBIAN_B2_MIXED_REVISION, b2SerbianLessons.SERBIAN_B2_LESSONS);
assessmentAlignment.alignSerbianAssessmentWords(b2Assessments.SERBIAN_B2_FINAL_EXAM, b2SerbianLessons.SERBIAN_B2_LESSONS);
function validateAlignedSerbianAssessment(label, questions, lessons) {
  const vocabulary = new Map(lessons.flatMap(lesson => lesson.vocabulary.map(item => [item.word.toLocaleLowerCase(), item])));
  for (const question of questions) {
    if (!question.word) continue;
    const item = vocabulary.get(question.word.toLocaleLowerCase());
    assert.ok(item, `${label}: headword is missing from the Serbian course: ${question.word}`);
    assert.equal(question.wordReading, item.reading, `${label}: pronunciation does not match ${question.word}`);
    assert.equal(question.options[question.answer], item.meaning, `${label}: answer meaning does not match ${question.word}`);
  }
}
validateAlignedSerbianAssessment("Serbian B1 mixed revision", b1Assessments.SERBIAN_B1_MIXED_REVISION, b1SerbianLessons.SERBIAN_B1_LESSONS);
validateAlignedSerbianAssessment("Serbian B1 final exam", b1Assessments.SERBIAN_B1_FINAL_EXAM, b1SerbianLessons.SERBIAN_B1_LESSONS);
validateAlignedSerbianAssessment("Serbian B2 mixed revision", b2Assessments.SERBIAN_B2_MIXED_REVISION, b2SerbianLessons.SERBIAN_B2_LESSONS);
validateAlignedSerbianAssessment("Serbian B2 final exam", b2Assessments.SERBIAN_B2_FINAL_EXAM, b2SerbianLessons.SERBIAN_B2_LESSONS);


function validateBalancedAnswerPositions(label, questions) {
  const groups = new Map();
  for (const question of questions) {
    const count = question.options.length;
    if (!groups.has(count)) groups.set(count, []);
    groups.get(count).push(question.answer);
  }
  for (const [optionCount, answers] of groups) {
    const counts = Array(optionCount).fill(0);
    for (const answer of answers) counts[answer]++;
    assert.ok(Math.max(...counts) - Math.min(...counts) <= 1,
      `${label}: answer positions are imbalanced for ${optionCount} options (${counts.join("/")})`);
  }
}

function validateAssessmentVocabularyAlignment(label, questions, lessons) {
  const vocabulary = new Map(lessons.flatMap(lesson =>
    lesson.vocabulary.map(item => [item.word.toLocaleLowerCase(), item])));
  for (const question of questions) {
    if (!question.word) continue;
    const item = vocabulary.get(question.word.toLocaleLowerCase());
    assert.ok(item, `${label}: headword is missing from the course: ${question.word}`);
    assert.equal(question.wordReading, item.reading, `${label}: pronunciation does not match ${question.word}`);
    assert.equal(question.options[question.answer], item.meaning,
      `${label}: answer meaning does not match ${question.word}`);
  }
}

const c2 = await loadModule(files.c2);
validateQuestions("Serbian C2 mixed revision", c2.SERBIAN_C2_MIXED_REVISION, 10);
validateQuestions("English C2 mixed revision", c2.ENGLISH_C2_MIXED_REVISION, 10);
validateQuestions("Serbian C2 final exam", c2.SERBIAN_C2_FINAL_EXAM, 20, { pronunciation: true });
validateQuestions("English C2 final exam", c2.ENGLISH_C2_FINAL_EXAM, 20, { pronunciation: true });

// Global assessment identity audit: progress keys are shared in AsyncStorage,
// so every exam/revision question ID must be unique across levels and languages.
const allAssessmentGroups = [
  ["Serbian A1", "A1", [...a1.SERBIAN_A1_FINAL_EXAM]],
  ["English A1", "A1", [...a1.ENGLISH_A1_FINAL_EXAM]],
  ["Serbian A2", "A2", [...a2Assessments.SERBIAN_A2_MIXED_REVISION, ...a2Assessments.SERBIAN_A2_FINAL_EXAM]],
  ["English A2", "A2", [...a2Assessments.ENGLISH_A2_MIXED_REVISION, ...a2Assessments.ENGLISH_A2_FINAL_EXAM]],
  ["Serbian B1", "B1", [...b1Assessments.SERBIAN_B1_MIXED_REVISION, ...b1Assessments.SERBIAN_B1_FINAL_EXAM]],
  ["English B1", "B1", [...b1Assessments.ENGLISH_B1_MIXED_REVISION, ...b1Assessments.ENGLISH_B1_FINAL_EXAM]],
  ["Serbian B2", "B2", [...b2Assessments.SERBIAN_B2_MIXED_REVISION, ...b2Assessments.SERBIAN_B2_FINAL_EXAM]],
  ["English B2", "B2", [...b2Assessments.ENGLISH_B2_MIXED_REVISION, ...b2Assessments.ENGLISH_B2_FINAL_EXAM]],
  ["Serbian C1", "C1", [...c1.SERBIAN_C1_MIXED_REVISION, ...c1.SERBIAN_C1_FINAL_EXAM]],
  ["English C1", "C1", [...c1.ENGLISH_C1_MIXED_REVISION, ...c1.ENGLISH_C1_FINAL_EXAM]],
  ["Serbian C2", "C2", [...c2.SERBIAN_C2_MIXED_REVISION, ...c2.SERBIAN_C2_FINAL_EXAM]],
  ["English C2", "C2", [...c2.ENGLISH_C2_MIXED_REVISION, ...c2.ENGLISH_C2_FINAL_EXAM]],
];
const allAssessmentIds = new Set();
let assessmentQuestionCount = 0;
for (const [label, level, questions] of allAssessmentGroups) {
  assert.equal(questions.length, 30, `${label}: expected 10 revision and 20 final questions`);
  const languageCode = label.startsWith("Serbian") ? "sr" : "en";
  for (const question of questions) {
    assert.ok(question.id.includes(level.toLowerCase()), `${label}: question ID must include ${level}: ${question.id}`);
    assert.ok(question.id.includes(languageCode), `${label}: question ID must include language ${languageCode}: ${question.id}`);
    assert.ok(!allAssessmentIds.has(question.id), `Duplicate assessment ID across courses: ${question.id}`);
    allAssessmentIds.add(question.id);
    assessmentQuestionCount++;
  }
}
assert.equal(assessmentQuestionCount, 340, "All six levels must expose 340 uniquely identified revision/final assessment questions");

for (const [label, lessons] of [["Serbian C2", courseLessons["Serbian C2"]], ["English C2", courseLessons["English C2"]]]) {
  validateBalancedAnswerPositions(`${label} lesson practice`, lessons.flatMap(lesson => lesson.practice));
  validateBalancedAnswerPositions(`${label} lesson listening`, lessons.map(lesson => lesson.listeningPractice));
}
for (const [label, questions] of [
  ["Serbian C2 mixed revision", c2.SERBIAN_C2_MIXED_REVISION],
  ["English C2 mixed revision", c2.ENGLISH_C2_MIXED_REVISION],
  ["Serbian C2 final exam", c2.SERBIAN_C2_FINAL_EXAM],
  ["English C2 final exam", c2.ENGLISH_C2_FINAL_EXAM],
]) validateBalancedAnswerPositions(label, questions);
validateAssessmentVocabularyAlignment("Serbian C2 mixed revision", c2.SERBIAN_C2_MIXED_REVISION, courseLessons["Serbian C2"]);
validateAssessmentVocabularyAlignment("Serbian C2 final exam", c2.SERBIAN_C2_FINAL_EXAM, courseLessons["Serbian C2"]);
validateAssessmentVocabularyAlignment("English C2 mixed revision", c2.ENGLISH_C2_MIXED_REVISION, courseLessons["English C2"]);
validateAssessmentVocabularyAlignment("English C2 final exam", c2.ENGLISH_C2_FINAL_EXAM, courseLessons["English C2"]);

function validateC2EditorialContent(label, lessons) {
  const editorialLessons = lessons.filter(lesson => Number(lesson.id.match(/l(\d+)$/u)?.[1]) <= 30);
  assert.equal(editorialLessons.length, 30, `${label}: expected C2 lessons 1–30`);
  const dialogueLessons = editorialLessons.filter(lesson => Number(lesson.id.match(/l(\d+)$/u)?.[1]) <= 20);
  const dialogueLines = dialogueLessons.flatMap(lesson => lesson.dialogue.map(line => line.text.trim()));
  assert.equal(new Set(dialogueLines).size, dialogueLines.length,
    `${label}: repeated dialogue lines detected in C2 lessons 1–20`);
  for (const lesson of editorialLessons) {
    const examples = lesson.vocabulary.map(item => item.example.trim().toLowerCase());
    assert.equal(new Set(examples).size, examples.length,
      `${label} ${lesson.id}: repeated vocabulary examples detected in C2 lessons 1–30`);
    const translations = lesson.vocabulary.map(item => item.translation.trim().toLowerCase());
    assert.equal(new Set(translations).size, translations.length,
      `${label} ${lesson.id}: repeated vocabulary translations detected in C2 lessons 1–30`);
    if (Number(lesson.id.match(/l(\d+)$/u)?.[1]) <= 20) {
      for (const line of lesson.dialogue) {
        assert.ok(line.reading && /[\u0D80-\u0DFF]/u.test(line.reading),
          `${label} ${lesson.id}: missing Sinhala dialogue pronunciation`);
      }
    }
  }
}
validateC2EditorialContent("Serbian C2", courseLessons["Serbian C2"]);
validateC2EditorialContent("English C2", courseLessons["English C2"]);

function validateAdvancedVocabularyUniqueness(label, lessons) {
  assert.equal(lessons.length, 50, `${label}: expected exactly 50 lessons`);
  for (const lesson of lessons) {
    const examples = lesson.vocabulary.map(item => item.example.trim().toLowerCase());
    const translations = lesson.vocabulary.map(item => item.translation.trim().toLowerCase());
    assert.equal(new Set(examples).size, examples.length,
      `${label} ${lesson.id}: repeated vocabulary examples detected`);
    assert.equal(new Set(translations).size, translations.length,
      `${label} ${lesson.id}: repeated vocabulary translations detected`);
  }
}
for (const [label, lessons] of [
  ["Serbian C1", courseLessons["Serbian C1"]],
  ["English C1", courseLessons["English C1"]],
  ["Serbian C2", courseLessons["Serbian C2"]],
  ["English C2", courseLessons["English C2"]],
]) validateAdvancedVocabularyUniqueness(label, lessons);

function validatePairedTrack(level) {
  const serbian = courseLessons[`Serbian ${level}`];
  const english = courseLessons[`English ${level}`];
  assert.equal(serbian.length, 50, `${level}: expected 50 Serbian lessons`);
  assert.equal(english.length, 50, `${level}: expected 50 English lessons`);
  for (let index = 0; index < 50; index++) {
    const sr = serbian[index];
    const en = english[index];
    const lessonNumber = lesson => {
      const match = lesson.title.match(/(?:පාඩම|Lesson|Lekcija)\s*(\d+)/u);
      assert.ok(match, `${lesson.id}: title must include a lesson number`);
      return Number(match[1]);
    };
    assert.match(sr.id, /^sr-/u, `${level}: Serbian lesson IDs must be language-scoped`);
    assert.match(en.id, /^en-/u, `${level}: English lesson IDs must be language-scoped`);
    assert.equal(sr.id.replace(/^sr-/u, ""), en.id.replace(/^en-/u, ""),
      `${level}: paired lesson IDs differ at position ${index + 1}`);
    assert.equal(lessonNumber(sr), index + 1,
      `Serbian ${level}: lesson numbering is out of sequence at position ${index + 1}`);
    assert.equal(lessonNumber(en), index + 1,
      `English ${level}: lesson numbering is out of sequence at position ${index + 1}`);
    assert.equal(sr.vocabulary.length, en.vocabulary.length,
      `${level} lesson ${index + 1}: vocabulary counts differ`);
    assert.equal(sr.practice.length, en.practice.length,
      `${level} lesson ${index + 1}: practice counts differ`);
    assert.equal(Boolean(sr.listeningPractice), Boolean(en.listeningPractice),
      `${level} lesson ${index + 1}: listening coverage differs`);
    for (let item = 0; item < sr.vocabulary.length; item++) {
      assert.equal(sr.vocabulary[item].meaning, en.vocabulary[item].meaning,
        `${level} lesson ${index + 1}: Sinhala meaning differs for paired vocabulary #${item + 1}`);
    }
  }
}
for (const level of ["A2", "B1", "B2", "C1", "C2"]) validatePairedTrack(level);

// Whole-curriculum identity audit: lesson IDs must be unique across both languages
// and all six CEFR levels, not merely unique inside an individual file.
const allCourseLessons = [
  ...serbianLessons.SERBIAN_A1_LESSONS,
  ...englishLessons.ENGLISH_A1_LESSONS,
  ...Object.values(courseLessons).flat(),
];
assert.equal(allCourseLessons.length, 600,
  "Complete curriculum must contain exactly 600 lessons across two languages and six CEFR levels");
const allLessonIds = allCourseLessons.map(lesson => lesson.id);
assert.equal(new Set(allLessonIds).size, allLessonIds.length,
  "Lesson IDs must be globally unique across every language and CEFR level");
for (const lesson of allCourseLessons) {
  assert.ok(typeof lesson.id === "string" && /^(?:sr|en)-/u.test(lesson.id),
    `${lesson.id}: lesson ID must carry an explicit language prefix`);
}

console.log("Content QA passed.");
console.log({ checkedAppImports: checkedAppImports.size, serbianLessonStats, englishLessonStats, courseStats, serbianC1Stats, englishC1Stats });
