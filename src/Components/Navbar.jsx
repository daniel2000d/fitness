import { useState } from 'react';
import { Navbar, Nav, Container, NavDropdown, Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Menu() {
  const [showCart, setShowCart] = useState(false);

  const handleCartClose = () => setShowCart(false);
  const handleCartShow = () => setShowCart(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" sticky="top" className="navbar-custom">
        <Container>
          <Navbar.Brand href="/">My Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <NavDropdown title="Fitness" id="basic-nav-dropdown" className="my-dropdown">
                <NavDropdown.Item href="/fitness/training">Antrenament</NavDropdown.Item>
                <NavDropdown.Item href="/fitness/diets">Diete</NavDropdown.Item>
                <NavDropdown.Item href="/fitness/consultation">Apel de consultanță</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
              <Button variant="outline-light" onClick={handleCartShow}>
                <i className="bi bi-cart"></i>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Modal show={showCart} onHide={handleCartClose}>
        <Modal.Header closeButton>
          <Modal.Title>Shopping Cart</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Here are the items in your cart:</p>
          {/* Insert code to display items in cart here */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCartClose}>Close</Button>
          <Button variant="primary">Checkout</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Menu;
