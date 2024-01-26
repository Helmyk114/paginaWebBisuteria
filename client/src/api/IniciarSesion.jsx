import axios from 'axios';

const raizUrl = process.env.REACT_APP_API_URL;

const inicioSesion = async (userName, password, endPoint) => {

  const url = `${raizUrl}/${endPoint}`

  try {
    const response = await axios.post(url, {
      userName,
      password,
    });

    if (response.data.token) {
      return { success: true, token: response.data.token };
    } else {
      return { success: false, error: 'Credenciales incorrectas' };
    }
  } catch (error) {
    console.error('Error al intentar iniciar sesión:', error);
    return { success: false, error: 'Error al intentar iniciar sesión' };
  }
};

export default inicioSesion;
