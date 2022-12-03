import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import BASE_API_URL from '../../../api/api';
import Button from '../../Button/Button';
import './Table.scss';

function List() {
    const labels = ['#', 'Manufacturer', 'Image', 'Name', 'MFG', 'EXP', 'Price', 'Quantity'];
    const label = ['Product', 'Image', 'Customer', 'Date', 'Amount', 'Method', 'Status', 'Action'];
    const rows = [
        {
            id: 1143155,
            product: 'Acer Nitro 5',
            img: 'https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg',
            customer: 'John Smith',
            date: '1 March',
            amount: 785,
            method: 'Cash on Delivery',
            status: 'Approved',
        },
        {
            id: 2235235,
            product: 'Playstation 5',
            img: 'https://m.media-amazon.com/images/I/31JaiPXYI8L._AC_UY327_FMwebp_QL65_.jpg',
            customer: 'Michael Doe',
            date: '1 March',
            amount: 900,
            method: 'Online Payment',
            status: 'Pending',
        },
        {
            id: 2342353,
            product: 'Redragon S101',
            img: 'https://m.media-amazon.com/images/I/71kr3WAj1FL._AC_UY327_FMwebp_QL65_.jpg',
            customer: 'John Smith',
            date: '1 March',
            amount: 35,
            method: 'Cash on Delivery',
            status: 'Pending',
        },
        {
            id: 2357741,
            product: 'Razer Blade 15',
            img: 'https://m.media-amazon.com/images/I/71wF7YDIQkL._AC_UY327_FMwebp_QL65_.jpg',
            customer: 'Jane Smith',
            date: '1 March',
            amount: 920,
            method: 'Online',
            status: 'Approved',
        },
        {
            id: '23423553322222222222223qwsdefrgthyjuklkjhgrf2',
            product: 'ASUS ROG Strix',
            img: 'https://m.media-amazon.com/images/I/81hH5vK-MCL._AC_UY327_FMwebp_QL65_.jpg',
            customer: 'Harold Carol',
            date: '1 March',
            amount: 2000,
            method: 'Online',
            status: 'Pending',
        },
    ];
    const [products, setProducts] = useState([]);
    const API = axios.create({
        baseURL: BASE_API_URL,
    });

    useEffect(() => {
        const fetchProdutList = () => {
            API.get('v1/product/getAllProduct')
                .then((res) => {
                    console.log('all1: ', products);
                    setProducts(res.data);
                })
                .catch((err) => console.log(err));
        };
        fetchProdutList();
    }, []);
    console.log('all1: ', products);
    return (
        <Table striped bordered hover size="lg">
            <thead>
                <tr>
                    {labels?.map((label) => (
                        <th key={label}>{label}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {products?.map((row, index) => (
                    <tr key={row?.id}>
                        <td className="">{index}</td>
                        <td className="tableCell">{row?.manufacturer}</td>
                        <td className="">
                            <div className="cellWrapper">
                                <img
                                    src="https://cf.shopee.vn/file/59ced2b1371dd71a64a52af77b69d3d1"
                                    /* src={row?.imageURL}*/ alt=""
                                    className="image"
                                />
                            </div>
                        </td>
                        <td className="tableCell">{row?.productName}</td>
                        <td className="tableCell">{row?.mfg.split('T')[0]}</td>
                        <td className="tableCell">{row?.exp.split('T')[0]}</td>
                        <td className="">{row?.price}</td>
                        <td className="text-center align-middle">
                            <span className={`status ${row?.status}`}>{row?.numberOfProduct}</span>
                        </td>
                        <td className="align-middle">
                            <div className="cellActions">
                                <Button to={`/seller/product/update/${row?.productId}`}>
                                    <FontAwesomeIcon icon={faPen} />
                                </Button>
                                <Button>
                                    <FontAwesomeIcon icon={faTrash} />
                                </Button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    );
}

export default List;
