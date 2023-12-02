import React from 'react';

const CarCard = ({ car }) => {
    return (
        <div>
            {
                car.image ? <img src={car.image} alt="" /> : <h1>Out of stock</h1>
            }
        </div>
    );
};

export default CarCard;