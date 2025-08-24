import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home/home'
import About from './pages/about/about'
import Layout from './layout/layout'
import Account from './pages/Account/Account'
import Cart from './pages/Cart/cart'
import CheckOut from './pages/CheckOut/CheckOut'
import Contact from './pages/contact/contact'
import Log_in from './pages/log-in/log-in'
import Product from './pages/Product Details page/product'
import Sign_up from './pages/sign-up/sign-up'
import Wishlist from './pages/Wishlist/Wishlist'
import Category from './pages/Category/Category'
import Error404 from './pages/Error404/Error404'


function Myroutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout/>} >
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/checkout' element={<CheckOut/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/log-in' element={<Log_in/>}/>
      <Route path='/category/:category_id' element={<Category/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/sign-up' element={<Sign_up/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>
      <Route path='*' element={<Error404/>}/>

      
      </Route>

    </Routes>
  )
}

export default Myroutes