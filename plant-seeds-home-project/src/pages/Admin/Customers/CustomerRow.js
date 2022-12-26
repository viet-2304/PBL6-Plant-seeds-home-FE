import { useSelector } from 'react-redux';
import { Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

const CustomerRow = ({ customer }) => {
    // const isTester = useSelector((state) => state.currentUser?.firstName);
    return (
        <tr className="text-center align-middle fs-4">
            <td>{customer.phoneNumber}</td>
            <td id="emailBar">{customer.email}</td>
            <td>{customer.address}</td>
            <td>{customer.userName}</td>
            <td>{customer.imageAvatar}</td>
            <td>{customer.roleId}</td>

            <td>
                <Button variant="link fs-4" href={`/customers/update?userId=${customer.userId}`}>
                    EDIT
                </Button>
                <Button variant="link fs-4">
                    <Trash color="FIreBrick" />
                </Button>
            </td>
        </tr>
    );
};

export default CustomerRow;
