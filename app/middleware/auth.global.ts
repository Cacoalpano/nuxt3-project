import { useAuthStore } from "~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
    const { isLoggedIn } = useAuthStore();
    if (!isLoggedIn && to.path !== '/auth/login') {
        return navigateTo('/auth/login');
    }
    if (isLoggedIn && to.path === '/auth/login') {
        return navigateTo('/account');
    }
});
