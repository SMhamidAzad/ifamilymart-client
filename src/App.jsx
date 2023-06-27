import React from "react"
import { Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import DashboardHome from "./pages/DashboardHome"
import BrandAndGroup from "./pages/configuration/BrandAndGroup"
import ModelAndSize from "./pages/configuration/ModelAndSize"
import AddProduct from "./pages/inventory/AddProduct"
import ProductInfo from "./pages/inventory/ProductInfo"
function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} >
          <Route index element={<DashboardHome />} />
          <Route path="brandgroup" element={<BrandAndGroup />} />
          <Route path="modelsize" element={<ModelAndSize />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="productinfo" element={<ProductInfo />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
