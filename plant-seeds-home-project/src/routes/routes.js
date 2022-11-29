//Layouts
import DefaultLayout from '../components/Layout/DefaultLayout/DefaultLayout';
import AccountLayout from '../components/Layout/AccountLayout/AccountLayout';

//Pages
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import History from '../pages/History/History';
import Cart from '../pages/Cart/Cart';
import Products from '../pages/Products/Products';
import Account from '../pages/Account/Account';

import routes from '../config/routes';
import SellerLayout from '../components/Layout/SellerLayout/SellerLayout';
import Product from '../pages/Seller/Product/Product';
import Order from '../pages/Seller/Order/Order';
import Delivery from '../pages/Seller/Delivery/Delivery';
import Dashboard from '../pages/Seller/Dashboard/Dashboard';

//Public routes
const publicRoutes = [
    { path: routes.home, component: Home, layout: DefaultLayout },
    { path: routes.login, component: Login },
    { path: routes.register, component: Register },
    { path: routes.products, component: Products, layout: DefaultLayout },
    { path: routes.productsByCategory, component: Products, layout: DefaultLayout },
    { path: routes.productByID, component: Products, layout: DefaultLayout },

    { path: routes.dashboard, component: Dashboard, layout: SellerLayout },
    { path: routes.order, component: Order, layout: SellerLayout },
    { path: routes.product, component: Product, layout: SellerLayout },
    { path: routes.delivery, component: Delivery, layout: SellerLayout },
];

const privateRoutes = [
    { path: routes.profile, component: Account, layout: AccountLayout, prop: 'profile' },
    { path: routes.history, component: History },
    { path: routes.cart, component: Cart, layout: DefaultLayout },
    { path: routes.purchase, component: Account, layout: AccountLayout, prop: 'purchase' },
    // { path: routes.shop, component: Account, layout: AccountLayout, prop: 'shop' },
    { path: routes.password, component: Account, layout: AccountLayout, prop: 'password' },
    // Seller
];

export { publicRoutes, privateRoutes };
