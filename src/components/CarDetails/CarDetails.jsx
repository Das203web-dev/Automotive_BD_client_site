import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const CarDetails = () => {
    const detailOfCar = useLoaderData();
    console.log(detailOfCar)
    const [cartProduct, setCartProduct] = useState([]);
    // console.log(detailOfCar)
    useEffect(() => {
        fetch("https://automotivebdclientsite.web.app/myCart")
            .then(res => res.json())
            .then(data => setCartProduct(data))
    }, [])
    // console.log(cartProduct)
    const { _id, image, name, description } = detailOfCar;
    const handleAddToCart = (id) => {
        const isProduct = cartProduct.find(cProduct => cProduct._id === id)
        if (isProduct) {
            Swal.fire({
                title: 'Error!',
                text: 'Data is already added',
                icon: 'error',
                confirmButtonText: 'Cool'
            })
        }
        else {
            fetch(`https://automotivebdclientsite.web.app/myCart`, {
                method: "POST",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(detailOfCar)
            })
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Do you want to continue',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                    else {
                        Swal.fire({
                            title: 'Error!',
                            text: 'Data is already added',
                            icon: 'error',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
        }

    }
    return (
        <div className='md:w-2/4 w-full mx-auto text-center mt-10 space-y-2'>
            <img src={image} alt="" />
            <h1 className=' text-4xl font-bold'>{name}</h1>
            <p className='py-2'>{description}</p>
            <Link><button onClick={() => handleAddToCart(_id)} className='px-4 py-2 rounded text-white bg-[red]'>Add To Cart</button></Link>
        </div>
    );
};

export default CarDetails;