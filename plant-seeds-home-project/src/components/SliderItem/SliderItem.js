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
                {items.map((item, indx) => {
                    return (
                        <Carousel.Item key={indx} className="container">
                            <ProductItem
                                title={item.description}
                                image={
                                    'https://static.wixstatic.com/media/d6070d_dc18468c7fb94def8d4efd7789bea60e~mv2.jpg/v1/fill/w_228,h_228,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/d6070d_dc18468c7fb94def8d4efd7789bea60e~mv2.jpg'
                                }
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
