import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Table, Card } from 'react-bootstrap';
import StripeCheckout from 'react-stripe-checkout';
import './Cart.scss';
import axios from 'axios';
import BASE_API_URL from '../../api/api';
import CartItem from '../../components/Cart/CartItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faTrash } from '@fortawesome/free-solid-svg-icons';

function Cart() {
    const [cartItems, setCartItems] = useState();
    const [reload, setReload] = useState(false);
    const API = axios.create({
        baseURL: BASE_API_URL,
    });
    const handleChangeQuantity = () => {
        setReload(!reload);
    };
    useEffect(() => {
        API.get(`v1/cart/getCartDetail?userId=${localStorage.getItem('userId')}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token'),
            },
        })
            .then((res) => {
                setCartItems(res.data.listProduct);
            })
            .catch((err) => console.log('err', err));
    }, [reload]);
    return (
        <Container fluid="xl" className="cart position-relative p-2 p-md-4">
            <Row className="py-3">
                <Col md={8} className="cart-details py-3 mb-4">
                    <h2>YOUR CART</h2>
                    {!cartItems && (
                        <div className="fw-bold text-black d-flex align-items-center">
                            Your Cart Is Empty
                        </div>
                    )}
                    {cartItems?.map((item) => {
                        let subTotal = 0;
                        return (
                            <Card className="carditem-container" key={item?.shopId}>
                                <Card.Body>
                                    <div className="card-header d-flex justify-content-between">
                                        <div className="fw-bold text-black d-flex align-items-center">
                                            {item?.shopName}
                                            <Button className="ms-5 btn-outline-success px-4 py-2">
                                                <FontAwesomeIcon icon={faShop}></FontAwesomeIcon>
                                                View Shop
                                            </Button>
                                        </div>
                                    </div>
                                    {item?.listProductAndNumberDto.map((product) => {
                                        console.log(
                                            subTotal,
                                            product?.price *
                                                parseInt(product?.numberOfProductInCart),
                                        );
                                        subTotal +=
                                            product?.price *
                                            parseInt(product?.numberOfProductInCart);
                                        return (
                                            <CartItem
                                                itemKey={product?.productId}
                                                item={product}
                                                handleChangeQuantity={handleChangeQuantity}
                                            />
                                        );
                                    })}
                                    <div className="card-footer d-flex justify-content-between py-2 px-4">
                                        <div className="btn-delete">
                                            <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>
                                        </div>
                                        <div className="text-white display-7 ">
                                            Total: {subTotal}
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        );
                    })}
                    <div className="d-flex justify-content-between">
                        <Button href="/products" variant="outline-success">
                            Continue Shopping
                        </Button>
                        <Button variant="outline-secondary py-2 px-4">Empty Cart</Button>
                    </div>
                </Col>
                <Col
                    md={4}
                    className="order-summary border rounded d-flex flex-column justify-content-start py-3 px-4"
                >
                    {/* {isSuccess ? (
                        <SuccessDiv message="Your order has been placed, redirecting you to homepage now." />
                    ) : ( 
                     <> 
                     <CartSummary /> */}
                    <div className="d-flex flex-column justify-content-between p-3">
                        <h1 className="py-2 fw-bolder">ORDER SUMMARY</h1>
                        <div className="d-flex justify-content-between py-2">
                            <span>Subtotal</span>
                            <span>$2</span>
                        </div>
                        <div className="d-flex justify-content-between py-2">
                            <span>Estimated Shipping</span>
                            <span>$ 9.95</span>
                        </div>
                        <div className="d-flex justify-content-between py-2">
                            <span>Shipping Discount</span>
                            <span>$30</span>
                        </div>
                        <div className="total-amount fs-3 fw-bolder">
                            <span className="pe-2">Total</span>
                            <span>$89 </span>
                        </div>
                    </div>
                    <StripeCheckout
                        name="Plant seeds home"
                        image=""
                        billingAddress
                        shippingAddress
                        description={`The total is $`}
                        // amount=""
                        // token={}
                        // stripeKey={KEY}
                    ></StripeCheckout>
                    {/* ) : ( */}
                    <div className="text-danger py-3">
                        The total amount per order cannot be over $2000, please split your order.
                    </div>
                    {/* )} */}
                    <div className="border border-danger rounded-3 d-flex px-1 py-3 mt-3">
                        The payment can be tested with <br />
                        card number: 4242 4242 4242 4242 <br />& a future date for expire date
                    </div>
                    {/* </> */}
                    {/* )} */}
                </Col>
            </Row>
            {/* {isFetching && ( */}
            {/* <Modal show centered>
                <Modal.Body>We are processing your order, please do not close the page.</Modal.Body>
            </Modal> */}
            {/* )} */}
        </Container>
    );
}

export default Cart;
