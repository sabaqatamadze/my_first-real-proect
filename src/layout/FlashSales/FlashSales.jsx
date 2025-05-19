import React from 'react'
import './FlashSales.css'
function FlashSales({ children}) {
  return (
    <div className='Flash-sales'>
        <div className='Flash-sales-container'>{children}</div>
    </div>
  )
}

export default FlashSales