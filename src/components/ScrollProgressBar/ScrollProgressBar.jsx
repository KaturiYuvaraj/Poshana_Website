import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgressBar() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    gsap.to(bar, {
      scaleX: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.4,
      },
    });

    // Set initial scale
    gsap.set(bar, { scaleX: 0 });

    return () => {
      ScrollTrigger.getAll().forEach((st) => {
        if (st.vars?.scrub && st.trigger === document.documentElement) st.kill();
      });
    };
  }, []);

  return <div ref={barRef} className="scroll-progress" />;
}
