/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Warm off-white ground, near-black ink, one muted green accent.
        // Deliberately narrow: the design leans on type and whitespace, so a
        // wider palette would only give it more ways to look generic.
        paper: '#FBFAF8',
        raised: '#F4F2EE',
        ink: '#14150F',
        body: '#3A3A34',
        muted: '#75756C',
        faint: '#9A9A90',
        rule: '#E3E0D9',
        'rule-soft': '#EDEAE4',
        accent: '#3F6B52',
        'accent-soft': '#5C8A70',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        shell: '1240px',
      },
    },
  },
  plugins: [],
};
