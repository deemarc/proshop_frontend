import { Col, Container, Navbar, Nav} from 'react-bootstrap'
import React from 'react'

function Header() {
    return (
        <header>
                <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>
                    <Container>
                    <Navbar.Brand>
                            <img
                                src="/shop.svg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Proshop"
                            />
                            {' '}
                            Proshop
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/cart">Cart</Nav.Link>
                                <Nav.Link href="/login"><i className="fas fa-user"></i>Logoin</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                    
                </Navbar>
        </header>
    )
}

export default Header
