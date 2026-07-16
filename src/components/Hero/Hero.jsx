import "./Hero.css";
import Lightfall from "../Lightfall/Lightfall";
import { Sparkles } from "lucide-react";
import appScreen from "../../assets/app/home.svg";
import starIcon from "../../assets/icons/star.svg";

export default function Hero({ onOpenModal }) {
  return (
    <section className="hero" id="home">

      {/* Background */}
      <div className="hero-bg">

        <div className="gradient-bg"></div>

        <div className="gradient one"></div>
        <div className="gradient two"></div>
        <div className="gradient three"></div>

        <div className="hero-glow"></div>

        <div className="lightfall-layer">
          <Lightfall
            colors={["#5EEAD4", "#34D399", "#E8FFF8"]}
            backgroundColor="#002024"
            speed={0.35}
            streakCount={4}
            streakWidth={1.4}
            streakLength={2.0}
            glow={2.5}
            density={0.24}
            twinkle={0.8}
            zoom={3.0}
            backgroundGlow={0.0}
            opacity={0.9}
            mouseInteraction={false}
          />
        </div>

      </div>


      <div className="hero-container">

        {/* LEFT */}
        <div className="hero-left">

          <div className="hero-badge">
            <Sparkles size={18} />
            AI Powered Wellness Platform
          </div>

          <h1 className="hero-heading">
            Transform Your
            <span> Health Journey</span>
          </h1>

          <p className="hero-description">
            Nutrition, fitness, AI health insights,
            mindfulness and wellness tracking —
            everything in one intelligent platform.
          </p>

          {/* Mobile Mockup (Visible only on mobile/tablet < 992px) */}
          <div className="mobile-mockup-container">
            <div className="phone-wrapper">
              <img src={starIcon} alt="Star Companion" className="star-companion" />
              <div className="phone">
                <div className="screen">
                  <img
                    src={appScreen}
                    alt="Poshana"
                    className="phone-screen"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hero-buttons">
            <button className="primary-btn" onClick={() => onOpenModal("signup")}>
              Get Started
            </button>

            <button className="secondary-btn" onClick={() => onOpenModal("video")}>
              Watch Demo
            </button>
          </div>

          <div className="hero-stats">

            <div>
              <h2>50K+</h2>
              <span>Users</span>
            </div>

            <div>
              <h2>250+</h2>
              <span>Experts</span>
            </div>

            <div>
              <h2>98%</h2>
              <span>Success</span>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="hero-right">

          <div className="phone-wrapper">
            <img src={starIcon} alt="Star Companion" className="star-companion" />

            {/* MAIN PHONE */}

            <div className="phone">

              <div className="screen">
                <img
                  src={appScreen}
                  alt="Poshana"
                  className="phone-screen"
                />
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}