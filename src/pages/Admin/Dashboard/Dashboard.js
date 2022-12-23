import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
// import { Widget } from '../../../components/Seller/Widget/Widget';
import Chart from '../../../components/Admin/Chart/Chart';
import Featured from '../../../components/Admin/Featured/Featured';

import StatCard from '../../../components/Admin/StatCard/StatCard';
import './Dashboard.scss';

const Dashboard = () => {
    const [salesData, setSalesData] = useState(null);
    return (
        <Container className="m-5 home px-4 px-md-0">
            <div className="widgets-admin ">
                <StatCard type="customer" bg="bg-success" />
                <StatCard type="product" bg="bg-warning" />
                <StatCard type="order" bg="bg-primary" />
                <StatCard type="store" bg="bg-secondary" />
                <StatCard type="delivery" bg="bg-light" />
            </div>
            {/* <Row className="bottom-container"> */}
            <div className="charts">
                <Featured />
                <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
            </div>
            {/* </Row> */}
        </Container>
    );
};

export default Dashboard;
