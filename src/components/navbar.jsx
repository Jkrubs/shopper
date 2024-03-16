import React, { useContext, useEffect, useState } from 'react'
import logo from './Assets/logo.png'
import cart from './Assets/cart_icon.png'
import './navbar.css'
import { Link } from 'react-router-dom'
import { ShopContext } from './shopcontext'

export const Navbar = () => {
    const [menu, setMenu]=useState("shop")
    const{totalCartItems}=useContext(ShopContext)
    const[sticky, setSticky]=useState(false)
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            window.scrollY>0?setSticky(true):setSticky(false);
        })
    })
    const [isMobile, setIsMobile]=useState(false)
    function toggleClass(){
        setIsMobile((prev)=>{return !prev})
    }

  return (
    <div  className={sticky?"darknav":"navbar"}>
        <div className="logo">
            <img src={logo} alt="" />
            <h2>SHOPPER</h2>
        </div>
        <div className={isMobile?"shownav":"menu"}>
            <ul>
                <li><Link onClick={()=>{setMenu("shop")}} to="/">Shop{menu==="shop"?<hr className='after'/>:<></>}</Link></li>
                <li><Link onClick={()=>{setMenu("men")}} to="/men">Men{menu==="men"?<hr className='after'/>:<></>}</Link></li>
                <li><Link onClick={()=>{setMenu("women")}} to="/women">Women{menu==="women"?<hr className='after'/>:<></>}</Link></li>
                <li><Link onClick={()=>{setMenu("kids")}} to="/kids">Kids{menu==="kids"?<hr className='after'/>:<></>}</Link></li>
            </ul>
        </div>
        <div className="login">
            <Link to="/login"><button>Login</button></Link>
            <Link to="/cart"><img src={cart} alt="" /></Link>
            <div className='counter'>{totalCartItems()}</div>
            <div className="icon">
            <i onClick={toggleClass} class="fa-solid fa-bars"></i>
            </div>
        </div>
        
    </div>
  )
}
