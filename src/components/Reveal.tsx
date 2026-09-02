import { useEffect, useRef } from 'react';
import type { ReactNode } from 'react';

/**
 * Reveals children once, when they first cross into view.
 *
 * An IntersectionObserver rather than a scroll listener, and it disconnects
 * after firing — nothing on this page listens to scroll at all. The hidden
 * state lives in CSS (`.reveal`), so with `prefers-reduced-motion` the content
 * is simply visible from the start rather than depending on JS to appear.
 */
export default function Reveal({
  children,
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: 'div' | 'li' | 'section' | 'article' | 'header';
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        node.classList.add('is-in');
        io.disconnect();
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
