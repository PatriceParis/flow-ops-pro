/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './en/index.html', './index.tsx', './App.tsx', './components/**/*.tsx', './demo-cockpit/**/*.{html,tsx,ts}'],
  theme: {
    extend: {
      fontFamily: {
        mono: ['Geist Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
        sans: [
          'Instrument Sans',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
