import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Card from "../../components/Card/Card";
import Brand from "../Brand/Brand";
import Brands from "../../components/Brands/Brands";

const Home = () => {
    const carBrands = useLoaderData();

    // console.log(carBrands)
    return (

        <div>
            <Banner></Banner>
            {/* <Brands></Brands> */}
            <div className="grid lg:grid-cols-3 grid-cols-2 gap-5 lg:mx-20 my-24  mx-5">
                {
                    carBrands.map(car => <Card key={car._id} car={car}></Card>)
                }
            </div>

        </div>
    );
};

export default Home;