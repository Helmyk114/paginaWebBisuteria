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
import BotonCantidad from "../../components/UI/botones/botonCantidad/botonCantidad";
import BotonComprar2 from "../../components/UI/botones/botonCompraPedido";
import Texto3 from "../../components/UI/botones/total";
import DeleteIcon from "../../components/UI/iconos/Eliminar";

import { decodificarToken, obtenerToken } from "../../utils/token";
import { actualizarInformacionSinImagenApi, añadirInformacionSinImagenAPI, detalleInformacionApi } from "../../api/axiosServices";
import { notificacionConfirmar, notificacionError } from "../../utils/notificacionCliente";

const CrearPedido = () => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const token = obtenerToken();
	const id = decodificarToken(token).userId;
	const mensaje = 'Este campo es requerido'
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

		let idsProductos = [];
		const productIdPriceMap = {};

		state.selectedProducts.forEach(producto => {
			idsProductos.push(producto.idProduct);
		});

		idsProductos.forEach((productId, index) => {
			productIdPriceMap[productId] = productPrices[index];
		});

		const productosConPropiedades = selectedProducts.map(producto => {
			const precioProducto = productIdPriceMap[producto.idProduct];
			const subtotal = producto.cantidad || 1; // Si la cantidad es falsa (0, undefined, null, etc.), utiliza 1 como valor predeterminado
			return {
				idProduct: producto.idProduct,
				quantity: subtotal,
				subTotal: precioProducto
			};
		})

		const orden = {
			idCardWorker: `${id}`,
			total: totalPrice,
			quantityProducts: cantidadProductos,
			idCardClient: data.idCardClient,
			details: productosConPropiedades
		};
		console.log("Orden:", orden);

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

	const handleQuantityChange = (quantity, index) => {
		// Actualizar la cantidad individual de cada producto
		const updatedProducts = selectedProducts.map((product, i) => {
			if (i === index) {
				// Actualizar la cantidad del producto actual
				const updatedProduct = { ...product, cantidad: quantity };
				return updatedProduct;
			}
			return product;
		});
		setSelectedProducts(updatedProducts); // Actualizar estado de productos seleccionados
		// Actualizar el estado de la cantidad total de productos
		const totalQuantity = updatedProducts.reduce((total, product) => total + (product.cantidad || 1), 0);
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
					<div>
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
														<DeleteIcon eliminar={() => eliminarProducto(index)} />
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
					</div>
				</Acordeon>
				<Spacer y={5} />
				<BotonComprar2 text={"Comprar"}>
					<Texto3 precio={`${totalPrice}`} />
				</BotonComprar2>
			</form>
			<Footer />
		</div>
	);
};

export default CrearPedido;