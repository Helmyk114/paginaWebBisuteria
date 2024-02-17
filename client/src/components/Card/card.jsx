import React from 'react';
import { Row, Col } from 'react-bootstrap'
import { Card } from '@nextui-org/react'
import './styleCard.css'; 

// Componente principal
function CustomCard({ children, img }) {
  return (
    <div>
      <div className="gray-container">
        <div className="round-image-container">
          <img className="round-image" src={img} alt="Round Image" />
        </div>
        {children}
      </div>
    </div>
  );
};

// Componente para el contenido de la carta
function CardContent() {
  return (
    <div>
      <Card className="content-card"></Card>
    </div>
  );
};

// Componente para el icono de editar
function Completado() {
  return (
    <div className='icon'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={30}
        height={30}
        fill="rgb(105, 119, 228, 1)"
        className="bi bi-check-circle-fill"
        viewBox="0 0 16 16">
        <path
          d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0m-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z" />
      </svg>
    </div>
  );
};

// Componente para el título centrado
function Nombre({ nombre }) {
  return (
    <div>
      <Row className="justify-content-md-center" style={{ marginRight: '30px' }}>
        <Col xs={2} md={6} lg={12}>
          <h2 className="title">{nombre}</h2>
        </Col>
      </Row>
    </div>
  );
};

// Componente para el primer subtitulo
function PrecioPC({ precio1 }) {
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col xs={6} md={6} lg={6}>
          <label className='label'>PC</label>
          <p className="subtitulo1">{precio1}</p>
        </Col>
      </Row>
    </div>
  );
};

// Componente para el segundo subtitulo
function PrecioPO({ precio2 }) {
  return (
    <div>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6} lg={6}>
          <label className='label'>PO</label>
          <p className="subtitulo2">{precio2}</p>
        </Col>
      </Row>
    </div>
  );
};

export default CustomCard;
export {
  CardContent,
  Nombre,
  PrecioPC,
  PrecioPO,
  Completado
};