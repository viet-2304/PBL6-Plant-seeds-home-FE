import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import BASE_API_URL from '../../../api/api';
import Button from '../../Button/Button';
import './ProductForm.scss';
const ProductForm = ({ prop }) => {
    const [products, setProducts] = useState([]);
    const location = useLocation();
    const pages = location.pathname.split('/').splice(1);

    const API = axios.create({
        baseURL: BASE_API_URL,
    });

    useEffect(() => {
        const fetchProductList = () => {
            API.get(`/v1/product/getProduct?id=${pages[pages.length - 1]}`)
                .then((res) => {
                    console.log('r: ', res.data);
                    setProducts(res.data);
                })
                .catch((err) => console.log(err));
        };
        fetchProductList();
    }, []);
    return (
        <Container fluid="xl" className="d-flex justify-content-center px-0 py-md-3">
            <Form
                className="bg-white shadow p-4 rounded w-100 fs-20"
                // onSubmit={handleSubmit(handleCreateProduct)}
            >
                <h1 className="text-center mb-3">
                    {!prop ? 'Create ' : 'Update '}
                    Product
                </h1>

                <Row className="mb-3">
                    <Col md>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Product Name"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Product Name"
                                value={products?.productName}
                                onChange={(e) =>
                                    setProducts({
                                        ...products,
                                        productName: e.target.value,
                                    })
                                }
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingInput"
                            label="Manufacturer"
                            className="mb-3"
                        >
                            <Form.Control
                                type="text"
                                placeholder="Manufacturer"
                                value={products?.manufacturer}
                                onChange={(e) =>
                                    setProducts({
                                        ...products,
                                        manufacturer: e.target.value,
                                    })
                                }
                            />
                        </FloatingLabel>

                        <FloatingLabel className="mb-3" label="Category">
                            <Form.Select>
                                <option>Choose the category</option>
                                <option value="indoor">indoor</option>
                                <option value="outdoor">outdoor</option>
                                <option value="fruittree">fruittree</option>
                            </Form.Select>
                        </FloatingLabel>
                        <FloatingLabel className="mb-3" label="Quantity In Stock">
                            <Form.Control
                                type="number"
                                step="10"
                                min="0"
                                placeholder="Quatity In Stock"
                                value={products?.numberOfProduct}
                                onChange={(e) =>
                                    setProducts({
                                        ...products,
                                        numberOfProduct: e.target.value,
                                    })
                                }
                            />
                        </FloatingLabel>

                        <FloatingLabel label="Price">
                            <Form.Control
                                type="number"
                                step="10000"
                                placeholder="price"
                                value={products?.price}
                                onChange={(e) =>
                                    setProducts({
                                        ...products,
                                        price: e.target.value,
                                    })
                                }
                            />
                        </FloatingLabel>

                        <Form.Group controlId="formFile" className="mt-3">
                            <Form.Control type="file" size="lg" multiple={false} />
                        </Form.Group>
                    </Col>
                    <Col md className="pt-3 pt-md-0">
                        <FloatingLabel className="mb-3" label="Date of manufacture">
                            <Form.Control
                                className="form-control "
                                type="date"
                                placeholder="Date of manufacture"
                                value={moment(products?.mfg).utc().format('YYYY-MM-DD')}
                                onChange={(e) =>
                                    setProducts(
                                        {
                                            ...products,
                                            mfg: e.target.value + 'T00:00:00.000+00:00',
                                        },
                                        console.log(e.target.value),
                                    )
                                }
                            />
                        </FloatingLabel>
                        <FloatingLabel className="mb-3" label="Expiration date">
                            <Form.Control
                                type="date"
                                className="form-control"
                                placeholder="Expiration date"
                                value={moment(products?.exp).utc().format('YYYY-MM-DD')}
                                onChange={(e) =>
                                    setProducts(
                                        {
                                            ...products,
                                            exp: e.target.value + 'T00:00:00.000+00:00',
                                        },
                                        console.log(products.exp),
                                    )
                                }
                            />
                        </FloatingLabel>
                        <div className=" textarea">
                            <FloatingLabel label="Description" className="h-100">
                                <Form.Control
                                    as="textarea"
                                    className="h-100"
                                    placeholder="Product Description"
                                    value={products?.description}
                                    onChange={(e) =>
                                        setProducts({
                                            ...products,
                                            description: e.target.value,
                                        })
                                    }
                                />
                            </FloatingLabel>
                        </div>
                    </Col>
                </Row>
                <div className="d-flex justify-content-center ">
                    <Button cart className="" to={'/seller/product/all'}>
                        {!prop ? 'Create ' : 'Update '}
                    </Button>
                </div>
            </Form>
        </Container>
    );
};

export default ProductForm;
