import React, { useContext } from 'react'
import { ShopContext } from './shopcontext'
import './cartitems.css'
import remove_icon from './Assets/cart_cross_icon.png'

export const Cartitems = () => {
    const{getTotalCartAmount,all_data,cartItems,removeFromCart}=useContext(ShopContext)
  return (
    <div className='cartItems'>
        <div className="main-cart">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
        {
          all_data.map((e)=>{
            if(cartItems[e.id]>0){
              return<> <div className="cart-items-format main-cart">
              <img className='cart-icon-product-icon' src={e.image} alt="" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className='cart-items-quantity'>{cartItems[e.id]}</button>
              <p>${e.new_price*cartItems[e.id]}</p>
              <img className='remove-icon' onClick={()=>{removeFromCart(e.id)}} src={remove_icon} alt="" />
             
            </div>
            < hr /></>
            }
           return null
          })}
        <div className="cart-total-down">
          <h2>Cart Totals</h2>
          <div className="subtotal">
            <p>subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <hr />
          <div className="subtotal">
            <p>shipping fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="subtotal">
            <h4>Total</h4>
            <h4>${getTotalCartAmount()}</h4>
          </div>
          <hr />
          
          <button>PROCEED TO CHECKOUT</button>

        </div>
    </div>
  )
}
