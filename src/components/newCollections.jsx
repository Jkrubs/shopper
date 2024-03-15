import React from 'react'
import Collections from './Assets/new_collections'
import { Title } from './title'
import { Products } from './products'
export const NewCollections = () => {
  return (
    <div>
        <Title heading="New Collections"/>
        <Products product={Collections}/>
    </div>
  )
}
