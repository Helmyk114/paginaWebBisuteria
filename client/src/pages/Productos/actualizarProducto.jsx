import React, {useState} from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import EditarProducto from "../../components/Formularios/Producto/editarProducto";
import { Button, Form } from "react-bootstrap";
import Imagen from "../../components/Formularios/Controles/imagen";
import { useForm } from "react-hook-form";

function ActualizarProducto() {
    const { handleSubmit, control } = useForm();
    const [selectedImage, setSelectedImage] = useState();

    return (
        <div>
            <Navbar>
            <BotonRetroceder/>
                
                <Titulo 
                    texto='Actualizar Producto'
                />
                <Notificacion/>
            </Navbar>
            <Form style={{display:'block', justifyContent:'center', padding: '10px'}}>
                <Imagen onImageChange={setSelectedImage} />
                <EditarProducto control={control} />
                <Button className="Boton" type="submit">Añadir producto</Button>
            </Form>
            <Footer/>
        </div>
    );
};

export default ActualizarProducto