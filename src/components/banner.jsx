import React from 'react'
import  exclusive from './Assets/exclusive_image.png'
import './banner.css'

export const Banner = () => {
  return (
    <div className='banner'>
        <div className="text">
            <h1>Exclusive offers for you</h1>
            <h4>ONLY ON BEST SELLERS PRODUCTS</h4>
            <button className='hero-btn'>Check Now</button>
        </div>
        <div className="image">
            <img src={exclusive} alt="" />
        </div>
    </div>
  )
}
