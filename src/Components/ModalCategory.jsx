import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import fetcher from "../api";

function ModalCategory() {
  const [allproduct, setAllProduct] = useState([])
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
    const result = await fetcher.post("/api/category", data)
    window.alert("Category added successfully")
  }
  useEffect(() => {
    (async () => {
      const result = await fetcher.get("api/product/all")
      setAllProduct(result?.data?.result)
    })();
  }, []);
  return (
    <div className=''>
      <input type="checkbox" id="my_modal_3" className="modal-toggle" />


      <div className="modal ">
        <div className="modal-box  text-white relative mt-10">

          <label htmlFor="my_modal_3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-black text-lg text-center">Add Category Information</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mx-12 ">
              <label class="label">
                <span class="label-text font-bold">Product Group </span>
              </label>
              <select {...register("group")} placeholder="Select a group" className="select rounded-none w-full input input-bordered text-gray-600">
                {
                  allproduct?.map((product, index) => <option key={index}>{product?.groupName}</option>)
                }
              </select>

              {/* <input  {...register("group")} type="text" placeholder="Product Group" class="rounded-none w-full input input-bordered text-gray-600" /> */}
            </div>
            <div className="form-control mx-12 ">
              <label class="label">
                <span class="label-text font-bold">Category </span>
              </label>
              <input  {...register("categoryName")} type="text" placeholder="Category" class="rounded-none w-full input input-bordered text-gray-600" />
            </div>
            <div className="modal-action">
              {/* if there is a button in form, it will close the modal */}
              <button type='submit' className="btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ModalCategory
