import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { users, loading } = useContext(AuthContext);
    const location=useLocation();
    if (loading) {
        return <div className='flex justify-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
    if (users?.email) {
        return children;
    }
    return <Navigate to='/login' state={{from: location}} replace={true}></Navigate>;
};

export default PrivateRoute;