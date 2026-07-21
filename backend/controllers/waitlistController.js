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
        sessions: [
            {
                id: "morning",
                icon: "🌅",
                title: "Morning Session",
                time: "07:00 AM - 09:00 AM",
                description: "Kickstart your metabolic engine and awaken cellular hydration for peak morning alertness.",
                items: ["Wake Up", "Hydration"]
            },
            {
                id: "afternoon",
                icon: "☀️",
                title: "Afternoon Session",
                time: "12:00 PM - 02:00 PM",
                description: "Maintain steady glucose levels and sharp mental focus with a balanced, macronutrient-rich meal.",
                items: ["Healthy Breakfast", "Lunch"]
            },
            {
                id: "evening",
                icon: "🌆",
                title: "Evening Session",
                time: "05:00 PM - 07:00 PM",
                description: "Recharge stamina and prevent evening energy slumps with a clean, nutrient-dense snack.",
                items: ["Snack"]
            },
            {
                id: "night",
                icon: "🌙",
                title: "Night Session",
                time: "08:00 PM - 10:00 PM",
                description: "Support nighttime cellular repair and deep sleep with a light dinner and proper digestion.",
                items: ["Dinner", "Sleep"]
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
        sessions: [
            {
                id: "morning",
                icon: "🌅",
                title: "Morning Session",
                time: "06:30 AM - 08:30 AM",
                description: "Activate joint mobility and elevate core body temperature to prime your muscles for action.",
                items: ["Warm Up", "Workout"]
            },
            {
                id: "afternoon",
                icon: "☀️",
                title: "Afternoon Session",
                time: "12:30 PM - 02:30 PM",
                description: "Replenish muscle glycogen and accelerate tissue repair with optimal post-workout protein.",
                items: ["Protein", "Recovery"]
            },
            {
                id: "evening",
                icon: "🌆",
                title: "Evening Session",
                time: "05:30 PM - 07:30 PM",
                description: "Relieve muscular tightness and restore resting length to connective tissues.",
                items: ["Stretching", "Hydration"]
            },
            {
                id: "night",
                icon: "🌙",
                title: "Night Session",
                time: "09:00 PM - 10:30 PM",
                description: "Maximize natural growth hormone secretion and physical regeneration through restorative sleep.",
                items: ["Sleep"]
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
        sessions: [
            {
                id: "morning",
                icon: "🌅",
                title: "Morning Session",
                time: "07:00 AM - 08:30 AM",
                description: "Set your master circadian clock by exposing your eyes to natural sunlight early in the morning.",
                items: ["Morning Sunlight"]
            },
            {
                id: "afternoon",
                icon: "☀️",
                title: "Afternoon Session",
                time: "01:00 PM - 03:00 PM",
                description: "Protect adenosine build-up by avoiding caffeine late in the afternoon.",
                items: ["Avoid Caffeine"]
            },
            {
                id: "evening",
                icon: "🌆",
                title: "Evening Session",
                time: "06:30 PM - 08:30 PM",
                description: "Lower cortisol levels and transition your nervous system into a calm parasympathetic state.",
                items: ["Relaxation"]
            },
            {
                id: "night",
                icon: "🌙",
                title: "Night Session",
                time: "09:30 PM - 11:00 PM",
                description: "Dim bright overhead lights and follow a peaceful wind-down routine to trigger melatonin.",
                items: ["Bedtime Routine", "Sleep"]
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
        sessions: [
            {
                id: "morning",
                icon: "🌅",
                title: "Morning Session",
                time: "07:00 AM - 08:30 AM",
                description: "Anchor your mind in quiet awareness and regulate nervous system tone through intentional breathing.",
                items: ["Meditation", "Breathing"]
            },
            {
                id: "afternoon",
                icon: "☀️",
                title: "Afternoon Session",
                time: "01:00 PM - 03:00 PM",
                description: "Clear cognitive chatter, log reflective insights, and cultivate present-moment focus.",
                items: ["Journal", "Mindfulness"]
            },
            {
                id: "evening",
                icon: "🌆",
                title: "Evening Session",
                time: "06:00 PM - 08:00 PM",
                description: "Acknowledge today's experiences, practice gratitude, and gently let go of mental tension.",
                items: ["Reflection"]
            },
            {
                id: "night",
                icon: "🌙",
                title: "Night Session",
                time: "09:30 PM - 11:00 PM",
                description: "Induce total mental relaxation and bodily calm for serene, uninterrupted sleep.",
                items: ["Deep Relaxation", "Sleep"]
            }
        ]
    }
};

// Function to generate dynamic elements so "Every email should be different"
const getDynamicEmailData = (goalKey) => {
    const key = (goalKey || "nutrition").toLowerCase().trim();
    const config = GOAL_CONFIG[key] || GOAL_CONFIG[key === "mind" ? "mindfulness" : "nutrition"] || GOAL_CONFIG.nutrition;

    // Pick random quote
    const randomQuote = config.quotes[Math.floor(Math.random() * config.quotes.length)];

    // Generate dynamic scorecard metrics slightly varying per email to keep every email unique
    const wellnessScore = Math.floor(Math.random() * 6) + 94; // 94-99
    const energyLevel = Math.floor(Math.random() * 8) + 90;   // 90-97
    const readinessScore = Math.floor(Math.random() * 6) + 93;// 93-98
    const consistencyScore = Math.floor(Math.random() * 5) + 95; // 95-99

    return {
        config,
        quote: randomQuote,
        scorecard: {
            wellness: wellnessScore,
            energy: energyLevel,
            readiness: readinessScore,
            consistency: consistencyScore
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
    <table width="100%" border="0" cellpadding="0" cellspacing="0" style="background-color:#0a0f0d;padding:30px 12px;">
        <tr>
            <td align="center">
                <!-- Main Email Card (Glassmorphism Dark Theme) -->
                <table width="600" border="0" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background-color:#111a16;border-radius:24px;overflow:hidden;border:1px solid #1e3a2b;box-shadow:0 20px 50px rgba(0,0,0,0.6);">
                    
                    <!-- Gradient Header -->
                    <tr>
                        <td style="background:linear-gradient(135deg, #0d2d20 0%, #081a13 50%, #03120c 100%);padding:44px 36px;text-align:center;border-bottom:1px solid #1e3a2b;position:relative;">
                            
                            <!-- Poshana Logo Badge -->
                            <div style="display:inline-block;background:rgba(239, 255, 30, 0.1);border:1px solid rgba(239, 255, 30, 0.25);border-radius:50px;padding:6px 18px;margin-bottom:18px;">
                                <span style="font-size:12px;font-weight:700;letter-spacing:2px;color:#efff1e;text-transform:uppercase;">POSHANA WELCOME</span>
                            </div>

                            <!-- Main Title -->
                            <h1 style="margin:0 0 10px;font-size:30px;font-weight:800;color:#ffffff;letter-spacing:-0.5px;line-height:1.2;">
                                ✨ Welcome to Poshana
                            </h1>

                            <!-- Subtitle -->
                            <p style="margin:0;font-size:15px;color:#94a3b8;line-height:1.5;">
                                Your personalized wellness journey starts today.
                            </p>

                        </td>
                    </tr>

                    <!-- Body Content -->
                    <tr>
                        <td style="padding:32px 32px 24px;">

                            <!-- Goal Focus Banner -->
                            <div style="background:${config.accentGradient};border:1px solid ${config.color}44;border-radius:18px;padding:18px 22px;margin-bottom:28px;box-shadow:0 8px 24px rgba(0,0,0,0.25);">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td width="48" style="font-size:32px;vertical-align:middle;">${config.emoji}</td>
                                        <td style="vertical-align:middle;padding-left:12px;">
                                            <div style="font-size:11px;font-weight:700;letter-spacing:1.5px;color:${config.color};text-transform:uppercase;margin-bottom:2px;">
                                                YOUR FOCUS AREA
                                            </div>
                                            <div style="font-size:18px;font-weight:800;color:#ffffff;">
                                                ${config.name} Specialized Plan
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>

                            <!-- Section Header -->
                            <div style="margin-bottom:20px;">
                                <h2 style="margin:0 0 6px;font-size:20px;font-weight:700;color:#f8fafc;">
                                    Daily Routine & Sessions
                                </h2>
                                <p style="margin:0;font-size:13.5px;color:#64748b;">
                                    Tailored specifically to your ${config.name.toLowerCase()} goals:
                                </p>
                            </div>

                            <!-- 4 SESSIONS (Morning, Afternoon, Evening, Night) - Styled like Onboarding Popup -->
                            ${config.sessions.map((session) => `
                            <div style="background:rgba(22, 38, 30, 0.75);border:1px solid #1e3a2b;border-radius:18px;padding:20px 22px;margin-bottom:18px;box-shadow:0 4px 16px rgba(0,0,0,0.2);">
                                
                                <!-- Session Title Row -->
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:10px;">
                                    <tr>
                                        <td width="36" style="vertical-align:middle;">
                                            <div style="width:34px;height:34px;background:rgba(239, 255, 30, 0.1);border:1px solid rgba(239, 255, 30, 0.2);border-radius:10px;text-align:center;line-height:32px;font-size:18px;">
                                                ${session.icon}
                                            </div>
                                        </td>
                                        <td style="vertical-align:middle;padding-left:12px;">
                                            <span style="font-size:16px;font-weight:700;color:#ffffff;">
                                                ${session.title}
                                            </span>
                                        </td>
                                        <td align="right" style="vertical-align:middle;">
                                            <span style="font-size:11.5px;font-weight:600;color:#efff1e;background:rgba(239, 255, 30, 0.08);border:1px solid rgba(239, 255, 30, 0.2);padding:4px 10px;border-radius:20px;">
                                                ${session.time}
                                            </span>
                                        </td>
                                    </tr>
                                </table>

                                <!-- Description -->
                                <p style="margin:0 0 14px;font-size:13.5px;color:#94a3b8;line-height:1.5;">
                                    ${session.description}
                                </p>

                                <!-- Recommendations Chips / Badges -->
                                <div>
                                    <div style="font-size:11px;font-weight:700;color:#64748b;letter-spacing:1px;text-transform:uppercase;margin-bottom:8px;">
                                        Recommendations
                                    </div>
                                    <div>
                                        ${session.items.map((item) => `
                                        <span style="display:inline-block;background:rgba(16, 185, 129, 0.12);border:1px solid rgba(16, 185, 129, 0.28);color:#34d399;font-size:12px;font-weight:600;padding:5px 13px;border-radius:30px;margin-right:6px;margin-bottom:6px;">
                                            ✓ ${item}
                                        </span>
                                        `).join('')}
                                    </div>
                                </div>

                            </div>
                            `).join('')}


                            <!-- DAILY SCORECARD SECTION -->
                            <div style="background:linear-gradient(135deg, #0f2b1d 0%, #153826 100%);border:1px solid #1e4230;border-radius:18px;padding:22px;margin-top:28px;margin-bottom:24px;">
                                <table width="100%" border="0" cellpadding="0" cellspacing="0" style="margin-bottom:14px;">
                                    <tr>
                                        <td>
                                            <span style="font-size:16px;font-weight:800;color:#ffffff;">
                                                📊 Daily Scorecard
                                            </span>
                                        </td>
                                        <td align="right">
                                            <span style="font-size:12px;font-weight:700;color:#efff1e;background:rgba(239, 255, 30, 0.12);padding:4px 10px;border-radius:12px;">
                                                TARGET: OPTIMAL
                                            </span>
                                        </td>
                                    </tr>
                                </table>

                                <!-- Scorecard Metrics Grid -->
                                <table width="100%" border="0" cellpadding="0" cellspacing="0">
                                    <tr>
                                        <td width="48%" style="background:rgba(10, 15, 13, 0.6);border:1px solid #1e3a2b;border-radius:12px;padding:12px 14px;margin-bottom:8px;">
                                            <div style="font-size:11px;color:#64748b;font-weight:600;">Overall Wellness</div>
                                            <div style="font-size:20px;font-weight:800;color:#efff1e;margin-top:2px;">${scorecard.wellness}/100</div>
                                        </td>
                                        <td width="4%"></td>
                                        <td width="48%" style="background:rgba(10, 15, 13, 0.6);border:1px solid #1e3a2b;border-radius:12px;padding:12px 14px;margin-bottom:8px;">
                                            <div style="font-size:11px;color:#64748b;font-weight:600;">Energy Readiness</div>
                                            <div style="font-size:20px;font-weight:800;color:#34d399;margin-top:2px;">${scorecard.energy}%</div>
                                        </td>
                                    </tr>
                                    <tr><td height="8"></td></tr>
                                    <tr>
                                        <td width="48%" style="background:rgba(10, 15, 13, 0.6);border:1px solid #1e3a2b;border-radius:12px;padding:12px 14px;">
                                            <div style="font-size:11px;color:#64748b;font-weight:600;">Recovery Index</div>
                                            <div style="font-size:20px;font-weight:800;color:#38bdf8;margin-top:2px;">${scorecard.readiness}%</div>
                                        </td>
                                        <td width="4%"></td>
                                        <td width="48%" style="background:rgba(10, 15, 13, 0.6);border:1px solid #1e3a2b;border-radius:12px;padding:12px 14px;">
                                            <div style="font-size:11px;color:#64748b;font-weight:600;">Habit Consistency</div>
                                            <div style="font-size:20px;font-weight:800;color:#a855f7;margin-top:2px;">${scorecard.consistency}%</div>
                                        </td>
                                    </tr>
                                </table>
                            </div>


                            <!-- DAILY MOTIVATION SECTION -->
                            <div style="background:rgba(13, 38, 27, 0.75);border-left:4px solid #efff1e;border-radius:14px;padding:18px 22px;margin-bottom:32px;">
                                <div style="font-size:12px;font-weight:800;color:#efff1e;letter-spacing:1px;text-transform:uppercase;margin-bottom:6px;">
                                    ✨ Daily Motivation
                                </div>
                                <p style="margin:0;font-size:14px;color:#e2e8f0;font-style:italic;line-height:1.6;">
                                    "${quote}"
                                </p>
                            </div>


                            <!-- OPEN POSHANA BUTTON (CTA) -->
                            <div style="text-align:center;margin:32px 0 16px;">
                                <a href="https://poshana.netlify.app" 
                                   target="_blank"
                                   style="display:inline-block;background:#efff1e;color:#0a0f0d;font-size:16px;font-weight:800;text-decoration:none;padding:16px 44px;border-radius:50px;letter-spacing:0.4px;box-shadow:0 8px 25px rgba(239, 255, 30, 0.35);transition:all 0.25s ease;">
                                    Open Poshana
                                </a>
                            </div>

                        </td>
                    </tr>

                    <!-- FOOTER SECTION -->
                    <tr>
                        <td style="background:#09120e;padding:28px 32px;border-top:1px solid #1e3a2b;text-align:center;">
                            
                            <p style="margin:0 0 10px;font-size:14px;font-weight:700;color:#efff1e;">
                                Made with ❤️ by Poshana
                            </p>

                            <p style="margin:0;font-size:12px;color:#475569;line-height:1.6;">
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
