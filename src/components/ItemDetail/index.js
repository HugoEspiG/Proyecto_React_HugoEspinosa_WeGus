import Imagen from "../Imagen";
import ItemCount from "../ItemCount";
import "./ItemDetail.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ItemDetail(props){
    const nf = new Intl.NumberFormat('en-US')
    const [addedToCart, setAddedToCart] = useState(false);
    const navigateFn= useNavigate();
    const onAddItems = () => {
        setAddedToCart(true);
      };
    const goCart = ()=>{
        navigateFn(`/Cart`)
    }
    const goBack = ()=>{
        navigateFn(`/`)
    }

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
                {addedToCart?
                <div class="d-grid gap-2">
                    <div>
                    <button onClick={goCart} class="btn btn-dark btn btn-secondary button-tam">Ir al Carrito</button>
                    </div>
                    <div>    
                    <button onClick={goBack} class="btn btn-dark btn btn-secondary button-tam">Seguir Comprando</button>
                    </div>
                </div>:
                <div>
                <ItemCount stock={nf.format(props.item.stock)} onAddToCart={onAddItems}></ItemCount> 
                </div>
                }    
            </div>
        </div>
    )

}