import React, { useEffect, useState } from "react";
import { listarInformacionConDosParametroApi } from "../../api/productos";
import Loader from "../../components/UI/cargando/loader";

import Footer from "../../components/UI/Footer/Footer";
import NavigateVEN, { Retroceder, Titulo } from "../../components/UI/navbar/navbarVendedor";
import CardPerfil, { IconoCard, Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
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

	return (
		<div>
			<NavigateVEN>
				<Retroceder />
				<Titulo espacio="center" titulo="Pedidos" />
			</NavigateVEN>
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
											<IconoCard
												icon={"solar:add-circle-bold"}
												width={"35px"}
												height={"35px"} />
										</div>
									</div>
								</div>
							</CardPerfil>
							</div>
						))
					) : (
						<p>No hay pedidos disponibles.</p>
					)}
				</div>
			)}
			<Footer />
		</div>
	);
};

export default ListarPedidoVendedor;