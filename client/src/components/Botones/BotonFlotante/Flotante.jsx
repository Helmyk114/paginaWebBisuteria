import React from 'react';
import { Link } from 'react-router-dom';
import './styleFlotante.css'

// Componente para el icono de Agregar trabajador
function Flotante({ addIcon, ruta }) {
  return (
    <div className='fabContainer'>
      <Link to={ruta}>
        {addIcon}
      </Link>
    </div>
    
  );
}

export default Flotante;


