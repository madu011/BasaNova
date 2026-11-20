import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

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
  return /[A-Za-zА-Яа-яЁё]/u.test(value ?? "");
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
      assert.ok(!/[A-Za-zА-Яа-яЁё]/u.test(item.reading), `${name} vocabulary ${i + 1}: mixed-script pronunciation`);
    }
    for (const [i, example] of lesson.examples.entries()) {
      assert.ok((example.sr ?? example.text)?.trim(), `${name} example ${i + 1}: missing source sentence`);
      assert.ok((example.si ?? example.meaning)?.trim(), `${name} example ${i + 1}: missing Sinhala meaning`);
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
        assert.ok(!/[A-Za-zА-Яа-яЁё]/u.test(reading), `${name}: listening pronunciation contains mixed scripts`);
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
    const match = lesson.title.match(/(?:පාඩම|Lesson)\s*(\d+)/u);
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
const relativeNamedImports = [...appSource.matchAll(/import\s*\{([\s\S]*?)\}\s*from\s*["']\.\/([^"']+)["']/gu)];
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

const serbianLessonStats = validateLessonTrack("Serbian A1", serbianLessons.SERBIAN_A1_LESSONS);
const englishLessonStats = validateLessonTrack("English A1", englishLessons.ENGLISH_A1_LESSONS);
validateLessonNumbering("Serbian A1", serbianLessons.SERBIAN_A1_LESSONS);
validateLessonNumbering("English A1", englishLessons.ENGLISH_A1_LESSONS);
assert.equal(serbianLessonStats.lessons, englishLessonStats.lessons, "Serbian and English A1 lesson counts must match");

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
for (const [label, files, names] of pairedLevels) {
  const result = await loadPairedTrack(label, files, names);
  courseStats[label] = result.stats;
}
for (const level of ["A2", "B1", "B2", "C2"]) {
  const sr = courseStats[`Serbian ${level}`];
  const en = courseStats[`English ${level}`];
  assert.equal(sr.lessons, en.lessons, `${level}: Serbian and English lesson counts differ`);
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



const a2Assessments = await import(new URL("../a2FinalExams.js", import.meta.url));
const serbianA2Lessons = await loadModule("serbianA2Lessons.js");
const englishA2Lessons = await loadModule("englishA2Lessons.js");
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
validateQuestions("Serbian B1 mixed revision", b1Assessments.SERBIAN_B1_MIXED_REVISION, 10);
validateQuestions("English B1 mixed revision", b1Assessments.ENGLISH_B1_MIXED_REVISION, 10);
validateQuestions("Serbian B1 final exam", b1Assessments.SERBIAN_B1_FINAL_EXAM, 20);
validateQuestions("English B1 final exam", b1Assessments.ENGLISH_B1_FINAL_EXAM, 20);

const b2Assessments = await loadModule("b2FinalExams.js");
validateQuestions("Serbian B2 mixed revision", b2Assessments.SERBIAN_B2_MIXED_REVISION, 10);
validateQuestions("English B2 mixed revision", b2Assessments.ENGLISH_B2_MIXED_REVISION, 10);
validateQuestions("Serbian B2 final exam", b2Assessments.SERBIAN_B2_FINAL_EXAM, 20);
validateQuestions("English B2 final exam", b2Assessments.ENGLISH_B2_FINAL_EXAM, 20);

const c2 = await loadModule(files.c2);
validateQuestions("Serbian C2 mixed revision", c2.SERBIAN_C2_MIXED_REVISION, 10);
validateQuestions("English C2 mixed revision", c2.ENGLISH_C2_MIXED_REVISION, 10);
validateQuestions("Serbian C2 final exam", c2.SERBIAN_C2_FINAL_EXAM, 20, { pronunciation: true });
validateQuestions("English C2 final exam", c2.ENGLISH_C2_FINAL_EXAM, 20, { pronunciation: true });

console.log("Content QA passed.");
console.log({ checkedAppImports: checkedAppImports.size, serbianLessonStats, englishLessonStats, courseStats, serbianC1Stats, englishC1Stats });
