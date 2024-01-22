import React from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

function ListarListaTrabajo() {
    return (
        <div>
            <Navbar>
                <BotonRetroceder />
                <Titulo 
                    texto='Lista de trabajo'
                />
                <Notificacion />
            </Navbar>
            
            <Footer />
        </div>
    );
};

export default ListarListaTrabajo