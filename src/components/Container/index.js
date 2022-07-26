import Imagen from "../Imagen";
import "./Container.css"


function Container(props){
    return  <div class="estilos">
                <Imagen src={process.env.PUBLIC_URL+'/Assets/'+props.texto+'.jpg'} tam='md' ubi='start'></Imagen>
                <div class="centrar">{props.texto}</div>
            </div>
}

export default Container;