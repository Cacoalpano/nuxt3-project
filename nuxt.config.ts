export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    modules: ['@nuxt/eslint', '@pinia/nuxt', '@nuxtjs/i18n', 'vuetify-nuxt-module', 'dayjs-nuxt'],
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, initial-scale=1',
            meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: '/favicon.ico',
                },
            ],
        },
    },
    css: ['~/assets/scss/styles.scss'],
    ssr: false,
    components: [
        {
            path: '~/components/',
            pathPrefix: false,
        },
    ],
    runtimeConfig: {
        public: {
            apiUrl: process.env.API_URL,
            wsUrl: process.env.WS_URL,
            recaptcha: process.env.RECAPTCHA,
            recaptchaKey: process.env.RECAPTCHA_KEY,
        },
    },
    eslint: {
        config: {
            autoInit: false,
            standalone: false,
        },
    },
    build: {
        transpile: ['vuetify'],
    },
    i18n: {
        locales: [
            { code: 'en', name: 'English', iso: 'en-US', file: 'en.json' },
            { code: 'zh', name: '中文', iso: 'zh-CN', file: 'zh.json' },
            { code: 'vi', name: 'Tiếng Việt', iso: 'vi-VI', file: 'vi.json' },
        ],
        defaultLocale: 'vi',
        strategy: 'no_prefix',
        langDir: '../locales/',
        lazy: true,
        vueI18n: '~/i18n.config.ts',
        detectBrowserLanguage: {
            useCookie: true,
            alwaysRedirect: true,
            fallbackLocale: 'vi',
            cookieCrossOrigin: true,
        },
    },
    sourcemap: {
        server: process.env.NODE_ENV === 'production',
        client: process.env.NODE_ENV === 'production',
    },
    dayjs: {
        locales: ['en', 'zh', 'vi'],
        plugins: ['utc', 'timezone', 'relativeTime', 'customParseFormat'],
        defaultLocale: 'vi',
        defaultTimezone: 'Asia/Ho_Chi_Minh',
    },
    vuetify: {
        moduleOptions: {
            styles: {
                configFile: './assets/scss/vuetify.scss',
            },
        },
        vuetifyOptions: './vuetify.config.ts',
    },
    vite: {
        css: {
            preprocessorOptions: {
                scss: {
                    additionalData: '@use "~/assets/scss/mixins.scss" as *; @use "~/assets/scss/variables.scss" as *;',
                },
            },
        },
        optimizeDeps: {
            include: ['vuetify', 'dayjs'],
        },
    },
    pinia: {
        storesDirs: ['./stores/**'],
    },
});
