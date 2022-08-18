import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from './CartItem'
import './Cart.css'

export default function Cart(){
    const {cartData,clearCart} = useContext(CartContext)
    return(
        <div> 
            {(cartData.length > 0) ? 
            (
            <div>
                <table class="table">
                    <thead class="table-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Imagen</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio unidad</th>
                        <th scope="col">Precio total</th>
                        <th scope="col"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartData.map((item) => {
                    return( <CartItem item={item}/>
                    )
                    })}
                    </tbody>
                </table>
                <div align="end">
                    <button onClick={clearCart} class="bi bi-trash bg-transparent border border-light size"> vaciar carrito</button>
                </div>
            </div>
            )
            :
            <h3>No hay Elementos en el Cart</h3>
            }
        </div>
    )
}