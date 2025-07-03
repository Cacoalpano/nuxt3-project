import { defineStore } from 'pinia';
import { COOKIE_KEY } from '~/utils';

const defaultState = {
    user: false as boolean,
};
export const useAuthStore = defineStore('auth', {
    state: () => ({ ...defaultState }),
    getters: {
        isLoggedIn: (state) => {
            const sessionId = useCookie(COOKIE_KEY.session);
            state.user = !!sessionId.value ? true : false;
            return !!state.user;
        },
    },
    actions: {
        async login(username: string, password: string) {
            // Simulate an API call for user authentication
            this.user = true;
            localStorage.setItem(COOKIE_KEY.session, 'sessionId');
            return true;
        },
        logout() {
            this.user = false;
            localStorage.removeItem(COOKIE_KEY.session);
            return navigateTo('/auth/login');
        },
    },
});
