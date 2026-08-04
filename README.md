# SURYASARTHI - 108 | सूर्यसारथी - १०८
> **Master Technical & User Guide: Ayurvedic Surya Namaskara, Guided Pranayama, Bhagavad Gita Shloka Alarms, 7-Day Rotating Sattvic Diet Engine & PWA Architecture**

---

## 📖 Table of Contents
1. [🌟 Project Overview & Core Philosophy](#-project-overview--core-philosophy)
2. [🧩 Module 1: Core Surya Namaskara Practice Engine](#-module-1-core-surya-namaskara-practice-engine)
3. [📜 Module 2: Bhagavad Gita Shloka & Daily Alarm Engine](#-module-2-bhagavad-gita-shloka--daily-alarm-engine)
4. [🥗 Module 3: 7-Day Rotating Ayurvedic Diet & Hydration Engine](#-module-3-7-day-rotating-ayurvedic-diet--hydration-engine)
5. [🫁 Module 4: Guided Pranayama & Meditation Engine](#-module-4-guided-pranayama--meditation-engine)
6. [🌞 Module 5: Daytime Relationship-Building Notifications](#-module-5-daytime-relationship-building-notifications)
7. [👑 Module 6: PRO Subscription & Data Preservation Engine](#-module-6-pro-subscription--data-preservation-engine)
8. [📊 Module 7: Analytics, Data Persistence & Offline PWA Architecture](#-module-7-analytics-data-persistence--offline-pwa-architecture)
9. [📱 Comprehensive User Guide (Basic to Advanced Usage)](#-comprehensive-user-guide-basic-to-advanced-usage)
10. [🛠️ Technical API Reference & Codebase Map](#%EF%B8%8F-technical-api-reference--codebase-map)

---

## 🌟 Project Overview & Core Philosophy

**SURYASARTHI - 108 (सूर्यसारथी - १०८)** is a premium, zero-dependency web application and offline-first Progressive Web App (PWA). It bridges ancient Vedic health practices—Surya Namaskara, Pranayama, Bhagavad Gita wisdom, and Ayurvedic Ahara guidelines—with modern browser engineering.

### Design & Tech Stack Philosophy:
- **Core Technology**: Pure Vanilla HTML5, CSS3, and ES6+ JavaScript (`app.js`). Zero external libraries or heavy frameworks.
- **Aesthetic System**: High-contrast, dark-mode visual hierarchy with rich gradients (`#182B21`, `#0B1210`), glassmorphic overlays, animated circular SVG rings, and crisp typography.
- **Offline First**: 100% functional without an active internet connection via custom Service Worker caching (`sw.js`).
- **Privacy First**: All practice data, streak counters, and configuration settings remain private on the user's device via `localStorage`.

---

## 🧩 Module 1: Core Surya Namaskara Practice Engine

The Core Practice Engine governs the physical execution of Surya Namaskara, supporting 12 dynamic poses, customizable pace, smart goal scaling, and rest intervals.

- **1-Tap Quick Water Logging (`quickLogWaterAndSpeak()`) & 100% Goal Locking**:
  Prominent **"💧 +1 Drink Water"** single-click button on the main dashboard card (`#card-view-diet-plan`) allows logging water intake in 1 click without opening any modal.
  - **100% Goal Completion Locking**: Once today's water target is completed (`logged >= target`), the button automatically locks into a golden **`🎉 Water Goal Completed!`** badge, disabling further clicks and playing celebratory TTS speech if clicked.
  - **12:00 AM Midnight Auto-Unlock**: On date rollover at 12 AM Midnight (`scheduleMidnightRollover()`), the tracker resets for the new date and unlocks the **"💧 +1 Drink Water"** button for your next day's practice!
  - Live progress bar (`#card-water-progress-bar`) and text status (`#card-water-quick-status`) update instantly on the main screen.
- **Lockscreen & Closed-App System Notification Popups**:
  - Scheduled hydration reminders (10 AM, 12 PM, 3 PM, 5 PM, 8 PM) dispatch system notification popups with inline action buttons (`💧 +1 Bottle Confirmed`, `🥗 View Tracker`).
  - Tapping the notification or action button on the lockscreen opens/focuses the app, logs the bottle, and speaks motivational TTS speech!

### 🟢 Basic Features:
- **12 Authentic Poses**:
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

### 🟡 Intermediate Mechanics:
- **Starting Goal Scaling**: Day 1 initializes at **4 rounds**, scaling automatically by **+4/day** up to 108 rounds.
- **Start Button Goal Lock & 12:00 AM Midnight Unlock**:
  Upon completing today's target, the main Start button (`#main-btn`) locks (**`🔒 Goal Complete`**). Clicking the locked button notifies the user that tomorrow's goal unlocks at **12:00 AM Midnight**.
- **Custom Pace & Grace**: Adjust pose duration from **2s to 30s** with configurable grace periods.
- **Break & Recovery Triggers**:
  - *Break Interval*: Prompted every 12 sets (default configurable).
  - *Recovery Checkpoint*: Prompted every 400 all-time completed sets.

### 🔴 Advanced Algorithmic Implementation:
- **SVG Circular Progress Ring**:
  Calculated dynamically using exact circumference math:
  $$\text{CIRC} = 2 \times \pi \times 98 \approx 615.75$$
  $$\text{offset} = \text{CIRC} \times \left(1 - \frac{\text{step}}{12}\right)$$
- **Single-Threaded Speech Queue (`qSpeak`)**: Prevents audio race conditions across fast pace changes by queueing `SpeechSynthesisUtterance` items sequentially.
- **Screen WakeLock API**: Requests `navigator.wakeLock.request('screen')` during active sessions to prevent display sleep.

---

## 📜 Module 2: Bhagavad Gita Shloka & Daily Alarm Engine

Integrates daily spiritual reflection with automated morning wake-up alarms.

### 🟢 Basic Features:
- **Daily Rotating Shlokas**: Displays authentic Bhagavad Gita verses complete with Sanskrit text and multilingual translations (Hindi, Marathi, English).

### 🟡 Intermediate Mechanics:
- **Auto-Play Voice Alarm**: Triggering the morning alarm (default 5:00 AM) auto-plays the day's Gita Shloka in voice audio.
- **Interactive Snooze Engine**:
  - **5-Minute Snooze**: Reschedules alarm for +5 minutes.
  - **10-Minute Snooze**: Reschedules alarm for +10 minutes.
  - *Constraint*: Maximum **2 snoozes** permitted per alarm cycle to preserve discipline.

### 🔴 Advanced Algorithmic Implementation:
- **Alarm Scheduler (`scheduleAlarm`)**: Computes exact millisecond delta between `Date.now()` and target `alarmHour:alarmMinute`. Schedules `setTimeout` and updates countdown timers dynamically.
- **Midnight Rollover Handler (`scheduleMidnightRollover`)**: Evaluates date changes at 00:00:00, increments `programDay`, updates goal targets, and refreshes the day's Gita Shloka automatically.

---

## 🥗 Module 3: 7-Day Rotating Ayurvedic Diet & Hydration Engine

Provides verified (4.9+ star rated) professional Ayurvedic meal plans and hydration tracking tuned to daily physical output.

### 🟢 Basic Features:
- **3 Daily Ayurvedic Meals**:
  - *Pratah-Aahar* (Breakfast · 8:00 AM)
  - *Madhyanha-Aahar* (Lunch · 1:00 PM - Peak Digestive Agni)
  - *Ratri-Aahar* (Dinner · 7:30 PM - Light Agni)

### 🟡 Intermediate Mechanics:
- **7-Day Rotating Non-Repeating Menu (`AYURVEDIC_DIET_PLAN_7DAYS`)**: Offers 7 distinct daily menus for Breakfast, Lunch, and Dinner so recipes never repeat on consecutive days.
- **Dual Preference View**: Displays both **🌱 Vegetarian (Sattvic)** and **🍗 Non-Vegetarian** meal options with tab switchers (`Show Both`, `Veg Only`, `Non-Veg Only`).
- **Water Hydration Tracker**: Interactive `💧 +1 Glass` logger with progress bar based on total sets completed.
- **Post-Workout Auto-Popup**: Automatically opens `#diet-modal` upon finishing daily targets.

### 🔴 Advanced Algorithmic Implementation:
- **Day of Year Menu Indexing**:
  $$\text{dayOfYear} = \left\lfloor \frac{\text{now} - \text{startOfYear}}{1000 \times 60 \times 60 \times 24} \right\rfloor, \quad \text{dayIdx} = \text{dayOfYear} \pmod 7$$
- **Dynamic Hydration & Protein Formulas**:
  $$\text{waterLiters} = 2.5 + \left\lfloor \frac{\text{sets}}{4} \right\rfloor \times 0.05 \quad (\text{Liters})$$
  $$\text{proteinGrams} = 50 + \left\lfloor \frac{\text{sets}}{4} \right\rfloor \times 1.5 \quad (\text{Grams})$$
- **Single-Day OFF Auto-Reset Engine (`isDietReminderActiveToday`)**:
  When a user turns reminders OFF, the app sets `data.dietOffDate = todayKey()`. If `data.dietOffDate !== todayKey()`, the system **automatically resets reminders to ON** the following day!

---

## 🫁 Module 4: Guided Pranayama & Meditation Engine

Provides a structured 35-minute (35:00 / 2,100 seconds) guided breathwork and meditation routine following physical practice.

### 🟢 Basic Features:
- **8 Guided Practices**:
  1. *Dirgha Pranayama* (Three-Part Deep Breathing — 4s Inhale, 4s Hold, 8s Exhale / 1:1:2 classical ratio)
  2. *Kapalabhati* (Skull-Shining Purification / Shatkarma)
  3. *Bhastrika* (Bellows Breath)
  4. *Anulom-Vilom* (Alternate Nostril Balance)
  5. *Nadi Shodhana* (Classical Channel Purification 1:4:2 Ratio)
  6. *Ujjayi Pranayama* (Ocean / Psychic Breath)
  7. *Bhramari* (Humming Bee Breath)
  8. *Dhyana* (Silent Meditation)

### 🟡 Intermediate Mechanics:
- **Classical Yoga & Ayurvedic Standards Engine**:
  Provides an authentic 11-point Classical Yoga & Ayurveda breakdown for every practice based on *Hatha Yoga Pradipika*, *Gheranda Samhita*, and *Shiva Samhita*:
  1. Step-by-Step Practice Method
  2. Beginner, Intermediate & Advanced Inhale-Hold-Exhale Ratios
  3. Recommended Rounds & Duration
  4. Posture, Mudra & Eye Position
  5. Best Time & Empty Stomach Requirements
  6. Physical Health Benefits
  7. Mental & Emotional Benefits
  8. Ayurvedic Benefits (Vata, Pitta, Kapha, Agni, Prana)
  9. Chakra & Nadi Effects
  10. Precautions, Contraindications & Common Mistakes
  11. Progression Guidelines (Beginner → Advanced)
- **Relocated & Lockable UI Button**:
  The **"📖 Classical Yoga & Ayurvedic Guide"** button is positioned in the middle section right above round information. It unlocks (`🔓`) at the start of each Pranayama type and setup/pause, and locks (`🔒`) during active live round counting.
- **8-Practice Tab Navigation Bar**:
  Inside the modal, an interactive horizontal tab selector bar (`[1. Dirgha]`, `[2. Kapalabhati]`, `[3. Bhastrika]`, `[4. Anulom Vilom]`, `[5. Nadi Shodhana]`, `[6. Ujjayi]`, `[7. Bhramari]`, `[8. Dhyana]`) allows switching to inspect and listen to any of the 8 Pranayama practices separately.
- **Voice Audio Guidance & Round Freeze**:
  Tapping any practice tab loads the 11-point Classical Yoga & Ayurveda guide and reads it out loud. Background Pranayama rounds automatically freeze (`📖 Guide Speaking — Round Paused`) while the guide voice is speaking and resume when finished or closed.
- **Pranayama Step Timer Racing Fix Across All 8 Types**:
  Resolved duplicate callback scheduling and interval racing that caused Kapalabhati, Bhastrika, Anulom Vilom, Nadi Shodhana, Ujjayi, Bhramari, and Meditation to jump steps rapidly. `startStepExecution()` now invokes `clearPranaTimers()` upfront, and `speakPranaInstruction()` clears safety timeouts to guarantee that every single step across all 8 Pranayama types ticks steadily at 1 second per count without premature termination.
- **Strict Diet & Hydration Visibility Locking**:
  The **"Today's Ayurvedic Diet & Hydration"** section (`#card-view-diet-plan`) is completely hidden (`display: none`) from the main screen during incomplete practice and initial Pranayama execution. It appears (`display: flex`) strictly when:
  1. Today's goal AND the 8th/last type of Pranayama are finished (`endPranayama()`), OR
  2. The user skips/closes the Pranayama session (`closePranayama()`).

### 🔴 Advanced Algorithmic Implementation:
- **Step Timer State Machine (`startPranaPhase`, `endPranayama`)**: Uses precise interval ticks (`pranaTimer`) to update elapsed phase time (`pranaPhaseElapsedMs`) and total time (`data.totalPranaMs`).

---

## 🌞 Module 5: Daytime Relationship-Building Notifications

Schedules periodic, encouraging notifications throughout the daytime to build habit consistency.

### 🟢 Basic Features:
- **3 Scheduled Daytime Intervals**: Morning (8:30 AM), Afternoon (1:30 PM), and Evening (6:30 PM).

### 🟡 Intermediate Mechanics:
- **Playful & Empathetic Styles**: Tailors messaging based on whether today's target is complete, in progress, or skipped yesterday.
- **Name-Personalized TTS**: Tapping a notification opens the app and auto-plays voice greeting with the user's name.

### 🔴 Advanced Algorithmic Implementation:
- **Browser Notification API Sync**: Requests permission (`Notification.requestPermission`) and triggers system notification alerts (`new Notification(...)`) with custom vibration patterns `[200, 100, 200]`.

---

## 👑 Module 6: PRO Subscription & Data Preservation Engine

Manages PRO plan feature access while safeguarding active subscriptions during resets.

### 🟢 Basic Features:
- **Trial & Premium Tracking**: Calculates free trial elapsed days (7-day trial) and displays premium status tags.

### 🟡 Intermediate Mechanics:
- **Selective Data Reset**: Resets practice counts and history logs without losing active subscription state.

### 🔴 Advanced Algorithmic Implementation:
- **Subscription State Preservation Algorithm**:
  ```javascript
  const preservedSub = {
    isPremium      : data.isPremium || false,
    subSku         : data.subSku || "",
    subDate        : data.subDate || "",
    trialStartDate : data.trialStartDate || ""
  };
  // Re-inject preservedSub after resetting practice history object
  data.isPremium = preservedSub.isPremium;
  ```

---

## 📊 Module 7: Analytics, Data Persistence & Offline PWA Architecture

### 🟢 Basic Features:
- **Stats Dashboard**: Displays Today's Sets, Target Goal, Current Streak, Total All-Time Sets, Today's Calorie Burn, and Total Calorie Burn.

### 🟡 Intermediate Mechanics:
- **Interactive Chart Views**: Switchable 7-day, 14-day, and 21-day bar charts rendered via native DOM elements.

### 🔴 Advanced Algorithmic Implementation:
- **Calorie Estimation Formula**:
  $$\text{Calories Burned} = \text{Completed Sets} \times 13.9 \quad (\text{kcal})$$
- **Cache-First PWA Service Worker (`sw.js`)**:
  Intercepts `fetch` events, serving cached assets from `surya-v36` cache storage first, ensuring 100% offline functionality.

---

## 📱 Comprehensive User Guide (Basic to Advanced Usage)

### 1. Daily Surya Namaskara Practice Workflow
1. Launch the app and tap **▶ Start**.
2. Follow the animated pose card, visual ring countdown, and spoken instructions.
3. Tap **Pace +** or **Pace -** to adjust pose duration (default: 5 seconds).
4. Tap **⏸ Pause** to pause practice or **⏹ Reset** to start over.

### 2. Viewing & Managing Today's Ayurvedic Diet
1. Tap **"View Plan"** on the home screen banner or open **Settings -> 🥗 View Today's Plan**.
2. Review your full-day plan (Breakfast, Lunch, Dinner, Water Target).
3. Filter options using **Show Both**, **🌱 Veg Only**, or **🍗 Non-Veg Only**.
4. Log water glasses by tapping **💧 +1 Glass**.
5. Listen to voice recommendations by tapping **🔊 Listen Personalized Voice Advice**.

### 3. Managing Auto-Reminders & Single-Day OFF Feature
1. Open the **View Plan** modal or **Settings** drawer.
2. Toggle **Meal Reminders**, **Water Reminders**, or **Auto-Show Diet Card**.
3. *Note*: Turning reminders OFF applies **for today only**. Tomorrow, reminders automatically reset to **ON**.

---

## 🛠️ Technical API Reference & Codebase Map

### Core Data Models (`app.js`)

```typescript
interface AppConfig {
  programName: string;          // "SURYA SARATHI - 108"
  dailyIncrease: number;        // Goal increase per day (+4)
  maxSets: number;              // Target cap (108)
  breakEvery: number;           // Break interval (12)
  poseSeconds: number;          // Pose duration (2-30s)
  graceSeconds: number;         // Grace duration
  alarmHour: number;            // Alarm hour (0-23)
  alarmMinute: number;          // Alarm minute (0-59)
  quoteLang: string;            // "hi" | "mr" | "en"
  userName: string;             // User's preferred name
  dietType: string;             // "veg" | "nonveg"
  dietNotifOn: boolean;         // Global reminder flag
  autoShowDietPostGoal: boolean;// Auto popup toggle
}

interface AppData {
  history: Record<string, { sets: number; timeMs: number; goal: number; pranaMs?: number }>;
  totalAllTime: number;
  programDay: number;
  isPremium: boolean;
  dietOffDate?: string;         // "YYYY-MM-DD" date when user muted reminders
  waterLogs?: Record<string, number>;
}
```

### Primary Window Exports (`window.*`)
- `window.showDietModal(mealType)`: Opens full-day diet plan window.
- `window.closeDietModal()`: Closes diet plan window.
- `window.switchDietTab(mode)`: Switches meal view filter (`both` | `veg` | `nonveg`).
- `window.toggleModalReminder(type)`: Toggles reminder switches inside modal.
- `window.logWaterGlass()`: Increments today's water glass log count.

---

## 📜 License & Credits

Designed and engineered for Health, Mindfulness, and Ayurvedic Wellness.  
**SURYA SARATHI - 108 | सूर्यसारथी - १०८**
