import React, { useRef } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';
import './crearPedido.css';

import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import Acordeon from "../../components/UI/Acordeon/Acordeon";
import { Card, CardBody, Spacer } from "@nextui-org/react";
import InputText from "../../components/UI/formulario/Inputs/inputText";
import BotonEnviar from "../../components/UI/botones/botonEnviar"
import Footer from "../../components/UI/Footer/Footer";
import { añadirInformacionAPI } from "../../api/productos";
import Swal from "sweetalert2";
import Comprar from "./comprar";

function CrearPedido() {

	const { register, handleSubmit, formState: { errors } } = useForm();
	const mensaje = 'Este campo es requerido'

	const refs = useRef({
		idCardClient: null,
		nameclient: null,
		clientAddress: null,
		clientPhone: null,
	});

	const location = useLocation();
	const { state } = location;

	const onSubmit = async (data) => {
		const cliente = {
			...data,
		};
		console.log(cliente)
		try {
			await añadirInformacionAPI(cliente, 'cliente');
			Swal.fire({
				icon: "success",
				title: "Se ha creado un trabajador!",
				showConfirmButton: false,
				timer: 1500
			});
		} catch (error) {
			console.error('Error al crear un cliente', error)
			Swal.fire({
				icon: "error",
				title: "No Se puede crear un trabajador!",
				showConfirmButton: false,
				timer: 1500
			});
		}
	};

	return (
		<div>
			<Navigate>
				<Retroceder />
				<Titulo espacio="center" titulo="Crear pedido" />
				<Notificacion />
			</Navigate>

			<Spacer y={4} />

			<form onSubmit={handleSubmit(onSubmit)}>
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
								size="md"
							/>
							{errors.idCardClient && <span>{errors.idCardClient.message}</span>}
						</div>
						<div className="flex flex-col">
							<InputText ref={(el) => { refs.current.nameclient = el; }}
								{...register("nameclient", { required: { value: true, message: mensaje } })}
								key="nameclient"
								type="text"
								label={<span className="custom-label">Nombre</span>}
								labelPlacement="outside"
								placeholder={"Escriba el nombre del producto"}
								size="md"
							/>
							{errors.nameclient && <span>{errors.nameclient.message}</span>}
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
								size="md"
							/>
							{errors.clientPhone && <span>{errors.clientPhone.message}</span>}
						</div>
					</div>
					<Spacer y={4} />
				</Acordeon>

				<Spacer y={4} />
				<Acordeon titulo={'Lista de productos'}>
					<Card className="" style={{ width: "100%", margin: "0 auto" }}>

						<CardBody className="cardProduct">
							{state.selectedProducts.map((product, index) => (
								<div key={index}>
									<img className="img" src={product.img} alt={product.producto} />
									<p className="p1">{product.producto}</p>
									<p className="p2">{product.precio}</p>
								</div>
							))}
						</CardBody>
						<Spacer y={4} />
					</Card>
				</Acordeon>
				<Spacer y={5} />

				<Comprar
				total="300.000"
				/>
			</form>
			<Spacer y={4} />
			<div style={{marginTop:"40px"}}><Footer /></div>
			
		</div>
	);
};

export default CrearPedido;