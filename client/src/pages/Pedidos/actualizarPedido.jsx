import React from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

function ActualizarPedido() {
    return (
        <div>
            <Navbar>
                <BotonRetroceder />
                <Titulo 
                    texto='Actualizar pedido'
                />
                <Notificacion />
            </Navbar>
            
            <Footer />
        </div>
    );
};

export default ActualizarPedido