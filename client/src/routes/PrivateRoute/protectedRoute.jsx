import React from 'react';
import { Navigate } from 'react-router-dom';
import { decodificarToken, obtenerToken } from '../../utils/token';

const ProtectedRoute = ({ element, role }) => {
  const token = obtenerToken()

  if (!token) {
    // Si no hay token, redirige a la página de inicio de sesión
    return <Navigate to="/" />;
  }

  // Decodifica el token para obtener el rol del usuario
  const decodedToken = decodificarToken(token)
  const userRole = decodedToken.role;

  // Comprueba si el rol del usuario coincide con el rol permitido para la ruta
  if (userRole === role) {
    // Si coincide, permite el acceso a la ruta
    return element;
  } else {
    // Si no coincide, redirige a una página no autorizada
    return <Navigate to="/unauthorized" />;
  }
};

export default ProtectedRoute;
