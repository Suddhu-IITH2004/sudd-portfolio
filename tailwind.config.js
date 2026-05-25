/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

const withOpacityValue = (variable) => ({ opacityValue }) => {
  if (opacityValue !== undefined) {
    return `rgba(var(${variable}), ${opacityValue})`
  }
  return `rgb(var(${variable}))`
}

export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        canvas: withOpacityValue('--color-canvas'),
        surface: withOpacityValue('--color-surface'),
        card: withOpacityValue('--color-card'),
        text: withOpacityValue('--color-text'),
        muted: withOpacityValue('--color-muted'),
        border: withOpacityValue('--color-border'),
        accent: '#58e6d9',
        accentSoft: '#9c6bff',
        neon: '#ff4dd8',
        amber: '#f9a826',
      },
      fontFamily: {
        sans: ['"IBM Plex Sans"', ...defaultTheme.fontFamily.sans],
        display: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
        mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
      },
      backgroundImage: {
        'hero-noise': 'radial-gradient(circle at 20% 20%, rgba(88,230,217,0.35), transparent 55%), radial-gradient(circle at 80% 0%, rgba(156,107,255,0.35), transparent 45%)',
        'glass-panel': 'linear-gradient(135deg, rgba(15,23,42,0.85), rgba(15,23,42,0.65))',
        'grid-overlay': 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 0 60px rgba(88,230,217,0.25)',
        card: '0 20px 40px rgba(0,0,0,0.35)',
      },
      keyframes: {
        'pulse-soft': {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 0.9 },
        },
      },
      animation: {
        'pulse-soft': 'pulse-soft 6s ease-in-out infinite',
      },
      screens: {
        '2xl': { max: '1535px' },
        xl: { max: '1279px' },
        lg: { max: '1023px' },
        md: { max: '767px' },
        sm: { max: '639px' },
        xs: { max: '479px' },
      },
    },
  },
  plugins: [],
}

