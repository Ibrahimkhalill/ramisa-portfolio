import { useEffect, useState } from 'react';
import { PROFILE } from '../data';

const LINKS = [
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Research', href: '#research' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  // Lock the page behind the mobile menu, and let Escape close it.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-rule bg-paper/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-shell items-center justify-between gap-6 px-6 py-5 md:px-10">
        <a
          href="#top"
          className="-my-2 -ml-2 inline-block px-2 py-2 font-mono text-[14px] font-medium tracking-[0.2em] text-ink"
          aria-label={PROFILE.name}
        >
          {PROFILE.initials}
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className="link-underline text-[14px] text-muted transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-5">
          <p className="hidden items-center gap-2.5 lg:flex">
            {/* A quiet live indicator — it pulses once every few seconds rather
                than blinking, so it reads as a status light, not an alert. */}
            <span
              aria-hidden="true"
              className="relative inline-flex h-1.5 w-1.5"
            >
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60 [animation-duration:3s]" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="font-mono text-[12px] text-muted">
              Currently building AI systems
            </span>
          </p>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="-my-2 -mr-2 px-2 py-2.5 font-mono text-[13px] text-ink md:hidden"
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-rule bg-paper md:hidden">
          <ul className="mx-auto max-w-shell px-6 py-4">
            {LINKS.map((l) => (
              <li key={l.label} className="border-b border-rule-soft last:border-0">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-5 text-[17px] text-body"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <p className="mx-auto flex max-w-shell items-center gap-2.5 px-6 pb-6">
            <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            <span className="font-mono text-[12px] text-muted">
              Currently building AI systems
            </span>
          </p>
        </div>
      )}
    </header>
  );
}
