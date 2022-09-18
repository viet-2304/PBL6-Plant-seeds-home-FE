import React from 'react';
import classNames from 'classnames/bind';
import { Menu } from 'antd';

import styles from './Header.module.scss';

const cx = classNames.bind(styles);

const items = [
    { label: 'Trang chủ', key: 'item-1' },
    { label: 'Cửa hàng', key: 'item-2' },
    { label: 'Đăng nhập', key: 'item-3' },
    { label: 'Đăng kí', key: 'item-4' },
];
const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
}));

function AppHeader() {
    return (
        // <Menu className={cx('wrapper')}>
        //     {items.map((item, index) => {
        //         return <Menu.Item key={item.key}><Button{item.label}/></Menu.Item>;
        //     })}
        // </Menu>
        <div>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
        </div>
    );
}

export default AppHeader;
