import React, { useEffect, useState } from "react"
import ModalInfo from "../../Components/ModalInfo"
import ModalSize from "../../Components/ModalSize"
import fetcher from "../../api";
import { MdDelete } from 'react-icons/md';
import { FiEdit } from 'react-icons/fi';
import ModalUpdate from "../../Components/ModalUpdate";
import ModalUpdateSize from "../../Components/ModalUpdateSize";

function ModelAndSize() {
    const [allmodal, setAllModal] = useState([])
    const [allsize, setAllSize] = useState([])
    const [modalId, setModalId] = useState(false)
    const [modalsizeId, setModalsizeId] = useState(false)
    useEffect(() => {
        (async () => {
            const result = await fetcher.get("api/modal/all")
            setAllModal(result?.data?.result)
        })();
    }, []);
    useEffect(() => {
        (async () => {
            const result = await fetcher.get("api/size/all")
            setAllSize(result?.data?.result)
        })();
    }, []);
    const handleDeleteModal = (id) => {
        (async () => {
            const result = await fetcher.delete(`api/modal/${id}`)
            window.alert("Do you want to delete this modal group?")
            window.location.reload()
        })()
    }
    const handleDeleteSize = (id) => {
        (async () => {
            const result = await fetcher.delete(`api/size/${id}`)
            window.alert("Do you want to delete this size group?")
            window.location.reload()
        })()
    }
    const handleUpdateModal = (id) => {
        setModalId(id);
        // window.my_modal_6.showModal()
    }
    const handleUpdateSize = (id) => {
        setModalsizeId(id);
        // window.my_modal_6.showModal()
    }
    return (
        <>
            <div className="max-w-full">
                <ModalInfo />
                <ModalSize />
                <ModalUpdate modalId={modalId} />
                <ModalUpdateSize modalsizeId={modalsizeId} />
                <h2 className="text-2xl px-9 py-4 bg-white font-serif ">Modal & Size</h2>
                <div>
                    <div className="grid grid-cols-2">
                        <div className="px-4 overflow-x-auto h-5/6 mx-6 mt-10 bg-white">
                            <div className="sticky top-0 bg-white z-10">
                                <div className="flex justify-between items-center mx-10">
                                    <h2 className="text-lg font-semibold text-info">MODEL INFORMATION</h2>
                                    <label
                                        htmlFor="my_modal_4"
                                        className="btn btn-outline rounded-none  btn-info my-10 ml-5"
                                        onClick={() => handleUpdateModal()}
                                    >Add Modal</label>
                                </div>
                            </div>
                            <div className="overflow-y-auto max-h-full">
                                <table className="table table-pin-rows">
                                    <thead className="">
                                        <tr className="text-lg">
                                            <th>Brand Name</th>
                                            <th>Product Group</th>
                                            <th>Modal</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allmodal?.map((modal, index) => <tr key={index}>
                                            <td>{modal?.name}</td>
                                            <td>{modal?.group}</td>
                                            <td>{modal?.modal}</td>
                                            <td className="flex">
                                                <label
                                                    htmlFor="my_modal_6"
                                                    onClick={() => handleUpdateModal(modal?._id)}
                                                >

                                                    <FiEdit className='cursor-pointer text-green-600 text-xl ' />
                                                </label>
                                                <MdDelete onClick={() => handleDeleteModal(modal?._id)} className='ml-2 cursor-pointer text-red-400 text-2xl ' />
                                            </td>
                                        </tr>)}

                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="px-4 overflow-x-auto h-5/6 mx-6 mt-10 bg-white">
                            <div className="sticky top-0 bg-white z-10">
                                <div className="flex justify-between items-center mx-10">
                                    <h2 className="text-lg font-semibold text-info">SIZE INFORMATION</h2>
                                    <label
                                        htmlFor="my_modal_5"
                                        className="btn btn-outline rounded-none  btn-info my-10 ml-5"
                                        onClick={() => window.my_modal_5.showModal()}
                                    >Add Size</label>

                                </div>
                            </div>
                            <div className="overflow-y-auto max-h-full">
                                <table className="table table-pin-rows">
                                    <thead className="">
                                        <tr className="text-lg">
                                            <th>Product Group</th>
                                            <th>Size</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allsize?.map((size, index) => <tr key={index}>
                                            <td>{size?.group}</td>
                                            <td>{size?.size}</td>
                                            <td className="flex">
                                                <label
                                                    htmlFor="my_modal_7"
                                                    onClick={() => handleUpdateSize(size?._id)}
                                                >

                                                    <FiEdit className='cursor-pointer text-green-600 text-xl ' />
                                                </label>
                                                <MdDelete onClick={() => handleDeleteSize(size?._id)} className='ml-2 cursor-pointer text-red-400 text-2xl ' />
                                            </td>
                                        </tr>)}

                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ModelAndSize