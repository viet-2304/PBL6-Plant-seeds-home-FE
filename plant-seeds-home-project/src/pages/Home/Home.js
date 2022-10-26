import classNames from 'classnames/bind';
import axios from 'axios';

import SliderItem from '../../components/SliderItem/SliderItem';
import products1 from '../../assets/items.json';
import Pagination from '../../components/Pagination/Pagination';

import styles from './Home.module.scss';
import Categories from '../../components/Categories/Categories';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function Home() {
    const API = axios.create({
        baseURL: 'http://10.20.3.175:8080/api',
    });
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchUserList = () => {
            API.get('/v1/product/getAllProduct')
                .then((res) => {
                    console.log('res: ', res.data);
                    setProducts(res.data);
                })
                .catch((err) => console.log(err));
            // const data = response;
            // console.log(data);
        };
        fetchUserList();
    }, []);
    return (
        <div>
            <div className={cx('wrapper')}>
                <Categories />
                <SliderItem items={products1} title={'News products'}></SliderItem>
            </div>
        </div>
    );
}

export default Home;
