import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Trash2, Mail, Phone, CheckCircle2 } from "lucide-react";
import logo from "../assets/Poshana_logo.svg";
import Footer from "../components/Footer/Footer";
import "./legal.css";

export default function DeleteAccountPolicy() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!email || !phone) {
      setError("Please fill in both Email and Phone fields.");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const mailtoEmail = "info@poshana.live";
    const subject = "Account Deletion Request";
    const body = `I would like to request the deletion of my account. Please find my details below:

Email: ${email}
Phone: ${phone}

Please process my request as soon as possible.`;

    const mailtoUrl = `mailto:${mailtoEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

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
              <div className="legal-icon-wrap legal-icon-wrap--danger">
                <Trash2 size={24} />
              </div>
              <h1>Delete Account Policy</h1>
              <p className="legal-meta">Learn how to request account deletion and remove your data</p>
            </div>

            <div className="legal-card-divider"></div>

            <div className="legal-content-body">
              <div className="deletion-warning-box">
                <h4>⚠️ Warning: Permanent Data Deletion</h4>
                <p>
                  By submitting a request to delete your account, you acknowledge that all data associated with your account will be permanently removed from our system. This includes your profile info, nutrition logs, health metrics, and workout history. <strong>This action is completely irreversible.</strong>
                </p>
              </div>

              <h3>How to Request Account Deletion</h3>
              <p>
                You can request account deletion at any time. Simply fill out the deletion request form below, which will pre-compose an email to our support team at <a href="mailto:info@poshana.live">info@poshana.live</a>. We will process your deletion request within 5-7 business days and confirm once completed.
              </p>

              <div className="deletion-form-container">
                {submitted ? (
                  <div className="deletion-success">
                    <CheckCircle2 size={48} className="success-icon" />
                    <h4>Deletion Request Initiated</h4>
                    <p>
                      Your mail client has been opened to send the deletion request. If it didn't open, please email us directly at <strong>info@poshana.live</strong> with your details.
                    </p>
                    <button onClick={() => setSubmitted(false)} className="btn-secondary">
                      Request Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="deletion-form">
                    <h4>Account Details</h4>
                    <p className="form-subtitle">Enter the email and phone number associated with your Poshana account.</p>
                    
                    {error && <div className="form-error-msg">{error}</div>}

                    <div className="form-group">
                      <label htmlFor="email">
                        <Mail size={16} />
                        <span>Registered Email</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        placeholder="example@email.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="phone">
                        <Phone size={16} />
                        <span>Registered Phone Number</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        placeholder="+91 XXXXX XXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </div>

                    <button type="submit" className="btn-deletion">
                      <Trash2 size={18} />
                      <span>Request Account Deletion</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
