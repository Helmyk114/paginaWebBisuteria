import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from 'react-router-dom';
import './crearPedido.css';

import { Spacer, Tooltip } from "@nextui-org/react";
import Navigate, { Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import Acordeon from "../../components/UI/Acordeon/Acordeon";
import InputText from "../../components/UI/formulario/Inputs/inputText";
import BotonEnviar from "../../components/UI/botones/botonEnviar"
import Footer from "../../components/UI/Footer/Footer";
import CardPerfil, { Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import Avatares from "../../components/UI/avatar/Avatares";
import BotonCantidad from "../../components/UI/botones/botonCantidad";
import DeleteIcon from "../../components/UI/iconos/Eliminar";

import Swal from "sweetalert2";
import { actualizarInformacionSinImagenApi, añadirInformacionSinImagenAPI, detalleInformacionApi } from "../../api/productos";
import { decodificarToken, obtenerToken } from "../../utils/token";

function CrearPedido() {

	const { register, handleSubmit, formState: { errors } } = useForm();
	const location = useLocation();
	const { state } = location;
	const [productPrice, setProductPrice] = useState(state.selectedProducts.precio);
	const token = obtenerToken();
	const id = decodificarToken(token).userId;
	const mensaje = 'Este campo es requerido'

	const refs = useRef({
		idCardClient: null,
		clientname: null,
		clientAddress: null,
		clientPhone: null,
	});

	const onSubmit = async (data) => {
		const newCliente = {
			idCardClient: data.idCardClient,
			clientname: data.clientname,
			clientAddress: data.clientAddress,
			clientPhone: data.clientPhone
		};
		const oldCliente = {
			clientname: data.clientname,
			clientAddress: data.clientAddress,
			clientPhone: data.clientPhone
		};
		const orden = {
			idCardClient: data.idCardClient,
			idCardWorker: `${id}`,
			idState: "1"
		};
		let idsProductos = [];

		state.selectedProducts.forEach(producto => {
			idsProductos.push(producto.idProduct);
		});
		const productos = {
			idProduct: idsProductos,
			quantity: "10",
			total: "20"
		};
		console.log(productos)

		try {
			// const infoClient = await detalleInformacionApi('cliente', data.idCardClient)
			// if (infoClient) {
			// 	await actualizarInformacionSinImagenApi('cliente', data.idCardClient, oldCliente)
			// } else {
			// 	await añadirInformacionSinImagenAPI(newCliente, 'cliente');
			// }
			// await añadirInformacionSinImagenAPI(orden, 'orden');
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
			</Navigate>

			<Spacer y={4} />

			<form onSubmit={handleSubmit(onSubmit)}>
				{/* <Acordeon titulo={'Datos del cliente'}>
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
							<InputText ref={(el) => { refs.current.clientname = el; }}
								{...register("clientname", { required: { value: true, message: mensaje } })}
								key="nameclient"
								type="text"
								label={<span className="custom-label">Nombre</span>}
								labelPlacement="outside"
								placeholder={"Escriba el nombre del producto"}
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
				</Acordeon> */}

				<Spacer y={4} />
				<Acordeon titulo={'Lista de productos'}>

					<Spacer y={3} />
					{state.selectedProducts.map((product, index) => (
						<div key={index}>
							<CardPerfil
								justifyContent={"space-between"}
								gap={"2px"}
								key={index}
								width={"90%"}
							>
								<div className="cardPerfil"  >
									<div className="contenedor1">
										<Avatares
											src={product.img} alt={product.producto}
											radio={"full"} />
										<Spacer x={3} />
										<Texto1Card
											texto={product.producto} />
										<div style={{ display: "flex", justifyContent: "center" }}>
											<BotonCantidad onPriceChange={(price) => setProductPrice(price)} precio={product.precio}/>
										</div>
									</div>
									<div className="contenedor2">
										<Texto2Card
											texto2={productPrice} />
										<div
											style={{ display: "flex" }}>
											<Tooltip content="Eliminar producto">
												<span className="text-lg text-danger cursor-pointer active:opacity-50">
													<DeleteIcon />
												</span>
											</Tooltip>
										</div>
									</div>
								</div>
							</CardPerfil>
							<Spacer y={3} />
						</div>
					))}
				</Acordeon>
				<Spacer y={5} />
				<BotonEnviar text={"Comprar"} type={"Submit"} />
			</form>
			<Spacer y={4} />
			<div style={{ position: "flex", bottom: "0%", width: "100%", marginTop: "190px" }}>
				<Footer />
			</div>

		</div>
	);
};

export default CrearPedido;