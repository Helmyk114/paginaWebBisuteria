import React from "react";

import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import Footer from "../../components/UI/Footer/Footer";

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