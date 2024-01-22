import React from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"

function ListarTrabajador() {
    return (
        <div>
            <Navbar>
                <BotonRetroceder />
                <Titulo 
                    texto='Trabajadores'
                />
                <Notificacion/>
            </Navbar>
            
            <Footer/>
        </div>
    );
};

export default ListarTrabajador