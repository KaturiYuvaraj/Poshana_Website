import { useState } from "react";
import "./FAQ.css";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "How does Poshana protect my health data?",
    answer: "We utilize end-to-end encryption for all bio-metrics and device synchronizations. Your records are stored on sandboxed on-device storage where possible, and securely encrypted databases elsewhere. We never sell your data to health insurance providers or advertisers."
  },
  {
    question: "Can I connect my smart wearables?",
    answer: "Yes! Poshana offers full, direct synchronization with Apple HealthKit, Google Fit, Garmin Connect, Fitbit, and WHOOP. Data is polled in the background to seamlessly calculate active energy expenditure."
  },
  {
    question: "Is the AI advice safe and validated?",
    answer: "Absolutely. All Poshana nutritional algorithms and physical exercise recommendations are constructed based on peer-reviewed clinical research and validated by our team of sports physiologists, dietitians, and sleep scientists."
  },
  {
    question: "How often does the engine recalibrate goals?",
    answer: "The engine runs a daily calibration pass every morning. It processes your previous night's sleep score, average resting heart rate, active calories burned, and meal compliance inputs, and then updates your macro thresholds."
  }
];

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggleFaq = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-glow-orb"></div>

      <div className="faq-container">
        
        <div className="faq-header">
          <div className="faq-tag">
            <HelpCircle size={16} />
            Got Questions?
          </div>
          <h2>Frequently Asked Questions</h2>
          <p>
            Learn more about how Poshana leverages advanced AI models to provide secure, clinical-grade wellness guidance.
          </p>
        </div>

        <div className="faq-list">
          {FAQS.map((f, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item ${isOpen ? "open" : ""}`}
              >
                <button 
                  className="faq-question-bar"
                  onClick={() => toggleFaq(idx)}
                >
                  <span>{f.question}</span>
                  <ChevronDown 
                    size={18} 
                    className="faq-caret" 
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="faq-answer-wrapper"
                    >
                      <div className="faq-answer-content">
                        <p>{f.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}