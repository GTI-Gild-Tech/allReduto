/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        retrokia: ['Retrokia', 'sans-serif'],
        fraunces: ['Fraunces', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      screens: {
        'xs': '32rem',
        '3xl': '120rem',
      },
    },
  },
  plugins: [],
};
