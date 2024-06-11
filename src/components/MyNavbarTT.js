import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Tooltip, OverlayTrigger, Container } from 'react-bootstrap';
import { IoIosContact } from "react-icons/io";
import { AiFillHome  } from "react-icons/ai";
import { IoNotificationsCircleSharp } from "react-icons/io5";
// import { MdOutlineReportProblem } from "react-icons/md";
import './MyNavbarTT.css';

const MyNavbarTT = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  // Tooltip render function for signaling an issue
  const renderTooltip = props => (
    <Tooltip id="button-tooltip" {...props}>
      Signalez un problème !
    </Tooltip>
  );

  return (
    <Navbar bg="light" expand="lg" className="my-navbar">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src="/recom.png" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/home" className="nav-link">
              <AiFillHome className="icon" />Accueil
            </Link>
            <Link to="/relation" className="nav-link">
              <IoIosContact className="icon" />Relation
            </Link>
            <Link to="/notifications" className="nav-link">
              <IoNotificationsCircleSharp className="icon" />Notification
            </Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Recherche..." className="mr-sm-2" />
            <Button variant="outline-success">Recherche</Button>
          </Form>
          <Nav className="ml-auto">
            <OverlayTrigger placement="bottom" overlay={renderTooltip()}>
              <Link to="/report" className="nav-link">
                <IoNotificationsCircleSharp className="icon" />Signaler
              </Link>
            </OverlayTrigger>
            <NavDropdown title={<span><IoIosContact className="navbar-icon contact-icon" /> Utilisateur</span>} id="nav-dropdown">
              <NavDropdown.Item onClick={toggleModal}>Compte</NavDropdown.Item>
              <NavDropdown.Item onClick={toggleModal}>Deconnexion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbarTT;
