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
				const informacionListaT = await listarInformacionConDosParametroApi('listaTrabajo-Estado-Trabajador', "3", id);
				const informacionListaP = await listarInformacionConDosParametroApi('listaTrabajo-Estado-Trabajador', "6", id);
				setListaC(informacionListaC.data);
				setListaT(informacionListaT.data);
				setListaP(informacionListaP.data);
				setCargando(false);
			} catch (error) {
				console.error('Error al acceder a la informacion listaTrabajo: ', error);
				setCargando(false);
			}
		};
		data();
	}, [listaC, listaP, listaT, id])


	return (
		<div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
			<NavigateTRJ>
				<Retroceder />
				<Titulo espacio="center" titulo="Lista de trabajo" />
			</NavigateTRJ>
			<Spacer y={4} />
			{cargando ? (
				<Loader />
			) : (
				<div style={{ display: "flex", flexWrap: "wrap", gap: "5px", justifyContent: "center", }}>
					{listaC && listaC.length > 0 ? (
						listaC.map((lista) => (
							<div key={lista.idWorkList}>
								<CardPerfil
									className1={"card1ListaT"}
									className2={"cardListaTGap"}>
									<div className="cont2ListaT">
										<div className="contTexto1">
											<Texto1Card className="tituloCard" texto={lista.listName} fontSize={"15px"} />
											<Texto1Card
												texto={`Codigo: ${lista.idWorkList}`}
												fontWeight={"200"}
												className={"codListaTtrabajador"}
											/>
										</div>
										<div className="card2ListaT">
											<div className="contTexto2">
												<Texto2Card
													texto2={"Ver"}
													fontWeight={"400"}
												/>
											</div>
											<div className="contIcono">
												<Link to={`/detalle/Trabajo/${lista.idWorkList}`}>
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
				<Acordeon className={"contAcordeonLt"} titulo={"Listas de trabajo terminadas "}>
					{cargando ? (
						<Loader />
					) : (
						<div style={{ justifyContent:"center", display: "flex", flexWrap: "wrap", gap: "5px" }}>
							{listaT && listaT.length > 0 ? (
								listaT.map((lista) => (
									<div style={{ display: "flex", flexWrap: "wrap", margin: "0 auto" }} key={lista.idWorkList}>
										<CardPerfil className1={"cardListaTerminadaT"}
											className2={"cardListaTerminadaTGap"}>
											<div className="contenedor1ListaT">
												<div className="contIconoListaT " >
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
														className="contTexto1"
													/>
												</div>
												<div className="cont2ListaT">
													<div className="contTexto1">
														<Texto1Card texto={lista.listName} />
														<Texto1Card
															texto={`Codigo: ${lista.idWorkList}`}
															fontWeight={"200"}
															className={"codListaTtrabajador"}
														/>
													</div>
													<div className="card2ListaT">
														<div className="contTexto2">
															<Texto2Card
																texto2={`Pago total: ${lista.total}`}
																fontWeight={"200"}
															/>
														</div>
														<div className="contIcono">
															<Link to={`/detalle/Trabajo/${lista.idWorkList}`}>
																<IconoCard
																	icon={"akar-icons:arrow-right"}
																	className="iconoFlecha"
																/>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</CardPerfil>
									</div>
								))
							) : (
								<p>No hay listas de trabajos terminados disponibles.</p>
							)}
						</div>
					)}
					<Spacer y={4} />
				</Acordeon>
			</div>
			<Spacer y={4} />

			<div>
				<Acordeon className={"contAcordeonLt"} titulo={"Lista de trabajo pagas"}>
					{cargando ? (
						<Loader />
					) : (
						<div>
							{listaP && listaP.length > 0 ? (
								listaP.map((lista) => (
									<div className="cont1AcordeonListaT" key={lista.idWorkList}>
										<CardPerfil className="card1ListaT">
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
														className="contTexto1"
													/>
												</div>
												<div className="cont2ListaT">
													<div className="contTexto1">
														<Texto1Card texto={lista.listName} />
														<Texto1Card
															texto={`Codigo: ${lista.idWorkList}`}
															fontWeight={"200"}
														/>
													</div>
													<div className="card2ListaT">
														<div className="contTexto2">
															<Texto2Card
																texto2={`Pago total: 30.000`}
																fontWeight={"200"}
															/>
														</div>
														<div className="contIcono">
															<Link to={`/detalle/Trabajo/${lista.idWorkList}`}>
																<IconoCard
																	icon={"akar-icons:arrow-right"}
																	className="iconoFlecha"
																/>
															</Link>
														</div>
													</div>
												</div>
											</div>
										</CardPerfil>
									</div>
								))
							) : (
								<p>No hay listas de trabajos pagas disponibles.</p>
							)}
						</div>
					)}
					<Spacer y={4} />
				</Acordeon>
			</div>
			<Spacer y={4} />
			<Footer />
		</div>
	);
};

export default ListarListaTrabajoVendedor;