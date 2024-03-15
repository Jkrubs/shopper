import React from 'react'
import breadcrum_icon  from './Assets/breadcrum_arrow.png'
import './breadcrum.css'


export const Breadcrum= (props) => {
  const {product}=props
  return (
    <div className='breadcrum'>
      Home <img src={breadcrum_icon} alt="" />Shop <img src={breadcrum_icon} alt="" />{product.category} <img src={breadcrum_icon} alt="" />{product.name}
    </div>
  )
}
