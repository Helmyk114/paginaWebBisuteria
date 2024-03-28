import React, { useEffect, useState } from "react";

import { Spacer, Tooltip } from "@nextui-org/react";
import NavigateVEN, { Retroceder, Titulo } from "../../components/UI/navbar/navbarVendedor";
import CardPerfil, { Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import Loader from "../../components/UI/cargando/loader";
import Acordeon from "../../components/UI/Acordeon/Acordeon";
import EditIcon from "../../components/UI/iconos/Editar";
import DeleteIcon from "../../components/UI/iconos/Eliminar";
import Footer from "../../components/UI/Footer/Footer";

import { cambiarEstadoInformacionApi, listarInformacionConDosParametroApi } from "../../api/axiosServices";
import { notificacionActivarInactivar, notificacionInformativa } from "../../utils/notificacionCliente";
import { decodificarToken, obtenerToken } from "../../utils/token";

function ListarPedidoVendedor() {
	const [informacionC, setInformacionC] = useState([]);
	const [informacionP, setInformacionP] = useState([]);
	const [informacionT, setInformacionT] = useState([]);
	const [cargando, setCargando] = useState(true);

	const token = obtenerToken();
	const id = decodificarToken(token).userId;

	useEffect(() => {
		const data = async () => {
			try {
				const informacionListaPedidoC = await listarInformacionConDosParametroApi('orden', "1", id);
				const informacionListaPedidoP = await listarInformacionConDosParametroApi('orden', "2", id);
				const informacionListaPedidoT = await listarInformacionConDosParametroApi('orden', "3", id);
				setInformacionC(informacionListaPedidoC.data);
				setInformacionP(informacionListaPedidoP.data);
				setInformacionT(informacionListaPedidoT.data);
				setCargando(false);
			} catch (error) {
				console.error('Error al acceder a la informacion listaTrabajo: ', error);
				setCargando(false);
			}
		};
		data();
	}, [informacionC, id]);

	const cancelProducto = async (idOrder) => {
		try {
			const result = await notificacionActivarInactivar({ titulo: "¿Quieres eliminar este pedido?", boton: "Eliminar" });
			if (result.isConfirmed) {
				await cambiarEstadoInformacionApi('orden/cancelar', idOrder, "6")

				notificacionInformativa({ icono: "success", titulo: "Pedido eliminado" })
			}
		} catch (error) {
			notificacionInformativa({ icono: "error", titulo: "Error al eliminar el pedido" })
			console.error('error al eliminar el pedido ', error)
		}
	};

	return (
		<div>
			<NavigateVEN>
				<Retroceder />
				<Titulo espacio="center" titulo="Pedidos" />
			</NavigateVEN>
			<Spacer y={4} />
			{cargando ? (
				<Loader />
			) : (
				<div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"10px"}}>
					{informacionC && informacionC.length > 0 ? (
						informacionC.map((datos) => (
							<div key={datos.idOrder}>
								<div style={{}}>
								<CardPerfil
									className1={"card1ListaPV"}
									className2={"card1ListaPVGap"}>
									<div className="cont1ListaPV">
										<div className="contTexto1P">
											<Texto1Card
												texto={`${datos.clientname}`}
												fontSize={"20px"} />
										</div>
									</div>
									<div className="cont2ListaP">
										<div className="card2ListaP">
											<div className="contText">
												<div className="contTexto2P">
													<Texto2Card
														texto2={`Fecha de creacion: ${datos.Date}`} />
												</div>
												<div className="contTexto2P">
													<Texto2Card
														texto2={`Cantidad de productos: ${datos.quantityProducts}`} />
												</div>
											</div>
											<div className="contIconoP">
												<Tooltip content="Editar pedido">
													<span className="text-lg text-default-400 cursor-pointer active:opacity-50">
														<EditIcon ruta={`/editar/pedidos/${datos.idOrder}`} />
													</span>
												</Tooltip>
												<Tooltip content="Eliminar producto">
													<span className="text-lg text-danger cursor-pointer active:opacity-50">
														<DeleteIcon className="iconoEliminar" eliminar={() => cancelProducto(datos.idOrder)} />
													</span>
												</Tooltip>
											</div>
										</div>
									</div>
								</CardPerfil>

								<Spacer y={4} />
								</div>
							</div>
						))
					) : (
						<p>No hay pedidos disponibles.</p>
					)}
				</div>
			)}
			<Spacer y={4} />
			<Acordeon className={"acordeonListaPV"} titulo={"Pedidos en proceso"}>
				{cargando ? (
					<Loader />
				) : (
					<div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"10px"}}>
						{informacionP && informacionP.length > 0 ? (
							informacionP.map((datos) => (
								<div key={datos.idOrder}>
									<CardPerfil
										className1={"card2ListaPV"}
										className2={"card2ListaPVGap"}>
										<div className="cont1ListaP">
											<div className="contTexto1P">
												<Texto1Card
													texto={`${datos.clientname}`} />
											</div>
										</div>
										<div className="cont2ListaP">
											<div className="card2ListaP">
												<div className="contText">
													<div className="contTexto2P">
														<Texto2Card
															texto2={`Fecha de creacion: ${datos.Date}`} />
													</div>
													<div className="contTexto2P">
														<Texto2Card
															texto2={`Cantidad de productos: ${datos.quantityProducts}`} />
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
			<Acordeon  className={"acordeonListaPV"} titulo={"Pedidos terminados"}>
				{cargando ? (
					<Loader />
				) : (
					<div style={{display:"flex", flexWrap:"wrap", justifyContent:"center", gap:"10px"}}>
						{informacionT && informacionT.length > 0 ? (
							informacionT.map((datos) => (
								<div key={datos.idOrder}>
									<CardPerfil
										className1={"card2ListaPV"}
										className2={"card2ListaPVGap"}>
										<div className="cont1ListaP">
											<div className="contTexto1P">
												<Texto1Card
													texto={`${datos.clientname}`} />
											</div>
										</div>
										<div className="cont2ListaP">
											<div className="card2ListaP">
												<div className="contText">
													<div className="contTexto2P">
														<Texto2Card
															texto2={`Fecha de creacion: ${datos.Date}`} />
													</div>
													<div className="contTexto2P">
														<Texto2Card
															texto2={`Cantidad de productos: ${datos.quantityProducts}`} />
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
			<Footer />
		</div>
	);
};

export default ListarPedidoVendedor;