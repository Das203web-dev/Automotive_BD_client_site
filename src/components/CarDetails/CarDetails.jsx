import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CarDetails = () => {
    const detailCar = useLoaderData();
    console.log(detailCar)
    const { image, name, description } = detailCar
    return (
        <div className='md:w-2/4 w-full mx-auto text-center mt-10 space-y-2'>
            <img src={image} alt="" />
            <h1 className=' text-4xl font-bold'>{name}</h1>
            <p>{description}</p>
            <button className='px-4 py-2 rounded text-white bg-[red]'>Add To Cart</button>
        </div>
    );
};

export default CarDetails;