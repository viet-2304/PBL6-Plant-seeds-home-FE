import React from 'react';
import classNames from 'classnames/bind';
import { Form } from 'react-bootstrap';

import styles from './Footer.module.scss';
import Button from '../Button/Button';

const cx = classNames.bind(styles);

function AppFooter() {
    return (
        <div className={cx('wrapper')}>
            <Form>
                <Form.Group className={cx('mb-3')} controlId="formBasicEmail">
                    <Form.Label className={cx('form-label')}>Enter your email here *</Form.Label>
                    <Form.Control
                        className={cx('form-control')}
                        type="email"
                        placeholder="Enter email"
                    />
                    <Button primary large>
                        SUBSCRIBE
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default AppFooter;
