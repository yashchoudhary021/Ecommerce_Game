import React, { createContext, useState } from 'react'
import { products } from '../../Products'

export const ShopContext = createContext(null)
const getDefaultCart =()=> {
    let cart = {}
    for(let i=1; i<products.length+1; i++){
      cart[i] = 0;
    }
    return cart
}

export  const ShopContextProvider = ({children}) => {
  const [cartItems, setCartItems] = useState(getDefaultCart())

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for(let item in cartItems){
       if(cartItems[item] > 0){
         let itemInfo = products.find((product) => product.id === Number(item))
         totalAmount += itemInfo.price * cartItems[item]
       }
    }
    return totalAmount
 }

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}))
  }
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] -1}))
  }
  const contextValue = {cartItems, addToCart, removeFromCart,getTotalCartAmount}
  
  return <ShopContext.Provider value={contextValue}>
    {children}
    </ShopContext.Provider>
}
