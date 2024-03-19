import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { Spacer } from "@nextui-org/react";
import NavigateVEN, { Retroceder, Titulo } from "../../components/UI/navbar/navbarVendedor";
import Acordeon from "../../components/UI/Acordeon/Acordeon";
import InputText from "../../components/UI/formulario/Inputs/inputText";
import Footer from "../../components/UI/Footer/Footer";
import { detalleInformacionApi } from "../../api/axiosServices";

function ActualizarPedido() {

	const { register, handleSubmit, formState: { errors } } = useForm();
	const mensaje = 'Este campo es requerido';
	const [informacionCliente, setInformacionCliente] = useState({});
	const { idOrder } = useParams();

	const refs = useRef({
		idCardClient: null,
		clientname: null,
		clientAddress: null,
		clientPhone: null,
	});

	useEffect(() => {
		const obtenerDatos = async () => {
			try {
				const respuesta = await detalleInformacionApi('cliente-Orden', idOrder);
				setInformacionCliente(respuesta.data);
			} catch (error) {
				console.error('Error al obtener la información del cliente: ', error);
			}
		};
		obtenerDatos();
	}, [idOrder]);


	if (!informacionCliente || Object.keys(informacionCliente).length === 0) {
		return <div>Cargando...</div>
	}
	return (
		<div>
			<NavigateVEN>
				<Retroceder />
				<Titulo espacio="center" titulo="Editar pedido" />
			</NavigateVEN>
			<Spacer y={4} />
			{/* onSubmit={handleSubmit(onSubmit)} */}
			<form >
				<Acordeon titulo={'Datos del cliente'}>
					<div className="gap-4" style={{ display: "grid", gridTemplateColumns: "2fr 2fr" }}>
						<div className="flex flex-col">
							<InputText ref={(el) => { refs.current.idCardClient = el; }}
								{...register("idCardClient", { required: { value: true, message: mensaje } })}
								key="idCardClient"
								type="text"
								label={<span className="custom-label">Cédula</span>}
								labelPlacement="outside"
								placeholder={"Escriba el nombre del producto"}
								defaultValue={informacionCliente[0].idCardClient}
								size="md"
							/>
							{errors.idCardClient && <span>{errors.idCardClient.message}</span>}
						</div>
						<div className="flex flex-col">
							<InputText ref={(el) => { refs.current.clientname = el; }}
								{...register("clientname", { required: { value: true, message: mensaje } })}
								key="nameclient"
								type="text"
								label={<span className="custom-label">Nombre</span>}
								labelPlacement="outside"
								placeholder={"Escriba el nombre del producto"}
								defaultValue={informacionCliente[0].clientname}
								size="md"
							/>
							{errors.clientname && <span>{errors.clientname.message}</span>}
						</div>
					</div>
					<Spacer y={4} />
					<div className="gap-4" style={{ display: "grid", gridTemplateColumns: "2fr 2fr" }}>
						<div className="flex flex-col">
							<InputText ref={(el) => { refs.current.clientAddress = el; }}
								{...register("clientAddress", { required: { value: true, message: mensaje } })}
								key="clientAddress"
								type="text"
								label={<span className="custom-label">Dirección</span>}
								labelPlacement="outside"
								placeholder={"Escriba el nombre del producto"}
								defaultValue={informacionCliente[0].clientAddress}
								size="md"
							/>
							{errors.clientAddress && <span>{errors.clientAddress.message}</span>}
						</div>
						<div className="flex flex-col">
							<InputText ref={(el) => { refs.current.clientPhone = el; }}
								{...register("clientPhone", { required: { value: true, message: mensaje } })}
								key="clientPhone"
								type="text"
								label={<span className="custom-label">Celular</span>}
								labelPlacement="outside"
								placeholder={"Escriba el nombre del producto"}
								defaultValue={informacionCliente[0].clientPhone}
								size="md"
							/>
							{errors.clientPhone && <span>{errors.clientPhone.message}</span>}
						</div>
					</div>
					<Spacer y={4} />
				</Acordeon>
				<Spacer y={4} />
				</form>

			<Footer />
		</div>
	);
};

export default ActualizarPedido