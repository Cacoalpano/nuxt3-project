import { defineStore } from 'pinia';

const defaultState: { user: any; token: string | null } = {
    user: null,
    token: null,
};
export const useAuthStore = defineStore('auth', {
    state: () => ({ ...defaultState }),
    getters: {
        isLoggedIn: (state) => {
            if (!state.token) {
                state.token = localStorage.getItem(STORAGE_KEY.token) || null;
            }
            return !!state.token;
        },
        getToken: (state) => {
            if (!state.token) {
                state.token = localStorage.getItem(STORAGE_KEY.token) || null;
            }
            return state.token;
        },
        getUser: (state) => {
            if (!state.user) {
                const user = localStorage.getItem(STORAGE_KEY.user);
                state.user = user ? JSON.parse(user) : null;
            }
            return state.user;
        },
    },
    actions: {
        async login(username: string, password: string) {
            // Simulate an API call for user authentication
            this.user = { username, password };
            localStorage.setItem(STORAGE_KEY.token, 'fake-jwt-token');
            localStorage.setItem(STORAGE_KEY.user, JSON.stringify(this.user));
            return true;
        },
        logout() {
            this.user = null;
            localStorage.removeItem(STORAGE_KEY.token);
            localStorage.removeItem(STORAGE_KEY.user);
            return navigateTo('/auth/login');
        },
    },
});
