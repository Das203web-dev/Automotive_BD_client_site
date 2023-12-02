import React from 'react';
import { Link } from 'react-router-dom';

const CarCard = ({ car }) => {
    console.log(car)
    const { _id, image, name, brand, carType, price, rating } = car
    return (
        <div>

            <img src={image} alt="" />
            <div className='space-y-2 my-5'>
                <h1 className='text-3xl font-semibold'>{name}</h1>
                <h2 className='text-2xl'>Brand : <span className=' font-extrabold'>{brand}</span> </h2>
                <p className='text-xl'>Type : <span className='uppercase'>{carType}</span></p>
                <h3 className='text-xl'>$ <span className='text-2xl text-[red] font-bold'>{price}</span></h3>
                <p className='font-bold text-xl'>{rating}</p>
            </div>
            <Link to={`/carDetails/${_id}`}><button className='px-4 py-2 bg-[red] text-white rounded'>Details</button></Link>

        </div>
    );
};

export default CarCard;