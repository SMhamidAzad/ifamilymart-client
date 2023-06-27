import React, { useState } from "react"
import { HiMenuAlt3 } from 'react-icons/hi';
import { MdInventory2 } from 'react-icons/md';
import { LuLayoutDashboard } from 'react-icons/lu';
import { BsChevronDown } from 'react-icons/bs';
import { Link, Outlet, useNavigate } from "react-router-dom";
function Sidebar() {
  const [open, setOpen] = useState(true);
  const [menu, setMenu] = useState(false);
  const [menu1, setMenu1] = useState(false);
  const navigate = useNavigate()
  return (
    <section className='flex'>
      <div className={`bg-black ${open ? "w-72" : "w-16"} duration-500 min-h-screen text-gray-100 px-4`}>
        <div className='py-3 flex justify-end'>
          <HiMenuAlt3
            size={26}
            className='cursor-pointer'
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className='mt-4 flex flex-col gap-4 relative'>
          <ul className="pt-2">
            <li onClick={() => setMenu(!menu)}  className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-500 hover:text-white rounded-md mt-2">
              <span className="text-2xl block float-left text-white">
                <LuLayoutDashboard />
              </span>
              <span className={`text-white font-medium flex-1  ${!open && "hidden"}`}>
                Configuration
              </span>
              <BsChevronDown className={`${menu && "rotate-180"} text-white`} />
            </li>
            {
              menu && open && <ul>

                <li onClick={() => navigate("/brandgroup")} className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2  hover:bg-gray-500 hover:text-white rounded-md mt-2 px-5">Brand And Group</li>
                <li onClick={() => navigate("/modelsize")} className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2  hover:bg-gray-500 hover:text-white rounded-md mt-2 px-5">Model And Size</li>
              </ul>

            }
            <li onClick={() => setMenu1(!menu1)} className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-gray-500 hover:text-white rounded-md mt-2">
              <span className="text-2xl block float-left text-white">
                <MdInventory2 />
              </span>
              <span className={`text-white font-medium flex-1  ${!open && "hidden"}`}>
                Inventory
              </span>
              <BsChevronDown className={`${menu1 && "rotate-180"} text-white`}  />
            </li>
            {
              menu1 && open && <ul>

                <li onClick={() => navigate("/productinfo")} className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2  hover:bg-gray-500 hover:text-white rounded-md mt-2 px-5">Product Info</li>
                <li onClick={() => navigate("/add-product")} className="text-white text-sm flex items-center gap-x-4 cursor-pointer p-2  hover:bg-gray-500 hover:text-white rounded-md mt-2 px-5">Add Product</li>
              </ul>

            }
          </ul>
        </div>
      </div>
      <div className=" bg-[#EFF3F8] w-full">

        <Outlet />
      </div>
    </section>
  )
}

export default Sidebar

/*
import React from "react"
import { Outlet, useNavigate } from "react-router-dom"
function Sidebar() {
  const navigate = useNavigate()
  return (
    <>
      <div>
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content bg-[#EFF3F8]">
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            <Outlet />
          </div>
          <div className="drawer-side ">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 h-full bg-gray-800 text-base-content">

              <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title font-sm btn btn-light-white">
                  Configuration
                </div>
                <div className="collapse-content ">
                  <li className="btn cursor-pointer ml-4 pb-2 text-xl" onClick={() => navigate("/brandgroup")}>Brand And Group</li>
                  <li className="btn cursor-pointer ml-4 text-xl" onClick={() => navigate("/modelsize")}>Model And Size</li>
                </div>
              </div>
              <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-200">
                <div className="collapse-title font-sm btn btn-outline">
                  Inventory
                </div>
                <div className="collapse-content">
                  <li className="btn cursor-pointer ml-4 pb-2 text-xl" onClick={() => navigate("/productinfo")}>Product Info</li>
                  <li className="btn cursor-pointer ml-4 text-xl" onClick={() => navigate("/add-product")}>Add Product</li>
                </div>
              </div>
            </ul>

          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar

*/ 