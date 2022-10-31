import React from 'react';
import classNames from 'classnames/bind';
import { Image, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faCircleXmark,
    faBell,
    faShop,
    faCartShopping,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';

import logo from '../../assets/images/logo.png';
import styles from './Header.module.scss';
import routes from '../../config/routes';
import MenuItem from './Menu/MenuItem';
import Button from '../Button/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import CartSidebar from '../CartSidebar/CartSidebar';

const cx = classNames.bind(styles);

const items = [
    MenuItem('home', 'Trang chủ', routes.home),
    MenuItem('shop', 'Cửa hàng', routes.shop),
    MenuItem('history', 'Lịch sử mua hàng', routes.history),
];

function AppHeader() {
    const user = {
        id: 1,
    };
    const [currentUser, setCurrentUSer] = useState(user);

    const handleLogout = () => {
        setCurrentUSer(null);
    };
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('image')} src={logo} alt="logo" preview={false} />
            <div className={cx('menu')}>
                <Menu items={items} mode="horizontal" defaultSelectedKeys={['home']}></Menu>
            </div>
            <div className={cx('search')}>
                <input placeholder="Search" spellCheck={false} />
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                <button className={cx('search-btn')}>
                    <div className={cx('icon')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                </button>
            </div>
            <div className={cx('action')}>
                <Button
                    className={cx('sale')}
                    rounded
                    small
                    to="/login"
                    rightIcon={<FontAwesomeIcon icon={faShop} />}
                >
                    Đăng ký bán
                </Button>
                <Button className={cx('icon-sale')}>
                    <FontAwesomeIcon icon={faShop} />
                </Button>
                <Button>
                    <div className={cx('icon-bell')}>
                        <FontAwesomeIcon icon={faBell} />
                        <div className={cx('item-number')}>100</div>
                    </div>
                </Button>
                <Button>
                        <CartSidebar/>
                </Button>

                {!currentUser ? (
                    <div className={cx('icon-user')}>
                        <Button>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </Button>
                        <div className={cx('user-content')}>
                            <Button className={cx('button')} to={'/login'}>
                                LOGIN/REGISTER
                            </Button>
                        </div>
                    </div>
                ) : (
                    <div className={cx('icon-user')}>
                        <Button>
                            <FontAwesomeIcon icon={faCircleUser} />
                        </Button>
                        <div className={cx('user-content')}>
                            <Button className={cx('button')} to={`/account/userid=${user.id}`}>
                                MY ACCOUNT
                            </Button>
                            <Button className={cx('button')} onClick={handleLogout}>
                                LOGOUT
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default AppHeader;
