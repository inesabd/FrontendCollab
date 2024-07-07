// File: src/Feed.js
import React from 'react';
import './Feed.css'; // Assurez-vous d'importer le fichier CSS

const Feed = ({ user }) => {
  return (
    <div className="card mb-2"> 
      <div className="post-header d-flex align-items-center"> 
        <img
          src={user.photo}
          alt={user.name}
          className="rounded-circle"
          width="50"
          height="50"
        />
        <div className="user-info ml-3"> 
          <h5 className="mb-0">{user.name}</h5>
          <small>{user.position}</small>
        </div>
      </div>
      <div className="post-content">
        <p>{user.content}</p>
        <div>
          {user.tags.map((tag, index) => (
            <span key={index} className="badge badge-primary mr-1">
              #{tag}
            </span>
          ))}
        </div>
      </div>
      <div className="post-footer text-muted d-flex justify-content-between">
        <button className="action-button">
          <i className="far fa-thumbs-up"></i> J'aime
        </button>
        <button className="action-button">
          <i className="far fa-comment"></i> Commenter
        </button>
        <button className="action-button">
          <i className="far fa-share-square"></i> Partager
        </button>
        <button className="action-button">
          <i className="far fa-bookmark"></i> Enregistrer
        </button>
      </div>
    </div>
  );
};

export default Feed;
