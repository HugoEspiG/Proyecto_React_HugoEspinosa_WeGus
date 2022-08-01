import Container from "../Container";
import "./ItemListContainer.css"

export default function ItemListContainer(props){
    return  (
    <div class="container">
        <div class="row align-items-start">
            <div  class="col estilos">
                <Container texto={props.items[0]} stock={props.stock[0]}></Container>
            </div>
            <div  class="col estilos">
                <Container texto={props.items[1]} stock={props.stock[1]}></Container>
            </div>
            <div  class="col estilos">
                <Container texto={props.items[2]} stock={props.stock[2]}></Container>
            </div>
        </div>
    </div>    
    )            
}