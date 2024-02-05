import React from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import ComboBox from "../../components/Formularios/Controles/comboBox";
import DropdownWithCards from "../../components/Formularios/Controles/comboBoxCard";

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
            {/* <DropdownWithCards/> */}

            <Footer />
        </div>
    );
};

export default CrearPedido