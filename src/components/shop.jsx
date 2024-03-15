import React from 'react'
import hero from './Assets/hero_image.png'
import handIcon from './Assets/hand_icon.png'
import rightArrow from './Assets/arrow.png'
import './shop.css'
import { Popular } from './popular'
import { Banner } from './banner'
import { NewCollections } from './newCollections'
import { Newsletter } from './newsletter'
export const Shop = () => {
  return (
    <>
    <div className='hero'>
      <div className="text">
        <h4>NEW ARRIVALS ONLY</h4>
        <h1>new <span><img src={handIcon} alt="" /></span> collections <br />for everyone</h1>
        <button className='hero-btn'>Latest Collection <img src={rightArrow} alt="" /></button>
      </div>
      <div className="image">
        <img src={hero} alt="" />
      </div>
    </div>
    <Popular/>
    <Banner/>
    <NewCollections/>
    <Newsletter/>
    </>
  )
}
