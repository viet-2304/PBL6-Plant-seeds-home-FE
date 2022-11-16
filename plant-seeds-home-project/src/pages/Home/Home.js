import classNames from 'classnames/bind';
import axios from 'axios';

import products1 from '../../assets/items.json';
import BASE_API_URL from '../../api/api';

import SliderProduct from '../../components/SliderProduct/SliderProduct';
import styles from './Home.module.scss';
import Categories from '../../components/Categories/Categories';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const API = axios.create({
        baseURL: BASE_API_URL,
    });
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProdutList = () => {
            API.get('/v1/product/getAllProducts')
                .then((res) => {
                    console.log('res: ', res.data);
                    setProducts(res.data);
                })
                .catch((err) => console.log(err));
            // const data = response;
            // console.log(data);
        };
        fetchProdutList();
    }, []);
    return (
        <div>
            <div className={cx('wrapper')}>
                <Categories />
                <SliderProduct items={products} title={'News products'}></SliderProduct>
            </div>
        </div>
    );
}

export default Home;
