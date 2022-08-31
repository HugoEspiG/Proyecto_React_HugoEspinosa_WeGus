
export default function Identificacion() {
    return (
        <form className="row g-3 needs-validation" novalidate>
            <div className="col-md-6">
                <label for="validationCustom01" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="nombre" required />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-6">
                <label for="validationCustom02" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="apellido" required />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-6">
                <label for="validationCustomUsername" className="form-label">Email</label>
                <div className="input-group has-validation">
                    <span class="input-group-text" id="inputGroupPrepend">@</span>
                    <input type="text" classNameName="form-control" id="email" aria-describedby="inputGroupPrepend" required />
                    <div className="invalid-feedback">
                        Please choose a username.
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                <label for="validationCustom02" className="form-label">Celular</label>
                <input type="number" className="form-control" id="telefono" required />
                <div className="valid-feedback">
                    Looks good!
                </div>
            </div>
            <div className="col-md-6">
                <label for="validationCustom03" className="form-label">Direccion</label>
                <input type="text" className="form-control" id="ciudad" required />
                <div className="invalid-feedback">
                    Please provide a valid city.
                </div>
            </div>
            <div className="col-md-3">
                <label for="validationCustom04" className="form-label">Departamento</label>
                <select className="form-select" id="departamento" required>
                    <option selected disabled value="">Choose...</option>
                    <option>Bogotá D.C</option>
                    <option>Medellin</option>
                    <option>Bucaramanga</option>
                    <option>Cucuta</option>
                    <option>Cali</option>
                </select>
                <div className="invalid-feedback">
                    Please select a valid state.
                </div>
            </div>
            <div className="col-md-3">
                <label for="validationCustom05" className="form-label">Zip</label>
                <input type="text" className="form-control" id="zip" required />
                <div className="invalid-feedback">
                    Please provide a valid zip.
                </div>
            </div>
            <div className="col-12">
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required />
                    <label className="form-check-label" for="invalidCheck">
                        Agree to terms and conditions
                    </label>
                    <div className="invalid-feedback">
                        You must agree before submitting.
                    </div>
                </div>
            </div>
            <div className="col-12">
                <button className="btn btn-primary" type="submit">Submit form</button>
            </div>
        </form>
    )
}