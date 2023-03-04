import React from 'react'
import { products } from '../../../Products'
import Product from './Product'

export default function Shop() {
  return (
   <div className="shop">
      <div className="shoptitle">
        <h1>Yash Game Shop</h1>
      </div>
      <div className='products'>
         {products.map((product) => <Product data={product}/>)}
      </div>
   </div>
  )
}
