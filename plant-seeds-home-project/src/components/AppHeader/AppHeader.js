import React from 'react';
import classNames from 'classnames/bind';
import { Menu, Image, Input } from 'antd';

import styles from './Header.module.scss';
import logo from '../../assets/images/logo.png';

const cx = classNames.bind(styles);
const { Search } = Input;

const items = [
    { key: 'home', label: 'Trang chủ' },
    { key: 'shop', label: 'Cửa hàng' },
    { key: 'login', label: 'Đăng nhập' },
    { key: 'register', label: 'Đăng kí' },
];

function AppHeader() {
    return (
        <div className={cx('wrapper')}>
            <Image className={cx('image')} src={logo} alt="logo" preview={false} />

            <Menu
                className={cx('menu')}
                items={items}
                mode="horizontal"
                defaultSelectedKeys={['home']}
            ></Menu>
            <Search
                className={cx('search')}
                placeholder="input search text"
                allowClear
                onSearch={''}
            />
        </div>
    );
}

export default AppHeader;
