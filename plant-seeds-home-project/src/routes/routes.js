//Layouts
import DefaultLayout from '../components/Layout/DefaultLayout/DefaultLayout';

//Pages
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import Cart from '../pages/Cart/Cart';
import Shop from '../pages/Shop/Shop';

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
