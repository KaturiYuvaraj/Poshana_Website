import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, AlertTriangle } from "lucide-react";
import logo from "../assets/Poshana_logo.svg";
import Footer from "../components/Footer/Footer";
import "./legal.css";

export default function Disclaimer() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      title: "1. General Information Only",
      content: `The content on Poshana ("we," "us," "our") provides general information related to health, fitness, and nutrition and is intended solely for informational and educational purposes. It is not a substitute for professional medical advice, diagnosis, or treatment. The information provided through our services should not be relied upon as the sole basis for making decisions about your health.`
    },
    {
      title: "2. Not Medical Advice",
      content: `Poshana is not a medical organization, and our staff cannot provide medical advice, diagnosis, or treatment. All health, fitness, and nutrition information provided by us, including (but not limited to) text, graphics, images, and other material contained within the App or Website, is for informational purposes only. Please consult a qualified healthcare provider before starting any new exercise, diet, or health program, especially if you have any pre-existing medical conditions or are taking medications.`
    },
    {
      title: "3. Use at Your Own Risk",
      content: `Use of Poshana and its content is at your own risk. We make no representation or warranty of any kind regarding the accuracy, completeness, or suitability of the information provided. While we strive to provide up-to-date and accurate information, there is no guarantee that the information will always be accurate or applicable to your personal health circumstances.`
    },
    {
      title: "4. No Endorsement",
      content: `Any products, services, or treatments mentioned within Poshana are provided for informational purposes only. Reference to any products, services, treatments, or organizations is not an endorsement by Poshana or any of its affiliates. We do not accept any responsibility for any reliance you may place on the material provided on the App or Website.`
    },
    {
      title: "5. Results May Vary",
      content: `Health, fitness, and nutrition results vary among individuals and are affected by numerous factors including age, health, genetics, diet, lifestyle, and dedication to recommended guidelines. Poshana does not guarantee or promise any specific outcomes, results, or health improvements through the use of our services or the information provided.`
    },
    {
      title: "6. Limitation of Liability",
      content: `To the fullest extent permitted by law, Poshana and its affiliates, partners, employees, agents, and contractors will not be held liable for any damages, injury, or harm arising out of or related to your use of or inability to use our services or reliance on any information provided, whether based on warranty, contract, tort, or any other legal theory. This includes, but is not limited to, direct, indirect, incidental, punitive, and consequential damages.`
    },
    {
      title: "7. External Links",
      content: `Our App and Website may contain links to external websites or resources, which are provided for your convenience. We are not responsible for the content, accuracy, or availability of these external sites and do not endorse them. Visiting or using any external sites linked within our App or Website is at your own risk.`
    },
    {
      title: "8. Changes to this Disclaimer",
      content: `We reserve the right to amend this Disclaimer at any time. Any changes will be effective immediately upon being posted on our App or Website. We encourage you to review this Disclaimer periodically for any updates.`
    }
  ];

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
              <div className="legal-icon-wrap legal-icon-wrap--warning">
                <AlertTriangle size={24} />
              </div>
              <h1>Medical Disclaimer</h1>
              <p className="legal-meta">Please read this disclaimer carefully before using Poshana</p>
            </div>

            <div className="legal-card-divider"></div>

            <div className="legal-content-body">
              <p className="legal-intro-box">
                <strong>IMPORTANT NOTICE:</strong> The Poshana App and Website provide general health, fitness, and nutrition guidance. Our services are not intended to be medical advice, and you should always consult a licensed doctor for any medical conditions.
              </p>

              <div className="disclaimer-sections">
                {sections.map((sec, i) => (
                  <div key={i} className="disclaimer-section-block">
                    <h3>{sec.title}</h3>
                    <p>{sec.content}</p>
                  </div>
                ))}

                <div className="disclaimer-section-block">
                  <h3>9. Contact Us</h3>
                  <p>
                    If you have any questions or concerns regarding this Disclaimer, please contact us:
                  </p>
                  <ul className="disclaimer-contact-list">
                    <li><strong>Email:</strong> <a href="mailto:poshana.live@gmail.com">poshana.live@gmail.com</a> / <a href="mailto:info@poshana.live">info@poshana.live</a></li>
                    <li><strong>Address:</strong> SP Associates, Plot No. 63, Sashank Residency, Flat No. 201/A, S.P. Nagar, Moula – Ali, Hyderabad, Telangana, India, 500040</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
