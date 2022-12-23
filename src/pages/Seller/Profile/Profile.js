import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container, Form, Image } from 'react-bootstrap';
import BASE_API_URL from '../../../api/api';
import Button from '../../../components/Button/Button';
import './Profile.scss';

function Profile() {
    const [url, setURL] = useState('');
    const [shop, setShop] = useState({});
    const [image, setImage] = useState(document.querySelector('#file'));
    const onFileChange = (e) => {
        if (e.target && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handleClick = () => {
        // axios
        //     .post(BASE_API_URL + 'v1/shop/updateShop', shop, {
        //         headers: {
        //             'Content-Type': 'application/json',
        //             Authorization: 'Bearer ' + localStorage.getItem('token'),
        //         },
        //     })
        //     .then(() => {
        //         console.log('OK');
        //     })
        //     .catch((err) => console.log('err', err));
        let formData = new FormData();
        formData.append('image', image);

        axios
            .post(BASE_API_URL + 'v1/product/addProductImage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                },
            })
            .then((res) => {
                console.log(res.data, 'OK');
                setURL(res.data);
            })
            .catch((err) => console.log('err', err));
    };
    // useEffect(() => {
    //     axios
    //         .get(BASE_API_URL + `v1/shop/getShopByUser?userId=${localStorage.getItem('userId')}`, {
    //             headers: {
    //                 'Content-Type': 'application/json',
    //                 Authorization: 'Bearer ' + localStorage.getItem('token'),
    //             },
    //         })
    //         .then((res) => {
    //             setShop(res.data);
    //             console.log(res.data);
    //         })
    //         .catch((err) => console.log('err', err));
    // }, []);
    return (
        <Container className="profile-container col px-4">
            <div className="top-info">Profile</div>
            <div className="info">
                <div className="row my-5 ">
                    <div className="col image">
                        <Image
                            className="shop-logo me-3"
                            src={
                                url ||
                                'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU'
                            }
                            // src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU"
                            alt="imageuser"
                        />
                        <Form.Group id="formFile" className="mt-3">
                            <Form.Control
                                type="file"
                                id="file"
                                name="file"
                                size="lg"
                                multiple={false}
                                onChange={onFileChange}
                            />
                        </Form.Group>
                    </div>
                </div>
                <div className="row my-5">
                    <label htmlFor="inputEmail" className="col-sm-3 form-label ">
                        Email
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="text"
                            className="form-control"
                            id="inputEmail"
                            value={shop.email || ''}
                            onChange={(e) =>
                                setShop({
                                    ...shop,
                                    email: e.target.value,
                                })
                            }
                        />
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
                            value={shop.shopName || ''}
                            onChange={(e) =>
                                setShop({
                                    ...shop,
                                    shopName: e.target.value,
                                })
                            }
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
                            value={shop.address || ''}
                            onChange={(e) =>
                                setShop({
                                    ...shop,
                                    address: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                <div className="row my-5">
                    <label htmlFor="inputPhone" className="col-sm-3 form-label ">
                        Phone Number
                    </label>
                    <div className="col-sm-9">
                        <input
                            type="tel"
                            className="form-control"
                            id="inputPhone"
                            value={shop.phoneNumber || ''}
                            onChange={(e) =>
                                setShop({
                                    ...shop,
                                    phoneNumber: e.target.value,
                                })
                            }
                        />
                    </div>
                </div>
                {/* <div className="row my-5">
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
                </div> */}
                <div className="row my-5">
                    <div className="d-flex justify-content-center ">
                        <Button cart onClick={() => handleClick()}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default Profile;
