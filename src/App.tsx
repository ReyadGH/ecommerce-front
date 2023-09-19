
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Customer from "./pages/Customer"
import Layout from "./pages/Layout"
import Product from "./pages/Product"

function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<h1>main?</h1>} />
                <Route path="/customer" element={<Customer/>} />
                <Route path="/cart" element={<h1>cart</h1>} />
                <Route path="/product" element={<Product/>} />
                <Route path="*" element={<h1>Error not found</h1>} />
            </Route>
          </Routes>
      </BrowserRouter>
      {/* <Layout/> */}

    </>
  )
}

export default App
