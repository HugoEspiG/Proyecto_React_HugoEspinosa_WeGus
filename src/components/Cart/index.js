import { useContext} from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from './CartItem'
import './Cart.css'

export default function Cart(){
    const {cartData,clearCart} = useContext(CartContext)
    const totalPrecio = cartData.reduce((prev, next) => {
        return prev + (next.item.quantity*next.item.item.precio);
      }, 0);
      return(
        <div> 
            {(cartData.length > 0) ? 
            (
            <div>
                <table class="table">
                    <thead class="table-dark">
                    <tr>
                        <th scope="col"  class="text-center">#</th>
                        <th scope="col"  class="text-center">Imagen</th>
                        <th scope="col"  class="text-center">Nombre</th>
                        <th scope="col"  class="text-center">Cantidad</th>
                        <th scope="col"  class="text-center">Precio unidad</th>
                        <th scope="col"  class="text-center">Precio total</th>
                        <th scope="col"  class="text-center"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {cartData.map((item) => {
                    return( <CartItem item={item.item}/>
                    )
                    })}
                    </tbody>
                </table>
                <div align="end">
                    <p>Subtotal: {totalPrecio}</p>
                    <h3>Total: {totalPrecio}</h3>
                </div>
                <div  class="d-grid gap-2 d-md-flex justify-content-md-end" align="end">
                <button onClick={clearCart} class="btn btn-dark">vaciar carrito</button>
                <button class="btn btn-dark">Terminar compra</button>
                </div>
            </div>
            )
            :
            <h3>No hay Elementos en el Cart</h3>
            }
        </div>
    )
}