import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import  MyNavbarTT  from '../components/MyNavbarTT';
// import Sidebar from '../components/SideBar';
import './HomePage.css';
import SideTest from '../components/SideTest';
import Body from '../components/Body';
// import RightBar from '../components/RightBar';

const HomePage = () => {
  return (
    <>
      <MyNavbarTT />
<Container fluid>
  <Row>
  <SideTest />
  <Col md={10}>
  <Body></Body>
  </Col>
  </Row>
  </Container>        
       
    </>
  );
};

export default HomePage;