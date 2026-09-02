import Reveal from './Reveal';
import { DrawRule, Words } from './Motion';

/** Shared section opener: a rule that draws itself, eyebrow, heading, lead. */
export default function SectionHead({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
}) {
  return (
    <header className="max-w-[46rem]">
      <DrawRule className="mb-10" />
      <Reveal>
        <p className="meta">{eyebrow}</p>
      </Reveal>
      <h2
        className="display mt-8 text-ink"
        style={{ fontSize: 'clamp(1.95rem, 3.6vw, 2.9rem)' }}
      >
        <Words text={title} />
      </h2>
      {lead && (
        <Reveal delay={140}>
          <p className="mt-7 max-w-[36rem] text-[16px] leading-relaxed text-muted md:text-[20px]">
            {lead}
          </p>
        </Reveal>
      )}
    </header>
  );
}
