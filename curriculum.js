// BasaNova course roadmap. Lesson content is added level by level.
export const COURSE_LEVELS = [
  {
    id: "A1",
    title: "මූලික ආරම්භය",
    goal: "දෛනික අවශ්‍යතා සඳහා සරල වචන සහ වාක්‍ය භාවිතය",
    units: ["ආචාර කිරීම සහ හැඳින්වීම", "අංක, දින සහ වේලාව", "පවුල සහ පුද්ගලික තොරතුරු", "ආහාර සහ කැෆේ", "ගමන් සහ දිශා", "සාප්පු සහ මිල ගණන්", "වැඩබිමේ මූලික සංවාද", "නැවත පුහුණුව සහ A1 පරීක්ෂණය"]
  },
  {
    id: "A2",
    title: "මූලික මට්ටම පුළුල් කිරීම",
    goal: "පුරුදු වැඩ, අත්දැකීම් සහ සරල සැලසුම් ගැන කතා කිරීම",
    units: ["දෛනික වැඩ සහ පුරුදු", "නිවස සහ නවාතැන්", "සෞඛ්‍යය සහ හමුවීම්", "රැකියාව සහ වැඩ මුර", "අතීත සිදුවීම්", "අනාගත සැලසුම්", "කෙටි පණිවිඩ සහ ලිපි", "නැවත පුහුණුව සහ A2 පරීක්ෂණය"]
  },
  {
    id: "B1",
    title: "ස්වාධීන භාවිතය",
    goal: "හුරුපුරුදු මාතෘකා ගැන පැහැදිලිව කතා කර අදහස් දැක්වීම",
    units: ["අත්දැකීම් විස්තර කිරීම", "මතය සහ හේතු ඉදිරිපත් කිරීම", "කාර්යාල සහ සේවා සංවාද", "ගැටලු විසඳීම", "ප්‍රවෘත්ති සහ මාධ්‍ය", "සම්බන්ධක සහ වාක්‍ය රටා", "විස්තරාත්මක ලිවීම", "නැවත පුහුණුව සහ B1 පරීක්ෂණය"]
  },
  {
    id: "B2",
    title: "ඉහළ ස්වාධීන භාවිතය",
    goal: "සංකීර්ණ අදහස්, සාකච්ඡා සහ වෘත්තීය අවස්ථා හසුරුවීම",
    units: ["දිගු සාකච්ඡා සහ තර්ක", "වෘත්තීය සන්නිවේදනය", "සමාජ සහ සංස්කෘතික මාතෘකා", "සංකීර්ණ ව්‍යාකරණ", "වාද විවාද සහ ඉදිරිපත් කිරීම්", "ලිපි සහ වාර්තා", "ශ්‍රවණ අවබෝධය", "නැවත පුහුණුව සහ B2 පරීක්ෂණය"]
  },
  {
    id: "C1",
    title: "උසස් භාෂා හැකියාව",
    goal: "අධ්‍යාපනික හා වෘත්තීය සන්දර්භවල සුමට, නම්‍යශීලී භාවිතය",
    units: ["සූක්ෂ්ම අර්ථ සහ ශෛලීන්", "උසස් ලිපි සහ වාර්තා", "අධ්‍යාපනික සාකච්ඡා", "උපමා සහ ව්‍යවහාර", "දිගු ශ්‍රවණ සහ කියවීම්", "ඉදිරිපත් කිරීම් සහ ප්‍රතිචාර", "සංස්කරණය සහ නිවැරදි කිරීම", "නැවත පුහුණුව සහ C1 පරීක්ෂණය"]
  },
  {
    id: "C2",
    title: "ප්‍රවීණ මට්ටම",
    goal: "සියුම් වෙනස්කම් හඳුනාගෙන ඉතා නිරවද්‍යව හා ස්වභාවිකව සන්නිවේදනය",
    units: ["සංකීර්ණ හා වේගවත් කථනය", "අර්ථ සූක්ෂ්මතා සහ උපහාසය", "විශේෂිත වෘත්තීය භාෂාව", "උසස් සාහිත්‍ය කියවීම", "ශෛලීය ලිවීම", "ක්ෂණික ප්‍රතිචාර සහ සාකච්ඡා", "සම්පූර්ණ කුසලතා ඒකාබද්ධ කිරීම", "අවසාන C2 ඇගයීම"]
  }
];

// A1 lesson-content milestone. This is an internal project status, not a CEFR certification.
export const A1_COURSE_STATUS = {
  plannedLessons: 50,
  lessonSequenceAdded: true,
  finalListeningExams: { Serbian: 20, English: 20 },
  passThresholdPercent: 70,
  speakingAssessment: "guided self-practice; not automatically graded",
  remainingValidation: ["reading and writing assessment", "fluent-speaker review of Sinhala pronunciation", "CI and Android artifact verification", "physical-device testing"]
};

export const LESSON_METHOD = [
  "වචනය හෝ වාක්‍යය",
  "සිංහල උච්චාරණ මඟපෙන්වීම",
  "සිංහල තේරුම",
  "ස්වදේශීය භාෂා හඬ (උපාංගයේ හඬ සහාය අනුව)",
  "ව්‍යාකරණය සහ උදාහරණ",
  "ශ්‍රවණය, කථනය, කියවීම සහ ලිවීමේ පුහුණුව",
  "නැවත මතක් කිරීම සහ පාඩම් ප්‍රශ්න"
];


// B1 lesson-content milestone. All 50 paired lessons are authored; cumulative assessment and final validation remain.
export const B1_COURSE_STATUS = {
  plannedLessons: 50,
  authoredLessons: { Serbian: 50, English: 50 },
  pairedTopics: true,
  remainingLessons: 0,
  remainingValidation: ["fluent-speaker review of B1 final exam items and answer translations", "full B1 assessment content review", "fluent-speaker review of Sinhala pronunciation", "CI and Android device verification"]
};


// B2 paired lesson content milestone; this records authored lesson count, not CEFR certification.
export const B2_COURSE_STATUS = {
  plannedLessons: 50,
  authoredLessons: { Serbian: 50, English: 50 },
  pairedTopics: true,
  remainingLessons: 0,
  completedBatch: "lessons 1-50 in both languages",
  remainingValidation: ["editorial review of Serbian idiom, grammar and Sinhala pronunciation", "review English-to-Sinhala translations and example quality", "expand contextual dialogues and topic-specific vocabulary practice", "review B2 revision and final exam questions, listening answer alignment and distractors", "CI and Android device verification"]
};


// C1 paired lesson milestone. First ten lessons are authored in both languages.
export const C1_COURSE_STATUS = {
  plannedLessons: 50,
  authoredLessons: { Serbian: 10, English: 10 },
  pairedTopics: true,
  remainingLessons: 40,
  completedBatch: "lessons 1-10 in both languages",
  remainingValidation: ["fluent-speaker review of Serbian and English phrasing", "review Sinhala pronunciation and translations", "add lessons 11-50 and cumulative C1 assessments", "CI and Android device verification"]
};


export const C1_BATCH_11_20_STATUS = {
  completed: true,
  lessons: { Serbian: 20, English: 20 },
  pairedLessons: 20,
  totalAuthoredC1Records: 40,
  nextBatch: "C1 lessons 21–30",
  remainingC1Lessons: 30,
  remainingValidation: ["fluent Serbian and English review", "Sinhala pronunciation and translation review", "cumulative C1 revision and practice final assessment", "CI and Android device verification"]
};


// C1 paired lesson batch 21–30: authored for both language tracks.
export const C1_BATCH_21_30_STATUS = {
  completed: true,
  lessons: { Serbian: 30, English: 30 },
  pairedLessons: 30,
  totalAuthoredC1Records: 60,
  nextBatch: "C1 lessons 31–40",
  remainingC1Lessons: 20,
  remainingValidation: ["fluent Serbian and English review", "review approximate Sinhala-script readings and translations", "add cumulative C1 revision and practice final assessment", "CI and Android device verification"]
};


// C1 paired lesson batch 31–40: authored for both language tracks.
export const C1_BATCH_31_40_STATUS = {
  completed: true,
  lessons: { Serbian: 40, English: 40 },
  pairedLessons: 40,
  totalAuthoredC1Records: 80,
  nextBatch: "C1 lessons 41–50",
  remainingC1Lessons: 10,
  remainingValidation: ["fluent Serbian and English review", "review approximate Sinhala-script readings and translations", "add cumulative C1 revision and practice final assessment", "CI and Android device verification"]
};


// C1 paired lesson batch 41–50 completes the authored lesson sequence in both tracks.
export const C1_BATCH_41_50_STATUS = {
  completed: true,
  lessons: { Serbian: 50, English: 50 },
  pairedLessons: 50,
  totalAuthoredC1Records: 100,
  nextTask: "Cumulative C1 revision and scored practice final assessment for both languages",
  remainingC1Lessons: 0,
  remainingValidation: ["fluent Serbian and English editorial review", "review Sinhala translations and approximate pronunciation readings", "review final assessment answer alignment and distractors", "CI and Android device verification"]
};
