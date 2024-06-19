import React from 'react';
import { Nav } from 'react-bootstrap';
import './ProfilNav.css';

const ProfilNav = () => {
  return (
    <Nav variant="tabs" className="justify-content-center profile-nav">
      <Nav.Item>
        <Nav.Link href="#posts">Post</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#media">Média</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#likes">J'aime</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="#favorites">Favoris</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}

export default ProfilNav;
