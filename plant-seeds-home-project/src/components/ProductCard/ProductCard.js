import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from '../Button/Button.js';
import './ProductCard.scss';

function ProductCard({ key, to, title, price, image }) {
    return (
        <div className="card-container" id={key}>
            <div className="card text-left mt-5 d-flex ">
                <div className="card-img-top">
                    <img src={image} alt="imageproduct" />
                    <div className="product-action d-flex align-items-center justify-content-center">
                        <Button className="action-btn">
                            <FontAwesomeIcon icon={faCartShopping} />
                        </Button>
                        <Button to={to} className="action-btn">
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </Button>
                        <Button className="action-btn">
                            <FontAwesomeIcon icon={faHeart} />
                        </Button>
                    </div>
                </div>
                <div className="card-body text-left">
                    <h4 className="card-title">{title}</h4>
                    <h5 className="card-text text-danger">{price} VND</h5>
                </div>
            </div>
        </div>

        // <div className="container" id={key}>
        //     <div className="card text-left mt-5 border border-secondary rounded">
        //         <button className="heart-icon">
        //             <FontAwesomeIcon icon={faHeart} />
        //         </button>
        //         <img src={image} className="card-img-top" alt={image} />
        //         <div className="card-body text-left">
        //             <h4 className="card-title">{title}</h4>
        //             <h5 className="card-text text-danger">{price}</h5>
        //             {button && (
        //                 <Button large item>
        //                     Add To Cart
        //                 </Button>
        //             )}
        //         </div>
        //         <div className="overview d-flex align-items-center justify-content-center">
        //             <Link to={to}>View</Link>
        //         </div>
        //     </div>
        // </div>

        // <div class="col-md-6 col-lg-4 col-xl-3">
        //     <div id="product-1" class="single-product">
        //         <div class="part-1">
        //             <ul>
        //                 <li>
        //                     <a href="#">
        //                         <i class="fas fa-shopping-cart"></i>
        //                     </a>
        //                 </li>
        //                 <li>
        //                     <a href="#">
        //                         <i class="fas fa-heart"></i>
        //                     </a>
        //                 </li>
        //             </ul>
        //         </div>
        //         <div class="part-2">
        //             <h3 class="product-title">Here Product Title</h3>
        //             <h4 class="product-old-price">$79.99</h4>
        //             <h4 class="product-price">$49.99</h4>
        //         </div>
        //     </div>
        // </div>
    );
}

export default ProductCard;
