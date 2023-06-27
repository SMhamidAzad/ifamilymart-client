import React from "react"
import fetcher from "../api";
import { useForm } from "react-hook-form";

function ModalBrand() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
    const result = await fetcher.post("/api/brand", data)
    console.log(result)
    // window("Brand added successfully")
  }
  return (
    <div className=''>
      <input type="checkbox" id="my_modal_1" className="modal-toggle" />


      <div className="modal ">
        <div className="modal-box  text-white relative mt-10">

          <label htmlFor="my_modal_1" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="font-bold text-black text-lg text-center">Add Brand Information</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mx-12 ">
              <label class="label">
                <span class="label-text font-bold">Brand Name </span>
              </label>
              <input  {...register("name")} type="text" placeholder="Brand Name" class="rounded-none w-full input input-bordered text-gray-600" />
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

export default ModalBrand
