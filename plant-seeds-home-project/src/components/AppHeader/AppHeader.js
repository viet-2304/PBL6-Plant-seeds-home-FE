import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faMagnifyingGlass,
    faCircleXmark,
    faBell,
    faShop,
} from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/images/logo.png';
import './Header.scss';
import routes from '../../config/routes';
import Button from '../Button/Button';
import CartSidebar from '../CartSidebar/CartSidebar';

function AppHeader() {
    const user = {
        id: 1,
    };
    const [currentUser, setCurrentUSer] = useState(user);

    const handleLogout = () => {
        setCurrentUSer(null);
    };

    return (
        <Container className="header-container">
            <Navbar expand="lg" collapseOnSelect>
                <Container
                    fluid
                    className="container d-flex align-items-center justify-content-between"
                >
                    <Navbar.Brand href={routes.home} className="logo ">
                        <img src={logo} alt="logo" preview={false} />
                    </Navbar.Brand>
                    <div className="action d-flex align-items-center ms-2 order-lg-last">
                        <div className="search">
                            <input placeholder="Search" spellCheck={false} />
                            <button className="clear">
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <button className="search-btn">
                                <div className="icon">
                                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                                </div>
                            </button>
                        </div>
                        {/* <Button
                            className="sell"
                            rounded
                            small
                            to="/login"
                            rightIcon={<FontAwesomeIcon icon={faShop} />}
                        >
                            Đăng ký bán
                        </Button>
                        <Button className="icon-sell">
                            <FontAwesomeIcon icon={faShop} />
                        </Button> */}
                        <Button>
                            <div className="icon-bell">
                                <FontAwesomeIcon icon={faBell} />
                                <div className="item-number">100</div>
                            </div>
                        </Button>
                        <Button>
                            <CartSidebar />
                        </Button>

                        {!currentUser ? (
                            <div className="icon-user">
                                <Button>
                                    <FontAwesomeIcon icon={faCircleUser} />
                                </Button>
                                <div className="user-content">
                                    <Button className="button" to={'/login'}>
                                        LOGIN/REGISTER
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="icon-user">
                                <Button>
                                    <FontAwesomeIcon icon={faCircleUser} />
                                </Button>
                                <div className="user-content">
                                    <Button
                                        className="button"
                                        to={`/account/profile/userid=${user.id}`}
                                    >
                                        MY ACCOUNT
                                    </Button>
                                    <Button className="button" onClick={handleLogout}>
                                        LOGOUT
                                    </Button>
                                </div>
                            </div>
                        )}
                        <Navbar.Toggle aria-controls="basic-navbar-nav" className="toggle" />
                    </div>
                    <Navbar.Collapse className="menu" id="basic-navbar-nav">
                        <Nav className="" navbarScroll>
                            <NavLink to={routes.home}>Home</NavLink>
                            <NavLink to={routes.shop}>Shop</NavLink>
                            <NavLink to={routes.history}>Order History</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>

        // <Container className={cx('wrapper')}>
        //     <Navbar className={cx('menu')}>
        //         <Navbar.Brand to={routes.home}>
        //             <img className={cx('image')} src={logo} alt="logo" preview={false} />
        //         </Navbar.Brand>
        //         <Nav>
        //             <NavLink to={routes.home}>Home</NavLink>
        //             <NavLink to={routes.shop}>Shop</NavLink>
        //             <NavLink to={routes.history}>Purchase history</NavLink>
        //         </Nav>
        //     </Navbar>
        //     <div className={cx('search')}>
        //         <input placeholder="Search" spellCheck={false} />
        //         <button className={cx('clear')}>
        //             <FontAwesomeIcon icon={faCircleXmark} />
        //         </button>
        //         <button className={cx('search-btn')}>
        //             <div className={cx('icon')}>
        //                 <FontAwesomeIcon icon={faMagnifyingGlass} />
        //             </div>
        //         </button>
        //     </div>
        //     <div className={cx('action')}>
        //         <Button
        //             className={cx('sale')}
        //             rounded
        //             small
        //             to="/login"
        //             rightIcon={<FontAwesomeIcon icon={faShop} />}
        //         >
        //             Đăng ký bán
        //         </Button>
        //         <Button className={cx('icon-sale')}>
        //             <FontAwesomeIcon icon={faShop} />
        //         </Button>
        //         <Button>
        //             <div className={cx('icon-bell')}>
        //                 <FontAwesomeIcon icon={faBell} />
        //                 <div className={cx('item-number')}>100</div>
        //             </div>
        //         </Button>
        //         <Button>
        //             <div className={cx('icon-cart')}>
        //                 <FontAwesomeIcon icon={faCartShopping} />
        //                 <div className={cx('item-number')}>100</div>
        //             </div>
        //         </Button>

        //         {!currentUser ? (
        //             <div className={cx('icon-user')}>
        //                 <Button>
        //                     <FontAwesomeIcon icon={faCircleUser} />
        //                 </Button>
        //                 <div className={cx('user-content')}>
        //                     <Button className={cx('button')} to={'/login'}>
        //                         LOGIN/REGISTER
        //                     </Button>
        //                 </div>
        //             </div>
        //         ) : (
        //             <div className={cx('icon-user')}>
        //                 <Button>
        //                     <FontAwesomeIcon icon={faCircleUser} />
        //                 </Button>
        //                 <div className={cx('user-content')}>
        //                     <Button
        //                         className={cx('button')}
        //                         to={`/account/profile/userid=${user.id}`}
        //                     >
        //                         MY ACCOUNT
        //                     </Button>
        //                     <Button className={cx('button')} onClick={handleLogout}>
        //                         LOGOUT
        //                     </Button>
        //                 </div>
        //             </div>
        //         )}
        //     </div>
        // </Container>

        // <div className={cx('wrapper')}>
        //     <Image className={cx('image')} src={logo} alt="logo" preview={false} />
        //     <div className={cx('menu')}>
        //         <Menu items={items} mode="horizontal" defaultSelectedKeys={['home']}></Menu>
        //     </div>
        //     <div className={cx('search')}>
        //         <input placeholder="Search" spellCheck={false} />
        //         <button className={cx('clear')}>
        //             <FontAwesomeIcon icon={faCircleXmark} />
        //         </button>
        //         <button className={cx('search-btn')}>
        //             <div className={cx('icon')}>
        //                 <FontAwesomeIcon icon={faMagnifyingGlass} />
        //             </div>
        //         </button>
        //     </div>
        //     <div className={cx('action')}>
        //         <Button
        //             className={cx('sale')}
        //             rounded
        //             small
        //             to="/login"
        //             rightIcon={<FontAwesomeIcon icon={faShop} />}
        //         >
        //             Đăng ký bán
        //         </Button>
        //         <Button className={cx('icon-sale')}>
        //             <FontAwesomeIcon icon={faShop} />
        //         </Button>
        //         <Button>
        //             <div className={cx('icon-bell')}>
        //                 <FontAwesomeIcon icon={faBell} />
        //                 <div className={cx('item-number')}>100</div>
        //             </div>
        //         </Button>
        //         <Button>
        //             <div className={cx('icon-cart')}>
        //                 <FontAwesomeIcon icon={faCartShopping} />
        //                 <div className={cx('item-number')}>100</div>
        //             </div>
        //         </Button>

        //         {!currentUser ? (
        //             <div className={cx('icon-user')}>
        //                 <Button>
        //                     <FontAwesomeIcon icon={faCircleUser} />
        //                 </Button>
        //                 <div className={cx('user-content')}>
        //                     <Button className={cx('button')} to={'/login'}>
        //                         LOGIN/REGISTER
        //                     </Button>
        //                 </div>
        //             </div>
        //         ) : (
        //             <div className={cx('icon-user')}>
        //                 <Button>
        //                     <FontAwesomeIcon icon={faCircleUser} />
        //                 </Button>
        //                 <div className={cx('user-content')}>
        //                     <Button
        //                         className={cx('button')}
        //                         to={`/account/profile/userid=${user.id}`}
        //                     >
        //                         MY ACCOUNT
        //                     </Button>
        //                     <Button className={cx('button')} onClick={handleLogout}>
        //                         LOGOUT
        //                     </Button>
        //                 </div>
        //             </div>
        //         )}
        //     </div>
        // </div>
    );
}

export default AppHeader;
