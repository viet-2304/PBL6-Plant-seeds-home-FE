import { faFileLines, faStore, faUser, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Col, Row, Tab, Nav, Image } from 'react-bootstrap';
import Button from '../../components/Button/Button';

import './Account.scss';

function Account() {
    return (
        <Container fluid className="account-container py-5 ">
            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <div className="container-xl px-5 py-5">
                    <Row>
                        <Col lg={3} className="menu-col justify-content-center">
                            <Nav variant="pills" className="flex-column">
                                <div className="user d-flex flex-row align-items-center justify-content-center ">
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
                        <Col lg={9} className="content-col">
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Container className="col">
                                        <div className="top-info">My Account</div>
                                        <div className="info">
                                            <div className="row my-5 ">
                                                <label
                                                    for="staticEmail"
                                                    className="col-sm-2 col-form-label mt-3"
                                                >
                                                    Email
                                                </label>
                                                <div className="col-sm-10  mt-3">
                                                    <input
                                                        type="text"
                                                        readonly
                                                        className="form-control-plaintext "
                                                        id="staticEmail"
                                                        value="email@example.com"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row my-5">
                                                <label
                                                    for="inputUsername"
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
                                                    for="inputPhone"
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
                                                    for="inputAddress"
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
                                                    for="staticGender"
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
                                                            for="radioMale"
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
                                                            for="radioFemale"
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
                                                            for="radioOther"
                                                        >
                                                            Other
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row my-5">
                                                <label
                                                    for="birthday"
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
                                                <label className="col-sm-2 col-form-label "></label>
                                                <div className="col-sm-10 ">
                                                    <Button
                                                        cart
                                                        // onClick={() => navigate(`/products/${item.name}`)}
                                                    >
                                                        Save
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Container className="col">
                                        <div className="top-info">My Account</div>
                                        <div className="info">
                                            <div className="row my-5 ">
                                                <label
                                                    for="staticEmail"
                                                    className="col-sm-2 col-form-label mt-3"
                                                >
                                                    Email
                                                </label>
                                                <div className="col-sm-10  mt-3">
                                                    <input
                                                        type="text"
                                                        readonly
                                                        className="form-control-plaintext "
                                                        id="staticEmail"
                                                        value="email@example.com"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row my-5">
                                                <label
                                                    for="inputUsername"
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
                                                    for="inputPhone"
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
                                                    for="inputAddress"
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
                                                    for="staticGender"
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
                                                            for="radioMale"
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
                                                            for="radioFemale"
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
                                                            for="radioOther"
                                                        >
                                                            Other
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row my-5">
                                                <label
                                                    for="birthday"
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
                                                <label className="col-sm-2 col-form-label "></label>
                                                <div className="col-sm-10 ">
                                                    <Button
                                                        cart
                                                        // onClick={() => navigate(`/products/${item.name}`)}
                                                    >
                                                        Save
                                                    </Button>
                                                </div>
                                            </div>
                                        </div>
                                    </Container>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Container className="col">
                                        <div className="top-info">My Account</div>
                                        <div className="info">
                                            <div className="row my-5 ">
                                                <label
                                                    for="staticEmail"
                                                    className="col-sm-2 col-form-label mt-3"
                                                >
                                                    Email
                                                </label>
                                                <div className="col-sm-10  mt-3">
                                                    <input
                                                        type="text"
                                                        readonly
                                                        className="form-control-plaintext "
                                                        id="staticEmail"
                                                        value="email@example.com"
                                                    />
                                                </div>
                                            </div>
                                            <div className="row my-5">
                                                <label
                                                    for="inputUsername"
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
                                                    for="inputPhone"
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
                                                    for="inputAddress"
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
                                                    for="staticGender"
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
                                                            for="radioMale"
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
                                                            for="radioFemale"
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
                                                            for="radioOther"
                                                        >
                                                            Other
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row my-5">
                                                <label
                                                    for="birthday"
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
                                                <label className="col-sm-2 col-form-label "></label>
                                                <div className="col-sm-10 ">
                                                    <Button
                                                        cart
                                                        // onClick={() => navigate(`/products/${item.name}`)}
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
