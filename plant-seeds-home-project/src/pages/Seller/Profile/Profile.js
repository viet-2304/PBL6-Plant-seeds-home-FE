import { Container, Form, Image } from 'react-bootstrap';
import Button from '../../../components/Button/Button';
import './Profile.scss';

function Profile() {
    return (
        <Container className="profile-container col px-4">
            <div className="top-info">Change Password</div>
            <div className="info">
                <div className="row my-5">
                    <label htmlFor="inputEmail" className="col-sm-3 form-label ">
                        Email
                    </label>
                    <div className="col-sm-9">
                        <input type="text" className="form-control" id="inputEmail" value="aaaaa" />
                    </div>
                </div>
                <div className="row my-5">
                    <label htmlFor="inputShopName" className="col-sm-3 form-label ">
                        Shop Name
                    </label>
                    <div className="col-sm-9 ">
                        <input
                            type="text"
                            className="form-control  "
                            id="inputShopName"
                            value="aaaaa"
                        />
                    </div>
                </div>
                <div className="row my-5">
                    <label htmlFor="inputAddress" className="col-sm-3 form-label ">
                        Address
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control "
                            id="inputAddress"
                            value="aaaaa"
                        />
                    </div>
                </div>
                <div className="row my-5">
                    <label htmlFor="inputPhone" className="col-sm-3 form-label ">
                        Phone Number
                    </label>
                    <div className="col-sm-9">
                        <input type="tel" className="form-control" id="inputPhone" value="aaaaa" />
                    </div>
                </div>
                <div className="row my-5">
                    <label htmlFor="logoShop" className="col-sm-3 form-label ">
                        Logo
                    </label>
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col me-5">
                                <Form.Group controlId="formFile" className="mt-3">
                                    <Form.Control type="file" size="lg" multiple={false} />
                                </Form.Group>
                            </div>
                            <div className="col ">
                                <Image
                                    className="shop-logo me-3"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU"
                                    alt="imageuser"
                                />
                            </div>
                        </div>
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
    );
}

export default Profile;
