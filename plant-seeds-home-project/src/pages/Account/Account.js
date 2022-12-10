import { faFileLines, faUser, faPen, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, Col, Row, Tab, Nav, Image, Tabs, Form } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import BASE_API_URL from '../../api/api';

import Button from '../../components/Button/Button';
import PurchaseItem from '../../components/PurchaseItem/PurchaseItem';

import './Account.scss';

function Account({ prop }) {
    const navigate = useNavigate();
    const location = useLocation();
    const handleSelect = (k) => {
        navigate(location.pathname.slice(0, location.pathname.indexOf(prop)) + k);
    };
    const [reload, setReload] = useState(false);
    const [currentToken, setCurrentToken] = useState(localStorage.getItem('token'));
    const [currentUser, setCurrentUser] = useState({});
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
                    console.log('res1: ', res.data);
                })
                .catch((err) => console.log('c', err));
        };
        fetchCurrentUser();
    }, [reload]);
    console.log('a', currentUser);

    const handleClick = () => {
        axios
            .post(BASE_API_URL + 'v1/users/editUser', currentUser, {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${currentToken}`,
                },
            })
            .then((res) => {
                setCurrentUser(res.data);
                setReload(!reload);
                console.log('res1: ', res.data);
            })
            .catch((err) => console.log('err', err));
    };
    return (
        <Container fluid className="account-container py-5 ">
            <Tab.Container
                id="left-tabs-example"
                activeKey={prop}
                onSelect={(k) => handleSelect(k)}
            >
                <div className="container-xl px-5 py-5">
                    <Row>
                        <Col md={4} className="menu-col justify-content-center py-4">
                            <Nav variant="pills" className="flex-column">
                                <div className="user my-3 d-flex flex-row align-items-center justify-content-center ">
                                    <Image
                                        className="user-image me-3"
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU"
                                        alt="imageuser"
                                    />
                                    <div>
                                        <div className="user-name text-center">
                                            Phan Thị Thu Sương
                                        </div>
                                        <div className="text-center">
                                            <FontAwesomeIcon icon={faPen} />
                                            Change Image
                                        </div>
                                    </div>
                                </div>

                                <Nav.Item>
                                    <Nav.Link eventKey="profile">
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
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="shop">
                                        <FontAwesomeIcon icon={faStore} />
                                        My Shop
                                    </Nav.Link>
                                </Nav.Item> */}
                                <Nav.Item>
                                    <Nav.Link eventKey="password">
                                        <FontAwesomeIcon icon={faKey} />
                                        Change Password
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={8} className="content-col">
                            <Tab.Content className="p-4 h-100">
                                <Tab.Pane eventKey="profile">
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
                                                <div className="col-sm-10 mt-3">
                                                    <input
                                                        type="text"
                                                        readOnly
                                                        className="form-control "
                                                        id="staticEmail"
                                                        value={currentUser.email || ''}
                                                        onChange={(e) =>
                                                            setCurrentUser({
                                                                ...currentUser,
                                                                email: e.target.value,
                                                            })
                                                        }
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
                                                        className="form-control"
                                                        id="inputUsername"
                                                        value={currentUser.userName || ''}
                                                        onChange={(e) =>
                                                            setCurrentUser({
                                                                ...currentUser,
                                                                userName: e.target.value,
                                                            })
                                                        }
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
                                                        value={currentUser.phoneNumber || ''}
                                                        onChange={(e) =>
                                                            setCurrentUser({
                                                                ...currentUser,
                                                                phoneNumber: e.target.value,
                                                            })
                                                        }
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
                                                        value={currentUser.address || ''}
                                                        onChange={(e) =>
                                                            setCurrentUser({
                                                                ...currentUser,
                                                                address: e.target.value,
                                                            })
                                                        }
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
                                                        className="form-control"
                                                        type="date"
                                                        id="birthday"
                                                        name="birthday"
                                                        value={currentUser.date || ''}
                                                        onChange={(e) =>
                                                            setCurrentUser({
                                                                ...currentUser,
                                                                date: e.target.value,
                                                            })
                                                        }
                                                    />
                                                </div>
                                            </div>
                                            <div className="row my-5">
                                                <div className="d-flex justify-content-center ">
                                                    <Button cart onClick={() => handleClick()}>
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
                                {/* <Tab.Pane eventKey="shop">
                                    <Container className="col">
                                        <div className="top-info">My Account</div>
                                    </Container>
                                </Tab.Pane> */}
                                <Tab.Pane eventKey="password">
                                    <Container className="col px-4">
                                        <div className="top-info">Change Password</div>
                                        <div className="info">
                                            <div className="row my-5">
                                                <label
                                                    htmlFor="inputOldPassword"
                                                    className="col-sm-3 form-label "
                                                >
                                                    Old Password
                                                </label>
                                                <div className="col-sm-9 ">
                                                    <input
                                                        type="password"
                                                        className="form-control  "
                                                        id="inputOldPassword"
                                                        value="aaaaa"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="row my-5">
                                                <label
                                                    htmlFor="inputNewPassword"
                                                    className="col-sm-3 form-label "
                                                >
                                                    New Password
                                                </label>
                                                <div className="col-sm-9">
                                                    <input
                                                        type="password"
                                                        className="form-control "
                                                        id="inputNewPassword"
                                                        value="aaaaa"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="row my-5">
                                                <label
                                                    htmlFor="inputConfirmPassword"
                                                    className="col-sm-3 form-label "
                                                >
                                                    Confirm Password
                                                </label>
                                                <div className="col-sm-9">
                                                    <input
                                                        type="password"
                                                        className="form-control"
                                                        id="inputConfirmPassword"
                                                        value="aaaaa"
                                                        readOnly
                                                    />
                                                </div>
                                            </div>
                                            <div className="form-check d-flex justify-content-end align-item-center my-5 me-5">
                                                <input
                                                    className="form-check-input me-3"
                                                    type="checkbox"
                                                    value=""
                                                    id="flexCheckDefault"
                                                />
                                                <label
                                                    className="form-check-label me-5"
                                                    htmlFor="flexCheckDefault"
                                                >
                                                    Show Password
                                                </label>
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
                            </Tab.Content>
                        </Col>
                    </Row>
                </div>
            </Tab.Container>
        </Container>
    );
}

export default Account;
