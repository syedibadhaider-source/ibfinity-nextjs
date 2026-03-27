import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:   '#8B5CF6',
        'p-light': '#A78BFA',
        secondary: '#F97316',
        's-light': '#FB923C',
        cyan:      '#06B6D4',
        dark:      '#04040C',
        'dark-2':  '#080818',
        'dark-3':  '#0E0E28',
      },
      fontFamily: {
        display: ['"Playfair Display"','Georgia','serif'],
        sans:    ['Inter','sans-serif'],
        body:    ['Inter','sans-serif'],
      },
      boxShadow: {
        glow:    '0 0 40px rgba(139,92,246,0.3)',
        'glow-lg':'0 0 80px rgba(139,92,246,0.4)',
        'glow-o':'0 0 40px rgba(249,115,22,0.3)',
        card:    '0 4px 32px rgba(0,0,0,0.4)',
        lift:    '0 24px 64px rgba(0,0,0,0.5)',
      },
      animation: {
        'float-a': 'floatA 7s ease-in-out infinite',
        'float-b': 'floatB 5s ease-in-out infinite',
        marquee:   'marquee 35s linear infinite',
        shimmer:   'shimmer 2.5s infinite',
        'orb-pulse':'orbPulse 6s ease-in-out infinite',
      },
      keyframes: {
        floatA: {
          '0%,100%': { transform:'translateY(0) rotate(0deg)' },
          '50%':     { transform:'translateY(-20px) rotate(1.5deg)' },
        },
        floatB: {
          '0%,100%': { transform:'translateY(0) rotate(0deg)' },
          '50%':     { transform:'translateY(-14px) rotate(-2deg)' },
        },
        marquee: {
          '0%':   { transform:'translateX(0)' },
          '100%': { transform:'translateX(-50%)' },
        },
        shimmer: {
          '0%':   { backgroundPosition:'-200% 0' },
          '100%': { backgroundPosition:'200% 0' },
        },
        orbPulse: {
          '0%,100%': { opacity:'0.18', transform:'scale(1)' },
          '50%':     { opacity:'0.26', transform:'scale(1.08)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
