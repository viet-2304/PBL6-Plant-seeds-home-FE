import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faShop, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useOnclickOutside from 'react-cool-onclickoutside';
import logo from '../../assets/images/logo-brand.png';
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

    const [search, setSearch] = useState();

    const toggle = () => {
        setSearch(true);
    };

    const closeSearch = () => (search === true ? setSearch(false) : null);

    const ref = useOnclickOutside(() => {
        closeSearch();
    });

    return (
        // <Container>
        <Navbar expand="lg" collapseOnSelect className="px-4 py-8">
            <div className="container d-flex align-items-center justify-content-between">
                <Navbar.Brand href={routes.home} className="logo ">
                    <img src={logo} alt="logo" preview={false} />
                </Navbar.Brand>

                <div className="action d-flex align-items-center ms-2 order-lg-last">
                    <Nav className="my-auto" ref={ref}>
                        <Form
                            className={
                                search === false
                                    ? 'searchbar fadeOutWidth'
                                    : search === true
                                    ? 'searchbar fadeInWidth'
                                    : 'searchbar'
                            }
                        >
                            {search === true && (
                                <input
                                    ref={ref}
                                    className={
                                        search === true
                                            ? 'search-input fadeIn'
                                            : search === false
                                            ? 'search-input fadeOut'
                                            : 'search-input'
                                    }
                                    type="text"
                                    name=""
                                    placeholder="Search..."
                                />
                            )}
                            <div
                                className={
                                    search === true
                                        ? 'icon-bg fadeOut'
                                        : search === false
                                        ? 'icon-bg fadeIn'
                                        : 'icon-bg'
                                }
                            >
                                {search !== true && (
                                    <FontAwesomeIcon
                                        onClick={toggle}
                                        className={
                                            search === true
                                                ? 'search-icon fadeOut'
                                                : search === false
                                                ? 'search-icon fadeIn'
                                                : 'search-icon'
                                        }
                                        icon={faSearch}
                                    />
                                )}
                            </div>
                        </Form>
                    </Nav>

                    <Button
                        className="sell"
                        rounded
                        small
                        to="/login"
                        rightIcon={<FontAwesomeIcon icon={faShop} />}
                    >
                        <p>Đăng ký bán</p>
                    </Button>

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
                        <NavLink to={routes.account} className="profile-link-mb">
                            Profile
                        </NavLink>
                        <NavLink to={routes.history} className="seller-link-mb">
                            Seller
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
        // </Container>
    );
}

export default AppHeader;
