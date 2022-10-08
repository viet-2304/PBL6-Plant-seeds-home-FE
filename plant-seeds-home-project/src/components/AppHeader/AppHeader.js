import React from 'react';
import classNames from 'classnames/bind';
import { Image, Menu } from 'antd';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';
import routes from '../../config/routes';
import MenuItem from './Menu/MenuItem';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const items = [
    MenuItem('home', 'Trang chủ', routes.home),
    MenuItem('shop', 'Cửa hàng', routes.shop),
    MenuItem('history', 'Lịch sử mua hàng', routes.history),
];

function AppHeader() {
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
            <Link to="/shop" className={cx('link')}>
                Login
            </Link>
        </div>
    );
}

export default AppHeader;
