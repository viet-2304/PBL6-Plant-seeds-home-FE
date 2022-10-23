import { Col, Container, Row } from 'react-bootstrap';
import CategoryItem from './CategoryItem';
import './Categories.scss';
import Button from '../Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const categories = [
    {
        id: 1,
        img: 'https://cdn.pixabay.com/photo/2021/01/22/06/04/snake-plant-5939187_1280.jpg',
        title: 'INDOOR PLANT',
        cat: 'indoor',
    },
    {
        id: 2,
        img: 'https://cdn.pixabay.com/photo/2022/02/16/14/55/flower-7016948_1280.jpg',
        title: 'OUTDOOR PLANT',
        cat: 'outdoor',
    },
    {
        id: 3,
        img: 'https://cdn.pixabay.com/photo/2016/01/02/02/03/orange-1117645_1280.jpg',
        title: 'FRUIT TREES',
        cat: 'fruittree',
    },
    {
        id: 4,
        img: 'https://cdn.pixabay.com/photo/2016/01/02/02/03/orange-1117645_1280.jpg',
        title: 'AGRICULTURAL CROPS',
        cat: 'Agricultural crops',
    },
];

function Categories() {
    return (
        <Container
            fluid
            className="category-container d-flex flex-column justify-content-between align-items-center px-0 py-5"
        >
            <div className="container-xl px-0 pb-2 d-flex flex-row justify-content-between align-items-center">
                <h1 className="ps-4 fw-bold mb-3 mt-3">Shop plants by categories</h1>
                <Button to={'/products'} rightIcon={<FontAwesomeIcon icon={faAngleRight} />}>
                    <span>Show All Plants</span>
                </Button>
            </div>
            <Row className="container-xl px-0">
                {categories.map((item) => (
                    <Col md={3} sm={6} key={item.id}>
                        <CategoryItem item={item} />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Categories;
