import React, { useState } from 'react';
import { Container, Row, Col, Button, InputGroup, FormControl } from 'react-bootstrap';
import { CiImageOn } from "react-icons/ci";
import { FaUserCircle } from "react-icons/fa"; // Importer l'icône de l'utilisateur
import PublicationModal from './PublicationModal'; // Importer le composant PublicationModal
import './PostCreator.css';

const PostCreator = () => {
  const [showModal, setShowModal] = useState(false);
  const userName = "Ines Abderrahim"; // Remplacez par la récupération dynamique du nom de l'utilisateur

  const handleProfileRedirect = () => {
    // Logique pour rediriger vers le profil de l'utilisateur
    window.location.href = '/profile'; // Ajuster cette URL à la route réelle du profil
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handlePostSubmit = () => {
    // Gérer la logique de soumission du post ici
    console.log('Post submitted');
  };

  return (
    <Container className="post-creator-container">
      <Row className="justify-content-center">
        <Col md={8}>
          <div className="post-creator">
            <div className="d-flex align-items-center mb-3">
              <Button variant="link" onClick={handleProfileRedirect} className="profile-icon">
                <FaUserCircle size={40} />
              </Button>
              <InputGroup className="ml-3 flex-grow-1" onClick={handleShowModal}>
                <FormControl
                  placeholder="Commencer un post"
                  aria-label="Commencer un post"
                  className="post-input"
                />
              </InputGroup>
            </div>
            <div className="d-flex justify-content-between">
              <Button variant="link" className="post-action" aria-label="Add Media">
                <CiImageOn />
                Médias
              </Button>
              <Button variant="link" className="post-action" aria-label="Add Event">
                Événement
              </Button>
              <Button variant="link" className="post-action" aria-label="Write Article">
                Rédiger un article
              </Button>
            </div>
          </div>
        </Col>
      </Row>
      <PublicationModal show={showModal} handleClose={handleCloseModal} userName={userName} />
    </Container>
  );
};

export default PostCreator;
