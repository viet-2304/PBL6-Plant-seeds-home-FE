import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Pagination.scss';
import ProductCard from '../ProductCard/ProductCard';

function Pagination({ title, data, numberPerPage }) {
    const [pageNumber, setPageNumber] = useState(0);
    const [displayProducts, setDisplayProducts] = useState([]);

    const pageCount = Math.ceil(data?.length / numberPerPage);
    const visitedPage = pageNumber * numberPerPage;
    const handlePageChange = ({ selected }) => {
        setPageNumber(selected);
    };
    useEffect(() => {
        setDisplayProducts(data?.slice(visitedPage, visitedPage + numberPerPage));
    }, [data, numberPerPage, visitedPage]);
    return (
        <Container className="pagination">
            <h1 className="fw-bold mb-5">{title.toUpperCase()}</h1>
            <div className="row row-cols-lg-4 row-cols-md-2 g-4">
                {/* <div className="col">
                    <ProductCard
                        title="Sen Đá Móng Rồng- Cây Để Bàn"
                        image="https://cf.shopee.vn/file/59ced2b1371dd71a64a52af77b69d3d1"
                        price="30.000"
                        to="product/1"
                    />
                </div>
                <div className="col">
                    <ProductCard
                        title="Sen Đá Móng Rồng- Cây Để Bàn"
                        image="https://cf.shopee.vn/file/59ced2b1371dd71a64a52af77b69d3d1"
                        price="30.000"
                        to="product/1"
                    />
                </div>

                <div className="col">
                    <ProductCard
                        title="Xương rồng trứng chim - chậu mini để bàn trang trí"
                        image="https://cf.shopee.vn/file/f9c63650a60d63ef369884ceefa0cbcd"
                        price="20.000"
                        to="product/1"
                    />
                </div>

                <div className="col">
                    <ProductCard
                        title="Xương rồng Thiên Nga"
                        image="https://cf.shopee.vn/file/cf20bd143ea2c957f501974848aa2c09"
                        price="40.000"
                        to="product/1"
                    />
                </div>

                <div className="col">
                    <ProductCard
                        title="Cây cẩm nhung xanh bụi to kèm chậu sứ trắng mang lai may mắn"
                        image="https://cf.shopee.vn/file/sg-11134201-22100-yp80s3xlefivb4"
                        price="80.000"
                        to="product/1"
                    />
                </div>

                <div className="col">
                    <ProductCard
                        title="Cây lưỡi hổ Thái mini để bàn, cây lưỡi hổ hoàng kim, lưỡi hổ viền vàng "
                        image="https://cf.shopee.vn/file/382aa1f20399c7c428ad47365b99ae06"
                        price="100.000"
                        to="product/1"
                    />
                </div>

                <div className="col">
                    <ProductCard
                        title="Cây cảnh"
                        image="https://jacks-garden-server.herokuapp.com/images/cactus.jpg"
                        price="1"
                        to="product/1"
                    />
                </div>

                <div className="col">
                    <ProductCard
                        title="Cây cảnh"
                        image="https://jacks-garden-server.herokuapp.com/images/fiddle_leaf.jpg"
                        price="1"
                        to="product/1"
                    />
                </div>

                <div className="col">
                    <ProductCard
                        title="Cây cảnh"
                        image="https:jacks-garden-server.herokuapp.com/images/spider_plant.jpg"
                        price="1"
                        to="product/1"
                    />
                </div>

                <div className="col">
                    <ProductCard
                        title="Cây cảnh"
                        image="https:jacks-garden-server.herokuapp.com/images/spider_plant.jpg"
                        price="1"
                        to="product/1"
                    />
                </div> */}

                {/* {displayProducts?.map((product) => { */}
                {displayProducts?.map((product) => {
                    return (
                        <div className="col" key={product.productId}>
                            <ProductCard
                                id={product.productId}
                                title={product.productName}
                                image="https://product.hstatic.net/1000269461/product/hat-giong-bap-ngot-pn_d20b175577684dcba3c57167006ee34a_medium.png"
                                // image={product.image}
                                price={product.price}
                                to={`/products/${product.productType}/${product.productId}`}
                                button
                            />
                        </div>
                    );
                })}
            </div>
            <ReactPaginate
                previousLabel={<FontAwesomeIcon icon={faAngleLeft} />}
                nextLabel={<FontAwesomeIcon icon={faAngleRight} />}
                pageCount={pageCount}
                onPageChange={handlePageChange}
                containerClassName="paginationContainer"
                previousLinkClassName="icon"
                nextLinkClassName="icon"
                disabledClassName="paginationDisabled"
                activeClassName="paginationActive"
            />
        </Container>
    );
}

export default Pagination;
