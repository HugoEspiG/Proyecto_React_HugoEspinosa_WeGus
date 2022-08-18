import { useNavigate } from "react-router-dom";
import { useContext } from 'react';
import {CartContext} from '../../../context/CartContext';

export default function CartWidget(){    
    const navigateFn= useNavigate();
    const {cartData}=useContext(CartContext)

    const loadCart = ()=>{
        navigateFn(`/Cart`)
    }
    return(
        <button onClick={loadCart} class="btn btn-light bi bi-cart2">{cartData.length}</button>
    )

}