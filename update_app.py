import re

with open('app.js', 'r', encoding='utf-8', errors='replace') as f:
    code = f.read()

prana_block = """const PRANAYAMA_BASE = [
  {
    id: "dirgha",
    name: "Dirgha Pranayama", nameHi: "दीर्घ प्राणायाम", nameMr: "दीर्घ प्राणायाम",
    totalRounds: 5, secPerRound: 20,
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
      { en: "Hold gently for 2 counts.",
        hi: "2 गिनती तक आराम से रोकें।",
        mr: "2 मोजेपर्यंत हळूच थांबा.", dur: 2, action: "hold", count: 2, label: "⏸ Hold" },
      { en: "Exhale slowly for 6 counts. Chest, ribs, then belly falls.",
        hi: "6 गिनती तक धीरे श्वास छोड़ें।",
        mr: "6 मोजेपर्यंत हळू श्वास सोडा.", dur: 6, action: "exhale", count: 6, label: "🌬 Exhale" }
    ]
  },
  {
    id: "kapalabhati",
    name: "Kapalabhati", nameHi: "कपालभाती", nameMr: "कपालभाती",
    totalRounds: 3, secPerRound: 46,
    desc: "Skull-shining breath — 30 forceful exhales per round",
    descHi: "कपालभाती — प्रति राउंड 30 तेज़ श्वास छोड़ना",
    descMr: "कपालभाती — प्रति फेरी 30 जोरदार श्वास सोडणे",
    steps: [
      { en: "Sit tall. Take one deep breath to prepare.",
        hi: "सीधे बैठें। एक गहरी साँस लें।",
        mr: "सरळ बसा. एक खोल श्वास घ्या.", dur: 6, action: "setup" },
      { en: "Begin 30 sharp forceful exhales through nose at 1 stroke per second. Pull navel in.",
        hi: "शुरू करें 30 तेज़ श्वास छोड़ना। नाभि अंदर खींचें।",
        mr: "३० जोरात श्वास सोडणे सुरू करा.", dur: 30, action: "stroke", count: 30, label: "💥 Stroke" },
      { en: "Deep inhale, hold briefly, then exhale completely. Rest and breathe normally.",
        hi: "गहरी साँस लें, रोकें, फिर छोड़ें। सामान्य साँस लें।",
        mr: "खोल श्वास घ्या, थांबा, मग सोडा. सामान्य श्वास घ्या.", dur: 10, action: "rest" }
    ]
  },
  {
    id: "bhastrika",
    name: "Bhastrika", nameHi: "भस्त्रिका", nameMr: "भस्त्रिका",
    totalRounds: 3, secPerRound: 40,
    desc: "Bellows breath — 20 equal forceful inhales & exhales",
    descHi: "भस्त्रिका — 20 समान बलपूर्वक श्वास लेना और छोड़ना",
    descMr: "भस्त्रिका — २० समान जोराने श्वास घेणे आणि सोडणे",
    steps: [
      { en: "Take a normal breath. Forceful inhale AND forceful exhale equally through nose.",
        hi: "सामान्य साँस लें। नाक से जोरदार श्वास लें और छोड़ें।",
        mr: "सामान्य श्वास घ्या. नाकातून जोरात श्वास घ्या आणि सोडा.", dur: 6, action: "setup" },
      { en: "Pump vigorously at 1 breath per second. 20 breaths total.",
        hi: "जोरदार श्वास लें और छोड़ें। 20 बार।",
        mr: "जोराने श्वास घ्या आणि सोडा. २० वेळा.", dur: 20, action: "stroke", count: 20, label: "💥 Bhastrika" },
      { en: "Deep inhale, hold for 5 counts, then exhale fully. Rest.",
        hi: "गहरी साँस लें, 5 गिनती रोकें, फिर छोड़ें। आराम।",
        mr: "खोल श्वास घ्या, 5 मोजे थांबा, मग सोडा. आराम.", dur: 14, action: "hold_rest", count: 5, label: "⏸ Hold & Rest" }
    ]
  },
  {
    id: "anulom",
    name: "Anulom Vilom", nameHi: "अनुलोम विलोम", nameMr: "अनुलोम विलोम",
    totalRounds: 10, secPerRound: 22,
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
      { en: "Close both nostrils. Hold for 2 counts.",
        hi: "दोनों बंद। 2 गिनती रोकें।",
        mr: "दोन्ही बंद. 2 मोजे थांबा.", dur: 2, action: "hold", count: 2, label: "⏸ Hold" },
      { en: "Exhale through RIGHT nostril for 4 counts.",
        hi: "दाहिनी से 4 गिनती में छोड़ें।",
        mr: "उजवीकडून 4 मोजेपर्यंत सोडा.", dur: 4, action: "exhale", count: 4, label: "👉 Exhale Right" },
      { en: "Inhale through RIGHT nostril for 4 counts.",
        hi: "दाहिनी से 4 गिनती में लें।",
        mr: "उजवीकडून 4 मोजेपर्यंत घ्या.", dur: 4, action: "inhale", count: 4, label: "👉 Inhale Right" },
      { en: "Close both nostrils. Hold for 2 counts.",
        hi: "दोनों बंद। 2 गिनती रोकें।",
        mr: "दोन्ही बंद. 2 मोजे थांबा.", dur: 2, action: "hold", count: 2, label: "⏸ Hold" },
      { en: "Exhale through LEFT nostril for 4 counts.",
        hi: "बाईं से 4 गिनती में छोड़ें।",
        mr: "डाव्याकडून 4 मोजेपर्यंत सोडा.", dur: 4, action: "exhale", count: 4, label: "👈 Exhale Left" }
    ]
  },
  {
    id: "nadi",
    name: "Nadi Shodhana", nameHi: "नाडी शोधन", nameMr: "नाडी शोधन",
    totalRounds: 4, secPerRound: 56,
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
        mr: "डाव्याकडून 8 मोजेपर्यंत सोडा.", dur: 8, action: "exhale", count: 8, label: "👈 Exhale Left" }
    ]
  },
  {
    id: "ujjayi",
    name: "Ujjayi Pranayama", nameHi: "उज्जायी प्राणायाम", nameMr: "उज्जायी प्राणायाम",
    totalRounds: 4, secPerRound: 12,
    desc: "Ocean breath — throat constriction with audible whisper",
    descHi: "उज्जायी — गले से समुद्र की ध्वनि",
    descMr: "उज्जायी — घशातून समुद्राचा आवाज",
    steps: [
      { en: "Inhale through nose for 4 counts with ocean throat sound.",
        hi: "4 गिनती तक नाक से श्वास लें — समुद्र ध्वनि।",
        mr: "4 मोजेपर्यंत नाकाने श्वास घ्या — समुद्राचा आवाज.", dur: 4, action: "inhale", count: 4, label: "🌊 Ujjayi Inhale" },
      { en: "Hold gently for 2 counts.",
        hi: "2 गिनती रोकें।",
        mr: "2 मोजे थांबा.", dur: 2, action: "hold", count: 2, label: "⏸ Hold" },
      { en: "Exhale slowly through nose for 6 counts with throat sound.",
        hi: "6 गिनती तक धीरे छोड़ें।",
        mr: "6 मोजेपर्यंत हळू सोडा.", dur: 6, action: "exhale", count: 6, label: "🌊 Ujjayi Exhale" }
    ]
  },
  {
    id: "bhramari",
    name: "Bhramari", nameHi: "भ्रामरी", nameMr: "भ्रामरी",
    totalRounds: 7, secPerRound: 18,
    desc: "Humming bee breath — calms brain & nervous system",
    descHi: "भ्रामरी — मधुमक्खी की गुनगुनाहट (7 राउंड)",
    descMr: "भ्रामरी — मधमाशीचा गुणगुणाट (7 फेऱ्या)",
    steps: [
      { en: "Close ears with thumbs, fingers on closed eyes (Shanmukhi mudra).",
        hi: "अंगूठों से कान बंद करें। षण्मुखी मुद्रा।",
        mr: "अंगठ्यांनी कान बंद करा. षण्मुखी मुद्रा.", dur: 4, action: "setup", round1Only: true },
      { en: "Deep inhale through nose for 4 counts.",
        hi: "4 गिनती तक गहरी साँस लें।",
        mr: "4 मोजेपर्यंत खोल श्वास घ्या.", dur: 4, action: "inhale", count: 4, label: "🫁 Deep Inhale" },
      { en: "Exhale with continuous humming sound. Mmmmm. Feel skull vibrations.",
        hi: "छोड़ते हुए लगातार गुनगुनाएं। म्म्म्म।",
        mr: "सोडताना सतत गुणगुणाट करा. म्म्म्म.", dur: 10, action: "humming", count: 10, label: "🐝 Humming Exhale" }
    ]
  },
  {
    id: "meditation",
    name: "Meditation", nameHi: "ध्यान", nameMr: "ध्यान",
    totalRounds: 1, secPerRound: 600,
    desc: "Silent awareness — 10 minutes peaceful meditation",
    descHi: "मौन ध्यान — 10 मिनट शांति",
    descMr: "शांत ध्यान — १० मिनिटे शांतता",
    steps: [
      { en: "Release all techniques. Hands on knees, palms facing up. Gently close your eyes.",
        hi: "सभी तकनीकें छोड़ दें। हाथ घुटनों पर। आँखें बंद करें।",
        mr: "सर्व तंत्रे सोडा. हात गुडघ्यांवर. डोळे बंद करा.", dur: 10, action: "setup" },
      { en: "Observe your natural breath flow. Rest in pure awareness.",
        hi: "प्राकृतिक श्वास को देखें। शांत रहें।",
        mr: "नैसर्गिक श्वास पाहा. शांत राहा.", dur: 590, action: "meditate", label: "🧘 Silent Awareness" }
    ]
  }
];"""

pattern = r'const PRANAYAMA_BASE = \[[\s\S]*?\];\s*\/\/\s*Runtime state'
replacement = prana_block + '\n\n// Runtime state'
code = re.sub(pattern, replacement, code)

# Clean speakPranaInstruction
inst_pattern = r'function speakPranaInstruction\(textOrObj, onDoneCallback\) \{[\s\S]*?function speakPranaCount'
inst_replacement = """function speakPranaInstruction(textOrObj, onDoneCallback) {
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

  let called = false;
  const finish = () => {
    if(!called) {
      called = true;
      if(onDoneCallback) setTimeout(onDoneCallback, 300);
    }
  };

  u.onend = finish;
  u.onerror = finish;

  const durationMs = Math.max(2200, text.length * 85);
  setTimeout(finish, durationMs);

  qSpeak(u);
}

function speakPranaCount"""

code = re.sub(inst_pattern, inst_replacement, code)

# Clean speakPranaCount
count_pattern = r'function speakPranaCount\(text\) \{[\s\S]*?function startPranaPhase'
count_replacement = """function speakPranaCount(text) {
  if(voiceMuted || !window.speechSynthesis) return;
  const lang = cfg.pranaLang || "en";

  // Stop previous count ONLY if browser speech synthesis is still actively speaking
  if(window.speechSynthesis.speaking) {
    qClear();
  }

  if(window.speechSynthesis.paused) {
    try{ window.speechSynthesis.resume(); }catch(e){}
  }

  const u = new SpeechSynthesisUtterance(text);
  const vList = speechSynthesis.getVoices();

  // Optimal rate 1.30x ensures count words finish in ~300ms matching 1-second timer speed
  if(lang === "hi") {
    u.lang = "hi-IN"; u.rate = 1.30; u.pitch = 1.0;
    const hv = vList.find(v=>v.lang==="hi-IN"&&v.localService) ||
               vList.find(v=>v.lang==="hi-IN") ||
               vList.find(v=>v.lang.startsWith("hi")) || null;
    if(hv) u.voice = hv;
  } else if(lang === "mr") {
    u.lang = "hi-IN"; u.rate = 1.30; u.pitch = 1.0;
    const hv = vList.find(v=>v.lang==="hi-IN") || null;
    if(hv) u.voice = hv;
  } else {
    u.lang = "en-IN"; u.rate = 1.30; u.pitch = 1.05;
    const ev = vList.find(v=>v.lang==="en-IN") || vList.find(v=>v.lang.startsWith("en")) || null;
    if(ev) u.voice = ev;
  }

  qSpeak(u);
}

function startPranaPhase"""

code = re.sub(count_pattern, count_replacement, code)

# Clean startPranaPhase
phase_pattern = r'function startPranaPhase\(\) \{[\s\S]*?function startPranaStep'
phase_replacement = """function startPranaPhase() {
  const phase = PRANAYAMA_BASE[pranaState.phaseIdx];
  pranaState.phaseStart = Date.now();
  pranaState.stepIdx    = 0;
  pranaState.roundNum   = 1;

  document.getElementById("prana-title").textContent  = phase.name;
  document.getElementById("prana-title-hi").textContent = phase.nameHi;
  document.getElementById("prana-desc").textContent   =
    phase.desc + " (" + phase.totalRounds + (phase.totalRounds === 1 ? " session" : " rounds") + ")";
  document.getElementById("prana-phase-num").textContent =
    "Practice " + (pranaState.phaseIdx+1) + " of " + PRANAYAMA_BASE.length;
  document.getElementById("prana-phase-bar").style.width = "0%";

  const lang = cfg.pranaLang || "en";
  const nameStr = (lang==="hi" ? phase.nameHi : lang==="mr" ? (phase.nameMr||phase.nameHi) : phase.name) || phase.name;
  const descStr = (lang==="hi" ? phase.descHi : lang==="mr" ? (phase.descMr||phase.descHi) : phase.desc) || phase.desc;
  const introMsg = lang === "hi" ? ("अब शुरू करते हैं " + nameStr + "। " + descStr) :
                   lang === "mr" ? ("आता सुरू करत आहोत " + nameStr + "। " + descStr) :
                   ("Now beginning " + nameStr + ". " + descStr);

  speakPranaInstruction(introMsg, () => {
    if(!pranaState.active || pranaState.paused) return;
    startPranaStep();
  });
  startPranaClocks();
}

function startPranaStep"""

code = re.sub(phase_pattern, phase_replacement, code)

# Clean nextPranaPhase
next_pattern = r'function nextPranaPhase\(\) \{[\s\S]*?function endPranayama'
next_replacement = """function nextPranaPhase() {
  clearPranaTimers();
  qClear();
  pranaState.phaseIdx++;
  if(pranaState.phaseIdx >= PRANAYAMA_BASE.length) {
    endPranayama(); return;
  }
  startPranaPhase();
}

function endPranayama"""

code = re.sub(next_pattern, next_replacement, code)

with open('app.js', 'w', encoding='utf-8') as f:
    f.write(code)

print('Cleaned update_app.py finished')
