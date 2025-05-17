import React from 'react'
import './FlashSales.css'
function FlashSales({title, children}) {
  return (
    <div className='Flash-sales'>
        {title}
        <div className='Flash-sales-container'>{children}</div>
    </div>
  )
}

export default FlashSales