import React from 'react';
import { Button, Container, Row, Col, Modal, Table, h2 } from 'react-bootstrap';
// import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs';
import CartSummary from '../../components/CartSummary/CartSummary';
import StripeCheckout from 'react-stripe-checkout';
import './Cart.scss';

function Cart() {
    return (
        <Container fluid="xl" className="cart position-relative p-2 p-md-4">
            <Row className="py-3">
                <Col md={8} className="cart-details py-3 mb-4">
                    <h2>YOUR CART</h2>
                    <Table className="text-center text-gray">
                        <thead>
                            <tr>
                                <th colSpan={2}>Product Name</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th className="d-none d-md-table-cell">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {cart.products[0]?.quantity > 0 ? (
                                cart.products.map((item) => (
                                    <CartItem
                                        key={item.productId}
                                        item={item}
                                        cart={cart}
                                        dispatch={dispatch}
                                        updateProductQuantity={updateProductQuantity}
                                        handleRemoveProduct={handleRemoveProduct}
                                    />
                                ))
                            ) : ( */}
                            <tr>
                                <td colspan={4} className="py-3 h3">
                                    Your cart is empty{' '}
                                </td>
                            </tr>
                            {/* // )} */}
                        </tbody>
                    </Table>
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
                    ) : ( */}
                    {/* <> */}
                    {/* <CartSummary /> */}
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
                        amount=""
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
