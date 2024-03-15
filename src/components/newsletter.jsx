import React from 'react'
import './newsletter.css'
export const Newsletter = () => {
  return (
    <div className='banner alsobanner'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated </p>
        <div className="sub">
        <input type="email" placeholder='Your Email Id' />
        <button>Subscribe</button>
        </div>
    </div>
  )
}
