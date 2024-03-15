import React, { useContext } from 'react'
import { ShopContext } from './shopcontext'
import { Products } from './products'
import dropdown from './Assets/dropdown_icon.png'
import './shopcategory.css'
export const Shopcategory = (props) => {
    const{all_data}=useContext(ShopContext)
  return (
    <div className='shopcategory'>
        <img src={props.banner} alt="" />
        <div className="loading">
            <div className="showing">
                <p><span>Showing 1-12</span> out of 36 products</p>
            </div>
            <div className="sort">
                <button>Sort by <img src={dropdown} alt="" /> </button>
            </div>
        </div>
        <div className="shop-items">
            {
             <Products product={all_data.filter((item)=>item.category===props.category)}/>
            }
        </div>
    </div>
  )
}
