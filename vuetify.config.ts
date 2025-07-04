import dayjs from '#build/dayjs.imports.mjs';
import { defineVuetifyConfiguration } from 'vuetify-nuxt-module/custom-configuration';

export default defineVuetifyConfiguration({
    /* vuetify options */
    locale: {
        locale: 'vi',
        fallback: 'en',
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
