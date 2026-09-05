/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05070B',
          900: '#0A0D13',
          850: '#0E121A',
          800: '#12151D',
          700: '#1B1F2A',
          600: '#262B39',
        },
        signal: {
          100: '#DFFBF4',
          300: '#8CEFDB',
          400: '#4FE3CB',
          500: '#22D3B8',
          600: '#14A896',
          700: '#0F8377',
        },
        ion: {
          100: '#EEE9FE',
          300: '#C4B3FB',
          400: '#A78BFA',
          500: '#8B5CF6',
          600: '#7C3AED',
          700: '#6427C8',
        },
        ember: {
          300: '#FBD08A',
          400: '#FBBF53',
          500: '#F5A623',
          600: '#D6890F',
        },
        slate: {
          100: '#EEF1F8',
          200: '#DCE1EC',
          300: '#AAB2C5',
          400: '#828AA0',
          500: '#6B7385',
          600: '#4E5566',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"IBM Plex Sans"', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      backgroundImage: {
        'signal-gradient': 'linear-gradient(135deg, #22D3B8 0%, #8B5CF6 100%)',
        'signal-gradient-soft': 'linear-gradient(135deg, rgba(34,211,184,0.15) 0%, rgba(139,92,246,0.15) 100%)',
        'radial-fade': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
        'grid-pattern': 'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
      },
      boxShadow: {
        glow: '0 10px 30px -12px rgba(34,211,184,0.28)',
        'glow-ion': '0 10px 30px -12px rgba(139,92,246,0.28)',
        'glow-ember': '0 10px 26px -12px rgba(245,166,35,0.3)',
        panel: '0 1px 0 0 rgba(255,255,255,0.05) inset, 0 20px 60px -25px rgba(0,0,0,0.6)',
      },
      keyframes: {
        blob: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(20px, -30px) scale(1.06)' },
          '66%': { transform: 'translate(-15px, 15px) scale(0.96)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        orbit: {
          from: { transform: 'rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg)' },
          to: { transform: 'rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg)' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(0.9)', opacity: '0.6' },
          '80%, 100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        marquee: {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        blob: 'blob 12s infinite ease-in-out',
        float: 'float 6s ease-in-out infinite',
        orbit: 'orbit 18s linear infinite',
        'pulse-ring': 'pulse-ring 2.4s cubic-bezier(0.2,0.6,0.4,1) infinite',
        'gradient-x': 'gradient-x 6s ease infinite',
        marquee: 'marquee 28s linear infinite',
      },
      maxWidth: {
        content: '1200px',
      },
    },
  },
  plugins: [],
}
