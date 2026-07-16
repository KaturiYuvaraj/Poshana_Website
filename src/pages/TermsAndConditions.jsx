import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, Loader2 } from "lucide-react";
import logo from "../assets/Poshana_logo.svg";
import Footer from "../components/Footer/Footer";
import "./legal.css";

export default function TermsAndConditions() {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/legal/terms_conditions.html")
      .then((res) => res.text())
      .then((data) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, "text/html");
        // Remove duplicate h1 (page card already shows the title)
        const firstH1 = doc.querySelector("h1");
        if (firstH1) firstH1.remove();
        // Remove "Last updated on" paragraph
        doc.querySelectorAll("p, div").forEach((el) => {
          if (el.textContent.toLowerCase().includes("last updated")) {
            el.remove();
          }
        });
        // Remove leading <hr> if any
        const firstHr = doc.querySelector("hr");
        if (firstHr) firstHr.remove();
        setContent(doc.body.innerHTML);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to load terms:", err);
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
                <FileText size={24} />
              </div>
              <h1>Terms & Conditions</h1>
              <p className="legal-meta">Last updated: April 17, 2025</p>
            </div>

            <div className="legal-card-divider"></div>

            {loading ? (
              <div className="legal-loading">
                <Loader2 size={32} className="animate-spin" />
                <span>Loading Terms & Conditions...</span>
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
