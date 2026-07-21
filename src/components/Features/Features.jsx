import "./Features.css";
import appScreen from "../../assets/app/home.svg";

/* ── Premium SVG Icons ── */
const Icons = {
    sunrise: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EFF71E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v2M4.93 4.93l1.41 1.41M2 12h2M19.07 4.93l-1.41 1.41M22 12h-2" />
            <path d="M5 17H3a9 9 0 0 1 18 0h-2" />
            <line x1="3" y1="20" x2="21" y2="20" />
        </svg>
    ),
    pill: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EFF71E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.5 4.5a4.5 4.5 0 0 0-6.36 0L4.5 14.14a4.5 4.5 0 0 0 6.36 6.36L20.5 10.86a4.5 4.5 0 0 0 0-6.36Z" />
            <path d="m14.5 9.5-5 5" />
        </svg>
    ),
    bowl: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EFF71E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2a10 10 0 0 1 10 10H2A10 10 0 0 1 12 2z" />
            <path d="M5 22h14" />
            <path d="M12 12v10" />
        </svg>
    ),
    dumbbell: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EFF71E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6.5 6.5h11" /><path d="M6 8v8" /><path d="M18 8v8" />
            <rect x="2" y="9" width="4" height="6" rx="2" />
            <rect x="18" y="9" width="4" height="6" rx="2" />
            <line x1="6" y1="12" x2="18" y2="12" />
        </svg>
    ),
    plate: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EFF71E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="9" />
            <circle cx="12" cy="12" r="5" />
            <path d="M12 3v2M12 19v2M3 12h2M19 12h2" />
        </svg>
    ),
    snack: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EFF71E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M8 2h8l1 7H7L8 2Z" />
            <path d="M7 9c0 5.523 4.477 10 5 10s5-4.477 5-10" />
            <path d="M12 19v3" /><path d="M9 22h6" />
        </svg>
    ),
    dinner: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EFF71E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 11l19-9-9 19-2-8-8-2z" />
        </svg>
    ),
    moon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EFF71E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
    ),
    chart: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EFF71E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M3 3v18h18" />
            <path d="M18 17V9" /><path d="M13 17V5" /><path d="M8 17v-3" />
        </svg>
    ),
    trophy: (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#EFF71E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9H3.5a2.5 2.5 0 0 0 0 5H6" />
            <path d="M18 9h2.5a2.5 2.5 0 0 1 0 5H18" />
            <path d="M6 4h12v11a4 4 0 0 1-8 0V4" />
            <path d="M8 21h8" /><path d="M12 17v4" />
        </svg>
    ),
};

const featureCards = [
    { icon: Icons.sunrise,  tag: "DAWN",      title: "Wake Up Ritual",          desc: "Intentional morning routines with hydration goals and AI guidance." },
    { icon: Icons.pill,     tag: "VITAL",     title: "Medication & Supplements", desc: "Never miss your health regimen with smart, timely reminders." },
    { icon: Icons.bowl,     tag: "NOURISH",   title: "Breakfast",               desc: "AI-crafted nutrient-dense breakfasts tailored to your goals." },
    { icon: Icons.dumbbell, tag: "MOVEMENT",  title: "Workout",                 desc: "Personalized fitness plans that adapt to your lifestyle." },
    { icon: Icons.plate,    tag: "BALANCE",   title: "Lunch",                   desc: "Balanced meals to maintain steady energy throughout the day." },
    { icon: Icons.snack,    tag: "REFUEL",    title: "Healthy Snacks",          desc: "Smart snack and hydration prompts for peak performance." },
    { icon: Icons.dinner,   tag: "EVENING",   title: "Dinner",                  desc: "Light, recovery-focused evening meals curated for you." },
    { icon: Icons.moon,     tag: "RESTORE",   title: "Sleep Ritual",            desc: "AI-powered wind-down routines for deeper, restorative sleep." },
    { icon: Icons.chart,    tag: "INSIGHT",   title: "Analytics & Guidance",    desc: "Beautiful insights across your entire wellness journey." },
    { icon: Icons.trophy,   tag: "EXCELLENCE",title: "Rewards & Streaks",       desc: "Celebrate consistency with meaningful achievements." },
];

export default function Features() {
    const handleExploreClick = () => {
        const downloadSection = document.getElementById("download");
        if (downloadSection) downloadSection.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="features" id="features">
            <div className="features-container">
                <div className="features-grid">

                    {/* ── LEFT: Hero Panel ── */}
                    <div className="hero-section">
                        <div className="hero-content">
                            <span className="signature-badge">✦ SIGNATURE EXPERIENCE</span>
                            <h2>Your Wellness <span>Dashboard</span></h2>
                            <p>A refined command center for your health. Track, optimize, and transform your daily wellness with elegance and precision.</p>

                            <button className="explore-btn" onClick={handleExploreClick}>
                                <span>Explore the Experience</span>
                                <svg className="explore-btn-arrow" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </button>
                        </div>

                        <div className="dashboard-phone-wrapper">
                            <img src={appScreen} alt="Poshana Dashboard" className="dashboard-phone" />
                        </div>

                        {/* Stats */}
                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Daily Rituals</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat-item">
                                <span className="stat-number">AI</span>
                                <span className="stat-label">Powered Meals</span>
                            </div>
                            <div className="stat-divider" />
                            <div className="stat-item">
                                <span className="stat-number">24/7</span>
                                <span className="stat-label">Smart Reminders</span>
                            </div>
                        </div>
                    </div>

                    {/* ── RIGHT: Feature Cards ── */}
                    <div className="features-cards">
                        {featureCards.map((card, i) => (
                            <div className="feature-card" key={i}>
                                <div className="icon-circle">{card.icon}</div>
                                <span className="card-tag">{card.tag}</span>
                                <h3>{card.title}</h3>
                                <p>{card.desc}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}