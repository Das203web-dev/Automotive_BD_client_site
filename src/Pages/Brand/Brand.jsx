import Swal from "sweetalert2";

const Brand = () => {
    const handleBrandForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const brandName = form.brand.value;
        const brandImage = form.image.value;
        const advertisement1 = form.adOne.value;
        const advertisement2 = form.adTwo.value;
        const advertisement3 = form.adThree.value;
        const brandInfo = { brandName, brandImage, advertisement1, advertisement2, advertisement3 }
        fetch("http://localhost:5000/brandPage", {
            method: "post",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(brandInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    Swal.fire({
                        title: 'Login Success!',
                        text: "Continue",
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                }
                form.reset()
            })
    }
    return (
        <div className="mt-10">
            <h1 className="text-3xl font-bold text-center mb-5">Add New Brands Here</h1>
            <form onSubmit={handleBrandForm} className='grid md:grid-cols-2 grid-cols-1 md:w-1/2 w-full mx-auto gap-5'>
                <input className='px-2 py-1 border-2 ' type="text" name='brand' placeholder='Brand_Name' />
                <input className='px-2 py-1 border-2 ' type="text" name='image' placeholder='Brand_Image' />
                <input className='px-2 py-1 border-2 ' type="text" name="adOne" placeholder="Advertisement-1" />
                <input className='px-2 py-1 border-2 ' type="text" name="adTwo" placeholder="Advertisement-2" />
                <input className='px-2 py-1 border-2 ' type="text" name="adThree" placeholder="Advertisement-3" />

                {/* <button className='bg-[red] px-4 py-2 rounded col-span-2 text-white'>Add Brand</button> */}
                <input className='bg-[red] px-4 py-2 rounded col-span-2 text-white' type="submit" value="Add Brand" />
            </form>
        </div>
    );
};

export default Brand;