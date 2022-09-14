import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { doc, setDoc, collection, updateDoc, increment, serverTimestamp } from "firebase/firestore";
import { DB } from "../../../api/FireBaseApi"
import "./Identificacion.css"
import { useForm } from "react-hook-form"

export default function Identificacion() {

    const { register, handleSubmit, formState: { errors } } = useForm()

    const navigateFn = useNavigate();
    const { cartData, clearCart, totalPrecio } = useContext(CartContext)

    const createOrder = (datos) => {
        const itemsForDB = cartData.map(item => ({
            id: item.item.item.id,
            nombre: item.item.item.nombre,
            precio: item.item.item.precio,
            cantidad: item.item.quantity
        }));
        let order = {
            buyer: datos,
            items: itemsForDB,
            total: totalPrecio,
            date: serverTimestamp()
        };


        const createOrderInFirestore = async () => {
            // Add a new document with a generated id
            const newOrderRef = doc(collection(DB, "Orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFirestore()
            .then((result) => {
                alert("tu orden ha sido creada con el id" + result.id);
                cartData.forEach(async (item) => {
                    const itemRef = doc(DB, "Products", item.item.item.id);
                    await updateDoc(itemRef, {
                        stock: increment(-item.item.quantity),
                    });
                });
                clearCart()
                navigateFn(`/`)
            })
            .catch((err) => console.log("error" + err));
    }

    const customSubmit = (data) => {
        (data.email==data.email2)?
        createOrder(data):alert("El email no coinciden con la confirmacion")
    }
    return (
        <form onSubmit={handleSubmit(customSubmit)} className='row '>
            <div className="form-floating  col-md-4 div-m">
                <input
                    type='text'
                    {...register('nombre', { required: true })}
                    placeholder="Nombre"
                    className='form-control'
                ></input>
                {errors.nombre && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                <label htmlFor="floatingInputGrid">Nombre</label>
            </div>
            <div className="form-floating col-md-4 div-m">
                <input
                    type='text'
                    {...register('apellido', { required: true })}
                    placeholder="Apellido"
                    autoComplete="on"
                    className='form-control'
                ></input>
                {errors.apellido && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                <label htmlFor="floatingInputGrid">Apellido</label>
            </div>
            <div className="col-md-6 form-floating div-m">
                <input
                    type='email'
                    {...register('email', { required: true })}
                    placeholder="@email.com"
                    autoComplete="on"
                    className='form-control'
                ></input>
                {errors.email && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                <label htmlFor="floatingInputGrid">@email.com</label>
            </div>
            <div className="col-md-6 form-floating div-m">
                <input
                    type='email'
                    {...register('email2', { required: true })}
                    placeholder="confirmacion email"
                    autoComplete="on"
                    className='form-control'
                ></input>
                {errors.email && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                <label htmlFor="floatingInputGrid">confirmacion email</label>
            </div>
            <div className="form-floating col-md-4 div-m">
                <input
                    type='number'
                    {...register('telefono', { required: true })}
                    placeholder="Telefono"
                    autoComplete="on"
                    className='form-control'
                ></input>
                {errors.telefono && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                <label htmlFor="floatingInputGrid">Telefono</label>
            </div>
            <div className="form-floating col-md-4 div-m">
                <select
                    className="form-select"
                    {...register('departamento', { required: true })}>
                    <option defaultValue=""></option>
                    <option>Bogota D.C</option>
                    <option>Antioquia</option>
                    <option>Cundinamarca</option>
                    <option>Valle del cauca</option>
                    <option>Santander</option>
                    <option>Atlantico</option>
                </select>
                {errors.departamento && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                <label htmlFor="floatingInputGrid">Departamento</label>
            </div>
            <div className="form-floating col-md-4 div-m">
                <input
                    type='text'
                    {...register('ciudad', { required: true })}
                    placeholder="Ciudad"
                    autoComplete="on"
                    className='form-control'
                ></input>
                {errors.ciudad && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                <label htmlFor="floatingInputGrid"> Ciudad</label>
            </div>
            <div className="form-floating col-md-6 div-m">
                <input
                    type='text'
                    {...register('direccion', { required: true })}
                    placeholder="Direccion"
                    autoComplete="on"
                    className='form-control'
                ></input>
                {errors.direccion && <small className="text-danger fw-bold">El campo no puede estar vacio</small>}
                <label htmlFor="floatingInputGrid"> Direccion</label>
            </div>
            <div className="form-floating col-md-2 div-m">
                <input
                    type='text'
                    {...register('zip')}
                    placeholder="ZIP"
                    autoComplete="on"
                    className='form-control'
                ></input>
                <label htmlFor="floatingInputGrid">ZIP</label>
            </div>
            <div align="col-12 div-m">
                <button className="btn btn-dark" type="submit">Procede al pago</button>
            </div>
        </form>
    )
}