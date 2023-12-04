import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ car }) => {
    // const [maindata, setMaindata] = useState([])
    // useEffect(() => {
    //     fetch("http://localhost:5000/addProduct")
    //         .then(res => res.json())
    //         .then(data => setMaindata(data))
    // }, [])
    // console.log(maindata)
    // const khujo = maindata.filter(data => data.brand !== car.brandName)
    // console.log(khujo)
    // const handleClick = () => {

    // }
    return (
        // <div>
        //     <h1>{brand.brandName}</h1>
        //     <img src={brand.brandImage} alt="" />

        // </div>
        <Link to={`/brandPage/${car.brandName}`}>
            <div>
                <img className="w-full h-48 rounded" src={car.brandImage} alt="" />
                <h1 className="font-bold text-center">{car.brandName}</h1>
            </div>
        </Link >
    );
};

export default Card;