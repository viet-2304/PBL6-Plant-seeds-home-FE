import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavLink, useLocation } from 'react-router-dom';

import './SellerSideBar.scss';
import { useState } from 'react';

function SellerSideBar() {
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
        <div className="sidebar-seller">
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <NavLink
                        onClick={() => handleClick('dashboard')}
                        to="/seller/dashboard"
                        className={isActive === 'dashboard' ? 'activeBtn' : ''}
                    >
                        <li>
                            <FontAwesomeIcon icon={faSearch} className="icon" />
                            <span>Dashboard</span>
                        </li>
                    </NavLink>
                    <p className="title">LISTS</p>
                    <NavLink
                        onClick={() => handleClick('product')}
                        to="/seller/product/all"
                        className={isActive === 'product' ? 'activeBtn' : ''}
                    >
                        <li>
                            <FontAwesomeIcon icon={faSearch} className="icon" />
                            <span>Products</span>
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => handleClick('order')}
                        to="/seller/order"
                        className={isActive === 'order' ? 'activeBtn' : ''}
                    >
                        <li>
                            <FontAwesomeIcon icon={faSearch} className="icon" />
                            <span>Orders</span>
                        </li>
                    </NavLink>
                    <NavLink
                        onClick={() => handleClick('delivery')}
                        to="/seller/delivery"
                        className={isActive === 'delivery' ? 'activeBtn' : ''}
                    >
                        <li>
                            <FontAwesomeIcon icon={faSearch} className="icon" />
                            <span>Delivery</span>
                        </li>
                    </NavLink>
                    <p className="title">USER</p>
                    <NavLink
                        onClick={() => handleClick('profile')}
                        to="/seller/profile"
                        className={isActive === 'profile' ? 'activeBtn' : ''}
                    >
                        <li>
                            <FontAwesomeIcon icon={faSearch} className="icon" />
                            <span>Profile</span>
                        </li>
                    </NavLink>
                    <li>
                        <FontAwesomeIcon icon={faSearch} className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default SellerSideBar;
