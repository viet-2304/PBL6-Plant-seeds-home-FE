import { faUser } from '@fortawesome/free-regular-svg-icons';
import {
    faCartShopping,
    faChevronUp,
    faDollar,
    faSeedling,
    faWallet,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
                icon: (
                    <FontAwesomeIcon
                        icon={faUser}
                        className="icon"
                        style={{
                            color: 'crimson',
                            backgroundColor: 'rgba(255, 0, 0, 0.2)',
                        }}
                    />
                ),
            };
            break;
        case 'order':
            data = {
                title: 'ORDERS',
                isMoney: false,
                link: 'View all orders',
                icon: (
                    <FontAwesomeIcon
                        icon={faCartShopping}
                        className="icon"
                        style={{
                            backgroundColor: 'rgba(218, 165, 32, 0.2)',
                            color: 'goldenrod',
                        }}
                    />
                ),
            };
            break;
        case 'earning':
            data = {
                title: 'EARNINGS',
                isMoney: true,
                link: 'View net earnings',
                icon: (
                    <FontAwesomeIcon
                        icon={faDollar}
                        className="icon"
                        style={{
                            backgroundColor: 'rgba(0, 43, 128, 0.2)',
                            color: 'blue',
                        }}
                    />
                ),
            };
            break;
        case 'balance':
            data = {
                title: 'BALANCE',
                isMoney: true,
                link: 'See details',
                icon: (
                    <FontAwesomeIcon
                        icon={faWallet}
                        className="icon"
                        style={{
                            backgroundColor: 'rgba(128, 0, 128, 0.2)',
                            color: 'purple',
                        }}
                    />
                ),
            };
            break;
        case 'product':
            data = {
                title: 'PRODUCTS',
                isMoney: true,
                link: 'See all products',
                icon: (
                    <FontAwesomeIcon
                        icon={faSeedling}
                        className="icon"
                        style={{ backgroundColor: 'rgba(0, 128, 0, 0.2)', color: 'green' }}
                    />
                ),
            };
            break;
        default:
            break;
    }

    return (
        <div className="widget">
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
    );
};

export default Widget;
