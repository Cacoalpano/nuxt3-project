import { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
    compatibilityDate: '2025-05-15',
    devtools: { enabled: true },
    modules: [
        'vuetify-nuxt-module',
        '@nuxtjs/i18n',
        '@nuxt/eslint',
        'dayjs-nuxt',
        '@pinia/nuxt',
        '@nuxt/devtools',
        '@nuxt/icon',
        '@nuxt/image',
        '@nuxt/fonts',
        '@nuxtjs/color-mode',
    ],
    ssr: false,
    app: {
        head: {
            charset: 'utf-8',
            title: 'Nuxt 3 Project',
            titleTemplate: '%s',
            viewport: 'width=device-width, initial-scale=1',
            meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
            link: [
                {
                    rel: 'icon',
                    type: 'image/x-icon',
                    href: 'assets/image/favicon.ico',
                },
            ],
        },
    },
    css: ['~/assets/scss/styles.scss'],
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
            autoInit: true,
            standalone: true,
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
            { code: 'ko', name: '한국어', iso: 'ko-KR', file: 'ko.json' },
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
    colorMode: {
        preference: 'system', // default value of $colorMode.preference
        fallback: 'light', // fallback value if not system preference found
        classSuffix: '',
        classPrefix: '',
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
        vue: {
            template: {
                transformAssetUrls,
            },
        },
    },
    pinia: {
        storesDirs: ['./stores/**'],
    },
});