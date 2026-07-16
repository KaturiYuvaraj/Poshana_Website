import "./About.css";
import { Sparkles, Eye, ShieldCheck, HeartHandshake, Compass } from "lucide-react";
import { motion } from "framer-motion";

const PILLARS = [
  {
    icon: <Compass size={24} />,
    title: "Holistic Health",
    description: "Integrating physical workouts, dietary nutrition, and emotional mindfulness into a single cohesive ecosystem."
  },
  {
    icon: <Sparkles size={24} />,
    title: "AI Personalization",
    description: "Dynamic machine learning models that automatically adapt nutrition and workout advice to your actual habits."
  },
  {
    icon: <ShieldCheck size={24} />,
    title: "Secure & Encrypted",
    description: "Your health records are stored with end-to-end encryption. Your privacy is our top engineering priority."
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Expert Endorsed",
    description: "Every algorithm and data point is cross-verified by professional dietitians, fitness coaches, and therapists."
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.12,
      duration: 0.65,
      ease: [0.34, 1.56, 0.64, 1],
    },
  }),
};

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-glow-orb"></div>

      <div className="about-container">
        <div className="about-content-split">
          
          {/* LEFT: Info Column */}
          <div className="about-info-col">
            <div className="about-tag">
              <Eye size={16} />
              Our Vision & Mission
            </div>
            <h2>Empowering individuals to unlock their peak health state.</h2>
            <p className="about-lead">
              Poshana was founded on a simple belief: that health is not a one-size-fits-all formula. We leverage advanced on-device AI models to build a unified health profile tailored completely to you.
            </p>
            <p className="about-body">
              Whether you want to build lean mass, lower biological stress, improve sleep hygiene, or cultivate balanced eating habits, our intelligent platform meets you where you are and evolves as you progress.
            </p>
          </div>

          {/* RIGHT: Grid Column */}
          <div className="about-grid-col">
            <div className="about-pillars-grid">
              {PILLARS.map((p, idx) => (
                <motion.div
                  key={idx}
                  className="about-pillar-card"
                  custom={idx}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={cardVariants}
                  whileHover={{ scale: 1.04, y: -5 }}
                >
                  <div className="pillar-icon-badge">
                    {p.icon}
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}