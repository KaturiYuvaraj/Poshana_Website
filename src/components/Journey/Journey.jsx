import { useState } from "react";
import "./Journey.css";
import { Sparkles, Calendar, Activity, CheckSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  {
    day: "Day 1",
    title: "Personalized Setup",
    tagline: "Build Your Daily Routine",
    icon: <Calendar size={20} />,
    description: "Set your age, lifestyle, and goals. Poshana builds your full daily schedule — wake-up time, breakfast, lunch, evening snack, dinner, meditation, and bedtime — each tied to points in your Score Card.",
    metrics: ["Wake-up time set (+15 pts)", "Meals & workout scheduled", "Score Card activated"]
  },
  {
    day: "Day 7",
    title: "Earn Your Daily Score",
    tagline: "Complete Activities, Rack Up Points",
    icon: <Sparkles size={20} />,
    description: "Each day, complete your scheduled activities and earn points. Wake up on time (15 pts), log your workout, breakfast, lunch, snack, dinner, meditation, and bedtime — each worth 10 points toward your daily score.",
    metrics: ["Up to 95 pts per day", "8 scoreable activities", "Smart reminders per activity"]
  },
  {
    day: "Day 14",
    title: "Track Your Consistency",
    tagline: "Weekly Score Card & Analytics",
    icon: <Activity size={20} />,
    description: "Open your Score Card to see today's total score (e.g. 95 — Good Score) and review your week's streak on the calendar. The Analytics tab shows your progress trends so you can see which habits are sticking.",
    metrics: ["Daily score with rating", "Weekly calendar streak", "Analytics progress chart"]
  },
  {
    day: "Day 30",
    title: "Habits Locked In",
    tagline: "Real Consistency, Real Results",
    icon: <CheckSquare size={20} />,
    description: "After 30 days of building points, your healthy routine feels automatic. Access professional nutritionist support on-demand and stay consistent — you're on track to unlock Poshana Rewards at the 90-day milestone.",
    metrics: ["Solid daily habit streak", "Nutritionist access", "90-day Rewards on track"]
  }
];


export default function Journey() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="journey" id="journey">
      <div className="journey-bg-glow"></div>

      <div className="journey-container">
        
        <div className="journey-header">
          <div className="journey-tag">
            <Sparkles size={16} />
            Your Timeline
          </div>
          <h2>Your 30-Day Evolution Path</h2>
          <p>
            A step-by-step roadmap showing how Poshana shapes your meals, routines, and habits — so healthy living becomes second nature by day 30.
          </p>
        </div>

        <div className="journey-layout">
          
          {/* STEP CONTROLS */}
          <div className="journey-steps-list">
            {STEPS.map((s, idx) => (
              <button
                key={idx}
                className={`journey-step-btn ${activeStep === idx ? "active" : ""}`}
                onClick={() => setActiveStep(idx)}
              >
                <div className="step-btn-badge">
                  {s.day}
                </div>
                <div className="step-btn-content">
                  <h4>{s.title}</h4>
                  <span>{s.tagline}</span>
                </div>
              </button>
            ))}
          </div>

          {/* ACTIVE CONTENT VIEW */}
          <div className="journey-details-box">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="journey-details-inner"
              >
                <div className="details-header">
                  <div className="details-icon">
                    {STEPS[activeStep].icon}
                  </div>
                  <div>
                    <span className="details-day">{STEPS[activeStep].day}</span>
                    <h3>{STEPS[activeStep].title}</h3>
                  </div>
                </div>

                <p className="details-description">
                  {STEPS[activeStep].description}
                </p>

                <div className="details-metrics">
                  <h5>Key Milestones:</h5>
                  <ul>
                    {STEPS[activeStep].metrics.map((m, mIdx) => (
                      <li key={mIdx}>
                        <span className="bullet"></span>
                        {m}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}