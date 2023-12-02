import Swal from "sweetalert2";

const AddProduct = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const image = form.image.value;
        const brand = form.brand.value;
        const carType = form.carType.value;
        const price = form.price.value;
        const description = form.carDescription.value;
        const rating = form.rating.value;

        // console.log(name, image, brand, carType, price, description, rating);
        const carDetail = { name, image, brand, carType, price, description, rating }
        fetch("http://localhost:5000/addProduct", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(carDetail)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    Swal.fire({
                        title: 'Car Added Successfully!',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    form.reset()
                }
            })
    }
    return (
        <div className='bg-slate-200 p-4'>
            <h1 className='text-center text-3xl my-5'>Add Product Details Here</h1>
            <form onSubmit={handleAddProduct} className='grid grid-cols-1 md:grid-cols-2 gap-5 md:w-1/2 mx-auto w-full'>
                <div className='flex flex-col w-full'>
                    <label htmlFor="image">Car Image</label>
                    <input className='border-2 px-2 py-1 w-full' type="text" name="image" id="image" placeholder='Image' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="name">Car Name</label>
                    <input className='border-2 px-2 py-1' type="text" name="name" id="name" placeholder='Car Name' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="brandName">Brand Name</label>
                    <input className='border-2 px-2 py-1' type="text" name="brand" id="brandName" placeholder='Brand Name' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="carType">Car Type</label>
                    <select className="py-1 px-2 border-2" name="carType" id="carType">
                        <option value="used">Used</option>
                        <option value="new">New</option>
                    </select>
                    {/* <input className='border-2 px-2 py-1' type="text" name="type" id="carType" placeholder='Car Type' /> */}
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="price">Price</label>
                    <input className='border-2 px-2 py-1' type="text" name="price" id="price" placeholder='$ Price' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="description">Description</label>
                    <input className='border-2 px-2 py-1' type="text" name="carDescription" id="description" placeholder='Description' />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="rating">Rating</label>
                    <input className='border-2 px-2 py-1' type="text" name="rating" id="description" placeholder='Rating' />
                </div>
                <input className='border-2 md:col-span-2 bg-black text-white text-lg px-2 py-1' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AddProduct;