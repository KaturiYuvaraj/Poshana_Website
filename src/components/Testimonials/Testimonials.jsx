import "./Testimonials.css";
import { Star, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const REVIEWS = [
  {
    name: "Sarah Jenkins",
    role: "Yoga Instructor & Coach",
    initials: "SJ",
    gradient: "linear-gradient(135deg, #FF6B6B, #FF8E53)",
    text: "Poshana has fundamentally changed how I view my diet. The AI nutrition analyzer adjusts dynamically to my workout intensities. I no longer feel bloated or low on energy in the afternoons. Truly exceptional tool!",
    rating: 5
  },
  {
    name: "Marcus Chen",
    role: "Lead Software Architect",
    initials: "MC",
    gradient: "linear-gradient(135deg, #4E65FF, #92EFFD)",
    text: "As someone who spends 10+ hours a day in front of screens, tracking sleep latency and circadian metrics was a game changer. The deep sleep protocol helped drop my resting heart rate by 5 bpm in just 3 weeks.",
    rating: 5
  },
  {
    name: "Elena Rostova",
    role: "Amateur Marathon Runner",
    initials: "ER",
    gradient: "linear-gradient(135deg, #11998e, #38ef7d)",
    text: "I connected my Garmin watch and MyFitnessPal. Poshana consolidated my files, pinpointed a sodium deficiency during high-temp runs, and set up a customized hydration loop. Best health platform I've ever used.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-glow"></div>

      <div className="testimonials-container">
        
        <div className="testimonials-header">
          <div className="testimonials-tag">
            <MessageSquare size={16} />
            Community Voice
          </div>
          <h2>Loved by Health Enthusiasts</h2>
          <p>
            Read how Poshana is empowering thousands of individuals to calibrate their nutrition, fitness, and sleep patterns.
          </p>
        </div>

        <div className="testimonials-grid">
          {REVIEWS.map((r, idx) => (
            <div key={idx} className="testimonial-card">
              <div className="card-top">
                <div 
                  className="user-avatar" 
                  style={{ background: r.gradient }}
                >
                  {r.initials}
                </div>
                <div className="user-details">
                  <h4>{r.name}</h4>
                  <span>{r.role}</span>
                </div>
              </div>

              <div className="rating-stars">
                {[...Array(r.rating)].map((_, starIdx) => (
                  <Star 
                    key={starIdx} 
                    size={16} 
                    fill="#FFD84D" 
                    color="#FFD84D" 
                  />
                ))}
              </div>

              <p className="review-text">
                "{r.text}"
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}