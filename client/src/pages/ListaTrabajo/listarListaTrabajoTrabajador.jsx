import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom";

import { Spacer } from "@nextui-org/react";
import NavigateTRJ, { Retroceder, Titulo } from "../../components/UI/navbar/navbarTrabajador";
import Acordeon from "../../components/UI/Acordeon/Acordeon";
import Loader from "../../components/UI/cargando/loader";
import CardPerfil, { IconoCard, Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import Footer from "../../components/UI/Footer/Footer";


import { decodificarToken, obtenerToken } from "../../utils/token";
import { listarInformacionConDosParametroApi } from "../../api/axiosServices";

function ListarListaTrabajoVendedor() {
	const [listaC, setListaC] = useState([]);
	const [listaT, setListaT] = useState([]);
	const [listaP, setListaP] = useState([]);
	const [cargando, setCargando] = useState(true);

	const token = obtenerToken();
	const id = decodificarToken(token).userId;

	useEffect(() => {
		const data = async () => {
			try {
				const informacionListaC = await listarInformacionConDosParametroApi('listaTrabajo-Estado-Trabajador', "1", id);
				setListaC(informacionListaC.data);
				setCargando(false);
			} catch (error) {
				console.error('Error al acceder a la informacion listaTrabajo: ', error);
				setCargando(false);
			}
		};
		data();
	}, [listaC, id])

	return (
		<div>
			<NavigateTRJ>
				<Retroceder />
				<Titulo espacio="center" titulo="Lista de trabajo" />
			</NavigateTRJ>
			<Spacer y={4} />
			{cargando ? (
				<Loader />
			) : (
				<div>
					{listaC && listaC.length > 0 ? (
						listaC.map((lista) => (
							<div className="cont1ListaT" key={lista.idWorkList}>
								<CardPerfil
									className="card1ListaT">
									<div className="cont2ListaT">
										<div className="contTexto1">
											<Texto1Card texto={lista.listName} />
											<Texto1Card
												texto={`Codigo: ${lista.idWorkList}`}
												fontWeight={"200"}
											/>
										</div>
										<div
											className="card2ListaT">
											<div className="contTexto2">
												<Texto2Card
													texto2={"Ver"}
													fontWeight={"400"}
												/>
											</div>
											<div className="contIcono">
												<Link to={`/detalle/Trabajo`}>
													<IconoCard
														icon={"akar-icons:arrow-right"}
														className="iconoFlecha"
													/>
												</Link>
											</div>
										</div>
									</div>
								</CardPerfil>
							</div>
						))
					) : (
						<p>No hay listas de trabajo disponibles.</p>
					)}
				</div>
			)}

			<Spacer y={4} />
			<div>
				<Acordeon className={"contAcordeonLt"} titulo={"Lista de trabajo terminadas "}>
					<div className="cont1AcordeonListaT">
						<CardPerfil
							className="card1ListaT">
							<div className="contenedor1ListaT">
								<div className="contIconoListaT" >
									<div className="contIconoCheck" style={{ justifyContent: "center" }}>
										<IconoCard
											icon={"icon-park-solid:check-one"}
											color={"#ffff"}
										/>

									</div >
									<Texto1Card
										texto={"Finalizdo"}
										color={"#ffff"}
										fontWeight={"400"}
										className="contTexto1" />
								</div>
								<div className="cont2ListaT">
									<div className="contTexto1">
										<Texto1Card
											texto={"Nombre de la lista"}
										/>
										<Texto1Card
											texto={"Codigo"}
											fontWeight={"200"}
										/>
									</div>
									<div
										className="card2ListaT">
										<div className="contTexto2">
											<Texto2Card
												texto2={"Pago total: 30.000"}
												fontWeight={"200"}
											/>
										</div>
										<div className="contIcono">
											<IconoCard
												icon={"akar-icons:arrow-right"}
												className="iconoFlecha"
											/>
										</div>
									</div>
								</div>
							</div>
						</CardPerfil>
					</div>
				</Acordeon>
			</div>
			<Spacer y={3} />
			<div>
				<Acordeon className={"contAcordeonLt"} titulo={"Lista de trabajo pagas"}>
					<div className="cont1AcordeonListaT">
						<CardPerfil
							className="card1ListaT">
							<div className="contenedor1ListaT">
								<div className="contIconoListaT" >
									<div className="contIconoCheck" style={{ justifyContent: "center" }}>
										<IconoCard
											icon={"mage:dollar-fill"}
											color={"#ffff"}
										/>
									</div >
									<Texto1Card
										texto={"Pagas"}
										color={"#ffff"}
										fontWeight={"400"}
										className="contTexto1" />
								</div>
								<div className="cont2ListaT">
									<div className="contTexto1">
										<Texto1Card texto={"Nombre de la lista"} />
										<Texto1Card
											texto={"Codigo"}
											fontWeight={"200"}
										/>
									</div>
									<div
										className="card2ListaT">
										<div className="contTexto2">
											<Texto2Card
												texto2={"Pago total: 30.000"}
												fontWeight={"200"}
											/>
										</div>
										<div className="contIcono">
											<IconoCard
												icon={"akar-icons:arrow-right"}
												className="iconoFlecha"
											/>
										</div>
									</div>
								</div>
							</div>
						</CardPerfil>
					</div>
				</Acordeon>
			</div>
			<Footer />
		</div>
	);
};

export default ListarListaTrabajoVendedor;