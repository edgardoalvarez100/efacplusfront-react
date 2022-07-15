import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/login.css"
import axios from 'axios'

export const Registrar = () => {
    const [state, setState] = useState({ nombres: '', apellidos: '', telefono: '', email: '', password: '' });
    const [errors, setErrors] = useState(null);
    const [registrado, setRegistrado] = useState(false);

    const inputNombre = (ev) => {
        const nuevoNombre = { ...state, nombres: ev.target.value };
        setState(nuevoNombre);
    }
    const inputApellidos = (ev) => {
        const nuevoApellidos = { ...state, apellidos: ev.target.value };
        setState(nuevoApellidos);
    }
    const inputTelefono = (ev) => {
        const nuevoTelefono = { ...state, telefono: ev.target.value };
        setState(nuevoTelefono);
    }

    const inputEmail = (ev) => {
        const nuevoEmail = { ...state, email: ev.target.value };
        setState(nuevoEmail);
    }

    const inputPassword = (ev) => {
        const nuevoContrasena = { ...state, password: ev.target.value };
        setState(nuevoContrasena);
    }


    const registrarOnsubmit = async (ev) => {
        ev.preventDefault();

        try {
            await axios.post("https://node.edgardoalvarez.com/api/usuario", {
                nombres: state.nombres,
                apellidos: state.apellidos,
                telefono: state.telefono,
                email: state.email,
                password: state.password
            });

            setRegistrado(true);

        } catch (error) {
            console.log(error)
            setErrors(error.message);
        }

    }


    return (
        <div className='loginmain'>
            <main className="form-signin w-100 m-auto text-center ">
                <form onSubmit={registrarOnsubmit}>
                    <Link to="/">
                        <img className="mb-4" src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="Logo" width="72" height="57" />
                    </Link>

                    <h1 className="h3 mb-3 fw-normal">Crear mi cuenta</h1>
                    {
                        errors != null && <div className="alert alert-danger" role="alert">
                            {errors}
                        </div>
                    }


                    <div className="form-floating">
                        <input type="text" className="form-control" id="nombres" placeholder="Nombres" required onChange={inputNombre} />
                        <label htmlFor="nombres">Nombres</label>
                    </div>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="apellidos" placeholder="Apellidos" required onChange={inputApellidos} />
                        <label htmlFor="apellidos">Apellidos</label>
                    </div>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="email" placeholder="Email" required onChange={inputEmail} />
                        <label htmlFor="email">Email</label>
                    </div>

                    <div className="form-floating">
                        <input type="telefono" className="form-control" id="telefono" placeholder="Telefono" required onChange={inputTelefono} />
                        <label htmlFor="telefono">Telefono</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" className="form-control" id="password" placeholder="Password" required onChange={inputPassword} />
                        <label htmlFor="password">Contraseña</label>
                    </div>


                    <button className="w-100 btn btn-lg btn-primary" type="submit">Crear</button>
                    <p className="mt-5 mb-3 text-muted">© Plus Soluciones, Inc 2022</p>
                </form>
            </main>
        </div>
    )
}
