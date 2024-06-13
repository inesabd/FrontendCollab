// src/Page/HomePage.js
import React from 'react';
import Navbar from '../components/MyNavbarTT';
import Sidebar from '../components/SideBar';
import { Card, Button, Container, Row, Col, Nav } from 'react-bootstrap';

const invitations = [
  {
    id: 1,
    name: 'Fabien Raynaud',
    title: 'R&D Software Project Manager ★ Startup Advisor',
    mutualConnections: 'Sonia Habtiche et 3 autres personnes',
    imageUrl: 'path/to/image1.jpg'
  },
  {
    id: 2,
    name: 'Karim Boutih',
    title: 'Master\'s student in Computer and Network Systems at Paris-Saclay University',
    mutualConnections: 'Lyes Boubekeur CHERID et 14 autres personnes',
    imageUrl: 'path/to/image2.jpg'
  },
  {
    id: 3,
    name: 'Mohammed IKHERBANE',
    title: 'Étudiant à L\'INSEEC MSc & MBA, je suis à la recherche d\'un contrat...',
    mutualConnections: '',
    imageUrl: 'path/to/image3.jpg'
  }
];

const RelationsPage = () => {
  return (
    <Container className="mt-4">
      <Nav variant="tabs" defaultActiveKey="#develop">
        <Nav.Item>
          <Nav.Link href="#develop">Développer</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#resume">Reprendre contact</Nav.Link>
        </Nav.Item>
      </Nav>
      
      <h3 className="my-4">Invitations</h3>
      
      {invitations.map(invitation => (
        <Card key={invitation.id} className="mb-3">
          <Card.Body>
            <Row>
              <Col md={2}>
                <img src={invitation.imageUrl} alt={invitation.name} className="img-fluid rounded-circle" />
              </Col>
              <Col md={8}>
                <Card.Title>{invitation.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{invitation.title}</Card.Subtitle>
                <Card.Text>{invitation.mutualConnections}</Card.Text>
              </Col>
              <Col md={2} className="text-right">
                <Button variant="outline-secondary" className="mr-2">Ignorer</Button>
                <Button variant="primary">Accepter</Button>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      ))}
      
      <div className="text-center mt-3">
        <Button variant="link">Voir les 86</Button>
      </div>
    </Container>
  );
};

const HomePage = () => {
  return (
    <div>
      <Navbar />
      <div className="main-content d-flex">
        <Sidebar />
        <div className="content flex-grow-1 p-3">
          <RelationsPage />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
