import React, { useState, useEffect } from "react";
import '../ListaTrabajo/ListaTrabajo.css'

import { Spacer } from "@nextui-org/react";
import NavigateADM, { Retroceder, Titulo } from "../../components/UI/navbar/navbarAdmin";
import CardPerfil, { IconoCard, Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import Loader from "../../components/UI/cargando/loader";
import Footer from "../../components/UI/Footer/Footer";

import { listarInformacionConParametroApi } from "../../api/axiosServices";

function ListarListaTrabajoAdministrador() {
	const [informacionLista, setInformacionLista] = useState([]);
	const [cargando, setCargando] = useState(true);

	useEffect(() => {
		const data = async () => {
			try {
				const informacionListaC = await listarInformacionConParametroApi('listaTrabajo-Estado','1');
				setInformacionLista(informacionListaC.data);
				setCargando(false);
			} catch (error) {
				console.error('Error al acceder a la informacion listaTrabajo: ', error);
				setCargando(false);
			}
		};
		data()
	}, [informacionLista]);

	return (
		<div>
			<NavigateADM>
				<Retroceder />
				<Titulo espacio="center" titulo="Lista de trabajo" />
			</NavigateADM>
			<Spacer y={4} />
			{cargando ? (
				<Loader />
			) : (
				<div>
					{informacionLista && informacionLista.length > 0 ? (
						informacionLista.map((datos) => (
							<div className="cont1ListaT" key={datos.idWorkList}>
								<CardPerfil
									className1="card1ListaT">
									<div className="cont2ListaT">
										<div className="contTexto1">
											<Texto1Card texto={datos.listName} />
											<Texto1Card texto={datos.idWorkList} />
										</div>
										<div
											className="card2ListaT">
											<div className="contTexto2">
												<Texto2Card texto2={`Nombre trabajador: ${datos.workerName} ${datos.workerLastName}`} />
											</div>
											<div className="contIcono">
												<IconoCard
													icon={"akar-icons:edit"}
													width={"28px"}
													height={"28px"} />
											</div>
											<div className="contIcono">
												<IconoCard
													icon={"bi:check-circle-fill"}
													width={"25px"}
													height={"25px"} />
											</div>
										</div>
									</div>
								</CardPerfil>
								<Spacer y={4} />
							</div>
						))
					) : (
						<p>No hay listas de trabajo disponibles.</p>
					)}
				</div>
			)}
			<Spacer y={4} />
			<Footer />
		</div>
	);
};

export default ListarListaTrabajoAdministrador;