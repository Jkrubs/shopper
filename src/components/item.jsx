import React, { useContext} from 'react'
import './item.css'
 import star_icon from './Assets/star_icon.png'
 import dull_star from './Assets/star_dull_icon.png'
import { ShopContext } from './shopcontext'
export const Item = (props) => {
   const product=props.product
   const{addToCart}=useContext(ShopContext)
  return (
    <div className='pro-page'>
        {
            product.map(item=>(
                <>
                <div className="product-display" key={item.id}>
                    <img src={item.image} alt="" />
                    <img src={item.image} alt="" />
                    <img src={item.image} alt="" />
                    <img src={item.image} alt="" />
                </div>
                <div className='product-item' key={props.id}>
                    <img src={item.image} alt="" />
                    <div className="txt">
                    <h1>{item.name}</h1>
                    <div className="rating">
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={star_icon} alt="" />
                        <img src={dull_star} alt="" />
                        <div className="number">
                        <p>{`(${item.id*Math.floor(Math.random()*36)})`}</p>
                        </div>
                    </div>
                    <h4><span>${item.old_price}</span>${item.new_price} </h4>
                    <p>{`A ${item.category}'s lightweight ${item.name} suitable for all your day to day needs`}</p>
                    <div className="size">
                        <h3>Select Size</h3>
                        <div className="sizes">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>X</div>
                            <div>XXL</div>
                            <div>XXXL</div>
                            
                        </div>
                        <button onClick={()=>{addToCart(item.id)}}>ADD TO CART</button>
                        <h5><span>Category:</span> Nike - unisex</h5>
                        <h5><span>Tags:</span> Modern - latest</h5>
                    </div>
                </div>
                </div>
                </>
            ))
        }
    </div>
  )
}
