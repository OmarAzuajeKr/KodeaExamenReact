/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.{js,jsx,}'],
  theme: {
    extend: {
      colors: {
        darkPurple: '#21052D',
        folly: '#FF0D54',
        springGreen: '#00FF85',
        robinEggBlue: '#01C2D2',
        orange: '#FFA91F'
      },
      fontFamily: {
        'sans': ['Poppins', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        'auxo': '0px 4px 4px 0px #DCDCDC40'
      }
    },
  },
  plugins: [],
}

