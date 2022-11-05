import { Link } from 'react-router-dom';
import { Col, Container, Row, Form } from 'react-bootstrap';
import {
    EnvelopeFill,
    Facebook,
    GeoAltFill,
    Instagram,
    Question,
    TelephoneFill,
    Youtube,
} from 'react-bootstrap-icons';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);
// import Newsletter from "./Newsletter";

const Footer = () => {
    return (
        
        
        <Container fluid className="px-0 footer bg-light">
            {/* <Newsletter /> */}
            <div className={cx('wrapper')}>
                <Form>
                    <Form.Group className={cx('mb-3')} controlId="formBasicEmail">
                        <Form.Label className={cx('form-label')}>Enter your email here *</Form.Label>
                        <Form.Control
                            className={cx('form-control')}
                            type="email"
                            placeholder="Enter email"
                        />
                        <Button primary large>
                            SUBSCRIBE
                        </Button>
                    </Form.Group>
                </Form>
            </div>
            
            <Container className={cx("center py-5 bg-light")} fluid="xl">
                <Row className='py-3'>
                    <Col sm className="pb-4">
                        <h3 className="fw-bolder">PLANT SEEDS HOME</h3>
                        <p className='fs-4'>A small but lovely garden located in south Brisbane</p>
                        <div className="social-container">
                            <Facebook color="#3B5999" size={25} />
                            <Youtube color="#E4405F" size={25} className="mx-2" />
                            <Instagram color="#DA1212" size={25} />
                        </div>
                    </Col>
                    <Col sm className="pb-4 text-dark">
                        <h4 className="fw-bolder fs-2 mb-2">Useful Links</h4>
                        <ul className="row row-cols-2 px-0 my-0">
                            <li className="col list-unstyled mb-2">
                                <Link to="/" className='text-dark fs-3'>Home</Link>
                            </li>
                            <li className="col list-unstyled mb-2">
                                <Link to="/account" className='text-dark fs-3'>My Account</Link>
                            </li>
                            <li className="col list-unstyled mb-2">
                                <Link to="/cart" className='text-dark fs-3'>Cart</Link>
                            </li>
                            <li className="col list-unstyled mb-2">
                                <Link to="/" className='text-dark fs-3'>Shipping</Link>
                            </li>
                            <li className="col list-unstyled mb-2">
                                <Link to="/" className='text-dark fs-3'>Terms</Link>
                            </li>
                            <li className="col list-unstyled mb-2">
                                <Link to="/help" className='text-dark fs-3'>
                                    <Question size="20px" alt="link to the cart page" />
                                    help
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col sm className="pb-4 d-flex flex-column">
                        <h4 className="fw-bolder fs-2 mb-2">Contact</h4>
                        <div className="mb-2">
                            <GeoAltFill className="me-2 text-dark fs-3" />
                            18 Lucky St, Wishart QLD
                        </div>
                        <a className="mb-2 text-dark" href="mailto: admin@jacksgarden.com">
                            <EnvelopeFill className="me-2 text-dark fs-3" />
                            jack@jacksgarden.com
                        </a>
                        <a href="tel:+0449260373" className='text-dark'>
                            <TelephoneFill className="me-2 text-dark fs-3" />
                            +84 0397 132 163
                        </a>
                    </Col>
                </Row>
                <hr />
                <p className="text-center small text-secondary pb-3 mb-0">
                    ©2022 Jack's Garden All rights reserved
                </p>
            </Container>
        </Container>
    );
};

export default Footer;
