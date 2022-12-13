import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faShop, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { useState } from 'react';
import { Nav, Navbar, Form, Container } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import useOnclickOutside from 'react-cool-onclickoutside';
import logo from '../../assets/images/logo-brand.png';
import './Header.scss';
import routes from '../../config/routes';
import Button from '../Button/Button';
import CartSidebar from '../CartSidebar/CartSidebar';
import axios from 'axios';
import BASE_API_URL from '../../api/api';
import { useEffect } from 'react';

function AppHeader() {
    const [currentToken, setCurrentToken] = useState(localStorage.getItem('token'));
    const navigate = useNavigate();
    const [currentUser, setCurrentUser] = useState({});
    const [isSeller, setIsSeller] = useState(false);
    const API = axios.create({
        baseURL: BASE_API_URL,
    });
    useEffect(() => {
        const fetchCurrentUser = () => {
            API.get('v1/users/getCurrentUser', {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + currentToken,
                },
            })
                .then((res) => {
                    setCurrentUser(res.data);
                    if (res.data.roleId === 'seller') {
                        setIsSeller(true);
                    }
                })
                .catch((err) => console.log('err', err));
        };
        fetchCurrentUser();
    }, []);

    const handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        sessionStorage.clear();
        setCurrentToken(localStorage.getItem('token'));
        navigate('/');
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
        <Container>
            <Navbar expand="lg" collapseOnSelect className="px-4 py-8">
                <div className="container d-flex align-items-center justify-content-between">
                    <Navbar.Brand href={routes.home} className="logo ">
                        <img src={logo} alt="logo" />
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
                            className="seller"
                            rounded
                            small
                            to={isSeller === false ? routes.dashboard : routes.registerSeller}
                            rightIcon={<FontAwesomeIcon icon={faShop} />}
                        >
                            <p>Seller Centre</p>
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

                        {!currentToken ? (
                            <div className="icon-user">
                                <img
                                    src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                    className="avatar"
                                />
                                <div className="user-content">
                                    <Button className="button" to={'/login'}>
                                        LOGIN/REGISTER
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <div className="icon-user">
                                <img
                                    src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                    className="avatar"
                                />
                                <div className="user-content">
                                    <Button
                                        className="button"
                                        to={`/account/${currentUser.id}/profile`}
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
                            <NavLink to={`/account/${currentUser.id}/purchase`}>
                                Order History
                            </NavLink>
                            <NavLink
                                to={`/account/${currentUser.id}/profile`}
                                className="profile-link-mb"
                            >
                                Profile
                            </NavLink>
                            <NavLink
                                to={!isSeller === true ? routes.dashboard : routes.registerSeller}
                                className="seller-link-mb"
                            >
                                Seller Centre
                            </NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </div>
            </Navbar>
        </Container>
    );
}

export default AppHeader;
