import React from "react";
import Footer from "../../components/Footer/Footer"
import Navigate, { Notificacion, Retroceder, Titulo } from "../../components/UI/navbar/navbar";

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