import { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo from "../../assets/Poshana_logo.svg";
import {
  Mail,
  Phone,
  Send,
  CheckCircle,
  HeartPulse,
  Sparkles
} from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter
} from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

const NAV_COLS = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "/#features", isRouter: false },
      { label: "AI Companion", href: "/#ai", isRouter: false },
      { label: "Nutrition Insights", href: "/#features", isRouter: false },
      { label: "Wellness Guidance", href: "/#features", isRouter: false }
    ]
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/#about", isRouter: false },
      { label: "Our Mission", href: "/#journey", isRouter: false },
      { label: "FAQs", href: "/#faq", isRouter: false }
    ]
  },
  {
    heading: "Support & Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy-policy", isRouter: true },
      { label: "Terms & Conditions", href: "/terms-and-conditions", isRouter: true },
      { label: "Delete Account", href: "/delete-account-policy", isRouter: true },
      { label: "Disclaimer", href: "/disclaimer", isRouter: true },
      { label: "Support Desk", href: "/support", isRouter: true }
    ]
  }
];

const SOCIALS = [
  {
    icon: <FaFacebook size={18} />,
    label: "Facebook",
    href: "https://www.facebook.com/poshanaapp"
  },
  {
    icon: <FaInstagram size={18} />,
    label: "Instagram",
    href: "https://www.instagram.com/poshanaapp"
  },
  {
    icon: <FaXTwitter size={18} />,
    label: "X",
    href: "https://x.com/poshana_live"
  },
  {
    icon: <FaLinkedin size={18} />,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/poshana-live-23393b359/"
  },
  {
    icon: <Mail size={18} />,
    label: "Email",
    href: "mailto:info@poshana.live"
  },
  {
    icon: <Phone size={18} />,
    label: "Phone",
    href: "tel:+918019507799"
  }
];

export default function Footer() {

  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleSubscribe = (e) => {
    e.preventDefault();

    setError("");

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setSubscribed(true);
    setEmail("");
  };

  const handleLinkClick = (isRouter, href) => {
    if (!isRouter && href.startsWith("/#")) {
      const id = href.split("#")[1];
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return (
    <footer className="footer" id="footer">

      <div className="footer-glow"></div>

      <div className="footer-container">

        <div className="footer-top">

          {/* Brand */}

          <div className="footer-brand-col">

            <div className="footer-logo-wrap">
              <img src={logo} alt="Poshana" />
              <span>POSHANA</span>
            </div>

            <p className="footer-tagline">
              An AI-powered nutrition and wellness platform delivering
              personalized guidance, intelligent insights, and healthier
              habits for everyday life.
            </p>

            <div className="footer-socials">

              {SOCIALS.map((s, idx) => (

                <a
                  key={idx}
                  href={s.href}
                  className="social-btn"
                  aria-label={s.label}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    s.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  {s.icon}
                </a>

              ))}

            </div>

          </div>

          {/* Navigation */}

          <div className="footer-nav-cols">

            {NAV_COLS.map((col, idx) => (

              <div
                key={idx}
                className="footer-nav-col"
              >

                <h5>{col.heading}</h5>

                <ul>

                  {col.links.map((link, linkIdx) => (

                    <li key={linkIdx}>

                      {link.isRouter ? (

                        <Link
                          to={link.href}
                          onClick={() => handleLinkClick(true)}
                        >
                          {link.label}
                        </Link>

                      ) : (

                        <a
                          href={link.href}
                          onClick={(e) => {

                            if (
                              link.href.startsWith("/#") &&
                              window.location.pathname === "/"
                            ) {

                              e.preventDefault();
                              handleLinkClick(false, link.href);

                            }

                          }}
                        >
                          {link.label}
                        </a>

                      )}

                    </li>

                  ))}

                </ul>

              </div>

            ))}

          </div>

          {/* Newsletter */}

          <div className="footer-newsletter-col">

            <div className="newsletter-badge">
              <Sparkles size={14} />
              Newsletter
            </div>

            <h4>Stay Updated</h4>

            <p>
              Receive nutrition tips, wellness insights,
              AI updates, and the latest Poshana features
              directly in your inbox.
            </p>

            <AnimatePresence mode="wait">

              {subscribed ? (

                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="newsletter-success"
                >
                  <CheckCircle size={20} />
                  <span>Welcome to the Poshana community!</span>
                </motion.div>

              ) : (

                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  onSubmit={handleSubscribe}
                  className="newsletter-form"
                >

                  <div className="newsletter-input-wrap">

                    <input
                      type="text"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={error ? "error" : ""}
                    />

                    <button
                      type="submit"
                      className="newsletter-send-btn"
                    >
                      <Send size={16} />
                    </button>

                  </div>

                  {error && (
                    <span className="newsletter-error">
                      {error}
                    </span>
                  )}

                </motion.form>

              )}

            </AnimatePresence>

          </div>

        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">

          <span className="footer-copy">
            © {new Date().getFullYear()} Poshana.
            All rights reserved.
            Powered by AI. Built with{" "}
            <HeartPulse
              size={14}
              className="heart-icon"
            />{" "}
            to inspire healthier living. Developed by{" "}
            <a
              href="https://spassociates.online/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-dev-link"
            >
              S P Associates
            </a>
          </span>

          <div className="footer-bottom-links">

            <Link
              to="/privacy-policy"
              onClick={() => handleLinkClick(true)}
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms-and-conditions"
              onClick={() => handleLinkClick(true)}
            >
              Terms & Conditions
            </Link>

            <Link
              to="/disclaimer"
              onClick={() => handleLinkClick(true)}
            >
              Disclaimer
            </Link>

          </div>

        </div>

      </div>

    </footer>
  );

}