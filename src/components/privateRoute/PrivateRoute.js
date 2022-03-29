import React from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../context/useAuth'

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    const { user } = useAuth();
    return user?.email ? children : <Navigate to="/login" replace state={location.pathname
}/>;
}

export default PrivateRoute