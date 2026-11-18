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
  remainingValidation: ["add cumulative B1 revision and scored listening/comprehension assessments", "cumulative B1 revision and assessment", "fluent-speaker review of Sinhala pronunciation", "CI and Android device verification"]
};
