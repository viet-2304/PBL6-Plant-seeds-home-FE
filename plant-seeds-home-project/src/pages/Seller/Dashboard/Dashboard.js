import Widget from '../../../components/Seller/Widget/Widget';
import Chart from '../../../components/Seller/Chart/Chart';
import './Dashboard.scss';
function Dashboard() {
    return (
        <div className="dashboard ">
            <div className="widgets mx-5">
                <Widget type="customer" />
                <Widget type="product" />
                <Widget type="order" />
                <Widget type="earning" />
                <Widget type="balance" />
            </div>
            <div className="charts">
                <Chart title="Last 6 Months (Revenue)" aspect={3 / 1} />
            </div>
        </div>
    );
}

export default Dashboard;
