import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/login.css"

export const Registrar = () => {
    return (
        <div className='loginmain'>
            <main className="form-signin w-100 m-auto text-center ">
                <form>
                    <Link to="/">
                        <img className="mb-4" src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    </Link>

                    <h1 className="h3 mb-3 fw-normal">Crear mi cuenta</h1>

                    <div className="form-floating">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Nombre completo" />
                        <label for="floatingInput">Nombre</label>
                    </div>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email</label>
                    </div>

                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Contraseña</label>
                    </div>


                    <button className="w-100 btn btn-lg btn-primary" type="submit">Crear</button>
                    <p className="mt-5 mb-3 text-muted">© Plus Soluciones, Inc 2022</p>
                </form>
            </main>
        </div>
    )
}
