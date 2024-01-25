import React from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Flotante from '../../components/Botones/BotonFlotante/Flotante';
import CustomCard from '../../components//Card/card'; 
import { CardContent, Editar, Eliminar, Nombre, Subtitulo1, Subtitulo2} from '../../components/Card/card';

function ListarTrabajador() {
    return (
        <>
      < Flotante 
          addIcon={
            <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="50" 
            height="50" 
            fill="#fff" 
            className="bi bi-plus-circle" 
            viewBox="0 0 16 16"
          >
            <path 
            d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
            <path 
            d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4"/>
          </svg>}
        />

      <Navbar>
        <BotonRetroceder/>
        <Titulo texto="Trabajadores" />
        <Notificacion />
      </Navbar>
      
      <CustomCard>
        <CardContent />
        <Nombre nombre="julia jimenez" />
        <Editar />
        <Eliminar />
      </CustomCard>


      <CustomCard>
        <CardContent />
        <Nombre nombre="julia jimenez" />
        <Editar />
        <Eliminar />
      </CustomCard>


      <CustomCard>
        <CardContent />
        <Nombre nombre="julia jimenez" />
        <Editar />
        <Eliminar />
      </CustomCard>


      <CustomCard>
        <CardContent />
        <Nombre nombre="julia jimenez" />
        <Editar />
        <Eliminar />
      </CustomCard>

      <CustomCard>
        <CardContent />
        <Nombre nombre="julia jimenez" />
        <Editar />
        <Eliminar />
      </CustomCard>
    

      <CustomCard>
        <CardContent />
        <Nombre nombre="julia jimenez" />
        <Editar />
        <Eliminar />
      </CustomCard>

      <Footer/>

    </>
    );
};

export default ListarTrabajador;

