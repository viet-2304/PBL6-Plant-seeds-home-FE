import classNames from 'classnames/bind';
import { Layout } from 'antd';

import styles from './DefaultLayout.module.scss';
import AppHeader from '../../AppHeader/AppHeader';
import AppFooter from '../../AppFooter/AppFooter';
import Slider from '../../Slider/Slider';
import Features from '../../Features/Features';

const cx = classNames.bind(styles);
const { Header, Content, Footer } = Layout;

function DefaultLayout({ children }) {
    return (
        <div>
            <Layout className={cx('layout')}>
                <Header className={cx('header')}>
                    <AppHeader />
                </Header>
                <Layout className={cx('content-layout')}>
                    <Header className={cx('slider')}>
                        <Slider />
                        <Features />
                    </Header>
                    <Content className={cx('content')}>{children}</Content>
                </Layout>
                <Footer className={cx('footer')}>
                    <AppFooter />
                </Footer>
            </Layout>
        </div>
    );
}

export default DefaultLayout;
