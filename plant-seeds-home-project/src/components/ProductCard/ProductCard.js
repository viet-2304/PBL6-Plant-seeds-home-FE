import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './ProductCard.scss';

function ProductCard({ key, to, title, price, image, button = false }) {
    return (
        <div className="container" id={key}>
            <div className="card text-left mt-5 border border-secondary rounded">
                <button className="heart-icon">
                    <FontAwesomeIcon icon={faHeart} />
                </button>
                <img src={image} className="card-img-top" alt={image} />
                <div className="card-body text-left">
                    <h4 className="card-title">{title}</h4>
                    <h5 className="card-text text-danger">{price}</h5>
                    {button && (
                        <Button large item>
                            Add To Cart
                        </Button>
                    )}
                </div>
                <div className="overview d-flex align-items-center justify-content-center">
                    <Link to={to}>View</Link>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
