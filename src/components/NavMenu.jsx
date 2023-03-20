import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export const NavMenu = () => {
  return (
    <div>
       <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand href="#home">Memoryte Games</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home">Memory</Nav.Link>
                <Nav.Link href="#link">Sprites!</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>

    </div>
  )

}

export default NavMenu

