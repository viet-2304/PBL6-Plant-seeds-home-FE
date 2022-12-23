import { Container } from 'react-bootstrap';
import Widget from '../../../components/Seller/Widget/Widget';
import BarChart from '../../../components/Seller/BarChart/BarChart';
import './Dashboard.scss';
function Dashboard() {
    return (
        <Container className="dashboard">
            <div className="widgets ">
                <Widget type="customer" />
                <Widget type="product" />
                <Widget type="order" />
                <Widget type="earning" />
                <Widget type="balance" />
            </div>
            <div className="charts">
                <BarChart title="Last 6 Months (Revenue)" data={''} />
            </div>
        </Container>
    );
}

export default Dashboard;
