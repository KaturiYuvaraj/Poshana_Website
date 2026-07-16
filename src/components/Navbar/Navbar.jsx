import { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/Poshana_logo.svg";
import Dock from "../Dock/Dock";
import {
  House,
  Sparkles,
  HeartPulse,
  ChartColumnIncreasing,
  MessageCircle,
  Menu,
  X,
  Users,
  Star,
  HelpCircle,
  Download,
} from "lucide-react";

export default function Navbar({ onOpenModal }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    if (window.location.pathname !== "/") {
      window.location.href = `/#${id}`;
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const items = [
    {
      icon: <House size={18} />,
      label: "Home",
      onClick: () => scrollToSection("home")
    },
    {
      icon: <ChartColumnIncreasing size={18} />,
      label: "Features",
      onClick: () => scrollToSection("features")
    },
    {
      icon: <Sparkles size={18} />,
      label: "AI",
      onClick: () => scrollToSection("ai")
    },
    {
      icon: <Users size={18} />,
      label: "About",
      onClick: () => scrollToSection("about")
    },
    {
      icon: <HeartPulse size={18} />,
      label: "Journey",
      onClick: () => scrollToSection("journey")
    },
    {
      icon: <Star size={18} />,
      label: "Reviews",
      onClick: () => scrollToSection("testimonials")
    },
    {
      icon: <HelpCircle size={18} />,
      label: "FAQ",
      onClick: () => scrollToSection("faq")
    },
    {
      icon: <Download size={18} />,
      label: "Download",
      onClick: () => scrollToSection("download")
    },
    {
      icon: <MessageCircle size={18} />,
      label: "Contact",
      onClick: () => scrollToSection("footer")
    }
  ];

  return (
    <nav className="navbar">
      <div className="navbar-shine"></div>
      <div className="navbar-glow"></div>

      <div className="nav-left" onClick={() => scrollToSection("home")} style={{ cursor: "pointer" }}>
        <img src={logo} alt="Poshana" />
        <h2>POSHANA</h2>
      </div>

      <div className="nav-center">
        <Dock
          items={items}
          panelHeight={50}
          baseItemSize={38}
          magnification={52}
          distance={140}
          className="hero-dock"
        />
      </div>

      <div className="nav-right">
        <button className="nav-cta-desktop" onClick={() => onOpenModal("signup")}>Get Started</button>
        <button 
          className="hamburger-toggle" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        {items.map((item, i) => (
          <button 
            key={i} 
            className="mobile-menu-item" 
            onClick={() => {
              item.onClick();
              setMobileMenuOpen(false);
            }}
          >
            {item.icon}
            <span>{item.label}</span>
          </button>
        ))}
        <button 
          className="mobile-cta-btn" 
          onClick={() => {
            onOpenModal("signup");
            setMobileMenuOpen(false);
          }}
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}