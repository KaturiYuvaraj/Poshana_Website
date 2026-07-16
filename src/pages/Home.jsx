import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Trusted from "../components/Trusted/Trusted";
import AISection from "../components/AISection/AISection";
import About from "../components/About/About";
import Features from "../components/Features/Features";
import Journey from "../components/Journey/Journey";
import Testimonials from "../components/Testimonials/Testimonials";
import FAQ from "../components/FAQ/FAQ";
import Download from "../components/Download/Download";
import Footer from "../components/Footer/Footer";
import CtaModal from "../components/CtaModal/CtaModal";
import Preloader from "../components/Preloader/Preloader";
import { useEffect, useState } from "react";
import { useScrollAnimations } from "../hooks/useScrollAnimations";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("signup");

  useScrollAnimations();

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, []);

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  return (
    <main>
      <Preloader />
      <Navbar onOpenModal={openModal} />

      <Hero onOpenModal={openModal} />

      <Trusted />

      <Features />

      <AISection />

      <About />

      <Journey />

      <Testimonials />

      <FAQ />

      <Download />

      <Footer />

      <CtaModal isOpen={modalOpen} onClose={() => setModalOpen(false)} type={modalType} />
    </main>
  );
}