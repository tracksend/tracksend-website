import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22D3EE',
        secondary: '#E25535',
        navy: '#0F172A',
        'navy-dark': '#0B1120',
        'off-white': '#FDFCFB',
        'text-main': '#1E293B',
        'text-muted': '#64748B',
        'tint-cyan': '#b7f4fb',
        'tint-coral': '#efbdb1',
        'surface-card': '#F8FAFC',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Manrope', 'sans-serif'],
      },
      boxShadow: {
        float: '0 20px 50px -12px rgba(15, 23, 42, 0.12)',
        'glow-cyan': '0 0 20px rgba(34, 211, 238, 0.3)',
      },
    },
  },
  plugins: [],
}

export default config

