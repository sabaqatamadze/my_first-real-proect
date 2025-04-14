import React from 'react'
import './nav-bar.css'
import { Link, NavLink  } from 'react-router-dom'
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiSearch } from "react-icons/ci";


const Nav_bar = () =>  {
  return (
    <div className='nav-bar'>
      <h1 className='title'>Exclusive</h1>
      <div className='links'>
      <NavLink to="/" className="link">home</NavLink>
      <NavLink to="/contact" className='link'>Contact</NavLink>
      <NavLink to="/about" className='link'>About</NavLink>
      <NavLink to="/sign-up" className='link'>Sign Up</NavLink>
      </div>
      <div className='search'>
        <input type="text" placeholder='What are you looking for?' className='search_input' />
        <CiSearch  className='search_icon'/>
      </div>
      <div className='cart'>
        <Link to="/wishlist" className='icon'><CiHeart/></Link>
        <Link to="/cart" className='icon'><CiShoppingCart/></Link>
        

      </div>
      
      
    </div>
  )
}

export default Nav_bar