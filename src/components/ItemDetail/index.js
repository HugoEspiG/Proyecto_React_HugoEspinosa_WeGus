import Imagen from "../Imagen";
import ItemCount from "../ItemCount";
import "./ItemDetail.css";

export default function ItemDetail(props){
    const nf = new Intl.NumberFormat('en-US')
    return(
        <div class="row g-0">
            <h2>Detalles</h2>
            <div class="col-sm-6 col-md-8">
                <Imagen src={props.item.img} tam='lg' ubi='mx-auto d-block'></Imagen>
            </div>
            <div class="col-6 col-md-4">
            <h2>{props.item.nombre}</h2>
            <h4>{"COP "+props.item.precio}</h4>
            <p class="text-muted">{"Lleva un maximo de "+props.item.stock+" prendas"}</p>
            <p class="text-dark">{props.item.descripcion}</p>
            <ItemCount stock={nf.format(props.item.stock)}></ItemCount>
            <button class="btn btn-dark bi bi-cart-plus btn btn-secondary button-tam"> Agregar </button>
            </div>
        </div>
    )

}