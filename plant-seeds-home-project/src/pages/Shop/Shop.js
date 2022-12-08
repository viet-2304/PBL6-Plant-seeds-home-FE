import { faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Image } from 'react-bootstrap';
import BASE_API_URL from '../../api/api';
import Button from '../../components/Button/Button';
import Pagination from '../../components/Pagination/Pagination';

import './Shop.scss';
function Shop() {
    console.log('re-render');
    const [products, setProducts] = useState([]);

    const API = axios.create({
        baseURL: BASE_API_URL,
    });

    // useEffect(() => {
    //     const fetchProdutList = () => {
    //         API.get('v1/product/getAllProduct')
    //             .then((res) => {
    //                 setProducts(res.data);
    //             })
    //             .catch((err) => console.log(err));
    //     };
    //     fetchProdutList();
    // }, []);
    return (
        <div className="shop">
            <div className="shop-info ">
                <div className="container d-flex flex-column align-items-center justify-content-center">
                    <Image
                        className="user-image me-3"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_mNmpqHOTakNgIaKR5bxJFfkUtiLdPBXPMw&usqp=CAU"
                        alt="imageshop"
                    />
                    <div>
                        <h1 className="shop-name text-center">Shop Cây Cảnh</h1>
                    </div>
                </div>
            </div>
            <div>
                <Pagination title="" data={products} numberPerPage={8}></Pagination>
            </div>
        </div>
    );
}

export default Shop;
