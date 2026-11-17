import React, { useMemo, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, StyleSheet, StatusBar } from "react-native";
import * as Speech from "expo-speech";

const C = { bg:"#071426", panel:"#10243D", panel2:"#142D49", teal:"#35D6C5", gold:"#F5C66A", white:"#F5F8FC", muted:"#9DB0C5", line:"#24415F" };
const lessons = {
  Serbian: [
    { word:"Zdravo", meaning:"ආයුබෝවන් / හෙලෝ", phonetic:"ස්ද්‍රාවෝ", example:"Zdravo, kako si?", translation:"හෙලෝ, ඔයාට කොහොමද?", voice:"sr" },
    { word:"Hvala", meaning:"ස්තුතියි", phonetic:"හ්වාලා", example:"Hvala puno.", translation:"බොහොම ස්තුතියි.", voice:"sr" },
    { word:"Molim", meaning:"කරුණාකර / ඔබට සාදරයෙන්", phonetic:"මොලීම්", example:"Molim vas.", translation:"කරුණාකර.", voice:"sr" },
    { word:"Dobro jutro", meaning:"සුබ උදෑසනක්", phonetic:"දොබ්‍රො යූත්‍රො", example:"Dobro jutro svima.", translation:"හැමෝටම සුබ උදෑසනක්.", voice:"sr" }
  ],
  English: [
    { word:"Hello", meaning:"ආයුබෝවන් / හෙලෝ", phonetic:"හෙලෝ", example:"Hello, how are you?", translation:"හෙලෝ, ඔයාට කොහොමද?", voice:"en" },
    { word:"Thank you", meaning:"ස්තුතියි", phonetic:"තැන්ක් යූ", example:"Thank you very much.", translation:"බොහොම ස්තුතියි.", voice:"en" },
    { word:"Please", meaning:"කරුණාකර", phonetic:"ප්ලීස්", example:"Please help me.", translation:"කරුණාකර මට උදව් කරන්න.", voice:"en" },
    { word:"Good morning", meaning:"සුබ උදෑසනක්", phonetic:"ගුඩ් මෝර්නින්", example:"Good morning, everyone.", translation:"හැමෝටම සුබ උදෑසනක්.", voice:"en" }
  ]
};
function speak(text, language) {
  Speech.stop();
  Speech.speak(text, { language: language === "Serbian" ? "sr-RS" : "en-US", rate: 0.82, pitch: 1.0 });
}
function Pill({children, active, onPress}) {
  return <TouchableOpacity onPress={onPress} style={[styles.pill, active && styles.pillActive]}><Text style={[styles.pillText, active && {color:C.bg}]}>{children}</Text></TouchableOpacity>;
}
export default function App() {
  const [language, setLanguage] = useState("Serbian");
  const [tab, setTab] = useState("home");
  const [index, setIndex] = useState(0);
  const [learned, setLearned] = useState([]);
  const current = lessons[language][index % lessons[language].length];
  const count = learned.filter(x => x.startsWith(language + ":")).length;
  const percent = Math.round(count / lessons[language].length * 100);
  const title = useMemo(() => ({home:"ආයුබෝවන්!", learn:"අද පාඩම", progress:"ඔබේ ප්‍රගතිය", teacher:"AI ගුරුතුමා"})[tab], [tab]);
  const next = () => setIndex(v => (v + 1) % lessons[language].length);
  const markLearned = () => { setLearned(v => v.includes(language + ":" + current.word) ? v : [...v, language + ":" + current.word]); next(); };
  return <SafeAreaView style={styles.safe}>
    <StatusBar barStyle="light-content" backgroundColor={C.bg}/>
    <View style={styles.header}>
      <View><Text style={styles.brand}>Basa<Text style={{color:C.gold}}>Nova</Text></Text><Text style={styles.tagline}>ඔබේ භාෂා ඉගෙනුම් මිතුරා</Text></View>
      <View style={styles.avatar}><Text style={{fontSize:20}}>🌍</Text></View>
    </View>
    <ScrollView contentContainerStyle={styles.content}>
      <Text style={styles.greeting}>{title}</Text>
      <Text style={styles.sub}>අදත් අලුත් වචනයක් ඉගෙනගෙන විශ්වාසයෙන් කතා කරමු.</Text>
      <View style={styles.languageRow}>
        <Pill active={language==="Serbian"} onPress={()=>{setLanguage("Serbian");setIndex(0);}}>🇷🇸 Serbian</Pill>
        <Pill active={language==="English"} onPress={()=>{setLanguage("English");setIndex(0);}}>🇬🇧 English</Pill>
      </View>
      {tab === "home" && <>
        <View style={styles.hero}>
          <Text style={styles.eyebrow}>YOUR LEARNING JOURNEY</Text>
          <Text style={styles.heroTitle}>පියවරෙන් පියවර{ "\n" }භාෂා ප්‍රගුණ කරමු.</Text>
          <Text style={styles.heroText}>Serbian සහ English භාෂා දෙකම සිංහලෙන් ඉගෙනගන්න.</Text>
          <TouchableOpacity style={styles.primary} onPress={()=>setTab("learn")}><Text style={styles.primaryText}>පාඩම පටන් ගන්න  →</Text></TouchableOpacity>
          <Text style={styles.heroMark}>✦  LEARN · SPEAK · GROW</Text>
        </View>
        <View style={styles.sectionHead}><Text style={styles.sectionTitle}>අද ඔබේ ඉලක්කය</Text><Text style={styles.small}>දිනපතා පුහුණුව</Text></View>
        <View style={styles.stats}>
          <View style={styles.stat}><Text style={styles.statIcon}>📚</Text><Text style={styles.statNum}>{count}/{lessons[language].length}</Text><Text style={styles.small}>ඉගෙනගත් වචන</Text></View>
          <View style={styles.stat}><Text style={styles.statIcon}>🎯</Text><Text style={styles.statNum}>{percent}%</Text><Text style={styles.small}>පාඩම් ප්‍රගතිය</Text></View>
        </View>
        <TouchableOpacity style={styles.teacherCard} onPress={()=>setTab("teacher")}><Text style={styles.teacherIcon}>🤖</Text><View style={{flex:1}}><Text style={styles.cardTitle}>AI ගුරුතුමා</Text><Text style={styles.small}>ඔබේ ප්‍රශ්නවලට පිළිතුරු සහ පුහුණුව</Text></View><Text style={styles.arrow}>›</Text></TouchableOpacity>
      </>}
      {tab === "learn" && <View style={styles.lessonCard}>
        <Text style={styles.eyebrow}>{language.toUpperCase()} · BEGINNER</Text>
        <Text style={styles.word}>{current.word}</Text>
        <Text style={styles.phonetic}>සිංහල උච්චාරණය: {current.phonetic}</Text>
        <Text style={styles.meaning}>{current.meaning}</Text>
        <TouchableOpacity style={styles.listen} onPress={()=>speak(current.word,language)}><Text style={styles.listenText}>🔊  නිවැරදි හඬ අහන්න</Text></TouchableOpacity>
        <View style={styles.exampleBox}><Text style={styles.small}>උදාහරණ වාක්‍යය</Text><Text style={styles.example}>{current.example}</Text><Text style={styles.exampleTranslation}>{current.translation}</Text><TouchableOpacity onPress={()=>speak(current.example,language)}><Text style={styles.audioLink}>▶  වාක්‍යය අහන්න</Text></TouchableOpacity></View>
        <TouchableOpacity style={styles.primary} onPress={markLearned}><Text style={styles.primaryText}>මම මේක ඉගෙනගත්තා ✓</Text></TouchableOpacity>
        <TouchableOpacity style={styles.next} onPress={next}><Text style={styles.nextText}>ඊළඟ වචනය →</Text></TouchableOpacity>
      </View>}
      {tab === "progress" && <View style={styles.panel}><Text style={styles.cardTitle}>{language} ඉගෙනුම් ප්‍රගතිය</Text><Text style={styles.progressBig}>{percent}%</Text><View style={styles.track}><View style={[styles.fill,{width:percent+"%"}]}/></View><Text style={styles.sub}>{count} / {lessons[language].length} වචන ඉගෙනගෙන ඇත.</Text><Text style={styles.small}>මෙය ආරම්භක demo පාඩම් එකතුවේ ප්‍රගතියයි. ඉදිරියේදී මට්ටම්, දිනපතා ඉලක්ක සහ කතා පුහුණුවත් එකතු වේ.</Text></View>}
      {tab === "teacher" && <View style={styles.panel}><Text style={{fontSize:38}}>🤖</Text><Text style={styles.cardTitle}>ඔබේ AI භාෂා ගුරුතුමා</Text><Text style={styles.sub}>ඔබට අවශ්‍ය දේ සිංහලෙන් අහන්න. AI සංවාද, කතා හඳුනාගැනීම සහ පුද්ගලික පාඩම් සඳහා ඊළඟ සංවර්ධන අදියරේදී ආරක්ෂිත AI backend එකක් සම්බන්ධ කරමු.</Text><View style={styles.exampleBox}><Text style={styles.small}>දැනට කළ හැකි දේ</Text><Text style={styles.example}>වචන සහ උදාහරණ වාක්‍ය හඬින් අහන්න.</Text><TouchableOpacity onPress={()=>speak("Zdravo, kako si?", "Serbian")}><Text style={styles.audioLink}>▶ Serbian හඬ අහන්න</Text></TouchableOpacity><TouchableOpacity onPress={()=>speak("Hello, how are you?", "English")}><Text style={styles.audioLink}>▶ English හඬ අහන්න</Text></TouchableOpacity></View></View>}
      <Text style={styles.footer}>Created by Madhuranga Yasanath</Text>
      <Text style={styles.footerSub}>BasaNova · Learn Languages with Confidence</Text>
    </ScrollView>
    <View style={styles.nav}>
      {[["home","⌂","මුල් පිටුව"],["learn","▣","පාඩම්"],["teacher","✧","AI ගුරු"],["progress","◔","ප්‍රගතිය"]].map(([id,icon,label])=><TouchableOpacity key={id} onPress={()=>setTab(id)} style={styles.navItem}><Text style={[styles.navIcon,tab===id&&{color:C.teal}]}>{icon}</Text><Text style={[styles.navLabel,tab===id&&{color:C.teal}]}>{label}</Text></TouchableOpacity>)}
    </View>
  </SafeAreaView>;
}
const styles = StyleSheet.create({
 safe:{flex:1,backgroundColor:C.bg}, header:{paddingHorizontal:22,paddingTop:12,paddingBottom:16,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},
 brand:{fontSize:27,fontWeight:"900",color:C.white,letterSpacing:-1}, tagline:{fontSize:11,color:C.muted,marginTop:2}, avatar:{width:44,height:44,borderRadius:15,backgroundColor:C.panel2,alignItems:"center",justifyContent:"center",borderWidth:1,borderColor:C.line},
 content:{paddingHorizontal:20,paddingBottom:28}, greeting:{fontSize:27,fontWeight:"800",color:C.white,marginTop:8}, sub:{fontSize:13,color:C.muted,lineHeight:21,marginTop:6},
 languageRow:{flexDirection:"row",gap:10,marginTop:20,marginBottom:18}, pill:{paddingVertical:10,paddingHorizontal:17,borderRadius:30,borderWidth:1,borderColor:C.line,backgroundColor:C.panel},pillActive:{backgroundColor:C.teal,borderColor:C.teal},pillText:{fontSize:13,color:C.white,fontWeight:"700"},
 hero:{backgroundColor:C.panel,borderRadius:23,padding:21,borderWidth:1,borderColor:C.line},eyebrow:{fontSize:10,fontWeight:"800",letterSpacing:1.8,color:C.teal},heroTitle:{fontSize:27,fontWeight:"900",color:C.white,lineHeight:36,marginTop:14},heroText:{fontSize:13,color:C.muted,lineHeight:21,marginTop:10,marginBottom:18},primary:{backgroundColor:C.teal,padding:15,borderRadius:14,alignItems:"center",marginTop:12},primaryText:{fontSize:14,fontWeight:"900",color:C.bg},heroMark:{fontSize:9,color:C.gold,letterSpacing:1.4,marginTop:17,fontWeight:"800"},
 sectionHead:{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginTop:24,marginBottom:12},sectionTitle:{fontSize:16,color:C.white,fontWeight:"800"},small:{fontSize:11,color:C.muted},stats:{flexDirection:"row",gap:12},stat:{flex:1,backgroundColor:C.panel,padding:16,borderRadius:18,borderWidth:1,borderColor:C.line},statIcon:{fontSize:20},statNum:{fontSize:23,fontWeight:"900",color:C.white,marginTop:8,marginBottom:3},
 teacherCard:{marginTop:14,backgroundColor:C.panel2,padding:16,borderRadius:17,flexDirection:"row",alignItems:"center",gap:13,borderWidth:1,borderColor:C.line},teacherIcon:{fontSize:28},cardTitle:{fontSize:17,fontWeight:"800",color:C.white,marginBottom:5},arrow:{fontSize:28,color:C.teal},
 lessonCard:{backgroundColor:C.panel,padding:20,borderRadius:22,borderWidth:1,borderColor:C.line},word:{fontSize:39,fontWeight:"900",color:C.white,textAlign:"center",marginTop:24},phonetic:{fontSize:13,color:C.gold,textAlign:"center",marginTop:8},meaning:{fontSize:20,color:C.white,textAlign:"center",fontWeight:"700",marginTop:12},listen:{backgroundColor:C.panel2,padding:14,borderRadius:14,alignItems:"center",marginTop:20},listenText:{color:C.teal,fontWeight:"800"},exampleBox:{backgroundColor:C.bg,padding:15,borderRadius:15,marginTop:18},example:{fontSize:17,color:C.white,fontWeight:"700",marginTop:9},exampleTranslation:{fontSize:13,color:C.muted,marginTop:7},audioLink:{fontSize:13,color:C.teal,fontWeight:"800",marginTop:12},next:{padding:13,alignItems:"center"},nextText:{color:C.muted,fontWeight:"700"},
 panel:{backgroundColor:C.panel,padding:21,borderRadius:21,borderWidth:1,borderColor:C.line},progressBig:{fontSize:48,fontWeight:"900",color:C.teal,marginTop:20},track:{height:9,backgroundColor:C.bg,borderRadius:9,overflow:"hidden",marginVertical:14},fill:{height:9,backgroundColor:C.teal,borderRadius:9},footer:{textAlign:"center",color:C.muted,fontSize:11,marginTop:28},footerSub:{textAlign:"center",color:"#607890",fontSize:9,marginTop:4},
 nav:{flexDirection:"row",paddingTop:10,paddingBottom:8,backgroundColor:"#0A1B30",borderTopWidth:1,borderTopColor:C.line},navItem:{flex:1,alignItems:"center",gap:3},navIcon:{fontSize:21,color:C.muted},navLabel:{fontSize:10,color:C.muted,fontWeight:"700"}
});
