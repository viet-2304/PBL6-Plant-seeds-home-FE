import { useEffect, useState } from 'react';
import { SortDown } from 'react-bootstrap-icons';
import DataTable from 'react-data-table-component';

import './Table.scss';

function List({ title, columns, data, searchBy }) {
    const [tableRowsData, setTableRowsData] = useState(data);
    const onChange = async (e) => {
        var searchData = data.filter((item) => {
            if (item[searchBy].toString().toLowerCase().includes(e.target.value.toLowerCase())) {
                return item;
            }
        });
        setTableRowsData(searchData);
    };
    useEffect(() => {
        setTableRowsData(data);
    }, [data]);
    return (
        <div>
            <div className="d-flex justify-content-end my-1">
                <button type="button" className="btn btn-outline-danger mx-5">
                    Delete
                </button>
                <input className="search" placeholder="Search..." type="text" onChange={onChange} />
            </div>
            <DataTable
                title={title}
                columns={columns}
                data={tableRowsData}
                defaultSortFieldId
                sortIcon={<SortDown />}
                pagination
                selectableRows
            />
        </div>
    );
}

export default List;
