import React from "react";

import Flotante from '../../components/Botones/BotonFlotante/Flotante';

import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import Footer from "../../components/UI/Footer/Footer";
import CardPerfil, { Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import { Spacer } from "@nextui-org/react";

function ListarListaTrabajoAdministrador() {
	return (
		<div>
			<div>
				< Flotante
					addIcon={
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="43"
							height="43"
							fill="#fff"
							className="bi bi-file-earmark-text-fill"
							viewBox="0 0 16 16"
						>
							<path
								d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0M9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1M4.5 9a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zM4 10.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m.5 2.5a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1z" />
						</svg>
					}
				/>

				<Navigate>
					<Retroceder />
					<Titulo espacio="center" titulo="Lista de trabajo" />
				</Navigate>
				 <div style={{marginBottom:"30px"}}>

			</div>
			  <CardPerfil
			   width={"220px"}
			   height={"150px"}
			   style={{position:"absolute"}}>
				<div style={{display:"flex", flexDirection: "column", justifyContent: "space-between" }}>

				
				<div style={{marginBottom:"55px"}}>
				<Texto1Card
				texto={"Nombre de la lista"}
				/>
					
				</div>
				
				<div
				style={{width:"200px", height:"50px", position:"relative", backgroundColor:"#EEEE", borderRadius:"8px"}}>
					
				<Texto2Card
				texto2={"Nombre trabajador"}
				/>

				</div>
                </div>
			 </CardPerfil>
				

				<Footer />
			</div>
		</div>
	);
};

export default ListarListaTrabajoAdministrador;