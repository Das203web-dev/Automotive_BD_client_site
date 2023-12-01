import React from 'react';

const AddProduct = () => {
    return (
        <div className='bg-slate-200 p-4'>
            <h1 className='text-center text-3xl my-5'>Add Product Details Here</h1>
            <form className='grid grid-cols-2 gap-5 w-1/2 mx-auto'>
                <div className='flex flex-col'>
                    <label htmlFor="image">Car Image</label>
                    <input className='border-2 px-2 py-1' type="text" name="image" id="image" placeholder='Image' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Car Name</label>
                    <input className='border-2 px-2 py-1' type="text" name="name" id="name" placeholder='Car Name' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="brandName">Brand Name</label>
                    <input className='border-2 px-2 py-1' type="text" name="brand" id="brandName" placeholder='Brand Name' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="carType">Car Type</label>
                    <select name="carType" id="carType">
                        <option value="used">Used</option>
                        <option value="new">New</option>
                    </select>
                    {/* <input className='border-2 px-2 py-1' type="text" name="type" id="carType" placeholder='Car Type' /> */}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="price">Price</label>
                    <input className='border-2 px-2 py-1' type="text" name="price" id="price" placeholder='Price' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="description">Description</label>
                    <input className='border-2 px-2 py-1' type="text" name="description" id="description" placeholder='Description' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="rating">Rating</label>
                    <input className='border-2 px-2 py-1' type="text" name="rating" id="description" placeholder='Rating' />
                </div>
                <input className='border-2 col-span-2 bg-black text-white text-lg px-2 py-1' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProduct;