import React, { useRef } from "react";
import { useForm } from "react-hook-form";

import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import { Card, CardHeader, CardBody, Divider, Spacer } from "@nextui-org/react";
import InputText from "../../components/UI/formulario/Inputs/inputText";
import BotonEnviar from "../../components/UI/botones/botonEnviar"
import Footer from "../../components/UI/Footer/Footer";
import Acordeon from "../../components/UI/Acordeon/Acordeon";


function CrearPedido() {

	const { register, handleSubmit, formState: { errors } } = useForm();
	const refs = useRef({
		idCardClient: null,
		nameclient: null,
		clientAddress: null,
		clientPhone: null,
	});

	return (
		<div>
			<Navigate>
				<Retroceder />
				<Titulo espacio="center" titulo="Crear pedido" />
				<Notificacion />
			</Navigate>

			<Spacer y={4} />
		
					<Acordeon titulo={'Datos del cliente'}>

					<div className="gap-4" style={{ display: "grid", gridTemplateColumns: "2fr 2fr" }}>
						<InputText ref={(el) => { refs.current.idCardClient = el; }}
							{...register("idCardClient", { required: { value: true, message: 'El nombre del producto es requerido' } })}
							key="idCardClient"
							type="text"
							label={<span className="custom-label">Cédula</span>}
							labelPlacement="outside"
							placeholder={"Escriba el nombre del producto"}
							size="md"
						/>
						{errors.idCardClient && <span>{errors.idCardClient.message}</span>}

						<InputText ref={(el) => { refs.current.nameclient = el; }}
							{...register("nameclient", { required: { value: true, message: 'El nombre del producto es requerido' } })}
							key="nameclient"
							type="text"
							label={<span className="custom-label">Nombre</span>}
							labelPlacement="outside"
							placeholder={"Escriba el nombre del producto"}
							size="md"
						/>
						{errors.nameclient && <span>{errors.nameclient.message}</span>}
					</div>
					<Spacer y={4} />
					<div className="gap-4" style={{ display: "grid", gridTemplateColumns: "2fr 2fr" }}>
						<InputText ref={(el) => { refs.current.clientAddress = el; }}
							{...register("clientAddress", { required: { value: true, message: 'El nombre del producto es requerido' } })}
							key="clientAddress"
							type="text"
							label={<span className="custom-label">Dirección</span>}
							labelPlacement="outside"
							placeholder={"Escriba el nombre del producto"}
							size="md"
						/>
						{errors.clientAddress && <span>{errors.clientAddress.message}</span>}

						<InputText ref={(el) => { refs.current.clientPhone = el; }}
							{...register("clientPhone", { required: { value: true, message: 'El nombre del producto es requerido' } })}
							key="clientPhone"
							type="text"
							label={<span className="custom-label">Celular</span>}
							labelPlacement="outside"
							placeholder={"Escriba el nombre del producto"}
							size="md"
						/>
						{errors.clientPhone && <span>{errors.clientPhone.message}</span>}
					</div>
					<Spacer y={4} />
					</Acordeon>
			
			<Spacer y={4} />
			<Acordeon titulo={'Lista de productos'}>

			</Acordeon>
	

			<div style={{ width: "100%", height: "100px", padding: "10px", display: "flex", alignItems: "center", gap: "30px", position: "absolute", backgroundColor: "#454F96", borderRadius: "30px" }}>

				<BotonEnviar
					text={"Comprar"}
					type={"submit"}
				/>

			</div>
			<Spacer y={4} />
			<Footer />
		</div>
	);
};

export default CrearPedido;