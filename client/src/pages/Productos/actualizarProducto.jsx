import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import EditarProducto from "../../components/Formularios/Producto/editarProducto";
import Imagen from "../../components/Formularios/Controles/imagen";
import BtnFormularios from "../../components/Botones/BotonFormularios/btnFormularios";
import { actualizarInformacionApi, detalleInformacionApi } from "../../api/productos";
import Swal from "sweetalert2";

function ActualizarProducto() {
	const { handleSubmit, control } = useForm();
	const [selectedImage, setSelectedImage] = useState("");
	const [informacionProducto, setInformacionProducto] = useState({});
	const { idProduct } = useParams();
	const raizUrl = process.env.REACT_APP_API_URL;

	useEffect(() => {
		const obtenerDatos = async () => {
			try {
				const response = await detalleInformacionApi('productos', idProduct);
				setInformacionProducto(response.data);
				if (response.data[0] && response.data[0].image) {
					const imagen = response.data[0].image;
					setSelectedImage(`${raizUrl}/${imagen}`);
				}
			} catch (error) {
				console.error('Error al obtener la informacion de losproductos: ',error)
			}
		};
		obtenerDatos();
	}, [idProduct]);

	function procesarImagen(url) {
		const patron = /^.*\/IRis\/uploads\/products\//;

		if (patron.test(url)) {
			return url.replace(/^.*\/uploads/, "uploads") 
		} else {
			return url
		}
	};

	const onSubmit = async (data) =>{
		const producto = {
			...data,
			image: procesarImagen(selectedImage)
		};
		
		try {
			await actualizarInformacionApi('productos',idProduct,producto);
			Swal.fire({
				icon: "success",
				title: "Se ha actualizado un producto!",
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
				<BotonRetroceder />

				<Titulo
					texto='Actualizar Producto'
				/>
				<Notificacion />
			</Navbar>
			<Form style={{ display: 'block', justifyContent: 'center', padding: '10px' }} onSubmit={handleSubmit(onSubmit)}>
				<Imagen onImageChange={setSelectedImage} defaultImageSrc={ informacionProducto || ""}/>
				<EditarProducto control={control} informacionProducto={informacionProducto}/>
				<BtnFormularios type={'submit'} btnTitulo={'Editar producto'} />
			</Form>
			<Footer />
		</div>
	);
};

export default ActualizarProducto;