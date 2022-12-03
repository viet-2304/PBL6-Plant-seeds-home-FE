import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container, FloatingLabel, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import BASE_API_URL from '../../../api/api';
import ProductForm from '../../../components/Seller/ProductForm/ProductForm';
import List from '../../../components/Seller/Table/Table';
import './Product.scss';
function Product({ prop }) {
    const navigate = useNavigate();

    const handleAddNew = () => {
        navigate('/seller/product/create');
    };
    const [products, setProducts] = useState([]);
    const API = axios.create({
        baseURL: BASE_API_URL,
    });
    useEffect(() => {
        const fetchProductList = () => {
            API.get('/v1/product/getAllProducts')
                .then((res) => {
                    console.log('all: ', res.data);
                    setProducts(res.data);
                })
                .catch((err) => console.log(err));
        };
        fetchProductList();
    }, []);
    const labels = ['#', 'Manufacturer', 'Image', 'Name', 'MFG', 'EXP', 'Price', 'Quantity'];
    return (
        <Container className="d-flex flex-column justify-content-center ">
            {prop === 'all' && (
                <div>
                    <div className="d-flex justify-content-between aglin-items-center mb-2 mx-5">
                        <h1 className="fw-bold">PRODUCTS</h1>
                        <button
                            type="button"
                            className="btn btn-outline-success"
                            onClick={() => handleAddNew()}
                        >
                            Add New
                        </button>
                    </div>
                    <div className="mx-5">
                        <List lables={labels} data={products} />
                    </div>
                </div>
            )}
            {prop === 'create' && (
                <div className="mx-5">
                    <ProductForm />
                </div>
            )}
            {prop === 'update' && (
                <div className="mx-5">
                    <ProductForm prop={'update'} />
                </div>
            )}
        </Container>
    );
}

export default Product;
