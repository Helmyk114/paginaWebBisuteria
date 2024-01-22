import React from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

function ActualizarListaTrabajo() {
    return (
        <div>
            <Navbar>
                <BotonRetroceder />
                <Titulo 
                    texto='Editar lista de trabajo'
                />
                <Notificacion />
            </Navbar>
            
            <Footer />
        </div>
    );
};

export default ActualizarListaTrabajo