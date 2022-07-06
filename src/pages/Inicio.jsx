
import React from 'react'
import { Card, Button } from 'react-bootstrap'


const Inicio = () => {
    return (
        <>
            <div className='container'>
                <div className="row">
                    <div className="col py-4">
                        <div className="jumbotron">
                            <h1 className="display-4">Hello, world!</h1>
                            <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                            <hr className="my-4" />
                            <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col">
                        <Card >
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
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
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
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
                            <Card.Img variant="top" src="holder.js/100px180" />
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
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
        </>
    )
}

export default Inicio