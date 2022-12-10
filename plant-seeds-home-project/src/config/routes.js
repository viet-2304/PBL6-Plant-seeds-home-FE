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
    shop: '/shop',
    password: '/account/:userid/password',
    // Seller
    registerSeller: '/seller/register',
    dashboard: '/seller/dashboard',
    order: '/seller/order',
    product: '/seller/product/all',
    createProduct: '/seller/product/create',
    updateProduct: '/seller/product/update/:id',
    delivery: '/seller/delivery',
    profileSeller: '/seller/profile',

    //Admin
    dashboardAdmin: '/admin/dashboard',
    loginAdmin: '/admin/login',
    customers: '/admin/customers',
    ordersAdmin: '/admin/orders',
    orderDetails: '/admin/orders/:id',
    productsAdmin: '/admin/products',
    mailingList: '/admin/mailinglist',
};

export default routes;
