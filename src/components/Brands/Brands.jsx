import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Brands = () => {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        fetch("http://localhost:5000/brandPage")
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])

    return (
        <div>
            {
                brands.map(brand => <Card key={brand._id} brand={brand}></Card>)
            }
        </div>
    );
};

export default Brands;