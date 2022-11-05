import { faFileLines, faStore, faUser, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Col, Row, Tab, Nav, Image } from 'react-bootstrap';

import './Account.scss';

function Account() {
    return (
        <Container fluid className="account-container py-5">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={1}></Col>
                    <Col sm={3} className="menu-col justify-content-start ">
                        <Nav variant="pills" className="flex-column">
                            <div className="user d-flex flex-row align-items-center justify-content-start ">
                                <Image
                                    className="user-image"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU"
                                />
                                <div className="ms-4">
                                    <div className="user-name">Phan Thị Thu Sương</div>
                                    <div>
                                        <FontAwesomeIcon icon={faPen} />
                                        Chỉnh sửa
                                    </div>
                                </div>
                            </div>
                            <Nav.Item>
                                <Nav.Link eventKey="first">
                                    <FontAwesomeIcon icon={faUser} />
                                    My Account
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">
                                    <FontAwesomeIcon icon={faFileLines} />
                                    My Order
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">
                                    <FontAwesomeIcon icon={faStore} />
                                    My Shop
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={7}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Container className="pb-6 mt-3">
                                    <div className=" pb-5 top-info">My Account</div>

                                    <div className="mb-3 row">
                                        <label
                                            for="staticEmail"
                                            className="col-sm-2 col-form-label"
                                        >
                                            Email
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                readonly
                                                className="form-control-plaintext"
                                                id="staticEmail"
                                                value="email@example.com"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label
                                            for="inputUsername"
                                            className="col-sm-2 col-form-label"
                                        >
                                            Username
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputUsername"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label for="inputPhone" className="col-sm-2 col-form-label">
                                            Phone
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputPhone"
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-3 row">
                                        <label
                                            for="inputAddress"
                                            className="col-sm-2 col-form-label"
                                        >
                                            Address
                                        </label>
                                        <div className="col-sm-10">
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="inputAddress"
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3 row">
                                        <label
                                            for="staticGender"
                                            className="col-sm-2 col-form-label"
                                        >
                                            Gender
                                        </label>
                                        <div className="col-sm-10">
                                            <div class="form-check form-check-inline">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="radioDefault"
                                                    id="radioMale"
                                                />
                                                <label class="form-check-label" for="radioMale">
                                                    Male
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="radioDefault"
                                                    id="radioFemale"
                                                />
                                                <label class="form-check-label" for="radioFemale">
                                                    Female
                                                </label>
                                            </div>
                                            <div class="form-check form-check-inline">
                                                <input
                                                    class="form-check-input"
                                                    type="radio"
                                                    name="radioDefault"
                                                    id="radioOther"
                                                />
                                                <label class="form-check-label" for="radioOther">
                                                    Other
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </Container>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">Sonnet</Tab.Pane>
                            <Tab.Pane eventKey="third">Sonnet</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </Container>
    );
}

export default Account;
