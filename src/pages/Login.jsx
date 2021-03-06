import React from 'react'
import { Link } from 'react-router-dom'
import "../assets/css/login.css"
const Login = () => {
    return (
        <div className='loginmain'>
            <main className="form-signin w-100 m-auto text-center ">
                <form>
                    <Link to="/">
                        <img className="mb-4" src="https://getbootstrap.com/docs/5.2/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57" />
                    </Link>

                    <h1 className="h3 mb-3 fw-normal">Por favor ingrese</h1>

                    <div className="form-floating">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Contraseña</label>
                    </div>

                    <div className="checkbox mb-3">
                        <label>
                            <input type="checkbox" value="remember-me" /> Recuerdame
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Ingresar</button>
                    <p className="mt-5 mb-3 text-muted">© Plus Soluciones, Inc 2022</p>
                </form>
            </main>
        </div>

    )
}

export default Login