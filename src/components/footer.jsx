import React from 'react'
import logo from './Assets/logo_big.png'
import pinterest from './Assets/pintester_icon.png'
import instagram from './Assets/instagram_icon.png'
import whatsapp from './Assets/whatsapp_icon.png'
import './foooter.css'

export const Footer = () => {
  return (
    <div className='footer'>
        <div className="logo">
            <img src={logo} alt="" />
            <h2>SHOPPER</h2>
        </div>
        <div className="list">
            <ul>
                <li>Company</li>
                <li>Products</li>
                <li>Offices</li>
                <li>About</li>
                <li>Contacts</li>
            </ul>
        </div>
        <div className="socials">
            <img src={pinterest} alt="" />
            <img src={instagram} alt="" />
            <img src={whatsapp} alt="" />
        </div>
        <hr className='line' />
        <h6>copyright &copy; 2024-All rights reserved</h6>

    </div>
  )
}
