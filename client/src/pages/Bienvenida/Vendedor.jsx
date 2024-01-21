import React from 'react'
import Navegar from '../../components/Navbar/Navbar'
import { ImagenPerfil, TituloBienvenido, Notificacion } from '../../components/Navbar/Navbar'
import Botones, { BtnIndividual }  from '../../components/Botones/btnPrincipal'
import Footer from '../../components/Footer/Footer'

function BienvenidaVendedor() {
  return (
    
    <div>
    <Navegar>
    <ImagenPerfil/>
    <TituloBienvenido 
        texto="Bienvenido"
        nombretrabajador="Sara Cadavid"
        rol="Vendedor"/>
    <Notificacion/>
    </Navegar>

    <Botones>
    <BtnIndividual
        icono={
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="76" 
                height="76" 
                fill="currentColor" 
                className="bi bi-person-fill" 
                viewBox="0 0 16 16"
            >
                <path 
                d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
            </svg>
        }
        texto="Perfil"
    />

     <BtnIndividual
        icono={
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="76" 
                height="76" 
                fill="currentColor" 
                className="bi bi-bag-plus-fill" 
                viewBox="0 0 16 16"
            >
                <path 
                fillRule="evenodd" 
                d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z"/>
            </svg>
        }
        texto="Productos"
    />

     <BtnIndividual
        icono={
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="76" 
                height="76" 
                fill="currentColor" 
                className="bi bi-bag-check-fill" 
                viewBox="0 0 16 16"
            >
                <path 
                fillRule="evenodd" 
                d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
            </svg>
        }
        texto="Pedidos"
    />

    <BtnIndividual
        icono={
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="76" 
                height="76" 
                fill="currentColor" 
                className="bi bi-box-arrow-right" 
                viewBox="0 0 16 16"
            >
                <path 
                fillRule="evenodd" 
                d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0z"/>
                <path fillRule="evenodd" 
                d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
            </svg>
        }
        texto="Cerrar sesión"
    />
    </Botones>

    <Footer/>
    </div>
  );
};

export default BienvenidaVendedor