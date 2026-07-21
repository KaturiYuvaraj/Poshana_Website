import { useState } from "react";
import { createPortal } from "react-dom";
import "./CtaModal.css";
import { X, CheckCircle, Sparkles, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CtaModal({ isOpen, onClose, type = "signup" }) {
  const [email, setEmail] = useState("");
  const [goal, setGoal] = useState("nutrition");
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (!email.trim()) {
      setError("Please enter your email.");
      return;
    }

    setLoading(true);

    try {

      // Check duplicate locally
      const waitlist = JSON.parse(localStorage.getItem("poshana_waitlist") || "[]");
      const alreadyExists = waitlist.some((entry) => entry.email === email.trim().toLowerCase());

      if (alreadyExists) {
        setError("This email is already registered.");
        setLoading(false);
        return;
      }

      // Save locally
      waitlist.push({ email: email.trim().toLowerCase(), goal, joinedAt: new Date().toISOString() });
      localStorage.setItem("poshana_waitlist", JSON.stringify(waitlist));

      setSubmitted(true);

      setTimeout(() => {
        setSubmitted(false);
        setEmail("");
        setGoal("nutrition");
        onClose();
      }, 2500);

    } catch (err) {

      console.error(err);
      setError("Something went wrong. Please try again.");

    } finally {

      setLoading(false);

    }
  };


  const modalContent = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.88, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.88, y: 30 }}
            transition={{ duration: 0.35, ease: [0.34, 1.56, 0.64, 1] }}
          >
            <button className="close-btn" onClick={onClose} aria-label="Close modal">
              <X size={20} />
            </button>

            {type === "signup" ? (
              <div className="signup-modal">
                {submitted ? (
                  <motion.div
                    className="success-state"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <CheckCircle size={56} className="success-icon" />
                    <h3>Welcome to Poshana!</h3>
                    <p>We've sent a customized onboarding link to <strong>{email}</strong>.</p>
                    <p className="success-sub">Get ready to transform your wellness journey.</p>
                  </motion.div>
                ) : (
                  <>
                    <div className="modal-header">
                      <div className="modal-icon-badge">
                        <Sparkles size={20} />
                      </div>
                      <h2>Start Your AI Wellness Journey</h2>
                      <p>Get personalized nutrition, workouts, and sleep guidance tailored entirely to you.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="modal-form">
                      <div className="modal-form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="you@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        {error && (
                          <span className="form-error">
                            {error}
                          </span>
                        )}
                      </div>

                      <div className="modal-form-group">
                        <label>What's your primary focus?</label>
                        <div className="goal-chips">
                          {[
                            { id: "nutrition", label: "🥗 Nutrition" },
                            { id: "fitness", label: "💪 Fitness" },
                            { id: "sleep", label: "😴 Sleep" },
                            { id: "mindfulness", label: "🧘 Mind" }
                          ].map((g) => (
                            <button
                              key={g.id}
                              type="button"
                              className={`goal-chip ${goal === g.id ? "active" : ""}`}
                              onClick={() => setGoal(g.id)}
                            >
                              {g.label}
                            </button>
                          ))}
                        </div>
                      </div>

                      <button
                        type="submit"
                        className="submit-btn"
                        disabled={loading}
                      >
                        {loading ? "Joining..." : "Get Early Access"}

                        {!loading && <Send size={16} />}
                      </button>
                    </form>
                  </>
                )}
              </div>
            ) : (
              <div className="demo-modal">
                <div className="modal-header">
                  <h2>Poshana App Demo</h2>
                  <p>See how Poshana transforms your daily wellness experience.</p>
                </div>

                <div className="mock-video-container">
                  <div className="mock-video-play">
                    <iframe
                      width="100%"
                      height="100%"
                      src="https://www.youtube.com/embed/iGFURivt4iE?autoplay=1&rel=0"
                      title="Poshana App Demo"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  // Render directly into document.body to escape any stacking context issues
  return createPortal(modalContent, document.body);
}
