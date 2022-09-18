import classNames from 'classnames/bind';
import { Layout } from 'antd';

import styles from './DefaultLayout.module.scss';
import AppHeader from '../../AppHeader';
import AppFooter from '../../AppFooter';

const cx = classNames.bind(styles);
const { Header, Content, Footer } = Layout;

function DefaultLayout({ children }) {
    return (
        <Layout>
            <Header className="header">
                <AppHeader />
            </Header>
            <Content className={cx('content')}>{children}</Content>
            <Footer>
                <AppFooter />
            </Footer>
        </Layout>
    );
}

export default DefaultLayout;
