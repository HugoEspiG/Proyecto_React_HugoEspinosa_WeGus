import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from 'react';
import {CartContext} from '../../../context/CartContext';

export default function CartWidget(){    
    const navigateFn= useNavigate();
    const {cartData}=useContext(CartContext)

    const loadCart = ()=>{
        navigateFn(`/Cart`)
    }

    const totalItems = cartData.reduce((prev, next) => {
        return prev + next.quantity;
      }, 0);
    return(
        <button onClick={loadCart} class="btn btn-light bi bi-cart2">{" "+totalItems}</button>
    )

}