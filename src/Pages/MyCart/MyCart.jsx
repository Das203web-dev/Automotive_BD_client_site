import { useLoaderData, useParams } from "react-router-dom";
import CartBody from "./CartBody/CartBody";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const MyCart = () => {
    // const cartInfo = useLoaderData();
    const [cartInfo, setCartInfo] = useState([])
    useEffect(() => {
        fetch("https://automitivebd.onrender.com/myCart")
            .then(res => res.json())
            .then(data => setCartInfo(data))
    }, [])
    const { _id } = useParams();
    console.log(_id)
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
                fetch(`https://automitivebd.onrender.com/myCart/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
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