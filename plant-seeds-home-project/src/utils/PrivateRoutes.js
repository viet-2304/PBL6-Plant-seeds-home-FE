import { useState } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes({ children, ...rest }) {
    const [currentToken, setCurrentToken] = useState(localStorage.getItem('token'));
    return currentToken ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;
