import "./Trusted.css";
import {
  Sparkles,
  ShieldCheck,
  Brain,
  Heart,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

const STATS = [
  { value: "50K+", label: "Users" },
  { value: "250+", label: "Experts" },
  { value: "98%", label: "Success" },
  { value: "24/7", label: "AI Support" },
];

export default function Trusted() {
  return (
    <section className="trusted">
      <div className="bg-orb orb1"></div>
      <div className="bg-orb orb2"></div>
      <div className="bg-orb orb3"></div>

      <div className="trusted-container">

        {/* LEFT */}
        <div className="trusted-left">
          <div className="trusted-tag">
            <Sparkles size={16}/>
            Trusted Worldwide
          </div>

          <h2>
            Helping <span>50,000+</span> people
            build healthier lives with AI.
          </h2>

          <p>
            Poshana combines AI, nutrition,
            wellness tracking and intelligent
            recommendations to create a healthier
            lifestyle for everyone.
          </p>

          <div className="rating">
            <Star className="rating-star" fill="#FFD84D" color="#FFD84D" size={18}/>
            <strong>4.9</strong>
            <span>Rated by thousands</span>
          </div>

          <div className="trust-pills">
            <motion.div whileHover={{ scale: 1.08, y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
              <ShieldCheck size={18}/>
              Secure
            </motion.div>

            <motion.div whileHover={{ scale: 1.08, y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
              <Brain size={18}/>
              AI Powered
            </motion.div>

            <motion.div whileHover={{ scale: 1.08, y: -3 }} transition={{ type: "spring", stiffness: 300 }}>
              <Heart size={18}/>
              Wellness
            </motion.div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="trusted-right">
          {STATS.map((stat, i) => (
            <motion.div
              key={i}
              className="glass-card"
              initial={{ opacity: 0, scale: 0.8, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ scale: 1.06, y: -8 }}
            >
              <h3>{stat.value}</h3>
              <span>{stat.label}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}