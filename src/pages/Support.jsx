import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, HelpCircle, Loader2 } from "lucide-react";
import logo from "../assets/Poshana_logo.svg";
import Footer from "../components/Footer/Footer";
import "./legal.css";

export default function Support() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/legal/support.html")
      .then((res) => res.text())
      .then((data) => {
        setContent(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load support:", err);
        setLoading(false);
      });
  }, []);

  return (
    <div className="legal-page-wrapper">
      {/* Premium Back Navigation Header */}
      <header className="legal-header">
        <div className="legal-header-container">
          <Link to="/" className="legal-back-btn">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </Link>
          <div className="legal-brand">
            <img src={logo} alt="Poshana Logo" />
            <span>POSHANA</span>
          </div>
          <div className="legal-header-spacer" />
        </div>
      </header>

      {/* Main Container */}
      <main className="legal-main">
        <div className="legal-container">
          <div className="legal-card">
            <div className="legal-card-header">
              <div className="legal-icon-wrap">
                <HelpCircle size={24} />
              </div>
              <h1>Support & Contact</h1>
              <p className="legal-meta">Customer support guidelines & contact options</p>
            </div>

            <div className="legal-card-divider"></div>

            {loading ? (
              <div className="legal-loading">
                <Loader2 size={32} className="animate-spin" />
                <span>Loading Support details...</span>
              </div>
            ) : (
              <div
                className="legal-content-body"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
