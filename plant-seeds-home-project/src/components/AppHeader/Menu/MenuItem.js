import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

import styles from './MenuItem.module.scss';

const cx = classNames.bind(styles);

function MenuItem(key, label, to) {
    return {
        key,
        label: (
            <NavLink to={to} className={cx('link')}>
                {label}
            </NavLink>
        ),
    };
}

export default MenuItem;
