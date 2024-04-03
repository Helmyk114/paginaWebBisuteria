// En Unauthorized.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Cookies from 'js-cookie'; // Agrega la importación de Cookies
import './Unauthorized.css';

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
  <h1>Acceso no autorizado</h1>
  <p>No tienes permisos para acceder a esta página.</p>

  {/* Agrega un botón para volver a la página anterior */}
  <button onClick={goBack}>Volver a la página anterior</button>

  {/* Opcional: Agrega un enlace para ir a la página de inicio */}
  <p>
    O puedes <Link to="/">volver a la página de inicio</Link>.
  </p>
</div>

  );
};

export default Unauthorized;
