const sideBar = [
    {
        id: 1,
        displayName: 'Tài khoản',
        route: '/',
        icon: 'bx bxs-user-circle',
    },
    {
        id: 2,
        displayName: 'Customers',
        route: '/boards',
        icon: 'bx bxs-cart',
    },
    {
        id: 3,
        displayName: 'Thị trường',
        route: '/boards',
        icon: 'bx bxs-chart',
        subs: [
            {
                displayName: 'Customers',
                route: '/boards',
                icon: 'bx bx-user-pin',
            },
            {
                displayName: 'Products',
                route: '/boards',
                icon: 'bx bx-package',
            },
            {
                displayName: 'Orders',
                route: '/boards',
                icon: 'bx bx-cart',
            },
        ],
    },
    {
        id: 4,
        displayName: 'Dịch vụ',
        route: '/boards',
        icon: 'bx bxs-bank',
    },
    {
        id: 5,
        displayName: 'Analytics',
        route: '/boards',
        icon: 'bx bx-bar-chart-alt',
    },
    {
        id: 6,
        displayName: 'categories',
        route: '/boards',
        icon: 'bx bx-list-ol',
        subs: [
            {
                id: 1,
                displayName: 'Customers',
                route: '/boards',
                icon: 'bx bx-user-pin',
            },
            {
                id: 2,
                displayName: 'Products',
                route: '/boards',
                icon: 'bx bx-package',
            },
            {
                id: 3,
                displayName: 'Orders',
                route: '/boards',
                icon: 'bx bx-cart',
            },
        ],
    },
    {
        id: 7,
        displayName: 'discount',
        route: '/boards',
        icon: 'bx bx-gift',
    },
    {
        id: 8,
        displayName: 'inventory',
        route: '/boards',
        icon: 'bx bx-store-alt',
    },
    {
        id: 9,
        displayName: 'settings',
        route: '/boards',
        icon: 'bx bx-cog',
    },
];

export default sideBar;
