import classNames from 'classnames/bind';
import axios from 'axios';

import products1 from '../../assets/items.json';
import BASE_API_URL from '../../api/api';
import {
    faFacebook,
    faInstagram,
    faYoutube,
    faTwitter,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons';

import SliderProduct from '../../components/SliderProduct/SliderProduct';
import styles from './Home.module.scss';
import Categories from '../../components/Categories/Categories';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import bannerAds from '../../assets/images/banner-ads.png';

const cx = classNames.bind(styles);

function Home() {
    const API = axios.create({
        baseURL: BASE_API_URL,
    });
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProductList = () => {
            API.get('/v1/product/getAllProducts')
                .then((res) => {
                    console.log('res: ', res.data);
                    setProducts(res.data);
                })
                .catch((err) => console.log(err));
            // const data = response;
            // console.log(data);
        };
        fetchProductList();
    }, []);
    return (
        <div>
            <div className={cx('wrapper')}>
                <Categories />
                <SliderProduct items={products} title={'New products'}></SliderProduct>
            </div>
            {/* floating icon */}
            <div className={cx('icons')}>
                <ul>
                    <a href="">
                        <li className={cx('facebook')}>
                            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                        </li>
                    </a>
                    <a href="">
                        <li className={cx('twitter')}>
                            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                        </li>
                    </a>
                    <a href="">
                        <li className={cx('youtube')}>
                            <FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon>
                        </li>
                    </a>
                    <a href="">
                        <li className={cx('linkedin')}>
                            <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                        </li>
                    </a>
                    <a href="">
                        <li className={cx('instagram')}>
                            <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
                        </li>
                    </a>
                </ul>
            </div>
            <div className={cx('banner-ads')}>
                <img
                    src="https://www.ruffalonl.com/wp-content/uploads/2020/11/Mizzou_Vertical-Banner.jpg"
                    alt="ads"
                    // width={120}
                    // height={110}
                />
                {/* quang cao */}
            </div>
        </div>
    );
}

export default Home;
