import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { Form } from "react-bootstrap";
import Navbar, { Titulo, Notificacion, BotonRetroceder } from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer"
import EditarTrabajador from "../../components/Formularios/Trabajador/editarTrabajador";
import Imagen from "../../components/Formularios/Controles/imagen";
import BtnFormularios from "../../components/Botones/BotonFormularios/btnFormularios";
import { actualizarInformacionApi, detalleInformacionApi } from "../../api/productos";
import procesarImagen from "../../utils/procesadorImagenes";
import Swal from "sweetalert2";

function ActualizarTrabajador() {

	const { handleSubmit, control } = useForm();
	const [selectedImage, setSelectedImage] = useState("");
	const [informacionTrabajador, setInformacionTrabajador] = useState({});
	const { idCardWorker } = useParams();
	const raizUrl = process.env.REACT_APP_API_URL;

	useEffect(() => {
		const obtenerDatos = async () => {
			try {
				const response = await detalleInformacionApi('trabajadores', idCardWorker);
				setInformacionTrabajador(response.data);

				if (response.data[0] && response.data[0].photo) {
					const photo = response.data[0].photo;
					setSelectedImage(`${raizUrl}/${photo}`);
				}
			} catch (error) {
				console.error('Error al obtener la información del trabajador: ', error);
			}
		};
		obtenerDatos();
	}, [idCardWorker, raizUrl]);

	const onSubmit = async (data) => {
		const trabajador = {
			...data,
			photo: procesarImagen(selectedImage)
		};

		try {
			await actualizarInformacionApi('trabajadores', idCardWorker, trabajador);
			Swal.fire({
				icon: "success",
				title: "Se ha actualizado un trabajador!",
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
					texto='Actualizar información'
				/>
				<Notificacion />
			</Navbar>
			<Form style={{ margin: '0 auto', width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
				<Imagen onImageChange={setSelectedImage} defaultImageSrc={informacionTrabajador || "" } />
				<EditarTrabajador control={control} informacionTrabajador={informacionTrabajador} />
				<BtnFormularios type={'submit'} btnTitulo={'Registrar trabajador'} />
			</Form>
			<Footer />
		</div>
	);
};

export default ActualizarTrabajador;