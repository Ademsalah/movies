import React from 'react'
import { Nav,Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
      <Navbar bg="dark" data-bs-theme="dark">

          <Navbar.Brand href="#home">Ciné</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">movies</Nav.Link>
            <Nav.Link href="#features">series</Nav.Link>
            <Nav.Link href="#pricing">anime</Nav.Link>
          </Nav>
        
      </Navbar>
      
    
    
  );
}