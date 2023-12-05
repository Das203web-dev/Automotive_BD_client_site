import { useLoaderData } from "react-router-dom";
import Banner from "../../components/Header/Banner/Banner";
import Card from "../../components/Card/Card";
import Marquee from "react-fast-marquee";
import './Home.css'

const Home = () => {
    const carBrands = useLoaderData();

    // console.log(carBrands)
    return (

        <div>
            <Banner></Banner>
            {/* <Brands></Brands> */}
            <h1 className="text-3xl  my-24 text-center font-bold">Our Brands</h1>
            <section className="grid md:grid-cols-3 grid-cols-1 gap-5 lg:mx-52  mx-5">
                {
                    carBrands.map(car => <Card key={car._id} car={car}></Card>)
                }
            </section>

            <div className="my-24 mx-5">
                <h1 className="mb-10 text-3xl font-bold text-center">Our Partners</h1>
                <Marquee>
                    <div className="flex gap-24 p-5">
                        <img className="w-52 p-2 shadow-lg  shadow-black h-36 ml-24" src="https://i.ibb.co/nm62XxG/Toyota-cars-1.jpg" alt="" />
                        <img className="w-52 p-2 shadow-lg  shadow-black h-36" src="https://i.ibb.co/gFXJ4zz/Ford-Logo.png" alt="" />
                        <img className="w-52 p-2 shadow-lg  shadow-black h-36" src="https://i.ibb.co/pf1GcgC/BMW-logo-1.jpg" alt="" />
                        <img className="w-52 p-2 shadow-lg  shadow-black h-36" src="https://i.ibb.co/V2nTpsv/cc3a028225e9e751e402be2ba73fe713.jpg" alt="" />
                        <img className="w-52 p-2 shadow-lg  shadow-black h-36" src="https://i.ibb.co/9cvN0hZ/Tesla-Logo.jpg" alt="" />
                        <img className="w-52 p-2 shadow-lg  shadow-black h-36" src="https://i.ibb.co/b2mD2Sp/9d178bb24be4566a730fffc2cfd789db.jpg" alt="" />
                    </div>
                </Marquee>
            </div>

            <section className="glassmorphism-contact  lg:mx-52 mx-5">
                <h2 className="text-3xl mb-10 font-bold">Contact Us</h2>
                <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
                    <div className="w-full h-fit">
                        <img className="w-full h-full" src="https://i.ibb.co/f2dH6qT/118604817-116721094-mustang.jpg" alt="" />
                    </div>
                    <form className="w-full">
                        <div className="form-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" id="name" name="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" id="email" name="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" name="message" rows="4" required></textarea>
                        </div>
                        <button className="w-full " type="submit">Send</button>
                    </form>
                </div>
            </section>


        </div>
    );
};

export default Home;