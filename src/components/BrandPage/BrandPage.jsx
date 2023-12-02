import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CarCard from './CarCard/CarCard';

import AddSlider from './AddSlider/AddSlider';

const BrandPage = () => {
    // const carsBrand = useLoaderData();
    const { brand } = useParams();
    const [cars, setCars] = useState([]);
    const [advertise, setAdvertise] = useState([])
    // console.log(cars)
    // const { brand } = useParams()
    // const ans = cars.filter(car => car.brandName === brand);
    // console.log(ans)
    useEffect(() => {
        const data = async () => {
            const carsDta = await fetch(`http://localhost:5000/addProduct`)
            const response = await carsDta.json();
            console.log(response)
            setCars(response)
        }
        return data
    }, [])
    useEffect(() => {
        fetch("http://localhost:5000/brandPage")
            .then(res => res.json())
            .then(data => setAdvertise(data))
    }, [])
    // console.log(cars)
    // console.log(brand)
    const filterdCars = cars.filter(car => car.brand === brand);
    // if (!filterdCars) {
    //     console.log("no car")
    // }
    const filterAdvertise = advertise.filter(ad => ad.brandName === brand)
    // console.log(filterAdvertise)
    return (
        <div>
            <div className='mb-24'>
                {
                    filterAdvertise.map(ad => <AddSlider key={ad._id} sliderAdd={ad}></AddSlider>)
                }
            </div>
            <div>
                {
                    filterdCars.map(car => <CarCard key={car._id} car={car}></CarCard>)
                }
            </div>
        </div>
    );
};

export default BrandPage;