import React from 'react';
import classNames from 'classnames/bind';
import { Image, Menu } from 'antd';
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
                    <div className={cx('icon-cart')}>
                        <FontAwesomeIcon icon={faCartShopping} />
                        <div className={cx('item-number')}>100</div>
                    </div>
                </Button>
                <Button>
                    <div className={cx('icon-user')}>
                        <FontAwesomeIcon icon={faCircleUser} />
                    </div>
                </Button>
                {/* <Button text to="/login">
                    Đăng nhập
                </Button> */}
            </div>
        </div>
    );
}

export default AppHeader;
