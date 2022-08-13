import Contador from "../ItemCount";
import Imagen from "../Imagen";
import "./Item.css"
import ItemDetailContainer from "../ItemDetailContainer";
import { useNavigate } from "react-router-dom";



function Item(props){

    const navigateFn= useNavigate();
    var aux={
        id: props.id,
        texto: props.texto,
        img: props.src,
        stock: props.stock,
        category: props.category,
        description: props.desc
    };

    const loadUserDetails = ()=>{
        navigateFn(`/Outfits/${aux.category}/${aux.id}`)
    }

    return  (
    <div>
        <div class="card estilos center">
            <p class="card-header bg-opacity-50">{aux.category}</p>
            <div class="mx-auto"><Imagen src={aux.img} tam='md' ubi='mx-auto d-block'></Imagen></div>
            <div class="center">{aux.texto}</div>
            <button onClick={loadUserDetails} class="center spacing-btn border border-secundary rounded bg-light">Ver detalle del producto</button>
            <p class="card-footer bg-opacity-50">stock disponible: {aux.stock}</p>
        </div>
    </div>
    )
}

export default Item;