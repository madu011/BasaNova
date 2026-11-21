// C2 cumulative revision and final practice assessments for Serbian and English.
// Sinhala-script readings are approximate learner guides, not phonetic transcription.
const SERBIAN_TERMS = [["implikatura","ඉම්ප්ල්ඉක්අට්උර්අ","ව්‍යංගාර්ථය","C2 · 1 · Pragmatičko značenje i posredna poruka"],["uokviravanje","උඔක්ව්ඉර්අව්අන්ය්එ","අර්ථ රාමුව සකස් කිරීම","C2 · 4 · Retoričko uokviravanje i struktura ubeđivanja"],["aluzija","අල්උස්ඉය්අ","සෘජුව නොකියන සාහිත්‍ය සඳහන","C2 · 6 · Složene književne aluzije i intertekstualnost"],["ekvivalentnost","එක්ව්ඉව්අල්එන්ට්න්ඔස්ට්","සමාන අර්ථමය ගැළපීම","C2 · 9 · Suptilan prevod i kulturna ekvivalentnost"],["referent","ර්එෆ්එර්එන්ට්","යොමු වස්තුව","C2 · 11 · Filozofija jezika i pojmovna preciznost"],["triangulacija","ට්ර්ඉඅන්ග්උල්අට්ස්ඉය්අ","බහු මූලාශ්‍ර සාක්ෂි සැසඳීම","C2 · 14 · Akademska sinteza suprotstavljenih dokaza"],["semantički pomak","ස්එම්අන්ට්ඉච්ක්ඉ ප්ඔම්අක්","අර්ථමය වෙනස්වීම","C2 · 16 · Semantička promena i istorijska lingvistika"],["dijalektika","ඩ්ඉය්අල්එක්ට්ඉක්අ","විරුද්ධ අදහස් අතර විමර්ශනය","C2 · 19 · Stručni dijalog i integrisani učinak na nivou C2"],["tematizacija","තෙමාතිසාට්සියා","මාතෘකාව ඉදිරිපත් කිරීම","C2 · 22 · Diskursni markeri i informacijska struktura"],["neprevodivost","නෙප්‍රෙවොදිවොස්ත්","සෘජුව පරිවර්තනය කළ නොහැකි බව","C2 · 24 · Filozofija prevođenja i neprevodivost"],["recenzija","රෙට්සෙන්සියා","ශාස්ත්‍රීය සමාලෝචනය","C2 · 27 · Akademska recenzija i urednička odluka"],["satira","සාතිරා","උපහාසාත්මක විවේචනය","C2 · 29 · Humor, satira i međukulturni prenos"],["odredba","ඔද්‍රෙද්බා","ගිවිසුම් වගන්තිය","C2 · 32 · Ugovorni jezik i preciznost normativnog teksta"],["registar","රෙගිස්තාර්","භාෂා භාවිත මට්ටම","C2 · 35 · Promena registra i strateško prebacivanje koda"],["ustupak","උස්තුපාක්","සහනයක් ලබාදීම","C2 · 37 · Pregovarački diskurs i upravljanje ustupcima"],["simultano prevođenje","සිමුල්තානො ප්‍රෙවොජෙන්යේ","සමකාලීන පරිවර්තනය","C2 · 40 · Simultano prevođenje i kognitivno opterećenje"],["standardizacija","ස්තන්දර්දිසාට්සියා","ප්‍රමිතිකරණය","C2 · 42 · Sociolingvistička varijacija i jezička politika"],["kohezija","කොහෙසියා","පාඨ සම්බන්ධතාව","C2 · 45 · Tekstualna kohezija i organizacija informacija"],["krizno saopštenje","ක්‍රිස්නො සාඔප්ෂ්තෙන්යේ","අර්බුද නිවේදනය","C2 · 47 · Krizna komunikacija i poverenje javnosti"],["integrisana kompetencija","ඉන්ටෙග්‍රිසානා කොම්පෙතෙන්ට්සියා","ඒකාබද්ධ නිපුණතාව","C2 · 50 · C2 završni projekat: integrisana stručna komunikacija"]];
const ENGLISH_TERMS = [["implicature","ඉම්ප්ල්ඉක්ඇට්අර්එ","ව්‍යංගාර්ථය","C2 · 1 · Pragmatic implicature and indirect meaning"],["framing","ෆ්ර්ඇම්ඉන්ග්","අර්ථ රාමුව සකස් කිරීම","C2 · 4 · Rhetorical framing and persuasive architecture"],["allusion","ඇල්ල්අස්ඉඔන්","සෘජුව නොකියන සාහිත්‍ය සඳහන","C2 · 6 · Complex literary allusion and intertextuality"],["equivalence","එක්අඉව්ඇල්එන්ක්එ","සමාන අර්ථමය ගැළපීම","C2 · 9 · Nuanced translation and cultural equivalence"],["referent","ර්එෆ්එර්එන්ට්","යොමු වස්තුව","C2 · 11 · Philosophy of language and conceptual precision"],["triangulation","ට්ර්ඉඇන්ග්අල්ඇෂන්","බහු මූලාශ්‍ර සාක්ෂි සැසඳීම","C2 · 14 · Academic synthesis across conflicting evidence"],["semantic shift","ස්එම්ඇන්ට්ඉක් ෂ්ඉෆ්ට්","අර්ථමය වෙනස්වීම","C2 · 16 · Semantic change and historical linguistics"],["dialectic","ඩ්ඉඇල්එක්ට්ඉක්","විරුද්ධ අදහස් අතර විමර්ශනය","C2 · 19 · Expert dialogue and integrated C2 performance"],["thematization","තීමටයිසේෂන්","මාතෘකාව ඉදිරිපත් කිරීම","C2 · 22 · Discourse markers and information structure"],["untranslatability","අන්ස්ට්‍රාන්ස්ලේටබිලිටි","සෘජුව පරිවර්තනය කළ නොහැකි බව","C2 · 24 · Philosophy of translation and untranslatability"],["peer review","පියර් රිවියූ","ශාස්ත්‍රීය සමාලෝචනය","C2 · 27 · Advanced academic peer review and editorial decisions"],["satire","සැටයර්","උපහාසාත්මක විවේචනය","C2 · 29 · Humour, satire and intercultural transfer"],["clause","ක්ලෝස්","ගිවිසුම් වගන්තිය","C2 · 32 · Contractual language and normative precision"],["register","රෙජිස්ටර්","භාෂා භාවිත මට්ටම","C2 · 35 · Register shifting and strategic code-switching"],["concession","කන්සෙෂන්","සහනයක් ලබාදීම","C2 · 37 · Negotiation discourse and managing concessions"],["simultaneous interpreting","සිමල්ටේනියස් ඉන්ටර්ප්‍රිටිං","සමකාලීන පරිවර්තනය","C2 · 40 · Simultaneous interpreting and cognitive load"],["standardization","ස්ටැන්ඩර්ඩයිසේෂන්","ප්‍රමිතිකරණය","C2 · 42 · Sociolinguistic variation and language policy"],["cohesion","කොහීෂන්","පාඨ සම්බන්ධතාව","C2 · 45 · Textual cohesion and information structure"],["crisis statement","ක්‍රයිසිස් ස්ටේට්මන්ට්","අර්බුද නිවේදනය","C2 · 47 · Crisis communication and public trust"],["integrated competence","ඉන්ටග්‍රේටඩ් කොම්පිටන්ස්","ඒකාබද්ධ නිපුණතාව","C2 · 50 · C2 capstone: integrated expert communication"]];
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
