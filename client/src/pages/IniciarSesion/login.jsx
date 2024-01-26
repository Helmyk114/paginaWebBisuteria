import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import { useForm } from 'react-hook-form';
import iniciarSesion from '../../api/IniciarSesion';
import Cookies from 'js-cookie'; 
import './login.css';
import { jwtDecode } from 'jwt-decode';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const endPoint = 'login';
    const { success, token, error: errorMsg } = await iniciarSesion(data.userName, data.password, endPoint);

    if (success && token) {
      console.log('Token recibido:', token);

      try {
        const decodedToken = jwtDecode(token);
        console.log('Información del token decodificado:', decodedToken);

        const numeroDelRol = decodedToken.role;
        console.log('Número del rol:', numeroDelRol);

        // Guarda el token en una cookie con una duración de 1 hora (ajusta según tus necesidades)
        Cookies.set('token', token, { expires: 1 / 24 }); 

        switch (numeroDelRol) {
          case 1:
            navigate('/Administracion');
            break;
          case 2:
            navigate('/Artesano');
            break;
          case 3:
            navigate('/Vendedor');
            break;
          default:
            navigate('/default');
            break;
        }
      } catch (error) {
        console.error('Error al decodificar el token:', error.message);
      }
    } else {
      setError(errorMsg);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="form-container">
        <div className="titulo">TEJIENDO UN MUNDO MULTICOLOR</div>
        <div className="subtitulo">Inicia sesión con tu nombre de usuario y contraseña asignada</div>
        {error && <span>{error}</span>}
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="userName">Usuario</label>
          <input
            type="text"
            id="userName"
            name="userName"
            {...register("userName", { required: { value: true, message: "userName es requerido" } })}
          />
          {errors.userName && <span>{errors.userName.message}</span>}

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            {...register("password", { required: { value: true, message: "Contraseña es requerida" } })}
          />
          {errors.password && <span>{errors.password.message}</span>}

          <button className='login-button' type="submit">Iniciar Sesión</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;
