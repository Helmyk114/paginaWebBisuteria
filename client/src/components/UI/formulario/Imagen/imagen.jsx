import React, { useEffect, useState } from 'react';
import {Card, CardBody} from "@nextui-org/react";
import ImagenIcono from '../../iconos/Imagen';
import './imagen.css';

const SubirImagen = ({ onImageChange, defaultImageSrc }) => {
  const raizUrl = process.env.REACT_APP_API_URL;
  const [imageSrc, setImageSrc] = useState(defaultImageSrc || null);

  useEffect(() => {
    if (defaultImageSrc && defaultImageSrc[0] && defaultImageSrc[0].image) {
      const imageUrl = `${raizUrl}/${defaultImageSrc[0].image}`;
      setImageSrc(imageUrl);
    } else if (defaultImageSrc && defaultImageSrc[0] && defaultImageSrc[0].photo) {
      const imageUrl = `${raizUrl}/${defaultImageSrc[0].photo}`;
      setImageSrc(imageUrl);
    }
  }, [defaultImageSrc, raizUrl]);

  const handleFileChange = (e) => {
    const selectedImage = e.target.files[0];
    if (onImageChange) {
      onImageChange(selectedImage);
    }
    const reader = new FileReader();
    reader.onloadend = () => {
      setImageSrc(reader.result);
    };
    reader.readAsDataURL(selectedImage);
  };

  return (
    <div className='content'>
      <Card className='card'>
        <div className='img'>
          {imageSrc ? (
            <img
              src={imageSrc}
              alt='Imagen seleccionada'
              style={{ maxWidth: '100', maxHeight: '200px' }}
            />
          ) : (
            <ImagenIcono />
          )}
        </div>
        <CardBody className='body'>
          <input
            className='boton'
            type='file'
            onChange={handleFileChange} />
        </CardBody>
      </Card>
    </div>
  );
};

export default SubirImagen;