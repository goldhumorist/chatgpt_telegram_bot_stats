/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{html,js}', './components/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        'primary-color': '#021021',
        'primary-text-color': '#2f81f7',
        'primary-btn-color': '#238636',
      },
    },
  },
  plugins: [],
};
