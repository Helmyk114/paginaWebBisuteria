import React from 'react';
import './Error.css'; // Importar archivo CSS para estilos

function Error() {
  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">¡OOPS!</h1>
        <h1 className="error"><span className="large-numbers">404</span></h1>
        <p className="error-message">Parece que te has perdido.</p>
        <p className="error-message">La página que buscas no existe.</p>
      </div>
    </div>
  );
}

export default Error;
