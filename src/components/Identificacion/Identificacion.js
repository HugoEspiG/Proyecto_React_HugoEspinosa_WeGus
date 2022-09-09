import { useState} from "react"

export default function Identificacion() {


    const validarDatos = (data)=>{
        console.log(data)
    }


    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        ciudad: '',
        departamento: '',
        zip: ''
    })

    const handleInputChange=(ev)=>{
        setDatos({
            ...datos,
            [ev.target.name]:ev.target.value
        })
    }
    return (
        <form onSubmit={ev=>{
            ev.preventDefault();
            validarDatos(datos);
        }}>
            <div>
                <label>Nombre</label>
                <input
                type='text'
                name="nombre"
                placeholder="Email"
                autoComplete="on"
                value={datos.nombre}
                onChange={handleInputChange}
                ></input>
            </div>
            <div>
                <label>Nombre</label>
                <input
                type='text'
                name="apellido"
                placeholder="Email"
                autoComplete="on"
                value={datos.apellido}
                onChange={handleInputChange}
                ></input>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    )
}