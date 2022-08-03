import { createEvent } from "@testing-library/react"
import Item from "../Item"
import "./ItemList.css"

export default function ItemList(props){
    return(
    <div class="row align-items-start">
        {props.data.map(cerv=>
        <div class="col estilos" align="center">
            <Item texto={cerv.nombre} src={cerv.img} stock={cerv.stock} category={cerv.category}></Item>
        </div>)}
    </div>
    )
}