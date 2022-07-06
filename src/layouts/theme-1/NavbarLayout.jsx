import React from 'react';
import { Navbar, Container, Nav, } from 'react-bootstrap'
import { Routes, Route, Link } from 'react-router-dom';
const NavbarLayout = () => {
    return (
        <>
            < Routes>
                <Route path='/' />


            </Routes>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand >EfacPlus</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/clientes">Clientes</Nav.Link>
                        <Nav.Link as={Link} to="/configuraciones">Configuraciones</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    )
}

export default NavbarLayout