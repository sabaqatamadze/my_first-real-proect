import React from 'react'
import './about.css'

function About() {
  return (
    <div className='about'>
      <div className='first-layer'>
        <div className='our-story'>
          <h1 className='title'>Our Story</h1>
          <p className='story'>Launced in 2015, Exclusive is South Asia’s premier online shopping
             makterplace with an active presense in Bangladesh. Supported by wide range of tailored
              marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and 
              serves 3 millioons customers across the region. </p>
              <p className='story'>Exclusive has more than 1 Million products to offer, growing at a very fast. 
                Exclusive offers a diverse assotment in categories ranging  from consumer.</p>
        </div>
        <div className='img'><img src="src/pic/Side Image.png" alt="" /></div>
        </div>
      <div className='secend-layer'>
          <div className='category'><p className='img'><img src="src/pic/services.png" alt="" /></p>  <p className='name'>10.5k </p> 
          <p className='name1'>Sallers active our site</p></div>
          <div className='category'><p className='img'><img src="src/pic/services (4).png" alt="" /></p>  <p className='name'>33K</p>
          <p className='name1'>Mopnthly Produduct Sale</p></div>
          <div className='category'><p className='img'><img src="src/pic/services (2).png" alt="" /></p>  <p className='name'>45.5K</p>
          <p className='name1'>Customer active in our site</p></div>
          <div className='category'><p className='img'><img src="src/pic/services (3).png" alt="" /></p>  <p className='name'>25K</p>
          <p className='name1'>Anual gross sale in our site</p></div>
      </div>
      <div className='thired-layer'>
        <div className='img'><img src="src/pic/Frame 890.png" alt="" /></div>
        <div className='img1'><img src="src/pic/Frame 702.png" alt="" /></div>
        </div>
    </div>
  )
}

export default About