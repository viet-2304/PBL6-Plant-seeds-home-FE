import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-grid-carousel';

import ProductCard from '../ProductCard/ProductCard';
import './SliderProduct.scss';

function SliderItem({ items, title }) {
    return (
        <Container className="sliderItem-container">
            <h1 className="ps-4 fw-bold mb-0">{title}</h1>
            {/* <hr className='border-round'/> */}
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
                            <ProductCard
                                title={item.productName}
                                image="https://jacks-garden-server.herokuapp.com/images/spider_plant.jpg"
                                price={item.price}
                                to={`/products/${item.productType}/${item.productId}`}
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
