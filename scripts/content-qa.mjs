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
  return /[\\u0D80-\\u0DFF]/u.test(value ?? "");
}

function hasForeignScript(value) {
  return /[A-Za-z\\u0400-\\u04FF]/u.test(value ?? "");
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

const a1 = await loadModule(files.a1);
validateQuestions("Serbian A1 final exam", a1.SERBIAN_A1_FINAL_EXAM, 20, { pronunciation: true });
validateQuestions("English A1 final exam", a1.ENGLISH_A1_FINAL_EXAM, 20, { pronunciation: true });

const c2 = await loadModule(files.c2);
validateQuestions("Serbian C2 mixed revision", c2.SERBIAN_C2_MIXED_REVISION, 10);
validateQuestions("English C2 mixed revision", c2.ENGLISH_C2_MIXED_REVISION, 10);
validateQuestions("Serbian C2 final exam", c2.SERBIAN_C2_FINAL_EXAM, 20, { pronunciation: true });
validateQuestions("English C2 final exam", c2.ENGLISH_C2_FINAL_EXAM, 20, { pronunciation: true });

console.log("Content QA passed: A1 and C2 assessment structure, unique choices, answer indexes and pronunciation fields.");
