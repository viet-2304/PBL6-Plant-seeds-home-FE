//Layouts
import DefaultLayout from '../components/Layout/DefaultLayout/DefaultLayout';
import AccountLayout from '../components/Layout/AccountLayout/AccountLayout';

//Pages
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import History from '../pages/History/History';
import Cart from '../pages/Cart/Cart';
import Shop from '../pages/Shop/Shop';
import Products from '../pages/Products/Products';
import Account from '../pages/Account/Account';

import routes from '../config/routes';

//Public routes
const publicRoutes = [
    { path: routes.home, component: Home, layout: DefaultLayout },
    { path: routes.login, component: Login },
    { path: routes.register, component: Register },
    { path: routes.history, component: History },
    { path: routes.cart, component: Cart, layout: DefaultLayout },
    { path: routes.shop, component: Shop, layout: DefaultLayout },
    { path: routes.products, component: Products, layout: DefaultLayout },
    { path: routes.productsByCategory, component: Products, layout: DefaultLayout },
    { path: routes.productByID, component: Products, layout: DefaultLayout },
    { path: routes.account, component: Account, layout: AccountLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
