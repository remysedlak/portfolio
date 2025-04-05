/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html','./src/**/*.{jsx,js}'],
  darkMode: 'class',
  theme: {
    extend: {
      
      fontFamily: {
        garamond: ['"Red Hat Mono"', 'serif'],
      },
      keyframes: {
        pulseOnce: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
      },
      animation: {
        pulseOnce: 'pulseOnce 1s ease-out',
      },
    },
  },
  plugins: [],
}