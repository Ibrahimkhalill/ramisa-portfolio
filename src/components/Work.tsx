import { PROJECTS } from '../data';
import Diagram from './Diagrams';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { Words } from './Motion';

export default function Work() {
  return (
    <section id="work" className="border-b border-rule py-20 md:py-28">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <SectionHead
          eyebrow="Selected work"
          title="Selected Work"
          lead="AI systems, developer tools, research, and production software."
        />

        <div className="mt-12 md:mt-16">
          {PROJECTS.map((p, i) => {
            // Alternate which side the diagram sits on, so the page reads as a
            // sequence of spreads rather than a repeating template.
            const flip = i % 2 === 1;
            return (
              <Reveal
                key={p.index}
                as="article"
                className="group border-t border-rule py-14 first:border-t-0 first:pt-0 md:py-20"
              >
                <div
                  className={`grid gap-10 lg:grid-cols-2 lg:gap-14 ${
                    flip ? 'lg:[&>*:first-child]:order-2' : ''
                  }`}
                >
                  {/* ---- copy ---- */}
                  <div className={flip ? 'lg:pl-4' : 'lg:pr-4'}>
                    <div className="flex items-baseline gap-6">
                      {/* Large editorial numeral — the strongest signal that
                          this is a sequence of pieces, not a card grid. */}
                      <span className="display text-[2.1rem] leading-none text-rule transition-colors duration-500 group-hover:text-accent/45">
                        {p.index}
                      </span>
                      <span className="meta">{p.category}</span>
                    </div>

                    <h3
                      className="display mt-8 text-ink"
                      style={{ fontSize: 'clamp(1.6rem, 2.6vw, 2.3rem)' }}
                    >
                      <Words text={p.title} step={38} />
                    </h3>

                    <p className="mt-8 max-w-[40rem] text-[16px] leading-relaxed text-body md:text-[17px]">
                      {p.description}
                    </p>

                    {p.facts && (
                      <dl className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-t border-rule pt-8">
                        {p.facts.map((f) => (
                          <div key={f.label}>
                            <dt className="sr-only">{f.label}</dt>
                            <dd>
                              <span className="display block text-[1.7rem] text-ink">
                                {f.value}
                              </span>
                              <span className="mt-2 block text-[13px] text-muted">
                                {f.label}
                              </span>
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}

                    <ul className="mt-10 flex flex-wrap gap-2.5">
                      {p.tech.map((t) => (
                        <li
                          key={t}
                          className="border border-rule px-3 py-1.5 font-mono text-[12px] text-muted transition-colors duration-300 group-hover:border-rule"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-12">
                      <a
                        href={p.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2.5 text-[15px] text-ink"
                      >
                        <span className="link-underline">View on GitHub</span>
                        <span
                          aria-hidden="true"
                          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                        >
                          ↗
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* ---- architecture ---- */}
                  <div className="transition-transform duration-[1100ms] ease-out group-hover:scale-[1.015]">
                    <Diagram kind={p.diagram} />
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
