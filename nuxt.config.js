// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            htmlAttrs: {
                lang: 'en-SL',
                prefix: 'og: https://ogp.me/ns#'
            },
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',

            meta: [
                {  name: 'application-name', content: 'TIME.MFRIT.ORG.SL'  },
                {  name: 'author', content: 'MFRIT'  },
                {  name: 'description', content: 'This website provides details about a public time service, to which devices in Sierra Leone can connect and synchronise their clocks.'  },
                {  name: 'keywords', content: 'time, network time, accurate time'  },

                // Open Graph
                {  property: 'og:title', content: 'TIME.MFRIT.ORG.SL'  },
                {  property: 'og:url', content: 'https://time.mfrit.org.sl'  },
                {  property: 'og:description', content: 'This website provides details about a public time service, to which devices in Sierra Leone can connect and synchronise their clocks.'  },
                {  property: 'og:type', content: 'website'  },
                {  property: 'og:site_name', content: 'TIME.MFRIT.ORG.SL'  },
                {  property: 'og:locale', content: 'en-SL'  },
                {  property: 'og:image', content: 'https://time.mfrit.org.sl/images/meta.webp'  },
                {  property: 'og:image:alt', content: 'Hand of a child pointing to a clock.'  },
                {  property: 'og:publish_date', content: '2023-03-24'  },

                // Twitter Card
                { name: 'twitter:card', content: 'summary'},
                { name: 'twitter:site', content: 'MFRIT_SL'},
                { name: 'twitter:title', content: 'TIME.MFRIT.ORG.SL'},
                { name: 'twitter:description', content: 'This website provides details about a public time service, to which devices in Sierra Leone can connect and synchronise their clocks.'},
                { name: 'twitter:image', content: 'https://time.mfrit.org.sl/images/meta.webp'},
                { name: 'twitter:image:alt', content: 'Hand of a child pointing to a clock.'},
                { name: 'twitter:creator', content: 'MFRIT_SL'}
            ],

            link: [
                    {  href: '/favicon.ico', rel: 'icon', type: 'image/ico' },
                    {  href: 'https://time.mfrit.org.sl', rel: 'canonical' }
                ],

            script: [
            ],
            title: 'Public Time Service for Sierra Leone'
        },

    },
    css: ['@/assets/styles/scss/app.scss'],

    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-gtag'
    ],
    gtag: {
        id: 'G-ME8WR6GRDX'
      },

typescript: {
    shim: false
}
})
