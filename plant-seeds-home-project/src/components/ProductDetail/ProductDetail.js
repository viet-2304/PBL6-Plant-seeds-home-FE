import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { ButtonGroup, Col, Container, Image, Row } from 'react-bootstrap';
import { Dash, Plus } from 'react-bootstrap-icons';
import products1 from '../../assets/items.json';
import Button from '../Button/Button';
import './ProductDetail.scss';

function ProductDetail({ product }) {
    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (type) => {
        if (type === 'down') {
            quantity > 1 && setQuantity((prev) => prev - 1);
        } else {
            setQuantity((prev) => prev + 1);
        }
    };

    return (
        <Container fluid className="detail-container mb-3 ">
            <Row className="py-4 justify-content-md-center">
                <Col
                    xs
                    lg="3"
                    className="img-col p-3 d-flex justify-content-end align-items-center"
                >
                    <Image
                        src="https://jacks-garden-server.herokuapp.com/images/spider_plant.jpg"
                        className="w-100 pe-5"
                        alt="{product?.image}"
                    />
                </Col>
                <Col as="div" xs lg="5" className=" d-flex flex-column justity-content-between p-3">
                    <h2 className="name mb-4">{product?.productName}</h2>
                    <p>{product?.description}</p>
                    <p className="price fw-bold fs-3">$ {product?.price}</p>
                    <div className="amount-container">
                        <Dash size="30px" onClick={() => handleQuantity('down')} />
                        <p className="quantity d-inline-flex justify-content-center align-items-center border border-success rounded-3 mx-1">
                            {quantity}
                        </p>
                        <Plus size="30px" onClick={() => handleQuantity('up')} />
                    </div>
                    <Button cart small>
                        ADD TO CART
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

export default ProductDetail;
