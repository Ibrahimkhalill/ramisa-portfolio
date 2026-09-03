import { PROFILE, STATS } from '../data';
import Reveal from './Reveal';
import { CountUp, Words } from './Motion';

export default function Hero() {
  return (
    <section id="top" className="border-b border-rule pt-28 md:pt-36">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          {/* ---- copy ---- */}
          <div className="max-w-[50rem]">
            <Reveal>
              <p className="meta">AI Developer · ML Engineer</p>
            </Reveal>

            {/* The headline rises word by word — the one moment on the page
                that asks for attention. Everything after it is quieter. */}
            <h1
              className="display mt-9 text-ink"
              style={{ fontSize: 'clamp(2.5rem, 5.2vw, 4.2rem)' }}
            >
              <Words
                text="Building intelligent systems that move from research to production."
                delay={120}
                step={52}
              />
            </h1>

            <Reveal delay={620}>
              <p className="mt-10 max-w-[42rem] text-[17px] leading-relaxed text-body md:text-[18px]">
                AI Developer &amp; ML Engineer specializing in LLMs, RAG, voice
                AI, deep learning, NLP, computer vision, and production AI
                systems.
              </p>
            </Reveal>

            <Reveal delay={700}>
              <dl className="mt-12 flex flex-wrap gap-x-14 gap-y-5">
                <div>
                  <dt className="meta">Based in</dt>
                  <dd className="mt-2 text-[16px] text-body">{PROFILE.location}</dd>
                </div>
                <div>
                  <dt className="meta">Currently</dt>
                  <dd className="mt-2 text-[16px] text-body">{PROFILE.currentRole}</dd>
                </div>
              </dl>
            </Reveal>

            <Reveal delay={780}>
              <div className="mt-14 flex flex-wrap items-center gap-x-9 gap-y-4">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-3 border border-ink bg-ink px-8 py-4 text-[15px] text-paper transition-colors duration-300 hover:border-accent hover:bg-accent"
                >
                  View selected work
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1.5"
                  >
                    →
                  </span>
                </a>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-[15px] text-ink"
                >
                  <span className="link-underline">GitHub</span>
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </a>
              </div>
            </Reveal>
          </div>

          {/* ---- portrait ----
               The photograph is a cutout with a real alpha channel, which is
               what lets it sit straight on the paper with no frame at all.

               There was a tinted block behind her, meant to read as something
               she stands in front of. It did not: cropped to head-and-shoulders
               its edge landed mid-figure and looked like a stray rectangle, and
               once a reader has to ask whether a shape is design or a rendering
               fault, the shape has already failed. The cutout carries itself.

               The source is a full-length shot. At this size that left the face
               about sixty pixels tall — present, but not legible. Cropped to
               head-and-shoulders it is roughly double that in the same slot,
               and the frame is rotated -3.5° first because the subject leans:
               measured off the torso centroid, and checked against the scarf's
               embroidered strip, which now reads vertical.

               No shadow, no rounding, no glow, no frame — a mono caption
               underneath and the location set on its side. */}
          <Reveal delay={860}>
            <figure className="w-[200px] sm:w-[225px] lg:w-[255px]">
              <div className="relative">
                {/* vertical mono label down the left edge — quiet, and it gives
                    the cutout a left edge to sit against */}
                <span
                  className="absolute -left-7 bottom-4 hidden font-mono text-[11px] uppercase tracking-[0.22em] text-faint sm:block"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  Dhaka, Bangladesh
                </span>

                {/* The cutout ends mid-coat, so a hard bottom edge reads as an
                    accidental crop. Dissolving the last fifth turns it into a
                    deliberate fade instead. */}
                <picture>
                  <source srcSet="/ramisa.webp" type="image/webp" />
                  <img
                    src="/ramisa.png"
                    alt={PROFILE.name}
                    width={760}
                    height={816}
                    className="relative block w-full grayscale-[0.35] transition-[transform,filter] duration-[1200ms] ease-out hover:scale-[1.02] hover:grayscale-0"
                    style={{
                      maskImage:
                        'linear-gradient(to bottom, #000 78%, rgba(0,0,0,0.55) 92%, transparent 100%)',
                      WebkitMaskImage:
                        'linear-gradient(to bottom, #000 78%, rgba(0,0,0,0.55) 92%, transparent 100%)',
                    }}
                  />
                </picture>
              </div>

              <figcaption className="mt-5 flex items-baseline justify-between gap-4">
                <span className="font-mono text-[12px] leading-none text-body">
                  {PROFILE.name}
                </span>
                <span className="font-mono text-[11px] leading-none text-faint">RSN</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>

        {/* ---- credibility strip ----
             Four published figures, set as type on a divided row rather than in
             dashboard cards. The numbers are the proof; boxes around them would
             only make them look like decoration. They count up on arrival. */}
        <dl className="mt-20 grid grid-cols-2 border-t border-rule md:mt-24 md:grid-cols-4">
          {STATS.map((s, i) => {
            const decimals = s.value.includes('.') ? 2 : 0;
            const numeric = parseFloat(s.value);
            return (
              <Reveal
                key={s.label}
                delay={i * 90}
                className={`py-10 md:py-12 ${
                  i > 0 ? 'md:border-l md:border-rule md:pl-10' : ''
                } ${i % 2 === 1 ? 'border-l border-rule pl-7 md:pl-10' : ''}`}
              >
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span
                    className="display block text-ink"
                    style={{ fontSize: 'clamp(2.1rem, 3.8vw, 3.1rem)' }}
                  >
                    <CountUp to={numeric} decimals={decimals} />
                    {s.value.endsWith('+') ? '+' : ''}
                  </span>
                  <span className="mt-4 block text-[14px] text-muted">{s.label}</span>
                </dd>
              </Reveal>
            );
          })}
        </dl>
      </div>
    </section>
  );
}
