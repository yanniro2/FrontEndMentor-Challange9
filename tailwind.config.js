/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      Mobile: { 'min': '375px', 'max': '600px' },
    },

    colors: {
      // Primary
      "Dark-cyan": "hsl(185, 75%, 39%)",
      "Very-dark-desaturated-blue": "hsl(229, 23%, 23%)",
      "Dark-grayish-blue": "hsl(227, 10%, 46%)",

      //Neutral
      'Dark-gray': 'hsl(0, 0%, 59%)',
    },
    fontSize: {
      'ms': '18px',
    },
    fontFamily: {
      kumbh: ['Kumbh Sans', 'sans-serif'],
    },
    fontWeight: {
      'ms': 400,
      'lg': 700,
    },

    extend: {},
  },
  plugins: [],
}
