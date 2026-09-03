import {
  ACHIEVEMENTS,
  EDUCATION,
  EXPERIENCE,
  FOCUS,
  PROFILE,
  REPOS,
  RESEARCH,
} from '../data';
import Reveal from './Reveal';
import SectionHead from './SectionHead';
import { Words } from './Motion';

/* ------------------------------------------------- Engineering focus */

export function Focus() {
  return (
    <section className="border-b border-rule bg-raised/45 py-20 md:py-28">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <SectionHead
          eyebrow="Engineering focus"
          title="What I Work With"
          lead="Four areas the work keeps returning to."
        />

        <div className="mt-12 border-t border-rule md:mt-16">
          {FOCUS.map((f, i) => (
            <Reveal
              key={f.index}
              delay={i * 80}
              className="group grid gap-7 border-b border-rule py-9 md:grid-cols-[auto_1fr] md:gap-14 md:py-11"
            >
              <div className="flex items-baseline gap-6 md:w-[24rem]">
                <span className="display text-[1.55rem] leading-none text-rule transition-colors duration-500 group-hover:text-accent/45">
                  {f.index}
                </span>
                <h3 className="text-[19px] text-ink md:text-[21px]">{f.title}</h3>
              </div>
              {/* Plain text list. No percentage bars — a bar would claim a level
                  of proficiency the source never states, and invites comparing
                  numbers instead of reading the work. */}
              <ul className="flex flex-wrap gap-x-7 gap-y-3 md:justify-end">
                {f.items.map((it) => (
                  <li key={it} className="font-mono text-[14px] text-body">
                    {it}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- Experience */

export function Experience() {
  return (
    <section id="experience" className="border-b border-rule py-20 md:py-28">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <SectionHead eyebrow="Career" title="Experience" />

        <ol className="mt-12 md:mt-16">
          {EXPERIENCE.map((e, i) => (
            <Reveal
              key={e.index}
              as="li"
              delay={i * 70}
              className="group grid gap-9 border-t border-rule py-11 md:grid-cols-[12rem_1fr] md:gap-14 md:py-14"
            >
              {/* Left rail: index and dates at a fixed width, so the entries
                  align into a timeline without needing a drawn spine. */}
              <div>
                <span className="display text-[1.55rem] leading-none text-rule transition-colors duration-500 group-hover:text-accent/45">
                  {e.index}
                </span>
                <p className="mt-5 font-mono text-[13px] leading-relaxed text-muted">
                  {e.period}
                </p>
                <p className="mt-2 font-mono text-[12px] text-faint">{e.place}</p>
              </div>

              <div className="max-w-[46rem]">
                <h3 className="text-[21px] leading-snug text-ink md:text-[24px]">
                  {e.role}
                </h3>
                <p className="mt-3 text-[15px] text-accent">{e.org}</p>
                <p className="mt-7 text-[16px] leading-relaxed text-body md:text-[17px]">
                  {e.body}
                </p>

                {e.awards.length > 0 && (
                  <ul className="mt-7 flex flex-wrap gap-2.5">
                    {e.awards.map((a) => (
                      <li
                        key={a}
                        className="border border-accent/35 bg-accent/[0.07] px-3.5 py-1.5 font-mono text-[12px] text-accent"
                      >
                        {a}
                      </li>
                    ))}
                  </ul>
                )}

                <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
                  {e.tags.map((t) => (
                    <li key={t} className="font-mono text-[12px] text-faint">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

/* ---------------------------------------------------------- Research */

export function Research() {
  return (
    <section id="research" className="border-b border-rule bg-raised/45 py-20 md:py-28">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <SectionHead
          eyebrow="Research"
          title="Research & Learning"
          lead="Published work, formal study, and the courses behind the tooling."
        />

        <ol className="mt-12 border-t border-rule md:mt-16">
          {RESEARCH.map((r, i) => (
            <Reveal
              key={r.title}
              as="li"
              delay={i * 80}
              className="grid gap-5 border-b border-rule py-9 md:grid-cols-[12rem_1fr] md:gap-14 md:py-11"
            >
              <p className="meta">{r.kind}</p>
              <div className="max-w-[48rem]">
                {/* Set as a citation, not a certificate. */}
                <h3 className="text-[17px] leading-relaxed text-ink md:text-[19px]">
                  {r.title}
                </h3>
                <p className="mt-4 font-mono text-[13px] text-accent">{r.venue}</p>
                <p className="mt-4 text-[16px] leading-relaxed text-muted">{r.detail}</p>
              </div>
            </Reveal>
          ))}
        </ol>

        {/* Education sits with research rather than in its own section — same
            evidence, same reading. */}
        <div className="mt-16 grid gap-10 md:grid-cols-2 md:gap-14">
          {EDUCATION.map((ed, i) => (
            <Reveal key={ed.degree} delay={i * 90} className="border-t border-rule pt-9">
              <p className="meta">Education</p>
              <h3 className="mt-6 text-[18px] leading-snug text-ink">{ed.degree}</h3>
              <p className="mt-3 text-[16px] text-body">{ed.school}</p>
              <p className="mt-2 font-mono text-[13px] text-faint">{ed.period}</p>
              <p className="mt-5 text-[16px] leading-relaxed text-muted">{ed.detail}</p>
              <p className="mt-6 inline-block border border-accent/35 bg-accent/[0.07] px-3.5 py-1.5 font-mono text-[12px] text-accent">
                {ed.badge}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ Achievements */

export function Achievements() {
  return (
    <section className="border-b border-rule py-20 md:py-28">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <SectionHead eyebrow="Recognition" title="Achievements" />

        <ul className="mt-12 border-t border-rule md:mt-16">
          {ACHIEVEMENTS.map((a, i) => (
            <Reveal
              key={a.title}
              as="li"
              delay={i * 55}
              className="group flex flex-col gap-2 border-b border-rule py-7 transition-colors duration-300 hover:bg-raised/60 md:flex-row md:items-baseline md:justify-between md:gap-10 md:py-8"
            >
              <span className="text-[17px] text-ink md:text-[18px]">{a.title}</span>
              <span className="font-mono text-[13px] text-faint">{a.meta}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------- About */

export function About() {
  return (
    <section id="about" className="border-b border-rule bg-raised/45 py-20 md:py-28">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
          <SectionHead eyebrow="About" title="A little about me." />

          <Reveal delay={140} className="max-w-[42rem] lg:pt-28">
            <div className="space-y-7 text-[16px] leading-[1.75] text-body md:text-[17px]">
              <p>
                I build AI systems that have to survive contact with real users.
                At Betopia that means platforms across 17 Strategic Business
                Units: a GitLab intelligence agent, an in-editor AI coding
                assistant shipped to engineering teams, RAG pipelines on
                pgvector and Elasticsearch, and production AI.
              </p>
              <p>
                The work runs from research to deployment. On one side, reading
                TTS papers closely enough to rebuild Tacotron2, FastSpeech and
                WaveNet from scratch, and a government-funded cancer care project
                that meant encoding nine staging systems across 138 cancer types
                as machine-readable rules. On the other, the unglamorous
                engineering that makes those things usable — an agent scanning
                80,000+ repositories on a daily cycle, OCR that recovers
                Bijoy-encoded Bangla from decades of bank circulars, a tender
                evaluator that has to return a defensible Pass or Fail.
              </p>
              <p>
                Before that I was at Joint Venture AI, where I moved from Trainee
                to Junior AI Developer and briefly acted as team lead, and where
                the work was recognised with Best AI Developer and Operation
                Hero. I have also taught it: 40 students through Betopia&apos;s
                recruitment program, from classification and regression up to
                CNNs, generative AI and LLMs.
              </p>
              <p>
                I am reading for an MSc in Computer Science &amp; Engineering at
                BRAC University, specializing in Data Science, alongside the job
                — currently at a 4.00 CGPA. Most of what I learn ends up public:
                71 repositories and 129 Kaggle notebooks.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* -------------------------------------------------------- Open source */

export function OpenSource() {
  return (
    <section className="border-b border-rule py-20 md:py-28">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <SectionHead
          eyebrow="Open source"
          title="Open Source & Experiments"
          lead="71 public repositories. A selection below."
        />

        <ul className="mt-12 grid gap-px border border-rule bg-rule sm:grid-cols-2 md:mt-20">
          {REPOS.map((r, i) => (
            <Reveal key={r.name} as="li" delay={i * 45} className="bg-paper">
              <a
                href={`${PROFILE.github}/${r.name}`}
                target="_blank"
                rel="noreferrer"
                className="group block px-7 py-8 transition-colors duration-300 hover:bg-raised/70"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="break-all font-mono text-[13px] text-ink">
                    {r.name}
                  </span>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-faint transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{r.desc}</p>
                <p className="mt-5 font-mono text-[12px] text-faint">{r.lang}</p>
              </a>
            </Reveal>
          ))}
        </ul>

        <Reveal delay={120}>
          <a
            href={`${PROFILE.github}?tab=repositories`}
            target="_blank"
            rel="noreferrer"
            className="group mt-10 inline-flex items-center gap-2.5 py-2 text-[15px] text-ink"
          >
            <span className="link-underline">View all 71 repositories</span>
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ Contact */

export function Contact() {
  return (
    <section id="contact" className="border-b border-rule py-24 md:py-32">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <h2
          className="display max-w-[20ch] text-ink"
          style={{ fontSize: 'clamp(2.4rem, 5vw, 4rem)' }}
        >
          <Words text="Let's build something intelligent." step={55} />
        </h2>

        <Reveal delay={340}>
          <p className="mt-10 max-w-[38rem] text-[17px] leading-relaxed text-muted md:text-[18px]">
            Have an AI product, research idea, or engineering problem worth
            exploring?
          </p>
        </Reveal>

        <Reveal delay={420}>
          <div className="mt-14 flex flex-wrap items-center gap-x-9 gap-y-4">
            <a
              href={`mailto:${PROFILE.email}`}
              className="group inline-flex items-center gap-3 border border-ink bg-ink px-8 py-4 text-[15px] text-paper transition-colors duration-300 hover:border-accent hover:bg-accent"
            >
              Get in touch
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              >
                →
              </span>
            </a>
            {[
              { label: 'GitHub', href: PROFILE.github },
              { label: 'LinkedIn', href: PROFILE.linkedin },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="group -my-2 inline-flex items-center gap-2 py-2 text-[15px] text-ink"
              >
                <span className="link-underline">{l.label}</span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                >
                  ↗
                </span>
              </a>
            ))}
          </div>
        </Reveal>

        <Reveal delay={500}>
          <dl className="mt-16 grid gap-8 border-t border-rule pt-10 sm:grid-cols-3">
            {[
              { k: 'Email', v: PROFILE.email, href: `mailto:${PROFILE.email}` },
              { k: 'GitHub', v: PROFILE.githubHandle, href: PROFILE.github },
              { k: 'Kaggle', v: PROFILE.kaggleHandle, href: PROFILE.kaggle },
            ].map((c) => (
              <div key={c.k}>
                <dt className="meta">{c.k}</dt>
                <dd className="mt-3">
                  <a
                    href={c.href}
                    target={c.href.startsWith('mailto') ? undefined : '_blank'}
                    rel="noreferrer"
                    className="link-underline -my-1.5 inline-block break-all py-1.5 font-mono text-[14px] text-body"
                  >
                    {c.v}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- Footer */

export function Footer() {
  return (
    <footer className="py-16 md:py-20">
      <div className="mx-auto max-w-shell px-6 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="font-mono text-[14px] font-medium tracking-[0.2em] text-ink">
              {PROFILE.initials}
            </p>
            <p className="mt-6 text-[16px] text-body">{PROFILE.name}</p>
            <p className="mt-1.5 text-[15px] text-muted">{PROFILE.role}</p>
            <p className="mt-6 font-mono text-[12px] text-faint">
              AI Engineering · ML · Research
            </p>
          </div>

          <ul className="flex flex-wrap gap-x-9 gap-y-3">
            {[
              { label: 'GitHub', href: PROFILE.github },
              { label: 'LinkedIn', href: PROFILE.linkedin },
              { label: 'Email', href: `mailto:${PROFILE.email}` },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  className="link-underline -my-1.5 inline-block py-1.5 text-[15px] text-muted transition-colors hover:text-ink"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-16 border-t border-rule pt-10 font-mono text-[12px] text-faint">
          © 2026 {PROFILE.name}
        </p>
      </div>
    </footer>
  );
}
