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
      typography: {
        DEFAULT: {
          css: {
            'code': {
                  color: "#333",
            // You can also use @apply to inline existing utility classes
            "@apply bg-gray-100 text-gray-700 p-1 rounded font-medium": "",
            },
            'code::before': {
              content: '',
            },
            'code::after': {
              content: '',
            },
            'blockquote p:first-of-type::before': {
              content: '',
            },
            'blockquote p:last-of-type::after': {
              content: '',
            },
          }
        }
      }
    },
  },


  plugins: [require('@tailwindcss/typography')],
}
