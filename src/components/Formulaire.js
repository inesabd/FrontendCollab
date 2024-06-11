import React from 'react';
import { Container, Row, Col, InputGroup, FormControl, Form, Button } from 'react-bootstrap';
import { MdOutlinePostAdd } from "react-icons/md";

import './Formulaire.css';


function Formulaire() {
    return (
        <Container >
            <Row className="align-items-center my-3">
                <Col md={6}>
                    <div className="home-icon-text">
                        <MdOutlinePostAdd  className="icon" /> 
                        <span className='home-text'>Ajouter une intervention</span>
                    </div>
                </Col>
            </Row>    
            {/* <Row className="justify-content-center my-3">
                <Col md={3}>
                    <InputGroup>
                        <InputGroup.Text>
                            <MdDateRange />
                        </InputGroup.Text>
                        <FormControl
                            type="date"
                            name="date-picker"
                            id="date-picker"
                            placeholder="Select a date"
                            aria-label="Select a date"
                        />
                    </InputGroup>
                </Col>
            </Row> */}
            <Row className='contour'>
                <Col md={8}>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formNomApplication">
                                    <Form.Label>Nom Application/infra</Form.Label>
                                    <Form.Control type="text" placeholder="Enter application name" />
                                </Form.Group>
                                <Form.Group controlId="formReferenceIncident">
                                    <Form.Label>Référence incident</Form.Label>
                                    <Form.Control type="text"  />
                                </Form.Group>
                                <Form.Group controlId="formStartTime">
                                    <Form.Label>Heure de début d'intervention</Form.Label>
                                    <Form.Control type="time" />
                                </Form.Group>
                                <Form.Group controlId="formEndTime">
                                    <Form.Label>Heure de fin d'intervention</Form.Label>
                                    <Form.Control type="time" />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formImpact">
                                    <Form.Label>Date de debut d'intervention</Form.Label>
                                    <Form.Control as="textarea"  />
                                </Form.Group>
                                <Form.Group controlId="formImpact">
                                    <Form.Label>Date de fin d'intervention</Form.Label>
                                    <Form.Control as="textarea" rows={1} />
                                </Form.Group>
                                <Form.Group controlId="formImpact">
                                    <Form.Label>Impact</Form.Label>
                                    <Form.Control as="textarea" rows={1} />
                                </Form.Group>
                               
                                {/* <Form.Group controlId="formActionChronology">
                                    <Form.Label>Chronologie des actions correctives</Form.Label>
                                    <Form.Control as="textarea" rows={4} />
                                </Form.Group> */}
                            </Col>
                        </Row>
                        <Row>
                            <Col md={12}>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Description de l'incident</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Participant a la conf</Form.Label>
                                    <Form.Control as="textarea" rows={2} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Root de cause</Form.Label>
                                    <Form.Control as="textarea" rows={1} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Commentaire</Form.Label>
                                    <Form.Control as="textarea" rows={1} />
                                </Form.Group>
                            </Col>
                            <Col md={6}>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Chronologie des actions</Form.Label>
                                    <Form.Control as="textarea" rows={3} />
                                </Form.Group>
                            </Col>
                            <Col md={12}>
                                <Form.Group controlId="formDescription">
                                    <Form.Label>Ajouter une piece jointe</Form.Label>
                                    <Form.Control as="textarea" rows={1} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                              <Col md={12} className="button-container">
                                     <Button className='buttonVB' variant="primary" type="submit">
                                                              Valider
                                     </Button>
                                   <Button className='buttonVB' variant="secondary" style={{ marginLeft: '10px' }}>
                                      Brouillon
                                    </Button>
                                </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Formulaire;