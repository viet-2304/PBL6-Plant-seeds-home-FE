import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Dash, Plus } from 'react-bootstrap-icons';
import { useLocation, useNavigate } from 'react-router-dom';
import BASE_API_URL from '../../api/api';
import Button from '../Button/Button';
import './ProductDetail.scss';

function ProductDetail() {
    const location = useLocation();
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [productById, setProductById] = useState([]);
    const [currentToken, setCurrentToken] = useState(localStorage.getItem('token'));
    const [currentUser, setCurrentUser] = useState({});

    const pages = location.pathname.split('/').splice(1);
    const API = axios.create({
        baseURL: BASE_API_URL,
    });
    const handleQuantity = (type) => {
        if (type === 'down') {
            quantity > 1 && setQuantity((prev) => prev - 1);
        } else {
            setQuantity((prev) => prev + 1);
        }
    };
    const handleAddToCart = () => {
        axios
            .post(
                BASE_API_URL + 'v1/cart/addToCart',
                {
                    userId: currentUser.id,
                    numberOfProduct: quantity,
                    productId: productById.productId,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + currentToken,
                    },
                },
            )
            .then((res) => {
                console.log('OK');
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        const fetchProdutList = () => {
            API.get(`v1/product/getProduct?id=${pages[pages.length - 1]}`)
                .then((res) => {
                    setProductById(res.data);
                    console.log('product', productById);
                })
                .catch((err) => console.log(err));
        };
        fetchProdutList();
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
    }, []);
    return (
        <Container fluid className="detail-container mb-3 ">
            <div className="container-detail">
                <div className="details" key="1">
                    <div className="big-img">
                        <img
                            src="https://cf.shopee.vn/file/59ced2b1371dd71a64a52af77b69d3d1"
                            alt=""
                        />
                    </div>

                    <div className="box">
                        <div className="row">
                            <h2>{productById?.productName}</h2>
                            <span>{productById?.price} VND</span>
                        </div>
                        <p>{productById?.description}</p>
                        <div className="quantity-container">
                            <div className="d-flex justify-content-center align-items-center">
                                <Dash size="30px" onClick={() => handleQuantity('down')} />
                            </div>
                            <p className="quantity d-inline-flex justify-content-center align-items-center border border-success rounded-3 mx-1">
                                {quantity}
                            </p>
                            <div className="d-flex justify-content-center align-items-center">
                                <Plus size="30px" onClick={() => handleQuantity('up')} />
                            </div>
                        </div>
                        <div className="quantity-container">
                            <Button
                                cart
                                small
                                onClick={() =>
                                    currentToken ? handleAddToCart() : navigate('/login')
                                }
                            >
                                ADD TO CART
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default ProductDetail;
