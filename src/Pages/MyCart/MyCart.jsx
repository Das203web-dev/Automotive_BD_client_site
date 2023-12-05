import CartBody from "./CartBody/CartBody";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const MyCart = () => {
    const [cartInfo, setCartInfo] = useState([]);
    console.log(cartInfo)
    useEffect(() => {
        fetch("http://localhost:5000/myCart")
            .then(res => res.json())
            .then(data => setCartInfo(data))
    }, [])
    const handleDelete = (id) => {
        console.log('get id', id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/myCart/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {

                            const remaining = cartInfo.filter(product => product._id !== id);
                            console.log(remaining)
                            setCartInfo(remaining)
                        }
                        else {
                            Swal.fire({
                                title: "cant Delete!",
                                text: "Error occured.",
                                icon: "error"
                            });
                        }
                    })

            }
        });

    }
    return (
        <div className="lg:mx-20 mx-5">
            <h1 className="text-2xl font-bold text-center">Cart page</h1>
            <div className="grid md:grid-cols-2 w-full grid-cols-1 gap-5">
                {cartInfo.length <= 0 ? <h1 className="text-center col-span-full">Nothing added to cart</h1> :
                    cartInfo.map(data => <CartBody handleDelete={handleDelete} key={data._id} cart={data}></CartBody>)
                }
            </div>
        </div>
    );
};

export default MyCart;