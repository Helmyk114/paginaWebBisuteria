import React from "react"

import NavigateTRJ, { Retroceder, Titulo } from "../../components/UI/navbar/navbarTrabajador";
import Footer from "../../components/UI/Footer/Footer";
import CardPerfil, { IconoCard, Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import Acordeon from "../../components/UI/Acordeon/Acordeon";

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
					className="card1ListaT"> 
					

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
					
				</CardPerfil>
				

			</div>

			<div>
				<Acordeon titulo={"Lista "}>
				<div className="cont1ListaT">
			
			<CardPerfil
				className="card1ListaT"> 
				<div className="contenedor1ListaT" style={{display:"flex"}}>

					
					 <div className="contIconoListaT"style={{backgroundColor:"#6977E4 ", borderRadius:"10px", marginRight:"8px", width:"60%", display:"column", padding:"30px"}} >
					 <div className="contIcono">
						
						<IconoCard
							icon={"icon-park-solid:check-one"}
							width={"42px"}
							height={"42px"} 
							color={"#ffff"}
					/>
					
					</div>
					<Texto1Card
					
					texto={"Finalizdo"}
					color={"#ffff"}
					fontWeight={"300"}/>
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
					
				</Acordeon>
			</div>

			<Footer />
		</div>
	);
};

export default ListarListaTrabajoVendedor;