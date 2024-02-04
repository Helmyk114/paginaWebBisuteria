import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Navbar from '../../components/Navbar/Navbar';
import { Imagen } from '../../components/Navbar/Navbar';
import { Wave } from '../../components/Navbar/Navbar';
import iniciarSesion from '../../api/IniciarSesion';
import './login.css';
import { guardarToken, decodificarToken } from '../../utils/token';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const endPoint = 'login';
    const { success, token, error: errorMsg } = await iniciarSesion(data.userName, data.password, endPoint);

    if (success && token) {
      try {
        guardarToken(token)

        const numeroDelRol = decodificarToken(token).role;

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
    <div className='body-login'>
      <Navbar >
        <div >
        </div >
        <Imagen />
        <div >
        </div >
        
      </Navbar>

      <div className="form-container">
        <div className="titulo">TEJIENDO UN MUNDO MULTICOLOR</div>
        <div className="subtitulo">Inicia sesión con tu nombre de usuario y contraseña asignada</div>
        {error && <span>{error}</span>}
        <form className='form-login' onSubmit={handleSubmit(onSubmit)}>
          <label className='label-login' htmlFor="userName">Usuario</label>
          <input
            className='input-login'
            type="text"
            id="userName"
            name="userName"
            {...register("userName", { required: { value: true, message: "userName es requerido" } })}
          />
          {errors.userName && <span>{errors.userName.message}</span>}

          <label className='label-login' htmlFor="password">Contraseña</label>
          <input
            className='input-login'
            type="password"
            id="password"
            name="password"
            {...register("password", { required: { value: true, message: "Contraseña es requerida" } })}
          />
          {errors.password && <span>{errors.password.message}</span>}

          <button className='login-button' type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
