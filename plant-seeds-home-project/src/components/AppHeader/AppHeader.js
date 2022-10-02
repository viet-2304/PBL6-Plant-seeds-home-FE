import React from 'react';
import classNames from 'classnames/bind';
import { Image, Input, Menu } from 'antd';

import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';
// import MenuComponent from './Menu/MenuComponent';
import routes from '../../config/routes';
import MenuItem from './Menu/MenuItem';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);
const { Search } = Input;

const items = [
    MenuItem('home', 'Trang chủ', routes.home),
    MenuItem('shop', 'Cửa hàng', routes.shop),
    MenuItem('login', 'Đăng nhập', routes.login),
    MenuItem('register', 'Đăng ký', routes.register),
];

function AppHeader() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('image')} src={logo} alt="logo" preview={false} />
            <div className={cx('menu')}>
                <Menu items={items} mode="horizontal" defaultSelectedKeys={['home']}></Menu>
            </div>
            <Search
                className={cx('search')}
                placeholder="input search text"
                allowClear
                onSearch={''}
            />
            <Link to="/shop" className={cx('link')}>
                Login
            </Link>
        </div>
    );
}

export default AppHeader;
