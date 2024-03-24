import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";

import { Spacer, Tooltip } from "@nextui-org/react";
import NavigateADM, { Retroceder, Titulo } from "../../components/UI/navbar/navbarAdmin";
import CardPerfil, { Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import Acordeon from "../../components/UI/Acordeon/Acordeon";
import Avatares from "../../components/UI/avatar/Avatares";
import CheckboxInfo from "../../components/UI/formulario/CheckBox/CheckBox";
import BotonEnviar from "../../components/UI/botones/botonEnviar";
import DeleteIcon from "../../components/UI/iconos/Eliminar";
import Loader from "../../components/UI/cargando/loader";
import Footer from "../../components/UI/Footer/Footer";

import { añadirInformacionSinImagenAPI, listarInformacionApi, listarInformacionConParametroApi } from "../../api/axiosServices";
import BotonCantidad from "../../components/UI/botones/botonCantidad/botonCantidadSimple";
import BotonComprar2 from "../../components/UI/botones/botonCompraPedido";
import Texto3 from "../../components/UI/botones/total";
import { notificacionConfirmar, notificacionError } from "../../utils/notificacionCliente";

function CrearListaTrabajo() {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const [informacionArtesano, setInformacionArtesano] = useState([]);
	const [informacionProductos, setInformacionProductos] = useState([]);
	const [cargando, setCargando] = useState(true);
	const urlImage = process.env.REACT_APP_API_URL;
	const location = useLocation();
	const [pedidosSeleccionados, setPedidosSeleccionados] = useState(location.state.pedidosSeleccionados);
	const idOrders = pedidosSeleccionados.map(pedido => pedido.idOrder);

	const refs = useRef({
		idCardWorker: [],
	});

	useEffect(() => {
		const dataArtesano = async () => {
			try {
				const artesanoInformacion = await listarInformacionApi('artesano-Activo');
				setInformacionArtesano(artesanoInformacion.data);
				setCargando(false);
			} catch (error) {
				console.error('Error al acceder a la información del artesano: ', error);
				setCargando(false);
			}
		};
		dataArtesano();
	}, []);

	useEffect(() => {
		const dataProductos = async () => {
			try {
				const productosInformacion = await Promise.all(idOrders.map(idOrder =>
					listarInformacionConParametroApi('orden-CrearLista', idOrder)
				));
				setInformacionProductos(productosInformacion);
				setCargando(false);
			} catch (error) {
				console.error('Error al acceder a la información de los productos: ', error);
				setCargando(false);
			}
		};
		dataProductos();
	}, [idOrders]);

	let array = [];

	informacionProductos.map((producto) => {
		return producto.data.map((pro) => {
			const productoInfo = {
				idOrder: pro.idOrder,
				idProduct: pro.idProduct,
				quantity: "2",
				subTotal: "30000"
			};
			array.push(productoInfo);
			return null;
		})
	})

	const handleDeletePedido = (index) => {
		const updatedPedidos = [...pedidosSeleccionados];
		updatedPedidos.splice(index, 1);
		setPedidosSeleccionados(updatedPedidos);
	};

	const [selectedOption, setSelectedOption] = useState(null);
	const [selectedIdCardWorker, setSelectedIdCardWorker] = useState(null);
	const handleOptionChange = (option) => {
		setSelectedOption(option);
		setSelectedIdCardWorker(option.idCardWorker);
	};

	const onSubmit = async () => {
		const listaTrabajo = {
			listName: 'Prueba',
			total: '2000',
			idCardWorker: selectedIdCardWorker,
			idState: '1',
			details: array
		};

		try {
			await añadirInformacionSinImagenAPI(listaTrabajo, 'listaTrabajo')
			notificacionConfirmar({ titulo: "Se ha creado una lista de trabajo!" });
		} catch (error) {
			console.error('Error al crear una lista de trabajo', error);
			notificacionError({ titulo: "No Se puede crear la lista de trabajo!" });
		}
	};

	return (
		<div>
			<NavigateADM>
				<Retroceder />
				<Titulo espacio="center" titulo="Crear lista" />
			</NavigateADM>
			<Spacer y={4} />
			<form onSubmit={handleSubmit(onSubmit)}>
				<Acordeon titulo={"Nombre pedidos"} className={"acordeonListaT"}>
					{pedidosSeleccionados && pedidosSeleccionados.map((pedido, index) => (
						<CardPerfil
							key={index}
							className1={"cardCrearListaT"}
							className2={"cardCrearPedidoGap"}
						>
							<div className="cont2CrP">
								<Texto2Card texto2={pedido.clientname} />
								<p>ID del pedido: {pedido.idOrder}</p>
							</div>
							<div style={{ display: "flex" }}>
								<Tooltip content="Eliminar pedido">
									<span
										className="text-lg text-danger cursor-pointer active:opacity-50"
										onClick={() => handleDeletePedido(index)}
									>
										<DeleteIcon />
									</span>
								</Tooltip>
							</div>
						</CardPerfil>
					))}
					{(!pedidosSeleccionados || pedidosSeleccionados.length === 0) && <p>No hay pedidos seleccionados.</p>}
				</Acordeon>
				<Spacer y={4} />

				<Acordeon titulo={"Artesanos"} className={"acordeonListaT"}>
					{cargando ? (
						<Loader />
					) : (
						<div>
							{informacionArtesano && informacionArtesano.length > 0 ? (
								informacionArtesano.map((datos) => (
									<CheckboxInfo
										ref={(el) => { refs.current.idCardWorker = el; }}
										{...register("idCardWorker", { required: { value: false, message: 'La categoria es requerido' } })}
										key={datos.idCardWorker}
										id={datos.idCardWorker}
										name={`${datos.workerName} ${datos.workerLastName}`}
										imagen={`${urlImage}/${datos.photo}`}
										onChange={() => handleOptionChange(datos)}
										value={datos.idCardWorker === selectedOption?.idCardWorker}
									/>
								))
							) : (
								<p>No hay artesanos disponibles.</p>
							)}
							{errors.idCardWorker && <span>{errors.idCardWorker.message}</span>}
						</div>
					)}
				</Acordeon>
				<Spacer y={4} />

				<Acordeon titulo={"Lista productos"} className={"acordeonListaT"}>
					{cargando ? (
						<Loader />
					) : (
						<div>
							{informacionProductos && informacionProductos.length > 0 ? (
								informacionProductos.map((datos, index) => (
									<div key={index}>
										<p>`${index}`</p>
										{datos.data.map((productos) => (
											<div key={productos.nameProduct}>
												<CardPerfil
													className1={"cardCrearListaT"}
													className2={"cardCrearListaTGap"}
													key={productos.idOrder}>
												     <div>
													 <Avatares src={`${urlImage}/${productos.image}`} alt={"imagen"} radio={"full"} />
													 </div>
								
													<Texto1Card texto={productos.nameProduct} />
													<div style={{ display: "flex", justifyContent: "center" }}></div>
													<div className="cont2CrP">
														<Texto2Card texto2={`Cantidad disponible: ${productos.maxQuantity}`} />
														<Texto2Card texto2={`precio labor: ${productos.laborPrice}`} />
													</div>
													<div>
														<BotonCantidad maxCantidad={productos.maxQuantity} />
													</div>
												</CardPerfil>
												<Spacer y={3} />
											</div>
										))}

									</div>
								))
							) : (
								<p>No hay productos disponibles.</p>
							)}
						</div>
					)}
				</Acordeon>
				<Spacer y={4} />
				<Spacer y={4} />
				<BotonComprar2 text={"Enviar Lista"}>
					<Texto3 precio={`Total: 10000`} />
				</BotonComprar2>
			</form>
			<Footer />
		</div>
	);
};

export default CrearListaTrabajo;