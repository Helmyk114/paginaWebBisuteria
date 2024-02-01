import React, {useState} from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import EditarTrabajador from "../../components/Formularios/Trabajador/editarTrabajador";
import { Form } from "react-bootstrap";
import Imagen from "../../components/Formularios/Controles/imagen";
import BtnFormularios from "../../components/Botones/BotonFormularios/btnFormularios";
import { useForm } from "react-hook-form";


function ActualizarTrabajador() {

    const { handleSubmit, control } = useForm();
    const [selectedImage, setSelectedImage] = useState();
    return (
        <div>
            <Navbar>
                <BotonRetroceder />
                <Titulo 
                    texto='Actualizar información'
                />
                <Notificacion/>
            </Navbar>
            <Form style={{margin:'0 auto', width:'100%'}}>
                <Imagen onImageChange={setSelectedImage} />
                <EditarTrabajador control={control} />
                <BtnFormularios type={'submit'} btnTitulo={'Registrar trabajador'}/>
            </Form>
            <Footer/>
        </div>
    );
};

export default ActualizarTrabajador