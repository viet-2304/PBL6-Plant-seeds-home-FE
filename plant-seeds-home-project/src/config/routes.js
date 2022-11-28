const routes = {
    home: '/',
    login: '/login',
    register: '/register',
    history: '/history',
    cart: '/cart',
    products: '/products',
    productsByCategory: '/products/:category',
    productByID: '/products/:category/:id',
    profile: '/account/:userid/profile',
    purchase: '/account/:userid/purchase',
    // shop: '/account/:userid/shop',
    password: '/account/:userid/password',
    // Seller
    dashboard: '/seller/dashboard',
    order: '/seller/order',
    product: '/seller/product',
    delivery: '/seller/delivery',
};

export default routes;
