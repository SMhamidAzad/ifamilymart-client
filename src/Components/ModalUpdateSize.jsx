import React from "react"
import { useForm } from "react-hook-form";
import fetcher from "../api";

function ModalUpdateSize({modalsizeId}) {
    console.log('hello ',modalsizeId)
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    const result = await fetcher.put(`/api/size/${modalsizeId}`, data)
    window.alert("Size updated successfully")
  }
  return (
    <div className=''>
      <input type="checkbox" id="my_modal_7" className="modal-toggle" />


      <div className="modal ">
        <div className="modal-box  text-white relative mt-10">

          <label htmlFor="my_modal_7" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-black text-lg text-center">SIZE INFORMATION.</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control mx-12 ">
              <label class="label">
                <span class="label-text font-bold">Product Group </span>
              </label>
              <input  {...register("group")} type="text" placeholder="Group" class="rounded-none w-full input input-bordered text-gray-600" />
            </div>
            <div className="form-control mx-12 ">
              <label class="label">
                <span class="label-text font-bold">Size </span>
              </label>
              <input  {...register("size")} type="text" placeholder="Size" class="rounded-none w-full input input-bordered text-gray-600" />
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

export default ModalUpdateSize
