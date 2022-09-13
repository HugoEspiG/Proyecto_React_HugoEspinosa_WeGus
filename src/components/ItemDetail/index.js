import Imagen from "../Imagen";
import ItemCount from "../ItemCount";
import "./ItemDetail.css";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from '../../context/CartContext'

export default function ItemDetail(props) {

    const [addedToCart, setAddedToCart] = useState(false);
    const navigateFn = useNavigate();
    const { addCartItem, isInCart } = useContext(CartContext);

    const onAddItems = (quantityToAdd) => {
        addCartItem({ item: props.item, quantity: quantityToAdd })
        setAddedToCart(true);
    }
    const goCart = () => {
        navigateFn(`/Cart`)
    }
    const goBack = () => {
        navigateFn(`/`)
    }
    return (
        <div className="row g-0">
            <h2>Detalles</h2>
            <div className="col-sm-6 col-md-8">
                <Imagen src={props.item.img} tam='lg' ubi='mx-auto d-block'></Imagen>
            </div>
            <div className="col-6 col-md-4">
                <h2>{props.item.nombre}</h2>
                <h4>{"COP " + props.item.precio}</h4>
                <p className="text-muted">{"Lleva un maximo de " + props.item.stock + " prendas"}</p>
                <p className="text-dark">{props.item.descripcion}</p>
                {(props.item.stock > 0) ? (
                        addedToCart?(
                    <div className = "d-grid gap-2" >
                        <div>
                            <button onClick={goCart} className="btn btn-dark btn btn-secondary button-tam">Ir al Carrito</button>
                        </div>
                        <div>
                            <button onClick={goBack} className="btn btn-dark btn btn-secondary button-tam">Seguir Comprando</button>
                        </div>
                    </div>
            ) : (
            <div>
                {
                    isInCart(props.item) ?
                        <ItemCount stock={props.item.stock} onAddToCart={onAddItems}></ItemCount>
                        :
                        <ItemCount stock={props.item.stock} onAddToCart={onAddItems}></ItemCount>
                }
            </div>)
            ):
            (
            <div>
                <button className=" btn btn-danger" disabled={true}>Producto sin stock</button>
            </div>
            )
                }
        </div>
        </div >
    )

}