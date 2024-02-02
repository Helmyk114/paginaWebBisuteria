import React from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import CustomCard from '../../components//Card/card'; 
import { CardContent, Editar, Eliminar, Nombre, PrecioPC, PrecioPO} from '../../components/Card/card';
import Flotante from '../../components/Botones/BotonFlotante/Flotante';

function ListarProducto() {
    return (
        <div>
            < Flotante addIcon={<svg xmlns="http://www.w3.org/2000/svg" width="47" height="47" fill="#fff" class="bi bi-bag-plus-fill" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0M8.5 8a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V12a.5.5 0 0 0 1 0v-1.5H10a.5.5 0 0 0 0-1H8.5z"/>
            </svg>}/>

            <Navbar>
                <BotonRetroceder />
                <Titulo 
                    texto='Productos'
                />
                <Notificacion />
            </Navbar>
            {/* <CustomCard img={img}> */}
            <CustomCard>
            <CardContent />
                <Nombre nombre="julia jimenez" />
                <PrecioPC precio1={20000}/>
                <PrecioPO precio2={30000}/>
                <Editar />
                <Eliminar />
            </CustomCard>
            
            <Footer />
        </div>
    );
};

export default ListarProducto