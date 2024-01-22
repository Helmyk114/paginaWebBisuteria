import React from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

function ListarProducto() {
    return (
        <div>
            <Navbar>
                <BotonRetroceder />
                <Titulo 
                    texto='Productos'
                />
                <Notificacion />
            </Navbar>
            
            <Footer />
        </div>
    );
};

export default ListarProducto