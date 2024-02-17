import React from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

function CrearPedido() {
    return (
        <div>
            <Navbar>
                <BotonRetroceder />
                <Titulo 
                    texto='Crear un nuevo pedido'
                />
                <Notificacion />
            </Navbar>

            <Footer />
        </div>
    );
};

export default CrearPedido