import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShop, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Dash, Plus } from 'react-bootstrap-icons';
import './CartItem.scss';
import axios from 'axios';
import BASE_API_URL from '../../api/api';
import { useEffect, useState } from 'react';

function CartItem({ itemKey, item, handleChangeQuantity }) {
    const [quantity, setQuantity] = useState(
        parseInt(item?.numberOfProductInCart) ? parseInt(item?.numberOfProductInCart) : 1,
    );

    const handleQuantity = (type) => {
        if (type === 'down') {
            if (quantity > 1) {
                setQuantity((pre) => pre - 1);
                handleChangeQuantity();
            }
        } else {
            // kiểm tra còn hàng không
            setQuantity((prev) => prev + 1);
            handleChangeQuantity();
        }
    };
    useEffect(() => {
        axios
            .post(
                BASE_API_URL + 'v1/cart/editCart',
                {
                    id: item.cartId,
                    number: quantity,
                    userId: localStorage.getItem('userId'),
                    productId: item.productId,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                    },
                },
            )
            .then(() => {
                console.log({
                    id: item.cartId,
                    number: quantity,
                    userId: localStorage.getItem('userId'),
                    productId: item.productId,
                });
            })
            .catch((err) => console.log('111', err));
    }, [quantity]);
    return (
        <div key={itemKey} className="card-content border-bottom border-secondary d-flex py-3">
            <div className="col d-flex align-items-center justify-content-start">
                <img
                    src="https://cf.shopee.vn/file/59ced2b1371dd71a64a52af77b69d3d1"
                    alt=""
                    width="70px"
                    height="70px"
                />
            </div>
            <div className="col d-flex align-items-center justify-content-start">
                <div className="text-black h2 text-name">{item?.productName}</div>
            </div>
            <div className="col d-flex col align-items-center justify-content-center">
                <div className=" text-black">{item?.price}</div>
            </div>
            <div className="col d-flex col align-items-center justify-content-center">
                <Dash size="30px" onClick={() => handleQuantity('down')} />
                <p className="quantity d-inline-flex justify-content-center align-items-center border border-success rounded-3 mx-1">
                    {quantity}
                </p>
                <Plus size="30px" onClick={() => handleQuantity('up')} />
            </div>
            <div className="d-flex col align-items-center justify-content-center text-danger">
                {quantity * item?.price}
            </div>
        </div>
    );
}

export default CartItem;
