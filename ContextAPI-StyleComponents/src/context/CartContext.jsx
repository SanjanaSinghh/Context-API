import React, { createContext, useState } from "react";
import product from '../components/db.json'

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart,setcart]=useState(product.cartItems)
  const [ca,seca]=useState(product.cartItems.length)
const Addcart=(newitem)=>{
var new_cart=[...cart,newitem]
setcart(new_cart)
 Cartco(0)

}
var Cartco=(x)=>{
  var sum=0
cart.map((e)=>sum+=e.count)
seca(ca+x)
}


  return <CartContext.Provider
  
  value={{Addcart,cart,ca,Cartco}}
  
  
  >{children}</CartContext.Provider>;
};
