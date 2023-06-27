import React, { useEffect, useState } from "react"
import ModalBrand from "../../Components/ModalBrand"
import ModalProduct from "../../Components/MoadlProduct"
import ModalCategory from "../../Components/ModalCategory"
import fetcher from "../../api"
import { MdDelete } from 'react-icons/md';

function BrandAndGroup() {
    const [allbrand, setAllBrand] = useState([])
    const [allproduct, setAllProduct] = useState([])
    const [allcategory, setAllCategory] = useState([])
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
    useEffect(() => {
        (async () => {
            const result = await fetcher.get("api/category/all")
            setAllCategory(result?.data?.result)
        })();
    }, []);
    const handleDeleteBrand = (id) => {
        (async () => {
            const result = await fetcher.delete(`api/brand/${id}`)
            window.alert("Do you want to delete this brand?")
            window.location.reload()
        })()
    }
    const handleDeleteProduct = (id) => {
        (async () => {
            const result = await fetcher.delete(`api/product/${id}`)
            window.alert("Do you want to delete this product group?")
            window.location.reload()
        })()
    }
    const handleDeleteCategory = (id) => {
        (async () => {
            const result = await fetcher.delete(`api/category/${id}`)
            window.alert("Do you want to delete this category?")
            window.location.reload()
        })()
    }

    return (
        <div className="">
            {/* Open the modal using ID.showModal() method */}
            <ModalBrand />
            <ModalProduct />
            <ModalCategory />
            <h2 className="text-2xl px-9 py-4 bg-white font-serif">Brand Name, Product Group & Category</h2>
            <div>
                <div className="grid grid-cols-3 mx-20">
                    <div className="overflow-x-auto h-2/4 px-4 mx-6 mt-10 bg-white">
                        <label
                            htmlFor="my_modal_1"
                            className="btn btn-outline rounded-none  btn-info my-10 ml-5"
                            onClick={() => window.my_modal_1.showModal()}
                        >Add Brand</label>
                        <table className="table table-pin-rows">
                            <thead className="">
                                <tr className="text-lg">
                                    <th>Brand Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allbrand?.map((brand, index) => <tr key={index}>
                                    <td>{brand?.name}</td>
                                    <td>
                                        <MdDelete onClick={() => handleDeleteBrand(brand?._id)} className='cursor-pointer text-red-400 text-2xl ' />
                                    </td>
                                </tr>)}

                            </tbody>
                        </table>
                    </div>
                    <div className="overflow-x-auto h-2/4 px-4 mx-6 mt-10 bg-white">
                        <label
                            htmlFor="my_modal_2"
                            className="btn btn-outline rounded-none  btn-info my-10 ml-5"
                            onClick={() => window.my_modal_2.showModal()}
                        >Add Product Group</label>
                        <table className="table table-pin-rows">
                            <thead className="">
                                <tr className="text-lg">
                                    <th>Product Group</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allproduct?.map((product, index) => <tr key={index}>
                                    <td>{product?.groupName}</td>
                                    <td>
                                        <td>
                                            <MdDelete onClick={() => handleDeleteProduct(product?._id)} className='cursor-pointer text-red-400 text-2xl ' />
                                        </td>
                                    </td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                    <div className="overflow-x-auto h-2/4 px-4 mx-6 mt-10 bg-white">
                        <label
                            htmlFor="my_modal_3"
                            className="btn btn-outline rounded-none  btn-info my-10 ml-5"
                            onClick={() => window.my_modal_3.showModal()}
                        >Add Category</label>
                        <table className="table table-pin-rows">
                            <thead className="">
                                <tr className="text-lg">
                                    <th>Product Group</th>
                                    <th>Category</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {allcategory?.map((cateroy, index) => <tr key={index}>
                                    <td>{cateroy?.group}</td>
                                    <td>{cateroy?.categoryName}</td>
                                    <td>
                                        <td>
                                            <MdDelete onClick={() => handleDeleteCategory(cateroy?._id)} className='cursor-pointer text-red-400 text-2xl ' />
                                        </td>
                                    </td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrandAndGroup