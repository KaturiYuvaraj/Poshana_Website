import { Resend } from "resend";

const GOAL_CONTENT = {
    nutrition: {
        emoji: "🥗",
        title: "Your Personalized Nutrition Journey Starts Now",
        highlight: "Smart Nutrition Coaching",
        body: `
            <p>You've joined Poshana with a focus on <strong>Nutrition</strong> — one of the most powerful foundations of great health.</p>
            <p>Here's what's coming your way:</p>
            <ul>
                <li>🥗 AI-powered meal plans tailored to your body & goals</li>
                <li>📊 Macro & calorie tracking that actually makes sense</li>
                <li>🛒 Smart grocery lists generated for you automatically</li>
                <li>💡 Daily nutrition tips from your personal AI coach</li>
            </ul>
        `,
        textBody: `You've joined Poshana focused on Nutrition.\n\nHere's what's coming your way:\n- AI-powered meal plans\n- Macro & calorie tracking\n- Smart grocery lists\n- Daily nutrition tips`,
        color: "#4caf50",
    },
    fitness: {
        emoji: "💪",
        title: "Your Personal Fitness Coach is Ready",
        highlight: "AI Fitness Coaching",
        body: `
            <p>You've joined Poshana focused on <strong>Fitness</strong> — and we're here to make every rep count.</p>
            <p>Here's what's coming your way:</p>
            <ul>
                <li>💪 Custom workout plans built for your fitness level</li>
                <li>📈 Progress tracking that keeps you motivated</li>
                <li>🏋️ Exercise guides with proper form tips</li>
                <li>🔥 Adaptive plans that grow as you do</li>
            </ul>
        `,
        textBody: `You've joined Poshana focused on Fitness.\n\nHere's what's coming your way:\n- Custom workout plans\n- Progress tracking\n- Exercise guides\n- Adaptive growth plans`,
        color: "#ff7043",
    },
    sleep: {
        emoji: "😴",
        title: "Better Sleep, Better Life — Let's Begin",
        highlight: "AI Sleep Optimization",
        body: `
            <p>You've joined Poshana focused on <strong>Sleep</strong> — the secret weapon of peak performance.</p>
            <p>Here's what's coming your way:</p>
            <ul>
                <li>😴 Personalized sleep schedules for your lifestyle</li>
                <li>🌙 Wind-down routines crafted by AI</li>
                <li>📉 Sleep quality analysis and improvement tips</li>
                <li>⏰ Smart wake-up strategies for natural energy</li>
            </ul>
        `,
        textBody: `You've joined Poshana focused on Sleep.\n\nHere's what's coming your way:\n- Personalized sleep schedules\n- Wind-down routines\n- Sleep quality analysis\n- Smart wake-up strategies`,
        color: "#5c6bc0",
    },
    mindfulness: {
        emoji: "🧘",
        title: "Your Mindfulness Journey Begins Today",
        highlight: "AI Mindfulness Coaching",
        body: `
            <p>You've joined Poshana focused on <strong>Mindfulness</strong> — the art of living fully in the present.</p>
            <p>Here's what's coming your way:</p>
            <ul>
                <li>🧘 Daily guided meditation sessions</li>
                <li>🌿 Stress management techniques from AI coaching</li>
                <li>📔 Mindful journaling prompts tailored to you</li>
                <li>💆 Breathwork exercises for instant calm</li>
            </ul>
        `,
        textBody: `You've joined Poshana focused on Mindfulness.\n\nHere's what's coming your way:\n- Guided meditation sessions\n- Stress management techniques\n- Mindful journaling prompts\n- Breathwork exercises`,
        color: "#ab47bc",
    },
};

const buildEmailHTML = (email, goal) => {
    const content = GOAL_CONTENT[goal] || GOAL_CONTENT.nutrition;

    return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome to Poshana</title>
</head>
<body style="margin:0;padding:0;background:#0a0f0d;font-family:'Segoe UI',Arial,sans-serif;">
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0f0d;padding:40px 0;">
        <tr>
            <td align="center">
                <table width="600" cellpadding="0" cellspacing="0" style="background:#111a16;border-radius:20px;overflow:hidden;border:1px solid #1e3329;">

                    <!-- Header -->
                    <tr>
                        <td style="background:linear-gradient(135deg,#0d2b1f 0%,#0a1f17 100%);padding:40px 48px;text-align:center;border-bottom:1px solid #1e3329;">
                            <div style="font-size:42px;margin-bottom:8px;">${content.emoji}</div>
                            <h1 style="margin:0;font-size:28px;font-weight:700;color:#efff1e;letter-spacing:-0.5px;">Poshana</h1>
                            <p style="margin:6px 0 0;font-size:13px;color:#5a8a6a;letter-spacing:2px;text-transform:uppercase;">AI Wellness Platform</p>
                        </td>
                    </tr>

                    <!-- Body -->
                    <tr>
                        <td style="padding:40px 48px;">
                            <h2 style="margin:0 0 16px;font-size:22px;font-weight:700;color:#e8f5ee;line-height:1.3;">${content.title}</h2>
                            <p style="margin:0 0 20px;font-size:15px;color:#7aab8a;line-height:1.7;">
                                Hey there! You are officially on the <strong style="color:#efff1e;">Poshana early access waitlist</strong>. 
                                We are thrilled to have you join us.
                            </p>

                            <!-- Goal badge -->
                            <div style="background:#0d2b1f;border:1px solid ${content.color}33;border-radius:12px;padding:20px 24px;margin:0 0 24px;">
                                <p style="margin:0 0 4px;font-size:11px;text-transform:uppercase;letter-spacing:2px;color:#5a8a6a;">Your Focus Area</p>
                                <p style="margin:0;font-size:18px;font-weight:700;color:${content.color};">${content.highlight}</p>
                            </div>

                            <!-- Content -->
                            <div style="font-size:14px;color:#8ab89a;line-height:1.8;">
                                ${content.body}
                            </div>

                            <!-- CTA -->
                            <div style="text-align:center;margin:36px 0 0;">
                                <a href="https://poshana.netlify.app" 
                                   style="display:inline-block;background:#efff1e;color:#0a0f0d;font-size:15px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:50px;letter-spacing:0.3px;">
                                    Visit Poshana Website
                                </a>
                            </div>
                        </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                        <td style="background:#0d1a12;padding:28px 48px;border-top:1px solid #1e3329;text-align:center;">
                            <p style="margin:0;font-size:12px;color:#3d6b4f;line-height:1.7;">
                                You are receiving this email because you registered at poshana.netlify.app<br/>
                                © 2025 Poshana · All rights reserved
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

    const goalKey = goal || "nutrition";

    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const content = GOAL_CONTENT[goalKey] || GOAL_CONTENT.nutrition;

        const plainText = `Welcome to Poshana!\n\n${content.title}\n\n${content.textBody}\n\nVisit Poshana: https://poshana.netlify.app`;

        const data = await resend.emails.send({
            from: "Poshana AI <onboarding@resend.dev>",
            to: [email.trim()],
            replyTo: "yuvakaturi24@gmail.com",
            subject: `${content.emoji} Welcome to Poshana — You're on the list!`,
            html: buildEmailHTML(email, goalKey),
            text: plainText,
        });

        if (data.error) {
            console.error("❌ Resend error:", data.error);
            return res.status(500).json({ success: false, message: data.error.message || "Failed to send email." });
        }

        console.log(`✅ Welcome email sent to: ${email}`);
        return res.json({ success: true, message: "Welcome email sent!" });

    } catch (error) {
        console.error("❌ Email send failed:", error.message);
        return res.status(500).json({ success: false, message: "Failed to send email. Please try again." });
    }
};
