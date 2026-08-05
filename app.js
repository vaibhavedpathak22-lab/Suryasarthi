'use strict';

/* ── 12 Poses + Mantras ─────────────────────────────────────── */
const STEPS = [
  { pose:"Pranamasana",           sub:"Prayer pose",                  breath:"Exhale", breathClass:"exhale", mantra:"Om Mitraya Namaha",          meaning:"Salutations to the friend of all",             mantraD:"ॐ मित्राय नमः" },
  { pose:"Hasta Uttanasana",      sub:"Raised arms pose",             breath:"Inhale", breathClass:"inhale", mantra:"Om Ravaye Namaha",            meaning:"Salutations to the shining one",               mantraD:"ॐ रवये नमः" },
  { pose:"Hasta Padasana",        sub:"Hand to foot pose",            breath:"Exhale", breathClass:"exhale", mantra:"Om Suryaya Namaha",           meaning:"Salutations to the dispeller of darkness",     mantraD:"ॐ सूर्याय नमः" },
  { pose:"Ashwa Sanchalanasana",  sub:"Equestrian — right leg back",  breath:"Inhale", breathClass:"inhale", mantra:"Om Bhanave Namaha",           meaning:"Salutations to the one who illumines",         mantraD:"ॐ भानवे नमः" },
  { pose:"Dandasana",             sub:"Stick pose / plank",           breath:"Hold",   breathClass:"hold",   mantra:"Om Khagaya Namaha",           meaning:"Salutations to the one who moves through sky", mantraD:"ॐ खगाय नमः" },
  { pose:"Ashtanga Namaskara",    sub:"Salute with eight limbs",      breath:"Exhale", breathClass:"exhale", mantra:"Om Pushne Namaha",            meaning:"Salutations to the giver of nourishment",     mantraD:"ॐ पूष्णे नमः" },
  { pose:"Bhujangasana",          sub:"Cobra pose",                   breath:"Inhale", breathClass:"inhale", mantra:"Om Hiranya Garbhaya Namaha",  meaning:"Salutations to the golden cosmic self",        mantraD:"ॐ हिरण्यगर्भाय नमः" },
  { pose:"Adho Mukha Svanasana",  sub:"Downward facing dog",          breath:"Exhale", breathClass:"exhale", mantra:"Om Marichaye Namaha",         meaning:"Salutations to the lord of the dawn",          mantraD:"ॐ मरीचये नमः" },
  { pose:"Ashwa Sanchalanasana",  sub:"Equestrian — left leg back",   breath:"Inhale", breathClass:"inhale", mantra:"Om Adityaya Namaha",          meaning:"Salutations to the son of cosmic mother",      mantraD:"ॐ आदित्याय नमः" },
  { pose:"Hasta Padasana",        sub:"Hand to foot pose",            breath:"Exhale", breathClass:"exhale", mantra:"Om Savitre Namaha",           meaning:"Salutations to the lord of creation",          mantraD:"ॐ सवित्रे नमः" },
  { pose:"Hasta Uttanasana",      sub:"Raised arms pose",             breath:"Inhale", breathClass:"inhale", mantra:"Om Arkaya Namaha",            meaning:"Salutations to the form of the sun",           mantraD:"ॐ अर्काय नमः" },
  { pose:"Pranamasana",           sub:"Prayer pose",                  breath:"Exhale", breathClass:"exhale", mantra:"Om Bhaskaraya Namaha",        meaning:"Salutations to the one who leads to enlightenment", mantraD:"ॐ भास्कराय नमः" }
];

const CIRC = 2 * Math.PI * 98;
const KEY  = "surya-v36";

/* ── Config ─────────────────────────────────────────────────── */
let cfg = {
  programName   : "सूर्यसारथी - १०८",
  dailyIncrease : 4,
  maxSets       : 108,
  breakEvery    : 12,
  voiceOn       : true,
  mantrasOn     : true,
  breathOn      : true,
  autoOn        : true,
  poseSeconds   : 5,
  graceSeconds  : 5,
  chartDays         : 7,
  chartMode         : "bar",
  pranayamaMinutes  : 35,
  pranayamaAuto     : true,
  pranaLang         : "en",
  alarmOn           : true,
  alarmHour         : 5,
  alarmMinute       : 0,
  quoteLang         : "hi",
  daytimeNotifOn    : true,
  userName          : "Vaibhav",
  dietType          : "veg",
  dietNotifOn       : true,
  autoShowDietPostGoal: true,
};

/* ── Data (persisted) ───────────────────────────────────────── */
let data = {
  history          : {},   // { "YYYY-MM-DD": { sets, timeMs, goal } }
  totalAllTime     : 0,
  totalTimeMs      : 0,
  programDay       : 1,
  lastDate         : "",
  baseGoal         : 0,    // today's goal (editable); 0 = auto from programDay
  goalDate         : "",   // date baseGoal was set for; resets +4 on new day
  lastGoal         : 0,    // goal of last completed day — used for exact +4 calc
  lastCompletedGoal: 0,    // exact goal of last completed day
  lastRecoveryAt   : 0,    // totalAllTime count at which last recovery was triggered
};

/* ── Session (runtime) ──────────────────────────────────────── */
let sess = {
  active   : false,
  paused   : false,
  step     : -1,
  breakAcc : 0,
  // session stopwatch (today's goal timer)
  sessionStart  : 0,   // Date.now() when session started
  sessionPaused : 0,   // accumulated ms while paused
  pauseAt       : 0,   // Date.now() when paused
};

let poseRafHandle  = null;  // rAF for pose countdown bar
let poseTimerStart = 0;
let poseElapsed    = 0;
let clockRaf       = null;  // rAF for live clock display
let voiceMuted     = false;

/* ── Helpers ─────────────────────────────────────────────────── */
const todayKey  = () => new Date().toISOString().slice(0,10);
const dayKey    = n  => { const d=new Date(); d.setDate(d.getDate()-n); return d.toISOString().slice(0,10); };
const todayDone = () => (data.history[todayKey()]||{}).sets || 0;
const vib       = ms => { try { navigator.vibrate&&navigator.vibrate(ms); }catch(e){} };
const setStatus = t  => document.getElementById("status").textContent = t;

function fmtTime(ms) {
  const totalSec = Math.floor(ms/1000);
  const h = Math.floor(totalSec/3600);
  const m = Math.floor((totalSec%3600)/60);
  const s = totalSec % 60;
  if(h>0) return h+"h "+String(m).padStart(2,"0")+"m "+String(s).padStart(2,"0")+"s";
  if(m>0) return m+"m "+String(s).padStart(2,"0")+"s";
  return s+"s";
}

/* ── MET & Calories calculations ───────────────────────────── */
function getMetForPoseSec(poseSec) {
  const sec = poseSec || cfg.poseSeconds || 5;
  if(sec <= 3) return 11.5; // Vigorous pace (11–12 MET)
  if(sec <= 5) return 9.5;  // Moderate-fast pace (9–10 MET)
  if(sec <= 8) return 7.5;  // Moderate-slow pace (7–8 MET)
  return 5.5;               // Slow meditative pace (5–6 MET)
}

function calcSetCalories(sets, poseSec, weightKg) {
  if(!sets || sets <= 0) return 0;
  const sec = poseSec || cfg.poseSeconds || 5;
  const weight = weightKg || cfg.userWeight || 66;
  const met = getMetForPoseSec(sec);

  // Standard MET formula: Calories/min = (MET * 3.5 * Weight) / 200
  const calPerMin = (met * 3.5 * weight) / 200;

  // Exercise duration in minutes: (sets * 12 poses * sec) / 60
  const durationMinutes = (sets * 12 * sec) / 60;

  // Total Calories burned
  return calPerMin * durationMinutes;
}

function fmtCalories(kcal) {
  if(!kcal || kcal <= 0) return "0 kcal";
  if(kcal >= 1000) return (kcal / 1000).toFixed(1) + "k kcal";
  if(kcal < 10) return kcal.toFixed(1) + " kcal";
  return Math.round(kcal) + " kcal";
}

function todayCalories() {
  const done = todayDone();
  return calcSetCalories(done, cfg.poseSeconds || 5, cfg.userWeight || 66);
}

function totalCalories() {
  let totalFromHistory = 0;
  const keys = Object.keys(data.history || {});
  keys.forEach(k => {
    const rec = data.history[k];
    const sets = typeof rec === "number" ? rec : (rec.sets || 0);
    if(sets > 0) {
      totalFromHistory += calcSetCalories(sets, cfg.poseSeconds || 5, cfg.userWeight || 66);
    }
  });
  const totalFromAllTime = calcSetCalories(data.totalAllTime || 0, cfg.poseSeconds || 5, cfg.userWeight || 66);
  return Math.max(totalFromHistory, totalFromAllTime);
}

function computeStreak() {
  let s=0;
  for(let i=0;;i++){ if(todayDoneFor(dayKey(i))>0) s++; else break; }
  return s;
}
function todayDoneFor(key) { return (data.history[key]||{}).sets || 0; }

function getLastCompletedGoal() {
  if(data.lastCompletedGoal && data.lastCompletedGoal > 0)
    return data.lastCompletedGoal;
  // Search history backwards for most recent completed goal
  const keys = Object.keys(data.history || {}).sort();
  for(let i = keys.length - 1; i >= 0; i--) {
    const rec = data.history[keys[i]];
    if(rec && rec.goal > 0) {
      if(rec.sets >= rec.goal) return rec.goal;
    }
  }
  if(data.lastGoal > 0) return data.lastGoal;
  return 0;
}

function todayGoal() {
  const tk = todayKey();
  // 1. If a manual goal was explicitly set for today
  if(data.baseGoal > 0 && data.goalDate === tk)
    return Math.min(data.baseGoal, cfg.maxSets);

  // 2. If today already has a recorded goal in history
  if(data.history[tk] && data.history[tk].goal > 0) {
    const lastComp = getLastCompletedGoal();
    // If no past completed history exists, and today's auto goal was set to 8 with 0 sets completed, correct it to 4
    if(lastComp === 0 && data.history[tk].goal === 8 && (data.history[tk].sets || 0) === 0) {
      data.history[tk].goal = cfg.dailyIncrease || 4;
      saveAll();
    }
    return Math.min(data.history[tk].goal, cfg.maxSets);
  }

  // 3. Otherwise: last completed goal + dailyIncrease (+4), capped at maxSets
  const lastComp = getLastCompletedGoal();
  if(lastComp > 0) {
    return Math.min(lastComp + (cfg.dailyIncrease || 4), cfg.maxSets);
  }
  
  // 4. Starting goal for fresh start / Day 1: start at 4 counts!
  return Math.min(cfg.dailyIncrease || 4, cfg.maxSets);
}

function setTodayGoal(n) {
  data.baseGoal   = Math.max(1, Math.min(n, cfg.maxSets));
  data.goalDate   = todayKey();
  const tk        = todayKey();
  if(!data.history[tk]) data.history[tk] = { sets: 0, timeMs: 0, goal: data.baseGoal };
  else data.history[tk].goal = data.baseGoal;
  data.lastGoal   = data.baseGoal;
  data.programDay = Math.max(1, Math.round(data.baseGoal / (cfg.dailyIncrease || 4)));
  saveAll();
}

/* ── Persist ─────────────────────────────────────────────────── */
function loadAll() {
  // All previous versions — newest first so we get the most recent data
  // ALL versions ever released — newest first so best data is picked first
  const OLD_KEYS = [
    "surya-v35","surya-v34","surya-v33","surya-v32","surya-v31","surya-v30","surya-v29",
    "surya-v28","surya-v27","surya-v26","surya-v25","surya-v24","surya-v23",
    "surya-v22","surya-v21","surya-v20","surya-v19","surya-v18","surya-v17",
    "surya-v16","surya-v15","surya-v14","surya-v13","surya-v12","surya-v11",
    "surya-v10","surya-v9","surya-v8","surya-v7","surya-v6","surya-v5",
    "surya-v4","surya-v3","surya-v2","surya-v1","surya-namaskara-data-v1","surya-v0"
  ];

  // Helper: parse any save format → { cfg, data }
  function parseSave(raw) {
    const sv = JSON.parse(raw);
    if(sv.data && typeof sv.data === "object") {
      return { cfg: sv.cfg||{}, data: sv.data };
    } else if(sv.history || sv.totalAllTime !== undefined) {
      return { cfg:{}, data:{
        history      : sv.history      || {},
        totalAllTime : sv.totalAllTime || 0,
        totalTimeMs  : sv.totalTimeMs  || 0,
        programDay   : sv.programDay   || 1,
        lastDate     : sv.lastDate     || "",
        baseGoal     : sv.baseGoal     || 0,
        goalDate     : sv.goalDate     || "",
        lastGoal     : sv.lastGoal     || 0,
        lastCompletedGoal: sv.lastCompletedGoal || 0,
        lastRecoveryAt: sv.lastRecoveryAt || 0,
      }};
    }
    return null;
  }

  // Helper: normalise a history record to { sets, timeMs, goal }
  function normRec(v) {
    if(typeof v === "number") return { sets:v, timeMs:0, goal:0 };
    return { sets:v.sets||0, timeMs:v.timeMs||0, goal:v.goal||0 };
  }

  // Helper: merge one history object into data.history (keep max sets, sum time)
  function mergeHistory(src) {
    Object.keys(src).forEach(date => {
      const r = normRec(src[date]);
      if(!data.history[date]) {
        data.history[date] = r;
      } else {
        data.history[date].sets   = Math.max(data.history[date].sets||0,   r.sets);
        data.history[date].timeMs = Math.max(data.history[date].timeMs||0, r.timeMs);
        if(!data.history[date].goal && r.goal) data.history[date].goal = r.goal;
      }
    });
  }

  try {
    const TODAY = new Date().toISOString().slice(0,10);
    const curRaw = localStorage.getItem(KEY);

    if(curRaw) {
      // ── Current key exists — load it exactly, protect today's data ──────
      const sv = parseSave(curRaw);
      if(sv) {
        Object.assign(cfg,  sv.cfg  || {});
        Object.assign(data, sv.data || {});
        Object.keys(data.history).forEach(k => {
          data.history[k] = normRec(data.history[k]);
        });
        // totalAllTime, totalTimeMs, today's sets and time are AUTHORITATIVE
        // as stored — never recompute, never override. completeSet() is the
        // only function allowed to increment these.
      }

    } else {
      // ── First-time load with new key — one-time migration from old keys ──
      const allRaws = [];
      for(const ok of OLD_KEYS) {
        const r = localStorage.getItem(ok);
        if(r) allRaws.push({ key:ok, raw:r });
      }

      if(allRaws.length > 0) {
        const parsed = [];
        for(const s of allRaws) {
          try {
            const p = parseSave(s.raw);
            if(p) parsed.push({ key:s.key, ...p });
          } catch(e) { console.warn("Could not parse", s.key); }
        }

        if(parsed.length > 0) {
          // ── Pick best base: highest totalAllTime = most complete ──────────
          parsed.sort((a,b) =>
            (b.data.totalAllTime||0) - (a.data.totalAllTime||0)
          );
          const base = parsed[0];
          Object.assign(cfg,  base.cfg  || {});
          Object.assign(data, base.data || {});
          Object.keys(data.history).forEach(k => {
            data.history[k] = normRec(data.history[k]);
          });

          // ── Snapshot today's values from the BEST save BEFORE merging ────
          // "Best" for today = highest sets count for today's date
          let todayBestSets  = data.history[TODAY]?.sets   || 0;
          let todayBestTime  = data.history[TODAY]?.timeMs || 0;
          let todayBestGoal  = data.history[TODAY]?.goal   || 0;
          let bestTotalSets  = data.totalAllTime || 0;
          let bestTotalTime  = data.totalTimeMs  || 0;

          // Check all old saves for a higher today-count
          for(const p of parsed) {
            const tr = normRec(p.data.history?.[TODAY] || {});
            if(tr.sets > todayBestSets) {
              todayBestSets = tr.sets;
              todayBestTime = Math.max(todayBestTime, tr.timeMs);
            }
            if((p.data.totalAllTime||0) > bestTotalSets)
              bestTotalSets = p.data.totalAllTime;
            if((p.data.totalTimeMs||0)  > bestTotalTime)
              bestTotalTime = p.data.totalTimeMs;
          }

          // ── Merge ONLY missing past dates — never overwrite existing ──────
          for(let i = 1; i < parsed.length; i++) {
            const srcHist = parsed[i].data.history || {};
            Object.keys(srcHist).forEach(date => {
              if(date === TODAY) return;      // handle today separately
              if(!data.history[date]) {
                data.history[date] = normRec(srcHist[date]);
              }
              // Existing past dates — left untouched (base is authoritative)
            });
          }

          // ── Restore today's best values (highest sets wins) ───────────────
          data.history[TODAY] = {
            sets  : todayBestSets,
            timeMs: todayBestTime,
            goal  : todayBestGoal,
          };

          // ── Restore totals — never reduce them ───────────────────────────
          data.totalAllTime = bestTotalSets;
          data.totalTimeMs  = bestTotalTime;

          // ── Restore today's manual goal if any save has one for today ─────
          for(const s of allRaws) {
            try {
              const p = parseSave(s.raw);
              if(!p) continue;
              if(p.data.goalDate === TODAY && (p.data.baseGoal||0) > 0) {
                data.baseGoal = p.data.baseGoal;
                data.goalDate = TODAY;
                data.lastGoal = p.data.lastGoal || p.data.baseGoal;
                break;
              }
            } catch(e) {}
          }

          console.log(
            "ONE-TIME migration complete | sources:", parsed.length,
            "| totalSets:", data.totalAllTime,
            "| totalTime:", Math.round((data.totalTimeMs||0)/60000) + "min",
            "| today sets:", todayBestSets,
            "| history days:", Object.keys(data.history).length
          );

          // Save under new key immediately
          try { localStorage.setItem(KEY, JSON.stringify({cfg, data})); } catch(e){}

          // Delete old keys — migration runs exactly once
          for(const s of allRaws) {
            try { localStorage.removeItem(s.key); } catch(e){}
          }
        }
      }
    }
  } catch(e) { console.error("loadAll error:", e); }

  if (!cfg.pranayamaMinutes || cfg.pranayamaMinutes === 28) {
    cfg.pranayamaMinutes = 35;
  }

  const today = todayKey();
  if(data.lastDate && data.lastDate !== today) {
    // Count actual calendar days elapsed (handles multi-day skips)
    const last = new Date(data.lastDate + "T00:00:00");
    const now  = new Date(today         + "T00:00:00");
    const daysMissed = Math.max(1, Math.round((now - last) / 86400000));

    data.programDay = (data.programDay||1) + daysMissed;

    // For each skipped day in the gap — record non-compounded goal
    const lastComp = getLastCompletedGoal();
    for(let d = 1; d < daysMissed; d++) {
      const skipDate = new Date(last.getTime() + d * 86400000)
        .toISOString().slice(0, 10);
      if(!data.history[skipDate]) {
        const skipGoal = Math.min(lastComp + (cfg.dailyIncrease || 4), cfg.maxSets);
        data.history[skipDate] = { sets: 0, timeMs: 0, goal: skipGoal };
      }
    }

    if(data.baseGoal > 0 && data.goalDate === data.lastDate) {
      data.lastGoal = data.baseGoal;
    } else {
      for(let d = 1; d <= daysMissed + 1; d++) {
        const check = new Date(now.getTime() - d * 86400000)
          .toISOString().slice(0, 10);
        const rec = data.history[check];
        if(rec && rec.goal) { data.lastGoal = rec.goal; break; }
      }
    }

    data.baseGoal = 0;
    data.goalDate = "";
  }
  data.lastDate = today;

  // Make sure today's history entry has a recorded goal
  if(!data.history[today]) {
    data.history[today] = { sets: 0, timeMs: 0, goal: todayGoal() };
  } else if(!data.history[today].goal) {
    data.history[today].goal = todayGoal();
  }

  voiceMuted = !cfg.voiceOn;
}
function saveAll() {
  try { localStorage.setItem(KEY, JSON.stringify({cfg,data})); }
  catch(e){ setStatus("Storage full"); }
}

/* ── Voice ───────────────────────────────────────────────────── */
let voices=[], hiVoice=null;
function pickBestVoice() {
  voices = speechSynthesis.getVoices();
  hiVoice =
    voices.find(v=>v.lang==="sa-IN") ||
    voices.find(v=>v.lang==="hi-IN"&&v.localService) ||
    voices.find(v=>v.lang==="hi-IN") ||
    voices.find(v=>v.lang.startsWith("hi")) ||
    voices.find(v=>v.lang.startsWith("en-IN")) ||
    voices.find(v=>v.lang.startsWith("en")) || null;
  if(hiVoice) setStatus("Voice: "+hiVoice.name+" ("+hiVoice.lang+")");
}
window.speechSynthesis.onvoiceschanged = pickBestVoice;
if(speechSynthesis.getVoices().length>0) pickBestVoice();

/* ── Speech queue — no cancel() races ───────────────────────── */
// All utterances go through speakQ so they play one after another
// without cancelling each other.
const speechQ = [];
let speechBusy = false;

function qFlush() {
  if(speechBusy || speechQ.length === 0) return;
  speechBusy = true;
  const utt = speechQ.shift();
  const origEnd = utt.onend;
  utt.onend = (e) => {
    speechBusy = false;
    if(origEnd) origEnd(e);
    qFlush();
  };
  utt.onerror = () => { speechBusy = false; qFlush(); };
  try{ speechSynthesis.speak(utt); }catch(e){ speechBusy=false; qFlush(); }
}

function qSpeak(utt) {
  speechQ.push(utt);
  qFlush();
}

function qClear() {
  speechQ.length = 0;
  speechBusy = false;
  try{ speechSynthesis.cancel(); }catch(e){}
}

function makeMantraUtt(text) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang  = hiVoice ? hiVoice.lang : "hi-IN";
  if(hiVoice) u.voice = hiVoice;
  const sec = cfg.poseSeconds || 3;
  // Dynamically scale speed: 2s/pose -> 1.35x rate; 3s -> 1.10x; 5s+ -> 0.85x
  u.rate  = sec <= 2 ? 1.35 : (sec <= 3 ? 1.10 : 0.85);
  u.pitch = 0.95; u.volume = 1.0;
  return u;
}

function makeEnUtt(text) {
  const u = new SpeechSynthesisUtterance(text);
  u.lang  = "en-IN";
  const sec = cfg.poseSeconds || 3;
  u.rate  = sec <= 2 ? 1.35 : (sec <= 3 ? 1.10 : 0.85);
  u.pitch = 1.05; u.volume = 1.0;
  const ev = voices.find(v=>v.lang==="en-IN") || voices.find(v=>v.lang.startsWith("en")) || null;
  if(ev) u.voice = ev;
  return u;
}

// Language-aware utterance for pranayama instructions
function makePranaUtt(text) {
  const lang = cfg.pranaLang || "en";
  const u = new SpeechSynthesisUtterance(text);
  const vList = speechSynthesis.getVoices();

  if(lang === "hi") {
    u.lang   = "hi-IN"; u.rate = 0.75; u.pitch = 1.0; u.volume = 1.0;
    const hv = vList.find(v=>v.lang==="hi-IN"&&v.localService) ||
               vList.find(v=>v.lang==="hi-IN") ||
               vList.find(v=>v.lang.startsWith("hi")) || null;
    if(hv) u.voice = hv;
  } else if(lang === "mr") {
    u.lang   = "hi-IN"; u.rate = 0.72; u.pitch = 1.0; u.volume = 1.0;
    const hv = vList.find(v=>v.lang==="hi-IN") || null;
    if(hv) u.voice = hv;
  } else {
    u.lang   = "en-IN"; u.rate = 0.82; u.pitch = 1.0; u.volume = 1.0;
    const ev = vList.find(v=>v.lang==="en-IN") || vList.find(v=>v.lang.startsWith("en")) || null;
    if(ev) u.voice = ev;
  }
  return u;
}

// Speak mantra (Sanskrit) then optional breath cue (English) — queued
function speakMantra(text, breath="", delay=0) {
  if(voiceMuted || !window.speechSynthesis) return;
  const doMantra = cfg.mantrasOn !== false;
  const doBreath = cfg.breathOn  !== false && breath;
  if(!doMantra && !doBreath) return;

  // Clear previous pose's queued speech so fast pose transitions don't backlog
  qClear();

  setTimeout(()=>{
    if(doMantra) qSpeak(makeMantraUtt(text));
    if(doBreath) qSpeak(makeEnUtt(breath));
  }, delay);
}

// Speak English text — queued
function speakText(text, delay=0) {
  if(voiceMuted || !window.speechSynthesis) return;
  setTimeout(()=>{ qSpeak(makeEnUtt(text)); }, delay);
}

// Get pranayama text in the right language from a step object OR plain string
function getPranaText(textOrObj) {
  if(typeof textOrObj === "string") return textOrObj;
  const lang = cfg.pranaLang || "en";
  if(lang === "hi") return textOrObj.hi || textOrObj.en;
  if(lang === "mr") return textOrObj.mr || textOrObj.hi || textOrObj.en;
  return textOrObj.en;
}

// Speak pranayama instruction in selected language — queued
function speakPrana(textOrObj, delay=0) {
  if(voiceMuted || !window.speechSynthesis) return;
  const text = getPranaText(textOrObj);
  setTimeout(()=>{ qSpeak(makePranaUtt(text)); }, delay);
}


/* ── Screen Wake Lock ────────────────────────────────────────── */
let wakeLock = null;

async function acquireWakeLock() {
  if (!('wakeLock' in navigator)) return; // not supported
  try {
    wakeLock = await navigator.wakeLock.request('screen');
    wakeLock.addEventListener('release', () => {
      wakeLock = null;
      // Re-acquire if session still active (OS released it on tab-hide)
    });
    setStatus('Screen will stay on during practice');
  } catch(e) {
    // Low battery or other OS refusal — silent fail, not critical
    console.warn('Wake lock denied:', e.message);
  }
}

async function releaseWakeLock() {
  if (wakeLock) {
    try { await wakeLock.release(); } catch(e) {}
    wakeLock = null;
  }
}

// Re-acquire when app comes back to foreground (OS auto-releases on hide)
// visibilitychange handled in unified handler below

/* ── DND Banner ──────────────────────────────────────────────── */
function showDndBanner() {
  const b = document.getElementById('dnd-banner');
  if (b) b.classList.add('show');
}
function hideDndBanner() {
  const b = document.getElementById('dnd-banner');
  if (b) b.classList.remove('show');
}
document.addEventListener('DOMContentLoaded', () => {
  const dismissBtn = document.getElementById('dnd-dismiss');
  if (dismissBtn) dismissBtn.addEventListener('click', () => hideDndBanner());
});

/* ── Pose countdown timer ────────────────────────────────────── */
function startPoseTimer() {
  clearPoseTimer();
  if(!cfg.autoOn) return;
  poseTimerStart = Date.now();   // always fresh — pace change fix
  poseElapsed    = 0;
  document.getElementById("tbar-wrap").style.display="block";
  const dur = cfg.poseSeconds * 1000;
  function tick() {
    if(!sess.active||sess.paused) return;
    poseElapsed = Date.now() - poseTimerStart;
    const frac  = Math.min(1, poseElapsed / dur);
    document.getElementById("tbar").style.width=(100-frac*100)+"%";
    if(frac>=1){ poseElapsed=0; advanceStep(); return; }
    poseRafHandle = requestAnimationFrame(tick);
  }
  poseRafHandle = requestAnimationFrame(tick);
}
function clearPoseTimer() {
  if(poseRafHandle){ cancelAnimationFrame(poseRafHandle); poseRafHandle=null; }
  poseElapsed=0;
  const tb=document.getElementById("tbar");
  if(tb) tb.style.width="100%";
}

/* ── Session stopwatch (goal timer) ─────────────────────────── */
function startClock() {
  stopClock();
  function tick() {
    if(!sess.active||sess.paused) return;
    updateClockDisplay();
    clockRaf = requestAnimationFrame(tick);
  }
  clockRaf = requestAnimationFrame(tick);
}
function stopClock() {
  if(clockRaf){ cancelAnimationFrame(clockRaf); clockRaf=null; }
}
function sessionElapsedMs() {
  if(!sess.sessionStart) return 0;
  const running = sess.active&&!sess.paused ? Date.now()-sess.sessionStart-sess.sessionPaused : 0;
  return running;
}
function updateClockDisplay() {
  const clk=document.getElementById("session-clock");
  const lbl=document.getElementById("main-label");
  if(!clk) return;
  if(sess.active && !sess.paused) {
    clk.textContent = fmtTime(sessionElapsedMs());
  } else if(sess.paused) {
    clk.textContent = fmtTime(sessionElapsedMs());
  } else {
    clk.textContent = "";
  }
}

function startFreshPracticeSession() {
  sess.active=true; sess.paused=false; sess.step=0;
  sess.sessionStart=Date.now(); sess.sessionPaused=0; sess.pauseAt=0;
  poseElapsed=0;
  speakMantra(STEPS[0].mantraD, STEPS[0].breath);
  startPoseTimer(); startClock(); vib(20);
  acquireWakeLock();
  showDndBanner();
  document.getElementById("main-label").textContent="⏸ Pause";
  render();
}

/* ── Session logic ───────────────────────────────────────────── */
function handleMainBtn() {
  if(!sess.active) {
    const done = todayDone(), goal = todayGoal();
    const isGoalLocked = done >= goal && goal > 0;
    if(isGoalLocked) {
      vib(30);
      const lang = cfg.pranaLang || "en";
      const msg = lang === "hi"
        ? "🎯 आज का सूर्य नमस्कार लक्ष्य पूरा हो गया है! नया लक्ष्य आज रात 12:00 बजे (12 AM) अनलॉक होगा (सुबह 5 बजे के अभ्यास के लिए तैयार)। 🔒"
        : lang === "mr"
        ? "🎯 आजचे सूर्य नमस्कार ध्येय पूर्ण झाले आहे! नवीन ध्येय आज रात्री 12:00 वाजता अनलॉक होईल (सकाळी 5 वाजताच्या अभ्यासासाठी तयार). 🔒"
        : "🎯 Today's Surya Namaskara target complete! Unlocks tonight at 12:00 AM Midnight (Ready for 5:00 AM practice). 🔒";
      alert(msg);
      return;
    }
    if(checkAppLockState()) return;

    // Fresh start practice session directly when tapped on main screen
    startFreshPracticeSession();
    return;
  }
  if(!sess.paused) {
    // Pause
    sess.paused=true; sess.pauseAt=Date.now();
    clearPoseTimer(); stopClock();
    releaseWakeLock();
    document.getElementById("main-label").textContent="▶ Resume";
  } else {
    // Resume
    sess.paused=false;
    sess.sessionPaused += Date.now()-sess.pauseAt;
    poseTimerStart = Date.now(); // reset pose timer on resume
    startPoseTimer(); startClock();
    acquireWakeLock();
    document.getElementById("main-label").textContent="⏸ Pause";
  }
}

function advanceStep() {
  clearPoseTimer();
  if(!sess.active) return;
  const next=sess.step+1;
  if(next>=12){ completeSet(); return; }
  sess.step=next;
  speakMantra(STEPS[next].mantraD, STEPS[next].breath);
  startPoseTimer(); render();
}

function completeSet() {
  vib([30,30,60]);
  const today=todayKey();
  const _g = todayGoal();
  if(!data.history[today]) data.history[today]={ sets:0, timeMs:0, goal:_g };
  data.history[today].sets += 1;
  data.history[today].goal = _g;
  data.lastGoal = _g;
  data.totalAllTime += 1;
  sess.breakAcc += 1;

  const done=todayDone(), goal=todayGoal();
  // Speak: Om (Sanskrit) then "Round N" in English
  setTimeout(()=>{
    qClear();
    qSpeak(makeMantraUtt("ॐ"));
    qSpeak(makeEnUtt("Round " + done));
  }, 300);

  // ── Goal reached: Lock today's goal immediately ───────────
  if(done >= goal) {
    data.lastCompletedGoal = goal;
    saveAll();
    finishSession(true);
    return;
  }

  saveAll();

  // ── Recovery milestone: every 400 sets ──────────────────────
  const RECOVERY_EVERY = 400;
  const lastRecov = data.lastRecoveryAt || 0;
  if(data.totalAllTime > 0 &&
     data.totalAllTime % RECOVERY_EVERY === 0 &&
     data.totalAllTime !== lastRecov) {
    data.lastRecoveryAt = data.totalAllTime;
    saveAll();
    finishSession(false);
    setTimeout(()=>showRecovery(data.totalAllTime), 400);
    return;
  }

  // Break reminder (every N sets within session)
  if(sess.breakAcc>0 && sess.breakAcc%cfg.breakEvery===0) {
    finishSession(false);
    setTimeout(()=>showBreak(done), 400);
    return;
  }

  // Grace period before next set
  sess.step=0;
  startGrace();
}

/* ── Grace countdown between rounds ─────────────────────────── */
let graceRaf    = null;
let graceStart  = 0;
let graceActive = false;

function startGrace() {
  clearGrace();
  graceActive = true;
  graceStart  = Date.now();
  const dur   = cfg.graceSeconds * 1000;

  // Announce rest time once
  setTimeout(()=>{
    qSpeak(makeEnUtt("Rest. Next round in " + cfg.graceSeconds + " seconds."));
  }, 500);

  const el = document.getElementById("grace-bar");
  const wt = document.getElementById("grace-wrap");
  const ct = document.getElementById("grace-count");
  if(wt) wt.style.display = "flex";

  function tick() {
    if(!graceActive) return;
    const elapsed = Date.now() - graceStart;
    const frac    = Math.min(1, elapsed / dur);
    const secsLeft = Math.ceil((dur - elapsed) / 1000);
    if(el) el.style.width = (frac * 100) + "%";
    if(ct) ct.textContent = secsLeft > 0 ? secsLeft : "";
    if(frac >= 1) {
      clearGrace();
      beginNextSet();
      return;
    }
    graceRaf = requestAnimationFrame(tick);
  }
  graceRaf = requestAnimationFrame(tick);
}

function clearGrace() {
  if(graceRaf){ cancelAnimationFrame(graceRaf); graceRaf = null; }
  graceActive = false;
  const wt = document.getElementById("grace-wrap");
  if(wt) wt.style.display = "none";
}

function beginNextSet() {
  if(!sess.active) return;
  poseElapsed = 0;
  speakMantra(STEPS[0].mantraD, STEPS[0].breath);
  startPoseTimer();
  render();
}

let restTimerInterval = null;
let restSecLeft = 0;

function startPranaRestTransition(durationSec) {
  if (restTimerInterval) clearInterval(restTimerInterval);
  restSecLeft = durationSec || 60;

  const banner = document.getElementById("rest-prana-banner");
  if (!banner) return;

  banner.style.display = "block";
  updateRestBannerUI(restSecLeft);

  restTimerInterval = setInterval(() => {
    restSecLeft--;
    if (restSecLeft <= 0) {
      clearInterval(restTimerInterval);
      restTimerInterval = null;
      banner.style.display = "none";
      speakText("Rest complete. Starting Pranayama practice now.");
      setTimeout(() => showPranayama(), 1200);
      return;
    }
    updateRestBannerUI(restSecLeft);
  }, 1000);
}

function updateRestBannerUI(secLeft) {
  const banner = document.getElementById("rest-prana-banner");
  if (!banner) return;
  banner.innerHTML = `
    <div style="background:linear-gradient(135deg,rgba(29,184,127,0.2),rgba(255,215,0,0.15));border:1.5px solid var(--acc);border-radius:14px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center;">
      <div>
        <div style="font-size:13px;font-weight:900;color:var(--acc-lt);">🎉 Target Complete! ⏳ Rest &amp; Recover (${secLeft}s left)</div>
        <div style="font-size:10px;color:var(--txt2);">Take 1 minute rest before starting Pranayama.</div>
      </div>
      <button onclick="manualStartPranayamaNow()" style="background:var(--acc);color:#06231A;border:none;border-radius:10px;padding:7px 12px;font-size:12px;font-weight:800;cursor:pointer;white-space:nowrap;">
        🧘 Start Pranayama Now
      </button>
    </div>
  `;
}

function manualStartPranayamaNow() {
  if (restTimerInterval) {
    clearInterval(restTimerInterval);
    restTimerInterval = null;
  }
  const banner = document.getElementById("rest-prana-banner");
  if (banner) banner.style.display = "none";
  showPranayama();
}

function finishSession(goalDone) {
  stopClock();
  clearPoseTimer();
  // Save today's session time
  const elapsed = sessionElapsedMs();
  const today=todayKey();
  if(!data.history[today]) data.history[today]={ sets:0, timeMs:0 };
  data.history[today].timeMs = (data.history[today].timeMs||0) + elapsed;
  data.totalTimeMs = (data.totalTimeMs||0) + elapsed;
  saveAll();

  clearGrace();
  sess.active=false; sess.step=-1;
  releaseWakeLock();
  hideDndBanner();
  document.getElementById("main-label").textContent="▶ Start";

  if(goalDone) {
    data.lastCompletedGoal = todayGoal();
    saveAll();
    const todaySets  = todayDone();
    const totalSets  = data.totalAllTime;
    const name = cfg.userName || "Vaibhav";
    const msg = "Namaste " + name + "! Today's target of " + todaySets + " rounds complete and locked. "
              + "Take 1 minute rest now. Tap Start Pranayama whenever you are ready.";
    setTimeout(()=>speakText(msg), 800);

    if(cfg.pranayamaAuto !== false) {
      setTimeout(()=>startPranaRestTransition(60), 3000);
    } else if (cfg.autoShowDietPostGoal !== false) {
      setTimeout(()=>showDietModal(), 2500);
    }
  }
  render(); updateClockDisplay();
}

function resetSession() {
  vib(15);
  qClear(); clearGrace();
  // Save whatever time was accumulated before reset
  if(sess.active && sess.sessionStart) {
    const elapsed = sessionElapsedMs();
    const today=todayKey();
    if(!data.history[today]) data.history[today]={ sets:0, timeMs:0 };
    data.history[today].timeMs = (data.history[today].timeMs||0) + elapsed;
    data.totalTimeMs = (data.totalTimeMs||0) + elapsed;
    saveAll();
  }
  clearPoseTimer(); stopClock();
  releaseWakeLock();
  hideDndBanner();
  sess.active=false; sess.paused=false; sess.step=-1;
  sess.sessionStart=0; sess.sessionPaused=0;
  document.getElementById("main-label").textContent="▶ Start";
  document.getElementById("tbar-wrap").style.display="none";
  render(); updateClockDisplay();
}

/* ── Break overlay ───────────────────────────────────────────── */
function showBreak(n) {
  speakText("Take rest. "+n+" sets complete. Lie in Savasana.");
  document.getElementById("break-n").textContent=n;
  document.getElementById("break-ov").classList.add("show");
}

function showRecovery(total) {
  vib([60,40,60,40,120]);
  speakText(
    "Congratulations! You have completed " + total + " Surya Namaskaras. " +
    "This is a major milestone. Take a full recovery day tomorrow. " +
    "Rest, hydrate, and let your body absorb the practice. Om Shanti."
  );
  document.getElementById("rec-total").textContent = total;
  // compute next milestone
  const RECOVERY_EVERY = 400;
  document.getElementById("rec-next").textContent = total + RECOVERY_EVERY;
  document.getElementById("rec-ov").classList.add("show");
}
const breakOk = document.getElementById("break-ok");
if(breakOk) breakOk.addEventListener("click",()=>{
  const breakOv = document.getElementById("break-ov");
  if(breakOv) breakOv.classList.remove("show");
  sess.sessionStart=0; sess.sessionPaused=0;
  render(); updateClockDisplay();
});

const recOk = document.getElementById("rec-ok");
if(recOk) recOk.addEventListener("click",()=>{
  const recOv = document.getElementById("rec-ov");
  if(recOv) recOv.classList.remove("show");
  sess.active=false; sess.step=-1;
  const mainLbl = document.getElementById("main-label");
  if(mainLbl) mainLbl.textContent="▶ Start";
  sess.sessionStart=0; sess.sessionPaused=0;
  render(); updateClockDisplay();
});

/* ── Render ──────────────────────────────────────────────────── */
function render() {
  const done=todayDone(), goal=todayGoal(), frac=Math.min(1,done/goal);
  const isGoalLocked = done >= goal && goal > 0;
  const tomorrowG = Math.min(goal + (cfg.dailyIncrease || 4), cfg.maxSets);

  // Stats row
  const sToday = document.getElementById("s-today"); if(sToday) sToday.textContent = done;
  const sGoal = document.getElementById("s-goal"); if(sGoal) sGoal.textContent = isGoalLocked ? (tomorrowG + " 🔒") : goal;
  const sStreak = document.getElementById("s-streak"); if(sStreak) sStreak.textContent = computeStreak();
  const sTotal = document.getElementById("s-total"); if(sTotal) sTotal.textContent = data.totalAllTime;

  // Program name + day
  const progName = document.getElementById("prog-name"); if(progName) progName.textContent = "SURYASARTHI 108";
  const d=new Date();
  const dayLbl = document.getElementById("day-label");
  if(dayLbl) {
    dayLbl.textContent = "Day "+(data.programDay||1)+" · "+d.toLocaleDateString(undefined,{weekday:"long",month:"short",day:"numeric"});
  }

  // Render Day 1 Benefits Card if user is on Day 1
  const benefitsEl = document.getElementById("day1-benefits-card");
  if(benefitsEl) {
    const tr = getTrialInfo();
    if (tr.isTrial && tr.daysElapsed === 0 && !data.hideDay1Benefits) {
      benefitsEl.style.display = "block";
      benefitsEl.innerHTML = `
        <div style="background:linear-gradient(135deg,rgba(255,215,0,0.15),rgba(29,184,127,0.15));border:1.5px solid var(--acc);border-radius:16px;padding:12px 14px;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px">
            <div style="font-size:13px;font-weight:900;color:var(--acc-lt);display:flex;align-items:center;gap:6px">
              ☀️ Day 1 Welcome: 5 Transformative Benefits of Surya Namaskara
            </div>
            <button onclick="dismissBenefitsCard()" style="background:none;border:none;color:var(--muted);font-size:16px;cursor:pointer;padding:0 4px">✕</button>
          </div>
          <div style="font-size:11px;color:var(--txt2);line-height:1.5;display:grid;gap:6px">
            <div>💪 <strong>Whole-Body Fitness:</strong> Tones 288 muscles &amp; flexes spine across 12 dynamic poses.</div>
            <div>🫁 <strong>Lung Vitality:</strong> Synchronized inhales &amp; exhales maximize oxygen flow.</div>
            <div>🧠 <strong>Solar Plexus &amp; Focus:</strong> Stimulates Manipura Chakra for razor-sharp concentration.</div>
            <div>🔥 <strong>Calorie Burn:</strong> Burns ~13.9 kcal per set (~1500 kcal per 108 sets!).</div>
            <div>🧘 <strong>Hormonal &amp; Stress Balance:</strong> Calms nervous system and regulates melatonin &amp; cortisol.</div>
          </div>
        </div>
      `;
    } else {
      benefitsEl.style.display = "none";
    }
  }

  // Header Trial / PRO status badge
  const trial = getTrialInfo();
  const sub = getSubscriptionInfo();
  const headerBadge = document.getElementById("trial-header-badge");
  if(headerBadge) {
    if (data.isPremium && sub.active) {
      headerBadge.innerHTML = "👑 PRO Active";
      headerBadge.style.background = "var(--acc-dim)";
      headerBadge.style.borderColor = "var(--acc)";
      headerBadge.style.color = "var(--acc-lt)";
    } else if (trial.isTrial && !trial.isLocked) {
      headerBadge.innerHTML = `🎁 Trial (${trial.daysLeft}d left)`;
      headerBadge.style.background = "var(--acc-dim)";
      headerBadge.style.borderColor = "var(--acc)";
      headerBadge.style.color = "var(--acc-lt)";
    } else {
      headerBadge.innerHTML = "🔒 Expired";
      headerBadge.style.background = "rgba(255,59,48,0.2)";
      headerBadge.style.borderColor = "var(--danger)";
      headerBadge.style.color = "var(--danger)";
    }
  }

  // Time stats
  const todayTimeMs = (data.history[todayKey()]||{}).timeMs||0;
  document.getElementById("time-today").textContent = todayTimeMs>0 ? fmtTime(todayTimeMs) : "0s";
  document.getElementById("time-total").textContent = fmtTime(data.totalTimeMs||0);

  // Calories stats
  document.getElementById("cal-today").textContent = fmtCalories(todayCalories());
  document.getElementById("cal-total").textContent = fmtCalories(totalCalories());

  // Ring
  document.getElementById("ring").style.strokeDashoffset=String(CIRC*(1-frac));

  const idle=sess.step===-1||!sess.active;
  if(idle) {
    const mainBtn = document.getElementById("main-btn");
    const mainLbl = document.getElementById("main-label");

    if(isGoalLocked) {
      document.getElementById("r-mantra").textContent     = "🎉 Goal complete! 🔒";
      document.getElementById("r-devanagari").textContent = "नमस्ते 🙏";
      document.getElementById("r-meaning").textContent    = "Next goal: " + tomorrowG + " rounds (+4) 🔒 (Unlocks tonight at 12 AM)";
      document.getElementById("r-pose").textContent       = "Target Achieved!";
      document.getElementById("r-breath").textContent     = "Rest or Pranayama";
      document.getElementById("r-breath").className       = "pose-breath inhale";
      document.getElementById("r-pnum").textContent       = "Today: " + done + " / " + goal + " · Next: " + tomorrowG + " 🔒";

      if(mainLbl) mainLbl.textContent = "🔒 Goal Complete";
      if(mainBtn) {
        mainBtn.style.background = "linear-gradient(135deg, rgba(245,158,11,0.15), rgba(15,23,42,0.8))";
        mainBtn.style.border = "1.5px solid #F59E0B";
        mainBtn.style.color = "#FBBF24";
        mainBtn.style.cursor = "not-allowed";
        mainBtn.style.opacity = "0.9";
        mainBtn.style.boxShadow = "0 0 14px rgba(245,158,11,0.3)";
      }
    } else {
      document.getElementById("r-mantra").textContent     = "☀️";
      document.getElementById("r-devanagari").textContent = "";
      document.getElementById("r-meaning").textContent    = "";
      document.getElementById("r-pose").textContent       = "Ready";
      document.getElementById("r-breath").textContent     = "Tap Start";
      document.getElementById("r-breath").className       = "pose-breath";
      document.getElementById("r-pnum").textContent       = "Goal "+done+" / "+goal;

      if(mainLbl) mainLbl.textContent = "▶ Start";
      if(mainBtn) {
        mainBtn.style.background = "";
        mainBtn.style.border = "";
        mainBtn.style.color = "";
        mainBtn.style.cursor = "pointer";
        mainBtn.style.opacity = "1";
        mainBtn.style.boxShadow = "";
      }
    }
    document.getElementById("tbar-wrap").style.display  = "none";
  } else {
    const s=STEPS[sess.step];
    document.getElementById("r-mantra").textContent     = s.mantra;
    document.getElementById("r-devanagari").textContent = s.mantraD;
    document.getElementById("r-meaning").textContent    = s.meaning;
    document.getElementById("r-pose").textContent       = s.pose;
    document.getElementById("r-breath").textContent     = s.breath;
    document.getElementById("r-breath").className       = "pose-breath "+s.breathClass;
    document.getElementById("r-pnum").textContent       =
      "Set "+(done+1)+" of "+goal+" · Pose "+(sess.step+1)+"/12";
  }

  // Pace display
  document.getElementById("spd-v").textContent = cfg.poseSeconds+"s / pose";

  // Voice button
  document.getElementById("voice-btn").classList.toggle("on",!voiceMuted);

  // Dots visualizer — show dots up to today's goal (or tomorrow's goal if today is complete)
  const dotsEl=document.getElementById("dots");
  dotsEl.innerHTML="";

  const displayGoal = isGoalLocked ? tomorrowG : goal;
  const yesterBase  = Math.max(0, goal - (cfg.dailyIncrease || 4));
  const MAX_DOTS    = 108;
  const showUpTo    = Math.min(displayGoal, MAX_DOTS);

  for(let i=1; i<=showUpTo; i++){
    const dot=document.createElement("div");
    const isDone     = i <= done;
    const isLastDone = isDone && i === done;
    const isActive   = i === done+1 && sess.active;
    const isNewToday = i > yesterBase && i <= goal;
    const isTomorrow = i > goal;

    let cls = "dot";
    if(isDone && isNewToday)  cls += " done new-today";
    else if(isDone)           cls += " done";

    if(isLastDone)            cls += " last-done";

    if(isActive)              cls += " active";
    else if(isTomorrow)       cls += " target locked";
    else if(isNewToday)       cls += " target";

    dot.className = cls;
    dot.textContent = i;
    if(isTomorrow) {
      dot.title = "Next goal: " + tomorrowG + " (unlocks tonight at 12 AM Midnight)";
    }
    dotsEl.appendChild(dot);
  }
  if(displayGoal > MAX_DOTS){
    const more=document.createElement("div");
    more.style.cssText="font-size:10px;color:var(--muted);align-self:center;padding:4px";
    more.textContent="+"+(displayGoal-MAX_DOTS)+" more";
    dotsEl.appendChild(more);
  }

  syncChartUI();
  renderBars();
  updateDietPlanButtonLockUI();
  checkSubscriptionReminder();
}

/* ── History chart — bar / line / dot ────────────────────────── */
function renderBars() {
  requestAnimationFrame(_drawChart);
}

function _drawChart() {
  const wrap = document.getElementById("chart-wrap");
  if(!wrap) return;
  wrap.innerHTML = "";

  const N    = cfg.chartDays || 7;
  const mode = cfg.chartMode || "bar";
  const tk   = todayKey();

  // Build data oldest → newest
  const pts = [];
  for(let i = N-1; i >= 0; i--) {
    const d   = dayKey(i);
    const rec = data.history[d] || {};
    const sets = typeof rec === "number" ? rec : (rec.sets || 0);
    const goal = d === tk
      ? todayGoal()
      : (typeof rec === "number" ? 0 : (rec.goal || 0));
    pts.push({ d, sets, goal, isToday: d === tk });
  }

  const maxVal = Math.max(1, ...pts.map(p => Math.max(p.sets, p.goal)));
  const PW   = wrap.offsetWidth || 320;
  const GAP  = N > 14 ? 2 : 3;
  const colW = Math.max(10, Math.floor((PW - GAP * (N - 1)) / N));
  const CH   = 80;   // bar height px
  const LH   = 32;   // label area above bar (number + goal)
  const DH   = 20;   // date label below bar
  const TOT  = LH + CH + DH;

  // Colors — Multi-Gradient Functional Scheme for Chart Bars & Lines
  const barStyle = p => p.isToday
    ? "background:linear-gradient(180deg,#FBBF24 0%,#F59E0B 100%);box-shadow:0 0 12px rgba(251,191,36,0.6);"
    : (p.sets > 0
        ? "background:linear-gradient(180deg,#60A5FA 0%,#3B82F6 100%);box-shadow:0 0 8px rgba(96,165,250,0.4);"
        : "background:rgba(59,130,246,0.15);border:1px dashed rgba(96,165,250,0.2);");

  const lblCol  = p => p.isToday ? "#FBBF24" : (p.sets > 0 ? "#60A5FA" : "#93C5FD");
  const dateCol = p => p.isToday ? "#FBBF24" : "#93C5FD";

  /* ── BAR ──────────────────────────────────────────────────── */
  if(mode === "bar") {
    const flex = document.createElement("div");
    flex.style.cssText =
      "display:flex;gap:"+GAP+"px;width:100%;height:"+TOT+"px;align-items:flex-end";

    pts.forEach((p, idx) => {
      const col = document.createElement("div");
      col.style.cssText =
        "flex:0 0 "+colW+"px;display:flex;flex-direction:column;" +
        "align-items:center;height:"+TOT+"px";

      /* label area ------------------------------------------ */
      const la = document.createElement("div");
      la.style.cssText =
        "height:"+LH+"px;width:100%;display:flex;flex-direction:column;" +
        "align-items:center;justify-content:flex-end;gap:1px;padding-bottom:3px";

      if(p.sets > 0 || (p.isToday && p.goal > 0)) {
        // top line: completed count
        const t1 = document.createElement("div");
        t1.style.cssText =
          "font-size:"+(N>14?"8":"9")+"px;font-weight:800;color:"+lblCol(p)+
          ";line-height:1;text-align:center;white-space:nowrap";
        t1.textContent = p.sets > 0 ? String(p.sets) : "0";
        la.appendChild(t1);

        // bottom line: /goal
        if(p.goal > 0) {
          const t2 = document.createElement("div");
          t2.style.cssText =
            "font-size:7px;color:#93C5FD;line-height:1;text-align:center";
          t2.textContent = "/"+p.goal;
          la.appendChild(t2);
        }
      }
      col.appendChild(la);

      /* bar ------------------------------------------------- */
      const barH = p.sets > 0
        ? Math.max(6, Math.round((p.sets / maxVal) * CH))
        : 3;
      const bar = document.createElement("div");
      bar.style.cssText =
        "width:100%;height:"+barH+"px;flex-shrink:0;" +
        "border-radius:3px 3px 2px 2px;"+barStyle(p)+"margin-top:auto";
      col.appendChild(bar);

      /* date label ------------------------------------------ */
      const dt  = new Date(p.d + "T00:00:00");
      const dl  = document.createElement("div");
      const skip = N > 14 ? 3 : (N > 7 ? 2 : 1);
      dl.style.cssText =
        "font-size:"+(N>14?"7":"8")+"px;text-align:center;margin-top:4px;" +
        "height:"+(DH-4)+"px;line-height:"+(DH-4)+"px;color:"+dateCol(p)+";font-weight:600";
      if(idx % skip === 0 || p.isToday)
        dl.textContent = dt.toLocaleDateString(undefined,{month:"numeric",day:"numeric"});
      col.appendChild(dl);

      flex.appendChild(col);
    });
    wrap.appendChild(flex);
    return;
  }

  /* ── LINE (SVG) ───────────────────────────────────────────── */
  const SW  = Math.max(PW, colW * N + GAP * (N - 1));
  const SH  = LH + CH + DH;
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width",  SW);
  svg.setAttribute("height", SH);
  svg.style.cssText = "display:block;overflow:visible";

  const xOf = i => Math.round(i * (colW + GAP) + colW / 2);
  const yOf = v => Math.round(LH + CH - (v / maxVal) * (CH - 10) + 2);

  // grid
  [0.5, 1].forEach(f => {
    const gy = yOf(maxVal * f);
    const gl = document.createElementNS("http://www.w3.org/2000/svg", "line");
    gl.setAttribute("x1", 0); gl.setAttribute("x2", SW);
    gl.setAttribute("y1", gy); gl.setAttribute("y2", gy);
    gl.setAttribute("stroke", "rgba(96,165,250,0.2)"); gl.setAttribute("stroke-width", "1");
    const gv = document.createElementNS("http://www.w3.org/2000/svg", "text");
    gv.setAttribute("x", 2); gv.setAttribute("y", gy - 3);
    gv.setAttribute("fill", "#93C5FD"); gv.setAttribute("font-size", "7");
    gv.textContent = Math.round(maxVal * f);
    svg.appendChild(gv);
  });

  // line path — only through days with data
  const lpts = pts
    .map((p, i) => p.sets > 0 ? `${xOf(i)},${yOf(p.sets)}` : null)
    .filter(Boolean);
  if(lpts.length > 1) {
    const pl = document.createElementNS("http://www.w3.org/2000/svg", "polyline");
    pl.setAttribute("points", lpts.join(" "));
    pl.setAttribute("fill", "none");
    pl.setAttribute("stroke", "#38BDF8");
    pl.setAttribute("stroke-width", "2.5");
    pl.setAttribute("stroke-linejoin", "round");
    pl.setAttribute("stroke-linecap", "round");
    pl.setAttribute("style", "filter:drop-shadow(0 0 6px rgba(56,189,248,0.7))");
    svg.appendChild(pl);
  }

  // dots + labels
  pts.forEach((p, i) => {
    const cx = xOf(i);
    const cy = p.sets > 0 ? yOf(p.sets) : yOf(0) + 2;

    // dot
    const c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", cx); c.setAttribute("cy", cy);
    c.setAttribute("r",  p.isToday ? "5" : "3.5");
    c.setAttribute("fill", p.isToday ? "#FBBF24" : (p.sets > 0 ? "#60A5FA" : "rgba(96,165,250,0.2)"));
    svg.appendChild(c);

    // value label above dot
    if(p.sets > 0) {
      const vt = document.createElementNS("http://www.w3.org/2000/svg", "text");
      vt.setAttribute("x", cx); vt.setAttribute("y", cy - 8);
      vt.setAttribute("text-anchor", "middle");
      vt.setAttribute("fill", p.isToday ? "#FBBF24" : "#60A5FA");
      vt.setAttribute("font-size", "8");
      vt.setAttribute("font-weight", "700");
      vt.textContent = p.sets + (p.goal > 0 ? "/"+p.goal : "");
      svg.appendChild(vt);
    }

    // date label
    const skip = N > 14 ? 3 : (N > 7 ? 2 : 1);
    if(i % skip === 0 || p.isToday) {
      const dt = new Date(p.d + "T00:00:00");
      const dl = document.createElementNS("http://www.w3.org/2000/svg", "text");
      dl.setAttribute("x", cx); dl.setAttribute("y", LH + CH + DH - 2);
      dl.setAttribute("text-anchor", "middle");
      dl.setAttribute("fill", p.isToday ? "#FBBF24" : "#93C5FD");
      dl.setAttribute("font-size", "8");
      dl.textContent = dt.toLocaleDateString(undefined,{month:"numeric",day:"numeric"});
      svg.appendChild(dl);
    }
  });

  const sc = document.createElement("div");
  sc.style.cssText = "overflow-x:auto;width:100%";
  sc.appendChild(svg);
  wrap.appendChild(sc);
}

/* ═══════════════════════════════════════════════════════════════
   PRANAYAMA MODULE — Live Counting Engine (8 Practices)
   Round 1: Full voice instructions
   Round 2+: Action name + live second/stroke counts
═══════════════════════════════════════════════════════════════ */

const PRANAYAMA_BASE = [
  {
    id: "dirgha",
    name: "Dirgha Pranayama", nameHi: "दीर्घ प्राणायाम", nameMr: "दीर्घ प्राणायाम",
    totalRounds: 6, secPerRound: 16,
    desc: "Three-part deep belly breathing — prepares body & mind",
    descHi: "तीन भागों में गहरी श्वसन — शरीर और मन को तैयार करता है",
    descMr: "तीन भागांत खोल श्वसन — शरीर आणि मन तयार करते",
    steps: [
      { en: "Sit comfortably with spine erect. Close your eyes and relax.",
        hi: "सीधे बैठें, रीढ़ सीधी रखें। आँखें बंद करें।",
        mr: "सरळ बसा, मणका ताठ ठेवा। डोळे बंद करा.", dur: 6, action: "setup" },
      { en: "Inhale slowly through both nostrils for 4 counts. Fill belly, ribs, then chest.",
        hi: "4 गिनती तक धीरे श्वास लें। पेट, पसलियाँ, फिर छाती भरें।",
        mr: "4 मोजेपर्यंत हळू श्वास घ्या.", dur: 4, action: "inhale", count: 4, label: "🫁 Inhale" },
      { en: "Hold gently for 4 counts.",
        hi: "4 गिनती तक आराम से रोकें।",
        mr: "4 मोजेपर्यंत हळूच थांबा.", dur: 4, action: "hold", count: 4, label: "⏸ Hold" },
      { en: "Exhale slowly for 8 counts. Chest, ribs, then belly falls.",
        hi: "8 गिनती तक धीरे श्वास छोड़ें।",
        mr: "8 मोजेपर्यंत हळू श्वास सोडा.", dur: 8, action: "exhale", count: 8, label: "🌬 Exhale" }
    ]
  },
  {
    id: "kapalabhati",
    name: "Kapalabhati", nameHi: "कपालभाती", nameMr: "कपालभाती",
    totalRounds: 5, secPerRound: 48,
    desc: "Skull-shining breath — 36 forceful exhales per round",
    descHi: "कपालभाती — प्रति राउंड 36 तेज़ श्वास छोड़ना",
    descMr: "कपालभाती — प्रति फेरी 36 जोरदार श्वास सोडणे",
    steps: [
      { en: "Sit tall with spine erect. Take one deep breath to prepare.",
        hi: "सीधे बैठें। एक गहरी साँस लें।",
        mr: "सरळ बसा. एक खोल श्वास घ्या.", dur: 6, action: "setup" },
      { en: "Begin 36 sharp forceful exhales through nose at 1 stroke per second. Pull navel in.",
        hi: "शुरू करें 36 तेज़ श्वास छोड़ना। नाभि अंदर खींचें।",
        mr: "३६ जोरात श्वास सोडणे सुरू करा.", dur: 36, action: "stroke", count: 36, label: "💥 Stroke" },
      { en: "Deep inhale, hold briefly, then exhale completely. Rest and breathe normally.",
        hi: "गहरी साँस लें, रोकें, फिर छोड़ें। सामान्य साँस लें।",
        mr: "खोल श्वास घ्या, थांबा, मग सोडा. सामान्य श्वास घ्या.", dur: 12, action: "rest", count: 12, label: "🧘 Rest" }
    ]
  },
  {
    id: "bhastrika",
    name: "Bhastrika", nameHi: "भस्त्रिका", nameMr: "भस्त्रिका",
    totalRounds: 4, secPerRound: 45,
    desc: "Bellows breath — 24 equal forceful inhales & exhales",
    descHi: "भस्त्रिका — 24 समान बलपूर्वक श्वास लेना और छोड़ना",
    descMr: "भस्त्रिका — २४ समान जोराने श्वास घेणे आणि सोडणे",
    steps: [
      { en: "Take a normal breath. Forceful inhale AND forceful exhale equally through nose.",
        hi: "सामान्य साँस लें। नाक से जोरदार श्वास लें और छोड़ें।",
        mr: "सामान्य श्वास घ्या. नाकातून जोरात श्वास घ्या आणि सोडा.", dur: 6, action: "setup" },
      { en: "Pump vigorously at 1 breath per second. 24 breaths total.",
        hi: "जोरदार श्वास लें और छोड़ें। 24 बार।",
        mr: "जोराने श्वास घ्या आणि सोडा. २४ वेळा.", dur: 24, action: "stroke", count: 24, label: "💥 Bhastrika" },
      { en: "Deep inhale, hold for 5 counts, then exhale fully. Rest.",
        hi: "गहरी साँस लें, 5 गिनती रोकें, फिर छोड़ें। आराम।",
        mr: "खोल श्वास घ्या, 5 मोजे थांबा, मग सोडा. आराम.", dur: 15, action: "hold_rest", count: 5, label: "⏸ Hold & Rest" }
    ]
  },
  {
    id: "anulom",
    name: "Anulom Vilom", nameHi: "अनुलोम विलोम", nameMr: "अनुलोम विलोम",
    totalRounds: 15, secPerRound: 24,
    desc: "Alternate nostril breathing — balances energy channels",
    descHi: "अनुलोम विलोम — ऊर्जा नाड़ियों को संतुलित करता है",
    descMr: "अनुलोम विलोम — ऊर्जा नाड्या संतुलित करते",
    steps: [
      { en: "Right hand in Nasagra mudra. Thumb closes right nostril.",
        hi: "दाहिना हाथ नासाग्र मुद्रा में। अंगूठे से दाहिनी नासिका बंद।",
        mr: "उजवा हात नासाग्र मुद्रेत. उजवी नाकपुडी बंद.", dur: 4, action: "setup", round1Only: true },
      { en: "Inhale through LEFT nostril for 4 counts.",
        hi: "बाईं से 4 गिनती में श्वास लें।",
        mr: "डाव्याकडून 4 मोजेपर्यंत श्वास घ्या.", dur: 4, action: "inhale", count: 4, label: "👈 Inhale Left" },
      { en: "Exhale through RIGHT nostril for 8 counts.",
        hi: "दाहिनी से 8 गिनती में छोड़ें।",
        mr: "उजवीकडून 8 मोजेपर्यंत सोडा.", dur: 8, action: "exhale", count: 8, label: "👉 Exhale Right" },
      { en: "Inhale through RIGHT nostril for 4 counts.",
        hi: "दाहिनी से 4 गिनती में लें।",
        mr: "उजवीकडून 4 मोजेपर्यंत घ्या.", dur: 4, action: "inhale", count: 4, label: "👉 Inhale Right" },
      { en: "Exhale through LEFT nostril for 8 counts.",
        hi: "बाईं से 8 गिनती में छोड़ें।",
        mr: "डाव्याकडून 8 मोजेपर्यंत सोडा.", dur: 8, action: "exhale", count: 8, label: "👈 Exhale Left" }
    ]
  },
  {
    id: "nadi",
    name: "Nadi Shodhana", nameHi: "नाडी शोधन", nameMr: "नाडी शोधन",
    totalRounds: 5, secPerRound: 60,
    desc: "Channel purification — deep 1:4:2 ratio (4in, 16hold, 8out)",
    descHi: "नाडी शोधन — गहरा 1:4:2 अनुपात (4 श्वास, 16 रोकें, 8 छोड़ें)",
    descMr: "नाडी शोधन — खोल 1:4:2 प्रमाण (4 श्वास, 16 थांबा, 8 सोडा)",
    steps: [
      { en: "Inhale through LEFT nostril for 4 counts.",
        hi: "बाईं से 4 गिनती में श्वास लें।",
        mr: "डाव्याकडून 4 मोजेपर्यंत श्वास घ्या.", dur: 4, action: "inhale", count: 4, label: "👈 Inhale Left" },
      { en: "Retain breath, both nostrils closed. Hold for 16 counts.",
        hi: "श्वास रोकें। 16 गिनती तक।",
        mr: "श्वास थांबवा. 16 मोजेपर्यंत.", dur: 16, action: "hold", count: 16, label: "⏸ Retain (Kumbhaka)" },
      { en: "Exhale through RIGHT nostril for 8 counts.",
        hi: "दाहिनी से 8 गिनती में पूरी श्वास छोड़ें।",
        mr: "उजवीकडून 8 मोजेपर्यंत श्वास सोडा.", dur: 8, action: "exhale", count: 8, label: "👉 Exhale Right" },
      { en: "Inhale through RIGHT nostril for 4 counts.",
        hi: "दाहिनी से 4 गिनती में लें।",
        mr: "उजवीकडून 4 मोजेपर्यंत घ्या.", dur: 4, action: "inhale", count: 4, label: "👉 Inhale Right" },
      { en: "Retain breath, both closed. Hold for 16 counts.",
        hi: "श्वास रोकें। 16 गिनती।",
        mr: "श्वास थांबवा. 16 मोजे।", dur: 16, action: "hold", count: 16, label: "⏸ Retain (Kumbhaka)" },
      { en: "Exhale through LEFT nostril for 8 counts.",
        hi: "बाईं से 8 गिनती में छोड़ें।",
        mr: "डाव्याकडून 8 मोजेपर्यंत सोडा.", dur: 8, action: "exhale", count: 8, label: "👈 Exhale Left" },
      { en: "Rest and take a natural breath.",
        hi: "विराम लें और सामान्य श्वास लें।",
        mr: "विराम घ्या आणि सामान्य श्वास घ्या.", dur: 4, action: "rest", count: 4, label: "🧘 Rest" }
    ]
  },
  {
    id: "ujjayi",
    name: "Ujjayi Pranayama", nameHi: "उज्जायी प्राणायाम", nameMr: "उज्जायी प्राणायाम",
    totalRounds: 6, secPerRound: 15,
    desc: "Ocean breath — throat constriction with audible whisper",
    descHi: "उज्जायी — गले से समुद्र की ध्वनि",
    descMr: "उज्जायी — घशातून समुद्राचा आवाज",
    steps: [
      { en: "Inhale through nose for 5 counts with ocean throat sound.",
        hi: "5 गिनती तक नाक से श्वास लें — समुद्र ध्वनि।",
        mr: "5 मोजेपर्यंत नाकाने श्वास घ्या — समुद्राचा आवाज.", dur: 5, action: "inhale", count: 5, label: "🌊 Ujjayi Inhale" },
      { en: "Hold gently for 2 counts.",
        hi: "2 गिनती रोकें।",
        mr: "2 मोजे थांबा.", dur: 2, action: "hold", count: 2, label: "⏸ Hold" },
      { en: "Exhale slowly through nose for 8 counts with throat sound.",
        hi: "8 गिनती तक धीरे छोड़ें।",
        mr: "8 मोजेपर्यंत हळू सोडा.", dur: 8, action: "exhale", count: 8, label: "🌊 Ujjayi Exhale" }
    ]
  },
  {
    id: "bhramari",
    name: "Bhramari", nameHi: "भ्रामरी", nameMr: "भ्रामरी",
    totalRounds: 10, secPerRound: 16,
    desc: "Humming bee breath — calms brain & nervous system",
    descHi: "भ्रामरी — मधुमक्खी की गुनगुनाहट (10 राउंड)",
    descMr: "भ्रामरी — मधमाशीचा गुणगुणाट (10 फेऱ्या)",
    steps: [
      { en: "Close ears with thumbs, fingers on closed eyes (Shanmukhi mudra).",
        hi: "अंगूठों से कान बंद करें। षण्मुखी मुद्रा।",
        mr: "अंगठ्यांनी कान बंद करा. षण्मुखी मुद्रा.", dur: 5, action: "setup", round1Only: true },
      { en: "Deep inhale through nose for 5 counts.",
        hi: "5 गिनती तक गहरी साँस लें।",
        mr: "5 मोजेपर्यंत खोल श्वास घ्या.", dur: 5, action: "inhale", count: 5, label: "🫁 Deep Inhale" },
      { en: "Exhale with continuous humming sound. Mmmmm. Feel skull vibrations.",
        hi: "छोड़ते हुए लगातार गुनगुनाएं। म्म्म्म।",
        mr: "सोडताना सतत गुणगुणाट करा. म्म्म्म.", dur: 11, action: "humming", count: 11, label: "🐝 Humming Exhale" }
    ]
  },
  {
    id: "meditation",
    name: "Meditation", nameHi: "ध्यान", nameMr: "ध्यान",
    totalRounds: 1, secPerRound: 540,
    desc: "Silent awareness — 9 minutes peaceful meditation",
    descHi: "मौन ध्यान — 9 मिनट शांति",
    descMr: "शांत ध्यान — ९ मिनिटे शांतता",
    steps: [
      { en: "Release all techniques. Hands on knees, palms facing up. Gently close your eyes.",
        hi: "सभी तकनीकें छोड़ दें। हाथ घुटनों पर। आँखें बंद करें।",
        mr: "सर्व तंत्रे सोडा. हात गुडघ्यांवर. डोळे बंद करा.", dur: 10, action: "setup" },
      { en: "Observe your natural breath flow. Rest in pure awareness.",
        hi: "प्राकृतिक श्वास को देखें। शांत रहें।",
        mr: "नैसर्गिक श्वास पाहा. शांत राहा.", dur: 530, action: "meditate", count: 530, label: "🧘 Silent Awareness" }
    ]
  }
];

// Runtime state
let pranaState = {
  active      : false,
  paused      : false,
  phaseIdx    : 0,
  stepIdx     : 0,
  roundNum    : 1,
  phaseStart  : 0,
  totalStart  : 0,
  stepTimer   : null,
  countTimer  : null,
  clockTimer  : null,
  pauseAccMs  : 0,
  pauseAt     : 0,
};

function pranaSessionMs() {
  return PRANAYAMA_BASE.reduce((s, p) => s + p.totalRounds * p.secPerRound * 1000, 0);
}

function showPranayama() {
  pranaState.phaseIdx   = 0;
  pranaState.stepIdx    = 0;
  pranaState.roundNum   = 1;
  pranaState.active     = true;
  pranaState.paused     = false;
  pranaState.totalStart = Date.now();
  pranaState.pauseAccMs = 0;
  pranaState.pauseAt    = 0;
  const ov = document.getElementById("prana-ov");
  ov.classList.add("show");
  ov.scrollTop = 0;
  updatePranaTimeCards();
  acquireWakeLock();
  startPranaPhase();
}

function makePranaUtt(text) {
  const lang = cfg.pranaLang || "en";
  const u = new SpeechSynthesisUtterance(text);
  const vList = speechSynthesis.getVoices();

  if(lang === "hi") {
    u.lang = "hi-IN"; u.rate = 1.05; u.pitch = 1.0;
    const hv = vList.find(v=>v.lang==="hi-IN"&&v.localService) ||
               vList.find(v=>v.lang==="hi-IN") ||
               vList.find(v=>v.lang.startsWith("hi")) || null;
    if(hv) u.voice = hv;
  } else if(lang === "mr") {
    u.lang = "hi-IN"; u.rate = 1.05; u.pitch = 1.0;
    const hv = vList.find(v=>v.lang==="hi-IN") || null;
    if(hv) u.voice = hv;
  } else {
    u.lang = "en-IN"; u.rate = 1.05; u.pitch = 1.05;
    const ev = vList.find(v=>v.lang==="en-IN") || vList.find(v=>v.lang.startsWith("en")) || null;
    if(ev) u.voice = ev;
  }
  return u;
}

function speakPranaInstruction(textOrObj, onDoneCallback) {
  if(voiceMuted || !window.speechSynthesis) {
    if(onDoneCallback) setTimeout(onDoneCallback, 50);
    return;
  }
  const text = typeof textOrObj === "string" ? textOrObj : getPranaText(textOrObj);
  if(!text) {
    if(onDoneCallback) setTimeout(onDoneCallback, 50);
    return;
  }

  qClear();
  const u = makePranaUtt(text);
  u.rate = 0.95;

  let called = false;
  let safetyTimer = null;
  const finish = () => {
    if(!called) {
      called = true;
      if(safetyTimer) { clearTimeout(safetyTimer); safetyTimer = null; }
      if(onDoneCallback) setTimeout(onDoneCallback, 300);
    }
  };

  u.onend = finish;
  u.onerror = finish;

  const safeTimeoutMs = Math.max(6000, text.length * 160);
  safetyTimer = setTimeout(finish, safeTimeoutMs);

  qSpeak(u);
}

function speakPranaCount(text) {
  if (voiceMuted || !window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") return;
  const lang = cfg.pranaLang || "en";

  try {
    if (window.speechSynthesis.paused) {
      try { window.speechSynthesis.resume(); } catch(e){}
    }

    const u = new SpeechSynthesisUtterance(text);
    const vList = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];

    // Rate 1.40x ensures count words finish in ~200ms without queue backup
    u.rate = 1.40;

    if (lang === "hi") {
      u.lang = "hi-IN"; u.pitch = 1.0;
      const hv = vList.find(v => v.lang === "hi-IN" && v.localService) ||
                 vList.find(v => v.lang === "hi-IN") ||
                 vList.find(v => v.lang.startsWith("hi")) || null;
      if (hv) u.voice = hv;
    } else if (lang === "mr") {
      u.lang = "hi-IN"; u.pitch = 1.0;
      const hv = vList.find(v => v.lang === "hi-IN") || null;
      if (hv) u.voice = hv;
    } else {
      u.lang = "en-IN"; u.pitch = 1.05;
      const ev = vList.find(v => v.lang === "en-IN") || vList.find(v => v.lang.startsWith("en")) || null;
      if (ev) u.voice = ev;
    }

    window.speechSynthesis.speak(u);
  } catch (e) {
    console.warn("Pranayama count speech error:", e);
  }
}

function startPranaPhase() {
  const phase = PRANAYAMA_BASE[pranaState.phaseIdx];
  pranaState.phaseStart = Date.now();
  pranaState.stepIdx    = 0;
  pranaState.roundNum   = 1;

  updatePranaGuideLockButton(false); // Unlock guide button at start of each Pranayama type

  document.getElementById("prana-title").textContent  = phase.name;
  document.getElementById("prana-title-hi").textContent = phase.nameHi;
  document.getElementById("prana-desc").textContent   =
    phase.desc + " (" + phase.totalRounds + (phase.totalRounds === 1 ? " session" : " rounds") + ")";
  document.getElementById("prana-phase-num").textContent =
    "Practice " + (pranaState.phaseIdx+1) + " of " + PRANAYAMA_BASE.length;
  document.getElementById("prana-phase-bar").style.width = "0%";

  startPranaClocks();

  const lang = cfg.pranaLang || "en";
  const nameStr = (lang==="hi" ? phase.nameHi : lang==="mr" ? (phase.nameMr||phase.nameHi) : phase.name) || phase.name;
  const numWord = getLanguageNumber(1, lang);

  const phaseIntro = phase.totalRounds > 1
    ? (lang === "hi" ? (nameStr + "। राउंड " + numWord + "।") :
       lang === "mr" ? (nameStr + "। फेरी " + numWord + "।") :
       (nameStr + ". Round 1."))
    : (lang === "hi" ? (nameStr + "।") :
       lang === "mr" ? (nameStr + "।") :
       (nameStr + "."));

  speakPranaInstruction(phaseIntro, () => {
    if(!pranaState.active || pranaState.paused) return;
    startPranaStep();
  });
}

function startPranaStep() {
  if(!pranaState.active || pranaState.paused) return;
  clearPranaTimers();
  qClear();
  try { if(window.speechSynthesis) window.speechSynthesis.cancel(); } catch(e){}

  const phase   = PRANAYAMA_BASE[pranaState.phaseIdx];
  const steps   = phase.steps;
  const stepIdx = pranaState.stepIdx;
  const step    = steps[stepIdx];

  // Skip round1Only setup steps in round 2+
  if(step.round1Only && pranaState.roundNum > 1) {
    pranaState.stepIdx++;
    if(pranaState.stepIdx >= steps.length) {
      advancePranaRound();
    } else {
      startPranaStep();
    }
    return;
  }

  // Update header badge
  const roundLbl = phase.totalRounds > 1
    ? "Round " + pranaState.roundNum + " / " + phase.totalRounds + " — Step " + (stepIdx+1) + " / " + steps.length
    : "Step " + (stepIdx+1) + " / " + steps.length;
  document.getElementById("prana-step-num").textContent = roundLbl;

  const isRound1 = pranaState.roundNum === 1;
  const textFull = getPranaText(step);
  const stepCardEl = document.getElementById("prana-step");

  if(step.action === "setup" || (step.round1Only && isRound1 && !step.count)) {
    updatePranaGuideLockButton(false); // Unlocked during setup
    stepCardEl.innerHTML =
      '<div class="prana-txt-full">' + textFull + '</div>' +
      '<div class="prana-count-badge" id="prana-live-badge">⏱ ' + (step.dur || 4) + 's remaining</div>';

    // Speak setup instruction cleanly. Once completed, proceed to execution!
    speakPranaInstruction(textFull, () => {
      if(!pranaState.active || pranaState.paused) return;
      startStepExecution(step, isRound1);
    });
  } else {
    // Action Step: Render Action Card UI & count every number out loud for ALL rounds (including Round 1!)
    const actionLabel = step.label || getActionSpeech(step);
    stepCardEl.innerHTML =
      '<div class="prana-count-card">' +
        '<div class="prana-count-action">' + actionLabel + '</div>' +
        '<div class="prana-count-num" id="prana-live-num">1 / ' + (step.count || step.dur || 1) + '</div>' +
      '</div>';

    startStepExecution(step, isRound1);
  }
}

function startStepExecution(step, isRound1) {
  if(!pranaState.active || pranaState.paused) return;
  clearPranaTimers();

  const maxCount = step.count || step.dur || 4;

  // Case A: Step with live number counting (Inhale, Hold, Exhale, Stroke, Humming)
  if(step.count && step.count > 0) {
    updatePranaGuideLockButton(true); // Lock guide button during running live rounds
    let curSec = 1;
    updateLiveCountUI(step, curSec, maxCount);
    speakLiveStepCount(step, curSec, isRound1);

    pranaState.countTimer = setInterval(() => {
      if(!pranaState.active || pranaState.paused) return;
      curSec++;

      if(curSec > maxCount) {
        clearPranaTimers();
        advancePranaStep();
        return;
      }

      updateLiveCountUI(step, curSec, maxCount);
      speakLiveStepCount(step, curSec, isRound1);
    }, 1000);
    return;
  }

  // Case B: Setup / Rest / Meditation steps (duration countdown)
  let durLeft = step.dur || 4;
  updateSetupDurationUI(step, durLeft);
  speakLiveStepCount(step, 1, isRound1);

  pranaState.countTimer = setInterval(() => {
    if(!pranaState.active || pranaState.paused) return;
    durLeft--;

    if(durLeft <= 0) {
      clearPranaTimers();
      advancePranaStep();
      return;
    }

    updateSetupDurationUI(step, durLeft);
  }, 1000);
}

function updateSetupDurationUI(step, durLeft) {
  const badgeEl = document.getElementById("prana-live-badge");
  if(badgeEl) badgeEl.textContent = "⏱ " + durLeft + "s remaining";
}

function updateLiveCountUI(step, curSec, maxSec) {
  const badgeEl = document.getElementById("prana-live-badge");
  const numEl   = document.getElementById("prana-live-num");

  const icon = step.action === "stroke" ? "💥" :
               step.action === "inhale" ? "🫁" :
               step.action === "hold" || step.action === "hold_rest" ? "⏸" :
               step.action === "exhale" ? "🌬" :
               step.action === "humming" ? "🐝" : "⏱";

  if(badgeEl) badgeEl.textContent = icon + " " + (step.label || 'Count') + " " + curSec + " / " + maxSec;
  if(numEl)   numEl.textContent   = curSec + " / " + maxSec;
}

function getLanguageNumber(num, lang) {
  const numStr = num.toString();
  if(lang === "hi") {
    const hiNums = ["", "एक", "दो", "तीन", "चार", "पाँच", "छह", "सात", "आठ", "नौ", "दस",
                    "ग्यारह", "बारह", "तेरह", "चौदह", "पंद्रह", "सोलह", "सत्रह", "अठारह", "उन्नीस", "बीस",
                    "इक्कीस", "बाईस", "तेईस", "चौबीस", "पच्चीस", "छब्बीस", "सत्तावीस", "अट्ठाईस", "उनतीस", "तीस",
                    "इकतीस", "बत्तीस", "तेन्तीस", "चौंतीस", "पैंतीस", "छत्तीस", "सैंतीस", "अड़तीस", "उनतालीस", "चालिस",
                    "इकतालीस", "बयालीस", "सैंतालीस", "चवालीस", "पैंतालीस", "छियालीस", "सैंतालीस", "अड़तालीस", "उंचास", "पचास",
                    "इक्कावन", "बावन", "तिरपन", "चौवन", "पचपन", "छप्पन", "सत्तावन", "अत्तावन", "उनसठ", "साठ"];
    return hiNums[num] || numStr;
  }
  if(lang === "mr") {
    const mrNums = ["", "एक", "दोन", "तीन", "चार", "पाच", "सहा", "सात", "आठ", "नऊ", "दहा",
                    "अकरा", "बारा", "तेरा", "चौदा", "पंधरा", "सोळा", "सतरा", "अठरा", "एकोणीस", "वीस",
                    "एकवीस", "बावीस", "तेवीस", "चौवीस", "पंचवीस", "सव्वीस", "सत्तावीस", "अठ्ठावीस", "एकोणतीस", "तीस",
                    "एकतीस", "बत्तीस", "तेहेतीस", "चौतीस", "पस्तीस", "छत्तीस", "सदतीस", "अडतीस", "एकोणचाळीस", "चाळीस",
                    "एकचाळीस", "बेचाळीस", "त्रेचाळीस", "चव्वेचाळीस", "पंचचाळीस", "शहाचाळीस", "सत्तेचाळीस", "अठ्ठाचाळीस", "एकोणपन्नास", "पन्नास",
                    "एकपन्नास", "बावन्न", "त्रेपन्न", "चौपन्न", "पन्नस", "छप्पन्न", "सत्तावन्न", "अठ्ठावन्न", "एकोणसाठ", "साठ"];
    return mrNums[num] || numStr;
  }
  return numStr;
}

function speakLiveStepCount(step, curSec, isRound1) {
  const lang = cfg.pranaLang || "en";
  const numWord = getLanguageNumber(curSec, lang);
  const maxSec = step.count || step.dur || 1;

  if(step.action === "stroke") {
    speakPranaCount(numWord);
    return;
  }
  if(step.action === "inhale" || step.action === "hold" || step.action === "exhale") {
    if(curSec === 1) {
      const actWord = getActionSpeech(step);
      speakPranaCount(actWord + " " + numWord);
    } else {
      speakPranaCount(numWord);
    }
    return;
  }
  if(step.action === "rest" || step.action === "hold_rest") {
    if(curSec === 1) {
      const restNum = getLanguageNumber(maxSec, lang);
      const restMsg = lang === "hi" ? ("विश्राम " + restNum + " सेकंड") :
                      lang === "mr" ? ("विश्रांती " + restNum + " सेकंद") :
                      ("Rest " + maxSec + " seconds");
      speakPranaCount(restMsg);
    } else {
      speakPranaCount(numWord);
    }
    return;
  }
  if(step.action === "humming") {
    if(curSec === 1) {
      speakPranaCount((lang === "hi" ? "गुनगुनाएं " : lang === "mr" ? "गुणगुणाट " : "Humming ") + numWord);
    } else {
      speakPranaCount(numWord);
    }
  }
}

function getActionSpeech(step) {
  const lang = cfg.pranaLang || "en";
  const label = step.label || "";

  if(label.includes("Left")) {
    if(step.action === "inhale") return lang === "hi" ? "बाईं श्वास" : lang === "mr" ? "डावी श्वास" : "Inhale Left";
    if(step.action === "exhale") return lang === "hi" ? "बाईं छोड़ें" : lang === "mr" ? "डावी सोडा" : "Exhale Left";
  }
  if(label.includes("Right")) {
    if(step.action === "inhale") return lang === "hi" ? "दाहिनी श्वास" : lang === "mr" ? "उजवी श्वास" : "Inhale Right";
    if(step.action === "exhale") return lang === "hi" ? "दाहिनी छोड़ें" : lang === "mr" ? "उजवी सोडा" : "Exhale Right";
  }

  if(step.action === "inhale") {
    return lang === "hi" ? "श्वास" : lang === "mr" ? "श्वास" : "Inhale";
  }
  if(step.action === "hold" || step.action === "hold_rest") {
    return lang === "hi" ? "रोकें" : lang === "mr" ? "थांबा" : "Hold";
  }
  if(step.action === "exhale") {
    return lang === "hi" ? "छोड़ें" : lang === "mr" ? "सोडा" : "Exhale";
  }
  if(step.action === "stroke") {
    return label || "Strokes";
  }
  return label || "Begin";
}

function advancePranaStep() {
  clearPranaTimers();
  const phase = PRANAYAMA_BASE[pranaState.phaseIdx];
  pranaState.stepIdx++;

  if(pranaState.stepIdx >= phase.steps.length) {
    advancePranaRound();
  } else {
    startPranaStep();
  }
}

function advancePranaRound() {
  const phase = PRANAYAMA_BASE[pranaState.phaseIdx];
  if(pranaState.roundNum >= phase.totalRounds) {
    nextPranaPhase();
  } else {
    pranaState.roundNum++;
    pranaState.stepIdx = 0;
    qClear();
    try { if(window.speechSynthesis) window.speechSynthesis.cancel(); } catch(e){}
    updatePranaGuideLockButton(false); // Unlocked before round transition
    if(!pranaState.active || pranaState.paused) return;
    startPranaStep();
  }
}



function pranaElapsedPhaseMs() {
  return Date.now() - pranaState.phaseStart - pranaState.pauseAccMs;
}

function pranaElapsedTotalMs() {
  return Date.now() - pranaState.totalStart - pranaState.pauseAccMs;
}

function startPranaClocks() {
  clearInterval(pranaState.clockTimer);
  pranaState.clockTimer = setInterval(() => {
    if(!pranaState.active || pranaState.paused) return;
    const phase     = PRANAYAMA_BASE[pranaState.phaseIdx];
    const phaseMs   = phase.totalRounds * phase.secPerRound * 1000;
    const phaseEl   = pranaElapsedPhaseMs();
    const phaseFrac = Math.min(1, phaseEl / phaseMs);
    const totalMs   = pranaSessionMs();
    const totalEl   = pranaElapsedTotalMs();
    const totalFrac = Math.min(1, totalEl / totalMs);
    const remSec    = Math.max(0, Math.round((totalMs - totalEl) / 1000));

    document.getElementById("prana-phase-bar").style.width = (phaseFrac*100)+"%";
    document.getElementById("prana-total-bar").style.width = (totalFrac*100)+"%";
    document.getElementById("prana-time-rem").textContent  =
      "Total remaining: " + fmtTime(remSec * 1000);
    updatePranaTimeCards();
  }, 500);
}

function nextPranaPhase() {
  clearPranaTimers();
  qClear();
  try { if(window.speechSynthesis) window.speechSynthesis.cancel(); } catch(e){}
  pranaState.phaseIdx++;
  if(pranaState.phaseIdx >= PRANAYAMA_BASE.length) {
    endPranayama(); return;
  }
  startPranaPhase();
}

function endPranayama() {
  clearPranaTimers();
  const elapsedMs = pranaElapsedTotalMs();
  pranaState.active = false;
  // Note: releaseWakeLock() will be called when user closes the Pranayama view so screen stays on till end

  const today = todayKey();
  if(!data.history[today]) data.history[today] = { sets:0, timeMs:0, goal:0 };
  data.history[today].pranaMs = (data.history[today].pranaMs || 0) + elapsedMs;
  data.totalPranaMs = (data.totalPranaMs || 0) + elapsedMs;
  data.pranaFinishedToday = true;
  saveAll();
  updateDietPlanButtonLockUI();

  speakPranaInstruction("Pranayama complete. Sit quietly. Namaste. Om Shanti.");
  document.getElementById("prana-step").innerHTML       = '<div class="prana-txt-full">🙏 Practice complete. Namaste.</div>';
  document.getElementById("prana-title").textContent   = "ध्यान";
  document.getElementById("prana-phase-bar").style.width = "100%";
  document.getElementById("prana-total-bar").style.width = "100%";
  document.getElementById("prana-time-rem").textContent  = "Complete!";
  document.getElementById("prana-close-btn").textContent = "✕ Close";
  updatePranaTimeCards();

  if (cfg.autoShowDietPostGoal !== false) {
    setTimeout(() => showDietModal(), 2000);
  }
}

function updatePranaTimeCards() {
  const today = todayKey();
  const todayPranaMs = (data.history[today]?.pranaMs || 0) +
    (pranaState.active ? pranaElapsedTotalMs() : 0);
  const totalPranaMs = (data.totalPranaMs || 0) +
    (pranaState.active ? pranaElapsedTotalMs() : 0);
  const ptEl = document.getElementById("prana-time-today");
  const ttEl = document.getElementById("prana-time-total");
  if(ptEl) ptEl.textContent = todayPranaMs > 0 ? fmtTime(todayPranaMs) : "0s";
  if(ttEl) ttEl.textContent = totalPranaMs > 0 ? fmtTime(totalPranaMs) : "0s";
}

function clearPranaTimers() {
  if(pranaState.stepTimer) {
    clearTimeout(pranaState.stepTimer);
    pranaState.stepTimer = null;
  }
  if(pranaState.countTimer) {
    clearInterval(pranaState.countTimer);
    pranaState.countTimer = null;
  }
  clearInterval(pranaState.clockTimer);
}

function pauseResumePrana() {
  if(!pranaState.active) return;
  pranaState.paused = !pranaState.paused;
  const btn = document.getElementById("prana-pause-btn");
  if(pranaState.paused) {
    pranaState.pauseAt = Date.now();
    clearPranaTimers();
    try { window.speechSynthesis.cancel(); } catch(e){}
    btn.textContent = "▶ Resume";
    updatePranaGuideLockButton(false); // Unlocked when paused
    speakText("Paused.");
  } else {
    pranaState.pauseAccMs += Date.now() - pranaState.pauseAt;
    pranaState.pauseAt = 0;
    btn.textContent = "⏸ Pause";
    updatePranaGuideLockButton(true); // Locked when resumed
    startPranaStep();
    startPranaClocks();
  }
}

function skipPranaPhase() {
  if(!pranaState.active) return;
  clearPranaTimers();
  try { window.speechSynthesis.cancel(); } catch(e){}
  nextPranaPhase();
}

function closePranayama() {
  clearPranaTimers();
  try { window.speechSynthesis.cancel(); } catch(e){}
  if(pranaState.active) {
    const elapsedMs = pranaElapsedTotalMs();
    const today = todayKey();
    if(!data.history[today]) data.history[today] = { sets:0, timeMs:0, goal:0 };
    data.history[today].pranaMs = (data.history[today].pranaMs || 0) + elapsedMs;
    data.totalPranaMs = (data.totalPranaMs || 0) + elapsedMs;
  }
  data.pranaClosedToday = true;
  saveAll();
  pranaState.active = false;
  pranaState.paused = false;
  releaseWakeLock();
  qClear();
  document.getElementById("prana-ov").classList.remove("show");
  updateDietPlanButtonLockUI();
}

/* ── Pranayama overlay buttons ──────────────────────────────── */
const pranaCloseBtn = document.getElementById("prana-close-btn");
if(pranaCloseBtn) pranaCloseBtn.addEventListener("click", closePranayama);

const pranaPauseBtn = document.getElementById("prana-pause-btn");
if(pranaPauseBtn) pranaPauseBtn.addEventListener("click", pauseResumePrana);

const pranaSkipBtn = document.getElementById("prana-skip-btn");
if(pranaSkipBtn) pranaSkipBtn.addEventListener("click", skipPranaPhase);

// Manual start — only allowed after today's goal is complete
const pranaStartBtn = document.getElementById("prana-start-btn");
if(pranaStartBtn) pranaStartBtn.addEventListener("click", () => {
  const done = todayDone();
  const goal = todayGoal();
  if(done < goal) {
    const btn = document.getElementById("prana-start-btn");
    const orig = btn.innerHTML;
    btn.innerHTML = "🚫 Complete " + (goal - done) + " more sets first!";
    btn.style.cssText = "background:linear-gradient(135deg,#3A1000,#1A1A0A);border-color:var(--danger);color:var(--danger)";
    setTimeout(() => { btn.innerHTML = orig; btn.style.cssText = ""; }, 2800);
    vib(100);
    speakText("Complete today's target of " + goal + " rounds first.");
    return;
  }
  showPranayama();
});

/* ── Controls ────────────────────────────────────────────────── */
const mainBtn = document.getElementById("main-btn");
if(mainBtn) mainBtn.addEventListener("click", handleMainBtn);

const resetBtn = document.getElementById("reset-btn");
if(resetBtn) resetBtn.addEventListener("click", resetSession);

const voiceBtn = document.getElementById("voice-btn");
if(voiceBtn) voiceBtn.addEventListener("click",()=>{
  voiceMuted=!voiceMuted; cfg.voiceOn=!voiceMuted;
  saveAll(); render();
  if(!voiceMuted) { qClear(); speakMantra("ॐ"); } else { qClear(); }
});

// CHART TABS — 7d / 14d / 21d day-window switchers
document.querySelectorAll(".chart-tab[data-days]").forEach(btn => {
  btn.addEventListener("click", () => {
    cfg.chartDays = parseInt(btn.dataset.days) || 7;
    syncChartUI();
    saveAll();
    renderBars();
  });
});

function syncChartUI() {
  const days = cfg.chartDays || 7;
  document.querySelectorAll(".chart-tab[data-days]").forEach(b => {
    b.classList.toggle("active", parseInt(b.dataset.days) === days);
  });
  const t = document.getElementById("chart-title");
  if(t) t.textContent = "Last "+days+" days progress";
}

// PACE BUTTONS — fix: always use integer, save immediately
const spdUp = document.getElementById("spd-up");
if(spdUp) spdUp.addEventListener("click",()=>{
  cfg.poseSeconds = Math.min(30, (cfg.poseSeconds||5)+1);
  saveAll(); render();
  // If currently running, restart pose timer with new duration
  if(sess.active&&!sess.paused){ poseTimerStart=Date.now(); }
});

const spdDn = document.getElementById("spd-dn");
if(spdDn) spdDn.addEventListener("click",()=>{
  cfg.poseSeconds = Math.max(2, (cfg.poseSeconds||5)-1);
  saveAll(); render();
  if(sess.active&&!sess.paused){ poseTimerStart=Date.now(); }
});

// Manual advance (auto off)
const ringWrap = document.querySelector(".ring-wrap");
if(ringWrap) ringWrap.addEventListener("click",()=>{
  if(sess.active&&!sess.paused&&!cfg.autoOn) advanceStep();
});

/* ── Settings ────────────────────────────────────────────────── */
function openSettings() {
  document.getElementById("cfg-inc").value      = cfg.dailyIncrease;
  document.getElementById("cfg-goal").value     = todayGoal();
  document.getElementById("cfg-max").value      = cfg.maxSets;
  document.getElementById("cfg-brk").value      = cfg.breakEvery;
  document.getElementById("cfg-pace").value     = cfg.poseSeconds;
  document.getElementById("cfg-grace").value    = cfg.graceSeconds;
  const ltBadge = document.getElementById("cfg-lifetime-badge");
  if(ltBadge) ltBadge.textContent = data.totalAllTime;
  const ltInput = document.getElementById("cfg-lifetime");
  if(ltInput) ltInput.value = data.totalAllTime;
  togSet("tog-voice",   cfg.voiceOn);
  togSet("tog-mantras", cfg.mantrasOn !== false);
  togSet("tog-breath",  cfg.breathOn  !== false);
  togSet("tog-auto",    cfg.autoOn);
  togSet("tog-prana",   cfg.pranayamaAuto !== false);
  document.getElementById("cfg-prana-min").value  = cfg.pranayamaMinutes || 35;
  document.getElementById("cfg-prana-lang").value = cfg.pranaLang || "en";
  togSet("tog-alarm", cfg.alarmOn !== false);
  togSet("tog-daytime-notif", cfg.daytimeNotifOn !== false);
  togSet("tog-diet-notif", cfg.dietNotifOn !== false);
  togSet("tog-auto-diet-post-goal", cfg.autoShowDietPostGoal !== false);
  const unEl = document.getElementById("cfg-user-name"); if(unEl) unEl.value = cfg.userName || "Vaibhav";
  const uwEl = document.getElementById("cfg-user-weight"); if(uwEl) uwEl.value = cfg.userWeight || 66;
  const bsEl = document.getElementById("cfg-bottle-size"); if(bsEl) bsEl.value = cfg.bottleMl || 1000;
  const dtEl = document.getElementById("cfg-diet-type"); if(dtEl) dtEl.value = cfg.dietType || "veg";
  const qlEl = document.getElementById("cfg-quote-lang"); if(qlEl) qlEl.value = cfg.quoteLang || cfg.pranaLang || "hi";
  document.getElementById("cfg-alarm-time").value =
    String(cfg.alarmHour||5).padStart(2,"0") + ":" +
    String(cfg.alarmMinute||0).padStart(2,"0");
  document.getElementById("cfg-voice-info").textContent =
    hiVoice ? "Active: "+hiVoice.name+" ("+hiVoice.lang+")"
            : "No hi-IN voice — install Hindi TTS in Android Settings → Language → Text-to-speech.";
  document.getElementById("dr").classList.add("show");
}
function closeSettings() {
  cfg.dailyIncrease = parseInt(document.getElementById("cfg-inc").value) || 4;
  const newGoal = parseInt(document.getElementById("cfg-goal").value) || 0;
  if(newGoal > 0) setTodayGoal(newGoal);  // always anchor programDay when user sets a goal
  cfg.maxSets       = parseInt(document.getElementById("cfg-max").value)   ||108;
  cfg.breakEvery    = parseInt(document.getElementById("cfg-brk").value)   ||12;
  cfg.poseSeconds   = Math.max(2, Math.min(30, parseInt(document.getElementById("cfg-pace").value)||5));
  cfg.graceSeconds  = Math.max(0, Math.min(30, parseInt(document.getElementById("cfg-grace").value)||5));
  // totalAllTime is read-only and automatically computed from backup/recovery & completed sets
  cfg.voiceOn          = togGet("tog-voice");
  cfg.mantrasOn        = togGet("tog-mantras");
  cfg.breathOn         = togGet("tog-breath");
  cfg.autoOn           = togGet("tog-auto");
  cfg.pranayamaAuto    = togGet("tog-prana");
  cfg.pranayamaMinutes = parseInt(document.getElementById("cfg-prana-min").value)||35;
  cfg.pranaLang        = document.getElementById("cfg-prana-lang").value || "en";
  cfg.alarmOn          = togGet("tog-alarm");
  cfg.daytimeNotifOn   = togGet("tog-daytime-notif");
  cfg.dietNotifOn      = togGet("tog-diet-notif");
  cfg.autoShowDietPostGoal = togGet("tog-auto-diet-post-goal");
  const unEl2 = document.getElementById("cfg-user-name"); if(unEl2) cfg.userName = unEl2.value.trim() || "Vaibhav";
  const uwEl2 = document.getElementById("cfg-user-weight"); if(uwEl2) cfg.userWeight = Math.max(30, Math.min(250, parseInt(uwEl2.value) || 66));
  const bsEl2 = document.getElementById("cfg-bottle-size"); if(bsEl2) cfg.bottleMl = parseInt(bsEl2.value) || 1000;
  const dtEl2 = document.getElementById("cfg-diet-type"); if(dtEl2) cfg.dietType = dtEl2.value || "veg";
  const aTime = document.getElementById("cfg-alarm-time").value || "05:00";
  const [aH, aM] = aTime.split(":").map(Number);
  cfg.alarmHour   = isNaN(aH) ? 5  : aH;
  cfg.alarmMinute = isNaN(aM) ? 0  : aM;
  const qlEl = document.getElementById("cfg-quote-lang"); if(qlEl) cfg.quoteLang = qlEl.value;
  voiceMuted      = !cfg.voiceOn;
  scheduleAlarm();   // reschedule with new time
  scheduleDaytimeNotifications(); // reschedule daytime notifications
  scheduleAyurvedicDietNotifications(); // reschedule diet notifications
  cfg.chartDays = parseInt(document.getElementById("cfg-chart-days").value) || 21;
  cfg.chartMode = document.getElementById("cfg-chart-mode").value || "bar";
  saveAll(); render();
  document.getElementById("dr").classList.remove("show");
}
const togSet=(id,on)=>document.getElementById(id).classList.toggle("on",on);
const togGet=id=>document.getElementById(id).classList.contains("on");
["tog-voice","tog-mantras","tog-breath","tog-auto","tog-prana","tog-alarm","tog-daytime-notif","tog-diet-notif","tog-auto-diet-post-goal"].forEach(id=>{
  const el = document.getElementById(id);
  if(el) el.addEventListener("click",function(){this.classList.toggle("on");});
});
const settingsBtn = document.getElementById("settings-btn");
if(settingsBtn) settingsBtn.addEventListener("click",openSettings);

const drClose = document.getElementById("dr-close");
if(drClose) drClose.addEventListener("click",closeSettings);

const drBg = document.getElementById("dr-bg");
if(drBg) drBg.addEventListener("click",closeSettings);

const qlSelect = document.getElementById("cfg-quote-lang");
if(qlSelect) {
  qlSelect.addEventListener("change", function(e) { setGitaQuoteLanguage(e.target.value); });
}

const resetDataBtn = document.getElementById("reset-data");
if(resetDataBtn) resetDataBtn.addEventListener("click", () => {
  if(!confirm("Reset practice history and data?\n\n(Your active PRO Plan subscription and remaining days will be preserved).")) return;

  // Preserve active subscription state and trial info
  const preservedSub = {
    isPremium      : data.isPremium || false,
    subSku         : data.subSku || "",
    subDate        : data.subDate || "",
    trialStartDate : data.trialStartDate || ""
  };

  // Reset practice data to initial clean state
  data = {
    history          : {},
    totalAllTime     : 0,
    totalTimeMs      : 0,
    totalPranaMs     : 0,
    programDay       : 1,
    lastDate         : "",
    baseGoal         : 0,
    goalDate         : "",
    lastGoal         : 0,
    lastCompletedGoal: 0,
    lastRecoveryAt   : 0,
    // Restore active PRO plan subscription info
    isPremium        : preservedSub.isPremium,
    subSku           : preservedSub.subSku,
    subDate          : preservedSub.subDate,
    trialStartDate   : preservedSub.trialStartDate
  };

  // Clear old version keys so old data isn't re-merged
  const OLD_KEYS = [
    "surya-v35","surya-v34","surya-v33","surya-v32","surya-v31","surya-v30","surya-v29",
    "surya-v28","surya-v27","surya-v26","surya-v25","surya-v24","surya-v23",
    "surya-v22","surya-v21","surya-v20","surya-v19","surya-v18","surya-v17",
    "surya-v16","surya-v15","surya-v14","surya-v13","surya-v12","surya-v11",
    "surya-v10","surya-v9","surya-v8","surya-v7","surya-v6","surya-v5",
    "surya-v4","surya-v3","surya-v2","surya-v1","surya-namaskara-data-v1","surya-v0"
  ];
  OLD_KEYS.forEach(k => { try { localStorage.removeItem(k); } catch(e){} });

  saveAll();
  location.reload();
});

/* ── PWA ─────────────────────────────────────────────────────── */
let deferredPrompt=null;
window.addEventListener("beforeinstallprompt",e=>{ e.preventDefault(); deferredPrompt=e;
  setStatus("Tap ⋮ → Add to Home Screen to install offline"); });
window.addEventListener("appinstalled",()=>setStatus("App installed! Works offline ✓"));
if("serviceWorker" in navigator){
  window.addEventListener("load", async () => {
    try {
      const reg = await navigator.serviceWorker.register("sw.js");
      // Show update banner when new SW installs
      const showBanner = () => {
        const b = document.getElementById("upd-banner");
        if(b) b.classList.add("show");
      };
      reg.addEventListener("updatefound", () => {
        const nw = reg.installing;
        nw.addEventListener("statechange", () => {
          if(nw.state==="installed" && navigator.serviceWorker.controller) showBanner();
        });
      });
      if(reg.waiting && navigator.serviceWorker.controller) showBanner();
      // Auto-reload when new SW takes over
      let refreshing=false;
      navigator.serviceWorker.addEventListener("controllerchange",()=>{
        if(!refreshing){refreshing=true;location.reload();}
      });
    } catch(e){ console.warn("SW:",e); }
  });
}

/* ═══════════════════════════════════════════════════════════════
   MIDNIGHT ROLLOVER SYSTEM — unlocks new goal at 12:00 AM daily
═══════════════════════════════════════════════════════════════ */
let _midnightTimer = null;

function checkMidnightRollover() {
  const today = todayKey();
  if(data.lastDate && data.lastDate !== today) {
    const last = new Date(data.lastDate + "T00:00:00");
    const cur  = new Date(today + "T00:00:00");
    const daysElapsed = Math.max(1, Math.round((cur - last) / 86400000));

    data.programDay = (data.programDay || 1) + daysElapsed;

    const lastComp = getLastCompletedGoal();
    for(let d = 1; d < daysElapsed; d++) {
      const skipDate = new Date(last.getTime() + d * 86400000).toISOString().slice(0, 10);
      if(!data.history[skipDate]) {
        const skipGoal = Math.min(lastComp + (cfg.dailyIncrease || 4), cfg.maxSets);
        data.history[skipDate] = { sets: 0, timeMs: 0, goal: skipGoal };
      }
    }

    data.baseGoal = 0;
    data.goalDate = "";
    data.lastDate = today;
    data.pranaFinishedToday = false;
    data.pranaClosedToday = false;

    const newG = todayGoal();
    if(!data.history[today]) {
      data.history[today] = { sets: 0, timeMs: 0, goal: newG };
    } else if(!data.history[today].goal) {
      data.history[today].goal = newG;
    }

    saveAll();
    render();
    updateWaterTrackerUI(); // Reset water tracker & unlock +1 Drink Water button at 12 AM Midnight!
    updateDietPlanButtonLockUI(); // Unlock Pranayama & Diet Plan button locks at 12 AM Midnight!
    updateClockDisplay();
    console.log("12 AM Midnight rollover complete | Date:", today, "| Today Goal:", newG);
  }
}
window.checkMidnightRollover = checkMidnightRollover;
window.scheduleMidnightRollover = scheduleMidnightRollover;

function scheduleMidnightRollover() {
  if(_midnightTimer) { clearTimeout(_midnightTimer); _midnightTimer = null; }

  const now = new Date();
  const nextMidnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
  const ms = nextMidnight.getTime() - now.getTime();

  _midnightTimer = setTimeout(() => {
    checkMidnightRollover();
    scheduleMidnightRollover();
  }, ms);

  const hrs = Math.floor(ms / 3600000);
  const mins = Math.round((ms % 3600000) / 60000);
  console.log("12 AM Midnight rollover scheduled in", hrs + "h " + mins + "m");
}

// visibilitychange handled in unified handler below



/* ═══════════════════════════════════════════════════════════════
   BHAGAVAD GITA DAILY MOTIVATIONAL QUOTES (365-Day Rotation)
═══════════════════════════════════════════════════════════════ */
const GITA_QUOTES = [
  {
    ref: "श्रीमद्भगवद्गीता २.४७ (BG 2.47)",
    sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥",
    hi: "तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं। इसलिए कर्म के फल की इच्छा मत करो और न ही अकर्म में आसक्त हो।",
    mr: "तुझा अधिकार फक्त कर्म करण्यावर आहे, त्याच्या फळावर कधीही नाही. म्हणून फळाची अपेक्षा न ठेवता तुझे कर्तव्य निष्ठेने कर.",
    en: "You have a right to perform your prescribed duty, but never to the fruits of action. Never consider yourself the cause of results, nor be attached to inaction."
  },
  {
    ref: "श्रीमद्भगवद्गीता ६.५ (BG 6.5)",
    sanskrit: "उद्धरेदात्मनात्मानं नात्मानमवसादयेत्।\nआत्मैव ह्यात्मनो बन्धुरात्मैव रिपुरात्मनः॥",
    hi: "अपने द्वारा अपना उद्धार करे, अपने आपको पतन में न डाले; क्योंकि मनुष्य स्वयं ही अपना मित्र है और स्वयं ही अपना शत्रु है।",
    mr: "स्वतःच्या प्रयत्नांनी स्वतःचा उद्धार करा, स्वतःला खचू देऊ नका. कारण मनुष्य स्वतःच स्वतःचा मित्र आणि स्वतःच स्वतःचा शत्रू आहे.",
    en: "Elevate yourself through the power of your own mind, and do not degrade yourself. For the mind is the friend of the self, and also the enemy of the self."
  },
  {
    ref: "श्रीमद्भगवद्गीता २.५० (BG 2.50)",
    sanskrit: "बुद्धियुक्तो जहातीह उभे सुकृतदुष्कृते।\nतस्माद्योगाय युज्यस्व योगः कर्मसु कौशलम्॥",
    hi: "समत्व बुद्धि से युक्त मनुष्य जीवित रहते ही पुण्य और पाप दोनों को छोड़ देता है। इसलिए योग में लग जाओ; कर्मों में कुशलता ही योग है।",
    mr: "समत्व बुद्धी असलेला मनुष्य जन्मातच पुण्य आणि पाप दोन्ही सोडून देतो. म्हणून योगाचा सराव करा; कर्मांमध्ये कुशलता म्हणजेच योग.",
    en: "A person endowed with wisdom casts off both good and evil deeds in this life. Therefore, devote yourself to Yoga; Yoga is skill in action."
  },
  {
    ref: "श्रीमद्भगवद्गीता २.१४ (BG 2.14)",
    sanskrit: "मात्रास्पर्शास्तु कौन्तेय शीतोष्णसुखदुःखदाः।\nआगमापायिनोऽनित्यास्तांस्तितिक्षस्व भारत॥",
    hi: "हे कुन्तीपुत्र! सर्दी-गर्मी और सुख-दुःख देने वाले इन्द्रिय-विषय अनित्य और आने-जाने वाले हैं। हे भारत! तुम उनको धैर्यापूर्वक सहन करो।",
    mr: "हे कौंतेय! सुख-दुःख देणारे इंद्रियांचे विषय अनित्य आणि येणारे-जाणारे आहेत. हे भारत! तू ते धैर्याने सहन कर.",
    en: "O son of Kunti, the contact between senses and objects gives rise to cold, heat, pleasure, and pain. They are temporary; bear them patiently."
  },
  {
    ref: "श्रीमद्भगवद्गीता १८.७८ (BG 18.78)",
    sanskrit: "यत्र योगेश्वरः कृष्णो यत्र पार्थो धनुर्धरः।\nतत्र श्रीर्विजयो भूतिर्ध्रुवा नीतिर्मतिर्मम॥",
    hi: "जहाँ योगेश्वर श्रीकृष्ण हैं और जहाँ धनुर्धारी अर्जुन है, वहीं श्री, विजय, ऐश्वर्य और अचल नीति है।",
    mr: "जिथे योगेश्वर श्रीकृष्ण आणि धनुर्धारी अर्जुन आहे, तिथेच विजय, समृद्धी आणि नीती राहते.",
    en: "Wherever there is Krishna, the Lord of Yoga, and wherever there is Arjuna, the wielder of the bow, there will be fortune, victory, and morality."
  },
  {
    ref: "श्रीमद्भगवद्गीता ४.३८ (BG 4.38)",
    sanskrit: "न हि ज्ञानेन सदृशं पवित्रमिह विद्यते।\nतत्स्वयं योगसंसिद्धः कालेनात्मनि विन्दति॥",
    hi: "इस संसार में ज्ञान के समान पवित्र करने वाला कुछ भी नहीं है। योग में सिद्ध हुआ मनुष्य सही समय आने पर उस ज्ञान को अपने आप में पा लेता है।",
    mr: "या जगात ज्ञानासारखे पवित्र काहीही नाही. योगात सिद्ध झालेला मनुष्य योग्य वेळी ते ज्ञान स्वतःमध्ये प्राप्त करतो.",
    en: "In this world, there is nothing so purifying as divine knowledge. One perfected in Yoga finds that knowledge within themselves in due time."
  },
  {
    ref: "श्रीमद्भगवद्गीता ९.२२ (BG 9.22)",
    sanskrit: "अनन्याश्चिन्तयन्तो मां ये जनाः पर्युपासते।\nतेषां नित्याभियुक्तानां योगक्षेमं वहाम्यहम्॥",
    hi: "जो लोग अनन्य भाव से मेरा चिंतन करते हुए मेरी उपासना करते हैं, उन नित्य युक्त मनुष्यों के योगक्षेम का वहन मैं स्वयं करता हूँ।",
    mr: "जे अनन्यभावाने माझे चिंतन करत माझी उपासना करतात, त्या नित्ययुक्त भक्तांच्या योगक्षेमाची जबाबदारी मी स्वतः घेतो.",
    en: "For those who always worship Me with exclusive devotion, meditating on My divine form, I personally carry what they lack and preserve what they have."
  },
  {
    ref: "श्रीमद्भगवद्गीता ६.६ (BG 6.6)",
    sanskrit: "बन्धुरात्मात्मनस्तस्य येनात्मैवात्मना जितः।\nअनात्मनस्तु शत्रुत्वे वर्तेतात्मैव शत्रुवत्॥",
    hi: "जिसने अपने मन पर विजय प्राप्त कर ली है, उसका मन उसका परम मित्र है; परंतु जिसने मन को नहीं जीता, उसका मन शत्रु की भांति व्यवहार करता है।",
    mr: "ज्याने आपल्या मनावर विजय मिळवला आहे, त्याचे मन त्याचा सर्वोत्तम मित्र आहे. परंतु ज्याने मन जिंकले नाही, त्याचे मन शत्रूसारखे वागते.",
    en: "For him who has conquered the mind, the mind is the best of friends; but for one who has failed to do so, his mind remains the greatest enemy."
  },
  {
    ref: "श्रीमद्भगवद्गीता ३.१९ (BG 3.19)",
    sanskrit: "तस्मादसक्तः सततं कार्यं कर्म समाचर।\nअसक्तो ह्याचरन्कर्म परमाप्नोति पूरुषः॥",
    hi: "इसलिए आसक्ति से रहित होकर निरंतर अपने कर्तव्य कर्म का पालन करो; क्योंकि निष्काम भाव से कर्म करने से मनुष्य परमात्मा को प्राप्त होता है।",
    mr: "म्हणून आसक्ती न ठेवता नेहमी आपले कर्तव्य कर्म निष्ठेने करा. निष्काम कर्म केल्याने मनुष्य परमतत्त्वाला प्राप्त होतो.",
    en: "Therefore, without attachment, perform your duty always. By working without attachment, a person attains the Supreme."
  },
  {
    ref: "श्रीमद्भगवद्गीता ६.१७ (BG 6.17)",
    sanskrit: "युक्ताहारविहारस्य युक्तचेष्टस्य कर्मसु।\nयुक्तस्वप्नावबोधस्य योगो भवति दुःखहा॥",
    hi: "जिसका आहार-विहार संतुलित है, कर्मों में चेष्टा संतुलित है, और सोने-जागने का समय नियमित है, उसका योग सभी दुःखों का नाश करने वाला होता है।",
    mr: "ज्याचा आहार-विहार संतुलित आहे, कर्मांमध्ये प्रयत्न योग्य आहेत, आणि झोपणे-जागणे वेळेवर आहे, त्याचा योग सर्व दुःखांचा नाश करतो.",
    en: "He who is regulated in his habits of eating, sleeping, recreation, and work can mitigate all material pains by practicing Yoga."
  },
  {
    ref: "श्रीमद्भगवद्गीता २.७० (BG 2.70)",
    sanskrit: "आपूर्यमाणमचलप्रतिष्ठं समुद्रमापः प्रविशन्ति यद्वत्।\nतद्वत्कामा यं प्रविशन्ति सर्वे स शान्तिमाप्नोति न कामकामी॥",
    hi: "जिस प्रकार सभी नदियाँ परिपूर्ण समुद्र में समाकर उसे विचलित नहीं करतीं, उसी प्रकार जिस मनुष्य में भोग विचलित किए बिना समा जाते हैं, वही शांति पाता है।",
    mr: "ज्याप्रमाणे सर्व नद्या समुद्रात येऊन मिळतात तरी समुद्र शांत राहतो, त्याचप्रमाणे ज्याचे मन वासनांनी विचलित होत नाही, तोच खरी शांती अनुभवतो.",
    en: "As the ocean remains calm despite rivers constantly flowing into it, so does the person attain peace into whom all desires merge without causing disturbance."
  },
  {
    ref: "श्रीमद्भगवद्गीता ११.३३ (BG 11.33)",
    sanskrit: "तस्मात्त्वमुत्तिष्ठ यशो लभस्व जित्वा शत्रून्भुङ्क्ष्व राज्यं समृद्धम्।\nमयैवैते निहताः पूर्वमेव निमित्तमात्रं भव सव्यसाचिन्॥",
    hi: "इसलिए तुम उठो! यश प्राप्त करो, शत्रुओं को जीतकर समृद्ध राज्य का भोग करो। ये सब तो पहले ही मेरे द्वारा मारे जा चुके हैं, तुम केवल निमित्त मात्र बनो।",
    mr: "म्हणून तू उठ! यश मिळव, शत्रूंवर विजय मिळवून समृद्ध राज्याचा उपभोग घे. हे सर्व आधीच माझ्याद्वारे मारले गेले आहेत, तू फक्त निमित्त बन.",
    en: "Therefore get up and attain glory! Conquer your enemies and enjoy a prosperous kingdom. They have already been slain by Me; be merely an instrument."
  },
  {
    ref: "श्रीमद्भगवद्गीता ४.७ (BG 4.7)",
    sanskrit: "यदा यदा हि धर्मस्य ग्लानिर्भवति भारत।\nअभ्युत्थानमधर्मस्य तदात्मानं सृजाम्यहम्॥",
    hi: "हे भारत! जब-जब धर्म की हानि और अधर्म की वृद्धि होती है, तब-तब मैं धर्म की पुनर्स्थापना के लिए स्वयं को प्रकट करता हूँ।",
    mr: "हे भारत! जेव्हा जेव्हा धर्माची हानी होते आणि अधर्म वाढतो, तेव्हा तेव्हा मी स्वतःला प्रकट करतो.",
    en: "Whenever there is a decline in righteousness and a rise of unrighteousness, O Bharat, at that time I manifest Myself."
  },
  {
    ref: "श्रीमद्भगवद्गीता १८.६६ (BG 18.66)",
    sanskrit: "सर्वधर्मान्परित्यज्य मामेकं शरणं व्रज।\nअहं त्वा सर्वपापेभ्यो मोक्षयिष्यामि मा शुचः॥",
    hi: "सब धर्मों को छोड़कर केवल मेरी शरण में आ जाओ। मैं तुम्हें सब पापों से मुक्त कर दूँगा, शोक मत करो।",
    mr: "सर्व चिंता व आश्रय सोडून फक्त माझ्या शरण ये. मी तुला सर्व संकटांतून व पापांतून मुक्त करीन, काळजी करू नकोस.",
    en: "Abandon all varieties of dharmas and simply surrender unto Me alone. I shall deliver you from all sinful reactions; do not fear."
  },
  {
    ref: "श्रीमद्भगवद्गीता २.३ (BG 2.3)",
    sanskrit: "क्लैब्यं मा स्म गमः पार्थ नैतत्त्वय्युपपद्यते।\nक्षुद्रं हृदयदौर्बल्यं त्यक्त्वात्तिष्ठ परन्तप॥",
    hi: "हे पार्थ! नपुंसकता को मत प्राप्त हो, यह तुम्हें शोभा नहीं देती। हे परंतप! हृदय की तुच्छ दुर्बलता को त्यागकर युद्ध के लिए खड़े हो जाओ।",
    mr: "हे पार्था! अशक्तपणा बाळगू नकोस, हे तुला शोभत नाही. मनाचा लहानपणा आणि दुर्बलता सोडून उठून उभा राहा.",
    en: "Do not yield to unmanliness, O Arjuna. It does not befit you. Cast off this petty weakness of heart and arise, O scorcher of enemies!"
  },
  {
    ref: "श्रीमद्भगवद्गीता २.३८ (BG 2.38)",
    sanskrit: "सुखदुःखे समे कृत्वा लाभालाभौ जयाजयौ।\nततो युद्धाय युज्यस्व नैवं पापमवाप्स्यसि॥",
    hi: "सुख और दुःख, लाभ और हानि, जय और पराजय को समान मानकर अपने कर्तव्य के लिए तत्पर हो जाओ; इस प्रकार तुम पाप को प्राप्त नहीं होगे।",
    mr: "सुख-दुःख, लाभ-हानी, विजय-पराजय समान मानून कर्तव्यासाठी सज्ज हो. असे केल्याने तुला पाप लागणार नाही.",
    en: "Treating pleasure and pain, gain and loss, victory and defeat alike, engage in your duty. Thus you shall incur no sin."
  },
  {
    ref: "श्रीमद्भगवद्गीता २.४० (BG 2.40)",
    sanskrit: "नेहाभिक्रमनाशोऽस्ति प्रत्यवायो न विद्यते।\nस्वल्पमप्यस्य धर्मस्य त्रायते महतो भयात्॥",
    hi: "इस कर्मयोग में प्रयास का नाश नहीं होता और न ही कोई विपरीत परिणाम होता है। इसका थोड़ा-सा भी आचरण महान भय से रक्षा करता है।",
    mr: "या कर्मयोगात केलेला छोटा प्रयत्नही वाया जात नाही. याचे थोडेसे आचरणही मोठ्या भयापासून संरक्षण करते.",
    en: "In this path of Yoga, no effort is ever wasted, nor is there any adverse effect. Even a little practice of this righteousness protects one from great fear."
  },
  {
    ref: "श्रीमद्भगवद्गीता २.४८ (BG 2.48)",
    sanskrit: "योगस्थः कुरु कर्माणि सङ्गं त्यक्त्वा धनञ्जय।\nसिद्ध्यसिद्ध्योः समो भूत्वा समत्वं योग उच्यते॥",
    hi: "हे धनंजय! आसक्ति को त्यागकर तथा सिद्धि और असिद्धि में समभाव रखकर योग में स्थित होकर कर्म करो; समत्व ही योग कहलाता है।",
    mr: "हे धनंजया! आसक्ती सोडून, यश-अपयशात समतोल ठेवून योगात स्थिर होऊन कर्म कर. या समत्वालाच योग म्हणतात.",
    en: "Be steadfast in Yoga, O Arjuna. Perform your duty without attachment, remaining even-minded in success and failure. Equanimity is called Yoga."
  },
  {
    ref: "श्रीमद्भगवद्गीता ३.८ (BG 3.8)",
    sanskrit: "नियतं कुरु कर्म त्वं कर्म ज्यायो ह्यकर्मणः।\nशरीरयात्रापि च ते न प्रसिद्ध्येदकर्मणः॥",
    hi: "तुम अपना नियत कर्तव्य कर्म करो, क्योंकि कर्म न करने की अपेक्षा कर्म करना श्रेष्ठ है। कर्म न करने से तुम्हारा शरीर-निर्वाह भी सिद्ध नहीं होगा।",
    mr: "तू तुझे नियत कर्तव्य कर्म कर, कारण कर्म न करण्यापेक्षा कर्म करणे श्रेष्ठ आहे. कर्माशिवाय तुझे शरीर चालणेही शक्य नाही.",
    en: "Perform your prescribed duty, for action is better than inaction. A person cannot even maintain their physical body without action."
  },
  {
    ref: "श्रीमद्भगवद्गीता ३.२१ (BG 3.21)",
    sanskrit: "यद्यदाचरति श्रेष्ठस्तत्तदेवेतरो जनः।\nस यत्प्रमाणं कुरुते लोकस्तदनुवर्तते॥",
    hi: "श्रेष्ठ पुरुष जो-जो आचरण करता है, अन्य लोग भी वैसा ही आचरण करते हैं। वह जो प्रमाण प्रस्तुत करता है, समस्त संसार उसका अनुसरण करता है।",
    mr: "श्रेष्ठ व्यक्ती जसे आचरण करते, इतर लोकही तसेच करतात. ती व्यक्ती जो आदर्श ठेवते, सर्व जग त्याचेच अनुकरण करते.",
    en: "Whatever action a great leader performs, common people follow. Whatever standards they set by exemplary acts, all the world pursues."
  },
  {
    ref: "श्रीमद्भगवद्गीता ४.२४ (BG 4.24)",
    sanskrit: "ब्रह्मार्पणं ब्रह्म हविर्ब्रह्माग्नौ ब्रह्मणा हुतम्।\nब्रह्मैव तेन गन्तव्यं ब्रह्मकर्मसमाधिना॥",
    hi: "जिस यज्ञ में अर्पण भी ब्रह्म है, हवि भी ब्रह्म है, और अग्नि भी ब्रह्म है, उस ब्रह्मकर्म समाधि वाले मनुष्य द्वारा ब्रह्म ही प्राप्त करने योग्य है।",
    mr: "ज्या कर्मात अर्पण, आहुती आणि अग्नी सर्व ब्रह्ममय आहे, त्या निष्काम कर्म करणाऱ्या साधकाला ब्रह्मच प्राप्त होते.",
    en: "The offering is Brahman, the oblation is Brahman, offered by Brahman into the fire of Brahman. Brahman shall be reached by him who is absorbed in Brahman."
  },
  {
    ref: "श्रीमद्भगवद्गीता ४.३९ (BG 4.39)",
    sanskrit: "श्रद्धावाँल्लभते ज्ञानं तत्परः संयतेन्द्रियः।\nज्ञानं लब्ध्वा परां शानतिमचिरेणाधिगच्छति॥",
    hi: "श्रद्धावान, तत्पर और जितेन्द्रिय मनुष्य ज्ञान को प्राप्त करता है, और ज्ञान प्राप्त करके वह शीघ्र ही परम शांति को प्राप्त हो जाता है।",
    mr: "ज्याच्याकडे श्रद्धा आहे, संयम आहे आणि जो अभ्यासात तत्पर आहे, तो ज्ञान मिळवतो आणि लवकरच परम शांतता अनुभवतो.",
    en: "The faithful who are dedicated to truth and control their senses attain spiritual knowledge. Having gained knowledge, they quickly reach supreme peace."
  },
  {
    ref: "श्रीमद्भगवद्गीता ५.१२ (BG 5.12)",
    sanskrit: "युक्तः कर्मफलं त्यक्त्वा शान्तिमाप्नोति नैष्ठिकीम्।\nअयुक्तः कामकारेण फले सक्तो निबध्यते॥",
    hi: "कर्मयोगी कर्मफल का त्याग करके परम शांति को प्राप्त करता है; परंतु सकामी मनुष्य फल की इच्छा के कारण बंधन में बँध जाता है।",
    mr: "कर्मयोगी कर्मफळाचा त्याग करून शाश्वत शांती मिळवतो. परंतु फळाची इच्छा ठेवणारा माणूस संकटात आणि बंधनात अडकतो.",
    en: "The united soul, relinquishing the fruit of action, attains everlasting peace; whilst the non-united, impelled by desire, gets bound."
  },
  {
    ref: "श्रीमद्भगवद्गीता ६.१९ (BG 6.19)",
    sanskrit: "यथा दीपो निवातस्थो निङ्गते सोपमा स्मृता।\nयोगिनो यतचित्तस्य युञ्जतो योगमात्मनः॥",
    hi: "जिस प्रकार हवा से रहित स्थान में दीपक की लौ विचलित नहीं होती, वही उपमा ध्यान में लगे हुए संयमी योगी के चित्त की मानी गई है।",
    mr: "ज्याप्रमाणे वाऱ्याशिवाय ठिकाणी दिव्याची ज्योत स्थिर राहते, त्याचप्रमाणे ध्यान करणाऱ्या संयमी योग्याचे मन स्थिर राहते.",
    en: "As a lamp in a windless place does not flicker, so is the controlled mind of a yogi practiced in meditation on the Self."
  },
  {
    ref: "श्रीमद्भगवद्गीता ६.२६ (BG 6.26)",
    sanskrit: "यतो यतो निश्चरति मनश्चञ्चलमस्थिरम्।\nततस्ततो नियम्यैतदात्मन्येव वशं नयेत्॥",
    hi: "यह चंचल और अस्थिर मन जहाँ-जहाँ भटकता है, वहाँ-वहाँ से इसे रोककर आत्मा के ही वश में लाना चाहिए।",
    mr: "हे चंचल मन जिथे जिथे भटकते, तिथून त्याला परत आणून स्वतःच्या आत्म्यामध्ये स्थिर केले पाहिजे.",
    en: "From whatever cause the restless and unsteady mind wanders away, from that it should be restrained and brought under the control of the Self."
  },
  {
    ref: "श्रीमद्भगवद्गीता १०.४१ (BG 10.41)",
    sanskrit: "यद्यद्विभूतिमत्सत्त्वं श्रीमदूर्जितमेव वा।\nतत्तदेवावगच्छ त्वं मम तेजोंशसम्भवम्॥",
    hi: "जो-जो भी ऐश्वर्ययुक्त, कान्तियुक्त और शक्तिमान वस्तु है, उस-उस को तुम मेरे ही तेज के अंश से उत्पन्न समझो।",
    mr: "जगात जी जी गोष्ट तेजस्वी, समृद्ध आणि सामर्थ्यवान आहे, ती सर्व माझ्याच तेजाच्या अंशापासून तयार झाली आहे हे समज.",
    en: "Whatever glorious, beautiful, or mighty creation exists, know that it springs from but a spark of My splendor."
  },
  {
    ref: "श्रीमद्भगवद्गीता १२.१५ (BG 12.15)",
    sanskrit: "यस्मान्नोद्विजते लोको लोकान्नोद्विजते च यः।\nहर्षामर्षभयोद्वेगैर्मुक्तो यः स च मे प्रियः॥",
    hi: "जिससे कोई भी जीव विचलित नहीं होता और जो स्वयं किसी से विचलित नहीं होता, जो हर्ष, अमर्ष, भय और उद्वेग से मुक्त है, वही मुझे प्रिय है।",
    mr: "ज्यामुळे कोणीही घाबरत नाही आणि जो कोणालाही घाबरत नाही, जो आनंद, भीती व चिंतेपासून मुक्त आहे, तोच मला प्रिय आहे.",
    en: "He by whom the world is not agitated and who is not agitated by the world, who is free from joy, envy, fear, and anxiety—he is dear to Me."
  },
  {
    ref: "श्रीमद्भगवद्गीता १६.१ (BG 16.1)",
    sanskrit: "अभयं सत्त्वसंशुद्धिर्ज्ञानयोगव्यवस्थितिः।\nदानं दमश्च यज्ञश्च स्वाध्यायस्तप आर्जविम्॥",
    hi: "निर्भयता, अंतःकरण की शुद्धि, ज्ञानयोग में दृढ स्थिति, दान, इंद्रिय-दमन, यज्ञ, स्वाध्याय, तप और सरलता—ये सब दैवी गुण हैं।",
    mr: "भीतीहीनता, अंतःकरणाची शुद्धी, ज्ञानातील निष्ठा, दान, संयम आणि सरळपणा—हे सर्व दैवी गुण आहेत.",
    en: "Fearlessness, purity of heart, steadfastness in knowledge, charity, self-control, sacrifice, study of scriptures, austerity, and simplicity."
  },
  {
    ref: "श्रीमद्भगवद्गीता १७.३ (BG 17.3)",
    sanskrit: "सत्त्वानुरूपा सर्वस्य श्रद्धा भवति भारत।\nश्रद्धामयोऽयं पुरुषो यो यच्छ्रद्धः स एव सः॥",
    hi: "हे भारत! सभी मनुष्यों की श्रद्धा उनके अंतःकरण के अनुरूप होती है। मनुष्य श्रद्धामय है; जैसी जिसकी श्रद्धा है, वैसा ही वह स्वयं है।",
    mr: "हे भारत! प्रत्येकाची श्रद्धा त्याच्या स्वभावावर अवलंबून असते. माणूस जशी श्रद्धा बाळगतो, तसाच तो बनतो.",
    en: "The faith of all human beings is according to their innate nature. A person is made by their faith; as their faith is, so indeed are they."
  },
  {
    ref: "श्रीमद्भगवद्गीता १८.४६ (BG 18.46)",
    sanskrit: "यतः प्रवृत्तिर्भूतानां येन सर्वमिदं ततम्।\nस्वकर्मणा तमभ्यर्च्य सिद्धिं विन्दति मानवः॥",
    hi: "जिस परमेश्वर से सभी प्राणियों की उत्पत्ति हुई है और जिससे यह समस्त जगत व्याप्त है, उसकी अपने स्वाभाविक कर्मों द्वारा पूजा करके मनुष्य सिद्धि पाता है।",
    mr: "ज्या ईश्वरापासून सर्व सृष्टी निर्माण झाली आहे, त्याची आपल्या कर्माने पूजा करून मनुष्य यशाची सिद्धी मिळवतो.",
    en: "By worshipping Him from whom all beings originate and by whom this entire universe is pervaded, through one's own natural work, a person attains perfection."
  },
  {
    ref: "श्रीमद्भगवद्गीता १८.६१ (BG 18.61)",
    sanskrit: "ईश्वरः सर्वभूतानां हृद्देशेऽर्जुन तिष्ठति।\nभ्रामयन्सर्वभूतानि यन्त्रारूढानि मायया॥",
    hi: "हे अर्जुन! ईश्वर सभी प्राणियों के हृदय में स्थित है और अपनी माया से सभी जीवों को शरीर रूपी यंत्र पर सवार करके घुमाता रहता है।",
    mr: "हे अर्जुना! ईश्वर सर्व प्राण्यांच्या हृदयात राहतो आणि आपल्या मायेने सर्व जीवांना प्रवाहित ठेवतो.",
    en: "The Supreme Lord dwells in the hearts of all living beings, directing their wanderings through His divine energy."
  },
  {
    ref: "श्रीमद्भगवद्गीता १८.७३ (BG 18.73)",
    sanskrit: "नष्टो मोहः स्मृतिर्लब्धा त्वत्प्रसादान्मयाच्युत।\nस्थितोऽस्मि गतसन्देहः करिष्ये वचनं तव॥",
    hi: "हे अच्युत! आपकी कृपा से मेरा मोह नष्ट हो गया और मुझे स्मृति प्राप्त हो गई है। अब मैं संशय-रहित होकर आपके वचन का पालन करूँगा।",
    mr: "हे अच्युता! तुझ्या कृपेने माझा भ्रम दूर झाला आहे. आता मी संशयरहित होऊन तुझ्या आज्ञेचे पालन करीन.",
    en: "My illusion is destroyed and I have regained my memory through Your grace, O Krishna. I am firm, free from doubt, and shall act according to Your word."
  }
];

function getDailyGitaQuote() {
  const d = new Date();
  const start = new Date(d.getFullYear(), 0, 0);
  const diff = d - start;
  const oneDay = 1000 * 60 * 60 * 24;
  const dayOfYear = Math.floor(diff / oneDay);
  const idx = Math.abs(dayOfYear) % GITA_QUOTES.length;
  return GITA_QUOTES[idx];
}

function getQuoteMeaning(quote, langOverride) {
  if(!quote) quote = getDailyGitaQuote();
  const lang = langOverride || cfg.quoteLang || cfg.pranaLang || "hi";
  if(lang === "mr") return quote.mr || quote.hi || quote.en;
  if(lang === "en") return quote.en || quote.hi;
  return quote.hi || quote.en;
}

function setGitaQuoteLanguage(lang) {
  if(!lang || !["hi", "mr", "en"].includes(lang)) return;
  cfg.quoteLang = lang;
  
  const qlEl = document.getElementById("cfg-quote-lang"); if(qlEl) qlEl.value = lang;
  const mqEl = document.getElementById("modal-quote-lang"); if(mqEl) mqEl.value = lang;

  const quote = getDailyGitaQuote();
  const meaning = getQuoteMeaning(quote, lang);
  const gmEl = document.getElementById("gita-meaning"); if(gmEl) gmEl.textContent = meaning;
  
  saveAll();
}

let alarmSnoozeCount = 0;
let _snoozeTimeout = null;

function snoozeAlarm(min) {
  if (alarmSnoozeCount >= 2) {
    alert("Snooze limit reached! You can snooze max 2 times for today's alarm.");
    return;
  }
  const snoozeMins = parseInt(min) || 5;
  alarmSnoozeCount++;

  closeGitaQuoteModal();
  qClear();

  if (_snoozeTimeout) { clearTimeout(_snoozeTimeout); _snoozeTimeout = null; }

  const ms = snoozeMins * 60 * 1000;
  _snoozeTimeout = setTimeout(() => {
    fireAlarm(true);
  }, ms);

  setStatus("⏰ Alarm snoozed for " + snoozeMins + " min (Snooze " + alarmSnoozeCount + "/2)");

  const now = new Date(Date.now() + ms);
  _tryAndroidAlarm(now.getHours(), now.getMinutes());
}

function showGitaQuoteModal() {
  const quote = getDailyGitaQuote();
  const lang = cfg.quoteLang || cfg.pranaLang || "hi";
  const meaning = getQuoteMeaning(quote, lang);
  const goal = todayGoal();

  const grEl = document.getElementById("gita-ref"); if(grEl) grEl.textContent = quote.ref;
  const gsEl = document.getElementById("gita-shloka"); if(gsEl) gsEl.innerHTML = quote.sanskrit.replace(/\n/g, "<br>");
  const gmEl = document.getElementById("gita-meaning"); if(gmEl) gmEl.textContent = meaning;
  const gtEl = document.getElementById("gita-target-pill"); if(gtEl) gtEl.textContent = "🎯 Today's Target: " + goal + " Rounds";

  const qlEl = document.getElementById("cfg-quote-lang"); if(qlEl) qlEl.value = lang;
  const mqEl = document.getElementById("modal-quote-lang"); if(mqEl) mqEl.value = lang;

  // Update Snooze Controls state (Max 2 times)
  const snLbl = document.getElementById("snooze-count-label");
  const sn5   = document.getElementById("snooze-5-btn");
  const sn10  = document.getElementById("snooze-10-btn");
  if(snLbl && sn5 && sn10) {
    if(alarmSnoozeCount >= 2) {
      snLbl.textContent = "⏰ SNOOZE LIMIT REACHED (2/2 USED)";
      snLbl.style.color = "var(--danger)";
      sn5.disabled = true;  sn5.style.opacity = "0.4";  sn5.style.cursor = "not-allowed";
      sn10.disabled = true; sn10.style.opacity = "0.4"; sn10.style.cursor = "not-allowed";
    } else {
      const remaining = 2 - alarmSnoozeCount;
      snLbl.textContent = "⏰ SNOOZE ALARM (" + remaining + " LEFT)";
      snLbl.style.color = "var(--warn)";
      sn5.disabled = false;  sn5.style.opacity = "1";  sn5.style.cursor = "pointer";
      sn10.disabled = false; sn10.style.opacity = "1"; sn10.style.cursor = "pointer";
    }
  }

  // Ensure Start Surya Namaskara Now button is unlocked for user decision
  const startBtn = document.getElementById("gita-start-btn");
  if(startBtn) {
    startBtn.disabled = false;
    startBtn.style.opacity = "1";
    startBtn.style.cursor = "pointer";
    startBtn.innerHTML = "🧘 Start Surya Namaskara Now";
  }

  const modal = document.getElementById("gita-modal");
  if(modal) {
    modal.style.display = "flex";
    modal.classList.add("show");
  }

  speakCurrentGitaQuote();
}

function closeGitaQuoteModal() {
  const modal = document.getElementById("gita-modal");
  if(modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
  }
  qClear();
}

function speakCurrentGitaQuote(onComplete) {
  if(voiceMuted || !window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") {
    if(onComplete) onComplete();
    return;
  }
  const quote = getDailyGitaQuote();
  const lang = cfg.quoteLang || cfg.pranaLang || "hi";
  const meaning = getQuoteMeaning(quote, lang);

  qClear();

  // 1. Speak Sanskrit Shloka first
  const uShloka = new SpeechSynthesisUtterance(quote.sanskrit.replace(/\n/g, " "));
  uShloka.lang = "hi-IN";
  uShloka.rate = 0.92;
  uShloka.pitch = 1.0;
  
  // 2. Speak Meaning in user selected language
  const uMeaning = new SpeechSynthesisUtterance(meaning);
  if(lang === "en") {
    uMeaning.lang = "en-IN"; uMeaning.rate = 0.95;
  } else if(lang === "mr") {
    uMeaning.lang = "mr-IN"; uMeaning.rate = 0.92;
  } else {
    uMeaning.lang = "hi-IN"; uMeaning.rate = 0.92;
  }

  if(onComplete) {
    uMeaning.onend = () => { onComplete(); };
    uMeaning.onerror = () => { onComplete(); };
  }

  qSpeak(uShloka);
  qSpeak(uMeaning);
}

function startPracticeFromAlarm() {
  if(_snoozeTimeout) { clearTimeout(_snoozeTimeout); _snoozeTimeout = null; }
  alarmSnoozeCount = 0;
  closeGitaQuoteModal();
  if(!sess.active) {
    startFreshPracticeSession();
  }
}

function playAlarmBellSound() {
  try {
    const ctx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "sine";
    osc.frequency.setValueAtTime(528, ctx.currentTime); // 528Hz Solfeggio / Temple Bell
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 3.0);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 3.0);
  } catch(e) {}
}

// Global Android Alarm intent bridge
window.setAndroidAlarm = function(h, m) {
  const hour = h !== undefined ? h : (cfg.alarmHour || 5);
  const min  = m !== undefined ? m : (cfg.alarmMinute || 0);
  _tryAndroidAlarm(hour, min);
};

window.setGitaQuoteLanguage = setGitaQuoteLanguage;
window.snoozeAlarm = snoozeAlarm;


/* ═══════════════════════════════════════════════════════════════
   DAILY ALARM SYSTEM
   1. setTimeout fires at exact alarm time in browser / web PWA
   2. Service Worker & Notification API trigger notification
   3. Android system alarm deep-link opens Clock app
   4. visibilitychange — when user opens app near alarm time, speak greeting
═══════════════════════════════════════════════════════════════ */

async function clearAppCacheAndReload() {
  if (confirm("Clear old app cache & reload the updated version? (Your workout history will be preserved)")) {
    try {
      if ("serviceWorker" in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations();
        for (let reg of registrations) {
          await reg.unregister();
        }
      }
      if ("caches" in window) {
        const keys = await caches.keys();
        for (let key of keys) {
          await caches.delete(key);
        }
      }
      alert("✓ Old cache cleared! Reloading updated version...");
      window.location.reload(true);
    } catch (e) {
      window.location.reload();
    }
  }
}
window.clearAppCacheAndReload = clearAppCacheAndReload;

async function requestNotificationPermission() {
  if(!("Notification" in window)) return false;
  if(Notification.permission === "granted") return true;
  if(Notification.permission === "denied") return false;
  try {
    const result = await Notification.requestPermission();
    return result === "granted";
  } catch(e) { return false; }
}

let _notifBlinkInterval = null;

function blinkAppIconNotification(customTitle) {
  const icon = document.getElementById("header-smiling-sun-icon");
  if (icon) {
    icon.classList.add("sun-blinking-notif");
    setTimeout(() => {
      icon.classList.remove("sun-blinking-notif");
    }, 10000);
  }

  // App badge on mobile/PWA
  if ("setAppBadge" in navigator) {
    try { navigator.setAppBadge(1); } catch (e) {}
  }

  // Flash tab title
  const origTitle = document.title;
  let count = 0;
  if (_notifBlinkInterval) clearInterval(_notifBlinkInterval);
  _notifBlinkInterval = setInterval(() => {
    document.title = (count % 2 === 0) ? "☀️ 🔔 New Reminder! · Suryasarthi" : origTitle;
    count++;
    if (count >= 12) {
      clearInterval(_notifBlinkInterval);
      document.title = origTitle;
      if ("clearAppBadge" in navigator) {
        try { navigator.clearAppBadge(); } catch (e) {}
      }
    }
  }, 800);
}
window.blinkAppIconNotification = blinkAppIconNotification;

async function sendSystemNotification(title, options = {}) {
  blinkAppIconNotification(title);

  if (!("Notification" in window)) return false;
  if (Notification.permission !== "granted") {
    const granted = await requestNotificationPermission();
    if (!granted) return false;
  }

  const defaultOptions = {
    icon: "./icon-192.png",
    badge: "./icon-192.png",
    vibrate: [300, 100, 300, 100, 300],
    requireInteraction: true,
    tag: "surya-lockscreen-notif",
    renotify: true,
    ...options
  };

  try {
    if ("serviceWorker" in navigator) {
      const reg = await navigator.serviceWorker.ready;
      if (reg && reg.showNotification) {
        await reg.showNotification(title, defaultOptions);
        return true;
      }
    }
  } catch (e) {
    console.warn("SW showNotification error, falling back to window Notification:", e);
  }

  try {
    const n = new Notification(title, defaultOptions);
    if (options.onclick) n.onclick = options.onclick;
    return true;
  } catch (e) {
    console.warn("Window Notification error:", e);
    return false;
  }
}

function showBatteryOptModal() {
  const modal = document.getElementById("battery-opt-modal");
  if (modal) {
    modal.style.display = "flex";
    requestNotificationPermission();
  }
}

function closeBatteryOptModal() {
  const modal = document.getElementById("battery-opt-modal");
  if (modal) modal.style.display = "none";
}

async function testLockscreenNotification() {
  const granted = await requestNotificationPermission();
  if (!granted) {
    alert("Please allow notification permissions in your browser when prompted!");
    return;
  }

  const name = cfg.userName || "Vaibhav";
  const success = await sendSystemNotification(`💧 Water Hydration Lock-Screen Test · ${name}`, {
    body: `💧 Lock-Screen Notification Active! Time to drink 1 glass/bottle of water. Tap to log water now!`,
    tag: "surya-water-test",
    vibrate: [300, 100, 300, 100, 300],
    data: { type: "water" },
    actions: [
      { action: "log_water", title: "💧 +1 Water Confirmed" },
      { action: "view_diet", title: "🥗 View Tracker" }
    ]
  });

  if (success) {
    alert("✓ Test Notification Sent! Lock your phone screen now to test lock-screen water reminders!");
  } else {
    alert("⚠️ Could not send notification. Please check browser Notification permissions in Android Settings.");
  }
}

// ── Morning greeting: fires when app opened near alarm time ─────
function checkMorningGreeting() {
  if(!cfg.alarmOn) return;
  const now  = new Date();
  const ah   = cfg.alarmHour   || 5;
  const am   = cfg.alarmMinute || 0;
  const alarmToday = new Date(now.getFullYear(),now.getMonth(),now.getDate(),ah,am,0);
  const diffMin = (now - alarmToday) / 60000;
  if(diffMin >= 0 && diffMin <= 60) {
    const goal = todayGoal();
    const name = cfg.userName || "Vaibhav";
    setTimeout(()=>speakText(
      "Good morning " + name + "! Time for Surya Namaskara. " +
      "Today's target is " + goal + " rounds. Om Mitraya Namaha."
    ), 1000);
  }
}

// ── Core alarm: setTimeout fires at exact alarm time ─────────
let _alarmTimeout = null;

function msUntilAlarm(h, m) {
  const now  = new Date();
  const next = new Date(now.getFullYear(),now.getMonth(),now.getDate(),h,m,0,0);
  if(next <= now) next.setDate(next.getDate() + 1);  // already passed → tomorrow
  return next.getTime() - now.getTime();
}

function fmtAlarmTime(h, m) {
  const ampm = h >= 12 ? "PM" : "AM";
  const hh   = h % 12 || 12;
  return hh + ":" + String(m).padStart(2,"0") + " " + ampm;
}

function fireAlarm(isSnooze = false) {
  if(!cfg.alarmOn && !isSnooze) { scheduleAlarm(); return; }

  if(!isSnooze) {
    alarmSnoozeCount = 0;
  }

  const goal = todayGoal();
  const quote = getDailyGitaQuote();
  const meaning = getQuoteMeaning(quote);
  const titleTag = isSnooze
    ? `⏰ Snooze Alarm (${alarmSnoozeCount}/2) · Bhagavad Gita`
    : `☀️ श्रीमद्भगवद्गीता — Daily Motivation`;
  const notifMsg = quote.ref + "\n" + quote.sanskrit.replace(/\n/g, " ") + "\n" + meaning;

  // 1. Play temple chime sound
  playAlarmBellSound();

  // 2. Open Bhagavad Gita Motivational Quote Modal
  showGitaQuoteModal();

  // 3. Show System Notification
  if("Notification" in window && Notification.permission === "granted") {
    try {
      const n = new Notification(titleTag, {
        body   : notifMsg,
        icon   : "./icon-192.png",
        badge  : "./icon-192.png",
        tag    : "surya-daily-alarm",
        renotify: true,
        vibrate: [300,100,300,100,600],
      });
      n.onclick = ()=>{ 
        try { window.focus(); } catch(e){}
        showGitaQuoteModal();
        n.close(); 
      };
    } catch(e) { console.warn("Notification error:", e); }
  }

  // 4. AUTO-PLAY Shloka & Meaning immediately when alarm / snooze triggers
  setTimeout(()=>speakCurrentGitaQuote(), 600);

  // 5. Reschedule regular daily alarm for tomorrow if not a snooze
  if(!isSnooze) {
    scheduleAlarm();
  }
}

function scheduleAlarm() {
  if(_alarmTimeout) { clearTimeout(_alarmTimeout); _alarmTimeout = null; }
  if(!cfg.alarmOn) return;

  const h  = cfg.alarmHour   || 5;
  const m  = cfg.alarmMinute || 0;
  const ms = msUntilAlarm(h, m);

  // Request notification permission if not yet decided
  requestNotificationPermission();

  // Schedule JS timer reliably
  _alarmTimeout = setTimeout(fireAlarm, ms);
  console.log("Alarm timer set for", fmtAlarmTime(h, m), "— fires in", Math.round(ms/1000), "sec");
}

function _tryAndroidAlarm(h, m) {
  const hour = parseInt(h !== undefined ? h : (cfg.alarmHour || 5));
  const min  = parseInt(m !== undefined ? m : (cfg.alarmMinute || 0));
  const name = cfg.userName || "Vaibhav";
  const label = "Suryasarthi 108 - " + name;
  const timeStr = String(hour).padStart(2, '0') + ":" + String(min).padStart(2, '0');

  // Primary SET_ALARM Intent
  const intentSet = `intent:#Intent;action=android.intent.action.SET_ALARM;i.android.intent.extra.alarm.HOUR=${hour};i.android.intent.extra.alarm.MINUTES=${min};S.android.intent.extra.alarm.MESSAGE=${encodeURIComponent(label)};B.android.intent.extra.alarm.SKIP_UI=false;end`;

  // Secondary SHOW_ALARMS Intent (Opens Clock app directly)
  const intentShow = `intent:#Intent;action=android.intent.action.SHOW_ALARMS;end`;

  // Legacy intent:// format
  const intentLegacy = `intent://alarm/#Intent;action=android.intent.action.SET_ALARM;extra.android.intent.extra.alarm.HOUR=${hour};extra.android.intent.extra.alarm.MINUTES=${min};extra.android.intent.extra.alarm.MESSAGE=${encodeURIComponent(label)};extra.android.intent.extra.alarm.SKIP_UI=false;end`;

  // Update in-page status info (no thread-blocking alert!)
  const infoEl = document.getElementById("cfg-voice-info");
  if (infoEl) {
    infoEl.textContent = "⏰ Opening Clock app for " + timeStr + " (" + label + ")…";
    infoEl.style.color = "var(--acc-lt)";
  }

  // Trigger direct intent navigation synchronously
  try {
    window.location.href = intentSet;
  } catch (e1) {
    try {
      window.location.href = intentShow;
    } catch (e2) {
      try {
        window.location.href = intentLegacy;
      } catch (e3) {
        console.warn("Android Clock intent navigation unavailable.");
      }
    }
  }
}

function cancelAlarm() {
  if(_alarmTimeout) { clearTimeout(_alarmTimeout); _alarmTimeout = null; }
  setStatus("Alarm cancelled");
}

/* ═══════════════════════════════════════════════════════════════
   DAYTIME BEST-FRIEND COMPANION NOTIFICATION SYSTEM
   Connects with user throughout the day with a warm, encouraging,
   workout-partner brand voice in Hindi, Marathi, and English.
   Autoplays voice utterance when notification is clicked.
═══════════════════════════════════════════════════════════════ */

const DAYTIME_NOTIFICATIONS = {
  morning: [
    {
      title: "🌞 Morning Sunshine Check-In",
      badge: "🌅 Morning Reminder",
      avatar: "🌞",
      en: "The sun has checked in. Are you coming?",
      hi: "सूरज आ चुका है, आपका इंतज़ार कर रहा है! क्या आप आ रहे हैं?",
      mr: "सूर्यदेव आले आहेत, तुझी वाट पाहत आहेत! तू येतोयस ना?"
    },
    {
      title: "☀️ Your Mat Misses You!",
      badge: "☀️ Morning Reminder",
      avatar: "☀️",
      en: "We saved your mat. It misses your footsteps.",
      hi: "हमने आपकी चटाई संभाल कर रखी है, इसे आपके कदमों की याद आ रही है।",
      mr: "आम्ही तुझी मॅट सांभाळून ठेवली आहे, तिला तुझ्या पावलांची आठवण येतेय."
    },
    {
      title: "🙏 Your First Bow is Waiting",
      badge: "🙏 Morning Reminder",
      avatar: "🙏",
      en: "Your first Surya Namaskar is waiting. The rest will follow.",
      hi: "पहला सूर्य नमस्कार आपका इंतज़ार कर रहा है, बाकी सब अपने आप हो जाएगा।",
      mr: "पहिला सूर्य नमस्कार तुझी वाट पाहत आहे, बाकी सर्व सहज घडेल."
    },
    {
      title: "💛 Good Morning, Friend!",
      badge: "💛 Morning Reminder",
      avatar: "💛",
      en: "Good morning! Your body is ready before your mind is.",
      hi: "गुड मॉर्निंग! मन से पहले आपका शरीर आज के अभ्यास के लिए तैयार है।",
      mr: "गुड मॉर्निंग! मनापेक्षा आधी तुझे शरीर आजच्या सरावासाठी सज्ज आहे."
    },
    {
      title: "🌅 Five Minutes for You",
      badge: "🌅 Morning Reminder",
      avatar: "🌅",
      en: "Five minutes now. You'll thank yourself all day.",
      hi: "बस 5 मिनट का अभ्यास, और पूरा दिन आप खुद को धन्यवाद देंगे।",
      mr: "फक्त ५ मिनिटांचा सराव, आणि दिवसभर तू स्वतःला धन्यवाद देशील."
    }
  ],

  skipped: [
    {
      title: "😌 Today is a Fresh Start",
      badge: "😌 Gentle Catch-Up",
      avatar: "😌",
      en: "We noticed yesterday was a rest day. Today is a fresh start.",
      hi: "कल विश्राम का दिन था! आज एक नई और ताज़ा शुरुआत का दिन है।",
      mr: "काल विश्रांतीचा दिवस होता! आज एका नवीन व ताज्या सुरुवातीचा दिवस आहे."
    },
    {
      title: "🧘 Your Streak is Waiting",
      badge: "🧘 Streak Encouragement",
      avatar: "🧘",
      en: "Your streak isn't angry. It's just waiting for you.",
      hi: "आपकी स्ट्राइक नाराज़ नहीं है, वह बस आपके लौटने का इंतज़ार कर रही है।",
      mr: "तुझी स्ट्राइक रागावलेली नाही, ती फक्त तू येण्याची वाट पाहतेय."
    },
    {
      title: "🌞 Another Beautiful Chance",
      badge: "🌞 Fresh Opportunity",
      avatar: "🌞",
      en: "The sun rises every day. You get another chance too.",
      hi: "सूरज हर दिन नया उगता है, आपको भी हर दिन एक नया मौका मिलता है।",
      mr: "सूर्य रोज नवीन उगवतो, तुलाही रोज एक नवीन संधी मिळते."
    },
    {
      title: "💛 Focus on Today's Round",
      badge: "💛 Best Friend Nudge",
      avatar: "💛",
      en: "One missed day doesn't define you. One completed round today does.",
      hi: "एक छूटा हुआ दिन आपको परिभाषित नहीं करता, आज का एक पूरा राउंड करता है!",
      mr: "एक चुकलेला दिवस तुला ठरवत नाही, आज पूर्ण केलेला एक राऊंड ठरवतो!"
    },
    {
      title: "🙏 Your Place is Reserved",
      badge: "🙏 Welcome Back",
      avatar: "🙏",
      en: "We've kept your place on the mat.",
      hi: "मैट पर आपकी जगह आज भी संभाल कर रखी है, आइए साथ अभ्यास करें!",
      mr: "मॅटवर तुझी जागा आजसुद्धा राखीव आहे, चल एकत्र सराव करूया!"
    }
  ],

  playful: [
    {
      title: "🥺 Mat Enquiry!",
      badge: "🥺 Playful Check-In",
      avatar: "🥺",
      en: "Your yoga mat asked where you've been.",
      hi: "आपकी योगा मैट ने पूछा कि आप कहाँ थे? इसे आपकी याद आ रही है!",
      mr: "तुझ्या योगा मॅटने विचारलं, तू कुठे होतास? तिला तुझी आठवण येतेय!"
    },
    {
      title: "☀️ Favorite Person Alert",
      badge: "☀️ Playful Reminder",
      avatar: "☀️",
      en: "The sun showed up. We're just waiting for our favorite person.",
      hi: "सूरज तो समय पर आ गया, बस हम अपने पसंदीदा दोस्त का इंतज़ार कर रहे हैं!",
      mr: "सूर्य वेळेवर आला, आम्ही फक्त आमच्या आवडत्या मित्राची वाट पाहतोय!"
    },
    {
      title: "❤️ Counting Surya Namaskars",
      badge: "❤️ Workout Partner",
      avatar: "❤️",
      en: "We don't count excuses. We count Surya Namaskars.",
      hi: "हम बहाने नहीं गिनते, हम बस आपके सूर्य नमस्कार गिनते हैं!",
      mr: "आम्ही कारणे मोजत नाही, आम्ही फक्त तुमचे सूर्य नमस्कार मोजतो!"
    },
    {
      title: "😄 Refreshing Feed...",
      badge: "😄 Friendly Tease",
      avatar: "😄",
      en: "We've been refreshing... still no Surya Namaskar from you.",
      hi: "हम बार-बार रिफ्रेश कर रहे हैं... अभी तक आपका सूर्य नमस्कार नहीं आया!",
      mr: "आम्ही सतत रिफ्रेश करतोय... अजून तुझा सूर्य नमस्कार आला नाही!"
    },
    {
      title: "🧘 Body Reminder Sent!",
      badge: "🧘 Inner Connection",
      avatar: "🧘",
      en: "Your body sent us a reminder before your phone did.",
      hi: "फोन से पहले आपके शरीर ने हमें याद दिलाया कि आज का अभ्यास बाकी है!",
      mr: "फोनआधी तुझ्या शरीराने आम्हाला आठवण करून दिली की आजचा सराव बाकी आहे!"
    }
  ],

  challenge: [
    {
      title: "🔥 Proud of You",
      badge: "🔥 Challenge Mode",
      avatar: "🔥",
      en: "Today's practice is making future you proud.",
      hi: "आज का अभ्यास शुरू करें! भविष्य का 'आप' आज की मेहनत पर गर्व करेगा।",
      mr: "आजचा सराव सुरू कर! भविष्यातील 'तू' आजच्या कष्टांवर नक्कीच अभिमान बाळगेल."
    },
    {
      title: "💪 Strongest Version",
      badge: "💪 Level Up",
      avatar: "💪",
      en: "One more round. Your strongest version is getting closer.",
      hi: "एक राउंड और! आपका सबसे मजबूत रूप हर दिन करीब आ रहा है।",
      mr: "अजून एक राऊंड! तुझे सर्वात मजबूत रूप दररोज जवळ येत आहे."
    },
    {
      title: "🌞 Tomorrow's Confidence",
      badge: "🌞 Daily Discipline",
      avatar: "🌞",
      en: "Today's round is tomorrow's confidence.",
      hi: "आज का एक राउंड कल आपके आत्मविश्वास को दोगुना कर देगा!",
      mr: "आजचा एक राऊंड उद्या तुझा आत्मविश्वास दुप्पट करेल!"
    },
    {
      title: "🎯 Quiet Consistency",
      badge: "🎯 Transformation",
      avatar: "🎯",
      en: "Consistency is quietly changing your life.",
      hi: "आपकी यह निरंतरता धीरे-धीरे आपकी ज़िंदगी बदल रही है।",
      mr: "तुझं हे सातत्य हळूहळू तुझं आयुष्य बदलत आहे."
    },
    {
      title: "🙌 Promise to Yourself",
      badge: "🙌 Sacred Promise",
      avatar: "🙌",
      en: "Every bow to the sun is a promise to yourself.",
      hi: "सूरज को किया हर नमन, खुद से किया एक सच्चा वादा है।",
      mr: "सूर्याला केलेला प्रत्येक नमस्कार, स्वतःला दिलेला एक खरा शब्द आहे."
    }
  ],

  milestone: [
    {
      title: "🎉 21 Days Milestone!",
      badge: "🎉 Habit Milestone",
      avatar: "🎉",
      en: "21 days! Habits are beginning to choose you.",
      hi: "21 दिन पूरे! अब यह आदत आपको एक स्वस्थ जीवन की ओर ले जा रही है।",
      mr: "२१ दिवस पूर्ण! आता ही सवय तुला एका निरोगी आयुष्याकडे घेऊन जात आहे."
    },
    {
      title: "🏅 108 Pure Discipline!",
      badge: "🏅 Century Milestone",
      avatar: "🏅",
      en: "108 completed! That's discipline, not luck.",
      hi: "108 सूर्य नमस्कार पूरे! यह किस्मत नहीं, आपका अटूट अनुशासन है!",
      mr: "१०८ सूर्य नमस्कार पूर्ण! हे नशीब नाही, तुझी अथांग शिस्त आहे!"
    },
    {
      title: "🌟 500 Legend Status",
      badge: "🌟 Grand Milestone",
      avatar: "🌟",
      en: "500 Surya Namaskars. Your dedication deserves a standing ovation.",
      hi: "500 सूर्य नमस्कार! आपका यह समर्पण वाकई अद्भुत है!",
      mr: "५०० सूर्य नमस्कार! तुझं हे समर्पण खरंच वाखाणण्याजोगे आहे!"
    },
    {
      title: "💯 1000 Club Member!",
      badge: "💯 Supreme Milestone",
      avatar: "💯",
      en: "Four digits look good on you. Welcome to the 1000 club!",
      hi: "1000 सूर्य नमस्कार पूरे! 1000 क्लब में आपका स्वागत है दोस्त!",
      mr: "१००० सूर्य नमस्कार पूर्ण! १००० क्लबमध्ये तुझे सहर्ष स्वागत आहे मित्रा!"
    },
    {
      title: "🙏 Inspiring Journey",
      badge: "🙏 Inspiration",
      avatar: "🙏",
      en: "Your journey is inspiring someone who hasn't started yet.",
      hi: "आपकी यह यात्रा किसी ऐसे इंसान को प्रेरणा दे रही है जिसने अभी शुरुआत भी नहीं की।",
      mr: "तुझा हा प्रवास अशा व्यक्तीला प्रेरणा देतोय ज्याने अजून सुरुवातही केलेली नाही."
    }
  ],

  nudges: [
    {
      title: "⏰ 5 Minutes, 12 Poses",
      badge: "⏰ Quick Nudge",
      avatar: "⏰",
      en: "Five minutes. Twelve poses. One happier you.",
      hi: "बस 5 मिनट, 12 आसन, और एक अधिक खुशहाल आप!",
      mr: "फक्त ५ मिनिटे, १२ आसने, आणि एक अधिक आनंदी तू!"
    },
    {
      title: "☀️ Move First, Feel Inspired",
      badge: "☀️ Gentle Push",
      avatar: "☀️",
      en: "Don't wait to feel motivated. Move first.",
      hi: "प्रेरणा का इंतज़ार मत करो, पहला कदम बढ़ाओ, प्रेरणा खुद आएगी!",
      mr: "प्रेरणेची वाट पाहू नकोस, पहिले पाऊल टाक, प्रेरणा आपोआप येईल!"
    },
    {
      title: "💛 Thank You Note From Future You",
      badge: "💛 Best Friend Note",
      avatar: "💛",
      en: "Your future self left you a thank-you note. It starts with today's practice.",
      hi: "आपके आने वाले कल ने आपको धन्यवाद कहा है, जिसकी शुरुआत आज के अभ्यास से होती है।",
      mr: "तुझ्या येणाऱ्या उद्याने तुला धन्यवाद मानले आहेत, ज्याची सुरुवात आजच्या सरावाने होते."
    },
    {
      title: "🌿 Energy is Created",
      badge: "🌿 Energy Spark",
      avatar: "🌿",
      en: "Energy isn't found. It's created.",
      hi: "ऊर्जा कहीं ढूंढनी नहीं पड़ती, सूर्य नमस्कार से खुद पैदा होती है!",
      mr: "ऊर्जा कुठे शोधावी लागत नाही, सूर्य नमस्काराने स्वतः निर्माण होते!"
    },
    {
      title: "🧘 Just One Round!",
      badge: "🧘 Micro Goal",
      avatar: "🧘",
      en: "Just one round. We know you'll do another.",
      hi: "बस एक राउंड कर के देखिए, हमें यकीन है आप दूसरा भी कर लेंगे!",
      mr: "फक्त एक राऊंड करून बघ, आम्हाला खात्री आहे तू दुसराही करशील!"
    }
  ],

  emotional: [
    {
      title: "❤️ Show Up Today",
      badge: "❤️ Best Friend Love",
      avatar: "❤️",
      en: "We don't want perfection. We just want to see you today.",
      hi: "हमें परफेक्शन नहीं चाहिए, हमें बस आज आपको मैट पर देखना है।",
      mr: "आम्हाला परिपूर्णता नकोय, आम्हाला फक्त आज तुला मॅटवर बघायचे आहे."
    },
    {
      title: "🌅 Meet Yourself Today",
      badge: "🌅 Soul Connection",
      avatar: "🌅",
      en: "The sun has never missed meeting you. Don't miss meeting yourself.",
      hi: "सूरज ने कभी आपसे मिलना नहीं छोड़ा, आज आप खुद से मिलना मत भूलना।",
      mr: "सूर्याने कधीही तुला भेटणे सोडले नाही, आज तू स्वतःला भेटायला विसरू नकोस."
    },
    {
      title: "🙏 Conversation With Your Body",
      badge: "🙏 Body Awareness",
      avatar: "🙏",
      en: "Every Surya Namaskar is a conversation with your body.",
      hi: "हर सूर्य नमस्कार आपके शरीर और आत्मा के बीच का एक खूबसूरत संवाद है।",
      mr: "प्रत्येक सूर्य नमस्कार हा तुझ्या शरीर आणि आत्म्यामधील एक सुंदर संवाद आहे."
    },
    {
      title: "💛 Investment in Health",
      badge: "💛 True Wealth",
      avatar: "💛",
      en: "Some investments pay in money. This one pays in health.",
      hi: "कुछ निवेश पैसों में रिटर्न देते हैं, यह निवेश आपको बेहतरीन सेहत देता है।",
      mr: "काही गुंतवणुकी पैशात परतावा देतात, ही गुंतवणूक तुला उत्तम आरोग्य देते."
    },
    {
      title: "🌞 Show Up For Yourself",
      badge: "🌞 Daily Promise",
      avatar: "🌞",
      en: "Show up for yourself. We'll handle the reminder.",
      hi: "आप खुद के लिए समय निकालिए, याद दिलाने की ज़िम्मेदारी हमारी है!",
      mr: "तू स्वतःसाठी वेळ काढ, आठवण करून देण्याची जबाबदारी आमची!"
    }
  ]
};

let activeCompanionNotification = null;

function getBestFriendNotificationContext(period) {
  const yesterdayDone = todayDoneFor(dayKey(1));
  const todayDoneCount = todayDone();
  const todayGoalCount = todayGoal();
  const streak = computeStreak();
  const totalAllTime = data.totalAllTime || 0;

  // 1. Check for Milestone
  if (streak === 21) return DAYTIME_NOTIFICATIONS.milestone[0];
  if (totalAllTime === 108) return DAYTIME_NOTIFICATIONS.milestone[1];
  if (totalAllTime === 500) return DAYTIME_NOTIFICATIONS.milestone[2];
  if (totalAllTime === 1000) return DAYTIME_NOTIFICATIONS.milestone[3];

  // 2. Check if skipped yesterday
  if (yesterdayDone === 0) {
    const idx = Math.floor(Math.random() * DAYTIME_NOTIFICATIONS.skipped.length);
    return DAYTIME_NOTIFICATIONS.skipped[idx];
  }

  // 3. High goal aim (108)
  if (todayGoalCount >= 108) {
    const idx = Math.floor(Math.random() * DAYTIME_NOTIFICATIONS.challenge.length);
    return DAYTIME_NOTIFICATIONS.challenge[idx];
  }

  // 4. Period specific selection
  let list = DAYTIME_NOTIFICATIONS.morning;
  if (period === "afternoon") {
    list = (todayDoneCount === 0) ? DAYTIME_NOTIFICATIONS.playful : DAYTIME_NOTIFICATIONS.nudges;
  } else if (period === "evening") {
    list = (todayDoneCount < todayGoalCount) ? DAYTIME_NOTIFICATIONS.emotional : DAYTIME_NOTIFICATIONS.nudges;
  }

  const idx = Math.floor(Math.random() * list.length);
  return list[idx];
}

function getNotificationMessageInLang(item, langOverride) {
  if (!item) return "";
  const lang = langOverride || cfg.quoteLang || cfg.pranaLang || "hi";
  if (lang === "mr") return item.mr || item.hi || item.en;
  if (lang === "en") return item.en || item.hi;
  return item.hi || item.en;
}

function triggerDaytimeNotification(period) {
  if (cfg.daytimeNotifOn === false) return;
  // If user has already finished today's goal and it's afternoon/evening, no need to interrupt
  if (period !== "morning" && todayDone() >= todayGoal()) return;

  const item = getBestFriendNotificationContext(period);
  activeCompanionNotification = item;

  const msg = getNotificationMessageInLang(item);

  // 1. Show System Notification
  if ("Notification" in window && Notification.permission === "granted") {
    try {
      const n = new Notification(item.title, {
        body: msg,
        icon: "./icon-192.png",
        badge: "./icon-192.png",
        tag: "surya-daytime-friend",
        renotify: true,
        vibrate: [200, 100, 200]
      });
      n.onclick = () => {
        try { window.focus(); } catch (e) {}
        showCompanionModal(item);
        n.close();
      };
    } catch (e) { console.warn("Notification error:", e); }
  }

  // 2. If app is visible, pop companion card and autoplay voice
  if (document.visibilityState === "visible") {
    showCompanionModal(item);
  }
}

let _daytimeNotifTimer = null;

function scheduleDaytimeNotifications() {
  if (_daytimeNotifTimer) { clearInterval(_daytimeNotifTimer); _daytimeNotifTimer = null; }
  if (cfg.daytimeNotifOn === false) return;

  // Check every 60 seconds if it's time for morning (8:30 AM), afternoon (1:30 PM), or evening (6:30 PM)
  let lastTriggeredHour = -1;

  _daytimeNotifTimer = setInterval(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();

    if (h === lastTriggeredHour) return;

    if (h === 8 && m >= 30 && m <= 45) {
      lastTriggeredHour = h;
      triggerDaytimeNotification("morning");
    } else if (h === 13 && m >= 30 && m <= 45) {
      lastTriggeredHour = h;
      triggerDaytimeNotification("afternoon");
    } else if (h === 18 && m >= 30 && m <= 45) {
      lastTriggeredHour = h;
      triggerDaytimeNotification("evening");
    }
  }, 60000);
}

function showCompanionModal(item) {
  if (!item) item = activeCompanionNotification || getBestFriendNotificationContext("morning");
  activeCompanionNotification = item;

  const lang = cfg.quoteLang || cfg.pranaLang || "hi";
  const msg = getNotificationMessageInLang(item, lang);
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const avEl = document.getElementById("companion-avatar"); if(avEl) avEl.textContent = item.avatar || "☀️";
  const bgEl = document.getElementById("companion-badge");  if(bgEl) bgEl.textContent = "Online · " + (item.badge || "Best Friend Check-In");
  const ttEl = document.getElementById("companion-title");  if(ttEl) ttEl.textContent = item.title || "Suryasarthi Best Friend";
  const bdEl = document.getElementById("companion-body");   if(bdEl) bdEl.textContent = msg;

  const wtEl = document.getElementById("whatsapp-time-label");   if(wtEl) wtEl.textContent = timeStr;
  const btEl = document.getElementById("whatsapp-bubble-time");  if(btEl) btEl.textContent = timeStr;

  const modal = document.getElementById("companion-modal");
  if (modal) {
    modal.style.display = "flex";
    modal.classList.add("show");
  }

  // AUTO-PLAY VOICE ON NOTIFICATION OPEN
  setTimeout(() => speakCompanionNotification(item), 400);
}

function closeCompanionModal() {
  const modal = document.getElementById("companion-modal");
  if (modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
  }
  qClear();
}

function startPracticeFromCompanion() {
  closeCompanionModal();
  startSession();
}

window.showCompanionModal = showCompanionModal;
window.closeCompanionModal = closeCompanionModal;
window.startPracticeFromCompanion = startPracticeFromCompanion;

function speakCompanionNotification(item) {
  if (voiceMuted || !window.speechSynthesis) return;
  if (!item) item = activeCompanionNotification || getBestFriendNotificationContext("morning");
  
  const lang = cfg.quoteLang || cfg.pranaLang || "hi";
  const msg = getNotificationMessageInLang(item, lang);

  qClear();

  const u = new SpeechSynthesisUtterance(msg);
  if (lang === "en") {
    u.lang = "en-IN"; u.rate = 0.98;
  } else if (lang === "mr") {
    u.lang = "mr-IN"; u.rate = 0.92;
  } else {
    u.lang = "hi-IN"; u.rate = 0.92;
  }

  qSpeak(u);
}

function replayCompanionVoice() {
  speakCompanionNotification(activeCompanionNotification);
}

function startPracticeFromCompanion() {
  closeCompanionModal();
  if (!sess.active) {
    handleMainBtn();
  }
}

window.showCompanionModal = showCompanionModal;
window.closeCompanionModal = closeCompanionModal;
window.replayCompanionVoice = replayCompanionVoice;
window.startPracticeFromCompanion = startPracticeFromCompanion;

/* ═══════════════════════════════════════════════════════════════
   AYURVEDIC DIET & HYDRATION ENGINE
   Verified 4.9+ Rating Sattvic / Ahara Ayurvedic Meal Guidelines.
   Calculates water & protein intake targets based on today's
   completed Surya Namaskara counts and personalized voice greetings.
═══════════════════════════════════════════════════════════════ */

const AYURVEDIC_DIET_PLAN_7DAYS = [
  // DAY 1 (Monday / Day 1)
  {
    dayName: "DAY 1 · SATTVIC RECOVERY MENU",
    breakfast: {
      mealBadge: "🥣 PRATAH-AAHAR (BREAKFAST · 8:00 AM)",
      veg: {
        title: "High-Protein Sattvic Energy Fuel",
        body: "Moong dal chilla stuffed with Paneer, 5 soaked almonds & walnuts, warm turmeric ashwagandha milk.",
        speech: {
          en: "Good morning {NAME}! You completed {SETS} Surya Namaskars. Target: {WATER}L water & {PROTEIN}g protein. Day 1 Menu: Moong dal chilla with Paneer, soaked almonds, turmeric milk.",
          hi: "गुड मॉर्निंग {NAME}! आपने {SETS} सूर्य नमस्कार किए। {WATER}L पानी और {PROTEIN}g प्रोटीन लें। डे 1: पनीर मूंग दाल चिल्ला, बादाम और हल्दी दूध।",
          mr: "गुड मॉर्निंग {NAME}! आज {SETS} सूर्य नमस्कार पूर्ण केले. {WATER}L पाणी आणि {PROTEIN}g प्रोटीन घे. डे १: पनीर मूंग डाळ चिला व हळदीचे दूध."
        }
      },
      nonveg: {
        title: "High-Protein Ayurvedic Recovery Fuel",
        body: "2-3 Egg white omelette prepared in Cow Ghee with cumin & turmeric, 5 soaked almonds, herbal tea.",
        speech: {
          en: "Good morning {NAME}! Target: {WATER}L water & {PROTEIN}g protein. Day 1 Menu: 2-3 Egg white omelette in Ghee with turmeric, soaked almonds & herbal tea.",
          hi: "गुड मॉर्निंग {NAME}! {WATER}L पानी और {PROTEIN}g प्रोटीन लें। डे 1: 2-3 एग व्हाइट ऑमलेट घी और हल्दी के साथ, बादाम और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! आज {WATER}L पाणी व {PROTEIN}g प्रोटीन घे. डे १: २-३ एग व्हाईट ऑम्लेट तूप व हळदीसह आणि हर्बल चहा."
        }
      }
    },
    lunch: {
      mealBadge: "🍲 MADHYANHA-AAHAR (LUNCH · 1:00 PM - PEAK AGNI)",
      veg: {
        title: "Peak Agni Digestion & Re-Energizing Meal",
        body: "Moong Khichdi or Multigrain Roti with Cow Ghee, Dal/Soya, cucumber salad & Takra (buttermilk with roasted cumin).",
        speech: {
          en: "Hello {NAME}! Peak digestion time. For {SETS} rounds, drink {WATER}L water & take {PROTEIN}g protein. Lunch: Multigrain Roti with Ghee, Dal, green veggies & buttermilk.",
          hi: "नमस्ते {NAME}! दोपहर में पाचन अग्नि तीव्र है। {WATER}L पानी और {PROTEIN}g प्रोटीन लें। दोपहर में: देसी घी रोटी, दाल, सब्ज़ियाँ और मट्ठा।",
          mr: "नमस्ते {NAME}! पचन शक्ती उत्तम आहे. {WATER}L पाणी व {PROTEIN}g प्रोटीन घे. जेवणात: तुपातील पोळी, डाळ आणि ताक."
        }
      },
      nonveg: {
        title: "Peak Agni Muscle Building Fuel",
        body: "Grilled Chicken breast or Steamed Fish with ginger, turmeric & garlic, Brown Rice, salad & Takra.",
        speech: {
          en: "Hello {NAME}! For {SETS} rounds, aim for {WATER}L water & {PROTEIN}g protein. Lunch: Grilled Chicken or Fish spiced with turmeric, Brown Rice & buttermilk.",
          hi: "नमस्ते {NAME}! {WATER}L पानी और {PROTEIN}g प्रोटीन लें। दोपहर में: अदरक-हल्दी ग्रिल्ड चिकन या फिश, ब्राउन राइस और ताज़ा मट्ठा।",
          mr: "नमस्ते {NAME}! {WATER}L पाणी व {PROTEIN}g प्रोटीन घे. जेवणात: ग्रिल्ड चिकन किंवा फिश, ब्राऊन राईस आणि ताक."
        }
      }
    },
    dinner: {
      mealBadge: "🌙 RATRI-AAHAR (DINNER · 7:30 PM - LIGHT AGNI)",
      veg: {
        title: "Light Digestible Recovery Night Fuel",
        body: "Light Moong Dal Soup or Vegetable Khichdi with Ghee, warm milk with a pinch of nutmeg before sleep.",
        speech: {
          en: "Good evening {NAME}! Target: {WATER}L water & {PROTEIN}g protein. Dinner: Light Moong Dal Soup and warm nutmeg milk before sleep.",
          hi: "शुभ संध्या {NAME}! {WATER}L पानी और {PROTEIN}g प्रोटीन लें। रात में: हल्की मूंग दाल खिचड़ी और जायफल वाला गर्म दूध।",
          mr: "शुभ संध्या {NAME}! {WATER}L पाणी व {PROTEIN}g प्रोटीन पूर्ण कर. रात्री: हलकी खिचडी आणि जायफळयुक्त गरम दूध."
        }
      },
      nonveg: {
        title: "Light Ayurvedic Night Recovery Meal",
        body: "Chicken Bone Broth or Egg White Soup with sauteed spinach, warm spiced milk with nutmeg.",
        speech: {
          en: "Good evening {NAME}! Target: {WATER}L water & {PROTEIN}g protein. Dinner: Chicken Bone Broth or Egg white soup, followed by warm nutmeg milk.",
          hi: "शुभ संध्या {NAME}! {WATER}L पानी और {PROTEIN}g प्रोटीन लें। रात में: हल्का चिकन ब्रोथ या एग व्हाइट सूप और गर्म दूध।",
          mr: "शुभ संध्या {NAME}! {WATER}L पाणी व {PROTEIN}g प्रोटीन घे. रात्री: चिकन सूप किंवा एग व्हाईट सूप आणि गरम दूध."
        }
      }
    }
  },

  // DAY 2 (Tuesday / Day 2)
  {
    dayName: "DAY 2 · SPROUTS & HERBAL STRENGTH MENU",
    breakfast: {
      mealBadge: "🥣 PRATAH-AAHAR (BREAKFAST · 8:00 AM)",
      veg: {
        title: "Sprouted Protein & Digestive Boost",
        body: "Sprouted Moong & Chana chaat with lemon & roasted cumin, 5 soaked walnuts, warm ginger cinnamon tea.",
        speech: {
          en: "Good morning {NAME}! Day 2 Recovery Menu: Sprouted Moong Chaat with lemon and cumin, soaked walnuts, and warm ginger tea.",
          hi: "गुड मॉर्निंग {NAME}! डे 2 नाश्ता: अंकुरित मूंग और चना चाट नींबू-जीरे के साथ, अखरोट और अदरक की चाय।",
          mr: "गुड मॉर्निंग {NAME}! डे २ नाश्ता: भिजवलेले मूग व चणा चाट लिंबू-जिऱ्यासह, अक्रोड आणि आले चहा."
        }
      },
      nonveg: {
        title: "Ayurvedic Scrambled Protein Fuel",
        body: "Scrambled Eggs (3 whites + 1 yolk) with spinach & black pepper in Ghee, 5 soaked walnuts, herbal tea.",
        speech: {
          en: "Good morning {NAME}! Day 2 Menu: Scrambled eggs with spinach and black pepper cooked in Ghee, soaked walnuts & herbal tea.",
          hi: "गुड मॉर्निंग {NAME}! डे 2: पालक और काली मिर्च वाला स्क्रैम्बल्ड एग घी में, भीगे अखरोट और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! डे २: पालकासह स्क्रॅम्बल्ड एग्स तूप व काळ्या मिरीसह, अक्रोड आणि हर्बल चहा."
        }
      }
    },
    lunch: {
      mealBadge: "🍲 MADHYANHA-AAHAR (LUNCH · 1:00 PM - PEAK AGNI)",
      veg: {
        title: "Palak Paneer & Multigrain Strength Fuel",
        body: "Multigrain Roti with Ghee, Palak Paneer / Soya curry, cucumber salad & mint Takra (buttermilk).",
        speech: {
          en: "Hello {NAME}! Day 2 Lunch: Multigrain Roti with Cow Ghee, Palak Paneer curry, cucumber salad & mint buttermilk.",
          hi: "नमस्ते {NAME}! डे 2 दोपहर का खाना: देसी घी की रोटी, पालक पनीर, खीरा सलाद और पुदीना मट्ठा।",
          mr: "नमस्ते {NAME}! डे २ जेवण: तुपातील पोळी, पालक पनीर, काकडी कोशिंबीर आणि पुदिना ताक."
        }
      },
      nonveg: {
        title: "Steamed Fish & Coconut Ayurvedic Meal",
        body: "Steamed Fish curry prepared in coconut milk, turmeric & curry leaves, Brown Rice, mint buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 2 Lunch: Steamed Fish curry in coconut milk & turmeric, Brown Rice, and fresh mint buttermilk.",
          hi: "नमस्ते {NAME}! डे 2: नारियल दूध और हल्दी वाला स्टीम्ड फिश करी, ब्राउन राइस और पुदीना मट्ठा।",
          mr: "नमस्ते {NAME}! डे २: नारळाच्या दुधातील स्टीम्ड फिश करी, ब्राऊन राईस आणि ताक."
        }
      }
    },
    dinner: {
      mealBadge: "🌙 RATRI-AAHAR (DINNER · 7:30 PM - LIGHT AGNI)",
      veg: {
        title: "Lauki Detox & Cardamom Milk",
        body: "Bottle Gourd (Lauki) soup with cumin & Ghee, 1 small Jowar Roti, warm cardamom milk before sleep.",
        speech: {
          en: "Good evening {NAME}! Day 2 Dinner: Light Lauki (Bottle Gourd) soup with Ghee and warm cardamom milk before sleep.",
          hi: "शुभ संध्या {NAME}! डे 2 रात का खाना: लौकी का सूप जीरे और घी के साथ, और इलायची वाला गर्म दूध।",
          mr: "शुभ संध्या {NAME}! डे २ रात्री: दुधी भोपळ्याचे सूप जिऱ्यासह आणि वेलचीयुक्त गरम दूध."
        }
      },
      nonveg: {
        title: "Light Fish Broth & Night Recovery",
        body: "Light Fish soup with ginger & coriander, 1 small Jowar Roti, warm cardamom milk.",
        speech: {
          en: "Good evening {NAME}! Day 2 Dinner: Light Fish broth spiced with ginger and coriander, warm cardamom milk.",
          hi: "शुभ संध्या {NAME}! डे 2: अदरक और धनिया वाला हल्का फिश सूप, और गर्म इलायची दूध।",
          mr: "शुभ संध्या {NAME}! डे २: आल्याचा हलका फिश सूप आणि गरम वेलची दूध."
        }
      }
    }
  },

  // DAY 3 (Wednesday / Day 3)
  {
    dayName: "DAY 3 · RAGI & ASHWAGANDHA VITALITY MENU",
    breakfast: {
      mealBadge: "🥣 PRATAH-AAHAR (BREAKFAST · 8:00 AM)",
      veg: {
        title: "Calcium & Iron Rich Ragi Sattvic Dosa",
        body: "Ragi (Finger Millet) Dosa / Chilla with Coconut Chutney, 5 soaked almonds, warm Ashwagandha milk.",
        speech: {
          en: "Good morning {NAME}! Day 3 Menu: High-calcium Ragi Dosa with Coconut Chutney, soaked almonds, and Ashwagandha milk.",
          hi: "गुड मॉर्निंग {NAME}! डे 3: कैल्शियम से भरपूर रागी डोसा नारियल चटनी के साथ, बादाम और अश्वगंधा दूध।",
          mr: "गुड मॉर्निंग {NAME}! डे ३: कॅल्शियमयुक्त नाचणी (रागी) डोसा खोबऱ्याच्या चटणीसह आणि अश्वगंधा दूध."
        }
      },
      nonveg: {
        title: "Boiled Egg Protein & Herbal Tea",
        body: "3 Boiled Egg whites topped with roasted cumin & pepper, 5 soaked almonds, warm herbal tea.",
        speech: {
          en: "Good morning {NAME}! Day 3 Menu: 3 Boiled Egg whites with roasted cumin and pepper, soaked almonds & herbal tea.",
          hi: "गुड मॉर्निंग {NAME}! डे 3: भुने जीरे और काली मिर्च वाले 3 उबले अंडे, बादाम और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! डे ३: जिरे-मिरीसह ३ उकडलेले अंडी, भिजवलेले बदाम आणि हर्बल चहा."
        }
      }
    },
    lunch: {
      mealBadge: "🍲 MADHYANHA-AAHAR (LUNCH · 1:00 PM - PEAK AGNI)",
      veg: {
        title: "Rajma & Bajra Ayurvedic Thali",
        body: "Bajra Roti with Cow Ghee, Rajma / Chana Dal curry, sauteed vegetables & roasted jeera buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 3 Lunch: Bajra Roti with Cow Ghee, protein-rich Rajma, green salad, and jeera buttermilk.",
          hi: "नमस्ते {NAME}! डे 3 दोपहर का खाना: बाजरे की रोटी देसी घी के साथ, राजमा, हरी सब्ज़ियाँ और जीरा मट्ठा।",
          mr: "नमस्ते {NAME}! डे ३ जेवण: बाजरीची भाकरी तुपासह, राजमा, भाज्या आणि जिरे ताक."
        }
      },
      nonveg: {
        title: "Ayurvedic Spiced Chicken & Jowar Roti",
        body: "Lean Chicken curry in turmeric, coriander & ginger gravy, Jowar Roti, green salad & buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 3 Lunch: Lean Chicken curry prepared in Ayurvedic spices, Jowar Roti, and buttermilk.",
          hi: "नमस्ते {NAME}! डे 3: हल्दी-धनिया से बना चिकन करी, ज्वार की रोटी और ताज़ा मट्ठा।",
          mr: "नमस्ते {NAME}! डे ३: हळद-धनियायुक्त चिकन करी, ज्वारीची भाकरी आणि ताक."
        }
      }
    },
    dinner: {
      mealBadge: "🌙 RATRI-AAHAR (DINNER · 7:30 PM - LIGHT AGNI)",
      veg: {
        title: "Tomato Moong Soup & Saffron Recovery Milk",
        body: "Tomato Basil Moong Soup with Cow Ghee, warm spiced saffron milk before sleep.",
        speech: {
          en: "Good evening {NAME}! Day 3 Dinner: Light Tomato Moong Soup with Ghee and warm saffron milk before sleep.",
          hi: "शुभ संध्या {NAME}! डे 3 रात का खाना: टमाटर मूंग सूप घी के साथ और केसर वाला गर्म दूध।",
          mr: "शुभ संध्या {NAME}! डे ३ रात्री: टोमॅटो मूग सूप तुपासह आणि केशरयुक्त गरम दूध."
        }
      },
      nonveg: {
        title: "Coriander Chicken Soup & Saffron Milk",
        body: "Light Chicken soup with coriander & cumin, warm spiced saffron milk.",
        speech: {
          en: "Good evening {NAME}! Day 3 Dinner: Clear Chicken soup with fresh coriander, followed by warm saffron milk.",
          hi: "शुभ संध्या {NAME}! डे 3: धनिया और जीरे वाला हल्का चिकन सूप और गर्म केसर दूध।",
          mr: "शुभ संध्या {NAME}! डे ३: कोथिंबीर-जिऱ्याचा हलका चिकन सूप आणि केशर दूध."
        }
      }
    }
  },

  // DAY 4 (Thursday / Day 4)
  {
    dayName: "DAY 4 · SATTU & RECOVERY FUEL MENU",
    breakfast: {
      mealBadge: "🥣 PRATAH-AAHAR (BREAKFAST · 8:00 AM)",
      veg: {
        title: "Roasted Sattu Vitality Drink",
        body: "Roasted Sattu Protein Shake (Sattu + Jaggery + Cardamom + Water/Milk), 5 soaked walnuts & figs.",
        speech: {
          en: "Good morning {NAME}! Day 4 Menu: Natural Sattu Protein Shake with jaggery and cardamom, soaked walnuts & figs.",
          hi: "गुड मॉर्निंग {NAME}! डे 4 नाश्ता: सत्तू प्रोटीन शेक गुड़ और इलायची के साथ, अखरोट और अंजीर।",
          mr: "गुड मॉर्निंग {NAME}! डे ४ नाश्ता: सत्तू प्रोटीन शेक गूळ व वेलचीसह, अक्रोड आणि अंजीर."
        }
      },
      nonveg: {
        title: "Egg Bhurji & Herbal Tea",
        body: "Egg Bhurji (2 eggs) prepared in Ghee with turmeric & coriander, soaked walnuts & figs, herbal tea.",
        speech: {
          en: "Good morning {NAME}! Day 4 Menu: Fresh Egg Bhurji cooked in Ghee with turmeric and coriander, soaked walnuts & herbal tea.",
          hi: "गुड मॉर्निंग {NAME}! डे 4: देसी घी में बनी एग भुर्जी हल्दी-धनिया के साथ, अखरोट और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! डे ४: तुपातील एग भुर्जी हळद व कोथिंबिरीसह, अक्रोड आणि हर्बल चहा."
        }
      }
    },
    lunch: {
      mealBadge: "🍲 MADHYANHA-AAHAR (LUNCH · 1:00 PM - PEAK AGNI)",
      veg: {
        title: "Mix Veg Khichdi & Paneer Bhurji",
        body: "Mix Veg Dal Khichdi with Cow Ghee, Paneer bhurji, beetroot salad & roasted cumin buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 4 Lunch: Nutritious Mix Veg Khichdi with Cow Ghee, Paneer Bhurji, beetroot salad & buttermilk.",
          hi: "नमस्ते {NAME}! डे 4 दोपहर का खाना: मिक्स वेज खिचड़ी देसी घी के साथ, पनीर भुर्जी, चुकंदर सलाद और मट्ठा।",
          mr: "नमस्ते {NAME}! डे ४ जेवण: मिक्स व्हेज खिचडी तुपासह, पनीर भुर्जी आणि ताक."
        }
      },
      nonveg: {
        title: "Grilled Cumin Chicken & Multigrain Roti",
        body: "Grilled Chicken Tiffin with roasted cumin & herbs, Multigrain Roti, green salad & buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 4 Lunch: Grilled Cumin Chicken, Multigrain Roti, green salad, and digestive buttermilk.",
          hi: "नमस्ते {NAME}! डे 4: भुने जीरे वाला ग्रिल्ड चिकन, मल्टीग्रेन रोटी, सलाद और ताज़ा मट्ठा।",
          mr: "नमस्ते {NAME}! डे ४: जिरे ग्रिल्ड चिकन, पोळी आणि ताक."
        }
      }
    },
    dinner: {
      mealBadge: "🌙 RATRI-AAHAR (DINNER · 7:30 PM - LIGHT AGNI)",
      veg: {
        title: "Pumpkin Soup & Nutmeg Milk",
        body: "Creamy Pumpkin Soup cooked with cumin & Cow Ghee, warm nutmeg milk before sleep.",
        speech: {
          en: "Good evening {NAME}! Day 4 Dinner: Light Pumpkin Soup with Ghee and warm nutmeg milk before sleep.",
          hi: "शुभ संध्या {NAME}! डे 4 रात का खाना: कद्दू का हल्का सूप जीरे के साथ और जायफल वाला गर्म दूध।",
          mr: "शुभ संध्या {NAME}! डे ४ रात्री: भोपळ्याचे सूप जिऱ्यासह आणि जायफळ दूध."
        }
      },
      nonveg: {
        title: "Clear Chicken Broth & Nutmeg Milk",
        body: "Clear Chicken broth with spinach & black pepper, warm nutmeg milk.",
        speech: {
          en: "Good evening {NAME}! Day 4 Dinner: Clear Chicken broth with spinach, followed by warm nutmeg milk.",
          hi: "शुभ संध्या {NAME}! डे 4: पालक और काली मिर्च वाला चिकन ब्रोथ और गर्म जायफल दूध।",
          mr: "शुभ संध्या {NAME}! डे ४: पालकाचा हलका चिकन ब्रोथ आणि जायफळ दूध."
        }
      }
    }
  },

  // DAY 5 (Friday / Day 5)
  {
    dayName: "DAY 5 · BESAN & BANANA LEAF FISH MENU",
    breakfast: {
      mealBadge: "🥣 PRATAH-AAHAR (BREAKFAST · 8:00 AM)",
      veg: {
        title: "Besan Chilla & Golden Turmeric Milk",
        body: "Besan Chilla stuffed with Paneer & fresh coriander, 5 soaked almonds, warm golden turmeric milk.",
        speech: {
          en: "Good morning {NAME}! Day 5 Menu: High-protein Besan Chilla with Paneer, soaked almonds, and golden turmeric milk.",
          hi: "गुड मॉर्निंग {NAME}! डे 5 नाश्ता: बेसन चिल्ला पनीर के साथ, बादाम और हल्दी दूध।",
          mr: "गुड मॉर्निंग {NAME}! डे ५ नाश्ता: बेसन चिला पनीरसह, भिजवलेले बदाम आणि हळदीचे दूध."
        }
      },
      nonveg: {
        title: "Boiled Eggs & Pepper Ghee Boost",
        body: "3 Boiled Egg whites + 1 Whole Egg with black pepper & Ghee, 5 soaked almonds, herbal tea.",
        speech: {
          en: "Good morning {NAME}! Day 5 Menu: Boiled Eggs sprinkled with black pepper and Ghee, soaked almonds & herbal tea.",
          hi: "गुड मॉर्निंग {NAME}! डे 5: काली मिर्च और घी वाले उबले अंडे, बादाम और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! डे ५: मिरी व तुपातील उकडलेले अंडी, बदाम आणि हर्बल चहा."
        }
      }
    },
    lunch: {
      mealBadge: "🍲 MADHYANHA-AAHAR (LUNCH · 1:00 PM - PEAK AGNI)",
      veg: {
        title: "Paneer Peas Curry & Curd Rice",
        body: "Paneer & Green Peas curry, Multigrain Roti with Ghee, cucumber curd rice / buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 5 Lunch: Paneer Green Peas curry, Multigrain Roti with Ghee, and fresh curd rice.",
          hi: "नमस्ते {NAME}! डे 5 दोपहर का खाना: मटर पनीर सब्ज़ी, देसी घी रोटी और ताज़ा दही-चावल।",
          mr: "नमस्ते {NAME}! डे ५ जेवण: मटार पनीर भाजी, तुपातील पोळी आणि दही भात."
        }
      },
      nonveg: {
        title: "Banana Leaf Fish & Brown Rice",
        body: "Steamed Fish in banana leaf with turmeric & mustard seeds, Brown Rice, fresh buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 5 Lunch: Steamed Fish wrapped in banana leaf with mustard & turmeric, Brown Rice & buttermilk.",
          hi: "नमस्ते {NAME}! डे 5: केले के पत्ते में स्टीम्ड फिश करी, ब्राउन राइस और ताज़ा मट्ठा।",
          mr: "नमस्ते {NAME}! डे ५: केळीच्या पानातील वाफवलेला मासा, ब्राऊन राईस आणि ताक."
        }
      }
    },
    dinner: {
      mealBadge: "🌙 RATRI-AAHAR (DINNER · 7:30 PM - LIGHT AGNI)",
      veg: {
        title: "Light Oats Moong Kitchari & Spiced Milk",
        body: "Light Oats & Moong Dal Kitchari with Ghee, warm spiced milk before sleep.",
        speech: {
          en: "Good evening {NAME}! Day 5 Dinner: Light Oats Moong Khichdi with Ghee and warm spiced milk before sleep.",
          hi: "शुभ संध्या {NAME}! डे 5 रात का खाना: ओट्स और मूंग दाल की हल्की खिचड़ी और गर्म दूध।",
          mr: "शुभ संध्या {NAME}! डे ५ रात्री: ओट्स मूग डाळ खिचडी आणि गरम दूध."
        }
      },
      nonveg: {
        title: "Egg White Ginger Broth & Spiced Milk",
        body: "Egg White Soup in ginger & garlic broth, warm spiced milk.",
        speech: {
          en: "Good evening {NAME}! Day 5 Dinner: Egg White soup in ginger garlic broth, followed by warm milk.",
          hi: "शुभ संध्या {NAME}! डे 5: अदरक-लहसुन वाला एग व्हाइट सूप और गर्म दूध।",
          mr: "शुभ संध्या {NAME}! डे ५: आले-लसूण एग व्हाईट सूप आणि गरम दूध."
        }
      }
    }
  },

  // DAY 6 (Saturday / Day 6)
  {
    dayName: "DAY 6 · PARATHA & CHICKEN CURRY MENU",
    breakfast: {
      mealBadge: "🥣 PRATAH-AAHAR (BREAKFAST · 8:00 AM)",
      veg: {
        title: "Multigrain Paneer Paratha & Herbal Tea",
        body: "Paneer Paratha (Multigrain) prepared in Cow Ghee, 5 soaked walnuts & almonds, herbal tea.",
        speech: {
          en: "Good morning {NAME}! Day 6 Menu: Multigrain Paneer Paratha prepared in Cow Ghee, soaked walnuts & herbal tea.",
          hi: "गुड मॉर्निंग {NAME}! डे 6 नाश्ता: देसी घी में बना पनीर पराठा, अखरोट और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! डे ६ नाश्ता: तुपातील पनीर पराठा, अक्रोड आणि हर्बल चहा."
        }
      },
      nonveg: {
        title: "Chicken Sausage Omelette & Herbal Tea",
        body: "Chicken Sausage / Egg White Omelette with peppers & Ghee, 5 soaked walnuts, herbal tea.",
        speech: {
          en: "Good morning {NAME}! Day 6 Menu: Chicken Sausage Egg white omelette cooked in Ghee, soaked walnuts & tea.",
          hi: "गुड मॉर्निंग {NAME}! डे 6: घी में बना चिकन सॉसेज एग ऑमलेट, अखरोट और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! डे ६: तुपातील चिकन सॉसेज ऑम्लेट, अक्रोड आणि हर्बल चहा."
        }
      }
    },
    lunch: {
      mealBadge: "🍲 MADHYANHA-AAHAR (LUNCH · 1:00 PM - PEAK AGNI)",
      veg: {
        title: "Black Chickpea Chana & Jowar Roti",
        body: "Chana Masala (Black Chickpeas), Jowar Roti with Ghee, cucumber salad & cumin buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 6 Lunch: Protein-packed Black Chana Curry, Jowar Roti with Ghee, and cumin buttermilk.",
          hi: "नमस्ते {NAME}! डे 6 दोपहर का खाना: काला चना मसाला, ज्वार की रोटी देसी घी के साथ और जीरा मट्ठा।",
          mr: "नमस्ते {NAME}! डे ६ जेवण: काळा चणा मसाला, ज्वारीची भाकरी तुपासह आणि ताक."
        }
      },
      nonveg: {
        title: "Light Chicken Curry & Jowar Roti",
        body: "Chicken Curry in light tomato-ginger gravy, Jowar Roti with Ghee, cucumber salad & buttermilk.",
        speech: {
          en: "Hello {NAME}! Day 6 Lunch: Light Chicken Curry cooked with tomato & ginger, Jowar Roti, and fresh buttermilk.",
          hi: "नमस्ते {NAME}! डे 6: टमाटर-अदरक ग्रेवी वाला चिकन करी, ज्वार की रोटी और ताज़ा मट्ठा।",
          mr: "नमस्ते {NAME}! डे ६: टोमॅटो-आले चिकन करी, ज्वारीची भाकरी आणि ताक."
        }
      }
    },
    dinner: {
      mealBadge: "🌙 RATRI-AAHAR (DINNER · 7:30 PM - LIGHT AGNI)",
      veg: {
        title: "Spinach Sweet Corn Soup & Nutmeg Milk",
        body: "Spinach & Sweet Corn Soup with Cow Ghee, warm nutmeg milk before sleep.",
        speech: {
          en: "Good evening {NAME}! Day 6 Dinner: Light Spinach & Corn Soup with Ghee and warm nutmeg milk before sleep.",
          hi: "शुभ संध्या {NAME}! डे 6 रात का खाना: पालक और कॉर्न सूप घी के साथ और जायफल वाला गर्म दूध।",
          mr: "शुभ संध्या {NAME}! डे ६ रात्री: पालक कॉर्न सूप तुपासह आणि जायफळ दूध."
        }
      },
      nonveg: {
        title: "Clear Chicken Broth & Nutmeg Milk",
        body: "Clear Chicken Broth with pepper & Ghee, warm nutmeg milk.",
        speech: {
          en: "Good evening {NAME}! Day 6 Dinner: Clear Chicken Broth with pepper, followed by warm nutmeg milk.",
          hi: "शुभ संध्या {NAME}! डे 6: काली मिर्च वाला चिकन ब्रोथ और गर्म जायफल दूध।",
          mr: "शुभ संध्या {NAME}! डे ६: मिरीचा हलका चिकन ब्रोथ आणि जायफळ दूध."
        }
      }
    }
  },

  // DAY 7 (Sunday / Day 7)
  {
    dayName: "DAY 7 · GRAND SATTVIC THALI & SLEEP RECOVERY MENU",
    breakfast: {
      mealBadge: "🥣 PRATAH-AAHAR (BREAKFAST · 8:00 AM)",
      veg: {
        title: "Vegetable Upma & Herbal Tea",
        body: "Upma with veggies & roasted peanuts, 5 soaked almonds & figs, warm herbal tea.",
        speech: {
          en: "Good morning {NAME}! Sunday Special Menu: Vegetable Upma with roasted peanuts, soaked almonds & herbal tea.",
          hi: "गुड मॉर्निंग {NAME}! संडे स्पेशल नाश्ता: वेजिटेबल उपमा मूंगफली के साथ, बादाम और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! संडे नाश्ता: व्हेज उपमा शेंगदाण्यांसह, बदाम आणि हर्बल चहा."
        }
      },
      nonveg: {
        title: "Poached Eggs on Toast & Herbal Tea",
        body: "2 Poached Eggs on Multigrain toast with black pepper & Ghee, 5 soaked almonds, herbal tea.",
        speech: {
          en: "Good morning {NAME}! Sunday Menu: Poached Eggs on Multigrain toast sprinkled with pepper & Ghee, soaked almonds.",
          hi: "गुड मॉर्निंग {NAME}! संडे: पोच्ड एग्स मल्टीग्रेन टोस्ट पर, बादाम और हर्बल चाय।",
          mr: "गुड मॉर्निंग {NAME}! संडे: पोच्ड एग्स टोस्टवर, बदाम आणि हर्बल चहा."
        }
      }
    },
    lunch: {
      mealBadge: "🍲 MADHYANHA-AAHAR (LUNCH · 1:00 PM - PEAK AGNI)",
      veg: {
        title: "Grand Sattvic Feast Thali",
        body: "Special Sattvic Thali: Dal Tadka in Ghee, Paneer, Brown Rice, Multigrain Roti, mint buttermilk.",
        speech: {
          en: "Hello {NAME}! Sunday Feast Lunch: Special Sattvic Thali with Dal Tadka in Cow Ghee, Paneer, Brown Rice & buttermilk.",
          hi: "नमस्ते {NAME}! संडे स्पेशल दोपहर का खाना: देसी घी दाल तड़का, पनीर, ब्राउन राइस और पुदीना मट्ठा।",
          mr: "नमस्ते {NAME}! संडे स्पेशल जेवण: तुपातील दाल तडका, पनीर, ब्राऊन राईस आणि ताक."
        }
      },
      nonveg: {
        title: "Special Ayurvedic Chicken/Fish Thali",
        body: "Ayurvedic Chicken/Fish Thali: Grilled Chicken/Fish, Brown Rice, Multigrain Roti, fresh mint buttermilk.",
        speech: {
          en: "Hello {NAME}! Sunday Special Lunch: Ayurvedic Chicken or Fish Thali, Brown Rice, Multigrain Roti, and buttermilk.",
          hi: "नमस्ते {NAME}! संडे स्पेशल: आयुर्वेदिक ग्रिल्ड चिकन/फिश थाली, ब्राउन राइस और पुदीना मट्ठा।",
          mr: "नमस्ते {NAME}! संडे स्पेशल: आयुर्वेदिक चिकन/फिश थाळी, ब्राऊन राईस आणि ताक."
        }
      }
    },
    dinner: {
      mealBadge: "🌙 RATRI-AAHAR (DINNER · 7:30 PM - LIGHT AGNI)",
      veg: {
        title: "Mix Veg Soup & Deep Sleep Ashwagandha Milk",
        body: "Light Mixed Veg Soup with Ghee, warm Ashwagandha milk for deep sleep muscle recovery.",
        speech: {
          en: "Good evening {NAME}! Sunday Recovery Dinner: Light Mixed Veg Soup with Ghee and Ashwagandha milk for deep sleep.",
          hi: "शुभ संध्या {NAME}! संडे रात का खाना: मिक्स वेज सूप घी के साथ और गहरी नींद के लिए अश्वगंधा दूध।",
          mr: "शुभ संध्या {NAME}! संडे रात्री: मिक्स व्हेज सूप तुपासह आणि शांत झोपेसाठी अश्वगंधा दूध."
        }
      },
      nonveg: {
        title: "Mutton/Chicken Broth & Sleep Recovery Milk",
        body: "Light Mutton or Chicken Broth, warm Ashwagandha milk for deep sleep muscle recovery.",
        speech: {
          en: "Good evening {NAME}! Sunday Recovery Dinner: Light Mutton or Chicken Broth, followed by warm Ashwagandha milk.",
          hi: "शुभ संध्या {NAME}! संडे: मटन या चिकन का हल्का ब्रोथ और गहरी नींद के लिए अश्वगंधा दूध।",
          mr: "शुभ संध्या {NAME}! संडे: मटण किंवा चिकन सूप आणि शांत झोपेसाठी अश्वगंधा दूध."
        }
      }
    }
  }
];

function calcAyurvedicHydrationAndProtein() {
  const sets = todayDone();
  const weight = cfg.userWeight || 66;
  const bottleMl = cfg.bottleMl || 1000;
  const burnedKcal = Math.round(todayCalories());

  // 1. Water requirement: 35ml per kg body weight + 30ml per set of Surya Namaskar
  const waterLiters = (weight * 0.035 + sets * 0.03).toFixed(1);
  const totalWaterMl = Math.round(waterLiters * 1000);

  // Calculate target bottle/container count based on selected bottle capacity
  const targetContainers = Math.max(1, Math.ceil(totalWaterMl / bottleMl));
  const containerLabel = bottleMl >= 1000 ? (bottleMl / 1000 + " L Bottle") : (bottleMl + " ml");

  // 2. Weight Loss Calorie Target & Expenditure
  const bmr = Math.round(22 * weight);
  const tdee = Math.round(bmr * 1.35 + burnedKcal);
  const targetIntakeKcal = Math.max(1200, tdee - 500);

  // 3. 4-Macronutrient & Fiber Calculations
  const proteinGrams = Math.round(weight * 1.25 + Math.min(20, sets * 0.5));
  const carbsGrams   = Math.round((targetIntakeKcal * 0.45) / 4);
  const fatsGrams    = Math.round((targetIntakeKcal * 0.25) / 9);
  const fiberGrams   = Math.min(40, Math.max(28, Math.round(weight * 0.45)));

  return {
    weight,
    sets,
    burnedKcal,
    waterLiters,
    totalWaterMl,
    bottleMl,
    targetContainers,
    containerLabel,
    proteinGrams,
    carbsGrams,
    fatsGrams,
    fiberGrams,
    bmr,
    tdee,
    targetIntakeKcal
  };
}

let activeDietMealType = "breakfast";

function getDietPlanForCurrentState(mealTypeOverride, dietPrefOverride) {
  const now = new Date();
  const h = now.getHours();
  let mealType = mealTypeOverride;

  if (!mealType || mealType === "water") {
    if (h >= 5 && h < 11) mealType = "breakfast";
    else if (h >= 11 && h < 16) mealType = "lunch";
    else mealType = "dinner";
  }

  activeDietMealType = mealType;

  // Real Day of Week calculation: Mon=0, Tue=1, Wed=2, Thu=3, Fri=4, Sat=5, Sun=6
  const dayOfWeek = now.getDay();
  const dayIdx = dayOfWeek === 0 ? 6 : (dayOfWeek - 1);

  const daysEn = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const daysHi = ["रविवार", "सोमवार", "मंगलवार", "बुधवार", "गुरुवार", "शुक्रवार", "शनिवार"];
  const daysMr = ["रविवार", "सोमवार", "मंगळवार", "बुधवार", "गुरूवार", "शुक्रवार", "शनिवार"];

  const monthsEn = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const monthsHi = ["जनवरी", "फरवरी", "मार्च", "अप्रैल", "मई", "जून", "जुलाई", "अगस्त", "सितंबर", "अक्टूबर", "नवंबर", "दिसंबर"];

  const dateNum = now.getDate();
  const monthIdx = now.getMonth();
  const timeFmt = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const dateStrEn = `${daysEn[dayOfWeek]}, ${dateNum} ${monthsEn[monthIdx]} · ${timeFmt}`;
  const dateStrHi = `${daysHi[dayOfWeek]}, ${dateNum} ${monthsHi[monthIdx]} · ${timeFmt}`;

  const dailyMenu = AYURVEDIC_DIET_PLAN_7DAYS[dayIdx];
  const dietPref = dietPrefOverride || (cfg.dietType === "nonveg" ? "nonveg" : "veg");
  const mealObj = dailyMenu[mealType][dietPref];
  const metrics = calcAyurvedicHydrationAndProtein();
  const name = cfg.userName || "Vaibhav";

  const lang = cfg.quoteLang || cfg.pranaLang || "hi";
  let speechText = mealObj.speech[lang] || mealObj.speech.hi;

  const dateTimeIntro = lang === "hi"
    ? `आज ${daysHi[dayOfWeek]}, ${dateNum} ${monthsHi[monthIdx]} को समय ${timeFmt}। `
    : lang === "mr"
    ? `आज ${daysMr[dayOfWeek]}, ${dateNum} ${monthsHi[monthIdx]} वेळ ${timeFmt}। `
    : `Today is ${daysEn[dayOfWeek]}, ${dateNum} ${monthsEn[monthIdx]} at ${timeFmt}. `;

  speechText = dateTimeIntro + speechText
    .replace(/{NAME}/g, name)
    .replace(/{SETS}/g, metrics.sets)
    .replace(/{WATER}/g, metrics.waterLiters)
    .replace(/{PROTEIN}/g, metrics.proteinGrams);

  return {
    mealType,
    dayName: dailyMenu.dayName,
    dateStr: lang === "hi" ? dateStrHi : dateStrEn,
    mealBadge: dailyMenu[mealType].mealBadge,
    dietPref,
    title: mealObj.title,
    body: mealObj.body,
    speechText,
    metrics,
    name
  };
}

function getWaterLoggedToday() {
  if (!data.waterLogs) data.waterLogs = {};
  const tk = todayKey();
  return data.waterLogs[tk] || 0;
}

function changeWaterBottleSize(newMl) {
  cfg.bottleMl = parseInt(newMl) || 1000;
  saveAll();
  const bsEl = document.getElementById("cfg-bottle-size"); if(bsEl) bsEl.value = cfg.bottleMl;
  const msEl = document.getElementById("modal-bottle-size"); if(msEl) msEl.value = cfg.bottleMl;
  updateWaterTrackerUI();
}
window.changeWaterBottleSize = changeWaterBottleSize;

function logWaterGlass() {
  const metrics = calcAyurvedicHydrationAndProtein();
  const tk = todayKey();
  if (!data.waterLogs) data.waterLogs = {};
  const currentLogged = data.waterLogs[tk] || 0;
  const target = metrics.targetContainers;
  const name = cfg.userName || "Vaibhav";
  const lang = cfg.quoteLang || cfg.pranaLang || "hi";

  // If goal is ALREADY completed, notify user and prevent over-incrementing
  if (currentLogged >= target) {
    updateWaterTrackerUI();
    vib([40, 40]);
    if (!voiceMuted && window.speechSynthesis && typeof SpeechSynthesisUtterance !== "undefined") {
      qClear();
      try {
        const msg = lang === "hi"
          ? `बधाई हो ${name}! आपने आज का 100% जल लक्ष्य पहले ही पूरा कर लिया है! कल 12 बजे मध्यरात्रि के बाद अगला लक्ष्य शुरू होगा।`
          : `Congratulations ${name}! You have already completed 100% of your daily water goal for today. Next goal unlocks at 12 AM midnight!`;
        const u = new SpeechSynthesisUtterance(msg);
        u.rate = 0.95;
        u.lang = lang === "en" ? "en-IN" : "hi-IN";
        qSpeak(u);
      } catch (e) {}
    }
    return;
  }

  // Increment water log
  data.waterLogs[tk] = currentLogged + 1;
  saveAll();

  const logged = data.waterLogs[tk];
  const remaining = Math.max(0, target - logged);

  updateWaterTrackerUI();

  // Play appreciation & confirmation voice
  if (!voiceMuted && window.speechSynthesis && typeof SpeechSynthesisUtterance !== "undefined") {
    qClear();
    try {
      const unitStr = metrics.bottleMl >= 1000 ? `${metrics.bottleMl / 1000} Liter bottle` : `${metrics.bottleMl} milliliter glass`;
      const unitPlural = metrics.bottleMl >= 1000 ? "bottles" : "glasses";
      let speechMsg = "";

      if (logged >= target) {
        speechMsg = lang === "hi"
          ? `बधाई हो ${name}! आपने आज का 100% जल लक्ष्य ${metrics.waterLiters} लीटर (${target} ${metrics.bottleMl >= 1000 ? "बोतल" : "ग्लास"}) पूरा कर लिया है! उत्कृष्ट कार्य!`
          : lang === "mr"
          ? `अभिनंदन ${name}! आपण आजचे १००% पाणी लक्ष्य ${metrics.waterLiters} लीटर पूर्ण केले आहे! खूप छान!`
          : `Congratulations ${name}! You have completed 100% of your daily ${metrics.waterLiters} Liters hydration goal with ${target} ${unitPlural}! Water button locked for today and will unlock at 12 AM midnight. Excellent work!`;
      } else {
        speechMsg = lang === "hi"
          ? `बहुत बढ़िया ${name}! 1 ${unitStr} दर्ज हुआ। आज ${logged} पूर्ण, ${remaining} ${unitPlural} बाकी हैं।`
          : lang === "mr"
          ? `छान ${name}! १ ${unitStr} नोंदवला. आज ${logged} पूर्ण, ${remaining} बाकी आहेत.`
          : `Great job ${name}! 1 ${unitStr} confirmed. You have completed ${logged} of ${target} target ${unitPlural} today, with ${remaining} ${unitPlural} remaining.`;
      }

      const u = new SpeechSynthesisUtterance(speechMsg);
      u.rate = 0.95;
      if (lang === "en") u.lang = "en-IN";
      else u.lang = "hi-IN";
      qSpeak(u);
    } catch (e) {}
  }
}

function quickLogWaterAndSpeak() {
  logWaterGlass();
}
window.quickLogWaterAndSpeak = quickLogWaterAndSpeak;

function updateWaterTrackerUI() {
  const metrics = calcAyurvedicHydrationAndProtein();
  const logged = getWaterLoggedToday();
  const target = metrics.targetContainers;
  const remaining = Math.max(0, target - logged);
  const pct = Math.min(100, Math.round((logged / target) * 100));
  const unitName = metrics.bottleMl >= 1000 ? "Bottles" : "Glasses";

  const ptEl = document.getElementById("water-progress-text");
  if (ptEl) {
    ptEl.textContent = `${logged} / ${target} ${unitName} (${remaining > 0 ? remaining + ' left' : 'Goal Reached!'})`;
  }

  const wgEl = document.getElementById("diet-water-glasses");
  if (wgEl) {
    wgEl.textContent = `(${target} ${unitName} of ${metrics.containerLabel})`;
  }

  const msEl = document.getElementById("modal-bottle-size");
  if (msEl && cfg.bottleMl) msEl.value = cfg.bottleMl;
  const bsEl = document.getElementById("cfg-bottle-size");
  if (bsEl && cfg.bottleMl) bsEl.value = cfg.bottleMl;

  const pbEl = document.getElementById("water-progress-bar");
  if (pbEl) pbEl.style.width = pct + "%";

  const gbEl = document.getElementById("water-goal-badge");
  if (gbEl) gbEl.style.display = logged >= target ? "block" : "none";

  // Sync main dashboard card widgets
  const cqsEl = document.getElementById("card-water-quick-status");
  if (cqsEl) {
    cqsEl.textContent = logged >= target
      ? `🎉 Goal Completed! ${logged} / ${target} ${unitName} (${metrics.waterLiters}L)`
      : `💧 ${logged} / ${target} ${unitName} (${metrics.waterLiters}L Goal)`;
  }
  const cpbEl = document.getElementById("card-water-progress-bar");
  if (cpbEl) {
    cpbEl.style.width = pct + "%";
  }

  // 🔒 Lock / Unlock +1 Drink Water buttons when today's goal is reached (Resets at 12 AM Midnight)
  const isGoalReached = logged >= target;

  const btnModalText = document.getElementById("log-water-btn-text");
  const btnModal = (btnModalText && typeof btnModalText.closest === "function") ? btnModalText.closest("button") : document.getElementById("log-water-btn");
  const btnQuick = document.getElementById("btn-quick-log-water");

  if (isGoalReached) {
    // Locked State (Goal Completed)
    if (btnModalText) btnModalText.textContent = `🎉 Water Goal Completed!`;
    if (btnModal) {
      btnModal.disabled = true;
      btnModal.style.opacity = "0.75";
      btnModal.style.cursor = "not-allowed";
      btnModal.style.background = "rgba(255,215,0,0.2)";
      btnModal.style.border = "1px solid #FFD700";
      btnModal.style.color = "#FFD700";
    }
    if (btnQuick) {
      btnQuick.innerHTML = `🎉 Goal Completed!`;
      btnQuick.disabled = true;
      btnQuick.style.opacity = "0.75";
      btnQuick.style.cursor = "not-allowed";
      btnQuick.style.background = "rgba(255,215,0,0.2)";
      btnQuick.style.border = "1px solid #FFD700";
      btnQuick.style.color = "#FFD700";
      btnQuick.style.boxShadow = "none";
    }
  } else {
    // Unlocked Active State (Goal Pending)
    if (btnModalText) btnModalText.textContent = `💧 +1 ${metrics.containerLabel} Confirmed`;
    if (btnModal) {
      btnModal.disabled = false;
      btnModal.style.opacity = "1";
      btnModal.style.cursor = "pointer";
      btnModal.style.background = "var(--acc)";
      btnModal.style.border = "none";
      btnModal.style.color = "#06231A";
    }
    if (btnQuick) {
      btnQuick.innerHTML = `💧 +1 Drink Water`;
      btnQuick.disabled = false;
      btnQuick.style.opacity = "1";
      btnQuick.style.cursor = "pointer";
      btnQuick.style.background = "var(--acc)";
      btnQuick.style.border = "none";
      btnQuick.style.color = "#06231A";
      btnQuick.style.boxShadow = "0 2px 8px rgba(29,184,127,0.3)";
    }
  }
}

let currentDietTabMode = "both";

function renderFullDayDietPlan() {
  const container = document.getElementById("diet-full-day-container");
  if (!container) return;

  const now = new Date();
  const dateStr = now.toLocaleDateString(undefined, { weekday: "long", month: "short", day: "numeric", year: "numeric" });
  const dateHeaderEl = document.getElementById("diet-prep-date-header");
  if (dateHeaderEl) {
    dateHeaderEl.innerHTML = `📅 <strong>Date:</strong> ${dateStr} · Advance Prep Timetable`;
  }

  const dayOfWeek = now.getDay();
  const dayIdx = dayOfWeek === 0 ? 6 : (dayOfWeek - 1);
  const dailyMenu = AYURVEDIC_DIET_PLAN_7DAYS[dayIdx];

  const meals = [
    {
      key: "early_morning",
      timeSlot: "06:30 AM",
      badge: "Early Morning Prana Hydration",
      icon: "💧",
      prepNote: "⏰ <strong>Advance Prep:</strong> Soak 5 almonds & 1 tsp cumin seeds in water the night before at 9:00 PM.",
      veg: { title: "Jeera-Ajwain Warm Water & Soaked Almonds", body: "Warm water infused with cumin & ajwain. Eat 5 peeled soaked almonds for digestion & Agni activation." },
      nonveg: { title: "Jeera-Ajwain Warm Water & Soaked Almonds", body: "Warm water infused with cumin & ajwain. Eat 5 peeled soaked almonds for digestion & Agni activation." }
    },
    {
      key: "breakfast",
      timeSlot: "08:30 AM",
      badge: dailyMenu.breakfast.mealBadge,
      icon: "🥣",
      prepNote: "⏰ <strong>Advance Prep:</strong> Sprout moong beans 24 hrs prior. Chop veggies 15 min before breakfast.",
      veg: dailyMenu.breakfast.veg,
      nonveg: dailyMenu.breakfast.nonveg
    },
    {
      key: "mid_morning",
      timeSlot: "11:00 AM",
      badge: "Mid-Morning Vitality & Prana Refreshment",
      icon: "🍊",
      prepNote: "⏰ <strong>Advance Prep:</strong> Keep fresh tender coconut or papaya chilled in advance.",
      veg: { title: "Tender Coconut Water & Fresh Papaya", body: "1 Glass fresh coconut water / 1 bowl fresh papaya slices. Replenishes electrolytes & improves skin glow." },
      nonveg: { title: "Tender Coconut Water & Fresh Papaya", body: "1 Glass fresh coconut water / 1 bowl fresh papaya slices. Replenishes electrolytes & improves skin glow." }
    },
    {
      key: "lunch",
      timeSlot: "01:30 PM",
      badge: dailyMenu.lunch.mealBadge,
      icon: "🍲",
      prepNote: "⏰ <strong>Advance Prep:</strong> Cook dal & veggies 30 min before lunch. Prepare fresh curd.",
      veg: dailyMenu.lunch.veg,
      nonveg: dailyMenu.lunch.nonveg
    },
    {
      key: "evening",
      timeSlot: "05:00 PM",
      badge: "Evening Prana Refreshment & Seeds",
      icon: "☕",
      prepNote: "⏰ <strong>Advance Prep:</strong> Dry-roast makhana/pumpkin seeds in advance & store in airtight jar.",
      veg: { title: "Golden Turmeric Milk / Herbal Tea & Roasted Makhana", body: "Warm turmeric milk or herbal tea + 1 cup dry-roasted lotus seeds (makhana) or chia seeds." },
      nonveg: { title: "Golden Turmeric Milk / Herbal Tea & Roasted Makhana", body: "Warm turmeric milk or herbal tea + 1 cup dry-roasted lotus seeds (makhana) or chia seeds." }
    },
    {
      key: "dinner",
      timeSlot: "07:30 PM",
      badge: dailyMenu.dinner.mealBadge,
      icon: "🌙",
      prepNote: "⏰ <strong>Advance Prep:</strong> Prepare light soup by 7:00 PM for easy sleep digestion.",
      veg: dailyMenu.dinner.veg,
      nonveg: dailyMenu.dinner.nonveg
    }
  ];

  let html = "";
  meals.forEach(m => {
    html += `
      <div class="diet-meal-block" style="background:var(--surf);border:1px solid var(--bdr);border-radius:16px;padding:14px;box-shadow:0 4px 16px rgba(0,0,0,0.3)">
        <div style="font-size:12px;font-weight:900;color:var(--acc-lt);margin-bottom:6px;display:flex;align-items:center;justify-content:space-between">
          <span style="display:flex;align-items:center;gap:6px">${m.icon} <strong>${m.timeSlot}</strong> — ${m.badge}</span>
        </div>
        
        <div style="font-size:10px;color:var(--txt2);background:rgba(245,158,11,0.1);border-left:3px solid var(--acc);padding:5px 8px;border-radius:0 8px 8px 0;margin-bottom:8px">
          ${m.prepNote}
        </div>

        <!-- Veg Plan Item -->
        <div class="diet-subcard-veg" style="background:rgba(16,185,129,0.08);border:1px solid rgba(16,185,129,0.3);border-radius:12px;padding:10px;margin-bottom:8px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
            <span style="font-size:12px;font-weight:900;color:var(--txt)">${m.veg.title}</span>
            <span style="font-size:9px;background:rgba(16,185,129,0.25);color:#34D399;padding:2px 6px;border-radius:6px;font-weight:800">🌱 VEG</span>
          </div>
          <div style="font-size:11px;color:var(--txt2);line-height:1.5">${m.veg.body}</div>
        </div>

        <!-- Non-Veg Plan Item -->
        <div class="diet-subcard-nonveg" style="background:rgba(255,159,67,0.08);border:1px solid rgba(255,159,67,0.3);border-radius:12px;padding:10px">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px">
            <span style="font-size:12px;font-weight:900;color:var(--txt)">${m.nonveg.title}</span>
            <span style="font-size:9px;background:rgba(255,159,67,0.25);color:#FF9F43;padding:2px 6px;border-radius:6px;font-weight:800">🍗 NON-VEG</span>
          </div>
          <div style="font-size:11px;color:var(--txt2);line-height:1.5">${m.nonveg.body}</div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  applyDietTabVisibility();
}

function switchDietTab(mode) {
  currentDietTabMode = mode;
  const btnBoth   = document.getElementById("diet-tab-both");
  const btnVeg    = document.getElementById("diet-tab-veg");
  const btnNonVeg = document.getElementById("diet-tab-nonveg");

  [btnBoth, btnVeg, btnNonVeg].forEach(b => {
    if (b) {
      b.style.background = "var(--surf2)";
      b.style.borderColor = "var(--bdr)";
      b.style.color = "var(--txt2)";
    }
  });

  if (mode === "veg") {
    if (btnVeg) { btnVeg.style.background = "var(--acc-dim)"; btnVeg.style.borderColor = "var(--acc)"; btnVeg.style.color = "var(--acc-lt)"; }
  } else if (mode === "nonveg") {
    if (btnNonVeg) { btnNonVeg.style.background = "var(--acc-dim)"; btnNonVeg.style.borderColor = "var(--acc)"; btnNonVeg.style.color = "var(--acc-lt)"; }
  } else {
    if (btnBoth) { btnBoth.style.background = "var(--acc-dim)"; btnBoth.style.borderColor = "var(--acc)"; btnBoth.style.color = "var(--acc-lt)"; }
  }
  applyDietTabVisibility();
}

function applyDietTabVisibility() {
  document.querySelectorAll(".diet-subcard-veg").forEach(el => {
    el.style.display = (currentDietTabMode === "nonveg") ? "none" : "block";
  });
  document.querySelectorAll(".diet-subcard-nonveg").forEach(el => {
    el.style.display = (currentDietTabMode === "veg") ? "none" : "block";
  });
}

function isDietReminderActiveToday() {
  const today = todayKey();
  // Auto-reset check: if turned OFF on a previous day, automatically restore to ON for today!
  if (data.dietOffDate && data.dietOffDate !== today) {
    delete data.dietOffDate;
    cfg.dietNotifOn = true;
    saveAll();
  }
  return cfg.dietNotifOn !== false;
}

function syncModalReminderToggles() {
  const active = isDietReminderActiveToday();
  togSet("tog-modal-diet-notif", active);
  togSet("tog-modal-water-notif", active);
  togSet("tog-modal-postgoal-notif", cfg.autoShowDietPostGoal !== false);
}

function toggleModalReminder(type) {
  const today = todayKey();
  if (type === "diet" || type === "water") {
    const activeNow = isDietReminderActiveToday();
    const nextState = !activeNow;
    cfg.dietNotifOn = nextState;
    if (!nextState) {
      data.dietOffDate = today; // Turning OFF applies ONLY for today!
    } else {
      delete data.dietOffDate;
    }
    togSet("tog-modal-diet-notif", nextState);
    togSet("tog-modal-water-notif", nextState);
    togSet("tog-diet-notif", nextState);
  } else if (type === "postgoal") {
    cfg.autoShowDietPostGoal = !togGet("tog-modal-postgoal-notif");
    togSet("tog-modal-postgoal-notif", cfg.autoShowDietPostGoal);
    togSet("tog-auto-diet-post-goal", cfg.autoShowDietPostGoal);
  }
  saveAll();
  scheduleAyurvedicDietNotifications();
  scheduleWaterIntakeReminders();
}

function switchDietTab(mode) {
  currentDietTabMode = mode;
  const btnBoth   = document.getElementById("diet-tab-both");
  const btnVeg    = document.getElementById("diet-tab-veg");
  const btnNonVeg = document.getElementById("diet-tab-nonveg");

  [btnBoth, btnVeg, btnNonVeg].forEach(b => {
    if (b) {
      b.style.background = "var(--surf2)";
      b.style.borderColor = "var(--bdr)";
      b.style.color = "var(--txt2)";
    }
  });

  if (mode === "veg") {
    if (btnVeg) { btnVeg.style.background = "var(--acc-dim)"; btnVeg.style.borderColor = "var(--acc)"; btnVeg.style.color = "var(--acc-lt)"; }
  } else if (mode === "nonveg") {
    if (btnNonVeg) { btnNonVeg.style.background = "var(--acc-dim)"; btnNonVeg.style.borderColor = "var(--acc)"; btnNonVeg.style.color = "var(--acc-lt)"; }
  } else {
    if (btnBoth) { btnBoth.style.background = "var(--acc-dim)"; btnBoth.style.borderColor = "var(--acc)"; btnBoth.style.color = "var(--acc-lt)"; }
  }
  applyDietTabVisibility();
  // Update voice speech to read active tab's meal plan
  speakCurrentDietNotification();
}

function speakWaterHydrationStatus() {
  if (voiceMuted || !window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") return;
  const metrics = calcAyurvedicHydrationAndProtein();
  const logged = getWaterLoggedToday();
  const target = metrics.targetContainers;
  const remaining = Math.max(0, target - logged);
  const name = cfg.userName || "Vaibhav";
  const lang = cfg.quoteLang || cfg.pranaLang || "hi";

  qClear();
  try {
    const unitStr = metrics.bottleMl >= 1000 ? `${metrics.bottleMl / 1000} Liter bottles` : `${metrics.bottleMl} ml glasses`;
    let speechMsg = "";

    if (logged >= target) {
      speechMsg = lang === "hi"
        ? `नमस्ते ${name}! आपने आज का जल लक्ष्य ${metrics.waterLiters} लीटर (${target} ${metrics.bottleMl >= 1000 ? "बोतल" : "ग्लास"}) 100% पूरा कर लिया है! बहुत बढ़िया!`
        : lang === "mr"
        ? `नमस्ते ${name}! आपण आजचे पाणी लक्ष्य ${metrics.waterLiters} लीटर पूर्ण केले आहे! खूप छान!`
        : `Namaste ${name}! You have completed 100% of your daily ${metrics.waterLiters} Liters hydration goal with ${target} ${unitStr}. Excellent job staying hydrated!`;
    } else {
      speechMsg = lang === "hi"
        ? `नमस्ते ${name}! आपका जल लक्ष्य ${metrics.waterLiters} लीटर है। अब तक ${logged} ${metrics.bottleMl >= 1000 ? "बोतल" : "ग्लास"} दर्ज हुए हैं, और ${remaining} बाकी हैं। पानी पिएं और तरोताज़ा रहें!`
        : lang === "mr"
        ? `नमस्ते ${name}! तुमचे पाणी लक्ष्य ${metrics.waterLiters} लीटर आहे. आतापर्यंत ${logged} पूर्ण, ${remaining} बाकी आहेत.`
        : `Namaste ${name}! Your daily water target is ${metrics.waterLiters} Liters. You have logged ${logged} ${unitStr} today, with ${remaining} remaining. Remember to stay hydrated!`;
    }

    const u = new SpeechSynthesisUtterance(speechMsg);
    u.rate = 0.95;
    if (lang === "en") u.lang = "en-IN";
    else u.lang = "hi-IN";
    qSpeak(u);
  } catch (e) {}
}
window.speakWaterHydrationStatus = speakWaterHydrationStatus;

function showDietModal(mealTypeOverride, mode = "diet") {
  // If settings drawer is open, close it cleanly
  const dr = document.getElementById("dr");
  if (dr && dr.classList.contains("show")) {
    dr.classList.remove("show");
  }

  const activePref = (currentDietTabMode === "nonveg" || cfg.dietType === "nonveg") ? "nonveg" : "veg";
  const planObj = getDietPlanForCurrentState(mealTypeOverride, activePref);
  const metrics = calcAyurvedicHydrationAndProtein();

  const icEl = document.getElementById("diet-modal-icon");          if(icEl) icEl.textContent = planObj.mealType === "breakfast" ? "🥣" : (planObj.mealType === "lunch" ? "🍲" : "🌙");
  const grEl = document.getElementById("diet-user-greeting");       if(grEl) grEl.textContent = "Namaste " + planObj.name + "! 🙏 (" + planObj.dayName + ")";
  const wvEl = document.getElementById("diet-water-val");           if(wvEl) wvEl.textContent = metrics.waterLiters + " L";
  const wgEl = document.getElementById("diet-water-glasses");       if(wgEl) wgEl.textContent = "(" + metrics.glasses + " Glasses)";
  const pvEl = document.getElementById("diet-protein-val");         if(pvEl) pvEl.textContent = metrics.proteinGrams + "g";
  const cvEl = document.getElementById("diet-carbs-val");           if(cvEl) cvEl.textContent = metrics.carbsGrams + "g";
  const fvEl = document.getElementById("diet-fats-val");            if(fvEl) fvEl.textContent = metrics.fatsGrams + "g";
  const fbEl = document.getElementById("diet-fiber-val");           if(fbEl) fbEl.textContent = metrics.fiberGrams + "g";
  const scEl = document.getElementById("diet-sets-count");          if(scEl) scEl.textContent = "Based on " + metrics.weight + "kg & " + metrics.sets + " Sets";

  const bwEl = document.getElementById("diet-weight-val");          if(bwEl) bwEl.textContent = "Weight: " + metrics.weight + " kg";
  const dbEl = document.getElementById("diet-burned-val");          if(dbEl) dbEl.textContent = metrics.burnedKcal + " kcal";
  const dtEl = document.getElementById("diet-intake-target-val");   if(dtEl) dtEl.textContent = metrics.targetIntakeKcal.toLocaleString() + " kcal/day";

  renderFullDayDietPlan();
  updateWaterTrackerUI();
  syncModalReminderToggles();

  const modal = document.getElementById("diet-modal");
  if (modal) {
    modal.style.display = "flex";
    modal.classList.add("show");
  }

  // AUTO-PLAY APPROPRIATE VOICE ON OPEN
  setTimeout(() => {
    if (mode === "water" || mealTypeOverride === "water") {
      speakWaterHydrationStatus();
    } else {
      speakCurrentDietNotification(planObj);
    }
  }, 400);
}

function closeDietModal() {
  const modal = document.getElementById("diet-modal");
  if (modal) {
    modal.style.display = "none";
    modal.classList.remove("show");
  }
  qClear();
}

window.showDietModal = showDietModal;
window.showdietmodal = showDietModal;
window.showDietmodal = showDietModal;
window.showdietPlan = showDietModal;
window.showDietPlan = showDietModal;
window.closeDietModal = closeDietModal;
window.switchDietTab = switchDietTab;
window.toggleModalReminder = toggleModalReminder;
window.logWaterGlass = logWaterGlass;

function speakCurrentDietNotification(planObj) {
  if (voiceMuted || !window.speechSynthesis || typeof SpeechSynthesisUtterance === "undefined") return;
  const activePref = (currentDietTabMode === "nonveg" || cfg.dietType === "nonveg") ? "nonveg" : "veg";
  const plan = planObj || getDietPlanForCurrentState(activeDietMealType, activePref);
  
  const lang = cfg.quoteLang || cfg.pranaLang || "hi";

  qClear();

  try {
    const u = new SpeechSynthesisUtterance(plan.speechText);
    if (lang === "en") {
      u.lang = "en-IN"; u.rate = 0.96;
    } else if (lang === "mr") {
      u.lang = "mr-IN"; u.rate = 0.92;
    } else {
      u.lang = "hi-IN"; u.rate = 0.92;
    }

    qSpeak(u);
  } catch (e) {
    console.warn("Speech synthesis error:", e);
  }
}

function triggerAyurvedicDietNotification(mealType) {
  if (!isDietReminderActiveToday()) return;
  const plan = getDietPlanForCurrentState(mealType);

  // 1. Show System Notification
  if ("Notification" in window && Notification.permission === "granted") {
    try {
      const n = new Notification("🥗 Ayurvedic Diet & Hydration · " + plan.name, {
        body: plan.title + "\nWater Target: " + plan.metrics.waterLiters + "L | Protein: " + plan.metrics.proteinGrams + "g",
        icon: "./icon-192.png",
        badge: "./icon-192.png",
        tag: "surya-diet-notif",
        renotify: true,
        vibrate: [200, 100, 200]
      });
      n.onclick = () => {
        try { window.focus(); } catch (e) {}
        showDietModal(mealType);
        n.close();
      };
    } catch (e) { console.warn("Notification error:", e); }
  }

  // 2. If app is visible, pop diet modal and autoplay voice
  if (document.visibilityState === "visible") {
    showDietModal(mealType);
  }
}

let _dietNotifTimer = null;

function scheduleAyurvedicDietNotifications() {
  if (_dietNotifTimer) { clearInterval(_dietNotifTimer); _dietNotifTimer = null; }
  if (cfg.dietNotifOn === false) return;

  let lastTriggeredHour = -1;

  _dietNotifTimer = setInterval(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();

    if (h === lastTriggeredHour) return;

    if (h === 8 && m >= 0 && m <= 15) {
      lastTriggeredHour = h;
      triggerAyurvedicDietNotification("breakfast");
    } else if (h === 13 && m >= 0 && m <= 15) {
      lastTriggeredHour = h;
      triggerAyurvedicDietNotification("lunch");
    } else if (h === 19 && m >= 30 && m <= 45) {
      lastTriggeredHour = h;
      triggerAyurvedicDietNotification("dinner");
    }
  }, 60000);
}

let _waterNotifTimer = null;

function scheduleWaterIntakeReminders() {
  if (_waterNotifTimer) { clearInterval(_waterNotifTimer); _waterNotifTimer = null; }
  if (cfg.dietNotifOn === false) return;

  let lastTriggeredHour = -1;

  _waterNotifTimer = setInterval(() => {
    const now = new Date();
    const h = now.getHours();
    const m = now.getMinutes();

    if (h === lastTriggeredHour) return;

    // 2-Hourly daytime water sip reminders (10 AM, 12 PM, 3 PM, 5 PM, 8 PM)
    if ([10, 12, 15, 17, 20].includes(h) && m >= 0 && m <= 15) {
      lastTriggeredHour = h;
      triggerWaterHydrationNotification();
    }
  }, 60000);
}

function triggerWaterHydrationNotification() {
  if (cfg.dietNotifOn === false) return;
  const metrics = calcAyurvedicHydrationAndProtein();
  const logged = getWaterLoggedToday();
  const target = metrics.targetContainers;
  const unitName = metrics.bottleMl >= 1000 ? "bottle" : "glass";
  const unitPlural = metrics.bottleMl >= 1000 ? "bottles" : "glasses";
  const name = cfg.userName || "Vaibhav";
  const lang = cfg.quoteLang || cfg.pranaLang || "hi";

  const msg = lang === "hi"
    ? `💧 हाइड्रेशन रिमांडर ${name}! अपनी ऊर्जा और स्वास्थ्य के लिए 1 ${unitName} पानी पिएं (${logged}/${target} ${unitPlural} पूर्ण)। दर्ज़ करने के लिए क्लिक करें!`
    : `💧 Hydration Reminder ${name}! Time to drink 1 ${unitName} of water (${logged}/${target} ${unitPlural} logged). Tap to confirm 1 ${unitName}!`;

  sendSystemNotification(`💧 Water Hydration Check · ${name}`, {
    body: msg,
    tag: "surya-water-notif",
    vibrate: [300, 100, 300, 100, 300],
    data: { type: "water" },
    actions: [
      { action: "log_water", title: "💧 +1 " + (metrics.bottleMl >= 1000 ? "Bottle" : "Glass") + " Confirmed" },
      { action: "view_diet", title: "🥗 View Tracker" }
    ],
    onclick: () => {
      try { window.focus(); } catch (e) {}
      quickLogWaterAndSpeak();
    }
  });

  // Voice speech if app visible or active
  if (document.visibilityState === "visible" && !voiceMuted && window.speechSynthesis && typeof SpeechSynthesisUtterance !== "undefined") {
    qClear();
    try {
      const u = new SpeechSynthesisUtterance(msg);
      u.rate = 0.95;
      u.lang = lang === "en" ? "en-IN" : "hi-IN";
      qSpeak(u);
    } catch (e) {}
  }
}

window.showDietModal = showDietModal;
window.closeDietModal = closeDietModal;
window.switchDietTab = switchDietTab;
window.logWaterGlass = logWaterGlass;
window.speakCurrentDietNotification = speakCurrentDietNotification;

// visibilitychange handled in unified handler below

// SW message listener (for future SW-based alarm)
navigator.serviceWorker && navigator.serviceWorker.addEventListener("message", e=>{
  if(e.data && e.data.type === "ALARM_FIRED") {
    const goal = todayGoal();
    speakText("Good morning! Today target is " + goal + " rounds. Om.");
  }
});



// ── UNIFIED visibilitychange — one handler, no duplicates ──────
document.addEventListener("visibilitychange", async () => {
  if(document.visibilityState !== "visible") return;
  // 1. Re-acquire wake lock if session active OR Pranayama is active/open
  const pranaOv = document.getElementById("prana-ov");
  const isPranaOpen = pranaState.active || (pranaOv && pranaOv.classList.contains("show"));
  if((sess.active && !sess.paused) || isPranaOpen) {
    await acquireWakeLock();
  }
  // 2. Check if goal needs rolling over (12 AM Midnight rule)
  checkMidnightRollover();
  // 3. Re-schedule 12 AM rollover timer
  scheduleMidnightRollover();
  // 4. Reschedule alarm timer
  if(cfg.alarmOn) scheduleAlarm();
  // 5. Greet if opened near alarm time
  checkMorningGreeting();
});


/* ── Data Recovery Scanner ─────────────────────────────────────
   Scans every possible localStorage key and shows what's found.
   Called from Settings "Scan & Recover" button.
/* ── Backup & Restore Engine ────────────────────────────────── */
function exportDataBackup() {
  try {
    const backupObj = {
      appName     : "SuryaNamaskara",
      version     : KEY,
      exportDate  : new Date().toISOString(),
      cfg         : cfg,
      data        : data
    };

    const jsonStr  = JSON.stringify(backupObj, null, 2);
    const blob     = new Blob([jsonStr], { type: "application/json" });
    const url      = URL.createObjectURL(blob);

    const today    = new Date().toISOString().slice(0, 10);
    const fileName = `SuryaNamaskara_Backup_${today}.json`;

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    setStatus("Backup exported as " + fileName);
    vib(50);
  } catch(e) {
    alert("Export failed: " + e.message);
  }
}

function importDataBackup(file) {
  if(!file) return;
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const content = e.target.result;
      const parsed  = JSON.parse(content);

      const importedData = parsed.data || (parsed.history ? parsed : null);
      const importedCfg  = parsed.cfg  || {};

      if(!importedData || (!importedData.history && importedData.totalAllTime === undefined)) {
        alert("Invalid backup file format! Please select a valid SuryaNamaskara JSON backup file.");
        return;
      }

      // Merge config
      if(importedCfg && typeof importedCfg === "object") {
        Object.assign(cfg, importedCfg);
      }

      // Merge history records — retain highest values
      const curHist = data.history || {};
      const srcHist = importedData.history || {};

      Object.keys(srcHist).forEach(date => {
        const srcRec = srcHist[date];
        const sets   = typeof srcRec === "number" ? srcRec : (srcRec.sets || 0);
        const timeMs = typeof srcRec === "object" ? (srcRec.timeMs || 0) : 0;
        const goal   = typeof srcRec === "object" ? (srcRec.goal || 0) : 0;
        const prana  = typeof srcRec === "object" ? (srcRec.pranaMs || 0) : 0;

        if(!curHist[date]) {
          curHist[date] = { sets, timeMs, goal, pranaMs: prana };
        } else {
          curHist[date].sets   = Math.max(curHist[date].sets || 0, sets);
          curHist[date].timeMs = Math.max(curHist[date].timeMs || 0, timeMs);
          curHist[date].goal   = Math.max(curHist[date].goal || 0, goal);
          if(prana) curHist[date].pranaMs = Math.max(curHist[date].pranaMs || 0, prana);
        }
      });

      data.history = curHist;

      // Update total counters (never decrease)
      if(importedData.totalAllTime !== undefined) {
        data.totalAllTime = Math.max(data.totalAllTime || 0, importedData.totalAllTime);
      }
      if(importedData.totalTimeMs !== undefined) {
        data.totalTimeMs = Math.max(data.totalTimeMs || 0, importedData.totalTimeMs);
      }
      if(importedData.totalPranaMs !== undefined) {
        data.totalPranaMs = Math.max(data.totalPranaMs || 0, importedData.totalPranaMs);
      }
      if(importedData.lastCompletedGoal) {
        data.lastCompletedGoal = Math.max(data.lastCompletedGoal || 0, importedData.lastCompletedGoal);
      }

      // Save merged state
      saveAll();

      // Update UI components
      render();
      renderBars();
      updatePranaTimeCards();

      const daysCount = Object.keys(data.history).length;
      alert("✅ Practice History Restored Successfully!\n\n" +
            "• Total Lifetime Sets: " + data.totalAllTime + "\n" +
            "• Total Days Recorded: " + daysCount + "\n" +
            "• Settings Restored!");
      vib([40, 40, 80]);
    } catch(err) {
      alert("Failed to restore backup file: " + err.message);
    }
  };
  reader.readAsText(file);
}

function scanAndRecover() {
  const ALL_KEYS = [
    "surya-v36","surya-v35","surya-v34","surya-v33","surya-v32","surya-v31","surya-v30","surya-v29",
    "surya-v28","surya-v27","surya-v26","surya-v25","surya-v24","surya-v23",
    "surya-v22","surya-v21","surya-v20","surya-v19","surya-v18","surya-v17",
    "surya-v16","surya-v15","surya-v14","surya-v13","surya-v12","surya-v11",
    "surya-v10","surya-v9","surya-v8","surya-v7","surya-v6","surya-v5",
    "surya-v4","surya-v3","surya-v2","surya-v1","surya-namaskara-data-v1","surya-v0"
  ];

  const found = [];
  for(const k of ALL_KEYS) {
    const raw = localStorage.getItem(k);
    if(!raw) continue;
    try {
      const sv  = JSON.parse(raw);
      const d   = sv.data || sv;  // handle flat and nested formats
      const sets = d.totalAllTime || 0;
      const days = Object.keys(d.history || {}).length;
      const timeMs = d.totalTimeMs || 0;
      found.push({ key:k, sets, days, timeMs });
    } catch(e) { found.push({ key:k, sets:"?", days:"?", timeMs:0 }); }
  }

  if(found.length === 0) {
    alert("No saved data found in any version key.\nAll data appears to have been cleared.");
    return;
  }

  // Show found keys
  let msg = "Found data in " + found.length + " version key(s):\n\n";
  found.forEach(f => {
    const mins = Math.round(f.timeMs / 60000);
    msg += f.key + "\n  Sets: " + f.sets + " | Days: " + f.days + " | Time: " + mins + "min\n\n";
  });

  // Find best (most sets)
  const best = found.reduce((a,b) => (b.sets > a.sets ? b : a), found[0]);
  msg += "Best record: " + best.key + " (" + best.sets + " sets)\n\n";
  msg += "Tap OK to RESTORE from " + best.key + " and save as current version.";

  if(confirm(msg)) {
    try {
      const raw = localStorage.getItem(best.key);
      const sv  = JSON.parse(raw);
      const d   = sv.data || sv;
      const c   = sv.cfg  || {};

      // Load into current data
      Object.assign(cfg,  c);
      Object.assign(data, d);

      // Normalise history
      Object.keys(data.history).forEach(k => {
        const v = data.history[k];
        if(typeof v === "number") data.history[k] = {sets:v,timeMs:0,goal:0};
        if(!data.history[k].timeMs) data.history[k].timeMs = 0;
        if(!data.history[k].goal)   data.history[k].goal   = 0;
      });

      // Save under current key
      localStorage.setItem(KEY, JSON.stringify({cfg, data}));
      alert("Restored! Sets: " + data.totalAllTime + " | History days: " + Object.keys(data.history).length);
      location.reload();
    } catch(e) {
      alert("Restore failed: " + e.message);
    }
  }
}

/* ═══════════════════════════════════════════════════════════════
   IN-APP BILLING — Google Play / Digital Goods API
   Product IDs matching Google Play Console:
     surya.pass.1month  — One-Month Pass (non-renewing)
     surya.sub.6month   — 6-Month auto-renewing subscription
     surya.sub.12month  — 12-Month auto-renewing subscription
═══════════════════════════════════════════════════════════════ */
let selectedSku = "surya.sub.6month";

function selectSubTier(sku) {
  selectedSku = sku;
  ["1month", "6month", "12month"].forEach(t => {
    const el = document.getElementById("sub-card-" + t);
    if(el) {
      if(sku.includes(t)) {
        el.style.borderColor = "var(--acc)";
        el.style.borderWidth = "2px";
      } else {
        el.style.borderColor = "var(--bdr)";
        el.style.borderWidth = "1.5px";
      }
    }
  });
}

function showPaywallOverlay() {
  const ov = document.getElementById("paywall-ov");
  if(ov) ov.classList.add("show");
}

function closePaywallOverlay() {
  const ov = document.getElementById("paywall-ov");
  if(ov) ov.classList.remove("show");
}

async function executePlayPurchase() {
  const btn = document.getElementById("pay-sub-btn");
  if(!btn) return;
  const origText = btn.innerHTML;
  btn.innerHTML = "⏳ Connecting to Google Play…";
  btn.disabled = true;

  try {
    // 1. Digital Goods API for Android TWA (Google Play Store App)
    if ("getDigitalGoodsService" in window) {
      try {
        const service = await window.getDigitalGoodsService("https://play.google.com/billing");
        const details = await service.getDetails([selectedSku]);

        const paymentMethods = [{
          supportedMethods: "https://play.google.com/billing",
          data: { sku: selectedSku }
        }];

        const price = selectedSku.includes("12month") ? "999" : (selectedSku.includes("6month") ? "699" : "199");
        const request = new PaymentRequest(paymentMethods, {
          total: { label: "SuryaSarathi PRO Subscription", amount: { currency: "INR", value: price } }
        });

        const response = await request.show();
        await response.complete("success");

        grantPremiumAccess(selectedSku, response);
        closePaywallOverlay();
        alert("🎉 Welcome to SuryaSarathi PRO! Your Google Play subscription is active.");
        return;
      } catch (dgErr) {
        console.warn("Digital Goods API not active in this environment:", dgErr);
      }
    }

    // 2. Web Browser Preview / Staging Fallback (outside Play Store APK)
    grantPremiumAccess(selectedSku, null);
    closePaywallOverlay();
    alert("🎉 Welcome to SuryaSarathi PRO!\n\n(Note: Real Google Play Billing automatically triggers when users install your app from the Google Play Store).");

  } catch (err) {
    if (err.name !== "AbortError") {
      alert("Billing info: " + (err.message || "Purchase cancelled"));
    }
  } finally {
    btn.innerHTML = origText;
    btn.disabled = false;
  }
}

function showPaywallOverlay() {
  renderSubOverlayUI();
  const ov = document.getElementById("paywall-ov");
  if(ov) ov.classList.add("show");
}

function dismissBenefitsCard() {
  data.hideDay1Benefits = true;
  saveAll();
  render();
}

/* ── Free Trial & App Lock Engine ───────────────────────────── */
function getTrialInfo() {
  if (data.isPremium) {
    return { isTrial: false, isLocked: false, daysLeft: 0, daysElapsed: 0 };
  }

  if (!data.trialStartDate) {
    data.trialStartDate = new Date().toISOString();
    saveAll();
  }

  const start = new Date(data.trialStartDate);
  const end = new Date(start.getTime() + 7 * 86400000);
  const now = new Date();
  const diffMs = now - start;
  const daysElapsed = Math.floor(diffMs / 86400000);
  const daysLeft = Math.max(0, 7 - daysElapsed);
  const isLocked = daysLeft <= 0;

  const opt = { month: 'short', day: 'numeric', year: 'numeric' };
  return {
    isTrial: true,
    isLocked: isLocked,
    daysLeft: daysLeft,
    daysElapsed: daysElapsed,
    startDateStr: start.toLocaleDateString(undefined, opt),
    endDateStr: end.toLocaleDateString(undefined, opt)
  };
}

function checkAppLockState() {
  const trial = getTrialInfo();
  const sub = getSubscriptionInfo();

  if (data.isPremium && sub.active) {
    hideAppLock();
    return false;
  }

  if (trial.isLocked) {
    showAppLock();
    return true;
  }

  hideAppLock();
  return false;
}

function showAppLock() {
  const lockOv = document.getElementById("app-lock-ov");
  if(lockOv) lockOv.classList.add("show");
}

function hideAppLock() {
  const lockOv = document.getElementById("app-lock-ov");
  if(lockOv) lockOv.classList.remove("show");
}

/* ── Subscription Status & Marketing Reminders ───────────────── */
function getSubscriptionInfo() {
  if (!data.isPremium || !data.subDate) {
    return { active: false, daysLeft: 0, isExpired: false, isExpiringSoon: false };
  }
  const start = new Date(data.subDate);
  const sku = data.subSku || "surya.sub.6month";
  const is12m = sku.includes("12month");
  const is6m  = sku.includes("6month");
  const is1m  = sku.includes("pass.1month") || sku.includes("1month");

  const durationDays = is12m ? 365 : (is6m ? 180 : 30);
  // 1-Month Plan = One-Time Pass (No Auto-Renew)
  // 6-Month & 12-Month Plans = Auto-Renewing Subscriptions via Google Play Store
  const autoRenew = is6m || is12m;

  const end = new Date(start.getTime() + durationDays * 86400000);
  const now = new Date();
  const diffMs = end - now;
  const daysLeft = Math.max(0, Math.ceil(diffMs / 86400000));
  const active = diffMs > 0;

  const opt = { month: 'short', day: 'numeric', year: 'numeric' };
  return {
    active,
    sku,
    planName: is12m ? "12-Month Annual Pass" : (is6m ? "6-Month Subscription Plan" : "1-Month Pass"),
    startDateStr: start.toLocaleDateString(undefined, opt),
    endDateStr: end.toLocaleDateString(undefined, opt),
    daysLeft,
    autoRenew,
    isExpiringSoon: active && daysLeft <= 2,
    isExpired: !active
  };
}

function renderSubOverlayUI() {
  const sub = getSubscriptionInfo();
  const trial = getTrialInfo();
  const container = document.getElementById("sub-active-container");
  if(!container) return;

  if (sub.active) {
    const renewBadge = sub.autoRenew 
      ? '<span style="background:var(--acc-dim);color:var(--acc-lt);border:1px solid var(--acc);font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;">🔄 Auto-Renewing (Play Store)</span>'
      : '<span style="background:var(--surf2);color:var(--muted);border:1px solid var(--bdr);font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;">⏳ One-Time Pass (No Auto-Renew)</span>';

    const daysBadge = sub.isExpiringSoon
      ? `<div style="background:linear-gradient(135deg,#3A1000,#1A0000);border:1px solid var(--danger);color:var(--danger);font-size:12px;font-weight:800;padding:6px 12px;border-radius:10px;margin-top:8px;">⚠️ ${sub.daysLeft} Day${sub.daysLeft>1?'s':''} Remaining — Renew now to keep your streak!</div>`
      : `<div style="background:var(--acc-dim);border:1px solid var(--acc);color:var(--acc-lt);font-size:12px;font-weight:800;padding:6px 12px;border-radius:10px;margin-top:8px;">⏳ ${sub.daysLeft} Days Remaining</div>`;

    container.innerHTML = `
      <div style="background:linear-gradient(135deg,var(--surf2),var(--surf));border:1.5px solid var(--acc);border-radius:16px;padding:14px;margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="font-size:15px;font-weight:800;color:var(--acc);">${sub.planName}</div>
          ${renewBadge}
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px;font-size:11px;color:var(--txt2);">
          <div><strong style="color:var(--txt);">Started:</strong> ${sub.startDateStr}</div>
          <div><strong style="color:var(--txt);">${sub.autoRenew?'Renews:':'Expires:'}</strong> ${sub.endDateStr}</div>
        </div>
        ${daysBadge}
        <div style="margin-top:10px;display:flex;gap:8px;">
          ${sub.autoRenew ? `
          <button onclick="managePlayStoreSubscription()" 
                  style="flex:1;background:var(--surf2);border:1px solid var(--bdr);color:var(--txt);border-radius:9px;padding:7px;font-size:11px;font-weight:700;cursor:pointer;">
            ⚙️ Manage / Cancel in Play Store
          </button>` : ''}
        </div>
      </div>
    `;
  } else if (trial.isTrial && !trial.isLocked) {
    container.innerHTML = `
      <div style="background:linear-gradient(135deg,rgba(29,184,127,0.15),rgba(255,215,0,0.12));border:1.5px solid var(--acc);border-radius:16px;padding:14px;margin-bottom:14px;">
        <div style="display:flex;justify-content:space-between;align-items:center;">
          <div style="font-size:15px;font-weight:800;color:var(--acc);">🎁 7-Day Free Trial Active</div>
          <span style="background:var(--acc-dim);color:var(--acc-lt);border:1px solid var(--acc);font-size:10px;font-weight:700;padding:2px 8px;border-radius:10px;">Full Access</span>
        </div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:10px;font-size:11px;color:var(--txt2);">
          <div><strong style="color:var(--txt);">Trial Start Date:</strong> ${trial.startDateStr}</div>
          <div><strong style="color:var(--txt);">Trial End Date:</strong> ${trial.endDateStr}</div>
        </div>
        <div style="background:var(--acc-dim);border:1px solid var(--acc);color:var(--acc-lt);font-size:12px;font-weight:800;padding:6px 12px;border-radius:10px;margin-top:10px;text-align:center;">
          ⏳ ${trial.daysLeft} Day${trial.daysLeft>1?'s':''} Remaining — Practice Unlocked Until ${trial.endDateStr}
        </div>
      </div>
    `;
  } else if (sub.isExpired) {
    container.innerHTML = `
      <div style="background:linear-gradient(135deg,#3A1000,#1A0A00);border:1.5px solid var(--danger);border-radius:16px;padding:14px;margin-bottom:14px;text-align:center;">
        <div style="font-size:15px;font-weight:800;color:var(--danger);">⚠️ Subscription Expired</div>
        <div style="font-size:12px;color:var(--txt2);margin-top:4px;">Your PRO plan expired on ${sub.endDateStr}. Renew today to continue your 108 Surya Namaskara streak!</div>
      </div>
    `;
  } else {
    container.innerHTML = "";
  }
}

function checkSubscriptionReminder() {
  const sub = getSubscriptionInfo();
  const trial = getTrialInfo();
  const banner = document.getElementById("sub-reminder-banner");
  if(!banner) return;

  // 1. Paid Subscription Expiring Soon (<= 2 days)
  if (sub.active && sub.isExpiringSoon) {
    banner.style.display = "block";
    banner.innerHTML = `
      <div onclick="showPaywallOverlay()" style="background:linear-gradient(135deg,#3A1000,#1A0A00);border:1.5px solid var(--danger);border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
        <div>
          <div style="font-size:12px;font-weight:800;color:var(--danger)">⏳ PRO Plan Expiring in ${sub.daysLeft} Day${sub.daysLeft>1?'s':''}!</div>
          <div style="font-size:10px;color:var(--txt2)">Renew now to keep your 108 Surya Namaskara streak unbroken.</div>
        </div>
        <div style="background:var(--danger);color:#fff;font-size:10px;font-weight:800;padding:4px 10px;border-radius:8px;">Renew</div>
      </div>
    `;
    return;
  }

  // 2. Paid Subscription Expired
  if (sub.isExpired && data.subDate) {
    banner.style.display = "block";
    banner.innerHTML = `
      <div onclick="showPaywallOverlay()" style="background:linear-gradient(135deg,#3A1000,#1A0A00);border:1.5px solid var(--danger);border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
        <div>
          <div style="font-size:12px;font-weight:800;color:var(--danger)">⚠️ Subscription Expired (${sub.endDateStr})</div>
          <div style="font-size:10px;color:var(--txt2)">Re-activate PRO to unlock full voice guidance &amp; pranayama.</div>
        </div>
        <div style="background:var(--acc);color:#06231A;font-size:10px;font-weight:800;padding:4px 10px;border-radius:8px;">Re-activate</div>
      </div>
    `;
    return;
  }

  // 3. Free Trial Expired (Lock active)
  if (trial.isLocked) {
    banner.style.display = "block";
    banner.innerHTML = `
      <div onclick="showPaywallOverlay()" style="background:linear-gradient(135deg,#3A1000,#1A0A00);border:1.5px solid var(--danger);border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
        <div>
          <div style="font-size:12px;font-weight:800;color:var(--danger)">🔒 7-Day Free Trial Expired!</div>
          <div style="font-size:10px;color:var(--txt2)">Select a PRO Plan to unlock your daily 108 Surya Namaskara practice.</div>
        </div>
        <div style="background:var(--acc);color:#06231A;font-size:10px;font-weight:800;padding:4px 10px;border-radius:8px;">Unlock</div>
      </div>
    `;
    return;
  }

  // 4. Free Trial Active
  if (trial.isTrial && !trial.isLocked) {
    banner.style.display = "block";
    banner.innerHTML = `
      <div onclick="showPaywallOverlay()" style="background:linear-gradient(135deg,rgba(255,215,0,0.15),rgba(29,184,127,0.15));border:1.5px solid var(--acc);border-radius:12px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;cursor:pointer;">
        <div>
          <div style="font-size:12px;font-weight:800;color:var(--acc-lt)">🎁 7-Day Free Trial Active (${trial.daysLeft} Day${trial.daysLeft>1?'s':''} Left)</div>
          <div style="font-size:10px;color:var(--txt2)">Start: ${trial.startDateStr} · End: ${trial.endDateStr} · Full Access Unlocked</div>
        </div>
        <div style="background:var(--acc);color:#06231A;font-size:10px;font-weight:800;padding:4px 10px;border-radius:8px;">View Plans</div>
      </div>
    `;
    return;
  }

  banner.style.display = "none";
}

function managePlayStoreSubscription() {
  if(confirm("Opening Google Play Store Subscriptions...\n\nYou can view, manage, or cancel auto-renewal anytime in Google Play Store.")) {
    window.open("https://play.google.com/store/account/subscriptions", "_blank");
  }
}

function grantPremiumAccess(sku, response) {
  data.isPremium = true;
  data.subSku    = sku;
  data.subDate   = new Date().toISOString();
  saveAll();
  hideAppLock();
  render();
}

/* ═══════════════════════════════════════════════════════════════
   CLASSICAL YOGA & AYURVEDIC PRANAYAMA STANDARDS
   Based on Hatha Yoga Pradipika, Gheranda Samhita, & Shiva Samhita
═══════════════════════════════════════════════════════════════ */
const CLASSICAL_YOGA_AYURVEDA_STANDARDS = {
  dirgha: {
    title: "Dirgha Pranayama (Three-Part Deep Breathing)",
    classicalText: "Patanjali Yoga Sutras (2.49-51) & Gheranda Samhita (5.46-52)",
    method: "Sit comfortably with an erect spine. Inhale sequentially in three distinct stages: first fill the lower abdomen (belly), second expand the intercostal ribs, third lift the upper chest and collarbones. Exhale in exact reverse order: upper chest falls, ribs contract, belly draws inward toward the spine.",
    ratios: {
      beginner: "1 : 0 : 1 (4s Inhale, 4s Exhale — Equal Sama Vritti)",
      intermediate: "1 : 0 : 2 (4s Inhale, 8s Exhale — Extended Visama Vritti)",
      advanced: "1 : 1 : 2 (4s Inhale, 4s Antar Kumbhaka retention, 8s Exhale)"
    },
    roundsDuration: "6 – 10 rounds (2.5 – 5.0 minutes daily)",
    postureMudraEye: "Padmasana (Lotus Pose), Siddhasana, or Sukhasana. Hands in Chin Mudra (thumb & index tip joining, palms up on knees). Eyes softly closed with internal awareness at Manipuraka (Navel) & Anahata (Heart) Chakras.",
    timeFasting: "Best practiced during Brahma Muhurta (4:00 AM – 6:00 AM) or Sunset (Sandhya). Strictly on an empty stomach (minimum 3–4 hours after meals).",
    physicalBenefits: "Increases vital lung capacity by up to 30%, mobilizes the diaphragm, strengthens intercostal muscles, optimizes arterial blood oxygenation, and aids venous blood return.",
    mentalBenefits: "Activates the Parasympathetic Nervous System via Vagus nerve stimulation. Reduces cortisol, calms hyper-arousal, alleviates panic and anxiety, and brings immediate mental clarity.",
    ayurvedicBenefits: {
      vata: "Strongly pacifies Vata (Samana Vayu & Vyana Vayu) — grounds nervous energy.",
      pitta: "Cools excess Sadhaka Pitta — reduces anger and emotional heat.",
      kapha: "Expands chest region to prevent stagnant Kledaka Kapha accumulation.",
      agni: "Balances Jatharagni (digestive fire) without creating harsh heat.",
      prana: "Harmonizes Prana Vayu (chest intake) and Apana Vayu (elimination)."
    },
    chakraNadi: "Harmonizes Manipuraka (Solar Plexus) & Anahata (Heart) Chakras. Equalizes energy flow between Ida (Moon/Left) and Pingala (Sun/Right) Nadis.",
    precautions: "Avoid forcing or straining the breath. Keep shoulders relaxed; do not hunch shoulders upward during inhalation. Caution during acute respiratory asthma flare-ups.",
    progression: "Stage 1: Equal 4:4 breath (1 week) → Stage 2: Extended 4:8 exhale (2 weeks) → Stage 3: 4:4:8 ratio with gentle internal retention (Antar Kumbhaka)."
  },

  kapalabhati: {
    title: "Kapalabhati (Skull-Shining Purification / Shatkarma)",
    classicalText: "Hatha Yoga Pradipika (2.35–37) & Gheranda Samhita (1.55–58)",
    method: "Sit tall with erect spine. Inhalation is passive, natural, and quiet. Exhalation is rapid, active, sharp, and forceful through both nostrils by contracting the lower abdominal muscles and snapping the navel inward toward the spine.",
    ratios: {
      beginner: "30 strokes per round at 1 stroke/sec (No retention)",
      intermediate: "36–60 strokes per round at 1.2 strokes/sec followed by 10s Antar Kumbhaka",
      advanced: "120 strokes per round followed by 30s Antar Kumbhaka with Jalandhara & Mula Bandhas"
    },
    roundsDuration: "3 – 5 rounds (36 strokes/round, total 4.5 minutes)",
    postureMudraEye: "Siddhasana or Padmasana. Hands in Chin Mudra or Adi Mudra. Eyes closed with gaze turned inward at Bhrumadhya (Eyebrow Center — Ajna Chakra).",
    timeFasting: "Early morning during Brahma Muhurta. Strictly on a completely empty stomach (minimum 4 hours post-meal).",
    physicalBenefits: "Clears frontal cranial sinuses (*Kapala*), expels stale residual air and excess carbon dioxide, tones abdominal rectus muscles, and stimulates pancreatic secretion.",
    mentalBenefits: "Dispels mental lethargy (*Tamas*), sharpens cognitive alertness, enhances focus, and induces a feeling of lightness and clarity in the skull.",
    ayurvedicBenefits: {
      vata: "Stimulates Samana Vayu; exercise moderation to avoid over-activating Vyana Vayu.",
      pitta: "Increases internal body heat (Pitta) — practice gently in hot summer climates.",
      kapha: "Strongly destroys excess Kapha (*Kapha Nashak*) and clears mucosal stagnation.",
      agni: "Kindles intense Jatharagni (digestive fire) & Bhutagni (liver metabolic fire).",
      prana: "Awakens Udana Vayu (upward energy) & Prana Vayu."
    },
    chakraNadi: "Purifies all 72,000 Nadis as described in Hatha Yoga Pradipika. Strongly stimulates Manipuraka (Solar Plexus) & Ajna (Third Eye) Chakras.",
    precautions: "STRICT CONTRAINDICATIONS: High Blood Pressure, Heart Conditions, Hernia, Epilepsy, Glaucoma, Pregnancy, Recent Abdominal Surgery. Mistake: Hunching shoulders or facial grimacing during strokes.",
    progression: "Stage 1: 20 strokes @ 1 stroke/sec → Stage 2: 36–60 strokes with 12s Kumbhaka → Stage 3: 120 strokes with Jalandhara and Mula Bandhas."
  },

  bhastrika: {
    title: "Bhastrika (Bellows Breath)",
    classicalText: "Hatha Yoga Pradipika (2.59–67) & Gheranda Samhita (5.75–77)",
    method: "Mimic the action of a blacksmith's bellows. Inhale forcefully AND exhale forcefully through both nostrils with equal force and speed, expanding and contracting the abdomen. Conclude round with a deep inhalation, hold (Kumbhaka), and slow exhalation.",
    ratios: {
      beginner: "15 rapid equal breaths followed by 1 : 0 : 1 deep breath",
      intermediate: "24 rapid breaths followed by 1 : 4 : 2 retention (4s in, 16s hold, 8s out)",
      advanced: "50–100 rapid breaths followed by 1 : 4 : 2 : 1 Kumbhaka with Mahabandha (Mula + Uddiyana + Jalandhara)"
    },
    roundsDuration: "3 – 4 rounds (24 breaths/round, total 3.0 minutes)",
    postureMudraEye: "Padmasana, Vajrasana, or Siddhasana. Hands in Jnana Mudra or loose fists at shoulder height. Eyes closed, internal awareness at Anahata (Heart) & Ajna Chakras.",
    timeFasting: "Early morning at sunrise or cold weather. Strictly empty stomach (minimum 4 hours post-meal).",
    physicalBenefits: "Heats the entire body, purifies bronchial airways, strengthens diaphragm and intercostals, boosts immune response, and accelerates cellular oxygen intake.",
    mentalBenefits: "Removes Tamasic inertia and Rajasic agitation, bringing the mind into Sattvic tranquility, resilience, and vitality.",
    ayurvedicBenefits: {
      vata: "Balances Vata when practiced with proper internal retention.",
      pitta: "Increases Pitta heat; balances Tridosha according to Hatha Yoga Pradipika 2.65.",
      kapha: "Rapidly liquefies and expels thick Kapha phlegm.",
      agni: "Maximizes Jatharagni and Dhatu Agni (tissue metabolism).",
      prana: "Forces Prana into Sushumna Nadi, piercing the 3 Granthis."
    },
    chakraNadi: "Pierces Brahma Granthi (Root), Vishnu Granthi (Heart), & Rudra Granthi (Head). Directs Prana into central Sushumna Nadi.",
    precautions: "CONTRAINDICATED in Severe Hypertension, Vertigo, Heart conditions, Gastric Ulcers, Pregnancy, Ear Infection. Mistake: Excessive throat friction or hyperventilation without control.",
    progression: "Stage 1: 12 slow bellows breaths → Stage 2: 24 breaths with 15s hold → Stage 3: 50 breaths with Mahabandha."
  },

  anulom: {
    title: "Anulom Vilom (Alternate Nostril Balance)",
    classicalText: "Yoga Yajnavalkya (6.1–25) & Shiva Samhita (3.22–30)",
    method: "Raise right hand in Nasagra / Vishnu Mudra. Close right nostril with thumb, inhale smoothly through left nostril. Close left nostril with ring finger, release right nostril and exhale smoothly. Inhale through right nostril, close right, exhale through left. Maintain continuous rhythm without breath retention.",
    ratios: {
      beginner: "1 : 0 : 1 (4s Inhale Left, 4s Exhale Right, 4s Inhale Right, 4s Exhale Left)",
      intermediate: "1 : 0 : 2 (4s Inhale, 8s Exhale — Extended Exhalation)",
      advanced: "1 : 0 : 2 (5s Inhale, 10s Exhale — Deep Slow Flow)"
    },
    roundsDuration: "10 – 15 rounds (6.0 minutes daily)",
    postureMudraEye: "Padmasana or Siddhasana. Right hand in Nasagra / Vishnu Mudra, Left hand in Chin Mudra on left knee. Eyes closed, awareness at Bhrumadhya (Ajna Chakra).",
    timeFasting: "Any time of day (ideal at dawn, noon, sunset). Empty stomach or minimum 2 hours after a light meal.",
    physicalBenefits: "Synchronizes left and right brain hemisphere activity, balances sympathetic and parasympathetic nervous systems, and improves cardiovascular rhythm.",
    mentalBenefits: "Alleviates anxiety, stress, emotional mood swings, and insomnia. Restores mental focus, patience, and inner equilibrium.",
    ayurvedicBenefits: {
      vata: "Pacifies Prana Vayu and Vyana Vayu — excellent for Vata disorders.",
      pitta: "Cools excess Pitta and reduces vascular heat.",
      kapha: "Regulates Kapha flow throughout the upper respiratory channels.",
      agni: "Balances Samana Agni in the solar plexus.",
      prana: "Equalizes Ida (Moon/Left/Cooling) & Pingala (Sun/Right/Heating) Nadis."
    },
    chakraNadi: "Purifies Ida & Pingala Nadis, establishing balance across Ajna (Third Eye) Chakra.",
    precautions: "Avoid pressing nostrils too hard. Do not rush or force the airflow; breathing should be silent, smooth, and un-jerky.",
    progression: "Stage 1: Equal 4:4 ratio → Stage 2: 4:8 ratio → Stage 3: Transition to Nadi Shodhana with Antar Kumbhaka."
  },

  nadi: {
    title: "Nadi Shodhana (Channel Purification 1:4:2 Ratio)",
    classicalText: "Hatha Yoga Pradipika (2.7–10) & Gheranda Samhita (5.38–45)",
    method: "Classical alternate nostril breathing with internal breath retention (Antar Kumbhaka). Inhale left nostril (4s), retain breath with both nostrils closed (16s), exhale right nostril (8s). Inhale right (4s), retain (16s), exhale left (8s).",
    ratios: {
      beginner: "1 : 2 : 2 (4s Inhale, 8s Hold, 8s Exhale)",
      intermediate: "1 : 4 : 2 (4s Inhale, 16s Antar Kumbhaka, 8s Exhale)",
      advanced: "1 : 4 : 2 : 1 (4s Inhale, 16s Antar Kumbhaka, 8s Exhale, 4s Bahya Kumbhaka with Jalandhara & Mula Bandhas)"
    },
    roundsDuration: "5 – 10 rounds (5.0 minutes daily)",
    postureMudraEye: "Siddhasana or Padmasana. Right hand in Vishnu Mudra, Left hand in Chin Mudra. Eyes closed, awareness focused on Sushumna Nadi & Ajna Chakra.",
    timeFasting: "Dawn (Brahma Muhurta) & Sunset. Strictly on an empty stomach (minimum 4 hours post-meal).",
    physicalBenefits: "Maximizes arterial oxygen saturation, enhances Heart Rate Variability (HRV), purifies respiratory pathways, and optimizes cellular metabolism.",
    mentalBenefits: "Induces profound meditative quietude, clears subconscious impressions (*Samskaras*), and enhances deep cognitive intelligence.",
    ayurvedicBenefits: {
      vata: "Perfectly balances Vata (*Tridosha Samata*) as detailed in Gheranda Samhita 5.38.",
      pitta: "Purifies Sadhaka & Ranjaka Pitta.",
      kapha: "Clears Kledaka Kapha from subtle energy pathways.",
      agni: "Establishes Samagni (perfect balanced metabolic fire).",
      prana: "Directs Prana into central Sushumna Nadi."
    },
    chakraNadi: "Completely purifies all 72,000 Nadis (*Nadi Shuddhi*), unlocks Sushumna Nadi, and prepares for Kundalini awakening.",
    precautions: "Never force breath retention (Kumbhaka). If feeling dizzy or breathless, immediately drop retention and return to equal breathing. Contraindicated in unmanaged severe hypertension.",
    progression: "Stage 1: 4:8:8 ratio → Stage 2: Classical 4:16:8 ratio → Stage 3: 4:16:8:4 ratio with Jalandhara, Uddiyana, & Mula Bandhas (Maha Bandha)."
  },

  ujjayi: {
    title: "Ujjayi Pranayama (Ocean / Psychic Breath)",
    classicalText: "Hatha Yoga Pradipika (2.51–53) & Gheranda Samhita (5.69–72)",
    method: "Slightly contract the glottis in the throat. Inhale and exhale through the nose, creating a soft, soothing, continuous ocean-wave or soft whispering sound in the throat (*Ajapa Japa*).",
    ratios: {
      beginner: "1 : 0 : 1 (4s Inhale with throat sound, 4s Exhale with throat sound)",
      intermediate: "1 : 0 : 2 (5s Inhale, 10s Exhale)",
      advanced: "1 : 4 : 2 (5s Inhale, 20s Antar Kumbhaka with Jalandhara Bandha, 10s Exhale)"
    },
    roundsDuration: "6 – 12 rounds (1.5 – 3.0 minutes)",
    postureMudraEye: "Any comfortable meditative pose or during Asana practice. Chin Mudra or Khechari Mudra (tongue tip folded back against soft palate). Eyes closed, awareness at Vishuddhi (Throat) Chakra.",
    timeFasting: "Any time of day. Safe on light stomach or empty stomach.",
    physicalBenefits: "Lowers arterial blood pressure, regulates thyroid & parathyroid endocrine secretions, warms incoming air, and relieves bronchitis and asthma.",
    mentalBenefits: "Relieves insomnia, nervous tension, and mental anxiety. Highly effective before sleep to quiet racing thoughts.",
    ayurvedicBenefits: {
      vata: "Calms Udana Vayu (throat & speech energy) and Vyana Vayu.",
      pitta: "Cools internal heat when practiced without retention.",
      kapha: "Removes excess Kapha phlegm from throat and lungs (*Hatha Yoga Pradipika 2.53*).",
      agni: "Stabilizes Vishama Agni.",
      prana: "Harmonizes Prana Vayu at the throat center."
    },
    chakraNadi: "Activates Vishuddhi (Throat) Chakra & Bindu Visarga; balances Ida & Pingala Nadis.",
    precautions: "Do not over-constrict the throat causing harsh friction. Avoid strain if suffering from severe low blood pressure.",
    progression: "Stage 1: Equal 4:4 ocean breath → Stage 2: Extended 5:10 exhale → Stage 3: Khechari Mudra + Jalandhara Bandha internal retention."
  },

  bhramari: {
    title: "Bhramari (Humming Bee Breath)",
    classicalText: "Hatha Yoga Pradipika (2.68) & Gheranda Samhita (5.78–82)",
    method: "Inhale deeply through both nostrils. On exhalation, produce a smooth, continuous, low-pitched humming sound (*Mmmmm*) like a black bee. Apply Shanmukhi Mudra to close external senses.",
    ratios: {
      beginner: "1 : 0 : 2 (4s Inhale, 8s–10s Humming Exhale)",
      intermediate: "1 : 0 : 3 (5s Inhale, 15s Humming Exhale)",
      advanced: "1 : 2 : 3 (5s Inhale, 10s Antar Kumbhaka, 15s–20s Humming Exhale with Jalandhara Bandha)"
    },
    roundsDuration: "10 – 15 rounds (3.5 – 5.0 minutes)",
    postureMudraEye: "Padmasana or Sukhasana. Shanmukhi Mudra (thumbs close ears, index fingers on eyelids, middle fingers on nostril sides, ring & little fingers above & below lips). Eyes closed, internal vibration focus.",
    timeFasting: "Night before bedtime or Early Morning. Best on empty stomach.",
    physicalBenefits: "Increases Nitric Oxide (NO) production in nasal airways 15-fold, dilating blood vessels, reducing blood pressure, and boosting mucosal immunity.",
    mentalBenefits: "Provides immediate neural relaxation, alleviates anger, frustration, and insomnia, and induces deep Sattvic stillness.",
    ayurvedicBenefits: {
      vata: "Exceptionally pacifies Vata (Prana Vayu & Tarpaka Kapha) — premier anti-anxiety practice.",
      pitta: "Cools Sadhaka Pitta, reducing mental anger and heat.",
      kapha: "Soothes Kledaka Kapha.",
      agni: "Harmonizes Pranic Agni.",
      prana: "Directs Prana into the brain and cranial nerves."
    },
    chakraNadi: "Resonates Ajna (Third Eye) & Sahasrara (Crown) Chakras. Awakens internal subtle sound (*Nada Anusandhana*).",
    precautions: "Do not press hard on eyeballs in Shanmukhi Mudra. Contraindicated in severe active ear infections.",
    progression: "Stage 1: Simple humming exhale → Stage 2: Shanmukhi Mudra → Stage 3: Antar Kumbhaka + Nada Anusandhana meditation."
  },

  meditation: {
    title: "Dhyana Meditation (Silent Awareness)",
    classicalText: "Patanjali Yoga Sutras (3.2) & Shiva Samhita (5.160–185)",
    method: "Maintain absolute stillness of body, breath, and mind. Observe the natural, un-forced breath as a silent witness (*Sakshi Bhava*), allowing pure awareness to rest in non-dual consciousness.",
    ratios: {
      beginner: "Natural un-controlled breath flow (100% effortless awareness)",
      intermediate: "Natural breath observation with subtle So-Ham mantra resonance",
      advanced: "Nirguna Dhyana — pure objectless absorption (*Samadhi*)"
    },
    roundsDuration: "1 continuous session (9.0 – 15.0 minutes)",
    postureMudraEye: "Padmasana, Siddhasana, or Sukhasana with spine 100% erect. Dhyana Mudra (right palm resting over left palm in lap). Eyes softly closed, awareness at Ajna (Eyebrow Center) or Anahata (Heart Center).",
    timeFasting: "Dawn (Brahma Muhurta) / Night before sleep. Empty stomach preferred.",
    physicalBenefits: "Triggers maximum physiological recovery, normalizes cortisol & stress hormones, stabilizes EEG brainwave states (Alpha & Theta), and accelerates cellular repair.",
    mentalBenefits: "Dissolves mental duality, cultivates unwavering concentration (*Ekagrata*), inner serenity, and unconditioned bliss (*Ananda*).",
    ayurvedicBenefits: {
      vata: "Rebuilds Ojas (vital essence), Tejas (radiance), & Prana.",
      pitta: "Pacifies Sadhaka Pitta.",
      kapha: "Harmonizes Tarpaka Kapha.",
      agni: "Achieves Samagni (perfect metabolic equilibrium).",
      prana: "Merges Prana into Sushumna Nadi."
    },
    chakraNadi: "Harmonizes all 7 Chakras; merges Prana into Sushumna Nadi leading toward Samadhi.",
    precautions: "Avoid slouching the spine or falling into dull sleep (*Laya*). Maintain an alert yet completely relaxed witness attitude.",
    progression: "Stage 1: Breath awareness (Anapanasati) → Stage 2: Mantra Japa → Stage 3: Pure Nirguna Meditation (Silent Witness)."
  }
};

/* ── Diet & Hydration Plan Completion Locking System ────────── */
function isDietPlanUnlocked() {
  const done = todayDone(), goal = todayGoal();
  const isGoalComplete = done >= goal && goal > 0;
  const isPranaFinished = !!(data.pranaFinishedToday || pranaState.completedToday);
  const isPranaClosed = !!data.pranaClosedToday;

  if (isGoalComplete && isPranaFinished) return true;
  if (isPranaClosed) return true;

  return false;
}

function updateDietPlanButtonLockUI() {
  const card = document.getElementById("card-view-diet-plan");
  const infoHeader = document.getElementById("diet-card-info-header");
  const pbarWrap = document.getElementById("diet-card-pbar-wrap");
  const waterBtnRow = document.getElementById("diet-card-water-btn-row");
  const waterBtn = document.getElementById("btn-quick-log-water");
  const btn = document.getElementById("btn-view-diet-plan");
  const unlocked = isDietPlanUnlocked();

  if (card) card.style.display = "block";

  if (unlocked) {
    // Goal Complete -> Show full Ayurvedic Diet & Hydration window card with title, progress bar, & View Plan button!
    if (infoHeader) infoHeader.style.display = "flex";
    if (pbarWrap) pbarWrap.style.display = "block";
    if (waterBtnRow) {
      waterBtnRow.style.display = "flex";
      waterBtnRow.style.justify = "flex-end";
      waterBtnRow.style.width = "auto";
    }
    if (waterBtn) {
      waterBtn.style.width = "auto";
      waterBtn.style.padding = "6px 12px";
      waterBtn.style.fontSize = "11px";
    }
    if (card) {
      card.style.background = "linear-gradient(135deg,rgba(245,158,11,0.15),rgba(56,189,248,0.12))";
      card.style.border = "1.2px solid var(--bdr)";
      card.style.padding = "10px 12px";
      card.style.cursor = "pointer";
    }
    if (btn) {
      btn.textContent = "View Plan";
      btn.style.background = "rgba(16, 185, 129, 0.18)";
      btn.style.borderColor = "#10B981";
      btn.style.color = "#34D399";
      btn.style.cursor = "pointer";
    }
  } else {
    // Before Goal Complete -> HIDE diet details, title, subtitle, progress bar, & View Plan button! ONLY show +1 Drink Water button!
    if (infoHeader) infoHeader.style.display = "none";
    if (pbarWrap) pbarWrap.style.display = "none";
    if (waterBtnRow) {
      waterBtnRow.style.display = "flex";
      waterBtnRow.style.justify = "center";
      waterBtnRow.style.width = "100%";
    }
    if (waterBtn) {
      waterBtn.style.width = "100%";
      waterBtn.style.justifyContent = "center";
      waterBtn.style.padding = "10px 16px";
      waterBtn.style.fontSize = "13px";
    }
    if (card) {
      card.style.background = "transparent";
      card.style.border = "none";
      card.style.padding = "0px";
      card.style.cursor = "default";
    }
  }
}

function handleDietPlanClick(e) {
  if (e) e.stopPropagation();

  if (!isDietPlanUnlocked()) {
    vib(30);
    const lang = cfg.pranaLang || "en";
    const msg = lang === "hi"
      ? "🔒 आज का आयुर्वेदिक आहार और जल योजना सूर्य नमस्कार लक्ष्य और प्राणायाम पूरा करने (या बंद करने पर) अनलॉक होगी!"
      : lang === "mr"
      ? "🔒 आजची आयुर्वेदिक आहार आणि पाणी योजना सूर्य नमस्कार ध्येय आणि प्राणायाम पूर्ण झाल्यावर (किंवा बंद केल्यावर) अनलॉक होईल!"
      : "🔒 Today's Ayurvedic Diet & Hydration Plan unlocks after completing today's Surya Namaskara target & Pranayama routine (or closing Pranayama)!";
    alert(msg);
    return;
  }

  showDietModal();
}
window.handleDietPlanClick = handleDietPlanClick;
window.isDietPlanUnlocked = isDietPlanUnlocked;

let _pranaPausedForGuide = false;

function pausePranaForGuideSpeech() {
  if (pranaState.active && !pranaState.paused) {
    _pranaPausedForGuide = true;
    clearPranaTimers();
    const badgeEl = document.getElementById("prana-live-badge");
    if (badgeEl) badgeEl.innerHTML = "📖 Guide Speaking — Round Paused";
  }
}

function resumePranaFromGuideSpeech() {
  if (_pranaPausedForGuide) {
    _pranaPausedForGuide = false;
    if (pranaState.active && !pranaState.paused) {
      startPranaStep();
      startPranaClocks();
    }
  }
}

let _guideSpeechActive = false;

function updatePranaGuideLockButton(isLocked) {
  const btn = document.getElementById("btn-prana-guide");
  const lockIcon = document.getElementById("prana-guide-lock-icon");
  if (btn) {
    btn.disabled = isLocked;
    btn.style.opacity = isLocked ? "0.5" : "1";
    btn.style.cursor = isLocked ? "not-allowed" : "pointer";
  }
  if (lockIcon) {
    lockIcon.textContent = isLocked ? "🔒" : "🔓";
  }
}

function handlePranaGuideClick() {
  const btn = document.getElementById("btn-prana-guide");
  if (btn && btn.disabled) {
    vib(30);
    const lang = cfg.pranaLang || "en";
    const msg = lang === "hi"
      ? "🔒 सक्रिय राउंड गिनती के दौरान शास्त्रीय गाइड लॉक है। विराम लें या गाइड देखने के लिए राउंड पूरा होने की प्रतीक्षा करें!"
      : lang === "mr"
      ? "🔒 ॲक्टिव्ह फेरी मोजणीदरम्यान क्लासिकल मार्गदर्शक लॉक आहे. विराम घ्या किंवा मार्गदर्शक पाहण्यासाठी फेरी पूर्ण होण्याची वाट पाहा!"
      : "🔒 Classical Guide is locked during active round counting. Pause or wait for the round to complete to view!";
    alert(msg);
    return;
  }
  showPranaGuideModal();
}

function speakClassicalGuideText(data) {
  if (voiceMuted || !window.speechSynthesis) return;
  const lang = cfg.pranaLang || "en";

  try {
    try { window.speechSynthesis.cancel(); } catch(e){}

    const targetData = data || (CLASSICAL_YOGA_AYURVEDA_STANDARDS[PRANAYAMA_BASE[pranaState.phaseIdx]?.id] || CLASSICAL_YOGA_AYURVEDA_STANDARDS.dirgha);

    const fullText = `${targetData.title}. Classical Text References: ${targetData.classicalText}. 1. Step-by-Step Practice Method: ${targetData.method}. 2. Inhale, Hold, Exhale Ratios: Beginner: ${targetData.ratios.beginner}. Intermediate: ${targetData.ratios.intermediate}. Advanced: ${targetData.ratios.advanced}. 3. Recommended Duration: ${targetData.roundsDuration}. 4. Body Posture and Mudra: ${targetData.postureMudraEye}. 5. Best Time and Empty Stomach: ${targetData.timeFasting}. 6. Physical Health Benefits: ${targetData.physicalBenefits}. 7. Mental and Emotional Benefits: ${targetData.mentalBenefits}. 8. Ayurvedic Benefits: Vata: ${targetData.ayurvedicBenefits.vata}. Pitta: ${targetData.ayurvedicBenefits.pitta}. Kapha: ${targetData.ayurvedicBenefits.kapha}. Agni: ${targetData.ayurvedicBenefits.agni}. Prana: ${targetData.ayurvedicBenefits.prana}. 9. Chakra and Nadi Effects: ${targetData.chakraNadi}. 10. Precautions and Contraindications: ${targetData.precautions}. 11. Progression Guidelines: ${targetData.progression}.`;

    const u = new SpeechSynthesisUtterance(fullText);
    const vList = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];

    u.rate = 1.0;

    if (lang === "hi") {
      u.lang = "hi-IN";
      const hv = vList.find(v => v.lang === "hi-IN" && v.localService) ||
                 vList.find(v => v.lang === "hi-IN") ||
                 vList.find(v => v.lang.startsWith("hi")) || null;
      if (hv) u.voice = hv;
    } else if (lang === "mr") {
      u.lang = "hi-IN";
      const hv = vList.find(v => v.lang === "hi-IN") || null;
      if (hv) u.voice = hv;
    } else {
      u.lang = "en-IN";
      const ev = vList.find(v => v.lang === "en-IN") || vList.find(v => v.lang.startsWith("en")) || null;
      if (ev) u.voice = ev;
    }

    u.onstart = () => {
      _guideSpeechActive = true;
      updateGuideVoiceBtnUI(true);
      pausePranaForGuideSpeech();
    };
    u.onend = () => {
      _guideSpeechActive = false;
      updateGuideVoiceBtnUI(false);
      resumePranaFromGuideSpeech();
    };
    u.onerror = () => {
      _guideSpeechActive = false;
      updateGuideVoiceBtnUI(false);
      resumePranaFromGuideSpeech();
    };

    window.speechSynthesis.speak(u);
  } catch (e) {
    console.warn("Guide speech error:", e);
  }
}

function toggleGuideVoice() {
  if (_guideSpeechActive) {
    stopClassicalGuideSpeech();
  } else {
    const targetId = PRANAYAMA_BASE[pranaState.phaseIdx] ? PRANAYAMA_BASE[pranaState.phaseIdx].id : "dirgha";
    const data = CLASSICAL_YOGA_AYURVEDA_STANDARDS[targetId] || CLASSICAL_YOGA_AYURVEDA_STANDARDS.dirgha;
    speakClassicalGuideText(data);
  }
}

function stopClassicalGuideSpeech() {
  _guideSpeechActive = false;
  if (window.speechSynthesis) {
    try { window.speechSynthesis.cancel(); } catch (e) {}
  }
  updateGuideVoiceBtnUI(false);
  resumePranaFromGuideSpeech();
}

function updateGuideVoiceBtnUI(isPlaying) {
  const btn = document.getElementById("guide-voice-btn");
  if (btn) {
    btn.innerHTML = isPlaying ? "⏹ Stop Voice" : "🔊 Listen Voice";
    btn.style.background = isPlaying ? "rgba(255,59,48,0.25)" : "var(--acc-dim)";
    btn.style.borderColor = isPlaying ? "var(--danger)" : "var(--acc)";
    btn.style.color = isPlaying ? "var(--danger)" : "var(--acc-lt)";
  }
}

function switchGuideTab(targetId) {
  stopClassicalGuideSpeech();
  showPranaGuideModal(targetId);
}

function showPranaGuideModal(phaseId) {
  const targetId = phaseId || (PRANAYAMA_BASE[pranaState.phaseIdx] ? PRANAYAMA_BASE[pranaState.phaseIdx].id : "dirgha");
  const data = CLASSICAL_YOGA_AYURVEDA_STANDARDS[targetId] || CLASSICAL_YOGA_AYURVEDA_STANDARDS.dirgha;

  const titleEl = document.getElementById("guide-modal-title");
  const contentEl = document.getElementById("guide-modal-content");

  const tabs = [
    { id: "dirgha", label: "1. Dirgha" },
    { id: "kapalabhati", label: "2. Kapalabhati" },
    { id: "bhastrika", label: "3. Bhastrika" },
    { id: "anulom", label: "4. Anulom Vilom" },
    { id: "nadi", label: "5. Nadi Shodhana" },
    { id: "ujjayi", label: "6. Ujjayi" },
    { id: "bhramari", label: "7. Bhramari" },
    { id: "meditation", label: "8. Dhyana" }
  ];

  const tabHtml = `
    <div style="display:flex;gap:6px;overflow-x:auto;padding-bottom:8px;margin-bottom:10px;border-bottom:1px solid var(--bdr);scrollbar-width:none;-webkit-overflow-scrolling:touch;">
      ${tabs.map(t => `
        <button onclick="switchGuideTab('${t.id}')" style="background:${t.id === targetId ? 'var(--acc-dim)' : 'var(--surf2)'};border:1px solid ${t.id === targetId ? 'var(--acc)' : 'var(--bdr)'};color:${t.id === targetId ? 'var(--acc-lt)' : 'var(--txt2)'};font-size:10px;font-weight:800;padding:5px 10px;border-radius:10px;cursor:pointer;white-space:nowrap;transition:all .2s ease">
          ${t.label}
        </button>
      `).join('')}
    </div>
  `;

  if (titleEl) titleEl.textContent = "📜 " + data.title;
  if (contentEl) {
    contentEl.innerHTML = tabHtml + `
      <div style="background:var(--surf2);border:1px solid var(--acc-dim);border-radius:12px;padding:10px 12px;">
        <div style="font-size:10px;font-weight:800;color:var(--acc-lt);text-transform:uppercase;">Classical Text References</div>
        <div style="font-size:12px;font-weight:700;color:var(--txt);margin-top:2px;">${data.classicalText}</div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">1. 🧘 Step-by-Step Practice Method</div>
        <div style="color:var(--txt2);">${data.method}</div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">2. ⏱ Inhale : Hold : Exhale Ratios</div>
        <div style="display:grid;gap:4px;color:var(--txt2);">
          <div>🟢 <strong>Beginner:</strong> ${data.ratios.beginner}</div>
          <div>🟡 <strong>Intermediate:</strong> ${data.ratios.intermediate}</div>
          <div>🔴 <strong>Advanced:</strong> ${data.ratios.advanced}</div>
        </div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">3. 🎯 Rounds &amp; Recommended Duration</div>
        <div style="color:var(--txt2);">${data.roundsDuration}</div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">4. 🪑 Posture, Hand Mudra &amp; Eye Position</div>
        <div style="color:var(--txt2);">${data.postureMudraEye}</div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">5. 🌅 Best Time &amp; Empty Stomach Requirements</div>
        <div style="color:var(--txt2);">${data.timeFasting}</div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">6. 💪 Physical Health Benefits</div>
        <div style="color:var(--txt2);">${data.physicalBenefits}</div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">7. 🧠 Mental &amp; Emotional Benefits</div>
        <div style="color:var(--txt2);">${data.mentalBenefits}</div>
      </div>

      <div style="background:linear-gradient(135deg,rgba(29,184,127,0.1),rgba(15,80,55,0.2));border:1px solid var(--acc-dim);border-radius:12px;padding:10px 12px;">
        <div style="font-size:11px;font-weight:800;color:var(--acc-lt);margin-bottom:6px;">8. 🌿 Ayurvedic Benefits (Vata, Pitta, Kapha, Agni, Prana)</div>
        <div style="display:grid;gap:4px;color:var(--txt2);">
          <div>💨 <strong>Vata:</strong> ${data.ayurvedicBenefits.vata}</div>
          <div>🔥 <strong>Pitta:</strong> ${data.ayurvedicBenefits.pitta}</div>
          <div>🌊 <strong>Kapha:</strong> ${data.ayurvedicBenefits.kapha}</div>
          <div>⚡ <strong>Agni:</strong> ${data.ayurvedicBenefits.agni}</div>
          <div>🫁 <strong>Prana:</strong> ${data.ayurvedicBenefits.prana}</div>
        </div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">9. 🧘‍♂️ Chakra &amp; Nadi Effects</div>
        <div style="color:var(--txt2);">${data.chakraNadi}</div>
      </div>

      <div style="background:rgba(255,59,48,0.1);border:1px solid rgba(255,59,48,0.3);border-radius:12px;padding:10px 12px;">
        <div style="font-size:11px;font-weight:800;color:var(--danger);margin-bottom:2px;">10. ⚠️ Precautions, Contraindications &amp; Mistakes</div>
        <div style="color:var(--txt2);">${data.precautions}</div>
      </div>

      <div>
        <div style="font-size:11px;font-weight:800;color:var(--acc);margin-bottom:2px;">11. 📈 Progression Guidelines (Beginner → Advanced)</div>
        <div style="color:var(--txt2);">${data.progression}</div>
      </div>
    `;
  }

  const modal = document.getElementById("prana-guide-modal");
  if (modal) modal.classList.add("show");

  // Automatically start reading guide text out loud for selected practice
  speakClassicalGuideText(data);
}

function closePranaGuideModal() {
  stopClassicalGuideSpeech();
  const modal = document.getElementById("prana-guide-modal");
  if (modal) modal.classList.remove("show");
  resumePranaFromGuideSpeech();
}

/* ── Init ────────────────────────────────────────────────────── */
loadAll();
checkMidnightRollover(); // Rollover immediately if launched on a new day
saveAll();
render();
updateWaterTrackerUI();
updateDietPlanButtonLockUI();
updateClockDisplay();
scheduleMidnightRollover(); // schedule goal unlock at 12:00 AM Midnight
scheduleAlarm();            // schedule 5 AM alarm
checkMorningGreeting();     // greet if user opens app near alarm time
scheduleDaytimeNotifications(); // schedule best-friend daytime check-in notifications
scheduleAyurvedicDietNotifications(); // schedule Ayurvedic diet notifications
scheduleWaterIntakeReminders(); // schedule 2-hourly water hydration reminders
checkSubscriptionReminder();
checkAppLockState();

/* ── SW Lockscreen Notification Click Handler ────────────────── */
if (typeof navigator !== "undefined" && navigator.serviceWorker) {
  navigator.serviceWorker.addEventListener("message", e => {
    if (e.data && e.data.type === "NOTIFICATION_CLICK") {
      if (e.data.action === "log_water") {
        quickLogWaterAndSpeak();
      } else {
        showDietModal("water", "water");
      }
    }
  });
}

try {
  const urlParams = new URLSearchParams(window.location.search);
  const actionParam = urlParams.get("notif_action");
  if (actionParam === "log_water") {
    setTimeout(() => quickLogWaterAndSpeak(), 800);
  } else if (actionParam === "water" || actionParam === "view_diet") {
    setTimeout(() => showDietModal("water", "water"), 800);
  }
} catch (e) {}
