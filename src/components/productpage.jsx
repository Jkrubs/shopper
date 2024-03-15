import React, { useContext } from 'react'
import { useParams } from 'react-router'
import { ShopContext } from './shopcontext'
import { Item } from './item'
import { Breadcrum } from './breadcrum'

export const Productpage = () => {
    const{id}=useParams()
    const{all_data}=useContext(ShopContext)
    const product=all_data.find((e)=>e.id===Number(id))
  return (
    <div>
        <Breadcrum product={product}/>
        <Item product={all_data.filter((e)=>e.id===Number(id))}/>
    </div>
  )
}
