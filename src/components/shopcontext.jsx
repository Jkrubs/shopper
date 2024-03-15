import React, { createContext, useState } from 'react'
import all_data from './Assets/all_product'
export const ShopContext=createContext()
const cart={}
const getDefaultCart=()=>{
    for (let index = 0; index < all_data.length; index++) {
        cart[index]=0;
        
        
    }
    return cart
}
const ShopContextProvider=(props)=>{
    const[cartItems,setCartItems]=useState(getDefaultCart())

    const addToCart=(itemId)=>{
        setCartItems((prevItems)=>({...prevItems,[itemId]:prevItems[itemId]+1}))
        
    }

    const removeFromCart=(itemId)=>{
        setCartItems((prevItems)=>({...prevItems,[itemId]:prevItems[itemId]-1}))
    }

   const getTotalCartAmount=()=>{
    let totalAmount=0;
    for (const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            let itemInfo= all_data.find((product)=>product.id===Number(item));
            totalAmount += itemInfo.new_price * cartItems[item]
        }
        
    }
    return totalAmount
   }

   const totalCartItems=()=>{
    let totalItems=0;
    for(const item in cartItems)
    {
        if(cartItems[item]>0)
        {
            totalItems += cartItems[item]
        }
    }
    return totalItems
   }
    const contextValue={totalCartItems,getTotalCartAmount,all_data,cartItems,addToCart,removeFromCart}
    return(
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider