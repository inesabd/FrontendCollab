import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './ProfilPage.css';
import profilePic from '../images/burger.jpg';  // Importer directement l'image
import MyNavbarTT from '../components/MyNavbarTT';
import Sidebar from '../components/SideBar';
import PostCreator from '../components/PostCreator';
import ProfilNav from '../components/ProfilNav'; // Importer le nouveau composant

const ProfilPage = () => {
  return (
    <>
      <MyNavbarTT />
      <div className="d-flex">
        <Sidebar />
        <div className="content flex-grow-1 p-3">
          <Container className="mt-5">
            <Row className="justify-content-center">
              <Col md={8}>
                <Card>
                  <Card.Body className="text-center">
                    <Image src={profilePic} roundedCircle className="profile-pic" />  {/* Utiliser l'import */}
                    <h3>Cheb Khaled</h3>
                    <p className="text-muted">Bio: C'est ici que l'utilisateur peut écrire une courte biographie.</p>
                    <hr />
                    <p><strong>Nombre d'amis:</strong> 150</p>
                  </Card.Body>
                </Card>
                <ProfilNav /> {/* Ajouter le composant ProfilNav ici */}
              </Col>
            </Row>
          </Container>
          <PostCreator />
        </div>
      </div>
    </>
  );
}

export default ProfilPage;
