import React from 'react'
import './footer.css'
import { IoSend } from "react-icons/io5";
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <div className='footer'>
      <div className='footer_discount'>
        <h2 className='title'>Exclusive</h2>
        <h3 className='subcribe'>Subscribe</h3>
        <p title='text'>Get 10% off your first order</p>
        <div className='footer_input'>
          <input type="email" className='email' placeholder='Enter you email' /><IoSend className='footer_icon' />
        </div>
        
      </div>
      <div className='footer_support'>
        <h3>support</h3>
        <p>111 Bijoy sarani, Dhaka, 
           DH 1515, Bangladesh.</p>
        <p>exclusive@gmail.com</p>
        <p>+88015-88888-9999</p>

      </div>
      <div className='footer_link'>
        <h3>Account</h3>
        <Link to="/account" className='link'>My Account</Link>
        <Link to="/log-in" className='link'>Login / Register</Link>
        <Link to="/cart" className='link'>Cart</Link>
        <Link to="/wishlist" className='link'>Wishlist</Link>
        <p>Shop</p>
        
      </div>
      <div className='footer_qiocklink'>
        <h3>Quick Link</h3>
        <p>Privacy Policy</p>
        <p>Terms Of Use</p>
        <p>FAQ</p>
        <p>Contact</p>
      </div>
      <div>
        <img src="src\pic/Frame_742.png" alt="" />
      </div>

    </div>
    
  )
}

export default Footer