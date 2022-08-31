import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import {useNavigate} from "react-router-dom"

export default function PasoPasarela(props) {
    const navigateFn= useNavigate();
    const {totalPrecio} = useContext(CartContext)
    const procedPago = ()=>{
        navigateFn(`/CheckOut`)
    }
    return (
        <div>
            <h2>Resumen Producto</h2>
            <div align="end">
                <p>Subtotal: {totalPrecio}</p>
                <p>Impuesto: {totalPrecio * 0.19}</p>
                <h3>Total: {totalPrecio + (totalPrecio * 0.19)}</h3>
            </div>
            <div  align="end">
                <button onClick={procedPago} className="btn btn-dark" type="submit">Procede al pago</button>
            </div>
        </div>
    )
}