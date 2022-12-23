import AdminSidebar from '../../Admin/Sidebar/Sidebar';
import './AdminLayout.scss';
function SellerLayout({ children }) {
    return (
        <div className="admin-container">
            <div className="main-container">
                <div className="sidebar-container">
                    <AdminSidebar />
                </div>

                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default SellerLayout;
