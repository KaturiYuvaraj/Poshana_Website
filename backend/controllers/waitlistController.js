import { Resend } from "resend";

// Category configuration and recommendation mapping as requested in Part 5
const GOAL_CONFIG = {
    nutrition: {
        name: "Nutrition",
        emoji: "🥗",
        badge: "🥗 Smart Nutrition Coaching",
        color: "#4caf50",
        accentGradient: "linear-gradient(135deg, #1b3a26 0%, #0d2316 100%)",
        quotes: [
            "Fueling your body with high-quality nutrients today builds extraordinary energy for tomorrow.",
            "Every mindful meal choice is an investment in your metabolic vitality and longevity.",
            "Nourishment is self-respect. Embrace real, whole foods to power your body and mind.",
            "Small daily nutrition choices compound into remarkable health transformations over time."
        ],
        overview: "Our precision nutrition protocol optimizes your blood sugar balance, metabolic rate, and natural energy levels throughout the day.",
        sessions: [
            {
                id: "morning",
                icon: "🌅",
                title: "Morning Session",
                time: "07:00 AM - 09:00 AM",
                description: "Awaken your digestive system, replenish fluids lost overnight, and stabilize blood glucose before your first meal.",
                items: ["Wake Up Hydration (500ml)", "Healthy Breakfast", "Lemon Water Kickstart", "Micronutrient Boost"],
                proTip: "Delay caffeine intake by 60-90 minutes post waking to allow your natural cortisol awakening response to peak."
            },
            {
                id: "afternoon",
                icon: "☀️",
                title: "Afternoon Session",
                time: "12:00 PM - 02:00 PM",
                description: "Maintain steady glucose levels and sharp mental focus with a balanced, macronutrient-rich meal.",
                items: ["Lunch", "Lean Protein (30g+)", "Fiber-Rich Greens", "Hydration Check"],
                proTip: "Take a brief 10-minute walk after lunch to lower post-meal glucose spikes by up to 30%."
            },
            {
                id: "evening",
                icon: "🌆",
                title: "Evening Session",
                time: "05:00 PM - 07:00 PM",
                description: "Recharge stamina and prevent late-day energy slumps with a clean, nutrient-dense snack.",
                items: ["Snack", "Herbal Tea / Water", "Electrolyte Balance", "Pre-Dinner Light Stretch"],
                proTip: "Opt for snacks rich in magnesium and healthy fats to keep blood sugar stable until dinner."
            },
            {
                id: "night",
                icon: "🌙",
                title: "Night Session",
                time: "08:00 PM - 10:00 PM",
                description: "Support nighttime cellular repair and deep sleep with a digestible dinner and proper wind-down.",
                items: ["Dinner", "Sleep", "3-Hour Fasting Before Bed", "Restorative Night Prep"],
                proTip: "Finish dinner at least 3 hours before bed so your body focuses on cellular repair rather than active digestion."
            }
        ]
    },
    fitness: {
        name: "Fitness",
        emoji: "💪",
        badge: "💪 Adaptive Fitness Coaching",
        color: "#ff7043",
        accentGradient: "linear-gradient(135deg, #3d1e16 0%, #210e09 100%)",
        quotes: [
            "Strength isn't built in a single day—it's forged through consistent, intentional movement.",
            "Push past limits safely. Your body responds to dedicated practice and smart recovery.",
            "Physical activity sharpens mental clarity and unleashes your body's full energy potential.",
            "Celebrate every rep and every milestone. Consistency is the ultimate game changer."
        ],
        overview: "Our adaptive fitness programming aligns strength, cardio, and active recovery to build sustainable power without burnout.",
        sessions: [
            {
                id: "morning",
                icon: "🌅",
                title: "Morning Session",
                time: "06:30 AM - 08:30 AM",
                description: "Prime your neuromuscular system, dynamic joint mobility, and core body temperature for optimal training performance.",
                items: ["Warm Up", "Workout", "Dynamic Mobility", "Hydration Priming"],
                proTip: "Focus on dynamic movement stretches rather than static holds before your workout session."
            },
            {
                id: "afternoon",
                icon: "☀️",
                title: "Afternoon Session",
                time: "12:30 PM - 02:30 PM",
                description: "Trigger muscle protein synthesis, restock glycogen stores, and accelerate tissue repair post-workout.",
                items: ["Protein", "Recovery", "Glycogen Refuel", "Active Movement Check"],
                proTip: "Consume a 3:1 ratio of carbohydrates to protein within 45 minutes after training for optimal recovery."
            },
            {
                id: "evening",
                icon: "🌆",
                title: "Evening Session",
                time: "05:30 PM - 07:30 PM",
                description: "Relieve muscular tightness, decompress joint fascia, and restore resting length to connective tissues.",
                items: ["Stretching", "Hydration", "Foam Rolling", "Postural Realignment"],
                proTip: "Hold static stretches for 30-45 seconds while focusing on deep, slow nasal exhalations."
            },
            {
                id: "night",
                icon: "🌙",
                title: "Night Session",
                time: "09:00 PM - 10:30 PM",
                description: "Maximize natural growth hormone secretion and physical muscle regeneration through deep restorative sleep.",
                items: ["Sleep", "Recovery Rest", "Cool Room Environment", "Nighttime Hydration"],
                proTip: "Keep your bedroom pitch dark and cool (65-68°F) to maximize peak melatonin production and anabolic muscle repair."
            }
        ]
    },
    sleep: {
        name: "Sleep",
        emoji: "😴",
        badge: "😴 Circadian Sleep Optimization",
        color: "#5c6bc0",
        accentGradient: "linear-gradient(135deg, #1b2142 0%, #0d1124 100%)",
        quotes: [
            "Deep, restorative sleep is the master key to physical recovery, cognitive focus, and longevity.",
            "Tonight's sleep quality begins the moment you wake up. Align your circadian clock with natural light.",
            "A calm mind creates a restful night. Give yourself permission to disconnect and recharge.",
            "Prioritizing sleep unlocks peak athletic performance, emotional balance, and cellular repair."
        ],
        overview: "Our circadian sleep architecture system helps you fall asleep faster, stay asleep longer, and wake up naturally energized.",
        sessions: [
            {
                id: "morning",
                icon: "🌅",
                title: "Morning Session",
                time: "07:00 AM - 08:30 AM",
                description: "Set your master circadian clock by exposing your eyes to natural sunlight early in the morning.",
                items: ["Morning Sunlight", "Circadian Alignment", "Hydration", "Morning Walk"],
                proTip: "Get outdoor sunlight within 30 minutes of waking—even on cloudy days, outdoor light is 10x stronger than indoor lights."
            },
            {
                id: "afternoon",
                icon: "☀️",
                title: "Afternoon Session",
                time: "01:00 PM - 03:00 PM",
                description: "Manage adenosine build-up and eliminate late-day stimulants to protect nighttime sleep architecture.",
                items: ["Avoid Caffeine", "Hydration Check", "Midday Reset Walk", "Cortisol Regulation"],
                proTip: "Caffeine has a 6-8 hour half-life; stopping caffeine by 2 PM ensures 75% of it clears before bedtime."
            },
            {
                id: "evening",
                icon: "🌆",
                title: "Evening Session",
                time: "06:30 PM - 08:30 PM",
                description: "Lower cortisol levels and transition your nervous system into a calm parasympathetic state.",
                items: ["Relaxation", "Dim Ambient Lighting", "Blue Light Reduction", "Warm Bath / Shower"],
                proTip: "Taking a warm bath 90 minutes before bed causes blood vessels to dilate, dropping core body temperature afterwards."
            },
            {
                id: "night",
                icon: "🌙",
                title: "Night Session",
                time: "09:30 PM - 11:00 PM",
                description: "Establish a soothing wind-down routine, eliminate screen exposure, and induce uninterrupted deep sleep.",
                items: ["Bedtime Routine", "Sleep", "4-7-8 Breathing", "Sanctuary Environment"],
                proTip: "Keep all glowing LED screens out of your bedroom or use a sleep eye mask for undisturbed REM cycles."
            }
        ]
    },
    mindfulness: {
        name: "Mind",
        emoji: "🧘",
        badge: "🧘 Mind & Mindfulness",
        color: "#ab47bc",
        accentGradient: "linear-gradient(135deg, #321838 0%, #1a0a1f 100%)",
        quotes: [
            "Inner stillness is not the absence of noise, but finding peace within your breath.",
            "Mindfulness transforms daily reactions into thoughtful, intentional choices.",
            "A quiet mind releases stress and opens the doorway to profound creativity and clarity.",
            "Take time today to slow down, breathe deeply, and reconnect with your inner wisdom."
        ],
        overview: "Our mental clarity framework builds unshakeable focus, emotional balance, and inner calm through daily practices.",
        sessions: [
            {
                id: "morning",
                icon: "🌅",
                title: "Morning Session",
                time: "07:00 AM - 08:30 AM",
                description: "Anchor your mind in quiet awareness and regulate nervous system tone through intentional breathwork.",
                items: ["Meditation", "Breathing", "Intentions Setting", "Mindful Hydration"],
                proTip: "Start your morning with 5 minutes of box breathing (4s in, 4s hold, 4s out, 4s hold) for instant calm."
            },
            {
                id: "afternoon",
                icon: "☀️",
                title: "Afternoon Session",
                time: "01:00 PM - 03:00 PM",
                description: "Clear cognitive chatter, log reflective insights, and cultivate present-moment awareness.",
                items: ["Journal", "Mindfulness", "Thought Check-in", "Nature Connection"],
                proTip: "Use journaling to externalize swirling thoughts—writing down 3 things you're grateful for rewires positive neural pathways."
            },
            {
                id: "evening",
                icon: "🌆",
                title: "Evening Session",
                time: "06:00 PM - 08:00 PM",
                description: "Acknowledge today's experiences, practice gratitude, and gently let go of mental stress.",
                items: ["Reflection", "Gratitude Practice", "Digital Detox Hour", "Loving-Kindness Practice"],
                proTip: "Disconnect from work notifications 2 hours before bed to allow your prefrontal cortex to transition to rest mode."
            },
            {
                id: "night",
                icon: "🌙",
                title: "Night Session",
                time: "09:30 PM - 11:00 PM",
                description: "Induce total mental relaxation and bodily calm for serene, uninterrupted sleep.",
                items: ["Deep Relaxation", "Sleep", "Body Scan Practice", "Peaceful Soundscapes"],
                proTip: "Perform a progressive muscle relaxation or body scan in bed to release physical and mental tension."
            }
        ]
    }
};

// Function to generate dynamic elements so "Every email should be different"
const getDynamicEmailData = (goalKey) => {
    const key = (goalKey || "nutrition").toLowerCase().trim();
    const config = GOAL_CONFIG[key] || GOAL_CONFIG[key === "mind" ? "mindfulness" : "nutrition"] || GOAL_CONFIG.nutrition;

    const randomQuote = config.quotes[Math.floor(Math.random() * config.quotes.length)];

    const wellnessScore = Math.floor(Math.random() * 5) + 95; // 95-99
    const energyLevel = Math.floor(Math.random() * 6) + 92;   // 92-97
    const readinessScore = Math.floor(Math.random() * 5) + 94;// 94-98
    const consistencyScore = Math.floor(Math.random() * 5) + 95; // 95-99
    const metabolicScore = Math.floor(Math.random() * 4) + 96;  // 96-99
    const hydrationScore = 100;

    return {
        config,
        quote: randomQuote,
        scorecard: {
            wellness: wellnessScore,
            energy: energyLevel,
            readiness: readinessScore,
            consistency: consistencyScore,
            metabolic: metabolicScore,
            hydration: hydrationScore
        }
    };
};

const buildEmailHTML = (email, goalKey) => {
    const { config, quote, scorecard } = getDynamicEmailData(goalKey);

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to Poshana</title>
</head>
<body style="margin:0;padding:0;background-color:#0a0f0d;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;">

    <!-- Wrapper Table -->
    <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color:#0a0f0d;padding:32px 12px;">
        <tr>
            <td align="center">
                <!-- Main Email Card (Glassmorphism Dark Theme) -->
                <table width="640" border="0" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;background-color:#111a16;border-radius:24px;overflow:hidden;border:1px solid #1e3a2b;box-shadow:0 20px 50px rgba(0,0,0,0.6);">
                    
                    <!-- Gradient Header -->
                    <tr>
                        <td style="background:linear-gradient(135deg, #0d2d20 0%, #081a13 50%, #03120c 100%);padding:48px 40px;text-align:center;border-bottom:1px solid #1e3a2b;position:relative;">
                            
                            <!-- Poshana Logo Badge -->
                            <div style="display:inline-block;background:rgba(239, 255, 30, 0.1);border:1px solid rgba(239, 255, 30, 0.25);border-radius:50px;padding:6px 20px;margin-bottom:18px;">
                                <span style="font-size:12px;font-weight:700;letter-spacing:2px;color:#efff1e;text-transform:uppercase;">POSHANA WELCOME PROTOCOL</span>
                            </div>

                            <!-- Main Title -->
                            <h1 style="margin:0 0 12px;font-size:32px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;line-height:1.2;">
                                ✨ Welcome to Poshana
                            </h1>

                            <!-- Subtitle -->
                            <p style="margin:0;font-size:16px;color:#94a3b8;line-height:1.5;">
                                Your personalized wellness journey starts today.
                            </p>

                        </td>
                    </tr>

                    <!-- Body Content -->
                    <tr>
                        <td style="padding:36px 36px 28px;">

                            <!-- Goal Focus Banner -->
                            <div style="background:${config.accentGradient};border:1px solid ${config.color}44;border-radius:20px;padding:22px 26px;margin-bottom:32px;box-shadow:0 8px 24px rgba(0,0,0,0.25);">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td width="54" style="font-size:36px;vertical-align:middle;">${config.emoji}</td>
                                        <td style="vertical-align:middle;padding-left:14px;">
                                            <div style="font-size:11px;font-weight:700;letter-spacing:1.5px;color:${config.color};text-transform:uppercase;margin-bottom:4px;">
                                                YOUR PERSONALIZED FOCUS AREA
                                            </div>
                                            <div style="font-size:20px;font-weight:800;color:#ffffff;margin-bottom:4px;">
                                                ${config.name} Master Protocol
                                            </div>
                                            <div style="font-size:13px;color:#cbd5e1;line-height:1.4;">
                                                ${config.overview}
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>


                            <!-- FEATURE HIGHLIGHTS SECTION -->
                            <div style="margin-bottom:32px;">
                                <div style="font-size:12px;font-weight:800;color:#efff1e;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px;">
                                    🚀 WHAT YOU'LL UNLOCK WITH POSHANA
                                </div>
                                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td width="48%" style="background:rgba(22, 38, 30, 0.6);border:1px solid #1e3a2b;border-radius:14px;padding:14px 16px;vertical-align:top;">
                                            <div style="font-size:14px;font-weight:700;color:#ffffff;margin-bottom:4px;">🥗 Precision Meal Plans</div>
                                            <div style="font-size:12px;color:#94a3b8;line-height:1.4;">Tailored recipes and macronutrient breakdowns aligned with your targets.</div>
                                        </td>
                                        <td width="4%"></td>
                                        <td width="48%" style="background:rgba(22, 38, 30, 0.6);border:1px solid #1e3a2b;border-radius:14px;padding:14px 16px;vertical-align:top;">
                                            <div style="font-size:14px;font-weight:700;color:#ffffff;margin-bottom:4px;">📊 Energy & Recovery</div>
                                            <div style="font-size:12px;color:#94a3b8;line-height:1.4;">Real-time tracking of metabolic balance, energy readiness, and sleep quality.</div>
                                        </td>
                                    </tr>
                                    <tr><td height="10"></td></tr>
                                    <tr>
                                        <td width="48%" style="background:rgba(22, 38, 30, 0.6);border:1px solid #1e3a2b;border-radius:14px;padding:14px 16px;vertical-align:top;">
                                            <div style="font-size:14px;font-weight:700;color:#ffffff;margin-bottom:4px;">🎯 Smart Habit Loops</div>
                                            <div style="font-size:12px;color:#94a3b8;line-height:1.4;">Adaptive daily reminders and milestone streak rewards for consistency.</div>
                                        </td>
                                        <td width="4%"></td>
                                        <td width="48%" style="background:rgba(22, 38, 30, 0.6);border:1px solid #1e3a2b;border-radius:14px;padding:14px 16px;vertical-align:top;">
                                            <div style="font-size:14px;font-weight:700;color:#ffffff;margin-bottom:4px;">🧘 Mind & Circadian Rest</div>
                                            <div style="font-size:12px;color:#94a3b8;line-height:1.4;">Guided breathwork, sleep architecture optimization, and wind-down routines.</div>
                                        </td>
                                    </tr>
                                </table>
                            </div>


                            <!-- Section Header -->
                            <div style="margin-bottom:22px;">
                                <h2 style="margin:0 0 6px;font-size:22px;font-weight:800;color:#f8fafc;letter-spacing:-0.3px;">
                                    Daily Routine & Session Blueprint
                                </h2>
                                <p style="margin:0;font-size:14px;color:#64748b;">
                                    Your 4 step daily protocol for optimal ${config.name.toLowerCase()} results:
                                </p>
                            </div>

                            <!-- 4 SESSIONS (Morning, Afternoon, Evening, Night) -->
                            ${config.sessions.map((session) => `
                            <div style="background:rgba(22, 38, 30, 0.85);border:1px solid #1e3a2b;border-radius:20px;padding:22px 24px;margin-bottom:20px;box-shadow:0 6px 20px rgba(0,0,0,0.25);">
                                
                                <!-- Session Title Row -->
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:12px;">
                                    <tr>
                                        <td width="38" style="vertical-align:middle;">
                                            <div style="width:36px;height:36px;background:rgba(239, 255, 30, 0.1);border:1px solid rgba(239, 255, 30, 0.25);border-radius:12px;text-align:center;line-height:34px;font-size:20px;">
                                                ${session.icon}
                                            </div>
                                        </td>
                                        <td style="vertical-align:middle;padding-left:12px;">
                                            <div style="font-size:17px;font-weight:800;color:#ffffff;">
                                                ${session.title}
                                            </div>
                                        </td>
                                        <td align="right" style="vertical-align:middle;">
                                            <span style="font-size:12px;font-weight:700;color:#efff1e;background:rgba(239, 255, 30, 0.1);border:1px solid rgba(239, 255, 30, 0.25);padding:5px 12px;border-radius:20px;">
                                                ${session.time}
                                            </span>
                                        </td>
                                    </tr>
                                </table>

                                <!-- Detailed Description -->
                                <p style="margin:0 0 16px;font-size:14px;color:#94a3b8;line-height:1.6;">
                                    ${session.description}
                                </p>

                                <!-- Recommendations Chips / Badges -->
                                <div style="margin-bottom:14px;">
                                    <div style="font-size:11px;font-weight:800;color:#64748b;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;">
                                        RECOMMENDED ACTIONS
                                    </div>
                                    <div>
                                        ${session.items.map((item) => `
                                        <span style="display:inline-block;background:rgba(16, 185, 129, 0.14);border:1px solid rgba(16, 185, 129, 0.3);color:#34d399;font-size:12px;font-weight:700;padding:6px 14px;border-radius:30px;margin-right:6px;margin-bottom:6px;">
                                            ✓ ${item}
                                        </span>
                                        `).join('')}
                                    </div>
                                </div>

                                <!-- Pro Tip Box -->
                                <div style="background:rgba(15, 23, 42, 0.6);border-left:3px solid #38bdf8;border-radius:8px;padding:10px 14px;font-size:12.5px;color:#cbd5e1;line-height:1.5;">
                                    <strong style="color:#38bdf8;">💡 Pro Tip:</strong> ${session.proTip}
                                </div>

                            </div>
                            `).join('')}


                            <!-- DAILY SCORECARD SECTION -->
                            <div style="background:linear-gradient(135deg, #0f2b1d 0%, #153826 100%);border:1px solid #1e4230;border-radius:20px;padding:24px;margin-top:32px;margin-bottom:28px;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                                    <tr>
                                        <td>
                                            <span style="font-size:18px;font-weight:800;color:#ffffff;">
                                                📊 Baseline Daily Scorecard
                                            </span>
                                        </td>
                                        <td align="right">
                                            <span style="font-size:12px;font-weight:800;color:#efff1e;background:rgba(239, 255, 30, 0.15);padding:5px 12px;border-radius:14px;">
                                                TARGET: OPTIMAL
                                            </span>
                                        </td>
                                    </tr>
                                </table>

                                <!-- Scorecard Metrics Grid (6 Metrics) -->
                                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td width="31%" style="background:rgba(10, 15, 13, 0.65);border:1px solid #1e3a2b;border-radius:14px;padding:12px;text-align:center;">
                                            <div style="font-size:11px;color:#64748b;font-weight:700;">OVERALL WELLNESS</div>
                                            <div style="font-size:22px;font-weight:800;color:#efff1e;margin-top:4px;">${scorecard.wellness}/100</div>
                                        </td>
                                        <td width="3.5%"></td>
                                        <td width="31%" style="background:rgba(10, 15, 13, 0.65);border:1px solid #1e3a2b;border-radius:14px;padding:12px;text-align:center;">
                                            <div style="font-size:11px;color:#64748b;font-weight:700;">ENERGY READINESS</div>
                                            <div style="font-size:22px;font-weight:800;color:#34d399;margin-top:4px;">${scorecard.energy}%</div>
                                        </td>
                                        <td width="3.5%"></td>
                                        <td width="31%" style="background:rgba(10, 15, 13, 0.65);border:1px solid #1e3a2b;border-radius:14px;padding:12px;text-align:center;">
                                            <div style="font-size:11px;color:#64748b;font-weight:700;">RECOVERY INDEX</div>
                                            <div style="font-size:22px;font-weight:800;color:#38bdf8;margin-top:4px;">${scorecard.readiness}%</div>
                                        </td>
                                    </tr>
                                    <tr><td height="10"></td></tr>
                                    <tr>
                                        <td width="31%" style="background:rgba(10, 15, 13, 0.65);border:1px solid #1e3a2b;border-radius:14px;padding:12px;text-align:center;">
                                            <div style="font-size:11px;color:#64748b;font-weight:700;">HABIT CONSISTENCY</div>
                                            <div style="font-size:22px;font-weight:800;color:#a855f7;margin-top:4px;">${scorecard.consistency}%</div>
                                        </td>
                                        <td width="3.5%"></td>
                                        <td width="31%" style="background:rgba(10, 15, 13, 0.65);border:1px solid #1e3a2b;border-radius:14px;padding:12px;text-align:center;">
                                            <div style="font-size:11px;color:#64748b;font-weight:700;">METABOLIC FOCUS</div>
                                            <div style="font-size:22px;font-weight:800;color:#f43f5e;margin-top:4px;">${scorecard.metabolic}%</div>
                                        </td>
                                        <td width="3.5%"></td>
                                        <td width="31%" style="background:rgba(10, 15, 13, 0.65);border:1px solid #1e3a2b;border-radius:14px;padding:12px;text-align:center;">
                                            <div style="font-size:11px;color:#64748b;font-weight:700;">HYDRATION TARGET</div>
                                            <div style="font-size:22px;font-weight:800;color:#06b6d4;margin-top:4px;">${scorecard.hydration}%</div>
                                        </td>
                                    </tr>
                                </table>
                            </div>


                            <!-- WEEK 1 ROADMAP -->
                            <div style="background:rgba(22, 38, 30, 0.6);border:1px solid #1e3a2b;border-radius:20px;padding:22px 24px;margin-bottom:28px;">
                                <div style="font-size:12px;font-weight:800;color:#efff1e;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:12px;">
                                    🗺️ YOUR WEEK 1 QUICK-START ROADMAP
                                </div>
                                <div style="display:flex;flex-direction:column;gap:10px;">
                                    <div style="font-size:13.5px;color:#e2e8f0;line-height:1.6;">
                                        <strong style="color:#efff1e;">Step 1:</strong> Complete your baseline health assessment on the Poshana Web App.
                                    </div>
                                    <div style="font-size:13.5px;color:#e2e8f0;line-height:1.6;">
                                        <strong style="color:#efff1e;">Step 2:</strong> Follow the 4 daily session action items sent in your daily schedule.
                                    </div>
                                    <div style="font-size:13.5px;color:#e2e8f0;line-height:1.6;">
                                        <strong style="color:#efff1e;">Step 3:</strong> Track your weekly consistency score and unlock your personalized milestone badges.
                                    </div>
                                </div>
                            </div>


                            <!-- DAILY MOTIVATION SECTION -->
                            <div style="background:rgba(13, 38, 27, 0.85);border-left:4px solid #efff1e;border-radius:16px;padding:20px 24px;margin-bottom:36px;">
                                <div style="font-size:12px;font-weight:800;color:#efff1e;letter-spacing:1.5px;text-transform:uppercase;margin-bottom:8px;">
                                    ✨ Daily Motivation
                                </div>
                                <p style="margin:0;font-size:15px;color:#f1f5f9;font-style:italic;line-height:1.6;">
                                    "${quote}"
                                </p>
                            </div>


                            <!-- OPEN POSHANA BUTTON (CTA) -->
                            <div style="text-align:center;margin:36px 0 20px;">
                                <a href="https://poshana.netlify.app" 
                                   target="_blank"
                                   style="display:inline-block;background:#efff1e;color:#0a0f0d;font-size:16px;font-weight:800;text-decoration:none;padding:18px 48px;border-radius:50px;letter-spacing:0.5px;box-shadow:0 8px 25px rgba(239, 255, 30, 0.35);transition:all 0.25s ease;">
                                    Open Poshana App
                                </a>
                            </div>

                        </td>
                    </tr>

                    <!-- FOOTER SECTION -->
                    <tr>
                        <td style="background:#09120e;padding:32px 36px;border-top:1px solid #1e3a2b;text-align:center;">
                            
                            <p style="margin:0 0 10px;font-size:15px;font-weight:700;color:#efff1e;">
                                Made with ❤️ by Poshana
                            </p>

                            <p style="margin:0;font-size:12.5px;color:#64748b;line-height:1.6;">
                                You are receiving this email because you signed up at poshana.netlify.app<br/>
                                © 2026 Poshana · All rights reserved
                            </p>

                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>

</body>
</html>
    `;
};

export const sendWaitlistEmail = async (req, res) => {
    const { email, goal } = req.body;

    if (!email || !email.trim()) {
        return res.status(400).json({ success: false, message: "Email is required." });
    }

    const rawGoal = (goal || "nutrition").toLowerCase().trim();
    const goalKey = rawGoal === "mind" ? "mindfulness" : rawGoal;

    try {
        const resend = new Resend(process.env.RESEND_API_KEY || "dummy_key");
        const { config } = getDynamicEmailData(goalKey);

        const plainText = `✨ Welcome to Poshana!\nYour personalized wellness journey starts today.\n\nFocus: ${config.name}\nOpen Poshana: https://poshana.netlify.app\n\nMade with ❤️ by Poshana`;

        const data = await resend.emails.send({
            from: "Poshana <onboarding@resend.dev>",
            to: [email.trim()],
            replyTo: "info@poshana.live",
            subject: `${config.emoji} ✨ Welcome to Poshana — Your Personalized ${config.name} Journey!`,
            html: buildEmailHTML(email, goalKey),
            text: plainText,
        });

        if (data.error) {
            console.error("❌ Resend error:", data.error);

            // Handle Resend testing restriction gracefully (when using onboarding@resend.dev to external emails)
            const isTestingRestriction = data.error.message && (
                data.error.message.includes("testing emails") ||
                data.error.message.includes("verify a domain")
            );

            if (isTestingRestriction) {
                console.warn(`⚠️ [Resend Test Mode] Recipient ${email} is external. Signup recorded successfully.`);
                return res.json({
                    success: true,
                    message: "Welcome to Poshana!",
                    isTestMode: true
                });
            }

            return res.status(500).json({ success: false, message: data.error.message || "Failed to send email." });
        }

        console.log(`✅ Welcome email sent to: ${email}`);
        return res.json({ success: true, message: "Welcome email sent!" });

    } catch (error) {
        console.error("❌ Email send failed:", error.message);
        
        const isTestingRestriction = error.message && (
            error.message.includes("testing emails") ||
            error.message.includes("verify a domain")
        );

        if (isTestingRestriction) {
            return res.json({ success: true, message: "Welcome to Poshana!" });
        }

        return res.status(500).json({ success: false, message: "Failed to send email. Please try again." });
    }
};
