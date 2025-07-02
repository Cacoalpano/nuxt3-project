import { COOKIE_KEY, STORAGE_KEY } from '~/constants';
export default defineNuxtRouteMiddleware((to, from) => {
    const sessionId = useCookie(COOKIE_KEY.session);
    if (!sessionId.value || to.path !== '/auth/login') {
        localStorage.setItem(STORAGE_KEY.isLogin, 'false');
        return navigateTo('/auth/login');
    } else {
        localStorage.setItem(STORAGE_KEY.isLogin, 'true');
        return navigateTo('/account');
    }
});
