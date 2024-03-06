import React from "react";
import '../ListaTrabajo/ListaTrabajo.css'

import { Spacer } from "@nextui-org/react";
import NavigateADM, { Retroceder, Titulo } from "../../components/UI/navbar/navbarAdmin";
import CardPerfil, { IconoCard, Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import Footer from "../../components/UI/Footer/Footer";


function ListarListaTrabajoAdministrador() {
	return (
		<div>
			<NavigateADM>
				<Retroceder />
				<Titulo espacio="center" titulo="Lista de trabajo" />
			</NavigateADM>
			<div style={{ marginBottom: "30px" }}>
			</div>
			<div className="cont1ListaT">
				<CardPerfil
					className="card1ListaT"
					width={"250px"}
					height={"150px"}>
					<div className="cont2ListaT">

						<div className="contTexto1">
							<Texto1Card
								texto={"Nombre de la lista"} />
						</div>
						<div
							className="card2ListaT">
							<div className="contTexto2">
								<Texto2Card
									texto2={"Nombre trabajador"} />
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
			</div>
			<Footer />
		</div>
	);
};

export default ListarListaTrabajoAdministrador;