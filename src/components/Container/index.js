import Contador from "../ItemCount";
import Imagen from "../Imagen";
import "./Container.css"


function Container(props){
    return  <div>
                <div class="mx-auto"><Imagen src={process.env.PUBLIC_URL+'/Assets/'+props.texto+'.jpg'} tam='md' ubi='mx-auto d-block'></Imagen></div>
                <div class="mx-auto">{props.texto}
                    <div class="mx-auto"><Contador stock={props.stock}/></div>
                </div>
            </div>
}

export default Container;