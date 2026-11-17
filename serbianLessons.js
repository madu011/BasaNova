// Structured Serbian A1 lesson content. Sinhala explanations are the teaching language.
export const SERBIAN_A1_LESSONS = [
  {
    id: "sr-a1-u1-l1",
    unit: "ආචාර කිරීම සහ හැඳින්වීම",
    title: "පාඩම 1 · ආචාර කිරීම සහ තමන්ව හඳුන්වාදීම",
    objective: "සරලව ආචාර කිරීම, නම කියීම සහ කෙනෙකුගේ නම විමසීම",
    vocabulary: [
      { word: "Zdravo", meaning: "හෙලෝ / ආයුබෝවන්", example: "Zdravo, Ana!", translation: "හෙලෝ, ආනා!" },
      { word: "Dobar dan", meaning: "සුබ දවසක්", example: "Dobar dan!", translation: "සුබ දවසක්!" },
      { word: "Kako se zoveš?", meaning: "ඔයාගේ නම මොකක්ද?", example: "Kako se zoveš?", translation: "ඔයාගේ නම මොකක්ද?" },
      { word: "Zovem se Marko.", meaning: "මගේ නම මාර්කෝ.", example: "Zdravo, zovem se Marko.", translation: "හෙලෝ, මගේ නම මාර්කෝ." },
      { word: "Drago mi je.", meaning: "ඔයාව හමුවීම සතුටක්.", example: "Drago mi je, Ana.", translation: "ඔයාව හමුවීම සතුටක්, ආනා." },
      { word: "Kako si?", meaning: "ඔයාට කොහොමද?", example: "Zdravo! Kako si?", translation: "හෙලෝ! ඔයාට කොහොමද?" }
    ],
    grammarTitle: "ව්‍යාකරණය · Zovem se",
    grammar: "Serbian භාෂාවේ තමන්ගේ නම කියන්න “Zovem se + නම” භාවිතා කරනවා. කෙනෙකුගෙන් නම අහන්න “Kako se zoveš?” කියනවා. මෙහි “se” ක්‍රියාපදය සමඟ යෙදෙන කුඩා වචනයක්; මේ රටාව සම්පූර්ණ වාක්‍යයක් ලෙස මතක තබාගන්න.",
    examples: [
      { sr: "Zovem se Ana.", si: "මගේ නම ආනා." },
      { sr: "Zovem se Milan.", si: "මගේ නම මිලාන්." },
      { sr: "Kako se zoveš?", si: "ඔයාගේ නම මොකක්ද?" }
    ],
    dialogue: [
      { sr: "Zdravo! Kako se zoveš?", si: "හෙලෝ! ඔයාගේ නම මොකක්ද?" },
      { sr: "Zovem se Ana. A ti?", si: "මගේ නම ආනා. ඔයාට?" },
      { sr: "Zovem se Marko. Drago mi je.", si: "මගේ නම මාර්කෝ. ඔයාව හමුවීම සතුටක්." },
      { sr: "Drago mi je!", si: "මටත් සතුටුයි!" }
    ],
    practice: [
      { prompt: "“මගේ නම ආනා” කියන්න නිවැරදි වාක්‍යය කුමක්ද?", options: ["Kako si Ana?", "Zovem se Ana.", "Dobar dan Ana?"], answer: 1, explanation: "“Zovem se” යනු “මගේ නම ...” කියන රටාවයි." },
      { prompt: "“ඔයාගේ නම මොකක්ද?” කියන්නේ කොහොමද?", options: ["Kako se zoveš?", "Koliko košta?", "Gde je toalet?"], answer: 0, explanation: "“Kako se zoveš?” යනු අවිධිමත්/හිතවත් ආකාරයෙන් නම අසන ප්‍රශ්නයයි." },
      { prompt: "කෙනෙක් හමුවූ විට “ඔයාව හමුවීම සතුටක්” කියන්න?", options: ["Ne znam.", "Drago mi je.", "Laku noć."], answer: 1, explanation: "“Drago mi je” හමුවීමේදී භාවිත කරන ආචාර වාක්‍යයකි." }
    ]
  },
  {
    id: "sr-a1-u1-l2",
    unit: "ආචාර කිරීම සහ හැඳින්වීම",
    title: "පාඩම 2 · ආචාර සහ සරල ප්‍රතිචාර",
    objective: "උදෑසන, දිවා, සවස ආචාර සහ ස්තුති කිරීම භාවිතය",
    vocabulary: [
      { word: "Dobro jutro", meaning: "සුබ උදෑසනක්", example: "Dobro jutro, svima.", translation: "හැමෝටම සුබ උදෑසනක්." },
      { word: "Dobar dan", meaning: "සුබ දවසක්", example: "Dobar dan, gospodine.", translation: "සුබ දවසක් මහත්මයා." },
      { word: "Dobro veče", meaning: "සුබ සන්ධ්‍යාවක්", example: "Dobro veče, Ana.", translation: "සුබ සන්ධ්‍යාවක්, ආනා." },
      { word: "Laku noć", meaning: "සුබ රාත්‍රියක්", example: "Laku noć!", translation: "සුබ රාත්‍රියක්!" },
      { word: "Hvala", meaning: "ස්තුතියි", example: "Hvala puno.", translation: "බොහොම ස්තුතියි." },
      { word: "Molim", meaning: "කරුණාකර / ඔබට සාදරයෙන්", example: "Molim vas.", translation: "කරුණාකර." },
      { word: "Doviđenja", meaning: "ගිහින් එන්නම් / නැවත හමුවෙමු (විධිමත්)", example: "Doviđenja i hvala.", translation: "නැවත හමුවෙමු, ස්තුතියි." }
    ],
    grammarTitle: "භාෂා භාවිතය · විධිමත් සහ හිතවත් ආචාර",
    grammar: "“Zdravo” සාමාන්‍ය හිතවත් ආචාරයකි. “Dobar dan” වැඩබිමක, කඩයක හෝ නොහඳුනන කෙනෙකුටත් සුදුසුය. “Doviđenja” යනු සමුගැනීමේ විධිමත් වචනයකි. “Hvala” ස්තුතියි කියන අතර “Molim” සන්දර්භය අනුව කරුණාකර හෝ ඔබට සාදරයෙන් යන අර්ථ දෙකම ලබාගනී.",
    examples: [
      { sr: "Dobro jutro! Kako ste?", si: "සුබ උදෑසනක්! ඔබට කොහොමද?" },
      { sr: "Hvala puno.", si: "බොහොම ස්තුතියි." },
      { sr: "Doviđenja, prijatan dan!", si: "නැවත හමුවෙමු, සුබ දවසක්!" }
    ],
    dialogue: [
      { sr: "Dobar dan!", si: "සුබ දවසක්!" },
      { sr: "Dobar dan. Kako ste?", si: "සුබ දවසක්. ඔබට කොහොමද?" },
      { sr: "Dobro sam, hvala.", si: "මම හොඳින්, ස්තුතියි." },
      { sr: "Doviđenja!", si: "නැවත හමුවෙමු!" }
    ],
    practice: [
      { prompt: "උදෑසන කෙනෙකුට කියන ආචාරය කුමක්ද?", options: ["Laku noć", "Dobro jutro", "Doviđenja"], answer: 1, explanation: "“Dobro jutro” යනු සුබ උදෑසනක්." },
      { prompt: "“ස්තුතියි” යන අර්ථය ඇති වචනය?", options: ["Hvala", "Molim", "Zdravo"], answer: 0, explanation: "“Hvala” යනු ස්තුතියි." },
      { prompt: "සමුගැනීමේ විධිමත් වචනය කුමක්ද?", options: ["Dobar dan", "Doviđenja", "Kako si?"], answer: 1, explanation: "“Doviđenja” යනු නැවත හමුවෙමු / සමුගැනීම." }
    ]
  },
  {
  "id": "sr-a1-u2-l1",
  "unit": "ආහාර සහ සාප්පු සවාරි",
  "title": "පාඩම 3 · කැෆේ එකකින් ඇණවුම් කිරීම",
  "objective": "කැෆේ එකකින් ආහාර හෝ පානයක් ඉල්ලීම, මිල විමසීම සහ බිල ඉල්ලීම.",
  "vocabulary": [
    {
      "word": "Želim kafu.",
      "meaning": "මට කෝපි එකක් ඕනේ.",
      "example": "Dobar dan, želim kafu.",
      "translation": "සුබ දවසක්, මට කෝපි එකක් ඕනේ."
    },
    {
      "word": "Vodu, molim.",
      "meaning": "වතුර එකක්, කරුණාකර.",
      "example": "Vodu, molim.",
      "translation": "වතුර එකක්, කරුණාකර."
    },
    {
      "word": "Jelovnik",
      "meaning": "ආහාර මෙනුව",
      "example": "Mogu li da dobijem jelovnik?",
      "translation": "මට ආහාර මෙනුව ලබාගන්න පුළුවන්ද?"
    },
    {
      "word": "Koliko košta?",
      "meaning": "කීයද? / මිල කීයද?",
      "example": "Koliko košta kafa?",
      "translation": "කෝපි එකක මිල කීයද?"
    },
    {
      "word": "Račun, molim.",
      "meaning": "බිල දෙන්න, කරුණාකර.",
      "example": "Račun, molim.",
      "translation": "බිල දෙන්න, කරුණාකර."
    },
    {
      "word": "Još nešto?",
      "meaning": "තව මොනවාහරිද?",
      "example": "Želite li još nešto?",
      "translation": "ඔබට තව මොනවාහරි අවශ්‍යද?"
    },
    {
      "word": "Bez šećera",
      "meaning": "සීනි නැතුව",
      "example": "Kafu bez šećera, molim.",
      "translation": "සීනි නැති කෝපි එකක්, කරුණාකර."
    },
    {
      "word": "Ukusno",
      "meaning": "රසවත්",
      "example": "Hrana je veoma ukusna.",
      "translation": "කෑම ඉතා රසවත්."
    }
  ],
  "grammarTitle": "ව්‍යාකරණය · Želim + නාම පදය",
  "grammar": "“Želim” යනු “මට අවශ්‍යයි / මට ඕනේ” යන අර්ථයයි. ඉල්ලීමක් කිරීමට “Želim kafu” වැනි සරල රටාවක් භාවිත කළ හැක. වඩාත් ආචාරශීලීව ඉල්ලීමට “molim” එකතු කරන්න. “Koliko košta?” යනු මිල අසන ප්‍රශ්නයයි. භාණ්ඩය අනුව Serbian නාම පදයේ අවසානය වෙනස් විය හැකි නිසා, මේ පාඩමේ වාක්‍ය රටා සම්පූර්ණයෙන් මතක තබාගන්න.",
  "examples": [
    {
      "sr": "Želim čaj, molim.",
      "si": "මට තේ එකක් ඕනේ, කරුණාකර."
    },
    {
      "sr": "Koliko košta sendvič?",
      "si": "සැන්ඩ්විච් එකක මිල කීයද?"
    },
    {
      "sr": "Račun, molim.",
      "si": "බිල දෙන්න, කරුණාකර."
    }
  ],
  "dialogue": [
    {
      "sr": "Dobar dan! Šta želite?",
      "si": "සුබ දවසක්! ඔබට මොනවාද අවශ්‍ය?"
    },
    {
      "sr": "Želim kafu i vodu, molim.",
      "si": "මට කෝපි එකක් සහ වතුර එකක් ඕනේ, කරුණාකර."
    },
    {
      "sr": "Želite li još nešto?",
      "si": "ඔබට තව මොනවාහරි අවශ්‍යද?"
    },
    {
      "sr": "Ne, hvala. Koliko košta?",
      "si": "නැහැ, ස්තුතියි. මිල කීයද?"
    },
    {
      "sr": "Trista dinara.",
      "si": "ඩිනාර් තුන්සියයයි."
    },
    {
      "sr": "Izvolite. Račun, molim.",
      "si": "මෙන්න. බිල දෙන්න, කරුණාකර."
    }
  ],
  "practice": [
    {
      "prompt": "“මට කෝපි එකක් ඕනේ” කියන්නේ කුමක්ද?",
      "options": [
        "Želim kafu.",
        "Račun, molim.",
        "Koliko košta?"
      ],
      "answer": 0,
      "explanation": "“Želim” යනු මට අවශ්‍යයි; “kafu” යනු කෝපි."
    },
    {
      "prompt": "මිල අසන්න නිවැරදි ප්‍රශ්නය තෝරන්න.",
      "options": [
        "Još nešto?",
        "Koliko košta?",
        "Dobar dan."
      ],
      "answer": 1,
      "explanation": "“Koliko košta?” යනු “කීයද?” යන ප්‍රශ්නයයි."
    },
    {
      "prompt": "කැෆේ එකක බිල ඉල්ලන්නේ කොහොමද?",
      "options": [
        "Bez šećera.",
        "Ukusno.",
        "Račun, molim."
      ],
      "answer": 2,
      "explanation": "“Račun, molim” යනු “බිල දෙන්න, කරුණාකර” යන්නයි."
    }
  ]
}
];
