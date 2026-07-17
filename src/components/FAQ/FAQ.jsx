import { useState } from "react";
import "./FAQ.css";
import { HelpCircle, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    question: "What is Poshana AI?",
    answer: "Poshana AI is your intelligent nutrition companion that provides personalized meal recommendations, health insights, wellness guidance, and lifestyle suggestions based on your goals, preferences, and daily habits."
  },
  {
    question: "How does Poshana personalize my nutrition plan?",
    answer: "Our AI analyzes information such as your age, height, weight, activity level, dietary preferences, health goals, and eating habits to generate meal plans and recommendations tailored specifically to you."
  },
  {
    question: "Is my personal health data secure?",
    answer: "Yes. Your privacy is our priority. All personal information is securely encrypted and handled using industry-standard security practices. We never sell your personal health data to advertisers or third parties."
  },
  {
    question: "Can I use Poshana if I have dietary restrictions or medical conditions?",
    answer: "Absolutely. Poshana supports vegetarian, vegan, gluten-free, diabetic-friendly, and allergy-aware meal recommendations. However, our AI provides educational guidance and should not replace advice from qualified healthcare professionals."
  },
  {
    question: "Does Poshana replace a dietitian or doctor?",
    answer: "No. Poshana is designed to support healthier lifestyle choices through AI-powered guidance. It is not intended to diagnose, treat, or replace professional medical or nutritional advice."
  },
  {
    question: "How often are my recommendations updated?",
    answer: "Your recommendations continuously evolve as you log meals, track your progress, update your goals, and interact with Poshana AI, ensuring your nutrition plan stays relevant to your lifestyle."
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