import React from 'react';
import BootstrapCard from 'react-bootstrap/Card';
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './styleCard.css'; // Asegúrate de importar los estilos necesarios

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
      <BootstrapCard className="content-card"></BootstrapCard>
    </div>
  );
};

// Componente para el icono de editar
function Editar({ ruta }) {
  return (
    <Link to={ruta}>
      <div className='icon'>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="bi bi-pencil-square"
          viewBox="0 0 16 16"
        >
          <path
            d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
          <path
            fillRule="evenodd"
            d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
        </svg>
      </div>
    </Link>
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

// Componente para el icono de eliminar
function Eliminar({ eliminar }) {
  return (
    <div className='icon' onClick={eliminar}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        className="bi bi-x-circle"
        viewBox="0 0 16 16">
        <path
          d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
        <path
          d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708" />
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
  Editar,
  Eliminar,
  Nombre,
  PrecioPC,
  PrecioPO,
  Completado
};