import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../Pedidos/crearPedido.css'

import { Spacer } from "@nextui-org/react";
import NavigateADM, { Retroceder, Titulo } from "../../components/UI/navbar/navbarAdmin";
import Loader from "../../components/UI/cargando/loader";
import CardPerfil, { IconoCard, Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import Acordeon from "../../components/UI/Acordeon/Acordeon";
import BotonComprar from "../../components/UI/botones/BotonComprarProductos";
import Footer from "../../components/UI/Footer/Footer";

import { listarInformacionConParametroApi } from "../../api/axiosServices";

function ListarPedidoAdministrador() {
	const [informacionC, setInformacionC] = useState([]);
	const [informacionE, setInformacionE] = useState([]);
	const [informacionT, setInformacionT] = useState([]);
	const [cargando, setCargando] = useState(true);
	const [pedidosSeleccionados, setPedidosSeleccionados] = useState([]);
	const navigate = useNavigate();

	useEffect(() => {
		const data = async () => {
			try {
				const informacionListaPedidoC = await listarInformacionConParametroApi('orden', "1");
				const informacionListaPedidoE = await listarInformacionConParametroApi('orden', "2");
				const informacionListaPedidoT = await listarInformacionConParametroApi('orden', "3");
				setInformacionC(informacionListaPedidoC.data);
				setInformacionE(informacionListaPedidoE.data);
				setInformacionT(informacionListaPedidoT.data);
				setCargando(false);
			} catch (error) {
				console.error('Error al acceder a la informacion listarPedido: ', error);
				setCargando(false);
			}
		};
		data();
	}, [informacionC, informacionE, informacionT]);

	// Define la función para manejar el clic en el botón Comprar
	const handleCrearListraClick = () => {
		// Redirige a la vista `crear/listaTrabajo` pasando los pedidos seleccionados como estado
		navigate('/crear/listaTrabajo', { state: { pedidosSeleccionados } });
	};

	const handleIconoCardClick = (pedido) => {
		// Solo incluir idOrder y clientname en el estado de pedidosSeleccionados
		setPedidosSeleccionados(prevPedidosSeleccionados => [
			...prevPedidosSeleccionados,
			{
				idOrder: pedido.idOrder,
				clientname: pedido.clientname
			}
		]);
	};

	useEffect(() => {
		// Verificamos que haya al menos un pedido seleccionado antes de imprimirlo en la consola
		if (pedidosSeleccionados.length > 0) {
			console.log("Pedidos seleccionados:", pedidosSeleccionados);
		}
	}, [pedidosSeleccionados]);

	return (
		<>
			<NavigateADM>
				<Retroceder />
				<Titulo espacio="center" titulo="Pedidos" />
			</NavigateADM>
			<Spacer y={4} />
			{cargando ? (
				<Loader />
			) : (
				<div style={{display:"flex", flexWrap:"wrap", justifyContent: "center", gap: "8px"}}>
					{informacionC && informacionC.length > 0 ? (
						informacionC.map((datos) => (
							<div  key={datos.idOrder} >
		
								<CardPerfil
									className1={"cont1ListaP"}
									className2={"cont1ListaPGap"}
									>
										<div className="contTexto1P" >
											<Texto1Card
												className={"text1ListaP"}
												texto={`${datos.clientname}`} />
										</div>
							
									<div className="cont2ListaP">
										<div className="card2ListaP">
											<div className="contText">
												<div className="contTexto2P">
													<Texto2Card texto2={`Fecha de creacion: ${datos.Date}`} />
												</div>
												<div className="contTexto2P">
													<Texto2Card texto2={`Cantidad de productos: ${datos.quantityProducts}`} />
												</div>
											</div>
											<div className="contIconoP" onClick={() => handleIconoCardClick(datos)}>
												<IconoCard
													className={"iconoListarP"}
													icon={"solar:add-circle-bold"}
												/>
											</div>
										</div>
									</div>
								</CardPerfil>
								<Spacer y={4} />
								
							</div>
						))
					) : (
						<p>No hay pedidos disponibles.</p>
					)}
				</div>
			)}
			<Spacer y={4} />
			<Acordeon className={"acordeonListaP"} titulo={"Pedidos en proceso"}>
				{cargando ? (
					<Loader />
				) : (
					<div>
						{informacionE && informacionE.length > 0 ? (
							informacionE.map((datos) => (
								<div style={{display:"flex", flexWrap:"wrap"}} key={datos.idOrder} >
									<CardPerfil
										className1={"cont1ProcesoListaP"}
										className2={"cont1ProcesoListaPGap"}>
										<div className="cont1ListaP">
											<div className="contTexto1P">
												<Texto1Card
													className={"text1ListaP"}
													texto={`${datos.clientname}`} />
											</div>
										</div>
										<div className="cont2ProcesoListaP">
											<div className="card2ProcesoListaP">
												<div className="contText">
													<div className="contTexto2P">
														<Texto2Card texto2={`Fecha de creacion: ${datos.Date}`} />
													</div>
													<div className="contTexto2P">
														<Texto2Card texto2={`Cantidad de productos: ${datos.quantityProducts}`} />
													</div>
												</div>
											</div>
										</div>
									</CardPerfil>
									<Spacer y={4} />
								</div>
							))
						) : (
							<p>No hay pedidos en proceso.</p>
						)}
					</div>
				)}
			</Acordeon>
			<Spacer y={4} />
			<Acordeon className={"acordeonListaP"} titulo={"Pedidos terminados"}>
				{cargando ? (
					<Loader />
				) : (
					<div>
						{informacionT && informacionT.length > 0 ? (
							informacionT.map((datos) => (
								<div style={{display:"flex", flexWrap:"wrap"}} key={datos.idOrder} >
									<CardPerfil
										className1={"cont1ProcesoListaP"}
										className2={"cont1ProcesoListaPGap"}>
										<div className="cont1ListaP">
											<div className="contTexto1P">
												<Texto1Card
													className={"text1ListaP"}
													texto={`${datos.clientname}`} />
											</div>
										</div>
										<div className="cont2ListaP">
											<div className="card2ListaP">
												<div className="contText">
													<div className="contTexto2P">
														<Texto2Card texto2={`Fecha de creacion: ${datos.Date}`} />
													</div>
													<div className="contTexto2P">
														<Texto2Card texto2={`Cantidad de productos: ${datos.quantityProducts}`} />
													</div>
												</div>
											</div>
										</div>
									</CardPerfil>
									<Spacer y={4} />
								</div>
							))
						) : (
							<p>No hay pedidos terminados.</p>
						)}
					</div>
				)}
			</Acordeon>
			<Spacer y={4} />
			
			<BotonComprar onClick={handleCrearListraClick} text={"Crear lista"} type={"Submit"} />
			<Footer />
		</>
	);
};

export default ListarPedidoAdministrador;