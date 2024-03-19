import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom"; // Agrega esta línea

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

import { listarInformacionApi, listarInformacionConParametroApi } from "../../api/axiosServices";

function CrearListaTrabajo() {

	const { register, handleSubmit, formState: { errors } } = useForm();
	const [informacionArtesano, setInformacionArtesano] = useState([]);
	const [informacionProductos, setInformacionProductos] = useState({});
	const [cargando, setCargando] = useState(true);
	const urlImage = process.env.REACT_APP_API_URL;
	const location = useLocation();
	const pedidosSeleccionados = location.state.pedidosSeleccionados;
	const idOrder = location.state.pedidosSeleccionados[0].idOrder;

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
				console.error('Error al acceder a la informacion: ', error);
				setCargando(false);
			}
		};
		dataArtesano();
	}, []);

	useEffect(() => {
		const dataProductos = async () => {
			try {
				const productosInformacion = await listarInformacionConParametroApi('orden-CrearLista', idOrder);
				setInformacionProductos(productosInformacion.data);
				setCargando(false);
			} catch (error) {
				console.error('Error al acceder a la informacion: ', error);
				setCargando(false);
			}
		};
		dataProductos();
	}, [idOrder]);

	
	const [selectedOption, setSelectedOption] = useState(null);
	const [selectedIdCardWorker, setSelectedIdCardWorker] = useState(null);
	const handleOptionChange = (option) => {
		setSelectedOption(option);
		setSelectedIdCardWorker(option.idCardWorker);
	};

	const onSubmit = async (data) => {
		console.log("Formulario enviado");
		const listaTrabajo = {
			...data,
			idCardWorker: selectedIdCardWorker,
		};
		console.log(listaTrabajo)
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
						</CardPerfil>
					))}
					{!pedidosSeleccionados || pedidosSeleccionados.length === 0 && <p>No hay pedidos seleccionados.</p>}
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
								informacionProductos.map((datos) => (
									<div key={datos.idOrder}>
										<CardPerfil
											className1={"cardCrearListaT"}
											className2={"cardCrearPedidoGap"}
											key={datos.idOrder}	
										>
											<Avatares src={`${urlImage}/${datos.image}`} alt={"imagen"} radio={"full"} />
											<Texto1Card texto={datos.nameProduct} />
											<div style={{ display: "flex", justifyContent: "center" }}></div>
											<div className="cont2CrP">
												<Texto2Card texto2={datos.quantity} />
											</div>
											<div style={{ display: "flex" }}>
												<Tooltip content="Eliminar producto">
													<span className="text-lg text-danger cursor-pointer active:opacity-50">
														<DeleteIcon />
													</span>
												</Tooltip>
											</div>
										</CardPerfil>
										<Spacer y={3} />
									</div>
								))
							) : (
								<p>No hay productos disponibles.</p>
							)}
						</div>
					)}
				</Acordeon>



				<Spacer y={4} />
				<BotonEnviar text={"Enviar lista"} type={"submit"} className="botonCrearListaT" />
			</form>
			<Spacer y={4} />
			<Footer />
		</div>
	);
};

export default CrearListaTrabajo;