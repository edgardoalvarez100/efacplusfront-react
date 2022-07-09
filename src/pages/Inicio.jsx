
import React from 'react'
import { Link } from 'react-router-dom'
import Front from '../layouts/theme-1/Front'

const Inicio = () => {
    return (
        <Front >
            <div className='container'>
                <div className="row py-5">
                    <div className="col  p-5 mb-4 bg-light rounded-3">
                        <div className="jumbotron">
                            <h1 className="display-5 fw-bold">Realiza Facturas fácilmente!</h1>

                            <p className='col-md-8 fs-4'>
                                Crea tus facturas y cuentas de cobro muy fácil, exportarlas y envíalas, no más documentos extraviados
                                o información de tus clientes que no sabes donde quedó!</p>
                            <Link className="btn btn-primary btn-lg" to="/registrar" role="button">Crear mi cuenta</Link>
                        </div>
                    </div>
                </div>

                <div className="row" id='caracteristicas' data-bs-spy="scroll">
                    <div className="container px-4 py-5" id="featured-3">
                        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                            <div className="feature col">
                                <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white fs-2 mb-3">
                                    <svg className="bi" width="1em" height="1em"><use xlinkHref="#collection"></use></svg>
                                </div>
                                <h2>Diseño amigable</h2>
                                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                <a href="/" className="icon-link d-inline-flex align-items-center">
                                    Call to action
                                    <svg className="bi" width="1em" height="1em"><use xlinkHref="#chevron-right"></use></svg>
                                </a>
                            </div>
                            <div className="feature col">
                                <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white fs-2 mb-3">
                                    <svg className="bi" width="1em" height="1em"><use xlinkHref="#people-circle"></use></svg>
                                </div>
                                <h2>Facturas/Cuentas de cobro</h2>
                                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                <a href="/" className="icon-link d-inline-flex align-items-center">
                                    Call to action
                                    <svg className="bi" width="1em" height="1em"><use xlinkHref="#chevron-right"></use></svg>
                                </a>
                            </div>
                            <div className="feature col">
                                <div className="feature-icon d-inline-flex align-items-center justify-content-center bg-primary bg-gradient text-white fs-2 mb-3">
                                    <svg className="bi" width="1em" height="1em"><use xlinkHref="#toggles2"></use></svg>
                                </div>
                                <h2>Reportes</h2>
                                <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
                                <a href="/" className="icon-link d-inline-flex align-items-center">
                                    Call to action
                                    <svg className="bi" width="1em" height="1em"><use xlinkHref="#chevron-right"></use></svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </ Front>
    )
}

export default Inicio