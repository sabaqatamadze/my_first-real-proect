import React from 'react'
import './ExploreOurProducts.css'

function ExploreOurProducts({title, children}) {
  return (
    <div className='ExploreOurProducts'>
        {title}
        <div className='ExploreOurProducts-container'>{children}</div>
    </div>
  )
}

export default ExploreOurProducts