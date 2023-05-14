import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Footer from '../Components/Footer.jsx';
import Menu from '../Components/Navbar.jsx';
function Consultanta() {
    return (
      <div>
        <Menu></Menu>
        <h1>Consultanta Page</h1>
        <p>Get in touch with me.</p>
        <Footer />

      </div>
      
    );
  }
  export default Consultanta;