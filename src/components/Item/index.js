import Contador from "../ItemCount";
import Imagen from "../Imagen";
import "./Item.css"
import ItemDetailContainer from "../ItemDetailContainer";
import { useState } from "react";



function Item(props){
    const [estado,setEstado]=useState(false);
    var aux={
        id: props.id,
        texto: props.texto,
        img: props.src,
        stock: props.stock,
        category: props.category,
        description: props.desc
    };
    return  (
    <div>
        <div class="card estilos center">
            <p class="card-header bg-opacity-50">{aux.category}</p>
            <div class="mx-auto"><Imagen src={aux.img} tam='md' ubi='mx-auto d-block'></Imagen></div>
            <div class="center">{aux.texto}</div>
            <button onClick={()=>{setEstado(true)}} class="center spacing-btn border border-secundary rounded bg-light">Ver detalle del producto</button>
            <p class="card-footer bg-opacity-50">stock disponible: {aux.stock}</p>
        </div>
       {estado ?<ItemDetailContainer item={()=>{return aux}}/>:<p>Aca se mostraran los Detalles</p>}
    </div>
    )
}

export default Item;