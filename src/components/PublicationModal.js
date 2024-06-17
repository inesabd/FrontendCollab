import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import PhotoUpload from './PhotoUpload'; 
import './PublicationModal.css';

const PublicationModal = ({ show, handleClose, userName }) => {
  const [imagePreview, setImagePreview] = useState(null);
  const [postContent, setPostContent] = useState('');

  const handleCancel = () => {
    setImagePreview(null);
    setPostContent('');
    handleClose();
  };

  const handleRemoveImage = () => {
    setImagePreview(null);
  };

  const handlePostContentChange = (e) => {
    setPostContent(e.target.value);
  };

  return (
    <Modal show={show} onHide={handleCancel} centered dialogClassName='publication-modal'>
      <Modal.Header closeButton className="modal-header-custom">
        <Modal.Title>
          <div className="d-flex align-items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="User Avatar"
              className="rounded-circle"
            />
            <div className="ml-2">
              <h5 className="mb-0">{userName}</h5>
            </div>
          </div>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="modal-body-custom">
        <Form>
          <Form.Group>
            <Form.Control
              as="textarea"
              rows={3}
              value={postContent}
              onChange={handlePostContentChange}
              placeholder="De quoi souhaitez-vous discuter ?"
              className="post-textarea"
            />
          </Form.Group>
          <PhotoUpload setImagePreview={setImagePreview} />
          {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Image Preview" className="img-thumbnail" />
              <Button variant="danger" onClick={handleRemoveImage}>Remove</Button>
            </div>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer className="modal-footer-custom">
        <Button variant="secondary" onClick={handleCancel}>
          Annuler
        </Button>
        <Button variant="primary" onClick={() => console.log('Post submitted')}>
          Publier
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default PublicationModal;
