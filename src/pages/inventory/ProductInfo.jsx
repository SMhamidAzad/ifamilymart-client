import React, { useEffect, useState } from "react"
import fetcher from "../../api";
import { MdDelete } from 'react-icons/md';

function ProductInfo() {
    const [products, setProducts] = useState([])
    useEffect(() => {
        (async () => {
            const result = await fetcher.get("api/productInfo/all");
            setProducts(result?.data?.result)
        })();
    }, []);
    const handleDeleteProduct = (id) => {
        (async () => {
            const result = await fetcher.delete(`api/productInfo/${id}`)
            window.alert("Do you want to delete this product?")
            window.location.reload()
        })()
    }
    console.log(products)
    return (
        <div>
            <h2 className="mb-10 text-2xl px-9 py-4 bg-white font-serif">Add Product</h2>

            <div className="mx-10 px-5 py-5 my-10 bg-white">
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-lg">
                                <th>SL. No</th>
                                <th>Brand Name</th>
                                <th>Group</th>
                                <th>Unit</th>
                                <th>Product Code</th>
                                <th>Quantity</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products?.map((product, index) =>
                                <tr key={index}>
                                    <th>{index + 1}</th>
                                    <td>{product?.brandName}</td>
                                    <td>{product?.group}</td>
                                    <td>{product?.unit}</td>
                                    <td>{product?.productCode}</td>
                                    <td>{product?.quantity}</td>
                                    <td>{product?.price}</td>
                                    <td>
                                        <MdDelete onClick={() => handleDeleteProduct(product?._id)} className='cursor-pointer text-red-400 text-2xl ' />
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default ProductInfo