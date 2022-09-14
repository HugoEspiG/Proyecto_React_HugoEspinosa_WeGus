import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

export default function ResumenCompra() {
    const {totalPrecio} = useContext(CartContext)
    return (
        <div>
            <h2>Resumen Producto</h2>
            <div align="start">
                <p>Subtotal: {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "COP",
                  maximumSignificantDigits: 6,
                }).format(totalPrecio)}</p>
                <p>Impuesto: {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "COP",
                  maximumSignificantDigits: 6,
                }).format(totalPrecio * 0.19)}</p>
                <h3>Total: {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "COP",
                  maximumSignificantDigits: 6,
                }).format(totalPrecio + (totalPrecio * 0.19))}</h3>
            </div>
        </div>
    )
}