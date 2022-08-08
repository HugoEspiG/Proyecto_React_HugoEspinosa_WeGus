import Imagen from "../Imagen";


export default function ItemDetail(props){
    return(
        <div class="row g-0">
            <h2>Detalles</h2>
            <div class="col-sm-6 col-md-8">
                <Imagen src={props.item.img} tam='lg' ubi='mx-auto d-block'></Imagen>
            </div>
            <div class="col-6 col-md-4">
            <p>{props.item.texto}</p>
            <p>{"Categoria: "+props.item.category}</p>
            <p>{"Stock: "+props.item.stock}</p>
            <p>{"description: "+props.item.description}</p>
            </div>
        </div>
    )

}