# SURYASARTHI - 108 | सूर्यसारथी - १०८
> **Master Technical & User Guide: Ayurvedic Surya Namaskara, Automated 9:16 Social Media Reel Generator, 30s WhatsApp Status Screen Recorder, Bhagavad Gita Shloka Engine, Guided Pranayama Standards & PWA Architecture**

---

## 📖 Table of Contents
1. [🌟 Project Overview & Tech Stack Philosophy](#-project-overview--tech-stack-philosophy)
2. [🎨 Visual Aesthetics & FHD Display Design System](#-visual-aesthetics--fhd-display-design-system)
3. [🧩 Module 1: Core Surya Namaskara Tracking & Daily Goal Scaling Algorithm](#-module-1-core-surya-namaskara-tracking--daily-goal-scaling-algorithm)
4. [📜 Module 2: Bhagavad Gita Shloka & Morning Motivation Engine](#-module-2-bhagavad-gita-shloka--morning-motivation-engine)
5. [🎬 Module 3: Automatic Social Media Reel Generator & WhatsApp Status Engine](#-module-3-automatic-social-media-reel-generator--whatsapp-status-engine)
6. [📹 Module 4: 30-Second WhatsApp Status Screen Recording Engine](#-module-4-30-second-whatsapp-status-screen-recording-engine)
7. [🫁 Module 5: Guided Pranayama & Classical Yoga / Ayurvedic Standards Engine](#-module-5-guided-pranayama--classical-yoga--ayurvedic-standards-engine)
8. [👑 Module 6: PRO Subscription & Data Preservation Engine](#-module-6-pro-subscription--data-preservation-engine)
9. [📊 Module 7: Analytics, Data Persistence & Offline PWA Architecture](#-module-7-analytics-data-persistence--offline-pwa-architecture)
10. [📱 Comprehensive User Guide (Basic to Advanced Usage)](#-comprehensive-user-guide-basic-to-advanced-usage)
11. [🛠️ Technical API Reference & Codebase Map](#%EF%B8%8F-technical-api-reference--codebase-map)

---

## 🌟 Project Overview & Tech Stack Philosophy

**SURYASARTHI - 108 (सूर्यसारथी - १०८)** is a premium, zero-dependency web application and offline-first Progressive Web App (PWA). It bridges ancient Vedic health practices—Surya Namaskara, Pranayama, Bhagavad Gita wisdom, and Ayurvedic Ahara guidelines—with cutting-edge browser engineering, canvas animation engines, and automated social video creation.

### Design & Tech Stack Philosophy:
- **Core Technology**: Pure Vanilla HTML5, Vanilla CSS3, and ES6+ JavaScript (`app.js`). Zero external frameworks or heavy npm bloat.
- **Aesthetic System**: High-contrast, dark-mode visual hierarchy with rich emerald-solar gradients (`#182B21`, `#0B1210`), glassmorphic overlays, animated circular SVG solar rings, and crisp typography.
- **Offline First**: 100% functional without an active internet connection via custom Service Worker caching (`sw.js`).
- **Privacy First**: All practice data, streak counters, video blobs, and configuration settings remain strictly private on the user's device via `localStorage` and `IndexedDB`.

---

## 🎨 Visual Aesthetics & FHD Display Design System

Suryasarthi 108 is built for maximum visual impact on Full HD (1080p / high-DPI OLED / AMOLED / IPS) mobile and desktop displays.

- **Modern High-Resolution Typography**:
  - Integrated Google Fonts (`'Outfit'` & `'Inter'`) for ultra-clean tabular digits, sharp headings, and crystal clear readability.
  - Devanagari Sanskrit mantras styled with `'Noto Sans Devanagari'` and radiant solar gold text shadows.
- **Deep Obsidian Emerald Palette & Glassmorphic Surfaces**:
  - Dark Mode Background: Deep obsidian background (`#060D0A`) with a subtle radial spotlight gradient.
  - Glassmorphic Cards: `backdrop-filter: blur(16px)` card surfaces with translucent borders (`rgba(52, 211, 153, 0.2)`), subtle inset light highlights, and soft drop-shadows.
- **Neon Gradients & Display Glows**:
  - Solar-Emerald Ring SVG (`url(#ringGrad)`) with electric gradient stroke and neon drop-shadow glow.
  - 3D Gradient Buttons with tactile scale responses and vibrant glowing box-shadows.
  - Radiant Gold Solar Badges (`#FBBF24`) and Electric Mint Green accents (`#34D399`).

---

## 🧩 Module 1: Core Surya Namaskara Tracking & Daily Goal Scaling Algorithm

- **Progressive Daily Goal Algorithm (`todayGoal()`)**:
  - **Starting Target**: Day 1 initializes at **4 rounds**.
  - **Completion Scaling**: Only upon completing today's target does the goal increment by **+4 rounds/day**, capped at **108 rounds max**.
  - **Incomplete / Skipped Days**: Incomplete or skipped days retain the current target without premature inflation, allowing users to build strength naturally.
- **Start Button Goal Lock & 12:00 AM Midnight Auto-Unlock (`checkMidnightRollover()`)**:
  - Upon completing today's target, the main Start button (`#main-btn`) locks (**`🔒 Goal Complete`**).
  - At **12:00 AM Midnight**, all daily locks auto-reset, recalculating the new goal target and unlocking the Start button for the morning practice session.
- **12 Authentic Poses with Color-Coded Breath Cues**:
  1. *Pranamasana* (Prayer Pose) — Inhale/Exhale — Anahata Chakra — *Om Mitraya Namah*
  2. *Hastauttanasana* (Raised Arms Pose) — Inhale — Vishuddhi Chakra — *Om Ravaye Namah*
  3. *Padahastasana* (Hand to Foot Pose) — Exhale — Swadhisthana Chakra — *Om Suryaya Namah*
  4. *Ashwa Sanchalanasana* (Equestrian Pose) — Inhale — Ajna Chakra — *Om Bhanave Namah*
  5. *Dandasana* (Plank Pose) — Exhale — Vishuddhi Chakra — *Om Khagaya Namah*
  6. *Ashtanga Namaskara* (Eight-Limbed Pose) — Retain Breath — Manipura Chakra — *Om Pushne Namah*
  7. *Bhujangasana* (Cobra Pose) — Inhale — Swadhisthana Chakra — *Om Hiranyagarbhaya Namah*
  8. *Adho Mukha Svanasana* (Downward Dog) — Exhale — Vishuddhi Chakra — *Om Marichaye Namah*
  9. *Ashwa Sanchalanasana* (Equestrian Pose) — Inhale — Ajna Chakra — *Om Adityaya Namah*
  10. *Padahastasana* (Hand to Foot Pose) — Exhale — Swadhisthana Chakra — *Om Savitre Namah*
  11. *Hastauttanasana* (Raised Arms Pose) — Inhale — Vishuddhi Chakra — *Om Arkaya Namah*
  12. *Tadasana / Pranamasana* (Mountain / Prayer) — Exhale — Anahata Chakra — *Om Bhaskaraya Namah*
- **Custom Pace & Recovery Triggers**:
  - Adjust pose duration from **2s to 30s** with configurable grace periods.
  - Break interval prompted every 12 sets (default configurable).
  - Recovery checkpoint prompted every 400 all-time completed sets.
- **SVG Circular Progress Ring**:
  Calculated dynamically using exact circumference math:
  $$\text{CIRC} = 2 \times \pi \times 98 \approx 615.75, \quad \text{offset} = \text{CIRC} \times \left(1 - \frac{\text{step}}{12}\right)$$
- **Screen WakeLock API**: Requests `navigator.wakeLock.request('screen')` during active practice sessions to prevent display sleep.

---

## 📜 Module 2: Bhagavad Gita Shloka & Morning Motivation Engine

- **Daily Authentic Shloka Display**: Displays authentic Bhagavad Gita verses complete with Devanagari Sanskrit text, chapter/verse reference (e.g. `श्रीमद्भगवद्गीता २.४७`), and multilingual translations (Hindi, Marathi, English).
- **Clear Voice Recitation (`speakCurrentGitaQuote()`)**:
  - Automatically speaks the full Devanagari Sanskrit Shloka and Translation Meaning in clear voice using Indian local speech synthesis (`hi-IN` / `mr-IN` / `en-IN`).
  - Includes browser gesture audio unlock (`speechSynthesis.resume()`) to prevent silent muting on Android Chrome and iOS Safari.
- **Manual Launch Control**:
  - The Gita Shloka screen **remains open comfortably** on the phone screen so the user can read the Sanskrit text and Translation Meaning at their own pace.
  - Practice session **ONLY starts when the user taps `🧘 Start Surya Namaskara Now`** (`#gita-start-btn`).

---

## 🎬 Module 3: Automatic Social Media Reel Generator & WhatsApp Status Engine

An automated 9:16 vertical HD video generator (`autoGenerateWorkoutReel()`) that builds 16-second social media reels ready for WhatsApp Status, Instagram Reels, and YouTube Shorts.

### 🌟 2-Scene Reel Structure:
- **Scene 1 (0s to 8s — Bhagavad Gita Opening Scene)**:
  - Header: `☀️ MORNING MOTIVATION · BHAGAVAD GITA 📜`
  - Shloka Reference (e.g., `श्रीमद्भगवद्गीता २.४७`).
  - Golden Devanagari Sanskrit Shloka Box (`कर्मण्येवाधिकारस्ते मा फलेषु कदाचन...`).
  - Full Translation / Meaning Box in Hindi, Marathi, or English using dynamic word-wrapping (`wrapCanvasText()`).
  - Triggers voice audio recitation of the full Shloka & Meaning at the start of Scene 1.
  - Smooth 1-second cross-fade into Scene 2 between seconds 7 and 8.
- **Scene 2 (8s to 16s — Workout Highlights & Achievement Milestones)**:
  - User name, date, animated solar ring, and Sanskrit mantras (*"ॐ सूर्याय नमः"*).
  - Highlighted Achievement Banner (*🎯 TODAY'S GOAL COMPLETED!* / *🏆 1000 TOTAL SETS!* / *🔥 7 DAYS STREAK!*).
  - Stats grid (Today's sets, active streak days, lifetime total sets).

### 🏆 Automated Triggers & Voice Appreciations:
- Auto-captures highlighted workout moments:
  - Goal Completion.
  - 1000, 2000, 3000+ total set lifetime milestones.
  - **Continuous 7, 14, 21, and 30-Day Streak Milestones**: Speaks custom voice appreciation (e.g., *"Outstanding dedication! 7 days continuous Surya Namaskara streak completed! Keep glowing!"*).

### 📤 1-Click WhatsApp Status Sharing & Main Screen Action Button:
- **`📲 Share Reel to WhatsApp Status`**: Uses Web Share API (`navigator.share({ files: [videoFile] })`) to launch WhatsApp Status creation instantly.
- **`📥 Save / Download Video`**: Saves the generated `.webm`/`.mp4` video directly to device gallery.
- **`🎬 Download / Share Workout Reel`** Button (`#btn-open-reel`): Prominently displayed above the footer on the main screen for instant access.

### 🧹 Automatic 2-Day Reel Data Cleanup Policy (`cleanupOldWorkoutReels()`):
- To prevent filling local device storage, workout reels older than **2 days** (`> 2 * 24 * 60 * 60 * 1000 ms`) with `savedOrShared !== true` are automatically purged from app data.
- Explicitly saved or shared reels (`markReelAsSavedOrShared()`) are preserved permanently.

---

## 📹 Module 4: 30-Second WhatsApp Status Screen Recording Engine

- **Manual Screen & Voice Recorder (`startScreenRecording()`)**:
  - Captures 30 seconds of short live workout highlights with internal app voice audio.
  - Uses `navigator.mediaDevices.getDisplayMedia()` + `MediaRecorder` API.
  - Fits WhatsApp Status 30-second video limit automatically.
  - Includes modal preview with instant WhatsApp share and download controls.

---

## 🫁 Module 5: Guided Pranayama & Classical Yoga / Ayurvedic Standards Engine

Provides a structured 35-minute guided breathwork and meditation routine following physical practice.

### 🟢 8 Guided Practices:
1. *Dirgha Pranayama* (Three-Part Deep Breathing — 1:1:2 classical ratio)
2. *Kapalabhati* (Skull-Shining Purification / Shatkarma)
3. *Bhastrika* (Bellows Breath)
4. *Anulom-Vilom* (Alternate Nostril Balance)
5. *Nadi Shodhana* (Classical Channel Purification 1:4:2 Ratio)
6. *Ujjayi Pranayama* (Ocean / Psychic Breath)
7. *Bhramari* (Humming Bee Breath)
8. *Dhyana* (Silent Meditation)

### 🟡 Classical Yoga & Ayurvedic Standards Engine:
Provides an authentic 11-point Classical Yoga & Ayurveda breakdown for every practice based on *Hatha Yoga Pradipika*, *Gheranda Samhita*, and *Shiva Samhita*:
1. Step-by-Step Practice Method
2. Inhale-Hold-Exhale Ratios (Beginner, Intermediate, Advanced)
3. Recommended Rounds & Duration
4. Posture, Mudra & Eye Position
5. Best Time & Empty Stomach Requirements
6. Physical Health Benefits
7. Mental & Emotional Benefits
8. Ayurvedic Benefits (Vata, Pitta, Kapha, Agni, Prana)
9. Chakra & Nadi Effects
10. Precautions, Contraindications & Common Mistakes
11. Progression Guidelines (Beginner → Advanced)

- **8-Practice Interactive Tab Bar**: Switch between all 8 practices inside `#prana-guide-modal` to inspect and listen to voice guides separately.
- **Voice Guide Audio & Round Freeze**: Tapping any practice tab speaks the 11-point guide. Round counting automatically freezes while the voice is speaking and resumes when finished.

---

## 👑 Module 6: PRO Subscription & Data Preservation Engine

- **Subscription Hierarchy**: Free 7-Day Trial + Google Play Subscription Plans (1 Month, 3 Month, 6 Month, 12 Month Annual Pass).
- **Paywall Overlay Hierarchy (`#paywall-ov`)**: Configured with `z-index: 400` to open smoothly over app locks (`z-index: 300`).
- **Selective Data Reset & Subscription Preservation**:
  Preserves active subscription status and trial dates during manual practice resets:
  ```javascript
  const preservedSub = {
    isPremium      : data.isPremium || false,
    subSku         : data.subSku || "",
    subDate        : data.subDate || "",
    trialStartDate : data.trialStartDate || ""
  };
  // Re-inject preservedSub after clearing history objects
  data.isPremium = preservedSub.isPremium;
  ```

---

## 📊 Module 7: Analytics, Data Persistence & Offline PWA Architecture

- **Stats Dashboard**: Displays Today's Sets, Target Goal, Current Streak, Total All-Time Sets, Today's Calorie Burn, and Total Calorie Burn.
- **Calorie Estimation Formula**:
  $$\text{Calories Burned} = \text{Completed Sets} \times 13.9 \quad (\text{kcal})$$
- **Cache-First PWA Service Worker (`sw.js`)**: Serves cached static assets from cache storage first, ensuring 100% offline functionality without network access.

---

## 📱 Comprehensive User Guide (Basic to Advanced Usage)

### 1. Daily Surya Namaskara Practice Workflow
1. Launch the app and tap **▶ Start**.
2. The **Bhagavad Gita Shloka Modal** opens, reciting today's Sanskrit Shloka & Meaning in full voice.
3. Read the Shloka and Meaning comfortably at your own pace.
4. Tap **`🧘 Start Surya Namaskara Now`** to close the Gita modal and begin your workout.
5. Follow the animated pose ring, visual countdown, and spoken instructions.

### 2. Creating & Sharing Workout Reels
1. Complete today's target goal or achieve a streak milestone (7/14/21/30 days).
2. The app automatically builds a 2-scene 16s vertical Reel (Scene 1: Gita Shloka + Voice; Scene 2: Workout Highlights & Badges).
3. Tap **`🎬 Download / Share Workout Reel`** on the main screen anytime.
4. Tap **`📲 Share Reel to WhatsApp Status`** or **`📥 Save / Download Video`**.

---

## 🛠️ Technical API Reference & Codebase Map

### Core Data Models (`app.js`)

```typescript
interface AppConfig {
  programName: string;          // "SURYA SARATHI - 108"
  dailyIncrease: number;        // Goal increase per day (+4)
  maxSets: number;              // Target cap (108)
  poseSeconds: number;          // Pose duration (2-30s)
  alarmHour: number;            // Alarm hour (0-23)
  alarmMinute: number;          // Alarm minute (0-59)
  quoteLang: string;            // "hi" | "mr" | "en"
  userName: string;             // User's preferred name
  voiceOn: boolean;             // Voice guidance toggle
}

interface WorkoutReelInfo {
  dateStr: string;
  todaySets: number;
  streakDays: number;
  totalSets: number;
  goalDone: boolean;
  milestoneTitle?: string;
  milestoneDesc?: string;
}
```

### Primary Window Functions (`window.*`)
- `autoGenerateWorkoutReel(info)`: Renders 9:16 2-scene animated canvas Reel.
- `shareReelToSocialMedia()`: Triggers `navigator.share()` with video file.
- `downloadReelVideo()`: Downloads generated video blob.
- `cleanupOldWorkoutReels()`: Purges un-shared reels older than 2 days.
- `showGitaQuoteModal(fromStartBtn)`: Opens Gita Shloka modal with voice recitation.
- `startScreenRecording()`: Launches 30-second live screen recorder.

---

## 📜 License & Credits

Designed and engineered for Health, Mindfulness, and Ayurvedic Wellness.  
**SURYA SARATHI - 108 | सूर्यसारथी - १०८**
