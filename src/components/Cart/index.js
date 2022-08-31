import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from './CartItem'
import './Cart.css'
import PasoPasarela from "../PasoPasarela";

export default function Cart() {
    const { cartData ,clearCart} = useContext(CartContext)

    return (
        <div>
            {(cartData.length > 0) ?
                (
                    <div>
                        <div className="row g-0">
                            <div className="col-sm-6 col-md-8">
                                <table className="table">
                                    <thead className="table-dark">
                                        <tr>
                                            <th scope="col"></th>
                                            <th scope="col" className="text-center">Imagen</th>
                                            <th scope="col" className="text-center">Nombre</th>
                                            <th scope="col" className="text-center">Cantidad</th>
                                            <th scope="col" className="text-center">Precio unidad</th>
                                            <th scope="col" className="text-center">Precio total</th>
                                            <th scope="col" className="text-center"><button onClick={clearCart} className="btn btn-dark">vaciar carrito</button></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {cartData.map((item, Index) =>
                                            <CartItem key={Index} item={item.item} />
                                        )}
                                    </tbody>
                                </table>
                            </div>
                            <div className="col-6 col-md-4">
                                <PasoPasarela/>
                            </div>
                        </div>
                    </div>
                )
                :
                <h3>No hay Elementos en el Cart</h3>
            }
        </div>
    )
}