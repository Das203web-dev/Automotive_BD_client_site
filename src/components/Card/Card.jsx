import { Link } from "react-router-dom";

const Card = ({ car }) => {
    // const
    // console.log(car)
    return (
        <Link to={'/brandPage'}>
            <img className="w-full h-48 rounded" src={car.image} alt="" />
            <h1 className="font-bold text-center">{car.brand}</h1>
        </Link>
    );
};

export default Card;