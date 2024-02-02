import React, {useEffect, useState} from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import EditarTrabajador from "../../components/Formularios/Trabajador/editarTrabajador";
import { Form } from "react-bootstrap";
import Imagen from "../../components/Formularios/Controles/imagen";
import BtnFormularios from "../../components/Botones/BotonFormularios/btnFormularios";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { detalleInformacionApi } from "../../api/productos";

function ActualizarTrabajador() {

    const { handleSubmit, control } = useForm();
    const [selectedImage, setSelectedImage] = useState();
    const { idCardWorker } = useParams();
    const [informacionTrabajador, setInformacionTrabajador] = useState({});
  
    useEffect(() => {
      const obtenerDatos = async () => {
        try {
          const response = await detalleInformacionApi('trabajadores', idCardWorker);
          setInformacionTrabajador(response.data);
        } catch (error) {
          console.error('Error al obtener la información del trabajador: ', error);
        }
    };
    obtenerDatos();
    }, [idCardWorker]);
  
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
                <EditarTrabajador control={control}  informacionTrabajador={informacionTrabajador} />
                <BtnFormularios type={'submit'} btnTitulo={'Registrar trabajador'}/>
            </Form>
            <Footer/>
        </div>
    );
};

export default ActualizarTrabajador