import React from "react";

import Footer from "../../components/UI/Footer/Footer";
import CardPerfil, { Texto1Card } from "../../components/UI/perfil/cardInfo";
import NavigateADM, { Retroceder, Titulo } from "../../components/UI/navbar/navbarAdmin";

function ListarPedidoAdministrador() {
	return (
		<div>
			<NavigateADM>
				<Retroceder />
				<Titulo espacio="center" titulo="Pedidos" />
			</NavigateADM>

			<Footer />
		</div>
	);
};

export default ListarPedidoAdministrador;