import Identificacion from "../Identificacion/Identificacion";
import ResumenCompra from "../ResumenCompra";

export default function CheckOut(){

    return(
        <div className="row g-0">
            <div className="col-sm-6 col-md-8">
            <Identificacion/>
            </div>
            <div className="col-6 col-md-4">
            <ResumenCompra/>
            </div>
        </div>
    )
}