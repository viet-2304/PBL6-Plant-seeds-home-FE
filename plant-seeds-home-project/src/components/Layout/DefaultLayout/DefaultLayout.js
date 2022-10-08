import classNames from 'classnames/bind';
import { Layout } from 'antd';

import styles from './DefaultLayout.module.scss';
import AppHeader from '../../AppHeader/AppHeader';
import AppFooter from '../../AppFooter/AppFooter';

const cx = classNames.bind(styles);
const { Header, Content, Sider, Footer } = Layout;

function DefaultLayout({ children }) {
    return (
        <Layout className={cx('layout')}>
            <Header className={cx('header')}>
                <AppHeader />
            </Header>
            <Layout>
                <Header className={cx('layout')}>Silder here</Header>
                <Layout>
                    <Sider className={cx('layout')}>Sider</Sider>
                    <Content className={cx('content')}>{children}</Content>
                </Layout>
            </Layout>
            <Footer className={cx('footer')}>
                <AppFooter />
            </Footer>
        </Layout>
    );
}

export default DefaultLayout;
