import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

/**
 * useScrollAnimations
 * Sets up Lenis smooth scroll + GSAP ScrollTrigger scroll-reveal
 * for all sections on the page. Call this ONCE in Home.jsx.
 */
export function useScrollAnimations() {
  const lenisRef = useRef(null);

  useEffect(() => {
    // ─── Lenis Smooth Scroll ─────────────────────────────────
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      prevent: (node) => {
        // Don't apply smooth scroll when over modals or scrollable inner containers
        return node.closest?.('.modal-overlay') !== null ||
          node.closest?.('.modal-content') !== null;
      },
    });
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    const rafId = requestAnimationFrame(raf);

    // ─── Animate: Fade-up utility ────────────────────────────
    const fadeUp = (selector, options = {}) => {
      const els = document.querySelectorAll(selector);
      if (!els.length) return;
      gsap.fromTo(
        els,
        { opacity: 0, y: options.y ?? 50, scale: options.scale ?? 1 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: options.duration ?? 0.8,
          stagger: options.stagger ?? 0.12,
          ease: options.ease ?? "power3.out",
          scrollTrigger: {
            trigger: options.trigger ?? els[0],
            start: options.start ?? "top 85%",
            once: true,
          },
        }
      );
    };

    // ─── Animate: Fade-in from left/right ───────────────────
    const fadeX = (selector, fromX, options = {}) => {
      const els = document.querySelectorAll(selector);
      if (!els.length) return;
      gsap.fromTo(
        els,
        { opacity: 0, x: fromX },
        {
          opacity: 1,
          x: 0,
          duration: options.duration ?? 0.9,
          stagger: options.stagger ?? 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: options.trigger ?? els[0],
            start: options.start ?? "top 85%",
            once: true,
          },
        }
      );
    };

    // ─── Animate: Scale-in cards ────────────────────────────
    const scaleIn = (selector, options = {}) => {
      const els = document.querySelectorAll(selector);
      if (!els.length) return;
      gsap.fromTo(
        els,
        { opacity: 0, scale: 0.85, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: options.duration ?? 0.65,
          stagger: options.stagger ?? 0.1,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: options.trigger ?? els[0],
            start: options.start ?? "top 85%",
            once: true,
          },
        }
      );
    };

    // Wait one tick so DOM is settled
    const timer = setTimeout(() => {

      // ── HERO (no scroll trigger needed – immediate) ──────
      gsap.fromTo(".hero-badge",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.2 }
      );
      gsap.fromTo(".hero-heading",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.4 }
      );
      gsap.fromTo(".hero-description",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.65 }
      );
      gsap.fromTo(".hero-buttons",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out", delay: 0.85 }
      );
      gsap.fromTo(".hero-stats > div",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.12, duration: 0.7, ease: "power3.out", delay: 1.05 }
      );
      gsap.from(".phone-wrapper", {
        opacity: 0,
        x: 60,
        scale: 0.92,
        duration: 1.1,
        ease: "power3.out",
        delay: 0.5
      });
      gsap.from(".star-companion, .star-glow-backdrop", {
        opacity: 0,
        duration: 1.0,
        ease: "power3.out",
        delay: 0.9
      });

      // ── TRUSTED ───────────────────────────────────────────
      fadeX(".trusted-tag", -40, { trigger: ".trusted" });
      fadeX(".trusted-left h2", -40, { trigger: ".trusted", start: "top 80%" });
      fadeX(".trusted-left p", -40, { trigger: ".trusted", start: "top 78%" });
      fadeX(".rating", -40, { trigger: ".trusted", start: "top 76%" });
      fadeX(".trust-pills > div", -30, { trigger: ".trusted", stagger: 0.08, start: "top 74%" });
      scaleIn(".glass-card", { trigger: ".trusted-right", stagger: 0.12, start: "top 82%" });

      // ── FEATURES ─────────────────────────────────────────
      fadeUp(".features-title", { trigger: ".features", start: "top 82%" });
      fadeUp(".features-header p", { trigger: ".features", start: "top 80%", y: 25 });
      scaleIn(".feature-card", { trigger: ".bento-grid", stagger: 0.1, start: "top 80%" });

      // ── AI SECTION ───────────────────────────────────────
      fadeUp(".ai-section .about-tag", { trigger: ".ai-section", start: "top 83%", y: 30 });
      fadeUp(".ai-section h2", { trigger: ".ai-section", start: "top 81%", y: 40 });
      fadeX(".ai-section .ai-left", -60, { trigger: ".ai-section", start: "top 78%" });
      fadeX(".ai-section .ai-right", 60, { trigger: ".ai-section", start: "top 78%" });

      // ── ABOUT ────────────────────────────────────────────
      fadeX(".about-tag", -50, { trigger: ".about-section", start: "top 83%" });
      fadeX(".about-info-col h2", -50, { trigger: ".about-section", start: "top 81%" });
      fadeX(".about-lead", -50, { trigger: ".about-section", start: "top 79%" });
      fadeX(".about-body", -50, { trigger: ".about-section", start: "top 77%" });
      scaleIn(".about-pillar-card", { trigger: ".about-pillars-grid", stagger: 0.1, start: "top 82%" });

      // ── JOURNEY ──────────────────────────────────────────
      fadeUp(".journey-header .journey-tag", { trigger: ".journey", start: "top 83%", y: 25 });
      fadeUp(".journey-header h2", { trigger: ".journey", start: "top 81%", y: 35 });
      fadeUp(".journey-step-btn", { trigger: ".journey-steps", stagger: 0.1, start: "top 80%", y: 30 });
      fadeX(".journey-details-box", 60, { trigger: ".journey-details", start: "top 82%" });

      // ── TESTIMONIALS ─────────────────────────────────────
      fadeUp(".testimonials-header", { trigger: ".testimonials", start: "top 83%", y: 30 });
      scaleIn(".testimonial-card", { trigger: ".testimonials-grid", stagger: 0.12, start: "top 82%" });

      // ── FAQ ──────────────────────────────────────────────
      fadeUp(".faq-header", { trigger: ".faq", start: "top 83%", y: 30 });
      fadeUp(".faq-item", { trigger: ".faq-list", stagger: 0.08, start: "top 82%", y: 25 });

      // ── DOWNLOAD ─────────────────────────────────────────
      fadeUp(".download-content h2", { trigger: ".download-section", start: "top 83%", y: 30 });
      fadeUp(".download-content p", { trigger: ".download-section", start: "top 81%", y: 20 });
      scaleIn(".store-btn", { trigger: ".download-buttons", stagger: 0.15, start: "top 82%" });

      // ── FOOTER ───────────────────────────────────────────
      fadeUp(".footer-logo-wrap", { trigger: ".footer", start: "top 90%", y: 25 });
      fadeUp(".footer-nav-col", { trigger: ".footer", stagger: 0.1, start: "top 88%", y: 30 });
      fadeUp(".footer-newsletter-col", { trigger: ".footer", start: "top 86%", y: 25 });

    }, 100);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);
}
