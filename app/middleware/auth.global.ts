import { useAuthStore } from '~/stores/auth';

const publicPaths = ['/auth/login', '/market/board'];

export default defineNuxtRouteMiddleware((to, from) => {
    const { isLoggedIn } = useAuthStore();
    if (!isLoggedIn) {
        if (!publicPaths.includes(to.path)) {
            console.log('Redirecting to login from auth global middleware');
            return navigateTo('/auth/login');
        } else {
            return;
        }
    }
    if (isLoggedIn && to.path === '/auth/login') {
        return navigateTo('/account');
    }
});
