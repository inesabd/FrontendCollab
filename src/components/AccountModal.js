import React, { useState } from 'react';
import { Modal, Button, Alert } from 'react-bootstrap';
import { FaRegUserCircle } from 'react-icons/fa';

const AccountModal = ({ show, onHide }) => {
  const [profilePic, setProfilePic] = useState(null);

  const handleImageUpload = event => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setProfilePic(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered scrollable size="lg">
      <Modal.Header closeButton>
        <Modal.Title>Mon Compte</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="profile-pic-container text-center mb-3">
          {profilePic ?
            <img src={profilePic} alt="Profile" style={{ width: '100px', height: '100px', borderRadius: '50%' }} />
            : <FaRegUserCircle size="100px" />}
          <div>
            <label htmlFor="profile-upload" className="btn btn-link">Ajouter une image</label>
            <input
              id="profile-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: 'none' }}
            />
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <p><strong>Nom : </strong> La </p>
            </div>
            <div className="col-md-6">
              <p><strong>Prénom : </strong> Team </p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p><strong>Email:</strong> inas.abderrahim@sfr.com</p>
            </div>
            <div className="col-6">
              <p><strong>Adresse : </strong> 19 Rue Kléber, Nanterre 92000</p>
            </div>
            <div className="col-6">
              <p><strong>Numéro : </strong> 0607080910 </p>
            </div>
          </div>
        </div>
        <Alert variant="warning">
          Modifiez votre mot de passe pour continuer à utiliser notre service en toute sécurité
        </Alert>

        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Nouveau mot de passe </label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">Choisissez un mot de passe que vous n'oublierez pas!</div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Confirmer le mot de passe</label>
            <input type="password" className="form-control" id="exampleInputPassword1"/>
          </div>
          <div className="mb-3 form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Enregistrer les modifications </label>
          </div>
          <button type="submit" className="btn btn-primary">Valider</button>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default AccountModal;
