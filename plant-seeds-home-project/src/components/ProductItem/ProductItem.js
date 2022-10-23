import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../Button/Button';
import './ProductItem.scss';

function ProductItem({ to = false, title, price, image, button = false }) {
    return (
        <div className="container">
            <div className="card text-left mt-5">
                <button className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <img src={image} className="card-img-top" alt={image} />
                <div className="card-body text-left">
                    <h4 className="card-title">{title}</h4>
                    <h5 className="card-text text-danger">{price}</h5>
                    {button && (
                        <Button large item>
                            Thêm vào giỏ hàng
                        </Button>
                    )}
                </div>
            </div>
            <div className="overview">
                <span>Xem nhanh</span>
            </div>
        </div>
    );
}

export default ProductItem;
