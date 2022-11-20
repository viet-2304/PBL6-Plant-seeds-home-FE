import { faFileLines, faStore, faUser, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Container, Col, Row, Tab, Nav, Image, Tabs } from 'react-bootstrap';

import Button from '../../components/Button/Button';
import PurchaseItem from '../../components/PurchaseItem/PurchaseItem';

import './Account.scss';

function Account({ prop }) {
    console.log(prop);
    const [key, setKey] = useState(prop);
    return (
        <Container fluid className="account-container py-5 ">
            <Tab.Container
                id="left-tabs-example"
                defaultActiveKey={key}
                // activeKey={key}
                // onSelect={(k) => setKey(k)}
            >
                <div className="container-xl px-5 py-5">
                    <Row>
                        <Col md={4} className="menu-col justify-content-center py-4">
                            <Nav variant="pills" className="flex-column">
                                <div className="user my-3 d-flex flex-row align-items-center justify-content-center ">
                                    <Image
                                        className="user-image me-5"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU"
                                        alt="imageuser"
                                    />
                                    <div>
                                        <div className="user-name">Phan Thị Thu Sương</div>
                                        <div>
                                            <FontAwesomeIcon icon={faPen} />
                                            Chỉnh sửa
                                        </div>
                                    </div>
                                </div>

                                <Nav.Item>
                                    <Nav.Link eventKey="account">
                                        <FontAwesomeIcon icon={faUser} />
                                        My Account
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="purchase">
                                        <FontAwesomeIcon icon={faFileLines} />
                                        My Purchase
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="shop">
                                        <FontAwesomeIcon icon={faStore} />
                                        My Shop
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={8} className="content-col">
                            <Tab.Content className="p-4 h-100">
                                <Tab.Pane eventKey="account">
                                    <Container className="col px-4">
                                        <div className="top-info">My Account</div>
                                        <div className="info">
                                            <div className="row my-5 ">
                                                <label
                                                    htmlFor="staticEmail"
                                                    className="col-sm-2 col-form-label mt-3"
                                                >
                                                    Email
                                                </label>
                                                <div className="col-sm-10  mt-3">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        className="form-control-plaintext "
                                                        id="staticEmail"
                                                        value="email@example.com"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row my-5">
                                                <label
                                                    htmlFor="inputUsername"
                                                    className="col-sm-2 col-form-label "
                                                >
                                                    Username
                                                </label>
                                                <div className="col-sm-10">
                                                    <input
                                                        type="text"
                                                        className="form-control  "
                                                        id="inputUsername"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row my-5">
                                                <label
                                                    htmlFor="inputPhone"
                                                    className="col-sm-2 col-form-label "
                                                >
                                                    Phone
                                                </label>
                                                <div className="col-sm-10">
                                                    <input
                                                        type="text"
                                                        className="form-control "
                                                        id="inputPhone"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row my-5">
                                                <label
                                                    htmlFor="inputAddress"
                                                    className="col-sm-2 col-form-label "
                                                >
                                                    Address
                                                </label>
                                                <div className="col-sm-10">
                                                    <input
                                                        type="text"
                                                        className="form-control "
                                                        id="inputAddress"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row my-5">
                                                <label
                                                    htmlFor="staticGender"
                                                    className="col-sm-2 col-form-label "
                                                >
                                                    Gender
                                                </label>
                                                <div className="col-sm-10">
                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="radioDefault"
                                                            id="radioMale"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="radioMale"
                                                        >
                                                            Male
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="radioDefault"
                                                            id="radioFemale"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="radioFemale"
                                                        >
                                                            Female
                                                        </label>
                                                    </div>
                                                    <div className="form-check form-check-inline">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            name="radioDefault"
                                                            id="radioOther"
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor="radioOther"
                                                        >
                                                            Other
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row my-5">
                                                <label
                                                    htmlFor="birthday"
                                                    className="col-sm-2 col-form-label "
                                                >
                                                    Birthday
                                                </label>
                                                <div className="col-sm-10">
                                                    <input
                                                        className="form-control "
                                                        type="date"
                                                        id="birthday"
                                                        name="birthday"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row my-5">
                                                <div className="d-flex justify-content-center ">
                                                    <Button
                                                        cart
                                                        // onClick={() => navigate(/products/${item.name})}
                                                    >
                                                        Save
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey="purchase">
                                    <Container className="col">
                                        <Tabs
                                            defaultActiveKey="all"
                                            id="uncontrolled-tab-example"
                                            className="mb-3 d-flex justify-content-center"
                                        >
                                            <Tab eventKey="all" title="All">
                                                <PurchaseItem />
                                            </Tab>
                                            <Tab eventKey="topay" title="To Pay">
                                                ssdf
                                            </Tab>
                                            <Tab eventKey="toship" title="To Ship">
                                                sdfd
                                            </Tab>
                                            <Tab eventKey="toreceive" title="To Receive">
                                                sdfd
                                            </Tab>
                                            <Tab eventKey="completed" title="Completed">
                                                sdfd
                                            </Tab>
                                            <Tab eventKey="cancelled" title="Cancelled">
                                                Cancelled
                                            </Tab>
                                        </Tabs>
                                    </Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey="shop">
                                    <Container className="col">
                                        <div className="top-info">My Account</div>
                                    </Container>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </div>
            </Tab.Container>
        </Container>
    );
}

export default Account;
