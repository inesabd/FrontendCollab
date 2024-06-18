import React from 'react';
import { Button } from 'react-bootstrap';

const PhotoUpload = ({ setImagePreviews }) => {
  const handleImageChange = (event) => {
    const files = Array.from(event.target.files);
    const readers = files.map(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviews(prev => [...prev, reader.result]);
      };
      reader.readAsDataURL(file);
      return reader;
    });
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={handleImageChange}
        style={{ display: 'none' }}
        id="upload-photo"
      />
      <label htmlFor="upload-photo">
        <Button as="span" variant="secondary">
          Upload Photos
        </Button>
      </label>
    </div>
  );
};

export default PhotoUpload;
