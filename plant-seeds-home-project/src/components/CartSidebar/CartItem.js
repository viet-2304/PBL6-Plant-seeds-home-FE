import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Dash, Plus } from 'react-bootstrap-icons';
import BASE_API_URL from '../../api/api';
import './CartItem.scss';

function CartItem({ itemKey, product }) {
    const [quantity, setQuantity] = useState(
        parseInt(product?.numberOfProductInCart) ? parseInt(product?.numberOfProductInCart) : 1,
    );

    const handleQuantity = (type) => {
        if (type === 'down') {
            quantity > 1 && setQuantity((pre) => pre - 1);
        } else {
            // kiểm tra còn hàng không
            setQuantity((prev) => prev + 1);
        }
    };
    useEffect(() => {
        axios
            .post(
                BASE_API_URL + 'v1/cart/editCart',
                {
                    id: product.cartId,
                    number: quantity,
                    userId: localStorage.getItem('userId'),
                    productId: product.productId,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: 'Bearer ' + localStorage.getItem('token'),
                    },
                },
            )
            .then(() => {
                console.log('updated');
            })
            .catch((err) => console.log('111', err));
    }, [quantity]);
    return (
        <tr key={itemKey} className="item-cart">
            <td>
                <img
                    src="https://cf.shopee.vn/file/59ced2b1371dd71a64a52af77b69d3d1"
                    alt=""
                    width="60px"
                    height="60px"
                />
            </td>
            <td className="item-title">{product?.productName}</td>
            {/* {price && <td>{product?.productDto.price}</td>} */}
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

export default CartItem;
