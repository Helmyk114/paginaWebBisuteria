import React, { useState } from "react";
import Navbar, { Titulo, Notificacion } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import Imagen from "../../components/Formularios/Controles/imagen"
import { useForm } from "react-hook-form";
import { añadiProductoAPI } from "../../api/productos";
import { Button, Form } from "react-bootstrap";
import FormularioProducto from "../../components/Formularios/añadirProducto";

function CrearProducto() {

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
                    texto='Crear Producto'
                />
                <Notificacion/>
            </Navbar>

            <Form onSubmit={handleSubmit(onSubmit)}>
                <Imagen onImageChange={setSelectedImage} />
                <FormularioProducto control={control} />
                <Button className="Boton" type="submit">Añadir producto</Button>
            </Form>

            <Footer/>
        </div>
    );
};

export default CrearProducto