export const useHttpClients = () => {
    const header = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': useAuthStore().isLoggedIn ?  `Bearer ${useAuthStore().token}` : '',
    };
    const loading = useState<boolean>('loading', (): boolean => false);

    const isLoading = computed(() => loading.value);

    const get = async (url: string, params: Record<string, any> = {}) => {
        loading.value = true;
        const response = await $fetch(url, {
            method: 'GET',
            headers: header,
            params,
            onResponseError: (error) => onResponseError(error),
        });
        loading.value = false;
        return response;
    };

    const post = async (url: string, body: Record<string, any> = {}) => {
        loading.value = true;
        const response = await $fetch(url, {
            method: 'POST',
            headers: header,
            body,
            onResponseError: (error) => onResponseError(error),
        });
        loading.value = false;
        return response;
    };
    const put = async (url: string, body: Record<string, any> = {}) => {
        loading.value = true;
        const response = await $fetch(url, {
            method: 'PUT',
            headers: header,
            body,
            onResponseError: (error) => onResponseError(error),
        });
        loading.value = false;
        return response;
    };
    const del = async (url: string, params: Record<string, any> = {}) => {
        loading.value = true;
        const response = await $fetch(url, {
            method: 'DELETE',
            headers: header,
            params,
            onResponseError: (error) => onResponseError(error),
        });
        loading.value = false;
        return response;
    };

    const onResponseError = (error: any) => { 
        loading.value = false;
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    useAuthStore().logout();
                    break;
                case 403:
                    break;
                case 404:
                    break;
                default:
                    break;
            }
        } else {
            console.error('Network error:', error);
        }
    }

    return {
        isLoading,
        get,
        post,
        put,
        del,
    };
};
