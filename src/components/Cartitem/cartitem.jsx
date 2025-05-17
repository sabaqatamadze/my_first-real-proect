import React from 'react'
import './cartitem.css'

function CartItem(
  id,
  thumbnail,
  title,
  price,
  discountPercentage,) {
  const newPrice = (price - (price * discountPercentage) / 100).toFixed(2);


  return (
    
    <div className='cartItem'>
        <div className='cartitem__discount'>
            <p>{discountPercentage}</p>
        </div>
        <div className='cartitem__img'>
            <img src={thumbnail} alt="" />
        </div>
        <div className='cartitem__info'>
            <p  className='title'>{title}</p>
            <p className='newPrice'>${newPrice}</p>
            <p className='Price'>${price}</p>
        </div>

    </div>
  )
}

export default CartItem