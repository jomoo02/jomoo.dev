/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: ['content/**/*.md','pages/**/*.vue','layouts/**/*.vue','components/**/*.vue'],
  theme: {
    extend: {    
      screens:{
      'xs':'281px',
      ...defaultTheme.screens,
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
