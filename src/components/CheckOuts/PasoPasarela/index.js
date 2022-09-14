import { useNavigate } from "react-router-dom"
import ResumenCompra from "../ResumenCompra";
import "./PasoPasarela.css"

export default function PasoPasarela(props) {
    const navigateFn = useNavigate();
    const procedPago = () => {
        navigateFn(`/CheckOut`)
    }
    return (
        <div className="border border-dark border border-2 rounded">
            <ResumenCompra/>
            <div align="center">
                <button onClick={procedPago} className="btn btn-dark marginb" type="submit">Procede al pago</button>
            </div>
        </div>
    )
}