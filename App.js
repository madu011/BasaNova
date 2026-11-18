import React, { createContext, useContext, useMemo, useState, useEffect } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, StyleSheet, StatusBar, TextInput } from "react-native";
import * as Speech from "expo-speech";
import { Audio } from "expo-av";
import * as FileSystem from "expo-file-system/legacy";
import * as Clipboard from "expo-clipboard";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { COURSE_LEVELS, LESSON_METHOD } from "./curriculum";
import { SERBIAN_A1_LESSONS } from "./serbianLessons";
import { SERBIAN_A1_LISTENING, SERBIAN_A1_MIXED_REVISION } from "./serbianRevision";
import { ENGLISH_A1_LESSONS } from "./englishLessons";
import { SERBIAN_A1_FINAL_EXAM, ENGLISH_A1_FINAL_EXAM } from "./a1FinalExams";
import { SERBIAN_A2_LESSONS } from "./serbianA2Lessons";
import { ENGLISH_A2_LESSONS } from "./englishA2Lessons";
import { SERBIAN_B1_LESSONS } from "./serbianB1Lessons";
import { ENGLISH_B1_LESSONS } from "./englishB1Lessons";
import { SERBIAN_EXTRA_VOCAB, ENGLISH_EXTRA_VOCAB } from "./vocabularyPacks";
import { SERBIAN_VOCAB_PACK_2, ENGLISH_VOCAB_PACK_2 } from "./vocabularyPack2";
import { SERBIAN_VOCAB_PACK_3, ENGLISH_VOCAB_PACK_3 } from "./vocabularyPack3";
import { SERBIAN_VOCAB_PACK_4, ENGLISH_VOCAB_PACK_4 } from "./vocabularyPack4";
import { SERBIAN_VOCAB_PACK_5, ENGLISH_VOCAB_PACK_5 } from "./vocabularyPack5";
import { SERBIAN_VOCAB_PACK_6, ENGLISH_VOCAB_PACK_6 } from "./vocabularyPack6";
import { SERBIAN_VOCAB_PACK_7, ENGLISH_VOCAB_PACK_7 } from "./vocabularyPack7";
import { SERBIAN_VOCAB_PACK_8, ENGLISH_VOCAB_PACK_8 } from "./vocabularyPack8";
import { SERBIAN_VOCAB_PACK_9, ENGLISH_VOCAB_PACK_9 } from "./vocabularyPack9";
import { SERBIAN_VOCAB_PACK_10, ENGLISH_VOCAB_PACK_10 } from "./vocabularyPack10";
import { SERBIAN_VOCAB_PACK_11, ENGLISH_VOCAB_PACK_11 } from "./vocabularyPack11";
import { SERBIAN_VOCAB_PACK_12, ENGLISH_VOCAB_PACK_12 } from "./vocabularyPack12";
import { SLANG_VOCAB } from "./slangVocabulary";

const PALETTES={dark:{bg:"#071426",panel:"#10243D",panel2:"#142D49",teal:"#35D6C5",gold:"#F5C66A",white:"#F5F8FC",muted:"#9DB0C5",line:"#24415F",nav:"#0A1B30"},light:{bg:"#F3F7FA",panel:"#FFFFFF",panel2:"#E5EFF4",teal:"#087F78",gold:"#A96808",white:"#142638",muted:"#526779",line:"#C9D8E2",nav:"#E5EFF4"}};
const ThemeContext=createContext(null);
const MISSIONS=["අලුත් වචන 5ක් ඉගෙනගන්න","සංවාදයකට සවන් දෙන්න","වාක්‍යයක් හඬින් නැවත කියන්න"];
const LEVEL_LABELS={A1:"A1",A2:"A2",B1:"B1",B2:"B2",C1:"C1",C2:"C2"};

const courses={
 Serbian:[
  ["Zdravo","ආයුබෝවන් / හෙලෝ","ස්ද්‍රාවෝ","Zdravo, kako si?","හෙලෝ, ඔයාට කොහොමද?"],
  ["Dobar dan","සුබ දවසක්","දොබාර් දාන්","Dobar dan, gospodine.","සුබ දවසක් මහත්මයා."],
  ["Dobro jutro","සුබ උදෑසනක්","දොබ්‍රො යූත්‍රො","Dobro jutro svima.","හැමෝටම සුබ උදෑසනක්."],
  ["Dobro veče","සුබ සන්ධ්‍යාවක්","දොබ්‍රො වෙචේ","Dobro veče, Ana.","සුබ සන්ධ්‍යාවක්, ආනා."],
  ["Laku noć","සුබ රාත්‍රියක්","ලාකු නොච්","Laku noć i prijatno spavaj.","සුබ රාත්‍රියක්, සුවසේ නිදාගන්න."],
  ["Hvala","ස්තුතියි","හ්වාලා","Hvala puno.","බොහොම ස්තුතියි."],
  ["Molim","කරුණාකර / ඔබට සාදරයෙන්","මොලීම්","Molim vas, sačekajte.","කරුණාකර ටිකක් ඉන්න."],
  ["Izvinite","සමාවෙන්න","ඉස්විනිතේ","Izvinite, gde je stanica?","සමාවෙන්න, නැවතුම්පොළ කොහෙද?"],
  ["Da","ඔව්","දා","Da, razumem.","ඔව්, මට තේරෙනවා."],
  ["Ne","නැහැ","නේ","Ne, hvala.","එපා, ස්තුතියි."],
  ["Kako si?","ඔයාට කොහොමද?","කාකො සී","Zdravo! Kako si?","හෙලෝ! ඔයාට කොහොමද?"],
  ["Dobro sam","මම හොඳින්","දොබ්‍රො සාම්","Dobro sam, hvala.","මම හොඳින්, ස්තුතියි."],
  ["Kako se zoveš?","ඔයාගේ නම මොකක්ද?","කාකො සේ සොවේෂ්","Kako se zoveš?","ඔයාගේ නම මොකක්ද?"],
  ["Zovem se...","මගේ නම...","සොවේම් සේ","Zovem se Madhuranga.","මගේ නම මධුරංග."],
  ["Ne razumem","මට තේරෙන්නේ නැහැ","නේ රාසුමේම්","Izvinite, ne razumem.","සමාවෙන්න, මට තේරෙන්නේ නැහැ."],
  ["Govorite li engleski?","ඔබ ඉංග්‍රීසි කතා කරනවාද?","ගොවොරිතේ ලි එන්ග්ලෙස්කි","Govorite li engleski?","ඔබ ඉංග්‍රීසි කතා කරනවාද?"],
  ["Koliko košta?","කීයද? / මිල කීයද?","කොලිකො කොෂ්තා","Koliko košta ova kafa?","මේ කෝපි එක කීයද?"],
  ["Gde je...?","... කොහෙද?","ග්දේ යේ","Gde je autobuska stanica?","බස් නැවතුම්පොළ කොහෙද?"],
  ["Voda","වතුර","වොදා","Molim vas, jednu vodu.","කරුණාකර වතුර එකක් දෙන්න."],
  ["Račun, molim","බිල දෙන්න","රාචූන්, මොලීම්","Račun, molim.","බිල දෙන්න."],
  ["Koliko je sati?","වෙලාව කීයද?","කොලිකො යේ සාති","Izvinite, koliko je sati?","සමාවෙන්න, වෙලාව කීයද?"],
  ["Govorite sporije, molim","කරුණාකර හෙමින් කතා කරන්න","ගොවොරිතේ ස්පොරියේ, මොලීම්","Govorite sporije, molim.","කරුණාකර හෙමින් කතා කරන්න."],
  ["Možete li ponoviti?","නැවත කියන්න පුළුවන්ද?","මොෂෙතේ ලි පොනොවිතී","Izvinite, možete li ponoviti?","සමාවෙන්න, නැවත කියන්න පුළුවන්ද?"],
  ["Razumem","මට තේරෙනවා","රාසුමේම්","Da, razumem.","ඔව්, මට තේරෙනවා."],
  ["Ne znam","මම දන්නේ නැහැ","නේ ස්නාම්","Izvinite, ne znam.","සමාවෙන්න, මම දන්නේ නැහැ."],
  ["Gde je toalet?","වැසිකිළිය කොහෙද?","ග්දේ යේ තොඅලෙත්","Gde je toalet, molim?","වැසිකිළිය කොහෙද, කරුණාකර?"],
  ["Treba mi pomoć","මට උදව් අවශ්‍යයි","ත්‍රෙබා මි පොමොච්","Treba mi pomoć, molim vas.","මට උදව් අවශ්‍යයි, කරුණාකර."],
  ["Radim danas","මම අද වැඩ කරනවා","රාදිම් දනාස්","Danas radim do šest.","මම අද හය වෙනකම් වැඩ කරනවා."],
  ["Završio sam","මම ඉවර කළා (පිරිමි කථිකයා)","සාව්ර්ෂියො සාම්","Završio sam posao.","මම වැඩේ ඉවර කළා."],
  ["Gde treba da idem?","මම කොහෙටද යන්න ඕනේ?","ග්දේ ත්‍රෙබා දා ඉදෙම්","Gde treba da idem sada?","මම දැන් කොහෙටද යන්න ඕනේ?"],
  ["Dobro","හොඳයි","දොබ්‍රො","Sve je dobro.","හැමදේම හොඳයි."],
  ["Loše","නරකයි","ලොෂේ","Danas se osećam loše.","අද මට හොඳ නැහැ."],
  ["Danas","අද","දනාස්","Danas radim.","මම අද වැඩ කරනවා."],
  ["Sutra","හෙට","සුත්‍රා","Vidimo se sutra.","හෙට හමුවෙමු."],
  ["Juče","ඊයේ","යූචේ","Juče sam radio.","මම ඊයේ වැඩ කළා."],
  ["Sada","දැන්","සාදා","Dođi sada, molim te.","කරුණාකර දැන් එන්න."],
  ["Kasnije","පසුව","කාස්නියේ","Razgovaraćemo kasnije.","අපි පසුව කතා කරමු."],
  ["Ujutru","උදේ","උයුත්‍රු","Radim ujutru.","මම උදේ වැඩ කරනවා."],
  ["Uveče","සවස","උවෙචේ","Dolazim uveče.","මම සවස එනවා."],
  ["Hrana","ආහාර","හ්‍රානා","Hrana je spremna.","කෑම සූදානම්."],
  ["Hleb","පාන්","හ්ලෙබ්","Kupio sam hleb.","මම පාන් ගත්තා."],
  ["Mleko","කිරි","ම්ලෙකො","Treba mi mleko.","මට කිරි අවශ්‍යයි."],
  ["Kafa","කෝපි","කාෆා","Pijem kafu ujutru.","මම උදේ කෝපි බොනවා."],
  ["Čaj","තේ","චායි","Želim jedan čaj.","මට තේ එකක් ඕනේ."],
  ["Vreme","කාලය / කාලගුණය","ව්‍රෙමේ","Nemam mnogo vremena.","මට වැඩි වෙලාවක් නැහැ."],
  ["Novac","මුදල්","නොවාත්ස්","Nemam dovoljno novca.","මට ප්‍රමාණවත් මුදල් නැහැ."],
  ["Prodavnica","කඩය","ප්‍රොදාව්නීත්සා","Gde je prodavnica?","කඩය කොහෙද?"],
  ["Autobus","බස් රථය","අවුතොබුස්","Čekam autobus.","මම බස් එක එනකම් ඉන්නවා."],
  ["Voz","දුම්රිය","වොස්","Voz stiže uskoro.","දුම්රිය ඉක්මනින් එනවා."],
  ["Kuća","ගෙදර","කුචා","Moja kuća je blizu.","මගේ ගෙදර ළඟයි."],
  ["Posao","රැකියාව / වැඩ","පොසාඔ","Idem na posao.","මම වැඩට යනවා."],
  ["Kolega","සහකාර සේවකයා (පිරිමි)","කොලෙගා","Moj kolega je ljubazan.","මගේ සහකාර සේවකයා මිත්‍රශීලියි."],
  ["Umoran sam","මට මහන්සියි (පිරිමි)","උමොරාන් සාම්","Danas sam veoma umoran.","අද මට ගොඩක් මහන්සියි."],
  ["Spreman sam","මම සූදානම් (පිරිමි)","ස්ප්‍රෙමාන් සාම්","Spreman sam za posao.","මම වැඩට සූදානම්."],
  ["Čekajte malo","ටිකක් ඉන්න","චෙකායිතේ මාලො","Molim vas, čekajte malo.","කරුණාකර ටිකක් ඉන්න."],
  ["Nema problema","ප්‍රශ්නයක් නැහැ","නෙමා ප්‍රොබ්ලෙමා","Nema problema, mogu da pomognem.","ප්‍රශ්නයක් නැහැ, මට උදව් කරන්න පුළුවන්."],
  ["Koliko košta ovo?","මේක කීයද?","කොලිකො කොෂ්තා ඔවො","Izvinite, koliko košta ovo?","සමාවෙන්න, මේක කීයද?"],
  ["Želim ovo","මට මේක ඕනේ","ෂෙලිම් ඔවො","Želim ovo, molim vas.","මට මේක ඕනේ, කරුණාකර."],
  ["Gde je stanica?","නැවතුම්පොළ කොහෙද?","ග්දේ යේ ස්තානිත්සා","Gde je najbliža stanica?","ළඟම නැවතුම්පොළ කොහෙද?"],
  ["Vidimo se","නැවත හමුවෙමු","විදිමො සේ","Vidimo se sutra!","හෙට නැවත හමුවෙමු!"]
 ].map(([word,meaning,sound,example,translation])=>({word,meaning,sound,example,translation})),
 English:[
  ["Hello","ආයුබෝවන් / හෙලෝ","හෙලෝ","Hello, how are you?","හෙලෝ, ඔයාට කොහොමද?"],
  ["Good morning","සුබ උදෑසනක්","ගුඩ් මෝර්නින්","Good morning, everyone.","හැමෝටම සුබ උදෑසනක්."],
  ["Good evening","සුබ සන්ධ්‍යාවක්","ගුඩ් ඊව්නින්","Good evening, welcome.","සුබ සන්ධ්‍යාවක්, සාදරයෙන් පිළිගන්නවා."],
  ["Good night","සුබ රාත්‍රියක්","ගුඩ් නයිට්","Good night. See you tomorrow.","සුබ රාත්‍රියක්. හෙට හමුවෙමු."],
  ["Thank you","ස්තුතියි","තැන්ක් යූ","Thank you very much.","බොහොම ස්තුතියි."],
  ["Please","කරුණාකර","ප්ලීස්","Please help me.","කරුණාකර මට උදව් කරන්න."],
  ["Excuse me","සමාවෙන්න","එක්ස්කියූස් මී","Excuse me, where is the station?","සමාවෙන්න, නැවතුම්පොළ කොහෙද?"],
  ["Yes","ඔව්","යෙස්","Yes, I understand.","ඔව්, මට තේරෙනවා."],
  ["No","නැහැ","නෝ","No, thank you.","එපා, ස්තුතියි."],
  ["How are you?","ඔයාට කොහොමද?","හවු ආ යූ","Hello! How are you?","හෙලෝ! ඔයාට කොහොමද?"],
  ["I am fine","මම හොඳින්","අයි ඇම් ෆයින්","I am fine, thank you.","මම හොඳින්, ස්තුතියි."],
  ["What is your name?","ඔයාගේ නම මොකක්ද?","වොට් ඉස් යෝර් නේම්","What is your name?","ඔයාගේ නම මොකක්ද?"],
  ["My name is...","මගේ නම...","මයි නේම් ඉස්","My name is Madhuranga.","මගේ නම මධුරංග."],
  ["I don't understand","මට තේරෙන්නේ නැහැ","අයි ඩෝන්ට් අන්ඩර්ස්ටෑන්ඩ්","Sorry, I don't understand.","සමාවෙන්න, මට තේරෙන්නේ නැහැ."],
  ["Do you speak English?","ඔබ ඉංග්‍රීසි කතා කරනවාද?","ඩූ යූ ස්පීක් ඉංග්ලිෂ්","Do you speak English?","ඔබ ඉංග්‍රීසි කතා කරනවාද?"],
  ["How much is it?","මේක කීයද?","හවු මච් ඉස් ඉට්","How much is this coffee?","මේ කෝපි එක කීයද?"],
  ["Where is...?","... කොහෙද?","වෙයාර් ඉස්","Where is the bus station?","බස් නැවතුම්පොළ කොහෙද?"],
  ["Water","වතුර","වෝටර්","Can I have some water, please?","කරුණාකර මට වතුර ටිකක් දෙන්න පුළුවන්ද?"],
  ["The bill, please","බිල දෙන්න","ද බිල් ප්ලීස්","Could I have the bill, please?","කරුණාකර බිල දෙන්න පුළුවන්ද?"],
  ["I need help","මට උදව් අවශ්‍යයි","අයි නීඩ් හෙල්ප්","I need help, please.","කරුණාකර මට උදව් අවශ්‍යයි."],
  ["Good","හොඳ","ගුඩ්","This is a good idea.","මේක හොඳ අදහසක්."],
  ["Bad","නරක","බෑඩ්","That is a bad habit.","ඒක නරක පුරුද්දක්."],
  ["Today","අද","ටුඩේ","I am working today.","මම අද වැඩ කරනවා."],
  ["Tomorrow","හෙට","ටුමොරෝ","See you tomorrow.","හෙට හමුවෙමු."],
  ["Yesterday","ඊයේ","යෙස්ටර්ඩේ","I was busy yesterday.","මම ඊයේ කාර්යබහුලව හිටියා."],
  ["Now","දැන්","නව්","I am busy now.","මම දැන් කාර්යබහුලයි."],
  ["Later","පසුව","ලේටර්","I will call you later.","මම ඔයාට පසුව කතා කරන්නම්."],
  ["Morning","උදෑසන","මෝර්නින්","I work in the morning.","මම උදේ වැඩ කරනවා."],
  ["Evening","සවස","ඊව්නින්","I am free this evening.","මම අද සවස නිදහස්."],
  ["Food","ආහාර","ෆූඩ්","The food is ready.","කෑම සූදානම්."],
  ["Bread","පාන්","බ්‍රෙඩ්","I need some bread.","මට පාන් ටිකක් ඕනේ."],
  ["Milk","කිරි","මිල්ක්","Do you have milk?","ඔයා ළඟ කිරි තියෙනවද?"],
  ["Coffee","කෝපි","කොෆී","I drink coffee every morning.","මම හැම උදේම කෝපි බොනවා."],
  ["Tea","තේ","ටී","Would you like some tea?","ඔයාට තේ ටිකක් ඕනෙද?"],
  ["Time","වේලාව / කාලය","ටයිම්","I don't have much time.","මට වැඩි වෙලාවක් නැහැ."],
  ["Money","මුදල්","මනි","I need to save money.","මට මුදල් ඉතිරි කරන්න ඕනේ."],
  ["Shop","කඩය","ෂොප්","The shop is open.","කඩය විවෘතයි."],
  ["Bus","බස් රථය","බස්","I take the bus to work.","මම වැඩට බස් එකේ යනවා."],
  ["Train","දුම්රිය","ට්‍රේන්","The train is late.","දුම්රිය පරක්කුයි."],
  ["Home","ගෙදර","හෝම්","I am going home.","මම ගෙදර යනවා."],
  ["Work","වැඩ / රැකියාව","වර්ක්","I start work at eight.","මම අටට වැඩ පටන් ගන්නවා."],
  ["Colleague","සහකාර සේවකයා","කොලීග්","My colleague is helpful.","මගේ සහකාර සේවකයා උදව් කරන කෙනෙක්."],
  ["Tired","මහන්සියි","ටයර්ඩ්","I am tired today.","මට අද මහන්සියි."],
  ["Ready","සූදානම්","රෙඩී","I am ready to go.","මම යන්න සූදානම්."],
  ["Wait a moment","මොහොතක් ඉන්න","වේට් අ මෝමන්ට්","Please wait a moment.","කරුණාකර මොහොතක් ඉන්න."],
  ["No problem","ප්‍රශ්නයක් නැහැ","නෝ ප්‍රොබ්ලම්","No problem, I can help.","ප්‍රශ්නයක් නැහැ, මට උදව් කරන්න පුළුවන්."],
  ["How much is this?","මේක කීයද?","හවු මච් ඉස් දිස්","Excuse me, how much is this?","සමාවෙන්න, මේක කීයද?"],
  ["I would like this","මට මේක අවශ්‍යයි","අයි වුඩ් ලයික් දිස්","I would like this, please.","මට මේක ඕනේ, කරුණාකර."],
  ["Where is the station?","නැවතුම්පොළ කොහෙද?","වෙයාර් ඉස් ද ස්ටේෂන්","Where is the nearest station?","ළඟම නැවතුම්පොළ කොහෙද?"],
  ["See you","නැවත හමුවෙමු","සී යූ","See you tomorrow!","හෙට නැවත හමුවෙමු!"]
 ].map(([word,meaning,sound,example,translation])=>({word,meaning,sound,example,translation}))
};
courses.Serbian.push(...SERBIAN_EXTRA_VOCAB);
courses.English.push(...ENGLISH_EXTRA_VOCAB);
courses.Serbian.push(...SERBIAN_VOCAB_PACK_2);
courses.English.push(...ENGLISH_VOCAB_PACK_2);
courses.Serbian.push(...SERBIAN_VOCAB_PACK_3);
courses.English.push(...ENGLISH_VOCAB_PACK_3);
courses.Serbian.push(...SERBIAN_VOCAB_PACK_4);
courses.English.push(...ENGLISH_VOCAB_PACK_4);
courses.Serbian.push(...SERBIAN_VOCAB_PACK_5);
courses.English.push(...ENGLISH_VOCAB_PACK_5);
courses.Serbian.push(...SERBIAN_VOCAB_PACK_6);
courses.English.push(...ENGLISH_VOCAB_PACK_6);
courses.Serbian.push(...SERBIAN_VOCAB_PACK_7);
courses.English.push(...ENGLISH_VOCAB_PACK_7);
courses.Serbian.push(...SERBIAN_VOCAB_PACK_8);
courses.English.push(...ENGLISH_VOCAB_PACK_8);
courses.Serbian.push(...SERBIAN_VOCAB_PACK_9);
courses.English.push(...ENGLISH_VOCAB_PACK_9);
courses.Serbian.push(...SERBIAN_VOCAB_PACK_10);
courses.English.push(...ENGLISH_VOCAB_PACK_10);
courses.Serbian.push(...SERBIAN_VOCAB_PACK_11);
courses.English.push(...ENGLISH_VOCAB_PACK_11);
courses.Serbian.push(...SERBIAN_VOCAB_PACK_12);
courses.English.push(...ENGLISH_VOCAB_PACK_12);
const serbianSinhala = {
  "Zdravo": "ස්ද්‍රාවො",
  "Dobar dan": "දොබාර් දාන්",
  "Dobro jutro": "දොබ්‍රො යූත්‍රො",
  "Dobro veče": "දොබ්‍රො වෙචේ",
  "Laku noć": "ලාකු නොච්",
  "Hvala": "හ්වාලා",
  "Molim": "මොලීම්",
  "Izvinite": "ඉස්විනිතේ",
  "Da": "දා",
  "Ne": "නේ",
  "Kako si?": "කාකො සී?",
  "Dobro sam": "දොබ්‍රො සාම්",
  "Kako se zoveš?": "කාකො සේ සොවේෂ්?",
  "Zovem se...": "සොවේම් සේ",
  "Ne razumem": "නේ රාසුමේම්",
  "Govorite li engleski?": "ගොවොරිතේ ලි එන්ග්ලෙස්කි?",
  "Koliko košta?": "කොලිකො කොෂ්තා?",
  "Gde je...?": "ග්දේ යේ?",
  "Voda": "වොදා",
  "Račun, molim": "රාචුන්, මොලීම්",
  "Zdravo, kako si?": "ස්ද්‍රාවො, කාකො සී?",
  "Dobar dan, gospodine.": "දොබාර් දාන්, ගොස්පොදිනේ.",
  "Dobro jutro svima.": "දොබ්‍රො යූත්‍රො ස්විමා.",
  "Dobro veče, Ana.": "දොබ්‍රො වෙචේ, ආනා.",
  "Laku noć i prijatno spavaj.": "ලාකු නොච් ඉ ප්‍රියාත්නො ස්පාවායි.",
  "Hvala puno.": "හ්වාලා පූනො.",
  "Molim vas, sačekajte.": "මොලීම් වාස්, සාචෙකායිතේ.",
  "Izvinite, gde je stanica?": "ඉස්විනිතේ, ග්දේ යේ ස්තානිත්සා?",
  "Da, razumem.": "දා, රාසුමේම්.",
  "Ne, hvala.": "නේ, හ්වාලා.",
  "Dobro sam, hvala.": "දොබ්‍රො සාම්, හ්වාලා.",
  "Zovem se Madhuranga.": "සොවේම් සේ මධුරංග.",
  "Izvinite, ne razumem.": "ඉස්විනිතේ, නේ රාසුමේම්.",
  "Koliko košta ova kafa?": "කොලිකො කොෂ්තා ඔවා කාෆා?",
  "Gde je autobuska stanica?": "ග්දේ යේ අව්තොබුස්කා ස්තානිත්සා?",
  "Molim vas, jednu vodu.": "මොලීම් වාස්, යෙද්නු වොදු.",
  "Račun, molim.": "රාචුන්, මොලීම්.",
  "auto": "ආවුතො",
  "baba": "බාබා",
  "car": "ත්සාර්",
  "čaj": "චායි",
  "ćao": "චාඔ",
  "dan": "දාන්",
  "džem": "ජෙම්",
  "đak": "ජැක්",
  "ekran": "එක්‍රාන්",
  "film": "ෆිල්ම්",
  "grad": "ග්‍රාද්",
  "hotel": "හොටෙල්",
  "ime": "ඉමේ",
  "ja": "යා",
  "kafa": "කාෆා",
  "leto": "ලෙතො",
  "ljubav": "ල්‍යුබාව්",
  "more": "මොරෙ",
  "noć": "නොච්",
  "njiva": "න්‍යීවා",
  "oko": "ඔකො",
  "pas": "පාස්",
  "ruka": "රූකා",
  "sunce": "සුන්ත්සේ",
  "škola": "ෂ්කොලා",
  "tata": "තාතා",
  "ulica": "උලිත්සා",
  "voda": "වොදා",
  "zima": "සිමා",
  "žena": "ෂෙනා",
  "Jednu kafu, molim.": "යෙද්නු කාෆු, මොලීම්.",
  "Da li želite šećer?": "දා ලි ෂෙලීතේ ෂෙචෙර්?",
  "Bez šećera, hvala.": "බෙස් ෂෙචෙරා, හ්වාලා.",
  "Nula": "නුලා",
  "Jedan": "යෙදාන්",
  "Dva": "ද්වා",
  "Tri": "ත්‍රි",
  "Četiri": "චෙතිරි",
  "Pet": "පෙත්",
  "Šest": "ෂෙස්ත්",
  "Sedam": "සෙදාම්",
  "Osam": "ඔසාම්",
  "Devet": "දෙවෙත්",
  "Deset": "දෙසෙත්",
  "Jedanaest": "යෙදානාඑස්ත්",
  "Dvanaest": "ද්වානාඑස්ත්",
  "Trinaest": "ත්‍රිනාඑස්ත්",
  "Četrnaest": "චෙත්‍ර්නාඑස්ත්",
  "Petnaest": "පෙත්නාඑස්ත්",
  "Šesnaest": "ෂෙස්නාඑස්ත්",
  "Sedamnaest": "සෙදාම්නාඑස්ත්",
  "Osamnaest": "ඔසාම්නාඑස්ත්",
  "Devetnaest": "දෙවෙත්නාඑස්ත්",
  "Dvadeset": "ද්වාදෙසෙත්",
  "Trideset": "ත්‍රිදෙසෙත්",
  "Četrdeset": "චෙත්‍ර්දෙසෙත්",
  "Pedeset": "පෙදෙසෙත්",
  "Šezdeset": "ෂෙස්දෙසෙත්",
  "Sedamdeset": "සෙදාම්දෙසෙත්",
  "Osamdeset": "ඔසාම්දෙසෙත්",
  "Devedeset": "දෙවෙදෙසෙත්",
  "Sto": "ස්තො",
  "Trista": "ත්‍රිස්තා",
  "Četiristo": "චෙතිරිස්තො",
  "Petsto": "පෙත්ස්තො",
  "Šeststo": "ෂෙස්ත්ස්තො",
  "Sedamsto": "සෙදාම්ස්තො",
  "Osamsto": "ඔසාම්ස්තො",
  "Devetsto": "දෙවෙත්ස්තො",
  "Hiljadu": "හිල්‍යාදු",
  "Deset hiljada": "දෙසෙත් හිල්‍යාදා",
  "Pedeset hiljada": "පෙදෙසෙත් හිල්‍යාදා",
  "Petsto hiljada": "පෙත්ස්තො හිල්‍යාදා",
  "Deset hiljada dinara.": "දෙසෙත් හිල්‍යාදා දිනාරා.",
  "Pedeset hiljada dinara.": "පෙදෙසෙත් හිල්‍යාදා දිනාරා.",
  "Petsto hiljada dinara.": "පෙත්ස්තො හිල්‍යාදා දිනාරා.",
    "Sto hiljada": "ස්තො හිල්‍යාදා",
  "Dvesta hiljada": "ද්වෙස්තා හිල්‍යාදා",
  "Milion": "මිලියොන්",
  "Jedan milion": "යෙදාන් මිලියොන්",
  "Dva miliona": "ද්වා මිලියොනා",
  "Pet miliona": "පෙත් මිලියොනා",
  "Deset miliona": "දෙසෙත් මිලියොනා",
  "Sto miliona": "ස්තො මිලියොනා",
  "Dva miliona dinara.": "ද්වා මිලියොනා දිනාරා.",
  "Pet miliona dinara.": "පෙත් මිලියොනා දිනාරා.",
  "Deset miliona dinara.": "දෙසෙත් මිලියොනා දිනාරා.",
  "Sto miliona dinara.": "ස්තො මිලියොනා දිනාරා.",
  "Sto hiljada dinara.": "ස්තො හිල්‍යාදා දිනාරා.",
  "Dvesta hiljada dinara.": "ද්වෙස්තා හිල්‍යාදා දිනාරා.",
  "Jedan milion dinara.": "යෙදාන් මිලියොන් දිනාරා.",
  "Dvesta": "ද්වෙස්තා",
  "Dvesta dinara.": "ද්වෙස්තා දිනාරා.",
  "To je 200 dinara.": "තො යේ ද්වෙස්තා දිනාරා.",
  "Možete li da mi pomognete?": "මොෂෙතේ ලි දා මි පොමොග්නෙතේ?",
  "Naravno.": "නාරාව්නො.",
  "Šta treba da uradim?": "ෂ්තා ත්‍රෙබා දා උරාදිම්?",
  "Razumem.": "රාසුමේම්.",
  "Možete li ponoviti?": "මොෂෙතේ ලි පොනොවිතී?",
  "Idite pravo.": "ඉදිතේ ප්‍රාවො.",
  "Skrenite levo.": "ස්ක්‍රෙනිතේ ලෙවො.",
  "Hvala na pomoći.": "හ්වාලා නා පොමොචි.",
  "cena": "ත්සේනා",
  "čaj": "චායි",
  "ćao": "ච්‍යාඔ (මෘදු ච්)",
  "džem": "ජෙම්",
  "đak": "ජ්‍යාක් (මෘදු ජ්)",
  "škola": "ෂ්කොලා",
  "žena": "ෂෙනා (හඬ ඇති ෂ්)",
  "ljubav": "ල්‍යුබාව්",
  "njiva": "න්‍යීවා",
  "zima": "සිමා (හඬ ඇති ස)"
};
const pronounceSinhala=(text)=>{
 if(serbianSinhala[text]) return serbianSinhala[text];
 const map={dž:"ජ්",lj:"ල්‍ය",nj:"න්‍ය",č:"ච්",ć:"ච්‍ය",đ:"ජ්‍ය",š:"ෂ්",ž:"ෂ්",a:"අ",b:"බ්",c:"ත්ස්",d:"ද්",e:"එ",f:"ෆ්",g:"ග්",h:"හ්",i:"ඉ",j:"ය්",k:"ක්",l:"ල්",m:"ම්",n:"න්",o:"ඔ",p:"ප්",r:"ර්",s:"ස්",t:"ත්",u:"උ",v:"ව්",z:"ස්"};
 let out="",i=0,src=String(text).toLowerCase();
 while(i<src.length){
  let pair=src.slice(i,i+2);
  if(map[pair]){out+=map[pair];i+=2;continue;}
  let ch=src[i];
  out+=map[ch]??ch;i++;
 }
 return out;
};
const speakingPractice={
 Serbian:[
  {title:"කෙනෙක් හමුවීම",context:"දිනපතා හමුවීම් සහ හඳුනාගැනීම්",lines:[["Zdravo! Kako si?","හෙලෝ! ඔයාට කොහොමද?"],["Dobro sam, hvala. A ti?","මම හොඳින්, ස්තුතියි. ඔයාට?"],["I ja sam dobro.","මමත් හොඳින්."],["Kako se zoveš?","ඔයාගේ නම මොකක්ද?"],["Zovem se...","මගේ නම..."]]},
  {title:"කැෆේ එකකදී",context:"කෑම බීම ඇණවුම් කිරීම",lines:[["Dobar dan!","සුබ දවසක්!"],["Jednu kafu, molim.","කෝපි එකක් දෙන්න, කරුණාකර."],["Da li želite šećer?","සීනි ඕනෙද?"],["Bez šećera, hvala.","සීනි නැතුව, ස්තුතියි."],["Koliko košta?","කීයද?"],["To je 200 dinara.","ඒක ඩිනාර් 200යි."]]},
  {title:"වැඩ කරන තැන",context:"රැකියාවේදී අවශ්‍ය වාක්‍ය",lines:[["Možete li da mi pomognete?","මට උදව් කරන්න පුළුවන්ද?"],["Naravno.","අනිවාර්යයෙන්."],["Šta treba da uradim?","මම මොකක්ද කරන්න ඕනේ?"],["Razumem.","මට තේරුණා."],["Možete li ponoviti?","ආයෙත් කියන්න පුළුවන්ද?"]]},
  {title:"මාර්ගය අහන විට",context:"නගරයේ ගමන් කිරීම",lines:[["Izvinite, gde je autobuska stanica?","සමාවෙන්න, බස් නැවතුම කොහෙද?"],["Idite pravo.","කෙළින්ම යන්න."],["Skrenite levo.","වමට හැරෙන්න."],["Hvala na pomoći.","උදව්වට ස්තුතියි."]]}
 ],
 English:[
  {title:"Meeting someone",context:"දිනපතා හමුවීම් සහ හඳුනාගැනීම්",lines:[["Hi! How are you?","හෙලෝ! ඔයාට කොහොමද?"],["I'm good, thanks. And you?","මම හොඳින්, ස්තුතියි. ඔයාට?"],["I'm good too.","මමත් හොඳින්."],["What's your name?","ඔයාගේ නම මොකක්ද?"],["My name is...","මගේ නම..."]]},
  {title:"At a café",context:"කෑම බීම ඇණවුම් කිරීම",lines:[["Good afternoon!","සුබ සන්ධ්‍යාවක්!"],["I'd like a coffee, please.","මට කෝපි එකක් ඕනේ, කරුණාකර."],["Would you like sugar?","සීනි ඕනෙද?"],["No sugar, thank you.","සීනි එපා, ස්තුතියි."],["How much is it?","කීයද?" ]]},
  {title:"At work",context:"රැකියාවේදී අවශ්‍ය වාක්‍ය",lines:[["Could you help me, please?","මට උදව් කරන්න පුළුවන්ද?"],["Of course.","අනිවාර්යයෙන්."],["What should I do?","මම මොකක්ද කරන්න ඕනේ?"],["I understand.","මට තේරුණා."],["Could you repeat that?","ආයෙත් කියන්න පුළුවන්ද?"]]},
  {title:"Asking for directions",context:"නගරයේ ගමන් කිරීම",lines:[["Excuse me, where is the bus station?","සමාවෙන්න, බස් නැවතුම කොහෙද?"],["Go straight ahead.","කෙළින්ම යන්න."],["Turn left.","වමට හැරෙන්න."],["Thank you for your help.","ඔබේ උදව්වට ස්තුතියි."]]}
 ]
};
const serbianSoundGuide=[
 {letters:"C",name:"ත්ස් ශබ්දය",hint:"සිංහල 'ත්ස' වගේ. 'ච' කියලා කියන්න එපා.",example:"cena",reading:"ත්සේනා",meaning:"මිල"},
 {letters:"Č",name:"තද 'ච්' ශබ්දය",hint:"සිංහල 'ච' ශබ්දයට ආසන්නයි; දිව ටිකක් පසුපසින් තබන්න.",example:"čaj",reading:"චායි",meaning:"තේ"},
 {letters:"Ć",name:"මෘදු 'ච්' ශබ්දය",hint:"Č ට වඩා මෘදු, දිව ඉදිරිපසට ළං කර කියන ශබ්දයක්. සිංහලෙන් හරියටම වෙනම ලියන්න අමාරුයි.",example:"ćao",reading:"ච්‍යාඔ (මෘදු)",meaning:"හායි / බායි"},
 {letters:"Dž",name:"තද 'ජ්' ශබ්දය",hint:"ඉංග්‍රීසි jam හි මුල් ශබ්දයට ආසන්නයි.",example:"džem",reading:"ජෙම්",meaning:"ජෑම්"},
 {letters:"Đ",name:"මෘදු 'ජ්' ශබ්දය",hint:"Dž ට වඩා මෘදුයි; දිව ඉදිරිපසට ළං කර කියන්න.",example:"đak",reading:"ජ්‍යාක් (මෘදු)",meaning:"ශිෂ්‍යයා"},
 {letters:"Š",name:"ෂ් ශබ්දය",hint:"සිංහල 'ෂ්' වගේ; ඉංග්‍රීසි ship හි මුල් ශබ්දය.",example:"škola",reading:"ෂ්කොලා",meaning:"පාසල"},
 {letters:"Ž",name:"මෘදු ෂ් / ෂ් හඬ",hint:"Š හි හඬට කටහඬ එකතු කළා වගේ. ඉංග්‍රීසි measure හි මැද ශබ්දයට ආසන්නයි.",example:"žena",reading:"ෂෙනා (හඬ ඇති ෂ්)",meaning:"කාන්තාව"},
 {letters:"Lj",name:"එකම මෘදු 'ල්‍ය' ශබ්දය",hint:"L සහ Y වෙන වෙනම නොකියා එකට මෘදු කර කියන්න.",example:"ljubav",reading:"ල්‍යුබාව්",meaning:"ආදරය"},
 {letters:"Nj",name:"එකම මෘදු 'න්‍ය' ශබ්දය",hint:"N සහ Y වෙන වෙනම නොකියා එකට මෘදු කර කියන්න.",example:"njiva",reading:"න්‍යීවා",meaning:"වගාබිම"},
 {letters:"J",name:"ය් ශබ්දය",hint:"ඉංග්‍රීසි yes හි මුල් 'ය' ශබ්දය. English J වගේ 'ජ' නෙවෙයි.",example:"ja",reading:"යා",meaning:"මම"},
 {letters:"R",name:"කම්පනය වන ර්",hint:"දිව අග ඉහළ දත් පිටුපසට සැහැල්ලුවෙන් තබා කෙටි කම්පනයක් ඇති කරන්න. සිංහල රට වඩා තදින් පෙරළන්න.",example:"ruka",reading:"රූකා",meaning:"අත"},
 {letters:"A E I O U",name:"ස්වර අකුරු පහ",hint:"A=අ/ආ, E=එ, I=ඊ, O=ඔ, U=උ. සාමාන්‍යයෙන් ශබ්දය ස්ථාවරයි.",example:"auto",reading:"ආවුතො",meaning:"මෝටර් රථය"}
];
const serbianAlphabet=[
 ["A","А","ආ","auto"],["B","Б","බේ","baba"],["C","Ц","ත්සේ","car"],["Č","Ч","චේ","čaj"],["Ć","Ћ","ච්‍යේ","ćao"],["D","Д","දේ","dan"],["Dž","Џ","ජේ","džem"],["Đ","Ђ","ජ්‍යේ","đak"],["E","Е","එ","ekran"],["F","Ф","එෆ්","film"],["G","Г","ගේ","grad"],["H","Х","හ","hotel"],["I","И","ඊ","ime"],["J","Ј","යේ","ja"],["K","К","කා","kafa"],["L","Л","එල්","leto"],["Lj","Љ","ල්‍යේ","ljubav"],["M","М","එම්","more"],["N","Н","එන්","noć"],["Nj","Њ","න්‍යේ","njiva"],["O","О","ඔ","oko"],["P","П","පේ","pas"],["R","Р","එර්","ruka"],["S","С","එස්","sunce"],["Š","Ш","ෂ","škola"],["T","Т","තේ","tata"],["U","У","උ","ulica"],["V","В","වේ","voda"],["Z","З","සේ","zima"],["Ž","Ж","ෂේ","žena"]
];
const pronounceEnglishSinhala=(text)=>{
 const exact={
  "What is your number?":"වොට් ඉස් යෝර් නම්බර්?",
  "I have one phone.":"අයි හැව් වන් ෆෝන්.",
  "I need two tickets.":"අයි නීඩ් ටූ ටිකිට්ස්.",
  "Three coffees, please.":"ත්‍රී කොෆීස්, ප්ලීස්.",
  "Hello, my name is Ana.":"හෙලෝ, මයි නේම් ඉස් ආනා.",
  "Good morning, everyone.":"ගුඩ් මෝර්නින්, එව්රිවන්.",
  "Thank you very much.":"තෑන්ක් යූ වෙරි මච්."
 };
 if(exact[text]) return exact[text];
 const rules=[
  [/tion/gi,"ෂන්"],[/sion/gi,"ෂන්"],[/ture/gi,"චර්"],[/ough/gi,"ඔෆ්"],[/igh/gi,"අයි"],[/ee|ea/gi,"ඊ"],[/oo/gi,"ඌ"],[/ai|ay/gi,"ඒ"],[/oa|ow/gi,"ඕ"],[/ou/gi,"අවු"],[/th/gi,"ත්"],[/sh/gi,"ෂ්"],[/ch/gi,"ච්"],[/ph/gi,"ෆ්"],[/wh/gi,"ව"],[/ck/gi,"ක්"],[/ng/gi,"ං"],[/qu/gi,"ක්ව"],[/wr/gi,"ර්"],[/kn/gi,"න්"],[/[aeiou]r\b/gi,"ර්"],[/a/gi,"ඇ"],[/e/gi,"එ"],[/i/gi,"ඉ"],[/o/gi,"ඔ"],[/u/gi,"අ"],[/b/gi,"බ්"],[/c/gi,"ක්"],[/d/gi,"ඩ්"],[/f/gi,"ෆ්"],[/g/gi,"ග්"],[/h/gi,"හ්"],[/j/gi,"ජ්"],[/k/gi,"ක්"],[/l/gi,"ල්"],[/m/gi,"ම්"],[/n/gi,"න්"],[/p/gi,"ප්"],[/r/gi,"ර්"],[/s/gi,"ස්"],[/t/gi,"ට්"],[/v/gi,"ව්"],[/w/gi,"ව්"],[/x/gi,"ක්ස්"],[/y/gi,"යි"],[/z/gi,"ස්"]
 ];
 let out=String(text).toLowerCase();
 for(const [pattern,replacement] of rules) out=out.replace(pattern,replacement);
 return out.replace(/\s+/g," ").replace(/([.!?,])/g,"$1");
};
const GOOGLE_TTS_ENDPOINT=process.env.EXPO_PUBLIC_VOICE_API_URL||"";
let activeGoogleSound=null;
const speak=async(text,lang)=>{
 const phrase=String(text||"").trim();
 if(!phrase)return;
 Speech.stop();
 if(GOOGLE_TTS_ENDPOINT){
  try{
   const response=await fetch(GOOGLE_TTS_ENDPOINT.replace(/\/+$/, "")+"/speak",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({text:phrase,language:lang==="Serbian"?"sr-RS":"en-US"})
   });
   if(!response.ok)throw new Error("Google voice service returned "+response.status);
   const payload=await response.json();
   if(!payload.audioContent)throw new Error("Voice response did not contain audio");
   const uri=FileSystem.cacheDirectory+"basanova-voice-"+Date.now()+".mp3";
   await FileSystem.writeAsStringAsync(uri,payload.audioContent,{encoding:FileSystem.EncodingType.Base64});
   if(activeGoogleSound){await activeGoogleSound.unloadAsync().catch(()=>{});activeGoogleSound=null;}
   const result=await Audio.Sound.createAsync({uri},{shouldPlay:true});
   activeGoogleSound=result.sound;
   return;
  }catch(error){
   console.warn("Google TTS unavailable; using device speech fallback",error);
  }
 }
 Speech.speak(phrase,{language:lang==="Serbian"?"sr-RS":"en-US",rate:0.82});
};
function Action({children,onPress,secondary=false}){const {styles:s,colors:C}=useContext(ThemeContext);return <TouchableOpacity onPress={onPress} style={[s.action,secondary&&s.secondary]}><Text style={[s.actionText,secondary&&{color:C.teal}]}>{children}</Text></TouchableOpacity>;}
export default function App(){
 const [theme,setTheme]=useState("dark");
 const C=PALETTES[theme];
 const s=useMemo(()=>makeStyles(C),[theme]);
 const [lessonAnswers,setLessonAnswers]=useState({});
 const [lessonChecked,setLessonChecked]=useState({});
 const [expandedLessonId,setExpandedLessonId]=useState(SERBIAN_A1_LESSONS[0]?.id||null);
 const [missionDone,setMissionDone]=useState([]);
 const [xp,setXp]=useState(0);

 const completeMission=i=>{if(!missionDone.includes(i)){setMissionDone(v=>[...v,i]);setXp(v=>v+10);}};
 const [language,setLanguage]=useState(null),[tab,setTab]=useState("home"),[index,setIndex]=useState(0),[learned,setLearned]=useState({Serbian:[],English:[]}),[dialogIndex,setDialogIndex]=useState(0),[lineIndex,setLineIndex]=useState(0),[showSlang,setShowSlang]=useState(false);
 const [translateInput,setTranslateInput]=useState(""),[translateOutput,setTranslateOutput]=useState(""),[translateLoading,setTranslateLoading]=useState(false),[translateError,setTranslateError]=useState(""),[translateHistory,setTranslateHistory]=useState([]),[translateCopied,setTranslateCopied]=useState(false);
 const [vocabSearch,setVocabSearch]=useState("");
 const [vocabLetter,setVocabLetter]=useState("ALL");
 const [favoriteWords,setFavoriteWords]=useState([]);
 const [showFavoritesOnly,setShowFavoritesOnly]=useState(false);
 const [storageReady,setStorageReady]=useState(false);
 useEffect(()=>{let active=true;(async()=>{try{const raw=await AsyncStorage.getItem("basanova-progress-v1");if(raw&&active){const saved=JSON.parse(raw);setTheme(saved.theme==="light"?"light":"dark");setLessonAnswers(saved.lessonAnswers||{});setLessonChecked(saved.lessonChecked||{});setMissionDone(Array.isArray(saved.missionDone)?saved.missionDone:[]);setXp(Number.isFinite(saved.xp)?saved.xp:0);setLearned({Serbian:Array.isArray(saved.learned?.Serbian)?saved.learned.Serbian:[],English:Array.isArray(saved.learned?.English)?saved.learned.English:[]});setTranslateHistory(Array.isArray(saved.translateHistory)?saved.translateHistory:[]);setFavoriteWords(Array.isArray(saved.favoriteWords)?saved.favoriteWords:[]);if(saved.language==="Serbian"||saved.language==="English")setLanguage(saved.language);}}catch(error){console.warn("Could not restore BasaNova progress",error);}finally{if(active)setStorageReady(true);}})();return()=>{active=false;};},[]);
 useEffect(()=>{if(!storageReady)return;const payload={theme,lessonAnswers,lessonChecked,missionDone,xp,learned,translateHistory,language,favoriteWords};AsyncStorage.setItem("basanova-progress-v1",JSON.stringify(payload)).catch(error=>console.warn("Could not save BasaNova progress",error));},[storageReady,theme,lessonAnswers,lessonChecked,missionDone,xp,learned,translateHistory,language,favoriteWords]);
 const words=language?courses[language]:[],current=language?words[index%words.length]:null;
 const vocabularyEntries=useMemo(()=>{
  if(!language)return [];
  const entries=[];
  const add=(word,meaning,reading,example,translation,exampleReading,source)=>{
   if(!word||typeof word!=="string"||!/[A-Za-z]/.test(word))return;
   entries.push({word:word.trim(),meaning:meaning||"තේරුම තවම එකතු කර නැහැ",reading:reading|| (language==="Serbian"?pronounceSinhala(word):pronounceEnglishSinhala(word)),example:example||"",translation:translation||"",exampleReading:exampleReading||(example?(language==="Serbian"?pronounceSinhala(example):pronounceEnglishSinhala(example)):""),source:source||"වචන එකතුව"});
  };
  words.forEach(item=>add(item.word,item.meaning,item.sound,item.example,item.translation,null,"වචන එකතුව"));
  const lessons=language==="Serbian"?SERBIAN_A1_LESSONS:ENGLISH_A1_LESSONS;
  lessons.forEach(lesson=>{
   (lesson.vocabulary||[]).forEach(item=>add(item.word,item.meaning,item.reading,item.example,item.translation,item.exampleReading,"පාඩම"));
   (lesson.grammarTerms||[]).forEach(item=>add(item.sr||item.text,item.si||item.meaning,item.reading,"","",null,"ව්‍යාකරණය"));
   (lesson.examples||[]).forEach(item=>add(item.sr||item.text,item.si||item.meaning,item.reading,"","",null,"උදාහරණ"));
   (lesson.dialogue||[]).forEach(item=>add(item.sr||item.text,item.si||item.meaning,item.reading,"","",null,"සංවාදය"));
   (lesson.practice||[]).forEach(q=>{(q.options||[]).forEach(option=>add(option,"පිළිතුරු විකල්පය",null,"","",null,"පුහුණු ප්‍රශ්න"));(q.explanation?.match(/[“"]([^”"]+)[”"]/g)||[]).forEach(quoted=>{const phrase=quoted.slice(1,-1);if(/[A-Za-z]/.test(phrase))add(phrase,q.explanation,null,"","",null,"පිළිතුරු පැහැදිලි කිරීම");});});
   (lesson.grammar?.match(/[“"]([^”"]+)[”"]/g)||[]).forEach(quoted=>{const phrase=quoted.slice(1,-1);if(/[A-Za-z]/.test(phrase))add(phrase,lesson.grammar,null,"","",null,"ව්‍යාකරණ පැහැදිලි කිරීම");});
  });
  const unique=new Map();
  entries.forEach(item=>{
   const key=item.word.toLocaleLowerCase();
   const old=unique.get(key);
   if(!old||(!old.example&&item.example)||old.meaning==="තේරුම තවම එකතු කර නැහැ")unique.set(key,item);
  });
  return [...unique.values()].sort((a,b)=>a.word.localeCompare(b.word,language==="Serbian"?"sr":"en",{sensitivity:"base"}));
 },[language,words]);
 const alphabetLetters=language==="Serbian"?["ALL","A","B","C","Č","Ć","D","DŽ","Đ","E","F","G","H","I","J","K","L","LJ","M","N","NJ","O","P","R","S","Š","T","U","V","Z","Ž"]:["ALL",..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
 const matchesVocabLetter=(word,letter)=>{
  const upper=word.toLocaleUpperCase();
  if(letter==="ALL")return true;
  if(letter==="D")return upper.startsWith("D")&&!upper.startsWith("DŽ");
  if(letter==="L")return upper.startsWith("L")&&!upper.startsWith("LJ");
  if(letter==="N")return upper.startsWith("N")&&!upper.startsWith("NJ");
  return upper.startsWith(letter);
 };
 const filteredVocabulary=vocabularyEntries.filter(item=>(!showFavoritesOnly||favoriteWords.includes(item.word))&&matchesVocabLetter(item.word,vocabLetter)&&(!vocabSearch.trim()||(item.word+" "+item.meaning+" "+item.reading).toLocaleLowerCase().includes(vocabSearch.trim().toLocaleLowerCase())));
 const toggleFavorite=word=>setFavoriteWords(items=>items.includes(word)?items.filter(item=>item!==word):[...items,word]);

 const count=language?learned[language].length:0,percent=language?Math.round(count/words.length*100):0;
 const dialogs=language?speakingPractice[language]:[],dialog=dialogs[dialogIndex%dialogs.length];
 const title=useMemo(()=>({home:"ආයුබෝවන්!",learn:"පාඩම්",vocabulary:"වචන පොත",progress:"ඔබේ ප්‍රගතිය",teacher:"AI ගුරුතුමා",speak:"කතා පුහුණුව",translate:"සිංහල → Serbian පරිවර්තකය"})[tab],[tab]);
 const choose=lang=>{setLanguage(lang);setIndex(0);setTab("home");};
 const next=()=>setIndex(v=>(v+1)%words.length);
 const mark=()=>{setLearned(v=>({...v,[language]:v[language].includes(current.word)?v[language]:[...v[language],current.word]}));next();};
 const copySerbianTranslation=async()=>{if(!translateOutput)return;try{await Clipboard.setStringAsync(translateOutput);setTranslateCopied(true);}catch(error){setTranslateError("Copy කරන්න බැරි වුණා.");}};
 const translateSinhalaToSerbian=async()=>{const source=translateInput.trim();if(!source||translateLoading)return;setTranslateLoading(true);setTranslateError("");setTranslateOutput("");try{const url="https://api.mymemory.translated.net/get?q="+encodeURIComponent(source)+"&langpair=si|sr";const response=await fetch(url);if(!response.ok)throw new Error("සේවාවට සම්බන්ධ වීමට නොහැකි වුණා.");const data=await response.json();const result=data?.responseData?.translatedText;if(data?.responseStatus!==200||!result||result.toLowerCase().includes("invalid source"))throw new Error("මේ වාක්‍යය පරිවර්තනය කරන්න බැරි වුණා. වෙනත් විදිහකට ලියලා බලන්න.");setTranslateOutput(result);setTranslateHistory(items=>[{source,result,createdAt:Date.now()},...items.filter(item=>item.source!==source)].slice(0,12));setTranslateCopied(false);}catch(error){setTranslateError(error.message||"පරිවර්තනය අසාර්ථකයි. Internet connection එක පරීක්ෂා කරන්න.");}finally{setTranslateLoading(false);}};
 return <ThemeContext.Provider value={{styles:s,colors:C}}><SafeAreaView style={s.safe}><StatusBar barStyle={theme==="dark"?"light-content":"dark-content"} backgroundColor={C.bg}/>
 <View style={s.header}><View><Text style={s.brand}>Basa<Text style={{color:C.gold}}>Nova</Text></Text><Text style={s.tagline}>ඔබේ පුද්ගලික භාෂා ඉගෙනුම් මිතුරා</Text></View><TouchableOpacity onPress={()=>setTheme(v=>v==="dark"?"light":"dark")} style={s.themeToggle}><Text style={s.themeToggleText}>{theme==="dark"?"☀️ Light":"🌙 Dark"}</Text></TouchableOpacity></View>
 {!language?<ScrollView removeClippedSubviews={true} showsVerticalScrollIndicator={false} overScrollMode="never" contentContainerStyle={s.content}>
  <Text style={s.greeting}>ඔබ ඉගෙනගන්න කැමති භාෂාව තෝරන්න</Text><Text style={s.sub}>එක් වරකට එක් භාෂාවක් පමණක් ඉගෙනගමු. ඔබ තෝරන පාඨමාලාව වෙනම ප්‍රගතියක් සමඟ පවත්වාගෙන යන්න පුළුවන්.</Text>
  <TouchableOpacity style={s.course} onPress={()=>choose("Serbian")}><Text style={s.flag}>🇷🇸</Text><View style={{flex:1}}><Text style={s.courseTitle}>Serbian</Text><Text style={s.sub}>සිංහලෙන් Serbian භාෂාව මුල සිට ඉගෙනගන්න</Text><Text style={s.level}>BEGINNER → ADVANCED</Text></View><Text style={s.arrow}>›</Text></TouchableOpacity>
  <TouchableOpacity style={s.course} onPress={()=>choose("English")}><Text style={s.flag}>🇬🇧</Text><View style={{flex:1}}><Text style={s.courseTitle}>English</Text><Text style={s.sub}>සිංහලෙන් English භාෂාව මුල සිට ඉගෙනගන්න</Text><Text style={s.level}>BEGINNER → ADVANCED</Text></View><Text style={s.arrow}>›</Text></TouchableOpacity>
  <View style={s.note}><Text style={s.noteTitle}>ඔබට කැමති වෙලාවක පාඨමාලාව මාරු කළ හැකියි</Text><Text style={s.sub}>Serbian පාඩමක් අතරතුර English වචන මිශ්‍ර කරන්නේ නැහැ. භාෂා දෙකේම පාඩම් සහ ප්‍රගතිය වෙන වෙනමයි.</Text></View>
  <Text style={s.footer}>Created by Madhuranga Yasanath</Text>
 </ScrollView>:<>
  <View style={s.courseBar}><Text style={s.courseBarText}>{language==="Serbian"?"🇷🇸":"🇬🇧"}  {language} COURSE</Text><TouchableOpacity onPress={()=>{setLanguage(null);setTab("home");}}><Text style={s.switch}>භාෂාව මාරු කරන්න ↗</Text></TouchableOpacity></View>
  <ScrollView removeClippedSubviews={true} showsVerticalScrollIndicator={false} overScrollMode="never" contentContainerStyle={s.content}>
   <Text style={s.greeting}>{title}</Text><Text style={s.sub}>{language} භාෂාව පමණක් ඉගෙනගන්න ඔබේ වෙනම පාඨමාලාව.</Text>
   {tab==="home"&&<><View style={s.missionPanel}><View style={s.missionTop}><Text style={s.cardTitle}>🎯 අද දවසේ පුහුණු අභියෝග</Text><Text style={s.xp}>⭐ {xp} XP</Text></View><Text style={s.sub}>කුඩා ඉලක්ක තුනක් සම්පූර්ණ කරලා අද ඉගෙනීම ජයගන්න!</Text>{MISSIONS.map((m,i)=><TouchableOpacity key={m} onPress={()=>completeMission(i)} style={s.missionRow}><Text style={s.missionCheck}>{missionDone.includes(i)?"✅":missionIcons[i]}</Text><Text style={[s.missionText,missionDone.includes(i)&&s.missionDone]}>{m}</Text><Text style={s.missionXp}>+10 XP</Text></TouchableOpacity>)}<View style={s.track}><View style={[s.fill,{width:(missionDone.length/3*100)+"%"}]}/></View><Text style={s.sub}>{missionDone.length}/3 අභියෝග සම්පූර්ණයි · {missionDone.length===3?"අද දවසේ ඉලක්කය ජයගත්තා! 🎉":"ඉදිරියට යමු!"}</Text></View><View style={s.hero}><Text style={s.eyebrow}>🌍 YOUR {language.toUpperCase()} JOURNEY</Text><Text style={s.heroTitle}>පියවරෙන් පියවර{"\n"}භාෂාව ප්‍රගුණ කරමු.</Text><Text style={s.sub}>ප්‍රධාන අරමුණ සැබෑ ජීවිතයේ විශ්වාසයෙන් කතා කිරීමයි. වචන සහ අකුරු ටික ටික ඉගෙනගමු.</Text><Action onPress={()=>setTab("speak")}>කතා පුහුණුව පටන් ගන්න →</Action><Action secondary onPress={()=>setTab("learn")}>වචන පාඩම් බලන්න</Action>{language==="Serbian"&&<TouchableOpacity onPress={()=>setTab("alphabet")}><Text style={s.link}>අකුරු මූලිකව බලන්න (අමතර පාඩමක්) →</Text></TouchableOpacity> }</View><View style={s.stats}><View style={s.stat}><Text style={s.statNum}>📚 {count}/{words.length}</Text><Text style={s.sub}>ඉගෙනගත් වචන</Text></View><View style={s.stat}><Text style={s.statNum}>📈 {percent}%</Text><Text style={s.sub}>ප්‍රගතිය</Text></View></View><TouchableOpacity style={s.teacher} onPress={()=>setTab("teacher")}><Text style={{fontSize:25}}>🤖</Text><View style={{flex:1}}><Text style={s.cardTitle}>🤖 AI ගුරුතුමා</Text><Text style={s.sub}>ඔබේ මට්ටමට ගැළපෙන පුහුණුව</Text></View><Text style={s.arrow}>›</Text></TouchableOpacity></>}
   {tab==="vocabulary"&&<View style={s.panel}>
    <Text style={s.eyebrow}>📖 BASANOVA · VOCABULARY LIBRARY</Text>
    <Text style={s.cardTitle}>{language==="Serbian"?"🇷🇸 Serbian":"🇬🇧 English"} වචන පොත</Text>
    <Text style={s.sub}>පාඩම්, සංවාද සහ සියලු vocabulary packs එකතු කළ සම්පූර්ණ වචන පොත. English සඳහා A–Z අකුරුත් Serbian සඳහා සම්පූර්ණ ලතින් අක්ෂර මාලාවත් අනුව වචන සොයන්න. සෑම වචනයකටම සිංහල තේරුම, උච්චාරණය සහ හඬ පාලකය ඇත.</Text>
    <TouchableOpacity accessibilityRole="button" accessibilityLabel={showFavoritesOnly?"සියලු වචන වෙත යන්න":"සුරැකි වචන පමණක් පෙන්වන්න"} onPress={()=>{setShowFavoritesOnly(v=>!v);setVocabLetter("ALL");setVocabSearch("");}} style={[s.action,{backgroundColor:showFavoritesOnly?C.gold:C.panel2,borderWidth:1,borderColor:C.line}]}><Text style={[s.actionText,{color:showFavoritesOnly?C.bg:C.teal}]}>★ {showFavoritesOnly?"සියලු වචන බලන්න":"සුරැකි වචන බලන්න"} · {favoriteWords.length}</Text></TouchableOpacity>
    <View style={s.vocabSummary}><Text style={s.vocabCount}>{filteredVocabulary.length}</Text><Text style={s.sub}>පෙන්වන වචන / වාක්‍ය · මුළු එකතුව {vocabularyEntries.length}</Text></View>
    <TextInput value={vocabSearch} onChangeText={setVocabSearch} placeholder="වචනයක්, තේරුමක් හෝ උච්චාරණයක් සොයන්න..." placeholderTextColor={C.muted} style={s.vocabSearch}/>
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{gap:7,paddingVertical:12}}>
     {alphabetLetters.map(letter=><TouchableOpacity key={letter} onPress={()=>setVocabLetter(letter)} style={[s.vocabLetter,vocabLetter===letter&&s.vocabLetterActive]}><Text style={[s.vocabLetterText,vocabLetter===letter&&s.vocabLetterTextActive]}>{letter==="ALL"?"සියල්ල · "+vocabularyEntries.length:letter+" · "+vocabularyEntries.filter(item=>matchesVocabLetter(item.word,letter)).length}</Text></TouchableOpacity>)}
    </ScrollView>
    {filteredVocabulary.length===0?<Text style={s.sub}>{showFavoritesOnly?"තවම සුරැකි වචන නැහැ. ☆ බොත්තම ඔබලා වචන සුරකින්න.":"මේ අකුරෙන් හෝ සෙවුමට ගැළපෙන වචන හමු වුණේ නැහැ."}</Text>:filteredVocabulary.map((item,i)=><View key={item.word+"-"+i} style={s.vocabEntry}>
     <View style={s.vocabEntryTop}><Text style={s.vocabWord}>{item.word}</Text><TouchableOpacity accessibilityRole="button" accessibilityLabel={favoriteWords.includes(item.word)?"සුරැකි වචනවලින් ඉවත් කරන්න":"වචනය සුරකින්න"} onPress={()=>toggleFavorite(item.word)}><Text style={{fontSize:20,color:favoriteWords.includes(item.word)?C.gold:C.muted}}>{favoriteWords.includes(item.word)?"★":"☆"}</Text></TouchableOpacity><Text style={s.vocabSource}>{item.source}</Text></View>
     <Text style={s.sound}>සිංහල උච්චාරණය: {item.reading}</Text>
     <Text style={s.vocabMeaning}>{item.meaning}</Text>
     {!!item.example&&<View style={s.vocabExample}><Text style={s.vocabExampleText}>{item.example}</Text><Text style={s.sound}>උච්චාරණය: {item.exampleReading}</Text>{!!item.translation&&<Text style={s.sub}>තේරුම: {item.translation}</Text>}<TouchableOpacity accessibilityRole="button" accessibilityLabel="උදාහරණ වාක්‍යයේ හඬ අහන්න" onPress={()=>speak(item.example,language)}><Text style={s.link}>🔊 උදාහරණය අහන්න</Text></TouchableOpacity></View>}
     <TouchableOpacity accessibilityRole="button" accessibilityLabel={item.word+" හඬ අහන්න"} onPress={()=>speak(item.word,language)} style={s.vocabAudio}><Text style={s.link}>🔊 වචනය / වාක්‍යය අහන්න</Text></TouchableOpacity>
    </View>)}
   </View>}
   {tab==="learn"&&<>
    <View style={s.panel}><Text style={s.cardTitle}>📚 සාමාන්‍ය වචන / Slang & Bad Words</Text><Text style={s.sub}>අපහාසාත්මක වචන වෙනම ඉගෙනගන්න. ඒවායේ තේරුම දැනගැනීම සඳහා පමණයි; අන් අයට රිදවීමට භාවිත නොකරන්න.</Text><View style={{flexDirection:"row",gap:8}}><TouchableOpacity onPress={()=>setShowSlang(false)} style={[s.action,{flex:1,opacity:showSlang?0.65:1}]}><Text style={s.actionText}>සාමාන්‍ය පාඩම්</Text></TouchableOpacity><TouchableOpacity onPress={()=>setShowSlang(true)} style={[s.action,{flex:1,opacity:showSlang?1:0.65}]}><Text style={s.actionText}>Slang / Bad Words</Text></TouchableOpacity></View></View>
    {showSlang?<View style={s.panel}><Text style={s.eyebrow}>LANGUAGE IN CONTEXT · {language.toUpperCase()}</Text><Text style={s.cardTitle}>⚠️ Slang සහ අසභ්‍ය වචන</Text><Text style={s.sub}>මට්ටම: මෘදු = සැහැල්ලු, මධ්‍යම = අපහාසාත්මක විය හැක, තද = භාවිතයෙන් වළකින්න. උච්චාරණ සිංහලෙන් ආසන්නව පමණි.</Text>{SLANG_VOCAB[language].map((item,i)=><View key={item.word+"-"+i} style={s.lessonWord}><Text style={s.lessonSerbian}>{item.word}</Text><Text style={s.sound}>සිංහල උච්චාරණය: {item.sound}</Text><Text style={s.sub}>තේරුම: {item.meaning}</Text><Text style={s.lessonExample}>{item.example}</Text><Text style={s.sound}>උදාහරණයේ තේරුම: {item.translation}</Text><Text style={s.sub}>භාවිතයේ තදබලකම: {item.level}</Text><Text style={s.sub}>සටහන: {item.note}</Text><TouchableOpacity onPress={()=>speak(item.word,language)}><Text style={s.link}>🔊 හඬ අහන්න</Text></TouchableOpacity></View>)}</View>:<>

   {language==="Serbian"?<View style={s.panel}>
    <Text style={s.eyebrow}>SERBIAN · A1 · STRUCTURED LESSONS</Text>
    <Text style={s.cardTitle}>📘 A1 සැබෑ පාඩම්</Text>
    <Text style={s.sub}>වචන පමණක් නොව, ව්‍යාකරණය, උදාහරණ, සංවාද සහ කෙටි පරීක්ෂණ සමඟ පියවරෙන් පියවර ඉගෙනගන්න.</Text>
    {SERBIAN_A1_LESSONS.map((lesson,li)=>{
     const isExpanded=expandedLessonId===lesson.id;
     const checkedCount=lesson.practice.filter((q,qi)=>lessonChecked[lesson.id+"-"+qi]).length+(SERBIAN_A1_LISTENING[li]&&lessonChecked[lesson.id+"-listen"]?1:0);
     return <View key={lesson.id} style={s.lessonCard}>
      <TouchableOpacity activeOpacity={0.8} onPress={()=>setExpandedLessonId(isExpanded?null:lesson.id)} style={{paddingVertical:4}}>
       <Text style={s.eyebrow}>LESSON {lesson.title.match(/(?:පාඩම|Lesson)\s*(\d+)/)?.[1]||li+1} · A1 · {checkedCount}/{lesson.practice.length+(SERBIAN_A1_LISTENING[li]?1:0)} ප්‍රශ්න පරීක්ෂා කරලා</Text>
       <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}><View style={{flex:1,paddingRight:10}}><Text style={s.cardTitle}>{lesson.title}</Text><Text style={s.sub}>අරමුණ: {lesson.objective}</Text></View><Text style={s.cardTitle}>{isExpanded?"⌃":"⌄"}</Text></View>
       <Text style={s.link}>{isExpanded?"පාඩම හකුළන්න":"පාඩම විවෘත කරන්න · වචන, ව්‍යාකරණ, සංවාද සහ ප්‍රශ්න"}</Text>
      </TouchableOpacity>
      {isExpanded&&<View>

     <Text style={s.lessonHeading}>📚 නව වචන සහ වාක්‍ය</Text>
     {lesson.vocabulary.map(item=><View key={item.word} style={s.lessonWord}>
      <Text style={s.lessonSerbian}>{item.word}</Text>
      <Text style={s.sound}>සිංහලෙන්: {item.reading||pronounceSinhala(item.word)}</Text>
      <Text style={s.sub}>{item.meaning}</Text>
      <Text style={s.lessonExample}>{item.example}</Text>
      <Text style={s.sound}>උදාහරණයේ සිංහල උච්චාරණය: {item.exampleReading||pronounceSinhala(item.example)}</Text>
      <Text style={s.sub}>{item.translation}</Text>
      <View style={{flexDirection:"row",gap:10,flexWrap:"wrap"}}>
       <TouchableOpacity accessibilityRole="button" accessibilityLabel={item.word+" උච්චාරණය අහන්න"} onPress={()=>speak(item.word,"Serbian")}><Text style={s.link}>🔊 වචනය අහන්න</Text></TouchableOpacity>
       <TouchableOpacity accessibilityRole="button" accessibilityLabel="උදාහරණ වාක්‍යය අහන්න" onPress={()=>speak(item.example,"Serbian")}><Text style={s.link}>🔊 උදාහරණය අහන්න</Text></TouchableOpacity>
      </View>
     </View>)}
     <Text style={s.lessonHeading}>🧠 {lesson.grammarTitle}</Text>
     <Text style={s.sub}>{lesson.grammar}</Text>
     {(lesson.grammar.match(/[“"]([^”"]+)[”"]/g)||[]).map((quoted,qi)=>{const phrase=quoted.slice(1,-1);return /[A-Za-zČĆĐŠŽčćđšž]/.test(phrase)?<View key={lesson.id+"-grammar-audio-"+qi} style={s.dialogueLine}><View style={{flex:1}}><Text style={s.lessonSerbian}>{phrase}</Text><Text style={s.sound}>සිංහල අකුරෙන් උච්චාරණය: {pronounceSinhala(phrase)}</Text></View><TouchableOpacity accessibilityRole="button" accessibilityLabel={phrase+" හඬ අහන්න"} onPress={()=>speak(phrase,"Serbian")}><Text style={s.link}>🔊</Text></TouchableOpacity></View>:null;})}
     {lesson.grammarTerms?.map(term=><View key={lesson.id+"-grammar-"+term.sr} style={s.example}>
      <Text style={s.lessonSerbian}>{term.sr}</Text>
      <Text style={s.sound}>සිංහල අකුරෙන්: {term.reading}</Text>
      <Text style={s.sub}>{term.si}</Text>
      <TouchableOpacity accessibilityRole="button" accessibilityLabel={term.sr+" හඬ අහන්න"} onPress={()=>speak(term.sr,"Serbian")}><Text style={s.link}>🔊 මේ වාක්‍ය කොටස අහන්න</Text></TouchableOpacity>
     </View>)}
     {lesson.examples.map(ex=><View key={ex.sr} style={s.example}>
      <Text style={s.lessonSerbian}>{ex.sr}</Text>
      <Text style={s.sound}>සිංහල අකුරෙන් උච්චාරණය: {ex.reading||pronounceSinhala(ex.sr)}</Text>
      <Text style={s.sub}>{ex.si}</Text>
      <TouchableOpacity onPress={()=>speak(ex.sr,"Serbian")}><Text style={s.link}>▶ උදාහරණය අහන්න</Text></TouchableOpacity>
     </View>)}
     <Text style={s.lessonHeading}>🗣️ කෙටි සංවාදය</Text>
     {lesson.dialogue.map((line,i)=><View key={lesson.id+"-d-"+i} style={s.dialogueLine}>
      <View style={{flex:1}}>
       <Text style={s.lessonSerbian}>{line.sr}</Text>
       <Text style={s.sound}>සිංහල අකුරෙන් උච්චාරණය: {line.reading||pronounceSinhala(line.sr)}</Text>
       <Text style={s.sub}>{line.si}</Text>
      </View>
      <TouchableOpacity onPress={()=>speak(line.sr,"Serbian")}><Text style={s.link}>🔊</Text></TouchableOpacity>
     </View>)}
     <Text style={s.lessonHeading}>✍️ දැනුම පරීක්ෂා කරමු</Text>
     {lesson.practice.map((q,qi)=>{
      const key=lesson.id+"-"+qi;
      const selected=lessonAnswers[key];
      const checked=lessonChecked[key];
      return <View key={key} style={s.quizCard}>
       <Text style={s.sub}>{qi+1}. {q.prompt}</Text>
       {q.options.map((option,oi)=><View key={option} style={{flexDirection:"row",alignItems:"center",gap:8}}>
        <TouchableOpacity disabled={!!checked} onPress={()=>setLessonAnswers(v=>({...v,[key]:oi}))} style={[s.quizOption,{flex:1},selected===oi&&s.quizSelected,checked&&oi===q.answer&&s.quizCorrect,checked&&selected===oi&&selected!==q.answer&&s.quizWrong]}>
         <View style={{flex:1}}><Text style={s.quizOptionText}>{String.fromCharCode(65+oi)}. {option}</Text>{/[A-Za-zČĆĐŠŽčćđšž]/.test(option)&&<Text style={s.sound}>සිංහල අකුරෙන් උච්චාරණය: {pronounceSinhala(option)}</Text>}</View>
        </TouchableOpacity>
        {/[A-Za-zČĆĐŠŽčćđšž]/.test(option)&&<TouchableOpacity accessibilityRole="button" accessibilityLabel="පිළිතුරේ උච්චාරණය අහන්න" onPress={()=>speak(option,"Serbian")} style={{padding:8}}><Text style={s.link}>🔊</Text></TouchableOpacity>}
       </View>)}
       {checked?<><Text style={s.sub}>{selected===q.answer?"නිවැරදියි! ✓ ":"නැවත පුහුණු වෙමු. "}{q.explanation}</Text>{(q.explanation.match(/[“"]([^”"]+)[”"]/g)||[]).map((quoted,ei)=>{const phrase=quoted.slice(1,-1);return /[A-Za-zČĆĐŠŽčćđšž]/.test(phrase)?<View key={key+"-explain-audio-"+ei} style={s.dialogueLine}><Text style={[s.lessonSerbian,{flex:1}]}>{phrase}</Text><TouchableOpacity accessibilityRole="button" accessibilityLabel={phrase+" හඬ අහන්න"} onPress={()=>speak(phrase,"Serbian")}><Text style={s.link}>🔊</Text></TouchableOpacity></View>:null;})}</>:<TouchableOpacity disabled={selected===undefined} onPress={()=>setLessonChecked(v=>({...v,[key]:true}))} style={[s.action,selected===undefined&&{opacity:0.45}]}><Text style={s.actionText}>පිළිතුර පරීක්ෂා කරන්න</Text></TouchableOpacity>}
      </View>;
     })}
      </View>}
     </View>;
    })}
    <View style={s.quizCard}>
     <Text style={s.lessonHeading}>🎧 Serbian A1 · එක් එක් පාඩමේ සවන් දීම</Text>
     <Text style={s.sub}>දැනට ඇතුළත් කර ඇති පාඩම්වලින් Serbian හඬ අහලා නිවැරදි සිංහල අර්ථය තෝරන්න. අවශ්‍ය නම් වාක්‍යය සහ පිළිතුරු නැවත අහන්න.</Text>
     {SERBIAN_A1_LESSONS.map((lesson,li)=>{
      const q=SERBIAN_A1_LISTENING[li];if(!q)return null;
      const key=lesson.id+"-listen";const selected=lessonAnswers[key];const checked=lessonChecked[key];
      return <View key={key} style={s.quizCard}>
       <Text style={s.eyebrow}>LESSON {li+1} · {lesson.title}</Text>
       <Text style={s.sub}>{q.prompt}</Text>
       <TouchableOpacity onPress={()=>speak(q.audio,"Serbian")} style={s.action}><Text style={s.actionText}>🔊 Serbian වාක්‍යය නැවත අහන්න</Text></TouchableOpacity>
       {q.options.map((option,oi)=><View key={option} style={{flexDirection:"row",alignItems:"center",gap:7}}>
        <TouchableOpacity disabled={!!checked} onPress={()=>setLessonAnswers(v=>({...v,[key]:oi}))} style={[s.quizOption,{flex:1},selected===oi&&s.quizSelected,checked&&oi===q.answer&&s.quizCorrect,checked&&selected===oi&&selected!==q.answer&&s.quizWrong]}>
         <Text style={s.quizOptionText}>{String.fromCharCode(65+oi)}. {option}</Text>
         {checked&&<Text style={s.sound}>Serbian උච්චාරණය: {q.readings[oi]}</Text>}
        </TouchableOpacity>
        <TouchableOpacity accessibilityRole="button" accessibilityLabel="Serbian පිළිතුර අහන්න" onPress={()=>speak(option,"Serbian")} style={{padding:7}}><Text style={s.link}>🔊</Text></TouchableOpacity>
       </View>)}
       {checked?<Text style={s.sub}>{selected===q.answer?"නිවැරදියි! ✓ ":"නැවත අහලා උත්සාහ කරමු. "}{q.meaning}</Text>:<TouchableOpacity disabled={selected===undefined} onPress={()=>setLessonChecked(v=>({...v,[key]:true}))} style={[s.action,selected===undefined&&{opacity:0.45}]}><Text style={s.actionText}>පිළිතුර පරීක්ෂා කරන්න</Text></TouchableOpacity>}
      </View>;
     })}
    </View>
    <View style={s.quizCard}>
     <Text style={s.lessonHeading}>🏆 Serbian A1 · සම්පූර්ණ කළ පාඩම්වල මිශ්‍ර නැවත පුහුණුව</Text>
     <Text style={s.sub}>සියලු පාඩම්වලින් තෝරාගත් වාක්‍ය අහන්න. සිංහල අකුරෙන් කියන විදිහ බලලා, නිවැරදි තේරුම තෝරන්න.</Text>
     {SERBIAN_A1_MIXED_REVISION.map((q,qi)=>{
      const key="serbian-a1-mixed-"+qi;const selected=lessonAnswers[key];const checked=lessonChecked[key];
      return <View key={key} style={s.quizCard}>
       <Text style={s.sub}>{qi+1}. හඬ අසා නිවැරදි අර්ථය තෝරන්න</Text>
       <Text style={s.lessonSerbian}>{q.audio}</Text>
       <Text style={s.sound}>සිංහල අකුරෙන් උච්චාරණය: {q.reading}</Text>
       <TouchableOpacity onPress={()=>speak(q.audio,"Serbian")} style={s.action}><Text style={s.actionText}>🔊 නැවත අහන්න</Text></TouchableOpacity>
       {q.options.map((option,oi)=><View key={option} style={{flexDirection:"row",alignItems:"center",gap:7}}>
        <TouchableOpacity disabled={!!checked} onPress={()=>setLessonAnswers(v=>({...v,[key]:oi}))} style={[s.quizOption,{flex:1},selected===oi&&s.quizSelected,checked&&oi===q.answer&&s.quizCorrect,checked&&selected===oi&&selected!==q.answer&&s.quizWrong]}>
         <Text style={s.quizOptionText}>{String.fromCharCode(65+oi)}. {option}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>speak(option,"Serbian")} style={{padding:7}}><Text style={s.link}>🔊</Text></TouchableOpacity>
       </View>)}
       {checked?<Text style={s.sub}>{selected===q.answer?"නිවැරදියි! ✓ ":"නැවත පුහුණු වෙමු. "}{q.options[q.answer]}</Text>:<TouchableOpacity disabled={selected===undefined} onPress={()=>setLessonChecked(v=>({...v,[key]:true}))} style={[s.action,selected===undefined&&{opacity:0.45}]}><Text style={s.actionText}>පිළිතුර පරීක්ෂා කරන්න</Text></TouchableOpacity>}
      </View>;
     })}
     <Text style={s.sub}>මෙම listening සහ revision පිළිතුරු ඔබගේ දුරකථනයේ ස්වයංක්‍රීයව සුරැකේ.</Text>
    </View>
    </View>:<View style={s.panel}>
    <Text style={s.eyebrow}>ENGLISH · A1 · STRUCTURED LESSONS</Text>
    <Text style={s.cardTitle}>📘 English A1 සැබෑ පාඩම්</Text>
    <Text style={s.sub}>සෑම ඉංග්‍රීසි වචනයකටම සහ වාක්‍යයකටම සිංහල අකුරෙන් උච්චාරණය, සිංහල තේරුම සහ වෙනම හඬ පාලකය ඇතුළත්.</Text>
    {ENGLISH_A1_LESSONS.map((lesson,li)=>{
     const isExpanded=expandedLessonId===lesson.id;
     const checkedCount=lesson.practice.filter((q,qi)=>lessonChecked[lesson.id+"-"+qi]).length+(lesson.listeningPractice&&lessonChecked[lesson.id+"-listen"]?1:0);
     return <View key={lesson.id} style={s.lessonCard}>
      <TouchableOpacity activeOpacity={0.8} onPress={()=>setExpandedLessonId(isExpanded?null:lesson.id)} style={{paddingVertical:4}}>
       <Text style={s.eyebrow}>LESSON {lesson.title.match(/(?:පාඩම|Lesson)\s*(\d+)/)?.[1]||li+1} · A1 · {checkedCount}/{lesson.practice.length+(lesson.listeningPractice?1:0)} ප්‍රශ්න පරීක්ෂා කරලා</Text>
       <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}><View style={{flex:1,paddingRight:10}}><Text style={s.cardTitle}>{lesson.title}</Text><Text style={s.sub}>අරමුණ: {lesson.objective}</Text></View><Text style={s.cardTitle}>{isExpanded?"⌃":"⌄"}</Text></View>
       <Text style={s.link}>{isExpanded?"පාඩම හකුළන්න":"පාඩම විවෘත කරන්න · වචන, ව්‍යාකරණ, සංවාද සහ ප්‍රශ්න"}</Text>
      </TouchableOpacity>
      {isExpanded&&<View>
       <Text style={s.lessonHeading}>📚 නව වචන සහ වාක්‍ය</Text>
       {lesson.vocabulary.map(item=><View key={item.word} style={s.lessonWord}>
        <Text style={s.lessonSerbian}>{item.word}</Text><Text style={s.sound}>සිංහල අකුරෙන්: {item.reading}</Text><Text style={s.sub}>{item.meaning}</Text>
        <Text style={s.lessonExample}>{item.example}</Text><Text style={s.sound}>උදාහරණයේ උච්චාරණය: {item.exampleReading}</Text><Text style={s.sub}>{item.translation}</Text>
        <View style={{flexDirection:"row",gap:12,flexWrap:"wrap"}}><TouchableOpacity accessibilityRole="button" onPress={()=>speak(item.word,"English")}><Text style={s.link}>🔊 වචනය අහන්න</Text></TouchableOpacity><TouchableOpacity accessibilityRole="button" onPress={()=>speak(item.example,"English")}><Text style={s.link}>🔊 උදාහරණය අහන්න</Text></TouchableOpacity></View>
       </View>)}
       <Text style={s.lessonHeading}>🧠 {lesson.grammarTitle}</Text><Text style={s.sub}>{lesson.grammar}</Text>
       {lesson.grammarTerms.map(term=><View key={term.text} style={s.example}><Text style={s.lessonSerbian}>{term.text}</Text><Text style={s.sound}>සිංහල අකුරෙන්: {term.reading}</Text><Text style={s.sub}>{term.meaning}</Text><TouchableOpacity onPress={()=>speak(term.text,"English")}><Text style={s.link}>🔊 අහන්න</Text></TouchableOpacity></View>)}
       <Text style={s.lessonHeading}>💬 උදාහරණ</Text>
       {lesson.examples.map(ex=><View key={ex.text} style={s.example}><Text style={s.lessonSerbian}>{ex.text}</Text><Text style={s.sound}>සිංහල අකුරෙන්: {ex.reading}</Text><Text style={s.sub}>{ex.meaning}</Text><TouchableOpacity onPress={()=>speak(ex.text,"English")}><Text style={s.link}>🔊 වාක්‍යය අහන්න</Text></TouchableOpacity></View>)}
       <Text style={s.lessonHeading}>🗣️ කෙටි සංවාදය</Text>
       {lesson.dialogue.map((line,i)=><View key={lesson.id+"-d-"+i} style={s.dialogueLine}><View style={{flex:1}}><Text style={s.lessonSerbian}>{line.text}</Text><Text style={s.sound}>සිංහල අකුරෙන්: {line.reading}</Text><Text style={s.sub}>{line.meaning}</Text></View><TouchableOpacity onPress={()=>speak(line.text,"English")}><Text style={s.link}>🔊</Text></TouchableOpacity></View>)}
       <Text style={s.lessonHeading}>✍️ දැනුම පරීක්ෂා කරමු</Text>
       {lesson.practice.map((q,qi)=>{const key=lesson.id+"-"+qi;const selected=lessonAnswers[key];const checked=lessonChecked[key];return <View key={key} style={s.quizCard}><Text style={s.sub}>{qi+1}. {q.prompt}</Text>{q.options.map((option,oi)=><View key={option} style={{flexDirection:"row",alignItems:"center",gap:8}}><TouchableOpacity disabled={!!checked} onPress={()=>setLessonAnswers(v=>({...v,[key]:oi}))} style={[s.quizOption,{flex:1},selected===oi&&s.quizSelected,checked&&oi===q.answer&&s.quizCorrect,checked&&selected===oi&&selected!==q.answer&&s.quizWrong]}><Text style={s.quizOptionText}>{String.fromCharCode(65+oi)}. {option}</Text></TouchableOpacity><TouchableOpacity onPress={()=>speak(option,"English")} style={{padding:8}}><Text style={s.link}>🔊</Text></TouchableOpacity></View>)}{checked?<Text style={s.sub}>{selected===q.answer?"නිවැරදියි! ✓ ":"නැවත පුහුණු වෙමු. "}{q.explanation}</Text>:<TouchableOpacity disabled={selected===undefined} onPress={()=>setLessonChecked(v=>({...v,[key]:true}))} style={[s.action,selected===undefined&&{opacity:0.45}]}><Text style={s.actionText}>පිළිතුර පරීක්ෂා කරන්න</Text></TouchableOpacity>}</View>})}
       {lesson.listeningPractice&&<View style={s.quizCard}>
        <Text style={s.lessonHeading}>🎧 අසා හඳුනාගනිමු</Text>
        <Text style={s.sub}>{lesson.listeningPractice.prompt}</Text>
        <TouchableOpacity accessibilityRole="button" onPress={()=>speak(lesson.listeningPractice.audio,"English")} style={s.action}><Text style={s.actionText}>🔊 වාක්‍යය නැවත අහන්න</Text></TouchableOpacity>
        {lesson.listeningPractice.options.map((option,oi)=>{
         const key=lesson.id+"-listen";const selected=lessonAnswers[key];const checked=lessonChecked[key];
         return <TouchableOpacity key={option} disabled={!!checked} onPress={()=>setLessonAnswers(v=>({...v,[key]:oi}))} style={[s.quizOption,selected===oi&&s.quizSelected,checked&&oi===lesson.listeningPractice.answer&&s.quizCorrect,checked&&selected===oi&&selected!==lesson.listeningPractice.answer&&s.quizWrong]}>
          <Text style={s.quizOptionText}>{String.fromCharCode(65+oi)}. {option}</Text>
          {checked&&<Text style={s.sound}>ඉංග්‍රීසි උච්චාරණය: {lesson.listeningPractice.readings[oi]}</Text>}
         </TouchableOpacity>;
        })}
        {lessonChecked[lesson.id+"-listen"]?<Text style={s.sub}>{lessonAnswers[lesson.id+"-listen"]===lesson.listeningPractice.answer?"නිවැරදියි! ✓ ":"නැවත අහලා උත්සාහ කරමු. "}{lesson.listeningPractice.meaning}</Text>:<TouchableOpacity disabled={lessonAnswers[lesson.id+"-listen"]===undefined} onPress={()=>setLessonChecked(v=>({...v,[lesson.id+"-listen"]:true}))} style={[s.action,lessonAnswers[lesson.id+"-listen"]===undefined&&{opacity:0.45}]}><Text style={s.actionText}>පිළිතුර පරීක්ෂා කරන්න</Text></TouchableOpacity>}
       </View>}
      </View>}
     </View>;
    })}
    <View style={s.quizCard}>
     <Text style={s.lessonHeading}>🏆 English A1 · සම්පූර්ණ කළ පාඩම්වල මිශ්‍ර නැවත පුහුණුව</Text>
     <Text style={s.sub}>A1 පාඩම්වලින් තෝරාගත් වාක්‍යවල මිශ්‍ර පුහුණුව. ඉංග්‍රීසි වාක්‍යය අහලා නිවැරදි සිංහල තේරුම තෝරන්න.</Text>
     {[
      {audio:"Good morning. My name is Anna.",reading:"ගුඩ් මෝර්නිං. මයි නේම් ඉස් ඇනා.",answer:0,options:["සුබ උදෑසනක්. මගේ නම ආනා.","සුබ රාත්‍රියක්. මම හොඳින්.","මට කෝපි එකක් ඕනේ."]},
      {audio:"I am fine, thank you.",reading:"අයි ඇම් ෆයින්, තෑන්ක් යූ.",answer:1,options:["මට උදව් කරන්න පුළුවන්ද?","මම හොඳින්, ස්තුතියි.","මගේ වැඩ මුරය අටට පටන් ගන්නවා."]},
      {audio:"What time is it?",reading:"වොට් ටයිම් ඉස් ඉට්?",answer:2,options:["මේකේ මිල කීයද?","ඔබට කොහොමද?","දැන් වෙලාව කීයද?"]},
      {audio:"How much is this?",reading:"හවු මච් ඉස් දිස්?",answer:0,options:["මේකේ මිල කීයද?","දුම්රිය ස්ථානය කොහෙද?","මට වතුර එකක් ඕනේ."]},
      {audio:"Turn left at the station.",reading:"ටර්න් ලෙෆ්ට් ඇට් ද ස්ටේෂන්.",answer:1,options:["දුම්රිය ස්ථානයේදී දකුණට හැරෙන්න.","දුම්රිය ස්ථානයේදී වමට හැරෙන්න.","කෙළින්ම ගෙදර යන්න."]},
      {audio:"Can you help me?",reading:"කැන් යූ හෙල්ප් මී?",answer:2,options:["මම මෙතැනට අලුත්.","මට තේරෙන්නේ නැහැ.","ඔබට මට උදව් කරන්න පුළුවන්ද?"]},
      {audio:"Is breakfast included?",reading:"ඉස් බ්‍රෙක්ෆස්ට් ඉන්ක්ලූඩිඩ්?",answer:1,options:["කාමරයේ යතුර කොහෙද?","උදෑසන ආහාරය ඇතුළත්ද?","එක් රාත්‍රියකට කීයද?"]}
      ,{audio:"The meeting is tomorrow at ten.",reading:"ද මීටින් ඉස් ටුමාරෝ ඇට් ටෙන්.",answer:1,options:["හමුවීම අද දහයට.","හමුවීම හෙට දහයට.","හමුවීම ඊයේ දහයට."]}
      ,{audio:"I work from nine to five.",reading:"අයි වර්ක් ෆ්‍රම් නයින් ටු ෆයිව්.",answer:0,options:["මම නවයේ සිට පහ දක්වා වැඩ කරනවා.","මම හතට නැගිටිනවා.","මම සවස විවේක ගන්නවා."]}

      ,{audio:"One ticket to Belgrade, please.",reading:"වන් ටික්ට් ටු බෙල්ග්‍රේඩ්, ප්ලීස්.",answer:0,options:["බෙල්ග්‍රේඩ් දක්වා ටිකට් එකක් දෙන්න, කරුණාකර.","වේදිකාව කොහෙද?","දුම්රිය ප්‍රමාදයි."]}
      ,{audio:"The book is on the table.",reading:"ද බුක් ඉස් ඔන් ද ටේබල්.",answer:1,options:["පොත කාමරයේ තියෙනවා.","පොත මේසය මත තියෙනවා.","පොත පුටුව යට තියෙනවා."]}
      ,{audio:"Sunday is my day off.",reading:"සන්ඩේ ඉස් මයි ඩේ ඕෆ්.",answer:2,options:["මම ඉරිදා උදේ වැඩ කරනවා.","ඉරිදා මගේ වැඩ මුරයයි.","ඉරිදා මගේ නිවාඩු දිනයයි."]}
      ,{audio:"I eat eggs and bread for breakfast.",reading:"අයි ඊට් එග්ස් ඇන්ඩ් බ්‍රෙඩ් ෆෝර් බ්‍රෙක්ෆස්ට්.",answer:1,options:["මම රාත්‍රී ආහාරයට සුප් බොනවා.","උදෑසනට මම බිත්තර සහ පාන් කනවා.","මම එළවළු මිලදී ගන්නවා."]}
      ,{audio:"I like to cook.",reading:"අයි ලයික් ටු කුක්.",answer:0,options:["මම උයන්න කැමතියි.","මම කෑම කන්නේ නැහැ.","මම වැඩට යනවා."]}
      ,{audio:"What is the weather like today?",reading:"වොට් ඉස් ද වෙදර් ලයික් ටුඩේ?",answer:2,options:["අද වෙලාව කීයද?","හෙට මොනවාද උයන්නේ?","අද කාලගුණය කොහොමද?"]}
      ,{audio:"Take an umbrella. It is raining.",reading:"ටේක් ඇන් අම්බ්‍රෙලා. ඉට් ඉස් රේනින්.",answer:1,options:["ජැකට්ටුවක් ගලවන්න. අව්වයි.","කුඩයක් රැගෙන යන්න. වැස්ස වැටෙනවා.","සපත්තු මිලදී ගන්න."]}
      ,{audio:"There are two rooms in my apartment.",reading:"දෙයාර් ආ ටූ රූම්ස් ඉන් මයි අපාර්ට්මන්ට්.",answer:0,options:["මගේ මහල් නිවාසයේ කාමර දෙකක් තියෙනවා.","මගේ නිවසේ පුටු දෙකක් තියෙනවා.","මගේ කාමරය කුඩායි."]}
      ,{audio:"My sister is a teacher.",reading:"මයි සිස්ටර් ඉස් අ ටීචර්.",answer:2,options:["මගේ සහෝදරයා රියදුරෙක්.","මගේ මව ගෙදර ඉන්නවා.","මගේ සහෝදරිය ගුරුවරියක්."]}
      ,{audio:"I am paying by card.",reading:"අයි ඇම් පේයිං බයි කාඩ්.",answer:0,options:["මම කාඩ්පතෙන් ගෙවනවා.","මට බෑගයක් ඕනේ.","මුළු එකතුව කීයද?"]}
      ,{audio:"It is not far.",reading:"ඉට් ඉස් නොට් ෆාර්.",answer:1,options:["එය ඉතා දුරයි.","එය දුර නැහැ.","වමට හැරෙන්න."]}
      ,{audio:"The floor is slippery.",reading:"දි ෆ්ලෝර් ඉස් ස්ලිපරි.",answer:2,options:["බිම වියළියි.","දොර වහන්න.","බිම ලිස්සන සුළුයි."]}

     ].map((q,qi)=>{
      const key="english-a1-mixed-"+qi;const selected=lessonAnswers[key];const checked=lessonChecked[key];
      return <View key={key} style={s.quizCard}>
       <Text style={s.sub}>{qi+1}. හඬ අසා නිවැරදි තේරුම තෝරන්න</Text>
       <Text style={s.lessonSerbian}>{q.audio}</Text>
       <Text style={s.sound}>සිංහල අකුරෙන්: {q.reading}</Text>
       <TouchableOpacity onPress={()=>speak(q.audio,"English")} style={s.action}><Text style={s.actionText}>🔊 නැවත අහන්න</Text></TouchableOpacity>
       {q.options.map((option,oi)=><TouchableOpacity key={option} disabled={!!checked} onPress={()=>setLessonAnswers(v=>({...v,[key]:oi}))} style={[s.quizOption,selected===oi&&s.quizSelected,checked&&oi===q.answer&&s.quizCorrect,checked&&selected===oi&&selected!==q.answer&&s.quizWrong]}>
        <Text style={s.quizOptionText}>{String.fromCharCode(65+oi)}. {option}</Text>
       </TouchableOpacity>)}
       {checked?<Text style={s.sub}>{selected===q.answer?"නිවැරදියි! ✓ ":"නැවත පුහුණු වෙමු. "}{q.options[q.answer]}</Text>:<TouchableOpacity disabled={selected===undefined} onPress={()=>setLessonChecked(v=>({...v,[key]:true}))} style={[s.action,selected===undefined&&{opacity:0.45}]}><Text style={s.actionText}>පිළිතුර පරීක්ෂා කරන්න</Text></TouchableOpacity>}
      </View>;
     })}
     <Text style={s.sub}>මෙම ප්‍රශ්නවල පිළිතුරු සහ ප්‍රගතිය ඔබගේ දුරකථනයේ ස්වයංක්‍රීයව සුරැකේ.</Text>
    </View>
   </View>}
   <View style={s.quizCard}>
    <Text style={s.lessonHeading}>🏆 {language} A1 · අවසාන පරීක්ෂණය</Text>
    <Text style={s.sub}>ප්‍රශ්න 20යි. එක් ප්‍රශ්නයකට ලකුණු 1යි. හඬ අසා සිංහල තේරුම තෝරන්න. 70% හෝ ඊට වැඩි ලකුණු ලබාගැනීම ඉලක්කයයි. කථන කොටස සඳහා අවසානයේ ඔබම හඬින් පිළිතුරු පුහුණු කරන්න; යෙදුම තවම කථනය ස්වයංක්‍රීයව ලකුණු කරන්නේ නැහැ.</Text>
    {(()=>{const exam=language==="Serbian"?SERBIAN_A1_FINAL_EXAM:ENGLISH_A1_FINAL_EXAM;const prefix=language.toLowerCase()+"-a1-final-";const done=exam.filter((q)=>lessonChecked[q.id]).length;const score=exam.filter(q=>lessonChecked[q.id]&&lessonAnswers[q.id]===q.answer).length;return <View>
     <Text style={s.sound}>සම්පූර්ණ කරලා: {done}/{exam.length} · ලකුණු: {score}/{exam.length}{done===exam.length?" · "+Math.round(score/exam.length*100)+"%":""}</Text>
     {exam.map((q,qi)=>{const selected=lessonAnswers[q.id];const checked=lessonChecked[q.id];return <View key={q.id} style={s.quizCard}>
      <Text style={s.sub}>{q.prompt}</Text><Text style={s.lessonSerbian}>{q.audio}</Text><Text style={s.sound}>සිංහල උච්චාරණය: {q.reading}</Text>
      <TouchableOpacity onPress={()=>speak(q.audio,language)} style={s.action}><Text style={s.actionText}>🔊 හඬ නැවත අහන්න</Text></TouchableOpacity>
      {q.options.map((option,oi)=><TouchableOpacity key={q.id+"-"+oi} disabled={!!checked} onPress={()=>setLessonAnswers(v=>({...v,[q.id]:oi}))} style={[s.quizOption,selected===oi&&s.quizSelected,checked&&oi===q.answer&&s.quizCorrect,checked&&selected===oi&&selected!==q.answer&&s.quizWrong]}><Text style={s.quizOptionText}>{String.fromCharCode(65+oi)}. {option}</Text></TouchableOpacity>)}
      {checked?<Text style={s.sub}>{selected===q.answer?"නිවැරදියි! ✓":"නිවැරදි පිළිතුර: "+q.options[q.answer]}</Text>:<TouchableOpacity disabled={selected===undefined} onPress={()=>setLessonChecked(v=>({...v,[q.id]:true}))} style={[s.action,selected===undefined&&{opacity:0.45}]}><Text style={s.actionText}>පිළිතුර තහවුරු කරන්න</Text></TouchableOpacity>}
     </View>})}
     {done===exam.length&&<View style={s.example}><Text style={s.cardTitle}>{score>=14?"🎉 A1 පරීක්ෂණය සමත්!":"📘 තව පුහුණුව අවශ්‍යයි"}</Text><Text style={s.sub}>ඔබේ ප්‍රතිඵලය {score}/20 ({Math.round(score/20*100)}%). {score>=14?"හොඳ වැඩක්! දැන් කථන පුහුණුව කරන්න.":"වැරදුණු පාඩම් නැවත බලලා පරීක්ෂණය නැවත කරන්න."}</Text><Text style={s.lessonHeading}>🗣️ කථන ස්වයං පුහුණුව</Text><Text style={s.sub}>1. ඔබේ නම සහ ඔබ ජීවත් වන නගරය කියන්න.</Text><Text style={s.sub}>2. ඔබේ දෛනික වැඩ සහ වේලාවන් ගැන වාක්‍ය 3ක් කියන්න.</Text><Text style={s.sub}>3. කඩයකදී භාණ්ඩයක් ඉල්ලා මිල අසන්න.</Text><Text style={s.sub}>4. නැවතුම්පොළක් හෝ වෛද්‍යවරයෙක් ගැන උදව් ඉල්ලන්න.</Text><Text style={s.sub}>මෙම කථන කොටස ඔබම පුහුණු කරගන්න; ස්වයංක්‍රීය කථන ලකුණු කිරීම තවම නැහැ.</Text></View>}
     <TouchableOpacity onPress={()=>{setLessonAnswers(v=>{const n={...v};exam.forEach(q=>delete n[q.id]);return n;});setLessonChecked(v=>{const n={...v};exam.forEach(q=>delete n[q.id]);return n;});}} style={[s.action,{marginTop:12}]}><Text style={s.actionText}>↻ අවසාන පරීක්ෂණය නැවත ආරම්භ කරන්න</Text></TouchableOpacity>
    </View>})()}
   </View>
   <View style={s.panel}>
    <Text style={s.eyebrow}>A2 · NEXT LEVEL</Text>
    <Text style={s.cardTitle}>🚀 A2 · ඊළඟ මට්ටම</Text>
    <Text style={s.sub}>A1 අවසන් කළ පසු ඉගෙනගන්න පුළුවන් A2 පාඩම්. දෛනික පුරුදු, නිවස, සෞඛ්‍යය, වැඩ මුර සහ අතීත සිදුවීම් ගැන වැඩි විස්තර සහිතව කතා කරන්න.</Text>
    {(language==="Serbian"?SERBIAN_A2_LESSONS:ENGLISH_A2_LESSONS).map((lesson,li)=>{
     const expanded=expandedLessonId===lesson.id;
     const checkedCount=lesson.practice.filter((q,qi)=>lessonChecked[lesson.id+"-"+qi]).length+(lesson.listeningPractice&&lessonChecked[lesson.id+"-listen"]?1:0);
     return <View key={lesson.id} style={s.lessonCard}>
      <TouchableOpacity activeOpacity={0.8} onPress={()=>setExpandedLessonId(expanded?null:lesson.id)} style={{paddingVertical:4}}>
       <Text style={s.eyebrow}>A2 · LESSON {li+1} · {checkedCount}/{lesson.practice.length+1} පරීක්ෂා කරලා</Text>
       <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}><View style={{flex:1,paddingRight:10}}><Text style={s.cardTitle}>{lesson.title}</Text><Text style={s.sub}>අරමුණ: {lesson.objective}</Text></View><Text style={s.cardTitle}>{expanded?"⌃":"⌄"}</Text></View>
       <Text style={s.link}>{expanded?"පාඩම හකුළන්න":"පාඩම විවෘත කරන්න · වචන, ව්‍යාකරණ සහ සංවාද"}</Text>
      </TouchableOpacity>
      {expanded&&<View>
       <Text style={s.lessonHeading}>📚 නව වචන</Text>
       {lesson.vocabulary.map(item=><View key={item.word} style={s.lessonWord}>
        <Text style={s.lessonSerbian}>{item.word}</Text><Text style={s.sound}>සිංහල උච්චාරණය: {item.reading}</Text><Text style={s.sub}>{item.meaning}</Text>
        <TouchableOpacity onPress={()=>speak(item.word,language)}><Text style={s.link}>🔊 හඬ අහන්න</Text></TouchableOpacity>
       </View>)}
       <Text style={s.lessonHeading}>🧠 {lesson.grammarTitle}</Text><Text style={s.sub}>{lesson.grammar}</Text>
       <Text style={s.lessonHeading}>💬 උදාහරණ</Text>
       {lesson.examples.map((line,i)=>{const phrase=line.sr||line.text;return <View key={lesson.id+"-ex-"+i} style={s.dialogueLine}><View style={{flex:1}}><Text style={s.lessonSerbian}>{phrase}</Text><Text style={s.sound}>සිංහල උච්චාරණය: {line.reading}</Text><Text style={s.sub}>{line.si||line.meaning}</Text></View><TouchableOpacity onPress={()=>speak(phrase,language)}><Text style={s.link}>🔊</Text></TouchableOpacity></View>})}
       <Text style={s.lessonHeading}>🗣️ සංවාදය</Text>
       {lesson.dialogue.map((line,i)=>{const phrase=line.sr||line.text;return <View key={lesson.id+"-d-"+i} style={s.dialogueLine}><View style={{flex:1}}><Text style={s.lessonSerbian}>{phrase}</Text><Text style={s.sound}>සිංහල උච්චාරණය: {line.reading}</Text><Text style={s.sub}>{line.si||line.meaning}</Text></View><TouchableOpacity onPress={()=>speak(phrase,language)}><Text style={s.link}>🔊</Text></TouchableOpacity></View>})}
       {lesson.listeningPractice&&<View style={s.quizCard}><Text style={s.lessonHeading}>🎧 සවන් දීම</Text><Text style={s.sub}>{lesson.listeningPractice.prompt}</Text><Text style={s.sound}>උච්චාරණය: {lesson.listeningPractice.reading}</Text><TouchableOpacity onPress={()=>speak(lesson.listeningPractice.audio,language)} style={s.action}><Text style={s.actionText}>🔊 නැවත අහන්න</Text></TouchableOpacity>
        {lesson.listeningPractice.options.map((option,oi)=><TouchableOpacity key={option} disabled={!!lessonChecked[lesson.id+"-listen"]} onPress={()=>setLessonAnswers(v=>({...v,[lesson.id+"-listen"]:oi}))} style={[s.quizOption,lessonAnswers[lesson.id+"-listen"]===oi&&s.quizSelected,lessonChecked[lesson.id+"-listen"]&&oi===lesson.listeningPractice.answer&&s.quizCorrect]}><Text style={s.quizOptionText}>{String.fromCharCode(65+oi)}. {option}</Text></TouchableOpacity>)}
        {lessonChecked[lesson.id+"-listen"]?<Text style={s.sub}>{lessonAnswers[lesson.id+"-listen"]===lesson.listeningPractice.answer?"නිවැරදියි! ✓":"නිවැරදි පිළිතුර: "+lesson.listeningPractice.options[lesson.listeningPractice.answer]}</Text>:<TouchableOpacity disabled={lessonAnswers[lesson.id+"-listen"]===undefined} onPress={()=>setLessonChecked(v=>({...v,[lesson.id+"-listen"]:true}))} style={[s.action,lessonAnswers[lesson.id+"-listen"]===undefined&&{opacity:0.45}]}><Text style={s.actionText}>පිළිතුර පරීක්ෂා කරන්න</Text></TouchableOpacity>}
       </View>}
       <Text style={s.lessonHeading}>✍️ පුහුණු ප්‍රශ්න</Text>
       {lesson.practice.map((q,qi)=>{const key=lesson.id+"-"+qi,selected=lessonAnswers[key],checked=lessonChecked[key];return <View key={key} style={s.quizCard}><Text style={s.sub}>{qi+1}. {q.prompt}</Text>{q.options.map((option,oi)=><TouchableOpacity key={option} disabled={!!checked} onPress={()=>setLessonAnswers(v=>({...v,[key]:oi}))} style={[s.quizOption,selected===oi&&s.quizSelected,checked&&oi===q.answer&&s.quizCorrect,checked&&selected===oi&&selected!==q.answer&&s.quizWrong]}><Text style={s.quizOptionText}>{String.fromCharCode(65+oi)}. {option}</Text></TouchableOpacity>)}{checked?<Text style={s.sub}>{selected===q.answer?"නිවැරදියි! ✓ ":"නැවත පුහුණු වෙමු. "}{q.explanation}</Text>:<TouchableOpacity disabled={selected===undefined} onPress={()=>setLessonChecked(v=>({...v,[key]:true}))} style={[s.action,selected===undefined&&{opacity:0.45}]}><Text style={s.actionText}>පිළිතුර පරීක්ෂා කරන්න</Text></TouchableOpacity>}</View>})}
      </View>}
     </View>
    })}
   </View>
   <View style={s.panel}>
    <Text style={s.eyebrow}>B1 · NEXT LEVEL</Text>
    <Text style={s.cardTitle}>🚀 B1 · ඊළඟ මට්ටම</Text>
    <Text style={s.sub}>A2 අවසන් කළ පසු ඉගෙනගන්න පුළුවන් B1 පාඩම්. අත්දැකීම්, අදහස්, වැඩබිමේ ගැටලු, වාර්තා, නිල ඉල්ලීම් සහ ව්‍යාපෘති ගැන වඩා ස්වාධීනව සන්නිවේදනය කරන්න.</Text>
    {(language==="Serbian"?SERBIAN_B1_LESSONS:ENGLISH_B1_LESSONS).map((lesson,li)=>{
     const expanded=expandedLessonId===lesson.id;
     const checkedCount=lesson.practice.filter((q,qi)=>lessonChecked[lesson.id+"-"+qi]).length+(lesson.listeningPractice&&lessonChecked[lesson.id+"-listen"]?1:0);
     return <View key={lesson.id} style={s.lessonCard}>
      <TouchableOpacity activeOpacity={0.8} onPress={()=>setExpandedLessonId(expanded?null:lesson.id)} style={{paddingVertical:4}}>
       <Text style={s.eyebrow}>B1 · LESSON {li+1} · {checkedCount}/{lesson.practice.length+1} පරීක්ෂා කරලා</Text>
       <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}><View style={{flex:1,paddingRight:10}}><Text style={s.cardTitle}>{lesson.title}</Text><Text style={s.sub}>අරමුණ: {lesson.objective}</Text></View><Text style={s.cardTitle}>{expanded?"⌃":"⌄"}</Text></View>
       <Text style={s.link}>{expanded?"පාඩම හකුළන්න":"පාඩම විවෘත කරන්න · වචන, ව්‍යාකරණ සහ සංවාද"}</Text>
      </TouchableOpacity>
      {expanded&&<View>
       <Text style={s.lessonHeading}>📚 නව වචන</Text>
       {lesson.vocabulary.map(item=><View key={item.word} style={s.lessonWord}>
        <Text style={s.lessonSerbian}>{item.word}</Text><Text style={s.sound}>සිංහල උච්චාරණය: {item.reading}</Text><Text style={s.sub}>{item.meaning}</Text>
        <TouchableOpacity onPress={()=>speak(item.word,language)}><Text style={s.link}>🔊 හඬ අහන්න</Text></TouchableOpacity>
       </View>)}
       <Text style={s.lessonHeading}>🧠 {lesson.grammarTitle}</Text><Text style={s.sub}>{lesson.grammar}</Text>
       <Text style={s.lessonHeading}>💬 උදාහරණ</Text>
       {lesson.examples.map((line,i)=>{const phrase=line.sr||line.text;return <View key={lesson.id+"-ex-"+i} style={s.dialogueLine}><View style={{flex:1}}><Text style={s.lessonSerbian}>{phrase}</Text><Text style={s.sound}>සිංහල උච්චාරණය: {line.reading}</Text><Text style={s.sub}>{line.si||line.meaning}</Text></View><TouchableOpacity onPress={()=>speak(phrase,language)}><Text style={s.link}>🔊</Text></TouchableOpacity></View>})}
       <Text style={s.lessonHeading}>🗣️ සංවාදය</Text>
       {lesson.dialogue.map((line,i)=>{const phrase=line.sr||line.text;return <View key={lesson.id+"-d-"+i} style={s.dialogueLine}><View style={{flex:1}}><Text style={s.lessonSerbian}>{phrase}</Text><Text style={s.sound}>සිංහල උච්චාරණය: {line.reading}</Text><Text style={s.sub}>{line.si||line.meaning}</Text></View><TouchableOpacity onPress={()=>speak(phrase,language)}><Text style={s.link}>🔊</Text></TouchableOpacity></View>})}
       {lesson.listeningPractice&&<View style={s.quizCard}><Text style={s.lessonHeading}>🎧 සවන් දීම</Text><Text style={s.sub}>{lesson.listeningPractice.prompt}</Text><Text style={s.sound}>උච්චාරණය: {lesson.listeningPractice.reading}</Text><TouchableOpacity onPress={()=>speak(lesson.listeningPractice.audio,language)} style={s.action}><Text style={s.actionText}>🔊 නැවත අහන්න</Text></TouchableOpacity>
        {lesson.listeningPractice.options.map((option,oi)=><TouchableOpacity key={option} disabled={!!lessonChecked[lesson.id+"-listen"]} onPress={()=>setLessonAnswers(v=>({...v,[lesson.id+"-listen"]:oi}))} style={[s.quizOption,lessonAnswers[lesson.id+"-listen"]===oi&&s.quizSelected,lessonChecked[lesson.id+"-listen"]&&oi===lesson.listeningPractice.answer&&s.quizCorrect]}><Text style={s.quizOptionText}>{String.fromCharCode(65+oi)}. {option}</Text></TouchableOpacity>)}
        {lessonChecked[lesson.id+"-listen"]?<Text style={s.sub}>{lessonAnswers[lesson.id+"-listen"]===lesson.listeningPractice.answer?"නිවැරදියි! ✓":"නිවැරදි පිළිතුර: "+lesson.listeningPractice.options[lesson.listeningPractice.answer]}</Text>:<TouchableOpacity disabled={lessonAnswers[lesson.id+"-listen"]===undefined} onPress={()=>setLessonChecked(v=>({...v,[lesson.id+"-listen"]:true}))} style={[s.action,lessonAnswers[lesson.id+"-listen"]===undefined&&{opacity:0.45}]}><Text style={s.actionText}>පිළිතුර පරීක්ෂා කරන්න</Text></TouchableOpacity>}
       </View>}
       <Text style={s.lessonHeading}>✍️ පුහුණු ප්‍රශ්න</Text>
       {lesson.practice.map((q,qi)=>{const key=lesson.id+"-"+qi,selected=lessonAnswers[key],checked=lessonChecked[key];return <View key={key} style={s.quizCard}><Text style={s.sub}>{qi+1}. {q.prompt}</Text>{q.options.map((option,oi)=><TouchableOpacity key={option} disabled={!!checked} onPress={()=>setLessonAnswers(v=>({...v,[key]:oi}))} style={[s.quizOption,selected===oi&&s.quizSelected,checked&&oi===q.answer&&s.quizCorrect,checked&&selected===oi&&selected!==q.answer&&s.quizWrong]}><Text style={s.quizOptionText}>{String.fromCharCode(65+oi)}. {option}</Text></TouchableOpacity>)}{checked?<Text style={s.sub}>{selected===q.answer?"නිවැරදියි! ✓ ":"නැවත පුහුණු වෙමු. "}{q.explanation}</Text>:<TouchableOpacity disabled={selected===undefined} onPress={()=>setLessonChecked(v=>({...v,[key]:true}))} style={[s.action,selected===undefined&&{opacity:0.45}]}><Text style={s.actionText}>පිළිතුර පරීක්ෂා කරන්න</Text></TouchableOpacity>}</View>})}
      </View>}
     </View>
    })}
   </View>
   <View style={s.panel}><Text style={s.eyebrow}>📖 {language.toUpperCase()} · BEGINNER</Text><Text style={s.word}>{current.word}</Text><Text style={s.sound}>සිංහල උච්චාරණය: {language==="Serbian"?pronounceSinhala(current.word):current.sound}</Text><Text style={s.meaning}>{current.meaning}</Text>{language==="Serbian"&&<Text style={s.sound}>කියන විදිහ: {pronounceSinhala(current.word)}</Text>}<Action onPress={()=>speak(current.word,language)}>🔊 {language} හඬ අහන්න</Action><View style={s.example}><Text style={s.sub}>💬 උදාහරණ වාක්‍යය</Text><Text style={s.exampleWord}>{current.example}</Text>{language==="Serbian"&&<Text style={s.sound}>සිංහලෙන් කියන විදිහ: {pronounceSinhala(current.example)}</Text>}{language==="English"&&<Text style={s.sound}>සිංහල අකුරෙන් උච්චාරණය (ආසන්නව): {pronounceEnglishSinhala(current.example)}</Text>}<Text style={s.sub}>{current.translation}</Text><TouchableOpacity onPress={()=>speak(current.example,language)}><Text style={s.link}>▶ {language} වාක්‍ය හඬ අහන්න</Text></TouchableOpacity></View><Action onPress={mark}>මම මේක ඉගෙනගත්තා ✓</Action><Action secondary onPress={next}>ඊළඟ වචනය →</Action></View><View style={s.panel}><Text style={s.cardTitle}>🗺️ සම්පූර්ණ {language} පාඨමාලා මාර්ගසටහන</Text><Text style={s.sub}>A1 සිට C2 දක්වා සියලු මට්ටම් සැලසුම් කර ඇත. පහත දැක්වෙන්නේ පාඩම් අන්තර්ගතය සකස් කරන මාර්ගසටහනයි; සියලු ඒකක තවම සම්පූර්ණ කර නැත.</Text>{COURSE_LEVELS.map(level=><View key={level.id} style={s.soundCard}><View style={s.soundHead}><Text style={s.soundLetters}>{LEVEL_LABELS[level.id]}</Text><Text style={s.soundName}>{level.title}</Text></View><Text style={s.sub}>{level.goal}</Text>{level.units.map((unit,i)=><Text key={unit} style={s.sub}>{i+1}. {unit}</Text>)}</View>)}<Text style={s.cardTitle}>🧩 සෑම පාඩමකම ඉගෙනුම් ක්‍රමය</Text>{LESSON_METHOD.map((item,i)=><Text key={item} style={s.sub}>{item}</Text>)}</View>

    </>}
    </>}
   {tab==="alphabet"&&<View style={s.panel}><Text style={s.cardTitle}>🔤 Serbian අකුරු · අවශ්‍ය තරමට</Text><Text style={s.sub}>අකුරු පාඩම අමතර කොටසක් පමණයි. හැම අකුරක්ම කටපාඩම් කිරීම වෙනුවට, කියවීමට සහ කතා කිරීමට අවශ්‍ය මූලික දැනුම ටික ටික ගනිමු.</Text>{serbianAlphabet.map(([latin,cyrillic,sound,example])=><TouchableOpacity key={latin} style={s.letterRow} onPress={()=>speak(example,"Serbian")}><View style={s.letterPair}><Text style={s.letter}>{latin}</Text><Text style={s.cyrillic}>{cyrillic}</Text></View><View style={{flex:1}}><Text style={s.sound}>අකුරේ හඬ: {sound}</Text><Text style={s.sub}>උදාහරණය: {example}</Text><Text style={s.meaningSmall}>{example==="auto"?"ආවුතො":example==="baba"?"බාබා":example==="car"?"ත්සාර්":example==="čaj"?"චායි":example==="ćao"?"චාඔ":example==="dan"?"දාන්":example==="džem"?"ජෙම්":example==="đak"?"ජැක්":example==="ekran"?"එක්‍රාන්":example==="film"?"ෆිල්ම්":example==="grad"?"ග්‍රාද්":example==="hotel"?"හොටෙල්":example==="ime"?"ඉමේ":example==="ja"?"යා":example==="kafa"?"කාෆා":example==="leto"?"ලෙතො":example==="ljubav"?"ල්‍යුබාව්":example==="more"?"මොරෙ":example==="noć"?"නොච්":example==="njiva"?"න්‍යීවා":example==="oko"?"ඔකො":example==="pas"?"පාස්":example==="ruka"?"රූකා":example==="sunce"?"සුන්ත්සේ":example==="škola"?"ෂ්කොලා":example==="tata"?"තාතා":example==="ulica"?"උලිත්සා":example==="voda"?"වොදා":example==="zima"?"සිමා":example==="žena"?"ෂෙනා":""}</Text></View><Text style={s.link}>🔊</Text></TouchableOpacity>)}</View>}{tab==="alphabet"&&<View style={s.soundGuide}><Text style={s.cardTitle}>👂 විශේෂ Serbian ශබ්ද හඳුනාගමු</Text><Text style={s.sub}>මේ අකුරු එකිනෙකට සමාන ලෙස ඇසුණත් උච්චාරණය වෙනස්. සිංහල ලිවීම ආසන්න මඟපෙන්වීමක් පමණයි. අලුත් වචනවලටත් ස්වයංක්‍රීය සිංහල ශබ්ද මඟපෙන්වීමක් පෙන්වයි.</Text>{serbianSoundGuide.map(item=><View key={item.letters} style={s.soundCard}><View style={s.soundHead}><Text style={s.soundLetters}>{item.letters}</Text><Text style={s.soundName}>{item.name}</Text></View><Text style={s.sub}>{item.hint}</Text><Text style={s.exampleWord}>{item.example} · {item.reading}</Text><Text style={s.sub}>තේරුම: {item.meaning}</Text><TouchableOpacity onPress={()=>speak(item.example,"Serbian")}><Text style={s.link}>🔊 Serbian උච්චාරණය අහන්න</Text></TouchableOpacity></View>)}</View>}
   {tab==="speak"&&<View style={s.panel}><Text style={s.eyebrow}>🎙️ REAL-LIFE SPEAKING · {language.toUpperCase()}</Text><Text style={s.cardTitle}>{dialog.title}</Text><Text style={s.sub}>{dialog.context} · වාක්‍ය අහන්න, හඬින් නැවත කියන්න.</Text><View style={s.stats}><View style={s.stat}><Text style={s.statNum}>{dialogIndex+1}/{dialogs.length}</Text><Text style={s.sub}>සංවාදය</Text></View><View style={s.stat}><Text style={s.statNum}>{lineIndex+1}/{dialog.lines.length}</Text><Text style={s.sub}>වාක්‍යය</Text></View></View><View style={s.example}><Text style={s.eyebrow}>🗣️ SAY IT OUT LOUD</Text><Text style={s.exampleWord}>{dialog.lines[lineIndex][0]}</Text>{language==="Serbian"&&<Text style={s.sound}>සිංහල උච්චාරණය: {pronounceSinhala(dialog.lines[lineIndex][0])}</Text>}<Text style={s.sub}>තේරුම: {dialog.lines[lineIndex][1]}</Text><Action onPress={()=>speak(dialog.lines[lineIndex][0],language)}>🔊 Serbian හඬ අහන්න</Action></View><Action onPress={()=>setLineIndex(v=>v+1>=dialog.lines.length?0:v+1)}>ඊළඟ වාක්‍යය →</Action><Action secondary onPress={()=>{setDialogIndex(v=>(v+1)%dialogs.length);setLineIndex(0);}}>වෙනත් සංවාදයක් →</Action><Text style={s.sub}>💡 මුලින් හඬ අහන්න. ඉන්පසු තිරය නොබලා ඔබම කියන්න. දිනපතා කෙටි සංවාද පුහුණුවෙන් කතා කිරීමේ හැකියාව දියුණු කරගමු.</Text></View>}
   {tab==="translate"&&<View style={s.panel}><Text style={s.eyebrow}>SINHALA TO SERBIAN</Text><Text style={s.cardTitle}>සිංහලෙන් ලියන්න</Text><Text style={s.sub}>ඔයාට කියන්න ඕන වාක්‍යය මෙතැන ලියන්න. Serbian භාෂාවට පරිවර්තනය කරලා උච්චාරණයත් පෙන්වන්නම්.</Text><TextInput value={translateInput} onChangeText={setTranslateInput} multiline placeholder="උදා: මට වතුර එකක් දෙන්න" placeholderTextColor={C.muted} style={s.translateInput}/><TouchableOpacity disabled={translateLoading||!translateInput.trim()} onPress={translateSinhalaToSerbian} style={[s.action,(translateLoading||!translateInput.trim())&&{opacity:0.55}]}><Text style={s.actionText}>{translateLoading?"පරිවර්තනය කරමින්...":"Serbian වලට පරිවර්තනය කරන්න"}</Text></TouchableOpacity>{!!translateError&&<Text style={s.translateError}>{translateError}</Text>}{!!translateOutput&&<><View style={s.translateResult}><Text style={s.eyebrow}>SERBIAN TRANSLATION</Text><Text style={s.translateWord}>{translateOutput}</Text><Text style={s.sound}>සිංහලෙන් උච්චාරණය (ආසන්නව): {pronounceSinhala(translateOutput)}</Text><TouchableOpacity onPress={()=>speak(translateOutput,"Serbian")}><Text style={s.link}>Serbian හඬ අහන්න</Text></TouchableOpacity><TouchableOpacity onPress={copySerbianTranslation}><Text style={s.link}>{translateCopied?"පිටපත් කළා ✓":"Serbian වාක්‍යය Copy කරන්න"}</Text></TouchableOpacity><TouchableOpacity onPress={()=>{setTranslateInput("");setTranslateOutput("");setTranslateCopied(false);}}><Text style={s.link}>අලුත් වාක්‍යයක් ලියන්න</Text></TouchableOpacity></View><View style={s.translateHistory}><Text style={s.cardTitle}>මෑත පරිවර්තන</Text>{translateHistory.length===0?<Text style={s.sub}>ඔයා කළ පරිවර්තන මෙතැන පෙන්වයි.</Text>:translateHistory.map((item,i)=><TouchableOpacity key={item.createdAt+"-"+i} onPress={()=>{setTranslateInput(item.source);setTranslateOutput(item.result);setTranslateError("");setTranslateCopied(false);}} style={s.historyItem}><Text style={s.historySource}>{item.source}</Text><Text style={s.historyResult}>{item.result}</Text><Text style={s.historyHint}>නැවත බලන්න</Text></TouchableOpacity>)}</View></>}<Text style={s.sub}>සටහන: මෙය අන්තර්ජාල පරිවර්තන සේවාවක් භාවිත කරන නිසා ඔයා ලියන වාක්‍යය එම සේවාවට යවනු ලබනවා. පරිවර්තනය සහ සිංහල උච්චාරණය සම්පූර්ණයෙන් නිවැරදි බව සහතික නැහැ; වැදගත් වාක්‍යයක් නම් පරීක්ෂා කරගන්න.</Text></View>}
   {tab==="progress"&&<View style={s.panel}><Text style={s.cardTitle}>🏆 {language} පාඨමාලා ප්‍රගතිය</Text><Text style={s.progress}>{percent}%</Text><View style={s.track}><View style={[s.fill,{width:percent+"%"}]}/></View><Text style={s.sub}>{count} / {words.length} ආරම්භක වචන ඉගෙනගෙන ඇත.</Text><Text style={s.sub}>භාෂා දෙකේ ප්‍රගතිය වෙන වෙනම සටහන් වේ.</Text></View>}
   {tab==="teacher"&&<View style={s.panel}><Text style={{fontSize:36}}>🤖</Text><Text style={s.cardTitle}>🤖 ඔබේ {language} AI ගුරුතුමා</Text><Text style={s.sub}>මෙය දැනට AI Teacher preview එකකි. සජීවී AI සංවාද සහ කතා හඳුනාගැනීම ඊළඟ අදියරේදී ආරක්ෂිත backend එකක් හරහා සම්බන්ධ කරමු.</Text><Action onPress={()=>speak(language==="Serbian"?"Zdravo, kako si?":"Hello, how are you?",language)}>🔊 {language} හඬ අහන්න</Action></View>}
   <Text style={s.footer}>Created by Madhuranga Yasanath</Text>
  </ScrollView>
  <View style={s.nav}>{[["home","⌂","මුල් පිටුව"],["speak","◉","කතා"],["learn","▤","පාඩම්"],["vocabulary","📖","වචන පොත"],["translate","文","පරිවර්තකය"],["teacher","◎","AI ගුරු"],["progress","▥","ප්‍රගතිය"]].map(([id,ic,label])=><TouchableOpacity key={id} onPress={()=>setTab(id)} style={s.navItem}><Text style={[s.navIcon,tab===id&&{color:C.teal}]}>{ic}</Text><Text style={[s.navLabel,tab===id&&{color:C.teal}]}>{label}</Text></TouchableOpacity>)}</View>
 </>}
 </SafeAreaView></ThemeContext.Provider>;
}
const makeStyles=(C)=>StyleSheet.create({
 safe:{flex:1,backgroundColor:C.bg},vocabSummary:{alignItems:"center",backgroundColor:C.panel2,borderRadius:14,padding:12,marginTop:14},vocabCount:{fontSize:30,fontWeight:"900",color:C.teal},vocabSearch:{backgroundColor:C.bg,borderWidth:1,borderColor:C.line,borderRadius:12,padding:13,color:C.white,fontSize:14,marginTop:14},vocabLetter:{paddingHorizontal:13,paddingVertical:9,borderRadius:10,backgroundColor:C.bg,borderWidth:1,borderColor:C.line},vocabLetterActive:{backgroundColor:C.teal,borderColor:C.teal},vocabLetterText:{color:C.muted,fontWeight:"800"},vocabLetterTextActive:{color:C.bg},vocabEntry:{backgroundColor:C.bg,borderWidth:1,borderColor:C.line,borderRadius:14,padding:13,marginTop:11},vocabEntryTop:{flexDirection:"row",alignItems:"center",justifyContent:"space-between",gap:8},vocabWord:{fontSize:18,fontWeight:"900",color:C.white,flex:1},vocabSource:{fontSize:9,color:C.gold,fontWeight:"800"},vocabMeaning:{fontSize:15,color:C.white,fontWeight:"800",marginTop:8},vocabExample:{backgroundColor:C.panel2,borderRadius:11,padding:11,marginTop:11},vocabExampleText:{fontSize:14,color:C.teal,fontWeight:"800"},vocabAudio:{alignSelf:"flex-start",paddingTop:2},letterRow:{flexDirection:"row",alignItems:"center",gap:12,paddingVertical:12,borderBottomWidth:1,borderBottomColor:C.line},letterPair:{width:64,alignItems:"center",justifyContent:"center",backgroundColor:C.panel2,borderRadius:12,paddingVertical:8},letter:{fontSize:22,fontWeight:"900",color:C.teal},cyrillic:{fontSize:13,color:C.gold,marginTop:2},header:{paddingHorizontal:22,paddingTop:12,paddingBottom:15,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},brand:{fontSize:28,fontWeight:"900",color:C.white},tagline:{fontSize:11,color:C.muted,marginTop:3},content:{paddingHorizontal:20,paddingBottom:30},greeting:{fontSize:25,fontWeight:"900",color:C.white,marginTop:18,lineHeight:34},sub:{fontSize:13,color:C.muted,lineHeight:21,marginTop:7},course:{backgroundColor:C.panel,padding:18,borderRadius:20,borderWidth:1,borderColor:C.line,flexDirection:"row",alignItems:"center",gap:13,marginTop:16},flag:{fontSize:34},courseTitle:{fontSize:21,fontWeight:"900",color:C.white},level:{fontSize:9,color:C.gold,fontWeight:"900",letterSpacing:1.3,marginTop:9},arrow:{fontSize:27,color:C.teal},note:{backgroundColor:C.panel2,padding:17,borderRadius:16,marginTop:20},noteTitle:{fontSize:14,color:C.white,fontWeight:"800"},footer:{textAlign:"center",fontSize:10,color:C.muted,marginTop:30},courseBar:{marginHorizontal:20,marginBottom:4,padding:12,borderRadius:13,backgroundColor:C.panel2,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},courseBarText:{color:C.teal,fontWeight:"900",fontSize:11},switch:{color:C.gold,fontSize:11,fontWeight:"800"},hero:{backgroundColor:C.panel,padding:21,borderRadius:22,borderWidth:1,borderColor:C.line,marginTop:20},eyebrow:{fontSize:10,fontWeight:"900",letterSpacing:1.6,color:C.teal},heroTitle:{fontSize:26,fontWeight:"900",color:C.white,lineHeight:35,marginTop:14},action:{backgroundColor:C.teal,padding:14,borderRadius:13,alignItems:"center",marginTop:15},actionText:{fontSize:14,fontWeight:"900",color:C.bg},secondary:{backgroundColor:C.panel2,borderWidth:1,borderColor:C.line},stats:{flexDirection:"row",gap:12,marginTop:15},stat:{flex:1,backgroundColor:C.panel,padding:17,borderRadius:17,borderWidth:1,borderColor:C.line},statNum:{fontSize:25,fontWeight:"900",color:C.white},teacher:{flexDirection:"row",alignItems:"center",gap:12,backgroundColor:C.panel2,padding:16,borderRadius:17,marginTop:14},cardTitle:{fontSize:17,fontWeight:"900",color:C.white},panel:{backgroundColor:C.panel,padding:20,borderRadius:20,borderWidth:1,borderColor:C.line,marginTop:18},word:{fontSize:39,fontWeight:"900",color:C.white,textAlign:"center",marginTop:25},sound:{fontSize:13,color:C.gold,textAlign:"center",marginTop:8},meaning:{fontSize:19,color:C.white,textAlign:"center",fontWeight:"800",marginTop:12},meaningSmall:{fontSize:13,color:C.gold,fontWeight:"800",marginTop:3},soundGuide:{marginTop:20,gap:10},lessonCard:{backgroundColor:C.bg,padding:15,borderRadius:16,borderWidth:1,borderColor:C.line,marginTop:15},lessonHeading:{fontSize:15,fontWeight:"900",color:C.gold,marginTop:20,marginBottom:8},lessonWord:{paddingVertical:11,borderBottomWidth:1,borderBottomColor:C.line},lessonSerbian:{fontSize:17,fontWeight:"900",color:C.white,marginTop:4},lessonExample:{fontSize:14,fontWeight:"800",color:C.teal,marginTop:9},dialogueLine:{flexDirection:"row",alignItems:"center",gap:10,paddingVertical:10,borderBottomWidth:1,borderBottomColor:C.line},quizCard:{backgroundColor:C.panel2,padding:13,borderRadius:13,marginTop:12},quizOption:{padding:11,borderRadius:10,borderWidth:1,borderColor:C.line,marginTop:8},quizSelected:{borderColor:C.teal,backgroundColor:C.panel},quizCorrect:{borderColor:"#3BBF87",backgroundColor:"#153D36"},quizWrong:{borderColor:"#D96B6B",backgroundColor:"#482A31"},quizOptionText:{color:C.white,fontSize:13,fontWeight:"700"},soundCard:{backgroundColor:C.bg,padding:14,borderRadius:14,borderWidth:1,borderColor:C.line},soundHead:{flexDirection:"row",alignItems:"center",gap:12},soundLetters:{fontSize:22,fontWeight:"900",color:C.teal,minWidth:75},soundName:{fontSize:14,fontWeight:"800",color:C.white},example:{backgroundColor:C.bg,padding:15,borderRadius:15,marginTop:18},exampleWord:{fontSize:17,color:C.white,fontWeight:"800",marginTop:9},translateInput:{minHeight:120,maxHeight:220,textAlignVertical:"top",backgroundColor:C.bg,borderWidth:1,borderColor:C.line,borderRadius:14,padding:14,color:C.white,fontSize:16,marginTop:16},translateResult:{backgroundColor:C.bg,borderWidth:1,borderColor:C.line,borderRadius:15,padding:15,marginTop:18},translateHistory:{marginTop:22},historyItem:{backgroundColor:C.bg,borderWidth:1,borderColor:C.line,borderRadius:12,padding:12,marginTop:9},historySource:{fontSize:13,color:C.muted},historyResult:{fontSize:15,color:C.white,fontWeight:"800",marginTop:5},historyHint:{fontSize:10,color:C.teal,marginTop:5},translateWord:{fontSize:22,fontWeight:"900",color:C.white,lineHeight:32,marginTop:12},translateError:{color:"#FF8A8A",fontSize:13,marginTop:12},link:{color:C.teal,fontWeight:"800",marginTop:12},progress:{fontSize:48,color:C.teal,fontWeight:"900",marginTop:18},track:{height:9,backgroundColor:C.bg,borderRadius:8,overflow:"hidden",marginVertical:14},fill:{height:9,backgroundColor:C.teal},themeToggle:{paddingHorizontal:12,paddingVertical:9,backgroundColor:C.panel2,borderRadius:12,borderWidth:1,borderColor:C.line},themeToggleText:{fontSize:12,fontWeight:"900",color:C.teal},missionPanel:{backgroundColor:C.panel2,padding:17,borderRadius:18,borderWidth:1,borderColor:C.line,marginTop:16},missionTop:{flexDirection:"row",justifyContent:"space-between",alignItems:"center"},xp:{fontSize:14,fontWeight:"900",color:C.gold},missionRow:{flexDirection:"row",alignItems:"center",paddingVertical:12,borderBottomWidth:1,borderBottomColor:C.line,gap:9},missionCheck:{fontSize:18},missionText:{flex:1,color:C.white,fontSize:13,fontWeight:"700"},missionDone:{textDecorationLine:"line-through",color:C.muted},missionXp:{color:C.gold,fontSize:11,fontWeight:"900"},nav:{flexDirection:"row",paddingVertical:10,backgroundColor:C.nav,borderTopWidth:1,borderTopColor:C.line},navItem:{flex:1,alignItems:"center",gap:3},navIcon:{fontSize:22,color:C.muted},navLabel:{fontSize:10,color:C.muted,fontWeight:"800"}
});