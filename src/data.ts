/**
 * Every fact on this site comes from the existing portfolio at
 * https://ramisaportfolio.vercel.app and lives here, in one place.
 *
 * Nothing in this file is invented. Figures, dates, award names, repository
 * URLs, course titles and the paper title are transcribed as published. If a
 * number changes there, change it here and the whole site follows.
 */

export const PROFILE = {
  name: 'Ramisa Sharar Nidhi',
  initials: 'RSN',
  role: 'AI Developer & ML Engineer',
  location: 'Dhaka, Bangladesh',
  currentRole: 'AI Developer at Betopia Group',
  email: 'ramisa.sharar377@gmail.com',
  github: 'https://github.com/Ramisa-16',
  githubHandle: 'github.com/Ramisa-16',
  linkedin: 'https://www.linkedin.com/in/ramisashararnidhi',
  linkedinHandle: 'linkedin.com/in/ramisashararnidhi',
  kaggle: 'https://www.kaggle.com/ramisashararnidhi',
  kaggleHandle: 'kaggle.com/ramisashararnidhi',
  photo: '/ramisa.jpg',
};

/** The credibility strip. Four figures, all published on the source site. */
export const STATS = [
  { value: '71', label: 'GitHub Repositories' },
  { value: '129', label: 'Kaggle Notebooks' },
  { value: '4.00', label: 'MSc CGPA' },
  { value: '1', label: 'IEEE Publication' },
];

export type Project = {
  index: string;
  category: string;
  title: string;
  description: string;
  tech: string[];
  /** Which architecture diagram to render alongside it. */
  diagram:
    | 'gitlab'
    | 'ppr'
    | 'scraper'
    | 'language'
    | 'culinary'
    | 'voice';
  href: string;
  /**
   * The Betopia work repositories are private, so an anonymous visitor gets a
   * 404. Rather than ship a dead link, those are labelled instead of linked.
   * Verified by request: Gitlab-Backend-Main, Gitlab-Frontend-Main,
   * PPR-PE-Assistant and BangladeshBank return 404 unauthenticated; every other
   * repository linked here returns 200.
   */
  private?: boolean;
  /** Optional figures pulled from the source, rendered as a small stat row. */
  facts?: { value: string; label: string }[];
};

export const PROJECTS: Project[] = [
  {
    index: '01',
    category: 'Developer Tooling · Betopia',
    title: 'GitLab Analysis Agent',
    description:
      'A Django + Celery agent that scans every GitLab repository on a 39-minute cycle. An eight-step pipeline authenticates, fetches repositories, extracts features with an LLM, finds similar and unique capabilities, runs a quality check, calculates reusable code percentage, and suggests potential IP products. Supports Anthropic, OpenAI and Gemini with automatic fallback. A companion React dashboard presents it across twelve pages — project explorer, feature browser, modules, domains, similarity viewer, quality reports, IP suggestions, semantic search and agent run history.',
    tech: ['Django', 'Celery', 'PostgreSQL', 'Redis', 'Docker', 'LLM', 'React'],
    diagram: 'gitlab',
    href: 'https://github.com/Ramisa-16/Gitlab-Backend-Main',
    private: true,
    facts: [
      { value: '8', label: 'Pipeline steps' },
      { value: '39 min', label: 'Scan cycle' },
      { value: '12', label: 'Dashboard pages' },
    ],
  },
  {
    index: '02',
    category: 'GovTech · Applied AI',
    title: 'PPR Procurement Evaluation Assistant',
    description:
      'An AI-powered evaluation pipeline for Bangladeshi government tender documents. It extracts requirements from tender PDFs, checks document readability, runs an L1 check for whether every required document is present, then an L2 check for whether those documents satisfy the qualification criteria — returning a Pass or Fail score. Powered by GPT-4o Vision.',
    tech: ['Python', 'GPT-4o Vision', 'OCR', 'PDF', 'GovTech'],
    diagram: 'ppr',
    href: 'https://github.com/Ramisa-16/PPR-PE-Assistant',
    private: true,
  },
  {
    index: '03',
    category: 'Data Engineering · Bangla NLP',
    title: 'Bangladesh Bank Circular Scraper',
    description:
      'A full pipeline that scrapes PDF circulars from Bangladesh Bank, bypassing F5/Shape bot protection with undetected-chromedriver and a Wayback Machine fallback. Legacy Bijoy-encoded Bangla fonts are recovered with Tesseract OCR — the part that makes the archive actually searchable.',
    tech: ['Python', 'Selenium', 'Tesseract OCR', 'Bangla NLP', 'PDF'],
    diagram: 'scraper',
    href: 'https://github.com/Ramisa-16/BangladeshBank',
    private: true,
    facts: [
      { value: '4,627', label: 'PDF circulars found' },
      { value: '4,600', label: 'PDFs downloaded' },
      { value: '0', label: 'Extraction failures' },
    ],
  },
  {
    index: '04',
    category: 'Voice AI · Product',
    title: 'Language Learning App',
    description:
      'A language learning app with text-to-text and audio-to-audio conversation modes. It corrects grammar in real time and tracks mistakes visibly — errors in red, fixes in green — with tiered free and premium plans and goal tracking.',
    tech: ['Python', 'TTS', 'STT', 'LLM', 'Audio'],
    diagram: 'language',
    href: 'https://github.com/Ramisa-16/Language-Learning-App',
  },
  {
    index: '05',
    category: 'AI Platform · White-label',
    title: 'White-Label AI Culinary Platform',
    description:
      'An LLM-driven white-label dashboard for culinary experts. It protects proprietary recipes, offers branded AI-generated variations, and delivers actionable analytics — leaving the chef in full control of content and monetization.',
    tech: ['LLM', 'React', 'Django', 'White-label'],
    diagram: 'culinary',
    href: 'https://github.com/Ramisa-16/White-Label-AI-Culinary-Platform',
  },
  {
    index: '06',
    category: 'Research · Speech Synthesis',
    title: 'TTS Architecture & Voice Cloning R&D',
    description:
      'Deep research into building text-to-speech systems from scratch and via fine-tuning, covering Tacotron2, FastSpeech, WaveNet, GAN-TTS and VAE-based architectures. Documents the full pipeline: data preprocessing, encoder-decoder, mel-spectrogram loss, and deployment.',
    tech: ['Tacotron2', 'FastSpeech', 'WaveNet', 'GAN-TTS', 'Voice Cloning'],
    diagram: 'voice',
    href: 'https://github.com/Ramisa-16/R-D-about-TTS-Models-Architecture-Structure',
  },
];

export const FOCUS = [
  {
    index: '01',
    title: 'LLM & AI Engineering',
    items: ['Claude API', 'OpenAI GPT', 'RAG', 'Agents', 'MCP', 'Elasticsearch', 'pgvector'],
  },
  {
    index: '02',
    title: 'Voice & Speech AI',
    items: ['TTS', 'STT', 'Voice Cloning', 'Tacotron2', 'FastSpeech', 'Transformers'],
  },
  {
    index: '03',
    title: 'Machine Learning',
    items: ['TensorFlow', 'Keras', 'scikit-learn', 'Pandas', 'NumPy', 'Deep Learning'],
  },
  {
    index: '04',
    title: 'Computer Vision',
    items: ['OpenCV', 'YOLO', 'OCR', 'Segmentation', 'CVAT', 'labelImg'],
  },
];

export const EXPERIENCE = [
  {
    index: '01',
    role: 'AI Developer',
    org: 'Betopia Group — Anthropic Partner',
    period: 'April 2025 — Present',
    place: 'Mohakhali, Dhaka',
    body: 'Building AI-driven platforms across 17 Strategic Business Units — GitLab intelligence tools, LLM-powered developer tooling, RAG systems and production AI solutions. Completed all four Anthropic Academy courses as part of the partner onboarding.',
    tags: ['LLMs', 'Django', 'React', 'RAG', 'pgvector', 'MCP', 'Celery'],
    awards: [],
  },
  {
    index: '02',
    role: 'Junior AI Developer → Acting Team Lead',
    org: 'Joint Venture AI (JVAI) — sister concern of Betopia Group',
    period: 'December 2024 — April 2025',
    place: 'Banasree, Dhaka',
    body: 'Promoted from Trainee to Junior AI Developer after probation. Worked on e-Clinic AI (a healthcare chatbot), Content Integrity Pro (an AI text humanizer and detector), and several client-facing AI platforms. Briefly served as acting team leader.',
    tags: ['STT/TTS', 'OCR', 'Voice Cloning'],
    awards: ['Best AI Developer', 'Operation Hero'],
  },
  {
    index: '03',
    role: 'ML Trainer',
    org: 'Betopia Tech Recruitment Program (BTRP)',
    period: '2025',
    place: '40 students from top universities',
    body: 'Conducted training sessions covering Classification, Regression, Deep Learning (CNN, RNN, FNN), Generative AI, LLMs, Transfer Learning and OpenCV. Evaluated and advanced participants through selection phases.',
    tags: ['Classification', 'Regression', 'CNN', 'RNN', 'FNN', 'Generative AI', 'LLMs', 'Transfer Learning', 'OpenCV'],
    awards: [],
  },
  {
    index: '04',
    role: 'Thesis Research — Cancer Care AI',
    org: 'BRAC University · Supervisor: Dr. Jannatun Noor Mukta',
    period: '2023 — 2025',
    place: 'Government-funded',
    body: 'Led a government-funded project to develop a cancer care application. Built a comprehensive cancer staging spreadsheet integrating TNM, FIGO, Ann Arbor, ISS, R-ISS, Rai & Binet, SS, MS and BCLC systems across 138 cancer types.',
    tags: ['Healthcare AI', 'Government Funded'],
    awards: [],
  },
];

export const RESEARCH = [
  {
    kind: 'Publication',
    title:
      'Design and Development of a Peltier Cooling System for Photovoltaic Thermal Management Using Simulation Tools',
    venue: 'IEEE · ICREST 2025',
    detail: 'Published March 2025.',
  },
  {
    kind: 'Certification',
    title: 'Anthropic Academy — all four courses',
    venue: 'Anthropic Partner Network onboarding, 2025',
    detail:
      'Introduction to Agent Skills · Building with the Claude API · Introduction to MCP · Claude Code in Action.',
  },
  {
    kind: 'Course',
    title: 'Ethics of AI',
    venue: 'University of Helsinki · 2 ECTS',
    detail:
      'Fairness, transparency, accountability and human rights in AI systems.',
  },
  {
    kind: 'Research project',
    title: 'Cancer Care AI',
    venue: 'BRAC University · Government-funded',
    detail:
      'Cancer staging across ten systems for 138 cancer types, supporting a cancer care application.',
  },
];

export const ACHIEVEMENTS = [
  { title: 'Best AI Developer', meta: 'JVAI · June 2025' },
  { title: 'Operation Hero', meta: 'Highest KPIs · August 2025' },
  { title: 'Kaggle Notebook Expert', meta: '129 notebooks · best rank 2,930 / 61,647 · 6 bronze medals' },
  { title: 'IEEE Research Publication', meta: 'ICREST 2025' },
  { title: 'Anthropic Academy', meta: '4 certifications' },
  { title: 'MSc CGPA 4.00 / 4.00', meta: 'BRAC University · Semester 1' },
  { title: 'Government-funded Cancer Care Project', meta: '138 cancer types' },
];

export const EDUCATION = [
  {
    degree: 'MSc in Computer Science & Engineering',
    school: 'BRAC University, Dhaka',
    period: 'February 2026 — Present',
    detail:
      'Specialization: Data Science. Probabilistic Graphical Models · Advanced Pattern Recognition · Parallel Algorithms.',
    badge: 'CGPA 4.00 / 4.00',
  },
  {
    degree: 'BSc in Computer Science & Engineering',
    school: 'BRAC University, Dhaka',
    period: '2021 — 2025',
    detail:
      'Completed the undergraduate degree while working full-time as an AI Developer from the 11th semester onward.',
    badge: 'Graduated 2025',
  },
];

/** A selection, not the full 71 — the rest are one click away. */
export const REPOS = [
  { name: 'Gitlab-Pages-Agent', desc: 'CLI agent auto-deploying a docs portal via GitLab Pages', lang: 'Python' },
  { name: 'Github---Gitlab-importer', desc: 'Repository migration tooling across 17 SBUs', lang: 'Python' },
  { name: 'Language-Learning-App', desc: 'Audio-to-audio learning with grammar correction', lang: 'Python' },
  { name: 'Yacht-Assistant-Chatbot', desc: 'GPT-3.5 assistant with docking, navigation and weather modes', lang: 'Jupyter' },
  { name: 'AI-Clothing-Analyzer-Background-Remover', desc: 'Segmentation-based clothing analysis and cutout', lang: 'Python' },
  { name: 'R-D-about-TTS-Models-Architecture-Structure', desc: 'TTS architecture and voice cloning research', lang: 'Docs' },
  { name: 'Real-Time-Object-Detection-with-CCTV-Camera-Feed', desc: 'YOLO detection on live CCTV feeds', lang: 'Python' },
  { name: 'Heart-Attack-Risk-Prediction-Using-ML-Models', desc: 'Ensemble models with full EDA pipeline', lang: 'Jupyter' },
];
