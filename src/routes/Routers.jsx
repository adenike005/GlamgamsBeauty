import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Pages/Home'
import Cart from '../Pages/Cart'
import Login from '../Pages/Login'
import Shop from '../Pages/Shop'
import Signin from '../Pages/Signin'
import ProductsData from '../Pages/ProductsData'
import Checkout from '../Pages/Checkout'


const Routers = () => {
  return(
    <Routes>
    <Route path='/' element={<Navigate to='home'/>}/>
    <Route path='home' element={<Home/>}/>
    <Route path='shop' element={<Shop/>}/>
    <Route path='shop/:id' element={<ProductsData/>}/>
    <Route path='cart' element={<Cart/>}/>
    <Route path='checkout' element={<Checkout/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='signin' element={<Signin/>}/>
  </Routes>
  )
}

export default Routers