import React, { useMemo, useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, StyleSheet, StatusBar } from "react-native";
import * as Speech from "expo-speech";

const C={bg:"#071426",panel:"#10243D",panel2:"#142D49",teal:"#35D6C5",gold:"#F5C66A",white:"#F5F8FC",muted:"#9DB0C5",line:"#24415F"};
const courses={
 Serbian:[
  {word:"Zdravo",meaning:"ආයුබෝවන් / හෙලෝ",sound:"ස්ද්‍රාවෝ",example:"Zdravo, kako si?",translation:"හෙලෝ, ඔයාට කොහොමද?"},
  {word:"Hvala",meaning:"ස්තුතියි",sound:"හ්වාලා",example:"Hvala puno.",translation:"බොහොම ස්තුතියි."},
  {word:"Molim",meaning:"කරුණාකර",sound:"මොලීම්",example:"Molim vas.",translation:"කරුණාකර."},
  {word:"Dobro jutro",meaning:"සුබ උදෑසනක්",sound:"දොබ්‍රො යූත්‍රො",example:"Dobro jutro svima.",translation:"හැමෝටම සුබ උදෑසනක්."}
 ],
 English:[
  {word:"Hello",meaning:"ආයුබෝවන් / හෙලෝ",sound:"හෙලෝ",example:"Hello, how are you?",translation:"හෙලෝ, ඔයාට කොහොමද?"},
  {word:"Thank you",meaning:"ස්තුතියි",sound:"තැන්ක් යූ",example:"Thank you very much.",translation:"බොහොම ස්තුතියි."},
  {word:"Please",meaning:"කරුණාකර",sound:"ප්ලීස්",example:"Please help me.",translation:"කරුණාකර මට උදව් කරන්න."},
  {word:"Good morning",meaning:"සුබ උදෑසනක්",sound:"ගුඩ් මෝර්නින්",example:"Good morning, everyone.",translation:"හැමෝටම සුබ උදෑසනක්."}
 ]
};
const speak=(text,lang)=>{Speech.stop();Speech.speak(text,{language:lang==="Serbian"?"sr-RS":"en-US",rate:0.82});};
function Action({children,onPress,secondary=false}){return <TouchableOpacity onPress={onPress} style={[s.action,secondary&&s.secondary]}><Text style={[s.actionText,secondary&&{color:C.teal}]}>{children}</Text></TouchableOpacity>;}
export default function App(){
 const [language,setLanguage]=useState(null),[tab,setTab]=useState("home"),[index,setIndex]=useState(0),[learned,setLearned]=useState({Serbian:[],English:[]});
 const words=language?courses[language]:[],current=language?words[index%words.length]:null;
 const count=language?learned[language].length:0,percent=language?Math.round(count/words.length*100):0;
 const title=useMemo(()=>({home:"ආයුබෝවන්!",learn:"අද පාඩම",progress:"ඔබේ ප්‍රගතිය",teacher:"AI ගුරුතුමා"})[tab],[tab]);
 const choose=lang=>{setLanguage(lang);setIndex(0);setTab("home");};
 const next=()=>setIndex(v=>(v+1)%words.length);
 const mark=()=>{setLearned(v=>({...v,[language]:v[language].includes(current.word)?v[language]:[...v[language],current.word]}));next();};
 return <SafeAreaView style={s.safe}><StatusBar barStyle="light-content" backgroundColor={C.bg}/>
 <View style={s.header}><View><Text style={s.brand}>Basa<Text style={{color:C.gold}}>Nova</Text></Text><Text style={s.tagline}>ඔබේ පුද්ගලික භාෂා ඉගෙනුම් මිතුරා</Text></View><Text style={{fontSize:25}}>🌍</Text></View>
 {!language?<ScrollView contentContainerStyle={s.content}>
  <Text style={s.greeting}>ඔබ ඉගෙනගන්න කැමති භාෂාව තෝරන්න</Text><Text style={s.sub}>එක් වරකට එක් භාෂාවක් පමණක් ඉගෙනගමු. ඔබ තෝරන පාඨමාලාව වෙනම ප්‍රගතියක් සමඟ පවත්වාගෙන යන්න පුළුවන්.</Text>
  <TouchableOpacity style={s.course} onPress={()=>choose("Serbian")}><Text style={s.flag}>🇷🇸</Text><View style={{flex:1}}><Text style={s.courseTitle}>Serbian</Text><Text style={s.sub}>සිංහලෙන් Serbian භාෂාව මුල සිට ඉගෙනගන්න</Text><Text style={s.level}>BEGINNER → ADVANCED</Text></View><Text style={s.arrow}>›</Text></TouchableOpacity>
  <TouchableOpacity style={s.course} onPress={()=>choose("English")}><Text style={s.flag}>🇬🇧</Text><View style={{flex:1}}><Text style={s.courseTitle}>English</Text><Text style={s.sub}>සිංහලෙන් English භාෂාව මුල සිට ඉගෙනගන්න</Text><Text style={s.level}>BEGINNER → ADVANCED</Text></View><Text style={s.arrow}>›</Text></TouchableOpacity>
  <View style={s.note}><Text style={s.noteTitle}>ඔබට කැමති වෙලාවක පාඨමාලාව මාරු කළ හැකියි</Text><Text style={s.sub}>Serbian පාඩමක් අතරතුර English වචන මිශ්‍ර කරන්නේ නැහැ. භාෂා දෙකේම පාඩම් සහ ප්‍රගතිය වෙන වෙනමයි.</Text></View>
  <Text style={s.footer}>Created by Madhuranga Yasanath</Text>
 </ScrollView>:<>
  <View style={s.courseBar}><Text style={s.courseBarText}>{language==="Serbian"?"🇷🇸":"🇬🇧"}  {language} COURSE</Text><TouchableOpacity onPress={()=>{setLanguage(null);setTab("home");}}><Text style={s.switch}>භාෂාව මාරු කරන්න ↗</Text></TouchableOpacity></View>
  <ScrollView contentContainerStyle={s.content}>
   <Text style={s.greeting}>{title}</Text><Text style={s.sub}>{language} භාෂාව පමණක් ඉගෙනගන්න ඔබේ වෙනම පාඨමාලාව.</Text>
   {tab==="home"&&<><View style={s.hero}><Text style={s.eyebrow}>YOUR {language.toUpperCase()} JOURNEY</Text><Text style={s.heroTitle}>පියවරෙන් පියවර{"\n"}භාෂාව ප්‍රගුණ කරමු.</Text><Text style={s.sub}>වචන, උච්චාරණ, ව්‍යාකරණ සහ සැබෑ සංවාද පුහුණුව.</Text><Action onPress={()=>setTab("learn")}>පාඩම පටන් ගන්න →</Action></View><View style={s.stats}><View style={s.stat}><Text style={s.statNum}>{count}/{words.length}</Text><Text style={s.sub}>ඉගෙනගත් වචන</Text></View><View style={s.stat}><Text style={s.statNum}>{percent}%</Text><Text style={s.sub}>ප්‍රගතිය</Text></View></View><TouchableOpacity style={s.teacher} onPress={()=>setTab("teacher")}><Text style={{fontSize:25}}>🤖</Text><View style={{flex:1}}><Text style={s.cardTitle}>AI ගුරුතුමා</Text><Text style={s.sub}>ඔබේ මට්ටමට ගැළපෙන පුහුණුව</Text></View><Text style={s.arrow}>›</Text></TouchableOpacity></>}
   {tab==="learn"&&<View style={s.panel}><Text style={s.eyebrow}>{language.toUpperCase()} · BEGINNER</Text><Text style={s.word}>{current.word}</Text><Text style={s.sound}>සිංහල උච්චාරණය: {current.sound}</Text><Text style={s.meaning}>{current.meaning}</Text><Action onPress={()=>speak(current.word,language)}>🔊 වචනයේ හඬ අහන්න</Action><View style={s.example}><Text style={s.sub}>උදාහරණ වාක්‍යය</Text><Text style={s.exampleWord}>{current.example}</Text><Text style={s.sub}>{current.translation}</Text><TouchableOpacity onPress={()=>speak(current.example,language)}><Text style={s.link}>▶ වාක්‍යය අහන්න</Text></TouchableOpacity></View><Action onPress={mark}>මම මේක ඉගෙනගත්තා ✓</Action><Action secondary onPress={next}>ඊළඟ වචනය →</Action></View>}
   {tab==="progress"&&<View style={s.panel}><Text style={s.cardTitle}>{language} පාඨමාලා ප්‍රගතිය</Text><Text style={s.progress}>{percent}%</Text><View style={s.track}><View style={[s.fill,{width:percent+"%"}]}/></View><Text style={s.sub}>{count} / {words.length} ආරම්භක වචන ඉගෙනගෙන ඇත.</Text><Text style={s.sub}>භාෂා දෙකේ ප්‍රගතිය වෙන වෙනම සටහන් වේ.</Text></View>}
   {tab==="teacher"&&<View style={s.panel}><Text style={{fontSize:36}}>🤖</Text><Text style={s.cardTitle}>ඔබේ {language} AI ගුරුතුමා</Text><Text style={s.sub}>මෙය දැනට AI Teacher preview එකකි. සජීවී AI සංවාද සහ කතා හඳුනාගැනීම ඊළඟ අදියරේදී ආරක්ෂිත backend එකක් හරහා සම්බන්ධ කරමු.</Text><Action onPress={()=>speak(language==="Serbian"?"Zdravo, kako si?":"Hello, how are you?",language)}>🔊 {language} හඬ අහන්න</Action></View>}
   <Text style={s.footer}>Created by Madhuranga Yasanath</Text>
  </ScrollView>
  <View style={s.nav}>{[["home","⌂","මුල් පිටුව"],["learn","▣","පාඩම්"],["teacher","✧","AI ගුරු"],["progress","◔","ප්‍රගතිය"]].map(([id,ic,label])=><TouchableOpacity key={id} onPress={()=>setTab(id)} style={s.navItem}><Text style={[s.navIcon,tab===id&&{color:C.teal}]}>{ic}</Text><Text style={[s.navLabel,tab===id&&{color:C.teal}]}>{label}</Text></TouchableOpacity>)}</View>
 </>}
 </SafeAreaView>;
}
const s=StyleSheet.create({
 safe:{flex:1,backgroundColor:C.bg},header:{paddingHorizontal:22,paddingTop:12,paddingBottom:15,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},brand:{fontSize:28,fontWeight:"900",color:C.white},tagline:{fontSize:11,color:C.muted,marginTop:3},content:{paddingHorizontal:20,paddingBottom:30},greeting:{fontSize:25,fontWeight:"900",color:C.white,marginTop:18,lineHeight:34},sub:{fontSize:13,color:C.muted,lineHeight:21,marginTop:7},course:{backgroundColor:C.panel,padding:18,borderRadius:20,borderWidth:1,borderColor:C.line,flexDirection:"row",alignItems:"center",gap:13,marginTop:16},flag:{fontSize:34},courseTitle:{fontSize:21,fontWeight:"900",color:C.white},level:{fontSize:9,color:C.gold,fontWeight:"900",letterSpacing:1.3,marginTop:9},arrow:{fontSize:27,color:C.teal},note:{backgroundColor:C.panel2,padding:17,borderRadius:16,marginTop:20},noteTitle:{fontSize:14,color:C.white,fontWeight:"800"},footer:{textAlign:"center",fontSize:10,color:C.muted,marginTop:30},courseBar:{marginHorizontal:20,marginBottom:4,padding:12,borderRadius:13,backgroundColor:C.panel2,flexDirection:"row",justifyContent:"space-between",alignItems:"center"},courseBarText:{color:C.teal,fontWeight:"900",fontSize:11},switch:{color:C.gold,fontSize:11,fontWeight:"800"},hero:{backgroundColor:C.panel,padding:21,borderRadius:22,borderWidth:1,borderColor:C.line,marginTop:20},eyebrow:{fontSize:10,fontWeight:"900",letterSpacing:1.6,color:C.teal},heroTitle:{fontSize:26,fontWeight:"900",color:C.white,lineHeight:35,marginTop:14},action:{backgroundColor:C.teal,padding:14,borderRadius:13,alignItems:"center",marginTop:15},actionText:{fontSize:14,fontWeight:"900",color:C.bg},secondary:{backgroundColor:C.panel2,borderWidth:1,borderColor:C.line},stats:{flexDirection:"row",gap:12,marginTop:15},stat:{flex:1,backgroundColor:C.panel,padding:17,borderRadius:17,borderWidth:1,borderColor:C.line},statNum:{fontSize:25,fontWeight:"900",color:C.white},teacher:{flexDirection:"row",alignItems:"center",gap:12,backgroundColor:C.panel2,padding:16,borderRadius:17,marginTop:14},cardTitle:{fontSize:17,fontWeight:"900",color:C.white},panel:{backgroundColor:C.panel,padding:20,borderRadius:20,borderWidth:1,borderColor:C.line,marginTop:18},word:{fontSize:39,fontWeight:"900",color:C.white,textAlign:"center",marginTop:25},sound:{fontSize:13,color:C.gold,textAlign:"center",marginTop:8},meaning:{fontSize:19,color:C.white,textAlign:"center",fontWeight:"800",marginTop:12},example:{backgroundColor:C.bg,padding:15,borderRadius:15,marginTop:18},exampleWord:{fontSize:17,color:C.white,fontWeight:"800",marginTop:9},link:{color:C.teal,fontWeight:"800",marginTop:12},progress:{fontSize:48,color:C.teal,fontWeight:"900",marginTop:18},track:{height:9,backgroundColor:C.bg,borderRadius:8,overflow:"hidden",marginVertical:14},fill:{height:9,backgroundColor:C.teal},nav:{flexDirection:"row",paddingVertical:10,backgroundColor:"#0A1B30",borderTopWidth:1,borderTopColor:C.line},navItem:{flex:1,alignItems:"center",gap:3},navIcon:{fontSize:21,color:C.muted},navLabel:{fontSize:10,color:C.muted,fontWeight:"800"}
});