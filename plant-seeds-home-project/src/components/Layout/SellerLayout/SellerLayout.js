import SellerHeader from '../../Seller/SellerHeader/SellerHeader';
import SellerSideBar from '../../Seller/SellerSideBar/SellerSideBar';
import './SellerLayout.scss';
function SellerLayout({ children }) {
    return (
        <div className="seller-container">
            <div className="header">
                <SellerHeader />
            </div>
            <div className="main-container">
                <div className="sidebar-container">
                    <SellerSideBar />
                </div>

                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default SellerLayout;
