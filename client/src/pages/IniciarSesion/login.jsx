import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import Navbar from '../../components/Navbar/Navbar';
import { Imagen } from '../../components/Navbar/Navbar';
import './login.css';
import InputText from '../../components/UI/formulario/inputText'


import { Button, Spacer } from "@nextui-org/react";

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const refs = useRef({
    userName: null,
    password: null
  });

  const onSubmit = async (data) => {
    console.log(data)
  };

  return (
    <div className='body-login'>
      <Navbar >
  
        <Imagen />

      </Navbar>

      <div className="form-container">
        <div className="titulo1">TEJIENDO UN MUNDO</div>
        <div className="titulo2">MULTICOLOR</div>
        <div className="subtitulo">Inicia sesión con tu nombre de <br></br>usuario y contraseña asignada</div>

        <form className='form-login' onSubmit={handleSubmit(onSubmit)}>
          <InputText
            ref={(el) => { refs.current.userName = el; }}
            {...register("userName", { required: { value:true, message: 'Usuario requerido' }})}
            type="text"
            key="userName"
            placeholder={"Escriba su usuario"}
            variant="underlined"
            size="sm"
          />
          {errors.userName && <span>{errors.userName.message}</span>}

          <Spacer y={4} />

          <InputText 
            ref={(el) => { refs.current.password = el; }}
            {...register("password", { required: { value:true, message: 'Constraseña requerida' }})}
            type="password"
            key="password"
            placeholder={"Escriba su constraseña"}
            variant="underlined"
            size="sm"
          />
          {errors.password && <span>{errors.password.message}</span>}

          <Spacer y={5} />

          <Button color="primary" type='submit'>
            Iniciar sesion
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
