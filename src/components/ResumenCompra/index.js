import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function ResumenCompra() {
    const {totalPrecio} = useContext(CartContext)
    return (
        <div>
            <h2>Resumen Producto</h2>
            <div align="end">
                <p>Subtotal: {totalPrecio}</p>
                <p>Impuesto: {totalPrecio * 0.19}</p>
                <h3>Total: {totalPrecio + (totalPrecio * 0.19)}</h3>
            </div>
        </div>
    )
}