import Imagen from '../Imagen';

export default function CartWidget(){    
    return(
        <button type="button" class="btn btn-light">
            <Imagen src={process.env.PUBLIC_URL+'/Assets/carrito-compras.png'} tam='sm' alt='Carrito de Compras' ubi='end'/>
        </button>
    )

}