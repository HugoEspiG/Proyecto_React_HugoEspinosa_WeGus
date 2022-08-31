import React,{ useState } from "react";

export const OrderContext=React.createContext([]);

export default function OrderCustomContext({children}){
const[Order,setOrder]=useState([])

const addOrderItem =(item)=>{
    const listActual=Order.filter((prod)=>prod.item.item.id!==item.item.id)
    listActual.push({...Order,item})
    console.log(listActual)
    setOrder(listActual)
}
const clearOrder= ()=>{setCart([])}
    return(
        <CartContext.Provider value={{ addOrderItem, orderData: Order, clearOrder}}>
            {children}
        </CartContext.Provider>
    )
}