import React from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'



function NavList() {
    return (
        <div>
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">Rentcar</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/'>Home</Nav.Link>
        <Nav.Link as={Link} to='/users'>Liste of Users</Nav.Link>
   
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

            
        </div>
    )
}

export default NavList
