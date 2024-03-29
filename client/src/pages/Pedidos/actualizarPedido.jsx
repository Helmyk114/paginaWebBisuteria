import React, { useRef, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

import { Spacer, Tooltip } from "@nextui-org/react";
import NavigateVEN, { Retroceder, Titulo } from "../../components/UI/navbar/navbarVendedor";
import Acordeon from "../../components/UI/Acordeon/Acordeon";
import InputText from "../../components/UI/formulario/Inputs/inputText";
import Footer from "../../components/UI/Footer/Footer";
import { detalleInformacionApi } from "../../api/axiosServices";
import DeleteIcon from "../../components/UI/iconos/Eliminar";
import BotonCantidad from "../../components/UI/botones/botonCantidad/botonCantidad";
import CardPerfil, { Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import Avatares from "../../components/UI/avatar/Avatares";

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
				<Acordeon className="acordeonFormAP" titulo={'Datos del cliente'}>
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
	
				<Acordeon className="acordeonProAP" titulo={'Lista de productos'}>
					<Spacer y={3} />
					{/* <div>
						{selectedProducts && selectedProducts.length > 0 ? (
							selectedProducts.map((product, index) => (
								<div key={index}>
									<CardPerfil
										className1={"cardCrearPedido"}
										className2={"cardCrearPedidoGap"}
									>
										<div className="cont1CrP" style={{ gap: "6px" }}>
											<Avatares
												src={product.img}
												alt={product.producto}
												radio={"full"} />
											<Spacer x={3} />
											<Texto1Card
												texto={product.producto} />
											<div style={{ display: "flex", justifyContent: "center" }}>
												<BotonCantidad
													onPriceChange={(price) => {
														const updatedPrices = [...productPrices];
														if (updatedPrices[index] !== price) {
															updatedPrices[index] = price;
															setProductPrices(updatedPrices);
															setTotalPrice(calculateTotalPrice());
														}
													}}
													precio={product.precio}
													index={index}
													onQuantityChange={(quantity) => handleQuantityChange(quantity, index)}
												/>
											</div>
										</div>
										<div className="cont2CrP">
											<Texto2Card texto2={productPrices[index]} />
											<div
												style={{ display: "flex" }}>
												<Tooltip content="Eliminar producto">
													<span className="text-lg text-danger cursor-pointer active:opacity-50" >
														<DeleteIcon />
														eliminar={() => eliminarProducto(index)}
													</span>
												</Tooltip>
											</div>
										</div>
									</CardPerfil>
									<Spacer y={3} />
								</div>
							))
						) : (
							<p>No hay productos seleccionados.</p>
						)}
					</div> */}
				</Acordeon>
				</form>

			<Footer />
		</div>
	);
};

export default ActualizarPedido