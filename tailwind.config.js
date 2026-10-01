/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '2xs': '375px',
        '3xs': '320px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        'tablet': '768px',
        'laptop': '1024px',
        'desktop': '1280px',
        'wide': '1400px',
      },
      height: {
        'screen-safe': 'calc(var(--vh, 1vh) * 100)',
      },
      minHeight: {
        'screen-safe': 'calc(var(--vh, 1vh) * 100)',
      },
      colors: {
        // Accu Nex Taxation — Navy & Gold Professional Palette
        navy: {
          50:  '#e8f0f9',
          100: '#c6d9ef',
          200: '#8db0d9',
          300: '#5487bf',
          400: '#2a5f8f',
          500: '#1e4a72',
          600: '#1a3a5c',   // PRIMARY
          700: '#162032',   // CARD BG
          800: '#112233',
          900: '#0d1b2a',   // DARKEST BG
          950: '#070e16',
        },
        gold: {
          50:  '#fef9ec',
          100: '#fdf0c4',
          200: '#fce38a',
          300: '#ffd56b',
          400: '#f4b942',   // PRIMARY ACCENT
          500: '#d9a230',
          600: '#b8871e',
          700: '#8c6312',
          800: '#614207',
          900: '#3d2800',
        },
        // Semantic aliases
        primary: {
          DEFAULT: '#1a3a5c',
          dark:    '#0d1b2a',
          card:    '#162032',
          border:  '#1e3a54',
          light:   '#2a5f8f',
        },
        accent: {
          DEFAULT: '#f4b942',
          dark:    '#d9a230',
          light:   '#ffd56b',
          fg:      '#0d1b2a',   // text on gold bg
        },
        success: '#22c55e',   // WhatsApp green
        danger:  '#ef4444',
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Inter', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      animation: {
        'fade-in-up':    'fadeInUp 0.6s ease-out forwards',
        'fade-in-left':  'fadeInLeft 0.6s ease-out forwards',
        'fade-in-right': 'fadeInRight 0.6s ease-out forwards',
        'fade-in':       'fadeIn 0.5s ease-out forwards',
        'scale-in':      'scaleIn 0.5s ease-out forwards',
        'counter':       'counter 2s ease-out forwards',
        'marquee':       'marquee 30s linear infinite',
        'marquee-rev':   'marqueeReverse 30s linear infinite',
        'pulse-slow':    'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-subtle': 'bounceSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%':   { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%':   { opacity: '0', transform: 'translateX(24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        marqueeReverse: {
          '0%':   { transform: 'translateX(-50%)' },
          '100%': { transform: 'translateX(0)' },
        },
        bounceSubtle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
      },
      backgroundImage: {
        'gradient-navy':       'linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 100%)',
        'gradient-gold':       'linear-gradient(135deg, #f4b942 0%, #d9a230 100%)',
        'gradient-hero':       'linear-gradient(135deg, #0d1b2a 0%, #162032 50%, #0d1b2a 100%)',
        'gradient-card':       'linear-gradient(180deg, #162032 0%, #0d1b2a 100%)',
        'gradient-radial':     'radial-gradient(var(--tw-gradient-stops))',
        'dot-pattern':         "radial-gradient(circle, #1e3a54 1px, transparent 1px)",
      },
      backgroundSize: {
        'dot-sm': '20px 20px',
        'dot-md': '28px 28px',
        'dot-lg': '36px 36px',
      },
      boxShadow: {
        'gold-sm':  '0 2px 8px rgba(244, 185, 66, 0.25)',
        'gold-md':  '0 4px 16px rgba(244, 185, 66, 0.3)',
        'gold-lg':  '0 8px 32px rgba(244, 185, 66, 0.35)',
        'navy-sm':  '0 2px 8px rgba(13, 27, 42, 0.5)',
        'navy-md':  '0 4px 24px rgba(13, 27, 42, 0.6)',
        'card':     '0 1px 3px rgba(0,0,0,0.3), 0 4px 12px rgba(0,0,0,0.2)',
      },
      backdropBlur: {
        xs: '2px',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '26': '6.5rem',
        '30': '7.5rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      }
    },
  },
  plugins: [],
}