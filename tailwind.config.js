/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['content/**/*.md','pages/**/*.vue','layouts/**/*.vue','components/**/*.vue'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography')],
}
