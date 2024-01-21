import React from "react";
import Navbar, { Titulo, Notificacion } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

function ActualizarProducto() {
    return (
        <div>
            <Navbar>
                <Titulo 
                    texto='Actualizar Producto'
                />
                <Notificacion/>
            </Navbar>
            
            <Footer/>
        </div>
    );
};

export default ActualizarProducto