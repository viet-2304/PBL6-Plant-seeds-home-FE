import { useNavigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import './CategoryItem.scss';

const CategoryItem = ({ item, index }) => {
    const images = [
        'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2022/1/18/20190425063710470758rauxanhmax-800x8001-164247973908380094864.jpg',
        'https://suckhoehangngay.mediacdn.vn/zoom/700_438/2019/9/24/tinh-bot-5-1569343421735735173657-crop-1569343433132320092248.jpg',
        'http://file.hstatic.net/200000427529/article/y-nghia-hoa-cuc-hoa-mi_8a0b4007caf240f4a6f32d45e6a414d7.jpg',
        'https://kienthuctieuduong.vn/wp-content/uploads/2018/11/cach-chon-hoa-qua-phu-hop-trong-che-do-an-uong-han-che-duong-1.jpg',
    ];
    const navigate = useNavigate();
    return (
        <Card className="card bg-dark text-white my-2">
            <Card.Img className="cateImg" src={images[index]} alt="Card image" />
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
