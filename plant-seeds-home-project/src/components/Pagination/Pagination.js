import React, { useState } from 'react';
import { useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import classNames from 'classnames/bind';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from './Pagination.module.scss';
import ProductItem from '../ProductItem/ProductItem';
const cx = classNames.bind(styles);

function Pagination({ data, numberPerPage }) {
    const [pageNumber, setPageNumber] = useState(0);
    const [displayUsers, setDisplayUsers] = useState([]);
    const pageCount = Math.ceil(data.length / numberPerPage);
    const visitedPage = pageNumber * numberPerPage;
    const handlePageChange = ({ selected }) => {
        setPageNumber(selected);
    };
    useEffect(() => {
        setDisplayUsers(data?.slice(visitedPage, visitedPage + numberPerPage));
    }, [data, numberPerPage, visitedPage]);
    return (
        <div>
            <div className="row row-cols-lg-6 row-cols-md-2 g-4">
                {displayUsers?.map((product) => (
                    <div className="col">
                        <ProductItem
                            title={product.name}
                            image={product.image}
                            price={product.price}
                            button
                        />
                    </div>
                ))}
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
        </div>
    );
}

export default Pagination;
