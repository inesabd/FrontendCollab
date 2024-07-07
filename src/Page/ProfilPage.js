import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import './ProfilPage.css';
import profilePic from '../images/burger.jpg';
import MyNavbarTT from '../components/MyNavbarTT';
import PostCreator from '../components/PostCreator';
import ProfilNav from '../components/ProfilNav';
import SideTest from '../components/SideTest';

const ProfilPage = () => {
  return (
    <>
      <MyNavbarTT />
      <div className="d-flex">
        
        <SideTest />
        <div className="content flex-grow-1 p-3">
          <Container className="mt-5">
            <Row className="justify-content-center">
              <Col md={8}>
                <Card>
                  <Card.Body className="text-center">
                    <Image src={profilePic} roundedCircle className="profile-pic" />
                    <h3>Cheb Khaled</h3>
                    <p className="text-muted">Bio: C'est ici que l'utilisateur peut écrire une courte biographie.</p>
                    <hr />
                    <Row className="text-center">
                      <Col>
                        <p><strong>Amis :</strong> 150</p>
                      </Col>
                      <Col>
                        <p><strong>Post :</strong> 22</p>
                      </Col>
                      <Col>
                        <p><strong>J'aime :</strong> 2689</p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Card>
                <ProfilNav />
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
