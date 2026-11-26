// Paired A2 revision and final assessments, built from the authored A2 lesson vocabulary
// and listening tasks so exam content stays aligned with the course rather than duplicating lessons.
function collectVocabulary(lessons) {
  const seen = new Set();
  return lessons.flatMap(lesson => lesson.vocabulary || []).filter(item => {
    const key = String(item.word || "").trim().toLocaleLowerCase();
    if (!key || seen.has(key) || !item.meaning || !item.reading) return false;
    seen.add(key);
    return true;
  });
}

function makeVocabularyQuestion(item, pool, id, index) {
  const distractors = [];
  for (let step = 1; step < pool.length && distractors.length < 2; step++) {
    const candidate = pool[(index * 7 + step * 11) % pool.length];
    if (candidate.word.toLocaleLowerCase() !== item.word.toLocaleLowerCase()
      && candidate.meaning !== item.meaning
      && !distractors.includes(candidate.meaning)) distractors.push(candidate.meaning);
  }
  const answer = index % 3;
  const options = [...distractors];
  options.splice(answer, 0, item.meaning);
  return {
    id,
    type: "vocabulary",
    prompt: "මෙම වචනයේ නිවැරදි සිංහල තේරුම තෝරන්න.",
    word: item.word,
    meaning: item.meaning,
    wordReading: item.reading,
    options,
    answer,
    explanation: item.word + " = " + item.meaning
  };
}

function makeListeningQuestion(lesson, id) {
  const task = lesson.listeningPractice;
  return {
    id,
    type: "listening",
    prompt: task.prompt,
    audio: task.audio,
    reading: task.reading,
    options: [...task.options],
    answer: task.answer,
    explanation: "නිවැරදි පිළිතුර: " + task.options[task.answer]
  };
}

function buildAssessment(lessons, count, prefix) {
  const vocabulary = collectVocabulary(lessons);
  const listeningLessons = lessons.filter(lesson =>
    lesson.listeningPractice?.audio && lesson.listeningPractice?.reading
    && lesson.listeningPractice.options?.length >= 3
    && Number.isInteger(lesson.listeningPractice.answer)
  );
  const listeningCount = count === 20 ? 6 : 3;
  const vocabularyCount = count - listeningCount;
  const selected = [];
  for (let i = 0; i < vocabularyCount; i++) {
    const item = vocabulary[(i * 13 + (count === 20 ? 5 : 2)) % vocabulary.length];
    selected.push(makeVocabularyQuestion(item, vocabulary, prefix + "-v" + (i + 1), i));
  }
  for (let i = 0; i < listeningCount; i++) {
    const lesson = listeningLessons[(i * 7 + (count === 20 ? 3 : 1)) % listeningLessons.length];
    selected.push(makeListeningQuestion(lesson, prefix + "-l" + (i + 1)));
  }
  return selected;
}

export function buildA2Assessments(serbianLessons, englishLessons) {
  return {
    SERBIAN_A2_MIXED_REVISION: buildAssessment(serbianLessons, 10, "a2-sr-revision"),
    ENGLISH_A2_MIXED_REVISION: buildAssessment(englishLessons, 10, "a2-en-revision"),
    SERBIAN_A2_FINAL_EXAM: buildAssessment(serbianLessons, 20, "a2-sr-final"),
    ENGLISH_A2_FINAL_EXAM: buildAssessment(englishLessons, 20, "a2-en-final")
  };
}
