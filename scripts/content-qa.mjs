import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

const files = {
  a1: "a1FinalExams.js",
  c2: "c2FinalExams.js",
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
      }
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
      assert.ok(Array.isArray(q.options) && q.options.length >= 2, `${name}: missing listening options`);
      assert.equal(new Set(q.options).size, q.options.length, `${name}: duplicate listening options`);
      assert.ok(Number.isInteger(q.answer) && q.answer >= 0 && q.answer < q.options.length, `${name}: invalid listening answer index`);
    }
  }
  return { lessons: lessons.length, vocabularyCount, practiceCount, listeningCount };
}

const serbianLessons = await loadModule(lessonFiles.serbian);
const englishLessons = await loadModule(lessonFiles.english);
const serbianLessonStats = validateLessonTrack("Serbian A1", serbianLessons.SERBIAN_A1_LESSONS);
const englishLessonStats = validateLessonTrack("English A1", englishLessons.ENGLISH_A1_LESSONS);
assert.equal(serbianLessonStats.lessons, englishLessonStats.lessons, "Serbian and English A1 lesson counts must match");

const a1 = await loadModule(files.a1);
validateQuestions("Serbian A1 final exam", a1.SERBIAN_A1_FINAL_EXAM, 20, { pronunciation: true });
validateQuestions("English A1 final exam", a1.ENGLISH_A1_FINAL_EXAM, 20, { pronunciation: true });

const c2 = await loadModule(files.c2);
validateQuestions("Serbian C2 mixed revision", c2.SERBIAN_C2_MIXED_REVISION, 10);
validateQuestions("English C2 mixed revision", c2.ENGLISH_C2_MIXED_REVISION, 10);
validateQuestions("Serbian C2 final exam", c2.SERBIAN_C2_FINAL_EXAM, 20, { pronunciation: true });
validateQuestions("English C2 final exam", c2.ENGLISH_C2_FINAL_EXAM, 20, { pronunciation: true });

console.log("Content QA passed.");
console.log({ serbianLessonStats, englishLessonStats });
