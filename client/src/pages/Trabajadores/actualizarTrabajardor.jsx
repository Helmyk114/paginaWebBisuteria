import React from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

function ActualizarTrabajador() {
    return (
        <div>
            <Navbar>
                <BotonRetroceder />
                <Titulo 
                    texto='Actualizar información'
                />
                <Notificacion/>
            </Navbar>
            n
            <Footer/>
        </div>
    );
};

export default ActualizarTrabajador