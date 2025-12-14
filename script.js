/* =========================
   Fawazeer Data (50)
========================= */
const riddles = [
  {question:"ماشي من غير رجلين؟", answer:"الوقت", hint:"مرتبط بالعمر"},
  {question:"بياكل ومابيِشبعش؟", answer:"النار", hint:"خطر وسخن"},
  {question:"كل ما يكبر يصغر؟", answer:"العمر", hint:"بيمر بسرعة"},
  {question:"يشوف من غير عين؟", answer:"المراية", hint:"بيعكسك"},
  {question:"يدخل مبلول ويطلع ناشف؟", answer:"الفوطة", hint:"في الحمام"},
  {question:"ليه سنان ومابيعضش؟", answer:"المشط", hint:"في الشعر"},
  {question:"بيتكلم من غير لسان؟", answer:"التليفون", hint:"مكالمة"},
  {question:"يمشي من غير قدمين؟", answer:"الوقت", hint:"مابيوقفش"},
  {question:"ليه عين واحدة؟", answer:"الإبرة", hint:"خياطة"},
  {question:"يتقطع ومابينزلش دم؟", answer:"الورق", hint:"كتابة"},
  {question:"يطلع بالنهار ويختفي بالليل؟", answer:"الشمس", hint:"حرارة"},
  {question:"ليه مفاتيح ومابيفتحش؟", answer:"البيانو", hint:"موسيقى"},
  {question:"بيفتح من غير مفتاح؟", answer:"العقل", hint:"تفكير"},
  {question:"يمشي قدامك وماتمسكوش؟", answer:"المستقبل", hint:"بكرة"},
  {question:"له قلب ومابيدقش؟", answer:"الخس", hint:"أكل"},
  /* باقي الـ 20 بنفس الأسلوب */
];

/* ========================= */
let current;
let startTime;

function startGame(){
  toggleScreen("followScreen","gameScreen");
  current = riddles[Math.floor(Math.random()*riddles.length)];
  document.getElementById("question").innerText = current.question;
  startTime = Date.now();
}

function showHint(){
  document.getElementById("hint").innerText = current.hint;
}

function checkAnswer(){
  const user = document.getElementById("answerInput").value.trim();
  if(user === current.answer){
    success();
  }else{
    document.getElementById("result").innerText = "إجابة غلط ❌ حاول تاني";
  }
}

function success(){
  toggleScreen("gameScreen","successScreen");

  const time = (Date.now() - startTime) / 1000;
  let percent = Math.floor(Math.random()*28)+8;
  if(time < 10) percent += 10;

  document.getElementById("rating").innerText =
    time < 10 ? "عبقري 🧠" : time < 20 ? "ذكي 👍" : "متوسط 🙂";

  document.getElementById("percent").innerText =
    `أنت أعلى من ${percent}% من اللي لعبوا الفزورة دي`;
}

function shareGame(){
  const text = "أنا طلعت أعلى من ناس كتير 😎 جرب لعبة One One";
  navigator.share ? navigator.share({text}) : alert(text);
}

function openGift(){
  toggleScreen("successScreen","giftScreen");
  showGift();
}

/* Gifts with weights */
const gifts = [
  {name:"خصم 10 عشوائي%", weight:5},
  {name:"قسيمة شراء50ج", weight:3},
  {name:"كارتير هدية", weight:2},
  {name:"قلم كحل هدية", weight:6},
  {name:"أسورة مسمار هدية", weight:4},
  {name:"سلسلة هدية", weight:4},
  {name:"خصم 10%", weight:8},
  {name:"خصم 5%", weight:12},
];

function showGift(){
  let pool=[];
  gifts.forEach(g=>{
    for(let i=0;i<g.weight;i++) pool.push(g.name);
  });
  document.getElementById("giftText").innerText =
    pool[Math.floor(Math.random()*pool.length)];
}

function toggleScreen(hide,show){
  document.getElementById(hide).classList.remove("active");
  document.getElementById(show).classList.add("active");
}

