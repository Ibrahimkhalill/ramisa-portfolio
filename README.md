# Ramisa Sharar Nidhi — Portfolio

Minimal editorial portfolio for an AI Developer & ML Engineer.

## Source of truth

Every fact on this site — figures, dates, award names, repository URLs, course
titles, the paper title — is transcribed from the existing portfolio at
<https://ramisaportfolio.vercel.app> and lives in a single file, `src/data.ts`.
Nothing is invented. Change a number there and the whole site follows.

## Design notes

**Typography and whitespace carry the design.** Warm off-white ground, near-black
ink, one muted green accent. Inter for text, JetBrains Mono for technical
metadata — the mono is what makes the page read as engineering rather than
marketing. Hairline rules instead of cards.

**The project visuals are architecture diagrams, drawn in CSS.** There are no
product screenshots available, and unrelated stock photography would
misrepresent the work. For this audience a real eight-step pipeline is more
convincing than a dashboard mock — and it costs no image bytes and stays sharp
at any size.

**No skill bars.** A percentage claims a level of proficiency the source never
states, and invites comparing numbers instead of reading the work.

**Animation is subtle and optional.** Headlines rise word by word, figures count
up, section rules draw themselves in. Everything is driven by
IntersectionObserver — there is no scroll listener anywhere on the page — and
the hidden state lives in CSS, so under `prefers-reduced-motion` the content is
simply present rather than depending on JS to appear.

## Running it

```bash
npm install
npm run dev
npm run build
```
