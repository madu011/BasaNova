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
    grammarTerms: [{ sr: "Zovem se", si: "මගේ නම ...", reading: "සොවෙම් සේ" }, { sr: "Kako se zoveš?", si: "ඔයාගේ නම මොකක්ද?", reading: "කාකො සේ සොවෙෂ්" }, { sr: "se", si: "ක්‍රියාපදය සමඟ යෙදෙන කුඩා පදය", reading: "සේ" }, { sr: "Zovem se + ime", si: "මගේ නම ...", reading: "සොවෙම් සේ + ඉමේ" }, { sr: "Drago mi je.", si: "ඔයාව හමුවීම සතුටක්.", reading: "ද්‍රාගො මි යේ" }],
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
    grammarTerms: [{ sr: "Zdravo", si: "හෙලෝ / ආයුබෝවන්", reading: "ස්ද්‍රාවො" }, { sr: "Dobar dan", si: "සුබ දවසක්", reading: "දොබාර් දාන්" }, { sr: "Doviđenja", si: "නැවත හමුවෙමු", reading: "දොවිජෙන්‍යා" }, { sr: "Hvala", si: "ස්තුතියි", reading: "හ්වාලා" }, { sr: "Molim", si: "කරුණාකර / ඔබට සාදරයෙන්", reading: "මොලීම්" }, { sr: "Dobro sam, hvala.", si: "මම හොඳින්, ස්තුතියි.", reading: "දොබ්‍රො සාම්, හ්වාලා" }, { sr: "Kako ste?", si: "ඔබට කොහොමද?", reading: "කාකො ස්තෙ?" }, { sr: "Dobro jutro", si: "සුබ උදෑසනක්", reading: "දොබ්‍රො යුත්‍රො" }, { sr: "Laku noć", si: "සුබ රාත්‍රියක්", reading: "ලාකු නොච්" }],
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
  "grammarTerms": [{ "sr": "Želim", "si": "මට අවශ්‍යයි", "reading": "ෂෙලිම්" }, { "sr": "Želim kafu", "si": "මට කෝපි එකක් අවශ්‍යයි", "reading": "ෂෙලිම් කාෆු" }, { "sr": "Koliko košta?", "si": "කීයද?", "reading": "කොලිකො කොෂ්තා" }, { "sr": "molim", "si": "කරුණාකර", "reading": "මොලීම්" }, { "sr": "Želim čaj", "si": "මට තේ අවශ්‍යයි", "reading": "ෂෙලිම් චායි" }, { "sr": "Račun, molim", "si": "බිල දෙන්න, කරුණාකර", "reading": "රාචුන්, මොලීම්" }],
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
},
  {
  "id": "sr-a1-u1-l4",
  "unit": "අංක සහ ගණන් කිරීම",
  "title": "පාඩම 4 · අංක 0 සිට මිලියන 100 දක්වා",
  "objective": "0–20, දහයේ ගුණාකාර, සියය, දහස, දසදහස්, ලක්ෂ සහ මිලියන දක්වා මූලික අංක රටා හඳුනාගෙන මිල හා ප්‍රමාණ කියන්න. මෙහි දැක්වෙන්නේ ප්‍රධාන උදාහරණ මිස සෑම අංකයක්ම නොවේ.",
  "vocabulary": [
    {
      "word": "Nula",
      "meaning": "බිංදුව",
      "example": "Broj nula.",
      "translation": "අංකය: බිංදුව."
    },
    {
      "word": "Jedan",
      "meaning": "එක",
      "example": "Broj jedan.",
      "translation": "අංකය: එක."
    },
    {
      "word": "Dva",
      "meaning": "දෙක",
      "example": "Broj dva.",
      "translation": "අංකය: දෙක."
    },
    {
      "word": "Tri",
      "meaning": "තුන",
      "example": "Broj tri.",
      "translation": "අංකය: තුන."
    },
    {
      "word": "Četiri",
      "meaning": "හතර",
      "example": "Broj četiri.",
      "translation": "අංකය: හතර."
    },
    {
      "word": "Pet",
      "meaning": "පහ",
      "example": "Broj pet.",
      "translation": "අංකය: පහ."
    },
    {
      "word": "Šest",
      "meaning": "හය",
      "example": "Broj šest.",
      "translation": "අංකය: හය."
    },
    {
      "word": "Sedam",
      "meaning": "හත",
      "example": "Broj sedam.",
      "translation": "අංකය: හත."
    },
    {
      "word": "Osam",
      "meaning": "අට",
      "example": "Broj osam.",
      "translation": "අංකය: අට."
    },
    {
      "word": "Devet",
      "meaning": "නවය",
      "example": "Broj devet.",
      "translation": "අංකය: නවය."
    },
    {
      "word": "Deset",
      "meaning": "දහය",
      "example": "Broj deset.",
      "translation": "අංකය: දහය."
    },
    {
      "word": "Jedanaest",
      "meaning": "එකොළහ",
      "example": "Broj jedanaest.",
      "translation": "අංකය: එකොළහ."
    },
    {
      "word": "Dvanaest",
      "meaning": "දොළහ",
      "example": "Broj dvanaest.",
      "translation": "අංකය: දොළහ."
    },
    {
      "word": "Trinaest",
      "meaning": "දහතුන",
      "example": "Broj trinaest.",
      "translation": "අංකය: දහතුන."
    },
    {
      "word": "Četrnaest",
      "meaning": "දාහතර",
      "example": "Broj četrnaest.",
      "translation": "අංකය: දාහතර."
    },
    {
      "word": "Petnaest",
      "meaning": "පහළොව",
      "example": "Broj petnaest.",
      "translation": "අංකය: පහළොව."
    },
    {
      "word": "Šesnaest",
      "meaning": "දහසය",
      "example": "Broj šesnaest.",
      "translation": "අංකය: දහසය."
    },
    {
      "word": "Sedamnaest",
      "meaning": "දාහත",
      "example": "Broj sedamnaest.",
      "translation": "අංකය: දාහත."
    },
    {
      "word": "Osamnaest",
      "meaning": "දහඅට",
      "example": "Broj osamnaest.",
      "translation": "අංකය: දහඅට."
    },
    {
      "word": "Devetnaest",
      "meaning": "දහනවය",
      "example": "Broj devetnaest.",
      "translation": "අංකය: දහනවය."
    },
    {
      "word": "Dvadeset",
      "meaning": "විස්ස",
      "example": "Broj dvadeset.",
      "translation": "අංකය: විස්ස."
    },
    {
      "word": "Trideset",
      "meaning": "තිහ",
      "example": "Broj trideset.",
      "translation": "අංකය: තිහ."
    },
    {
      "word": "Četrdeset",
      "meaning": "හතළිහ",
      "example": "Broj četrdeset.",
      "translation": "අංකය: හතළිහ."
    },
    {
      "word": "Pedeset",
      "meaning": "පනහ",
      "example": "Broj pedeset.",
      "translation": "අංකය: පනහ."
    },
    {
      "word": "Šezdeset",
      "meaning": "හැට",
      "example": "Broj šezdeset.",
      "translation": "අංකය: හැට."
    },
    {
      "word": "Sedamdeset",
      "meaning": "හැත්තෑව",
      "example": "Broj sedamdeset.",
      "translation": "අංකය: හැත්තෑව."
    },
    {
      "word": "Osamdeset",
      "meaning": "අසූව",
      "example": "Broj osamdeset.",
      "translation": "අංකය: අසූව."
    },
    {
      "word": "Devedeset",
      "meaning": "අනූව",
      "example": "Broj devedeset.",
      "translation": "අංකය: අනූව."
    },
    {
      "word": "Sto",
      "meaning": "සියය",
      "example": "Broj sto.",
      "translation": "අංකය: සියය."
    },
    {
      "word": "Dvesta",
      "meaning": "දෙසියය",
      "example": "Broj dvesta.",
      "translation": "අංකය: දෙසියය."
    },
    {
      "word": "Trista",
      "meaning": "තුන්සියය",
      "example": "Broj trista.",
      "translation": "අංකය: තුන්සියය."
    },
    {
      "word": "Četiristo",
      "meaning": "හාරසියය",
      "example": "Broj četiristo.",
      "translation": "අංකය: හාරසියය."
    },
    {
      "word": "Petsto",
      "meaning": "පන්සියය",
      "example": "Broj petsto.",
      "translation": "අංකය: පන්සියය."
    },
    {
      "word": "Šeststo",
      "meaning": "හයසියය",
      "example": "Broj šeststo.",
      "translation": "අංකය: හයසියය."
    },
    {
      "word": "Sedamsto",
      "meaning": "හත්සියය",
      "example": "Broj sedamsto.",
      "translation": "අංකය: හත්සියය."
    },
    {
      "word": "Osamsto",
      "meaning": "අටසියය",
      "example": "Broj osamsto.",
      "translation": "අංකය: අටසියය."
    },
    {
      "word": "Devetsto",
      "meaning": "නවසියය",
      "example": "Broj devetsto.",
      "translation": "අංකය: නවසියය."
    },
    {
      "word": "Hiljadu",
      "meaning": "දහස",
      "example": "Broj hiljadu.",
      "translation": "අංකය: දහස."
    },
    {
      "word": "Deset hiljada",
      "meaning": "දසදහස (10,000)",
      "example": "Deset hiljada dinara.",
      "translation": "ඩිනාර් දසදහසක්."
    },
    {
      "word": "Pedeset hiljada",
      "meaning": "පනස්දහස (50,000)",
      "example": "Pedeset hiljada dinara.",
      "translation": "ඩිනාර් පනස්දහසක්."
    },
    {
      "word": "Sto hiljada",
      "meaning": "ලක්ෂය (100,000)",
      "example": "Sto hiljada dinara.",
      "translation": "ඩිනාර් ලක්ෂයක්."
    },
    {
      "word": "Dvesta hiljada",
      "meaning": "දෙලක්ෂය (200,000)",
      "example": "Dvesta hiljada dinara.",
      "translation": "ඩිනාර් දෙලක්ෂයක්."
    },
    {
      "word": "Petsto hiljada",
      "meaning": "පන්ලක්ෂය (500,000)",
      "example": "Petsto hiljada dinara.",
      "translation": "ඩිනාර් පන්ලක්ෂයක්."
    },
    {
      "word": "Milion",
      "meaning": "මිලියනය (1,000,000)",
      "example": "Jedan milion dinara.",
      "translation": "ඩිනාර් මිලියනයක්."
    },
    {
      "word": "Dva miliona",
      "meaning": "මිලියන දෙක (2,000,000)",
      "example": "Dva miliona dinara.",
      "translation": "ඩිනාර් මිලියන දෙකක්."
    },
    {
      "word": "Pet miliona",
      "meaning": "මිලියන පහ (5,000,000)",
      "example": "Pet miliona dinara.",
      "translation": "ඩිනාර් මිලියන පහක්."
    },
    {
      "word": "Deset miliona",
      "meaning": "මිලියන දහය (10,000,000)",
      "example": "Deset miliona dinara.",
      "translation": "ඩිනාර් මිලියන දහයක්."
    },
    {
      "word": "Sto miliona",
      "meaning": "මිලියන සියය (100,000,000)",
      "example": "Sto miliona dinara.",
      "translation": "ඩිනාර් මිලියන සියයක්."
    }
  ],
  "grammarTerms": [{ "sr": "dvadeset jedan", "si": "විසි එක", "reading": "ද්වාදෙසෙත් යෙදාන්" }, { "sr": "dvadeset dva", "si": "විසි දෙක", "reading": "ද්වාදෙසෙත් ද්වා" }, { "sr": "trideset pet", "si": "තිස් පහ", "reading": "ත්‍රිදෙසෙත් පෙත්" }, { "sr": "sto", "si": "සියය", "reading": "ස්තො" }, { "sr": "hiljadu", "si": "දහස", "reading": "හිල්‍යාදු" }, { "sr": "deset hiljada", "si": "දසදහස (10,000)", "reading": "දෙසෙත් හිල්‍යාදා" }, { "sr": "pedeset hiljada", "si": "පනස්දහස (50,000)", "reading": "පෙදෙසෙත් හිල්‍යාදා" }, { "sr": "sto hiljada", "si": "ලක්ෂය (100,000)", "reading": "ස්තො හිල්‍යාදා" }, { "sr": "petsto hiljada", "si": "පන්ලක්ෂය (500,000)", "reading": "පෙත්ස්තො හිල්‍යාදා" }, { "sr": "dvesta hiljada", "si": "දෙලක්ෂය (200,000)", "reading": "ද්වෙස්තා හිල්‍යාදා" }, { "sr": "milion", "si": "මිලියනය (1,000,000)", "reading": "මිලියොන්" }, { "sr": "jedan milion", "si": "මිලියනයක්", "reading": "යෙදාන් මිලියොන්" }, { "sr": "dva miliona", "si": "මිලියන දෙක (2,000,000)", "reading": "ද්වා මිලියොනා" }, { "sr": "pet miliona", "si": "මිලියන පහ (5,000,000)", "reading": "පෙත් මිලියොනා" }, { "sr": "deset miliona", "si": "මිලියන දහය (10,000,000)", "reading": "දෙසෙත් මිලියොනා" }, { "sr": "sto miliona", "si": "මිලියන සියය (100,000,000)", "reading": "ස්තො මිලියොනා" }, { "sr": "jedan / jedna / jedno", "si": "එක — නාම පදයේ ලිංගය අනුව වෙනස් වේ", "reading": "යෙදාන් / යෙද්නා / යෙද්නො" }, { "sr": "dva / dve", "si": "දෙක — නාම පදයේ ලිංගය අනුව වෙනස් වේ", "reading": "ද්වා / ද්වේ" }],
  "grammarTitle": "අංක රටාව · 21 සිට මිලියනය දක්වා",
  "grammar": "Serbian භාෂාවේ 21 = dvadeset jedan (20 + 1), 22 = dvadeset dva (20 + 2), 35 = trideset pet (30 + 5). 100 = sto, 1,000 = hiljadu. 10,000 කියන්නේ deset hiljada, 50,000 කියන්නේ pedeset hiljada, 100,000 කියන්නේ sto hiljada (සියයක් × දහස), 200,000 කියන්නේ dvesta hiljada, 500,000 කියන්නේ petsto hiljada, 1,000,000 කියන්නේ milion හෝ jedan milion. 2,000,000 = dva miliona, 5,000,000 = pet miliona, 10,000,000 = deset miliona, 100,000,000 = sto miliona. එක මිලියනයකට 'milion' කියන අතර 2 හෝ ඊට වැඩි ගණනක් සඳහා මේ උදාහරණවල 'miliona' යන බහුවචන/විභක්ති රූපය භාවිත වෙනවා. 'Hiljada' යනු දහස සඳහා භාවිත වන ස්ත්‍රී ලිංග නාම පදයයි; එයට පෙර sto/dvesta වැනි අංක යෙදේ. මිලියනය සඳහා 'milion' කියන වචනය භාවිත වෙනවා.",
  "examples": [
    {
      "sr": "Jedan, dva, tri, četiri, pet.",
      "si": "එක, දෙක, තුන, හතර, පහ."
    },
    {
      "sr": "Dvadeset jedan, dvadeset dva, dvadeset tri.",
      "si": "විසි එක, විසි දෙක, විසි තුන."
    },
    {
      "sr": "Trideset pet dinara.",
      "si": "ඩිනාර් තිස් පහයි."
    },
    {
      "sr": "Sto dinara.",
      "si": "ඩිනාර් සියයයි."
    },
    {
      "sr": "Hiljadu dinara.",
      "si": "ඩිනාර් දහසයි."
    },
    {
      "sr": "Deset hiljada dinara.",
      "si": "ඩිනාර් දසදහසක්."
    },
    {
      "sr": "Pedeset hiljada dinara.",
      "si": "ඩිනාර් පනස්දහසක්."
    },
    {
      "sr": "Sto hiljada dinara.",
      "si": "ඩිනාර් ලක්ෂයක්."
    },
    {
      "sr": "Dvesta hiljada dinara.",
      "si": "ඩිනාර් දෙලක්ෂයක්."
    },
    {
      "sr": "Petsto hiljada dinara.",
      "si": "ඩිනාර් පන්ලක්ෂයක්."
    },
    {
      "sr": "Jedan milion dinara.",
      "si": "ඩිනාර් මිලියනයක්."
    },
    {
      "sr": "Dva miliona dinara.",
      "si": "ඩිනාර් මිලියන දෙකක්."
    },
    {
      "sr": "Pet miliona dinara.",
      "si": "ඩිනාර් මිලියන පහක්."
    },
    {
      "sr": "Deset miliona dinara.",
      "si": "ඩිනාර් මිලියන දහයක්."
    },
    {
      "sr": "Sto miliona dinara.",
      "si": "ඩිනාර් මිලියන සියයක්."
    }
  ],
  "dialogue": [
    {
      "sr": "Koliko košta ovo?",
      "si": "මේක කීයද?"
    },
    {
      "sr": "Dvesta dinara.",
      "si": "ඩිනාර් දෙසියයයි."
    },
    {
      "sr": "Dajem trista dinara.",
      "si": "මම ඩිනාර් තුන්සියයක් දෙනවා."
    },
    {
      "sr": "Evo, pedeset dinara kusura.",
      "si": "මෙන්න, ඩිනාර් පනහක ඉතුරු."
    }
  ],
  "practice": [
    {
      "prompt": "“හත” යන අංකයට Serbian වචනය කුමක්ද?",
      "options": [
        "Sedam",
        "Osam",
        "Devet"
      ],
      "answer": 0,
      "explanation": "Sedam = හත."
    },
    {
      "prompt": "“විසි එක” කියන්නේ කොහොමද?",
      "options": [
        "Jedan dvadeset",
        "Dvadeset jedan",
        "Dva deset"
      ],
      "answer": 1,
      "explanation": "මුලින් විස්ස (dvadeset), පසුව එක (jedan): dvadeset jedan."
    },
    {
      "prompt": "“දසදහස (10,000)” Serbian භාෂාවෙන් කියන්නේ කොහොමද?",
      "options": ["Deset hiljada", "Deset miliona", "Sto hiljada"],
      "answer": 0,
      "explanation": "Deset = දහය; hiljada = දහස. Deset hiljada = 10,000."
    },
    {
      "prompt": "“පනස්දහස (50,000)” සඳහා නිවැරදි වචන යුගලය තෝරන්න.",
      "options": ["Petsto hiljada", "Pedeset hiljada", "Sto hiljada"],
      "answer": 1,
      "explanation": "Pedeset = පනහ; pedeset hiljada = 50,000."
    },
    {
      "prompt": "“මිලියන දෙක (2,000,000)” Serbian භාෂාවෙන් කියන්නේ කොහොමද?",
      "options": ["Dva miliona", "Dva hiljada", "Dva milion"],
      "answer": 0,
      "explanation": "2,000,000 = dva miliona. මෙහි miliona යන රූපය භාවිත වෙනවා."
    },
    {
      "prompt": "“මිලියන පහ (5,000,000)” තෝරන්න.",
      "options": ["Pet miliona", "Pedeset miliona", "Petsto miliona"],
      "answer": 0,
      "explanation": "Pet = පහ; pet miliona = මිලියන පහ."
    },
    {
      "prompt": "“මිලියන දහය (10,000,000)” කියන්නේ කුමක්ද?",
      "options": ["Sto miliona", "Deset miliona", "Dva miliona"],
      "answer": 1,
      "explanation": "Deset = දහය; deset miliona = මිලියන දහය."
    },
    {
      "prompt": "“පන්ලක්ෂය (500,000)” කියන්නේ කුමක්ද?",
      "options": ["Petsto hiljada", "Dvesta hiljada", "Jedan milion"],
      "answer": 0,
      "explanation": "Petsto = පන්සියය; petsto hiljada = 500,000."
    },
    {
      "prompt": "“සියය” සඳහා නිවැරදි වචනය?",
      "options": [
        "Hiljadu",
        "Trista",
        "Sto"
      ],
      "answer": 2,
      "explanation": "Sto = 100; hiljadu = 1,000; trista = 300."
    }
  ]
},
  {
    "id": "sr-a1-u2-l2",
    "unit": "ආහාර සහ සාප්පු සවාරි",
    "title": "පාඩම 5 · වෙළඳපොළෙන් භාණ්ඩ මිලදී ගනිමු",
    "objective": "පලතුරු සහ එළවළු ඉල්ලීම, කිලෝ/ග්‍රෑම්/ලීටර් ප්‍රමාණ කියීම, මිල විමසීම සහ මුදල් ගෙවීම.",
    "vocabulary": [
      { "word": "Jabuka", "meaning": "ඇපල් ගෙඩියක්", "example": "Želim jabuke.", "translation": "මට ඇපල් ඕනේ." },
      { "word": "Paradajz", "meaning": "තක්කාලි", "example": "Koliko košta paradajz?", "translation": "තක්කාලිවල මිල කීයද?" },
      { "word": "Krompir", "meaning": "අර්තාපල්", "example": "Treba mi krompir.", "translation": "මට අර්තාපල් අවශ්‍යයි." },
      { "word": "Kilogram", "meaning": "කිලෝග්‍රෑම් එකක්", "example": "Jedan kilogram jabuka, molim.", "translation": "ඇපල් කිලෝග්‍රෑම් එකක්, කරුණාකර." },
      { "word": "Pola kilograma", "meaning": "කිලෝග්‍රෑම් භාගයක්", "example": "Pola kilograma paradajza.", "translation": "තක්කාලි කිලෝග්‍රෑම් භාගයක්." },
      { "word": "Litar", "meaning": "ලීටරයක්", "example": "Jedan litar mleka.", "translation": "කිරි ලීටරයක්." },
      { "word": "Dajte mi, molim vas.", "meaning": "මට දෙන්න, කරුණාකර.", "example": "Dajte mi dva kilograma krompira, molim vas.", "translation": "මට අර්තාපල් කිලෝග්‍රෑම් දෙකක් දෙන්න, කරුණාකර." },
      { "word": "Koliko košta?", "meaning": "මිල කීයද?", "example": "Koliko košta kilogram jabuka?", "translation": "ඇපල් කිලෝග්‍රෑම් එකක මිල කීයද?" },
      { "word": "Ukupno", "meaning": "මුළු එකතුව", "example": "Koliko je ukupno?", "translation": "මුළු එකතුව කීයද?" }
    ],
    "grammarTerms": [{ "sr": "Dajte mi", "si": "මට දෙන්න", "reading": "දාය්තෙ මි" }, { "sr": "jedan kilogram", "si": "කිලෝග්‍රෑම් එකක්", "reading": "යෙදාන් කිලොග්‍රාම්" }, { "sr": "pola kilograma", "si": "කිලෝග්‍රෑම් භාගයක්", "reading": "පොලා කිලොග්‍රාමා" }, { "sr": "dva kilograma", "si": "කිලෝග්‍රෑම් දෙකක්", "reading": "ද්වා කිලොග්‍රාමා" }, { "sr": "Koliko košta?", "si": "කීයද?", "reading": "කොලිකො කොෂ්තා" }, { "sr": "Koliko je ukupno?", "si": "මුළු එකතුව කීයද?", "reading": "කොලිකො යෙ උකුප්නො" }, { "sr": "jedan kilogram", "si": "කිලෝග්‍රෑම් එකක්", "reading": "යෙදාන් කිලොග්‍රාම්" }, { "sr": "dva kilograma", "si": "කිලෝග්‍රෑම් දෙකක්", "reading": "ද්වා කිලොග්‍රාමා" }, { "sr": "molim vas", "si": "කරුණාකර (විධිමත්)", "reading": "මොලීම් වාස්" }],
    "grammarTitle": "භාෂා රටාව · ප්‍රමාණ සහ ආචාරශීලී ඉල්ලීම්",
    "grammar": "භාණ්ඩයක් ඉල්ලීමට “Dajte mi ... , molim vas” (මට ... දෙන්න, කරුණාකර) භාවිත කරන්න. ප්‍රමාණය කියන විට “jedan kilogram” (කිලෝග්‍රෑම් එකක්), “pola kilograma” (කිලෝග්‍රෑම් භාගයක්), “dva kilograma” (කිලෝග්‍රෑම් දෙකක්) වැනි රටා මතක තබාගන්න. “Koliko košta?” මිල අසන්නත් “Koliko je ukupno?” මුළු මුදල අසන්නත් භාවිත වෙනවා. Serbian භාෂාවේ ප්‍රමාණයකට පසුව නාම පදයේ හැඩය වෙනස් විය හැක; ආරම්භයේදී මේ සම්පූර්ණ ප්‍රකාශන ලෙස පුහුණු වන්න.",
    "examples": [
      { "sr": "Dajte mi jedan kilogram jabuka, molim vas.", "si": "මට ඇපල් කිලෝග්‍රෑම් එකක් දෙන්න, කරුණාකර." },
      { "sr": "Pola kilograma paradajza, molim.", "si": "තක්කාලි කිලෝග්‍රෑම් භාගයක්, කරුණාකර." },
      { "sr": "Koliko košta litar mleka?", "si": "කිරි ලීටරයක මිල කීයද?" },
      { "sr": "Koliko je ukupno?", "si": "මුළු එකතුව කීයද?" }
    ],
    "dialogue": [
      { "sr": "Dobar dan! Izvolite.", "si": "සුබ දවසක්! කියන්න / මොනවාද අවශ්‍ය?" },
      { "sr": "Dajte mi jedan kilogram jabuka, molim vas.", "si": "මට ඇපල් කිලෝග්‍රෑම් එකක් දෙන්න, කරුණාකර." },
      { "sr": "Još nešto?", "si": "තව මොනවාහරිද?" },
      { "sr": "Da, pola kilograma paradajza i jedan litar mleka.", "si": "ඔව්, තක්කාලි කිලෝග්‍රෑම් භාගයක් සහ කිරි ලීටරයක්." },
      { "sr": "To je petsto dinara.", "si": "ඒක ඩිනාර් පන්සියයයි." },
      { "sr": "Izvolite. Hvala!", "si": "මෙන්න. ස්තුතියි!" },
      { "sr": "Hvala, doviđenja!", "si": "ස්තුතියි, නැවත හමුවෙමු!" }
    ],
    "practice": [
      { "prompt": "“කිලෝග්‍රෑම් භාගයක්” කියන Serbian ප්‍රකාශය කුමක්ද?", "options": ["Jedan litar", "Pola kilograma", "Dva kilograma"], "answer": 1, "explanation": "“Pola” යනු භාගයයි; “pola kilograma” = කිලෝග්‍රෑම් භාගයක්." },
      { "prompt": "වෙළඳපොළේ භාණ්ඩයක් ආචාරශීලීව ඉල්ලන්නේ කොහොමද?", "options": ["Dajte mi, molim vas.", "Laku noć.", "Ne znam."], "answer": 0, "explanation": "“Dajte mi, molim vas” යනු “මට දෙන්න, කරුණාකර” යන්නයි." },
      { "prompt": "“මිල කීයද?” අසන්න නිවැරදි වාක්‍යය තෝරන්න.", "options": ["Koliko košta?", "Koliko si?", "Gde živite?"], "answer": 0, "explanation": "“Koliko košta?” යනු මිල විමසන සාමාන්‍ය ප්‍රශ්නයයි." },
      { "prompt": "“කිරි ලීටරයක්” කියන්නේ කුමක්ද?", "options": ["Kilogram mleka", "Jedan litar mleka", "Pola kilograma mleka"], "answer": 1, "explanation": "“Jedan litar mleka” = කිරි ලීටරයක්." }
    ]
  }
  ,
  {
    id: "sr-a1-u3-l1",
    unit: "රැකියාව සහ වැඩබිම",
    title: "පාඩම 6 · වැඩබිමේ සන්නිවේදනය",
    objective: "තම රැකියාව සහ වැඩබිම හඳුන්වාදීම, වැඩ කරන වේලාව කියීම, උපදෙස් නොතේරුණහොත් නැවත අසීම සහ උදව් ඉල්ලීම.",
    vocabulary: [
      { word: "Radim ovde.", meaning: "මම මෙහි වැඩ කරනවා.", example: "Radim ovde svaki dan.", translation: "මම හැමදාම මෙහි වැඩ කරනවා." },
      { word: "Gde radite?", meaning: "ඔබ කොහෙද වැඩ කරන්නේ?", example: "Izvinite, gde radite?", translation: "සමාවෙන්න, ඔබ කොහෙද වැඩ කරන්නේ?" },
      { word: "Radno vreme", meaning: "වැඩ කරන වේලාව", example: "Koje je radno vreme?", translation: "වැඩ කරන වේලාව කුමක්ද?" },
      { word: "Smena", meaning: "වැඩ මුරය", example: "Moja smena počinje u osam.", translation: "මගේ වැඩ මුරය අටට පටන් ගන්නවා." },
      { word: "Kolega / koleginica", meaning: "සහකාර සේවකයා / සේවිකාව", example: "Moj kolega je ovde.", translation: "මගේ සහකාර සේවකයා මෙහි ඉන්නවා." },
      { word: "Šef / šefica", meaning: "ප්‍රධානියා (පිරිමි / කාන්තා)", example: "Gde je šef?", translation: "ප්‍රධානියා කොහෙද?" },
      { word: "Treba mi pomoć.", meaning: "මට උදව් අවශ්‍යයි.", example: "Treba mi pomoć, molim vas.", translation: "කරුණාකර මට උදව් අවශ්‍යයි." },
      { word: "Možete li da ponovite?", meaning: "ඔබට නැවත කියන්න පුළුවන්ද?", example: "Izvinite, možete li da ponovite?", translation: "සමාවෙන්න, ඔබට නැවත කියන්න පුළුවන්ද?" },
      { word: "Razumem.", meaning: "මට තේරෙනවා.", example: "Da, razumem zadatak.", translation: "ඔව්, මට කාර්යය තේරෙනවා." },
      { word: "Ne razumem.", meaning: "මට තේරෙන්නේ නැහැ.", example: "Izvinite, ne razumem.", translation: "සමාවෙන්න, මට තේරෙන්නේ නැහැ." }
    ],
    grammarTerms: [
      { sr: "Radim", si: "මම වැඩ කරනවා", reading: "රාදිම්" },
      { sr: "Radite", si: "ඔබ වැඩ කරනවා", reading: "රාදිතෙ" },
      { sr: "Gde radite?", si: "ඔබ කොහෙද වැඩ කරන්නේ?", reading: "ග්දේ රාදිතෙ?" },
      { sr: "Možete li da ...?", si: "ඔබට ... කරන්න පුළුවන්ද?", reading: "මොෂෙතෙ ලි දා ...?" },
      { sr: "Treba mi pomoć.", si: "මට උදව් අවශ්‍යයි.", reading: "ත්‍රෙබා මි පොමොච්" },
      { sr: "Ne razumem.", si: "මට තේරෙන්නේ නැහැ.", reading: "නේ රාසුමේම්" }
    , { sr: "Radim ovde.", si: "මම මෙහි වැඩ කරනවා.", reading: "රාදිම් ඔව්ඩේ" }, { sr: "Možete li da ponovite?", si: "ඔබට නැවත කියන්න පුළුවන්ද?", reading: "මොෂෙතෙ ලි දා පොනොවිතෙ" }, { sr: "Radno vreme", si: "වැඩ කරන වේලාව", reading: "රාද්නො ව්‍රෙමේ" }],
    grammarTitle: "භාෂා රටාව · වැඩ ගැන කියීම සහ ආචාරශීලීව උදව් ඉල්ලීම",
    grammar: "තමන් කරන දේ කියන්න “Radim ...” (මම වැඩ කරනවා) භාවිත කරන්න. කෙනෙකුගෙන් විධිමත්ව අසන විට “Gde radite?” කියන්න පුළුවන්. “Možete li da ...?” යනු “ඔබට ... කරන්න පුළුවන්ද?” යන ආචාරශීලී ප්‍රශ්න රටාවයි. උපදෙස් නොතේරුණොත් “Ne razumem” කියා, “Možete li da ponovite?” යනුවෙන් නැවත කියන ලෙස ඉල්ලන්න.",
    examples: [
      { sr: "Radim u restoranu.", si: "මම අවන්හලක වැඩ කරනවා." },
      { sr: "Moja smena počinje u osam.", si: "මගේ වැඩ මුරය අටට පටන් ගන්නවා." },
      { sr: "Treba mi pomoć, molim vas.", si: "කරුණාකර මට උදව් අවශ්‍යයි." },
      { sr: "Možete li da ponovite, molim vas?", si: "කරුණාකර ඔබට නැවත කියන්න පුළුවන්ද?" }
    ],
    dialogue: [
      { sr: "Dobar dan. Da li radite ovde?", si: "සුබ දවසක්. ඔබ මෙහි වැඩ කරනවාද?" },
      { sr: "Da, radim ovde.", si: "ඔව්, මම මෙහි වැඩ කරනවා." },
      { sr: "Kada počinje vaša smena?", si: "ඔබගේ වැඩ මුරය පටන් ගන්නේ කීයටද?" },
      { sr: "Počinje u osam.", si: "එය අටට පටන් ගන්නවා." },
      { sr: "Izvinite, ne razumem ovaj zadatak. Možete li da ponovite?", si: "සමාවෙන්න, මට මේ කාර්යය තේරෙන්නේ නැහැ. නැවත කියන්න පුළුවන්ද?" },
      { sr: "Naravno. Treba li vam pomoć?", si: "අනිවාර්යයෙන්ම. ඔබට උදව් අවශ්‍යද?" },
      { sr: "Da, hvala.", si: "ඔව්, ස්තුතියි." }
    ],
    practice: [
      { prompt: "“මම මෙහි වැඩ කරනවා” යන අර්ථය ඇති වාක්‍යය තෝරන්න.", options: ["Radim ovde.", "Ne razumem.", "Gde je stanica?"], answer: 0, explanation: "“Radim ovde” = මම මෙහි වැඩ කරනවා." },
      { prompt: "“මට උදව් අවශ්‍යයි” කියන්නේ කොහොමද?", options: ["Radno vreme.", "Treba mi pomoć.", "Doviđenja."], answer: 1, explanation: "“Treba mi pomoć” යනු මට උදව් අවශ්‍යයි යන්නයි." },
      { prompt: "කෙනෙකුට නැවත කියන ලෙස ආචාරශීලීව ඉල්ලන්නේ කුමක්ද?", options: ["Možete li da ponovite?", "Koliko košta?", "Dobro jutro."], answer: 0, explanation: "“Možete li da ponovite?” යනු ඔබට නැවත කියන්න පුළුවන්ද? යන්නයි." },
      { prompt: "“වැඩ කරන වේලාව” සඳහා Serbian ප්‍රකාශය කුමක්ද?", options: ["Kolega", "Radno vreme", "Pomoć"], answer: 1, explanation: "“Radno vreme” යනු වැඩ කරන වේලාවයි." }
    ]
  }

  ,
  {
    id: "sr-a1-u3-l2",
    unit: "රැකියාව සහ වැඩබිම",
    title: "පාඩම 7 · රැකියා සහ වෘත්තීන්",
    objective: "තම රැකියාව හඳුන්වාදීම, වෙනත් කෙනෙකුගේ රැකියාව විමසීම සහ වෘත්තීන්හි පිරිමි/කාන්තා නාම හඳුනාගැනීම.",
    vocabulary: [
      { word: "Zanimanje", meaning: "රැකියාව / වෘත්තිය", example: "Koje je vaše zanimanje?", translation: "ඔබගේ රැකියාව කුමක්ද?" },
      { word: "Konobar / konobarica", meaning: "වේටර් / වේටර්වරිය", example: "Ja sam konobar.", translation: "මම වේටර්වරයෙක්." },
      { word: "Kuvar / kuvarica", meaning: "අරක්කැමි / අරක්කැමිවරිය", example: "Ona je kuvarica.", translation: "ඇය අරක්කැමිවරියක්." },
      { word: "Vozač / vozačica", meaning: "රියදුරු (පිරිමි / කාන්තා)", example: "Moj otac je vozač.", translation: "මගේ පියා රියදුරෙක්." },
      { word: "Prodavac / prodavačica", meaning: "විකුණුම් සේවකයා / සේවිකාව", example: "Ona je prodavačica.", translation: "ඇය විකුණුම් සේවිකාවක්." },
      { word: "Radnik / radnica", meaning: "සේවකයා / සේවිකාව", example: "On je radnik.", translation: "ඔහු සේවකයෙක්." },
      { word: "Nastavnik / nastavnica", meaning: "ගුරුවරයා / ගුරුවරිය", example: "Ona je nastavnica.", translation: "ඇය ගුරුවරියක්." },
      { word: "Lekar / lekarka", meaning: "වෛද්‍යවරයා / වෛද්‍යවරිය", example: "Moj brat je lekar.", translation: "මගේ සහෝදරයා වෛද්‍යවරයෙක්." },
      { word: "Student / studentkinja", meaning: "ශිෂ්‍යයා / ශිෂ්‍යාව", example: "Ja sam student.", translation: "මම ශිෂ්‍යයෙක්." },
      { word: "Programer / programerka", meaning: "මෘදුකාංග සංවර්ධකයා / සංවර්ධිකාව", example: "On je programer.", translation: "ඔහු මෘදුකාංග සංවර්ධකයෙක්." }
    ],
    grammarTerms: [
      { sr: "Koje je vaše zanimanje?", si: "ඔබගේ රැකියාව කුමක්ද?", reading: "කොයේ යේ වාෂෙ සානිමාන්යේ?" },
      { sr: "Ja sam ...", si: "මම ... වෙමි", reading: "යා සාම් ..." },
      { sr: "On je ...", si: "ඔහු ... ය", reading: "ඔන් යේ ..." },
      { sr: "Ona je ...", si: "ඇය ... ය", reading: "ඔනා යේ ..." },
      { sr: "konobar / konobarica", si: "වේටර් / වේටර්වරිය", reading: "කොනොබාර් / කොනොබාරිත්සා" },
      { sr: "radnik / radnica", si: "සේවකයා / සේවිකාව", reading: "රාද්නික් / රාද්නීත්සා" }
    , { sr: "Ona je nastavnica.", si: "ඇය ගුරුවරියක්.", reading: "ඔනා යේ නස්තාව්නිත්සා" }, { sr: "Ja sam konobar.", si: "මම වේටර්වරයෙක්.", reading: "යා සාම් කොනොබාර්" }, { sr: "Zanimanje", si: "රැකියාව / වෘත්තිය", reading: "සානිමාන්යේ" }],
    grammarTitle: "ව්‍යාකරණය · රැකියාව හඳුන්වාදීම සහ ස්ත්‍රී/පුරුෂ නාම",
    grammar: "තමන්ගේ රැකියාව කියන්න “Ja sam ...” (මම ... වෙමි) යන රටාව භාවිත කරන්න. පිරිමි පුද්ගලයෙකු ගැන “On je ...” සහ කාන්තා පුද්ගලයෙකු ගැන “Ona je ...” කියන්න. Serbian භාෂාවේ බොහෝ වෘත්තීන්ට පිරිමි සහ කාන්තා ආකාර දෙකක් තිබෙනවා; උදාහරණ ලෙස konobar/konobarica සහ nastavnik/nastavnica. සෑම වෘත්තියක්ම එකම අවසාන රටාව අනුගමනය නොකරන නිසා යුගල වශයෙන් ඉගෙනගන්න.",
    examples: [
      { sr: "Ja sam konobar.", si: "මම වේටර්වරයෙක්." },
      { sr: "Ona je nastavnica.", si: "ඇය ගුරුවරියක්." },
      { sr: "Moj brat je vozač.", si: "මගේ සහෝදරයා රියදුරෙක්." },
      { sr: "Koje je vaše zanimanje?", si: "ඔබගේ රැකියාව කුමක්ද?" }
    ],
    dialogue: [
      { sr: "Čime se bavite?", si: "ඔබ කරන රැකියාව කුමක්ද?" },
      { sr: "Ja sam kuvar. A vi?", si: "මම අරක්කැමියෙක්. ඔබ?" },
      { sr: "Ja sam prodavačica.", si: "මම විකුණුම් සේවිකාවක්." },
      { sr: "Gde radite?", si: "ඔබ කොහෙද වැඩ කරන්නේ?" },
      { sr: "Radim u restoranu.", si: "මම අවන්හලක වැඩ කරනවා." }
    ],
    practice: [
      { prompt: "“රැකියාව / වෘත්තිය” සඳහා Serbian වචනය කුමක්ද?", options: ["Zanimanje", "Smena", "Pomoć"], answer: 0, explanation: "“Zanimanje” යනු රැකියාව හෝ වෘත්තියයි." },
      { prompt: "“ඇය ගුරුවරියක්” යන වාක්‍යය තෝරන්න.", options: ["On je nastavnik.", "Ona je nastavnica.", "Ja sam student."], answer: 1, explanation: "“Ona je nastavnica” = ඇය ගුරුවරියක්." },
      { prompt: "“මම වේටර්වරයෙක්” කියන්නේ කොහොමද?", options: ["Ja sam konobar.", "Ja sam vozač.", "Ja sam lekar."], answer: 0, explanation: "“Konobar” යනු වේටර්වරයායි." },
      { prompt: "“ඔබගේ රැකියාව කුමක්ද?” යන ප්‍රශ්නය තෝරන්න.", options: ["Gde živite?", "Koje je vaše zanimanje?", "Koliko košta?"], answer: 1, explanation: "“Koje je vaše zanimanje?” යනු ඔබගේ රැකියාව කුමක්ද? යන්නයි." }
    ]
  }
  ,
  {
    id: "sr-a1-u4-l1",
    unit: "ගමන් මඟ සහ ප්‍රවාහනය",
    title: "පාඩම 8 · මාර්ගය සහ ප්‍රවාහනය විමසීම",
    objective: "ස්ථානයක් කොහෙදැයි අසන්න, සරල මාර්ග උපදෙස් තේරුම්ගන්න සහ බස්/දුම්රිය භාවිතයට අවශ්‍ය වාක්‍ය කියන්න.",
    vocabulary: [
      { word: "Gde je ...?", meaning: "... කොහෙද?", example: "Gde je autobuska stanica?", translation: "බස් නැවතුම්පොළ කොහෙද?" },
      { word: "Levo", meaning: "වමට", example: "Skrenite levo.", translation: "වමට හැරෙන්න." },
      { word: "Desno", meaning: "දකුණට", example: "Skrenite desno.", translation: "දකුණට හැරෙන්න." },
      { word: "Pravo", meaning: "කෙළින්ම", example: "Idite pravo.", translation: "කෙළින්ම යන්න." },
      { word: "Blizu", meaning: "ළඟ", example: "Stanica je blizu.", translation: "නැවතුම්පොළ ළඟයි." },
      { word: "Daleko", meaning: "දුර", example: "Da li je centar daleko?", translation: "නගර මධ්‍යස්ථානය දුරද?" },
      { word: "Autobuska stanica", meaning: "බස් නැවතුම්පොළ", example: "Gde je autobuska stanica?", translation: "බස් නැවතුම්පොළ කොහෙද?" },
      { word: "Železnička stanica", meaning: "දුම්රිය ස්ථානය", example: "Železnička stanica je tamo.", translation: "දුම්රිය ස්ථානය එතැනයි." },
      { word: "Karta", meaning: "ටිකට්පත", example: "Jednu kartu, molim.", translation: "එක ටිකට්පතක්, කරුණාකර." },
      { word: "Autobus", meaning: "බස් රථය", example: "Kada dolazi autobus?", translation: "බස් රථය එන්නේ කීයටද?" }
    ],
    grammarTerms: [
      { sr: "Gde je ...?", si: "... කොහෙද?", reading: "ග්දේ යේ ...?" },
      { sr: "Skrenite levo.", si: "වමට හැරෙන්න.", reading: "ස්ක්‍රෙනිතෙ ලෙවො." },
      { sr: "Skrenite desno.", si: "දකුණට හැරෙන්න.", reading: "ස්ක්‍රෙනිතෙ දෙස්නො." },
      { sr: "Idite pravo.", si: "කෙළින්ම යන්න.", reading: "ඉදිතෙ ප්‍රාවො." },
      { sr: "Da li je ... blizu?", si: "... ළඟද?", reading: "දා ලි යේ ... බ්ලිසු?" },
      { sr: "Jednu kartu, molim.", si: "එක ටිකට්පතක්, කරුණාකර.", reading: "යෙද්නු කාර්තු, මොලීම්." }
    , { sr: "Levo", si: "වමට", reading: "ලෙවො" }, { sr: "Desno", si: "දකුණට", reading: "දෙස්නො" }, { sr: "Pravo", si: "කෙළින්ම", reading: "ප්‍රාවො" }],
    grammarTitle: "ව්‍යාකරණය · ස්ථාන අසන සහ මාර්ග උපදෙස් දෙන රටා",
    grammar: "ස්ථානයක් අසන්න “Gde je ...?” භාවිත කරන්න. දිශාවක් කියන විට “levo” (වමට), “desno” (දකුණට), “pravo” (කෙළින්ම) යොදාගන්න. ගෞරවයෙන් උපදෙස් දීමට “Skrenite ...” (හැරෙන්න) සහ “Idite ...” (යන්න) භාවිත කළ හැක. දුර විමසීමට “Da li je ... blizu?” කියන්න.",
    examples: [
      { sr: "Izvinite, gde je autobuska stanica?", si: "සමාවෙන්න, බස් නැවතුම්පොළ කොහෙද?" },
      { sr: "Idite pravo, pa skrenite levo.", si: "කෙළින්ම ගිහින්, පසුව වමට හැරෙන්න." },
      { sr: "Železnička stanica je blizu.", si: "දුම්රිය ස්ථානය ළඟයි." },
      { sr: "Jednu kartu do centra, molim.", si: "නගර මධ්‍යස්ථානයට එක ටිකට්පතක්, කරුණාකර." }
    ],
    dialogue: [
      { sr: "Izvinite, gde je autobuska stanica?", si: "සමාවෙන්න, බස් නැවතුම්පොළ කොහෙද?" },
      { sr: "Idite pravo i skrenite desno.", si: "කෙළින්ම ගිහින් දකුණට හැරෙන්න." },
      { sr: "Da li je daleko?", si: "ඒක දුරද?" },
      { sr: "Ne, veoma je blizu.", si: "නැහැ, ඒක ඉතා ළඟයි." },
      { sr: "Hvala puno!", si: "බොහොම ස්තුතියි!" },
      { sr: "Nema na čemu.", si: "ඒකට කමක් නැහැ." }
    ],
    practice: [
      { prompt: "“වමට” යන අර්ථය ඇති වචනය තෝරන්න.", options: ["Desno", "Levo", "Pravo"], answer: 1, explanation: "Levo = වමට; desno = දකුණට; pravo = කෙළින්ම." },
      { prompt: "“බස් නැවතුම්පොළ කොහෙද?” කියන්නේ?", options: ["Gde je autobuska stanica?", "Koliko košta autobus?", "Kada radite?"], answer: 0, explanation: "Gde je ...? යනු ... කොහෙද? යන ප්‍රශ්න රටාවයි." },
      { prompt: "“කෙළින්ම යන්න” කියන උපදෙස තෝරන්න.", options: ["Skrenite levo.", "Idite pravo.", "Skrenite desno."], answer: 1, explanation: "Idite pravo = කෙළින්ම යන්න." },
      { prompt: "“එක ටිකට්පතක්, කරුණාකර” යන ප්‍රකාශය කුමක්ද?", options: ["Jednu kartu, molim.", "Dobar dan, molim.", "Jedan kilogram, molim."], answer: 0, explanation: "Jednu kartu, molim = එක ටිකට්පතක්, කරුණාකර." }
    ]
  }
  ,
  {
    id: "sr-a1-u4-l2",
    unit: "ගමන් මඟ සහ ප්‍රවාහනය",
    title: "පාඩම 9 · හමුවීම් වේලාව සහ ප්‍රවාහන කාලසටහන්",
    objective: "හමුවීමක් සඳහා වේලාවක් නියම කිරීම, වේලාව වෙනස් කිරීම සහ බස්/දුම්රිය පිටත්වන වේලාව විමසීම.",
    vocabulary: [
      { word: "Termin", meaning: "නියමිත හමුවීම / වේලාව", example: "Imam termin u deset.", translation: "මට දහයට හමුවීමක් තිබෙනවා." },
      { word: "Zakazati termin", meaning: "හමුවීමක් වේලාවක් වෙන් කරගැනීම", example: "Želim da zakažem termin.", translation: "මට හමුවීමක් සඳහා වේලාවක් වෙන් කරගන්න ඕනේ." },
      { word: "U koliko sati?", meaning: "කීයටද?", example: "U koliko sati je sastanak?", translation: "රැස්වීම කීයටද?" },
      { word: "Danas", meaning: "අද", example: "Imam termin danas.", translation: "මට අද හමුවීමක් තිබෙනවා." },
      { word: "Sutra", meaning: "හෙට", example: "Može li sutra?", translation: "හෙට පුළුවන්ද?" },
      { word: "Odložiti", meaning: "කල් දැමීම", example: "Moram da odložim termin.", translation: "මට හමුවීම කල් දමන්න වෙනවා." },
      { word: "Polazak", meaning: "පිටත්වීම", example: "Vreme polaska je u osam.", translation: "පිටත්වන වේලාව අටයි." },
      { word: "Kada polazi autobus?", meaning: "බස් රථය පිටත් වෙන්නේ කීයටද?", example: "Kada polazi autobus za centar?", translation: "නගර මධ්‍යස්ථානයට යන බස් රථය පිටත් වෙන්නේ කීයටද?" },
      { word: "Kašnjenje", meaning: "ප්‍රමාදය", example: "Autobus ima kašnjenje.", translation: "බස් රථය ප්‍රමාදයි." },
      { word: "Red vožnje", meaning: "ගමන් කාලසටහන", example: "Gde je red vožnje?", translation: "ගමන් කාලසටහන කොහෙද?" },
      { word: "Povratna karta", meaning: "ආපසු ගමන් ටිකට්පත", example: "Jednu povratnu kartu, molim.", translation: "ආපසු ගමන් ටිකට්පතක්, කරුණාකර." }
    ],
    grammarTerms: [
      { sr: "Želim da zakažem termin.", si: "මට හමුවීමක් සඳහා වේලාවක් වෙන් කරගන්න ඕනේ.", reading: "ෂෙලිම් දා සාකාෂෙම් තෙර්මින්." },
      { sr: "Imam termin u deset.", si: "මට දහයට හමුවීමක් තිබෙනවා.", reading: "ඉමාම් තෙර්මින් උ දෙසෙත්." },
      { sr: "U koliko sati?", si: "කීයටද?", reading: "උ කොලිකො සාති?" },
      { sr: "Može li sutra?", si: "හෙට පුළුවන්ද?", reading: "මොෂෙ ලි සුත්‍රා?" },
      { sr: "Kada polazi autobus?", si: "බස් රථය පිටත් වෙන්නේ කීයටද?", reading: "කාදා පොලාසි ආවුතොබුස්?" },
      { sr: "Autobus kasni deset minuta.", si: "බස් රථය විනාඩි දහයක් ප්‍රමාදයි.", reading: "ආවුතොබුස් කාස්නි දෙසෙත් මිනූතා." },
      { sr: "Gde je red vožnje?", si: "ගමන් කාලසටහන කොහෙද?", reading: "ග්දේ යේ රෙද් වොෂ්න්යේ?" }
    ],
    grammarTitle: "ව්‍යාකරණය · වේලාවක් වෙන් කිරීම සහ පිටත්වන වේලාව විමසීම",
    grammar: "හමුවීමක් වෙන් කරගැනීමට “Želim da zakažem termin” කියන්න. ඔබට දැනටමත් වේලාවක් තිබෙන බව කියන්න “Imam termin u deset” භාවිත කරන්න. වේලාව අසන්න “U koliko sati?” යොදන්න. ප්‍රවාහනයේදී “Kada polazi autobus?” බස් රථය පිටත්වන වේලාව අසන ප්‍රශ්නයයි. “kasni” යනු ප්‍රමාද වෙනවා යන්නයි.",
    examples: [
      { sr: "Dobar dan, želim da zakažem termin.", si: "සුබ දවසක්, මට හමුවීමක් සඳහා වේලාවක් වෙන් කරගන්න ඕනේ." },
      { sr: "Može li sutra u deset?", si: "හෙට දහයට පුළුවන්ද?" },
      { sr: "Kada polazi autobus za Beograd?", si: "බෙල්ග්‍රේඩ් බලා යන බස් රථය පිටත් වෙන්නේ කීයටද?" },
      { sr: "Autobus kasni deset minuta.", si: "බස් රථය විනාඩි දහයක් ප්‍රමාදයි." }
    ],
    dialogue: [
      { sr: "Dobar dan. Želim da zakažem termin.", si: "සුබ දවසක්. මට හමුවීමක් සඳහා වේලාවක් වෙන් කරගන්න ඕනේ." },
      { sr: "Naravno. Kada vam odgovara?", si: "අනිවාර්යයෙන්ම. ඔබට පහසු කවදාද?" },
      { sr: "Može li sutra u deset?", si: "හෙට දහයට පුළුවන්ද?" },
      { sr: "Može. Vidimo se sutra.", si: "පුළුවන්. හෙට හමුවෙමු." },
      { sr: "Izvinite, kada polazi autobus za centar?", si: "සමාවෙන්න, නගර මධ්‍යස්ථානයට යන බස් රථය පිටත් වෙන්නේ කීයටද?" },
      { sr: "U deset i pet. Danas malo kasni.", si: "දහයයි පහට. අද ටිකක් ප්‍රමාදයි." },
      { sr: "Hvala. Gde je red vožnje?", si: "ස්තුතියි. ගමන් කාලසටහන කොහෙද?" }
    ],
    practice: [
      { prompt: "“මට හමුවීමක් සඳහා වේලාවක් වෙන් කරගන්න ඕනේ” තෝරන්න.", options: ["Želim da zakažem termin.", "Kada polazi autobus?", "Imam kartu."], answer: 0, explanation: "Želim da zakažem termin = මට හමුවීමක් වෙන් කරගන්න ඕනේ." },
      { prompt: "“කීයටද?” අසන Serbian ප්‍රකාශය කුමක්ද?", options: ["Koliko košta?", "U koliko sati?", "Gde je stanica?"], answer: 1, explanation: "U koliko sati? යනු කීයටද? යන්නයි." },
      { prompt: "බස් රථය පිටත්වන වේලාව අසන්න.", options: ["Kada polazi autobus?", "Da li ste dobro?", "Koje je zanimanje?"], answer: 0, explanation: "Kada polazi autobus? = බස් රථය පිටත් වෙන්නේ කීයටද?" },
      { prompt: "“බස් රථය විනාඩි දහයක් ප්‍රමාදයි” කියන්නේ?", options: ["Autobus je blizu.", "Autobus kasni deset minuta.", "Autobus polazi sutra."], answer: 1, explanation: "Kasni = ප්‍රමාදයි; deset minuta = විනාඩි දහයක්." }
    ]
  }

  ,
  {
    id: "sr-a1-u5-l1",
    unit: "දෛනික සේවා සහ නවාතැන්",
    title: "පාඩම 10 · නවාතැන් සහ දෛනික සේවා",
    objective: "හෝටලයක කාමරයක් විමසීම, වෙන් කිරීම, ලිපිනය/සේවා පහසුකම් ගැන අසීම සහ ගැටලුවක් පැහැදිලි කිරීම.",
    vocabulary: [
      { word: "Soba", meaning: "කාමරය", example: "Imate li slobodnu sobu?", translation: "ඔබට හිස් කාමරයක් තිබෙනවාද?" },
      { word: "Slobodna soba", meaning: "හිස් කාමරයක්", example: "Treba mi slobodna soba.", translation: "මට හිස් කාමරයක් අවශ්‍යයි." },
      { word: "Rezervacija", meaning: "වෙන් කිරීම / වෙන්කිරීමේ වාර්තාව", example: "Imam rezervaciju.", translation: "මට වෙන් කිරීමක් තිබෙනවා." },
      { word: "Jednokrevetna soba", meaning: "තනි ඇඳක් සහිත කාමරය", example: "Želim jednokrevetnu sobu.", translation: "මට තනි ඇඳක් සහිත කාමරයක් අවශ්‍යයි." },
      { word: "Dvokrevetna soba", meaning: "දෙදෙනෙකුට සුදුසු කාමරය", example: "Da li imate dvokrevetnu sobu?", translation: "ඔබට දෙදෙනෙකුට සුදුසු කාමරයක් තිබෙනවාද?" },
      { word: "Noćenje", meaning: "රාත්‍රියක් නවාතැන් ගැනීම", example: "Koliko košta jedno noćenje?", translation: "එක් රාත්‍රියක නවාතැන් ගාස්තුව කීයද?" },
      { word: "Adresa", meaning: "ලිපිනය", example: "Koja je vaša adresa?", translation: "ඔබගේ ලිපිනය කුමක්ද?" },
      { word: "Ključ", meaning: "යතුර", example: "Gde je ključ od sobe?", translation: "කාමරයේ යතුර කොහෙද?" },
      { word: "Internet", meaning: "අන්තර්ජාලය", example: "Da li imate internet?", translation: "ඔබට අන්තර්ජාල පහසුකම් තිබෙනවාද?" },
      { word: "Ne radi", meaning: "වැඩ කරන්නේ නැහැ", example: "Klima ne radi.", translation: "වායුසමීකරණය වැඩ කරන්නේ නැහැ." },
      { word: "Pomoć", meaning: "උදව්", example: "Možete li da mi pomognete?", translation: "ඔබට මට උදව් කරන්න පුළුවන්ද?" }
    ],
    grammarTerms: [
      { sr: "Imate li slobodnu sobu?", si: "ඔබට හිස් කාමරයක් තිබෙනවාද?", reading: "ඉමාතෙ ලි ස්ලොබොද්නු සොබු?" },
      { sr: "Želim da rezervišem sobu.", si: "මට කාමරයක් වෙන් කරගන්න ඕනේ.", reading: "ෂෙලිම් දා රෙසෙර්විෂෙම් සොබු." },
      { sr: "Koliko košta jedno noćenje?", si: "එක් රාත්‍රියක ගාස්තුව කීයද?", reading: "කොලිකො කොෂ්තා යෙද්නො නොචෙන්යේ?" },
      { sr: "Da li imate internet?", si: "ඔබට අන්තර්ජාල පහසුකම් තිබෙනවාද?", reading: "දා ලි ඉමාතෙ ඉන්ටර්නෙත්?" },
      { sr: "Klima ne radi.", si: "වායුසමීකරණය වැඩ කරන්නේ නැහැ.", reading: "ක්ලිමා නෙ රාදි." },
      { sr: "Možete li da mi pomognete?", si: "ඔබට මට උදව් කරන්න පුළුවන්ද?", reading: "මොෂෙතෙ ලි දා මි පොමොග්නෙතෙ?" }
    ],
    grammarTitle: "ව්‍යාකරණය · සේවාවක් ඉල්ලීම සහ ගැටලුවක් පැහැදිලි කිරීම",
    grammar: "කාමරයක් හෝ සේවාවක් තිබේදැයි අසන්න “Imate li ...?” භාවිත කරන්න. ඔබට යමක් අවශ්‍ය බව කියන්න “Želim da ...” යොදන්න. මිල විමසීමට “Koliko košta ...?” කියන්න. යමක් ක්‍රියා නොකරන බව සරලව කියන්න “... ne radi” භාවිත කළ හැක.",
    examples: [
      { sr: "Dobar dan. Imate li slobodnu sobu?", si: "සුබ දවසක්. ඔබට හිස් කාමරයක් තිබෙනවාද?" },
      { sr: "Želim da rezervišem sobu za dve noći.", si: "මට රාත්‍රී දෙකකට කාමරයක් වෙන් කරගන්න ඕනේ." },
      { sr: "Koliko košta jedno noćenje?", si: "එක් රාත්‍රියක ගාස්තුව කීයද?" },
      { sr: "Izvinite, klima ne radi. Možete li da pomognete?", si: "සමාවෙන්න, වායුසමීකරණය වැඩ කරන්නේ නැහැ. ඔබට උදව් කරන්න පුළුවන්ද?" }
    ],
    dialogue: [
      { sr: "Dobar dan. Imate li slobodnu sobu?", si: "සුබ දවසක්. ඔබට හිස් කාමරයක් තිබෙනවාද?" },
      { sr: "Da, imamo jednokrevetnu i dvokrevetnu sobu.", si: "ඔව්, අපට තනි ඇඳක් සහිත සහ දෙදෙනෙකුට සුදුසු කාමර තිබෙනවා." },
      { sr: "Koliko košta jedno noćenje?", si: "එක් රාත්‍රියක ගාස්තුව කීයද?" },
      { sr: "Četrdeset evra po noći.", si: "රාත්‍රියකට යුරෝ හතළිහයි." },
      { sr: "U redu. Želim da rezervišem sobu za dve noći.", si: "හරි. මට රාත්‍රී දෙකකට කාමරයක් වෙන් කරගන්න ඕනේ." },
      { sr: "Naravno. Evo ključa. Internet je besplatan.", si: "අනිවාර්යයෙන්ම. මෙන්න යතුර. අන්තර්ජාලය නොමිලේ." },
      { sr: "Hvala. Izvinite, klima ne radi.", si: "ස්තුතියි. සමාවෙන්න, වායුසමීකරණය වැඩ කරන්නේ නැහැ." },
      { sr: "Odmah ćemo proveriti. Mogu li još nekako da pomognem?", si: "අපි දැන්ම පරීක්ෂා කරන්නම්. තවත් මොන විදිහකින් හරි උදව් කරන්නද?" }
    ],
    practice: [
      { prompt: "“ඔබට හිස් කාමරයක් තිබෙනවාද?” තෝරන්න.", options: ["Imate li slobodnu sobu?", "Gde je autobus?", "Koliko je sati?"], answer: 0, explanation: "Imate li ...? යනු ඔබට ... තිබෙනවාද? යන ප්‍රශ්න රටාවයි." },
      { prompt: "“එක් රාත්‍රියක ගාස්තුව කීයද?” අසන්නේ කෙසේද?", options: ["Koja je adresa?", "Koliko košta jedno noćenje?", "Gde je ključ?"], answer: 1, explanation: "Koliko košta ...? යනු ... මිල කීයද? යන්නයි." },
      { prompt: "“වායුසමීකරණය වැඩ කරන්නේ නැහැ” යන වාක්‍යය තෝරන්න.", options: ["Internet je besplatan.", "Klima ne radi.", "Imam rezervaciju."], answer: 1, explanation: "Ne radi යනු වැඩ කරන්නේ නැහැ යන්නයි." },
      { prompt: "“මට කාමරයක් වෙන් කරගන්න ඕනේ” කියන්නේ?", options: ["Želim da rezervišem sobu.", "Treba mi autobuska karta.", "Doviđenja."], answer: 0, explanation: "Želim da rezervišem sobu = මට කාමරයක් වෙන් කරගන්න ඕනේ." }
    ]
  }

  ,
  {
    id: "sr-a1-u6-l1",
    unit: "කැෆේ සහ ආහාර ඇණවුම් කිරීම",
    title: "පාඩම 11 · කැෆේ එකකින් ආහාර ඇණවුම් කිරීම",
    objective: "කැෆේ එකක මෙනුව ඉල්ලීම, ආහාර සහ පානයක් ඇණවුම් කිරීම, විශේෂ අවශ්‍යතාවක් පැවසීම සහ බිල ඉල්ලීම.",
    vocabulary: [
      { word: "Jelovnik", reading: "යෙලොව්නික්", meaning: "ආහාර මෙනුව", example: "Možete li da donesete jelovnik?", exampleReading: "මොෂෙතෙ ලි දා දොනෙසෙතෙ යෙලොව්නික්?", translation: "මෙනුව ගෙනත් දෙන්න පුළුවන්ද?" },
      { word: "Poručiti", reading: "පොරුචිතී", meaning: "ඇණවුම් කිරීම", example: "Želim da poručim hranu.", exampleReading: "ෂෙලිම් දා පොරුචිම් හ්‍රානු.", translation: "මට ආහාර ඇණවුම් කරන්න ඕනේ." },
      { word: "Kafa", reading: "කාෆා", meaning: "කෝපි", example: "Jednu kafu, molim.", exampleReading: "යෙද්නු කාෆු, මොලීම්.", translation: "කෝපි එකක්, කරුණාකර." },
      { word: "Čaj", reading: "චායි", meaning: "තේ", example: "Želim čaj bez šećera.", exampleReading: "ෂෙලිම් චායි බෙස් ෂෙචෙරා.", translation: "මට සීනි නැති තේ එකක් ඕනේ." },
      { word: "Sendvič", reading: "සෙන්ද්විච්", meaning: "සැන්ඩ්විච්", example: "Koliko košta ovaj sendvič?", exampleReading: "කොලිකො කොෂ්තා ඔවායි සෙන්ද්විච්?", translation: "මේ සැන්ඩ්විච් එක කීයද?" },
      { word: "Voda", reading: "වොදා", meaning: "වතුර", example: "Jednu vodu, molim.", exampleReading: "යෙද්නු වොදු, මොලීම්.", translation: "වතුර බෝතලයක්, කරුණාකර." },
      { word: "Bez mleka", reading: "බෙස් ම්ලෙකා", meaning: "කිරි නැතුව", example: "Kafu bez mleka, molim.", exampleReading: "කාෆු බෙස් ම්ලෙකා, මොලීම්.", translation: "කිරි නැති කෝපි එකක්, කරුණාකර." },
      { word: "Za poneti", reading: "සා පොනෙති", meaning: "ගෙන යාමට / takeaway", example: "Ovo je za poneti.", exampleReading: "ඔවො යේ සා පොනෙති.", translation: "මේක ගෙන යන්නයි." },
      { word: "Račun", reading: "රාචුන්", meaning: "බිල", example: "Račun, molim.", exampleReading: "රාචුන්, මොලීම්.", translation: "බිල දෙන්න, කරුණාකර." }
    ],
    grammarTerms: [
      { sr: "Želim da poručim ...", si: "මට ... ඇණවුම් කරන්න ඕනේ.", reading: "ෂෙලිම් දා පොරුචිම් ..." },
      { sr: "Jednu kafu, molim.", si: "කෝපි එකක්, කරුණාකර.", reading: "යෙද්නු කාෆු, මොලීම්." },
      { sr: "Da li imate ...?", si: "ඔබට ... තිබෙනවාද?", reading: "දා ලි ඉමාතෙ ...?" },
      { sr: "Za poneti ili ovde?", si: "ගෙන යන්නද නැත්නම් මෙතැනද?", reading: "සා පොනෙති ඉලි ඔව්ඩෙ?" },
      { sr: "Račun, molim.", si: "බිල දෙන්න, කරුණාකර.", reading: "රාචුන්, මොලීම්." }
    ],
    grammarTitle: "ව්‍යාකරණය · ආහාර ඇණවුම් කරන විනීත රටා",
    grammar: "ඇණවුමක් කිරීමට “Želim da poručim ...” හෝ කෙටියෙන් “... , molim” භාවිත කරන්න. Serbian භාෂාවේ සමහර නාම පද ඇණවුමකදී වෙනස් අවසානයක් ගන්නවා: “kafa” වෙනුවට “kafu”, “voda” වෙනුවට “vodu”, “jedna” වෙනුවට “jednu” කියන රූප භාවිත වෙනවා. “bez” යන්නෙන් නැතුව / රහිතව යන අර්ථය ලැබෙනවා.",
    examples: [
      { sr: "Dobar dan. Želim jednu kafu, molim.", reading: "දොබාර් දාන්. ෂෙලිම් යෙද්නු කාෆු, මොලීම්.", si: "සුබ දවසක්. මට කෝපි එකක් ඕනේ, කරුණාකර." },
      { sr: "Da li imate sendvič bez sira?", reading: "දා ලි ඉමාතෙ සෙන්ද්විච් බෙස් සීරා?", si: "ඔබට චීස් නැති සැන්ඩ්විච් එකක් තිබෙනවාද?" },
      { sr: "Jednu vodu za poneti, molim.", reading: "යෙද්නු වොදු සා පොනෙති, මොලීම්.", si: "ගෙන යන්න වතුර බෝතලයක්, කරුණාකර." },
      { sr: "Račun, molim. Hvala.", reading: "රාචුන්, මොලීම්. හ්වාලා.", si: "බිල දෙන්න, කරුණාකර. ස්තුතියි." }
    ],
    dialogue: [
      { sr: "Dobar dan! Šta želite?", reading: "දොබාර් දාන්! ෂ්තා ෂෙලිතෙ?", si: "සුබ දවසක්! ඔබට මොනවාද අවශ්‍ය?" },
      { sr: "Jednu kafu i jedan sendvič, molim.", reading: "යෙද්නු කාෆු ඉ යෙදාන් සෙන්ද්විච්, මොලීම්.", si: "කෝපි එකක් සහ සැන්ඩ්විච් එකක්, කරුණාකර." },
      { sr: "Da li želite nešto za poneti?", reading: "දා ලි ෂෙලිතෙ නෙෂ්තො සා පොනෙති?", si: "ඔබට ගෙන යන්නද අවශ්‍ය?" },
      { sr: "Da, sve je za poneti.", reading: "දා, ස්වේ යේ සා පොනෙති.", si: "ඔව්, සියල්ල ගෙන යන්නයි." },
      { sr: "U redu. Još nešto?", reading: "උ රෙදු. යෝෂ් නෙෂ්තො?", si: "හරි. තව මොනවාහරිද?" },
      { sr: "Ne, hvala. Račun, molim.", reading: "නේ, හ්වාලා. රාචුන්, මොලීම්.", si: "නැහැ, ස්තුතියි. බිල දෙන්න, කරුණාකර." }
    ],
    practice: [
      { prompt: "“මට කෝපි එකක් ඕනේ” යන ඇණවුම තෝරන්න.", options: ["Želim jednu kafu.", "Gde je stanica?", "Nemam vremena."], answer: 0, explanation: "Želim jednu kafu = මට කෝපි එකක් ඕනේ." },
      { prompt: "“ගෙන යන්න” යන අර්ථය කුමක්ද?", options: ["Bez mleka", "Za poneti", "Jelovnik"], answer: 1, explanation: "Za poneti යනු ගෙන යාමට / takeaway යන්නයි." },
      { prompt: "කිරි නැති කෝපි එකක් ඉල්ලන්නේ කොහොමද?", options: ["Kafu bez mleka, molim.", "Račun, molim.", "Dobar dan."], answer: 0, explanation: "Bez mleka = කිරි නැතුව." },
      { prompt: "කැෆේ එකක බිල ඉල්ලන නිවැරදි වාක්‍යය?", options: ["Šta želite?", "Koliko je sati?", "Račun, molim."], answer: 2, explanation: "Račun, molim = බිල දෙන්න, කරුණාකර." }
    ]
  },
  {
    id: "sr-a1-u6-l2",
    unit: "දෛනික ඉල්ලීම් සහ උදව් ලබාගැනීම",
    title: "පාඩම 12 · උදව් ඉල්ලීම සහ නොතේරුණු විට කතා කිරීම",
    objective: "ආචාරශීලීව උදව් ඉල්ලීම, නැවත කියන්න පැවසීම, හෙමින් කතා කරන්න ඉල්ලීම සහ සරල අවශ්‍යතාවක් පැහැදිලි කිරීම.",
    vocabulary: [
      { word: "Pomoć", reading: "පොමොච්", meaning: "උදව්", example: "Treba mi pomoć.", exampleReading: "ත්‍රෙබා මි පොමොච්.", translation: "මට උදව් අවශ්‍යයි." },
      { word: "Možete li da pomognete?", reading: "මොෂෙතෙ ලි දා පොමොග්නෙතෙ?", meaning: "ඔබට උදව් කරන්න පුළුවන්ද?", example: "Izvinite, možete li da pomognete?", exampleReading: "ඉස්විනිතෙ, මොෂෙතෙ ලි දා පොමොග්නෙතෙ?", translation: "සමාවෙන්න, ඔබට උදව් කරන්න පුළුවන්ද?" },
      { word: "Ponoviti", reading: "පොනොවිතී", meaning: "නැවත කියනවා", example: "Možete li da ponovite?", exampleReading: "මොෂෙතෙ ලි දා පොනොවිතෙ?", translation: "නැවත කියන්න පුළුවන්ද?" },
      { word: "Sporije", reading: "ස්පොරියේ", meaning: "වඩා හෙමින්", example: "Govorite malo sporije, molim.", exampleReading: "ගොවොරිතෙ මාලො ස්පොරියේ, මොලීම්.", translation: "කරුණාකර ටිකක් හෙමින් කතා කරන්න." },
      { word: "Razumem", reading: "රාසුමේම්", meaning: "මට තේරෙනවා", example: "Da, sada razumem.", exampleReading: "දා, සාදා රාසුමේම්.", translation: "ඔව්, දැන් මට තේරෙනවා." },
      { word: "Ne razumem", reading: "නේ රාසුමේම්", meaning: "මට තේරෙන්නේ නැහැ", example: "Izvinite, ne razumem.", exampleReading: "ඉස්විනිතෙ, නේ රාසුමේම්.", translation: "සමාවෙන්න, මට තේරෙන්නේ නැහැ." },
      { word: "Apoteka", reading: "අපොතෙකා", meaning: "ඖෂධහල", example: "Gde je najbliža apoteka?", exampleReading: "ග්දේ යේ නයිබ්ලිෂා අපොතෙකා?", translation: "ළඟම ඖෂධහල කොහෙද?" },
      { word: "Adresa", reading: "අද්‍රෙසා", meaning: "ලිපිනය", example: "Tražim ovu adresu.", exampleReading: "ත්‍රාෂිම් ඔවු අද්‍රෙසු.", translation: "මම මේ ලිපිනය හොයනවා." },
      { word: "Mapa", reading: "මාපා", meaning: "සිතියම", example: "Možete li da mi pokažete na mapi?", exampleReading: "මොෂෙතෙ ලි දා මි පොකාෂෙතෙ නා මාපි?", translation: "සිතියමේ පෙන්වන්න පුළුවන්ද?" },
      { word: "Lekar", reading: "ලෙකාර්", meaning: "වෛද්‍යවරයා", example: "Treba mi lekar.", exampleReading: "ත්‍රෙබා මි ලෙකාර්.", translation: "මට වෛද්‍යවරයෙක් අවශ්‍යයි." }
    ],
    grammarTerms: [
      { sr: "Možete li da ...?", si: "ඔබට ... කරන්න පුළුවන්ද?", reading: "මොෂෙතෙ ලි දා ...?" },
      { sr: "Možete li da ponovite?", si: "නැවත කියන්න පුළුවන්ද?", reading: "මොෂෙතෙ ලි දා පොනොවිතෙ?" },
      { sr: "Govorite malo sporije, molim.", si: "කරුණාකර ටිකක් හෙමින් කතා කරන්න.", reading: "ගොවොරිතෙ මාලො ස්පොරියේ, මොලීම්." },
      { sr: "Gde je najbliža apoteka?", si: "ළඟම ඖෂධහල කොහෙද?", reading: "ග්දේ යේ නයිබ්ලිෂා අපොතෙකා?" },
      { sr: "Treba mi ...", si: "මට ... අවශ්‍යයි.", reading: "ත්‍රෙබා මි ..." }
    ],
    grammarTitle: "ව්‍යාකරණය · විනීත ඉල්ලීම් සහ අවශ්‍යතා",
    grammar: "“Možete li da ...?” යනු “ඔබට ... කරන්න පුළුවන්ද?” යන විනීත ප්‍රශ්න රටාවයි. “Treba mi ...” යොදාගෙන තමන්ට අවශ්‍ය දෙයක් කියන්න පුළුවන්. “Ne razumem” යනු මට තේරෙන්නේ නැහැ; එයට පසුව “Možete li da ponovite?” හෝ “Govorite malo sporije, molim” කියා උදව් ඉල්ලන්න.",
    examples: [
      { sr: "Izvinite, možete li da mi pomognete?", reading: "ඉස්විනිතෙ, මොෂෙතෙ ලි දා මි පොමොග්නෙතෙ?", si: "සමාවෙන්න, ඔබට මට උදව් කරන්න පුළුවන්ද?" },
      { sr: "Ne razumem. Možete li da ponovite?", reading: "නේ රාසුමේම්. මොෂෙතෙ ලි දා පොනොවිතෙ?", si: "මට තේරෙන්නේ නැහැ. නැවත කියන්න පුළුවන්ද?" },
      { sr: "Govorite malo sporije, molim vas.", reading: "ගොවොරිතෙ මාලො ස්පොරියේ, මොලීම් වාස්.", si: "කරුණාකර ටිකක් හෙමින් කතා කරන්න." },
      { sr: "Gde je najbliža apoteka?", reading: "ග්දේ යේ නයිබ්ලිෂා අපොතෙකා?", si: "ළඟම ඖෂධහල කොහෙද?" }
    ],
    dialogue: [
      { sr: "Izvinite, možete li da mi pomognete?", reading: "ඉස්විනිතෙ, මොෂෙතෙ ලි දා මි පොමොග්නෙතෙ?", si: "සමාවෙන්න, ඔබට මට උදව් කරන්න පුළුවන්ද?" },
      { sr: "Naravno. Šta vam treba?", reading: "නාරාව්නො. ෂ්තා වාම් ත්‍රෙබා?", si: "අනිවාර්යයෙන්ම. ඔබට මොනවාද අවශ්‍ය?" },
      { sr: "Tražim ovu adresu, ali ne razumem mapu.", reading: "ත්‍රාෂිම් ඔවු අද්‍රෙසු, අලි නේ රාසුමේම් මාපු.", si: "මම මේ ලිපිනය හොයනවා, නමුත් මට සිතියම තේරෙන්නේ නැහැ." },
      { sr: "Mogu da vam pokažem. Idite pravo, pa skrenite levo.", reading: "මොගු දා වාම් පොකාෂෙම්. ඉදිතෙ ප්‍රාවො, පා ස්ක්‍රෙනිතෙ ලෙවො.", si: "මට ඔබට පෙන්වන්න පුළුවන්. කෙළින්ම ගිහින් පසුව වමට හැරෙන්න." },
      { sr: "Možete li da ponovite malo sporije?", reading: "මොෂෙතෙ ලි දා පොනොවිතෙ මාලො ස්පොරියේ?", si: "ටිකක් හෙමින් නැවත කියන්න පුළුවන්ද?" },
      { sr: "Naravno. Nema problema.", reading: "නාරාව්නො. නෙමා ප්‍රොබ්ලෙමා.", si: "අනිවාර්යයෙන්ම. ප්‍රශ්නයක් නැහැ." }
    ],
    practice: [
      { prompt: "“මට තේරෙන්නේ නැහැ” කියන වාක්‍යය තෝරන්න.", options: ["Razumem.", "Ne razumem.", "Hvala puno."], answer: 1, explanation: "Ne razumem = මට තේරෙන්නේ නැහැ." },
      { prompt: "“නැවත කියන්න පුළුවන්ද?” අසන්නේ කොහොමද?", options: ["Možete li da ponovite?", "Gde je apoteka?", "Koliko košta?"], answer: 0, explanation: "Možete li da ponovite? යනු නැවත කියන්න පුළුවන්ද? යන්නයි." },
      { prompt: "“මට වෛද්‍යවරයෙක් අවශ්‍යයි” තෝරන්න.", options: ["Treba mi lekar.", "Treba mi mapa.", "Treba mi voda."], answer: 0, explanation: "Treba mi lekar = මට වෛද්‍යවරයෙක් අවශ්‍යයි." },
      { prompt: "කෙනෙකුට ටිකක් හෙමින් කතා කරන්න කියන්නේ?", options: ["Govorite malo sporije, molim.", "Vidimo se sutra.", "Račun, molim."], answer: 0, explanation: "Govorite malo sporije, molim = කරුණාකර ටිකක් හෙමින් කතා කරන්න." }
    ]
  }

];