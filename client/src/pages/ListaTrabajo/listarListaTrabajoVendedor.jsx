import React from "react"

import NavigateTRJ, { Retroceder, Titulo } from "../../components/UI/navbar/navbarTrabajador";
import Footer from "../../components/UI/Footer/Footer";
import CardPerfil, { IconoCard, Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";

function ListarListaTrabajoVendedor() {
	return (
		<div>
			<NavigateTRJ>
				<Retroceder />
				<Titulo espacio="center" titulo="Lista de trabajo" />
			</NavigateTRJ>

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
								texto={"Nombre de la lista"}
							/>

						</div>

						<div
							className="card2ListaT">
							<div className="contTexto2">
								<Texto2Card

									texto2={"Nombre trabajador"}
								/>
							</div>
							<div className="contIcono">
								<IconoCard
									icon={"bi:currency-dollar"}
									width={"22px"}
									height={"22px"} />
							</div>
							<div className="contIcono">
								<IconoCard
									icon={"bi:check-circle-fill"}
									width={"22px"}
									height={"22px"} />
							</div>


						</div>
					</div>
				</CardPerfil>

			</div>

			<Footer />
		</div>
	);
};

export default ListarListaTrabajoVendedor;