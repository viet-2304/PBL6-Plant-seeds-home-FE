import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';
import { Dash, Plus } from 'react-bootstrap-icons';
import BASE_API_URL from '../../api/api';
import './CartSidebar.scss';

function ItemCart({ key, product, price }) {
    console.log('item', product);
    const [quantity, setQuantity] = useState(
        product?.numberOfProductInCart ? product?.numberOfProductInCart : 1,
    );

    const handleQuantity = (type) => {
        if (type === 'down') {
            quantity > 1 && setQuantity((pre) => pre - 1);
        } else {
            setQuantity((prev) => prev + 1);
        }
        console.log('SL', quantity);
        axios
            .post(
                BASE_API_URL + 'v1/cart/editCart',
                {
                    cartId: product.cartId,
                    userId: localStorage.getItem('userId'),
                    number: quantity,
                    productId: product.productId,
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
        <tr key={key}>
            <td>
                <img
                    src="https://cf.shopee.vn/file/59ced2b1371dd71a64a52af77b69d3d1"
                    alt=""
                    width="60px"
                    height="60px"
                />
            </td>
            <td className="item-title">{product?.productName}</td>
            {price && <td>{product?.productDto.price}</td>}
            <td>
                <div className="amount-container">
                    <Dash size="30px" onClick={() => handleQuantity('down')} />
                    <p className="quantity d-inline-flex justify-content-center align-items-center border border-success rounded-3 mx-1">
                        {quantity}
                    </p>
                    <Plus size="30px" onClick={() => handleQuantity('up')} />
                </div>
            </td>
            <td>${quantity * product?.price}</td>
            <td>
                <FontAwesomeIcon icon={faXmark}></FontAwesomeIcon>
            </td>
        </tr>
    );
}

export default ItemCart;
