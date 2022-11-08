import React from 'react';
import { Container } from 'react-bootstrap';
import Carousel from 'react-grid-carousel';

import ProductCard from '../ProductCard/ProductCard';
import './SliderProduct.scss';

function SliderProduct({ items, title }) {
    return (
        <Container fluid className="sliderItem-container  px-0 py-5">
            <div className="container-xl px-0 pb-2 d-flex flex-row justify-content-between align-items-center">
                <h1 className="ps-4 fw-bold mb-3 mt-3 ">{title}</h1>
            </div>
            <div className="container-xl px-0 pb-2 pt-2">
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
                                    image="https:jacks-garden-server.herokuapp.com/images/spider_plant.jpg"
                                    price={item.price}
                                    to={`/products/${item.productType}/${item.productId}`}
                                    button
                                />
                            </Carousel.Item>
                        );
                    })}
                </Carousel>
            </div>
        </Container>

        // <Container fluid className="sliderItem-container px-0 py-5">
        //     <div className="container-xl px-0 pb-2 ">
        //         <h1 className="ps-5 fw-bold mb-3 mt-3 ">{title}</h1>
        //         {/* <hr className='border-round'/> */}
        //         <Carousel
        //             cols={6}
        //             rows={1}
        //             autoplay={5000}
        //             loop={true}
        //             responsiveLayout={[
        //                 {
        //                     breakpoint: 1023,
        //                     cols: 3,
        //                 },
        //                 {
        //                     breakpoint: 739,
        //                     cols: 2,
        //                 },
        //             ]}
        //             mobileBreakpoint={670}
        //         >
        //             {items?.map((item) => {
        //                 return (
        //                     <Carousel.Item key={item.productId} className="container">
        //                         <ProductCard
        //                             title={item.productName}
        //                             image="https://jacks-garden-server.herokuapp.com/images/spider_plant.jpg"
        //                             price={item.price}
        //                             to={`/products/${item.productType}/${item.productId}`}
        //                             button
        //                         />
        //                     </Carousel.Item>
        //                 );
        //             })}
        //         </Carousel>
        //     </div>
        // </Container>
    );
}

export default SliderProduct;
