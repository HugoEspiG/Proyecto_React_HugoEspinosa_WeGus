import { useState } from "react"
import Orden from "../Orden/Orden"
import "./Identificacion.css"

export default function Identificacion() {




    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        ciudad: '',
        departamento: '',
        zip: ''
    })

    const handleInputChange = (ev) => {
        setDatos({
            ...datos,
            [ev.target.name]: ev.target.value
        })
    }
    return (
        <form onSubmit={ev => {
            ev.preventDefault();
        }} className='row '>
            <div className="form-floating  col-md-4 div-m">
                <input
                    type='text'
                    name="nombre"
                    placeholder="Nombre"
                    autoComplete="on"
                    value={datos.nombre}
                    onChange={handleInputChange}
                    className='form-control'
                ></input>
                <label htmlFor="floatingInputGrid">Nombre</label>
            </div>
            <div className="form-floating col-md-4 div-m">
                <input
                    type='text'
                    name="apellido"
                    placeholder="Apellido"
                    autoComplete="on"
                    value={datos.apellido}
                    onChange={handleInputChange}
                    className='form-control'
                ></input>
                <label htmlFor="floatingInputGrid">Apellido</label>
            </div>
            <div className="col-md-6 form-floating div-m">
                <input
                    type='email'
                    name="email"
                    placeholder="@email.com"
                    autoComplete="on"
                    value={datos.email}
                    onChange={handleInputChange}
                    className='form-control'
                ></input>
                <label htmlFor="floatingInputGrid">@email.com</label>
            </div>
            <div className="form-floating col-md-4 div-m">
                <input
                    type='number'
                    name="telefono"
                    placeholder="Telefono"
                    autoComplete="on"
                    value={datos.telefono}
                    onChange={handleInputChange}
                    className='form-control'
                ></input>
                <label htmlFor="floatingInputGrid">Telefono</label>
            </div>
            <div className="form-floating col-md-4 div-m">
                <select
                    className="form-select"
                    name="departamento"
                    value={datos.departamento}
                    onChange={handleInputChange}>
                    <option defaultValue=""></option>
                    <option>Bogota D.C</option>
                    <option>Antioquia</option>
                    <option>Cundinamarca</option>
                    <option>Valle del cauca</option>
                    <option>Santander</option>
                    <option>Atlantico</option>
                </select>
                <label htmlFor="floatingInputGrid">Departamento</label>
            </div>
            <div className="form-floating col-md-4 div-m">
                <input
                    type='text'
                    name="ciudad"
                    placeholder="Ciudad"
                    autoComplete="on"
                    value={datos.ciudad}
                    onChange={handleInputChange}
                    className='form-control'
                ></input>
                <label htmlFor="floatingInputGrid"> Ciudad</label>
            </div>
            <div className="form-floating col-md-2 div-m">
                <input
                    type='text'
                    name="zip"
                    placeholder="ZIP"
                    autoComplete="on"
                    value={datos.zip}
                    onChange={handleInputChange}
                    className='form-control'
                ></input>
                <label htmlFor="floatingInputGrid">ZIP</label>
            </div>
            <div align="col-12 div-m">
                <Orden datos={datos}/>
            </div>
        </form>
    )
}