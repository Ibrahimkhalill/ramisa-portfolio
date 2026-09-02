import { useEffect, useRef, useState } from 'react';

/**
 * Headline that rises into place one word at a time.
 *
 * Each word sits in its own overflow-hidden box, so the word slides up from
 * behind a hard edge rather than just fading — the difference between "text
 * appeared" and "text was set". Splitting by word rather than by line keeps it
 * correct at every breakpoint, where hardcoded line breaks would not.
 */
export function Words({
  text,
  className = '',
  style,
  delay = 0,
  step = 45,
}: {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
  step?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setShown(true);
        io.disconnect();
      },
      { threshold: 0.2 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <span ref={ref} className={className} style={style}>
      {text.split(' ').map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden align-bottom"
          // A little headroom so descenders are not clipped by the mask.
          style={{ paddingBottom: '0.12em', marginBottom: '-0.12em' }}
        >
          <span
            className="inline-block will-change-transform"
            style={{
              transform: shown ? 'translateY(0)' : 'translateY(105%)',
              transition: `transform 1s cubic-bezier(0.16, 1, 0.3, 1) ${
                delay + i * step
              }ms`,
            }}
          >
            {word}
            {i < text.split(' ').length - 1 ? ' ' : ''}
          </span>
        </span>
      ))}
    </span>
  );
}

/**
 * Counts up when scrolled into view. Driven by elapsed time rather than a fixed
 * step count so it lands on the exact figure regardless of frame rate, and
 * skips straight to the value under reduced motion.
 */
export function CountUp({
  to,
  decimals = 0,
  duration = 1500,
}: {
  to: number;
  decimals?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [v, setV] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setV(to);
      return;
    }
    let raf = 0;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        io.disconnect();
        const t0 = performance.now();
        const tick = (now: number) => {
          const t = Math.min(1, (now - t0) / duration);
          setV(to * (1 - Math.pow(1 - t, 3)));
          if (t < 1) raf = requestAnimationFrame(tick);
        };
        raf = requestAnimationFrame(tick);
      },
      { threshold: 0.5 }
    );
    io.observe(node);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [to, duration]);

  return <span ref={ref}>{v.toFixed(decimals)}</span>;
}

/**
 * A hairline that draws itself across as it enters view. Used to open sections
 * — it gives the eye something to follow into the heading.
 */
export function DrawRule({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (!e.isIntersecting) return;
        setShown(true);
        io.disconnect();
      },
      { threshold: 0.5 }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={`h-px w-full bg-rule ${className}`}>
      <div
        className="h-px bg-ink/45 origin-left"
        style={{
          transform: shown ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 1.4s cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  );
}
