import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { Card, Spacer } from "@nextui-org/react";
import SubirImagen from "../../components/UI/formulario/Imagen/imagen";
import InputText from "../../components/UI/formulario/Inputs/inputText";
import InputPassword from "../../components/UI/formulario/Inputs/password/inputPassword";
import ListBoxSimple from "../../components/UI/formulario/Combox/listBoxSimple";
import BotonEnviar from "../../components/UI/botones/botonEnviar";
import Footer from "../../components/UI/Footer/Footer";

import { actualizarInformacionApi, detalleInformacionApi } from "../../api/productos";
import procesarImagen from "../../utils/procesadorImagenes";
import Swal from "sweetalert2";
import NavigateADM, { Retroceder, Titulo }  from "../../components/UI/navbar/navbarAdmin";

function ActualizarTrabajador() {

	const { register, handleSubmit, formState: { errors } } = useForm();
	const [selectedImage, setSelectedImage] = useState("");
	const [informacionTrabajador, setInformacionTrabajador] = useState({});
	const { idCardWorker } = useParams();
	const raizUrl = process.env.REACT_APP_API_URL;

	const refs = useRef({
		workerName: null,
		workerLastName: null,
		workerEmail: null,
		wokerPhone: null,
		idCardWorker: null,
		userName: null,
		password: null,
		idRole: null,
		numberBank: null,
		idBank: null,
	});

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

	if (!informacionTrabajador || Object.keys(informacionTrabajador).length === 0) {
		return <div>Cargando...</div>
	};

	return (
		<div>
			<NavigateADM>
				<Retroceder />
				<Titulo espacio="center" titulo="Actualizar información" />
			</NavigateADM>

			<Spacer y={4} />
			<form style={{ margin: '0 auto', width: '100%' }} onSubmit={handleSubmit(onSubmit)}>
				<SubirImagen onImageChange={setSelectedImage} defaultImageSrc={informacionTrabajador || ""} />
				<Spacer y={4} />
				<Card className='card' style={{ width: '90%' }}>
					<Spacer y={4} />
					<div className="gap-4" style={{ display: "grid", gridTemplateColumns: "2fr 2fr" }}>
						<div className=" cardForm flex flex-col">
							<InputText ref={(el) => { refs.current.workerName = el; }}
								{...register("workerName", { required: { value: true, message: 'El nombre del trabajador es requerido' } })}
								key="workerName"
								type="text"
								label={<span className="custom-label">Nombre</span>}
								labelPlacement="outside"
								placeholder={"Escriba el nombre del trabajador"}
								size="md"
								defaultValue={informacionTrabajador[0].workerName}
								fontSize={"14px"}
							/>
						</div>
						{errors.workerName && <span>{errors.workerName.message}</span>}
						<div className=" cardForm flex flex-col">
							<InputText ref={(el) => { refs.current.workerLastName = el; }}
								{...register("workerLastName", { required: { value: true, message: 'El apellido del trabajador es requerido' } })}
								key="workerLastName"
								type="text"
								label={<span className="custom-label">Apellido</span>}
								labelPlacement="outside"
								placeholder={"Escriba el apellido del trabajador"}
								size="md"
								defaultValue={informacionTrabajador[0].workerLastName}
								fontSize={"14px"}
							/>
							{errors.workerLastName && <span>{errors.workerLastName.message}</span>}
						</div>
					</div>
					<Spacer y={4} />
					<InputText ref={(el) => { refs.current.workerEmail = el; }}
						{...register("workerEmail", { required: { value: true, message: 'El correo del trabajador es requerido' } })}
						key="workerEmail"
						type="text"
						label={<span className="custom-label">Correo electronico</span>}
						labelPlacement="outside"
						placeholder={"Escriba el correo del trabajador"}
						size="md"
						defaultValue={informacionTrabajador[0].workerEmail}
						fontSize={"14px"}
					/>
					{errors.workerEmail && <span>{errors.workerEmail.message}</span>}
					<Spacer y={4} />
					<div className="gap-4" style={{ display: "grid", gridTemplateColumns: "2fr 2fr" }}>
						<div className=" cardForm flex flex-col">
							<InputText ref={(el) => { refs.current.workerPhone = el; }}
								{...register("workerPhone", { required: { value: true, message: 'El número de celular es requerido' } })}
								key="workerPhone"
								type="text"
								label={<span className="custom-label">Celular</span>}
								labelPlacement="outside"
								placeholder={"Escriba el número de celular"}
								size="md"
								defaultValue={informacionTrabajador[0].workerPhone}
								fontSize={"14px"}
							/>
							{errors.workerPhone && <span>{errors.workerPhone.message}</span>}
						</div>
						<div className=" cardForm flex flex-col">
							<InputText ref={(el) => { refs.current.idCardWorker = el; }}
								{...register("idCardWorker", { required: { value: true, message: 'El número de cédula es requerido' } })}
								key="idCardWorker"
								type="text"
								label={<span className="custom-label">Cédula</span>}
								labelPlacement="outside"
								placeholder={"Escriba el número de cédula"}
								size="md"
								defaultValue={informacionTrabajador[0].idCardWorker}
								fontSize={"14px"}
							/>
							{errors.idCardWorker && <span>{errors.idCardWorker.message}</span>}
						</div>
					</div>
					<Spacer y={4} />
					<div className="gap-4" style={{ display: "grid", gridTemplateColumns: "2fr 2fr" }}>
						<div className=" cardForm flex flex-col">
							<InputText ref={(el) => { refs.current.userName = el; }}
								{...register("userName", { required: { value: true, message: 'El usuario es requerido' } })}
								key="userName"
								type="text"
								label={<span className="custom-label">Usuario</span>}
								labelPlacement="outside"
								placeholder={"Escriba el usuario"}
								size="md"
								defaultValue={informacionTrabajador[0].userName}
								fontSize={"14px"}
							/>
							{errors.userName && <span>{errors.userName.message}</span>}
						</div>
						<div className=" cardForm flex flex-col">
							<InputPassword
								ref={(el) => { refs.current.password = el; }}
								{...register("password", { required: { value: true, message: 'La contraseña requerida' } })}
								key="password"
								label={<span className="custom-label">Contraseña</span>}
								labelPlacement={"outside"}
								placeholder={" "}
								size="md"
								fontSize={"14px"}
							/>
							{errors.password && <span>{errors.password.message}</span>}
						</div>
					</div>
					<Spacer y={4} />
					<div className="gap-4" style={{ display: "grid", gridTemplateColumns: "2fr 2fr" }}>
						<div className=" cardForm flex flex-col">
							<InputText ref={(el) => { refs.current.numberBank = el; }}
								{...register("numberBank", { required: { value: true, message: 'El número de cuenta es requerido' } })}
								key="numberBank"
								type="text"
								label={<span className="custom-label">Número de cuenta</span>}
								labelPlacement="outside"
								placeholder={"Escriba su número de cuenta"}
								size="md"
								defaultValue={informacionTrabajador[0].numberBank}
								fontSize={"14px"}
							/>
							{errors.numberBank && <span>{errors.numberBank.message}</span>}
						</div>
						<div className=" cardForm flex flex-col">
							<ListBoxSimple
									ref={(el) => { refs.current.idBank = el; }}
									{...register("idBank", { required: { value: true, message: 'La categoria es requerido' } })}
									key="idBank"
									label={<span className="custom-label">Banco</span>}
									labelPlacement="outside"
									placeholder="Seleccione una banco"
									size="md"
									apiEndpoint="banco"
									defaultInputValue={`${informacionTrabajador[0].idBank}`}
									idOpcion="idBank"
									texto="banks"
								/>
								{errors.idBank && <span>{errors.idBank.message}</span>}
						</div>
					</div>
					<Spacer y={4} />
					<BotonEnviar text="Editar información" type="submit" />
					<Spacer y={4} />
				</Card>
			</form>
			<Spacer y={4} />
			<Footer />
		</div>
	);
};

export default ActualizarTrabajador;