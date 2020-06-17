import React from 'react';
import { Navbar, NavDropdown, Nav } from 'react-bootstrap'

const NavBar = (props) => {
    console.log(props.style);
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand >DAPP CARE</Navbar.Brand>
            <Navbar.Text> Hello, {props.name}</Navbar.Text>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link>Home</Nav.Link>
                    <Nav.Link href="#link">Doctors</Nav.Link>
                    <NavDropdown title="About" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Developer</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="#link">Sign Out</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}


export default NavBar;