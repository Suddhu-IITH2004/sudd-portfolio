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
        dark: '#1b1b1b',
        light: '#f5f5f5',
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
        'circularLight': 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px)',
        'circularDark': 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 100px)',
        'circularLightLg': 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 80px)',
        'circularDarkLg': 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 80px)',
        'circularLightMd': 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 60px)',
        'circularDarkMd': 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 60px)',
        'circularLightSm': 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 40px)',
        'circularDarkSm': 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1b1b1b 8px,#1b1b1b 40px)',
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
        '2xl': {  min: '1536px'  },
        xl: { min: '1280px', max: '1535px' },
        lg: {  min: '1024px', max: '1279px' },
        md: {  min: '768px', max: '1023px' },
        sm: { min: '320px', max: '767px' },
        xs: { min: '0px', max: '319px' },
      },
    },
  },
  plugins: [],
}

