import React from 'react';
import { Navigate } from 'react-router-dom';

const Private = ({ children }) => {
    if (children) {
        children
    }
    return <Navigate to={'/login'}></Navigate>
};

export default Private;