import React, {useState} from "react";
import Navbar, { Titulo, Notificacion } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import FormularioTrabajador from "../../components/Formularios/añadirTrabajador";
import Imagen from "../../components/Formularios/Controles/imagen";
import { useForm } from "react-hook-form";
import { añadiProductoAPI } from "../../api/productos";
import { Button, Form } from "react-bootstrap";

function CrearTrabajador() {
    const { handleSubmit, control } = useForm();
    const [selectedImage, setSelectedImage] = useState();
    const endPoint = 'producto'

    const onSubmit = async (data) => {
        const producto = {
        ...data,
        image: selectedImage,
        };
        try {
            await añadiProductoAPI(producto, endPoint)
            // Swal.fire('Producto creado', 'success')
        } catch (error) {
            // Swal.fire('Error', 'No se pudo crear el producto', 'error');
        }
    };

    return (
        <div>
            <Navbar>
                <Titulo 
                    texto='Añadir trabajador'
                />
                <Notificacion/>
            </Navbar>
            <Form style={{display:'block', justifyContent:'center', padding: '10px', marginLeft:'0', marginRight:'0'}} onSubmit={handleSubmit(onSubmit)}>
                <Imagen onImageChange={setSelectedImage} />
                <FormularioTrabajador control={control} />
                <Button className="Boton" type="submit">Añadir Trabajador</Button>
            </Form>
            
            
            
            <Footer/>
        </div>
    );
};

export default CrearTrabajador