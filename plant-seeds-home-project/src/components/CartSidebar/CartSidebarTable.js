import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Dash, Plus } from 'react-bootstrap-icons';
import Table from 'react-bootstrap/Table';
import '../AppHeader/Header.scss';
import './CartSidebar.scss';
import axios from 'axios';
import BASE_API_URL from '../../api/api';
import ItemCart from './ItemCart';

function CartSideBarTable({ cartItems }) {
    const [productList, setProductList] = useState([]);
    return (
        <>
            {cartItems.map((item) => {
                console.log('item1', item);
                // setProductList(item.listProductAndNumberDto);
                return (
                    <>
                        {item.listProductAndNumberDto.map((product, index) => {
                            console.log(product.productName);

                            return (
                                <ol>
                                    <li key={index}>{product.productName}</li>
                                </ol>
                            );
                        })}
                    </>
                );
            })}
        </>
    );
}

export default CartSideBarTable;
