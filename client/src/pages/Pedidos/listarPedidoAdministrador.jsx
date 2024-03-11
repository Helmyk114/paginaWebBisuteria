import React from "react";

import Footer from "../../components/UI/Footer/Footer";
import CardPerfil, { IconoCard, Texto1Card, Texto2Card } from "../../components/UI/perfil/cardInfo";
import NavigateADM, { Retroceder, Titulo } from "../../components/UI/navbar/navbarAdmin";
import '../Pedidos/crearPedido.css'
import BotonComprar2 from "../../components/UI/botones/botonCompraPedido";
import BotonComprar from "../../components/UI/botones/BotonComprarProductos";

function ListarPedidoAdministrador() {
	return (
		<div>
			<NavigateADM>
				<Retroceder />
				<Titulo espacio="center" titulo="Pedidos" />
			</NavigateADM>
			<CardPerfil
					className="card1ListaP"
					width={"280px"}
					height={"198px"}
					display={"block"}>
                     <div className="cont1ListaP"> 
					 <div className="contTexto1P">
							<Texto1Card
								texto={"Nombre de cliente"} />
						  </div>

					 </div>
						  
						<div className="cont2ListaP">
						  <div className="card2ListaP">
							 <div className="contText">
							 <div className="contTexto2P">
								<Texto2Card
									texto2={"Fecha de creacion: 20/06/2024"} />
							  </div>
							  <div className="contTexto2P">
								<Texto2Card
									texto2={"Cantidad de producto: 60"} />
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
			<BotonComprar text={"Comprar"} type={"Submit"}/>
			<Footer />
		</div>
	);
};

export default ListarPedidoAdministrador;