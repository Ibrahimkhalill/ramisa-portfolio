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
               Set at the end of the row and kept modest: the headline is the
               subject of this page, not the photograph. Editorial framing — a
               hairline border, a caption beneath, no rounding, no shadow. */}
          <Reveal delay={860} className="lg:pb-2">
            <figure className="w-[230px] sm:w-[270px]">
              <div className="overflow-hidden border border-rule bg-raised">
                <img
                  src={PROFILE.photo}
                  alt={PROFILE.name}
                  width={540}
                  height={675}
                  className="aspect-[4/5] w-full object-cover object-top grayscale-[0.2] transition-[transform,filter] duration-[1100ms] ease-out hover:scale-[1.03] hover:grayscale-0"
                />
              </div>
              <figcaption className="mt-4 font-mono text-[12px] leading-relaxed text-faint">
                {PROFILE.name}
                <br />
                {PROFILE.role}
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
