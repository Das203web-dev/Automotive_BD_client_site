import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Card from "../../components/Card/Card";

const Home = () => {
    const cars = useLoaderData();

    // console.log(cars)
    return (

        <div>
            <Banner></Banner>
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 lg:mx-20 my-24  mx-5">
                {
                    cars.map(car => <Card key={car._id} car={car}></Card>)
                }
            </div>

        </div>
    );
};

export default Home;