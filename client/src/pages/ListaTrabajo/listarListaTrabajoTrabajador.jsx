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
					> <div className="contenedor1ListaT" style={{display:"flex"}}>

					
						<div className="contIconoListaT" style={{backgroundColor:"#6977E4 ", display:"flex"}}>
						<Texto1Card
						texto={"Finalizdo"}
						/>

						
						</div>
						

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

									texto2={"Ver"}
								/>
							</div>
							<div className="contIcono">
							
								<IconoCard
									icon={"akar-icons:arrow-right"}
									width={"42px"}
									height={"42px"} />
							
							

							</div>
						
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