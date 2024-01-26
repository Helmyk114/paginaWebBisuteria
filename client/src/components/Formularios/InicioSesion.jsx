import { useForm } from 'react-hook-form';
import React, { useState } from 'react';
import iniciarSesion from '../../api/IniciarSesion';
import './InicioSesion.css'

function InicioSesion() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setError] = useState('');

  const onSubmit = async (data) => {
    const { success, token, error: errorMsg } = await iniciarSesion(data.correo, data.password);

    if (success && token) {
      console.log('Token recibido:', token);
      // Aquí puedes almacenar el token en el estado o en local storage
      // Redirige al usuario a la página principal o realiza otras acciones necesarias
    } else {
      setError(errorMsg);
    }
  };

  return (
    <div className="form-container">
      <div className="titulo-login">TEJIENDO UN MUNDO MULTICOLOR</div>
      <div className="subtitulo-login">Inicia sesión con tu nombre de usuario y contraseña asignada</div>
      {error && <span>{error}</span>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="correo">Usuario</label>
        <input 
            type="text" 
            id="correo" 
            name="correo" 
            {...register("correo", { required: { value: true, message: "Email es requerido" } })} />
            {errors.correo && <span>{errors.correo.message}</span>}

        <label htmlFor="password">Contraseña</label>
        <input 
            type="password" 
            id="password" 
            name="password" 
            {...register("password", { required: { value: true, message: "Contraseña es requerida" } })} />
            {errors.password && <span>{errors.password.message}</span>}

        <button className='login-button' type="submit">Iniciar Sesión</button>
      </form>
    </div>
  );
};

export default InicioSesion;