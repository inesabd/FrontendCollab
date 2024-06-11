import React, { useState } from 'react';
import { Navbar, Nav, Form, NavDropdown, Tooltip, OverlayTrigger } from 'react-bootstrap';
import { IoIosContact } from "react-icons/io";
import { AiFillHome } from "react-icons/ai";
import { FaInfoCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

import './MyNavbar.css';


const MyNavbar = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  // Tooltip render function
  const renderTooltip = props => (
    <Tooltip id="button-tooltip" {...props}>
      signalez un problème !
     </Tooltip>
  );

  return (
    <Navbar bg="light" expand="lg" className="my-navbar">
      <Navbar.Brand href="#home">
      <div>
      <img src="/recom.png" alt="Logo" />
    </div>
</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          
            <Link to="/home" className="nav-link">
              <AiFillHome className="icon" />
              Accueil
            </Link>
          
          <OverlayTrigger
            placement="bottom"
            overlay={renderTooltip({ children: 'Learn more about us!' })}
          >
            <Link to="/about" className="nav-link">
              <FaInfoCircle className="icon" />
              Signaler
            </Link>
          </OverlayTrigger>
        
        </Nav>
        <Form inline className="ml-auto">
          <NavDropdown 
            title={<span><IoIosContact className="navbar-icon contact-icon" /> Utilisateur</span>} 
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item onClick={toggleModal}>Creation de compte </NavDropdown.Item>
         
          </NavDropdown>
        </Form>
      </Navbar.Collapse>
     
    </Navbar>
  );
}

export default MyNavbar;