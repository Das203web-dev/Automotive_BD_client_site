import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CarCard from './CarCard/CarCard';

import AddSlider from './AddSlider/AddSlider';

const BrandPage = () => {
    const { brand } = useParams();
    // console.log(brand)
    const [cars, setCars] = useState([]);
    const [advertise, setAdvertise] = useState([])
    // console.log(cars)
    // const { brand } = useParams()
    // const ans = cars.filter(car => car.brandName === brand);
    // console.log(ans)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const carsData = await fetch(`https://automotivebdclientsite.web.app/addProduct`);
                const carsResponse = await carsData.json();
                setCars(carsResponse);
            } catch (error) {
                // Handle fetch error
                console.error("Error fetching car data:", error);
            }
        };

        fetchData();
    }, [brand]);
    useEffect(() => {
        fetch("https://automotivebdclientsite.web.app/brandPage")
            .then(res => res.json())
            .then(data => setAdvertise(data))
    }, [brand])
    // console.log(cars)
    const filterdCars = cars.filter(car => car.brand === brand);
    const filterAdvertise = advertise.filter(ad => ad.brandName === brand);
    // console.log(filterdCars);
    return (
        <div>
            <div className='mb-24'>
                {

                    filterAdvertise.map(ad => <AddSlider key={ad._id} sliderAdd={ad}></AddSlider>)
                }
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:text-left text-center gap-5 md:gap-10 lg:mx-20 my-24  mx-5'>
                {
                    filterdCars?.length <= 0 ? (<div className='mt-10 col-span-full'><h1 className='text-center text-3xl font-semibold'>Product is Not available right now</h1></div>) :
                        filterdCars.map(car => <CarCard key={car._id} car={car}></CarCard>)
                }
            </div>
        </div>
    );
};

export default BrandPage;