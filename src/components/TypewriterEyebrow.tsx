import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, useReducedMotion } from 'motion/react';

/**
 * Mono typewriter eyebrow — types once when scrolled into view.
 * Reduced-motion renders the full text instantly with no caret.
 */
export const TypewriterEyebrow: React.FC<{
  text: string;
  className?: string;
  speed?: number;
  startDelay?: number;
}> = ({ text, className = '', speed = 38, startDelay = 0 }) => {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const reduceMotion = useReducedMotion();
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || reduceMotion) return;
    if (count >= text.length) return;
    const t = window.setTimeout(
      () => setCount((c) => c + 1),
      count === 0 ? startDelay : speed
    );
    return () => window.clearTimeout(t);
  }, [inView, reduceMotion, count, text.length, speed, startDelay]);

  if (reduceMotion) {
    return <p className={className}>{text}</p>;
  }

  const done = count >= text.length;
  return (
    <p ref={ref} className={className} aria-label={text}>
      <span aria-hidden="true" className="min-h-[1rem] inline-block">
        {inView ? text.slice(0, count) : ''}
        <span
          aria-hidden="true"
          className={`typewriter-caret ${done ? 'opacity-0' : ''}`}
        >
          ▍
        </span>
      </span>
    </p>
  );
};

/**
 * Mask word-reveal for serif headings — each word slides up from an
 * overflow-hidden mask. Replaces the ribbon/marker background highlight.
 */
export const RevealWords: React.FC<{
  words: { text: string; italic?: boolean; accent?: boolean }[];
  className?: string;
  as?: 'h1' | 'h2' | 'h3';
  delay?: number;
}> = ({ words, className = '', as = 'h2', delay = 0 }) => {
  const reduceMotion = useReducedMotion();
  const Tag = motion[as] as typeof motion.h2;

  if (reduceMotion) {
    return (
      <h2 className={className}>
        {words.map((w, i) => (
          <span key={i}>
            <span
              className={
                w.italic
                  ? 'font-serif-display italic font-normal text-[#D69589]'
                  : undefined
              }
            >
              {w.text}
            </span>{' '}
          </span>
        ))}
      </h2>
    );
  }

  return (
    <Tag
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      transition={{ staggerChildren: 0.08, delayChildren: delay }}
      className={className}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden pb-[0.08em] -mb-[0.08em] align-bottom"
        >
          <motion.span
            className={`inline-block will-change-transform ${
              w.italic
                ? 'font-serif-display italic font-normal text-[#D69589]'
                : ''
            }`}
            variants={{
              hidden: { y: '110%' },
              show: {
                y: '0%',
                transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
              },
            }}
          >
            {w.text}
          </motion.span>
          {i < words.length - 1 ? <span>&nbsp;</span> : null}
        </span>
      ))}
    </Tag>
  );
};
