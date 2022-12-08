import 'jquery/dist/jquery.min.js';
import 'datatables.net-dt/js/dataTables.dataTables';
import 'datatables.net-dt/css/jquery.dataTables.min.css';

import $ from 'jquery';
import { useEffect } from 'react';
import './Order.scss';
import { useState } from 'react';
import axios from 'axios';
import BASE_API_URL from '../../../api/api';
import DataTable from 'react-data-table-component';
import { SortDown } from 'react-bootstrap-icons';
import movies from '../../../assets/movies';

function Order() {
    // const [CartItems, setCartItems] = useState();
    // const API = axios.create({
    //     baseURL: BASE_API_URL,
    // });
    // useEffect(() => {
    //     $(document).ready(function () {
    //         $('#ordertable').DataTable();
    //     });
    //     const fetchCartItem = () => {
    //         API.get('v1/cart/getAll', {
    //             headers: {
    //                 Authorization: `Bearer ${localStorage.getItem('token')}`,
    //             },
    //         })
    //             .then((res) => {
    //                 setCartItems(res.data);
    //             })
    //             .catch((err) => console.log('111', err));
    //     };
    //     fetchCartItem();
    // }, []);
    // console.log('cart2222', CartItems);

    const [tableRowsData, setTableRowsData] = useState(movies);

    const onChange = (e) => {
        var searchData = movies.filter((item) => {
            if (item.title.toString().toLowerCase().includes(e.target.value.toLowerCase())) {
                return item;
            }
        });
        setTableRowsData(searchData);
    };

    const headerResponsive = [
        {
            name: (
                <div>
                    Title
                    {/* <input className="search" type="text" onChange={(e) => onChange(e)} /> */}
                </div>
            ),
            selector: 'title',
            sortable: true,
        },
        {
            name: 'Directior',
            selector: 'director',
            sortable: true,
        },
        {
            name: 'Runtime (m)',
            selector: 'runtime',
            sortable: true,
            right: true,
        },
    ];

    useEffect(() => {}, [tableRowsData]);

    return (
        <div>
            <div className="d-flex justify-content-end">
                <input
                    className="search"
                    placeholder="Search..."
                    type="text"
                    onChange={(e) => onChange(e)}
                />
            </div>
            <DataTable
                title="Movies"
                columns={headerResponsive}
                data={tableRowsData}
                defaultSortField="title"
                sortIcon={<SortDown />}
                pagination
                selectableRows
            />
        </div>
    );
}

export default Order;
