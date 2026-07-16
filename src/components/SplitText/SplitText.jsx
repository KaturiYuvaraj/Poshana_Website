import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const SplitText = ({
  text,
  className = '',
  delay = 50,
  duration = 1.25,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  onLetterAnimationComplete,
  animate = true
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!animate) return;
    if (!containerRef.current || !text) return;

    const targets = containerRef.current.querySelectorAll('.split-char');
    if (!targets.length) return;

    const tween = gsap.fromTo(
      targets,
      { ...from },
      {
        ...to,
        duration,
        ease,
        stagger: delay / 1000,
        onComplete: () => {
          if (onLetterAnimationComplete) {
            onLetterAnimationComplete();
          }
        }
      }
    );

    return () => {
      tween.kill();
    };
  }, [text, delay, duration, ease, JSON.stringify(from), JSON.stringify(to), onLetterAnimationComplete]);

  const Tag = 'p';

  const style = {
    textAlign: 'center',
    display: 'inline-block',
    whiteSpace: 'normal',
    wordWrap: 'break-word',
    willChange: 'transform, opacity'
  };

  const renderContent = () => {
    const words = text.split(' ');
    const elements = [];

    if (splitType === 'words') {
      words.forEach((word, idx) => {
        elements.push(
          <span
            key={`w-${idx}`}
            className="split-word"
            style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
          >
            {word}
          </span>
        );
        if (idx < words.length - 1) {
          elements.push(" ");
        }
      });
      return elements;
    }

    // Default to 'chars' - Splits into word spans, then character spans inside
    words.forEach((word, wIdx) => {
      elements.push(
        <span
          key={`w-${wIdx}`}
          style={{ display: 'inline-block', whiteSpace: 'nowrap' }}
          className="split-word"
        >
          {word.split('').map((char, cIdx) => (
            <span
              key={`c-${wIdx}-${cIdx}`}
              className="split-char"
              style={{ display: 'inline-block' }}
            >
              {char}
            </span>
          ))}
        </span>
      );

      if (wIdx < words.length - 1) {
        // Render a plain space text sibling between word spans
        elements.push(" ");
      }
    });

    return elements;
  };

  return (
    <Tag ref={containerRef} style={style} className={`split-parent ${className}`}>
      {renderContent()}
    </Tag>
  );
};

export default SplitText;
