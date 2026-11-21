// C2 cumulative revision and final practice assessments for Serbian and English.
// Sinhala-script readings are approximate learner guides, not phonetic transcription.
const SERBIAN_TERMS = [["implikatura","ඉම්ප්ල්ඉක්අට්උර්අ","ව්‍යංගාර්ථය","ව්‍යංගාර්ථය සහ සන්දර්භය"],["preduslov","ප්ර්එඩ්උස්ල්ඔව්","පූර්ව කොන්දේසිය","පූර්ව උපකල්පන"],["dvosmislenost","ඩ්ව්ඔස්ම්ඉස්ල්එන්ඔස්ට්","අර්ථ දෙකක් ඇති බව","අර්ථ සූක්ෂ්මතා"],["ironija","ඉර්ඔන්ඉය්අ","උපහාසය","උපහාසය සහ කථන ස්වරය"],["konotacija","ක්ඔන්ඔට්අට්ස්ඉය්අ","අනුසංගික අර්ථය","අර්ථ ස්තර"],["kohezija","ක්ඔහ්එස්ඉය්අ","පෙළ සම්බන්ධතාව","පෙළ සංවිධානය"],["evidencijalnost","එව්ඉඩ්එන්ට්ස්ඉය්අල්න්ඔස්ට්","සාක්ෂි මත පදනම් වූ ප්‍රකාශන රටාව","සාක්ෂි සහ දැනුම් මට්ටම"],["proporcionalnost","ප්ර්ඔප්ඔර්ට්ස්ඉඔන්අල්න්ඔස්ට්","අනුපාතිකභාවය","නීතිමය තර්ක"],["dijalekatska varijacija","ඩ්ඉය්අල්එක්අට්ස්ක්අ වඅර්ඉය්අට්ස්ඉය්අ","ප්‍රාදේශීය භාෂා වෙනස්කම්","සමාජ භාෂා විද්‍යාව"],["parafraza","ප්අර්අෆ්ර්අස්අ","වෙනත් වචනවලින් ප්‍රකාශ කිරීම","පෙළ නැවත සැකසීම"],["pragmatika","ප්ර්අග්මඅට්ඉක්අ","භාෂා භාවිතයේ සන්දර්භ අධ්‍යයනය","ප්‍රායෝගික භාෂා විද්‍යාව"],["stav","ස්තාව්","කථකයාගේ ස්ථාවරය","කථන ස්ථාවරය"],["opovrgavanje","ඔප්ඔව්ර්ග්අව්අන්ය්එ","තර්කයක් ප්‍රතික්ෂේප කිරීම","වාද විවාද"],["verodostojnost","ව්එර්ඔඩ්ඔස්ට්ඔය්න්ඔස්ට්","විශ්වසනීයත්වය","මූලාශ්‍ර ඇගයීම"],["transpozicija","ට්‍රාන්ස්පඔසිට්සිය්අ","අර්ථය රැකගෙන වෙනත් ව්‍යුහයකට මාරු කිරීම","පරිවර්තන ක්‍රම"],["semantički opseg","ස්එමාන්ටිච්කි ඔප්සෙග්","අර්ථමය පරාසය","වාක්‍ය ව්‍යුහය සහ අර්ථය"],["intertekstualnost","ඉන්ටර්ටෙක්ස්ටුඅල්නොස්ට්","පෙළ අතර අන්තර් සම්බන්ධතාව","සාහිත්‍ය හා සංස්කෘතික ඉඟි"],["ublažavanje","උබ්ලාෂාවාන්යෙ","ප්‍රකාශයේ තීව්‍රතාව අඩු කිරීම","සංවාදයේ මෘදුකරණය"],["tumačenje","තුමාචෙන්යෙ","අර්ථකථනය","අර්ථකථන ක්‍රම"],["doslednost","දොස්ලෙද්නොස්ට්","අනුකූලතාව","තර්කයේ අනුකූලතාව"]];
const ENGLISH_TERMS = [["implicature","ඉම්ප්ලිකචර්","ව්‍යංගාර්ථය","ව්‍යංගාර්ථය සහ සන්දර්භය"],["presupposition","ප්‍රීසප්අසිෂන්","පූර්ව උපකල්පනය","පූර්ව උපකල්පන"],["ambiguity","ඇම්බිග්‍යුවිටි","අර්ථ දෙකක් ඇති බව","අර්ථ සූක්ෂ්මතා"],["irony","අයිරනි","උපහාසය","උපහාසය සහ කථන ස්වරය"],["connotation","කොනටේෂන්","අනුසංගික අර්ථය","අර්ථ ස්තර"],["cohesion","කෝහීෂන්","පෙළ සම්බන්ධතාව","පෙළ සංවිධානය"],["evidentiality","එවිඩෙන්ෂියැලිටි","සාක්ෂි මත පදනම් වූ ප්‍රකාශන රටාව","සාක්ෂි සහ දැනුම් මට්ටම"],["proportionality","ප්‍රපෝර්ෂනැලිටි","අනුපාතිකභාවය","නීතිමය තර්ක"],["sociolinguistic variation","සෝසියෝලිංග්විස්ටික් වෙරියේෂන්","සමාජය අනුව භාෂා වෙනස්කම්","සමාජ භාෂා විද්‍යාව"],["paraphrase","පැරෆ්‍රේස්","වෙනත් වචනවලින් ප්‍රකාශ කිරීම","පෙළ නැවත සැකසීම"],["pragmatics","ප්‍රැග්මැටික්ස්","භාෂා භාවිතයේ සන්දර්භ අධ්‍යයනය","ප්‍රායෝගික භාෂා විද්‍යාව"],["stance","ස්ටෑන්ස්","කථකයාගේ ස්ථාවරය","කථන ස්ථාවරය"],["refutation","රෙෆියුටේෂන්","තර්කයක් ප්‍රතික්ෂේප කිරීම","වාද විවාද"],["credibility","ක්‍රෙඩිබිලිටි","විශ්වසනීයත්වය","මූලාශ්‍ර ඇගයීම"],["transposition","ට්‍රාන්ස්පසිෂන්","අර්ථය රැකගෙන වෙනත් ව්‍යුහයකට මාරු කිරීම","පරිවර්තන ක්‍රම"],["semantic scope","සිමැන්ටික් ස්කෝප්","අර්ථමය පරාසය","වාක්‍ය ව්‍යුහය සහ අර්ථය"],["intertextuality","ඉන්ටර්ටෙක්ස්චුවැලිටි","පෙළ අතර අන්තර් සම්බන්ධතාව","සාහිත්‍ය හා සංස්කෘතික ඉඟි"],["mitigation","මිටිගේෂන්","ප්‍රකාශයේ තීව්‍රතාව අඩු කිරීම","සංවාදයේ මෘදුකරණය"],["interpretation","ඉන්ටර්ප්‍රිටේෂන්","අර්ථකථනය","අර්ථකථන ක්‍රම"],["consistency","කන්සිස්ටන්සි","අනුකූලතාව","තර්කයේ අනුකූලතාව"]];
const SERBIAN_AUDIO = [["Iako je formulacija jasna, njena implikatura zavisi od odnosa među sagovornicima.","ඉයකො යෙ ෆොර්මුලාට්සියා යාස්නා, න්යෙනා ඉම්ප්ලිකාතුරා සාවිසි ඔද් ඔද්නොසා මෙජු සාගොවොර්නිට්සිමා.","ප්‍රකාශන රටාව පැහැදිලි වුවද, එහි ව්‍යංගාර්ථය කථකයන් අතර සම්බන්ධතාව මත රඳා පවතී."],["Ne možemo prihvatiti zaključak bez provere njegovih pretpostavki.","නෙ මොෂෙමො ප්‍රිහ්වාතිති සාක්ල්යුචාක් බෙස් ප්‍රොවෙරෙ න්යෙගොවිහ් ප්‍රෙට්පොස්තාව්කි.","එහි උපකල්පන පරීක්ෂා නොකර අපට එම නිගමනය පිළිගත නොහැකිය."],["Urednik je sačuvao koheziju teksta, ali je promenio redosled pasusa.","උරෙද්නික් යෙ සාචුවාඔ කොහෙසියු ටෙක්ස්තා, අලි යෙ ප්‍රොමෙනියො රෙදොස්ලෙද් පාසුසා.","සංස්කාරකයා පෙළේ සම්බන්ධතාව රැකගෙන ඡේද අනුපිළිවෙළ වෙනස් කළේය."],["Pravna mera mora biti proporcionalna legitimnom cilju.","ප්‍රාව්නා මෙරා මොරා බිති ප්‍රොපෝර්ට්සියොනාල්නා ලෙගිතිම්නොම් ට්සිල්යු.","නීතිමය පියවර නීත්‍යනුකූල අරමුණට අනුපාතික විය යුතුය."],["Pouzdan izvor jasno razlikuje činjenice od tumačenja.","පොඋස්දාන් ඉස්වොර් යාස්නො රාලිකුයෙ චින්යෙනිට්සෙ ඔද් තුමාචෙන්යා.","විශ්වසනීය මූලාශ්‍රයක් කරුණු සහ අර්ථකථන පැහැදිලිව වෙන් කරයි."],["U debati je važno odgovoriti na najjači protivargument.","උ දෙබාති යෙ වාෂ්නො ඔද්ගොවොරිති නා නාය්යාචි ප්‍රොතිව්ආර්ගුමෙන්ට්.","වාදයකදී ශක්තිමත්ම ප්‍රතිතර්කයට පිළිතුරු දීම වැදගත්ය."]];
const ENGLISH_AUDIO = [["Although the wording is clear, its implicature depends on the relationship between the speakers.","ඕල්දෝ ද වර්ඩිං ඉස් ක්ලියර්, ඉට්ස් ඉම්ප්ලිකචර් ඩිපෙන්ඩ්ස් ඔන් ද රිලේෂන්ෂිප් බිට්වීන් ද ස්පීකර්ස්.","වචන පැහැදිලි වුවද, එහි ව්‍යංගාර්ථය කථකයන් අතර සම්බන්ධතාව මත රඳා පවතී."],["We cannot accept the conclusion without examining its assumptions.","වී කැන්නොට් ඇක්සෙප්ට් ද කන්ක්ලූෂන් විදවුට් ඉග්සැමිනිං ඉට්ස් අසම්ප්ෂන්ස්.","එහි උපකල්පන පරීක්ෂා නොකර අපට එම නිගමනය පිළිගත නොහැකිය."],["The editor preserved textual cohesion but changed the order of the paragraphs.","දි එඩිටර් ප්‍රිසර්ව්ඩ් ටෙක්ස්චුවල් කෝහීෂන් බට් චේන්ජ්ඩ් දි ඕඩර් ඔෆ් ද පැරග්‍රාෆ්ස්.","සංස්කාරකයා පෙළේ සම්බන්ධතාව රැකගෙන ඡේද අනුපිළිවෙළ වෙනස් කළේය."],["A legal measure must be proportional to a legitimate aim.","අ ලීගල් මෙෂර් මස්ට් බී ප්‍රපෝර්ෂනල් ටු අ ලිජිටිමට් ඒම්.","නීතිමය පියවර නීත්‍යනුකූල අරමුණට අනුපාතික විය යුතුය."],["A credible source clearly distinguishes facts from interpretation.","අ ක්‍රෙඩිබල් සෝර්ස් ක්ලියර්ලි ඩිස්ටිංග්විෂස් ෆැක්ට්ස් ෆ්‍රම් ඉන්ටර්ප්‍රිටේෂන්.","විශ්වසනීය මූලාශ්‍රයක් කරුණු සහ අර්ථකථන පැහැදිලිව වෙන් කරයි."],["In a debate, it is essential to address the strongest counterargument.","ඉන් අ ඩිබේට්, ඉට් ඉස් එසෙන්ෂල් ටු ඇඩ්‍රෙස් ද ස්ට්‍රොංගස්ට් කවුන්ටර්ආර්ග්‍යුමන්ට්.","වාදයකදී ශක්තිමත්ම ප්‍රතිතර්කයට පිළිතුරු දීම අත්‍යවශ්‍යය."]];
function balanceAnswerPositions(questions) {
 return questions.map((question, index) => {
  const target = index % question.options.length;
  const options = question.options.slice();
  const correct = options.splice(question.answer, 1)[0];
  options.splice(target, 0, correct);
  return { ...question, options, answer: target };
 });
}

function makeRevision(lang, rows) {
 const meanings=rows.map(row=>row[2]);
 const vocabulary=rows.slice(0,5).map((row,i)=>{
  const wrong=[meanings[(i+7)%20],meanings[(i+13)%20]];
  const options=i%3===0?[row[2],...wrong]:i%3===1?[wrong[0],row[2],wrong[1]]:[...wrong,row[2]];
  return {id:`c2-${lang}-revision-${i+1}`,type:"vocabulary",topic:`C2 · ${row[3]}`,prompt:lang==="sr"?`„${row[0]}“ යන වචනයේ නිවැරදි සිංහල අර්ථය තෝරන්න.`:`Choose the correct Sinhala meaning of “${row[0]}”.`,options,answer:options.indexOf(row[2]),explanation:`${row[0]} = ${row[2]}`,word:row[0],wordReading:row[1]};
 });
 const prompts=lang==="sr"?[
  "Koja je razlika između doslovnog značenja i implikature?",
  "Zašto je važan semantički opseg negacije?",
  "Kako najbolje označiti stepen sigurnosti u naučnoj tvrdnji?",
  "Kako treba odgovoriti na protivargument u debati?",
  "Šta je važno pri prevođenju humora između kultura?"
 ]:[
  "What is the difference between literal meaning and implicature?",
  "Why does the semantic scope of negation matter?",
  "How should certainty in an academic claim be marked?",
  "What is the strongest way to respond to a counterargument?",
  "What matters when translating humour across cultures?"
 ];
 const choices=[
  [["සෘජු අර්ථය වචනවල ප්‍රකාශිත අර්ථයයි; ව්‍යංගාර්ථය සන්දර්භයෙන් අනුමාන කරයි.","දෙකම සැමවිටම එකම අර්ථයයි.","ව්‍යංගාර්ථය ව්‍යාකරණ නීතියක් පමණි."],0,"ව්‍යංගාර්ථය සන්දර්භය හා කථකයාගේ අරමුණ මත අනුමාන කරයි."],
  [["එය වාක්‍යයේ කුමන කොටස ප්‍රතික්ෂේප කරනවාද යන්න තීරණය කරයි.","එය වචනවල අකුරු ගණන පමණක් වෙනස් කරයි.","එය කථන ස්වරයට කිසිදු බලපෑමක් නැත."],0,"නිෂේධනයේ පරාසය වෙනස් වීමෙන් ප්‍රකාශයේ අර්ථය වෙනස් විය හැකිය."],
  [["නිශ්චිත සාක්ෂි සහ අවිනිශ්චිතතාව පැහැදිලිව සලකුණු කිරීම.","සෑම නිගමනයක්ම නිරපේක්ෂ සත්‍යයක් ලෙස දැක්වීම.","විකල්ප පැහැදිලි කිරීම් නොසලකා හැරීම."],0,"සාක්ෂිවල ශක්තියට ගැළපෙන ලෙස නිශ්චිතභාවය දක්වන්න."],
  [["එහි ශක්තිමත්ම කරුණ සාධාරණව සාරාංශ කර සාක්ෂි සමඟ පිළිතුරු දීම.","ප්‍රතිවාදියාගේ අදහස විකෘති කිරීම.","පුද්ගලික විවේචනයකට මාරු වීම."],0,"ශක්තිමත් ප්‍රතිතර්කය නිවැරදිව හඳුනාගෙන සාක්ෂි මත පිළිතුරු දෙන්න."],
  [["සංස්කෘතික ඉඟි, ප්‍රේක්ෂකයා සහ අරමුණට ගැළපෙන බලපෑමට.","වචන පමණක් වචනයෙන් වචනයට මාරු කිරීමට.","මුල් සන්දර්භය ඉවත් කිරීමට."],0,"හාස්‍යයේ අර්ථය සංස්කෘතික දැනුම සහ සන්දර්භය මත රඳා පවතී."]
 ];
 const concepts=prompts.map((prompt,i)=>({id:`c2-${lang}-revision-${i+6}`,type:"discourse",topic:"C2 · උසස් අර්ථකථනය සහ තර්කය",prompt,options:choices[i][0],answer:choices[i][1],explanation:choices[i][2],word:null,wordReading:null}));
 return balanceAnswerPositions(vocabulary.concat(concepts));
}
function makeFinal(lang, rows, audioItems) {
 const vocabulary=rows.slice(0,10).map((row,i)=>{
  const pool=rows.filter((_,j)=>j!==i).map(item=>item[2]);
  const answer=(i*3)%4;
  const base=[row[2],pool[(i*2)%pool.length],pool[(i*2+5)%pool.length],pool[(i*2+9)%pool.length]];
  const options=base.slice(answer).concat(base.slice(0,answer));
  return {id:`c2-${lang}-final-${i+1}`,type:"vocabulary",prompt:lang==="sr"?`„${row[0]}“ යන වචනයේ නිවැරදි සිංහල අර්ථය තෝරන්න.`:`Choose the correct Sinhala meaning of “${row[0]}”.`,audio:null,reading:null,word:row[0],wordReading:row[1],options,answer:options.indexOf(row[2]),explanation:`${row[0]} = ${row[2]}`};
 });
 const prompts=lang==="sr"?[
  "Šta određuje semantički opseg negacije u ovoj rečenici?",
  "Koji postupak najbolje čuva koheziju teksta?",
  "Šta zahteva proporcionalnost pravne mere?",
  "Kako odgovorno predstaviti tvrdnju koja nije potpuno izvesna?"
 ]:[
  "What determines the semantic scope of negation in a sentence?",
  "Which approach best preserves textual cohesion?",
  "What does proportionality of a legal measure require?",
  "How should a claim with uncertainty be presented responsibly?"
 ];
 const grammar=[
  [["සම්පූර්ණ ප්‍රකාශයම","වාක්‍යයේ නිශ්චිත කොටසක්; ව්‍යුහය අනුව වෙනස් වේ","කථකයාගේ වයස"],1,"නිෂේධනයේ පරාසය වාක්‍ය ව්‍යුහය හා අර්ථ සම්බන්ධතා මත තීරණය වේ."],
  [["සම්බන්ධක හා යොමු කිරීම් අර්ථවත් ලෙස පවත්වා ගැනීම","සියලු සම්බන්ධක ඉවත් කිරීම","සෑම වාක්‍යයක්ම වෙනම තැබීම"],0,"සම්බන්ධක, යොමු කිරීම් සහ තොරතුරු අනුපිළිවෙළ පෙළ සම්බන්ධතාව ගොඩනඟයි."],
  [["පියවර අරමුණට සාධාරණ හා සමානුපාතික වීම","දඬුවම හැකි තරම් දැඩි වීම","සන්දර්භය නොසලකා හැරීම"],0,"නීතිමය පියවර නීත්‍යනුකූල අරමුණට ගැළපෙන හා අනුපාතික විය යුතුය."],
  [["සාක්ෂිවල සීමා සහ විකල්ප අර්ථකථන පැහැදිලි කිරීම","අනුමානය නිශ්චිත සත්‍යයක් ලෙස දැක්වීම","සාක්ෂි සඳහන් නොකිරීම"],0,"අවිනිශ්චිතතාව නිවැරදිව දැක්වීම විද්‍යාත්මක වගකීමකි."]
 ];
 const concepts=prompts.map((prompt,i)=>({id:`c2-${lang}-final-${i+11}`,type:"grammar",prompt,audio:null,reading:null,word:null,wordReading:null,options:grammar[i][0],answer:grammar[i][1],explanation:grammar[i][2]}));
 const listening=audioItems.map((item,i)=>({id:`c2-${lang}-final-${i+15}`,type:"listening",prompt:"සවන් දී නිවැරදි සිංහල අර්ථය තෝරන්න.",audio:item[0],reading:item[1],word:null,wordReading:null,options:[item[2],rows[(i+4)%rows.length][2],rows[(i+9)%rows.length][2]],answer:0,explanation:item[2]}));
 return balanceAnswerPositions(vocabulary.concat(concepts,listening));
}
export const SERBIAN_C2_MIXED_REVISION = makeRevision("sr", SERBIAN_TERMS);
export const ENGLISH_C2_MIXED_REVISION = makeRevision("en", ENGLISH_TERMS);
export const SERBIAN_C2_FINAL_EXAM = makeFinal("sr", SERBIAN_TERMS, SERBIAN_AUDIO);
export const ENGLISH_C2_FINAL_EXAM = makeFinal("en", ENGLISH_TERMS, ENGLISH_AUDIO);
