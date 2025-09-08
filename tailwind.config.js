/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'xsm': '480px',
        'smx': '680px',
        'mdx': '780px',
        'custom-990': '990px',
        'custom-1040': '1040px',
      },
      keyframes: {
        'spin-color': {
          '0%': { transform: 'rotate(0deg)', backgroundColor: '#f87171' },
          '25%': { transform: 'rotate(90deg)', backgroundColor: '#34d399' },
          '50%': { transform: 'rotate(180deg)', backgroundColor: '#60a5fa' },
          '75%': { transform: 'rotate(270deg)', backgroundColor: '#fbbf24' },
          '100%': { transform: 'rotate(360deg)', backgroundColor: '#f87171' },
        },
        floatX: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(100vw)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(100vh)' },
        },
        floatXY: {
          '0%': { transform: 'translate(0, 0)' },
          '50%': { transform: 'translate(50vw, 50vh)' },
          '100%': { transform: 'translate(0, 0)' },
        },
      },
      
      animation: {
        spinSlow: 'spin 5s linear infinite',
        'spin-color': 'spin-color 4s linear infinite',
        floatX: 'floatX 20s linear infinite',
        floatY: 'floatY 25s linear infinite',
        floatXY: 'floatXY 30s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
