import React,{ useState } from "react";

export const CartContext=React.createContext([]);

export default function CartCustomContext({children}){
const[cart,setCart]=useState([])
const[totProd,setTotProd]=useState(0)

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
const numItems=()=>{
    // cart.forEach(element => {
    //     setTotProd(element.quantity)
    // });
    console.log(cart)
    return 0;
}
const removeProduct = (item)=>{
    setCart(cart.filter((product)=>product.item.id!== item.id))
    console.log(cart)
}
    return(
        <CartContext.Provider value={{ addCartItem, cartData: cart, clearCart,isInCart,removeProduct,numItems}}>
            {children}
        </CartContext.Provider>
    )
}