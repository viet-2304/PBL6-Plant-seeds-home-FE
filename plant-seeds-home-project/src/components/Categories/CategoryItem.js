import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './CategoryItem.scss';

const CategoryItem = ({ item }) => {
    return (
        <Card className="card bg-dark text-white my-2">
            <Card.Img className="cateImg" src={item.img} alt="Card image" />
            <Card.ImgOverlay className="imgOverlay d-flex flex-column align-items-center justify-content-center">
                <Card.Title>{item.title}</Card.Title>
                <Link to={`/products/${item.cat}`}>
                    <Button variant="light" alt="link to products page" className="py-2 px-4">
                        SHOP NOW
                    </Button>
                </Link>
            </Card.ImgOverlay>
        </Card>
    );
};

export default CategoryItem;
