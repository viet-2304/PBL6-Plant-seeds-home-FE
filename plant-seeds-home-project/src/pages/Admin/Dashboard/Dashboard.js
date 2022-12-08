import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
// import { Widget } from '../../../components/Seller/Widget/Widget';

import { SalesChart } from '../../../components/Admin/SalesChart/SalesChart';
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
            <Row className="bottom-container">
                <SalesChart salesData={salesData} />
            </Row>
        </Container>
    );
};

export default Dashboard;
