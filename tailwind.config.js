/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surface system
        canvas: '#FAF8F5', // page background
        surface: '#FFFFFF', // cards / panels
        ink: '#2C2C2C', // body text
        muted: '#6B6660', // secondary text
        hairline: '#E8E4DD', // borders / dividers

        // Brand accents
        primary: {
          DEFAULT: '#285A63', // deep teal
          50: '#EEF3F4',
          100: '#D7E3E5',
          200: '#AFC8CC',
          300: '#7FA6AC',
          400: '#4F848C',
          500: '#285A63',
          600: '#234D55',
          700: '#1D4047',
          800: '#173336',
          900: '#112227',
        },
        accent: {
          DEFAULT: '#C87455', // terracotta
          50: '#FAF1ED',
          100: '#F3DFD6',
          200: '#E7BFAE',
          300: '#DB9F85',
          400: '#D48A6D',
          500: '#C87455',
          600: '#B5623F',
          700: '#94502F',
          800: '#6E3A22',
          900: '#472516',
        },
        secondary: {
          DEFAULT: '#75836A', // sage
          50: '#F1F4EF',
          100: '#E2E9DD',
          200: '#C6D3BD',
          300: '#A7BA98',
          400: '#8A9C7B',
          500: '#75836A',
          600: '#5E6A52',
          700: '#4A5340',
          800: '#363C2F',
          900: '#212519',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      borderRadius: {
        '2xl': '16px',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(44, 44, 44, 0.04), 0 4px 16px rgba(44, 44, 44, 0.06)',
        lift: '0 2px 4px rgba(44, 44, 44, 0.05), 0 12px 32px rgba(44, 44, 44, 0.10)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'scroll-hint': {
          '0%': { transform: 'translateY(0)', opacity: '0.2' },
          '40%': { opacity: '1' },
          '80%': { transform: 'translateY(14px)', opacity: '0' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.8s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fade-in 0.9s ease both',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both',
        'scroll-hint': 'scroll-hint 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
