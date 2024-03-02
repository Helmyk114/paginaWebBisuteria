import React from "react";

import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import Footer from "../../components/UI/Footer/Footer";
import CardPerfil, { Texto1Card } from "../../components/UI/perfil/cardInfo";

function ListarPedidoAdministrador() {
	return (
		<div>
			<Navigate>
				<Retroceder />
				<Titulo espacio="center" titulo="Pedidos" />
			</Navigate>

			

			<Footer />
		</div>
	);
};

export default ListarPedidoAdministrador;