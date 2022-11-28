import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import logo from '../../../assets/images/logo-brand.png';
import './SellerHeader.scss';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SellerHeader() {
    return (
        <Container fluid className="seller-navbar">
            <div className="wrapper px-5">
                <Link to="/">
                    <img src={logo} alt="logo" width={320} />
                </Link>
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search..."
                        className="form-control"
                        id="search"
                    />
                    <FontAwesomeIcon icon={faSearch} className="icon px-2" />
                </div>
                <div className="items">
                    <div className="item">
                        <img
                            src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                            alt=""
                            className="avatar"
                        />
                    </div>
                    <div className="name-shop">suongphan1704</div>
                </div>
            </div>
        </Container>
    );
}

export default SellerHeader;
