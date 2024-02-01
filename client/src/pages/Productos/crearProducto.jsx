import React, { useState } from "react";
import Navbar, { Titulo, Notificacion } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import Imagen from "../../components/Formularios/Controles/imagen"
import { useForm } from "react-hook-form";
import { añadirInformacionAPI } from "../../api/productos";
import { Button, Form } from "react-bootstrap";
import FormularioProducto from "../../components/Formularios/Producto/añadirProducto";
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'

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
            await añadirInformacionAPI(producto, endPoint)
            Swal.fire({
                icon: "success",
                title: "Se ha añadido un producto!",
                showConfirmButton: false,
                timer: 1500
              });
        } catch (error) {
            console.error('Error al crear un producto', error)
            Swal.fire({
                icon: "error",
                title: "No Se puede crear el producto",
                showConfirmButton: false,
                timer: 1500
            });
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

            <Form style={{display:'block', justifyContent:'center', padding: '10px'}} onSubmit={handleSubmit(onSubmit)}>
                <Imagen onImageChange={setSelectedImage} />
                <FormularioProducto control={control} />
                <Button className="Boton" type="submit">Añadir producto</Button>
            </Form>

            <Footer/>
        </div>
    );
};

export default CrearProducto