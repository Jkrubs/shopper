import React from 'react'
import popular from './Assets/data'
import { Products } from './products'
import { Title } from './title'

export const Popular = () => {

  return (
    <div className='popular'>
        <Title heading="POPULAR IN WOMEN"/>
        <Products product={popular}/>
    </div>
  )
}
