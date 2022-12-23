import { useState } from 'react';
import { Button, Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Slider.scss';

function Slider() {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Container fluid className="slideContainer px-0">
            <Carousel fade interval="5000" activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item className="slide1 d-flex flex-row justify-content-end align-items-center p-5"></Carousel.Item>
                <Carousel.Item className="slide2 d-flex flex-row justify-content-end align-items-center p-5"></Carousel.Item>
                <Carousel.Item className="slide3 d-flex flex-row justify-content-end align-items-center p-5"></Carousel.Item>
            </Carousel>
            <Container
                fluid="xl"
                className="info d-flex align-items-center justify-content-end pt-5"
            >
                <Container className="carouselInfo d-flex flex-column text-left align-items-center align-items-md-start pe-md-4 p-20 pt-5 w-100 h-100">
                    <h1 className="fw-bold text-left pt-5">
                        Make your world <br></br>greener!
                    </h1>
                    <Link to="/products">
                        <Button variant="outline-light" size="lg" className="py-3 px-5">
                            SHOP NOW
                        </Button>
                    </Link>
                </Container>
            </Container>
        </Container>
    );
}

export default Slider;
