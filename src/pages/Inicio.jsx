
import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Front from '../layouts/theme-1/Front'

const Inicio = () => {
    return (
        <Front >
            <div className='container'>
                <div className="row py-5">
                    <div className="col  p-5 mb-4 bg-light rounded-3">
                        <div className="jumbotron">
                            <h1 className="display-5 fw-bold">Facturación mas facil</h1>

                            <p className='col-md-8 fs-4'>Hemos desarrollado este sistema para crear facturas y cuentas de cobro mas facil, totalmente gratis. Puedes empezar probando el sistema registrate.</p>
                            <Link className="btn btn-primary btn-lg" to="/" role="button">Learn more</Link>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col">
                        <Card >
                            <Card.Img variant="top" src="https://via.placeholder.com/1920x1080" />
                            <Card.Body>
                                <Card.Title>Diseños amigables</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant='primary'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="col">
                        <Card >
                            <Card.Img variant="top" src="https://via.placeholder.com/1920x1080" />
                            <Card.Body>
                                <Card.Title>Envios por Correo</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant='primary'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="col">
                        <Card >
                            <Card.Img variant="top" src="https://via.placeholder.com/1920x1080" />
                            <Card.Body>
                                <Card.Title>Pagos en linea</Card.Title>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                </Card.Text>
                                <Button variant='primary'>Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

            </div>
        </ Front>
    )
}

export default Inicio