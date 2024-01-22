import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import InicioSesion from '../components/Formularios/InicioSesion';

function Login() {

  return (
    <div>
      <Navbar/>
      <InicioSesion/>
      <Footer/>
    </div>
  );
}

export default Login;