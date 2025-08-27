import { transformAssetUrls } from 'vite-plugin-vuetify';

export default defineNuxtConfig({
    compatibilityDate: '2025-08-15',
    devtools: { enabled: true },
    modules: [
        '@nuxt/eslint',
        '@nuxt/devtools',
        '@nuxt/image',
        '@nuxt/icon',
        '@nuxt/fonts',
        '@nuxt/scripts',
        '@nuxtjs/i18n',
        '@pinia/nuxt',
        '@nuxt/content',
        'vuetify-nuxt-module',
        'dayjs-nuxt',
        '@nuxtjs/color-mode',
    ],
    ssr: false,
    app: {
        baseURL: process.env.BASE_PATH || '/',
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
                    href: 'public/image/favicon.ico',
                },
            ],
        },
    },
    imports: {
        dirs: ['shared/services/**', 'shared/models/**'],
    },
    css: ['~/assets/scss/styles.scss'],
    components: [
        {
            path: '~/components/',
            pathPrefix: false,
        },
    ],
    runtimeConfig: {
        recaptcha: process.env.RECAPTCHA,
        recaptchaKey: process.env.RECAPTCHA_KEY,

        public: {
            apiUrl: process.env.API_URL,
            wsUrl: process.env.WS_URL,
            apiPrefix: process.env.API_PREFIX,
            wsPrefix: process.env.WS_PREFIX,
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
        langDir: '../app/locales/',
        vueI18n: '~/config/i18n.config.ts',
        detectBrowserLanguage: {
            useCookie: true,
            alwaysRedirect: true,
            fallbackLocale: 'vi',
            cookieCrossOrigin: true,
        },
    },
    sourcemap: {
        server: process.env.NODE_ENV !== 'production',
        client: process.env.NODE_ENV !== 'production',
    },
    dayjs: {
        locales: ['en', 'zh', 'vi', 'ko'],
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
        vuetifyOptions: './app/config/vuetify.config.ts',
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
        server: {
            proxy: {
                [`process.env.API_PREFIX`]: {
                    target: process.env.API_URL,
                    ws: false,
                    changeOrigin: true,
                    secure: true,
                    rewrite: (path) => path.replace(new RegExp(`^${process.env.API_PREFIX}`), ''),
                },
                [`process.env.WS_PREFIX`]: {
                    target: process.env.WS_URL,
                    ws: true,
                    changeOrigin: true,
                    secure: false,
                    rewrite: (path) => path.replace(new RegExp(`^${process.env.WS_PREFIX}`), ''),
                },
            },
        },
    },
    pinia: {
        storesDirs: ['./app/stores/**'],
    },
    experimental: {},
});