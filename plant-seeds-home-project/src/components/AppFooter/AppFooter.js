import React from 'react';
import classNames from 'classnames/bind';

import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function AppFooter() {
    return <div className={cx('wrapper')}>Footer</div>;
}

export default AppFooter;
