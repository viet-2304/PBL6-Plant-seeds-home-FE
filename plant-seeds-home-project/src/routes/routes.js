//Layouts
import DefaultLayout from '../components/Layout/DefaultLayout';

//Pages
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Cart from '../pages/Cart';
import Shop from '../pages/Shop';

//Public routes
const publicRoutes = [
    { path: '/', component: Home, layout: DefaultLayout },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
    { path: '/cart', component: Cart, layout: DefaultLayout },
    { path: '/shop', component: Shop, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
