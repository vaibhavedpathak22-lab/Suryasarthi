/* ═══════════════════════════════════════════════════════════════
   AUTOMATIC 20-SECOND WORKOUT REEL & MARKETING VIDEO GENERATOR
   Creates a 20-second 9:16 Vertical Video for WhatsApp Status & Social Reels.
   Directly saves .mp4 file to device Downloads folder without preview modal popups!
   ═══════════════════════════════════════════════════════════════ */
let generatedReelBlob = null;
let isGeneratingReel = false;

const REEL_STEPS = [
  { pose: "Pranamasana", sub: "Prayer pose", breath: "Exhale", mantraD: "ॐ मित्राय नमः" },
  { pose: "Hasta Uttanasana", sub: "Raised arms pose", breath: "Inhale", mantraD: "ॐ रवये नमः" },
  { pose: "Hasta Padasana", sub: "Hand to foot pose", breath: "Exhale", mantraD: "ॐ सूर्याय नमः" },
  { pose: "Ashwa Sanchalanasana", sub: "Equestrian — right leg back", breath: "Inhale", mantraD: "ॐ भानवे नमः" },
  { pose: "Dandasana", sub: "Stick pose / plank", breath: "Hold", mantraD: "ॐ खगाय नमः" },
  { pose: "Ashtanga Namaskara", sub: "Salute with eight limbs", breath: "Exhale", mantraD: "ॐ पूष्णे नमः" },
  { pose: "Bhujangasana", sub: "Cobra pose", breath: "Inhale", mantraD: "ॐ हिरण्यगर्भाय नमः" },
  { pose: "Adho Mukha Svanasana", sub: "Downward facing dog", breath: "Exhale", mantraD: "ॐ मरीचये नमः" },
  { pose: "Ashwa Sanchalanasana", sub: "Equestrian — left leg back", breath: "Inhale", mantraD: "ॐ आदित्याय नमः" },
  { pose: "Hasta Padasana", sub: "Hand to foot pose", breath: "Exhale", mantraD: "ॐ सवित्रे नमः" },
  { pose: "Hasta Uttanasana", sub: "Raised arms pose", breath: "Inhale", mantraD: "ॐ अर्काय नमः" },
  { pose: "Pranamasana", sub: "Prayer pose", breath: "Exhale", mantraD: "ॐ भास्कराय नमः" }
];

function drawPoseSilhouette(ctx, cx, cy, stepIndex, scale = 1.0) {
  ctx.save();
  ctx.translate(cx, cy);
  ctx.scale(scale, scale);
  ctx.strokeStyle = "#FFD700";
  ctx.fillStyle = "#FFD700";
  ctx.lineWidth = 5;
  ctx.lineCap = "round";
  ctx.lineJoin = "round";

  const idx = stepIndex % 12;

  if (idx === 0 || idx === 11) {
    ctx.beginPath(); ctx.arc(0, -90, 16, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(0, -74); ctx.lineTo(0, 10); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, 10); ctx.lineTo(-15, 90); ctx.moveTo(0, 10); ctx.lineTo(15, 90); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-18, -40); ctx.lineTo(0, -55); ctx.lineTo(18, -40); ctx.stroke();
  } else if (idx === 1 || idx === 10) {
    ctx.beginPath(); ctx.arc(15, -95, 16, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(0, -74); ctx.quadraticCurveTo(10, -30, 0, 10); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, 10); ctx.lineTo(-15, 90); ctx.moveTo(0, 10); ctx.lineTo(15, 90); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, -60); ctx.lineTo(-30, -115); ctx.moveTo(0, -60); ctx.lineTo(-15, -115); ctx.stroke();
  } else if (idx === 2 || idx === 9) {
    ctx.beginPath(); ctx.arc(35, 30, 16, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(0, 10); ctx.lineTo(25, -20); ctx.lineTo(35, 15); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(0, 10); ctx.lineTo(-5, 90); ctx.moveTo(0, 10); ctx.lineTo(5, 90); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(25, -20); ctx.lineTo(35, 75); ctx.stroke();
  } else if (idx === 3 || idx === 8) {
    ctx.beginPath(); ctx.arc(-20, -40, 16, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(-20, -24); ctx.lineTo(-40, 20); ctx.lineTo(-110, 60); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-40, 20); ctx.lineTo(20, 20); ctx.lineTo(20, 60); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-30, -10); ctx.lineTo(-10, 60); ctx.stroke();
  } else if (idx === 4) {
    ctx.beginPath(); ctx.arc(-90, 0, 16, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(-74, 0); ctx.lineTo(80, 25); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-60, 5); ctx.lineTo(-60, 50); ctx.stroke();
  } else if (idx === 5) {
    ctx.beginPath(); ctx.arc(-80, 10, 16, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(-64, 15); ctx.lineTo(-30, 30); ctx.lineTo(20, 10); ctx.lineTo(60, 50); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-50, 20); ctx.lineTo(-50, 50); ctx.stroke();
  } else if (idx === 6) {
    ctx.beginPath(); ctx.arc(-60, -50, 16, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(-60, -34); ctx.quadraticCurveTo(-40, 10, 80, 45); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-50, -10); ctx.lineTo(-40, 45); ctx.stroke();
  } else if (idx === 7) {
    ctx.beginPath(); ctx.arc(-40, 40, 16, 0, Math.PI*2); ctx.fill();
    ctx.beginPath(); ctx.moveTo(-30, 25); ctx.lineTo(0, -60); ctx.lineTo(70, 45); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-30, 25); ctx.lineTo(-50, 60); ctx.stroke();
  }

  ctx.restore();
}

async function autoGenerateWorkoutReel(info) {
  if (isGeneratingReel) {
    console.log("[Reel Generator] Already generating reel, skipping concurrent run.");
    return;
  }
  isGeneratingReel = true;

  // Stop any external Web Speech API TTS to prevent browser popup bar
  if (typeof qClear === "function") qClear();
  if (window.speechSynthesis) { try { window.speechSynthesis.cancel(); } catch(e){} }

  const btn = document.getElementById("btn-open-reel");
  if (btn) {
    btn.innerHTML = `🎬 Generating Workout Reel <span style="font-size:11px;background:#25D366;color:#111B21;padding:2px 7px;border-radius:10px;font-weight:900">0%</span>`;
  }

  let animInterval = null;
  let hardTimeout = null;
  let audioCtx = null;
  let osc = null;

  const resetGeneratorState = () => {
    isGeneratingReel = false;
    if (animInterval) { clearInterval(animInterval); animInterval = null; }
    if (hardTimeout) { clearTimeout(hardTimeout); hardTimeout = null; }
    if (osc) { try { osc.stop(); } catch(e){} osc = null; }
    if (audioCtx) { try { audioCtx.close(); } catch(e){} audioCtx = null; }
    const b = document.getElementById("btn-open-reel");
    if (b) {
      b.innerHTML = `🎬 Download 20s Reel Video <span style="font-size:11px;background:#25D366;color:#111B21;padding:2px 7px;border-radius:10px;font-weight:900">HD .MP4</span>`;
    }
  };

  hardTimeout = setTimeout(() => {
    console.warn("[Reel Generator] Hard safety timeout reached. Resetting...");
    resetGeneratorState();
  }, 65000);

  try {
    const canvas = document.createElement("canvas");
    canvas.width = 720;
    canvas.height = 1280; // 9:16 Vertical HD Format
    const ctx = canvas.getContext("2d");

    const name = info?.name || (typeof cfg !== "undefined" ? cfg.userName : "Vaibhav") || "Vaibhav";
    const todaySets = info?.todaySets || (typeof todayDone === "function" ? todayDone() : 1);
    const totalSets = info?.totalSets || (typeof data !== "undefined" && data ? data.totalAllTime : 100);
    const streak = typeof computeStreak === "function" ? computeStreak() : 1;

    let stream = null;
    try {
      stream = canvas.captureStream ? canvas.captureStream(30) : null;
    } catch(e){ stream = null; }

    // Synthesize Om Solfeggio Audio track directly into video stream
    try {
      if (stream && (window.AudioContext || window.webkitAudioContext)) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        const dest = audioCtx.createMediaStreamDestination();
        osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();

        osc.type = "sine";
        osc.frequency.setValueAtTime(432, audioCtx.currentTime); // 432Hz Om Chant Frequency
        gain.gain.setValueAtTime(0.08, audioCtx.currentTime);
        osc.connect(gain);
        gain.connect(dest);
        osc.start();

        const audioTrack = dest.stream.getAudioTracks()[0];
        if (audioTrack) {
          stream.addTrack(audioTrack);
        }
      }
    } catch(e){}

    const mimeTypes = ['video/mp4;codecs=avc1,mp4a.40.2', 'video/mp4;codecs=h264', 'video/mp4', 'video/webm;codecs=vp9,opus', 'video/webm'];
    let selectedMime = mimeTypes.find(m => MediaRecorder.isTypeSupported && MediaRecorder.isTypeSupported(m)) || '';

    let recorder = null;
    if (stream && typeof MediaRecorder !== "undefined") {
      try {
        recorder = new MediaRecorder(stream, selectedMime ? { mimeType: selectedMime } : {});
      } catch(e){ recorder = null; }
    }

    const chunks = [];

    if (recorder) {
      recorder.ondataavailable = e => { if (e.data && e.data.size > 0) chunks.push(e.data); };

      recorder.onstop = async () => {
        try {
          if (chunks.length > 0) {
            const finalMime = (selectedMime && selectedMime.includes("mp4")) ? "video/mp4" : (selectedMime || "video/mp4");
            generatedReelBlob = new Blob(chunks, { type: finalMime });
          }
        } catch(e){}
        
        if (typeof data !== "undefined") {
          if (!data.reels) data.reels = {};
          const tKey = typeof todayKey === "function" ? todayKey() : "today";
          if (!data.reels[tKey]) {
            data.reels[tKey] = { date: tKey, savedOrShared: true, timestamp: Date.now() };
            if (typeof saveAll === "function") saveAll();
          }
        }
        cleanupOldWorkoutReels();
        
        // DIRECT DOWNLOAD INTO DEVICE DOWNLOADS FOLDER (NO PREVIEW MODAL POPUPS!)
        confirmDownloadReelDirect();
        resetGeneratorState();

        if (typeof setStatus === "function") {
          setStatus("✅ 20s Workout Marketing Reel Saved to Downloads!");
        }
      };

      try { recorder.start(1000); } catch(e){}
    }

    // Render 20-second 9:16 Reel (600 frames @ 30 FPS)
    let frame = 0;
    const maxFrames = 600; // 20 seconds total @ 30 FPS
    const d = new Date();
    const dateStr = d.toLocaleDateString(undefined, { weekday: "short", month: "short", day: "numeric", year: "numeric" });

    const gQuote = typeof getDailyGitaQuote === "function" ? getDailyGitaQuote() : { ref: "श्रीमद्भगवद्गीता २.४७", sanskrit: "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥", hi: "तुम्हारा अधिकार केवल कर्म करने में है, उसके फलों में कभी नहीं।" };
    const gMeaning = typeof getQuoteMeaning === "function" ? getQuoteMeaning(gQuote) : (gQuote.hi || gQuote.en || "");
    const rawSanskrit = gQuote.sanskrit || gQuote.shloka || "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन।\nमा कर्मफलहेतुर्भूर्मा ते सङ्गोऽस्त्वकर्मणि॥";

    animInterval = setInterval(() => {
      frame++;

      if (frame % 5 === 0 || frame === maxFrames) {
        const pct = Math.min(100, Math.floor((frame / maxFrames) * 100));
        const b = document.getElementById("btn-open-reel");
        if (b) {
          b.innerHTML = `🎬 Generating Reel <span style="font-size:11px;background:#25D366;color:#111B21;padding:2px 7px;border-radius:10px;font-weight:900">${pct}%</span>`;
        }
      }

      // ═════════════════════════════════════════════════════════════
      // SCENE 1 (Frames 1 to 180 = 0s to 6.0s): BHAGAVAD GITA OPENING
      // ═════════════════════════════════════════════════════════════
      if (frame <= 180) {
        let opacity = 1;
        if (frame > 150) opacity = (180 - frame) / 30;

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, opacity));

        const gGrad = ctx.createRadialGradient(360, 400, 40, 360, 640, 750);
        gGrad.addColorStop(0, '#132A1C');
        gGrad.addColorStop(0.6, '#0B1710');
        gGrad.addColorStop(1, '#050B08');
        ctx.fillStyle = gGrad;
        ctx.fillRect(0, 0, 720, 1280);

        ctx.save();
        ctx.translate(360, 450);
        ctx.rotate((frame * 0.01) % (Math.PI * 2));
        ctx.strokeStyle = "rgba(245, 158, 11, 0.15)";
        ctx.lineWidth = 2.5;
        for (let i = 0; i < 12; i++) {
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(Math.cos(i * Math.PI / 6) * 380, Math.sin(i * Math.PI / 6) * 380);
          ctx.stroke();
        }
        ctx.restore();

        ctx.fillStyle = "#F59E0B";
        ctx.font = "800 22px Outfit, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("☀️ MORNING MOTIVATION · BHAGAVAD GITA 📜", 360, 110);

        ctx.fillStyle = "#FBBF24";
        ctx.font = "900 28px Outfit, sans-serif";
        ctx.shadowColor = "rgba(251, 191, 36, 0.5)";
        ctx.shadowBlur = 12;
        ctx.fillText(gQuote.ref || "श्रीमद्भगवद्गीता", 360, 160);
        ctx.shadowBlur = 0;

        const sBoxY = 210;
        ctx.fillStyle = "rgba(29, 184, 127, 0.16)";
        ctx.strokeStyle = "rgba(93, 224, 168, 0.45)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(50, sBoxY, 620, 360, 24);
        ctx.fill(); ctx.stroke();

        ctx.fillStyle = "#FFD700";
        ctx.font = "900 28px 'Noto Sans Devanagari', 'Mukta', sans-serif";
        const shlokaLines = rawSanskrit.split("\n");
        let lineY = sBoxY + (shlokaLines.length > 2 ? 65 : 90);
        shlokaLines.forEach(line => {
          ctx.fillText(line.trim(), 360, lineY);
          lineY += 50;
        });

        const mBoxY = 610;
        ctx.fillStyle = "rgba(30, 41, 59, 0.88)";
        ctx.strokeStyle = "rgba(96, 165, 250, 0.35)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(50, mBoxY, 620, 360, 20);
        ctx.fill(); ctx.stroke();

        ctx.fillStyle = "#93C5FD";
        ctx.font = "800 20px Outfit, sans-serif";
        ctx.fillText("MEANING / अर्थ / भावार्थ", 360, mBoxY + 45);

        ctx.fillStyle = "#F9FAFB";
        ctx.font = "600 23px 'Noto Sans Devanagari', Outfit, sans-serif";
        wrapCanvasText(ctx, gMeaning, 360, mBoxY + 105, 550, 38);

        ctx.fillStyle = "rgba(245, 158, 11, 0.8)";
        ctx.font = "700 20px Outfit, sans-serif";
        ctx.fillText("☀️ Suryasarthi 108 · Daily Yoga & Wisdom 🧘", 360, 1050);

        ctx.restore();
        return;
      }

      // ═════════════════════════════════════════════════════════════
      // SCENE 2 (Frames 181 to 420 = 6.0s to 14.0s): 12 KEY EXERCISE MOVEMENTS SHOWCASE
      // ═════════════════════════════════════════════════════════════
      if (frame <= 420) {
        const scene2Frame = frame - 180;
        let opacity = 1;
        if (frame > 390) opacity = (420 - frame) / 30;

        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, opacity));

        const grad = ctx.createRadialGradient(360, 400, 50, 360, 640, 800);
        grad.addColorStop(0, '#1E293B');
        grad.addColorStop(0.5, '#0F172A');
        grad.addColorStop(1, '#070B14');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, 720, 1280);

        ctx.fillStyle = "#FBBF24";
        ctx.font = "900 30px Outfit, sans-serif";
        ctx.textAlign = "center";
        ctx.fillText("🧘 TODAY'S 12 KEY EXERCISE MOVEMENTS ☀️", 360, 85);

        ctx.fillStyle = "#93C5FD";
        ctx.font = "700 20px Outfit, sans-serif";
        ctx.fillText("Automated Surya Namaskara Postures Recorded", 360, 120);

        const stepIdx = Math.min(11, Math.floor((scene2Frame / 240) * 12));
        const stepObj = REEL_STEPS[stepIdx] || REEL_STEPS[0];

        ctx.fillStyle = "rgba(245, 158, 11, 0.2)";
        ctx.strokeStyle = "#F59E0B";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(240, 150, 240, 44, 22);
        ctx.fill(); ctx.stroke();

        ctx.fillStyle = "#FBBF24";
        ctx.font = "900 22px Outfit, sans-serif";
        ctx.fillText(`POSTURE ${stepIdx + 1} OF 12`, 360, 180);

        const pBoxY = 215;
        ctx.fillStyle = "rgba(15, 23, 42, 0.92)";
        ctx.strokeStyle = "rgba(251, 191, 36, 0.4)";
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.roundRect(50, pBoxY, 620, 650, 24);
        ctx.fill(); ctx.stroke();

        ctx.fillStyle = "#FFD700";
        ctx.font = "900 34px Outfit, sans-serif";
        ctx.fillText(stepObj.pose, 360, pBoxY + 55);

        ctx.fillStyle = "#93C5FD";
        ctx.font = "700 22px Outfit, sans-serif";
        ctx.fillText(`${stepObj.sub} · 💨 ${stepObj.breath}`, 360, pBoxY + 95);

        ctx.fillStyle = "#F59E0B";
        ctx.font = "900 28px 'Noto Sans Devanagari', serif";
        ctx.fillText(stepObj.mantraD || "", 360, pBoxY + 140);

        drawPoseSilhouette(ctx, 360, pBoxY + 380, stepIdx, 1.4);

        const trackY = pBoxY + 600;
        const segW = 42;
        const startX = 360 - (12 * segW + 11 * 6) / 2;
        for (let i = 0; i < 12; i++) {
          const sx = startX + i * (segW + 6);
          ctx.fillStyle = i <= stepIdx ? "#F59E0B" : "rgba(255, 255, 255, 0.15)";
          ctx.beginPath();
          ctx.roundRect(sx, trackY, segW, 14, 7);
          ctx.fill();
        }

        ctx.fillStyle = "rgba(30, 41, 59, 0.85)";
        ctx.strokeStyle = "#38BDF8";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(70, 900, 580, 100, 20);
        ctx.fill(); ctx.stroke();

        ctx.fillStyle = "#38BDF8";
        ctx.font = "800 22px Outfit, sans-serif";
        ctx.fillText("📲 APP MARKETING FEATURE", 360, 938);

        ctx.fillStyle = "#F9FAFB";
        ctx.font = "700 20px Outfit, sans-serif";
        ctx.fillText("✓ Auto 12-Poses Recorder  ✓ Precision Breath & Mantras", 360, 974);

        ctx.fillStyle = "rgba(245, 158, 11, 0.85)";
        ctx.font = "700 20px Outfit, sans-serif";
        ctx.fillText("☀️ Suryasarthi 108 · Daily Health & Fitness 🧘", 360, 1060);

        ctx.restore();
        return;
      }

      // ═════════════════════════════════════════════════════════════
      // SCENE 3 (Frames 421 to 600 = 14.0s to 20.0s): GOAL & APP MARKETING CTA
      // ═════════════════════════════════════════════════════════════
      const scene3Frame = frame - 420;

      ctx.save();

      const grad = ctx.createRadialGradient(360, 400, 50, 360, 640, 800);
      grad.addColorStop(0, '#1E293B');
      grad.addColorStop(0.5, '#0F172A');
      grad.addColorStop(1, '#070B14');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 720, 1280);

      ctx.save();
      ctx.translate(360, 450);
      ctx.rotate((scene3Frame * 0.015) % (Math.PI * 2));
      ctx.strokeStyle = "rgba(245, 158, 11, 0.12)";
      ctx.lineWidth = 3;
      for (let i = 0; i < 16; i++) {
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(i * Math.PI / 8) * 350, Math.sin(i * Math.PI / 8) * 350);
        ctx.stroke();
      }
      ctx.restore();

      ctx.fillStyle = "#FBBF24";
      ctx.font = "900 34px Outfit, sans-serif";
      ctx.textAlign = "center";
      ctx.shadowColor = "rgba(245, 158, 11, 0.6)";
      ctx.shadowBlur = 15;
      ctx.fillText("☀️ SURYASARTHI 108 🧘", 360, 85);
      ctx.shadowBlur = 0;

      ctx.fillStyle = "#93C5FD";
      ctx.font = "700 22px Outfit, sans-serif";
      ctx.fillText(`Daily Practice Reel · ${dateStr}`, 360, 125);

      ctx.fillStyle = "rgba(30, 41, 59, 0.8)";
      ctx.strokeStyle = "#38BDF8";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.roundRect(160, 150, 400, 50, 25);
      ctx.fill(); ctx.stroke();

      ctx.fillStyle = "#F9FAFB";
      ctx.font = "800 24px Outfit, sans-serif";
      ctx.fillText(`Namaste, ${name}! 🙏`, 360, 184);

      const cardY = 220;
      ctx.fillStyle = "rgba(16, 185, 129, 0.22)";
      ctx.strokeStyle = "#10B981";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(80, cardY, 560, 150, 20);
      ctx.fill(); ctx.stroke();

      ctx.fillStyle = "#34D399";
      ctx.font = "900 28px Outfit, sans-serif";
      ctx.fillText(`🎯 TODAY'S GOAL COMPLETED!`, 360, cardY + 50);

      ctx.fillStyle = "#6EE7B7";
      ctx.font = "900 36px Outfit, sans-serif";
      ctx.fillText(`${todaySets} Sets Mastered Today! ☀️`, 360, cardY + 105);

      const gridY = 395;
      const colWidth = 170;
      const gap = 20;

      ctx.fillStyle = "rgba(6, 182, 212, 0.2)"; ctx.strokeStyle = "#06B6D4"; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.roundRect(80, gridY, colWidth, 110, 16); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#7DD3FC"; ctx.font = "800 15px Outfit, sans-serif"; ctx.fillText("TODAY", 80 + colWidth/2, gridY + 32);
      ctx.fillStyle = "#22D3EE"; ctx.font = "900 32px Outfit, sans-serif"; ctx.fillText(`${todaySets}`, 80 + colWidth/2, gridY + 80);

      ctx.fillStyle = "rgba(16, 185, 129, 0.2)"; ctx.strokeStyle = "#10B981";
      ctx.beginPath(); ctx.roundRect(80 + colWidth + gap, gridY, colWidth, 110, 16); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#6EE7B7"; ctx.font = "800 15px Outfit, sans-serif"; ctx.fillText("STREAK", 80 + colWidth + gap + colWidth/2, gridY + 32);
      ctx.fillStyle = "#34D399"; ctx.font = "900 34px Outfit, sans-serif"; ctx.fillText(`${streak}d 🔥`, 80 + colWidth + gap + colWidth/2, gridY + 80);

      ctx.fillStyle = "rgba(168, 85, 247, 0.2)"; ctx.strokeStyle = "#A855F7";
      ctx.beginPath(); ctx.roundRect(80 + (colWidth + gap)*2, gridY, colWidth, 110, 16); ctx.fill(); ctx.stroke();
      ctx.fillStyle = "#E9D5FF"; ctx.font = "800 15px Outfit, sans-serif"; ctx.fillText("LIFETIME", 80 + (colWidth + gap)*2 + colWidth/2, gridY + 32);
      ctx.fillStyle = "#C084FC"; ctx.font = "900 32px Outfit, sans-serif"; ctx.fillText(`${totalSets}`, 80 + (colWidth + gap)*2 + colWidth/2, gridY + 80);

      const ctaY = 530;
      ctx.fillStyle = "rgba(245, 158, 11, 0.22)";
      ctx.strokeStyle = "#F59E0B";
      ctx.lineWidth = 3;
      ctx.beginPath();
      ctx.roundRect(60, ctaY, 600, 360, 24);
      ctx.fill(); ctx.stroke();

      ctx.fillStyle = "#FBBF24";
      ctx.font = "900 28px Outfit, sans-serif";
      ctx.fillText("📲 PRACTICE DAILY WITH SURYASARTHI 108", 360, ctaY + 55);

      ctx.fillStyle = "#F9FAFB";
      ctx.font = "700 22px Outfit, sans-serif";
      ctx.fillText("✓ 12 Sacred Poses Tracker & Guidance", 360, ctaY + 115);
      ctx.fillText("✓ Gita Morning Shlokas & Audio Voice", 360, ctaY + 165);
      ctx.fillText("✓ Ayurvedic Diet & Hydration Advice", 360, ctaY + 215);

      ctx.fillStyle = "#25D366";
      ctx.font = "900 24px Outfit, sans-serif";
      ctx.fillText("100% Free Offline PWA App · No Install Needed", 360, ctaY + 280);

      ctx.fillStyle = "#93C5FD";
      ctx.font = "800 22px Outfit, sans-serif";
      ctx.fillText("Perfect 20s Video for WhatsApp Status & Reels! 💬", 360, 930);

      ctx.fillStyle = "rgba(245, 158, 11, 0.9)";
      ctx.font = "700 20px Outfit, sans-serif";
      ctx.fillText("☀️ Suryasarthi 108 · Daily Health & Fitness 🧘", 360, 1050);

      ctx.restore();

      if (frame >= maxFrames) {
        clearInterval(animInterval);
        animInterval = null;
        if (recorder && recorder.state !== "inactive") {
          try { recorder.stop(); } catch(e){}
        }
      }
    }, 1000 / 30);

  } catch (err) {
    console.error("[Reel Generator] Error in autoGenerateWorkoutReel:", err);
    resetGeneratorState();
  }
}

function cleanupOldWorkoutReels() {
  try {
    if (typeof data === "undefined" || !data.reels) return;
    const now = Date.now();
    const twoDaysMs = 2 * 24 * 60 * 60 * 1000;
    const keys = Object.keys(data.reels);
    let changed = false;

    keys.forEach(k => {
      const item = data.reels[k];
      if (item && item.timestamp) {
        if ((now - item.timestamp > twoDaysMs) && !item.savedOrShared) {
          delete data.reels[k];
          changed = true;
        }
      }
    });

    if (changed && typeof saveAll === "function") saveAll();
  } catch(e){}
}

function confirmDownloadReelDirect() {
  if (!generatedReelBlob) {
    alert("Video is still rendering. Please wait a few seconds...");
    return;
  }
  markReelAsSavedOrShared();

  const d = new Date();
  const dateStr = d.toISOString().slice(0, 10);
  const fileName = `Suryasarthi_108_20s_Workout_Reel_${dateStr}.mp4`;

  const url = URL.createObjectURL(generatedReelBlob);
  const a = document.createElement("a");
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  setTimeout(() => URL.revokeObjectURL(url), 10000);
}

function handleOpenReelClick() {
  if (generatedReelBlob) {
    confirmDownloadReelDirect();
  } else {
    if (typeof setStatus === "function") setStatus("Generating 20s Workout Reel...");
    autoGenerateWorkoutReel({
      type: "goal_complete",
      todaySets: typeof todayDone === "function" ? todayDone() : 1,
      totalSets: (typeof data !== "undefined" && data) ? data.totalAllTime : 100,
      name: (typeof cfg !== "undefined" && cfg.userName) ? cfg.userName : "Vaibhav"
    });
  }
}

function markReelAsSavedOrShared() {
  try {
    const tKey = typeof todayKey === "function" ? todayKey() : "today";
    if (typeof data !== "undefined") {
      if (!data.reels) data.reels = {};
      if (!data.reels[tKey]) data.reels[tKey] = { date: tKey, savedOrShared: true, timestamp: Date.now() };
      else data.reels[tKey].savedOrShared = true;
      if (typeof saveAll === "function") saveAll();
    }
  } catch(e){}
}

function wrapCanvasText(ctx, text, x, y, maxWidth, lineHeight) {
  if (!text) return;
  const words = text.split(" ");
  let line = "";

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;
    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line.trim(), x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line.trim(), x, y);
}

window.autoGenerateWorkoutReel = autoGenerateWorkoutReel;
window.cleanupOldWorkoutReels = cleanupOldWorkoutReels;
window.confirmDownloadReelDirect = confirmDownloadReelDirect;
window.downloadReelVideo = confirmDownloadReelDirect;
window.handleOpenReelClick = handleOpenReelClick;
window.wrapCanvasText = wrapCanvasText;
