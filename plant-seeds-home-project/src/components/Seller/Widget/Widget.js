import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faCartShopping, faChevronUp, faDollar, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container } from 'react-bootstrap';

import './Widget.scss';

const Widget = ({ type }) => {
    let data;

    //temporary
    const amount = 100;
    const diff = 20;

    switch (type) {
        case 'customer':
            data = {
                title: 'CUSTOMERS',
                isMoney: false,
                link: 'See all customers',
                icon: <FontAwesomeIcon icon={faUser} className="icon" />,
            };
            break;
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: <FontAwesomeIcon icon={faCartShopping} className="icon" />,
            };
            break;
        case 'earning':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: 'View net earnings',
                icon: <FontAwesomeIcon icon={faDollar} className="icon" />,
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See details',
                icon: <FontAwesomeIcon icon={faWallet} className="icon" />,
            };
            break;
        default:
            break;
    }

    return (
        <Container fluid className="widget">
            <div className="px-5">
                <div className="left">
                    <span className="title">{data.title}</span>
                    <span className="counter">
                        {data.isMoney && '$'} {amount}
                    </span>
                    <span className="link">{data.link}</span>
                </div>
                <div className="right">
                    <div className="percentage positive">
                        <FontAwesomeIcon icon={faChevronUp} className="icon" />
                        {diff} %
                    </div>
                    {data.icon}
                </div>
            </div>
        </Container>
    );
};

export default Widget;
