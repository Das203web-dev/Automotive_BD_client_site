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
                console.log(data)
                form.reset()
            })
    }
    return (
        <div>
            <form onSubmit={handleBrandForm} className='grid grid-cols-2 w-1/2 mx-auto gap-5'>
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