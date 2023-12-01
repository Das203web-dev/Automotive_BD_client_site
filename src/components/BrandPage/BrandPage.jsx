import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BrandPage = () => {
    const bran = useLoaderData();
    // console.log(bran)
    return (
        <div>
            <h1>Brand page</h1>
        </div>
    );
};

export default BrandPage;