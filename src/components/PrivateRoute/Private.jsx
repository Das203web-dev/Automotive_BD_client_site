import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ContextProvider } from '../Provider/Provider';

const Private = ({ children }) => {
    const { user, loading } = useContext(ContextProvider);
    const location = useLocation();
    if (loading) {
        return (
            <div className='flex justify-center items-center'>
                <span className="loading loading-bars loading-lg"></span>
            </div>
        )
    }
    if (user) {
        return children;
    }
    return <Navigate state={location.pathname} to={'/login'}></Navigate>
};

export default Private;