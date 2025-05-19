import React from 'react'
import './BestSellingProducts.css'
function BestSellingProducts({children}) {
  return (
    <div className='BestSellingProducts'>
        <div className='BestSellingProducts-container'>{children}</div>
    </div>
  )
}

export default BestSellingProducts