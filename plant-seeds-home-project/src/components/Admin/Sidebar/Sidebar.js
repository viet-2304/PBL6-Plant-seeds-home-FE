import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

import './Sidebar.scss';
import { useState } from 'react';
import {
    Flower1,
    Receipt,
    PeopleFill,
    Shop,
    BoxArrowRight,
    Envelope,
    HouseHeartFill,
    EmojiSunglasses,
} from 'react-bootstrap-icons';
import logo from '../../../assets/images/logo-brand.png';

function SideBar() {
    const location = useLocation();

    const pages = location.pathname.split('/').splice(1);
    console.log(pages);
    const [isActive, setIsActive] = useState(
        pages.length === 2 ? pages[pages.length - 1] : pages[pages.length - 2],
    );
    console.log(isActive);
    const handleClick = (e) => {
        setIsActive(e);
    };
    console.log('rerender', isActive);

    return (
        <div className="sidebar py-5 d-lg-flex flex-column bg-white shadow">
            <div className="center">
                <Link to="/">
                    <img src={logo} alt="store logo" width={210} />
                </Link>
                <ul className="py-3">
                    <p className="title">DASHBOARD</p>
                    <NavLink
                        onClick={() => handleClick('dashboard')}
                        to="/admin/dashboard"
                        className={isActive === 'dashboard' ? 'activeBtn' : ''}
                    >
                        <li>
                            <HouseHeartFill />
                            <span>Dashboard</span>
                        </li>
                    </NavLink>
                    <p className="title">LISTS</p>
                    <NavLink
                        onClick={() => handleClick('product')}
                        to="/admin/products"
                        className={isActive === 'product' ? 'activeBtn' : ''}
                    >
                        <li>
                            <Flower1 />
                            <span>Products</span>
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => handleClick('order')}
                        to="/admin/orders"
                        className={isActive === 'order' ? 'activeBtn' : ''}
                    >
                        <li>
                            <Receipt />
                            <span>Orders</span>
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => handleClick('delivery')}
                        to="/admin/delivery"
                        className={isActive === 'delivery' ? 'activeBtn' : ''}
                    >
                        <li>
                            <FontAwesomeIcon icon={faTruckFast} className="icon" />
                            <span>Delivery</span>
                        </li>
                    </NavLink>
                    <p className="title">USER</p>
                    <li>
                        <PeopleFill />
                        <span>Customers</span>
                    </li>
                    <p className="title">STORE</p>
                    <NavLink
                        onClick={() => handleClick('store')}
                        to="/"
                        className={isActive === 'store' ? 'activeBtn' : ''}
                    >
                        <li>
                            <Shop />
                            <span>STORE</span>
                        </li>
                    </NavLink>

                    <li>
                        <BoxArrowRight />
                        <span>Logout</span>
                    </li>
                    <p className="text-center end-class">
                        Have a lovely day !
                        <EmojiSunglasses />
                    </p>
                </ul>
            </div>
        </div>
    );
}

export default SideBar;
