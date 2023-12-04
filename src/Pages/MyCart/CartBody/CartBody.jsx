import React from 'react';
import { RiDeleteBin6Fill } from "react-icons/ri";


const CartBody = ({ cart, handleDelete }) => {

    const { _id, image, price, name } = cart;
    // const carID = { _id
    console.log(_id)
    return (
        <div className='flex md:flex-row flex-col text-center justify-between items-center w-full gap-5 border-2  p-2 hover:shadow-sm hover:shadow-slate-200'>
            <img className='md:w-40 w-full h-40' src={image} alt="" />
            <div className='my-auto w-full'>
                <h2 className='lg:text-2xl text-xl'>Price : $ <span className='font-extrabold'>{price}</span></h2>
                <h2 className='font-bold lg:text-lg text-base'>{name}</h2>
            </div>
            <button onClick={() => handleDelete(_id)} className='p-2 bg-[red] px-2 py-2 rounded-full'><RiDeleteBin6Fill className='text-2xl text-white'></RiDeleteBin6Fill></button>
        </div>
    );
};

export default CartBody;