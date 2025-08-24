import React from 'react'
import './home.css'
import Flash_Sales from './components/Flash_sales.jsx/Flash_Sales'
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera,CiHeadphones } from "react-icons/ci";
import { SiNintendo3Ds } from "react-icons/si";
import BestSellingProduct from './components/BestSellingProduct/BestSellingProduct';
import ExploreOurProduct from './components/ExploreOurProduct/ExploreOurProduct';
import Categories from '../Categories/Categories';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function Home() {
  return (
    <div className='home'>
      <div className='home-container'>
        <div className='home-left'>
        <Categories/>
        </div>
        <div className='home-right'>
          <img src="src/pic/Frame 560.png" alt="" className='img1'/>
          </div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className='secend-layer'>
        <div className='day'><div className='small-container'></div> <p className='today'>Today’s</p></div>
        <div className='time'><p className='title'>Flash Sales</p> <div className='container'><button className='arrow'><FaArrowLeft/></button><button className='arrow'><FaArrowRight/></button></div></div>
        <div className='products'><Swiper
      spaceBetween={1250}
      slidesPerView={2}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Flash_Sales/></SwiperSlide>
      <SwiperSlide><BestSellingProduct/></SwiperSlide>
      <SwiperSlide></SwiperSlide>
      </Swiper> 
      </div>

        <button className='prodact'>View All Products</button>
      </div>
      <br />
      <br />
      <br />
      <hr />
      <br />
      <br />
      <br />
      <div className='secend-layer'>
        <div className='day'><div className='small-container'></div> <p className='today'>Categories</p></div>
        <div className='time'><p className='title'>Browse By Category</p> <div className='container'><button className='arrow'><FaArrowLeft/></button><button className='arrow'><FaArrowRight/></button></div></div>
        <div className='category-container'>
          <div className='category phone'><p className='icon'><MdOutlinePhoneIphone/></p>  <p className='title'>Phones</p></div>
          <div className='category'><p className='icon'><HiOutlineDesktopComputer/></p>  <p className='title'>Computers</p></div>
          <div className='category'><p className='icon'><BsSmartwatch/></p>  <p className='title'>SmartWatch</p></div>
          <div className='category'><p className='icon'><CiCamera/></p>  <p className='title'>Camera</p></div>
          <div className='category'><p className='icon'><CiHeadphones/></p>  <p className='title'>HeadPhones</p></div>
          <div className='category'><p className='icon'><SiNintendo3Ds/></p>  <p className='title'>Gaming</p></div>
        </div>
        </div>
        <br />
        <br />
        <br />
        <hr />
        <div className='secend-layer'>
        <div className='day'><div className='small-container'></div> <p className='today'>This Month</p></div>
        <div className='time'><p className='title'>Best Selling Products</p> <div className='container'><button className='prodact'>View All</button></div></div>
        <div className='products'> <BestSellingProduct/></div>
      </div>
      <br />
      <br />
      <br />
      <div className='img'><img src="src/pic/Frame 600.png" alt="" /></div>

      <div className='secend-layer'>
        <div className='day'><div className='small-container'></div> <p className='today'>Our Products</p></div>
        <div className='time'><p className='title'>Explore Our Products</p> <div className='container'><button className='arrow'><FaArrowLeft/></button><button className='arrow'><FaArrowRight/></button></div></div>
        <div className='products'> <ExploreOurProduct/></div>
        <button className='prodact'>View All Products</button>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className='secend-layer'>
      <div className='day'><div className='small-container'></div> <p className='today'>Our Products</p></div>
      <div className='time'><p className='title'>Explore Our Products</p></div>
      <div className='img'><img src="src/pic/Frame 739.png" alt="" /></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className='img2'>
        <img src="src/pic/Frame 702.png" alt="" />
      </div>
      
      

    </div>
  )
}

export default Home