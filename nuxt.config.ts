import { appDescription } from './constants/index'

export default defineNuxtConfig({
    modules: [
        '@vueuse/nuxt',
        '@nuxt/eslint',
        'shadcn-nuxt',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/google-fonts',
        'nuxt-mongoose',
    ],

    app: {
        head: {
            viewport: 'width=device-width,initial-scale=1',
            link: [
                { rel: 'icon', href: '/favicon.ico', sizes: 'any' },
                { rel: 'icon', type: 'image/svg+xml', href: '/nuxt.svg' },
                { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
            ],
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                { name: 'description', content: appDescription },
                { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' },
            ],
        },
    },

    devtools: {
        enabled: true,
    },

    eslint: {
        config: {
            standalone: false,
        },
    },

    experimental: {
        // when using generate, payload js assets included in sw precache manifest
        // but missing on offline, disabling extraction it until fixed
        payloadExtraction: false,
        renderJsonPayloads: true,
        typedPages: true,
    },

    googleFonts: {
        families: {
            Inter: [400, 500],
        },
    },

    imports: {
        dirs: ['./models'],
    },

    mongoose: {
        options: {
            dbName: 'vueFeedbackList',
        },
    },

    nitro: {
        esbuild: {
            options: {
                target: 'esnext',
            },
        },
    },
})
