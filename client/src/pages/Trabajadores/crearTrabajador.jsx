import React from "react";
import Navbar, { Titulo, Notificacion } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

function CrearTrabajador() {
    return (
        <div>
            <Navbar>
                <Titulo 
                    texto='Añadir trabajador'
                />
                <Notificacion/>
            </Navbar>
            
            <Footer/>
        </div>
    );
};

export default CrearTrabajador