import React from 'react';
import { Link } from 'react-router-dom';
import './styleFlotante.css'

// Componente para el boton flotante para agregar
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