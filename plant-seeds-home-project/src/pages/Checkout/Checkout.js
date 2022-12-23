import React from 'react';
import { Container } from 'react-bootstrap';
import './Checkout.scss';
function Checkout() {
    return (
        <>
            <Container className="Checkout-content">
                <main>
                    <div class="py-5 row g-5">
                        <div class="col-md-5 col-lg-4 order-md-last">
                            <h4 class="d-flex justify-content-between align-items-center mb-3">
                                <span class="text-success fs-3">Your cart</span>
                                <span class="badge bg-success rounded-pill">3</span>
                            </h4>
                            <div className="your-cart d-flex justify-content-between py-2">
                                <img
                                    src="https://landing.engotheme.com/html/plant/demo/images/product/pro_07.jpg"
                                    width={60}
                                    height={60}
                                    alt=""
                                ></img>
                                <div className="">
                                    <h4 className="product-name">Hat giong cay trong</h4>
                                    <span className="quantity">x2</span>
                                </div>
                                <span>Total: 30000</span>
                            </div>
                            {/* <hr /> */}
                            <div className="your-cart d-flex justify-content-between py-2">
                                <img
                                    src="https://landing.engotheme.com/html/plant/demo/images/product/pro_07.jpg"
                                    width={60}
                                    height={60}
                                    alt=""
                                ></img>
                                <div className="">
                                    <h4 className="product-name">Hat giong cay trong</h4>
                                    <span className="quantity">x2</span>
                                </div>
                                <span>Total: 30000</span>
                            </div>

                            <div className="your-cart d-flex justify-content-between py-2">
                                <img
                                    src="https://landing.engotheme.com/html/plant/demo/images/product/pro_07.jpg"
                                    width={60}
                                    height={60}
                                    alt=""
                                ></img>
                                <div className="">
                                    <h4 className="product-name">Hat giong cay trong</h4>
                                    <span className="quantity">x2</span>
                                </div>
                                <span>Total: 30000</span>
                            </div>
                            <div className="py-5">
                                <h4 class="d-flex justify-content-between align-items-center mb-3">
                                    <span class="text-success fs-3">Cart Total</span>
                                    <span class="badge bg-success rounded-pill">3</span>
                                </h4>
                                <ul class="list-group mb-3">
                                    <li class="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                            <h6 class="my-0">Product name</h6>
                                            <small class="text-muted">Brief description</small>
                                        </div>
                                        <span class="text-muted">$12</span>
                                    </li>

                                    <li class="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                            <h6 class="my-0">Second product</h6>
                                            <small class="text-muted">Brief description</small>
                                        </div>
                                        <span class="text-muted">$8</span>
                                    </li>

                                    <li class="list-group-item d-flex justify-content-between lh-sm">
                                        <div>
                                            <h6 class="my-0">Third item</h6>
                                            <small class="text-muted">Brief description</small>
                                        </div>
                                        <span class="text-muted">$5</span>
                                    </li>

                                    <li class="list-group-item d-flex justify-content-between bg-light">
                                        <div class="text-success">
                                            <h6 class="my-0">Shipping</h6>
                                            <small>shipping fee</small>
                                        </div>
                                        <span class="text-success">30000</span>
                                    </li>

                                    <li class="list-group-item d-flex justify-content-between">
                                        <span>Total (USD)</span>
                                        <b>$20</b>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-md-7 col-lg-8">
                            <h2 class="mb-3">Billing address</h2>
                            <form class="needs-validation" novalidate>
                                <div class="row g-3">
                                    <div class="col-sm-6">
                                        <label for="firstName" class="form-label">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="firstName"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Valid first name is required.
                                        </div>
                                    </div>

                                    <div class="col-sm-6">
                                        <label for="lastName" class="form-label">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="lastName"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Valid last name is required.
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <label for="username" class="form-label">
                                            Username
                                        </label>
                                        <div class="input-group has-validation">
                                            <span class="input-group-text">@</span>
                                            <input
                                                type="text"
                                                class="form-control"
                                                id="username"
                                                placeholder="Username"
                                                required
                                            />
                                            <div class="invalid-feedback">
                                                Your username is required.
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="email" class="form-label">
                                            Email
                                            <span class="text-muted">(Optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="email"
                                            placeholder="you@example.com"
                                        />
                                        <div class="invalid-feedback">
                                            Please enter a valid email address for shipping updates.
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="address" class="form-label">
                                            Address{' '}
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="address"
                                            placeholder="1234 Main St"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Please enter your shipping address.
                                        </div>
                                    </div>

                                    <div class="col-12">
                                        <label for="address2" class="form-label">
                                            Address 2<span class="text-muted">(Optional)</span>
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="address2"
                                            placeholder="Apartment or suite"
                                        />
                                    </div>

                                    <div class="col-md-5">
                                        <label for="country" class="form-label">
                                            Country
                                        </label>
                                        <select class="form-select" id="select-country" required>
                                            <option value="">Choose...</option>
                                            <option>United States</option>
                                            <option>Japan</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please select a valid country.
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <label for="state" class="form-label">
                                            State
                                        </label>
                                        <select class="form-select" id="select-state" required>
                                            <option value="">Choose...</option>
                                            <option>California</option>
                                        </select>
                                        <div class="invalid-feedback">
                                            Please provide a valid state.
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="zip" class="form-label">
                                            Zip
                                        </label>
                                        <input type="text" class="form-control" id="zip" required />
                                        <div class="invalid-feedback">Zip code required.</div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <div class="form-check">
                                    <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="same-address"
                                    />
                                    <label for="same-address" class="form-check-label">
                                        Shipping address is the same as my billing address
                                    </label>
                                </div>
                                <div class="form-check">
                                    <input
                                        type="checkbox"
                                        class="form-check-input"
                                        id="save-info"
                                    />
                                    <label for="save-info" class="form-check-label">
                                        Save this information for next time
                                    </label>
                                </div>
                                <hr class="my-4" />
                                <h4 class="mb-3">Payment</h4>
                                <div class="my-3">
                                    <div class="form-check">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            class="form-check-input"
                                            id="paypal"
                                            required
                                        />
                                        <img
                                            className="paypal-image"
                                            src="https://www.logo.wine/a/logo/PayPal/PayPal-Logo.wine.svg"
                                            width={100}
                                            alt=""
                                        ></img>
                                    </div>
                                </div>

                                <div class="row gy-3">
                                    <div class="col-md-6">
                                        <label for="expiration" class="form-label">
                                            Expiration
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="name-card"
                                            required
                                        />
                                        <small class="text-muted">
                                            Full name as displayed on card
                                        </small>
                                        <div class="invalid-feedback">Name on card is required</div>
                                    </div>

                                    <div class="col-md-6">
                                        <label for="creditcard" class="form-label">
                                            Credit card
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="credit-card"
                                            required
                                        />
                                        <div class="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="creditcard" class="form-label">
                                            Expiration
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="credit-card"
                                            required
                                        />
                                        <div class="invalid-feedback">Expiration date required</div>
                                    </div>

                                    <div class="col-md-3">
                                        <label for="creditcard" class="form-label">
                                            CVV
                                        </label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="credit-card"
                                            required
                                        />
                                        <div class="invalid-feedback">Security code required</div>
                                    </div>
                                </div>
                                <hr class="my-4" />
                                <button class="w-100 btn btn-primary btn-lg fs-4" type="submit">
                                    Continue to checkout
                                </button>
                            </form>
                        </div>
                    </div>
                </main>
            </Container>
        </>
    );
}
export default Checkout;
