// PhotoUpload.js
import React from 'react';
import { Button } from 'react-bootstrap';

const PhotoUpload = ({ setImagePreview }) => {
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="upload-photo"
      />
      <label htmlFor="upload-photo">
        <Button as="span" variant="secondary">
          Upload Photo
        </Button>
      </label>
    </div>
  );
};

export default PhotoUpload;
