import React from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import DropdownWithCards from "../../components/Formularios/Controles/comboBoxCard";

function ListarPedido() {
    return (
        <div>
            <Navbar>
                <BotonRetroceder />
                <Titulo 
                    texto='Pedidos'
                />
                <Notificacion />
            </Navbar>
            <DropdownWithCards/>
            
            <Footer />
        </div>
    );
};

export default ListarPedido