/* =========================================================
   جواز سفر اللغوي — منطق التطبيق
   لا حاجة لأي إطار عمل، كله جافاسكريبت خالص + localStorage
   ========================================================= */

const STORAGE_KEY = "lisan-passport-v1";

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) return JSON.parse(raw);
  } catch (e) { /* تجاهل */ }
  return { langs: {}, };
}
function saveState() { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }

function ensureLangState(lang) {
  if (!state.langs[lang]) {
    state.langs[lang] = { stamps: [], streak: 0, lastStudyDate: null, learned: [], myWords: [] };
  }
  return state.langs[lang];
}

let state = loadState();
let currentLang = null;
let flashIndex = 0;
let flashOrder = [];
let quizIndex = 0;
let quizOrder = [];
let quizScore = 0;

/* ---------- أدوات مساعدة ---------- */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function todayKey() { return new Date().toISOString().slice(0, 10); }
function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

/* ---------- التنقل ---------- */
function openLanguage(lang) {
  currentLang = lang;
  ensureLangState(lang);
  bumpStreak(lang);

  const meta = LANG_META[lang];
  const screen = document.getElementById("lang-screen");
  screen.dataset.activeLang = lang;
  screen.className = "active";
  screen.classList.add("font-" + meta.font);

  document.getElementById("lang-native").textContent = meta.native;
  document.getElementById("lang-title").textContent = "صفحة " + meta.name;
  document.title = "جواز سفر اللغوي — " + meta.name;

  const lines = WELCOME_LINES[lang];
  document.getElementById("welcome-line").textContent = lines[Math.floor(Math.random() * lines.length)];

  renderStreak();
  renderWordOfDay();
  setupFlashcards();
  setupQuiz();
  renderMyWords();
  renderStamps();
  renderMastery();

  switchTab("wod");
  document.getElementById("cover-screen").style.display = "none";
  window.scrollTo(0, 0);
}

function goToCover() {
  document.getElementById("lang-screen").className = "";
  document.getElementById("cover-screen").style.display = "flex";
  currentLang = null;
}

function bumpStreak(lang) {
  const s = ensureLangState(lang);
  const today = todayKey();
  if (s.lastStudyDate === today) return;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  s.streak = s.lastStudyDate === yesterday ? s.streak + 1 : 1;
  s.lastStudyDate = today;
  saveState();
}

function renderStreak() {
  const s = ensureLangState(currentLang);
  document.getElementById("streak-count").textContent = s.streak;
}

/* ---------- كلمة اليوم ---------- */
function renderWordOfDay() {
  const list = VOCAB[currentLang];
  const dayIndex = Math.abs(hashCode(todayKey() + currentLang)) % list.length;
  const item = list[dayIndex];
  const wrap = document.getElementById("word-of-day");
  wrap.innerHTML = `
    <div class="eyebrow">كلمة اليوم</div>
    <div class="big-word">${item.word}</div>
    ${item.translit ? `<div class="translit">${item.translit}</div>` : ""}
    <div class="meaning">${item.meaning}</div>
    <div class="example">${item.example}<br>${item.example_ar}</div>
  `;
}
function hashCode(str) {
  let h = 0;
  for (let i = 0; i < str.length; i++) { h = (h << 5) - h + str.charCodeAt(i); h |= 0; }
  return h;
}

/* ---------- البطاقات التعليمية ---------- */
function setupFlashcards() {
  flashOrder = shuffle(VOCAB[currentLang].map((_, i) => i));
  flashIndex = 0;
  renderFlashcard();
}
function renderFlashcard() {
  const list = VOCAB[currentLang];
  const item = list[flashOrder[flashIndex]];
  const s = ensureLangState(currentLang);
  document.getElementById("flash-progress").textContent =
    `البطاقة ${flashIndex + 1} من ${list.length} — تم إتقان ${s.learned.length} كلمة`;

  const card = document.getElementById("flashcard");
  card.classList.remove("flipped");
  const front = document.getElementById("flash-front");
  const back = document.getElementById("flash-back");
  front.innerHTML = `<span class="tag">${item.tag}</span><span class="word">${item.word}</span><span class="hint">اضغط لرؤية المعنى</span>`;
  back.innerHTML = `<span class="tag">${item.tag}</span><span class="word">${item.meaning}</span><span class="example-back">${item.example}</span>`;
}
function flipCard() { document.getElementById("flashcard").classList.toggle("flipped"); }
function nextFlash(markLearned) {
  const list = VOCAB[currentLang];
  const item = list[flashOrder[flashIndex]];
  if (markLearned) {
    const s = ensureLangState(currentLang);
    if (!s.learned.includes(item.word)) s.learned.push(item.word);
    saveState();
    renderMastery();
    maybeAwardStamp();
  }
  flashIndex = (flashIndex + 1) % flashOrder.length;
  renderFlashcard();
}

/* ---------- الاختبار السريع ---------- */
function setupQuiz() {
  quizOrder = shuffle(VOCAB[currentLang].map((_, i) => i)).slice(0, 8);
  quizIndex = 0;
  quizScore = 0;
  renderQuiz();
}
function renderQuiz() {
  const list = VOCAB[currentLang];
  const box = document.getElementById("quiz-box");
  if (quizIndex >= quizOrder.length) {
    box.innerHTML = `
      <div class="quiz-question">انتهى الاختبار 🎉</div>
      <div class="quiz-score">نتيجتك: ${quizScore} من ${quizOrder.length}</div>
      <button class="pill-btn quiz-next" onclick="setupQuiz()">اختبار جديد</button>`;
    if (quizScore >= Math.ceil(quizOrder.length * 0.7)) maybeAwardStamp();
    return;
  }
  const item = list[quizOrder[quizIndex]];
  const wrongPool = shuffle(list.filter((w) => w.word !== item.word)).slice(0, 3).map((w) => w.meaning);
  const options = shuffle([item.meaning, ...wrongPool]);
  box.innerHTML = `
    <div class="quiz-question">${item.word}</div>
    <div class="quiz-options">
      ${options.map((opt) => `<button class="quiz-opt" data-correct="${opt === item.meaning}">${opt}</button>`).join("")}
    </div>
    <div class="quiz-score">السؤال ${quizIndex + 1} من ${quizOrder.length} — النقاط: ${quizScore}</div>
  `;
  box.querySelectorAll(".quiz-opt").forEach((btn) => {
    btn.addEventListener("click", () => handleQuizAnswer(btn));
  });
}
function handleQuizAnswer(btn) {
  const correct = btn.dataset.correct === "true";
  document.querySelectorAll(".quiz-opt").forEach((b) => {
    b.disabled = true;
    if (b.dataset.correct === "true") b.classList.add("correct");
    else if (b === btn) b.classList.add("wrong");
  });
  if (correct) quizScore++;
  setTimeout(() => { quizIndex++; renderQuiz(); }, 700);
}

/* ---------- أضف كلمتك ---------- */
function setupMyWordForm() {
  const form = document.getElementById("add-word-form");
  form.onsubmit = (e) => {
    e.preventDefault();
    const word = document.getElementById("mw-word").value.trim();
    const meaning = document.getElementById("mw-meaning").value.trim();
    const example = document.getElementById("mw-example").value.trim();
    if (!word || !meaning) return;
    const s = ensureLangState(currentLang);
    s.myWords.push({ word, meaning, example });
    saveState();
    form.reset();
    renderMyWords();
    maybeAwardStamp();
  };
}
function renderMyWords() {
  const s = ensureLangState(currentLang);
  const wrap = document.getElementById("my-words-list");
  if (!s.myWords.length) { wrap.innerHTML = `<div class="no-stamps">لم تُضِف كلمات خاصة بعد.</div>`; return; }
  wrap.innerHTML = s.myWords.map((w, i) => `
    <div class="my-word-item">
      <span><strong>${w.word}</strong> — ${w.meaning}</span>
      <button onclick="deleteMyWord(${i})">حذف</button>
    </div>
  `).join("");
}
function deleteMyWord(i) {
  const s = ensureLangState(currentLang);
  s.myWords.splice(i, 1);
  saveState();
  renderMyWords();
}

/* ---------- الأختام / الإنجاز ---------- */
const STAMP_MILESTONES = [1, 5, 10, 15, 20];
function maybeAwardStamp() {
  const s = ensureLangState(currentLang);
  const progress = s.learned.length + s.myWords.length;
  STAMP_MILESTONES.forEach((m) => {
    const id = "milestone-" + m;
    if (progress >= m && !s.stamps.find((st) => st.id === id)) {
      s.stamps.push({ id, label: m + " كلمة", date: todayKey() });
    }
  });
  saveState();
  renderStamps();
}
function renderStamps() {
  const s = ensureLangState(currentLang);
  const wrap = document.getElementById("stamps-grid");
  if (!s.stamps.length) { wrap.innerHTML = `<div class="no-stamps">أنجز أول بطاقة أو اختبار لتحصل على أول ختم!</div>`; return; }
  wrap.innerHTML = s.stamps.map((st, i) => `
    <div class="stamp" style="--rot:${(i % 2 === 0 ? -1 : 1) * (6 + i * 2)}deg">
      <div class="num">${st.label.split(" ")[0]}</div>
      <div>كلمة</div>
      <div style="font-size:8px;opacity:.7">${st.date}</div>
    </div>
  `).join("");
}
function renderMastery() {
  const s = ensureLangState(currentLang);
  const total = VOCAB[currentLang].length;
  const pct = Math.min(100, Math.round((s.learned.length / total) * 100));
  document.getElementById("mastery-fill").style.width = pct + "%";
  document.getElementById("mastery-label").textContent = `أتقنت ${s.learned.length} من ${total} كلمة (${pct}%)`;
}

/* ---------- التبويبات ---------- */
function switchTab(tab) {
  document.querySelectorAll(".tab-btn").forEach((b) => b.classList.toggle("active", b.dataset.tab === tab));
  document.querySelectorAll(".tab-panel").forEach((p) => p.classList.toggle("active", p.id === "panel-" + tab));
}

/* ---------- ربط الأحداث عند التحميل ---------- */
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lang-stamp-btn").forEach((btn) => {
    btn.addEventListener("click", () => openLanguage(btn.dataset.lang));
  });
  document.getElementById("back-to-cover").addEventListener("click", goToCover);
  document.querySelectorAll(".tab-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });
  document.getElementById("flashcard").addEventListener("click", flipCard);
  document.getElementById("btn-know").addEventListener("click", () => nextFlash(true));
  document.getElementById("btn-again").addEventListener("click", () => nextFlash(false));
  setupMyWordForm();
});
