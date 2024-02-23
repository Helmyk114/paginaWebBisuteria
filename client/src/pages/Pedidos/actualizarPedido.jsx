import React from "react";

import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";
import Footer from "../../components/UI/Footer/Footer";

function ActualizarPedido() {
	return (
		<div>
			<Navigate>
				<Retroceder />
				<Titulo espacio="center" titulo="Editar pedido" />
				<Notificacion />
			</Navigate>

			<Footer />
		</div>
	);
};

export default ActualizarPedido