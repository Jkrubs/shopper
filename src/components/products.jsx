import React from 'react'
import './products.css'
import { Link } from 'react-router-dom'
 
export const Products = (props) => {
   const product=props.product
  return (
    <div className='lineup'>
        {
            product.map(item=>(
                <div className='products' key={props.id}>
                    <Link to={`/product/${item.id}`}><img onClick={window.scrollTo(0,0)} src={item.image} alt="" /></Link>
                    <h5>{item.name}</h5>
                    <h4>${item.new_price} <span>${item.old_price}</span></h4>
                </div>
            ))
        }
    </div>
  )
}
