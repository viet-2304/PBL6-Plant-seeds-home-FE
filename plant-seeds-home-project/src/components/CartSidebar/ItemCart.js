import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';
import { Dash, Plus } from 'react-bootstrap-icons';
import BASE_API_URL from '../../api/api';
import './CartSidebar.scss';

function ItemCart({ index, item, price }) {
    const [quantity, setQuantity] = useState(
        item?.numberOfProductInCart ? item?.numberOfProductInCart : 1,
    );

    const handleQuantity = (type) => {
        if (type === 'down') {
            quantity > 1 && setQuantity((pre) => pre - 1);
        } else {
            setQuantity((prev) => prev + 1);
        }
        axios
            .post(
                BASE_API_URL + 'v1/cart/editCart',
                {
                    cartId: item.cartId,
                    userId: localStorage.getItem('userId'),
                    numberOfProduct: quantity,
                    productId: item.productDto.productId,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                    },
                },
            )
            .then((res) => {
                console.log('updated');
            })
            .catch((err) => console.log('111', err));
    };
    return (
        <tr key={index}>
            <td>
                <img
                    src="https://cf.shopee.vn/file/59ced2b1371dd71a64a52af77b69d3d1"
                    alt=""
                    width="60px"
                    height="60px"
                />
            </td>
            <td className="item-title">{item?.productDto.productName}</td>
            {price && <td>{item?.productDto.price}</td>}
            <td>
                <div className="amount-container">
                    <Dash size="30px" onClick={() => handleQuantity('down')} />
                    <p className="quantity d-inline-flex justify-content-center align-items-center border border-success rounded-3 mx-1">
                        {quantity}
                    </p>
                    <Plus size="30px" onClick={() => handleQuantity('up')} />
                </div>
            </td>
            <td>${quantity * item?.productDto.price}</td>
            <td>
                <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </td>
        </tr>
    );
}

export default ItemCart;
