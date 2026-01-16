import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration';

export default defineVuetifyConfiguration({
    /* vuetify options */
    locale: {
        locale: 'vi',
        fallback: 'en',
        messages: {
            en: { /* Vuetify English messages */ },
            vi: { /* Vuetify Vietnamese messages */ },
            zh: { /* Vuetify Chinese messages */ },
            ko: { /* Vuetify Korean messages */ },
        },
    },
    theme: {
        defaultTheme: 'dark',
    },
    icons: {
        defaultSet: 'mdi',
    },
    date: {
        adapter: 'dayjs',
        formats: {
            default: 'DD/MM/YYYY',
            date: 'DD/MM/YYYY',
            datetime: 'DD/MM/YYYY HH:mm',
        },
    },
    directives: true,
});
