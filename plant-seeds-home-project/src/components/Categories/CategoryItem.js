import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './CategoryItem.scss';

const CategoryItem = ({ item }) => {
    const navigate = useNavigate();
    return (
        <Card className="card bg-dark text-white my-2">
            <Card.Img
                className="cateImg"
                src="https://cdn.pixabay.com/photo/2022/02/16/14/55/flower-7016948_1280.jpg"
                alt="Card image"
            />
            <Card.ImgOverlay className="imgOverlay d-flex flex-column align-items-center justify-content-center">
                <Card.Title>{item.name.toUpperCase()}</Card.Title>
                <Button
                    variant="light"
                    alt="link to products page"
                    className="py-2 px-4"
                    onClick={() => navigate(`/products/${item.name}`)}
                >
                    SHOP NOW
                </Button>
            </Card.ImgOverlay>
        </Card>
    );
};

export default CategoryItem;
