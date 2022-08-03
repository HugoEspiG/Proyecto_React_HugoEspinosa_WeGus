import Contador from "../ItemCount";
import Imagen from "../Imagen";
import "./Item.css"


function Item(props){
    return  <div class="card estilos center">
                <p class="card-header bg-opacity-50">{props.category}</p>
                <div class="mx-auto"><Imagen src={props.src} tam='md' ubi='mx-auto d-block'></Imagen></div>
                <div class="center">{props.texto}</div>
                <button class="center spacing-btn border border-secundary rounded bg-light">Ver detalle del producto</button>
                <p class="card-footer bg-opacity-50">stock disponible: {props.stock}</p>
            </div>
}

export default Item;