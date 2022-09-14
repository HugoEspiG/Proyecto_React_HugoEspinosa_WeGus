import Identificacion from "../Identificacion/Identificacion";
import ResumenCompra from "../ResumenCompra";

export default function CheckOut(){

    return(
        <div className="row g-0">
            <div className="col-sm-6 col-md-7">
            <Identificacion/>
            </div>
            <div className="col-6 col-md-4 border border-dark border border-2 rounded">
            <ResumenCompra/>
            </div>
        </div>
    )
}