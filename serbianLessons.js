// Structured Serbian A1 lesson content. Sinhala explanations are the teaching language.
export const SERBIAN_A1_LESSONS = [
{
    id: "sr-a1-u1-l1",
    unit: "ආචාර කිරීම සහ හැඳින්වීම",
    title: "පාඩම 1 · ආචාර කිරීම සහ තමන්ව හඳුන්වාදීම",
    objective: "සරලව ආචාර කිරීම, නම කියීම සහ කෙනෙකුගේ නම විමසීම",
    vocabulary: [
      { word: "Zdravo", reading: "ස්ද්‍රාවො", meaning: "හෙලෝ / ආයුබෝවන්", example: "Zdravo, Ana!", translation: "හෙලෝ, ආනා!" },
      { word: "Dobar dan", reading: "දොබාර් දාන්", meaning: "සුබ දවසක්", example: "Dobar dan!", translation: "සුබ දවසක්!" },
      { word: "Kako se zoveš?", reading: "කාකො සේ සොවේෂ්", meaning: "ඔයාගේ නම මොකක්ද?", example: "Kako se zoveš?", translation: "ඔයාගේ නම මොකක්ද?" },
      { word: "Zovem se Marko.", reading: "සොවෙම් සේ මාර්කො", meaning: "මගේ නම මාර්කෝ.", example: "Zdravo, zovem se Marko.", translation: "හෙලෝ, මගේ නම මාර්කෝ." },
      { word: "Drago mi je.", reading: "ද්‍රාගො මි යේ", meaning: "ඔයාව හමුවීම සතුටක්.", example: "Drago mi je, Ana.", translation: "ඔයාව හමුවීම සතුටක්, ආනා." },
      { word: "Kako si?", reading: "කාකො සී", meaning: "ඔයාට කොහොමද?", example: "Zdravo! Kako si?", translation: "හෙලෝ! ඔයාට කොහොමද?" }
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
      { word: "Dobro jutro", reading: "දොබ්‍රො යූත්‍රො", meaning: "සුබ උදෑසනක්", example: "Dobro jutro, svima.", translation: "හැමෝටම සුබ උදෑසනක්." },
      { word: "Dobar dan", reading: "දොබාර් දාන්", meaning: "සුබ දවසක්", example: "Dobar dan, gospodine.", translation: "සුබ දවසක් මහත්මයා." },
      { word: "Dobro veče", reading: "දොබ්‍රො වෙචෙ", meaning: "සුබ සන්ධ්‍යාවක්", example: "Dobro veče, Ana.", translation: "සුබ සන්ධ්‍යාවක්, ආනා." },
      { word: "Laku noć", reading: "ලාකු නොච්", meaning: "සුබ රාත්‍රියක්", example: "Laku noć!", translation: "සුබ රාත්‍රියක්!" },
      { word: "Hvala", reading: "හ්වාලා", meaning: "ස්තුතියි", example: "Hvala puno.", translation: "බොහොම ස්තුතියි." },
      { word: "Molim", reading: "මොලීම්", meaning: "කරුණාකර / ඔබට සාදරයෙන්", example: "Molim vas.", translation: "කරුණාකර." },
      { word: "Doviđenja", reading: "දොවිජෙන්‍යා", meaning: "ගිහින් එන්නම් / නැවත හමුවෙමු (විධිමත්)", example: "Doviđenja i hvala.", translation: "නැවත හමුවෙමු, ස්තුතියි." }
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
      "word": "Želim kafu.", "reading": "ෂෙලිම් කාෆු",
      "meaning": "මට කෝපි එකක් ඕනේ.",
      "example": "Dobar dan, želim kafu.",
      "translation": "සුබ දවසක්, මට කෝපි එකක් ඕනේ."
    },
    {
      "word": "Vodu, molim.", "reading": "වොදු, මොලීම්",
      "meaning": "වතුර එකක්, කරුණාකර.",
      "example": "Vodu, molim.",
      "translation": "වතුර එකක්, කරුණාකර."
    },
    {
      "word": "Jelovnik", "reading": "යෙලොව්නික්",
      "meaning": "ආහාර මෙනුව",
      "example": "Mogu li da dobijem jelovnik?",
      "translation": "මට ආහාර මෙනුව ලබාගන්න පුළුවන්ද?"
    },
    {
      "word": "Koliko košta?", "reading": "කොලිකො කොෂ්තා",
      "meaning": "කීයද? / මිල කීයද?",
      "example": "Koliko košta kafa?",
      "translation": "කෝපි එකක මිල කීයද?"
    },
    {
      "word": "Račun, molim.", "reading": "රාචුන්, මොලීම්",
      "meaning": "බිල දෙන්න, කරුණාකර.",
      "example": "Račun, molim.",
      "translation": "බිල දෙන්න, කරුණාකර."
    },
    {
      "word": "Još nešto?", "reading": "යොෂ් නෙෂ්තො",
      "meaning": "තව මොනවාහරිද?",
      "example": "Želite li još nešto?",
      "translation": "ඔබට තව මොනවාහරි අවශ්‍යද?"
    },
    {
      "word": "Bez šećera", "reading": "බෙස් ෂෙචෙරා",
      "meaning": "සීනි නැතුව",
      "example": "Kafu bez šećera, molim.",
      "translation": "සීනි නැති කෝපි එකක්, කරුණාකර."
    },
    {
      "word": "Ukusno", "reading": "උකුස්නො",
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
      "word": "Nula", "reading": "නුලා",
      "meaning": "බිංදුව",
      "example": "Broj nula.",
      "translation": "අංකය: බිංදුව."
    },
    {
      "word": "Jedan", "reading": "යෙදාන්",
      "meaning": "එක",
      "example": "Broj jedan.",
      "translation": "අංකය: එක."
    },
    {
      "word": "Dva", "reading": "ද්වා",
      "meaning": "දෙක",
      "example": "Broj dva.",
      "translation": "අංකය: දෙක."
    },
    {
      "word": "Tri", "reading": "ත්‍රි",
      "meaning": "තුන",
      "example": "Broj tri.",
      "translation": "අංකය: තුන."
    },
    {
      "word": "Četiri", "reading": "චෙතිරි",
      "meaning": "හතර",
      "example": "Broj četiri.",
      "translation": "අංකය: හතර."
    },
    {
      "word": "Pet", "reading": "පෙත්",
      "meaning": "පහ",
      "example": "Broj pet.",
      "translation": "අංකය: පහ."
    },
    {
      "word": "Šest", "reading": "ෂෙස්ත්",
      "meaning": "හය",
      "example": "Broj šest.",
      "translation": "අංකය: හය."
    },
    {
      "word": "Sedam", "reading": "සෙදාම්",
      "meaning": "හත",
      "example": "Broj sedam.",
      "translation": "අංකය: හත."
    },
    {
      "word": "Osam", "reading": "ඔසාම්",
      "meaning": "අට",
      "example": "Broj osam.",
      "translation": "අංකය: අට."
    },
    {
      "word": "Devet", "reading": "දෙවෙත්",
      "meaning": "නවය",
      "example": "Broj devet.",
      "translation": "අංකය: නවය."
    },
    {
      "word": "Deset", "reading": "දෙසෙත්",
      "meaning": "දහය",
      "example": "Broj deset.",
      "translation": "අංකය: දහය."
    },
    {
      "word": "Jedanaest", "reading": "යෙදානෙස්ත්",
      "meaning": "එකොළහ",
      "example": "Broj jedanaest.",
      "translation": "අංකය: එකොළහ."
    },
    {
      "word": "Dvanaest", "reading": "ද්වානෙස්ත්",
      "meaning": "දොළහ",
      "example": "Broj dvanaest.",
      "translation": "අංකය: දොළහ."
    },
    {
      "word": "Trinaest", "reading": "ත්‍රිනෙස්ත්",
      "meaning": "දහතුන",
      "example": "Broj trinaest.",
      "translation": "අංකය: දහතුන."
    },
    {
      "word": "Četrnaest", "reading": "චෙත්ර්නෙස්ත්",
      "meaning": "දාහතර",
      "example": "Broj četrnaest.",
      "translation": "අංකය: දාහතර."
    },
    {
      "word": "Petnaest", "reading": "පෙත්නෙස්ත්",
      "meaning": "පහළොව",
      "example": "Broj petnaest.",
      "translation": "අංකය: පහළොව."
    },
    {
      "word": "Šesnaest", "reading": "ෂෙස්නෙස්ත්",
      "meaning": "දහසය",
      "example": "Broj šesnaest.",
      "translation": "අංකය: දහසය."
    },
    {
      "word": "Sedamnaest", "reading": "සෙදාම්නෙස්ත්",
      "meaning": "දාහත",
      "example": "Broj sedamnaest.",
      "translation": "අංකය: දාහත."
    },
    {
      "word": "Osamnaest", "reading": "ඔසාම්නෙස්ත්",
      "meaning": "දහඅට",
      "example": "Broj osamnaest.",
      "translation": "අංකය: දහඅට."
    },
    {
      "word": "Devetnaest", "reading": "දෙවෙත්නෙස්ත්",
      "meaning": "දහනවය",
      "example": "Broj devetnaest.",
      "translation": "අංකය: දහනවය."
    },
    {
      "word": "Dvadeset", "reading": "ද්වාදෙසෙත්",
      "meaning": "විස්ස",
      "example": "Broj dvadeset.",
      "translation": "අංකය: විස්ස."
    },
    {
      "word": "Trideset", "reading": "ත්‍රිදෙසෙත්",
      "meaning": "තිහ",
      "example": "Broj trideset.",
      "translation": "අංකය: තිහ."
    },
    {
      "word": "Četrdeset", "reading": "චෙත්ර්දෙසෙත්",
      "meaning": "හතළිහ",
      "example": "Broj četrdeset.",
      "translation": "අංකය: හතළිහ."
    },
    {
      "word": "Pedeset", "reading": "පෙදෙසෙත්",
      "meaning": "පනහ",
      "example": "Broj pedeset.",
      "translation": "අංකය: පනහ."
    },
    {
      "word": "Šezdeset", "reading": "ෂෙස්දෙසෙත්",
      "meaning": "හැට",
      "example": "Broj šezdeset.",
      "translation": "අංකය: හැට."
    },
    {
      "word": "Sedamdeset", "reading": "සෙදාම්දෙසෙත්",
      "meaning": "හැත්තෑව",
      "example": "Broj sedamdeset.",
      "translation": "අංකය: හැත්තෑව."
    },
    {
      "word": "Osamdeset", "reading": "ඔසාම්දෙසෙත්",
      "meaning": "අසූව",
      "example": "Broj osamdeset.",
      "translation": "අංකය: අසූව."
    },
    {
      "word": "Devedeset", "reading": "දෙවෙදෙසෙත්",
      "meaning": "අනූව",
      "example": "Broj devedeset.",
      "translation": "අංකය: අනූව."
    },
    {
      "word": "Sto", "reading": "ස්තො",
      "meaning": "සියය",
      "example": "Broj sto.",
      "translation": "අංකය: සියය."
    },
    {
      "word": "Dvesta", "reading": "ද්වෙස්තා",
      "meaning": "දෙසියය",
      "example": "Broj dvesta.",
      "translation": "අංකය: දෙසියය."
    },
    {
      "word": "Trista", "reading": "ත්‍රිස්තා",
      "meaning": "තුන්සියය",
      "example": "Broj trista.",
      "translation": "අංකය: තුන්සියය."
    },
    {
      "word": "Četiristo", "reading": "චෙතිරිස්තො",
      "meaning": "හාරසියය",
      "example": "Broj četiristo.",
      "translation": "අංකය: හාරසියය."
    },
    {
      "word": "Petsto", "reading": "පෙත්ස්තො",
      "meaning": "පන්සියය",
      "example": "Broj petsto.",
      "translation": "අංකය: පන්සියය."
    },
    {
      "word": "Šeststo", "reading": "ෂෙස්ත්ස්තො",
      "meaning": "හයසියය",
      "example": "Broj šeststo.",
      "translation": "අංකය: හයසියය."
    },
    {
      "word": "Sedamsto", "reading": "සෙදාම්ස්තො",
      "meaning": "හත්සියය",
      "example": "Broj sedamsto.",
      "translation": "අංකය: හත්සියය."
    },
    {
      "word": "Osamsto", "reading": "ඔසාම්ස්තො",
      "meaning": "අටසියය",
      "example": "Broj osamsto.",
      "translation": "අංකය: අටසියය."
    },
    {
      "word": "Devetsto", "reading": "දෙවෙත්ස්තො",
      "meaning": "නවසියය",
      "example": "Broj devetsto.",
      "translation": "අංකය: නවසියය."
    },
    {
      "word": "Hiljadu", "reading": "හිල්යාදු",
      "meaning": "දහස",
      "example": "Broj hiljadu.",
      "translation": "අංකය: දහස."
    },
    {
      "word": "Deset hiljada", "reading": "දෙසෙත් හිල්යාදා",
      "meaning": "දසදහස (10,000)",
      "example": "Deset hiljada dinara.",
      "translation": "ඩිනාර් දසදහසක්."
    },
    {
      "word": "Pedeset hiljada", "reading": "පෙදෙසෙත් හිල්යාදා",
      "meaning": "පනස්දහස (50,000)",
      "example": "Pedeset hiljada dinara.",
      "translation": "ඩිනාර් පනස්දහසක්."
    },
    {
      "word": "Sto hiljada", "reading": "ස්තො හිල්යාදා",
      "meaning": "ලක්ෂය (100,000)",
      "example": "Sto hiljada dinara.",
      "translation": "ඩිනාර් ලක්ෂයක්."
    },
    {
      "word": "Dvesta hiljada", "reading": "ද්වෙස්තා හිල්යාදා",
      "meaning": "දෙලක්ෂය (200,000)",
      "example": "Dvesta hiljada dinara.",
      "translation": "ඩිනාර් දෙලක්ෂයක්."
    },
    {
      "word": "Petsto hiljada", "reading": "පෙත්ස්තො හිල්යාදා",
      "meaning": "පන්ලක්ෂය (500,000)",
      "example": "Petsto hiljada dinara.",
      "translation": "ඩිනාර් පන්ලක්ෂයක්."
    },
    {
      "word": "Milion", "reading": "මිලියොන්",
      "meaning": "මිලියනය (1,000,000)",
      "example": "Jedan milion dinara.",
      "translation": "ඩිනාර් මිලියනයක්."
    },
    {
      "word": "Dva miliona", "reading": "ද්වා මිලියොනා",
      "meaning": "මිලියන දෙක (2,000,000)",
      "example": "Dva miliona dinara.",
      "translation": "ඩිනාර් මිලියන දෙකක්."
    },
    {
      "word": "Pet miliona", "reading": "පෙත් මිලියොනා",
      "meaning": "මිලියන පහ (5,000,000)",
      "example": "Pet miliona dinara.",
      "translation": "ඩිනාර් මිලියන පහක්."
    },
    {
      "word": "Deset miliona", "reading": "දෙසෙත් මිලියොනා",
      "meaning": "මිලියන දහය (10,000,000)",
      "example": "Deset miliona dinara.",
      "translation": "ඩිනාර් මිලියන දහයක්."
    },
    {
      "word": "Sto miliona", "reading": "ස්තො මිලියොනා",
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
      { "word": "Jabuka", "reading": "යාබුකා", "meaning": "ඇපල් ගෙඩියක්", "example": "Želim jabuke.", "translation": "මට ඇපල් ඕනේ." },
      { "word": "Paradajz", "reading": "පරාදායිස්", "meaning": "තක්කාලි", "example": "Koliko košta paradajz?", "translation": "තක්කාලිවල මිල කීයද?" },
      { "word": "Krompir", "reading": "ක්‍රොම්පීර්", "meaning": "අර්තාපල්", "example": "Treba mi krompir.", "translation": "මට අර්තාපල් අවශ්‍යයි." },
      { "word": "Kilogram", "reading": "කිලොග්‍රාම්", "meaning": "කිලෝග්‍රෑම් එකක්", "example": "Jedan kilogram jabuka, molim.", "translation": "ඇපල් කිලෝග්‍රෑම් එකක්, කරුණාකර." },
      { "word": "Pola kilograma", "reading": "පොලා කිලොග්‍රාමා", "meaning": "කිලෝග්‍රෑම් භාගයක්", "example": "Pola kilograma paradajza.", "translation": "තක්කාලි කිලෝග්‍රෑම් භාගයක්." },
      { "word": "Litar", "reading": "ලිතාර්", "meaning": "ලීටරයක්", "example": "Jedan litar mleka.", "translation": "කිරි ලීටරයක්." },
      { "word": "Dajte mi, molim vas.", "reading": "දායිතෙ මි, මොලීම් වාස්", "meaning": "මට දෙන්න, කරුණාකර.", "example": "Dajte mi dva kilograma krompira, molim vas.", "translation": "මට අර්තාපල් කිලෝග්‍රෑම් දෙකක් දෙන්න, කරුණාකර." },
      { "word": "Koliko košta?", "reading": "කොලිකො කොෂ්තා", "meaning": "මිල කීයද?", "example": "Koliko košta kilogram jabuka?", "translation": "ඇපල් කිලෝග්‍රෑම් එකක මිල කීයද?" },
      { "word": "Ukupno", "reading": "උකුප්නො", "meaning": "මුළු එකතුව", "example": "Koliko je ukupno?", "translation": "මුළු එකතුව කීයද?" }
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
  ,{
    id: "sr-a1-u3-l1",
    unit: "රැකියාව සහ වැඩබිම",
    title: "පාඩම 6 · වැඩබිමේ සන්නිවේදනය",
    objective: "තම රැකියාව සහ වැඩබිම හඳුන්වාදීම, වැඩ කරන වේලාව කියීම, උපදෙස් නොතේරුණහොත් නැවත අසීම සහ උදව් ඉල්ලීම.",
    vocabulary: [
      { word: "Radim ovde.", reading: "රාදිම් ඔව්දෙ", meaning: "මම මෙහි වැඩ කරනවා.", example: "Radim ovde svaki dan.", translation: "මම හැමදාම මෙහි වැඩ කරනවා." },
      { word: "Gde radite?", reading: "ග්දේ රාදිතෙ", meaning: "ඔබ කොහෙද වැඩ කරන්නේ?", example: "Izvinite, gde radite?", translation: "සමාවෙන්න, ඔබ කොහෙද වැඩ කරන්නේ?" },
      { word: "Radno vreme", reading: "රාද්නො ව්‍රෙමෙ", meaning: "වැඩ කරන වේලාව", example: "Koje je radno vreme?", translation: "වැඩ කරන වේලාව කුමක්ද?" },
      { word: "Smena", reading: "ස්මෙනා", meaning: "වැඩ මුරය", example: "Moja smena počinje u osam.", translation: "මගේ වැඩ මුරය අටට පටන් ගන්නවා." },
      { word: "Kolega / koleginica", reading: "කොලෙගා / කොලෙගිනිත්සා", meaning: "සහකාර සේවකයා / සේවිකාව", example: "Moj kolega je ovde.", translation: "මගේ සහකාර සේවකයා මෙහි ඉන්නවා." },
      { word: "Šef / šefica", reading: "ෂෙෆ් / ෂෙෆිත්සා", meaning: "ප්‍රධානියා (පිරිමි / කාන්තා)", example: "Gde je šef?", translation: "ප්‍රධානියා කොහෙද?" },
      { word: "Treba mi pomoć.", reading: "ත්‍රෙබා මි පොමොච්", meaning: "මට උදව් අවශ්‍යයි.", example: "Treba mi pomoć, molim vas.", translation: "කරුණාකර මට උදව් අවශ්‍යයි." },
      { word: "Možete li da ponovite?", reading: "මොෂෙතෙ ලි දා පොනොවිතෙ", meaning: "ඔබට නැවත කියන්න පුළුවන්ද?", example: "Izvinite, možete li da ponovite?", translation: "සමාවෙන්න, ඔබට නැවත කියන්න පුළුවන්ද?" },
      { word: "Razumem.", reading: "රාසුමෙම්", meaning: "මට තේරෙනවා.", example: "Da, razumem zadatak.", translation: "ඔව්, මට කාර්යය තේරෙනවා." },
      { word: "Ne razumem.", reading: "නෙ රාසුමෙම්", meaning: "මට තේරෙන්නේ නැහැ.", example: "Izvinite, ne razumem.", translation: "සමාවෙන්න, මට තේරෙන්නේ නැහැ." }
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

  ,{
    id: "sr-a1-u3-l2",
    unit: "රැකියාව සහ වැඩබිම",
    title: "පාඩම 7 · රැකියා සහ වෘත්තීන්",
    objective: "තම රැකියාව හඳුන්වාදීම, වෙනත් කෙනෙකුගේ රැකියාව විමසීම සහ වෘත්තීන්හි පිරිමි/කාන්තා නාම හඳුනාගැනීම.",
    vocabulary: [
      { word: "Zanimanje", reading: "සානිමාන්‍යෙ", meaning: "රැකියාව / වෘත්තිය", example: "Koje je vaše zanimanje?", translation: "ඔබගේ රැකියාව කුමක්ද?" },
      { word: "Konobar / konobarica", reading: "කොනොබාර් / කොනොබාරිත්සා", meaning: "වේටර් / වේටර්වරිය", example: "Ja sam konobar.", translation: "මම වේටර්වරයෙක්." },
      { word: "Kuvar / kuvarica", reading: "කුවාර් / කුවාරිත්සා", meaning: "අරක්කැමි / අරක්කැමිවරිය", example: "Ona je kuvarica.", translation: "ඇය අරක්කැමිවරියක්." },
      { word: "Vozač / vozačica", reading: "වොසාච් / වොසාචිත්සා", meaning: "රියදුරු (පිරිමි / කාන්තා)", example: "Moj otac je vozač.", translation: "මගේ පියා රියදුරෙක්." },
      { word: "Prodavac / prodavačica", reading: "ප්‍රොදාවාත්ස් / ප්‍රොදාවාචිත්සා", meaning: "විකුණුම් සේවකයා / සේවිකාව", example: "Ona je prodavačica.", translation: "ඇය විකුණුම් සේවිකාවක්." },
      { word: "Radnik / radnica", reading: "රාද්නික් / රාද්නිත්සා", meaning: "සේවකයා / සේවිකාව", example: "On je radnik.", translation: "ඔහු සේවකයෙක්." },
      { word: "Nastavnik / nastavnica", reading: "නස්තාව්නික් / නස්තාව්නිත්සා", meaning: "ගුරුවරයා / ගුරුවරිය", example: "Ona je nastavnica.", translation: "ඇය ගුරුවරියක්." },
      { word: "Lekar / lekarka", reading: "ලෙකාර් / ලෙකාර්කා", meaning: "වෛද්‍යවරයා / වෛද්‍යවරිය", example: "Moj brat je lekar.", translation: "මගේ සහෝදරයා වෛද්‍යවරයෙක්." },
      { word: "Student / studentkinja", reading: "ස්තුදෙන්ත් / ස්තුදෙන්ත්කින්‍යා", meaning: "ශිෂ්‍යයා / ශිෂ්‍යාව", example: "Ja sam student.", translation: "මම ශිෂ්‍යයෙක්." },
      { word: "Programer / programerka", reading: "ප්‍රොග්‍රාමෙර් / ප්‍රොග්‍රාමෙර්කා", meaning: "මෘදුකාංග සංවර්ධකයා / සංවර්ධිකාව", example: "On je programer.", translation: "ඔහු මෘදුකාංග සංවර්ධකයෙක්." }
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
  ,{
    id: "sr-a1-u4-l1",
    unit: "ගමන් මඟ සහ ප්‍රවාහනය",
    title: "පාඩම 8 · මාර්ගය සහ ප්‍රවාහනය විමසීම",
    objective: "ස්ථානයක් කොහෙදැයි අසන්න, සරල මාර්ග උපදෙස් තේරුම්ගන්න සහ බස්/දුම්රිය භාවිතයට අවශ්‍ය වාක්‍ය කියන්න.",
    vocabulary: [
      { word: "Gde je ...?", reading: "ග්දේ යේ", meaning: "... කොහෙද?", example: "Gde je autobuska stanica?", translation: "බස් නැවතුම්පොළ කොහෙද?" },
      { word: "Levo", reading: "ලෙවො", meaning: "වමට", example: "Skrenite levo.", translation: "වමට හැරෙන්න." },
      { word: "Desno", reading: "දෙස්නො", meaning: "දකුණට", example: "Skrenite desno.", translation: "දකුණට හැරෙන්න." },
      { word: "Pravo", reading: "ප්‍රාවො", meaning: "කෙළින්ම", example: "Idite pravo.", translation: "කෙළින්ම යන්න." },
      { word: "Blizu", reading: "බ්ලිසු", meaning: "ළඟ", example: "Stanica je blizu.", translation: "නැවතුම්පොළ ළඟයි." },
      { word: "Daleko", reading: "දලෙකො", meaning: "දුර", example: "Da li je centar daleko?", translation: "නගර මධ්‍යස්ථානය දුරද?" },
      { word: "Autobuska stanica", reading: "ආවුතොබුස්කා ස්තානිත්සා", meaning: "බස් නැවතුම්පොළ", example: "Gde je autobuska stanica?", translation: "බස් නැවතුම්පොළ කොහෙද?" },
      { word: "Železnička stanica", reading: "ෂෙලෙස්නිච්කා ස්තානිත්සා", meaning: "දුම්රිය ස්ථානය", example: "Železnička stanica je tamo.", translation: "දුම්රිය ස්ථානය එතැනයි." },
      { word: "Karta", reading: "කාර්තා", meaning: "ටිකට්පත", example: "Jednu kartu, molim.", translation: "එක ටිකට්පතක්, කරුණාකර." },
      { word: "Autobus", reading: "ආවුතොබුස්", meaning: "බස් රථය", example: "Kada dolazi autobus?", translation: "බස් රථය එන්නේ කීයටද?" }
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
  ,{
    id: "sr-a1-u4-l2",
    unit: "ගමන් මඟ සහ ප්‍රවාහනය",
    title: "පාඩම 9 · හමුවීම් වේලාව සහ ප්‍රවාහන කාලසටහන්",
    objective: "හමුවීමක් සඳහා වේලාවක් නියම කිරීම, වේලාව වෙනස් කිරීම සහ බස්/දුම්රිය පිටත්වන වේලාව විමසීම.",
    vocabulary: [
      { word: "Termin", reading: "තෙර්මින්", meaning: "නියමිත හමුවීම / වේලාව", example: "Imam termin u deset.", translation: "මට දහයට හමුවීමක් තිබෙනවා." },
      { word: "Zakazati termin", reading: "සාකාසාති තෙර්මින්", meaning: "හමුවීමක් වේලාවක් වෙන් කරගැනීම", example: "Želim da zakažem termin.", translation: "මට හමුවීමක් සඳහා වේලාවක් වෙන් කරගන්න ඕනේ." },
      { word: "U koliko sati?", reading: "උ කොලිකො සාති", meaning: "කීයටද?", example: "U koliko sati je sastanak?", translation: "රැස්වීම කීයටද?" },
      { word: "Danas", reading: "දනාස්", meaning: "අද", example: "Imam termin danas.", translation: "මට අද හමුවීමක් තිබෙනවා." },
      { word: "Sutra", reading: "සුත්‍රා", meaning: "හෙට", example: "Može li sutra?", translation: "හෙට පුළුවන්ද?" },
      { word: "Odložiti", reading: "ඔද්ලොෂිති", meaning: "කල් දැමීම", example: "Moram da odložim termin.", translation: "මට හමුවීම කල් දමන්න වෙනවා." },
      { word: "Polazak", reading: "පොලාසාක්", meaning: "පිටත්වීම", example: "Vreme polaska je u osam.", translation: "පිටත්වන වේලාව අටයි." },
      { word: "Kada polazi autobus?", reading: "කාදා පොලාසි ආවුතොබුස්", meaning: "බස් රථය පිටත් වෙන්නේ කීයටද?", example: "Kada polazi autobus za centar?", translation: "නගර මධ්‍යස්ථානයට යන බස් රථය පිටත් වෙන්නේ කීයටද?" },
      { word: "Kašnjenje", reading: "කාෂ්න්‍යෙන්‍යෙ", meaning: "ප්‍රමාදය", example: "Autobus ima kašnjenje.", translation: "බස් රථය ප්‍රමාදයි." },
      { word: "Red vožnje", reading: "රෙද් වොෂ්න්‍යෙ", meaning: "ගමන් කාලසටහන", example: "Gde je red vožnje?", translation: "ගමන් කාලසටහන කොහෙද?" },
      { word: "Povratna karta", reading: "පොව්‍රාත්නා කාර්තා", meaning: "ආපසු ගමන් ටිකට්පත", example: "Jednu povratnu kartu, molim.", translation: "ආපසු ගමන් ටිකට්පතක්, කරුණාකර." }
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

  ,{
    id: "sr-a1-u5-l1",
    unit: "දෛනික සේවා සහ නවාතැන්",
    title: "පාඩම 10 · නවාතැන් සහ දෛනික සේවා",
    objective: "හෝටලයක කාමරයක් විමසීම, වෙන් කිරීම, ලිපිනය/සේවා පහසුකම් ගැන අසීම සහ ගැටලුවක් පැහැදිලි කිරීම.",
    vocabulary: [
      { word: "Soba", reading: "සොබා", meaning: "කාමරය", example: "Imate li slobodnu sobu?", translation: "ඔබට හිස් කාමරයක් තිබෙනවාද?" },
      { word: "Slobodna soba", reading: "ස්ලොබොද්නා සොබා", meaning: "හිස් කාමරයක්", example: "Treba mi slobodna soba.", translation: "මට හිස් කාමරයක් අවශ්‍යයි." },
      { word: "Rezervacija", reading: "රෙසෙර්වාත්සියා", meaning: "වෙන් කිරීම / වෙන්කිරීමේ වාර්තාව", example: "Imam rezervaciju.", translation: "මට වෙන් කිරීමක් තිබෙනවා." },
      { word: "Jednokrevetna soba", reading: "යෙද්නොක්‍රෙවෙත්නා සොබා", meaning: "තනි ඇඳක් සහිත කාමරය", example: "Želim jednokrevetnu sobu.", translation: "මට තනි ඇඳක් සහිත කාමරයක් අවශ්‍යයි." },
      { word: "Dvokrevetna soba", reading: "ද්වොක්‍රෙවෙත්නා සොබා", meaning: "දෙදෙනෙකුට සුදුසු කාමරය", example: "Da li imate dvokrevetnu sobu?", translation: "ඔබට දෙදෙනෙකුට සුදුසු කාමරයක් තිබෙනවාද?" },
      { word: "Noćenje", reading: "නොචෙන්‍යෙ", meaning: "රාත්‍රියක් නවාතැන් ගැනීම", example: "Koliko košta jedno noćenje?", translation: "එක් රාත්‍රියක නවාතැන් ගාස්තුව කීයද?" },
      { word: "Adresa", reading: "අද්‍රෙසා", meaning: "ලිපිනය", example: "Koja je vaša adresa?", translation: "ඔබගේ ලිපිනය කුමක්ද?" },
      { word: "Ključ", reading: "ක්ල්යුච්", meaning: "යතුර", example: "Gde je ključ od sobe?", translation: "කාමරයේ යතුර කොහෙද?" },
      { word: "Internet", reading: "ඉන්ටර්නෙත්", meaning: "අන්තර්ජාලය", example: "Da li imate internet?", translation: "ඔබට අන්තර්ජාල පහසුකම් තිබෙනවාද?" },
      { word: "Ne radi", reading: "නෙ රාදි", meaning: "වැඩ කරන්නේ නැහැ", example: "Klima ne radi.", translation: "වායුසමීකරණය වැඩ කරන්නේ නැහැ." },
      { word: "Pomoć", reading: "පොමොච්", meaning: "උදව්", example: "Možete li da mi pomognete?", translation: "ඔබට මට උදව් කරන්න පුළුවන්ද?" }
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

  ,{
    id: "sr-a1-u6-l1",
    unit: "කැෆේ සහ ආහාර ඇණවුම් කිරීම",
    title: "පාඩම 11 · කැෆේ එකකින් ආහාර ඇණවුම් කිරීම",
    objective: "කැෆේ එකක මෙනුව ඉල්ලීම, ආහාර සහ පානයක් ඇණවුම් කිරීම, විශේෂ අවශ්‍යතාවක් පැවසීම සහ බිල ඉල්ලීම.",
    vocabulary: [
      { word: "Jelovnik", reading:"යෙදුනු කාෆු ඉ යෙදාන් සෙන්ද්විච්, මොලිම්.", meaning: "ආහාර මෙනුව", example: "Možete li da donesete jelovnik?", exampleReading: "මොෂෙතෙ ලි දා දොනෙසෙතෙ යෙලොව්නික්?", translation: "මෙනුව ගෙනත් දෙන්න පුළුවන්ද?" },
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
    ],
 listeningPractice:{"prompt":"Slušaj i izaberi tačno značenje: „Jednu kafu i jedan sendvič, molim.”","audio":"Jednu kafu i jedan sendvič, molim.","reading":"යෙදුනු කාෆු ඉ යෙදාන් සෙන්ද්විච්, මොලිම්.","options":["කෝපි එකක් සහ සැන්ඩ්විච් එකක්, කරුණාකර.","මට බස් ටිකට් දෙකක් ඕනෑ.","කරුණාකර බිල ගෙනෙන්න."],"answer":0,"meaning":"කෝපි එකක් සහ සැන්ඩ්විච් එකක්, කරුණාකර."},
},
{
    id: "sr-a1-u6-l2",
    unit: "දෛනික ඉල්ලීම් සහ උදව් ලබාගැනීම",
    title: "පාඩම 12 · උදව් ඉල්ලීම සහ නොතේරුණු විට කතා කිරීම",
    objective: "ආචාරශීලීව උදව් ඉල්ලීම, නැවත කියන්න පැවසීම, හෙමින් කතා කරන්න ඉල්ලීම සහ සරල අවශ්‍යතාවක් පැහැදිලි කිරීම.",
    vocabulary: [
      { word: "Pomoć", reading:"මොෂෙතෙ ලි දා පොනොවිතෙ?", meaning: "උදව්", example: "Treba mi pomoć.", exampleReading: "ත්‍රෙබා මි පොමොච්.", translation: "මට උදව් අවශ්‍යයි." },
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
    ],
 listeningPractice:{"prompt":"Slušaj i izaberi tačno značenje: „Možete li da ponovite?”","audio":"Možete li da ponovite?","reading":"මොෂෙතෙ ලි දා පොනොවිතෙ?","options":["ඔබට එය නැවත කියන්න පුළුවන්ද?","මට ලිපිනය ලියන්න.","ඖෂධහල කොහෙද?"],"answer":0,"meaning":"ඔබට එය නැවත කියන්න පුළුවන්ද?"},
}

 ,{
  id:"sr-a1-u6-l3",
  unit:"වෙළඳපොළ සහ ප්‍රමාණ",
  title:"පාඩම 13 · වෙළඳපොළේ පලතුරු සහ එළවළු මිලදී ගැනීම",
  objective:"වෙළඳපොළක පලතුරු හා එළවළු ඉල්ලීම, කිලෝ ප්‍රමාණ පැවසීම, මිල විමසීම සහ මිලදී ගැනීම අවසන් කිරීම.",
  vocabulary:[
   {word:"Kilogram",reading:"යෙදාන් කිලොග්‍රාම් යබුකා, මොලිම්.",meaning:"කිලෝග්‍රෑමය",example:"Jedan kilogram jabuka, molim.",exampleReading:"යෙදාන් කිලොග්‍රාම් යාබුකා, මොලීම්.",translation:"ඇපල් කිලෝ එකක්, කරුණාකර."},
   {word:"Pola kilograma",reading:"පොලා කිලොග්‍රාමා",meaning:"කිලෝ භාගයක්",example:"Pola kilograma paradajza, molim.",exampleReading:"පොලා කිලොග්‍රාමා පරදායිසා, මොලීම්.",translation:"තක්කාලි කිලෝ භාගයක්, කරුණාකර."},
   {word:"Jabuke",reading:"යාබුකෙ",meaning:"ඇපල්",example:"Da li su jabuke sveže?",exampleReading:"දා ලි සු යාබුකෙ ස්වේෂෙ?",translation:"ඇපල් නැවුම්ද?"},
   {word:"Paradajz",reading:"පරදායිස්",meaning:"තක්කාලි",example:"Treba mi kilogram paradajza.",exampleReading:"ත්‍රෙබා මි කිලොග්‍රාම් පරදායිසා.",translation:"මට තක්කාලි කිලෝ එකක් අවශ්‍යයි."},
   {word:"Krompir",reading:"ක්‍රොම්පීර්",meaning:"අර්තාපල්",example:"Dva kilograma krompira, molim.",exampleReading:"ද්වා කිලොග්‍රාමා ක්‍රොම්පීරා, මොලීම්.",translation:"අර්තාපල් කිලෝ දෙකක්, කරුණාකර."},
   {word:"Luk",reading:"ලුක්",meaning:"ලූනු",example:"Imate li crni luk?",exampleReading:"ඉමාතෙ ලි ත්ස්ර්නි ලුක්?",translation:"ඔබට රතු ලූනු තිබෙනවාද?"},
   {word:"Kupus",reading:"කුපුස්",meaning:"ගෝවා",example:"Jedan kupus, molim.",exampleReading:"යෙදාන් කුපුස්, මොලීම්.",translation:"ගෝවා ගෙඩියක්, කරුණාකර."},
   {word:"Sveže",reading:"ස්වේෂෙ",meaning:"නැවුම්",example:"Želim sveže povrće.",exampleReading:"ෂෙලිම් ස්වේෂෙ පොව්ර්චෙ.",translation:"මට නැවුම් එළවළු අවශ්‍යයි."},
   {word:"Koliko košta kilogram?",reading:"කොලිකො කොෂ්තා කිලොග්‍රාම්?",meaning:"කිලෝ එකක් කීයද?",example:"Koliko košta kilogram jabuka?",exampleReading:"කොලිකො කොෂ්තා කිලොග්‍රාම් යාබුකා?",translation:"ඇපල් කිලෝ එකක් කීයද?"},
   {word:"To je sve",reading:"තො යේ ස්වේ",meaning:"එච්චරයි / එපමණයි",example:"To je sve, hvala.",exampleReading:"තො යේ ස්වේ, හ්වාලා.",translation:"එච්චරයි, ස්තුතියි."}
  ],
  grammarTerms:[
   {sr:"Jedan kilogram jabuka.",si:"ඇපල් කිලෝ එකක්.",reading:"යෙදාන් කිලොග්‍රාම් යාබුකා."},
   {sr:"Pola kilograma paradajza.",si:"තක්කාලි කිලෝ භාගයක්.",reading:"පොලා කිලොග්‍රාමා පරදායිසා."},
   {sr:"Dva kilograma krompira.",si:"අර්තාපල් කිලෝ දෙකක්.",reading:"ද්වා කිලොග්‍රාමා ක්‍රොම්පීරා."},
   {sr:"Koliko košta kilogram ...?",si:"... කිලෝ එකක් කීයද?",reading:"කොලිකො කොෂ්තා කිලොග්‍රාම් ...?"},
   {sr:"To je sve, hvala.",si:"එච්චරයි, ස්තුතියි.",reading:"තො යේ ස්වේ, හ්වාලා."}
  ],
  grammarTitle:"ව්‍යාකරණය · කිලෝ ප්‍රමාණ සහ මිල විමසීම",
  grammar:"ප්‍රමාණයක් ඉල්ලීමට “jedan kilogram ...” (කිලෝ එකක්), “pola kilograma ...” (කිලෝ භාගයක්), “dva kilograma ...” (කිලෝ දෙකක්) කියන්න. “Koliko košta kilogram ...?” යනු කිලෝ එකක මිල අසන රටාවයි. Serbian භාෂාවේ kilogram පසු එන භාණ්ඩයේ නාම පදය බොහෝවිට genitive රූපයට යන නිසා “jabuka”, “paradajza”, “krompira” වැනි රූප මතක තබාගන්න.",
  examples:[
   {sr:"Dobar dan. Jedan kilogram jabuka, molim.",reading:"දොබාර් දාන්. යෙදාන් කිලොග්‍රාම් යාබුකා, මොලීම්.",si:"සුබ දවසක්. ඇපල් කිලෝ එකක්, කරුණාකර."},
   {sr:"Pola kilograma paradajza i dva kilograma krompira.",reading:"පොලා කිලොග්‍රාමා පරදායිසා ඉ ද්වා කිලොග්‍රාමා ක්‍රොම්පීරා.",si:"තක්කාලි කිලෝ භාගයක් සහ අර්තාපල් කිලෝ දෙකක්."},
   {sr:"Koliko košta kilogram jabuka?",reading:"කොලිකො කොෂ්තා කිලොග්‍රාම් යාබුකා?",si:"ඇපල් කිලෝ එකක් කීයද?"},
   {sr:"To je sve, hvala. Koliko ukupno?",reading:"තො යේ ස්වේ, හ්වාලා. කොලිකො උකුප්නො?",si:"එච්චරයි, ස්තුතියි. මුළු ගාණ කීයද?"}
  ],
  dialogue:[
   {sr:"Dobar dan! Šta želite?",reading:"දොබාර් දාන්! ෂ්තා ෂෙලිතෙ?",si:"සුබ දවසක්! ඔබට මොනවාද අවශ්‍ය?"},
   {sr:"Jedan kilogram jabuka i pola kilograma paradajza, molim.",reading:"යෙදාන් කිලොග්‍රාම් යාබුකා ඉ පොලා කිලොග්‍රාමා පරදායිසා, මොලීම්.",si:"ඇපල් කිලෝ එකක් සහ තක්කාලි කිලෝ භාගයක්, කරුණාකර."},
   {sr:"Da li želite još nešto?",reading:"දා ලි ෂෙලිතෙ යෝෂ් නෙෂ්තො?",si:"ඔබට තව මොනවාහරි අවශ්‍යද?"},
   {sr:"Da, dva kilograma krompira.",reading:"දා, ද්වා කිලොග්‍රාමා ක්‍රොම්පීරා.",si:"ඔව්, අර්තාපල් කිලෝ දෙකක්."},
   {sr:"To je sve. Ukupno je petsto dinara.",reading:"තො යේ ස්වේ. උකුප්නො යේ පෙත්ස්තො දිනාරා.",si:"එච්චරයි. මුළු ගාණ ඩිනාර් පන්සියයයි."},
   {sr:"Izvolite. Hvala, doviđenja!",reading:"ඉස්වොලිතෙ. හ්වාලා, දොවිජෙන්‍යා!",si:"මෙන්න. ස්තුතියි, නැවත හමුවෙමු!"}
  ],
  practice:[
   {prompt:"“ඇපල් කිලෝ එකක්” කියන්නේ කොහොමද?",options:["Jedan kilogram jabuka.","Pola kilograma paradajza.","Dva kilograma krompira."],answer:0,explanation:"Jedan kilogram jabuka = ඇපල් කිලෝ එකක්."},
   {prompt:"“කිලෝ භාගයක්” තෝරන්න.",options:["Dva kilograma","Pola kilograma","Jedan kilogram"],answer:1,explanation:"Pola kilograma යනු කිලෝ භාගයක්."},
   {prompt:"කිලෝ එකක මිල අසන ප්‍රශ්නය?",options:["Koliko košta kilogram jabuka?","Gde je stanica?","Koliko je sati?"],answer:0,explanation:"Koliko košta kilogram ...? යනු කිලෝ එකක මිල අසන රටාවයි."},
   {prompt:"“එච්චරයි, ස්තුතියි” කියන්නේ?",options:["Još nešto?","To je sve, hvala.","Ne razumem."],answer:1,explanation:"To je sve = එච්චරයි; hvala = ස්තුතියි."}
  ],
 listeningPractice:{"prompt":"Slušaj i izaberi tačno značenje: „Jedan kilogram jabuka, molim.”","audio":"Jedan kilogram jabuka, molim.","reading":"යෙදාන් කිලොග්‍රාම් යබුකා, මොලිම්.","options":["ඇපල් කිලෝග්‍රෑම් එකක්, කරුණාකර.","තක්කාලි කිලෝග්‍රෑම් දෙකක්.","මේ සියල්ල කීයද?"],"answer":0,"meaning":"ඇපල් කිලෝග්‍රෑම් එකක්, කරුණාකර."},
}

 ,{
  id:"sr-a1-u7-l1",
  unit:"අංක, දිනය සහ වේලාව",
  title:"පාඩම 14 · අංක, දිනය සහ වේලාව",
  objective:"දුරකථන අංකයක්, දිනයක් සහ වේලාවක් පැවසීම, වේලාව විමසීම සහ සරල හමුවීමක් නියම කිරීම.",
  vocabulary:[
   {word:"Broj",reading:"සස්තානාක් යෙ සුත්‍රා උ දෙසෙත්.",meaning:"අංකය / සංඛ්‍යාව",example:"Koji je vaš broj telefona?",exampleReading:"කොයි යේ වාෂ් බ්‍රොයි තෙලෙෆොනා?",translation:"ඔබගේ දුරකථන අංකය කුමක්ද?"},
   {word:"Telefon",reading:"තෙලෙෆොන්",meaning:"දුරකථනය",example:"Moj telefon je nov.",exampleReading:"මොයි තෙලෙෆොන් යේ නොව්.",translation:"මගේ දුරකථනය අලුත්."},
   {word:"Danas",reading:"දනාස්",meaning:"අද",example:"Danas imam vremena.",exampleReading:"දනාස් ඉමාම් ව්‍රෙමෙනා.",translation:"අද මට වෙලාව තියෙනවා."},
   {word:"Sutra",reading:"සුත්‍රා",meaning:"හෙට",example:"Vidimo se sutra.",exampleReading:"විදිමො සේ සුත්‍රා.",translation:"හෙට හමුවෙමු."},
   {word:"Juče",reading:"යූචේ",meaning:"ඊයේ",example:"Juče sam radio.",exampleReading:"යූචේ සාම් රාදියො.",translation:"මම ඊයේ වැඩ කළා."},
   {word:"Sat",reading:"සාත්",meaning:"පැය / ඔරලෝසුව",example:"Koliko je sati?",exampleReading:"කොලිකො යේ සාති?",translation:"වෙලාව කීයද?"},
   {word:"U osam",reading:"උ ඔසාම්",meaning:"අටට",example:"Rad počinje u osam.",exampleReading:"රාද් පොචිංයේ උ ඔසාම්.",translation:"වැඩ අටට පටන් ගන්නවා."},
   {word:"Datum",reading:"දාතුම්",meaning:"දිනය",example:"Koji je danas datum?",exampleReading:"කොයි යේ දනාස් දාතුම්?",translation:"අද දිනය කුමක්ද?"}
  ],
  grammarTerms:[
   {sr:"Koliko je sati?",si:"වෙලාව කීයද?",reading:"කොලිකො යේ සාති?"},
   {sr:"U koliko sati?",si:"කීයටද?",reading:"උ කොලිකො සාති?"},
   {sr:"Danas je ponedeljak.",si:"අද සඳුදා.",reading:"දනාස් යේ පොනෙදෙල්යාක්."},
   {sr:"Vidimo se sutra u deset.",si:"හෙට දහයට හමුවෙමු.",reading:"විදිමො සේ සුත්‍රා උ දෙසෙත්."},
   {sr:"Koji je datum?",si:"දිනය කුමක්ද?",reading:"කොයි යේ දාතුම්?"}
  ],
  grammarTitle:"ව්‍යාකරණය · වේලාව සහ දිනය කියන ආකාරය",
  grammar:"වේලාව අසන්න “Koliko je sati?” කියන්න. යම් වේලාවක සිදුවීමක් කියන විට “u” සමඟ වේලාව යොදන්න: “u osam” (අටට), “u deset” (දහයට). අද/හෙට/ඊයේ සඳහා “danas”, “sutra”, “juče” භාවිත කරන්න. දිනය අසන්න “Koji je datum?” කියන්න.",
  examples:[
   {sr:"Izvinite, koliko je sati?",reading:"ඉස්විනිතෙ, කොලිකො යේ සාති?",si:"සමාවෙන්න, වෙලාව කීයද?"},
   {sr:"Sada je devet i petnaest.",reading:"සාදා යේ දෙවෙත් ඉ පෙත්නාඑස්ත්.",si:"දැන් නවයයි පහළොවයි."},
   {sr:"Sastanak je sutra u deset.",reading:"සාස්තානාක් යේ සුත්‍රා උ දෙසෙත්.",si:"හමුවීම හෙට දහයට."},
   {sr:"Moj broj telefona je 064 123 456.",reading:"මොයි බ්‍රොයි තෙලෙෆොනා යේ ...",si:"මගේ දුරකථන අංකය 064 123 456."}
  ],
  dialogue:[
   {sr:"Izvinite, koliko je sati?",reading:"ඉස්විනිතෙ, කොලිකො යේ සාති?",si:"සමාවෙන්න, වෙලාව කීයද?"},
   {sr:"Devet je i petnaest.",reading:"දෙවෙත් යේ ඉ පෙත්නාඑස්ත්.",si:"නවයයි පහළොවයි."},
   {sr:"Hvala. Kada je sastanak?",reading:"හ්වාලා. කාදා යේ සාස්තානාක්?",si:"ස්තුතියි. හමුවීම කවදාද?"},
   {sr:"Sutra u deset sati.",reading:"සුත්‍රා උ දෙසෙත් සාති.",si:"හෙට දහයට."},
   {sr:"U redu. Vidimo se sutra.",reading:"උ රෙදු. විදිමො සේ සුත්‍රා.",si:"හරි. හෙට හමුවෙමු."}
  ],
  practice:[
   {prompt:"“වෙලාව කීයද?” අසන්නේ කෙසේද?",options:["Koliko je sati?","Koji je datum?","Gde je telefon?"],answer:0,explanation:"Koliko je sati? = වෙලාව කීයද?"},
   {prompt:"“හෙට” යන Serbian වචනය තෝරන්න.",options:["Juče","Sutra","Danas"],answer:1,explanation:"Sutra = හෙට."},
   {prompt:"“අටට” කියන රටාව කුමක්ද?",options:["U osam","U deset","U pet"],answer:0,explanation:"U + වේලාව යොදා සිදුවීම සිදුවන වේලාව කියනවා."},
   {prompt:"“දිනය කුමක්ද?” අසන්න.",options:["Koliko košta?","Koji je datum?","Kako se zoveš?"],answer:1,explanation:"Koji je datum? = දිනය කුමක්ද?"}
  ],
 listeningPractice:{"prompt":"Slušaj i izaberi tačno značenje: „Sastanak je sutra u deset.”","audio":"Sastanak je sutra u deset.","reading":"සස්තානාක් යෙ සුත්‍රා උ දෙසෙත්.","options":["හමුවීම හෙට දහයටයි.","අද මම නවයට වැඩ කරනවා.","මගේ දුරකථන අංකය මෙයයි."],"answer":0,"meaning":"හමුවීම හෙට දහයටයි."},
},
{
  id:"sr-a1-u7-l2",
  unit:"දෛනික ජීවිතය සහ පුරුදු",
  title:"පාඩම 15 · දෛනික වැඩ සහ පුරුදු",
  objective:"උදෑසන සිට රාත්‍රිය දක්වා කරන දේවල්, දෛනික පුරුදු සහ සරල කාල අනුපිළිවෙළ විස්තර කිරීම.",
  vocabulary:[
   {word:"Ustati",reading:"උස්තායෙම් උ සෙදාම්.",meaning:"නැගිටිනවා",example:"Ustajem u sedam.",exampleReading:"උස්තායෙම් උ සෙදාම්.",translation:"මම හතට නැගිටිනවා."},
   {word:"Doručak",reading:"දොරූචාක්",meaning:"උදෑසන ආහාරය",example:"Doručkujem u osam.",exampleReading:"දොරූචුයෙම් උ ඔසාම්.",translation:"මම අටට උදෑසන ආහාරය ගන්නවා."},
   {word:"Raditi",reading:"රාදිති",meaning:"වැඩ කරනවා",example:"Radim od devet do pet.",exampleReading:"රාදිම් ඔද් දෙවෙත් දො පෙත්.",translation:"මම නවයේ සිට පහ දක්වා වැඩ කරනවා."},
   {word:"Učiti",reading:"උචිති",meaning:"ඉගෙනගන්නවා",example:"Učim srpski svaki dan.",exampleReading:"උචිම් ස්ර්ප්ස්කි ස්වාකි දාන්.",translation:"මම හැමදාම Serbian ඉගෙනගන්නවා."},
   {word:"Ručak",reading:"රූචාක්",meaning:"දවල් ආහාරය",example:"Ručam u jedan.",exampleReading:"රූචාම් උ යෙදාන්.",translation:"මම එකට දවල් ආහාරය ගන්නවා."},
   {word:"Vratiti se",reading:"ව්‍රාතිති සේ",meaning:"ආපසු එනවා",example:"Vraćam se kući u šest.",exampleReading:"ව්‍රාචාම් සේ කුචි උ ෂෙස්ත්.",translation:"මම හයට ගෙදර එනවා."},
   {word:"Uveče",reading:"උවෙචේ",meaning:"සවස / රාත්‍රියට",example:"Uveče čitam knjigu.",exampleReading:"උවෙචේ චීතාම් ක්න්යිගු.",translation:"මම සවස පොතක් කියවනවා."},
   {word:"Svaki dan",reading:"ස්වාකි දාන්",meaning:"හැමදාම",example:"Šetam svaki dan.",exampleReading:"ෂෙතාම් ස්වාකි දාන්.",translation:"මම හැමදාම ඇවිදිනවා."}
  ],
  grammarTerms:[
   {sr:"Ustajem u sedam.",si:"මම හතට නැගිටිනවා.",reading:"උස්තායෙම් උ සෙදාම්."},
   {sr:"Radim od devet do pet.",si:"මම නවයේ සිට පහ දක්වා වැඩ කරනවා.",reading:"රාදිම් ඔද් දෙවෙත් දො පෙත්."},
   {sr:"Svaki dan učim srpski.",si:"මම හැමදාම Serbian ඉගෙනගන්නවා.",reading:"ස්වාකි දාන් උචිම් ස්ර්ප්ස්කි."},
   {sr:"Posle posla idem kući.",si:"වැඩෙන් පස්සේ මම ගෙදර යනවා.",reading:"පොස්ලෙ පොස්ලා ඉදෙම් කුචි."},
   {sr:"Uveče se odmaram.",si:"මම සවස විවේක ගන්නවා.",reading:"උවෙචේ සේ ඔද්මරාම්."}
  ],
  grammarTitle:"ව්‍යාකරණය · දිනපතා කරන දේවල්",
  grammar:"දෛනික පුරුදු ගැන කියන විට වර්තමාන කාලයේ ක්‍රියා පද යොදන්න: “ustajem” (මම නැගිටිනවා), “radim” (මම වැඩ කරනවා), “učim” (මම ඉගෙනගන්නවා). “od ... do ...” යනු “... සිට ... දක්වා” යන්නයි. “svaki dan” යනු හැමදාමයි.",
  examples:[
   {sr:"Ustajem u sedam i doručkujem.",reading:"උස්තායෙම් උ සෙදාම් ඉ දොරූචුයෙම්.",si:"මම හතට නැගිටලා උදෑසන ආහාරය ගන්නවා."},
   {sr:"Radim od devet do pet.",reading:"රාදිම් ඔද් දෙවෙත් දො පෙත්.",si:"මම නවයේ සිට පහ දක්වා වැඩ කරනවා."},
   {sr:"Posle posla učim engleski.",reading:"පොස්ලෙ පොස්ලා උචිම් එන්ග්ලෙස්කි.",si:"වැඩෙන් පස්සේ මම ඉංග්‍රීසි ඉගෙනගන්නවා."},
   {sr:"Uveče se odmaram kod kuće.",reading:"උවෙචේ සේ ඔද්මරාම් කොද් කුචේ.",si:"මම සවස ගෙදරදී විවේක ගන්නවා."}
  ],
  dialogue:[
   {sr:"Kada ustaješ?",reading:"කාදා උස්තායේෂ්?",si:"ඔයා කීයටද නැගිටින්නේ?"},
   {sr:"Ustajem u sedam. A ti?",reading:"උස්තායෙම් උ සෙදාම්. අ ති?",si:"මම හතට නැගිටිනවා. ඔයා?"},
   {sr:"U šest. Kada počinješ da radiš?",reading:"උ ෂෙස්ත්. කාදා පොචිංයේෂ් දා රාදිෂ්?",si:"හයට. ඔයා වැඩ පටන් ගන්නේ කීයටද?"},
   {sr:"U devet, a završavam u pet.",reading:"උ දෙවෙත්, අ සාව්ර්ෂාවාම් උ පෙත්.",si:"නවයට, ඉවර කරන්නේ පහට."},
   {sr:"Šta radiš uveče?",reading:"ෂ්තා රාදිෂ් උවෙචේ?",si:"ඔයා සවස මොනවාද කරන්නේ?"},
   {sr:"Učim jezike i odmaram se.",reading:"උචිම් යෙසිකෙ ඉ ඔද්මරාම් සේ.",si:"මම භාෂා ඉගෙනගෙන විවේක ගන්නවා."}
  ],
  practice:[
   {prompt:"“මම හතට නැගිටිනවා” තෝරන්න.",options:["Ustajem u sedam.","Radim do pet.","Učim uveče."],answer:0,explanation:"Ustajem = මම නැගිටිනවා; u sedam = හතට."},
   {prompt:"“හැමදාම” යන අර්ථය?",options:["Juče","Svaki dan","Uveče"],answer:1,explanation:"Svaki dan = හැමදාම."},
   {prompt:"“... සිට ... දක්වා” කියන රටාව?",options:["bez ...","od ... do ...","za poneti"],answer:1,explanation:"Od ... do ... = ... සිට ... දක්වා."},
   {prompt:"“වැඩෙන් පස්සේ” කියන්නේ?",options:["Pre posla","Posle posla","Sutra"],answer:1,explanation:"Posle posla = වැඩෙන් පස්සේ."}
  ],
 listeningPractice:{"prompt":"Slušaj i izaberi tačno značenje: „Ustajem u sedam.”","audio":"Ustajem u sedam.","reading":"උස්තායෙම් උ සෙදාම්.","options":["මම හතට නැගිටිනවා.","මම හතට නිදාගන්නවා.","මම හතට ගෙදර යනවා."],"answer":0,"meaning":"මම හතට නැගිටිනවා."},
},
{
  id:"sr-a1-u7-l3",
  unit:"වැඩ මුර සහ කාලසටහන්",
  title:"පාඩම 16 · වැඩ මුර සහ කාලසටහන",
  objective:"වැඩ මුරයක් ආරම්භ වන වේලාව, අවසන් වන වේලාව, නිවාඩු දිනය සහ මාරුවක් ඉල්ලීම ගැන කතා කිරීම.",
  vocabulary:[
   {word:"Smene",reading:"සුත්‍රා රාදිම් ද්‍රුගු ස්මෙනු.",meaning:"වැඩ මුර",example:"Radim u prvoj smeni.",exampleReading:"රාදිම් උ ප්‍ර්වොයි ස්මෙණි.",translation:"මම පළමු වැඩ මුරයේ වැඩ කරනවා."},
   {word:"Prva smena",reading:"ප්‍ර්වා ස්මෙණා",meaning:"පළමු වැඩ මුරය",example:"Prva smena počinje u sedam.",exampleReading:"ප්‍ර්වා ස්මෙණා පොචිංයේ උ සෙදාම්.",translation:"පළමු වැඩ මුරය හතට පටන් ගන්නවා."},
   {word:"Druga smena",reading:"ද්‍රූගා ස්මෙණා",meaning:"දෙවන වැඩ මුරය",example:"Sutra radim drugu smenu.",exampleReading:"සුත්‍රා රාදිම් ද්‍රූගු ස්මෙණු.",translation:"හෙට මම දෙවන වැඩ මුරයේ වැඩ කරනවා."},
   {word:"Slobodan dan",reading:"ස්ලොබොදාන් දාන්",meaning:"නිවාඩු දිනය",example:"Nedelja je moj slobodan dan.",exampleReading:"නෙදෙල්යා යේ මොයි ස්ලොබොදාන් දාන්.",translation:"ඉරිදා මගේ නිවාඩු දිනයයි."},
   {word:"Početi",reading:"පොචෙති",meaning:"පටන් ගන්නවා",example:"Kada počinje smena?",exampleReading:"කාදා පොචිංයේ ස්මෙණා?",translation:"වැඩ මුරය පටන් ගන්නේ කීයටද?"},
   {word:"Završiti",reading:"සාව්ර්ෂිති",meaning:"අවසන් කරනවා",example:"Kada završavam danas?",exampleReading:"කාදා සාව්ර්ෂාවාම් දනාස්?",translation:"මම අද වැඩ අවසන් කරන්නේ කීයටද?"},
   {word:"Zamena",reading:"සාමෙණා",meaning:"මාරුව / වෙනුවට වැඩ කිරීම",example:"Treba mi zamena za smenu.",exampleReading:"ත්‍රෙබා මි සාමෙණා සා ස්මෙණු.",translation:"මට වැඩ මුරයට වෙනුවට කෙනෙක් අවශ්‍යයි."},
   {word:"Raspored",reading:"රාස්පොරෙද්",meaning:"කාලසටහන",example:"Gde je raspored smena?",exampleReading:"ග්දේ යේ රාස්පොරෙද් ස්මෙණා?",translation:"වැඩ මුර කාලසටහන කොහෙද?"}
  ],
  grammarTerms:[
   {sr:"Radim u prvoj smeni.",si:"මම පළමු වැඩ මුරයේ වැඩ කරනවා.",reading:"රාදිම් උ ප්‍ර්වොයි ස්මෙණි."},
   {sr:"Sutra radim drugu smenu.",si:"හෙට මම දෙවන වැඩ මුරයේ වැඩ කරනවා.",reading:"සුත්‍රා රාදිම් ද්‍රූගු ස්මෙණු."},
   {sr:"Kada počinje smena?",si:"වැඩ මුරය පටන් ගන්නේ කීයටද?",reading:"කාදා පොචිංයේ ස්මෙණා?"},
   {sr:"Da li mogu da zamenim smenu?",si:"මට වැඩ මුරය මාරු කරගන්න පුළුවන්ද?",reading:"දා ලි මොගු දා සාමෙණිම් ස්මෙණු?"},
   {sr:"Nedelja mi je slobodna.",si:"ඉරිදා මට නිවාඩුයි.",reading:"නෙදෙල්යා මි යේ ස්ලොබොද්නා."}
  ],
  grammarTitle:"ව්‍යාකරණය · වැඩ මුර ගැන කතා කිරීම",
  grammar:"වැඩ මුරය කියන්න “prva smena” (පළමු වැඩ මුරය), “druga smena” (දෙවන වැඩ මුරය) භාවිත කරන්න. වේලාව අසන්න “Kada počinje ...?” කියන්න. ඉල්ලීමක් කිරීමට “Da li mogu da ...?” යොදාගන්න. “slobodan dan” යනු නිවාඩු දිනයයි.",
  examples:[
   {sr:"Radim u prvoj smeni od sedam do tri.",reading:"රාදිම් උ ප්‍ර්වොයි ස්මෙණි ඔද් සෙදාම් දො ත්‍රි.",si:"මම හතේ සිට තුන දක්වා පළමු වැඩ මුරයේ වැඩ කරනවා."},
   {sr:"Sutra radim drugu smenu.",reading:"සුත්‍රා රාදිම් ද්‍රූගු ස්මෙණු.",si:"හෙට මම දෙවන වැඩ මුරයේ වැඩ කරනවා."},
   {sr:"Da li mogu da zamenim smenu u petak?",reading:"දා ලි මොගු දා සාමෙණිම් ස්මෙණු උ පෙතාක්?",si:"මට සිකුරාදා වැඩ මුරය මාරු කරගන්න පුළුවන්ද?"},
   {sr:"Nedelja mi je slobodna.",reading:"නෙදෙල්යා මි යේ ස්ලොබොද්නා.",si:"ඉරිදා මට නිවාඩුයි."}
  ],
  dialogue:[
   {sr:"U kojoj smeni radiš sutra?",reading:"උ කොයොයි ස්මෙණි රාදිෂ් සුත්‍රා?",si:"ඔයා හෙට වැඩ කරන්නේ මොන වැඩ මුරයේද?"},
   {sr:"U drugoj smeni, od tri do jedanaest.",reading:"උ ද්‍රූගොයි ස්මෙණි, ඔද් ත්‍රි දො යෙදානාඑස්ත්.",si:"දෙවන වැඩ මුරයේ, තුනේ සිට එකොළහ දක්වා."},
   {sr:"A kada počinje prva smena?",reading:"අ කාදා පොචිංයේ ප්‍ර්වා ස්මෙණා?",si:"එතකොට පළමු වැඩ මුරය පටන් ගන්නේ කීයටද?"},
   {sr:"U sedam ujutru.",reading:"උ සෙදාම් උයුත්‍රු.",si:"උදේ හතට."},
   {sr:"Mogu li da zamenim smenu u petak?",reading:"මොගු ලි දා සාමෙණිම් ස්මෙණු උ පෙතාක්?",si:"මට සිකුරාදා වැඩ මුරය මාරු කරගන්න පුළුවන්ද?"},
   {sr:"Proveriću raspored i javiću ti.",reading:"ප්‍රොවෙරිචු රාස්පොරෙද් ඉ යාවිචු ති.",si:"මම කාලසටහන බලලා ඔයාට දන්වන්නම්."}
  ],
  practice:[
   {prompt:"“දෙවන වැඩ මුරය” තෝරන්න.",options:["Prva smena","Druga smena","Slobodan dan"],answer:1,explanation:"Druga smena = දෙවන වැඩ මුරය."},
   {prompt:"“නිවාඩු දිනය” කියන්නේ?",options:["Raspored","Zamena","Slobodan dan"],answer:2,explanation:"Slobodan dan = නිවාඩු දිනය."},
   {prompt:"වැඩ මුරය පටන් ගන්නේ කීයටද අසන්න.",options:["Kada počinje smena?","Koliko košta?","Gde je apoteka?"],answer:0,explanation:"Kada počinje smena? = වැඩ මුරය පටන් ගන්නේ කීයටද?"},
   {prompt:"“මට වැඩ මුරය මාරු කරගන්න පුළුවන්ද?” තෝරන්න.",options:["Da li mogu da zamenim smenu?","Radim ujutru.","To je sve."],answer:0,explanation:"Da li mogu da ...? යනු මට ... කළ හැකිද? යන ප්‍රශ්න රටාවයි."}
  ],
 listeningPractice:{"prompt":"Slušaj i izaberi tačno značenje: „Sutra radim drugu smenu.”","audio":"Sutra radim drugu smenu.","reading":"සුත්‍රා රාදිම් ද්‍රුගු ස්මෙනු.","options":["හෙට මම දෙවන වැඩ මුරයේ වැඩ කරනවා.","අද මට නිවාඩුයි.","හෙට මම උදේ හතට නැගිටිනවා."],"answer":0,"meaning":"හෙට මම දෙවන වැඩ මුරයේ වැඩ කරනවා."},
}
 ,{
  id:"sr-a1-u8-l1",
  unit:"පවුල සහ පුද්ගලික තොරතුරු",
  title:"පාඩම 17 · පවුල සහ තමන් ගැන තොරතුරු",
  objective:"පවුලේ සාමාජිකයන් හඳුන්වාදීම, විවාහක තත්ත්වය, භාෂා සහ තමන් ගැන සරල තොරතුරු පැවසීම.",
  vocabulary:[
   {word:"Porodica",reading:"ඉමාම් යෙදානොග් බ්‍රාතා ඉ යෙදුනු සෙස්ත්‍රු.",meaning:"පවුල",example:"Moja porodica je velika.",exampleReading:"මොයා පොරොදිත්සා යේ වෙලිකා.",translation:"මගේ පවුල විශාලයි."},
   {word:"Majka",reading:"මායිකා",meaning:"අම්මා",example:"Moja majka živi u Srbiji.",exampleReading:"මොයා මායිකා ෂිවි උ ස්ර්බියි.",translation:"මගේ අම්මා සර්බියාවේ ජීවත් වෙනවා."},
   {word:"Otac",reading:"ඔතාත්ස්",meaning:"තාත්තා",example:"Moj otac radi.",exampleReading:"මොයි ඔතාත්ස් රාදි.",translation:"මගේ තාත්තා වැඩ කරනවා."},
   {word:"Brat",reading:"බ්‍රාත්",meaning:"සහෝදරයා",example:"Imam jednog brata.",exampleReading:"ඉමාම් යෙද්නොග් බ්‍රාතා.",translation:"මට සහෝදරයෙක් ඉන්නවා."},
   {word:"Sestra",reading:"සෙස්ත්‍රා",meaning:"සහෝදරිය",example:"Moja sestra je studentkinja.",exampleReading:"මොයා සෙස්ත්‍රා යේ ස්තුදෙන්ත්කින්‍යා.",translation:"මගේ සහෝදරිය විශ්වවිද්‍යාල ශිෂ්‍යාවක්."},
   {word:"Suprug",reading:"සුප්රුග්",meaning:"සැමියා",example:"Ovo je moj suprug.",exampleReading:"ඔවො යේ මොයි සුප්රුග්.",translation:"මේ මගේ සැමියා."},
   {word:"Supruga",reading:"සුප්රුගා",meaning:"බිරිඳ",example:"Ovo je moja supruga.",exampleReading:"ඔවො යේ මොයා සුප්රුගා.",translation:"මේ මගේ බිරිඳ."},
   {word:"Imam",reading:"ඉමාම්",meaning:"මට ඉන්නවා / මට තිබෙනවා",example:"Imam dve sestre.",exampleReading:"ඉමාම් ද්වේ සෙස්ත්‍රෙ.",translation:"මට සහෝදරියන් දෙදෙනෙක් ඉන්නවා."},
   {word:"Govorim",reading:"ගොවොරිම්",meaning:"මම කතා කරනවා",example:"Govorim srpski i engleski.",exampleReading:"ගොවොරිම් ස්ර්ප්ස්කි ඉ එන්ග්ලෙස්කි.",translation:"මම Serbian සහ English කතා කරනවා."},
   {word:"Odakle ste?",reading:"ඔදාක්ලෙ ස්තෙ?",meaning:"ඔබ කොහෙන්ද?",example:"Odakle ste? Ja sam sa Šri Lanke.",exampleReading:"ඔදාක්ලෙ ස්තෙ? යා සාම් සා ශ්‍රි ලන්කෙ.",translation:"ඔබ කොහෙන්ද? මම ශ්‍රී ලංකාවෙන්."}
  ],
  grammarTitle:"ව්‍යාකරණය · පවුල සහ තමන් ගැන කියන රටා",
  grammar:"“Imam” යනු මට ඉන්නවා/තිබෙනවා යන්නයි: “Imam brata” (මට සහෝදරයෙක් ඉන්නවා). අයිතිය පෙන්වීමට පුරුෂ ඒකවචනය සමඟ “moj”, ස්ත්‍රී ඒකවචනය සමඟ “moja” යොදනවා: “moj brat”, “moja sestra”. තමන් කතා කරන භාෂාව කියන්න “Govorim + භාෂාව” භාවිත කරන්න. විධිමත් ලෙස “Odakle ste?” කියා රට/නගරය අහන්න පුළුවන්.",
  grammarTerms:[
   {sr:"Imam brata.",si:"මට සහෝදරයෙක් ඉන්නවා.",reading:"ඉමාම් බ්‍රාතා."},
   {sr:"Imam dve sestre.",si:"මට සහෝදරියන් දෙදෙනෙක් ඉන්නවා.",reading:"ඉමාම් ද්වේ සෙස්ත්‍රෙ."},
   {sr:"Ovo je moja porodica.",si:"මේ මගේ පවුල.",reading:"ඔවො යේ මොයා පොරොදිත්සා."},
   {sr:"Govorim srpski.",si:"මම Serbian කතා කරනවා.",reading:"ගොවොරිම් ස්ර්ප්ස්කි."},
   {sr:"Odakle ste?",si:"ඔබ කොහෙන්ද?",reading:"ඔදාක්ලෙ ස්තෙ?"}
  ],
  examples:[
   {sr:"Ovo je moja porodica.",reading:"ඔවො යේ මොයා පොරොදිත්සා.",si:"මේ මගේ පවුල."},
   {sr:"Imam jednog brata i jednu sestru.",reading:"ඉමාම් යෙද්නොග් බ්‍රාතා ඉ යෙද්නු සෙස්ත්‍රු.",si:"මට සහෝදරයෙක් සහ සහෝදරියක් ඉන්නවා."},
   {sr:"Govorim srpski i malo engleski.",reading:"ගොවොරිම් ස්ර්ප්ස්කි ඉ මාලො එන්ග්ලෙස්කි.",si:"මම Serbian සහ ටිකක් English කතා කරනවා."},
   {sr:"Ja sam iz Šri Lanke.",reading:"යා සාම් ඉස් ශ්‍රි ලන්කෙ.",si:"මම ශ්‍රී ලංකාවෙන්."}
  ],
  dialogue:[
   {sr:"Da li imate braću i sestre?",reading:"දා ලි ඉමාතෙ බ්‍රාචු ඉ සෙස්ත්‍රෙ?",si:"ඔබට සහෝදර සහෝදරියන් ඉන්නවාද?"},
   {sr:"Da, imam jednog brata i jednu sestru.",reading:"දා, ඉමාම් යෙද්නොග් බ්‍රාතා ඉ යෙද්නු සෙස්ත්‍රු.",si:"ඔව්, මට සහෝදරයෙක් සහ සහෝදරියක් ඉන්නවා."},
   {sr:"Odakle ste?",reading:"ඔදාක්ලෙ ස්තෙ?",si:"ඔබ කොහෙන්ද?"},
   {sr:"Ja sam iz Šri Lanke. A vi?",reading:"යා සාම් ඉස් ශ්‍රි ලන්කෙ. අ වි?",si:"මම ශ්‍රී ලංකාවෙන්. ඔබ?"},
   {sr:"Ja sam iz Srbije. Koje jezike govorite?",reading:"යා සාම් ඉස් ස්ර්බියේ. කොයේ යෙසිකෙ ගොවොරිතෙ?",si:"මම සර්බියාවෙන්. ඔබ මොන භාෂාද කතා කරන්නේ?"},
   {sr:"Govorim singalski, engleski i malo srpski.",reading:"ගොවොරිම් සිංගල්ස්කි, එන්ග්ලෙස්කි ඉ මාලො ස්ර්ප්ස්කි.",si:"මම සිංහල, English සහ ටිකක් Serbian කතා කරනවා."}
  ],
  practice:[
   {prompt:"“මගේ පවුල” කියන්නේ?",options:["Moja porodica","Moj brat","Moja sestra"],answer:0,explanation:"Moja porodica = මගේ පවුල."},
   {prompt:"“මට සහෝදරයෙක් ඉන්නවා” තෝරන්න.",options:["Govorim srpski.","Imam brata.","Odakle ste?"],answer:1,explanation:"Imam = මට ඉන්නවා; brata = සහෝදරයෙක්."},
   {prompt:"“මම Serbian කතා කරනවා” කියන්නේ?",options:["Živim u Srbiji.","Govorim srpski.","Ovo je moj otac."],answer:1,explanation:"Govorim srpski = මම Serbian කතා කරනවා."},
   {prompt:"“ඔබ කොහෙන්ද?” විධිමත්ව අසන්න.",options:["Koliko imate godina?","Kako se zovete?","Odakle ste?"],answer:2,explanation:"Odakle ste? = ඔබ කොහෙන්ද?"}
  ],
 listeningPractice:{"prompt":"Slušaj i izaberi tačno značenje: „Imam jednog brata i jednu sestru.”","audio":"Imam jednog brata i jednu sestru.","reading":"ඉමාම් යෙදානොග් බ්‍රාතා ඉ යෙදුනු සෙස්ත්‍රු.","options":["මට සහෝදරයෙක් සහ සහෝදරියක් ඉන්නවා.","මට දරුවන් දෙන්නෙක් ඉන්නවා.","මම භාෂා දෙකක් කතා කරනවා."],"answer":0,"meaning":"මට සහෝදරයෙක් සහ සහෝදරියක් ඉන්නවා."},
}

 ,{
  id:"sr-a1-u8-l2",
  unit:"ගමන් බිමන් සහ ප්‍රවාහනය",
  title:"පාඩම 18 · ගමන් බිමන් සහ ප්‍රවාහනය",
  objective:"බස් හෝ දුම්රිය ටිකට් ඉල්ලීම, පිටත්වන වේලාව විමසීම, ගමනාන්තය සහ වේදිකාව සොයාගැනීම.",
  vocabulary:[
   {word:"Autobus",reading:"යෙදුනු කාර්තු දො නොවොග් සාදා, මොලිම්.",meaning:"බස් රථය",example:"Autobus stiže u osam.",exampleReading:"ආවුතොබුස් ස්තීෂෙ උ ඔසාම්.",translation:"බස් රථය අටට එනවා."},
   {word:"Voz",reading:"වොස්",meaning:"දුම්රිය",example:"Voz polazi u devet.",exampleReading:"වොස් පොලාසි උ දෙවෙත්.",translation:"දුම්රිය නවයට පිටත් වෙනවා."},
   {word:"Karta",reading:"කාර්තා",meaning:"ටිකට්පත",example:"Jednu kartu, molim.",exampleReading:"යෙද්නු කාර්තු, මොලීම්.",translation:"ටිකට් එකක් දෙන්න, කරුණාකර."},
   {word:"Stanica",reading:"ස්තානිත්සා",meaning:"නැවතුම්පොළ / ස්ථානය",example:"Gde je autobuska stanica?",exampleReading:"ග්දේ යේ ආවුතොබුස්කා ස්තානිත්සා?",translation:"බස් නැවතුම්පොළ කොහෙද?"},
   {word:"Polazak",reading:"පොලාසාක්",meaning:"පිටත්වීම",example:"Kada je polazak?",exampleReading:"කාදා යේ පොලාසාක්?",translation:"පිටත්වීම කවදාද?"},
   {word:"Dolazak",reading:"දොලාසාක්",meaning:"පැමිණීම",example:"Kada je dolazak?",exampleReading:"කාදා යේ දොලාසාක්?",translation:"පැමිණීම කවදාද?"},
   {word:"Peron",reading:"පෙරොන්",meaning:"වේදිකාව",example:"Voz polazi sa drugog perona.",exampleReading:"වොස් පොලාසි සා ද්‍රූගොග් පෙරොනා.",translation:"දුම්රිය දෙවන වේදිකාවෙන් පිටත් වෙනවා."},
   {word:"Jednosmerna karta",reading:"යෙද්නොස්මෙර්නා කාර්තා",meaning:"එක් පැත්තකට ටිකට්පත",example:"Treba mi jednosmerna karta.",exampleReading:"ත්‍රෙබා මි යෙද්නොස්මෙර්නා කාර්තා.",translation:"මට එක් පැත්තකට ටිකට්පතක් ඕනේ."}
  ],
  grammarTitle:"ව්‍යාකරණය · ටිකට් සහ ගමන් විමසීම්",
  grammar:"ටිකට් ඉල්ලීමට “Jednu kartu, molim” කියන්න. ගමන් වේලාව අසන්න “Kada polazi ...?” ( ... පිටත් වන්නේ කවදාද?) යොදන්න. “Gde je ...?” යනු ... කොහෙද? යන්නයි. “sa” සමඟ වේදිකාවෙන් පිටත් වීම කියන්න පුළුවන්.",
  grammarTerms:[
   {sr:"Jednu kartu, molim.",si:"ටිකට් එකක් දෙන්න, කරුණාකර.",reading:"යෙද්නු කාර්තු, මොලීම්."},
   {sr:"Kada polazi autobus?",si:"බස් රථය පිටත් වන්නේ කවදාද?",reading:"කාදා පොලාසි ආවුතොබුස්?"},
   {sr:"Gde je peron?",si:"වේදිකාව කොහෙද?",reading:"ග්දේ යේ පෙරොන්?"},
   {sr:"Voz kasni.",si:"දුම්රිය ප්‍රමාදයි.",reading:"වොස් කාස්නි."},
   {sr:"Koliko traje putovanje?",si:"ගමනට කොපමණ වේලාවක් ගත වෙනවාද?",reading:"කොලිකො ත්‍රායේ පුතොවාන්‍යෙ?"}
  ],
  examples:[
   {sr:"Jednu kartu do Beograda, molim.",reading:"යෙද්නු කාර්තු දො බෙඔග්‍රාදා, මොලීම්.",si:"බෙල්ග්‍රේඩ් දක්වා ටිකට් එකක් දෙන්න, කරුණාකර."},
   {sr:"Kada polazi sledeći autobus?",reading:"කාදා පොලාසි ස්ලෙදෙචි ආවුතොබුස්?",si:"ඊළඟ බස් රථය පිටත් වන්නේ කවදාද?"},
   {sr:"Voz polazi sa trećeg perona.",reading:"වොස් පොලාසි සා ත්‍රෙචෙග් පෙරොනා.",si:"දුම්රිය තුන්වන වේදිකාවෙන් පිටත් වෙනවා."},
   {sr:"Da li je ovo autobus za centar?",reading:"දා ලි යේ ඔවො ආවුතොබුස් සා ත්සෙන්තාර්?",si:"මේ නගර මධ්‍යයට යන බස් රථයද?"}
  ],
  dialogue:[
   {sr:"Dobar dan. Jednu kartu do Novog Sada, molim.",reading:"දොබාර් දාන්. යෙද්නු කාර්තු දො නොවොග් සාදා, මොලීම්.",si:"සුබ දවසක්. නෝවි සාද් දක්වා ටිකට් එකක් දෙන්න."},
   {sr:"Jednosmernu ili povratnu kartu?",reading:"යෙද්නොස්මෙර්නු ඉලි පොව්‍රාත්නු කාර්තු?",si:"එක් පැත්තකටද නැත්නම් ආපසු එන ටිකට් එකක්ද?"},
   {sr:"Jednosmernu, molim.",reading:"යෙද්නොස්මෙර්නු, මොලීම්.",si:"එක් පැත්තකට, කරුණාකර."},
   {sr:"Voz polazi u deset i petnaest.",reading:"වොස් පොලාසි උ දෙසෙත් ඉ පෙත්නාඑස්ත්.",si:"දුම්රිය දහයයි පහළොවට පිටත් වෙනවා."},
   {sr:"Sa kog perona?",reading:"සා කොග් පෙරොනා?",si:"මොන වේදිකාවෙන්ද?"},
   {sr:"Sa drugog perona. Srećan put!",reading:"සා ද්‍රූගොග් පෙරොනා. ස්‍රෙචාන් පුත්!",si:"දෙවන වේදිකාවෙන්. සුබ ගමනක්!"}
  ],
  practice:[
   {prompt:"“ටිකට් එකක් දෙන්න, කරුණාකර” තෝරන්න.",options:["Jednu kartu, molim.","Gde je peron?","Voz kasni."],answer:0,explanation:"Jednu kartu, molim. = ටිකට් එකක් දෙන්න, කරුණාකර."},
   {prompt:"“වේදිකාව කොහෙද?” අසන්නේ?",options:["Kada je dolazak?","Gde je peron?","Koliko košta?"],answer:1,explanation:"Gde je peron? = වේදිකාව කොහෙද?"},
   {prompt:"“දුම්රිය ප්‍රමාදයි” කියන්නේ?",options:["Voz kasni.","Voz stiže.","Autobus polazi."],answer:0,explanation:"Voz kasni. = දුම්රිය ප්‍රමාදයි."},
   {prompt:"“එක් පැත්තකට ටිකට්පතක්” තෝරන්න.",options:["Povratna karta","Autobuska stanica","Jednosmerna karta"],answer:2,explanation:"Jednosmerna karta = එක් පැත්තකට ටිකට්පත."}
  ],
 listeningPractice:{"prompt":"Slušaj i izaberi tačno značenje: „Jednu kartu do Novog Sada, molim.”","audio":"Jednu kartu do Novog Sada, molim.","reading":"යෙදුනු කාර්තු දො නොවොග් සාදා, මොලිම්.","options":["නොවි සාද් වෙත ටිකට් එකක්, කරුණාකර.","බෙල්ග්‍රේඩ් වෙත බස් එකක් තිබෙනවා.","දුම්රිය තුන්වන වේදිකාවේ."],"answer":0,"meaning":"නොවි සාද් වෙත ටිකට් එකක්, කරුණාකර."},
},
{
  id:"sr-a1-u8-l3",
  unit:"නිවස සහ ගෘහ භාණ්ඩ",
  title:"පාඩම 19 · නිවස සහ ගෘහ භාණ්ඩ",
  objective:"තමන් ජීවත් වන නිවස, කාමර, මූලික ගෘහ භාණ්ඩ සහ නිවසේ ඇති දේවල් විස්තර කිරීම.",
  vocabulary:[
   {word:"Stan",reading:"ෂිවිම් උ මාලොම් ස්තානු.",meaning:"මහල් නිවාසය",example:"Živim u stanu.",exampleReading:"ෂිවිම් උ ස්තානු.",translation:"මම මහල් නිවාසයක ජීවත් වෙනවා."},
   {word:"Kuća",reading:"කුචා",meaning:"නිවස",example:"Moja kuća je mala.",exampleReading:"මොයා කුචා යේ මාලා.",translation:"මගේ නිවස කුඩායි."},
   {word:"Soba",reading:"සොබා",meaning:"කාමරය",example:"Moja soba je svetla.",exampleReading:"මොයා සොබා යේ ස්වෙත්ලා.",translation:"මගේ කාමරය ආලෝකවත්."},
   {word:"Kuhinja",reading:"කුහින්‍යා",meaning:"මුළුතැන්ගෙය",example:"Kuhinja je čista.",exampleReading:"කුහින්‍යා යේ චිස්තා.",translation:"මුළුතැන්ගෙය පිරිසිදුයි."},
   {word:"Kupatilo",reading:"කුපාතිලො",meaning:"නාන කාමරය",example:"Kupatilo je malo.",exampleReading:"කුපාතිලො යේ මාලො.",translation:"නාන කාමරය කුඩායි."},
   {word:"Sto",reading:"ස්තො",meaning:"මේසය",example:"Knjiga je na stolu.",exampleReading:"ක්න්යිගා යේ නා ස්තොලු.",translation:"පොත මේසය මත තියෙනවා."},
   {word:"Stolica",reading:"ස්තොලීත්සා",meaning:"පුටුව",example:"Stolica je pored stola.",exampleReading:"ස්තොලීත්සා යේ පොරෙද් ස්තොලා.",translation:"පුටුව මේසය අසල තියෙනවා."},
   {word:"Krevet",reading:"ක්‍රෙවෙත්",meaning:"ඇඳ",example:"Krevet je u sobi.",exampleReading:"ක්‍රෙවෙත් යේ උ සොබි.",translation:"ඇඳ කාමරයේ තියෙනවා."}
  ],
  grammarTitle:"ව්‍යාකරණය · නිවසේ දේවල් තිබෙන තැන්",
  grammar:"ස්ථානයක් කියන විට “u” (තුළ/හි) සහ “na” (මත) භාවිත වෙනවා: “u sobi” (කාමරයේ), “na stolu” (මේසය මත). අයිතිය පෙන්වීමට “moj/moja” යොදන්න. “Ima” යනු තිබෙනවා යන්නයි: “U stanu ima dve sobe.”",
  grammarTerms:[
   {sr:"Živim u stanu.",si:"මම මහල් නිවාසයක ජීවත් වෙනවා.",reading:"ෂිවිම් උ ස්තානු."},
   {sr:"Knjiga je na stolu.",si:"පොත මේසය මත තියෙනවා.",reading:"ක්න්යිගා යේ නා ස්තොලු."},
   {sr:"Krevet je u sobi.",si:"ඇඳ කාමරයේ තියෙනවා.",reading:"ක්‍රෙවෙත් යේ උ සොබි."},
   {sr:"U stanu ima dve sobe.",si:"මහල් නිවාසයේ කාමර දෙකක් තියෙනවා.",reading:"උ ස්තානු ඉමා ද්වේ සොබෙ."},
   {sr:"Gde je kuhinja?",si:"මුළුතැන්ගෙය කොහෙද?",reading:"ග්දේ යේ කුහින්‍යා?"}
  ],
  examples:[
   {sr:"Živim u malom stanu.",reading:"ෂිවිම් උ මාලොම් ස්තානු.",si:"මම කුඩා මහල් නිවාසයක ජීවත් වෙනවා."},
   {sr:"U mom stanu su dve sobe.",reading:"උ මොම් ස්තානු සු ද්වේ සොබෙ.",si:"මගේ මහල් නිවාසයේ කාමර දෙකක් තියෙනවා."},
   {sr:"Sto je u kuhinji, a krevet je u sobi.",reading:"ස්තො යේ උ කුහින්‍යි, අ ක්‍රෙවෙත් යේ උ සොබි.",si:"මේසය මුළුතැන්ගෙයේ, ඇඳ කාමරයේ තියෙනවා."},
   {sr:"Kupatilo je pored kuhinje.",reading:"කුපාතිලො යේ පොරෙද් කුහින්‍යෙ.",si:"නාන කාමරය මුළුතැන්ගෙය අසල තියෙනවා."}
  ],
  dialogue:[
   {sr:"Gde živiš?",reading:"ග්දේ ෂිවිෂ්?",si:"ඔයා කොහෙද ජීවත් වෙන්නේ?"},
   {sr:"Živim u malom stanu.",reading:"ෂිවිම් උ මාලොම් ස්තානු.",si:"මම කුඩා මහල් නිවාසයක ජීවත් වෙනවා."},
   {sr:"Koliko soba imaš?",reading:"කොලිකො සොබා ඉමාෂ්?",si:"ඔයාට කාමර කීයක් තියෙනවාද?"},
   {sr:"Imam dve sobe, kuhinju i kupatilo.",reading:"ඉමාම් ද්වේ සොබෙ, කුහින්‍යු ඉ කුපාතිලො.",si:"මට කාමර දෙකක්, මුළුතැන්ගෙයක් සහ නාන කාමරයක් තියෙනවා."},
   {sr:"Gde je sto?",reading:"ග්දේ යේ ස්තො?",si:"මේසය කොහෙද?"},
   {sr:"Sto je u kuhinji.",reading:"ස්තො යේ උ කුහින්‍යි.",si:"මේසය මුළුතැන්ගෙයේ තියෙනවා."}
  ],
  practice:[
   {prompt:"“කාමරය” යන Serbian වචනය?",options:["Soba","Sto","Stan"],answer:0,explanation:"Soba = කාමරය."},
   {prompt:"“පොත මේසය මත තියෙනවා” තෝරන්න.",options:["Knjiga je u sobi.","Knjiga je na stolu.","Krevet je u sobi."],answer:1,explanation:"Na stolu = මේසය මත."},
   {prompt:"“මම මහල් නිවාසයක ජීවත් වෙනවා” කියන්නේ?",options:["Živim u stanu.","Živim u kući.","Imam dve sobe."],answer:0,explanation:"Živim u stanu = මම මහල් නිවාසයක ජීවත් වෙනවා."},
   {prompt:"“නාන කාමරය” තෝරන්න.",options:["Kuhinja","Kupatilo","Stolica"],answer:1,explanation:"Kupatilo = නාන කාමරය."}
  ],
 listeningPractice:{"prompt":"Slušaj i izaberi tačno značenje: „Živim u malom stanu.”","audio":"Živim u malom stanu.","reading":"ෂිවිම් උ මාලොම් ස්තානු.","options":["මම කුඩා මහල් නිවාසයක ජීවත් වෙනවා.","මගේ කාමරය විශාලයි.","කුස්සිය නාන කාමරය අසලයි."],"answer":0,"meaning":"මම කුඩා මහල් නිවාසයක ජීවත් වෙනවා."},
}


 ,{id:"sr-a1-u9-l1",unit:"ආහාර සහ ගෙදර ඉවුම් පිහුම්",title:"පාඩම 20 · ආහාර සහ ගෙදර ඉවුම් පිහුම්",objective:"දෛනික ආහාර, අමුද්‍රව්‍ය සහ සරල ඉවුම් පිහුම් ක්‍රියා විස්තර කිරීම.",vocabulary:[
{word:"Hrana",reading:"සා දොරුචාක් යෙදෙම් යායා ඉ හ්ලෙබ්.",meaning:"ආහාර",example:"Hrana je spremna.",exampleReading:"හ්‍රානා යේ ස්ප්‍රෙම්නා.",translation:"කෑම සූදානම්."},{word:"Doručak",reading:"දොරූචාක්",meaning:"උදෑසන ආහාරය",example:"Doručkujem u osam.",exampleReading:"දොරූචුයෙම් උ ඔසාම්.",translation:"මම අටට උදෑසන ආහාරය ගන්නවා."},{word:"Ručak",reading:"රූචාක්",meaning:"දිවා ආහාරය",example:"Ručak je u podne.",exampleReading:"රූචාක් යේ උ පොද්නෙ.",translation:"දිවා ආහාරය දවල්ට."},{word:"Večera",reading:"වෙචෙරා",meaning:"රාත්‍රී ආහාරය",example:"Večera je u sedam.",exampleReading:"වෙචෙරා යේ උ සෙදාම්.",translation:"රාත්‍රී ආහාරය හතට."},{word:"Hleb",reading:"හ්ලෙබ්",meaning:"පාන්",example:"Kupujem svež hleb.",exampleReading:"කුපුයෙම් ස්වෙෂ් හ්ලෙබ්.",translation:"මම අලුත් පාන් ගන්නවා."},{word:"Povrće",reading:"පොව්ර්චෙ",meaning:"එළවළු",example:"Jedem mnogo povrća.",exampleReading:"යෙදෙම් ම්නොගො පොව්ර්චා.",translation:"මම එළවළු ගොඩක් කනවා."},{word:"Kuvati",reading:"කුවාති",meaning:"උයනවා",example:"Volim da kuvam.",exampleReading:"වොලිම් දා කුවාම්.",translation:"මම උයන්න කැමතියි."},{word:"So",reading:"සො",meaning:"ලුණු",example:"Dodaj malo soli.",exampleReading:"දොදායි මාලො සොලි.",translation:"ලුණු ටිකක් එකතු කරන්න."}],grammarTitle:"ව්‍යාකරණය · ආහාර පුරුදු සහ da + ක්‍රියාපදය",grammar:"දෛනික පුරුදු කියන්න “Jedem ...” (මම ... කනවා) සහ “Pijem ...” (මම ... බොනවා) යොදන්න. කැමැත්තක් කියන්න “Volim da + ක්‍රියාපදය” භාවිත කරන්න: “Volim da kuvam.”",grammarTerms:[{sr:"Šta jedeš za doručak?",si:"උදෑසනට ඔයා මොනවාද කන්නේ?",reading:"ෂ්තා යෙදෙෂ් සා දොරූචාක්?"},{sr:"Jedem hleb i sir.",si:"මම පාන් සහ චීස් කනවා.",reading:"යෙදෙම් හ්ලෙබ් ඉ සීර්."},{sr:"Pijem vodu.",si:"මම වතුර බොනවා.",reading:"පියෙම් වොදු."},{sr:"Volim da kuvam.",si:"මම උයන්න කැමතියි.",reading:"වොලිම් දා කුවාම්."},{sr:"Dodaj malo soli.",si:"ලුණු ටිකක් එකතු කරන්න.",reading:"දොදායි මාලො සොලි."}],examples:[{sr:"Za doručak jedem jaja i hleb.",si:"උදෑසනට මම බිත්තර සහ පාන් කනවා.",reading:"සා දොරූචාක් යෙදෙම් යායා ඉ හ්ලෙබ්."},{sr:"Za ručak kuvam supu.",si:"දිවා ආහාරයට මම සුප් උයනවා.",reading:"සා රූචාක් කුවාම් සුපු."},{sr:"Ne jedem meso.",si:"මම මස් කන්නේ නැහැ.",reading:"නේ යෙදෙම් මෙසො."},{sr:"Volim sveže povrće.",si:"මම නැවුම් එළවළු කැමතියි.",reading:"වොලිම් ස්වෙෂෙ පොව්ර්චෙ."}],dialogue:[{sr:"Šta jedeš za doručak?",si:"උදෑසනට ඔයා මොනවාද කන්නේ?",reading:"ෂ්තා යෙදෙෂ් සා දොරූචාක්?"},{sr:"Obično jedem jaja i hleb.",si:"සාමාන්‍යයෙන් මම බිත්තර සහ පාන් කනවා.",reading:"ඔබිච්නො යෙදෙම් යායා ඉ හ්ලෙබ්."},{sr:"Da li kuvaš kod kuće?",si:"ඔයා ගෙදර උයනවාද?",reading:"දා ලි කුවාෂ් කොද් කුචෙ?"},{sr:"Da, volim da kuvam.",si:"ඔව්, මම උයන්න කැමතියි.",reading:"දා, වොලිම් දා කුවාම්."},{sr:"Šta kuvaš danas?",si:"අද ඔයා මොනවාද උයන්නේ?",reading:"ෂ්තා කුවාෂ් දනාස්?"},{sr:"Kuvam supu sa povrćem.",si:"මම එළවළු සමඟ සුප් උයනවා.",reading:"කුවාම් සුපු සා පොව්ර්චෙම්."}],practice:[{prompt:"“උදෑසන ආහාරය” යන වචනය තෝරන්න.",options:["Večera","Doručak","Ručak"],answer:1,explanation:"Doručak = උදෑසන ආහාරය."},{prompt:"“මම වතුර බොනවා” කියන්නේ?",options:["Pijem vodu.","Jedem hleb.","Kuvam supu."],answer:0,explanation:"Pijem = මම බොනවා; vodu = වතුර."},{prompt:"“මම උයන්න කැමතියි” තෝරන්න.",options:["Ne jedem meso.","Volim da kuvam.","Ručak je gotov."],answer:1,explanation:"Volim da kuvam = මම උයන්න කැමතියි."},{prompt:"“එළවළු” යන වචනය කුමක්ද?",options:["Povrće","So","Hleb"],answer:0,explanation:"Povrće = එළවළු."}],
 listeningPractice:{"prompt":"Slušaj i izaberi tačno značenje: „Za doručak jedem jaja i hleb.”","audio":"Za doručak jedem jaja i hleb.","reading":"සා දොරුචාක් යෙදෙම් යායා ඉ හ්ලෙබ්.","options":["උදේ ආහාරයට මම බිත්තර සහ පාන් කනවා.","දවල්ට මම සුප් උයනවා.","මම මස් කන්නේ නැහැ."],"answer":0,"meaning":"උදේ ආහාරයට මම බිත්තර සහ පාන් කනවා."},
},
{id:"sr-a1-u9-l2",unit:"කාලගුණය සහ ඇඳුම්",title:"පාඩම 21 · කාලගුණය සහ ඇඳුම්",objective:"කාලගුණය විස්තර කිරීම, උෂ්ණත්වය ගැන කතා කිරීම සහ ඇඳුම් නම් කිරීම.",vocabulary:[
{word:"Vreme",reading:"ව්‍රෙමෙ",meaning:"කාලගුණය",example:"Kakvo je vreme danas?",exampleReading:"කාක්වො යේ ව්‍රෙමෙ දනාස්?",translation:"අද කාලගුණය කොහොමද?"},{word:"Sunčano",reading:"සුන්චානො",meaning:"අව්ව සහිත",example:"Danas je sunčano.",exampleReading:"දනාස් යේ සුන්චානො.",translation:"අද අව්වයි."},{word:"Kiša",reading:"කීෂා",meaning:"වැස්ස",example:"Pada kiša.",exampleReading:"පාදා කීෂා.",translation:"වැස්ස වැටෙනවා."},{word:"Hladno",reading:"හ්ලාද්නො",meaning:"සීතල",example:"Napolju je hladno.",exampleReading:"නාපොල්යු යේ හ්ලාද්නො.",translation:"එළියේ සීතලයි."},{word:"Toplo",reading:"තොප්ලො",meaning:"උණුසුම්",example:"Danas je toplo.",exampleReading:"දනාස් යේ තොප්ලො.",translation:"අද උණුසුම්."},{word:"Jakna",reading:"යාක්නා",meaning:"ජැකට්ටුව",example:"Obuci jaknu.",exampleReading:"ඔබුචි යාක්නු.",translation:"ජැකට්ටුව ඇඳගන්න."},{word:"Kišobran",reading:"කීෂොබ්‍රාන්",meaning:"කුඩය",example:"Ponesi kišobran.",exampleReading:"පොනෙසි කීෂොබ්‍රාන්.",translation:"කුඩයක් රැගෙන යන්න."},{word:"Cipele",reading:"ත්සිපෙලෙ",meaning:"සපත්තු",example:"Moje cipele su nove.",exampleReading:"මොයේ ත්සිපෙලෙ සු නොවෙ.",translation:"මගේ සපත්තු අලුත්."}],grammarTitle:"ව්‍යාකරණය · Kakvo je vreme? සහ කාලගුණ විස්තර",grammar:"කාලගුණය අසන්න “Kakvo je vreme?” කියන්න. “Danas je ...” (අද ...යි) රටාවෙන් විස්තර කරන්න. වැස්ස සඳහා “Pada kiša” යොදන්න.",grammarTerms:[{sr:"Kakvo je vreme danas?",si:"අද කාලගුණය කොහොමද?",reading:"කාක්වො යේ ව්‍රෙමෙ දනාස්?"},{sr:"Danas je sunčano.",si:"අද අව්වයි.",reading:"දනාස් යේ සුන්චානො."},{sr:"Pada kiša.",si:"වැස්ස වැටෙනවා.",reading:"පාදා කීෂා."},{sr:"Napolju je hladno.",si:"එළියේ සීතලයි.",reading:"නාපොල්යු යේ හ්ලාද්නො."},{sr:"Treba mi jakna.",si:"මට ජැකට්ටුවක් අවශ්‍යයි.",reading:"ත්‍රෙබා මි යාක්නා."}],examples:[{sr:"Danas je hladno i vetrovito.",si:"අද සීතලයි සහ සුළං සහිතයි.",reading:"දනාස් යේ හ්ලාද්නො ඉ වෙත්‍රොවිතො."},{sr:"Ponesi kišobran, pada kiša.",si:"කුඩයක් රැගෙන යන්න, වැස්ස වැටෙනවා.",reading:"පොනෙසි කීෂොබ්‍රාන්, පාදා කීෂා."},{sr:"Oblačim toplu jaknu.",si:"මම උණුසුම් ජැකට්ටුවක් ඇඳගන්නවා.",reading:"ඔබ්ලාචිම් තොප්ලු යාක්නු."},{sr:"Sutra će biti sunčano.",si:"හෙට අව්ව සහිත වේවි.",reading:"සුත්‍රා චෙ බිති සුන්චානො."}],dialogue:[{sr:"Kakvo je vreme danas?",si:"අද කාලගුණය කොහොමද?",reading:"කාක්වො යේ ව්‍රෙමෙ දනාස්?"},{sr:"Hladno je i pada kiša.",si:"සීතලයි, වැස්සත් වැටෙනවා.",reading:"හ්ලාද්නො යේ ඉ පාදා කීෂා."},{sr:"Da li treba da ponesem jaknu?",si:"මම ජැකට්ටුවක් රැගෙන යන්න ඕනෙද?",reading:"දා ලි ත්‍රෙබා දා පොනෙසෙම් යාක්නු?"},{sr:"Da, i ponesi kišobran.",si:"ඔව්, කුඩයකුත් රැගෙන යන්න.",reading:"දා, ඉ පොනෙසි කීෂොබ්‍රාන්."},{sr:"A kakvo će vreme biti sutra?",si:"හෙට කාලගුණය කොහොම වේවිද?",reading:"අ කාක්වො චෙ ව්‍රෙමෙ බිති සුත්‍රා?"},{sr:"Biće sunčano i toplo.",si:"අව්ව සහිතව උණුසුම් වේවි.",reading:"බිචෙ සුන්චානො ඉ තොප්ලො."}],listeningPractice:{prompt:"Listen and choose the correct meaning: “Kakvo je vreme danas?”",audio:"Kakvo je vreme danas?",options:["අද කාලගුණය කොහොමද?","අද මට වැඩ තියෙනවා.","මට වතුර අවශ්‍යයි."],readings:["කාක්වො යේ ව්‍රෙමෙ දනාස්?","කාක්වො යේ ව්‍රෙමෙ දනාස්?","කාක්වො යේ ව්‍රෙමෙ දනාස්?"],answer:0,meaning:"Kakvo je vreme danas? = අද කාලගුණය කොහොමද?"},
practice:[{prompt:"“වැස්ස” යන වචනය තෝරන්න.",options:["Sunčano","Kiša","Jakna"],answer:1,explanation:"Kiša = වැස්ස."},{prompt:"“අද අව්වයි” කියන්නේ?",options:["Danas je sunčano.","Pada kiša.","Napolju je hladno."],answer:0,explanation:"Danas je sunčano = අද අව්වයි."},{prompt:"“කුඩය” යන වචනය කුමක්ද?",options:["Cipele","Jakna","Kišobran"],answer:2,explanation:"Kišobran = කුඩය."},{prompt:"“එළියේ සීතලයි” තෝරන්න.",options:["Napolju je hladno.","Danas je toplo.","Moje cipele su nove."],answer:0,explanation:"Napolju je hladno = එළියේ සීතලයි."}]}

,{id:"sr-a1-u10-l1",unit:"ආපනශාලාව සහ ආහාර ඇණවුම් කිරීම",title:"පාඩම 22 · ආපනශාලාව සහ ආහාර ඇණවුම් කිරීම",objective:"මෙනුව ඉල්ලීම, ආහාර සහ බීම ඇණවුම් කිරීම, අමතර දේ ඉල්ලීම සහ බිල ලබාගැනීම.",
vocabulary:[
{word:"Jelovnik",reading:"යෙලොව්නික්",meaning:"මෙනුව",example:"Mogu li da vidim jelovnik?",exampleReading:"මොගු ලි දා විදිම් යෙලොව්නික්?",translation:"මට මෙනුව බලන්න පුළුවන්ද?"},
{word:"Konobar",reading:"කොනොබාර්",meaning:"වේටර්",example:"Konobar donosi vodu.",exampleReading:"කොනොබාර් දොනොසි වොදු.",translation:"වේටර් වතුර ගෙනෙනවා."},
{word:"Porudžbina",reading:"පොරූජ්බිනා",meaning:"ඇණවුම",example:"Moja porudžbina je spremna.",exampleReading:"මොයා පොරූජ්බිනා යේ ස්ප්‍රෙම්නා.",translation:"මගේ ඇණවුම සූදානම්."},
{word:"Glavno jelo",reading:"ග්ලාව්නො යෙලො",meaning:"ප්‍රධාන ආහාරය",example:"Glavno jelo je veoma ukusno.",exampleReading:"ග්ලාව්නො යෙලො යේ වෙඔමා උකුස්නො.",translation:"ප්‍රධාන ආහාරය ඉතා රසවත්."},
{word:"Piće",reading:"පීචෙ",meaning:"බීම",example:"Želim jedno hladno piće.",exampleReading:"ෂෙලිම් යෙද්නො හ්ලාද්නො පීචෙ.",translation:"මට සිසිල් බීමක් ඕනේ."},
{word:"Račun",reading:"රාචුන්",meaning:"බිල",example:"Račun, molim.",exampleReading:"රාචුන්, මොලීම්.",translation:"බිල දෙන්න, කරුණාකරලා."},
{word:"Prilog",reading:"ප්‍රිලොග්",meaning:"අමතර ආහාරය",example:"Pomfrit je prilog.",exampleReading:"පොම්ෆ්‍රිත් යේ ප්‍රිලොග්.",translation:"ෆ්‍රෙන්ච් ෆ්‍රයිස් අමතර ආහාරයයි."},
{word:"Za poneti",reading:"සා පොනෙති",meaning:"ගෙන යාම සඳහා",example:"Ovo je za poneti.",exampleReading:"ඔවො යේ සා පොනෙති.",translation:"මේක ගෙන යාම සඳහායි."}],
grammarTitle:"ව්‍යාකරණය · ආචාරශීලී ඇණවුම් සහ කැමැත්ත",
grammar:"ආචාරශීලීව ඉල්ලීමට “Želeo/Želela bih ...” (මට ... අවශ්‍යයි) හෝ සරලව “Molim ...” යොදන්න. “Može li ...?” යනු “... දෙන්න පුළුවන්ද?” යන්නයි. බිල ඉල්ලීමට “Račun, molim.” කියන්න.",
grammarTerms:[
{sr:"Mogu li da vidim jelovnik?",si:"මට මෙනුව බලන්න පුළුවන්ද?",reading:"මොගු ලි දා විදිම් යෙලොව්නික්?"},
{sr:"Želeo bih vodu.",si:"මට වතුර අවශ්‍යයි. (පිරිමි කථකයා)",reading:"ෂෙලෙඔ බිහ් වොදු."},
{sr:"Želela bih kafu.",si:"මට කෝපි අවශ්‍යයි. (කාන්තා කථිකාව)",reading:"ෂෙලෙලා බිහ් කාෆු."},
{sr:"Može li bez luka?",si:"ළූණු නැතිව දෙන්න පුළුවන්ද?",reading:"මොෂෙ ලි බෙස් ලූකා?"},
{sr:"Račun, molim.",si:"බිල දෙන්න, කරුණාකරලා.",reading:"රාචුන්, මොලීම්."}],
examples:[
{sr:"Dobar dan. Jedan giros i vodu, molim.",reading:"දොබාර් දාන්. යෙදාන් ගිරොස් ඉ වොදු, මොලීම්.",si:"සුබ දවසක්. ගයිරෝස් එකක් සහ වතුර එකක් දෙන්න."},
{sr:"Želeo bih pomfrit kao prilog.",reading:"ෂෙලෙඔ බිහ් පොම්ෆ්‍රිත් කාඔ ප්‍රිලොග්.",si:"මට අමතර ආහාරයට ෆ්‍රෙන්ච් ෆ්‍රයිස් ඕනේ."},
{sr:"Može li sos sa strane?",reading:"මොෂෙ ලි සොස් සා ස්ත්‍රානෙ?",si:"සෝස් එක වෙනම දෙන්න පුළුවන්ද?"},
{sr:"Za poneti, molim.",reading:"සා පොනෙති, මොලීම්.",si:"ගෙන යන්නයි, කරුණාකරලා."}],
dialogue:[
{sr:"Dobar dan! Mogu li da vidim jelovnik?",reading:"දොබාර් දාන්! මොගු ලි දා විදිම් යෙලොව්නික්?",si:"සුබ දවසක්! මට මෙනුව බලන්න පුළුවන්ද?"},
{sr:"Naravno. Izvolite.",reading:"නාරාව්නො. ඉස්වොලිතෙ.",si:"අනිවාර්යයෙන්. මෙන්න."},
{sr:"Želeo bih jedan giros i vodu.",reading:"ෂෙලෙඔ බිහ් යෙදාන් ගිරොස් ඉ වොදු.",si:"මට ගයිරෝස් එකක් සහ වතුර එකක් ඕනේ."},
{sr:"Želite li pomfrit uz to?",reading:"ෂෙලිතෙ ලි පොම්ෆ්‍රිත් උස් තො?",si:"ඒ සමඟ ෆ්‍රෙන්ච් ෆ්‍රයිස් ඕනේද?"},
{sr:"Da, i sos sa strane, molim.",reading:"දා, ඉ සොස් සා ස්ත්‍රානෙ, මොලීම්.",si:"ඔව්, සෝස් එක වෙනමත් දෙන්න."},
{sr:"U redu. Račun ćete dobiti na kraju.",reading:"උ රෙදු. රාචුන් චෙතෙ දොබිති නා ක්‍රායු.",si:"හරි. අවසානයේ ඔබට බිල ලැබේවි."}],
listeningPractice:{prompt:"Listen and choose the correct meaning: “Želeo bih jelovnik, molim.”",audio:"Želeo bih jelovnik, molim.",options:["මට මෙනුවක් දෙන්න, කරුණාකරලා.","මට පාර්සලයක් යවන්න ඕනේ.","මම පසුව කතා කරන්නම්."],readings:["ෂෙලෙඔ බිහ් යෙලොව්නික්, මොලීම්.","ෂෙලෙඔ බිහ් යෙලොව්නික්, මොලීම්.","ෂෙලෙඔ බිහ් යෙලොව්නික්, මොලීම්."],answer:0,meaning:"Želeo bih jelovnik, molim. = මට මෙනුවක් දෙන්න, කරුණාකරලා."},
practice:[
{prompt:"“මෙනුව” යන Serbian වචනය තෝරන්න.",options:["Račun","Jelovnik","Piće"],answer:1,explanation:"Jelovnik = මෙනුව."},
{prompt:"“බිල දෙන්න, කරුණාකරලා” කියන්නේ?",options:["Račun, molim.","Dobar dan.","Za poneti."],answer:0,explanation:"Račun, molim. = බිල දෙන්න, කරුණාකරලා."},
{prompt:"“ගෙන යාම සඳහා” තෝරන්න.",options:["Glavno jelo","Prilog","Za poneti"],answer:2,explanation:"Za poneti = ගෙන යාම සඳහා."},
{prompt:"“ළූණු නැතිව දෙන්න පුළුවන්ද?” කියන්නේ?",options:["Može li bez luka?","Gde je stanica?","Koliko je sati?"],answer:0,explanation:"Može li bez luka? = ළූණු නැතිව දෙන්න පුළුවන්ද?"}]}
,{id:"sr-a1-u10-l2",unit:"පාරිභෝගික සේවය සහ සරල ගැටලු",title:"පාඩම 23 · පාරිභෝගික සේවය සහ සරල ගැටලු",objective:"සේවකයෙකුගෙන් උදව් ඉල්ලීම, ඇණවුම පැහැදිලි කිරීම සහ සරල ගැටලුවක් ආචාරශීලීව දැනුම් දීම.",
vocabulary:[
{word:"Pomoć",reading:"පොමොච්",meaning:"උදව්ව",example:"Treba mi pomoć.",exampleReading:"ත්‍රෙබා මි පොමොච්.",translation:"මට උදව් අවශ්‍යයි."},
{word:"Pogrešno",reading:"පොග්‍රෙෂ්නො",meaning:"වැරදි ලෙස",example:"Ovo je pogrešno jelo.",exampleReading:"ඔවො යේ පොග්‍රෙෂ්නො යෙලො.",translation:"මේක වැරදි ආහාරයයි."},
{word:"Nedostaje",reading:"නෙදොස්තායේ",meaning:"අඩුයි / නැතිවී ඇත",example:"Nedostaje jedan sok.",exampleReading:"නෙදොස්තායේ යෙදාන් සොක්.",translation:"ජූස් එකක් අඩුයි."},
{word:"Čekati",reading:"චෙකාති",meaning:"බලා සිටීම",example:"Koliko dugo treba da čekam?",exampleReading:"කොලිකො දුගො ත්‍රෙබා දා චෙකාම්?",translation:"මට කොපමණ වේලාවක් බලා සිටින්න ඕනේද?"},
{word:"Zameniti",reading:"සාමෙනිති",meaning:"මාරු කිරීම",example:"Možete li da zamenite ovo?",exampleReading:"මොෂෙතෙ ලි දා සාමෙනිතෙ ඔවො?",translation:"ඔබට මේක මාරු කරන්න පුළුවන්ද?"},
{word:"Hladno",reading:"හ්ලාද්නො",meaning:"සිසිල් / සීතල",example:"Jelo je hladno.",exampleReading:"යෙලො යේ හ්ලාද්නො.",translation:"ආහාරය සීතලයි."},
{word:"Toplo",reading:"තොප්ලො",meaning:"උණුසුම්",example:"Može li da bude toplo?",exampleReading:"මොෂෙ ලි දා බුදෙ තොප්ලො?",translation:"මේක උණුසුම් කරලා දෙන්න පුළුවන්ද?"},
{word:"Izvinjenje",reading:"ඉස්වින්‍යෙන්‍යෙ",meaning:"සමාව ඉල්ලීම",example:"Hvala na izvinjenju.",exampleReading:"හ්වාලා නා ඉස්වින්‍යෙන්‍යු.",translation:"සමාව ඉල්ලීම ගැන ස්තුතියි."}],
grammarTitle:"ව්‍යාකරණය · ගැටලුවක් පැහැදිලි කිරීම සහ ඉල්ලීම",
grammar:"ගැටලුවක් පෙන්වීමට “Ovo nije ...” (මේක ... නෙවෙයි) සහ “Nedostaje ...” ( ... අඩුයි) යොදන්න. ආචාරශීලී ඉල්ලීමක් සඳහා “Možete li da ...?” (ඔබට ... කරන්න පුළුවන්ද?) කියන්න. අවසානයේ “Hvala na pomoći.” කියා ස්තුති කරන්න.",
grammarTerms:[
{sr:"Izvinite, ovo nije moja porudžbina.",si:"සමාවෙන්න, මේක මගේ ඇණවුම නෙවෙයි.",reading:"ඉස්විනිතෙ, ඔවො නියේ මොයා පොරූජ්බිනා."},
{sr:"Nedostaje jedan sok.",si:"ජූස් එකක් අඩුයි.",reading:"නෙදොස්තායේ යෙදාන් සොක්."},
{sr:"Možete li da proverite?",si:"ඔබට පරීක්ෂා කරන්න පුළුවන්ද?",reading:"මොෂෙතෙ ලි දා ප්‍රොවෙරිතෙ?"},
{sr:"Možete li da zamenite ovo?",si:"ඔබට මේක මාරු කරන්න පුළුවන්ද?",reading:"මොෂෙතෙ ලි දා සාමෙනිතෙ ඔවො?"},
{sr:"Hvala na pomoći.",si:"උදව්වට ස්තුතියි.",reading:"හ්වාලා නා පොමොචි."}],
examples:[
{sr:"Izvinite, naručio sam vodu, ne sok.",reading:"ඉස්විනිතෙ, නාරූචියො සාම් වොදු, නේ සොක්.",si:"සමාවෙන්න, මම ඇණවුම් කළේ වතුර, ජූස් නෙවෙයි."},
{sr:"Nedostaje jedan sendvič iz porudžbine.",reading:"නෙදොස්තායේ යෙදාන් සෙන්ද්විච් ඉස් පොරූජ්බිනෙ.",si:"ඇණවුමේ සැන්ඩ්විච් එකක් අඩුයි."},
{sr:"Možete li da proverite račun?",reading:"මොෂෙතෙ ලි දා ප්‍රොවෙරිතෙ රාචුන්?",si:"ඔබට බිල පරීක්ෂා කරන්න පුළුවන්ද?"},
{sr:"Hrana je hladna. Može li da se zagreje?",reading:"හ්‍රානා යේ හ්ලාද්නා. මොෂෙ ලි දා සේ සාග්‍රෙයේ?",si:"කෑම සීතලයි. ඒක උණුසුම් කරන්න පුළුවන්ද?"}],
dialogue:[
{sr:"Izvinite, mogu li da vas pitam nešto?",reading:"ඉස්විනිතෙ, මොගු ලි දා වාස් පීතාම් නෙෂ්තො?",si:"සමාවෙන්න, මට දෙයක් අහන්න පුළුවන්ද?"},
{sr:"Naravno. Kako mogu da pomognem?",reading:"නාරාව්නො. කාකො මොගු දා පොමොග්නෙම්?",si:"අනිවාර්යයෙන්. මට උදව් කරන්න පුළුවන් කොහොමද?"},
{sr:"Nedostaje jedan sok iz porudžbine.",reading:"නෙදොස්තායේ යෙදාන් සොක් ඉස් පොරූජ්බිනෙ.",si:"ඇණවුමේ ජූස් එකක් අඩුයි."},
{sr:"Izvinite zbog toga. Odmah ću proveriti.",reading:"ඉස්විනිතෙ ස්බොග් තොගා. ඔද්මාහ් චු ප්‍රොවෙරිති.",si:"ඒ ගැන සමාවෙන්න. මම දැන්ම පරීක්ෂා කරන්නම්."},
{sr:"Hvala. Takođe, račun nije tačan.",reading:"හ්වාලා. තාකොජෙ, රාචුන් නියේ තාචාන්.",si:"ස්තුතියි. ඒ වගේම බිලත් නිවැරදි නැහැ."},
{sr:"Razumem. Proverićemo sve. Hvala na strpljenju.",reading:"රාසුමෙම්. ප්‍රොවෙරිචෙමො ස්වේ. හ්වාලා නා ස්ත්‍රප්ල්යෙනු.",si:"මට තේරෙනවා. අපි සියල්ල පරීක්ෂා කරන්නම්. ඉවසීම ගැන ස්තුතියි."}],
listeningPractice:{prompt:"Listen and choose the correct meaning: “Nedostaje jedan sok iz porudžbine.”",audio:"Nedostaje jedan sok iz porudžbine.",options:["ඇණවුමේ ජූස් එකක් අඩුයි.","කාලගුණය හොඳයි.","මගේ දුරකථනය අලුත්."],readings:["නෙදොස්තායේ යෙදාන් සොක් ඉස් පොරූජ්බිනෙ.","නෙදොස්තායේ යෙදාන් සොක් ඉස් පොරූජ්බිනෙ.","නෙදොස්තායේ යෙදාන් සොක් ඉස් පොරූජ්බිනෙ."],answer:0,meaning:"Nedostaje jedan sok iz porudžbine. = ඇණවුමේ ජූස් එකක් අඩුයි."},
practice:[
{prompt:"“මට උදව් අවශ්‍යයි” කියන්නේ?",options:["Treba mi pomoć.","Dobar dan.","Račun, molim."],answer:0,explanation:"Treba mi pomoć = මට උදව් අවශ්‍යයි."},
{prompt:"“ඇණවුමේ එකක් අඩුයි” යන අදහසට ගැළපෙන්නේ?",options:["Sve je dobro.","Nedostaje jedan sok.","Želim jelovnik."],answer:1,explanation:"Nedostaje = අඩුයි / නැතිවී ඇත."},
{prompt:"“ඔබට මේක මාරු කරන්න පුළුවන්ද?” තෝරන්න.",options:["Možete li da zamenite ovo?","Koliko košta?","Gde je kuhinja?"],answer:0,explanation:"Možete li da zamenite ovo? = ඔබට මේක මාරු කරන්න පුළුවන්ද?"},
{prompt:"“උදව්වට ස්තුතියි” කියන්නේ?",options:["Nema problema.","Hvala na pomoći.","Doviđenja."],answer:1,explanation:"Hvala na pomoći = උදව්වට ස්තුතියි."}]}


,{
id:"sr-a1-u10-l3",unit:"දුරකථන ඇමතුම් සහ පණිවිඩ",title:"පාඩම 24 · දුරකථන ඇමතුම් සහ පණිවිඩ",objective:"දුරකථනයෙන් කතා කිරීම, ඇමතුමකට පිළිතුරු දීම සහ කෙටි පණිවිඩ යැවීම.",
vocabulary:[
{word:"Poziv",reading:"පොසිව්",meaning:"දුරකථන ඇමතුම",example:"Imam jedan poziv.",exampleReading:"ඉමාම් යෙදාන් පොසිව්.",translation:"මට ඇමතුමක් තියෙනවා."},
{word:"Poruka",reading:"පොරූකා",meaning:"පණිවිඩය",example:"Poslao sam poruku.",exampleReading:"පොස්ලාඔ සාම් පොරූකු.",translation:"මම පණිවිඩයක් යැව්වා."},
{word:"Broj telefona",reading:"බ්‍රොයි තෙලෙෆොනා",meaning:"දුරකථන අංකය",example:"Koji je tvoj broj telefona?",exampleReading:"කොයි යේ ත්වොයි බ්‍රොයි තෙලෙෆොනා?",translation:"ඔයාගේ දුරකථන අංකය මොකක්ද?"},
{word:"Javiti se",reading:"යාවිති සේ",meaning:"ඇමතුමට පිළිතුරු දීම",example:"Mogu li da se javim kasnije?",exampleReading:"මොගු ලි දා සේ යාවිම් කාස්නියේ?",translation:"මට පසුව ඇමතුමට පිළිතුරු දෙන්න පුළුවන්ද?"},
{word:"Zauzet",reading:"සාවුසෙත්",meaning:"කාර්යබහුල / දුරකථනය කාර්යබහුලයි",example:"Trenutno sam zauzet.",exampleReading:"ත්‍රෙනූත්නො සාම් සාවුසෙත්.",translation:"මම මේ වෙලාවේ කාර්යබහුලයි."},
{word:"Propušten poziv",reading:"ප්‍රොපුෂ්තෙන් පොසිව්",meaning:"මඟහැරුණු ඇමතුම",example:"Imam propušten poziv.",exampleReading:"ඉමාම් ප්‍රොපුෂ්තෙන් පොසිව්.",translation:"මට මඟහැරුණු ඇමතුමක් තියෙනවා."},
{word:"Poslati",reading:"පොස්ලාති",meaning:"යැවීම",example:"Mogu da ti pošaljem adresu.",exampleReading:"මොගු දා ති පොෂාල්යෙම් අද්‍රෙසු.",translation:"මට ඔයාට ලිපිනය එවන්න පුළුවන්."},
{word:"Odgovoriti",reading:"ඔද්ගොවොරිති",meaning:"පිළිතුරු දීම",example:"Odgovoriću na poruku.",exampleReading:"ඔද්ගොවොරිචු නා පොරූකු.",translation:"මම පණිවිඩයට පිළිතුරු දෙන්නම්."}],
grammarTitle:"ව්‍යාකරණය · දුරකථනයෙන් කතා කිරීම සහ අනාගත ක්‍රියාව",
grammar:"ඇමතුමකදී “Halo?” (හෙලෝ?) සහ “Ko je?” (කවුද?) යොදන්න. ඉල්ලීමක් සඳහා “Možeš li da ...?” කියන්න. අනාගත ක්‍රියාවක් සඳහා “ću + ක්‍රියාපදය” යෙදේ: “Odgovoriću” (මම පිළිතුරු දෙන්නම්).",
grammarTerms:[
{sr:"Halo, ko je?",si:"හෙලෝ, කවුද?",reading:"හාලො, කො යේ?"},
{sr:"Trenutno ne mogu da razgovaram.",si:"මට දැන් කතා කරන්න බැහැ.",reading:"ත්‍රෙනූත්නො නේ මොගු දා රාස්ගොවාරාම්."},
{sr:"Pozvaću te kasnije.",si:"මම ඔයාට පසුව කතා කරන්නම්.",reading:"පොස්වාචු තෙ කාස්නියේ."},
{sr:"Pošalji mi poruku.",si:"මට පණිවිඩයක් එවන්න.",reading:"පොෂාල්යි මි පොරූකු."},
{sr:"Odgovoriću uskoro.",si:"මම ඉක්මනින් පිළිතුරු දෙන්නම්.",reading:"ඔද්ගොවොරිචු උස්කොරො."}],
examples:[
{sr:"Izvini, trenutno sam zauzet.",reading:"ඉස්විනි, ත්‍රෙනූත්නො සාම් සාවුසෙත්.",si:"සමාවෙන්න, මම මේ වෙලාවේ කාර්යබහුලයි."},
{sr:"Pozvaću te posle posla.",reading:"පොස්වාචු තෙ පොස්ලෙ පොස්ලා.",si:"වැඩෙන් පස්සේ මම ඔයාට කතා කරන්නම්."},
{sr:"Pošalji mi adresu porukom.",reading:"පොෂාල්යි මි අද්‍රෙසු පොරූකොම්.",si:"පණිවිඩයකින් මට ලිපිනය එවන්න."},
{sr:"Video sam tvoj propušten poziv.",reading:"විදෙඔ සාම් ත්වොයි ප්‍රොපුෂ්තෙන් පොසිව්.",si:"මම ඔයාගේ මඟහැරුණු ඇමතුම දැක්කා."}],
dialogue:[
{sr:"Halo, ovde Marko.",reading:"හාලො, ඔව්ඩෙ මාර්කො.",si:"හෙලෝ, මෙතැන මාර්කෝ."},
{sr:"Zdravo! Možeš li sada da razgovaraš?",reading:"ස්ද්‍රාවො! මොෂෙෂ් ලි සාදා දා රාස්ගොවාරාෂ්?",si:"හෙලෝ! ඔයාට දැන් කතා කරන්න පුළුවන්ද?"},
{sr:"Izvini, trenutno sam zauzet.",reading:"ඉස්විනි, ත්‍රෙනූත්නො සාම් සාවුසෙත්.",si:"සමාවෙන්න, මම මේ වෙලාවේ කාර්යබහුලයි."},
{sr:"Nema problema. Pozvaću te kasnije.",reading:"නෙමා ප්‍රොබ්ලෙමා. පොස්වාචු තෙ කාස්නියේ.",si:"කමක් නැහැ. මම ඔයාට පසුව කතා කරන්නම්."},
{sr:"Možeš li da mi pošalješ adresu?",reading:"මොෂෙෂ් ලි දා මි පොෂාල්යෙෂ් අද්‍රෙසු?",si:"මට ලිපිනය එවන්න පුළුවන්ද?"},
{sr:"Naravno. Šaljem ti poruku.",reading:"නාරාව්නො. ෂාල්යෙම් ති පොරූකු.",si:"අනිවාර්යයෙන්. මම ඔයාට පණිවිඩයක් එවනවා."}],
listeningPractice:{prompt:"Listen and choose the correct meaning: “Pozvaću te kasnije.”",audio:"Pozvaću te kasnije.",options:["මම ඔයාට පසුව කතා කරන්නම්.","මම පාර්සලයක් යවනවා.","මට වෛද්‍යවරයෙක් අවශ්‍යයි."],readings:["පොස්වාචු තෙ කාස්නියේ.","පොස්වාචු තෙ කාස්නියේ.","පොස්වාචු තෙ කාස්නියේ."],answer:0,meaning:"Pozvaću te kasnije. = මම ඔයාට පසුව කතා කරන්නම්."},
practice:[
{prompt:"“පණිවිඩය” යන Serbian වචනය තෝරන්න.",options:["Poziv","Poruka","Broj"],answer:1,explanation:"Poruka = පණිවිඩය."},
{prompt:"“මම ඔයාට පසුව කතා කරන්නම්” කියන්නේ?",options:["Pozvaću te kasnije.","Trenutno sam zauzet.","Pošalji mi poruku."],answer:0,explanation:"Pozvaću te kasnije = මම ඔයාට පසුව කතා කරන්නම්."},
{prompt:"“මඟහැරුණු ඇමතුම” තෝරන්න.",options:["Broj telefona","Propušten poziv","Odgovoriti"],answer:1,explanation:"Propušten poziv = මඟහැරුණු ඇමතුම."},
{prompt:"“මට පණිවිඩයක් එවන්න” කියන්නේ?",options:["Javi se kasnije.","Pošalji mi poruku.","Ko je? "],answer:1,explanation:"Pošalji mi poruku = මට පණිවිඩයක් එවන්න."}]
},
{
id:"sr-a1-u10-l4",unit:"තැපැල් කාර්යාලය සහ පාර්සල්",title:"පාඩම 25 · තැපැල් කාර්යාලය සහ පාර්සල්",objective:"තැපැල් කාර්යාලයේදී පාර්සලයක් යැවීම, ලිපිනයක් ලබාදීම සහ භාරගැනීම ගැන විමසීම.",
vocabulary:[
{word:"Pošta",reading:"පොෂ්තා",meaning:"තැපැල් කාර්යාලය / තැපෑල",example:"Pošta je blizu stanice.",exampleReading:"පොෂ්තා යේ බ්ලිසු ස්තානිත්සෙ.",translation:"තැපැල් කාර්යාලය නැවතුම්පොළ අසලයි."},
{word:"Paket",reading:"පාකෙත්",meaning:"පාර්සලය",example:"Želim da pošaljem paket.",exampleReading:"ෂෙලිම් දා පොෂාල්යෙම් පාකෙත්.",translation:"මට පාර්සලයක් යවන්න ඕනේ."},
{word:"Pošiljka",reading:"පොෂිල්කා",meaning:"තැපැල් භාණ්ඩය / යැවූ භාණ්ඩය",example:"Pošiljka stiže sutra.",exampleReading:"පොෂිල්කා ස්තීෂෙ සුත්‍රා.",translation:"යැවූ භාණ්ඩය හෙට ලැබෙනවා."},
{word:"Adresa",reading:"අද්‍රෙසා",meaning:"ලිපිනය",example:"Napišite adresu ovde.",exampleReading:"නාපීෂිතෙ අද්‍රෙසු ඔව්දෙ.",translation:"මෙතැන ලිපිනය ලියන්න."},
{word:"Primalac",reading:"ප්‍රිමාලාත්ස්",meaning:"ලබන්නා",example:"Ko je primalac paketa?",exampleReading:"කො යේ ප්‍රිමාලාත්ස් පාකෙතා?",translation:"පාර්සලයේ ලබන්නා කවුද?"},
{word:"Pošiljalac",reading:"පොෂිල්යාලාත්ස්",meaning:"යවන්නා",example:"Upišite ime pošiljaoca.",exampleReading:"උපීෂිතෙ ඉමෙ පොෂිල්යාලාත්සා.",translation:"යවන්නාගේ නම ලියන්න."},
{word:"Poslati",reading:"පොස්ලාති",meaning:"යැවීම",example:"Mogu da pošaljem dokument.",exampleReading:"මොගු දා පොෂාල්යෙම් දොකුමෙන්ත්.",translation:"මට ලේඛනය යවන්න පුළුවන්."},
{word:"Preuzeti",reading:"ප්‍රෙඋසෙති",meaning:"භාරගැනීම / ලබාගැනීම",example:"Gde mogu da preuzmem paket?",exampleReading:"ග්දේ මොගු දා ප්‍රෙඋස්මෙම් පාකෙත්?",translation:"මට පාර්සලය ලබාගන්න පුළුවන් කොහෙන්ද?"}],
grammarTitle:"ව්‍යාකරණය · යැවීම සහ ලබන්නා ගැන විමසීම",
grammar:"“Želim da pošaljem ...” යනු “මට ... යවන්න ඕනේ” යන්නයි. “Za koga?” (කාටද?) සහ “Od koga?” (කාගෙන්ද?) යන ප්‍රශ්න භාවිත කරන්න. “Gde mogu da ...?” යනු “මට ... කරන්න පුළුවන් කොහෙන්ද?” යන්නයි.",
grammarTerms:[
{sr:"Želim da pošaljem paket.",si:"මට පාර්සලයක් යවන්න ඕනේ.",reading:"ෂෙලිම් දා පොෂාල්යෙම් පාකෙත්."},
{sr:"Ko je primalac?",si:"ලබන්නා කවුද?",reading:"කො යේ ප්‍රිමාලාත්ස්?"},
{sr:"Ovo je moja adresa.",si:"මේ මගේ ලිපිනයයි.",reading:"ඔවො යේ මොයා අද්‍රෙසා."},
{sr:"Kada stiže pošiljka?",si:"යැවූ භාණ්ඩය ලැබෙන්නේ කවදාද?",reading:"කාදා ස්තීෂෙ පොෂිල්කා?"},
{sr:"Gde mogu da preuzmem paket?",si:"මට පාර්සලය ලබාගන්න පුළුවන් කොහෙන්ද?",reading:"ග්දේ මොගු දා ප්‍රෙඋස්මෙම් පාකෙත්?"}],
examples:[
{sr:"Želim da pošaljem paket u Beograd.",reading:"ෂෙලිම් දා පොෂාල්යෙම් පාකෙත් උ බෙඔග්‍රාද්.",si:"මට බෙල්ග්‍රේඩ් වෙත පාර්සලයක් යවන්න ඕනේ."},
{sr:"Ovo je adresa primaoca.",reading:"ඔවො යේ අද්‍රෙසා ප්‍රිමාඔත්සා.",si:"මේ ලබන්නාගේ ලිපිනයයි."},
{sr:"Koliko košta slanje paketa?",reading:"කොලිකො කොෂ්තා ස්ලාන්‍යෙ පාකෙතා?",si:"පාර්සලය යැවීමට කොපමණ මුදලක් වැය වෙනවාද?"},
{sr:"Pošiljku mogu da preuzmem sutra.",reading:"පොෂිල්කු මොගු දා ප්‍රෙඋස්මෙම් සුත්‍රා.",si:"මට හෙට යැවූ භාණ්ඩය ලබාගන්න පුළුවන්."}],
dialogue:[
{sr:"Dobar dan. Želim da pošaljem paket.",reading:"දොබාර් දාන්. ෂෙලිම් දා පොෂාල්යෙම් පාකෙත්.",si:"සුබ දවසක්. මට පාර්සලයක් යවන්න ඕනේ."},
{sr:"Naravno. Imate li adresu primaoca?",reading:"නාරාව්නො. ඉමාතෙ ලි අද්‍රෙසු ප්‍රිමාඔත්සා?",si:"අනිවාර්යයෙන්. ලබන්නාගේ ලිපිනය ඔබ ළඟ තියෙනවාද?"},
{sr:"Da, ovde je adresa.",reading:"දා, ඔව්දෙ යේ අද්‍රෙසා.",si:"ඔව්, මෙන්න ලිපිනය."},
{sr:"Koje je ime pošiljaoca?",reading:"කොයේ යේ ඉමෙ පොෂිල්යාලාත්සා?",si:"යවන්නාගේ නම මොකක්ද?"},
{sr:"Moje ime je Marko.",reading:"මොයේ ඉමෙ යේ මාර්කො.",si:"මගේ නම මාර්කෝ."},
{sr:"U redu. Pošiljka stiže za tri dana.",reading:"උ රෙදු. පොෂිල්කා ස්තීෂෙ සා ත්‍රි දානා.",si:"හරි. යැවූ භාණ්ඩය දින තුනකින් ලැබෙනවා."}],
listeningPractice:{prompt:"Listen and choose the correct meaning: “Želim da pošaljem paket.”",audio:"Želim da pošaljem paket.",options:["මට පාර්සලයක් යවන්න ඕනේ.","මට බිල ගෙවන්න ඕනේ.","මට හමුවීමක් අවලංගු කරන්න ඕනේ."],readings:["ෂෙලිම් දා පොෂාල්යෙම් පාකෙත්.","ෂෙලිම් දා පොෂාල්යෙම් පාකෙත්.","ෂෙලිම් දා පොෂාල්යෙම් පාකෙත්."],answer:0,meaning:"Želim da pošaljem paket. = මට පාර්සලයක් යවන්න ඕනේ."},
practice:[
{prompt:"“පාර්සලය” යන Serbian වචනය?",options:["Pošta","Paket","Adresa"],answer:1,explanation:"Paket = පාර්සලය."},
{prompt:"“ලබන්නා” තෝරන්න.",options:["Pošiljalac","Primalac","Pošiljka"],answer:1,explanation:"Primalac = ලබන්නා."},
{prompt:"“මට පාර්සලයක් යවන්න ඕනේ” කියන්නේ?",options:["Želim da pošaljem paket.","Želim da preuzmem paket.","Gde je pošta?"],answer:0,explanation:"Želim da pošaljem paket = මට පාර්සලයක් යවන්න ඕනේ."},
{prompt:"“ලිපිනය” යන වචනය?",options:["Adresa","Paket","Pošta"],answer:0,explanation:"Adresa = ලිපිනය."}]
}

,{
id:"sr-a1-u10-l5",unit:"වෛද්‍යවරයා සහ සෞඛ්‍යය",title:"පාඩම 26 · වෛද්‍යවරයා සහ සෞඛ්‍යය",objective:"වෛද්‍යවරයකු හමුවීමට වේලාවක් ඉල්ලීම, සාමාන්‍ය රෝග ලක්ෂණ පැවසීම සහ සරල උපදෙස් තේරුම් ගැනීම.",
vocabulary:[
{word:"Lekar",reading:"ලෙකාර්",meaning:"වෛද්‍යවරයා",example:"Moram da idem kod lekara.",exampleReading:"මොරම් දා ඉදෙම් කොද් ලෙකාරා.",translation:"මට වෛද්‍යවරයා ළඟට යන්න ඕනේ."},
{word:"Pregled",reading:"ප්‍රෙග්ලෙද්",meaning:"වෛද්‍ය පරීක්ෂාව",example:"Imam pregled danas.",exampleReading:"ඉමාම් ප්‍රෙග්ලෙද් දානස්.",translation:"මට අද පරීක්ෂාවක් තියෙනවා."},
{word:"Termin",reading:"තෙර්මින්",meaning:"වෙන්කරගත් වේලාව / හමුවීමේ වේලාව",example:"Želim da zakažem termin.",exampleReading:"ෂෙලිම් දා සාකාෂෙම් තෙර්මින්.",translation:"මට හමුවීමේ වේලාවක් වෙන්කරගන්න ඕනේ."},
{word:"Bol",reading:"බොල්",meaning:"වේදනාව",example:"Imam bol u grlu.",exampleReading:"ඉමාම් බොල් උ ග්‍ර්ලු.",translation:"මගේ උගුරේ වේදනාවක් තියෙනවා."},
{word:"Glava",reading:"ග්ලාවා",meaning:"හිස",example:"Boli me glava.",exampleReading:"බොලි මෙ ග්ලාවා.",translation:"මගේ හිස රිදෙනවා."},
{word:"Temperatura",reading:"තෙම්පෙරතූරා",meaning:"උණ / ශරීර උෂ්ණත්වය",example:"Imam temperaturu.",exampleReading:"ඉමාම් තෙම්පෙරතූරු.",translation:"මට උණ තියෙනවා."},
{word:"Apoteka",reading:"අපොතෙකා",meaning:"ඖෂධහල",example:"Gde je najbliža apoteka?",exampleReading:"ග්දේ යේ නායිබ්ලිෂා අපොතෙකා?",translation:"ළඟම ඖෂධහල කොහෙද?"},
{word:"Recept",reading:"රෙත්සෙප්ත්",meaning:"වෛද්‍ය බෙහෙත් වට්ටෝරුව",example:"Imam recept od lekara.",exampleReading:"ඉමාම් රෙත්සෙප්ත් ඔද් ලෙකාරා.",translation:"මට වෛද්‍යවරයාගෙන් බෙහෙත් වට්ටෝරුවක් තියෙනවා."}],
grammarTitle:"ව්‍යාකරණය · රෝග ලක්ෂණ සහ වේලාවක් වෙන්කරගැනීම",
grammar:"“Boli me ...” යනු “මගේ ... රිදෙනවා” යන්නයි. උදාහරණ: “Boli me glava” (හිස රිදෙනවා), “Boli me grlo” (උගුර රිදෙනවා). “Želim da zakažem ...” යනු හමුවීමේ වේලාවක් වෙන්කරගැනීමට භාවිත කරන ආචාරශීලී වාක්‍ය රටාවකි.",
grammarTerms:[
{sr:"Želim da zakažem pregled.",si:"මට වෛද්‍ය පරීක්ෂාවක් වෙන්කරගන්න ඕනේ.",reading:"ෂෙලිම් දා සාකාෂෙම් ප්‍රෙග්ලෙද්."},
{sr:"Boli me glava.",si:"මගේ හිස රිදෙනවා.",reading:"බොලි මෙ ග්ලාවා."},
{sr:"Imam temperaturu.",si:"මට උණ තියෙනවා.",reading:"ඉමාම් තෙම්පෙරතූරු."},
{sr:"Od kada imate simptome?",si:"ඔබට රෝග ලක්ෂණ තියෙන්නේ කවදා සිටද?",reading:"ඔද් කාදා ඉමාතෙ සිම්ප්තොමෙ?"},
{sr:"Da li treba da dođem sutra?",si:"මම හෙට එන්න ඕනෙද?",reading:"දා ලි ත්‍රෙබා දා දොජෙම් සුත්‍රා?"}],
examples:[
{sr:"Dobar dan. Želim da zakažem pregled.",reading:"දොබාර් දාන්. ෂෙලිම් දා සාකාෂෙම් ප්‍රෙග්ලෙද්.",si:"සුබ දවසක්. මට වෛද්‍ය පරීක්ෂාවක් වෙන්කරගන්න ඕනේ."},
{sr:"Boli me grlo i imam kašalj.",reading:"බොලි මෙ ග්‍ර්ලො ඉ ඉමාම් කාෂාල්.",si:"මගේ උගුර රිදෙනවා, කැස්සකුත් තියෙනවා."},
{sr:"Da li imate slobodan termin danas?",reading:"දා ලි ඉමාතෙ ස්ලොබොදාන් තෙර්මින් දානස්?",si:"අද ඔබට හිස් වේලාවක් තියෙනවාද?"},
{sr:"Gde je najbliža apoteka?",reading:"ග්දේ යේ නායිබ්ලිෂා අපොතෙකා?",si:"ළඟම ඖෂධහල කොහෙද?"}],
dialogue:[
{sr:"Dobar dan. Želim da zakažem pregled.",reading:"දොබාර් දාන්. ෂෙලිම් දා සාකාෂෙම් ප්‍රෙග්ලෙද්.",si:"සුබ දවසක්. මට පරීක්ෂාවක් වෙන්කරගන්න ඕනේ."},
{sr:"Naravno. Šta vas muči?",reading:"නාරාව්නො. ෂ්තා වාස් මුචි?",si:"අනිවාර්යයෙන්. ඔබට තියෙන අපහසුතාවය මොකක්ද?"},
{sr:"Boli me glava i imam temperaturu.",reading:"බොලි මෙ ග්ලාවා ඉ ඉමාම් තෙම්පෙරතූරු.",si:"මගේ හිස රිදෙනවා, උණත් තියෙනවා."},
{sr:"Da li možete da dođete sutra u deset?",reading:"දා ලි මොෂෙතෙ දා දොජෙතෙ සුත්‍රා උ දෙසෙත්?",si:"ඔබට හෙට දහයට එන්න පුළුවන්ද?"},
{sr:"Da, odgovara mi.",reading:"දා, ඔද්ගොවාරා මි.",si:"ඔව්, ඒ වේලාව මට ගැළපෙනවා."},
{sr:"U redu. Ponesite zdravstvenu knjižicu.",reading:"උ රෙදු. පොනෙසිටෙ ස්ද්‍රාව්ස්ත්වෙනු ක්න්යිෂිත්සු.",si:"හරි. සෞඛ්‍ය කාඩ්පත රැගෙන එන්න."}],
listeningPractice:{prompt:"Listen and choose the correct meaning: “Imam zakazan pregled kod lekara.”",audio:"Imam zakazan pregled kod lekara.",options:["මට වෛද්‍යවරයා සමඟ පරීක්ෂණ වේලාවක් වෙන්කරලා තියෙනවා.","මට බස් ටිකට් එකක් ඕනේ.","කඩය වහලා."],readings:["ඉමාම් සාකාසාන් ප්‍රෙග්ලෙද් කොද් ලෙකාරා.","ඉමාම් සාකාසාන් ප්‍රෙග්ලෙද් කොද් ලෙකාරා.","ඉමාම් සාකාසාන් ප්‍රෙග්ලෙද් කොද් ලෙකාරා."],answer:0,meaning:"Imam zakazan pregled kod lekara. = මට වෛද්‍යවරයා සමඟ පරීක්ෂණ වේලාවක් වෙන්කරලා තියෙනවා."},
practice:[
{prompt:"“වෛද්‍යවරයා” යන Serbian වචනය තෝරන්න.",options:["Lekar","Recept","Bol"],answer:0,explanation:"Lekar = වෛද්‍යවරයා."},
{prompt:"“මගේ හිස රිදෙනවා” කියන්නේ?",options:["Imam pregled.","Boli me glava.","Gde je apoteka?"],answer:1,explanation:"Boli me glava = මගේ හිස රිදෙනවා."},
{prompt:"“ඖෂධහල” යන වචනය?",options:["Termin","Pregled","Apoteka"],answer:2,explanation:"Apoteka = ඖෂධහල."},
{prompt:"“මට පරීක්ෂාවක් වෙන්කරගන්න ඕනේ” තෝරන්න.",options:["Želim da zakažem pregled.","Imam recept.","Boli me grlo."],answer:0,explanation:"Želim da zakažem pregled = මට පරීක්ෂාවක් වෙන්කරගන්න ඕනේ."}]
}
,{
id:"sr-a1-u10-l6",unit:"හදිසි සේවා සහ උදව් ඉල්ලීම",title:"පාඩම 27 · හදිසි සේවා සහ උදව් ඉල්ලීම",objective:"හදිසි අවස්ථාවකදී උපකාර ඉල්ලීම, අවශ්‍ය සේවාව හඳුනාගැනීම සහ තම ස්ථානය පැහැදිලි කිරීම.",
vocabulary:[
{word:"Hitna pomoć",reading:"හිත්නා පොමොච්",meaning:"හදිසි වෛද්‍ය සේවාව",example:"Pozovite hitnu pomoć.",exampleReading:"පොසොවිතෙ හිත්නු පොමොච්.",translation:"හදිසි වෛද්‍ය සේවාව අමතන්න."},
{word:"Policija",reading:"පොලිත්සියා",meaning:"පොලීසිය",example:"Pozovite policiju, molim.",exampleReading:"පොසොවිතෙ පොලිත්සියු, මොලීම්.",translation:"කරුණාකර පොලීසිය අමතන්න."},
{word:"Vatrogasci",reading:"වතොරොගාස්ත්සි",meaning:"ගිනි නිවන සේවාව",example:"Gde su vatrogasci?",exampleReading:"ග්දේ සු වතොරොගාස්ත්සි?",translation:"ගිනි නිවන සේවාව කොහෙද?"},
{word:"Pomoć",reading:"පොමොච්",meaning:"උදව්ව / උපකාරය",example:"Treba mi pomoć.",exampleReading:"ත්‍රෙබා මි පොමොච්.",translation:"මට උදව් අවශ්‍යයි."},
{word:"Hitno",reading:"හිත්නො",meaning:"හදිසියි",example:"Ovo je hitno.",exampleReading:"ඔවො යේ හිත්නො.",translation:"මේක හදිසි අවස්ථාවක්."},
{word:"Adresa",reading:"අද්‍රෙසා",meaning:"ලිපිනය",example:"Moja adresa je u ovoj ulici.",exampleReading:"මොයා අද්‍රෙසා යේ උ ඔවොයි උලිත්සි.",translation:"මගේ ලිපිනය මේ වීදියේයි."},
{word:"Izgubio sam se",reading:"ඉස්ගුබියො සාම් සේ",meaning:"මට මඟ වැරදුණා (පිරිමි කථිකයා)",example:"Izvinite, izgubio sam se.",exampleReading:"ඉස්විනිතෙ, ඉස්ගුබියො සාම් සේ.",translation:"සමාවෙන්න, මට මඟ වැරදුණා."},
{word:"Gde sam?",reading:"ග්දේ සාම්?",meaning:"මම ඉන්නේ කොහෙද?",example:"Ne znam gde sam.",exampleReading:"නේ සාම් ග්දේ සාම්.",translation:"මම ඉන්නේ කොහෙද කියලා මට දන්නේ නැහැ."}],
grammarTitle:"ව්‍යාකරණය · හදිසි අවස්ථාවක උදව් ඉල්ලීම",
grammar:"“Treba mi pomoć” යනු “මට උදව් අවශ්‍යයි” යන්නයි. “Pozovite ...” යනු ගෞරවාන්විතව සේවාවක් අමතන්න කියන ඉල්ලීමකි. හදිසි සේවාව අමතන විට ඔබ සිටින ස්ථානය සහ සිදුවී ඇති දේ සරලව පැහැදිලි කරන්න. සැබෑ හදිසි අවස්ථාවකදී ප්‍රාදේශීය හදිසි සේවා අමතන්න.",
grammarTerms:[
{sr:"Treba mi pomoć.",si:"මට උදව් අවශ්‍යයි.",reading:"ත්‍රෙබා මි පොමොච්."},
{sr:"Ovo je hitno.",si:"මේක හදිසියි.",reading:"ඔවො යේ හිත්නො."},
{sr:"Pozovite hitnu pomoć.",si:"හදිසි වෛද්‍ය සේවාව අමතන්න.",reading:"පොසොවිතෙ හිත්නු පොමොච්."},
{sr:"Moja adresa je ...",si:"මගේ ලිපිනය ...",reading:"මොයා අද්‍රෙසා යේ ..."},
{sr:"Ne znam gde sam.",si:"මම ඉන්නේ කොහෙද කියලා මට දන්නේ නැහැ.",reading:"නේ සාම් ග්දේ සාම්."}],
examples:[
{sr:"Molim vas, treba mi pomoć.",reading:"මොලීම් වාස්, ත්‍රෙබා මි පොමොච්.",si:"කරුණාකර, මට උදව් අවශ්‍යයි."},
{sr:"Ovo je hitno. Pozovite policiju.",reading:"ඔවො යේ හිත්නො. පොසොවිතෙ පොලිත්සියු.",si:"මේක හදිසියි. පොලීසිය අමතන්න."},
{sr:"Nalazim se u Ulici Knez Mihailovoj.",reading:"නාලාසිම් සේ උ උලිත්සි ක්නෙස් මිහායිලොවොයි.",si:"මම ක්නෙස් මිහායිලෝවා වීදියේ ඉන්නේ."},
{sr:"Izvinite, izgubio sam se. Možete li da mi pomognete?",reading:"ඉස්විනිතෙ, ඉස්ගුබියො සාම් සේ. මොෂෙතෙ ලි දා මි පොමොග්නෙතෙ?",si:"සමාවෙන්න, මට මඟ වැරදුණා. මට උදව් කරන්න පුළුවන්ද?"}],
dialogue:[
{sr:"Izvinite, treba mi pomoć.",reading:"ඉස්විනිතෙ, ත්‍රෙබා මි පොමොච්.",si:"සමාවෙන්න, මට උදව් අවශ්‍යයි."},
{sr:"Naravno. Šta se dogodilo?",reading:"නාරාව්නො. ෂ්තා සේ දොගොදිලො?",si:"අනිවාර්යයෙන්. මොකක්ද සිදු වුණේ?"},
{sr:"Izgubio sam se i ne znam adresu.",reading:"ඉස්ගුබියො සාම් සේ ඉ නේ සාම් අද්‍රෙසු.",si:"මට මඟ වැරදුණා, ලිපිනයත් මට මතක නැහැ."},
{sr:"Gde se trenutno nalazite?",reading:"ග්දේ සේ ත්‍රෙනූත්නො නාලාසිටෙ?",si:"ඔබ දැන් සිටින්නේ කොහෙද?"},
{sr:"Nalazim se blizu autobuske stanice.",reading:"නාලාසිම් සේ බ්ලිසු ආවුතොබුස්කෙ ස්තානිත්සෙ.",si:"මම බස් නැවතුම්පොළ අසල ඉන්නේ."},
{sr:"U redu. Pomoći ćemo vam.",reading:"උ රෙදු. පොමොචි චෙමො වාම්.",si:"හරි. අපි ඔබට උදව් කරන්නම්."}],
listeningPractice:{prompt:"හඬ අසා නිවැරදි අර්ථය තෝරන්න: “Treba mi pomoć.”",audio:"Treba mi pomoć.",options:["මට උදව් අවශ්‍යයි.","මට ලිපිනය අවශ්‍යයි.","මම ගෙදර යනවා."],readings:["ත්‍රෙබා මි පොමොච්.","ත්‍රෙබා මි අද්‍රෙසා.","ඉදෙම් කුචි."],answer:0,meaning:"Treba mi pomoć. = මට උදව් අවශ්‍යයි."},
practice:[
{prompt:"“මට උදව් අවශ්‍යයි” කියන්නේ?",options:["Treba mi pomoć.","Gde sam?","Dobar dan."],answer:0,explanation:"Treba mi pomoć = මට උදව් අවශ්‍යයි."},
{prompt:"“පොලීසිය” යන වචනය තෝරන්න.",options:["Apoteka","Policija","Pošta"],answer:1,explanation:"Policija = පොලීසිය."},
{prompt:"“මේක හදිසියි” කියන්නේ?",options:["Ovo je hitno.","Ovo je dobro.","Gde je stanica?"],answer:0,explanation:"Ovo je hitno = මේක හදිසියි."},
{prompt:"“හදිසි වෛද්‍ය සේවාව” යන වචන?",options:["Vatrogasci","Hitna pomoć","Adresa"],answer:1,explanation:"Hitna pomoć = හදිසි වෛද්‍ය සේවාව."}]}
,{
id:"sr-a1-u10-l7",unit:"භාණ්ඩ මාරු කිරීම සහ ආපසු දීම",title:"පාඩම 28 · භාණ්ඩ මාරු කිරීම සහ ආපසු දීම",objective:"කඩයකදී භාණ්ඩයක ගැටලුවක් පැහැදිලි කිරීම, වෙනත් ප්‍රමාණයක් ඉල්ලීම සහ මුදල් ආපසු ලබාගැනීම ගැන විමසීම.",
vocabulary:[
{word:"Zamena",reading:"සාමෙනා",meaning:"මාරු කිරීම / වෙනුවට ලබාදීම",example:"Želim zamenu, molim.",exampleReading:"ෂෙලිම් සාමෙනු, මොලීම්.",translation:"මට භාණ්ඩය මාරු කරගන්න ඕනේ."},
{word:"Povraćaj novca",reading:"පොව්‍රාචායි නොව්ත්සා",meaning:"මුදල් ආපසු ලබාදීම",example:"Da li je moguć povraćaj novca?",exampleReading:"දා ලි යේ මොගුච් පොව්‍රාචායි නොව්ත්සා?",translation:"මුදල් ආපසු ලබාගන්න පුළුවන්ද?"},
{word:"Račun",reading:"රාචුන්",meaning:"බිල / රිසිට්පත",example:"Imam račun.",exampleReading:"ඉමාම් රාචුන්.",translation:"මගේ ළඟ රිසිට්පත තියෙනවා."},
{word:"Veličina",reading:"වෙලිචිනා",meaning:"ප්‍රමාණය",example:"Treba mi veća veličina.",exampleReading:"ත්‍රෙබා මි වෙචා වෙලිචිනා.",translation:"මට ඊට වඩා විශාල ප්‍රමාණයක් ඕනේ."},
{word:"Malo",reading:"මාලො",meaning:"කුඩා / ටිකක්",example:"Ovo mi je malo.",exampleReading:"ඔවො මි යේ මාලො.",translation:"මේක මට කුඩා වැඩියි."},
{word:"Veliko",reading:"වෙලිකො",meaning:"විශාල",example:"Ovo mi je veliko.",exampleReading:"ඔවො මි යේ වෙලිකො.",translation:"මේක මට විශාල වැඩියි."},
{word:"Neispravno",reading:"නෙඉස්ප්‍රාව්නො",meaning:"දෝෂ සහිත / නිසි ලෙස ක්‍රියා නොකරන",example:"Proizvod je neispravan.",exampleReading:"ප්‍රොයිස්වොද් යේ නෙඉස්ප්‍රාවාන්.",translation:"භාණ්ඩය දෝෂ සහිතයි."},
{word:"Drugi",reading:"ද්‍රුගි",meaning:"වෙනත් / දෙවැනි",example:"Mogu li da dobijem drugi?",exampleReading:"මොගු ලි දා දොබියෙම් ද්‍රුගි?",translation:"මට වෙනත් එකක් ලබාගන්න පුළුවන්ද?"}],
grammarTitle:"ව්‍යාකරණය · ගැටලුවක් පැහැදිලි කිරීම සහ විකල්පයක් ඉල්ලීම",
grammar:"“Ovo mi je malo/veliko” යනු “මේක මට කුඩා/විශාල වැඩියි” යන්නයි. “Mogu li da dobijem ...?” යනු වෙනත් භාණ්ඩයක් ඉල්ලන ආචාරශීලී රටාවකි. “Da li je moguć povraćaj novca?” යනු මුදල් ආපසු ලබාගත හැකිදැයි විමසීමයි.",
grammarTerms:[
{sr:"Ovo mi je malo.",si:"මේක මට කුඩා වැඩියි.",reading:"ඔවො මි යේ මාලො."},
{sr:"Treba mi veća veličina.",si:"මට ඊට වඩා විශාල ප්‍රමාණයක් ඕනේ.",reading:"ත්‍රෙබා මි වෙචා වෙලිචිනා."},
{sr:"Mogu li da dobijem drugi?",si:"මට වෙනත් එකක් ලබාගන්න පුළුවන්ද?",reading:"මොගු ලි දා දොබියෙම් ද්‍රුගි?"},
{sr:"Imam račun.",si:"මගේ ළඟ රිසිට්පත තියෙනවා.",reading:"ඉමාම් රාචුන්."},
{sr:"Da li je moguć povraćaj novca?",si:"මුදල් ආපසු ලබාගන්න පුළුවන්ද?",reading:"දා ලි යේ මොගුච් පොව්‍රාචායි නොව්ත්සා?"}],
examples:[
{sr:"Izvinite, ova košulja mi je mala.",reading:"ඉස්විනිතෙ, ඔවා කොෂුල්යා මි යේ මාලා.",si:"සමාවෙන්න, මේ කමිසය මට කුඩා වැඩියි."},
{sr:"Imate li veću veličinu?",reading:"ඉමාතෙ ලි වෙචු වෙලිචිනු?",si:"ඔබ ළඟ ඊට වඩා විශාල ප්‍රමාණයක් තියෙනවාද?"},
{sr:"Proizvod je neispravan. Imam račun.",reading:"ප්‍රොයිස්වොද් යේ නෙඉස්ප්‍රාවාන්. ඉමාම් රාචුන්.",si:"භාණ්ඩය දෝෂ සහිතයි. මගේ ළඟ රිසිට්පත තියෙනවා."},
{sr:"Da li mogu da zamenim ovaj proizvod?",reading:"දා ලි මොගු දා සාමෙනිම් ඔවායි ප්‍රොයිස්වොද්?",si:"මට මේ භාණ්ඩය මාරු කරගන්න පුළුවන්ද?"}],
dialogue:[
{sr:"Dobar dan. Mogu li da vam pomognem?",reading:"දොබාර් දාන්. මොගු ලි දා වාම් පොමොග්නෙම්?",si:"සුබ දවසක්. මට ඔබට උදව් කරන්න පුළුවන්ද?"},
{sr:"Da, ova košulja mi je mala.",reading:"දා, ඔවා කොෂුල්යා මි යේ මාලා.",si:"ඔව්, මේ කමිසය මට කුඩා වැඩියි."},
{sr:"Koju veličinu tražite?",reading:"කොයු වෙලිචිනු ත්‍රාෂිතෙ?",si:"ඔබ සොයන්නේ කුමන ප්‍රමාණයද?"},
{sr:"Treba mi veća veličina.",reading:"ත්‍රෙබා මි වෙචා වෙලිචිනා.",si:"මට ඊට වඩා විශාල ප්‍රමාණයක් ඕනේ."},
{sr:"Naravno. Evo druge veličine.",reading:"නාරාව්නො. එවො ද්‍රුගෙ වෙලිචිනෙ.",si:"අනිවාර්යයෙන්. මෙන්න වෙනත් ප්‍රමාණයක්."},
{sr:"Hvala. Mogu li da platim karticom?",reading:"හ්වාලා. මොගු ලි දා ප්ලාතිම් කාර්තිත්සොම්?",si:"ස්තුතියි. මට කාඩ්පතෙන් ගෙවන්න පුළුවන්ද?"}],
listeningPractice:{prompt:"හඬ අසා නිවැරදි අර්ථය තෝරන්න: “Imam račun.”",audio:"Imam račun.",options:["මගේ ළඟ රිසිට්පත තියෙනවා.","මට වෙනත් ප්‍රමාණයක් ඕනේ.","භාණ්ඩය අලුත්."],readings:["ඉමාම් රාචුන්.","ත්‍රෙබා මි වෙචා වෙලිචිනා.","ප්‍රොයිස්වොද් යේ නොව්."],answer:0,meaning:"Imam račun. = මගේ ළඟ රිසිට්පත තියෙනවා."},
practice:[
{prompt:"“රිසිට්පත” යන වචනය?",options:["Račun","Veličina","Zamena"],answer:0,explanation:"Račun = බිල / රිසිට්පත."},
{prompt:"“මේක මට කුඩා වැඩියි” කියන්නේ?",options:["Ovo mi je veliko.","Ovo mi je malo.","Ovo je novo."],answer:1,explanation:"Ovo mi je malo = මේක මට කුඩා වැඩියි."},
{prompt:"“මාරු කිරීම” යන වචනය?",options:["Povraćaj","Zamena","Adresa"],answer:1,explanation:"Zamena = භාණ්ඩය මාරු කිරීම."},
{prompt:"මුදල් ආපසු ලබාගැනීම ගැන අසන වාක්‍යය තෝරන්න.",options:["Da li je moguć povraćaj novca?","Koliko je sati?","Gde je pošta?"],answer:0,explanation:"Da li je moguć povraćaj novca? = මුදල් ආපසු ලබාගන්න පුළුවන්ද?"}]}



,{
id:"sr-a1-u10-l8",unit:"සැලසුම් සහ හමුවීම්",title:"පාඩම 29 · සැලසුම් සහ හමුවීම්",objective:"සරල සැලසුමක් ගැන කතා කිරීම, හමුවීමට වේලාවක් යෝජනා කිරීම සහ වේලාව තහවුරු කිරීම.",
vocabulary:[
{word:"Plan",reading:"ප්ලාන්",meaning:"සැලැස්ම",example:"Imam plan za vikend.",exampleReading:"ඉමාම් ප්ලාන් සා විකෙන්ද්.",translation:"සති අන්තයට මට සැලැස්මක් තියෙනවා."},
{word:"Vikend",reading:"විකෙන්ද්",meaning:"සති අන්තය",example:"Šta radiš za vikend?",exampleReading:"ෂ්තා රාදිෂ් සා විකෙන්ද්?",translation:"සති අන්තයේ ඔයා මොකද කරන්නේ?"},
{word:"Slobodan",reading:"ස්ලොබොදාන්",meaning:"නිදහස් / වැඩ නැති (පිරිමි)",example:"Da li si slobodan u petak?",exampleReading:"දා ලි සී ස්ලොබොදාන් උ පෙතාක්?",translation:"ඔයා සිකුරාදා නිදහස්ද?"},
{word:"Slobodna",reading:"ස්ලොබොද්නා",meaning:"නිදහස් / වැඩ නැති (ගැහැණු)",example:"Da li si slobodna sutra?",exampleReading:"දා ලි සී ස්ලොබොද්නා සුත්‍රා?",translation:"ඔයා හෙට නිදහස්ද?"},
{word:"Videti se",reading:"විදෙති සේ",meaning:"හමුවීම",example:"Možemo da se vidimo sutra.",exampleReading:"මොෂෙමො දා සේ විදිමො සුත්‍රා.",translation:"අපිට හෙට හමුවෙන්න පුළුවන්."},
{word:"U petak",reading:"උ පෙතාක්",meaning:"සිකුරාදා",example:"Vidimo se u petak.",exampleReading:"විදිමො සේ උ පෙතාක්.",translation:"අපි සිකුරාදා හමුවෙමු."},
{word:"U koliko sati?",reading:"උ කොලිකො සාති?",meaning:"කීයටද?",example:"U koliko sati počinjemo?",exampleReading:"උ කොලිකො සාති පොචිංයෙමො?",translation:"අපි පටන්ගන්නේ කීයටද?"},
{word:"Odgovara mi",reading:"ඔද්ගොවාරා මි",meaning:"ඒක මට ගැළපෙනවා",example:"Pet sati mi odgovara.",exampleReading:"පෙත් සාති මි ඔද්ගොවාරා.",translation:"පහ මට ගැළපෙනවා."}],
grammarTitle:"ව්‍යාකරණය · සැලසුම් සහ වේලාවක් යෝජනා කිරීම",
grammar:"“Da li si slobodan/slobodna ...?” යනු කෙනෙකු නිදහස්දැයි අසන රටාවයි. පිරිමි පුද්ගලයෙකුට slobodan ද, ගැහැණු පුද්ගලයෙකුට slobodna ද භාවිත කරන්න. “Možemo da se vidimo ...” යනු “අපිට ... හමුවෙන්න පුළුවන්” යන්නයි. වේලාවක් තහවුරු කිරීමට “Odgovara mi” කියන්න.",
grammarTerms:[
{sr:"Da li si slobodan u petak?",reading:"දා ලි සී ස්ලොබොදාන් උ පෙතාක්?",si:"ඔයා සිකුරාදා නිදහස්ද?"},
{sr:"Možemo da se vidimo sutra.",reading:"මොෂෙමො දා සේ විදිමො සුත්‍රා.",si:"අපිට හෙට හමුවෙන්න පුළුවන්."},
{sr:"U koliko sati?",reading:"උ කොලිකො සාති?",si:"කීයටද?"},
{sr:"U pet sati.",reading:"උ පෙත් සාති.",si:"පහට."},
{sr:"To mi odgovara.",reading:"තො මි ඔද්ගොවාරා.",si:"ඒක මට ගැළපෙනවා."}],
examples:[
{sr:"Šta radiš za vikend?",reading:"ෂ්තා රාදිෂ් සා විකෙන්ද්?",si:"සති අන්තයේ ඔයා මොකද කරන්නේ?"},
{sr:"Da li si slobodan u subotu?",reading:"දා ලි සී ස්ලොබොදාන් උ සුබොතු?",si:"ඔයා සෙනසුරාදා නිදහස්ද?"},
{sr:"Možemo da se vidimo u šest sati.",reading:"මොෂෙමො දා සේ විදිමො උ ෂෙස්ත් සාති.",si:"අපිට හයට හමුවෙන්න පුළුවන්."},
{sr:"Petak mi ne odgovara. Može subota?",reading:"පෙතාක් මි නේ ඔද්ගොවාරා. මොෂෙ සුබොතා?",si:"සිකුරාදා මට ගැළපෙන්නේ නැහැ. සෙනසුරාදා පුළුවන්ද?"}],
dialogue:[
{sr:"Ćao! Šta radiš za vikend?",reading:"චාඔ! ෂ්තා රාදිෂ් සා විකෙන්ද්?",si:"හායි! සති අන්තයේ ඔයා මොකද කරන්නේ?"},
{sr:"Još nemam plan.",reading:"යෝෂ් නෙමාම් ප්ලාන්.",si:"මට තවම සැලැස්මක් නැහැ."},
{sr:"Da li si slobodan u subotu?",reading:"දා ලි සී ස්ලොබොදාන් උ සුබොතු?",si:"ඔයා සෙනසුරාදා නිදහස්ද?"},
{sr:"Jesam. Možemo da se vidimo.",reading:"යෙසාම්. මොෂෙමො දා සේ විදිමො.",si:"ඔව්. අපිට හමුවෙන්න පුළුවන්."},
{sr:"U koliko sati?",reading:"උ කොලිකො සාති?",si:"කීයටද?"},
{sr:"U pet sati. To mi odgovara.",reading:"උ පෙත් සාති. තො මි ඔද්ගොවාරා.",si:"පහට. ඒ වේලාව මට ගැළපෙනවා."}],
listeningPractice:{prompt:"හඬ අසා නිවැරදි සිංහල තේරුම තෝරන්න: “U koliko sati?”",audio:"U koliko sati?",options:["කීයටද?","කොහෙද?","කවදාද?"],readings:["උ කොලිකො සාති?","ග්දේ යේ?","කාදා?"],answer:0,meaning:"U koliko sati? = කීයටද?"},
practice:[
{prompt:"“සති අන්තය” යන Serbian වචනය තෝරන්න.",options:["Vikend","Plan","Petak"],answer:0,explanation:"Vikend = සති අන්තය."},
{prompt:"“කීයටද?” කියන්නේ?",options:["Gde?","U koliko sati?","Zašto?"],answer:1,explanation:"U koliko sati? = කීයටද?"},
{prompt:"“ඒක මට ගැළපෙනවා” තෝරන්න.",options:["Ne znam.","To mi odgovara.","Nemam plan."],answer:1,explanation:"To mi odgovara = ඒක මට ගැළපෙනවා."},
{prompt:"“අපිට හෙට හමුවෙන්න පුළුවන්” කියන්නේ?",options:["Možemo da se vidimo sutra.","Radim danas.","Gde je stanica?"],answer:0,explanation:"Možemo da se vidimo sutra = අපිට හෙට හමුවෙන්න පුළුවන්."}]}


,{
id:"sr-a1-u10-l9",unit:"පරක්කු වීම සහ සමාව ඉල්ලීම",title:"පාඩම 30 · පරක්කු වීම සහ සමාව ඉල්ලීම",objective:"පරක්කු වන බව දැනුම් දීම, හේතුවක් සරලව පැවසීම සහ පැමිණෙන වේලාව කියීම.",
vocabulary:[
{word:"Kasnim",reading:"කාස්නිම්",meaning:"මම පරක්කු වෙනවා",example:"Izvinite, kasnim.",exampleReading:"ඉස්විනිතෙ, කාස්නිම්.",translation:"සමාවෙන්න, මම පරක්කු වෙනවා."},
{word:"Izvinite",reading:"ඉස්විනිතෙ",meaning:"සමාවෙන්න",example:"Izvinite što kasnim.",exampleReading:"ඉස්විනිතෙ ෂ්තො කාස්නිම්.",translation:"මම පරක්කු වුණාට සමාවෙන්න."},
{word:"Autobus",reading:"ආවුතොබුස්",meaning:"බස් රථය",example:"Autobus kasni.",exampleReading:"ආවුතොබුස් කාස්නි.",translation:"බස් එක පරක්කුයි."},
{word:"Saobraćaj",reading:"සාඔබ්‍රාචායි",meaning:"වාහන ගමනාගමනය",example:"Velika je gužva u saobraćaju.",exampleReading:"වෙලිකා යේ ගුෂ්වා උ සාඔබ්‍රාචායු.",translation:"වාහන තදබදය වැඩියි."},
{word:"Stižem",reading:"ස්තීෂෙම්",meaning:"මම එනවා / ළඟා වෙනවා",example:"Stižem za deset minuta.",exampleReading:"ස්තීෂෙම් සා දෙසෙත් මිනූතා.",translation:"මම විනාඩි දහයකින් එනවා."},
{word:"Minut",reading:"මිනූත්",meaning:"විනාඩිය",example:"Sačekajte pet minuta.",exampleReading:"සාචෙකායිතෙ පෙත් මිනූතා.",translation:"විනාඩි පහක් ඉන්න."},
{word:"Nema problema",reading:"නෙමා ප්‍රොබ්ලෙමා",meaning:"ප්‍රශ්නයක් නැහැ",example:"Nema problema, čekam.",exampleReading:"නෙමා ප්‍රොබ්ලෙමා, චෙකාම්.",translation:"ප්‍රශ්නයක් නැහැ, මම බලාගෙන ඉන්නවා."},
{word:"Javiti",reading:"යාවිති",meaning:"දැනුම් දීම / පණිවිඩයක් දීම",example:"Javi mi kada stigneš.",exampleReading:"යාවි මි කාදා ස්තිග්නෙෂ්.",translation:"ඔයා ආවම මට දැනුම් දෙන්න."}],
grammarTitle:"ව්‍යාකරණය · පරක්කු වීම සහ පැමිණෙන වේලාව පැවසීම",
grammar:"“Kasnim” යනු “මම පරක්කු වෙනවා” යන්නයි. හේතුවක් කියන්න “Autobus kasni” හෝ “Gužva je u saobraćaju” භාවිත කරන්න. “Stižem za deset minuta” යනු “මම විනාඩි දහයකින් එනවා” යන්නයි. “Izvinite što kasnim” යනු පරක්කු වීම ගැන සමාව ඉල්ලන ස්වභාවික වාක්‍යයකි.",
grammarTerms:[
{sr:"Izvinite što kasnim.",reading:"ඉස්විනිතෙ ෂ්තො කාස්නිම්.",si:"මම පරක්කු වුණාට සමාවෙන්න."},
{sr:"Autobus kasni.",reading:"ආවුතොබුස් කාස්නි.",si:"බස් එක පරක්කුයි."},
{sr:"Stižem za deset minuta.",reading:"ස්තීෂෙම් සා දෙසෙත් මිනූතා.",si:"මම විනාඩි දහයකින් එනවා."},
{sr:"Nema problema.",reading:"නෙමා ප්‍රොබ්ලෙමා.",si:"ප්‍රශ්නයක් නැහැ."},
{sr:"Javi mi kada stigneš.",reading:"යාවි මි කාදා ස්තිග්නෙෂ්.",si:"ඔයා ආවම මට දැනුම් දෙන්න."}],
examples:[
{sr:"Izvinite, kasnim zbog autobusa.",reading:"ඉස්විනිතෙ, කාස්නිම් ස්බොග් ආවුතොබුසා.",si:"සමාවෙන්න, බස් එක නිසා මම පරක්කුයි."},
{sr:"Velika je gužva u saobraćaju.",reading:"වෙලිකා යේ ගුෂ්වා උ සාඔබ්‍රාචායු.",si:"වාහන තදබදය වැඩියි."},
{sr:"Stižem za pet minuta.",reading:"ස්තීෂෙම් සා පෙත් මිනූතා.",si:"මම විනාඩි පහකින් එනවා."},
{sr:"Hvala na razumevanju.",reading:"හ්වාලා නා රාසුමෙවාන්යු.",si:"තේරුම් ගැනීම ගැන ස්තුතියි."}],
dialogue:[
{sr:"Gde si? Čekamo te.",reading:"ග්දේ සී? චෙකාමො තෙ.",si:"ඔයා කොහෙද? අපි ඔයා එනකම් ඉන්නවා."},
{sr:"Izvinite, kasnim.",reading:"ඉස්විනිතෙ, කාස්නිම්.",si:"සමාවෙන්න, මම පරක්කු වෙනවා."},
{sr:"Šta se dogodilo?",reading:"ෂ්තා සේ දොගොදිලො?",si:"මොකක්ද වුණේ?"},
{sr:"Autobus kasni. Stižem za deset minuta.",reading:"ආවුතොබුස් කාස්නි. ස්තීෂෙම් සා දෙසෙත් මිනූතා.",si:"බස් එක පරක්කුයි. මම විනාඩි දහයකින් එනවා."},
{sr:"U redu, nema problema.",reading:"උ රෙදු, නෙමා ප්‍රොබ්ලෙමා.",si:"හරි, ප්‍රශ්නයක් නැහැ."},
{sr:"Hvala. Javiću se kada stignem.",reading:"හ්වාලා. යාවිචු සේ කාදා ස්තිග්නෙම්.",si:"ස්තුතියි. මම ආවම දැනුම් දෙන්නම්."}],
listeningPractice:{prompt:"හඬ අසා නිවැරදි සිංහල තේරුම තෝරන්න: “Stižem za deset minuta.”",audio:"Stižem za deset minuta.",options:["මම විනාඩි දහයකින් එනවා.","මම විනාඩි දහයක් ඉන්නවා.","බස් එක විනාඩි දහයක් පරක්කුයි."],readings:["ස්තීෂෙම් සා දෙසෙත් මිනූතා.","චෙකාම් දෙසෙත් මිනූතා.","ආවුතොබුස් කාස්නි දෙසෙත් මිනූතා."],answer:0,meaning:"Stižem za deset minuta = මම විනාඩි දහයකින් එනවා."},
practice:[
{prompt:"“මම පරක්කු වෙනවා” කියන්නේ?",options:["Kasnim","Stižem","Čekam"],answer:0,explanation:"Kasnim = මම පරක්කු වෙනවා."},
{prompt:"“බස් එක පරක්කුයි” තෝරන්න.",options:["Autobus kasni.","Autobus je nov.","Gde je autobus?"],answer:0,explanation:"Autobus kasni = බස් එක පරක්කුයි."},
{prompt:"“මම විනාඩි දහයකින් එනවා” කියන්නේ?",options:["Čekam deset minuta.","Stižem za deset minuta.","Radim deset sati."],answer:1,explanation:"Stižem za deset minuta = මම විනාඩි දහයකින් එනවා."},
{prompt:"“ප්‍රශ්නයක් නැහැ” යන වාක්‍යය?",options:["Nema problema.","Nema vremena.","Dobar dan."],answer:0,explanation:"Nema problema = ප්‍රශ්නයක් නැහැ."}]}


,{id:"sr-a1-u11-l1",unit:"දෛනික පුරුදු",title:"පාඩම 31 · දෛනික පුරුදු",objective:"දිනපතා කරන දේවල්, උදෑසන සහ සවස පුරුදු ගැන සරලව කතා කිරීම.",
vocabulary:[
{word:"Ustajem",reading:"උස්තායෙම්",meaning:"මම නැගිටිනවා",example:"Ustajem u sedam.",exampleReading:"උස්තායෙම් උ සෙදාම්.",translation:"මම හතට නැගිටිනවා."},
{word:"Doručak",reading:"දොරූචාක්",meaning:"උදෑසන ආහාරය",example:"Doručkujem kod kuće.",exampleReading:"දොරූච්කුයෙම් කොද් කුචෙ.",translation:"මම ගෙදරදී උදෑසන ආහාරය ගන්නවා."},
{word:"Radim",reading:"රාදිම්",meaning:"මම වැඩ කරනවා",example:"Radim svaki dan.",exampleReading:"රාදිම් ස්වාකි දාන්.",translation:"මම හැමදාම වැඩ කරනවා."},
{word:"Uveče",reading:"උවෙචෙ",meaning:"සවස / රාත්‍රියේ",example:"Uveče gledam televiziju.",exampleReading:"උවෙචෙ ග්ලෙදාම් තෙලෙවිසියු.",translation:"මම සවස රූපවාහිනිය බලනවා."},
{word:"Spavam",reading:"ස්පාවාම්",meaning:"මම නිදාගන්නවා",example:"Spavam osam sati.",exampleReading:"ස්පාවාම් ඔසාම් සාති.",translation:"මම පැය අටක් නිදාගන්නවා."},
{word:"Svaki dan",reading:"ස්වාකි දාන්",meaning:"හැමදාම",example:"Šetam svaki dan.",exampleReading:"ෂෙතාම් ස්වාකි දාන්.",translation:"මම හැමදාම ඇවිදිනවා."},
{word:"Obično",reading:"ඔබිච්නො",meaning:"සාමාන්‍යයෙන්",example:"Obično pijem kafu ujutru.",exampleReading:"ඔබිච්නො පියෙම් කාෆු උයූත්‍රු.",translation:"මම සාමාන්‍යයෙන් උදේ කෝපි බොනවා."},
{word:"Posle posla",reading:"පොස්ලෙ පොස්ලා",meaning:"වැඩෙන් පස්සේ",example:"Posle posla idem kući.",exampleReading:"පොස්ලෙ පොස්ලා ඉදෙම් කුචි.",translation:"වැඩෙන් පස්සේ මම ගෙදර යනවා."}],
grammarTitle:"ව්‍යාකරණය · දෛනික පුරුදු ගැන කතා කිරීම",
grammar:"දිනපතා කරන ක්‍රියා ගැන කියන්න වර්තමාන කාලය භාවිත කරන්න. “Obično” යනු සාමාන්‍යයෙන්, “svaki dan” යනු හැමදාම. වේලාවක් එක් කිරීමට “u sedam” (හතට) වැනි රටාවක් භාවිත කරන්න.",
grammarTerms:[
{sr:"Ustajem u sedam.",reading:"උස්තායෙම් උ සෙදාම්.",si:"මම හතට නැගිටිනවා."},
{sr:"Obično pijem kafu.",reading:"ඔබිච්නො පියෙම් කාෆු.",si:"මම සාමාන්‍යයෙන් කෝපි බොනවා."},
{sr:"Radim svaki dan.",reading:"රාදිම් ස්වාකි දාන්.",si:"මම හැමදාම වැඩ කරනවා."},
{sr:"Posle posla idem kući.",reading:"පොස්ලෙ පොස්ලා ඉදෙම් කුචි.",si:"වැඩෙන් පස්සේ මම ගෙදර යනවා."}],
examples:[
{sr:"Ustajem u šest i idem na posao.",reading:"උස්තායෙම් උ ෂෙස්ත් ඉ ඉදෙම් නා පොසාඔ.",si:"මම හයට නැගිටලා වැඩට යනවා."},
{sr:"Doručkujem u sedam sati.",reading:"දොරූච්කුයෙම් උ සෙදාම් සාති.",si:"මම හතට උදෑසන ආහාරය ගන්නවා."},
{sr:"Uveče učim srpski.",reading:"උවෙචෙ උචිම් ස්ර්ප්ස්කි.",si:"මම සවස සර්බියානු භාෂාව ඉගෙනගන්නවා."},
{sr:"Obično spavam u jedanaest.",reading:"ඔබිච්නො ස්පාවාම් උ යෙදානාඑස්ත්.",si:"මම සාමාන්‍යයෙන් එකොළහට නිදාගන්නවා."}],
dialogue:[
{sr:"Kada ustaješ?",reading:"කාදා උස්තායෙෂ්?",si:"ඔයා නැගිටින්නේ කීයටද?"},
{sr:"Obično ustajem u šest.",reading:"ඔබිච්නො උස්තායෙම් උ ෂෙස්ත්.",si:"මම සාමාන්‍යයෙන් හයට නැගිටිනවා."},
{sr:"Da li doručkuješ kod kuće?",reading:"දා ලි දොරූච්කුයෙෂ් කොද් කුචෙ?",si:"ඔයා ගෙදරදී උදෑසන ආහාරය ගන්නවාද?"},
{sr:"Da, pijem kafu i jedem hleb.",reading:"දා, පියෙම් කාෆු ඉ යෙදෙම් හ්ලෙබ්.",si:"ඔව්, මම කෝපි බීලා පාන් කනවා."},
{sr:"Šta radiš posle posla?",reading:"ෂ්තා රාදිෂ් පොස්ලෙ පොස්ලා?",si:"වැඩෙන් පස්සේ ඔයා මොකද කරන්නේ?"},
{sr:"Idem kući i učim srpski.",reading:"ඉදෙම් කුචි ඉ උචිම් ස්ර්ප්ස්කි.",si:"මම ගෙදර ගිහින් සර්බියානු භාෂාව ඉගෙනගන්නවා."}],
listeningPractice:{prompt:"හඬ අසා නිවැරදි තේරුම තෝරන්න: “Ustajem u sedam.”",audio:"Ustajem u sedam.",options:["මම හතට නැගිටිනවා.","මම හතට වැඩට යනවා.","මම හතට නිදාගන්නවා."],readings:["උස්තායෙම් උ සෙදාම්.","රාදිම් උ සෙදාම්.","ස්පාවාම් උ සෙදාම්."],answer:0,meaning:"Ustajem u sedam = මම හතට නැගිටිනවා."},
practice:[
{prompt:"“උදෑසන ආහාරය” තෝරන්න.",options:["Doručak","Večera","Posao"],answer:0,explanation:"Doručak = උදෑසන ආහාරය."},
{prompt:"“මම වැඩ කරනවා” කියන්නේ?",options:["Spavam","Radim","Ustajem"],answer:1,explanation:"Radim = මම වැඩ කරනවා."},
{prompt:"“වැඩෙන් පස්සේ” යන වචන?",options:["Pre posla","Posle posla","Svaki dan"],answer:1,explanation:"Posle posla = වැඩෙන් පස්සේ."},
{prompt:"“මම සාමාන්‍යයෙන් කෝපි බොනවා” තෝරන්න.",options:["Obično pijem kafu.","Obično spavam.","Obično radim."],answer:0,explanation:"Obično pijem kafu = මම සාමාන්‍යයෙන් කෝපි බොනවා."}]}
,{id:"sr-a1-u11-l2",unit:"වැඩ මුර සහ කාලසටහන්",title:"පාඩම 32 · වැඩ මුර සහ කාලසටහන්",objective:"වැඩ කරන වේලාව, උදෑසන හෝ සවස වැඩ මුරය සහ සතිපතා වැඩ දින ගැන විමසීම.",
vocabulary:[
{word:"Smena",reading:"ස්මෙනා",meaning:"වැඩ මුරය",example:"Radim drugu smenu.",exampleReading:"රාදිම් ද්‍රූගු ස්මෙනු.",translation:"මම දෙවැනි වැඩ මුරයේ වැඩ කරනවා."},
{word:"Prva smena",reading:"ප්‍ර්වා ස්මෙනා",meaning:"පළමු වැඩ මුරය",example:"Prva smena počinje u sedam.",exampleReading:"ප්‍ර්වා ස්මෙනා පොචින්යෙ උ සෙදාම්.",translation:"පළමු වැඩ මුරය හතට පටන් ගන්නවා."},
{word:"Druga smena",reading:"ද්‍රූගා ස්මෙනා",meaning:"දෙවැනි වැඩ මුරය",example:"Danas radim drugu smenu.",exampleReading:"දානාස් රාදිම් ද්‍රූගු ස්මෙනු.",translation:"අද මම දෙවැනි වැඩ මුරයේ වැඩ කරනවා."},
{word:"Raspored",reading:"රාස්පොරෙද්",meaning:"කාලසටහන",example:"Kada izlazi raspored?",exampleReading:"කාදා ඉලසි රාස්පොරෙද්?",translation:"කාලසටහන එන්නේ කවදාද?"},
{word:"Počinje",reading:"පොචින්යෙ",meaning:"පටන් ගන්නවා",example:"Smena počinje u osam.",exampleReading:"ස්මෙනා පොචින්යෙ උ ඔසාම්.",translation:"වැඩ මුරය අටට පටන් ගන්නවා."},
{word:"Završava se",reading:"සාව්ර්ෂාවා සේ",meaning:"අවසන් වෙනවා",example:"Moj posao se završava u četiri.",exampleReading:"මොයි පොසාඔ සේ සාව්ර්ෂාවා උ චෙතිරි.",translation:"මගේ වැඩ හතරට අවසන් වෙනවා."},
{word:"Radni dan",reading:"රාද්නි දාන්",meaning:"වැඩ කරන දිනය",example:"Ponedeljak je radni dan.",exampleReading:"පොනෙදෙල්යාක් යේ රාද්නි දාන්.",translation:"සඳුදා වැඩ කරන දිනයක්."},
{word:"Slobodan dan",reading:"ස්ලොබොදාන් දාන්",meaning:"නිවාඩු දිනය",example:"Nedelja mi je slobodan dan.",exampleReading:"නෙදෙල්යා මි යේ ස්ලොබොදාන් දාන්.",translation:"ඉරිදා මගේ නිවාඩු දිනයයි."}],
grammarTitle:"ව්‍යාකරණය · වැඩ මුර සහ වේලාවන්",
grammar:"“Radim prvu/drugu smenu” යනු පළමු/දෙවැනි වැඩ මුරයේ වැඩ කරනවා යන්නයි. ආරම්භය අසන්න “Kada počinje ...?” සහ අවසන් වේලාව අසන්න “Kada se završava ...?” භාවිත කරන්න.",
grammarTerms:[
{sr:"Radim prvu smenu.",reading:"රාදිම් ප්‍ර්වු ස්මෙනු.",si:"මම පළමු වැඩ මුරයේ වැඩ කරනවා."},
{sr:"Radim drugu smenu.",reading:"රාදිම් ද්‍රූගු ස්මෙනු.",si:"මම දෙවැනි වැඩ මුරයේ වැඩ කරනවා."},
{sr:"Kada počinje smena?",reading:"කාදා පොචින්යෙ ස්මෙනා?",si:"වැඩ මුරය පටන් ගන්නේ කීයටද?"},
{sr:"Kada se završava posao?",reading:"කාදා සේ සාව්ර්ෂාවා පොසාඔ?",si:"වැඩ අවසන් වෙන්නේ කීයටද?"}],
examples:[
{sr:"Moja smena počinje u osam.",reading:"මොයා ස්මෙනා පොචින්යෙ උ ඔසාම්.",si:"මගේ වැඩ මුරය අටට පටන් ගන්නවා."},
{sr:"Danas radim prvu smenu.",reading:"දානාස් රාදිම් ප්‍ර්වු ස්මෙනු.",si:"අද මම පළමු වැඩ මුරයේ වැඩ කරනවා."},
{sr:"Sutra imam slobodan dan.",reading:"සුත්‍රා ඉමාම් ස්ලොබොදාන් දාන්.",si:"හෙට මට නිවාඩු දිනයක්."},
{sr:"Raspored dobijamo u petak.",reading:"රාස්පොරෙද් දොබියාමො උ පෙතාක්.",si:"අපිට කාලසටහන සිකුරාදා ලැබෙනවා."}],
dialogue:[
{sr:"Koju smenu radiš danas?",reading:"කොයු ස්මෙනු රාදිෂ් දානාස්?",si:"අද ඔයා වැඩ කරන්නේ මොන වැඩ මුරයේද?"},
{sr:"Danas radim drugu smenu.",reading:"දානාස් රාදිම් ද්‍රූගු ස්මෙනු.",si:"අද මම දෙවැනි වැඩ මුරයේ වැඩ කරනවා."},
{sr:"U koliko sati počinje?",reading:"උ කොලිකො සාති පොචින්යෙ?",si:"ඒක පටන් ගන්නේ කීයටද?"},
{sr:"Počinje u dva popodne.",reading:"පොචින්යෙ උ ද්වා පොපොද්නෙ.",si:"දවල් දෙකට පටන් ගන්නවා."},
{sr:"A kada se završava?",reading:"ආ කාදා සේ සාව්ර්ෂාවා?",si:"එතකොට අවසන් වෙන්නේ කීයටද?"},
{sr:"U deset uveče.",reading:"උ දෙසෙත් උවෙචෙ.",si:"රාත්‍රී දහයට."}],
listeningPractice:{prompt:"හඬ අසා නිවැරදි තේරුම තෝරන්න: “Radim drugu smenu.”",audio:"Radim drugu smenu.",options:["මම දෙවැනි වැඩ මුරයේ වැඩ කරනවා.","මම අද නිවාඩුයි.","මම උදෑසන ආහාරය ගන්නවා."],readings:["රාදිම් ද්‍රූගු ස්මෙනු.","ඉමාම් ස්ලොබොදාන් දාන්.","දොරූච්කුයෙම්."],answer:0,meaning:"Radim drugu smenu = මම දෙවැනි වැඩ මුරයේ වැඩ කරනවා."},
practice:[
{prompt:"“වැඩ මුරය” යන වචනය?",options:["Smena","Adresa","Vreme"],answer:0,explanation:"Smena = වැඩ මුරය."},
{prompt:"“කාලසටහන” තෝරන්න.",options:["Raspored","Doručak","Vikend"],answer:0,explanation:"Raspored = කාලසටහන."},
{prompt:"“මම පළමු වැඩ මුරයේ වැඩ කරනවා” කියන්නේ?",options:["Radim prvu smenu.","Radim drugu smenu.","Imam slobodan dan."],answer:0,explanation:"Radim prvu smenu = මම පළමු වැඩ මුරයේ වැඩ කරනවා."},
{prompt:"“නිවාඩු දිනය” යන වචන?",options:["Radni dan","Slobodan dan","Svaki dan"],answer:1,explanation:"Slobodan dan = නිවාඩු දිනය."}]}
,{id:"sr-a1-u11-l3",unit:"නිවාඩු දිනයක් ඉල්ලීම",title:"පාඩම 33 · නිවාඩු දිනයක් ඉල්ලීම",objective:"කළමනාකරුවෙකුගෙන් නිවාඩු දිනයක් ආචාරශීලීව ඉල්ලීම සහ ඒ ගැන පිළිතුරු දීම.",
vocabulary:[
{word:"Slobodan dan",reading:"ස්ලොබොදාන් දාන්",meaning:"නිවාඩු දිනය",example:"Treba mi slobodan dan.",exampleReading:"ත්‍රෙබා මි ස්ලොබොදාන් දාන්.",translation:"මට නිවාඩු දිනයක් අවශ්‍යයි."},
{word:"Odmor",reading:"ඔද්මොර්",meaning:"විවේකය / නිවාඩුව",example:"Želim da uzmem odmor.",exampleReading:"ෂෙලිම් දා උස්මෙම් ඔද්මොර්.",translation:"මට නිවාඩුවක් ගන්න ඕනේ."},
{word:"Molba",reading:"මොල්බා",meaning:"ඉල්ලීම",example:"Imam jednu molbu.",exampleReading:"ඉමාම් යෙද්නු මොල්බු.",translation:"මට එක ඉල්ලීමක් තියෙනවා."},
{word:"Menadžer",reading:"මෙනාජෙර්",meaning:"කළමනාකරු",example:"Razgovaraću sa menadžerom.",exampleReading:"රාස්ගොවාරාචු සා මෙනාජෙරොම්.",translation:"මම කළමනාකරු සමඟ කතා කරන්නම්."},
{word:"Da li mogu",reading:"දා ලි මොගු",meaning:"මට පුළුවන්ද?",example:"Da li mogu da uzmem slobodan dan?",exampleReading:"දා ලි මොගු දා උස්මෙම් ස්ලොබොදාන් දාන්?",translation:"මට නිවාඩු දිනයක් ගන්න පුළුවන්ද?"},
{word:"Sledeće nedelje",reading:"ස්ලෙදෙචෙ නෙදෙල්යෙ",meaning:"ඊළඟ සතියේ",example:"Treba mi slobodan dan sledeće nedelje.",exampleReading:"ත්‍රෙබා මි ස්ලොබොදාන් දාන් ස්ලෙදෙචෙ නෙදෙල්යෙ.",translation:"මට ඊළඟ සතියේ නිවාඩු දිනයක් අවශ්‍යයි."},
{word:"Razumem",reading:"රාසුමේම්",meaning:"මට තේරෙනවා",example:"Razumem, hvala.",exampleReading:"රාසුමේම්, හ්වාලා.",translation:"මට තේරෙනවා, ස්තුතියි."},
{word:"Dogovoreno",reading:"දොගොවොරෙනො",meaning:"එකඟයි / තීරණය කළා",example:"U redu, dogovoreno.",exampleReading:"උ රෙදු, දොගොවොරෙනො.",translation:"හරි, එකඟයි."}],
grammarTitle:"ව්‍යාකරණය · ආචාරශීලී ඉල්ලීමක් කිරීම",
grammar:"“Da li mogu da ...?” යනු “මට ... කරන්න පුළුවන්ද?” යන ආචාරශීලී ප්‍රශ්න රටාවයි. “Treba mi ...” යනු “මට ... අවශ්‍යයි”. දිනයක් කියන විට “u petak” (සිකුරාදා) හෝ “sledeće nedelje” (ඊළඟ සතියේ) භාවිත කරන්න.",
grammarTerms:[
{sr:"Da li mogu da uzmem slobodan dan?",reading:"දා ලි මොගු දා උස්මෙම් ස්ලොබොදාන් දාන්?",si:"මට නිවාඩු දිනයක් ගන්න පුළුවන්ද?"},
{sr:"Treba mi slobodan dan u petak.",reading:"ත්‍රෙබා මි ස්ලොබොදාන් දාන් උ පෙතාක්.",si:"මට සිකුරාදා නිවාඩු දිනයක් අවශ්‍යයි."},
{sr:"Imam jednu molbu.",reading:"ඉමාම් යෙද්නු මොල්බු.",si:"මට එක ඉල්ලීමක් තියෙනවා."},
{sr:"U redu, dogovoreno.",reading:"උ රෙදු, දොගොවොරෙනො.",si:"හරි, එකඟයි."}],
examples:[
{sr:"Da li mogu da uzmem slobodan dan u ponedeljak?",reading:"දා ලි මොගු දා උස්මෙම් ස්ලොබොදාන් දාන් උ පොනෙදෙල්යාක්?",si:"මට සඳුදා නිවාඩු දිනයක් ගන්න පුළුවන්ද?"},
{sr:"Treba mi odmor sledeće nedelje.",reading:"ත්‍රෙබා මි ඔද්මොර් ස්ලෙදෙචෙ නෙදෙල්යෙ.",si:"මට ඊළඟ සතියේ නිවාඩුවක් අවශ්‍යයි."},
{sr:"Mogu da zamenim smenu sa kolegom.",reading:"මොගු දා සාමෙනිම් ස්මෙනු සා කොලෙගොම්.",si:"මට සහකාර සේවකයෙකු සමඟ වැඩ මුරය මාරු කරගන්න පුළුවන්."},
{sr:"Hvala vam na razumevanju.",reading:"හ්වාලා වාම් නා රාසුමෙවාන්යු.",si:"ඔබගේ අවබෝධයට ස්තුතියි."}],
dialogue:[
{sr:"Dobar dan. Imam jednu molbu.",reading:"දොබාර් දාන්. ඉමාම් යෙද්නු මොල්බු.",si:"සුබ දවසක්. මට එක ඉල්ලීමක් තියෙනවා."},
{sr:"Naravno. Kako mogu da pomognem?",reading:"නාරාව්නො. කාකො මොගු දා පොමොග්නෙම්?",si:"අනිවාර්යයෙන්. මට උදව් කරන්න පුළුවන් කොහොමද?"},
{sr:"Da li mogu da uzmem slobodan dan u petak?",reading:"දා ලි මොගු දා උස්මෙම් ස්ලොබොදාන් දාන් උ පෙතාක්?",si:"මට සිකුරාදා නිවාඩු දිනයක් ගන්න පුළුවන්ද?"},
{sr:"Moram prvo da proverim raspored.",reading:"මොරාම් ප්‍ර්වො දා ප්‍රොවෙරිම් රාස්පොරෙද්.",si:"මට මුලින් කාලසටහන පරීක්ෂා කරන්න ඕනේ."},
{sr:"U redu. Mogu da zamenim smenu ako treba.",reading:"උ රෙදු. මොගු දා සාමෙනිම් ස්මෙනු ආකො ත්‍රෙබා.",si:"හරි. අවශ්‍ය නම් මට වැඩ මුරය මාරු කරගන්න පුළුවන්."},
{sr:"Hvala. Javiću vam sutra.",reading:"හ්වාලා. යාවිචු වාම් සුත්‍රා.",si:"ස්තුතියි. මම හෙට ඔබට දැනුම් දෙන්නම්."}],
listeningPractice:{prompt:"හඬ අසා නිවැරදි තේරුම තෝරන්න: “Da li mogu da uzmem slobodan dan?”",audio:"Da li mogu da uzmem slobodan dan?",options:["මට නිවාඩු දිනයක් ගන්න පුළුවන්ද?","මම අද වැඩ කරනවා.","කාලසටහන කොහෙද?"],readings:["දා ලි මොගු දා උස්මෙම් ස්ලොබොදාන් දාන්?","රාදිම් දානාස්.","ග්දේ යේ රාස්පොරෙද්?"],answer:0,meaning:"Da li mogu da uzmem slobodan dan? = මට නිවාඩු දිනයක් ගන්න පුළුවන්ද?"},
practice:[
{prompt:"“කළමනාකරු” යන වචනය?",options:["Menadžer","Kolega","Radnik"],answer:0,explanation:"Menadžer = කළමනාකරු."},
{prompt:"“මට නිවාඩු දිනයක් අවශ්‍යයි” කියන්නේ?",options:["Treba mi slobodan dan.","Radim svaki dan.","Nemam vremena."],answer:0,explanation:"Treba mi slobodan dan = මට නිවාඩු දිනයක් අවශ්‍යයි."},
{prompt:"“මට පුළුවන්ද?” යන ආරම්භය?",options:["Da li mogu","Gde je","Koliko košta"],answer:0,explanation:"Da li mogu = මට පුළුවන්ද."},
{prompt:"“එකඟයි” යන වචනය?",options:["Dogovoreno","Kasnim","Uveče"],answer:0,explanation:"Dogovoreno = එකඟයි."}]}


,{id:"sr-a1-u12-l1",unit:"දුරකථන ඇමතුම්",title:"පාඩම 34 · දුරකථන ඇමතුම්",objective:"දුරකථනයෙන් තමන් හඳුන්වා දීම, කෙනෙකු ඉල්ලීම සහ පසුව නැවත කතා කරන බව පැවසීම.",
vocabulary:[
{word:"Telefon",reading:"තෙලෙෆොන්",meaning:"දුරකථනය",example:"Telefon mi zvoni.",exampleReading:"තෙලෙෆොන් මි ස්වොනි.",translation:"මගේ දුරකථනය නාද වෙනවා."},
{word:"Pozvati",reading:"පොස්වති",meaning:"ඇමතීම",example:"Mogu li da vas pozovem?",exampleReading:"මොගු ලි දා වාස් පොස්වොවෙම්?",translation:"මට ඔබට ඇමතුමක් දෙන්න පුළුවන්ද?"},
{word:"Javiti se",reading:"යාවිති සේ",meaning:"ඇමතුමට පිළිතුරු දීම",example:"Ne mogu sada da se javim.",exampleReading:"නේ මොගු සාදා දා සේ යාවිම්.",translation:"මට දැන් ඇමතුමට පිළිතුරු දෙන්න බැහැ."},
{word:"Ko je?",reading:"කො යේ?",meaning:"කවුද?",example:"Halo, ko je?",exampleReading:"හාලො, කො යේ?",translation:"හෙලෝ, කවුද කතා කරන්නේ?"},
{word:"Trenutno",reading:"ත්‍රෙනූත්නො",meaning:"මේ මොහොතේ",example:"Trenutno sam zauzet.",exampleReading:"ත්‍රෙනූත්නො සාම් සාවුසෙත්.",translation:"මම මේ මොහොතේ කාර්යබහුලයි."},
{word:"Kasnije",reading:"කාස්නියෙ",meaning:"පසුව",example:"Pozvaću vas kasnije.",exampleReading:"පොස්වාචු වාස් කාස්නියෙ.",translation:"මම ඔබට පසුව ඇමතුමක් දෙන්නම්."},
{word:"Poruka",reading:"පොරූකා",meaning:"පණිවිඩය",example:"Ostavite poruku.",exampleReading:"ඔස්තාවිතෙ පොරූකු.",translation:"පණිවිඩයක් තබන්න."},
{word:"Čuti se",reading:"චූති සේ",meaning:"නැවත කතා කිරීම / සම්බන්ධ වීම",example:"Čujemo se sutra.",exampleReading:"චූයෙමො සේ සුත්‍රා.",translation:"අපි හෙට නැවත කතා කරමු."}],
grammarTitle:"ව්‍යාකරණය · දුරකථනයෙන් කතා කිරීම",
grammar:"“Halo” යනු දුරකථනයට පිළිතුරු දෙන විට භාවිත කරන හෙලෝ යන්නයි. “Mogu li da razgovaram sa ...?” යනු කෙනෙකු සමඟ කතා කිරීමට ඉල්ලීමකි. “Pozvaću vas kasnije” යනු පසුව නැවත අමතන බව කියයි.",
grammarTerms:[
{sr:"Halo, dobar dan.",reading:"හාලො, දොබාර් දාන්.",si:"හෙලෝ, සුබ දවසක්."},
{sr:"Mogu li da razgovaram sa Markom?",reading:"මොගු ලි දා රාස්ගොවාරාම් සා මාර්කොම්?",si:"මට මාර්කෝ සමඟ කතා කරන්න පුළුවන්ද?"},
{sr:"Trenutno nije dostupan.",reading:"ත්‍රෙනූත්නො නියෙ දොස්තුපාන්.",si:"ඔහු මේ මොහොතේ සම්බන්ධ කරගන්න බැහැ."},
{sr:"Pozvaću vas kasnije.",reading:"පොස්වාචු වාස් කාස්නියෙ.",si:"මම ඔබට පසුව ඇමතුමක් දෙන්නම්."}],
examples:[
{sr:"Halo, ovde Ana.",reading:"හාලො, ඔව්දෙ ආනා.",si:"හෙලෝ, මේ ආනා."},
{sr:"Da li je Marko tu?",reading:"දා ලි යේ මාර්කො තු?",si:"මාර්කෝ ඉන්නවාද?"},
{sr:"Trenutno ne mogu da razgovaram.",reading:"ත්‍රෙනූත්නො නේ මොගු දා රාස්ගොවාරාම්.",si:"මට මේ මොහොතේ කතා කරන්න බැහැ."},
{sr:"Pozvaću te za deset minuta.",reading:"පොස්වාචු තෙ සා දෙසෙත් මිනූතා.",si:"මම විනාඩි දහයකින් ඔයාට කතා කරන්නම්."}],
dialogue:[
{sr:"Halo, dobar dan. Ovde Nikola.",reading:"හාලො, දොබාර් දාන්. ඔව්දෙ නිකොලා.",si:"හෙලෝ, සුබ දවසක්. මේ නිකොලා."},
{sr:"Dobar dan. Mogu li da razgovaram sa Anom?",reading:"දොබාර් දාන්. මොගු ලි දා රාස්ගොවාරාම් සා ආනොම්?",si:"සුබ දවසක්. මට ආනා සමඟ කතා කරන්න පුළුවන්ද?"},
{sr:"Trenutno nije dostupna.",reading:"ත්‍රෙනූත්නො නියෙ දොස්තුප්නා.",si:"ඇය මේ මොහොතේ සම්බන්ධ කරගන්න බැහැ."},
{sr:"Možete li da joj ostavite poruku?",reading:"මොෂෙතෙ ලි දා යොයි ඔස්තාවිතෙ පොරූකු?",si:"ඔබට ඇයට පණිවිඩයක් තබන්න පුළුවන්ද?"},
{sr:"Naravno. Recite joj da sam zvao.",reading:"නාරාව්නො. රෙත්සිටෙ යොයි දා සාම් ස්වාවො.",si:"අනිවාර්යයෙන්. මම ඇමතුමක් දුන්නා කියලා ඇයට කියන්න."},
{sr:"Hvala. Čujemo se kasnije.",reading:"හ්වාලා. චූයෙමො සේ කාස්නියෙ.",si:"ස්තුතියි. අපි පසුව නැවත කතා කරමු."}],
listeningPractice:{prompt:"හඬ අසා නිවැරදි තේරුම තෝරන්න: “Pozvaću vas kasnije.”",audio:"Pozvaću vas kasnije.",options:["මම ඔබට පසුව ඇමතුමක් දෙන්නම්.","මම දැන් කතා කරනවා.","මට පණිවිඩයක් ලැබුණා."],readings:["පොස්වාචු වාස් කාස්නියෙ.","රාස්ගොවාරාම් සාදා.","දොබියම් පොරූකු."],answer:0,meaning:"Pozvaću vas kasnije = මම ඔබට පසුව ඇමතුමක් දෙන්නම්."},
practice:[
{prompt:"“පණිවිඩය” යන වචනය?",options:["Poruka","Telefon","Vreme"],answer:0,explanation:"Poruka = පණිවිඩය."},
{prompt:"“මම ඔබට පසුව ඇමතුමක් දෙන්නම්” තෝරන්න.",options:["Pozvaću vas kasnije.","Čujem vas sada.","Ne znam."],answer:0,explanation:"Pozvaću vas kasnije = මම ඔබට පසුව ඇමතුමක් දෙන්නම්."},
{prompt:"“කවුද?” කියන්නේ?",options:["Ko je?","Gde je?","Koliko? "],answer:0,explanation:"Ko je? = කවුද?"},
{prompt:"“අපි හෙට නැවත කතා කරමු” කියන්නේ?",options:["Čujemo se sutra.","Vidim te juče.","Radim danas."],answer:0,explanation:"Čujemo se sutra = අපි හෙට නැවත කතා කරමු."}]}
,{id:"sr-a1-u12-l2",unit:"කාලගුණය සහ ඇඳුම්",title:"පාඩම 35 · කාලගුණය සහ ඇඳුම්",objective:"කාලගුණය විස්තර කිරීම සහ ඒ අනුව අවශ්‍ය ඇඳුම් ගැන කතා කිරීම.",
vocabulary:[
{word:"Vreme",reading:"ව්‍රෙමෙ",meaning:"කාලගුණය / වේලාව",example:"Kakvo je vreme danas?",exampleReading:"කාක්වො යේ ව්‍රෙමෙ දානාස්?",translation:"අද කාලගුණය කොහොමද?"},
{word:"Sunčano",reading:"සුන්චානො",meaning:"අව්ව සහිත",example:"Danas je sunčano.",exampleReading:"දානාස් යේ සුන්චානො.",translation:"අද අව්ව තියෙනවා."},
{word:"Kiša",reading:"කීෂා",meaning:"වැස්ස",example:"Pada kiša.",exampleReading:"පාදා කීෂා.",translation:"වැස්ස වැටෙනවා."},
{word:"Hladno",reading:"හ්ලාද්නො",meaning:"සීතලයි",example:"Napolju je hladno.",exampleReading:"නාපොල්යු යේ හ්ලාද්නො.",translation:"එළියේ සීතලයි."},
{word:"Toplo",reading:"තොප්ලො",meaning:"උණුසුම්",example:"Danas je toplo.",exampleReading:"දානාස් යේ තොප්ලො.",translation:"අද උණුසුම්."},
{word:"Jakna",reading:"යාක්නා",meaning:"ජැකට්ටුව",example:"Ponesi jaknu.",exampleReading:"පොනෙසි යාක්නු.",translation:"ජැකට්ටුව රැගෙන යන්න."},
{word:"Kišobran",reading:"කීෂොබ්‍රාන්",meaning:"කුඩය",example:"Treba mi kišobran.",exampleReading:"ත්‍රෙබා මි කීෂොබ්‍රාන්.",translation:"මට කුඩයක් ඕනේ."},
{word:"Obući",reading:"ඔබුචි",meaning:"ඇඳගැනීම",example:"Šta da obučem?",exampleReading:"ෂ්තා දා ඔබුචෙම්?",translation:"මම මොනවාද අඳින්නේ?"}],
grammarTitle:"ව්‍යාකරණය · කාලගුණය විස්තර කිරීම",
grammar:"“Danas je ...” යනු “අද ...” යන්නයි. කාලගුණය ගැන අසන්න “Kakvo je vreme?” කියන්න. “Pada kiša” යනු වැස්ස වැටෙනවා. ඇඳුමක් රැගෙන යන්න කියන්න “Ponesi ...” භාවිත කරන්න.",
grammarTerms:[
{sr:"Kakvo je vreme danas?",reading:"කාක්වො යේ ව්‍රෙමෙ දානාස්?",si:"අද කාලගුණය කොහොමද?"},
{sr:"Danas je sunčano.",reading:"දානාස් යේ සුන්චානො.",si:"අද අව්ව තියෙනවා."},
{sr:"Napolju je hladno.",reading:"නාපොල්යු යේ හ්ලාද්නො.",si:"එළියේ සීතලයි."},
{sr:"Ponesi jaknu.",reading:"පොනෙසි යාක්නු.",si:"ජැකට්ටුව රැගෙන යන්න."}],
examples:[
{sr:"Danas pada kiša.",reading:"දානාස් පාදා කීෂා.",si:"අද වැස්ස වැටෙනවා."},
{sr:"Ujutru je hladno, a popodne je toplo.",reading:"උයූත්‍රු යේ හ්ලාද්නො, ආ පොපොද්නෙ යේ තොප්ලො.",si:"උදේ සීතලයි, දවල් උණුසුම්."},
{sr:"Ponesi kišobran, molim te.",reading:"පොනෙසි කීෂොබ්‍රාන්, මොලීම් තෙ.",si:"කරුණාකර කුඩය රැගෙන යන්න."},
{sr:"Ne znam šta da obučem.",reading:"නේ සාම් ෂ්තා දා ඔබුචෙම්.",si:"මම මොනවා අඳින්නද කියලා දන්නේ නැහැ."}],
dialogue:[
{sr:"Kakvo je vreme danas?",reading:"කාක්වො යේ ව්‍රෙමෙ දානාස්?",si:"අද කාලගුණය කොහොමද?"},
{sr:"Pada kiša i prilično je hladno.",reading:"පාදා කීෂා ඉ ප්‍රිලිච්නො යේ හ්ලාද්නො.",si:"වැස්ස වැටෙනවා, සෑහෙන්න සීතලයි."},
{sr:"Da li treba da ponesem jaknu?",reading:"දා ලි ත්‍රෙබා දා පොනෙසෙම් යාක්නු?",si:"මම ජැකට්ටුවක් රැගෙන යන්න ඕනෙද?"},
{sr:"Da, i uzmi kišobran.",reading:"දා, ඉ උස්මි කීෂොබ්‍රාන්.",si:"ඔව්, කුඩයත් ගන්න."},
{sr:"A kakvo će biti sutra?",reading:"ආ කාක්වො චෙ බිති සුත්‍රා?",si:"හෙට කාලගුණය කොහොම වෙයිද?"},
{sr:"Mislim da će biti sunčano.",reading:"මිස්ලිම් දා චෙ බිති සුන්චානො.",si:"මම හිතන්නේ හෙට අව්ව තියෙයි."}],
listeningPractice:{prompt:"හඬ අසා නිවැරදි තේරුම තෝරන්න: “Pada kiša.”",audio:"Pada kiša.",options:["වැස්ස වැටෙනවා.","අව්ව තියෙනවා.","සීතල නැහැ."],readings:["පාදා කීෂා.","දානාස් යේ සුන්චානො.","නියෙ හ්ලාද්නො."],answer:0,meaning:"Pada kiša = වැස්ස වැටෙනවා."},
practice:[
{prompt:"“වැස්ස” යන වචනය?",options:["Kiša","Sunce","Jakna"],answer:0,explanation:"Kiša = වැස්ස."},
{prompt:"“අද අව්ව තියෙනවා” තෝරන්න.",options:["Danas je sunčano.","Danas pada kiša.","Danas je hladno."],answer:0,explanation:"Danas je sunčano = අද අව්ව තියෙනවා."},
{prompt:"“කුඩය” යන වචනය?",options:["Jakna","Kišobran","Obuća"],answer:1,explanation:"Kišobran = කුඩය."},
{prompt:"“එළියේ සීතලයි” කියන්නේ?",options:["Napolju je toplo.","Napolju je hladno.","Napolju je sunčano."],answer:1,explanation:"Napolju je hladno = එළියේ සීතලයි."}]}
,{id:"sr-a1-u12-l3",unit:"කැෆේ සහ ආහාර තේරීම්",title:"පාඩම 36 · කැෆේ සහ ආහාර තේරීම්",objective:"කෑමක් හෝ පානයක් තෝරා ගැනීම, අමුද්‍රව්‍ය ගැන විමසීම සහ කැමැත්ත ප්‍රකාශ කිරීම.",
vocabulary:[
{word:"Jelovnik",reading:"යෙලොව්නික්",meaning:"ආහාර මෙනුව",example:"Mogu li da vidim jelovnik?",exampleReading:"මොගු ලි දා විදිම් යෙලොව්නික්?",translation:"මට මෙනුව බලන්න පුළුවන්ද?"},
{word:"Preporuka",reading:"ප්‍රෙපොරූකා",meaning:"නිර්දේශය",example:"Šta preporučujete?",exampleReading:"ෂ්තා ප්‍රෙපොරූචුයෙතෙ?",translation:"ඔබ නිර්දේශ කරන්නේ මොකක්ද?"},
{word:"Sastojak",reading:"සාස්තොයාක්",meaning:"අමුද්‍රව්‍යය",example:"Koji su sastojci?",exampleReading:"කොයි සු සාස්තොයිත්සි?",translation:"අමුද්‍රව්‍ය මොනවාද?"},
{word:"Bez mesa",reading:"බෙස් මෙසා",meaning:"මස් නැතුව",example:"Želim jelo bez mesa.",exampleReading:"ෂෙලිම් යෙලො බෙස් මෙසා.",translation:"මට මස් නැති කෑමක් ඕනේ."},
{word:"Ljuto",reading:"ල්‍යුතො",meaning:"මිරිස් සැර",example:"Da li je ovo ljuto?",exampleReading:"දා ලි යේ ඔවො ල්‍යුතො?",translation:"මේක සැරද?"},
{word:"Slatko",reading:"ස්ලාත්කො",meaning:"මිහිරි / පැණි රස",example:"Volim nešto slatko.",exampleReading:"වොලිම් නෙෂ්තො ස්ලාත්කො.",translation:"මම පැණි රස දෙයක් කැමතියි."},
{word:"Ukusno",reading:"උකුස්නො",meaning:"රසවත්",example:"Ovo je veoma ukusno.",exampleReading:"ඔවො යේ වෙඔමා උකුස්නො.",translation:"මේක ඉතා රසවත්."},
{word:"Alergija",reading:"ආලෙර්ගියා",meaning:"අසාත්මිකතාව",example:"Imam alergiju na orahe.",exampleReading:"ඉමාම් ආලෙර්ගියු නා ඔරාහෙ.",translation:"මට වොල්නට්ස් අසාත්මිකයි."}],
grammarTitle:"ව්‍යාකරණය · ආහාර තේරීම සහ අමුද්‍රව්‍ය ගැන විමසීම",
grammar:"“Šta preporučujete?” යනු නිර්දේශයක් ඉල්ලීමයි. “Bez ...” යනු යමක් නැතුව යන්නයි. “Da li je ovo ...?” යන රටාවෙන් ආහාරය සැරද, පැණි රසද වැනි දේ අසන්න. අසාත්මිකතාවක් තිබේ නම් එය පැහැදිලිව කියන්න.",
grammarTerms:[
{sr:"Šta preporučujete?",reading:"ෂ්තා ප්‍රෙපොරූචුයෙතෙ?",si:"ඔබ නිර්දේශ කරන්නේ මොකක්ද?"},
{sr:"Želim jelo bez mesa.",reading:"ෂෙලිම් යෙලො බෙස් මෙසා.",si:"මට මස් නැති කෑමක් ඕනේ."},
{sr:"Da li je ovo ljuto?",reading:"දා ලි යේ ඔවො ල්‍යුතො?",si:"මේක සැරද?"},
{sr:"Imam alergiju na orahe.",reading:"ඉමාම් ආලෙර්ගියු නා ඔරාහෙ.",si:"මට වොල්නට්ස් අසාත්මිකයි."}],
examples:[
{sr:"Mogu li da dobijem jelovnik?",reading:"මොගු ලි දා දොබියෙම් යෙලොව්නික්?",si:"මට මෙනුව ලබාගන්න පුළුවන්ද?"},
{sr:"Da li ovo jelo sadrži meso?",reading:"දා ලි ඔවො යෙලො සාද්ර්ෂි මෙසො?",si:"මේ කෑමට මස් අඩංගුද?"},
{sr:"Molim vas, bez ljutog sosa.",reading:"මොලීම් වාස්, බෙස් ල්‍යුතොග් සොසා.",si:"කරුණාකර සැර සෝස් නැතුව දෙන්න."},
{sr:"Hvala, bilo je veoma ukusno.",reading:"හ්වාලා, බිලො යේ වෙඔමා උකුස්නො.",si:"ස්තුතියි, ඒක ඉතා රසවත්."}],
dialogue:[
{sr:"Dobar dan. Mogu li da vidim jelovnik?",reading:"දොබාර් දාන්. මොගු ලි දා විදිම් යෙලොව්නික්?",si:"සුබ දවසක්. මට මෙනුව බලන්න පුළුවන්ද?"},
{sr:"Naravno. Izvolite.",reading:"නාරාව්නො. ඉස්වොලිතෙ.",si:"අනිවාර්යයෙන්. මෙන්න."},
{sr:"Šta preporučujete?",reading:"ෂ්තා ප්‍රෙපොරූචුයෙතෙ?",si:"ඔබ නිර්දේශ කරන්නේ මොකක්ද?"},
{sr:"Ovo jelo je veoma popularno.",reading:"ඔවො යෙලො යේ වෙඔමා පොපුලාර්නො.",si:"මේ කෑම ඉතා ජනප්‍රියයි."},
{sr:"Da li sadrži orahe?",reading:"දා ලි සාද්ර්ෂි ඔරාහෙ?",si:"මේකට වොල්නට්ස් අඩංගුද?"},
{sr:"Ne, nema oraha. Prijatno!",reading:"නෙ, නෙමා ඔරාහා. ප්‍රියාත්නො!",si:"නැහැ, වොල්නට්ස් නැහැ. රස විඳින්න!"},
],
listeningPractice:{prompt:"හඬ අසා නිවැරදි තේරුම තෝරන්න: “Šta preporučujete?”",audio:"Šta preporučujete?",options:["ඔබ නිර්දේශ කරන්නේ මොකක්ද?","මේක කීයද?","කොහෙද යන්නේ?"],readings:["ෂ්තා ප්‍රෙපොරූචුයෙතෙ?","කොලිකො කොෂ්තා?","කුදා ඉදෙෂ්?"],answer:0,meaning:"Šta preporučujete? = ඔබ නිර්දේශ කරන්නේ මොකක්ද?"},
practice:[
{prompt:"“මෙනුව” යන වචනය?",options:["Jelovnik","Račun","Voda"],answer:0,explanation:"Jelovnik = මෙනුව."},
{prompt:"“මේක සැරද?” කියන්නේ?",options:["Da li je ovo ljuto?","Da li je ovo slatko?","Gde je sto?"],answer:0,explanation:"Da li je ovo ljuto? = මේක සැරද?"},
{prompt:"“මස් නැතුව” යන්න?",options:["Bez mesa","Sa mesom","Bez vode"],answer:0,explanation:"Bez mesa = මස් නැතුව."},
{prompt:"“අමුද්‍රව්‍ය” යන වචනය?",options:["Sastojci","Preporuka","Jelovnik"],answer:0,explanation:"Sastojci = අමුද්‍රව්‍ය."}]}


,{id:"sr-a1-u13-l1",unit:"පවුල සහ පුද්ගලයන්",title:"පාඩම 37 · පවුල සහ පුද්ගලයන්",objective:"පවුලේ සාමාජිකයන් හඳුන්වා දීම සහ ඔවුන් ගැන සරල තොරතුරු පැවසීම.",
vocabulary:[
{word:"Porodica",reading:"පොරොදිත්සා",meaning:"පවුල",example:"Moja porodica je velika.",exampleReading:"මොයා පොරොදිත්සා යේ වෙලිකා.",translation:"මගේ පවුල විශාලයි."},
{word:"Majka",reading:"මායිකා",meaning:"මව",example:"Moja majka živi u Srbiji.",exampleReading:"මොයා මායිකා ෂිවි උ ස්ර්බියි.",translation:"මගේ මව සර්බියාවේ ජීවත් වෙනවා."},
{word:"Otac",reading:"ඔතාත්ස්",meaning:"පියා",example:"Moj otac radi.",exampleReading:"මොයි ඔතාත්ස් රාදි.",translation:"මගේ පියා වැඩ කරනවා."},
{word:"Brat",reading:"බ්‍රාත්",meaning:"සහෝදරයා",example:"Imam jednog brata.",exampleReading:"ඉමාම් යෙද්නොග් බ්‍රාතා.",translation:"මට සහෝදරයෙක් ඉන්නවා."},
{word:"Sestra",reading:"සෙස්ත්‍රා",meaning:"සහෝදරිය",example:"Moja sestra je studentkinja.",exampleReading:"මොයා සෙස්ත්‍රා යේ ස්තුදෙන්ත්කින්යා.",translation:"මගේ සහෝදරිය ශිෂ්‍යාවක්."},
{word:"Roditelji",reading:"රොදිතෙල්යි",meaning:"දෙමාපියන්",example:"Moji roditelji su kod kuće.",exampleReading:"මොයි රොදිතෙල්යි සු කොද් කුචෙ.",translation:"මගේ දෙමාපියන් ගෙදර ඉන්නවා."},
{word:"Oženjen",reading:"ඔෂෙන්යෙන්",meaning:"විවාහක (පිරිමි)",example:"On je oženjen.",exampleReading:"ඔන් යේ ඔෂෙන්යෙන්.",translation:"ඔහු විවාහකයි."},
{word:"Udata",reading:"උදාතා",meaning:"විවාහක (ගැහැණු)",example:"Ona je udata.",exampleReading:"ඔනා යේ උදාතා.",translation:"ඇය විවාහකයි."}],
grammarTitle:"ව්‍යාකරණය · පවුල හඳුන්වා දීම",
grammar:"“Imam ...” යනු “මට ... ඉන්නවා/තියෙනවා” යන්නයි. පිරිමි නාම පද සමඟ moj සහ ගැහැණු නාම පද සමඟ moja භාවිත වේ. “On je ...” ඔහු ගැනත් “Ona je ...” ඇය ගැනත් කියයි.",
grammarTerms:[
{sr:"Imam jednog brata.",reading:"ඉමාම් යෙද්නොග් බ්‍රාතා.",si:"මට සහෝදරයෙක් ඉන්නවා."},
{sr:"Moja porodica je velika.",reading:"මොයා පොරොදිත්සා යේ වෙලිකා.",si:"මගේ පවුල විශාලයි."},
{sr:"On je moj otac.",reading:"ඔන් යේ මොයි ඔතාත්ස්.",si:"ඔහු මගේ පියා."},
{sr:"Ona je moja sestra.",reading:"ඔනා යේ මොයා සෙස්ත්‍රා.",si:"ඇය මගේ සහෝදරිය."}],
examples:[
{sr:"Moja majka se zove Ana.",reading:"මොයා මායිකා සේ සොවේ ආනා.",si:"මගේ මවගේ නම ආනා."},
{sr:"Imam dve sestre.",reading:"ඉමාම් ද්වේ සෙස්ත්‍රෙ.",si:"මට සහෝදරියන් දෙදෙනෙක් ඉන්නවා."},
{sr:"Moj brat živi u Beogradu.",reading:"මොයි බ්‍රාත් ෂිවි උ බෙඔග්‍රාදු.",si:"මගේ සහෝදරයා බෙල්ග්‍රේඩ්වල ජීවත් වෙනවා."},
{sr:"Moji roditelji rade.",reading:"මොයි රොදිතෙල්යි රාදෙ.",si:"මගේ දෙමාපියන් වැඩ කරනවා."}],
dialogue:[
{sr:"Koliko članova ima tvoja porodica?",reading:"කොලිකො ච්ලානොවා ඉමා ත්වොයා පොරොදිත්සා?",si:"ඔයාගේ පවුලේ සාමාජිකයන් කීදෙනෙක් ඉන්නවාද?"},
{sr:"Imamo četiri člana.",reading:"ඉමාමො චෙතිරි ච්ලානා.",si:"අපේ පවුලේ සාමාජිකයන් හතර දෙනෙක් ඉන්නවා."},
{sr:"Imaš li brata ili sestru?",reading:"ඉමාෂ් ලි බ්‍රාතා ඉලි සෙස්ත්‍රු?",si:"ඔයාට සහෝදරයෙක් හෝ සහෝදරියක් ඉන්නවාද?"},
{sr:"Imam jednog brata i jednu sestru.",reading:"ඉමාම් යෙද්නොග් බ්‍රාතා ඉ යෙද්නු සෙස්ත්‍රු.",si:"මට සහෝදරයෙක් සහ සහෝදරියක් ඉන්නවා."},
{sr:"Gde žive tvoji roditelji?",reading:"ග්දේ ෂිවෙ ත්වොයි රොදිතෙල්යි?",si:"ඔයාගේ දෙමාපියන් ජීවත් වෙන්නේ කොහෙද?"},
{sr:"Žive u Sri Lanki.",reading:"ෂිවෙ උ ශ්‍රී ලන්කි.",si:"ඔවුන් ශ්‍රී ලංකාවේ ජීවත් වෙනවා."}],
listeningPractice:{prompt:"හඬ අසා නිවැරදි තේරුම තෝරන්න: “Imam jednog brata.”",audio:"Imam jednog brata.",options:["මට සහෝදරයෙක් ඉන්නවා.","මට සහෝදරියක් ඉන්නවා.","මට දරුවන් දෙදෙනෙක් ඉන්නවා."],readings:["ඉමාම් යෙද්නොග් බ්‍රාතා.","ඉමාම් යෙද්නු සෙස්ත්‍රු.","ඉමාම් ද්වොයෙ දෙතෙතා."],answer:0,meaning:"Imam jednog brata = මට සහෝදරයෙක් ඉන්නවා."},
practice:[
{prompt:"“පවුල” යන වචනය?",options:["Porodica","Posao","Poruka"],answer:0,explanation:"Porodica = පවුල."},
{prompt:"“පියා” තෝරන්න.",options:["Majka","Otac","Sestra"],answer:1,explanation:"Otac = පියා."},
{prompt:"“මට සහෝදරියක් ඉන්නවා” කියන්නේ?",options:["Imam sestru.","Imam brata.","Nemam porodicu."],answer:0,explanation:"Imam sestru = මට සහෝදරියක් ඉන්නවා."},
{prompt:"“දෙමාපියන්” යන වචනය?",options:["Roditelji","Deca","Prijatelji"],answer:0,explanation:"Roditelji = දෙමාපියන්."}]}
,{id:"sr-a1-u13-l2",unit:"නිවස සහ කාමර",title:"පාඩම 38 · නිවස සහ කාමර",objective:"නිවසේ කාමර, ගෘහ භාණ්ඩ සහ තමන් ජීවත් වන ස්ථානය විස්තර කිරීම.",
vocabulary:[
{word:"Stan",reading:"ස්තාන්",meaning:"මහල් නිවස / අපාර්ට්මන්ට්",example:"Živim u stanu.",exampleReading:"ෂිවිම් උ ස්තානු.",translation:"මම අපාර්ට්මන්ට් එකක ජීවත් වෙනවා."},
{word:"Kuća",reading:"කුචා",meaning:"නිවස",example:"Moja kuća je mala.",exampleReading:"මොයා කුචා යේ මාලා.",translation:"මගේ නිවස කුඩායි."},
{word:"Soba",reading:"සොබා",meaning:"කාමරය",example:"Moja soba je velika.",exampleReading:"මොයා සොබා යේ වෙලිකා.",translation:"මගේ කාමරය විශාලයි."},
{word:"Kuhinja",reading:"කුහින්යා",meaning:"මුළුතැන්ගෙය",example:"Kuhinja je čista.",exampleReading:"කුහින්යා යේ චිස්තා.",translation:"මුළුතැන්ගෙය පිරිසිදුයි."},
{word:"Kupatilo",reading:"කුපාතිලො",meaning:"නාන කාමරය",example:"Kupatilo je levo.",exampleReading:"කුපාතිලො යේ ලෙවො.",translation:"නාන කාමරය වම් පැත්තේ."},
{word:"Sto",reading:"ස්තො",meaning:"මේසය",example:"Knjiga je na stolu.",exampleReading:"ක්න්යිගා යේ නා ස්තොලු.",translation:"පොත මේසය මත තියෙනවා."},
{word:"Krevet",reading:"ක්‍රෙවෙත්",meaning:"ඇඳ",example:"Krevet je u sobi.",exampleReading:"ක්‍රෙවෙත් යේ උ සොබි.",translation:"ඇඳ කාමරයේ තියෙනවා."},
{word:"Iznajmiti",reading:"ඉස්නායිමිති",meaning:"කුලියට ගැනීම",example:"Želim da iznajmim stan.",exampleReading:"ෂෙලිම් දා ඉස්නායිමිම් ස්තාන්.",translation:"මට අපාර්ට්මන්ට් එකක් කුලියට ගන්න ඕනේ."}],
grammarTitle:"ව්‍යාකරණය · නිවස විස්තර කිරීම",
grammar:"“Živim u ...” යනු “මම ... ජීවත් වෙනවා” යන්නයි. ස්ථානයක් විස්තර කිරීමට “u sobi” (කාමරයේ), “na stolu” (මේසය මත) වැනි රටා භාවිත කරන්න. “Želim da iznajmim ...” යනු කුලියට ගැනීමට අවශ්‍ය බව කියයි.",
grammarTerms:[
{sr:"Živim u stanu.",reading:"ෂිවිම් උ ස්තානු.",si:"මම අපාර්ට්මන්ට් එකක ජීවත් වෙනවා."},
{sr:"Kuhinja je čista.",reading:"කුහින්යා යේ චිස්තා.",si:"මුළුතැන්ගෙය පිරිසිදුයි."},
{sr:"Knjiga je na stolu.",reading:"ක්න්යිගා යේ නා ස්තොලු.",si:"පොත මේසය මත තියෙනවා."},
{sr:"Želim da iznajmim stan.",reading:"ෂෙලිම් දා ඉස්නායිමිම් ස්තාන්.",si:"මට අපාර්ට්මන්ට් එකක් කුලියට ගන්න ඕනේ."}],
examples:[
{sr:"Moj stan ima dve sobe.",reading:"මොයි ස්තාන් ඉමා ද්වේ සොබෙ.",si:"මගේ අපාර්ට්මන්ට් එකේ කාමර දෙකක් තියෙනවා."},
{sr:"Kuhinja je pored dnevne sobe.",reading:"කුහින්යා යේ පොරෙද් ද්නෙව්නෙ සොබෙ.",si:"මුළුතැන්ගෙය සාලය අසලයි."},
{sr:"Kupatilo je desno od sobe.",reading:"කුපාතිලො යේ දෙස්නො ඔද් සොබෙ.",si:"නාන කාමරය කාමරයට දකුණු පැත්තේ."},
{sr:"Tražim stan blizu centra.",reading:"ත්‍රාෂිම් ස්තාන් බ්ලිසු ත්සෙන්ත්‍රා.",si:"මම නගර මධ්‍යයට ළඟින් අපාර්ට්මන්ට් එකක් සොයනවා."}],
dialogue:[
{sr:"Da li iznajmljujete ovaj stan?",reading:"දා ලි ඉස්නායිම්ලියුයෙතෙ ඔවායි ස්තාන්?",si:"ඔබ මේ අපාර්ට්මන්ට් එක කුලියට දෙනවාද?"},
{sr:"Da. Stan ima dve sobe.",reading:"දා. ස්තාන් ඉමා ද්වේ සොබෙ.",si:"ඔව්. මේකේ කාමර දෙකක් තියෙනවා."},
{sr:"Gde je kuhinja?",reading:"ග්දේ යේ කුහින්යා?",si:"මුළුතැන්ගෙය කොහෙද?"},
{sr:"Kuhinja je pored dnevne sobe.",reading:"කුහින්යා යේ පොරෙද් ද්නෙව්නෙ සොබෙ.",si:"මුළුතැන්ගෙය සාලය අසලයි."},
{sr:"Da li stan ima kupatilo?",reading:"දා ලි ස්තාන් ඉමා කුපාතිලො?",si:"අපාර්ට්මන්ට් එකේ නාන කාමරයක් තියෙනවාද?"},
{sr:"Da, kupatilo je desno.",reading:"දා, කුපාතිලො යේ දෙස්නො.",si:"ඔව්, නාන කාමරය දකුණු පැත්තේ."}],
listeningPractice:{prompt:"හඬ අසා නිවැරදි තේරුම තෝරන්න: “Živim u stanu.”",audio:"Živim u stanu.",options:["මම අපාර්ට්මන්ට් එකක ජීවත් වෙනවා.","මම නිවසක් මිලදී ගන්නවා.","මම කාමරය පිරිසිදු කරනවා."],readings:["ෂිවිම් උ ස්තානු.","කුපුයෙම් කුචු.","චිස්තිම් සොබු."],answer:0,meaning:"Živim u stanu = මම අපාර්ට්මන්ට් එකක ජීවත් වෙනවා."},
practice:[
{prompt:"“කාමරය” යන වචනය?",options:["Soba","Kuhinja","Sto"],answer:0,explanation:"Soba = කාමරය."},
{prompt:"“මුළුතැන්ගෙය” තෝරන්න.",options:["Kupatilo","Kuhinja","Kuća"],answer:1,explanation:"Kuhinja = මුළුතැන්ගෙය."},
{prompt:"“මම අපාර්ට්මන්ට් එකක ජීවත් වෙනවා” කියන්නේ?",options:["Živim u stanu.","Radim u stanu.","Spavam u kući."],answer:0,explanation:"Živim u stanu = මම අපාර්ට්මන්ට් එකක ජීවත් වෙනවා."},
{prompt:"“ඇඳ” යන වචනය?",options:["Krevet","Sto","Prozor"],answer:0,explanation:"Krevet = ඇඳ."}]}
,{id:"sr-a1-u13-l3",unit:"සරල හමුවීම් වෙන්කරගැනීම",title:"පාඩම 39 · හමුවීමක් වෙන්කරගැනීම",objective:"කාර්යාලයක හෝ සේවාවක හමුවීමක් ඉල්ලීම, දිනය සහ වේලාව තහවුරු කිරීම.",
vocabulary:[
{word:"Zakazati",reading:"සාකාසාති",meaning:"වේලාවක් වෙන්කරගැනීම",example:"Želim da zakažem sastanak.",exampleReading:"ෂෙලිම් දා සාකාෂෙම් සාස්තානාක්.",translation:"මට හමුවීමක් වෙන්කරගන්න ඕනේ."},
{word:"Sastanak",reading:"සාස්තානාක්",meaning:"හමුවීම / රැස්වීම",example:"Imam sastanak u petak.",exampleReading:"ඉමාම් සාස්තානාක් උ පෙතාක්.",translation:"මට සිකුරාදා හමුවීමක් තියෙනවා."},
{word:"Dostupan",reading:"දොස්තුපාන්",meaning:"ලබාගත හැකි / හිස් (පිරිමි)",example:"Da li ste dostupni sutra?",exampleReading:"දා ලි ස්තෙ දොස්තුප්නි සුත්‍රා?",translation:"ඔබට හෙට වේලාවක් තියෙනවාද?"},
{word:"Slobodan termin",reading:"ස්ලොබොදාන් තෙර්මින්",meaning:"හිස් වේලාව",example:"Imate li slobodan termin?",exampleReading:"ඉමාතෙ ලි ස්ලොබොදාන් තෙර්මින්?",translation:"ඔබට හිස් වේලාවක් තියෙනවාද?"},
{word:"Potvrditi",reading:"පොත්ව්ර්දිති",meaning:"තහවුරු කිරීම",example:"Molim vas, potvrdite termin.",exampleReading:"මොලීම් වාස්, පොත්ව්ර්දිටෙ තෙර්මින්.",translation:"කරුණාකර වේලාව තහවුරු කරන්න."},
{word:"Datum",reading:"දාතුම්",meaning:"දිනය",example:"Koji je datum sastanka?",exampleReading:"කොයි යේ දාතුම් සාස්තාන්කා?",translation:"හමුවීමේ දිනය කුමක්ද?"},
{word:"Odgovara",reading:"ඔද්ගොවාරා",meaning:"ගැළපෙනවා",example:"Petak mi odgovara.",exampleReading:"පෙතාක් මි ඔද්ගොවාරා.",translation:"සිකුරාදා මට ගැළපෙනවා."},
{word:"Promeniti",reading:"ප්‍රොමෙනිති",meaning:"වෙනස් කිරීම",example:"Moram da promenim termin.",exampleReading:"මොරාම් දා ප්‍රොමෙනිම් තෙර්මින්.",translation:"මට වේලාව වෙනස් කරන්න වෙනවා."}],
grammarTitle:"ව්‍යාකරණය · දිනයක් සහ වේලාවක් වෙන්කරගැනීම",
grammar:"“Želim da zakažem ...” යනු හමුවීමක් වෙන්කරගැනීමට භාවිත කරන රටාවයි. “Imate li slobodan termin?” යනු හිස් වේලාවක් තිබේදැයි අසයි. “Odgovara mi” යනු යෝජිත වේලාව ගැළපෙන බව කියයි.",
grammarTerms:[
{sr:"Želim da zakažem sastanak.",reading:"ෂෙලිම් දා සාකාෂෙම් සාස්තානාක්.",si:"මට හමුවීමක් වෙන්කරගන්න ඕනේ."},
{sr:"Imate li slobodan termin?",reading:"ඉමාතෙ ලි ස්ලොබොදාන් තෙර්මින්?",si:"ඔබට හිස් වේලාවක් තියෙනවාද?"},
{sr:"Petak mi odgovara.",reading:"පෙතාක් මි ඔද්ගොවාරා.",si:"සිකුරාදා මට ගැළපෙනවා."},
{sr:"Moram da promenim termin.",reading:"මොරාම් දා ප්‍රොමෙනිම් තෙර්මින්.",si:"මට වේලාව වෙනස් කරන්න වෙනවා."}],
examples:[
{sr:"Da li imate slobodan termin u ponedeljak?",reading:"දා ලි ඉමාතෙ ස්ලොබොදාන් තෙර්මින් උ පොනෙදෙල්යාක්?",si:"ඔබට සඳුදා හිස් වේලාවක් තියෙනවාද?"},
{sr:"Mogu da dođem u deset sati.",reading:"මොගු දා දොජෙම් උ දෙසෙත් සාති.",si:"මට දහයට එන්න පුළුවන්."},
{sr:"Taj termin mi odgovara.",reading:"තායි තෙර්මින් මි ඔද්ගොවාරා.",si:"ඒ වේලාව මට ගැළපෙනවා."},
{sr:"Hvala, vidimo se u petak.",reading:"හ්වාලා, විදිමො සේ උ පෙතාක්.",si:"ස්තුතියි, සිකුරාදා හමුවෙමු."}],
dialogue:[
{sr:"Dobar dan. Želim da zakažem sastanak.",reading:"දොබාර් දාන්. ෂෙලිම් දා සාකාෂෙම් සාස්තානාක්.",si:"සුබ දවසක්. මට හමුවීමක් වෙන්කරගන්න ඕනේ."},
{sr:"Naravno. Da li vam odgovara ponedeljak?",reading:"නාරාව්නො. දා ලි වාම් ඔද්ගොවාරා පොනෙදෙල්යාක්?",si:"අනිවාර්යයෙන්. සඳුදා ඔබට ගැළපෙනවාද?"},
{sr:"Da li imate termin u deset sati?",reading:"දා ලි ඉමාතෙ තෙර්මින් උ දෙසෙත් සාති?",si:"ඔබට දහයට වේලාවක් තියෙනවාද?"},
{sr:"Da, taj termin je slobodan.",reading:"දා, තායි තෙර්මින් යේ ස්ලොබොදාන්.",si:"ඔව්, ඒ වේලාව හිස්."},
{sr:"Odlično. Potvrdite, molim vas.",reading:"ඔද්ලිච්නො. පොත්ව්ර්දිටෙ, මොලීම් වාස්.",si:"හොඳයි. කරුණාකර තහවුරු කරන්න."},
{sr:"Termin je potvrđen. Vidimo se!",reading:"තෙර්මින් යේ පොත්ව්ර්ජෙන්. විදිමො සේ!",si:"වේලාව තහවුරු කළා. හමුවෙමු!"}],
listeningPractice:{prompt:"හඬ අසා නිවැරදි තේරුම තෝරන්න: “Imate li slobodan termin?”",audio:"Imate li slobodan termin?",options:["ඔබට හිස් වේලාවක් තියෙනවාද?","ඔබට නිවාඩු දිනයක් තියෙනවාද?","ඔබට ලිපිනයක් තියෙනවාද?"],readings:["ඉමාතෙ ලි ස්ලොබොදාන් තෙර්මින්?","ඉමාතෙ ලි ස්ලොබොදාන් දාන්?","ඉමාතෙ ලි අද්‍රෙසු?"],answer:0,meaning:"Imate li slobodan termin? = ඔබට හිස් වේලාවක් තියෙනවාද?"},
practice:[
{prompt:"“හමුවීම / රැස්වීම” යන වචනය?",options:["Sastanak","Sastojak","Soba"],answer:0,explanation:"Sastanak = හමුවීම / රැස්වීම."},
{prompt:"“දිනය” යන වචනය?",options:["Datum","Vreme","Termin"],answer:0,explanation:"Datum = දිනය."},
{prompt:"“සිකුරාදා මට ගැළපෙනවා” කියන්නේ?",options:["Petak mi odgovara.","Petak mi ne treba.","Petak je hladan."],answer:0,explanation:"Petak mi odgovara = සිකුරාදා මට ගැළපෙනවා."},
{prompt:"“මට හමුවීමක් වෙන්කරගන්න ඕනේ” තෝරන්න.",options:["Želim da zakažem sastanak.","Želim da idem kući.","Želim da promenim posao."],answer:0,explanation:"Želim da zakažem sastanak = මට හමුවීමක් වෙන්කරගන්න ඕනේ."}]}

 // Paired A1 completion batch — lessons 40–42
 ,{id:"sr-a1-u14-l1",unit:"Куповина и свакодневне услуге",title:"පාඩම 40 · සුපිරි වෙළඳසැලේ බිල් ගෙවීම",objective:"කැෂියර් අසලදී භාණ්ඩ, බෑග්, ගෙවීම සහ රිසිට්පත ගැන සරලව කතා කිරීම.",
 vocabulary:[
 {word:"Kasa",reading:"කාසා",meaning:"මුදල් අයකැමි කවුළුව",example:"Gde je kasa?",exampleReading:"ග්දේ යේ කාසා?",translation:"කැෂියර් කවුළුව කොහෙද?"},
 {word:"Kasir",reading:"කාසීර්",meaning:"මුදල් අයකැමි",example:"Kasir je ljubazan.",exampleReading:"කාසීර් යේ ලුබාසාන්.",translation:"මුදල් අයකැමියා සුහදශීලියි."},
 {word:"Kesa",reading:"කෙසා",meaning:"බෑගය",example:"Treba mi kesa.",exampleReading:"ත්‍රෙබා මි කෙසා.",translation:"මට බෑගයක් ඕනේ."},
 {word:"Gotovina",reading:"ගොතොවිනා",meaning:"මුදල්",example:"Plaćam gotovinom.",exampleReading:"ප්ලාචාම් ගොතොවිනොම්.",translation:"මම මුදලින් ගෙවනවා."},
 {word:"Kartica",reading:"කාර්තිත්සා",meaning:"කාඩ්පත",example:"Plaćam karticom.",exampleReading:"ප්ලාචාම් කාර්තිත්සොම්.",translation:"මම කාඩ්පතෙන් ගෙවනවා."},
 {word:"Račun",reading:"රාචුන්",meaning:"රිසිට්පත / බිල",example:"Molim vas, račun.",exampleReading:"මොලීම් වාස්, රාචුන්.",translation:"කරුණාකර බිල දෙන්න."},
 {word:"Kusur",reading:"කුසූර්",meaning:"ඉතිරි මුදල්",example:"Koliki je kusur?",exampleReading:"කොලිකි යේ කුසූර්?",translation:"ඉතිරි මුදල කීයද?"},
 {word:"Ukupno",reading:"උකුප්නො",meaning:"මුළු එකතුව",example:"Koliko je ukupno?",exampleReading:"කොලිකො යේ උකුප්නො?",translation:"මුළු එකතුව කීයද?"}],
 grammarTitle:"ව්‍යාකරණය · ගෙවීමේදී භාවිත කරන වාක්‍ය",
 grammar:"“Plaćam karticom” යනු කාඩ්පතෙන් ගෙවන බවයි. “Plaćam gotovinom” යනු මුදලින් ගෙවීමයි. “Koliko je ukupno?” යනුවෙන් මුළු මිල අසන්න. “Treba mi...” යනු මට ... අවශ්‍යයි.",
 grammarTerms:[
 {sr:"Plaćam karticom.",reading:"ප්ලාචාම් කාර්තිත්සොම්.",si:"මම කාඩ්පතෙන් ගෙවනවා."},
 {sr:"Plaćam gotovinom.",reading:"ප්ලාචාම් ගොතොවිනොම්.",si:"මම මුදලින් ගෙවනවා."},
 {sr:"Koliko je ukupno?",reading:"කොලිකො යේ උකුප්නො?",si:"මුළු එකතුව කීයද?"},
 {sr:"Treba mi kesa.",reading:"ත්‍රෙබා මි කෙසා.",si:"මට බෑගයක් ඕනේ."}],
 examples:[
 {sr:"Gde je kasa?",reading:"ග්දේ යේ කාසා?",si:"කැෂියර් කවුළුව කොහෙද?"},
 {sr:"Plaćam karticom, molim.",reading:"ප්ලාචාම් කාර්තිත්සොම්, මොලීම්.",si:"මම කාඩ්පතෙන් ගෙවන්නම්, කරුණාකර."},
 {sr:"Koliko je ukupno?",reading:"කොලිකො යේ උකුප්නො?",si:"මුළු එකතුව කීයද?"},
 {sr:"Hvala, ne treba mi kesa.",reading:"හ්වාලා, නෙ ත්‍රෙබා මි කෙසා.",si:"ස්තුතියි, මට බෑගයක් අවශ්‍ය නැහැ."}],
 dialogue:[
 {sr:"Dobar dan. Da li imate kesu?",reading:"දොබාර් දාන්. දා ලි ඉමාතෙ කෙසු?",si:"සුබ දවසක්. ඔබට බෑගයක් තියෙනවාද?"},
 {sr:"Da, izvolite.",reading:"දා, ඉස්වොලිතෙ.",si:"ඔව්, මෙන්න."},
 {sr:"Koliko je ukupno?",reading:"කොලිකො යේ උකුප්නො?",si:"මුළු එකතුව කීයද?"},
 {sr:"Ukupno je hiljadu dinara.",reading:"උකුප්නො යේ හිල්යාදු දිනාරා.",si:"මුළු එකතුව ඩිනාර් දහසයි."},
 {sr:"Mogu li da platim karticom?",reading:"මොගු ලි දා ප්ලාතිම් කාර්තිත්සොම්?",si:"මට කාඩ්පතෙන් ගෙවන්න පුළුවන්ද?"},
 {sr:"Naravno. Hvala i prijatno!",reading:"නාරාව්නො. හ්වාලා ඉ ප්‍රියාත්නො!",si:"අනිවාර්යයෙන්. ස්තුතියි, සුබ දවසක්!"}],
 listeningPractice:{prompt:"හඬ අසා නිවැරදි තේරුම තෝරන්න: “Plaćam karticom.”",audio:"Plaćam karticom.",options:["මම කාඩ්පතෙන් ගෙවනවා.","මට බෑගයක් ඕනේ.","මුළු එකතුව කීයද?"],readings:["ප්ලාචාම් කාර්තිත්සොම්.","ත්‍රෙබා මි කෙසා.","කොලිකො යේ උකුප්නො?"],answer:0,meaning:"Plaćam karticom = මම කාඩ්පතෙන් ගෙවනවා."},
 practice:[
 {prompt:"“කාඩ්පත” යන වචනය තෝරන්න.",options:["Kartica","Kesa","Kasa"],answer:0,explanation:"Kartica = කාඩ්පත."},
 {prompt:"“මුළු එකතුව කීයද?” තෝරන්න.",options:["Koliko je ukupno?","Gde je kasa?","Ko je kasir?"],answer:0,explanation:"Koliko je ukupno? = මුළු එකතුව කීයද?"},
 {prompt:"“මම මුදලින් ගෙවනවා” කියන්නේ?",options:["Plaćam gotovinom.","Plaćam karticom.","Treba mi račun."],answer:0,explanation:"Gotovinom = මුදලින්."},
 {prompt:"“ඉතිරි මුදල්” යන වචනය?",options:["Kusur","Ukupno","Kasir"],answer:0,explanation:"Kusur = ඉතිරි මුදල්."}]}
 ,{id:"sr-a1-u14-l2",unit:"Град и сналажење",title:"පාඩම 41 · නගරයේ ස්ථාන සහ දිශා",objective:"නගරයේ පොදු ස්ථාන හඳුනාගෙන ඒවාට යන මාර්ගය සරලව විමසීම.",
 vocabulary:[
 {word:"Centar",reading:"ත්සෙන්තාර්",meaning:"නගර මධ්‍යය",example:"Gde je centar?",exampleReading:"ග්දේ යේ ත්සෙන්තාර්?",translation:"නගර මධ්‍යය කොහෙද?"},
 {word:"Ulica",reading:"උලිත්සා",meaning:"වීදිය",example:"Ova ulica je duga.",exampleReading:"ඔවා උලිත්සා යේ දුගා.",translation:"මේ වීදිය දිගයි."},
 {word:"Trg",reading:"ත්‍ර්ග්",meaning:"චතුරශ්‍රය",example:"Trg je blizu.",exampleReading:"ත්‍ර්ග් යේ බ්ලිසු.",translation:"චතුරශ්‍රය ළඟයි."},
 {word:"Most",reading:"මොස්ත්",meaning:"පාලම",example:"Most je preko reke.",exampleReading:"මොස්ත් යේ ප්‍රෙකො රෙකෙ.",translation:"පාලම ගඟට එහා පැත්තේ."},
 {word:"Apoteka",reading:"අපොතෙකා",meaning:"ඖෂධහල",example:"Apoteka je tamo.",exampleReading:"අපොතෙකා යේ තාමො.",translation:"ඖෂධහල එතැනයි."},
 {word:"Banka",reading:"බාන්කා",meaning:"බැංකුව",example:"Banka je u centru.",exampleReading:"බාන්කා යේ උ ත්සෙන්ත්‍රු.",translation:"බැංකුව මධ්‍යයේ තියෙනවා."},
 {word:"Blizu",reading:"බ්ලිසු",meaning:"ළඟ",example:"Stanica je blizu.",exampleReading:"ස්තානිත්සා යේ බ්ලිසු.",translation:"නැවතුම්පොළ ළඟයි."},
 {word:"Daleko",reading:"දලෙකො",meaning:"දුර",example:"Nije daleko.",exampleReading:"නියේ දලෙකො.",translation:"දුර නැහැ."}],
 grammarTitle:"ව්‍යාකරණය · ස්ථානයක් විස්තර කිරීම",
 grammar:"“Gde je...?” යනු ... කොහෙද? යන්නයි. “blizu” ළඟ යන අර්ථය දෙන අතර “daleko” දුර යන්නයි. “Idite pravo” යනු කෙළින් යන්න; “skrenite levo/desno” යනු වමට/දකුණට හැරෙන්න.",
 grammarTerms:[
 {sr:"Gde je apoteka?",reading:"ග්දේ යේ අපොතෙකා?",si:"ඖෂධහල කොහෙද?"},
 {sr:"Blizu je.",reading:"බ්ලිසු යේ.",si:"එය ළඟයි."},
 {sr:"Nije daleko.",reading:"නියේ දලෙකො.",si:"දුර නැහැ."},
 {sr:"Idite pravo.",reading:"ඉදිතෙ ප්‍රාවො.",si:"කෙළින් යන්න."}],
 examples:[
 {sr:"Banka je u centru.",reading:"බාන්කා යේ උ ත්සෙන්ත්‍රු.",si:"බැංකුව නගර මධ්‍යයේ තියෙනවා."},
 {sr:"Apoteka je blizu trga.",reading:"අපොතෙකා යේ බ්ලිසු ත්‍ර්ගා.",si:"ඖෂධහල චතුරශ්‍රය ළඟයි."},
 {sr:"Most je preko reke.",reading:"මොස්ත් යේ ප්‍රෙකො රෙකෙ.",si:"පාලම ගඟට එහා පැත්තේ."},
 {sr:"Stanica nije daleko.",reading:"ස්තානිත්සා නියේ දලෙකො.",si:"නැවතුම්පොළ දුර නැහැ."}],
 dialogue:[
 {sr:"Izvinite, gde je apoteka?",reading:"ඉස්විණිතෙ, ග්දේ යේ අපොතෙකා?",si:"සමාවෙන්න, ඖෂධහල කොහෙද?"},
 {sr:"Idite pravo do trga.",reading:"ඉදිතෙ ප්‍රාවො දො ත්‍ර්ගා.",si:"චතුරශ්‍රය දක්වා කෙළින් යන්න."},
 {sr:"Da li je daleko?",reading:"දා ලි යේ දලෙකො?",si:"ඒක දුරද?"},
 {sr:"Ne, veoma je blizu.",reading:"නෙ, වෙඔමා යේ බ්ලිසු.",si:"නැහැ, ඉතා ළඟයි."},
 {sr:"Da li je pored banke?",reading:"දා ලි යේ පොරෙද් බාන්කෙ?",si:"එය බැංකුව අසලද?"},
 {sr:"Da, preko puta banke.",reading:"දා, ප්‍රෙකො පුතා බාන්කෙ.",si:"ඔව්, බැංකුවට ඉදිරිපස."}],
 listeningPractice:{prompt:"හඬ අසා නිවැරදි තේරුම තෝරන්න: “Nije daleko.”",audio:"Nije daleko.",options:["දුර නැහැ.","ඉතා දුරයි.","වමට හැරෙන්න."],readings:["නියේ දලෙකො.","වෙඔමා යේ දලෙකො.","ස්ක්‍රෙනිතෙ ලෙවො."],answer:0,meaning:"Nije daleko = දුර නැහැ."},
 practice:[
 {prompt:"“ඖෂධහල” යන වචනය?",options:["Apoteka","Banka","Ulica"],answer:0,explanation:"Apoteka = ඖෂධහල."},
 {prompt:"“ළඟ” යන අර්ථය?",options:["Blizu","Daleko","Centar"],answer:0,explanation:"Blizu = ළඟ."},
 {prompt:"“නගර මධ්‍යය කොහෙද?” කියන්නේ?",options:["Gde je centar?","Gde je most?","Gde je banka?"],answer:0,explanation:"Gde je centar? = නගර මධ්‍යය කොහෙද?"},
 {prompt:"“දුර නැහැ” තෝරන්න.",options:["Nije daleko.","Veoma je daleko.","Ulica je duga."],answer:0,explanation:"Nije daleko = දුර නැහැ."}]}
 ,{id:"sr-a1-u14-l3",unit:"Безбедност на послу",title:"පාඩම 42 · වැඩබිමේ ආරක්ෂාව සහ උපදෙස්",objective:"සරල ආරක්ෂක උපදෙස් තේරුම්ගෙන අවදානමක් ඇති විට උදව් ඉල්ලීම.",
 vocabulary:[
 {word:"Pažljivo",reading:"පාෂ්ලිවො",meaning:"පරිස්සමින්",example:"Radite pažljivo.",exampleReading:"රාදිතෙ පාෂ්ලිවො.",translation:"පරිස්සමින් වැඩ කරන්න."},
 {word:"Opasno",reading:"ඔපාස්නො",meaning:"අනතුරුදායකයි",example:"Ovo je opasno.",exampleReading:"ඔවො යේ ඔපාස්නො.",translation:"මේක අනතුරුදායකයි."},
 {word:"Rukavice",reading:"රුකාවිත්සේ",meaning:"අත්වැසුම්",example:"Nosite rukavice.",exampleReading:"නොසිටෙ රුකාවිත්සේ.",translation:"අත්වැසුම් පළඳින්න."},
 {word:"Zaštita",reading:"ෂ්තිතා",meaning:"ආරක්ෂාව",example:"Zaštita je važna.",exampleReading:"ෂ්තිතා යේ වාෂ්නා.",translation:"ආරක්ෂාව වැදගත්."},
 {word:"Pod",reading:"පොද්",meaning:"බිම",example:"Pod je mokar.",exampleReading:"පොද් යේ මොකාර්.",translation:"බිම තෙතයි."},
 {word:"Klizavo",reading:"ක්ලිසාවො",meaning:"ලිස්සන සුළු",example:"Pod je klizav.",exampleReading:"පොද් යේ ක්ලිසාව්.",translation:"බිම ලිස්සන සුළුයි."},
 {word:"Pomoć",reading:"පොමොච්",meaning:"උදව්",example:"Treba mi pomoć.",exampleReading:"ත්‍රෙබා මි පොමොච්.",translation:"මට උදව් අවශ්‍යයි."},
 {word:"Šef",reading:"ෂෙෆ්",meaning:"ප්‍රධානියා",example:"Pozovite šefa.",exampleReading:"පොසොවිතෙ ෂෙෆා.",translation:"ප්‍රධානියාට කතා කරන්න."}],
 grammarTitle:"ව්‍යාකරණය · උපදෙස් සහ අනතුරු ඇඟවීම්",
 grammar:"“Morate...” යනු ඔබ කළ යුතුයි යන්නයි. “Nemojte...” යනු එය කරන්න එපා යන්නයි. “Pazite!” යනු පරිස්සම් වෙන්න! යන්නයි. අවශ්‍යතාවයක් කියන්න “Treba mi pomoć” භාවිත කරන්න.",
 grammarTerms:[
 {sr:"Morate nositi rukavice.",reading:"මොරატෙ නොසිති රුකාවිත්සේ.",si:"ඔබ අත්වැසුම් පැළඳිය යුතුයි."},
 {sr:"Nemojte trčati.",reading:"නෙමොයිතෙ ත්‍ර්චාති.",si:"දුවන්න එපා."},
 {sr:"Pazite!",reading:"පාසිටෙ!",si:"පරිස්සම් වෙන්න!"},
 {sr:"Treba mi pomoć.",reading:"ත්‍රෙබා මි පොමොච්.",si:"මට උදව් අවශ්‍යයි."}],
 examples:[
 {sr:"Pod je mokar.",reading:"පොද් යේ මොකාර්.",si:"බිම තෙතයි."},
 {sr:"Radite pažljivo.",reading:"රාදිතෙ පාෂ්ලිවො.",si:"පරිස්සමින් වැඩ කරන්න."},
 {sr:"Ovo je opasno.",reading:"ඔවො යේ ඔපාස්නො.",si:"මේක අනතුරුදායකයි."},
 {sr:"Molim vas, pozovite šefa.",reading:"මොලීම් වාස්, පොසොවිතෙ ෂෙෆා.",si:"කරුණාකර ප්‍රධානියාට කතා කරන්න."}],
 dialogue:[
 {sr:"Pazite! Pod je mokar.",reading:"පාසිටෙ! පොද් යේ මොකාර්.",si:"පරිස්සම් වෙන්න! බිම තෙතයි."},
 {sr:"Hvala. Šta treba da uradim?",reading:"හ්වාලා. ෂ්තා ත්‍රෙබා දා උරාදිම්?",si:"ස්තුතියි. මම මොකක්ද කරන්න ඕනේ?"},
 {sr:"Stavite znak i očistite pod.",reading:"ස්තාවිතෙ ස්නාක් ඉ ඔචිස්තිතෙ පොද්.",si:"සලකුණක් දමා බිම පිරිසිදු කරන්න."},
 {sr:"Da li treba da nosim rukavice?",reading:"දා ලි ත්‍රෙබා දා නොසිම් රුකාවිත්සේ?",si:"මම අත්වැසුම් පැළඳිය යුතුද?"},
 {sr:"Da, morate da ih nosite.",reading:"දා, මොරატෙ දා ඉහ නොසිටෙ.",si:"ඔව්, ඒවා පැළඳිය යුතුයි."},
 {sr:"Razumem. Hvala na pomoći.",reading:"රාසුමෙම්. හ්වාලා නා පොමොචි.",si:"මට තේරුණා. උදව්වට ස්තුතියි."}],
 listeningPractice:{prompt:"හඬ අසා නිවැරදි තේරුම තෝරන්න: “Pod je klizav.”",audio:"Pod je klizav.",options:["බිම ලිස්සන සුළුයි.","බිම වියළියි.","දොර වහන්න."],readings:["පොද් යේ ක්ලිසාව්.","පොද් යේ සුහ්.","සාත්වොරිතෙ ව්‍රාතා."],answer:0,meaning:"Pod je klizav = බිම ලිස්සන සුළුයි."},
 practice:[
 {prompt:"“අත්වැසුම්” යන වචනය?",options:["Rukavice","Zaštita","Pomoć"],answer:0,explanation:"Rukavice = අත්වැසුම්."},
 {prompt:"“පරිස්සමින්” කියන්නේ?",options:["Pažljivo","Opasno","Klizavo"],answer:0,explanation:"Pažljivo = පරිස්සමින්."},
 {prompt:"“මට උදව් අවශ්‍යයි” තෝරන්න.",options:["Treba mi pomoć.","Ovo je opasno.","Pozovite šefa."],answer:0,explanation:"Treba mi pomoć = මට උදව් අවශ්‍යයි."},
 {prompt:"“දුවන්න එපා” කියන්නේ?",options:["Nemojte trčati.","Radite pažljivo.","Nosite rukavice."],answer:0,explanation:"Nemojte trčati = දුවන්න එපා."}]}


,{"id":"sr-a1-review-l43","unit":"දින, මාස සහ දින දර්ශනය","title":"පාඩම 43 · දින, මාස සහ දිනයක් කියීම","objective":"සතියේ දින, මාස සහ දිනයක් විමසීම/කීම","vocabulary":[{"word":"ponedeljak","reading":"පොනෙදෙල්යාක්","meaning":"සඳුදා","example":"Koji je danas dan?","translation":"අද දවස මොකක්ද?","exampleReading":"කොයි යේ දනාස් දාන්?"},{"word":"utorak","reading":"උතොරක්","meaning":"අඟහරුවාදා","example":"Danas je ponedeljak.","translation":"අද සඳුදා.","exampleReading":"දනාස් යේ පොනෙදෙල්යාක්."},{"word":"sreda","reading":"ස්‍රෙදා","meaning":"බදාදා","example":"A koji je datum?","translation":"එතකොට දිනය කීයද?","exampleReading":"අ කොයි යේ දාතුම්?"},{"word":"četvrtak","reading":"චෙත්වර්තක්","meaning":"බ්‍රහස්පතින්දා","example":"Koji je danas dan?","translation":"අද දවස මොකක්ද?","exampleReading":"කොයි යේ දනාස් දාන්?"},{"word":"petak","reading":"පෙතක්","meaning":"සිකුරාදා","example":"Danas je ponedeljak.","translation":"අද සඳුදා.","exampleReading":"දනාස් යේ පොනෙදෙල්යාක්."},{"word":"subota","reading":"සුබොතා","meaning":"සෙනසුරාදා","example":"A koji je datum?","translation":"එතකොට දිනය කීයද?","exampleReading":"අ කොයි යේ දාතුම්?"},{"word":"nedelja","reading":"නෙදෙල්යා","meaning":"ඉරිදා","example":"Koji je danas dan?","translation":"අද දවස මොකක්ද?","exampleReading":"කොයි යේ දනාස් දාන්?"},{"word":"januar","reading":"යානුආර්","meaning":"ජනවාරි","example":"Danas je ponedeljak.","translation":"අද සඳුදා.","exampleReading":"දනාස් යේ පොනෙදෙල්යාක්."}],"grammarTitle":"වාක්‍ය රටාව · ප්‍රශ්න සහ පිළිතුරු","grammar":"මෙම පාඩමේදී “Koji je danas dan?” යන වාක්‍ය රටාව භාවිතා කරයි. ප්‍රශ්නය පැහැදිලිව අසා, කෙටි පිළිතුරක් දෙන්න. අවශ්‍ය විට “molim” යොදා ආචාරශීලී වන්න.","grammarTerms":[{"sr":"Koji je danas dan?","reading":"කොයි යේ දනාස් දාන්?","si":"අද දවස මොකක්ද?"}],"examples":[{"sr":"Koji je danas dan?","reading":"කොයි යේ දනාස් දාන්?","si":"අද දවස මොකක්ද?"},{"sr":"Danas je ponedeljak.","reading":"දනාස් යේ පොනෙදෙල්යාක්.","si":"අද සඳුදා."},{"sr":"A koji je datum?","reading":"අ කොයි යේ දාතුම්?","si":"එතකොට දිනය කීයද?"}],"dialogue":[{"sr":"Koji je danas dan?","reading":"කොයි යේ දනාස් දාන්?","si":"අද දවස මොකක්ද?"},{"sr":"Danas je ponedeljak.","reading":"දනාස් යේ පොනෙදෙල්යාක්.","si":"අද සඳුදා."},{"sr":"A koji je datum?","reading":"අ කොයි යේ දාතුම්?","si":"එතකොට දිනය කීයද?"},{"sr":"Danas je petnaesti maj.","reading":"දනාස් යේ පෙත්නාඑස්ති මායි.","si":"අද මැයි පහළොස්වැනිදා."}],"listeningPractice":{"prompt":"හඬ අසා නිවැරදි අර්ථය තෝරන්න: “Koji je danas dan?”","audio":"Koji je danas dan?","options":["අද දවස මොකක්ද?","සඳුදා","අඟහරුවාදා"],"readings":["කොයි යේ දනාස් දාන්?","පොනෙදෙල්යාක්","උතොරක්"],"answer":0,"meaning":"Koji je danas dan? = අද දවස මොකක්ද?"},"practice":[{"prompt":"“අද දවස මොකක්ද?”","options":["Koji je danas dan?","sreda","četvrtak"],"answer":0,"explanation":"Koji je danas dan? = දනාස් යේ කොයි දාන්?"},{"prompt":"“සිකුරාදා” යන්න?","options":["petak","četvrtak","nedelja"],"answer":0,"explanation":"petak = පෙතක්"},{"prompt":"“මාසය” යන්න?","options":["mesec","petak","subota"],"answer":0,"explanation":"mesec = මෙසෙත්"},{"prompt":"“හෙට” යන්න?","options":["sutra","subota","nedelja"],"answer":0,"explanation":"sutra = සුත්‍රා"}]},
{"id":"sr-a1-review-l44","unit":"අංක, වේලාව සහ මුදල්","title":"පාඩම 44 · අංක, වේලාව සහ මුදල්","objective":"වේලාව අසීම, මුදල් ප්‍රමාණ සහ සරල ගෙවීම් කතාබහ","vocabulary":[{"word":"Koliko je sati?","reading":"කොලිකො යේ සාති","meaning":"වෙලාව කීයද?","example":"Tri sata.","translation":"පැය තුනයි.","exampleReading":"ත්‍රි සාතා."},{"word":"jedan","reading":"යෙදාන්","meaning":"එක","example":"Tri sata.","translation":"පැය තුනයි.","exampleReading":"ත්‍රි සාතා."},{"word":"deset","reading":"දෙසෙත්","meaning":"දහය","example":"Koliko košta karta?","translation":"ටිකට් එක කීයද?","exampleReading":"කොලිකො කොෂ්තා කාර්තා?"},{"word":"sto","reading":"ස්තො","meaning":"සියය","example":"Koliko je sati?","translation":"වෙලාව කීයද?","exampleReading":"කොලිකො යේ සාති?"},{"word":"novac","reading":"නොවාත්ස්","meaning":"මුදල්","example":"Tri sata.","translation":"පැය තුනයි.","exampleReading":"ත්‍රි සාතා."},{"word":"dinari","reading":"දිනාරි","meaning":"ඩිනාර්","example":"Koliko košta karta?","translation":"ටිකට් එක කීයද?","exampleReading":"කොලිකො කොෂ්තා කාර්තා?"},{"word":"skupo","reading":"ස්කූපො","meaning":"මිල වැඩියි","example":"Koliko je sati?","translation":"වෙලාව කීයද?","exampleReading":"කොලිකො යේ සාති?"},{"word":"jeftino","reading":"යෙෆ්තිනො","meaning":"ලාභයි","example":"Tri sata.","translation":"පැය තුනයි.","exampleReading":"ත්‍රි සාතා."}],"grammarTitle":"වාක්‍ය රටාව · ප්‍රශ්න සහ පිළිතුරු","grammar":"මෙම පාඩමේදී “Koliko košta?” යන වාක්‍ය රටාව භාවිතා කරයි. ප්‍රශ්නය පැහැදිලිව අසා, කෙටි පිළිතුරක් දෙන්න. අවශ්‍ය විට “molim” යොදා ආචාරශීලී වන්න.","grammarTerms":[{"sr":"Koliko košta?","reading":"කොලිකො කොෂ්තා?","si":"මිල කීයද?"}],"examples":[{"sr":"Koliko je sati?","reading":"කොලිකො යේ සාති?","si":"වෙලාව කීයද?"},{"sr":"Tri sata.","reading":"ත්‍රි සාතා.","si":"පැය තුනයි."},{"sr":"Koliko košta karta?","reading":"කොලිකො කොෂ්තා කාර්තා?","si":"ටිකට් එක කීයද?"}],"dialogue":[{"sr":"Koliko je sati?","reading":"කොලිකො යේ සාති?","si":"වෙලාව කීයද?"},{"sr":"Tri sata.","reading":"ත්‍රි සාතා.","si":"පැය තුනයි."},{"sr":"Koliko košta karta?","reading":"කොලිකො කොෂ්තා කාර්තා?","si":"ටිකට් එක කීයද?"},{"sr":"Dvesta dinara.","reading":"ද්වෙස්තා දිනාරා.","si":"ඩිනාර් දෙසියයි."}],"listeningPractice":{"prompt":"හඬ අසා නිවැරදි අර්ථය තෝරන්න: “Koliko košta?”","audio":"Koliko košta?","options":["මිල කීයද?","වෙලාව කීයද?","එක"],"readings":["කොලිකො කොෂ්තා?","කොලිකො යේ සාති","යෙදාන්"],"answer":0,"meaning":"Koliko košta? = මිල කීයද?"},"practice":[{"prompt":"“වෙලාව කීයද?”","options":["Koliko je sati?","deset","sto"],"answer":0,"explanation":"Koliko je sati? = කොලිකො යේ සාති?"},{"prompt":"“මුදල්” යන්න?","options":["novac","sto","karta"],"answer":0,"explanation":"novac = නොවාත්ස්"},{"prompt":"“ලාභයි” යන්න?","options":["jeftino","novac","dinari"],"answer":0,"explanation":"jeftino = යෙෆ්තිනො"},{"prompt":"“මිල වැඩියි” යන්න?","options":["skupo","dinari","jeftino"],"answer":0,"explanation":"skupo = ස්කූපො"}]},
{"id":"sr-a1-review-l45","unit":"ප්‍රවාහනය සහ ටිකට්පත්","title":"පාඩම 45 · බස්, දුම්රිය සහ ටිකට්පත්","objective":"ගමනාන්තය අසීම, ටිකට්පත් ඉල්ලීම සහ ගමන් විස්තර තේරුම් ගැනීම","vocabulary":[{"word":"autobus","reading":"ආවුතොබුස්","meaning":"බස් රථය","example":"Gde je autobuska stanica?","translation":"බස් නැවතුම්පොළ කොහෙද?","exampleReading":"ග්දේ යේ ආවුතොබුස්කා ස්තානිත්සා?"},{"word":"voz","reading":"වොස්","meaning":"දුම්රිය","example":"Tamo, levo.","translation":"අතන, වමට.","exampleReading":"තාමො, ලෙවො."},{"word":"stanica","reading":"ස්තානිත්සා","meaning":"නැවතුම්පොළ","example":"Jednu kartu, molim.","translation":"ටිකට් එකක් දෙන්න.","exampleReading":"යෙද්නු කාර්තු, මොලීම්."},{"word":"karta","reading":"කාර්තා","meaning":"ටිකට්පත","example":"Gde je autobuska stanica?","translation":"බස් නැවතුම්පොළ කොහෙද?","exampleReading":"ග්දේ යේ ආවුතොබුස්කා ස්තානිත්සා?"},{"word":"polazak","reading":"පොලාසක්","meaning":"පිටත්වීම","example":"Tamo, levo.","translation":"අතන, වමට.","exampleReading":"තාමො, ලෙවො."},{"word":"dolazak","reading":"දොලාසක්","meaning":"පැමිණීම","example":"Jednu kartu, molim.","translation":"ටිකට් එකක් දෙන්න.","exampleReading":"යෙද්නු කාර්තු, මොලීම්."},{"word":"kasni","reading":"කාස්නි","meaning":"ප්‍රමාදයි","example":"Gde je autobuska stanica?","translation":"බස් නැවතුම්පොළ කොහෙද?","exampleReading":"ග්දේ යේ ආවුතොබුස්කා ස්තානිත්සා?"},{"word":"Gde je stanica?","reading":"ග්දේ යේ ස්තානිත්සා?","meaning":"නැවතුම්පොළ කොහෙද?","example":"Tamo, levo.","translation":"අතන, වමට.","exampleReading":"තාමො, ලෙවො."}],"grammarTitle":"වාක්‍ය රටාව · ප්‍රශ්න සහ පිළිතුරු","grammar":"මෙම පාඩමේදී “Jednu kartu, molim.” යන වාක්‍ය රටාව භාවිතා කරයි. ප්‍රශ්නය පැහැදිලිව අසා, කෙටි පිළිතුරක් දෙන්න. අවශ්‍ය විට “molim” යොදා ආචාරශීලී වන්න.","grammarTerms":[{"sr":"Jednu kartu, molim.","reading":"යෙද්නු කාර්තු, මොලීම්.","si":"ටිකට් එකක් දෙන්න, කරුණාකර."}],"examples":[{"sr":"Gde je autobuska stanica?","reading":"ග්දේ යේ ආවුතොබුස්කා ස්තානිත්සා?","si":"බස් නැවතුම්පොළ කොහෙද?"},{"sr":"Tamo, levo.","reading":"තාමො, ලෙවො.","si":"අතන, වමට."},{"sr":"Jednu kartu, molim.","reading":"යෙද්නු කාර්තු, මොලීම්.","si":"ටිකට් එකක් දෙන්න."}],"dialogue":[{"sr":"Gde je autobuska stanica?","reading":"ග්දේ යේ ආවුතොබුස්කා ස්තානිත්සා?","si":"බස් නැවතුම්පොළ කොහෙද?"},{"sr":"Tamo, levo.","reading":"තාමො, ලෙවො.","si":"අතන, වමට."},{"sr":"Jednu kartu, molim.","reading":"යෙද්නු කාර්තු, මොලීම්.","si":"ටිකට් එකක් දෙන්න."},{"sr":"Izvolite.","reading":"ඉස්වොලිතෙ.","si":"මෙන්න."}],"listeningPractice":{"prompt":"හඬ අසා නිවැරදි අර්ථය තෝරන්න: “Jednu kartu, molim.”","audio":"Jednu kartu, molim.","options":["ටිකට් එකක් දෙන්න, කරුණාකර.","බස් රථය","දුම්රිය"],"readings":["යෙද්නු කාර්තු, මොලීම්.","ආවුතොබුස්","වොස්"],"answer":0,"meaning":"Jednu kartu, molim. = ටිකට් එකක් දෙන්න, කරුණාකර."},"practice":[{"prompt":"“ටිකට්පත” යන්න?","options":["karta","stanica","voz"],"answer":0,"explanation":"karta = කාර්තා"},{"prompt":"“දුම්රිය” යන්න?","options":["voz","karta","polazak"],"answer":0,"explanation":"voz = වොස්"},{"prompt":"“ප්‍රමාදයි” යන්න?","options":["kasni","polazak","dolazak"],"answer":0,"explanation":"kasni = කාස්නි"},{"prompt":"“නැවතුම්පොළ කොහෙද?”","options":["Gde je stanica?","dolazak","kasni"],"answer":0,"explanation":"Gde je stanica? = ග්දේ යේ ස්තානිත්සා?"}]},
{"id":"sr-a1-review-l46","unit":"වෛද්‍යවරයා සහ සෞඛ්‍ය සේවා","title":"පාඩම 46 · වෛද්‍යවරයා හමුවීම","objective":"වෛද්‍ය හමුවක් ඉල්ලීම සහ සරල රෝග ලක්ෂණ පැවසීම","vocabulary":[{"word":"lekar","reading":"ලෙකාර්","meaning":"වෛද්‍යවරයා","example":"Dobar dan. Treba mi lekar.","translation":"සුබ දවසක්. මට වෛද්‍යවරයෙක් අවශ්‍යයි.","exampleReading":"දොබාර් දාන්. ත්‍රෙබා මි ලෙකාර්."},{"word":"apoteka","reading":"අපොතෙකා","meaning":"ඖෂධහල","example":"Šta vas boli?","translation":"ඔබට මොකක්ද රිදෙන්නේ?","exampleReading":"ෂ්තා වාස් බොලි?"},{"word":"boli me","reading":"බොලි මෙ","meaning":"මට රිදෙනවා","example":"Boli me glava.","translation":"මගේ හිස රිදෙනවා.","exampleReading":"බොලි මෙ ග්ලාවා."},{"word":"glava","reading":"ග්ලාවා","meaning":"හිස","example":"Dobar dan. Treba mi lekar.","translation":"සුබ දවසක්. මට වෛද්‍යවරයෙක් අවශ්‍යයි.","exampleReading":"දොබාර් දාන්. ත්‍රෙබා මි ලෙකාර්."},{"word":"temperatura","reading":"තෙම්පෙරතුරා","meaning":"උණ / උෂ්ණත්වය","example":"Šta vas boli?","translation":"ඔබට මොකක්ද රිදෙන්නේ?","exampleReading":"ෂ්තා වාස් බොලි?"},{"word":"pregled","reading":"ප්‍රෙග්ලෙද්","meaning":"පරීක්ෂාව","example":"Boli me glava.","translation":"මගේ හිස රිදෙනවා.","exampleReading":"බොලි මෙ ග්ලාවා."},{"word":"pomoć","reading":"පොමොච්","meaning":"උදව්","example":"Dobar dan. Treba mi lekar.","translation":"සුබ දවසක්. මට වෛද්‍යවරයෙක් අවශ්‍යයි.","exampleReading":"දොබාර් දාන්. ත්‍රෙබා මි ලෙකාර්."},{"word":"Treba mi lekar.","reading":"ත්‍රෙබා මි ලෙකාර්.","meaning":"මට වෛද්‍යවරයෙක් අවශ්‍යයි.","example":"Šta vas boli?","translation":"ඔබට මොකක්ද රිදෙන්නේ?","exampleReading":"ෂ්තා වාස් බොලි?"}],"grammarTitle":"වාක්‍ය රටාව · ප්‍රශ්න සහ පිළිතුරු","grammar":"මෙම පාඩමේදී “Želim da zakažem pregled.” යන වාක්‍ය රටාව භාවිතා කරයි. ප්‍රශ්නය පැහැදිලිව අසා, කෙටි පිළිතුරක් දෙන්න. අවශ්‍ය විට “molim” යොදා ආචාරශීලී වන්න.","grammarTerms":[{"sr":"Želim da zakažem pregled.","reading":"ෂෙලිම් දා සාකාෂෙම් ප්‍රෙග්ලෙද්.","si":"මට පරීක්ෂාවක් වෙන්කරගන්න ඕනේ."}],"examples":[{"sr":"Dobar dan. Treba mi lekar.","reading":"දොබාර් දාන්. ත්‍රෙබා මි ලෙකාර්.","si":"සුබ දවසක්. මට වෛද්‍යවරයෙක් අවශ්‍යයි."},{"sr":"Šta vas boli?","reading":"ෂ්තා වාස් බොලි?","si":"ඔබට මොකක්ද රිදෙන්නේ?"},{"sr":"Boli me glava.","reading":"බොලි මෙ ග්ලාවා.","si":"මගේ හිස රිදෙනවා."}],"dialogue":[{"sr":"Dobar dan. Treba mi lekar.","reading":"දොබාර් දාන්. ත්‍රෙබා මි ලෙකාර්.","si":"සුබ දවසක්. මට වෛද්‍යවරයෙක් අවශ්‍යයි."},{"sr":"Šta vas boli?","reading":"ෂ්තා වාස් බොලි?","si":"ඔබට මොකක්ද රිදෙන්නේ?"},{"sr":"Boli me glava.","reading":"බොලි මෙ ග්ලාවා.","si":"මගේ හිස රිදෙනවා."},{"sr":"Želim pregled, molim.","reading":"ෂෙලිම් ප්‍රෙග්ලෙද්, මොලීම්.","si":"මට පරීක්ෂාවක් අවශ්‍යයි."}],"listeningPractice":{"prompt":"හඬ අසා නිවැරදි අර්ථය තෝරන්න: “Želim da zakažem pregled.”","audio":"Želim da zakažem pregled.","options":["මට පරීක්ෂාවක් වෙන්කරගන්න ඕනේ.","වෛද්‍යවරයා","ඖෂධහල"],"readings":["ෂෙලිම් දා සාකාෂෙම් ප්‍රෙග්ලෙද්.","ලෙකාර්","අපොතෙකා"],"answer":0,"meaning":"Želim da zakažem pregled. = මට පරීක්ෂාවක් වෙන්කරගන්න ඕනේ."},"practice":[{"prompt":"“වෛද්‍යවරයා” යන්න?","options":["lekar","boli me","glava"],"answer":0,"explanation":"lekar = ලෙකාර්"},{"prompt":"“ඖෂධහල” යන්න?","options":["apoteka","glava","temperatura"],"answer":0,"explanation":"apoteka = අපොතෙකා"},{"prompt":"“මට හිස රිදෙනවා.”","options":["Boli me glava.","temperatura","pregled"],"answer":0,"explanation":"Boli me glava. = බොලි මෙ ග්ලාවා."},{"prompt":"“මට උදව් අවශ්‍යයි.”","options":["Treba mi pomoć.","pregled","pomoć"],"answer":0,"explanation":"Treba mi pomoć. = ත්‍රෙබා මි පොමොච්"}]},
{"id":"sr-a1-review-l47","unit":"දෛනික ප්‍රශ්න සහ පිළිතුරු","title":"පාඩම 47 · දෛනික ප්‍රශ්න සහ පිළිතුරු","objective":"සරල ප්‍රශ්න අසා පැහැදිලි පිළිතුරු ලබාදීම","vocabulary":[{"word":"Šta radiš?","reading":"ෂ්තා රාදිෂ්?","meaning":"ඔයා මොකද කරන්නේ?","example":"Šta radiš danas?","translation":"අද ඔයා මොකද කරන්නේ?","exampleReading":"ෂ්තා රාදිෂ් දනාස්?"},{"word":"Gde živiš?","reading":"ග්දේ ෂිවිෂ්?","meaning":"ඔයා කොහෙද ජීවත් වෙන්නේ?","example":"Radim do pet.","translation":"මම පහ වෙනකම් වැඩ කරනවා.","exampleReading":"රාදිම් දො පෙත්."},{"word":"Kada?","reading":"කාදා?","meaning":"කවදාද?","example":"Gde živiš?","translation":"ඔයා කොහෙද ජීවත් වෙන්නේ?","exampleReading":"ග්දේ ෂිවිෂ්?"},{"word":"Zašto?","reading":"සාෂ්තො?","meaning":"ඇයි?","example":"Šta radiš danas?","translation":"අද ඔයා මොකද කරන්නේ?","exampleReading":"ෂ්තා රාදිෂ් දනාස්?"},{"word":"Koliko?","reading":"කොලිකො?","meaning":"කීයක්ද? / කොච්චරද?","example":"Radim do pet.","translation":"මම පහ වෙනකම් වැඩ කරනවා.","exampleReading":"රාදිම් දො පෙත්."},{"word":"Ne razumem.","reading":"නෙ රාසුමෙම්.","meaning":"මට තේරෙන්නේ නැහැ.","example":"Gde živiš?","translation":"ඔයා කොහෙද ජීවත් වෙන්නේ?","exampleReading":"ග්දේ ෂිවිෂ්?"},{"word":"Ponovite, molim.","reading":"පොනොවිතෙ, මොලීම්.","meaning":"නැවත කියන්න, කරුණාකර.","example":"Šta radiš danas?","translation":"අද ඔයා මොකද කරන්නේ?","exampleReading":"ෂ්තා රාදිෂ් දනාස්?"},{"word":"Razumem.","reading":"රාසුමෙම්.","meaning":"මට තේරෙනවා.","example":"Radim do pet.","translation":"මම පහ වෙනකම් වැඩ කරනවා.","exampleReading":"රාදිම් දො පෙත්."}],"grammarTitle":"වාක්‍ය රටාව · ප්‍රශ්න සහ පිළිතුරු","grammar":"මෙම පාඩමේදී “Možete li da ponovite?” යන වාක්‍ය රටාව භාවිතා කරයි. ප්‍රශ්නය පැහැදිලිව අසා, කෙටි පිළිතුරක් දෙන්න. අවශ්‍ය විට “molim” යොදා ආචාරශීලී වන්න.","grammarTerms":[{"sr":"Možete li da ponovite?","reading":"මොෂෙතෙ ලි දා පොනොවිතෙ?","si":"ඔබට නැවත කියන්න පුළුවන්ද?"}],"examples":[{"sr":"Šta radiš danas?","reading":"ෂ්තා රාදිෂ් දනාස්?","si":"අද ඔයා මොකද කරන්නේ?"},{"sr":"Radim do pet.","reading":"රාදිම් දො පෙත්.","si":"මම පහ වෙනකම් වැඩ කරනවා."},{"sr":"Gde živiš?","reading":"ග්දේ ෂිවිෂ්?","si":"ඔයා කොහෙද ජීවත් වෙන්නේ?"}],"dialogue":[{"sr":"Šta radiš danas?","reading":"ෂ්තා රාදිෂ් දනාස්?","si":"අද ඔයා මොකද කරන්නේ?"},{"sr":"Radim do pet.","reading":"රාදිම් දො පෙත්.","si":"මම පහ වෙනකම් වැඩ කරනවා."},{"sr":"Gde živiš?","reading":"ග්දේ ෂිවිෂ්?","si":"ඔයා කොහෙද ජීවත් වෙන්නේ?"},{"sr":"Živim u Beogradu.","reading":"ෂිවිම් උ බෙඔග්‍රාදු.","si":"මම බෙල්ග්‍රේඩ්වල ජීවත් වෙනවා."}],"listeningPractice":{"prompt":"හඬ අසා නිවැරදි අර්ථය තෝරන්න: “Možete li da ponovite?”","audio":"Možete li da ponovite?","options":["ඔබට නැවත කියන්න පුළුවන්ද?","ඔයා මොකද කරන්නේ?","ඔයා කොහෙද ජීවත් වෙන්නේ?"],"readings":["මොෂෙතෙ ලි දා පොනොවිතෙ?","ෂ්තා රාදිෂ්?","ග්දේ ෂිවිෂ්?"],"answer":0,"meaning":"Možete li da ponovite? = ඔබට නැවත කියන්න පුළුවන්ද?"},"practice":[{"prompt":"“කවදාද?” යන්න?","options":["Kada?","Gde?","Zašto?"],"answer":0,"explanation":"Kada? = කාදා?"},{"prompt":"“ඇයි?” යන්න?","options":["Zašto?","Kada?","Koliko?"],"answer":0,"explanation":"Zašto? = සාෂ්තො?"},{"prompt":"“මට තේරෙන්නේ නැහැ.”","options":["Ne razumem.","Koliko?","Hvala."],"answer":0,"explanation":"Ne razumem. = නෙ රාසුමෙම්."},{"prompt":"“නැවත කියන්න.”","options":["Ponovite, molim.","Ne razumem.","Izvinite."],"answer":0,"explanation":"Ponovite, molim. = පොනොවිතෙ මොලීම්."}]}
,{"id":"sr-a1-review-l48","unit":"A1 අවසාන සමාලෝචනය","title":"පාඩම 48 · A1 ව්‍යාකරණ සමාලෝචනය","objective":"A1 මට්ටමේ මූලික ව්‍යාකරණ, වචන සහ දෛනික සංවාද ඒකාබද්ධව පුහුණු කිරීම","vocabulary":[{"word":"Ja sam","reading":"යා සාම්","meaning":"මම ... වෙමි","example":"Ja sam iz Šri Lanke.","translation":"මම ශ්‍රී ලංකාවෙන්.","exampleReading":"යා සාම් ඉස් ශ්‍රි ලන්කෙ."},{"word":"Imam","reading":"ඉමාම්","meaning":"මට තියෙනවා","example":"Radim u Beogradu.","translation":"මම බෙල්ග්‍රේඩ්වල වැඩ කරනවා.","exampleReading":"රාදිම් උ බෙඔග්‍රාදු."},{"word":"Želim","reading":"ෂෙලිම්","meaning":"මට අවශ්‍යයි","example":"Imam slobodan dan.","translation":"මට නිවාඩු දිනයක් තියෙනවා.","exampleReading":"ඉමාම් ස්ලොබොදාන් දාන්."},{"word":"Mogu","reading":"මොගු","meaning":"මට පුළුවන්","example":"Ja sam iz Šri Lanke.","translation":"මම ශ්‍රී ලංකාවෙන්.","exampleReading":"යා සාම් ඉස් ශ්‍රි ලන්කෙ."},{"word":"Ne mogu","reading":"නෙ මොගු","meaning":"මට බැහැ","example":"Radim u Beogradu.","translation":"මම බෙල්ග්‍රේඩ්වල වැඩ කරනවා.","exampleReading":"රාදිම් උ බෙඔග්‍රාදු."},{"word":"Gde?","reading":"ග්දේ?","meaning":"කොහෙද?","example":"Imam slobodan dan.","translation":"මට නිවාඩු දිනයක් තියෙනවා.","exampleReading":"ඉමාම් ස්ලොබොදාන් දාන්."},{"word":"Kada?","reading":"කාදා?","meaning":"කවදාද?","example":"Ja sam iz Šri Lanke.","translation":"මම ශ්‍රී ලංකාවෙන්.","exampleReading":"යා සාම් ඉස් ශ්‍රි ලන්කෙ."},{"word":"Koliko?","reading":"කොලිකො?","meaning":"කීයක්ද?","example":"Radim u Beogradu.","translation":"මම බෙල්ග්‍රේඩ්වල වැඩ කරනවා.","exampleReading":"රාදිම් උ බෙඔග්‍රාදු."}],"grammarTitle":"ව්‍යාකරණ සමාලෝචනය","grammar":"A1 මට්ටමේදී Ja sam, Imam, Želim සහ Mogu වැනි මූලික රටා භාවිත කරලා තමන් ගැන, අවශ්‍යතා සහ හැකියාවන් කියන්න පුළුවන් විය යුතුයි.","grammarTerms":[{"sr":"Ja sam iz Šri Lanke.","reading":"යා සාම් ඉස් ශ්‍රි ලන්කෙ.","si":"මම ශ්‍රී ලංකාවෙන්."}],"examples":[{"sr":"Ja sam iz Šri Lanke.","reading":"යා සාම් ඉස් ශ්‍රි ලන්කෙ.","si":"මම ශ්‍රී ලංකාවෙන්."},{"sr":"Radim u Beogradu.","reading":"රාදිම් උ බෙඔග්‍රාදු.","si":"මම බෙල්ග්‍රේඩ්වල වැඩ කරනවා."},{"sr":"Imam slobodan dan.","reading":"ඉමාම් ස්ලොබොදාන් දාන්.","si":"මට නිවාඩු දිනයක් තියෙනවා."}],"dialogue":[{"sr":"Ja sam iz Šri Lanke.","reading":"යා සාම් ඉස් ශ්‍රි ලන්කෙ.","si":"මම ශ්‍රී ලංකාවෙන්."},{"sr":"Radim u Beogradu.","reading":"රාදිම් උ බෙඔග්‍රාදු.","si":"මම බෙල්ග්‍රේඩ්වල වැඩ කරනවා."},{"sr":"Imam slobodan dan.","reading":"ඉමාම් ස්ලොබොදාන් දාන්.","si":"මට නිවාඩු දිනයක් තියෙනවා."},{"sr":"Želim da učim srpski.","reading":"ෂෙලිම් දා උචිම් ස්ර්ප්ස්කි.","si":"මට Serbian ඉගෙනගන්න ඕනේ."}],"listeningPractice":{"prompt":"හඬ අසා නිවැරදි අර්ථය තෝරන්න: “Ja sam iz Šri Lanke.”","audio":"Ja sam iz Šri Lanke.","options":["මම ශ්‍රී ලංකාවෙන්.","මම ... වෙමි","මට තියෙනවා"],"readings":["යා සාම් ඉස් ශ්‍රි ලන්කෙ.","යා සාම්","ඉමාම්"],"answer":0,"meaning":"Ja sam iz Šri Lanke. = මම ශ්‍රී ලංකාවෙන්."},"practice":[{"prompt":"“මට තියෙනවා” කියන්නේ?","options":["Imam","Želim","Mogu"],"answer":0,"explanation":"Imam = මට තියෙනවා"},{"prompt":"“මට අවශ්‍යයි” කියන්නේ?","options":["Želim","Mogu","Ne mogu"],"answer":0,"explanation":"Želim = මට අවශ්‍යයි"},{"prompt":"“කොහෙද?” කියන්නේ?","options":["Gde?","Ne mogu","Kada?"],"answer":0,"explanation":"Gde? = කොහෙද?"},{"prompt":"“මට බැහැ” කියන්නේ?","options":["Ne mogu","Gde?","Kada?"],"answer":0,"explanation":"Ne mogu = මට බැහැ"}]},
{"id":"sr-a1-review-l49","unit":"A1 ඒකාබද්ධ කතාබහ","title":"පාඩම 49 · දෛනික සංවාද පුහුණුව","objective":"A1 මට්ටමේ මූලික ව්‍යාකරණ, වචන සහ දෛනික සංවාද ඒකාබද්ධව පුහුණු කිරීම","vocabulary":[{"word":"Dobar dan","reading":"දොබාර් දාන්","meaning":"සුබ දවසක්","example":"Dobar dan! Kako ste?","translation":"සුබ දවසක්! ඔබට කොහොමද?","exampleReading":"දොබාර් දාන්! කාකො ස්තෙ?"},{"word":"Kako ste?","reading":"කාකො ස්තෙ?","meaning":"ඔබට කොහොමද?","example":"Dobro sam, hvala.","translation":"මම හොඳින්, ස්තුතියි.","exampleReading":"දොබ්‍රො සාම්, හ්වාලා."},{"word":"Treba mi pomoć","reading":"ත්‍රෙබා මි පොමොච්","meaning":"මට උදව් අවශ්‍යයි","example":"Treba mi pomoć, molim.","translation":"මට උදව් අවශ්‍යයි, කරුණාකර.","exampleReading":"ත්‍රෙබා මි පොමොච්, මොලීම්."},{"word":"Gde je...?","reading":"ග්දේ යේ...?","meaning":"... කොහෙද?","example":"Dobar dan! Kako ste?","translation":"සුබ දවසක්! ඔබට කොහොමද?","exampleReading":"දොබාර් දාන්! කාකො ස්තෙ?"},{"word":"Koliko košta?","reading":"කොලිකො කොෂ්තා?","meaning":"මිල කීයද?","example":"Dobro sam, hvala.","translation":"මම හොඳින්, ස්තුතියි.","exampleReading":"දොබ්‍රො සාම්, හ්වාලා."},{"word":"Račun, molim","reading":"රාචුන් මොලීම්","meaning":"බිල දෙන්න","example":"Treba mi pomoć, molim.","translation":"මට උදව් අවශ්‍යයි, කරුණාකර.","exampleReading":"ත්‍රෙබා මි පොමොච්, මොලීම්."},{"word":"Vidimo se","reading":"විදිමො සේ","meaning":"නැවත හමුවෙමු","example":"Dobar dan! Kako ste?","translation":"සුබ දවසක්! ඔබට කොහොමද?","exampleReading":"දොබාර් දාන්! කාකො ස්තෙ?"},{"word":"Prijatno","reading":"ප්‍රියාත්නො","meaning":"සුබ වේලාවක් / රසවිඳින්න","example":"Dobro sam, hvala.","translation":"මම හොඳින්, ස්තුතියි.","exampleReading":"දොබ්‍රො සාම්, හ්වාලා."}],"grammarTitle":"ව්‍යාකරණ සමාලෝචනය","grammar":"සංවාදයකදී ආචාරයෙන් ආරම්භ කර අවශ්‍යතාව පැහැදිලි කරන්න. තේරෙන්නේ නැතිනම් නැවත කියන්න කියා ඉල්ලන්න. අවසානයේ ස්තුති කර සමුගන්න.","grammarTerms":[{"sr":"Dobar dan! Kako ste?","reading":"දොබාර් දාන්! කාකො ස්තෙ?","si":"සුබ දවසක්! ඔබට කොහොමද?"}],"examples":[{"sr":"Dobar dan! Kako ste?","reading":"දොබාර් දාන්! කාකො ස්තෙ?","si":"සුබ දවසක්! ඔබට කොහොමද?"},{"sr":"Dobro sam, hvala.","reading":"දොබ්‍රො සාම්, හ්වාලා.","si":"මම හොඳින්, ස්තුතියි."},{"sr":"Treba mi pomoć, molim.","reading":"ත්‍රෙබා මි පොමොච්, මොලීම්.","si":"මට උදව් අවශ්‍යයි, කරුණාකර."}],"dialogue":[{"sr":"Dobar dan! Kako ste?","reading":"දොබාර් දාන්! කාකො ස්තෙ?","si":"සුබ දවසක්! ඔබට කොහොමද?"},{"sr":"Dobro sam, hvala.","reading":"දොබ්‍රො සාම්, හ්වාලා.","si":"මම හොඳින්, ස්තුතියි."},{"sr":"Treba mi pomoć, molim.","reading":"ත්‍රෙබා මි පොමොච්, මොලීම්.","si":"මට උදව් අවශ්‍යයි, කරුණාකර."},{"sr":"Naravno. Kako mogu da pomognem?","reading":"නාරාව්නො. කාකො මොගු දා පොමොග්නෙම්?","si":"අනිවාර්යයෙන්. මට උදව් කළ හැක්කේ කොහොමද?"}],"listeningPractice":{"prompt":"හඬ අසා නිවැරදි අර්ථය තෝරන්න: “Dobar dan! Kako ste?”","audio":"Dobar dan! Kako ste?","options":["සුබ දවසක්! ඔබට කොහොමද?","සුබ දවසක්","ඔබට කොහොමද?"],"readings":["දොබාර් දාන්! කාකො ස්තෙ?","දොබාර් දාන්","කාකො ස්තෙ?"],"answer":0,"meaning":"Dobar dan! Kako ste? = සුබ දවසක්! ඔබට කොහොමද?"},"practice":[{"prompt":"“මට උදව් අවශ්‍යයි” තෝරන්න.","options":["Treba mi pomoć","Ne razumem.","Gde je...?"],"answer":0,"explanation":"Treba mi pomoć = මට උදව් අවශ්‍යයි"},{"prompt":"“බිල දෙන්න” තෝරන්න.","options":["Račun, molim","Gde je...?","Koliko košta?"],"answer":0,"explanation":"Račun, molim = බිල දෙන්න"},{"prompt":"“ඔබට කොහොමද?” තෝරන්න.","options":["Kako ste?","Koliko košta?","Račun, molim"],"answer":0,"explanation":"Kako ste? = ඔබට කොහොමද?"},{"prompt":"“නැවත හමුවෙමු” තෝරන්න.","options":["Vidimo se","Račun, molim","Dobar dan."],"answer":0,"explanation":"Vidimo se = නැවත හමුවෙමු"}]},
{"id":"sr-a1-review-l50","unit":"A1 අවසාන පුහුණුව","title":"පාඩම 50 · A1 අවසාන සවන්දීම සහ කථනය","objective":"A1 මට්ටමේ මූලික ව්‍යාකරණ, වචන සහ දෛනික සංවාද ඒකාබද්ධව පුහුණු කිරීම","vocabulary":[{"word":"Slušajte","reading":"ස්ලූෂායිතෙ","meaning":"සවන් දෙන්න","example":"Kako se zoveš?","translation":"ඔයාගේ නම මොකක්ද?","exampleReading":"කාකො සේ සොවේෂ්?"},{"word":"Ponovite","reading":"පොනොවිතෙ","meaning":"නැවත කියන්න","example":"Zovem se Milan. Živim u Beogradu.","translation":"මගේ නම මිලාන්. මම බෙල්ග්‍රේඩ්වල ජීවත් වෙනවා.","exampleReading":"සොවෙම් සේ මිලාන්. ෂිවිම් උ බෙඔග්‍රාදු."},{"word":"Razgovor","reading":"රාස්ගොවොර්","meaning":"සංවාදය","example":"Gde radiš?","translation":"ඔයා කොහෙද වැඩ කරන්නේ?","exampleReading":"ග්දේ රාදිෂ්?"},{"word":"Pitanje","reading":"පිතාන්‍යෙ","meaning":"ප්‍රශ්නය","example":"Kako se zoveš?","translation":"ඔයාගේ නම මොකක්ද?","exampleReading":"කාකො සේ සොවේෂ්?"},{"word":"Odgovor","reading":"ඔද්ගොවොර්","meaning":"පිළිතුර","example":"Zovem se Milan. Živim u Beogradu.","translation":"මගේ නම මිලාන්. මම බෙල්ග්‍රේඩ්වල ජීවත් වෙනවා.","exampleReading":"සොවෙම් සේ මිලාන්. ෂිවිම් උ බෙඔග්‍රාදු."},{"word":"Tačno","reading":"තාච්නො","meaning":"නිවැරදියි","example":"Gde radiš?","translation":"ඔයා කොහෙද වැඩ කරන්නේ?","exampleReading":"ග්දේ රාදිෂ්?"},{"word":"Netačno","reading":"නෙතාච්නො","meaning":"වැරදියි","example":"Kako se zoveš?","translation":"ඔයාගේ නම මොකක්ද?","exampleReading":"කාකො සේ සොවේෂ්?"},{"word":"Spreman sam","reading":"ස්ප්‍රෙමාන් සාම්","meaning":"මම සූදානම්","example":"Zovem se Milan. Živim u Beogradu.","translation":"මගේ නම මිලාන්. මම බෙල්ග්‍රේඩ්වල ජීවත් වෙනවා.","exampleReading":"සොවෙම් සේ මිලාන්. ෂිවිම් උ බෙඔග්‍රාදු."}],"grammarTitle":"ව්‍යාකරණ සමාලෝචනය","grammar":"මෙය A1 පාඩම්වල අවසාන පුහුණුවයි. හඬ අසා තේරුම තෝරන්න, වාක්‍ය ශබ්ද නඟා කියවන්න, පසුව සංවාදය ඔබේම තොරතුරු යොදාගෙන නැවත කියන්න.","grammarTerms":[{"sr":"Kako se zoveš?","reading":"කාකො සේ සොවේෂ්?","si":"ඔයාගේ නම මොකක්ද?"}],"examples":[{"sr":"Kako se zoveš?","reading":"කාකො සේ සොවේෂ්?","si":"ඔයාගේ නම මොකක්ද?"},{"sr":"Zovem se Milan. Živim u Beogradu.","reading":"සොවෙම් සේ මිලාන්. ෂිවිම් උ බෙඔග්‍රාදු.","si":"මගේ නම මිලාන්. මම බෙල්ග්‍රේඩ්වල ජීවත් වෙනවා."},{"sr":"Gde radiš?","reading":"ග්දේ රාදිෂ්?","si":"ඔයා කොහෙද වැඩ කරන්නේ?"}],"dialogue":[{"sr":"Kako se zoveš?","reading":"කාකො සේ සොවේෂ්?","si":"ඔයාගේ නම මොකක්ද?"},{"sr":"Zovem se Milan. Živim u Beogradu.","reading":"සොවෙම් සේ මිලාන්. ෂිවිම් උ බෙඔග්‍රාදු.","si":"මගේ නම මිලාන්. මම බෙල්ග්‍රේඩ්වල ජීවත් වෙනවා."},{"sr":"Gde radiš?","reading":"ග්දේ රාදිෂ්?","si":"ඔයා කොහෙද වැඩ කරන්නේ?"},{"sr":"Radim u restoranu. Učim srpski svaki dan.","reading":"රාදිම් උ රෙස්තොරانو. උචිම් ස්ර්ප්ස්කි ස්වාකි දාන්.","si":"මම අවන්හලක වැඩ කරනවා. මම හැමදාම Serbian ඉගෙනගන්නවා."}],"listeningPractice":{"prompt":"හඬ අසා නිවැරදි අර්ථය තෝරන්න: “Kako se zoveš?”","audio":"Kako se zoveš?","options":["ඔයාගේ නම මොකක්ද?","සවන් දෙන්න","නැවත කියන්න"],"readings":["කාකො සේ සොවේෂ්?","ස්ලූෂායිතෙ","පොනොවිතෙ"],"answer":0,"meaning":"Kako se zoveš? = ඔයාගේ නම මොකක්ද?"},"practice":[{"prompt":"“ප්‍රශ්නය” යන්න?","options":["Pitanje","Razgovor","Odgovor"],"answer":0,"explanation":"Pitanje = ප්‍රශ්නය"},{"prompt":"“පිළිතුර” යන්න?","options":["Odgovor","Pitanje","Razgovor"],"answer":0,"explanation":"Odgovor = පිළිතුර"},{"prompt":"“නිවැරදියි” යන්න?","options":["Tačno","Odgovor","Netačno"],"answer":0,"explanation":"Tačno = නිවැරදියි"},{"prompt":"“සවන් දෙන්න” යන්න?","options":["Slušajte","Tačno","Netačno"],"answer":0,"explanation":"Slušajte = සවන් දෙන්න"}]}


];