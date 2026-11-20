// Keep Serbian assessment headwords aligned with the Serbian course vocabulary.
// Some legacy questions used English prompts while their answer meanings and lesson
// examples were Serbian. Resolve each headword through the Sinhala answer meaning.
function normalizeMeaning(value) {
  return String(value || "").toLocaleLowerCase().replace(/[\s.,!?;:()"'“”]/gu, "");
}

function meaningVariants(value) {
  return String(value || "").split(/[\/;,]/u).map(part => normalizeMeaning(part)).filter(Boolean);
}

export function alignSerbianAssessmentWords(questions, lessons) {
  const vocabulary = (lessons || []).flatMap(lesson => lesson.vocabulary || []);
  for (const question of questions || []) {
    if (!question.word) continue;
    const answer = normalizeMeaning(question.options?.[question.answer]);
    if (!answer) continue;
    const exact = vocabulary.find(item => meaningVariants(item.meaning).includes(answer));
    const partial = exact || vocabulary.find(item =>
      meaningVariants(item.meaning).some(variant =>
        variant.length >= 4 && (variant.includes(answer) || answer.includes(variant))
      )
    );
    if (partial) {
      question.word = partial.word;
      question.wordReading = partial.reading;
    }
  }
  return questions;
}
