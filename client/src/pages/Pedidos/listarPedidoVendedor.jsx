import React, { useEffect, useState } from "react";

import { Spacer, Tooltip } from "@nextui-org/react";
import NavigateVEN, { Retroceder, Titulo } from "../../components/UI/navbar/navbarVendedor";
import Loader from "../../components/UI/cargando/loader";
import Footer from "../../components/UI/Footer/Footer";
import DeleteIcon from "../../components/UI/iconos/Eliminar";
import CardPerfil, { Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";

import { cambiarEstadoInformacionApi, listarInformacionConDosParametroApi } from "../../api/axiosServices";
import { notificacionActivarInactivar, notificacionInformativa } from "../../utils/notificacionCliente";
import { decodificarToken, obtenerToken } from "../../utils/token";

function ListarPedidoVendedor() {
	const [informacion, setInformacion] = useState([]);
	const [cargando, setCargando] = useState(true);

	const token = obtenerToken();
	const id = decodificarToken(token).userId;

	useEffect(() => {
		const data = async () => {
			try {
				const informacionListaPedido = await listarInformacionConDosParametroApi('orden', "1", id);
				setInformacion(informacionListaPedido.data);
				setCargando(false);
			} catch (error) {
				console.error('Error al acceder a la informacion listaTrabajo: ', error);
				setCargando(false);
			}
		};
		data();
	}, [informacion, id]);

	const cancelProducto = async (idOrder) => {
		try {
			const result = await notificacionActivarInactivar({ titulo: "¿Quieres eliminar este pedido?", boton: "Eliminar"  });
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
				<div>
				{informacion && informacion.length > 0 ? (
					informacion.map((datos) => (
						<div key={datos.idOrder}>
							<CardPerfil
								className="card1ListaP"
								width={"280px"}
								height={"198px"}
								display={"block"}>
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
										<div className="contIconoP">
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
						))
					) : (
						<p>No hay pedidos disponibles.</p>
					)}
				</div>
			)}
			<Spacer y={4} />
			<Footer />
		</div>
	);
};

export default ListarPedidoVendedor;