import React, { useState } from 'react';
import { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames/bind';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Pagination.module.scss';
import ProductCard from '../ProductCard/ProductCard';

const cx = classNames.bind(styles);

function Pagination({ title, data, numberPerPage }) {
    const [pageNumber, setPageNumber] = useState(0);
    const [displayProducts, setDisplayProducts] = useState([]);

    const pageCount = Math.ceil(data.length / numberPerPage);
    const visitedPage = pageNumber * numberPerPage;
    const handlePageChange = ({ selected }) => {
        setPageNumber(selected);
    };
    useEffect(() => {
        setDisplayProducts(data?.slice(visitedPage, visitedPage + numberPerPage));
    }, [data, numberPerPage, visitedPage]);

    return (
        <Container className={cx('container')}>
            <h1 className="fw-bold mb-0">{title.toUpperCase()}</h1>
            <div className="row row-cols-lg-4 row-cols-md-2 g-4">
                {displayProducts?.map((product) => {
                    return (
                        <div className="col">
                            <ProductCard
                                key={product.productId}
                                title={product.productName}
                                image="https://jacks-garden-server.herokuapp.com/images/spider_plant.jpg"
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
                containerClassName={cx('paginationContainer')}
                previousLinkClassName={cx('icon')}
                nextLinkClassName={cx('icon')}
                disabledClassName={cx('paginationDisabled')}
                activeClassName={cx('paginationActive')}
            />
        </Container>
    );
}

export default Pagination;
