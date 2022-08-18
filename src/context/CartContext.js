import React,{ useState } from "react";

export const CartContext=React.createContext([]);

export default function CartCustomContext({children}){
const[cart,setCart]=useState([])

const addCartItem =(item)=>{
    const listActual=[...cart,item]
    setCart(listActual)
}
const clearCart= ()=>{setCart([])}
const isInCart=(item)=>{
    if(cart.find(product=> product.item.id==item.id)){
        return true
    }else{
        return false
    }
    }
const removeProduct = (item)=>{
    setCart(cart.filter((product)=>product.item.id!== item.id))
}
    return(
        <CartContext.Provider value={{ addCartItem, cartData: cart, clearCart,isInCart,removeProduct }}>
            {children}
        </CartContext.Provider>
    )
}