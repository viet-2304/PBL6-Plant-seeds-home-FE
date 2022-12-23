import { Container, Row, Col } from 'react-bootstrap';
import { Flower1, SuitHeart, Truck } from 'react-bootstrap-icons';

import './Features.scss';
function Features() {
    return (
        <Container
            fluid="xl"
            className="feature-container d-none d-md-flex justify-content-center py-5"
        >
            <Row className="w-100 d-flex align-items-center justify-content-center">
                <Col md={4} className="d-flex align-items-center justify-content-center px-5 col-md-4">
                    <Truck size="40px" color="#D68C45" />
                    <div className="ps-4">
                        <h3>Local Pickup</h3>
                        <h4>Click and collect from our nursery.</h4>
                    </div>
                </Col>
                <Col md={4} className="d-flex align-items-center justify-content-center px-5 col-md-4">
                    <Flower1 size="50px" color="#D68C45" />
                    <div className="ps-4">
                        <h3>Shipping Locations</h3>
                        <h4>We ship all our products around Brisbane. </h4>
                    </div>
                </Col>
                <Col md={4} className="d-flex align-items-center justify-content-center px-5 col-md-4">
                    <SuitHeart size="40px" color="#D68C45" />
                    <div className="ps-4">
                        <h3>Our Guarantee</h3>
                        <h4>We only provide the best quality plants.</h4>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Features;
