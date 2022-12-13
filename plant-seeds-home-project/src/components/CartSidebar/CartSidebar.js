import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table';
import '../AppHeader/Header.scss';
import './CartSidebar.scss';
import axios from 'axios';
import BASE_API_URL from '../../api/api';
import CartItem from './CartItem';

function CartSidebar() {
    const [show, setShow] = useState(false);
    const [cartItems, setCartItems] = useState();
    function handleClose() {
        return setShow(false);
    }
    const handleShow = () => setShow(true);

    const API = axios.create({
        baseURL: BASE_API_URL,
    });
    // useEffect(() => {
    //     const fetchCartItem = () => {
    //         API.get(`v1/cart/getCartDetail?userId=${localStorage.getItem('userId')}`, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Authorization: 'Bearer ' + localStorage.getItem('token'),
    //             },
    //         })
    //             .then((res) => {
    //                 setCartItems(res.data.listProduct);
    //                 console.log('cartItem1', res.data.listProduct);
    //             })
    //             .catch((err) => console.log('111', err));
    //     };
    //     fetchCartItem();
    // }, []);
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
                        <Table striped className="">
                            <thead>
                                <tr>
                                    <th width="60px" height="60px"></th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th width="60px">Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartItems?.map((item) => {
                                    return (
                                        <>
                                            {item?.listProductAndNumberDto.map((product) => {
                                                return (
                                                    <CartItem
                                                        itemKey={product?.cartId.toString()}
                                                        product={product}
                                                    />
                                                );
                                            })}
                                        </>
                                    );
                                })}
                                {!cartItems && (
                                    <tr>
                                        <td colSpan={4} className="py-3 h3 text-center">
                                            Your cart is empty
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                    <div className="d-flex justify-content-center ">
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
