import tailwindTypography from '@tailwindcss/typography';

export default {
  plugins: [tailwindTypography],
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './utils/**/*.{js,ts}',
    './App.{js,ts,vue}',
    './app.{js,ts,vue}',
    './Error.{js,ts,vue}',
    './error.{js,ts,vue}',
    './app.config.{js,ts}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '281px',
      },
      typography: {
        DEFAULT: {
          css: {
            code: {
              color: '#333',
              '@apply bg-gray-100 text-gray-700 p-1 rounded font-medium': '',
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
          },
        },
      },
    },
  },
  // eslint-disable-next-line global-require
  // plugins: [require('@tailwindcss/typography')],
};
