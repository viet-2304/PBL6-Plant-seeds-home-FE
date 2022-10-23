import { NavLink } from 'react-router-dom';

function MenuItem(key, label, to) {
    return {
        key,
        label: <NavLink to={to}>{label}</NavLink>,
    };
}

export default MenuItem;
