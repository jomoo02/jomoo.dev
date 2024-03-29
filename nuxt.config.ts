// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/style.css'],
  app: {
    head: {
      title: 'jomoo.dev',
      meta: [
        {
          name: 'description',
          content:
            'Nuxt3로 만들어진 블로그, 프로그래머스, 알고리즘 진행했던 토이 프로젝트 등을 다룹니다',
        },
        {
          name: 'google-site-verification',
          content: 'pUBmMyGew19WMcC1R--OrdY4dh0W7GQapORYYaxecWY',
        },
        { name: 'og:type', property: 'og:type', content: 'website' },
        { name: 'og:title', property: 'og:title', content: 'jomoo.dev' },
        {
          name: 'og:url',
          property: 'og:url',
          content: 'https://jomoo-dev.vercel.app',
        },
        {
          name: 'og:description',
          property: 'og:description',
          content:
            'Nuxt3로 만들어진 블로그, 프로그래머스, 알고리즘 진행했던 토이 프로젝트 등을 다룹니다',
        },
      ],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/content', '@pinia/nuxt', 'nuxt-icon', '@nuxtjs/robots'],
  router: {
    options: {
      scrollBehaviorType: 'smooth',
    },
  },
  content: {
    highlight: {
      theme: 'dracula-soft',
      langs: ['python', 'vue', 'md', 'js', 'html', 'css', 'ts', 'shell'],
    },
  },
  robots: {
    rules: [{ UserAgent: '*' }, { Disallow: '' }, { Sitemap: 'https://jomoo.dev/sitemap.xml' }],
  },
  plugins: [{ src: '~/plugins/vercel.js', mode: 'client' }],
});
