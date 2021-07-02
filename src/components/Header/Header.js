import React from 'react';
// import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div>
            <Navbar style={{backgroundColor: '#F5B400'}} expand="lg">
                <Container>
                    <Navbar.Brand style={{color: 'white'}} href="#home"><b>Aayna.ai</b></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav  className="ms-auto">
                            <Nav.Link style={{color: 'white'}} href="#home">About</Nav.Link>
                            <Nav.Link style={{color: 'white'}} href="#link">Contact Us</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;