import { useState } from "react";
import "./Journey.css";
import { Sparkles, Calendar, Activity, CheckSquare } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const STEPS = [
  {
    day: "Day 1",
    title: "Smart Onboarding",
    tagline: "Initialize Your Profile",
    icon: <Calendar size={20} />,
    description: "Submit baseline biometrics, connect smart wearable devices (Apple Health, Garmin, Fitbit), and outline your specific nutritional and physical goals.",
    metrics: ["10m Setup", "15+ Data Sources", "Bio-profile locked"]
  },
  {
    day: "Day 7",
    title: "AI Optimization",
    tagline: "Custom Food & Routine Calibrations",
    icon: <Sparkles size={20} />,
    description: "Receive your first AI-formulated nutrition plans and workout schedules. The system starts analyzing caloric outcomes based on actual heart rate and sleep data.",
    metrics: ["Real-time adaptive macro charts", "4 custom weekly workouts", "Melatonin timing"]
  },
  {
    day: "Day 14",
    title: "Habit Alignment",
    tagline: "Behavioral Adjustments",
    icon: <Activity size={20} />,
    description: "Incorporate specialized micro-goals, track daily hydration levels, and receive dynamic coaching messages as habit loops begin locking into place.",
    metrics: ["Hydration targets", "85% compliance warning", "Sleep window lock"]
  },
  {
    day: "Day 30",
    title: "Visible Transformation",
    tagline: "Quantifiable Progress Review",
    icon: <CheckSquare size={20} />,
    description: "Review detailed metabolic metrics. Most active users observe noticeable improvements in resting heart rate, active recovery rates, sleep scores, and body composition.",
    metrics: ["Resting HR drop ~4bpm", "+15% Sleep Efficiency", "Fat-mass reduction reports"]
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
            Experience a step-by-step roadmap showing how Poshana's AI adapts to your body and transforms your health from day one.
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