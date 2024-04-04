// En Unauthorized.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';
import Cookies from 'js-cookie'; // Agrega la importación de Cookies
import './Unauthorized.css';

import Img from '../../../img/restriccion.png';

const Unauthorized = () => {
  const location = useLocation();
  const from = new URLSearchParams(location.search).get('from');

  const goBack = () => {
    // Borra la cookie al volver a la página de inicio
    Cookies.remove('token');

    // Redirige a la ruta anterior o a la página de inicio si no hay información de origen
    window.location.replace(from || '/');
  };

  return (
    <div className="error-page">
      <img src={Img} alt="Hand Stop" />
      <h1>¡Alto! Acceso no autorizado</h1>
      <p>No tienes permisos para acceder a esta página.</p>
      <button onClick={goBack}>Volver a la página de inicio</button>
    </div>
  );
};

export default Unauthorized;