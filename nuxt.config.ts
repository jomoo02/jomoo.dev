// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app:{
        head:{
            title:'jomoo.dev',
            meta:[
                {name: 'description', content: 'Nuxt3로 만들어진 블로그, 프로그래머스, 알고리즘 등을 다룹니다'},
                {name: "google-site-verification", content: "pUBmMyGew19WMcC1R--OrdY4dh0W7GQapORYYaxecWY"}
            ]
        }
    },
    modules: ['@nuxtjs/tailwindcss','@nuxt/content'],
    content:{
        highlight:{
            preload:['python','py']
        }
    },
    plugins: [{ src: '~/plugins/vercel.js', mode: 'client' }],
})
