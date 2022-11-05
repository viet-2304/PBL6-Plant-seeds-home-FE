import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Dash, Plus } from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table';
import '../AppHeader/Header.scss';
import './CartSidebar.scss';

function CartSidebar() {
    const [show, setShow] = useState(false);

    function handleClose() {
        return setShow(false);
    }
    const handleShow = () => setShow(true);

    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type) => {
        if (type === 'down') {
            quantity > 1 && setQuantity((prev) => prev - 1);
        } else {
            setQuantity((prev) => prev + 1);
        }
    };

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
                                    <th></th>
                                    <th>Product Name</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>
                                        <img
                                            src="https://jacks-garden-server.herokuapp.com/images/marbel_queen.jpg"
                                            width={'60px'}
                                            height={'60px'}
                                        />
                                    </td>
                                    <td>Mark</td>
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
                                    <td>$2</td>
                                    <td>
                                        <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src="https://jacks-garden-server.herokuapp.com/images/cactus.jpg"
                                            width="60px"
                                            height="60px"
                                        />
                                    </td>
                                    <td>Jacob</td>
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
                                </tr>
                                <tr>
                                    <td>
                                        <img
                                            src="https://jacks-garden-server.herokuapp.com/images/fiddle_leaf.jpg"
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
                                </tr>
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
