import { Table } from 'react-bootstrap';
import './Table.scss';

function List({ title, data }) {
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
    return (
        <div>
            <div className="d-flex justify-content-between aglin-items-center mb-2">
                <h1 className="fw-bold ">PRODUCTS</h1>
                <button type="button" class="btn btn-outline-success">
                    Add New
                </button>
            </div>
            <Table striped bordered hover size="lg">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Product</th>
                        <th>Image</th>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Method</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {rows?.map((row) => (
                        <tr>
                            <td className="tableCell">{row.id}</td>
                            <td className="tableCell">{row.product}</td>
                            <td className="">
                                <div className="cellWrapper">
                                    <img src={row.img} alt="" className="image" />
                                </div>
                            </td>
                            <td className="tableCell">{row.customer}</td>
                            <td className="tableCell">{row.date}</td>
                            <td className="tableCell">{row.amount}</td>
                            <td className="tableCell">{row.method}</td>
                            <td className="tableCell">
                                <span className={`status ${row.status}`}>{row.status}</span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}

export default List;
