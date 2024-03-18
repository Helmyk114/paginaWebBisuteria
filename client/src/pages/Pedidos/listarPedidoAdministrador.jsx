import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import '../Pedidos/crearPedido.css'

import { Spacer } from "@nextui-org/react";
import NavigateADM, { Retroceder, Titulo } from "../../components/UI/navbar/navbarAdmin";
import Loader from "../../components/UI/cargando/loader";
import CardPerfil, { IconoCard, Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import BotonComprar from "../../components/UI/botones/BotonComprarProductos";
import Footer from "../../components/UI/Footer/Footer";

import { listarInformacionConParametroApi } from "../../api/axiosServices";

function ListarPedidoAdministrador() {
	const [informacionC, setInformacionC] = useState([]);
	const [informacionE, setInformacionE] = useState([]);
	const [informacionT, setInformacionT] = useState([]);
	const [cargando, setCargando] = useState(true);
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
				console.error('Error al acceder a la informacion listaTrabajo: ', error);
				setCargando(false);
			}
		};
		data();
	}, [informacionC, informacionE, informacionT]);

	const handleCrearListraClick = () => {
		navigate('/crear/listaTrabajo');
	};

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
				<div>
					{informacionC && informacionC.length > 0 ? (
						informacionC.map((datos) => (
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
								<Spacer y={4} />
							</div>
						))
					) : (
						<p>No hay pedidos disponibles.</p>
					)}
				</div>
			)}
			<Spacer y={4} />
			<BotonComprar onClick={handleCrearListraClick} text={"Crear lista"} type={"Submit"} />
			<Footer />
		</>
	);
};


export default ListarPedidoAdministrador;