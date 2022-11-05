import classNames from 'classnames/bind';
import { Layout } from 'antd';

import styles from '../DefaultLayout/DefaultLayout.module.scss';
import AppHeader from '../../AppHeader/AppHeader';
import AppFooter from '../../AppFooter/AppFooter';

const cx = classNames.bind(styles);
const { Header, Content, Footer } = Layout;

function AccountLayout({ children }) {
    return (
        <div>
            <Layout className={cx('layout')}>
                <Header className={cx('header')}>
                    <AppHeader />
                </Header>
                <Content className={cx('content')}>{children}</Content>
                <Footer className={cx('footer')}>
                    <AppFooter />
                </Footer>
            </Layout>
        </div>
    );
}

export default AccountLayout;
