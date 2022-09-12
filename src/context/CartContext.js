import React, { useState } from "react";

export const CartContext = React.createContext([]);

export default function CartCustomContext({ children }) {
    const [cart, setCart] = useState([])

    const addCartItem = (item) => {
        const listActual = cart.filter((prod) => prod.item.item.id !== item.item.id)
        listActual.push({ ...cart, item })
        setCart(listActual)
    }
    const clearCart = () => { setCart([]) }
    const isInCart = (item) => {
        if (cart.find(product => product.item.id == item.id)) {
            return true
        } else {
            return false
        }
    }

    const removeProduct = (item) => {
        setCart(cart.filter((product) => product.item.item.id !== item.id))
    }
    const totalPrecio  = cart.reduce((prev, next) => {
            return prev + (next.item.quantity * next.item.item.precio)
        }, 0)

    return (
        <CartContext.Provider value={{ addCartItem, cartData: cart, clearCart, isInCart, removeProduct, totalPrecio }}>
            {children}
        </CartContext.Provider>
    )
}