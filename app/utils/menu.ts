export const menuItems = () => {
    const { account, services, market } = getRoutes();
    return [
        {
            title: 'menu.account',
            icon: { dark: 'mdi-account-circle-outline', light: 'mdi-account-circle' },
            subItems: account,
            group: 'account',
            public: false,
        },
        {
            title: 'menu.services',
            icon: { dark: 'mdi-server', light: 'mdi-server' },
            subItems: services,
            group: 'services',
            public: false,
        },
        
        {
            title: 'menu.market',
            icon: { dark: 'mdi-chart-bar', light: 'mdi-chart-bar' },
            subItems: market,
            group: 'market',
            public: true,
        },
    ];
};

export const routeList = () => {
    return {
        account: {
            info: { routeName: 'account-info', title: 'info', icon: 'mdi-account-circle' },
        },
        services: {
            withdraw: { routeName: 'services-withdraw', title: 'withdraw', icon: 'mdi-bank-transfer-out' },
        },
        market: {
            board: { routeName: 'market-board', title: 'board', icon: 'mdi-chart-bar' },
        },
    };
};

const getRoutes = () => {
    return {
        account: Object.values(routeList().account),
        services: Object.values(routeList().services),
        market: Object.values(routeList().market),
    };
};
