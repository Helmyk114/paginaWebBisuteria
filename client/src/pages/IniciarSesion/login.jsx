import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import "./login.css";

import { Spacer } from "@nextui-org/react";
import BotonEnviar from "../../components/UI/botones/botonEnviar";
import InputText from "../../components/UI/formulario/Inputs/inputText";
import InputPassword from "../../components/UI/formulario/Inputs/password/inputPassword";
import Footer from "../../components/UI/Footer/Footer";

import inicioSesion from "../../api/IniciarSesion";
import { guardarToken, decodificarToken } from "../../utils/token";

function Login() {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  const refs = useRef({
    userName: null,
    password: null,
  });
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const { success, token, error: errorMsg } = await inicioSesion(data.userName, data.password, "login");

    if (success && token) {
      try {
        guardarToken(token);
        switch (decodificarToken(token).role) {
          case 1:
            navigate("/Administracion");
            break;
          case 2:
            navigate("/Artesano");
            break;
          case 3:
            navigate("/Vendedor");
            break;
          default:
            navigate("/default");
            break;
        }
      } catch (error) {
        console.error("Error al decodificar el token:", error.message);
      }
    } else {
      console.error(errorMsg);
    }
  };

  return (
    <div className="body-login">
      <Footer />
      <div className="form-container">
        <div className="titulo1">TEJIENDO UN MUNDO</div>
        <div className="titulo2">MULTICOLOR</div>
        <div className="subtitulo">Inicia sesión con tu nombre de <br></br>usuario y contraseña asignada</div>
        <form className="form-login" onSubmit={handleSubmit(onSubmit)}>
          <InputText
            ref={(el) => { refs.current.userName = el; }}
            {...register("userName", { required: { value: true, message: "Usuario requerido" }, })}
            key="usuario"
            type="text"
            label={<span className="custom-label">Usuario</span>}
            labelPlacement="outside"
            placeholder={"Escriba su usuario"}
            size="md"
            fontSize={"14px"}
          />
          {errors.userName && <span>{errors.userName.message}</span>}
          <Spacer y={4} />
          <InputPassword
            ref={(el) => { refs.current.password = el; }}
            {...register("password", { required: { value: true, message: "Contraseña requerida" }, })}
            key="password"
            label={<span className="custom-label">Contraseña</span>}
            labelPlacement={"outside"}
            placeholder={"Escriba su constraseña"}
            size="md"
            fontSize={"14px"}
          />
          {errors.password && <span>{errors.password.message}</span>}
          <Spacer y={4} />
          <BotonEnviar text="Iniciar sesión" type="submit" />
          <Spacer y={4} />
        </form>
      </div>
    </div>
  );
}

export default Login;