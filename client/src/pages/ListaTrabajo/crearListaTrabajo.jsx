import React from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

function CrearListaTrabajo() {
    return (
        <div>
            <Navbar>
                <BotonRetroceder />
                <Titulo 
                    texto='Crear lista de trabajo'
                />
                <Notificacion />
            </Navbar>
            
            <Footer />
        </div>
    );
};

export default CrearListaTrabajo