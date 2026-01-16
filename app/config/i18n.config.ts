export default defineI18nConfig(() => ({
    legacy: false,
    locale: 'vi',
    fallbackLocale: 'en',
    globalInjection: true,
    locales: [
        { code: 'en', name: 'English' },
        { code: 'vi', name: 'Tiếng Việt' },
        { code: 'zh', name: '中文' },
        { code: 'ko', name: '한국어' },
    ],
}));
