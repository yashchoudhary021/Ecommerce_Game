import React, { useContext } from 'react'
import { ShopContext } from '../../Context/ShopContext'

export default function CartItems(props) {
    const {id,name,price,image,MoreDetails,review} = props.data
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext)
  return (
    <div className="cartitem">
       <img src={image}/>
       <div className="discription">
            <h3>{name}</h3>
            <h4>${price}</h4>
            <p><h5>More Details : </h5>{MoreDetails}</p>
            <h5>Review : {review}</h5>
            <div className="countHandler">
                <button onClick={() => removeFromCart(id)}>  - </button>
                <input value={cartItems[id]}/>
                <button onClick={() => addToCart(id)}>  + </button>
            </div>
            
        </div>
    </div>
  )
}
