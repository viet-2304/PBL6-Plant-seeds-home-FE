import Widget from '../../../components/Seller/Widget/Widget';

function Dashboard() {
    return (
        <div className="widgets">
            <Widget type="customer" />
            <Widget type="order" />
            <Widget type="earning" />
            <Widget type="balance" />
        </div>
    );
}

export default Dashboard;
