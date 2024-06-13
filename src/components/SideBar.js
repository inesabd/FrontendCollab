// import React from 'react';
import { Nav } from 'react-bootstrap';
import './SideBar.css'; // Assurez-vous de créer et de lier ce fichier CSS

const Sidebar = () => {
  return (
    <div className="sidebar d-flex flex-column vh-100">
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/develop" className="sidebar-item">Publier une ressource</Nav.Link>
        <Nav.Link href="/contact" className="sidebar-item">Liste de contact</Nav.Link>
        <Nav.Link href="/favorites" className="sidebar-item">Ressources favorites</Nav.Link>
        <Nav.Link href="/trash" className="sidebar-item">Corbeille</Nav.Link>
      </Nav>
    </div>
  );
};

export default Sidebar;
