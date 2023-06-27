import React, { useEffect, useRef, useState } from "react"
import fetcher from "../../api";
import { useForm } from "react-hook-form";
function AddProduct() {
    const [allbrand, setAllBrand] = useState([])
    const [allproduct, setAllProduct] = useState([])
    useEffect(() => {
        (async () => {
            const result = await fetcher.get("api/brand/all")
            setAllBrand(result?.data?.result)
        })();
    }, []);
    useEffect(() => {
        (async () => {
            const result = await fetcher.get("api/product/all")
            setAllProduct(result?.data?.result)
        })();
    }, []);


    const { register, handleSubmit, reset } = useForm();
    const onSubmit = async (data) => {
        const result = await fetcher.post(`/api/productInfo`, data)
        console.log(result)
        reset()
        // window("Brand added successfully")
    }

    const [selectedImage, setSelectedImage] = useState(null);
    const fileInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
    };

    const handleImageClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div>
            <h2 className="mb-10 text-2xl px-9 py-4 bg-white font-serif">Add Product</h2>
            <div class="bg-white p-10 rounded-none shadow md:w-3/4 mx-auto lg:w-1/2">
                <div className="flex">
                    <div className="w-4/6">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div class="mb-5">
                                <label for="brandName" class="block mb-2 font-bold text-gray-600">Brand Name</label>
                                <select {...register("brandName")} placeholder="Select a brand" className="select border-gray-300 shadow p-3 w-full rounded">
                                    {
                                        allbrand?.map((brand, index) => <option key={index}>{brand?.name}</option>)
                                    }
                                </select>
                            </div>

                            <div class="mb-5">
                                <label for="group" class="block mb-2 font-bold text-gray-600">Product Group</label>
                                <select {...register("group")} placeholder="Select a product" className="select border-gray-300 shadow p-3 w-full rounded">
                                    {
                                        allproduct?.map((product, index) => <option key={index}>{product?.groupName}</option>)
                                    }
                                </select>
                            </div>
                            <div class="mb-5">
                                <label for="unit" class="block mb-2 font-bold text-gray-600">Unit</label>
                                <input  {...register("unit")} type="text" id="unit" name="unit" placeholder="" class="border border-gray-300 shadow p-3 w-full rounded " />
                            </div>
                            <div class="mb-5">
                                <label for="quantity" class="block mb-2 font-bold text-gray-600">Product Quantity</label>
                                <input  {...register("quantity")} type="text" id="quantity" name="quantity" placeholder="" class="border border-gray-300 shadow p-3 w-full rounded" />
                            </div>
                            <div class="mb-5">
                                <label for="price" class="block mb-2 font-bold text-gray-600">Purchase price</label>
                                <input  {...register("price")} type="text" id="price" name="price" placeholder="" class="border border-gray-300 shadow p-3 w-full rounded" />
                            </div>

                            <button type="submit" class="block w-full bg-blue-500 text-white font-bold p-4 rounded-lg">Submit</button>
                        </form>
                    </div>
                    <div className="w-2/6">
                        <div>

                            <div
                                className="relative my-8 ml-5 border border-gray-300 w-48 h-40 rounded-md overflow-hidden cursor-pointer"
                                onClick={handleImageClick}
                            >
                                {selectedImage ? (
                                    <img
                                        src={selectedImage}
                                        alt="Selected"
                                        className="w-full h-full object-cover"
                                    />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <span className="text-gray-400">Click to upload image-1</span>
                                    </div>
                                )}
                            </div>
                            <input
                                id="file-input"
                                className="hidden"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                ref={fileInputRef}
                            />

                            <label
                                htmlFor="file-input"
                                className="ml-5  bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded cursor-pointer"
                            >
                                Choose File
                            </label>
                            {/* <input
                            className="ml-5 mt-5"
                                type="file"
                                accept="image/*"
                                onChange={handleImageChange}
                                ref={fileInputRef}
                                // style={{ d}
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AddProduct