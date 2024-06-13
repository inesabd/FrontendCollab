import React from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap'
import { CiImageOn } from "react-icons/ci";
import './PostCreator.css';

const PostCreator = () => {
  return (
    <Container className="post-creator-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="post-creator">
            <InputGroup className="mb-3">
              <FormControl
                placeholder="Commencer un post"
                aria-label="Commencer un post"
                className="post-input"
              />
            </InputGroup>
            <div className="d-flex justify-content-between">
              <Button variant="link" className="post-action">
              <CiImageOn/>
                      Média
              </Button>
              <Button variant="link" className="post-action">
                Evenement 
              </Button>
              <Button variant="link" className="post-action">
                 Rédiger un Article
              </Button>
            </div>
            {/* <div>
            <button type="submit" className="ButtonCreator" ></button>
            </div> */}
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PostCreator;
