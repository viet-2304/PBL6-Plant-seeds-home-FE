import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Dash, Plus } from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table';
import '../AppHeader/Header.scss';
import './CartSidebar.scss';
import axios from 'axios';
import BASE_API_URL from '../../api/api';
import ItemCart from './ItemCart';

function CartSidebar({ currentUser }) {
    const [show, setShow] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    function handleClose() {
        return setShow(false);
    }
    const handleShow = () => setShow(true);

    const API = axios.create({
        baseURL: BASE_API_URL,
    });
    useEffect(() => {
        const fetchCartItem = () => {
            API.get(`v1/cart/getCartDetail?userId=${currentUser.id}`, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            })
                .then((res) => {
                    setCartItems(res.data.listProduct);
                    console.log('cartItem1', res.data);
                })
                .catch((err) => console.log('111', err));
        };
        fetchCartItem();
    }, []);
    return (
        <>
            <div className="icon-cart" onClick={handleShow}>
                <FontAwesomeIcon icon={faCartShopping} />
                <div className="item-number">100</div>
            </div>

            <Offcanvas show={show} onHide={handleClose} placement={'end'}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Giỏ hàng</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="py-3 d-flex justify-content-center">
                        <Table striped>
                            <thead>
                                <tr>
                                    <th width="60px" height="60px"></th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems?.map((item, index) => {
                                    return <ItemCart index={index} item={item} />;
                                })}

                                {/* <tr>
                                    <td>
                                        <img
                                            src="https://jacks-garden-server.herokuapp.com/images/fiddle_leaf.jpg"
                                            alt=""
                                            width="60px"
                                            height="60px"
                                        />
                                    </td>
                                    <td>Larry the Bird</td>
                                    <td>
                                        <div className="amount-container">
                                            <Dash
                                                size="30px"
                                                onClick={() => handleQuantity('down')}
                                            />
                                            <p className="quantity d-inline-flex justify-content-center align-items-center border border-success rounded-3 mx-1">
                                                {quantity}
                                            </p>
                                            <Plus
                                                size="30px"
                                                onClick={() => handleQuantity('up')}
                                            />
                                        </div>
                                    </td>
                                    <td>$3</td>
                                    <td>
                                        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                                    </td>
                                </tr> */}
                                {!cartItems && (
                                    <tr>
                                        <td colspan={4} className="py-3 h3 text-center">
                                            Your cart is empty
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Button className="btn btn-outline-success py-3 px-5">
                            <Link to={'/cart'}>Xem giỏ hàng</Link>
                        </Button>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}
export default CartSidebar;
