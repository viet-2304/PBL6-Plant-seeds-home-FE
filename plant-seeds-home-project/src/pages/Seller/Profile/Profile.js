import axios from 'axios';
import { useState, useEffect } from 'react';
import { Container, Form, Image } from 'react-bootstrap';

import BASE_API_URL from '../../../api/api';
import Button from '../../../components/Button/Button';
import './Profile.scss';
import handleUpload from '../../../api/firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

function Profile() {
    const [URL, setURL] = useState('');
    const [shop, setShop] = useState({});
    const [image, setImage] = useState(document.querySelector('#file'));
    const onFileChange = (e) => {
        if (e.target && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handleClick = () => {
        handleUpload(image, setURL);
        console.log('u', URL);
    };
    const handleClick1 = () => {
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
    console.log('URL', URL);
    useEffect(() => {
        console.log('URL', URL);
    }, [URL]);
    return (
        <Container className="profile-container col px-4">
            <div className="top-info">Profile</div>
            <div className="info">
                <div className="row my-5 ">
                    <div className="col image">
                        <div className="wrapper">
                            <Image
                                className="shop-logo "
                                src={
                                    URL ||
                                    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU'
                                }
                                alt="imageuser"
                            />

                            <div class="file-upload">
                                <Form.Group id="formFile">
                                    <Form.Control
                                        type="file"
                                        id="file"
                                        name="file"
                                        size="sm"
                                        multiple={false}
                                        onChange={onFileChange}
                                    />
                                </Form.Group>
                                <FontAwesomeIcon icon={faArrowUp} className="icon" />
                                {/* <i class="fa fa-arrow-up"></i> */}
                            </div>
                        </div>
                        {/* <Form.Group id="formFile" className="mt-3">
                            <Form.Control
                                type="file"
                                id="file"
                                name="file"
                                size="lg"
                                multiple={false}
                                onChange={onFileChange}
                            />
                        </Form.Group> */}
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
