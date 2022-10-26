import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-grid-carousel';

import ProductItem from '../ProductItem/ProductItem';
import './SliderItem.scss';

function SliderItem({ items, title }) {
    return (
        <Container className="sliderItem-container">
            <h1 className="ps-4 fw-bold mb-0">{title}</h1>
            <Carousel
                cols={6}
                rows={1}
                autoplay={5000}
                loop={true}
                responsiveLayout={[
                    {
                        breakpoint: 1023,
                        cols: 3,
                    },
                    {
                        breakpoint: 739,
                        cols: 2,
                    },
                ]}
                mobileBreakpoint={670}
            >
                {items?.map((item) => {
                    return (
                        <Carousel.Item key={item.productId} className="container">
                            <ProductItem
                                title={item.name}
                                image={'https://jacks-garden-server.herokuapp.com/images/plant.jpg'}
                                price={item.price}
                                button
                            />
                        </Carousel.Item>
                    );
                })}
            </Carousel>
        </Container>
    );
}

export default SliderItem;
