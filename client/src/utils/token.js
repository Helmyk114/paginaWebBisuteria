import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

function obtenerToken() {
  const token = Cookies.get('token');
  return token;
};

function guardarToken(token) {
   // Guarda el token en una cookie con una duración de 1 hora
  Cookies.set('token', token, {expires: 1 / 24})
};

function eliminarCookie() {
  Cookies.remove('token')
}

function decodificarToken(token) {
  const decodedToken = jwtDecode(token);
  return decodedToken;
};

export {
  obtenerToken,
  guardarToken,
  eliminarCookie,
  decodificarToken
}