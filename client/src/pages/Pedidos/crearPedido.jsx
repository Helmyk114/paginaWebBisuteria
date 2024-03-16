import React, { useEffect, useRef, useState, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import "./crearPedido.css";

import { Spacer, Tooltip } from "@nextui-org/react";
import NavigateVEN, { Retroceder, Titulo } from "../../components/UI/navbar/navbarVendedor";
import Acordeon from "../../components/UI/Acordeon/Acordeon";
import InputText from "../../components/UI/formulario/Inputs/inputText";
import Footer from "../../components/UI/Footer/Footer";
import CardPerfil, { Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import Avatares from "../../components/UI/avatar/Avatares";
import BotonCantidad from "../../components/UI/botones/botonCantidad";
import BotonComprar2 from "../../components/UI/botones/botonCompraPedido";
import Texto3 from "../../components/UI/botones/total";
import DeleteIcon from "../../components/UI/iconos/Eliminar";

import { actualizarInformacionSinImagenApi, añadirInformacionSinImagenAPI, detalleInformacionApi } from "../../api/productos";
import { decodificarToken, obtenerToken } from "../../utils/token";
import { notificacionConfirmar, notificacionError } from "../../utils/notificacionCliente";

const CrearPedido = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const location = useLocation();
	const { state } = location;

	const [productPrices, setProductPrices] = useState(() => {
		// Inicializar el array de precios con los precios iniciales de los productos
		return state.selectedProducts.map(product => product.precio);
	});

	const calculateTotalPrice = useCallback(() => {
		return productPrices.reduce((total, price) => total + price, 0);
	}, [productPrices]);

	const [totalPrice, setTotalPrice] = useState(calculateTotalPrice());
	const [cantidadProductos, setCantidadProductos] = useState(0); // Estado para la cantidad de productos
	const [selectedProducts, setSelectedProducts] = useState(state.selectedProducts); // Nuevo estado para los productos seleccionados

	useEffect(() => {
		// Actualizar el estado totalPrice con la suma calculada
		setTotalPrice(calculateTotalPrice());
	}, [productPrices, calculateTotalPrice]);

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
		if (!data.idCardClient || !data.clientname || !data.clientAddress || !data.clientPhone) {
			return;
		}
		const newCliente = {
			idCardClient: data.idCardClient,
			clientname: data.clientname,
			clientAddress: data.clientAddress,
			clientPhone: data.clientPhone
		};
		console.log("newCliente:", newCliente);
		const oldCliente = {
			clientname: data.clientname,
			clientAddress: data.clientAddress,
			clientPhone: data.clientPhone
		};
		console.log("oldCliente:", oldCliente);
		const orden = {
			idCardWorker: `${id}`,
			total: data.total,
			quantityProducts: "5", // Convertir a string y añadir la cantidad de productos al objeto JSON
			idCardClient: data.idCardClient
		};

		console.log("Orden:", orden);

		// let idsProductos = [];

		// state.selectedProducts.forEach(producto => {
		// 	idsProductos.push(producto.idProduct);
		// });
		// const detallepProductos = {
		// 	idProduct: idsProductos,
		// 	quantity: "10",
		// 	subtotal: "20",
		// 	//idOrder: ""
		// };

		try {
			const infoClient = await detalleInformacionApi('cliente', data.idCardClient)
			if (infoClient) {
				await actualizarInformacionSinImagenApi('cliente', data.idCardClient, oldCliente)
			} else {
				await añadirInformacionSinImagenAPI(newCliente, 'cliente');
			}
			await añadirInformacionSinImagenAPI(orden, 'orden');
			notificacionConfirmar({ titulo: "Se ha enviado su pedido!" });
		} catch (error) {
			console.error('Error al crear un cliente', error);
			notificacionError({ titulo: "No Se puede enviar su pedido!" });
		}
	};

	const handleQuantityChange = (quantity) => {
		// Suma la cantidad de unidades de todos los productos
		const totalQuantity = state.selectedProducts.reduce((total, product) => total + quantity, 0);
		setCantidadProductos(totalQuantity);
	};

	const eliminarProducto = (index) => {
		const updatedProducts = [...selectedProducts];
		updatedProducts.splice(index, 1);
		const updatedPrices = [...productPrices];
		updatedPrices.splice(index, 1);
		setProductPrices(updatedPrices);
		setSelectedProducts(updatedProducts); // Actualizar estado de productos seleccionados
		console.log(updatedProducts);
	};



	return (
		<div>
			<NavigateVEN>
				<Retroceder />
				<Titulo espacio="center" titulo="Crear pedido" />
			</NavigateVEN>
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
				</Acordeon>

				<Spacer y={4} />
				<Acordeon titulo={'Lista de productos'}>

					<Spacer y={3} />
					{selectedProducts.map((product, index) => (
						<div key={index}>
							<CardPerfil
								className1={"cardCrearPedido"}
								className2={"cardCrearPedidoGap"}
							>

								<div className="cont1CrP" style={{ gap: "6px" }}>
									<Avatares
										src={product.img} alt={product.producto}
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
											onQuantityChange={(quantity) => handleQuantityChange(quantity)} // Agrega esta prop
										/>
									</div>
								</div>
								<div className="cont2CrP">
									<Texto2Card

										texto2={productPrices[index]}
									/>
									<div
										style={{ display: "flex" }}>
										<Tooltip content="Eliminar producto">
											<span className="text-lg text-danger cursor-pointer active:opacity-50" onClick={() => eliminarProducto(index)}>
												<DeleteIcon />
											</span>
										</Tooltip>
									</div>
								</div>

							</CardPerfil>
							<Spacer y={3} />
						</div>
					))}
				</Acordeon>
				<Spacer y={5} />
				<BotonComprar2 text={"Comprar"} onClick={() => onSubmit({ total: totalPrice })}>
					<Texto3
						{...register("total", { value: totalPrice })}
						precio={`${totalPrice}`}
					/>
				</BotonComprar2>

			</form>
			<Footer />

		</div>
	);
};

export default CrearPedido;