import React, { useState } from "react";
import '../ListaTrabajo/ListaTrabajo.css'

import { Spacer } from "@nextui-org/react";
import NavigateADM, { Retroceder, Titulo } from "../../components/UI/navbar/navbarAdmin";
import Loader from "../../components/UI/cargando/loader";
import CardPerfil, { IconoCard, Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import Footer from "../../components/UI/Footer/Footer";
import { useEffect } from "react";
import { listarInformacionConParametroApi } from "../../api/axiosServices";


function ListarListaTrabajoAdministrador() {
	const [informacionLista, setInformacionLista] = useState([]);
	const [cargando, setCargando] = useState(true);

	useEffect(() => {
		const data = async () => {
			try {
				const informacionListaC = await listarInformacionConParametroApi('','1');
				setInformacionLista(informacionListaC);
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
							<div className="cont1ListaT" key={""}>
								<CardPerfil
									className1="card1ListaT">
									<div className="cont2ListaT">
										<div className="contTexto1">
											<Texto1Card texto={"Nombre de la lista"} />
										</div>
										<div
											className="card2ListaT">
											<div className="contTexto2">
												<Texto2Card texto2={"Nombre trabajador"} />
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