import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Card from "../../components/Card/Card";

const Home = () => {
    const carBrands = useLoaderData();

    // console.log(carBrands)
    return (

        <div>
            <Banner></Banner>
            {/* <Brands></Brands> */}
            <h1 className="text-3xl  my-24 text-center font-bold">Our Brands</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5 lg:mx-20  mx-5">
                {
                    carBrands.map(car => <Card key={car._id} car={car}></Card>)
                }
            </div>

        </div>
    );
};

export default Home;