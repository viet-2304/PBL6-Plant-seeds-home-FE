import axios from 'axios';
import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import BASE_API_URL from '../../../api/api';
import ProductForm from '../../../components/Seller/ProductForm/ProductForm';
import Button from '../../../components/Button/Button';
import List from '../../../components/Seller/Table/Table';
import movies from '../../../assets/movies';
import './Product.scss';

function Product({ prop }) {
    const navigate = useNavigate();
    const [products, setProducts] = useState(movies);

    const handleAddNew = () => {
        navigate('/seller/product/create');
    };

    const API = axios.create({
        baseURL: BASE_API_URL,
    });
    // useEffect(() => {
    //     const fetchProdutList = () => {
    //         API.get('v1/product/getAllProduct')
    //             .then((res) => {
    //                 setProducts(res.data);
    //                 console.log(res.data);
    //             })
    //             .catch((err) => console.log(err));
    //     };
    //     fetchProdutList();
    // }, []);

    const labels = [
        {
            name: 'Name',
            selector: (row) => row.productName,
            sortable: true,
        },
        {
            name: 'Manufacturer',
            selector: (row) => row.manufacturer,
            sortable: true,
        },
        {
            name: 'Image',
            selector: (row) => (
                <div className="cellWrapper">
                    <img
                        src={
                            row.imageURL !== null
                                ? row.imageURL
                                : 'https://cf.shopee.vn/file/59ced2b1371dd71a64a52af77b69d3d1'
                        }
                        alt=""
                        className="image"
                    />
                </div>
            ),
        },
        {
            name: 'Type',
            selector: (row) => row.productType,
            sortable: true,
        },
        {
            name: 'MFG',
            selector: (row) => <div className="tableCell text-center">{row.mfg.split('T')[0]}</div>,
            sortable: true,
        },
        {
            name: 'EXP',
            selector: (row) => <div className="tableCell text-center">{row.exp.split('T')[0]}</div>,
            sortable: true,
        },
        {
            name: 'Price',
            selector: (row) => row.price,
            sortable: true,
        },
        {
            name: 'Quantity',
            selector: (row) => row.numberOfProduct,
            sortable: true,
        },
        {
            name: 'Action',
            selector: (row) => (
                <div className="cellActions">
                    <Button className="icon-pen" to={`/seller/product/update/${row?.productId}`}>
                        <FontAwesomeIcon icon={faPen} />
                    </Button>
                    <Button className="remove">
                        <FontAwesomeIcon icon={faTrash} />
                    </Button>
                </div>
            ),
        },
    ];
    return (
        <Container className="d-flex flex-column justify-content-center ">
            {prop === 'all' && (
                <div className="button-action">
                    <div className="d-flex  aglin-items-center mb-2 mx-5">
                        <button
                            type="button"
                            className="btn btn-outline-success "
                            onClick={() => handleAddNew()}
                        >
                            Add New
                        </button>
                    </div>
                    <div className="mx-5">
                        <List
                            title="Products"
                            columns={labels}
                            data={products}
                            searchBy="productName"
                        />
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
            <div>
                <button type="button" className="btn btn-primary" id="liveToastBtn">
                    Show live toast
                </button>

                {/* <div className="position-fixed bottom-50 end-50 p-3" style="z-index: 11">
                    <div
                        id="liveToast"
                        class="toast hide"
                        role="alert"
                        aria-live="assertive"
                        aria-atomic="true"
                    >
                        <div class="toast-header">
                            <img src="..." class="rounded me-2" alt="..." />
                            <strong class="me-auto">Bootstrap</strong>
                            <small>11 mins ago</small>
                            <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="toast"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div class="toast-body">Hello, world! This is a toast message.</div>
                    </div>
                </div> */}
            </div>
        </Container>
    );
}

export default Product;
