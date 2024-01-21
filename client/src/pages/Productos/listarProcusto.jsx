import React from "react";
import Navbar, { Titulo, Notificacion } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

function ListarProducto() {
    return (
        <div>
            <Navbar>
                <Titulo 
                    texto='Productos'
                />
                <Notificacion/>
            </Navbar>
            
            <Footer/>
        </div>
    );
};

export default ListarProducto