import React from "react";
import Navbar, { Titulo, Notificacion } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

function CrearProducto() {
    return (
        <div>
            <Navbar>
                <Titulo 
                    texto='Crear Producto'
                />
                <Notificacion/>
            </Navbar>

            <Footer/>
        </div>
    );
};

export default CrearProducto