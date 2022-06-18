import React from 'react'
import { Routes,Route,Navigate } from 'react-router-dom'
import About from './Components/About'
import Cart from './Components/Cart'
import Checkout from './Components/Checkout'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './Components/Home'
import Product from './Components/Product'
import ProductDetail from './Components/ProductDetail'

export default function App() {
  return (
    <>
    <Header/>
    <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/products' element={<Product/>}></Route>
        <Route exact path='/products/:id' element={<ProductDetail/>}></Route>
        <Route exact path='/cart' element={<Cart/>}></Route>
        <Route exact path='/checkout' element={<Checkout/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact render={() => <Navigate to="/" />} />
        {/* <Redirect /> v5 */}
    </Routes>
    <Footer/>
    </>
  )
}
