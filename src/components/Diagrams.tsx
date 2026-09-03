/**
 * Architecture diagrams, one per project.
 *
 * There are no product screenshots to show, and dropping in unrelated stock
 * photography would misrepresent the work. Drawing the actual architecture is
 * both honest and more convincing for this audience: a reader who builds AI
 * systems learns more from an eight-step pipeline than from a dashboard mock.
 *
 * Everything here is CSS and inline SVG — no images to download, and it stays
 * sharp at any size.
 */

const Cell = ({
  children,
  accent = false,
}: {
  children: React.ReactNode;
  accent?: boolean;
}) => (
  <div
    className={`border px-3 py-2 text-[13px] leading-snug ${
      accent
        ? 'border-accent/35 bg-accent/[0.06] text-accent'
        : 'border-rule bg-paper text-body'
    }`}
  >
    {children}
  </div>
);

const Arrow = ({ vertical = false }: { vertical?: boolean }) => (
  <div
    aria-hidden="true"
    className={`shrink-0 text-faint ${vertical ? 'py-1 text-center' : 'px-1'}`}
  >
    {vertical ? '↓' : '→'}
  </div>
);

const Frame = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <figure className="border border-rule bg-raised/60">
    <figcaption className="meta flex items-center justify-between border-b border-rule px-4 py-2.5">
      <span>{label}</span>
      <span className="tracking-normal normal-case text-faint">architecture</span>
    </figcaption>
    <div className="p-5 sm:p-7">{children}</div>
  </figure>
);

/* ------------------------------------------------ 01 Betopia AI Coder */

function CoderDiagram() {
  return (
    <Frame label="In-editor agent loop">
      <ol className="space-y-0">
        {[
          ['Open workspace', 'context retrieval'],
          ['Plan across files', 'LLM'],
          ['Reviewable diffs', 'multi-file'],
        ].map(([k, v]) => (
          <li key={k}>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border border-rule bg-paper px-4 py-3">
              <span className="break-words text-[14px] text-body">{k}</span>
              <span className="meta">{v}</span>
            </div>
            <Arrow vertical />
          </li>
        ))}
      </ol>
      {/* The point of the tool: nothing lands without a human saying so. */}
      <div className="grid grid-cols-2 gap-3">
        <div className="border border-accent/35 bg-accent/[0.07] px-4 py-3 text-center">
          <span className="font-mono text-[14px] text-accent">ACCEPT</span>
        </div>
        <div className="border border-rule bg-paper px-4 py-3 text-center">
          <span className="font-mono text-[14px] text-faint">REJECT</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-px bg-rule">
        {[
          ['MCP tools', 'reaches internal systems'],
          ['Provider-agnostic', 'model layer'],
          ['Terminal commands', 'gated behind approval'],
        ].map(([k, v]) => (
          <div key={k} className="bg-paper px-4 py-3">
            <p className="break-words font-mono text-[12px] text-body">{k}</p>
            <p className="mt-1 text-[12px] text-faint">{v}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ------------------------------------------ 02 Betopia Web Builder */

function BuilderDiagram() {
  return (
    <Frame label="Figma URL → running app">
      <ol className="space-y-0">
        {[
          ['Figma design URL', 'input'],
          ['Project spec', 'architecture · design · assets'],
          ['React + TypeScript app', 'components · data · pages'],
          ['Editor, preview, terminal', 'one window'],
        ].map(([k, v], i, arr) => (
          <li key={k}>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border border-rule bg-paper px-4 py-3">
              <span className="break-words text-[14px] text-body">{k}</span>
              <span className="meta">{v}</span>
            </div>
            {i < arr.length - 1 && <Arrow vertical />}
          </li>
        ))}
      </ol>

      {/* Both of these are the literal states the agent panel reports. The
          builder writes files and runs shell commands on the developer's own
          machine, so which of the two an action gets is the whole safety
          story. */}
      <div className="mt-6 grid grid-cols-2 gap-3">
        <div className="border border-accent/35 bg-accent/[0.07] px-4 py-3 text-center">
          <span className="font-mono text-[13px] text-accent">APPROVED</span>
        </div>
        <div className="border border-rule bg-paper px-4 py-3 text-center">
          <span className="font-mono text-[13px] text-faint">NOT REQUIRED</span>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-px bg-rule">
        {[
          ['write_file · delete_file · bash', 'every call carries its approval state'],
          ['audit.jsonl', 'append-only, one line per action'],
          ['Errors · warnings · Auto Fix', 'console over the live build'],
          ['Git and Publish', 'commit and ship without leaving'],
        ].map(([k, v]) => (
          <div key={k} className="bg-paper px-4 py-3">
            <p className="break-words font-mono text-[12px] text-body">{k}</p>
            <p className="mt-1 text-[12px] text-faint">{v}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ------------------------------------------- 03 GitLab Analysis Agent */

const GITLAB_STEPS = [
  'Authenticate',
  'Fetch repositories',
  'Extract features · LLM',
  'Find similar features',
  'Find unique features',
  'Quality check',
  'Reusable code %',
  'Suggest IP products',
];

function GitLabDiagram() {
  return (
    <Frame label="8-step pipeline · 80,000+ repositories">
      <ol className="grid grid-cols-1 gap-px bg-rule sm:grid-cols-2">
        {GITLAB_STEPS.map((step, i) => (
          <li
            key={step}
            className="flex items-baseline gap-3 bg-paper px-4 py-3.5"
          >
            <span className="font-mono text-[12px] text-faint">
              {String(i + 1).padStart(2, '0')}
            </span>
            <span className="break-words text-[14px] text-body">{step}</span>
          </li>
        ))}
      </ol>
      <div className="mt-5 flex flex-wrap items-center gap-2">
        <span className="meta mr-1">Providers</span>
        {['Anthropic', 'OpenAI', 'Gemini'].map((p) => (
          <span
            key={p}
            className="border border-rule px-2.5 py-1 font-mono text-[13px] text-body"
          >
            {p}
          </span>
        ))}
        <span className="font-mono text-[13px] text-accent">auto-fallback</span>
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------------ 02 PPR */

function PprDiagram() {
  const steps = [
    { k: 'Tender PDF', s: 'input' },
    { k: 'Requirement extraction', s: 'GPT-4o Vision' },
    { k: 'Document readability', s: 'OCR' },
    { k: 'L1 — all documents present?', s: 'check' },
    { k: 'L2 — criteria satisfied?', s: 'evaluate' },
  ];
  return (
    <Frame label="Tender evaluation pipeline">
      <ol className="space-y-0">
        {steps.map((step) => (
          <li key={step.k}>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border border-rule bg-paper px-4 py-3">
              <span className="break-words text-[14px] text-body">{step.k}</span>
              <span className="meta">{step.s}</span>
            </div>
            <Arrow vertical />
          </li>
        ))}
      </ol>
      <div className="grid grid-cols-2 gap-3">
        <div className="border border-accent/35 bg-accent/[0.06] px-4 py-3 text-center">
          <span className="font-mono text-[13px] text-accent">PASS</span>
        </div>
        <div className="border border-rule bg-paper px-4 py-3 text-center">
          <span className="font-mono text-[13px] text-faint">FAIL</span>
        </div>
      </div>
    </Frame>
  );
}

/* -------------------------------------------------------- 03 Scraper */

function ScraperDiagram() {
  // 4,600 of 4,627 downloaded. At 100 dots, that is 99.4% — 99 filled, 1 not.
  const total = 100;
  const filled = Math.round((4600 / 4627) * total);
  return (
    <Frame label="4,627 circulars · Bangladesh Bank">
      <div
        className="grid grid-cols-[repeat(20,minmax(0,1fr))] gap-[3px]"
        role="img"
        aria-label="4,600 of 4,627 PDF circulars downloaded"
      >
        {Array.from({ length: total }, (_, i) => (
          <span
            key={i}
            className={`aspect-square ${
              i < filled ? 'bg-accent/70' : 'border border-rule bg-paper'
            }`}
          />
        ))}
      </div>
      <div className="mt-6 grid grid-cols-1 gap-px bg-rule">
        {[
          ['undetected-chromedriver', 'F5 / Shape bypass'],
          ['Wayback Machine', 'fallback source'],
          ['Tesseract OCR', 'Bijoy-encoded Bangla'],
        ].map(([k, v]) => (
          <div key={k} className="bg-paper px-4 py-3">
            <p className="font-mono text-[13px] text-body">{k}</p>
            <p className="mt-1 text-[13px] text-faint">{v}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------- 04 Language */

function LanguageDiagram() {
  return (
    <Frame label="Conversation loop">
      <div className="space-y-3">
        {[
          ['Conversation', 'text ↔ text · audio ↔ audio'],
          ['Speech recognition', 'STT'],
          ['AI response', 'LLM'],
          ['Grammar correction', 'real time'],
          ['Mistake tracking', 'errors red · fixes green'],
          ['Learning progress', 'goal tracking'],
        ].map(([k, v], i, arr) => (
          <div key={k}>
            <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 border border-rule bg-paper px-4 py-3">
              <span className="break-words text-[14px] text-body">{k}</span>
              <span className="meta">{v}</span>
            </div>
            {i < arr.length - 1 && <Arrow vertical />}
          </div>
        ))}
      </div>
      <div className="mt-5 flex gap-2">
        <span className="border border-rule px-2.5 py-1 font-mono text-[13px] text-body">Free</span>
        <span className="border border-accent/35 bg-accent/[0.06] px-2.5 py-1 font-mono text-[13px] text-accent">
          Premium
        </span>
      </div>
    </Frame>
  );
}

/* ------------------------------------------------------- 05 Culinary */

function CulinaryDiagram() {
  return (
    <Frame label="White-label architecture">
      <div className="grid grid-cols-3 gap-px bg-rule">
        {['Chef A', 'Chef B', 'Chef C'].map((b) => (
          <div key={b} className="bg-paper px-3 py-3 text-center">
            <p className="font-mono text-[13px] text-body">{b}</p>
            <p className="mt-1 text-[12px] text-faint">branded instance</p>
          </div>
        ))}
      </div>
      <Arrow vertical />
      <div className="border border-accent/35 bg-accent/[0.06] px-4 py-3 text-center">
        <p className="font-mono text-[12px] text-accent">Shared LLM core</p>
      </div>
      <Arrow vertical />
      <div className="grid grid-cols-2 gap-px bg-rule">
        {[
          'Recipe protection',
          'AI variations',
          'Analytics',
          'Monetization control',
        ].map((c) => (
          <div key={c} className="bg-paper px-3 py-3">
            <p className="hyphens-auto break-words text-[13px] leading-snug text-body">{c}</p>
          </div>
        ))}
      </div>
    </Frame>
  );
}

/* ---------------------------------------------------------- 06 Voice */

function VoiceDiagram() {
  const stages = ['Research', 'Architecture', 'Training', 'Evaluation', 'Deployment'];
  return (
    <Frame label="Research case study">
      <ol className="flex flex-wrap items-center gap-y-2">
        {stages.map((s, i) => (
          <li key={s} className="flex items-center">
            <Cell accent={i === 0}>{s}</Cell>
            {i < stages.length - 1 && <Arrow />}
          </li>
        ))}
      </ol>

      <div className="mt-7 space-y-px bg-rule">
        {[
          ['Tacotron2', 'encoder–decoder · attention'],
          ['FastSpeech', 'non-autoregressive'],
          ['WaveNet', 'neural vocoder'],
          ['GAN-TTS', 'adversarial synthesis'],
          ['VAE-based', 'latent speech representation'],
        ].map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-4 bg-paper px-4 py-2.5">
            <span className="break-words font-mono text-[12px] text-body">{k}</span>
            <span className="text-[13px] text-faint">{v}</span>
          </div>
        ))}
      </div>

      <p className="mt-6 border-t border-rule pt-4 font-mono text-[13px] leading-relaxed text-faint">
        preprocessing → encoder–decoder → mel-spectrogram loss → deployment
      </p>
    </Frame>
  );
}

const MAP = {
  coder: CoderDiagram,
  builder: BuilderDiagram,
  gitlab: GitLabDiagram,
  ppr: PprDiagram,
  scraper: ScraperDiagram,
  language: LanguageDiagram,
  culinary: CulinaryDiagram,
  voice: VoiceDiagram,
};

export default function Diagram({ kind }: { kind: keyof typeof MAP }) {
  const C = MAP[kind];
  return <C />;
}
