import { useNavigate } from "react-router-dom";
import"./Item.css";

function Item(props) {

    const navigateFn = useNavigate();
    var aux = {
        id: props.id,
        texto: props.texto,
        img: props.src,
        stock: props.stock,
        category: props.category,
        description: props.desc
    };

    const loadUserDetails = () => {
        navigateFn(`/Outfits/${aux.category}/${aux.id}`)
    }

    return (
        <div>
            <div className="card">
                <img src={aux.img} className="card-img itemImg" alt="" />
                <div className="card-img-overlay content">
                    <div className="center">{aux.texto}</div>
                    <button onClick={loadUserDetails} className="btn btn-outline-dark">Ver detalle del producto</button>
                </div>
            </div>
        </div>
    )
}

export default Item;