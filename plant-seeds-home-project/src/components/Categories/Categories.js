import { Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import BASE_API_URL from '../../api/api';

import CategoryItem from './CategoryItem';
import './Categories.scss';
import Button from '../Button/Button';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const category = [
    {
        id: 1,
        img: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
        title: 'INDOOR PLANT',
        name: 'indoor',
    },
    {
        id: 2,
        img: 'https://cdn.pixabay.com/photo/2022/02/16/14/55/flower-7016948_1280.jpg',
        title: 'OUTDOOR PLANT',
        name: 'outdoor',
    },
    {
        id: 3,
        img: 'https://cdn.pixabay.com/photo/2016/01/02/02/03/orange-1117645_1280.jpg',
        title: 'FRUIT TREES',
        name: 'fruittree',
    },
    {
        id: 4,
        img: 'https://cdn.pixabay.com/photo/2016/01/02/02/03/orange-1117645_1280.jpg',
        title: 'AGRICULTURAL CROPS',
        name: 'agriculturalcrop',
    },
];

function Categories() {
    const navigate = useNavigate();
    // const [categories, setCategories] = useState(category);
    const [categories, setCategories] = useState([]);

    const API = axios.create({
        baseURL: BASE_API_URL,
    });

    useEffect(() => {
        const fetchCategoryList = () => {
            API.get('/v1/product/getAllProductType')
                .then((res) => {
                    console.log('res: ', res.data);
                    setCategories(res.data);
                })
                .catch((err) => console.log(err));
        };
        fetchCategoryList();
    }, []);

    return (
        <Container fluid className="category-container px-0 py-5">
            <div className="container-xl px-0 pb-2 d-flex flex-row justify-content-between align-items-center">
                <h1 className="ps-4 fw-bold mb-3 mt-3">Shop plants by categories</h1>

                <Button
                    onClick={() => navigate('/products')}
                    rightIcon={<FontAwesomeIcon icon={faAngleRight} />}
                >
                    <span>Show All Plants</span>
                </Button>
            </div>
            <div className="container-xl px-4 pb-2 d-flex flex-row justify-content-center align-items-center">
                <Row>
                    {categories.map((item) => (
                        <Col md={3} sm={6} key={item.productTypeId}>
                            <CategoryItem item={item} />
                        </Col>
                    ))}
                </Row>
            </div>
        </Container>
    );
}

export default Categories;
