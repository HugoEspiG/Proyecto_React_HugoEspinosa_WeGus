import {useState} from 'react';
import "./ItemCount.css"

function Contador(props){
    const [contador,setContador]=useState(0);
    return(
    <div>
        <div class="btn-group w-100 p-3" role="group" aria-label="Basic example">
            <button onClick={()=>{(props.stock>contador)?setContador(contador+1):setContador(contador)}} class="border border-dark tam rounded-start border-end-0 bg-transparent">+</button>
            <p class="border border-dark tam center border-end-0 border-start-0 bg-transparent" >{contador}</p>
            <button onClick={()=>{(contador>0)?setContador(contador-1):setContador(contador)}} class="border border-dark tam rounded-end border-start-0 bg-transparent">-</button>
        </div>
        <div>
            <button onClick={()=>{props.onAddToCart(contador)}}class="btn btn-dark bi bi-cart-plus btn btn-secondary button-tam"> Agregar </button>
        </div>
    </div>
    );
}

export default Contador;