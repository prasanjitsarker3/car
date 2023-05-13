import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { users, loading } = useContext(AuthContext)
    if (loading) {
        return <div className='flex justify-center'>
            <progress className="progress w-56"></progress>
        </div>
    }
    if (users?.email) {
        return children;
    }
    return <Navigate to='/login' replace={true}></Navigate>;
};

export default PrivateRoute;