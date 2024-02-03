import React, { useState } from "react";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import EditarProducto from "../../components/Formularios/Producto/editarProducto";
import { Form } from "react-bootstrap";
import Imagen from "../../components/Formularios/Controles/imagen";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { detalleInformacionApi } from "../../api/productos";
import BtnFormularios from "../../components/Botones/BotonFormularios/btnFormularios";

function ActualizarProducto() {
	const { handleSubmit, control } = useForm();
	const [selectedImage, setSelectedImage] = useState();
	const { idProduct } = useParams();
	const [informacionProducto, setInformacionProducto] = useState({});

	useEffect(() => {
		const obtenerDatos = async () => {
			try {
				const response = await detalleInformacionApi('productos', idProduct);
				setInformacionProducto(response.data);
			} catch (error) {
				console.error('Error al obtener la informacion de losproductos: ',error)
			}
		};
		obtenerDatos();
	}, [idProduct]);

	return (
		<div>
			<Navbar>
				<BotonRetroceder />

				<Titulo
					texto='Actualizar Producto'
				/>
				<Notificacion />
			</Navbar>
			<Form style={{ display: 'block', justifyContent: 'center', padding: '10px' }}>
				<Imagen onImageChange={setSelectedImage} />
				<EditarProducto control={control} informacionProducto={informacionProducto}/>
				<BtnFormularios type={'submit'} btnTitulo={'Editar producto'} />
			</Form>
			<Footer />
		</div>
	);
};

export default ActualizarProducto;