import React from 'react'
import './BestSellingProducts.css'
function BestSellingProducts({title, children}) {
  return (
    <div className='BestSellingProducts'>
        {title}
        <div className='BestSellingProducts-container'>{children}</div>
    </div>
  )
}

export default BestSellingProducts