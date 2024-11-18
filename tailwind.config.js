/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      colors: {
        red: {
          600: '#DC2626',
          700: '#B91C1C',
        },
      },
    },
  },
  plugins: [],
};