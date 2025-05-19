import React from 'react'
import './cartitem.css'
import { CiHeart } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";

function CartItem({
  id,
  thumbnail,
  title,
  price,
  discountPercentage,}) {
  const newPrice = (price - (price * discountPercentage) / 100).toFixed(2);


  return (
    
    <div className='cartItem'>
        <div className='cartitem-discount'>
            <p className='dicount'>-{discountPercentage.toFixed(0)}%</p>
            <button className='wishlist'><CiHeart/></button>
            <button className='eye'><FaRegEye/></button>
        </div>
        <div className='cartitem-img'>
            <img src={thumbnail} alt="" />
        </div>
        <div className='cartitem-name'>
            <p  className='title'>{title}</p>
        </div>
        <div className='cartitem-price'>
            <p className='newPrice'>${newPrice}</p>
            <p className='Price'>${price}</p>
        </div>

    </div>
  )
}

export default CartItem