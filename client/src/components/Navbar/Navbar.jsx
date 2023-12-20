import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../Navbar/Navbar.css'
import {Image, Container, Navbar} from 'react-bootstrap'
//import Perfil from '../../img/IMG_4880_720x.webp'

function Navegar({children}) {
  return (
    <div className='nav'>
      <Navbar fixed="top" expand="false" className='nav'>
        <Container className='contenedor'>
          {children}
        </Container>
      </Navbar>
   </div>  
  )
}

function ImagenPerfil (){
  return(
    <div className='ImgPerfil'>
    {/* <Image src={Perfil} roundedCircle  width="70px" height="70px" /> */}
    </div>
  );
}

function BotonRetroceder(){
  const history = useNavigate();
  const handleRetroceder = () => {
    history(-1);
  };  

return(
    <div className='back' onClick={handleRetroceder} >
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"   fill="currentColor"  class="bi bi-chevron-left" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
          </svg>
    </div>
  );
}

function Titulo({texto}){
  return(
    <div className='titulo'>
    <Navbar.Brand className='txTitulo text-left' href="#">{texto}</Navbar.Brand>
    </div>
  );
}

function TituloBienvenido({texto, nombretrabajador, rol}){
  return(
    <div className='bienvenido'>
    <Navbar.Brand className='txtBienvenido text-left' href="#">
    <h1>{texto}</h1>
    <h6>{nombretrabajador}</h6>
    <h6>{rol}</h6>
    </Navbar.Brand>
    </div>
  )
}

function Notificacion(){
  return(
    <div className='notificar'>
          
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-bell-fill" viewBox="0 0 16 16">
           <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
           </svg>
    </div>
  )
}
export default Navegar;
export { 
    BotonRetroceder, 
    Titulo, 
    Notificacion, 
    ImagenPerfil, 
    TituloBienvenido
};