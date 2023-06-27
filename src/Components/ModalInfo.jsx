import React from "react"
import { useForm } from "react-hook-form";
import fetcher from "../api";

function ModalInfo() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data)
    const result = await fetcher.post("/api/modal", data)
    window.alert("Modal added successfully")
  }
  return (
    <div className=''>
      <input type="checkbox" id="my_modal_4" className="modal-toggle" />


      <div className="modal ">
        <div className="modal-box  text-white relative mt-10">

          <label htmlFor="my_modal_4" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-black text-lg text-center">Add Modal Information</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mx-12 ">
              <label class="label">
                <span class="label-text font-bold">Brand Name </span>
              </label>
              <input  {...register("name")} type="text" placeholder="Brand Name" class="rounded-none w-full input input-bordered text-gray-600" />
            </div>
            <div className="form-control mx-12 ">
              <label class="label">
                <span class="label-text font-bold">Product Group </span>
              </label>
              <input  {...register("group")} type="text" placeholder="Product Group" class="rounded-none w-full input input-bordered text-gray-600" />
            </div>
            <div className="form-control mx-12 ">
              <label class="label">
                <span class="label-text font-bold">Modal </span>
              </label>
              <input  {...register("modal")} type="text" placeholder="Modal" class="rounded-none w-full input input-bordered text-gray-600" />
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

export default ModalInfo
